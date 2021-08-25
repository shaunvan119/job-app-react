(this["webpackJsonpjob-app-react"]=this["webpackJsonpjob-app-react"]||[]).push([[0],{87:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(13),i=a.n(c),r=(a(87),a(22)),s=a.n(r),l=a(18),o=a(30),j=a(16),d=a(137),b=a(139),p=a(125),u=a(131),x=a(127),O=a(71),h="#339bd4",f=Object(O.a)({typography:{fontFamily:"Poppins, sans-serif"},palette:{primary:{main:"#339bd4"},secondary:{main:h}},overrides:{MuiDialogActions:{root:{padding:"8px 24px 16px 24px"}},MuiButton:{root:{fontWeight:600,textTransform:"none",color:h,padding:"6px 24px"},outlined:{borderRadius:"35px",borderColor:h,padding:"6px 20px"}},MuiSelect:{filled:{padding:"15px 0 15px 15px"}},MuiFilledInput:{input:{height:"49px",padding:"0px 0 0 10px"}}}}),m=a(99),y=a(3),v=function(e){return Object(y.jsx)(b.a,{py:15,bgcolor:"#572d80",color:"white",children:Object(y.jsx)(p.a,{container:!0,justify:"center",children:Object(y.jsx)(p.a,{item:!0,xs:10,children:Object(y.jsxs)(b.a,{display:"flex",justifyContent:"space-between",children:[Object(y.jsx)(m.a,{variant:"h5",children:" PT RECRUITMENT"}),Object(y.jsx)(x.a,{onClick:e.openNewJobModel,variant:"contained",color:"primary",disableElevation:!0,children:"Post a Job"})]})})})})},g=a(15),C=a(128),k=a(140),w=a(142),S=Object(C.a)({wrapper:{border:"1px solid grey",backgroundColor:"#fff",display:"flex",boxShadow:"Opx 1px 5px rgba(0, 0, 0.1)",borderRadius:"5px","& > *":{flex:1,height:"45px",margin:"8px"}}}),N=function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)({type:"Full time",location:"VIC"}),d=Object(j.a)(r,2),p=d[0],O=d[1],h=function(e){e.persist(),O((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))},f=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.next=3,e.fetchJobsCustom(p);case 3:i(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=S();return Object(y.jsxs)(b.a,{p:2,mt:-5,mb:2,className:m.wrapper,children:[" ",Object(y.jsxs)(k.a,{onChange:h,value:p.type,name:"type",disableUnderline:!0,variant:"filled",children:[Object(y.jsx)(w.a,{value:"Full time",children:"Full Time"}),Object(y.jsx)(w.a,{value:"Part time",children:"Part time"}),Object(y.jsx)(w.a,{value:"Contract",children:"Contract"})]}),Object(y.jsxs)(k.a,{onChange:h,value:p.location,name:"location",disableUnderline:!0,variant:"filled",children:[Object(y.jsx)(w.a,{value:"VIC",children:"VIC"}),Object(y.jsx)(w.a,{value:"ACT",children:"ACT"}),Object(y.jsx)(w.a,{value:"NSW",children:"NSW"}),Object(y.jsx)(w.a,{value:"QLD",children:"QLD"}),Object(y.jsx)(w.a,{value:"NT",children:"NT"}),Object(y.jsx)(w.a,{value:"WA",children:"WA"}),Object(y.jsx)(w.a,{value:"SA",children:"SA"}),Object(y.jsx)(w.a,{value:"TAS",children:"TAS"})]}),Object(y.jsx)(x.a,{disabled:c,variant:"contained",color:"primary",disableElevation:!0,onClick:f,children:c?Object(y.jsx)(u.a,{color:"secondary",size:22}):"Search"})]})},I=a(144),A=Object(C.a)((function(e){return{wrapper:{border:"1px solid #e8e8e8",cursor:"pointer",transition:".3s","&:hover":{boxShadow:"0px 5ps 25px rgba(0, 0, 0, 0.1)",borderLeft:"6px solid #4D64E4"}},companyName:{fontSize:"13.5px",backgroundColor:e.palette.primary.main,padding:e.spacing(.75),borderRadius:"5px",display:"inline-block",fontWeight:600},skillChip:{margin:e.spacing(.5),padding:e.spacing(.75),fontSize:"14.5px",borderRadius:"5px",fontWeight:600,backgroundColor:e.palette.secondary.main,color:"#fff"}}})),W=function(e){var t=A();return Object(y.jsxs)(b.a,{p:2,className:t.wrapper,children:[" ",Object(y.jsxs)(p.a,{container:!0,alignItems:"center",children:[Object(y.jsxs)(p.a,{item:!0,xs:!0,children:[Object(y.jsx)(m.a,{variant:"subtitle1",children:e.title}),Object(y.jsx)(m.a,{className:t.companyName,variant:"subtitle1",children:e.companyName})]}),Object(y.jsx)(p.a,{item:!0,container:!0,xs:!0,children:e.skills.map((function(e){return Object(y.jsxs)(p.a,{className:t.skillChip,item:!0,children:["  ",e]},e)}))}),Object(y.jsxs)(p.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",xs:!0,children:[Object(y.jsx)(p.a,{item:!0,children:Object(y.jsxs)(m.a,{variant:"caption",children:[Object(I.a)(Date.now(),e.postedOn)," min ago | ",e.type," | ",e.location," "]})}),Object(y.jsx)(p.a,{item:!0,children:Object(y.jsxs)(b.a,{mt:2,children:[" ",Object(y.jsx)(x.a,{onClick:e.open,variant:"outlined",children:"View"})]})})]})]})]})},J=a(143),T=a(132),M=a(133),U=a(135),F=a(129),R=a(136),D=a(134),z=Object(C.a)((function(e){return{skillChip:{margin:e.spacing(.5),padding:e.spacing(.75),fontSize:"14.5px",borderRadius:"5px",fontWeight:600,border:"1px solid ".concat(e.palette.secondary.main),color:e.palette.secondary.main,cursor:"pointer","&:hover":{backgroundColor:e.palette.secondary.main,color:"#fff"}},included:{backgroundColor:e.palette.secondary.main,color:"#fff"}}})),P={title:"",type:"Full time",companyName:"",companyUrl:"",location:"Remote",link:"",description:"",skills:[]},E=function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(P),d=Object(j.a)(r,2),O=d[0],h=d[1],f=function(e){e.persist(),h((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))},v=function(){var t=Object(o.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=s.a.keys(O);case 1:if((t.t1=t.t0()).done){t.next=7;break}if(a=t.t1.value,"string"!==typeof O[a]||O[a]){t.next=5;break}return t.abrupt("return");case 5:t.next=1;break;case 7:if(O.skills.length){t.next=9;break}return t.abrupt("return");case 9:return i(!0),t.next=12,e.postJob(O);case 12:C();case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){h(P),i(!1),e.closeModel()},S=z();return Object(y.jsxs)(J.a,{open:e.newJobModel,fullWidth:!0,children:[Object(y.jsx)(T.a,{children:Object(y.jsxs)(b.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:["Post Job",Object(y.jsxs)(M.a,{onClick:C,children:[" ",Object(y.jsx)(D.a,{})]})]})}),Object(y.jsxs)(U.a,{children:[Object(y.jsxs)(p.a,{container:!0,spacing:2,children:[Object(y.jsx)(p.a,{item:!0,xs:6,children:Object(y.jsx)(F.a,{onChange:f,name:"title",value:O.title,autoComplete:"off",placeholder:"Job title *",disableUnderline:!0,fullWidth:!0})}),Object(y.jsx)(p.a,{item:!0,xs:6,children:Object(y.jsxs)(k.a,{onChange:f,fullWidth:!0,name:"type",value:O.type,disableUnderline:!0,variant:"filled",children:[Object(y.jsx)(w.a,{value:"Full time",children:"Full Time"}),Object(y.jsx)(w.a,{value:"Part time",children:"Part time"}),Object(y.jsx)(w.a,{value:"Contract",children:"Contract"})]})}),Object(y.jsx)(p.a,{item:!0,xs:6,children:Object(y.jsx)(F.a,{onChange:f,name:"companyName",value:O.companyName,autoComplete:"off",placeholder:"Company name *",disableUnderline:!0,fullWidth:!0})}),Object(y.jsx)(p.a,{item:!0,xs:6,children:Object(y.jsx)(F.a,{onChange:f,name:"companyUrl",value:O.companyUrl,autoComplete:"off",placeholder:"Company URL *",disableUnderline:!0,fullWidth:!0})}),Object(y.jsx)(p.a,{item:!0,xs:6,children:Object(y.jsxs)(k.a,{onChange:f,name:"location",value:O.location,fullWidth:!0,disableUnderline:!0,variant:"filled",children:[Object(y.jsx)(w.a,{value:"VIC",children:"VIC"}),Object(y.jsx)(w.a,{value:"ACT",children:"ACT"}),Object(y.jsx)(w.a,{value:"NSW",children:"NSW"}),Object(y.jsx)(w.a,{value:"QLD",children:"QLD"}),Object(y.jsx)(w.a,{value:"NT",children:"NT"}),Object(y.jsx)(w.a,{value:"WA",children:"WA"}),Object(y.jsx)(w.a,{value:"SA",children:"SA"}),Object(y.jsx)(w.a,{value:"TAS",children:"TAS"})]})}),Object(y.jsx)(p.a,{item:!0,xs:6,children:Object(y.jsx)(F.a,{onChange:f,name:"link",value:O.link,autoComplete:"off",placeholder:"Job Link *",disableUnderline:!0,fullWidth:!0})}),Object(y.jsx)(p.a,{item:!0,xs:12,children:Object(y.jsx)(F.a,{onChange:f,name:"description",value:O.description,autoComplete:"off",placeholder:"Job Desription *",disableUnderline:!0,fullWidth:!0,multiline:!0,rows:4})})]}),Object(y.jsxs)(b.a,{mt:2,children:["                     ",Object(y.jsx)(m.a,{children:"Skills*"}),"  ",Object(y.jsxs)(b.a,{display:"flex",children:["              ",["Cert III Fitness","Cert IV Fitness","First Aid"].map((function(e){return Object(y.jsx)(b.a,{onClick:function(){return function(e){return O.skills.includes(e)?h((function(t){return Object(l.a)(Object(l.a)({},t),{},{skills:t.skills.filter((function(t){return t===e}))})})):h((function(t){return Object(l.a)(Object(l.a)({},t),{},{skills:t.skills.concat(e)})}))}(e)},className:"".concat(S.skillChip," \n                    ").concat(O.skills.includes(e)&&S.included),children:e},e)}))]})]})]}),Object(y.jsx)(R.a,{children:Object(y.jsxs)(b.a,{color:"red",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(m.a,{variant:"caption",children:"*Required fields"}),Object(y.jsx)(x.a,{onClick:v,variant:"contained",disableElevation:!0,color:"primary",disabled:c,children:c?Object(y.jsx)(u.a,{color:"secondary",size:22}):"Post Job"})]})})]})},V=a(60),L=(a(97),V.a.initializeApp({apiKey:"AIzaSyAsR0Irc1BznuqHo6nI48efAhUNxX2elFg",authDomain:"job-app-react.firebaseapp.com",projectId:"job-app-react",storageBucket:"job-app-react.appspot.com",messagingSenderId:"929999226467",appId:"1:929999226467:web:1ad51ad8c3b963dfc49a56"}).firestore()),B=a(138),Q=Object(C.a)((function(e){return{info:{"& > *":{margin:"4px"}},skillChip:{margin:e.spacing(.5),padding:e.spacing(.75),fontSize:"14.5px",borderRadius:"5px",fontWeight:600,backgroundColor:e.palette.secondary.main,color:"#fff"}}})),H=function(e){var t=Q();return Object(y.jsxs)(J.a,{open:!!Object.keys(e.job).length,fullWidth:!0,children:[Object(y.jsx)(T.a,{children:Object(y.jsxs)(b.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.job.title," @ ",e.job.companyName,Object(y.jsx)(M.a,{onClick:e.closeModel,children:Object(y.jsx)(D.a,{})})]})}),Object(y.jsx)(U.a,{children:Object(y.jsxs)(b.a,{children:[Object(y.jsxs)(b.a,{className:t.info,display:"flex",children:[Object(y.jsx)(m.a,{variant:"caption",children:"Posted on:"}),Object(y.jsx)(m.a,{variant:"body2",children:e.job.postedOn&&Object(B.a)(e.job.postedOn,"dd/MMM/yyy HH:MM")})]}),Object(y.jsxs)(b.a,{className:t.info,display:"flex",children:[Object(y.jsx)(m.a,{variant:"caption",children:"Job type:"}),Object(y.jsx)(m.a,{variant:"body2",children:e.job.type})]}),Object(y.jsxs)(b.a,{className:t.info,display:"flex",children:[Object(y.jsx)(m.a,{variant:"caption",children:"Job location:"}),Object(y.jsx)(m.a,{variant:"body2",children:e.job.location})]}),Object(y.jsxs)(b.a,{className:t.info,display:"flex",children:[Object(y.jsx)(m.a,{variant:"caption",children:"Job desription:"}),Object(y.jsx)(m.a,{variant:"body2",children:e.job.description})]}),Object(y.jsxs)(b.a,{className:t.info,display:"flex",children:[Object(y.jsx)(m.a,{variant:"caption",children:"Company name:"}),Object(y.jsx)(m.a,{variant:"body2",children:e.job.companyName})]}),Object(y.jsxs)(b.a,{className:t.info,display:"flex",children:[Object(y.jsx)(m.a,{variant:"caption",children:"Company website:"}),Object(y.jsx)(m.a,{variant:"body2",children:e.job.companyUrl})]}),Object(y.jsxs)(b.a,{ml:.5,children:[Object(y.jsx)(m.a,{variant:"caption",children:"Skills:"}),Object(y.jsx)(p.a,{container:!0,alignItems:"center",children:e.job.skills&&e.job.skills.map((function(e){return Object(y.jsx)(p.a,{item:!0,className:t.skillChip,children:e},e)}))})]})]})}),Object(y.jsx)(R.a,{children:Object(y.jsx)(x.a,{variant:"outlined",component:"a",href:e.job.link,target:"_blank",children:"Apply"})})]})},q=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),r=Object(j.a)(i,2),O=r[0],h=r[1],m=Object(n.useState)(!1),g=Object(j.a)(m,2),C=g[0],k=g[1],w=Object(n.useState)(!1),S=Object(j.a)(w,2),I=S[0],A=S[1],J=Object(n.useState)({}),T=Object(j.a)(J,2),M=T[0],U=T[1],F=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!1),h(!0),e.next=4,L.collection("jobs").orderBy("postedOn","desc").get();case 4:t=e.sent,a=t.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id,postedOn:e.data().postedOn.toDate()})})),c(a),h(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),k(!0),e.next=4,L.collection("jobs").orderBy("postedOn","desc").where("location","==",t.location).where("type","==",t.type).get();case 4:a=e.sent,n=a.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id,postedOn:e.data().postedOn.toDate()})})),c(n),h(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.collection("jobs").add(Object(l.a)(Object(l.a)({},t),{},{postedOn:V.a.firestore.FieldValue.serverTimestamp()}));case 2:F();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){F()}),[]),Object(y.jsxs)(d.a,{theme:f,children:[" ",Object(y.jsx)(v,{openNewJobModel:function(){return A(!0)}}),Object(y.jsx)(E,{closeModel:function(){return A(!1)},newJobModel:I,postJob:z}),Object(y.jsx)(H,{job:M,closeModel:function(){return U({})}}),Object(y.jsx)(b.a,{mb:3,children:Object(y.jsx)(p.a,{container:!0,justify:"center",children:Object(y.jsxs)(p.a,{item:!0,xs:10,children:[Object(y.jsx)(N,{fetchJobsCustom:R}),O?Object(y.jsx)(b.a,{display:"flex",justifyContent:"center",children:Object(y.jsx)(u.a,{})}):Object(y.jsxs)(y.Fragment,{children:[C&&Object(y.jsx)(b.a,{my:2,display:"flex",justifyContent:"flex-end",children:Object(y.jsxs)(x.a,{onClick:F,children:[Object(y.jsx)(D.a,{size:20}),"Custom Search"]})}),a.map((function(e){return Object(y.jsx)(W,Object(l.a)({open:function(){return U(e)}},e),e.id)}))]})]})})})]})};i.a.render(Object(y.jsx)(q,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.0ca5675f.chunk.js.map