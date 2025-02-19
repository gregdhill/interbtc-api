import { ApiPromise } from "@polkadot/api";
import { assert } from "chai";

import { ElectrsAPI, DefaultElectrsAPI } from "../../../../src/external/electrs";
import { createPolkadotAPI } from "../../../../src/factory";
import { DEFAULT_BITCOIN_CORE_HOST, DEFAULT_BITCOIN_CORE_NETWORK, DEFAULT_BITCOIN_CORE_PASSWORD, DEFAULT_BITCOIN_CORE_PORT, DEFAULT_BITCOIN_CORE_USERNAME, DEFAULT_BITCOIN_CORE_WALLET, DEFAULT_PARACHAIN_ENDPOINT } from "../../../config";
import { BitcoinCoreClient } from "../../../../src/utils/bitcoin-core-client";
import { REGTEST_ESPLORA_BASE_PATH } from "../../../../src";
import { BTCAmount } from "@interlay/monetary-js";

describe("ElectrsAPI regtest", function () {
    this.timeout(100000);

    let api: ApiPromise;
    let electrsAPI: ElectrsAPI;
    let bitcoinCoreClient: BitcoinCoreClient;

    before(async () => {
        api = await createPolkadotAPI(DEFAULT_PARACHAIN_ENDPOINT);
        electrsAPI = new DefaultElectrsAPI(REGTEST_ESPLORA_BASE_PATH);
        bitcoinCoreClient = new BitcoinCoreClient(
            DEFAULT_BITCOIN_CORE_NETWORK,
            DEFAULT_BITCOIN_CORE_HOST,
            DEFAULT_BITCOIN_CORE_USERNAME,
            DEFAULT_BITCOIN_CORE_PASSWORD,
            DEFAULT_BITCOIN_CORE_PORT,
            DEFAULT_BITCOIN_CORE_WALLET
        );
    });

    after(async () => {
        await api.disconnect();
    });

    it("should getTxIdByRecipientAddress", async () => {
        const recipientAddress = "bcrt1qefxeckts7tkgz7uach9dnwer4qz5nyehl4sjcc";
        const amount = BTCAmount.from.BTC(0.00022244);
        
        const txData = await bitcoinCoreClient.sendBtcTxAndMine(recipientAddress, amount, 6);
        const txid = await electrsAPI.getUtxoTxIdByRecipientAddress(recipientAddress, amount);
        assert.strictEqual(txid, txData.txid);
    });

    it("should getTxByOpreturn", async () => {
        const opReturnValue = "01234567891154267bf7d05901cc8c2f647414a42126c3aee89e01a2c905ae91";
        const recipientAddress = "bcrt1qefxeckts7tkgz7uach9dnwer4qz5nyehl4sjcc";
        const amount = BTCAmount.from.BTC(0.00029);

        const txData = await bitcoinCoreClient.sendBtcTxAndMine(recipientAddress, amount, 6, opReturnValue);
        const txid = await electrsAPI.getTxIdByOpReturn(opReturnValue, recipientAddress, amount);
        assert.strictEqual(txid, txData.txid);
    });

    it("should use getTxStatus to return correct confirmations", async () => {
        const opReturnValue = "01234567891154267bf7d05901cc8c2f647414a42126c3aee89e01a2c905ae91";
        const recipientAddress = "bcrt1qefxeckts7tkgz7uach9dnwer4qz5nyehl4sjcc";
        const amount = BTCAmount.from.BTC(0.00029);

        const txData = await bitcoinCoreClient.broadcastTx(recipientAddress, amount, opReturnValue);
        // transaction in mempool
        let status = await electrsAPI.getTransactionStatus(txData.txid);
        assert.strictEqual(status.confirmations, 0);

        // transaction in the latest block
        await bitcoinCoreClient.mineBlocks(1);
        status = await electrsAPI.getTransactionStatus(txData.txid);
        assert.strictEqual(status.confirmations, 1);

        // transaction in the parent of the latest block
        await bitcoinCoreClient.mineBlocks(1);
        status = await electrsAPI.getTransactionStatus(txData.txid);
        assert.strictEqual(status.confirmations, 2);
    });
});
