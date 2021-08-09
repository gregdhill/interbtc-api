[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DecodedRequestExt

# Interface: DecodedRequestExt

## Hierarchy

- `Omit`<[`DecodedRequest`](/interfaces/DecodedRequest.md), ``"btc_address"``\>

  ↳ **`DecodedRequestExt`**

## Table of contents

### Properties

- [Type](/interfaces/DecodedRequestExt.md#type)
- [[toStringTag]](/interfaces/DecodedRequestExt.md#[tostringtag])
- [btc\_address](/interfaces/DecodedRequestExt.md#btc_address)
- [createdAtHash](/interfaces/DecodedRequestExt.md#createdathash)
- [defKeys](/interfaces/DecodedRequestExt.md#defkeys)
- [encodedLength](/interfaces/DecodedRequestExt.md#encodedlength)
- [hash](/interfaces/DecodedRequestExt.md#hash)
- [isEmpty](/interfaces/DecodedRequestExt.md#isempty)
- [registry](/interfaces/DecodedRequestExt.md#registry)
- [size](/interfaces/DecodedRequestExt.md#size)

### Methods

- [[iterator]](/interfaces/DecodedRequestExt.md#[iterator])
- [clear](/interfaces/DecodedRequestExt.md#clear)
- [delete](/interfaces/DecodedRequestExt.md#delete)
- [entries](/interfaces/DecodedRequestExt.md#entries)
- [eq](/interfaces/DecodedRequestExt.md#eq)
- [forEach](/interfaces/DecodedRequestExt.md#foreach)
- [get](/interfaces/DecodedRequestExt.md#get)
- [getAtIndex](/interfaces/DecodedRequestExt.md#getatindex)
- [has](/interfaces/DecodedRequestExt.md#has)
- [keys](/interfaces/DecodedRequestExt.md#keys)
- [set](/interfaces/DecodedRequestExt.md#set)
- [toArray](/interfaces/DecodedRequestExt.md#toarray)
- [toHex](/interfaces/DecodedRequestExt.md#tohex)
- [toHuman](/interfaces/DecodedRequestExt.md#tohuman)
- [toJSON](/interfaces/DecodedRequestExt.md#tojson)
- [toRawType](/interfaces/DecodedRequestExt.md#torawtype)
- [toString](/interfaces/DecodedRequestExt.md#tostring)
- [toU8a](/interfaces/DecodedRequestExt.md#tou8a)
- [values](/interfaces/DecodedRequestExt.md#values)

## Properties

### Type

• **Type**: `Object`

#### Inherited from

Omit.Type

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Omit.\_\_@toStringTag@3145

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### btc\_address

• **btc\_address**: `string`

#### Defined in

[src/utils/encoding.ts:120](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L120)

___

### createdAtHash

• `Optional` **createdAtHash**: `Hash`

#### Inherited from

Omit.createdAtHash

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:25

___

### defKeys

• **defKeys**: `string`[]

#### Inherited from

Omit.defKeys

___

### encodedLength

• **encodedLength**: `number`

#### Inherited from

Omit.encodedLength

___

### hash

• **hash**: `CodecHash`

#### Inherited from

Omit.hash

___

### isEmpty

• **isEmpty**: `boolean`

#### Inherited from

Omit.isEmpty

___

### registry

• `Readonly` **registry**: `Registry`

#### Inherited from

Omit.registry

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:24

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Omit.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Omit.\_\_@iterator@3143

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Omit.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Omit.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Omit.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### eq

▸ **eq**(`other?`): `boolean`

**`description`** Compares the value of the input to see if there is a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | `unknown` |

#### Returns

`boolean`

#### Inherited from

Omit.eq

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:52

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `Codec`, `key`: `string`, `map`: `Map`<`string`, `Codec`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Omit.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`name`): `undefined` \| `Codec`

**`description`** Returns a specific names entry in the structure

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the entry to retrieve |

#### Returns

`undefined` \| `Codec`

#### Inherited from

Omit.get

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:57

___

### getAtIndex

▸ **getAtIndex**(`index`): `Codec`

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Codec`

#### Inherited from

Omit.getAtIndex

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:61

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Omit.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Omit.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): [`DecodedRequest`](/interfaces/DecodedRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Codec` |

#### Returns

[`DecodedRequest`](/interfaces/DecodedRequest.md)

#### Inherited from

Omit.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### toArray

▸ **toArray**(): `Codec`[]

**`description`** Converts the Object to an standard JavaScript Array

#### Returns

`Codec`[]

#### Inherited from

Omit.toArray

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:65

___

### toHex

▸ **toHex**(): `string`

**`description`** Returns a hex string representation of the value

#### Returns

`string`

#### Inherited from

Omit.toHex

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:69

___

### toHuman

▸ **toHuman**(`isExtended?`): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExtended?` | `boolean` |

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Omit.toHuman

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:73

___

### toJSON

▸ **toJSON**(): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Omit.toJSON

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:77

___

### toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Omit.toRawType

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:81

___

### toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Omit.toString

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:85

___

### toU8a

▸ **toU8a**(`isBare?`): `Uint8Array`

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBare?` | `BareOpts` | true when the value has none of the type-specific prefixes (internal) |

#### Returns

`Uint8Array`

#### Inherited from

Omit.toU8a

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:90

___

### values

▸ **values**(): `IterableIterator`<`Codec`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`Codec`\>

#### Inherited from

Omit.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
