import{S as ne,i as ce,s as he,a as A,k as v,q as L,K as ue,h,c as D,l as p,m as b,r as S,n as c,J as y,b as T,G as n,u as B,H as ee,L as te}from"../chunks/index.07c54cb6.js";function le(i,t,r){const e=i.slice();return e[2]=t[r],e}function ae(i,t,r){const e=i.slice();return e[2]=t[r],e}function se(i){let t,r;return{c(){t=v("a"),this.h()},l(e){t=p(e,"A",{href:!0,class:!0,title:!0});var s=b(t);s.forEach(h),this.h()},h(){c(t,"href",r="/balade-sonore/"+ +i[0].previous.numero),c(t,"class","previous"),c(t,"title","Etape précédente")},m(e,s){T(e,t,s)},p(e,s){s&1&&r!==(r="/balade-sonore/"+ +e[0].previous.numero)&&c(t,"href",r)},d(e){e&&h(t)}}}function re(i){let t,r;return{c(){t=v("a"),this.h()},l(e){t=p(e,"A",{href:!0,class:!0,title:!0});var s=b(t);s.forEach(h),this.h()},h(){c(t,"href",r="/balade-sonore/"+ +i[0].next.numero),c(t,"class","next ml-auto"),c(t,"title","Etape suivante")},m(e,s){T(e,t,s)},p(e,s){s&1&&r!==(r="/balade-sonore/"+ +e[0].next.numero)&&c(t,"href",r)},d(e){e&&h(t)}}}function ie(i){let t,r=i[2]+"",e;return{c(){t=v("p"),e=L(r),this.h()},l(s){t=p(s,"P",{class:!0});var o=b(t);e=S(o,r),o.forEach(h),this.h()},h(){c(t,"class","mb-2")},m(s,o){T(s,t,o),n(t,e)},p(s,o){o&1&&r!==(r=s[2]+"")&&B(e,r)},d(s){s&&h(t)}}}function oe(i){let t,r=i[2]+"",e;return{c(){t=v("p"),e=L(r),this.h()},l(s){t=p(s,"P",{class:!0});var o=b(t);e=S(o,r),o.forEach(h),this.h()},h(){c(t,"class","mb-3")},m(s,o){T(s,t,o),n(t,e)},p(s,o){o&1&&r!==(r=s[2]+"")&&B(e,r)},d(s){s&&h(t)}}}function fe(i){let t,r,e,s,o,j=i[0].ardoise.numero+"",G,F,P,C=i[0].ardoise.titre+"",J,M,g,K,N,E,O,Q,I,R,k,V,W,X;document.title=t=i[0].ardoise.titre+" — L'autre terre libérée";let d=i[0].previous&&se(i),_=i[0].next&&re(i),q=i[0].ardoise.texteArdoise,u=[];for(let a=0;a<q.length;a+=1)u[a]=ie(ae(i,q,a));let w=i[0].ardoise.texteAudio,f=[];for(let a=0;a<w.length;a+=1)f[a]=oe(le(i,w,a));return{c(){r=A(),e=v("div"),s=v("h5"),o=L("Etape "),G=L(j),F=A(),P=v("h1"),J=L(C),M=A(),g=v("audio"),N=A(),E=v("div"),d&&d.c(),O=A(),_&&_.c(),Q=A(),I=v("div");for(let a=0;a<u.length;a+=1)u[a].c();R=A(),k=v("div"),V=v("h5"),W=L("Transcription"),X=A();for(let a=0;a<f.length;a+=1)f[a].c();this.h()},l(a){ue("svelte-16us0vy",document.head).forEach(h),r=D(a),e=p(a,"DIV",{class:!0});var l=b(e);s=p(l,"H5",{class:!0});var x=b(s);o=S(x,"Etape "),G=S(x,j),x.forEach(h),F=D(l),P=p(l,"H1",{class:!0});var Y=b(P);J=S(Y,C),Y.forEach(h),M=D(l),g=p(l,"AUDIO",{src:!0,class:!0}),b(g).forEach(h),N=D(l),E=p(l,"DIV",{class:!0});var U=b(E);d&&d.l(U),O=D(U),_&&_.l(U),U.forEach(h),Q=D(l),I=p(l,"DIV",{class:!0});var Z=b(I);for(let H=0;H<u.length;H+=1)u[H].l(Z);Z.forEach(h),R=D(l),k=p(l,"DIV",{class:!0});var z=b(k);V=p(z,"H5",{class:!0});var $=b(V);W=S($,"Transcription"),$.forEach(h),X=D(z);for(let H=0;H<f.length;H+=1)f[H].l(z);z.forEach(h),l.forEach(h),this.h()},h(){c(s,"class","frankie text-2xl mt-6"),c(P,"class","frankie text-4xl mb-6"),g.controls=!0,y(g.src,K=i[1])||c(g,"src",K),c(g,"class","w-full mb-6"),c(E,"class","balade-nav flex justify-between frankie text-4xl mt-8 mb-8 ml-3 mr-3"),c(I,"class","texteArdoise text-lg lg:text-2xl mb-6"),c(V,"class","frankie text-2xl mb-6"),c(k,"class","texteAudio text-base lg:text-xl"),c(e,"class","max-w-screen-lg m-auto pl-6 pr-6")},m(a,m){T(a,r,m),T(a,e,m),n(e,s),n(s,o),n(s,G),n(e,F),n(e,P),n(P,J),n(e,M),n(e,g),n(e,N),n(e,E),d&&d.m(E,null),n(E,O),_&&_.m(E,null),n(e,Q),n(e,I);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(I,null);n(e,R),n(e,k),n(k,V),n(V,W),n(k,X);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(k,null)},p(a,[m]){if(m&1&&t!==(t=a[0].ardoise.titre+" — L'autre terre libérée")&&(document.title=t),m&1&&j!==(j=a[0].ardoise.numero+"")&&B(G,j),m&1&&C!==(C=a[0].ardoise.titre+"")&&B(J,C),m&2&&!y(g.src,K=a[1])&&c(g,"src",K),a[0].previous?d?d.p(a,m):(d=se(a),d.c(),d.m(E,O)):d&&(d.d(1),d=null),a[0].next?_?_.p(a,m):(_=re(a),_.c(),_.m(E,null)):_&&(_.d(1),_=null),m&1){q=a[0].ardoise.texteArdoise;let l;for(l=0;l<q.length;l+=1){const x=ae(a,q,l);u[l]?u[l].p(x,m):(u[l]=ie(x),u[l].c(),u[l].m(I,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=q.length}if(m&1){w=a[0].ardoise.texteAudio;let l;for(l=0;l<w.length;l+=1){const x=le(a,w,l);f[l]?f[l].p(x,m):(f[l]=oe(x),f[l].c(),f[l].m(k,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=w.length}},i:ee,o:ee,d(a){a&&h(r),a&&h(e),d&&d.d(),_&&_.d(),te(u,a),te(f,a)}}}function de(i,t,r){let e,{data:s}=t;return i.$$set=o=>{"data"in o&&r(0,s=o.data)},i.$$.update=()=>{i.$$.dirty&1&&r(1,e="/audio/"+s.ardoise.numero+".mp3")},[s,e]}class me extends ne{constructor(t){super(),ce(this,t,de,fe,he,{data:0})}}export{me as component};
