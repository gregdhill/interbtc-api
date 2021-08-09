[@interlay/interbtc](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / [ECPair](/modules/bitcoin.ECPair.md) / SignerAsync

# Interface: SignerAsync

[bitcoin](/modules/bitcoin.md).[ECPair](/modules/bitcoin.ECPair.md).SignerAsync

## Table of contents

### Properties

- [network](/interfaces/bitcoin.ECPair.SignerAsync.md#network)
- [publicKey](/interfaces/bitcoin.ECPair.SignerAsync.md#publickey)

### Methods

- [getPublicKey](/interfaces/bitcoin.ECPair.SignerAsync.md#getpublickey)
- [sign](/interfaces/bitcoin.ECPair.SignerAsync.md#sign)

## Properties

### network

• `Optional` **network**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:15

___

### publicKey

• **publicKey**: `Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:14

## Methods

### getPublicKey

▸ `Optional` **getPublicKey**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:17

___

### sign

▸ **sign**(`hash`, `lowR?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |
| `lowR?` | `boolean` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:16
