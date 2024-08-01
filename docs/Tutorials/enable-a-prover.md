---
title: Enable a Prover
sidebar_position: 7
---

:::caution
 Only the first prover can get the reward, and others will be rejected by the protocol smart contract. This means the fastest prover will be able to prove the block and earn the reward, **if you have just the minimum hardware outlined in the prerequisited below, running a single prover, it's unlikely you will be able to prove any blocks (because you will be competing against other high-performance provers)**.

Meaning, if you do not have a powerful prover, the primary purpose of running a prover is to help test out and provide community feedback on running the node software. Keep in mind this will have a cost in electricity on your computer, and if you are not proving blocks, it's unlikely you will receive a reward to offset that electricity cost.
:::


## Prerequisites
- Must have some ETH on Arbitrum Goerli (see [receive tokens](/docs/Tutorials/receive-tokens)).
- Should have at least 8/16 core CPU and 32GB of RAM. (**note: see warning above**)


## Steps

### Set environment variables to enable prover
Set the following environment variables to enable your node as a prover: 
- Set `ENABLE_PROVER` to `true` (replacing the default `false` with `true`). 
- Set `L1_PROVER_PRIVATE_KEY` to that of your wallet's private key; it will need some balance on Arbitrum Goerli to prove blocks (if using MetaMask, follow these directions to [retrieve the private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)).

### Verify prover logs
Verify you have some prover logs:
- `💰 Your block proof was accepted` means you are the first prover and receive the reward.
- `✅ Valid block proven` just means a proposed block was successfully proved on MXCL1 (by anyone).

## Troubleshooting
Consult [Run a node - Troubleshooting](/docs/Tutorials/run-a-supernode#troubleshooting) for common issues.