import{S as jt,i as St,s as Rt,K as Dt,L as Bt,m as _,h as l,b as d,I as wl,C as qa,M as re,N as Ye,O as R,F as Ta,G as Pa,H as Na,P as It,g as T,d as j,Q as wt,R as Ca,y as G,z as W,A as K,T as ja,B as X,e as ie,v as Ma,f as ya,a as A,c as q,U as wa,w as Sa,V as Ra,W as Da,k as p,q as x,X as Ba,l as h,r as E,n as u,D as pa,E as c}from"../chunks/index.07a12486.js";import{r as ha}from"../chunks/rimbault-transparent.52b4f675.js";const yt=""+new URL("../assets/affiche-sanstexte.277287d8.png",import.meta.url).href;function Ia(o){let t;return{c(){t=Dt("g")},l(n){t=Bt(n,"g",{});var r=_(t);r.forEach(l)},m(n,r){d(n,t,r),t.innerHTML=o[0]},p(n,[r]){r&1&&(t.innerHTML=n[0])},i:wl,o:wl,d(n){n&&l(t)}}}function Ha(o,t,n){let r=870711;function a(){return r+=1,`fa-${r.toString(16)}`}let i="",{data:s}=t;function v(b){if(!b||!b.raw)return"";let m=b.raw;const k={};return m=m.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(M,P)=>{const N=a();return k[P]=N,` id="${N}"`}),m=m.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(M,P,N,S)=>{const C=P||S;return!C||!k[C]?M:`#${k[C]}`}),m}return o.$$set=b=>{"data"in b&&n(1,s=b.data)},o.$$.update=()=>{o.$$.dirty&2&&n(0,i=v(s))},[i,s]}class za extends jt{constructor(t){super(),St(this,t,Ha,Ia,Rt,{data:1})}}function Ua(o){let t,n,r,a;const i=o[12].default,s=qa(i,o,o[11],null);let v=[{version:"1.1"},{class:n="fa-icon "+o[0]},{width:o[1]},{height:o[2]},{"aria-label":o[9]},{role:r=o[9]?"img":"presentation"},{viewBox:o[3]},{style:o[8]},o[10]],b={};for(let m=0;m<v.length;m+=1)b=re(b,v[m]);return{c(){t=Dt("svg"),s&&s.c(),this.h()},l(m){t=Bt(m,"svg",{version:!0,class:!0,width:!0,height:!0,"aria-label":!0,role:!0,viewBox:!0,style:!0});var k=_(t);s&&s.l(k),k.forEach(l),this.h()},h(){Ye(t,b),R(t,"fa-spin",o[4]),R(t,"fa-pulse",o[6]),R(t,"fa-inverse",o[5]),R(t,"fa-flip-horizontal",o[7]==="horizontal"),R(t,"fa-flip-vertical",o[7]==="vertical"),R(t,"svelte-1mc5hvj",!0)},m(m,k){d(m,t,k),s&&s.m(t,null),a=!0},p(m,[k]){s&&s.p&&(!a||k&2048)&&Ta(s,i,m,m[11],a?Na(i,m[11],k,null):Pa(m[11]),null),Ye(t,b=It(v,[{version:"1.1"},(!a||k&1&&n!==(n="fa-icon "+m[0]))&&{class:n},(!a||k&2)&&{width:m[1]},(!a||k&4)&&{height:m[2]},(!a||k&512)&&{"aria-label":m[9]},(!a||k&512&&r!==(r=m[9]?"img":"presentation"))&&{role:r},(!a||k&8)&&{viewBox:m[3]},(!a||k&256)&&{style:m[8]},k&1024&&m[10]])),R(t,"fa-spin",m[4]),R(t,"fa-pulse",m[6]),R(t,"fa-inverse",m[5]),R(t,"fa-flip-horizontal",m[7]==="horizontal"),R(t,"fa-flip-vertical",m[7]==="vertical"),R(t,"svelte-1mc5hvj",!0)},i(m){a||(T(s,m),a=!0)},o(m){j(s,m),a=!1},d(m){m&&l(t),s&&s.d(m)}}}function Va(o,t,n){const r=["class","width","height","box","spin","inverse","pulse","flip","style","label"];let a=wt(t,r),{$$slots:i={},$$scope:s}=t,{class:v=""}=t,{width:b}=t,{height:m}=t,{box:k="0 0 0 0"}=t,{spin:M=!1}=t,{inverse:P=!1}=t,{pulse:N=!1}=t,{flip:S="none"}=t,{style:C=""}=t,{label:y=""}=t;return o.$$set=L=>{t=re(re({},t),Ca(L)),n(10,a=wt(t,r)),"class"in L&&n(0,v=L.class),"width"in L&&n(1,b=L.width),"height"in L&&n(2,m=L.height),"box"in L&&n(3,k=L.box),"spin"in L&&n(4,M=L.spin),"inverse"in L&&n(5,P=L.inverse),"pulse"in L&&n(6,N=L.pulse),"flip"in L&&n(7,S=L.flip),"style"in L&&n(8,C=L.style),"label"in L&&n(9,y=L.label),"$$scope"in L&&n(11,s=L.$$scope)},[v,b,m,k,M,P,N,S,C,y,a,s,i]}class Fa extends jt{constructor(t){super(),St(this,t,Va,Ua,Rt,{class:0,width:1,height:2,box:3,spin:4,inverse:5,pulse:6,flip:7,style:8,label:9})}}function ba(o,t,n){const r=o.slice();return r[24]=t[n],r}function va(o,t,n){const r=o.slice();return r[27]=t[n],r}function _a(o){let t,n,r,a,i=o[6].paths&&ga(o),s=o[6].polygons&&Ea(o),v=o[6].raw&&La(o);return{c(){i&&i.c(),t=A(),s&&s.c(),n=A(),v&&v.c(),r=ie()},l(b){i&&i.l(b),t=q(b),s&&s.l(b),n=q(b),v&&v.l(b),r=ie()},m(b,m){i&&i.m(b,m),d(b,t,m),s&&s.m(b,m),d(b,n,m),v&&v.m(b,m),d(b,r,m),a=!0},p(b,m){b[6].paths?i?i.p(b,m):(i=ga(b),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null),b[6].polygons?s?s.p(b,m):(s=Ea(b),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null),b[6].raw?v?(v.p(b,m),m&64&&T(v,1)):(v=La(b),v.c(),T(v,1),v.m(r.parentNode,r)):v&&(Ma(),j(v,1,1,()=>{v=null}),ya())},i(b){a||(T(v),a=!0)},o(b){j(v),a=!1},d(b){i&&i.d(b),b&&l(t),s&&s.d(b),b&&l(n),v&&v.d(b),b&&l(r)}}}function ga(o){let t,n=o[6].paths,r=[];for(let a=0;a<n.length;a+=1)r[a]=xa(va(o,n,a));return{c(){for(let a=0;a<r.length;a+=1)r[a].c();t=ie()},l(a){for(let i=0;i<r.length;i+=1)r[i].l(a);t=ie()},m(a,i){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(a,i);d(a,t,i)},p(a,i){if(i&64){n=a[6].paths;let s;for(s=0;s<n.length;s+=1){const v=va(a,n,s);r[s]?r[s].p(v,i):(r[s]=xa(v),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(a){wa(r,a),a&&l(t)}}}function xa(o){let t,n=[o[27]],r={};for(let a=0;a<n.length;a+=1)r=re(r,n[a]);return{c(){t=Dt("path"),this.h()},l(a){t=Bt(a,"path",{}),_(t).forEach(l),this.h()},h(){Ye(t,r)},m(a,i){d(a,t,i)},p(a,i){Ye(t,r=It(n,[i&64&&a[27]]))},d(a){a&&l(t)}}}function Ea(o){let t,n=o[6].polygons,r=[];for(let a=0;a<n.length;a+=1)r[a]=ka(ba(o,n,a));return{c(){for(let a=0;a<r.length;a+=1)r[a].c();t=ie()},l(a){for(let i=0;i<r.length;i+=1)r[i].l(a);t=ie()},m(a,i){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(a,i);d(a,t,i)},p(a,i){if(i&64){n=a[6].polygons;let s;for(s=0;s<n.length;s+=1){const v=ba(a,n,s);r[s]?r[s].p(v,i):(r[s]=ka(v),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(a){wa(r,a),a&&l(t)}}}function ka(o){let t,n=[o[24]],r={};for(let a=0;a<n.length;a+=1)r=re(r,n[a]);return{c(){t=Dt("polygon"),this.h()},l(a){t=Bt(a,"polygon",{}),_(t).forEach(l),this.h()},h(){Ye(t,r)},m(a,i){d(a,t,i)},p(a,i){Ye(t,r=It(n,[i&64&&a[24]]))},d(a){a&&l(t)}}}function La(o){let t,n,r;function a(s){o[16](s)}let i={};return o[6]!==void 0&&(i.data=o[6]),t=new za({props:i}),Sa.push(()=>Ra(t,"data",a)),{c(){G(t.$$.fragment)},l(s){W(t.$$.fragment,s)},m(s,v){K(t,s,v),r=!0},p(s,v){const b={};!n&&v&64&&(n=!0,b.data=s[6],Da(()=>n=!1)),t.$set(b)},i(s){r||(T(t.$$.fragment,s),r=!0)},o(s){j(t.$$.fragment,s),r=!1},d(s){X(t,s)}}}function Qa(o){let t,n,r=o[6]&&_a(o);return{c(){r&&r.c(),t=ie()},l(a){r&&r.l(a),t=ie()},m(a,i){r&&r.m(a,i),d(a,t,i),n=!0},p(a,i){a[6]?r?(r.p(a,i),i&64&&T(r,1)):(r=_a(a),r.c(),T(r,1),r.m(t.parentNode,t)):r&&(Ma(),j(r,1,1,()=>{r=null}),ya())},i(a){n||(T(r),n=!0)},o(a){j(r),n=!1},d(a){r&&r.d(a),a&&l(t)}}}function Oa(o){let t;const n=o[15].default,r=qa(n,o,o[17],null),a=r||Qa(o);return{c(){a&&a.c()},l(i){a&&a.l(i)},m(i,s){a&&a.m(i,s),t=!0},p(i,s){r?r.p&&(!t||s&131072)&&Ta(r,n,i,i[17],t?Na(n,i[17],s,null):Pa(i[17]),null):a&&a.p&&(!t||s&64)&&a.p(i,t?s:-1)},i(i){t||(T(a,i),t=!0)},o(i){j(a,i),t=!1},d(i){a&&a.d(i)}}}function Ga(o){let t,n;const r=[{label:o[5]},{width:o[7]},{height:o[8]},{box:o[10]},{style:o[9]},{spin:o[1]},{flip:o[4]},{inverse:o[2]},{pulse:o[3]},{class:o[0]},o[11]];let a={$$slots:{default:[Oa]},$$scope:{ctx:o}};for(let i=0;i<r.length;i+=1)a=re(a,r[i]);return t=new Fa({props:a}),{c(){G(t.$$.fragment)},l(i){W(t.$$.fragment,i)},m(i,s){K(t,i,s),n=!0},p(i,[s]){const v=s&4031?It(r,[s&32&&{label:i[5]},s&128&&{width:i[7]},s&256&&{height:i[8]},s&1024&&{box:i[10]},s&512&&{style:i[9]},s&2&&{spin:i[1]},s&16&&{flip:i[4]},s&4&&{inverse:i[2]},s&8&&{pulse:i[3]},s&1&&{class:i[0]},s&2048&&ja(i[11])]):{};s&131136&&(v.$$scope={dirty:s,ctx:i}),t.$set(v)},i(i){n||(T(t.$$.fragment,i),n=!0)},o(i){j(t.$$.fragment,i),n=!1},d(i){X(t,i)}}}let Aa=1;function Wa(o){let t,n;if(o)if("definition"in o){console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");return}else if("iconName"in o&&"icon"in o){t=o.iconName;let r=[];const[a,i,,,s]=o.icon;Array.isArray(s)?r=s:r=[s],n={width:a,height:i,paths:r.map(v=>({d:v}))}}else t=Object.keys(o)[0],n=o[t];else return;return n}function Ka(o,t,n){const r=["class","data","scale","spin","inverse","pulse","flip","label","style"];let a=wt(t,r),{$$slots:i={},$$scope:s}=t,{class:v=""}=t,{data:b}=t,m,{scale:k=1}=t,{spin:M=!1}=t,{inverse:P=!1}=t,{pulse:N=!1}=t,{flip:S=void 0}=t,{label:C=""}=t,{style:y=""}=t,L=10,B=10,U,V;function I(){let g=1;return typeof k<"u"&&(g=Number(k)),isNaN(g)||g<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),Aa):g*Aa}function Ge(){return m?`0 0 ${m.width} ${m.height}`:`0 0 ${L} ${B}`}function H(){return m?Math.max(m.width,m.height)/16:1}function F(){return m?m.width/H()*I():0}function Ze(){return m?m.height/H()*I():0}function We(){let g="";y!==null&&(g+=y);let Ke=I();return Ke===1?g.length===0?"":g:(g!==""&&!g.endsWith(";")&&(g+="; "),`${g}font-size: ${Ke}em`)}function D(g){m=g,n(6,m),n(12,b),n(14,y),n(13,k)}return o.$$set=g=>{t=re(re({},t),Ca(g)),n(11,a=wt(t,r)),"class"in g&&n(0,v=g.class),"data"in g&&n(12,b=g.data),"scale"in g&&n(13,k=g.scale),"spin"in g&&n(1,M=g.spin),"inverse"in g&&n(2,P=g.inverse),"pulse"in g&&n(3,N=g.pulse),"flip"in g&&n(4,S=g.flip),"label"in g&&n(5,C=g.label),"style"in g&&n(14,y=g.style),"$$scope"in g&&n(17,s=g.$$scope)},o.$$.update=()=>{o.$$.dirty&28672&&(n(6,m=Wa(b)),n(7,L=F()),n(8,B=Ze()),n(9,U=We()),n(10,V=Ge()))},[v,M,P,N,S,C,m,L,B,U,V,a,b,k,y,i,D,s]}class Qe extends jt{constructor(t){super(),St(this,t,Ka,Ga,Rt,{class:0,data:12,scale:13,spin:1,inverse:2,pulse:3,flip:4,label:5,style:14})}}const Oe={map:{width:1792,height:1792,paths:[{d:"M512 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zM1760 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zM640 0q8 0 14 3l512 256q18 10 18 29v1472q0 13-9.5 22.5t-22.5 9.5q-8 0-14-3l-512-256q-18-10-18-29v-1472q0-13 9.5-22.5t22.5-9.5z"}]}},Xa=""+new URL("../assets/champ-libre-2023.9a3989b1.pdf",import.meta.url).href;function Ja(o){let t,n,r,a,i,s,v,b,m,k,M,P,N,S,C,y,L,B,U,V,I,Ge,H,F,Ze,We,D,g,Ke,Ht,$e,ne,J,zt,et,ue,Ut,tt,Q,Y,Vt,Ft,oe,fe,lt,ce,Qt,at,w,Ot,me,Gt,Wt,de,Kt,Xt,pe,Jt,Yt,he,Zt,$t,st,be,el,rt,ve,tl,it,Z,ll,_e,ge,nt,$,al,Xe,sl,ut,O,rl,Je,il,nl,ot,xe,ul,ft,Ee,ol,ct,ee,fl,ke,Le,mt,Ae,cl,dt,qe,ml,pt,te,dl,Te,Pe,ht,Ne,pl,bt,Ce,hl,vt,le,bl,Me,ye,_t,we,vl,gt,je,_l,xt,ae,gl,Se,Re,Et,De,xl,kt,Be,El,Lt,se,kl,Ie,He,At,ze,Ll,qt,Ue,Al,Tt,Ve,Fe,jl,Pt;return fe=new Qe({props:{data:Oe,class:"w-4 md:w-8 h-4 md:h-8"}}),ge=new Qe({props:{data:Oe,class:"w-4 md:w-8 h-4 md:h-8"}}),Le=new Qe({props:{data:Oe,class:"w-4 md:w-8 h-4 md:h-8"}}),Pe=new Qe({props:{data:Oe,class:"w-4 md:w-8 h-4 md:h-8"}}),ye=new Qe({props:{data:Oe,class:"w-4 md:w-8 h-4 md:h-8"}}),Re=new Qe({props:{data:Oe,class:"w-4 md:w-8 h-4 md:h-8"}}),He=new Qe({props:{data:Oe,class:"w-4 md:w-8 h-4 md:h-8"}}),{c(){t=p("meta"),n=p("meta"),r=p("meta"),a=p("meta"),i=p("meta"),s=p("meta"),v=p("meta"),b=p("meta"),m=p("meta"),k=p("meta"),M=p("meta"),P=p("meta"),N=p("meta"),S=p("meta"),C=p("meta"),y=p("meta"),L=p("meta"),B=p("meta"),U=p("meta"),V=p("meta"),I=p("meta"),Ge=A(),H=p("div"),F=p("img"),We=A(),D=p("h1"),g=x("Champ Libre"),Ke=p("br"),Ht=x("À la découverte de Terre Libérée"),$e=A(),ne=p("div"),J=p("a"),zt=x("Version PDF"),et=A(),ue=p("span"),Ut=x("Mardi 27 juin 2023"),tt=A(),Q=p("span"),Y=p("a"),Vt=x("«À la rencontre de Louis Rimbault et des causeries anarchistes»"),Ft=A(),oe=p("a"),G(fe.$$.fragment),lt=A(),ce=p("h2"),Qt=x("19h - Halle de Luynes"),at=A(),w=p("p"),Ot=x("Conférence d'"),me=p("a"),Gt=x("Anne Steiner"),Wt=x(", sociologue, spécialiste du "),de=p("a"),Kt=x("mouvement individualiste anarchiste"),Xt=x(`, en partenariat avec les
    `),pe=p("a"),Jt=x("Rendez-vous de l'histoire de Blois"),Yt=x(", dans le cadre des "),he=p("a"),Zt=x("cafés historiques en région Centre Val-de-Loire"),$t=x("."),st=A(),be=p("p"),el=x("Vente d'une sélection thématique d'ouvrages de la librairie tourangelle autogérée Bédélire"),rt=A(),ve=p("span"),tl=x("Dimanche 2 juillet 2023"),it=A(),Z=p("span"),ll=x(`Balade sonore
    `),_e=p("a"),G(ge.$$.fragment),nt=A(),$=p("h2"),al=x("10h > 12h - Départ de la halle de Luynes - "),Xe=p("a"),sl=x("Podcasts"),ut=A(),O=p("p"),rl=x("Promenade d’environ 2h, parsemée de "),Je=p("a"),il=x("podcasts"),nl=x(` pour découvrir l’histoire de Louis Rimbault et de son école de pratique végétalienne Terre Libérée. Cette balade sonore proposée par l’association L’autre Terre Libérée vous raconte cette expérience qui a eu lieu à Luynes
    entre 1923 et 1949, et qui a disparu des mémoires collectives. Tout au long du parcours, des ardoises informatives vous invitent à scanner des QR Codes pour écouter des petites pastilles audio tout en cheminant jusqu’au terrain de l’association.`),ot=A(),xe=p("p"),ul=x("Informations pratiques :"),ft=A(),Ee=p("p"),ol=x(`Nous vous invitons à vous garer dans les parkings du centre du village puis de vous rendre sous la halle pour le départ de la balade. Prévoir 2 heures pour l’aller, un temps sur place, puis environ 40 minutes de marche pour le retour. Pour ceux qui voudraient éviter la marche, il est possible de
    se garer sur le parking du supermarché, puis de descendre jusqu’au terrain (environ 10 minutes de marche).`),ct=A(),ee=p("span"),fl=x(`Pique-nique partagé & Causeries
    `),ke=p("a"),G(Le.$$.fragment),mt=A(),Ae=p("h2"),cl=x("12h30 - Terrain de l'association"),dt=A(),qe=p("p"),ml=x("Chaque participant est invité à préparer une spécialité culinaire, à la déposer sur la table pour partager le moment convivial du repas. Une buvette sera également disponible pour se désaltérer, proposant des boissons bio avec et sans alcool, sélectionnées auprès de producteurs locaux."),pt=A(),te=p("span"),dl=x(`Fresque du climat
    `),Te=p("a"),G(Pe.$$.fragment),ht=A(),Ne=p("h2"),pl=x("À partir de 14h - Terrain de l'association"),bt=A(),Ce=p("p"),hl=x(`L’approche ludique et pédagogique de la Fresque du Climat permet à chacun de comprendre le fonctionnement, l’ampleur et la complexité des enjeux liés aux dérèglements climatiques. L’atelier mobilise l’intelligence collective pour sensibiliser les participants aux changements climatiques. Durant
    l’atelier, les participants relient les liens de cause à effets et intègrent les enjeux climatiques dans leur globalité.`),vt=A(),le=p("span"),bl=x(`Vélo Sound System
    `),Me=p("a"),G(ye.$$.fragment),_t=A(),we=p("h2"),vl=x("À partir de 14h - Terrain de l'association"),gt=A(),je=p("p"),_l=x("Découverte d’un Discobike mobile et autonome de diffusion du son, alimenté par des sources d'énergies renouvelables musculaires et solaires."),xt=A(),ae=p("span"),gl=x(`Ateliers ludiques
    `),Se=p("a"),G(Re.$$.fragment),Et=A(),De=p("h2"),xl=x("À partir de 14h - Terrain de l'association"),kt=A(),Be=p("p"),El=x("Divers ateliers sont proposés tout au long de l’après midi, pour les petits et les grands. Land art, dessin, jeu des empreintes, grand jeu de construction collective."),Lt=A(),se=p("span"),kl=x(`Concert
    `),Ie=p("a"),G(He.$$.fragment),At=A(),ze=p("h2"),Ll=x("17h - Terrain de l'association"),qt=A(),Ue=p("p"),Al=x("Concert du groupe Šaban Shukar qui revisite les plus belles chansons de Šaban Bajramovic, Roi de la soul Tsigane, compositeur serbe d’origine Rrom très populaire dans tous les Balkans."),Tt=A(),Ve=p("div"),Fe=p("img"),this.h()},l(e){const f=Ba("svelte-1q0t3rr",document.head);t=h(f,"META",{charset:!0}),n=h(f,"META",{name:!0,content:!0}),r=h(f,"META",{name:!0,content:!0}),a=h(f,"META",{itemprop:!0,content:!0}),i=h(f,"META",{itemprop:!0,content:!0}),s=h(f,"META",{itemprop:!0,content:!0}),v=h(f,"META",{name:!0,content:!0}),b=h(f,"META",{name:!0,content:!0}),m=h(f,"META",{name:!0,content:!0}),k=h(f,"META",{name:!0,content:!0}),M=h(f,"META",{name:!0,content:!0}),P=h(f,"META",{name:!0,content:!0}),N=h(f,"META",{name:!0,content:!0}),S=h(f,"META",{name:!0,content:!0}),C=h(f,"META",{name:!0,content:!0}),y=h(f,"META",{name:!0,content:!0}),L=h(f,"META",{name:!0,content:!0}),B=h(f,"META",{name:!0,content:!0}),U=h(f,"META",{name:!0,content:!0}),V=h(f,"META",{name:!0,content:!0}),I=h(f,"META",{name:!0,content:!0}),f.forEach(l),Ge=q(e),H=h(e,"DIV",{class:!0});var Sl=_(H);F=h(Sl,"IMG",{src:!0,alt:!0,class:!0}),Sl.forEach(l),We=q(e),D=h(e,"H1",{class:!0});var Nt=_(D);g=E(Nt,"Champ Libre"),Ke=h(Nt,"BR",{}),Ht=E(Nt,"À la découverte de Terre Libérée"),Nt.forEach(l),$e=q(e),ne=h(e,"DIV",{class:!0});var Rl=_(ne);J=h(Rl,"A",{href:!0,target:!0,class:!0});var Dl=_(J);zt=E(Dl,"Version PDF"),Dl.forEach(l),Rl.forEach(l),et=q(e),ue=h(e,"SPAN",{class:!0});var Bl=_(ue);Ut=E(Bl,"Mardi 27 juin 2023"),Bl.forEach(l),tt=q(e),Q=h(e,"SPAN",{class:!0});var Ct=_(Q);Y=h(Ct,"A",{href:!0,class:!0,target:!0});var Il=_(Y);Vt=E(Il,"«À la rencontre de Louis Rimbault et des causeries anarchistes»"),Il.forEach(l),Ft=q(Ct),oe=h(Ct,"A",{href:!0,target:!0});var Hl=_(oe);W(fe.$$.fragment,Hl),Hl.forEach(l),Ct.forEach(l),lt=q(e),ce=h(e,"H2",{class:!0});var zl=_(ce);Qt=E(zl,"19h - Halle de Luynes"),zl.forEach(l),at=q(e),w=h(e,"P",{class:!0});var z=_(w);Ot=E(z,"Conférence d'"),me=h(z,"A",{href:!0,target:!0});var Ul=_(me);Gt=E(Ul,"Anne Steiner"),Ul.forEach(l),Wt=E(z,", sociologue, spécialiste du "),de=h(z,"A",{href:!0,target:!0});var Vl=_(de);Kt=E(Vl,"mouvement individualiste anarchiste"),Vl.forEach(l),Xt=E(z,`, en partenariat avec les
    `),pe=h(z,"A",{href:!0,target:!0});var Fl=_(pe);Jt=E(Fl,"Rendez-vous de l'histoire de Blois"),Fl.forEach(l),Yt=E(z,", dans le cadre des "),he=h(z,"A",{href:!0,target:!0});var Ql=_(he);Zt=E(Ql,"cafés historiques en région Centre Val-de-Loire"),Ql.forEach(l),$t=E(z,"."),z.forEach(l),st=q(e),be=h(e,"P",{class:!0});var Ol=_(be);el=E(Ol,"Vente d'une sélection thématique d'ouvrages de la librairie tourangelle autogérée Bédélire"),Ol.forEach(l),rt=q(e),ve=h(e,"SPAN",{class:!0});var Gl=_(ve);tl=E(Gl,"Dimanche 2 juillet 2023"),Gl.forEach(l),it=q(e),Z=h(e,"SPAN",{class:!0});var ql=_(Z);ll=E(ql,`Balade sonore
    `),_e=h(ql,"A",{href:!0,target:!0});var Wl=_(_e);W(ge.$$.fragment,Wl),Wl.forEach(l),ql.forEach(l),nt=q(e),$=h(e,"H2",{class:!0});var Tl=_($);al=E(Tl,"10h > 12h - Départ de la halle de Luynes - "),Xe=h(Tl,"A",{href:!0});var Kl=_(Xe);sl=E(Kl,"Podcasts"),Kl.forEach(l),Tl.forEach(l),ut=q(e),O=h(e,"P",{class:!0});var Mt=_(O);rl=E(Mt,"Promenade d’environ 2h, parsemée de "),Je=h(Mt,"A",{href:!0});var Xl=_(Je);il=E(Xl,"podcasts"),Xl.forEach(l),nl=E(Mt,` pour découvrir l’histoire de Louis Rimbault et de son école de pratique végétalienne Terre Libérée. Cette balade sonore proposée par l’association L’autre Terre Libérée vous raconte cette expérience qui a eu lieu à Luynes
    entre 1923 et 1949, et qui a disparu des mémoires collectives. Tout au long du parcours, des ardoises informatives vous invitent à scanner des QR Codes pour écouter des petites pastilles audio tout en cheminant jusqu’au terrain de l’association.`),Mt.forEach(l),ot=q(e),xe=h(e,"P",{class:!0});var Jl=_(xe);ul=E(Jl,"Informations pratiques :"),Jl.forEach(l),ft=q(e),Ee=h(e,"P",{class:!0});var Yl=_(Ee);ol=E(Yl,`Nous vous invitons à vous garer dans les parkings du centre du village puis de vous rendre sous la halle pour le départ de la balade. Prévoir 2 heures pour l’aller, un temps sur place, puis environ 40 minutes de marche pour le retour. Pour ceux qui voudraient éviter la marche, il est possible de
    se garer sur le parking du supermarché, puis de descendre jusqu’au terrain (environ 10 minutes de marche).`),Yl.forEach(l),ct=q(e),ee=h(e,"SPAN",{class:!0});var Pl=_(ee);fl=E(Pl,`Pique-nique partagé & Causeries
    `),ke=h(Pl,"A",{href:!0,target:!0});var Zl=_(ke);W(Le.$$.fragment,Zl),Zl.forEach(l),Pl.forEach(l),mt=q(e),Ae=h(e,"H2",{class:!0});var $l=_(Ae);cl=E($l,"12h30 - Terrain de l'association"),$l.forEach(l),dt=q(e),qe=h(e,"P",{class:!0});var ea=_(qe);ml=E(ea,"Chaque participant est invité à préparer une spécialité culinaire, à la déposer sur la table pour partager le moment convivial du repas. Une buvette sera également disponible pour se désaltérer, proposant des boissons bio avec et sans alcool, sélectionnées auprès de producteurs locaux."),ea.forEach(l),pt=q(e),te=h(e,"SPAN",{class:!0});var Nl=_(te);dl=E(Nl,`Fresque du climat
    `),Te=h(Nl,"A",{href:!0,target:!0});var ta=_(Te);W(Pe.$$.fragment,ta),ta.forEach(l),Nl.forEach(l),ht=q(e),Ne=h(e,"H2",{class:!0});var la=_(Ne);pl=E(la,"À partir de 14h - Terrain de l'association"),la.forEach(l),bt=q(e),Ce=h(e,"P",{class:!0});var aa=_(Ce);hl=E(aa,`L’approche ludique et pédagogique de la Fresque du Climat permet à chacun de comprendre le fonctionnement, l’ampleur et la complexité des enjeux liés aux dérèglements climatiques. L’atelier mobilise l’intelligence collective pour sensibiliser les participants aux changements climatiques. Durant
    l’atelier, les participants relient les liens de cause à effets et intègrent les enjeux climatiques dans leur globalité.`),aa.forEach(l),vt=q(e),le=h(e,"SPAN",{class:!0});var Cl=_(le);bl=E(Cl,`Vélo Sound System
    `),Me=h(Cl,"A",{href:!0,target:!0});var sa=_(Me);W(ye.$$.fragment,sa),sa.forEach(l),Cl.forEach(l),_t=q(e),we=h(e,"H2",{class:!0});var ra=_(we);vl=E(ra,"À partir de 14h - Terrain de l'association"),ra.forEach(l),gt=q(e),je=h(e,"P",{class:!0});var ia=_(je);_l=E(ia,"Découverte d’un Discobike mobile et autonome de diffusion du son, alimenté par des sources d'énergies renouvelables musculaires et solaires."),ia.forEach(l),xt=q(e),ae=h(e,"SPAN",{class:!0});var Ml=_(ae);gl=E(Ml,`Ateliers ludiques
    `),Se=h(Ml,"A",{href:!0,target:!0});var na=_(Se);W(Re.$$.fragment,na),na.forEach(l),Ml.forEach(l),Et=q(e),De=h(e,"H2",{class:!0});var ua=_(De);xl=E(ua,"À partir de 14h - Terrain de l'association"),ua.forEach(l),kt=q(e),Be=h(e,"P",{class:!0});var oa=_(Be);El=E(oa,"Divers ateliers sont proposés tout au long de l’après midi, pour les petits et les grands. Land art, dessin, jeu des empreintes, grand jeu de construction collective."),oa.forEach(l),Lt=q(e),se=h(e,"SPAN",{class:!0});var yl=_(se);kl=E(yl,`Concert
    `),Ie=h(yl,"A",{href:!0,target:!0});var fa=_(Ie);W(He.$$.fragment,fa),fa.forEach(l),yl.forEach(l),At=q(e),ze=h(e,"H2",{class:!0});var ca=_(ze);Ll=E(ca,"17h - Terrain de l'association"),ca.forEach(l),qt=q(e),Ue=h(e,"P",{class:!0});var ma=_(Ue);Al=E(ma,"Concert du groupe Šaban Shukar qui revisite les plus belles chansons de Šaban Bajramovic, Roi de la soul Tsigane, compositeur serbe d’origine Rrom très populaire dans tous les Balkans."),ma.forEach(l),Tt=q(e),Ve=h(e,"DIV",{class:!0});var da=_(Ve);Fe=h(da,"IMG",{src:!0,alt:!0,class:!0}),da.forEach(l),this.h()},h(){document.title=`Champ Libre, programme des journées organisée par l'association "L'autre terre libérée" à Luynes`,u(t,"charset","utf-8"),document.title="L'autre terre libérée - Champ Libre - A la rencontre de Louis Rimbault",u(n,"name","description"),u(n,"content","Programme des journées Champ Libre organisées par l'association L'autre terre libérée à Luynes"),u(r,"name","image"),u(r,"content",yt),u(a,"itemprop","name"),u(a,"content","L'autre terre libérée - Champ Libre - A la rencontre de Louis Rimbault"),u(i,"itemprop","description"),u(i,"content","Programme des journées Champ Libre organisées par l'association L'autre terre libérée à Luynes"),u(s,"itemprop","image"),u(s,"content",yt),u(v,"name","twitter:card"),u(v,"content","summary"),u(b,"name","twitter:title"),u(b,"content","L'autre terre libérée - Champ Libre - A la rencontre de Louis Rimbault"),u(m,"name","twitter:description"),u(m,"content","Programme des journées Champ Libre organisées par l'association L'autre terre libérée à Luynes"),u(k,"name","twitter:image:src"),u(k,"content",yt),u(M,"name","og:title"),u(M,"content","L'autre terre libérée - Champ Libre - A la rencontre de Louis Rimbault"),u(P,"name","og:description"),u(P,"content","Programme des journées Champ Libre organisées par l'association L'autre terre libérée à Luynes"),u(N,"name","og:image"),u(N,"content",ha),u(S,"name","og:url"),u(S,"content","https://lautreterreliberee.fr/"),u(C,"name","og:site_name"),u(C,"content","L'autre terre libérée, à la rencontre de Louis Rimbault à Luynes"),u(y,"name","og:locale"),u(y,"content","en_FR"),u(L,"name","fb:admins"),u(L,"content","lautreterreliberee"),u(B,"name","og:type"),u(B,"content","article"),u(U,"name","article:section"),u(U,"content","Culture"),u(V,"name","article:author"),u(V,"content","L'autre terre libérée"),u(I,"name","article:tag"),u(I,"content","histoire, anarchisme, végétalisme, rimbault, luynes"),pa(F.src,Ze=yt)||u(F,"src",Ze),u(F,"alt","Affiche Champ Libre 2023"),u(F,"class","w-60 max-w-full"),u(H,"class","img-header text-center flex justify-center mb-10"),u(D,"class","frankie text-2xl md:text-4xl lg:text-6xl text-center text-white bg-atl-black p-4"),u(J,"href",Xa),u(J,"target","_blank"),u(J,"class","text-2xl"),u(ne,"class","text-center my-12"),u(ue,"class","frankie text-atl-black text-2xl md:text-6xl block"),u(Y,"href","https://cafeshistoriques.com/programme/la-rencontre-de-louis-rimbault-et-des-causeries-anarchistes"),u(Y,"class","frankie"),u(Y,"target","_blank"),u(oe,"href","https://osm.org/go/0AU8MOGON?way=68947126"),u(oe,"target","blank"),u(Q,"class","frankie text-atl-red text-2xl md:text-4xl"),u(ce,"class","text-base md:text-2xl text-atl-red font-bold"),u(me,"href","https://fr.wikipedia.org/wiki/Anne_Steiner"),u(me,"target","_blank"),u(de,"href","https://fr.wikipedia.org/wiki/Anarchisme_individualiste"),u(de,"target","_blank"),u(pe,"href","https://rdv-histoire.com/"),u(pe,"target","_blank"),u(he,"href","https://cafeshistoriques.com/"),u(he,"target","_blank"),u(w,"class","text-base lg:text-2xl mb-4"),u(be,"class","text-base lg:text-2xl mb-4"),u(ve,"class","frankie text-atl-black text-2xl md:text-6xl mt-8 block"),u(_e,"href","https://osm.org/go/0AU8MOGON?way=68947126"),u(_e,"target","blank"),u(Z,"class","frankie text-atl-red text-2xl md:text-4xl"),u(Xe,"href","/balade-sonore/1"),u($,"class","text-base md:text-2xl text-atl-red font-bold"),u(Je,"href","/balade-sonore/1"),u(O,"class","text-base lg:text-2xl mb-4"),u(xe,"class","font-bold italic text-base lg:text-2xl"),u(Ee,"class","italic text-base lg:text-2xl mb-4"),u(ke,"href","https://osm.org/go/0AU8Qn3Nl-?m="),u(ke,"target","blank"),u(ee,"class","frankie text-atl-red text-2xl md:text-4xl"),u(Ae,"class","text-base md:text-2xl text-atl-red font-bold"),u(qe,"class","text-base lg:text-2xl mb-4"),u(Te,"href","https://osm.org/go/0AU8Qn3Nl-?m="),u(Te,"target","blank"),u(te,"class","frankie text-atl-red text-2xl md:text-4xl"),u(Ne,"class","text-base md:text-2xl text-atl-red font-bold"),u(Ce,"class","text-base lg:text-2xl mb-4"),u(Me,"href","https://osm.org/go/0AU8Qn3Nl-?m="),u(Me,"target","blank"),u(le,"class","frankie text-atl-red text-2xl md:text-4xl"),u(we,"class","text-base md:text-2xl text-atl-red font-bold"),u(je,"class","text-base lg:text-2xl mb-4"),u(Se,"href","https://osm.org/go/0AU8Qn3Nl-?m="),u(Se,"target","blank"),u(ae,"class","frankie text-atl-red text-2xl md:text-4xl"),u(De,"class","text-base md:text-2xl text-atl-red font-bold"),u(Be,"class","text-base lg:text-2xl mb-4"),u(Ie,"href","https://osm.org/go/0AU8Qn3Nl-?m="),u(Ie,"target","blank"),u(se,"class","frankie text-atl-red text-2xl md:text-4xl"),u(ze,"class","text-base md:text-2xl text-atl-red font-bold"),u(Ue,"class","text-base lg:text-2xl mb-4"),pa(Fe.src,jl=ha)||u(Fe,"src",jl),u(Fe,"alt","Portrait Louis Rimbault"),u(Fe,"class",""),u(Ve,"class","text-center flex justify-center my-16")},m(e,f){c(document.head,t),c(document.head,n),c(document.head,r),c(document.head,a),c(document.head,i),c(document.head,s),c(document.head,v),c(document.head,b),c(document.head,m),c(document.head,k),c(document.head,M),c(document.head,P),c(document.head,N),c(document.head,S),c(document.head,C),c(document.head,y),c(document.head,L),c(document.head,B),c(document.head,U),c(document.head,V),c(document.head,I),d(e,Ge,f),d(e,H,f),c(H,F),d(e,We,f),d(e,D,f),c(D,g),c(D,Ke),c(D,Ht),d(e,$e,f),d(e,ne,f),c(ne,J),c(J,zt),d(e,et,f),d(e,ue,f),c(ue,Ut),d(e,tt,f),d(e,Q,f),c(Q,Y),c(Y,Vt),c(Q,Ft),c(Q,oe),K(fe,oe,null),d(e,lt,f),d(e,ce,f),c(ce,Qt),d(e,at,f),d(e,w,f),c(w,Ot),c(w,me),c(me,Gt),c(w,Wt),c(w,de),c(de,Kt),c(w,Xt),c(w,pe),c(pe,Jt),c(w,Yt),c(w,he),c(he,Zt),c(w,$t),d(e,st,f),d(e,be,f),c(be,el),d(e,rt,f),d(e,ve,f),c(ve,tl),d(e,it,f),d(e,Z,f),c(Z,ll),c(Z,_e),K(ge,_e,null),d(e,nt,f),d(e,$,f),c($,al),c($,Xe),c(Xe,sl),d(e,ut,f),d(e,O,f),c(O,rl),c(O,Je),c(Je,il),c(O,nl),d(e,ot,f),d(e,xe,f),c(xe,ul),d(e,ft,f),d(e,Ee,f),c(Ee,ol),d(e,ct,f),d(e,ee,f),c(ee,fl),c(ee,ke),K(Le,ke,null),d(e,mt,f),d(e,Ae,f),c(Ae,cl),d(e,dt,f),d(e,qe,f),c(qe,ml),d(e,pt,f),d(e,te,f),c(te,dl),c(te,Te),K(Pe,Te,null),d(e,ht,f),d(e,Ne,f),c(Ne,pl),d(e,bt,f),d(e,Ce,f),c(Ce,hl),d(e,vt,f),d(e,le,f),c(le,bl),c(le,Me),K(ye,Me,null),d(e,_t,f),d(e,we,f),c(we,vl),d(e,gt,f),d(e,je,f),c(je,_l),d(e,xt,f),d(e,ae,f),c(ae,gl),c(ae,Se),K(Re,Se,null),d(e,Et,f),d(e,De,f),c(De,xl),d(e,kt,f),d(e,Be,f),c(Be,El),d(e,Lt,f),d(e,se,f),c(se,kl),c(se,Ie),K(He,Ie,null),d(e,At,f),d(e,ze,f),c(ze,Ll),d(e,qt,f),d(e,Ue,f),c(Ue,Al),d(e,Tt,f),d(e,Ve,f),c(Ve,Fe),Pt=!0},p:wl,i(e){Pt||(T(fe.$$.fragment,e),T(ge.$$.fragment,e),T(Le.$$.fragment,e),T(Pe.$$.fragment,e),T(ye.$$.fragment,e),T(Re.$$.fragment,e),T(He.$$.fragment,e),Pt=!0)},o(e){j(fe.$$.fragment,e),j(ge.$$.fragment,e),j(Le.$$.fragment,e),j(Pe.$$.fragment,e),j(ye.$$.fragment,e),j(Re.$$.fragment,e),j(He.$$.fragment,e),Pt=!1},d(e){l(t),l(n),l(r),l(a),l(i),l(s),l(v),l(b),l(m),l(k),l(M),l(P),l(N),l(S),l(C),l(y),l(L),l(B),l(U),l(V),l(I),e&&l(Ge),e&&l(H),e&&l(We),e&&l(D),e&&l($e),e&&l(ne),e&&l(et),e&&l(ue),e&&l(tt),e&&l(Q),X(fe),e&&l(lt),e&&l(ce),e&&l(at),e&&l(w),e&&l(st),e&&l(be),e&&l(rt),e&&l(ve),e&&l(it),e&&l(Z),X(ge),e&&l(nt),e&&l($),e&&l(ut),e&&l(O),e&&l(ot),e&&l(xe),e&&l(ft),e&&l(Ee),e&&l(ct),e&&l(ee),X(Le),e&&l(mt),e&&l(Ae),e&&l(dt),e&&l(qe),e&&l(pt),e&&l(te),X(Pe),e&&l(ht),e&&l(Ne),e&&l(bt),e&&l(Ce),e&&l(vt),e&&l(le),X(ye),e&&l(_t),e&&l(we),e&&l(gt),e&&l(je),e&&l(xt),e&&l(ae),X(Re),e&&l(Et),e&&l(De),e&&l(kt),e&&l(Be),e&&l(Lt),e&&l(se),X(He),e&&l(At),e&&l(ze),e&&l(qt),e&&l(Ue),e&&l(Tt),e&&l(Ve)}}}class $a extends jt{constructor(t){super(),St(this,t,null,Ja,Rt,{})}}export{$a as component};
