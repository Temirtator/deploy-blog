webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_tab_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/tab.module.css */ "./styles/tab.module.css");
/* harmony import */ var _styles_tab_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_tab_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Date */ "./components/Date.js");


var _jsxFileName = "/Users/temirlanshagyrov/Desktop/Projects/personal-blog/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var otherPosts = _ref.otherPosts,
      jsPosts = _ref.jsPosts,
      techPosts = _ref.techPosts,
      theme = _ref.theme;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    open: true,
    name: "#js"
  }, {
    open: false,
    name: "#tech"
  }, {
    open: false,
    name: "#others"
  }]),
      tab = _useState[0],
      setTab = _useState[1];

  var selectTab = function selectTab(tabProp) {
    var newTab = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tab);

    for (var i = 0; i < newTab.length; i++) {
      if (tabProp.name == newTab[i].name) {
        newTab[i].open = true;
      } else {
        newTab[i].open = false;
      }
    }

    setTab(newTab);
  };

  var handleClick = function handleClick(tabProp) {
    if (!tabProp.open) {
      selectTab(tabProp);
      localStorage.setItem('category', tabProp.name);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var category = localStorage.getItem('category');

    if (category) {
      selectTab({
        open: false,
        name: category
      });
    } else {
      localStorage.setItem('category', tab[0].name);
    }
  }, []);
  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    home: true,
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__["siteTitle"])), __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.padding1px),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_tab_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, tab.map(function (tabProp, index) {
    return __jsx("h2", {
      key: index,
      className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingLg, " ").concat(theme && _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.whiteText, " ").concat(index != 0 && _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.ml8),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx("a", {
      onClick: function onClick() {
        return handleClick(tabProp);
      },
      className: "".concat(theme ? 'dark' : null, " ").concat(_styles_tab_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tab, " ").concat(tabProp.open && _styles_tab_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.selected),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, tabProp.name));
  })), tab[0].open && __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, jsPosts.map(function (_ref2, index) {
    var _jsx;

    var id = _ref2.id,
        date = _ref2.date,
        title = _ref2.title;
    return __jsx("li", (_jsx = {
      key: index,
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "key", id), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }), _jsx), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/posts/js/[id]",
      as: "/posts/js/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: theme ? 'dark' : null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }, title)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }), __jsx("small", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.lightText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_8__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    })));
  })), tab[1].open && __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, techPosts.map(function (_ref3, index) {
    var _jsx2;

    var id = _ref3.id,
        date = _ref3.date,
        title = _ref3.title;
    return __jsx("li", (_jsx2 = {
      key: index,
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "key", id), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }), _jsx2), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/posts/tech/[id]",
      as: "/posts/tech/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: theme ? 'dark' : null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }, title)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }), __jsx("small", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.lightText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_8__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    })));
  })), tab[2].open && __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, otherPosts.map(function (_ref4, index) {
    var _jsx3;

    var id = _ref4.id,
        date = _ref4.date,
        title = _ref4.title;
    return __jsx("li", (_jsx3 = {
      key: index,
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "key", id), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__source", {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }), _jsx3), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/posts/others/[id]",
      as: "/posts/others/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: theme ? 'dark' : null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, title)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }), __jsx("small", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.lightText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_8__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }
    })));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.f45a7a99d2fb03ccfaf0.hot-update.js.map