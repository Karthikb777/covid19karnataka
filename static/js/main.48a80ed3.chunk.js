(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{184:function(e,a,t){e.exports=t(373)},189:function(e,a,t){},26:function(e,a,t){},373:function(e,a,t){"use strict";t.r(a);var l=t(1),r=t.n(l),n=t(59),c=t.n(n),i=(t(189),t(5)),m=Object(l.createContext)(),o=function(e){var a=Object(l.useState)([]),t=Object(i.a)(a,2),n=t[0],c=t[1],o=Object(l.useState)([]),s=Object(i.a)(o,2),d=s[0],u=s[1],v=Object(l.useState)([]),h=Object(i.a)(v,2),E=h[0],b=h[1],k=Object(l.useState)([]),g=Object(i.a)(k,2),p=g[0],f=g[1],w=Object(l.useState)({}),x=Object(i.a)(w,2),j=x[0],N=x[1],O=Object(l.useState)({}),C=Object(i.a)(O,2),z=C[0],D=C[1],M=Object(l.useState)(!1),y=Object(i.a)(M,2),A=y[0],B=y[1];return r.a.createElement(m.Provider,{value:{Confirmed:[n,c],Recovered:[d,u],Deceased:[E,b],District:[p,f],DistrictDaily:[j,N],Total:[z,D],Dark:[A,B]}},e.children)},s=t(88),d=t.n(s),u=t(16),v=t(144),h=t(14),E=t(8),b=t(13);t(58),t(26);var k=function(){var e=Object(l.useContext)(m),a=e.Confirmed,t=e.Recovered,n=e.Deceased,c=e.Total,o=e.Dark,s=Object(i.a)(a,1)[0],d=Object(i.a)(t,1)[0],u=Object(i.a)(n,1)[0],v=Object(i.a)(c,1)[0],E=Object(i.a)(o,1)[0];return void 0===s||void 0===d||void 0===u||void 0===v?r.a.createElement("div",{className:"uk-text-meta"},"Loading..."):r.a.createElement("div",null,r.a.createElement(h.b,{className:"uk-link-reset",to:"/confirmed"},r.a.createElement("div",{className:E?"uk-alert-danger uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom dark-mode":"uk-alert-danger uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom light-mode"},r.a.createElement(b.c,{width:"95%",height:150},r.a.createElement(b.b,{data:s,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(b.a,{type:"monotone",dot:!1,dataKey:"value",stroke:"red"}),r.a.createElement(b.d,null))),r.a.createElement("p",{className:"uk-padding-small uk-text-center"},"Confirmed cases: ",v.confirmed))),r.a.createElement(h.b,{className:"uk-link-reset",to:"/recovered"},r.a.createElement("div",{className:E?"uk-alert-success uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom dark-mode":"uk-alert-success uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom light-mode"},r.a.createElement(b.c,{width:"95%",height:150},r.a.createElement(b.b,{data:d,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(b.a,{type:"monotone",dot:!1,dataKey:"value",stroke:"green"}),r.a.createElement(b.d,null))),r.a.createElement("p",{className:"uk-padding-small uk-text-center"},"Recovered cases: ",v.recovered))),r.a.createElement(h.b,{className:"uk-link-reset",to:"/deceased"},r.a.createElement("div",{className:E?"uk-alert-primary uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom dark-mode":"uk-alert-primary uk-card uk-card-default uk-card-hover uk-margin-small uk-animation-slide-bottom light-mode"},r.a.createElement(b.c,{width:"95%",height:150},r.a.createElement(b.b,{data:u,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(b.a,{type:"monotone",dot:!1,dataKey:"value",stroke:"blue"}),r.a.createElement(b.d,null))),r.a.createElement("p",{className:"uk-padding-small uk-text-center"},"Deceased cases: ",v.deceased))),r.a.createElement("div",{className:"uk-text-meta uk-margin-medium-bottom"},"Click on the cards above to see the daily data."))};var g=function(){var e=Object(l.useContext)(m),a=e.District,t=e.Dark,n=Object(i.a)(a,1)[0],c=Object(i.a)(t,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:c?"uk-text-lead-dark":"uk-text-lead"},"District data"),r.a.createElement("div",{className:"uk-text-meta"},"Click know more to view additional data."),r.a.createElement("table",{className:"uk-table uk-table-responsive uk-table-small"},r.a.createElement("thead",null),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.district,className:c?"uk-card uk-card-default uk-card-hover uk-margin-small dark-mode":"uk-card uk-card-default uk-card-hover uk-margin-small light-mode"},r.a.createElement("td",{className:"uk-text-left"},r.a.createElement("svg",{className:"bi bi-geo-alt",width:"0.8em",height:"0.8em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})),"  ",e.district),r.a.createElement("td",null,r.a.createElement("svg",{className:"bi bi-exclamation-circle",width:"0.8em",height:"0.8em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})),"  Confirmed: ",e.confirmed),r.a.createElement("td",null,r.a.createElement("svg",{className:"bi bi-flag",width:"0.8em",height:"0.8em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 1 1-.515-.858C4.735 7.909 5.348 7.5 6.5 7.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.456-.204 1-.43 1.64-.512V2.543c-.433.074-.83.234-1.234.414l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 3.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 0 1-.554-.832l.04-.026z"})),"  Active: ",e.active),r.a.createElement("td",null,r.a.createElement("svg",{className:"bi bi-heart",width:"0.8em",height:"0.8em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})),"  Recovered: ",e.recovered),r.a.createElement("td",null,r.a.createElement("svg",{className:"bi bi-emoji-dizzy",width:"0.8em",height:"0.8em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708z"}),r.a.createElement("path",{d:"M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"})),"  Deceased: ",e.deceased),r.a.createElement("td",null,r.a.createElement(h.b,{to:"/district/".concat(e.district),className:"uk-table-link"},r.a.createElement("svg",{className:"bi bi-arrow-up-right-square",width:"0.8em",height:"0.8em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M10.5 5h-4a.5.5 0 0 0 0 1h2.793l-4.147 4.146a.5.5 0 0 0 .708.708L10 6.707V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z"})),"  Know more")))})))))};var p=function(e){var a=e.match,t=Object(l.useContext)(m),n=t.Confirmed,c=t.Recovered,o=t.Deceased,s=t.Dark,d=Object(i.a)(n,1)[0],v=Object(i.a)(c,1)[0],h=Object(i.a)(o,1)[0],E=Object(i.a)(s,1)[0],b=Object(u.a)(d).reverse(),k=Object(u.a)(v).reverse(),g=Object(u.a)(h).reverse(),p=function(){return E?"uk-text-lead-dark":"uk-text-lead"};if(void 0===d||void 0===v||void 0===h)return r.a.createElement("div",{className:"uk-text-meta"},"Loading...");switch(a.params.case){case"confirmed":return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p()},"Confirmed"),r.a.createElement("table",{className:"uk-table uk-table-divider"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Cases"))),r.a.createElement("tbody",null,b.map((function(e){return r.a.createElement("tr",{className:"uk-animation-slide-bottom-medium",key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.value))})))));case"recovered":return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p()},"Recovered"),r.a.createElement("table",{className:"uk-table uk-table-divider"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Cases"))),r.a.createElement("tbody",null,k.map((function(e){return r.a.createElement("tr",{className:"uk-animation-slide-bottom-medium"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.value))})))));case"deceased":return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p()},"Deceased"),r.a.createElement("table",{className:"uk-table uk-table-divider"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Cases"))),r.a.createElement("tbody",null,g.map((function(e){return r.a.createElement("tr",{className:"uk-animation-slide-bottom-medium"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.value))})))));default:return null}},f=function(e){var a,t=e.match,n=Object(l.useContext)(m),c=n.District,o=n.DistrictDaily,s=n.Dark,d=Object(i.a)(o,2),u=d[0],v=(d[1],Object(i.a)(c,2)),h=v[0],E=(v[1],Object(i.a)(s,2)),b=E[0],k=(E[1],t.params.dist);h.map((function(e){e.district===k&&(a=e)}));var g=u[k];if(void 0===a||void 0===g)return r.a.createElement("div",{className:"uk-text-meta"},"Loading...");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:b?"uk-text-lead-dark":"uk-text-lead"},r.a.createElement("svg",{className:"bi bi-geo",width:"0.9em",height:"0.9em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),r.a.createElement("path",{d:"M7.5 4h1v9a.5.5 0 0 1-1 0V4z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.489 12.095a.5.5 0 0 1-.383.594c-.565.123-1.003.292-1.286.472-.302.192-.32.321-.32.339 0 .013.005.085.146.21.14.124.372.26.701.382.655.246 1.593.408 2.653.408s1.998-.162 2.653-.408c.329-.123.56-.258.701-.382.14-.125.146-.197.146-.21 0-.018-.018-.147-.32-.339-.283-.18-.721-.35-1.286-.472a.5.5 0 1 1 .212-.977c.63.137 1.193.34 1.61.606.4.253.784.645.784 1.182 0 .402-.219.724-.483.958-.264.235-.618.423-1.013.57-.793.298-1.855.472-3.004.472s-2.21-.174-3.004-.471c-.395-.148-.749-.336-1.013-.571-.264-.234-.483-.556-.483-.958 0-.537.384-.929.783-1.182.418-.266.98-.47 1.611-.606a.5.5 0 0 1 .595.383z"})),"  ",k),r.a.createElement("p",{className:"uk-margin-small-top"},r.a.createElement("svg",{className:"bi bi-exclamation-circle",width:"0.9em",height:"0.9em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"})),"  Confirmed: ",a.confirmed),r.a.createElement("p",null,r.a.createElement("svg",{className:"bi bi-flag",width:"0.9em",height:"0.9em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 1 1-.515-.858C4.735 7.909 5.348 7.5 6.5 7.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.456-.204 1-.43 1.64-.512V2.543c-.433.074-.83.234-1.234.414l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 3.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 0 1-.554-.832l.04-.026z"})),"  Active: ",a.active),r.a.createElement("p",null,r.a.createElement("svg",{class:"bi bi-heart",width:"0.9em",height:"0.9em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})),"  Recovered: ",a.recovered),r.a.createElement("p",null,r.a.createElement("svg",{class:"bi bi-emoji-dizzy",width:"0.9em",height:"0.9em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708z"}),r.a.createElement("path",{d:"M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"})),"  Deceased: ",a.deceased)))};var w=function(){var e=Object(l.useContext)(m).Dark,a=Object(i.a)(e,2),t=a[0],n=(a[1],function(){return t?"dark-mode":""});return r.a.createElement("div",{className:n()},r.a.createElement("div",{className:t?"uk-text-lead-dark":"uk-text-lead"},"About"),r.a.createElement("div",{className:n()},r.a.createElement("p",null,"This is a project created to track the daily and total statistics of covid 19 cases in Karnataka.",r.a.createElement("br",null),"The source of the data is from an open source API from ",r.a.createElement("a",{href:"https://github.com/covid19india/api",target:"_blank",rel:"noopener noreferrer"},"covid19india.org."),r.a.createElement("br",null),"This project is made using ",r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"Reactjs."),r.a.createElement("br",null),"The charts are made using ",r.a.createElement("a",{href:"https://recharts.org/",target:"_blank",rel:"noopener noreferrer"},"Recharts."),r.a.createElement("br",null),"The source code for this project can be found ",r.a.createElement("a",{href:"https://github.com/Karthikb777/covid19karnataka/",target:"_blank",rel:"noopener noreferrer"},"here."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Changelog:",r.a.createElement("br",null),r.a.createElement("br",null),"version 1.2:",r.a.createElement("br",null),"- Updated the site due to changes in the covid19india API.",r.a.createElement("br",null),"- Cleaned up the code.",r.a.createElement("br",null),"- Some bug fixes.",r.a.createElement("br",null),r.a.createElement("br",null),"version 1.1:",r.a.createElement("br",null),"- Added dark mode.",r.a.createElement("br",null),r.a.createElement("br",null),"version 1.0:",r.a.createElement("br",null),"- Initial version.",r.a.createElement("br",null)),r.a.createElement("del",null,"A message for the people who are viewing this site on anything other than a smartphone. This site is made on a smartphone because i don't have access to a laptop or a desktop. So, I develop on my android smartphone only. So, please don't hate me if you see things out of place on this site because of resizing issues. I hope you understand. Thank you! "),"Was made on a smartphone. ",r.a.createElement("br",null),r.a.createElement("br",null),"Stay safe, wear a mask and let's work together to stop Covid19 in our country!")))};function x(e){var a=e.updated,t=e.tested,n=Object(l.useContext)(m).Dark,c=Object(i.a)(n,2),o=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"uk-navbar uk-margin-small-top","uk-navbar":!0},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement(h.b,{className:"uk-link-muted",to:"/covid19karnataka"},r.a.createElement("div",{className:"uk-navbar-item"},r.a.createElement("div",{className:"uk-logo uk-position-center-left uk-remove-margin-bottom"},"COVID19",r.a.createElement("span",{className:"uk-text-primary"},"KARNATAKA")))),r.a.createElement("div",{className:"uk-navbar-item"},r.a.createElement("div",{className:"uk-position-center-right uk-margin-xlarge-right"},r.a.createElement(h.b,{to:"/about",className:"uk-link-muted"},"About"))),r.a.createElement("div",{className:"uk-navbar-item"},r.a.createElement("div",{className:"uk-position-center-right uk-margin-small-right uk-margin-medium-bottom",onClick:function(){s(!o)}},r.a.createElement(j,null))))),r.a.createElement("div",{className:"uk-text-meta"},r.a.createElement("svg",{className:"bi bi-arrow-clockwise",width:"0.9em",height:"0.9em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"})),"  Last updated: ",a),r.a.createElement("div",{className:"uk-text-meta uk-margin-small-bottom"},r.a.createElement("svg",{className:"bi bi-check2-circle",width:"0.9em",height:"0.9em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"})),"  Total people tested: ",t))}function j(){var e=Object(l.useContext)(m).Dark,a=Object(i.a)(e,2),t=a[0];a[1];return t?r.a.createElement("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-brightness-high-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})):r.a.createElement("svg",{width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-moon",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"}))}var N=function(){var e=Object(l.useContext)(m),a=e.Confirmed,t=e.Recovered,n=e.Deceased,c=e.District,o=e.DistrictDaily,s=e.Total,b=e.Dark,j=Object(i.a)(a,2),N=j[0],O=j[1],C=Object(i.a)(t,2),z=C[0],D=C[1],M=Object(i.a)(n,2),y=M[0],A=M[1],B=Object(i.a)(c,2),L=(B[0],B[1]),S=Object(i.a)(o,2),K=(S[0],S[1]),R=Object(i.a)(s,2),T=R[0],_=R[1],I=Object(i.a)(b,2),V=I[0],F=I[1],P=Object(l.useState)(""),W=Object(i.a)(P,2),H=W[0],J=W[1];Object(l.useEffect)((function(){F(!1),q()}),[]);var q=function(){var e=Object(v.a)(d.a.mark((function e(){var a,t,l,r,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/v2/state_district_wise.json");case 2:return a=e.sent,e.next=5,a.json();case 5:return e.sent.filter((function(e){"KA"===e.statecode&&e.districtData.map((function(e){L((function(a){return[].concat(Object(u.a)(a),[e])}))}))})),e.next=9,fetch("https://api.covid19india.org/v3/data.json");case 9:return t=e.sent,e.next=12,t.json();case 12:return l=e.sent,_(l.KA.total),J(l.KA.meta.tested.last_updated),e.next=17,fetch("https://api.covid19india.org/state_district_wise.json");case 17:return r=e.sent,e.next=20,r.json();case 20:return n=e.sent,console.log(n.Karnataka.districtData),K(n.Karnataka.districtData),e.next=25,fetch("https://api.covid19india.org/states_daily.json");case 25:return c=e.sent,e.next=28,c.json();case 28:e.sent.states_daily.map((function(e){switch(e.status){case"Confirmed":O((function(a){return[].concat(Object(u.a)(a),[{name:e.date.toString(),value:parseInt(e.ka)}])}));break;case"Recovered":D((function(a){return[].concat(Object(u.a)(a),[{name:e.date.toString(),value:parseInt(e.ka)}])}));break;case"Deceased":A((function(a){return[].concat(Object(u.a)(a),[{name:e.date.toString(),value:parseInt(e.ka)}])}))}}));case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return void 0===N||void 0===z||void 0===y?r.a.createElement("div",{className:"uk-text-meta"},"Loading..."):r.a.createElement(h.a,null,r.a.createElement(E.c,null,r.a.createElement("div",{className:V?"uk-container dark-mode":"uk-container light-mode"},r.a.createElement(x,{updated:H,tested:T.tested}),r.a.createElement(E.a,{path:"/covid19karnataka",exact:!0,component:k}),r.a.createElement(E.a,{path:"/covid19karnataka",exact:!0,component:g}),r.a.createElement(E.a,{path:"/district/:dist",exact:!0,component:f}),r.a.createElement(E.a,{path:"/:case",exact:!0,component:p}),r.a.createElement(E.a,{path:"/about",exact:!0,component:w}),r.a.createElement("div",{className:"uk-margin-large-top"}))))};var O=function(){var e=Object(l.useContext)(m).Dark,a=Object(i.a)(e,1)[0];return r.a.createElement("div",{className:a?"dark-mode":""},r.a.createElement(N,null))};var C=function(){return r.a.createElement(o,null,r.a.createElement("div",{className:""},r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a,t){}},[[184,1,2]]]);
//# sourceMappingURL=main.48a80ed3.chunk.js.map