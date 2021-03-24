webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@urql/core/dist/2c01d8b2.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@urql/core/dist/2c01d8b2.mjs ***!
  \***************************************************/
/*! exports provided: C, _, a, b, c, d, e, f, g, h, k, m, s */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeFetchBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return makeFetchURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return makeFetchOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return makeFetchSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return v; });
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_language_parser_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
function k(a) {
  return "string" == typeof a ? new graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](a) : "object" == typeof a && a.message ? new graphql_error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"](a.message, a.nodes, a.source, a.positions, a.path, a, a.extensions || {}) : a;
}

function l() {
  return this.message;
}

function n(a, b) {
  a |= 0;
  for (var c = 0, d = 0 | b.length; c < d; c++) {
    a = (a << 5) + a + b.charCodeAt(c);
  }
  return a;
}

function t(a) {
  var b, c, d, e, f, g;
  if (null === a || q.has(a)) {
    return "null";
  }
  if ("object" != typeof a) {
    return JSON.stringify(a) || "";
  }
  if (a.toJSON) {
    return t(a.toJSON());
  }
  if (Array.isArray(a)) {
    for (b = "[", c = 0, d = a.length; c < d; c++) {
      0 < c && (b += ",");
      b += 0 < (e = t(a[c])).length ? e : "null";
    }
    return b + "]";
  }
  if (!(b = Object.keys(a).sort()).length && a.constructor && a.constructor !== Object) {
    return b = r.get(a) || Math.random().toString(36).slice(2), r.set(a, b), '{"__key":"' + b + '"}';
  }
  q.add(a);
  c = "{";
  d = 0;
  for (e = b.length; d < e; d++) {
    (g = t(a[f = b[d]])) && (1 < c.length && (c += ","), c += t(f) + ":" + g);
  }
  q.delete(a);
  return c + "}";
}

function u(a) {
  q.clear();
  return t(a);
}

function v(a) {
  var b = ("string" != typeof a ? a.loc && a.loc.source.body || Object(graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__["print"])(a) : a).replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
  "string" != typeof a && (a.loc ? (a = "definitions" in a && w(a)) && (b = "# " + a + "\n" + b) : a.loc = {
    start: 0,
    end: b.length,
    source: {
      body: b,
      name: "gql",
      locationOffset: {
        line: 1,
        column: 1
      }
    }
  });
  return b;
}

function y(a) {
  if ("string" == typeof a) {
    var b = n(5381, v(a)) >>> 0;
    a = x.get(b) || Object(graphql_language_parser_mjs__WEBPACK_IMPORTED_MODULE_3__["parse"])(a, {
      noLocation: !0
    });
  } else {
    b = a.__key || n(5381, v(a)) >>> 0, a = x.get(b) || a;
  }
  a.loc || v(a);
  a.__key = b;
  x.set(b, a);
  return a;
}

function w(a) {
  var b, c, d;
  for (b = 0, c = a.definitions.length; b < c; b++) {
    if ((d = a.definitions[b]).kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__["Kind"].OPERATION_DEFINITION && d.name) {
      return d.name.value;
    }
  }
}

function z(a, b, c) {
  return {
    operation: a,
    data: b.data,
    error: Array.isArray(b.errors) ? new m({
      graphQLErrors: b.errors,
      response: c
    }) : void 0,
    extensions: "object" == typeof b.extensions && b.extensions || void 0
  };
}

function A(a, b, c) {
  return {
    operation: a,
    data: void 0,
    error: new m({
      networkError: b,
      response: c
    }),
    extensions: void 0
  };
}

function B() {
  return (B = Object.assign || function(a) {
    var b, c, d;
    for (b = 1; b < arguments.length; b++) {
      c = arguments[b];
      for (d in c) {
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
      }
    }
    return a;
  }).apply(this, arguments);
}

function makeFetchBody(a) {
  return {
    query: Object(graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__["print"])(a.query),
    operationName: w(a.query),
    variables: a.variables || void 0,
    extensions: void 0
  };
}

function makeFetchURL(a, b) {
  var c = a.context.url;
  if ("query" !== a.kind || !a.context.preferGetMethod || !b) {
    return c;
  }
  a = [];
  b.operationName && a.push("operationName=" + encodeURIComponent(b.operationName));
  b.query && a.push("query=" + encodeURIComponent(b.query.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim()));
  b.variables && a.push("variables=" + encodeURIComponent(u(b.variables)));
  b.extensions && a.push("extensions=" + encodeURIComponent(u(b.extensions)));
  return c + "?" + a.join("&");
}

function makeFetchOptions(a, b) {
  var c = "query" === a.kind && !!a.context.preferGetMethod;
  return B({}, a = "function" == typeof a.context.fetchOptions ? a.context.fetchOptions() : a.context.fetchOptions || {}, {
    body: !c && b ? JSON.stringify(b) : void 0,
    method: c ? "GET" : "POST",
    headers: c ? a.headers : B({}, {
      "content-type": "application/json"
    }, a.headers)
  });
}

function makeFetchSource(a, b, c) {
  return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["make"])((function(d) {
    var e = d.next, f = d.complete, g = "undefined" != typeof AbortController ? new AbortController : null, p = !1;
    Promise.resolve().then((function() {
      if (!p) {
        return g && (c.signal = g.signal), function C(a, b, c) {
          var e, d = !1;
          return (a.context.fetch || fetch)(b, c).then((function(a) {
            e = a;
            d = 200 > a.status || a.status >= ("manual" === c.redirect ? 400 : 300);
            return a.json();
          })).then((function(b) {
            if (!("data" in b) && !("errors" in b)) {
              throw Error("No Content");
            }
            return z(a, b, e);
          })).catch((function(b) {
            if ("AbortError" !== b.name) {
              return A(a, d ? Error(e.statusText) : b, e);
            }
          }));
        }(a, b, c);
      }
    })).then((function(a) {
      p || (p = !0, a && e(a), f());
    }));
    return function() {
      p = !0;
      g && g.abort();
    };
  }));
}

function createRequest(a, b) {
  a = y(a);
  return {
    key: b ? n(a.__key, u(b)) >>> 0 : a.__key,
    query: a,
    variables: b || {}
  };
}

var m, q, r, x;











m = function(a) {
  function b(b) {
    var f, c = b.networkError, e = b.response;
    f = function h(a, b) {
      var d = "";
      if (void 0 !== a) {
        return d = "[Network] " + a.message;
      }
      void 0 !== b && b.forEach((function c(a) {
        d += "[GraphQL] " + a.message + "\n";
      }));
      return d.trim();
    }(c, b = (b.graphQLErrors || []).map(k));
    a.call(this, f);
    this.name = "CombinedError";
    this.message = f;
    this.graphQLErrors = b;
    this.networkError = c;
    this.response = e;
  }
  a && (b.__proto__ = a);
  (b.prototype = Object.create(a && a.prototype)).constructor = b;
  b.prototype.toString = l;
  return b;
}(Error);

q = new Set, r = new WeakMap;

x = new Map;


//# sourceMappingURL=2c01d8b2.mjs.map


/***/ }),

/***/ "./node_modules/@urql/core/dist/urql-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@urql/core/dist/urql-core.mjs ***!
  \****************************************************/
/*! exports provided: CombinedError, createRequest, getOperationName, makeErrorResult, makeResult, stringifyVariables, Client, cacheExchange, composeExchanges, createClient, debugExchange, dedupExchange, defaultExchanges, errorExchange, fallbackExchangeIO, fetchExchange, formatDocument, gql, makeOperation, maskTypename, ssrExchange, subscriptionExchange */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheExchange", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeExchanges", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClient", function() { return createClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugExchange", function() { return debugExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedupExchange", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultExchanges", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorExchange", function() { return errorExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackExchangeIO", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchExchange", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDocument", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return gql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeOperation", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskTypename", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrExchange", function() { return ssrExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionExchange", function() { return subscriptionExchange; });
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var _2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2c01d8b2.mjs */ "./node_modules/@urql/core/dist/2c01d8b2.mjs");
/* harmony import */ var graphql_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql/language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombinedError", function() { return _2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequest", function() { return _2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return _2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeErrorResult", function() { return _2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeResult", function() { return _2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyVariables", function() { return _2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["g"]; });

function n(a, b) {
  if (Array.isArray(a)) {
    for (var c = 0; c < a.length; c++) {
      n(a[c], b);
    }
  } else if ("object" == typeof a && null !== a) {
    for (c in a) {
      "__typename" === c && "string" == typeof a[c] ? b[a[c]] = 0 : n(a[c], b);
    }
  }
  return b;
}

function p(a) {
  return a.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FIELD && "__typename" === a.name.value && !a.alias;
}

function r(a) {
  if (a.selectionSet && !a.selectionSet.selections.some(p)) {
    return Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a, {
      selectionSet: Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a.selectionSet, {
        selections: a.selectionSet.selections.concat([ {
          kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FIELD,
          name: {
            kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].NAME,
            value: "__typename"
          }
        } ])
      })
    });
  }
}

function u(a) {
  a = Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["k"])(a);
  var b = t.get(a.__key);
  b || ((b = Object(graphql_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__["visit"])(a, {
    Field: r,
    InlineFragment: r
  })).__key = a.__key, t.set(a.__key, b));
  return b;
}

function v(a) {
  return a && "object" == typeof a ? Object.keys(a).reduce((function(b, c) {
    var d = a[c];
    "__typename" === c ? Object.defineProperty(b, "__typename", {
      enumerable: !1,
      value: d
    }) : Array.isArray(d) ? b[c] = d.map(v) : b[c] = d && "object" == typeof d && "__typename" in d ? v(d) : d;
    return b;
  }), {}) : a;
}

function w(a) {
  a.toPromise = function() {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["toPromise"])(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["take"])(1)(a));
  };
  return a;
}

function x(a, b, c) {
  c || (c = b.context);
  return {
    key: b.key,
    query: b.query,
    variables: b.variables,
    kind: a,
    context: c
  };
}

function y(a, b) {
  return x(a.kind, a, Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a.context, {
    meta: Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a.context.meta, b)
  }));
}

function z() {}

function A(a, b, c) {
  var d, e, f;
  for (d = 0; d < c.length; d++) {
    if (c[d].kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FRAGMENT_DEFINITION) {
      e = c[d].name.value, f = Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["s"])(c[d]);
      a.has(e) ?  true && a.get(e) !== f && console.warn("[WARNING: Duplicate Fragment] A fragment with name `" + e + "` already exists in this document.\nWhile fragment names may not be unique across your source, each name must be unique per document.") : (a.set(e, f), 
      b.push(c[d]));
    } else {
      b.push(c[d]);
    }
  }
}

function B(a) {
  return "subscription" !== (a = a.kind) && "query" !== a;
}

function C(a) {
  return a.path || a.extensions ? {
    message: a.message,
    path: a.path,
    extensions: a.extensions
  } : a.message;
}

function D(a) {
  return "mutation" !== (a = a.kind) && "query" !== a;
}

function E(a) {
  var b = x(a.kind, a);
  b.query = u(a.query);
  return b;
}

function F(a) {
  return "query" !== a.kind || "cache-only" !== a.context.requestPolicy;
}

function G(a) {
  return y(a, {
    cacheOutcome: "miss"
  });
}

function H(a) {
  return D(a);
}

function I(a) {
  function b(a) {
    var b = a.context.requestPolicy;
    return "query" === a.kind && "network-only" !== b && ("cache-only" === b || k.has(a.key));
  }
  function c(a) {
    var c = k.get(a.key);
     true && q(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, {
      operation: a
    }, c ? {
      type: "cacheHit",
      message: "The result was successfully retried from the cache"
    } : {
      type: "cacheMiss",
      message: "The result could not be retrieved from the cache"
    }));
    c = Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, c, {
      operation: y(a, {
        cacheOutcome: c ? "hit" : "miss"
      })
    });
    "cache-and-network" === a.context.requestPolicy && (c.stale = !0, J(m, a));
    return c;
  }
  function d(a) {
    return !D(a) && b(a);
  }
  function e(a) {
    function c(a) {
      g.add(a);
    }
    var e, g, l, d = a.operation;
    if (d) {
      e = Object.keys(n(a.data, {})).concat(d.context.additionalTypenames || []);
      if ("mutation" === a.operation.kind) {
        g = new Set;
         true && q({
          type: "cacheInvalidation",
          message: "The following typenames have been invalidated: " + e,
          operation: d,
          data: {
            typenames: e,
            response: a
          },
          source: "cacheExchange"
        });
        for (a = 0; a < e.length; a++) {
          (l = h[l = e[a]] || (h[l] = new Set)).forEach(c);
          l.clear();
        }
        g.forEach((function b(a) {
          k.has(a) && (d = k.get(a).operation, k.delete(a), J(m, d));
        }));
      } else if ("query" === d.kind && a.data) {
        for (k.set(d.key, a), a = 0; a < e.length; a++) {
          (h[l = e[a]] || (h[l] = new Set)).add(d.key);
        }
      }
    }
  }
  function f(a) {
    return !D(a) && !b(a);
  }
  var g = a.forward, m = a.client, q = a.dispatchDebug, k = new Map, h = Object.create(null);
  return function(a) {
    var b = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(a);
    a = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(c)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(d)(b));
    b = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(e)(g(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(F)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(G)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(E)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(f)(b)), Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(H)(b) ])))));
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ a, b ]);
  };
}

function J(a, b) {
  return a.reexecuteOperation(x(b.kind, b, Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, b.context, {
    requestPolicy: "network-only"
  })));
}

function K(a) {
  return console.log("[Exchange debug]: Completed operation: ", a);
}

function L(a) {
  return console.log("[Exchange debug]: Incoming operation: ", a);
}

function M(a) {
  function b(a) {
    f.delete(a.operation.key);
  }
  function c(a) {
    var c = a.key, b = a.kind;
    if ("teardown" === b) {
      return f.delete(c), !0;
    }
    if ("query" !== b && "subscription" !== b) {
      return !0;
    }
    b = f.has(c);
    f.add(c);
    b && "production" !== "development" && e({
      type: "dedup",
      message: "An operation has been deduped.",
      operation: a,
      source: "dedupExchange"
    });
    return !b;
  }
  var d = a.forward, e = a.dispatchDebug, f = new Set;
  return function(a) {
    a = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(c)(a);
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(b)(d(a));
  };
}

function N(a) {
  return "query" === a.kind || "mutation" === a.kind;
}

function O(a) {
  return "query" !== a.kind && "mutation" !== a.kind;
}

function P(a) {
  var b = a.forward, c = a.dispatchDebug;
  return function(a) {
    var f, d = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(a);
    a = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((function(a) {
      var b = a.key, e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(a) {
        return "teardown" === a.kind && a.key === b;
      }))(d), g = Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["b"])(a), h = Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["c"])(a, g), l = Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["d"])(a, g);
       true && c({
        type: "fetchRequest",
        message: "A fetch request is being executed.",
        operation: a,
        data: {
          url: h,
          fetchOptions: l
        },
        source: "fetchExchange"
      });
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["onPush"])((function(b) {
        var d = b.data ? void 0 : b.error;
         true && c({
          type: d ? "fetchError" : "fetchSuccess",
          message: "A " + (d ? "failed" : "successful") + " fetch response has been returned.",
          operation: a,
          data: {
            url: h,
            fetchOptions: l,
            value: d || b
          },
          source: "fetchExchange"
        });
      }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(e)(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["e"])(a, h, l)));
    }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(N)(d));
    f = b(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(O)(d));
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ a, f ]);
  };
}

function Q() {
  return !1;
}

function R(a) {
  function b(a) {
    if ("teardown" !== a.kind && "production" !== "development") {
      var b = 'No exchange has handled operations of kind "' + a.kind + "\". Check whether you've added an exchange responsible for these operations.";
       true && c({
        type: "fallbackCatch",
        message: b,
        operation: a,
        source: "fallbackExchange"
      });
      console.warn(b);
    }
  }
  var c = a.dispatchDebug;
  return function(a) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(Q)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(b)(a));
  };
}

function T(a) {
  return function(b) {
    var c = b.client, d = b.dispatchDebug;
    return a.reduceRight((function(a, b) {
      return b({
        client: c,
        forward: a,
        dispatchDebug: function(a) {
           true && d(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, {
            timestamp: Date.now(),
            source: b.name
          }, a));
        }
      });
    }), b.forward);
  };
}

function V(a) {
  var d, e, f, g, m, c = this;
  this.activeOperations = Object.create(null);
  this.queue = [];
  this.createOperationContext = function(a) {
    a || (a = {});
    return Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, {
      url: c.url,
      fetchOptions: c.fetchOptions,
      fetch: c.fetch,
      preferGetMethod: c.preferGetMethod
    }, a, {
      suspense: a.suspense || !1 !== a.suspense && c.suspense,
      requestPolicy: a.requestPolicy || c.requestPolicy
    });
  };
  this.createRequestOperation = function(a, b, d) {
    return x(a, b, c.createOperationContext(d));
  };
  this.executeQuery = function(a, b) {
    a = c.createRequestOperation("query", a, b);
    return c.executeRequestOperation(a);
  };
  this.executeSubscription = function(a, b) {
    a = c.createRequestOperation("subscription", a, b);
    return c.executeRequestOperation(a);
  };
  this.executeMutation = function(a, b) {
    a = c.createRequestOperation("mutation", a, b);
    return c.executeRequestOperation(a);
  };
  if ( true && !a.url) {
    throw Error("You are creating an urql-client without a url.");
  }
  d = z;
  if (true) {
    e = (d = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["makeSubject"])()).next, f = d.source;
    this.subscribeToDebugTarget = function b(a) {
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["subscribe"])(a)(f);
    };
    d = e;
  }
  this.url = a.url;
  this.fetchOptions = a.fetchOptions;
  this.fetch = a.fetch;
  this.suspense = !!a.suspense;
  this.requestPolicy = a.requestPolicy || "cache-first";
  this.preferGetMethod = !!a.preferGetMethod;
  this.maskTypename = !!a.maskTypename;
  e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["makeSubject"])();
  g = e.next;
  this.operations$ = e.source;
  m = !1;
  this.dispatchOperation = function(a) {
    m = !0;
    for (a && g(a); a = c.queue.shift(); ) {
      g(a);
    }
    m = !1;
  };
  this.reexecuteOperation = function(a) {
    if ("mutation" === a.kind || 0 < (c.activeOperations[a.key] || 0)) {
      c.queue.push(a), m || Promise.resolve().then(c.dispatchOperation);
    }
  };
  a = T(void 0 !== a.exchanges ? a.exchanges : U);
  this.results$ = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(a({
    client: this,
    dispatchDebug: d,
    forward: R({
      dispatchDebug: d
    })
  })(this.operations$));
  Object(wonka__WEBPACK_IMPORTED_MODULE_0__["publish"])(this.results$);
}

function W(a) {
  a.data = v(a.data);
  return a;
}

function createClient(a) {
  return new V(a);
}

function debugExchange(a) {
  var d = a.forward;
  return  false ? undefined : function c(a) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(K)(d(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(L)(a)));
  };
}

function errorExchange(a) {
  function b(a) {
    var b = a.error;
    a = a.operation;
    b && c(b, a);
  }
  var c = a.onError;
  return function(a) {
    var c = a.forward;
    return function(a) {
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(b)(c(a));
    };
  };
}

function gql() {
  var a, b, c, d, e, f, g;
  for (a = arguments, b = new Map, c = [], d = [], e = Array.isArray(arguments[0]) ? arguments[0][0] : arguments[0] || "", 
  f = 1; f < arguments.length; f++) {
    (g = a[f]) && g.definitions ? d.push.apply(d, g.definitions) : e += g;
    e += a[0][f];
  }
  A(b, c, Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["k"])(e).definitions);
  A(b, c, d);
  return Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["k"])({
    kind: graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].DOCUMENT,
    definitions: c
  });
}

function ssrExchange(a) {
  function b(b) {
    var c = b.client, l = b.forward;
    return function(b) {
      var e = a && "boolean" == typeof a.isClient ? !!a.isClient : !c.suspense, h = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(b);
      b = l(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(f)(h));
      h = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(g)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(m)(h));
      e ? h = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(d)(h) : b = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["tap"])(q)(b);
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ b, h ]);
    };
  }
  function c(a) {
    return !B(a) && void 0 !== k[a.key];
  }
  function d(a) {
    h.push(a.operation.key);
    1 === h.length && Promise.resolve().then(e);
  }
  function e() {
    for (var a; a = h.shift(); ) {
      delete k[a];
    }
  }
  function f(a) {
    return !c(a);
  }
  function g(a) {
    var b = k[a.key], c = b.error;
    return {
      operation: a,
      data: (b = b.data) ? JSON.parse(b) : void 0,
      extensions: void 0,
      error: c ? new _2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["C"]({
        networkError: c.networkError ? Error(c.networkError) : void 0,
        graphQLErrors: c.graphQLErrors && c.graphQLErrors.length ? c.graphQLErrors : void 0
      }) : void 0
    };
  }
  function m(a) {
    return c(a);
  }
  function q(a) {
    var c, d, b = a.operation;
    if (!B(b)) {
      c = a.data;
      a = a.error;
      d = {};
      void 0 !== c && (d.data = JSON.stringify(c));
      a && (d.error = {
        graphQLErrors: a.graphQLErrors.map(C)
      }, a.networkError && (d.error.networkError = "" + a.networkError));
      k[b.key] = d;
    }
  }
  var k = {}, h = [];
  b.restoreData = function(a) {
    return Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])(k, a);
  };
  b.extractData = function() {
    return Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, k);
  };
  a && a.initialState && b.restoreData(a.initialState);
  return b;
}

function subscriptionExchange(a) {
  function b(a) {
    return "subscription" === (a = a.kind) || !!d && ("query" === a || "mutation" === a);
  }
  var c = a.forwardSubscription, d = a.enableAllOperations;
  return function(a) {
    function d(a) {
      var b = c({
        key: a.key.toString(36),
        query: Object(graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__["print"])(a.query),
        variables: a.variables,
        context: Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a.context)
      });
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["make"])((function(c) {
        function d(b) {
          return f(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["m"])(a, b));
        }
        function e(b) {
          return f(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["a"])(a, b));
        }
        function h() {
          g || (g = !0, "subscription" === a.kind && m.reexecuteOperation(x("teardown", a, a.context)), 
          l());
        }
        var k, f = c.next, l = c.complete, g = !1;
        Promise.resolve().then((function() {
          g || (k = b.subscribe({
            next: d,
            error: e,
            complete: h
          }));
        }));
        return function() {
          g = !0;
          k && k.unsubscribe();
        };
      }));
    }
    function e(a) {
      return !k(a);
    }
    var m = a.client, q = a.forward, k = b;
    return function(a) {
      var c, b = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["share"])(a);
      a = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((function(a) {
        var c = a.key, e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(a) {
          return "teardown" === a.kind && a.key === c;
        }))(b);
        return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(e)(d(a));
      }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(k)(b));
      c = q(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])(e)(b));
      return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ a, c ]);
    };
  };
}

var t, S, U;













t = new Map;

S = R({
  dispatchDebug: z
});

U = [ M, I, P ];

V.prototype.onOperationStart = function(a) {
  var b = a.key;
  this.activeOperations[b] = (this.activeOperations[b] || 0) + 1;
  this.dispatchOperation(a);
};

V.prototype.onOperationEnd = function(a) {
  var b = a.key, c = this.activeOperations[b] || 0;
  if (0 >= (this.activeOperations[b] = 0 >= c ? 0 : c - 1)) {
    for (b = this.queue.length - 1; 0 <= b; b--) {
      this.queue[b].key === a.key && this.queue.splice(b, 1);
    }
    this.dispatchOperation(x("teardown", a, a.context));
  }
};

V.prototype.executeRequestOperation = function(a) {
  var e, f, c = this, d = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(b) {
    return b.operation.key === a.key;
  }))(this.results$);
  this.maskTypename && (d = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])(W)(d));
  if ("mutation" === a.kind) {
    return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["take"])(1)(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["onStart"])((function b() {
      return c.dispatchOperation(a);
    }))(d));
  }
  e = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(b) {
    return "teardown" === b.kind && b.key === a.key;
  }))(this.operations$), f = Object(wonka__WEBPACK_IMPORTED_MODULE_0__["filter"])((function(b) {
    return b.kind === a.kind && b.key === a.key && "cache-only" !== b.context.requestPolicy;
  }))(this.operations$);
  return Object(wonka__WEBPACK_IMPORTED_MODULE_0__["onEnd"])((function() {
    c.onOperationEnd(a);
  }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["onStart"])((function() {
    c.onOperationStart(a);
  }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((function(a) {
    return a.stale ? Object(wonka__WEBPACK_IMPORTED_MODULE_0__["fromValue"])(a) : Object(wonka__WEBPACK_IMPORTED_MODULE_0__["merge"])([ Object(wonka__WEBPACK_IMPORTED_MODULE_0__["fromValue"])(a), Object(wonka__WEBPACK_IMPORTED_MODULE_0__["map"])((function() {
      return Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, a, {
        stale: !0
      });
    }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["take"])(1)(f)) ]);
  }))(Object(wonka__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(e)(d))));
};

V.prototype.query = function(a, b, c) {
  c && "boolean" == typeof c.suspense || (c = Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["_"])({}, c, {
    suspense: !1
  }));
  return w(this.executeQuery(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["f"])(a, b), c));
};

V.prototype.readQuery = function(a, b, c) {
  var d = null;
  Object(wonka__WEBPACK_IMPORTED_MODULE_0__["subscribe"])((function(a) {
    d = a;
  }))(this.executeQuery(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["f"])(a, b), c)).unsubscribe();
  return d;
};

V.prototype.subscription = function(a, b, c) {
  return this.executeSubscription(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["f"])(a, b), c);
};

V.prototype.mutation = function(a, b, c) {
  return w(this.executeMutation(Object(_2c01d8b2_mjs__WEBPACK_IMPORTED_MODULE_1__["f"])(a, b), c));
};


//# sourceMappingURL=urql-core.mjs.map


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/*! exports provided: GraphQLError, printError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _language_location_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// FIXME:
// flowlint uninitialized-instance-property:off




/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);

  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */
  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _locations2, _source2, _positions2, _extensions2;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message); // Compute list of blame nodes.

    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var _nodes$0$loc;

      _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return Object(_language_location_mjs__WEBPACK_IMPORTED_MODULE_2__["getLocation"])(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(Object(_language_location_mjs__WEBPACK_IMPORTED_MODULE_2__["getLocation"])(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if (Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(_assertThisInitialized(_this), {
      name: {
        value: 'GraphQLError'
      },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path !== null && path !== void 0 ? path : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null
      },
      nodes: {
        value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
      },
      source: {
        value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
      },
      positions: {
        value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + Object(_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__["printLocation"])(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + Object(_language_printLocation_mjs__WEBPACK_IMPORTED_MODULE_3__["printSourceLocation"])(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/*! exports provided: syntaxError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return syntaxError; });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineInspect.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineInspect; });
/* harmony import */ var _invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");


/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || Object(_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    classObject.prototype[_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return devAssert; });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inspect; });
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable flowtype/no-weak-types */

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
undefined : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectLike; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/language/ast.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/language/ast.mjs ***!
  \***********************************************/
/*! exports provided: Location, Token, isNode */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");


/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

Object(_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

Object(_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */


/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/*! exports provided: dedentBlockStringValue, getBlockStringIndentation, printBlockString */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedentBlockStringValue", function() { return dedentBlockStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockStringIndentation", function() { return getBlockStringIndentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printBlockString", function() { return printBlockString; });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/*! exports provided: DirectiveLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return DirectiveLocation; });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/*! exports provided: Kind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/*! exports provided: Lexer, isPunctuatorTokenKind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPunctuatorTokenKind", function() { return isPunctuatorTokenKind; });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");




/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF) {
      do {
        var _token$next;

        // Note: next is only mutable during parsing, so we cast to allow this.
        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BANG || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].DOLLAR || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AMP || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COLON || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EQUALS || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AT || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_R || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_L || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PIPE || kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](isFloat ? _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].FLOAT : _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BLOCK_STRING, start, position + 3, line, col, prev, Object(_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__["dedentBlockStringValue"])(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new _ast_mjs__WEBPACK_IMPORTED_MODULE_1__["Token"](_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/*! exports provided: getLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/*! exports provided: parse, parseValue, parseType, Parser */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return parseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF);
  return type;
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = Object(_source_mjs__WEBPACK_IMPORTED_MODULE_4__["isSource"])(source) ? source : new _source_mjs__WEBPACK_IMPORTED_MODULE_4__["Source"](source);
    this._lexer = new _lexer_mjs__WEBPACK_IMPORTED_MODULE_6__["Lexer"](sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DOCUMENT,
      definitions: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF, this.parseDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, this.parseVariableDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SELECTION_SET,
      selections: this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseSelection, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].INT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].STRING:
      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].STRING,
      value: token.value,
      block: token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST,
      values: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT,
      fields: this.any(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, item, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R);
      type = {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BANG)) {
      return {
        kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].STRING) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP) || this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME));

      return types;
    }

    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3;

    // Legacy support for the SDL?
    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L) && this._lexer.lookahead().kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseFieldDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS) ? this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseEnumValueDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseInputValueDef, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_5__["DirectiveLocation"][name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new _ast_mjs__WEBPACK_IMPORTED_MODULE_2__["Location"](startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return Object(_error_syntaxError_mjs__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return Object(_lexer_mjs__WEBPACK_IMPORTED_MODULE_6__["isPunctuatorTokenKind"])(kind) ? "\"".concat(kind, "\"") : kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/*! exports provided: printLocation, printSourceLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return printLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return printSourceLocation; });
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, Object(_location_mjs__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/*! exports provided: print */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");


/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return Object(_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__["visit"])(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? Object(_blockString_mjs__WEBPACK_IMPORTED_MODULE_1__["printBlockString"])(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/*! exports provided: Source, isSource */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSource", function() { return isSource; });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(0, "Body must be a string. Received: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(source, Source);
}


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/*! exports provided: TokenKind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return TokenKind; });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/*! exports provided: QueryDocumentKeys, BREAK, visit, visitInParallel, getVisitFn */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDocumentKeys", function() { return QueryDocumentKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return BREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return visitInParallel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return getVisitFn; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!Object(_ast_mjs__WEBPACK_IMPORTED_MODULE_1__["isNode"])(node)) {
        throw new Error("Invalid AST Node: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (Object(_ast_mjs__WEBPACK_IMPORTED_MODULE_1__["isNode"])(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/symbols.mjs ***!
  \****************************************************/
/*! exports provided: SYMBOL_ITERATOR, SYMBOL_ASYNC_ITERATOR, SYMBOL_TO_STRING_TAG */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_ITERATOR", function() { return SYMBOL_ITERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_ASYNC_ITERATOR", function() { return SYMBOL_ASYNC_ITERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL_TO_STRING_TAG", function() { return SYMBOL_TO_STRING_TAG; });
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator != null ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator != null ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';


/***/ }),

/***/ "./node_modules/urql/dist/urql.es.js":
/*!*******************************************!*\
  !*** ./node_modules/urql/dist/urql.es.js ***!
  \*******************************************/
/*! exports provided: CombinedError, createRequest, getOperationName, makeErrorResult, makeResult, stringifyVariables, Client, cacheExchange, composeExchanges, createClient, debugExchange, dedupExchange, defaultExchanges, errorExchange, fallbackExchangeIO, fetchExchange, formatDocument, gql, makeOperation, maskTypename, ssrExchange, subscriptionExchange, Consumer, Context, Mutation, Provider, Query, Subscription, useClient, useMutation, useQuery, useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClient", function() { return useClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var _urql_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/core */ "./node_modules/@urql/core/dist/urql-core.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombinedError", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["CombinedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequest", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["createRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeErrorResult", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["makeErrorResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeResult", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["makeResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyVariables", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["stringifyVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["Client"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["cacheExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeExchanges", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["composeExchanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createClient", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["createClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debugExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["debugExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dedupExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["dedupExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultExchanges", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["defaultExchanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["errorExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackExchangeIO", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["fallbackExchangeIO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["fetchExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDocument", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["formatDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["gql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeOperation", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["makeOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maskTypename", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["maskTypename"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["ssrExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscriptionExchange", function() { return _urql_core__WEBPACK_IMPORTED_MODULE_0__["subscriptionExchange"]; });

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
function _extends() {
  return (_extends = Object.assign || function(target) {
    var i, source, key;
    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }).apply(this, arguments);
}

function useMutation(query) {
  function _ref(result) {
    if (isMounted.current) {
      setState({
        fetching: !1,
        stale: !!result.stale,
        data: result.data,
        error: result.error,
        extensions: result.extensions,
        operation: result.operation
      });
    }
    return result;
  }
  function _ref2() {
    isMounted.current = !1;
  }
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(!0), client = useClient(), ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), state = ref[0], setState = ref[1], executeMutation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(variables, context) {
    setState(_extends({}, initialState, {
      fetching: !0
    }));
    return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["toPromise"])(client.executeMutation(Object(_urql_core__WEBPACK_IMPORTED_MODULE_0__["createRequest"])(query, variables), context || {})).then(_ref);
  }), [ client, query, setState ]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function() {
    return _ref2;
  }), []);
  return [ state, executeMutation ];
}

function useRequest(query, variables) {
  var prev = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(void 0);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function() {
    var request = Object(_urql_core__WEBPACK_IMPORTED_MODULE_0__["createRequest"])(query, variables);
    if (void 0 !== prev.current && prev.current.key === request.key) {
      return prev.current;
    } else {
      prev.current = request;
      return request;
    }
  }), [ query, variables ]);
}

function useQuery(args) {
  function _ref(result) {
    cache.set(request.key, result);
  }
  var client = useClient(), cache = getCacheForClient(client), suspense = isSuspense(client, args.context), request = useRequest(args.query, args.variables), source = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function() {
    if (args.pause) {
      return null;
    }
    var source = client.executeQuery(request, _extends({}, {
      requestPolicy: args.requestPolicy
    }, args.context));
    return suspense ? Object(wonka__WEBPACK_IMPORTED_MODULE_2__["onPush"])(_ref)(source) : source;
  }), [ client, request, suspense, args.pause, args.requestPolicy, args.context ]), getSnapshot = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(source, suspense) {
    var result, resolve, subscription, promise;
    if (!source) {
      return {
        fetching: !1
      };
    }
    if (!(result = cache.get(request.key))) {
      subscription = Object(wonka__WEBPACK_IMPORTED_MODULE_2__["subscribe"])((function _ref2(_result) {
        result = _result;
        if (resolve) {
          resolve(result);
        }
      }))(Object(wonka__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])((function _ref3() {
        return suspense && !resolve || !result;
      }))(source));
      if (null == result && suspense) {
        promise = new Promise((function _ref4(_resolve) {
          resolve = _resolve;
        }));
        cache.set(request.key, promise);
        throw promise;
      } else {
        subscription.unsubscribe();
      }
    } else if (suspense && null != result && "then" in result) {
      throw result;
    }
    return result || {
      fetching: !0
    };
  }), [ request ]), deps = [ client, request, args.requestPolicy, args.context, args.pause ], ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((function() {
    currentInit = !0;
    try {
      return [ source, computeNextState(initialState, getSnapshot(source, suspense)), deps ];
    } finally {
      currentInit = !1;
    }
  })), state = ref[0], setState = ref[1], currentResult = state[1];
  if (source !== state[0] && hasDepsChanged(state[2], deps)) {
    setState([ source, currentResult = computeNextState(state[1], getSnapshot(source, suspense)), deps ]);
  }
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function() {
    var subscription, source = state[0], request = state[2][1], hasResult = !1, updateResult = function(result) {
      hasResult = !0;
      if (!currentInit) {
        setState((function _ref5(state) {
          var nextResult = computeNextState(state[1], result);
          return state[1] !== nextResult ? [ state[0], nextResult, state[2] ] : state;
        }));
      }
    };
    if (source) {
      subscription = Object(wonka__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(updateResult)(Object(wonka__WEBPACK_IMPORTED_MODULE_2__["onEnd"])((function _ref6() {
        updateResult({
          fetching: !1
        });
      }))(source));
      if (!hasResult) {
        updateResult({
          fetching: !0
        });
      }
      return function _ref7() {
        cache.dispose(request.key);
        subscription.unsubscribe();
      };
    } else {
      updateResult({
        fetching: !1
      });
    }
  }), [ cache, state[0], state[2][1] ]);
  return [ currentResult, Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(opts) {
    var context = _extends({}, {
      requestPolicy: args.requestPolicy
    }, args.context, opts), source = client.executeQuery(request, context);
    setState((function(state) {
      var snapshot = "network-only" !== context.requestPolicy ? getSnapshot(source, !1) : {
        fetching: !0
      }, nextResult = computeNextState(state[1], snapshot);
      return state[1] !== nextResult ? [ source, nextResult, state[2] ] : state;
    }));
  }), [ client, request, getSnapshot, args.requestPolicy, args.context ]) ];
}

function useSubscription(args, handler) {
  function _ref(result) {
    setState((function(state) {
      var nextResult = computeNextState(state[1], result);
      if (state[1] === nextResult) {
        return state;
      }
      if (handlerRef.current && state[1].data !== nextResult.data) {
        nextResult.data = handlerRef.current(state[1].data, nextResult.data);
      }
      return [ state[0], nextResult, state[2] ];
    }));
  }
  var source, deps, ref, state, setState, currentResult, client = useClient(), request = useRequest(args.query, args.variables), handlerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(handler);
  handlerRef.current = handler;
  source = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function() {
    return !args.pause ? client.executeSubscription(request, args.context) : null;
  }), [ client, request, args.pause, args.context ]);
  deps = [ client, request, args.context, args.pause ];
  ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((function() {
    return [ source, _extends({}, initialState, {
      fetching: !!source
    }), deps ];
  }));
  setState = ref[1];
  currentResult = (state = ref[0])[1];
  if (source !== state[0] && hasDepsChanged(state[2], deps)) {
    setState([ source, currentResult = computeNextState(state[1], {
      fetching: !!source
    }), deps ]);
  }
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function() {
    var updateResult = _ref;
    if (state[0]) {
      return Object(wonka__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(updateResult)(Object(wonka__WEBPACK_IMPORTED_MODULE_2__["onEnd"])((function _ref2() {
        updateResult({
          fetching: !1
        });
      }))(state[0])).unsubscribe;
    } else {
      updateResult({
        fetching: !1
      });
    }
  }), [ state[0] ]);
  return [ currentResult, Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((function(opts) {
    var source = client.executeSubscription(request, _extends({}, args.context, opts));
    setState((function(state) {
      return [ source, state[1], state[2] ];
    }));
  }), [ client, args.context, request ]) ];
}

function Mutation(props) {
  var mutation = useMutation(props.query);
  return props.children(_extends({}, mutation[0], {
    executeMutation: mutation[1]
  }));
}

function Query(props) {
  var query = useQuery(props);
  return props.children(_extends({}, query[0], {
    executeQuery: query[1]
  }));
}

function Subscription(props) {
  var subscription = useSubscription(props, props.handler);
  return props.children(_extends({}, subscription[0], {
    executeSubscription: subscription[1]
  }));
}

var defaultClient, Context, Provider, Consumer, hasWarnedAboutDefault, useClient, initialState, isShallowDifferent, computeNextState, hasDepsChanged, getCacheForClient, isSuspense, currentInit;









defaultClient = Object(_urql_core__WEBPACK_IMPORTED_MODULE_0__["createClient"])({
  url: "/graphql"
});

Provider = (Context = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(defaultClient)).Provider;

Consumer = Context.Consumer;

hasWarnedAboutDefault = !1;

useClient = function() {
  var client = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Context);
  if ( true && client === defaultClient && !hasWarnedAboutDefault) {
    hasWarnedAboutDefault = !0;
    console.warn("Default Client: No client has been specified using urql's Provider.This means that urql will be falling back to defaults including making requests to `/graphql`.\nIf that's not what you want, please create a client and add a Provider.");
  }
  return client;
};

initialState = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
};

isShallowDifferent = function(a, b) {
  var x, x$1;
  if ("object" != typeof a || "object" != typeof b) {
    return a !== b;
  }
  for (x in a) {
    if (!(x in b)) {
      return !0;
    }
  }
  for (x$1 in b) {
    if (a[x$1] !== b[x$1]) {
      return !0;
    }
  }
  return !1;
};

computeNextState = function(prevState, result) {
  var newState = _extends({}, prevState, result, {
    fetching: !!result.fetching,
    stale: !!result.stale
  });
  return isShallowDifferent(prevState, newState) ? newState : prevState;
};

hasDepsChanged = function(a, b) {
  for (var i = 0, l = b.length; i < l; i++) {
    if (a[i] !== b[i]) {
      return !0;
    }
  }
  return !1;
};

getCacheForClient = function(client) {
  var reclaim, map;
  if (!client._react) {
    reclaim = new Set;
    map = new Map;
    if (client.operations$) {
      Object(wonka__WEBPACK_IMPORTED_MODULE_2__["subscribe"])((function _ref(operation) {
        if ("teardown" === operation.kind && reclaim.has(operation.key)) {
          reclaim.delete(operation.key);
          map.delete(operation.key);
        }
      }))(client.operations$);
    }
    client._react = {
      get: function _get(key) {
        return map.get(key);
      },
      set: function _set(key, value) {
        reclaim.delete(key);
        map.set(key, value);
      },
      dispose: function _dispose(key) {
        reclaim.add(key);
      }
    };
  }
  return client._react;
};

isSuspense = function(client, context) {
  return client.suspense && (!context || !1 !== context.suspense);
};

currentInit = !1;


//# sourceMappingURL=urql.es.js.map


/***/ }),

/***/ "./node_modules/wonka/dist/wonka.mjs":
/*!*******************************************!*\
  !*** ./node_modules/wonka/dist/wonka.mjs ***!
  \*******************************************/
/*! exports provided: buffer, combine, concat, concatAll, concatMap, debounce, delay, empty, filter, flatten, forEach, fromArray, fromCallbag, fromDomEvent, fromList, fromObservable, fromPromise, fromValue, interval, make, makeSubject, map, merge, mergeAll, mergeMap, never, onEnd, onPush, onStart, pipe, publish, sample, scan, share, skip, skipUntil, skipWhile, subscribe, switchAll, switchMap, take, takeLast, takeUntil, takeWhile, tap, throttle, toArray, toCallbag, toObservable, toPromise */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatMap", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCallbag", function() { return fromCallbag$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDomEvent", function() { return fromDomEvent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromList", function() { return fromList$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromObservable", function() { return fromObservable$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValue", function() { return fromValue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "make", function() { return make$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSubject", function() { return makeSubject$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEnd", function() { return onEnd$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPush", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publish", function() { return publish$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipUntil", function() { return skipUntil$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchAll", function() { return switchAll$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return takeUntil$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCallbag", function() { return toCallbag$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObservable", function() { return toObservable$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise$1; });
function l(a, b) {
  b.tag = a;
  return b;
}

function m() {}

function p(a) {
  return function (b) {
    var c = a.length;
    let d = !1,
      e = !1,
      f = !1,
      g = 0;
    b(
      l(0, [
        function (h) {
          if (h) {
            d = !0;
          } else if (e) {
            f = !0;
          } else {
            for (e = f = !0; f && !d; ) {
              g < c ? ((h = a[g]), (g = (g + 1) | 0), (f = !1), b(l(1, [h]))) : ((d = !0), b(0));
            }
            e = !1;
          }
        },
      ])
    );
  };
}

function r() {}

function t(a) {
  a(0);
}

function u(a) {
  let b = !1;
  a(
    l(0, [
      function (c) {
        c ? (b = !0) : b || a(0);
      },
    ])
  );
}

function w(a) {
  if (void 0 === a) {
    return ((a = [v, 0]).tag = 256), a;
  }
  if (null === a || a[0] !== v) {
    return a;
  }
  (a = [v, (a[1] + 1) | 0]).tag = 256;
  return a;
}

function x(a) {
  if (null === a || a[0] !== v) {
    return a;
  }
  if (0 !== (a = a[1])) {
    return [v, (a - 1) | 0];
  }
}

function z(a) {
  return function (b) {
    return function (c) {
      function d(b) {
        'number' == typeof b
          ? k &&
            ((k = !1),
            void 0 !== (b = e.shift())
              ? ((b = a(x(b))), (k = !0), b(d))
              : q
              ? c(0)
              : g || ((g = !0), f(0)))
          : b.tag
          ? k && (c(b), n ? (n = !1) : h(0))
          : ((h = b = b[0]), (n = !1), b(0));
      }
      let e = [],
        f = m,
        g = !1,
        h = m,
        k = !1,
        n = !1,
        q = !1;
      b(function (b) {
        'number' == typeof b
          ? q || ((q = !0), k || 0 !== e.length || c(0))
          : b.tag
          ? q || ((b = b[0]), (g = !1), k ? e.push(b) : ((b = a(b)), (k = !0), b(d)))
          : (f = b[0]);
      });
      c(
        l(0, [
          function (c) {
            if (c) {
              if ((q || ((q = !0), f(1)), k)) {
                return (k = !1), h(1);
              }
            } else {
              q || g || ((g = !0), f(0)), k && !n && ((n = !0), h(0));
            }
          },
        ])
      );
    };
  };
}

function A(a) {
  return a;
}

function B(a) {
  return a;
}

function C(a) {
  return a(0);
}

function D(a) {
  return function (b) {
    return function (c) {
      let e = m,
        f = !1,
        g = [],
        h = !1;
      b(function (b) {
        'number' == typeof b
          ? h || ((h = !0), 0 === g.length && c(0))
          : b.tag
          ? h ||
            ((f = !1),
            (function (a) {
              function b(a) {
                'number' == typeof a
                  ? 0 !== g.length &&
                    ((g = g.filter(d)),
                    (a = 0 === g.length),
                    h && a ? c(0) : !f && a && ((f = !0), e(0)))
                  : a.tag
                  ? 0 !== g.length && (c(l(1, [a[0]])), k(0))
                  : ((k = a = a[0]), (g = g.concat(a)), a(0));
              }
              function d(a) {
                return a !== k;
              }
              let k = m;
              1 === a.length ? a(b) : a.bind(null, b);
            })(a(b[0])),
            f || ((f = !0), e(0)))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            a
              ? (h || ((h = !0), e(a)),
                g.forEach(function (c) {
                  return c(a);
                }),
                (g = []))
              : (f || h ? (f = !1) : ((f = !0), e(0)), g.forEach(C));
          },
        ])
      );
    };
  };
}

function E(a) {
  return a;
}

function F(a) {
  return a;
}

function G(a) {
  return D(F)(a);
}

function H(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (e) {
        if ('number' == typeof e) {
          d || ((d = !0), c(e));
        } else if (e.tag) {
          d || (a(e[0]), c(e));
        } else {
          var g = e[0];
          c(
            l(0, [
              function (a) {
                if (!d) {
                  return a && (d = !0), g(a);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function J(a) {
  a(0);
}

function K(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        h &&
          ('number' == typeof a
            ? ((h = !1), n ? c(a) : f || ((f = !0), e(0)))
            : a.tag
            ? (c(a), k ? (k = !1) : g(0))
            : ((g = a = a[0]), (k = !1), a(0)));
      }
      let e = m,
        f = !1,
        g = m,
        h = !1,
        k = !1,
        n = !1;
      b(function (b) {
        'number' == typeof b
          ? n || ((n = !0), h || c(0))
          : b.tag
          ? n ||
            (h && (g(1), (g = m)), f ? (f = !1) : ((f = !0), e(0)), (b = a(b[0])), (h = !0), b(d))
          : (e = b[0]);
      });
      c(
        l(0, [
          function (a) {
            if (a) {
              if ((n || ((n = !0), e(1)), h)) {
                return (h = !1), g(1);
              }
            } else {
              n || f || ((f = !0), e(0)), h && !k && ((k = !0), g(0));
            }
          },
        ])
      );
    };
  };
}

function L(a) {
  return a;
}

function M(a) {
  return function (b) {
    return function (c) {
      let d = [],
        e = m;
      return b(function (b) {
        'number' == typeof b
          ? p(d)(c)
          : b.tag
          ? (d.length >= a && 0 < a && d.shift(), d.push(b[0]), e(0))
          : ((b = b[0]), 0 >= a ? (b(1), u(c)) : ((e = b), b(0)));
      });
    };
  };
}

function N(a) {
  return function (b) {
    let c = m,
      d = !1;
    b(function (e) {
      'number' == typeof e ? (d = !0) : e.tag ? d || (a(e[0]), c(0)) : ((c = e = e[0]), e(0));
    });
    return {
      unsubscribe: function () {
        if (!d) {
          return (d = !0), c(1);
        }
      },
    };
  };
}

function O() {}

function Q() {}

function R() {}

function S() {}

function buffer$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? k || ((k = !0), f(1), 0 < e.length && c(l(1, [e])), c(0))
          : a.tag
          ? !k && 0 < e.length && ((a = e), (e = []), c(l(1, [a])))
          : (g = a[0]);
      }
      let e = [],
        f = m,
        g = m,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? k || ((k = !0), g(1), 0 < e.length && c(l(1, [e])), c(0))
          : b.tag
          ? k || (e.push(b[0]), h ? (h = !1) : ((h = !0), f(0), g(0)))
          : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                return (k = !0), f(1), g(1);
              }
              if (!h) {
                return (h = !0), f(0), g(0);
              }
            }
          },
        ])
      );
    };
  };
}

function combine$1(a, b) {
  return (function (a, b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = void 0,
        h = !1,
        k = 0,
        n = !1;
      a(function (a) {
        var b = g;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((f = w(a)), (h = !1), c(l(1, [[a, x(b)]])))
              : ((f = w(a)), h ? (h = !1) : e(0)))
          : (d = a[0]);
      });
      b(function (a) {
        var b = f;
        'number' == typeof a
          ? 1 > k
            ? (k = (k + 1) | 0)
            : n || ((n = !0), c(0))
          : a.tag
          ? ((a = a[0]),
            void 0 !== b
              ? n || ((g = w(a)), (h = !1), c(l(1, [[x(b), a]])))
              : ((g = w(a)), h ? (h = !1) : d(0)))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (c) {
            if (!n) {
              if (c) {
                return (n = !0), d(1), e(1);
              }
              if (!h) {
                return (h = !0), d(c), e(c);
              }
            }
          },
        ])
      );
    };
  })(a, b);
}

function concat$1(a) {
  return z(B)(p(a));
}

function concatAll$1(a) {
  return z(A)(a);
}

function debounce$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        var a = e;
        void 0 !== a && ((e = void 0), clearTimeout(x(a)));
      }
      let e = void 0,
        f = !1,
        g = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          g || ((g = !0), void 0 !== e ? (f = !0) : c(0));
        } else if (b.tag) {
          g ||
            (d(),
            (e = w(
              setTimeout(function () {
                e = void 0;
                c(b);
                f && c(0);
              }, a(b[0]))
            )));
        } else {
          var n = b[0];
          c(
            l(0, [
              function (a) {
                if (!g) {
                  return a ? ((g = !0), (f = !1), d(), n(1)) : n(0);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function delay$1(a) {
  return function (b) {
    return function (c) {
      let d = 0;
      return b(function (b) {
        'number' == typeof b || b.tag
          ? ((d = (d + 1) | 0),
            setTimeout(function () {
              0 !== d && ((d = (d - 1) | 0), c(b));
            }, a))
          : c(b);
      });
    };
  };
}

function filter$1(a) {
  return function (b) {
    return function (c) {
      let d = m;
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? (a(b[0]) ? c(b) : d(0)) : ((d = b[0]), c(b));
      });
    };
  };
}

function forEach$1(a) {
  return function (b) {
    N(a)(b);
  };
}

function fromCallbag$2(a) {
  return function (b) {
    function c(a, c) {
      switch (a) {
        case 0:
          b(
            l(0, [
              function (a) {
                return a ? c(2) : c(1);
              },
            ])
          );
          break;

        case 1:
          b(l(1, [c]));
          break;

        case 2:
          b(0);
      }
    }
    return 2 === a.length ? a(0, c) : a.bind(null, 0, c);
  };
}

function fromDomEvent$1(a, b) {
  return (function (a, b) {
    return function (c) {
      function d(a) {
        c(l(1, [a]));
      }
      c(
        l(0, [
          function (c) {
            c && a.removeEventListener(b, d);
          },
        ])
      );
      a.addEventListener(b, d);
    };
  })(a, b);
}

function fromList$1(a) {
  return function (b) {
    let c = !1,
      d = !1,
      e = !1,
      f = a;
    b(
      l(0, [
        function (a) {
          if (a) {
            c = !0;
          } else if (d) {
            e = !0;
          } else {
            for (d = e = !0; e && !c; ) {
              (a = f) ? ((f = a[1]), (e = !1), b(l(1, [a[0]]))) : ((c = !0), b(0));
            }
            d = !1;
          }
        },
      ])
    );
  };
}

function fromObservable$2(a) {
  var b = void 0 !== a[P] ? a[P]() : a;
  return function (a) {
    var c = b.subscribe({
      next: function (c) {
        a(l(1, [c]));
      },
      complete: function () {
        a(0);
      },
      error: Q,
    });
    a(
      l(0, [
        function (a) {
          if (a) {
            return c.unsubscribe();
          }
        },
      ])
    );
  };
}

function fromPromise$1(a) {
  return function (b) {
    let c = !1;
    a.then(function (a) {
      c || (b(l(1, [a])), b(0));
      return Promise.resolve(void 0);
    });
    b(
      l(0, [
        function (a) {
          a && (c = !0);
        },
      ])
    );
  };
}

function fromValue$1(a) {
  return function (b) {
    let c = !1;
    b(
      l(0, [
        function (d) {
          d ? (c = !0) : c || ((c = !0), b(l(1, [a])), b(0));
        },
      ])
    );
  };
}

function interval$1(a) {
  return function (b) {
    let c = 0;
    var d = setInterval(function () {
      var a = c;
      c = (c + 1) | 0;
      b(l(1, [a]));
    }, a);
    b(
      l(0, [
        function (a) {
          a && clearInterval(d);
        },
      ])
    );
  };
}

function make$1(a) {
  return function (b) {
    let c = r,
      d = !1;
    c = a({
      next: function (a) {
        d || b(l(1, [a]));
      },
      complete: function () {
        d || ((d = !0), b(0));
      },
    });
    b(
      l(0, [
        function (a) {
          if (a && !d) {
            return (d = !0), c();
          }
        },
      ])
    );
  };
}

function makeSubject$1() {
  let a = [],
    b = !1;
  return {
    source: function (c) {
      function b(a) {
        return a !== c;
      }
      a = a.concat(c);
      c(
        l(0, [
          function (c) {
            c && (a = a.filter(b));
          },
        ])
      );
    },
    next: function (c) {
      b ||
        a.forEach(function (a) {
          a(l(1, [c]));
        });
    },
    complete: function () {
      b || ((b = !0), a.forEach(t));
    },
  };
}

function map$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        b = 'number' == typeof b ? 0 : b.tag ? l(1, [a(b[0])]) : l(0, [b[0]]);
        c(b);
      });
    };
  };
}

function merge$1(a) {
  return D(E)(p(a));
}

function never$1(a) {
  a(l(0, [m]));
}

function onEnd$1(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          if (d) {
            return;
          }
          d = !0;
          c(b);
          return a();
        }
        if (b.tag) {
          d || c(b);
        } else {
          var e = b[0];
          c(
            l(0, [
              function (c) {
                if (!d) {
                  return c ? ((d = !0), e(c), a()) : e(c);
                }
              },
            ])
          );
        }
      });
    };
  };
}

function onStart$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? c(b) : (c(b), a());
      });
    };
  };
}

function pipe() {
  for (var a = arguments, b = arguments[0], c = 1, d = arguments.length; c < d; c++) {
    b = a[c](b);
  }
  return b;
}

function publish$1(a) {
  return N(O)(a);
}

function sample$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = m,
        f = void 0,
        g = !1,
        h = !1;
      b(function (a) {
        'number' == typeof a
          ? h || ((h = !0), e(1), c(0))
          : a.tag
          ? ((f = w(a[0])), g ? (g = !1) : ((g = !0), e(0), d(0)))
          : (d = a[0]);
      });
      a(function (a) {
        var b = f;
        'number' == typeof a
          ? h || ((h = !0), d(1), c(0))
          : a.tag
          ? void 0 === b || h || ((f = void 0), c(l(1, [x(b)])))
          : (e = a[0]);
      });
      c(
        l(0, [
          function (a) {
            if (!h) {
              if (a) {
                return (h = !0), d(1), e(1);
              }
              if (!g) {
                return (g = !0), d(0), e(0);
              }
            }
          },
        ])
      );
    };
  };
}

function scan$1(a, b) {
  return (function (a, b) {
    return function (c) {
      return function (d) {
        let e = b;
        return c(function (c) {
          'number' == typeof c
            ? (c = 0)
            : c.tag
            ? ((e = a(e, c[0])), (c = l(1, [e])))
            : (c = l(0, [c[0]]));
          d(c);
        });
      };
    };
  })(a, b);
}

function share$1(a) {
  function b(a) {
    'number' == typeof a
      ? (c.forEach(J), (c = []))
      : a.tag
      ? ((e = !1),
        c.forEach(function (b) {
          b(a);
        }))
      : (d = a[0]);
  }
  let c = [],
    d = m,
    e = !1;
  return function (f) {
    function g(a) {
      return a !== f;
    }
    c = c.concat(f);
    1 === c.length && a(b);
    f(
      l(0, [
        function (a) {
          if (a) {
            if (((c = c.filter(g)), 0 === c.length)) {
              return d(1);
            }
          } else {
            e || ((e = !0), d(a));
          }
        },
      ])
    );
  };
}

function skip$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = a;
      return b(function (a) {
        'number' == typeof a
          ? c(a)
          : a.tag
          ? 0 < e
            ? ((e = (e - 1) | 0), d(0))
            : c(a)
          : ((d = a[0]), c(a));
      });
    };
  };
}

function skipUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' == typeof a
          ? g && ((k = !0), e(1))
          : a.tag
          ? ((g = !1), f(1))
          : ((f = a = a[0]), a(0));
      }
      let e = m,
        f = m,
        g = !0,
        h = !1,
        k = !1;
      b(function (b) {
        'number' == typeof b
          ? (g && f(1), (k = !0), c(0))
          : b.tag
          ? g || k
            ? h
              ? (h = !1)
              : ((h = !0), e(0), f(0))
            : ((h = !1), c(b))
          : ((e = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!k) {
              if (a) {
                if (((k = !0), e(1), g)) {
                  return f(1);
                }
              } else {
                h || ((h = !0), g && f(0), e(0));
              }
            }
          },
        ])
      );
    };
  };
}

function skipWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !0;
      return b(function (b) {
        'number' == typeof b
          ? c(b)
          : b.tag
          ? e
            ? a(b[0])
              ? d(0)
              : ((e = !1), c(b))
            : c(b)
          : ((d = b[0]), c(b));
      });
    };
  };
}

function switchAll$1(a) {
  return K(L)(a);
}

function take$1(a) {
  return function (b) {
    return function (c) {
      let d = !1,
        e = 0,
        f = m;
      b(function (b) {
        'number' == typeof b
          ? d || ((d = !0), c(0))
          : b.tag
          ? e < a && !d && ((e = (e + 1) | 0), c(b), !d && e >= a && ((d = !0), c(0), f(1)))
          : ((b = b[0]), 0 >= a ? ((d = !0), c(0), b(1)) : (f = b));
      });
      c(
        l(0, [
          function (b) {
            if (!d) {
              if (b) {
                return (d = !0), f(1);
              }
              if (e < a) {
                return f(0);
              }
            }
          },
        ])
      );
    };
  };
}

function takeUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' != typeof a && (a.tag ? ((e = !0), f(1), c(0)) : ((g = a = a[0]), a(0)));
      }
      let e = !1,
        f = m,
        g = m;
      b(function (b) {
        'number' == typeof b ? e || ((e = !0), g(1), c(0)) : b.tag ? e || c(b) : ((f = b[0]), a(d));
      });
      c(
        l(0, [
          function (a) {
            if (!e) {
              return a ? ((e = !0), f(1), g(1)) : f(0);
            }
          },
        ])
      );
    };
  };
}

function takeWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m,
        e = !1;
      return b(function (b) {
        'number' == typeof b
          ? e || ((e = !0), c(0))
          : b.tag
          ? e || (a(b[0]) ? c(b) : ((e = !0), c(0), d(1)))
          : ((d = b[0]), c(b));
      });
    };
  };
}

function throttle$1(a) {
  return function (b) {
    return function (c) {
      function d() {
        void 0 !== g && clearTimeout(x(g));
      }
      function e() {
        g = void 0;
        f = !1;
      }
      let f = !1,
        g = void 0;
      return b(function (b) {
        if ('number' == typeof b) {
          d(), c(0);
        } else if (b.tag) {
          f || ((f = !0), d(), (g = w(setTimeout(e, a(b[0])))), c(b));
        } else {
          var h = b[0];
          c(
            l(0, [
              function (a) {
                return a ? (d(), h(1)) : h(a);
              },
            ])
          );
        }
      });
    };
  };
}

function toArray$1(a) {
  let b = [],
    c = m,
    d = !1;
  a(function (a) {
    'number' == typeof a ? (d = !0) : a.tag ? (b.push(a[0]), c(0)) : ((c = a = a[0]), a(0));
  });
  d || c(1);
  return b;
}

function toCallbag$2(a) {
  return function (b, c) {
    if (0 === b) {
      return a(function (a) {
        function b(a) {
          switch (a) {
            case 1:
              d(0);
              break;

            case 2:
              d(1);
          }
        }
        if ('number' == typeof a) {
          return 2 === c.length ? c(2, void 0) : c.bind(null, 2, void 0);
        }
        if (a.tag) {
          return (a = a[0]), 2 === c.length ? c(1, a) : c.bind(null, 1, a);
        }
        var d = a[0];
        return 2 === c.length ? c(0, b) : c.bind(null, 0, b);
      });
    }
  };
}

function toObservable$2(a) {
  var b = {
    subscribe: function (b, d, e) {
      var c = ('object' == typeof b ? b.next.bind(b) : b) || R,
        g = ('object' == typeof b ? b.complete.bind(b) : e) || S;
      let h = m,
        k = !1;
      a(function (a) {
        if ('number' == typeof a) {
          return (k = !0), g();
        }
        if (a.tag) {
          if (k) {
            return;
          }
          c(a[0]);
          return h(0);
        }
        h = a = a[0];
        a(0);
      });
      return {
        unsubscribe: function () {
          if (!k) {
            return (this.closed = !1), (k = !0), h(1);
          }
        },
        closed: !1,
      };
    },
  };
  b[P] = function () {
    return b;
  };
  return b;
}

function toPromise$1(a) {
  return new Promise(function (b) {
    M(1)(a)(function (a) {
      if ('number' != typeof a) {
        if (a.tag) {
          b(a[0]);
        } else {
          a[0](0);
        }
      }
    });
  });
}

var v = [],
  P =
    'function' == typeof Symbol
      ? Symbol.observable || (Symbol.observable = Symbol('observable'))
      : '@@observable';




/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");


var _jsxFileName = "E:\\OmniCommerce\\omnicommerceclient\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_OmniCommerce_omnicommerceclient_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var client = Object(urql__WEBPACK_IMPORTED_MODULE_4__["createClient"])({
  url: "http://localhost:4000/graphql"
});

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ChakraProvider"], {
    resetCSS: true,
    theme: _theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B1cnFsL2NvcmUvZGlzdC8yYzAxZDhiMi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdXJxbC9jb3JlL2Rpc3QvdXJxbC1jb3JlLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvZXJyb3IvR3JhcGhRTEVycm9yLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvZXJyb3Ivc3ludGF4RXJyb3IubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2RlZmluZUluc3BlY3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL2RldkFzc2VydC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW5zcGVjdC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW5zdGFuY2VPZi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2pzdXRpbHMvaW52YXJpYW50Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvanN1dGlscy9pc09iamVjdExpa2UubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9qc3V0aWxzL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9hc3QubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9ibG9ja1N0cmluZy5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2RpcmVjdGl2ZUxvY2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2Uva2luZHMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9sZXhlci5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL2xvY2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcGFyc2VyLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvbGFuZ3VhZ2UvcHJpbnRMb2NhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ncmFwaHFsL2xhbmd1YWdlL3ByaW50ZXIubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS9zb3VyY2UubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS90b2tlbktpbmQubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC9sYW5ndWFnZS92aXNpdG9yLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dyYXBocWwvcG9seWZpbGxzL3N5bWJvbHMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXJxbC9kaXN0L3VycWwuZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b25rYS9kaXN0L3dvbmthLm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInVybCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx3REFBUyw2Q0FBNkMsd0RBQVM7O0FBRTFHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUU7QUFDaEI7OztBQUdBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4VEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVySjtBQUNuQjtBQUNJO0FBQ0U7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLHNCQUFzQjtBQUN6RjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0VBQVMsK0NBQStDLG9FQUFPO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzRUFBUztBQUM3QyxzQ0FBc0Msc0VBQVM7QUFDL0MsR0FBRzs7O0FBR0g7QUFDQSxTQUFTLDJFQUFvQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLFNBQVMsdUVBQVU7QUFDbkI7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDVjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sNEJBQTRCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLDhEQUE4RCw0QkFBNEI7QUFDMUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFeUg7QUFDekg7Ozs7Ozs7Ozs7Ozs7QUNsVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdFQUF3RSxPQUFPO0FBQy9FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcURFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN3BDRjtBQUVBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLHlEQUFZLENBQUM7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBRCxDQUEzQjs7QUFFQSxTQUFTQyxLQUFULE9BQW1EO0FBQUEsTUFBbENDLFNBQWtDLFFBQWxDQSxTQUFrQztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFDakQsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBZ0IsWUFBUSxNQUF4QjtBQUF5QixTQUFLLEVBQUVDLDhDQUFoQztBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQU5RRixLO0FBUU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzFhNDZhZDQ2MzBjN2JmZGRhNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGsoYSkge1xuICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgYSA/IG5ldyBHcmFwaFFMRXJyb3IoYSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBhICYmIGEubWVzc2FnZSA/IG5ldyBHcmFwaFFMRXJyb3IoYS5tZXNzYWdlLCBhLm5vZGVzLCBhLnNvdXJjZSwgYS5wb3NpdGlvbnMsIGEucGF0aCwgYSwgYS5leHRlbnNpb25zIHx8IHt9KSA6IGE7XG59XG5cbmZ1bmN0aW9uIGwoKSB7XG4gIHJldHVybiB0aGlzLm1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIG4oYSwgYikge1xuICBhIHw9IDA7XG4gIGZvciAodmFyIGMgPSAwLCBkID0gMCB8IGIubGVuZ3RoOyBjIDwgZDsgYysrKSB7XG4gICAgYSA9IChhIDw8IDUpICsgYSArIGIuY2hhckNvZGVBdChjKTtcbiAgfVxuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gdChhKSB7XG4gIHZhciBiLCBjLCBkLCBlLCBmLCBnO1xuICBpZiAobnVsbCA9PT0gYSB8fCBxLmhhcyhhKSkge1xuICAgIHJldHVybiBcIm51bGxcIjtcbiAgfVxuICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgYSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSB8fCBcIlwiO1xuICB9XG4gIGlmIChhLnRvSlNPTikge1xuICAgIHJldHVybiB0KGEudG9KU09OKCkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgZm9yIChiID0gXCJbXCIsIGMgPSAwLCBkID0gYS5sZW5ndGg7IGMgPCBkOyBjKyspIHtcbiAgICAgIDAgPCBjICYmIChiICs9IFwiLFwiKTtcbiAgICAgIGIgKz0gMCA8IChlID0gdChhW2NdKSkubGVuZ3RoID8gZSA6IFwibnVsbFwiO1xuICAgIH1cbiAgICByZXR1cm4gYiArIFwiXVwiO1xuICB9XG4gIGlmICghKGIgPSBPYmplY3Qua2V5cyhhKS5zb3J0KCkpLmxlbmd0aCAmJiBhLmNvbnN0cnVjdG9yICYmIGEuY29uc3RydWN0b3IgIT09IE9iamVjdCkge1xuICAgIHJldHVybiBiID0gci5nZXQoYSkgfHwgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksIHIuc2V0KGEsIGIpLCAne1wiX19rZXlcIjpcIicgKyBiICsgJ1wifSc7XG4gIH1cbiAgcS5hZGQoYSk7XG4gIGMgPSBcIntcIjtcbiAgZCA9IDA7XG4gIGZvciAoZSA9IGIubGVuZ3RoOyBkIDwgZTsgZCsrKSB7XG4gICAgKGcgPSB0KGFbZiA9IGJbZF1dKSkgJiYgKDEgPCBjLmxlbmd0aCAmJiAoYyArPSBcIixcIiksIGMgKz0gdChmKSArIFwiOlwiICsgZyk7XG4gIH1cbiAgcS5kZWxldGUoYSk7XG4gIHJldHVybiBjICsgXCJ9XCI7XG59XG5cbmZ1bmN0aW9uIHUoYSkge1xuICBxLmNsZWFyKCk7XG4gIHJldHVybiB0KGEpO1xufVxuXG5mdW5jdGlvbiB2KGEpIHtcbiAgdmFyIGIgPSAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSA/IGEubG9jICYmIGEubG9jLnNvdXJjZS5ib2R5IHx8IHByaW50KGEpIDogYSkucmVwbGFjZSgvKFtcXHMsXXwjW15cXG5cXHJdKykrL2csIFwiIFwiKS50cmltKCk7XG4gIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEgJiYgKGEubG9jID8gKGEgPSBcImRlZmluaXRpb25zXCIgaW4gYSAmJiB3KGEpKSAmJiAoYiA9IFwiIyBcIiArIGEgKyBcIlxcblwiICsgYikgOiBhLmxvYyA9IHtcbiAgICBzdGFydDogMCxcbiAgICBlbmQ6IGIubGVuZ3RoLFxuICAgIHNvdXJjZToge1xuICAgICAgYm9keTogYixcbiAgICAgIG5hbWU6IFwiZ3FsXCIsXG4gICAgICBsb2NhdGlvbk9mZnNldDoge1xuICAgICAgICBsaW5lOiAxLFxuICAgICAgICBjb2x1bW46IDFcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24geShhKSB7XG4gIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBhKSB7XG4gICAgdmFyIGIgPSBuKDUzODEsIHYoYSkpID4+PiAwO1xuICAgIGEgPSB4LmdldChiKSB8fCBwYXJzZShhLCB7XG4gICAgICBub0xvY2F0aW9uOiAhMFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGIgPSBhLl9fa2V5IHx8IG4oNTM4MSwgdihhKSkgPj4+IDAsIGEgPSB4LmdldChiKSB8fCBhO1xuICB9XG4gIGEubG9jIHx8IHYoYSk7XG4gIGEuX19rZXkgPSBiO1xuICB4LnNldChiLCBhKTtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIHcoYSkge1xuICB2YXIgYiwgYywgZDtcbiAgZm9yIChiID0gMCwgYyA9IGEuZGVmaW5pdGlvbnMubGVuZ3RoOyBiIDwgYzsgYisrKSB7XG4gICAgaWYgKChkID0gYS5kZWZpbml0aW9uc1tiXSkua2luZCA9PT0gS2luZC5PUEVSQVRJT05fREVGSU5JVElPTiAmJiBkLm5hbWUpIHtcbiAgICAgIHJldHVybiBkLm5hbWUudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHooYSwgYiwgYykge1xuICByZXR1cm4ge1xuICAgIG9wZXJhdGlvbjogYSxcbiAgICBkYXRhOiBiLmRhdGEsXG4gICAgZXJyb3I6IEFycmF5LmlzQXJyYXkoYi5lcnJvcnMpID8gbmV3IG0oe1xuICAgICAgZ3JhcGhRTEVycm9yczogYi5lcnJvcnMsXG4gICAgICByZXNwb25zZTogY1xuICAgIH0pIDogdm9pZCAwLFxuICAgIGV4dGVuc2lvbnM6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGIuZXh0ZW5zaW9ucyAmJiBiLmV4dGVuc2lvbnMgfHwgdm9pZCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIEEoYSwgYiwgYykge1xuICByZXR1cm4ge1xuICAgIG9wZXJhdGlvbjogYSxcbiAgICBkYXRhOiB2b2lkIDAsXG4gICAgZXJyb3I6IG5ldyBtKHtcbiAgICAgIG5ldHdvcmtFcnJvcjogYixcbiAgICAgIHJlc3BvbnNlOiBjXG4gICAgfSksXG4gICAgZXh0ZW5zaW9uczogdm9pZCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIEIoKSB7XG4gIHJldHVybiAoQiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24oYSkge1xuICAgIHZhciBiLCBjLCBkO1xuICAgIGZvciAoYiA9IDE7IGIgPCBhcmd1bWVudHMubGVuZ3RoOyBiKyspIHtcbiAgICAgIGMgPSBhcmd1bWVudHNbYl07XG4gICAgICBmb3IgKGQgaW4gYykge1xuICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYywgZCkgJiYgKGFbZF0gPSBjW2RdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGZXRjaEJvZHkoYSkge1xuICByZXR1cm4ge1xuICAgIHF1ZXJ5OiBwcmludChhLnF1ZXJ5KSxcbiAgICBvcGVyYXRpb25OYW1lOiB3KGEucXVlcnkpLFxuICAgIHZhcmlhYmxlczogYS52YXJpYWJsZXMgfHwgdm9pZCAwLFxuICAgIGV4dGVuc2lvbnM6IHZvaWQgMFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlRmV0Y2hVUkwoYSwgYikge1xuICB2YXIgYyA9IGEuY29udGV4dC51cmw7XG4gIGlmIChcInF1ZXJ5XCIgIT09IGEua2luZCB8fCAhYS5jb250ZXh0LnByZWZlckdldE1ldGhvZCB8fCAhYikge1xuICAgIHJldHVybiBjO1xuICB9XG4gIGEgPSBbXTtcbiAgYi5vcGVyYXRpb25OYW1lICYmIGEucHVzaChcIm9wZXJhdGlvbk5hbWU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoYi5vcGVyYXRpb25OYW1lKSk7XG4gIGIucXVlcnkgJiYgYS5wdXNoKFwicXVlcnk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoYi5xdWVyeS5yZXBsYWNlKC8oW1xccyxdfCNbXlxcblxccl0rKSsvZywgXCIgXCIpLnRyaW0oKSkpO1xuICBiLnZhcmlhYmxlcyAmJiBhLnB1c2goXCJ2YXJpYWJsZXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodShiLnZhcmlhYmxlcykpKTtcbiAgYi5leHRlbnNpb25zICYmIGEucHVzaChcImV4dGVuc2lvbnM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodShiLmV4dGVuc2lvbnMpKSk7XG4gIHJldHVybiBjICsgXCI/XCIgKyBhLmpvaW4oXCImXCIpO1xufVxuXG5mdW5jdGlvbiBtYWtlRmV0Y2hPcHRpb25zKGEsIGIpIHtcbiAgdmFyIGMgPSBcInF1ZXJ5XCIgPT09IGEua2luZCAmJiAhIWEuY29udGV4dC5wcmVmZXJHZXRNZXRob2Q7XG4gIHJldHVybiBCKHt9LCBhID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBhLmNvbnRleHQuZmV0Y2hPcHRpb25zID8gYS5jb250ZXh0LmZldGNoT3B0aW9ucygpIDogYS5jb250ZXh0LmZldGNoT3B0aW9ucyB8fCB7fSwge1xuICAgIGJvZHk6ICFjICYmIGIgPyBKU09OLnN0cmluZ2lmeShiKSA6IHZvaWQgMCxcbiAgICBtZXRob2Q6IGMgPyBcIkdFVFwiIDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogYyA/IGEuaGVhZGVycyA6IEIoe30sIHtcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSwgYS5oZWFkZXJzKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZUZldGNoU291cmNlKGEsIGIsIGMpIHtcbiAgcmV0dXJuIG1ha2UoKGZ1bmN0aW9uKGQpIHtcbiAgICB2YXIgZSA9IGQubmV4dCwgZiA9IGQuY29tcGxldGUsIGcgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPyBuZXcgQWJvcnRDb250cm9sbGVyIDogbnVsbCwgcCA9ICExO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFwKSB7XG4gICAgICAgIHJldHVybiBnICYmIChjLnNpZ25hbCA9IGcuc2lnbmFsKSwgZnVuY3Rpb24gQyhhLCBiLCBjKSB7XG4gICAgICAgICAgdmFyIGUsIGQgPSAhMTtcbiAgICAgICAgICByZXR1cm4gKGEuY29udGV4dC5mZXRjaCB8fCBmZXRjaCkoYiwgYykudGhlbigoZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgZSA9IGE7XG4gICAgICAgICAgICBkID0gMjAwID4gYS5zdGF0dXMgfHwgYS5zdGF0dXMgPj0gKFwibWFudWFsXCIgPT09IGMucmVkaXJlY3QgPyA0MDAgOiAzMDApO1xuICAgICAgICAgICAgcmV0dXJuIGEuanNvbigpO1xuICAgICAgICAgIH0pKS50aGVuKChmdW5jdGlvbihiKSB7XG4gICAgICAgICAgICBpZiAoIShcImRhdGFcIiBpbiBiKSAmJiAhKFwiZXJyb3JzXCIgaW4gYikpIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyBDb250ZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHooYSwgYiwgZSk7XG4gICAgICAgICAgfSkpLmNhdGNoKChmdW5jdGlvbihiKSB7XG4gICAgICAgICAgICBpZiAoXCJBYm9ydEVycm9yXCIgIT09IGIubmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gQShhLCBkID8gRXJyb3IoZS5zdGF0dXNUZXh0KSA6IGIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfShhLCBiLCBjKTtcbiAgICAgIH1cbiAgICB9KSkudGhlbigoZnVuY3Rpb24oYSkge1xuICAgICAgcCB8fCAocCA9ICEwLCBhICYmIGUoYSksIGYoKSk7XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHAgPSAhMDtcbiAgICAgIGcgJiYgZy5hYm9ydCgpO1xuICAgIH07XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChhLCBiKSB7XG4gIGEgPSB5KGEpO1xuICByZXR1cm4ge1xuICAgIGtleTogYiA/IG4oYS5fX2tleSwgdShiKSkgPj4+IDAgOiBhLl9fa2V5LFxuICAgIHF1ZXJ5OiBhLFxuICAgIHZhcmlhYmxlczogYiB8fCB7fVxuICB9O1xufVxuXG52YXIgbSwgcSwgciwgeDtcblxuaW1wb3J0IHsgbWFrZSB9IGZyb20gXCJ3b25rYVwiO1xuXG5pbXBvcnQgeyBHcmFwaFFMRXJyb3IgfSBmcm9tIFwiZ3JhcGhxbC9lcnJvci9HcmFwaFFMRXJyb3IubWpzXCI7XG5cbmltcG9ydCB7IEtpbmQgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9raW5kcy5tanNcIjtcblxuaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9wYXJzZXIubWpzXCI7XG5cbmltcG9ydCB7IHByaW50IH0gZnJvbSBcImdyYXBocWwvbGFuZ3VhZ2UvcHJpbnRlci5tanNcIjtcblxubSA9IGZ1bmN0aW9uKGEpIHtcbiAgZnVuY3Rpb24gYihiKSB7XG4gICAgdmFyIGYsIGMgPSBiLm5ldHdvcmtFcnJvciwgZSA9IGIucmVzcG9uc2U7XG4gICAgZiA9IGZ1bmN0aW9uIGgoYSwgYikge1xuICAgICAgdmFyIGQgPSBcIlwiO1xuICAgICAgaWYgKHZvaWQgMCAhPT0gYSkge1xuICAgICAgICByZXR1cm4gZCA9IFwiW05ldHdvcmtdIFwiICsgYS5tZXNzYWdlO1xuICAgICAgfVxuICAgICAgdm9pZCAwICE9PSBiICYmIGIuZm9yRWFjaCgoZnVuY3Rpb24gYyhhKSB7XG4gICAgICAgIGQgKz0gXCJbR3JhcGhRTF0gXCIgKyBhLm1lc3NhZ2UgKyBcIlxcblwiO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIGQudHJpbSgpO1xuICAgIH0oYywgYiA9IChiLmdyYXBoUUxFcnJvcnMgfHwgW10pLm1hcChrKSk7XG4gICAgYS5jYWxsKHRoaXMsIGYpO1xuICAgIHRoaXMubmFtZSA9IFwiQ29tYmluZWRFcnJvclwiO1xuICAgIHRoaXMubWVzc2FnZSA9IGY7XG4gICAgdGhpcy5ncmFwaFFMRXJyb3JzID0gYjtcbiAgICB0aGlzLm5ldHdvcmtFcnJvciA9IGM7XG4gICAgdGhpcy5yZXNwb25zZSA9IGU7XG4gIH1cbiAgYSAmJiAoYi5fX3Byb3RvX18gPSBhKTtcbiAgKGIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShhICYmIGEucHJvdG90eXBlKSkuY29uc3RydWN0b3IgPSBiO1xuICBiLnByb3RvdHlwZS50b1N0cmluZyA9IGw7XG4gIHJldHVybiBiO1xufShFcnJvcik7XG5cbnEgPSBuZXcgU2V0LCByID0gbmV3IFdlYWtNYXA7XG5cbnggPSBuZXcgTWFwO1xuXG5leHBvcnQgeyBtIGFzIEMsIEIgYXMgXywgQSBhcyBhLCBtYWtlRmV0Y2hCb2R5IGFzIGIsIG1ha2VGZXRjaFVSTCBhcyBjLCBtYWtlRmV0Y2hPcHRpb25zIGFzIGQsIG1ha2VGZXRjaFNvdXJjZSBhcyBlLCBjcmVhdGVSZXF1ZXN0IGFzIGYsIHUgYXMgZywgdyBhcyBoLCB5IGFzIGssIHogYXMgbSwgdiBhcyBzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD0yYzAxZDhiMi5tanMubWFwXG4iLCJmdW5jdGlvbiBuKGEsIGIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICBmb3IgKHZhciBjID0gMDsgYyA8IGEubGVuZ3RoOyBjKyspIHtcbiAgICAgIG4oYVtjXSwgYik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGEgJiYgbnVsbCAhPT0gYSkge1xuICAgIGZvciAoYyBpbiBhKSB7XG4gICAgICBcIl9fdHlwZW5hbWVcIiA9PT0gYyAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBhW2NdID8gYlthW2NdXSA9IDAgOiBuKGFbY10sIGIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gcChhKSB7XG4gIHJldHVybiBhLmtpbmQgPT09IEtpbmQuRklFTEQgJiYgXCJfX3R5cGVuYW1lXCIgPT09IGEubmFtZS52YWx1ZSAmJiAhYS5hbGlhcztcbn1cblxuZnVuY3Rpb24gcihhKSB7XG4gIGlmIChhLnNlbGVjdGlvblNldCAmJiAhYS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5zb21lKHApKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhLCB7XG4gICAgICBzZWxlY3Rpb25TZXQ6IF9leHRlbmRzKHt9LCBhLnNlbGVjdGlvblNldCwge1xuICAgICAgICBzZWxlY3Rpb25zOiBhLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmNvbmNhdChbIHtcbiAgICAgICAgICBraW5kOiBLaW5kLkZJRUxELFxuICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIGtpbmQ6IEtpbmQuTkFNRSxcbiAgICAgICAgICAgIHZhbHVlOiBcIl9fdHlwZW5hbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSBdKVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1KGEpIHtcbiAgYSA9IGtleURvY3VtZW50KGEpO1xuICB2YXIgYiA9IHQuZ2V0KGEuX19rZXkpO1xuICBiIHx8ICgoYiA9IHZpc2l0KGEsIHtcbiAgICBGaWVsZDogcixcbiAgICBJbmxpbmVGcmFnbWVudDogclxuICB9KSkuX19rZXkgPSBhLl9fa2V5LCB0LnNldChhLl9fa2V5LCBiKSk7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiB2KGEpIHtcbiAgcmV0dXJuIGEgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgYSA/IE9iamVjdC5rZXlzKGEpLnJlZHVjZSgoZnVuY3Rpb24oYiwgYykge1xuICAgIHZhciBkID0gYVtjXTtcbiAgICBcIl9fdHlwZW5hbWVcIiA9PT0gYyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLCBcIl9fdHlwZW5hbWVcIiwge1xuICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICB2YWx1ZTogZFxuICAgIH0pIDogQXJyYXkuaXNBcnJheShkKSA/IGJbY10gPSBkLm1hcCh2KSA6IGJbY10gPSBkICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGQgJiYgXCJfX3R5cGVuYW1lXCIgaW4gZCA/IHYoZCkgOiBkO1xuICAgIHJldHVybiBiO1xuICB9KSwge30pIDogYTtcbn1cblxuZnVuY3Rpb24gdyhhKSB7XG4gIGEudG9Qcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRvUHJvbWlzZSh0YWtlKDEpKGEpKTtcbiAgfTtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIHgoYSwgYiwgYykge1xuICBjIHx8IChjID0gYi5jb250ZXh0KTtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGIua2V5LFxuICAgIHF1ZXJ5OiBiLnF1ZXJ5LFxuICAgIHZhcmlhYmxlczogYi52YXJpYWJsZXMsXG4gICAga2luZDogYSxcbiAgICBjb250ZXh0OiBjXG4gIH07XG59XG5cbmZ1bmN0aW9uIHkoYSwgYikge1xuICByZXR1cm4geChhLmtpbmQsIGEsIF9leHRlbmRzKHt9LCBhLmNvbnRleHQsIHtcbiAgICBtZXRhOiBfZXh0ZW5kcyh7fSwgYS5jb250ZXh0Lm1ldGEsIGIpXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24geigpIHt9XG5cbmZ1bmN0aW9uIEEoYSwgYiwgYykge1xuICB2YXIgZCwgZSwgZjtcbiAgZm9yIChkID0gMDsgZCA8IGMubGVuZ3RoOyBkKyspIHtcbiAgICBpZiAoY1tkXS5raW5kID09PSBLaW5kLkZSQUdNRU5UX0RFRklOSVRJT04pIHtcbiAgICAgIGUgPSBjW2RdLm5hbWUudmFsdWUsIGYgPSBzdHJpbmdpZnlEb2N1bWVudChjW2RdKTtcbiAgICAgIGEuaGFzKGUpID8gXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIGEuZ2V0KGUpICE9PSBmICYmIGNvbnNvbGUud2FybihcIltXQVJOSU5HOiBEdXBsaWNhdGUgRnJhZ21lbnRdIEEgZnJhZ21lbnQgd2l0aCBuYW1lIGBcIiArIGUgKyBcImAgYWxyZWFkeSBleGlzdHMgaW4gdGhpcyBkb2N1bWVudC5cXG5XaGlsZSBmcmFnbWVudCBuYW1lcyBtYXkgbm90IGJlIHVuaXF1ZSBhY3Jvc3MgeW91ciBzb3VyY2UsIGVhY2ggbmFtZSBtdXN0IGJlIHVuaXF1ZSBwZXIgZG9jdW1lbnQuXCIpIDogKGEuc2V0KGUsIGYpLCBcbiAgICAgIGIucHVzaChjW2RdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGIucHVzaChjW2RdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQihhKSB7XG4gIHJldHVybiBcInN1YnNjcmlwdGlvblwiICE9PSAoYSA9IGEua2luZCkgJiYgXCJxdWVyeVwiICE9PSBhO1xufVxuXG5mdW5jdGlvbiBDKGEpIHtcbiAgcmV0dXJuIGEucGF0aCB8fCBhLmV4dGVuc2lvbnMgPyB7XG4gICAgbWVzc2FnZTogYS5tZXNzYWdlLFxuICAgIHBhdGg6IGEucGF0aCxcbiAgICBleHRlbnNpb25zOiBhLmV4dGVuc2lvbnNcbiAgfSA6IGEubWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gRChhKSB7XG4gIHJldHVybiBcIm11dGF0aW9uXCIgIT09IChhID0gYS5raW5kKSAmJiBcInF1ZXJ5XCIgIT09IGE7XG59XG5cbmZ1bmN0aW9uIEUoYSkge1xuICB2YXIgYiA9IHgoYS5raW5kLCBhKTtcbiAgYi5xdWVyeSA9IHUoYS5xdWVyeSk7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBGKGEpIHtcbiAgcmV0dXJuIFwicXVlcnlcIiAhPT0gYS5raW5kIHx8IFwiY2FjaGUtb25seVwiICE9PSBhLmNvbnRleHQucmVxdWVzdFBvbGljeTtcbn1cblxuZnVuY3Rpb24gRyhhKSB7XG4gIHJldHVybiB5KGEsIHtcbiAgICBjYWNoZU91dGNvbWU6IFwibWlzc1wiXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBIKGEpIHtcbiAgcmV0dXJuIEQoYSk7XG59XG5cbmZ1bmN0aW9uIEkoYSkge1xuICBmdW5jdGlvbiBiKGEpIHtcbiAgICB2YXIgYiA9IGEuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICAgIHJldHVybiBcInF1ZXJ5XCIgPT09IGEua2luZCAmJiBcIm5ldHdvcmstb25seVwiICE9PSBiICYmIChcImNhY2hlLW9ubHlcIiA9PT0gYiB8fCBrLmhhcyhhLmtleSkpO1xuICB9XG4gIGZ1bmN0aW9uIGMoYSkge1xuICAgIHZhciBjID0gay5nZXQoYS5rZXkpO1xuICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBxKF9leHRlbmRzKHt9LCB7XG4gICAgICBvcGVyYXRpb246IGFcbiAgICB9LCBjID8ge1xuICAgICAgdHlwZTogXCJjYWNoZUhpdFwiLFxuICAgICAgbWVzc2FnZTogXCJUaGUgcmVzdWx0IHdhcyBzdWNjZXNzZnVsbHkgcmV0cmllZCBmcm9tIHRoZSBjYWNoZVwiXG4gICAgfSA6IHtcbiAgICAgIHR5cGU6IFwiY2FjaGVNaXNzXCIsXG4gICAgICBtZXNzYWdlOiBcIlRoZSByZXN1bHQgY291bGQgbm90IGJlIHJldHJpZXZlZCBmcm9tIHRoZSBjYWNoZVwiXG4gICAgfSkpO1xuICAgIGMgPSBfZXh0ZW5kcyh7fSwgYywge1xuICAgICAgb3BlcmF0aW9uOiB5KGEsIHtcbiAgICAgICAgY2FjaGVPdXRjb21lOiBjID8gXCJoaXRcIiA6IFwibWlzc1wiXG4gICAgICB9KVxuICAgIH0pO1xuICAgIFwiY2FjaGUtYW5kLW5ldHdvcmtcIiA9PT0gYS5jb250ZXh0LnJlcXVlc3RQb2xpY3kgJiYgKGMuc3RhbGUgPSAhMCwgSihtLCBhKSk7XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgZnVuY3Rpb24gZChhKSB7XG4gICAgcmV0dXJuICFEKGEpICYmIGIoYSk7XG4gIH1cbiAgZnVuY3Rpb24gZShhKSB7XG4gICAgZnVuY3Rpb24gYyhhKSB7XG4gICAgICBnLmFkZChhKTtcbiAgICB9XG4gICAgdmFyIGUsIGcsIGwsIGQgPSBhLm9wZXJhdGlvbjtcbiAgICBpZiAoZCkge1xuICAgICAgZSA9IE9iamVjdC5rZXlzKG4oYS5kYXRhLCB7fSkpLmNvbmNhdChkLmNvbnRleHQuYWRkaXRpb25hbFR5cGVuYW1lcyB8fCBbXSk7XG4gICAgICBpZiAoXCJtdXRhdGlvblwiID09PSBhLm9wZXJhdGlvbi5raW5kKSB7XG4gICAgICAgIGcgPSBuZXcgU2V0O1xuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgcSh7XG4gICAgICAgICAgdHlwZTogXCJjYWNoZUludmFsaWRhdGlvblwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGZvbGxvd2luZyB0eXBlbmFtZXMgaGF2ZSBiZWVuIGludmFsaWRhdGVkOiBcIiArIGUsXG4gICAgICAgICAgb3BlcmF0aW9uOiBkLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGVuYW1lczogZSxcbiAgICAgICAgICAgIHJlc3BvbnNlOiBhXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3VyY2U6IFwiY2FjaGVFeGNoYW5nZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGEgPSAwOyBhIDwgZS5sZW5ndGg7IGErKykge1xuICAgICAgICAgIChsID0gaFtsID0gZVthXV0gfHwgKGhbbF0gPSBuZXcgU2V0KSkuZm9yRWFjaChjKTtcbiAgICAgICAgICBsLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZy5mb3JFYWNoKChmdW5jdGlvbiBiKGEpIHtcbiAgICAgICAgICBrLmhhcyhhKSAmJiAoZCA9IGsuZ2V0KGEpLm9wZXJhdGlvbiwgay5kZWxldGUoYSksIEoobSwgZCkpO1xuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKFwicXVlcnlcIiA9PT0gZC5raW5kICYmIGEuZGF0YSkge1xuICAgICAgICBmb3IgKGsuc2V0KGQua2V5LCBhKSwgYSA9IDA7IGEgPCBlLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgKGhbbCA9IGVbYV1dIHx8IChoW2xdID0gbmV3IFNldCkpLmFkZChkLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZihhKSB7XG4gICAgcmV0dXJuICFEKGEpICYmICFiKGEpO1xuICB9XG4gIHZhciBnID0gYS5mb3J3YXJkLCBtID0gYS5jbGllbnQsIHEgPSBhLmRpc3BhdGNoRGVidWcsIGsgPSBuZXcgTWFwLCBoID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGEpIHtcbiAgICB2YXIgYiA9IHNoYXJlKGEpO1xuICAgIGEgPSBtYXAoYykoZmlsdGVyKGQpKGIpKTtcbiAgICBiID0gdGFwKGUpKGcoZmlsdGVyKEYpKG1hcChHKShtZXJnZShbIG1hcChFKShmaWx0ZXIoZikoYikpLCBmaWx0ZXIoSCkoYikgXSkpKSkpO1xuICAgIHJldHVybiBtZXJnZShbIGEsIGIgXSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIEooYSwgYikge1xuICByZXR1cm4gYS5yZWV4ZWN1dGVPcGVyYXRpb24oeChiLmtpbmQsIGIsIF9leHRlbmRzKHt9LCBiLmNvbnRleHQsIHtcbiAgICByZXF1ZXN0UG9saWN5OiBcIm5ldHdvcmstb25seVwiXG4gIH0pKSk7XG59XG5cbmZ1bmN0aW9uIEsoYSkge1xuICByZXR1cm4gY29uc29sZS5sb2coXCJbRXhjaGFuZ2UgZGVidWddOiBDb21wbGV0ZWQgb3BlcmF0aW9uOiBcIiwgYSk7XG59XG5cbmZ1bmN0aW9uIEwoYSkge1xuICByZXR1cm4gY29uc29sZS5sb2coXCJbRXhjaGFuZ2UgZGVidWddOiBJbmNvbWluZyBvcGVyYXRpb246IFwiLCBhKTtcbn1cblxuZnVuY3Rpb24gTShhKSB7XG4gIGZ1bmN0aW9uIGIoYSkge1xuICAgIGYuZGVsZXRlKGEub3BlcmF0aW9uLmtleSk7XG4gIH1cbiAgZnVuY3Rpb24gYyhhKSB7XG4gICAgdmFyIGMgPSBhLmtleSwgYiA9IGEua2luZDtcbiAgICBpZiAoXCJ0ZWFyZG93blwiID09PSBiKSB7XG4gICAgICByZXR1cm4gZi5kZWxldGUoYyksICEwO1xuICAgIH1cbiAgICBpZiAoXCJxdWVyeVwiICE9PSBiICYmIFwic3Vic2NyaXB0aW9uXCIgIT09IGIpIHtcbiAgICAgIHJldHVybiAhMDtcbiAgICB9XG4gICAgYiA9IGYuaGFzKGMpO1xuICAgIGYuYWRkKGMpO1xuICAgIGIgJiYgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIGUoe1xuICAgICAgdHlwZTogXCJkZWR1cFwiLFxuICAgICAgbWVzc2FnZTogXCJBbiBvcGVyYXRpb24gaGFzIGJlZW4gZGVkdXBlZC5cIixcbiAgICAgIG9wZXJhdGlvbjogYSxcbiAgICAgIHNvdXJjZTogXCJkZWR1cEV4Y2hhbmdlXCJcbiAgICB9KTtcbiAgICByZXR1cm4gIWI7XG4gIH1cbiAgdmFyIGQgPSBhLmZvcndhcmQsIGUgPSBhLmRpc3BhdGNoRGVidWcsIGYgPSBuZXcgU2V0O1xuICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgIGEgPSBmaWx0ZXIoYykoYSk7XG4gICAgcmV0dXJuIHRhcChiKShkKGEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gTihhKSB7XG4gIHJldHVybiBcInF1ZXJ5XCIgPT09IGEua2luZCB8fCBcIm11dGF0aW9uXCIgPT09IGEua2luZDtcbn1cblxuZnVuY3Rpb24gTyhhKSB7XG4gIHJldHVybiBcInF1ZXJ5XCIgIT09IGEua2luZCAmJiBcIm11dGF0aW9uXCIgIT09IGEua2luZDtcbn1cblxuZnVuY3Rpb24gUChhKSB7XG4gIHZhciBiID0gYS5mb3J3YXJkLCBjID0gYS5kaXNwYXRjaERlYnVnO1xuICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgIHZhciBmLCBkID0gc2hhcmUoYSk7XG4gICAgYSA9IG1lcmdlTWFwKChmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgYiA9IGEua2V5LCBlID0gZmlsdGVyKChmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBcInRlYXJkb3duXCIgPT09IGEua2luZCAmJiBhLmtleSA9PT0gYjtcbiAgICAgIH0pKShkKSwgZyA9IG1ha2VGZXRjaEJvZHkoYSksIGggPSBtYWtlRmV0Y2hVUkwoYSwgZyksIGwgPSBtYWtlRmV0Y2hPcHRpb25zKGEsIGcpO1xuICAgICAgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmIGMoe1xuICAgICAgICB0eXBlOiBcImZldGNoUmVxdWVzdFwiLFxuICAgICAgICBtZXNzYWdlOiBcIkEgZmV0Y2ggcmVxdWVzdCBpcyBiZWluZyBleGVjdXRlZC5cIixcbiAgICAgICAgb3BlcmF0aW9uOiBhLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXJsOiBoLFxuICAgICAgICAgIGZldGNoT3B0aW9uczogbFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2U6IFwiZmV0Y2hFeGNoYW5nZVwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvblB1c2goKGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgdmFyIGQgPSBiLmRhdGEgPyB2b2lkIDAgOiBiLmVycm9yO1xuICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgYyh7XG4gICAgICAgICAgdHlwZTogZCA/IFwiZmV0Y2hFcnJvclwiIDogXCJmZXRjaFN1Y2Nlc3NcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIkEgXCIgKyAoZCA/IFwiZmFpbGVkXCIgOiBcInN1Y2Nlc3NmdWxcIikgKyBcIiBmZXRjaCByZXNwb25zZSBoYXMgYmVlbiByZXR1cm5lZC5cIixcbiAgICAgICAgICBvcGVyYXRpb246IGEsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXJsOiBoLFxuICAgICAgICAgICAgZmV0Y2hPcHRpb25zOiBsLFxuICAgICAgICAgICAgdmFsdWU6IGQgfHwgYlxuICAgICAgICAgIH0sXG4gICAgICAgICAgc291cmNlOiBcImZldGNoRXhjaGFuZ2VcIlxuICAgICAgICB9KTtcbiAgICAgIH0pKSh0YWtlVW50aWwoZSkobWFrZUZldGNoU291cmNlKGEsIGgsIGwpKSk7XG4gICAgfSkpKGZpbHRlcihOKShkKSk7XG4gICAgZiA9IGIoZmlsdGVyKE8pKGQpKTtcbiAgICByZXR1cm4gbWVyZ2UoWyBhLCBmIF0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBRKCkge1xuICByZXR1cm4gITE7XG59XG5cbmZ1bmN0aW9uIFIoYSkge1xuICBmdW5jdGlvbiBiKGEpIHtcbiAgICBpZiAoXCJ0ZWFyZG93blwiICE9PSBhLmtpbmQgJiYgXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICB2YXIgYiA9ICdObyBleGNoYW5nZSBoYXMgaGFuZGxlZCBvcGVyYXRpb25zIG9mIGtpbmQgXCInICsgYS5raW5kICsgXCJcXFwiLiBDaGVjayB3aGV0aGVyIHlvdSd2ZSBhZGRlZCBhbiBleGNoYW5nZSByZXNwb25zaWJsZSBmb3IgdGhlc2Ugb3BlcmF0aW9ucy5cIjtcbiAgICAgIFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBjKHtcbiAgICAgICAgdHlwZTogXCJmYWxsYmFja0NhdGNoXCIsXG4gICAgICAgIG1lc3NhZ2U6IGIsXG4gICAgICAgIG9wZXJhdGlvbjogYSxcbiAgICAgICAgc291cmNlOiBcImZhbGxiYWNrRXhjaGFuZ2VcIlxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLndhcm4oYik7XG4gICAgfVxuICB9XG4gIHZhciBjID0gYS5kaXNwYXRjaERlYnVnO1xuICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBmaWx0ZXIoUSkodGFwKGIpKGEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gVChhKSB7XG4gIHJldHVybiBmdW5jdGlvbihiKSB7XG4gICAgdmFyIGMgPSBiLmNsaWVudCwgZCA9IGIuZGlzcGF0Y2hEZWJ1ZztcbiAgICByZXR1cm4gYS5yZWR1Y2VSaWdodCgoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGIoe1xuICAgICAgICBjbGllbnQ6IGMsXG4gICAgICAgIGZvcndhcmQ6IGEsXG4gICAgICAgIGRpc3BhdGNoRGVidWc6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICBcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgZChfZXh0ZW5kcyh7fSwge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgc291cmNlOiBiLm5hbWVcbiAgICAgICAgICB9LCBhKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pLCBiLmZvcndhcmQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBWKGEpIHtcbiAgdmFyIGQsIGUsIGYsIGcsIG0sIGMgPSB0aGlzO1xuICB0aGlzLmFjdGl2ZU9wZXJhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLnF1ZXVlID0gW107XG4gIHRoaXMuY3JlYXRlT3BlcmF0aW9uQ29udGV4dCA9IGZ1bmN0aW9uKGEpIHtcbiAgICBhIHx8IChhID0ge30pO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwge1xuICAgICAgdXJsOiBjLnVybCxcbiAgICAgIGZldGNoT3B0aW9uczogYy5mZXRjaE9wdGlvbnMsXG4gICAgICBmZXRjaDogYy5mZXRjaCxcbiAgICAgIHByZWZlckdldE1ldGhvZDogYy5wcmVmZXJHZXRNZXRob2RcbiAgICB9LCBhLCB7XG4gICAgICBzdXNwZW5zZTogYS5zdXNwZW5zZSB8fCAhMSAhPT0gYS5zdXNwZW5zZSAmJiBjLnN1c3BlbnNlLFxuICAgICAgcmVxdWVzdFBvbGljeTogYS5yZXF1ZXN0UG9saWN5IHx8IGMucmVxdWVzdFBvbGljeVxuICAgIH0pO1xuICB9O1xuICB0aGlzLmNyZWF0ZVJlcXVlc3RPcGVyYXRpb24gPSBmdW5jdGlvbihhLCBiLCBkKSB7XG4gICAgcmV0dXJuIHgoYSwgYiwgYy5jcmVhdGVPcGVyYXRpb25Db250ZXh0KGQpKTtcbiAgfTtcbiAgdGhpcy5leGVjdXRlUXVlcnkgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgYSA9IGMuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcInF1ZXJ5XCIsIGEsIGIpO1xuICAgIHJldHVybiBjLmV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uKGEpO1xuICB9O1xuICB0aGlzLmV4ZWN1dGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgYSA9IGMuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcInN1YnNjcmlwdGlvblwiLCBhLCBiKTtcbiAgICByZXR1cm4gYy5leGVjdXRlUmVxdWVzdE9wZXJhdGlvbihhKTtcbiAgfTtcbiAgdGhpcy5leGVjdXRlTXV0YXRpb24gPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgYSA9IGMuY3JlYXRlUmVxdWVzdE9wZXJhdGlvbihcIm11dGF0aW9uXCIsIGEsIGIpO1xuICAgIHJldHVybiBjLmV4ZWN1dGVSZXF1ZXN0T3BlcmF0aW9uKGEpO1xuICB9O1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WICYmICFhLnVybCkge1xuICAgIHRocm93IEVycm9yKFwiWW91IGFyZSBjcmVhdGluZyBhbiB1cnFsLWNsaWVudCB3aXRob3V0IGEgdXJsLlwiKTtcbiAgfVxuICBkID0gejtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGUgPSAoZCA9IG1ha2VTdWJqZWN0KCkpLm5leHQsIGYgPSBkLnNvdXJjZTtcbiAgICB0aGlzLnN1YnNjcmliZVRvRGVidWdUYXJnZXQgPSBmdW5jdGlvbiBiKGEpIHtcbiAgICAgIHJldHVybiBzdWJzY3JpYmUoYSkoZik7XG4gICAgfTtcbiAgICBkID0gZTtcbiAgfVxuICB0aGlzLnVybCA9IGEudXJsO1xuICB0aGlzLmZldGNoT3B0aW9ucyA9IGEuZmV0Y2hPcHRpb25zO1xuICB0aGlzLmZldGNoID0gYS5mZXRjaDtcbiAgdGhpcy5zdXNwZW5zZSA9ICEhYS5zdXNwZW5zZTtcbiAgdGhpcy5yZXF1ZXN0UG9saWN5ID0gYS5yZXF1ZXN0UG9saWN5IHx8IFwiY2FjaGUtZmlyc3RcIjtcbiAgdGhpcy5wcmVmZXJHZXRNZXRob2QgPSAhIWEucHJlZmVyR2V0TWV0aG9kO1xuICB0aGlzLm1hc2tUeXBlbmFtZSA9ICEhYS5tYXNrVHlwZW5hbWU7XG4gIGUgPSBtYWtlU3ViamVjdCgpO1xuICBnID0gZS5uZXh0O1xuICB0aGlzLm9wZXJhdGlvbnMkID0gZS5zb3VyY2U7XG4gIG0gPSAhMTtcbiAgdGhpcy5kaXNwYXRjaE9wZXJhdGlvbiA9IGZ1bmN0aW9uKGEpIHtcbiAgICBtID0gITA7XG4gICAgZm9yIChhICYmIGcoYSk7IGEgPSBjLnF1ZXVlLnNoaWZ0KCk7ICkge1xuICAgICAgZyhhKTtcbiAgICB9XG4gICAgbSA9ICExO1xuICB9O1xuICB0aGlzLnJlZXhlY3V0ZU9wZXJhdGlvbiA9IGZ1bmN0aW9uKGEpIHtcbiAgICBpZiAoXCJtdXRhdGlvblwiID09PSBhLmtpbmQgfHwgMCA8IChjLmFjdGl2ZU9wZXJhdGlvbnNbYS5rZXldIHx8IDApKSB7XG4gICAgICBjLnF1ZXVlLnB1c2goYSksIG0gfHwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihjLmRpc3BhdGNoT3BlcmF0aW9uKTtcbiAgICB9XG4gIH07XG4gIGEgPSBUKHZvaWQgMCAhPT0gYS5leGNoYW5nZXMgPyBhLmV4Y2hhbmdlcyA6IFUpO1xuICB0aGlzLnJlc3VsdHMkID0gc2hhcmUoYSh7XG4gICAgY2xpZW50OiB0aGlzLFxuICAgIGRpc3BhdGNoRGVidWc6IGQsXG4gICAgZm9yd2FyZDogUih7XG4gICAgICBkaXNwYXRjaERlYnVnOiBkXG4gICAgfSlcbiAgfSkodGhpcy5vcGVyYXRpb25zJCkpO1xuICBwdWJsaXNoKHRoaXMucmVzdWx0cyQpO1xufVxuXG5mdW5jdGlvbiBXKGEpIHtcbiAgYS5kYXRhID0gdihhLmRhdGEpO1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KGEpIHtcbiAgcmV0dXJuIG5ldyBWKGEpO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z0V4Y2hhbmdlKGEpIHtcbiAgdmFyIGQgPSBhLmZvcndhcmQ7XG4gIHJldHVybiBcInByb2R1Y3Rpb25cIiA9PT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPyBmdW5jdGlvbiBiKGEpIHtcbiAgICByZXR1cm4gZChhKTtcbiAgfSA6IGZ1bmN0aW9uIGMoYSkge1xuICAgIHJldHVybiB0YXAoSykoZCh0YXAoTCkoYSkpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXJyb3JFeGNoYW5nZShhKSB7XG4gIGZ1bmN0aW9uIGIoYSkge1xuICAgIHZhciBiID0gYS5lcnJvcjtcbiAgICBhID0gYS5vcGVyYXRpb247XG4gICAgYiAmJiBjKGIsIGEpO1xuICB9XG4gIHZhciBjID0gYS5vbkVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgIHZhciBjID0gYS5mb3J3YXJkO1xuICAgIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gdGFwKGIpKGMoYSkpO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdxbCgpIHtcbiAgdmFyIGEsIGIsIGMsIGQsIGUsIGYsIGc7XG4gIGZvciAoYSA9IGFyZ3VtZW50cywgYiA9IG5ldyBNYXAsIGMgPSBbXSwgZCA9IFtdLCBlID0gQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pID8gYXJndW1lbnRzWzBdWzBdIDogYXJndW1lbnRzWzBdIHx8IFwiXCIsIFxuICBmID0gMTsgZiA8IGFyZ3VtZW50cy5sZW5ndGg7IGYrKykge1xuICAgIChnID0gYVtmXSkgJiYgZy5kZWZpbml0aW9ucyA/IGQucHVzaC5hcHBseShkLCBnLmRlZmluaXRpb25zKSA6IGUgKz0gZztcbiAgICBlICs9IGFbMF1bZl07XG4gIH1cbiAgQShiLCBjLCBrZXlEb2N1bWVudChlKS5kZWZpbml0aW9ucyk7XG4gIEEoYiwgYywgZCk7XG4gIHJldHVybiBrZXlEb2N1bWVudCh7XG4gICAga2luZDogS2luZC5ET0NVTUVOVCxcbiAgICBkZWZpbml0aW9uczogY1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3NyRXhjaGFuZ2UoYSkge1xuICBmdW5jdGlvbiBiKGIpIHtcbiAgICB2YXIgYyA9IGIuY2xpZW50LCBsID0gYi5mb3J3YXJkO1xuICAgIHJldHVybiBmdW5jdGlvbihiKSB7XG4gICAgICB2YXIgZSA9IGEgJiYgXCJib29sZWFuXCIgPT0gdHlwZW9mIGEuaXNDbGllbnQgPyAhIWEuaXNDbGllbnQgOiAhYy5zdXNwZW5zZSwgaCA9IHNoYXJlKGIpO1xuICAgICAgYiA9IGwoZmlsdGVyKGYpKGgpKTtcbiAgICAgIGggPSBtYXAoZykoZmlsdGVyKG0pKGgpKTtcbiAgICAgIGUgPyBoID0gdGFwKGQpKGgpIDogYiA9IHRhcChxKShiKTtcbiAgICAgIHJldHVybiBtZXJnZShbIGIsIGggXSk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBjKGEpIHtcbiAgICByZXR1cm4gIUIoYSkgJiYgdm9pZCAwICE9PSBrW2Eua2V5XTtcbiAgfVxuICBmdW5jdGlvbiBkKGEpIHtcbiAgICBoLnB1c2goYS5vcGVyYXRpb24ua2V5KTtcbiAgICAxID09PSBoLmxlbmd0aCAmJiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGUpO1xuICB9XG4gIGZ1bmN0aW9uIGUoKSB7XG4gICAgZm9yICh2YXIgYTsgYSA9IGguc2hpZnQoKTsgKSB7XG4gICAgICBkZWxldGUga1thXTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZihhKSB7XG4gICAgcmV0dXJuICFjKGEpO1xuICB9XG4gIGZ1bmN0aW9uIGcoYSkge1xuICAgIHZhciBiID0ga1thLmtleV0sIGMgPSBiLmVycm9yO1xuICAgIHJldHVybiB7XG4gICAgICBvcGVyYXRpb246IGEsXG4gICAgICBkYXRhOiAoYiA9IGIuZGF0YSkgPyBKU09OLnBhcnNlKGIpIDogdm9pZCAwLFxuICAgICAgZXh0ZW5zaW9uczogdm9pZCAwLFxuICAgICAgZXJyb3I6IGMgPyBuZXcgQ29tYmluZWRFcnJvcih7XG4gICAgICAgIG5ldHdvcmtFcnJvcjogYy5uZXR3b3JrRXJyb3IgPyBFcnJvcihjLm5ldHdvcmtFcnJvcikgOiB2b2lkIDAsXG4gICAgICAgIGdyYXBoUUxFcnJvcnM6IGMuZ3JhcGhRTEVycm9ycyAmJiBjLmdyYXBoUUxFcnJvcnMubGVuZ3RoID8gYy5ncmFwaFFMRXJyb3JzIDogdm9pZCAwXG4gICAgICB9KSA6IHZvaWQgMFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbShhKSB7XG4gICAgcmV0dXJuIGMoYSk7XG4gIH1cbiAgZnVuY3Rpb24gcShhKSB7XG4gICAgdmFyIGMsIGQsIGIgPSBhLm9wZXJhdGlvbjtcbiAgICBpZiAoIUIoYikpIHtcbiAgICAgIGMgPSBhLmRhdGE7XG4gICAgICBhID0gYS5lcnJvcjtcbiAgICAgIGQgPSB7fTtcbiAgICAgIHZvaWQgMCAhPT0gYyAmJiAoZC5kYXRhID0gSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgYSAmJiAoZC5lcnJvciA9IHtcbiAgICAgICAgZ3JhcGhRTEVycm9yczogYS5ncmFwaFFMRXJyb3JzLm1hcChDKVxuICAgICAgfSwgYS5uZXR3b3JrRXJyb3IgJiYgKGQuZXJyb3IubmV0d29ya0Vycm9yID0gXCJcIiArIGEubmV0d29ya0Vycm9yKSk7XG4gICAgICBrW2Iua2V5XSA9IGQ7XG4gICAgfVxuICB9XG4gIHZhciBrID0ge30sIGggPSBbXTtcbiAgYi5yZXN0b3JlRGF0YSA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoaywgYSk7XG4gIH07XG4gIGIuZXh0cmFjdERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGspO1xuICB9O1xuICBhICYmIGEuaW5pdGlhbFN0YXRlICYmIGIucmVzdG9yZURhdGEoYS5pbml0aWFsU3RhdGUpO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gc3Vic2NyaXB0aW9uRXhjaGFuZ2UoYSkge1xuICBmdW5jdGlvbiBiKGEpIHtcbiAgICByZXR1cm4gXCJzdWJzY3JpcHRpb25cIiA9PT0gKGEgPSBhLmtpbmQpIHx8ICEhZCAmJiAoXCJxdWVyeVwiID09PSBhIHx8IFwibXV0YXRpb25cIiA9PT0gYSk7XG4gIH1cbiAgdmFyIGMgPSBhLmZvcndhcmRTdWJzY3JpcHRpb24sIGQgPSBhLmVuYWJsZUFsbE9wZXJhdGlvbnM7XG4gIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICB2YXIgYiA9IGMoe1xuICAgICAgICBrZXk6IGEua2V5LnRvU3RyaW5nKDM2KSxcbiAgICAgICAgcXVlcnk6IHByaW50KGEucXVlcnkpLFxuICAgICAgICB2YXJpYWJsZXM6IGEudmFyaWFibGVzLFxuICAgICAgICBjb250ZXh0OiBfZXh0ZW5kcyh7fSwgYS5jb250ZXh0KVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWFrZSgoZnVuY3Rpb24oYykge1xuICAgICAgICBmdW5jdGlvbiBkKGIpIHtcbiAgICAgICAgICByZXR1cm4gZihtYWtlUmVzdWx0KGEsIGIpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBlKGIpIHtcbiAgICAgICAgICByZXR1cm4gZihtYWtlRXJyb3JSZXN1bHQoYSwgYikpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGgoKSB7XG4gICAgICAgICAgZyB8fCAoZyA9ICEwLCBcInN1YnNjcmlwdGlvblwiID09PSBhLmtpbmQgJiYgbS5yZWV4ZWN1dGVPcGVyYXRpb24oeChcInRlYXJkb3duXCIsIGEsIGEuY29udGV4dCkpLCBcbiAgICAgICAgICBsKCkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrLCBmID0gYy5uZXh0LCBsID0gYy5jb21wbGV0ZSwgZyA9ICExO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpIHtcbiAgICAgICAgICBnIHx8IChrID0gYi5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZCxcbiAgICAgICAgICAgIGVycm9yOiBlLFxuICAgICAgICAgICAgY29tcGxldGU6IGhcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGcgPSAhMDtcbiAgICAgICAgICBrICYmIGsudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZShhKSB7XG4gICAgICByZXR1cm4gIWsoYSk7XG4gICAgfVxuICAgIHZhciBtID0gYS5jbGllbnQsIHEgPSBhLmZvcndhcmQsIGsgPSBiO1xuICAgIHJldHVybiBmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgYywgYiA9IHNoYXJlKGEpO1xuICAgICAgYSA9IG1lcmdlTWFwKChmdW5jdGlvbihhKSB7XG4gICAgICAgIHZhciBjID0gYS5rZXksIGUgPSBmaWx0ZXIoKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICByZXR1cm4gXCJ0ZWFyZG93blwiID09PSBhLmtpbmQgJiYgYS5rZXkgPT09IGM7XG4gICAgICAgIH0pKShiKTtcbiAgICAgICAgcmV0dXJuIHRha2VVbnRpbChlKShkKGEpKTtcbiAgICAgIH0pKShmaWx0ZXIoaykoYikpO1xuICAgICAgYyA9IHEoZmlsdGVyKGUpKGIpKTtcbiAgICAgIHJldHVybiBtZXJnZShbIGEsIGMgXSk7XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIHQsIFMsIFU7XG5cbmltcG9ydCB7IHRvUHJvbWlzZSwgdGFrZSwgc2hhcmUsIGZpbHRlciwgbWFwLCB0YXAsIG1lcmdlLCBtZXJnZU1hcCwgdGFrZVVudGlsLCBtYWtlLCBvblB1c2gsIG1ha2VTdWJqZWN0LCBwdWJsaXNoLCBvblN0YXJ0LCBvbkVuZCwgc3dpdGNoTWFwLCBmcm9tVmFsdWUsIHN1YnNjcmliZSB9IGZyb20gXCJ3b25rYVwiO1xuXG5pbXBvcnQgeyBrIGFzIGtleURvY3VtZW50LCBfIGFzIF9leHRlbmRzLCBzIGFzIHN0cmluZ2lmeURvY3VtZW50LCBDIGFzIENvbWJpbmVkRXJyb3IsIG0gYXMgbWFrZVJlc3VsdCwgYSBhcyBtYWtlRXJyb3JSZXN1bHQsIGIgYXMgbWFrZUZldGNoQm9keSwgYyBhcyBtYWtlRmV0Y2hVUkwsIGQgYXMgbWFrZUZldGNoT3B0aW9ucywgZSBhcyBtYWtlRmV0Y2hTb3VyY2UsIGYgYXMgY3JlYXRlUmVxdWVzdCB9IGZyb20gXCIuLzJjMDFkOGIyLm1qc1wiO1xuXG5pbXBvcnQgeyB2aXNpdCB9IGZyb20gXCJncmFwaHFsL2xhbmd1YWdlL3Zpc2l0b3IubWpzXCI7XG5cbmltcG9ydCB7IEtpbmQgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9raW5kcy5tanNcIjtcblxuaW1wb3J0IHsgcHJpbnQgfSBmcm9tIFwiZ3JhcGhxbC9sYW5ndWFnZS9wcmludGVyLm1qc1wiO1xuXG5leHBvcnQgeyBDIGFzIENvbWJpbmVkRXJyb3IsIGYgYXMgY3JlYXRlUmVxdWVzdCwgaCBhcyBnZXRPcGVyYXRpb25OYW1lLCBhIGFzIG1ha2VFcnJvclJlc3VsdCwgbSBhcyBtYWtlUmVzdWx0LCBnIGFzIHN0cmluZ2lmeVZhcmlhYmxlcyB9IGZyb20gXCIuLzJjMDFkOGIyLm1qc1wiO1xuXG50ID0gbmV3IE1hcDtcblxuUyA9IFIoe1xuICBkaXNwYXRjaERlYnVnOiB6XG59KTtcblxuVSA9IFsgTSwgSSwgUCBdO1xuXG5WLnByb3RvdHlwZS5vbk9wZXJhdGlvblN0YXJ0ID0gZnVuY3Rpb24oYSkge1xuICB2YXIgYiA9IGEua2V5O1xuICB0aGlzLmFjdGl2ZU9wZXJhdGlvbnNbYl0gPSAodGhpcy5hY3RpdmVPcGVyYXRpb25zW2JdIHx8IDApICsgMTtcbiAgdGhpcy5kaXNwYXRjaE9wZXJhdGlvbihhKTtcbn07XG5cblYucHJvdG90eXBlLm9uT3BlcmF0aW9uRW5kID0gZnVuY3Rpb24oYSkge1xuICB2YXIgYiA9IGEua2V5LCBjID0gdGhpcy5hY3RpdmVPcGVyYXRpb25zW2JdIHx8IDA7XG4gIGlmICgwID49ICh0aGlzLmFjdGl2ZU9wZXJhdGlvbnNbYl0gPSAwID49IGMgPyAwIDogYyAtIDEpKSB7XG4gICAgZm9yIChiID0gdGhpcy5xdWV1ZS5sZW5ndGggLSAxOyAwIDw9IGI7IGItLSkge1xuICAgICAgdGhpcy5xdWV1ZVtiXS5rZXkgPT09IGEua2V5ICYmIHRoaXMucXVldWUuc3BsaWNlKGIsIDEpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoT3BlcmF0aW9uKHgoXCJ0ZWFyZG93blwiLCBhLCBhLmNvbnRleHQpKTtcbiAgfVxufTtcblxuVi5wcm90b3R5cGUuZXhlY3V0ZVJlcXVlc3RPcGVyYXRpb24gPSBmdW5jdGlvbihhKSB7XG4gIHZhciBlLCBmLCBjID0gdGhpcywgZCA9IGZpbHRlcigoZnVuY3Rpb24oYikge1xuICAgIHJldHVybiBiLm9wZXJhdGlvbi5rZXkgPT09IGEua2V5O1xuICB9KSkodGhpcy5yZXN1bHRzJCk7XG4gIHRoaXMubWFza1R5cGVuYW1lICYmIChkID0gbWFwKFcpKGQpKTtcbiAgaWYgKFwibXV0YXRpb25cIiA9PT0gYS5raW5kKSB7XG4gICAgcmV0dXJuIHRha2UoMSkob25TdGFydCgoZnVuY3Rpb24gYigpIHtcbiAgICAgIHJldHVybiBjLmRpc3BhdGNoT3BlcmF0aW9uKGEpO1xuICAgIH0pKShkKSk7XG4gIH1cbiAgZSA9IGZpbHRlcigoZnVuY3Rpb24oYikge1xuICAgIHJldHVybiBcInRlYXJkb3duXCIgPT09IGIua2luZCAmJiBiLmtleSA9PT0gYS5rZXk7XG4gIH0pKSh0aGlzLm9wZXJhdGlvbnMkKSwgZiA9IGZpbHRlcigoZnVuY3Rpb24oYikge1xuICAgIHJldHVybiBiLmtpbmQgPT09IGEua2luZCAmJiBiLmtleSA9PT0gYS5rZXkgJiYgXCJjYWNoZS1vbmx5XCIgIT09IGIuY29udGV4dC5yZXF1ZXN0UG9saWN5O1xuICB9KSkodGhpcy5vcGVyYXRpb25zJCk7XG4gIHJldHVybiBvbkVuZCgoZnVuY3Rpb24oKSB7XG4gICAgYy5vbk9wZXJhdGlvbkVuZChhKTtcbiAgfSkpKG9uU3RhcnQoKGZ1bmN0aW9uKCkge1xuICAgIGMub25PcGVyYXRpb25TdGFydChhKTtcbiAgfSkpKHN3aXRjaE1hcCgoZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhLnN0YWxlID8gZnJvbVZhbHVlKGEpIDogbWVyZ2UoWyBmcm9tVmFsdWUoYSksIG1hcCgoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGEsIHtcbiAgICAgICAgc3RhbGU6ICEwXG4gICAgICB9KTtcbiAgICB9KSkodGFrZSgxKShmKSkgXSk7XG4gIH0pKSh0YWtlVW50aWwoZSkoZCkpKSk7XG59O1xuXG5WLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKGEsIGIsIGMpIHtcbiAgYyAmJiBcImJvb2xlYW5cIiA9PSB0eXBlb2YgYy5zdXNwZW5zZSB8fCAoYyA9IF9leHRlbmRzKHt9LCBjLCB7XG4gICAgc3VzcGVuc2U6ICExXG4gIH0pKTtcbiAgcmV0dXJuIHcodGhpcy5leGVjdXRlUXVlcnkoY3JlYXRlUmVxdWVzdChhLCBiKSwgYykpO1xufTtcblxuVi5wcm90b3R5cGUucmVhZFF1ZXJ5ID0gZnVuY3Rpb24oYSwgYiwgYykge1xuICB2YXIgZCA9IG51bGw7XG4gIHN1YnNjcmliZSgoZnVuY3Rpb24oYSkge1xuICAgIGQgPSBhO1xuICB9KSkodGhpcy5leGVjdXRlUXVlcnkoY3JlYXRlUmVxdWVzdChhLCBiKSwgYykpLnVuc3Vic2NyaWJlKCk7XG4gIHJldHVybiBkO1xufTtcblxuVi5wcm90b3R5cGUuc3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oYSwgYiwgYykge1xuICByZXR1cm4gdGhpcy5leGVjdXRlU3Vic2NyaXB0aW9uKGNyZWF0ZVJlcXVlc3QoYSwgYiksIGMpO1xufTtcblxuVi5wcm90b3R5cGUubXV0YXRpb24gPSBmdW5jdGlvbihhLCBiLCBjKSB7XG4gIHJldHVybiB3KHRoaXMuZXhlY3V0ZU11dGF0aW9uKGNyZWF0ZVJlcXVlc3QoYSwgYiksIGMpKTtcbn07XG5cbmV4cG9ydCB7IFYgYXMgQ2xpZW50LCBJIGFzIGNhY2hlRXhjaGFuZ2UsIFQgYXMgY29tcG9zZUV4Y2hhbmdlcywgY3JlYXRlQ2xpZW50LCBkZWJ1Z0V4Y2hhbmdlLCBNIGFzIGRlZHVwRXhjaGFuZ2UsIFUgYXMgZGVmYXVsdEV4Y2hhbmdlcywgZXJyb3JFeGNoYW5nZSwgUyBhcyBmYWxsYmFja0V4Y2hhbmdlSU8sIFAgYXMgZmV0Y2hFeGNoYW5nZSwgdSBhcyBmb3JtYXREb2N1bWVudCwgZ3FsLCB4IGFzIG1ha2VPcGVyYXRpb24sIHYgYXMgbWFza1R5cGVuYW1lLCBzc3JFeGNoYW5nZSwgc3Vic2NyaXB0aW9uRXhjaGFuZ2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVycWwtY29yZS5tanMubWFwXG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4vLyBGSVhNRTpcbi8vIGZsb3dsaW50IHVuaW5pdGlhbGl6ZWQtaW5zdGFuY2UtcHJvcGVydHk6b2ZmXG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gXCIuLi9qc3V0aWxzL2lzT2JqZWN0TGlrZS5tanNcIjtcbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tIFwiLi4vbGFuZ3VhZ2UvbG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBwcmludExvY2F0aW9uLCBwcmludFNvdXJjZUxvY2F0aW9uIH0gZnJvbSBcIi4uL2xhbmd1YWdlL3ByaW50TG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIEEgR3JhcGhRTEVycm9yIGRlc2NyaWJlcyBhbiBFcnJvciBmb3VuZCBkdXJpbmcgdGhlIHBhcnNlLCB2YWxpZGF0ZSwgb3JcbiAqIGV4ZWN1dGUgcGhhc2VzIG9mIHBlcmZvcm1pbmcgYSBHcmFwaFFMIG9wZXJhdGlvbi4gSW4gYWRkaXRpb24gdG8gYSBtZXNzYWdlXG4gKiBhbmQgc3RhY2sgdHJhY2UsIGl0IGFsc28gaW5jbHVkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2F0aW9ucyBpbiBhXG4gKiBHcmFwaFFMIGRvY3VtZW50IGFuZC9vciBleGVjdXRpb24gcmVzdWx0IHRoYXQgY29ycmVzcG9uZCB0byB0aGUgRXJyb3IuXG4gKi9cblxuZXhwb3J0IHZhciBHcmFwaFFMRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoR3JhcGhRTEVycm9yLCBfRXJyb3IpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoR3JhcGhRTEVycm9yKTtcblxuICAvKipcbiAgICogQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIEVycm9yIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4gICAqXG4gICAqIEVudW1lcmFibGUsIGFuZCBhcHBlYXJzIGluIHRoZSByZXN1bHQgb2YgSlNPTi5zdHJpbmdpZnkoKS5cbiAgICpcbiAgICogTm90ZTogc2hvdWxkIGJlIHRyZWF0ZWQgYXMgcmVhZG9ubHksIGRlc3BpdGUgaW52YXJpYW50IHVzYWdlLlxuICAgKi9cblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgeyBsaW5lLCBjb2x1bW4gfSBsb2NhdGlvbnMgd2l0aGluIHRoZSBzb3VyY2UgR3JhcGhRTCBkb2N1bWVudFxuICAgKiB3aGljaCBjb3JyZXNwb25kIHRvIHRoaXMgZXJyb3IuXG4gICAqXG4gICAqIEVycm9ycyBkdXJpbmcgdmFsaWRhdGlvbiBvZnRlbiBjb250YWluIG11bHRpcGxlIGxvY2F0aW9ucywgZm9yIGV4YW1wbGUgdG9cbiAgICogcG9pbnQgb3V0IHR3byB0aGluZ3Mgd2l0aCB0aGUgc2FtZSBuYW1lLiBFcnJvcnMgZHVyaW5nIGV4ZWN1dGlvbiBpbmNsdWRlIGFcbiAgICogc2luZ2xlIGxvY2F0aW9uLCB0aGUgZmllbGQgd2hpY2ggcHJvZHVjZWQgdGhlIGVycm9yLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBkZXNjcmliaW5nIHRoZSBKU09OLXBhdGggaW50byB0aGUgZXhlY3V0aW9uIHJlc3BvbnNlIHdoaWNoXG4gICAqIGNvcnJlc3BvbmRzIHRvIHRoaXMgZXJyb3IuIE9ubHkgaW5jbHVkZWQgZm9yIGVycm9ycyBkdXJpbmcgZXhlY3V0aW9uLlxuICAgKlxuICAgKiBFbnVtZXJhYmxlLCBhbmQgYXBwZWFycyBpbiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KCkuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBHcmFwaFFMIEFTVCBOb2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoaXMgZXJyb3IuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnQgZm9yIHRoZSBmaXJzdCBsb2NhdGlvbiBvZiB0aGlzIGVycm9yLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgdGhpcyBFcnJvciByZXByZXNlbnRzIG1vcmUgdGhhbiBvbmUgbm9kZSwgdGhlIHNvdXJjZSBtYXkgbm90XG4gICAqIHJlcHJlc2VudCBub2RlcyBhZnRlciB0aGUgZmlyc3Qgbm9kZS5cbiAgICovXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGNoYXJhY3RlciBvZmZzZXRzIHdpdGhpbiB0aGUgc291cmNlIEdyYXBoUUwgZG9jdW1lbnRcbiAgICogd2hpY2ggY29ycmVzcG9uZCB0byB0aGlzIGVycm9yLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIG9yaWdpbmFsIGVycm9yIHRocm93biBmcm9tIGEgZmllbGQgcmVzb2x2ZXIgZHVyaW5nIGV4ZWN1dGlvbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBmaWVsZHMgdG8gYWRkIHRvIHRoZSBmb3JtYXR0ZWQgZXJyb3IuXG4gICAqL1xuICBmdW5jdGlvbiBHcmFwaFFMRXJyb3IobWVzc2FnZSwgbm9kZXMsIHNvdXJjZSwgcG9zaXRpb25zLCBwYXRoLCBvcmlnaW5hbEVycm9yLCBleHRlbnNpb25zKSB7XG4gICAgdmFyIF9sb2NhdGlvbnMyLCBfc291cmNlMiwgX3Bvc2l0aW9uczIsIF9leHRlbnNpb25zMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHcmFwaFFMRXJyb3IpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKTsgLy8gQ29tcHV0ZSBsaXN0IG9mIGJsYW1lIG5vZGVzLlxuXG4gICAgdmFyIF9ub2RlcyA9IEFycmF5LmlzQXJyYXkobm9kZXMpID8gbm9kZXMubGVuZ3RoICE9PSAwID8gbm9kZXMgOiB1bmRlZmluZWQgOiBub2RlcyA/IFtub2Rlc10gOiB1bmRlZmluZWQ7IC8vIENvbXB1dGUgbG9jYXRpb25zIGluIHRoZSBzb3VyY2UgZm9yIHRoZSBnaXZlbiBub2Rlcy9wb3NpdGlvbnMuXG5cblxuICAgIHZhciBfc291cmNlID0gc291cmNlO1xuXG4gICAgaWYgKCFfc291cmNlICYmIF9ub2Rlcykge1xuICAgICAgdmFyIF9ub2RlcyQwJGxvYztcblxuICAgICAgX3NvdXJjZSA9IChfbm9kZXMkMCRsb2MgPSBfbm9kZXNbMF0ubG9jKSA9PT0gbnVsbCB8fCBfbm9kZXMkMCRsb2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlcyQwJGxvYy5zb3VyY2U7XG4gICAgfVxuXG4gICAgdmFyIF9wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG5cbiAgICBpZiAoIV9wb3NpdGlvbnMgJiYgX25vZGVzKSB7XG4gICAgICBfcG9zaXRpb25zID0gX25vZGVzLnJlZHVjZShmdW5jdGlvbiAobGlzdCwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgICBsaXN0LnB1c2gobm9kZS5sb2Muc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgaWYgKF9wb3NpdGlvbnMgJiYgX3Bvc2l0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIF9wb3NpdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIF9sb2NhdGlvbnM7XG5cbiAgICBpZiAocG9zaXRpb25zICYmIHNvdXJjZSkge1xuICAgICAgX2xvY2F0aW9ucyA9IHBvc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHBvcykge1xuICAgICAgICByZXR1cm4gZ2V0TG9jYXRpb24oc291cmNlLCBwb3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChfbm9kZXMpIHtcbiAgICAgIF9sb2NhdGlvbnMgPSBfbm9kZXMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmxvYykge1xuICAgICAgICAgIGxpc3QucHVzaChnZXRMb2NhdGlvbihub2RlLmxvYy5zb3VyY2UsIG5vZGUubG9jLnN0YXJ0KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICB2YXIgX2V4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuXG4gICAgaWYgKF9leHRlbnNpb25zID09IG51bGwgJiYgb3JpZ2luYWxFcnJvciAhPSBudWxsKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFeHRlbnNpb25zID0gb3JpZ2luYWxFcnJvci5leHRlbnNpb25zO1xuXG4gICAgICBpZiAoaXNPYmplY3RMaWtlKG9yaWdpbmFsRXh0ZW5zaW9ucykpIHtcbiAgICAgICAgX2V4dGVuc2lvbnMgPSBvcmlnaW5hbEV4dGVuc2lvbnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsdWU6ICdHcmFwaFFMRXJyb3InXG4gICAgICB9LFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB2YWx1ZTogbWVzc2FnZSxcbiAgICAgICAgLy8gQnkgYmVpbmcgZW51bWVyYWJsZSwgSlNPTi5zdHJpbmdpZnkgd2lsbCBpbmNsdWRlIGBtZXNzYWdlYCBpbiB0aGVcbiAgICAgICAgLy8gcmVzdWx0aW5nIG91dHB1dC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNpbXBsZXN0IHBvc3NpYmxlIEdyYXBoUUxcbiAgICAgICAgLy8gc2VydmljZSBhZGhlcmVzIHRvIHRoZSBzcGVjLlxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uczoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogKF9sb2NhdGlvbnMyID0gX2xvY2F0aW9ucykgIT09IG51bGwgJiYgX2xvY2F0aW9uczIgIT09IHZvaWQgMCA/IF9sb2NhdGlvbnMyIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYGxvY2F0aW9uc2AgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2xvY2F0aW9ucyAhPSBudWxsXG4gICAgICB9LFxuICAgICAgcGF0aDoge1xuICAgICAgICAvLyBDb2VyY2luZyBmYWxzeSB2YWx1ZXMgdG8gdW5kZWZpbmVkIGVuc3VyZXMgdGhleSB3aWxsIG5vdCBiZSBpbmNsdWRlZFxuICAgICAgICAvLyBpbiBKU09OLnN0cmluZ2lmeSgpIHdoZW4gbm90IHByb3ZpZGVkLlxuICAgICAgICB2YWx1ZTogcGF0aCAhPT0gbnVsbCAmJiBwYXRoICE9PSB2b2lkIDAgPyBwYXRoIDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCeSBiZWluZyBlbnVtZXJhYmxlLCBKU09OLnN0cmluZ2lmeSB3aWxsIGluY2x1ZGUgYHBhdGhgIGluIHRoZVxuICAgICAgICAvLyByZXN1bHRpbmcgb3V0cHV0LiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2ltcGxlc3QgcG9zc2libGUgR3JhcGhRTFxuICAgICAgICAvLyBzZXJ2aWNlIGFkaGVyZXMgdG8gdGhlIHNwZWMuXG4gICAgICAgIGVudW1lcmFibGU6IHBhdGggIT0gbnVsbFxuICAgICAgfSxcbiAgICAgIG5vZGVzOiB7XG4gICAgICAgIHZhbHVlOiBfbm9kZXMgIT09IG51bGwgJiYgX25vZGVzICE9PSB2b2lkIDAgPyBfbm9kZXMgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgdmFsdWU6IChfc291cmNlMiA9IF9zb3VyY2UpICE9PSBudWxsICYmIF9zb3VyY2UyICE9PSB2b2lkIDAgPyBfc291cmNlMiA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHBvc2l0aW9uczoge1xuICAgICAgICB2YWx1ZTogKF9wb3NpdGlvbnMyID0gX3Bvc2l0aW9ucykgIT09IG51bGwgJiYgX3Bvc2l0aW9uczIgIT09IHZvaWQgMCA/IF9wb3NpdGlvbnMyIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgb3JpZ2luYWxFcnJvcjoge1xuICAgICAgICB2YWx1ZTogb3JpZ2luYWxFcnJvclxuICAgICAgfSxcbiAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgLy8gQ29lcmNpbmcgZmFsc3kgdmFsdWVzIHRvIHVuZGVmaW5lZCBlbnN1cmVzIHRoZXkgd2lsbCBub3QgYmUgaW5jbHVkZWRcbiAgICAgICAgLy8gaW4gSlNPTi5zdHJpbmdpZnkoKSB3aGVuIG5vdCBwcm92aWRlZC5cbiAgICAgICAgdmFsdWU6IChfZXh0ZW5zaW9uczIgPSBfZXh0ZW5zaW9ucykgIT09IG51bGwgJiYgX2V4dGVuc2lvbnMyICE9PSB2b2lkIDAgPyBfZXh0ZW5zaW9uczIgOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEJ5IGJlaW5nIGVudW1lcmFibGUsIEpTT04uc3RyaW5naWZ5IHdpbGwgaW5jbHVkZSBgcGF0aGAgaW4gdGhlXG4gICAgICAgIC8vIHJlc3VsdGluZyBvdXRwdXQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzaW1wbGVzdCBwb3NzaWJsZSBHcmFwaFFMXG4gICAgICAgIC8vIHNlcnZpY2UgYWRoZXJlcyB0byB0aGUgc3BlYy5cbiAgICAgICAgZW51bWVyYWJsZTogX2V4dGVuc2lvbnMgIT0gbnVsbFxuICAgICAgfVxuICAgIH0pOyAvLyBJbmNsdWRlIChub24tZW51bWVyYWJsZSkgc3RhY2sgdHJhY2UuXG5cbiAgICBpZiAob3JpZ2luYWxFcnJvciAhPT0gbnVsbCAmJiBvcmlnaW5hbEVycm9yICE9PSB2b2lkIDAgJiYgb3JpZ2luYWxFcnJvci5zdGFjaykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnc3RhY2snLCB7XG4gICAgICAgIHZhbHVlOiBvcmlnaW5hbEVycm9yLnN0YWNrLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcyk7XG4gICAgfSAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIEdyYXBoUUxFcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ3N0YWNrJywge1xuICAgICAgICB2YWx1ZTogRXJyb3IoKS5zdGFjayxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdyYXBoUUxFcnJvciwgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gcHJpbnRFcnJvcih0aGlzKTtcbiAgICB9IC8vIEZJWE1FOiB3b3JrYXJvdW5kIHRvIG5vdCBicmVhayBjaGFpIGNvbXBhcmlzb25zLCBzaG91bGQgYmUgcmVtb3ZlIGluIHYxNlxuICAgIC8vICRGbG93Rml4TWVbdW5zdXBwb3J0ZWQtc3ludGF4XSBGbG93IGRvZXNuJ3Qgc3VwcG9ydCBjb21wdXRlZCBwcm9wZXJ0aWVzIHlldFxuXG4gIH0sIHtcbiAgICBrZXk6IFNZTUJPTF9UT19TVFJJTkdfVEFHLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHcmFwaFFMRXJyb3I7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuLyoqXG4gKiBQcmludHMgYSBHcmFwaFFMRXJyb3IgdG8gYSBzdHJpbmcsIHJlcHJlc2VudGluZyB1c2VmdWwgbG9jYXRpb24gaW5mb3JtYXRpb25cbiAqIGFib3V0IHRoZSBlcnJvcidzIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RXJyb3IoZXJyb3IpIHtcbiAgdmFyIG91dHB1dCA9IGVycm9yLm1lc3NhZ2U7XG5cbiAgaWYgKGVycm9yLm5vZGVzKSB7XG4gICAgZm9yICh2YXIgX2kyID0gMCwgX2Vycm9yJG5vZGVzMiA9IGVycm9yLm5vZGVzOyBfaTIgPCBfZXJyb3Ikbm9kZXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBub2RlID0gX2Vycm9yJG5vZGVzMltfaTJdO1xuXG4gICAgICBpZiAobm9kZS5sb2MpIHtcbiAgICAgICAgb3V0cHV0ICs9ICdcXG5cXG4nICsgcHJpbnRMb2NhdGlvbihub2RlLmxvYyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGVycm9yLnNvdXJjZSAmJiBlcnJvci5sb2NhdGlvbnMpIHtcbiAgICBmb3IgKHZhciBfaTQgPSAwLCBfZXJyb3IkbG9jYXRpb25zMiA9IGVycm9yLmxvY2F0aW9uczsgX2k0IDwgX2Vycm9yJGxvY2F0aW9uczIubGVuZ3RoOyBfaTQrKykge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX2Vycm9yJGxvY2F0aW9uczJbX2k0XTtcbiAgICAgIG91dHB1dCArPSAnXFxuXFxuJyArIHByaW50U291cmNlTG9jYXRpb24oZXJyb3Iuc291cmNlLCBsb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiIsImltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gXCIuL0dyYXBoUUxFcnJvci5tanNcIjtcbi8qKlxuICogUHJvZHVjZXMgYSBHcmFwaFFMRXJyb3IgcmVwcmVzZW50aW5nIGEgc3ludGF4IGVycm9yLCBjb250YWluaW5nIHVzZWZ1bFxuICogZGVzY3JpcHRpdmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN5bnRheCBlcnJvcidzIHBvc2l0aW9uIGluIHRoZSBzb3VyY2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRheEVycm9yKHNvdXJjZSwgcG9zaXRpb24sIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgR3JhcGhRTEVycm9yKFwiU3ludGF4IEVycm9yOiBcIi5jb25jYXQoZGVzY3JpcHRpb24pLCB1bmRlZmluZWQsIHNvdXJjZSwgW3Bvc2l0aW9uXSk7XG59XG4iLCJpbXBvcnQgaW52YXJpYW50IGZyb20gXCIuL2ludmFyaWFudC5tanNcIjtcbmltcG9ydCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sIGZyb20gXCIuL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzXCI7XG4vKipcbiAqIFRoZSBgZGVmaW5lSW5zcGVjdCgpYCBmdW5jdGlvbiBkZWZpbmVzIGBpbnNwZWN0KClgIHByb3RvdHlwZSBtZXRob2QgYXMgYWxpYXMgb2YgYHRvSlNPTmBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVJbnNwZWN0KGNsYXNzT2JqZWN0KSB7XG4gIHZhciBmbiA9IGNsYXNzT2JqZWN0LnByb3RvdHlwZS50b0pTT047XG4gIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyB8fCBpbnZhcmlhbnQoMCk7XG4gIGNsYXNzT2JqZWN0LnByb3RvdHlwZS5pbnNwZWN0ID0gZm47IC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlIChTZWU6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhxbC9ncmFwaHFsLWpzL2lzc3Vlcy8yMzE3JylcblxuICBpZiAobm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICAgIGNsYXNzT2JqZWN0LnByb3RvdHlwZVtub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sXSA9IGZuO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXZBc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIHZhciBib29sZWFuQ29uZGl0aW9uID0gQm9vbGVhbihjb25kaXRpb24pOyAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAoU2VlIHRyYW5zZm9ybWF0aW9uIGRvbmUgaW4gJy4vcmVzb3VyY2VzL2lubGluZUludmFyaWFudC5qcycpXG5cbiAgaWYgKCFib29sZWFuQ29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIGZsb3d0eXBlL25vLXdlYWstdHlwZXMgKi9cbmltcG9ydCBub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sIGZyb20gXCIuL25vZGVqc0N1c3RvbUluc3BlY3RTeW1ib2wubWpzXCI7XG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDEwO1xudmFyIE1BWF9SRUNVUlNJVkVfREVQVEggPSAyO1xuLyoqXG4gKiBVc2VkIHRvIHByaW50IHZhbHVlcyBpbiBlcnJvciBtZXNzYWdlcy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNwZWN0KHZhbHVlKSB7XG4gIHJldHVybiBmb3JtYXRWYWx1ZSh2YWx1ZSwgW10pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZSwgc2VlblZhbHVlcykge1xuICBzd2l0Y2ggKF90eXBlb2YodmFsdWUpKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICByZXR1cm4gdmFsdWUubmFtZSA/IFwiW2Z1bmN0aW9uIFwiLmNvbmNhdCh2YWx1ZS5uYW1lLCBcIl1cIikgOiAnW2Z1bmN0aW9uXSc7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXRPYmplY3RWYWx1ZSh2YWx1ZSwgc2VlblZhbHVlcyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0T2JqZWN0VmFsdWUodmFsdWUsIHByZXZpb3VzbHlTZWVuVmFsdWVzKSB7XG4gIGlmIChwcmV2aW91c2x5U2VlblZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICB9XG5cbiAgdmFyIHNlZW5WYWx1ZXMgPSBbXS5jb25jYXQocHJldmlvdXNseVNlZW5WYWx1ZXMsIFt2YWx1ZV0pO1xuICB2YXIgY3VzdG9tSW5zcGVjdEZuID0gZ2V0Q3VzdG9tRm4odmFsdWUpO1xuXG4gIGlmIChjdXN0b21JbnNwZWN0Rm4gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXN0b21WYWx1ZSA9IGN1c3RvbUluc3BlY3RGbi5jYWxsKHZhbHVlKTsgLy8gY2hlY2sgZm9yIGluZmluaXRlIHJlY3Vyc2lvblxuXG4gICAgaWYgKGN1c3RvbVZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXN0b21WYWx1ZSA9PT0gJ3N0cmluZycgPyBjdXN0b21WYWx1ZSA6IGZvcm1hdFZhbHVlKGN1c3RvbVZhbHVlLCBzZWVuVmFsdWVzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZm9ybWF0QXJyYXkodmFsdWUsIHNlZW5WYWx1ZXMpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdE9iamVjdCh2YWx1ZSwgc2VlblZhbHVlcyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE9iamVjdChvYmplY3QsIHNlZW5WYWx1ZXMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAne30nO1xuICB9XG5cbiAgaWYgKHNlZW5WYWx1ZXMubGVuZ3RoID4gTUFYX1JFQ1VSU0lWRV9ERVBUSCkge1xuICAgIHJldHVybiAnWycgKyBnZXRPYmplY3RUYWcob2JqZWN0KSArICddJztcbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IGZvcm1hdFZhbHVlKG9iamVjdFtrZXldLCBzZWVuVmFsdWVzKTtcbiAgICByZXR1cm4ga2V5ICsgJzogJyArIHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuICd7ICcgKyBwcm9wZXJ0aWVzLmpvaW4oJywgJykgKyAnIH0nO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShhcnJheSwgc2VlblZhbHVlcykge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdbXSc7XG4gIH1cblxuICBpZiAoc2VlblZhbHVlcy5sZW5ndGggPiBNQVhfUkVDVVJTSVZFX0RFUFRIKSB7XG4gICAgcmV0dXJuICdbQXJyYXldJztcbiAgfVxuXG4gIHZhciBsZW4gPSBNYXRoLm1pbihNQVhfQVJSQVlfTEVOR1RILCBhcnJheS5sZW5ndGgpO1xuICB2YXIgcmVtYWluaW5nID0gYXJyYXkubGVuZ3RoIC0gbGVuO1xuICB2YXIgaXRlbXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaXRlbXMucHVzaChmb3JtYXRWYWx1ZShhcnJheVtpXSwgc2VlblZhbHVlcykpO1xuICB9XG5cbiAgaWYgKHJlbWFpbmluZyA9PT0gMSkge1xuICAgIGl0ZW1zLnB1c2goJy4uLiAxIG1vcmUgaXRlbScpO1xuICB9IGVsc2UgaWYgKHJlbWFpbmluZyA+IDEpIHtcbiAgICBpdGVtcy5wdXNoKFwiLi4uIFwiLmNvbmNhdChyZW1haW5pbmcsIFwiIG1vcmUgaXRlbXNcIikpO1xuICB9XG5cbiAgcmV0dXJuICdbJyArIGl0ZW1zLmpvaW4oJywgJykgKyAnXSc7XG59XG5cbmZ1bmN0aW9uIGdldEN1c3RvbUZuKG9iamVjdCkge1xuICB2YXIgY3VzdG9tSW5zcGVjdEZuID0gb2JqZWN0W1N0cmluZyhub2RlanNDdXN0b21JbnNwZWN0U3ltYm9sKV07XG5cbiAgaWYgKHR5cGVvZiBjdXN0b21JbnNwZWN0Rm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3VzdG9tSW5zcGVjdEZuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBvYmplY3QuaW5zcGVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RUYWcob2JqZWN0KSB7XG4gIHZhciB0YWcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5yZXBsYWNlKC9eXFxbb2JqZWN0IC8sICcnKS5yZXBsYWNlKC9dJC8sICcnKTtcblxuICBpZiAodGFnID09PSAnT2JqZWN0JyAmJiB0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG5hbWUgPSBvYmplY3QuY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgbmFtZSAhPT0gJycpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWc7XG59XG4iLCIvKipcbiAqIEEgcmVwbGFjZW1lbnQgZm9yIGluc3RhbmNlb2Ygd2hpY2ggaW5jbHVkZXMgYW4gZXJyb3Igd2FybmluZyB3aGVuIG11bHRpLXJlYWxtXG4gKiBjb25zdHJ1Y3RvcnMgYXJlIGRldGVjdGVkLlxuICovXG4vLyBTZWU6IGh0dHBzOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXBlcmZvcm1hbmNlLmh0bWwjc2V0LW5vZGVfZW52LXRvLXByb2R1Y3Rpb25cbi8vIFNlZTogaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9ndWlkZXMvcHJvZHVjdGlvbi9cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5mdW5jdGlvbiBpbnN0YW5jZU9mKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcjtcbn0gOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5mdW5jdGlvbiBpbnN0YW5jZU9mKHZhbHVlLCBjb25zdHJ1Y3Rvcikge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFyIHZhbHVlQ2xhc3MgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY2xhc3NOYW1lID0gY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmIChjbGFzc05hbWUgJiYgdmFsdWVDbGFzcyAmJiB2YWx1ZUNsYXNzLm5hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBcIi5jb25jYXQoY2xhc3NOYW1lLCBcIiBcXFwiXCIpLmNvbmNhdCh2YWx1ZSwgXCJcXFwiIGZyb20gYW5vdGhlciBtb2R1bGUgb3IgcmVhbG0uXFxuXFxuRW5zdXJlIHRoYXQgdGhlcmUgaXMgb25seSBvbmUgaW5zdGFuY2Ugb2YgXFxcImdyYXBocWxcXFwiIGluIHRoZSBub2RlX21vZHVsZXNcXG5kaXJlY3RvcnkuIElmIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBcXFwiZ3JhcGhxbFxcXCIgYXJlIHRoZSBkZXBlbmRlbmNpZXMgb2Ygb3RoZXJcXG5yZWxpZWQgb24gbW9kdWxlcywgdXNlIFxcXCJyZXNvbHV0aW9uc1xcXCIgdG8gZW5zdXJlIG9ubHkgb25lIHZlcnNpb24gaXMgaW5zdGFsbGVkLlxcblxcbmh0dHBzOi8veWFybnBrZy5jb20vZW4vZG9jcy9zZWxlY3RpdmUtdmVyc2lvbi1yZXNvbHV0aW9uc1xcblxcbkR1cGxpY2F0ZSBcXFwiZ3JhcGhxbFxcXCIgbW9kdWxlcyBjYW5ub3QgYmUgdXNlZCBhdCB0aGUgc2FtZSB0aW1lIHNpbmNlIGRpZmZlcmVudFxcbnZlcnNpb25zIG1heSBoYXZlIGRpZmZlcmVudCBjYXBhYmlsaXRpZXMgYW5kIGJlaGF2aW9yLiBUaGUgZGF0YSBmcm9tIG9uZVxcbnZlcnNpb24gdXNlZCBpbiB0aGUgZnVuY3Rpb24gZnJvbSBhbm90aGVyIGNvdWxkIHByb2R1Y2UgY29uZnVzaW5nIGFuZFxcbnNwdXJpb3VzIHJlc3VsdHMuXCIpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICB2YXIgYm9vbGVhbkNvbmRpdGlvbiA9IEJvb2xlYW4oY29uZGl0aW9uKTsgLy8gaXN0YW5idWwgaWdub3JlIGVsc2UgKFNlZSB0cmFuc2Zvcm1hdGlvbiBkb25lIGluICcuL3Jlc291cmNlcy9pbmxpbmVJbnZhcmlhbnQuanMnKVxuXG4gIGlmICghYm9vbGVhbkNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlICE9IG51bGwgPyBtZXNzYWdlIDogJ1VuZXhwZWN0ZWQgaW52YXJpYW50IHRyaWdnZXJlZC4nKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3RcbiAqIGBudWxsYCBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gX3R5cGVvZih2YWx1ZSkgPT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG59XG4iLCIvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG52YXIgbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5mb3IgPT09ICdmdW5jdGlvbicgPyBTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuZXhwb3J0IGRlZmF1bHQgbm9kZWpzQ3VzdG9tSW5zcGVjdFN5bWJvbDtcbiIsImltcG9ydCBkZWZpbmVJbnNwZWN0IGZyb20gXCIuLi9qc3V0aWxzL2RlZmluZUluc3BlY3QubWpzXCI7XG5cbi8qKlxuICogQ29udGFpbnMgYSByYW5nZSBvZiBVVEYtOCBjaGFyYWN0ZXIgb2Zmc2V0cyBhbmQgdG9rZW4gcmVmZXJlbmNlcyB0aGF0XG4gKiBpZGVudGlmeSB0aGUgcmVnaW9uIG9mIHRoZSBzb3VyY2UgZnJvbSB3aGljaCB0aGUgQVNUIGRlcml2ZWQuXG4gKi9cbmV4cG9ydCB2YXIgTG9jYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoaXMgTm9kZSBlbmRzLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIFRva2VuIGF0IHdoaWNoIHRoaXMgTm9kZSBiZWdpbnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgVG9rZW4gYXQgd2hpY2ggdGhpcyBOb2RlIGVuZHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgU291cmNlIGRvY3VtZW50IHRoZSBBU1QgcmVwcmVzZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIExvY2F0aW9uKHN0YXJ0VG9rZW4sIGVuZFRva2VuLCBzb3VyY2UpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnRUb2tlbi5zdGFydDtcbiAgICB0aGlzLmVuZCA9IGVuZFRva2VuLmVuZDtcbiAgICB0aGlzLnN0YXJ0VG9rZW4gPSBzdGFydFRva2VuO1xuICAgIHRoaXMuZW5kVG9rZW4gPSBlbmRUb2tlbjtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMb2NhdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICBlbmQ6IHRoaXMuZW5kXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gTG9jYXRpb247XG59KCk7IC8vIFByaW50IGEgc2ltcGxpZmllZCBmb3JtIHdoZW4gYXBwZWFyaW5nIGluIGBpbnNwZWN0YCBhbmQgYHV0aWwuaW5zcGVjdGAuXG5cbmRlZmluZUluc3BlY3QoTG9jYXRpb24pO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmFuZ2Ugb2YgY2hhcmFjdGVycyByZXByZXNlbnRlZCBieSBhIGxleGljYWwgdG9rZW5cbiAqIHdpdGhpbiBhIFNvdXJjZS5cbiAqL1xuXG5leHBvcnQgdmFyIFRva2VuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIFRoZSBraW5kIG9mIFRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIGNoYXJhY3RlciBvZmZzZXQgYXQgd2hpY2ggdGhpcyBOb2RlIGJlZ2lucy5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjaGFyYWN0ZXIgb2Zmc2V0IGF0IHdoaWNoIHRoaXMgTm9kZSBlbmRzLlxuICAgKi9cblxuICAvKipcbiAgICogVGhlIDEtaW5kZXhlZCBsaW5lIG51bWJlciBvbiB3aGljaCB0aGlzIFRva2VuIGFwcGVhcnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgMS1pbmRleGVkIGNvbHVtbiBudW1iZXIgYXQgd2hpY2ggdGhpcyBUb2tlbiBiZWdpbnMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGb3Igbm9uLXB1bmN0dWF0aW9uIHRva2VucywgcmVwcmVzZW50cyB0aGUgaW50ZXJwcmV0ZWQgdmFsdWUgb2YgdGhlIHRva2VuLlxuICAgKi9cblxuICAvKipcbiAgICogVG9rZW5zIGV4aXN0IGFzIG5vZGVzIGluIGEgZG91YmxlLWxpbmtlZC1saXN0IGFtb25nc3QgYWxsIHRva2Vuc1xuICAgKiBpbmNsdWRpbmcgaWdub3JlZCB0b2tlbnMuIDxTT0Y+IGlzIGFsd2F5cyB0aGUgZmlyc3Qgbm9kZSBhbmQgPEVPRj5cbiAgICogdGhlIGxhc3QuXG4gICAqL1xuICBmdW5jdGlvbiBUb2tlbihraW5kLCBzdGFydCwgZW5kLCBsaW5lLCBjb2x1bW4sIHByZXYsIHZhbHVlKSB7XG4gICAgdGhpcy5raW5kID0ga2luZDtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUb2tlbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IHRoaXMua2luZCxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgbGluZTogdGhpcy5saW5lLFxuICAgICAgY29sdW1uOiB0aGlzLmNvbHVtblxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFRva2VuO1xufSgpOyAvLyBQcmludCBhIHNpbXBsaWZpZWQgZm9ybSB3aGVuIGFwcGVhcmluZyBpbiBgaW5zcGVjdGAgYW5kIGB1dGlsLmluc3BlY3RgLlxuXG5kZWZpbmVJbnNwZWN0KFRva2VuKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZShtYXliZU5vZGUpIHtcbiAgcmV0dXJuIG1heWJlTm9kZSAhPSBudWxsICYmIHR5cGVvZiBtYXliZU5vZGUua2luZCA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIFRoZSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBBU1Qgbm9kZSB0eXBlcy5cbiAqL1xuIiwiLyoqXG4gKiBQcm9kdWNlcyB0aGUgdmFsdWUgb2YgYSBibG9jayBzdHJpbmcgZnJvbSBpdHMgcGFyc2VkIHJhdyB2YWx1ZSwgc2ltaWxhciB0b1xuICogQ29mZmVlU2NyaXB0J3MgYmxvY2sgc3RyaW5nLCBQeXRob24ncyBkb2NzdHJpbmcgdHJpbSBvciBSdWJ5J3Mgc3RyaXBfaGVyZWRvYy5cbiAqXG4gKiBUaGlzIGltcGxlbWVudHMgdGhlIEdyYXBoUUwgc3BlYydzIEJsb2NrU3RyaW5nVmFsdWUoKSBzdGF0aWMgYWxnb3JpdGhtLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVkZW50QmxvY2tTdHJpbmdWYWx1ZShyYXdTdHJpbmcpIHtcbiAgLy8gRXhwYW5kIGEgYmxvY2sgc3RyaW5nJ3MgcmF3IHZhbHVlIGludG8gaW5kZXBlbmRlbnQgbGluZXMuXG4gIHZhciBsaW5lcyA9IHJhd1N0cmluZy5zcGxpdCgvXFxyXFxufFtcXG5cXHJdL2cpOyAvLyBSZW1vdmUgY29tbW9uIGluZGVudGF0aW9uIGZyb20gYWxsIGxpbmVzIGJ1dCBmaXJzdC5cblxuICB2YXIgY29tbW9uSW5kZW50ID0gZ2V0QmxvY2tTdHJpbmdJbmRlbnRhdGlvbihyYXdTdHJpbmcpO1xuXG4gIGlmIChjb21tb25JbmRlbnQgIT09IDApIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5lc1tpXSA9IGxpbmVzW2ldLnNsaWNlKGNvbW1vbkluZGVudCk7XG4gICAgfVxuICB9IC8vIFJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyBibGFuayBsaW5lcy5cblxuXG4gIHZhciBzdGFydExpbmUgPSAwO1xuXG4gIHdoaWxlIChzdGFydExpbmUgPCBsaW5lcy5sZW5ndGggJiYgaXNCbGFuayhsaW5lc1tzdGFydExpbmVdKSkge1xuICAgICsrc3RhcnRMaW5lO1xuICB9XG5cbiAgdmFyIGVuZExpbmUgPSBsaW5lcy5sZW5ndGg7XG5cbiAgd2hpbGUgKGVuZExpbmUgPiBzdGFydExpbmUgJiYgaXNCbGFuayhsaW5lc1tlbmRMaW5lIC0gMV0pKSB7XG4gICAgLS1lbmRMaW5lO1xuICB9IC8vIFJldHVybiBhIHN0cmluZyBvZiB0aGUgbGluZXMgam9pbmVkIHdpdGggVSswMDBBLlxuXG5cbiAgcmV0dXJuIGxpbmVzLnNsaWNlKHN0YXJ0TGluZSwgZW5kTGluZSkuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmsoc3RyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHN0cltpXSAhPT0gJyAnICYmIHN0cltpXSAhPT0gJ1xcdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmxvY2tTdHJpbmdJbmRlbnRhdGlvbih2YWx1ZSkge1xuICB2YXIgX2NvbW1vbkluZGVudDtcblxuICB2YXIgaXNGaXJzdExpbmUgPSB0cnVlO1xuICB2YXIgaXNFbXB0eUxpbmUgPSB0cnVlO1xuICB2YXIgaW5kZW50ID0gMDtcbiAgdmFyIGNvbW1vbkluZGVudCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgIHN3aXRjaCAodmFsdWUuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgLy8gIFxcclxuICAgICAgICBpZiAodmFsdWUuY2hhckNvZGVBdChpICsgMSkgPT09IDEwKSB7XG4gICAgICAgICAgKytpOyAvLyBza2lwIFxcclxcbiBhcyBvbmUgc3ltYm9sXG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIDEwOlxuICAgICAgICAvLyAgXFxuXG4gICAgICAgIGlzRmlyc3RMaW5lID0gZmFsc2U7XG4gICAgICAgIGlzRW1wdHlMaW5lID0gdHJ1ZTtcbiAgICAgICAgaW5kZW50ID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTogLy8gICBcXHRcblxuICAgICAgY2FzZSAzMjpcbiAgICAgICAgLy8gIDxzcGFjZT5cbiAgICAgICAgKytpbmRlbnQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoaXNFbXB0eUxpbmUgJiYgIWlzRmlyc3RMaW5lICYmIChjb21tb25JbmRlbnQgPT09IG51bGwgfHwgaW5kZW50IDwgY29tbW9uSW5kZW50KSkge1xuICAgICAgICAgIGNvbW1vbkluZGVudCA9IGluZGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzRW1wdHlMaW5lID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChfY29tbW9uSW5kZW50ID0gY29tbW9uSW5kZW50KSAhPT0gbnVsbCAmJiBfY29tbW9uSW5kZW50ICE9PSB2b2lkIDAgPyBfY29tbW9uSW5kZW50IDogMDtcbn1cbi8qKlxuICogUHJpbnQgYSBibG9jayBzdHJpbmcgaW4gdGhlIGluZGVudGVkIGJsb2NrIGZvcm0gYnkgYWRkaW5nIGEgbGVhZGluZyBhbmRcbiAqIHRyYWlsaW5nIGJsYW5rIGxpbmUuIEhvd2V2ZXIsIGlmIGEgYmxvY2sgc3RyaW5nIHN0YXJ0cyB3aXRoIHdoaXRlc3BhY2UgYW5kIGlzXG4gKiBhIHNpbmdsZS1saW5lLCBhZGRpbmcgYSBsZWFkaW5nIGJsYW5rIGxpbmUgd291bGQgc3RyaXAgdGhhdCB3aGl0ZXNwYWNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEJsb2NrU3RyaW5nKHZhbHVlKSB7XG4gIHZhciBpbmRlbnRhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gIHZhciBwcmVmZXJNdWx0aXBsZUxpbmVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgdmFyIGlzU2luZ2xlTGluZSA9IHZhbHVlLmluZGV4T2YoJ1xcbicpID09PSAtMTtcbiAgdmFyIGhhc0xlYWRpbmdTcGFjZSA9IHZhbHVlWzBdID09PSAnICcgfHwgdmFsdWVbMF0gPT09ICdcXHQnO1xuICB2YXIgaGFzVHJhaWxpbmdRdW90ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnXCInO1xuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnXFxcXCc7XG4gIHZhciBwcmludEFzTXVsdGlwbGVMaW5lcyA9ICFpc1NpbmdsZUxpbmUgfHwgaGFzVHJhaWxpbmdRdW90ZSB8fCBoYXNUcmFpbGluZ1NsYXNoIHx8IHByZWZlck11bHRpcGxlTGluZXM7XG4gIHZhciByZXN1bHQgPSAnJzsgLy8gRm9ybWF0IGEgbXVsdGktbGluZSBibG9jayBxdW90ZSB0byBhY2NvdW50IGZvciBsZWFkaW5nIHNwYWNlLlxuXG4gIGlmIChwcmludEFzTXVsdGlwbGVMaW5lcyAmJiAhKGlzU2luZ2xlTGluZSAmJiBoYXNMZWFkaW5nU3BhY2UpKSB7XG4gICAgcmVzdWx0ICs9ICdcXG4nICsgaW5kZW50YXRpb247XG4gIH1cblxuICByZXN1bHQgKz0gaW5kZW50YXRpb24gPyB2YWx1ZS5yZXBsYWNlKC9cXG4vZywgJ1xcbicgKyBpbmRlbnRhdGlvbikgOiB2YWx1ZTtcblxuICBpZiAocHJpbnRBc011bHRpcGxlTGluZXMpIHtcbiAgICByZXN1bHQgKz0gJ1xcbic7XG4gIH1cblxuICByZXR1cm4gJ1wiXCJcIicgKyByZXN1bHQucmVwbGFjZSgvXCJcIlwiL2csICdcXFxcXCJcIlwiJykgKyAnXCJcIlwiJztcbn1cbiIsIi8qKlxuICogVGhlIHNldCBvZiBhbGxvd2VkIGRpcmVjdGl2ZSBsb2NhdGlvbiB2YWx1ZXMuXG4gKi9cbmV4cG9ydCB2YXIgRGlyZWN0aXZlTG9jYXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgLy8gUmVxdWVzdCBEZWZpbml0aW9uc1xuICBRVUVSWTogJ1FVRVJZJyxcbiAgTVVUQVRJT046ICdNVVRBVElPTicsXG4gIFNVQlNDUklQVElPTjogJ1NVQlNDUklQVElPTicsXG4gIEZJRUxEOiAnRklFTEQnLFxuICBGUkFHTUVOVF9ERUZJTklUSU9OOiAnRlJBR01FTlRfREVGSU5JVElPTicsXG4gIEZSQUdNRU5UX1NQUkVBRDogJ0ZSQUdNRU5UX1NQUkVBRCcsXG4gIElOTElORV9GUkFHTUVOVDogJ0lOTElORV9GUkFHTUVOVCcsXG4gIFZBUklBQkxFX0RFRklOSVRJT046ICdWQVJJQUJMRV9ERUZJTklUSU9OJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRGVmaW5pdGlvbnNcbiAgU0NIRU1BOiAnU0NIRU1BJyxcbiAgU0NBTEFSOiAnU0NBTEFSJyxcbiAgT0JKRUNUOiAnT0JKRUNUJyxcbiAgRklFTERfREVGSU5JVElPTjogJ0ZJRUxEX0RFRklOSVRJT04nLFxuICBBUkdVTUVOVF9ERUZJTklUSU9OOiAnQVJHVU1FTlRfREVGSU5JVElPTicsXG4gIElOVEVSRkFDRTogJ0lOVEVSRkFDRScsXG4gIFVOSU9OOiAnVU5JT04nLFxuICBFTlVNOiAnRU5VTScsXG4gIEVOVU1fVkFMVUU6ICdFTlVNX1ZBTFVFJyxcbiAgSU5QVVRfT0JKRUNUOiAnSU5QVVRfT0JKRUNUJyxcbiAgSU5QVVRfRklFTERfREVGSU5JVElPTjogJ0lOUFVUX0ZJRUxEX0RFRklOSVRJT04nXG59KTtcbi8qKlxuICogVGhlIGVudW0gdHlwZSByZXByZXNlbnRpbmcgdGhlIGRpcmVjdGl2ZSBsb2NhdGlvbiB2YWx1ZXMuXG4gKi9cbiIsIi8qKlxuICogVGhlIHNldCBvZiBhbGxvd2VkIGtpbmQgdmFsdWVzIGZvciBBU1Qgbm9kZXMuXG4gKi9cbmV4cG9ydCB2YXIgS2luZCA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBOYW1lXG4gIE5BTUU6ICdOYW1lJyxcbiAgLy8gRG9jdW1lbnRcbiAgRE9DVU1FTlQ6ICdEb2N1bWVudCcsXG4gIE9QRVJBVElPTl9ERUZJTklUSU9OOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gIFZBUklBQkxFX0RFRklOSVRJT046ICdWYXJpYWJsZURlZmluaXRpb24nLFxuICBTRUxFQ1RJT05fU0VUOiAnU2VsZWN0aW9uU2V0JyxcbiAgRklFTEQ6ICdGaWVsZCcsXG4gIEFSR1VNRU5UOiAnQXJndW1lbnQnLFxuICAvLyBGcmFnbWVudHNcbiAgRlJBR01FTlRfU1BSRUFEOiAnRnJhZ21lbnRTcHJlYWQnLFxuICBJTkxJTkVfRlJBR01FTlQ6ICdJbmxpbmVGcmFnbWVudCcsXG4gIEZSQUdNRU5UX0RFRklOSVRJT046ICdGcmFnbWVudERlZmluaXRpb24nLFxuICAvLyBWYWx1ZXNcbiAgVkFSSUFCTEU6ICdWYXJpYWJsZScsXG4gIElOVDogJ0ludFZhbHVlJyxcbiAgRkxPQVQ6ICdGbG9hdFZhbHVlJyxcbiAgU1RSSU5HOiAnU3RyaW5nVmFsdWUnLFxuICBCT09MRUFOOiAnQm9vbGVhblZhbHVlJyxcbiAgTlVMTDogJ051bGxWYWx1ZScsXG4gIEVOVU06ICdFbnVtVmFsdWUnLFxuICBMSVNUOiAnTGlzdFZhbHVlJyxcbiAgT0JKRUNUOiAnT2JqZWN0VmFsdWUnLFxuICBPQkpFQ1RfRklFTEQ6ICdPYmplY3RGaWVsZCcsXG4gIC8vIERpcmVjdGl2ZXNcbiAgRElSRUNUSVZFOiAnRGlyZWN0aXZlJyxcbiAgLy8gVHlwZXNcbiAgTkFNRURfVFlQRTogJ05hbWVkVHlwZScsXG4gIExJU1RfVFlQRTogJ0xpc3RUeXBlJyxcbiAgTk9OX05VTExfVFlQRTogJ05vbk51bGxUeXBlJyxcbiAgLy8gVHlwZSBTeXN0ZW0gRGVmaW5pdGlvbnNcbiAgU0NIRU1BX0RFRklOSVRJT046ICdTY2hlbWFEZWZpbml0aW9uJyxcbiAgT1BFUkFUSU9OX1RZUEVfREVGSU5JVElPTjogJ09wZXJhdGlvblR5cGVEZWZpbml0aW9uJyxcbiAgLy8gVHlwZSBEZWZpbml0aW9uc1xuICBTQ0FMQVJfVFlQRV9ERUZJTklUSU9OOiAnU2NhbGFyVHlwZURlZmluaXRpb24nLFxuICBPQkpFQ1RfVFlQRV9ERUZJTklUSU9OOiAnT2JqZWN0VHlwZURlZmluaXRpb24nLFxuICBGSUVMRF9ERUZJTklUSU9OOiAnRmllbGREZWZpbml0aW9uJyxcbiAgSU5QVVRfVkFMVUVfREVGSU5JVElPTjogJ0lucHV0VmFsdWVEZWZpbml0aW9uJyxcbiAgSU5URVJGQUNFX1RZUEVfREVGSU5JVElPTjogJ0ludGVyZmFjZVR5cGVEZWZpbml0aW9uJyxcbiAgVU5JT05fVFlQRV9ERUZJTklUSU9OOiAnVW5pb25UeXBlRGVmaW5pdGlvbicsXG4gIEVOVU1fVFlQRV9ERUZJTklUSU9OOiAnRW51bVR5cGVEZWZpbml0aW9uJyxcbiAgRU5VTV9WQUxVRV9ERUZJTklUSU9OOiAnRW51bVZhbHVlRGVmaW5pdGlvbicsXG4gIElOUFVUX09CSkVDVF9UWVBFX0RFRklOSVRJT046ICdJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uJyxcbiAgLy8gRGlyZWN0aXZlIERlZmluaXRpb25zXG4gIERJUkVDVElWRV9ERUZJTklUSU9OOiAnRGlyZWN0aXZlRGVmaW5pdGlvbicsXG4gIC8vIFR5cGUgU3lzdGVtIEV4dGVuc2lvbnNcbiAgU0NIRU1BX0VYVEVOU0lPTjogJ1NjaGVtYUV4dGVuc2lvbicsXG4gIC8vIFR5cGUgRXh0ZW5zaW9uc1xuICBTQ0FMQVJfVFlQRV9FWFRFTlNJT046ICdTY2FsYXJUeXBlRXh0ZW5zaW9uJyxcbiAgT0JKRUNUX1RZUEVfRVhURU5TSU9OOiAnT2JqZWN0VHlwZUV4dGVuc2lvbicsXG4gIElOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTjogJ0ludGVyZmFjZVR5cGVFeHRlbnNpb24nLFxuICBVTklPTl9UWVBFX0VYVEVOU0lPTjogJ1VuaW9uVHlwZUV4dGVuc2lvbicsXG4gIEVOVU1fVFlQRV9FWFRFTlNJT046ICdFbnVtVHlwZUV4dGVuc2lvbicsXG4gIElOUFVUX09CSkVDVF9UWVBFX0VYVEVOU0lPTjogJ0lucHV0T2JqZWN0VHlwZUV4dGVuc2lvbidcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgcG9zc2libGUga2luZCB2YWx1ZXMgb2YgQVNUIG5vZGVzLlxuICovXG4iLCJpbXBvcnQgeyBzeW50YXhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9zeW50YXhFcnJvci5tanNcIjtcbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuaW1wb3J0IHsgVG9rZW5LaW5kIH0gZnJvbSBcIi4vdG9rZW5LaW5kLm1qc1wiO1xuaW1wb3J0IHsgZGVkZW50QmxvY2tTdHJpbmdWYWx1ZSB9IGZyb20gXCIuL2Jsb2NrU3RyaW5nLm1qc1wiO1xuLyoqXG4gKiBHaXZlbiBhIFNvdXJjZSBvYmplY3QsIGNyZWF0ZXMgYSBMZXhlciBmb3IgdGhhdCBzb3VyY2UuXG4gKiBBIExleGVyIGlzIGEgc3RhdGVmdWwgc3RyZWFtIGdlbmVyYXRvciBpbiB0aGF0IGV2ZXJ5IHRpbWVcbiAqIGl0IGlzIGFkdmFuY2VkLCBpdCByZXR1cm5zIHRoZSBuZXh0IHRva2VuIGluIHRoZSBTb3VyY2UuIEFzc3VtaW5nIHRoZVxuICogc291cmNlIGxleGVzLCB0aGUgZmluYWwgVG9rZW4gZW1pdHRlZCBieSB0aGUgbGV4ZXIgd2lsbCBiZSBvZiBraW5kXG4gKiBFT0YsIGFmdGVyIHdoaWNoIHRoZSBsZXhlciB3aWxsIHJlcGVhdGVkbHkgcmV0dXJuIHRoZSBzYW1lIEVPRiB0b2tlblxuICogd2hlbmV2ZXIgY2FsbGVkLlxuICovXG5cbmV4cG9ydCB2YXIgTGV4ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogVGhlIHByZXZpb3VzbHkgZm9jdXNlZCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cbiAgLyoqXG4gICAqIFRoZSAoMS1pbmRleGVkKSBsaW5lIGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgdG9rZW4uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgY2hhcmFjdGVyIG9mZnNldCBhdCB3aGljaCB0aGUgY3VycmVudCBsaW5lIGJlZ2lucy5cbiAgICovXG4gIGZ1bmN0aW9uIExleGVyKHNvdXJjZSkge1xuICAgIHZhciBzdGFydE9mRmlsZVRva2VuID0gbmV3IFRva2VuKFRva2VuS2luZC5TT0YsIDAsIDAsIDAsIDAsIG51bGwpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMubGFzdFRva2VuID0gc3RhcnRPZkZpbGVUb2tlbjtcbiAgICB0aGlzLnRva2VuID0gc3RhcnRPZkZpbGVUb2tlbjtcbiAgICB0aGlzLmxpbmUgPSAxO1xuICAgIHRoaXMubGluZVN0YXJ0ID0gMDtcbiAgfVxuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIHRva2VuIHN0cmVhbSB0byB0aGUgbmV4dCBub24taWdub3JlZCB0b2tlbi5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gTGV4ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZHZhbmNlID0gZnVuY3Rpb24gYWR2YW5jZSgpIHtcbiAgICB0aGlzLmxhc3RUb2tlbiA9IHRoaXMudG9rZW47XG4gICAgdmFyIHRva2VuID0gdGhpcy50b2tlbiA9IHRoaXMubG9va2FoZWFkKCk7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG4gIC8qKlxuICAgKiBMb29rcyBhaGVhZCBhbmQgcmV0dXJucyB0aGUgbmV4dCBub24taWdub3JlZCB0b2tlbiwgYnV0IGRvZXMgbm90IGNoYW5nZVxuICAgKiB0aGUgc3RhdGUgb2YgTGV4ZXIuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmxvb2thaGVhZCA9IGZ1bmN0aW9uIGxvb2thaGVhZCgpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2VuO1xuXG4gICAgaWYgKHRva2VuLmtpbmQgIT09IFRva2VuS2luZC5FT0YpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgdmFyIF90b2tlbiRuZXh0O1xuXG4gICAgICAgIC8vIE5vdGU6IG5leHQgaXMgb25seSBtdXRhYmxlIGR1cmluZyBwYXJzaW5nLCBzbyB3ZSBjYXN0IHRvIGFsbG93IHRoaXMuXG4gICAgICAgIHRva2VuID0gKF90b2tlbiRuZXh0ID0gdG9rZW4ubmV4dCkgIT09IG51bGwgJiYgX3Rva2VuJG5leHQgIT09IHZvaWQgMCA/IF90b2tlbiRuZXh0IDogdG9rZW4ubmV4dCA9IHJlYWRUb2tlbih0aGlzLCB0b2tlbik7XG4gICAgICB9IHdoaWxlICh0b2tlbi5raW5kID09PSBUb2tlbktpbmQuQ09NTUVOVCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9O1xuXG4gIHJldHVybiBMZXhlcjtcbn0oKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHVuY3R1YXRvclRva2VuS2luZChraW5kKSB7XG4gIHJldHVybiBraW5kID09PSBUb2tlbktpbmQuQkFORyB8fCBraW5kID09PSBUb2tlbktpbmQuRE9MTEFSIHx8IGtpbmQgPT09IFRva2VuS2luZC5BTVAgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBBUkVOX0wgfHwga2luZCA9PT0gVG9rZW5LaW5kLlBBUkVOX1IgfHwga2luZCA9PT0gVG9rZW5LaW5kLlNQUkVBRCB8fCBraW5kID09PSBUb2tlbktpbmQuQ09MT04gfHwga2luZCA9PT0gVG9rZW5LaW5kLkVRVUFMUyB8fCBraW5kID09PSBUb2tlbktpbmQuQVQgfHwga2luZCA9PT0gVG9rZW5LaW5kLkJSQUNLRVRfTCB8fCBraW5kID09PSBUb2tlbktpbmQuQlJBQ0tFVF9SIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9MIHx8IGtpbmQgPT09IFRva2VuS2luZC5QSVBFIHx8IGtpbmQgPT09IFRva2VuS2luZC5CUkFDRV9SO1xufVxuXG5mdW5jdGlvbiBwcmludENoYXJDb2RlKGNvZGUpIHtcbiAgcmV0dXJuICgvLyBOYU4vdW5kZWZpbmVkIHJlcHJlc2VudHMgYWNjZXNzIGJleW9uZCB0aGUgZW5kIG9mIHRoZSBmaWxlLlxuICAgIGlzTmFOKGNvZGUpID8gVG9rZW5LaW5kLkVPRiA6IC8vIFRydXN0IEpTT04gZm9yIEFTQ0lJLlxuICAgIGNvZGUgPCAweDAwN2YgPyBKU09OLnN0cmluZ2lmeShTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpKSA6IC8vIE90aGVyd2lzZSBwcmludCB0aGUgZXNjYXBlZCBmb3JtLlxuICAgIFwiXFxcIlxcXFx1XCIuY29uY2F0KCgnMDAnICsgY29kZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTQpLCBcIlxcXCJcIilcbiAgKTtcbn1cbi8qKlxuICogR2V0cyB0aGUgbmV4dCB0b2tlbiBmcm9tIHRoZSBzb3VyY2Ugc3RhcnRpbmcgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuICpcbiAqIFRoaXMgc2tpcHMgb3ZlciB3aGl0ZXNwYWNlIHVudGlsIGl0IGZpbmRzIHRoZSBuZXh0IGxleGFibGUgdG9rZW4sIHRoZW4gbGV4ZXNcbiAqIHB1bmN0dWF0b3JzIGltbWVkaWF0ZWx5IG9yIGNhbGxzIHRoZSBhcHByb3ByaWF0ZSBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vcmVcbiAqIGNvbXBsaWNhdGVkIHRva2Vucy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRUb2tlbihsZXhlciwgcHJldikge1xuICB2YXIgc291cmNlID0gbGV4ZXIuc291cmNlO1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgYm9keUxlbmd0aCA9IGJvZHkubGVuZ3RoO1xuICB2YXIgcG9zID0gcHJldi5lbmQ7XG5cbiAgd2hpbGUgKHBvcyA8IGJvZHlMZW5ndGgpIHtcbiAgICB2YXIgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3MpO1xuICAgIHZhciBfbGluZSA9IGxleGVyLmxpbmU7XG5cbiAgICB2YXIgX2NvbCA9IDEgKyBwb3MgLSBsZXhlci5saW5lU3RhcnQ7IC8vIFNvdXJjZUNoYXJhY3RlclxuXG5cbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgIGNhc2UgMHhmZWZmOiAvLyA8Qk9NPlxuXG4gICAgICBjYXNlIDk6IC8vICAgXFx0XG5cbiAgICAgIGNhc2UgMzI6IC8vICA8c3BhY2U+XG5cbiAgICAgIGNhc2UgNDQ6XG4gICAgICAgIC8vICAsXG4gICAgICAgICsrcG9zO1xuICAgICAgICBjb250aW51ZTtcblxuICAgICAgY2FzZSAxMDpcbiAgICAgICAgLy8gIFxcblxuICAgICAgICArK3BvcztcbiAgICAgICAgKytsZXhlci5saW5lO1xuICAgICAgICBsZXhlci5saW5lU3RhcnQgPSBwb3M7XG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBjYXNlIDEzOlxuICAgICAgICAvLyAgXFxyXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDEwKSB7XG4gICAgICAgICAgcG9zICs9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKytwb3M7XG4gICAgICAgIH1cblxuICAgICAgICArK2xleGVyLmxpbmU7XG4gICAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvcztcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGNhc2UgMzM6XG4gICAgICAgIC8vICAhXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkJBTkcsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDM1OlxuICAgICAgICAvLyAgI1xuICAgICAgICByZXR1cm4gcmVhZENvbW1lbnQoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzNjpcbiAgICAgICAgLy8gICRcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuRE9MTEFSLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzODpcbiAgICAgICAgLy8gICZcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQU1QLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0MDpcbiAgICAgICAgLy8gIChcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuUEFSRU5fTCwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNDE6XG4gICAgICAgIC8vICApXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlBBUkVOX1IsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDQ2OlxuICAgICAgICAvLyAgLlxuICAgICAgICBpZiAoYm9keS5jaGFyQ29kZUF0KHBvcyArIDEpID09PSA0NiAmJiBib2R5LmNoYXJDb2RlQXQocG9zICsgMikgPT09IDQ2KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuU1BSRUFELCBwb3MsIHBvcyArIDMsIF9saW5lLCBfY29sLCBwcmV2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICAvLyAgOlxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5DT0xPTiwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNjE6XG4gICAgICAgIC8vICA9XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkVRVUFMUywgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgNjQ6XG4gICAgICAgIC8vICBAXG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkFULCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA5MTpcbiAgICAgICAgLy8gIFtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9MLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA5MzpcbiAgICAgICAgLy8gIF1cbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9SLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAxMjM6XG4gICAgICAgIC8vIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuQlJBQ0VfTCwgcG9zLCBwb3MgKyAxLCBfbGluZSwgX2NvbCwgcHJldik7XG5cbiAgICAgIGNhc2UgMTI0OlxuICAgICAgICAvLyB8XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLlBJUEUsIHBvcywgcG9zICsgMSwgX2xpbmUsIF9jb2wsIHByZXYpO1xuXG4gICAgICBjYXNlIDEyNTpcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CUkFDRV9SLCBwb3MsIHBvcyArIDEsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSAzNDpcbiAgICAgICAgLy8gIFwiXG4gICAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3MgKyAyKSA9PT0gMzQpIHtcbiAgICAgICAgICByZXR1cm4gcmVhZEJsb2NrU3RyaW5nKHNvdXJjZSwgcG9zLCBfbGluZSwgX2NvbCwgcHJldiwgbGV4ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlYWRTdHJpbmcoc291cmNlLCBwb3MsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA0NTogLy8gIC1cblxuICAgICAgY2FzZSA0ODogLy8gIDBcblxuICAgICAgY2FzZSA0OTogLy8gIDFcblxuICAgICAgY2FzZSA1MDogLy8gIDJcblxuICAgICAgY2FzZSA1MTogLy8gIDNcblxuICAgICAgY2FzZSA1MjogLy8gIDRcblxuICAgICAgY2FzZSA1MzogLy8gIDVcblxuICAgICAgY2FzZSA1NDogLy8gIDZcblxuICAgICAgY2FzZSA1NTogLy8gIDdcblxuICAgICAgY2FzZSA1NjogLy8gIDhcblxuICAgICAgY2FzZSA1NzpcbiAgICAgICAgLy8gIDlcbiAgICAgICAgcmV0dXJuIHJlYWROdW1iZXIoc291cmNlLCBwb3MsIGNvZGUsIF9saW5lLCBfY29sLCBwcmV2KTtcblxuICAgICAgY2FzZSA2NTogLy8gIEFcblxuICAgICAgY2FzZSA2NjogLy8gIEJcblxuICAgICAgY2FzZSA2NzogLy8gIENcblxuICAgICAgY2FzZSA2ODogLy8gIERcblxuICAgICAgY2FzZSA2OTogLy8gIEVcblxuICAgICAgY2FzZSA3MDogLy8gIEZcblxuICAgICAgY2FzZSA3MTogLy8gIEdcblxuICAgICAgY2FzZSA3MjogLy8gIEhcblxuICAgICAgY2FzZSA3MzogLy8gIElcblxuICAgICAgY2FzZSA3NDogLy8gIEpcblxuICAgICAgY2FzZSA3NTogLy8gIEtcblxuICAgICAgY2FzZSA3NjogLy8gIExcblxuICAgICAgY2FzZSA3NzogLy8gIE1cblxuICAgICAgY2FzZSA3ODogLy8gIE5cblxuICAgICAgY2FzZSA3OTogLy8gIE9cblxuICAgICAgY2FzZSA4MDogLy8gIFBcblxuICAgICAgY2FzZSA4MTogLy8gIFFcblxuICAgICAgY2FzZSA4MjogLy8gIFJcblxuICAgICAgY2FzZSA4MzogLy8gIFNcblxuICAgICAgY2FzZSA4NDogLy8gIFRcblxuICAgICAgY2FzZSA4NTogLy8gIFVcblxuICAgICAgY2FzZSA4NjogLy8gIFZcblxuICAgICAgY2FzZSA4NzogLy8gIFdcblxuICAgICAgY2FzZSA4ODogLy8gIFhcblxuICAgICAgY2FzZSA4OTogLy8gIFlcblxuICAgICAgY2FzZSA5MDogLy8gIFpcblxuICAgICAgY2FzZSA5NTogLy8gIF9cblxuICAgICAgY2FzZSA5NzogLy8gIGFcblxuICAgICAgY2FzZSA5ODogLy8gIGJcblxuICAgICAgY2FzZSA5OTogLy8gIGNcblxuICAgICAgY2FzZSAxMDA6IC8vIGRcblxuICAgICAgY2FzZSAxMDE6IC8vIGVcblxuICAgICAgY2FzZSAxMDI6IC8vIGZcblxuICAgICAgY2FzZSAxMDM6IC8vIGdcblxuICAgICAgY2FzZSAxMDQ6IC8vIGhcblxuICAgICAgY2FzZSAxMDU6IC8vIGlcblxuICAgICAgY2FzZSAxMDY6IC8vIGpcblxuICAgICAgY2FzZSAxMDc6IC8vIGtcblxuICAgICAgY2FzZSAxMDg6IC8vIGxcblxuICAgICAgY2FzZSAxMDk6IC8vIG1cblxuICAgICAgY2FzZSAxMTA6IC8vIG5cblxuICAgICAgY2FzZSAxMTE6IC8vIG9cblxuICAgICAgY2FzZSAxMTI6IC8vIHBcblxuICAgICAgY2FzZSAxMTM6IC8vIHFcblxuICAgICAgY2FzZSAxMTQ6IC8vIHJcblxuICAgICAgY2FzZSAxMTU6IC8vIHNcblxuICAgICAgY2FzZSAxMTY6IC8vIHRcblxuICAgICAgY2FzZSAxMTc6IC8vIHVcblxuICAgICAgY2FzZSAxMTg6IC8vIHZcblxuICAgICAgY2FzZSAxMTk6IC8vIHdcblxuICAgICAgY2FzZSAxMjA6IC8vIHhcblxuICAgICAgY2FzZSAxMjE6IC8vIHlcblxuICAgICAgY2FzZSAxMjI6XG4gICAgICAgIC8vIHpcbiAgICAgICAgcmV0dXJuIHJlYWROYW1lKHNvdXJjZSwgcG9zLCBfbGluZSwgX2NvbCwgcHJldik7XG4gICAgfVxuXG4gICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3MsIHVuZXhwZWN0ZWRDaGFyYWN0ZXJNZXNzYWdlKGNvZGUpKTtcbiAgfVxuXG4gIHZhciBsaW5lID0gbGV4ZXIubGluZTtcbiAgdmFyIGNvbCA9IDEgKyBwb3MgLSBsZXhlci5saW5lU3RhcnQ7XG4gIHJldHVybiBuZXcgVG9rZW4oVG9rZW5LaW5kLkVPRiwgYm9keUxlbmd0aCwgYm9keUxlbmd0aCwgbGluZSwgY29sLCBwcmV2KTtcbn1cbi8qKlxuICogUmVwb3J0IGEgbWVzc2FnZSB0aGF0IGFuIHVuZXhwZWN0ZWQgY2hhcmFjdGVyIHdhcyBlbmNvdW50ZXJlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVuZXhwZWN0ZWRDaGFyYWN0ZXJNZXNzYWdlKGNvZGUpIHtcbiAgaWYgKGNvZGUgPCAweDAwMjAgJiYgY29kZSAhPT0gMHgwMDA5ICYmIGNvZGUgIT09IDB4MDAwYSAmJiBjb2RlICE9PSAweDAwMGQpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgY29udGFpbiB0aGUgaW52YWxpZCBjaGFyYWN0ZXIgXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKTtcbiAgfVxuXG4gIGlmIChjb2RlID09PSAzOSkge1xuICAgIC8vICdcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgc2luZ2xlIHF1b3RlIGNoYXJhY3RlciAoXFwnKSwgZGlkIHlvdSBtZWFuIHRvIHVzZSBhIGRvdWJsZSBxdW90ZSAoXCIpPyc7XG4gIH1cblxuICByZXR1cm4gXCJDYW5ub3QgcGFyc2UgdGhlIHVuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIik7XG59XG4vKipcbiAqIFJlYWRzIGEgY29tbWVudCB0b2tlbiBmcm9tIHRoZSBzb3VyY2UgZmlsZS5cbiAqXG4gKiAjW1xcdTAwMDlcXHUwMDIwLVxcdUZGRkZdKlxuICovXG5cblxuZnVuY3Rpb24gcmVhZENvbW1lbnQoc291cmNlLCBzdGFydCwgbGluZSwgY29sLCBwcmV2KSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBjb2RlO1xuICB2YXIgcG9zaXRpb24gPSBzdGFydDtcblxuICBkbyB7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgfSB3aGlsZSAoIWlzTmFOKGNvZGUpICYmICggLy8gU291cmNlQ2hhcmFjdGVyIGJ1dCBub3QgTGluZVRlcm1pbmF0b3JcbiAgY29kZSA+IDB4MDAxZiB8fCBjb2RlID09PSAweDAwMDkpKTtcblxuICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5DT01NRU5ULCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCArIDEsIHBvc2l0aW9uKSk7XG59XG4vKipcbiAqIFJlYWRzIGEgbnVtYmVyIHRva2VuIGZyb20gdGhlIHNvdXJjZSBmaWxlLCBlaXRoZXIgYSBmbG9hdFxuICogb3IgYW4gaW50IGRlcGVuZGluZyBvbiB3aGV0aGVyIGEgZGVjaW1hbCBwb2ludCBhcHBlYXJzLlxuICpcbiAqIEludDogICAtPygwfFsxLTldWzAtOV0qKVxuICogRmxvYXQ6IC0/KDB8WzEtOV1bMC05XSopKFxcLlswLTldKyk/KChFfGUpKCt8LSk/WzAtOV0rKT9cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWROdW1iZXIoc291cmNlLCBzdGFydCwgZmlyc3RDb2RlLCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGNvZGUgPSBmaXJzdENvZGU7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0O1xuICB2YXIgaXNGbG9hdCA9IGZhbHNlO1xuXG4gIGlmIChjb2RlID09PSA0NSkge1xuICAgIC8vIC1cbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09IDQ4KSB7XG4gICAgLy8gMFxuICAgIGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG5cbiAgICBpZiAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCB1bmV4cGVjdGVkIGRpZ2l0IGFmdGVyIDA6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwb3NpdGlvbiA9IHJlYWREaWdpdHMoc291cmNlLCBwb3NpdGlvbiwgY29kZSk7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNDYpIHtcbiAgICAvLyAuXG4gICAgaXNGbG9hdCA9IHRydWU7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgICBwb3NpdGlvbiA9IHJlYWREaWdpdHMoc291cmNlLCBwb3NpdGlvbiwgY29kZSk7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gNjkgfHwgY29kZSA9PT0gMTAxKSB7XG4gICAgLy8gRSBlXG4gICAgaXNGbG9hdCA9IHRydWU7XG4gICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblxuICAgIGlmIChjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSkge1xuICAgICAgLy8gKyAtXG4gICAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuICAgIH1cblxuICAgIHBvc2l0aW9uID0gcmVhZERpZ2l0cyhzb3VyY2UsIHBvc2l0aW9uLCBjb2RlKTtcbiAgICBjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgfSAvLyBOdW1iZXJzIGNhbm5vdCBiZSBmb2xsb3dlZCBieSAuIG9yIE5hbWVTdGFydFxuXG5cbiAgaWYgKGNvZGUgPT09IDQ2IHx8IGlzTmFtZVN0YXJ0KGNvZGUpKSB7XG4gICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIG51bWJlciwgZXhwZWN0ZWQgZGlnaXQgYnV0IGdvdDogXCIuY29uY2F0KHByaW50Q2hhckNvZGUoY29kZSksIFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFRva2VuKGlzRmxvYXQgPyBUb2tlbktpbmQuRkxPQVQgOiBUb2tlbktpbmQuSU5ULCBzdGFydCwgcG9zaXRpb24sIGxpbmUsIGNvbCwgcHJldiwgYm9keS5zbGljZShzdGFydCwgcG9zaXRpb24pKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmV3IHBvc2l0aW9uIGluIHRoZSBzb3VyY2UgYWZ0ZXIgcmVhZGluZyBkaWdpdHMuXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkRGlnaXRzKHNvdXJjZSwgc3RhcnQsIGZpcnN0Q29kZSkge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgcG9zaXRpb24gPSBzdGFydDtcbiAgdmFyIGNvZGUgPSBmaXJzdENvZGU7XG5cbiAgaWYgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1Nykge1xuICAgIC8vIDAgLSA5XG4gICAgZG8ge1xuICAgICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcbiAgICB9IHdoaWxlIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpOyAvLyAwIC0gOVxuXG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgbnVtYmVyLCBleHBlY3RlZCBkaWdpdCBidXQgZ290OiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbn1cbi8qKlxuICogUmVhZHMgYSBzdHJpbmcgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUuXG4gKlxuICogXCIoW15cIlxcXFxcXHUwMDBBXFx1MDAwRF18KFxcXFwodVswLTlhLWZBLUZdezR9fFtcIlxcXFwvYmZucnRdKSkpKlwiXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkU3RyaW5nKHNvdXJjZSwgc3RhcnQsIGxpbmUsIGNvbCwgcHJldikge1xuICB2YXIgYm9keSA9IHNvdXJjZS5ib2R5O1xuICB2YXIgcG9zaXRpb24gPSBzdGFydCArIDE7XG4gIHZhciBjaHVua1N0YXJ0ID0gcG9zaXRpb247XG4gIHZhciBjb2RlID0gMDtcbiAgdmFyIHZhbHVlID0gJyc7XG5cbiAgd2hpbGUgKHBvc2l0aW9uIDwgYm9keS5sZW5ndGggJiYgIWlzTmFOKGNvZGUgPSBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24pKSAmJiAvLyBub3QgTGluZVRlcm1pbmF0b3JcbiAgY29kZSAhPT0gMHgwMDBhICYmIGNvZGUgIT09IDB4MDAwZCkge1xuICAgIC8vIENsb3NpbmcgUXVvdGUgKFwiKVxuICAgIGlmIChjb2RlID09PSAzNCkge1xuICAgICAgdmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5TVFJJTkcsIHN0YXJ0LCBwb3NpdGlvbiArIDEsIGxpbmUsIGNvbCwgcHJldiwgdmFsdWUpO1xuICAgIH0gLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIGlmIChjb2RlIDwgMHgwMDIwICYmIGNvZGUgIT09IDB4MDAwOSkge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciB3aXRoaW4gU3RyaW5nOiBcIi5jb25jYXQocHJpbnRDaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgICB9XG5cbiAgICArK3Bvc2l0aW9uO1xuXG4gICAgaWYgKGNvZGUgPT09IDkyKSB7XG4gICAgICAvLyBcXFxuICAgICAgdmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbiAtIDEpO1xuICAgICAgY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbik7XG5cbiAgICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgIHZhbHVlICs9ICdcIic7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICB2YWx1ZSArPSAnLyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA5MjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxcXCc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxiJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxmJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExMDpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxuJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNDpcbiAgICAgICAgICB2YWx1ZSArPSAnXFxyJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNjpcbiAgICAgICAgICB2YWx1ZSArPSAnXFx0JztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDExNzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyB1WFhYWFxuICAgICAgICAgICAgdmFyIGNoYXJDb2RlID0gdW5pQ2hhckNvZGUoYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSksIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpLCBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAzKSwgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgNCkpO1xuXG4gICAgICAgICAgICBpZiAoY2hhckNvZGUgPCAwKSB7XG4gICAgICAgICAgICAgIHZhciBpbnZhbGlkU2VxdWVuY2UgPSBib2R5LnNsaWNlKHBvc2l0aW9uICsgMSwgcG9zaXRpb24gKyA1KTtcbiAgICAgICAgICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciBlc2NhcGUgc2VxdWVuY2U6IFxcXFx1XCIuY29uY2F0KGludmFsaWRTZXF1ZW5jZSwgXCIuXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgc3ludGF4RXJyb3Ioc291cmNlLCBwb3NpdGlvbiwgXCJJbnZhbGlkIGNoYXJhY3RlciBlc2NhcGUgc2VxdWVuY2U6IFxcXFxcIi5jb25jYXQoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSwgXCIuXCIpKTtcbiAgICAgIH1cblxuICAgICAgKytwb3NpdGlvbjtcbiAgICAgIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCAnVW50ZXJtaW5hdGVkIHN0cmluZy4nKTtcbn1cbi8qKlxuICogUmVhZHMgYSBibG9jayBzdHJpbmcgdG9rZW4gZnJvbSB0aGUgc291cmNlIGZpbGUuXG4gKlxuICogXCJcIlwiKFwiP1wiPyhcXFxcXCJcIlwifFxcXFwoPyE9XCJcIlwiKXxbXlwiXFxcXF0pKSpcIlwiXCJcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlYWRCbG9ja1N0cmluZyhzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYsIGxleGVyKSB7XG4gIHZhciBib2R5ID0gc291cmNlLmJvZHk7XG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0ICsgMztcbiAgdmFyIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgdmFyIGNvZGUgPSAwO1xuICB2YXIgcmF3VmFsdWUgPSAnJztcblxuICB3aGlsZSAocG9zaXRpb24gPCBib2R5Lmxlbmd0aCAmJiAhaXNOYU4oY29kZSA9IGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbikpKSB7XG4gICAgLy8gQ2xvc2luZyBUcmlwbGUtUXVvdGUgKFwiXCJcIilcbiAgICBpZiAoY29kZSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkgPT09IDM0ICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDIpID09PSAzNCkge1xuICAgICAgcmF3VmFsdWUgKz0gYm9keS5zbGljZShjaHVua1N0YXJ0LCBwb3NpdGlvbik7XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFRva2VuS2luZC5CTE9DS19TVFJJTkcsIHN0YXJ0LCBwb3NpdGlvbiArIDMsIGxpbmUsIGNvbCwgcHJldiwgZGVkZW50QmxvY2tTdHJpbmdWYWx1ZShyYXdWYWx1ZSkpO1xuICAgIH0gLy8gU291cmNlQ2hhcmFjdGVyXG5cblxuICAgIGlmIChjb2RlIDwgMHgwMDIwICYmIGNvZGUgIT09IDB4MDAwOSAmJiBjb2RlICE9PSAweDAwMGEgJiYgY29kZSAhPT0gMHgwMDBkKSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCBcIkludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6IFwiLmNvbmNhdChwcmludENoYXJDb2RlKGNvZGUpLCBcIi5cIikpO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAxMCkge1xuICAgICAgLy8gbmV3IGxpbmVcbiAgICAgICsrcG9zaXRpb247XG4gICAgICArK2xleGVyLmxpbmU7XG4gICAgICBsZXhlci5saW5lU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDEzKSB7XG4gICAgICAvLyBjYXJyaWFnZSByZXR1cm5cbiAgICAgIGlmIChib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSA9PT0gMTApIHtcbiAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICsrcG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgICsrbGV4ZXIubGluZTtcbiAgICAgIGxleGVyLmxpbmVTdGFydCA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAoIC8vIEVzY2FwZSBUcmlwbGUtUXVvdGUgKFxcXCJcIlwiKVxuICAgIGNvZGUgPT09IDkyICYmIGJvZHkuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpID09PSAzNCAmJiBib2R5LmNoYXJDb2RlQXQocG9zaXRpb24gKyAyKSA9PT0gMzQgJiYgYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMykgPT09IDM0KSB7XG4gICAgICByYXdWYWx1ZSArPSBib2R5LnNsaWNlKGNodW5rU3RhcnQsIHBvc2l0aW9uKSArICdcIlwiXCInO1xuICAgICAgcG9zaXRpb24gKz0gNDtcbiAgICAgIGNodW5rU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgKytwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBzeW50YXhFcnJvcihzb3VyY2UsIHBvc2l0aW9uLCAnVW50ZXJtaW5hdGVkIHN0cmluZy4nKTtcbn1cbi8qKlxuICogQ29udmVydHMgZm91ciBoZXhhZGVjaW1hbCBjaGFycyB0byB0aGUgaW50ZWdlciB0aGF0IHRoZVxuICogc3RyaW5nIHJlcHJlc2VudHMuIEZvciBleGFtcGxlLCB1bmlDaGFyQ29kZSgnMCcsJzAnLCcwJywnZicpXG4gKiB3aWxsIHJldHVybiAxNSwgYW5kIHVuaUNoYXJDb2RlKCcwJywnMCcsJ2YnLCdmJykgcmV0dXJucyAyNTUuXG4gKlxuICogUmV0dXJucyBhIG5lZ2F0aXZlIG51bWJlciBvbiBlcnJvciwgaWYgYSBjaGFyIHdhcyBpbnZhbGlkLlxuICpcbiAqIFRoaXMgaXMgaW1wbGVtZW50ZWQgYnkgbm90aW5nIHRoYXQgY2hhcjJoZXgoKSByZXR1cm5zIC0xIG9uIGVycm9yLFxuICogd2hpY2ggbWVhbnMgdGhlIHJlc3VsdCBvZiBPUmluZyB0aGUgY2hhcjJoZXgoKSB3aWxsIGFsc28gYmUgbmVnYXRpdmUuXG4gKi9cblxuXG5mdW5jdGlvbiB1bmlDaGFyQ29kZShhLCBiLCBjLCBkKSB7XG4gIHJldHVybiBjaGFyMmhleChhKSA8PCAxMiB8IGNoYXIyaGV4KGIpIDw8IDggfCBjaGFyMmhleChjKSA8PCA0IHwgY2hhcjJoZXgoZCk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgaGV4IGNoYXJhY3RlciB0byBpdHMgaW50ZWdlciB2YWx1ZS5cbiAqICcwJyBiZWNvbWVzIDAsICc5JyBiZWNvbWVzIDlcbiAqICdBJyBiZWNvbWVzIDEwLCAnRicgYmVjb21lcyAxNVxuICogJ2EnIGJlY29tZXMgMTAsICdmJyBiZWNvbWVzIDE1XG4gKlxuICogUmV0dXJucyAtMSBvbiBlcnJvci5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNoYXIyaGV4KGEpIHtcbiAgcmV0dXJuIGEgPj0gNDggJiYgYSA8PSA1NyA/IGEgLSA0OCAvLyAwLTlcbiAgOiBhID49IDY1ICYmIGEgPD0gNzAgPyBhIC0gNTUgLy8gQS1GXG4gIDogYSA+PSA5NyAmJiBhIDw9IDEwMiA/IGEgLSA4NyAvLyBhLWZcbiAgOiAtMTtcbn1cbi8qKlxuICogUmVhZHMgYW4gYWxwaGFudW1lcmljICsgdW5kZXJzY29yZSBuYW1lIGZyb20gdGhlIHNvdXJjZS5cbiAqXG4gKiBbX0EtWmEtel1bXzAtOUEtWmEtel0qXG4gKi9cblxuXG5mdW5jdGlvbiByZWFkTmFtZShzb3VyY2UsIHN0YXJ0LCBsaW5lLCBjb2wsIHByZXYpIHtcbiAgdmFyIGJvZHkgPSBzb3VyY2UuYm9keTtcbiAgdmFyIGJvZHlMZW5ndGggPSBib2R5Lmxlbmd0aDtcbiAgdmFyIHBvc2l0aW9uID0gc3RhcnQgKyAxO1xuICB2YXIgY29kZSA9IDA7XG5cbiAgd2hpbGUgKHBvc2l0aW9uICE9PSBib2R5TGVuZ3RoICYmICFpc05hTihjb2RlID0gYm9keS5jaGFyQ29kZUF0KHBvc2l0aW9uKSkgJiYgKGNvZGUgPT09IDk1IHx8IC8vIF9cbiAgY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3IHx8IC8vIDAtOVxuICBjb2RlID49IDY1ICYmIGNvZGUgPD0gOTAgfHwgLy8gQS1aXG4gIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIC8vIGEtelxuICApIHtcbiAgICArK3Bvc2l0aW9uO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbktpbmQuTkFNRSwgc3RhcnQsIHBvc2l0aW9uLCBsaW5lLCBjb2wsIHByZXYsIGJvZHkuc2xpY2Uoc3RhcnQsIHBvc2l0aW9uKSk7XG59IC8vIF8gQS1aIGEtelxuXG5cbmZ1bmN0aW9uIGlzTmFtZVN0YXJ0KGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPT09IDk1IHx8IGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCB8fCBjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyO1xufVxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgbG9jYXRpb24gaW4gYSBTb3VyY2UuXG4gKi9cblxuLyoqXG4gKiBUYWtlcyBhIFNvdXJjZSBhbmQgYSBVVEYtOCBjaGFyYWN0ZXIgb2Zmc2V0LCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICogbGluZSBhbmQgY29sdW1uIGFzIGEgU291cmNlTG9jYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbihzb3VyY2UsIHBvc2l0aW9uKSB7XG4gIHZhciBsaW5lUmVnZXhwID0gL1xcclxcbnxbXFxuXFxyXS9nO1xuICB2YXIgbGluZSA9IDE7XG4gIHZhciBjb2x1bW4gPSBwb3NpdGlvbiArIDE7XG4gIHZhciBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gbGluZVJlZ2V4cC5leGVjKHNvdXJjZS5ib2R5KSkgJiYgbWF0Y2guaW5kZXggPCBwb3NpdGlvbikge1xuICAgIGxpbmUgKz0gMTtcbiAgICBjb2x1bW4gPSBwb3NpdGlvbiArIDEgLSAobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaW5lOiBsaW5lLFxuICAgIGNvbHVtbjogY29sdW1uXG4gIH07XG59XG4iLCJpbXBvcnQgeyBzeW50YXhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9zeW50YXhFcnJvci5tanNcIjtcbmltcG9ydCB7IEtpbmQgfSBmcm9tIFwiLi9raW5kcy5tanNcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuaW1wb3J0IHsgVG9rZW5LaW5kIH0gZnJvbSBcIi4vdG9rZW5LaW5kLm1qc1wiO1xuaW1wb3J0IHsgU291cmNlLCBpc1NvdXJjZSB9IGZyb20gXCIuL3NvdXJjZS5tanNcIjtcbmltcG9ydCB7IERpcmVjdGl2ZUxvY2F0aW9uIH0gZnJvbSBcIi4vZGlyZWN0aXZlTG9jYXRpb24ubWpzXCI7XG5pbXBvcnQgeyBMZXhlciwgaXNQdW5jdHVhdG9yVG9rZW5LaW5kIH0gZnJvbSBcIi4vbGV4ZXIubWpzXCI7XG4vKipcbiAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byBjb250cm9sIHBhcnNlciBiZWhhdmlvclxuICovXG5cbi8qKlxuICogR2l2ZW4gYSBHcmFwaFFMIHNvdXJjZSwgcGFyc2VzIGl0IGludG8gYSBEb2N1bWVudC5cbiAqIFRocm93cyBHcmFwaFFMRXJyb3IgaWYgYSBzeW50YXggZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIoc291cmNlLCBvcHRpb25zKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZURvY3VtZW50KCk7XG59XG4vKipcbiAqIEdpdmVuIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBHcmFwaFFMIHZhbHVlIChleC4gYFs0Ml1gKSwgcGFyc2UgdGhlIEFTVCBmb3JcbiAqIHRoYXQgdmFsdWUuXG4gKiBUaHJvd3MgR3JhcGhRTEVycm9yIGlmIGEgc3ludGF4IGVycm9yIGlzIGVuY291bnRlcmVkLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIHdpdGhpbiB0b29scyB0aGF0IG9wZXJhdGUgdXBvbiBHcmFwaFFMIFZhbHVlcyBkaXJlY3RseSBhbmRcbiAqIGluIGlzb2xhdGlvbiBvZiBjb21wbGV0ZSBHcmFwaFFMIGRvY3VtZW50cy5cbiAqXG4gKiBDb25zaWRlciBwcm92aWRpbmcgdGhlIHJlc3VsdHMgdG8gdGhlIHV0aWxpdHkgZnVuY3Rpb246IHZhbHVlRnJvbUFTVCgpLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVZhbHVlKHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihzb3VyY2UsIG9wdGlvbnMpO1xuICBwYXJzZXIuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLlNPRik7XG4gIHZhciB2YWx1ZSA9IHBhcnNlci5wYXJzZVZhbHVlTGl0ZXJhbChmYWxzZSk7XG4gIHBhcnNlci5leHBlY3RUb2tlbihUb2tlbktpbmQuRU9GKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBHaXZlbiBhIHN0cmluZyBjb250YWluaW5nIGEgR3JhcGhRTCBUeXBlIChleC4gYFtJbnQhXWApLCBwYXJzZSB0aGUgQVNUIGZvclxuICogdGhhdCB0eXBlLlxuICogVGhyb3dzIEdyYXBoUUxFcnJvciBpZiBhIHN5bnRheCBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCB3aXRoaW4gdG9vbHMgdGhhdCBvcGVyYXRlIHVwb24gR3JhcGhRTCBUeXBlcyBkaXJlY3RseSBhbmRcbiAqIGluIGlzb2xhdGlvbiBvZiBjb21wbGV0ZSBHcmFwaFFMIGRvY3VtZW50cy5cbiAqXG4gKiBDb25zaWRlciBwcm92aWRpbmcgdGhlIHJlc3VsdHMgdG8gdGhlIHV0aWxpdHkgZnVuY3Rpb246IHR5cGVGcm9tQVNUKCkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHlwZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIoc291cmNlLCBvcHRpb25zKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5TT0YpO1xuICB2YXIgdHlwZSA9IHBhcnNlci5wYXJzZVR5cGVSZWZlcmVuY2UoKTtcbiAgcGFyc2VyLmV4cGVjdFRva2VuKFRva2VuS2luZC5FT0YpO1xuICByZXR1cm4gdHlwZTtcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBleHBvcnRlZCBvbmx5IHRvIGFzc2lzdCBwZW9wbGUgaW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biBwYXJzZXJzXG4gKiB3aXRob3V0IGR1cGxpY2F0aW5nIHRvbyBtdWNoIGNvZGUgYW5kIHNob3VsZCBiZSB1c2VkIG9ubHkgYXMgbGFzdCByZXNvcnQgZm9yIGNhc2VzXG4gKiBzdWNoIGFzIGV4cGVyaW1lbnRhbCBzeW50YXggb3IgaWYgY2VydGFpbiBmZWF0dXJlcyBjb3VsZCBub3QgYmUgY29udHJpYnV0ZWQgdXBzdHJlYW0uXG4gKlxuICogSXQgaXMgc3RpbGwgcGFydCBvZiB0aGUgaW50ZXJuYWwgQVBJIGFuZCBpcyB2ZXJzaW9uZWQsIHNvIGFueSBjaGFuZ2VzIHRvIGl0IGFyZSBuZXZlclxuICogY29uc2lkZXJlZCBicmVha2luZyBjaGFuZ2VzLiBJZiB5b3Ugc3RpbGwgbmVlZCB0byBzdXBwb3J0IG11bHRpcGxlIHZlcnNpb25zIG9mIHRoZVxuICogbGlicmFyeSwgcGxlYXNlIHVzZSB0aGUgYHZlcnNpb25JbmZvYCB2YXJpYWJsZSBmb3IgdmVyc2lvbiBkZXRlY3Rpb24uXG4gKlxuICogQGludGVybmFsXG4gKi9cblxuZXhwb3J0IHZhciBQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJzZXIoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIHNvdXJjZU9iaiA9IGlzU291cmNlKHNvdXJjZSkgPyBzb3VyY2UgOiBuZXcgU291cmNlKHNvdXJjZSk7XG4gICAgdGhpcy5fbGV4ZXIgPSBuZXcgTGV4ZXIoc291cmNlT2JqKTtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogQ29udmVydHMgYSBuYW1lIGxleCB0b2tlbiBpbnRvIGEgbmFtZSBwYXJzZSBub2RlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBQYXJzZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5wYXJzZU5hbWUgPSBmdW5jdGlvbiBwYXJzZU5hbWUoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuTkFNRSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTkFNRSxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBEb2N1bWVudCBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBEb2N1bWVudCA6IERlZmluaXRpb24rXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRG9jdW1lbnQgPSBmdW5jdGlvbiBwYXJzZURvY3VtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkRPQ1VNRU5ULFxuICAgICAgZGVmaW5pdGlvbnM6IHRoaXMubWFueShUb2tlbktpbmQuU09GLCB0aGlzLnBhcnNlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkVPRiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERlZmluaXRpb24gOlxuICAgKiAgIC0gRXhlY3V0YWJsZURlZmluaXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1EZWZpbml0aW9uXG4gICAqICAgLSBUeXBlU3lzdGVtRXh0ZW5zaW9uXG4gICAqXG4gICAqIEV4ZWN1dGFibGVEZWZpbml0aW9uIDpcbiAgICogICAtIE9wZXJhdGlvbkRlZmluaXRpb25cbiAgICogICAtIEZyYWdtZW50RGVmaW5pdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZURlZmluaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5fbGV4ZXIudG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAncXVlcnknOlxuICAgICAgICBjYXNlICdtdXRhdGlvbic6XG4gICAgICAgIGNhc2UgJ3N1YnNjcmlwdGlvbic6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VPcGVyYXRpb25EZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZnJhZ21lbnQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRnJhZ21lbnREZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgY2FzZSAnc2NhbGFyJzpcbiAgICAgICAgY2FzZSAndHlwZSc6XG4gICAgICAgIGNhc2UgJ2ludGVyZmFjZSc6XG4gICAgICAgIGNhc2UgJ3VuaW9uJzpcbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgY2FzZSAnZGlyZWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1EZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZXh0ZW5kJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuQlJBQ0VfTCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrRGVzY3JpcHRpb24oKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbigpO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIE9wZXJhdGlvbnMgc2VjdGlvbi5cblxuICAvKipcbiAgICogT3BlcmF0aW9uRGVmaW5pdGlvbiA6XG4gICAqICAtIFNlbGVjdGlvblNldFxuICAgKiAgLSBPcGVyYXRpb25UeXBlIE5hbWU/IFZhcmlhYmxlRGVmaW5pdGlvbnM/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvbkRlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZU9wZXJhdGlvbkRlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5PUEVSQVRJT05fREVGSU5JVElPTixcbiAgICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgIHZhcmlhYmxlRGVmaW5pdGlvbnM6IFtdLFxuICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBvcGVyYXRpb24gPSB0aGlzLnBhcnNlT3BlcmF0aW9uVHlwZSgpO1xuICAgIHZhciBuYW1lO1xuXG4gICAgaWYgKHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpIHtcbiAgICAgIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9ERUZJTklUSU9OLFxuICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbnMoKSxcbiAgICAgIGRpcmVjdGl2ZXM6IHRoaXMucGFyc2VEaXJlY3RpdmVzKGZhbHNlKSxcbiAgICAgIHNlbGVjdGlvblNldDogdGhpcy5wYXJzZVNlbGVjdGlvblNldCgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPcGVyYXRpb25UeXBlIDogb25lIG9mIHF1ZXJ5IG11dGF0aW9uIHN1YnNjcmlwdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9wZXJhdGlvblR5cGUgPSBmdW5jdGlvbiBwYXJzZU9wZXJhdGlvblR5cGUoKSB7XG4gICAgdmFyIG9wZXJhdGlvblRva2VuID0gdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuTkFNRSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdGlvblRva2VuLnZhbHVlKSB7XG4gICAgICBjYXNlICdxdWVyeSc6XG4gICAgICAgIHJldHVybiAncXVlcnknO1xuXG4gICAgICBjYXNlICdtdXRhdGlvbic6XG4gICAgICAgIHJldHVybiAnbXV0YXRpb24nO1xuXG4gICAgICBjYXNlICdzdWJzY3JpcHRpb24nOlxuICAgICAgICByZXR1cm4gJ3N1YnNjcmlwdGlvbic7XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKG9wZXJhdGlvblRva2VuKTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGVEZWZpbml0aW9ucyA6ICggVmFyaWFibGVEZWZpbml0aW9uKyApXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucyA9IGZ1bmN0aW9uIHBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLlBBUkVOX0wsIHRoaXMucGFyc2VWYXJpYWJsZURlZmluaXRpb24sIFRva2VuS2luZC5QQVJFTl9SKTtcbiAgfVxuICAvKipcbiAgICogVmFyaWFibGVEZWZpbml0aW9uIDogVmFyaWFibGUgOiBUeXBlIERlZmF1bHRWYWx1ZT8gRGlyZWN0aXZlc1tDb25zdF0/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VWYXJpYWJsZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuVkFSSUFCTEVfREVGSU5JVElPTixcbiAgICAgIHZhcmlhYmxlOiB0aGlzLnBhcnNlVmFyaWFibGUoKSxcbiAgICAgIHR5cGU6ICh0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTiksIHRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCkpLFxuICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkVRVUFMUykgPyB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKHRydWUpIDogdW5kZWZpbmVkLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFZhcmlhYmxlIDogJCBOYW1lXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVmFyaWFibGUgPSBmdW5jdGlvbiBwYXJzZVZhcmlhYmxlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkRPTExBUik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuVkFSSUFCTEUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBTZWxlY3Rpb25TZXQgOiB7IFNlbGVjdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNlbGVjdGlvblNldCA9IGZ1bmN0aW9uIHBhcnNlU2VsZWN0aW9uU2V0KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNFTEVDVElPTl9TRVQsXG4gICAgICBzZWxlY3Rpb25zOiB0aGlzLm1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VTZWxlY3Rpb24sIFRva2VuS2luZC5CUkFDRV9SKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2VsZWN0aW9uIDpcbiAgICogICAtIEZpZWxkXG4gICAqICAgLSBGcmFnbWVudFNwcmVhZFxuICAgKiAgIC0gSW5saW5lRnJhZ21lbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTZWxlY3Rpb24gPSBmdW5jdGlvbiBwYXJzZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrKFRva2VuS2luZC5TUFJFQUQpID8gdGhpcy5wYXJzZUZyYWdtZW50KCkgOiB0aGlzLnBhcnNlRmllbGQoKTtcbiAgfVxuICAvKipcbiAgICogRmllbGQgOiBBbGlhcz8gTmFtZSBBcmd1bWVudHM/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldD9cbiAgICpcbiAgICogQWxpYXMgOiBOYW1lIDpcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZCA9IGZ1bmN0aW9uIHBhcnNlRmllbGQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWVPckFsaWFzID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgYWxpYXM7XG4gICAgdmFyIG5hbWU7XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5DT0xPTikpIHtcbiAgICAgIGFsaWFzID0gbmFtZU9yQWxpYXM7XG4gICAgICBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWVPckFsaWFzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkZJRUxELFxuICAgICAgYWxpYXM6IGFsaWFzLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGFyZ3VtZW50czogdGhpcy5wYXJzZUFyZ3VtZW50cyhmYWxzZSksXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGVlayhUb2tlbktpbmQuQlJBQ0VfTCkgPyB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCkgOiB1bmRlZmluZWQsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50c1tDb25zdF0gOiAoIEFyZ3VtZW50Wz9Db25zdF0rIClcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VBcmd1bWVudHMgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhpc0NvbnN0KSB7XG4gICAgdmFyIGl0ZW0gPSBpc0NvbnN0ID8gdGhpcy5wYXJzZUNvbnN0QXJndW1lbnQgOiB0aGlzLnBhcnNlQXJndW1lbnQ7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5QQVJFTl9MLCBpdGVtLCBUb2tlbktpbmQuUEFSRU5fUik7XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50W0NvbnN0XSA6IE5hbWUgOiBWYWx1ZVs/Q29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlQXJndW1lbnQgPSBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50KCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuQVJHVU1FTlQsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdmFsdWU6IHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwoZmFsc2UpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5wYXJzZUNvbnN0QXJndW1lbnQgPSBmdW5jdGlvbiBwYXJzZUNvbnN0QXJndW1lbnQoKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuQVJHVU1FTlQsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgdmFsdWU6ICh0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTiksIHRoaXMucGFyc2VWYWx1ZUxpdGVyYWwodHJ1ZSkpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIEZyYWdtZW50cyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBDb3JyZXNwb25kcyB0byBib3RoIEZyYWdtZW50U3ByZWFkIGFuZCBJbmxpbmVGcmFnbWVudCBpbiB0aGUgc3BlYy5cbiAgICpcbiAgICogRnJhZ21lbnRTcHJlYWQgOiAuLi4gRnJhZ21lbnROYW1lIERpcmVjdGl2ZXM/XG4gICAqXG4gICAqIElubGluZUZyYWdtZW50IDogLi4uIFR5cGVDb25kaXRpb24/IERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50ID0gZnVuY3Rpb24gcGFyc2VGcmFnbWVudCgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5TUFJFQUQpO1xuICAgIHZhciBoYXNUeXBlQ29uZGl0aW9uID0gdGhpcy5leHBlY3RPcHRpb25hbEtleXdvcmQoJ29uJyk7XG5cbiAgICBpZiAoIWhhc1R5cGVDb25kaXRpb24gJiYgdGhpcy5wZWVrKFRva2VuS2luZC5OQU1FKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5GUkFHTUVOVF9TUFJFQUQsXG4gICAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTkxJTkVfRlJBR01FTlQsXG4gICAgICB0eXBlQ29uZGl0aW9uOiBoYXNUeXBlQ29uZGl0aW9uID8gdGhpcy5wYXJzZU5hbWVkVHlwZSgpIDogdW5kZWZpbmVkLFxuICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgc2VsZWN0aW9uU2V0OiB0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEZyYWdtZW50RGVmaW5pdGlvbiA6XG4gICAqICAgLSBmcmFnbWVudCBGcmFnbWVudE5hbWUgb24gVHlwZUNvbmRpdGlvbiBEaXJlY3RpdmVzPyBTZWxlY3Rpb25TZXRcbiAgICpcbiAgICogVHlwZUNvbmRpdGlvbiA6IE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUZyYWdtZW50RGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRnJhZ21lbnREZWZpbml0aW9uKCkge1xuICAgIHZhciBfdGhpcyRfb3B0aW9ucztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZnJhZ21lbnQnKTsgLy8gRXhwZXJpbWVudGFsIHN1cHBvcnQgZm9yIGRlZmluaW5nIHZhcmlhYmxlcyB3aXRoaW4gZnJhZ21lbnRzIGNoYW5nZXNcbiAgICAvLyB0aGUgZ3JhbW1hciBvZiBGcmFnbWVudERlZmluaXRpb246XG4gICAgLy8gICAtIGZyYWdtZW50IEZyYWdtZW50TmFtZSBWYXJpYWJsZURlZmluaXRpb25zPyBvbiBUeXBlQ29uZGl0aW9uIERpcmVjdGl2ZXM/IFNlbGVjdGlvblNldFxuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRfb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkX29wdGlvbnMuZXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiBLaW5kLkZSQUdNRU5UX0RFRklOSVRJT04sXG4gICAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9uczogdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbnMoKSxcbiAgICAgICAgdHlwZUNvbmRpdGlvbjogKHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKSwgdGhpcy5wYXJzZU5hbWVkVHlwZSgpKSxcbiAgICAgICAgZGlyZWN0aXZlczogdGhpcy5wYXJzZURpcmVjdGl2ZXMoZmFsc2UpLFxuICAgICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRlJBR01FTlRfREVGSU5JVElPTixcbiAgICAgIG5hbWU6IHRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSxcbiAgICAgIHR5cGVDb25kaXRpb246ICh0aGlzLmV4cGVjdEtleXdvcmQoJ29uJyksIHRoaXMucGFyc2VOYW1lZFR5cGUoKSksXG4gICAgICBkaXJlY3RpdmVzOiB0aGlzLnBhcnNlRGlyZWN0aXZlcyhmYWxzZSksXG4gICAgICBzZWxlY3Rpb25TZXQ6IHRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRnJhZ21lbnROYW1lIDogTmFtZSBidXQgbm90IGBvbmBcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGcmFnbWVudE5hbWUgPSBmdW5jdGlvbiBwYXJzZUZyYWdtZW50TmFtZSgpIHtcbiAgICBpZiAodGhpcy5fbGV4ZXIudG9rZW4udmFsdWUgPT09ICdvbicpIHtcbiAgICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhcnNlTmFtZSgpO1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFZhbHVlcyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBWYWx1ZVtDb25zdF0gOlxuICAgKiAgIC0gW35Db25zdF0gVmFyaWFibGVcbiAgICogICAtIEludFZhbHVlXG4gICAqICAgLSBGbG9hdFZhbHVlXG4gICAqICAgLSBTdHJpbmdWYWx1ZVxuICAgKiAgIC0gQm9vbGVhblZhbHVlXG4gICAqICAgLSBOdWxsVmFsdWVcbiAgICogICAtIEVudW1WYWx1ZVxuICAgKiAgIC0gTGlzdFZhbHVlWz9Db25zdF1cbiAgICogICAtIE9iamVjdFZhbHVlWz9Db25zdF1cbiAgICpcbiAgICogQm9vbGVhblZhbHVlIDogb25lIG9mIGB0cnVlYCBgZmFsc2VgXG4gICAqXG4gICAqIE51bGxWYWx1ZSA6IGBudWxsYFxuICAgKlxuICAgKiBFbnVtVmFsdWUgOiBOYW1lIGJ1dCBub3QgYHRydWVgLCBgZmFsc2VgIG9yIGBudWxsYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVZhbHVlTGl0ZXJhbCA9IGZ1bmN0aW9uIHBhcnNlVmFsdWVMaXRlcmFsKGlzQ29uc3QpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHN3aXRjaCAodG9rZW4ua2luZCkge1xuICAgICAgY2FzZSBUb2tlbktpbmQuQlJBQ0tFVF9MOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUxpc3QoaXNDb25zdCk7XG5cbiAgICAgIGNhc2UgVG9rZW5LaW5kLkJSQUNFX0w6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0KGlzQ29uc3QpO1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5JTlQ6XG4gICAgICAgIHRoaXMuX2xleGVyLmFkdmFuY2UoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6IEtpbmQuSU5ULFxuICAgICAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIFRva2VuS2luZC5GTE9BVDpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogS2luZC5GTE9BVCxcbiAgICAgICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICAgICAgbG9jOiB0aGlzLmxvYyh0b2tlbilcbiAgICAgICAgfTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuU1RSSU5HOlxuICAgICAgY2FzZSBUb2tlbktpbmQuQkxPQ0tfU1RSSU5HOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZ0xpdGVyYWwoKTtcblxuICAgICAgY2FzZSBUb2tlbktpbmQuTkFNRTpcbiAgICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodG9rZW4udmFsdWUpIHtcbiAgICAgICAgICBjYXNlICd0cnVlJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuQk9PTEVBTixcbiAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2luZDogS2luZC5CT09MRUFOLFxuICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FzZSAnbnVsbCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBraW5kOiBLaW5kLk5VTEwsXG4gICAgICAgICAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IEtpbmQuRU5VTSxcbiAgICAgICAgICAgICAgdmFsdWU6IHRva2VuLnZhbHVlLFxuICAgICAgICAgICAgICBsb2M6IHRoaXMubG9jKHRva2VuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFRva2VuS2luZC5ET0xMQVI6XG4gICAgICAgIGlmICghaXNDb25zdCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVmFyaWFibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZCgpO1xuICB9O1xuXG4gIF9wcm90by5wYXJzZVN0cmluZ0xpdGVyYWwgPSBmdW5jdGlvbiBwYXJzZVN0cmluZ0xpdGVyYWwoKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TVFJJTkcsXG4gICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgICBibG9jazogdG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLkJMT0NLX1NUUklORyxcbiAgICAgIGxvYzogdGhpcy5sb2ModG9rZW4pXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogTGlzdFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSBbIF1cbiAgICogICAtIFsgVmFsdWVbP0NvbnN0XSsgXVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUxpc3QgPSBmdW5jdGlvbiBwYXJzZUxpc3QoaXNDb25zdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIHZhciBpdGVtID0gZnVuY3Rpb24gaXRlbSgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChpc0NvbnN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuTElTVCxcbiAgICAgIHZhbHVlczogdGhpcy5hbnkoVG9rZW5LaW5kLkJSQUNLRVRfTCwgaXRlbSwgVG9rZW5LaW5kLkJSQUNLRVRfUiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdFZhbHVlW0NvbnN0XSA6XG4gICAqICAgLSB7IH1cbiAgICogICAtIHsgT2JqZWN0RmllbGRbP0NvbnN0XSsgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0KGlzQ29uc3QpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgdmFyIGl0ZW0gPSBmdW5jdGlvbiBpdGVtKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wYXJzZU9iamVjdEZpZWxkKGlzQ29uc3QpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5PQkpFQ1QsXG4gICAgICBmaWVsZHM6IHRoaXMuYW55KFRva2VuS2luZC5CUkFDRV9MLCBpdGVtLCBUb2tlbktpbmQuQlJBQ0VfUiksXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdEZpZWxkW0NvbnN0XSA6IE5hbWUgOiBWYWx1ZVs/Q29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0RmllbGQgPSBmdW5jdGlvbiBwYXJzZU9iamVjdEZpZWxkKGlzQ29uc3QpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9CSkVDVF9GSUVMRCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbChpc0NvbnN0KSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBEaXJlY3RpdmVzIHNlY3Rpb24uXG5cbiAgLyoqXG4gICAqIERpcmVjdGl2ZXNbQ29uc3RdIDogRGlyZWN0aXZlWz9Db25zdF0rXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlcyA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhpc0NvbnN0KSB7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcblxuICAgIHdoaWxlICh0aGlzLnBlZWsoVG9rZW5LaW5kLkFUKSkge1xuICAgICAgZGlyZWN0aXZlcy5wdXNoKHRoaXMucGFyc2VEaXJlY3RpdmUoaXNDb25zdCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVbQ29uc3RdIDogQCBOYW1lIEFyZ3VtZW50c1s/Q29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURpcmVjdGl2ZSA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlKGlzQ29uc3QpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5BVCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRElSRUNUSVZFLFxuICAgICAgbmFtZTogdGhpcy5wYXJzZU5hbWUoKSxcbiAgICAgIGFyZ3VtZW50czogdGhpcy5wYXJzZUFyZ3VtZW50cyhpc0NvbnN0KSxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfSAvLyBJbXBsZW1lbnRzIHRoZSBwYXJzaW5nIHJ1bGVzIGluIHRoZSBUeXBlcyBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBUeXBlIDpcbiAgICogICAtIE5hbWVkVHlwZVxuICAgKiAgIC0gTGlzdFR5cGVcbiAgICogICAtIE5vbk51bGxUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVHlwZVJlZmVyZW5jZSA9IGZ1bmN0aW9uIHBhcnNlVHlwZVJlZmVyZW5jZSgpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgdHlwZTtcblxuICAgIGlmICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkJSQUNLRVRfTCkpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQlJBQ0tFVF9SKTtcbiAgICAgIHR5cGUgPSB7XG4gICAgICAgIGtpbmQ6IEtpbmQuTElTVF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IHRoaXMucGFyc2VOYW1lZFR5cGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5CQU5HKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogS2luZC5OT05fTlVMTF9UWVBFLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICAvKipcbiAgICogTmFtZWRUeXBlIDogTmFtZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZU5hbWVkVHlwZSA9IGZ1bmN0aW9uIHBhcnNlTmFtZWRUeXBlKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk5BTUVEX1RZUEUsXG4gICAgICBuYW1lOiB0aGlzLnBhcnNlTmFtZSgpLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9IC8vIEltcGxlbWVudHMgdGhlIHBhcnNpbmcgcnVsZXMgaW4gdGhlIFR5cGUgRGVmaW5pdGlvbiBzZWN0aW9uLlxuXG4gIC8qKlxuICAgKiBUeXBlU3lzdGVtRGVmaW5pdGlvbiA6XG4gICAqICAgLSBTY2hlbWFEZWZpbml0aW9uXG4gICAqICAgLSBUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gRGlyZWN0aXZlRGVmaW5pdGlvblxuICAgKlxuICAgKiBUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBTY2FsYXJUeXBlRGVmaW5pdGlvblxuICAgKiAgIC0gT2JqZWN0VHlwZURlZmluaXRpb25cbiAgICogICAtIEludGVyZmFjZVR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBVbmlvblR5cGVEZWZpbml0aW9uXG4gICAqICAgLSBFbnVtVHlwZURlZmluaXRpb25cbiAgICogICAtIElucHV0T2JqZWN0VHlwZURlZmluaXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlU3lzdGVtRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVHlwZVN5c3RlbURlZmluaXRpb24oKSB7XG4gICAgLy8gTWFueSBkZWZpbml0aW9ucyBiZWdpbiB3aXRoIGEgZGVzY3JpcHRpb24gYW5kIHJlcXVpcmUgYSBsb29rYWhlYWQuXG4gICAgdmFyIGtleXdvcmRUb2tlbiA9IHRoaXMucGVla0Rlc2NyaXB0aW9uKCkgPyB0aGlzLl9sZXhlci5sb29rYWhlYWQoKSA6IHRoaXMuX2xleGVyLnRva2VuO1xuXG4gICAgaWYgKGtleXdvcmRUb2tlbi5raW5kID09PSBUb2tlbktpbmQuTkFNRSkge1xuICAgICAgc3dpdGNoIChrZXl3b3JkVG9rZW4udmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc2NoZW1hJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNjaGVtYURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NhbGFyVHlwZURlZmluaXRpb24oKTtcblxuICAgICAgICBjYXNlICd0eXBlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU9iamVjdFR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW50ZXJmYWNlJzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUludGVyZmFjZVR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ2VudW0nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRW51bVR5cGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGNhc2UgJ2RpcmVjdGl2ZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VEaXJlY3RpdmVEZWZpbml0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKGtleXdvcmRUb2tlbik7XG4gIH07XG5cbiAgX3Byb3RvLnBlZWtEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIHBlZWtEZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZWVrKFRva2VuS2luZC5TVFJJTkcpIHx8IHRoaXMucGVlayhUb2tlbktpbmQuQkxPQ0tfU1RSSU5HKTtcbiAgfVxuICAvKipcbiAgICogRGVzY3JpcHRpb24gOiBTdHJpbmdWYWx1ZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gcGFyc2VEZXNjcmlwdGlvbigpIHtcbiAgICBpZiAodGhpcy5wZWVrRGVzY3JpcHRpb24oKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VTdHJpbmdMaXRlcmFsKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTY2hlbWFEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IHNjaGVtYSBEaXJlY3RpdmVzW0NvbnN0XT8geyBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbisgfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjaGVtYURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZVNjaGVtYURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2hlbWEnKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciBvcGVyYXRpb25UeXBlcyA9IHRoaXMubWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NIRU1BX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgb3BlcmF0aW9uVHlwZXM6IG9wZXJhdGlvblR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbiA6IE9wZXJhdGlvblR5cGUgOiBOYW1lZFR5cGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VPcGVyYXRpb25UeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG9wZXJhdGlvbiA9IHRoaXMucGFyc2VPcGVyYXRpb25UeXBlKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHZhciB0eXBlID0gdGhpcy5wYXJzZU5hbWVkVHlwZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLk9QRVJBVElPTl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFNjYWxhclR5cGVEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IHNjYWxhciBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdP1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVNjYWxhclR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VTY2FsYXJUeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3NjYWxhcicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLlNDQUxBUl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogT2JqZWN0VHlwZURlZmluaXRpb24gOlxuICAgKiAgIERlc2NyaXB0aW9uP1xuICAgKiAgIHR5cGUgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZU9iamVjdFR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndHlwZScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgaW50ZXJmYWNlcyA9IHRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VGaWVsZHNEZWZpbml0aW9uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX1RZUEVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBpbnRlcmZhY2VzOiBpbnRlcmZhY2VzLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzSW50ZXJmYWNlcyA6XG4gICAqICAgLSBpbXBsZW1lbnRzIGAmYD8gTmFtZWRUeXBlXG4gICAqICAgLSBJbXBsZW1lbnRzSW50ZXJmYWNlcyAmIE5hbWVkVHlwZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzID0gZnVuY3Rpb24gcGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnMyO1xuXG4gICAgaWYgKCF0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgnaW1wbGVtZW50cycpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMyID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnMyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczIuYWxsb3dMZWdhY3lTRExJbXBsZW1lbnRzSW50ZXJmYWNlcykgPT09IHRydWUpIHtcbiAgICAgIHZhciB0eXBlcyA9IFtdOyAvLyBPcHRpb25hbCBsZWFkaW5nIGFtcGVyc2FuZFxuXG4gICAgICB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oVG9rZW5LaW5kLkFNUCk7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgdHlwZXMucHVzaCh0aGlzLnBhcnNlTmFtZWRUeXBlKCkpO1xuICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5BTVApIHx8IHRoaXMucGVlayhUb2tlbktpbmQuTkFNRSkpO1xuXG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVsaW1pdGVkTWFueShUb2tlbktpbmQuQU1QLCB0aGlzLnBhcnNlTmFtZWRUeXBlKTtcbiAgfVxuICAvKipcbiAgICogRmllbGRzRGVmaW5pdGlvbiA6IHsgRmllbGREZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRmllbGRzRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRmllbGRzRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnMzO1xuXG4gICAgLy8gTGVnYWN5IHN1cHBvcnQgZm9yIHRoZSBTREw/XG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnMzID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnMzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczMuYWxsb3dMZWdhY3lTRExFbXB0eUZpZWxkcykgPT09IHRydWUgJiYgdGhpcy5wZWVrKFRva2VuS2luZC5CUkFDRV9MKSAmJiB0aGlzLl9sZXhlci5sb29rYWhlYWQoKS5raW5kID09PSBUb2tlbktpbmQuQlJBQ0VfUikge1xuICAgICAgdGhpcy5fbGV4ZXIuYWR2YW5jZSgpO1xuXG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoVG9rZW5LaW5kLkJSQUNFX0wsIHRoaXMucGFyc2VGaWVsZERlZmluaXRpb24sIFRva2VuS2luZC5CUkFDRV9SKTtcbiAgfVxuICAvKipcbiAgICogRmllbGREZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBOYW1lIEFyZ3VtZW50c0RlZmluaXRpb24/IDogVHlwZSBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VGaWVsZERlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUZpZWxkRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnREZWZzKCk7XG4gICAgdGhpcy5leHBlY3RUb2tlbihUb2tlbktpbmQuQ09MT04pO1xuICAgIHZhciB0eXBlID0gdGhpcy5wYXJzZVR5cGVSZWZlcmVuY2UoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkZJRUxEX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgYXJndW1lbnRzOiBhcmdzLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEFyZ3VtZW50c0RlZmluaXRpb24gOiAoIElucHV0VmFsdWVEZWZpbml0aW9uKyApXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlQXJndW1lbnREZWZzID0gZnVuY3Rpb24gcGFyc2VBcmd1bWVudERlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5QQVJFTl9MLCB0aGlzLnBhcnNlSW5wdXRWYWx1ZURlZiwgVG9rZW5LaW5kLlBBUkVOX1IpO1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dFZhbHVlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gTmFtZSA6IFR5cGUgRGVmYXVsdFZhbHVlPyBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dFZhbHVlRGVmID0gZnVuY3Rpb24gcGFyc2VJbnB1dFZhbHVlRGVmKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB0aGlzLmV4cGVjdFRva2VuKFRva2VuS2luZC5DT0xPTik7XG4gICAgdmFyIHR5cGUgPSB0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpO1xuICAgIHZhciBkZWZhdWx0VmFsdWU7XG5cbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5FUVVBTFMpKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKHRydWUpO1xuICAgIH1cblxuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuSU5QVVRfVkFMVUVfREVGSU5JVElPTixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbiA6XG4gICAqICAgLSBEZXNjcmlwdGlvbj8gaW50ZXJmYWNlIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IEZpZWxkc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW50ZXJmYWNlVHlwZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUludGVyZmFjZVR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW50ZXJmYWNlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFVuaW9uVHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IHVuaW9uIE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IFVuaW9uTWVtYmVyVHlwZXM/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVW5pb25UeXBlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ3VuaW9uJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHR5cGVzID0gdGhpcy5wYXJzZVVuaW9uTWVtYmVyVHlwZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5VTklPTl9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIHR5cGVzOiB0eXBlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25NZW1iZXJUeXBlcyA6XG4gICAqICAgLSA9IGB8YD8gTmFtZWRUeXBlXG4gICAqICAgLSBVbmlvbk1lbWJlclR5cGVzIHwgTmFtZWRUeXBlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlVW5pb25NZW1iZXJUeXBlcyA9IGZ1bmN0aW9uIHBhcnNlVW5pb25NZW1iZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKFRva2VuS2luZC5FUVVBTFMpID8gdGhpcy5kZWxpbWl0ZWRNYW55KFRva2VuS2luZC5QSVBFLCB0aGlzLnBhcnNlTmFtZWRUeXBlKSA6IFtdO1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGVudW0gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XT8gRW51bVZhbHVlc0RlZmluaXRpb24/XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRW51bVR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVHlwZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdlbnVtJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkVOVU1fVFlQRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRW51bVZhbHVlc0RlZmluaXRpb24gOiB7IEVudW1WYWx1ZURlZmluaXRpb24rIH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRW51bVZhbHVlc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlRW51bVZhbHVlRGVmaW5pdGlvbiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVmFsdWVEZWZpbml0aW9uIDogRGVzY3JpcHRpb24/IEVudW1WYWx1ZSBEaXJlY3RpdmVzW0NvbnN0XT9cbiAgICpcbiAgICogRW51bVZhbHVlIDogTmFtZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1WYWx1ZURlZmluaXRpb24gPSBmdW5jdGlvbiBwYXJzZUVudW1WYWx1ZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuRU5VTV9WQUxVRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIElucHV0T2JqZWN0VHlwZURlZmluaXRpb24gOlxuICAgKiAgIC0gRGVzY3JpcHRpb24/IGlucHV0IE5hbWUgRGlyZWN0aXZlc1tDb25zdF0/IElucHV0RmllbGRzRGVmaW5pdGlvbj9cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucGFyc2VEZXNjcmlwdGlvbigpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW5wdXQnKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUlucHV0RmllbGRzRGVmaW5pdGlvbigpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLklOUFVUX09CSkVDVF9UWVBFX0RFRklOSVRJT04sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dEZpZWxkc0RlZmluaXRpb24gOiB7IElucHV0VmFsdWVEZWZpbml0aW9uKyB9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW5wdXRGaWVsZHNEZWZpbml0aW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KFRva2VuS2luZC5CUkFDRV9MLCB0aGlzLnBhcnNlSW5wdXRWYWx1ZURlZiwgVG9rZW5LaW5kLkJSQUNFX1IpO1xuICB9XG4gIC8qKlxuICAgKiBUeXBlU3lzdGVtRXh0ZW5zaW9uIDpcbiAgICogICAtIFNjaGVtYUV4dGVuc2lvblxuICAgKiAgIC0gVHlwZUV4dGVuc2lvblxuICAgKlxuICAgKiBUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIFNjYWxhclR5cGVFeHRlbnNpb25cbiAgICogICAtIE9iamVjdFR5cGVFeHRlbnNpb25cbiAgICogICAtIEludGVyZmFjZVR5cGVFeHRlbnNpb25cbiAgICogICAtIFVuaW9uVHlwZUV4dGVuc2lvblxuICAgKiAgIC0gRW51bVR5cGVFeHRlbnNpb25cbiAgICogICAtIElucHV0T2JqZWN0VHlwZURlZmluaXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VUeXBlU3lzdGVtRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VUeXBlU3lzdGVtRXh0ZW5zaW9uKCkge1xuICAgIHZhciBrZXl3b3JkVG9rZW4gPSB0aGlzLl9sZXhlci5sb29rYWhlYWQoKTtcblxuICAgIGlmIChrZXl3b3JkVG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUpIHtcbiAgICAgIHN3aXRjaCAoa2V5d29yZFRva2VuLnZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3NjaGVtYSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTY2hlbWFFeHRlbnNpb24oKTtcblxuICAgICAgICBjYXNlICdzY2FsYXInOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2NhbGFyVHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ2ludGVyZmFjZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAndW5pb24nOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uKCk7XG5cbiAgICAgICAgY2FzZSAnZW51bSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFbnVtVHlwZUV4dGVuc2lvbigpO1xuXG4gICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUlucHV0T2JqZWN0VHlwZUV4dGVuc2lvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZChrZXl3b3JkVG9rZW4pO1xuICB9XG4gIC8qKlxuICAgKiBTY2hlbWFFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgc2NoZW1hIERpcmVjdGl2ZXNbQ29uc3RdPyB7IE9wZXJhdGlvblR5cGVEZWZpbml0aW9uKyB9XG4gICAqICAtIGV4dGVuZCBzY2hlbWEgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTY2hlbWFFeHRlbnNpb24gPSBmdW5jdGlvbiBwYXJzZVNjaGVtYUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnc2NoZW1hJyk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgb3BlcmF0aW9uVHlwZXMgPSB0aGlzLm9wdGlvbmFsTWFueShUb2tlbktpbmQuQlJBQ0VfTCwgdGhpcy5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uLCBUb2tlbktpbmQuQlJBQ0VfUik7XG5cbiAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgb3BlcmF0aW9uVHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5TQ0hFTUFfRVhURU5TSU9OLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIG9wZXJhdGlvblR5cGVzOiBvcGVyYXRpb25UeXBlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2NhbGFyVHlwZUV4dGVuc2lvbiA6XG4gICAqICAgLSBleHRlbmQgc2NhbGFyIE5hbWUgRGlyZWN0aXZlc1tDb25zdF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VTY2FsYXJUeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdzY2FsYXInKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuU0NBTEFSX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdFR5cGVFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XT8gRmllbGRzRGVmaW5pdGlvblxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzPyBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKiAgLSBleHRlbmQgdHlwZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlT2JqZWN0VHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgndHlwZScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgaW50ZXJmYWNlcyA9IHRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VGaWVsZHNEZWZpbml0aW9uKCk7XG5cbiAgICBpZiAoaW50ZXJmYWNlcy5sZW5ndGggPT09IDAgJiYgZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgZmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtpbmQ6IEtpbmQuT0JKRUNUX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGludGVyZmFjZXM6IGludGVyZmFjZXMsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgZmllbGRzOiBmaWVsZHMsXG4gICAgICBsb2M6IHRoaXMubG9jKHN0YXJ0KVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEludGVyZmFjZVR5cGVFeHRlbnNpb24gOlxuICAgKiAgLSBleHRlbmQgaW50ZXJmYWNlIE5hbWUgSW1wbGVtZW50c0ludGVyZmFjZXM/IERpcmVjdGl2ZXNbQ29uc3RdPyBGaWVsZHNEZWZpbml0aW9uXG4gICAqICAtIGV4dGVuZCBpbnRlcmZhY2UgTmFtZSBJbXBsZW1lbnRzSW50ZXJmYWNlcz8gRGlyZWN0aXZlc1tDb25zdF1cbiAgICogIC0gZXh0ZW5kIGludGVyZmFjZSBOYW1lIEltcGxlbWVudHNJbnRlcmZhY2VzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW50ZXJmYWNlVHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlSW50ZXJmYWNlVHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnaW50ZXJmYWNlJyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBpbnRlcmZhY2VzID0gdGhpcy5wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0aGlzLnBhcnNlRGlyZWN0aXZlcyh0cnVlKTtcbiAgICB2YXIgZmllbGRzID0gdGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChpbnRlcmZhY2VzLmxlbmd0aCA9PT0gMCAmJiBkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlRFUkZBQ0VfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgaW50ZXJmYWNlczogaW50ZXJmYWNlcyxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogVW5pb25UeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCB1bmlvbiBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBVbmlvbk1lbWJlclR5cGVzXG4gICAqICAgLSBleHRlbmQgdW5pb24gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZVVuaW9uVHlwZUV4dGVuc2lvbiA9IGZ1bmN0aW9uIHBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuX2xleGVyLnRva2VuO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZXh0ZW5kJyk7XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCd1bmlvbicpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciB0eXBlcyA9IHRoaXMucGFyc2VVbmlvbk1lbWJlclR5cGVzKCk7XG5cbiAgICBpZiAoZGlyZWN0aXZlcy5sZW5ndGggPT09IDAgJiYgdHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5VTklPTl9UWVBFX0VYVEVOU0lPTixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBFbnVtVHlwZUV4dGVuc2lvbiA6XG4gICAqICAgLSBleHRlbmQgZW51bSBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBFbnVtVmFsdWVzRGVmaW5pdGlvblxuICAgKiAgIC0gZXh0ZW5kIGVudW0gTmFtZSBEaXJlY3RpdmVzW0NvbnN0XVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wYXJzZUVudW1UeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VFbnVtVHlwZUV4dGVuc2lvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2V4dGVuZCcpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnZW51bScpO1xuICAgIHZhciBuYW1lID0gdGhpcy5wYXJzZU5hbWUoKTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRoaXMucGFyc2VEaXJlY3RpdmVzKHRydWUpO1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLnBhcnNlRW51bVZhbHVlc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5FTlVNX1RZUEVfRVhURU5TSU9OLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRpcmVjdGl2ZXM6IGRpcmVjdGl2ZXMsXG4gICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uIDpcbiAgICogICAtIGV4dGVuZCBpbnB1dCBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdPyBJbnB1dEZpZWxkc0RlZmluaXRpb25cbiAgICogICAtIGV4dGVuZCBpbnB1dCBOYW1lIERpcmVjdGl2ZXNbQ29uc3RdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uID0gZnVuY3Rpb24gcGFyc2VJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdGhpcy5leHBlY3RLZXl3b3JkKCdleHRlbmQnKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2lucHV0Jyk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuICAgIHZhciBkaXJlY3RpdmVzID0gdGhpcy5wYXJzZURpcmVjdGl2ZXModHJ1ZSk7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24oKTtcblxuICAgIGlmIChkaXJlY3RpdmVzLmxlbmd0aCA9PT0gMCAmJiBmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2luZDogS2luZC5JTlBVVF9PQkpFQ1RfVFlQRV9FWFRFTlNJT04sXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZGlyZWN0aXZlczogZGlyZWN0aXZlcyxcbiAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgbG9jOiB0aGlzLmxvYyhzdGFydClcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXJlY3RpdmVEZWZpbml0aW9uIDpcbiAgICogICAtIERlc2NyaXB0aW9uPyBkaXJlY3RpdmUgQCBOYW1lIEFyZ3VtZW50c0RlZmluaXRpb24/IGByZXBlYXRhYmxlYD8gb24gRGlyZWN0aXZlTG9jYXRpb25zXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlRGVmaW5pdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLl9sZXhlci50b2tlbjtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnBhcnNlRGVzY3JpcHRpb24oKTtcbiAgICB0aGlzLmV4cGVjdEtleXdvcmQoJ2RpcmVjdGl2ZScpO1xuICAgIHRoaXMuZXhwZWN0VG9rZW4oVG9rZW5LaW5kLkFUKTtcbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyc2VOYW1lKCk7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnBhcnNlQXJndW1lbnREZWZzKCk7XG4gICAgdmFyIHJlcGVhdGFibGUgPSB0aGlzLmV4cGVjdE9wdGlvbmFsS2V5d29yZCgncmVwZWF0YWJsZScpO1xuICAgIHRoaXMuZXhwZWN0S2V5d29yZCgnb24nKTtcbiAgICB2YXIgbG9jYXRpb25zID0gdGhpcy5wYXJzZURpcmVjdGl2ZUxvY2F0aW9ucygpO1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiBLaW5kLkRJUkVDVElWRV9ERUZJTklUSU9OLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGFyZ3VtZW50czogYXJncyxcbiAgICAgIHJlcGVhdGFibGU6IHJlcGVhdGFibGUsXG4gICAgICBsb2NhdGlvbnM6IGxvY2F0aW9ucyxcbiAgICAgIGxvYzogdGhpcy5sb2Moc3RhcnQpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlyZWN0aXZlTG9jYXRpb25zIDpcbiAgICogICAtIGB8YD8gRGlyZWN0aXZlTG9jYXRpb25cbiAgICogICAtIERpcmVjdGl2ZUxvY2F0aW9ucyB8IERpcmVjdGl2ZUxvY2F0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBhcnNlRGlyZWN0aXZlTG9jYXRpb25zID0gZnVuY3Rpb24gcGFyc2VEaXJlY3RpdmVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsaW1pdGVkTWFueShUb2tlbktpbmQuUElQRSwgdGhpcy5wYXJzZURpcmVjdGl2ZUxvY2F0aW9uKTtcbiAgfVxuICAvKlxuICAgKiBEaXJlY3RpdmVMb2NhdGlvbiA6XG4gICAqICAgLSBFeGVjdXRhYmxlRGlyZWN0aXZlTG9jYXRpb25cbiAgICogICAtIFR5cGVTeXN0ZW1EaXJlY3RpdmVMb2NhdGlvblxuICAgKlxuICAgKiBFeGVjdXRhYmxlRGlyZWN0aXZlTG9jYXRpb24gOiBvbmUgb2ZcbiAgICogICBgUVVFUllgXG4gICAqICAgYE1VVEFUSU9OYFxuICAgKiAgIGBTVUJTQ1JJUFRJT05gXG4gICAqICAgYEZJRUxEYFxuICAgKiAgIGBGUkFHTUVOVF9ERUZJTklUSU9OYFxuICAgKiAgIGBGUkFHTUVOVF9TUFJFQURgXG4gICAqICAgYElOTElORV9GUkFHTUVOVGBcbiAgICpcbiAgICogVHlwZVN5c3RlbURpcmVjdGl2ZUxvY2F0aW9uIDogb25lIG9mXG4gICAqICAgYFNDSEVNQWBcbiAgICogICBgU0NBTEFSYFxuICAgKiAgIGBPQkpFQ1RgXG4gICAqICAgYEZJRUxEX0RFRklOSVRJT05gXG4gICAqICAgYEFSR1VNRU5UX0RFRklOSVRJT05gXG4gICAqICAgYElOVEVSRkFDRWBcbiAgICogICBgVU5JT05gXG4gICAqICAgYEVOVU1gXG4gICAqICAgYEVOVU1fVkFMVUVgXG4gICAqICAgYElOUFVUX09CSkVDVGBcbiAgICogICBgSU5QVVRfRklFTERfREVGSU5JVElPTmBcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGFyc2VEaXJlY3RpdmVMb2NhdGlvbiA9IGZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlTG9jYXRpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fbGV4ZXIudG9rZW47XG4gICAgdmFyIG5hbWUgPSB0aGlzLnBhcnNlTmFtZSgpO1xuXG4gICAgaWYgKERpcmVjdGl2ZUxvY2F0aW9uW25hbWUudmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHRocm93IHRoaXMudW5leHBlY3RlZChzdGFydCk7XG4gIH0gLy8gQ29yZSBwYXJzaW5nIHV0aWxpdHkgZnVuY3Rpb25zXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2NhdGlvbiBvYmplY3QsIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHBsYWNlIGluIHRoZSBzb3VyY2UgdGhhdCBjcmVhdGVkIGEgZ2l2ZW4gcGFyc2VkIG9iamVjdC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubG9jID0gZnVuY3Rpb24gbG9jKHN0YXJ0VG9rZW4pIHtcbiAgICB2YXIgX3RoaXMkX29wdGlvbnM0O1xuXG4gICAgaWYgKCgoX3RoaXMkX29wdGlvbnM0ID0gdGhpcy5fb3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkX29wdGlvbnM0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfb3B0aW9uczQubm9Mb2NhdGlvbikgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBuZXcgTG9jYXRpb24oc3RhcnRUb2tlbiwgdGhpcy5fbGV4ZXIubGFzdFRva2VuLCB0aGlzLl9sZXhlci5zb3VyY2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiBhIGdpdmVuIGtpbmRcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGVlayA9IGZ1bmN0aW9uIHBlZWsoa2luZCkge1xuICAgIHJldHVybiB0aGlzLl9sZXhlci50b2tlbi5raW5kID09PSBraW5kO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiB0aGUgZ2l2ZW4ga2luZCwgcmV0dXJuIHRoYXQgdG9rZW4gYWZ0ZXIgYWR2YW5jaW5nIHRoZSBsZXhlci5cbiAgICogT3RoZXJ3aXNlLCBkbyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHRocm93IGFuIGVycm9yLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5leHBlY3RUb2tlbiA9IGZ1bmN0aW9uIGV4cGVjdFRva2VuKGtpbmQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBraW5kKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICB0aHJvdyBzeW50YXhFcnJvcih0aGlzLl9sZXhlci5zb3VyY2UsIHRva2VuLnN0YXJ0LCBcIkV4cGVjdGVkIFwiLmNvbmNhdChnZXRUb2tlbktpbmREZXNjKGtpbmQpLCBcIiwgZm91bmQgXCIpLmNvbmNhdChnZXRUb2tlbkRlc2ModG9rZW4pLCBcIi5cIikpO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBvZiB0aGUgZ2l2ZW4ga2luZCwgcmV0dXJuIHRoYXQgdG9rZW4gYWZ0ZXIgYWR2YW5jaW5nIHRoZSBsZXhlci5cbiAgICogT3RoZXJ3aXNlLCBkbyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHJldHVybiB1bmRlZmluZWQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdE9wdGlvbmFsVG9rZW4gPSBmdW5jdGlvbiBleHBlY3RPcHRpb25hbFRva2VuKGtpbmQpIHtcbiAgICB2YXIgdG9rZW4gPSB0aGlzLl9sZXhlci50b2tlbjtcblxuICAgIGlmICh0b2tlbi5raW5kID09PSBraW5kKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBhIGdpdmVuIGtleXdvcmQsIGFkdmFuY2UgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgdGhyb3cgYW4gZXJyb3IuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmV4cGVjdEtleXdvcmQgPSBmdW5jdGlvbiBleHBlY3RLZXl3b3JkKHZhbHVlKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKHRoaXMuX2xleGVyLnNvdXJjZSwgdG9rZW4uc3RhcnQsIFwiRXhwZWN0ZWQgXFxcIlwiLmNvbmNhdCh2YWx1ZSwgXCJcXFwiLCBmb3VuZCBcIikuY29uY2F0KGdldFRva2VuRGVzYyh0b2tlbiksIFwiLlwiKSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgbmV4dCB0b2tlbiBpcyBhIGdpdmVuIGtleXdvcmQsIHJldHVybiBcInRydWVcIiBhZnRlciBhZHZhbmNpbmcgdGhlIGxleGVyLlxuICAgKiBPdGhlcndpc2UsIGRvIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSBhbmQgcmV0dXJuIFwiZmFsc2VcIi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXhwZWN0T3B0aW9uYWxLZXl3b3JkID0gZnVuY3Rpb24gZXhwZWN0T3B0aW9uYWxLZXl3b3JkKHZhbHVlKSB7XG4gICAgdmFyIHRva2VuID0gdGhpcy5fbGV4ZXIudG9rZW47XG5cbiAgICBpZiAodG9rZW4ua2luZCA9PT0gVG9rZW5LaW5kLk5BTUUgJiYgdG9rZW4udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9sZXhlci5hZHZhbmNlKCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhbiBlcnJvciB3aGVuIGFuIHVuZXhwZWN0ZWQgbGV4ZWQgdG9rZW4gaXMgZW5jb3VudGVyZWQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVuZXhwZWN0ZWQgPSBmdW5jdGlvbiB1bmV4cGVjdGVkKGF0VG9rZW4pIHtcbiAgICB2YXIgdG9rZW4gPSBhdFRva2VuICE9PSBudWxsICYmIGF0VG9rZW4gIT09IHZvaWQgMCA/IGF0VG9rZW4gOiB0aGlzLl9sZXhlci50b2tlbjtcbiAgICByZXR1cm4gc3ludGF4RXJyb3IodGhpcy5fbGV4ZXIuc291cmNlLCB0b2tlbi5zdGFydCwgXCJVbmV4cGVjdGVkIFwiLmNvbmNhdChnZXRUb2tlbkRlc2ModG9rZW4pLCBcIi5cIikpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcG9zc2libHkgZW1wdHkgbGlzdCBvZiBwYXJzZSBub2RlcywgZGV0ZXJtaW5lZCBieSB0aGUgcGFyc2VGbi5cbiAgICogVGhpcyBsaXN0IGJlZ2lucyB3aXRoIGEgbGV4IHRva2VuIG9mIG9wZW5LaW5kIGFuZCBlbmRzIHdpdGggYSBsZXggdG9rZW4gb2YgY2xvc2VLaW5kLlxuICAgKiBBZHZhbmNlcyB0aGUgcGFyc2VyIHRvIHRoZSBuZXh0IGxleCB0b2tlbiBhZnRlciB0aGUgY2xvc2luZyB0b2tlbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYW55ID0gZnVuY3Rpb24gYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICB0aGlzLmV4cGVjdFRva2VuKG9wZW5LaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIHdoaWxlICghdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKGNsb3NlS2luZCkpIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBJdCBjYW4gYmUgZW1wdHkgb25seSBpZiBvcGVuIHRva2VuIGlzIG1pc3Npbmcgb3RoZXJ3aXNlIGl0IHdpbGwgYWx3YXlzIHJldHVybiBub24tZW1wdHkgbGlzdFxuICAgKiB0aGF0IGJlZ2lucyB3aXRoIGEgbGV4IHRva2VuIG9mIG9wZW5LaW5kIGFuZCBlbmRzIHdpdGggYSBsZXggdG9rZW4gb2YgY2xvc2VLaW5kLlxuICAgKiBBZHZhbmNlcyB0aGUgcGFyc2VyIHRvIHRoZSBuZXh0IGxleCB0b2tlbiBhZnRlciB0aGUgY2xvc2luZyB0b2tlbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub3B0aW9uYWxNYW55ID0gZnVuY3Rpb24gb3B0aW9uYWxNYW55KG9wZW5LaW5kLCBwYXJzZUZuLCBjbG9zZUtpbmQpIHtcbiAgICBpZiAodGhpcy5leHBlY3RPcHRpb25hbFRva2VuKG9wZW5LaW5kKSkge1xuICAgICAgdmFyIG5vZGVzID0gW107XG5cbiAgICAgIGRvIHtcbiAgICAgICAgbm9kZXMucHVzaChwYXJzZUZuLmNhbGwodGhpcykpO1xuICAgICAgfSB3aGlsZSAoIXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihjbG9zZUtpbmQpKTtcblxuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIG5vbi1lbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgYmVnaW5zIHdpdGggYSBsZXggdG9rZW4gb2Ygb3BlbktpbmQgYW5kIGVuZHMgd2l0aCBhIGxleCB0b2tlbiBvZiBjbG9zZUtpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIHRoZSBjbG9zaW5nIHRva2VuLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5tYW55ID0gZnVuY3Rpb24gbWFueShvcGVuS2luZCwgcGFyc2VGbiwgY2xvc2VLaW5kKSB7XG4gICAgdGhpcy5leHBlY3RUb2tlbihvcGVuS2luZCk7XG4gICAgdmFyIG5vZGVzID0gW107XG5cbiAgICBkbyB7XG4gICAgICBub2Rlcy5wdXNoKHBhcnNlRm4uY2FsbCh0aGlzKSk7XG4gICAgfSB3aGlsZSAoIXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihjbG9zZUtpbmQpKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIG5vbi1lbXB0eSBsaXN0IG9mIHBhcnNlIG5vZGVzLCBkZXRlcm1pbmVkIGJ5IHRoZSBwYXJzZUZuLlxuICAgKiBUaGlzIGxpc3QgbWF5IGJlZ2luIHdpdGggYSBsZXggdG9rZW4gb2YgZGVsaW1pdGVyS2luZCBmb2xsb3dlZCBieSBpdGVtcyBzZXBhcmF0ZWQgYnkgbGV4IHRva2VucyBvZiB0b2tlbktpbmQuXG4gICAqIEFkdmFuY2VzIHRoZSBwYXJzZXIgdG8gdGhlIG5leHQgbGV4IHRva2VuIGFmdGVyIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVsaW1pdGVkTWFueSA9IGZ1bmN0aW9uIGRlbGltaXRlZE1hbnkoZGVsaW1pdGVyS2luZCwgcGFyc2VGbikge1xuICAgIHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihkZWxpbWl0ZXJLaW5kKTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGRvIHtcbiAgICAgIG5vZGVzLnB1c2gocGFyc2VGbi5jYWxsKHRoaXMpKTtcbiAgICB9IHdoaWxlICh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oZGVsaW1pdGVyS2luZCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9O1xuXG4gIHJldHVybiBQYXJzZXI7XG59KCk7XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGRlc2NyaWJlIGEgdG9rZW4gYXMgYSBzdHJpbmcgZm9yIGRlYnVnZ2luZy5cbiAqL1xuXG5mdW5jdGlvbiBnZXRUb2tlbkRlc2ModG9rZW4pIHtcbiAgdmFyIHZhbHVlID0gdG9rZW4udmFsdWU7XG4gIHJldHVybiBnZXRUb2tlbktpbmREZXNjKHRva2VuLmtpbmQpICsgKHZhbHVlICE9IG51bGwgPyBcIiBcXFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcXCJcIikgOiAnJyk7XG59XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGRlc2NyaWJlIGEgdG9rZW4ga2luZCBhcyBhIHN0cmluZyBmb3IgZGVidWdnaW5nLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0VG9rZW5LaW5kRGVzYyhraW5kKSB7XG4gIHJldHVybiBpc1B1bmN0dWF0b3JUb2tlbktpbmQoa2luZCkgPyBcIlxcXCJcIi5jb25jYXQoa2luZCwgXCJcXFwiXCIpIDoga2luZDtcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uIH0gZnJvbSBcIi4vbG9jYXRpb24ubWpzXCI7XG4vKipcbiAqIFJlbmRlciBhIGhlbHBmdWwgZGVzY3JpcHRpb24gb2YgdGhlIGxvY2F0aW9uIGluIHRoZSBHcmFwaFFMIFNvdXJjZSBkb2N1bWVudC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRMb2NhdGlvbihsb2NhdGlvbikge1xuICByZXR1cm4gcHJpbnRTb3VyY2VMb2NhdGlvbihsb2NhdGlvbi5zb3VyY2UsIGdldExvY2F0aW9uKGxvY2F0aW9uLnNvdXJjZSwgbG9jYXRpb24uc3RhcnQpKTtcbn1cbi8qKlxuICogUmVuZGVyIGEgaGVscGZ1bCBkZXNjcmlwdGlvbiBvZiB0aGUgbG9jYXRpb24gaW4gdGhlIEdyYXBoUUwgU291cmNlIGRvY3VtZW50LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFNvdXJjZUxvY2F0aW9uKHNvdXJjZSwgc291cmNlTG9jYXRpb24pIHtcbiAgdmFyIGZpcnN0TGluZUNvbHVtbk9mZnNldCA9IHNvdXJjZS5sb2NhdGlvbk9mZnNldC5jb2x1bW4gLSAxO1xuICB2YXIgYm9keSA9IHdoaXRlc3BhY2UoZmlyc3RMaW5lQ29sdW1uT2Zmc2V0KSArIHNvdXJjZS5ib2R5O1xuICB2YXIgbGluZUluZGV4ID0gc291cmNlTG9jYXRpb24ubGluZSAtIDE7XG4gIHZhciBsaW5lT2Zmc2V0ID0gc291cmNlLmxvY2F0aW9uT2Zmc2V0LmxpbmUgLSAxO1xuICB2YXIgbGluZU51bSA9IHNvdXJjZUxvY2F0aW9uLmxpbmUgKyBsaW5lT2Zmc2V0O1xuICB2YXIgY29sdW1uT2Zmc2V0ID0gc291cmNlTG9jYXRpb24ubGluZSA9PT0gMSA/IGZpcnN0TGluZUNvbHVtbk9mZnNldCA6IDA7XG4gIHZhciBjb2x1bW5OdW0gPSBzb3VyY2VMb2NhdGlvbi5jb2x1bW4gKyBjb2x1bW5PZmZzZXQ7XG4gIHZhciBsb2NhdGlvblN0ciA9IFwiXCIuY29uY2F0KHNvdXJjZS5uYW1lLCBcIjpcIikuY29uY2F0KGxpbmVOdW0sIFwiOlwiKS5jb25jYXQoY29sdW1uTnVtLCBcIlxcblwiKTtcbiAgdmFyIGxpbmVzID0gYm9keS5zcGxpdCgvXFxyXFxufFtcXG5cXHJdL2cpO1xuICB2YXIgbG9jYXRpb25MaW5lID0gbGluZXNbbGluZUluZGV4XTsgLy8gU3BlY2lhbCBjYXNlIGZvciBtaW5pZmllZCBkb2N1bWVudHNcblxuICBpZiAobG9jYXRpb25MaW5lLmxlbmd0aCA+IDEyMCkge1xuICAgIHZhciBzdWJMaW5lSW5kZXggPSBNYXRoLmZsb29yKGNvbHVtbk51bSAvIDgwKTtcbiAgICB2YXIgc3ViTGluZUNvbHVtbk51bSA9IGNvbHVtbk51bSAlIDgwO1xuICAgIHZhciBzdWJMaW5lcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkxpbmUubGVuZ3RoOyBpICs9IDgwKSB7XG4gICAgICBzdWJMaW5lcy5wdXNoKGxvY2F0aW9uTGluZS5zbGljZShpLCBpICsgODApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYXRpb25TdHIgKyBwcmludFByZWZpeGVkTGluZXMoW1tcIlwiLmNvbmNhdChsaW5lTnVtKSwgc3ViTGluZXNbMF1dXS5jb25jYXQoc3ViTGluZXMuc2xpY2UoMSwgc3ViTGluZUluZGV4ICsgMSkubWFwKGZ1bmN0aW9uIChzdWJMaW5lKSB7XG4gICAgICByZXR1cm4gWycnLCBzdWJMaW5lXTtcbiAgICB9KSwgW1snICcsIHdoaXRlc3BhY2Uoc3ViTGluZUNvbHVtbk51bSAtIDEpICsgJ14nXSwgWycnLCBzdWJMaW5lc1tzdWJMaW5lSW5kZXggKyAxXV1dKSk7XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb25TdHIgKyBwcmludFByZWZpeGVkTGluZXMoWy8vIExpbmVzIHNwZWNpZmllZCBsaWtlIHRoaXM6IFtcInByZWZpeFwiLCBcInN0cmluZ1wiXSxcbiAgW1wiXCIuY29uY2F0KGxpbmVOdW0gLSAxKSwgbGluZXNbbGluZUluZGV4IC0gMV1dLCBbXCJcIi5jb25jYXQobGluZU51bSksIGxvY2F0aW9uTGluZV0sIFsnJywgd2hpdGVzcGFjZShjb2x1bW5OdW0gLSAxKSArICdeJ10sIFtcIlwiLmNvbmNhdChsaW5lTnVtICsgMSksIGxpbmVzW2xpbmVJbmRleCArIDFdXV0pO1xufVxuXG5mdW5jdGlvbiBwcmludFByZWZpeGVkTGluZXMobGluZXMpIHtcbiAgdmFyIGV4aXN0aW5nTGluZXMgPSBsaW5lcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgXyA9IF9yZWZbMF0sXG4gICAgICAgIGxpbmUgPSBfcmVmWzFdO1xuICAgIHJldHVybiBsaW5lICE9PSB1bmRlZmluZWQ7XG4gIH0pO1xuICB2YXIgcGFkTGVuID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgZXhpc3RpbmdMaW5lcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHByZWZpeCA9IF9yZWYyWzBdO1xuICAgIHJldHVybiBwcmVmaXgubGVuZ3RoO1xuICB9KSk7XG4gIHJldHVybiBleGlzdGluZ0xpbmVzLm1hcChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZjNbMF0sXG4gICAgICAgIGxpbmUgPSBfcmVmM1sxXTtcbiAgICByZXR1cm4gbGVmdFBhZChwYWRMZW4sIHByZWZpeCkgKyAobGluZSA/ICcgfCAnICsgbGluZSA6ICcgfCcpO1xuICB9KS5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gd2hpdGVzcGFjZShsZW4pIHtcbiAgcmV0dXJuIEFycmF5KGxlbiArIDEpLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gbGVmdFBhZChsZW4sIHN0cikge1xuICByZXR1cm4gd2hpdGVzcGFjZShsZW4gLSBzdHIubGVuZ3RoKSArIHN0cjtcbn1cbiIsImltcG9ydCB7IHZpc2l0IH0gZnJvbSBcIi4vdmlzaXRvci5tanNcIjtcbmltcG9ydCB7IHByaW50QmxvY2tTdHJpbmcgfSBmcm9tIFwiLi9ibG9ja1N0cmluZy5tanNcIjtcbi8qKlxuICogQ29udmVydHMgYW4gQVNUIGludG8gYSBzdHJpbmcsIHVzaW5nIG9uZSBzZXQgb2YgcmVhc29uYWJsZVxuICogZm9ybWF0dGluZyBydWxlcy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnQoYXN0KSB7XG4gIHJldHVybiB2aXNpdChhc3QsIHtcbiAgICBsZWF2ZTogcHJpbnREb2NBU1RSZWR1Y2VyXG4gIH0pO1xufVxudmFyIE1BWF9MSU5FX0xFTkdUSCA9IDgwOyAvLyBUT0RPOiBwcm92aWRlIGJldHRlciB0eXBlIGNvdmVyYWdlIGluIGZ1dHVyZVxuXG52YXIgcHJpbnREb2NBU1RSZWR1Y2VyID0ge1xuICBOYW1lOiBmdW5jdGlvbiBOYW1lKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgfSxcbiAgVmFyaWFibGU6IGZ1bmN0aW9uIFZhcmlhYmxlKG5vZGUpIHtcbiAgICByZXR1cm4gJyQnICsgbm9kZS5uYW1lO1xuICB9LFxuICAvLyBEb2N1bWVudFxuICBEb2N1bWVudDogZnVuY3Rpb24gRG9jdW1lbnQobm9kZSkge1xuICAgIHJldHVybiBqb2luKG5vZGUuZGVmaW5pdGlvbnMsICdcXG5cXG4nKSArICdcXG4nO1xuICB9LFxuICBPcGVyYXRpb25EZWZpbml0aW9uOiBmdW5jdGlvbiBPcGVyYXRpb25EZWZpbml0aW9uKG5vZGUpIHtcbiAgICB2YXIgb3AgPSBub2RlLm9wZXJhdGlvbjtcbiAgICB2YXIgbmFtZSA9IG5vZGUubmFtZTtcbiAgICB2YXIgdmFyRGVmcyA9IHdyYXAoJygnLCBqb2luKG5vZGUudmFyaWFibGVEZWZpbml0aW9ucywgJywgJyksICcpJyk7XG4gICAgdmFyIGRpcmVjdGl2ZXMgPSBqb2luKG5vZGUuZGlyZWN0aXZlcywgJyAnKTtcbiAgICB2YXIgc2VsZWN0aW9uU2V0ID0gbm9kZS5zZWxlY3Rpb25TZXQ7IC8vIEFub255bW91cyBxdWVyaWVzIHdpdGggbm8gZGlyZWN0aXZlcyBvciB2YXJpYWJsZSBkZWZpbml0aW9ucyBjYW4gdXNlXG4gICAgLy8gdGhlIHF1ZXJ5IHNob3J0IGZvcm0uXG5cbiAgICByZXR1cm4gIW5hbWUgJiYgIWRpcmVjdGl2ZXMgJiYgIXZhckRlZnMgJiYgb3AgPT09ICdxdWVyeScgPyBzZWxlY3Rpb25TZXQgOiBqb2luKFtvcCwgam9pbihbbmFtZSwgdmFyRGVmc10pLCBkaXJlY3RpdmVzLCBzZWxlY3Rpb25TZXRdLCAnICcpO1xuICB9LFxuICBWYXJpYWJsZURlZmluaXRpb246IGZ1bmN0aW9uIFZhcmlhYmxlRGVmaW5pdGlvbihfcmVmKSB7XG4gICAgdmFyIHZhcmlhYmxlID0gX3JlZi52YXJpYWJsZSxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gX3JlZi5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIHZhcmlhYmxlICsgJzogJyArIHR5cGUgKyB3cmFwKCcgPSAnLCBkZWZhdWx0VmFsdWUpICsgd3JhcCgnICcsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSk7XG4gIH0sXG4gIFNlbGVjdGlvblNldDogZnVuY3Rpb24gU2VsZWN0aW9uU2V0KF9yZWYyKSB7XG4gICAgdmFyIHNlbGVjdGlvbnMgPSBfcmVmMi5zZWxlY3Rpb25zO1xuICAgIHJldHVybiBibG9jayhzZWxlY3Rpb25zKTtcbiAgfSxcbiAgRmllbGQ6IGZ1bmN0aW9uIEZpZWxkKF9yZWYzKSB7XG4gICAgdmFyIGFsaWFzID0gX3JlZjMuYWxpYXMsXG4gICAgICAgIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICBhcmdzID0gX3JlZjMuYXJndW1lbnRzLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjMuZGlyZWN0aXZlcyxcbiAgICAgICAgc2VsZWN0aW9uU2V0ID0gX3JlZjMuc2VsZWN0aW9uU2V0O1xuICAgIHZhciBwcmVmaXggPSB3cmFwKCcnLCBhbGlhcywgJzogJykgKyBuYW1lO1xuICAgIHZhciBhcmdzTGluZSA9IHByZWZpeCArIHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpO1xuXG4gICAgaWYgKGFyZ3NMaW5lLmxlbmd0aCA+IE1BWF9MSU5FX0xFTkdUSCkge1xuICAgICAgYXJnc0xpbmUgPSBwcmVmaXggKyB3cmFwKCcoXFxuJywgaW5kZW50KGpvaW4oYXJncywgJ1xcbicpKSwgJ1xcbiknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gam9pbihbYXJnc0xpbmUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgc2VsZWN0aW9uU2V0XSwgJyAnKTtcbiAgfSxcbiAgQXJndW1lbnQ6IGZ1bmN0aW9uIEFyZ3VtZW50KF9yZWY0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNC5uYW1lLFxuICAgICAgICB2YWx1ZSA9IF9yZWY0LnZhbHVlO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIHZhbHVlO1xuICB9LFxuICAvLyBGcmFnbWVudHNcbiAgRnJhZ21lbnRTcHJlYWQ6IGZ1bmN0aW9uIEZyYWdtZW50U3ByZWFkKF9yZWY1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNS5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjUuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gJy4uLicgKyBuYW1lICsgd3JhcCgnICcsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSk7XG4gIH0sXG4gIElubGluZUZyYWdtZW50OiBmdW5jdGlvbiBJbmxpbmVGcmFnbWVudChfcmVmNikge1xuICAgIHZhciB0eXBlQ29uZGl0aW9uID0gX3JlZjYudHlwZUNvbmRpdGlvbixcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWY2LmRpcmVjdGl2ZXMsXG4gICAgICAgIHNlbGVjdGlvblNldCA9IF9yZWY2LnNlbGVjdGlvblNldDtcbiAgICByZXR1cm4gam9pbihbJy4uLicsIHdyYXAoJ29uICcsIHR5cGVDb25kaXRpb24pLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIHNlbGVjdGlvblNldF0sICcgJyk7XG4gIH0sXG4gIEZyYWdtZW50RGVmaW5pdGlvbjogZnVuY3Rpb24gRnJhZ21lbnREZWZpbml0aW9uKF9yZWY3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmNy5uYW1lLFxuICAgICAgICB0eXBlQ29uZGl0aW9uID0gX3JlZjcudHlwZUNvbmRpdGlvbixcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9ucyA9IF9yZWY3LnZhcmlhYmxlRGVmaW5pdGlvbnMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmNy5kaXJlY3RpdmVzLFxuICAgICAgICBzZWxlY3Rpb25TZXQgPSBfcmVmNy5zZWxlY3Rpb25TZXQ7XG4gICAgcmV0dXJuICgvLyBOb3RlOiBmcmFnbWVudCB2YXJpYWJsZSBkZWZpbml0aW9ucyBhcmUgZXhwZXJpbWVudGFsIGFuZCBtYXkgYmUgY2hhbmdlZFxuICAgICAgLy8gb3IgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgXCJmcmFnbWVudCBcIi5jb25jYXQobmFtZSkuY29uY2F0KHdyYXAoJygnLCBqb2luKHZhcmlhYmxlRGVmaW5pdGlvbnMsICcsICcpLCAnKScpLCBcIiBcIikgKyBcIm9uIFwiLmNvbmNhdCh0eXBlQ29uZGl0aW9uLCBcIiBcIikuY29uY2F0KHdyYXAoJycsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgJyAnKSkgKyBzZWxlY3Rpb25TZXRcbiAgICApO1xuICB9LFxuICAvLyBWYWx1ZVxuICBJbnRWYWx1ZTogZnVuY3Rpb24gSW50VmFsdWUoX3JlZjgpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmOC52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIEZsb2F0VmFsdWU6IGZ1bmN0aW9uIEZsb2F0VmFsdWUoX3JlZjkpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmOS52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIFN0cmluZ1ZhbHVlOiBmdW5jdGlvbiBTdHJpbmdWYWx1ZShfcmVmMTAsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMC52YWx1ZSxcbiAgICAgICAgaXNCbG9ja1N0cmluZyA9IF9yZWYxMC5ibG9jaztcbiAgICByZXR1cm4gaXNCbG9ja1N0cmluZyA/IHByaW50QmxvY2tTdHJpbmcodmFsdWUsIGtleSA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICcnIDogJyAgJykgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gIH0sXG4gIEJvb2xlYW5WYWx1ZTogZnVuY3Rpb24gQm9vbGVhblZhbHVlKF9yZWYxMSkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMS52YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICB9LFxuICBOdWxsVmFsdWU6IGZ1bmN0aW9uIE51bGxWYWx1ZSgpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9LFxuICBFbnVtVmFsdWU6IGZ1bmN0aW9uIEVudW1WYWx1ZShfcmVmMTIpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMTIudmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBMaXN0VmFsdWU6IGZ1bmN0aW9uIExpc3RWYWx1ZShfcmVmMTMpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZjEzLnZhbHVlcztcbiAgICByZXR1cm4gJ1snICsgam9pbih2YWx1ZXMsICcsICcpICsgJ10nO1xuICB9LFxuICBPYmplY3RWYWx1ZTogZnVuY3Rpb24gT2JqZWN0VmFsdWUoX3JlZjE0KSB7XG4gICAgdmFyIGZpZWxkcyA9IF9yZWYxNC5maWVsZHM7XG4gICAgcmV0dXJuICd7JyArIGpvaW4oZmllbGRzLCAnLCAnKSArICd9JztcbiAgfSxcbiAgT2JqZWN0RmllbGQ6IGZ1bmN0aW9uIE9iamVjdEZpZWxkKF9yZWYxNSkge1xuICAgIHZhciBuYW1lID0gX3JlZjE1Lm5hbWUsXG4gICAgICAgIHZhbHVlID0gX3JlZjE1LnZhbHVlO1xuICAgIHJldHVybiBuYW1lICsgJzogJyArIHZhbHVlO1xuICB9LFxuICAvLyBEaXJlY3RpdmVcbiAgRGlyZWN0aXZlOiBmdW5jdGlvbiBEaXJlY3RpdmUoX3JlZjE2KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMTYubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYxNi5hcmd1bWVudHM7XG4gICAgcmV0dXJuICdAJyArIG5hbWUgKyB3cmFwKCcoJywgam9pbihhcmdzLCAnLCAnKSwgJyknKTtcbiAgfSxcbiAgLy8gVHlwZVxuICBOYW1lZFR5cGU6IGZ1bmN0aW9uIE5hbWVkVHlwZShfcmVmMTcpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYxNy5uYW1lO1xuICAgIHJldHVybiBuYW1lO1xuICB9LFxuICBMaXN0VHlwZTogZnVuY3Rpb24gTGlzdFR5cGUoX3JlZjE4KSB7XG4gICAgdmFyIHR5cGUgPSBfcmVmMTgudHlwZTtcbiAgICByZXR1cm4gJ1snICsgdHlwZSArICddJztcbiAgfSxcbiAgTm9uTnVsbFR5cGU6IGZ1bmN0aW9uIE5vbk51bGxUeXBlKF9yZWYxOSkge1xuICAgIHZhciB0eXBlID0gX3JlZjE5LnR5cGU7XG4gICAgcmV0dXJuIHR5cGUgKyAnISc7XG4gIH0sXG4gIC8vIFR5cGUgU3lzdGVtIERlZmluaXRpb25zXG4gIFNjaGVtYURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjApIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IF9yZWYyMC5kaXJlY3RpdmVzLFxuICAgICAgICBvcGVyYXRpb25UeXBlcyA9IF9yZWYyMC5vcGVyYXRpb25UeXBlcztcbiAgICByZXR1cm4gam9pbihbJ3NjaGVtYScsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2sob3BlcmF0aW9uVHlwZXMpXSwgJyAnKTtcbiAgfSksXG4gIE9wZXJhdGlvblR5cGVEZWZpbml0aW9uOiBmdW5jdGlvbiBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbihfcmVmMjEpIHtcbiAgICB2YXIgb3BlcmF0aW9uID0gX3JlZjIxLm9wZXJhdGlvbixcbiAgICAgICAgdHlwZSA9IF9yZWYyMS50eXBlO1xuICAgIHJldHVybiBvcGVyYXRpb24gKyAnOiAnICsgdHlwZTtcbiAgfSxcbiAgU2NhbGFyVHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjIpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyMi5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjIyLmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oWydzY2FsYXInLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9KSxcbiAgT2JqZWN0VHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjMpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyMy5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjIzLmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjMuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjIzLmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ3R5cGUnLCBuYW1lLCB3cmFwKCdpbXBsZW1lbnRzICcsIGpvaW4oaW50ZXJmYWNlcywgJyAmICcpKSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCBibG9jayhmaWVsZHMpXSwgJyAnKTtcbiAgfSksXG4gIEZpZWxkRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyNCkge1xuICAgIHZhciBuYW1lID0gX3JlZjI0Lm5hbWUsXG4gICAgICAgIGFyZ3MgPSBfcmVmMjQuYXJndW1lbnRzLFxuICAgICAgICB0eXBlID0gX3JlZjI0LnR5cGUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjQuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gbmFtZSArIChoYXNNdWx0aWxpbmVJdGVtcyhhcmdzKSA/IHdyYXAoJyhcXG4nLCBpbmRlbnQoam9pbihhcmdzLCAnXFxuJykpLCAnXFxuKScpIDogd3JhcCgnKCcsIGpvaW4oYXJncywgJywgJyksICcpJykpICsgJzogJyArIHR5cGUgKyB3cmFwKCcgJywgam9pbihkaXJlY3RpdmVzLCAnICcpKTtcbiAgfSksXG4gIElucHV0VmFsdWVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjI1KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMjUubmFtZSxcbiAgICAgICAgdHlwZSA9IF9yZWYyNS50eXBlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmMjUuZGVmYXVsdFZhbHVlLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjI1LmRpcmVjdGl2ZXM7XG4gICAgcmV0dXJuIGpvaW4oW25hbWUgKyAnOiAnICsgdHlwZSwgd3JhcCgnPSAnLCBkZWZhdWx0VmFsdWUpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyldLCAnICcpO1xuICB9KSxcbiAgSW50ZXJmYWNlVHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMjYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyNi5uYW1lLFxuICAgICAgICBpbnRlcmZhY2VzID0gX3JlZjI2LmludGVyZmFjZXMsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjYuZGlyZWN0aXZlcyxcbiAgICAgICAgZmllbGRzID0gX3JlZjI2LmZpZWxkcztcbiAgICByZXR1cm4gam9pbihbJ2ludGVyZmFjZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9KSxcbiAgVW5pb25UeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyNykge1xuICAgIHZhciBuYW1lID0gX3JlZjI3Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjcuZGlyZWN0aXZlcyxcbiAgICAgICAgdHlwZXMgPSBfcmVmMjcudHlwZXM7XG4gICAgcmV0dXJuIGpvaW4oWyd1bmlvbicsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgdHlwZXMgJiYgdHlwZXMubGVuZ3RoICE9PSAwID8gJz0gJyArIGpvaW4odHlwZXMsICcgfCAnKSA6ICcnXSwgJyAnKTtcbiAgfSksXG4gIEVudW1UeXBlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyOCkge1xuICAgIHZhciBuYW1lID0gX3JlZjI4Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjguZGlyZWN0aXZlcyxcbiAgICAgICAgdmFsdWVzID0gX3JlZjI4LnZhbHVlcztcbiAgICByZXR1cm4gam9pbihbJ2VudW0nLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKHZhbHVlcyldLCAnICcpO1xuICB9KSxcbiAgRW51bVZhbHVlRGVmaW5pdGlvbjogYWRkRGVzY3JpcHRpb24oZnVuY3Rpb24gKF9yZWYyOSkge1xuICAgIHZhciBuYW1lID0gX3JlZjI5Lm5hbWUsXG4gICAgICAgIGRpcmVjdGl2ZXMgPSBfcmVmMjkuZGlyZWN0aXZlcztcbiAgICByZXR1cm4gam9pbihbbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpXSwgJyAnKTtcbiAgfSksXG4gIElucHV0T2JqZWN0VHlwZURlZmluaXRpb246IGFkZERlc2NyaXB0aW9uKGZ1bmN0aW9uIChfcmVmMzApIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzMC5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjMwLmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzMC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydpbnB1dCcsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKSwgYmxvY2soZmllbGRzKV0sICcgJyk7XG4gIH0pLFxuICBEaXJlY3RpdmVEZWZpbml0aW9uOiBhZGREZXNjcmlwdGlvbihmdW5jdGlvbiAoX3JlZjMxKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzEubmFtZSxcbiAgICAgICAgYXJncyA9IF9yZWYzMS5hcmd1bWVudHMsXG4gICAgICAgIHJlcGVhdGFibGUgPSBfcmVmMzEucmVwZWF0YWJsZSxcbiAgICAgICAgbG9jYXRpb25zID0gX3JlZjMxLmxvY2F0aW9ucztcbiAgICByZXR1cm4gJ2RpcmVjdGl2ZSBAJyArIG5hbWUgKyAoaGFzTXVsdGlsaW5lSXRlbXMoYXJncykgPyB3cmFwKCcoXFxuJywgaW5kZW50KGpvaW4oYXJncywgJ1xcbicpKSwgJ1xcbiknKSA6IHdyYXAoJygnLCBqb2luKGFyZ3MsICcsICcpLCAnKScpKSArIChyZXBlYXRhYmxlID8gJyByZXBlYXRhYmxlJyA6ICcnKSArICcgb24gJyArIGpvaW4obG9jYXRpb25zLCAnIHwgJyk7XG4gIH0pLFxuICBTY2hlbWFFeHRlbnNpb246IGZ1bmN0aW9uIFNjaGVtYUV4dGVuc2lvbihfcmVmMzIpIHtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IF9yZWYzMi5kaXJlY3RpdmVzLFxuICAgICAgICBvcGVyYXRpb25UeXBlcyA9IF9yZWYzMi5vcGVyYXRpb25UeXBlcztcbiAgICByZXR1cm4gam9pbihbJ2V4dGVuZCBzY2hlbWEnLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKG9wZXJhdGlvblR5cGVzKV0sICcgJyk7XG4gIH0sXG4gIFNjYWxhclR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIFNjYWxhclR5cGVFeHRlbnNpb24oX3JlZjMzKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzMubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzMy5kaXJlY3RpdmVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIHNjYWxhcicsIG5hbWUsIGpvaW4oZGlyZWN0aXZlcywgJyAnKV0sICcgJyk7XG4gIH0sXG4gIE9iamVjdFR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIE9iamVjdFR5cGVFeHRlbnNpb24oX3JlZjM0KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzQubmFtZSxcbiAgICAgICAgaW50ZXJmYWNlcyA9IF9yZWYzNC5pbnRlcmZhY2VzLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM0LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzNC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgdHlwZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9LFxuICBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uOiBmdW5jdGlvbiBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKF9yZWYzNSkge1xuICAgIHZhciBuYW1lID0gX3JlZjM1Lm5hbWUsXG4gICAgICAgIGludGVyZmFjZXMgPSBfcmVmMzUuaW50ZXJmYWNlcyxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzNS5kaXJlY3RpdmVzLFxuICAgICAgICBmaWVsZHMgPSBfcmVmMzUuZmllbGRzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIGludGVyZmFjZScsIG5hbWUsIHdyYXAoJ2ltcGxlbWVudHMgJywgam9pbihpbnRlcmZhY2VzLCAnICYgJykpLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9LFxuICBVbmlvblR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIFVuaW9uVHlwZUV4dGVuc2lvbihfcmVmMzYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzNi5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM2LmRpcmVjdGl2ZXMsXG4gICAgICAgIHR5cGVzID0gX3JlZjM2LnR5cGVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIHVuaW9uJywgbmFtZSwgam9pbihkaXJlY3RpdmVzLCAnICcpLCB0eXBlcyAmJiB0eXBlcy5sZW5ndGggIT09IDAgPyAnPSAnICsgam9pbih0eXBlcywgJyB8ICcpIDogJyddLCAnICcpO1xuICB9LFxuICBFbnVtVHlwZUV4dGVuc2lvbjogZnVuY3Rpb24gRW51bVR5cGVFeHRlbnNpb24oX3JlZjM3KSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMzcubmFtZSxcbiAgICAgICAgZGlyZWN0aXZlcyA9IF9yZWYzNy5kaXJlY3RpdmVzLFxuICAgICAgICB2YWx1ZXMgPSBfcmVmMzcudmFsdWVzO1xuICAgIHJldHVybiBqb2luKFsnZXh0ZW5kIGVudW0nLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKHZhbHVlcyldLCAnICcpO1xuICB9LFxuICBJbnB1dE9iamVjdFR5cGVFeHRlbnNpb246IGZ1bmN0aW9uIElucHV0T2JqZWN0VHlwZUV4dGVuc2lvbihfcmVmMzgpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzOC5uYW1lLFxuICAgICAgICBkaXJlY3RpdmVzID0gX3JlZjM4LmRpcmVjdGl2ZXMsXG4gICAgICAgIGZpZWxkcyA9IF9yZWYzOC5maWVsZHM7XG4gICAgcmV0dXJuIGpvaW4oWydleHRlbmQgaW5wdXQnLCBuYW1lLCBqb2luKGRpcmVjdGl2ZXMsICcgJyksIGJsb2NrKGZpZWxkcyldLCAnICcpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhZGREZXNjcmlwdGlvbihjYikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gam9pbihbbm9kZS5kZXNjcmlwdGlvbiwgY2Iobm9kZSldLCAnXFxuJyk7XG4gIH07XG59XG4vKipcbiAqIEdpdmVuIG1heWJlQXJyYXksIHByaW50IGFuIGVtcHR5IHN0cmluZyBpZiBpdCBpcyBudWxsIG9yIGVtcHR5LCBvdGhlcndpc2VcbiAqIHByaW50IGFsbCBpdGVtcyB0b2dldGhlciBzZXBhcmF0ZWQgYnkgc2VwYXJhdG9yIGlmIHByb3ZpZGVkXG4gKi9cblxuXG5mdW5jdGlvbiBqb2luKG1heWJlQXJyYXkpIHtcbiAgdmFyIF9tYXliZUFycmF5JGZpbHRlciRqbztcblxuICB2YXIgc2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgcmV0dXJuIChfbWF5YmVBcnJheSRmaWx0ZXIkam8gPSBtYXliZUFycmF5ID09PSBudWxsIHx8IG1heWJlQXJyYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heWJlQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0pLmpvaW4oc2VwYXJhdG9yKSkgIT09IG51bGwgJiYgX21heWJlQXJyYXkkZmlsdGVyJGpvICE9PSB2b2lkIDAgPyBfbWF5YmVBcnJheSRmaWx0ZXIkam8gOiAnJztcbn1cbi8qKlxuICogR2l2ZW4gYXJyYXksIHByaW50IGVhY2ggaXRlbSBvbiBpdHMgb3duIGxpbmUsIHdyYXBwZWQgaW4gYW5cbiAqIGluZGVudGVkIFwieyB9XCIgYmxvY2suXG4gKi9cblxuXG5mdW5jdGlvbiBibG9jayhhcnJheSkge1xuICByZXR1cm4gd3JhcCgne1xcbicsIGluZGVudChqb2luKGFycmF5LCAnXFxuJykpLCAnXFxufScpO1xufVxuLyoqXG4gKiBJZiBtYXliZVN0cmluZyBpcyBub3QgbnVsbCBvciBlbXB0eSwgdGhlbiB3cmFwIHdpdGggc3RhcnQgYW5kIGVuZCwgb3RoZXJ3aXNlIHByaW50IGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdyYXAoc3RhcnQsIG1heWJlU3RyaW5nKSB7XG4gIHZhciBlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuICByZXR1cm4gbWF5YmVTdHJpbmcgIT0gbnVsbCAmJiBtYXliZVN0cmluZyAhPT0gJycgPyBzdGFydCArIG1heWJlU3RyaW5nICsgZW5kIDogJyc7XG59XG5cbmZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgcmV0dXJuIHdyYXAoJyAgJywgc3RyLnJlcGxhY2UoL1xcbi9nLCAnXFxuICAnKSk7XG59XG5cbmZ1bmN0aW9uIGlzTXVsdGlsaW5lKHN0cikge1xuICByZXR1cm4gc3RyLmluZGV4T2YoJ1xcbicpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaGFzTXVsdGlsaW5lSXRlbXMobWF5YmVBcnJheSkge1xuICByZXR1cm4gbWF5YmVBcnJheSAhPSBudWxsICYmIG1heWJlQXJyYXkuc29tZShpc011bHRpbGluZSk7XG59XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmltcG9ydCB7IFNZTUJPTF9UT19TVFJJTkdfVEFHIH0gZnJvbSBcIi4uL3BvbHlmaWxscy9zeW1ib2xzLm1qc1wiO1xuaW1wb3J0IGluc3BlY3QgZnJvbSBcIi4uL2pzdXRpbHMvaW5zcGVjdC5tanNcIjtcbmltcG9ydCBkZXZBc3NlcnQgZnJvbSBcIi4uL2pzdXRpbHMvZGV2QXNzZXJ0Lm1qc1wiO1xuaW1wb3J0IGluc3RhbmNlT2YgZnJvbSBcIi4uL2pzdXRpbHMvaW5zdGFuY2VPZi5tanNcIjtcblxuLyoqXG4gKiBBIHJlcHJlc2VudGF0aW9uIG9mIHNvdXJjZSBpbnB1dCB0byBHcmFwaFFMLiBUaGUgYG5hbWVgIGFuZCBgbG9jYXRpb25PZmZzZXRgIHBhcmFtZXRlcnMgYXJlXG4gKiBvcHRpb25hbCwgYnV0IHRoZXkgYXJlIHVzZWZ1bCBmb3IgY2xpZW50cyB3aG8gc3RvcmUgR3JhcGhRTCBkb2N1bWVudHMgaW4gc291cmNlIGZpbGVzLlxuICogRm9yIGV4YW1wbGUsIGlmIHRoZSBHcmFwaFFMIGlucHV0IHN0YXJ0cyBhdCBsaW5lIDQwIGluIGEgZmlsZSBuYW1lZCBgRm9vLmdyYXBocWxgLCBpdCBtaWdodFxuICogYmUgdXNlZnVsIGZvciBgbmFtZWAgdG8gYmUgYFwiRm9vLmdyYXBocWxcImAgYW5kIGxvY2F0aW9uIHRvIGJlIGB7IGxpbmU6IDQwLCBjb2x1bW46IDEgfWAuXG4gKiBUaGUgYGxpbmVgIGFuZCBgY29sdW1uYCBwcm9wZXJ0aWVzIGluIGBsb2NhdGlvbk9mZnNldGAgYXJlIDEtaW5kZXhlZC5cbiAqL1xuZXhwb3J0IHZhciBTb3VyY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTb3VyY2UoYm9keSkge1xuICAgIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnR3JhcGhRTCByZXF1ZXN0JztcbiAgICB2YXIgbG9jYXRpb25PZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHtcbiAgICAgIGxpbmU6IDEsXG4gICAgICBjb2x1bW46IDFcbiAgICB9O1xuICAgIHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJyB8fCBkZXZBc3NlcnQoMCwgXCJCb2R5IG11c3QgYmUgYSBzdHJpbmcuIFJlY2VpdmVkOiBcIi5jb25jYXQoaW5zcGVjdChib2R5KSwgXCIuXCIpKTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sb2NhdGlvbk9mZnNldCA9IGxvY2F0aW9uT2Zmc2V0O1xuICAgIHRoaXMubG9jYXRpb25PZmZzZXQubGluZSA+IDAgfHwgZGV2QXNzZXJ0KDAsICdsaW5lIGluIGxvY2F0aW9uT2Zmc2V0IGlzIDEtaW5kZXhlZCBhbmQgbXVzdCBiZSBwb3NpdGl2ZS4nKTtcbiAgICB0aGlzLmxvY2F0aW9uT2Zmc2V0LmNvbHVtbiA+IDAgfHwgZGV2QXNzZXJ0KDAsICdjb2x1bW4gaW4gbG9jYXRpb25PZmZzZXQgaXMgMS1pbmRleGVkIGFuZCBtdXN0IGJlIHBvc2l0aXZlLicpO1xuICB9IC8vICRGbG93Rml4TWVbdW5zdXBwb3J0ZWQtc3ludGF4XSBGbG93IGRvZXNuJ3Qgc3VwcG9ydCBjb21wdXRlZCBwcm9wZXJ0aWVzIHlldFxuXG5cbiAgX2NyZWF0ZUNsYXNzKFNvdXJjZSwgW3tcbiAgICBrZXk6IFNZTUJPTF9UT19TVFJJTkdfVEFHLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdTb3VyY2UnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTb3VyY2U7XG59KCk7XG4vKipcbiAqIFRlc3QgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgU291cmNlIG9iamVjdC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5leHBvcnQgZnVuY3Rpb24gaXNTb3VyY2Uoc291cmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZU9mKHNvdXJjZSwgU291cmNlKTtcbn1cbiIsIi8qKlxuICogQW4gZXhwb3J0ZWQgZW51bSBkZXNjcmliaW5nIHRoZSBkaWZmZXJlbnQga2luZHMgb2YgdG9rZW5zIHRoYXQgdGhlXG4gKiBsZXhlciBlbWl0cy5cbiAqL1xuZXhwb3J0IHZhciBUb2tlbktpbmQgPSBPYmplY3QuZnJlZXplKHtcbiAgU09GOiAnPFNPRj4nLFxuICBFT0Y6ICc8RU9GPicsXG4gIEJBTkc6ICchJyxcbiAgRE9MTEFSOiAnJCcsXG4gIEFNUDogJyYnLFxuICBQQVJFTl9MOiAnKCcsXG4gIFBBUkVOX1I6ICcpJyxcbiAgU1BSRUFEOiAnLi4uJyxcbiAgQ09MT046ICc6JyxcbiAgRVFVQUxTOiAnPScsXG4gIEFUOiAnQCcsXG4gIEJSQUNLRVRfTDogJ1snLFxuICBCUkFDS0VUX1I6ICddJyxcbiAgQlJBQ0VfTDogJ3snLFxuICBQSVBFOiAnfCcsXG4gIEJSQUNFX1I6ICd9JyxcbiAgTkFNRTogJ05hbWUnLFxuICBJTlQ6ICdJbnQnLFxuICBGTE9BVDogJ0Zsb2F0JyxcbiAgU1RSSU5HOiAnU3RyaW5nJyxcbiAgQkxPQ0tfU1RSSU5HOiAnQmxvY2tTdHJpbmcnLFxuICBDT01NRU5UOiAnQ29tbWVudCdcbn0pO1xuLyoqXG4gKiBUaGUgZW51bSB0eXBlIHJlcHJlc2VudGluZyB0aGUgdG9rZW4ga2luZHMgdmFsdWVzLlxuICovXG4iLCJpbXBvcnQgaW5zcGVjdCBmcm9tIFwiLi4vanN1dGlscy9pbnNwZWN0Lm1qc1wiO1xuaW1wb3J0IHsgaXNOb2RlIH0gZnJvbSBcIi4vYXN0Lm1qc1wiO1xuLyoqXG4gKiBBIHZpc2l0b3IgaXMgcHJvdmlkZWQgdG8gdmlzaXQsIGl0IGNvbnRhaW5zIHRoZSBjb2xsZWN0aW9uIG9mXG4gKiByZWxldmFudCBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkIGR1cmluZyB0aGUgdmlzaXRvcidzIHRyYXZlcnNhbC5cbiAqL1xuXG5leHBvcnQgdmFyIFF1ZXJ5RG9jdW1lbnRLZXlzID0ge1xuICBOYW1lOiBbXSxcbiAgRG9jdW1lbnQ6IFsnZGVmaW5pdGlvbnMnXSxcbiAgT3BlcmF0aW9uRGVmaW5pdGlvbjogWyduYW1lJywgJ3ZhcmlhYmxlRGVmaW5pdGlvbnMnLCAnZGlyZWN0aXZlcycsICdzZWxlY3Rpb25TZXQnXSxcbiAgVmFyaWFibGVEZWZpbml0aW9uOiBbJ3ZhcmlhYmxlJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgVmFyaWFibGU6IFsnbmFtZSddLFxuICBTZWxlY3Rpb25TZXQ6IFsnc2VsZWN0aW9ucyddLFxuICBGaWVsZDogWydhbGlhcycsICduYW1lJywgJ2FyZ3VtZW50cycsICdkaXJlY3RpdmVzJywgJ3NlbGVjdGlvblNldCddLFxuICBBcmd1bWVudDogWyduYW1lJywgJ3ZhbHVlJ10sXG4gIEZyYWdtZW50U3ByZWFkOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBJbmxpbmVGcmFnbWVudDogWyd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEZyYWdtZW50RGVmaW5pdGlvbjogWyduYW1lJywgLy8gTm90ZTogZnJhZ21lbnQgdmFyaWFibGUgZGVmaW5pdGlvbnMgYXJlIGV4cGVyaW1lbnRhbCBhbmQgbWF5IGJlIGNoYW5nZWRcbiAgLy8gb3IgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxuICAndmFyaWFibGVEZWZpbml0aW9ucycsICd0eXBlQ29uZGl0aW9uJywgJ2RpcmVjdGl2ZXMnLCAnc2VsZWN0aW9uU2V0J10sXG4gIEludFZhbHVlOiBbXSxcbiAgRmxvYXRWYWx1ZTogW10sXG4gIFN0cmluZ1ZhbHVlOiBbXSxcbiAgQm9vbGVhblZhbHVlOiBbXSxcbiAgTnVsbFZhbHVlOiBbXSxcbiAgRW51bVZhbHVlOiBbXSxcbiAgTGlzdFZhbHVlOiBbJ3ZhbHVlcyddLFxuICBPYmplY3RWYWx1ZTogWydmaWVsZHMnXSxcbiAgT2JqZWN0RmllbGQ6IFsnbmFtZScsICd2YWx1ZSddLFxuICBEaXJlY3RpdmU6IFsnbmFtZScsICdhcmd1bWVudHMnXSxcbiAgTmFtZWRUeXBlOiBbJ25hbWUnXSxcbiAgTGlzdFR5cGU6IFsndHlwZSddLFxuICBOb25OdWxsVHlwZTogWyd0eXBlJ10sXG4gIFNjaGVtYURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnZGlyZWN0aXZlcycsICdvcGVyYXRpb25UeXBlcyddLFxuICBPcGVyYXRpb25UeXBlRGVmaW5pdGlvbjogWyd0eXBlJ10sXG4gIFNjYWxhclR5cGVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2ludGVyZmFjZXMnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXSxcbiAgRmllbGREZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ3R5cGUnLCAnZGlyZWN0aXZlcyddLFxuICBJbnB1dFZhbHVlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGl2ZXMnXSxcbiAgSW50ZXJmYWNlVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdpbnRlcmZhY2VzJywgJ2RpcmVjdGl2ZXMnLCAnZmllbGRzJ10sXG4gIFVuaW9uVHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJywgJ3R5cGVzJ10sXG4gIEVudW1UeXBlRGVmaW5pdGlvbjogWydkZXNjcmlwdGlvbicsICduYW1lJywgJ2RpcmVjdGl2ZXMnLCAndmFsdWVzJ10sXG4gIEVudW1WYWx1ZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJ10sXG4gIElucHV0T2JqZWN0VHlwZURlZmluaXRpb246IFsnZGVzY3JpcHRpb24nLCAnbmFtZScsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBEaXJlY3RpdmVEZWZpbml0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJ25hbWUnLCAnYXJndW1lbnRzJywgJ2xvY2F0aW9ucyddLFxuICBTY2hlbWFFeHRlbnNpb246IFsnZGlyZWN0aXZlcycsICdvcGVyYXRpb25UeXBlcyddLFxuICBTY2FsYXJUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcyddLFxuICBPYmplY3RUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnaW50ZXJmYWNlcycsICdkaXJlY3RpdmVzJywgJ2ZpZWxkcyddLFxuICBVbmlvblR5cGVFeHRlbnNpb246IFsnbmFtZScsICdkaXJlY3RpdmVzJywgJ3R5cGVzJ10sXG4gIEVudW1UeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICd2YWx1ZXMnXSxcbiAgSW5wdXRPYmplY3RUeXBlRXh0ZW5zaW9uOiBbJ25hbWUnLCAnZGlyZWN0aXZlcycsICdmaWVsZHMnXVxufTtcbmV4cG9ydCB2YXIgQlJFQUsgPSBPYmplY3QuZnJlZXplKHt9KTtcbi8qKlxuICogdmlzaXQoKSB3aWxsIHdhbGsgdGhyb3VnaCBhbiBBU1QgdXNpbmcgYSBkZXB0aC1maXJzdCB0cmF2ZXJzYWwsIGNhbGxpbmdcbiAqIHRoZSB2aXNpdG9yJ3MgZW50ZXIgZnVuY3Rpb24gYXQgZWFjaCBub2RlIGluIHRoZSB0cmF2ZXJzYWwsIGFuZCBjYWxsaW5nIHRoZVxuICogbGVhdmUgZnVuY3Rpb24gYWZ0ZXIgdmlzaXRpbmcgdGhhdCBub2RlIGFuZCBhbGwgb2YgaXRzIGNoaWxkIG5vZGVzLlxuICpcbiAqIEJ5IHJldHVybmluZyBkaWZmZXJlbnQgdmFsdWVzIGZyb20gdGhlIGVudGVyIGFuZCBsZWF2ZSBmdW5jdGlvbnMsIHRoZVxuICogYmVoYXZpb3Igb2YgdGhlIHZpc2l0b3IgY2FuIGJlIGFsdGVyZWQsIGluY2x1ZGluZyBza2lwcGluZyBvdmVyIGEgc3ViLXRyZWUgb2ZcbiAqIHRoZSBBU1QgKGJ5IHJldHVybmluZyBmYWxzZSksIGVkaXRpbmcgdGhlIEFTVCBieSByZXR1cm5pbmcgYSB2YWx1ZSBvciBudWxsXG4gKiB0byByZW1vdmUgdGhlIHZhbHVlLCBvciB0byBzdG9wIHRoZSB3aG9sZSB0cmF2ZXJzYWwgYnkgcmV0dXJuaW5nIEJSRUFLLlxuICpcbiAqIFdoZW4gdXNpbmcgdmlzaXQoKSB0byBlZGl0IGFuIEFTVCwgdGhlIG9yaWdpbmFsIEFTVCB3aWxsIG5vdCBiZSBtb2RpZmllZCwgYW5kXG4gKiBhIG5ldyB2ZXJzaW9uIG9mIHRoZSBBU1Qgd2l0aCB0aGUgY2hhbmdlcyBhcHBsaWVkIHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGVcbiAqIHZpc2l0IGZ1bmN0aW9uLlxuICpcbiAqICAgICBjb25zdCBlZGl0ZWRBU1QgPSB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUsIGtleSwgcGFyZW50LCBwYXRoLCBhbmNlc3RvcnMpIHtcbiAqICAgICAgICAgLy8gQHJldHVyblxuICogICAgICAgICAvLyAgIHVuZGVmaW5lZDogbm8gYWN0aW9uXG4gKiAgICAgICAgIC8vICAgZmFsc2U6IHNraXAgdmlzaXRpbmcgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgdmlzaXRvci5CUkVBSzogc3RvcCB2aXNpdGluZyBhbHRvZ2V0aGVyXG4gKiAgICAgICAgIC8vICAgbnVsbDogZGVsZXRlIHRoaXMgbm9kZVxuICogICAgICAgICAvLyAgIGFueSB2YWx1ZTogcmVwbGFjZSB0aGlzIG5vZGUgd2l0aCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlLCBrZXksIHBhcmVudCwgcGF0aCwgYW5jZXN0b3JzKSB7XG4gKiAgICAgICAgIC8vIEByZXR1cm5cbiAqICAgICAgICAgLy8gICB1bmRlZmluZWQ6IG5vIGFjdGlvblxuICogICAgICAgICAvLyAgIGZhbHNlOiBubyBhY3Rpb25cbiAqICAgICAgICAgLy8gICB2aXNpdG9yLkJSRUFLOiBzdG9wIHZpc2l0aW5nIGFsdG9nZXRoZXJcbiAqICAgICAgICAgLy8gICBudWxsOiBkZWxldGUgdGhpcyBub2RlXG4gKiAgICAgICAgIC8vICAgYW55IHZhbHVlOiByZXBsYWNlIHRoaXMgbm9kZSB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZVxuICogICAgICAgfVxuICogICAgIH0pO1xuICpcbiAqIEFsdGVybmF0aXZlbHkgdG8gcHJvdmlkaW5nIGVudGVyKCkgYW5kIGxlYXZlKCkgZnVuY3Rpb25zLCBhIHZpc2l0b3IgY2FuXG4gKiBpbnN0ZWFkIHByb3ZpZGUgZnVuY3Rpb25zIG5hbWVkIHRoZSBzYW1lIGFzIHRoZSBraW5kcyBvZiBBU1Qgbm9kZXMsIG9yXG4gKiBlbnRlci9sZWF2ZSB2aXNpdG9ycyBhdCBhIG5hbWVkIGtleSwgbGVhZGluZyB0byBmb3VyIHBlcm11dGF0aW9ucyBvZiB0aGVcbiAqIHZpc2l0b3IgQVBJOlxuICpcbiAqIDEpIE5hbWVkIHZpc2l0b3JzIHRyaWdnZXJlZCB3aGVuIGVudGVyaW5nIGEgbm9kZSBvZiBhIHNwZWNpZmljIGtpbmQuXG4gKlxuICogICAgIHZpc2l0KGFzdCwge1xuICogICAgICAgS2luZChub2RlKSB7XG4gKiAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAyKSBOYW1lZCB2aXNpdG9ycyB0aGF0IHRyaWdnZXIgdXBvbiBlbnRlcmluZyBhbmQgbGVhdmluZyBhIG5vZGUgb2ZcbiAqICAgIGEgc3BlY2lmaWMga2luZC5cbiAqXG4gKiAgICAgdmlzaXQoYXN0LCB7XG4gKiAgICAgICBLaW5kOiB7XG4gKiAgICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBlbnRlciB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICAgIGxlYXZlKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiAzKSBHZW5lcmljIHZpc2l0b3JzIHRoYXQgdHJpZ2dlciB1cG9uIGVudGVyaW5nIGFuZCBsZWF2aW5nIGFueSBub2RlLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyKG5vZGUpIHtcbiAqICAgICAgICAgLy8gZW50ZXIgYW55IG5vZGVcbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZShub2RlKSB7XG4gKiAgICAgICAgIC8vIGxlYXZlIGFueSBub2RlXG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqXG4gKiA0KSBQYXJhbGxlbCB2aXNpdG9ycyBmb3IgZW50ZXJpbmcgYW5kIGxlYXZpbmcgbm9kZXMgb2YgYSBzcGVjaWZpYyBraW5kLlxuICpcbiAqICAgICB2aXNpdChhc3QsIHtcbiAqICAgICAgIGVudGVyOiB7XG4gKiAgICAgICAgIEtpbmQobm9kZSkge1xuICogICAgICAgICAgIC8vIGVudGVyIHRoZSBcIktpbmRcIiBub2RlXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICBsZWF2ZToge1xuICogICAgICAgICBLaW5kKG5vZGUpIHtcbiAqICAgICAgICAgICAvLyBsZWF2ZSB0aGUgXCJLaW5kXCIgbm9kZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXQocm9vdCwgdmlzaXRvcikge1xuICB2YXIgdmlzaXRvcktleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFF1ZXJ5RG9jdW1lbnRLZXlzO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmLWluaXQgKi9cbiAgdmFyIHN0YWNrID0gdW5kZWZpbmVkO1xuICB2YXIgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkocm9vdCk7XG4gIHZhciBrZXlzID0gW3Jvb3RdO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGVkaXRzID0gW107XG4gIHZhciBub2RlID0gdW5kZWZpbmVkO1xuICB2YXIga2V5ID0gdW5kZWZpbmVkO1xuICB2YXIgcGFyZW50ID0gdW5kZWZpbmVkO1xuICB2YXIgcGF0aCA9IFtdO1xuICB2YXIgYW5jZXN0b3JzID0gW107XG4gIHZhciBuZXdSb290ID0gcm9vdDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZi1pbml0ICovXG5cbiAgZG8ge1xuICAgIGluZGV4Kys7XG4gICAgdmFyIGlzTGVhdmluZyA9IGluZGV4ID09PSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaXNFZGl0ZWQgPSBpc0xlYXZpbmcgJiYgZWRpdHMubGVuZ3RoICE9PSAwO1xuXG4gICAgaWYgKGlzTGVhdmluZykge1xuICAgICAga2V5ID0gYW5jZXN0b3JzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBhbmNlc3RvcnMucG9wKCk7XG5cbiAgICAgIGlmIChpc0VkaXRlZCkge1xuICAgICAgICBpZiAoaW5BcnJheSkge1xuICAgICAgICAgIG5vZGUgPSBub2RlLnNsaWNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNsb25lID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGtleXMyID0gT2JqZWN0LmtleXMobm9kZSk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICAgICAgICBjbG9uZVtrXSA9IG5vZGVba107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm9kZSA9IGNsb25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVkaXRPZmZzZXQgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBlZGl0cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICB2YXIgZWRpdEtleSA9IGVkaXRzW2lpXVswXTtcbiAgICAgICAgICB2YXIgZWRpdFZhbHVlID0gZWRpdHNbaWldWzFdO1xuXG4gICAgICAgICAgaWYgKGluQXJyYXkpIHtcbiAgICAgICAgICAgIGVkaXRLZXkgLT0gZWRpdE9mZnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5BcnJheSAmJiBlZGl0VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuc3BsaWNlKGVkaXRLZXksIDEpO1xuICAgICAgICAgICAgZWRpdE9mZnNldCsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlW2VkaXRLZXldID0gZWRpdFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHN0YWNrLmluZGV4O1xuICAgICAga2V5cyA9IHN0YWNrLmtleXM7XG4gICAgICBlZGl0cyA9IHN0YWNrLmVkaXRzO1xuICAgICAgaW5BcnJheSA9IHN0YWNrLmluQXJyYXk7XG4gICAgICBzdGFjayA9IHN0YWNrLnByZXY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IHBhcmVudCA/IGluQXJyYXkgPyBpbmRleCA6IGtleXNbaW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgbm9kZSA9IHBhcmVudCA/IHBhcmVudFtrZXldIDogbmV3Um9vdDtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhdGgucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGlmICghaXNOb2RlKG5vZGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQVNUIE5vZGU6IFwiLmNvbmNhdChpbnNwZWN0KG5vZGUpLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaXRGbiA9IGdldFZpc2l0Rm4odmlzaXRvciwgbm9kZS5raW5kLCBpc0xlYXZpbmcpO1xuXG4gICAgICBpZiAodmlzaXRGbikge1xuICAgICAgICByZXN1bHQgPSB2aXNpdEZuLmNhbGwodmlzaXRvciwgbm9kZSwga2V5LCBwYXJlbnQsIHBhdGgsIGFuY2VzdG9ycyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlZGl0cy5wdXNoKFtrZXksIHJlc3VsdF0pO1xuXG4gICAgICAgICAgaWYgKCFpc0xlYXZpbmcpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICBub2RlID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkICYmIGlzRWRpdGVkKSB7XG4gICAgICBlZGl0cy5wdXNoKFtrZXksIG5vZGVdKTtcbiAgICB9XG5cbiAgICBpZiAoaXNMZWF2aW5nKSB7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3Zpc2l0b3JLZXlzJG5vZGUka2luO1xuXG4gICAgICBzdGFjayA9IHtcbiAgICAgICAgaW5BcnJheTogaW5BcnJheSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBrZXlzOiBrZXlzLFxuICAgICAgICBlZGl0czogZWRpdHMsXG4gICAgICAgIHByZXY6IHN0YWNrXG4gICAgICB9O1xuICAgICAgaW5BcnJheSA9IEFycmF5LmlzQXJyYXkobm9kZSk7XG4gICAgICBrZXlzID0gaW5BcnJheSA/IG5vZGUgOiAoX3Zpc2l0b3JLZXlzJG5vZGUka2luID0gdmlzaXRvcktleXNbbm9kZS5raW5kXSkgIT09IG51bGwgJiYgX3Zpc2l0b3JLZXlzJG5vZGUka2luICE9PSB2b2lkIDAgPyBfdmlzaXRvcktleXMkbm9kZSRraW4gOiBbXTtcbiAgICAgIGluZGV4ID0gLTE7XG4gICAgICBlZGl0cyA9IFtdO1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGFuY2VzdG9ycy5wdXNoKHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgfVxuICB9IHdoaWxlIChzdGFjayAhPT0gdW5kZWZpbmVkKTtcblxuICBpZiAoZWRpdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgbmV3Um9vdCA9IGVkaXRzW2VkaXRzLmxlbmd0aCAtIDFdWzFdO1xuICB9XG5cbiAgcmV0dXJuIG5ld1Jvb3Q7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmlzaXRvciBpbnN0YW5jZSB3aGljaCBkZWxlZ2F0ZXMgdG8gbWFueSB2aXNpdG9ycyB0byBydW4gaW5cbiAqIHBhcmFsbGVsLiBFYWNoIHZpc2l0b3Igd2lsbCBiZSB2aXNpdGVkIGZvciBlYWNoIG5vZGUgYmVmb3JlIG1vdmluZyBvbi5cbiAqXG4gKiBJZiBhIHByaW9yIHZpc2l0b3IgZWRpdHMgYSBub2RlLCBubyBmb2xsb3dpbmcgdmlzaXRvcnMgd2lsbCBzZWUgdGhhdCBub2RlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEluUGFyYWxsZWwodmlzaXRvcnMpIHtcbiAgdmFyIHNraXBwaW5nID0gbmV3IEFycmF5KHZpc2l0b3JzLmxlbmd0aCk7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNraXBwaW5nW2ldID09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZm4gPSBnZXRWaXNpdEZuKHZpc2l0b3JzW2ldLCBub2RlLmtpbmQsXG4gICAgICAgICAgLyogaXNMZWF2aW5nICovXG4gICAgICAgICAgZmFsc2UpO1xuXG4gICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodmlzaXRvcnNbaV0sIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHNraXBwaW5nW2ldID0gbm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBCUkVBSykge1xuICAgICAgICAgICAgICBza2lwcGluZ1tpXSA9IEJSRUFLO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGVhdmU6IGZ1bmN0aW9uIGxlYXZlKG5vZGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlzaXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNraXBwaW5nW2ldID09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZm4gPSBnZXRWaXNpdEZuKHZpc2l0b3JzW2ldLCBub2RlLmtpbmQsXG4gICAgICAgICAgLyogaXNMZWF2aW5nICovXG4gICAgICAgICAgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh2aXNpdG9yc1tpXSwgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHtcbiAgICAgICAgICAgICAgc2tpcHBpbmdbaV0gPSBCUkVBSztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChza2lwcGluZ1tpXSA9PT0gbm9kZSkge1xuICAgICAgICAgIHNraXBwaW5nW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8qKlxuICogR2l2ZW4gYSB2aXNpdG9yIGluc3RhbmNlLCBpZiBpdCBpcyBsZWF2aW5nIG9yIG5vdCwgYW5kIGEgbm9kZSBraW5kLCByZXR1cm5cbiAqIHRoZSBmdW5jdGlvbiB0aGUgdmlzaXRvciBydW50aW1lIHNob3VsZCBjYWxsLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXNpdEZuKHZpc2l0b3IsIGtpbmQsIGlzTGVhdmluZykge1xuICB2YXIga2luZFZpc2l0b3IgPSB2aXNpdG9yW2tpbmRdO1xuXG4gIGlmIChraW5kVmlzaXRvcikge1xuICAgIGlmICghaXNMZWF2aW5nICYmIHR5cGVvZiBraW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kKCkge30gfVxuICAgICAgcmV0dXJuIGtpbmRWaXNpdG9yO1xuICAgIH1cblxuICAgIHZhciBraW5kU3BlY2lmaWNWaXNpdG9yID0gaXNMZWF2aW5nID8ga2luZFZpc2l0b3IubGVhdmUgOiBraW5kVmlzaXRvci5lbnRlcjtcblxuICAgIGlmICh0eXBlb2Yga2luZFNwZWNpZmljVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8geyBLaW5kOiB7IGVudGVyKCkge30sIGxlYXZlKCkge30gfSB9XG4gICAgICByZXR1cm4ga2luZFNwZWNpZmljVmlzaXRvcjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNwZWNpZmljVmlzaXRvciA9IGlzTGVhdmluZyA/IHZpc2l0b3IubGVhdmUgOiB2aXNpdG9yLmVudGVyO1xuXG4gICAgaWYgKHNwZWNpZmljVmlzaXRvcikge1xuICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpY1Zpc2l0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8geyBlbnRlcigpIHt9LCBsZWF2ZSgpIHt9IH1cbiAgICAgICAgcmV0dXJuIHNwZWNpZmljVmlzaXRvcjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNwZWNpZmljS2luZFZpc2l0b3IgPSBzcGVjaWZpY1Zpc2l0b3Jba2luZF07XG5cbiAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWNLaW5kVmlzaXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyB7IGVudGVyOiB7IEtpbmQoKSB7fSB9LCBsZWF2ZTogeyBLaW5kKCkge30gfSB9XG4gICAgICAgIHJldHVybiBzcGVjaWZpY0tpbmRWaXNpdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSW4gRVMyMDE1IChvciBhIHBvbHlmaWxsZWQpIGVudmlyb25tZW50LCB0aGlzIHdpbGwgYmUgU3ltYm9sLml0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5leHBvcnQgdmFyIFNZTUJPTF9JVEVSQVRPUiA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yICE9IG51bGwgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7IC8vIEluIEVTMjAxNyAob3IgYSBwb2x5ZmlsbGVkKSBlbnZpcm9ubWVudCwgdGhpcyB3aWxsIGJlIFN5bWJvbC5hc3luY0l0ZXJhdG9yXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoU2VlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyYXBocWwvZ3JhcGhxbC1qcy9pc3N1ZXMvMjMxNycpXG5cbmV4cG9ydCB2YXIgU1lNQk9MX0FTWU5DX0lURVJBVE9SID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvciAhPSBudWxsID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJzsgLy8gaXN0YW5idWwgaWdub3JlIG5leHQgKFNlZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaHFsL2dyYXBocWwtanMvaXNzdWVzLzIzMTcnKVxuXG5leHBvcnQgdmFyIFNZTUJPTF9UT19TVFJJTkdfVEFHID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcgIT0gbnVsbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6ICdAQHRvU3RyaW5nVGFnJztcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gKF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB2YXIgaSwgc291cmNlLCBrZXk7XG4gICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbihxdWVyeSkge1xuICBmdW5jdGlvbiBfcmVmKHJlc3VsdCkge1xuICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBmZXRjaGluZzogITEsXG4gICAgICAgIHN0YWxlOiAhIXJlc3VsdC5zdGFsZSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IsXG4gICAgICAgIGV4dGVuc2lvbnM6IHJlc3VsdC5leHRlbnNpb25zLFxuICAgICAgICBvcGVyYXRpb246IHJlc3VsdC5vcGVyYXRpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIF9yZWYyKCkge1xuICAgIGlzTW91bnRlZC5jdXJyZW50ID0gITE7XG4gIH1cbiAgdmFyIGlzTW91bnRlZCA9IHVzZVJlZighMCksIGNsaWVudCA9IHVzZUNsaWVudCgpLCByZWYgPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpLCBzdGF0ZSA9IHJlZlswXSwgc2V0U3RhdGUgPSByZWZbMV0sIGV4ZWN1dGVNdXRhdGlvbiA9IHVzZUNhbGxiYWNrKChmdW5jdGlvbih2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBzZXRTdGF0ZShfZXh0ZW5kcyh7fSwgaW5pdGlhbFN0YXRlLCB7XG4gICAgICBmZXRjaGluZzogITBcbiAgICB9KSk7XG4gICAgcmV0dXJuIHRvUHJvbWlzZShjbGllbnQuZXhlY3V0ZU11dGF0aW9uKGNyZWF0ZVJlcXVlc3QocXVlcnksIHZhcmlhYmxlcyksIGNvbnRleHQgfHwge30pKS50aGVuKF9yZWYpO1xuICB9KSwgWyBjbGllbnQsIHF1ZXJ5LCBzZXRTdGF0ZSBdKTtcbiAgdXNlRWZmZWN0KChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3JlZjI7XG4gIH0pLCBbXSk7XG4gIHJldHVybiBbIHN0YXRlLCBleGVjdXRlTXV0YXRpb24gXTtcbn1cblxuZnVuY3Rpb24gdXNlUmVxdWVzdChxdWVyeSwgdmFyaWFibGVzKSB7XG4gIHZhciBwcmV2ID0gdXNlUmVmKHZvaWQgMCk7XG4gIHJldHVybiB1c2VNZW1vKChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QocXVlcnksIHZhcmlhYmxlcyk7XG4gICAgaWYgKHZvaWQgMCAhPT0gcHJldi5jdXJyZW50ICYmIHByZXYuY3VycmVudC5rZXkgPT09IHJlcXVlc3Qua2V5KSB7XG4gICAgICByZXR1cm4gcHJldi5jdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2LmN1cnJlbnQgPSByZXF1ZXN0O1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuICB9KSwgWyBxdWVyeSwgdmFyaWFibGVzIF0pO1xufVxuXG5mdW5jdGlvbiB1c2VRdWVyeShhcmdzKSB7XG4gIGZ1bmN0aW9uIF9yZWYocmVzdWx0KSB7XG4gICAgY2FjaGUuc2V0KHJlcXVlc3Qua2V5LCByZXN1bHQpO1xuICB9XG4gIHZhciBjbGllbnQgPSB1c2VDbGllbnQoKSwgY2FjaGUgPSBnZXRDYWNoZUZvckNsaWVudChjbGllbnQpLCBzdXNwZW5zZSA9IGlzU3VzcGVuc2UoY2xpZW50LCBhcmdzLmNvbnRleHQpLCByZXF1ZXN0ID0gdXNlUmVxdWVzdChhcmdzLnF1ZXJ5LCBhcmdzLnZhcmlhYmxlcyksIHNvdXJjZSA9IHVzZU1lbW8oKGZ1bmN0aW9uKCkge1xuICAgIGlmIChhcmdzLnBhdXNlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHNvdXJjZSA9IGNsaWVudC5leGVjdXRlUXVlcnkocmVxdWVzdCwgX2V4dGVuZHMoe30sIHtcbiAgICAgIHJlcXVlc3RQb2xpY3k6IGFyZ3MucmVxdWVzdFBvbGljeVxuICAgIH0sIGFyZ3MuY29udGV4dCkpO1xuICAgIHJldHVybiBzdXNwZW5zZSA/IG9uUHVzaChfcmVmKShzb3VyY2UpIDogc291cmNlO1xuICB9KSwgWyBjbGllbnQsIHJlcXVlc3QsIHN1c3BlbnNlLCBhcmdzLnBhdXNlLCBhcmdzLnJlcXVlc3RQb2xpY3ksIGFyZ3MuY29udGV4dCBdKSwgZ2V0U25hcHNob3QgPSB1c2VDYWxsYmFjaygoZnVuY3Rpb24oc291cmNlLCBzdXNwZW5zZSkge1xuICAgIHZhciByZXN1bHQsIHJlc29sdmUsIHN1YnNjcmlwdGlvbiwgcHJvbWlzZTtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmV0Y2hpbmc6ICExXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoIShyZXN1bHQgPSBjYWNoZS5nZXQocmVxdWVzdC5rZXkpKSkge1xuICAgICAgc3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlKChmdW5jdGlvbiBfcmVmMihfcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IF9yZXN1bHQ7XG4gICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KSkodGFrZVdoaWxlKChmdW5jdGlvbiBfcmVmMygpIHtcbiAgICAgICAgcmV0dXJuIHN1c3BlbnNlICYmICFyZXNvbHZlIHx8ICFyZXN1bHQ7XG4gICAgICB9KSkoc291cmNlKSk7XG4gICAgICBpZiAobnVsbCA9PSByZXN1bHQgJiYgc3VzcGVuc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChmdW5jdGlvbiBfcmVmNChfcmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjYWNoZS5zZXQocmVxdWVzdC5rZXksIHByb21pc2UpO1xuICAgICAgICB0aHJvdyBwcm9taXNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdXNwZW5zZSAmJiBudWxsICE9IHJlc3VsdCAmJiBcInRoZW5cIiBpbiByZXN1bHQpIHtcbiAgICAgIHRocm93IHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCB8fCB7XG4gICAgICBmZXRjaGluZzogITBcbiAgICB9O1xuICB9KSwgWyByZXF1ZXN0IF0pLCBkZXBzID0gWyBjbGllbnQsIHJlcXVlc3QsIGFyZ3MucmVxdWVzdFBvbGljeSwgYXJncy5jb250ZXh0LCBhcmdzLnBhdXNlIF0sIHJlZiA9IHVzZVN0YXRlKChmdW5jdGlvbigpIHtcbiAgICBjdXJyZW50SW5pdCA9ICEwO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gWyBzb3VyY2UsIGNvbXB1dGVOZXh0U3RhdGUoaW5pdGlhbFN0YXRlLCBnZXRTbmFwc2hvdChzb3VyY2UsIHN1c3BlbnNlKSksIGRlcHMgXTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY3VycmVudEluaXQgPSAhMTtcbiAgICB9XG4gIH0pKSwgc3RhdGUgPSByZWZbMF0sIHNldFN0YXRlID0gcmVmWzFdLCBjdXJyZW50UmVzdWx0ID0gc3RhdGVbMV07XG4gIGlmIChzb3VyY2UgIT09IHN0YXRlWzBdICYmIGhhc0RlcHNDaGFuZ2VkKHN0YXRlWzJdLCBkZXBzKSkge1xuICAgIHNldFN0YXRlKFsgc291cmNlLCBjdXJyZW50UmVzdWx0ID0gY29tcHV0ZU5leHRTdGF0ZShzdGF0ZVsxXSwgZ2V0U25hcHNob3Qoc291cmNlLCBzdXNwZW5zZSkpLCBkZXBzIF0pO1xuICB9XG4gIHVzZUVmZmVjdCgoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiwgc291cmNlID0gc3RhdGVbMF0sIHJlcXVlc3QgPSBzdGF0ZVsyXVsxXSwgaGFzUmVzdWx0ID0gITEsIHVwZGF0ZVJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgaGFzUmVzdWx0ID0gITA7XG4gICAgICBpZiAoIWN1cnJlbnRJbml0KSB7XG4gICAgICAgIHNldFN0YXRlKChmdW5jdGlvbiBfcmVmNShzdGF0ZSkge1xuICAgICAgICAgIHZhciBuZXh0UmVzdWx0ID0gY29tcHV0ZU5leHRTdGF0ZShzdGF0ZVsxXSwgcmVzdWx0KTtcbiAgICAgICAgICByZXR1cm4gc3RhdGVbMV0gIT09IG5leHRSZXN1bHQgPyBbIHN0YXRlWzBdLCBuZXh0UmVzdWx0LCBzdGF0ZVsyXSBdIDogc3RhdGU7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIHN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZSh1cGRhdGVSZXN1bHQpKG9uRW5kKChmdW5jdGlvbiBfcmVmNigpIHtcbiAgICAgICAgdXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICBmZXRjaGluZzogITFcbiAgICAgICAgfSk7XG4gICAgICB9KSkoc291cmNlKSk7XG4gICAgICBpZiAoIWhhc1Jlc3VsdCkge1xuICAgICAgICB1cGRhdGVSZXN1bHQoe1xuICAgICAgICAgIGZldGNoaW5nOiAhMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBfcmVmNygpIHtcbiAgICAgICAgY2FjaGUuZGlzcG9zZShyZXF1ZXN0LmtleSk7XG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlUmVzdWx0KHtcbiAgICAgICAgZmV0Y2hpbmc6ICExXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCBbIGNhY2hlLCBzdGF0ZVswXSwgc3RhdGVbMl1bMV0gXSk7XG4gIHJldHVybiBbIGN1cnJlbnRSZXN1bHQsIHVzZUNhbGxiYWNrKChmdW5jdGlvbihvcHRzKSB7XG4gICAgdmFyIGNvbnRleHQgPSBfZXh0ZW5kcyh7fSwge1xuICAgICAgcmVxdWVzdFBvbGljeTogYXJncy5yZXF1ZXN0UG9saWN5XG4gICAgfSwgYXJncy5jb250ZXh0LCBvcHRzKSwgc291cmNlID0gY2xpZW50LmV4ZWN1dGVRdWVyeShyZXF1ZXN0LCBjb250ZXh0KTtcbiAgICBzZXRTdGF0ZSgoZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHZhciBzbmFwc2hvdCA9IFwibmV0d29yay1vbmx5XCIgIT09IGNvbnRleHQucmVxdWVzdFBvbGljeSA/IGdldFNuYXBzaG90KHNvdXJjZSwgITEpIDoge1xuICAgICAgICBmZXRjaGluZzogITBcbiAgICAgIH0sIG5leHRSZXN1bHQgPSBjb21wdXRlTmV4dFN0YXRlKHN0YXRlWzFdLCBzbmFwc2hvdCk7XG4gICAgICByZXR1cm4gc3RhdGVbMV0gIT09IG5leHRSZXN1bHQgPyBbIHNvdXJjZSwgbmV4dFJlc3VsdCwgc3RhdGVbMl0gXSA6IHN0YXRlO1xuICAgIH0pKTtcbiAgfSksIFsgY2xpZW50LCByZXF1ZXN0LCBnZXRTbmFwc2hvdCwgYXJncy5yZXF1ZXN0UG9saWN5LCBhcmdzLmNvbnRleHQgXSkgXTtcbn1cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKGFyZ3MsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gX3JlZihyZXN1bHQpIHtcbiAgICBzZXRTdGF0ZSgoZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgIHZhciBuZXh0UmVzdWx0ID0gY29tcHV0ZU5leHRTdGF0ZShzdGF0ZVsxXSwgcmVzdWx0KTtcbiAgICAgIGlmIChzdGF0ZVsxXSA9PT0gbmV4dFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlclJlZi5jdXJyZW50ICYmIHN0YXRlWzFdLmRhdGEgIT09IG5leHRSZXN1bHQuZGF0YSkge1xuICAgICAgICBuZXh0UmVzdWx0LmRhdGEgPSBoYW5kbGVyUmVmLmN1cnJlbnQoc3RhdGVbMV0uZGF0YSwgbmV4dFJlc3VsdC5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbIHN0YXRlWzBdLCBuZXh0UmVzdWx0LCBzdGF0ZVsyXSBdO1xuICAgIH0pKTtcbiAgfVxuICB2YXIgc291cmNlLCBkZXBzLCByZWYsIHN0YXRlLCBzZXRTdGF0ZSwgY3VycmVudFJlc3VsdCwgY2xpZW50ID0gdXNlQ2xpZW50KCksIHJlcXVlc3QgPSB1c2VSZXF1ZXN0KGFyZ3MucXVlcnksIGFyZ3MudmFyaWFibGVzKSwgaGFuZGxlclJlZiA9IHVzZVJlZihoYW5kbGVyKTtcbiAgaGFuZGxlclJlZi5jdXJyZW50ID0gaGFuZGxlcjtcbiAgc291cmNlID0gdXNlTWVtbygoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICFhcmdzLnBhdXNlID8gY2xpZW50LmV4ZWN1dGVTdWJzY3JpcHRpb24ocmVxdWVzdCwgYXJncy5jb250ZXh0KSA6IG51bGw7XG4gIH0pLCBbIGNsaWVudCwgcmVxdWVzdCwgYXJncy5wYXVzZSwgYXJncy5jb250ZXh0IF0pO1xuICBkZXBzID0gWyBjbGllbnQsIHJlcXVlc3QsIGFyZ3MuY29udGV4dCwgYXJncy5wYXVzZSBdO1xuICByZWYgPSB1c2VTdGF0ZSgoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFsgc291cmNlLCBfZXh0ZW5kcyh7fSwgaW5pdGlhbFN0YXRlLCB7XG4gICAgICBmZXRjaGluZzogISFzb3VyY2VcbiAgICB9KSwgZGVwcyBdO1xuICB9KSk7XG4gIHNldFN0YXRlID0gcmVmWzFdO1xuICBjdXJyZW50UmVzdWx0ID0gKHN0YXRlID0gcmVmWzBdKVsxXTtcbiAgaWYgKHNvdXJjZSAhPT0gc3RhdGVbMF0gJiYgaGFzRGVwc0NoYW5nZWQoc3RhdGVbMl0sIGRlcHMpKSB7XG4gICAgc2V0U3RhdGUoWyBzb3VyY2UsIGN1cnJlbnRSZXN1bHQgPSBjb21wdXRlTmV4dFN0YXRlKHN0YXRlWzFdLCB7XG4gICAgICBmZXRjaGluZzogISFzb3VyY2VcbiAgICB9KSwgZGVwcyBdKTtcbiAgfVxuICB1c2VFZmZlY3QoKGZ1bmN0aW9uKCkge1xuICAgIHZhciB1cGRhdGVSZXN1bHQgPSBfcmVmO1xuICAgIGlmIChzdGF0ZVswXSkge1xuICAgICAgcmV0dXJuIHN1YnNjcmliZSh1cGRhdGVSZXN1bHQpKG9uRW5kKChmdW5jdGlvbiBfcmVmMigpIHtcbiAgICAgICAgdXBkYXRlUmVzdWx0KHtcbiAgICAgICAgICBmZXRjaGluZzogITFcbiAgICAgICAgfSk7XG4gICAgICB9KSkoc3RhdGVbMF0pKS51bnN1YnNjcmliZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlUmVzdWx0KHtcbiAgICAgICAgZmV0Y2hpbmc6ICExXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCBbIHN0YXRlWzBdIF0pO1xuICByZXR1cm4gWyBjdXJyZW50UmVzdWx0LCB1c2VDYWxsYmFjaygoZnVuY3Rpb24ob3B0cykge1xuICAgIHZhciBzb3VyY2UgPSBjbGllbnQuZXhlY3V0ZVN1YnNjcmlwdGlvbihyZXF1ZXN0LCBfZXh0ZW5kcyh7fSwgYXJncy5jb250ZXh0LCBvcHRzKSk7XG4gICAgc2V0U3RhdGUoKGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICByZXR1cm4gWyBzb3VyY2UsIHN0YXRlWzFdLCBzdGF0ZVsyXSBdO1xuICAgIH0pKTtcbiAgfSksIFsgY2xpZW50LCBhcmdzLmNvbnRleHQsIHJlcXVlc3QgXSkgXTtcbn1cblxuZnVuY3Rpb24gTXV0YXRpb24ocHJvcHMpIHtcbiAgdmFyIG11dGF0aW9uID0gdXNlTXV0YXRpb24ocHJvcHMucXVlcnkpO1xuICByZXR1cm4gcHJvcHMuY2hpbGRyZW4oX2V4dGVuZHMoe30sIG11dGF0aW9uWzBdLCB7XG4gICAgZXhlY3V0ZU11dGF0aW9uOiBtdXRhdGlvblsxXVxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIFF1ZXJ5KHByb3BzKSB7XG4gIHZhciBxdWVyeSA9IHVzZVF1ZXJ5KHByb3BzKTtcbiAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKF9leHRlbmRzKHt9LCBxdWVyeVswXSwge1xuICAgIGV4ZWN1dGVRdWVyeTogcXVlcnlbMV1cbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBTdWJzY3JpcHRpb24ocHJvcHMpIHtcbiAgdmFyIHN1YnNjcmlwdGlvbiA9IHVzZVN1YnNjcmlwdGlvbihwcm9wcywgcHJvcHMuaGFuZGxlcik7XG4gIHJldHVybiBwcm9wcy5jaGlsZHJlbihfZXh0ZW5kcyh7fSwgc3Vic2NyaXB0aW9uWzBdLCB7XG4gICAgZXhlY3V0ZVN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uWzFdXG4gIH0pKTtcbn1cblxudmFyIGRlZmF1bHRDbGllbnQsIENvbnRleHQsIFByb3ZpZGVyLCBDb25zdW1lciwgaGFzV2FybmVkQWJvdXREZWZhdWx0LCB1c2VDbGllbnQsIGluaXRpYWxTdGF0ZSwgaXNTaGFsbG93RGlmZmVyZW50LCBjb21wdXRlTmV4dFN0YXRlLCBoYXNEZXBzQ2hhbmdlZCwgZ2V0Q2FjaGVGb3JDbGllbnQsIGlzU3VzcGVuc2UsIGN1cnJlbnRJbml0O1xuXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZVJlcXVlc3QgfSBmcm9tIFwiQHVycWwvY29yZVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiQHVycWwvY29yZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHRvUHJvbWlzZSwgc3Vic2NyaWJlLCBvblB1c2gsIHRha2VXaGlsZSwgb25FbmQgfSBmcm9tIFwid29ua2FcIjtcblxuZGVmYXVsdENsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHVybDogXCIvZ3JhcGhxbFwiXG59KTtcblxuUHJvdmlkZXIgPSAoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdENsaWVudCkpLlByb3ZpZGVyO1xuXG5Db25zdW1lciA9IENvbnRleHQuQ29uc3VtZXI7XG5cbmhhc1dhcm5lZEFib3V0RGVmYXVsdCA9ICExO1xuXG51c2VDbGllbnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGNsaWVudCA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgY2xpZW50ID09PSBkZWZhdWx0Q2xpZW50ICYmICFoYXNXYXJuZWRBYm91dERlZmF1bHQpIHtcbiAgICBoYXNXYXJuZWRBYm91dERlZmF1bHQgPSAhMDtcbiAgICBjb25zb2xlLndhcm4oXCJEZWZhdWx0IENsaWVudDogTm8gY2xpZW50IGhhcyBiZWVuIHNwZWNpZmllZCB1c2luZyB1cnFsJ3MgUHJvdmlkZXIuVGhpcyBtZWFucyB0aGF0IHVycWwgd2lsbCBiZSBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdHMgaW5jbHVkaW5nIG1ha2luZyByZXF1ZXN0cyB0byBgL2dyYXBocWxgLlxcbklmIHRoYXQncyBub3Qgd2hhdCB5b3Ugd2FudCwgcGxlYXNlIGNyZWF0ZSBhIGNsaWVudCBhbmQgYWRkIGEgUHJvdmlkZXIuXCIpO1xuICB9XG4gIHJldHVybiBjbGllbnQ7XG59O1xuXG5pbml0aWFsU3RhdGUgPSB7XG4gIGZldGNoaW5nOiAhMSxcbiAgc3RhbGU6ICExLFxuICBlcnJvcjogdm9pZCAwLFxuICBkYXRhOiB2b2lkIDAsXG4gIGV4dGVuc2lvbnM6IHZvaWQgMCxcbiAgb3BlcmF0aW9uOiB2b2lkIDBcbn07XG5cbmlzU2hhbGxvd0RpZmZlcmVudCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHgsIHgkMTtcbiAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGEgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgYikge1xuICAgIHJldHVybiBhICE9PSBiO1xuICB9XG4gIGZvciAoeCBpbiBhKSB7XG4gICAgaWYgKCEoeCBpbiBiKSkge1xuICAgICAgcmV0dXJuICEwO1xuICAgIH1cbiAgfVxuICBmb3IgKHgkMSBpbiBiKSB7XG4gICAgaWYgKGFbeCQxXSAhPT0gYlt4JDFdKSB7XG4gICAgICByZXR1cm4gITA7XG4gICAgfVxuICB9XG4gIHJldHVybiAhMTtcbn07XG5cbmNvbXB1dGVOZXh0U3RhdGUgPSBmdW5jdGlvbihwcmV2U3RhdGUsIHJlc3VsdCkge1xuICB2YXIgbmV3U3RhdGUgPSBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLCByZXN1bHQsIHtcbiAgICBmZXRjaGluZzogISFyZXN1bHQuZmV0Y2hpbmcsXG4gICAgc3RhbGU6ICEhcmVzdWx0LnN0YWxlXG4gIH0pO1xuICByZXR1cm4gaXNTaGFsbG93RGlmZmVyZW50KHByZXZTdGF0ZSwgbmV3U3RhdGUpID8gbmV3U3RhdGUgOiBwcmV2U3RhdGU7XG59O1xuXG5oYXNEZXBzQ2hhbmdlZCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBiLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICByZXR1cm4gITA7XG4gICAgfVxuICB9XG4gIHJldHVybiAhMTtcbn07XG5cbmdldENhY2hlRm9yQ2xpZW50ID0gZnVuY3Rpb24oY2xpZW50KSB7XG4gIHZhciByZWNsYWltLCBtYXA7XG4gIGlmICghY2xpZW50Ll9yZWFjdCkge1xuICAgIHJlY2xhaW0gPSBuZXcgU2V0O1xuICAgIG1hcCA9IG5ldyBNYXA7XG4gICAgaWYgKGNsaWVudC5vcGVyYXRpb25zJCkge1xuICAgICAgc3Vic2NyaWJlKChmdW5jdGlvbiBfcmVmKG9wZXJhdGlvbikge1xuICAgICAgICBpZiAoXCJ0ZWFyZG93blwiID09PSBvcGVyYXRpb24ua2luZCAmJiByZWNsYWltLmhhcyhvcGVyYXRpb24ua2V5KSkge1xuICAgICAgICAgIHJlY2xhaW0uZGVsZXRlKG9wZXJhdGlvbi5rZXkpO1xuICAgICAgICAgIG1hcC5kZWxldGUob3BlcmF0aW9uLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pKShjbGllbnQub3BlcmF0aW9ucyQpO1xuICAgIH1cbiAgICBjbGllbnQuX3JlYWN0ID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBfZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gbWFwLmdldChrZXkpO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gX3NldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHJlY2xhaW0uZGVsZXRlKGtleSk7XG4gICAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZGlzcG9zZTogZnVuY3Rpb24gX2Rpc3Bvc2Uoa2V5KSB7XG4gICAgICAgIHJlY2xhaW0uYWRkKGtleSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICByZXR1cm4gY2xpZW50Ll9yZWFjdDtcbn07XG5cbmlzU3VzcGVuc2UgPSBmdW5jdGlvbihjbGllbnQsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGNsaWVudC5zdXNwZW5zZSAmJiAoIWNvbnRleHQgfHwgITEgIT09IGNvbnRleHQuc3VzcGVuc2UpO1xufTtcblxuY3VycmVudEluaXQgPSAhMTtcblxuZXhwb3J0IHsgQ29uc3VtZXIsIENvbnRleHQsIE11dGF0aW9uLCBQcm92aWRlciwgUXVlcnksIFN1YnNjcmlwdGlvbiwgdXNlQ2xpZW50LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVN1YnNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJxbC5lcy5qcy5tYXBcbiIsImZ1bmN0aW9uIGwoYSwgYikge1xuICBiLnRhZyA9IGE7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBtKCkge31cblxuZnVuY3Rpb24gcChhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHZhciBjID0gYS5sZW5ndGg7XG4gICAgbGV0IGQgPSAhMSxcbiAgICAgIGUgPSAhMSxcbiAgICAgIGYgPSAhMSxcbiAgICAgIGcgPSAwO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgZCA9ICEwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZSkge1xuICAgICAgICAgICAgZiA9ICEwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGUgPSBmID0gITA7IGYgJiYgIWQ7ICkge1xuICAgICAgICAgICAgICBnIDwgYyA/ICgoaCA9IGFbZ10pLCAoZyA9IChnICsgMSkgfCAwKSwgKGYgPSAhMSksIGIobCgxLCBbaF0pKSkgOiAoKGQgPSAhMCksIGIoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZSA9ICExO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcigpIHt9XG5cbmZ1bmN0aW9uIHQoYSkge1xuICBhKDApO1xufVxuXG5mdW5jdGlvbiB1KGEpIHtcbiAgbGV0IGIgPSAhMTtcbiAgYShcbiAgICBsKDAsIFtcbiAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGMgPyAoYiA9ICEwKSA6IGIgfHwgYSgwKTtcbiAgICAgIH0sXG4gICAgXSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdyhhKSB7XG4gIGlmICh2b2lkIDAgPT09IGEpIHtcbiAgICByZXR1cm4gKChhID0gW3YsIDBdKS50YWcgPSAyNTYpLCBhO1xuICB9XG4gIGlmIChudWxsID09PSBhIHx8IGFbMF0gIT09IHYpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuICAoYSA9IFt2LCAoYVsxXSArIDEpIHwgMF0pLnRhZyA9IDI1NjtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIHgoYSkge1xuICBpZiAobnVsbCA9PT0gYSB8fCBhWzBdICE9PSB2KSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgaWYgKDAgIT09IChhID0gYVsxXSkpIHtcbiAgICByZXR1cm4gW3YsIChhIC0gMSkgfCAwXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB6KGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGsgJiZcbiAgICAgICAgICAgICgoayA9ICExKSxcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gKGIgPSBlLnNoaWZ0KCkpXG4gICAgICAgICAgICAgID8gKChiID0gYSh4KGIpKSksIChrID0gITApLCBiKGQpKVxuICAgICAgICAgICAgICA6IHFcbiAgICAgICAgICAgICAgPyBjKDApXG4gICAgICAgICAgICAgIDogZyB8fCAoKGcgPSAhMCksIGYoMCkpKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGsgJiYgKGMoYiksIG4gPyAobiA9ICExKSA6IGgoMCkpXG4gICAgICAgICAgOiAoKGggPSBiID0gYlswXSksIChuID0gITEpLCBiKDApKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gW10sXG4gICAgICAgIGYgPSBtLFxuICAgICAgICBnID0gITEsXG4gICAgICAgIGggPSBtLFxuICAgICAgICBrID0gITEsXG4gICAgICAgIG4gPSAhMSxcbiAgICAgICAgcSA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gcSB8fCAoKHEgPSAhMCksIGsgfHwgMCAhPT0gZS5sZW5ndGggfHwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBxIHx8ICgoYiA9IGJbMF0pLCAoZyA9ICExKSwgayA/IGUucHVzaChiKSA6ICgoYiA9IGEoYikpLCAoayA9ICEwKSwgYihkKSkpXG4gICAgICAgICAgOiAoZiA9IGJbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgaWYgKChxIHx8ICgocSA9ICEwKSwgZigxKSksIGspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChrID0gITEpLCBoKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBxIHx8IGcgfHwgKChnID0gITApLCBmKDApKSwgayAmJiAhbiAmJiAoKG4gPSAhMCksIGgoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIEEoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gQihhKSB7XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBDKGEpIHtcbiAgcmV0dXJuIGEoMCk7XG59XG5cbmZ1bmN0aW9uIEQoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBlID0gbSxcbiAgICAgICAgZiA9ICExLFxuICAgICAgICBnID0gW10sXG4gICAgICAgIGggPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGggfHwgKChoID0gITApLCAwID09PSBnLmxlbmd0aCAmJiBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGggfHxcbiAgICAgICAgICAgICgoZiA9ICExKSxcbiAgICAgICAgICAgIChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBiKGEpIHtcbiAgICAgICAgICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgICAgICAgICAgPyAwICE9PSBnLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAoKGcgPSBnLmZpbHRlcihkKSksXG4gICAgICAgICAgICAgICAgICAgIChhID0gMCA9PT0gZy5sZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICBoICYmIGEgPyBjKDApIDogIWYgJiYgYSAmJiAoKGYgPSAhMCksIGUoMCkpKVxuICAgICAgICAgICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgICAgICAgICAgPyAwICE9PSBnLmxlbmd0aCAmJiAoYyhsKDEsIFthWzBdXSkpLCBrKDApKVxuICAgICAgICAgICAgICAgICAgOiAoKGsgPSBhID0gYVswXSksIChnID0gZy5jb25jYXQoYSkpLCBhKDApKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmdW5jdGlvbiBkKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgayA9IG07XG4gICAgICAgICAgICAgIDEgPT09IGEubGVuZ3RoID8gYShiKSA6IGEuYmluZChudWxsLCBiKTtcbiAgICAgICAgICAgIH0pKGEoYlswXSkpLFxuICAgICAgICAgICAgZiB8fCAoKGYgPSAhMCksIGUoMCkpKVxuICAgICAgICAgIDogKGUgPSBiWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGFcbiAgICAgICAgICAgICAgPyAoaCB8fCAoKGggPSAhMCksIGUoYSkpLFxuICAgICAgICAgICAgICAgIGcuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGMoYSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKGcgPSBbXSkpXG4gICAgICAgICAgICAgIDogKGYgfHwgaCA/IChmID0gITEpIDogKChmID0gITApLCBlKDApKSwgZy5mb3JFYWNoKEMpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBFKGEpIHtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIEYoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gRyhhKSB7XG4gIHJldHVybiBEKEYpKGEpO1xufVxuXG5mdW5jdGlvbiBIKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9ICExO1xuICAgICAgcmV0dXJuIGIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBlKSB7XG4gICAgICAgICAgZCB8fCAoKGQgPSAhMCksIGMoZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFnKSB7XG4gICAgICAgICAgZCB8fCAoYShlWzBdKSwgYyhlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGcgPSBlWzBdO1xuICAgICAgICAgIGMoXG4gICAgICAgICAgICBsKDAsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhICYmIChkID0gITApLCBnKGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gSihhKSB7XG4gIGEoMCk7XG59XG5cbmZ1bmN0aW9uIEsoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGZ1bmN0aW9uIGQoYSkge1xuICAgICAgICBoICYmXG4gICAgICAgICAgKCdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgICA/ICgoaCA9ICExKSwgbiA/IGMoYSkgOiBmIHx8ICgoZiA9ICEwKSwgZSgwKSkpXG4gICAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgICA/IChjKGEpLCBrID8gKGsgPSAhMSkgOiBnKDApKVxuICAgICAgICAgICAgOiAoKGcgPSBhID0gYVswXSksIChrID0gITEpLCBhKDApKSk7XG4gICAgICB9XG4gICAgICBsZXQgZSA9IG0sXG4gICAgICAgIGYgPSAhMSxcbiAgICAgICAgZyA9IG0sXG4gICAgICAgIGggPSAhMSxcbiAgICAgICAgayA9ICExLFxuICAgICAgICBuID0gITE7XG4gICAgICBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBuIHx8ICgobiA9ICEwKSwgaCB8fCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IG4gfHxcbiAgICAgICAgICAgIChoICYmIChnKDEpLCAoZyA9IG0pKSwgZiA/IChmID0gITEpIDogKChmID0gITApLCBlKDApKSwgKGIgPSBhKGJbMF0pKSwgKGggPSAhMCksIGIoZCkpXG4gICAgICAgICAgOiAoZSA9IGJbMF0pO1xuICAgICAgfSk7XG4gICAgICBjKFxuICAgICAgICBsKDAsIFtcbiAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgaWYgKChuIHx8ICgobiA9ICEwKSwgZSgxKSksIGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChoID0gITEpLCBnKDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuIHx8IGYgfHwgKChmID0gITApLCBlKDApKSwgaCAmJiAhayAmJiAoKGsgPSAhMCksIGcoMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIEwoYSkge1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gTShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBbXSxcbiAgICAgICAgZSA9IG07XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gcChkKShjKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IChkLmxlbmd0aCA+PSBhICYmIDAgPCBhICYmIGQuc2hpZnQoKSwgZC5wdXNoKGJbMF0pLCBlKDApKVxuICAgICAgICAgIDogKChiID0gYlswXSksIDAgPj0gYSA/IChiKDEpLCB1KGMpKSA6ICgoZSA9IGIpLCBiKDApKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBOKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgbGV0IGMgPSBtLFxuICAgICAgZCA9ICExO1xuICAgIGIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICdudW1iZXInID09IHR5cGVvZiBlID8gKGQgPSAhMCkgOiBlLnRhZyA/IGQgfHwgKGEoZVswXSksIGMoMCkpIDogKChjID0gZSA9IGVbMF0pLCBlKDApKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgcmV0dXJuIChkID0gITApLCBjKDEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIE8oKSB7fVxuXG5mdW5jdGlvbiBRKCkge31cblxuZnVuY3Rpb24gUigpIHt9XG5cbmZ1bmN0aW9uIFMoKSB7fVxuXG5mdW5jdGlvbiBidWZmZXIkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBrIHx8ICgoayA9ICEwKSwgZigxKSwgMCA8IGUubGVuZ3RoICYmIGMobCgxLCBbZV0pKSwgYygwKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAhayAmJiAwIDwgZS5sZW5ndGggJiYgKChhID0gZSksIChlID0gW10pLCBjKGwoMSwgW2FdKSkpXG4gICAgICAgICAgOiAoZyA9IGFbMF0pO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSBbXSxcbiAgICAgICAgZiA9IG0sXG4gICAgICAgIGcgPSBtLFxuICAgICAgICBoID0gITEsXG4gICAgICAgIGsgPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IGsgfHwgKChrID0gITApLCBnKDEpLCAwIDwgZS5sZW5ndGggJiYgYyhsKDEsIFtlXSkpLCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGsgfHwgKGUucHVzaChiWzBdKSwgaCA/IChoID0gITEpIDogKChoID0gITApLCBmKDApLCBnKDApKSlcbiAgICAgICAgICA6ICgoZiA9IGJbMF0pLCBhKGQpKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICghaykge1xuICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoayA9ICEwKSwgZigxKSwgZygxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGggPSAhMCksIGYoMCksIGcoMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lJDEoYSwgYikge1xuICByZXR1cm4gKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSBtLFxuICAgICAgICBmID0gdm9pZCAwLFxuICAgICAgICBnID0gdm9pZCAwLFxuICAgICAgICBoID0gITEsXG4gICAgICAgIGsgPSAwLFxuICAgICAgICBuID0gITE7XG4gICAgICBhKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBiID0gZztcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IDEgPiBrXG4gICAgICAgICAgICA/IChrID0gKGsgKyAxKSB8IDApXG4gICAgICAgICAgICA6IG4gfHwgKChuID0gITApLCBjKDApKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/ICgoYSA9IGFbMF0pLFxuICAgICAgICAgICAgdm9pZCAwICE9PSBiXG4gICAgICAgICAgICAgID8gbiB8fCAoKGYgPSB3KGEpKSwgKGggPSAhMSksIGMobCgxLCBbW2EsIHgoYildXSkpKVxuICAgICAgICAgICAgICA6ICgoZiA9IHcoYSkpLCBoID8gKGggPSAhMSkgOiBlKDApKSlcbiAgICAgICAgICA6IChkID0gYVswXSk7XG4gICAgICB9KTtcbiAgICAgIGIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIGIgPSBmO1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gMSA+IGtcbiAgICAgICAgICAgID8gKGsgPSAoayArIDEpIHwgMClcbiAgICAgICAgICAgIDogbiB8fCAoKG4gPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gKChhID0gYVswXSksXG4gICAgICAgICAgICB2b2lkIDAgIT09IGJcbiAgICAgICAgICAgICAgPyBuIHx8ICgoZyA9IHcoYSkpLCAoaCA9ICExKSwgYyhsKDEsIFtbeChiKSwgYV1dKSkpXG4gICAgICAgICAgICAgIDogKChnID0gdyhhKSksIGggPyAoaCA9ICExKSA6IGQoMCkpKVxuICAgICAgICAgIDogKGUgPSBhWzBdKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiAobiA9ICEwKSwgZCgxKSwgZSgxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGggPSAhMCksIGQoYyksIGUoYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9KShhLCBiKTtcbn1cblxuZnVuY3Rpb24gY29uY2F0JDEoYSkge1xuICByZXR1cm4geihCKShwKGEpKTtcbn1cblxuZnVuY3Rpb24gY29uY2F0QWxsJDEoYSkge1xuICByZXR1cm4geihBKShhKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZCgpIHtcbiAgICAgICAgdmFyIGEgPSBlO1xuICAgICAgICB2b2lkIDAgIT09IGEgJiYgKChlID0gdm9pZCAwKSwgY2xlYXJUaW1lb3V0KHgoYSkpKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gdm9pZCAwLFxuICAgICAgICBmID0gITEsXG4gICAgICAgIGcgPSAhMTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYikge1xuICAgICAgICAgIGcgfHwgKChnID0gITApLCB2b2lkIDAgIT09IGUgPyAoZiA9ICEwKSA6IGMoMCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGIudGFnKSB7XG4gICAgICAgICAgZyB8fFxuICAgICAgICAgICAgKGQoKSxcbiAgICAgICAgICAgIChlID0gdyhcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBjKGIpO1xuICAgICAgICAgICAgICAgIGYgJiYgYygwKTtcbiAgICAgICAgICAgICAgfSwgYShiWzBdKSlcbiAgICAgICAgICAgICkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbiA9IGJbMF07XG4gICAgICAgICAgYyhcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIGlmICghZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPyAoKGcgPSAhMCksIChmID0gITEpLCBkKCksIG4oMSkpIDogbigwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlbGF5JDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gMDtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiIHx8IGIudGFnXG4gICAgICAgICAgPyAoKGQgPSAoZCArIDEpIHwgMCksXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgMCAhPT0gZCAmJiAoKGQgPSAoZCAtIDEpIHwgMCksIGMoYikpO1xuICAgICAgICAgICAgfSwgYSkpXG4gICAgICAgICAgOiBjKGIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiID8gYyhiKSA6IGIudGFnID8gKGEoYlswXSkgPyBjKGIpIDogZCgwKSkgOiAoKGQgPSBiWzBdKSwgYyhiKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBOKGEpKGIpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQ2FsbGJhZyQyKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgZnVuY3Rpb24gYyhhLCBjKSB7XG4gICAgICBzd2l0Y2ggKGEpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGIoXG4gICAgICAgICAgICBsKDAsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSA/IGMoMikgOiBjKDEpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBiKGwoMSwgW2NdKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGIoMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAyID09PSBhLmxlbmd0aCA/IGEoMCwgYykgOiBhLmJpbmQobnVsbCwgMCwgYyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21Eb21FdmVudCQxKGEsIGIpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgIGMobCgxLCBbYV0pKTtcbiAgICAgIH1cbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBjICYmIGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLCBkKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihiLCBkKTtcbiAgICB9O1xuICB9KShhLCBiKTtcbn1cblxuZnVuY3Rpb24gZnJvbUxpc3QkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gITEsXG4gICAgICBkID0gITEsXG4gICAgICBlID0gITEsXG4gICAgICBmID0gYTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGMgPSAhMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGQpIHtcbiAgICAgICAgICAgIGUgPSAhMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkID0gZSA9ICEwOyBlICYmICFjOyApIHtcbiAgICAgICAgICAgICAgKGEgPSBmKSA/ICgoZiA9IGFbMV0pLCAoZSA9ICExKSwgYihsKDEsIFthWzBdXSkpKSA6ICgoYyA9ICEwKSwgYigwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkID0gITE7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tT2JzZXJ2YWJsZSQyKGEpIHtcbiAgdmFyIGIgPSB2b2lkIDAgIT09IGFbUF0gPyBhW1BdKCkgOiBhO1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYyA9IGIuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGEobCgxLCBbY10pKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBhKDApO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBRLFxuICAgIH0pO1xuICAgIGEoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIGMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21Qcm9taXNlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9ICExO1xuICAgIGEudGhlbihmdW5jdGlvbiAoYSkge1xuICAgICAgYyB8fCAoYihsKDEsIFthXSkpLCBiKDApKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodm9pZCAwKTtcbiAgICB9KTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgYSAmJiAoYyA9ICEwKTtcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbVZhbHVlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9ICExO1xuICAgIGIoXG4gICAgICBsKDAsIFtcbiAgICAgICAgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBkID8gKGMgPSAhMCkgOiBjIHx8ICgoYyA9ICEwKSwgYihsKDEsIFthXSkpLCBiKDApKTtcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJ2YWwkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGxldCBjID0gMDtcbiAgICB2YXIgZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhID0gYztcbiAgICAgIGMgPSAoYyArIDEpIHwgMDtcbiAgICAgIGIobCgxLCBbYV0pKTtcbiAgICB9LCBhKTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgYSAmJiBjbGVhckludGVydmFsKGQpO1xuICAgICAgICB9LFxuICAgICAgXSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBsZXQgYyA9IHIsXG4gICAgICBkID0gITE7XG4gICAgYyA9IGEoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgZCB8fCBiKGwoMSwgW2FdKSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZCB8fCAoKGQgPSAhMCksIGIoMCkpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBiKFxuICAgICAgbCgwLCBbXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaWYgKGEgJiYgIWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoZCA9ICEwKSwgYygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVN1YmplY3QkMSgpIHtcbiAgbGV0IGEgPSBbXSxcbiAgICBiID0gITE7XG4gIHJldHVybiB7XG4gICAgc291cmNlOiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gYihhKSB7XG4gICAgICAgIHJldHVybiBhICE9PSBjO1xuICAgICAgfVxuICAgICAgYSA9IGEuY29uY2F0KGMpO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGMgJiYgKGEgPSBhLmZpbHRlcihiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbiAoYykge1xuICAgICAgYiB8fFxuICAgICAgICBhLmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICBhKGwoMSwgW2NdKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGIgfHwgKChiID0gITApLCBhLmZvckVhY2godCkpO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICBiID0gJ251bWJlcicgPT0gdHlwZW9mIGIgPyAwIDogYi50YWcgPyBsKDEsIFthKGJbMF0pXSkgOiBsKDAsIFtiWzBdXSk7XG4gICAgICAgIGMoYik7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZSQxKGEpIHtcbiAgcmV0dXJuIEQoRSkocChhKSk7XG59XG5cbmZ1bmN0aW9uIG5ldmVyJDEoYSkge1xuICBhKGwoMCwgW21dKSk7XG59XG5cbmZ1bmN0aW9uIG9uRW5kJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gITE7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGIpIHtcbiAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkID0gITA7XG4gICAgICAgICAgYyhiKTtcbiAgICAgICAgICByZXR1cm4gYSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLnRhZykge1xuICAgICAgICAgIGQgfHwgYyhiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZSA9IGJbMF07XG4gICAgICAgICAgYyhcbiAgICAgICAgICAgIGwoMCwgW1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGMgPyAoKGQgPSAhMCksIGUoYyksIGEoKSkgOiBlKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25TdGFydCQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYiA/IGMoYikgOiBiLnRhZyA/IGMoYikgOiAoYyhiKSwgYSgpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBpcGUoKSB7XG4gIGZvciAodmFyIGEgPSBhcmd1bWVudHMsIGIgPSBhcmd1bWVudHNbMF0sIGMgPSAxLCBkID0gYXJndW1lbnRzLmxlbmd0aDsgYyA8IGQ7IGMrKykge1xuICAgIGIgPSBhW2NdKGIpO1xuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoJDEoYSkge1xuICByZXR1cm4gTihPKShhKTtcbn1cblxuZnVuY3Rpb24gc2FtcGxlJDEoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxldCBkID0gbSxcbiAgICAgICAgZSA9IG0sXG4gICAgICAgIGYgPSB2b2lkIDAsXG4gICAgICAgIGcgPSAhMSxcbiAgICAgICAgaCA9ICExO1xuICAgICAgYihmdW5jdGlvbiAoYSkge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgICAgID8gaCB8fCAoKGggPSAhMCksIGUoMSksIGMoMCkpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gKChmID0gdyhhWzBdKSksIGcgPyAoZyA9ICExKSA6ICgoZyA9ICEwKSwgZSgwKSwgZCgwKSkpXG4gICAgICAgICAgOiAoZCA9IGFbMF0pO1xuICAgICAgfSk7XG4gICAgICBhKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBiID0gZjtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGFcbiAgICAgICAgICA/IGggfHwgKChoID0gITApLCBkKDEpLCBjKDApKVxuICAgICAgICAgIDogYS50YWdcbiAgICAgICAgICA/IHZvaWQgMCA9PT0gYiB8fCBoIHx8ICgoZiA9IHZvaWQgMCksIGMobCgxLCBbeChiKV0pKSlcbiAgICAgICAgICA6IChlID0gYVswXSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoIWgpIHtcbiAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGggPSAhMCksIGQoMSksIGUoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChnID0gITApLCBkKDApLCBlKDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2NhbiQxKGEsIGIpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGxldCBlID0gYjtcbiAgICAgICAgcmV0dXJuIGMoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgY1xuICAgICAgICAgICAgPyAoYyA9IDApXG4gICAgICAgICAgICA6IGMudGFnXG4gICAgICAgICAgICA/ICgoZSA9IGEoZSwgY1swXSkpLCAoYyA9IGwoMSwgW2VdKSkpXG4gICAgICAgICAgICA6IChjID0gbCgwLCBbY1swXV0pKTtcbiAgICAgICAgICBkKGMpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSkoYSwgYik7XG59XG5cbmZ1bmN0aW9uIHNoYXJlJDEoYSkge1xuICBmdW5jdGlvbiBiKGEpIHtcbiAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYVxuICAgICAgPyAoYy5mb3JFYWNoKEopLCAoYyA9IFtdKSlcbiAgICAgIDogYS50YWdcbiAgICAgID8gKChlID0gITEpLFxuICAgICAgICBjLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICBiKGEpO1xuICAgICAgICB9KSlcbiAgICAgIDogKGQgPSBhWzBdKTtcbiAgfVxuICBsZXQgYyA9IFtdLFxuICAgIGQgPSBtLFxuICAgIGUgPSAhMTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7XG4gICAgZnVuY3Rpb24gZyhhKSB7XG4gICAgICByZXR1cm4gYSAhPT0gZjtcbiAgICB9XG4gICAgYyA9IGMuY29uY2F0KGYpO1xuICAgIDEgPT09IGMubGVuZ3RoICYmIGEoYik7XG4gICAgZihcbiAgICAgIGwoMCwgW1xuICAgICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICBpZiAoKChjID0gYy5maWx0ZXIoZykpLCAwID09PSBjLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUgfHwgKChlID0gITApLCBkKGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNraXAkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtLFxuICAgICAgICBlID0gYTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBjKGEpXG4gICAgICAgICAgOiBhLnRhZ1xuICAgICAgICAgID8gMCA8IGVcbiAgICAgICAgICAgID8gKChlID0gKGUgLSAxKSB8IDApLCBkKDApKVxuICAgICAgICAgICAgOiBjKGEpXG4gICAgICAgICAgOiAoKGQgPSBhWzBdKSwgYyhhKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBza2lwVW50aWwkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBhXG4gICAgICAgICAgPyBnICYmICgoayA9ICEwKSwgZSgxKSlcbiAgICAgICAgICA6IGEudGFnXG4gICAgICAgICAgPyAoKGcgPSAhMSksIGYoMSkpXG4gICAgICAgICAgOiAoKGYgPSBhID0gYVswXSksIGEoMCkpO1xuICAgICAgfVxuICAgICAgbGV0IGUgPSBtLFxuICAgICAgICBmID0gbSxcbiAgICAgICAgZyA9ICEwLFxuICAgICAgICBoID0gITEsXG4gICAgICAgIGsgPSAhMTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGJcbiAgICAgICAgICA/IChnICYmIGYoMSksIChrID0gITApLCBjKDApKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGcgfHwga1xuICAgICAgICAgICAgPyBoXG4gICAgICAgICAgICAgID8gKGggPSAhMSlcbiAgICAgICAgICAgICAgOiAoKGggPSAhMCksIGUoMCksIGYoMCkpXG4gICAgICAgICAgICA6ICgoaCA9ICExKSwgYyhiKSlcbiAgICAgICAgICA6ICgoZSA9IGJbMF0pLCBhKGQpKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICghaykge1xuICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIGlmICgoKGsgPSAhMCksIGUoMSksIGcpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZigxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaCB8fCAoKGggPSAhMCksIGcgJiYgZigwKSwgZSgwKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBza2lwV2hpbGUkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSBtLFxuICAgICAgICBlID0gITA7XG4gICAgICByZXR1cm4gYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gYyhiKVxuICAgICAgICAgIDogYi50YWdcbiAgICAgICAgICA/IGVcbiAgICAgICAgICAgID8gYShiWzBdKVxuICAgICAgICAgICAgICA/IGQoMClcbiAgICAgICAgICAgICAgOiAoKGUgPSAhMSksIGMoYikpXG4gICAgICAgICAgICA6IGMoYilcbiAgICAgICAgICA6ICgoZCA9IGJbMF0pLCBjKGIpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN3aXRjaEFsbCQxKGEpIHtcbiAgcmV0dXJuIEsoTCkoYSk7XG59XG5cbmZ1bmN0aW9uIHRha2UkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgbGV0IGQgPSAhMSxcbiAgICAgICAgZSA9IDAsXG4gICAgICAgIGYgPSBtO1xuICAgICAgYihmdW5jdGlvbiAoYikge1xuICAgICAgICAnbnVtYmVyJyA9PSB0eXBlb2YgYlxuICAgICAgICAgID8gZCB8fCAoKGQgPSAhMCksIGMoMCkpXG4gICAgICAgICAgOiBiLnRhZ1xuICAgICAgICAgID8gZSA8IGEgJiYgIWQgJiYgKChlID0gKGUgKyAxKSB8IDApLCBjKGIpLCAhZCAmJiBlID49IGEgJiYgKChkID0gITApLCBjKDApLCBmKDEpKSlcbiAgICAgICAgICA6ICgoYiA9IGJbMF0pLCAwID49IGEgPyAoKGQgPSAhMCksIGMoMCksIGIoMSkpIDogKGYgPSBiKSk7XG4gICAgICB9KTtcbiAgICAgIGMoXG4gICAgICAgIGwoMCwgW1xuICAgICAgICAgIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGQgPSAhMCksIGYoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGUgPCBhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGYoMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YWtlVW50aWwkMShhKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYykge1xuICAgICAgZnVuY3Rpb24gZChhKSB7XG4gICAgICAgICdudW1iZXInICE9IHR5cGVvZiBhICYmIChhLnRhZyA/ICgoZSA9ICEwKSwgZigxKSwgYygwKSkgOiAoKGcgPSBhID0gYVswXSksIGEoMCkpKTtcbiAgICAgIH1cbiAgICAgIGxldCBlID0gITEsXG4gICAgICAgIGYgPSBtLFxuICAgICAgICBnID0gbTtcbiAgICAgIGIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgJ251bWJlcicgPT0gdHlwZW9mIGIgPyBlIHx8ICgoZSA9ICEwKSwgZygxKSwgYygwKSkgOiBiLnRhZyA/IGUgfHwgYyhiKSA6ICgoZiA9IGJbMF0pLCBhKGQpKTtcbiAgICAgIH0pO1xuICAgICAgYyhcbiAgICAgICAgbCgwLCBbXG4gICAgICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICByZXR1cm4gYSA/ICgoZSA9ICEwKSwgZigxKSwgZygxKSkgOiBmKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRha2VXaGlsZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBsZXQgZCA9IG0sXG4gICAgICAgIGUgPSAhMTtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICdudW1iZXInID09IHR5cGVvZiBiXG4gICAgICAgICAgPyBlIHx8ICgoZSA9ICEwKSwgYygwKSlcbiAgICAgICAgICA6IGIudGFnXG4gICAgICAgICAgPyBlIHx8IChhKGJbMF0pID8gYyhiKSA6ICgoZSA9ICEwKSwgYygwKSwgZCgxKSkpXG4gICAgICAgICAgOiAoKGQgPSBiWzBdKSwgYyhiKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZSQxKGEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7XG4gICAgICBmdW5jdGlvbiBkKCkge1xuICAgICAgICB2b2lkIDAgIT09IGcgJiYgY2xlYXJUaW1lb3V0KHgoZykpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgZyA9IHZvaWQgMDtcbiAgICAgICAgZiA9ICExO1xuICAgICAgfVxuICAgICAgbGV0IGYgPSAhMSxcbiAgICAgICAgZyA9IHZvaWQgMDtcbiAgICAgIHJldHVybiBiKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYikge1xuICAgICAgICAgIGQoKSwgYygwKTtcbiAgICAgICAgfSBlbHNlIGlmIChiLnRhZykge1xuICAgICAgICAgIGYgfHwgKChmID0gITApLCBkKCksIChnID0gdyhzZXRUaW1lb3V0KGUsIGEoYlswXSkpKSksIGMoYikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBoID0gYlswXTtcbiAgICAgICAgICBjKFxuICAgICAgICAgICAgbCgwLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgPyAoZCgpLCBoKDEpKSA6IGgoYSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkkMShhKSB7XG4gIGxldCBiID0gW10sXG4gICAgYyA9IG0sXG4gICAgZCA9ICExO1xuICBhKGZ1bmN0aW9uIChhKSB7XG4gICAgJ251bWJlcicgPT0gdHlwZW9mIGEgPyAoZCA9ICEwKSA6IGEudGFnID8gKGIucHVzaChhWzBdKSwgYygwKSkgOiAoKGMgPSBhID0gYVswXSksIGEoMCkpO1xuICB9KTtcbiAgZCB8fCBjKDEpO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gdG9DYWxsYmFnJDIoYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIsIGMpIHtcbiAgICBpZiAoMCA9PT0gYikge1xuICAgICAgcmV0dXJuIGEoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgZnVuY3Rpb24gYihhKSB7XG4gICAgICAgICAgc3dpdGNoIChhKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGQoMCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGQoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgYSkge1xuICAgICAgICAgIHJldHVybiAyID09PSBjLmxlbmd0aCA/IGMoMiwgdm9pZCAwKSA6IGMuYmluZChudWxsLCAyLCB2b2lkIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnRhZykge1xuICAgICAgICAgIHJldHVybiAoYSA9IGFbMF0pLCAyID09PSBjLmxlbmd0aCA/IGMoMSwgYSkgOiBjLmJpbmQobnVsbCwgMSwgYSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGQgPSBhWzBdO1xuICAgICAgICByZXR1cm4gMiA9PT0gYy5sZW5ndGggPyBjKDAsIGIpIDogYy5iaW5kKG51bGwsIDAsIGIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB0b09ic2VydmFibGUkMihhKSB7XG4gIHZhciBiID0ge1xuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGIsIGQsIGUpIHtcbiAgICAgIHZhciBjID0gKCdvYmplY3QnID09IHR5cGVvZiBiID8gYi5uZXh0LmJpbmQoYikgOiBiKSB8fCBSLFxuICAgICAgICBnID0gKCdvYmplY3QnID09IHR5cGVvZiBiID8gYi5jb21wbGV0ZS5iaW5kKGIpIDogZSkgfHwgUztcbiAgICAgIGxldCBoID0gbSxcbiAgICAgICAgayA9ICExO1xuICAgICAgYShmdW5jdGlvbiAoYSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIGEpIHtcbiAgICAgICAgICByZXR1cm4gKGsgPSAhMCksIGcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS50YWcpIHtcbiAgICAgICAgICBpZiAoaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjKGFbMF0pO1xuICAgICAgICAgIHJldHVybiBoKDApO1xuICAgICAgICB9XG4gICAgICAgIGggPSBhID0gYVswXTtcbiAgICAgICAgYSgwKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWspIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5jbG9zZWQgPSAhMSksIChrID0gITApLCBoKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VkOiAhMSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcbiAgYltQXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYjtcbiAgfTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIHRvUHJvbWlzZSQxKGEpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChiKSB7XG4gICAgTSgxKShhKShmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKCdudW1iZXInICE9IHR5cGVvZiBhKSB7XG4gICAgICAgIGlmIChhLnRhZykge1xuICAgICAgICAgIGIoYVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYVswXSgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIHYgPSBbXSxcbiAgUCA9XG4gICAgJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgU3ltYm9sXG4gICAgICA/IFN5bWJvbC5vYnNlcnZhYmxlIHx8IChTeW1ib2wub2JzZXJ2YWJsZSA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpKVxuICAgICAgOiAnQEBvYnNlcnZhYmxlJztcblxuZXhwb3J0IHtcbiAgYnVmZmVyJDEgYXMgYnVmZmVyLFxuICBjb21iaW5lJDEgYXMgY29tYmluZSxcbiAgY29uY2F0JDEgYXMgY29uY2F0LFxuICBjb25jYXRBbGwkMSBhcyBjb25jYXRBbGwsXG4gIHogYXMgY29uY2F0TWFwLFxuICBkZWJvdW5jZSQxIGFzIGRlYm91bmNlLFxuICBkZWxheSQxIGFzIGRlbGF5LFxuICB1IGFzIGVtcHR5LFxuICBmaWx0ZXIkMSBhcyBmaWx0ZXIsXG4gIEcgYXMgZmxhdHRlbixcbiAgZm9yRWFjaCQxIGFzIGZvckVhY2gsXG4gIHAgYXMgZnJvbUFycmF5LFxuICBmcm9tQ2FsbGJhZyQyIGFzIGZyb21DYWxsYmFnLFxuICBmcm9tRG9tRXZlbnQkMSBhcyBmcm9tRG9tRXZlbnQsXG4gIGZyb21MaXN0JDEgYXMgZnJvbUxpc3QsXG4gIGZyb21PYnNlcnZhYmxlJDIgYXMgZnJvbU9ic2VydmFibGUsXG4gIGZyb21Qcm9taXNlJDEgYXMgZnJvbVByb21pc2UsXG4gIGZyb21WYWx1ZSQxIGFzIGZyb21WYWx1ZSxcbiAgaW50ZXJ2YWwkMSBhcyBpbnRlcnZhbCxcbiAgbWFrZSQxIGFzIG1ha2UsXG4gIG1ha2VTdWJqZWN0JDEgYXMgbWFrZVN1YmplY3QsXG4gIG1hcCQxIGFzIG1hcCxcbiAgbWVyZ2UkMSBhcyBtZXJnZSxcbiAgRyBhcyBtZXJnZUFsbCxcbiAgRCBhcyBtZXJnZU1hcCxcbiAgbmV2ZXIkMSBhcyBuZXZlcixcbiAgb25FbmQkMSBhcyBvbkVuZCxcbiAgSCBhcyBvblB1c2gsXG4gIG9uU3RhcnQkMSBhcyBvblN0YXJ0LFxuICBwaXBlLFxuICBwdWJsaXNoJDEgYXMgcHVibGlzaCxcbiAgc2FtcGxlJDEgYXMgc2FtcGxlLFxuICBzY2FuJDEgYXMgc2NhbixcbiAgc2hhcmUkMSBhcyBzaGFyZSxcbiAgc2tpcCQxIGFzIHNraXAsXG4gIHNraXBVbnRpbCQxIGFzIHNraXBVbnRpbCxcbiAgc2tpcFdoaWxlJDEgYXMgc2tpcFdoaWxlLFxuICBOIGFzIHN1YnNjcmliZSxcbiAgc3dpdGNoQWxsJDEgYXMgc3dpdGNoQWxsLFxuICBLIGFzIHN3aXRjaE1hcCxcbiAgdGFrZSQxIGFzIHRha2UsXG4gIE0gYXMgdGFrZUxhc3QsXG4gIHRha2VVbnRpbCQxIGFzIHRha2VVbnRpbCxcbiAgdGFrZVdoaWxlJDEgYXMgdGFrZVdoaWxlLFxuICBIIGFzIHRhcCxcbiAgdGhyb3R0bGUkMSBhcyB0aHJvdHRsZSxcbiAgdG9BcnJheSQxIGFzIHRvQXJyYXksXG4gIHRvQ2FsbGJhZyQyIGFzIHRvQ2FsbGJhZyxcbiAgdG9PYnNlcnZhYmxlJDIgYXMgdG9PYnNlcnZhYmxlLFxuICB0b1Byb21pc2UkMSBhcyB0b1Byb21pc2UsXG59O1xuIiwiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIsIGNyZWF0ZUNsaWVudCB9IGZyb20gXCJ1cnFsXCI7XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7IHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiIH0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHJlc2V0Q1NTIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9