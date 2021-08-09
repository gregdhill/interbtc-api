[@interlay/interbtc](/README.md) / [Exports](/modules.md) / InterBTCAPI

# Interface: InterBTCAPI

## Implemented by

- [`DefaultInterBTCAPI`](/classes/DefaultInterBTCAPI.md)

## Table of contents

### Properties

- [account](/interfaces/InterBTCAPI.md#account)
- [api](/interfaces/InterBTCAPI.md#api)
- [btcRelay](/interfaces/InterBTCAPI.md#btcrelay)
- [electrsAPI](/interfaces/InterBTCAPI.md#electrsapi)
- [faucet](/interfaces/InterBTCAPI.md#faucet)
- [fee](/interfaces/InterBTCAPI.md#fee)
- [index](/interfaces/InterBTCAPI.md#index)
- [issue](/interfaces/InterBTCAPI.md#issue)
- [nomination](/interfaces/InterBTCAPI.md#nomination)
- [oracle](/interfaces/InterBTCAPI.md#oracle)
- [pools](/interfaces/InterBTCAPI.md#pools)
- [redeem](/interfaces/InterBTCAPI.md#redeem)
- [refund](/interfaces/InterBTCAPI.md#refund)
- [replace](/interfaces/InterBTCAPI.md#replace)
- [stakedRelayer](/interfaces/InterBTCAPI.md#stakedrelayer)
- [system](/interfaces/InterBTCAPI.md#system)
- [tokens](/interfaces/InterBTCAPI.md#tokens)
- [vaults](/interfaces/InterBTCAPI.md#vaults)

### Methods

- [setAccount](/interfaces/InterBTCAPI.md#setaccount)

## Properties

### account

• `Readonly` **account**: `undefined` \| `AddressOrPair`

#### Defined in

[src/interbtc-api.ts:59](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L59)

___

### api

• `Readonly` **api**: `ApiPromise`

#### Defined in

[src/interbtc-api.ts:41](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L41)

___

### btcRelay

• `Readonly` **btcRelay**: [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md)

#### Defined in

[src/interbtc-api.ts:50](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L50)

___

### electrsAPI

• `Readonly` **electrsAPI**: [`ElectrsAPI`](/interfaces/ElectrsAPI.md)

#### Defined in

[src/interbtc-api.ts:49](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L49)

___

### faucet

• `Readonly` **faucet**: [`FaucetClient`](/classes/FaucetClient.md)

#### Defined in

[src/interbtc-api.ts:47](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L47)

___

### fee

• `Readonly` **fee**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/interbtc-api.ts:54](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L54)

___

### index

• `Readonly` **index**: `IndexAPI`

#### Defined in

[src/interbtc-api.ts:57](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L57)

___

### issue

• `Readonly` **issue**: [`IssueAPI`](/interfaces/IssueAPI.md)

#### Defined in

[src/interbtc-api.ts:43](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L43)

___

### nomination

• `Readonly` **nomination**: [`NominationAPI`](/interfaces/NominationAPI.md)

#### Defined in

[src/interbtc-api.ts:55](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L55)

___

### oracle

• `Readonly` **oracle**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/interbtc-api.ts:48](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L48)

___

### pools

• `Readonly` **pools**: `PoolsAPI`

#### Defined in

[src/interbtc-api.ts:56](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L56)

___

### redeem

• `Readonly` **redeem**: [`RedeemAPI`](/interfaces/RedeemAPI.md)

#### Defined in

[src/interbtc-api.ts:44](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L44)

___

### refund

• `Readonly` **refund**: [`RefundAPI`](/interfaces/RefundAPI.md)

#### Defined in

[src/interbtc-api.ts:45](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L45)

___

### replace

• `Readonly` **replace**: [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

#### Defined in

[src/interbtc-api.ts:53](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L53)

___

### stakedRelayer

• `Readonly` **stakedRelayer**: [`StakedRelayerAPI`](/interfaces/StakedRelayerAPI.md)

#### Defined in

[src/interbtc-api.ts:46](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L46)

___

### system

• `Readonly` **system**: [`SystemAPI`](/interfaces/SystemAPI.md)

#### Defined in

[src/interbtc-api.ts:52](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L52)

___

### tokens

• `Readonly` **tokens**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Defined in

[src/interbtc-api.ts:51](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L51)

___

### vaults

• `Readonly` **vaults**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/interbtc-api.ts:42](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L42)

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

#### Defined in

[src/interbtc-api.ts:58](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L58)
