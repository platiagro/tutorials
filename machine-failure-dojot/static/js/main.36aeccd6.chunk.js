(this["webpackJsonpmachine-failure-dojot"]=this["webpackJsonpmachine-failure-dojot"]||[]).push([[0],{212:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIOSURBVHgB5VbdccIwDFZ6fW9GyAalE5QRsgHpBLABbBCYgDIBMEHSCWADsgFs4EqxTNXUiRNQrw/97nSJY1v+Ilk/AC0wxsxRzqY/DigJKCMCP7kUH1uUHcoG5QLdiFFyfn+Joii0/j4gwYxMMnBPzBYfgyIeOuYqGAC22hElBUU8gC4+UF5BEdoES5QRuRuUoEIQCU1RRmBdTK5Wc7OWBYnQnO9hhTICJXQRTAZE5AplzHmQ3JuAEh4D8wUeWkI/ELETKCNEkDCGP4R2FKvjfxPk9JOBNlwtvgMn1uO6oVwmb3zf3tX5KBA8sB5KVSdHmscJjwu4FcZ2JgdzG8hqaUPXUswtxdo8xCUKEKWKMLSuHn39IOqa4WPu0Zfh+g2EiJDJhTs0QZ6Y8jnS5dLiraUxMvay0p2h7nkP4e55KBKwlivRUm98XrPiVNDWiRsbUWv4RbDl6m7bfAVJE0Xb5mubzpu37Ja0Zf2U59fGkyqMDQqnIxPfabzoIEjIfQcaQXDd2BB7LCGx8+hr6nC6ix4ECROpr1lJRoFxMwKf4CfiwDiEpfQMEbwIJTLcKV2UcieOqWM+ik8rzwHyW4V7pJX7BCBxKa7eY9NfLyi7oLMjNvayxx3ztQ63ht+N+V5JQqg5uTRTiL/XTjPPKBnpRmsumPS5595FXUmY5IyVaYN+eI/k3t0HY6N70mfvJ7Yoh6owT8fGAAAAAElFTkSuQmCC"},242:function(e,a,t){e.exports=t(513)},251:function(e,a,t){},253:function(e,a,t){},254:function(e,a,t){},278:function(e,a,t){},279:function(e,a,t){},412:function(e,a){},513:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),i=t.n(o),c=t(146),l=t(46);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(251),t(252);var s=t(31),u=t(516),m=(t(253),t(523)),d=t(212),h=t.n(d),f=(t(254),function(e,a){var t=a.find((function(a){return a.path===e.pathname}));return t||(t=a.find((function(e){return"*"===e.path}))),t}),b=function(e){var a=e.location,t=e.mainRoutes;return r.a.createElement("div",null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:h.a,alt:"Falha em M\xe1quina"}),r.a.createElement("span",{className:"machine-header-title"},"Falha em M\xe1quina")),r.a.createElement(m.a,{className:"machine-header-menu",theme:"dark",mode:"horizontal",selectedKeys:[a&&t?f(a,t).path:null]}))};b.defaultProps={location:null,mainRoutes:null};var p=b,g=(t(278),t(520)),v=t(517),E=t(61),x=t(514),C=t(515),A=t(519),T=t(215),w=t(216),y=t(236),k=t(240),O=(t(279),t(518)),S=t(521),M=function(e){Object(k.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={url:"",sensor:"",machine:"",isModalVisible:!1},e.showModal=function(){e.setState({isModalVisible:!0})},e.setUrl=function(a){e.setState({url:a.target.value})},e.setSensor=function(a){e.setState({sensor:a.target.value})},e.setMachine=function(a){e.setState({machine:a.target.value})},e.handleOk=function(){e.setState({isModalVisible:!1}),e.props.onSubmit(e.state.url,e.state.sensor,e.state.machine)},e.handleCancel=function(){e.setState({isModalVisible:!1})},e}return Object(w.a)(t,[{key:"render",value:function(){var e=this.state.isModalVisible,a=this.props.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{title:"Informar URL do ambiente e Dispositivos",width:600,visible:e,onOk:this.handleOk,onCancel:this.handleCancel,okText:"OK",cancelText:"Cancelar",okButtonProps:{className:a}},r.a.createElement(v.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"url"}),r.a.createElement(v.a.Item,{label:"URL",name:"url"},r.a.createElement(S.a,{placeholder:"https://xx.xx.xx.xx",onChange:this.setUrl,onPressEnter:this.handleOk})),r.a.createElement(v.a.Item,{label:"Dispositivo - Sensor",name:"sensor"},r.a.createElement(S.a,{placeholder:"xxxxx",onChange:this.setSensor,onPressEnter:this.handleOk})),r.a.createElement(v.a.Item,{label:"Dispositivo - Maquina",name:"machine"},r.a.createElement(S.a,{placeholder:"xxxxx",onChange:this.setMachine,onPressEnter:this.handleOk})))),r.a.createElement("div",{className:"center-box"},r.a.createElement("h1",null,"Conecte este dashboard \xe0 plataforma dojot"),r.a.createElement("p",null,"Informe a URL e Dispositivos da plataforma dojot"),r.a.createElement(E.a,{className:a,onClick:this.showModal},"Informar")))}}]),t}(r.a.Component),N=t(522),D="CONNECT",R="DISCONNECT",j="SET_CONFIG",B="SET_SENSOR_DATA",I="SET_MACHINE_DATA",U=t(71),q=t.n(U),V=t(126),F=t(151),L=t.n(F),W=t(226),z=t.n(W),J=null,P=function(){var e=Object(V.a)(q.a.mark((function e(a,t,n,r,o,i){var c,l,s,u,m,d;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(a,"auth"),e.next=3,Q(c);case 3:return l=e.sent,s="".concat(a,"stream/socketio"),e.next=7,K(s,l.jwt);case 7:u=e.sent,m=new URL(a),d="".concat(m.protocol,"//").concat(m.hostname),(J=z()(d,{path:"".concat(m.pathname,"socket.io"),query:{token:u.token}})).on(t,(function(e){console.log("Message from ".concat(t," (sensor)")),console.log(e),o(r,e)})),J.on(n,(function(e){console.log("Message from ".concat(n," (model)")),console.log(e),i(r,e)}));case 13:case"end":return e.stop()}}),e)})));return function(a,t,n,r,o,i){return e.apply(this,arguments)}}(),Q=function(){var e=Object(V.a)(q.a.mark((function e(a){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post(a,{username:"admin",passwd:"admin"},{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),K=function(){var e=Object(V.a)(q.a.mark((function e(a,t){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get(a,{headers:{Authorization:"Bearer ".concat(t)},timeout:5e3});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),Y={connect:P,disconnect:function(){null!=J&&J.close()}},_=function(e,a,t){return function(n){return Y.connect(e,a,t,n,H,X).then((function(){console.log("Conectado a: ".concat(e)),n({type:D})})).catch((function(a){console.log(a),N.b.error("N\xe3o foi poss\xedvel conectar-se a: ".concat(e))})),{type:j,url:e,sensor:a,machine:t}}},H=function(e,a){e({type:B,data:a.attrs})},X=function(e,a){var t=Object.keys(a.attrs).find((function(e){return e.endsWith("Sim")}));e({type:I,data:a.attrs,score:a.attrs[t].toFixed(2)})},G=Object(l.b)((function(e){return{url:e.url,sensor:e.sensor,machine:e.machine}}),(function(e){return{handleSubmit:function(a,t,n){return e(_(a,t,n))}}}))((function(e){var a=e.url,t=e.sensor,n=e.machine,o=e.theme,i=e.handleSubmit;return r.a.createElement(M,{theme:o,url:a,sensor:t,machine:n,onSubmit:i})})),Z=t(124),$=t(62);t.n($).a.elements.Rectangle.prototype.draw=function(){var e,a,t,n,r,o,i,c=this._chart.ctx,l=this._view,s=l.borderWidth,u=this._chart.config.options.cornerRadius,m=this._chart.config.options.fullCornerRadius,d=this._chart.config.options.stackedRounded,h=this._chart.config.type;if(u<0&&(u=0),"undefined"==typeof u&&(u=0),"undefined"==typeof m&&(m=!1),"undefined"==typeof d&&(d=!1),l.horizontal?(e=l.base,a=l.x,t=l.y-l.height/2,n=l.y+l.height/2,r=a>e?1:-1,o=1,i=l.borderSkipped||"left"):(e=l.x-l.width/2,a=l.x+l.width/2,t=l.y,r=1,o=(n=l.base)>t?1:-1,i=l.borderSkipped||"bottom"),s){var f=Math.min(Math.abs(e-a),Math.abs(t-n)),b=(s=s>f?f:s)/2,p=e+("left"!==i?b*r:0),g=a+("right"!==i?-b*r:0),v=t+("top"!==i?b*o:0),E=n+("bottom"!==i?-b*o:0);p!==g&&(t=v,n=E),v!==E&&(e=p,a=g)}c.beginPath(),c.fillStyle=l.backgroundColor,c.strokeStyle=l.borderColor,c.lineWidth=s;var x=[[e,n],[e,t],[a,t],[a,n]],C=["bottom","left","top","right"].indexOf(i,0);function A(e){return x[(C+e)%4]}-1===C&&(C=0);var T,w,y,k,O,S=A(0);c.moveTo(S[0],S[1]);for(var M=1;M<4;M++){var N,D,R,j,B,I,U,q,V;if(S=A(M),4===(T=M+1)&&(T=0),A(T),w=x[2][0]-x[1][0],y=x[0][1]-x[1][1],k=x[1][0],O=x[1][1],(N=u)>Math.abs(y)/2&&(N=Math.floor(Math.abs(y)/2)),N>Math.abs(w)/2&&(N=Math.floor(Math.abs(w)/2)),y<0)D=k,R=k+w,j=O+y,B=O+y,I=k,U=k+w,q=O,V=O,c.moveTo(I+N,q),c.lineTo(U-N,V),c.quadraticCurveTo(U,V,U,V-N),c.lineTo(R,B+N),m?c.quadraticCurveTo(R,B,R-N,B):c.lineTo(R,B,R-N,B),c.lineTo(D+N,j),m?c.quadraticCurveTo(D,j,D,j+N):c.lineTo(D,j,D,j+N),c.lineTo(I,q-N),c.quadraticCurveTo(I,q,I+N,q);else if(w<0)D=k+w,R=k,j=O,B=O,I=k+w,U=k,q=O+y,V=O+y,c.moveTo(I+N,q),c.lineTo(U-N,V),m?c.quadraticCurveTo(U,V,U,V-N):c.lineTo(U,V,U,V-N),c.lineTo(R,B+N),m?c.quadraticCurveTo(R,B,R-N,B):c.lineTo(R,B,R-N,B),c.lineTo(D+N,j),c.quadraticCurveTo(D,j,D,j+N),c.lineTo(I,q-N),c.quadraticCurveTo(I,q,I+N,q);else{for(var F=0,L=0,W=this._chart.data.datasets.length;L<W;L++)this._chart.getDatasetMeta(L).hidden||(F=L);this._datasetIndex===F?(c.moveTo(k+N,O),c.lineTo(k+w-N,O),c.quadraticCurveTo(k+w,O,k+w,O+N),c.lineTo(k+w,O+y-N),m||"horizontalBar"===h?c.quadraticCurveTo(k+w,O+y,k+w-N,O+y):c.lineTo(k+w,O+y,k+w-N,O+y),c.lineTo(k+N,O+y),m?c.quadraticCurveTo(k,O+y,k,O+y-N):c.lineTo(k,O+y,k,O+y-N),c.lineTo(k,O+N),m||"bar"===h?c.quadraticCurveTo(k,O,k+N,O):c.lineTo(k,O,k+N,O)):(c.moveTo(k,O),c.lineTo(k+w,O),c.lineTo(k+w,O+y),c.lineTo(k,O+y),c.lineTo(k,O))}}c.fill(),s&&c.stroke()};var ee=function(e){var a=e.data;if(!a||0===a.length)return r.a.createElement(A.a,{active:!0});var t=function(e){var a={labels:["Vibra\xe7\xe3o 1","Vibra\xe7\xe3o 2","Vibra\xe7\xe3o 3","Vibra\xe7\xe3o 4","Vibra\xe7\xe3o 5","Vibra\xe7\xe3o 6"],datasets:[]};return e.length>0&&(console.log(e),a.datasets.push({label:"Medidas de Vibra\xe7\xe3o",backgroundColor:"#0094AD",borderColor:"#0094AD",borderWidth:1,data:[e[e.length-1].Vibracao1,e[e.length-1].Vibracao2,e[e.length-1].Vibracao3,e[e.length-1].Vibracao4,e[e.length-1].Vibracao5,e[e.length-1].Vibracao6]})),a}(a);return r.a.createElement(Z.a,{data:t,height:200,options:{legend:{display:!1},tooltips:{enabled:!1},maintainAspectRatio:!1,cornerRadius:2,scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:"#333",fontFamily:"Open Sans",fontSize:14,autoSkip:!1,maxRotation:0,minRotation:0}}],yAxes:[{gridLines:{display:!1},ticks:{fontColor:"#333",fontFamily:"Open Sans",fontSize:16,beginAtZero:!0,stepSize:400}}]}}})},ae=Object(l.b)((function(e){return{sensorData:e.sensorData}}))((function(e){var a=e.sensorData;return r.a.createElement(ee,{data:a})})),te=["Minerva"],ne=[["rgba(224, 162, 22, 0.1)","rgba(224, 162, 22, 0.3)","rgba(224, 162, 22, 0.5)","rgba(224, 162, 22, 0.7)","rgba(224, 162, 22, 1.0)"],["rgba(46, 184, 166, 0.1)","rgba(46, 184, 166, 0.3)","rgba(46, 184, 166, 0.5)","rgba(46, 184, 166, 0.7)","rgba(46, 184, 166, 1.0)"],["rgba(0, 148, 173, 0.1)","rgba(0, 148, 173, 0.3)","rgba(0, 148, 173, 0.5)","rgba(0, 148, 173, 0.7)","rgba(0, 148, 173, 1.0)"],["rgba(250, 126, 25, 0.1)","rgba(250, 126, 25, 0.3)","rgba(250, 126, 25, 0.5)","rgba(250, 126, 25, 0.7)","rgba(250, 126, 25, 1.0)"]],re=function(e){var a=e.data;if(!a||0===a.length)return r.a.createElement(A.a,{active:!0});var t=function(e){var a={datasets:[]};return a.datasets.push({label:te[0],backgroundColor:ne[0%ne.length],borderColor:"rgba(0, 0, 0, 0.0)",data:e.slice(-5).map((function(e){var a=e[Object.keys(e).find((function(e){return e.endsWith("Sim")}))];return{x:1,y:a,r:155*Math.pow(a,3)-268*Math.pow(a,2)+150*a+12.5}}))}),a}(a);return r.a.createElement(Z.b,{data:t,height:300,options:{animation:{duration:0},title:{display:!0,text:" ",lineHeight:2.5},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{maxBarThickness:42,gridLines:{display:!1},ticks:{min:0,max:9,fontColor:"#333",fontFamily:"Open Sans",fontSize:14,callback:function(e,a,t){return 0===e||e>8?"":te[a-1]}}}],yAxes:[{gridLines:{display:!1},ticks:{fontColor:"#333",fontFamily:"Open Sans",fontSize:14,beginAtZero:!0,stepSize:.2,min:0,max:1}}]},tooltips:{callbacks:{label:function(e,a){return"Score: "+e.yLabel.toFixed(2).replace(".",",")}}}}})},oe=Object(l.b)((function(e){return{machineData:e.machineData}}))((function(e){var a=e.machineData;return r.a.createElement(re,{data:a})})),ie=g.a.Option,ce=function(e){var a=e.isConnected,t=e.machine,n=e.score,o=e.onDisconnect;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{layout:"inline"},r.a.createElement(v.a.Item,{label:"M\xe1quinas"},r.a.createElement(g.a,{style:{width:300},placeholder:"Selecione",value:t},te.map((function(e){return r.a.createElement(ie,{key:e},e)})))),r.a.createElement(v.a.Item,{style:{float:"right",margin:0}},r.a.createElement(E.a,{className:"orange",onClick:o},"Redefinir URL e Dispositivos"))),r.a.createElement(x.a,{gutter:16},r.a.createElement(C.a,{span:6},r.a.createElement("div",{className:"white-box no-padding"},r.a.createElement("div",{className:"white-box-header"},"M\xe1quina | ",r.a.createElement("span",{className:"blue"},t)),r.a.createElement("div",{className:"white-box-content"},n?r.a.createElement(E.a,{shape:"circle",className:"score"},n):r.a.createElement(A.a,{active:!0}),r.a.createElement("div",{className:"text-center"},"probabilidade de falha")))),r.a.createElement(C.a,{span:18},r.a.createElement("div",{className:"white-box no-padding"},r.a.createElement("div",{className:"white-box-header"},"Medidas de vibra\xe7\xe3o | ",r.a.createElement("span",{className:"blue"},t)),r.a.createElement("div",{className:"white-box-content"},r.a.createElement(ae,null))))),r.a.createElement(x.a,null,r.a.createElement(C.a,{span:24},r.a.createElement("div",{className:"white-box no-padding",style:{height:400}},r.a.createElement("div",{className:"white-box-header"},"Probabilidade de falha |"," ",r.a.createElement("span",{className:"blue"},"Todas as m\xe1quinas")),r.a.createElement("div",{className:"white-box-content"},r.a.createElement(oe,null)))))):r.a.createElement(G,{theme:"orange"}))},le=Object(l.b)((function(e){return{isConnected:e.isConnected,score:e.score}}),(function(e){return{handleDisconnect:function(){return e((Y.disconnect(),{type:R}))}}}))((function(e){var a=e.isConnected,t=e.score,n=e.handleDisconnect;return r.a.createElement(ce,{isConnected:a,machine:"Minerva",score:t,onDisconnect:n})})),se=u.a.Header,ue=u.a.Content,me=[{path:"*",exact:!0,icon:"dollar",title:"Falha em M\xe1quina",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null,r.a.createElement(p,null)),r.a.createElement(u.a,{className:"machine-container"},r.a.createElement(ue,{className:"machine-wrapper"},r.a.createElement(le,null))))}}],de=function(){return r.a.createElement(u.a,null,r.a.createElement(u.a,null,r.a.createElement(s.c,null,me.map((function(e){return r.a.createElement(s.a,{key:e.path,exact:e.exact,path:e.path,component:e.component})})))))},he=t(88),fe=t(232),be=t(156),pe=t(84),ge={isConnected:!1,url:null,sensor:null,machine:null,sensorData:[],machineData:[],score:null},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;switch(a.type){case D:return Object(pe.a)({},e,{isConnected:!0});case R:return Object(pe.a)({},e,{isConnected:!1});case j:return Object(pe.a)({},e,{url:a.url,sensor:a.sensor,machine:a.machine});case B:return Object(pe.a)({},e,{sensorData:[].concat(Object(be.a)(e.sensorData),[a.data])});case I:return Object(pe.a)({},e,{machineData:[].concat(Object(be.a)(e.machineData),[a.data]),score:a.score});default:return e}},Ee=Object(he.c)(ve,Object(he.a)(fe.a));i.a.render(r.a.createElement(l.a,{store:Ee},r.a.createElement(c.a,null,r.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[242,1,2]]]);
//# sourceMappingURL=main.36aeccd6.chunk.js.map