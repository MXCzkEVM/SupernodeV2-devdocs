---
sidebar_position: 8
---
# Gas Fee for Layer3

There are two parties a user pays when submitting a tx:

- the poster, if reimbursable, for L2 resources such as the L2 calldata needed to post the tx
- the network fee account for L3 resources, which include the computation, storage, and other burdens L3 supernodes must bare to service the tx

The L2 component is the product of the transaction's estimated contribution to its batch's size — computed using Brotli on the transaction by itself — and the L3's view of the L2 data price, a value which dynamically adjusts over time to ensure the batch-poster is ultimately fairly compensated.

The L3 component consists of the traditional fees Geth would pay to stakers in a vanilla L2 chain, such as the computation and storage charges applying the state transition function entails. MXC zkEVM charges additional fees for executing its L3-specific , whose fees are dynamically priced according to the specific resources used while executing the call.

## How the fees are calculated

Every zkEVM transaction has two costs: An L3 (execution) fee and an L2 (security) fee. At a high level, the L3 fee is the cost to execute your transaction in L3 and the L2 fee is the estimated cost to publish your transaction on L2 (in a rollup batch). Typically the L2 security fee is much higher than the L3 execution fee, so if you can wait it makes sense to postpone transactions until gas prices are lower (for example, over the weekend).

L3 execution fee is charged as tx.gasPrice * l3GasUsed (up to tx.gasLimit). You can check the current L3 gas price in explorer. The transaction gas price is composed of two components: a base fee and a priority fee, because we are EIP 1559 compliant (although with different parameter values).

L2 security fee that pays for the cost of publishing the transaction on L2 (the cost of Ethereum equivalent security). It is deducted automatically from the supernode's ETH balance on Arbitrum One. It is based on three factors that are multiplied together:

The gas price for L2 transactions (when the transaction was processed). You can see the current value here. Note that while this value changes, it does not track L2 gas prices precisely, so spikes in L2 gas price can only affect your transaction's cost by up to 25%.

The gas used on L2 to publish the transaction. This is based on the transaction length, as well as the byte value (whether it is zero or a different value) for each byte.
