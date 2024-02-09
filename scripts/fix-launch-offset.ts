/* eslint @typescript-eslint/no-var-requires: "off" */
import { createSubstrateAPI } from "../src/factory";
import { ApiPromise } from "@polkadot/api";
import { cryptoWaitReady, blake2AsHex } from "@polkadot/util-crypto";
import fetch from "cross-fetch";

import { printDiscordProposal } from "./util";

main().catch((err) => {
    console.log("Error thrown by script:");
    console.log(err);
});

async function setAllClientReleases(api: ApiPromise, baseUrl: string, runtimeName: string) {
    const checksumFile = await fetch(baseUrl + "sha256sums.txt").then((res) => {
        if (!res.ok) {
            throw new Error("Bad response from server");
        }
        return res.text();
    });

    const regex = new RegExp(
        "([a-f0-9]+)\\s*[.]/((oracle|vault|faucet)-parachain-metadata-" + runtimeName + ")\n",
        "g"
    );
    const matches = [];
    let match;
    while ((match = regex.exec(checksumFile)) !== null) {
        matches.push([match[1], match[2], match[3]]);
    }

    return matches.map(([checksum, fullFileName, clientName]) => {
        return api.tx.clientsInfo.setCurrentClientRelease(clientName, {
            uri: baseUrl + fullFileName,
            checksum: "0x" + checksum,
        });
    });
}

async function main(): Promise<void> {
    await cryptoWaitReady();

    const clientsRepo = "https://github.com/interlay/interbtc-clients";
    const clientsVersion = "1.23.2";
    const clientsBaseUrl = `${clientsRepo}/releases/download/${clientsVersion}/`;

    const parachainEndpoint = "wss://api-kusama.interlay.io/parachain";
    const paraApi = await createSubstrateAPI(parachainEndpoint);
    const codec = paraApi.createType("u64", 1693818000);

    const tx = paraApi.tx.utility.batchAll([
        paraApi.tx.system.setStorage([[
            paraApi.query.democracy.nextLaunchTimestamp.key(),
            codec.toHex(true),
        ]]),
        ...await setAllClientReleases(paraApi, clientsBaseUrl, "kintsugi"),
    ]);
    printDiscordProposal("", tx, parachainEndpoint, paraApi);

    await paraApi.disconnect();
}
