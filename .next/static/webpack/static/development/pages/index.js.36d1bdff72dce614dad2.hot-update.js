webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // supports client side routing


 // Link is an HOC that accepts href and similar props
// child components must accept 'onClick' prop
// dynamic pages using query strings
// const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );
// const Index = () => (
//     <Layout>
//         <h1>My Blog</h1>
//         <ul>
//             <PostLink title="Hello Next.js" />
//             <PostLink title="Learn Next.js" />
//             <PostLink title="Deploy apps with Zeit" />
//         </ul>
//         <p>Hello Next.js</p>
//     </Layout>
// );
// dyanmic pages using route masking - clean urls

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-2847547565"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.id)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2847547565"
  }, props.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2847547565",
    css: "a.jsx-2847547565{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUdzQyxrREFDekIiLCJmaWxlIjoiL1VzZXJzL0p1aWNlZDEvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjsgLy8gc3VwcG9ydHMgY2xpZW50IHNpZGUgcm91dGluZ1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbi8vIExpbmsgaXMgYW4gSE9DIHRoYXQgYWNjZXB0cyBocmVmIGFuZCBzaW1pbGFyIHByb3BzXG4vLyBjaGlsZCBjb21wb25lbnRzIG11c3QgYWNjZXB0ICdvbkNsaWNrJyBwcm9wXG5cbi8vIGR5bmFtaWMgcGFnZXMgdXNpbmcgcXVlcnkgc3RyaW5nc1xuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4vLyAgICAgPGxpPlxuLy8gICAgICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vICAgICAgICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4vLyAgICAgICAgIDwvTGluaz5cbi8vICAgICA8L2xpPlxuLy8gKTtcblxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cbi8vICAgICAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkxlYXJuIE5leHQuanNcIiAvPlxuLy8gICAgICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cbi8vICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbi8vICAgICA8L0xheW91dD5cbi8vICk7XG5cbi8vIGR5YW5taWMgcGFnZXMgdXNpbmcgcm91dGUgbWFza2luZyAtIGNsZWFuIHVybHNcbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuICAgIDxsaT5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLmlkfWB9PlxuICAgICAgICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuKTtcblxuY29uc3QgU2hvd0xpbmsgPSBwcm9wcyA9PiAoXG4gICAgPGxpPlxuICAgICAgICA8TGlua1xuICAgICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgICAgIGFzPXtgL3MvJHtwcm9wcy5zaG93LmlkfWB9XG4gICAgICAgICAgICBocmVmPXtgL3Nob3c/aWQ9JHtwcm9wcy5zaG93LmlkfWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxhPntwcm9wcy5zaG93Lm5hbWV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiIC8+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiB0aXRsZT1cIkxlYXJuIE5leHQuanNcIiAvPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyPkhlbGxvIE5leHQuanM8L2gyPlxuICAgICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Byb3BzLnNob3dzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8U2hvd0xpbmsgc2hvdz17aXRlbS5zaG93fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hblwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dzOiBkYXRhXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/index.js */"
  }));
};

var ShowLink = function ShowLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-2847547565"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    as: "/s/".concat(props.show.id),
    href: "/show?id=".concat(props.show.id)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2847547565"
  }, props.show.name)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2847547565",
    css: "a.jsx-2847547565{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RvQixBQUdzQyxrREFDekIiLCJmaWxlIjoiL1VzZXJzL0p1aWNlZDEvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjsgLy8gc3VwcG9ydHMgY2xpZW50IHNpZGUgcm91dGluZ1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbi8vIExpbmsgaXMgYW4gSE9DIHRoYXQgYWNjZXB0cyBocmVmIGFuZCBzaW1pbGFyIHByb3BzXG4vLyBjaGlsZCBjb21wb25lbnRzIG11c3QgYWNjZXB0ICdvbkNsaWNrJyBwcm9wXG5cbi8vIGR5bmFtaWMgcGFnZXMgdXNpbmcgcXVlcnkgc3RyaW5nc1xuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4vLyAgICAgPGxpPlxuLy8gICAgICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vICAgICAgICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4vLyAgICAgICAgIDwvTGluaz5cbi8vICAgICA8L2xpPlxuLy8gKTtcblxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cbi8vICAgICAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkxlYXJuIE5leHQuanNcIiAvPlxuLy8gICAgICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cbi8vICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbi8vICAgICA8L0xheW91dD5cbi8vICk7XG5cbi8vIGR5YW5taWMgcGFnZXMgdXNpbmcgcm91dGUgbWFza2luZyAtIGNsZWFuIHVybHNcbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuICAgIDxsaT5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLmlkfWB9PlxuICAgICAgICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2xpPlxuKTtcblxuY29uc3QgU2hvd0xpbmsgPSBwcm9wcyA9PiAoXG4gICAgPGxpPlxuICAgICAgICA8TGlua1xuICAgICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgICAgIGFzPXtgL3MvJHtwcm9wcy5zaG93LmlkfWB9XG4gICAgICAgICAgICBocmVmPXtgL3Nob3c/aWQ9JHtwcm9wcy5zaG93LmlkfWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxhPntwcm9wcy5zaG93Lm5hbWV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiIC8+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiB0aXRsZT1cIkxlYXJuIE5leHQuanNcIiAvPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyPkhlbGxvIE5leHQuanM8L2gyPlxuICAgICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Byb3BzLnNob3dzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8U2hvd0xpbmsgc2hvdz17aXRlbS5zaG93fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hblwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dzOiBkYXRhXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/index.js */"
  }));
};

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-743610626"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-743610626"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostLink, {
    id: "hello-nextjs",
    title: "Hello Next.js"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostLink, {
    id: "learn-nextjs",
    title: "Learn Next.js"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostLink, {
    id: "deploy-nextjs",
    title: "Deploy apps with Zeit"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-743610626"
  }, "Hello Next.js"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-743610626"
  }, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-743610626"
  }, props.shows.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ShowLink, {
      show: item.show
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "743610626",
    css: "ul.jsx-743610626{border:1px solid red;height:10vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvQixBQUdzQyxxQkFDVCxZQUNDLDBFQUNTLDhFQUNPLDJIQUNqQyIsImZpbGUiOiIvVXNlcnMvSnVpY2VkMS9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiOyAvLyBzdXBwb3J0cyBjbGllbnQgc2lkZSByb3V0aW5nXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiO1xuLy8gTGluayBpcyBhbiBIT0MgdGhhdCBhY2NlcHRzIGhyZWYgYW5kIHNpbWlsYXIgcHJvcHNcbi8vIGNoaWxkIGNvbXBvbmVudHMgbXVzdCBhY2NlcHQgJ29uQ2xpY2snIHByb3BcblxuLy8gZHluYW1pYyBwYWdlcyB1c2luZyBxdWVyeSBzdHJpbmdzXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbi8vICAgICA8bGk+XG4vLyAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuLy8gICAgICAgICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cbi8vICAgICAgICAgPC9MaW5rPlxuLy8gICAgIDwvbGk+XG4vLyApO1xuXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcbi8vICAgICA8TGF5b3V0PlxuLy8gICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4vLyAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkhlbGxvIE5leHQuanNcIiAvPlxuLy8gICAgICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiTGVhcm4gTmV4dC5qc1wiIC8+XG4vLyAgICAgICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gKTtcblxuLy8gZHlhbm1pYyBwYWdlcyB1c2luZyByb3V0ZSBtYXNraW5nIC0gY2xlYW4gdXJsc1xuY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4gICAgPGxpPlxuICAgICAgICA8TGluayBwcmVmZXRjaCBhcz17YC9wLyR7cHJvcHMuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMuaWR9YH0+XG4gICAgICAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBTaG93TGluayA9IHByb3BzID0+IChcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgYXM9e2Avcy8ke3Byb3BzLnNob3cuaWR9YH1cbiAgICAgICAgICAgIGhyZWY9e2Avc2hvdz9pZD0ke3Byb3BzLnNob3cuaWR9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGE+e3Byb3BzLnNob3cubmFtZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbik7XG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIHRpdGxlPVwiTGVhcm4gTmV4dC5qc1wiIC8+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDI+SGVsbG8gTmV4dC5qczwvaDI+XG4gICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTaG93TGluayBzaG93PXtpdGVtLnNob3d9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd3M6IGRhdGFcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/index.js */"
  }));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.tvmaze.com/search/shows?q=batman");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            shows: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.36d1bdff72dce614dad2.hot-update.js.map