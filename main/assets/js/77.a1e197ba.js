(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{698:function(o,e,t){"use strict";t.r(e);var a=t(1),n=Object(a.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"cosmos-hub-community-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-community-pool"}},[o._v("#")]),o._v(" Cosmos Hub Community Pool")]),o._v(" "),t("p",[o._v("Cosmos Hub launched with community-spend capabilities on December 11, 2019, effectively unlocking the potential for token-holders to vote to approve spending from the Community Pool.")]),o._v(" "),t("p",[o._v("🇪🇸 Esta página también está "),t("a",{attrs:{href:"https://github.com/raquetelio/CosmosCommunitySpend/blob/master/README%5BES_es%5D.md",target:"_blank",rel:"noopener noreferrer"}},[o._v("disponible en español"),t("OutboundLink")],1),o._v(".")]),o._v(" "),t("h2",{attrs:{id:"why-create-a-proposal-to-use-community-pool-funds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-create-a-proposal-to-use-community-pool-funds"}},[o._v("#")]),o._v(" Why create a proposal to use Community Pool funds?")]),o._v(" "),t("p",[o._v("There are other funding options, most notably the Interchain Foundation's grant program. Why create a community-spend proposal?")]),o._v(" "),t("p",[t("strong",[o._v("As a strategy: you can do both.")]),o._v(" You can submit your proposal to the Interchain Foundation, but also consider submitting your proposal publicly on-chain. If the Hub votes in favour, you can withdraw your Interchain Foundation application.")]),o._v(" "),t("p",[t("strong",[o._v("As a strategy: funding is fast.")]),o._v(" Besides the time it takes to push your proposal on-chain, the only other limiting factor is a fixed 14-day voting period. As soon as the proposal passes, your account will be credited the full amount of your proposal request.")]),o._v(" "),t("p",[t("strong",[o._v("To build rapport.")]),o._v(" Engaging publicly with the community is the opportunity to develop relationships with stakeholders and to educate them about the importance of your work. Unforeseen partnerships could arise, and overall the community may value your work more if they are involved as stakeholders.")]),o._v(" "),t("p",[t("strong",[o._v("To be more independent.")]),o._v(" The Interchain Foundation (ICF) may not always be able to fund work. Having a more consistently funded source and having a report with its stakeholders means you can use your rapport to have confidence in your ability to secure funding without having to be dependent upon the ICF alone.")]),o._v(" "),t("h2",{attrs:{id:"drafting-a-community-spend-proposal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drafting-a-community-spend-proposal"}},[o._v("#")]),o._v(" Drafting a Community-spend Proposal")]),o._v(" "),t("p",[o._v("Drafting and submitting a proposal is a process that takes time, attention, and involves risk. The objective of this documentation is to make this process easier by preparing participants for what to pay attention to, the information that should be considered in a proposal, and how to reduce the risk of losing deposits. Ideally, a proposal should only fail to pass because the voters 1) are aware and engaged and 2) are able to make an informed decision to vote down the proposal.")]),o._v(" "),t("p",[o._v("If you are considering drafting a proposal, you should review the general\nbackground on drafting and submitting a proposal:")]),o._v(" "),t("ol",[t("li",[t("RouterLink",{attrs:{to:"/governance/process.html"}},[o._v("How the voting process and governance mechanism works")])],1),o._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/best-practices.html"}},[o._v("How to draft your proposal and engage with the Cosmos community about it")])],1),o._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/formatting.html"}},[o._v("How to format proposals")])],1),o._v(" "),t("li",[t("RouterLink",{attrs:{to:"/governance/submitting.html"}},[o._v("How to submit your proposal")])],1)]),o._v(" "),t("p",[o._v("You should also review details specific to Community Pool Spend proposals below.")]),o._v(" "),t("h2",{attrs:{id:"learn-about-the-community-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learn-about-the-community-pool"}},[o._v("#")]),o._v(" Learn About the Community Pool")]),o._v(" "),t("h3",{attrs:{id:"how-is-the-community-pool-funded"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-is-the-community-pool-funded"}},[o._v("#")]),o._v(" How is the Community Pool funded?")]),o._v(" "),t("p",[o._v("2% of all staking rewards generated (via block rewards & transaction fees) are continually transferred to and accrue within the Community Pool. For example, from Dec 19, 2019 until Jan 20, 2020 (32 days), 28,726 ATOM were generated and added to the pool.")]),o._v(" "),t("h3",{attrs:{id:"how-can-funding-for-the-community-pool-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-funding-for-the-community-pool-change"}},[o._v("#")]),o._v(" How can funding for the Community Pool change?")]),o._v(" "),t("p",[o._v("Though the rate of funding is currently fixed at 2% of staking rewards, the effective rate is dependent upon the Cosmos Hub's staking rewards, which can change with inflation and block times.")]),o._v(" "),t("p",[o._v("The current 2% tax rate of funding may be modified with a governance proposal and enacted immediately after the proposal passes.")]),o._v(" "),t("p",[o._v("Currently, funds cannot be sent to the Community Pool, but we should expect this to change with the next upgrade. Read more about this new functionality "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/5249",target:"_blank",rel:"noopener noreferrer"}},[o._v("here"),t("OutboundLink")],1),o._v(". What makes this functionality important?")]),o._v(" "),t("ol",[t("li",[o._v("Funded projects that fail to deliver may return funding to Community Pool;")]),o._v(" "),t("li",[o._v("Entities may help fund the Community Pool by depositing funds directly to the account.")])]),o._v(" "),t("h3",{attrs:{id:"what-is-the-balance-of-the-community-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-balance-of-the-community-pool"}},[o._v("#")]),o._v(" What is the balance of the Community Pool?")]),o._v(" "),t("p",[o._v("You may directly query the Cosmos Hub 3 for the balance of the Community Pool:")]),o._v(" "),t("p",[t("code",[o._v("gaiad q distribution community-pool --chain-id cosmoshub-3 --node cosmos-node-1.figment.io:26657")])]),o._v(" "),t("p",[o._v("Alternatively, popular Cosmos explorers such as "),t("a",{attrs:{href:"https://cosmos.bigdipper.live",target:"_blank",rel:"noopener noreferrer"}},[o._v("Big Dipper"),t("OutboundLink")],1),o._v(" and "),t("a",{attrs:{href:"https://hubble.figment.io/cosmos/chains/cosmoshub-3",target:"_blank",rel:"noopener noreferrer"}},[o._v("Hubble"),t("OutboundLink")],1),o._v(" display the ongoing Community Pool balance.")]),o._v(" "),t("h3",{attrs:{id:"how-can-funds-from-the-community-pool-be-spent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-funds-from-the-community-pool-be-spent"}},[o._v("#")]),o._v(" How can funds from the Community Pool be spent?")]),o._v(" "),t("p",[o._v("Funds from the Cosmos Community Pool may be spent via successful governance proposal.")]),o._v(" "),t("h3",{attrs:{id:"how-should-funds-from-the-community-pool-be-spent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-should-funds-from-the-community-pool-be-spent"}},[o._v("#")]),o._v(" How should funds from the Community Pool be spent?")]),o._v(" "),t("p",[o._v("We don't know 🤷")]),o._v(" "),t("p",[o._v("The prevailing assumption is that funds should be spent in a way that brings value to the Cosmos Hub. However, there is debate about how to keep the fund sustainable. There is also some debate about who should receive funding. For example, part of the community believes that the funds should only be used for those who need funding most. Other topics of concern include:")]),o._v(" "),t("ul",[t("li",[o._v("retroactive grants")]),o._v(" "),t("li",[o._v("price negotiation")]),o._v(" "),t("li",[o._v("fund disbursal (eg. payments in stages; payments pegged to reduce volitiliy)")]),o._v(" "),t("li",[o._v("radical overhaul of how the community-spend mechanism functions")])]),o._v(" "),t("p",[o._v("We can expect this to take shape as proposals are discussed, accepted, and rejected by the Cosmos Hub community.")]),o._v(" "),t("h3",{attrs:{id:"how-are-funds-disbursed-after-a-community-spend-proposal-is-passed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-are-funds-disbursed-after-a-community-spend-proposal-is-passed"}},[o._v("#")]),o._v(" How are funds disbursed after a community-spend proposal is passed?")]),o._v(" "),t("p",[o._v("If a community-spend proposal passes successfully, the number of ATOM encoded in the proposal will be transferred from the community pool to the address encoded in the proposal, and this will happen immediately after the voting period ends.")])])}),[],!1,null,null,null);e.default=n.exports}}]);