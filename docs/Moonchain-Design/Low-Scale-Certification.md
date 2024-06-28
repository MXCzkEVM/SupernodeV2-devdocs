---
sidebar_position: 10
---
import LPWAN from '/img/LPWAN.jpg';
import NEO from '/img/NEO.jpg';
import M2Pro from '/img/M2Pro.jpg';
import PID_Overview from '/img/PID_Overview.jpg';
import AS128Key_Layout from '/img/AS128Key_Layout.jpg';
import Hexagon_Consensus_Group from '/img/Hexagon_Consensus_Group.jpg';
import LSC_1 from '/img/LSC_1.jpg';
import LSC_2 from '/img/LSC_2.jpg';
import LSC_3 from '/img/LSC_3.jpg';
import LSC_4 from '/img/LSC_4.jpg';
import LSC_5 from '/img/LSC_5.jpg';
import LSC_6 from '/img/LSC_6.jpg';
import LSC_7 from '/img/LSC_7.jpg';
import LSC_8 from '/img/LSC_8.jpg';
import LSC_9 from '/img/LSC_9.jpg';
import LSC_10 from '/img/LSC_10.jpg';
import TOCInline from '@theme/TOCInline';


# Low-Scale-Certification

## Table of Contents
<TOCInline toc={toc} />

## Chapter 1 Definitions
### 1.1 LPWAN
Low-Power Wide-Area Network is a type of wireless telecommunication network designed to facilitate long-range communication between low-power devices at low bit rates. 

This technology is particularly suited for Internet of Things (IoT) applications and sensor networks, where devices need to transmit small amounts of data over long distances while consuming minimal power. 

LPWAN offers cost-effective and energy-efficient connectivity solutions for various industries, including agriculture, smart cities, logistics, and environmental monitoring.

<img src={LPWAN} alt="Low Scale Certification Graphic" class="full-width-image" />

### 1.2 MXC Blockchain 
is a decentralized, open-source blockchain platform specifically designed to support the Internet of Things (IoT) ecosystem and machine-to-machine (M2M) communication. 

By leveraging the benefits of distributed ledger technology, MXC aims to create a more efficient, secure, and transparent environment for IoT devices and applications. The platform enables device interoperability, facilitates data sharing, and ensures secure data transactions among connected devices. Additionally, MXC Blockchain incentivizes users through its native cryptocurrency, the MXC token, which can be utilized for various purposes within the network, such as device registration, data transactions, and participation in network governance.

### 1.3 Low Scale Certification

Low Scale Certification (LSC) is a process designed to verify the physical existence and location of objects, such as IoT devices and sensors, within a specific area or network. 

LSC is employed to address the limitations of conventional proof of location methods by providing a more secure and reliable means of confirming an object's location and physical existence. 

The benefits of LSC include enhanced security, reduced risk of spoofing or tampering, and increased trust in the authenticity of the verified objects. 

By leveraging LSC, networks can establish a more robust foundation for location-based services and applications, ensuring that the data being processed is genuine and accurate.

### 1.4 Consensus Group

A Consensus Group is a set of network participants responsible for reaching an agreement on the state or decisions of a distributed system, such as a blockchain. 

These participants work together to validate transactions, maintain the integrity of the network, and ensure that the system operates securely and efficiently. This is achieved through the use of consensus algorithms that promote security, network integrity, and fault tolerance.

The specific rules and protocols governing the formation and operation of a Consensus Group can vary depending on the underlying blockchain or distributed ledger technology being used.

Consensus Groups play a crucial role in maintaining the overall health and stability of a distributed system. They are often decentralized and open, which fosters transparent, fair, and democratic decision-making processes. This structure also contributes to the network's resilience by preventing single points of failure and reducing the risk of centralized control or manipulation. 

In summary, Consensus Groups are essential components of blockchain and distributed ledger technologies, as they help to uphold the core principles of security, decentralization, and trust.

### 1.5 Quorum

A quorum is the minimum number of nodes or participants within a Consensus Group that must agree on a decision or transaction for it to be considered valid. 

The quorum ensures that a sufficient level of agreement and participation is achieved, promoting network stability, security, and consistency. The specific quorum requirements may vary depending on the consensus algorithm or network protocol in use. 

By requiring a quorum, distributed networks can prevent malicious actors from taking control of the system or manipulating the ledger, as they would need to compromise a significant portion of the Consensus Group to succeed.

Quorum mechanisms contribute to the overall trust and reliability of a distributed system by ensuring that decisions and transactions are made with broad consensus among the participating nodes.

A quorum in a consensus group refers to the minimum number of participants or nodes required to reach an agreement on the state of the blockchain. Establishing a quorum ensures that decisions are made collectively and that a single entity or a small group of nodes cannot manipulate or control the network. Quorums play a crucial role in maintaining the integrity, security, and decentralization of the MXC blockchain.

### 1.6 2.4 GHz Miners

2.4 GHz LPWAN (Low Power Wide Area Network) Miners are devices that participate in the operation of a wireless network designed for long-range communication and low power consumption. 

These miners operate in the 2.4 GHz frequency band, which is a globally available and unlicensed spectrum commonly used for various wireless communication technologies, such as Wi-Fi and Bluetooth.

<img src={NEO} alt="NEO GHz Miner" class="full-width-image" />

2.4 GHz LPWAN Miners contribute to the MXC network by verifying and validating transactions, maintaining the blockchain ledger, and facilitating secure communication between devices. 

They are optimized for energy efficiency and long-range connectivity, making them suitable for IoT applications and remote monitoring scenarios.

The 2.4 GHz LPWAN miners contribute to the MXC ecosystem by validating transactions, participating in consensus groups, and maintaining the seamless connection between the physical world and the metaverse.

### 1.7 sub GHz Miners

Sub GHz LPWAN Miners are devices that participate in the operation of a Low Power Wide Area Network designed for long-range communication and low power consumption, similar to 2.4 GHz LPWAN Miners. However, these miners operate in the sub-GHz frequency bands, such as 868 MHz in Europe or 915 MHz in North America. 

Sub GHz LPWAN Miners are particularly well-suited for applications requiring more extensive coverage or better penetration through obstacles, as the lower frequencies generally provide improved range and signal propagation characteristics compared to the 2.4 GHz band.

<img src={M2Pro} alt="sub GHz Miners" class="full-width-image" />

Like their 2.4 GHz counterparts, Sub GHz LPWAN Miners contribute to the MXC network by verifying transactions, maintaining the blockchain ledger, and enabling secure communication between devices. They are also optimized for energy efficiency and extended connectivity, making them an ideal choice for IoT applications and remote monitoring situations.

Similar to the 2.4 GHz LPWAN miners, Sub GHz LPWAN miners also participate in validating transactions, consensus groups, and maintaining the connection between the physical world and the metaverse.

### 1.8 MXC Hexagons

MXC Hexagons are a conceptual model used within the MXC ecosystem to bridge the physical world and the metaverse by representing the geographical distribution and coverage of LPWAN Miners, such as the 2.4 GHz and Sub GHz devices discussed earlier. This hexagonal grid layout serves as an efficient way to organize and visualize the network coverage provided by these miners, ensuring optimal connectivity and data transmission for IoT devices and applications on Earth while simultaneously mirroring the Earth's grid in the metaverse.

By connecting the Earth and the metaverse through MXC Hexagons, the MXC ecosystem can seamlessly integrate the benefits of both worlds, enabling a more comprehensive and immersive experience for users and network participants. This interconnected model allows for the development and deployment of innovative IoT applications and services that leverage the strengths of both the physical and virtual domains, unlocking new possibilities for communication, data exchange, and resource management.

MXC Hexagons can be used to address various network planning and deployment challenges, such as:

#### 1.8.1 Coverage Optimization: 
By arranging LPWAN Miners in a hexagonal pattern, network planners can ensure optimal coverage and signal strength for IoT devices within the network. The hexagonal grid provides a more uniform and consistent coverage area compared to other shapes, like squares or circles, minimizing coverage gaps and signal degradation. Each hexagon is around 2 kilometer in diameter

#### 1.8.2 Network Scalability: 
The hexagonal model allows for easy expansion and scalability of the network as new LPWAN Miners are deployed. As the network grows, additional hexagons can be added to the grid, seamlessly integrating with the existing coverage areas and maintaining optimal connectivity.

#### 1.8.3 Resource Allocation: 
MXC Hexagons can be used to allocate resources and responsibilities among LPWAN Miners within the network. By dividing the coverage area into hexagonal zones, network operators can assign specific tasks or roles to the miners within each hexagon, such as data processing, transaction validation, or network synchronization, optimizing the overall performance and efficiency of the system.

#### 1.8.4 Network Visualization: 
The hexagonal grid provides an intuitive and easy-to-understand representation of the network's coverage and connectivity. Network operators, IoT device manufacturers, and end-users can quickly grasp the network layout, signal strength, and Miner distribution by examining the MXC Hexagons, aiding in network planning, troubleshooting, and device deployment decisions.

#### 1.8.5 Hexagons and Consensus Groups: 
MXC Hexagons also play a vital role in the formation and operation of Consensus Groups within the MXC ecosystem. By organizing the LPWAN Miners into hexagonal zones, the network can more effectively distribute the responsibility for validating transactions and maintaining the blockchain ledger among the miners.

Each hexagon can be associated with a specific Consensus Group, consisting of miners located within that hexagonal zone. This localized approach allows for faster and more efficient consensus decision-making, as miners within a given hexagon are likely to have stronger connectivity and lower latency compared to miners spread across the entire network.

Furthermore, the hexagonal organization promotes network resilience and security. In the event of a miner failure or malicious activity, the impact on the network is localized to the affected hexagon, preventing the issue from spreading throughout the entire system. This structure also makes it more challenging for an attacker to compromise the network, as they would need to target multiple hexagons and Consensus Groups simultaneously to have a significant impact.

By integrating MXC Hexagons with the Consensus Group structure, the MXC ecosystem can ensure robust network performance, security, and reliability while maintaining the decentralization and democratic decision-making principles that underpin the blockchain technology.

## Chapter 2: Design Aims

### 2.1 Logic of design

#### 2.1.1 Problem definition 
The lack of a robust connection or bridge between the physical world (Earth) and the metaverse has led to challenges in ensuring the authenticity of devices and assets within the network. 

The absence of a reliable link between the two worlds makes it easier for malicious actors to introduce fake devices and compromise the network's security, undermining trust and the integrity of the virtual economy.

#### 2.1.2 Current designs 
Various existing solutions have attempted to bridge the gap between the physical and virtual worlds to some extent. 

One example is augmented reality (AR) technologies, which overlay digital information onto the real world, allowing users to interact with virtual objects and environments in a more immersive manner. 

Another example is the use of blockchain technology to create digital tokens representing real-world assets, enabling the secure and transparent exchange of ownership and value across the virtual realm.

However, these solutions often fall short in providing a seamless and secure connection between the two worlds, leaving room for potential vulnerabilities and misrepresentations of digital assets.

#### 2.1.3 Goal of design 
The primary aim of the design is to establish a seamless connection between the metaverse and the physical world, ensuring the authenticity and security of devices and assets within the network. 

By implementing robust proof of physical existence mechanisms, the design will protect the virtual economy from fraudulent activities and enable the traceability of items from the metaverse back to their real-world counterparts.

#### 2.1.4 Prerequisite 
To build this secure and interconnected system, it is essential that network objects be certified by Low-Scale Certification (LSC). 

LSC provides a foundation of trust and verification for devices and assets, ensuring that only genuine and authenticated objects are allowed to participate in the network and interact within the metaverse. 

This prerequisite is crucial in realizing the vision of bridging the gap between the physical world and the metaverse, promoting a secure and trustworthy environment for users and network participants.

#### 2.1.5 Advantage live tracking and mirroring 

One of the key advantages of this system is its ability to track items in both the physical and metaverse worlds in real-time. The location of an item in the physical world is accurately mirrored in the virtual metaverse, ensuring a consistent representation of objects and assets across both domains. 
This live tracking capability allows users and network participants to seamlessly interact with and verify the presence of objects in both worlds, enhancing the overall user experience and trust in the system.

By maintaining an accurate and live reflection of objects in the metaverse that corresponds to their real-world counterparts, the system promotes greater transparency, accountability, and security. 
Users can confidently engage with the virtual environment, knowing that what they see and interact with in the metaverse is a genuine representation of the physical world. This live tracking and mirroring functionality not only strengthens the connection between the two worlds but also serves as a foundation for building innovative applications and services that take advantage of this seamless and reliable integration.

### 2.2 Synchronization of miners in the network

#### 2.2.1 Importance Of Synchronization
Achieving precise synchronization between the miners in the network is essential to maintain a seamless connection between the physical world and the metaverse. Synchronization ensures the integrity of data and transactions, while enabling real-time tracking and mirroring of objects across both domains. Proper synchronization prevents data corruption and ensures that the devices on the network operate coherently, providing users with a reliable and secure experience.

#### 2.2.2 Our Synchronization Goal 
The system is designed to maintain real-time synchronization among the miners, devices, and the blockchain to support the live tracking of objects in both the physical world and the metaverse. To achieve this, the system utilizes nanosecond timekeeping, which enables an extremely accurate level of synchronization among all network components.

By synchronizing the miners with the blockchain and connected devices, the system ensures that all changes and operations in the network are accurately timestamped and recorded. This high degree of synchronization allows for a consistent representation of objects and assets across the physical and virtual worlds, providing users with a trustworthy environment in which to engage and interact.

The precise synchronization between miners, devices, and the blockchain forms the foundation for a robust and secure system, enabling the development of innovative applications and services that take advantage of the seamless connection between the physical world and the metaverse.

#### 2.2.3 Synchronization Methods And Challenges
Achieving precise synchronization between miners and the network is a challenging task. Various methods, such as the Network Time Protocol (NTP) or the Precision Time Protocol (PTP), can be employed to synchronize miners with the network. However, these methods may not be sufficient to achieve the desired nanosecond-level synchronization. Implementing more advanced techniques, such as atomic clocks or GPS-based time synchronization, can help improve synchronization accuracy. Overcoming challenges, such as network latency, clock drift, and signal propagation delays, is essential for maintaining a well-synchronized network.

#### 2.2.4 Impact Of Synchronization On Network Performance And Security
Precise synchronization plays a vital role in ensuring the overall performance and security of the network. Improved synchronization enables miners to process transactions more efficiently, reduces the likelihood of data corruption, and enhances the overall network resilience against attacks. By maintaining accurate time synchronization, the network can better detect and mitigate various security threats, such as replay attacks or time manipulation attempts. Furthermore, precise synchronization also improves the system's ability to track items and mirror their location data in both the physical world and the metaverse.

### 2.3 Trustworthy Location

#### 2.3.1 Importance of accurate location
Ensuring the accurate representation of a device's location in both the real world and the metaverse is crucial for maintaining the integrity of the network and the seamless connection between the two domains. Accurate location information helps protect the network from potential attacks, in which malicious actors may attempt to disrupt the system by providing false location data for devices. Moreover, as the hexagon grid plays a vital role in the consensus group, accurate location data is essential for the proper functioning of the MXC blockchain and LPWAN devices.

#### 2.3.2 Goal of accurate location
The system aims to establish a secure and reliable connection between the metaverse, the devices using the network (such as LPWAN miners), and the MXC blockchain. By providing accurate and untampered location data through the use of hexagons as a representation of the metaverse grid, the system ensures that location information can be checked, traced, and trusted by the public. This approach makes it more challenging for attackers to compromise the network, as the location data is transparent and verifiable, promoting a more secure environment for users and network participants. Through this method, the system reinforces the trustworthiness of the connection between the physical world and the metaverse, fostering a reliable foundation for the development of innovative applications and services.

#### 2.3.3 Trustworthy Location Verification Techniques
Several techniques can be employed to ensure accurate and trustworthy location data in the network. These may include time difference of arrival (TDoA), received signal strength indicator (RSSI), and signal-to-noise ratio (SNR) measurements. Combining multiple location verification techniques can further improve location accuracy and reliability, making it more challenging for attackers to manipulate or falsify the data.

#### 2.3.4 The Role Of The Consensus Group In Maintaining Trustworthy Location Data
The consensus group plays an essential part in maintaining trustworthy location data in the MXC blockchain. By participating in the validation and confirmation of location information, the consensus group members help ensure that the data remains accurate and consistent throughout the network. This collaborative approach, in conjunction with the use of blockchain technology, provides a transparent, decentralized, and secure environment for location data management. Consequently, it upholds the seamless connection between the physical world and the metaverse and the overall integrity of the network.

### 2.4 Trustworthy Physical Existence

#### 2.4.1 Why Establishing Trustworthiness in Proving Object Existence
Establishing trustworthiness in proving the physical existence of objects is crucial for several reasons. By verifying the existence of a device in our system, we ensure that it is an authentic device, with a genuine physical presence, and not just a digital entity. Trustworthy proof of existence plays a vital role in:

- Security and fraud prevention: By confirming the physical existence of devices, we can protect the network from fake devices and malicious actors seeking to exploit the system.
- Asset management and tracking: Trustworthy proof of existence enables accurate tracking and management of devices and assets within the network, ensuring efficient utilization of resources.
- Regulatory compliance: Verifying the physical existence of devices can help meet regulatory requirements and industry standards.
- Quality control and performance monitoring: Trustworthy proof of existence allows for better monitoring of device performance and maintaining a high level of quality control in the network.

#### 2.4.2 Challenges in Ensuring Trustworthy Proof of Existence Methods
The challenge lies in devices made by third-party manufacturers wanting to connect to the network. Ensuring that these devices meet the necessary requirements and standards for proving their physical existence can be a complex and resource-intensive process.

#### 2.4.3 Goal of Physical Existence Verification
The primary goal of physical existence verification is to provide proof of physicality that is verifiable, traceable, and trusted by the public. By establishing trustworthy proof of existence, we can protect the network from fake devices that might disturb the network's functionality and security. This helps maintain the seamless connection between the physical world and the metaverse and ensures the integrity and reliability of the MXC network.

## Chapter 3 LSC of physical existence for miners and sensors

### 3.1 Decentralized LSC Solution

#### 3.1.1 LSC Device Provisioning
##### Definition
- **Low-Scale Certification (LSC):**
is a technology used to prove the existence of a Low Power Wide Area Network (LPWAN) device in the real world. It is crucial in applications where LPWAN end-devices perform tasks that require interactions with the blockchain. Establishing a strategy for detecting and minimizing the risk of malicious actions by actors pretending to be real, physical devices is essential. In this context, we introduce the concept of LSC - the multilevel network verification of existence.

- **Device provisioning:** 
is the process of establishing a shared secret key between the device and the cloud server to exchange information securely and encrypted. The protocol is based on the Key exchange protocol that uses asymmetric cryptography and is based on the PID (unique device identifier). The device manufacturer purchases the PID from the SuperNode for a fee.


##### Method
Our method for LSC device provisioning involves three steps:

- **Generate the PID:** 
The PID is created by the Device owner on the Super Node using the MEP. The PID costs a fee. The SuperNode then creates an NFT on the blockchain with the PID attached to a secret, only visible to the owner of the NFT. The NFT is then sent to the Creator's wallet.

<img src={PID_Overview} alt="Provisioning ID Overview" class="full-width-image" />

- **Program the PID into the device:** 
The owner needs to flash the PID into the sensor device it wants to produce. They also need to print a label with the PID so the device can be added to the Data Dash app by scanning it.

- **Device provisioning:** 
PID is just an authenticator of the device; to join, the device needs to perform self-provisioning after it is manufactured.

Two types of keys should be created and exchanged during this process 
- *AS128 keys for LPWAN, and*
- *ECC keys for authentication and signing.* 

The AS128 key will be stored on the Device Provisioning server. 
The Public ECC key will be stored on the blockchain, and 
the Private ECC key will be only known to the device itself.

The provisioning message sent by the Sensor Device is forwarded to the SuperNode by the Miner, who signs the message with its private key.

<img src={AS128Key_Layout} alt="Storage of the AS128Key on the Device Provisioning Server" class="full-width-image" />

The Miner has its Public Key stored on the blockchain because it was provisioned earlier, so we know it is real. 
The SuperNode generates all the keys and sends the AS128 and ECC keys to the Device. 
At the same time, it signs the received signed message from the Miner with its own private key and creates a new NFT with this message chain and Device Public key and attaches it to the original NFT with PID on the blockchain. 
The NFT can contain more information like the EUI of the device, the certificate of the manufacturer, and so on.

#### 3.1.2 Prerequisites for the Solutions:
To participate in the decentralized LSC solution, there are two prerequisites that an owner can choose from:

##### Staking Stable Coins 
Users must stake a certain amount of stable coins as collateral to ensure their commitment to the network and its security.
##### Link To A Social Profile
Users must link their accounts to a social media profile to increase transparency and trustworthiness within the network. This connection helps deter malicious actors from attempting to manipulate or deceive the network.

### 3.2 Benefits Of Decentralized LSC Solution
The decentralized Low-Scale Certification (LSC) solution aims to address the challenges of ensuring the authenticity of devices and assets within the metaverse and the physical world. By leveraging blockchain technology, the solution provides a secure, transparent, and tamper-resistant way to verify the existence of devices and assets. This is crucial for maintaining the integrity and security of the network, as well as fostering trust among users and participants.

The decentralized nature of the LSC solution offers several key advantages:

- **Security:**
By distributing the certification process across multiple nodes in the network, the decentralized LSC solution mitigates the risk of a single point of failure. This makes it more difficult for malicious actors to compromise the system, ensuring the security of devices and assets.

- **Transparency:**
The LSC solution utilizes blockchain technology, which inherently provides a transparent and auditable record of device certification. This allows users and participants to verify the authenticity of devices and assets easily, promoting trust within the network.

- **Scalability:**
As the number of devices and assets within the metaverse and the physical world continues to grow, a centralized certification system may struggle to keep up with the demand. The decentralized LSC solution is inherently more scalable, as it can distribute the certification workload across multiple nodes in the network.

- **Flexibility:**
The decentralized LSC solution allows for more flexible device provisioning and certification processes. By enabling devices to self-provision and participate in the network, the solution can accommodate a wider range of devices and manufacturers.

By implementing the decentralized LSC solution, the system can establish a seamless and secure connection between the metaverse and the physical world, ensuring the authenticity and security of devices and assets within the network. This, in turn, promotes a more reliable and trustworthy environment for users and network participants, laying the foundation for innovative applications and services that leverage the interconnectedness of the two worlds.

## Chapter 4: LSC of Location and Consensus Group

### 4.1 Consensus Group in MXC Blockchain

In the MXC Blockchain, a consensus group is formed when miners collaborate to confirm transactions and record them on the blockchain. This section will explore how this process unfolds, from the initial registration of a miner to the formation and expansion of a consensus group.

#### 4.1.1 Flow of Consensus Group in MXC Blockchain

The process begins when a miner registers within a specific geographical area, known as a hexagon, through the blockchain. The miner's existence is verified using its Provisioning Identifier (PID), and its location is confirmed by linking it to a specific hexagon. This location is then cross-verified by other miners through a process called peer listening.

Once the miner's registration and location have been confirmed, it then links up with at least two other miners to form a consensus group. The configuration of this group depends on the type of miner. If it's a sub-GHz miner, each miner will be located in a separate hexagon. If it's a 2.4 GHz miner, then all three miners will reside in the same hexagon.

<img src={Hexagon_Consensus_Group} alt="Flow of the Hexagon Consensus Group on the Moonchain Blockchain" class="full-width-image" />

The consensus group then grows and expands, with each group verifying the locations of other consensus groups. The more substantial groups absorb the smaller ones, with the ultimate goal being the formation of a single, dominant consensus group. This growth and merging process is crucial for maintaining the network's stability and security, making it resistant to attacks and failures.

#### 4.1.2 What Influences the Consensus Algorithm

A miner's score is a critical factor in determining its eligibility to join a consensus group. This score is a combination of two metrics: 
- Miner Peer Listening and 
- Miner fuel. 
The total score of the miners within a group, rather than the average score, determines the strength of the consensus group.

#### 4.1.3 Prerequisites for Joining a Consensus Group

Before a device can join a consensus group, 
- it must have been provisioned and 
- must have a miner score of at least 510 points. 
    - The score is divided between Miner Peer Listening and Miner Fuel.

Miner Peer Listening:
Each hexagon can hold up to 
- 10 sub-GHz or 
- 50 2.4-GHz miners 

for the miner score system. When a hexagon is fully populated, it suggests that each miner is trustworthy.
This metric carries a weight of 49% in the miner's total score.

Miner Fuel:
This metric reflects the number of tokens held within the miner's. A full 100% capacity equates to a 51% score, which makes the miner eligible to join a consensus group. 
The tokens in the tank are not only a sign of the miner's authenticity but also an indication of the owner's commitment to the network. This metric carries a weight of 51% in the miner's total score.

### 4.2 Consensus Group Ground Rules:

#### 4.2.1 Definitions
A Consensus Group serves as the collective consciousness of the MXC blockchain, following established protocols and formed under certain conditions. It represents a group of Miners, bound by the law of Quorum, which governs decision-making and merging dynamics within the group.

#### 4.2.2 Commitment to Implementation:
The Consensus Group plays a pivotal role in the MXC blockchain, with responsibilities that include overseeing LPWAN devices and enforcing network rules and procedures. 

A core component of these rules is the establishment of certain prerequisites that every miner must meet to qualify for membership in a consensus group. 

These prerequisites serve as safeguards, protecting the network and its miners from potential threats posed by non-compliant entities. Furthermore, these requirements ensure the validity of device locations, thus preserving the overall integrity of the network. 

Any breach of these rules triggers specific protective measures taken by the Consensus Group to mitigate possible risks to the network. 

The ensuing sections provide a comprehensive discussion of these requirements and measures.
- Validation of Miner location.
- Miner bound to Location.
- Exit fee to unbind from location


#### 4.2.3 Validation
Before the Consensus Group formation, LPWAN devices validate their location via the DataDash app. Simultaneously, miner metric scores are verified to ensure data accuracy and miner authenticity. 

It is essential that each Miner be bound to a specific coordinate within a hexagon with a minimal margin of error.

#### 4.2.4 Binding Scenario
By default, the Miner Owner binds the Miner's location to a coordinate within a hexagon free of charge, later enabling it to join a Consensus Group and reap its benefits. The miner can only mine if it is bound to a hexagon.
This binding is essential for mining and remains effective for a block time duration after joining a hexagon. 
If the Miner fails to join a Consensus Group within this timeframe, an exit fee must be paid for re-binding.
The Exit fee will be explained in the next section.

#### 4.2.5 Exit Fee
- **Definition of Exit Fee:** 
    - The exit fee is a payment required when a miner, previously bound to a specific location in a Consensus Group, needs to be unbound. 
    - This fee becomes necessary when a miner's location changes, as it would then no longer be part of its original Consensus Group. Hence, the fee covers the cost of unbinding the miner from its current location, allowing for its relocation and subsequent entry into a new consensus group.

- **Functions of the Exit Fee:**
    - A miner, by default, is bound to a particular location before its entry into a consensus group. If the miner's location changes while bound, the miner will be disallowed from mining or utilizing the network.
    - If a miner wishes to change its location or Consensus Group, the miner's owner must pay a fixed fee to unbind it from its current location. This requirement stands even if the miner is expelled from the Consensus Group; the fee is still necessary to unbind it from the location.

- **Benefits of the Exit Fee:**
    - It discourages frequent changes to a miner's location, as users will likely be hesitant to repeatedly pay the fee.
    - In case of a miner being under attack, the miner will cease operations, thereby limiting potential harm.
    - The exit fee mechanism ensures that a miner is strictly bound to a specific location, i.e., a particular hexagon. The payment of the exit fee provides the necessary step to unbind a miner from its location, thereby maintaining network integrity.

**Scenarios:**
1. **Relocation by Miner Owner:**
In instances where the Miner Owner is relocating to a new place, the Miner Owner is required to pay the exit fee to unbind the miner from its original location. This allows the miner to be re-registered at the new location.

<img src={LSC_1} alt="Relocation by Miner Owner" class="full-width-image" />

2. **Miner Malfeasance:** 
If a miner is detected to be launching attacks on the network, it will be expelled from its Consensus Group. However, should the miner wish to join a new Consensus Group, the Miner Owner will be required to pay the exit fee to unbind the miner from its current location, thus allowing for its re-entry into a different Consensus Group.

<img src={LSC_2} alt="Miner Malfeasance" class="full-width-image" />

3. **Temporary Relocation:** 
In a situation where the Miner Owner temporarily relocates along with the miner to a different location, the Miner Owner has two options. The Miner Owner can choose to pay the exit fee to register the miner at the temporary location or refrain from paying the fee until they return to the original location where the miner is bound.

<img src={LSC_3} alt="Temporary Relocation" class="full-width-image" />

4. **Miner Attack:**
If a miner is being subjected to attacks at the hardware level or the peer listening level, it may appear as if the miner is transmitting an incorrect location, seeming to be located in a different city/town/district/hexagon. Since the Miner Owner has the ability to decide whether or not to pay the exit fee to relocate the bound location of the miner, the miner can be safeguarded from this type of manipulation. During the attack, the miner will not participate in the Consensus Group until it returns to its bound location. This protects the network from potential harm, whether the miner is under attack or if the Miner Owner is launching an attack on the network.

#### 4.2.6 Formation
The formation of a Consensus Group is a process that starts with smaller, individual units coming together to form a larger, more cohesive group.

- **Initial Grouping:** The formation of a Consensus Group begins with the establishment of smaller clusters. These clusters will merge with each other to create a larger, unified Consensus Group.
- **Group Composition:** A Consensus Group comprises at least three miners. For Sub GHz miners, each miner must be in a different hexagon. Conversely, for 2.4 GHz miners, all three should be located within the same hexagon.
- **Score Threshold:** Each miner participating in the Consensus Group must have a miner score of 510 or above.

<img src={LSC_4} alt="Score Threshold from participating Miners" class="full-width-image" />

- **Location Validation:** The miners within a Consensus Group verify each other's locations using Time Difference of Arrival (TDoA) and Received Signal Strength Indicator (RSSI) measurements. These measurements allow each miner to determine the distance to other miners, which is equivalent to the radius of a circle centered on the miner. The miner is expected to be located along the circumference of this circle. The Miner Owner's uploaded coordinates, which were provided when the miner was bound to its location, should intersect with this calculated circumference, thus confirming the validity of the miner's location.

<img src={LSC_5} alt="Location Validation of the Miners" class="full-width-image" />

#### 4.2.7 Flexibility
Resilience and adaptability are fundamental to the Consensus Group's operation. The architecture of the Consensus Group is designed to be highly flexible, capable of deconstructing and reforming with different miners as circumstances dictate. This ability to adapt is crucial in responding to shifts in the network or changes in miner behavior.

If an issue arises with a miner, the Consensus Group's flexibility allows for swift and smooth resolution. The problematic miner can be replaced seamlessly without destabilizing the group's function or integrity. Alternatively, if necessary, the entire Consensus Group can disband and be replaced by a new one. This interchangeability helps maintain the group's optimal performance and assures continuous coverage of its designated area.

This flexibility, in essence, enables the Consensus Group to evolve dynamically with the network, maintaining optimal efficiency and responsiveness in the face of changing circumstances. Whether it's miner turnover or unexpected disruptions, the Consensus Group's adaptability ensures it can accommodate these shifts and continue to function effectively.

#### 4.2.8 Data Aggregation
Data aggregation is an integral process in the Consensus Group's operations. It involves the collection and synthesis of data from all Low-Power Wide-Area Network (LPWAN) devices under the group's governance. Through comprehensive data aggregation, the Consensus Group can ensure that its decision-making processes are informed by the most complete and accurate data set possible.

Key data points gathered in this process include:

- **Miner Scores:** This is a performance measure for each miner based on predefined criteria. These scores play a crucial role in the evaluation of miners, determining their ability to meet network requirements and their potential eligibility for participation in the Consensus Group.
- **Total Consensus Group Score:** A cumulative score that encapsulates the collective performance of all miners within the Consensus Group. This gives a clear picture of the overall operational health of the group.
- **Miner Locations and Verification Status:** These are physical coordinates of miners within the network. Each location must be validated by fellow miners to ensure authenticity and accuracy. Information regarding which miners have successfully verified their locations is also collected.
- **Miner Requirement Compliance:** Data regarding whether a miner continues to meet the minimum requirements or has experienced any failures is essential for maintaining network integrity.
- **Bound Locations:** Every miner is bound to a specific location within the Consensus Group. Data on these bound locations is vital for overseeing network operation and maintaining its structure.
- **Consensus Group Affiliations:** Knowing which Consensus Group each miner belongs to is key to understanding the overall layout and organization of the network.

| bound Location | miners    | miner score | Consensus group | Consensus group total | location true | meet min condition |
| -------------- | --------- | ----------- | --------------- | --------------------- | ------------- | ------------- |
| 1        | alpha.mxc | 657 | green | 1726 | True | True |
| 2        | bravo.mxc | 510 | green | 1726 | True | True |
| 3        | charlie.mxc | 559 | green | 1726 | True | True |
| 4        | delta.mxc | 608 | yellow | 1677 | True | True |
| 5        | echo.mxc | 559 | yellow | 1677 | True | True |
| 6        | foxtrot.mxc | 510 | yellow | 1677 | True | True |
| 7        | golf.mxc | 657 | red | 1873 | True | True |
| 8        | hotel.mxc | 559 | red | 1873 | True | True |
| 9        | india.mxc | 657 | red | 1873 | True | True |
| 10       | juliett.mxc | 510 | blue | 2118 | True | True |
| 11       | kilo.mxc | 755 | blue | 2118 | True | True |
| 12       | lima.mxc | 853 | blue | 2118 | True | True |


By diligently aggregating these extensive sets of data, the Consensus Group can maintain a holistic and detailed understanding of the network's state. This promotes effective oversight, facilitates the early detection of potential issues, and ensures the network continues to function efficiently and securely.

### 4.3 Consensus Group and Cluster Decision Making

#### 4.3.1 Quorum

A quorum within a Consensus Group is established by accounting for both the quantity and the cumulative score of the LPWAN devices it encompasses. This approach ensures that decision-making is proportionally weighted according to the size and the collective scores of the miners within each group. The principle in play here is that larger, higher-scoring Consensus Groups hold a more substantial influence, inherently absorbing smaller, lower-scoring groups.

Moreover, the quorum requirement insists on the participation of all miners within a Consensus Group. This holistic participation is vital for decisions pertaining to the blockchain model, ensuring fair representation and collective agreement.

Yet, we acknowledge the potential challenge presented by expansive Consensus Groups, where miners situated at extreme edges of the group may encounter communication difficulties. In such instances, we recommend the formation of a sub-Consensus Group, composed solely of miners who can effectively communicate with the small group.

The primary cluster then validates this newly formed sub-Consensus Group before proceeding with the absorption of another Consensus Group. This process, known as 'consuming', demands a democratic consensus: at least 51% of the miners involved in a verification process with another group must agree to a merger.

This safeguard is in place to prevent any unilateral decisions, fostering a transparent, equitable process when consolidating groups.

#### 4.3.2 Decision-Making Process

The decision-making process in a Consensus Group hinges upon the accurate determination of device locations. This process engages two miner Consensus Groups, each adhering to the stipulated minimums: 
- three miners located in distinct hexagons for sub-GHz miners, and 
- three miners situated within the same hexagon for 2.4 GHz miners.

These groups exchange essential data and follow established rules for mutual verification. They also engage an auxiliary Consensus Group when confronted with discrepancies or potential threats that warrant further examination.

Each Consensus Group undertakes a thorough verification of miner locations in the counterparty group, producing a boolean table that outlines the correctness of each location, underpinned by a specified degree of certainty.

A mutual agreement, represented by 51% or more of each cluster, that all locations have been appropriately verified, triggers the consolidation process. The group with the higher cumulative score consumes the lower scoring group, leading to a merger that unifies both clusters into a single, larger entity. This procedure aligns with our fundamental principle of bigger, higher-scoring groups absorbing smaller, lower-scoring ones, reinforcing network stability and unity.

| Location | Miners      | Miner Score | Delta.mxc | Echo.mxc | Foxtrot.mxc |
|----------|-------------|-------------|-----------|----------|-------------|
| 1        | alpha.mxc   | 657         | correct   | correct  | correct     |
| 2        | bravo.mxc   | 510         | correct   | correct  | correct     |
| 3        | charlie.mxc | 559         | correct   | correct  | correct     |
| **Average Score** | **1726/3000 = 57.53%** | **Correct Probability** | **57.53% at 4** | **57.53% at 5** | **57.53% at 6** |
|          |             |             | alpha.mxc | bravo.mxc| charlie.mxc |
| 4        | delta.mxc   | 608         | correct   | correct  | correct     |
| 5        | echo.mxc    | 559         | correct   | correct  | correct     |
| 6        | foxtrot.mxc | 510         | correct   | correct  | correct     |
| **Average Score** | **1677/3000 = 55.9%**  | **Correct Probability** | **55.9% at 1**  | **55.9% at 2**  | **55.9% at 3**  |


#### 4.3.3 Scenarios

Consensus Groups are formed with the primary intention of evaluating each other to determine which one will absorb the other. This can lead to several potential scenarios:

- Scenario 1: Consensus Group 1 possesses a higher score than Consensus Group 2. In this situation, Consensus Group 1, being superior, takes over Consensus Group 2, incorporating it into its structure.

<img src={LSC_6} alt="Scenario 1" class="full-width-image" />


- Scenario 2: Both Consensus Groups have identical scores but a varying number of miners. Here, the group with fewer miners gains precedence and takes over the larger Consensus Group. This decision hinges on the principle of promoting efficiency and reducing unnecessary redundancy.

<img src={LSC_7} alt="Scenario 2" class="full-width-image" />


- Scenario 3: Both Consensus Groups have equal scores and an equal number of miners. The resolution of this deadlock is achieved through a random selection of the group to take precedence and absorb the other.

<img src={LSC_8} alt="Scenario 3" class="full-width-image" />

- Scenario 4: A Consensus Group faces challenges in validation due to certain miners. The problematic miners are disbanded from the group, and new, qualified miners replace them to restore functionality.

<img src={LSC_9} alt="Scenario 4" class="full-width-image" />

- Scenario 5: A large Consensus Group is assessing another group, but some miners are unable to communicate with their counterparts due to the sheer scale of the group. In this case, a sub-Consensus Group forms, composed of miners that can engage with the target group. This sub-group then leads the evaluation process.

<img src={LSC_10} alt="Scenario 5" class="full-width-image" />

These scenarios reflect the adaptability and robustness of the consensus decision-making process, allowing for flexibility in various circumstances while maintaining the integrity and functionality of the network.

### 4.4 Localization

Localization is a critical factor in our Consensus Group model, affecting the network's overall integrity and efficiency. Three important measures are employed to achieve this: 
- Time Difference of Arrival (TDoA), 
- Received Signal Strength Indicator (RSSI), and 
- Signal-to-Noise Ratio (SNR).

#### 4.4.1 TDoA 

Time Difference of Arrival TDoA is a method for determining the position of a wireless device by measuring the time difference of signal arrival from the device to several receivers (miners in our case). 
As the speed of the radio wave is known, these time differences can be translated into distances, thereby pinpointing the device's location. This method is particularly useful for verifying miner locations in the Consensus Group.

#### 4.4.2 RSSI 

Received Signal Strength Indicator RSSI is a measurement of the power present in a received radio signal. This measure can provide an estimate of the distance between the miner and the LPWAN device, as signal strength generally diminishes with increased distance. RSSI plays a critical role in validating the locations of devices within the network, ensuring that the miner's reported location aligns with the expected signal strength.

#### 4.4.3 SNR 

Signal-to-Noise Ratio SNR measures the ratio of the power of a signal (meaningful information) to the power of background noise (unwanted signal). Higher SNR values indicate cleaner, higher quality signals which are easier to distinguish from the noise. SNR can be used to estimate the quality of the signal received by miners, and therefore can indirectly infer their proximity to the LPWAN devices.

#### 4.4.4 Combining the methods:

Combining TDoA, RSSI, and SNR methods results in a more robust and reliable location estimation system. TDoA provides a primary location estimation, while RSSI and SNR offer supportive data to refine these estimations and validate them. This synergistic combination allows for more accurate determination of device locations, even in challenging network conditions.

The blend of these methods benefits the overall Consensus Group model by enhancing the certainty and accuracy of miner localizations. This, in turn, supports the key principles of the model, from the formation of Consensus Groups to the decision-making process and beyond. By ensuring correct device localizations, we reinforce the trustworthiness of the network, optimize network efficiency, and maintain the integrity of our LPWAN infrastructure.