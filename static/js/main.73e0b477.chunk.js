(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{49:function(e,t,n){"use strict";n.d(t,"b",(function(){return m}));var c=n(14),i=n(28),r=n(0),a=n.n(r),o=n(94),s=n(95),l=n(93),d=n(91),j=n(17),h=n(6),b=n(92),u=(n(62),n(26)),O=n(2);var x=Object(u.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub9bc":e.reducer2}}))((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(O.jsx)("th",{children:"\ubd84\ub958"}),Object(O.jsx)("th",{children:"\uc218\ub7c9"}),Object(O.jsx)("th",{children:"\ubcc0\uacbd"})]}),e.state.map((function(t,n){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:[n+1]}),Object(O.jsx)("td",{children:t.name}),Object(O.jsx)("td",{children:t.id}),Object(O.jsx)("td",{children:t.quan}),Object(O.jsxs)("td",{children:[Object(O.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00","\ub370\uc774\ud130":t.id})},children:"+"}),Object(O.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c","\ub370\uc774\ud130":t.id})},children:"-"})]})]},n)}))]}),!0===e.alert\uc5f4\ub9bc?Object(O.jsxs)("div",{className:"my-alert2",children:[Object(O.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(O.jsx)("button",{onClick:function(){e.dispatch({type:"\ub2eb\uae30"})},children:"\ub2eb\uae30"})]}):null]})})),p=n(51),f=n.n(p),v=(n(84),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),g=(n(56),Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,109))}))),m=a.a.createContext();function w(){return Object(O.jsx)("div",{className:"Loding",children:"\ud83d\ude25\ub85c\ub529\uc911\ud83d\ude25"})}function k(e){Object(r.useContext)(m);var t=Object(h.f)();return Object(O.jsxs)("div",{className:"col-md-4",onClick:function(){return t.push("/detail/"+e.shoes.id)},children:[Object(O.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(O.jsx)("h4",{children:e.shoes.title}),Object(O.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price,"\uc6d0"]}),Object(O.jsx)(y,{i:e.i}),"  "]})}function y(e){var t=Object(r.useContext)(m);return Object(O.jsxs)("p",{children:["\uc7ac\uace0 : ",t[e.i],"\uac1c \ud83d\udc5f "]})}t.a=function(){var e=Object(r.useState)([10,11,12]),t=Object(i.a)(e,2),n=t[0],a=t[1],b=Object(r.useState)(v),u=Object(i.a)(b,2),p=u[0],y=u[1],C=Object(r.useState)(!1),S=Object(i.a)(C,2),N=S[0],L=S[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)(o.a,{bg:"light",expand:"lg",children:[Object(O.jsx)(o.a.Brand,{as:j.b,to:"/",children:"\u2728\u2728ShoesTop\u2728\u2728"}),Object(O.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(s.a,{className:"ml-auto",children:[Object(O.jsx)(s.a.Link,{as:j.b,to:"/",children:"Home"}),Object(O.jsx)(s.a.Link,{as:j.b,to:"/Detail/0",children:"Detail"}),Object(O.jsx)(s.a.Link,{as:j.b,to:"/Cart",children:"Cart"})]})})]}),Object(O.jsxs)(h.c,{children:[Object(O.jsxs)(h.a,{exact:!0,path:"/",children:[Object(O.jsxs)(l.a,{className:"background",children:[Object(O.jsx)("h1",{children:"40% Season OFF\ud83c\udf81"}),Object(O.jsx)("p",{children:"\uc778\uae30\uc788\ub294 \uc2e0\ubc1c\ub4e4\uc744 40% \ud560\uc778\ub41c \uac00\uaca9\uc73c\ub85c \ub9cc\ub098\ubcf4\uc138\uc694!"}),Object(O.jsx)("p",{children:Object(O.jsx)(d.a,{variant:"primary",children:"Learn more"})})]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)(m.Provider,{value:n,children:["  ",Object(O.jsx)("div",{className:"row",children:p.map((function(e,t){return Object(O.jsx)(k,{shoes:e,i:t},t)}))})]}),!0===N?Object(O.jsx)(w,{}):null,Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){L(!0),f.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){L(!1),y([].concat(Object(c.a)(p),Object(c.a)(e.data)))})).catch((function(){L(!1),console.log("\uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(O.jsx)(h.a,{path:"/Detail/:id",children:Object(O.jsx)(m.Provider,{value:n,children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)("div",{children:"\ub85c\ub529\uc911"}),children:Object(O.jsx)(g,{shoes:p,"\uc7ac\uace0":n,"\uc7ac\uace0\ubcc0\uacbd":a})})})}),Object(O.jsx)(h.a,{path:"/cart",children:Object(O.jsx)(x,{})})]})]})}},56:function(e,t,n){},61:function(e,t,n){},84:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(14),i=n(0),r=n.n(i),a=n(12),o=n.n(a),s=(n(61),n(49)),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))},h=n(17),b=n(26),u=n(35),O=n(2);var x=[];var p=Object(u.b)(Object(u.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var n=e.findIndex((function(e){return e.id===t.payload.id}));if(n>=0){var i=Object(c.a)(e);return i[n].quan++,i}var r=Object(c.a)(e);return r.push(t.payload),r}if("\uc218\ub7c9\uc99d\uac00"===t.type){var a=Object(c.a)(e);return a[t.\ub370\uc774\ud130].quan++,a}if("\uc218\ub7c9\uac10\uc18c"===t.type){var o=Object(c.a)(e);return o[t.\ub370\uc774\ud130].quan--,o[t.\ub370\uc774\ud130].quan<0&&o[t.\ub370\uc774\ud130].quan++,o}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"\ub2eb\uae30"===t.type?e=!1:e}}));o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(b.a,{store:p,children:Object(O.jsx)(s.a,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(t,e)}))}}(),j()}},[[89,1,2]]]);
//# sourceMappingURL=main.73e0b477.chunk.js.map