(this.webpackJsonpmeeting_map_test=this.webpackJsonpmeeting_map_test||[]).push([[0],{14:function(t,e,n){},2:function(t,e,n){t.exports={event:"styles_event__NkyMX",event_active:"styles_event_active__1_FLM",event__in:"styles_event__in__d2mef",event__border:"styles_event__border__3R8aq",event__border_top:"styles_event__border_top__18psw",event__border_bottom:"styles_event__border_bottom__Py8GV"}},28:function(t,e,n){"use strict";n.r(e);var i,r=n(0),o=n.n(r),c=n(12),a=n.n(c),s=n(13),d=n(5),u=n(3),_=n(6),l=n.n(_),f=n(7),v=n(2),b=n.n(v),j=n(1),h=function(t){var e=t.id,n=t.title,i=t.left,o=t.width,c=t.start,a=t.end,s=t.hours,_=t.isResize,v=t.setEvents,h=t.setResizeEventId,m=Object(r.useRef)(null),O=Object(r.useRef)("bottom"),p=Object(r.useState)(c),y=Object(u.a)(p,2),g=y[0],w=y[1],x=Object(r.useState)(a),E=Object(u.a)(x,2),N=E[0],M=E[1],S=Object(r.useState)(g/(60*s)),z=Object(u.a)(S,2),R=z[0],D=z[1],L=Object(r.useState)((N-g)/(60*s)),F=Object(u.a)(L,2),C=F[0],I=F[1],B={top:"".concat(100*R,"%"),left:"".concat(_?0:i,"%"),width:"".concat(_?100:o,"%"),height:"".concat(100*C,"%")},P=function(){h(e)},k=function(){if(_){var t={position:-1,left:0,width:100};v((function(n){return n.map((function(n){return n.id===e?Object(f.a)(Object(f.a)(Object(f.a)({},n),t),{},{start:g,end:N}):Object(f.a)(Object(f.a)({},n),t)}))})),h(null)}},A=function(t){if(_){var e,n,i=null===(e=m.current)||void 0===e?void 0:e.getBoundingClientRect().height,r=null===(n=m.current)||void 0===n?void 0:n.getBoundingClientRect().top,o=t.clientY;if(i&&void 0!==r)if("bottom"===O.current){var c=Math.ceil((o-(r+i))/24),a=Math.max(g+15,N+15*c);a!==N&&M(a)}else{var s=Math.ceil((r-o)/24),d=Math.min(N-15,g-15*s);d!==g&&w(d)}}},J=function(t){return t<10?"0".concat(t):"".concat(t)},W=function(t){return"".concat(J(Math.floor(t/60)),":").concat(J(t%60))};return Object(r.useEffect)((function(){D(g/(60*s))}),[g,s]),Object(r.useEffect)((function(){I((N-g)/(60*s))}),[g,N,s]),Object(r.useEffect)((function(){return window.addEventListener("mouseup",k),function(){window.removeEventListener("mouseup",k)}}),[_,g,N]),Object(r.useEffect)((function(){return window.addEventListener("mousemove",A),function(){window.removeEventListener("mousemove",A)}}),[_,g,N]),Object(r.useEffect)((function(){M(a)}),[a]),Object(j.jsx)("div",{className:l()(b.a.event,Object(d.a)({},b.a.event_active,_)),style:B,ref:m,draggable:!_,onDragStart:function(){return console.log("onDragStart")},onDragEnd:function(){return console.log("onDragEnd")},children:Object(j.jsxs)("div",{className:b.a.event__in,children:[Object(j.jsx)("div",{className:b.a.event__title,children:n}),Object(j.jsx)("div",{className:b.a.event__time,children:"".concat(W(g)," - ").concat(W(N))}),Object(j.jsx)("div",{className:l()(b.a.event__border,b.a.event__border_top),onMouseDown:function(){O.current="top",P()}}),Object(j.jsx)("div",{className:l()(b.a.event__border,b.a.event__border_bottom),onMouseDown:function(){O.current="bottom",P()}})]})})},m=n(4),O=n.n(m),p=[{id:"0",start:450,end:465,title:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 1",position:-1,left:0,width:100},{id:"1",start:510,end:585,title:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 2",position:-1,left:0,width:100},{id:"2",start:450,end:840,title:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 3",position:-1,left:0,width:100},{id:"3",start:390,end:540,title:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 4",position:-1,left:0,width:100},{id:"4",start:510,end:660,title:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 5",position:-1,left:0,width:100},{id:"5",start:630,end:660,title:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 6",position:-1,left:0,width:100}],y=function(){var t=15,e=Object(r.useState)(p),n=Object(u.a)(e,2),i=n[0],o=n[1],c=Object(r.useState)(null),a=Object(u.a)(c,2),s=a[0],_=a[1],f=Array.from({length:96},(function(){return[]}));i.forEach((function(e){for(var n=e.start,i=e.end,r=n;r<i;r+=t)f[r/t].push(e)})),f.forEach((function(t){if(!t.length)return"Empty line";var e=t.reduce((function(t,e){var n=e.position;return n>-1&&t.push(n),t}),[]),n=function(){var t=0;return function(){for(;e.includes(t);)t++;var n=t;return t++,n}}();t.sort((function(t,e){return e.end-t.end})).forEach((function(e){if(-1===e.position){var i=n();e.position=i}e.width=Math.min(e.width,100/t.length)}))})),f.forEach((function(e,n){if(!e.length)return"Empty line";e.sort((function(t,e){return t.position-e.position})).forEach((function(e,i,r){if(e.start===n*t){var o=r[i-1];o&&(e.left=o.left+o.width)}}))})),i.sort((function(t,e){return t.start===e.start?e.end-t.end:t.start-e.start})).forEach((function(e){for(var n=100,i=e.start;i<e.end;i+=t){var r=f[i/t].sort((function(t,e){return t.position-e.position})),o=r.findIndex((function(t){return t.id===e.id})),c=r[o+1];c&&(n=n?Math.min(n,c.left):c.left)}e.width=n-e.left}));var v=Array.from({length:24},(function(t,e){return e}));return Object(j.jsxs)("div",{className:l()(O.a.day,Object(d.a)({},O.a.day_resize,s)),children:[Object(j.jsx)("div",{className:O.a.day__hours,children:v.map((function(t){return Object(j.jsx)("div",{className:O.a.day__time,children:"".concat(t,":00")},t)}))}),Object(j.jsxs)("div",{className:O.a.day__table,children:[v.map((function(t){return Object(j.jsx)("div",{className:O.a.day__cell},t)})),i.map((function(t){return Object(j.jsx)(h,{id:t.id,title:t.title,left:t.left,width:t.width,start:t.start,end:t.end,hours:24,setEvents:o,setResizeEventId:_,isResize:s===t.id},t.id)}))]})]})},g=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(y,{})})},w=n(15),x=n(14),E=n.n(x),N=Object(w.a)(i||(i=Object(s.a)(["",";"])),E.a),M=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(N,{}),Object(j.jsx)(g,{})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),o(t),c(t)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),S()},4:function(t,e,n){t.exports={day:"styles_day__11Wd4",day_resize:"styles_day_resize__3pe_r",day__hours:"styles_day__hours__2UzQg",day__time:"styles_day__time__fG10W",day__table:"styles_day__table__QWlx6",day__cell:"styles_day__cell__3FzJP"}}},[[28,1,2]]]);
//# sourceMappingURL=main.32383130.chunk.js.map