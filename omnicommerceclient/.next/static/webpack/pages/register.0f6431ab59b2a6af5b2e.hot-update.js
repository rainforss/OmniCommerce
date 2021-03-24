webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/toErrorMap */ "./src/utils/toErrorMap.tsx");





var _jsxFileName = "E:\\OmniCommerce\\omnicommerceclient\\src\\pages\\register.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var register = function register() {
  _s();

  var _useRegisterMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_9__["useRegisterMutation"])(),
      _useRegisterMutation2 = Object(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useRegisterMutation, 2),
      register = _useRegisterMutation2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "small",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
      initialValues: {
        username: "",
        password: ""
      },
      onSubmit: /*#__PURE__*/function () {
        var _ref = Object(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values, actions) {
          var _response$data;

          var response;
          return E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return register(values);

                case 2:
                  response = _context.sent;

                  if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.register.errors) {
                    actions.setErrors(Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_10__["toErrorMap"])(response.data.register.errors));
                  }

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(),
      children: function children(_ref2) {
        var isSubmitting = _ref2.isSubmitting;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
            name: "username",
            placeholder: "Username",
            label: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
            name: "password",
            placeholder: "Password",
            label: "Password",
            type: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(register, "mYy7lIdnWBmFP2V+FDbrcK/cEwQ=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_9__["useRegisterMutation"]];
});

/* harmony default export */ __webpack_exports__["default"] = (register);

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

/***/ }),

/***/ "./src/utils/toErrorMap.tsx":
/*!**********************************!*\
  !*** ./src/utils/toErrorMap.tsx ***!
  \**********************************/
/*! exports provided: toErrorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toErrorMap", function() { return toErrorMap; });
var toErrorMap = function toErrorMap(errors) {
  var errorMap = {};
  errors.forEach(function (error) {
    errorMap[error.field] = error.message;
  });
  return errorMap;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3RvRXJyb3JNYXAudHN4Il0sIm5hbWVzIjpbInJlZ2lzdGVyIiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidG9FcnJvck1hcCIsImlzU3VibWl0dGluZyIsImJnIiwiZXJyb3JNYXAiLCJmb3JFYWNoIiwiZXJyb3IiLCJmaWVsZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxRQUFpQyxHQUFHLG9CQUFNO0FBQUE7O0FBQUEsNkJBQ3pCQyw4RUFBbUIsRUFETTtBQUFBO0FBQUEsTUFDckNELFFBRHFDOztBQUU5QyxzQkFDRSxxRUFBQywyREFBRDtBQUFTLFdBQU8sRUFBQyxPQUFqQjtBQUFBLDJCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRTtBQUFFRSxnQkFBUSxFQUFFLEVBQVo7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FEakI7QUFFRSxjQUFRO0FBQUEsb1VBQUUsaUJBQU9DLE1BQVAsRUFBZUMsT0FBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNlTCxRQUFRLENBQUNJLE1BQUQsQ0FEdkI7O0FBQUE7QUFDRkUsMEJBREU7O0FBRVIsd0NBQUlBLFFBQVEsQ0FBQ0MsSUFBYiwyQ0FBSSxlQUFlUCxRQUFmLENBQXdCUSxNQUE1QixFQUFvQztBQUNsQ0gsMkJBQU8sQ0FBQ0ksU0FBUixDQUFrQkMscUVBQVUsQ0FBQ0osUUFBUSxDQUFDQyxJQUFULENBQWNQLFFBQWQsQ0FBdUJRLE1BQXhCLENBQTVCO0FBQ0Q7O0FBSk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZWO0FBQUEsZ0JBU0c7QUFBQSxZQUFHRyxZQUFILFNBQUdBLFlBQUg7QUFBQSw0QkFDQyxxRUFBQywyQ0FBRDtBQUFBLGtDQUNFLHFFQUFDLGlFQUFEO0FBQ0UsZ0JBQUksRUFBQyxVQURQO0FBRUUsdUJBQVcsRUFBQyxVQUZkO0FBR0UsaUJBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSxxRUFBQyxpRUFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLHVCQUFXLEVBQUMsVUFGZDtBQUdFLGlCQUFLLEVBQUMsVUFIUjtBQUlFLGdCQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBWUUscUVBQUMsd0RBQUQ7QUFDRSxjQUFFLEVBQUUsQ0FETjtBQUVFLGdCQUFJLEVBQUMsUUFGUDtBQUdFLG1CQUFPLEVBQUMsU0FIVjtBQUlFLGlCQUFLLEVBQUMsT0FKUjtBQUtFLHNCQUFVLEVBQUMsVUFMYjtBQU1FLGtCQUFNLEVBQUU7QUFBRUMsZ0JBQUUsRUFBRTtBQUFOLGFBTlY7QUFPRSx5QkFBYSxFQUFDLFFBUGhCO0FBUUUscUJBQVMsRUFBRUQsWUFSYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0EzQ0Q7O0dBQU1YLFE7VUFDaUJDLHNFOzs7QUE0Q1JELHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFPLElBQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLE1BQUQsRUFBMEI7QUFDbEQsTUFBTUssUUFBZ0MsR0FBRyxFQUF6QztBQUNBTCxRQUFNLENBQUNNLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVc7QUFDeEJGLFlBQVEsQ0FBQ0UsS0FBSyxDQUFDQyxLQUFQLENBQVIsR0FBd0JELEtBQUssQ0FBQ0UsT0FBOUI7QUFDRCxHQUZEO0FBR0EsU0FBT0osUUFBUDtBQUNELENBTk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMGY2NDMxYWI1OWIyYTZhZjViMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0RmllbGRcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvV3JhcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHRvRXJyb3JNYXAgfSBmcm9tIFwiLi4vdXRpbHMvdG9FcnJvck1hcFwiO1xyXG5cclxuaW50ZXJmYWNlIHJlZ2lzdGVyUHJvcHMge31cclxuXHJcbmNvbnN0IHJlZ2lzdGVyOiBSZWFjdC5GQzxyZWdpc3RlclByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBbLCByZWdpc3Rlcl0gPSB1c2VSZWdpc3Rlck11dGF0aW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJzbWFsbFwiPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3Rlcih2YWx1ZXMpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICBhY3Rpb25zLnNldEVycm9ycyh0b0Vycm9yTWFwKHJlc3BvbnNlLmRhdGEucmVnaXN0ZXIuZXJyb3JzKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBteT17NH1cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZD1cInRlYWwuNDAwXCJcclxuICAgICAgICAgICAgICBfaG92ZXI9e3sgYmc6IFwidGVhbC42MDBcIiB9fVxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUkVHSVNURVJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyO1xyXG4iLCJpbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdG9FcnJvck1hcCA9IChlcnJvcnM6IEZpZWxkRXJyb3JbXSkgPT4ge1xyXG4gIGNvbnN0IGVycm9yTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcbiAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XHJcbiAgICBlcnJvck1hcFtlcnJvci5maWVsZF0gPSBlcnJvci5tZXNzYWdlO1xyXG4gIH0pO1xyXG4gIHJldHVybiBlcnJvck1hcDtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==