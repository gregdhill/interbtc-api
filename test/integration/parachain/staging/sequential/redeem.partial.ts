import { ApiPromise, Keyring } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { Hash } from "@polkadot/types/interfaces";
import {
    DefaultInterBtcApi,
    InterBtcApi,
    InterbtcPrimitivesVaultId,
    VaultRegistryVault,
} from "../../../../../src/index";
import { createSubstrateAPI } from "../../../../../src/factory";
import {
    BITCOIN_CORE_HOST,
    BITCOIN_CORE_NETWORK,
    BITCOIN_CORE_PASSWORD,
    BITCOIN_CORE_USERNAME,
    PARACHAIN_ENDPOINT,
    BITCOIN_CORE_WALLET,
    BITCOIN_CORE_PORT,
    USER_1_URI,
    VAULT_1_URI,
    VAULT_2_URI,
    ESPLORA_BASE_PATH,
} from "../../../../config";
import { issueAndRedeem, newMonetaryAmount } from "../../../../../src/utils";
import { BitcoinCoreClient } from "../../../../../src/utils/bitcoin-core-client";
import { newVaultId, WrappedCurrency } from "../../../../../src";
import { ExecuteRedeem } from "../../../../../src/utils/issueRedeem";
import { getAUSDForeignAsset, getCorrespondingCollateralCurrenciesForTests } from "../../../../utils/helpers";

export type RequestResult = { hash: Hash; vault: VaultRegistryVault };

export const redeemTests = () => {
    describe("redeem", () => {
        let api: ApiPromise;
        let keyring: Keyring;
        let userAccount: KeyringPair;
        let bitcoinCoreClient: BitcoinCoreClient;
        let vault_1: KeyringPair;
        let vault_2: KeyringPair;
        const collateralTickerToVaultIdsMap: Map<string, InterbtcPrimitivesVaultId[]> = new Map();
    
        let wrappedCurrency: WrappedCurrency;
    
        let interBtcAPI: InterBtcApi;
    
        beforeAll(async () => {
            api = await createSubstrateAPI(PARACHAIN_ENDPOINT);
            keyring = new Keyring({ type: "sr25519" });
            userAccount = keyring.addFromUri(USER_1_URI);
            interBtcAPI = new DefaultInterBtcApi(api, "regtest", userAccount, ESPLORA_BASE_PATH);
            wrappedCurrency = interBtcAPI.getWrappedCurrency();
    
            const collateralCurrencies = getCorrespondingCollateralCurrenciesForTests(interBtcAPI.getGovernanceCurrency());
            vault_1 = keyring.addFromUri(VAULT_1_URI);
            vault_2 = keyring.addFromUri(VAULT_2_URI);
    
            collateralCurrencies.forEach((collateralCurrency) => {
                const vault_1_id = newVaultId(api, vault_1.address, collateralCurrency, wrappedCurrency);
                const vault_2_id = newVaultId(api, vault_2.address, collateralCurrency, wrappedCurrency);
                collateralTickerToVaultIdsMap.set(collateralCurrency.ticker, [vault_1_id, vault_2_id]);
            });
    
            bitcoinCoreClient = new BitcoinCoreClient(
                BITCOIN_CORE_NETWORK,
                BITCOIN_CORE_HOST,
                BITCOIN_CORE_USERNAME,
                BITCOIN_CORE_PASSWORD,
                BITCOIN_CORE_PORT,
                BITCOIN_CORE_WALLET
            );
        });
    
        afterAll(async () => {
            await api.disconnect();
        });
    
        it("should issue and request redeem", async () => {
            // "usual" scope with hard coded collateral currency (or currencies)
            const vaultsInScope = Array.from(collateralTickerToVaultIdsMap.values());
    
            // add a pair of aUSD vaults to the list if aUSD has been registered
            const aUSD = await getAUSDForeignAsset(interBtcAPI.assetRegistry);
            if (aUSD !== undefined) {
                const vault_1_id_ausd = newVaultId(api, vault_1.address, aUSD, wrappedCurrency);
                const vault_2_id_ausd = newVaultId(api, vault_2.address, aUSD, wrappedCurrency);
                vaultsInScope.push([vault_1_id_ausd, vault_2_id_ausd]);
            }
    
            for (const [vault_1_id] of vaultsInScope) {
                const issueAmount = newMonetaryAmount(0.00005, wrappedCurrency, true);
                const redeemAmount = newMonetaryAmount(0.00003, wrappedCurrency, true);
    
                await issueAndRedeem(
                    interBtcAPI,
                    bitcoinCoreClient,
                    userAccount,
                    vault_1_id,
                    issueAmount,
                    redeemAmount,
                    false,
                    ExecuteRedeem.False
                );
            }
        }, 1000 * 90);
    
        it("should load existing redeem requests", async () => {
            const redeemRequests = await interBtcAPI.redeem.list();
            expect(redeemRequests.length).toBeGreaterThanOrEqual(1);
        });
    
        it("should get redeemBtcDustValue", async () => {
            const dust = await interBtcAPI.api.query.redeem.redeemBtcDustValue();
            expect(dust.toString()).toEqual("1000");
        });
    
        it("should getFeesToPay", async () => {
            const amount = newMonetaryAmount(2, wrappedCurrency, true);
            const feesToPay = await interBtcAPI.redeem.getFeesToPay(amount);
            expect(feesToPay.toString()).toEqual("0.01");
        });
    
        it("should getFeeRate", async () => {
            const feePercentage = await interBtcAPI.redeem.getFeeRate();
            expect(feePercentage.toString()).toEqual("0.005");
        });
    
        it("should getPremiumRedeemFeeRate", async () => {
            const premiumRedeemFee = await interBtcAPI.redeem.getPremiumRedeemFeeRate();
            expect(premiumRedeemFee.toString()).toEqual("0.05");
        });
    
        it("should getCurrentInclusionFee", async () => {
            const currentInclusionFee = await interBtcAPI.redeem.getCurrentInclusionFee();
            expect(!currentInclusionFee.isZero()).toBe(true);
        });
    
        it("should getDustValue", async () => {
            const dustValue = await interBtcAPI.redeem.getDustValue();
            expect(dustValue.toString()).toEqual("0.00001");
        });
    });
};
