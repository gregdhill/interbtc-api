import { MonetaryAmount } from "@interlay/monetary-js";
import Big from "big.js";
import { CurrencyExt } from "./currency";

interface SubsidyReward {
    currency: CurrencyExt;
    amountPerUnitYearly: MonetaryAmount<CurrencyExt>;
}

interface LoanPosition {
    currency: CurrencyExt;
    amount: MonetaryAmount<CurrencyExt>;
    earnedReward: MonetaryAmount<CurrencyExt> | null; // null if rewards are not enabled.
}

interface LendPosition extends LoanPosition {
    isCollateral: boolean;
    earnedInterest: MonetaryAmount<CurrencyExt>;
}

interface BorrowPosition extends LoanPosition {
    accumulatedDebt: MonetaryAmount<CurrencyExt>;
}

interface LoanAsset {
    currency: CurrencyExt;
    lendApy: Big; // percentage
    borrowApy: Big; // percentage
    lendReward: SubsidyReward | null; // null if rewards are not enabled.
    borrowReward: SubsidyReward | null; // null if rewards are not enabled.
    totalLiquidity: MonetaryAmount<CurrencyExt>;
    availableCapacity: MonetaryAmount<CurrencyExt>;
    liquidationThreshold: Big; // percentage
    collateralThreshold: Big; // percentage
    isActive: boolean;
}

// Enables easier access to data by asset ticker key.
type TickerToData<T> = {
    [ticker: string]: T;
};

interface LoanMarket {
    lendTokenId: number;
}

export type { LoanPosition, LendPosition, BorrowPosition, LoanAsset, TickerToData, LoanMarket, SubsidyReward };
