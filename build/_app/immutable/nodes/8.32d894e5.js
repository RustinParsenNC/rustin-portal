import{r as Ae,s as Ge,f as Se,n as ae,c as Ne,i as De,h as le}from"../chunks/scheduler.cbf234a0.js";import{d as Pe,S as Le,i as Oe,g as M,s as P,e as oe,B as Xe,h as W,f as g,c as L,z as Q,j as G,k as y,C as H,A,a as T,D as ee,m as N,n as D,l as x,o as te,E as Ce,F as Te}from"../chunks/index.b627ab77.js";import{p as ze}from"../chunks/parse.bee59afc.js";import{j as Fe,k as Ie,r as qe}from"../chunks/singletons.334e0d8f.js";const Be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function I(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Me(n,e){n.d(1),e.delete(n.key)}function We(n,e,t,s,o,c,l,a,u,m,_,b){let h=n.length,r=c.length,f=h;const i={};for(;f--;)i[n[f].key]=f;const p=[],C=new Map,S=new Map,E=[];for(f=r;f--;){const v=b(o,c,f),w=t(v);let d=l.get(w);d?s&&E.push(()=>d.p(v,e)):(d=m(w,v),d.c()),C.set(w,p[f]=d),w in i&&S.set(w,Math.abs(f-i[w]))}const X=new Set,F=new Set;function O(v){Pe(v,1),v.m(a,_),l.set(v.key,v),_=v.first,r--}for(;h&&r;){const v=p[r-1],w=n[h-1],d=v.key,k=w.key;v===w?(_=v.first,h--,r--):C.has(k)?!l.has(d)||X.has(d)?O(v):F.has(k)?h--:S.get(d)>S.get(k)?(F.add(d),O(v)):(X.add(k),h--):(u(w,l),h--)}for(;h--;){const v=n[h];C.has(v.key)||u(v,l)}for(;r;)O(p[r-1]);return Ae(E),p}const Ve=(n,e={})=>{de(e);let{colors:t=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:s=3500,force:o=.5,particleCount:c=150,particleShape:l="mix",particleSize:a=12,destroyAfterDone:u=!0,stageHeight:m=800,stageWidth:_=1600}=e;(function(i){const p=Y("style");p.dataset.neoconfetti="",p.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',Z(document.head,p)})(),n.classList.add("fk9XWG_container"),n.style.setProperty("--stage-height",m+"px");let b,h=ue(c,t),r=re(n,h);function f(i,p){const C=V(z()*(Ke-1)),S=l!=="rectangles"&&(l==="circles"||Qe(C)),E=(O,v)=>i.style.setProperty(O,v+"");E("--x-landing-point",J(U(fe(p,90)-180),0,180,-_/2,_/2)+"px"),E("--duration-chaos",s-V(1e3*z())+"ms");const X=z()<Re?q(z()*xe,2):0;E("--x1",X),E("--x2",-1*X),E("--x3",X),E("--x4",q(U(J(U(fe(p,90)-180),0,180,-1,1)),4)),E("--y1",q(z()*ce,4)),E("--y2",q(z()*o*(je()?1:-1),4)),E("--y3",ce),E("--y4",q(Je(J(U(p-180),0,180,o,-o),0),4)),E("--width",(S?a:V(4*z())+a/2)+"px"),E("--height",(S?a:V(2*z())+a)+"px");const F=C.toString(2).padStart(3,"0").split("");E("--half-rotation",F.map(O=>+O/2+"")),E("--rotation",F),E("--rotation-duration",q(z()*(Ue-ie)+ie)+"ms"),E("--border-radius",S?"50%":0)}for(const[i,p]of Object.entries(r))f(p,h[+i].degree);return Promise.resolve().then(()=>b=setTimeout(()=>u&&(n.innerHTML=""),s)),{update(i){de(i);const p=i.particleCount??c,C=i.colors??t,S=i.stageHeight??m;if(h=ue(p,C),p===c&&JSON.stringify(t)!==JSON.stringify(C))for(const[E,{color:X}]of Object.entries(h))r[+E].style.setProperty("--bgcolor",X);p!==c&&(n.innerHTML="",r=re(n,h)),u&&!i.destroyAfterDone&&clearTimeout(b),n.style.setProperty("--stage-height",S+"px"),t=C,s=i.duration??s,o=i.force??o,c=p,l=i.particleShape??l,a=i.particleSize??a,u=i.destroyAfterDone??u,m=S,_=i.stageWidth??_},destroy(){clearTimeout(b)}}};function re(n,e=[]){const t=[];for(const{color:s}of e){const o=Y("div");o.className="fk9XWG_particle",o.style.setProperty("--bgcolor",s);const c=Y("div");Z(o,c),Z(n,o),t.push(o)}return t}const ie=200,Ue=800,Re=.1,xe=.3,ce=.5,U=Math.abs,z=Math.random,V=Math.round,Je=Math.max,Y=n=>document.createElement(n),Z=(n,e)=>n.appendChild(e),ue=(n,e)=>Array.from({length:n},(t,s)=>({color:e[s%e.length],degree:360*s/n})),q=(n,e=2)=>V((n+Number.EPSILON)*10**e)/10**e,J=(n,e,t,s,o)=>(n-e)*(o-s)/(t-e)+s,fe=(n,e)=>n+e>360?n+e-360:n+e,je=()=>z()>.5,Ke=6,Qe=n=>n!==1&&je(),$=n=>n===void 0,B=(n,e)=>{if(!$(n)&&Number.isSafeInteger(n)&&n<0)throw new Error(e+" must be a positive integer")},de=({particleCount:n,duration:e,colors:t,particleSize:s,force:o,stageHeight:c,stageWidth:l,particleShape:a})=>{if(B(n,"particleCount"),B(e,"duration"),B(s,"particleSize"),B(o,"force"),B(c,"stageHeight"),B(l,"stageWidth"),!$(a)&&!/^(mix|circles|rectangles)$/i.test(a))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!$(t)&&!Array.isArray(t))throw new Error("colors must be an array of strings");if(o>1)throw new Error("force must be within 0 and 1")},Ye=Fe("invalidate_all");function Ze(n){return Ie.apply_action(n)}function $e(n){const e=JSON.parse(n);return e.data&&(e.data=ze(e.data)),e}function he(n){return HTMLElement.prototype.cloneNode.call(n)}function et(n,e=()=>{}){const t=async({action:o,result:c,reset:l})=>{c.type==="success"&&(l!==!1&&HTMLFormElement.prototype.reset.call(n),await Ye()),(location.origin+location.pathname===o.origin+o.pathname||c.type==="redirect"||c.type==="error")&&Ze(c)};async function s(o){var f,i,p,C;if(((f=o.submitter)!=null&&f.hasAttribute("formmethod")?o.submitter.formMethod:he(n).method)!=="post")return;o.preventDefault();const l=new URL((i=o.submitter)!=null&&i.hasAttribute("formaction")?o.submitter.formAction:he(n).action),a=new FormData(n),u=(p=o.submitter)==null?void 0:p.getAttribute("name");u&&a.append(u,((C=o.submitter)==null?void 0:C.getAttribute("value"))??"");const m=new AbortController;let _=!1;const h=await e({action:l,cancel:()=>_=!0,controller:m,get data(){return a},formData:a,get form(){return n},formElement:n,submitter:o.submitter})??t;if(_)return;let r;try{const S=await fetch(l,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:a,signal:m.signal});r=$e(await S.text()),r.type==="error"&&(r.status=S.status)}catch(S){if((S==null?void 0:S.name)==="AbortError")return;r={type:"error",error:S}}h({action:l,get data(){return a},formData:a,get form(){return n},formElement:n,update:S=>t({action:l,result:r,reset:S==null?void 0:S.reset}),result:r})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",s),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",s)}}}const He="(prefers-reduced-motion: reduce)",tt=()=>window.matchMedia(He).matches,nt=qe(tt(),n=>{{const e=s=>{n(s.matches)},t=window.matchMedia(He);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});const{document:K,window:st}=Be;function pe(n,e,t){const s=n.slice();return s[9]=e[t],s}function _e(n,e,t){const s=n.slice();return s[12]=e[t],s}function me(n,e,t){const s=n.slice();s[9]=e[t];const o=s[9]===s[3];return s[15]=o,s}function ge(n,e,t){var _,b;const s=n.slice();s[18]=e[t];const o=(_=s[0].answers[s[9]])==null?void 0:_[s[18]];s[19]=o;const c=((b=s[0].guesses[s[9]])==null?void 0:b[s[18]])??"";s[20]=c;const l=s[15]&&s[18]===s[0].guesses[s[9]].length;s[21]=l;const a=s[19]==="x";s[22]=a;const u=s[19]==="c";s[23]=u;const m=s[19]==="_";return s[24]=m,s}function at(n){let e;return{c(){e=N("empty")},l(t){e=D(t,"empty")},m(t,s){T(t,e,s)},d(t){t&&g(e)}}}function lt(n){let e;return{c(){e=N("(absent)")},l(t){e=D(t,"(absent)")},m(t,s){T(t,e,s)},d(t){t&&g(e)}}}function ot(n){let e;return{c(){e=N("(present)")},l(t){e=D(t,"(present)")},m(t,s){T(t,e,s)},d(t){t&&g(e)}}}function rt(n){let e;return{c(){e=N("(correct)")},l(t){e=D(t,"(correct)")},m(t,s){T(t,e,s)},d(t){t&&g(e)}}}function be(n,e){let t,s=e[20]+"",o,c,l,a,u,m,_;function b(f,i){return f[22]?rt:f[23]?ot:f[24]?lt:at}let h=b(e),r=h(e);return{key:n,first:null,c(){t=M("div"),o=N(s),c=P(),l=M("span"),r.c(),a=P(),u=M("input"),this.h()},l(f){t=W(f,"DIV",{class:!0});var i=G(t);o=D(i,s),c=L(i),l=W(i,"SPAN",{class:!0});var p=G(l);r.l(p),p.forEach(g),a=L(i),u=W(i,"INPUT",{name:!0,type:!0}),i.forEach(g),this.h()},h(){y(l,"class","visually-hidden"),y(u,"name","guess"),u.disabled=m=!e[15],y(u,"type","hidden"),u.value=_=e[20],y(t,"class","letter svelte-1pg2j5l"),H(t,"exact",e[22]),H(t,"close",e[23]),H(t,"missing",e[24]),H(t,"selected",e[21]),this.first=t},m(f,i){T(f,t,i),A(t,o),A(t,c),A(t,l),r.m(l,null),A(t,a),A(t,u)},p(f,i){e=f,i&1&&s!==(s=e[20]+"")&&te(o,s),h!==(h=b(e))&&(r.d(1),r=h(e),r&&(r.c(),r.m(l,null))),i&8&&m!==(m=!e[15])&&(u.disabled=m),i&1&&_!==(_=e[20])&&(u.value=_),i&1&&H(t,"exact",e[22]),i&1&&H(t,"close",e[23]),i&1&&H(t,"missing",e[24]),i&9&&H(t,"selected",e[21])},d(f){f&&g(t),r.d()}}}function ye(n,e){let t,s,o=e[9]+1+"",c,l,a,u=[],m=new Map,_,b=I(Array.from(Array(5).keys()));const h=r=>r[18];for(let r=0;r<b.length;r+=1){let f=ge(e,b,r),i=h(f);m.set(i,u[r]=be(i,f))}return{key:n,first:null,c(){t=M("h2"),s=N("Row "),c=N(o),l=P(),a=M("div");for(let r=0;r<u.length;r+=1)u[r].c();_=P(),this.h()},l(r){t=W(r,"H2",{class:!0});var f=G(t);s=D(f,"Row "),c=D(f,o),f.forEach(g),l=L(r),a=W(r,"DIV",{class:!0});var i=G(a);for(let p=0;p<u.length;p+=1)u[p].l(i);_=L(i),i.forEach(g),this.h()},h(){y(t,"class","visually-hidden"),y(a,"class","row svelte-1pg2j5l"),H(a,"current",e[15]),this.first=t},m(r,f){T(r,t,f),A(t,s),A(t,c),T(r,l,f),T(r,a,f);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(a,null);A(a,_)},p(r,f){e=r,f&9&&(b=I(Array.from(Array(5).keys())),u=We(u,f,h,1,e,b,m,a,Me,be,_,ge)),f&8&&H(a,"current",e[15])},d(r){r&&(g(t),g(l),g(a));for(let f=0;f<u.length;f+=1)u[f].d()}}}function it(n){let e,t,s,o,c,l,a="back",u,m,_,b=I(["qwertyuiop","asdfghjkl","zxcvbnm"]),h=[];for(let r=0;r<3;r+=1)h[r]=ke(pe(n,b,r));return{c(){e=M("div"),t=M("button"),s=N("enter"),c=P(),l=M("button"),l.textContent=a,u=P();for(let r=0;r<3;r+=1)h[r].c();this.h()},l(r){e=W(r,"DIV",{class:!0});var f=G(e);t=W(f,"BUTTON",{"data-key":!0,class:!0});var i=G(t);s=D(i,"enter"),i.forEach(g),c=L(f),l=W(f,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0,"data-svelte-h":!0}),Q(l)!=="svelte-1ptb1bp"&&(l.textContent=a),u=L(f);for(let p=0;p<3;p+=1)h[p].l(f);f.forEach(g),this.h()},h(){y(t,"data-key","enter"),t.disabled=o=!n[6],y(t,"class","svelte-1pg2j5l"),H(t,"selected",n[6]),y(l,"data-key","backspace"),y(l,"formaction","?/update"),y(l,"name","key"),l.value="backspace",y(l,"class","svelte-1pg2j5l"),y(e,"class","keyboard svelte-1pg2j5l")},m(r,f){T(r,e,f),A(e,t),A(t,s),A(e,c),A(e,l),A(e,u);for(let i=0;i<3;i+=1)h[i]&&h[i].m(e,null);m||(_=ee(l,"click",Ce(n[8])),m=!0)},p(r,f){if(f&64&&o!==(o=!r[6])&&(t.disabled=o),f&64&&H(t,"selected",r[6]),f&301){b=I(["qwertyuiop","asdfghjkl","zxcvbnm"]);let i;for(i=0;i<3;i+=1){const p=pe(r,b,i);h[i]?h[i].p(p,f):(h[i]=ke(p),h[i].c(),h[i].m(e,null))}for(;i<3;i+=1)h[i].d(1)}},d(r){r&&g(e),Te(h,r),m=!1,_()}}}function ct(n){let e,t,s=n[4]?"you won :)":"game over :(",o,c,l=!n[4]&&n[0].answer&&we(n);return{c(){l&&l.c(),e=P(),t=M("button"),o=N(s),c=N(" play again?"),this.h()},l(a){l&&l.l(a),e=L(a),t=W(a,"BUTTON",{"data-key":!0,class:!0,formaction:!0});var u=G(t);o=D(u,s),c=D(u," play again?"),u.forEach(g),this.h()},h(){y(t,"data-key","enter"),y(t,"class","restart selected svelte-1pg2j5l"),y(t,"formaction","?/restart")},m(a,u){l&&l.m(a,u),T(a,e,u),T(a,t,u),A(t,o),A(t,c)},p(a,u){!a[4]&&a[0].answer?l?l.p(a,u):(l=we(a),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),u&16&&s!==(s=a[4]?"you won :)":"game over :(")&&te(o,s)},d(a){a&&(g(e),g(t)),l&&l.d(a)}}}function ve(n){let e,t,s,o,c,l,a;return{c(){e=M("button"),t=N(n[12]),this.h()},l(u){e=W(u,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0,"aria-label":!0});var m=G(e);t=D(m,n[12]),m.forEach(g),this.h()},h(){y(e,"data-key",n[12]),y(e,"class",s=le(n[2][n[12]])+" svelte-1pg2j5l"),e.disabled=o=n[0].guesses[n[3]].length===5,y(e,"formaction","?/update"),y(e,"name","key"),e.value=n[12],y(e,"aria-label",c=n[12]+" "+(n[5][n[12]]||""))},m(u,m){T(u,e,m),A(e,t),l||(a=ee(e,"click",Ce(n[8])),l=!0)},p(u,m){m&4&&s!==(s=le(u[2][u[12]])+" svelte-1pg2j5l")&&y(e,"class",s),m&9&&o!==(o=u[0].guesses[u[3]].length===5)&&(e.disabled=o),m&32&&c!==(c=u[12]+" "+(u[5][u[12]]||""))&&y(e,"aria-label",c)},d(u){u&&g(e),l=!1,a()}}}function ke(n){let e,t,s=I(n[9]),o=[];for(let c=0;c<s.length;c+=1)o[c]=ve(_e(n,s,c));return{c(){e=M("div");for(let c=0;c<o.length;c+=1)o[c].c();t=P(),this.h()},l(c){e=W(c,"DIV",{class:!0});var l=G(e);for(let a=0;a<o.length;a+=1)o[a].l(l);t=L(l),l.forEach(g),this.h()},h(){y(e,"class","row svelte-1pg2j5l")},m(c,l){T(c,e,l);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null);A(e,t)},p(c,l){if(l&301){s=I(c[9]);let a;for(a=0;a<s.length;a+=1){const u=_e(c,s,a);o[a]?o[a].p(u,l):(o[a]=ve(u),o[a].c(),o[a].m(e,t))}for(;a<o.length;a+=1)o[a].d(1);o.length=s.length}},d(c){c&&g(e),Te(o,c)}}}function we(n){let e,t,s=n[0].answer+"",o,c;return{c(){e=M("p"),t=N('the answer was "'),o=N(s),c=N('"')},l(l){e=W(l,"P",{});var a=G(e);t=D(a,'the answer was "'),o=D(a,s),c=D(a,'"'),a.forEach(g)},m(l,a){T(l,e,a),A(e,t),A(e,o),A(e,c)},p(l,a){a&1&&s!==(s=l[0].answer+"")&&te(o,s)},d(l){l&&g(e)}}}function Ee(n){let e,t,s,o;return{c(){e=M("div"),this.h()},l(c){e=W(c,"DIV",{style:!0}),G(e).forEach(g),this.h()},h(){x(e,"position","absolute"),x(e,"left","50%"),x(e,"top","30%")},m(c,l){T(c,e,l),s||(o=Se(t=Ve.call(null,e,{particleCount:n[7]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),s=!0)},p(c,l){t&&De(t.update)&&l&128&&t.update.call(null,{particleCount:c[7]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})},d(c){c&&g(e),s=!1,o()}}}function ut(n){let e,t,s,o="Sverdle",c,l,a,u="How to play",m,_,b=[],h=new Map,r,f,i,p,C,S,E=I(Array.from(Array(6).keys()));const X=d=>d[9];for(let d=0;d<E.length;d+=1){let k=me(n,E,d),j=X(k);h.set(j,b[d]=ye(j,k))}function F(d,k){return d[4]||d[0].answers.length>=6?ct:it}let O=F(n),v=O(n),w=n[4]&&Ee(n);return{c(){e=M("meta"),t=P(),s=M("h1"),s.textContent=o,c=P(),l=M("form"),a=M("a"),a.textContent=u,m=P(),_=M("div");for(let d=0;d<b.length;d+=1)b[d].c();r=P(),f=M("div"),v.c(),i=P(),w&&w.c(),p=oe(),this.h()},l(d){const k=Xe("svelte-18lvto8",K.head);e=W(k,"META",{name:!0,content:!0}),k.forEach(g),t=L(d),s=W(d,"H1",{class:!0,"data-svelte-h":!0}),Q(s)!=="svelte-16hvqlg"&&(s.textContent=o),c=L(d),l=W(d,"FORM",{method:!0,action:!0,class:!0});var j=G(l);a=W(j,"A",{class:!0,href:!0,"data-svelte-h":!0}),Q(a)!=="svelte-1w3fhu3"&&(a.textContent=u),m=L(j),_=W(j,"DIV",{class:!0});var ne=G(_);for(let R=0;R<b.length;R+=1)b[R].l(ne);ne.forEach(g),r=L(j),f=W(j,"DIV",{class:!0});var se=G(f);v.l(se),se.forEach(g),j.forEach(g),i=L(d),w&&w.l(d),p=oe(),this.h()},h(){var d;K.title="Sverdle",y(e,"name","description"),y(e,"content","A Wordle clone written in SvelteKit"),y(s,"class","visually-hidden"),y(a,"class","how-to-play svelte-1pg2j5l"),y(a,"href","/sverdle/how-to-play"),y(_,"class","grid svelte-1pg2j5l"),H(_,"playing",!n[4]),H(_,"bad-guess",(d=n[1])==null?void 0:d.badGuess),y(f,"class","controls svelte-1pg2j5l"),y(l,"method","POST"),y(l,"action","?/enter"),y(l,"class","svelte-1pg2j5l")},m(d,k){A(K.head,e),T(d,t,k),T(d,s,k),T(d,c,k),T(d,l,k),A(l,a),A(l,m),A(l,_);for(let j=0;j<b.length;j+=1)b[j]&&b[j].m(_,null);A(l,r),A(l,f),v.m(f,null),T(d,i,k),w&&w.m(d,k),T(d,p,k),C||(S=[ee(st,"keydown",ft),Se(et.call(null,l,dt))],C=!0)},p(d,[k]){var j;k&9&&(E=I(Array.from(Array(6).keys())),b=We(b,k,X,1,d,E,h,_,Me,ye,null,me)),k&16&&H(_,"playing",!d[4]),k&2&&H(_,"bad-guess",(j=d[1])==null?void 0:j.badGuess),O===(O=F(d))&&v?v.p(d,k):(v.d(1),v=O(d),v&&(v.c(),v.m(f,null))),d[4]?w?w.p(d,k):(w=Ee(d),w.c(),w.m(p.parentNode,p)):w&&(w.d(1),w=null)},i:ae,o:ae,d(d){d&&(g(t),g(s),g(c),g(l),g(i),g(p)),g(e);for(let k=0;k<b.length;k+=1)b[k].d();v.d(),w&&w.d(d),C=!1,Ae(S)}}}function ft(n){var e;n.metaKey||(e=document.querySelector(`[data-key="${n.key}" i]`))==null||e.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}const dt=()=>({update:n})=>{n({reset:!1})};function ht(n,e,t){let s,o,c,l;Ne(n,nt,h=>t(7,l=h));let{data:a}=e,{form:u}=e,m,_;function b(h){const r=a.guesses[o],f=h.target.getAttribute("data-key");f==="backspace"?(t(0,a.guesses[o]=r.slice(0,-1),a),u!=null&&u.badGuess&&t(1,u.badGuess=!1,u)):r.length<5&&t(0,a.guesses[o]+=f,a)}return n.$$set=h=>{"data"in h&&t(0,a=h.data),"form"in h&&t(1,u=h.form)},n.$$.update=()=>{var h;n.$$.dirty&1&&t(4,s=a.answers.at(-1)==="xxxxx"),n.$$.dirty&17&&t(3,o=s?-1:a.answers.length),n.$$.dirty&13&&(t(2,m={}),t(5,_={}),a.answers.forEach((r,f)=>{const i=a.guesses[f];for(let p=0;p<5;p+=1){const C=i[p];r[p]==="x"?(t(2,m[C]="exact",m),t(5,_[C]="correct",_)):m[C]||(t(2,m[C]=r[p]==="c"?"close":"missing",m),t(5,_[C]=r[p]==="c"?"present":"absent",_))}})),n.$$.dirty&9&&t(6,c=((h=a.guesses[o])==null?void 0:h.length)===5)},[a,u,m,o,s,_,c,l,b]}class bt extends Le{constructor(e){super(),Oe(this,e,ht,ut,Ge,{data:0,form:1})}}export{bt as component};