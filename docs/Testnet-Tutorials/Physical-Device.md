---
sidebar_position: 10
--- 

import DFU_1 from '/img/X2E/DFU_1.png';
import DFU_2 from '/img/X2E/DFU_2.png';
import DFU_3 from '/img/X2E/DFU_3.png';
import DFU_4 from '/img/X2E/DFU_4.png';
import at_ok from '/img/X2E/at_ok.png';
import pid_csv from '/img/X2E/pid_csv.png';
import pid_email from '/img/X2E/pid_email.png';
import temp_email from '/img/X2E/temp_email.png';
import x2e_connections from '/img/X2E/x2e_connections.png';
import x2e_provisioned from '/img/X2E/x2e_provisioned.png';
import x2e_reboot from '/img/X2E/x2e_reboot.png';

# Controlling a Physical Device via Moonchain

This demonstration illustrates how to control a physical device using Moonchain, specifically through remotely toggling an LED on or off. It emphasizes the seamless integration of blockchain technology with real-world hardware, showcasing the potential for secure, decentralized control in various applications.

### English
<iframe 
    width="800" height="450" src="https://www.youtube.com/embed/30CATOQeYKc" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
</iframe>

### German
<iframe 
    width="800" height="450" src="https://www.youtube.com/embed/1uU0s5Zzf3I" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
</iframe>

## Moonchain Info
- Contract Proposals: [MEPs Repository](https://github.com/MXCzkEVM/MEPs)
- Deployed Contrace Addresses:
    - MEP801: <code>0x070B3e2229a27CDd34126E96B2Ce65c63BD1A5CE</code>
    - MEP802: <code>0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6</code>
    - MEP803: <code>0xBFc77Ee5959699eC4171891b625D6EccdC9e00cD</code>

:::info[NOTE]
Commands in this document use the wallet address `0xa2d9E584F4cF0167d283dB6EB4922082269B6bB7` as an example. MXC tokens are required for gas fees and other transaction costs.
:::
- Private Key: <code>318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368</code>

```
318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
```

### Change the X2E Firmware
- Firmware Repository: [Moonchain-Control-X2E](https://github.com/MXCzkEVM/Moonchain-Control-X2E)
- Download the Mobile App Tool (Nordic DFU):
    - [Google Play Store](https://play.google.com/store/apps/details?id=no.nordicsemi.android.dfu&hl=en&gl=US)
    - [Apple App Store](https://apps.apple.com/tt/app/nrf-device-firmware-update/id1624454660)(requires iOS 16 or higher)
- Update Firmware:
    - Copy `demo_controls_dfu_ism2400.zip` to your mobile phone (Place it in the download folder for recognition).
    <img src={DFU_1} style={{width: 600}}/>
    - Open the DFU App, select the firmware binary file, and start scanning for BLE devices.
    <img src={DFU_2} style={{width: 600}}/>
    - Hold the X2E board's "USER" button for 5 seconds to initiate DFU mode.
    <img src={DFU_3} style={{width: 600}}/>
    - Select the X2E board on the app, tap "Start" to upgrade the firmware, and wait for completion.
    <img src={DFU_4} style={{width: 600}}/>

### Connection of X2E
To control an LED, follow these connection guidelines:
<img src={x2e_connections} style={{width: 600}}/>

### Purchase a Provision ID (PID)
- Obtain a temporary email address to receive the PID. This prevents exposing your personal email on Moonchain.
<img src={temp_email} style={{width: 600}}/>
- Check Device Profile
    - Ensure it matches the firmware of your X2E board. Use the ISM2400 profile with index 3.
    ```bash
    cast call 0xBFc77Ee5959699eC4171891b625D6EccdC9e00cD "deviceProfileList(uint256) (uint256,string,address,string,bool,uint256)" 3 --rpc-url https://geneva-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
    ```
    - Response will be similar to one below
    ```bash
    3
    X2E Class C - ISM2400
    0xD9892d06C864a41A38915dDd48DF11A0DBfdCf89
    https://api.github.com/repos/MatchX-GmbH/iso-device-profile/contents/matchx/x2e_class_c_ism2400.json
    true
    100000000000000000`
    ```

- Check PID Unit Price
```bash
cast call 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "pidUnitPrice() (uint256)" --rpc-url https://geneva-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
```
    - Response: `123450000000000000000 wei` (123.45 MXC).
- Purchase PID
    - Replace the email with your own and use the following command to purchase a PID via MEP802.
    ```bash
    cast send 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "producePid(string,uint256,uint256)" "temporary.email@example.com" 1 3 --rpc-url https://geneva-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368 --value 123450000000000000000
    ```
    - After a few minutes, you will receive an email with a PID CSV file.
    <img src={pid_email} style={{width: 600}}/>
- Extract PID and pidZkevmHash
    - Use the PID and pidZkevmHash from the CSV file to set up the X2E board.
    <img src={pid_csv} style={{width: 600}}/>

### Setup the X2E Board

- Connect the X2E board to your computer using a USB Type-C cable.
- Launch a serial terminal program (e.g., minicom on Linux or PuTTY on Windows) with settings `115200 8N1`.
    - Use the following command:
    ```bash
    minicom -b 115200 -8  -D /dev/ttyACM0 -o
    ```
- Send "AT" command to verify connection. You should receive "OK".
    - Run the `AT` command
    <img src={at_ok} style={{width: 600}}/>
- Change the PID of the X2E board:
    - Use the following command:
    ```bash
    AT+CQRCODE={"PID":"K2ILSDXUOO3O4EEIWZDDW6SL","B":"MatchX","M":"X2E","V":"1.3"}
    ```
- Clear all data and reboot
    - Run the command below:
    ```bash
    AT+IREBOOT=8
    ```
    <img src={x2e_reboot} style={{width: 600}}/>

Wait for a while, the X2E board will finish the provisioning process with the new PID. After that, it will start to join the network and send data. After it joined, the status LED will lite steady and the Control pin (IO14) will go higher. If you are using the suggested connection, the target LED will be lit.

If this doesn't happen after 6 minutes, please check the status of your NEO miner and make sure it is running.
<img src={x2e_provisioned} style={{width: 600}}/>

### Mint the Sensor NFT for the X2E Board
- Check Minting Price
    ```bash
    cast call 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "priceInfoList(uint256) (uint256,uint,bool)" 0 --rpc-url https://geneva-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
    ```
    - Response `9876500000000000000 wei` (9.8765 MXC).
- Mint the NFT
    - Replace `0xf6d4bd...` with the pidZkevmHash and use the following command:
    ```bash
    cast send 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "mintSensorNFT(uint256,uint256,string)" 0xf6d4bda9e25797a1423a41c485bfaa8e03930f0dbdf2d2b324d79fa71d8c9108 0 "https://global.matchx.io/iso/x2e/x2e_ref_sensor.jpeg" --rpc-url https://geneva-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368 --value 9876500000000000000
    ```
- Burn Sensor NFT to Repeat Process
```bash
cast send 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "burnSensorNFT(uint256)" 0xf6d4bda9e25797a1423a41c485bfaa8e03930f0dbdf2d2b324d79fa71d8c9108 --rpc-url https://geneva-rpc.moonchain.com --private-key 318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368
```
### Controlling via Moonchain
You can control the pin output in three modes: always low, always high, or cycling (blinking). Replace `0xf6d4bd...` with the pidZkevmHash from earlier commands.
- Set to Low (Turn off LED)
    ```bash
    cast send 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6 "enqueueDownlink(uint256,string,uint8,uint8)" 0xf6d4bda9e25797a1423a41c485bfaa8e03930f0dbdf2d2b324d79fa71d8c9108 "Qh
    ```