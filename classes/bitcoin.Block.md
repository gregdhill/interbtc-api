[@interlay/interbtc](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / Block

# Class: Block

[bitcoin](/modules/bitcoin.md).Block

## Table of contents

### Constructors

- [constructor](/classes/bitcoin.Block.md#constructor)

### Properties

- [\_\_checkMerkleRoot](/classes/bitcoin.Block.md#__checkmerkleroot)
- [\_\_checkWitnessCommit](/classes/bitcoin.Block.md#__checkwitnesscommit)
- [bits](/classes/bitcoin.Block.md#bits)
- [merkleRoot](/classes/bitcoin.Block.md#merkleroot)
- [nonce](/classes/bitcoin.Block.md#nonce)
- [prevHash](/classes/bitcoin.Block.md#prevhash)
- [timestamp](/classes/bitcoin.Block.md#timestamp)
- [transactions](/classes/bitcoin.Block.md#transactions)
- [version](/classes/bitcoin.Block.md#version)
- [witnessCommit](/classes/bitcoin.Block.md#witnesscommit)

### Methods

- [byteLength](/classes/bitcoin.Block.md#bytelength)
- [checkProofOfWork](/classes/bitcoin.Block.md#checkproofofwork)
- [checkTxRoots](/classes/bitcoin.Block.md#checktxroots)
- [getHash](/classes/bitcoin.Block.md#gethash)
- [getId](/classes/bitcoin.Block.md#getid)
- [getUTCDate](/classes/bitcoin.Block.md#getutcdate)
- [getWitnessCommit](/classes/bitcoin.Block.md#getwitnesscommit)
- [hasWitness](/classes/bitcoin.Block.md#haswitness)
- [hasWitnessCommit](/classes/bitcoin.Block.md#haswitnesscommit)
- [toBuffer](/classes/bitcoin.Block.md#tobuffer)
- [toHex](/classes/bitcoin.Block.md#tohex)
- [weight](/classes/bitcoin.Block.md#weight)
- [calculateMerkleRoot](/classes/bitcoin.Block.md#calculatemerkleroot)
- [calculateTarget](/classes/bitcoin.Block.md#calculatetarget)
- [fromBuffer](/classes/bitcoin.Block.md#frombuffer)
- [fromHex](/classes/bitcoin.Block.md#fromhex)

## Constructors

### constructor

• **new Block**()

## Properties

### \_\_checkMerkleRoot

• `Private` **\_\_checkMerkleRoot**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:27

___

### \_\_checkWitnessCommit

• `Private` **\_\_checkWitnessCommit**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:28

___

### bits

• **bits**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:12

___

### merkleRoot

• `Optional` **merkleRoot**: `Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:9

___

### nonce

• **nonce**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:13

___

### prevHash

• `Optional` **prevHash**: `Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:8

___

### timestamp

• **timestamp**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:10

___

### transactions

• `Optional` **transactions**: [`Transaction`](/classes/bitcoin.Transaction.md)[]

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:14

___

### version

• **version**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:7

___

### witnessCommit

• `Optional` **witnessCommit**: `Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:11

## Methods

### byteLength

▸ **byteLength**(`headersOnly?`, `allowWitness?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headersOnly?` | `boolean` |
| `allowWitness?` | `boolean` |

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:19

___

### checkProofOfWork

▸ **checkProofOfWork**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:26

___

### checkTxRoots

▸ **checkTxRoots**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:25

___

### getHash

▸ **getHash**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:20

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:21

___

### getUTCDate

▸ **getUTCDate**(): `Date`

#### Returns

`Date`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:22

___

### getWitnessCommit

▸ **getWitnessCommit**(): ``null`` \| `Buffer`

#### Returns

``null`` \| `Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:15

___

### hasWitness

▸ **hasWitness**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:17

___

### hasWitnessCommit

▸ **hasWitnessCommit**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:16

___

### toBuffer

▸ **toBuffer**(`headersOnly?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headersOnly?` | `boolean` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:23

___

### toHex

▸ **toHex**(`headersOnly?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headersOnly?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:24

___

### weight

▸ **weight**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:18

___

### calculateMerkleRoot

▸ `Static` **calculateMerkleRoot**(`transactions`, `forWitness?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | [`Transaction`](/classes/bitcoin.Transaction.md)[] |
| `forWitness?` | `boolean` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:6

___

### calculateTarget

▸ `Static` **calculateTarget**(`bits`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | `number` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:5

___

### fromBuffer

▸ `Static` **fromBuffer**(`buffer`): [`Block`](/classes/bitcoin.Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

[`Block`](/classes/bitcoin.Block.md)

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:3

___

### fromHex

▸ `Static` **fromHex**(`hex`): [`Block`](/classes/bitcoin.Block.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`Block`](/classes/bitcoin.Block.md)

#### Defined in

node_modules/bitcoinjs-lib/types/block.d.ts:4
