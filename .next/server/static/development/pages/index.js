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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Card.css":
/*!************************!*\
  !*** ./pages/Card.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL0NhcmQuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Card.css\n");

/***/ }),

/***/ "./pages/Card.js":
/*!***********************!*\
  !*** ./pages/Card.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.css */ \"./pages/Card.css\");\n/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Card = props => __jsx(\"div\", {\n  className: \"card\"\n}, __jsx(\"div\", {\n  className: \"front\"\n}, __jsx(\"img\", {\n  src: \"/public/juice.jpg\",\n  alt: \"Avatar\",\n  className: \"card-image\"\n}), __jsx(\"div\", {\n  className: \"container\"\n}, __jsx(\"h3\", null, \"Vitamin Juice \", __jsx(\"span\", {\n  className: \"price\"\n}, \"$24.99\")), __jsx(\"p\", null, \"Need a jump on your vitamins while drinking? Tired of popping the pills? Drink our vitamin enhanced juice, available in several flavours.\"))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9DYXJkLmpzPzkzZTEiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQ1g7QUFBSyxXQUFTLEVBQUM7QUFBZixHQUNFO0FBQUssV0FBUyxFQUFDO0FBQWYsR0FDRTtBQUFLLEtBQUcsRUFBQyxtQkFBVDtBQUE2QixLQUFHLEVBQUMsUUFBakM7QUFBMEMsV0FBUyxFQUFDO0FBQXBELEVBREYsRUFFRTtBQUFLLFdBQVMsRUFBQztBQUFmLEdBQ0Usb0NBQ2dCO0FBQU0sV0FBUyxFQUFDO0FBQWhCLFlBRGhCLENBREYsRUFJRSw2SkFKRixDQUZGLENBREYsQ0FERjs7QUFrQmVELG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9DYXJkLmNzcyc7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmcm9udCc+XG4gICAgICA8aW1nIHNyYz0nL3B1YmxpYy9qdWljZS5qcGcnIGFsdD0nQXZhdGFyJyBjbGFzc05hbWU9J2NhcmQtaW1hZ2UnIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIFZpdGFtaW4gSnVpY2UgPHNwYW4gY2xhc3NOYW1lPSdwcmljZSc+JDI0Ljk5PC9zcGFuPlxuICAgICAgICA8L2gzPlxuICAgICAgICA8cD5cbiAgICAgICAgICBOZWVkIGEganVtcCBvbiB5b3VyIHZpdGFtaW5zIHdoaWxlIGRyaW5raW5nPyBUaXJlZCBvZiBwb3BwaW5nIHRoZVxuICAgICAgICAgIHBpbGxzPyBEcmluayBvdXIgdml0YW1pbiBlbmhhbmNlZCBqdWljZSwgYXZhaWxhYmxlIGluIHNldmVyYWxcbiAgICAgICAgICBmbGF2b3Vycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Card.js\n");

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./pages/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./pages/Card.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  className: \"App\"\n}, __jsx(\"header\", {\n  className: \"App-header\"\n}, __jsx(\"img\", {\n  src: \"/public/logo.png\",\n  className: \"static-logo\",\n  alt: \"logo\"\n})), __jsx(\"div\", {\n  className: \"Grid\"\n}, __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLHFFQUNiO0FBQUssV0FBUyxFQUFDO0FBQWYsR0FDRTtBQUFRLFdBQVMsRUFBQztBQUFsQixHQUNFO0FBQUssS0FBRyxFQUFDLGtCQUFUO0FBQTRCLFdBQVMsRUFBQyxhQUF0QztBQUFvRCxLQUFHLEVBQUM7QUFBeEQsRUFERixDQURGLEVBSUU7QUFBSyxXQUFTLEVBQUM7QUFBZixHQUNFLE1BQUMsNkNBQUQsT0FERixFQUVFLE1BQUMsNkNBQUQsT0FGRixFQUdFLE1BQUMsNkNBQUQsT0FIRixFQUlFLE1BQUMsNkNBQUQsT0FKRixFQUtFLE1BQUMsNkNBQUQsT0FMRixFQU1FLE1BQUMsNkNBQUQsT0FORixDQUpGLENBREYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT0nQXBwLWhlYWRlcic+XG4gICAgICA8aW1nIHNyYz0nL3B1YmxpYy9sb2dvLnBuZycgY2xhc3NOYW1lPSdzdGF0aWMtbG9nbycgYWx0PSdsb2dvJyAvPlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdHcmlkJz5cbiAgICAgIDxDYXJkIC8+XG4gICAgICA8Q2FyZCAvPlxuICAgICAgPENhcmQgLz5cbiAgICAgIDxDYXJkIC8+XG4gICAgICA8Q2FyZCAvPlxuICAgICAgPENhcmQgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/romulo/Documents/dev/linkedin learning/ssr2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });