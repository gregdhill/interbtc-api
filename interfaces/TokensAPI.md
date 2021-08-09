[@interlay/interbtc](/README.md) / [Exports](/modules.md) / TokensAPI

# Interface: TokensAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`TokensAPI`**

## Implemented by

- [`DefaultTokensAPI`](/classes/DefaultTokensAPI.md)

## Table of contents

### Methods

- [balance](/interfaces/TokensAPI.md#balance)
- [balanceLocked](/interfaces/TokensAPI.md#balancelocked)
- [getAccount](/interfaces/TokensAPI.md#getaccount)
- [sendLogged](/interfaces/TokensAPI.md#sendlogged)
- [setAccount](/interfaces/TokensAPI.md#setaccount)
- [subscribeToBalance](/interfaces/TokensAPI.md#subscribetobalance)
- [total](/interfaces/TokensAPI.md#total)
- [transfer](/interfaces/TokensAPI.md#transfer)

## Methods

### balance

▸ **balance**<`C`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |
| `id` | `AccountId` | The AccountId of a user |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The user's free balance

#### Defined in

[src/parachain/tokens.ts:24](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L24)

___

### balanceLocked

▸ **balanceLocked**<`C`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |
| `id` | `AccountId` | The AccountId of a user |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The user's locked balance

#### Defined in

[src/parachain/tokens.ts:30](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L30)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[getAccount](/interfaces/TransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L12)

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

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[sendLogged](/interfaces/TransactionAPI.md#sendlogged)

#### Defined in

[src/parachain/transaction.ts:13](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L13)

___

### setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[setAccount](/interfaces/TransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:11](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L11)

___

### subscribeToBalance

▸ **subscribeToBalance**<`C`\>(`currency`, `account`, `callback`): `Promise`<`fn`\>

Subscribe to balance updates, denominated in InterBTC

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |
| `account` | `string` | AccountId string |
| `callback` | (`account`: `string`, `balance`: `MonetaryAmount`<`Currency`<`C`\>, `C`\>) => `void` | Function to be called whenever the balance of an account is updated. Its parameters are (accountIdString, freeBalance) |

#### Returns

`Promise`<`fn`\>

#### Defined in

[src/parachain/tokens.ts:46](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L46)

___

### total

▸ **total**<`C`\>(`currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total amount in the system

#### Defined in

[src/parachain/tokens.ts:18](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L18)

___

### transfer

▸ **transfer**<`C`\>(`destination`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | `string` | The address of a user |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount to transfer, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/tokens.ts:38](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/tokens.ts#L38)
