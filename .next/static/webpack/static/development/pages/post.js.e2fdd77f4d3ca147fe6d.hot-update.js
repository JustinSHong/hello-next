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
    className: "jsx-2957666185"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2957666185"
  }, props.router.query.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2957666185"
  }, "this is the blog post content."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2957666185" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: "\n            This is our blog post.\n            Yes. We can have a [link](/link).\n            And we can have a title as well.\n            \n            ### This is a title\n            \n            And here's the content.\n        "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2957666185",
    css: ".markdown.jsx-2957666185{font-family:\"Arial\";}.markdown.jsx-2957666185 a.jsx-2957666185{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown.jsx-2957666185 a.jsx-2957666185:hover{opacity:0.6;}.markdown.jsx-2957666185 h3.jsx-2957666185{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm9CLEFBR3FDLEFBSUMsQUFLVCxBQUlILFNBQ0MsR0FKZCxPQUs2QixDQWQ3Qix3QkFlQSxNQVhlLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL0p1aWNlZDEvaGVsbG8tbmV4dC9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xuXG4vLyB3aXRoUm91dGVyKCkgaW5qZWN0cyB0aGUgcm91dGVyIGZyb20gTmV4dC5qcyBhcyBhIHByb3Bcbi8vIHF1ZXJ5IHN0cmluZyBwYXJhbXMgYXJlIHN0b3JlZCBpbiB0aGUgcm91dGVyJ3MgcXVlcnkgb2JqZWN0XG4vLyB3aXRoUm91dGVyIGNhbiBiZSB1c2VkIG9uIGFueSBjb21wb25lbnRcblxuY29uc3QgQ29udGVudCA9IHdpdGhSb3V0ZXIocHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT57cHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPnRoaXMgaXMgdGhlIGJsb2cgcG9zdCBjb250ZW50LjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBUaGlzIGlzIG91ciBibG9nIHBvc3QuXG4gICAgICAgICAgICBZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbiAgICAgICAgICAgIEFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICMjIyBUaGlzIGlzIGEgdGl0bGVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgICAgYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWFya2Rvd24ge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXJrZG93biBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXJrZG93biBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXJrZG93biBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSk7XG5cbmNvbnN0IFBhZ2UgPSB3aXRoUm91dGVyKHByb3BzID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8Q29udGVudCAvPlxuICAgIDwvTGF5b3V0PlxuKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/post.js */"
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
//# sourceMappingURL=post.js.e2fdd77f4d3ca147fe6d.hot-update.js.map