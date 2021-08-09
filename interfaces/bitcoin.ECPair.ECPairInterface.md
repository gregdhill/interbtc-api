[@interlay/interbtc](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / [ECPair](/modules/bitcoin.ECPair.md) / ECPairInterface

# Interface: ECPairInterface

[bitcoin](/modules/bitcoin.md).[ECPair](/modules/bitcoin.ECPair.md).ECPairInterface

## Hierarchy

- [`Signer`](/interfaces/bitcoin.ECPair.Signer.md)

  ↳ **`ECPairInterface`**

## Table of contents

### Properties

- [compressed](/interfaces/bitcoin.ECPair.ECPairInterface.md#compressed)
- [lowR](/interfaces/bitcoin.ECPair.ECPairInterface.md#lowr)
- [network](/interfaces/bitcoin.ECPair.ECPairInterface.md#network)
- [privateKey](/interfaces/bitcoin.ECPair.ECPairInterface.md#privatekey)
- [publicKey](/interfaces/bitcoin.ECPair.ECPairInterface.md#publickey)

### Methods

- [getPublicKey](/interfaces/bitcoin.ECPair.ECPairInterface.md#getpublickey)
- [sign](/interfaces/bitcoin.ECPair.ECPairInterface.md#sign)
- [toWIF](/interfaces/bitcoin.ECPair.ECPairInterface.md#towif)
- [verify](/interfaces/bitcoin.ECPair.ECPairInterface.md#verify)

## Properties

### compressed

• **compressed**: `boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:20

___

### lowR

• **lowR**: `boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:22

___

### network

• **network**: [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Overrides

[Signer](/interfaces/bitcoin.ECPair.Signer.md).[network](/interfaces/bitcoin.ECPair.Signer.md#network)

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:21

___

### privateKey

• `Optional` **privateKey**: `Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:23

___

### publicKey

• **publicKey**: `Buffer`

#### Inherited from

[Signer](/interfaces/bitcoin.ECPair.Signer.md).[publicKey](/interfaces/bitcoin.ECPair.Signer.md#publickey)

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:8

## Methods

### getPublicKey

▸ `Optional` **getPublicKey**(): `Buffer`

#### Returns

`Buffer`

#### Inherited from

[Signer](/interfaces/bitcoin.ECPair.Signer.md).[getPublicKey](/interfaces/bitcoin.ECPair.Signer.md#getpublickey)

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

#### Inherited from

[Signer](/interfaces/bitcoin.ECPair.Signer.md).[sign](/interfaces/bitcoin.ECPair.Signer.md#sign)

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:10

___

### toWIF

▸ **toWIF**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:24

___

### verify

▸ **verify**(`hash`, `signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |
| `signature` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:25
