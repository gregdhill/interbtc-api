[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DefaultRedeemAPI

# Class: DefaultRedeemAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultRedeemAPI`**

## Implements

- [`RedeemAPI`](/interfaces/RedeemAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRedeemAPI.md#constructor)

### Properties

- [api](/classes/DefaultRedeemAPI.md#api)
- [events](/classes/DefaultRedeemAPI.md#events)
- [oracleAPI](/classes/DefaultRedeemAPI.md#oracleapi)
- [requestHash](/classes/DefaultRedeemAPI.md#requesthash)
- [tokensAPI](/classes/DefaultRedeemAPI.md#tokensapi)
- [vaultsAPI](/classes/DefaultRedeemAPI.md#vaultsapi)

### Methods

- [burn](/classes/DefaultRedeemAPI.md#burn)
- [cancel](/classes/DefaultRedeemAPI.md#cancel)
- [execute](/classes/DefaultRedeemAPI.md#execute)
- [getAccount](/classes/DefaultRedeemAPI.md#getaccount)
- [getBurnExchangeRate](/classes/DefaultRedeemAPI.md#getburnexchangerate)
- [getCurrentInclusionFee](/classes/DefaultRedeemAPI.md#getcurrentinclusionfee)
- [getDustValue](/classes/DefaultRedeemAPI.md#getdustvalue)
- [getFeeRate](/classes/DefaultRedeemAPI.md#getfeerate)
- [getFeesToPay](/classes/DefaultRedeemAPI.md#getfeestopay)
- [getMaxBurnableTokens](/classes/DefaultRedeemAPI.md#getmaxburnabletokens)
- [getPremiumRedeemFee](/classes/DefaultRedeemAPI.md#getpremiumredeemfee)
- [getRedeemIdsFromEvents](/classes/DefaultRedeemAPI.md#getredeemidsfromevents)
- [getRedeemPeriod](/classes/DefaultRedeemAPI.md#getredeemperiod)
- [getRequestById](/classes/DefaultRedeemAPI.md#getrequestbyid)
- [getRequestsById](/classes/DefaultRedeemAPI.md#getrequestsbyid)
- [list](/classes/DefaultRedeemAPI.md#list)
- [mapForUser](/classes/DefaultRedeemAPI.md#mapforuser)
- [onRedeem](/classes/DefaultRedeemAPI.md#onredeem)
- [request](/classes/DefaultRedeemAPI.md#request)
- [requestAdvanced](/classes/DefaultRedeemAPI.md#requestadvanced)
- [sendLogged](/classes/DefaultRedeemAPI.md#sendlogged)
- [setAccount](/classes/DefaultRedeemAPI.md#setaccount)
- [setRedeemPeriod](/classes/DefaultRedeemAPI.md#setredeemperiod)
- [subscribeToRedeemCompletion](/classes/DefaultRedeemAPI.md#subscribetoredeemcompletion)
- [subscribeToRedeemExpiry](/classes/DefaultRedeemAPI.md#subscribetoredeemexpiry)
- [doesArrayContainEvent](/classes/DefaultRedeemAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultRedeemAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultRedeemAPI.md#printevents)
- [waitForEvent](/classes/DefaultRedeemAPI.md#waitforevent)

## Constructors

### constructor

• **new DefaultRedeemAPI**(`api`, `btcNetwork`, `electrsAPI`, `account?`)

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

[src/parachain/redeem.ts:204](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L204)

## Properties

### api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### events

• **events**: `EventRecord`[] = `[]`

#### Defined in

[src/parachain/redeem.ts:202](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L202)

___

### oracleAPI

• `Private` **oracleAPI**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/parachain/redeem.ts:200](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L200)

___

### requestHash

• **requestHash**: `Hash`

#### Defined in

[src/parachain/redeem.ts:201](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L201)

___

### tokensAPI

• `Private` **tokensAPI**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Defined in

[src/parachain/redeem.ts:199](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L199)

___

### vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/parachain/redeem.ts:198](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L198)

## Methods

### burn

▸ **burn**(`amount`): `Promise`<`void`\>

Burn wrapped tokens for a premium

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BTCAmount` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[burn](/interfaces/RedeemAPI.md#burn)

#### Defined in

[src/parachain/redeem.ts:289](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L289)

___

### cancel

▸ **cancel**(`requestId`, `reimburse?`): `Promise`<`void`\>

Send a redeem cancellation transaction. After the redeem period has elapsed,
the redeemal of InterBTC can be cancelled. As a result, the griefing collateral
of the vault will be slashed and sent to the redeemer

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requestId` | `string` | `undefined` |
| `reimburse` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[cancel](/interfaces/RedeemAPI.md#cancel)

#### Defined in

[src/parachain/redeem.ts:283](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L283)

___

### execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Send a redeem execution transaction

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

[RedeemAPI](/interfaces/RedeemAPI.md).[execute](/interfaces/RedeemAPI.md#execute)

#### Defined in

[src/parachain/redeem.ts:272](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L272)

___

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getAccount](/interfaces/RedeemAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L26)

___

### getBurnExchangeRate

▸ **getBurnExchangeRate**(): `Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>\>

#### Returns

`Promise`<`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>\>

The exchange rate (collateral currency to wrapped token currency)
used when burning tokens

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getBurnExchangeRate](/interfaces/RedeemAPI.md#getburnexchangerate)

#### Defined in

[src/parachain/redeem.ts:311](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L311)

___

### getCurrentInclusionFee

▸ **getCurrentInclusionFee**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The current inclusion fee based on the expected number of bytes
in the transaction, and the inclusion fee rate reported by the oracle

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getCurrentInclusionFee](/interfaces/RedeemAPI.md#getcurrentinclusionfee)

#### Defined in

[src/parachain/redeem.ts:330](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L330)

___

### getDustValue

▸ **getDustValue**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The minimum amount of btc that is accepted for redeem requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getDustValue](/interfaces/RedeemAPI.md#getdustvalue)

#### Defined in

[src/parachain/redeem.ts:422](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L422)

___

### getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for redeeming. For instance, "0.005" stands for 0.5%

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getFeeRate](/interfaces/RedeemAPI.md#getfeerate)

#### Defined in

[src/parachain/redeem.ts:416](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L416)

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

[RedeemAPI](/interfaces/RedeemAPI.md).[getFeesToPay](/interfaces/RedeemAPI.md#getfeestopay)

#### Defined in

[src/parachain/redeem.ts:411](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L411)

___

### getMaxBurnableTokens

▸ **getMaxBurnableTokens**(): `Promise`<`BTCAmount`\>

#### Returns

`Promise`<`BTCAmount`\>

The maximum amount of tokens that can be burned through a liquidation redeem

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getMaxBurnableTokens](/interfaces/RedeemAPI.md#getmaxburnabletokens)

#### Defined in

[src/parachain/redeem.ts:306](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L306)

___

### getPremiumRedeemFee

▸ **getPremiumRedeemFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

If users execute a redeem with a Vault flagged for premium redeem,
they can earn a DOT premium, slashed from the Vault's collateral.
This value is a percentage of the redeemed amount.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getPremiumRedeemFee](/interfaces/RedeemAPI.md#getpremiumredeemfee)

#### Defined in

[src/parachain/redeem.ts:428](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L428)

___

### getRedeemIdsFromEvents

▸ `Private` **getRedeemIdsFromEvents**(`events`): `Hash`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |

#### Returns

`Hash`[]

#### Defined in

[src/parachain/redeem.ts:211](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L211)

___

### getRedeemPeriod

▸ **getRedeemPeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between a redeem request
is created and required completion time by a vault.
The redeem period has an upper limit to ensure the user gets their BTC in time
and to potentially punish a vault for inactivity or stealing BTC.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRedeemPeriod](/interfaces/RedeemAPI.md#getredeemperiod)

#### Defined in

[src/parachain/redeem.ts:301](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L301)

___

### getRequestById

▸ **getRequestById**(`redeemId`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemId` | `string` \| `H256` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

A redeem request object

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRequestById](/interfaces/RedeemAPI.md#getrequestbyid)

#### Defined in

[src/parachain/redeem.ts:434](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L434)

___

### getRequestsById

▸ **getRequestsById**(`redeemIds`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRequestsById](/interfaces/RedeemAPI.md#getrequestsbyid)

#### Defined in

[src/parachain/redeem.ts:439](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L439)

___

### list

▸ **list**(): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array containing the redeem requests

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[list](/interfaces/RedeemAPI.md#list)

#### Defined in

[src/parachain/redeem.ts:341](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L341)

___

### mapForUser

▸ **mapForUser**(`account`): `Promise`<`Map`<`H256`, [`Redeem`](/interfaces/Redeem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |

#### Returns

`Promise`<`Map`<`H256`, [`Redeem`](/interfaces/Redeem.md)\>\>

A mapping from the redeem request ID to the redeem request object, corresponding to the requests of
the given account

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[mapForUser](/interfaces/RedeemAPI.md#mapforuser)

#### Defined in

[src/parachain/redeem.ts:347](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L347)

___

### onRedeem

▸ **onRedeem**(`account`, `fn`): `Promise`<`fn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |
| `fn` | (`set`: `Set`<`H256`\>, `request`: [`Redeem`](/interfaces/Redeem.md), `id`: `H256`, `blockNumber`: `BN`) => `void` |

#### Returns

`Promise`<`fn`\>

#### Defined in

[src/parachain/redeem.ts:393](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L393)

___

### request

▸ **request**(`amount`, `btcAddressEnc`, `vaultId?`, `atomic?`, `retries?`, `cachedVaults?`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

Send a redeem request transaction

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `BTCAmount` | `undefined` |
| `btcAddressEnc` | `string` | `undefined` |
| `vaultId?` | `AccountId` | `undefined` |
| `atomic` | `boolean` | `true` |
| `retries` | `number` | `0` |
| `cachedVaults?` | `Map`<`AccountId`, `BTCAmount`\> | `undefined` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array of type {redeemId, redeemRequest} if the requests succeeded. The function throws an error otherwise.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[request](/interfaces/RedeemAPI.md#request)

#### Defined in

[src/parachain/redeem.ts:215](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L215)

___

### requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `btcAddressEnc`, `atomic`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

Send a batch of aggregated redeem transactions (to one or more vaults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountsPerVault` | `Map`<`AccountId`, `BTCAmount`\> |
| `btcAddressEnc` | `string` |
| `atomic` | `boolean` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array of type {redeemId, vault} if the requests succeeded.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[requestAdvanced](/interfaces/RedeemAPI.md#requestadvanced)

#### Defined in

[src/parachain/redeem.ts:249](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L249)

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

[RedeemAPI](/interfaces/RedeemAPI.md).[sendLogged](/interfaces/RedeemAPI.md#sendlogged)

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

[RedeemAPI](/interfaces/RedeemAPI.md).[setAccount](/interfaces/RedeemAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L22)

___

### setRedeemPeriod

▸ **setRedeemPeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[setRedeemPeriod](/interfaces/RedeemAPI.md#setredeemperiod)

#### Defined in

[src/parachain/redeem.ts:295](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L295)

___

### subscribeToRedeemCompletion

▸ **subscribeToRedeemCompletion**(`account`, `callback`): `Promise`<`fn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |
| `callback` | (`requestRedeemId`: `H256`) => `void` |

#### Returns

`Promise`<`fn`\>

#### Defined in

[src/parachain/redeem.ts:377](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L377)

___

### subscribeToRedeemExpiry

▸ **subscribeToRedeemExpiry**(`account`, `callback`): `Promise`<`fn`\>

Whenever a redeem request associated with `account` expires, call the callback function with the
ID of the expired request. Already expired requests are stored in memory, so as not to call back
twice for the same request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |
| `callback` | (`requestRedeemId`: `H256`) => `void` |

#### Returns

`Promise`<`fn`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[subscribeToRedeemExpiry](/interfaces/RedeemAPI.md#subscribetoredeemexpiry)

#### Defined in

[src/parachain/redeem.ts:359](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/redeem.ts#L359)

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
