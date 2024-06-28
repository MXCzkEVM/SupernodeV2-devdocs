---
sidebar_position: 11
---

# Moonchain Stablecoin

MXC will be the largest Layer-3 IoT solution on Arbitrum ecosystem, bringing tremendous real-world items to NFT world and data to the blockchain. Undoubtedly each real-world item and each piece of data has its own value, and this kind of value is not from pure financial speculations, the value comes from real economy that serves our food, sports, transportation every day. 

MXC is going to leverage the real-world economy to build the first stable coin backed by items like Gin, Bike sensors, Nike shoes etc. Along with the tokens created on zkEVM like Ride token, Park token and MXC, BTC, the MXC stable coin has a basket ranging from NFT to tokens to back the stable coin from the real-world economy.


XSD, in conjunction with MXC and ISO projects, aims to empower individuals and companies to generate and circulate XSD within their unique economic systems, supporting their specific business requirements. The objective is to transform the existing financial landscape, where the majority of stable coins and fiat currencies rely on the backing of US treasury bonds. With a staggering 30 trillion USD in US treasury bonds and only 4 trillion in gold and other reserves held by the US Treasury and Federal Reserve, this initiative seeks to establish a more decentralized and diverse foundation for global financial systems.



As IoT [Swap](https://swap.mxc.com/) shows, the IoT tokens like Ride token would be the major applications that use MXC network and ISO projects to build their own data economy. These Ride and Park token can be swapped in MXC Swap conveniently, through XSD trading pair. XSD will be the first IoT stable coin that are backed by real-world assets and data values, meanwhile serving for the digital and real-world economy.

MXProtocol design and its ecosystem both are aimed for validating the XSD stable coin，which is pegged to US dollars at start in 1:2 manner. Along with the NFC, LoraWAN and Satellite technologies, users are able to verify and validate the value of XSD are backed by collateral like Gin 1689 NFTs, and MXC/DG/Ride tokens.

IoT NFTs need to reach a minimal IoT NFT transactions, in the initial roll-out is three transactions in order to become a collateral. This is to raise the attacking cost to enter the XSD mint basket.


NFTs and tokens are used as collateral to back the XSD, the XSD/USD conversion rate is to make sure the XSD can trade with USD from 1 XSD = 2 USD for the future market fluctuation. Normally the NFTs are issued by companies and manufacturers to let communities to burn XSD and get a collateral NFT, in the whole reserve of the MXC there are 20 percent of cryptocurrencies as collateral, the rest of 80% should be IoT NFTs that are backed by real-world assets.

The ratio of the 20/80 percent should be adjusted by MXC Reserve, namely MXC DAO in referendum : https://snapshot.org/#/mxcpop.eth

The starting point 20/80 is to reduce the fluctuation of Sensor Token part and let the basket to fill with 80% real-world collectables that is not volatile at all. A referendum in MXC DAO can trigger the change of the ratio. 

In the following example, it shows how XSD is backed:

| Collateral   | Value USD | Quantity | Total USD | Percentage |
|--------------|-----------|----------|-----------|------------|
| Diamond NFT  | 2700      | 10       | 27000     | 72%        |
| Gin 1689 NFT | 100       | 30       | 3000      | 8%         |
| MXC token    | 1         | 2000     | 2000      | 5.3%       |
| Ride token   | 2         | 100      | 200       | 0.6%       |
| BTC          | 5000      | 1        | 5000      | 13.3%      |
| ISO token    | 100       | 3        | 300       | 0.8%       |
|              |           |          | 37500     | 100%       |

This collateral can create **18750 XSD** with XSD/USD convertion rate 2. When people want to redeem let's say 100 XSD ride token, they will also have to reduce the amount of NFT value according to the 20/80 ratio, otherwise the burning of XSD won't be successful.

:::tip XSD/USD rate
Every time the XSD is mint will need to follow the most updated conversion rate between XSD/USD decided by the market.
:::

In this case, the users will try to redeem one Gin 1689 NFT to get 100USD worth of NFT, and also to get 25USD of any token, like 25USD MXC token. So the user needs to burn 250 XSD, in return he gets 1 Gin 1689 NFT and 25USD MXC. This case is assuming the interest rate is 0% from XSD mint to the borrower.

| Collateral redeemed | Value USD | Quantity | Total Burnt XSD | Percentage |
|---------------------|-----------|----------|-----------|------------|
| Gin 1689 NFT        | 100       | 1        | 50       | 80%        |
| MXC token           | 1         | 25       | 12.5     | 20%        |
|                     |           |          | 62.5       | 100%       |




## Insurance
The goal of XSD and MXC is to enable every person/company to create XSD and circulate in their own economy to support their business logic, eventually it is to change the current situation that all the stable coins and Fiat currencies are backed by US treasury bonds, while US treasury bonds are like 30 trillion USD and US treasury and Fed Reserve only got 4 trillion gold or other reserves.

We need to peg this world better with the assets created by people and used by people. Also we need to deal with systematic risks if the de-peg happens. Central banks proposes to print more money to solve the problem. MXC DAO proposes that we should add a 10% insurance on the top of the every XSD mint to deal with the systematic risks.

This 10% insurance can be paid every year to make sure even if the depeg happened like the collateral is gone or the overall overall collateral price is reduced due to a certain black swan event.

The insurance should be an option at the end of the minting process.

## XSD exchange rate with USD

When the XSD economy is getting bigger and bigger, the MXC DAO should see the 1:2 exchange rate will fluctuate due to the demand of XSD is higher than USD and people lose trust in USD. 

This is due to the volatility of the Fed Reserve to create more balance sheet and run-off the balance sheet without any anchor, XSD holder should aim for a certain development that the unit price of the collateral like watch, shoes, wines are defined by the unit of a XSD and no longer will be a USD.

Also the majority of DEX trading pair would be XSD trading pair will define the new stable coin economy.

:::tip XSD/USD rate
Every time the XSD is mint will need to follow the most updated conversion rate between XSD/USD decided by the market.
:::

## Lending use cases
It is expected that people will borrow XSD and lend XSD to generate stable APY, there are a lot of similar lending protocols like AAVE will move to MXC zkEVM to enable XSD economy active.

## Use case of XSD

- Buy NFTs with XSD
- Buy sensors with XSD
- Pay EV charging stations with XSD
- Buy everything with XSD
- Support Sensor offering with XSD

## XSD mint Implementation

This chapter introduces XSD minting: a peer-to-peer perpetual lending protocol that supports Sensor token and  IoT NFTs. XSD has no oracle dependencies and no expiries, allowing borrowing positions to remain open indefinitely until liquidated, with market-determined interest rates.

XSD mint matches users who want to borrow against their real-world collateral with whatever lender is willing to offer the most competitive rate, using a sophisticated off-chain offer protocol.

By default, XSD mint loans have fixed rates **(0% interest rate)** and never expire. Borrowers can repay at any time, while XSD mint won't exit. Howevery, MXC DAO can trigger a referedum to exit any positions by triggering a Dutch auction to find a new lender at a new rate. If that auction fails, the borrower is liquidated and the XSD mint takes possession of the collateral.

XSD mint has been implemented by MXC Core Contributors. In their implementation, some protocol parameters, such as protocol fees, are controlled by MXC DAO governance.

## No Oracles

Some of other protocols require an oracle, either to determine when a position should be liquidated or to determine an interest rate. But individual NFT prices are very difficult to measure objectively. Even floor prices tend to be difficult to measure on-chain. Solutions often either involve a trusted party, or could be manipulated with trading strategies.

XSD mint avoids any oracle dependencies in the core protocol. Interest rates and loan-to-value ratios are determined by whatever terms lenders are willing to offer. Liquidations are triggered by the failure of a Dutch auction.

## No Expiries

Some protocols only support expiring debt positions. This is inconvenient for borrowers, who need to remember to close or roll their positions before expiry (or risk harsh penalties such as confiscation of their NFT). The process of manually rolling positions also costs gas, which cuts into the yield from lending.

XSD mint automatically rolls a borrowing position for as long as some lender is willing to lend that amount against the collateral. On-chain transactions are only needed when interest rates change or one of the parties wants to exit the position.

## Liquidatable

Some protocols do not support liquidations before expiry. This is convenient for borrowers, and makes sense for many use cases. But because this effectively gives borrowers a put option, XSD mint need to demand short expirations, high interest rates and/or low loan-to-value ratios to compensate for the risk that a position may become insolvent.

In XSD mint, an NFT or a token may be liquidated whenever a DAO referendum triggers a refinancing auction and nobody is willing to take over the debt at any interest rate.

## Peer-To-Peer

Some protocols pool lenders' funds together and attempt to manage risk for them. This often means leaning heavily on on-chain governance or centralized administrators to set parameters. It also makes it difficult to permissionlessly support long-tail collateral.

XSD mint uses a peer-to-peer model where each loan is matched individually. Instead of optimizing for ease-of-use on the lending side, XSD mint assumes the existence of more sophisticated mechanism capable of participating in complex on- and off-chain protocols, evaluating risks, and using their own capital.

## Mechanism

In this section, we construct the protocol step by step, starting with a simple peer-to-peer fixed-rate lending protocol and gradually adding adaptations to allow gas-efficient rolling and market discovery of floating rates.

## Old School Fixed-Term Borrowing Problem

First, let us imagine how our protocol might work if it had expiring rather than perpetual loans.

We start with the XSD mint. The XSD mint signs an off-chain offer to mint some principal amount of XSD with a particular interest rate and expiration time, against any NFT of a specified collection with a basket of tokens. They make it publicly available (say, by posting it to an off-chain repository of offers).

A borrower has an NFT and sensor tokens they want to borrow against. They browse the available off-chain offers and choose a compatible one that matches the terms they're interested in. They then create an on-chain transaction that fulfills the XSD mint's offer, put their NFT in a vault with a lien on it, and transfer the principal from the XSD mint to themselves.

Before the expiration time, the borrower can pay the repayment amount (calculated as the loan amount plus interest) to the XSD mint, which closes their position and lets them withdraw their collateral. After the expiration time, if the loan has not been repaid, the XSD mint can take the collateral.

Note that the borrower may choose not to repay the loan if the value of the NFT has fallen below the repayment amount.

## Refinancing Auction

In the above mechanism, if the borrower forgets to repay the loan before expiration, they lose their NFT, even if the NFT is worth much more than the repayment amount. This seems harsh.

In many cases, someone else might have been willing to pay the XSD mint the full repayment amount in order to take over the loan until a later expiration time, though possibly with a higher rate of interest.

So, instead of simply giving the collateral NFT and token to the XSD mint, the protocol can run a competitive process to extend the loan, using a Dutch auction in interest rate space.

At the expiration time, if the borrower has not repaid the debt, a refinancing auction begins at 0%, with a steadily rising rate. Once the auction hits an interest rate at which XSD mint is interested in lending, the XSD mint can accept it by submitting their offer on-chain. The XSD mint pays the full repayment amount to itselves, calculated as of the moment the auction completes, and takes over the loan until the new expiration time (which could be calculated as the current expiration time plus some protocol-specified loan period), using the interest rate at which the auction resolved.


## Liquidation

It is possible that this Dutch auction may not be able to find a willing party to take, especially if the value of the collateral has dropped close to or below the value of the debt.

Once the auction hits some defined max rate (like 1000%) without letting XSD mint to re-stepping in, the protocol infers that the position is insolvent or otherwise non-viable, and liquidates the borrower. The existing lender can then send a transaction to take possession of the collateral. 

Also the insurance in this case should repay the difference amounts to the borrower if the liquidation is faield.

Except for MXC DAO referendum can trigger a liquidation event, borrower usually won't repay if the interest rate is 0% or even in some cases can be below 0%.


## Optimistic Auctions

In the majority of the cases, the XSD mint might be happy to continue the same loan at the same terms, and the borrower may too. We might even consider that the default scenario. In that case, it would be wasteful to run the auction.

Instead, we could design our protocol to optimistically renew the loan. At each expiration time, borrowers and lenders, by default, extend the expiration time by some predetermined loan period, with the same terms. The above-described auction would only occur if the lender seeks to terminate the loan.


## Continuous Loans

One issue with the above protocol is that during a loan period, if the price of the collateral falls dangerously close to the price of the repayment amount, there is no way to liquidate it until the expiration time.

This is less of an issue if the loan period is very short, since if the XSD mint is concerned about the safety of the collateral, they can trigger a refinancing auction at the next expiry.

We could imagine shortening the loan period until it is infinitesimal. If, at any moment, the XSD mint becomes concerned about the safety of the collateral, they could trigger a refinancing auction.

This lets us drop the concept of expiration times and loan periods. By default, loans continue indefinitely until some user interacts with the contract. Interest is accumulated continuously, and the repayment amount is calculated on the fly whenever needed.

A borrower can repay at any time. If a borrower wants to change the amount they have borrowed or get a better interest rate, they can atomically take out a new loan against the collateral and use the new principal to repay the old loan.

If a referendum in MXC DAO wants to get out of a certain XSD mint loan, they can trigger a refinancing auction, as discussed above. All timelines and deadlines during refinancing events can be defined relative to the time the refinancing was initiated.

Alternatively, if the interest rate is adjusted by the XSD mint, the current  lend can skip the auction by submitting the other offer to the vault to get out of their loan.


## Governance Considerations


The protocol does not depend on governance for valuing collateral or setting acceptable loan-to-value ratios, thus reducing the need for extensive on-chain governance or centralized administrators. However, there may still be situations where adjustments to certain parameters could enhance the protocol's functionality. These parameters include:

Fees: Borrower and lender fees collected by the protocol.

Maximum interest rate: The highest interest rate a loan auction must reach before liquidation occurs.

Auction formula: The equation governing the offered interest rate for a loan during an auction, as the auction progresses.

XSD mint basket: The selection of the Sensor Tokens and IoT NFTs that can use to mint XSD.

Minimal IoT NFT transactions: The minimal trading transactions that an IoT NFT can be used as a collateral.

In MXC's implementation of XSD, after a 180-day waiting period, these parameters can be managed by MXC governance to ensure optimal performance and adapt to changing market conditions in a decentralized way.
