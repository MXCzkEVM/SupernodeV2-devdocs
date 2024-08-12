---
sidebar_position: 2
---
import Proving_Moonchain_Blocks from '/img/Proving_Moonchain_Blocks.gif';

# Proving Moonchain Blocks

On the Moonchain zkEVM, the process of proving blocks ensures the ability to withdraw state out of the rollup through bridges. Here's how it works:

### Zero-Knowledge Provers

The purpose of proving blocks is to enable bridges to verify that state transitions within the rollup were executed correctly. On Moonchain, any participant can operate as a prover, permissionlessly running a Supernode to examine proposed blocks and generate proofs for them.

### Process Overview

1. **Block Examination**
    - Provers examine proposed blocks on the [MXCzkL1 contract](https://doc.moonchain.com/docs/Resources/Address#protocol-contracts) to ensure they adhere to protocol rules and consensus mechanisms.
2. **Proof Generation**
    - Validated blocks are then processed to generate cryptographic proofs that attest to their correctness. These proofs are essential for verifying state transitions within the rollup.
3. **Reward Mechanism**
    - Only the first prover who seccessfully generates a valid proof for the correct fork choice (state transition) receives the reward in $MXC tokens. This incentivizes efficien tand accurate proof generation.

### Zero-Knowledge States

Blocks on Moonchain progress through three distinct states:

- **Proposed**: Blocks are initially proposed awaiting validation
- **Proved**: Once validated and proven by a prover, blocks transition to the provided state, indicating that they have a valid cryptographic proof.
- **Verified**: Verified blocks have undergone further verification processes, ensuring complete validation of state transitions.

Below is a visualization depicting the three stages (Proposed --> Proved --> Verified).

<img src={Proving_Moonchain_Blocks} alt="Proving Moonchain Blocks GIF" style={{width: 600}}/>

This approach ensures the integrity and reliability of state transitions within the Moonchain zkEVM ecosystem, supporting secure and efficient blockchain operations.