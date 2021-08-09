[@interlay/interbtc](/README.md) / [Exports](/modules.md) / OracleAPI

# Interface: OracleAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`OracleAPI`**

## Implemented by

- [`DefaultOracleAPI`](/classes/DefaultOracleAPI.md)

## Table of contents

### Methods

- [convertCollateralToWrapped](/interfaces/OracleAPI.md#convertcollateraltowrapped)
- [convertWrappedToCollateral](/interfaces/OracleAPI.md#convertwrappedtocollateral)
- [getAccount](/interfaces/OracleAPI.md#getaccount)
- [getBtcTxFeesPerByte](/interfaces/OracleAPI.md#getbtctxfeesperbyte)
- [getExchangeRate](/interfaces/OracleAPI.md#getexchangerate)
- [getLastExchangeRateTime](/interfaces/OracleAPI.md#getlastexchangeratetime)
- [getOnlineTimeout](/interfaces/OracleAPI.md#getonlinetimeout)
- [getSourcesById](/interfaces/OracleAPI.md#getsourcesbyid)
- [isOnline](/interfaces/OracleAPI.md#isonline)
- [sendLogged](/interfaces/OracleAPI.md#sendlogged)
- [setAccount](/interfaces/OracleAPI.md#setaccount)
- [setBtcTxFeesPerByte](/interfaces/OracleAPI.md#setbtctxfeesperbyte)
- [setExchangeRate](/interfaces/OracleAPI.md#setexchangerate)

## Methods

### convertCollateralToWrapped

▸ **convertCollateralToWrapped**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`BTCAmount`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of collateral tokens to convert |
| `collateralCurrency` | `Currency`<`C`\> | A `Monetary.js` object |

#### Returns

`Promise`<`BTCAmount`\>

Converted value

#### Defined in

[src/parachain/oracle.ts:79](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L79)

___

### convertWrappedToCollateral

▸ **convertWrappedToCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | The amount of wrapped tokens to convert |
| `collateralCurrency` | `Currency`<`C`\> | A `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Converted value

#### Defined in

[src/parachain/oracle.ts:70](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L70)

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

### getBtcTxFeesPerByte

▸ **getBtcTxFeesPerByte**(): `Promise`<`BtcTxFees`\>

Obtains the current fees for BTC transactions, in satoshi/byte.

#### Returns

`Promise`<`BtcTxFees`\>

An object with the values `fast` (estimated fee for inclusion
in the next block - about 10 minutes), `half` (fee for the next 3 blocks or ~30 minutes)
and `hour` (fee for inclusion in the next 6 blocks, or ~60 minutes).

#### Defined in

[src/parachain/oracle.ts:38](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L38)

___

### getExchangeRate

▸ **getExchangeRate**<`C`\>(`currency`): `Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`C`\> | The collateral currency as a `Monetary.js` object |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\>\>

The DOT/BTC exchange rate

#### Defined in

[src/parachain/oracle.ts:29](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L29)

___

### getLastExchangeRateTime

▸ **getLastExchangeRateTime**(): `Promise`<`Date`\>

#### Returns

`Promise`<`Date`\>

Last exchange rate time

#### Defined in

[src/parachain/oracle.ts:42](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L42)

___

### getOnlineTimeout

▸ **getOnlineTimeout**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The period of time (in milliseconds) after an oracle's last submission
during which it is considered online

#### Defined in

[src/parachain/oracle.ts:87](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L87)

___

### getSourcesById

▸ **getSourcesById**(): `Promise`<`Map`<`string`, `string`\>\>

#### Returns

`Promise`<`Map`<`string`, `string`\>\>

A map from the oracle's account id to its name

#### Defined in

[src/parachain/oracle.ts:46](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L46)

___

### isOnline

▸ **isOnline**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

Boolean value indicating whether the oracle is online

#### Defined in

[src/parachain/oracle.ts:50](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L50)

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

### setBtcTxFeesPerByte

▸ **setBtcTxFeesPerByte**(`fees`): `Promise`<`void`\>

Send a transaction to set the current fee rates for BTC transactions

#### Parameters

| Name | Type |
| :------ | :------ |
| `fees` | `BtcTxFees` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:64](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L64)

___

### setExchangeRate

▸ **setExchangeRate**<`C`\>(`exchangeRate`): `Promise`<`void`\>

Send a transaction to set the DOT/BTC exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`C`\>, `C`\> | The rate to set |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:55](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/oracle.ts#L55)
