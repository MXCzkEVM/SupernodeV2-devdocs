---
title: Blockchain Indexer
sidebar_position: 7
---
:::caution
An indexer typically refers to a third-party service that offers API pricing models.
:::

This guide will help you get your subgraph work.

## Goldsky

[Goldsky](https://www.goldsky.com/) provides real-time and historical access to data stored on blockchains and lets you transform, enhance, and integrate that data with real-time streams to meet your custom needs.

The easiest way to get testing would be to use their instant subgraphs feature, [docs here](https://docs.goldsky.com/references/instant-subgraphs-configuration)

In the config file the chain is " **mxc-wannsee** "

Users can build any subgraph , then instead of using graph deploy, you could use the following command.
```
goldsky subgraph deploy 

```

![goldsky](/img/goldsky.jpeg)

# Difference between Goldsky and The Graph

 The same subgraph API that your apps already use
- A load-balanced network of third-party and on-prem RPC nodes to improve performance and reliability
- Tagging and versioning for hot-swapping subgraphs, allowing for seamless updates
- Alerts and auto-recovery in case of subgraph data consistency issues due to corruption from re-orgs or other issues
- A world-class team who monitors your subgraphs 24/7

