!function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={19:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([207,0]),n()}({207:function(e,t,n){e.exports=n(208)},208:function(e,t,n){"use strict";n.r(t);var r=n(24),o=n(20),a=n(37),i=n(22),c=n(16),u=n(38),s=n(51),l=n(67),p=n(25),f=n(32),d=n(34),b=n(23);const w=new d.a([7e5,2e5,1e5]),y=new f.a({geometry:w}),g=new p.b({image:new l.a({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:.75,src:"data/icon.png"})});y.setStyle(g);const h=new u.a({features:[y]}),v=new s.a({renderMode:"image",source:h}),m=new b.a({layers:[new c.a({source:new i.b}),v],target:"map2d",controls:Object(a.a)({attributionOptions:{collapsible:!1}}),view:new o.a({center:[0,0],zoom:2})});Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA";const O=new r.a({map:m});O.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),O.setEnabled(!0);let M=!1;window.toggleTracking=function(){M=!M,O.trackedFeature=M?y:void 0},setInterval(()=>{const e=w.getCoordinates();w.setCoordinates([e[0]+1e3*Math.random(),e[1]+1e3*Math.random(),e[2]]),y.changed()},100)}});
//# sourceMappingURL=tracking.d76bac4c0c46be8206b5.js.map