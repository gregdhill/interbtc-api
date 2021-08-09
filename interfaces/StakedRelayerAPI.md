[@interlay/interbtc](/README.md) / [Exports](/modules.md) / StakedRelayerAPI

# Interface: StakedRelayerAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`StakedRelayerAPI`**

## Implemented by

- [`DefaultStakedRelayerAPI`](/classes/DefaultStakedRelayerAPI.md)

## Table of contents

### Methods

- [getAccount](/interfaces/StakedRelayerAPI.md#getaccount)
- [getCurrentStateOfBTCParachain](/interfaces/StakedRelayerAPI.md#getcurrentstateofbtcparachain)
- [getLastBTCDOTExchangeRateAndTime](/interfaces/StakedRelayerAPI.md#getlastbtcdotexchangerateandtime)
- [getMonitoredVaultsCollateralizationRate](/interfaces/StakedRelayerAPI.md#getmonitoredvaultscollateralizationrate)
- [reportVaultTheft](/interfaces/StakedRelayerAPI.md#reportvaulttheft)
- [sendLogged](/interfaces/StakedRelayerAPI.md#sendlogged)
- [setAccount](/interfaces/StakedRelayerAPI.md#setaccount)

## Methods

### getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[getAccount](/interfaces/TransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/transaction.ts#L12)

___

### getCurrentStateOfBTCParachain

▸ **getCurrentStateOfBTCParachain**(): `Promise`<`StatusCode`\>

#### Returns

`Promise`<`StatusCode`\>

A parachain status code object

#### Defined in

[src/parachain/staked-relayer.ts:31](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L31)

___

### getLastBTCDOTExchangeRateAndTime

▸ **getLastBTCDOTExchangeRateAndTime**(): `Promise`<[`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>, `Date`]\>

#### Returns

`Promise`<[`ExchangeRate`<`Currency`<`Object`\>, `Object`, `Currency`<`Object`\>, `Object`\>, `Date`]\>

A tuple denoting [lastBTCDOTExchangeRate, lastBTCDOTExchangeRateTime]

#### Defined in

[src/parachain/staked-relayer.ts:27](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L27)

___

### getMonitoredVaultsCollateralizationRate

▸ **getMonitoredVaultsCollateralizationRate**(): `Promise`<`Map`<`AccountId`, `Big`\>\>

#### Returns

`Promise`<`Map`<`AccountId`, `Big`\>\>

A mapping from vault IDs to their collateralization

#### Defined in

[src/parachain/staked-relayer.ts:23](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L23)

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

#### Defined in

[src/parachain/staked-relayer.ts:42](https://github.com/interlay/interbtc-js/blob/f88be88/src/parachain/staked-relayer.ts#L42)

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
