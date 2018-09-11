(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{183:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This page is only useful if you are using DBacked Free as the Pro version take care of this for you.")]),t._v(" "),a("p",[t._v("When using DBacked Free you need a Amazon Web Services account to store your backups on "),a("a",{attrs:{href:"https://aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("S3"),a("OutboundLink")],1),t._v(". AWS S3 provides a free-tier: 5 GB of Amazon S3 storage in the Standard Storage class, 20,000 Get Requests, 2,000 Put Requests, and 15 GB of data transfer out each month for one year. After this, you'll be billed according to what's on their "),a("a",{attrs:{href:"https://aws.amazon.com/s3/pricing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pricing"),a("OutboundLink")],1),t._v(" page.")]),t._v(" "),a("p",[t._v("You first need to create a new S3 bucket, you can refer to "),a("a",{attrs:{href:"https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("their tutorial on how to create a S3 bucket"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To allow the DBacked agent to manage this bucket, you need to create a set of credentials.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("You need to create a IAM user with programmatic access. Its name doesn't matter but you should make use something that is recognizable. Refer to their "),a("a",{attrs:{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console",target:"_blank",rel:"noopener noreferrer"}},[t._v("tutorial about creating a IAM user"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("This new user permissions should be restricted to the bucket you created to prevent problems if the key is leaked. The basic policy is declared like this:")]),t._v(" "),t._m(2),a("p",[t._v("This policy will also prevent this key to delete any file in the bucket.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"aws-s3-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-s3-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS S3 Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"creating-a-dedicated-iam-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-dedicated-iam-key","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a dedicated IAM key")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Version"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2012-10-17"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Statement"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"Sid"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"VisualEditor0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"Effect"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Allow"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"Action"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"s3:PutObject"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"s3:GetObject"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"s3:AbortMultipartUpload"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"s3:ListBucket"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"Resource"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"arn:aws:s3:::YOUR_BUCKET_NAME"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{attrs:{class:"token string"}},[t._v('"arn:aws:s3:::YOUR_BUCKET_NAME/*"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"Effect"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Allow"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"Action"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"s3:HeadBucket"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"Resource"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"arn:aws:s3:::*"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="s3-configuration.md";s.default=e.exports}}]);