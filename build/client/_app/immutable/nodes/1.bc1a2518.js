import{S as M,i as P,s as T,k as d,a as q,q as k,l as f,m as p,h as o,c as $,r as E,D as w,n as i,b as V,E as r,u as z,I as L,J as B}from"../chunks/index.d1855a2a.js";import{s as F}from"../chunks/singletons.3e1ecf2c.js";import{r as K}from"../chunks/rimbault-transparent.52b4f675.js";const N=()=>{const a=F;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},O={subscribe(a){return N().page.subscribe(a)}};function U(a){let e,s;return{c(){e=d("h2"),s=k("Quelque chose s'est mal passé..."),this.h()},l(t){e=f(t,"H2",{class:!0});var c=p(e);s=E(c,"Quelque chose s'est mal passé..."),c.forEach(o),this.h()},h(){i(e,"class","frankie")},m(t,c){V(t,e,c),r(e,s)},d(t){t&&o(e)}}}function W(a){let e,s;return{c(){e=d("h2"),s=k("Il n'y a (encore) rien ici"),this.h()},l(t){e=f(t,"H2",{class:!0});var c=p(e);s=E(c,"Il n'y a (encore) rien ici"),c.forEach(o),this.h()},h(){i(e,"class","frankie")},m(t,c){V(t,e,c),r(e,s)},d(t){t&&o(e)}}}function X(a){let e,s,t,c,D,l,b,g=a[0].status+"",y,H,v,R,C,I,m,S;function Q(n,h){return n[0].status==404?W:U}let x=Q(a),u=x(a);return{c(){e=d("div"),s=d("div"),t=d("img"),D=q(),l=d("div"),b=d("h1"),y=k(g),H=q(),v=d("h1"),R=k("Ceci est une erreur..."),C=q(),u.c(),I=q(),m=d("a"),S=k("Retour à la page d'accueil"),this.h()},l(n){e=f(n,"DIV",{class:!0});var h=p(e);s=f(h,"DIV",{class:!0});var j=p(s);t=f(j,"IMG",{src:!0,alt:!0}),j.forEach(o),D=$(h),l=f(h,"DIV",{class:!0});var _=p(l);b=f(_,"H1",{class:!0});var A=p(b);y=E(A,g),A.forEach(o),H=$(_),v=f(_,"H1",{class:!0});var G=p(v);R=E(G,"Ceci est une erreur..."),G.forEach(o),C=$(_),u.l(_),I=$(_),m=f(_,"A",{href:!0,title:!0,class:!0});var J=p(m);S=E(J,"Retour à la page d'accueil"),J.forEach(o),_.forEach(o),h.forEach(o),this.h()},h(){w(t.src,c=K)||i(t,"src",c),i(t,"alt","Portrait de Louis Rimbault"),i(s,"class","img-header text-center flex justify-center mt-10"),i(b,"class","frankie text-atl-red"),i(v,"class","frankie"),i(m,"href","/"),i(m,"title","Retour à l'accueil"),i(m,"class","block mt-6"),i(l,"class","text-center mt-10"),i(e,"class","container")},m(n,h){V(n,e,h),r(e,s),r(s,t),r(e,D),r(e,l),r(l,b),r(b,y),r(l,H),r(l,v),r(v,R),r(l,C),u.m(l,null),r(l,I),r(l,m),r(m,S)},p(n,[h]){h&1&&g!==(g=n[0].status+"")&&z(y,g),x!==(x=Q(n))&&(u.d(1),u=x(n),u&&(u.c(),u.m(l,I)))},i:L,o:L,d(n){n&&o(e),u.d()}}}function Y(a,e,s){let t;return B(a,O,c=>s(0,t=c)),[t]}let se=class extends M{constructor(e){super(),P(this,e,Y,X,T,{})}};export{se as component};
