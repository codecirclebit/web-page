(this["webpackJsonpcc-page"]=this["webpackJsonpcc-page"]||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),i=n.n(r),s=n(14),o=n(5),l=n(6),b=n(8),j=n(7),d=n(4),h=n(1),u=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={align:e.props.id%2===0?"team-member-odd":"team-member-even",member:e.props.member},e}return Object(l.a)(n,[{key:"profileClick",value:function(e){console.log(e),window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("button",{className:"team-member ".concat(this.state.align),onClick:function(){e.profileClick(e.state.member.linkedInUrl)},children:[Object(h.jsx)("img",{src:this.state.member.pictureUrl,alt:" "}),Object(h.jsxs)("p",{id:"name",children:[" ",this.state.member.name," "]}),Object(h.jsxs)("p",{id:"position",children:[" ",this.state.member.position," "]}),Object(h.jsxs)("p",{id:"quote",children:[" ",this.state.member.quote]})]})}}]),n}(c.a.Component),p=[{name:"Nishanth",position:"Secretary",quote:"Make others better as a result of your presence.",pictureUrl:"https://avatars.githubusercontent.com/u/68420841",linkedInUrl:"https://www.linkedin.com/in/nishanth-s-1b4a12191/",mailId:"nishanth.ec19@bitsathy.ac.in"},{name:"Kabilan",position:"Competitive programming Lead",quote:"Let's climb the ladder of success together.",pictureUrl:"https://avatars.githubusercontent.com/u/67632223",linkedInUrl:"https://in.linkedin.com/in/kabilan-muthusamy",mailId:"kabilan.ec19@bitsathy.ac.in"},{name:"Dasaprakash",position:"Events Manager",quote:"I assuse that our events make students learn new things.",pictureUrl:"https://avatars.githubusercontent.com/u/81621335",linkedInUrl:"https://www.linkedin.com/in/dasaprakash-c-62908a194/",mailId:"dasaprakash.ei19@bitsathy.ac.in"},{name:"Mohanapraneswaran",position:"Content Creater",quote:"Hope I will  give big information within few lines.",pictureUrl:"https://avatars.githubusercontent.com/u/53465394",linkedInUrl:"https://www.linkedin.com/in/mohanapraneswaran-m-6083ab1a5/",mailId:"mohanapraneswaran.it19@bitsathy.ac.in"},{name:"Surya Prakash",position:"Graphic Designer",quote:"Make some changes, undo, redo.",pictureUrl:"https://avatars.githubusercontent.com/u/83821435",linkedInUrl:"https://www.linkedin.com/in/suryaprakash-m/",mailId:"suryaprakash.ec20@bitsathy.ac.in"}],m=(n(46),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"team-cont",children:[Object(h.jsx)("div",{className:"team-desp",children:Object(h.jsx)("p",{id:"title",children:" Meet the TEAM!"})}),Object(h.jsx)("div",{className:"team-member-cont",children:p.map((function(e,t){return Object(h.jsx)(u,{id:t,member:e},t)}))})]})}}]),n}(c.a.Component)),O=(n(47),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"brand-cont",children:[Object(h.jsx)("img",{className:"brand-logo",src:"cclogo.png",alt:"Code Circle"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"https://www.bitsathy.ac.in/",target:"_blank",rel:"noopener noreferrer",children:"Bannari Amman Institute of Technology"})})]}),Object(h.jsxs)("div",{className:"about-cont",children:[Object(h.jsxs)("div",{className:"about-desp",children:[Object(h.jsxs)("p",{className:"about-desp-head",children:[" What is ",Object(h.jsx)("span",{style:{color:"#e6a122"},children:"Code Circle"}),"?"]}),Object(h.jsx)("p",{className:"about-desp-body",children:"Code Circle is an endeavour to provide a gateway for budding code seekers in our institute. We constitute a platform that allows seekers to ameliorate their coding ability. The endeavour of our crew is to escalate the enthusiasm for coding among the budding seekers and well-versed coders in our institute."})]}),Object(h.jsx)("img",{src:"images6.jpg",alt:"404"})]}),Object(h.jsx)(m,{})]})}}]),n}(c.a.Component)),v=n(16),f=n(21),x=n.n(f),k=n(35),g=(n(24),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=Object(v.a)({},e.props),e}return Object(l.a)(n,[{key:"redirect",value:function(e){console.log(e),window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"event-card",children:[Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("i",{className:"bi bi-gear-fill",children:" "}),Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("p",{id:"name",children:this.state.name}),Object(h.jsx)("p",{id:"track",children:this.state.track})]})]}),Object(h.jsxs)("div",{className:"bottom",children:[Object(h.jsx)("p",{id:"desp",children:this.state.description}),Object(h.jsx)("button",{id:"page",onClick:function(){e.redirect(e.state.pageLink)},children:"webinar"===this.state.track.toLowerCase()?"Register ->":" Visit event page ->"})]})]})}}]),n}(a.Component)),w=n(36),y=n.n(w),C=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(k.a)(x.a.mark((function e(){var t=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/web-backend-vxvhh/service/web-page-backend/incoming_webhook/events").then((function(e){t.setState({events:t.formateData(e.data)})})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"formateData",value:function(e){var t=[];return e.map((function(e){var n={name:e.name,track:e.track,description:e.description,date:new Date(e.date).valueOf(),pageLink:e.pageLink};return t.push(n),t})),t.sort((function(e,t){return e.date<t.date?-1:1})),t}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"events-contanier",children:[Object(h.jsx)("h2",{children:"episodes"}),Object(h.jsx)("div",{className:"card-contanier",children:this.state?this.state.events.map((function(e,t){return Object(h.jsx)(g,Object(v.a)({},e),t)})):Object(h.jsx)("div",{})})]})}}]),n}(a.PureComponent),N=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{height:"67vh",position:"relative"},children:[Object(h.jsx)("p",{children:"Page not  found "}),Object(h.jsx)("p",{children:" 404 "})]})}}]),n}(a.Component),I=n(79),U=(n(33),n(34),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=Object(v.a)({},e.props),e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(I.a,{expanded:!0,variant:"dark",bg:"dark",expand:"xl",children:[Object(h.jsx)(I.a.Brand,{children:Object(h.jsx)(s.b,{style:{color:"white",textDecoration:"none"},to:"/",children:"Code Circle"})}),Object(h.jsxs)(I.a.Collapse,{className:"justify-content-end",children:[Object(h.jsx)(I.a.Text,{className:"p-3",children:Object(h.jsx)(s.b,{className:"nav-link",to:"/",children:"Home"})}),Object(h.jsx)(I.a.Text,{className:"p-3",children:Object(h.jsx)(s.b,{className:"nav-link",to:"/events",children:"Events"})})]})]})})}}]),n}(c.a.Component)),D=(n(75),"mailto:codecircle@bitsathy.ac.in"),L="https://www.linkedin.com/company/codecirclebit/",M="https://www.instagram.com/codecirclebit/",T="https://github.com/codecirclebit",_=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("a",{href:D,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"bi bi-envelope-fill"})}),Object(h.jsx)("a",{href:L,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"bi bi-linkedin"})}),Object(h.jsx)("a",{href:M,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"bi bi-instagram"})}),Object(h.jsx)("a",{href:T,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"bi bi-github"})})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:[" ","\xa9"," Code Circle, Bannari Amman Institute of Technology, Sathyamangalam."]})]})}}]),n}(c.a.Component),q=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(U,{navColor:"white"}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",component:O}),Object(h.jsx)(d.a,{exact:!0,path:"/events",children:Object(h.jsx)(C,{})}),Object(h.jsx)(d.a,{path:"*",component:N})]}),Object(h.jsx)(_,{})]})}}]),n}(c.a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(q,{})})}),document.getElementById("root")),A()}},[[76,1,2]]]);
//# sourceMappingURL=main.b0d00b12.chunk.js.map