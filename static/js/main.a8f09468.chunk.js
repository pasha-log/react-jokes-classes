(this.webpackJsonpicanhazdadjokes=this.webpackJsonpicanhazdadjokes||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n.n(o),a=n(20),s=n.n(a),r=(n(27),n(22)),i=n(5),u=n(6),l=n(12),d=n(7),j=n(8),h=n(4),f=n(10),v=n(9),p=n(21),b=n.n(p),k=(n(46),n(0)),O=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).decrement=function(){o.setState({vote:o.props.vote(o.props.id,-1)})},o.increment=function(){o.setState({vote:o.props.vote(o.props.id,1)})},o.state={vote:0},o.decrement=o.decrement.bind(Object(h.a)(o)),o.increment=o.increment.bind(Object(h.a)(o)),o}return Object(j.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"Joke",children:[Object(k.jsxs)("div",{className:"Joke-votearea",children:[Object(k.jsx)("button",{onClick:this.increment,children:Object(k.jsx)("i",{className:"fas fa-thumbs-up"})}),Object(k.jsx)("button",{onClick:this.decrement,children:Object(k.jsx)("i",{className:"fas fa-thumbs-down"})}),this.props.votes]}),Object(k.jsx)("div",{className:"Joke-text",children:this.props.text})]})}}]),n}(c.a.Component),g=(n(48),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).getJokes=Object(l.a)(Object(i.a)().mark((function t(){var n,o;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],o=new Set,t.prev=2;case 3:if(!(n.length<10)){t.next=8;break}return t.next=6,b.a.get("https://icanhazdadjoke.com",{headers:{Accept:"application/json"}}).then((function(e){var t=e.data;o.has(t.id)?console.error("duplicate found!"):(o.add(t.id),n.push(Object(u.a)(Object(u.a)({},t),{},{votes:0})))}));case 6:t.next=3;break;case 8:e.setState({jokes:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.log(t.t0);case 14:console.log(e.state.jokes);case 15:case"end":return t.stop()}}),t,null,[[2,11]])}))),e.vote=function(t,n){e.setState({jokes:e.state.jokes.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{votes:e.votes+n}):e}))})},e.state={jokes:[]},e.vote=e.vote.bind(Object(h.a)(e)),e.getJokes=e.getJokes.bind(Object(h.a)(e)),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getJokes();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(l.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===this.state.jokes.length&&this.getJokes();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"JokeList",children:[Object(k.jsx)("button",{className:"JokeList-getmore",onClick:function(){return e.setState({jokes:[]})},children:"Get New Jokes"}),Object(r.a)(this.state.jokes).sort((function(e,t){return t.votes-e.votes})).map((function(t){return Object(k.jsx)(O,{text:t.joke,id:t.id,votes:t.votes,vote:e.vote},t.id)}))]})}}]),n}(c.a.Component)),m=g;var w=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(m,{})})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(k.jsx)(w,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/pasha-log/react-jokes-classe",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/pasha-log/react-jokes-classe","/service-worker.js");x?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):J(e)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.a8f09468.chunk.js.map