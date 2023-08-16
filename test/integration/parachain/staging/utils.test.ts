import { ApiPromise } from "@polkadot/api";
import { xxhashAsHex, blake2AsHex } from "@polkadot/util-crypto";
import { bnToHex } from "@polkadot/util";
import BN from "bn.js";

import { createSubstrateAPI } from "../../../../src/factory";
import { assert } from "chai";
import { PARACHAIN_ENDPOINT } from "../../../config";
import { stripHexPrefix } from "../../../../src/utils";

export function getStorageKey(moduleName: string, storageItemName: string): string {
    return xxhashAsHex(moduleName, 128) + stripHexPrefix(xxhashAsHex(storageItemName, 128));
}

export function blake2_128Concat(data: `0x${string}`): string {
    return blake2AsHex(data, 128) + stripHexPrefix(data);
}

describe("Utils", () => {
    let api: ApiPromise;

    beforeAll(async () => {
        api = await createSubstrateAPI(PARACHAIN_ENDPOINT);
    });

    afterAll(() => {
        return api.disconnect();
    });

    it("should encode and decode exchange rate", async () => {
        const value = api.createType("UnsignedFixedPoint", "0x00000000000000000001000000000000");
        assert.equal(
            api.createType("UnsignedFixedPoint", value.toString()).toHex(true),
            value.toHex(true),
        );
    });

    it("should encode storage key", async () => {
        assert.equal(
            getStorageKey("Oracle", "MaxDelay"),
            api.query.oracle.maxDelay.key(),
        );
        assert.equal(
            getStorageKey("AssetRegistry", "Metadata"),
            api.query.assetRegistry.metadata.keyPrefix(),
        );
    });

    it("should encode storage value", async () => {
        const value = new BN(100);
        const data32 = bnToHex(value, { bitLength: 32, isLe: true });
        const codec32 = api.createType("u32", value);
        assert.equal(data32, codec32.toHex(true));

        const data64 = bnToHex(value, { bitLength: 64, isLe: true });
        const codec64 = api.createType("u64", value);
        assert.equal(data64, codec64.toHex(true));
    });
});
