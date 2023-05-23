(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{548:function(t,a,s){"use strict";s.r(a);var o=s(1),e=Object(o.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"安装-gaia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-gaia"}},[t._v("#")]),t._v(" 安装 Gaia")]),t._v(" "),s("p",[t._v("本教程将详细说明如何在你的系统上安装"),s("code",[t._v("gaiad")]),t._v("和"),s("code",[t._v("gaiad")]),t._v("。安装后，你可以作为"),s("RouterLink",{attrs:{to:"/zh/gaia-tutorials/join-mainnet.html"}},[t._v("全节点")]),t._v("或是"),s("RouterLink",{attrs:{to:"/zh/gaia-tutorials/validators/validator-setup.html"}},[t._v("验证人节点")]),t._v("加入到主网。")],1),t._v(" "),s("h3",{attrs:{id:"安装-go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-go"}},[t._v("#")]),t._v(" 安装 Go")]),t._v(" "),s("p",[t._v("按照"),s("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("安装"),s("code",[t._v("go")]),t._v("。记得设置环境变量 "),s("code",[t._v("$PATH")]),t._v(":")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvZ28vYmluCmVjaG8gJnF1b3Q7ZXhwb3J0IFBBVEg9JFBBVEg6JChnbyBlbnYgR09QQVRIKS9iaW4mcXVvdDsgJmd0OyZndDsgfi8uYmFzaF9wcm9maWxlCnNvdXJjZSB+Ly5iYXNoX3Byb2ZpbGUK"}}),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("Cosmos SDK 需要安装"),s("strong",[t._v("Go 1.12+")])])]),t._v(" "),s("h3",{attrs:{id:"安装二进制执行程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装二进制执行程序"}},[t._v("#")]),t._v(" 安装二进制执行程序")]),t._v(" "),s("p",[t._v("接下来，安装最新版本的 Gaia。需要确认您 `git checkout 了正确的"),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("发布版本"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",[t._v("对于主网，请确保你的版本大于或等于"),s("code",[t._v("v0.33.0")])])]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIC1iICZsdDtsYXRlc3QtcmVsZWFzZS10YWcmZ3Q7IGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYQpjZCBnYWlhICZhbXA7JmFtcDsgbWFrZSBpbnN0YWxsCg=="}}),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("注意")]),t._v(": 如果在这一步中出现问题，请检查你是否安装的是 Go 的最新稳定版本。")])]),t._v(" "),s("p",[t._v("等"),s("code",[t._v("gaiad")]),t._v("和"),s("code",[t._v("gaiad")]),t._v("可执行程序安装完之后，请检查:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdmVyc2lvbiAtLWxvbmcKZ2FpYWQgdmVyc2lvbiAtLWxvbmcK"}}),t._v(" "),s("p",[s("code",[t._v("gaiad")]),t._v("的返回应该类似于：")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y29zbW9zLXNkazogMC4zMy4wCmdpdCBjb21taXQ6IDdiNDEwNGFjZWQ1MmFhNWI1OWE5NmMyOGI1ZWJlZWE3ODc3ZmM0ZjAKZ28uc3VtIGhhc2g6IGQxNTYxNTNiZDVlMTI4ZmVjMzg2OGVjYTlhMTM5N2E2M2E4NjRlZGI1Y2ZhMGFjNDg2ZGIxYjU3NGI4ZWVjZmUKYnVpbGQgdGFnczogbmV0Z28gbGVkZ2VyCmdvIHZlcnNpb24gZ28xLjEyIGxpbnV4L2FtZDY0Cg=="}}),t._v(" "),s("h5",{attrs:{id:"build-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-tags"}},[t._v("#")]),t._v(" Build Tags")]),t._v(" "),s("p",[t._v("build tags 指定了可执行程序具有的特殊特性。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Build Tag")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("netgo")]),t._v(" "),s("td",[t._v("Name resolution will use pure Go code")])]),t._v(" "),s("tr",[s("td",[t._v("ledger")]),t._v(" "),s("td",[t._v("支持 Ledger 设备(硬件钱包)")])])])]),t._v(" "),s("h3",{attrs:{id:"接下来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接下来"}},[t._v("#")]),t._v(" 接下来")]),t._v(" "),s("p",[t._v("然后你可以选择 加入"),s("RouterLink",{attrs:{to:"/zh/gaia-tutorials/join-mainnet.html"}},[t._v("主网")]),t._v("、"),s("RouterLink",{attrs:{to:"/zh/gaia-tutorials/join-testnet.html"}},[t._v("公共测试网")]),t._v(" 或是 "),s("RouterLink",{attrs:{to:"/zh/gaia-tutorials/deploy-testnet.html"}},[t._v("创建私有测试网")]),t._v("。")],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);