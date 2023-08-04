import { ApiPromise } from "@polkadot/api";
import { Header, BlockHash } from "@polkadot/types/interfaces";
import { ExtrinsicData } from "../types";
import { BLOCK_TIME_SECONDS } from "../utils";

/**
 * @category BTC Bridge
 */
export interface SystemAPI {
    /**
     * @returns The current block number being processed.
     */
    getCurrentBlockNumber(): Promise<number>;

    /**
     * @returns The current active block number being processed.
     */
    getCurrentActiveBlockNumber(atBlock?: BlockHash): Promise<number>;

    /**
     * On every new parachain block, call the callback function with the new block header
     * @param callback Function to be called with every new block header
     */
    subscribeToFinalizedBlockHeads(callback: (blockHeader: Header) => void): Promise<() => void>;

    /**
     * On every new parachain block, call the callback function with the new block header
     * @param callback Function to be called with every new unfinalized block header
     */
    subscribeToCurrentBlockHeads(callback: (blockHeader: Header) => void): Promise<() => void>;

    /**
     * @remarks Upgrades runtime using `sudoUncheckedWeight`
     * @param code Hex-encoded wasm blob
     * @returns {ExtrinsicData} A submittable extrinsic and an event that is emitted when extrinsic is submitted.
     */
    setCode(code: string): ExtrinsicData;

    /**
     * @param blockNumber The block number to get the hash for
     * @returns The block hash for the given block number
     */
    getBlockHash(blockNumber: number): Promise<BlockHash>;

    /**
     * Get number of block that will added in amount of seconds from now.
     *
     * @note Based on approximate block time of 12 seconds.
     * @param api Polkadot ApiPromise object.
     * @param secondsFromNow Amount of seconds in the future.
     * @returns Number of block added in future.
     */
    getFutureBlockNumber(secondsFromNow: number): Promise<number>;
}

export class DefaultSystemAPI implements SystemAPI {
    constructor(private api: ApiPromise) {}

    async getCurrentBlockNumber(): Promise<number> {
        return (await this.api.query.system.number()).toNumber();
    }

    async getCurrentActiveBlockNumber(atBlock?: BlockHash): Promise<number> {
        const blockHash = atBlock || (await this.api.rpc.chain.getFinalizedHead());
        const api = await this.api.at(blockHash);
        return (await api.query.security.activeBlockCount()).toNumber();
    }

    async subscribeToFinalizedBlockHeads(callback: (blockHeader: Header) => void): Promise<() => void> {
        const unsub = await this.api.rpc.chain.subscribeFinalizedHeads((head) => {
            callback(head);
        });
        return unsub;
    }

    async subscribeToCurrentBlockHeads(callback: (blockHeader: Header) => void): Promise<() => void> {
        const unsub = await this.api.rpc.chain.subscribeAllHeads((head) => {
            callback(head);
        });
        return unsub;
    }

    setCode(code: string): ExtrinsicData {
        const tx = this.api.tx.sudo.sudoUncheckedWeight(this.api.tx.system.setCode(code), "0");
        return { extrinsic: tx, event: this.api.events.system.CodeUpdated };
    }

    async getBlockHash(blockNumber: number): Promise<BlockHash> {
        return await this.api.query.system.blockHash(blockNumber);
    }

    async getFutureBlockNumber(secondsFromNow: number): Promise<number> {
        const currentBlock = await this.getCurrentBlockNumber();
        const differenceInBlocks = Math.round(secondsFromNow / BLOCK_TIME_SECONDS);

        return currentBlock + differenceInBlocks;
    }
}
