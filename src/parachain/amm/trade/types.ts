import { MonetaryAmount } from "@interlay/monetary-js";
import { CurrencyExt } from "../../../types";
import { StandardLiquidityPool } from "../liquidity-pool";
import { StableLiquidityPool } from "../liquidity-pool/stable";

interface TradingPair {
    token0: CurrencyExt;
    token1: CurrencyExt;
    reserve0: MonetaryAmount<CurrencyExt>;
    reserve1: MonetaryAmount<CurrencyExt>;
    getOutputAmount: (inputAmount: MonetaryAmount<CurrencyExt>) => MonetaryAmount<CurrencyExt>;
    pathOf: (inputCurrency: CurrencyExt) => MultiPathElement;
}

interface MultiPathElementBase {
    type: MultiPathElementType;
    input: CurrencyExt;
    output: CurrencyExt;
}

enum MultiPathElementType {
    STANDARD = "STANDARD",
    STABLE_PLAIN = "STABLE_PLAIN",
    STABLE_META = "STABLE_META",
}

interface MultiPathElementStandard extends MultiPathElementBase {
    type: MultiPathElementType.STANDARD;
    pair: TradingPair;
    pool: StandardLiquidityPool;
}

interface MultiPathElementStablePlain extends MultiPathElementBase {
    type: MultiPathElementType.STABLE_PLAIN;
    pool: StableLiquidityPool;
    inputIndex: number;
    outputIndex: number;
}

interface MultiPathElementStableMeta extends MultiPathElementBase {
    type: MultiPathElementType.STABLE_META;
    pool: StableLiquidityPool;
    basePool: StableLiquidityPool;
    fromBase: boolean;
    inputIndex: number;
    outputIndex: number;
}

type MultiPathElementStable = MultiPathElementStablePlain | MultiPathElementStableMeta;
type MultiPathElement = MultiPathElementStandard | MultiPathElementStable;

const isStandardMultiPathElement = (pathElement: MultiPathElement): pathElement is MultiPathElementStandard =>
    pathElement.type === MultiPathElementType.STANDARD;
const isStableMultiPathElement = (pathElement: MultiPathElement): pathElement is MultiPathElementStable =>
    pathElement.type === MultiPathElementType.STABLE_META || pathElement.type === MultiPathElementType.STABLE_PLAIN;
const isStableMetaMultiPathElement = (pathElement: MultiPathElement): pathElement is MultiPathElementStableMeta =>
    pathElement.type === MultiPathElementType.STABLE_META;
const isStablePlainMultiPathElement = (pathElement: MultiPathElement): pathElement is MultiPathElementStablePlain =>
    pathElement.type === MultiPathElementType.STABLE_PLAIN;

type MultiPath = Array<MultiPathElement>;

export {
    isStableMetaMultiPathElement,
    isStableMultiPathElement,
    isStablePlainMultiPathElement,
    isStandardMultiPathElement,
    MultiPathElementType,
};
export type {
    MultiPath,
    MultiPathElement,
    MultiPathElementStable,
    MultiPathElementStableMeta,
    MultiPathElementStablePlain,
    MultiPathElementStandard,
    TradingPair,
};
