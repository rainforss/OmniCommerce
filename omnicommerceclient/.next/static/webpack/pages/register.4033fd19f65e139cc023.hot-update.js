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
/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");



var _jsxFileName = "E:\\OmniCommerce\\omnicommerceclient\\src\\pages\\register.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var register = function register() {
  _s();

  var _useMutation = Object(urql__WEBPACK_IMPORTED_MODULE_5__["useMutation"])("\n  mutation Register($username:String!,$password:String!){\n    login(options:{username:$username,password:$password}){\n      errors{\n        field\n        message\n      }\n      user{\n        username\n      }\n    }\n  }\n  "),
      _useMutation2 = Object(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      register = _useMutation2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "small",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: {
        username: "",
        password: ""
      },
      onSubmit: function onSubmit(values) {
        console.log(values);
        return register(values);
      },
      children: function children(_ref) {
        var isSubmitting = _ref.isSubmitting;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_6__["InputField"], {
            name: "username",
            placeholder: "Username",
            label: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_6__["InputField"], {
            name: "password",
            placeholder: "Password",
            label: "Password",
            type: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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
            lineNumber: 46,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(register, "7CEe8jaeeKkSxBnlwahqPb7e3aI=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJyZWdpc3RlciIsInVzZU11dGF0aW9uIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJpc1N1Ym1pdHRpbmciLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxRQUFpQyxHQUFHLG9CQUFNO0FBQUE7O0FBQUEscUJBQ3pCQyx3REFBVyw0T0FEYztBQUFBO0FBQUEsTUFDckNELFFBRHFDOztBQWM5QyxzQkFDRSxxRUFBQywyREFBRDtBQUFTLFdBQU8sRUFBQyxPQUFqQjtBQUFBLDJCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRTtBQUFFRSxnQkFBUSxFQUFFLEVBQVo7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FEakI7QUFFRSxjQUFRLEVBQUUsa0JBQUNDLE1BQUQsRUFBWTtBQUNwQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxlQUFPSixRQUFRLENBQUNJLE1BQUQsQ0FBZjtBQUNELE9BTEg7QUFBQSxnQkFPRztBQUFBLFlBQUdHLFlBQUgsUUFBR0EsWUFBSDtBQUFBLDRCQUNDLHFFQUFDLDJDQUFEO0FBQUEsa0NBQ0UscUVBQUMsaUVBQUQ7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSx1QkFBVyxFQUFDLFVBRmQ7QUFHRSxpQkFBSyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FLHFFQUFDLGlFQUFEO0FBQ0UsZ0JBQUksRUFBQyxVQURQO0FBRUUsdUJBQVcsRUFBQyxVQUZkO0FBR0UsaUJBQUssRUFBQyxVQUhSO0FBSUUsZ0JBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFZRSxxRUFBQyx3REFBRDtBQUNFLGNBQUUsRUFBRSxDQUROO0FBRUUsZ0JBQUksRUFBQyxRQUZQO0FBR0UsbUJBQU8sRUFBQyxTQUhWO0FBSUUsaUJBQUssRUFBQyxPQUpSO0FBS0Usc0JBQVUsRUFBQyxVQUxiO0FBTUUsa0JBQU0sRUFBRTtBQUFFQyxnQkFBRSxFQUFFO0FBQU4sYUFOVjtBQU9FLHlCQUFhLEVBQUMsUUFQaEI7QUFRRSxxQkFBUyxFQUFFRCxZQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQXJERDs7R0FBTVAsUTtVQUNpQkMsZ0Q7OztBQXNEUkQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNDAzM2ZkMTlmNjVlMTM5Y2MwMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgcmVnaXN0ZXJQcm9wcyB7fVxyXG5cclxuY29uc3QgcmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFssIHJlZ2lzdGVyXSA9IHVzZU11dGF0aW9uKGBcclxuICBtdXRhdGlvbiBSZWdpc3RlcigkdXNlcm5hbWU6U3RyaW5nISwkcGFzc3dvcmQ6U3RyaW5nISl7XHJcbiAgICBsb2dpbihvcHRpb25zOnt1c2VybmFtZTokdXNlcm5hbWUscGFzc3dvcmQ6JHBhc3N3b3JkfSl7XHJcbiAgICAgIGVycm9yc3tcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgICB1c2Vye1xyXG4gICAgICAgIHVzZXJuYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJzbWFsbFwiPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cclxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgICAgICAgIHJldHVybiByZWdpc3Rlcih2YWx1ZXMpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgbXk9ezR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ9XCJ0ZWFsLjQwMFwiXHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGJnOiBcInRlYWwuNjAwXCIgfX1cclxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJFR0lTVEVSXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==