(this.webpackJsonpbitgallery=this.webpackJsonpbitgallery||[]).push([[0],{20:function(e,t,c){e.exports={browseSection:"Search_browseSection__3wXBc",searchBar:"Search_searchBar__2_Cgy",submitButton:"Search_submitButton__3M1rC",inputSearch:"Search_inputSearch__36pBA",browseImages:"Search_browseImages__1Jeby",addButton:"Search_addButton__5qjq_",searchAndSaveContainer:"Search_searchAndSaveContainer__1mKV_",userSelectionContainer:"Search_userSelectionContainer__1EumV",imageArrayContainer:"Search_imageArrayContainer__3s2tO",removeButtonContainer:"Search_removeButtonContainer__1IMuS",saveButtonContainer:"Search_saveButtonContainer__1jRUj"}},34:function(e,t,c){e.exports={homepageContainer:"Homepage_homepageContainer__287CR",Titlepage:"Homepage_Titlepage__2eXU_",clickHere:"Homepage_clickHere__JjCTh"}},51:function(e,t,c){e.exports={pageBackground:"App_pageBackground__2L03E"}},59:function(e,t,c){},60:function(e,t,c){},64:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(47),i=c.n(r),s=(c(59),c(9)),o=(c(60),c(19)),l=c.n(o),j=c(15),b=c(24),u=c(48),h=Object(u.a)({apiKey:"AIzaSyBDlE5j01C7l_FQa4gqlrye-TeTYLVEmKA",authDomain:"bit-gallery.firebaseapp.com",databaseURL:"https://bit-gallery-default-rtdb.firebaseio.com",projectId:"bit-gallery",storageBucket:"bit-gallery.appspot.com",messagingSenderId:"725472383146",appId:"1:725472383146:web:65a467083fa64e443e00d3"}),d=c(23),O=c(20),m=c.n(O),x=c(87),p=c(85),f=c(25),v=(c(64),c(5));var g=function(){return Object(v.jsx)("main",{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Bit Gallery"}),Object(v.jsx)("header",{children:Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(f.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(f.b,{to:"/gallery",children:"Gallery"})})]})})})]})})},_=Object(d.a)(h),S=Object(d.d)(_);var y=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),i=Object(s.a)(r,2),o=i[0],u=i[1],h=Object(a.useState)([]),O=Object(s.a)(h,2),f=O[0],_=O[1],y=Object(a.useState)("none"),C=Object(s.a)(y,2),B=C[0],w=C[1];function k(){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pixabay.com/api/?key=24209290-03bf893fb9927a610f46fb041&q=".concat(c,"&image_type=photo"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,u(a.hits),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){if(!c)return null;k()}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:Object(v.jsx)(g,{})}),Object(v.jsxs)("div",{className:m.a.browseSection,children:[Object(v.jsxs)("div",{className:m.a.searchAndSaveContainer,children:[Object(v.jsx)(x.a,{sx:{width:450,height:900,overflowX:"hidden"},cols:3,rowHeight:164,className:m.a.listContainer,children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)("div",{className:m.a.searchBar,children:Object(v.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),k(),n("")},children:[Object(v.jsx)("input",{className:m.a.inputSearch,type:"text",value:c,onChange:function(e){var t=e.target.value;n(t)}}),Object(v.jsx)("input",{className:m.a.submitButton,type:"submit",value:"submit"})]})}),Object(v.jsx)("div",{className:m.a.browseImages,children:o.map((function(e){return Object(v.jsxs)("div",{className:m.a.searchColumn,children:[" ",Object(v.jsx)("img",{src:e.webformatURL,alt:e.tags}),Object(v.jsx)("div",{className:m.a.addButton,children:Object(v.jsx)("button",{onClick:function(t){return function(e,t){e.preventDefault();var c=[].concat(Object(j.a)(f),[t]);_(c),w("")}(t,e)},children:"Add"})})]},e.id)}))})]})}),Object(v.jsx)(x.a,{sx:{width:"100vw",height:"100vh",overflowY:"inherit",marginRight:"40px",marginLeft:"20px"},variant:"woven",cols:3,gap:8,children:f.map((function(e){return Object(v.jsxs)(p.a,{sx:{height:"40vh",overflowY:"none"},children:[Object(v.jsx)("img",{src:"".concat(e.webformatURL),srcSet:"".concat(e.webformatURL),alt:e.tags,loading:"lazy"}),Object(v.jsx)("div",{className:m.a.removeButtonContainer,children:Object(v.jsx)("button",{onClick:function(t){return function(e,t){var c=f;c.splice(t,1),_(c)}(0,e)},children:"Remove"})})]},e.webformartURL)}))})]}),Object(v.jsx)("div",{className:m.a.saveButtonContainer,children:Object(v.jsx)("button",{style:{display:B},onClick:function(e){return function(e,t){var c=f;Object(d.e)(S,{key:c}),Object(d.c)(S,{key:c}),_([]),w("none")}()},children:"Save"})})]})]})},C=Object(d.a)(h),B=Object(d.d)(C);var w=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2);return t[0],t[1],Object(a.useEffect)((function(){Object(d.b)(B,(function(e){}))}),[]),Object(v.jsx)("div",{children:Object(v.jsx)("h2",{children:"Hello!"})})},k=c(8),N=c(34),A=c.n(N);var I=function(e){var t=e.clickButton,c=Object(a.useState)(t),n=Object(s.a)(c,2),r=n[0],i=n[1],o=Object(a.useState)("inline"),l=Object(s.a)(o,2),j=l[0],b=l[1];return Object(v.jsx)("div",{className:A.a.homepageContainer,children:Object(v.jsxs)("section",{className:A.a.Titlepage,style:{display:j},children:[Object(v.jsx)("h1",{className:A.a.welcomeTitle,children:"Welcome to Bit Gallery"}),Object(v.jsx)("p",{children:"You can use this website to create a small gallery "}),Object(v.jsx)(f.b,{to:"/search",className:A.a.clickHere,onClick:function(){i(!r),b("none")},children:"Click here to start"})]})})},L=c(51),H=c.n(L);var R=function(){var e=Object(a.useState)("inline"),t=Object(s.a)(e,2),c=(t[0],t[1],Object(a.useState)(!1)),n=Object(s.a)(c,2),r=n[0];return n[1],Object(v.jsxs)(f.a,{children:[Object(v.jsx)(k.c,{children:Object(v.jsx)(k.a,{exact:!0,path:"/",element:Object(v.jsx)(I,{clickButton:r})})}),Object(v.jsxs)("div",{className:H.a.pageBackground,children:[Object(v.jsx)(k.c,{children:Object(v.jsx)(k.a,{exact:!0,path:"/search",element:Object(v.jsx)(y,{})})}),Object(v.jsx)(k.c,{children:Object(v.jsx)(k.a,{exact:!0,path:"/gallery",element:Object(v.jsx)(w,{})})})]})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,88)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(R,{})}),document.getElementById("root")),T()}},[[73,1,2]]]);
//# sourceMappingURL=main.0a1ac784.chunk.js.map