(this.webpackJsonpbitgallery=this.webpackJsonpbitgallery||[]).push([[0],{20:function(e,t,a){e.exports={browseSection:"Search_browseSection__3wXBc",searchBar:"Search_searchBar__2_Cgy",submitButton:"Search_submitButton__3M1rC",inputSearch:"Search_inputSearch__36pBA",browseImages:"Search_browseImages__1Jeby",addButton:"Search_addButton__5qjq_",searchAndSaveContainer:"Search_searchAndSaveContainer__1mKV_",userSelectionContainer:"Search_userSelectionContainer__1EumV",imageArrayContainer:"Search_imageArrayContainer__3s2tO",removeButtonContainer:"Search_removeButtonContainer__1IMuS",saveButtonContainer:"Search_saveButtonContainer__1jRUj"}},34:function(e,t,a){e.exports={homepageContainer:"Homepage_homepageContainer__287CR",Titlepage:"Homepage_Titlepage__2eXU_",clickHere:"Homepage_clickHere__JjCTh"}},51:function(e,t,a){e.exports={pageBackground:"App_pageBackground__2L03E"}},59:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(47),i=a.n(r),s=(a(59),a(9)),o=(a(60),a(19)),l=a.n(o),j=a(15),b=a(24),u=a(48),h=Object(u.a)({apiKey:"AIzaSyBDlE5j01C7l_FQa4gqlrye-TeTYLVEmKA",authDomain:"bit-gallery.firebaseapp.com",databaseURL:"https://bit-gallery-default-rtdb.firebaseio.com",projectId:"bit-gallery",storageBucket:"bit-gallery.appspot.com",messagingSenderId:"725472383146",appId:"1:725472383146:web:65a467083fa64e443e00d3"}),d=a(23),O=a(20),m=a.n(O),p=a(87),x=a(85),f=a(25),g=(a(64),a(5));var v=function(){return Object(g.jsx)("main",{children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Bit Gallery"}),Object(g.jsx)("header",{children:Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(f.b,{to:"/bitGallery/",children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)(f.b,{to:"/bitGallery/gallery",children:"Gallery"})})]})})})]})})},_=Object(d.a)(h),y=Object(d.d)(_);var S=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(s.a)(r,2),o=i[0],u=i[1],h=Object(c.useState)([]),O=Object(s.a)(h,2),f=O[0],_=O[1],S=Object(c.useState)("none"),C=Object(s.a)(S,2),w=C[0],B=C[1];function k(){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pixabay.com/api/?key=24209290-03bf893fb9927a610f46fb041&q=".concat(a,"&image_type=photo"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,u(c.hits),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){if(!a)return null;k()}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(v,{})}),Object(g.jsxs)("div",{className:m.a.browseSection,children:[Object(g.jsxs)("div",{className:m.a.searchAndSaveContainer,children:[Object(g.jsx)(p.a,{sx:{width:450,height:900,overflowX:"hidden"},cols:3,rowHeight:164,className:m.a.listContainer,children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)("div",{className:m.a.searchBar,children:Object(g.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),k(),n("")},children:[Object(g.jsx)("input",{className:m.a.inputSearch,type:"text",value:a,onChange:function(e){var t=e.target.value;n(t)}}),Object(g.jsx)("input",{className:m.a.submitButton,type:"submit",value:"submit"})]})}),Object(g.jsx)("div",{className:m.a.browseImages,children:o.map((function(e){return Object(g.jsxs)("div",{className:m.a.searchColumn,children:[" ",Object(g.jsx)("img",{src:e.webformatURL,alt:e.tags}),Object(g.jsx)("div",{className:m.a.addButton,children:Object(g.jsx)("button",{onClick:function(t){return function(e,t){e.preventDefault();var a=[].concat(Object(j.a)(f),[t]);_(a),B("")}(t,e)},children:"Add"})})]},e.id)}))})]})}),Object(g.jsx)(p.a,{sx:{width:"100vw",height:"100vh",overflowY:"inherit",marginRight:"40px",marginLeft:"20px"},variant:"woven",cols:3,gap:8,children:f.map((function(e){return Object(g.jsxs)(x.a,{sx:{height:"40vh",overflowY:"none"},children:[Object(g.jsx)("img",{src:"".concat(e.webformatURL),srcSet:"".concat(e.webformatURL),alt:e.tags,loading:"lazy"}),Object(g.jsx)("div",{className:m.a.removeButtonContainer,children:Object(g.jsx)("button",{onClick:function(t){return function(e,t){var a=f;a.splice(t,1),_(a)}(0,e)},children:"Remove"})})]},e.webformartURL)}))})]}),Object(g.jsx)("div",{className:m.a.saveButtonContainer,children:Object(g.jsx)("button",{style:{display:w},onClick:function(e){return function(e,t){var a=f;Object(d.e)(y,{key:a}),Object(d.c)(y,{key:a}),_([]),B("none")}()},children:"Save"})})]})]})},C=Object(d.a)(h),w=Object(d.d)(C);var B=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2);return t[0],t[1],Object(c.useEffect)((function(){Object(d.b)(w,(function(e){}))}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(v,{}),Object(g.jsx)("h2",{children:"Hello!"})]})},k=a(8),N=a(34),A=a.n(N);var I=function(){return Object(g.jsx)("div",{className:A.a.homepageContainer,children:Object(g.jsxs)("section",{className:A.a.Titlepage,children:[Object(g.jsx)("h1",{className:A.a.welcomeTitle,children:"Welcome to Bit Gallery"}),Object(g.jsx)("p",{children:"You can use this website to create a small gallery "}),Object(g.jsx)(f.b,{to:"/search",className:A.a.clickHere,children:"Click here to start"})]})})},L=a(51),H=a.n(L);var R=function(){var e=Object(c.useState)("inline"),t=Object(s.a)(e,2),a=(t[0],t[1],Object(c.useState)(!1)),n=Object(s.a)(a,2);return n[0],n[1],Object(g.jsx)(f.a,{children:Object(g.jsx)("div",{className:H.a.pageBackground,children:Object(g.jsxs)(k.c,{children:[Object(g.jsx)(k.a,{path:"/bitGallery/",element:Object(g.jsx)(I,{})}),Object(g.jsx)(k.a,{path:"/bitGallery/search",element:Object(g.jsx)(S,{})}),Object(g.jsx)(k.a,{path:"/bitGallery/gallery",element:Object(g.jsx)(B,{})})]})})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),T()}},[[73,1,2]]]);
//# sourceMappingURL=main.214546a3.chunk.js.map