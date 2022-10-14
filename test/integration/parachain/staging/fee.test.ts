import { ApiPromise, Keyring } from "@polkadot/api";
import { Bitcoin, ExchangeRate } from "@interlay/monetary-js";
import { assert } from "chai";
import Big from "big.js";

import { createSubstrateAPI } from "../../../../src/factory";
import { ESPLORA_BASE_PATH, ORACLE_URI, PARACHAIN_ENDPOINT } from "../../../config";
import {
    CollateralCurrencyExt,
    DefaultInterBtcApi,
    InterBtcApi,
    newMonetaryAmount,
    WrappedCurrency,
} from "../../../../src";
import { GriefingCollateralType } from "../../../../src/parachain/fee";
import { callWithExchangeRate, getCorrespondingCollateralCurrenciesForTests } from "../../../utils/helpers";

describe("fee", () => {
    let api: ApiPromise;
    let oracleInterBtcAPI: InterBtcApi;
    let collateralCurrencies: Array<CollateralCurrencyExt>;
    let wrappedCurrency: WrappedCurrency;

    before(async function () {
        api = await createSubstrateAPI(PARACHAIN_ENDPOINT);
        const keyring = new Keyring({ type: "sr25519" });
        const oracleAccount = keyring.addFromUri(ORACLE_URI);
        oracleInterBtcAPI = new DefaultInterBtcApi(api, "regtest", oracleAccount, ESPLORA_BASE_PATH);
        collateralCurrencies = getCorrespondingCollateralCurrenciesForTests(oracleInterBtcAPI.getGovernanceCurrency());
        wrappedCurrency = oracleInterBtcAPI.getWrappedCurrency();
    });

    after(async () => {
        api.disconnect();
    });

    it("should check getReplaceGriefingCollateralRate", async () => {
        const replaceGriefingCollateralRate = await oracleInterBtcAPI.fee.getReplaceGriefingCollateralRate();
        assert.equal(replaceGriefingCollateralRate.toString(), "0.1");
    }).timeout(2000000);

    // TODO: re-enable and use mocking (see getPremiumRedeemVaults test for example)
    it.skip("should getGriefingCollateral for issue", async () => {
        for (const collateralCurrency of collateralCurrencies) {
            const exchangeRateValue = new Big("3855.23187");
            const exchangeRate = new ExchangeRate<Bitcoin, typeof collateralCurrency>(
                Bitcoin,
                collateralCurrency,
                exchangeRateValue
            );
            await callWithExchangeRate(oracleInterBtcAPI.oracle, exchangeRate, async () => {
                const amountBtc = newMonetaryAmount(0.001, wrappedCurrency, true);
                const griefingCollateral = await oracleInterBtcAPI.fee.getGriefingCollateral(
                    amountBtc,
                    GriefingCollateralType.Issue
                );
                assert.equal(griefingCollateral.toBig().round(5, 0).toString(), "0.00001");
            });
        }
    }).timeout(2 * 200000);

    // TODO: re-enable and use mocking (see getPremiumRedeemVaults test for example)
    it.skip("should getGriefingCollateral for replace", async () => {
        for (const collateralCurrency of collateralCurrencies) {
            const exchangeRateValue = new Big("3855.23187");
            const exchangeRate = new ExchangeRate<Bitcoin, typeof collateralCurrency>(
                Bitcoin,
                collateralCurrency,
                exchangeRateValue
            );
            await callWithExchangeRate(oracleInterBtcAPI.oracle, exchangeRate, async () => {
                const amountToReplace = newMonetaryAmount(0.728, wrappedCurrency, true);
                const griefingCollateral = await oracleInterBtcAPI.fee.getGriefingCollateral(
                    amountToReplace,
                    GriefingCollateralType.Replace
                );
                assert.equal(griefingCollateral.toString(), "16.744");
            });
        }
    }).timeout(2 * 200000);
});
