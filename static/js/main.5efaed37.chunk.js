(this["webpackJsonpprueba-edilar"]=this["webpackJsonpprueba-edilar"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(15),a(16),a(1)),s=a(2),i=a(4),u=a(3),m=(a(5),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search__header"},r.a.createElement("h1",{className:"container-fluid"},"Busca tu pel\xedcula favorita"))}}]),a}(r.a.Component)),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(e){console.log("button was clicked")},e.handleSubmit=function(t){t.preventDefault(),console.log("button was submitted"),console.log(e.props.mtitle)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search__movie"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"T\xedtulo de la pel\xedcula"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",id:"t",name:"mtitle",value:this.props.mtitle})),r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-primary"},"Buscar")))}}]),a}(r.a.Component),h=a(6),d=a.n(h),f=a(9),v=(a(18),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,error:null,data:{}},e.fetchMovieInfo=Object(f.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,fetch("https://www.omdbapi.com/?apikey=3d381535&t=inception");case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,e.setState({loading:!1,data:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovieInfo(),console.log(this.props.title)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Info__container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:this.state.data.Poster,className:"Info__img",alt:"Poster"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("p",null,"T\xedtulo: ",this.state.data.Title),r.a.createElement("p",null,"Actores: ",this.state.data.Actors),r.a.createElement("p",null,"Pa\xeds: ",this.state.data.Country),r.a.createElement("p",null,"Sinopsis: ",this.state.data.Plot),r.a.createElement("p",null,"Premios: ",this.state.data.Awards))))))}}]),a}(r.a.Component)),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={mtitle:""},e.handleChange=function(t){e.setState({mtitle:t.target.value})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search"},r.a.createElement(m,null),r.a.createElement(p,{onChange:this.handleChange}),r.a.createElement(v,{title:this.state.mtitle}))}}]),a}(r.a.Component);c.a.render(r.a.createElement("div",null,r.a.createElement(b,null)),document.getElementById("root"))},5:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.5efaed37.chunk.js.map