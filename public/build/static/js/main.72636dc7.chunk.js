(window["webpackJsonpfront-end"]=window["webpackJsonpfront-end"]||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/calendar.1890f5a0.svg"},43:function(e,t,a){e.exports=a.p+"static/media/money.d7285f3e.svg"},44:function(e,t,a){e.exports=a.p+"static/media/superhero.cd13e935.svg"},45:function(e,t,a){e.exports=a.p+"static/media/report.1c1c3f33.svg"},46:function(e,t,a){e.exports=a.p+"static/media/tools.15679d32.svg"},49:function(e,t,a){e.exports=a(94)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/id-card.42f4e5d8.svg"},88:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(24),o=a.n(c),r=(a(54),a(55),a(7)),l=a(20),s=a(2),m=a(3),d=a(5),p=a(4),u=a(6),v=(a(56),a(9)),h=a.n(v),f=a(15),E=a(10),b=(a(62),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:" container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"candidate-card-container col s12"},i.a.createElement("div",{className:"candidate-card card"},i.a.createElement("div",{className:"card-content white-text"},i.a.createElement("span",{className:"card-title"},this.props.candidate.name),i.a.createElement("p",null,this.props.candidate.title,"."),i.a.createElement("p",null,this.props.candidate.location,"."))))))}}]),t}(n.Component)),g=a(8),y=a.n(g),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={candidates:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,i=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("AllCandidatesPage"),t="".concat(window.apiHost,"/candidates/candidates"),e.next=4,y.a.get(t);case 4:a=e.sent,console.log(a.data),n=a.data,this.setState({candidates:n},(function(){console.log(i.state)}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state.candidates);var e=this.state.candidates.map((function(e,t){return i.a.createElement(r.b,{key:t,to:"/candidateProfile/".concat(e.id)},i.a.createElement(b,{candidate:e,key:t}))}));return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:""},e))}}]),t}(n.Component);var O=Object(E.b)((function(e){return{candidateData:e.candidateData}}),null)(N),w=a(42),j=a.n(w),_=a(43),C=a.n(_),D=a(44),k=a.n(D),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).sate={},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container row hero-container"},i.a.createElement("div",{className:"container hero-title col s6"},i.a.createElement("h5",null,"Find Better Candidates"),i.a.createElement("br",null),i.a.createElement("h5",null,"Faster")),i.a.createElement("div",{className:"col s6 banner-main"})),i.a.createElement("div",null,i.a.createElement("div",{className:" home-btnscontainer center-align"},i.a.createElement("div",{className:" col s12 row menu"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col m6 s12"},i.a.createElement(r.b,{to:"/employerHome/positions",className:"waves-effect waves-light btn-large blue-grey "},i.a.createElement("i",{className:"material-icons right"}),"Employer")),i.a.createElement("div",{className:"col m6 s12"},i.a.createElement(r.b,{to:"/candidateHome",className:"waves-effect waves-light btn-large blue-grey "},i.a.createElement("i",{className:"material-icons right"}),"Job Seeker")))))),i.a.createElement("div",{className:"container main-body container"},i.a.createElement("div",{className:"row main-body-header"}),i.a.createElement("div",{className:"main-body-description"},i.a.createElement("div",{className:"row desc-container"},i.a.createElement("img",{src:"".concat(j.a),className:"col m2 s12 "}),i.a.createElement("p",{className:"col s10"},"SAVE TIME")),i.a.createElement("div",{className:"row desc-container"},i.a.createElement("img",{src:"".concat(C.a),className:"col m2 s12 "}),i.a.createElement("p",null,"SAVE MONEY")),i.a.createElement("div",{className:"row desc-container"},i.a.createElement("img",{src:"".concat(k.a),className:"col m2 s12 "}),i.a.createElement("p",null,"FIND BETTER PEOPLE")))),i.a.createElement("div",{className:"main-candidates"},i.a.createElement("h4",null,"Check out some candidates"),i.a.createElement(O,null)))}}]),t}(n.Component),x=(a(81),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav"},i.a.createElement("nav",{className:"nav transparent"},i.a.createElement("div",{className:"nav transparent yllow"},i.a.createElement("ul",{id:"",className:"n"},i.a.createElement("li",{className:"nav"},i.a.createElement(r.b,{to:"/"},"HOME")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"/candidates"},"CANDIDATES")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"/employerHome/positions"},"OPEN POSITIONS"))))))}}]),t}(n.Component)),S=(a(82),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={candidates:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.positionId,console.log("candidates page",t),a="".concat(window.apiHost,"/employers/positions/").concat(t),e.next=5,y.a.get(a);case 5:n=e.sent,i=n.data.msg,this.setState({candidates:JSON.parse(i)});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.candidates.map((function(e,t){if(0!=e.accepted)return i.a.createElement(r.b,{key:t,to:"/candidateProfile/".concat(e.position_id,"/").concat(e.id)},i.a.createElement(b,{candidate:e,key:t}))}));return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:""},e))}}]),t}(n.Component));var A=Object(E.b)((function(e){return{candidateData:e.candidateData}}),null)(S),F=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Candidate Home Page"),i.a.createElement("div",{className:"row"},i.a.createElement(r.b,{to:"/candidateHome/createprofile",className:"waves-effect waves-light btn-large blue-grey darken-2"},i.a.createElement("i",{className:"material-icons right"}),"Create Profile")))}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("rendering employer home page"),i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Employer Home Page"),i.a.createElement("div",{className:"row"},i.a.createElement(r.b,{to:"/employerHome/positions",className:"waves-effect waves-light btn-large blue-grey darken-2"},i.a.createElement("i",{className:"material-icons right"}),"Positions")),i.a.createElement("div",{className:"row"},i.a.createElement(r.b,{to:"/addPosition",className:"waves-effect waves-light btn-large blue-grey darken-2"},i.a.createElement("i",{className:"material-icons right"}),"Add Position")))}}]),t}(n.Component),H=a(26),T=function(e){console.log("createProfileAction called"),console.log(e);var t="".concat(window.apiHost,"/candidates/create-user-profile"),a=y.a.post(t,e);return console.log(a),{type:"addUser",payload:{axiosResp:a}}},L=a(12),I=a(21),q=a.n(I);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={nameFirst:"",nameLast:"",email:"",phone:"",password:"",years_of_experience:"",location:"",education:"",skills:[],title:""},a.handleFirstNameChange=function(e){a.setState({nameFirst:e.target.value})},a.handleLastNameChange=function(e){a.setState({nameLast:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handlePhoneChange=function(e){a.setState({phone:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleExperienceChange=function(e){a.setState({years_of_experience:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault();var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(H.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state);a.props.createProfileAction(t)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;q.a.AutoInit(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".chips");q.a.Chips.init(e,{onChipAdd:t,onChipDelete:t})}));var t=function(t){var a=t[0].M_Chips.chipsData.map((function(e){return e.tag.toLowerCase()}));e.setState({skills:a})}}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Create Profile"),i.a.createElement("div",{className:"row"},i.a.createElement("form",{action:"submit",className:"col s12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s6"},i.a.createElement("input",{value:this.state.nameFirst,onChange:this.handleFirstNameChange,placeholder:"First Name",id:"first_name",type:"text",className:"validate"}),i.a.createElement("label",{htmlFor:"first_name"})),i.a.createElement("div",{className:"input-field col s6"},i.a.createElement("input",{value:this.state.nameLast,onChange:this.handleLastNameChange,placeholder:"Last Name",id:"last_name",type:"text",className:"validate"}),i.a.createElement("label",{htmlFor:"last_name"}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{value:this.state.email,onChange:this.handleEmailChange,placeholder:"Email",id:"disabled",type:"email",className:"validate"}),i.a.createElement("label",{htmlFor:"email"}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{value:this.state.phone,onChange:this.handlePhoneChange,placeholder:"Phone Number",id:"phone",type:"number",className:"validate"}),i.a.createElement("label",{htmlFor:"phone_number"}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{value:this.state.password,onChange:this.handlePasswordChange,placeholder:"password",id:"pass",type:"password",className:"validate"}),i.a.createElement("label",{htmlFor:"pass"}))),i.a.createElement("div",{className:"file-field input-field "},i.a.createElement("div",{className:"waves-effect waves-light btn-large blue-grey darken-2"},i.a.createElement("span",null,"File"),i.a.createElement("input",{type:"file",multiple:!0})),i.a.createElement("div",{className:"file-path-wrapper"},i.a.createElement("input",{className:"file-path validate",type:"text",placeholder:"Upload one or more files"}))),i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("select",{id:"yearsExperience",value:this.state.years_of_experience,onChange:this.handleExperienceChange,ref:"select"},i.a.createElement("option",{value:""},"Years of Experience?"),i.a.createElement("option",{value:"1"},"0-1"),i.a.createElement("option",{value:"2"},"2-3"),i.a.createElement("option",{value:"3"},"3-5"),i.a.createElement("option",{value:"4"},"5-10"),i.a.createElement("option",{value:"5"},"10+"))),i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("select",{id:"positionTitle",value:this.state.title,onChange:this.handlePositionChange,ref:"select"},i.a.createElement("option",{value:""},"What job are you looking for?"),i.a.createElement("option",{value:"Software Developer"},"Software Developer"),i.a.createElement("option",{value:"Mobile Application Developer"},"Mobile Application Developer"),i.a.createElement("option",{value:"Data Scientist"},"Data Scientist"),i.a.createElement("option",{value:"Project Manager"},"Project Manager"),i.a.createElement("option",{value:"Business Development Rep"},"Business Development Rep"))),i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("div",{id:"user-skills",className:"chips chips-autocomplete"})),i.a.createElement("div",{className:"input-field row"},i.a.createElement("input",{onClick:this.handleFormSubmit,className:"waves-effect waves-light btn-large blue-grey darken-2",type:"submit",value:"submit"})))))}}]),t}(n.Component);var J=Object(E.b)(null,(function(e){return Object(L.b)({createProfileAction:T},e)}))(R),U=function(){var e=Object(f.a)(h.a.mark((function e(t){var a,n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("add position action fired",t),a="".concat(window.apiHost,"/employers/create-position"),e.next=4,y.a.post(a,t);case 4:return n=e.sent,i=n.data,console.log("addPositionResutls:",i),e.abrupt("return",{type:"addPositionAction",payload:{data:i}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();a(83);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(H.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={company_name:"",title:"",skills:[],employer_position:"",years_of_experience:"",payTier:"",redirectToTrainingData:!1,position_id:""},a.submitPositionsForm=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,i,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t.target),console.log(a.state),console.log("POSITION SUBMIT CLICKED"),n=V({},a.state),i="".concat(window.apiHost,"/employers/create-position"),e.next=8,y.a.post(i,n);case 8:c=e.sent,o=c.data,console.log(o),a.setState({company_name:"",title:"",skills:[],employer_position:"",years_of_experience:"",redirectToTrainingData:!0,position_id:o.position_id});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handlePositionChange=function(e){console.log(e.target.value),a.setState({title:e.target.value})},a.handleExperienceChange=function(e){console.log(e.target.value),a.setState({years_of_experience:e.target.value})},a.handleCompanyNameChange=function(e){console.log(e.target.value),a.setState({company_name:e.target.value})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;q.a.AutoInit(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".chips");q.a.Chips.init(e,{onChipAdd:t,onChipDelete:t})}));var t=function(t){var a=t[0].M_Chips.chipsData.map((function(e){return e.tag.toLowerCase()}));e.setState({skills:a})}}},{key:"render",value:function(){var e=this.state.redirectToTrainingData;return console.log(this.props),!0===e?(console.log(this.props),i.a.createElement(l.a,{to:"/positionTrainingData/".concat(this.state.position_id)})):i.a.createElement("div",{className:"add-position-form container"},i.a.createElement("h3",null,"Add A Position"),i.a.createElement("form",{className:"col s12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("input",{value:this.state.company_name,onChange:this.handleCompanyNameChange,placeholder:"Company Name",id:"company-name",type:"text",className:"validate"})),i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("select",{id:"positionTitle",value:this.state.title,onChange:this.handlePositionChange,ref:"select"},i.a.createElement("option",{value:""},"What Position Are You Hiring?"),i.a.createElement("option",{value:"Software Developer"},"Software Developer"),i.a.createElement("option",{value:"Mobile Application Developer"},"Mobile Application Developer"),i.a.createElement("option",{value:"Data Scientist"},"Data Scientist"),i.a.createElement("option",{value:"Project Manager"},"Project Manager"),i.a.createElement("option",{value:"Business Development Rep"},"Business Development Rep"))),i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("select",{id:"yearsExperience",value:this.state.years_of_experience,onChange:this.handleExperienceChange,ref:"select"},i.a.createElement("option",{value:""},"Years of Experience?"),i.a.createElement("option",{value:"0-1"},"0-1"),i.a.createElement("option",{value:"2-3"},"2-3"),i.a.createElement("option",{value:"3-5"},"3-5"),i.a.createElement("option",{value:"5-10"},"5-10"),i.a.createElement("option",{value:"10+"},"10+"))),i.a.createElement("div",{className:"input-field col s12"},i.a.createElement("div",{id:"skills",className:"chips chips-autocomplete"})),i.a.createElement("button",{className:"btn waves-effect waves-light blue-grey darken-1",type:"submit",onClick:this.submitPositionsForm,name:"action"},"Submit"))))}}]),t}(n.Component);var K=Object(E.b)(null,(function(e){return Object(L.b)({addPositionAction:U},e)}))(W),Q=(a(84),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"position-card-container col s12"},i.a.createElement("div",{className:"position-card card"},i.a.createElement("div",{className:"card-content white-text"},i.a.createElement("h5",{className:"position-card-title card-title"},this.props.position.title),i.a.createElement("h6",null,this.props.position.company_name,"."),i.a.createElement("p",null,this.props.position.description,"."),i.a.createElement("p",null,"Years of Experience: ",this.props.position.years_of_experience))))))}}]),t}(n.Component));var z=function(e){var t=e.positions.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement(r.b,{to:"/positions/".concat(e.id),key:t},i.a.createElement(Q,{position:e})))}));return i.a.createElement("div",null,t)},G=(a(85),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={positions:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("".concat(window.apiHost,"/employers/positions")).then((function(t){var a=t.data;e.setState({positions:a})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid col s12"},i.a.createElement("h2",{className:"employer-positions-title"},"Open Positions"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container col l6 m12 s12"},i.a.createElement(K,null)),i.a.createElement("div",{className:"container col l6 m12 s12"},i.a.createElement("h3",null,"Positions"),i.a.createElement(z,{positions:this.state.positions}))))}}]),t}(n.Component));var X=Object(E.b)((function(e){return{}}))(G),Z=(a(86),a(87),a(45)),$=a.n(Z),ee=a(46),te=a.n(ee),ae=function(e){console.log("acceptDeclineActionFired"),console.log(e);var t=e.position_id,a=e.userId,n=e.acceptDeclineValue,i="".concat(window.apiHost,"/candidates/accept-decline-candidate/").concat(t,"/").concat(a,"/").concat(n);return{type:"acceptDecline",payload:y.a.post(i,e)}},ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={candidate:{},position_id:""},a.handleAcceptDecline=function(e){e.preventDefault();var t=a.state.candidate.id,n=a.state.position_id;console.log(a.props);var i={userId:t,acceptDeclineValue:e.target.value,position_id:n};console.log("buttonwas clicked:",e),a.props.acceptDeclineCandidateAction(i)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,a=this.props.match.params.position_id,console.log(a),n="".concat(window.apiHost,"/candidates/candidateProfile/").concat(a,"/").concat(t),e.next=6,y.a.get(n);case 6:i=e.sent,this.setState({candidate:i.data[0],position_id:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,a=this.state.candidate,n=(a.id,a.name),c=(a.nameLast,a.description),o=(a.email,a.phone,a.title),r=(a.desired_job_role,a.years_of_experience,a.desired_salary_range,a.desired_location_city),l=a.skills;a.level_of_education,a.candidate_summary;return e=this.state.position_id?i.a.createElement("div",{className:"row"},i.a.createElement("button",{onClick:this.handleAcceptDecline,value:"1",className:"candidate-profile-btn btn-large"},"Add Candidate"),i.a.createElement("button",{onClick:this.handleAcceptDecline,value:"0",className:"candidate-profile-btn btn-large"},"Decline Candidate")):i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return t.props.history.push("/employer/addPosition")},className:"candidate-profile-btn btn-large"},"Create a Position")),i.a.createElement("div",{className:"candidate-profile-full container"},i.a.createElement("ul",{className:"collection"},i.a.createElement("li",{className:"candidate-info collection-item avatar"},i.a.createElement("span",{className:"title"},n," "),i.a.createElement("p",null,o," ",i.a.createElement("br",null),r)),i.a.createElement("li",{className:"candidate-skills collection-item avatar"},i.a.createElement("span",{className:"title"},"Skills"),i.a.createElement("br",null),i.a.createElement("div",{className:"info-container row col s12"},i.a.createElement("img",{src:te.a,alt:"",className:"col s1 square-icon"}),i.a.createElement("p",null,l))),i.a.createElement("li",{className:"collection-item avatar"},i.a.createElement("span",{className:"title"},"Candidate Summary"),i.a.createElement("div",{className:"info-container row col s12"},i.a.createElement("img",{src:$.a,alt:"",className:"col s1 square-icon"}),i.a.createElement("p",null,c)))),e)}}]),t}(n.Component);var ie=Object(E.b)((function(e){return{candidateData:e.candidateData}}),(function(e){return Object(L.b)({acceptDeclineCandidateAction:ae},e)}))(ne),ce=(a(88),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={candidates:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("TrainingDataPage"),t="".concat(window.apiHost,"/candidates/candidates"),e.next=4,y.a.get(t);case 4:a=e.sent,console.log(a.data),n=a.data,this.setState({candidates:n},(function(){}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match.params.position_id,t=this.state.candidates.map((function(t,a){return i.a.createElement(r.b,{key:a,to:"/candidateProfile/".concat(e,"/").concat(t.id)},i.a.createElement(b,{candidate:t,key:a}))}));return i.a.createElement("div",{className:"trainingDataCardContainer"},i.a.createElement("div",{className:""},t),i.a.createElement(r.b,{to:"/positions/".concat(e),className:"btn submitTrainingDataButton waves-effect waves-light",onClick:this.submitPositionsForm,name:"action"},"I'm done, lets see my candidates!"))}}]),t}(n.Component));var oe=Object(E.b)((function(e){return{positionId:e.positionId}}),null)(ce);a(89);var re=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(l.b,{path:"/",component:x}),i.a.createElement(l.b,{exact:!0,path:"/",component:P}),i.a.createElement(l.b,{exact:!0,path:"/employerHome",component:M}),i.a.createElement(l.b,{exact:!0,path:"/employerHome/positions",component:X}),i.a.createElement(l.b,{exact:!0,path:"/employerHome/positions/:id",component:A})," ",i.a.createElement(l.b,{exact:!0,path:"/employer/addPosition",component:K}),i.a.createElement(l.b,{exact:!0,path:"/candidates",component:O}),i.a.createElement(l.b,{exact:!0,path:"/candidateProfile/:position_id/:id",component:ie}),i.a.createElement(l.b,{exact:!0,path:"/candidateProfile/:id",component:ie}),i.a.createElement(l.b,{exact:!0,path:"/candidateHome",component:F}),i.a.createElement(l.b,{exact:!0,path:"/positions/:positionId",component:A}),i.a.createElement(l.b,{exact:!0,path:"/candidateHome/createprofile",component:J}),i.a.createElement(l.b,{exact:!0,path:"/positionTrainingData/:position_id",component:oe}),i.a.createElement(l.b,{exact:!0,path:"/positionTrainingData/:position_id/:user_id",component:ie})))},le=a(48),se=[{id:1,username:"bjones",nameFirst:"Bob",nameLast:"Jones",email:"bob.jones@people.com",phone:"777-777-7777",most_recent_job_role:"Software Engineer",desired_job_role:"Software Engineer",years_of_experience:"4",desired_salary_range:"3",desired_location_city:"Atlanta",skills:["Python","JavaScript","SQL","HTML","CSS"],level_of_education:"3",candidate_summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:2,username:"ssmith",nameFirst:"Sue",nameLast:"Smith",email:"sue.smith@people.com",phone:"111-111-1111",most_recent_job_role:"Business Development Rep",desired_job_role:"Software Engineer",years_of_experience:"1",desired_salary_range:"2",desired_location_city:"San Francisco",skills:["Team Building","Microsoft Office","Sales","Cold Calling"],level_of_education:"1",candidate_summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],me=Object(L.c)({candidateData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,a=(Object(le.a)(e),t.payload);switch(t.type){case"getCandidates":return a.data;default:return e}},positionId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"addPositionAction":var n=a.data.position_id;return n;default:return e}}}),de=a(47),pe=a.n(de),ue=Object(L.a)(pe.a)(L.d)(me);o.a.render(i.a.createElement(E.a,{store:ue},i.a.createElement(re,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.72636dc7.chunk.js.map