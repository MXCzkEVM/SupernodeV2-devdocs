---
sidebar_position: 8
---

# Gas Fee for Layer 3

When submitting a transaction on Moonchain Layer 3 (L3), a user incurs fees for two main parties.

1. **The Poster (if reimbursable)**:
    - This fee covers Layer 2 (L2) resources such as the L2 calldata necessary to post the transaction.
2. **The Network Fee Account**:
    - This fee encompasses L3 resources, including computation, storage, and other burdens that L3 supernodes must bear to service the transaction.

The calculation of these fees involves two components:

### L2 Component

- The L2 fee is determined by the transaction's estimated contribution to its batch's size, calculated using Brotli compression on the transaction alone.
- This fee is multiplied by the L3's view of the L2 data price, a dynamic value that adjusts over time to ensure the batch-poster is fairly compensated.

### L3 Component

- The L3 fee consists of traditional charges Geth would pay to stakers in a standard L2 chain, covering computation and storage costs associated with the state transition function.
- Additionally, MXC zkEVM imposes extra fees for executing L3-specific operations, with charges dynamically priced based on the specific resources used during execution.

These mechanisms ensure that both the poster and the network are adequately compensated for the resources utilized, maintaining the efficiency and security of the Moonchain ecosystem.

### How Fees are Calculated

Every transaction on Moonchain zkEVM involves two primary costs: the Layer 3 (L3) execution fee and the Layer 2 (L2) security fee. Here's an overview of how these fees are calculated:

#### L3 Execution Fee

The L3 execution fee covers the cost of executing your transaction within the L3 environment.
This fee is calculated as: 
$$
L3 Execution Fee = (tx.gasPrice) x (L3GasUsed)
$$
- **tx.gasPrice**: The price per unit of gas, which you can check on the [explorer](https://explorer.moonchain.com/).
- **L3GasUsed**: The amount of gas used by the transaction, up to the specified gas limit (tx.gasLimit).

The gas price consists of two components: a base fee and a priority fee, in compliance with EIP-1559 (albeit with different parameter values).

#### L2 Security Fee

The L2 security fee covers the cost of publishing your transaction on L2, ensuring Ethereum-equivalent security. This fee is deducted automatically from the supernode's ETH balance on Arbitrum One. It is calculated based on three factors:

1. **L2 Gas Price**: The gas price for L2 transactions at the time of processing. This value can be checked [here](https://dune.com/taem/arbitrum-gas-fee).

    :::important [NOTE]
    This value can change but does not precisely track L2 gas prices, so spikes in L2 gas prices can only affect your transaction's cost by up to 25%.
    :::

2. **Gas Used on L2**: The amount of gas required to publish the transaction on L2. This is influenced by the transaction length and the byte values (whether it is zero or a different value) for each byte.
