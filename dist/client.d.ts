import { type GasProfile, type SendOnceContext } from "@alejoamiras/quota-paymaster";
import { AztecAddress } from "@aztec/aztec.js/addresses";
import type { ContractMethod } from "@aztec/aztec.js/contracts";
import type { AztecNode } from "@aztec/aztec.js/node";
import type { Wallet } from "@aztec/aztec.js/wallet";
import { type TxHash } from "@aztec/stdlib/tx";
export type SponsoredFpcClientOptions = {
    wallet: Wallet;
    node: AztecNode;
    address: AztecAddress | string;
    gasProfile: GasProfile;
    nodeUrl: string;
};
export declare class SponsoredFpcClient {
    private readonly options;
    readonly address: AztecAddress;
    readonly sendContext: SendOnceContext;
    private contract?;
    constructor(options: SponsoredFpcClientOptions);
    register(): Promise<void>;
    balance(): Promise<bigint>;
    sendMethod(args: {
        contract: {
            methods: Record<string, ContractMethod>;
        };
        method: string;
        args: unknown[];
        player: AztecAddress;
    }): Promise<TxHash>;
    sendCalls(calls: unknown[], player: AztecAddress): Promise<TxHash>;
    private proveAndSend;
}
//# sourceMappingURL=client.d.ts.map