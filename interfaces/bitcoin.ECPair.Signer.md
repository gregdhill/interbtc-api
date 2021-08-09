[@interlay/interbtc](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / [ECPair](/modules/bitcoin.ECPair.md) / Signer

# Interface: Signer

[bitcoin](/modules/bitcoin.md).[ECPair](/modules/bitcoin.ECPair.md).Signer

## Hierarchy

- **`Signer`**

  ↳ [`ECPairInterface`](/interfaces/bitcoin.ECPair.ECPairInterface.md)

## Table of contents

### Properties

- [network](/interfaces/bitcoin.ECPair.Signer.md#network)
- [publicKey](/interfaces/bitcoin.ECPair.Signer.md#publickey)

### Methods

- [getPublicKey](/interfaces/bitcoin.ECPair.Signer.md#getpublickey)
- [sign](/interfaces/bitcoin.ECPair.Signer.md#sign)

## Properties

### network

• `Optional` **network**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:9

___

### publicKey

• **publicKey**: `Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:8

## Methods

### getPublicKey

▸ `Optional` **getPublicKey**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:11

___

### sign

▸ **sign**(`hash`, `lowR?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |
| `lowR?` | `boolean` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:10
