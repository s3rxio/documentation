"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1737],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(h,l(l({ref:t},d),{},{components:r})):a.createElement(h,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4703:(e,t,r)=>{r.d(t,{ZP:()=>d});var a=r(7462),n=r(7294),i=r(4137),l=r(3699),o=r(7325);const s=e=>{let{ticket:t}=e;const r=`https://github.com/feature-sliced/documentation/issues/${t}`;return n.createElement("div",null,n.createElement("p",null,(0,o.I)({id:"shared.wip.title"})),n.createElement("p",null,(0,o.I)({id:"shared.wip.subtitle"})),n.createElement("ul",null,n.createElement("li",null,(0,o.I)({id:"shared.wip.var.feedback.base"}),n.createElement(l.Z,{to:r},(0,o.I)({id:"shared.wip.var.feedback.link"}))),n.createElement("li",null,(0,o.I)({id:"shared.wip.var.material.base"}),n.createElement(l.Z,{to:"https://t.me/feature_sliced"},(0,o.I)({id:"shared.wip.var.material.link"}))),n.createElement("li",null,(0,o.I)({id:"shared.wip.var.contribute.base"}),n.createElement(l.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,o.I)({id:"shared.wip.var.contribute.link"})))),n.createElement("br",null),n.createElement("p",null,n.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},c={toc:[]};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"WIP",type:"caution"},(0,i.kt)(s,{ticket:r.ticket,mdxType:"WIP"})))}d.isMDXComponent=!0},8702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(4137)),i=r(4703);const l={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},o="\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438",s={unversionedId:"get-started/cheatsheet",id:"get-started/cheatsheet",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438",description:"\u0420\u043e\u043b\u044c \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/get-started/cheatsheet.mdx",sourceDirName:"get-started",slug:"/get-started/cheatsheet",permalink:"/ru/docs/get-started/cheatsheet",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/get-started/cheatsheet.mdx",tags:[],version:"current",lastUpdatedAt:1669361045,formattedLastUpdatedAt:"25 \u043d\u043e\u044f\u0431. 2022 \u0433.",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"getstartedSidebar",previous:{title:"\u0422\u0443\u0442\u043e\u0440\u0438\u0430\u043b",permalink:"/ru/docs/get-started/tutorial"},next:{title:"FAQ",permalink:"/ru/docs/get-started/faq"}},c={},d=[{value:"\u0420\u043e\u043b\u044c \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438",id:"the-role-and-meaning-of-decomposition",level:2},{value:"\u041a\u0430\u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0441\u043a\u043e\u0443\u043f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"how-to-determine-the-scope-of-responsibility",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:2},{value:"Tweet",id:"tweet",level:3},{value:"GitHub",id:"github",level:3},{value:"\u0414\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0435 \u043c\u0430\u043a\u0435\u0442\u0430 {design-mockup}",id:"\u0434\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0435-\u043c\u0430\u043a\u0435\u0442\u0430-design-mockup",level:3},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],u={toc:d};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u043f\u0430\u043c\u044f\u0442\u043a\u0430-\u043f\u043e-\u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438"},"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438"),(0,n.kt)(i.ZP,{ticket:"213",mdxType:"WIP"}),(0,n.kt)("h2",{id:"the-role-and-meaning-of-decomposition"},"\u0420\u043e\u043b\u044c \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0442\u0438\u043a\u0430, \u0427\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0435\u0441\u043b\u0438 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0427\u0435\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u043e\u0447\u044c, \u041f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e, \u041f\u0440\u043e \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c")),(0,n.kt)("h2",{id:"how-to-determine-the-scope-of-responsibility"},"\u041a\u0430\u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0441\u043a\u043e\u0443\u043f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u041a\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0441\u043b\u043e\u0435\u0432")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"layers-criteria-bordered-w100-bgLight",src:r(430).Z,width:"804",height:"1080"})),(0,n.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,n.kt)("h3",{id:"tweet"},"Tweet"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"decomposed-tweet-bordered-bgLight",src:r(9683).Z,width:"1200",height:"2364"})),(0,n.kt)("h3",{id:"github"},"GitHub"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"decomposed-github-bordered",src:r(9028).Z,width:"2291",height:"1080"})),(0,n.kt)("h3",{id:"\u0434\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0435-\u043c\u0430\u043a\u0435\u0442\u0430-design-mockup"},"\u0414\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0435 \u043c\u0430\u043a\u0435\u0442\u0430 {design-mockup}"),(0,n.kt)(i.ZP,{ticket:"224",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u0430\u043a\u0435\u0442\u0430, \u043a\u0430\u043a \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443 \u0441 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 - \u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439")),(0,n.kt)("h2",{id:"see-also"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4262"},"(\u0422\u0440\u0435\u0434) \u041e\u0431\u0449\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u0434\u043b\u044f \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4210"},"(\u0422\u0440\u0435\u0434) \u0414\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0440\u0430\u0437\u0431\u0443\u0445\u0448\u0435\u0439 \u043b\u043e\u0433\u0438\u043a\u0438")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4088"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0437\u043e\u043d \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3828"},"(\u0422\u0440\u0435\u0434) \u0414\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0432\u0438\u0434\u0436\u0435\u0442\u0430 ProductList")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase"},"(\u0421\u0442\u0430\u0442\u044c\u044f) \u0420\u0430\u0437\u043d\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043f\u0440\u0438 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043b\u043e\u0433\u0438\u043a\u0438")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3776"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u0440\u0430\u0437\u043d\u0438\u0446\u0443 \u043c\u0435\u0436\u0434\u0443 \u0444\u0438\u0447\u0430\u043c\u0438 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3248"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u0440\u0430\u0437\u043d\u0438\u0446\u0443 \u043c\u0435\u0436\u0434\u0443 \u0444\u0438\u0447\u0430\u043c\u0438 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438 (2)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3833"},"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0435\u0432 \u043f\u0440\u0438 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438"))))}p.isMDXComponent=!0},9028:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/decompose-github-a0eeb839a4b5ef5c480a73726a4451b0.jpg"},9683:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/decompose-twitter-7b9a50f879d763c49305b3bf0751ee35.png"},430:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/criteria-916371355761a5dc865d81ed527c5db6.png"}}]);