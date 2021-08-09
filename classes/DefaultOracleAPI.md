[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultOracleAPI

# Class: DefaultOracleAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultOracleAPI`**

## Implements

- [`OracleAPI`](/interfaces/OracleAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultOracleAPI.md#constructor)

### Properties

- [api](/classes/DefaultOracleAPI.md#api)

### Methods

- [convertCollateralToWrapped](/classes/DefaultOracleAPI.md#convertcollateraltowrapped)
- [convertMoment](/classes/DefaultOracleAPI.md#convertmoment)
- [convertWrappedToCollateral](/classes/DefaultOracleAPI.md#convertwrappedtocollateral)
- [getAccount](/classes/DefaultOracleAPI.md#getaccount)
- [getBtcTxFeesPerByte](/classes/DefaultOracleAPI.md#getbtctxfeesperbyte)
- [getExchangeRate](/classes/DefaultOracleAPI.md#getexchangerate)
- [getLastExchangeRateTime](/classes/DefaultOracleAPI.md#getlastexchangeratetime)
- [getOnlineTimeout](/classes/DefaultOracleAPI.md#getonlinetimeout)
- [getSourcesById](/classes/DefaultOracleAPI.md#getsourcesbyid)
- [hasOracleError](/classes/DefaultOracleAPI.md#hasoracleerror)
- [isOnline](/classes/DefaultOracleAPI.md#isonline)
- [sendLogged](/classes/DefaultOracleAPI.md#sendlogged)
- [setAccount](/classes/DefaultOracleAPI.md#setaccount)
- [setBtcTxFeesPerByte](/classes/DefaultOracleAPI.md#setbtctxfeesperbyte)
- [setExchangeRate](/classes/DefaultOracleAPI.md#setexchangerate)
- [doesArrayContainEvent](/classes/DefaultOracleAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultOracleAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultOracleAPI.md#printevents)
- [waitForEvent](/classes/DefaultOracleAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultOracleAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/oracle.ts:91](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L91)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

## Methods

### convertCollateralToWrapped

▸ **convertCollateralToWrapped**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`BTCAmount`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`BTCAmount`\>

Converted value

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[convertCollateralToWrapped](/interfaces/OracleAPI.md#convertcollateraltowrapped)

#### Defined in

[src/parachain/oracle.ts:118](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L118)

___

### convertMoment

▸ `Private` **convertMoment**(`moment`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moment` | `Moment` |

#### Returns

`Date`

#### Defined in

[src/parachain/oracle.ts:195](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L195)

___

### convertWrappedToCollateral

▸ **convertWrappedToCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

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

Converted value

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[convertWrappedToCollateral](/interfaces/OracleAPI.md#convertwrappedtocollateral)

#### Defined in

[src/parachain/oracle.ts:110](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L110)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getAccount](/interfaces/OracleAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

___

### getBtcTxFeesPerByte

▸ **getBtcTxFeesPerByte**(): `Promise`<`BtcTxFees`\>

Obtains the current fees for BTC transactions, in satoshi/byte.

#### Returns

`Promise`<`BtcTxFees`\>

An object with the values `fast` (estimated fee for inclusion
in the next block - about 10 minutes), `half` (fee for the next 3 blocks or ~30 minutes)
and `hour` (fee for inclusion in the next 6 blocks, or ~60 minutes).

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getBtcTxFeesPerByte](/interfaces/OracleAPI.md#getbtctxfeesperbyte)

#### Defined in

[src/parachain/oracle.ts:146](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L146)

___

### getExchangeRate

▸ **getExchangeRate**<`C`\>(`collateralCurrency`): `Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\>\>

The DOT/BTC exchange rate

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getExchangeRate](/interfaces/OracleAPI.md#getexchangerate)

#### Defined in

[src/parachain/oracle.ts:95](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L95)

___

### getLastExchangeRateTime

▸ **getLastExchangeRateTime**(): `Promise`<`Date`\>

#### Returns

`Promise`<`Date`\>

Last exchange rate time

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getLastExchangeRateTime](/interfaces/OracleAPI.md#getlastexchangeratetime)

#### Defined in

[src/parachain/oracle.ts:174](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L174)

___

### getOnlineTimeout

▸ **getOnlineTimeout**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The period of time (in milliseconds) after an oracle's last submission
during which it is considered online

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getOnlineTimeout](/interfaces/OracleAPI.md#getonlinetimeout)

#### Defined in

[src/parachain/oracle.ts:126](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L126)

___

### getSourcesById

▸ **getSourcesById**(): `Promise`<`Map`<`string`, `string`\>\>

#### Returns

`Promise`<`Map`<`string`, `string`\>\>

A map from the oracle's account id to its name

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getSourcesById](/interfaces/OracleAPI.md#getsourcesbyid)

#### Defined in

[src/parachain/oracle.ts:166](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L166)

___

### hasOracleError

▸ `Private` **hasOracleError**(`errors`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `BTreeSet`<`ErrorCode`\> |

#### Returns

`boolean`

#### Defined in

[src/parachain/oracle.ts:186](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L186)

___

### isOnline

▸ **isOnline**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

Boolean value indicating whether the oracle is online

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[isOnline](/interfaces/OracleAPI.md#isonline)

#### Defined in

[src/parachain/oracle.ts:180](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L180)

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

[OracleAPI](/interfaces/OracleAPI.md).[sendLogged](/interfaces/OracleAPI.md#sendlogged)

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

[OracleAPI](/interfaces/OracleAPI.md).[setAccount](/interfaces/OracleAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L22)

___

### setBtcTxFeesPerByte

▸ **setBtcTxFeesPerByte**(`__namedParameters`): `Promise`<`void`\>

Send a transaction to set the current fee rates for BTC transactions

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `BtcTxFees` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[setBtcTxFeesPerByte](/interfaces/OracleAPI.md#setbtctxfeesperbyte)

#### Defined in

[src/parachain/oracle.ts:152](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L152)

___

### setExchangeRate

▸ **setExchangeRate**<`C`\>(`exchangeRate`): `Promise`<`void`\>

Send a transaction to set the DOT/BTC exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[setExchangeRate](/interfaces/OracleAPI.md#setexchangerate)

#### Defined in

[src/parachain/oracle.ts:132](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L132)

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
