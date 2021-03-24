webpackHotUpdate_N_E("pages/register",{

/***/ "./node_modules/graphql-tag/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! graphql/language/parser */ "./node_modules/graphql/language/parser.mjs");

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: RegisterDocument, useRegisterMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");


var _s = $RefreshSig$();

function _templateObject() {
  var data = Object(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n    }\n  }\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
function useRegisterMutation() {
  _s();

  return urql__WEBPACK_IMPORTED_MODULE_2__["useMutation"](RegisterDocument);
}

_s(useRegisterMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_2__["useMutation"]];
});

;

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
        var _ref = Object(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values) {
          return E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return register(values);

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
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
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
            name: "password",
            placeholder: "Password",
            label: "Password",
            type: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
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
            lineNumber: 34,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwtdGFnL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2dlbmVyYXRlZC9ncmFwaHFsLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeCJdLCJuYW1lcyI6WyJSZWdpc3RlckRvY3VtZW50IiwiZ3FsIiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlVycWwiLCJyZWdpc3RlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJpc1N1Ym1pdHRpbmciLCJiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsYUFBYSxtQkFBTyxDQUFDLDJFQUF5Qjs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDRCQUE0QjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RjtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5lZDlkYzljNDJlNWU2ZDYyMzFhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhcnNlciA9IHJlcXVpcmUoJ2dyYXBocWwvbGFuZ3VhZ2UvcGFyc2VyJyk7XG5cbnZhciBwYXJzZSA9IHBhcnNlci5wYXJzZTtcblxuLy8gU3RyaXAgaW5zaWduaWZpY2FudCB3aGl0ZXNwYWNlXG4vLyBOb3RlIHRoYXQgdGhpcyBjb3VsZCBkbyBhIGxvdCBtb3JlLCBzdWNoIGFzIHJlb3JkZXIgZmllbGRzIGV0Yy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFxzLF0rL2csICcgJykudHJpbSgpO1xufVxuXG4vLyBBIG1hcCBkb2NTdHJpbmcgLT4gZ3JhcGhxbCBkb2N1bWVudFxudmFyIGRvY0NhY2hlID0ge307XG5cbi8vIEEgbWFwIGZyYWdtZW50TmFtZSAtPiBbbm9ybWFsaXplZCBzb3VyY2VdXG52YXIgZnJhZ21lbnRTb3VyY2VNYXAgPSB7fTtcblxuZnVuY3Rpb24gY2FjaGVLZXlGcm9tTG9jKGxvYykge1xuICByZXR1cm4gbm9ybWFsaXplKGxvYy5zb3VyY2UuYm9keS5zdWJzdHJpbmcobG9jLnN0YXJ0LCBsb2MuZW5kKSk7XG59XG5cbi8vIEZvciB0ZXN0aW5nLlxuZnVuY3Rpb24gcmVzZXRDYWNoZXMoKSB7XG4gIGRvY0NhY2hlID0ge307XG4gIGZyYWdtZW50U291cmNlTWFwID0ge307XG59XG5cbi8vIFRha2UgYSB1bnN0cmlwcGVkIHBhcnNlZCBkb2N1bWVudCAocXVlcnkvbXV0YXRpb24gb3IgZXZlbiBmcmFnbWVudCksIGFuZFxuLy8gY2hlY2sgYWxsIGZyYWdtZW50IGRlZmluaXRpb25zLCBjaGVja2luZyBmb3IgbmFtZS0+c291cmNlIHVuaXF1ZW5lc3MuXG4vLyBXZSBhbHNvIHdhbnQgdG8gbWFrZSBzdXJlIG9ubHkgdW5pcXVlIGZyYWdtZW50cyBleGlzdCBpbiB0aGUgZG9jdW1lbnQuXG52YXIgcHJpbnRGcmFnbWVudFdhcm5pbmdzID0gdHJ1ZTtcbmZ1bmN0aW9uIHByb2Nlc3NGcmFnbWVudHMoYXN0KSB7XG4gIHZhciBhc3RGcmFnbWVudE1hcCA9IHt9O1xuICB2YXIgZGVmaW5pdGlvbnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzdC5kZWZpbml0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmcmFnbWVudERlZmluaXRpb24gPSBhc3QuZGVmaW5pdGlvbnNbaV07XG5cbiAgICBpZiAoZnJhZ21lbnREZWZpbml0aW9uLmtpbmQgPT09ICdGcmFnbWVudERlZmluaXRpb24nKSB7XG4gICAgICB2YXIgZnJhZ21lbnROYW1lID0gZnJhZ21lbnREZWZpbml0aW9uLm5hbWUudmFsdWU7XG4gICAgICB2YXIgc291cmNlS2V5ID0gY2FjaGVLZXlGcm9tTG9jKGZyYWdtZW50RGVmaW5pdGlvbi5sb2MpO1xuXG4gICAgICAvLyBXZSBrbm93IHNvbWV0aGluZyBhYm91dCB0aGlzIGZyYWdtZW50XG4gICAgICBpZiAoZnJhZ21lbnRTb3VyY2VNYXAuaGFzT3duUHJvcGVydHkoZnJhZ21lbnROYW1lKSAmJiAhZnJhZ21lbnRTb3VyY2VNYXBbZnJhZ21lbnROYW1lXVtzb3VyY2VLZXldKSB7XG5cbiAgICAgICAgLy8gdGhpcyBpcyBhIHByb2JsZW0gYmVjYXVzZSB0aGUgYXBwIGRldmVsb3BlciBpcyB0cnlpbmcgdG8gcmVnaXN0ZXIgYW5vdGhlciBmcmFnbWVudCB3aXRoXG4gICAgICAgIC8vIHRoZSBzYW1lIG5hbWUgYXMgb25lIHByZXZpb3VzbHkgcmVnaXN0ZXJlZC4gU28sIHdlIHRlbGwgdGhlbSBhYm91dCBpdC5cbiAgICAgICAgaWYgKHByaW50RnJhZ21lbnRXYXJuaW5ncykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IGZyYWdtZW50IHdpdGggbmFtZSBcIiArIGZyYWdtZW50TmFtZSArIFwiIGFscmVhZHkgZXhpc3RzLlxcblwiXG4gICAgICAgICAgICArIFwiZ3JhcGhxbC10YWcgZW5mb3JjZXMgYWxsIGZyYWdtZW50IG5hbWVzIGFjcm9zcyB5b3VyIGFwcGxpY2F0aW9uIHRvIGJlIHVuaXF1ZTsgcmVhZCBtb3JlIGFib3V0XFxuXCJcbiAgICAgICAgICAgICsgXCJ0aGlzIGluIHRoZSBkb2NzOiBodHRwOi8vZGV2LmFwb2xsb2RhdGEuY29tL2NvcmUvZnJhZ21lbnRzLmh0bWwjdW5pcXVlLW5hbWVzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnJhZ21lbnRTb3VyY2VNYXBbZnJhZ21lbnROYW1lXVtzb3VyY2VLZXldID0gdHJ1ZTtcblxuICAgICAgfSBlbHNlIGlmICghZnJhZ21lbnRTb3VyY2VNYXAuaGFzT3duUHJvcGVydHkoZnJhZ21lbnROYW1lKSkge1xuICAgICAgICBmcmFnbWVudFNvdXJjZU1hcFtmcmFnbWVudE5hbWVdID0ge307XG4gICAgICAgIGZyYWdtZW50U291cmNlTWFwW2ZyYWdtZW50TmFtZV1bc291cmNlS2V5XSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYXN0RnJhZ21lbnRNYXBbc291cmNlS2V5XSkge1xuICAgICAgICBhc3RGcmFnbWVudE1hcFtzb3VyY2VLZXldID0gdHJ1ZTtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChmcmFnbWVudERlZmluaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGZyYWdtZW50RGVmaW5pdGlvbik7XG4gICAgfVxuICB9XG5cbiAgYXN0LmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIHJldHVybiBhc3Q7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVGcmFnbWVudFdhcm5pbmdzKCkge1xuICBwcmludEZyYWdtZW50V2FybmluZ3MgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3RyaXBMb2MoZG9jLCByZW1vdmVMb2NBdFRoaXNMZXZlbCkge1xuICB2YXIgZG9jVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkb2MpO1xuXG4gIGlmIChkb2NUeXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIGRvYy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBzdHJpcExvYyhkLCByZW1vdmVMb2NBdFRoaXNMZXZlbCk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZG9jVHlwZSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgaW5wdXQuJyk7XG4gIH1cblxuICAvLyBXZSBkb24ndCB3YW50IHRvIHJlbW92ZSB0aGUgcm9vdCBsb2MgZmllbGQgc28gd2UgY2FuIHVzZSBpdFxuICAvLyBmb3IgZnJhZ21lbnQgc3Vic3RpdHV0aW9uIChzZWUgYmVsb3cpXG4gIGlmIChyZW1vdmVMb2NBdFRoaXNMZXZlbCAmJiBkb2MubG9jKSB7XG4gICAgZGVsZXRlIGRvYy5sb2M7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXBvbGxvZ3JhcGhxbC9ncmFwaHFsLXRhZy9pc3N1ZXMvNDBcbiAgaWYgKGRvYy5sb2MpIHtcbiAgICBkZWxldGUgZG9jLmxvYy5zdGFydFRva2VuO1xuICAgIGRlbGV0ZSBkb2MubG9jLmVuZFRva2VuO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkb2MpO1xuICB2YXIga2V5O1xuICB2YXIgdmFsdWU7XG4gIHZhciB2YWx1ZVR5cGU7XG5cbiAgZm9yIChrZXkgaW4ga2V5cykge1xuICAgIGlmIChrZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhbHVlID0gZG9jW2tleXNba2V5XV07XG4gICAgICB2YWx1ZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgICBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBPYmplY3RdJyB8fCB2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgZG9jW2tleXNba2V5XV0gPSBzdHJpcExvYyh2YWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvYztcbn1cblxudmFyIGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZmFsc2U7XG5mdW5jdGlvbiBwYXJzZURvY3VtZW50KGRvYykge1xuICB2YXIgY2FjaGVLZXkgPSBub3JtYWxpemUoZG9jKTtcblxuICBpZiAoZG9jQ2FjaGVbY2FjaGVLZXldKSB7XG4gICAgcmV0dXJuIGRvY0NhY2hlW2NhY2hlS2V5XTtcbiAgfVxuXG4gIHZhciBwYXJzZWQgPSBwYXJzZShkb2MsIHsgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXM6IGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzIH0pO1xuICBpZiAoIXBhcnNlZCB8fCBwYXJzZWQua2luZCAhPT0gJ0RvY3VtZW50Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgR3JhcGhRTCBkb2N1bWVudC4nKTtcbiAgfVxuXG4gIC8vIGNoZWNrIHRoYXQgYWxsIFwibmV3XCIgZnJhZ21lbnRzIGluc2lkZSB0aGUgZG9jdW1lbnRzIGFyZSBjb25zaXN0ZW50IHdpdGhcbiAgLy8gZXhpc3RpbmcgZnJhZ21lbnRzIG9mIHRoZSBzYW1lIG5hbWVcbiAgcGFyc2VkID0gcHJvY2Vzc0ZyYWdtZW50cyhwYXJzZWQpO1xuICBwYXJzZWQgPSBzdHJpcExvYyhwYXJzZWQsIGZhbHNlKTtcbiAgZG9jQ2FjaGVbY2FjaGVLZXldID0gcGFyc2VkO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzKCkge1xuICBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcygpIHtcbiAgZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMgPSBmYWxzZTtcbn1cblxuLy8gWFhYIFRoaXMgc2hvdWxkIGV2ZW50dWFsbHkgZGlzYWxsb3cgYXJiaXRyYXJ5IHN0cmluZyBpbnRlcnBvbGF0aW9uLCBsaWtlIFJlbGF5IGRvZXNcbmZ1bmN0aW9uIGdxbCgvKiBhcmd1bWVudHMgKi8pIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gIHZhciBsaXRlcmFscyA9IGFyZ3NbMF07XG5cbiAgLy8gV2UgYWx3YXlzIGdldCBsaXRlcmFsc1swXSBhbmQgdGhlbiBtYXRjaGluZyBwb3N0IGxpdGVyYWxzIGZvciBlYWNoIGFyZyBnaXZlblxuICB2YXIgcmVzdWx0ID0gKHR5cGVvZihsaXRlcmFscykgPT09IFwic3RyaW5nXCIpID8gbGl0ZXJhbHMgOiBsaXRlcmFsc1swXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJnc1tpXSAmJiBhcmdzW2ldLmtpbmQgJiYgYXJnc1tpXS5raW5kID09PSAnRG9jdW1lbnQnKSB7XG4gICAgICByZXN1bHQgKz0gYXJnc1tpXS5sb2Muc291cmNlLmJvZHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJlc3VsdCArPSBsaXRlcmFsc1tpXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZURvY3VtZW50KHJlc3VsdCk7XG59XG5cbi8vIFN1cHBvcnQgdHlwZXNjcmlwdCwgd2hpY2ggaXNuJ3QgYXMgbmljZSBhcyBCYWJlbCBhYm91dCBkZWZhdWx0IGV4cG9ydHNcbmdxbC5kZWZhdWx0ID0gZ3FsO1xuZ3FsLnJlc2V0Q2FjaGVzID0gcmVzZXRDYWNoZXM7XG5ncWwuZGlzYWJsZUZyYWdtZW50V2FybmluZ3MgPSBkaXNhYmxlRnJhZ21lbnRXYXJuaW5ncztcbmdxbC5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuZ3FsLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcblxubW9kdWxlLmV4cG9ydHMgPSBncWw7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59IiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgaGVsbG86IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0ZXN0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcG9zdHM6IEFycmF5PFBvc3Q+O1xuICBwb3N0PzogTWF5YmU8UG9zdD47XG4gIG1lPzogTWF5YmU8VXNlcj47XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UG9zdEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3QgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUG9zdCc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICBjcmVhdGVQb3N0OiBQb3N0O1xuICB1cGRhdGVQb3N0PzogTWF5YmU8UG9zdD47XG4gIGRlbGV0ZVBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgcmVnaXN0ZXI6IFVzZXJSZXNwb25zZTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVQb3N0QXJncyA9IHtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVBvc3RBcmdzID0ge1xuICB0aXRsZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVBvc3RBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZEVycm9yID0ge1xuICBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlcm5hbWVQYXNzd29yZElucHV0ID0ge1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZWdpc3RlcjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZSc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cblxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczoge3VzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmR9KSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTsiLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9idXR0b25cIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInVycWxcIjtcclxuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0RmllbGRcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvV3JhcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5pbnRlcmZhY2UgcmVnaXN0ZXJQcm9wcyB7fVxyXG5cclxuY29uc3QgcmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFssIHJlZ2lzdGVyXSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgdmFyaWFudD1cInNtYWxsXCI+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9fVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcmVnaXN0ZXIodmFsdWVzKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG15PXs0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwidGVhbC40MDBcIlxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJ0ZWFsLjYwMFwiIH19XHJcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSRUdJU1RFUlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=