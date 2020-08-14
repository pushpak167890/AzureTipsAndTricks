(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{475:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"azure-contexts-in-powershell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-contexts-in-powershell","aria-hidden":"true"}},[t._v("#")]),t._v(" Azure Contexts in Powershell")]),t._v(" "),a("p",[t._v("If you are working with Azure, the probability of you having multiple accounts and subscriptions to work with are very high. If I look at myself, I have a personal account, a business account and my workaccount that I often use everyday. Deploying scripts through Powershell requires you to make sure you are in the right context. Especially with the rise of Azure Lighthouse, where you maybe have access to a lot of subscriptions through one account, a simple mistake is easily made.")]),t._v(" "),a("h2",{attrs:{id:"switching-between-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switching-between-accounts","aria-hidden":"true"}},[t._v("#")]),t._v(" Switching between accounts")]),t._v(" "),a("p",[t._v("The workflow I previously used for executing Powershell scripts was to Disconnect all accounts, logging in with the right one and setting the right subscription with Set-AzContext. It works, but takes a lot of time. To reduce the time I need for switching between contexts, I wrote a simple script which works as follows:")]),t._v(" "),a("ul",[a("li",[t._v("It will list all your connected Contexts through Get-AzContext -List")]),t._v(" "),a("li",[t._v("You choose an account (No input defaults to 0)")]),t._v(" "),a("li",[t._v("It will list all the Enabled Subscriptions accessible through the selected account")]),t._v(" "),a("li",[t._v("You choose a subscription (No input defaults to 0)")]),t._v(" "),a("li",[t._v("The context will be set")])]),t._v(" "),a("h2",{attrs:{id:"how-to-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-it","aria-hidden":"true"}},[t._v("#")]),t._v(" How to use it")]),t._v(" "),a("p",[t._v("To access the function everywhere, you can add it to you Powershell profile. By running $profile within powershell you can determine the location of your PowerShell Profile. Prefixing the variable with your favorite editor will open the profile directly. For example:")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("code "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$profile")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-code","aria-hidden":"true"}},[t._v("#")]),t._v(" The code")]),t._v(" "),a("p",[t._v("Add the following code to your profile:")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" azc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$allContexts")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Get"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("List "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sort-Object")]),t._v(" Account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextArray")]),t._v(" = @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextEmailArray")]),t._v(" = @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextCount")]),t._v(" = 0\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Foreach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$context")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$allContexts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextEmailArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Contains"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextArray")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$context")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextEmailArray")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextCount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"] - "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextCount")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextInput")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Select Context"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextInput")]),t._v(" = 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$setContext")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzContext  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Context "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$contextInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$allSubscriptions")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Get"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzSubscription "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where-Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("State "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enabled"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sort-Object")]),t._v(" Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionArray")]),t._v(" = @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionCount")]),t._v(" = 0\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscription")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$allSubscriptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionArray")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionCount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"] - "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" - "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionCount")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-gt")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionInput")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Read-Host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Select Subscription"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionInput")]),t._v(" = 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionInput")]),t._v(" = 0\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SubscriptionId "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscriptionInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br")])]),a("p",[t._v("This is a quick sketch, but it works very well! If you think the code could more elegant, or you have ideas for functionality, I highly encourage you to improve it!\nThe code can be found at: https://github.com/stefanpetter/InteractiveAzContext")]),t._v(" "),a("p",[t._v("Thank you for reading!")])])},[],!1,null,null,null);s.default=e.exports}}]);