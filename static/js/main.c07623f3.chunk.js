(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,e,t){n.exports=t(35)},25:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(9),i=t.n(a),c=(t(25),t(4)),s=t(5),u=t(8),l=t(6),d=t(7),f=t(17),p=t(3),h=t(14),g=t.n(h),b=t(1),v=t(2);function m(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border-top: 6px solid red;\n  box-shadow: 5px 5px 30px rgba(0,0,0,0.2);\n  border-radius: 0 0 3px 3px;\n  font: 'Hind', sans-serif;\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  top:0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n"]);return m=function(){return n},n}var w=v.a.div(m());function y(){var n=Object(b.a)(["\n    color: red;\n    font-size: 1.5em;\n    text-align: center;\n    letter-spacing: 4px;\n    font-weight: 600;\n    text-transform: uppercase;\n"]);return y=function(){return n},n}var j=v.a.h1(y());function x(){var n=Object(b.a)(["\n    list-style: none;\n    color: #ACA4A6;\n    padding: 0;\n    text-align: center;\n    overflow: scroll;\n    height: 200px;\n"]);return x=function(){return n},n}var O=v.a.ul(x());function k(){var n=Object(b.a)(["\n    font-size: 1.2em;\n    font-weight: 600;\n"]);return k=function(){return n},n}var S=v.a.li(k());function E(){var n=Object(b.a)(["\n    display: flex;\n    margin: auto;\n"]);return E=function(){return n},n}var A=v.a.div(E());function C(){var n=Object(b.a)(["\n    font-size: 1.0em;\n    height: 2em;\n    font-weight: 400;\n    border-radius: 3px;\n    background: ","\n    padding: ","\n    border: none;\n    color: white;\n    outline: none;\n    margin-right: 10px;\n    text-align: center;\n\n    &:hover {\n        background: ",";\n    }\n"]);return C=function(){return n},n}var W=v.a.button(C(),function(n){return n.primary?"lightgreen;":"lightgray;"},function(n){return n.primary?"0 20px":"0 10px"},function(n){return n.primary?"green;":"gray;"});W.defaultProps={primary:!0};var z=W,B=function(n){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.props,e=n.buttonAction,t=n.primary,r=n.text;return o.a.createElement(z,{onClick:e,primary:t},r)}}]),e}(r.Component),P=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this,n))).state={sets:[]},t.addSet=t.addSet.bind(Object(p.a)(Object(p.a)(t))),t.clearSets=t.clearSets.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"addSet",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{pounds:130,reps:10};this.setState(function(n){return{sets:[].concat(Object(f.a)(n.sets),[e])}})}},{key:"clearSets",value:function(){this.setState({sets:[]})}},{key:"renderSets",value:function(){return this.state.sets.map(function(n){var e=n.pounds,t=n.reps;return o.a.createElement(S,{key:g()()},"".concat(e," pounds, ").concat(t," reps"))})}},{key:"renderEmptyState",value:function(){return o.a.createElement("img",{style:{width:"200px"},src:"http://i63.tinypic.com/jg4ck4.png"})}},{key:"render",value:function(){var n=this.state.sets,e=n.length>0,t=7===n.length;return o.a.createElement(w,null,o.a.createElement(j,null,"Bicep Curl"),o.a.createElement(O,null,e?this.renderSets():this.renderEmptyState()),o.a.createElement(A,null,o.a.createElement(B,{buttonAction:t?this.clearSets:this.addSet,text:t?"Finish!":"Add Set"}),e&&!t?o.a.createElement(B,{buttonAction:this.clearSets,primary:!1,text:"Clear"}):null))}}]),e}(r.Component),R=function(n){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(P,null)}}]),e}(r.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}i.a.render(o.a.createElement(R,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/workout-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/workout-tracker","/service-worker.js");U?(function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):J(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):J(e,n)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.c07623f3.chunk.js.map