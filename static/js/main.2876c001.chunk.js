(this.webpackJsonptirtomulyo=this.webpackJsonptirtomulyo||[]).push([[0],{136:function(e,a,t){},176:function(e,a,t){},201:function(e,a){},224:function(e,a,t){},225:function(e,a,t){},226:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(17),r=t.n(c),s=(t(136),t(122)),l=t(285),o=t(39),j=t(9),d=t(13),b=t(12),m=t(257),u=t(258),g=t(259),h=t(260),p=t(261),O=t(262),x=t(263),f=t(264),v=t(265),k=t(266),y=t(74),w=t(289),N=t(287),T=t(117),C=t.n(T),S=[{name:"Tentang kami",url:"/about"},{name:"Eduwisata",url:"/content"},{name:"Galleri",url:"/gallery"},{name:"Panduan Wisata",url:"/travel-guide"},{name:"Pemesanan",url:"/booking"}],P=t(73),B=t(1),W=Object(m.a)((function(e){return{grow:{flexGrow:1},logo:{color:"#fff",cursor:"pointer"},navLinks:{display:"flex"},drawer:Object(b.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),menuButton:Object(b.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),button:{color:"#ffff",textTransform:"none",padding:e.spacing(0,4,0,4)},buttonDrawer:{color:"#000",textTransform:"none",padding:e.spacing(0,4,0,4)},drawerPaper:{width:240},active:{color:P.a[900]},activeBackground:{color:"#fff",background:P.a[900]}}})),D=function(){var e=W(),a=Object(j.f)(),t=Object(j.e)(),i=Object(n.useState)(!1),c=Object(d.a)(i,2),r=c[0],s=c[1],l=Object(n.useState)(!1),o=Object(d.a)(l,2),b=o[0],m=o[1],T=function(){s(!r)},P=Object(B.jsx)(u.a,{children:S.map((function(n,i){return Object(B.jsx)(g.a,{button:!0,children:Object(B.jsx)(h.a,{className:"".concat(e.buttonDrawer," ").concat(t.pathname===n.url?e.active:null),onClick:function(){return a(n.url)},children:Object(B.jsx)(p.a,{children:n.name})})},i)}))}),D=Object(B.jsx)(n.Fragment,{children:S.map((function(n,i){return Object(B.jsx)(h.a,{className:"".concat(e.button," ").concat(t.pathname===n.url?b?e.activeBackground:e.active:null),color:"inherit",variant:b&&t.pathname===n.url?"contained":"text",onClick:function(){return a(n.url)},children:Object(B.jsx)(p.a,{children:n.name})},i)}))});return window.addEventListener("scroll",(function(){window.scrollY>=80?m(!0):m(!1)})),Object(B.jsxs)("div",{className:e.grow,children:[Object(B.jsxs)(O.a,{elevation:"0",position:"fixed",color:b?"primary":"transparent",children:[Object(B.jsx)(x.a,{}),Object(B.jsx)(f.a,{maxWidth:"false",children:Object(B.jsxs)(v.a,{disableGutters:!0,children:[Object(B.jsx)(k.a,{color:"fff","aria-label":"open drawer",edge:"start",onClick:T,className:e.menuButton,children:Object(B.jsx)(C.a,{})}),Object(B.jsx)(y.a,{variant:"h6",className:e.logo,onClick:function(){return a("/")},children:"Desa Tirtomulyo"}),Object(B.jsx)(w.a,{xsDown:!0,implementation:"css",children:D}),Object(B.jsx)("div",{className:e.grow})]})})]}),Object(B.jsx)(w.a,{smUp:!0,implementation:"css",children:Object(B.jsx)("nav",{className:e.drawer,children:Object(B.jsx)(N.a,{classes:{paper:e.drawerPaper},variant:"temporary",anchor:"left",open:r,onClose:T,ModalProps:{keepMounted:!0},children:P})})})]})},K=t(268),F=t(118),A=t.n(F),z=Object(m.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(3),right:e.spacing(2)}}})),L=function(){window.scrollTo(0,0)},I=function(){var e=z();return Object(B.jsx)(K.a,{className:e.fab,color:"primary","aria-label":"add",onClick:L,children:Object(B.jsx)(A.a,{})})},E=t(15),M=t(124),_=t(286),G=t(21),R=t(267),Y=t(288),H=t(269),J=t(270),U=["children","value","index"],X=Object(m.a)((function(e){return{root:{marginTop:e.spacing(5)},navLink:{display:"flex"},button:{textTransform:"none",color:"#fff",padding:e.spacing(0,4,0,4)},copyright:Object(b.a)({flexGrow:1,fontWeight:500,padding:e.spacing(2)},e.breakpoints.down("sm"),{textAlign:"center"})}}));function V(e){var a=e.children,t=e.value,n=e.index,i=Object(M.a)(e,U);return Object(B.jsx)("div",Object(E.a)(Object(E.a)({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i),{},{children:t===n&&Object(B.jsx)(_.a,{sx:{pt:3},children:a})}))}function Z(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var $=function(){var e=X(),a=Object(j.f)(),t=Object(n.useState)(0),i=Object(d.a)(t,2),c=i[0],r=i[1],s=Object(G.a)(),l=Object(R.a)(s.breakpoints.down("sm")),o=Object(B.jsx)(u.a,{className:e.navLink,children:S.map((function(t,n){return Object(B.jsx)(h.a,{className:e.button,size:"small",onClick:function(){return a(t.url)},children:t.name},n)}))});return Object(B.jsxs)("footer",{className:e.root,children:[Object(B.jsxs)(_.a,{children:[Object(B.jsx)(_.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(B.jsxs)(Y.a,{centered:!0,value:c,onChange:function(e,a){r(a)},variant:l?"scrollable":"standart",scrollButtons:!1,"aria-label":"maps-tab",children:[Object(B.jsx)(H.a,Object(E.a)(Object(E.a)({label:"Tirtomulyo Plantungan"},Z(0)),{},{children:" "})),Object(B.jsx)(H.a,Object(E.a)(Object(E.a)({label:"Kebun Eduwisata Wonokambang"},Z(1)),{},{children:" "})),Object(B.jsx)(H.a,Object(E.a)(Object(E.a)({label:"Omah Londo Plantungan"},Z(2)),{},{children:" "})),Object(B.jsx)(H.a,Object(E.a)(Object(E.a)({label:"Alas Bapang"},Z(2)),{},{children:" "})),Object(B.jsx)(H.a,Object(E.a)(Object(E.a)({label:"Curug Kedawung"},Z(2)),{},{children:" "}))]})}),Object(B.jsx)(V,{value:c,index:0,children:Object(B.jsx)("iframe",{title:"map one",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.982590856638!2d109.96319867703168!3d-7.097501367989764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706cbf8b4ce769%3A0x5027a76e356e530!2sTirtomulyo%2C%20Plantungan%2C%20Kabupaten%20Kendal%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1639281925410!5m2!1sid!2sid",width:"100%",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy"})}),Object(B.jsx)(V,{value:c,index:1,children:Object(B.jsx)("iframe",{title:"map two",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2463977499365!2d109.9657002147739!3d-7.097414194874476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d88de0ad043%3A0x357a6979160508!2sKebun%20Eduwisata%20Wonokambang!5e0!3m2!1sen!2sid!4v1639283017454!5m2!1sen!2sid",width:"100%",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy"})}),Object(B.jsx)(V,{value:c,index:2,children:Object(B.jsx)("iframe",{title:"map three",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.216631270142!2d109.96159481477396!3d-7.100872994872016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d38b39e7281%3A0x286e12615b717c34!2sOmah%20Londo%20Plantungan!5e0!3m2!1sen!2sid!4v1639283040669!5m2!1sen!2sid",width:"100%",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy"})}),Object(B.jsx)(V,{value:c,index:3,children:Object(B.jsx)("iframe",{title:"map four",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.313567957229!2d109.97608591477388!3d-7.089602994879983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d3942d7f2cf%3A0xf1aaaf4371d8ed56!2sAlas%20Bapang!5e0!3m2!1sen!2sid!4v1639283110701!5m2!1sen!2sid",width:"100%",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy"})}),Object(B.jsx)(V,{value:c,index:4,children:Object(B.jsx)("iframe",{title:"maps five",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3147986782687!2d109.97153421477397!3d-7.0894597948800815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d5d1ffd0387%3A0x6a6df2d515ff8baa!2sCurug%20Kedawung!5e0!3m2!1sen!2sid!4v1639283156785!5m2!1sen!2sid",width:"100%",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy"})})]}),Object(B.jsx)(_.a,{py:{lg:1},bgcolor:"primary.main",color:"primary.contrastText",children:Object(B.jsx)(f.a,{children:Object(B.jsxs)(J.a,{container:!0,alignItems:"center",children:[Object(B.jsx)("div",{className:e.copyright,children:"Created By Puputwe \xa9 2021"}),Object(B.jsx)(w.a,{mdDown:!0,implementation:"css",children:Object(B.jsx)("div",{children:o})})]})})})]})};var q=function(e){var a=e.children,t=Object(n.useState)(!0),i=Object(d.a)(t,2),c=i[0],r=i[1];return window.addEventListener("scroll",(function(){window.scrollY>=80?r(!0):r(!1)})),Object(B.jsxs)("div",{children:[Object(B.jsx)(D,{}),Object(B.jsx)("div",{children:a}),c?Object(B.jsx)(I,{}):null,Object(B.jsx)($,{})]})},Q=t(20),ee=t.n(Q),ae=t(30),te=t(230),ne=t(31),ie=t.n(ne),ce="./assets/images/",re="https://eduwisata.herokuapp.com/api/",se="https://wa.me/6282174398682",le=Object(m.a)((function(e){return{root:Object(b.a)({height:"30vh",width:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:" no-repeat",backgroundPositionY:-275},e.breakpoints.down("sm"),{height:"20vh",backgroundPositionY:-250}),contentCenter:Object(b.a)({position:"absolute",top:195,left:0,display:"block",width:"100%",height:"100%",color:"white",textAlign:"center"},e.breakpoints.down("sm"),{top:105}),title:{fontSize:45,fontWeight:600}}}));var oe=function(e){var a=le();return Object(B.jsx)(n.Fragment,{children:Object(B.jsx)(_.a,{className:a.root,sx:{backgroundImage:void 0!==e.img?"url(".concat(e.img,")"):"url(".concat(ce,"banner.jpg)")},children:Object(B.jsx)(_.a,{className:a.contentCenter,children:Object(B.jsx)(f.a,{children:Object(B.jsx)(y.a,{className:a.title,variant:"h3",children:e.title})})})})})},je=t(271),de=t(272),be=t(275),me=t(274),ue=t(273),ge=Object(m.a)({root:{maxWidth:375,margin:"auto"}});var he=function(e){var a=ge(),t=Object(j.f)();return Object(B.jsxs)(je.a,{className:a.root,children:[Object(B.jsxs)(de.a,{children:[Object(B.jsx)(ue.a,{component:"img",alt:"Contemplative Reptile",height:"215",image:e.data.header_image,title:e.data.title}),Object(B.jsx)(me.a,{children:Object(B.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.data.title})})]}),Object(B.jsx)(be.a,{children:Object(B.jsx)(h.a,{size:"small",color:"primary",onClick:function(){return t("/content/".concat(e.data.slug))},children:"Baca Selengkapnya"})})]})},pe=Object(te.a)((function(e){return{root:{marginTop:e.spacing(7)}}}));var Oe=function(){var e=pe(),a=Object(n.useState)([]),t=Object(d.a)(a,2),i=t[0],c=t[1],r=function(){var e=Object(ae.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.get(re+"content").then((function(e){c(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(B.jsxs)("div",{children:[Object(B.jsx)(oe,{title:"Eduwisata"}),Object(B.jsx)(f.a,{className:e.root,children:Object(B.jsx)(J.a,{container:!0,spacing:5,children:i.map((function(e,a){return Object(B.jsx)(J.a,{item:!0,lg:4,sm:6,xs:12,children:Object(B.jsx)(he,{data:e})},a)}))})})]})},xe=Object(m.a)((function(e){return{root:{marginTop:e.spacing(7)},image:Object(b.a)({width:"100%",height:"auto"},e.breakpoints.down("md"),{marginBottom:e.spacing(3)}),video:Object(b.a)({},e.breakpoints.down("md"),{marginBottom:e.spacing(3)}),titleContent:{fontWeight:900},subTitle:{marginTop:e.spacing(2)},gridContent:Object(b.a)({},e.breakpoints.down("md"),{flexDirection:"column-reverse",alignItems:"inherit"})}}));var fe=function(){var e=xe();return Object(B.jsxs)(n.Fragment,{children:[Object(B.jsx)(_.a,{children:Object(B.jsx)(f.a,{className:e.root,children:Object(B.jsxs)(J.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(B.jsx)(J.a,{item:!0,lg:4,xs:12,children:Object(B.jsx)("iframe",{className:e.video,width:"100%",height:"257",src:"https://www.youtube.com/embed/N-E4-PRzJyg",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(B.jsx)(J.a,{container:!0,lg:7,xs:12,children:Object(B.jsxs)(J.a,{item:!0,children:[Object(B.jsx)(y.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Desa Tirtomulyo"}),Object(B.jsx)(y.a,{className:e.subTitle,variant:"subtitle1",children:"Desa Tirtomulyo merupakan desa yang terletak di Kecamatan Plantungan, Kabupaten Kendal, Jawa Tengah. Desa ini berbatasan langsung dengan Kabupaten Batang di sebelah barat. Luas wilayah Desa Tirtomulyo yaitu 382,3 hektar yang terdiri dari 6 dusun yaitu Wonokambang, Saron, Wonotirto, Gondangan, Wonokerso, dan Sikemplong dengan sarana dan prasarana di Desa Tirtomulyo cukup lengkap yaitu tersedia mulai dari pendidikan, kesehatan, olahraga, kesenian, keagamaan, balai desa, pasar, perkebunan serta kandang eduwisata peternakan"})]})})]})})}),Object(B.jsx)(_.a,{bgcolor:P.a[50],py:7,className:e.root,children:Object(B.jsx)(f.a,{children:Object(B.jsxs)(J.a,{className:e.gridContent,container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(B.jsx)(J.a,{container:!0,lg:7,xs:12,children:Object(B.jsxs)(J.a,{item:!0,children:[Object(B.jsx)(y.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Kelebihan Desa Tirtomulyo"}),Object(B.jsxs)(y.a,{className:e.subTitle,variant:"subtitle1",children:[Object(B.jsx)("li",{children:"Dekat dengan kaki Gunung Prau sehingga udara di Desa Tirtomulyo dingin dan segar"}),Object(B.jsx)("li",{children:"Berbagai macam tumbuhan dapat tumbuh subur di Desa Tirtomulyo"}),Object(B.jsx)("li",{children:"Terdapat banyak perkebunan hortikultura"}),Object(B.jsx)("li",{children:"Terdapat banyak potensi wisata"}),Object(B.jsx)("li",{children:"Warga masyarakatnya ramah dan loyal"})]})]})}),Object(B.jsx)(J.a,{item:!0,lg:4,xs:12,children:Object(B.jsx)("iframe",{className:e.video,width:"100%",height:"257",src:"https://www.youtube.com/embed/uB9RdXJVH1Y",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})})})]})};var ve=function(){return Object(B.jsxs)(n.Fragment,{children:[Object(B.jsx)(oe,{title:"Tentang Kami"}),Object(B.jsx)(fe,{})]})},ke=t(47),ye=t.n(ke),we=(t(82),t(83),Object(te.a)((function(e){return{root:{marginTop:100},ornament3:{position:"absolute",width:"30%",top:"3%",right:"-10%",animationName:"$aniorna3",animationDuration:"4s",animationIterationCount:"infinite",overflowX:"hidden",overflowY:"hidden"},"@keyframes aniorna3":{"100%":{transform:"rotate(360deg)"}},title:{fontSize:50,fontWeight:600},image:Object(b.a)({width:"100%",padding:e.spacing(0,5,0,5)},e.breakpoints.down("sm"),{padding:e.spacing(0,1,0,1)})}})));var Ne=function(e){var a=we();return Object(B.jsx)(n.Fragment,{children:Object(B.jsxs)("div",{className:"".concat(a.root," konten row"),children:[Object(B.jsx)("img",{className:a.ornament3,src:"".concat(ce,"ornament3.png"),alt:"".concat(ce,"ornament3.png")}),Object(B.jsx)("h1",{className:"col-12 mt-3 mb-3 nama-konten",children:e.title}),Object(B.jsxs)("div",{className:"galeri col-12 mb-5",children:[Object(B.jsx)("h4",{"data-aos":"fade-up",style:{fontSize:"27px",marginTop:0},children:"Galeri"}),Object(B.jsx)("div",{"data-aos":"fade-up",children:Object(B.jsxs)(ye.a,Object(E.a)(Object(E.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}),{},{children:[Object(B.jsx)("div",{children:Object(B.jsx)("img",{src:e.gallery.image1,alt:e.gallery.image1,className:a.image})}),Object(B.jsx)("div",{children:Object(B.jsx)("img",{src:e.gallery.image2,alt:e.gallery.image2,className:a.image})}),Object(B.jsx)("div",{children:Object(B.jsx)("img",{src:e.gallery.image3,alt:e.gallery.image3,className:a.image})})]}))})]})]})})},Te=(t(176),t(119)),Ce=t.n(Te),Se=t(120);var Pe=function(e){var a=Object(n.useState)([]),t=Object(d.a)(a,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){if(e.funFact){var a=Object(Se.parse)(e.funFact)[0],t=[];for(var n in a.children){for(var i=a.children[n],r=0;r<5;r++)i.children&&(i=i.children[0]);t.push(i.content)}c(t)}}),[e]),Object(B.jsxs)(n.Fragment,{children:[Object(B.jsxs)("div",{className:"fakta",children:[Object(B.jsx)("h1",{"data-aos":"fade-down",children:"Fakta!"}),Object(B.jsx)("div",{"data-aos":"fade-down",children:Object(B.jsx)(ye.a,Object(E.a)(Object(E.a)({},{className:"center",centerMode:!0,slidesToShow:3,speed:500}),{},{children:i.map((function(e,a){return Object(B.jsx)("div",{children:Object(B.jsx)("div",{className:"card",style:{display:"inline-block"},children:Object(B.jsx)("h4",{children:e})},a)})}))}))})]}),Object(B.jsx)("div",{className:"tempatisi","data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000",children:Object(B.jsxs)("div",{className:"isi",children:[Object(B.jsx)("img",{className:"ornament1",src:"".concat(ce,"/ornament1.png"),alt:""}),Object(B.jsx)("img",{className:"ornament2",src:"".concat(ce,"/ornament2.png"),alt:""}),Object(B.jsx)("div",{children:Ce()(e.content)})]})})]})},Be=Object(m.a)((function(e){return{root:{marginTop:e.spacing(5)},title:{fontWeight:600,paddingBottom:e.spacing(3)},image:{width:"100%"},description:{marginTop:15}}}));var We=function(){Be();var e=Object(j.g)().slug,a=Object(n.useState)({}),t=Object(d.a)(a,2),i=t[0],c=t[1],r=function(){var a=Object(ae.a)(ee.a.mark((function a(){return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ie.a.get(re+"content/"+e).then((function(e){c(e.data)}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();Object(n.useEffect)((function(){r()}),[]);var s={image1:i.gallery_image_1,image2:i.gallery_image_2,image3:i.gallery_image_3};return Object(B.jsxs)("div",{style:{backgroundColor:"#F8f0C6"},children:[Object(B.jsx)(oe,{img:i.header_image}),Object(B.jsx)("img",{style:{marginTop:"-100px"},className:"header-image",src:"".concat(ce,"HeaderKonten.png"),alt:""}),Object(B.jsx)(Ne,{gallery:s,title:i.title}),Object(B.jsx)(Pe,{content:i.content,funFact:i.fun_fact})]})},De=t(123),Ke=t(276),Fe=t(277),Ae=t(278),ze=t(121),Le=t.n(ze),Ie=Object(m.a)((function(e){return{root:{marginTop:e.spacing(7)},groupGallery:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},imageList:{transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"},titleContent:{fontWeight:900,marginBottom:e.spacing(3)}}}));var Ee=function(){var e=Ie(),a=Object(G.a)(),t=Object(R.a)(a.breakpoints.down("sm")),i=t?1:2,c=Object(n.useState)([]),r=Object(d.a)(c,2),s=r[0],l=r[1],o=function(){var e=Object(ae.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.get(re+"gallery").then((function(e){e.data.map((function(e,a){var t,n,i=(a+1+5)%5;1===i||2===i?(t=1.5,n=1.5):3===i?(t=1,n=3):(t=1,n=1.5),l((function(a){return[].concat(Object(De.a)(a),[{img:e.image,title:e.file_name,cols:t,colsMobile:n}])}))}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(B.jsxs)(n.Fragment,{children:[Object(B.jsx)(oe,{title:"Gallery"}),Object(B.jsx)(_.a,{className:e.root,children:Object(B.jsx)(f.a,{children:Object(B.jsx)("div",{className:e.groupGallery,children:Object(B.jsx)(Ke.a,{rowHeight:200,gap:1,className:e.imageList,cols:3,children:s.map((function(a,n){return Object(B.jsxs)(Fe.a,{cols:t?a.colsMobile:a.cols,rows:i,children:[Object(B.jsx)("img",{src:a.img,alt:a.title}),Object(B.jsx)(Ae.a,{title:a.title,position:"top",actionIcon:Object(B.jsx)(k.a,{"aria-label":"star ".concat(a.title),className:e.icon,children:Object(B.jsx)(Le.a,{})}),actionPosition:"left",className:e.titleBar})]},n)}))})})})})]})},Me=Object(m.a)((function(e){var a;return{root:{backgroundImage:"url(".concat(ce,"banner.jpg)"),height:"100vh",width:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},contentCenter:{position:"absolute",top:150,left:0,display:"block",width:"100%",height:"100%",color:"white",textAlign:"center"},logo:(a={},Object(b.a)(a,e.breakpoints.down("sm"),{width:"50%"}),Object(b.a)(a,e.breakpoints.up("sm"),{width:"30%"}),Object(b.a)(a,e.breakpoints.up("md"),{width:"15%"}),Object(b.a)(a,"height","auto"),a),title:{paddingTop:"1%",fontSize:45,fontWeight:600}}}));var _e=function(){var e=Me();return Object(B.jsx)(n.Fragment,{children:Object(B.jsx)(_.a,{className:e.root,children:Object(B.jsx)(f.a,{children:Object(B.jsxs)(_.a,{className:e.contentCenter,children:[Object(B.jsx)("img",{className:e.logo,src:"".concat(ce,"kendal.png"),alt:"logo-kendal"}),Object(B.jsxs)(y.a,{className:e.title,variant:"h3",children:["Selamat Datang Ke Desa Tirtomulyo ",Object(B.jsx)("br",{}),"Desa Wisata Penuh Keindahan"]})]})})})})},Ge=t(290),Re=Object(te.a)((function(e){return{titleContent:{fontWeight:900,marginBottom:e.spacing(3)},cardTitle:{fontWeight:600,marginBottom:e.spacing(3)},boxAvatar:{margin:e.spacing(5,0,3,0)},avatar:{height:e.spacing(9),width:e.spacing(9),marginRight:e.spacing(3)},avatarTitle:{fontWeight:600}}})),Ye=function(e){var a=Re();return Object(B.jsx)(je.a,{children:Object(B.jsxs)(me.a,{children:[Object(B.jsx)(y.a,{variant:"h4",className:a.cardTitle,children:"Testimoni"}),Object(B.jsx)(y.a,{color:"textSecondary",children:"Desa tirtomulyo mempunya potensi wisata yang bagus, udaranya disana sejuk dan masyarakatnya juga ramah. Saya sering berkunjung ke lapas pemandian air panas untuk sekedar melepas lelah. saya juga sering membeli sagon kacang dan kopi hitam khas tirtomulyo."}),Object(B.jsxs)(_.a,{className:a.boxAvatar,sx:{display:"flex",alignItems:"center"},children:[Object(B.jsx)(Ge.a,{className:a.avatar,alt:"name user",src:"".concat(ce,"images.png")}),Object(B.jsxs)(_.a,{children:[Object(B.jsx)(y.a,{className:a.avatarTitle,children:"Arifin Nadhif"}),Object(B.jsx)(y.a,{className:a.avatarSubTitle,children:"Karyawan Swasta"})]})]})]})})};var He=function(){var e=Re();return Object(B.jsx)(_.a,{py:3,children:Object(B.jsxs)(f.a,{children:[Object(B.jsx)(y.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Komentar Pengunjung"}),Object(B.jsx)(J.a,{container:!0,spacing:5,children:Object(B.jsx)(J.a,{item:!0,lg:6,children:Object(B.jsx)(Ye,{})})})]})})},Je=Object(m.a)((function(e){return{root:{marginTop:e.spacing(3)},image:{width:"100%",height:"auto",borderRadius:10},titleContent:{fontWeight:900},subTitle:{marginTop:e.spacing(2)},gridContent:{marginTop:e.spacing(3)},gridContentMobile:Object(b.a)({},e.breakpoints.down("md"),{marginTop:e.spacing(3)}),gridParent:Object(b.a)({},e.breakpoints.down("md"),{flexDirection:"column-reverse"})}}));var Ue=function(e){var a=Je();return Object(B.jsxs)("div",{className:a.root,children:[Object(B.jsx)(_.a,{bgcolor:P.a[50],py:7,children:Object(B.jsx)(f.a,{children:Object(B.jsxs)(J.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(B.jsx)(J.a,{item:!0,lg:5,xs:12,children:Object(B.jsx)("img",{className:a.image,src:"".concat(ce,"content2.jpg"),alt:""})}),Object(B.jsx)(J.a,{container:!0,lg:6,xs:12,children:Object(B.jsxs)(J.a,{item:!0,className:a.gridContentMobile,children:[Object(B.jsx)(y.a,{className:a.titleContent,variant:"h4",color:"primary",children:"Curug Kedawung"}),Object(B.jsx)(y.a,{className:a.subTitle,variant:"subtitle1",children:"Wilayah Kecamatan Plantungan Kabupaten Kendal mempunyai  sejumlah potensi wisata yang melimpah, salah satu potensi wisata tersebut adalaha seperti Wisata Jelajah  Sungai dan Curug. Salah satu wisata alam yang dapat dimanfaatkan sebagai jelajah sungai adalah curug kedawung. Curug kedawung merupakan sebuah curug/air terjun yang terdapat di desa Tirtomulyo, Kendal Curug kedawung tentunya dapat dijadikan potensi wisata bagi orang orang yang memiliki hobi jelajah alam, khususnya jelajah sungai. Curug kedawung juga memberikan view yang indah sehingga dapat memanjakan mata bagi wisatawan yang berkunjung ke curug kedawung"})]})})]})})}),Object(B.jsx)(_.a,{py:7,children:Object(B.jsx)(f.a,{children:Object(B.jsxs)(J.a,{className:a.gridParent,container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(B.jsx)(J.a,{className:a.gridContentMobile,container:!0,lg:6,xs:12,children:Object(B.jsxs)(J.a,{item:!0,children:[Object(B.jsx)(y.a,{className:a.titleContent,variant:"h4",color:"primary",children:"Kebun Eduwisata"}),Object(B.jsx)(y.a,{className:a.subTitle,variant:"subtitle1",children:"Kebun Eduwisata  merupakan salah satu wisata edukasi mengenai tanamanan perkebunan, hias, dan pertanian. Kebun eduwisata tirtomulyo yang dikembangkan oleh PokDarWis \u201cGemilang\u201d ini juga juga menyajikan edukasi di bidang peternakan, khususnya edukasi mengenai pengembangan produksi telur ayam arab. Kebun ini terdapat di dusun Wonokambang, Desa Tirtomulyo, Plantungan, Kendal. Melalui kebun eduwisata ini diharapkan orang-orang tidak hanya hadir untuk dapat menikmati view ataupun spot perkebunan melainkan juga belajar mengenai pertanian dan peternakan."})]})}),Object(B.jsx)(J.a,{item:!0,lg:5,xs:12,children:Object(B.jsx)("img",{className:a.image,src:"".concat(ce,"content1.jpeg"),alt:""})})]})})})]})},Xe=(t(224),Object(m.a)((function(e){return{media:{height:210},titleContent:{fontWeight:900,marginBottom:e.spacing(3)}}})));var Ve=function(){var e=Xe(),a=Object(j.f)(),t=Object(n.useState)([]),i=Object(d.a)(t,2),c=i[0],r=i[1],s=function(){var e=Object(ae.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.get(re+"gallery").then((function(e){r(e.data.slice(0,5))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(B.jsx)(_.a,{bgcolor:P.a[50],py:3,children:Object(B.jsxs)(f.a,{children:[Object(B.jsx)(y.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Gallery"}),Object(B.jsx)(ye.a,Object(E.a)(Object(E.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:2,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:c.map((function(a,t){return Object(B.jsx)("div",{children:Object(B.jsx)(je.a,{style:{margin:"10px"},className:e.root,children:Object(B.jsxs)(de.a,{children:[Object(B.jsx)(ue.a,{className:e.media,image:a.image,title:a.file_name}),Object(B.jsx)(me.a,{children:Object(B.jsx)(y.a,{gutterBottom:!0,variant:"h6",component:"h2",align:"center",children:a.file_name})})]})},t)})}))})),Object(B.jsx)(J.a,{container:!0,justifyContent:"center",style:{paddingTop:30},children:Object(B.jsx)(h.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return a("/gallery")},children:"Lihat Lebih Banyak"})})]})})},Ze=Object(te.a)((function(e){return{root:{textAlign:"center"},title:{fontSize:30,fontWeight:900},subTitle:{fontSize:25,fontWeight:600},button:{marginTop:20}}}));var $e=function(){var e=Ze();return Object(B.jsx)(_.a,{bgcolor:P.a[50],py:3,children:Object(B.jsx)(f.a,{children:Object(B.jsxs)(_.a,{className:e.root,children:[Object(B.jsx)(y.a,{className:e.title,children:"Sudah Siap Untuk Berpetualang ?"}),Object(B.jsx)(y.a,{className:e.subTitle,children:"Segera Hubungi Kami !"}),Object(B.jsx)(h.a,{className:e.button,variant:"contained",color:"primary",size:"large",href:se,children:"Klik Disini"})]})})})},qe=t(279),Qe=Object(m.a)((function(e){return{card:{minWidth:275},title:{fontSize:17},price:{fontWeight:600},subPrice:{fontSize:17}}}));var ea=function(e){var a=Qe();return Object(B.jsxs)(je.a,{className:a.card,variant:"outlined",children:[Object(B.jsxs)(me.a,{children:[Object(B.jsxs)(_.a,{sx:{mb:3},children:[Object(B.jsx)(y.a,{className:a.title,color:"textSecondary",gutterBottom:!0,align:"center",children:e.data.title}),Object(B.jsxs)(y.a,{className:a.price,variant:"h4",component:"h2",align:"center",children:[e.data.price,Object(B.jsx)("span",{className:a.subPrice,children:"/orang"})]})]}),Object(B.jsx)(qe.a,{variant:"middle"}),Object(B.jsxs)(_.a,{sx:{mt:3},children:[Object(B.jsx)("div",{dangerouslySetInnerHTML:{__html:e.data.content}}),";"]})]}),Object(B.jsx)(be.a,{children:Object(B.jsx)(h.a,{fullWidth:!0,variant:"contained",color:"primary",size:"large",href:se,children:"Pesan"})})]})},aa=Object(m.a)((function(e){return{root:{margin:e.spacing(5,0,10,0),flexGrow:1},titleContent:{fontWeight:900,textAlign:"center",marginBottom:e.spacing(3)}}}));var ta=function(){var e=aa(),a=Object(n.useState)([]),t=Object(d.a)(a,2),i=t[0],c=t[1],r=function(){var e=Object(ae.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.get(re+"tourpackage").then((function(e){c(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()})),Object(B.jsx)(f.a,{children:Object(B.jsxs)("div",{className:e.root,children:[Object(B.jsx)(y.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Paket Harga"}),Object(B.jsx)(J.a,{container:!0,spacing:3,children:i.map((function(e,a){return Object(B.jsx)(J.a,{item:!0,xs:12,sm:4,children:Object(B.jsx)(ea,{data:e})},a)}))})]})})},na=Object(m.a)((function(e){return{titleContent:{fontWeight:900,textAlign:"center",marginBottom:e.spacing(5)},titleList:{fontWeight:600}}}));var ia=function(){var e=na();return Object(B.jsx)(_.a,{bgcolor:P.a[50],py:7,children:Object(B.jsxs)(f.a,{className:e.root,children:[Object(B.jsx)(y.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Mengapa Harus Ke Desa Tirtomulyo?"}),Object(B.jsxs)(J.a,{container:!0,spacing:7,children:[Object(B.jsxs)(J.a,{item:!0,lg:4,sm:6,xs:12,children:[Object(B.jsx)(y.a,{className:e.titleList,align:"center",variant:"h5",children:"Fasilitas"}),Object(B.jsx)(y.a,{align:"center",children:"Dapat menikmati udara segar pedesaan Mendapatkan bermacam rekomendasi tempat wisata"})]}),Object(B.jsxs)(J.a,{item:!0,lg:4,sm:6,xs:12,children:[Object(B.jsx)(y.a,{className:e.titleList,align:"center",variant:"h5",children:"Layanan"}),Object(B.jsx)(y.a,{align:"center",children:"Akan disambut oleh keramahan masyarakat Tirtomulyo"})]}),Object(B.jsxs)(J.a,{item:!0,lg:4,sm:6,xs:12,children:[Object(B.jsx)(y.a,{className:e.titleList,align:"center",variant:"h5",children:"Eduwisata"}),Object(B.jsx)(y.a,{align:"center",children:"Dapat menemukan berbagai jenis perkebunan holtikultura"})]})]})]})})};var ca=function(){return Object(B.jsxs)(n.Fragment,{children:[Object(B.jsx)(x.a,{}),Object(B.jsx)(_e,{}),Object(B.jsx)(ia,{}),Object(B.jsx)(ta,{}),Object(B.jsx)(Ue,{}),Object(B.jsx)(Ve,{}),Object(B.jsx)(He,{}),Object(B.jsx)($e,{})]})},ra=Object(m.a)((function(e){return{root:{marginTop:e.spacing(7)},image:Object(b.a)({width:"100%",height:"auto"},e.breakpoints.down("md"),{marginBottom:e.spacing(3)}),video:Object(b.a)({},e.breakpoints.down("md"),{marginBottom:e.spacing(3)}),titleContent:{fontWeight:900},subTitle:{marginTop:e.spacing(2)},gridContent:Object(b.a)({},e.breakpoints.down("md"),{flexDirection:"column-reverse",alignItems:"inherit"})}}));var sa=function(){var e=ra();return Object(B.jsxs)(n.Fragment,{children:[Object(B.jsx)(_.a,{children:Object(B.jsx)(f.a,{className:e.root,children:Object(B.jsxs)(J.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(B.jsx)(J.a,{item:!0,lg:4,xs:12,children:Object(B.jsx)("img",{className:e.image,src:"".concat(ce,"content1.jpg"),alt:""})}),Object(B.jsx)(J.a,{container:!0,lg:7,xs:12,children:Object(B.jsxs)(J.a,{item:!0,children:[Object(B.jsx)(y.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Sekilas Tentang Tirtomulyo"}),Object(B.jsx)(y.a,{className:e.subTitle,variant:"subtitle1",children:"Desa Tirtomulyo berada di ujung barat Kabupaten Kendal yang berbatasan langsung dengan Kabupaten Batang. Untuk menuju Desa Tirtomulyo memerlukan waktu tempuh sekitar 1,5 jam dari pusat kota Kendal dan sekitar 2,5 jam dari Kota Semarang. Memiliki beragam potensi wisata, mulai dari eduwisata pertanian dan peternakan, pemandian air panas, kolam renang, kesenian jaran goyang, dan sebagainya."})]})})]})})}),Object(B.jsx)(_.a,{bgcolor:P.a[50],py:7,className:e.root,children:Object(B.jsx)(f.a,{children:Object(B.jsxs)(J.a,{className:e.gridContent,container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(B.jsx)(J.a,{container:!0,lg:7,xs:12,children:Object(B.jsxs)(J.a,{item:!0,children:[Object(B.jsx)(y.a,{className:e.titleContent,variant:"h4",color:"primary",children:"Alasan Berkunjung"}),Object(B.jsx)(y.a,{className:e.subTitle,variant:"subtitle1",children:"Desa Tirtomulyo menjadi destinasi wisata yang cocok apabila anda mencari kenyamanan dalam belajar langsung mengenai peternakan dan pertanian. Didukung atmosfer udara yang segar, kandang ayam arab, serta fasilitas bartander yang memuat informasi tentang suatu tanaman menjadikan pengunjung mendapatkan informasi yang akurat sekaligus menikmati suasana segar pedesaan."})]})}),Object(B.jsx)(J.a,{item:!0,lg:4,xs:12,children:Object(B.jsx)("img",{className:e.image,src:"".concat(ce,"content1.jpg"),alt:""})})]})})})]})},la=Object(te.a)((function(e){return{root:{marginTop:e.spacing(7)}}}));var oa=function(){return la(),Object(B.jsxs)(n.Fragment,{children:[Object(B.jsx)(oe,{title:"Panduan Wisata"}),"\\",Object(B.jsx)(sa,{})]})},ja=t(291),da=t(280),ba=t(281),ma=t(282),ua=t(283),ga=t(284),ha=Object(m.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},card:{padding:0},title:{flex:"1 1 100%"}}}));var pa=function(){var e=ha();return Object(B.jsx)(je.a,{className:e.card,children:Object(B.jsxs)(me.a,{children:[Object(B.jsxs)(v.a,{className:e.root,children:[Object(B.jsx)(y.a,{className:e.title,variant:"h6",id:"tableTitle",component:"div",children:"Arifin Nadhif"}),Object(B.jsx)(ja.a,{label:"booked",color:"primary",variant:"outlined"})]}),Object(B.jsx)(da.a,{children:Object(B.jsx)(ba.a,{children:Object(B.jsxs)(ma.a,{children:[Object(B.jsxs)(ua.a,{children:[Object(B.jsx)(ga.a,{component:"th",scope:"row",children:" Alamat Pemesan "}),Object(B.jsx)(ga.a,{align:"right",children:" Semarang "})]}),Object(B.jsxs)(ua.a,{children:[Object(B.jsx)(ga.a,{component:"th",scope:"row",children:" Total Pemesan/Paket "}),Object(B.jsx)(ga.a,{align:"right",children:" 10 / Paket A "})]}),Object(B.jsxs)(ua.a,{children:[Object(B.jsx)(ga.a,{component:"th",scope:"row",children:" Tanggal Pemesanan "}),Object(B.jsx)(ga.a,{align:"right",children:" 10 Desember 2021 "})]}),Object(B.jsxs)(ua.a,{children:[Object(B.jsx)(ga.a,{component:"th",scope:"row",children:" Tanggal Pembelian "}),Object(B.jsx)(ga.a,{align:"right",children:" 20 Desember 2021 "})]})]})})})]})})},Oa=Object(m.a)((function(e){return{root:{marginTop:e.spacing(4)},gridItem:{paddingTop:e.spacing(3)}}}));var xa=function(){var e=Oa();return Object(B.jsxs)("div",{children:[Object(B.jsx)(oe,{title:"Pemesanan"}),Object(B.jsx)(f.a,{className:e.root,children:Object(B.jsx)(J.a,{container:!0,spacing:5,children:Object(B.jsx)(J.a,{className:e.gridItem,item:!0,lg:6,sm:6,xs:12,children:Object(B.jsx)(pa,{})})})})]})},fa=Object(s.a)({palette:{primary:{main:"#388e3c"},secondary:{main:"#11cb5f"}}});function va(){return Object(B.jsx)(l.a,{theme:fa,children:Object(B.jsx)(o.a,{children:Object(B.jsx)(q,{children:Object(B.jsxs)(j.c,{children:[Object(B.jsx)(j.a,{path:"/",element:Object(B.jsx)(ca,{})}),Object(B.jsx)(j.a,{path:"/gallery",element:Object(B.jsx)(Ee,{})}),Object(B.jsx)(j.a,{path:"/content",element:Object(B.jsx)(Oe,{})}),Object(B.jsx)(j.a,{path:"/content/:slug",element:Object(B.jsx)(We,{})}),Object(B.jsx)(j.a,{path:"/about",element:Object(B.jsx)(ve,{})}),Object(B.jsx)(j.a,{path:"/travel-guide",element:Object(B.jsx)(oa,{})}),Object(B.jsx)(j.a,{path:"/booking",element:Object(B.jsx)(xa,{})})]})})})})}t(225);var ka=function(){return Object(B.jsx)(va,{})},ya=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,293)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(ka,{})}),document.getElementById("root")),ya()}},[[226,1,2]]]);
//# sourceMappingURL=main.2876c001.chunk.js.map