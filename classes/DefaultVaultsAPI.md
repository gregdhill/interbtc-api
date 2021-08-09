[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultVaultsAPI

# Class: DefaultVaultsAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultVaultsAPI`**

## Implements

- [`VaultsAPI`](/interfaces/VaultsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultVaultsAPI.md#constructor)

### Properties

- [api](/classes/DefaultVaultsAPI.md#api)
- [btcNetwork](/classes/DefaultVaultsAPI.md#btcnetwork)
- [feeAPI](/classes/DefaultVaultsAPI.md#feeapi)
- [granularity](/classes/DefaultVaultsAPI.md#granularity)
- [oracleAPI](/classes/DefaultVaultsAPI.md#oracleapi)
- [poolsAPI](/classes/DefaultVaultsAPI.md#poolsapi)
- [tokensAPI](/classes/DefaultVaultsAPI.md#tokensapi)

### Methods

- [calculateCapacity](/classes/DefaultVaultsAPI.md#calculatecapacity)
- [depositCollateral](/classes/DefaultVaultsAPI.md#depositcollateral)
- [get](/classes/DefaultVaultsAPI.md#get)
- [getAPY](/classes/DefaultVaultsAPI.md#getapy)
- [getAccount](/classes/DefaultVaultsAPI.md#getaccount)
- [getBackingCollateral](/classes/DefaultVaultsAPI.md#getbackingcollateral)
- [getCollateral](/classes/DefaultVaultsAPI.md#getcollateral)
- [getIssuableAmount](/classes/DefaultVaultsAPI.md#getissuableamount)
- [getIssuedAmount](/classes/DefaultVaultsAPI.md#getissuedamount)
- [getLiquidationCollateralThreshold](/classes/DefaultVaultsAPI.md#getliquidationcollateralthreshold)
- [getLiquidationVault](/classes/DefaultVaultsAPI.md#getliquidationvault)
- [getLiquidationVaultId](/classes/DefaultVaultsAPI.md#getliquidationvaultid)
- [getMaxNominationRatio](/classes/DefaultVaultsAPI.md#getmaxnominationratio)
- [getMaxSLA](/classes/DefaultVaultsAPI.md#getmaxsla)
- [getPremiumRedeemThreshold](/classes/DefaultVaultsAPI.md#getpremiumredeemthreshold)
- [getPremiumRedeemVaults](/classes/DefaultVaultsAPI.md#getpremiumredeemvaults)
- [getPunishmentFee](/classes/DefaultVaultsAPI.md#getpunishmentfee)
- [getRequiredCollateralForVault](/classes/DefaultVaultsAPI.md#getrequiredcollateralforvault)
- [getRequiredCollateralForWrapped](/classes/DefaultVaultsAPI.md#getrequiredcollateralforwrapped)
- [getSLA](/classes/DefaultVaultsAPI.md#getsla)
- [getSecureCollateralThreshold](/classes/DefaultVaultsAPI.md#getsecurecollateralthreshold)
- [getStakingCapacity](/classes/DefaultVaultsAPI.md#getstakingcapacity)
- [getSystemCollateralization](/classes/DefaultVaultsAPI.md#getsystemcollateralization)
- [getTotalIssuableAmount](/classes/DefaultVaultsAPI.md#gettotalissuableamount)
- [getTotalIssuedAmount](/classes/DefaultVaultsAPI.md#gettotalissuedamount)
- [getVaultCollateralization](/classes/DefaultVaultsAPI.md#getvaultcollateralization)
- [getVaultsWithIssuableTokens](/classes/DefaultVaultsAPI.md#getvaultswithissuabletokens)
- [getVaultsWithRedeemableTokens](/classes/DefaultVaultsAPI.md#getvaultswithredeemabletokens)
- [isNoTokensIssuedError](/classes/DefaultVaultsAPI.md#isnotokensissuederror)
- [isVaultFlaggedForTheft](/classes/DefaultVaultsAPI.md#isvaultflaggedfortheft)
- [list](/classes/DefaultVaultsAPI.md#list)
- [mapIssueRequests](/classes/DefaultVaultsAPI.md#mapissuerequests)
- [mapRedeemRequests](/classes/DefaultVaultsAPI.md#mapredeemrequests)
- [mapReplaceRequests](/classes/DefaultVaultsAPI.md#mapreplacerequests)
- [parseVault](/classes/DefaultVaultsAPI.md#parsevault)
- [register](/classes/DefaultVaultsAPI.md#register)
- [selectRandomVaultIssue](/classes/DefaultVaultsAPI.md#selectrandomvaultissue)
- [selectRandomVaultRedeem](/classes/DefaultVaultsAPI.md#selectrandomvaultredeem)
- [sendLogged](/classes/DefaultVaultsAPI.md#sendlogged)
- [setAccount](/classes/DefaultVaultsAPI.md#setaccount)
- [unwrapCurrency](/classes/DefaultVaultsAPI.md#unwrapcurrency)
- [withdrawCollateral](/classes/DefaultVaultsAPI.md#withdrawcollateral)
- [wrapCurrency](/classes/DefaultVaultsAPI.md#wrapcurrency)
- [doesArrayContainEvent](/classes/DefaultVaultsAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultVaultsAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultVaultsAPI.md#printevents)
- [waitForEvent](/classes/DefaultVaultsAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultVaultsAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/vaults.ts:275](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L275)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### btcNetwork

• `Private` **btcNetwork**: [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Defined in

[src/parachain/vaults.ts:269](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L269)

___

### feeAPI

• **feeAPI**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/parachain/vaults.ts:272](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L272)

___

### granularity

• **granularity**: `number` = `5`

#### Defined in

[src/parachain/vaults.ts:268](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L268)

___

### oracleAPI

• **oracleAPI**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/parachain/vaults.ts:271](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L271)

___

### poolsAPI

• **poolsAPI**: `PoolsAPI`

#### Defined in

[src/parachain/vaults.ts:273](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L273)

___

### tokensAPI

• **tokensAPI**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Defined in

[src/parachain/vaults.ts:270](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L270)

## Methods

### calculateCapacity

▸ `Private` **calculateCapacity**<`C`\>(`collateral`): `Promise`<`BTCAmount`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`BTCAmount`\>

#### Defined in

[src/parachain/vaults.ts:517](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L517)

___

### depositCollateral

▸ **depositCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[depositCollateral](/interfaces/VaultsAPI.md#depositcollateral)

#### Defined in

[src/parachain/vaults.ts:296](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L296)

___

### get

▸ **get**(`vaultId`): `Promise`<[`VaultExt`](/interfaces/VaultExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<[`VaultExt`](/interfaces/VaultExt.md)\>

A vault object

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[get](/interfaces/VaultsAPI.md#get)

#### Defined in

[src/parachain/vaults.ts:346](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L346)

___

### getAPY

▸ **getAPY**(`vaultId`): `Promise`<`Big`\>

Get the total APY for a vault based on the income in InterBTC and DOT
divided by the locked DOT.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getAPY](/interfaces/VaultsAPI.md#getapy)

#### Defined in

[src/parachain/vaults.ts:611](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L611)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getAccount](/interfaces/VaultsAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

___

### getBackingCollateral

▸ **getBackingCollateral**<`C`\>(`vaultId`, `currency`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `currency` | `Currency`<`C`\> |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The entire collateral backing a vault's issued tokens.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getBackingCollateral](/interfaces/VaultsAPI.md#getbackingcollateral)

#### Defined in

[src/parachain/vaults.ts:370](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L370)

___

### getCollateral

▸ **getCollateral**<`C`\>(`vaultId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The collateral of a vault, taking slashes into account.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getCollateral](/interfaces/VaultsAPI.md#getcollateral)

#### Defined in

[src/parachain/vaults.ts:355](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L355)

___

### getIssuableAmount

▸ **getIssuableAmount**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`BTCAmount`\>

The amount of InterBTC issuable by this vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getIssuableAmount](/interfaces/VaultsAPI.md#getissuableamount)

#### Defined in

[src/parachain/vaults.ts:489](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L489)

___

### getIssuedAmount

▸ **getIssuedAmount**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`BTCAmount`\>

The amount of InterBTC issued by the given vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getIssuedAmount](/interfaces/VaultsAPI.md#getissuedamount)

#### Defined in

[src/parachain/vaults.ts:484](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L484)

___

### getLiquidationCollateralThreshold

▸ **getLiquidationCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The lower bound for the collateral rate in InterBTC.
If a Vault’s collateral rate
drops below this, automatic liquidation (forced Redeem) is triggered.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getLiquidationCollateralThreshold](/interfaces/VaultsAPI.md#getliquidationcollateralthreshold)

#### Defined in

[src/parachain/vaults.ts:593](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L593)

___

### getLiquidationVault

▸ **getLiquidationVault**(): `Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)\>

#### Returns

`Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)\>

A vault object representing the liquidation vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getLiquidationVault](/interfaces/VaultsAPI.md#getliquidationvault)

#### Defined in

[src/parachain/vaults.ts:402](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L402)

___

### getLiquidationVaultId

▸ **getLiquidationVaultId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The account id of the liquidation vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getLiquidationVaultId](/interfaces/VaultsAPI.md#getliquidationvaultid)

#### Defined in

[src/parachain/vaults.ts:396](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L396)

___

### getMaxNominationRatio

▸ **getMaxNominationRatio**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The maximum collateral a vault can accept as nomination, as a ratio of its own collateral

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getMaxNominationRatio](/interfaces/VaultsAPI.md#getmaxnominationratio)

#### Defined in

[src/parachain/vaults.ts:362](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L362)

___

### getMaxSLA

▸ **getMaxSLA**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The maximum SLA score, a positive integer

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getMaxSLA](/interfaces/VaultsAPI.md#getmaxsla)

#### Defined in

[src/parachain/vaults.ts:627](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L627)

___

### getPremiumRedeemThreshold

▸ **getPremiumRedeemThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The collateral rate of Vaults at which users receive
a premium in DOT, allocated from the
Vault’s collateral, when performing a redeem with this Vault.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPremiumRedeemThreshold](/interfaces/VaultsAPI.md#getpremiumredeemthreshold)

#### Defined in

[src/parachain/vaults.ts:599](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L599)

___

### getPremiumRedeemVaults

▸ **getPremiumRedeemVaults**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPremiumRedeemVaults](/interfaces/VaultsAPI.md#getpremiumredeemvaults)

#### Defined in

[src/parachain/vaults.ts:553](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L553)

___

### getPunishmentFee

▸ **getPunishmentFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

Fee that a Vault has to pay if it fails to execute redeem or replace requests
(for redeem, on top of the slashed BTC-in-DOT value of the request). The fee is
paid in DOT based on the InterBTC amount at the current exchange rate.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPunishmentFee](/interfaces/VaultsAPI.md#getpunishmentfee)

#### Defined in

[src/parachain/vaults.ts:640](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L640)

___

### getRequiredCollateralForVault

▸ **getRequiredCollateralForVault**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the amount of collateral required for the given vault to be at the
current SecureCollateralThreshold with the current exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral the vault needs to deposit to stay
above the threshold limit

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getRequiredCollateralForVault](/interfaces/VaultsAPI.md#getrequiredcollateralforvault)

#### Defined in

[src/parachain/vaults.ts:453](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L453)

___

### getRequiredCollateralForWrapped

▸ **getRequiredCollateralForWrapped**<`C`\>(`amount`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the minimum amount of collateral required for the given amount of btc
with the current threshold and exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral for issuing, denominated in DOT

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getRequiredCollateralForWrapped](/interfaces/VaultsAPI.md#getrequiredcollateralforwrapped)

#### Defined in

[src/parachain/vaults.ts:468](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L468)

___

### getSLA

▸ **getSLA**(`vaultId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`number`\>

The SLA score of the given vault, an integer in the range [0, MaxSLA]

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getSLA](/interfaces/VaultsAPI.md#getsla)

#### Defined in

[src/parachain/vaults.ts:621](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L621)

___

### getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The over-collateralization rate for DOT collateral locked
by Vaults, necessary for issuing InterBTC

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getSecureCollateralThreshold](/interfaces/VaultsAPI.md#getsecurecollateralthreshold)

#### Defined in

[src/parachain/vaults.ts:605](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L605)

___

### getStakingCapacity

▸ **getStakingCapacity**<`C`\>(`vaultId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Staking capacity, as a collateral currency (e.g. DOT)

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getStakingCapacity](/interfaces/VaultsAPI.md#getstakingcapacity)

#### Defined in

[src/parachain/vaults.ts:383](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L383)

___

### getSystemCollateralization

▸ **getSystemCollateralization**(): `Promise`<`undefined` \| `Big`\>

Get the total system collateralization measured by the amount of issued InterBTC
divided by the total locked DOT collateral.

#### Returns

`Promise`<`undefined` \| `Big`\>

The total system collateralization

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getSystemCollateralization](/interfaces/VaultsAPI.md#getsystemcollateralization)

#### Defined in

[src/parachain/vaults.ts:441](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L441)

___

### getTotalIssuableAmount

▸ **getTotalIssuableAmount**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The total amount of InterBTC that can be issued, considering the DOT
locked by the vaults

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getTotalIssuableAmount](/interfaces/VaultsAPI.md#gettotalissuableamount)

#### Defined in

[src/parachain/vaults.ts:507](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L507)

___

### getTotalIssuedAmount

▸ **getTotalIssuedAmount**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The total amount of InterBTC issued by the vaults

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getTotalIssuedAmount](/interfaces/VaultsAPI.md#gettotalissuedamount)

#### Defined in

[src/parachain/vaults.ts:502](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L502)

___

### getVaultCollateralization

▸ **getVaultCollateralization**<`C`\>(`vaultId`, `newCollateral?`, `onlyIssued?`): `Promise`<`undefined` \| `Big`\>

Get the collateralization of a single vault measured by the amount of issued InterBTC
divided by the total locked DOT collateral.

**`remarks`** Undefined collateralization is handled as infinite collateralization in the UI.
If no tokens have been issued, the `collateralFunds / issuedFunds` ratio divides by zero,
which means collateralization is infinite.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit){ `DOT`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | `undefined` |
| `newCollateral?` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | `undefined` |
| `onlyIssued` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `Big`\>

the vault collateralization

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultCollateralization](/interfaces/VaultsAPI.md#getvaultcollateralization)

#### Defined in

[src/parachain/vaults.ts:412](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L412)

___

### getVaultsWithIssuableTokens

▸ **getVaultsWithIssuableTokens**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults with issuable tokens, sorted in descending order of this value

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultsWithIssuableTokens](/interfaces/VaultsAPI.md#getvaultswithissuabletokens)

#### Defined in

[src/parachain/vaults.ts:567](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L567)

___

### getVaultsWithRedeemableTokens

▸ **getVaultsWithRedeemableTokens**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults with redeemable tokens, sorted in descending order of this value

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultsWithRedeemableTokens](/interfaces/VaultsAPI.md#getvaultswithredeemabletokens)

#### Defined in

[src/parachain/vaults.ts:577](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L577)

___

### isNoTokensIssuedError

▸ `Private` **isNoTokensIssuedError**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`boolean`

#### Defined in

[src/parachain/vaults.ts:408](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L408)

___

### isVaultFlaggedForTheft

▸ **isVaultFlaggedForTheft**(`vaultId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`boolean`\>

A bollean value

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[isVaultFlaggedForTheft](/interfaces/VaultsAPI.md#isvaultflaggedfortheft)

#### Defined in

[src/parachain/vaults.ts:587](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L587)

___

### list

▸ **list**(): `Promise`<[`VaultExt`](/interfaces/VaultExt.md)[]\>

#### Returns

`Promise`<[`VaultExt`](/interfaces/VaultExt.md)[]\>

An array containing the vaults with non-zero backing collateral

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[list](/interfaces/VaultsAPI.md#list)

#### Defined in

[src/parachain/vaults.ts:302](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L302)

___

### mapIssueRequests

▸ **mapIssueRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`Issue`](/interfaces/Issue.md)\>\>

Fetch the issue requests associated with a vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`Issue`](/interfaces/Issue.md)\>\>

A map with issue ids to issue requests involving said vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[mapIssueRequests](/interfaces/VaultsAPI.md#mapissuerequests)

#### Defined in

[src/parachain/vaults.ts:308](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L308)

___

### mapRedeemRequests

▸ **mapRedeemRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`Redeem`](/interfaces/Redeem.md)\>\>

Fetch the redeem requests associated with a vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`Redeem`](/interfaces/Redeem.md)\>\>

A map with redeem ids to redeem requests involving said vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[mapRedeemRequests](/interfaces/VaultsAPI.md#mapredeemrequests)

#### Defined in

[src/parachain/vaults.ts:317](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L317)

___

### mapReplaceRequests

▸ **mapReplaceRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

Fetch the replace requests associated with a vault. In the returned requests,
the vault is either the replaced or the replacing one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

A map with replace ids to replace requests involving said vault as new vault and old vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[mapReplaceRequests](/interfaces/VaultsAPI.md#mapreplacerequests)

#### Defined in

[src/parachain/vaults.ts:328](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L328)

___

### parseVault

▸ **parseVault**(`vault`, `network`): `Promise`<[`VaultExt`](/interfaces/VaultExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vault` | `Vault` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

`Promise`<[`VaultExt`](/interfaces/VaultExt.md)\>

#### Defined in

[src/parachain/vaults.ts:656](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L656)

___

### register

▸ **register**(`planckCollateral`, `publicKey`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `planckCollateral` | `BN` |
| `publicKey` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:284](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L284)

___

### selectRandomVaultIssue

▸ **selectRandomVaultIssue**(`amount`): `Promise`<`AccountId`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`AccountId`\>

A vault that has sufficient DOT collateral to issue the given InterBTC amount

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[selectRandomVaultIssue](/interfaces/VaultsAPI.md#selectrandomvaultissue)

#### Defined in

[src/parachain/vaults.ts:529](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L529)

___

### selectRandomVaultRedeem

▸ **selectRandomVaultRedeem**(`amount`): `Promise`<`AccountId`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`AccountId`\>

A vault that has issued sufficient InterBTC to redeem the given InterBTC amount

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[selectRandomVaultRedeem](/interfaces/VaultsAPI.md#selectrandomvaultredeem)

#### Defined in

[src/parachain/vaults.ts:541](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L541)

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

[VaultsAPI](/interfaces/VaultsAPI.md).[sendLogged](/interfaces/VaultsAPI.md#sendlogged)

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

[VaultsAPI](/interfaces/VaultsAPI.md).[setAccount](/interfaces/VaultsAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L22)

___

### unwrapCurrency

▸ `Private` **unwrapCurrency**(`wrappedBalance`): `Balance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedBalance` | `BalanceWrapper` |

#### Returns

`Balance`

#### Defined in

[src/parachain/vaults.ts:652](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L652)

___

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[withdrawCollateral](/interfaces/VaultsAPI.md#withdrawcollateral)

#### Defined in

[src/parachain/vaults.ts:289](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L289)

___

### wrapCurrency

▸ `Private` **wrapCurrency**(`amount`): `BalanceWrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `Balance` |

#### Returns

`BalanceWrapper`

#### Defined in

[src/parachain/vaults.ts:646](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L646)

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
