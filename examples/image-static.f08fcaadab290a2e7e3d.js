!function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={7:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;i.push([184,0]),n()}({184:function(e,t,n){e.exports=n(185)},185:function(e,t,n){"use strict";n.r(t);var r=n(24),o=n(2),i=n(20),a=n(37),c=n(22),u=n(16),l=n(23),s=n(93),p=n(1),f=n(133);const b=[-40,50,-10,65];Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA";const d=new l.a({layers:[new u.a({source:new c.b}),new s.a({source:new f.a({url:"data/image-static.png",crossOrigin:"",projection:"EPSG:4326",imageExtent:b})})],controls:Object(a.a)({attributionOptions:{collapsible:!1}}),target:"map",view:new i.a({center:Object(o.q)(Object(p.x)(b),"EPSG:4326","EPSG:3857"),zoom:4,projection:"EPSG:3857"})}),y=new r.a({map:d});y.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),y.setEnabled(!0),document.getElementById("enable").addEventListener("click",()=>y.setEnabled(!y.getEnabled()))}});
//# sourceMappingURL=image-static.f08fcaadab290a2e7e3d.js.map