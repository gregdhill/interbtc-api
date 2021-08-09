[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultSystemAPI

# Class: DefaultSystemAPI

## Implements

- [`SystemAPI`](/interfaces/SystemAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultSystemAPI.md#constructor)

### Methods

- [getCurrentActiveBlockNumber](/classes/DefaultSystemAPI.md#getcurrentactiveblocknumber)
- [getCurrentBlockNumber](/classes/DefaultSystemAPI.md#getcurrentblocknumber)
- [subscribeToNewBlockHeads](/classes/DefaultSystemAPI.md#subscribetonewblockheads)

## Constructors

### constructor

• **new DefaultSystemAPI**(`api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |

#### Defined in

[src/parachain/system.ts:25](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/system.ts#L25)

## Methods

### getCurrentActiveBlockNumber

▸ **getCurrentActiveBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The current active block number being processed.

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[getCurrentActiveBlockNumber](/interfaces/SystemAPI.md#getcurrentactiveblocknumber)

#### Defined in

[src/parachain/system.ts:32](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/system.ts#L32)

___

### getCurrentBlockNumber

▸ **getCurrentBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The current block number being processed.

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[getCurrentBlockNumber](/interfaces/SystemAPI.md#getcurrentblocknumber)

#### Defined in

[src/parachain/system.ts:27](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/system.ts#L27)

___

### subscribeToNewBlockHeads

▸ **subscribeToNewBlockHeads**(`callback`): `Promise`<`fn`\>

On every new parachain block, call the callback function with the new block header

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` |

#### Returns

`Promise`<`fn`\>

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[subscribeToNewBlockHeads](/interfaces/SystemAPI.md#subscribetonewblockheads)

#### Defined in

[src/parachain/system.ts:37](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/system.ts#L37)
