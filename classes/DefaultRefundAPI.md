[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultRefundAPI

# Class: DefaultRefundAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultRefundAPI`**

## Implements

- [`RefundAPI`](/interfaces/RefundAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRefundAPI.md#constructor)

### Properties

- [api](/classes/DefaultRefundAPI.md#api)

### Methods

- [execute](/classes/DefaultRefundAPI.md#execute)
- [getAccount](/classes/DefaultRefundAPI.md#getaccount)
- [getRequestById](/classes/DefaultRefundAPI.md#getrequestbyid)
- [getRequestByIssueId](/classes/DefaultRefundAPI.md#getrequestbyissueid)
- [getRequestIdByIssueId](/classes/DefaultRefundAPI.md#getrequestidbyissueid)
- [list](/classes/DefaultRefundAPI.md#list)
- [mapForUser](/classes/DefaultRefundAPI.md#mapforuser)
- [sendLogged](/classes/DefaultRefundAPI.md#sendlogged)
- [setAccount](/classes/DefaultRefundAPI.md#setaccount)
- [doesArrayContainEvent](/classes/DefaultRefundAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultRefundAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultRefundAPI.md#printevents)
- [waitForEvent](/classes/DefaultRefundAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultRefundAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/refund.ts:54](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/refund.ts#L54)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

## Methods

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Execute a refund request

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

[RefundAPI](/interfaces/RefundAPI.md).[execute](/interfaces/RefundAPI.md#execute)

#### Defined in

[src/parachain/refund.ts:58](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/refund.ts#L58)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getAccount](/interfaces/RefundAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

___

### getRequestById

▸ **getRequestById**(`refundId`): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refundId` | `H256` |

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

A refund object

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getRequestById](/interfaces/RefundAPI.md#getrequestbyid)

#### Defined in

[src/parachain/refund.ts:80](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/refund.ts#L80)

___

### getRequestByIssueId

▸ **getRequestByIssueId**(`issueId`): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` \| `H256` |

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

A refund request object

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getRequestByIssueId](/interfaces/RefundAPI.md#getrequestbyissueid)

#### Defined in

[src/parachain/refund.ts:95](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/refund.ts#L95)

___

### getRequestIdByIssueId

▸ **getRequestIdByIssueId**(`issueId`): `Promise`<`H256`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` \| `H256` |

#### Returns

`Promise`<`H256`\>

The ID of the refund request

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getRequestIdByIssueId](/interfaces/RefundAPI.md#getrequestidbyissueid)

#### Defined in

[src/parachain/refund.ts:85](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/refund.ts#L85)

___

### list

▸ **list**(): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)[]\>

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)[]\>

An array containing the refund requests

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[list](/interfaces/RefundAPI.md#list)

#### Defined in

[src/parachain/refund.ts:65](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/refund.ts#L65)

___

### mapForUser

▸ **mapForUser**(`account`): `Promise`<`Map`<`H256`, [`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>\>

A mapping from the refund ID to the refund request, corresponding to the given account

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[mapForUser](/interfaces/RefundAPI.md#mapforuser)

#### Defined in

[src/parachain/refund.ts:71](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/refund.ts#L71)

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

[RefundAPI](/interfaces/RefundAPI.md).[sendLogged](/interfaces/RefundAPI.md#sendlogged)

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

[RefundAPI](/interfaces/RefundAPI.md).[setAccount](/interfaces/RefundAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L22)

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
