(function(t){function e(e){for(var o,n,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},i={app:0},r=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg bg-dark navbar-fixed-top"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("ResponsiveTestTool")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Mobile ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item",attrs:{id:"mob-one",href:"#"},on:{click:function(e){return t.setresolution("414|896|Apple iPhone XR")}}},[t._v("414|896|Apple iPhone XR")]),a("a",{staticClass:"dropdown-item",attrs:{id:"mob-two",href:"#"},on:{click:function(e){return t.setresolution("375|812|Apple iPhone X")}}},[t._v("375|812|Apple iPhone X")]),a("a",{staticClass:"dropdown-item",attrs:{id:"mob-three",href:"#"},on:{click:function(e){return t.setresolution("414|736|Apple iPhone 8 Plus")}}},[t._v("414|736|Apple iPhone 8 Plus")]),a("a",{staticClass:"dropdown-item",attrs:{id:"mob-four",href:"#"},on:{click:function(e){return t.setresolution("360|740|Samsung Galaxy S9")}}},[t._v("360|740|Samsung Galaxy S9")]),a("a",{staticClass:"dropdown-item",attrs:{id:"mob-five",href:"#"},on:{click:function(e){return t.setresolution("400|640|Samsung Galaxy Note")}}},[t._v("400|640|Samsung Galaxy Note")]),a("a",{staticClass:"dropdown-item",attrs:{id:"mob-six",href:"#"},on:{click:function(e){return t.setresolution("473|1024|Apple iPhone XI PRO")}}},[t._v("473|1024|Apple iPhone XI PRO")]),a("a",{staticClass:"dropdown-item",attrs:{id:"mob-seven",href:"#"},on:{click:function(e){return t.setresolution("435|760|Samsung Galaxy A70")}}},[t._v("435|760|Samsung Galaxy A70")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Tablet ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item",attrs:{id:"tablet-one",href:"#"},on:{click:function(e){return t.setresolution("800|1280|Samsung Nexus 10")}}},[t._v("800|1280|Samsung Nexus 10")]),a("a",{staticClass:"dropdown-item",attrs:{id:"tablet-two",href:"#"},on:{click:function(e){t.setresolution("600|1024|Samsung Galaxy Tab 2 (7)")}}},[t._v("600|1024|Samsung Galaxy Tab 2 (7)")]),a("a",{staticClass:"dropdown-item",attrs:{id:"tablet-three",href:"#"},on:{click:function(e){return t.setresolution("800|1280|Amazon Kindle Fire HD 8.9")}}},[t._v("800|1280|Amazon Kindle Fire HD 8.9")]),a("a",{staticClass:"dropdown-item",attrs:{id:"tablet-four",href:"#"},on:{click:function(e){return t.setresolution("1024|1440|Microsoft Surface Pro 3")}}},[t._v("1024|1440|Microsoft Surface Pro 3")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Desktop ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item",attrs:{id:"desktop-one",href:"#"},on:{click:function(e){return t.setresolution("1024|600|Desktop/Laptop")}}},[t._v("1024|600|Desktop/Laptop")]),a("a",{staticClass:"dropdown-item",attrs:{id:"desktop-two",href:"#"},on:{click:function(e){return t.setresolution("1024|768|Desktop/Laptop")}}},[t._v("1024|768|Desktop/Laptop")]),a("a",{staticClass:"dropdown-item",attrs:{id:"desktop-three",href:"#"},on:{click:function(e){return t.setresolution("1920|1080|Desktop/Laptop")}}},[t._v("1920|1080|Desktop/Laptop")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Television ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item",attrs:{id:"television-one",href:"#"},on:{click:function(e){return t.setresolution("3840|2160|4K Television")}}},[t._v("3840|2160|4K Television")]),a("a",{staticClass:"dropdown-item",attrs:{id:"television-two",href:"#"},on:{click:function(e){return t.setresolution("7680|4320|8K Television")}}},[t._v("7680|4320|8K Television")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),a("li",{staticStyle:{color:"white","margin-top":"10px","margin-left":"120px"},attrs:{id:"device"}},[t._v(t._s(t.menu))])]),t._m(1)])]),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6"},[a("div",{staticClass:"col-xs-6",staticStyle:{display:"inline-block"}},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon",staticStyle:{"margin-right":"5px","margin-top":"5px"}},[t._v("Url")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"col-xs-9 form-control",attrs:{type:"text",id:"urlinput",name:"urlinput"},domProps:{value:t.url},on:{change:t.changeurl,input:function(e){e.target.composing||(t.url=e.target.value)}}})])]),a("div",{staticClass:"col-xs-4",staticStyle:{display:"inline-block"}},[a("button",{staticClass:"btn",attrs:{id:"refresh"},on:{click:t.refresh}},[a("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"col-xs-6"},[a("select",{staticClass:"select-css",attrs:{id:"select"},on:{change:function(e){return t.changeagent(e)}}},[a("option",[t._v("Select Options")]),a("option",{attrs:{value:"1"}},[t._v("ChromeWindows")]),a("option",{attrs:{value:"2"}},[t._v("ChromeMacOS")]),a("option",{attrs:{value:"3"}},[t._v("ChromeLinux")]),a("option",{attrs:{value:"4"}},[t._v("ChromeIphone")]),a("option",{attrs:{value:"5"}},[t._v("ChromeIpad")]),a("option",{attrs:{value:"6"}},[t._v("ChromeIpod")]),a("option",{attrs:{value:"7"}},[t._v("ChromeAndroid")]),a("option",{attrs:{value:"8"}},[t._v("FirefoxWindows")]),a("option",{attrs:{value:"9"}},[t._v("FirefoxMacOS")]),a("option",{attrs:{value:"10"}},[t._v("FirefoxLinux")]),a("option",{attrs:{value:"11"}},[t._v("FirefoxIphone")]),a("option",{attrs:{value:"12"}},[t._v("FirefoxIpad")]),a("option",{attrs:{value:"13"}},[t._v("FirefoxIpod")]),a("option",{attrs:{value:"14"}},[t._v("FirefoxAndroid")]),a("option",{attrs:{value:"15"}},[t._v("SafariWindows")]),a("option",{attrs:{value:"16"}},[t._v("SafariMacOS")]),a("option",{attrs:{value:"17"}},[t._v("SafariLinux")]),a("option",{attrs:{value:"18"}},[t._v("SafariIphone")]),a("option",{attrs:{value:"19"}},[t._v("SafariIpad")]),a("option",{attrs:{value:"20"}},[t._v("SafariIpod")]),a("option",{attrs:{value:"21"}},[t._v("SafariAndroid")]),a("option",{attrs:{value:"22"}},[t._v("Internet8Windows")]),a("option",{attrs:{value:"23"}},[t._v("Internet10Windows")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-9 form-inline"},[a("div",{staticClass:"col-xs-4"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon",staticStyle:{"margin-right":"5px","margin-top":"5px"}},[t._v("Width")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.width,expression:"width"}],staticClass:"col-xs-9 form-control",attrs:{type:"text",id:"width",name:"width"},domProps:{value:t.width},on:{input:function(e){e.target.composing||(t.width=e.target.value)}}})])]),a("div",{staticClass:"col-xs-4"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-addon",staticStyle:{"margin-right":"5px","margin-top":"5px"}},[t._v("Height")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],staticClass:"col-xs-9 form-control",attrs:{type:"text",id:"height",name:"height"},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=e.target.value)}}})])]),a("div",{staticClass:"col-xs-4 input-group form-inline"},[a("button",{staticClass:"btn btn-primary",attrs:{id:"btnSet",name:"btnSet"},on:{click:t.setdimension}},[t._v("Set")])])])]),a("br"),a("div",{staticClass:"row col-xs-10"},[a("div",{staticClass:"col-xs-12"},[a("iframe",{style:t.style,attrs:{src:t.url,frameborder:"0",width:t.width,height:t.height,name:"iframe",id:"iframe",scrolling:"auto"}})])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Dropdown ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])}],n=(a("1276"),a("ac1f"),{name:"App",data:function(){return{menu:"400|320|Mobile-https://vasileclaudiu.github.io/reactsopcast",url:"https://vasileclaudiu.github.io/reactsopcast",width:400,height:320,style:"background-image: none; background-color: rgb(255, 255, 255); display: inline-block; width: 400px; height: 320px;margin-right: 20px;"}},methods:{setUserAgent:function(t,e){if(t.navigator.userAgent!=e){var a={get:function(){return e}};try{Object.defineProperty(t.navigator,"userAgent",a)}catch(o){t.navigator=Object.create(navigator,{userAgent:a})}}},changeurl:function(){},setdimension:function(){this.style="background-image: none; background-color: rgb(255, 255, 255); display: inline-block; width: "+this.width+"px; height: "+this.height+"px;margin-right: 20px;",this.menu=this.width+"|"+this.height+"|Custom Resolution"},refresh:function(){document.getElementById("iframe").src=document.getElementById("iframe").src},setresolution:function(t){this.menu=t+"-"+this.url,this.width=t.split("|")[0],this.height=t.split("|")[1],this.setdimension()},changeagent:function(t){1==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"),console.log(t.target.value)),2==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"),console.log(t.target.value)),3==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"),console.log(t.target.value)),4==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1"),console.log(t.target.value)),5==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1"),console.log(t.target.value)),6==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPod; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1"),console.log(t.target.value)),7==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36"),console.log(t.target.value)),8==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0"),console.log(t.target.value)),9==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Macintosh; Intel Mac OS X 11.2; rv:86.0) Gecko/20100101 Firefox/86.0"),console.log(t.target.value)),10==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0"),console.log(t.target.value)),11==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/32.0 Mobile/15E148 Safari/605.1.15"),console.log(t.target.value)),12==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPad; CPU OS 11_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/32.0 Mobile/15E148 Safari/605.1.15"),console.log(t.target.value)),13==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPod touch; CPU iPhone OS 11_2_3 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) FxiOS/32.0 Mobile/15E148 Safari/605.1.15"),console.log(t.target.value)),14==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/86.0"),console.log(t.target.value)),15==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0"),console.log(t.target.value)),16==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15"),console.log(t.target.value)),17==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0"),console.log(t.target.value)),18==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"),console.log(t.target.value)),19==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPad; CPU OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"),console.log(t.target.value)),20==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (iPod touch; CPU iPhone 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"),console.log(t.target.value)),21==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/86.0"),console.log(t.target.value)),22==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)"),console.log(t.target.value)),23==t.target.value&&(this.setUserAgent(document.querySelector("iframe").contentWindow,"Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko"),console.log(t.target.value))}}}),s=n,l=(a("034f"),a("2877")),c=Object(l["a"])(s,i,r,!1,null,null,null),d=c.exports;a("4989"),a("ab8b");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.3d5fe3cc.js.map