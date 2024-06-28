---
sidebar_position: 4
---

# Enable a Prover

:::important[CAUTION]
Only the first prover can get the reward, and others will be rejected by the protocol smart contract. This means the fastest prover will be able to prove the block and earn the reward. If you have just the minimum hardware outlined in the prerequisites below and are running a single prover, it's unlikely you will be able to prove any blocks because you will be competing against other high-performance provers.

If you do not have a powerful prover, the primary purpose of running a prover should be to help test out and provide community feedback on running the node software. Keep in mind that this will incur electricity costs on your computer, and if you are not proving blocks, it's unlikely you will receive rewards to offset these costs.
:::

## Prerequisites
- **ETH on Arbitrum Sepolia**: You must have some ETH on Arbitrum Sepolia Testnet. Refer to the ["receive tokens"](/docs/Testnet-Tutorials/Moonchain-Faucet) section for more details.
- **Hardware Requirements**: You should have at least an 8/16 core CPU and 32GB of RAM. (**Note**: See the warning above about the necessity of having powerful hardware to successfully prove blocks).

### Steps
1. **Set Environment Variables to Enable Prover**
To enable your node as a prover, set the following environment variables:
    - Set `ENABLE_PROVER` to `true` (replacing the default `false` with `true`).
2. **Set Private Key**
    - Set `L1_PROVER_PRIVATE_KEY` to your wallet's private key. Ensure this wallet has some balance on Arbitrum Sepolia to prove blocks.
    - If using MetaMask, follow [these instructions](https://support.metamask.io/managing-my-wallet/secret-recovery-phrase-and-private-keys/how-to-export-an-accounts-private-key/) to retreive the private key.

3. **Verify Prover Logs**
Check your prover logs for the following messages to ensure everything is functioning correctly.
    - `💰 Your block proof was accepted` means you are the first prover and have received the reward.
    - `✅ Valid block proven` indicates that a proposed block was successfully proved on MXCL1 (by anyone).

3. **Troubleshooting**
For common issues, consult the [Supernode - Troubleshooting](/docs/Testnet-Tutorials/Run-Moonchain-Supernode#supernode-error-logs) section.