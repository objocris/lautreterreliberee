import{S as ne,i as ce,s as he,a as x,k as m,q as O,K as ue,h as n,c as A,l as v,m as p,r as U,n as o,J as $,b as P,G as c,u as y,H as ee,L as te}from"../chunks/index.07c54cb6.js";import"../chunks/singletons.34e4cff2.js";function le(i,t,s){const e=i.slice();return e[2]=t[s],e}function ae(i,t,s){const e=i.slice();return e[2]=t[s],e}function re(i){let t,s;return{c(){t=m("a"),this.h()},l(e){t=v(e,"A",{href:!0,class:!0,title:!0});var r=p(t);r.forEach(n),this.h()},h(){o(t,"href",s="/balade-sonore/"+ +i[0].previous.numero),o(t,"class","previous"),o(t,"title","Etape précédente")},m(e,r){P(e,t,r)},p(e,r){r&1&&s!==(s="/balade-sonore/"+ +e[0].previous.numero)&&o(t,"href",s)},d(e){e&&n(t)}}}function se(i){let t,s;return{c(){t=m("a"),this.h()},l(e){t=v(e,"A",{href:!0,class:!0,title:!0});var r=p(t);r.forEach(n),this.h()},h(){o(t,"href",s="/balade-sonore/"+ +i[0].next.numero),o(t,"class","next ml-auto"),o(t,"title","Etape suivante")},m(e,r){P(e,t,r)},p(e,r){r&1&&s!==(s="/balade-sonore/"+ +e[0].next.numero)&&o(t,"href",s)},d(e){e&&n(t)}}}function ie(i){let t,s=i[2]+"";return{c(){t=m("p"),this.h()},l(e){t=v(e,"P",{class:!0});var r=p(t);r.forEach(n),this.h()},h(){o(t,"class","mb-2")},m(e,r){P(e,t,r),t.innerHTML=s},p(e,r){r&1&&s!==(s=e[2]+"")&&(t.innerHTML=s)},d(e){e&&n(t)}}}function oe(i){let t,s=i[2]+"";return{c(){t=m("p"),this.h()},l(e){t=v(e,"P",{class:!0});var r=p(t);r.forEach(n),this.h()},h(){o(t,"class","mb-3")},m(e,r){P(e,t,r),t.innerHTML=s},p(e,r){r&1&&s!==(s=e[2]+"")&&(t.innerHTML=s)},d(e){e&&n(t)}}}function fe(i){let t,s,e,r,T,V=i[0].ardoise.numero+"",S,z,w,q=i[0].ardoise.titre+"",j,B,b,C,F,g,G,N,H,Q,E,D,R,W;document.title=t=i[0].ardoise.titre+" — L'autre terre libérée";let f=i[0].previous&&re(i),d=i[0].next&&se(i),I=i[0].ardoise.texteArdoise,h=[];for(let a=0;a<I.length;a+=1)h[a]=ie(ae(i,I,a));let M=i[0].ardoise.texteAudio,u=[];for(let a=0;a<M.length;a+=1)u[a]=oe(le(i,M,a));return{c(){s=x(),e=m("div"),r=m("h5"),T=O("Ardoise "),S=O(V),z=x(),w=m("h1"),j=O(q),B=x(),b=m("audio"),F=x(),g=m("div"),f&&f.c(),G=x(),d&&d.c(),N=x(),H=m("div");for(let a=0;a<h.length;a+=1)h[a].c();Q=x(),E=m("div"),D=m("h5"),R=O("Transcription"),W=x();for(let a=0;a<u.length;a+=1)u[a].c();this.h()},l(a){ue("svelte-16us0vy",document.head).forEach(n),s=A(a),e=v(a,"DIV",{class:!0});var l=p(e);r=v(l,"H5",{class:!0});var k=p(r);T=U(k,"Ardoise "),S=U(k,V),k.forEach(n),z=A(l),w=v(l,"H1",{class:!0});var X=p(w);j=U(X,q),X.forEach(n),B=A(l),b=v(l,"AUDIO",{src:!0,class:!0}),p(b).forEach(n),F=A(l),g=v(l,"DIV",{class:!0});var J=p(g);f&&f.l(J),G=A(J),d&&d.l(J),J.forEach(n),N=A(l),H=v(l,"DIV",{class:!0});var Y=p(H);for(let L=0;L<h.length;L+=1)h[L].l(Y);Y.forEach(n),Q=A(l),E=v(l,"DIV",{class:!0});var K=p(E);D=v(K,"H5",{class:!0});var Z=p(D);R=U(Z,"Transcription"),Z.forEach(n),W=A(K);for(let L=0;L<u.length;L+=1)u[L].l(K);K.forEach(n),l.forEach(n),this.h()},h(){o(r,"class","frankie text-2xl mt-6"),o(w,"class","frankie text-4xl mb-6"),b.controls=!0,$(b.src,C=i[1])||o(b,"src",C),o(b,"class","w-full mb-6"),o(g,"class","balade-nav flex justify-between frankie text-4xl mt-8 mb-8 ml-3 mr-3"),o(H,"class","texteArdoise text-lg lg:text-2xl mb-6"),o(D,"class","frankie text-2xl mb-6"),o(E,"class","texteAudio text-base lg:text-xl"),o(e,"class","max-w-screen-lg m-auto pl-6 pr-6")},m(a,_){P(a,s,_),P(a,e,_),c(e,r),c(r,T),c(r,S),c(e,z),c(e,w),c(w,j),c(e,B),c(e,b),c(e,F),c(e,g),f&&f.m(g,null),c(g,G),d&&d.m(g,null),c(e,N),c(e,H);for(let l=0;l<h.length;l+=1)h[l]&&h[l].m(H,null);c(e,Q),c(e,E),c(E,D),c(D,R),c(E,W);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(E,null)},p(a,[_]){if(_&1&&t!==(t=a[0].ardoise.titre+" — L'autre terre libérée")&&(document.title=t),_&1&&V!==(V=a[0].ardoise.numero+"")&&y(S,V),_&1&&q!==(q=a[0].ardoise.titre+"")&&y(j,q),_&2&&!$(b.src,C=a[1])&&o(b,"src",C),a[0].previous?f?f.p(a,_):(f=re(a),f.c(),f.m(g,G)):f&&(f.d(1),f=null),a[0].next?d?d.p(a,_):(d=se(a),d.c(),d.m(g,null)):d&&(d.d(1),d=null),_&1){I=a[0].ardoise.texteArdoise;let l;for(l=0;l<I.length;l+=1){const k=ae(a,I,l);h[l]?h[l].p(k,_):(h[l]=ie(k),h[l].c(),h[l].m(H,null))}for(;l<h.length;l+=1)h[l].d(1);h.length=I.length}if(_&1){M=a[0].ardoise.texteAudio;let l;for(l=0;l<M.length;l+=1){const k=le(a,M,l);u[l]?u[l].p(k,_):(u[l]=oe(k),u[l].c(),u[l].m(E,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=M.length}},i:ee,o:ee,d(a){a&&n(s),a&&n(e),f&&f.d(),d&&d.d(),te(h,a),te(u,a)}}}function de(i,t,s){let e,{data:r}=t;return i.$$set=T=>{"data"in T&&s(0,r=T.data)},i.$$.update=()=>{i.$$.dirty&1&&s(1,e="/audio/"+r.ardoise.numero+".mp3")},[r,e]}class ve extends ne{constructor(t){super(),ce(this,t,de,fe,he,{data:0})}}export{ve as component};
