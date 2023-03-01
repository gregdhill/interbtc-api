import { xxhashAsHex, blake2AsHex } from "@polkadot/util-crypto";
import { bnToHex } from "@polkadot/util";
import { StorageKey, Bytes } from "@polkadot/types/primitive";
import { ApiPromise } from "@polkadot/api";
import BN from "bn.js";
import { ITuple } from "@polkadot/types/types";
import { AddressOrPair, SubmittableExtrinsic } from "@polkadot/api/types";

import { stripHexPrefix } from "./encoding";
import { DefaultTransactionAPI } from "../parachain";

export function getStorageKey(moduleName: string, storageItemName: string): string {
    return xxhashAsHex(moduleName, 128) + stripHexPrefix(xxhashAsHex(storageItemName, 128));
}

export function blake2_128Concat(data: `0x${string}`): string {
    return blake2AsHex(data, 128) + stripHexPrefix(data);
}

export function getStorageMapItemKey(
    moduleName: string,
    storageItemName: string,
    mapItemKey: `0x${string}`,
    nestedMapItemKey?: `0x${string}`
): string {
    let storageKey = getStorageKey(moduleName, storageItemName) + stripHexPrefix(blake2_128Concat(mapItemKey));
    if (nestedMapItemKey) {
        storageKey += stripHexPrefix(blake2_128Concat(nestedMapItemKey));
    }
    return storageKey;
}

export async function setNumericStorage(
    api: ApiPromise,
    moduleName: string,
    storageItemName: string,
    value: BN,
    account: AddressOrPair,
    bits = 32,
    isLittleEndian = true
): Promise<void> {
    const data = bnToHex(value, { bitLength: bits, isLe: isLittleEndian });
    const tx = setStorageCall(api, moduleName, storageItemName, data);
    await DefaultTransactionAPI.sendLogged(api, account, tx, undefined, true);
}

export function setNumericStorageCall(
    api: ApiPromise,
    moduleName: string,
    storageItemName: string,
    value: BN,
    bits = 32,
    isLittleEndian = true
): SubmittableExtrinsic<"promise"> {
    const data = bnToHex(value, { bitLength: bits, isLe: isLittleEndian });
    return setStorageCall(api, moduleName, storageItemName, data);
}

export function setStorageCall(
    api: ApiPromise,
    moduleName: string,
    storageItemName: string,
    data: string,
): SubmittableExtrinsic<"promise"> {
    const key = getStorageKey(moduleName, storageItemName);
    const storageKey = api.createType("StorageKey", key);
    const storageData = api.createType("StorageData", data);
    return api.tx.sudo.sudo(
        api.tx.system.setStorage([
            [storageKey, storageData] as ITuple<[StorageKey, Bytes]>
        ])
    );
}

export async function setStorageAtKey(
    api: ApiPromise,
    key: string,
    data: `0x${string}`,
    sudoAccount: AddressOrPair
): Promise<void> {
    const tx = api.tx.sudo.sudo(api.tx.system.setStorage([[key, data]]));
    await DefaultTransactionAPI.sendLogged(api, sudoAccount, tx, undefined, true);
}

export async function setStorageAtKeyBatch(
    api: ApiPromise,
    newStorage: [string, `0x${string}`][],
    sudoAccount: AddressOrPair
): Promise<void> {
    const txs = newStorage.map((storage) => api.tx.sudo.sudo(api.tx.system.setStorage([storage])));
    const batchedTxs = api.tx.utility.batchAll(txs);
    await DefaultTransactionAPI.sendLogged(api, sudoAccount, batchedTxs, undefined, true);
}
