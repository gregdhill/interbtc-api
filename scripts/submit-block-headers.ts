/* eslint @typescript-eslint/no-var-requires: "off" */
import { createSubstrateAPI } from "../src/factory";
import { Keyring } from "@polkadot/api";
import { u256 } from "@polkadot/types-codec";
import { cryptoWaitReady } from "@polkadot/util-crypto";

main().catch((err) => {
    console.log("Error thrown by script:");
    console.log(err);
});


async function main(): Promise<void> {
    await cryptoWaitReady();

    // const paraApi = await createSubstrateAPI("wss://api-kusama.interlay.io/parachain"); // 705600
    const paraApi = await createSubstrateAPI("wss://api.interlay.io/parachain"); // 735840
    // const paraApi = await createSubstrateAPI("ws://127.0.0.1:9944");

    // const keyring = new Keyring({ type: "sr25519" });
    // const keypair = keyring.addFromUri("//Alice");

    // const paymentInfo = await paraApi.tx.utility.batchAll([...Array(2016).keys()].map(_ => {
    //     return paraApi.tx.btcRelay.storeBlockHeader({}, 3);
    // })).paymentInfo(keypair);
    // console.log(paymentInfo.partialFee.toString());

    let targets = [];

    const bestHeight = (await paraApi.query.btcRelay.bestBlockHeight()).toNumber();
    let currentHeight = 0;
    while (currentHeight < bestHeight) {
        currentHeight += 2016;
        console.log(currentHeight);
        const hash = await paraApi.query.btcRelay.chainsHashes(0, currentHeight);
        const header = await paraApi.query.btcRelay.blockHeaders(hash);
        if (!header.blockHeight.isZero()) {
            // Difficulty = Difficulty Target / Current Target
            const difficultyTarget = paraApi.createType("u256", "26959535291011309493156476344723991336010898738574164086137773096960");
            const currentTarget = header.blockHeader.target;
            targets.push({ blockHeight: header.blockHeight, difficulty: difficultyTarget.div(currentTarget) });
        }
    }

    const smallest = targets.reduce((prev, curr) => prev.difficulty.lt(curr.difficulty) ? prev : curr);
    console.log(smallest.blockHeight.toHuman());
    console.log(smallest.difficulty.toString());

    await paraApi.disconnect();
}

// **Assessment**
// 
// Best Height: 803307
// Lowest Difficulty: 727776
// 
// 
// 
// 