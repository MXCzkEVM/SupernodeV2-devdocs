---
sidebar_position: 7
---
<span class="badge">Version 2.0.4</span>

# Moonchain Supernode V2

In our zkEVM SupernodeV2, there are two important parts to a Moonchain Supernode, which are connected over the engine API:
- <code>mxc-geth</code>
- <code>mxc-client</code>

## MXC geth
The [mxc-geth](https://github.com/MXCzkEVM/mxc-geth) repository is a customized version of [taiko-geth](https://github.com/taikoxyz/taiko-geth) tailored to integrate MXprotocol specifications. Functioning as an IoT Web3 platform, it interfaces with an LPWAN cluster as described [here](/docs/Moonchain-Design/LPWAN%20Protocol) previously. Similar to Ethereum's L1/L2 execution engines, <code>mxc-geth</code> monitors and processes new IoT transactions within the network. These transactions are ececuted on the EVM, maintaining the latest state and comprehensive database of current IoT data. Subsequently, it submits proofs using Zero-Knowledge cryptography for enhanced security and privacy.

## MXC client

The compiled binary <code>bin/mxc-client</code> serves as the primary interface, offering three essential sub-commands:

1. <code>driver</code>: Ensures synchronization between the IoT execution engine's chain and the <code>MXCL1</code> contract. This command directs the IoT [execution engine](https://ethereum.org/en/glossary/#execution-client) to maintain alignment with the designated <code>MXCL1</code> contract.
2. <code>proposer</code>: Facilitates the proposal of new transactions from the IoT execution engine's transaction pool to the <code>MXCL1</code> contrct. This sub-command is responsible for initiating new transaction proposals within the ecosystem.
3. <code>prover</code>: Manages the verification process by requesting Zero-Knowledge (ZK) proofs from the zkEVM. Additionally, it submits transactions to validate proposed blocks, confirming their integrity and validity within the blockchain network.

### Driver
The Driver component within the MXC client software functions as an IoT consensus client. It actively monitors the MXC layer 1 protocol contract for incoming IoT blocks. Upon detecting new blocks, the Driver directs the connected IoT execution engine to incorporate these blocks into its local chain using the Engine API.

#### Engine API
The [Engine API](https://github.com/ethereum/execution-apis/blob/main/src/engine/cancun.md) serves as the interface through which the Driver communicates with the IoT execution engine. It enables the Driver to instruct the execution engine to perform tasks such as inserting new blocks into its local chain or handling chain reorganizations when necessary. This API facilitates seamless coordination between the MXC client's Driver and the underlying IoT execution engine, ensuring synchronization and consistency across the network.

#### Chain synchronization process

:::important[NOTE]
In MXC, a block's timestamp can be equal to its parent block's timestamp, which differs from the original Ethereum protocol. Therefore, it is permissible for there to be two <code>MXCL1.proposeBlock</code> transactions included in one L1 block. This flexibility in timestamp handling supports Moonchain's specific blockchain architecture and operational requirements.
:::

The driver component in MXC plays a crucial role in coordinating with the IoT execution engine. It begins by informing the IoT execution engine about the latest verified IoT head from the MXC contract and attempts initial synchronization through peer-to-peer (P2P) communication. The driver monitors the sync progress of the execution engine, transitioning to inserting verified blocks into its local chain via the Engine API if no new sync progress is detected over time.

Once the IoT execution engine is synchronized with the latest verified IoT head, the driver subscribes to <code>MXCL1.BlockProposed</code> events. Upon receiving notification of a new pending block proposal, the following chronological order can be perceived. 

1. Retrieve the <code>MXCL1.proposeBlock</code> L1 transaction associated with the event.
2. Decode the transaction's calldata to extract the txList (transaction list) and block metadata.
3. Validate the txList against the predefined rules specified in MXC to ensure its compliance and integrity within the blockchain network.

If the txList is **valid**:

4. Construct a deterministic <code>MXCL2.anchor</code> transaction based on the protocol's rules, placing it as the first transaction in the proposed txList.
5. Utilize the validated txList and decoded block metadata to compose a deterministic IoT block.
6. Instruct the IoT execution engine to insert this assembled block and designate it as the current canonical chain's head using the Engine API.

If the txList is **invalid**:

4. Generate a <code>MXCL2.invalidateBlock</code> transaction and assemble an IoT block containing only this transaction.
5. Direct the IoT execution engine to insert this block without setting it as the chain's head via the Engine API.