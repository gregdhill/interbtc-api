[@interlay/interbtc](/README.md) / Exports

# @interlay/interbtc

## Table of contents

### Namespaces

- [bitcoin](/modules/bitcoin.md)

### Enumerations

- [CurrencyIdLiteral](/enums/CurrencyIdLiteral.md)
- [ExecuteRedeem](/enums/ExecuteRedeem.md)
- [IssueStatus](/enums/IssueStatus.md)
- [NominationStatus](/enums/NominationStatus.md)
- [RedeemStatus](/enums/RedeemStatus.md)

### Clients Classes

- [FaucetClient](/classes/FaucetClient.md)

### InterBTC Bridge
The type Big represents DOT or InterBTC denominations,
while the type BN represents Planck or Satoshi denominations. Classes

- [DefaultInterBTCAPI](/classes/DefaultInterBTCAPI.md)

### Other Classes

- [BitcoinCoreClient](/classes/BitcoinCoreClient.md)
- [DefaultBTCRelayAPI](/classes/DefaultBTCRelayAPI.md)
- [DefaultConstantsAPI](/classes/DefaultConstantsAPI.md)
- [DefaultElectrsAPI](/classes/DefaultElectrsAPI.md)
- [DefaultFeeAPI](/classes/DefaultFeeAPI.md)
- [DefaultIssueAPI](/classes/DefaultIssueAPI.md)
- [DefaultNominationAPI](/classes/DefaultNominationAPI.md)
- [DefaultOracleAPI](/classes/DefaultOracleAPI.md)
- [DefaultRedeemAPI](/classes/DefaultRedeemAPI.md)
- [DefaultRefundAPI](/classes/DefaultRefundAPI.md)
- [DefaultReplaceAPI](/classes/DefaultReplaceAPI.md)
- [DefaultStakedRelayerAPI](/classes/DefaultStakedRelayerAPI.md)
- [DefaultSystemAPI](/classes/DefaultSystemAPI.md)
- [DefaultTokensAPI](/classes/DefaultTokensAPI.md)
- [DefaultTransactionAPI](/classes/DefaultTransactionAPI.md)
- [DefaultVaultsAPI](/classes/DefaultVaultsAPI.md)

### InterBTC Bridge Interfaces

- [BTCRelayAPI](/interfaces/BTCRelayAPI.md)
- [FeeAPI](/interfaces/FeeAPI.md)
- [IssueAPI](/interfaces/IssueAPI.md)
- [OracleAPI](/interfaces/OracleAPI.md)
- [RefundAPI](/interfaces/RefundAPI.md)
- [ReplaceAPI](/interfaces/ReplaceAPI.md)
- [StakedRelayerAPI](/interfaces/StakedRelayerAPI.md)
- [SystemAPI](/interfaces/SystemAPI.md)
- [TokensAPI](/interfaces/TokensAPI.md)
- [VaultsAPI](/interfaces/VaultsAPI.md)

### Bitcoin Core Interfaces

- [ElectrsAPI](/interfaces/ElectrsAPI.md)

### InterBTC Bridge
The type Big represents DOT or InterBTC denominations,
while the type BN represents Planck or Satoshi denominations. Interfaces

- [NominationAPI](/interfaces/NominationAPI.md)
- [RedeemAPI](/interfaces/RedeemAPI.md)

### InterBTC Bridge
The type Big represents Wrapped or Collateral token denominations,
while the type BN represents Planck or Satoshi denominations. Interfaces

- [ConstantsAPI](/interfaces/ConstantsAPI.md)

### Other Interfaces

- [ChainConfirmations](/interfaces/ChainConfirmations.md)
- [DecodedRequest](/interfaces/DecodedRequest.md)
- [DecodedRequestExt](/interfaces/DecodedRequestExt.md)
- [InitializationParams](/interfaces/InitializationParams.md)
- [InitializeIssue](/interfaces/InitializeIssue.md)
- [InitializeRedeem](/interfaces/InitializeRedeem.md)
- [InterBTCAPI](/interfaces/InterBTCAPI.md)
- [Issue](/interfaces/Issue.md)
- [IssueResult](/interfaces/IssueResult.md)
- [ParsedVaultData](/interfaces/ParsedVaultData.md)
- [Redeem](/interfaces/Redeem.md)
- [RefundRequestExt](/interfaces/RefundRequestExt.md)
- [ReplaceRequestExt](/interfaces/ReplaceRequestExt.md)
- [SystemVaultExt](/interfaces/SystemVaultExt.md)
- [TransactionAPI](/interfaces/TransactionAPI.md)
- [VaultExt](/interfaces/VaultExt.md)
- [WalletExt](/interfaces/WalletExt.md)

### Type aliases

- [BitcoinNetwork](/modules.md#bitcoinnetwork)
- [CollateralAmount](/modules.md#collateralamount)
- [CollateralCurrency](/modules.md#collateralcurrency)
- [CollateralUnit](/modules.md#collateralunit)
- [CurrencyUnit](/modules.md#currencyunit)
- [MonetaryCurrency](/modules.md#monetarycurrency)

### Variables

- [ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE](/modules.md#account_not_set_error_message)
- [BTC\_IN\_SAT](/modules.md#btc_in_sat)
- [DOT\_IN\_PLANCK](/modules.md#dot_in_planck)
- [FIXEDI128\_SCALING\_FACTOR](/modules.md#fixedi128_scaling_factor)
- [IGNORED\_ERROR\_MESSAGES](/modules.md#ignored_error_messages)
- [INDEX\_LOCAL\_URL](/modules.md#index_local_url)
- [MAINNET\_ESPLORA\_BASE\_PATH](/modules.md#mainnet_esplora_base_path)
- [MBTC\_IN\_SAT](/modules.md#mbtc_in_sat)
- [PERCENTAGE\_GRANULARITY](/modules.md#percentage_granularity)
- [REGTEST\_ESPLORA\_BASE\_PATH](/modules.md#regtest_esplora_base_path)
- [TESTNET\_ESPLORA\_BASE\_PATH](/modules.md#testnet_esplora_base_path)

### Functions

- [addHexPrefix](/modules.md#addhexprefix)
- [allocateAmountsToVaults](/modules.md#allocateamountstovaults)
- [bigToBn](/modules.md#bigtobn)
- [bnToBig](/modules.md#bntobig)
- [btcAddressFromParams](/modules.md#btcaddressfromparams)
- [btcToSat](/modules.md#btctosat)
- [computeLazyDistribution](/modules.md#computelazydistribution)
- [createAPIRegistry](/modules.md#createapiregistry)
- [createInterbtcAPI](/modules.md#createinterbtcapi)
- [createPolkadotAPI](/modules.md#createpolkadotapi)
- [createProvider](/modules.md#createprovider)
- [currencyIdToMonetaryCurrency](/modules.md#currencyidtomonetarycurrency)
- [decodeBtcAddress](/modules.md#decodebtcaddress)
- [decodeFixedPointType](/modules.md#decodefixedpointtype)
- [dotToPlanck](/modules.md#dottoplanck)
- [encodeBtcAddress](/modules.md#encodebtcaddress)
- [encodeUnsignedFixedPoint](/modules.md#encodeunsignedfixedpoint)
- [ensureHashEncoded](/modules.md#ensurehashencoded)
- [getAPITypes](/modules.md#getapitypes)
- [getBitcoinNetwork](/modules.md#getbitcoinnetwork)
- [getRPCTypes](/modules.md#getrpctypes)
- [getRequestIdsFromEvents](/modules.md#getrequestidsfromevents)
- [getStorageKey](/modules.md#getstoragekey)
- [getTxProof](/modules.md#gettxproof)
- [initializeExchangeRate](/modules.md#initializeexchangerate)
- [initializeIssue](/modules.md#initializeissue)
- [initializeRedeem](/modules.md#initializeredeem)
- [initializeStableConfirmations](/modules.md#initializestableconfirmations)
- [initializeVaultNomination](/modules.md#initializevaultnomination)
- [issueAndRedeem](/modules.md#issueandredeem)
- [issueSingle](/modules.md#issuesingle)
- [monetaryToCurrencyId](/modules.md#monetarytocurrencyid)
- [newAccountId](/modules.md#newaccountid)
- [newMonetaryAmount](/modules.md#newmonetaryamount)
- [parseRefundRequest](/modules.md#parserefundrequest)
- [parseReplaceRequest](/modules.md#parsereplacerequest)
- [parseSystemVault](/modules.md#parsesystemvault)
- [parseWallet](/modules.md#parsewallet)
- [planckToDOT](/modules.md#plancktodot)
- [redeem](/modules.md#redeem)
- [reverseEndianness](/modules.md#reverseendianness)
- [reverseEndiannessHex](/modules.md#reverseendiannesshex)
- [roundLastNDigits](/modules.md#roundlastndigits)
- [roundTwoDecimals](/modules.md#roundtwodecimals)
- [roundUpBigToNearestInteger](/modules.md#roundupbigtonearestinteger)
- [roundUpBtcToNearestSatoshi](/modules.md#roundupbtctonearestsatoshi)
- [satToBTC](/modules.md#sattobtc)
- [satToMBTC](/modules.md#sattombtc)
- [setNumericStorage](/modules.md#setnumericstorage)
- [sleep](/modules.md#sleep)
- [storageKeyToNthInner](/modules.md#storagekeytonthinner)
- [stripHexPrefix](/modules.md#striphexprefix)
- [tickerToCurrencyIdLiteral](/modules.md#tickertocurrencyidliteral)
- [uint8ArrayToString](/modules.md#uint8arraytostring)

## Type aliases

### BitcoinNetwork

Ƭ **BitcoinNetwork**: ``"mainnet"`` \| ``"testnet"`` \| ``"regtest"``

#### Defined in

[src/types/bitcoinTypes.ts:1](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/bitcoinTypes.ts#L1)

___

### CollateralAmount

Ƭ **CollateralAmount**: `PolkadotAmount` \| `KusamaAmount`

#### Defined in

[src/types/currency.ts:21](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/currency.ts#L21)

___

### CollateralCurrency

Ƭ **CollateralCurrency**: `Polkadot` \| `Kusama`

#### Defined in

[src/types/currency.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/currency.ts#L22)

___

### CollateralUnit

Ƭ **CollateralUnit**: `PolkadotUnit` \| `KusamaUnit`

#### Defined in

[src/types/currency.ts:24](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/currency.ts#L24)

___

### CurrencyUnit

Ƭ **CurrencyUnit**: `BTCUnit` \| `PolkadotUnit` \| `KusamaUnit`

#### Defined in

[src/types/currency.ts:25](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/currency.ts#L25)

___

### MonetaryCurrency

Ƭ **MonetaryCurrency**: `Bitcoin` \| `Polkadot` \| `Kusama`

#### Defined in

[src/types/currency.ts:23](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/currency.ts#L23)

## Variables

### ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE

• `Const` **ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE**: ``"cannot request without setting account"``

#### Defined in

[src/utils/constants.ts:8](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/constants.ts#L8)

___

### BTC\_IN\_SAT

• `Const` **BTC\_IN\_SAT**: ``100000000``

#### Defined in

[src/utils/currency.ts:10](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L10)

___

### DOT\_IN\_PLANCK

• `Const` **DOT\_IN\_PLANCK**: ``10000000000``

#### Defined in

[src/utils/currency.ts:12](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L12)

___

### FIXEDI128\_SCALING\_FACTOR

• `Const` **FIXEDI128\_SCALING\_FACTOR**: ``18``

#### Defined in

[src/utils/constants.ts:2](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/constants.ts#L2)

___

### IGNORED\_ERROR\_MESSAGES

• `Const` **IGNORED\_ERROR\_MESSAGES**: `string`[]

#### Defined in

[src/utils/constants.ts:6](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/constants.ts#L6)

___

### INDEX\_LOCAL\_URL

• `Const` **INDEX\_LOCAL\_URL**: ``"http://localhost:3007"``

#### Defined in

[src/utils/constants.ts:14](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/constants.ts#L14)

___

### MAINNET\_ESPLORA\_BASE\_PATH

• `Const` **MAINNET\_ESPLORA\_BASE\_PATH**: ``"https://blockstream.info/api"``

#### Defined in

[src/utils/constants.ts:10](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/constants.ts#L10)

___

### MBTC\_IN\_SAT

• `Const` **MBTC\_IN\_SAT**: ``100000``

#### Defined in

[src/utils/currency.ts:11](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L11)

___

### PERCENTAGE\_GRANULARITY

• `Const` **PERCENTAGE\_GRANULARITY**: ``3``

#### Defined in

[src/utils/constants.ts:1](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/constants.ts#L1)

___

### REGTEST\_ESPLORA\_BASE\_PATH

• `Const` **REGTEST\_ESPLORA\_BASE\_PATH**: ``"http://localhost:3002"``

#### Defined in

[src/utils/constants.ts:12](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/constants.ts#L12)

___

### TESTNET\_ESPLORA\_BASE\_PATH

• `Const` **TESTNET\_ESPLORA\_BASE\_PATH**: ``"https://btc-testnet.interlay.io"``

#### Defined in

[src/utils/constants.ts:11](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/constants.ts#L11)

## Functions

### addHexPrefix

▸ **addHexPrefix**(`str`): `string`

Ensure the `0x` hex prefix is present

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:59](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L59)

___

### allocateAmountsToVaults

▸ **allocateAmountsToVaults**(`vaultsWithAvailableAmounts`, `amountToAllocate`): `Map`<`AccountId`, `BTCAmount`\>

Given a list of vaults with availabilities (e.g. collateral for issue, tokens
for redeem) and an amount to allocate, selects one or more vaults to fulfil
the request.
If the amount cannot be allocated by a single vault, greedily selects the vault
with highest available amount and tries again for the remainder. If at leaast
one vault can fulfil a request alone, a random one among them is selected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsWithAvailableAmounts` | `Map`<`AccountId`, `BTCAmount`\> |
| `amountToAllocate` | `BTCAmount` |

#### Returns

`Map`<`AccountId`, `BTCAmount`\>

#### Defined in

[src/utils/issueRedeem.ts:66](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/issueRedeem.ts#L66)

___

### bigToBn

▸ **bigToBn**(`x`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Big` |

#### Returns

`BN`

#### Defined in

[src/utils/currency.ts:41](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L41)

___

### bnToBig

▸ **bnToBig**(`x`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `BN` |

#### Returns

`Big`

#### Defined in

[src/utils/currency.ts:37](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L37)

___

### btcAddressFromParams

▸ **btcAddressFromParams**(`registry`, `params`): `BtcAddress`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registry` | `TypeRegistry` |
| `params` | { `p2pkh`: `H160` \| `string`  } \| { `p2sh`: `H160` \| `string`  } \| { `p2wpkhv0`: `H160` \| `string`  } |

#### Returns

`BtcAddress`

#### Defined in

[src/utils/bitcoin.ts:73](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/bitcoin.ts#L73)

___

### btcToSat

▸ **btcToSat**(`btc`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `btc` | `Big` |

#### Returns

`BN`

#### Defined in

[src/utils/currency.ts:56](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L56)

___

### computeLazyDistribution

▸ **computeLazyDistribution**(`stake`, `perToken`, `tally`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stake` | `Big` |
| `perToken` | `Big` |
| `tally` | `Big` |

#### Returns

`Big`

#### Defined in

[src/utils/currency.ts:72](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L72)

___

### createAPIRegistry

▸ **createAPIRegistry**(): `TypeRegistry`

#### Returns

`TypeRegistry`

#### Defined in

[src/factory.ts:48](https://github.com/interlay/interbtc-js/blob/f88be88/src/factory.ts#L48)

___

### createInterbtcAPI

▸ **createInterbtcAPI**(`endpoint`, `network?`, `account?`, `autoConnect?`, `indexEndpoint?`): `Promise`<[`InterBTCAPI`](/interfaces/InterBTCAPI.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |
| `account?` | `AddressOrPair` | `undefined` |
| `autoConnect?` | `number` \| ``false`` | `undefined` |
| `indexEndpoint?` | `string` | `undefined` |

#### Returns

`Promise`<[`InterBTCAPI`](/interfaces/InterBTCAPI.md)\>

#### Defined in

[src/factory.ts:29](https://github.com/interlay/interbtc-js/blob/f88be88/src/factory.ts#L29)

___

### createPolkadotAPI

▸ **createPolkadotAPI**(`endpoint`, `autoConnect?`): `Promise`<`ApiPromise`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `autoConnect?` | `number` \| ``false`` |

#### Returns

`Promise`<`ApiPromise`\>

#### Defined in

[src/factory.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/factory.ts#L22)

___

### createProvider

▸ **createProvider**(`endpoint`, `autoConnect?`): `ProviderInterface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `autoConnect?` | `number` \| ``false`` |

#### Returns

`ProviderInterface`

#### Defined in

[src/factory.ts:12](https://github.com/interlay/interbtc-js/blob/f88be88/src/factory.ts#L12)

___

### currencyIdToMonetaryCurrency

▸ **currencyIdToMonetaryCurrency**<`C`\>(`currencyId`): `Currency`<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | `CurrencyId` |

#### Returns

`Currency`<`C`\>

#### Defined in

[src/types/currency.ts:60](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/currency.ts#L60)

___

### decodeBtcAddress

▸ **decodeBtcAddress**(`address`, `network`): { `p2pkh`: `string`  } \| { `p2sh`: `string`  } \| { `p2wpkhv0`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

{ `p2pkh`: `string`  } \| { `p2sh`: `string`  } \| { `p2wpkhv0`: `string`  }

#### Defined in

[src/utils/bitcoin.ts:57](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/bitcoin.ts#L57)

___

### decodeFixedPointType

▸ **decodeFixedPointType**(`x`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `SignedFixedPoint` \| `UnsignedFixedPoint` |

#### Returns

`Big`

#### Defined in

[src/utils/encoding.ts:96](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L96)

___

### dotToPlanck

▸ **dotToPlanck**(`dot`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dot` | `Big` |

#### Returns

`BN`

#### Defined in

[src/utils/currency.ts:68](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L68)

___

### encodeBtcAddress

▸ **encodeBtcAddress**(`address`, `network`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `BtcAddress` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

`string`

#### Defined in

[src/utils/bitcoin.ts:11](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/bitcoin.ts#L11)

___

### encodeUnsignedFixedPoint

▸ **encodeUnsignedFixedPoint**(`api`, `x`): `UnsignedFixedPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `x` | `Big` |

#### Returns

`UnsignedFixedPoint`

#### Defined in

[src/utils/encoding.ts:102](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L102)

___

### ensureHashEncoded

▸ **ensureHashEncoded**(`api`, `hash`): `H256`

Ensure a hash value is an encoded H256

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | The polkadot API promise used to encode if necessary |
| `hash` | `H256` \| `string` | The either H256 or string encoded hash |

#### Returns

`H256`

#### Defined in

[src/utils/encoding.ts:68](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L68)

___

### getAPITypes

▸ **getAPITypes**(): `RegistryTypes`

#### Returns

`RegistryTypes`

#### Defined in

[src/factory.ts:40](https://github.com/interlay/interbtc-js/blob/f88be88/src/factory.ts#L40)

___

### getBitcoinNetwork

▸ **getBitcoinNetwork**(`network?`): [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |

#### Returns

[`Network`](/interfaces/bitcoin.networks.Network.md)

#### Defined in

[src/interbtc-api.ts:29](https://github.com/interlay/interbtc-js/blob/f88be88/src/interbtc-api.ts#L29)

___

### getRPCTypes

▸ **getRPCTypes**(): `Record`<`string`, `Record`<`string`, `DefinitionRpc` \| `DefinitionRpcSub`\>\>

#### Returns

`Record`<`string`, `Record`<`string`, `DefinitionRpc` \| `DefinitionRpcSub`\>\>

#### Defined in

[src/factory.ts:44](https://github.com/interlay/interbtc-js/blob/f88be88/src/factory.ts#L44)

___

### getRequestIdsFromEvents

▸ **getRequestIdsFromEvents**(`events`, `eventToFind`, `api`): `Hash`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending a transaction |
| `eventToFind` | `AugmentedEvent`<`ApiTypes`, `AnyTuple`\> | - |
| `api` | `ApiPromise` | - |

#### Returns

`Hash`[]

The id associated with the transaction. If the EventRecord array does not
contain required events, the function throws an error.

#### Defined in

[src/utils/issueRedeem.ts:40](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/issueRedeem.ts#L40)

___

### getStorageKey

▸ **getStorageKey**(`moduleName`, `storageItemName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `storageItemName` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/storage.ts:11](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/storage.ts#L11)

___

### getTxProof

▸ **getTxProof**(`electrsAPI`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<[`Bytes`, `Bytes`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<[`Bytes`, `Bytes`]\>

#### Defined in

[src/utils/bitcoin.ts:82](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/bitcoin.ts#L82)

___

### initializeExchangeRate

▸ **initializeExchangeRate**(`exchangeRateToSet`, `oracleAPI`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeRateToSet` | `ExchangeRate`<`Bitcoin`, `BTCUnit`, `Polkadot`, `PolkadotUnit`\> |
| `oracleAPI` | [`OracleAPI`](/interfaces/OracleAPI.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/setup.ts:151](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/setup.ts#L151)

___

### initializeIssue

▸ **initializeIssue**(`api`, `electrsAPI`, `bitcoinCoreClient`, `issuingAccount`, `amountToIssue`, `vaultAddress`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) |
| `issuingAccount` | `KeyringPair` |
| `amountToIssue` | `BTCAmount` |
| `vaultAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/setup.ts:164](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/setup.ts#L164)

___

### initializeRedeem

▸ **initializeRedeem**(`redeemAPI`, `amountToRedeem`, `redeemBTCAddress`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemAPI` | [`RedeemAPI`](/interfaces/RedeemAPI.md) |
| `amountToRedeem` | `BTCAmount` |
| `redeemBTCAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/setup.ts:176](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/setup.ts#L176)

___

### initializeStableConfirmations

▸ **initializeStableConfirmations**(`api`, `stableConfirmationsToSet`, `transactionAPI`, `bitcoinCoreClient`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `stableConfirmationsToSet` | [`ChainConfirmations`](/interfaces/ChainConfirmations.md) |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/setup.ts:127](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/setup.ts#L127)

___

### initializeVaultNomination

▸ **initializeVaultNomination**(`enabled`, `nominationAPI`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |
| `nominationAPI` | [`NominationAPI`](/interfaces/NominationAPI.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/setup.ts:159](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/setup.ts#L159)

___

### issueAndRedeem

▸ **issueAndRedeem**(`api`, `electrsAPI`, `bitcoinCoreClient`, `account`, `vaultAddress?`, `issueAmount?`, `redeemAmount?`, `autoExecuteIssue?`, `autoExecuteRedeem?`, `triggerRefund?`, `network?`, `atomic?`): `Promise`<[[`Issue`](/interfaces/Issue.md), [`Redeem`](/interfaces/Redeem.md)]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) | `undefined` |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) | `undefined` |
| `account` | `KeyringPair` | `undefined` |
| `vaultAddress?` | `string` | `undefined` |
| `issueAmount` | `MonetaryAmount`<`Currency`<`Object`\>, `Object`\> | `undefined` |
| `redeemAmount` | `MonetaryAmount`<`Currency`<`Object`\>, `Object`\> | `undefined` |
| `autoExecuteIssue` | `boolean` | `true` |
| `autoExecuteRedeem` | [`ExecuteRedeem`](/enums/ExecuteRedeem.md) | `undefined` |
| `triggerRefund` | `boolean` | `false` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"regtest"` |
| `atomic` | `boolean` | `true` |

#### Returns

`Promise`<[[`Issue`](/interfaces/Issue.md), [`Redeem`](/interfaces/Redeem.md)]\>

#### Defined in

[src/utils/issueRedeem.ts:225](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/issueRedeem.ts#L225)

___

### issueSingle

▸ **issueSingle**(`api`, `electrsAPI`, `bitcoinCoreClient`, `issuingAccount`, `amount`, `vaultAddress?`, `autoExecute?`, `triggerRefund?`, `network?`, `atomic?`): `Promise`<[`IssueResult`](/interfaces/IssueResult.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) | `undefined` |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) | `undefined` |
| `issuingAccount` | `KeyringPair` | `undefined` |
| `amount` | `BTCAmount` | `undefined` |
| `vaultAddress?` | `string` | `undefined` |
| `autoExecute` | `boolean` | `true` |
| `triggerRefund` | `boolean` | `false` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"regtest"` |
| `atomic` | `boolean` | `true` |

#### Returns

`Promise`<[`IssueResult`](/interfaces/IssueResult.md)\>

#### Defined in

[src/utils/issueRedeem.ts:101](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/issueRedeem.ts#L101)

___

### monetaryToCurrencyId

▸ **monetaryToCurrencyId**<`C`\>(`monetary`): [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `monetary` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

[`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Defined in

[src/types/currency.ts:27](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/currency.ts#L27)

___

### newAccountId

▸ **newAccountId**(`api`, `accountId`): `AccountId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `accountId` | `string` |

#### Returns

`AccountId`

#### Defined in

[src/utils/encoding.ts:145](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L145)

___

### newMonetaryAmount

▸ **newMonetaryAmount**<`C`\>(`amount`, `currency`, `base?`): `MonetaryAmount`<`Currency`<`C`\>, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `BigSource` | `undefined` |
| `currency` | `Currency`<`C`\> | `undefined` |
| `base` | `boolean` | `false` |

#### Returns

`MonetaryAmount`<`Currency`<`C`\>, `C`\>

#### Defined in

[src/utils/currency.ts:83](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L83)

___

### parseRefundRequest

▸ **parseRefundRequest**(`req`, `network`): [`RefundRequestExt`](/interfaces/RefundRequestExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `RefundRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

[`RefundRequestExt`](/interfaces/RefundRequestExt.md)

#### Defined in

[src/utils/encoding.ts:149](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L149)

___

### parseReplaceRequest

▸ **parseReplaceRequest**(`req`, `network`): [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `ReplaceRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)

#### Defined in

[src/utils/encoding.ts:162](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L162)

___

### parseSystemVault

▸ **parseSystemVault**(`vault`): [`SystemVaultExt`](/interfaces/SystemVaultExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vault` | `SystemVault` |

#### Returns

[`SystemVaultExt`](/interfaces/SystemVaultExt.md)

#### Defined in

[src/utils/encoding.ts:137](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L137)

___

### parseWallet

▸ **parseWallet**(`wallet`, `network`): [`WalletExt`](/interfaces/WalletExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `Wallet` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

[`WalletExt`](/interfaces/WalletExt.md)

#### Defined in

[src/utils/encoding.ts:123](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L123)

___

### planckToDOT

▸ **planckToDOT**(`planck`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planck` | `BN` |

#### Returns

`Big`

#### Defined in

[src/utils/currency.ts:63](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L63)

___

### redeem

▸ **redeem**(`api`, `electrsAPI`, `redeemingAccount`, `amount`, `vaultAddress?`, `autoExecute?`, `network?`, `atomic?`, `timeout?`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) | `undefined` |
| `redeemingAccount` | `KeyringPair` | `undefined` |
| `amount` | `BTCAmount` | `undefined` |
| `vaultAddress?` | `string` | `undefined` |
| `autoExecute` | [`ExecuteRedeem`](/enums/ExecuteRedeem.md) | `undefined` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"regtest"` |
| `atomic` | `boolean` | `true` |
| `timeout` | `number` | `undefined` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Defined in

[src/utils/issueRedeem.ts:180](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/issueRedeem.ts#L180)

___

### reverseEndianness

▸ **reverseEndianness**(`bytes`): `Uint8Array`

Converts endianness of a Uint8Array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | Uint8Array, to be converted LE<>BE |

#### Returns

`Uint8Array`

#### Defined in

[src/utils/encoding.ts:29](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L29)

___

### reverseEndiannessHex

▸ **reverseEndiannessHex**(`hex`): `string`

Reverse the endianness of the given hex string

**`dev`** Will remove `0x` prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:81](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L81)

___

### roundLastNDigits

▸ **roundLastNDigits**(`n`, `x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `x` | `BN` \| `Big` \| `string` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:76](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L76)

___

### roundTwoDecimals

▸ **roundTwoDecimals**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:14](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L14)

___

### roundUpBigToNearestInteger

▸ **roundUpBigToNearestInteger**(`x`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Big` |

#### Returns

`Big`

#### Defined in

[src/utils/currency.ts:19](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L19)

___

### roundUpBtcToNearestSatoshi

▸ **roundUpBtcToNearestSatoshi**(`amountBtc`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountBtc` | `Big` |

#### Returns

`Big`

#### Defined in

[src/utils/currency.ts:33](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L33)

___

### satToBTC

▸ **satToBTC**(`sat`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sat` | `BN` |

#### Returns

`Big`

#### Defined in

[src/utils/currency.ts:46](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L46)

___

### satToMBTC

▸ **satToMBTC**(`sat`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sat` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:51](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/currency.ts#L51)

___

### setNumericStorage

▸ **setNumericStorage**(`api`, `moduleName`, `storageItemName`, `value`, `transactionAPI`, `bits?`, `isLittleEndian?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `moduleName` | `string` | `undefined` |
| `storageItemName` | `string` | `undefined` |
| `value` | `BN` | `undefined` |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) | `undefined` |
| `bits` | `number` | `32` |
| `isLittleEndian` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/storage.ts:15](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/storage.ts#L15)

___

### sleep

▸ **sleep**(`ms`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/issueRedeem.ts:176](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/issueRedeem.ts#L176)

___

### storageKeyToNthInner

▸ **storageKeyToNthInner**<`T`\>(`s`, `n?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `StorageKey`<`T`[]\> | `undefined` |
| `n` | `number` | `0` |

#### Returns

`T`

#### Defined in

[src/utils/encoding.ts:110](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L110)

___

### stripHexPrefix

▸ **stripHexPrefix**(`str`): `string`

Remove the `0x` hex prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:51](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L51)

___

### tickerToCurrencyIdLiteral

▸ **tickerToCurrencyIdLiteral**(`ticker`): [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticker` | `string` |

#### Returns

[`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Defined in

[src/types/currency.ts:45](https://github.com/interlay/interbtc-js/blob/f88be88/src/types/currency.ts#L45)

___

### uint8ArrayToString

▸ **uint8ArrayToString**(`bytes`): `string`

Converts a Uint8Array to string

**`dev`** Will remove `0x` prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:92](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L92)
