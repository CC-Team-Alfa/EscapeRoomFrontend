(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{19:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/logo.d5bd2677.png"},40:function(e,t,a){e.exports=a(70)},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(35),l=a.n(s),o=a(7),i=a(8),c=a(10),u=a(9),m=a(11),d=a(12),p=(a(15),a(16),a(5)),f=(a(19),a(36)),b=a.n(f),h=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary navbar-expand-md"},r.a.createElement(p.a,{to:"/"},r.a.createElement("span",{className:"navbar-brand"},r.a.createElement("img",{src:b.a,className:"d-inline-block mr-1 image-fluid",alt:"logo"}),"Escape Rooom")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"menu"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/rooms"},r.a.createElement("span",{className:"nav-link"}," Our rooms "))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/calendar"},r.a.createElement("span",{className:"nav-link"}," Calendar "))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/account"},r.a.createElement("span",{className:"nav-link"}," Account "))))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#menu"},r.a.createElement("span",{className:"navbar-toggler-icon"}))))},v=function(){return r.a.createElement("div",null,r.a.createElement(p.a,{to:"/calendar"},r.a.createElement("div",{className:"btn btn-light"},"Reserve a room now!")),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor sapien quis risus gravida, sed malesuada sapien semper. Praesent blandit sem dolor, sit amet finibus orci scelerisque ut. Pellentesque tincidunt laoreet lorem eget congue. Nullam pulvinar ut magna ut consectetur. Donec sollicitudin ligula vitae ipsum tempor sollicitudin. Nam ut tempus magna. Curabitur hendrerit, sem ut semper tempus, tellus neque facilisis enim, vitae malesuada tellus sapien sed mauris. Nullam ultrices turpis magna, at sagittis ligula tristique ac. Nam imperdiet tincidunt finibus. Vestibulum quis viverra ex, a sollicitudin ante. Ves tibulum porttitor, lectus luctus auctor posuere, ex nisi tristique ipsum, a tempus ve lit leo non justo. Nunc pharetra justo nunc, maximus condimentum elit vehicula non. D onec tincidunt tellus nec erat fermentum aliquet. Aliquam suscipit sagittis molestie. Proin eu lectus gravida, euismod urna in, venenatis nisi. Vivamus pulvinar aliquet li gula, varius sollicitudin est pulvinar ut. Mauris sed nulla sit amet purus porttitor elementum. Mauris pharetra massa quis ante po rttitor dapibus. Duis vel fermentum massa. Praesent dapibus blandit quam vel maximus. V estibulum fermentum ullamcorper quam id varius. Donec convallis ante et turpis rhoncus rhoncus. Donec quam velit, iaculis vel quam hendrerit, commodo tempor leo. Phasellus p ellentesque vel elit quis tempor. Vestibulum vitae urna vitae elit iaculis dapibus. Sed tincidunt orci et dolor pellentesque auctor. Pellentesque pulvinar varius erat, u t pretium tellus vehicula nec. Cras rutrum enim vel diam bibendum, eu sodales enim te mpus."))},g=function(){return r.a.createElement("div",null,r.a.createElement(p.a,{to:"/calendar"},r.a.createElement("div",{className:"btn btn-light"},"Reserve a room now!")),r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor sapien quis risus gravida, sed malesuada sapien semper. Praesent blandit sem dolor, sit amet finibus orci scelerisque ut. Pellentesque tincidunt laoreet lorem eget congue. Nullam pulvinar ut magna ut consectetur. Donec sollicitudin ligula vitae ipsum tempor sollicitudin. Nam ut tempus magna.")))},E=a(13),y=a.n(E),N=a(39),w=a.n(N).a.create({baseURL:"https://coders-camp-2019-team-alpha.herokuapp.com",headers:{"Content-Type":"application/json"}}),S=function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w.post("/register",JSON.stringify(e)));case 1:case"end":return t.stop()}}))},k=(a(68),a(69),["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onTermEnter=function(e){e.target.style.border="1px groove darkblue",e.target.style.backgroundColor="darkgreen",e.target.style.fontWeight="800",a.hoover.current.style.display="block";var t=new Date(e.target.dataset.term);a.hoover.current.innerHTML="<b>Free</b><br/>\n                                        Day: ".concat(t.toLocaleDateString(),"<br/>\n                                        At: ").concat(t.toLocaleTimeString().substr(0,5))},a.onTermMove=function(e){a.hoover.current.style.top=e.pageY-60+"px",a.hoover.current.style.left=e.pageX+5+"px"},a.onTermLeave=function(e){e.target.style.border="1px solid lightskyblue",e.target.style.backgroundColor="#90ee90",e.target.style.fontWeight="600",a.hoover.current.style.display="none"},a.onTermClick=function(e){var t,n=new Date(e.target.dataset.term);n.setUTCHours(n.getUTCHours()),console.log("UTCShifted :",n),console.log("e.target.dataset.term :",e.target.dataset.term),(t={room:e.target.dataset.room,term:e.target.dataset.term},y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post("/reservation",JSON.stringify(t),{headers:{"x-auth-token":localStorage.getItem("x-auth-token")}}));case 1:case"end":return e.stop()}}))).then((function(e){a.props.info(e.data)})).catch((function(e){console.log(e),e.response?a.props.info(e.response.data):a.props.info(e.message)}))},a.hoover=r.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this,t=[this.props.start.valueOf()],a=1;a<7;a++)t.push(t[a-1]+864e5);return t=t.map((function(e){return new Date(e)})),r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped table-bordered table-responsive-md"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Term"),r.a.createElement("th",{scope:"col"},"Room 1"),r.a.createElement("th",{scope:"col"},"Room 2"),r.a.createElement("th",{scope:"col"},"Room 3")),t.map((function(t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t.toLocaleDateString()," ",r.a.createElement("b",null,0===t.getDay()?k[6]:k[t.getDay()-1])),[1,2,3].map((function(a){return r.a.createElement("td",null,r.a.createElement("div",{className:"custom-flex"},[6,10,14,18,22].map((function(n){return r.a.createElement("div",{className:"hour","data-term":new Date(t.getFullYear(),t.getMonth(),t.getDate(),n),"data-room":a,onMouseEnter:e.onTermEnter,onMouseLeave:e.onTermLeave,onMouseMove:e.onTermMove,onClick:e.onTermClick},n,":00")}))))})))})))),r.a.createElement("div",{ref:this.hoover,className:"hoover"}))}}]),t}(r.a.Component);(new Date).setUTCHours();var C=x,O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).week=0,a.updateCalendar=function(){var e;(e=a.week,y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w.get("/roomsdates/".concat(e)));case 1:case"end":return t.stop()}}))).then((function(e){a.setState({terms:e.data,info:null})})).catch((function(e){console.log(e),e.response?a.setState({terms:null,info:e.response.status+" "+e.response.statusText}):a.setState({terms:null,info:e.message})}))},a.incrementWeek=function(){a.week++,a.updateCalendar()},a.decrementWeek=function(){a.week>0&&(a.week--,a.updateCalendar())},a.renderTable=function(e,t){return null===a.state.terms?r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement(C,{start:e,updateCalendar:a.updateCalendar,info:a.info,terms:a.state.terms})},a.renderInfo=function(){if(null!==a.state.info)return r.a.createElement("div",{className:"alert alert-info",role:"alert"},a.state.info)},a.info=function(e){a.setState({info:e})},a.state={terms:null,info:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateCalendar()}},{key:"render",value:function(){var e=new Date(Date.now()+6048e5*this.week),t=new Date(Date.now()+6048e5*(this.week+1));return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container-fluid border-bottom d-flex align-items-start mb-3"},r.a.createElement("h3",{className:"title"},"Make a reservation by clicking the free termin"),r.a.createElement("button",{className:"btn btn-success refresh",onClick:this.updateCalendar},"Refresh"))),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("h4",null,"Week: ",e.toLocaleDateString()," - ",t.toLocaleDateString()),r.a.createElement("button",{className:"btn btn-success refresh",onClick:this.incrementWeek},r.a.createElement("b",null,"+")),r.a.createElement("button",{className:"btn btn-danger refresh",onClick:this.decrementWeek},r.a.createElement("b",null,"-"))),this.renderInfo(),this.renderTable(e))}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onRegisterSubmit=function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({info:null,error:""}),localStorage.clear(),e.preventDefault(),S({username:a.state.username,email:a.state.email,password:a.state.password}).then((function(e){a.setState({info:e.data})})).catch((function(e){console.log(e),e.response?a.setState({info:e.response.data}):a.setState({info:e.message})}));case 4:case"end":return t.stop()}}))},a.onLoginSubmit=function(e){var t;a.setState({info:null,error:""}),e.preventDefault(),(t={username:a.state.username,password:a.state.password},y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post("/login",JSON.stringify(t)));case 1:case"end":return e.stop()}}))).then((function(e){localStorage.setItem("x-auth-token",e.headers["x-auth-token"]),a.token=e.headers["x-auth-token"],localStorage.setItem("username",a.state.username),a.setState({info:e.data})})).catch((function(e){a.setState({error:"Invalid username or password"})}))},a.onInfoSubmit=function(e){a.setState({info:null,error:""}),e.preventDefault(),y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get("/account/".concat(localStorage.getItem("username")),{headers:{"x-auth-token":localStorage.getItem("x-auth-token")}}));case 1:case"end":return e.stop()}})).then((function(e){a.setState({info:JSON.stringify(e.data)})})).catch((function(e){console.log(e),e.response?a.setState({info:e.response.data}):a.setState({info:e.message})}))},a.onLoggOutClick=function(){localStorage.clear(),a.setState({info:"Logged out",error:""})},a.state={username:"",email:"",password:"",info:null,error:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Register"),r.a.createElement("form",{onSubmit:this.onRegisterSubmit},r.a.createElement("span",{className:"text-danger"},this.state.error),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"usernameR"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"usernameR",placeholder:"username","aria-describedby":"emailHelp",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"emailR"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"emailR",placeholder:"email@example.com","aria-describedby":"emailHelp",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value.toLowerCase()})}}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"passwordR"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"passwordR",placeholder:"min 8 characters",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:this.onLoginSubmit},r.a.createElement("span",{className:"text-danger"},this.state.error),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",placeholder:"username","aria-describedby":"emailHelp",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"min 8 characters",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))),r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Account info"),r.a.createElement("form",{onSubmit:this.onInfoSubmit},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"See daetails")),r.a.createElement("div",{className:"alert alert-primary",role:"alert"},this.state.info),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onLoggOutClick},"Log out")))}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h,null),r.a.createElement("section",{className:"col-12 col-lg-10 offset-lg-1"},r.a.createElement(d.b,{path:"/",exact:!0,component:v}),r.a.createElement(d.b,{path:"/rooms",exact:!0,component:g}),r.a.createElement(d.b,{path:"/calendar",exact:!0,component:O}),r.a.createElement(d.b,{path:"/account",exact:!0,component:D}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6672dfcf.chunk.js.map