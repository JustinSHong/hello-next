module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-115635007"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-115635007"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-115635007"
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "115635007",
    css: "nav.jsx-115635007{background-color:#536dfe;}a.jsx-115635007{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW9CLEFBRzBDLEFBR0oseUJBRnpCLHlCQUdBIiwiZmlsZSI6Ii9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGxpbmtTdHlsZSA9IHsgbWFyZ2luUmlnaHQ6IDE1IH07XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8bmF2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzZkZmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/Juiced1/hello-next/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-980470892"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "980470892",
    css: "div.jsx-980470892{border:1px solid #ddd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:20px;padding:20px;min-height:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvY29tcG9uZW50cy9NeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNb0IsQUFHdUMsc0JBQ1QsMEVBQ0UseURBQ08sOEVBQ0sseUdBQ0osNkdBQ1gsWUFDQyxhQUNHLGdCQUNwQiIsImZpbGUiOiIvVXNlcnMvSnVpY2VkMS9oZWxsby1uZXh0L2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/Juiced1/hello-next/components/MyLayout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // supports client side routing


 // Link is an HOC that accepts href and similar props
// child components must accept 'onClick' prop

var getPosts = function getPosts() {
  return [{
    id: "hello-nextjs",
    title: "Hello Next.js"
  }, {
    id: "learn-nextjs",
    title: "Learn Next.js is awesome"
  }, {
    id: "deploy-nextjs",
    title: "Deploy apps with ZEIT"
  }];
}; // dyanmic pages using route masking - clean urls


var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-3745473867"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3745473867"
  }, post.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3745473867",
    css: "a.jsx-3745473867{-webkit-text-decoration:none;text-decoration:none;}li.jsx-3745473867{list-style:none;margin:5px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUdzQyxBQUdMLGdCQUNILGFBQ2pCLHFCQUpBIiwiZmlsZSI6Ii9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7IC8vIHN1cHBvcnRzIGNsaWVudCBzaWRlIHJvdXRpbmdcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCI7XG4vLyBMaW5rIGlzIGFuIEhPQyB0aGF0IGFjY2VwdHMgaHJlZiBhbmQgc2ltaWxhciBwcm9wc1xuLy8gY2hpbGQgY29tcG9uZW50cyBtdXN0IGFjY2VwdCAnb25DbGljaycgcHJvcFxuXG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IGlkOiBcImhlbGxvLW5leHRqc1wiLCB0aXRsZTogXCJIZWxsbyBOZXh0LmpzXCIgfSxcbiAgICAgICAgeyBpZDogXCJsZWFybi1uZXh0anNcIiwgdGl0bGU6IFwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgfSxcbiAgICAgICAgeyBpZDogXCJkZXBsb3ktbmV4dGpzXCIsIHRpdGxlOiBcIkRlcGxveSBhcHBzIHdpdGggWkVJVFwiIH1cbiAgICBdO1xufTtcblxuLy8gZHlhbm1pYyBwYWdlcyB1c2luZyByb3V0ZSBtYXNraW5nIC0gY2xlYW4gdXJsc1xuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rIHByZWZldGNoIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBTaG93TGluayA9IHByb3BzID0+IChcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgYXM9e2Avcy8ke3Byb3BzLnNob3cuaWR9YH1cbiAgICAgICAgICAgIGhyZWY9e2Avc2hvdz9pZD0ke3Byb3BzLnNob3cuaWR9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGE+e3Byb3BzLnNob3cubmFtZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMj5IZWxsbyBOZXh0LmpzPC9oMj5cbiAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwcm9wcy5zaG93cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFNob3dMaW5rIHNob3c9e2l0ZW0uc2hvd30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW5cIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93czogZGF0YVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/index.js */"
  }));
};

var ShowLink = function ShowLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-3745473867"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    as: "/s/".concat(props.show.id),
    href: "/show?id=".concat(props.show.id)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3745473867"
  }, props.show.name)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3745473867",
    css: "a.jsx-3745473867{-webkit-text-decoration:none;text-decoration:none;}li.jsx-3745473867{list-style:none;margin:5px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNvQixBQUdzQyxBQUdMLGdCQUNILGFBQ2pCLHFCQUpBIiwiZmlsZSI6Ii9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7IC8vIHN1cHBvcnRzIGNsaWVudCBzaWRlIHJvdXRpbmdcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCI7XG4vLyBMaW5rIGlzIGFuIEhPQyB0aGF0IGFjY2VwdHMgaHJlZiBhbmQgc2ltaWxhciBwcm9wc1xuLy8gY2hpbGQgY29tcG9uZW50cyBtdXN0IGFjY2VwdCAnb25DbGljaycgcHJvcFxuXG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IGlkOiBcImhlbGxvLW5leHRqc1wiLCB0aXRsZTogXCJIZWxsbyBOZXh0LmpzXCIgfSxcbiAgICAgICAgeyBpZDogXCJsZWFybi1uZXh0anNcIiwgdGl0bGU6IFwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgfSxcbiAgICAgICAgeyBpZDogXCJkZXBsb3ktbmV4dGpzXCIsIHRpdGxlOiBcIkRlcGxveSBhcHBzIHdpdGggWkVJVFwiIH1cbiAgICBdO1xufTtcblxuLy8gZHlhbm1pYyBwYWdlcyB1c2luZyByb3V0ZSBtYXNraW5nIC0gY2xlYW4gdXJsc1xuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rIHByZWZldGNoIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBTaG93TGluayA9IHByb3BzID0+IChcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgYXM9e2Avcy8ke3Byb3BzLnNob3cuaWR9YH1cbiAgICAgICAgICAgIGhyZWY9e2Avc2hvdz9pZD0ke3Byb3BzLnNob3cuaWR9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGE+e3Byb3BzLnNob3cubmFtZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMj5IZWxsbyBOZXh0LmpzPC9oMj5cbiAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwcm9wcy5zaG93cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFNob3dMaW5rIHNob3c9e2l0ZW0uc2hvd30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW5cIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93czogZGF0YVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/index.js */"
  }));
};

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2638539274"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-2638539274"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostLink, {
      key: post.id,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-2638539274"
  }, "Hello Next.js"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2638539274"
  }, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-2638539274"
  }, props.shows.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ShowLink, {
      show: item.show
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2638539274",
    css: "ul.jsx-2638539274{height:200px;min-width:25%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VvQixBQUc4QixhQUNDLGNBQ0QsMEVBQ1MsOEVBQ08sMkhBQ2pDIiwiZmlsZSI6Ii9Vc2Vycy9KdWljZWQxL2hlbGxvLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7IC8vIHN1cHBvcnRzIGNsaWVudCBzaWRlIHJvdXRpbmdcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCI7XG4vLyBMaW5rIGlzIGFuIEhPQyB0aGF0IGFjY2VwdHMgaHJlZiBhbmQgc2ltaWxhciBwcm9wc1xuLy8gY2hpbGQgY29tcG9uZW50cyBtdXN0IGFjY2VwdCAnb25DbGljaycgcHJvcFxuXG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IGlkOiBcImhlbGxvLW5leHRqc1wiLCB0aXRsZTogXCJIZWxsbyBOZXh0LmpzXCIgfSxcbiAgICAgICAgeyBpZDogXCJsZWFybi1uZXh0anNcIiwgdGl0bGU6IFwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgfSxcbiAgICAgICAgeyBpZDogXCJkZXBsb3ktbmV4dGpzXCIsIHRpdGxlOiBcIkRlcGxveSBhcHBzIHdpdGggWkVJVFwiIH1cbiAgICBdO1xufTtcblxuLy8gZHlhbm1pYyBwYWdlcyB1c2luZyByb3V0ZSBtYXNraW5nIC0gY2xlYW4gdXJsc1xuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rIHByZWZldGNoIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBTaG93TGluayA9IHByb3BzID0+IChcbiAgICA8bGk+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgYXM9e2Avcy8ke3Byb3BzLnNob3cuaWR9YH1cbiAgICAgICAgICAgIGhyZWY9e2Avc2hvdz9pZD0ke3Byb3BzLnNob3cuaWR9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGE+e3Byb3BzLnNob3cubmFtZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMj5IZWxsbyBOZXh0LmpzPC9oMj5cbiAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwcm9wcy5zaG93cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFNob3dMaW5rIHNob3c9e2l0ZW0uc2hvd30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW5cIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93czogZGF0YVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/Juiced1/hello-next/pages/index.js */"
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

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map