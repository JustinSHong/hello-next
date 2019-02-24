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
    className: "jsx-3350585856"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3350585856"
  }, props.router.query.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3350585856"
  }, "this is the blog post content."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3350585856" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: "\n            This is our blog post.\n            Yes. We can have a [link](/link).\n            And we can have a title as well.\n            \n            ### This is a title\n            \n            And here's the content.\n        "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3350585856",
    css: "body{background:#ff7961;}.markdown{font-family:\"Arial\";background-color:#0043ca;color:#eee;}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QjJCLEFBR29DLEFBR0MsQUFNQyxBQUtULEFBSUgsU0FDQyxHQUpkLE9BZEEsQUFtQjZCLENBaEJBLHdCQWlCN0IsQ0FoQmUsS0FLQSxNQUpmLEtBS0EiLCJmaWxlIjoiL1VzZXJzL0p1aWNlZDEvaGVsbG8tbmV4dC9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xuXG4vLyB3aXRoUm91dGVyKCkgaW5qZWN0cyB0aGUgcm91dGVyIGZyb20gTmV4dC5qcyBhcyBhIHByb3Bcbi8vIHF1ZXJ5IHN0cmluZyBwYXJhbXMgYXJlIHN0b3JlZCBpbiB0aGUgcm91dGVyJ3MgcXVlcnkgb2JqZWN0XG4vLyB3aXRoUm91dGVyIGNhbiBiZSB1c2VkIG9uIGFueSBjb21wb25lbnRcblxuY29uc3QgQ29udGVudCA9IHdpdGhSb3V0ZXIocHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT57cHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPnRoaXMgaXMgdGhlIGJsb2cgcG9zdCBjb250ZW50LjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICAgICAgICAgPE1hcmtkb3duXG4gICAgICAgICAgICAgICAgc291cmNlPXtgXG4gICAgICAgICAgICBUaGlzIGlzIG91ciBibG9nIHBvc3QuXG4gICAgICAgICAgICBZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbiAgICAgICAgICAgIEFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICMjIyBUaGlzIGlzIGEgdGl0bGVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgICAgYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNzk2MTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYXJrZG93biB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0M2NhO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFya2Rvd24gYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFya2Rvd24gaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbikpO1xuXG5jb25zdCBQYWdlID0gd2l0aFJvdXRlcihwcm9wcyA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPENvbnRlbnQgLz5cbiAgICA8L0xheW91dD5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/post.js */"
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
//# sourceMappingURL=post.js.6ddb88cd4b6f54bca77e.hot-update.js.map