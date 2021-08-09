[@interlay/interbtc](/README.md) / [Exports](/modules.md) / IssueAPI

# Interface: IssueAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`IssueAPI`**

## Implemented by

- [`DefaultIssueAPI`](/classes/DefaultIssueAPI.md)

## Table of contents

### Methods

- [cancel](/interfaces/IssueAPI.md#cancel)
- [execute](/interfaces/IssueAPI.md#execute)
- [getAccount](/interfaces/IssueAPI.md#getaccount)
- [getFeeRate](/interfaces/IssueAPI.md#getfeerate)
- [getFeesToPay](/interfaces/IssueAPI.md#getfeestopay)
- [getGriefingCollateral](/interfaces/IssueAPI.md#getgriefingcollateral)
- [getIssuePeriod](/interfaces/IssueAPI.md#getissueperiod)
- [getRequestById](/interfaces/IssueAPI.md#getrequestbyid)
- [getRequestLimits](/interfaces/IssueAPI.md#getrequestlimits)
- [getRequestsByIds](/interfaces/IssueAPI.md#getrequestsbyids)
- [list](/interfaces/IssueAPI.md#list)
- [mapForUser](/interfaces/IssueAPI.md#mapforuser)
- [request](/interfaces/IssueAPI.md#request)
- [requestAdvanced](/interfaces/IssueAPI.md#requestadvanced)
- [sendLogged](/interfaces/IssueAPI.md#sendlogged)
- [setAccount](/interfaces/IssueAPI.md#setaccount)
- [setIssuePeriod](/interfaces/IssueAPI.md#setissueperiod)

## Methods

### cancel

▸ **cancel**(`issueId`): `Promise`<`void`\>

Send an issue cancellation transaction. After the issue period has elapsed,
the issuance of InterBTC can be cancelled. As a result, the griefing collateral
of the requester will be slashed and sent to the vault that had prepared to issue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issueId` | `string` | The ID returned by the issue request transaction |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/issue.ts:110](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L110)

___

### execute

▸ **execute**(`issueId`, `txId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Send an issue execution transaction

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issueId` | `string` | The ID returned by the issue request transaction |
| `txId?` | `string` | (Optional) The ID of the Bitcoin transaction that sends funds to the vault address. |
| `merkleProof?` | `Bytes` | (Optional) The merkle inclusion proof of the Bitcoin transaction. |
| `rawTx?` | `Bytes` | (Optional) The raw bytes of the Bitcoin transaction |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/issue.ts:103](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L103)

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

### getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for issuing. For instance, "0.005" stands for 0.5%

#### Defined in

[src/parachain/issue.ts:148](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L148)

___

### getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | The amount, in BTC, for which to compute the issue fees |

#### Returns

`Promise`<`BTCAmount`\>

The fees, in BTC

#### Defined in

[src/parachain/issue.ts:153](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L153)

___

### getGriefingCollateral

▸ **getGriefingCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`CollateralUnit`](/modules.md#collateralunit) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | - |
| `collateralCurrency` | `Currency`<`C`\> | The collateral, as a currency object (using `Monetary.js`) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The griefing collateral, in DOT

#### Defined in

[src/parachain/issue.ts:159](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L159)

___

### getIssuePeriod

▸ **getIssuePeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between an issue request is created
and required completion time by a user. The issue period has an upper limit
to prevent griefing of vault collateral.

#### Defined in

[src/parachain/issue.ts:124](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L124)

___

### getRequestById

▸ **getRequestById**(`issueId`): `Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issueId` | `string` \| `H256` | The ID of the issue request to fetch |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)\>

An issue request object

#### Defined in

[src/parachain/issue.ts:139](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L139)

___

### getRequestLimits

▸ **getRequestLimits**(`vaults?`): `Promise`<`IssueLimits`\>

Gets the threshold for issuing with a single vault, and the maximum total
issue request size. Additionally passes the list of vaults for caching.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaults?` | `Map`<`AccountId`, `BTCAmount`\> | (optional) A list of the vaults available to issue from. If not provided, will fetch from the parachain (incurring an extra request). |

#### Returns

`Promise`<`IssueLimits`\>

An object of type {singleVault, maxTotal, vaultsCache}

#### Defined in

[src/parachain/issue.ts:64](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L64)

___

### getRequestsByIds

▸ **getRequestsByIds**(`issueIds`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

The issue request objects

#### Defined in

[src/parachain/issue.ts:144](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L144)

___

### list

▸ **list**(): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array containing the issue requests

#### Defined in

[src/parachain/issue.ts:128](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L128)

___

### mapForUser

▸ **mapForUser**(`account`): `Promise`<`Map`<`H256`, [`Issue`](/interfaces/Issue.md)\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `AccountId` | The ID of the account whose issue requests are to be retrieved |

#### Returns

`Promise`<`Map`<`H256`, [`Issue`](/interfaces/Issue.md)\>\>

A mapping from the issue request ID to the issue request object, corresponding to the requests of
the given account

#### Defined in

[src/parachain/issue.ts:134](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L134)

___

### request

▸ **request**(`amount`, `vaultId?`, `atomic?`, `retries?`, `availableVaults?`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Request issuing of InterBTC.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | InterBTC amount to issue. |
| `vaultId?` | `AccountId` | (optional) ID of the vault to issue with. |
| `atomic?` | `boolean` | (optional) Whether the issue request should be handled atomically or not. Only makes a difference if more than one vault is needed to fulfil it. Defaults to false. |
| `retries?` | `number` | (optional) Number of times to re-try issuing, if some of the requests fail. Defaults to 0. |
| `availableVaults?` | `Map`<`AccountId`, `BTCAmount`\> | (optional) A list of all vaults usable for issue. If not provided, will fetch from the parachain. |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of type {issueId, issueRequest} if the requests succeeded. The function throws an error otherwise.

#### Defined in

[src/parachain/issue.ts:76](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L76)

___

### requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `atomic`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Send a batch of aggregated issue transactions (to one or more vaults)

**`throws`** Rejects the promise if none of the requests succeeded (or if at least one failed, when atomic=true).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountsPerVault` | `Map`<`AccountId`, `BTCAmount`\> | A mapping of vaults to issue from, and InterBTC amounts to issue using each vault |
| `atomic` | `boolean` | Whether the issue request should be handled atomically or not. Only makes a difference if more than one vault is needed to fulfil it. |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of `Issue` objects, if the requests succeeded.

#### Defined in

[src/parachain/issue.ts:92](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L92)

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

### setIssuePeriod

▸ **setIssuePeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blocks` | `number` | The time difference in number of blocks between an issue request is created and required completion time by a user. The issue period has an upper limit to prevent griefing of vault collateral. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/issue.ts:117](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L117)
