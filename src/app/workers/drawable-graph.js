// eslint-disable-next-line
export default () => {var _slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],o=!0,a=!1,s=void 0;try{for(var n,h=e[Symbol.iterator]();!(o=(n=h.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(e){a=!0,s=e}finally{try{!o&&h.return&&h.return()}finally{if(a)throw s}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},_createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _extends=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},GraphController=function(){function t(e){_classCallCheck(this,t),this.graph=e}return _createClass(t,[{key:"getDistance",value:function(e,t){return e=this.at(e),t=this.at(t),parseInt(Math.pow(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2),.5),10)}},{key:"getAdjacent",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=[];for(var a in this.graph.arc){var s=this.graph.arc[a];s.from===e.key?o.push([this.at(s.to),{value:r?this.getDistance(e.key,s.to):s.value,through:s.key}]):s.to===e.key&&0===t&&o.push([this.at(s.from),{value:r?this.getDistance(e.key,s.from):s.value,through:s.key}])}return o.sort(function(e,t){return e[0].x>=t[0].x})}},{key:"at",value:function(e){return this.graph.node[e]}}]),t}(),BreadthFirstSearch=function(){function t(e){_classCallCheck(this,t),this._graph=new GraphController(e)}return _createClass(t,[{key:"search",value:function(e,t,r){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,a=this._graph.at(e),s=[];a.color="VISITED",a.predecessor=void 0,a.d=0,s.push({key:a.key,color:"VISITED",text:[{text:a.key,offsetX:0,offsetY:2},{text:a.d,offsetX:0,offsetY:10}]});for(var n=void 0,h=[a];0!==h.length;){var i=h.shift();if(i.key===t){n=i;break}var f=!0,c=!1,l=void 0;try{for(var u,y=this._graph.getAdjacent(i,o)[Symbol.iterator]();!(f=(u=y.next()).done);f=!0){var d=u.value,p=d[1].through;"UNVISITED"===(d=d[0]).color&&(d.color="VISITED",d.predecessor=i,d.through=p,d.d=i.d+10,s.push({key:d.key,color:"VISITED",text:[{text:d.key,offsetX:0,offsetY:2},{text:d.d,offsetX:0,offsetY:10}]}),h.push(d))}}catch(e){c=!0,l=e}finally{try{!f&&y.return&&y.return()}finally{if(c)throw l}}i.color="EXPLORED",s.push({key:i.key,color:"EXPLORED"})}if(n)for(var k=n;k;)s.push({key:k.key,color:"PATH"}),k.through&&s.push({key:k.through,color:"PATH",type:"ARC"}),k=k.predecessor;return s}}]),t}(),DepthFirstSearch=function(){function t(e){_classCallCheck(this,t),this._graph=new GraphController(e)}return _createClass(t,[{key:"search",value:function(e,t,r){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;this.mode=o,this.goal=t,this.action=[];var a=this._graph.at(e);if(a.predecessor=void 0,this.final=void 0,this.dfs(a),this.final)for(var s=this.final;s;)this.action.push({key:s.key,color:"PATH"}),s.through&&this.action.push({key:s.through,color:"PATH",type:"ARC"}),s=s.predecessor;return this.action}},{key:"dfs",value:function(e){if(this.time++,e.d=this.time,e.key===this.goal)return this.final=e,void this.action.push({key:e.key,color:"EXPLORED",text:[{text:e.d,offsetX:0,offsetY:2}]});e.color="VISITED",this.action.push({key:e.key,color:"VISITED",text:[{text:e.d,offsetX:0,offsetY:2}]});var t=!0,r=!1,o=void 0;try{for(var a,s=this._graph.getAdjacent(e,this.mode)[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var n=a.value,h=n[1].through;if(n=n[0],this.final)return;"UNVISITED"===n.color&&(n.predecessor=e,n.through=h,this.dfs(n))}}catch(e){r=!0,o=e}finally{try{!t&&s.return&&s.return()}finally{if(r)throw o}}this.final||(e.color="EXPLORED",this.time++,e.f=this.time,this.action.push({key:e.key,color:"EXPLORED",text:[{text:e.d,offsetX:0,offsetY:2},{text:e.f,offsetX:0,offsetY:10}]}))}}]),t}(),Dijkstras=function(){function t(e){_classCallCheck(this,t),this._graph=new GraphController(e)}return _createClass(t,[{key:"search",value:function(e,t,r){var o=this,a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;this._graph.getDistance.bind(this._graph),Object.keys(this._graph.graph.node).forEach(function(e){o._graph.graph.node[e].d=1/0,o._graph.graph.node[e].predecessor=null}),this._graph.at(e).d=0;for(var s=[],n=_extends({},this._graph.graph.node),h=[],i=void 0;Object.keys(n).length!==h.length;){var f=Object.keys(n).reduce(function(e,t){return n[t].d<e.d&&!n[t].visit?n[t]:e},{d:1/0});if(void 0===f.key)break;if(f.key===t){i=f;break}f.visit=!0,h.push(f),s.push({key:f.key,color:"EXPLORED"});var c=!0,l=!1,u=void 0;try{for(var y,d=this._graph.getAdjacent(f,a,r)[Symbol.iterator]();!(c=(y=d.next()).done);c=!0){var p=y.value,k=p[1],v=k.through,g=k.value,_=f.d+g;(p=p[0]).d>_&&(p.d=_,p.predecessor=f,p.through=v,s.push({key:p.key,color:"VISITED",text:[{text:f.key,offsetX:0,offsetY:2},{text:p.d,offsetX:0,offsetY:10}]}))}}catch(e){l=!0,u=e}finally{try{!c&&d.return&&d.return()}finally{if(l)throw u}}}if(i)for(var x=i;x;)s.push({key:x.key,color:"PATH"}),x.through&&s.push({key:x.through,color:"PATH",type:"ARC"}),x=x.predecessor;return s}}]),t}(),AStar=function(){function t(e){_classCallCheck(this,t),this._graph=new GraphController(e)}return _createClass(t,[{key:"search",value:function(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e,r=arguments[2],o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,a={},s=[{key:this._graph.at(e).key,f:0,g:0}],n={},h=void 0,i=[];s.length;){var f=s.reduce(function(e,t,r){return t.f<e.f?_extends({},t,{i:r}):e},{f:1/0,i:-1});if(-1===f.i)break;if(f.key===t){h=f;break}i.push({key:f.key,color:"EXPLORED"}),s.splice(f.i,1);var c=!0,l=!1,u=void 0;try{for(var y,d=this._graph.getAdjacent(f,o,r)[Symbol.iterator]();!(c=(y=d.next()).done);c=!0){var p=y.value,k=p[1],v=k.through,g=k.value;p=p[0];var _=r?this._graph.getDistance(p.key,t):p.h||0,x=g+f.g,b=_+x,C=n[p.key];if(!C||C&&C.f>b){var E=a[p.key];(!E||E&&E.f>b)&&(s.push({key:p.key,f:b,g:x,predecessor:f,through:v}),a[p.key]={key:p.key,f:b,g:x,predecessor:f,through:v},i.push({key:p.key,color:"VISITED",text:[{text:b,offsetX:0,offsetY:2},{text:_,offsetX:0,offsetY:10},{text:x,offsetX:6,offsetY:10}]}))}}}catch(e){l=!0,u=e}finally{try{!c&&d.return&&d.return()}finally{if(l)throw u}}if(h)break;n[f.key]=f}if(h)for(var D=h;D;)i.push({key:D.key,color:"PATH"}),D.through&&i.push({key:D.through,color:"PATH",type:"ARC"}),D=D.predecessor;return i}}]),t}();self.onmessage=function(e){var t=_slicedToArray(e.data,4),r=t[0],o=t[1],a=o.node,s=o.arc,n=o.start,h=o.end,i=t[2],f=t[3],c=void 0===f?0:f;Object.keys(a).length||self.postMessage([]);var l="dfs"===r?new DepthFirstSearch({node:a,arc:s}):"a-star"===r?new AStar({node:a,arc:s}):"dijkstras"===r?new Dijkstras({node:a,arc:s}):new BreadthFirstSearch({node:a,arc:s});void 0===a[n]&&(n=Object.keys(a)[0]),void 0===a[h]&&(h=Object.keys(a)[Object.keys(a).length-1]);var u=l.search(n,h,i,c);self.postMessage(u)};};