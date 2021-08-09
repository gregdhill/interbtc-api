[@interlay/interbtc](/README.md) / [Exports](/modules.md) / NominationAPI

# Interface: NominationAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`NominationAPI`**

## Implemented by

- [`DefaultNominationAPI`](/classes/DefaultNominationAPI.md)

## Table of contents

### Methods

- [depositCollateral](/interfaces/NominationAPI.md#depositcollateral)
- [getAccount](/interfaces/NominationAPI.md#getaccount)
- [getFilteredNominations](/interfaces/NominationAPI.md#getfilterednominations)
- [getNominatorRewards](/interfaces/NominationAPI.md#getnominatorrewards)
- [getNonces](/interfaces/NominationAPI.md#getnonces)
- [getTotalNomination](/interfaces/NominationAPI.md#gettotalnomination)
- [isNominationEnabled](/interfaces/NominationAPI.md#isnominationenabled)
- [isVaultOptedIn](/interfaces/NominationAPI.md#isvaultoptedin)
- [listNominationPairs](/interfaces/NominationAPI.md#listnominationpairs)
- [listNominatorRewards](/interfaces/NominationAPI.md#listnominatorrewards)
- [listVaults](/interfaces/NominationAPI.md#listvaults)
- [optIn](/interfaces/NominationAPI.md#optin)
- [optOut](/interfaces/NominationAPI.md#optout)
- [sendLogged](/interfaces/NominationAPI.md#sendlogged)
- [setAccount](/interfaces/NominationAPI.md#setaccount)
- [setNominationEnabled](/interfaces/NominationAPI.md#setnominationenabled)
- [withdrawCollateral](/interfaces/NominationAPI.md#withdrawcollateral)

## Methods

### depositCollateral

▸ **depositCollateral**<`C`\>(`vaultId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `string` | Vault to nominate collateral to |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | Amount to deposit, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:31](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L31)

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

### getFilteredNominations

▸ **getFilteredNominations**<`C`\>(`currency`, `nominatorId?`, `vaultId?`): `Promise`<[[`string`, `string`], `MonetaryAmount`<`Currency`<`C`\>, `C`\>][]\>

**`remarks`** At least one of the parameters must be specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency of the nominations |
| `nominatorId?` | `string` | Id of user who nominated to one or more vaults |
| `vaultId?` | `string` | Id of vault who is opted in to nomination |

#### Returns

`Promise`<[[`string`, `string`], `MonetaryAmount`<`Currency`<`C`\>, `C`\>][]\>

A list of `[[nominatorId, vaultId], nominatedAmount]` tuples

#### Defined in

[src/parachain/nomination.ts:84](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L84)

___

### getNominatorRewards

▸ **getNominatorRewards**<`C`\>(`nominatorId`, `currency`): `Promise`<[[`string`, `string`], `BTCAmount`][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nominatorId` | `string` | Id of user who nominated to one or more vaults |
| `currency` | `Currency`<`C`\> | The currency of the nominations |

#### Returns

`Promise`<[[`string`, `string`], `BTCAmount`][]\>

The rewards (in InterBTC a nominator has accumulated)

#### Defined in

[src/parachain/nomination.ts:107](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L107)

___

### getNonces

▸ **getNonces**<`C`\>(`currency`): `Promise`<`Map`<`string`, `number`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency of the reward pool |

#### Returns

`Promise`<`Map`<`string`, `number`\>\>

A map (nomineeId => nonce), representing the nonces for each reward pool with the given currency

#### Defined in

[src/parachain/nomination.ts:116](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L116)

___

### getTotalNomination

▸ **getTotalNomination**<`C`\>(`currency`, `nominatorId?`, `vaultId?`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

**`remarks`** At least one of the parameters must be specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The collateral currency of the nominations |
| `nominatorId?` | `string` | Id of user who nominated to one or more vaults |
| `vaultId?` | `string` | Id of vault who is opted in to nomination |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total nominated amount, filtered using the given parameters

#### Defined in

[src/parachain/nomination.ts:96](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L96)

___

### isNominationEnabled

▸ **isNominationEnabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

A boolean value representing whether the vault nomination feature is enabled

#### Defined in

[src/parachain/nomination.ts:55](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L55)

___

### isVaultOptedIn

▸ **isVaultOptedIn**(`accountId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

`Promise`<`boolean`\>

A boolean value

#### Defined in

[src/parachain/nomination.ts:76](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L76)

___

### listNominationPairs

▸ **listNominationPairs**<`C`\>(`currency`): `Promise`<[`string`, `string`][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency of the nominations |

#### Returns

`Promise`<[`string`, `string`][]\>

A list of all users who nominated collateral to vaults.
There is a separate entry for each (nominatorId, vaultId) pair.
The return format is `[[nominatorId, vaultId], Nominator][]`

#### Defined in

[src/parachain/nomination.ts:62](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L62)

___

### listNominatorRewards

▸ **listNominatorRewards**<`C`\>(`currency`): `Promise`<[[`string`, `string`], `BTCAmount`][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The currency of the nominations |

#### Returns

`Promise`<[[`string`, `string`], `BTCAmount`][]\>

The rewards (in InterBTC a nominator has accumulated)

#### Defined in

[src/parachain/nomination.ts:67](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L67)

___

### listVaults

▸ **listVaults**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

A list of all vaults that opted in to the nomination feature.

#### Defined in

[src/parachain/nomination.ts:71](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L71)

___

### optIn

▸ **optIn**(): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt in to the nomination feature

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:43](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L43)

___

### optOut

▸ **optOut**(): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt out of the nomination feature

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:47](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L47)

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

### setNominationEnabled

▸ **setNominationEnabled**(`enabled`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:51](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L51)

___

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`vaultId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `string` | Vault that collateral was nominated to |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | Amount to withdraw, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:36](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L36)
