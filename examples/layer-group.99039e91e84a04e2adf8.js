!function(e){function r(r){for(var t,u,s=r[0],c=r[1],i=r[2],p=0,f=[];p<s.length;p++)u=s[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(l&&l(r);f.length;)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(t=!1)}t&&(a.splice(r--,1),e=u(u.s=n[0]))}return e}var t={},o={10:0},a=[];function u(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=t,u.d=function(e,r,n){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)u.d(n,t,function(r){return e[r]}.bind(null,t));return n},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var i=0;i<s.length;i++)r(s[i]);var l=c;a.push([190,0]),n()}({190:function(e,r,n){e.exports=n(191)},191:function(e,r,n){"use strict";n.r(r);var t=n(23),o=n(20),a=n(79),u=n(16),s=n(2),c=n(22),i=n(117),l=n(24);const p=new u.a({source:new c.b}),f="pk.eyJ1IjoiZ2JvMiIsImEiOiJjazFraHV4N3gwZHliM2JucHYxdTNnNXh1In0.tzs3TxoVCaMNQf455mh-3w",y=new u.a({source:new i.a({url:"https://api.tiles.mapbox.com/v4/mapbox.20110804-hoa-foodinsecurity-3month.json?secure&access_token="+f,crossOrigin:"anonymous"})}),w=new u.a({source:new i.a({url:"https://api.tiles.mapbox.com/v4/mapbox.world-borders-light.json?secure&access_token="+f,crossOrigin:"anonymous"})}),d=new a.a({layers:[y,w]}),b=new t.a({layers:[p,d],target:"map2d",view:new o.a({center:Object(s.g)([37.4057,8.81566]),zoom:4})});function h(e){switch(e){case"layer0":return p;case"layer1":return d;case"layer10":return y;case"layer11":return w;default:throw new Error("Unknown layer")}}new l.a({map:b,target:"map3d"}).setEnabled(!0),window.toggleLayer=function(e,r){h(r).setVisible(e.checked)},window.setLayerOpacity=function(e,r){h(r).setOpacity(parseFloat(e.value))}}});
//# sourceMappingURL=layer-group.99039e91e84a04e2adf8.js.map