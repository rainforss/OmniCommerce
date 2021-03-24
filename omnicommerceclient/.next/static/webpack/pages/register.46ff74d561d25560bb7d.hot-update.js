webpackHotUpdate_N_E("pages/register",{

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/form-control */ "./node_modules/@chakra-ui/form-control/dist/esm/index.js");
/* harmony import */ var _chakra_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/input */ "./node_modules/@chakra-ui/input/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "E:\\OmniCommerce\\omnicommerceclient\\src\\components\\InputField.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var InputField = function InputField(props) {
  _s();

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_5__["useField"])(props),
      _useField2 = Object(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helper = _useField2[2];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    isInvalid: !!meta.error,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_input__WEBPACK_IMPORTED_MODULE_4__["Input"], _objectSpread(_objectSpread({}, field), {}, {
      type: props.type,
      id: field.name,
      placeholder: props.placeholder,
      my: 4
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), meta.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_3__["FormErrorMessage"], {
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }, _this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(InputField, "WZhZs2tAnEBkCtdm4Z68+TyJavc=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_5__["useField"]];
});

_c = InputField;

var _c;

$RefreshReg$(_c, "InputField");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3giXSwibmFtZXMiOlsiSW5wdXRGaWVsZCIsInByb3BzIiwidXNlRmllbGQiLCJmaWVsZCIsIm1ldGEiLCJoZWxwZXIiLCJlcnJvciIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUU8sSUFBTUEsVUFBcUMsR0FBRyxTQUF4Q0EsVUFBd0MsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2hDQyx1REFBUSxDQUFDRCxLQUFELENBRHdCO0FBQUE7QUFBQSxNQUN2REUsS0FEdUQ7QUFBQSxNQUNoREMsSUFEZ0Q7QUFBQSxNQUMxQ0MsTUFEMEM7O0FBRTlELHNCQUNFLHFFQUFDLG1FQUFEO0FBQWEsYUFBUyxFQUFFLENBQUMsQ0FBQ0QsSUFBSSxDQUFDRSxLQUEvQjtBQUFBLDRCQUNFLHFFQUFDLHNEQUFELGtDQUNNSCxLQUROO0FBRUUsVUFBSSxFQUFFRixLQUFLLENBQUNNLElBRmQ7QUFHRSxRQUFFLEVBQUVKLEtBQUssQ0FBQ0ssSUFIWjtBQUlFLGlCQUFXLEVBQUVQLEtBQUssQ0FBQ1EsV0FKckI7QUFLRSxRQUFFLEVBQUU7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFRR0wsSUFBSSxDQUFDRSxLQUFMLGdCQUFhLHFFQUFDLHdFQUFEO0FBQUEsZ0JBQW1CRixJQUFJLENBQUNFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBYixHQUFpRSxJQVJwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBZE07O0dBQU1OLFU7VUFDbUJFLCtDOzs7S0FEbkJGLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNDZmZjc0ZDU2MWQyNTU2MGJiN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvZm9ybS1jb250cm9sXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgRmllbGRIb29rQ29uZmlnLCB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBGaWVsZEhvb2tDb25maWc8YW55PiAmIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElucHV0RmllbGRQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZmllbGQsIG1ldGEsIGhlbHBlcl0gPSB1c2VGaWVsZChwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9eyEhbWV0YS5lcnJvcn0+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgIGlkPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICBteT17NH1cclxuICAgICAgLz5cclxuICAgICAge21ldGEuZXJyb3IgPyA8Rm9ybUVycm9yTWVzc2FnZT57bWV0YS5lcnJvcn08L0Zvcm1FcnJvck1lc3NhZ2U+IDogbnVsbH1cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==