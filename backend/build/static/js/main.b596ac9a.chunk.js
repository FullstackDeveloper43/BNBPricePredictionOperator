(this["webpackJsonpclimb-presale-fe"]=this["webpackJsonpclimb-presale-fe"]||[]).push([[0],{168:function(e,t){e.exports={API_BASE_URL:"https://bnb-price-prediction-operator.herokuapp.com"}},281:function(e,t,n){},299:function(e,t,n){},300:function(e,t){},307:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(26),r=n.n(c),i=n(63),s=n(44),l=n(354),d=n(28),b=(n(218),n(308)),u=n(96),j=n(174),p=n(68),g=n(175),h={1:"https://mainnet.infura.io/v3/4aaf5b5c3d5540f3a3b13459cf748ec8",4:"https://rinkeby.infura.io/v3/4aaf5b5c3d5540f3a3b13459cf748ec8"},f=(new u.b({rpc:{1:{1:h[1],4:h[4]},bridge:"https://bridge.walletconnect.org"},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}),new g.BscConnector({supportedChainIds:[56,97]})),O=new p.a({supportedChainIds:[56,97]}),m=(new j.a({apiKey:"pk_test_D58C7F46E173BEDB",chainId:4,pollingInterval:15e3}),n(21)),x=n(353),v=n(352),y=n(176),w=n(92),k=n(181),C=n.n(k),I=n(355),N=n(191),D=Object(I.a)(Object(N.a)({palette:{primary:{light:"#292C41",main:"#141720",dark:"#161A29",contrastText:"#fff",darkLight:"#292C41"},secondary:{light:"#555e6c",main:"#A20F3C",dark:"#1e2532",contrastText:"#6B76A1"},error:{light:"#E32C30",main:"#A20F3C",dark:"#860029",contrastText:"#fff"},background:{default:"#151C29",main:"#232637",sideDrawer:"#0f1118",selectedMenu:"#292C4130",overlay:"#00000099"},text:{primary:"#fff",secondary:"#6B76A1",notification:"#8D9BD4",inactiveSubMenu:"#92959e",hoverText:"rgb(65, 243, 211)"}},custom:{palette:{green:"#4caf50",blueGrey:"#5c739c",lightGrey:"#D8D8D8",darkRed:"#ba1a48",grey:"#99A5D3",lightBlue:"#1f2334",gold:"#D8A42D",darkYellow:"#FFA000"},layout:{topAppBarHeight:47,footerHeight:77}}})),A=n(6),L=n(346),S=n(347),T=n(8),B=n(62),R=n(344),F=n(310),E=n(13),W=n(22),z=n(343),H=n(309),M=n(1),_=o.a.forwardRef((function(e,t){var n=e.className,a=e.href,o=e.hrefAs,c=e.children,r=e.prefetch;return Object(M.jsx)(i.b,{className:n,to:a,as:o,prefetch:r,ref:t,children:c})})),P=["className","icon","href","loading","disabled","color"],G=Object(b.a)((function(e){return{root:{position:"relative",boxShadow:"none",width:e.spacing(5.2),height:e.spacing(5.2),minHeight:e.spacing(4.5)},loadingSpin:{position:"absolute"}}})),Y=function(e){var t=e.className,n=e.icon,a=e.href,o=e.loading,c=e.disabled,r=e.color,i=Object(W.a)(e,P),s=G();return Object(M.jsxs)(z.a,Object(E.a)(Object(E.a)({component:a?_:"button",href:a,className:Object(T.a)(s.root,t),disabled:o||c,color:r},i),{},{children:[n,o&&Object(M.jsx)(H.a,{className:s.loadingSpin,color:"primary"===r?"secondary":"primary",size:16})]}))},V=["sources","width","height","className"],U=Object(b.a)((function(){return{picture:{display:"flex"}}})),q=function(e){var t=e.sources,n=e.width,a=e.height,o=e.className,c=Object(W.a)(e,V),r=U();return Object(M.jsxs)("picture",Object(E.a)(Object(E.a)({},c),{},{className:Object(T.a)(r.picture,o),children:[t.map((function(e){return Object(M.jsx)("source",{srcSet:e.srcSet,type:e.type},e.srcSet)})),Object(M.jsx)("img",{width:n,height:a,src:"/assets/images/placeholder.gif",alt:"MARS"})]}))},J=[{srcSet:"/assets/logo/climb.png 600w, /assets/logo/climb.png 960w, /assets/logo/climb.png 1280w",type:"image/png"},{srcSet:"/assets/logo/climb.png 600w, /assets/logo/climb.png 960w, /assets/logo/climb.png",type:"image/png"}],K=function(e){return Object(M.jsx)(q,Object(E.a)(Object(E.a)({},e),{},{width:44,height:44,sources:J}))},X={title:"home",url:"/"},$=Object(b.a)((function(e){var t;return{root:(t={},Object(A.a)(t,e.breakpoints.down("sm"),{paddingLeft:e.spacing(1)}),Object(A.a)(t,"display","flex"),Object(A.a)(t,"alignItems","center"),Object(A.a)(t,"&:hover",{cursor:"pointer"}),t),height:{height:"100%"}}})),Z=Object(m.f)((function(e){e.history,e.titleVariant;var t=e.className,n=$(),o=Object(B.a)(),c=Object(F.a)(o.breakpoints.up("md"),{defaultMatches:!0}),r=Object(a.useState)(!1),i=Object(d.a)(r,2),s=(i[0],i[1]);return Object(M.jsxs)("div",{className:Object(T.a)(n.root,t),children:[Object(M.jsx)(Y,{style:{display:"flex",backgroundColor:"#292C40",marginRight:8},onClick:function(){s(!0)},icon:Object(M.jsx)(K,{height:45,width:45})}),Object(M.jsx)(R.a,{color:"textPrimary",style:{fontFamily:"LULO",color:o.palette.text.hoverText},variant:"body1",children:c&&"BNB/CAKE Price Prediction Operator"})]})})),Q=Object(b.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},margin:{margin:"".concat(e.spacing(0)," !important")},height:{paddingLeft:e.spacing(1.5)}}})),ee=function(e){var t=e.setOpen,n=Q();return Object(M.jsx)("div",{className:n.root,children:Object(M.jsx)(Z,{setOpen:t,titleVariant:"h6",className:n.margin})})},te=n(66),ne=n(192),ae=n(95),oe=n(182),ce=n.n(oe),re=n(64),ie=["className"],se=Object(b.a)((function(e){return{root:{borderRadius:20}}})),le=o.a.forwardRef((function(e,t){var n=e.className,a=Object(W.a)(e,ie),o=se();return Object(M.jsx)(re.a,Object(E.a)({className:Object(T.a)(o.root,n),ref:t},a))})),de=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},be=Object(b.a)((function(e){var t;return{root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"},avatarContainer:(t={},Object(A.a)(t,e.breakpoints.down("sm"),{margin:e.spacing(0,1.5,0,1.5)}),Object(A.a)(t,"display","flex"),Object(A.a)(t,"justifyContent","center"),Object(A.a)(t,"alignItems","center"),t),avatarList:{display:"flex",justifyContent:"center",alignItems:"center",height:"64px"},avatar:{cursor:"pointer",marginRight:e.spacing(1)},backgroundColor:{backgroundColor:"".concat(e.palette.error.hoverText," !important")},borderColor:{borderTop:"0.5px solid  ".concat(e.palette.text.hoverText," !important")}}})),ue=function(e){var t=e.isMobileMenu,n=Object(a.useContext)(ae.a),o=n.account,c=n.setIsWalletDialog,r=be({}),i=Object(B.a)();return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("div",{className:r.root,children:Object(M.jsx)("div",{className:Object(T.a)(r.avatarList,null),children:Object(M.jsx)(te.a,{colors:["#FF2929","#FF7A29","#FAD02E","#91FA49","#36D8B7","#3B8AFF","#991EF9","#FF5DCD"],children:de(o)?Object(M.jsx)(M.Fragment,{children:!t&&Object(M.jsx)(le,{style:{backgroundColor:i.palette.error.light},onClick:function(){de(o)?c(!0):c(!1)},children:"Connect Wallet"})}):Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(le,{variant:"outlined",onClick:function(){return c(!0)},children:[Object(M.jsx)(ne.a,{size:"28",className:r.avatar,round:!0,src:ce()(o),name:"Bonecoin"}),Object(M.jsx)(R.a,{variant:"body1",children:(null===o||void 0===o?void 0:o.slice(0,4))+"..."+(null===o||void 0===o?void 0:o.slice((null===o||void 0===o?void 0:o.length)-4,null===o||void 0===o?void 0:o.length))})]})})})})})})},je=Object(b.a)((function(e){return{height:{height:"100%"},LogoContainer:{display:"flex",flexDirection:"row",alignItems:"center"}}})),pe=function(){var e=je(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),o=n[0],c=n[1];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ee,{open:o,setOpen:c}),Object(M.jsx)("div",{className:e.LogoContainer,children:Object(M.jsx)(ue,{})})]})},ge=(n(345),Object(b.a)((function(e){var t;return{responsiveWidth:(t={},Object(A.a)(t,e.breakpoints.up("sm"),{width:"auto"}),Object(A.a)(t,"width","100%"),t),flex:{display:"flex"},rowDirection:{flexDirection:"row"},columnDirection:{flexDirection:"column"},centerAlign:{alignItems:"center"},textCenter:{textAlign:"center"},textRight:{textAlign:"right"}}}))),he=(new Set(["xl","lg","md","sm","xs"]),Object(b.a)((function(e){var t;return{appBar:function(t){var n;return n={},Object(A.a)(n,e.breakpoints.down("md"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(A.a)(n,e.breakpoints.down("sm"),{backgroundColor:e.palette.background.main,paddingRight:0,paddingLeft:0}),Object(A.a)(n,e.breakpoints.down(340),{padding:0}),Object(A.a)(n,"boxShadow","none"),Object(A.a)(n,"display","flex"),Object(A.a)(n,"flexDirection","row"),Object(A.a)(n,"flexWrap","wrap"),Object(A.a)(n,"justifyContent","space-between"),Object(A.a)(n,"zIndex",e.zIndex.drawer+3),Object(A.a)(n,"padding",e.spacing(0,5,0,5)),Object(A.a)(n,"backgroundColor",e.palette.background.main),Object(A.a)(n,"minHeight",e.spacing(4.5)),Object(A.a)(n,"maxWidth",e.custom.layout.topBarMaxWidth),Object(A.a)(n,"marginLeft","auto"),Object(A.a)(n,"marginRight","auto"),Object(A.a)(n,"borderBottom","none"),n},flex:(t={},Object(A.a)(t,e.breakpoints.up("sm"),{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}),Object(A.a)(t,e.breakpoints.down("sm"),{display:"contents"}),Object(A.a)(t,"backgroundColor","transparent"),Object(A.a)(t,"width","100%"),Object(A.a)(t,"paddingLeft",e.spacing(1)),Object(A.a)(t,"paddingRight",e.spacing(1)),Object(A.a)(t,"display","flex"),Object(A.a)(t,"flexDirection","column-reverse"),t),horizontalFlex:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},menuIcon:Object(A.a)({},e.breakpoints.up("sm"),{position:"fixed",left:e.spacing(3),top:e.spacing(.5)}),height:{height:"100%"}}}))),fe=function(e){var t=e.layout,n=he({layout:t}),a=ge();return Object(M.jsx)(L.a,{position:"sticky",className:n.appBar,children:Object(M.jsx)(S.a,{className:n.flex,children:Object(M.jsx)("div",{className:Object(T.a)(n.horizontalFlex,a.responsiveWidth,n.height),children:Object(M.jsx)(pe,{})})})})},Oe=(n(342),Object(b.a)((function(e){return{root:{color:e.palette.text.hoverText}}})),Object(b.a)((function(e){return{root:{color:e.palette.text.hoverText}}})),Object(b.a)((function(e){return{root:{color:e.palette.text.hoverText}}})),Object(b.a)((function(e){return{root:{color:e.palette.text.hoverText}}})),Object(b.a)((function(e){return{root:{color:e.palette.text.hoverText}}})),Object(b.a)((function(e){var t;return{root:(t={},Object(A.a)(t,e.breakpoints.down("md"),{flexDirection:"column"}),Object(A.a)(t,e.breakpoints.down("xs"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(A.a)(t,e.breakpoints.down(360),{flexDirection:"column"}),Object(A.a)(t,"minHeight",e.custom.layout.footerHeight),Object(A.a)(t,"maxWidth",e.custom.layout.topBarMaxWidth),Object(A.a)(t,"display","flex"),Object(A.a)(t,"flexFlow","row wrap"),Object(A.a)(t,"justifyContent","space-between"),Object(A.a)(t,"padding",e.spacing(5,8,3,8)),Object(A.a)(t,"backgroundColor",e.palette.background.default),Object(A.a)(t,"zIndex",e.zIndex.drawer+1),Object(A.a)(t,"marginLeft","auto"),Object(A.a)(t,"marginRight","auto"),t),logo:{justifyContent:"center"},logowith:{display:"flex",alignItems:"center",margin:"auto"},color:{color:e.palette.text.darkLight,marginLeft:e.spacing(1),marginRight:e.spacing(1.5)}}})),n(208),n(209),Object(b.a)((function(e){var t;return{root:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto"},main:(t={},Object(A.a)(t,e.breakpoints.down("md"),{padding:e.spacing(0,0,0,0)}),Object(A.a)(t,"flexGrow",1),Object(A.a)(t,"minHeight","calc(100vh - ".concat(e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight,"px)")),Object(A.a)(t,"width","100%"),Object(A.a)(t,"padding",e.spacing(0,5,0,5)),t)}}))),me=function(e){var t=e.children,n=e.layout,a=(e.account,Oe({}));return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:a.root,children:[Object(M.jsx)(fe,{layout:n}),Object(M.jsx)("main",{className:a.main,children:t})]})})},xe=Object(a.memo)(me),ve=n(4),ye=n.n(ve),we=n(185),ke=n(186),Ce=n(351),Ie=n(348),Ne=n(189),De=n.n(Ne),Ae={LOADING_LAYER:1e3,DIALOG_OVERLAY:2e3,DIALOG_MAIN:2500},Le=n(188),Se=n.n(Le),Te=Object(b.a)((function(e){var t;return{overlay:{position:"fixed",left:0,top:0,width:"100vw",height:"100vh",backgroundColor:e.palette.background.overlay,zIndex:Ae.DIALOG_OVERLAY},rect:function(t){var n;return n={},Object(A.a)(n,e.breakpoints.down("sm"),{padding:"".concat(e.spacing(3.5),"px ").concat(e.spacing(1.5),"px")}),Object(A.a)(n,"position","fixed"),Object(A.a)(n,"transform","translate(-50%, -50%)"),Object(A.a)(n,"left","50%"),Object(A.a)(n,"top","50%"),Object(A.a)(n,"width","calc(100% - ".concat(e.spacing(4),"px)")),Object(A.a)(n,"padding","".concat(e.spacing(3.5),"px ").concat(e.spacing(3),"px")),Object(A.a)(n,"background",e.palette.primary.darkLight),Object(A.a)(n,"boxShadow",e.shadows[10]),Object(A.a)(n,"borderRadius",e.spacing(1.5)),Object(A.a)(n,e.breakpoints.up("sm"),{width:t.width?t.width:660}),Object(A.a)(n,"zIndex",Ae.DIALOG_MAIN),n},smallRect:Object(A.a)({},e.breakpoints.up("sm"),{width:"500"}),closeIcon:(t={},Object(A.a)(t,e.breakpoints.down("sm"),{right:e.spacing(0)}),Object(A.a)(t,"cursor","pointer"),Object(A.a)(t,"position","absolute"),Object(A.a)(t,"top",e.spacing(2)),Object(A.a)(t,"right",e.spacing(2)),t)}})),Be=Object(b.a)((function(e){return{root:{display:"flex",flexDirection:"column"},center:{alignItems:"center",textAlign:"center"}}})),Re=function(e){var t=e.open,n=e.onClose,o=e.smallWidth,c=e.width,r=e.isCheckIcon,i=e.children,s=Te({width:c});return Object(a.useEffect)((function(){document.body.style.overflow=t?"hidden":"unset"}),[t]),t?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:Object(T.a)(s.overlay,"animated fadeIn"),onClick:n}),Object(M.jsxs)("div",{className:Object(T.a)(s.rect,o&&s.smallRect),children:[i,Object(M.jsx)(Y,{className:s.closeIcon,onClick:n,style:{display:"flex",backgroundColor:r?"#4caf50":"#292C41"},icon:r?Object(M.jsx)(Se.a,{style:{color:"#fff"},fontSize:"default"}):Object(M.jsx)(De.a,{style:{color:"#fff"},fontSize:"default"})})]})]}):null},Fe=n(12),Ee=n(349),We=n(350),ze=["color"];function He(e){var t=e.color,n=Object(W.a)(e,ze);return Object(M.jsx)("svg",Object(E.a)(Object(E.a)({width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:t},n),{},{children:Object(M.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(M.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(M.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),Object(M.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(M.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))}var Me=Object(Fe.a)((function(e){return{root:{},card:{backgroundColor:e.palette.background.main,display:"flex",width:"100%",flexDirection:"column",justifyContent:"space-between",cursor:"pointer","&:hover":{transform:"translateY(-5px)",transition:"ease-out 0.4s ",opacity:"100%"},transition:"ease-out 0.4s",borderRadius:"15px"},cardContent:{display:"flex",flexDirection:"row",alignItems:"center",height:"50%",paddingBottom:"16px !important"},iconContainer:{width:"23%"},titleContainer:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",paddingBottom:0,width:"77%"},subtitle:{color:e.palette.subForeColor4},cardAction:{display:"flex",height:"50%",justifyContent:"center"},cardActionButton:{width:130,height:50,borderRadius:25,border:"none",backgroundColor:e.palette.buttonColor6,textTransform:"capitalize"},cardDisibleButton:{width:130,height:50,borderRadius:25,border:"none",backgroundColor:e.palette.text.primary,textTransform:"capitalize"},noDecorationLink:{textDecoration:"none"},selected:{border:"0.5px solid ".concat(e.palette.text.hoverText)}}}),{withTheme:!0})((function(e){var t=e.classes,n=Object(B.a)(),a=Object(F.a)(n.breakpoints.down("sm"),{defaultMatches:!0});return Object(M.jsx)(Ie.a,{onClick:function(){return e.onClick()},item:!0,xs:12,sm:6,md:6,lg:6,children:Object(M.jsx)(Ee.a,{className:Object(T.a)(t.card,e.connected&&t.selected),children:Object(M.jsxs)(We.a,{className:t.cardContent,children:[Object(M.jsx)("div",{className:t.iconContainer,children:Object(M.jsx)("img",{style:{width:a?"28px":"40px",height:a?"28px":"40px"},src:"../../assets/images/".concat(e.name,".png"),alt:"Logo"})}),Object(M.jsx)("div",{className:t.titleContainer,children:Object(M.jsx)(R.a,{variant:"h6",noWrap:!0,children:e.name})}),e.activating&&Object(M.jsx)(He,{color:"white",style:{height:"25%",marginLeft:"1rem"}})]})})})})),_e=Object(b.a)((function(e){var t,n;return{actionButton:{backgroundColor:e.custom.palette.darkRed,minWidth:e.spacing(1),border:"none"},dialogActions:{display:"flex",justifyContent:"flex-end",marginTop:e.spacing(3),marginRight:-e.spacing(2/8)},titleLine:{marginBottom:e.spacing(2.5)},fileDropZone:{height:96,minHeight:"unset"},dialogContent:(t={},Object(A.a)(t,e.breakpoints.down(360),{maxHeight:"200px",padding:e.spacing(.5)}),Object(A.a)(t,e.breakpoints.down("xs"),{maxHeight:"382px",padding:e.spacing(1,0,1,.5)}),Object(A.a)(t,"display","flex"),Object(A.a)(t,"justifyContent","center"),Object(A.a)(t,"padding",e.spacing(1)),Object(A.a)(t,"maxHeight","460px"),Object(A.a)(t,"width","auto"),Object(A.a)(t,"overflowX","unset"),Object(A.a)(t,"overflowY","scroll"),Object(A.a)(t,"&::-webkit-scrollbar-track",{borderRadius:2,backgroundColor:e.palette.background.default}),Object(A.a)(t,"&::-webkit-scrollbar",{width:5,backgroundColor:e.palette.background.default}),t),container:(n={},Object(A.a)(n,e.breakpoints.down("sm"),{padding:0}),Object(A.a)(n,"display","flex"),Object(A.a)(n,"padding","2px 8px 8px 8px"),Object(A.a)(n,"margin",0),Object(A.a)(n,"flexGrow",1),n)}})),Pe=function(e){var t=e.open,n=e.onClose,o=e.headerTitle,c=e.activatingConnector,r=e.setActivatingConnector,i=e.triedEager,l=e.context,b=_e(),j=Be(),g=Object(a.useState)(!1),h=Object(d.a)(g,2),m=h[0],x=h[1],v={MetaMask:O,Binance:f},y=l.connector,w=l.activate,k=l.deactivate,C=l.active,I=l.error,N=function(){var e=Object(we.a)(ye.a.mark((function e(t){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)(Re,{open:t,onClose:n,children:Object(M.jsx)("form",{onSubmit:N,children:Object(M.jsxs)("div",{className:j.root,children:[Object(M.jsx)(R.a,{variant:"h6",className:b.titleLine,children:o}),Object(M.jsx)(Ce.a,{dividers:!0,className:b.dialogContent,children:Object(M.jsxs)(Ie.a,{container:!0,spacing:2,className:b.container,children:[Object.keys(v).filter((function(e,t){return t<(m?Object.keys(v).length:4)})).map((function(e){var t=v[e],n=t===c,a=t===y,o=!i||!!c||a||!!I;return Object(M.jsxs)(Me,{connected:a,disabled:o,name:e,logoType:e,activating:n,onClick:function(){return function(e){r(e),w(e)}(t)},children:[Object(M.jsx)("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"},children:n&&Object(M.jsx)(He,{color:"black",style:{height:"25%",marginLeft:"-1rem"}})}),e]},e)})),Object(M.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[I instanceof p.b&&Object(M.jsx)(re.a,{style:{height:"3rem",marginTop:"2rem",borderRadius:"1rem",cursor:"pointer"},variant:"outlined",onClick:function(){window.open("https://metamask.io/download","_blank")},children:"Install Metamask"}),!!I&&Object(M.jsx)("h4",{style:{marginTop:"1rem",marginBottom:"0",color:"#16ACE2"},children:function(e){return e instanceof p.b?"No Binance browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof s.a?"You're connected to an unsupported network. Please change network as Binance smart chain":e instanceof p.c||e instanceof u.a||e instanceof ke.a?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}(I)})]})]})}),Object(M.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(C||I)&&Object(M.jsx)(re.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"2.5rem",marginTop:"1rem",borderRadius:"1rem",borderColor:"red",cursor:"pointer",color:"textSecondary"},onClick:function(){k()},children:"Disconnect"})}),v.length>4?Object(M.jsx)("div",{className:b.dialogActions,children:Object(M.jsx)(re.a,{style:{borderRadius:"1rem",cursor:"pointer"},variant:"outlined",onClick:function(){x(!m)},children:m?"Show less":"Show more"})}):null]})})})},Ge=(n(281),function(e){var t=e.wholeOverlay,n=e.classes,a=void 0===n?{}:n;return Object(M.jsx)("div",{className:Object(T.a)(t?"loading-backdrop":"loading",a.root),children:Object(M.jsx)("div",{className:Object(T.a)("lds-dual-ring",a.loading)})})}),Ye=function(e){var t=e.notifications,n=e.notificationType,o=Object(w.b)().enqueueSnackbar;return Object(a.useEffect)((function(){if(t&&Object.values(t).length)for(var e=0,a=Object.values(t);e<a.length;e++){var c=a[e];c?o(c,{variant:n}):console.log("[notifications] notification => ",c)}}),[t,o,n]),Object(M.jsx)(M.Fragment,{})},Ve=n(159),Ue=n.n(Ve),qe=n(168).API_BASE_URL+"/api/login";var Je=Object(y.a)((function(){return C()(Promise.all([n.e(4),n.e(6)]).then(n.bind(null,837)),100)})),Ke=Object(b.a)((function(){return{primaryTextColor:{color:"#fff"}}})),Xe=Object(m.f)((function(){var e=Ke(),t=Object(s.c)(),n=t.connector,o=t.library,c=t.chainId,r=t.account,i=t.deactivate,l=t.active,b=Object(a.useState)(),u=Object(d.a)(b,2),j=u[0],p=u[1],g=Object(a.useState)(),h=Object(d.a)(g,2),f=h[0],y=h[1],k=Object(a.useState)(),C=Object(d.a)(k,2),I=C[0],N=C[1],A=Object(a.useState)(),L=Object(d.a)(A,2),S=L[0],T=L[1];Object(a.useEffect)((function(){f&&f===n&&y(void 0)}),[f,n]),Object(a.useEffect)((function(){if(r&&o){var e=!1;return o.getBalance(r).then((function(t){e||N(t)})).catch((function(){e||N(null)})),(t=r,Ue.a.post(qe,{address:t})).then((function(e){var t=e.data;T(t.result)})),function(){e=!0,N(void 0)}}var t}),[r,o,c]);var B=function(){var e=Object(s.c)(),t=e.activate,n=e.active,o=Object(a.useState)(!1),c=Object(d.a)(o,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){O.isAuthorized().then((function(e){e?t(O,void 0,!0).catch((function(){i(!0)})):i(!0)}))}),[t]),Object(a.useEffect)((function(){!r&&n&&i(!0)}),[r,n]),r}();!function(e){var t=Object(s.c)(),n=t.active,o=t.error,c=t.activate,r=t.deactivate;Object(a.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!o&&!e){var a=function(){console.log("Handling 'connect' event"),c(O)},i=function(e){console.log("Handling 'chainChanged' event with payload",e),c(O)},s=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&c(O)},l=function(e){console.log("Handling 'networkChanged' event with payload",e),c(O)},d=function(){console.log("Handling 'disconnect' event"),r(O)};return t.on("connect",a),t.on("chainChanged",i),t.on("accountsChanged",s),t.on("networkChanged",l),t.on("disconnect",d),function(){t.removeListener&&(t.removeListener("connect",a),t.removeListener("chainChanged",i),t.removeListener("accountsChanged",s),t.removeListener("networkChanged",l),t.on("disconnect",d))}}}),[n,o,e,c,r])}(!B||!!f);var R,F=Object(a.useState)(!1),E=Object(d.a)(F,2),W=E[0],z=E[1],H=Object(a.useState)(!1),_=Object(d.a)(H,1)[0];return Object(a.useEffect)((function(){document.body.style.overflow=j?"hidden":"unset"}),[j]),Object(M.jsx)(ae.a.Provider,{value:{loadingInfo:W,library:o,active:l,setLoadingInfo:z,setIsWalletDialog:p,account:r,token:S,chainId:c,deactivate:i,balance:I},children:Object(M.jsx)(v.a,{theme:D,children:Object(M.jsxs)(w.a,{classes:{variantSuccess:e.primaryTextColor,variantError:e.primaryTextColor,variantWarning:e.primaryTextColor,variantInfo:e.primaryTextColor},anchorOrigin:{vertical:"bottom",horizontal:"left"},maxSnack:3,children:[Object(M.jsx)(x.a,{}),Object(M.jsx)(Ye,{notifications:"",notificationType:"success"}),Object(M.jsx)(a.Suspense,{fallback:Object(M.jsx)(Ge,{wholeOverlay:!0}),children:Object(M.jsxs)(xe,{layout:_,account:r,children:[j&&Object(M.jsx)(Pe,{headerTitle:"Select a Wallet",open:!0,onClose:(R=!1,function(){p(R)}),setActivatingConnector:y,activatingConnector:f,triedEager:B,context:t}),Object(M.jsx)(m.c,{children:Object(M.jsx)(m.a,{render:function(){return Object(M.jsx)(m.c,{children:Object(M.jsx)(m.a,{exact:!0,path:X.url,component:Je})})}})})]})})]})})})}));n(299),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=Object(M.jsx)(i.a,{children:Object(M.jsx)(s.b,{getLibrary:function(e){var t=new l.a(e);return t.pollingInterval=12e3,t},children:Object(M.jsx)(Xe,{})})});r.a.render($e,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,t,n){"use strict";var a=n(13),o=n(22),c=(n(0),n(308)),r=n(311),i=n(309),s=n(8),l=n(1),d=["className","type","color","variant","disabled","loading","children","fullWidth","disable"],b=Object(c.a)((function(e){return{wrapper:function(e){return{position:"relative",width:e.fullWidth?"100%":null}},root:{margin:e.spacing(3/8),boxShadow:"none",textTransform:"none",backgroundColor:e.palette.secondary.main,color:e.palette.primary.contrastText,minWidth:e.spacing(5),position:"relative",overflow:"hidden","&::after":{content:'""',position:"absolute",top:0,left:"150%",width:"200%",height:"100%",transform:"skewX(-20deg)",transition:"background 0.4s ease 0s",backgroundImage:"linear-gradient(to right, transparent, rgba(255,255,255,0.20), transparent)"},"&:hover":{boxShadow:"none",backgroundColor:e.palette.background.main,transitionDelay:"0.25s","&::after":{animation:"$shine 0.75s cubic-bezier(0.01, 0.56, 1, 1)"}},"&:disabled":{color:e.palette.text.secondary,border:"none"}},outlined:{borderColor:e.palette.text.secondary,backgroundColor:"transparent","&:hover":{backgroundColor:"transparent",borderColor:e.palette.secondary.contrastText},"&:disabled":{color:e.palette.text.secondary}},buttonProgress:{color:e.palette.secondary.main,position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},"@keyframes shine":{"0%":{left:"200%"},"100%":{left:"-200%"}}}}));t.a=function(e){var t=e.className,n=e.type,c=e.color,u=e.variant,j=void 0===u?"contained":u,p=(e.disabled,e.loading),g=e.children,h=e.fullWidth,f=e.disable,O=Object(o.a)(e,d),m=b({fullWidth:h});return Object(l.jsxs)("div",{className:m.wrapper,children:[Object(l.jsx)(r.a,Object(a.a)(Object(a.a)({className:Object(s.a)(t,m.root,"outlined"===j&&m.outlined),color:c,variant:j,type:n,disabled:p||f},O),{},{children:g})),p&&Object(l.jsx)(i.a,{size:24,className:m.buttonProgress})]})}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),o=Object(a.createContext)({topAppMenu:0,topMenuChageHandler:function(){}})}},[[307,1,3]]]);
//# sourceMappingURL=main.b596ac9a.chunk.js.map