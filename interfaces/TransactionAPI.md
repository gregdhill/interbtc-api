[@interlay/interbtc](/README.md) / [Exports](/modules.md) / TransactionAPI

# Interface: TransactionAPI

## Hierarchy

- **`TransactionAPI`**

  ↳ [`VaultsAPI`](/interfaces/VaultsAPI.md)

  ↳ [`IssueAPI`](/interfaces/IssueAPI.md)

  ↳ [`RedeemAPI`](/interfaces/RedeemAPI.md)

  ↳ [`RefundAPI`](/interfaces/RefundAPI.md)

  ↳ [`StakedRelayerAPI`](/interfaces/StakedRelayerAPI.md)

  ↳ [`OracleAPI`](/interfaces/OracleAPI.md)

  ↳ [`TokensAPI`](/interfaces/TokensAPI.md)

  ↳ [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

  ↳ [`NominationAPI`](/interfaces/NominationAPI.md)

## Table of contents

### Methods

- [getAccount](/interfaces/TransactionAPI.md#getaccount)
- [sendLogged](/interfaces/TransactionAPI.md#sendlogged)
- [setAccount](/interfaces/TransactionAPI.md#setaccount)

## Methods

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L12)

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

#### Defined in

[src/parachain/transaction.ts:11](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L11)
