import{S as ne,i as ce,s as he,a as A,k as p,q as S,K as fe,h,c as D,l as b,m as g,r as T,n as c,J as y,b as j,G as n,u as B,H as ee,L as te}from"../chunks/index.07c54cb6.js";function le(i,t,r){const e=i.slice();return e[2]=t[r],e}function ae(i,t,r){const e=i.slice();return e[2]=t[r],e}function se(i){let t,r;return{c(){t=p("a"),this.h()},l(e){t=b(e,"A",{href:!0,class:!0,title:!0});var s=g(t);s.forEach(h),this.h()},h(){c(t,"href",r="/balade-sonore/"+ +i[0].previous.numero),c(t,"class","previous"),c(t,"title","Etape précédente")},m(e,s){j(e,t,s)},p(e,s){s&1&&r!==(r="/balade-sonore/"+ +e[0].previous.numero)&&c(t,"href",r)},d(e){e&&h(t)}}}function re(i){let t,r;return{c(){t=p("a"),this.h()},l(e){t=b(e,"A",{href:!0,class:!0,title:!0});var s=g(t);s.forEach(h),this.h()},h(){c(t,"href",r="/balade-sonore/"+ +i[0].next.numero),c(t,"class","next"),c(t,"title","Etape suivante")},m(e,s){j(e,t,s)},p(e,s){s&1&&r!==(r="/balade-sonore/"+ +e[0].next.numero)&&c(t,"href",r)},d(e){e&&h(t)}}}function ie(i){let t,r=i[2]+"",e;return{c(){t=p("p"),e=S(r),this.h()},l(s){t=b(s,"P",{class:!0});var o=g(t);e=T(o,r),o.forEach(h),this.h()},h(){c(t,"class","mb-2")},m(s,o){j(s,t,o),n(t,e)},p(s,o){o&1&&r!==(r=s[2]+"")&&B(e,r)},d(s){s&&h(t)}}}function oe(i){let t,r=i[2]+"",e;return{c(){t=p("p"),e=S(r),this.h()},l(s){t=b(s,"P",{class:!0});var o=g(t);e=T(o,r),o.forEach(h),this.h()},h(){c(t,"class","mb-3")},m(s,o){j(s,t,o),n(t,e)},p(s,o){o&1&&r!==(r=s[2]+"")&&B(e,r)},d(s){s&&h(t)}}}function ue(i){let t,r,e,s,o,C=i[0].ardoise.numero+"",J,F,P,G=i[0].ardoise.titre+"",K,M,v,O,E,U,N,Q,I,R,k,V,W,X;document.title=t=i[0].ardoise.titre+" — L'autre terre libérée";let d=i[0].previous&&se(i),_=i[0].next&&re(i),q=i[0].ardoise.texteArdoise,f=[];for(let a=0;a<q.length;a+=1)f[a]=ie(ae(i,q,a));let w=i[0].ardoise.texteAudio,u=[];for(let a=0;a<w.length;a+=1)u[a]=oe(le(i,w,a));return{c(){r=A(),e=p("div"),s=p("h5"),o=S("Etape "),J=S(C),F=A(),P=p("h1"),K=S(G),M=A(),v=p("div"),d&&d.c(),O=A(),E=p("audio"),N=A(),_&&_.c(),Q=A(),I=p("div");for(let a=0;a<f.length;a+=1)f[a].c();R=A(),k=p("div"),V=p("h5"),W=S("Transcription"),X=A();for(let a=0;a<u.length;a+=1)u[a].c();this.h()},l(a){fe("svelte-16us0vy",document.head).forEach(h),r=D(a),e=b(a,"DIV",{class:!0});var l=g(e);s=b(l,"H5",{class:!0});var x=g(s);o=T(x,"Etape "),J=T(x,C),x.forEach(h),F=D(l),P=b(l,"H1",{class:!0});var Y=g(P);K=T(Y,G),Y.forEach(h),M=D(l),v=b(l,"DIV",{class:!0});var L=g(v);d&&d.l(L),O=D(L),E=b(L,"AUDIO",{src:!0,class:!0}),g(E).forEach(h),N=D(L),_&&_.l(L),L.forEach(h),Q=D(l),I=b(l,"DIV",{class:!0});var Z=g(I);for(let H=0;H<f.length;H+=1)f[H].l(Z);Z.forEach(h),R=D(l),k=b(l,"DIV",{class:!0});var z=g(k);V=b(z,"H5",{class:!0});var $=g(V);W=T($,"Transcription"),$.forEach(h),X=D(z);for(let H=0;H<u.length;H+=1)u[H].l(z);z.forEach(h),l.forEach(h),this.h()},h(){c(s,"class","frankie text-2xl mt-6"),c(P,"class","frankie text-4xl mb-6"),E.controls=!0,y(E.src,U=i[1])||c(E,"src",U),c(E,"class","w-full ml-4 mr-4"),c(v,"class","balade-nav flex justify-between frankie text-4xl mt-6 mb-6"),c(I,"class","texteArdoise text-lg lg:text-2xl mb-6"),c(V,"class","frankie text-2xl mb-6"),c(k,"class","texteAudio text-base lg:text-xl"),c(e,"class","max-w-screen-lg m-auto pl-6 pr-6")},m(a,m){j(a,r,m),j(a,e,m),n(e,s),n(s,o),n(s,J),n(e,F),n(e,P),n(P,K),n(e,M),n(e,v),d&&d.m(v,null),n(v,O),n(v,E),n(v,N),_&&_.m(v,null),n(e,Q),n(e,I);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(I,null);n(e,R),n(e,k),n(k,V),n(V,W),n(k,X);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(k,null)},p(a,[m]){if(m&1&&t!==(t=a[0].ardoise.titre+" — L'autre terre libérée")&&(document.title=t),m&1&&C!==(C=a[0].ardoise.numero+"")&&B(J,C),m&1&&G!==(G=a[0].ardoise.titre+"")&&B(K,G),a[0].previous?d?d.p(a,m):(d=se(a),d.c(),d.m(v,O)):d&&(d.d(1),d=null),m&2&&!y(E.src,U=a[1])&&c(E,"src",U),a[0].next?_?_.p(a,m):(_=re(a),_.c(),_.m(v,null)):_&&(_.d(1),_=null),m&1){q=a[0].ardoise.texteArdoise;let l;for(l=0;l<q.length;l+=1){const x=ae(a,q,l);f[l]?f[l].p(x,m):(f[l]=ie(x),f[l].c(),f[l].m(I,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=q.length}if(m&1){w=a[0].ardoise.texteAudio;let l;for(l=0;l<w.length;l+=1){const x=le(a,w,l);u[l]?u[l].p(x,m):(u[l]=oe(x),u[l].c(),u[l].m(k,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=w.length}},i:ee,o:ee,d(a){a&&h(r),a&&h(e),d&&d.d(),_&&_.d(),te(f,a),te(u,a)}}}function de(i,t,r){let e,{data:s}=t;return i.$$set=o=>{"data"in o&&r(0,s=o.data)},i.$$.update=()=>{i.$$.dirty&1&&r(1,e="/audio/"+s.ardoise.numero+".mp3")},[s,e]}class me extends ne{constructor(t){super(),ce(this,t,de,ue,he,{data:0})}}export{me as component};
