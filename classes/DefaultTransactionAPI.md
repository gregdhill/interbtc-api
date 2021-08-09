[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultTransactionAPI

# Class: DefaultTransactionAPI

## Hierarchy

- **`DefaultTransactionAPI`**

  ↳ [`DefaultVaultsAPI`](/classes/DefaultVaultsAPI.md)

  ↳ [`DefaultIssueAPI`](/classes/DefaultIssueAPI.md)

  ↳ [`DefaultRedeemAPI`](/classes/DefaultRedeemAPI.md)

  ↳ [`DefaultRefundAPI`](/classes/DefaultRefundAPI.md)

  ↳ [`DefaultStakedRelayerAPI`](/classes/DefaultStakedRelayerAPI.md)

  ↳ [`DefaultOracleAPI`](/classes/DefaultOracleAPI.md)

  ↳ [`DefaultTokensAPI`](/classes/DefaultTokensAPI.md)

  ↳ [`DefaultReplaceAPI`](/classes/DefaultReplaceAPI.md)

  ↳ [`DefaultNominationAPI`](/classes/DefaultNominationAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultTransactionAPI.md#constructor)

### Properties

- [api](/classes/DefaultTransactionAPI.md#api)

### Methods

- [getAccount](/classes/DefaultTransactionAPI.md#getaccount)
- [sendLogged](/classes/DefaultTransactionAPI.md#sendlogged)
- [setAccount](/classes/DefaultTransactionAPI.md#setaccount)
- [doesArrayContainEvent](/classes/DefaultTransactionAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultTransactionAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultTransactionAPI.md#printevents)
- [waitForEvent](/classes/DefaultTransactionAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultTransactionAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Defined in

[src/parachain/transaction.ts:20](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L20)

## Properties

### api

• **api**: `ApiPromise`

## Methods

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

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

#### Defined in

[src/parachain/transaction.ts:97](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L97)
