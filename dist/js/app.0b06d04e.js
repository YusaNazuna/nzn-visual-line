(function(t){function e(e){for(var i,s,o=e[0],u=e[1],l=e[2],c=0,d=[];c<o.length;c++)s=o[c],r[s]&&d.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var h=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i,r,a,s,o=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("input",{ref:"input",attrs:{type:"file"},on:{change:t.upload}}),n("audio-sound",{attrs:{ctx:this.ctx,buffer:t.buffer}})],1)},l=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("visual-bar",{attrs:{analyser:this.analyser}}),n("visual-line",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{analyser:this.analyser}})],1)},c=[],d=(n("34ef"),{props:["analyser"],data:function(){return{animationId:null,canvasCtx:null,width:window.innerWidth,height:200}},mounted:function(){this.canvasCtx=this.$el.getContext("2d"),window.addEventListener("resize",this.resize)},methods:{play:function(){this.animationId=requestAnimationFrame(this.render)},render:function(){var t=new Uint8Array(this.analyser.frequencyBinCount);this.canvasCtx.clearRect(0,0,this.$el.width,this.$el.height),this.renderBar(t),this.animationId=requestAnimationFrame(this.render)},renderBar:function(t){this.analyser.getByteFrequencyData(t);for(var e=0,n=t.length;e<n;e++)this.canvasCtx.fillStyle="hsl(".concat(3*e,", 100%, 50%)"),this.canvasCtx.fillRect(18*e,this.$el.height,12,-.6*t[e])},resize:function(){this.width=window.innerWidth}},watch:{analyser:{handler:function(t){this.play()},deep:!0}},render:function(t){return t("canvas",{attrs:{width:this.width,height:this.height},style:{position:"absolute",left:"0",bottom:"0",zIndex:"1"}},this.$slots.default)}}),f=d,p=n("2877"),v=Object(p["a"])(f,i,r,!1,null,null,null),y=v.exports,m={props:["analyser"],data:function(){return{animationId:null,canvasCtx:null,width:window.innerWidth,height:125}},mounted:function(){this.canvasCtx=this.$el.getContext("2d"),window.addEventListener("resize",this.resize)},methods:{play:function(){this.animationId=requestAnimationFrame(this.render)},render:function(){var t=new Uint8Array(this.analyser.frequencyBinCount);this.canvasCtx.clearRect(0,0,this.$el.width,this.$el.height),this.renderLineGraph(t),this.animationId=requestAnimationFrame(this.render)},renderLineGraph:function(t){this.analyser.getByteTimeDomainData(t),this.canvasCtx.beginPath();for(var e=0,n=t.length;e<n;e++){var i=e/n*this.$el.width,r=(1-t[e]/255)*this.$el.height;0===e?this.canvasCtx.moveTo(i,r):this.canvasCtx.lineTo(i,r),this.canvasCtx.stroke()}},resize:function(){this.width=window.innerWidth}},watch:{analyser:{handler:function(t){this.play()},deep:!0}},render:function(t){return t("canvas",{attrs:{width:this.width,height:this.height},style:{position:"absolute",left:"0",bottom:"0",zIndex:"1"}},this.$slots.default)}},w=m,b=Object(p["a"])(w,a,s,!1,null,null,null),x=b.exports,g={props:["ctx","buffer"],data:function(){return{volume:.3,fftSize:512,smooth:.7,source:null,analyser:null}},methods:{play:function(){this.setup(),this.source.start(0)},stop:function(){this.source&&this.source.stop()},setup:function(){this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.analyser=this.ctx.createAnalyser(),this.gain=this.ctx.createGain(),this.analyser.fftSize=this.fftSize,this.analyser.smoothingTimeConstant=this.smooth,this.gain.gain.value=this.volume,this.source.connect(this.gain),this.gain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}},watch:{buffer:{handler:function(t){this.stop(),this.play()},deep:!0}},components:{visualBar:y,visualLine:x}},C=g,O=Object(p["a"])(C,h,c,!1,null,null,null),$=O.exports,j={name:"app",data:function(){return{reader:new FileReader,ctx:null,buffer:null}},methods:{upload:function(t){this.reader.readAsArrayBuffer(t.target.files[0]),this.reader.onload=this.readerOnload},readerOnload:function(){this.ctx=new AudioContext,this.ctx.decodeAudioData(this.reader.result,this.bufferOnload)},bufferOnload:function(t){this.buffer=t}},components:{audioSound:$}},z=j,A=(n("5c0b"),Object(p["a"])(z,u,l,!1,null,null,null)),S=A.exports;o["a"].config.productionTip=!0,new o["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("8fba"),r=n.n(i);r.a},"8fba":function(t,e,n){}});
//# sourceMappingURL=app.0b06d04e.js.map