"use strict";var _slicedToArray=function(){function e(j,k){var l=[],m=!0,n=!1,o=void 0;try{for(var q,p=j[Symbol.iterator]();!(m=(q=p.next()).done)&&(l.push(q.value),!(k&&l.length===k));m=!0);}catch(r){n=!0,o=r}finally{try{!m&&p["return"]&&p["return"]()}finally{if(n)throw o}}return l}return function(j,k){if(Array.isArray(j))return j;if(Symbol.iterator in Object(j))return e(j,k);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),generateList=function(e,j){switch(j){case 1:return Array(e).fill(1).map(function(l,m){return{height:10*(m+1),y:10*e-10*(m+1)}});case 2:return Array(e).fill(1).map(function(l,m){var n=e-m-1;return{height:10*(n+1),y:10*e-10*(n+1)}});case 3:var k=Array(e).fill(1).map(function(l,m){return m+1});return Array(e).fill(1).map(function(){var m=Math.floor(Math.random()*k.length),_c$splice=k.splice(m,1),_c$splice2=_slicedToArray(_c$splice,1),l=_c$splice2[0];return{height:10*l,y:10*e-10*l}});default:return[];}};self.onmessage=function(e){var j=generateList(e.data[0],e.data[1]);self.postMessage(j)};