(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{101:function(e,t,n){e.exports={container:"Header_container__21wXn"}},105:function(e,t,n){e.exports={confirmed:"InfoCard_confirmed__3y1k2",recovered:"InfoCard_recovered__2a97-",deaths:"InfoCard_deaths__37PJn"}},106:function(e,t,n){e.exports={container:"CountrySelect_container__1E-jy"}},109:function(e,t,n){e.exports={container:"Chart_container__3SDj1"}},110:function(e,t,n){e.exports={container:"infoTable_container__3i9qB",button:"infoTable_button__39X60"}},119:function(e,t,n){e.exports=n(224)},224:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(10),u=n.n(l),i=n(13),s=n(15),m=n(19),f="https://covid19.mathdro.id/api",d=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t&&"Global"!==t?"".concat(f,"/countries/").concat(t):f,e.prev=1,e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c={status:a.status,data:[{titleEn:"confirmed",titleRu:"\u0418\u043d\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043e",value:r.confirmed.value,lastUpdate:r.lastUpdate},{titleEn:"recovered",titleRu:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u0432\u0448\u0438\u0445",value:r.recovered.value,lastUpdate:r.lastUpdate},{titleEn:"deaths",titleRu:"\u0423\u043c\u0435\u0440\u0448\u0438\u0445",value:r.deaths.value,lastUpdate:r.lastUpdate}]},e.abrupt("return",c);case 12:return e.prev=12,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"/daily"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,a=n.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,a,r,c,o,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f,"/countries"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,a=n.countries,e.next=10,fetch("https://dmitrijpedan.github.io/covid19_tracker/countries.json");case 10:return r=e.sent,e.next=13,r.json();case 13:return c=e.sent,o=c.countryList.country,e.next=17,fetch("https://restcountries.eu/rest/v2/all?fields=alpha3Code;population;flag");case 17:return l=e.sent,e.next=20,l.json();case 20:return i=e.sent,e.abrupt("return",a.map((function(e){var t=o.find((function(t){return e.iso3===t.alpha3}));return t?Object(m.a)(Object(m.a)({},e),{},{nameRus:t.name}):e})).map((function(e){var t=i.find((function(t){return e.iso3===t.alpha3Code}));return t?Object(m.a)(Object(m.a)({},e),{},{population:t.population,flag:t.flag}):null})).filter((function(e){return e&&"Gambia"!==e.name})).sort((function(e,t){return e.nameRus>t.nameRus?1:e.nameRus<t.nameRus?-1:0})));case 24:e.prev=24,e.t0=e.catch(0),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:return t=e.sent,e.next=6,n=t,Promise.all(n.map(function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/countries/").concat(t.name));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",Object(m.a)(Object(m.a)({},t),{},{confirmed:a.confirmed.value,recovered:a.recovered.value,deaths:a.deaths.value}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}var n}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),v=n(264),g=n(96),E=n.n(g),j=function(){return r.a.createElement("div",{className:E.a.container},r.a.createElement(v.a,{color:"secondary"}))},x=n(269),O=n(270),y=n(271),w=n(289),_=n(273),k=n(274),C=n(226),S=n(268),R=n(103),I=n.n(R),P=n(102),N=n.n(P),W=n(101),D=n.n(W),L=Object(S.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),B=function(e){var t=e.handlerChangeTheme,n=e.themeApp;L();return r.a.createElement("header",null,r.a.createElement(x.a,{position:"sticky",color:"default"},r.a.createElement(O.a,null,r.a.createElement(y.a,{control:r.a.createElement(w.a,{onChange:t,color:"secondary"})}),"dark"===n?r.a.createElement(N.a,null):r.a.createElement(I.a,null))),r.a.createElement(_.a,{className:D.a.container},r.a.createElement(k.a,{container:!0,spacing:1,justify:"center",direction:"column",alignItems:"center"},r.a.createElement(C.a,{variant:"h2",className:"title",color:"textPrimary"},"COVID-19"),r.a.createElement(C.a,{variant:"subtitle1",className:"subtitle",color:"textSecondary"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"))))},G=n(275),U=n(276),T=n(104),V=n.n(T),A=n(105),J=n.n(A),H=function(e){var t=e.data;return r.a.createElement(_.a,null,r.a.createElement(k.a,{container:!0,spacing:3,justify:"center"},t.map((function(e,t){return r.a.createElement(k.a,{key:t,item:!0,component:G.a,xs:12,md:3,className:J.a[e.titleEn]},r.a.createElement(U.a,null,r.a.createElement(C.a,{color:"textSecondary",variant:"h6",gutterBottom:!0},e.titleRu),r.a.createElement(C.a,{variant:"h5"},r.a.createElement(V.a,{start:0,end:e.value,duration:2,separator:","})),r.a.createElement(C.a,{variant:"caption"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 COVID-19 \u043f\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044e \u043d\u0430: ",new Date(e.lastUpdate).toLocaleDateString())))}))))},M=n(277),X=n(290),q=n(107),z=n(278),F=n(106),$=n.n(F),K=function(e){var t=e.handleCountrySelect,n=Object(a.useState)([]),c=Object(s.a)(n,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,b();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:$.a.container},r.a.createElement(M.a,null,r.a.createElement(X.a,{htmlFor:"country-label"},"\u0421\u0442\u0440\u0430\u043d\u0430"),r.a.createElement(q.a,{id:"country-label",defaultValue:"Global",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"Global"},"\u0412\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u044b"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e.name},e.nameRus?e.nameRus:e.name)}))),r.a.createElement(z.a,null,"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0432\u0437\u044f\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435")))},Q=n(73),Y=n(109),Z=n.n(Y),ee=function(e){var t=e.countryData,n=e.country,c=Object(a.useState)([]),o=Object(s.a)(c,2),l=o[0],m=o[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,p();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=l.length?r.a.createElement(Q.b,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"\u0418\u043d\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043e",borderWidth:1,pointRadius:2,pointStyle:"circle",borderColor:"rgb(44, 173, 248)",backgroundColor:"rgba(44, 173, 248, 0.2)",fill:!0},{data:l.map((function(e){return e.deaths})),label:"\u0423\u043c\u0435\u0440\u0448\u0438\u0445",borderWidth:1,pointRadius:2,borderColor:"rgb(230, 14, 14)",backgroundColor:"rgba(230, 14, 14, 0.2)",fill:!0}]},options:{title:{display:!0,text:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e COVID-19 \u043f\u043e \u0432\u0441\u0435\u043c \u0441\u0442\u0440\u0430\u043d\u0430\u043c"}}}):null,d=t?r.a.createElement(Q.a,{data:{labels:t.map((function(e){return e.titleRu})),datasets:[{data:t.map((function(e){return e.value})),label:"\u0416\u0438\u0442\u0435\u043b\u0435\u0439",backgroundColor:["rgb(44, 173, 248)","rgb(50, 155, 64)","rgb(230, 14, 14)"],fill:!0}]},options:{legend:{display:!1},title:{display:!0,text:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e COVID-19 \u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435"}}}):null;return r.a.createElement("div",{className:Z.a.container},n&&"Global"!==n?d:f)},te=[{id:"nameRus",label:"\u0421\u0442\u0440\u0430\u043d\u0430",minWidth:120},{id:"iso3",label:"\u041a\u043e\u0434",minWidth:100},{id:"population",label:"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435",minWidth:170,align:"right",format:function(e){return e.toLocaleString()}},{id:"confirmed",label:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043e",minWidth:120,align:"right",format:function(e){return e.toLocaleString()}},{id:"recovered",label:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u0432\u0448\u0438\u0445",minWidth:120,align:"right",format:function(e){return e.toLocaleString()}},{id:"deaths",label:"\u0423\u043c\u0435\u0440\u0448\u0438\u0445",minWidth:120,align:"right",format:function(e){return e.toLocaleString()}},{id:"deathsPersent",label:"\u0421\u043c\u0435\u0440\u0442\u043d\u043e\u0441\u0442\u044c",minWidth:120,align:"right",format:function(e){return e.toLocaleString()}}],ne=n(112),ae=n(280),re=n(284),ce=n(283),oe=n(279),le=n(281),ue=n(288),ie=n(282),se=n(110),me=n.n(se),fe=Object(S.a)({root:{width:"100%"},container:{height:"100%"}}),de=function(){var e=fe(),t=Object(a.useState)(0),n=Object(s.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(25),f=Object(s.a)(l,2),d=f[0],p=f[1],b=Object(a.useState)([]),v=Object(s.a)(b,2),g=v[0],E=v[1];Object(a.useEffect)((function(){Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,h();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[]);var x,O=g.length?r.a.createElement(ne.a,{className:e.root},r.a.createElement(oe.a,{className:e.container},r.a.createElement(ae.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(le.a,null,r.a.createElement(ie.a,null,te.map((function(e,t){return r.a.createElement(ce.a,{key:"tableCell"+t,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(re.a,null,(x=g,x.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{deathsPersent:e.deaths/e.population*100})}))).slice(c*d,c*d+d).map((function(e,t){return r.a.createElement(ie.a,{hover:!0,role:"checkbox",tabIndex:-1,key:"tableRow"+t},te.map((function(t,n){var a=e[t.id];return r.a.createElement(ce.a,{key:n,align:t.align},t.format&&"number"===typeof a?t.format(a):a)})))}))))),r.a.createElement(ue.a,{rowsPerPageOptions:[10,25,50,100],component:"div",labelRowsPerPage:"\u0421\u0442\u0440\u043e\u043a \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",backIconButtonText:"\u041f\u0440\u0435\u0434. \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",nextIconButtonText:"\u0421\u043b\u0435\u0434. \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",count:g.length,rowsPerPage:d,page:c,onChangePage:function(e,t){return o(t)},onChangeRowsPerPage:function(e){p(+e.target.value),o(0)}})):null;return r.a.createElement(_.a,{className:me.a.container},r.a.createElement(k.a,{container:!0,spacing:1,justify:"center",direction:"column",alignItems:"center"},g?O:r.a.createElement(j,null)))},pe=n(287),be=n(111),he=n(285),ve=n(286),ge=n(74),Ee=n.n(ge),je=function(){var e=Object(a.useState)("light"),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),l=Object(s.a)(o,2),m=l[0],f=l[1],p=Object(a.useState)(""),b=Object(s.a)(p,2),h=b[0],v=b[1],g=Object(a.useState)(!1),E=Object(s.a)(g,2),x=E[0],O=E[1],y=Object(be.a)({palette:{type:n}});Object(a.useEffect)((function(){Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:(t=e.sent)&&f(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var w=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,d(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1),v(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?r.a.createElement(he.a,{theme:y},r.a.createElement(ve.a,null),r.a.createElement(B,{handlerChangeTheme:function(){return c("light"===n?"dark":"light")},themeApp:n}),r.a.createElement(K,{handleCountrySelect:w}),r.a.createElement(H,{data:m.data}),r.a.createElement(ee,{countryData:m.data,country:h}),r.a.createElement("div",{className:Ee.a.container},r.a.createElement(C.a,{variant:"subtitle1",className:"subtitle",color:"textSecondary"},"\u041d\u0438\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0430\u043c \u043c\u0438\u0440\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),r.a.createElement(pe.a,{variant:"contained",onClick:function(){return O(!x)},className:Ee.a.button},x?"\u0421\u043a\u0440\u044b\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443")),x&&r.a.createElement(de,null)):r.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.title="COVID-19 \u0418\u043d\u0444\u043e",console.log(o.a),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,n){e.exports={container:"App_container__eSJ6i",button:"App_button__z3Rot"}},96:function(e,t,n){e.exports={container:"Loader_container__25fpM"}}},[[119,1,2]]]);
//# sourceMappingURL=main.90ad2ac6.chunk.js.map