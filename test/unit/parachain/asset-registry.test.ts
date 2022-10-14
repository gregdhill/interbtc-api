import { expect } from "../../chai";
import sinon from "sinon";
import { ApiPromise } from "@polkadot/api";
import { StorageKey, u32 } from "@polkadot/types";
import {
    InterbtcPrimitivesCurrencyId,
    InterbtcPrimitivesVaultCurrencyPair,
    OrmlTraitsAssetRegistryAssetMetadata,
} from "@polkadot/types/lookup";
import { DefaultAssetRegistryAPI, ForeignAsset } from "../../../src/";
import { AssetRegistryMetadataTuple } from "@interlay/interbtc/parachain/asset-registry";
import * as allThingsEncoding from "../../../src/utils/encoding";

describe("DefaultAssetRegistryAPI", () => {
    let api: ApiPromise;
    let assetRegistryApi: DefaultAssetRegistryAPI;
    let mockMetadata: OrmlTraitsAssetRegistryAssetMetadata;
    let mockStorageKey: StorageKey<[u32]>;

    const mockStorageKeyValue = 42;
    const mockMetadataValues = {
        name: "Mock Coin One",
        symbol: "MCO",
        decimals: 8,
        existentialDeposit: 42,
        feesPerMinute: 15,
        coingeckoId: "mock-coin-one",
    };

    before(() => {
        api = new ApiPromise();
        // disconnect immediately to avoid printing errors
        // we only need the instance to create variables
        api.disconnect();

        // register just enough from OrmlTraitsAssetRegistryAssetMetadata to construct
        // meaningful representations for our tests
        api.registerTypes({
            OrmlTraitsAssetRegistryAssetMetadata: {
                name: "Bytes",
                symbol: "Bytes",
                decimals: "u32",
                existentialDeposit: "u128",
                additional: "InterbtcPrimitivesCustomMetadata",
            },
            InterbtcPrimitivesCustomMetadata: {
                feePerSecond: "u128",
                coingeckoId: "Bytes",
            },
        });
    });

    beforeEach(() => {
        assetRegistryApi = new DefaultAssetRegistryAPI(api);

        // reset to base values
        mockMetadata = {
            name: api.createType("Bytes", mockMetadataValues.name),
            symbol: api.createType("Bytes", mockMetadataValues.symbol),
            decimals: api.createType("u32", mockMetadataValues.decimals),
            existentialDeposit: api.createType("u128", mockMetadataValues.existentialDeposit),
            additional: api.createType("InterbtcPrimitivesCustomMetadata", {
                feePerSecond: api.createType("u128", mockMetadataValues.feesPerMinute),
                coingeckoId: api.createType("Bytes", mockMetadataValues.coingeckoId),
            }),
        } as OrmlTraitsAssetRegistryAssetMetadata;

        // mock return type of storageKeyToNthInner method which only works correctly in integration tests
        const mockedReturn = api.createType("AssetId", mockStorageKeyValue);
        sinon.stub(allThingsEncoding, "storageKeyToNthInner").returns(mockedReturn);
    });

    afterEach(() => {
        sinon.restore();
        sinon.reset();
    });

    describe("getForeignAssets", () => {
        it("should return empty list if chain returns no foreign assets", async () => {
            // mock empty list returned from chain
            sinon.stub(assetRegistryApi, "getAssetRegistryEntries").returns(Promise.resolve([]));

            const actual = await assetRegistryApi.getForeignAssets();
            expect(actual).to.be.empty;
        });

        it("should ignore empty optionals in foreign assets data from chain", async () => {
            const chainDataReturned: AssetRegistryMetadataTuple[] = [
                // one "good" returned value
                [mockStorageKey, api.createType("Option<OrmlTraitsAssetRegistryAssetMetadata>", mockMetadata)],
                // one empty option
                [mockStorageKey, api.createType("Option<OrmlTraitsAssetRegistryAssetMetadata>", undefined)],
            ];

            sinon.stub(assetRegistryApi, "getAssetRegistryEntries").returns(Promise.resolve(chainDataReturned));

            const actual = await assetRegistryApi.getForeignAssets();

            expect(actual).to.have.lengthOf(1, `Expected only one currency to be returned, but got ${actual.length}`);

            const actualCurrency = actual[0];
            expect(actualCurrency.ticker).to.equal(
                mockMetadataValues.symbol,
                `Expected the returned currency ticker to be ${mockMetadataValues.symbol}, but it was ${actualCurrency.ticker}`
            );
        });
    });

    describe("unwrapMetadataFromEntries", () => {
        it("should convert foreign asset metadata to currency", async () => {
            const actual = DefaultAssetRegistryAPI.metadataTupleToForeignAsset([mockStorageKey, mockMetadata]);

            expect(actual.ticker).to.equal(
                mockMetadataValues.symbol,
                `Expected currency ticker to be ${mockMetadataValues.symbol}, but was ${actual.ticker}`
            );

            expect(actual.name).to.equal(
                mockMetadataValues.name,
                `Expected currency name to be ${mockMetadataValues.name}, but was ${actual.name}`
            );

            expect(actual.decimals).to.equal(
                mockMetadataValues.decimals,
                `Expected currency base to be ${mockMetadataValues.decimals}, but was ${actual.decimals}`
            );

            expect(actual.coingeckoId).to.equal(
                mockMetadataValues.coingeckoId,
                `Expected coingecko id to be ${mockMetadataValues.coingeckoId}, but was ${actual.coingeckoId}`
            );
        });
    });

    describe("getCollateralForeignAssets", () => {
        // only id matters for these tests
        const mockForeignAssets = [<ForeignAsset>{ id: 1 }, <ForeignAsset>{ id: 2 }, <ForeignAsset>{ id: 3 }];

        const prepareMocks = (
            sinon: sinon.SinonSandbox,
            assetRegistryApi: DefaultAssetRegistryAPI,
            allForeignAssets: ForeignAsset[],
            collateralCeilingCurrencyPairs?: InterbtcPrimitivesVaultCurrencyPair[]
        ) => {
            sinon.stub(assetRegistryApi, "getForeignAssets").returns(Promise.resolve(allForeignAssets));

            // this return does not matter since individual tests mock extractCollateralCeilingEntryKeys
            // which returns the actual values of interest
            sinon.stub(assetRegistryApi, "getSystemCollateralCeilingEntries").returns(Promise.resolve([]));
            if (collateralCeilingCurrencyPairs !== undefined) {
                sinon
                    .stub(assetRegistryApi, "extractCollateralCeilingEntryKeys")
                    .returns(collateralCeilingCurrencyPairs);
            }
        };

        it("should return empty array if there are no foreign assets", async () => {
            prepareMocks(sinon, assetRegistryApi, []);

            const actual = await assetRegistryApi.getCollateralForeignAssets();

            expect(actual).to.be.empty;
        });

        it("should return empty array if there are no foreign assets with a collateral ceiling set", async () => {
            prepareMocks(sinon, assetRegistryApi, mockForeignAssets, []);

            const actual = await assetRegistryApi.getCollateralForeignAssets();
            expect(actual).to.be.empty;
        });

        it("should return only foreign assets, not tokens with collateral ceilings set", async () => {
            // pick an asset id that we expect to get returned
            const expectedForeignAssetId = mockForeignAssets[0].id;

            // only bother mocking collateral currencies, the wrapped side is ignored
            const mockCurrencyPairs = [
                <InterbtcPrimitivesVaultCurrencyPair>{
                    // mocked foreign asset collateral
                    collateral: <InterbtcPrimitivesCurrencyId>{
                        isForeignAsset: true,
                        isToken: false,
                        asForeignAsset: api.createType("u32", expectedForeignAssetId),
                        type: "ForeignAsset",
                    },
                },
                <InterbtcPrimitivesVaultCurrencyPair>{
                    // mocked token collateral (ie. not foreign asset)
                    collateral: <InterbtcPrimitivesCurrencyId>{
                        isForeignAsset: false,
                        isToken: true,
                        // logically inconsistent (but trying to trick into having a valid result if this is used when it shouldn't)
                        asForeignAsset: api.createType("u32", mockForeignAssets[mockForeignAssets.length - 1].id),
                        type: "Token",
                    },
                },
            ];

            prepareMocks(sinon, assetRegistryApi, mockForeignAssets, mockCurrencyPairs);

            const actual = await assetRegistryApi.getCollateralForeignAssets();

            // expect one returned value
            expect(actual).to.have.lengthOf(1);

            const actualAssetId = actual[0].id;
            expect(actualAssetId).to.be.eq(expectedForeignAssetId);
        });
    });
});
