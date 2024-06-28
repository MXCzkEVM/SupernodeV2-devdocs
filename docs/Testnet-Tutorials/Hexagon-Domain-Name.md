---
sidebar_position: 6
---
import InputOutput from '@site/src/components/InputOutput';
import Moonchain_Geneva_Explorer from '/img/Moonchain_Geneva_Explorer.jpg';
import Moonchain_Mapper from '/img/Moonchain_Mapper.jpg';
import Moonchain_Mapper_Minted_Hexagon from '/img/Moonchain_Mapper_Minted_Hexagon.jpg';
import Moonchain_Geneva_Explorer_Transaction_Details from '/img/Moonchain_Geneva_Explorer_Transaction_Details.jpg';
import MNS_Hexagon_Bind from '/img/MNS_Hexagon_Bind.jpg';
import Moonchain_Mapper_Hexagon_MNS from '/img/Moonchain_Mapper_Hexagon_MNS.jpg';

# Hexagon Domain Name

This guide will walk you through the steps to name a Hexagon using your Moonchain Name Service (MNS).

:::tip[Prerequisites]
You should already have a MNS. If not, obtain one using [this guide](./Moonchain-Name-Service).
:::

## Steps

### 1. Navigate to the Geneva ZK Explorer
    - Open the [Geneva ZK Explorer](https://geneva-explorer.moonchain.com/).
    - On the left-hand side, click on the second icon labeled "Mapper".

<img src={Moonchain_Geneva_Explorer} alt="Moonchain Geneva Explorer Dashboard" class="full-width-image" />

### 2. Get Hexagon Address
    - On the Mapper page, click on any area without a Hexagon (green Hexagon shapes).
    - Copy the hexadecimal number shown on the right side of the screen.

<img src={Moonchain_Mapper} alt="Moonchain Mapper Overview" class="full-width-image" />

### 3. Mint Your Hexagon on MNS
    - Switch to the Moonchain MNS and select your account.
    - Under 'Profile', click on the "Mint MEP1002 Hexagon" button.
    - Enter the hexadecimal number of the map area. Confirm and approve the transaction in your wallet.
    - Keep the popup open until the transaction completes.

<img src={Moonchain_Mapper_Minted_Hexagon} alt="Moonchain Mapper Minted Hexagon" class="full-width-image" />

### 4. Retrieve Hexadecimal Number (if needed)
    - If you need the hexadecimal number again:
        - Use the address of your minted hexagon to search for it in the [Geneva ZK Explorer](https://geneva-explorer.moonchain.com/).
        - The searched hexadecimal number is the minted `Token ID` converted from decimal to hexadecimal.
        - Paste the Number in the field below to get your hexadecimal number again.

<InputOutput />

### 5. Set the Name of Your Hexagon
    - After minting, click on "Set to MEP1002 Hexagon".
    - Enter the hexadecimal number again in the pop-up.
    - Confirm and approve the transaction in your wallet. Keep the popup open until completed.
<img src={Moonchain_Geneva_Explorer_Transaction_Details} alt="Moonchain Geneva Explorer Transaction Details" class="full-width-image" />
<img src={MNS_Hexagon_Bind} alt="MNS Hexagon Bind" class="full-width-image" />

### 6. Confirm the Hexagon Was Set to Your Domain Name
    - Navigate back to the [Geneva ZK Explorer Mapper](https://geneva-explorer.moonchain.com/mapper).
    - In the search box, type your Hexagon Domain Name (e.g., legalize.mxc).
    - Press enter to locate your Hexagon with the assigned Domain Name.

<img src={Moonchain_Mapper_Hexagon_MNS} alt="Moonchain Mapper Hexagon MNS" class="full-width-image" />
