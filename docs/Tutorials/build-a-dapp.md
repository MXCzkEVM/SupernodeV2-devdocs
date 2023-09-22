---
title: Build a Dapp
sidebar_position: 8
---

This guide will help you build a dapp on MXC (Wannsee testnet)! The starter dapp highlights an important feature of MXC: sending secure cross-chain messages between Arbitrum and MXC. Read more about cross-chain messaging [here](/docs/Designs/Bridge).

## Prerequisites

- A curiosity to learn and build.

## Steps
1. Try Token [airdrop templates](https://github.com/MXCzkEVM/token-airdrop-x2e) to create airdrop in one-click
2. Visit the [dapp-slaps starter template](https://github.com/MXCzkEVM/dapp-slaps) to create an bridge dapp with one-click.


## Status page integration

Remember to integrate the status widget in case the zkEVM operational status is changed
```
<script src="https://mxc.instatus.com/13076080/widget/script.js">
</script>
```

This will show a pop-up widget if the zkEVM has a new incident.
