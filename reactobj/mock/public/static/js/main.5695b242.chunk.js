(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(88)},42:function(e,t,a){},43:function(e,t){!function(e,t){var a=e.documentElement,n="orientationchange"in window?"orientationchange":"resize",l=function(){var e=a.clientWidth;e>=640&&(e=640),e&&(a.style.fontSize=e/640*100+"px")};e.addEventListener&&(t.addEventListener(n,l,!1),e.addEventListener("DOMContentLoaded",l,!1))}(document,window)},44:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},70:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),m=a(6),i=a(13),s=a(1),o=a(2),u=a(4),p=a(3),E=a(5),g=(a(42),a(43),a(44),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"qwe"},l.a.createElement("img",{src:"./img/fh.png"}),l.a.createElement("p",null,"\u7528\u6237"))}}]),t}(l.a.Component)),d=(a(45),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("div",{className:"footer-s"},l.a.createElement(m.c,{to:"/home",className:"h",activeClassName:"h1"},l.a.createElement("img",{src:"./img/sy-on.png"}),l.a.createElement("p",null,"\u9996\u9875")),l.a.createElement(m.c,{to:"/product",className:"p",activeClassName:"p1"},l.a.createElement("img",{src:"./img/sj.png"}),l.a.createElement("p",null,"\u5546\u5bb6")),l.a.createElement(m.c,{to:"/car",className:"c",activeClassName:"c1"},l.a.createElement("img",{src:"./img/car.png"}),l.a.createElement("p",null,"\u8d2d\u7269\u8f66")),l.a.createElement(m.c,{to:"/user",className:"u",activeClassName:"u1"},l.a.createElement("img",{src:"./img/my.png"}),l.a.createElement("p",null,"\u6211\u7684"))))}}]),t}(l.a.Component)),h=(a(49),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.dataName;return l.a.createElement("div",{className:"first"},l.a.createElement(m.b,{className:"second",to:{pathname:"/detail/",search:"dataName=".concat(a)}},l.a.createElement("img",{className:"b1",src:"/images/mer_shop_logo.png"}),l.a.createElement("div",{className:"title"},l.a.createElement("h3",null,t.title),l.a.createElement("p",null,l.a.createElement("img",{src:"/images/mer_logo_area.png"}),t.des),l.a.createElement("h5",{className:"hh"},l.a.createElement("img",{src:"/images/mer_logo_te.png"}),"\u5171\u6709361\u4e2a\u7279\u4ef7\u5546\u54c1"),l.a.createElement("h5",null,l.a.createElement("img",{src:"images/mer_logo_fan.png"}),"\u5168\u5e9785\u6298,\u4eab\u53d7\u5e73\u53f0\u8fd4\u5229"),l.a.createElement("h6",null,l.a.createElement("img",{src:"images/mer_logo_you.png"}),"\u5168\u5e9785\u6298,\u4eab\u53d7\u5e73\u53f0\u8fd4\u5229")),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"tu"},l.a.createElement("img",{src:"/images/mer_logo_phone.jpg"}),l.a.createElement("img",{src:"/images/mer_logo_message.jpg"})),l.a.createElement("div",{className:"xin"},l.a.createElement("p",null,"\u5e97\u94fa\u8bc4\u4ef7\uff1a",l.a.createElement("em",null,"385\u4eba")),l.a.createElement("p",null,l.a.createElement("img",{src:"/images/star-on.png"}),l.a.createElement("img",{src:"/images/star-on.png"}),l.a.createElement("img",{src:"/images/star-on.png"}),l.a.createElement("img",{src:"/images/star-off.png"}),l.a.createElement("img",{src:"/images/star-off.png"}))))))}}]),t}(l.a.Component)),b=a(17),v=a.n(b),f=(a(52),a(14)),j=a.n(f),O=a(16),N=a.n(O);j.a.interceptors.request.use(function(e){return console.log("\u62e6\u622a\u56681"),N.a.publish("VIEW_LOADING",!0),e},function(e){return Promise.reject(e)}),j.a.interceptors.response.use(function(e){return console.log("\u62e6\u622a\u56682"),N.a.publish("VIEW_LOADING",!1),e},function(e){return Promise.reject(e)}),window.axios=j.a;var y=j.a,_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={lis:[]},a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y({url:"/mock/home",params:{_page:1,_limit:10}}).then(function(t){return e.setState({lis:t.data.data})})}},{key:"render",value:function(){var e=this.state.lis;return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:"./img/fh.png"}),l.a.createElement("input",{type:"text",placeholder:"\u8f93\u5165\u5546\u5bb6\u3001\u54c1\u7c7b\u3001\u5546\u5708"}),l.a.createElement("img",{src:"./img/xx.png"})),l.a.createElement(v.a,{className:"carousel",swipeOptions:{auto:2e3,speed:300}},l.a.createElement(m.b,{to:"/detail"},l.a.createElement("img",{src:"./img/banner1.jpg"})),l.a.createElement(m.b,{to:"/detail"},l.a.createElement("img",{src:"./img/banner2.jpg"})),l.a.createElement(m.b,{to:"/detail"},l.a.createElement("img",{src:"./img/banner3.jpg"}))),l.a.createElement("div",{className:"list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_01.jpg"}),l.a.createElement("p",null,"\u7f8e\u98df")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_02.jpg"}),l.a.createElement("p",null,"\u7535\u5f71")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_03.jpg"}),l.a.createElement("p",null,"\u9152\u5e97")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_04.jpg"}),l.a.createElement("p",null,"\u4f11\u95f2\u5a31\u4e50")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_05.jpg"}),l.a.createElement("p",null,"\u5916\u5356"))),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_06.jpg"}),l.a.createElement("p",null,"\u81ea\u52a9\u9910")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_07.jpg"}),l.a.createElement("p",null,"KTV")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_08.jpg"}),l.a.createElement("p",null,"\u706b\u8f66\u7968\u673a\u7968")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_09.jpg"}),l.a.createElement("p",null,"\u5c0f\u5403\u5feb\u9910")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/index_logo_10.jpg"}),l.a.createElement("p",null,"\u7f8e\u5bb9\u7f8e\u4f53")))),l.a.createElement("div",{className:"lib"},l.a.createElement("div",{className:"libhead"},l.a.createElement("img",{src:"/images/mer_logo_area.png"}),l.a.createElement("span",null,"\u67e5\u770b\u66f4\u591a>"))),l.a.createElement("div",{className:"listAll"},e.map(function(e){return l.a.createElement(h,{key:e.id,data:e,dataName:"home"})})))}}]),t}(l.a.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={lis:[]},a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y({url:"/mock/product",params:{_page:1,_limit:12}}).then(function(t){return e.setState({lis:t.data.data})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Product"},this.state.lis.map(function(e){return l.a.createElement(h,{key:e.id,data:e,dataName:"home"})}))}}]),t}(l.a.Component),w=(a(70),a(71),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={lis:[]},a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;axios({url:"/mock/detail",params:{_page:1,_limit:1}}).then(function(t){return e.setState({lis:t.data.data})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Detail"},l.a.createElement(v.a,{className:"del",swipeOptions:{auto:2e3,speed:300}},l.a.createElement("img",{src:"./images/proinfo_banner_01.jpg"}),l.a.createElement("img",{src:"./images/proinfo_banner_01.jpg"}),l.a.createElement("img",{src:"./images/proinfo_banner_01.jpg"})),l.a.createElement("h3",null,"Swisse \u6db2\u4f53\u80f6\u539f\u86cb\u767d 500ml\u74f6"),l.a.createElement("p",null,l.a.createElement("i",null,"\uffe5158.00"),l.a.createElement("s",null,"\uffe5199.00")),l.a.createElement("div",{className:"xx"},l.a.createElement("span",null,"\u5df2\u552e\uff1a"),l.a.createElement("i",null,"354\u4ef6"),l.a.createElement("span",null,"\u5e93\u5b58\uff1a"),l.a.createElement("i",null,"500\u4ef6"),l.a.createElement("span",null,"\u8bc4\u4ef7"),l.a.createElement("i",null,"361\u4eba")),this.state.lis.map(function(e){return l.a.createElement(h,{key:e.id,data:e,dataName:"home"})}),l.a.createElement("div",{className:"xuanx"},l.a.createElement("ul",null,l.a.createElement("li",null,"\u5546\u54c1\u8be6\u60c5"),l.a.createElement("li",null,"\u66f4\u591a\u8bc4\u4ef7\uff08208\uff09"))),l.a.createElement("div",{className:"tup"},l.a.createElement("img",{src:"./images/mer_cont_img.jpg"})),l.a.createElement("div",{className:"foot"},l.a.createElement("div",{className:"left"}),l.a.createElement("div",{className:"right"})))}}]),t}(l.a.Component)),x=(a(83),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",mess:""},a.login=function(){y({url:"/mock/user",method:"POST",data:{username:a.state.usernmae,password:a.state.password}}).then(function(e){0===e.data.err?a.props.history.push("/user"):a.setState({mess:"\u767b\u5f55\u5931\u8d25"})})},a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Login"},l.a.createElement("div",{className:"tou"},l.a.createElement("img",{src:"./imag/login/head.png"})),l.a.createElement("div",{className:"form"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"text",placeholder:"\u8f93\u5165\u7528\u6237\u540d",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),l.a.createElement("li",null,l.a.createElement("input",{type:"text",placeholder:"\u8f93\u5165\u5bc6\u7801",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement("li",null,l.a.createElement("a",{href:"javascript:;"},"\u5fd8\u8bb0\u5bc6\u7801\uff1f"),l.a.createElement(m.b,{to:"/reg"},"\u8d26\u53f7\u6ce8\u518c")),l.a.createElement("li",null,l.a.createElement("input",{type:"button",value:"\u767b\u5f55",className:"btn",onClick:this.login})))),l.a.createElement("div",{className:"dl"},l.a.createElement("h3",null,"\u7b2c\u4e09\u65b9\u767b\u5f55"),l.a.createElement("img",{src:"./imag/login/icon1.png"}),l.a.createElement("img",{src:"./imag/login/icon2.png"}),l.a.createElement("img",{src:"./imag/login/icon3.png"})),l.a.createElement("div",null))}}]),t}(l.a.Component)),C=(a(84),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",mess:""},a.reg=function(){y({url:"/mock/reg",method:"POST",data:{username:a.setState.username,password:a.setState.password}}).then(function(e){0===e.data.err?a.props.history.push("/login"):a.setState({mess:"\u6ce8\u518c\u5931\u8d25"})})},a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Reg"},l.a.createElement("div",{className:"head"},l.a.createElement("p",null,"\u6ce8\u518c")),l.a.createElement("div",{className:"tx"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),l.a.createElement("li",null,l.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/login"},"\u6709\u8d26\u53f7\uff0c\u53bb\u767b\u5f55")),l.a.createElement("li",null,this.state.mess),l.a.createElement("li",null,l.a.createElement("input",{type:"button",value:"\u5b8c\u6210",className:"btn",onClick:this.reg})))))}}]),t}(l.a.Component)),S=(a(85),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"User"},l.a.createElement("div",{className:"u-h"},l.a.createElement("img",{src:"./mine/head.png"}),l.a.createElement("p",null,"hh")),l.a.createElement("div",{className:"u-c"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"./mine/icon1.png"}),l.a.createElement("span",null,"\u6211\u7684\u9879\u76ee"),l.a.createElement("u",null)),l.a.createElement("li",null,l.a.createElement("img",{src:"./mine/icon2.png"}),l.a.createElement("span",null,"\u6211\u7684\u8ba2\u5355"),l.a.createElement("u",null)),l.a.createElement("li",null,l.a.createElement("img",{src:"./mine/icon3.png"}),l.a.createElement("span",null,"\u6211\u7684\u660e\u7ec6"),l.a.createElement("u",null)),l.a.createElement("li",null,l.a.createElement("img",{src:"./mine/icon4.png"}),l.a.createElement("span",null,"\u6211\u7684\u4f18\u60e0\u5238"),l.a.createElement("u",null))),l.a.createElement("div",{className:"del"},l.a.createElement(m.b,{to:"/login"},l.a.createElement("input",{type:"button",value:"\u9000\u51fa"})))))}}]),t}(l.a.Component)),A=(a(86),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Car"},l.a.createElement("div",{className:"sp"},l.a.createElement("img",{src:"./images/orl_produce_img.jpg"}),l.a.createElement("p",null,"\u6e05\u98ce\u539f\u6728\u7eaf\u54c1\u62bd\u7eb83\u5c4216\u5305\u5bb6\u7528\u536b\u751f\u7eb8\u9910\u5dfe\u5a74\u513f\u9762\u5dfe\u7eb8\u5bb6\u5ead\u88c5.."),l.a.createElement("input",{type:"number"})))}}]),t}(l.a.Component)),L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ErrorPage"},l.a.createElement("h3",null,"404"))}}]),t}(l.a.Component),P=(a(87),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"spinner"})}}]),t}(l.a.Component)),D=a(36),F=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={hasAuth:!1,err:1,data:{}},j()({url:"/mock/user"}).then(function(t){e.setState({hasAuth:!0,err:t.data.err,data:t.data.data})}),e}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;if(!this.state.hasAuth)return null;var t=this.props,a=t.component,n=Object(D.a)(t,["component"]);return l.a.createElement(i.b,Object.assign({},n,{render:function(t){return 0===e.state.err?l.a.createElement(a,Object.assign({},t,{data:e.state.data})):l.a.createElement(i.a,{to:"/login"})}}))}}]),t}(l.a.Component),I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={bNav:!1,bFoot:!0,bLoading:!1},e.token=null,e.token=N.a.subscribe("VIEW_LOADING",function(t,a){console.log(t,a),e.setState({bLoading:a})}),e}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){N.a.unsubscribe(this.token)}},{key:"checkPath",value:function(e){/user|product|car/.test(e)&&this.setState({bNav:!0,bFoot:!0}),/home/.test(e)&&(this.setState({bNav:!1,bFoot:!0}),/detail|login|reg/.test(e)&&this.setState({bNav:!0,bFoot:!1}))}},{key:"componentWillReceiveProps",value:function(e){var t=e.location.pathname;this.checkPath(t)}},{key:"componentDidMount",value:function(){var e=this.props.location.pathname;this.checkPath(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},this.state.bLoading&&l.a.createElement(P,null),this.state.bNav&&l.a.createElement(g,null),l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/home",component:_}),l.a.createElement(i.b,{path:"/product",component:k}),l.a.createElement(i.b,{path:"/detail",component:w}),l.a.createElement(i.b,{path:"/reg",component:C}),l.a.createElement(i.b,{path:"/login",component:x}),l.a.createElement(i.b,{path:"/car",component:A}),l.a.createElement(F,{path:"/user",component:S}),l.a.createElement(i.b,{path:"/",exact:!0,component:_}),l.a.createElement(i.b,{component:L})),this.state.bFoot&&l.a.createElement(d,null))}}]),t}(l.a.Component);c.a.render(l.a.createElement(m.a,null,l.a.createElement(i.b,{component:I})),document.querySelector("#root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5695b242.chunk.js.map