(this["webpackJsonpapi-to-graph"]=this["webpackJsonpapi-to-graph"]||[]).push([[0],{39:function(e,t,n){e.exports=n(51)},44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=(n(44),n(27)),l=n.n(i),u=n(30),s=n(20),m=n(74),p=n(72),f=n(14),h=n(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e,t=r.a.useState([]),n=Object(s.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://js-api-bin.herokuapp.com/api/listen-receive-storm/db");case 2:return t=e.sent,e.t0=Object,e.next=6,t.json();case 6:e.t1=e.sent,e.t2=function(e){var t=Object(s.a)(e,2);return{timestamp:t[0],temp:t[1]}},n=e.t0.entries.call(e.t0,e.t1).map(e.t2),o(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),console.log(c),r.a.createElement(m.a,{position:"absolute",left:0,top:0,right:0,bottom:0},c?r.a.createElement(f.b,{data:c},r.a.createElement(f.c,null),r.a.createElement(h.k,{name:"c"}),r.a.createElement(f.a,{tickFormat:function(){return function(e){return new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}).replace(/:00/,"")}}}),r.a.createElement(f.e,{scaleName:"c",labelComponent:(e=" C",function(t){var n=t.text;return r.a.createElement(f.e.Label,Object.assign({},t,{text:n+e}))})}),r.a.createElement(f.d,{scaleName:"c",name:"temp",valueField:"temp",argumentField:"timestamp"}),r.a.createElement(f.f,null)):r.a.createElement(p.a,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e53449af.chunk.js.map