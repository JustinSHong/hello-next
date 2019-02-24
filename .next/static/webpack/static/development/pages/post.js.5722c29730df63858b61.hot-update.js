webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");




 // withRouter() injects the router from Next.js as a prop
// query string params are stored in the router's query object
// withRouter can be used on any component

var Content = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3541638902"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3541638902"
  }, props.router.query.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3541638902"
  }, "this is the blog post content."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3541638902" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: "\n            This is our blog post.\n            Yes. We can have a [link](/link).\n            And we can have a title as well.\n            \n            ### This is a title\n            \n            And here's the content.\n        "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3541638902",
    css: ".markdown{font-family:\"Arial\";background-color:#0043ca;color:#eee;}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QjJCLEFBR3FDLEFBTUMsQUFLVCxBQUlILFNBQ0MsR0FKZCxPQUs2QixDQWhCQSx3QkFpQjdCLENBaEJlLEtBS0EsTUFKZixLQUtBIiwiZmlsZSI6Ii9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcblxuLy8gd2l0aFJvdXRlcigpIGluamVjdHMgdGhlIHJvdXRlciBmcm9tIE5leHQuanMgYXMgYSBwcm9wXG4vLyBxdWVyeSBzdHJpbmcgcGFyYW1zIGFyZSBzdG9yZWQgaW4gdGhlIHJvdXRlcidzIHF1ZXJ5IG9iamVjdFxuLy8gd2l0aFJvdXRlciBjYW4gYmUgdXNlZCBvbiBhbnkgY29tcG9uZW50XG5cbmNvbnN0IENvbnRlbnQgPSB3aXRoUm91dGVyKHByb3BzID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8aDE+e3Byb3BzLnJvdXRlci5xdWVyeS50aXRsZX08L2gxPlxuICAgICAgICA8cD50aGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudC48L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIj5cbiAgICAgICAgICAgIDxNYXJrZG93blxuICAgICAgICAgICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgVGhpcyBpcyBvdXIgYmxvZyBwb3N0LlxuICAgICAgICAgICAgWWVzLiBXZSBjYW4gaGF2ZSBhIFtsaW5rXSgvbGluaykuXG4gICAgICAgICAgICBBbmQgd2UgY2FuIGhhdmUgYSB0aXRsZSBhcyB3ZWxsLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAjIyMgVGhpcyBpcyBhIHRpdGxlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEFuZCBoZXJlJ3MgdGhlIGNvbnRlbnQuXG4gICAgICAgIGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIC5tYXJrZG93biB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0M2NhO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFya2Rvd24gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFya2Rvd24gaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbikpO1xuXG5jb25zdCBQYWdlID0gd2l0aFJvdXRlcihwcm9wcyA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPENvbnRlbnQgLz5cbiAgICA8L0xheW91dD5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/post.js */"
  }));
});
var Page = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null));
});
/* harmony default export */ __webpack_exports__["default"] = (Page);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.5722c29730df63858b61.hot-update.js.map