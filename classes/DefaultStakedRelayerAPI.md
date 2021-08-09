[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultStakedRelayerAPI

# Class: DefaultStakedRelayerAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultStakedRelayerAPI`**

## Implements

- [`StakedRelayerAPI`](/interfaces/StakedRelayerAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultStakedRelayerAPI.md#constructor)

### Properties

- [api](/classes/DefaultStakedRelayerAPI.md#api)
- [oracleAPI](/classes/DefaultStakedRelayerAPI.md#oracleapi)
- [vaultsAPI](/classes/DefaultStakedRelayerAPI.md#vaultsapi)

### Methods

- [getAccount](/classes/DefaultStakedRelayerAPI.md#getaccount)
- [getCurrentStateOfBTCParachain](/classes/DefaultStakedRelayerAPI.md#getcurrentstateofbtcparachain)
- [getLastBTCDOTExchangeRateAndTime](/classes/DefaultStakedRelayerAPI.md#getlastbtcdotexchangerateandtime)
- [getMonitoredVaultsCollateralizationRate](/classes/DefaultStakedRelayerAPI.md#getmonitoredvaultscollateralizationrate)
- [isMonitoredVaultCollateralizationDefined](/classes/DefaultStakedRelayerAPI.md#ismonitoredvaultcollateralizationdefined)
- [reportVaultTheft](/classes/DefaultStakedRelayerAPI.md#reportvaulttheft)
- [sendLogged](/classes/DefaultStakedRelayerAPI.md#sendlogged)
- [setAccount](/classes/DefaultStakedRelayerAPI.md#setaccount)
- [doesArrayContainEvent](/classes/DefaultStakedRelayerAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultStakedRelayerAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultStakedRelayerAPI.md#printevents)
- [waitForEvent](/classes/DefaultStakedRelayerAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultStakedRelayerAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/staked-relayer.ts:56](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L56)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### oracleAPI

• `Private` **oracleAPI**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/parachain/staked-relayer.ts:54](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L54)

___

### vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/parachain/staked-relayer.ts:53](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L53)

## Methods

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[StakedRelayerAPI](/interfaces/StakedRelayerAPI.md).[getAccount](/interfaces/StakedRelayerAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

___

### getCurrentStateOfBTCParachain

▸ **getCurrentStateOfBTCParachain**(): `Promise`<`StatusCode`\>

#### Returns

`Promise`<`StatusCode`\>

A parachain status code object

#### Implementation of

[StakedRelayerAPI](/interfaces/StakedRelayerAPI.md).[getCurrentStateOfBTCParachain](/interfaces/StakedRelayerAPI.md#getcurrentstateofbtcparachain)

#### Defined in

[src/parachain/staked-relayer.ts:97](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L97)

___

### getLastBTCDOTExchangeRateAndTime

▸ **getLastBTCDOTExchangeRateAndTime**(): `Promise`<[`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>, `Date`]\>

#### Returns

`Promise`<[`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>, `Date`]\>

A tuple denoting [lastBTCDOTExchangeRate, lastBTCDOTExchangeRateTime]

#### Implementation of

[StakedRelayerAPI](/interfaces/StakedRelayerAPI.md).[getLastBTCDOTExchangeRateAndTime](/interfaces/StakedRelayerAPI.md#getlastbtcdotexchangerateandtime)

#### Defined in

[src/parachain/staked-relayer.ts:91](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L91)

___

### getMonitoredVaultsCollateralizationRate

▸ **getMonitoredVaultsCollateralizationRate**(): `Promise`<`Map`<`AccountId`, `Big`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `Big`\>\>

A mapping from vault IDs to their collateralization

#### Implementation of

[StakedRelayerAPI](/interfaces/StakedRelayerAPI.md).[getMonitoredVaultsCollateralizationRate](/interfaces/StakedRelayerAPI.md#getmonitoredvaultscollateralizationrate)

#### Defined in

[src/parachain/staked-relayer.ts:69](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L69)

___

### isMonitoredVaultCollateralizationDefined

▸ `Private` **isMonitoredVaultCollateralizationDefined**(`pair`): pair is [AccountId, Big]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pair` | [`AccountId`, `undefined` \| `Big`] |

#### Returns

pair is [AccountId, Big]

#### Defined in

[src/parachain/staked-relayer.ts:87](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L87)

___

### reportVaultTheft

▸ **reportVaultTheft**(`vaultId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

A Staked Relayer reports misbehavior by a Vault, providing a fraud proof
(malicious Bitcoin transaction and the corresponding transaction inclusion proof).

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[StakedRelayerAPI](/interfaces/StakedRelayerAPI.md).[reportVaultTheft](/interfaces/StakedRelayerAPI.md#reportvaulttheft)

#### Defined in

[src/parachain/staked-relayer.ts:62](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L62)

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

[StakedRelayerAPI](/interfaces/StakedRelayerAPI.md).[sendLogged](/interfaces/StakedRelayerAPI.md#sendlogged)

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

[StakedRelayerAPI](/interfaces/StakedRelayerAPI.md).[setAccount](/interfaces/StakedRelayerAPI.md#setaccount)

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
