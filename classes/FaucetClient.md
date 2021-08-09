[@interlay/interbtc](/README.md) / [Exports](/modules.md) / FaucetClient

# Class: FaucetClient

## Hierarchy

- `JsonRpcClient`<`void`\>

  ↳ **`FaucetClient`**

## Table of contents

### Constructors

- [constructor](/classes/FaucetClient.md#constructor)

### Properties

- [constr](/classes/FaucetClient.md#constr)
- [registry](/classes/FaucetClient.md#registry)
- [url](/classes/FaucetClient.md#url)

### Methods

- [fundAccount](/classes/FaucetClient.md#fundaccount)
- [post](/classes/FaucetClient.md#post)

## Constructors

### constructor

• **new FaucetClient**(`url`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Overrides

JsonRpcClient&lt;void\&gt;.constructor

#### Defined in

[src/clients/faucet.ts:18](https://github.com/interlay/interbtc-js/blob/f88be88/src/clients/faucet.ts#L18)

## Properties

### constr

• **constr**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FundAccountJsonRpcRequest` | `Constructor`<`FundAccountJsonRpcRequest`\> |

#### Defined in

[src/clients/faucet.ts:14](https://github.com/interlay/interbtc-js/blob/f88be88/src/clients/faucet.ts#L14)

___

### registry

• **registry**: `TypeRegistry`

#### Defined in

[src/clients/faucet.ts:12](https://github.com/interlay/interbtc-js/blob/f88be88/src/clients/faucet.ts#L12)

___

### url

• **url**: `string`

#### Inherited from

JsonRpcClient.url

#### Defined in

[src/clients/client.ts:27](https://github.com/interlay/interbtc-js/blob/f88be88/src/clients/client.ts#L27)

## Methods

### fundAccount

▸ **fundAccount**(`account`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/clients/faucet.ts:28](https://github.com/interlay/interbtc-js/blob/f88be88/src/clients/faucet.ts#L28)

___

### post

▸ **post**(`method`, `params?`): `Promise`<`JsonRpcResponse`<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `RequestParams` |

#### Returns

`Promise`<`JsonRpcResponse`<`void`\>\>

#### Inherited from

JsonRpcClient.post

#### Defined in

[src/clients/client.ts:33](https://github.com/interlay/interbtc-js/blob/f88be88/src/clients/client.ts#L33)
