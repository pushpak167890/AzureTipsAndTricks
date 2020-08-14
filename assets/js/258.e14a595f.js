(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{535:function(t,e,a){"use strict";a.r(e);var r=a(43),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure storage account overview"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"creating-your-first-azure-storage-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-first-azure-storage-table","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating your first Azure Storage Table")]),t._v(" "),a("p",[t._v("In case you are new to the Azure Storage, we've reviewed the following options so far:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Azure Storage Blobs and Files through the Portal"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create an Azure Storage Blob Container through C#"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Uploading and Downloading a Stream into an Azure Storage Blob"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip77.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Azure Storage Explorer"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip78.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Copy Azure Storage Blobs and Files via C#"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip79.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating an Azure Blob Hierarchy"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip80.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding Metadata to a file inside Azure Storage Blob Container"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip81.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with AzCopy and Azure Storage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Today - Creating your first Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding an item to a Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reading an item from a Azure Storage Table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Updating an item from a Azure Storage Table"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("While we've been working with Azure Storage Blobs and Files, we'll switch this week to taking a look at Azure Storage Tables.")]),t._v(" "),a("p",[a("strong",[t._v("What is Azure Storage Tables?")]),t._v(" They are a NoSQL key-value store for rapid development using massive semi-structured datasets*")]),t._v(" "),a("p",[t._v("As a refresher, Azure Storage Blobs can store any type of text or binary data, such as a document, media file, or application installer. Blob storage is also referred to as object storage.")]),t._v(" "),a("p",[t._v("So to recap, think of Azure Storage Tables as key-value data set that you can query vs. Azure Storage Blobs which are typically files.")]),t._v(" "),a("h4",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("Go ahead and open the Azure Portal and click "),a("strong",[t._v("Create a Resource")]),t._v(" and select "),a("strong",[t._v("Azure Storage")]),t._v(". We'll keep it simple as shown below to get started.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storageacct1.png")}}),t._v(" "),a("p",[t._v("Once complete, go into the resource and look under "),a("strong",[t._v("Services")]),t._v(".")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storageacct2.png")}}),t._v(" "),a("p",[t._v("Go ahead and click on "),a("strong",[t._v("Tables")]),t._v(" and you could create a new table through the portal as shown below.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/aztablesblog1.png")}}),t._v(" "),a("p",[t._v("If we did that, then we'd see a table alongwith the URL that it is accessible from.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/aztablesblog2.png")}}),t._v(" "),a("p",[t._v("While this is good and fine, we'd like to create the table dynamically to represent a real-world scenario.")]),t._v(" "),a("p",[t._v("For this example, we'll use C#.")]),t._v(" "),a("p",[t._v("While inside the blade for Azure Storage, look under "),a("strong",[t._v("Settings")]),t._v(", then "),a("strong",[t._v("Access Keys")]),t._v(" and copy the connection string.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp1.png")}}),t._v(" "),a("p",[t._v("Create a C# Console Application using Visual Studio, and use NuGet to pull in references to :")]),t._v(" "),a("ul",[a("li",[t._v("WindowsAzure.Storage")]),t._v(" "),a("li",[t._v("Microsoft.WindowsAzure.ConfigurationManager")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp2.png")}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp3.png")}}),t._v(" "),a("p",[t._v("Inside of your Console app, you will see "),a("strong",[t._v("App.config")]),t._v(", now add the following section:")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  <appSettings>\n    <add key="StorageConnection" value="YOUR-CONNECTION-STRING-COPIED-FROM-EARLIER"/>\n  </appSettings>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Copy the following code into your Main method:")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudStorageAccount")]),t._v(" storageAccount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CloudStorageAccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                CloudConfigurationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageConnection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudTableClient")]),t._v(" tableClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" storageAccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateCloudTableClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudTable")]),t._v(" table "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tableClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetTableReference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thankfulfor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateIfNotExists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nConsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("This code will get our connection string from the "),a("strong",[t._v("App.config")]),t._v(", create our client and a table named "),a("strong",[t._v("thankfulfor")]),t._v(" if it doesn't exist. We can go back inside of the portal to see if executed correctly.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/aztablesblog3.png")}})])},[],!1,null,null,null);e.default=s.exports}}]);