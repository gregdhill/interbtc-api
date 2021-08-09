[@interlay/interbtc](/README.md) / [Exports](/modules.md) / BTCRelayAPI

# Interface: BTCRelayAPI

## Implemented by

- [`DefaultBTCRelayAPI`](/classes/DefaultBTCRelayAPI.md)

## Table of contents

### Methods

- [getLatestBlock](/interfaces/BTCRelayAPI.md#getlatestblock)
- [getLatestBlockHeight](/interfaces/BTCRelayAPI.md#getlatestblockheight)
- [getStableBitcoinConfirmations](/interfaces/BTCRelayAPI.md#getstablebitcoinconfirmations)
- [getStableParachainConfirmations](/interfaces/BTCRelayAPI.md#getstableparachainconfirmations)
- [verifyTransactionInclusion](/interfaces/BTCRelayAPI.md#verifytransactioninclusion)

## Methods

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`H256Le`\>

#### Returns

`Promise`<`H256Le`\>

The raw transaction data, represented as a Buffer object

#### Defined in

[src/parachain/btc-relay.ts:25](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L25)

___

### getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The height of the latest Bitcoin block that was rekayed by the BTC-Relay

#### Defined in

[src/parachain/btc-relay.ts:29](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L29)

___

### getStableBitcoinConfirmations

▸ **getStableBitcoinConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on Bitcoin

#### Defined in

[src/parachain/btc-relay.ts:16](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L16)

___

### getStableParachainConfirmations

▸ **getStableParachainConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on the parachain

#### Defined in

[src/parachain/btc-relay.ts:21](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L21)

___

### verifyTransactionInclusion

▸ **verifyTransactionInclusion**(`txid`, `confirmations?`): `Promise`<`void`\>

Verifies the inclusion of a transaction with `txid` in the Bitcoin blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |
| `confirmations?` | `number` | The number of block confirmations needed to accept the inclusion proof. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/btc-relay.ts:36](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L36)
