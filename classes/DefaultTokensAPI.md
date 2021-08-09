[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultTokensAPI

# Class: DefaultTokensAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultTokensAPI`**

## Implements

- [`TokensAPI`](/interfaces/TokensAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultTokensAPI.md#constructor)

### Properties

- [api](/classes/DefaultTokensAPI.md#api)

### Methods

- [balance](/classes/DefaultTokensAPI.md#balance)
- [balanceLocked](/classes/DefaultTokensAPI.md#balancelocked)
- [getAccount](/classes/DefaultTokensAPI.md#getaccount)
- [sendLogged](/classes/DefaultTokensAPI.md#sendlogged)
- [setAccount](/classes/DefaultTokensAPI.md#setaccount)
- [subscribeToBalance](/classes/DefaultTokensAPI.md#subscribetobalance)
- [total](/classes/DefaultTokensAPI.md#total)
- [transfer](/classes/DefaultTokensAPI.md#transfer)
- [doesArrayContainEvent](/classes/DefaultTokensAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultTokensAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultTokensAPI.md#printevents)
- [waitForEvent](/classes/DefaultTokensAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultTokensAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/tokens.ts:54](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L54)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

## Methods

### balance

▸ **balance**<`C`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The user's free balance

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[balance](/interfaces/TokensAPI.md#balance)

#### Defined in

[src/parachain/tokens.ts:65](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L65)

___

### balanceLocked

▸ **balanceLocked**<`C`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The user's locked balance

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[balanceLocked](/interfaces/TokensAPI.md#balancelocked)

#### Defined in

[src/parachain/tokens.ts:74](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L74)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[getAccount](/interfaces/TokensAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

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

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[sendLogged](/interfaces/TokensAPI.md#sendlogged)

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

[TokensAPI](/interfaces/TokensAPI.md).[setAccount](/interfaces/TokensAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L22)

___

### subscribeToBalance

▸ **subscribeToBalance**<`C`\>(`currency`, `account`, `callback`): `Promise`<`fn`\>

Subscribe to balance updates, denominated in InterBTC

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `account` | `string` |
| `callback` | (`account`: `string`, `balance`: `MonetaryAmount`<`Currency`<`C`\>, `C`\>) => `void` |

#### Returns

`Promise`<`fn`\>

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[subscribeToBalance](/interfaces/TokensAPI.md#subscribetobalance)

#### Defined in

[src/parachain/tokens.ts:83](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L83)

___

### total

▸ **total**<`C`\>(`currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total amount in the system

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[total](/interfaces/TokensAPI.md#total)

#### Defined in

[src/parachain/tokens.ts:58](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L58)

___

### transfer

▸ **transfer**<`C`\>(`destination`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[transfer](/interfaces/TokensAPI.md#transfer)

#### Defined in

[src/parachain/tokens.ts:104](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L104)

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
