(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},61:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),n=i(15),s=i.n(n),r=(i(37),i(11)),o=i(3),d=i.p+"static/media/logo.6ce24c58.svg",l=(i(38),i(7)),u=(i(39),i(30)),m=i.n(u),j=i(31),p=i.n(j),b=i(0),h=Object(c.createContext)(),x=function(e){var t=e.reducer,i=e.initialState,a=e.children;return Object(b.jsx)(h.Provider,{value:Object(c.useReducer)(t,i),children:a})},O=function(){return Object(c.useContext)(h)},g=(i(41),i.p+"static/media/checkout-banner.c03c7cca.jpg");i(42);var _=function(e){var t=e.id,i=e.title,c=e.image,a=e.price,n=e.rating,s=O(),r=Object(l.a)(s,2),o=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(b.jsxs)("div",{className:"checkoutProduct__info",children:[Object(b.jsx)("p",{className:"checkoutProduct__title",children:i}),Object(b.jsxs)("p",{className:"checkoutProduct__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"checkoutProduct__rating",children:Array({rating:n}).fill().map((function(e,t){}))}),Object(b.jsx)("button",{className:"checkoutProduct__button",onClick:function(){o({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},v=(i(43),i(29)),f=i.n(v),N=i(18),k=i(13),q=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)};var C=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":case"SAVE_ARG":return Object(k.a)(Object(k.a)({},e),{},{basket:[].concat(Object(N.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var i=Object(N.a)(e.basket),c=e.basket.findIndex((function(e){return e.id===t.id}));return c>=0?i.splice(c,1):console.warn("Cant remove (id: ${action.id}) as its not in the basket"),Object(k.a)(Object(k.a)({},e),{},{basket:i});default:return e}};var y=function(){var e=O(),t=Object(l.a)(e,1)[0].basket;return Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(f.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal (",t.length," items): ",Object(b.jsxs)("strong",{children:[" ",e," "]})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimaScale:2,value:q(t),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{children:"Proceed to Checkout"})]})};var P=function(){var e=O(),t=Object(l.a)(e,1)[0].basket;return Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout__left",children:[Object(b.jsx)("img",{className:"checkout__ad",src:g,alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Your basket is empty"})}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Your shopping basket "}),null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(_,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(b.jsx)("div",{className:"checkout__right",children:Object(b.jsx)(y,{})})]})};var A=function(){var e=O(),t=Object(l.a)(e,1)[0].basket;return Object(b.jsxs)("nav",{className:"header",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{src:d,className:"Header__logo",alt:"logo"})}),Object(b.jsxs)("div",{className:"Header__search",children:[Object(b.jsx)("input",{type:"text",className:"Header__searchBar"}),Object(b.jsx)(m.a,{className:"Header__searchIcon"})]}),Object(b.jsxs)("div",{className:"Header__nav",children:[Object(b.jsx)(r.b,{to:"/About",className:"Header__link",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Hello Dorian"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"Sign in"})]})}),Object(b.jsx)(r.b,{to:"/Contact",className:"Header__link",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Contact"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"Message"})]})}),Object(b.jsx)(r.b,{to:"/Checkout",className:"Header__link",children:Object(b.jsxs)("div",{className:"header__optionBasket",children:[Object(b.jsx)(p.a,{}),Object(b.jsx)("span",{className:"header__optionCount",children:t.length})]})})]})]})},E=i.p+"static/media/landscape.20038f0b.jpg",S=(i(51),i(74));var L=function(e){var t=e.id,i=e.title,c=e.image,a=e.price,n=e.rating,s=e.description,o=O(),d=Object(l.a)(o,2),u=(d[0].basket,d[1]);return Object(b.jsxs)(S.a,{className:"product",children:[Object(b.jsxs)(r.b,{to:"/ProductPage",className:"product__link",onClick:function(){u({type:"SAVE_ARG",item:{id:t,title:i,image:c,price:a,rating:n,description:s}})},children:[Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{children:i}),Object(b.jsxs)("p",{className:"product__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"product__rating",children:Array({rating:n}).fill().map((function(e){}))})]}),Object(b.jsx)("img",{className:"product__Image",src:c,alt:""})]}),Object(b.jsx)("button",{className:"product__Button",onClick:function(){console.log("touched over there"),u({type:"ADD_TO_BASKET",item:{id:t,title:i,image:c,price:a,rating:n,description:s}})},children:"Add to basket"})]})},T=i.p+"static/media/tv2.5aa056ad.png",B=i.p+"static/media/toothpaste.8a00b453.png",w=i.p+"static/media/volkswagen.44d91400.png";i(52);var H=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"home__image",src:E,alt:""}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(L,{id:"123456789",title:"Duis laborum deserunt aliquip fugiat ullamco et.",price:499.99,rating:5,image:T,description:"Sunt culpa nisi nostrud enim mollit ut duis nostrud commodo est sunt nulla. Culpa mollit duis labore officia proident eiusmod non velit sit proident deserunt proident laborum voluptate. Magna in ut et tempor velit veniam voluptate eiusmod quis aliquip qui quis fugiat aute. Enim in cillum irure fugiat adipisicing consectetur nisi dolore sunt est esse. Occaecat eiusmod aliqua voluptate sunt Lorem adipisicing mollit adipisicing incididunt aute eiusmod sunt commodo aliqua. Adipisicing mollit velit ipsum quis incididunt voluptate eiusmod voluptate."}),Object(b.jsx)(L,{id:"123456789",title:"Duis officia eiusmod eiusmod labore veniam.",price:499.99,rating:5,image:w,description:"Enim anim ut cillum sit fugiat commodo commodo sint est laboris. Lorem enim consectetur aute in occaecat duis sit enim enim est ea quis. Amet exercitation commodo ad do. Nulla consequat proident veniam anim culpa. Laboris non commodo exercitation mollit mollit minim anim. Adipisicing minim ut eu anim dolor aliqua labore adipisicing."})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(L,{id:"123456789",title:"Amet esse amet Lorem veniam reprehenderit duis nisi id excepteur pariatur reprehenderit ex.",price:499.99,rating:5,image:T,description:"Dolore quis id ipsum in minim exercitation excepteur cillum pariatur aliquip. Voluptate mollit velit labore fugiat amet ea. Tempor dolor pariatur elit non. Deserunt exercitation laboris cillum dolor labore nulla ipsum aliquip ipsum. Et dolore proident enim velit est fugiat amet quis do sunt nostrud officia."}),Object(b.jsx)(L,{id:"123456789",title:"Libre pour usage commercial Pas d'attribution requise",price:499.99,rating:5,image:T,description:"Esse do adipisicing commodo ea quis consectetur excepteur fugiat. Magna irure fugiat sunt consectetur nulla esse nisi tempor nostrud id. Lorem anim consectetur eu duis nisi cupidatat esse amet magna deserunt culpa. Minim cillum aliquip nisi anim Lorem do ad. Sint nostrud deserunt aliquip reprehenderit consequat id officia. Occaecat veniam ea culpa excepteur proident incididunt duis adipisicing quis mollit deserunt qui."}),Object(b.jsx)(L,{id:"123456789",title:"Commodo commodo reprehenderit ullamco cillum nulla pariatur.",price:499.99,rating:5,image:T,description:"Commodo esse irure voluptate ea aute do occaecat aliqua. Commodo exercitation esse voluptate cupidatat occaecat tempor mollit. Mollit incididunt laboris culpa qui amet."})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(L,{id:"123456789",title:"Laboris cupidatat sit commodo consequat ipsum voluptate commodo esse ad reprehenderit cupidatat cupidatat occaecat consectetur.",price:499.99,rating:5,image:T,description:"Est consectetur Lorem velit ea incididunt reprehenderit do ad et est veniam consequat duis proident. Non amet aute anim mollit aute in ipsum. Elit ipsum pariatur velit anim deserunt cillum aliquip qui ipsum commodo. Lorem dolor adipisicing irure deserunt reprehenderit minim id nostrud labore et amet veniam sint."}),Object(b.jsx)(L,{id:"123456789",title:"Consectetur minim culpa esse ullamco nostrud deserunt id ullamco.",price:499.99,rating:5,image:B,description:"Non aliquip ut enim ad labore nisi officia anim. Voluptate elit dolore incididunt laboris qui magna ipsum ipsum. Aute Lorem anim qui et ipsum do adipisicing voluptate laborum ex exercitation ex. Eu aliqua laborum laboris quis commodo anim irure eiusmod consequat dolor."})]})]})};i(53);var D=function(e){e.id,e.title,e.image,e.price;var t=e.rating,i=(e.description,O()),c=Object(l.a)(i,1)[0].basket;return Object(b.jsxs)("div",{className:"productPage",children:[Object(b.jsxs)("div",{className:"productPage__left",children:[Object(b.jsxs)("div",{className:"productPage__info",children:[Object(b.jsx)("p",{children:c[c.length-1].title}),Object(b.jsx)("div",{className:"productPage__rating",children:Array({rating:t}).fill().map((function(e){}))})]}),Object(b.jsx)("img",{className:"productPage__Image",src:c[c.length-1].image,alt:""}),Object(b.jsx)("p",{children:c[c.length-1].description})]}),Object(b.jsxs)("div",{className:"productPage__right",children:[Object(b.jsxs)("p",{className:"productPage__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:c[c.length-1].price})]}),Object(b.jsx)("button",{children:"Proceed to Checkout"})]})]})};i(54),i(55),i(59);var I=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{id:"mySidebar",class:"sidebar",children:[Object(b.jsx)("a",{href:"javascript:void(0)",class:"closebtn",onClick:function(){document.getElementById("mySidebar").style.width="0",document.getElementById("main").style.marginLeft="0"},children:"\xd7"}),Object(b.jsx)("a",{href:"#",children:"About"}),Object(b.jsx)("a",{href:"#",children:"Services"}),Object(b.jsx)("a",{href:"#",children:"Clients"}),Object(b.jsx)("a",{href:"#",children:"Contact"})]}),Object(b.jsx)("div",{id:"main",children:Object(b.jsx)("button",{class:"openbtn",onClick:function(){document.getElementById("mySidebar").style.width="350px",document.getElementById("main").style.marginLeft="350px",console.log("ee")},children:"\u2630 Open Sidebar"})})]})};var M=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(r.a,{children:[Object(b.jsx)(A,{}),Object(b.jsx)(I,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:H}),Object(b.jsx)(o.a,{path:"/Home"}),Object(b.jsx)(o.a,{path:"About"}),Object(b.jsx)(o.a,{path:"Home"}),Object(b.jsx)(o.a,{path:"Contact"}),Object(b.jsx)(o.a,{path:"/ProductPage",exact:!0,component:D}),Object(b.jsx)(o.a,{path:"/Checkout",exact:!0,component:P})]})]}),Object(b.jsx)("body",{})]})},R=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,75)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),c(e),a(e),n(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{initialState:{basket:[]},reducer:C,children:Object(b.jsx)(M,{})})}),document.getElementById("root")),R()}},[[61,1,2]]]);
//# sourceMappingURL=main.012bf5e7.chunk.js.map