import{s as C,a as q,o as B,t as U,b as D}from"../chunks/scheduler.cbf234a0.js";import{S as W,i as z,s as F,e as d,c as G,a as E,t as h,b as y,d as w,f as g,g as H,h as J,j as K,k as I,l as p,m as M,n as Q,o as X,p as P,q as v,r as k,u as O,v as R,w as L}from"../chunks/index.b627ab77.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},T={},m=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in T)return;T[f]=!0;const t=f.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!i)for(let a=r.length-1;a>=0;a--){const u=r[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${s}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},se={};function $(o){let e,n,i;var r=o[1][0];function f(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=v(r,f(o)),o[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{L(l,1)}),y()}r?(e=v(r,f(t)),t[12](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[12](null),e&&L(e,t)}}}function x(o){let e,n,i;var r=o[1][0];function f(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=v(r,f(o)),o[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{L(l,1)}),y()}r?(e=v(r,f(t)),t[11](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&8215&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[11](null),e&&L(e,t)}}}function ee(o){let e,n,i;var r=o[1][1];function f(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=v(r,f(o)),o[10](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{L(l,1)}),y()}r?(e=v(r,f(t)),t[10](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&16&&(l.data=t[4]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&g(n),o[10](null),e&&L(e,t)}}}function V(o){let e,n=o[6]&&A(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=K(e);n&&n.l(r),r.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function A(o){let e;return{c(){e=M(o[7])},l(n){e=Q(n,o[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&g(e)}}}function te(o){let e,n,i,r,f;const t=[x,$],s=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=s[e]=t[e](o);let c=o[5]&&V(o);return{c(){n.c(),i=F(),c&&c.c(),r=d()},l(a){n.l(a),i=G(a),c&&c.l(a),r=d()},m(a,u){s[e].m(a,u),E(a,i,u),c&&c.m(a,u),E(a,r,u),f=!0},p(a,[u]){let b=e;e=l(a),e===b?s[e].p(a,u):(P(),h(s[b],1,1,()=>{s[b]=null}),y(),n=s[e],n?n.p(a,u):(n=s[e]=t[e](a),n.c()),w(n,1),n.m(i.parentNode,i)),a[5]?c?c.p(a,u):(c=V(a),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(a){f||(w(n),f=!0)},o(a){h(n),f=!1},d(a){a&&(g(i),g(r)),s[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:i}=e,{page:r}=e,{constructors:f}=e,{components:t=[]}=e,{form:s}=e,{data_0:l=null}=e,{data_1:c=null}=e;q(i.page.notify);let a=!1,u=!1,b=null;B(()=>{const _=i.page.subscribe(()=>{a&&(n(6,u=!0),U().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){D[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){D[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function j(_){D[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,r=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,s=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(r)},[t,f,s,l,c,a,u,b,i,r,N,S,j]}class oe extends W{constructor(e){super(),z(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>m(()=>import("../nodes/0.7b89ad85.js"),["..\\nodes\\0.7b89ad85.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js","..\\chunks\\stores.d8fb1bd6.js","..\\chunks\\singletons.334e0d8f.js","..\\assets\\0.9d5498bc.css"],import.meta.url),()=>m(()=>import("../nodes/1.0bb06ee5.js"),["..\\nodes\\1.0bb06ee5.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js","..\\chunks\\stores.d8fb1bd6.js","..\\chunks\\singletons.334e0d8f.js"],import.meta.url),()=>m(()=>import("../nodes/2.ff4a2eb2.js"),["..\\nodes\\2.ff4a2eb2.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js","..\\assets\\2.707a9b81.css"],import.meta.url),()=>m(()=>import("../nodes/3.aaa89f8e.js"),["..\\nodes\\3.aaa89f8e.js","..\\chunks\\environment.9aa685ef.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js"],import.meta.url),()=>m(()=>import("../nodes/4.feb4a006.js"),["..\\nodes\\4.feb4a006.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js"],import.meta.url),()=>m(()=>import("../nodes/5.2a06328c.js"),["..\\nodes\\5.2a06328c.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js","..\\assets\\5.65f49291.css"],import.meta.url),()=>m(()=>import("../nodes/6.30c1772d.js"),["..\\nodes\\6.30c1772d.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js","..\\assets\\6.8e6dd701.css"],import.meta.url),()=>m(()=>import("../nodes/7.148d5f87.js"),["..\\nodes\\7.148d5f87.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js","..\\assets\\6.8e6dd701.css"],import.meta.url),()=>m(()=>import("../nodes/8.32d894e5.js"),["..\\nodes\\8.32d894e5.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js","..\\chunks\\parse.bee59afc.js","..\\chunks\\singletons.334e0d8f.js","..\\assets\\8.9d501049.css"],import.meta.url),()=>m(()=>import("../nodes/9.ba39f390.js"),["..\\nodes\\9.ba39f390.js","..\\chunks\\environment.9aa685ef.js","..\\chunks\\scheduler.cbf234a0.js","..\\chunks\\index.b627ab77.js","..\\assets\\9.89a9e780.css"],import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/myLab":[4],"/projects":[5],"/projects/kylo":[6],"/projects/rc":[7],"/sverdle":[-9],"/sverdle/how-to-play":[9]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
