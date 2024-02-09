import { BN } from "bn.js";
import { createSubstrateAPI } from "../src";
import { printDiscordProposal } from "./util";

main().catch((err) => {
    console.log("Error thrown by script:");
    console.log(err);
});

async function main(): Promise<void> {
    const parachainEndpoint = "wss://api.interlay.io/parachain";
    const api = await createSubstrateAPI(parachainEndpoint);

    const token = { ForeignAsset: 3 };

    const treasuryAccount = Buffer.concat([
        Buffer.from("modl"), // 4 bytes
        Buffer.from("mod/trsy"), // 8 bytes
    ], 32);

    const totalIntrFromInterlay = new BN(3653000000000000);
    const totalIntrFromBifrost = new BN(5480000000000000);
    const totalIntr = totalIntrFromInterlay.add(totalIntrFromBifrost);

    const numBlocks = (60_000 / 12_000) * 60 * 24 * 30; // 30 days
    const supplyIncentivesPerBlock = totalIntr.divn(numBlocks);

    printDiscordProposal(
        "Bifrost Lending Incentives",
        api.tx.utility.batch([
            api.tx.loans.updateMarketRewardSpeed(token, supplyIncentivesPerBlock, 0),
            api.tx.utility.dispatchAs(
                { system: { Signed: treasuryAccount } },
                api.tx.loans.addReward(totalIntrFromInterlay)
            ),
            api.tx.scheduler.scheduleAfter(numBlocks - 1, null, 32, api.tx.loans.updateMarketRewardSpeed(token, 0, 0)),
        ]),
        parachainEndpoint,
        api
    );
}