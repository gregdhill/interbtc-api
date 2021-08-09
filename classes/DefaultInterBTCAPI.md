[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultInterBTCAPI

# Class: DefaultInterBTCAPI

## Implements

- [`InterBTCAPI`](/interfaces/InterBTCAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultInterBTCAPI.md#constructor)

### Properties

- [api](/classes/DefaultInterBTCAPI.md#api)
- [btcRelay](/classes/DefaultInterBTCAPI.md#btcrelay)
- [electrsAPI](/classes/DefaultInterBTCAPI.md#electrsapi)
- [faucet](/classes/DefaultInterBTCAPI.md#faucet)
- [fee](/classes/DefaultInterBTCAPI.md#fee)
- [index](/classes/DefaultInterBTCAPI.md#index)
- [issue](/classes/DefaultInterBTCAPI.md#issue)
- [nomination](/classes/DefaultInterBTCAPI.md#nomination)
- [oracle](/classes/DefaultInterBTCAPI.md#oracle)
- [pools](/classes/DefaultInterBTCAPI.md#pools)
- [redeem](/classes/DefaultInterBTCAPI.md#redeem)
- [refund](/classes/DefaultInterBTCAPI.md#refund)
- [replace](/classes/DefaultInterBTCAPI.md#replace)
- [stakedRelayer](/classes/DefaultInterBTCAPI.md#stakedrelayer)
- [system](/classes/DefaultInterBTCAPI.md#system)
- [tokens](/classes/DefaultInterBTCAPI.md#tokens)
- [vaults](/classes/DefaultInterBTCAPI.md#vaults)

### Accessors

- [account](/classes/DefaultInterBTCAPI.md#account)

### Methods

- [setAccount](/classes/DefaultInterBTCAPI.md#setaccount)

## Constructors

### constructor

• **new DefaultInterBTCAPI**(`api`, `network?`, `_account?`, `indexEndpoint?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |
| `_account?` | `AddressOrPair` | `undefined` |
| `indexEndpoint` | `string` | `undefined` |

#### Defined in

[src/interbtc-api.ts:85](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L85)

## Properties

### api

• `Readonly` **api**: `ApiPromise`

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[api](/interfaces/InterBTCAPI.md#api)

___

### btcRelay

• `Readonly` **btcRelay**: [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[btcRelay](/interfaces/InterBTCAPI.md#btcrelay)

#### Defined in

[src/interbtc-api.ts:76](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L76)

___

### electrsAPI

• `Readonly` **electrsAPI**: [`ElectrsAPI`](/interfaces/ElectrsAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[electrsAPI](/interfaces/InterBTCAPI.md#electrsapi)

#### Defined in

[src/interbtc-api.ts:75](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L75)

___

### faucet

• `Readonly` **faucet**: [`FaucetClient`](/classes/FaucetClient.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[faucet](/interfaces/InterBTCAPI.md#faucet)

#### Defined in

[src/interbtc-api.ts:73](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L73)

___

### fee

• `Readonly` **fee**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[fee](/interfaces/InterBTCAPI.md#fee)

#### Defined in

[src/interbtc-api.ts:80](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L80)

___

### index

• `Readonly` **index**: `IndexAPI`

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[index](/interfaces/InterBTCAPI.md#index)

#### Defined in

[src/interbtc-api.ts:83](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L83)

___

### issue

• `Readonly` **issue**: [`IssueAPI`](/interfaces/IssueAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[issue](/interfaces/InterBTCAPI.md#issue)

#### Defined in

[src/interbtc-api.ts:69](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L69)

___

### nomination

• `Readonly` **nomination**: [`NominationAPI`](/interfaces/NominationAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[nomination](/interfaces/InterBTCAPI.md#nomination)

#### Defined in

[src/interbtc-api.ts:81](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L81)

___

### oracle

• `Readonly` **oracle**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[oracle](/interfaces/InterBTCAPI.md#oracle)

#### Defined in

[src/interbtc-api.ts:74](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L74)

___

### pools

• `Readonly` **pools**: `PoolsAPI`

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[pools](/interfaces/InterBTCAPI.md#pools)

#### Defined in

[src/interbtc-api.ts:82](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L82)

___

### redeem

• `Readonly` **redeem**: [`RedeemAPI`](/interfaces/RedeemAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[redeem](/interfaces/InterBTCAPI.md#redeem)

#### Defined in

[src/interbtc-api.ts:70](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L70)

___

### refund

• `Readonly` **refund**: [`RefundAPI`](/interfaces/RefundAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[refund](/interfaces/InterBTCAPI.md#refund)

#### Defined in

[src/interbtc-api.ts:71](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L71)

___

### replace

• `Readonly` **replace**: [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[replace](/interfaces/InterBTCAPI.md#replace)

#### Defined in

[src/interbtc-api.ts:79](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L79)

___

### stakedRelayer

• `Readonly` **stakedRelayer**: [`StakedRelayerAPI`](/interfaces/StakedRelayerAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[stakedRelayer](/interfaces/InterBTCAPI.md#stakedrelayer)

#### Defined in

[src/interbtc-api.ts:72](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L72)

___

### system

• `Readonly` **system**: [`SystemAPI`](/interfaces/SystemAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[system](/interfaces/InterBTCAPI.md#system)

#### Defined in

[src/interbtc-api.ts:78](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L78)

___

### tokens

• `Readonly` **tokens**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[tokens](/interfaces/InterBTCAPI.md#tokens)

#### Defined in

[src/interbtc-api.ts:77](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L77)

___

### vaults

• `Readonly` **vaults**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[vaults](/interfaces/InterBTCAPI.md#vaults)

#### Defined in

[src/interbtc-api.ts:68](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L68)

## Accessors

### account

• `get` **account**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[account](/interfaces/InterBTCAPI.md#account)

#### Defined in

[src/interbtc-api.ts:128](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L128)

## Methods

### setAccount

▸ **setAccount**(`account`, `signer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |
| `signer?` | `Signer` |

#### Returns

`void`

#### Implementation of

[InterBTCAPI](/interfaces/InterBTCAPI.md).[setAccount](/interfaces/InterBTCAPI.md#setaccount)

#### Defined in

[src/interbtc-api.ts:110](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L110)
