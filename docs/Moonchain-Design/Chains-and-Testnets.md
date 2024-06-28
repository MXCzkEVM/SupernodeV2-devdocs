---
sidebar_position: 5
---

# Moonchain Chains Overview

Moonchain Chains are Layer 3 solutions built atop the Ethereum Blockchain, aimed at enhancing scalability and reducing transaction costs. This overview guides through the configuration of Mainnet and Testnet wallets.

Moonchain operates two testnet networks: **Moonchain (Geneva Testnet)** and **Arbitrum One (Sepolia)**.

### Arbitrum Sepolia

Arbitrum Sepolia replicates the functionalities of Arbitrum One's main network, providing developers with a secure environment to test and validate their smart contracts before deploying them on the mainnet.

### Moonchain Geneva

Moonchain Geneva operates similarly to Sepolia but leverages Layer 3 capabilities. Unlike Ethereum's native token **ETH**, Moonchain uses **MXC** as its native token.

:::caution[CAUTION]
The old testnet Wannsee was deprecated on April, 2024.
:::

### Steps to Add Networks to MetaMask

<iframe 
    width="800" height="450" src="https://www.youtube.com/embed/y0MeycuNmEo?start=68" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
</iframe>


#### Add the Moonchain Geneva Testnet
1. Check the [RPC Configuration](./Chains-and-Testnets#rpc-configuration) section below.
2. Open your MetaMask wallet.
3. Click on the network selection at the top right.
4. Click on Add Network and then Add a network manually.
5. Enter the RPC configuration details for the Moonchain Geneva testnet from the RPC Configuration details below.

#### Add the Arbitrum One (Sepolia) Testnet
1. Visit the Chainlist website and check for [Arbitrum One Sepolia](https://chainlist.org/chain/421614).
2. Connect with your wallet.
3. Click on Add to MetaMask to add the Sepolia Testnet to your network list.

#### Connect to Moonchain Mainnet
1. Visit the RPC Configuration page.
2. Open your MetaMask wallet.
3. Click on the network selection at the top right.
4. Click on Add Network and then Add a network manually.
5. Enter the RPC configuration details for the Moonchain Mainnet from the RPC Configuration page.

## RPC Configuration

| Network                      | Chain ID | RPC URL                           | Symbol | Block Explorer URL                         | Web Socket URL                        |
|------------------------------|----------|-----------------------------------|--------|--------------------------------------------|---------------------------------------|
| Arbitrum One                 | 42161    | https://arbitrum.io/rpc           | ETH    | https://arb1.arbitrum.io/rpc               |                                       |
| Moonchain Mainnet            | 18686    | https://rpc.mxc.com               | MXC    | https://explorer.moonchain.com/            | wss://rpc.mxc.com/ws                  |
| Wannsee Testnet (discontinued) | 5167003  | https://wannsee-rpc.mxc.com       | MXC    | https://wannsee-explorer.mxc.com/          | wss://wannsee-rpc.mxc.com/ws          |
| Moonchain Geneva Testnet     | 5167004  | https://geneva-rpc.moonchain.com  | MXC    | https://geneva-explorer.moonchain.com      | wss://geneva-rpc.moonchain.com/ws     |

## Troubleshooting

**Metamask Doesn't Accept the Provided RPC Server Address?**

**1. Try a Different RPC Address**:
    - Visit [ChainList](https://chainlist.org) and search for the relevant network.
    - Select an alternative RPC address and try adding it again to MetaMask.

**2. Manually Enter the RPC Address**:
    - Follow the instructions provided in Step 2 for manually entering the RPC address in MetaMask.