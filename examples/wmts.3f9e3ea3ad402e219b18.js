!function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);f.length;)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={21:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([211,0]),r()}({211:function(e,t,r){e.exports=r(212)},212:function(e,t,r){"use strict";r.r(t);var n=r(24),o=r(23),i=r(20),a=r(1),c=r(16),s=r(2),u=r(22),l=r(156),p=r(146);Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA";const f=Object(s.j)("EPSG:3857"),d=f.getExtent(),b=Object(a.E)(d)/256,y=new Array(14),g=new Array(14);for(let e=0;e<14;++e)y[e]=b/Math.pow(2,e),g[e]=e;const v=new o.a({layers:[new c.a({source:new u.b,opacity:.7}),new c.a({opacity:.7,source:new l.a({attributions:'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>',url:"https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/",layer:"0",matrixSet:"EPSG:3857",format:"image/png",projection:f,tileGrid:new p.b({origin:Object(a.C)(d),resolutions:y,matrixIds:g}),style:"default",wrapX:!0})})],target:"map",view:new i.a({center:[-11158582,4813697],zoom:4})}),w=new n.a({map:v});w.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),w.setEnabled(!0),document.getElementById("enable").addEventListener("click",()=>w.setEnabled(!w.getEnabled()))}});
//# sourceMappingURL=wmts.3f9e3ea3ad402e219b18.js.map