"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[7512],{4284:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>d});var i=n(6070),s=n(5710),r=(n(758),n(8886)),a=n(316);const o=e=>{let{ticket:t}=e;const n=`https://github.com/feature-sliced/documentation/issues/${t}`;return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:(0,a.T)({id:"shared.wip.title"})}),(0,i.jsx)("p",{children:(0,a.T)({id:"shared.wip.subtitle"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,a.T)({id:"shared.wip.var.feedback.base"}),(0,i.jsx)(r.A,{to:n,children:(0,a.T)({id:"shared.wip.var.feedback.link"})})]}),(0,i.jsxs)("li",{children:[(0,a.T)({id:"shared.wip.var.material.base"}),(0,i.jsx)(r.A,{to:"https://t.me/feature_sliced",children:(0,a.T)({id:"shared.wip.var.material.link"})})]}),(0,i.jsxs)("li",{children:[(0,a.T)({id:"shared.wip.var.contribute.base"}),(0,i.jsx)(r.A,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,a.T)({id:"shared.wip.var.contribute.link"})})]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:(0,i.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})},d=[];function c(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,i.jsx)(t.admonition,{title:"WIP",type:"caution",children:(0,i.jsx)(o,{ticket:e.ticket})})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=n(6070),s=n(5710),r=n(4284);const a={sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},o="\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438",d={id:"about/understanding/abstractions",title:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438",description:"\u0417\u0430\u043a\u043e\u043d \u0434\u044b\u0440\u044f\u0432\u044b\u0445 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/about/understanding/abstractions.mdx",sourceDirName:"about/understanding",slug:"/about/understanding/abstractions",permalink:"/ru/docs/about/understanding/abstractions",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/about/understanding/abstractions.mdx",tags:[],version:"current",lastUpdatedAt:1723301472e3,sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_class_name:"sidebar-item--wip"},sidebar:"aboutSidebar",previous:{title:"\u0421\u0438\u0433\u043d\u0430\u043b\u044b \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b",permalink:"/ru/docs/about/understanding/signals"},next:{title:"\u0410\u0441\u043f\u0435\u043a\u0442\u044b \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",permalink:"/ru/docs/about/promote/integration"}},c={},l=[...r.RM,{value:"\u0417\u0430\u043a\u043e\u043d \u0434\u044b\u0440\u044f\u0432\u044b\u0445 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439",id:"the-law-of-leaky-abstractions",level:2},{value:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u043c\u043d\u043e\u0433\u043e \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439",id:"why-are-there-so-many-abstractions",level:2},{value:"\u041f\u0440\u043e \u0441\u043a\u043e\u0443\u043f\u044b \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"about-scopes-of-responsibility",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438",children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438"})}),"\n",(0,i.jsx)(r.Ay,{ticket:"186"}),"\n",(0,i.jsx)(t.h2,{id:"the-law-of-leaky-abstractions",children:"\u0417\u0430\u043a\u043e\u043d \u0434\u044b\u0440\u044f\u0432\u044b\u0445 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439"}),"\n",(0,i.jsx)(t.h2,{id:"why-are-there-so-many-abstractions",children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u043c\u043d\u043e\u0433\u043e \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0439"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0412\u043e\u043f\u0440\u043e\u0441 \u0432 \u0442\u043e\u043c - \u0431\u0443\u0434\u0443\u0442 \u043b\u0438 \u044d\u0442\u0438 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0438\u043b\u0438 \u0436\u0435 \u043c\u044b \u043f\u043e\u043f\u044b\u0442\u0430\u0435\u043c\u0441\u044f \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u043e\u0431\u0449\u0438\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0438 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0430"}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0446\u0435\u043b\u043e\u043c \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u044b, \u0438 \u0432\u043e\u043f\u0440\u043e\u0441 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u043a\u0430\u043a \u044d\u0442\u0443 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043b\u0443\u0447\u0448\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0438 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"about-scopes-of-responsibility",children:"\u041f\u0440\u043e \u0441\u043a\u043e\u0443\u043f\u044b \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"\u041f\u0440\u043e \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://t.me/feature_sliced/2801",children:"\u041f\u0440\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0432 \u043d\u043e\u0432\u044b\u0445 \u0441\u043b\u043e\u044f\u0445"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://t.me/feature_sliced/2619",children:"\u041f\u0440\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u0441\u043b\u043e\u0435\u0432"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5710:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(758);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);