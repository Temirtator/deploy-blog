webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle/index */ "./components/toggle/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.module.css */ "./components/header/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/temirlan/Desktop/personal-blog/components/header/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var name = 'Personal blog by ';
var desc = "Let's discuss almost everything";
function Header(_ref) {
  var theme = _ref.theme,
      setTheme = _ref.setTheme;
  return __jsx("header", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/avatar.jpg",
    className: "".concat(_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerImage, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.borderCircle),
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header_right_side,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ml8, " ").concat(_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.blog_description),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingLw, " ").concat(theme ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.whiteText : null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, name, __jsx("a", {
    className: "".concat(theme ? 'dark' : null, " ").concat(_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.linkToInstagram),
    target: "_blank",
    href: "https://www.instagram.com/temirtator23/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "Shagyrov Temirlan")), __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, desc)), __jsx(_toggle_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selected: theme,
    toggleSelected: function toggleSelected() {
      setTheme(!theme);
      localStorage.setItem('theme', !theme ? 'dark' : 'light');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })));
}
;

/***/ })

})
//# sourceMappingURL=_app.js.f91fb629a01bedfda9df.hot-update.js.map