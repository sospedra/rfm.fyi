(this.webpackJsonprfm=this.webpackJsonprfm||[]).push([[0],{38:function(e,t,a){e.exports=a(56)},43:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),c=a(7),o=a(11),i=a(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(22),u=a.n(m);u.a.init("e584fa40e066890465612b19042dddd1");var d=function(){u.a.track.apply(u.a,arguments)},p=(a(43),a(1)),f=a(14),h=a(20),b=a(9),E=a(2),x=a.n(E),v=a(12),g=a(32),w="https://api.github.com",N=function(){var e=Object(v.a)(x.a.mark((function e(){var t,a,n,r,l,s,c,o=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=["repo:sospedra/rfm","state:open","label:search",t,"in:title,body"],n="".concat(w,"/search/issues?q=").concat(a.join("+"),"&per_page=100"),e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:return l=e.sent,s=l.items.map((function(e){try{return{body:JSON.parse(e.body),id:e.id,comments:e.comments,createdAt:new Date(e.created_at),title:e.title,updatedAt:new Date(e.updated_at),url:e.html_url}}catch(t){return null}})),c=s.filter((function(e){return null!==e})),e.abrupt("return",{requestList:c,total:l.total_count});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e,t,a){if(!e)return{};var n=e[t];return n?Object(b.a)({},a||t,n):{}},k=function(){var e=Object(v.a)(x.a.mark((function e(t){var a,n,r,l,s,c,o,i,m,u,d;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.split("github.com/"),n=Object(p.a)(a,2),n[0],r=n[1],l=r.split("/"),s=Object(p.a)(l,2),c=s[0],o=s[1],e.next=4,fetch("".concat(w,"/repos/").concat(c,"/").concat(o),{headers:{Accept:"application/vnd.github.mercy-preview+json"}});case 4:return i=e.sent,e.next=7,i.json();case 7:return m=e.sent,u=g[m.language],d=Object(h.a)({description:m.description,fullName:m.full_name,language:m.language,name:o,openIssues:m.open_issues_count,owner:c,stars:m.stargazers_count,updatedAt:m.updated_at,url:m.html_url,requestIssueFullName:"NONE",requestIssueNumber:-1},y(m.license,"spdx_id","license"),{},y(m,"topics"),{},y(u,"filenames"),{},y(u,"aceMode"),{},y(u,"aliases"),{},y(u,"color"),{},y(u,"extensions"),{},y(u,"group"),{},y(u,"interpreters")),e.abrupt("return",d);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(x.a.mark((function e(t){var a,n,r,l,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["repo:".concat(t),"state:open","type:issue","support OR maintain","in:title,body"],n="".concat(w,"/search/issues?q=").concat(a.join("+"),"&per_page=10"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return l=e.sent,s=l.items.map((function(e){return{id:e.id,body:e.body,comments:e.comments,createdAt:new Date(e.created_at),title:e.title,url:e.html_url,user:e.user.login,number:e.number}})),e.abrupt("return",{requestList:s,total:l.total_count});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){return r.a.createElement("footer",{className:"flex flex-row justify-between w-full max-w-4xl p-4 mx-auto mt-4"},r.a.createElement("p",null,"Hand-crafted with",r.a.createElement("span",{className:"mx-1 text-red-700","aria-label":"heart",role:"img"},"\u2665\ufe0f"),"by",r.a.createElement("a",{className:"ml-1 link",href:"https://sospedra.me",rel:"noopener noreferrer",target:"_blank"},"@sospedra")),r.a.createElement("div",{className:"flex flex-col items-end"},r.a.createElement(i.b,{className:"text-blue-600 hover:text-blue-800",to:"/about"},"About"),r.a.createElement("a",{href:"https://twitter.com/sospedra_r",target:"_blank",rel:"noopener noreferrer",className:"link"},"Contact"),r.a.createElement("a",{href:"https://github.com/sospedra/rfm",target:"_blank",rel:"noopener noreferrer",className:"link"},"Github")))},q=function(){return r.a.createElement("header",{className:"flex flex-row justify-between w-full max-w-4xl p-4 mx-auto"},r.a.createElement(i.b,{to:"/",className:"font-mono text-xl font-bold text-black"},r.a.createElement("span",{role:"img","aria-label":"construction"},"\ud83d\udea7")," ","rfm"),r.a.createElement(i.b,{to:"/submit",className:"px-2 py-1 text-pink-600 border border-pink-600 rounded"},"Submit new repo"))},S=function(e){return r.a.createElement("div",{className:"flex flex-col min-h-screen"},r.a.createElement(q,null),r.a.createElement("main",{className:"flex-grow w-full max-w-4xl p-4 mx-auto"},e.children),r.a.createElement(O,null))},L=function(e){return e.error?r.a.createElement("aside",{className:"p-4 m-6 text-red-700 border border-red-700 rounded"},console.error(e.error),"Something went wrong. Check the report details in the console."):null},C=function(){return r.a.createElement("svg",{className:"inline-block mb-1 align-text-bottom fill-current",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 01-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 01-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},I=function(e){return r.a.createElement("section",{className:"flex flex-col items-center justify-center w-full text-center md:p-8",style:{height:"50%"}},r.a.createElement("h2",{className:"italic text-blue-600 whitespace-no-wrap hover:text-blue-800"},r.a.createElement(i.b,{to:"/about"},"Track OSS requests for maintainers ",r.a.createElement(C,null))),r.a.createElement("form",{className:"w-full max-w-xl mx-auto",onSubmit:function(t){t.preventDefault();var a=new FormData(t.currentTarget).get("search");e.setQuery(a)}},r.a.createElement("label",{htmlFor:"search",className:"block"},r.a.createElement("h1",{className:"font-mono text-xl font-bold"},"Browse repos that need support")),r.a.createElement("div",{className:"flex flex-row my-4"},r.a.createElement("input",{id:"search",name:"search",className:"block w-full px-4 py-2 border rounded shadow-lg",placeholder:"Type a name, language, tag, etc."}),r.a.createElement("input",{className:"px-4 py-2 ml-4 text-white bg-pink-600 rounded shadow-lg cursor-pointer hover:bg-pink-700",type:"submit",value:"Search"}))))},_=a(18),T=a(35),A=a.n(T),M=function(){return r.a.createElement("svg",{"aria-label":"star",className:"inline-block align-text-bottom fill-current",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16",role:"img"},r.a.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}))},R=function(){return r.a.createElement("svg",{className:"inline-block align-text-bottom fill-current",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},z=function(e){return r.a.createElement("span",{className:"relative inline-block mr-1 bg-gray-900 rounded-full",style:{backgroundColor:e.color,width:14,height:14}})},F=function(e){return e.requestList?r.a.createElement("section",{className:"w-full py-4"},function(e){switch(e){case 0:return r.a.createElement("p",{className:"text-lg"},"There are not requests that matches your criteria"," ",r.a.createElement("span",{role:"img","aria-label":"shrug"},"\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f")," ","Try another search.");case 1:return r.a.createElement("p",{className:"text-lg"},"There is ",r.a.createElement("b",null,"1")," request that needs your help"," ",r.a.createElement("span",{role:"img","aria-label":"muscle"},"\ud83d\udcaa"));default:return r.a.createElement("p",{className:"text-lg"},"There are ",r.a.createElement("b",null,e)," requests that need your help"," ",r.a.createElement("span",{role:"img","aria-label":"hero"},"\ud83e\uddb8\ud83c\udffd\u200d\u2640\ufe0f"))}}(e.total),r.a.createElement("ul",null,e.requestList.map((function(e){var t,a=e.url,n=e.createdAt,l=e.body;return r.a.createElement("li",{key:a,className:"py-4 border-b sm:mx-4"},r.a.createElement("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",className:"text-lg text-blue-600 hover:text-blue-800",onClick:function(){return d("click_repo",l)},style:{display:"block"}},l.owner,"/",r.a.createElement("b",null,l.name)),r.a.createElement("p",{className:"pt-1"},l.description),r.a.createElement("div",{className:"flex flex-row flex-wrap items-end w-full pt-1 text-sm"},null===(t=l.topics)||void 0===t?void 0:t.map((function(e){return r.a.createElement("span",{key:e,className:"p-1 mb-1 mr-1 text-pink-500 bg-pink-100 rounded"},e)}))),r.a.createElement("p",{className:"text-sm text-gray-700"},"Requested at"," ",r.a.createElement("b",{className:"font-semibold"},n.toLocaleDateString())," ",r.a.createElement("a",{href:a,className:"text-blue-600 hover:text-blue-800",target:"_blank",rel:"noopener noreferrer"},"Did something change?")),r.a.createElement("div",{className:"flex flex-row pt-1 text-sm text-gray-700"},r.a.createElement("span",{className:"mr-4"},r.a.createElement(M,null)," ",A()(l.stars)),r.a.createElement("span",{className:"flex flex-row items-center mr-4"},r.a.createElement(z,{color:l.color})," ",l.language),r.a.createElement("span",{className:"mr-4"},r.a.createElement(R,null)," ",l.openIssues),r.a.createElement("span",{className:"mr-4"},l.license)))}))),r.a.createElement("div",{className:"pt-4 text-sm italic text-gray-800"},r.a.createElement("p",null,r.a.createElement("b",{className:"font-semibold"},"ProTip",r.a.createElement("span",{"aria-label":"trademark",role:"img"},"\u2122\ufe0f")," "),"Results are limited to a"," ",r.a.createElement("b",{className:"font-semibold"},"maximum of 100 items")," per search."),r.a.createElement("p",null,"To get the best results"," ",r.a.createElement("b",{className:"font-semibold"},"refine your query")," or inspect the"," ",r.a.createElement("a",{className:"text-blue-600 hover:text-blue-800",href:"https://github.com/sospedra/rfm"},"repo")))):r.a.createElement("section",{className:"w-full py-4 md:w-2/3"},r.a.createElement(_.a,null),r.a.createElement("br",null),r.a.createElement(_.a,null))},H=(a(50),function(){return r.a.createElement("form",{onSubmit:function(){return d("newsletter")},action:"https://app.convertkit.com/forms/".concat("1346503","/subscriptions"),className:"mx-auto bg-white rounded shadow-lg formkit-form",method:"post","min-width":"400 500 600 700 800"},r.a.createElement("div",{"data-style":"full"},r.a.createElement("div",{"data-element":"column",className:"p-8 formkit-column sm:p-6"},r.a.createElement("h1",{className:"text-lg font-bold formkit-header","data-element":"header"},"Join the newsletter"),r.a.createElement("div",{"data-element":"subheader",className:"formkit-subheader"},r.a.createElement("p",null,"Subscribe to get a ",r.a.createElement("b",null,"monthly")," single email with the latest repositories addded")),r.a.createElement("div",{className:"formkit-image"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",viewBox:"0 0 46 46",className:"w-full"},r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("path",{className:"text-pink-500 fill-current",d:"M23,36 C22.813,36 22.627,35.948 22.463,35.844 L0.463,21.844 C0.159,21.651 -0.017,21.308 0.001,20.948 C0.02,20.589 0.23,20.266 0.553,20.105 L23,6 L45.447,20.105 C45.769,20.266 45.98,20.588 45.999,20.948 C46.018,21.308 45.841,21.65 45.537,21.844 L23.537,35.844 C23.373,35.948 23.187,36 23,36 Z"}),r.a.createElement("path",{fill:"#FFF",className:"text-white fill-current",d:"M38,37 L8,37 L8,1 C8,0.448 8.448,0 9,0 L37,0 C37.552,0 38,0.448 38,1 L38,37 Z"}),r.a.createElement("path",{className:"text-pink-400 fill-current",d:"M45,46 C44.916,46 44.831,45.989 44.748,45.968 L21.748,39.968 L22,33 L46,21 L46,45 C46,45.31 45.856,45.602 45.611,45.792 C45.435,45.928 45.219,46 45,46 Z"}),r.a.createElement("path",{className:"text-pink-300 fill-current",d:"M45,46 L1,46 C0.447,46 0,45.552 0,45 L0,21 L45.479,44.122 C45.88,44.341 46.083,44.804 45.969,45.247 C45.856,45.69 45.457,46 45,46 Z"}),r.a.createElement("path",{className:"text-pink-400 fill-current",d:"M19 20.414L14.293 15.707C13.902 15.316 13.902 14.684 14.293 14.293L19 9.586 20.414 11 16.414 15 20.414 19 19 20.414zM27 20.414L25.586 19 29.586 15 25.586 11 27 9.586 31.707 14.293C32.098 14.684 32.098 15.316 31.707 15.707L27 20.414z"}))))),r.a.createElement("div",{"data-element":"column",className:"p-4 formkit-column sm:p-6"},r.a.createElement("ul",{className:"formkit-alert formkit-alert-error","data-element":"errors","data-group":"alert"}),r.a.createElement("div",{"data-element":"fields",className:"seva-fields formkit-fields"},r.a.createElement("div",{className:"formkit-field"},r.a.createElement("input",{className:"font-light text-black border rounded formkit-input","aria-label":"Your first name",name:"fields[first_name]",placeholder:"Your first name",type:"text",required:!0})),r.a.createElement("div",{className:"formkit-field"},r.a.createElement("input",{className:"font-light text-black border rounded formkit-input",name:"email_address","aria-label":"Your email address",placeholder:"Your email address",required:!0,type:"email"})),r.a.createElement("button",{"data-element":"submit",className:"font-bold text-white bg-pink-600 rounded formkit-submit hover:bg-pink-700"},r.a.createElement("div",{className:"formkit-spinner"}),r.a.createElement("span",null,"Subscribe"))),r.a.createElement("div",{"data-element":"guarantee",className:"text-sm formkit-guarantee"},r.a.createElement("p",null,"I won\u2019t send you spam ",r.a.createElement("b",null,"never"),"."),r.a.createElement("p",null,"Unsubscribe at ",r.a.createElement("em",null,"any")," time.")))))}),B=function(){var e=Object(n.useState)(" "),t=Object(p.a)(e,2),a=t[0],l=t[1],s=Object(f.a)(a,N),c=s.data,o=s.error;return Object(n.useEffect)((function(){" "!==a&&d("search",{query:a,total:(null===c||void 0===c?void 0:c.total)||0})}),[a]),r.a.createElement(S,null,r.a.createElement(I,{setQuery:l}),r.a.createElement(L,{error:o}),r.a.createElement(F,c),r.a.createElement(H,null))},D=function(e){var t=Object(c.b)({width:e.ratio*document.body.clientWidth});return r.a.createElement("div",{className:"fixed top-0 left-0 right-0 z-50 h-1"},r.a.createElement(c.a.div,{className:"h-full bg-pink-500",style:t}))},W=a(36),Y=a.n(W),J=a(27),G=a.n(J),P=function(e){try{var t,a=G()(e,{host_whitelist:[/^.*github\.com$/]}),n=2===e.split("/").length&&1===(null===(t=e.match(/\//gi))||void 0===t?void 0:t.length);return a||n}catch(r){return!1}},U=(a(53),function(e){return e.href?r.a.createElement("a",{className:"w-64 px-4 py-2 text-white bg-pink-600 rounded shadow-lg hover:bg-pink-700",href:e.href,id:"submit",onClick:e.onClick},e.children):r.a.createElement("div",{className:"gradient shadow-lg ".concat(e.disabled?"bg-gray-500 cursor-not-allowed":"bg-pink-600 cursor-pointer hover:bg-pink-700"," ").concat(e.loading?"bg-pink-700 cursor-wait loading":"")},r.a.createElement("input",{disabled:e.disabled||e.loading,id:"submit",type:"submit",form:e.form,value:e.children,className:"w-64 px-4 py-2 text-white ".concat(e.disabled?"cursor-not-allowed bg-gray-500":"cursor-pointer bg-pink-600 hover:bg-pink-700"," ").concat(e.loading?"cursor-wait":"")}))}),V=function(e){var t,a=Object(h.a)({},e.data,{},function(e){if("NONE"===e)return{requestIssueURL:e,requestIssueNumber:-1};var t=e.split("/issues/"),a=Object(p.a)(t,2),n=a[0],r=a[1];return{requestIssueFullName:n.split("/").slice(-2).join("/"),requestIssueNumber:Number(r)}}(e.requestIssue));return r.a.createElement("section",{className:"flex flex-col items-center w-full py-6"},r.a.createElement("h1",{className:"font-mono text-xl font-bold"},"Save the request"),r.a.createElement("h3",{className:"mb-4 text-lg"},"You're gonna be redirected to our Github to save this request. After that the project ",r.a.createElement("b",null,null===a||void 0===a?void 0:a.fullName)," will be marked as calling for maintainers."),r.a.createElement(U,{onClick:function(){return d("submit",{step:"preview"})},href:(t=a,t?Y()({body:JSON.stringify(t,null,4),labels:["search"],repo:"rfm",title:t.fullName,user:"sospedra"}):"")},"Submit request"),r.a.createElement("div",{className:"w-full text-left sm:w-auto"},r.a.createElement("p",{className:"pt-4 font-mono text-xs font-bold text-left text-gray-600"},"Inspect"),r.a.createElement("p",{className:"pb-2"},"This is the repo you're about to submit:"),r.a.createElement("pre",{className:"overflow-auto"},r.a.createElement("p",null,"{"),Object.keys(a||{}).map((function(e){return r.a.createElement("p",{className:"pl-4",key:e},r.a.createElement("span",{className:"text-pink-500"},e),r.a.createElement("span",{className:"whitespace-pre-wrap"},":",r.a.createElement("span",{className:"text-gray-800"}," ",function(e,t){var a=t&&t[e];return a instanceof Array?"[".concat(a.join(", "),"]"):a}(e,a)),","))})),r.a.createElement("p",null,"}"))))},Z=a(21),Q=function(){return r.a.createElement("svg",{className:"inline-block align-text-bottom fill-current",viewBox:"0 0 14 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"}))},$=(a(54),function(e){var t,a,s,c=Object(n.useState)(!1),o=Object(p.a)(c,2),i=o[0],m=o[1],u=function(e){try{if("NONE"===e)return!0;if(P(e)){var t=e.split("/").slice(-2),a=Object(p.a)(t,2),n=a[0],r=a[1];if("issues"===n&&!Number.isNaN(Number(r)))return!0}return!1}catch(l){return!1}}(e.requestIssue),h=Object(f.a)([null===(t=e.data)||void 0===t?void 0:t.fullName],j),b=h.data,E=h.error;return r.a.createElement("section",null,r.a.createElement("h1",{className:"font-mono text-xl font-bold"},"Enter the issue link"),r.a.createElement("h3",{className:"text-lg"},"To ensure the best communication we need to know in which Github issue the owners of ",r.a.createElement("b",null,null===(a=e.data)||void 0===a?void 0:a.fullName)," requested support to maintain the project"),r.a.createElement("form",{id:"js-submit-issue",className:"flex flex-col items-center w-full",onSubmit:function(t){t.preventDefault(),m(!0),d("submit",{step:"issue"}),e.onNext()}},r.a.createElement("div",{className:"w-full md:w-2/3"},r.a.createElement(L,{error:E}),r.a.createElement("input",{id:"githubRepo",value:e.requestIssue,onChange:function(t){return e.setRequestIssue(t.currentTarget.value)},placeholder:"github.com/".concat(null===(s=e.data)||void 0===s?void 0:s.fullName,"/:number"),className:"w-full px-4 py-2 my-4 border rounded shadow-lg",required:!0}),r.a.createElement("div",{className:"flex flex-col flex-1 w-full"},r.a.createElement("p",{className:"pt-4 font-mono text-xs font-bold text-left text-gray-600"},"Suggestions"),r.a.createElement("p",{className:"pb-2 text-left"},"Maybe it's one of these"),null===b||void 0===b?void 0:b.requestList.map((function(t){var a=t.id,n=t.url,l=t.title,s=t.user,c=t.createdAt,o=t.comments,i=t.number,m=t.body;return r.a.createElement("label",{key:a,className:"flex flex-row items-baseline p-4 border-t cursor-pointer"},r.a.createElement("input",{name:"issue",type:"radio",value:n,checked:e.requestIssue===n,onChange:function(t){return e.setRequestIssue(t.currentTarget.value)}}),r.a.createElement("div",{className:"flex-1 px-4 text-left"},r.a.createElement("p",{className:"font-bold"},r.a.createElement("span",{className:"text-sm"},"#",i)," ",l),r.a.createElement("div",{className:"w-full text-xs italic text-gray-600 markdown"},r.a.createElement(Z.a,null,null===m||void 0===m?void 0:m.slice(0,140)),"... ",r.a.createElement("a",{href:n,className:"text-blue-500 hover:text-blue-800",target:"_blank",rel:"noopener noreferrer"},"view more")),r.a.createElement("p",{className:"text-sm text-gray-800"},"Opened by ",r.a.createElement("b",null,s)," at"," ",r.a.createElement("span",null,null===c||void 0===c?void 0:c.toLocaleDateString())," ",r.a.createElement(Q,null)," ",o)))})),b?r.a.createElement("label",{className:"flex flex-row items-baseline p-4 border-t cursor-pointer"},r.a.createElement("input",{name:"issue",type:"radio",value:"NONE",checked:"NONE"===e.requestIssue,onChange:function(t){return e.setRequestIssue(t.currentTarget.value)}}),r.a.createElement("div",{className:"flex-1 px-4 text-left"},r.a.createElement("p",{className:"font-bold"},"No issue exists"),r.a.createElement("p",{className:"text-sm text-yellow-700"},r.a.createElement("span",null,"\u26a0\ufe0f"),"This action is discouraged"),r.a.createElement("p",{className:"text-sm text-gray-800"},"If no issue calling for maintainers exists yet we'll create one. However, we recommend asking the current repo's owner first."))):r.a.createElement(_.b,null))),Object(l.createPortal)(r.a.createElement("div",{className:"sticky bottom-0 left-0 right-0 flex justify-center w-full p-2 bg-white ".concat(i?"hidden":"")},r.a.createElement(U,{disabled:!u,form:"js-submit-issue"},"Select request issue")),document.getElementsByTagName("main")[0])))}),K=function(e){var t,a,l,s=Object(n.useState)(""),c=Object(p.a)(s,2),o=c[0],i=c[1],m=Object(n.useState)(!1),u=Object(p.a)(m,2),f=u[0],h=u[1];return Object(n.useEffect)((function(){var t;(null===(t=e.data)||void 0===t?void 0:t.fullName)?(d("submit",{step:"find"}),e.onNext()):h(!1)}),[e.data]),r.a.createElement("section",{className:"flex flex-col w-full"},r.a.createElement("h1",{className:"font-mono text-xl font-bold"},"Add a new repository that needs maintance"),r.a.createElement("form",{className:"flex flex-col items-center w-full",onSubmit:function(t){var a;t.preventDefault(),h(!0),e.setRepoUrl((a=o,G()(a)?a:"https://github.com/".concat(a)))}},r.a.createElement("div",{className:"relative w-full md:w-2/3"},r.a.createElement("input",{value:o,onChange:function(e){return i(e.currentTarget.value)},className:"w-full py-2 pl-24 pr-4 my-4 border rounded shadow-lg",required:!0}),r.a.createElement("span",{className:"absolute text-gray-500",style:{left:"0.5rem",top:"50%",transform:"translateY(-50%)"}},"github.com/")),r.a.createElement(L,{error:e.error}),e.data&&!(null===(t=e.data)||void 0===t?void 0:t.fullName)&&r.a.createElement("div",{className:"flex flex-col justify-center py-6 text-lg text-center"},r.a.createElement("p",null,"We couldn't find any repo named"," ",r.a.createElement("b",null,null===(a=e.data)||void 0===a?void 0:a.owner,"/",null===(l=e.data)||void 0===l?void 0:l.name)),r.a.createElement("p",null,"Try to copy and paste the link directly")),r.a.createElement(U,{disabled:!P(o),loading:f},"Find repo")))},X=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),o=Object(p.a)(s,2),i=o[0],m=o[1],u=Object(f.a)(a,k),d=u.data,h=u.error,b=Object(n.useState)(0),E=Object(p.a)(b,2),x=E[0],v=E[1],g=Object(n.useCallback)((function(){return v((function(e){return(e+1)%3}))}),[]),w=Object(c.c)(x,(function(e){return e}),{from:{display:"block",width:"100%",opacity:0,transform:"translate3d(100%, 0, 0)"},enter:{display:"block",width:"100%",opacity:1,transform:"translate3d(0%, 0, 0)"},leave:{display:"none",width:"100%",opacity:0,transform:"translate3d(-50%, 0, 0)"}});return r.a.createElement(S,null,r.a.createElement("div",{className:"flex flex-col items-center justify-center w-full text-center md:p-8"},r.a.createElement(D,{ratio:(x+1)/3}),r.a.createElement("div",{className:"flex flex-row w-full"},w.map((function(e){var t=e.item,a=e.props,n=e.key;return[r.a.createElement(c.a.div,{key:n,style:a},r.a.createElement(K,{onNext:g,setRepoUrl:l,error:h,data:d})),r.a.createElement(c.a.div,{key:n,style:a},r.a.createElement($,{onNext:g,data:d,requestIssue:i,setRequestIssue:m})),r.a.createElement(c.a.div,{key:n,style:a},r.a.createElement(V,{data:d,requestIssue:i}))][t]})))))},ee=function(e){return r.a.createElement(S,null,r.a.createElement("div",{className:"flex flex-col items-center p-8 text-center sm:text-lg"},r.a.createElement("h1",{className:"pb-4 font-mono text-2xl font-bold"},"Almost there!"),r.a.createElement("p",null,"Your privacy means a lot to us."),r.a.createElement("p",null,"That's why you will need to"," ",r.a.createElement("b",null,"check your inbox and confirm your subscription"),"."),r.a.createElement("p",null,"Thanks for subscribing."),r.a.createElement(i.b,{to:"/",className:"px-4 py-2 mt-10 text-white bg-pink-600 rounded shadow-lg hover:bg-pink-700"},"Take me back to the home")))},te=(a(55),function(e){return r.a.createElement(S,null,r.a.createElement("h1",{className:"font-mono text-xl font-bold text-center"},"About RFM"),r.a.createElement("h2",{className:"text-lg text-center"},"Track OSS requests for maintainers"),r.a.createElement("article",{className:"markdown-body"},r.a.createElement(Z.a,null,"\n### What's this?\n\nRFM is community-driven platform to **track OSS repositories that need a maintainer** or support.\n\n### Why?\n\nYou're interested in this project if you've been in any of these situations:\n\n- As a **user**, uou find and interesting library. But it seems unmaintained. How to know for sure?\n- As a **maintainer**, you can't find anyone who wants to take the lead. Where to find them?\n- As a **developer**, you want to contribute to the community but don't know where to start. Which projects need help?\n\n### How does it work?\n\nIt heavily relies on the Github public API (which is awesome).\n\n1. Every request is an Issue labeled as `search` in this repository.\n2. The body of the issue contains a JSON with the searchable data.\n3. It uses the Github Search API to find tickets.\n4. To avoid undesired format errors the web has a request genertor, as well.\n\nThese are the main steps. Aside of it, RFM also checks that nobody use the platform as a spam weapon, checks for duplicates, ensures the data integrity, etc.\n\n### Contribute\n\n1. \ud83e\udd17 [PRs](https://github.com/sospedra/rfm) are more than welcome\n2. \ud83d\udd75\ud83c\udffd\u200d\u2640\ufe0f [Add](https://rfm.sospedra.me/#/submit) any repo you find that's unmaintained\n3. \ud83c\udf0e Spread the word\n4. Thank you!\n")))}),ae=function(){var e=Object(o.f)(),t=Object(c.c)(e,(function(e){return e.pathname}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return Object(n.useEffect)((function(){d("pview",{route:e.pathname})}),[e]),r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.item,a=e.props,n=e.key;return r.a.createElement(c.a.div,{key:n,style:a},r.a.createElement(o.c,{location:t},r.a.createElement(o.a,{exact:!0,path:"/",component:B}),r.a.createElement(o.a,{path:"/submit",component:X}),r.a.createElement(o.a,{path:"/confirm",component:ee}),r.a.createElement(o.a,{path:"/about",component:te})))})))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{basename:"/"},r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4c817cfd.chunk.js.map