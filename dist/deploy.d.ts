import { Fr } from "@aztec/aztec.js/fields";
import type { AztecAddress } from "@aztec/aztec.js/addresses";
import type { Wallet } from "@aztec/aztec.js/wallet";
import { type SponsoredFpcConfig } from "./config.js";
export type DeploySponsoredFpcOptions = {
    wallet: Wallet;
    deployer: AztecAddress;
    config: SponsoredFpcConfig;
    env?: NodeJS.ProcessEnv;
    sendOptions?: Record<string, unknown>;
    timeoutMs?: number;
};
export declare function deploySponsoredFpc(options: DeploySponsoredFpcOptions): Promise<{
    address: AztecAddress;
    salt: Fr;
}>;
//# sourceMappingURL=deploy.d.ts.map