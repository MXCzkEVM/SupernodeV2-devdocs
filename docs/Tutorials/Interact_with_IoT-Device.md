---
title: Controlling a Physical Device via Moonchain
sidebar_position: 11
---

This demonstration showcases the ability to control a physical device using Moonchain. It highlights how a blockchain transaction on Moonchain can remotely turn an LED on or off. Through this process, you will see the seamless integration of blockchain technology with real-world hardware, emphasizing the potential for secure, decentralized control in various applications.

## Moonchain Info

Contract proposals: [https://github.com/MXCzkEVM/MEPs](https://github.com/MXCzkEVM/MEPs)

Deployed Contract addresses:

- MEP801: 0x070B3e2229a27CDd34126E96B2Ce65c63BD1A5CE
- MEP802: 0x28479D68cD3ef5661BDB7505EFD1712D5D0951F6
- MEP803: 0xBFc77Ee5959699eC4171891b625D6EccdC9e00cD

The commands shown in this document use the wallet `0xa2d9E584F4cF0167d283dB6EB4922082269B6bB7` as an example. And you need MXC to pay the gas fee and other fees.

Private key:

    318dee0c207c20f4767e342a52e876b816379334a53277773c783b0e9348d368


## Change the X2E firmware

If your X2E board is running another firmware, please follow the procedures below to change the firmware for this demonstration.

Firmware Repository: [https://github.com/MXCzkEVM/Moonchain-Control-X2E](https://github.com/MXCzkEVM/Moonchain-Control-X2E)

1. Download the mobile APP tool (Nordic DFU) for firmware update.
   - [Google Play Store](https://play.google.com/store/apps/details?id=no.nordicsemi.android.dfu&hl=en&gl=US)
   - [Apple App Store](https://apps.apple.com/tt/app/nrf-device-firmware-update/id1624454660) (require iOS 16)

2. Copy the firmware binary file `demo_controls_dfu_ism2400.zip` to your mobile phone.
   - (Important: Place the file in the download folder, otherwise it may not be recognized correctly)

3. Start the DFU App and select the firmware binary file.
   ![DFU_1](./img/x2e/assets/DFU_1.png)

4. Tap the Device's "Select" button to start scanning for BLE devices.

5. Press and hold the "USER" button of the X2E board for 5s to start the DFU routine. The LED will become fast blinking when DFU started and it will shows up on the App.
   ![DFU_2](./img/x2e/assets/DFU_2.png)

6. Select the X2E board on the list as the target device.
   ![DFU_3](./img/x2e/assets/DFU_3.png)

7. Tap the "Start" button to start the firmware upgrade.
   ![DFU_4](./img/x2e/assets/DFU_4.png)

8. Wait until the upgrade process completes.

## Connection of X2E

The simplest way to demonstrate the effect is by controlling an LED. Below is an example of the connection.

![x2e_connections](./img/x2e/assets/x2e_connections.png)

## Purchase a Provision ID (PID)

Find a temporary email service provider to get the email address for receiving the PID. As the email address will be on the Moonchain, using a temporary email address can prevent your private email address from showing to the public on the chain.

![temp_email](./img/x2e/assets/temp_email.png)

Check the device profile (from MEP803) that we will be using. It needs to match the firmware of the X2E board. We will be using an existing ISM2400 profile, with the index set to 3.

