"use strict";(self.webpackChunk_jahia_meaningCloudServices=self.webpackChunk_jahia_meaningCloudServices||[]).push([[230],{1230:(e,a,n)=>{n.r(a),n.d(a,{default:()=>F,disableExperimentalFragmentVariables:()=>h,disableFragmentWarnings:()=>m,enableExperimentalFragmentVariables:()=>g,gql:()=>d,resetCaches:()=>f});var t=n(5353),r=n(9221),i=new Map,o=new Map,s=!0,l=!1;function c(e){return e.replace(/[\s,]+/g," ").trim()}function u(e){var a,n,u,d=c(e);if(!i.has(d)){var f=(0,r.Qc)(e,{experimentalFragmentVariables:l,allowLegacyFragmentVariables:l});if(!f||"Document"!==f.kind)throw new Error("Not a valid GraphQL document.");i.set(d,function(e){var a=new Set(e.definitions);a.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var t=e[n];t&&"object"==typeof t&&a.add(t)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}((a=f,n=new Set,u=[],a.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var a=e.name.value,t=c((i=e.loc).source.body.substring(i.start,i.end)),r=o.get(a);r&&!r.has(t)?s&&console.warn("Warning: fragment with name "+a+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):r||o.set(a,r=new Set),r.add(t),n.has(t)||(n.add(t),u.push(e))}else u.push(e);var i})),(0,t.pi)((0,t.pi)({},a),{definitions:u}))))}return i.get(d)}function d(e){for(var a=[],n=1;n<arguments.length;n++)a[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var t=e[0];return a.forEach((function(a,n){a&&"Document"===a.kind?t+=a.loc.source.body:t+=a,t+=e[n+1]})),u(t)}function f(){i.clear(),o.clear()}function m(){s=!1}function g(){l=!0}function h(){l=!1}var p,b=d,v=f,w=m,k=g,E=h;(p=d||(d={})).gql=b,p.resetCaches=v,p.disableFragmentWarnings=w,p.enableExperimentalFragmentVariables=k,p.disableExperimentalFragmentVariables=E,d.default=d;const F=d}}]);
//# sourceMappingURL=230.jahia.1ee725.js.map