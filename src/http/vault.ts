import {
    AccountIdJsonRpcResponse,
    ReplaceRequestJsonRpcRequest,
    RegisterVaultJsonRpcRequest,
    ChangeCollateralJsonRpcRequest,
    UpdateBtcAddressJsonRpcRequest,
    WithdrawReplaceJsonRpcRequest,
} from "../interfaces/default";
import { H160, H256 } from "@polkadot/types/interfaces/runtime";
import { getAPITypes } from "../factory";
import { TypeRegistry } from "@polkadot/types";
import { Constructor } from "@polkadot/types/types";
import BN from "bn.js";
import { JsonRpcClient } from "./client";

export class VaultClient extends JsonRpcClient {
    registry: TypeRegistry;

    constr: {
        AccountIdJsonRpcResponse: Constructor<AccountIdJsonRpcResponse>;
        ReplaceRequestJsonRpcRequest: Constructor<ReplaceRequestJsonRpcRequest>;
        RegisterVaultJsonRpcRequest: Constructor<RegisterVaultJsonRpcRequest>;
        ChangeCollateralJsonRpcRequest: Constructor<ChangeCollateralJsonRpcRequest>;
        UpdateBtcAddressJsonRpcRequest: Constructor<UpdateBtcAddressJsonRpcRequest>;
        WithdrawReplaceJsonRpcRequest: Constructor<WithdrawReplaceJsonRpcRequest>;
        H160: Constructor<H160>;
        H256: Constructor<H256>;
    };

    constructor(url: string) {
        super(url);
        this.registry = new TypeRegistry();
        this.registry.register(getAPITypes());

        this.constr = {
            AccountIdJsonRpcResponse: this.registry.createClass("AccountIdJsonRpcResponse"),
            ReplaceRequestJsonRpcRequest: this.registry.createClass("ReplaceRequestJsonRpcRequest"),
            RegisterVaultJsonRpcRequest: this.registry.createClass("RegisterVaultJsonRpcRequest"),
            ChangeCollateralJsonRpcRequest: this.registry.createClass("ChangeCollateralJsonRpcRequest"),
            UpdateBtcAddressJsonRpcRequest: this.registry.createClass("UpdateBtcAddressJsonRpcRequest"),
            WithdrawReplaceJsonRpcRequest: this.registry.createClass("WithdrawReplaceJsonRpcRequest"),
            H160: this.registry.createClass("H160"),
            H256: this.registry.createClass("H256"),
        };
    }

    async isConnected(): Promise<boolean> {
        try {
            await this.getAccountId();
            return true;
        } catch (error) {
            return false;
        }
    }

    async getAccountId(): Promise<string> {
        const response = await this.post("account_id");
        const result = new this.constr["AccountIdJsonRpcResponse"](this.registry, response.result);
        return result.account_id.toString();
    }

    async requestReplace(amount: string, griefingCollateral: string): Promise<void> {
        const request = new this.constr["ReplaceRequestJsonRpcRequest"](this.registry, {
            amount: new BN(amount),
            griefing_collateral: new BN(griefingCollateral),
        });
        await this.post("request_replace", [request.toHex()]);
    }

    async registerVault(collateral: string, hash: string): Promise<void> {
        const btcAddress = new this.constr["H160"](this.registry, hash);
        const request = new this.constr["RegisterVaultJsonRpcRequest"](this.registry, {
            collateral: new BN(collateral),
            btc_address: btcAddress,
        });
        await this.post("register_vault", [request.toHex()]);
    }

    async lockAdditionalCollateral(amount: string): Promise<void> {
        const request = new this.constr["ChangeCollateralJsonRpcRequest"](this.registry, {
            amount: new BN(amount),
        });
        await this.post("lock_additional_collateral", [request.toHex()]);
    }

    async withdrawCollateral(amount: string): Promise<void> {
        const request = new this.constr["ChangeCollateralJsonRpcRequest"](this.registry, {
            amount: new BN(amount),
        });
        await this.post("withdraw_collateral", [request.toHex()]);
    }

    async updateBtcAddress(hash: string): Promise<void> {
        const btcAddress = new this.constr["H160"](this.registry, hash);
        const request = new this.constr["UpdateBtcAddressJsonRpcRequest"](this.registry, {
            address: btcAddress,
        });
        await this.post("set_btc_address", [request.toHex()]);
    }

    async withdrawReplace(replace_id: string): Promise<void> {
        const replaceId = new this.constr["H256"](this.registry, replace_id);
        const request = new this.constr["WithdrawReplaceJsonRpcRequest"](this.registry, {
            replace_id: replaceId,
        });
        await this.post("withdraw_replace", [request.toHex()]);
    }
}
