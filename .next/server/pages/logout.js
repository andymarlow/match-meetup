"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.js":
/*!*************************!*\
  !*** ./pages/logout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst logout = ()=>{\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(session);\n    if (session) {\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n    }\n    if (status === \"unauthenticated\") {\n        setTimeout(()=>{\n            sessionStorage.clear();\n            push(\"/\");\n        }, 1000);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"relative flex items-center font-bold justify-center h-screen sm:text-lg md:text-xl lg:text-3xl xl:text-5xl\",\n            children: \"You are successfully signed out!\"\n        }, void 0, false, {\n            fileName: \"/Users/kundaniel/Desktop/Northcoders/northcoders/Projects/match-meetup/pages/logout.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDNEI7QUFDZDtBQUV4QyxNQUFNSSxNQUFNLEdBQUcsSUFBTTtJQUNuQixNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxHQUFFQyxNQUFNLEdBQUUsR0FBR04sMkRBQVUsRUFBRTtJQUM5QyxNQUFNLEVBQUVPLElBQUksR0FBRSxHQUFHTCxzREFBUyxFQUFFO0lBQzVCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDLENBQUM7SUFFckIsSUFBSUEsT0FBTyxFQUFFO1FBQ1hKLHdEQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUFJSyxNQUFNLEtBQUssaUJBQWlCLEVBQUU7UUFDaENJLFVBQVUsQ0FBQyxJQUFNO1lBQ2ZDLGNBQWMsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7WUFDdkJMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULHFCQUNFLDhEQUFDTSxJQUFFO1lBQUNDLFNBQVMsRUFBQyw0R0FBNEc7c0JBQUMsa0NBRTNIOzs7OztxQkFBSyxDQUNMO0lBQ0osQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVgsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXRhLWZyb20tYXBpLy4vcGFnZXMvbG9nb3V0LmpzP2FjNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgc2lnbk91dCgpO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgIHB1c2goXCIvXCIpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBmb250LWJvbGQganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gc206dGV4dC1sZyBtZDp0ZXh0LXhsIGxnOnRleHQtM3hsIHhsOnRleHQtNXhsXCI+XG4gICAgICAgIFlvdSBhcmUgc3VjY2Vzc2Z1bGx5IHNpZ25lZCBvdXQhXG4gICAgICA8L2gxPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ291dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwidXNlUm91dGVyIiwibG9nb3V0IiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJzZXNzaW9uU3RvcmFnZSIsImNsZWFyIiwiaDEiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/logout.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/logout.js"));
module.exports = __webpack_exports__;

})();