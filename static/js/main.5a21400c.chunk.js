(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),s=n.n(c),i=(n(116),n(8)),o=(n(117),n(100)),l=n(205),u=n(207),d=n(63),j=n(62),b=n(60),h=n(17),p=n(15),O=n(206),x=n(92),m=n(180),f=n(183),g=n(188),v=n(185),y=n(64),w=n(151),S=n(103),C=n(11),N=n.n(C),k=n(20),_=n(119);n(137).config();n(140);var I="http://localhost:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8e3);function D(){return(D=Object(k.a)(N.a.mark((function e(t,n,a,r,c,s){var i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"post",url:I+"/signup",data:{first:t,last:n,email:a,phone:r,username:c,password:s}});case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(){var e=Object(k.a)(N.a.mark((function e(t,n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"post",url:I+"/login",data:{username:t,password:n}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(k.a)(N.a.mark((function e(t,n,a){var r,c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.zip,c=a.mode,e.next=3,_({method:"put",url:I+"/users/".concat(t),data:{password:n,zip:r,mode:c}});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(k.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"get",url:"https://openfarm.cc/api/v1/crops/?filter=".concat(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(k.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"get",url:"https://openfarm.cc/api/v1/crops/".concat(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(k.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"get",url:"http://localhost:8000/plants/".concat(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(k.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"post",url:"http://localhost:8000/getPlants",data:{plant_ids:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(k.a)(N.a.mark((function e(t,n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"put",url:I+"/plants/".concat(t),data:{attributes:n}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(k.a)(N.a.mark((function e(t,n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"delete",url:I+"/plants/".concat(t),data:{id:n}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(k.a)(N.a.mark((function e(t,n,a){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"post",url:I+"/plants/".concat(t),data:{plant_id:n,timestamp:a}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),z=function(){var e=Object(k.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"get",url:I+"/weather/".concat(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(k.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({method:"get",url:I+"/news/".concat(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=n(2);function q(e){return(1.8*(e-273.15)+32).toFixed(2)}var L=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column"},weatherHeader:{padding:10,backgroundColor:e.palette.secondary[200]},weatherBody:{padding:10},notFound:{backgroundColor:e.palette.secondary[200]}}})),M=function(){var e=Object(a.useContext)(Xe),t=Object(a.useState)(null),n=Object(i.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){z(e.zip).then((function(e){c(e.data),console.log(e.data)})),console.log("useEffect")}),[]);var s=L(),o=Object(a.useState)("F"),l=Object(i.a)(o,2),u=l[0];l[1];if(r){var d=r.main,j=d.temp,b=d.humidity,p=d.pressure,O=r.weather[0],x=(O.main,O.description),m=r.wind,g=m.speed,C=m.gust,N=r.name;return Object(U.jsxs)(f.a,{children:[Object(U.jsxs)(y.a,{variant:"h4",className:s.weatherHeader,children:["Weather today in ",N," "]}),Object(U.jsxs)(v.a,{children:[Object(U.jsxs)(y.a,{variant:"h6",children:[" ","Temperature: ".concat(q(j)," ").concat(u),"  "]}),Object(U.jsxs)(y.a,{variant:"h6",children:[" ","Humidity: ".concat(b," %"),"  "]}),Object(U.jsxs)(y.a,{variant:"h6",children:[" ","Pressure: ".concat(p),"  "]}),Object(U.jsxs)(y.a,{variant:"h6",children:[" ","Currently: ".concat(x),"  "]}),Object(U.jsxs)(y.a,{variant:"h6",children:[" ","Wind: Speed: ".concat(g," mph, Gust: ").concat(C," mph"),"  "]})]})]})}return Object(U.jsxs)(S.a,{className:s.notFound,elevation:2,children:[Object(U.jsx)(y.a,{variant:"h6",children:"We could not find any weather information. Make sure your ZIP code is correct"}),Object(U.jsxs)(h.b,{style:{textDecoration:"none"},to:"/users/".concat(e.username,"/info"),children:[Object(U.jsx)(w.a,{variant:"outlined",children:" Settings"})," "]})]})},J=n(190),K=n(186),Y=n(187),Z=n(189),V=Object(m.a)((function(e){return{root:{width:"100%"},plantAvatar:{color:e.palette.secondary[400],backgroundColor:e.palette.primary[300]}}})),Q=function(e){var t=e.article,n=V(),a=t.author,r=t.title,c=(t.content,t.url),s=t.urlToImage,i=t.description;return Object(U.jsxs)(f.a,{className:n.root,children:[Object(U.jsx)(K.a,{children:Object(U.jsx)(Y.a,{component:"img",alt:"article-title",image:s,height:150,width:50})}),Object(U.jsx)(g.a,{title:r,subheader:a}),Object(U.jsx)(v.a,{children:i}),Object(U.jsx)(Z.a,{children:Object(U.jsxs)(y.a,{children:["Full Article: ",Object(U.jsx)("a",{target:"_blank",href:"".concat(c),children:c})]})})]})},X=Object(m.a)((function(e){return{root:{minWidth:50,maxWidth:500,padding:50},newHeader:{backgroundColor:e.palette.secondary[200],marginBottom:15}}})),$=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=(n[0],n[1],Object(a.useState)((function(e){return sessionStorage.getItem("news")?JSON.parse(sessionStorage.getItem("news")).articles:[]}))),c=Object(i.a)(r,2),s=c[0],o=c[1],l=X();return Object(U.jsxs)(S.a,{className:l.root,elevation:3,children:[Object(U.jsx)(y.a,{variant:"h4",className:l.newHeader,children:"Gardening News"}),Object(U.jsx)(J.a,{container:!0,spacing:2,children:s.length>0&&s.map((function(e){return Object(U.jsx)(J.a,{item:!0,children:Object(U.jsx)(Q,{article:e},e.publishedAt)},e.publishedAt)}))}),Object(U.jsx)(w.a,{variant:"contained",onClick:function(){G("gardening").then((function(e){e&&(o(e.data.articles),sessionStorage.setItem("news",JSON.stringify(e.data)))}))},children:"Search! "})]})},ee=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:e.custom.background[200]},header:{backgroundColor:e.palette.primary[400],margin:20},content:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",margin:30,maxHeight:900},loginHeader:{backgroundColor:e.palette.primary[400]},news:{overflow:"scroll"},loginRequest:{maxHeight:300,maxWidth:300},weatherBoard:{maxHeight:600},toolBar:{display:"flex",flexDirection:"column",alignContent:"space-evenly",justifyContent:"space-evenly"},notifications:{maxHeight:500,overflow:"scroll"}}})),te=function(){var e=ee();return Object(U.jsxs)(f.a,{className:e.loginRequest,children:[Object(U.jsx)(g.a,{className:e.loginHeader,title:" Create your Account Today"}),Object(U.jsxs)(v.a,{children:[Object(U.jsx)(y.a,{variant:"h5",children:"Enjoy Full Access to the Gardening Database and Water Monitoring."}),Object(U.jsxs)(h.b,{to:"/signup",style:{textDecoration:"none"},children:[Object(U.jsx)(w.a,{variant:"contained",children:" Sign Up"})," "]})]})]})},ne=function(){var e=Object(a.useContext)(Xe),t=Object(a.useState)({}),n=Object(i.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){R(e.username).then((function(e){e&&null!=e.data&&T(e.data.map((function(e){return e.plant_id}))).then((function(t){c({plants:t.data,connections:e.data})}))}))}),[]);var s,o=ee();return r.connections&&(s=(s=r.connections).filter((function(e){return(Date.now()-parseInt(e.last_watered))/36e5-e.water_rate>0}))),Object(U.jsxs)(f.a,{className:o.notifications,children:[Object(U.jsx)(g.a,{className:o.loginHeader,title:"Notifications"}),Object(U.jsx)(v.a,{children:Object(U.jsx)(y.a,{variant:"h5",children:s&&(s.length>0?Object(U.jsxs)("div",{children:["You need to water the following plant".concat(1==s.length?"":"s"),":",Object(U.jsx)("ol",{children:s.map((function(e){return Object(U.jsxs)("li",{children:[r.plants.find((function(t){return t.plant_id==e.plant_id})).name," "]},e.plant_id)}))}),"Take a break and water your plants!"]}):Object(U.jsx)("div",{children:" You're garden is all good :)"}))})})]})},ae=function(e){Object(x.a)(e);var t=Object(a.useContext)(Xe),n=ee();return Object(U.jsxs)("div",{className:n.root,children:[Object(U.jsxs)(S.a,{className:n.header,elevation:3,children:[Object(U.jsx)(y.a,{variant:"h1",children:"Garden Guru"}),Object(U.jsx)(y.a,{variant:"h3",children:"Your Central Gardening Hub"})]}),Object(U.jsxs)("div",{className:n.content,children:[Object(U.jsx)("div",{className:n.news,children:Object(U.jsx)($,{})}),Object(U.jsxs)("div",{className:n.toolBar,children:[t.loggedIn?Object(U.jsxs)("div",{className:n.weatherBoard,children:[" ",Object(U.jsx)(M,{})]}):Object(U.jsx)(te,{}),Object(U.jsx)("div",{className:!n.notifications,children:Object(U.jsx)(ne,{})})]})]})]})},re=function(e){return Object(U.jsx)("div",{children:"Welcome to the About page"})},ce=n(191),se=n(192),ie=n(193),oe=n(195),le=n(194),ue=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{justifyContent:"center",flexGrow:1},userIcon:{backgroundColor:e.palette.tertiary[200]},mainAction:{marginRight:50,backgroundColor:e.palette.primary[200]},appBar:{padding:30},pageButtons:{fontSize:30}}})),de=function(e){var t=Object(a.useContext)(Xe);t.loggedIn;var n=ue();return Object(U.jsx)("div",{className:n.root,children:Object(U.jsx)(ce.a,{position:"fixed",className:n.appBar,children:Object(U.jsxs)(se.a,{children:[Object(U.jsx)(y.a,{variant:"h4",className:n.title,children:Object(U.jsx)(h.b,{to:"/",style:{textDecoration:"none"},children:"Garden Guru"})}),Object(U.jsxs)(ie.a,{spacing:20,className:n.mainAction,children:[Object(U.jsx)(w.a,{label:"Search For Plants",children:Object(U.jsx)(h.b,{to:"/search",style:{textDecoration:"none"},children:" Search For Plants "})}),t.loggedIn&&Object(U.jsx)(w.a,{children:Object(U.jsx)(h.b,{to:"/users/".concat(t.username),style:{textDecoration:"none"},children:"My Garden "})})]}),t.loggedIn?Object(U.jsx)(y.a,{className:n.pageButtons,children:Object(U.jsx)(h.b,{to:"/users/".concat(t.username,"/info"),style:{textDecoration:"none"},children:Object(U.jsx)(le.a,{className:n.userIcon,children:Object(U.jsx)(oe.a,{children:t.username?t.username[0]:""})})})}):Object(U.jsxs)(ie.a,{spacing:2,children:[Object(U.jsxs)(h.b,{to:"/login",children:[" ",Object(U.jsx)(w.a,{color:"secondary",variant:"contained",children:" Login "})]}),Object(U.jsx)(h.b,{to:"/signup",children:Object(U.jsx)(w.a,{color:"secondary",variant:"contained",children:"Signup"})})]})]})})})},je=n(210),be=Object(m.a)((function(e){return{root:{marginLeft:"auto",marginRight:"auto",maxWidth:345,minWidth:200},form:{margin:e.spacing(1)}}})),he=function(e){var t=e.onSuccess;var n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),h=b[0],p=b[1],O=be();return Object(U.jsx)("div",{className:O.root,children:Object(U.jsxs)(f.a,{children:[Object(U.jsx)(g.a,{title:"Login Here",subheader:"If you have an account already, log in here"}),Object(U.jsxs)(v.a,{children:[Object(U.jsx)(je.a,{className:O.form,required:!0,id:"outlined-required",label:"Username",variant:"outlined",value:u,onChange:function(e){return d(e.target.value)}}),Object(U.jsx)(je.a,{required:!0,id:"password-required",type:"password",label:"Password",variant:"outlined",value:h,onChange:function(e){return p(e.target.value)}})]}),Object(U.jsx)(w.a,{variant:"contained",onClick:function(e){e.preventDefault(),W(u,h).then((function(e){console.log(e),s("success! Logging you in"),console.log(e.data),t({loggedIn:"true",username:e.data.username,zip:e.data.zip})})).catch((function(e){s("We could not find a username with that password. Try again")}))},children:"Log In"}),Object(U.jsx)(y.a,{children:c})]})})},pe=function(e){var t=e.onSuccess;return Object(U.jsx)("div",{children:Object(U.jsx)(he,{onSuccess:t})})},Oe=Object(m.a)((function(e){return{root:{marginLeft:"auto",marginRight:"auto",maxWidth:345,minWidth:200},form:{margin:e.spacing(1)}}})),xe=function(e){var t=e.onSuccess;var n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),h=b[0],p=b[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),m=x[0],S=x[1],C=Object(a.useState)(""),N=Object(i.a)(C,2),k=N[0],_=N[1],I=Oe();return Object(U.jsx)("div",{className:I.root,children:Object(U.jsxs)(f.a,{children:[Object(U.jsx)(g.a,{title:"Create A New Account",subheader:"Get planting today!"}),Object(U.jsxs)(v.a,{children:[Object(U.jsx)(je.a,{className:I.form,required:!0,id:"outlined-required",label:"Username",variant:"outlined",value:u,onChange:function(e){return d(e.target.value)}}),Object(U.jsx)(je.a,{required:!0,id:"password-required",type:"password",label:"Password",variant:"outlined",value:h,onChange:function(e){return p(e.target.value)}}),Object(U.jsx)(je.a,{required:!0,id:"outlined-required",label:"Email",variant:"outlined",value:m,onChange:function(e){return S(e.target.value)}}),Object(U.jsx)(je.a,{required:!0,id:"outlined-required",label:"Phone Number",variant:"outlined",value:k,onChange:function(e){return _(e.target.value)}})]}),Object(U.jsx)(w.a,{variant:"contained",onClick:function(e){e.preventDefault(),function(e,t,n,a,r,c){return D.apply(this,arguments)}("Scott","Hallyburton",m,k,u,h).then((function(e){s("Account Created Successfully!"),t({loggedIn:"true",username:u,password:h,email:m,phone:k})})).catch((function(e){s("Username and or Email already exists, try again")}))},children:"Log In"}),Object(U.jsx)(y.a,{children:c})]})})},me=function(e){var t=e.onSuccess;return Object(U.jsx)("div",{children:Object(U.jsx)(xe,{onSuccess:t})})},fe=n(71),ge=n(201),ve=n(212),ye=n(213),we=n(61),Se=n(202),Ce=n(203),Ne=Object(m.a)((function(e){return{good:{minWidth:200,maxWidth:300,height:200,backgroundColor:e.palette.primary[300]},danger:{minWidth:175,maxWidth:300,height:175,backgroundColor:we.a[400]},removeTools:{display:"flex",flexDirection:"column"}}}));var ke=function(e){var t=e.plant,n=e.info,a=e.plantClick,r=e.infoClick,c=e.handleRemove,s=Object(p.f)(),i=(s.path,s.url,Ne()),o=n.last_watered,l=n.water_rate,u=(parseInt(o),(Date.now()-parseInt(o))/36e5-l);return Object(U.jsxs)(ge.a,{color:"secondary",variant:"dot",invisible:!0,children:[Object(U.jsxs)(ve.a,{className:u<0?i.good:i.danger,label:t.name,children:[u>0&&Object(U.jsx)(le.a,{onClick:function(){a(t.plant_id)},children:Object(U.jsx)(ye.a,{title:"water",children:Object(U.jsx)(Se.a,{})})}),Object(U.jsx)(y.a,{children:t.name}),Object(U.jsxs)(h.b,{to:"./".concat(t.plant_id),children:[" ",Object(U.jsx)(le.a,{onClick:function(){return r(t.plant_id)},children:Object(U.jsx)(ye.a,{title:"plant info",children:Object(U.jsx)(Ce.a,{})})})]})]}),Object(U.jsxs)("div",{className:i.removeTools,children:[Object(U.jsxs)("span",{children:[" ",-u>0?"".concat(-u.toFixed(2)," Hours Remaining"):"".concat(u.toFixed(2)," Hours Late")]}),Object(U.jsx)(w.a,{variant:"contained",onClick:function(){return c(t.plant_id)},children:" Remove Plant"})]})]})},_e=n(204),Ie=Object(m.a)((function(e){return{root:{maxWidth:300,minWidth:200,minHeight:400},plantAvatar:{color:e.palette.secondary[400],backgroundColor:e.palette.primary[300]},plantDescription:{}}})),De=function(e){var t=e.id,n=e.clear,r=Ie(),c=Object(a.useState)(null),s=Object(i.a)(c,2),o=s[0],l=s[1];return console.log(t),Object(a.useEffect)((function(){T([t]).then((function(e){null!=e.data[0]&&P(e.data[0].api_id).then((function(e){l(e.data.data.attributes)}))}))}),[]),Object(U.jsx)("div",{children:o&&Object(U.jsxs)(f.a,{className:r.root,children:[Object(U.jsx)(K.a,{children:Object(U.jsx)(Y.a,{component:"img",alt:o.binomial_name,image:o.main_image_path,height:150})}),Object(U.jsx)(g.a,{avatar:Object(U.jsx)(ve.a,{className:r.plantAvatar,children:"P"}),title:o.name,subheader:o.binomial_name}),Object(U.jsxs)(v.a,{children:[Object(U.jsxs)(y.a,{className:r.plantDescription,children:["Sowing Method: ",o.sowing_method||"No method found"]}),Object(U.jsxs)(y.a,{children:["Row Spacing: ",o.row_spacing?o.row_spacing+"cm":"N/A"]}),Object(U.jsxs)(y.a,{children:["Spread: ",o.spread?o.spread+"cm":"N/A"]})]}),Object(U.jsx)(Z.a,{children:Object(U.jsx)(le.a,{onClick:function(){return n(t)},children:Object(U.jsx)(_e.a,{})})})]})})},We=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gardenHeader:{padding:10,backgroundColor:e.palette.primary[200]},gardenBody:{padding:10},cardInfo:{display:"flex",flexDirection:"row"}}})),He=function(e){var t=e.plants,n=void 0===t?[]:t,r=e.connections,c=e.handleUpdate,s=e.handleRemove,o=We(),l=Object(p.f)(),u=(l.path,l.url,Object(a.useContext)(Xe),Object(a.useState)([])),d=Object(i.a)(u,2),j=d[0],b=d[1],h=function(e){b((function(t){var n=Object(fe.a)(t);return n.includes(e)?t:(n.push(e),n)}))},O=function(e){b((function(t){var n=Object(fe.a)(t);return n.splice(n.findIndex((function(t){return t==e})),1),n}))};return Object(U.jsxs)(f.a,{className:o.root,children:[Object(U.jsx)(y.a,{variant:"h4",className:o.gardenHeader,children:"My Garden"}),Object(U.jsx)(v.a,{children:Object(U.jsx)(J.a,{className:o.gardenBody,container:!0,spacing:3,children:n.length>0?n.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e){return Object(U.jsx)(J.a,{item:!0,children:Object(U.jsx)(ke,{plant:e,info:r.find((function(t){return t.plant_id==e.plant_id})),plantClick:c,infoClick:h,handleRemove:s})},e.plant_id)})):Object(U.jsx)("div",{children:" No plants to share :( "})})}),Object(U.jsx)(v.a,{className:o.cardInfo,children:j.length>0&&j.map((function(e){return Object(U.jsx)(De,{id:e,clear:O},e)}))})]})},Ae=n(98),Pe=n.n(Ae),Re=n(99),Te=n.n(Re),Be=Object(m.a)((function(e){return{root:{maxWidth:300,minWidth:200,minHeight:400},plantAvatar:{color:e.palette.secondary[400],backgroundColor:e.palette.primary[300]},plantDescription:{}}})),Ee=function(e){var t=e.plant,n=e.notifyUpdate,r=Be(),c=Object(a.useContext)(Xe),s=Object(a.useState)(24),o=Object(i.a)(s,2),l=o[0],u=o[1],d=t?t.attributes:{},j=d.binomial_name,b=d.name,h=d.main_image_path;return Object(U.jsxs)(f.a,{className:r.root,children:[Object(U.jsx)(K.a,{children:Object(U.jsx)(Y.a,{component:"img",alt:j,image:h,height:150})}),Object(U.jsx)(g.a,{avatar:Object(U.jsx)(ve.a,{className:r.plantAvatar,children:"P"}),title:b,subheader:j}),Object(U.jsx)(v.a,{children:Object(U.jsxs)(y.a,{className:r.plantDescription,children:["Sowing Method: ",t.attributes.sowing_method||"No method found"]})}),Object(U.jsxs)(Z.a,{children:[Object(U.jsx)(le.a,{"aria-label":"mark favorite",children:Object(U.jsx)(Pe.a,{})}),"true"==c.loggedIn&&Object(U.jsx)(le.a,{onClick:function(){console.log(t);var e={api_id:t.id,custom:!0,name:t.attributes.name,notes:"none",last_watered:Date.now(),water_rate:l,duration:60};B(c.username,e).then(n)},children:Object(U.jsx)(Te.a,{})}),Object(U.jsx)(le.a,{children:Object(U.jsx)(Ce.a,{})}),Object(U.jsxs)(y.a,{children:["Water every ",Object(U.jsx)(je.a,{value:l,onChange:function(e){return u(e.target.value)}})," Hours"]})]})]})},Fe=Object(m.a)((function(e){return{root:{},searchBar:{margin:"20px"},plantResults:{display:"flex",justifyContent:"space-evenly"}}})),ze={fontSize:30},Ge=function(e){var t=e.notifyUpdate,n=Fe(),r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),d=u[0],j=u[1];return Object(U.jsxs)("div",{className:n.root,children:[Object(U.jsx)(S.a,{className:n.searchBar,children:Object(U.jsx)(je.a,{InputProps:ze,id:"search-bar",placeholder:"Search Plants here!",fullWidth:!0,value:s,onChange:function(e){o(e.target.value),A(e.target.value).then((function(e){e.data.data.length>0&&j(e.data.data)}))}})}),Object(U.jsx)(J.a,{container:!0,spacing:3,className:n.plantResults,children:d.length>0&&d.map((function(e){return Object(U.jsx)(J.a,{item:!0,children:Object(U.jsx)(Ee,{notifyUpdate:t,plant:e})},e.id)}))})]})},Ue=Object(m.a)((function(e){return{root:{minHeight:1200},header:{margin:50},toolGrid:{display:"flex",justifyContent:"space-evenly"},notFound:{backgroundColor:e.palette.secondary[200]}}})),qe=function(e){var t=Object(p.f)(),n=(t.path,t.url,Ue()),r=Object(a.useState)({}),c=Object(i.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(null),u=Object(i.a)(l,2),d=(u[0],u[1],Object(a.useState)(!0)),j=Object(i.a)(d,2),b=j[0],h=(j[1],Object(a.useContext)(Xe)),O=h.username,x=(h.email,h.phone,function(){R(h.username).then((function(e){e&&null!=e.data&&T(e.data.map((function(e){return e.plant_id}))).then((function(t){o({plants:t.data,connections:e.data})}))}))});return Object(a.useEffect)((function(){x()}),[]),Object(U.jsxs)("div",{className:n.root,children:[Object(U.jsxs)(y.a,{variant:"h2",className:n.header,children:["Welcome to your garden, ",O]}),Object(U.jsxs)(J.a,{container:!0,spacing:2,className:n.toolGrid,children:[Object(U.jsx)(J.a,{item:!0,children:Object(U.jsx)(M,{})}),Object(U.jsx)(J.a,{item:!0,children:Object(U.jsx)(He,{plants:s.plants,connections:s.connections,handleUpdate:function(e){F(h.username,e,Date.now()).then(x)},handleRemove:function(e){E(h.username,e).then(x)}})})]}),b&&Object(U.jsx)(Ge,{notifyUpdate:x})]})},Le=n(198),Me=n(208),Je=n(214),Ke=n(200),Ye=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center"},header:{margin:20,maxWidth:600},content:{display:"flex",flexDirection:"column",margin:30,justifyContent:"center",alignContent:"space-evenly"},card:{maxWidth:500}}})),Ze=function(e){var t=e.onSuccess,n=Object(a.useContext)(Xe),r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(n.mode||"light"),u=Object(i.a)(l,2),d=u[0],j=u[1],b=Object(a.useState)(!1),h=Object(i.a)(b,2),p=(h[0],h[1],Object(a.useState)("")),O=Object(i.a)(p,2),x=O[0],m=O[1],y=Ye(),S=Object(a.useState)(n.zip||0),C=Object(i.a)(S,2),_=C[0],I=C[1];return Object(U.jsx)("div",{className:y.root,children:Object(U.jsxs)(f.a,{elevation:3,className:y.header,children:[Object(U.jsx)(g.a,{title:"User Settings",className:y.title}),Object(U.jsxs)(v.a,{className:y.content,children:[Object(U.jsxs)(Le.a,{children:[Object(U.jsx)(Me.a,{value:d,placeholder:"mode",onChange:function(e){return j(e.target.value)},children:["light","dark"].map((function(e){return Object(U.jsx)(Je.a,{value:e,children:e})}))}),Object(U.jsx)(Ke.a,{children:"Theme"})]}),Object(U.jsx)(je.a,{value:_,type:"number",onChange:function(e){return I(e.target.value)},label:"ZIP code"}),Object(U.jsx)(je.a,{type:"password",label:"Enter Password to Make Changes",value:x,onChange:function(e){return m(e.target.value)}}),s,Object(U.jsx)(w.a,{variant:"outlined",onClick:function(){(function(){var e=Object(k.a)(N.a.mark((function e(){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(n.username,x,{zip:_,mode:d});case 3:return e.next=5,W(n.username,x);case 5:a=e.sent,o("success!"),console.log(a.data.zip),t({loggedIn:"true",username:a.data.username,zip:a.data.zip,mode:a.data.mode}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),o("This password is incorrect"),console.log(e.t0);case 15:window.location.reload();case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()},children:"Apply Changes"}),Object(U.jsx)(w.a,{variant:"outlined",onClick:function(){localStorage.clear(),sessionStorage.clear(),window.location.reload()},children:"Log Out"})]})]})})},Ve=Object(o.a)({palette:{primary:d.a,secondary:j.a,tertiary:b.a,type:"light"},custom:{background:d.a}}),Qe=Object(o.a)({palette:{primary:d.a,secondary:j.a,tertiary:b.a,type:"dark"},custom:{background:"dark"}}),Xe=Object(a.createContext)("scotch");var $e=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=(t[0],t[1],Object(a.useState)({loggedIn:localStorage.getItem("loggedIn"),username:localStorage.getItem("currentUser"),mode:localStorage.getItem("mode"),zip:localStorage.getItem("zip")})),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Xe.Provider,d=function(e){localStorage.setItem("loggedIn","true"),localStorage.setItem("currentUser",e.username),localStorage.setItem("zip",e.zip),localStorage.setItem("mode",e.mode||c.mode),s(e)},j=c.mode,b=Ve;switch(j){case"light":b=Ve;break;case"dark":b=Qe}return Object(U.jsxs)(l.a,{theme:b,children:[Object(U.jsx)(O.a,{}),Object(U.jsx)("div",{className:"back-ground",children:Object(U.jsx)(o,{value:c,children:Object(U.jsx)(h.a,{children:Object(U.jsxs)(u.a,{maxWidth:"xl",children:[Object(U.jsx)(de,{}),Object(U.jsx)("div",{className:"App",children:Object(U.jsxs)(p.c,{children:[Object(U.jsx)(p.a,{exact:!0,path:"/",children:Object(U.jsx)(ae,{})}),Object(U.jsx)(p.a,{path:"/about",children:Object(U.jsx)(re,{})}),Object(U.jsx)(p.a,{path:"/login",children:Object(U.jsx)(pe,{onSuccess:function(e){return d(e)}})}),Object(U.jsx)(p.a,{path:"/signup",children:Object(U.jsx)(me,{onSuccess:function(e){d(e)}})}),Object(U.jsx)(p.a,{exact:!0,path:"/users/:username",children:Object(U.jsx)(qe,{})}),Object(U.jsx)(p.a,{path:"/search",children:Object(U.jsx)(Ge,{})}),Object(U.jsx)(p.a,{exact:!0,path:"/users/:username/info",children:Object(U.jsx)(Ze,{onSuccess:function(e){return d(e)}})})]})})]})})})})]})},et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)($e,{})}),document.getElementById("root")),et()}},[[149,1,2]]]);
//# sourceMappingURL=main.5a21400c.chunk.js.map