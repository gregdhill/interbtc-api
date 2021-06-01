import { ApiPromise } from "@polkadot/api";
import { AccountId, H256, Balance } from "@polkadot/types/interfaces";
import { AddressOrPair } from "@polkadot/api/types";
import Big from "big.js";
import BN from "bn.js";
import { Network } from "bitcoinjs-lib";

import {
    Vault,
    IssueRequest,
    RedeemRequest,
    ReplaceRequest,
    Wallet,
    SystemVault,
    BalanceWrapper
} from "../interfaces/default";
import {
    FIXEDI128_SCALING_FACTOR,
    planckToDOT,
    decodeFixedPointType,
    encodeBtcAddress,
    satToBTC,
    dotToPlanck,
    btcToSat,
    computeReward,
} from "../utils";
import { CollateralAPI, DefaultCollateralAPI } from "./collateral";
import { DefaultOracleAPI, OracleAPI } from "./oracle";
import { IssueRequestExt, encodeIssueRequest } from "./issue";
import { RedeemRequestExt, encodeRedeemRequest } from "./redeem";
import { ReplaceRequestExt, encodeReplaceRequest } from "./replace";
import { DefaultFeeAPI, FeeAPI } from "./fee";
import { DefaultTransactionAPI, TransactionAPI } from "./transaction";

export interface WalletExt {
    // network encoded btc addresses
    publicKey: string;
    btcAddress?: string;
    addresses: Array<string>;
}

export interface VaultExt extends Omit<Vault, "wallet"> {
    wallet: WalletExt;
}

function encodeWallet(wallet: Wallet, network: Network): WalletExt {
    const { addresses, public_key } = wallet;

    const btcAddresses: Array<string> = [];
    for (const value of addresses.values()) {
        btcAddresses.push(encodeBtcAddress(value, network));
    }

    return {
        publicKey: public_key.toString(),
        addresses: btcAddresses,
    };
}

export function encodeVault(vault: Vault, network: Network): VaultExt {
    const { wallet, ...obj } = vault;
    return Object.assign(
        {
            wallet: encodeWallet(wallet, network),
        },
        obj
    ) as VaultExt;
}

/**
 * @category PolkaBTC Bridge
 * The type Big represents DOT or PolkaBTC denominations,
 * while the type BN represents Planck or Satoshi denominations.
 */
export interface VaultsAPI extends TransactionAPI {
    /**
     * @returns An array containing the vaults with non-zero backing collateral
     */
    list(): Promise<VaultExt[]>;
    /**
     * Fetch the issue requests associated with a vault
     *
     * @param vaultId - The AccountId of the vault used to filter issue requests
     * @returns A map with issue ids to issue requests involving said vault
     */
    mapIssueRequests(vaultId: AccountId): Promise<Map<H256, IssueRequestExt>>;
    /**
     * Fetch the redeem requests associated with a vault
     *
     * @param vaultId - The AccountId of the vault used to filter redeem requests
     * @returns A map with redeem ids to redeem requests involving said vault
     */
    mapRedeemRequests(vaultId: AccountId): Promise<Map<H256, RedeemRequestExt>>;
    /**
     * Fetch the replace requests associated with a vault. In the returned requests,
     * the vault is either the replaced or the replacing one.
     *
     * @param vaultId - The AccountId of the vault used to filter replace requests
     * @returns A map with replace ids to replace requests involving said vault as new vault and old vault
     */
    mapReplaceRequests(vaultId: AccountId): Promise<Map<H256, ReplaceRequestExt>>;
    /**
     * @param vaultId The ID of the vault to fetch
     * @returns A vault object
     */
    get(vaultId: AccountId): Promise<VaultExt>;
    /**
     * Get the collateralization of a single vault measured by the amount of issued PolkaBTC
     * divided by the total locked DOT collateral.
     *
     * @remarks Undefined collateralization is handled as infinite collateralization in the UI.
     * If no tokens have been issued, the `collateralFunds / issuedFunds` ratio divides by zero,
     * which means collateralization is infinite.
     * @param vaultId the vault account id
     * @param newCollateral use this instead of the vault's actual collateral
     * @param onlyIssued optional, defaults to `false`. Specifies whether the collateralization
     * should only include the issued tokens, leaving out unsettled ("to-be-issued") tokens
     * @returns the vault collateralization
     */
    getVaultCollateralization(vaultId: AccountId, newCollateral?: Big, onlyIssued?: boolean): Promise<Big | undefined>;
    /**
     * Get the total system collateralization measured by the amount of issued PolkaBTC
     * divided by the total locked DOT collateral.
     *
     * @returns The total system collateralization
     */
    getSystemCollateralization(): Promise<Big | undefined>;
    /**
     * Get the amount of collateral required for the given vault to be at the
     * current SecureCollateralThreshold with the current exchange rate
     *
     * @param vaultId The vault account ID
     * @returns The required collateral the vault needs to deposit to stay
     * above the threshold limit
     */
    getRequiredCollateralForVault(vaultId: AccountId): Promise<Big>;
    /**
     * Get the minimum amount of collateral required for the given amount of btc
     * with the current threshold and exchange rate
     *
     * @param amount Amount to issue, denominated in BTC
     * @returns The required collateral for issuing, denominated in DOT
     */
    getRequiredCollateralForWrapped(amount: Big): Promise<Big>;
    /**
     * @param vaultId The vault account ID
     * @returns The amount of PolkaBTC issued by the given vault
     */
    getIssuedAmount(vaultId: AccountId): Promise<Big>;
    /**
     * @returns The total amount of PolkaBTC issued by the vaults
     */
    getTotalIssuedPolkaBTCAmount(): Promise<Big>;
    /**
     * @returns The total amount of PolkaBTC that can be issued, considering the DOT
     * locked by the vaults
     */
    getIssuablePolkaBTC(): Promise<string>;
    /**
     * @param amount PolkaBTC amount to issue
     * @returns A vault that has sufficient DOT collateral to issue the given PolkaBTC amount
     */
    selectRandomVaultIssue(amount: Big): Promise<AccountId>;
    /**
     * @param amount PolkaBTC amount to redeem
     * @returns A vault that has issued sufficient PolkaBTC to redeem the given PolkaBTC amount
     */
    selectRandomVaultRedeem(amount: Big): Promise<AccountId>;
    /**
     * @returns Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens
     */
    getPremiumRedeemVaults(): Promise<Map<AccountId, Big>>;
    /**
     * @returns Vaults with issuable tokens, sorted in descending order of this value
     */
    getVaultsWithIssuableTokens(): Promise<Map<AccountId, Big>>;
    /**
     * @returns Vaults with redeemable tokens, sorted in descending order of this value
     */
    getVaultsWithRedeemableTokens(): Promise<Map<AccountId, Big>>;
    /**
     * @param vaultId The vault account ID
     * @returns A bollean value
     */
    isVaultFlaggedForTheft(vaultId: AccountId): Promise<boolean>;
    /**
     * @returns The lower bound for the collateral rate in PolkaBTC.
     * If a Vault’s collateral rate
     * drops below this, automatic liquidation (forced Redeem) is triggered.
     */
    getLiquidationCollateralThreshold(): Promise<Big>;
    /**
     * @returns The collateral rate of Vaults at which users receive
     * a premium in DOT, allocated from the
     * Vault’s collateral, when performing a redeem with this Vault.
     */
    getPremiumRedeemThreshold(): Promise<Big>;
    /**
     * @returns The over-collateralization rate for DOT collateral locked
     * by Vaults, necessary for issuing PolkaBTC
     */
    getSecureCollateralThreshold(): Promise<Big>;
    /**
     * @param vaultId The vault account ID
     * @returns The total PolkaBTC reward collected by the vault
     */
    getFeesWrapped(vaultId: AccountId): Promise<Big>;
    /**
     * @param vaultId The vault account ID
     * @returns The total DOT reward collected by the vault
     */
    getFeesCollateral(vaultId: AccountId): Promise<Big>;
    /**
     * Get the total APY for a vault based on the income in PolkaBTC and DOT
     * divided by the locked DOT.
     *
     * @note this does not account for interest compounding
     *
     * @param vaultId the id of the vault
     * @returns the APY as a percentage string
     */
    getAPY(vaultId: AccountId): Promise<string>;
    /**
     * @param vaultId The vault account ID
     * @returns The SLA score of the given vault, an integer in the range [0, MaxSLA]
     */
    getSLA(vaultId: AccountId): Promise<string>;
    /**
     * @returns The maximum SLA score, a positive integer
     */
    getMaxSLA(): Promise<string>;
    /**
     * @returns Fee that a Vault has to pay if it fails to execute redeem or replace requests
     * (for redeem, on top of the slashed BTC-in-DOT value of the request). The fee is
     * paid in DOT based on the PolkaBTC amount at the current exchange rate.
     */
    getPunishmentFee(): Promise<string>;
    /**
     * @returns Total PolkaBTC that the total collateral in the system can back.
     * If every vault is properly collateralized, this value is equivalent to the sum of
     * issued PolkaBTC and issuable PolkaBTC
     */
    getPolkaBTCCapacity(): Promise<string>;
    /**
     * Set an account to use when sending transactions from this API
     * @param account Keyring account
     */
    setAccount(account: AddressOrPair): void;
    /**
     * @param amount Value to withdraw from staking
     */
    withdrawCollateral(amount: Big): Promise<void>;
    /**
     * @param amount Value to increase stake by
     */
    lockAdditionalCollateral(amount: Big): Promise<void>;
    /**
     * @returns The account id of the liquidation vault
     */
    getLiquidationVaultId(): Promise<string>;
    /**
    * @returns A vault object representing the liquidation vault
    */
    getLiquidationVault(): Promise<SystemVault>;
}

export class DefaultVaultsAPI extends DefaultTransactionAPI implements VaultsAPI {
    granularity = 5;
    private btcNetwork: Network;
    collateralAPI: CollateralAPI;
    oracleAPI: OracleAPI;
    feeAPI: FeeAPI;

    constructor(api: ApiPromise, btcNetwork: Network, account?: AddressOrPair) {
        super(api, account);
        this.btcNetwork = btcNetwork;
        this.collateralAPI = new DefaultCollateralAPI(api);
        this.oracleAPI = new DefaultOracleAPI(api);
        this.feeAPI = new DefaultFeeAPI(api);
    }

    async register(planckCollateral: BN, publicKey: string): Promise<void> {
        const tx = this.api.tx.vaultRegistry.registerVault(planckCollateral, publicKey);
        await this.sendLogged(tx, this.api.events.vaultRegistry.RegisterVault);
    }

    async withdrawCollateral(amount: Big): Promise<void> {
        const amountAsPlanck = this.api.createType("Collateral", dotToPlanck(amount.toString()) as string);
        const tx = this.api.tx.vaultRegistry.withdrawCollateral(amountAsPlanck);
        await this.sendLogged(tx, this.api.events.vaultRegistry.WithdrawCollateral);
    }

    async lockAdditionalCollateral(amount: Big): Promise<void> {
        const amountAsPlanck = this.api.createType("Collateral", dotToPlanck(amount.toString()) as string);
        const tx = this.api.tx.vaultRegistry.lockAdditionalCollateral(amountAsPlanck);
        await this.sendLogged(tx, this.api.events.vaultRegistry.LockAdditionalCollateral);
    }

    async list(): Promise<VaultExt[]> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const vaultsMap = await this.api.query.vaultRegistry.vaults.entriesAt(head);
        return vaultsMap
            .map((v) => encodeVault(v[1], this.btcNetwork));
    }

    async mapIssueRequests(vaultId: AccountId): Promise<Map<H256, IssueRequestExt>> {
        try {
            const issueRequestPairs: [H256, IssueRequest][] = await this.api.rpc.issue.getVaultIssueRequests(vaultId);
            return new Map(issueRequestPairs.map(([id, req]) => [id, encodeIssueRequest(req, this.btcNetwork)]));
        } catch (err) {
            return Promise.reject(`Error during issue request retrieval: ${err}`);
        }
    }

    async mapRedeemRequests(vaultId: AccountId): Promise<Map<H256, RedeemRequestExt>> {
        try {
            const redeemRequestPairs: [H256, RedeemRequest][] = await this.api.rpc.redeem.getVaultRedeemRequests(
                vaultId
            );
            return new Map(redeemRequestPairs.map(([id, req]) => [id, encodeRedeemRequest(req, this.btcNetwork)]));
        } catch (err) {
            return Promise.reject(`Error during redeem request retrieval: ${err}`);
        }
    }

    async mapReplaceRequests(vaultId: AccountId): Promise<Map<H256, ReplaceRequestExt>> {
        try {
            const oldVaultReplaceRequests: [
                H256,
                ReplaceRequest
            ][] = await this.api.rpc.replace.getOldVaultReplaceRequests(vaultId);
            const oldVaultReplaceRequestsExt = oldVaultReplaceRequests.map(
                ([id, req]) => [id, encodeReplaceRequest(req, this.btcNetwork)] as [H256, ReplaceRequestExt]
            );
            const newVaultReplaceRequests: [
                H256,
                ReplaceRequest
            ][] = await this.api.rpc.replace.getNewVaultReplaceRequests(vaultId);
            const newVaultReplaceRequestsExt = newVaultReplaceRequests.map(
                ([id, req]) => [id, encodeReplaceRequest(req, this.btcNetwork)] as [H256, ReplaceRequestExt]
            );
            return new Map([...oldVaultReplaceRequestsExt, ...newVaultReplaceRequestsExt]);
        } catch (err) {
            return Promise.reject(`Error during replace request retrieval: ${err}`);
        }
    }

    async get(vaultId: AccountId): Promise<VaultExt> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const vault = await this.api.query.vaultRegistry.vaults.at(head, vaultId);
        if (!vaultId.eq(vault.id)) {
            throw new Error(`No vault registered with id ${vaultId}`);
        }
        return encodeVault(vault, this.btcNetwork);
    }

    async getLiquidationVaultId(): Promise<string> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const liquidationVaultId = await this.api.query.vaultRegistry.liquidationVaultAccountId.at(head);
        return liquidationVaultId.toString();
    }

    async getLiquidationVault(): Promise<SystemVault> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const liquidationVault = await this.api.query.vaultRegistry.liquidationVault.at(head);
        return liquidationVault;
    }

    private isNoTokensIssuedError(e: Error): boolean {
        return e.message.includes("NoTokensIssued");
    }

    async getVaultCollateralization(
        vaultId: AccountId,
        newCollateral?: Big,
        onlyIssued = false
    ): Promise<Big | undefined> {
        let collateralization = undefined;
        try {
            if (newCollateral) {
                const newCollateralPlanck = this.api.createType("Collateral", dotToPlanck(newCollateral.toString()) as string);
                collateralization = await this.api.rpc.vaultRegistry.getCollateralizationFromVaultAndCollateral(
                    vaultId,
                    this.wrapCurrency(newCollateralPlanck),
                    onlyIssued
                );
            } else {
                collateralization = await this.api.rpc.vaultRegistry.getCollateralizationFromVault(vaultId, onlyIssued);
            }
        } catch (e) {
            if (this.isNoTokensIssuedError(e)) {
                return Promise.resolve(undefined);
            }
            return Promise.reject(`Error during collateralization computation: ${(e as Error).message}`);
        }
        if (!collateralization) {
            return Promise.resolve(undefined);
        }
        return new Big(decodeFixedPointType(collateralization));
    }

    async getSystemCollateralization(): Promise<Big | undefined> {
        try {
            const collateralization = await this.api.rpc.vaultRegistry.getTotalCollateralization();
            return new Big(decodeFixedPointType(collateralization));
        } catch (e) {
            if (this.isNoTokensIssuedError(e)) {
                return Promise.resolve(undefined);
            }
            return Promise.reject("Error during collateralization computation");
        }
    }

    async getRequiredCollateralForVault(vaultId: AccountId): Promise<Big> {
        try {
            const dotWrapper: BalanceWrapper = await this.api.rpc.vaultRegistry.getRequiredCollateralForVault(vaultId);
            return new Big(planckToDOT(this.unwrapCurrency(dotWrapper).toString()));
        } catch (e) {
            return Promise.reject((e as Error).message);
        }
    }

    async getRequiredCollateralForWrapped(amount: Big): Promise<Big> {
        try {
            const amountSat = this.api.createType("BalanceWrapper", btcToSat(amount.toString()));
            const dotWrapper: BalanceWrapper = await this.api.rpc.vaultRegistry.getRequiredCollateralForWrapped(amountSat);
            return new Big(planckToDOT(this.unwrapCurrency(dotWrapper).toString()));
        } catch (e) {
            return Promise.reject((e as Error).message);
        }
    }

    async getIssuedAmount(vaultId: AccountId): Promise<Big> {
        const vault: VaultExt = await this.get(vaultId);
        return new Big(satToBTC(vault.issued_tokens.toString()));
    }

    private async getIssuedPolkaBTCAmounts(): Promise<Big[]> {
        const vaults: VaultExt[] = await this.list();
        const issuedTokens: Big[] = vaults.map((v) => new Big(satToBTC(v.issued_tokens.toString())));
        return issuedTokens;
    }

    async getTotalIssuedPolkaBTCAmount(): Promise<Big> {
        const issuedTokens: Big[] = await this.getIssuedPolkaBTCAmounts();
        if (issuedTokens.length) {
            const sumReducer = (accumulator: Big, currentValue: Big) =>
                accumulator.add(currentValue);
            return issuedTokens.reduce(sumReducer);
        }
        return new Big(0);
    }

    async getIssuablePolkaBTC(): Promise<string> {
        const polkaBTCCapacityString = await this.getPolkaBTCCapacity();
        const polkaBTCCapacityBig = new Big(polkaBTCCapacityString);
        const issuedPolkaBTCSatoshiString = (await this.getTotalIssuedPolkaBTCAmount()).toString();
        const issuedPolkaBTCString = satToBTC(issuedPolkaBTCSatoshiString);
        const issuedPolkaBTCBig = new Big(issuedPolkaBTCString);
        return polkaBTCCapacityBig.sub(issuedPolkaBTCBig).toString();
    }

    async getPolkaBTCCapacity(): Promise<string> {
        const totalLockedDot = await this.collateralAPI.totalLocked();
        const oracle = new DefaultOracleAPI(this.api);
        const exchangeRate = await oracle.getExchangeRate();
        const secureCollateralThreshold = await this.getSecureCollateralThreshold();
        return totalLockedDot.div(exchangeRate).div(secureCollateralThreshold).toString();
    }

    async selectRandomVaultIssue(amount: Big): Promise<AccountId> {
        try {
            const amountSat = this.api.createType("Wrapped", btcToSat(amount.toString()));
            // eslint-disable-next-line max-len
            const firstVaultWithSufficientCollateral = await this.api.rpc.vaultRegistry.getFirstVaultWithSufficientCollateral(
                this.wrapCurrency(amountSat)
            );
            return firstVaultWithSufficientCollateral;
        } catch (e) {
            return Promise.reject("Did not find vault with sufficient collateral");
        }
    }

    async selectRandomVaultRedeem(amount: Big): Promise<AccountId> {
        const amountSat = this.api.createType("Wrapped", btcToSat(amount.toString()));
        try {
            const firstVaultWithSufficientTokens = await this.api.rpc.vaultRegistry.getFirstVaultWithSufficientTokens(
                this.wrapCurrency(amountSat)
            );
            return firstVaultWithSufficientTokens;
        } catch (e) {
            return Promise.reject("Did not find vault with sufficient locked BTC");
        }
    }

    async getPremiumRedeemVaults(): Promise<Map<AccountId, Big>> {
        const customAPIRPC = this.api.rpc;
        try {
            const vaults = await customAPIRPC.vaultRegistry.getPremiumRedeemVaults();
            return new Map(
                vaults.map(([id, redeemableTokens]) => [id, new Big(satToBTC(this.unwrapCurrency(redeemableTokens).toString()))])
            );
        } catch (e) {
            return Promise.reject("Did not find vault below the premium redeem threshold");
        }
    }

    async getVaultsWithIssuableTokens(): Promise<Map<AccountId, Big>> {
        try {
            const vaults = await this.api.rpc.vaultRegistry.getVaultsWithIssuableTokens();
            return new Map(
                vaults.map(([id, issuableTokens]) => [id, new Big(satToBTC(this.unwrapCurrency(issuableTokens).toString()))])
            );
        } catch (e) {
            return Promise.reject("Did not find vault with issuable tokens");
        }
    }

    async getVaultsWithRedeemableTokens(): Promise<Map<AccountId, Big>> {
        try {
            const vaults = await this.api.rpc.vaultRegistry.getVaultsWithRedeemableTokens();
            return new Map(
                vaults.map(([id, redeemableTokens]) => [id, new Big(satToBTC(this.unwrapCurrency(redeemableTokens).toString()))])
            );
        } catch (e) {
            return Promise.reject("Did not find vault with redeemable tokens");
        }
    }

    async isVaultFlaggedForTheft(vaultId: AccountId): Promise<boolean> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const theftReports = await this.api.query.stakedRelayers.theftReports.at(head, vaultId);
        return theftReports.isEmpty;
    }

    async getLiquidationCollateralThreshold(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const threshold = await this.api.query.vaultRegistry.liquidationCollateralThreshold.at(head);
        return new Big(decodeFixedPointType(threshold));
    }

    async getPremiumRedeemThreshold(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const threshold = await this.api.query.vaultRegistry.premiumRedeemThreshold.at(head);
        return new Big(decodeFixedPointType(threshold));
    }

    async getSecureCollateralThreshold(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const threshold = await this.api.query.vaultRegistry.secureCollateralThreshold.at(head);
        return new Big(decodeFixedPointType(threshold));
    }

    async getFeesWrapped(vaultId: AccountId): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const stake = decodeFixedPointType(await this.api.query.wrappedVaultRewards.stake.at(head, vaultId));
        const rewardPerToken = decodeFixedPointType(await this.api.query.wrappedVaultRewards.rewardPerToken.at(head));
        const rewardTally = decodeFixedPointType(await this.api.query.wrappedVaultRewards.rewardTally.at(head, vaultId));
        const fees = computeReward(new Big(stake), new Big(rewardPerToken), new Big(rewardTally));
        return new Big(satToBTC(fees.toString()));
    }

    async getFeesCollateral(vaultId: AccountId): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const stake = decodeFixedPointType(await this.api.query.collateralVaultRewards.stake.at(head, vaultId));
        const rewardPerToken = decodeFixedPointType(await this.api.query.collateralVaultRewards.rewardPerToken.at(head));
        const rewardTally = decodeFixedPointType(await this.api.query.collateralVaultRewards.rewardTally.at(head, vaultId));
        const fees = computeReward(new Big(stake), new Big(rewardPerToken), new Big(rewardTally));
        return new Big(planckToDOT(fees.toString()));
    }

    async getAPY(vaultId: AccountId): Promise<string> {
        const [feesPolkaBTC, feesDOT, lockedDOT] = await Promise.all([
            await this.getFeesWrapped(vaultId),
            await this.getFeesCollateral(vaultId),
            await this.collateralAPI.balanceLocked(vaultId),
        ]);
        return this.feeAPI.calculateAPY(feesPolkaBTC, feesDOT, lockedDOT);
    }

    async getSLA(vaultId: AccountId): Promise<string> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const sla = await this.api.query.sla.vaultSla.at(head, vaultId);
        return decodeFixedPointType(sla);
    }

    async getMaxSLA(): Promise<string> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const maxSLA = await this.api.query.sla.relayerTargetSla.at(head);
        const maxSlaBig = new Big(maxSLA.toString());
        const divisor = new Big(Math.pow(10, FIXEDI128_SCALING_FACTOR));
        return maxSlaBig.div(divisor).toString();
    }

    /**
     * @returns Fee that a Vault has to pay if it fails to execute redeem or replace requests
     * (for redeem, on top of the slashed BTC-in-DOT value of the request). The fee is
     * paid in DOT based on the PolkaBTC amount at the current exchange rate.
     */
    async getPunishmentFee(): Promise<string> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const fee = await this.api.query.fee.punishmentFee.at(head);
        return decodeFixedPointType(fee);
    }

    private wrapCurrency(amount: Balance): BalanceWrapper {
        return {
            amount: this.api.createType("Text", amount.toString(10)),
        } as BalanceWrapper;
    }

    private unwrapCurrency(wrappedBalance: BalanceWrapper): Balance {
        return this.api.createType("Balance", wrappedBalance.amount.toString());
    }

}
