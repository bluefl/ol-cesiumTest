!function(t){function e(e){for(var o,a,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(l&&l(e);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={15:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([199,0]),n()}({199:function(t,e,n){t.exports=n(200)},200:function(t,e,n){"use strict";n.r(e);var o=n(21),r=n(24),i=n(20),a=n(37),c=n(22),u=n(16);const s=new(n(23).a)({layers:[new u.a({source:new c.b})],target:"map2d",controls:Object(a.a)({attributionOptions:{collapsible:!1}}),view:new i.a({center:[333333,15e5],zoom:6})});Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA";const l=new r.a({map:s});l.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),l.setEnabled(!0);const p=function(t){this.ol3d_=t};p.MAX_TILT=7*Math.PI/16,p.MIN_TILT=0,p.prototype.getOlView=function(){return this.ol3d_.getOlView()},p.prototype.getTiltRange=function(){return[p.MIN_TILT,p.MAX_TILT]},p.prototype.getHeading=function(){return this.getOlView().getRotation()||0},p.prototype.getTiltOnGlobe=function(){const t=this.ol3d_.getCesiumScene();return-o.a.computeSignedTiltAngleOnGlobe(t)},p.prototype.resetToNorthZenith=function(t){const e=this.ol3d_.getCesiumScene(),n=e.camera,r=o.a.pickBottomPoint(e);if(!r)return void t();const i=this.getHeading(),a=o.a.computeAngleToZenith(e,r);o.a.setHeadingUsingBottomCenter(e,i,r);const c=Cesium.Matrix4.fromTranslation(r),u=n.right,s={callback:t};o.a.rotateAroundAxis(n,-a,u,c,s)},p.prototype.rotate=function(t){const e=this.ol3d_.getOlView(),n=e.getRotation();e.animate({rotation:n+t,duration:250})},p.prototype.setHeading=function(t){const e=this.ol3d_.getCesiumScene(),n=o.a.pickBottomPoint(e);n&&o.a.setHeadingUsingBottomCenter(e,t,n)},p.prototype.tiltOnGlobe=function(t){const e=this.ol3d_.getCesiumScene(),n=e.camera,r=o.a.pickBottomPoint(e);if(!r)return;const i=Cesium.Matrix4.fromTranslation(r),a=n.right;(0,o.a.rotateAroundAxis)(n,-t,a,i,{})},window.control=new p(l)}});
//# sourceMappingURL=rotate.a1e111a839b3cf8b9a4d.js.map