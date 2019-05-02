/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/scripts/login.js":
/*!*******************************************!*\
  !*** ./resources/assets/scripts/login.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";\n\n(function ($) {\n  var ws = adonis.Ws().connect();\n  ws.on(\"open\", function () {\n    console.log(\"Connected Ws\");\n    SubscribeLogin();\n  });\n  ws.on(\"notification\", function (message) {\n    console.log(message);\n  });\n  ws.on(\"error\", function () {\n    console.log(\"Error Ws\");\n  });\n\n  function SubscribeLogin() {\n    var login = ws.subscribe(\"login\");\n\n    var func = function func() {\n      login.on(\"message\", function (reponse) {\n        console.log(reponse);\n      });\n      $(\"#form-login\").submit(function (e) {\n        e.preventDefault();\n        var email = $(this).find(\"#email\").val();\n        var password = $(this).find(\"#password\").val();\n        login.emit(\"login\", {\n          email: email,\n          password: password\n        });\n      });\n    };\n\n    login.on(\"open\", function () {\n      console.log(\"Connected login\");\n      func();\n    });\n    login.on(\"error\", function (error) {\n      console.log(\"Error Login Subscribe\", error);\n    });\n  }\n})(jQuery);\n\n//# sourceURL=webpack:///./resources/assets/scripts/login.js?");

/***/ }),

/***/ "./resources/assets/scripts/main.js":
/*!******************************************!*\
  !*** ./resources/assets/scripts/main.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./login */ \"./resources/assets/scripts/login.js\");\n\n//# sourceURL=webpack:///./resources/assets/scripts/main.js?");

/***/ }),

/***/ "./resources/assets/scss/style.scss":
/*!******************************************!*\
  !*** ./resources/assets/scss/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./resources/assets/scss/style.scss?");

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./resources/assets/scss/style.scss ./resources/assets/scripts/main.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./resources/assets/scss/style.scss */\"./resources/assets/scss/style.scss\");\nmodule.exports = __webpack_require__(/*! ./resources/assets/scripts/main.js */\"./resources/assets/scripts/main.js\");\n\n\n//# sourceURL=webpack:///multi_./resources/assets/scss/style.scss_./resources/assets/scripts/main.js?");

/***/ })

/******/ });