module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/register.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/form-control */ "@chakra-ui/form-control");
/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/input */ "@chakra-ui/input");
/* harmony import */ var _chakra_ui_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\OmniCommerce\\omnicommerceclient\\src\\components\\InputField.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const InputField = props => {
  const [field, meta, helper] = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useField"])(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    isInvalid: !!meta.error,
    my: 8,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_input__WEBPACK_IMPORTED_MODULE_2__["Input"], _objectSpread(_objectSpread({}, field), {}, {
      type: props.type,
      id: field.name,
      placeholder: props.placeholder
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), meta.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormErrorMessage"], {
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ "@chakra-ui/layout");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\OmniCommerce\\omnicommerceclient\\src\\components\\Wrapper.tsx";



const Wrapper = ({
  children,
  variant = "regular"
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 8,
    mx: "auto",
    maxW: variant === "regular" ? "800px" : "400px",
    w: "100%",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: RegisterDocument, useRegisterMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);


const RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
    `;
function useRegisterMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__["useMutation"](RegisterDocument);
}
;

/***/ }),

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/button */ "@chakra-ui/button");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/toErrorMap */ "./src/utils/toErrorMap.tsx");

var _jsxFileName = "E:\\OmniCommerce\\omnicommerceclient\\src\\pages\\register.tsx";








const register = () => {
  const [, register] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useRegisterMutation"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "small",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        username: "",
        password: ""
      },
      onSubmit: async (values, actions) => {
        var _response$data;

        const response = await register(values);

        if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.register.errors) {
          actions.setErrors(Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_7__["toErrorMap"])(response.data.register.errors));
        }
      },
      children: ({
        isSubmitting
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
          name: "username",
          placeholder: "Username",
          label: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
          name: "password",
          placeholder: "Password",
          label: "Password",
          type: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          my: 4,
          type: "submit",
          variant: "outline",
          color: "white",
          background: "teal.400",
          _hover: {
            bg: "teal.600"
          },
          verticalAlign: "middle",
          isLoading: isSubmitting,
          children: "REGISTER"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ }),

/***/ "./src/utils/toErrorMap.tsx":
/*!**********************************!*\
  !*** ./src/utils/toErrorMap.tsx ***!
  \**********************************/
/*! exports provided: toErrorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toErrorMap", function() { return toErrorMap; });
const toErrorMap = errors => {
  const errorMap = {};
  errors.forEach(error => {
    errorMap[error.field] = error.message;
  });
  return errorMap;
};

/***/ }),

/***/ "@chakra-ui/button":
/*!************************************!*\
  !*** external "@chakra-ui/button" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/button");

/***/ }),

/***/ "@chakra-ui/form-control":
/*!******************************************!*\
  !*** external "@chakra-ui/form-control" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/form-control");

/***/ }),

/***/ "@chakra-ui/input":
/*!***********************************!*\
  !*** external "@chakra-ui/input" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/input");

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("urql");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy90b0Vycm9yTWFwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvZm9ybS1jb250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVycWxcIiJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkIiwicHJvcHMiLCJmaWVsZCIsIm1ldGEiLCJoZWxwZXIiLCJ1c2VGaWVsZCIsImVycm9yIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIldyYXBwZXIiLCJjaGlsZHJlbiIsInZhcmlhbnQiLCJSZWdpc3RlckRvY3VtZW50IiwiZ3FsIiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlVycWwiLCJyZWdpc3RlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidG9FcnJvck1hcCIsImlzU3VibWl0dGluZyIsImJnIiwiZXJyb3JNYXAiLCJmb3JFYWNoIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQVFPLE1BQU1BLFVBQXFDLEdBQUlDLEtBQUQsSUFBVztBQUM5RCxRQUFNLENBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFjQyxNQUFkLElBQXdCQyx1REFBUSxDQUFDSixLQUFELENBQXRDO0FBQ0Esc0JBQ0UscUVBQUMsbUVBQUQ7QUFBYSxhQUFTLEVBQUUsQ0FBQyxDQUFDRSxJQUFJLENBQUNHLEtBQS9CO0FBQXNDLE1BQUUsRUFBRSxDQUExQztBQUFBLDRCQUNFLHFFQUFDLHNEQUFELGtDQUNNSixLQUROO0FBRUUsVUFBSSxFQUFFRCxLQUFLLENB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LEVBQUVELFlBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlDRCxDQTNDRDs7QUE2Q2VWLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQU8sTUFBTVMsVUFBVSxHQUFJRixNQUFELElBQTBCO0FBQ2xELFFBQU1LLFFBQWdDLEdBQUcsRUFBekM7QUFDQUwsUUFBTSxDQUFDTSxPQUFQLENBQWdCeEIsS0FBRCxJQUFXO0FBQ3hCdUIsWUFBUSxDQUFDdkIsS0FBSyxDQUFDSixLQUFQLENBQVIsR0FBd0JJLEtBQUssQ0FBQ3lCLE9BQTlCO0FBQ0QsR0FGRDtBQUdBLFNBQU9GLFFBQVA7QUFDRCxDQU5NLEM7Ozs7Ozs7Ozs7O0FDRlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9yZWdpc3Rlci50c3hcIik7XG4iLCJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUVycm9yTWVzc2FnZSB9IGZyb20gXCJAY2hha3JhLXVpL2Zvcm0tY29udHJvbFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL2lucHV0XCI7XHJcbmltcG9ydCB7IEZpZWxkSG9va0NvbmZpZywgdXNlRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgSW5wdXRGaWVsZFByb3BzID0gRmllbGRIb29rQ29uZmlnPGFueT4gJiB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dEZpZWxkOiBSZWFjdC5GQzxJbnB1dEZpZWxkUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2ZpZWxkLCBtZXRhLCBoZWxwZXJdID0gdXNlRmllbGQocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXshIW1ldGEuZXJyb3J9IG15PXs4fT5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAvPlxyXG4gICAgICB7bWV0YS5lcnJvciA/IDxGb3JtRXJyb3JNZXNzYWdlPnttZXRhLmVycm9yfTwvRm9ybUVycm9yTWVzc2FnZT4gOiBudWxsfVxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XHJcbiAgdmFyaWFudDogXCJzbWFsbFwiIHwgXCJyZWd1bGFyXCI7XHJcbn1cclxuXHJcbmNvbnN0IFdyYXBwZXI6IFJlYWN0LkZDPFdyYXBwZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiwgdmFyaWFudCA9IFwicmVndWxhclwiIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBtdD17OH1cclxuICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgbWF4Vz17dmFyaWFudCA9PT0gXCJyZWd1bGFyXCIgPyBcIjgwMHB4XCIgOiBcIjQwMHB4XCJ9XHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0ICogYXMgVXJxbCBmcm9tICd1cnFsJztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuZXhwb3J0IHR5cGUgTWFrZU9wdGlvbmFsPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS10/OiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBNYWtlTWF5YmU8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXTogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIGhlbGxvOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGVzdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBvc3RzOiBBcnJheTxQb3N0PjtcbiAgcG9zdD86IE1heWJlPFBvc3Q+O1xuICBtZT86IE1heWJlPFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVBvc3RBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1Bvc3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgY3JlYXRlUG9zdDogUG9zdDtcbiAgdXBkYXRlUG9zdD86IE1heWJlPFBvc3Q+O1xuICBkZWxldGVQb3N0PzogTWF5YmU8UG9zdD47XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlUG9zdEFyZ3MgPSB7XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVQb3N0QXJncyA9IHtcbiAgdGl0bGU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlZ2lzdGVyQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgdXNlcj86IE1heWJlPFVzZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgRmllbGRFcnJvciA9IHtcbiAgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJuYW1lUGFzc3dvcmRJbnB1dCA9IHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgICAmIFBpY2s8RmllbGRFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICAgJiBQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIHJlZ2lzdGVyKG9wdGlvbnM6IHt1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkfSkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIGlkXG4gICAgICB1c2VybmFtZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50KTtcbn07IiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyXCI7XHJcbmltcG9ydCB7IHVzZVJlZ2lzdGVyTXV0YXRpb24gfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgdG9FcnJvck1hcCB9IGZyb20gXCIuLi91dGlscy90b0Vycm9yTWFwXCI7XHJcblxyXG5pbnRlcmZhY2UgcmVnaXN0ZXJQcm9wcyB7fVxyXG5cclxuY29uc3QgcmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFssIHJlZ2lzdGVyXSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgdmFyaWFudD1cInNtYWxsXCI+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9fVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVyKHZhbHVlcyk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YT8ucmVnaXN0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnMuc2V0RXJyb3JzKHRvRXJyb3JNYXAocmVzcG9uc2UuZGF0YS5yZWdpc3Rlci5lcnJvcnMpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG15PXs0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwidGVhbC40MDBcIlxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJ0ZWFsLjYwMFwiIH19XHJcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSRUdJU1RFUlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXI7XHJcbiIsImltcG9ydCB7IEZpZWxkRXJyb3IgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0b0Vycm9yTWFwID0gKGVycm9yczogRmllbGRFcnJvcltdKSA9PiB7XHJcbiAgY29uc3QgZXJyb3JNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcclxuICAgIGVycm9yTWFwW2Vycm9yLmZpZWxkXSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGVycm9yTWFwO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2Zvcm0tY29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9