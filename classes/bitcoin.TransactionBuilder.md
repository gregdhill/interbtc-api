[@interlay/interbtc](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / TransactionBuilder

# Class: TransactionBuilder

[bitcoin](/modules/bitcoin.md).TransactionBuilder

## Table of contents

### Constructors

- [constructor](/classes/bitcoin.TransactionBuilder.md#constructor)

### Properties

- [\_\_INPUTS](/classes/bitcoin.TransactionBuilder.md#__inputs)
- [\_\_PREV\_TX\_SET](/classes/bitcoin.TransactionBuilder.md#__prev_tx_set)
- [\_\_TX](/classes/bitcoin.TransactionBuilder.md#__tx)
- [\_\_USE\_LOW\_R](/classes/bitcoin.TransactionBuilder.md#__use_low_r)
- [\_\_addInputUnsafe](/classes/bitcoin.TransactionBuilder.md#__addinputunsafe)
- [\_\_build](/classes/bitcoin.TransactionBuilder.md#__build)
- [\_\_canModifyInputs](/classes/bitcoin.TransactionBuilder.md#__canmodifyinputs)
- [\_\_canModifyOutputs](/classes/bitcoin.TransactionBuilder.md#__canmodifyoutputs)
- [\_\_needsOutputs](/classes/bitcoin.TransactionBuilder.md#__needsoutputs)
- [\_\_overMaximumFees](/classes/bitcoin.TransactionBuilder.md#__overmaximumfees)
- [maximumFeeRate](/classes/bitcoin.TransactionBuilder.md#maximumfeerate)
- [network](/classes/bitcoin.TransactionBuilder.md#network)

### Methods

- [addInput](/classes/bitcoin.TransactionBuilder.md#addinput)
- [addOutput](/classes/bitcoin.TransactionBuilder.md#addoutput)
- [build](/classes/bitcoin.TransactionBuilder.md#build)
- [buildIncomplete](/classes/bitcoin.TransactionBuilder.md#buildincomplete)
- [setLockTime](/classes/bitcoin.TransactionBuilder.md#setlocktime)
- [setLowR](/classes/bitcoin.TransactionBuilder.md#setlowr)
- [setVersion](/classes/bitcoin.TransactionBuilder.md#setversion)
- [sign](/classes/bitcoin.TransactionBuilder.md#sign)
- [fromTransaction](/classes/bitcoin.TransactionBuilder.md#fromtransaction)

## Constructors

### constructor

• **new TransactionBuilder**(`network?`, `maximumFeeRate?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network?` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `maximumFeeRate?` | `number` |

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:21

## Properties

### \_\_INPUTS

• `Private` **\_\_INPUTS**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:18

___

### \_\_PREV\_TX\_SET

• `Private` **\_\_PREV\_TX\_SET**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:17

___

### \_\_TX

• `Private` **\_\_TX**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:19

___

### \_\_USE\_LOW\_R

• `Private` **\_\_USE\_LOW\_R**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:20

___

### \_\_addInputUnsafe

• `Private` **\_\_addInputUnsafe**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:30

___

### \_\_build

• `Private` **\_\_build**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:31

___

### \_\_canModifyInputs

• `Private` **\_\_canModifyInputs**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:32

___

### \_\_canModifyOutputs

• `Private` **\_\_canModifyOutputs**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:34

___

### \_\_needsOutputs

• `Private` **\_\_needsOutputs**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:33

___

### \_\_overMaximumFees

• `Private` **\_\_overMaximumFees**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:35

___

### maximumFeeRate

• **maximumFeeRate**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:15

___

### network

• **network**: [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:14

## Methods

### addInput

▸ **addInput**(`txHash`, `vout`, `sequence?`, `prevOutScript?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txHash` | `string` \| `Buffer` \| [`Transaction`](/classes/bitcoin.Transaction.md) |
| `vout` | `number` |
| `sequence?` | `number` |
| `prevOutScript?` | `Buffer` |

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:25

___

### addOutput

▸ **addOutput**(`scriptPubKey`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptPubKey` | `string` \| `Buffer` |
| `value` | `number` |

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:26

___

### build

▸ **build**(): [`Transaction`](/classes/bitcoin.Transaction.md)

#### Returns

[`Transaction`](/classes/bitcoin.Transaction.md)

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:27

___

### buildIncomplete

▸ **buildIncomplete**(): [`Transaction`](/classes/bitcoin.Transaction.md)

#### Returns

[`Transaction`](/classes/bitcoin.Transaction.md)

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:28

___

### setLockTime

▸ **setLockTime**(`locktime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locktime` | `number` |

#### Returns

`void`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:23

___

### setLowR

▸ **setLowR**(`setting?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:22

___

### setVersion

▸ **setVersion**(`version`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`void`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:24

___

### sign

▸ **sign**(`signParams`, `keyPair?`, `redeemScript?`, `hashType?`, `witnessValue?`, `witnessScript?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signParams` | `number` \| `TxbSignArg` |
| `keyPair?` | [`Signer`](/interfaces/bitcoin.ECPair.Signer.md) |
| `redeemScript?` | `Buffer` |
| `hashType?` | `number` |
| `witnessValue?` | `number` |
| `witnessScript?` | `Buffer` |

#### Returns

`void`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:29

___

### fromTransaction

▸ `Static` **fromTransaction**(`transaction`, `network?`): [`TransactionBuilder`](/classes/bitcoin.TransactionBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](/classes/bitcoin.Transaction.md) |
| `network?` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

[`TransactionBuilder`](/classes/bitcoin.TransactionBuilder.md)

#### Defined in

node_modules/bitcoinjs-lib/types/transaction_builder.d.ts:16
