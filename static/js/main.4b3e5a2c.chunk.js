(this["webpackJsonpgpuminershop-lagneau"]=this["webpackJsonpgpuminershop-lagneau"]||[]).push([[0],{104:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),i=a.n(r),o=(a(104),a(176)),s=a(15),l=a(89),j=Object(l.a)({palette:{primary:{main:"#1ea5fc",light:"#6fd6ff",dark:"#0077c8"}}});j.typography.h1=Object(s.a)({fontSize:"1rem","@media (min-width:600px)":{fontSize:"1.5rem"}},j.breakpoints.up("md"),{fontSize:"2rem"});var d=j,b=a(19),u=a(16),O=a(12),m=a(23),h=a(154),x=a(156),f=a(161),p=a(162),g=a(158),v=a(159),C=a(160),y=a(181),I=a(163),N=a(164),A=a(83),S=a.n(A),k=a(3),D=Object(h.a)((function(e){return{card:{height:"100%",display:"flex",flexDirection:"column"},cardContent:{flexGrow:1},cardIdPrecio:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},cardActions:{flexDirection:"row",justifyContent:"space-around"}}})),w={NVIDIA:"#76B900",AMD:"#DA0032"},q=function(e){var t,a=D();return Object(k.jsx)(x.a,{item:!0,xs:12,sm:6,md:4,children:Object(k.jsxs)(g.a,{className:a.card,children:[Object(k.jsx)(v.a,{component:"img",className:a.cardMedia,image:e.data.pictureUrl,title:e.data.alt}),Object(k.jsxs)(C.a,{className:a.cardContent,children:[Object(k.jsx)(y.a,{size:"small",label:e.data.brand,style:{background:(t=e.data.brand,w[t])}}),Object(k.jsx)(f.a,{variant:"h5",gutterBottom:!0,children:e.data.title}),Object(k.jsxs)("div",{className:a.cardIdPrecio,children:[Object(k.jsxs)(f.a,{color:"textSecondary",variant:"subtitle2",gutterBottom:!0,children:["ID: ",e.id]}),Object(k.jsxs)(f.a,{variant:"h6",display:"block",gutterBottom:!0,children:["$ ",e.data.price]})]}),Object(k.jsx)(p.a,{variant:"middle"}),Object(k.jsx)(S.a,{clamp:3,children:Object(k.jsx)(f.a,{variant:"body2",display:"block",paragraph:!0,children:e.data.description})}),Object(k.jsx)(I.a,{className:a.cardActions,children:Object(k.jsx)(N.a,{size:"small",variant:"outlined",color:"primary",component:b.b,to:"/item/".concat(e.id),children:"DETALLES"})})]})]})})},B=a(165),E=Object(h.a)((function(e){return{cardGrid:{padding:"2em 0"}}})),F=function(e){var t=E(),a=e.items;return Object(k.jsx)(B.a,{className:t.cardGrid,maxWidth:"md",children:Object(k.jsx)(x.a,{container:!0,spacing:4,children:a.map((function(e,t){return Object(k.jsx)(q,Object(m.a)({},e),t)}))})})},T=a(63),P=(a(79),T.a.initializeApp({apiKey:"AIzaSyC7K9BO-crfhhS-K-XPtqBCU-b8Nuo0fLE",authDomain:"gpuminershop-ecommerce.firebaseapp.com",projectId:"gpuminershop-ecommerce",storageBucket:"gpuminershop-ecommerce.appspot.com",messagingSenderId:"502654838504",appId:"1:502654838504:web:7608e27844f1d3d918cb5d"}).firestore()),R=a(179),z=Object(h.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function M(){var e=z();return Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(R.a,{severity:"error",children:"Lo siento! Ha ocurrido un error."})})}var G=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1],r=Object(u.g)().brandId,i=Object(n.useState)(!1),o=Object(O.a)(i,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){l(!1);var e=P.collection("items");void 0===r?e.get().then((function(e){0===e.size&&l(!0),c(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})).catch((function(e){l(!0)})):e.where("brand","==",r).get().then((function(e){0===e.size&&l(!0),c(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})).catch((function(e){l(!0)}))}),[r]),Object(k.jsx)(k.Fragment,{children:s?Object(k.jsx)(M,{}):Object(k.jsx)(F,{items:a})})},L=function(e){var t=Object(u.f)();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N.a,{variant:"outlined",color:"primary",onClick:function(){return e.clickCancelar(!1)},children:"CANCELAR"}),Object(k.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/cart")},children:"COMPRAR"})]})},W=a(166),V=a(85),U=a.n(V),$=a(84),K=a.n($),J=a(86),H=a.n(J),X=function(e){var t=e.stock,a=e.valorInicial,c=e.itemsCant,r=e.onAdd,i=Object(n.useState)(a>c?a:c),o=Object(O.a)(i,2),s=o[0],l=o[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N.a,{variant:"outlined",color:"primary",component:b.b,to:"/",children:"Volver"}),Object(k.jsx)(W.a,{onClick:function(e){l(s-1)},disabled:s===a,children:Object(k.jsx)(K.a,{})}),Object(k.jsx)(f.a,{variant:"h5",children:s}),Object(k.jsx)(W.a,{onClick:function(e){l(s+1)},disabled:!(s<t),children:Object(k.jsx)(U.a,{})}),Object(k.jsx)(N.a,{variant:"contained",color:"primary",startIcon:Object(k.jsx)(H.a,{}),onClick:function(){return r(s)},disabled:0===t,children:"Agregar"})]})},Z=a(26),Q=Object(n.createContext)([]),Y=function(e){var t=Object(n.useState)([]),a=Object(O.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(0),o=Object(O.a)(i,2),s=o[0],l=o[1],j=Object(n.useState)(0),d=Object(O.a)(j,2),b=d[0],u=d[1],m=Object(n.useState)(""),h=Object(O.a)(m,2),x=h[0],f=h[1];return Object(k.jsx)(Q.Provider,{value:{itemsCart:c,addItem:function(e){l(s+e.quantity),u(b+e.item.price*e.quantity);var t=c.find((function(t){return t.item.id===e.item.id}));if(t){var a=t.quantity+e.quantity;t.quantity=a,r(c)}else r((function(t){return[].concat(Object(Z.a)(t),[e])}))},clear:function(){r([]),l(0),u(0),f("")},removeItem:function(e){var t=c.find((function(t){return t.item.id===e}));l(s-t.quantity),u(b-t.item.price*t.quantity),r(c.filter((function(t){return t.item.id!==e})))},itemsCant:s,subTotal:b,orderData:x,updateOrderData:function(e){f(e)}},children:e.children})},_=Object(h.a)((function(e){return function(e){return{cardGrid:{padding:"1em 0"},root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}},card:{height:"100%",display:"flex",flexDirection:"column"},cardContent:{flexGrow:1},cardIdPrecio:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},cardActions:{flexDirection:"row",justifyContent:"space-around"}}}(e)})),ee={NVIDIA:"#76B900",AMD:"#DA0032"},te=function(e){var t,a=_(),c=Object(n.useState)(0),r=Object(O.a)(c,2),i=r[0],o=r[1],s=Object(n.useState)(!1),l=Object(O.a)(s,2),j=l[0],d=l[1],b=Object(n.useContext)(Q),u=b.addItem,m=b.removeItem;return Object(k.jsx)(B.a,{className:a.cardGrid,maxWidth:"xs",children:Object(k.jsx)(x.a,{item:!0,xs:12,children:Object(k.jsxs)(g.a,{className:a.card,children:[Object(k.jsx)(v.a,{component:"img",className:a.cardMedia,image:e.pictureUrl,title:e.alt}),Object(k.jsxs)(C.a,{className:a.cardContent,children:[Object(k.jsx)(y.a,{size:"small",label:e.brand,style:{background:(t=e.brand,ee[t])}}),Object(k.jsx)(f.a,{variant:"h5",gutterBottom:!0,children:e.title}),Object(k.jsxs)("div",{className:a.cardIdPrecio,children:[Object(k.jsxs)(f.a,{color:"textSecondary",variant:"subtitle2",gutterBottom:!0,children:["ID: ",e.id]}),Object(k.jsxs)(f.a,{variant:"h6",display:"block",gutterBottom:!0,children:["$ ",e.price]})]}),Object(k.jsx)(p.a,{variant:"middle"}),Object(k.jsx)(f.a,{variant:"body2",display:"block",paragraph:!0,children:e.description}),Object(k.jsx)(I.a,{className:a.cardActions,children:j?Object(k.jsx)(L,{clickCancelar:function(t){d(!1),m(e.id)}}):Object(k.jsx)(X,{stock:e.stock,valorInicial:0===e.stock?0:1,itemsCant:i,onAdd:function(t){o(t),d(!0),u({item:e,quantity:t})}})})]})]})})})},ae=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1],r=Object(u.g)().itemId,i=Object(n.useState)(!1),o=Object(O.a)(i,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){l(!1),P.collection("items").doc(r).get().then((function(e){e.exists?c([Object(m.a)({id:e.id},e.data())]):l(!0)})).catch((function(e){l(!0)}))}),[r]),Object(k.jsx)(k.Fragment,{children:s?Object(k.jsx)(M,{}):a.map((function(e,t){return Object(k.jsx)(te,Object(m.a)({},e),t)}))})},ne=a(168),ce=a(169),re=a(167),ie=a(6),oe=a(87),se=a.n(oe),le=Object(ie.a)((function(e){return{badge:{right:-3,top:5,padding:"0 0.2em"}}}))(re.a);function je(){var e=Object(n.useContext)(Q).itemsCant;return Object(k.jsx)(W.a,{"aria-label":"cart",color:"inherit",component:b.b,to:"/cart",children:Object(k.jsx)(le,{badgeContent:e,color:"secondary",children:Object(k.jsx)(se.a,{})})})}var de=Object(h.a)((function(e){return function(e){return{offset:Object(m.a)(Object(m.a)({},e.mixins.toolbar),{},{marginBottom:"1rem"}),homeButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"Encode Sans SC"}}}(e)})),be=function(){var e=de(),t=Object(n.useContext)(Q).itemsCart;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ne.a,{position:"fixed",color:"primary",children:Object(k.jsxs)(ce.a,{children:[Object(k.jsx)(W.a,{edge:"start",className:e.homeButton,color:"inherit",component:b.b,to:"/",children:Object(k.jsx)(f.a,{align:"center",variant:"h1",className:e.title,children:"GPUMinerShop"})}),Object(k.jsx)(N.a,{variant:"text",color:"inherit",component:b.b,to:"/brand/".concat("NVIDIA"),children:"Nvidia"}),Object(k.jsx)(N.a,{variant:"text",color:"inherit",component:b.b,to:"/brand/".concat("AMD"),children:"AMD"}),t.length>0?Object(k.jsx)(je,{}):""]})}),Object(k.jsx)("div",{className:e.offset})]})},ue=a(178),Oe=function(){return Object(k.jsxs)(ue.a,{textAlign:"center",children:[Object(k.jsx)(f.a,{variant:"h3",children:"El carrito est\xe1 vacio."}),Object(k.jsx)(N.a,{variant:"outlined",color:"primary",component:b.b,to:"/",children:"VOLVER"})]})},me=a(171),he=a(175),xe=a(174),fe=a(170),pe=a(172),ge=a(173),ve=a(88),Ce=a.n(ve),ye=a(91),Ie=Object(h.a)((function(e){return{generalContainer:{display:"flex",justifyContent:"center",flexDirection:"column"},container:{display:"flex",justifyContent:"center",marginBottom:"1em"},headerTable:{backgroundColor:"#e6e6e6"},tableContainer:{width:"80rem"},imgItem:{maxWidth:"8rem"},delete:{"&:hover":{color:"#ff0000"}}}})),Ne=function(){var e=Object(n.useContext)(Q),t=e.itemsCart,a=e.removeItem,c=e.subTotal,r=e.clear,i=Ie();return Object(k.jsxs)("div",{className:i.generalContainer,children:[Object(k.jsx)("div",{className:i.container,children:Object(k.jsx)(fe.a,{component:ye.a,className:i.tableContainer,children:Object(k.jsxs)(me.a,{children:[Object(k.jsx)(pe.a,{className:i.headerTable,children:Object(k.jsxs)(ge.a,{children:[Object(k.jsx)(xe.a,{align:"center",children:"Imagen"}),Object(k.jsx)(xe.a,{align:"center",children:"Item"}),Object(k.jsx)(xe.a,{align:"center",children:"Cantidad"}),Object(k.jsx)(xe.a,{align:"center",children:"Precio"}),Object(k.jsx)(xe.a,{align:"center"})]})}),Object(k.jsxs)(he.a,{children:[t.map((function(e){return Object(k.jsxs)(ge.a,{children:[Object(k.jsx)(xe.a,{component:"th",scope:"row",align:"center",children:Object(k.jsx)("img",{src:e.item.pictureUrl,alt:e.item.alt,className:i.imgItem})}),Object(k.jsx)(xe.a,{align:"center",children:e.item.title}),Object(k.jsx)(xe.a,{align:"center",children:e.quantity}),Object(k.jsxs)(xe.a,{align:"center",children:["$ ",e.item.price]}),Object(k.jsx)(xe.a,{children:Object(k.jsx)(W.a,{"aria-label":"delete",onClick:function(){return a(e.item.id)},className:i.delete,children:Object(k.jsx)(Ce.a,{fontSize:"small"})})})]},e.item.id)})),Object(k.jsx)(xe.a,{}),Object(k.jsx)(xe.a,{}),Object(k.jsx)(xe.a,{align:"center",children:"Total:"}),Object(k.jsxs)(xe.a,{align:"center",children:["$ ",c]}),Object(k.jsx)(xe.a,{})]})]})})}),Object(k.jsx)("div",{className:i.container,children:Object(k.jsx)(N.a,{variant:"outlined",color:"primary",onClick:r,children:"VACIAR CARRITO"})})]})},Ae=Object(h.a)((function(e){return{container:{display:"flex",justifyContent:"center",marginTop:"1em"}}})),Se=function(){var e=Object(n.useContext)(Q),t=e.orderData,a=e.clear,c=Object(u.f)(),r=Ae();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(f.a,{align:"center",variant:"h3",children:"\xa1Gracias por tu compra!"}),Object(k.jsxs)(f.a,{align:"center",children:["C\xf3digo de pedido: ",t]}),Object(k.jsx)("div",{className:r.container,children:Object(k.jsx)(N.a,{variant:"outlined",color:"primary",onClick:function(){a(),c.push("/")},children:"SEGUIR COMPRANDO"})})]})},ke=a(177),De=Object(h.a)((function(e){return{cardContainer:{marginTop:"1em"},cardContent:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},container:{display:"flex",justifyContent:"center",marginTop:"1em"}}})),we=function(e){var t=De(),a=Object(n.useContext)(Q),c=a.itemsCart,r=a.subTotal,i=a.updateOrderData,o=Object(n.useState)({}),l=Object(O.a)(o,2),j=l[0],d=l[1],b=Object(n.useState)([]),u=Object(O.a)(b,2)[1],h=Object(n.useState)(!0),x=Object(O.a)(h,2)[1],f=Object(n.useState)(!1),p=Object(O.a)(f,2),v=p[0],y=p[1],I=function(e){var t=e.target,a=t.name,n=t.value;d(Object(m.a)(Object(m.a)({},j),{},Object(s.a)({},a,n)))},A=P.collection("items").where(T.a.firestore.FieldPath.documentId(),"in",c.map((function(e){return e.item.id}))),S=function(e){var t=function(e){return{buyer:e,items:c,date:new Date,total:r}}(e),a=P.collection("orders");try{a.add(t).then((function(e){x(!1),i(e.id)}))}catch(v){y(!0)}},D=function(e){A.get().then((function(t){var a=P.batch(),n=[];t.docs.forEach((function(e,t){e.data().stock>=c[t].quantity?a.update(e.ref,{stock:e.data().stock-c[t].quantity}):n.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),0===n.length?a.commit().then((function(){S(e)})):u(n)}))};return Object(k.jsx)(k.Fragment,{children:v?Object(k.jsx)(M,{}):Object(k.jsx)(g.a,{variant:"outlined",className:t.cardContainer,children:Object(k.jsx)(C.a,{className:t.cardContent,children:Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault(),D(j)},children:[Object(k.jsx)(ke.a,{id:"standard-full-width",fullWidth:!0,name:"nombre",label:"Nombre",required:!0,onChange:I}),Object(k.jsx)(ke.a,{id:"standard-full-width",fullWidth:!0,name:"apellido",label:"Apellido",required:!0,onChange:I}),Object(k.jsx)(ke.a,{id:"standard-full-width",fullWidth:!0,name:"calle",label:"Calle",required:!0,onChange:I}),Object(k.jsx)(ke.a,{id:"standard-full-width",fullWidth:!0,name:"numero",label:"N\xfamero",required:!0,onChange:I}),Object(k.jsx)(ke.a,{id:"standard-full-width",fullWidth:!0,name:"telefono",label:"Tel\xe9fono",required:!0,onChange:I}),Object(k.jsx)(ke.a,{id:"standard-full-width",fullWidth:!0,label:"Email",name:"email",type:"email",required:!0,onChange:I}),Object(k.jsx)("div",{className:t.container,children:Object(k.jsx)(N.a,{variant:"contained",color:"primary",type:"submit",children:"FINALIZAR COMPRA"})})]})})})})},qe=function(){var e=Object(n.useContext)(Q),t=e.itemsCart,a=e.orderData;return Object(k.jsx)(k.Fragment,{children:0===t.length?Object(k.jsx)(Oe,{}):Object(k.jsx)(k.Fragment,{children:a?Object(k.jsx)(Se,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Ne,{}),Object(k.jsx)(we,{})]})})})},Be=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(f.a,{align:"center",variant:"h2",children:"Error 404"}),Object(k.jsx)(f.a,{align:"center",variant:"h4",children:"La url especificada no existe"})]})},Ee=function(){return Object(k.jsxs)(b.a,{children:[Object(k.jsx)(be,{}),Object(k.jsxs)(u.c,{children:[Object(k.jsx)(u.a,{path:"/",children:Object(k.jsx)(G,{})}),Object(k.jsx)(u.a,{path:"/brand/:brandId",children:Object(k.jsx)(G,{})}),Object(k.jsx)(u.a,{path:"/item/:itemId",children:Object(k.jsx)(ae,{})}),Object(k.jsx)(u.a,{path:"/cart",children:Object(k.jsx)(qe,{})}),Object(k.jsx)(u.a,{path:"/*",children:Object(k.jsx)(Be,{})})]})]})};var Fe=function(){return Object(k.jsx)(o.a,{theme:d,children:Object(k.jsx)(Y,{children:Object(k.jsx)(Ee,{})})})};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(Fe,{})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.4b3e5a2c.chunk.js.map