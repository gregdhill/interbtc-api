[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultIssueAPI

# Class: DefaultIssueAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultIssueAPI`**

## Implements

- [`IssueAPI`](/interfaces/IssueAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultIssueAPI.md#constructor)

### Properties

- [api](/classes/DefaultIssueAPI.md#api)
- [feeAPI](/classes/DefaultIssueAPI.md#feeapi)
- [vaultsAPI](/classes/DefaultIssueAPI.md#vaultsapi)

### Methods

- [cancel](/classes/DefaultIssueAPI.md#cancel)
- [execute](/classes/DefaultIssueAPI.md#execute)
- [getAccount](/classes/DefaultIssueAPI.md#getaccount)
- [getFeeRate](/classes/DefaultIssueAPI.md#getfeerate)
- [getFeesToPay](/classes/DefaultIssueAPI.md#getfeestopay)
- [getGriefingCollateral](/classes/DefaultIssueAPI.md#getgriefingcollateral)
- [getIssueIdsFromEvents](/classes/DefaultIssueAPI.md#getissueidsfromevents)
- [getIssuePeriod](/classes/DefaultIssueAPI.md#getissueperiod)
- [getRequestById](/classes/DefaultIssueAPI.md#getrequestbyid)
- [getRequestLimits](/classes/DefaultIssueAPI.md#getrequestlimits)
- [getRequestsByIds](/classes/DefaultIssueAPI.md#getrequestsbyids)
- [list](/classes/DefaultIssueAPI.md#list)
- [mapForUser](/classes/DefaultIssueAPI.md#mapforuser)
- [request](/classes/DefaultIssueAPI.md#request)
- [requestAdvanced](/classes/DefaultIssueAPI.md#requestadvanced)
- [sendLogged](/classes/DefaultIssueAPI.md#sendlogged)
- [setAccount](/classes/DefaultIssueAPI.md#setaccount)
- [setIssuePeriod](/classes/DefaultIssueAPI.md#setissueperiod)
- [doesArrayContainEvent](/classes/DefaultIssueAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultIssueAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultIssueAPI.md#printevents)
- [waitForEvent](/classes/DefaultIssueAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultIssueAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/issue.ts:169](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L169)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### feeAPI

• `Private` **feeAPI**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/parachain/issue.ts:167](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L167)

___

### vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/parachain/issue.ts:166](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L166)

## Methods

### cancel

▸ **cancel**(`requestId`): `Promise`<`void`\>

Send an issue cancellation transaction. After the issue period has elapsed,
the issuance of InterBTC can be cancelled. As a result, the griefing collateral
of the requester will be slashed and sent to the vault that had prepared to issue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[cancel](/interfaces/IssueAPI.md#cancel)

#### Defined in

[src/parachain/issue.ts:270](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L270)

___

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Send an issue execution transaction

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[execute](/interfaces/IssueAPI.md#execute)

#### Defined in

[src/parachain/issue.ts:263](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L263)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getAccount](/interfaces/IssueAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

___

### getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for issuing. For instance, "0.005" stands for 0.5%

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getFeeRate](/interfaces/IssueAPI.md#getfeerate)

#### Defined in

[src/parachain/issue.ts:321](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L321)

___

### getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`BTCAmount`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`BTCAmount`\>

The fees, in BTC

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getFeesToPay](/interfaces/IssueAPI.md#getfeestopay)

#### Defined in

[src/parachain/issue.ts:313](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L313)

___

### getGriefingCollateral

▸ **getGriefingCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

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

The griefing collateral, in DOT

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getGriefingCollateral](/interfaces/IssueAPI.md#getgriefingcollateral)

#### Defined in

[src/parachain/issue.ts:305](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L305)

___

### getIssueIdsFromEvents

▸ `Private` **getIssueIdsFromEvents**(`events`): `Hash`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending an issue request transaction |

#### Returns

`Hash`[]

The issueId associated with the request. If the EventRecord array does not
contain issue request events, the function throws an error.

#### Defined in

[src/parachain/issue.ts:193](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L193)

___

### getIssuePeriod

▸ **getIssuePeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between an issue request is created
and required completion time by a user. The issue period has an upper limit
to prevent griefing of vault collateral.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getIssuePeriod](/interfaces/IssueAPI.md#getissueperiod)

#### Defined in

[src/parachain/issue.ts:282](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L282)

___

### getRequestById

▸ **getRequestById**(`issueId`): `Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` \| `H256` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)\>

An issue request object

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestById](/interfaces/IssueAPI.md#getrequestbyid)

#### Defined in

[src/parachain/issue.ts:327](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L327)

___

### getRequestLimits

▸ **getRequestLimits**(`vaults?`): `Promise`<`IssueLimits`\>

Gets the threshold for issuing with a single vault, and the maximum total
issue request size. Additionally passes the list of vaults for caching.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaults?` | `Map`<`AccountId`, `BTCAmount`\> |

#### Returns

`Promise`<`IssueLimits`\>

An object of type {singleVault, maxTotal, vaultsCache}

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestLimits](/interfaces/IssueAPI.md#getrequestlimits)

#### Defined in

[src/parachain/issue.ts:175](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L175)

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

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestsByIds](/interfaces/IssueAPI.md#getrequestsbyids)

#### Defined in

[src/parachain/issue.ts:331](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L331)

___

### list

▸ **list**(): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array containing the issue requests

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[list](/interfaces/IssueAPI.md#list)

#### Defined in

[src/parachain/issue.ts:287](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L287)

___

### mapForUser

▸ **mapForUser**(`account`): `Promise`<`Map`<`H256`, [`Issue`](/interfaces/Issue.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`Issue`](/interfaces/Issue.md)\>\>

A mapping from the issue request ID to the issue request object, corresponding to the requests of
the given account

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[mapForUser](/interfaces/IssueAPI.md#mapforuser)

#### Defined in

[src/parachain/issue.ts:293](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L293)

___

### request

▸ **request**(`amount`, `vaultId?`, `atomic?`, `retries?`, `cachedVaults?`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Request issuing of InterBTC.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | `undefined` |
| `vaultId?` | `AccountId` | `undefined` |
| `atomic` | `boolean` | `true` |
| `retries` | `number` | `0` |
| `cachedVaults?` | `Map`<`AccountId`, `BTCAmount`\> | `undefined` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of type {issueId, issueRequest} if the requests succeeded. The function throws an error otherwise.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[request](/interfaces/IssueAPI.md#request)

#### Defined in

[src/parachain/issue.ts:197](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L197)

___

### requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `atomic`, `collateralCurrency?`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Send a batch of aggregated issue transactions (to one or more vaults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountsPerVault` | `Map`<`AccountId`, `BTCAmount`\> |
| `atomic` | `boolean` |
| `collateralCurrency` | `Currency`<`Object`\> |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of `Issue` objects, if the requests succeeded.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[requestAdvanced](/interfaces/IssueAPI.md#requestadvanced)

#### Defined in

[src/parachain/issue.ts:228](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L228)

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

[IssueAPI](/interfaces/IssueAPI.md).[sendLogged](/interfaces/IssueAPI.md#sendlogged)

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

[IssueAPI](/interfaces/IssueAPI.md).[setAccount](/interfaces/IssueAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L22)

___

### setIssuePeriod

▸ **setIssuePeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[setIssuePeriod](/interfaces/IssueAPI.md#setissueperiod)

#### Defined in

[src/parachain/issue.ts:276](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/issue.ts#L276)

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
