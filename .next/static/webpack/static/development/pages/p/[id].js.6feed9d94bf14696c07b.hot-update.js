webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./pages/p/[id].jsx":
/*!**************************!*\
  !*** ./pages/p/[id].jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/dev/lfz/nextjs/pages/p/[id].jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // const Post = () => {
//   const router = useRouter();
//   return (
//     <Layout>
//       <h1>{router.query.id}</h1>
//       <p>This is the blog post content with ID</p>
//     </Layout>
//   );
// }
// const Post = props => (
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//     {props.show.image ? <img src={props.show.image.medium} /> : null}
//   </Layout>
// );
// Post.getInitialProps = async function (context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();
//   console.log(`Fetched show: ${show.name}`); // This console log shows only the browser because it's using client-side navigation.
//   return { show };
// }
// export default Post;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2471469161",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, router.query.id), __jsx("div", {
    className: "jsx-2471469161" + " " + "markdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here's the content.\n          ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2471469161",
    __self: this
  }, ".markdown{font-family:'Nunito',sans-serif;}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rldi9sZnovbmV4dGpzL3BhZ2VzL3AvW2lkXS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURTLEFBRzRDLEFBSVosQUFLVCxBQUlILFNBQ0MsR0FKWixPQUsyQixhQWQzQixZQWVBLE1BWGEsV0FDYiIsImZpbGUiOiIvaG9tZS9kZXYvbGZ6L25leHRqcy9wYWdlcy9wL1tpZF0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cbi8vIGNvbnN0IFBvc3QgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgIDxoMT57cm91dGVyLnF1ZXJ5LmlkfTwvaDE+XG4vLyAgICAgICA8cD5UaGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudCB3aXRoIElEPC9wPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApO1xuLy8gfVxuXG4vLyBjb25zdCBQb3N0ID0gcHJvcHMgPT4gKFxuLy8gICA8TGF5b3V0PlxuLy8gICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XG4vLyAgICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP1twYl0+L2csICcnKX08L3A+XG4vLyAgICAge3Byb3BzLnNob3cuaW1hZ2UgPyA8aW1nIHNyYz17cHJvcHMuc2hvdy5pbWFnZS5tZWRpdW19IC8+IDogbnVsbH1cbi8vICAgPC9MYXlvdXQ+XG4vLyApO1xuXG4vLyBQb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YCk7XG4vLyAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xuXG4vLyAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApOyAvLyBUaGlzIGNvbnNvbGUgbG9nIHNob3dzIG9ubHkgdGhlIGJyb3dzZXIgYmVjYXVzZSBpdCdzIHVzaW5nIGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXG5cbi8vICAgcmV0dXJuIHsgc2hvdyB9O1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+e3JvdXRlci5xdWVyeS5pZH08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICAgICA8TWFya2Rvd25cbiAgICAgICAgICBzb3VyY2U9e2BcblRoaXMgaXMgb3VyIGJsb2cgcG9zdC5cblllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxuQW5kIHdlIGNhbiBoYXZlIGEgdGl0bGUgYXMgd2VsbC5cblxuIyMjIFRoaXMgaXMgYSB0aXRsZVxuXG5BbmQgaGVyZSdzIHRoZSBjb250ZW50LlxuICAgICAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAubWFya2Rvd24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXJrZG93biBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAubWFya2Rvd24gYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hcmtkb3duIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/home/dev/lfz/nextjs/pages/p/[id].jsx */"));
});

/***/ })

})
//# sourceMappingURL=[id].js.6feed9d94bf14696c07b.hot-update.js.map