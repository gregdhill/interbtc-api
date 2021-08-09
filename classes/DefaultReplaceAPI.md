[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultReplaceAPI

# Class: DefaultReplaceAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultReplaceAPI`**

## Implements

- [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultReplaceAPI.md#constructor)

### Properties

- [api](/classes/DefaultReplaceAPI.md#api)
- [btcNetwork](/classes/DefaultReplaceAPI.md#btcnetwork)
- [feeAPI](/classes/DefaultReplaceAPI.md#feeapi)

### Methods

- [accept](/classes/DefaultReplaceAPI.md#accept)
- [execute](/classes/DefaultReplaceAPI.md#execute)
- [getAccount](/classes/DefaultReplaceAPI.md#getaccount)
- [getDustValue](/classes/DefaultReplaceAPI.md#getdustvalue)
- [getGriefingCollateral](/classes/DefaultReplaceAPI.md#getgriefingcollateral)
- [getReplacePeriod](/classes/DefaultReplaceAPI.md#getreplaceperiod)
- [getRequestIdFromEvents](/classes/DefaultReplaceAPI.md#getrequestidfromevents)
- [list](/classes/DefaultReplaceAPI.md#list)
- [map](/classes/DefaultReplaceAPI.md#map)
- [request](/classes/DefaultReplaceAPI.md#request)
- [sendLogged](/classes/DefaultReplaceAPI.md#sendlogged)
- [setAccount](/classes/DefaultReplaceAPI.md#setaccount)
- [withdraw](/classes/DefaultReplaceAPI.md#withdraw)
- [doesArrayContainEvent](/classes/DefaultReplaceAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultReplaceAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultReplaceAPI.md#printevents)
- [waitForEvent](/classes/DefaultReplaceAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultReplaceAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/replace.ts:85](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L85)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### btcNetwork

• `Private` **btcNetwork**: [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Defined in

[src/parachain/replace.ts:82](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L82)

___

### feeAPI

• `Private` **feeAPI**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/parachain/replace.ts:83](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L83)

## Methods

### accept

▸ **accept**(`oldVault`, `amount`, `collateral`, `btcAddress`): `Promise`<`void`\>

Accept a replace request

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldVault` | `AccountId` |
| `amount` | `BTCAmount` |
| `collateral` | `PolkadotAmount` |
| `btcAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[accept](/interfaces/ReplaceAPI.md#accept)

#### Defined in

[src/parachain/replace.ts:126](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L126)

___

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Execute a replace request

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[execute](/interfaces/ReplaceAPI.md#execute)

#### Defined in

[src/parachain/replace.ts:139](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L139)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getAccount](/interfaces/ReplaceAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

___

### getDustValue

▸ **getDustValue**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The minimum amount of btc that is accepted for replace requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getDustValue](/interfaces/ReplaceAPI.md#getdustvalue)

#### Defined in

[src/parachain/replace.ts:146](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L146)

___

### getGriefingCollateral

▸ **getGriefingCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The griefing collateral

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getGriefingCollateral](/interfaces/ReplaceAPI.md#getgriefingcollateral)

#### Defined in

[src/parachain/replace.ts:152](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L152)

___

### getReplacePeriod

▸ **getReplacePeriod**(): `Promise`<`BlockNumber`\>

#### Returns

`Promise`<`BlockNumber`\>

The time difference in number of blocks between when a replace request is created
and required completion time by a vault. The replace period has an upper limit
to prevent griefing of vault collateral.

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getReplacePeriod](/interfaces/ReplaceAPI.md#getreplaceperiod)

#### Defined in

[src/parachain/replace.ts:160](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L160)

___

### getRequestIdFromEvents

▸ `Private` **getRequestIdFromEvents**(`events`): `Hash`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending a replace request transaction |

#### Returns

`Hash`

The id associated with the replace request. If the EventRecord array does not
contain replace request events, the function throws an error.

#### Defined in

[src/parachain/replace.ts:96](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L96)

___

### list

▸ **list**(): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

An array containing the replace requests

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[list](/interfaces/ReplaceAPI.md#list)

#### Defined in

[src/parachain/replace.ts:165](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L165)

___

### map

▸ **map**(): `Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

#### Returns

`Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

A mapping from the replace request ID to the replace request object

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[map](/interfaces/ReplaceAPI.md#map)

#### Defined in

[src/parachain/replace.ts:171](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L171)

___

### request

▸ **request**(`amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`string`\>

The request id

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[request](/interfaces/ReplaceAPI.md#request)

#### Defined in

[src/parachain/replace.ts:106](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L106)

___

### sendLogged

▸ **sendLogged**<`T`\>(`transaction`, `successEventType?`): `Promise`<`ISubmittableResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\> |
| `successEventType?` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`Promise`<`ISubmittableResult`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[sendLogged](/interfaces/ReplaceAPI.md#sendlogged)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[sendLogged](/classes/DefaultTransactionAPI.md#sendlogged)

#### Defined in

[src/parachain/transaction.ts:30](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L30)

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[setAccount](/interfaces/ReplaceAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L22)

___

### withdraw

▸ **withdraw**(`amount`): `Promise`<`void`\>

Wihdraw a replace request

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[withdraw](/interfaces/ReplaceAPI.md#withdraw)

#### Defined in

[src/parachain/replace.ts:120](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/replace.ts#L120)

___

### doesArrayContainEvent

▸ `Static` **doesArrayContainEvent**<`T`\>(`events`, `eventType`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |
| `eventType` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`boolean`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[doesArrayContainEvent](/classes/DefaultTransactionAPI.md#doesarraycontainevent)

#### Defined in

[src/parachain/transaction.ts:130](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L130)

___

### isDispatchError

▸ `Static` **isDispatchError**(`eventData`): eventData is DispatchError

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | `unknown` |

#### Returns

eventData is DispatchError

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[isDispatchError](/classes/DefaultTransactionAPI.md#isdispatcherror)

#### Defined in

[src/parachain/transaction.ts:126](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L126)

___

### printEvents

▸ `Static` **printEvents**(`api`, `events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `events` | `EventRecord`[] |

#### Returns

`void`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[printEvents](/classes/DefaultTransactionAPI.md#printevents)

#### Defined in

[src/parachain/transaction.ts:66](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L66)

___

### waitForEvent

▸ `Static` **waitForEvent**<`T`\>(`api`, `event`, `timeoutMs`): `Promise`<`boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `event` | `AugmentedEvent`<`ApiTypes`, `T`\> |
| `timeoutMs` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[waitForEvent](/classes/DefaultTransactionAPI.md#waitforevent)

#### Defined in

[src/parachain/transaction.ts:97](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L97)
