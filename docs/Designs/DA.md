---
sidebar_position: 9
---


# Data Availability
>  With the CelestiaDA-powered MXC zkEVM DA module online with MXC zkEVM Mainnet, only state roots and a necessary subset of transaction data are sent to Arbitrum (L2), while the bulk of the transaction batch data is posted to the DA network. For decentralized applications (dApps) with high gas consumption, they can be executed at the same cost as a standard transaction (like a transfer) on MXC zkEVM, and the Arbitrum fee will not escalate with the complexity of L3 transaction execution. As a result, for transactions of high complexity, this approach can save up to approximately 70% of the cost compared to traditional L2 rollup fees on Arbitrum.

:::tip Ontario Upgrade
Data Availability for reducing gas fee is included in Ontario Upgrade, at block height 281000
:::


## What is Data Availability?

By "Data Availability" (DA), we refer to the capacity for any node in the MXC zkEVM network to access transaction history posted by the Sequencer. Ensuring that block data is accessible to all network participants is crucial for scalability, particularly in blockchain architectures using a rollup model. This is essential to prevent the withholding of block data, whether intentional or not. Hence, the primary challenge in maintaining a trustless L3 network lies in ensuring persistent availability of transaction data.

Addressing data availability is a significant challenge in itself. For more insights, you can explore the data availability problem and erasure coding [here](#).

## Trust Minimization

Trustlessness is a key principle in blockchain design. "Trustless" implies that blockchain users should be able to perform their activities without undue reliance on third parties.

Blockchains utilize cryptography to replace soft agreements and social contracts (trust) with stringent rules and code. Practically, this means blockchains are designed so users can independently verify if network participants have adhered to the rules.

On a network like Ethereum (L1), this verification relies on full nodes. Full nodes store the entire blockchain history, enabling others to verify if state transitions are correct.

For MXC zkEVM, transactions are executed on the L3 chain. Therefore, MXC zkEVM nodes require access to L3 transaction data for state verification. This is facilitated by the Sequencer, which publishes complete transaction data and cryptographic evidence of state transition (a Merkle Proof) on Arbitrum (L2).

The robustness of Ethereum's trust network stems from its extensive validator network, a reliable consensus algorithm, security through widespread adoption, and the distributed value of $ETH.

## CelestiaDA

CelestiaDA, a re-staking protocol, strengthens Ethereum's existing trust network. It allows any rollup-based L3 to ensure data availability to its execution layer, retaining Ethereum mainnet's security level. Validators on L1 can opt to provide data availability services for L3, using their staked $ETH as collateral.

Consider it an Ethereum middleware platform.

Just as optimistic rollups implement economic incentives for system integrity, this mechanism encourages Ethereum validators to offer services for added yield opportunities. Learn more about CelestiaDA [here](#).

## MXC zkEVM DA - Powered by CelestiaDA Technology

CelestiaDA, developed on Ethereum, introduces restaking, enhancing cryptoeconomic security. CelestiaDA (Data Availability), a key application on CelestiaDA, is selected for MXC zkEVM Network's data availability module.

The current MXC zkEVM DA is powered by CelestiaDA technology, licensed by CelestiaLabs. The MXC zkEVM team, with CelestiaDA's support, is implementing this simplified solution until the canonical solution launches on mainnet.

For MXC zkEVM DA, rollup data is available here: State Roots on L2, Rollup Tx Data on L2, and DA Rollup Tx on L3.



Note: MXC zkEVM DA allows permissioned nodes to offer data availability services to the MXC zkEVM network, requiring $MXC staking.



## MXC zkEVM DA Characteristics

- Facilitates decoupling the data availability layer from the consensus layer.
- Uses a unicast channel for efficient data exchange and storage among network participants.
- Maintains an erasure rate allowing actors to reconstruct complete block data from L2 and L3 sources.
- Offers high throughput and low gas costs, ideal for advanced applications in blockchain gaming, decentralized social networks, etc.

MXC zkEVM Explorer displays transaction batch details for the rollup data stored on the DA layer, as well as transactions on L3.
