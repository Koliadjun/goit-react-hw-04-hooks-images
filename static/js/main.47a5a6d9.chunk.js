(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,n){e.exports={Button:"button_Button__Hax0N"}},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(17),n(18),n(19),n(3)),i=n(4),l=n(6),u=n(5),h=(n(20),n(21),n(22),n(1)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchInputValue:""},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchInputValue),e.setState({searchInputValue:""})},e.onChange=function(t){e.setState({searchInputValue:t.currentTarget.value.toLowerCase()})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{onChange:this.onChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchInputValue})]})})})}}]),n}(a.Component),d=n(9),b=n(11),j=n.n(b),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.src,n=e.onClick,a=e.largeImg;return Object(h.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return n(a)},children:Object(h.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image"})})}}]),n}(a.Component),g=n(2),f=n.n(g),O=n(12),v=n.n(O),y=function(e){var t=e.children,n=e.onClick;return Object(h.jsx)("button",{className:v.a.Button,type:"button",onClick:n,children:t})};y.propType={children:f.a.element,onClick:f.a.func.isRequired};var C=y,k=n(8),x="https://pixabay.com/api/?key=21859893-eed1f1d786560e2667ad1f26b&image_type=photo&orientation=horizontal",S="idle",w="pending",F="rejected",H="resolved",I={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,perPage:12,status:S,error:null},e.fetchData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=e.state.perPage,a=e.props.searchQuery;return e.setState({status:w}),fetch("".concat(x,"&q=").concat(a,"&per_page=").concat(n,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){if(0===e.hits.length)throw new Error('\u041d\u0435\u043c\u0430\u0454 \u0444\u043e\u0442\u043e \u0437\u0430 \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c "'.concat(a,'"'));return e}))},e.loadMoreClickHandler=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;e.searchQuery!==this.props.searchQuery&&this.fetchData().then((function(e){return n.setState({images:Object(d.a)(e.hits),page:1,status:H})})).catch((function(e){n.setState({status:F,error:e}),k.b.error("".concat(e.message),I)})),t.page!==this.state.page&&this.state.page>1&&e.searchQuery===this.props.searchQuery&&this.fetchData(this.state.page).then((function(e){return n.setState({images:[].concat(Object(d.a)(t.images),Object(d.a)(e.hits)),status:H})})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){n.setState({status:F,error:e}),k.b.error("".concat(e.message),I)}))}},{key:"render",value:function(){var e=this,t=this.state.status;return t===S?Object(h.jsx)("h2",{className:"title",children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0442"}):t===w?Object(h.jsx)("div",{className:"loaderWrapper",children:Object(h.jsx)(j.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})}):t===F?(setTimeout((function(){e.setState({status:S})}),5e3),Object(h.jsx)(h.Fragment,{})):t===H?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"ImageGallery",children:this.state.images.map((function(t){return Object(h.jsx)(m,{src:t.webformatURL,largeImg:t.largeImageURL,onClick:e.props.onClick},t.id)}))}),Object(h.jsx)("div",{className:"buttonWrapper",children:Object(h.jsx)(C,{onClick:this.loadMoreClickHandler,children:"Load more"})})]}):void 0}}]),n}(a.Component),D=document.querySelector("#modal-root"),P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.keyPressHandler=function(t){"Escape"===t.code&&e.props.onClose()},e.backDropClickHandle=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyPressHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyPressHandler)}},{key:"render",value:function(){return Object(o.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.backDropClickHandle,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.url,alt:"large img"})})}),D)}}]),n}(a.Component),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",showModal:!1,url:""},e.onSubmitHandler=function(t){e.setState({searchQuery:t})},e.onCloseHandler=function(t){e.setState((function(e){return{showModal:!e.showModal,url:t}}))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{onSubmit:this.onSubmitHandler}),Object(h.jsx)(N,{searchQuery:this.state.searchQuery,onClick:this.onCloseHandler}),this.state.showModal&&Object(h.jsx)(P,{url:this.state.url,onClose:this.onCloseHandler}),Object(h.jsx)(k.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),n}(a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),M()}},[[44,1,2]]]);
//# sourceMappingURL=main.47a5a6d9.chunk.js.map