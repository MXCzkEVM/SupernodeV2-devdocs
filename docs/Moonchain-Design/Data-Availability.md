---
sidebar_position: 9
---

# Data Availability

The Moonchain zkEVM DA module leverages IPNS for data storage, sending only essential state roots and a necessary subset of transaction data to Arbitrum (L2), while posting the bulk of the transaction batch data to IPNS. This approach allows decentralized applications (dApps) with high gas consumption to operate at the same cost as standard transactions on MXC zkEVM. Consequently, even with high transaction complexity, the Arbitrum fee remains stable, leading to potential cost savings of up to 70% compared to traditional L2 rollup fees on Arbitrum.

:::tip[Ontario Upgrade]
At block height 288888, Moonchain integrates IPNS into its Data Availability (DA) strategy as part of the Ontario Upgrade. This enhancement optimizes gas fees, offering significant cost savings for transactions and dApps on Moonchain zkEVM.
:::

## What is Data Availability?

Data Availability (DA) in the context of MXC zkEVM refers to the capability of any node within the network to retrieve transaction history stored using IPNS (InterPlanetary Name System). In blockchain systems like MXC zkEVM, ensuring that block data is accessible to all participants is critical for scalability, particularly when employing a rollup model. This accessibility prevents the possibility of block data being withheld, whether intentionally or unintentionally. Therefore, a key challenge in maintaining a trustless Layer 3 (L3) network lies in ensuring continuous access to transaction data through decentralized storage solutions such as IPNS.

## Trust Minimization

Trustlessness is a fundamental principle in blockchain design, signifying that users can operate within the network without relying on third parties. In practice, blockchains use cryptography to replace soft agreements and social contracts with strict rules and code, allowing users to independently verify that network participants have adhered to these rules.

On a network like Ethereum (Layer 1), this verification is handled by full nodes, which store the entire blockchain history. These nodes enable users to verify the correctness of state transitions.

For Moochain zkEVM, transactions are executed on the Layer 3 (L3) chain. Thus, Moonchain zkEVM nodes must access L3 transaction data and cryptographic evidence of state transitions (such as Merkle Proofs) on Arbitrum (Layer 2), while the transaction batch data is stored on IPNS.

The robustness of Ethereum's trust network is derived from its extensive validator network, a reliable consensus algorithm, security through widespread adoption, and the distributed value of $ETH.

## Moonchain zkEVM DA - Powered by IPNS Technology

The Moonchain zkEVM Data Availability (DA) system leverages IPNS, a component of the InterPlanetary File System (IPFS), to introduce a dynamic and decentralized solution for data storage. IPNS was chosen for the Moonchain zkEVM Network's DA module due to its resilience and decentralized nature.

By using IPNS technology, the Moonchain zkEVM DA system ensures that data remains persistently available and verifiable by network participants. This approach upholds the network's integrity and trustlessness, essential for maintaining a robust blockchain ecosystem.

In the Moonchain zkEVM DA framework, rollup data is distributed across multiple layers:
    - **State Roots on L2**
    - **Rollup Transaction Data on L2**
    - **DA Rollup Transaction Data on IPNS**

:::info[NOTE]
Moonchain zkEVM DA allows permissioned nodes to offer data availability services to the Moonchain zkEVM network, requiring $MXC staking.
:::

## Moonchahin zkEVM DA Characteristics

- **Decoupling of Layers**: Facilitates the separation of the data availability layer from the consensus layer using IPNS, enhancing the modularity and efficiency of the network.
- **Distributed Hash Table**: Employs a distributed hash table (DHT) for efficient data exchange and storage among network participants, ensuring decentralized and resilient data management.
- **Data Integrity and Availability**: Ensures the integrity and availability of data, allowing for the complete reconstruction of block data, which is crucial for maintaining trust and transparency.
- **High Throughput and Low Gas Costs**: Optimized for advanced applications, such as blockchain gaming and decentralized social networks, by offering high throughput and low gas costs.
- **Comprehensive Data Display**: The [Moonchain zkEVM Explorer](https://explorer.moonchain.com/) provides detailed views of transaction batches stored on the DA layer via IPNS, along with transactions on L3, ensuring transparency and accessibility of information.