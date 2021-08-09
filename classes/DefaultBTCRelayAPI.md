[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultBTCRelayAPI

# Class: DefaultBTCRelayAPI

## Implements

- [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultBTCRelayAPI.md#constructor)

### Methods

- [getLatestBlock](/classes/DefaultBTCRelayAPI.md#getlatestblock)
- [getLatestBlockHeight](/classes/DefaultBTCRelayAPI.md#getlatestblockheight)
- [getStableBitcoinConfirmations](/classes/DefaultBTCRelayAPI.md#getstablebitcoinconfirmations)
- [getStableParachainConfirmations](/classes/DefaultBTCRelayAPI.md#getstableparachainconfirmations)
- [verifyTransactionInclusion](/classes/DefaultBTCRelayAPI.md#verifytransactioninclusion)

## Constructors

### constructor

• **new DefaultBTCRelayAPI**(`api`, `electrsAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |

#### Defined in

[src/parachain/btc-relay.ts:40](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L40)

## Methods

### getLatestBlock

▸ **getLatestBlock**(): `Promise`<`H256Le`\>

#### Returns

`Promise`<`H256Le`\>

The raw transaction data, represented as a Buffer object

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[getLatestBlock](/interfaces/BTCRelayAPI.md#getlatestblock)

#### Defined in

[src/parachain/btc-relay.ts:52](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L52)

___

### getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The height of the latest Bitcoin block that was rekayed by the BTC-Relay

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[getLatestBlockHeight](/interfaces/BTCRelayAPI.md#getlatestblockheight)

#### Defined in

[src/parachain/btc-relay.ts:57](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L57)

___

### getStableBitcoinConfirmations

▸ **getStableBitcoinConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on Bitcoin

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[getStableBitcoinConfirmations](/interfaces/BTCRelayAPI.md#getstablebitcoinconfirmations)

#### Defined in

[src/parachain/btc-relay.ts:42](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L42)

___

### getStableParachainConfirmations

▸ **getStableParachainConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on the parachain

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[getStableParachainConfirmations](/interfaces/BTCRelayAPI.md#getstableparachainconfirmations)

#### Defined in

[src/parachain/btc-relay.ts:47](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L47)

___

### verifyTransactionInclusion

▸ **verifyTransactionInclusion**(`txid`, `confirmations?`): `Promise`<`void`\>

Verifies the inclusion of a transaction with `txid` in the Bitcoin blockchain

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |
| `confirmations` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[verifyTransactionInclusion](/interfaces/BTCRelayAPI.md#verifytransactioninclusion)

#### Defined in

[src/parachain/btc-relay.ts:62](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/btc-relay.ts#L62)
