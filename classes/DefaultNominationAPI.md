[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultNominationAPI

# Class: DefaultNominationAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultNominationAPI`**

## Implements

- [`NominationAPI`](/interfaces/NominationAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultNominationAPI.md#constructor)

### Properties

- [api](/classes/DefaultNominationAPI.md#api)
- [poolsAPI](/classes/DefaultNominationAPI.md#poolsapi)
- [vaultsAPI](/classes/DefaultNominationAPI.md#vaultsapi)

### Methods

- [depositCollateral](/classes/DefaultNominationAPI.md#depositcollateral)
- [getAccount](/classes/DefaultNominationAPI.md#getaccount)
- [getFilteredNominations](/classes/DefaultNominationAPI.md#getfilterednominations)
- [getNominationStatus](/classes/DefaultNominationAPI.md#getnominationstatus)
- [getNominatorRewards](/classes/DefaultNominationAPI.md#getnominatorrewards)
- [getNonces](/classes/DefaultNominationAPI.md#getnonces)
- [getTotalNomination](/classes/DefaultNominationAPI.md#gettotalnomination)
- [isNominationEnabled](/classes/DefaultNominationAPI.md#isnominationenabled)
- [isVaultOptedIn](/classes/DefaultNominationAPI.md#isvaultoptedin)
- [listNominationPairs](/classes/DefaultNominationAPI.md#listnominationpairs)
- [listNominatorRewards](/classes/DefaultNominationAPI.md#listnominatorrewards)
- [listNominatorsRaw](/classes/DefaultNominationAPI.md#listnominatorsraw)
- [listVaults](/classes/DefaultNominationAPI.md#listvaults)
- [optIn](/classes/DefaultNominationAPI.md#optin)
- [optOut](/classes/DefaultNominationAPI.md#optout)
- [sendLogged](/classes/DefaultNominationAPI.md#sendlogged)
- [setAccount](/classes/DefaultNominationAPI.md#setaccount)
- [setNominationEnabled](/classes/DefaultNominationAPI.md#setnominationenabled)
- [withdrawCollateral](/classes/DefaultNominationAPI.md#withdrawcollateral)
- [doesArrayContainEvent](/classes/DefaultNominationAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultNominationAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultNominationAPI.md#printevents)
- [waitForEvent](/classes/DefaultNominationAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultNominationAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/nomination.ts:123](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L123)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### poolsAPI

• **poolsAPI**: `PoolsAPI`

#### Defined in

[src/parachain/nomination.ts:121](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L121)

___

### vaultsAPI

• **vaultsAPI**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/parachain/nomination.ts:120](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L120)

## Methods

### depositCollateral

▸ **depositCollateral**<`C`\>(`vaultId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[depositCollateral](/interfaces/NominationAPI.md#depositcollateral)

#### Defined in

[src/parachain/nomination.ts:129](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L129)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getAccount](/interfaces/NominationAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

___

### getFilteredNominations

▸ **getFilteredNominations**<`C`\>(`currency`, `nominatorId?`, `vaultId?`): `Promise`<[[`string`, `string`], `MonetaryAmount`<`Currency`<`C`\>, `C`\>][]\>

**`remarks`** At least one of the parameters must be specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `nominatorId?` | `string` |
| `vaultId?` | `string` |

#### Returns

`Promise`<[[`string`, `string`], `MonetaryAmount`<`Currency`<`C`\>, `C`\>][]\>

A list of `[[nominatorId, vaultId], nominatedAmount]` tuples

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getFilteredNominations](/interfaces/NominationAPI.md#getfilterednominations)

#### Defined in

[src/parachain/nomination.ts:254](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L254)

___

### getNominationStatus

▸ **getNominationStatus**<`C`\>(`currency`, `nominatorId`, `vaultId`): `Promise`<[`NominationStatus`](/enums/NominationStatus.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `nominatorId` | `string` |
| `vaultId` | `string` |

#### Returns

`Promise`<[`NominationStatus`](/enums/NominationStatus.md)\>

#### Defined in

[src/parachain/nomination.ts:283](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L283)

___

### getNominatorRewards

▸ **getNominatorRewards**<`C`\>(`nominatorId`, `collateralCurrency`): `Promise`<[[`string`, `string`], `BTCAmount`][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nominatorId` | `string` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<[[`string`, `string`], `BTCAmount`][]\>

The rewards (in InterBTC a nominator has accumulated)

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getNominatorRewards](/interfaces/NominationAPI.md#getnominatorrewards)

#### Defined in

[src/parachain/nomination.ts:243](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L243)

___

### getNonces

▸ **getNonces**<`C`\>(`currency`): `Promise`<`Map`<`string`, `number`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`Map`<`string`, `number`\>\>

A map (nomineeId => nonce), representing the nonces for each reward pool with the given currency

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getNonces](/interfaces/NominationAPI.md#getnonces)

#### Defined in

[src/parachain/nomination.ts:170](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L170)

___

### getTotalNomination

▸ **getTotalNomination**<`C`\>(`currency`, `nominatorId?`, `vaultId?`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

**`remarks`** At least one of the parameters must be specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |
| `nominatorId?` | `string` |
| `vaultId?` | `string` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The total nominated amount, filtered using the given parameters

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getTotalNomination](/interfaces/NominationAPI.md#gettotalnomination)

#### Defined in

[src/parachain/nomination.ts:301](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L301)

___

### isNominationEnabled

▸ **isNominationEnabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

A boolean value representing whether the vault nomination feature is enabled

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[isNominationEnabled](/interfaces/NominationAPI.md#isnominationenabled)

#### Defined in

[src/parachain/nomination.ts:164](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L164)

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

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[isVaultOptedIn](/interfaces/NominationAPI.md#isvaultoptedin)

#### Defined in

[src/parachain/nomination.ts:319](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L319)

___

### listNominationPairs

▸ **listNominationPairs**<`C`\>(`currency`): `Promise`<[`string`, `string`][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<[`string`, `string`][]\>

A list of all users who nominated collateral to vaults.
There is a separate entry for each (nominatorId, vaultId) pair.
The return format is `[[nominatorId, vaultId], Nominator][]`

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[listNominationPairs](/interfaces/NominationAPI.md#listnominationpairs)

#### Defined in

[src/parachain/nomination.ts:221](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L221)

___

### listNominatorRewards

▸ **listNominatorRewards**<`C`\>(`collateralCurrency`): `Promise`<[[`string`, `string`], `BTCAmount`][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<[[`string`, `string`], `BTCAmount`][]\>

The rewards (in InterBTC a nominator has accumulated)

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[listNominatorRewards](/interfaces/NominationAPI.md#listnominatorrewards)

#### Defined in

[src/parachain/nomination.ts:230](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L230)

___

### listNominatorsRaw

▸ **listNominatorsRaw**<`C`\>(`currency`): `Promise`<[[`Currency`<[`CurrencyUnit`](/modules.md#currencyunit)\>, [`number`, `string`, `string`]], `MonetaryAmount`<`Currency`<[`CurrencyUnit`](/modules.md#currencyunit)\>, [`CurrencyUnit`](/modules.md#currencyunit)\>][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<[[`Currency`<[`CurrencyUnit`](/modules.md#currencyunit)\>, [`number`, `string`, `string`]], `MonetaryAmount`<`Currency`<[`CurrencyUnit`](/modules.md#currencyunit)\>, [`CurrencyUnit`](/modules.md#currencyunit)\>][]\>

#### Defined in

[src/parachain/nomination.ts:181](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L181)

___

### listVaults

▸ **listVaults**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

A list of all vaults that opted in to the nomination feature.

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[listVaults](/interfaces/NominationAPI.md#listvaults)

#### Defined in

[src/parachain/nomination.ts:313](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L313)

___

### optIn

▸ **optIn**(): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt in to the nomination feature

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[optIn](/interfaces/NominationAPI.md#optin)

#### Defined in

[src/parachain/nomination.ts:149](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L149)

___

### optOut

▸ **optOut**(): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt out of the nomination feature

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[optOut](/interfaces/NominationAPI.md#optout)

#### Defined in

[src/parachain/nomination.ts:154](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L154)

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

[NominationAPI](/interfaces/NominationAPI.md).[sendLogged](/interfaces/NominationAPI.md#sendlogged)

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

[NominationAPI](/interfaces/NominationAPI.md).[setAccount](/interfaces/NominationAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L22)

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

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[setNominationEnabled](/interfaces/NominationAPI.md#setnominationenabled)

#### Defined in

[src/parachain/nomination.ts:159](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L159)

___

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`vaultId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[withdrawCollateral](/interfaces/NominationAPI.md#withdrawcollateral)

#### Defined in

[src/parachain/nomination.ts:139](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/nomination.ts#L139)

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
