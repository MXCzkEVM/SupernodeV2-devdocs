---
sidebar_position: 8
---

# Using Bridges

This guide will help you use the bridge to send tokens between Arbitrum Goerli and Moonchain (Wannsee Testnet). You can read more about how bridging works [here](/docs/Moonchain-Design/L1L2-Bridge).

:::info[Testnet Tokens]
The Ride token and Park token are both dummy test sensor tokens used for testing the bridge and swap functionalities.
:::

## Prerequisites
- **Testnet Wallet**: A wallet with some testnet ETH on Arbitrum Goerli and/or Moonchain Wannsee. (You can receive tokens [here](/docs/Testnet-Tutorials/Moonchain-Faucet).)

<iframe 
    width="800" height="450" src="https://www.youtube.com/embed/wW0a3_zoEEQ" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
</iframe>

## Steps
**1. Visit the Bridge**: Navigate to the [bridge interface](https://wannsee-bridge.mxc.com/). The UI should be intuitive and user-friendly.

**2. Bridge Tokens from Arbitrum Goerli to Moonchain Wannsee**
    - Select the tokens you want to bridge `(MXC, RIDE, PARK)` from Arbitrum Goerli to Moonchain Wannsee.
    - Approve the token transfer if required.
    - Click the `"Bridge"` button to initiate the transfer.
    - To manually claim the transfer, go to the `"Transactions"` tab and click the `"Claim"` button.

**3. Bridge Tokens from Moonchain Wannsee to Arbitrum Goerli**
    - Select the tokens you want to bridge `(MXC, RIDE, PARK)` from Moonchain Wannsee to Arbitrum Goerli.
    - Approve the token transfer if required.
    - Click the `"Bridge"` button to initiate the transfer.
    - To manually claim the transfer, go to the `"Transactions"` tab and click the `"Claim"` button.

:::caution[CAUTION]
**Arbitrum Goerli Gas Issues**: Goerli often has gas problems that could cause the claim to fail. To mitigate this, go to MetaMask's gas settings page under `"Advanced"` and change the gas limit to 6,000,000 or 7,000,000.
:::

By following these steps, you can seamlessly bridge tokens between Arbitrum Goerli and Moonchain Wannsee testnet, ensuring you account for potential gas issues on Arbitrum Goerli.