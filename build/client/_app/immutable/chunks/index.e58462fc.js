function w(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(q)}function D(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function dt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function R(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t,e,n){t.$$.on_destroy.push(G(e,n))}function ht(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function pt(t,e,n,i,r,s){if(r){const c=O(e,n,i,s);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function bt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}const I=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in I;let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:Q(1,r,b=>e[n[b]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const s=[],c=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(s.push(e[o-1]);u>=o;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);s.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<s.length&&c[o].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(c[o],f)}}function V(t,e){if(v){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function xt(t,e,n){v&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function wt(){return A(" ")}function vt(){return A("")}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t,e){for(const n in e)tt(t,n,e[n])}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){nt(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const o=n(u);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const o=n(u);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function H(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Nt(t,e,n){return H(t,e,n,Y)}function St(t,e,n){return H(t,e,n,Z)}function it(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function kt(t){return it(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Mt(t,e,n){t.classList[n?"add":"remove"](e)}function Tt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ct(t,e){return new t(e)}let y;function p(t){y=t}function P(){if(!y)throw new Error("Function called outside component initialization");return y}function qt(t){P().$$.on_mount.push(t)}function Dt(t){P().$$.after_update.push(t)}const h=[],C=[];let m=[];const N=[],W=Promise.resolve();let S=!1;function L(){S||(S=!0,W.then(z))}function Ot(){return L(),W}function k(t){m.push(t)}function Bt(t){N.push(t)}const E=new Set;let _=0;function z(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),rt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();S=!1,E.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}function ot(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Ht(){d={r:0,c:[],p:d}}function Pt(){d.r||g(d.c),d=d.p}function ct(t,e){t&&t.i&&($.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Lt(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=e[s];if(u){for(const o in c)o in u||(i[o]=1);for(const o in u)r[o]||(n[o]=u[o],r[o]=1);t[s]=u}else for(const o in c)r[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function zt(t){return typeof t=="object"&&t!==null?t:{}}const ut=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ut];function Ft(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Rt(t){t&&t.c()}function Gt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||k(()=>{const c=t.$$.on_mount.map(q).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),s.forEach(k)}function st(t,e){const n=t.$$;n.fragment!==null&&(ot(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(h.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function It(t,e,n,i,r,s,c,u=[-1]){const o=y;p(t);const l=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,b,...j)=>{const M=j.length?j[0]:b;return l.ctx&&r(l.ctx[a],l.ctx[a]=M)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](M),f&&at(t,a)),b}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){J();const a=et(e.target);l.fragment&&l.fragment.l(a),a.forEach(X)}else l.fragment&&l.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),K(),z()}p(o)}class Jt{$destroy(){st(this,1),this.$destroy=w}$on(e,n){if(!D(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{lt as A,st as B,ht as C,pt as D,yt as E,mt as F,V as G,w as H,_t as I,dt as J,Tt as K,$t as L,Z as M,St as N,F as O,Et as P,Mt as Q,Lt as R,Jt as S,bt as T,gt as U,zt as V,Ft as W,Bt as X,wt as a,xt as b,kt as c,Wt as d,vt as e,Pt as f,ct as g,X as h,It as i,Dt as j,Y as k,Nt as l,et as m,tt as n,qt as o,jt as p,A as q,it as r,ft as s,Ot as t,At as u,Ht as v,C as w,Ct as x,Rt as y,Gt as z};
