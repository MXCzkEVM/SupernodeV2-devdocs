---
sidebar_position: 10
---

# Data Availability

> With the MXC zkEVM DA module leveraging IPNS for data storage, only state roots and a necessary subset of transaction data are sent to Arbitrum (L2), while the bulk of the transaction batch data is posted to IPNS. For decentralized applications (dApps) with high gas consumption, they can operate at the same cost as a standard transaction (like a transfer) on MXC zkEVM, and the Arbitrum fee will not escalate with the complexity of L3 transaction execution. As a result, for transactions of high complexity, this approach can save up to approximately 70% of the cost compared to traditional L2 rollup fees on Arbitrum.

:::tip Ontario Upgrade
Data Availability using IPNS for reducing gas fee is included in the Ontario Upgrade, at block height 288888
:::

## What is Data Availability?

By "Data Availability" (DA), we refer to the capacity for any node in the MXC zkEVM network to access transaction history stored using IPNS. Ensuring that block data is accessible to all network participants is crucial for scalability, particularly in blockchain architectures using a rollup model. This is essential to prevent the withholding of block data, whether intentional or not. Hence, the primary challenge in maintaining a trustless L3 network lies in ensuring persistent availability of transaction data using decentralized storage solutions like IPNS.

Addressing data availability is a significant challenge in itself. For more insights, you can explore the data availability problem and erasure coding [here](#).

## Trust Minimization

Trustlessness is a key principle in blockchain design. "Trustless" implies that blockchain users should be able to perform their activities without undue reliance on third parties.

Blockchains utilize cryptography to replace soft agreements and social contracts (trust) with stringent rules and code. Practically, this means blockchains are designed so users can independently verify if network participants have adhered to the rules.

On a network like Ethereum (L1), this verification relies on full nodes. Full nodes store the entire blockchain history, enabling others to verify if state transitions are correct.

For MXC zkEVM, transactions are executed on the L3 chain. Therefore, MXC zkEVM nodes require access to L3 transaction data for state verification. This is facilitated by the Sequencer, which publishes complete transaction data and cryptographic evidence of state transition (a Merkle Proof) on Arbitrum (L2), and the transaction batch data on IPNS.

The robustness of Ethereum's trust network stems from its extensive validator network, a reliable consensus algorithm, security through widespread adoption, and the distributed value of $ETH.

## MXC zkEVM DA - Powered by IPNS Technology

IPNS, an integral part of the InterPlanetary File System (IPFS), introduces a dynamic and decentralized solution for data storage. This technology is selected for the MXC zkEVM Network's data availability module due to its resilience and decentralized nature.

The MXC zkEVM DA system, leveraging IPNS technology, ensures that data is persistently available and verifiable by network participants, maintaining the network's integrity and trustlessness.

For MXC zkEVM DA, rollup data is available here: State Roots on L2, Rollup Tx Data on L2, and DA Rollup Tx on IPNS.

Note: MXC zkEVM DA allows permissioned nodes to offer data availability services to the MXC zkEVM network, requiring $MXC staking.

## MXC zkEVM DA Characteristics

- Facilitates decoupling the data availability layer from the consensus layer using IPNS.
- Uses a distributed hash table for efficient data exchange and storage among network participants.
- Maintains data integrity and availability, allowing for complete reconstruction of block data.
- Offers high throughput and low gas costs, ideal for advanced applications in blockchain gaming, decentralized social networks, etc.

MXC zkEVM Explorer displays transaction batch details for the rollup data stored on the DA layer via IPNS, as well as transactions on L3.
