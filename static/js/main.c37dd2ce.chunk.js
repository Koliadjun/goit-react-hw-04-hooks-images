(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,n){e.exports={Button:"button_Button__Hax0N"}},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(4),a=n.n(r),s=(n(20),n(21),n(22),n(10)),i=n(11),l=n(15),u=n(14),h=(n(23),n(24),n(25),n(3)),j=n(1);var b=function(e){var t=e.onSubmit,n=Object(c.useState)(""),o=Object(h.a)(n,2),r=o[0],a=o[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r),a("")},children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{onChange:function(e){a(e.currentTarget.value.toLowerCase())},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r})]})})})},d=n(8),m=n(12),f=n.n(m);var O=function(e){var t=e.src,n=e.onClick,c=e.largeImg;return Object(j.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return n(c)},children:Object(j.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image"})})},g=n(2),p=n.n(g),v=n(13),x=n.n(v),C=function(e){var t=e.children,n=e.onClick;return Object(j.jsx)("button",{className:x.a.Button,type:"button",onClick:n,children:t})};C.propType={children:p.a.element,onClick:p.a.func.isRequired};var y=C,w=n(6),S="https://pixabay.com/api/?key=21859893-eed1f1d786560e2667ad1f26b&image_type=photo&orientation=horizontal",k="idle",F="pending",N="rejected",I="resolved",E={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0};var H=function(e){var t=e.searchQuery,n=e.onClick,o=Object(c.useState)([]),r=Object(h.a)(o,2),a=r[0],s=r[1],i=Object(c.useState)(1),l=Object(h.a)(i,2),u=l[0],b=l[1],m=Object(c.useState)(12),g=Object(h.a)(m,1)[0],p=Object(c.useState)(k),v=Object(h.a)(p,2),x=v[0],C=v[1],H=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return C(F),fetch("".concat(S,"&q=").concat(t,"&per_page=").concat(g,"&page=").concat(e)).then((function(e){return e.json()})).then((function(e){if(0===e.hits.length)throw new Error('\u041d\u0435\u043c\u0430\u0454 \u0444\u043e\u0442\u043e \u0437\u0430 \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c "'.concat(t,'"'));return e}))}),[g,t]);return Object(c.useEffect)((function(){""!==t&&H().then((function(e){s(Object(d.a)(e.hits)),b(1),C(I)})).catch((function(e){C(N),w.b.error("".concat(e.message),E)}))}),[t,H]),Object(c.useEffect)((function(){u>1&&H(u).then((function(e){s((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e.hits))})),C(I)})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){C(N),w.b.error("".concat(e.message),E)}))}),[u,t,H]),x===k?Object(j.jsx)("h2",{className:"title",children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442"}):x===F?Object(j.jsx)("div",{className:"loaderWrapper",children:Object(j.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})}):x===N?(setTimeout((function(){C(k)}),5e3),Object(j.jsx)(j.Fragment,{})):x===I?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"ImageGallery",children:a.map((function(e){return Object(j.jsx)(O,{src:e.webformatURL,largeImg:e.largeImageURL,onClick:n},e.id)}))}),Object(j.jsx)("div",{className:"buttonWrapper",children:Object(j.jsx)(y,{onClick:function(){b((function(e){return e+1})),console.log(u)},children:"Load more"})})]}):void 0},L=document.querySelector("#modal-root");var T=function(e){var t=e.url,n=e.onClose,o=function(e){"Escape"===e.code&&n()};return Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){return window.removeEventListener("keydown",o)}})),Object(r.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:t,alt:"large img"})})}),L)},B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchQuery:"",showModal:!1,url:""},e.onSubmitHandler=function(t){e.setState({searchQuery:t})},e.onCloseHandler=function(t){e.setState((function(e){return{showModal:!e.showModal,url:t}}))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{onSubmit:this.onSubmitHandler}),Object(j.jsx)(H,{searchQuery:this.state.searchQuery,onClick:this.onCloseHandler}),this.state.showModal&&Object(j.jsx)(T,{url:this.state.url,onClose:this.onCloseHandler}),Object(j.jsx)(w.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),n}(c.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),M()}},[[47,1,2]]]);
//# sourceMappingURL=main.c37dd2ce.chunk.js.map