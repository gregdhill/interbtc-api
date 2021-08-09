[@interlay/interbtc](/README.md) / [Exports](/modules.md) / DecodedRequest

# Interface: DecodedRequest

## Hierarchy

- `Struct`

  ↳ **`DecodedRequest`**

## Table of contents

### Properties

- [#private](/interfaces/DecodedRequest.md##private)
- [[toStringTag]](/interfaces/DecodedRequest.md#[tostringtag])
- [btc\_address](/interfaces/DecodedRequest.md#btc_address)
- [createdAtHash](/interfaces/DecodedRequest.md#createdathash)
- [registry](/interfaces/DecodedRequest.md#registry)
- [size](/interfaces/DecodedRequest.md#size)

### Accessors

- [Type](/interfaces/DecodedRequest.md#type)
- [defKeys](/interfaces/DecodedRequest.md#defkeys)
- [encodedLength](/interfaces/DecodedRequest.md#encodedlength)
- [hash](/interfaces/DecodedRequest.md#hash)
- [isEmpty](/interfaces/DecodedRequest.md#isempty)

### Methods

- [[iterator]](/interfaces/DecodedRequest.md#[iterator])
- [clear](/interfaces/DecodedRequest.md#clear)
- [delete](/interfaces/DecodedRequest.md#delete)
- [entries](/interfaces/DecodedRequest.md#entries)
- [eq](/interfaces/DecodedRequest.md#eq)
- [forEach](/interfaces/DecodedRequest.md#foreach)
- [get](/interfaces/DecodedRequest.md#get)
- [getAtIndex](/interfaces/DecodedRequest.md#getatindex)
- [has](/interfaces/DecodedRequest.md#has)
- [keys](/interfaces/DecodedRequest.md#keys)
- [set](/interfaces/DecodedRequest.md#set)
- [toArray](/interfaces/DecodedRequest.md#toarray)
- [toHex](/interfaces/DecodedRequest.md#tohex)
- [toHuman](/interfaces/DecodedRequest.md#tohuman)
- [toJSON](/interfaces/DecodedRequest.md#tojson)
- [toRawType](/interfaces/DecodedRequest.md#torawtype)
- [toString](/interfaces/DecodedRequest.md#tostring)
- [toU8a](/interfaces/DecodedRequest.md#tou8a)
- [values](/interfaces/DecodedRequest.md#values)

## Properties

### #private

• `Private` **#private**: `any`

#### Inherited from

Struct.#private

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:23

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Struct.\_\_@toStringTag@3145

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### btc\_address

• `Readonly` **btc\_address**: `BtcAddress`

#### Defined in

[src/utils/encoding.ts:115](https://github.com/interlay/interbtc-js/blob/f88be88/src/utils/encoding.ts#L115)

___

### createdAtHash

• `Optional` **createdAtHash**: `Hash`

#### Inherited from

Struct.createdAtHash

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:25

___

### registry

• `Readonly` **registry**: `Registry`

#### Inherited from

Struct.registry

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:24

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Struct.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

### Type

• `get` **Type**(): `E`

**`description`** Returns the Type description to sthe structure

#### Returns

`E`

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:40

___

### defKeys

• `get` **defKeys**(): `string`[]

**`description`** The available keys for this enum

#### Returns

`string`[]

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:32

___

### encodedLength

• `get` **encodedLength**(): `number`

**`description`** The length of the value when encoded as a Uint8Array

#### Returns

`number`

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:44

___

### hash

• `get` **hash**(): `CodecHash`

**`description`** returns a hash of the contents

#### Returns

`CodecHash`

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:48

___

### isEmpty

• `get` **isEmpty**(): `boolean`

**`description`** Checks if the value is an empty value

#### Returns

`boolean`

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:36

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Struct.\_\_@iterator@3143

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Struct.clear

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

Struct.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Struct.entries

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

Struct.eq

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

Struct.forEach

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

Struct.get

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

Struct.getAtIndex

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

Struct.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Struct.keys

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

Struct.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### toArray

▸ **toArray**(): `Codec`[]

**`description`** Converts the Object to an standard JavaScript Array

#### Returns

`Codec`[]

#### Inherited from

Struct.toArray

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:65

___

### toHex

▸ **toHex**(): `string`

**`description`** Returns a hex string representation of the value

#### Returns

`string`

#### Inherited from

Struct.toHex

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

Struct.toHuman

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:73

___

### toJSON

▸ **toJSON**(): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Struct.toJSON

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:77

___

### toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Struct.toRawType

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:81

___

### toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Struct.toString

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

Struct.toU8a

#### Defined in

node_modules/@polkadot/types/codec/Struct.d.ts:90

___

### values

▸ **values**(): `IterableIterator`<`Codec`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`Codec`\>

#### Inherited from

Struct.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
