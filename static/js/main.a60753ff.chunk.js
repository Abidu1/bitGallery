(this.webpackJsonpbitgallery=this.webpackJsonpbitgallery||[]).push([[0],{20:function(e,t,c){e.exports={browseSection:"Search_browseSection__3wXBc",searchBar:"Search_searchBar__2_Cgy",submitButton:"Search_submitButton__3M1rC",inputSearch:"Search_inputSearch__36pBA",browseImages:"Search_browseImages__1Jeby",addButton:"Search_addButton__5qjq_",searchAndSaveContainer:"Search_searchAndSaveContainer__1mKV_",userSelectionContainer:"Search_userSelectionContainer__1EumV",imageArrayContainer:"Search_imageArrayContainer__3s2tO",removeButtonContainer:"Search_removeButtonContainer__1IMuS",saveButtonContainer:"Search_saveButtonContainer__1jRUj"}},33:function(e,t,c){e.exports={welcomeTitle:"App_welcomeTitle__1LXRA",Titlepage:"App_Titlepage__2pXUh",clickHere:"App_clickHere__3zZfe",pageBackground:"App_pageBackground__2L03E"}},54:function(e,t,c){e.exports={AddGallerybutton:"AddGallery_AddGallerybutton__2erzF"}},62:function(e,t,c){},63:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(47),s=c.n(r),i=(c(62),c(9)),l=(c(63),c(19)),o=c.n(l),j=c(15),b=c(23),u=c(51),d=Object(u.a)({apiKey:"AIzaSyBDlE5j01C7l_FQa4gqlrye-TeTYLVEmKA",authDomain:"bit-gallery.firebaseapp.com",databaseURL:"https://bit-gallery-default-rtdb.firebaseio.com",projectId:"bit-gallery",storageBucket:"bit-gallery.appspot.com",messagingSenderId:"725472383146",appId:"1:725472383146:web:65a467083fa64e443e00d3"}),h=c(25),O=c(5),p=Object(h.a)(d),m=Object(h.c)(p);var x=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2);return t[0],t[1],Object(a.useEffect)((function(){var e=m;console.log(e)}),[]),Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Hello!"})})},f=c(20),v=c.n(f),g=c(90),_=c(88),y=Object(h.a)(d),S=Object(h.c)(y);var w=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),l=s[0],u=s[1],d=Object(a.useState)([]),p=Object(i.a)(d,2),m=p[0],x=p[1],f=Object(a.useState)("none"),y=Object(i.a)(f,2),w=y[0],C=y[1];function B(){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pixabay.com/api/?key=24209290-03bf893fb9927a610f46fb041&q=".concat(c,"&image_type=photo"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,u(a.hits),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){if(!c)return null;B()}),[]),Object(O.jsxs)("div",{className:v.a.browseSection,children:[Object(O.jsxs)("div",{className:v.a.searchAndSaveContainer,children:[Object(O.jsx)(g.a,{sx:{width:450,height:900,overflowX:"hidden"},cols:3,rowHeight:164,className:v.a.listContainer,children:Object(O.jsxs)(_.a,{children:[Object(O.jsx)("div",{className:v.a.searchBar,children:Object(O.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),B(),n("")},children:[Object(O.jsx)("input",{className:v.a.inputSearch,type:"text",value:c,onChange:function(e){var t=e.target.value;n(t)}}),Object(O.jsx)("input",{className:v.a.submitButton,type:"submit",value:"submit"})]})}),Object(O.jsx)("div",{className:v.a.browseImages,children:l.map((function(e){return Object(O.jsxs)("div",{className:v.a.searchColumn,children:[" ",Object(O.jsx)("img",{src:e.webformatURL,alt:e.tags}),Object(O.jsx)("div",{className:v.a.addButton,children:Object(O.jsx)("button",{onClick:function(t){return function(e,t){e.preventDefault();var c=[].concat(Object(j.a)(m),[t]);x(c),C("")}(t,e)},children:"Add"})})]},e.id)}))})]})}),Object(O.jsx)(g.a,{sx:{width:"100vw",height:"100vh",overflowY:"inherit",marginRight:"40px",marginLeft:"20px"},variant:"woven",cols:3,gap:8,children:m.map((function(e){return Object(O.jsxs)(_.a,{sx:{height:"40vh",overflowY:"none"},children:[Object(O.jsx)("img",{src:"".concat(e.webformatURL),srcSet:"".concat(e.webformatURL),alt:e.tags,loading:"lazy"}),Object(O.jsx)("div",{className:v.a.removeButtonContainer,children:Object(O.jsx)("button",{onClick:function(t){return function(e,t){var c=Object(j.a)(m);c.splice(t,1),x(c)}(0,e)},children:"Remove"})})]},e.webformartURL)}))})]}),Object(O.jsx)("div",{className:v.a.saveButtonContainer,children:Object(O.jsx)("button",{style:{display:w},onClick:function(e){return function(e,t){var c=m;Object(h.d)(S,{key:c}),Object(h.b)(S,{key:c}),x([])}()},children:"Save"})}),Object(O.jsx)("div",{})]})},C=c(54),B=c.n(C);var k=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],o=s[1];return Object(O.jsxs)(O.Fragment,{children:[c?Object(O.jsx)(w,{}):null,Object(O.jsx)("button",{className:B.a.AddGallerybutton,onClick:function(){n(!c),o("none")},style:{display:l},children:" New Gallery"})]})},A=c(38),N=c(8),L=c(33),I=c.n(L);var T=function(){var e=Object(a.useState)("inline"),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),l=s[0],o=s[1];return Object(O.jsx)(A.a,{children:Object(O.jsxs)("div",{className:I.a.pageBackground,children:[Object(O.jsx)("div",{children:Object(O.jsxs)("section",{className:I.a.Titlepage,style:{display:c},children:[Object(O.jsx)("h1",{className:I.a.welcomeTitle,children:"Welcome to Bit Gallery!"}),Object(O.jsx)("p",{children:"You can use this website to create a small gallery! "}),Object(O.jsx)("button",{className:I.a.clickHere,onClick:function(){o(!l),n("none")},children:"Click here to start"})]})}),Object(O.jsx)("div",{}),Object(O.jsx)("main",{children:l?Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Bit Gallery"}),Object(O.jsx)("header",{children:Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:!0,children:"Home"})}),Object(O.jsxs)("li",{children:[Object(O.jsx)(A.b,{to:"/gallery",children:"Gallery"}),Object(O.jsx)(N.c,{children:Object(O.jsx)(N.a,{path:"/gallery",element:Object(O.jsx)(x,{})})})]})]})})}),Object(O.jsx)("section",{children:Object(O.jsx)(k,{})})]}):null})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),R()}},[[75,1,2]]]);
//# sourceMappingURL=main.a60753ff.chunk.js.map