webpackJsonp([1],{"4ap3":function(e,t){},Ddnf:function(e,t){},E51W:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},o,!1,function(e){a("cGId")},null,null).exports,i=a("/ocq"),s=a("mtWM"),c=a.n(s),d=function(e,t,a,n){n.loading=!0,c.a.get(e,t).then(function(e,t){t||a(e),n.loading=!1})},h={props:{weather_info:{type:Object}},mounted:function(){var e=$(".container"),t=$("#card"),a=Snap("#inner"),n=Snap("#outer"),o=Snap("#back"),r=$("#summary"),i=($("#date"),Snap.select("#layer1")),s=Snap.select("#layer2"),c=Snap.select("#layer3");window.innerRainHolder1=i.group(),window.innerRainHolder2=s.group(),window.innerRainHolder3=c.group(),window.innerLeafHolder=i.group(),window.innerSnowHolder=i.group(),window.innerLightningHolder=i.group();var d,h,l=n.rect(),u=Snap.select("#leaf"),f=Snap.select("#sun"),p=Snap.select("#sunburst"),w=n.group(),m=n.group(),v=n.group();m.attr({"clip-path":l});var g={container:{width:0,height:0},card:{width:0,height:0}},y=[{group:Snap.select("#cloud1")},{group:Snap.select("#cloud2")},{group:Snap.select("#cloud3")}],M=[{type:"snow",name:"下雪"},{type:"wind",name:"刮风"},{type:"rain",name:"下雨"},{type:"thunder",name:"雷雨"},{type:"sun",name:"晴天"},{type:"cloudy",name:"多云"}],_={windSpeed:2,rainCount:0,leafCount:0,snowCount:0,cloudHeight:100,cloudSpace:30,cloudArch:50,renewCheck:10,splashBounce:80},C=0,x=[],T=[],b=[];function S(){g.container.width=e.width(),g.container.height=e.height(),g.card.width=t.width(),g.card.height=t.height(),g.card.offset=t.offset(),a.attr({width:g.card.width,height:g.card.height}),n.attr({width:g.container.width,height:g.container.height}),o.attr({width:g.container.width,height:g.container.height}),TweenMax.set(p.node,{transformOrigin:"50% 50%",x:g.container.width/2,y:g.card.height/2+g.card.offset.top}),TweenMax.fromTo(p.node,20,{rotation:0},{rotation:360,repeat:-1,ease:Power0.easeInOut}),l.attr({x:g.card.offset.left,y:0,width:g.container.width-g.card.offset.left,height:g.container.height})}function k(e,t){var a=_.cloudSpace*t+_.cloudHeight,n=a+_.cloudArch+Math.random()*_.cloudArch,o=g.card.width,r=[];r.push("M"+[-o,0].join(",")),r.push([o,0].join(",")),r.push("Q"+[2*o,a/2].join(",")),r.push([o,a].join(",")),r.push("Q"+[.5*o,n].join(",")),r.push([0,a].join(",")),r.push("Q"+[-.5*o,n].join(",")),r.push([-o,a].join(",")),r.push("Q"+[-2*o,a/2].join(",")),r.push([-o,0].join(","));var i=r.join(" ");e.path||(e.path=e.group.path()),e.path.animate({d:i},0)}function P(){var e=3*Math.random(),t="thunder"==d.type?35:14,a=Math.random()*(g.card.width-40)+20,n=window["innerRainHolder"+(3-Math.floor(e))].path("M0,0 0,"+t).attr({fill:"none",stroke:"thunder"==d.type?"#777":"#0000ff",strokeWidth:e});x.push(n),TweenMax.fromTo(n.node,1,{x:a,y:0-t},{delay:Math.random(),y:g.card.height,ease:Power2.easeIn,onComplete:O,onCompleteParams:[n,e,a,d.type]})}function O(e,t,a,n){for(var o in e.remove(),e=null,x)x[o].paper||x.splice(o,1);x.length<_.rainCount&&(P(),t>2&&function(e,t){var a="thunder"==t?30:20,n="thunder"==t?120:100,o="thunder"==t?.7:.5,r=0-Math.random()*n,i=80*Math.random()-40,s=[];s.push("M0,0"),s.push("Q"+i+","+r),s.push(2*i+",80");var c=w.path(s.join(" ")).attr({fill:"none",stroke:"thunder"==t?"#777":"#0000ff",strokeWidth:1}),d=Snap.path.getTotalLength(c),h=g.card.offset.left,l=g.card.offset.top+g.card.height;c.node.style.strokeDasharray=a+" "+d,TweenMax.fromTo(c.node,o,{strokeWidth:2,y:l,x:h+20+e,opacity:1,strokeDashoffset:a},{strokeWidth:0,strokeDashoffset:-d,opacity:1,onComplete:I,onCompleteParams:[c],ease:SlowMo.ease.config(.4,.1,!1)})}(a,n))}function I(e){e.remove(),e=null}function L(){var e,t,a,n,o=.5+.5*Math.random(),r=g.card.height/2,i=r+Math.random()*r,s=i-(Math.random()*(2*r)-r),c=["#76993E","#4A5E23","#6D632F"],d=c[Math.floor(Math.random()*c.length)];o>.8?(e=u.clone().appendTo(m).attr({fill:d}),i+=g.card.offset.top/2,s+=g.card.offset.top/2,n=(t=g.card.offset.left-100)+(g.container.width-g.card.offset.left)/2,a=g.container.width+50):(e=u.clone().appendTo(innerLeafHolder).attr({fill:d}),t=-100,n=g.card.width/2,a=g.card.width+50),T.push(e);var h=[{x:t,y:i},{x:n,y:Math.random()*s+s/3},{x:a,y:s}];TweenMax.fromTo(e.node,2,{rotation:180*Math.random(),x:t,y:i,scale:o},{rotation:360*Math.random(),bezier:h,onComplete:j,onCompleteParams:[e],ease:Power0.easeIn})}function j(e){for(var t in e.remove(),e=null,T)T[t].paper||T.splice(t,1);T.length<_.leafCount&&L()}function H(){var e,t,a=.5+.5*Math.random(),n=20+Math.random()*(g.card.width-40),o=-10;a>.8?(e=v.circle(0,0,5).attr({fill:"white"}),t=g.container.height+10,o=g.card.offset.top+_.cloudHeight,n+=g.card.offset.left):(e=innerSnowHolder.circle(0,0,5).attr({fill:"white"}),t=g.card.height+10),b.push(e),TweenMax.fromTo(e.node,3+5*Math.random(),{x:n,y:o},{y:t,onComplete:W,onCompleteParams:[e],ease:Power0.easeIn}),TweenMax.fromTo(e.node,1,{scale:0},{scale:a,ease:Power1.easeInOut}),TweenMax.to(e.node,3,{x:n+(150*Math.random()-75),repeat:-1,yoyo:!0,ease:Power1.easeInOut})}function W(e){for(var t in e.remove(),e=null,b)b[t].paper||b.splice(t,1);b.length<_.snowCount&&H()}function z(){for(var t=0;t<M.length;t++)e.removeClass(M[t].type),M[t].button.removeClass("active")}function F(){r.html(d.name),TweenMax.fromTo(r,1.5,{x:30},{opacity:1,x:0,ease:Power4.easeOut})}function D(){h&&clearTimeout(h),"thunder"==d.type&&(h=setTimeout(E,6e3*Math.random()))}function E(){D(),TweenMax.fromTo(t,.75,{y:-30},{y:0,ease:Elastic.easeOut});for(var e=30+Math.random()*(g.card.width-60),a=[e+",0"],n=0;n<20;n++){var o=e+(20*Math.random()-10),r=g.card.height/20*(n+1);a.push(o+","+r)}var s=i.path("M"+a.join(" ")).attr({fill:"none",stroke:"white",strokeWidth:2+Math.random()});TweenMax.to(s.node,1,{opacity:0,ease:Power4.easeOut,onComplete:function(){s.remove(),s=null}})}function A(t){switch(t.data&&(t=t.data),z(),d=t,TweenMax.killTweensOf(r),TweenMax.to(r,1,{opacity:0,x:-30,onComplete:F,ease:Power4.easeIn}),e.addClass(t.type),t.button.addClass("active"),t.type){case"wind":TweenMax.to(_,3,{windSpeed:3,ease:Power2.easeInOut});break;case"sun":TweenMax.to(_,3,{windSpeed:20,ease:Power2.easeInOut});break;default:TweenMax.to(_,3,{windSpeed:.5,ease:Power2.easeOut})}switch(t.type){case"rain":TweenMax.to(_,3,{rainCount:10,ease:Power2.easeInOut});break;case"thunder":TweenMax.to(_,3,{rainCount:60,ease:Power2.easeInOut});break;default:TweenMax.to(_,1,{rainCount:0,ease:Power2.easeOut})}switch(t.type){case"wind":TweenMax.to(_,3,{leafCount:5,ease:Power2.easeInOut});break;default:TweenMax.to(_,1,{leafCount:0,ease:Power2.easeOut})}switch(t.type){case"snow":TweenMax.to(_,3,{snowCount:40,ease:Power2.easeInOut});break;default:TweenMax.to(_,1,{snowCount:0,ease:Power2.easeOut})}switch(t.type){case"sun":TweenMax.to(f.node,4,{x:g.card.width/2,y:g.card.height/2,ease:Power2.easeInOut}),TweenMax.to(p.node,4,{scale:1,opacity:.8,y:g.card.height/2+g.card.offset.top,ease:Power2.easeInOut});break;default:TweenMax.to(f.node,2,{x:g.card.width/2,y:-100,leafCount:0,ease:Power2.easeInOut}),TweenMax.to(p.node,2,{scale:.4,opacity:0,y:g.container.height/2-50,ease:Power2.easeInOut})}D()}!function(){S();for(var e=0;e<M.length;e++){var t=M[e],a=$("#button-"+t.type);t.button=a,a.bind("click",t,A)}for(var e=0;e<y.length;e++)y[e].offset=Math.random()*g.card.width,k(y[e],e);TweenMax.set(p.node,{opacity:0}),A(M[1])}(),$(window).resize(S),requestAnimationFrame(function e(){C++;var t=C%_.renewCheck;t&&(x.length<_.rainCount&&P(),T.length<_.leafCount&&L(),b.length<_.snowCount&&H());for(var a=0;a<y.length;a++)"sun"==d.type?(y[a].offset>-1.5*g.card.width&&(y[a].offset+=_.windSpeed/(a+1)),y[a].offset>2.5*g.card.width&&(y[a].offset=-1.5*g.card.width),y[a].group.transform("t"+y[a].offset+",0")):(y[a].offset+=_.windSpeed/(a+1),y[a].offset>g.card.width&&(y[a].offset=y[a].offset-g.card.width+0),y[a].group.transform("t"+y[a].offset+",0"));requestAnimationFrame(e)}),this.changeWeather=A,this.weather=M},data:function(){return{date:(new Date).toLocaleDateString(),weather_desc:{},light_info:""}},watch:{weather_info:function(){console.log(this.weather_info),this.weather_desc=this.weather_info.result,this.light_info=this.weather_desc.index[4];var e=0;switch(this.weather_desc.weather){case"多云":e=5;break;case"晴":e=4;break;case"阴":e=5;break;case"小雨":e=2;break;case"扬沙":e=1}this.changeWeather(this.weather[e])}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("svg",{attrs:{id:"back"}},[a("radialGradient",{attrs:{id:"SVGID_1_",cx:"0",cy:"0",r:"320.8304",gradientUnits:"userSpaceOnUse"}},[a("stop",{staticStyle:{"stop-color":"#FFDE17","stop-opacity":"0.7"},attrs:{offset:"0"}}),e._v(" "),a("stop",{staticStyle:{"stop-color":"#FFF200","stop-opacity":"0"},attrs:{offset:"1"}})],1),e._v(" "),a("path",{staticStyle:{fill:"url(#SVGID_1_)"},attrs:{id:"sunburst",d:"M0,319.7c-18.6,0-37.3-1.6-55.5-4.8L-7.8,41.4c5.1,0.9,10.6,0.9,15.7,0L56,314.8C37.6,318,18.8,319.7,0,319.7z\n\t M-160.8,276.6c-32.5-18.8-61.3-42.9-85.5-71.6L-34,26.2c3.4,4.1,7.4,7.4,12,10.1L-160.8,276.6z M161.3,276.4L22.1,36.2\n\tc4.5-2.6,8.6-6,12-10.1l212.6,178.5C222.5,233.4,193.8,257.6,161.3,276.4z M-302.5,108.3C-315.4,73-321.9,36-322-1.8l277.6-0.5\n\tc0,5.3,0.9,10.4,2.7,15.2L-302.5,108.3z M302.6,107.8L41.8,12.8c1.7-4.7,2.6-9.7,2.6-14.9c0-0.3,0-0.6,0-1H322l0-1.3l0,1.9\n\tC322,35.4,315.5,72.5,302.6,107.8z M-41.8-17.5l-261-94.5c12.8-35.4,31.6-68,55.8-96.9L-34.1-30.8C-37.5-26.8-40.1-22.3-41.8-17.5z\n\t M41.7-17.7c-1.8-4.8-4.4-9.3-7.8-13.3l212-179.2c24.3,28.8,43.3,61.3,56.3,96.6L41.7-17.7z M-22.2-40.8l-139.6-240\n\tc32.7-19,68.1-32,105.2-38.6L-8-46.1C-13-45.2-17.8-43.4-22.2-40.8z M22-40.9c-4.4-2.6-9.2-4.3-14.2-5.1l47.1-273.6\n\tc37.2,6.4,72.7,19.2,105.4,38L22-40.9z"}})],1),e._v(" "),a("nav",[a("p",{staticClass:"plan"},[e._v("\n\t\t\t洗车指数:"+e._s(e.light_info.ivalue)+"\n\t\t")]),e._v(" "),a("p",{staticClass:"planInfo"},[e._v("\n\t\t\t"+e._s(e.light_info.detail)+"\n\t\t")])]),e._v(" "),a("div",{staticClass:"weather",attrs:{id:"card"}},[a("svg",{attrs:{id:"inner"}},[a("defs",[a("path",{attrs:{id:"leaf",d:"M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"}})]),e._v(" "),a("circle",{staticStyle:{fill:"#F7ED47"},attrs:{id:"sun",cx:"0",cy:"0",r:"50"}}),e._v(" "),a("g",{attrs:{id:"layer3"}}),e._v(" "),a("g",{staticClass:"cloud",attrs:{id:"cloud3"}}),e._v(" "),a("g",{attrs:{id:"layer2"}}),e._v(" "),a("g",{staticClass:"cloud",attrs:{id:"cloud2"}}),e._v(" "),a("g",{attrs:{id:"layer1"}}),e._v(" "),a("g",{staticClass:"cloud",attrs:{id:"cloud1"}})]),e._v(" "),a("div",{staticClass:"details"},[a("div",{staticClass:"temp"},[e._v(e._s(e.weather_desc.temp)),a("span",[e._v("c")])]),e._v(" "),a("div",{staticClass:"right"},[a("div",{attrs:{id:"date"}},[e._v(e._s(e.date)+"-"+e._s(e.weather_desc.week))]),e._v(" "),a("div",{attrs:{id:"summary"}})])])]),e._v(" "),a("svg",{attrs:{id:"outer"}})])},staticRenderFns:[]};var u={data:function(){return{loading:!1,city:"获取中....",weather_info:{}}},components:{Weather:a("VU/8")(h,l,!1,function(e){a("Ddnf")},"data-v-3775a666",null).exports},created:function(){var e=this;d("https://bird.ioliu.cn/ip",{},function(t){var a=t.data.data.area?t.data.data.area.split("省")[1]:"乌鲁木齐";e.city=a||t.data.data.area},this)},watch:{city:function(){var e=this;d("https://bird.ioliu.cn/weather",{params:{city:this.city}},function(t){e.weather_info=t.data},this)}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Content"},[a("h3",[e._v("\n\t\t"+e._s(e.city)+"\n\t")]),e._v(" "),1==e.loading?a("div",[a("mu-circular-progress",{attrs:{size:90,color:"red"}})],1):e._e(),e._v(" "),a("Weather",{attrs:{weather_info:e.weather_info}})],1)},staticRenderFns:[]};var p={data:function(){return{bottomNav:"home",bottomNavColor:"home"}},components:{WashCar:a("VU/8")(u,f,!1,function(e){a("4ap3")},"data-v-4b1ac1b4",null).exports},methods:{handleChange:function(e){this.bottomNav=e}}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav"},[t("mu-paper",{staticStyle:{"max-width":"100%"}},[t("mu-bottom-nav",{attrs:{value:this.bottomNav},on:{change:this.handleChange}},[t("mu-bottom-nav-item",{attrs:{value:"home",title:"主页",icon:"directions_car"}}),this._v(" "),t("mu-bottom-nav-item",{attrs:{value:"loyalty",title:"建议",icon:"loyalty"}})],1)],1),this._v(" "),t("div",{staticClass:"Content"},[t("WashCar")],1)],1)},staticRenderFns:[]};var m=a("VU/8")(p,w,!1,function(e){a("YP4o")},"data-v-1bb572b0",null).exports;n.default.use(i.a);var v=new i.a({routes:[{path:"/",name:"index",component:m}]}),g=a("u64Q"),y=a.n(g);a("E51W"),a("kVx/");n.default.use(y.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:v,components:{App:r},template:"<App/>"})},YP4o:function(e,t){},cGId:function(e,t){},"kVx/":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8b2c339d2cb252248a80.js.map