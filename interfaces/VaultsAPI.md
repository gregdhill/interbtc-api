[@interlay/interbtc](/README.md) / [Exports](/modules.md) / VaultsAPI

# Interface: VaultsAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`VaultsAPI`**

## Implemented by

- [`DefaultVaultsAPI`](/classes/DefaultVaultsAPI.md)

## Table of contents

### Methods

- [depositCollateral](/interfaces/VaultsAPI.md#depositcollateral)
- [get](/interfaces/VaultsAPI.md#get)
- [getAPY](/interfaces/VaultsAPI.md#getapy)
- [getAccount](/interfaces/VaultsAPI.md#getaccount)
- [getBackingCollateral](/interfaces/VaultsAPI.md#getbackingcollateral)
- [getCollateral](/interfaces/VaultsAPI.md#getcollateral)
- [getIssuableAmount](/interfaces/VaultsAPI.md#getissuableamount)
- [getIssuedAmount](/interfaces/VaultsAPI.md#getissuedamount)
- [getLiquidationCollateralThreshold](/interfaces/VaultsAPI.md#getliquidationcollateralthreshold)
- [getLiquidationVault](/interfaces/VaultsAPI.md#getliquidationvault)
- [getLiquidationVaultId](/interfaces/VaultsAPI.md#getliquidationvaultid)
- [getMaxNominationRatio](/interfaces/VaultsAPI.md#getmaxnominationratio)
- [getMaxSLA](/interfaces/VaultsAPI.md#getmaxsla)
- [getPremiumRedeemThreshold](/interfaces/VaultsAPI.md#getpremiumredeemthreshold)
- [getPremiumRedeemVaults](/interfaces/VaultsAPI.md#getpremiumredeemvaults)
- [getPunishmentFee](/interfaces/VaultsAPI.md#getpunishmentfee)
- [getRequiredCollateralForVault](/interfaces/VaultsAPI.md#getrequiredcollateralforvault)
- [getRequiredCollateralForWrapped](/interfaces/VaultsAPI.md#getrequiredcollateralforwrapped)
- [getSLA](/interfaces/VaultsAPI.md#getsla)
- [getSecureCollateralThreshold](/interfaces/VaultsAPI.md#getsecurecollateralthreshold)
- [getStakingCapacity](/interfaces/VaultsAPI.md#getstakingcapacity)
- [getSystemCollateralization](/interfaces/VaultsAPI.md#getsystemcollateralization)
- [getTotalIssuableAmount](/interfaces/VaultsAPI.md#gettotalissuableamount)
- [getTotalIssuedAmount](/interfaces/VaultsAPI.md#gettotalissuedamount)
- [getVaultCollateralization](/interfaces/VaultsAPI.md#getvaultcollateralization)
- [getVaultsWithIssuableTokens](/interfaces/VaultsAPI.md#getvaultswithissuabletokens)
- [getVaultsWithRedeemableTokens](/interfaces/VaultsAPI.md#getvaultswithredeemabletokens)
- [isVaultFlaggedForTheft](/interfaces/VaultsAPI.md#isvaultflaggedfortheft)
- [list](/interfaces/VaultsAPI.md#list)
- [mapIssueRequests](/interfaces/VaultsAPI.md#mapissuerequests)
- [mapRedeemRequests](/interfaces/VaultsAPI.md#mapredeemrequests)
- [mapReplaceRequests](/interfaces/VaultsAPI.md#mapreplacerequests)
- [selectRandomVaultIssue](/interfaces/VaultsAPI.md#selectrandomvaultissue)
- [selectRandomVaultRedeem](/interfaces/VaultsAPI.md#selectrandomvaultredeem)
- [sendLogged](/interfaces/VaultsAPI.md#sendlogged)
- [setAccount](/interfaces/VaultsAPI.md#setaccount)
- [withdrawCollateral](/interfaces/VaultsAPI.md#withdrawcollateral)

## Methods

### depositCollateral

▸ **depositCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of extra collateral to lock |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:225](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L225)

___

### get

▸ **get**(`vaultId`): `Promise`<[`VaultExt`](/interfaces/VaultExt.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The ID of the vault to fetch |

#### Returns

`Promise`<[`VaultExt`](/interfaces/VaultExt.md)\>

A vault object

#### Defined in

[src/parachain/vaults.ts:78](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L78)

___

### getAPY

▸ **getAPY**(`vaultId`): `Promise`<`Big`\>

Get the total APY for a vault based on the income in InterBTC and DOT
divided by the locked DOT.

**`note`** this does not account for interest compounding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | the id of the vault |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Defined in

[src/parachain/vaults.ts:201](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L201)

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

### getBackingCollateral

▸ **getBackingCollateral**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | account id |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The entire collateral backing a vault's issued tokens.

#### Defined in

[src/parachain/vaults.ts:261](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L261)

___

### getCollateral

▸ **getCollateral**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | account id |
| `currency` | `Currency`<`C`\> | The collateral currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The collateral of a vault, taking slashes into account.

#### Defined in

[src/parachain/vaults.ts:239](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L239)

___

### getIssuableAmount

▸ **getIssuableAmount**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |

#### Returns

`Promise`<`BTCAmount`\>

The amount of InterBTC issuable by this vault

#### Defined in

[src/parachain/vaults.ts:138](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L138)

___

### getIssuedAmount

▸ **getIssuedAmount**(`vaultId`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |

#### Returns

`Promise`<`BTCAmount`\>

The amount of InterBTC issued by the given vault

#### Defined in

[src/parachain/vaults.ts:133](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L133)

___

### getLiquidationCollateralThreshold

▸ **getLiquidationCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The lower bound for the collateral rate in InterBTC.
If a Vault’s collateral rate
drops below this, automatic liquidation (forced Redeem) is triggered.

#### Defined in

[src/parachain/vaults.ts:180](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L180)

___

### getLiquidationVault

▸ **getLiquidationVault**(): `Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)\>

#### Returns

`Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)\>

A vault object representing the liquidation vault

#### Defined in

[src/parachain/vaults.ts:233](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L233)

___

### getLiquidationVaultId

▸ **getLiquidationVaultId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The account id of the liquidation vault

#### Defined in

[src/parachain/vaults.ts:229](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L229)

___

### getMaxNominationRatio

▸ **getMaxNominationRatio**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The maximum collateral a vault can accept as nomination, as a ratio of its own collateral

#### Defined in

[src/parachain/vaults.ts:246](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L246)

___

### getMaxSLA

▸ **getMaxSLA**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The maximum SLA score, a positive integer

#### Defined in

[src/parachain/vaults.ts:210](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L210)

___

### getPremiumRedeemThreshold

▸ **getPremiumRedeemThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The collateral rate of Vaults at which users receive
a premium in DOT, allocated from the
Vault’s collateral, when performing a redeem with this Vault.

#### Defined in

[src/parachain/vaults.ts:186](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L186)

___

### getPremiumRedeemVaults

▸ **getPremiumRedeemVaults**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens

#### Defined in

[src/parachain/vaults.ts:161](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L161)

___

### getPunishmentFee

▸ **getPunishmentFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

Fee that a Vault has to pay, as a percentage, if it fails to execute
redeem or replace requests (for redeem, on top of the slashed BTC-in-DOT
value of the request). The fee is paid in DOT based on the InterBTC
amount at the current exchange rate.

#### Defined in

[src/parachain/vaults.ts:217](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L217)

___

### getRequiredCollateralForVault

▸ **getRequiredCollateralForVault**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the amount of collateral required for the given vault to be at the
current SecureCollateralThreshold with the current exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral the vault needs to deposit to stay
above the threshold limit

#### Defined in

[src/parachain/vaults.ts:113](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L113)

___

### getRequiredCollateralForWrapped

▸ **getRequiredCollateralForWrapped**<`C`\>(`amount`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the minimum amount of collateral required for the given amount of btc
with the current threshold and exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | Amount to issue, denominated in BTC |
| `currency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral for issuing, denominated in DOT

#### Defined in

[src/parachain/vaults.ts:125](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L125)

___

### getSLA

▸ **getSLA**(`vaultId`): `Promise`<`number`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |

#### Returns

`Promise`<`number`\>

The SLA score of the given vault, an integer in the range [0, MaxSLA]

#### Defined in

[src/parachain/vaults.ts:206](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L206)

___

### getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The over-collateralization rate for DOT collateral locked
by Vaults, necessary for issuing InterBTC

#### Defined in

[src/parachain/vaults.ts:191](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L191)

___

### getStakingCapacity

▸ **getStakingCapacity**<`C`\>(`vaultId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | account id |
| `currency` | `Currency`<`C`\> | The collateral currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Staking capacity, as a collateral currency (e.g. DOT)

#### Defined in

[src/parachain/vaults.ts:252](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L252)

___

### getSystemCollateralization

▸ **getSystemCollateralization**(): `Promise`<`undefined` \| `Big`\>

Get the total system collateralization measured by the amount of issued InterBTC
divided by the total locked DOT collateral.

#### Returns

`Promise`<`undefined` \| `Big`\>

The total system collateralization

#### Defined in

[src/parachain/vaults.ts:103](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L103)

___

### getTotalIssuableAmount

▸ **getTotalIssuableAmount**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The total amount of InterBTC that can be issued, considering the DOT
locked by the vaults

#### Defined in

[src/parachain/vaults.ts:147](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L147)

___

### getTotalIssuedAmount

▸ **getTotalIssuedAmount**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The total amount of InterBTC issued by the vaults

#### Defined in

[src/parachain/vaults.ts:142](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L142)

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
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | the vault account id |
| `newCollateral?` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | use this instead of the vault's actual collateral |
| `onlyIssued?` | `boolean` | optional, defaults to `false`. Specifies whether the collateralization should only include the issued tokens, leaving out unsettled ("to-be-issued") tokens |

#### Returns

`Promise`<`undefined` \| `Big`\>

the vault collateralization

#### Defined in

[src/parachain/vaults.ts:92](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L92)

___

### getVaultsWithIssuableTokens

▸ **getVaultsWithIssuableTokens**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults with issuable tokens, sorted in descending order of this value

#### Defined in

[src/parachain/vaults.ts:165](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L165)

___

### getVaultsWithRedeemableTokens

▸ **getVaultsWithRedeemableTokens**(): `Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `BTCAmount`\>\>

Vaults with redeemable tokens, sorted in descending order of this value

#### Defined in

[src/parachain/vaults.ts:169](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L169)

___

### isVaultFlaggedForTheft

▸ **isVaultFlaggedForTheft**(`vaultId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The vault account ID |

#### Returns

`Promise`<`boolean`\>

A bollean value

#### Defined in

[src/parachain/vaults.ts:174](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L174)

___

### list

▸ **list**(): `Promise`<[`VaultExt`](/interfaces/VaultExt.md)[]\>

#### Returns

`Promise`<[`VaultExt`](/interfaces/VaultExt.md)[]\>

An array containing the vaults with non-zero backing collateral

#### Defined in

[src/parachain/vaults.ts:51](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L51)

___

### mapIssueRequests

▸ **mapIssueRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`Issue`](/interfaces/Issue.md)\>\>

Fetch the issue requests associated with a vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The AccountId of the vault used to filter issue requests |

#### Returns

`Promise`<`Map`<`H256`, [`Issue`](/interfaces/Issue.md)\>\>

A map with issue ids to issue requests involving said vault

#### Defined in

[src/parachain/vaults.ts:58](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L58)

___

### mapRedeemRequests

▸ **mapRedeemRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`Redeem`](/interfaces/Redeem.md)\>\>

Fetch the redeem requests associated with a vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The AccountId of the vault used to filter redeem requests |

#### Returns

`Promise`<`Map`<`H256`, [`Redeem`](/interfaces/Redeem.md)\>\>

A map with redeem ids to redeem requests involving said vault

#### Defined in

[src/parachain/vaults.ts:65](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L65)

___

### mapReplaceRequests

▸ **mapReplaceRequests**(`vaultId`): `Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

Fetch the replace requests associated with a vault. In the returned requests,
the vault is either the replaced or the replacing one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The AccountId of the vault used to filter replace requests |

#### Returns

`Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

A map with replace ids to replace requests involving said vault as new vault and old vault

#### Defined in

[src/parachain/vaults.ts:73](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L73)

___

### selectRandomVaultIssue

▸ **selectRandomVaultIssue**(`amount`): `Promise`<`AccountId`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | InterBTC amount to issue |

#### Returns

`Promise`<`AccountId`\>

A vault that has sufficient DOT collateral to issue the given InterBTC amount

#### Defined in

[src/parachain/vaults.ts:152](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L152)

___

### selectRandomVaultRedeem

▸ **selectRandomVaultRedeem**(`amount`): `Promise`<`AccountId`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | InterBTC amount to redeem |

#### Returns

`Promise`<`AccountId`\>

A vault that has issued sufficient InterBTC to redeem the given InterBTC amount

#### Defined in

[src/parachain/vaults.ts:157](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L157)

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

### withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of collateral to withdraw |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:221](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/vaults.ts#L221)
