---
sidebar_position: 9
---

# Deploying a Contract on Moonchain

:::caution[CAUTION]
Make sure you are using a test/throwaway wallet, to be save. Never reveal the private key of your main wallet!
:::

This guide will help you deploy a smart contract on Moonchain (Geneva Testnet) using Foundry.

## Prerequisites
- [Foundry](https://book.getfoundry.sh/getting-started/installation) is installed.
- You have the private key handy to an account that has `Test $MXC Tokens` on Moonchain Geneva (to pay the transaction fee for deploying the contract).
    - [Retrieve the private key with MetaMask](https://support.metamask.io/managing-my-wallet/secret-recovery-phrase-and-private-keys/how-to-export-an-accounts-private-key/).
    - [Generate wallet keys with OpenSSL](https://gist.github.com/miguelmota/3793b160992b4ea0b616497b8e5aee2f).
    - [Generate wallet keys with ethereumjs-wallet](https://piyopiyo.medium.com/how-to-generate-ethereum-private-key-and-address-in-local-offline-environment-90294308593c).
- Have some Test $MXC Tokens on Moonchain Geneva:
    - [Request Test $MXC Tokens](/docs/Testnet-Tutorials/Moonchain-Faucet) from the faucet.

<iframe 
    width="800" height="450" src="https://www.youtube.com/embed/OPyRcqAup8o" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
</iframe>

## Steps
### Create a Project with Foundry
To scaffold a new Foundry project, run:
```sh
forge init hello_foundry $$ cd hello_foundry
```

### Deploy the Contract
Replace `YOUR_PRIVATE_KEY` below with your private key that has some Test $MXC Tokens on Moonchain Geneva testnet.

Deploy the contract located at `src/Counter.sol`:
```sh
forge create --rpc-url https://geneva-rpc.moonchain.com --private-key YOUR_PRIVATE_KEY src/Counter.sol:Counter
```

:::info[INFO]
If you encounter an error --> `ERROR: (Code: -32000, message: contract creation code storage out of gas, data: None)`, consider deploying using [Remix IDE](https://remix.ethereum.org/).
:::

### View Your Contract
Paste the address from the output into the [Moonchain Geneva Block Explorer](https://geneva-explorer.moonchain.com/) and verify that the contract was deployed.