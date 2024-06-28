---
sidebar_position: 3
---

import ReactDOM from "react-dom/client"
import { Highlight, themes } from "prism-react-renderer"
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import GrafanaDashboard from '/img/GrafanaDashboard.png';

# Running a Moonchain Supernode

## Operating a Moonchain Supernode with simple-mxc-node
This guide will walk you through the process of operating a Moonchain supernode using simple-mxc-node. 
By following these steps, you will be able to:
    - Run a Moonchain supernode easily from the command line on Windows, Mac, and Linux.
    - Operate the supernode either as a regular node or as a prover.
    - Monitor the node's status via a [Grafana](https://grafana.com/) dashboard.

## Prerequisites
Before you begin, ensure you have the following prerequisites:
    - Reserve some extra MXC as a fee for future proposed blocks.
    - [Docker](https://docs.docker.com/engine/install/) is installed and running on your system.
    - [Git](https://github.com/git-guides/install-git/) is installed on your system.
    - Consult the [Geth minimum hardware requirements](https://github.com/ethereum/go-ethereum#hardware-requirements), except for 1TB of free space (approximately 50GB should be sufficient).

## Steps
### Clone the simple-mxc-node

```sh
git clone https://github.com/MXCzkEVM/simple-mxc-node/geneva
cd simple-mxc-node
```

After cloning and changing into the simple-mxc-node directory, verify your current working directory to ensure you're in the correct path where the repository has been cloned:

```sh
pwd
```
This command will print the current directory path. Make sure it shows:

```sh
/your/full/path/to/simple-mxc-node
```

### Configure your Moonchain Supernode (required)
Copy the `.env.sample` file to `.env` using the following command:

```sh
cp .env.sample .env
```
### Edit the .env File
After copying, you need to edit the '.env' file to configure your Supernode settings. You can open it in your preferred text editor. Here's how you can do it on different operating systems:

<Tabs>
  <TabItem value="Mac" label="Mac" default>
      ```sh
      nano .env
      ```
  </TabItem>
  <TabItem value="Linux" label="Linux">
      ```sh
      vim .env
      ```
  </TabItem>
  <TabItem value="Windows" label="Windows">
      ```sh
      code .env
      ```
  </TabItem>
</Tabs>

### Set Environment Variables

Finally, set the following environment variables in your `.env` file:
- `L1_ENDPOINT_HTTP`
- `L1_ENDPOINT_WS`

You can get an Arbitrum L1 endpoint from various providers such as:
- [Infura](https://infura.io/)
- [Alchemy](https://www.alchemy.com/)
- [QuickNode](https://www.quicknode.com/endpoints) 

:::important[IMPORTANT]
Make sure you select the RPC as **Arbitrum Sepolia Testnet**, and not the Ethereum Mainnet.
:::

### Set Permissions and Create Folders
Create the necessary directories and set the permissions so that the Docker containers can access and write to them:

```sh
mkdir -p ./data/l2_execution_engine_data ./data/zkevm_chain_prover_rpcd_data ./data/prometheus_data ./data/grafana_data ./docker/prometheus ./docker/grafana/custom
sudo chmod -R 777 ./data ./docker
```

### Enable your Supernode as a Prover (optional)

For more detailed information, please see [Enable a prover](./Enable-a-Prover).

:::important[NOTE]
Synchronizing from the genesis block may take some time. You can monitor this progress through logs or by using the local Grafana Dashboard. Additionally, you can check the latest L2 chain status in the [MXC Geneva Block Explorer](https://geneva-explorer.moonchain.com/).
:::

**1. Ensure Docker is Running**: Make sure that the Docker is installed an actively running on your system.

**2. Run the following command to start the Supernode**:
```sh
docker compose up
```
**3. Run the Supernode in the Background (Detached Mode)**: If you prefer to run the supernode in the background, add the `-d` flag to the command:

```sh
docker compose up -d
```

### Stopping a Supernode
To shut down the supernode while retaining all volumes (so it won't need to synchronize from the genesis block again upon restart), use the following command:
```sh
docker compose down
```

### Removing a Supernode
To completely remove the supernode, including all volumes used by each container, execute the following commands:

**1. Stop and remove containers along with volumes**:
```sh
docker compose down -v
```
**2. Remove the environment configuration file**:
```sh
rm -f .env
```

### Updating a Supernode
To update the simple-mxc-supernode Docker images, use the following command:
```sh
docker compose pull
```

### Viewing the Supernode's Logs
To monitor and view logs from the Docker containers, use the following commands:

**1. View all logs**:
```sh
docker compose logs -f
```
**2. View the prover image's logs**:
```sh
docker compose logs -f mxc_client_prover_relayer
```
**3. View the L2 execution engine logs**:
```sh
docker compose logs -f l2_execution_engine
```

### Viewing Live Data Streams of Your Running Containers
To see the CPU and memory usage percentage, as well as the resource consumption of your machine, use the following command:

```sh
docker stats
```
For displaying statistics for all containers, add the prefix `-a` :
```sh
docker stats -a
```

### View the Supernode's Status Dashboard

To view the Supernode's Status Dashboard, which utilizes Grafana with a Prometheus datasource, follow these steps:

**1. Access Grafana Dashboard**:
Open your web browser and navigate to the following URL:
```
http://localhost:3000/d/L2ExecutionEngine/l2-execution-engine-overview?orgId=1&refresh=10s
```
**2. Dashboard Details**:
- This URL points directly to the Grafana dashboard designed for monitoring the L2 execution engine's real-time status.
- It uses Prometheus as the datasource, providing comprehensive insights into the performance and metrics of your supernode.

**3. Monitor in Real Time**:

The dashboard will update automatically every 10 seconds `(refresh=10s parameter in the URL)`.
You can customize the dashboard views and metrics as needed using Grafana's features.

<img src={GrafanaDashboard} alt="Moonchain Ecosystem Partners" class="full-width-image" />

## Troubleshooting
:::warning[Supernode Warning Logs]
You can safely ignore any `WARN` logs.
:::

### Supernode Error Logs
`Error: 'L1_STAKE_AMOUNT'`
- **Cause**: You need to stake 5,000 $MXC on the MXCL1 contract to run a Supernode as a proposer.
- **Solution**: Ensure you have staked the required 5,000 $MXC.

`Error: 'mkdir: can't create directory [...]: Permission denied'`
- **Cause**: Insufficient permissions to create the necessary directory.
- **Solution**: Verify and assign the required permissions to the node.

`Error: 'L1_ID'`
- **Cause**: The block you want to prove has already been verified.
- **Solution**: This can be ignored.

`Error: 'L1_ALREADY_PROVEN'`
- **Cause**: The block has been proven by someone else but is not yet verified.
- **Solution**: This can be ignored.

`Fatal: 'Failed to register the Ethereum service: database contains incompatible genesis'`
- **Cause**: Database incompatibility with genesis block.
- **Solution**: Remove the supernode with command below and try again.
    ```sh 
    docker compose down -v
    ```

`Error: 'Unhandled trie error: missing trie node'`
- **Cause**: A non-critical error indicating a missing trie node.
- **Solution**: This can be ignored as it will resolve itself over time.

`Error: 'Error starting ...: listen tcp4 0.0.0.0:{port} bind: address already in use'`
- **Cause**: The specified port is in use by another service.
- **Solution**: Either stop the conflicting service or change the port in the `.env` file.

`Error: 'error parsing HTTP 403 response body: invalid character '<' looking for a beginning of value`
- **Cause**: IP address is geo-blocked due to sanctions.
- **Solution**: Change hosting location or use a VPN to change your IP address.

`Error: 'ERROR: The compose file './docker-compost.yml' is invalid because: Unsupported config option for some_service 'pull_policy'`
- **Cause**: Outdated Docker installation.
- **Solution**: Update your Docker Compose installation following [this guide](https://docs.docker.com/compose/install/).

`Error: 'daemon docker is not running'`
- **Cause**: Docker daemon is not running.
- **Solution**: Start the Docker daemon before running the commands.

`Error: 'database contains incompatible genesis'`
- **Cause**: Incompatible genesis block in the database.
- **Solution**: Remove the supernode with command below and try again.
    ```sh 
    docker compose down -v
    ```