#!/usr/bin/env node
import type { AztecAddress } from "@aztec/aztec.js/addresses";
import type { Wallet } from "@aztec/aztec.js/wallet";
export type DeploymentContext = {
    wallet: Wallet;
    deployer: AztecAddress;
    sendOptions?: Record<string, unknown>;
};
//# sourceMappingURL=cli.d.ts.map