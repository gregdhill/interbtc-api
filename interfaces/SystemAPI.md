[@interlay/interbtc](/README.md) / [Exports](/modules.md) / SystemAPI

# Interface: SystemAPI

## Implemented by

- [`DefaultSystemAPI`](/classes/DefaultSystemAPI.md)

## Table of contents

### Methods

- [getCurrentActiveBlockNumber](/interfaces/SystemAPI.md#getcurrentactiveblocknumber)
- [getCurrentBlockNumber](/interfaces/SystemAPI.md#getcurrentblocknumber)
- [subscribeToNewBlockHeads](/interfaces/SystemAPI.md#subscribetonewblockheads)

## Methods

### getCurrentActiveBlockNumber

▸ **getCurrentActiveBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The current active block number being processed.

#### Defined in

[src/parachain/system.ts:15](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/system.ts#L15)

___

### getCurrentBlockNumber

▸ **getCurrentBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The current block number being processed.

#### Defined in

[src/parachain/system.ts:11](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/system.ts#L11)

___

### subscribeToNewBlockHeads

▸ **subscribeToNewBlockHeads**(`callback`): `Promise`<`fn`\>

On every new parachain block, call the callback function with the new block header

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` | Function to be called with every new block header |

#### Returns

`Promise`<`fn`\>

#### Defined in

[src/parachain/system.ts:21](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/system.ts#L21)
