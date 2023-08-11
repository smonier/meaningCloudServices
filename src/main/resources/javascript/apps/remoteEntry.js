(()=>{var e,r,t,a,o={8449:(e,r,t)=>{"use strict";var a={"./init":()=>Promise.all([t.e(282),t.e(365),t.e(199),t.e(831)]).then((()=>()=>t(6831)))},o=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var a="default",o=t.S[a];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>o,init:()=>n})}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=o,i.c=n,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".jahia."+{91:"7250bd",118:"07da86",121:"31df52",128:"80d96a",199:"990ea2",216:"e76d5f",221:"c555da",230:"1ee725",232:"107bfd",282:"e1f4a4",294:"e9174b",365:"7428c7",396:"88aa83",415:"c7d200",545:"b35621",579:"6c8308",581:"f1a925",633:"03b178",679:"a3cc89",697:"c8f4de",699:"794929",706:"e97598",831:"5470f5",850:"d600bf",909:"062a4d",935:"a13b1f",978:"e1470b"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jahia/meaningCloudServices:",i.l=(t,a,o,n)=>{if(e[t])e[t].push(a);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){l=f;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",r+o),l.src=t),e[t]=[a];var h=(r,a)=>{l.onerror=l.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(a))),r)return r(a)},c=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},a={},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=a[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var n=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),i.m[e]=()=>{throw r},o.p=0},l=(e,t,a,i,l,s)=>{try{var u=e(t,a);if(!u||!u.then)return l(u,i,s);var d=u.then((e=>l(e,i)),n);if(!s)return d;r.push(o.p=d)}catch(e){n(e)}},s=(e,r,a)=>l(r.get,o[1],t,0,u,a),u=r=>{o.p=1,i.m[e]=e=>{e.exports=r()}};l(i,o[2],0,0,((e,r,t)=>e?l(i.I,o[0],0,e,s,t):n()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,a)=>{a||(a=[]);var o=r[t];if(o||(o=r[t]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var n=i.S[t],l="@jahia/meaningCloudServices",s=(e,r,t,a)=>{var o=n[e]=n[e]||{},i=o[r];(!i||!i.loaded&&(!a!=!i.eager?a:l>i.from))&&(o[r]={get:t,from:l,eager:!!a})},u=[];return"default"===t&&(s("@apollo/react-common","3.1.4",(()=>Promise.all([i.e(365),i.e(415)]).then((()=>()=>i(118))))),s("@apollo/react-components","4.0.0",(()=>Promise.all([i.e(232),i.e(633),i.e(679),i.e(365),i.e(199),i.e(697)]).then((()=>()=>i(7679))))),s("@apollo/react-hooks","3.1.5",(()=>Promise.all([i.e(128),i.e(365),i.e(706),i.e(121)]).then((()=>()=>i(3128))))),s("@jahia/data-helper","1.1.4",(()=>Promise.all([i.e(232),i.e(221),i.e(633),i.e(91),i.e(365),i.e(199),i.e(909),i.e(581)]).then((()=>()=>i(6091))))),s("@jahia/moonstone","2.5.12",(()=>Promise.all([i.e(699),i.e(365),i.e(850)]).then((()=>()=>i(1699))))),s("@jahia/ui-extender","1.1.0",(()=>Promise.all([i.e(396),i.e(365),i.e(850),i.e(579)]).then((()=>()=>i(8396))))),s("graphql-tag","2.12.6",(()=>Promise.all([i.e(232),i.e(221),i.e(230)]).then((()=>()=>i(1230))))),s("react-dom","16.14.0",(()=>Promise.all([i.e(935),i.e(365)]).then((()=>()=>i(3935))))),s("react-i18next","11.18.6",(()=>Promise.all([i.e(978),i.e(365)]).then((()=>()=>i(8978))))),s("react-redux","7.2.9",(()=>Promise.all([i.e(216),i.e(365),i.e(850),i.e(545)]).then((()=>()=>i(8216))))),s("react","16.14.0",(()=>i.e(294).then((()=>()=>i(7294)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},r=(r,t)=>{r=e(r),t=e(t);for(var a=0;;){if(a>=r.length)return a<t.length&&"u"!=(typeof t[a])[0];var o=r[a],n=(typeof o)[0];if(a>=t.length)return"u"==n;var i=t[a],l=(typeof i)[0];if(n!=l)return"o"==n&&"n"==l||"s"==l||"u"==n;if("o"!=n&&"u"!=n&&o!=i)return o<i;a++}},t=e=>{var r=e[0],a="";if(1===e.length)return"*";if(r+.5){a+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,n=1;n<e.length;n++)o--,a+="u"==(typeof(l=e[n]))[0]?"-":(o>0?".":"")+(o=2,l);return a}var i=[];for(n=1;n<e.length;n++){var l=e[n];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():t(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(r,t)=>{if(0 in r){t=e(t);var o=r[0],n=o<0;n&&(o=-o-1);for(var i=0,l=1,s=!0;;l++,i++){var u,d,f=l<r.length?(typeof r[l])[0]:"";if(i>=t.length||"o"==(d=(typeof(u=t[i]))[0]))return!s||("u"==f?l>o&&!n:""==f!=n);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(l<=o){if(u!=r[l])return!1}else{if(n?u>r[l]:u<r[l])return!1;u!=r[l]&&(s=!1)}else if("s"!=f&&"n"!=f){if(n||l<=o)return!1;s=!1,l--}else{if(l<=o||d<f!=n)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,l--)}}var h=[],c=h.pop.bind(h);for(i=1;i<r.length;i++){var p=r[i];h.push(1==p?c()|c():2==p?c()&c():p?a(p,t):!c())}return!!c()},o=(e,o,i,s)=>{var u=((e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&r(e,t)?t:e),0)})(e,i);return a(s,u)||n(((e,r,a,o)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(o)+")")(e,i,u,s)),l(e[i][u])},n=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},l=e=>(e.loaded=1,e.get()),s=e=>function(r,t,a,o){var n=i.I(r);return n&&n.then?n.then(e.bind(e,r,i.S[r],t,a,o)):e(r,i.S[r],t,a,o)},u=s(((e,r,t,a,n)=>r&&i.o(r,t)?o(r,0,t,a):n())),d=s(((e,t,o,n,s)=>{var u=t&&i.o(t,o)&&((e,t,o)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!a(o,t)||e&&!r(e,t)?e:t),0))&&n[t]})(t,o,n);return u?l(u):s()})),f={},h={5365:()=>u("default","react",[1,16],(()=>i.e(294).then((()=>()=>i(7294))))),4199:()=>d("default","graphql-tag",[1,2,12,6],(()=>Promise.all([i.e(232),i.e(221),i.e(230)]).then((()=>()=>i(1230))))),6706:()=>u("default","@apollo/react-common",[1,3,1,4],(()=>i.e(118).then((()=>()=>i(118))))),909:()=>u("default","@apollo/react-components",[1,4,0,0],(()=>i.e(679).then((()=>()=>i(7679))))),5850:()=>u("default","react-dom",[1,16],(()=>i.e(935).then((()=>()=>i(3935))))),983:()=>u("default","react-redux",[1,7,2,0],(()=>Promise.all([i.e(216),i.e(850)]).then((()=>()=>i(8216))))),3499:()=>u("default","@jahia/moonstone",[1,2,0,1],(()=>Promise.all([i.e(699),i.e(850)]).then((()=>()=>i(1699))))),4424:()=>d("default","@jahia/data-helper",[1,1,0,3],(()=>Promise.all([i.e(232),i.e(221),i.e(633),i.e(91),i.e(909)]).then((()=>()=>i(6091))))),7190:()=>u("default","@jahia/ui-extender",[1,1,0,3],(()=>Promise.all([i.e(396),i.e(850)]).then((()=>()=>i(8396))))),8086:()=>u("default","react-i18next",[1,11,14,3],(()=>i.e(978).then((()=>()=>i(8978))))),9882:()=>u("default","@apollo/react-hooks",[1,3],(()=>Promise.all([i.e(128),i.e(706)]).then((()=>()=>i(3128)))))},c={199:[4199],365:[5365],706:[6706],831:[983,3499,4424,7190,8086,9882],850:[5850],909:[909]};i.f.consumes=(e,r)=>{i.o(c,e)&&c[e].forEach((e=>{if(i.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},a=r=>{delete f[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var o=h[e]();o.then?r.push(f[e]=o.then(t).catch(a)):t(o)}catch(e){a(e)}}))}})(),(()=>{i.b=document.baseURI||self.location.href;var e={165:0};i.f.j=(r,t)=>{var a=i.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(199|365|706|850|909)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=i.p+i.u(r),l=new Error;i.l(n,(t=>{if(i.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,a[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,o,[n,l,s]=t,u=0;if(n.some((r=>0!==e[r]))){for(a in l)i.o(l,a)&&(i.m[a]=l[a]);s&&s(i)}for(r&&r(t);u<n.length;u++)o=n[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jahia_meaningCloudServices=self.webpackChunk_jahia_meaningCloudServices||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var l=i(8449);appShell.remotes.requestMeaningCloudServices=l})();
//# sourceMappingURL=remoteEntry.js.map