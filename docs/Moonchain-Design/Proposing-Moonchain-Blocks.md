---
sidebar_position: 1
---

# Proposing Moonchain Blocks

On Moonchain zkEVM, the next Layer 2 (L2) state is immediately and deterministically known at the moment a block is proposed to the zk-L1 contract.
After proposing a block, a series of checks are executed to compute this post-L2 state:

1. **Block Proposal**
    - Any participant can propose a block on Moonchain's Layer 2 zkEVM network without requiring permission (permissionless)
2. **Intrinsic Validity Check**
    - The proposed block undergoes a validity check using the Taiko-L1 contract's intrinsic validity function.
    This ensures that basic block-level properties meet protocol standards ([Verified blocks and parallel proving](https://docs.taiko.xyz/core-concepts/multi-proofs/#verified-blocks-and-parallel-proving))
3. **Supernode Verification**
    - Upon proposal, the block is downloaded by a Moonchain Supernode. Each transaction within the block undergoes validation using the transaction list intrinsic validity function.
    This verifies that transactions comply with network rules, such as valid nonces and sufficient $MXC balance for the transaction fees ([Multi-Proofs](https://docs.taiko.xyz/core-concepts/multi-proofs/#multi-proofs)).
4. **Transaction Ordering**
    - Valid transactions form an ordered subset within the block. Transactions with invalid nonces or insufficient $MXC balance are skipped during this process.
5. **Creation of Moonchain L2 Blocks**
    - Using the ordered subset of valid transactions and an [anchor transaction](https://docs.taiko.xyz/core-concepts/taiko-nodes/#process-of-proving-a-block), a Moonchain L2 Block is constructed. This block encapsulates the agreed-upon state changes and transactions.
6. **Invalid Block Handling**
    - If any transaction within the proposed block is found invalid during verification, the entire block is proven invalid and rejected from further processing.
7. **Gas and Burn Mechanism**
    - Proposers on Moonchain's Layer 2 zkEVM network are compensated with MXC tokens as gas for proposing blocks to L1. Additionally, they are required to burn a certain amount of $MXC tokens to compete for the opportunity to propose blocks to L1, ensuring fair competition and discouraging spam.

This process ensures the integrity and efficiency of block proposals on Moonchain's Layer 2 zkEVM network, supporting secure and scalable blockchain operations.
