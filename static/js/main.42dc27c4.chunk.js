(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),r=a.n(n),s=a(6),o=a.n(s),i=(a(51),a(52),a(53),a(9)),l=a.n(i),u=a(14),m=a(17),j=a(15),d=a.n(j),b=a(8),p=a(106),h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),i=o[0],j=o[1];Object(n.useEffect)((function(){x()}),[]);var h,x=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:3003/users");case 2:t=e.sent,r(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("http://localhost:3003/users/".concat(t));case 2:x();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"py-4",children:[Object(c.jsx)("h1",{children:"Home Page"}),Object(c.jsx)("div",{class:"fl w-50",children:Object(c.jsx)(p.a,{fullWidth:!0,className:"ma-10 pa-4",id:"outlined-search",label:"Search Name",type:"search",style:{margin:18},variant:"outlined",value:i,onChange:function(e){return j(e.target.value)}})}),Object(c.jsxs)("table",{class:"table border shadow",children:[Object(c.jsx)("thead",{class:"thead-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"User Name"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{children:"Action"})]})}),Object(c.jsx)("tbody",{children:(h=a,h.filter((function(e){return e.name.toString().toLowerCase().indexOf(i)>-1||e.username.toString().toLowerCase().indexOf(i)>-1||e.email.toString().toLowerCase().indexOf(i)>-1}))).map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:t+1}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.username}),Object(c.jsx)("td",{children:e.email}),Object(c.jsxs)("td",{children:[Object(c.jsx)(b.b,{class:"btn btn-primary mr-2",to:"/users/".concat(e.id),children:"View"}),Object(c.jsx)(b.b,{class:"btn btn-outline-primary mr-2",to:"/users/edit/".concat(e.id),children:"Edit"}),Object(c.jsx)(b.b,{class:"btn btn-danger",onClick:function(){return O(e.id)},children:"Delete"})]})]})}))})]})]})})},x=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"py-4",children:[Object(c.jsx)("h1",{children:"About Page"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt nam accusantium? Soluta cupiditate, accusamus commodi praesentium laborum dolorum libero maiores!"})]})})},O=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"py-4",children:[Object(c.jsx)("h1",{children:"Contact Page"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{class:"form-group",children:[Object(c.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(c.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(c.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(c.jsxs)("div",{class:"form-group",children:[Object(c.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(c.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(c.jsxs)("div",{class:"form-group form-check",children:[Object(c.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(c.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(c.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})})},f=function(){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(b.b,{className:"navbar-brand",href:"/",children:"Recat User"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",children:Object(c.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(b.c,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(b.c,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(b.c,{className:"nav-link",exact:!0,to:"/contact",children:"Contact"})})]})}),Object(c.jsx)(b.b,{className:"btn btn-outline-light",to:"/users/add",children:"Add User"})]})})},v=a(5),g=function(){return Object(c.jsx)("div",{className:"not-found",children:Object(c.jsx)("h1",{className:"display-1",children:"Page Not Found"})})},N=a(19),w=a(20),y=function(){var e=Object(v.f)(),t=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),a=Object(m.a)(t,2),r=a[0],s=a[1],o=r.name,i=r.username,j=r.email,b=r.phone,p=r.website,h=function(e){s(Object(w.a)(Object(w.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))},x=function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,d.a.post("http://localhost:3003/users",r);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(c.jsxs)("form",{onSubmit:function(e){return x(e)},children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:o,onChange:function(e){return h(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:i,onChange:function(e){return h(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:j,onChange:function(e){return h(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:b,onChange:function(e){return h(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:p,onChange:function(e){return h(e)}})}),Object(c.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})},C=function(){var e=Object(v.f)(),t=Object(v.g)().id,a=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),r=Object(m.a)(a,2),s=r[0],o=r[1],i=s.name,j=s.username,b=s.email,p=s.phone,h=s.website,x=function(e){o(Object(w.a)(Object(w.a)({},s),{},Object(N.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){f()}),[]);var O=function(){var a=Object(u.a)(l.a.mark((function a(c){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.next=3,d.a.put("http://localhost:3003/users/".concat(t),s);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:3003/users/".concat(t));case 2:a=e.sent,o(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(c.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(c.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:i,onChange:function(e){return x(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:j,onChange:function(e){return x(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:b,onChange:function(e){return x(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:p,onChange:function(e){return x(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:h,onChange:function(e){return x(e)}})}),Object(c.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]})})},k=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",webiste:""}),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(v.g)().id;Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:3003/users/".concat(s));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"container py-4",children:[Object(c.jsx)(b.b,{className:"btn btn-primary",to:"/",children:"back to Home"}),Object(c.jsxs)("h1",{className:"display-4",children:["User Id: ",s]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("ul",{className:"list-group w-50",children:[Object(c.jsxs)("li",{className:"list-group-item",children:["name: ",a.name]}),Object(c.jsxs)("li",{className:"list-group-item",children:["user name: ",a.username]}),Object(c.jsxs)("li",{className:"list-group-item",children:["email: ",a.email]}),Object(c.jsxs)("li",{className:"list-group-item",children:["phone: ",a.phone]}),Object(c.jsxs)("li",{className:"list-group-item",children:["website: ",a.website]})]})]})};var E=function(e){return Object(c.jsx)(b.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(f,{}),Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(v.a,{exact:!0,path:"/about",component:x}),Object(c.jsx)(v.a,{exact:!0,path:"/contact",component:O}),Object(c.jsx)(v.a,{exact:!0,path:"/users/add",component:y}),Object(c.jsx)(v.a,{exact:!0,path:"/users/edit/:id",component:C}),Object(c.jsx)(v.a,{exact:!0,path:"/users/:id",component:k}),Object(c.jsx)(v.a,{component:g})]})]})})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.42dc27c4.chunk.js.map