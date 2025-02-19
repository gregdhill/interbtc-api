import { AccountId } from "@polkadot/types/interfaces";
import { ApiPromise } from "@polkadot/api";
import { AddressOrPair } from "@polkadot/api/types";
import { Currency, MonetaryAmount } from "@interlay/monetary-js";

import { newAccountId, newMonetaryAmount } from "../utils";
import { DefaultTransactionAPI, TransactionAPI } from "./transaction";
import { monetaryToCurrencyId, CurrencyUnit, tickerToCurrencyIdLiteral } from "../types";

/**
 * @category InterBTC Bridge
 */
export interface TokensAPI extends TransactionAPI {
    /**
     * @param currency The currency specification, a `Monetary.js` object
     * @returns The total amount in the system
     */
    total<C extends CurrencyUnit>(currency: Currency<C>): Promise<MonetaryAmount<Currency<C>, C>>;
    /**
     * @param currency The currency specification, a `Monetary.js` object
     * @param id The AccountId of a user
     * @returns The user's free balance
     */
    balance<C extends CurrencyUnit>(currency: Currency<C>, id: AccountId): Promise<MonetaryAmount<Currency<C>, C>>;
    /**
     * @param currency The currency specification, a `Monetary.js` object
     * @param id The AccountId of a user
     * @returns The user's locked balance
     */
    balanceLocked<C extends CurrencyUnit>(
        currency: Currency<C>,
        id: AccountId
    ): Promise<MonetaryAmount<Currency<C>, C>>;
    /**
     * @param destination The address of a user
     * @param amount The amount to transfer, as a `Monetary.js` object
     */
    transfer<C extends CurrencyUnit>(destination: string, amount: MonetaryAmount<Currency<C>, C>): Promise<void>;
    /**
     * Subscribe to balance updates, denominated in InterBTC
     * @param currency The currency specification, a `Monetary.js` object
     * @param account AccountId string
     * @param callback Function to be called whenever the balance of an account is updated.
     * Its parameters are (accountIdString, freeBalance)
     */
    subscribeToBalance<C extends CurrencyUnit>(
        currency: Currency<C>,
        account: string,
        callback: (account: string, balance: MonetaryAmount<Currency<C>, C>) => void
    ): Promise<() => void>;
}

export class DefaultTokensAPI extends DefaultTransactionAPI implements TokensAPI {
    constructor(api: ApiPromise, account?: AddressOrPair) {
        super(api, account);
    }

    async total<C extends CurrencyUnit>(currency: Currency<C>): Promise<MonetaryAmount<Currency<C>, C>> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const currencyId = tickerToCurrencyIdLiteral(currency.ticker);
        const rawAmount = await this.api.query.tokens.totalIssuance.at(head, currencyId);
        return newMonetaryAmount(rawAmount.toString(), currency);
    }

    async balance<C extends CurrencyUnit>(
        currency: Currency<C>,
        id: AccountId
    ): Promise<MonetaryAmount<Currency<C>, C>> {
        const currencyId = tickerToCurrencyIdLiteral(currency.ticker);
        const account = await this.api.query.tokens.accounts(id, currencyId);
        return newMonetaryAmount(account.free.toString(), currency);
    }

    async balanceLocked<C extends CurrencyUnit>(
        currency: Currency<C>,
        id: AccountId
    ): Promise<MonetaryAmount<Currency<C>, C>> {
        const currencyId = tickerToCurrencyIdLiteral(currency.ticker);
        const account = await this.api.query.tokens.accounts(id, currencyId);
        return newMonetaryAmount(account.reserved.toString(), currency);
    }

    async subscribeToBalance<C extends CurrencyUnit>(
        currency: Currency<C>,
        account: string,
        callback: (account: string, balance: MonetaryAmount<Currency<C>, C>) => void
    ): Promise<() => void> {
        try {
            const accountId = newAccountId(this.api, account);
            const currencyId = tickerToCurrencyIdLiteral(currency.ticker);
            const unsubscribe = await this.api.query.tokens.accounts(accountId, currencyId, (balance) => {
                callback(account, newMonetaryAmount(balance.free.toString(), currency));
            });
            return unsubscribe;
        } catch (error) {
            Promise.reject(error);
        }
        // as a fallback, return an empty void function
        return () => {
            return;
        };
    }

    async transfer<C extends CurrencyUnit>(destination: string, amount: MonetaryAmount<Currency<C>, C>): Promise<void> {
        const amountSmallDenomination = this.api.createType("Balance", amount.toString());
        const currencyId = monetaryToCurrencyId(amount);
        const transferTransaction = this.api.tx.tokens.transfer(destination, currencyId, amountSmallDenomination);
        await this.sendLogged(transferTransaction, this.api.events.tokens.Transfer);
    }
}
