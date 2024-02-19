"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5397],{5137:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(1527),r=s(6736);const t={sidebar_position:1},l="Low Coupling & High Cohesion",o={id:"reference/isolation/coupling-cohesion",title:"Low Coupling & High Cohesion",description:"\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e (\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u0447\u0435\u0442\u043a\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438) \u0438 \u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e (\u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u0435\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439)",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/coupling-cohesion.md",sourceDirName:"reference/isolation",slug:"/reference/isolation/coupling-cohesion",permalink:"/ru/docs/reference/isolation/coupling-cohesion",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/coupling-cohesion.md",tags:[],version:"current",lastUpdatedAt:1708383652,formattedLastUpdatedAt:"19 \u0444\u0435\u0432\u0440. 2024 \u0433.",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"\u0418\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u0435\u0439",permalink:"/ru/docs/reference/isolation/"},next:{title:"Decouple entities",permalink:"/ru/docs/reference/isolation/decouple-entities"}},c={},d=[{value:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 (UI level)",id:"components-composition-ui-level",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"example",level:3},{value:"\u0417\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0441\u0442\u044c",id:"laying-the-extensibility",level:4},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e",id:"using-the-composition",level:4},{value:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0441\u043b\u043e\u0435\u0432 (APP level)",id:"layer-composition-app-level",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"example",level:3},{value:"\u0421\u0432\u044f\u0436\u0435\u043c \u0432\u0441\u0435 \u044d\u0442\u043e \u0432\u043c\u0435\u0441\u0442\u0435",id:"lets-tie-it-all-together",level:4},{value:"\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445",id:"data-model",level:4},{value:"\u0418\u0442\u043e\u0433\u043e",id:"summary",level:2},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"low-coupling--high-cohesion",children:"Low Coupling & High Cohesion"}),"\n",(0,i.jsxs)(n.p,{children:["\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0449\u0438\u0435 ",(0,i.jsx)(n.strong,{children:"\u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e"})," (\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u0447\u0435\u0442\u043a\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438) \u0438 ",(0,i.jsx)(n.strong,{children:"\u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e"})," (\u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u0435\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"coupling-cohesion-themed",src:s(1167).Z+"",width:"1024",height:"1024"})}),"\n",(0,i.jsx)(n.p,{children:"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u044d\u0442\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u043b\u043e\u0438 \u0438 \u0441\u043b\u0430\u0439\u0441\u044b - \u043c\u043e\u0434\u0443\u043b\u0438, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c."}),"\n",(0,i.jsxs)(n.li,{children:["\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0435 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u044e - \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c ",(0,i.jsx)(n.a,{href:"/docs/reference/public-api",children:"\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u043d\u0430 ",(0,i.jsx)(n.a,{href:"/docs/reference/isolation",children:"\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439"}),' - \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 "\u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445" \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043d\u043e \u043d\u0435 \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0441 \u0442\u043e\u0433\u043e \u0436\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0441\u043b\u043e\u044f.']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"components-composition-ui-level",children:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 (UI level)"}),"\n",(0,i.jsx)(n.p,{children:"\u0410\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0435 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 UI-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u0432 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435, \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044e, \u0441\u043b\u043e\u0442\u044b."}),"\n",(0,i.jsxs)(n.p,{children:["\u0422\u0430\u043a\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043a\u0430\u043a ",(0,i.jsx)(n.strong,{children:"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445, \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"})," \u0438, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c, \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c ",(0,i.jsx)(n.strong,{children:"\u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438"})," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,i.jsxs)(n.p,{children:["\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u043a\u0443\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 ",(0,i.jsx)(n.strong,{children:"\u0441\u043f\u0438\u0441\u043a\u0430 \u0441 \u0445\u0435\u0434\u0435\u0440\u043e\u043c:"})]}),"\n",(0,i.jsx)(n.h4,{id:"laying-the-extensibility",children:"\u0417\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0441\u0442\u044c"}),"\n",(0,i.jsx)(n.p,{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0430\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0432\u0438\u0434 \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430, \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0438\u0445 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'interface ListProps {\n    Header: React.ReactNode;\n    Items: React.ReactNode;\n}\n\nconst List: Component<ListProps> = ({ Header, Items }) => (\n    <div class="wrapper">\n        {Header}\n        <ul class="...">\n            {Items}\n        </ul>\n    </div>\n)\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"using-the-composition",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e"}),"\n",(0,i.jsxs)(n.p,{children:["\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ",(0,i.jsx)(n.strong,{children:"\u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c"})," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u043a\u0430\u043a \u0441\u0432\u043e\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u0442\u0430\u043a \u0438 \u0441\u0432\u043e\u044e \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0443 \u043a \u043b\u044e\u0431\u044b\u043c \u0447\u0430\u0441\u0442\u044f\u043c \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f - \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043f\u0440\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0442\u044c, \u0430 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<List Header={<FancyHeader />} Items={<ToDoItems />} />\n\n<List Items={<CartItems />} />\n\n<List Header={<FancyHeaderV2 color="red" />} Items={<FancyItems />} />\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"layer-composition-app-level",children:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0441\u043b\u043e\u0435\u0432 (APP level)"}),"\n",(0,i.jsxs)(n.p,{children:["\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c \u0446\u0435\u043d\u043d\u0443\u044e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 - ",(0,i.jsx)(n.strong,{children:"\u0444\u0438\u0447\u0438 (features)"}),", \u0430 \u043b\u043e\u0433\u0438\u043a\u0443, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0443\u044e\u0441\u044f \u043a \u0431\u0438\u0437\u043d\u0435\u0441 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c - \u0432 ",(0,i.jsx)(n.strong,{children:"\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 (entities)"}),". \u0418 \u0444\u0438\u0447\u0438, \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 ",(0,i.jsx)(n.strong,{children:"\u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0432\u044b\u0441\u043e\u043a\u043e-\u0441\u0432\u044f\u0437\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438"}),", \u0442.\u0435. \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 ",(0,i.jsx)(n.strong,{children:"\u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"})," \u0438\u043b\u0438 \u0441\u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432\u043e\u043a\u0440\u0443\u0433 ",(0,i.jsx)(n.strong,{children:"\u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438."})]}),"\n",(0,i.jsxs)(n.p,{children:["\u0412\u0441\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0442\u0430\u043a\u0438\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e UI-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c \u0438\u0437 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u0448\u0435, \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a ",(0,i.jsx)(n.strong,{children:"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439."})]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0447\u0430\u0442\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0430"}),"\n",(0,i.jsx)(n.li,{children:"\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443 \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0434\u0440\u0443\u0433\u043e\u043c"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a:"}),"\n",(0,i.jsx)(n.p,{children:"Entities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c (\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"}),"\n",(0,i.jsx)(n.li,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 (\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432, \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u043c)"}),"\n",(0,i.jsx)(n.li,{children:"\u041f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0430 (\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0438 \u0438 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0439)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u0424\u043e\u0440\u043c\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(n.li,{children:"\u041c\u0435\u043d\u044e \u0432\u044b\u0431\u043e\u0440\u0430 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0438"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"lets-tie-it-all-together",children:"\u0421\u0432\u044f\u0436\u0435\u043c \u0432\u0441\u0435 \u044d\u0442\u043e \u0432\u043c\u0435\u0441\u0442\u0435"}),"\n",(0,i.jsx)(n.p,{children:"\u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430, \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u0441\u043b\u0435\u0433\u043a\u0430 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 \u0438\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"title=page/main/ui.tsx",children:"<List\n    Header={<ConversationSwitch />}\n    Items={<Messages />}\n    Footer={<MessageInput />}\n/>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"data-model",children:"\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsxs)(n.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0431\u0443\u0434\u0435\u0442 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u043a\u0430\u043a ",(0,i.jsx)(n.strong,{children:"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"}),". \u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0444\u0438\u0447\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u044d\u0442\u0438\u0445 \u0444\u0430\u0431\u0440\u0438\u043a."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u041e\u0434\u043d\u0430\u043a\u043e, \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 - \u0444\u0438\u0447\u0430 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445 \u0441\u043b\u043e\u0435\u0432 \u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"title=pages/main/model.ts",children:'import { userModel } from "entitites/user"\nimport { conversationModel } from "entities/conversation"\nimport { contactModel } from "entities/contact"\n\nimport { createMessageInput } from "features/message-input"\nimport { createConversationSwitch } from "features/conversation-switch"\n\nimport { beautifiy } from "shared/lib/beautify-text"\n\nexport const { allConversations, setConversation } = createConversationSwitch({\n    contacts: contactModel.allContacts,\n    setConversation: conversationModel.setConversation,\n    currentConversation: conversationModel.conversation,\n    currentUser: userModel.currentUser\n})\n\nexport const { sendMessage, attachFile } = createMessageInput({\n    author: userModel.currentUser\n    send: conversationModel.sendMessage,\n    formatMessage: beautify\n})\n'})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"\u0418\u0442\u043e\u0433\u043e"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u041c\u043e\u0434\u0443\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u044c ",(0,i.jsx)(n.strong,{children:"\u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e"})," (\u0438\u043c\u0435\u0442\u044c \u043e\u0434\u043d\u0443 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u0440\u0435\u0448\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443) \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c ",(0,i.jsx)(n.a,{href:"/docs/reference/public-api",children:(0,i.jsx)(n.strong,{children:"\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"})})," \u0434\u043e\u0441\u0442\u0443\u043f\u0430"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u0421\u043b\u0430\u0431\u0430\u044f \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c"})," \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 - \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 UI, \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"]}),"\n",(0,i.jsxs)(n.li,{children:["\u0422\u0430\u043a\u0436\u0435, \u0434\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043c\u043e\u0434\u0443\u043b\u0438 ",(0,i.jsx)(n.strong,{children:"\u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b"})," - \u0442\u0430\u043a \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043e\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) \u041f\u0440\u043e Low Coupling \u0438 High Cohesion \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"\u0421\u0445\u0435\u043c\u0430 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435\u0439"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/german-gorelkin/low-coupling-high-cohesion-d36369fb1be9",children:"(\u0421\u0442\u0430\u0442\u044c\u044f) Low Coupling \u0438 High Cohesion. \u0417\u0430\u043a\u043e\u043d \u0414\u0435\u043c\u0435\u0442\u0440\u044b"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.slideshare.net/cristalngo/software-design-principles-57388843",children:"(\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f) \u041f\u0440\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f (\u0432\u043a\u043b\u044e\u0447\u0430\u044f Low Coupling & High Cohesion)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1167:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/coupling-ca24ecbbb9b4595e100e3e990025ed73.png"},6736:(e,n,s)=>{s.d(n,{ah:()=>t});var i=s(959);const r=i.createContext({});function t(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);