import * as M from "react";
import Me, { useState as xe, useEffect as dt } from "react";
var ee = { exports: {} }, B = {};
var Oe;
function vt() {
  if (Oe)
    return B;
  Oe = 1;
  var e = Me, l = Symbol.for("react.element"), v = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(E, i, R) {
    var m, w = {}, _ = null, Y = null;
    R !== void 0 && (_ = "" + R), i.key !== void 0 && (_ = "" + i.key), i.ref !== void 0 && (Y = i.ref);
    for (m in i)
      a.call(i, m) && !P.hasOwnProperty(m) && (w[m] = i[m]);
    if (E && E.defaultProps)
      for (m in i = E.defaultProps, i)
        w[m] === void 0 && (w[m] = i[m]);
    return { $$typeof: l, type: E, key: _, ref: Y, props: w, _owner: x.current };
  }
  return B.Fragment = v, B.jsx = L, B.jsxs = L, B;
}
var V = {};
var Ie;
function mt() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Me, l = Symbol.for("react.element"), v = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), E = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), te = Symbol.iterator, ge = "@@iterator";
    function De(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = te && t[te] || t[ge];
      return typeof n == "function" ? n : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(t) {
      {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          r[o - 1] = arguments[o];
        Ne("error", t, r);
      }
    }
    function Ne(t, n, r) {
      {
        var o = g.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (n += "%s", r = r.concat([f]));
        var d = r.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, d);
      }
    }
    var je = !1, Fe = !1, Ue = !1, Be = !1, Ve = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ye(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === P || Ve || t === x || t === R || t === m || Be || t === Y || je || Fe || Ue || typeof t == "object" && t !== null && (t.$$typeof === _ || t.$$typeof === w || t.$$typeof === L || t.$$typeof === E || t.$$typeof === i || t.$$typeof === ne || t.getModuleId !== void 0));
    }
    function $e(t, n, r) {
      var o = t.displayName;
      if (o)
        return o;
      var f = n.displayName || n.name || "";
      return f !== "" ? r + "(" + f + ")" : r;
    }
    function re(t) {
      return t.displayName || "Context";
    }
    function O(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case v:
          return "Portal";
        case P:
          return "Profiler";
        case x:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case E:
            var n = t;
            return re(n) + ".Consumer";
          case L:
            var r = t;
            return re(r._context) + ".Provider";
          case i:
            return $e(t, t.render, "ForwardRef");
          case w:
            var o = t.displayName || null;
            return o !== null ? o : O(t.type) || "Memo";
          case _: {
            var f = t, d = f._payload, c = f._init;
            try {
              return O(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, F = 0, ae, oe, ie, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function qe() {
      {
        if (F === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        F++;
      }
    }
    function He() {
      {
        if (F--, F === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, t, {
              value: ae
            }),
            info: W({}, t, {
              value: oe
            }),
            warn: W({}, t, {
              value: ie
            }),
            error: W({}, t, {
              value: se
            }),
            group: W({}, t, {
              value: ue
            }),
            groupCollapsed: W({}, t, {
              value: le
            }),
            groupEnd: W({}, t, {
              value: ce
            })
          });
        }
        F < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var y = g.ReactCurrentDispatcher, J;
    function $(t, n, r) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            J = o && o[1] || "";
          }
        return `
` + J + t;
      }
    }
    var z = !1, q;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Ke();
    }
    function de(t, n) {
      if (!t || z)
        return "";
      {
        var r = q.get(t);
        if (r !== void 0)
          return r;
      }
      var o;
      z = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = y.current, y.current = null, qe();
      try {
        if (n) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (I) {
              o = I;
            }
            Reflect.construct(t, [], c);
          } else {
            try {
              c.call();
            } catch (I) {
              o = I;
            }
            t.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            o = I;
          }
          t();
        }
      } catch (I) {
        if (I && o && typeof I.stack == "string") {
          for (var u = I.stack.split(`
`), C = o.stack.split(`
`), h = u.length - 1, k = C.length - 1; h >= 1 && k >= 0 && u[h] !== C[k]; )
            k--;
          for (; h >= 1 && k >= 0; h--, k--)
            if (u[h] !== C[k]) {
              if (h !== 1 || k !== 1)
                do
                  if (h--, k--, k < 0 || u[h] !== C[k]) {
                    var b = `
` + u[h].replace(" at new ", " at ");
                    return t.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", t.displayName)), typeof t == "function" && q.set(t, b), b;
                  }
                while (h >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        z = !1, y.current = d, He(), Error.prepareStackTrace = f;
      }
      var N = t ? t.displayName || t.name : "", _e = N ? $(N) : "";
      return typeof t == "function" && q.set(t, _e), _e;
    }
    function Ge(t, n, r) {
      return de(t, !1);
    }
    function ye(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function H(t, n, r) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return de(t, ye(t));
      if (typeof t == "string")
        return $(t);
      switch (t) {
        case R:
          return $("Suspense");
        case m:
          return $("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case i:
            return Ge(t.render);
          case w:
            return H(t.type, n, r);
          case _: {
            var o = t, f = o._payload, d = o._init;
            try {
              return H(d(f), n, r);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, ve = {}, me = g.ReactDebugCurrentFrame;
    function G(t) {
      if (t) {
        var n = t._owner, r = H(t.type, t._source, n ? n.type : null);
        me.setExtraStackFrame(r);
      } else
        me.setExtraStackFrame(null);
    }
    function Je(t, n, r, o, f) {
      {
        var d = Function.call.bind(K);
        for (var c in t)
          if (d(t, c)) {
            var u = void 0;
            try {
              if (typeof t[c] != "function") {
                var C = Error((o || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              u = t[c](n, c, o, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              u = h;
            }
            u && !(u instanceof Error) && (G(f), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", r, c, typeof u), G(null)), u instanceof Error && !(u.message in ve) && (ve[u.message] = !0, G(f), S("Failed %s type: %s", r, u.message), G(null));
          }
      }
    }
    var ze = Array.isArray;
    function X(t) {
      return ze(t);
    }
    function Xe(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, r = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return r;
      }
    }
    function Ze(t) {
      try {
        return he(t), !1;
      } catch {
        return !0;
      }
    }
    function he(t) {
      return "" + t;
    }
    function ke(t) {
      if (Ze(t))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(t)), he(t);
    }
    var U = g.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Ee, Z;
    Z = {};
    function Ae(t) {
      if (K.call(t, "ref")) {
        var n = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function pe(t) {
      if (K.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Te(t, n) {
      if (typeof t.ref == "string" && U.current && n && U.current.stateNode !== n) {
        var r = O(U.current.type);
        Z[r] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(U.current.type), t.ref), Z[r] = !0);
      }
    }
    function et(t, n) {
      {
        var r = function() {
          we || (we = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        r.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function tt(t, n) {
      {
        var r = function() {
          Ee || (Ee = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        r.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var nt = function(t, n, r, o, f, d, c) {
      var u = {
        $$typeof: l,
        type: t,
        key: n,
        ref: r,
        props: c,
        _owner: d
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function rt(t, n, r, o, f) {
      {
        var d, c = {}, u = null, C = null;
        r !== void 0 && (ke(r), u = "" + r), pe(n) && (ke(n.key), u = "" + n.key), Ae(n) && (C = n.ref, Te(n, f));
        for (d in n)
          K.call(n, d) && !Qe.hasOwnProperty(d) && (c[d] = n[d]);
        if (t && t.defaultProps) {
          var h = t.defaultProps;
          for (d in h)
            c[d] === void 0 && (c[d] = h[d]);
        }
        if (u || C) {
          var k = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          u && et(c, k), C && tt(c, k);
        }
        return nt(t, u, C, f, o, U.current, c);
      }
    }
    var Q = g.ReactCurrentOwner, Se = g.ReactDebugCurrentFrame;
    function D(t) {
      if (t) {
        var n = t._owner, r = H(t.type, t._source, n ? n.type : null);
        Se.setExtraStackFrame(r);
      } else
        Se.setExtraStackFrame(null);
    }
    var A;
    A = !1;
    function p(t) {
      return typeof t == "object" && t !== null && t.$$typeof === l;
    }
    function Ce() {
      {
        if (Q.current) {
          var t = O(Q.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function at(t) {
      {
        if (t !== void 0) {
          var n = t.fileName.replace(/^.*[\\\/]/, ""), r = t.lineNumber;
          return `

Check your code at ` + n + ":" + r + ".";
        }
        return "";
      }
    }
    var Le = {};
    function ot(t) {
      {
        var n = Ce();
        if (!n) {
          var r = typeof t == "string" ? t : t.displayName || t.name;
          r && (n = `

Check the top-level render call using <` + r + ">.");
        }
        return n;
      }
    }
    function Re(t, n) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var r = ot(n);
        if (Le[r])
          return;
        Le[r] = !0;
        var o = "";
        t && t._owner && t._owner !== Q.current && (o = " It was passed a child from " + O(t._owner.type) + "."), D(t), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, o), D(null);
      }
    }
    function be(t, n) {
      {
        if (typeof t != "object")
          return;
        if (X(t))
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            p(o) && Re(o, n);
          }
        else if (p(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var f = De(t);
          if (typeof f == "function" && f !== t.entries)
            for (var d = f.call(t), c; !(c = d.next()).done; )
              p(c.value) && Re(c.value, n);
        }
      }
    }
    function it(t) {
      {
        var n = t.type;
        if (n == null || typeof n == "string")
          return;
        var r;
        if (typeof n == "function")
          r = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === i || n.$$typeof === w))
          r = n.propTypes;
        else
          return;
        if (r) {
          var o = O(n);
          Je(r, t.props, "prop", o, t);
        } else if (n.PropTypes !== void 0 && !A) {
          A = !0;
          var f = O(n);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function st(t) {
      {
        for (var n = Object.keys(t.props), r = 0; r < n.length; r++) {
          var o = n[r];
          if (o !== "children" && o !== "key") {
            D(t), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), D(null);
            break;
          }
        }
        t.ref !== null && (D(t), S("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Pe(t, n, r, o, f, d) {
      {
        var c = Ye(t);
        if (!c) {
          var u = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = at(f);
          C ? u += C : u += Ce();
          var h;
          t === null ? h = "null" : X(t) ? h = "array" : t !== void 0 && t.$$typeof === l ? (h = "<" + (O(t.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : h = typeof t, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, u);
        }
        var k = rt(t, n, r, f, d);
        if (k == null)
          return k;
        if (c) {
          var b = n.children;
          if (b !== void 0)
            if (o)
              if (X(b)) {
                for (var N = 0; N < b.length; N++)
                  be(b[N], t);
                Object.freeze && Object.freeze(b);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              be(b, t);
        }
        return t === a ? st(k) : it(k), k;
      }
    }
    function ut(t, n, r) {
      return Pe(t, n, r, !0);
    }
    function lt(t, n, r) {
      return Pe(t, n, r, !1);
    }
    var ct = lt, ft = ut;
    V.Fragment = a, V.jsx = ct, V.jsxs = ft;
  }()), V;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = vt() : e.exports = mt();
})(ee);
const ht = ee.exports.Fragment, j = ee.exports.jsx;
var kt = /* @__PURE__ */ ((e) => (e.Default = "default", e.Desktop = "desktop", e.Tablet = "tablet", e.Phone = "phone", e))(kt || {}), wt = /* @__PURE__ */ ((e) => (e.BrowserNotCapable = "browser-not-capable", e.DownloadWorkbookNotAllowed = "download-workbook-not-allowed", e.FilterCannotBePerformed = "filter-cannot-be-performed", e.IndexOutOfRange = "index-out-of-range", e.InternalError = "internal-error", e.InvalidCustomViewName = "invalid-custom-view-name", e.InvalidDateParameter = "invalid-date-parameter", e.invalidFilterFieldNameOrValue = "invalid-filter-field-name", e.InvalidParameter = "invalid-parameter", e.InvalidSize = "invalid-size", e.InvalidSizeBehavior = "invalid-size-behavior", e.InvalidSizeBehaviorOnWorksheet = "invalid-size-behavior-on-worksheet", e.InvalidUrl = "invalid-url", e.MissingMaxSize = "missing-max-size", e.MissingMinSize = "missing-min-size", e.MissingMinMaxSize = "missing-min-max-size", e.MissingParameter = "missing-parameter", e.MissingRangeNForRelativeDateFilters = "missing-range-n-for-relative-date-filters", e.NoUrlForHiddenWorksheet = "no-url-for-hidden-worksheet", e.NoUrlOrParentElementNotFound = "no-url-or-parent-element-not-found", e.NotActiveSheet = "not-active-sheet", e.NullOrEmptyParameter = "null-or-empty-parameter", e.SheetNotInWorkbook = "sheet-not-in-workbook", e.StaleDataReference = "stale-data-reference", e.UnsupportedEventName = "unsupported-event-name", e.VizAlreadyInManager = "viz-already-in-manager", e.ImplementationError = "wrong-implementation", e.NotImplemented = "not-implemented", e.EventInitializationError = "event-initialization-error", e.IncompatibleVersionError = "incompatible-version-error", e.UnknownDialogType = "unknown-dialog-type", e.FilterMissingOrNotImplemented = "filter-missing-not-implemented", e.StoryPointIdMismatch = "storypoint-id-mismatch", e))(wt || {}), Et = /* @__PURE__ */ ((e) => (e.PDF = "pdf", e.PNG = "png", e))(Et || {}), St = /* @__PURE__ */ ((e) => (e.All = "all", e.Axes = "axes", e.Filters = "filters", e.Sorts = "sorts", e.Shelves = "shelves", e))(St || {}), Ct = /* @__PURE__ */ ((e) => (e.Alerts = "alerts", e.AskData = "askData", e.CustomViews = "customViews", e.DataDetails = "dataDetails", e.Share = "share", e.Subscribe = "subscribe", e))(Ct || {}), Lt = /* @__PURE__ */ ((e) => (e.Top = "top", e.Bottom = "bottom", e.Hidden = "hidden", e))(Lt || {}), Rt = /* @__PURE__ */ ((e) => (e.Automatic = "automatic", e.Exactly = "exactly", e.Range = "range", e.AtLeast = "atleast", e.AtMost = "atmost", e))(Rt || {}), s = /* @__PURE__ */ ((e) => (e.CustomViewLoaded = "customviewloaded", e.CustomViewRemoved = "customviewremoved", e.CustomViewSaved = "customviewsaved", e.CustomViewSetDefault = "customviewsetdefault", e.EditButtonClicked = "editbuttonclicked", e.EditInDesktopButtonClicked = "editindesktopbuttonclicked", e.FilterChanged = "filterchanged", e.FirstVizSizeKnown = "firstvizsizeknown", e.FirstInteractive = "firstinteractive", e.CustomMarkContextMenuEvent = "custommarkcontextmenu", e.MarkSelectionChanged = "markselectionchanged", e.ParameterChanged = "parameterchanged", e.ToolbarStateChanged = "toolbarstatechanged", e.WorkbookReadyToClose = "workbookreadytoclose", e.WorkbookPublished = "workbookpublished", e.WorkbookPublishedAs = "workbookpublishedas", e.UrlAction = "urlaction", e.TabSwitched = "tabswitched", e.StoryPointSwitched = "storypointswitched", e))(s || {}), bt = /* @__PURE__ */ ((e) => (e.Ubertip = "ubertip", e))(bt || {}), Pt = /* @__PURE__ */ ((e) => (e.ExportPDF = "export-pdf", e.ExportPowerPoint = "export-powerpoint", e.ExportData = "export-data", e.ExportCrossTab = "export-cross-tab", e.ExportWorkbook = "export-workbook", e.Share = "share", e))(Pt || {});
function _t(e, l) {
  const v = M.useRef(null);
  return M.useImperativeHandle(l, () => v.current), M.useEffect(() => {
    if (v && v.current) {
      const a = v.current;
      return e.onEventListenerCustomMarkContextMenuEvent && a.addEventListener(
        s.CustomMarkContextMenuEvent,
        e.onEventListenerCustomMarkContextMenuEvent
      ), e.onEventListenerCustomViewLoaded && a.addEventListener(
        s.CustomViewLoaded,
        e.onEventListenerCustomViewLoaded
      ), e.onEventListenerCustomViewRemoved && a.addEventListener(
        s.CustomViewRemoved,
        e.onEventListenerCustomViewRemoved
      ), e.onEventListenerCustomViewSaved && a.addEventListener(
        s.CustomViewSaved,
        e.onEventListenerCustomViewSaved
      ), e.onEventListenerCustomViewSetDefault && a.addEventListener(
        s.CustomViewSetDefault,
        e.onEventListenerCustomViewSetDefault
      ), e.onEventListenerEditButtonClicked && a.addEventListener(
        s.EditButtonClicked,
        e.onEventListenerEditButtonClicked
      ), e.onEventListenerEditInDesktopButtonClicked && a.addEventListener(
        s.EditInDesktopButtonClicked,
        e.onEventListenerEditInDesktopButtonClicked
      ), e.onEventListenerFilterChanged && a.addEventListener(
        s.FilterChanged,
        e.onEventListenerFilterChanged
      ), e.onEventListenerFirstInteractive && a.addEventListener(
        s.FirstInteractive,
        e.onEventListenerFirstInteractive
      ), e.onEventListenerFirstVizSizeKnown && a.addEventListener(
        s.FirstVizSizeKnown,
        e.onEventListenerFirstVizSizeKnown
      ), e.onEventListenerMarkSelectionChanged && a.addEventListener(
        s.MarkSelectionChanged,
        e.onEventListenerMarkSelectionChanged
      ), e.onEventListenerToolbarStateChanged && a.addEventListener(
        s.ToolbarStateChanged,
        e.onEventListenerToolbarStateChanged
      ), e.onEventListenerTabSwitched && a.addEventListener(
        s.TabSwitched,
        e.onEventListenerTabSwitched
      ), e.onEventListenerParameterChanged && a.addEventListener(
        s.ParameterChanged,
        e.onEventListenerParameterChanged
      ), e.onEventListenerUrlAction && a.addEventListener(
        s.UrlAction,
        e.onEventListenerUrlAction
      ), e.onEventListenerWorkbookPublished && a.addEventListener(
        s.WorkbookPublished,
        e.onEventListenerWorkbookPublished
      ), e.onEventListenerWorkbookPublishedAs && a.addEventListener(
        s.WorkbookPublishedAs,
        e.onEventListenerWorkbookPublishedAs
      ), e.onEventListenerWorkbookReadyToClose && a.addEventListener(
        s.WorkbookReadyToClose,
        e.onEventListenerWorkbookReadyToClose
      ), () => {
        e.onEventListenerCustomMarkContextMenuEvent && a.removeEventListener(
          s.CustomMarkContextMenuEvent,
          e.onEventListenerCustomMarkContextMenuEvent
        ), e.onEventListenerCustomViewLoaded && a.removeEventListener(
          s.CustomViewLoaded,
          e.onEventListenerCustomViewLoaded
        ), e.onEventListenerCustomViewRemoved && a.removeEventListener(
          s.CustomViewRemoved,
          e.onEventListenerCustomViewRemoved
        ), e.onEventListenerCustomViewSaved && a.removeEventListener(
          s.CustomViewSaved,
          e.onEventListenerCustomViewSaved
        ), e.onEventListenerCustomViewSetDefault && a.removeEventListener(
          s.CustomViewSetDefault,
          e.onEventListenerCustomViewSetDefault
        ), e.onEventListenerEditButtonClicked && a.removeEventListener(
          s.EditButtonClicked,
          e.onEventListenerEditButtonClicked
        ), e.onEventListenerEditInDesktopButtonClicked && a.removeEventListener(
          s.EditInDesktopButtonClicked,
          e.onEventListenerEditInDesktopButtonClicked
        ), e.onEventListenerFilterChanged && a.removeEventListener(
          s.FilterChanged,
          e.onEventListenerFilterChanged
        ), e.onEventListenerFirstInteractive && a.removeEventListener(
          s.FirstInteractive,
          e.onEventListenerFirstInteractive
        ), e.onEventListenerFirstVizSizeKnown && a.removeEventListener(
          s.FirstVizSizeKnown,
          e.onEventListenerFirstVizSizeKnown
        ), e.onEventListenerMarkSelectionChanged && a.removeEventListener(
          s.MarkSelectionChanged,
          e.onEventListenerMarkSelectionChanged
        ), e.onEventListenerToolbarStateChanged && a.removeEventListener(
          s.ToolbarStateChanged,
          e.onEventListenerToolbarStateChanged
        ), e.onEventListenerTabSwitched && a.removeEventListener(
          s.TabSwitched,
          e.onEventListenerTabSwitched
        ), e.onEventListenerParameterChanged && a.removeEventListener(
          s.ParameterChanged,
          e.onEventListenerParameterChanged
        ), e.onEventListenerUrlAction && a.removeEventListener(
          s.UrlAction,
          e.onEventListenerUrlAction
        ), e.onEventListenerWorkbookPublished && a.removeEventListener(
          s.WorkbookPublished,
          e.onEventListenerWorkbookPublished
        ), e.onEventListenerWorkbookPublishedAs && a.removeEventListener(
          s.WorkbookPublishedAs,
          e.onEventListenerWorkbookPublishedAs
        ), e.onEventListenerWorkbookReadyToClose && a.removeEventListener(
          s.WorkbookReadyToClose,
          e.onEventListenerWorkbookReadyToClose
        );
      };
    }
    return () => {
    };
  }, [v]), /* @__PURE__ */ j("tableau-viz", { id: "tableauViz", ref: v, ...e });
}
const xt = M.forwardRef(_t), T = {};
function Ot(e) {
  const l = document.querySelector(
    `script[src="${e}"]`
  ), v = l == null ? void 0 : l.getAttribute("data-status");
  return {
    node: l,
    status: v
  };
}
function It(e, l) {
  const [v, a] = xe(() => !e || l != null && l.shouldPreventLoad ? "idle" : typeof window > "u" ? "loading" : T[e] ?? "loading"), [x, P] = xe("");
  return dt(() => {
    if (!e || l != null && l.shouldPreventLoad)
      return;
    const L = T[e];
    if (L === "ready" || L === "error") {
      a(L);
      return;
    }
    const E = Ot(e);
    let i = E.node;
    if (i)
      a(E.status ?? L ?? "loading");
    else {
      i = document.createElement("script"), i.type = "module", i.src = e, i.async = !0, i.setAttribute("data-status", "loading"), document.body.appendChild(i);
      const m = (w) => {
        const _ = w.type === "load" ? "ready" : "error";
        i == null || i.setAttribute("data-status", _);
      };
      i.addEventListener("load", m), i.addEventListener("error", m);
    }
    const R = (m) => {
      const w = m.type === "load" ? "ready" : "error";
      w === "error" && P(m.message ?? JSON.stringify(m)), a(w), T[e] = w;
    };
    return i.addEventListener("load", R), i.addEventListener("error", R), () => {
      i && (i.removeEventListener("load", R), i.removeEventListener("error", R)), i && (l != null && l.removeOnUnmount) && i.remove();
    };
  }, [e, l == null ? void 0 : l.shouldPreventLoad, l == null ? void 0 : l.removeOnUnmount]), { status: v, errorMessage: x };
}
const Mt = {};
function Wt(e) {
  return new URL(e).hostname;
}
function gt(e, l, v = !1) {
  return `https://${e}/javascripts/api/tableau.embedding.${l ?? "3.latest"}${v ? ".min" : ""}.js`;
}
function Dt(e) {
  const l = e.version ?? "latest", [v, a] = M.useState(() => e.sourceUrl ? typeof window > "u" ? "loading" : Mt[l] ?? "loading" : "idle"), [x, P] = M.useState(), [L, E] = M.useState(null), i = Wt(e.sourceUrl), R = gt(i), { status: m, errorMessage: w } = It(R);
  return M.useEffect(() => {
    if (m === "ready") {
      const _ = /* @__PURE__ */ j(
        xt,
        {
          ref: e.ref,
          src: e.sourceUrl,
          ...e.optionalProperties
        }
      );
      E(_), a("ready");
    }
    v === "error" && P(w), m === "idle" && (P(""), E(null)), a(m);
  }, [m]), {
    status: v,
    component: L,
    errorMessage: x,
    isIdle: v === "idle",
    isLoading: v === "loading",
    isError: v === "error",
    isSuccess: v === "ready"
  };
}
function Nt(e, l) {
  const { sourceUrl: v, version: a, ...x } = e, { isSuccess: P, isError: L, component: E, ...i } = Dt({
    ref: l,
    sourceUrl: v,
    version: a,
    optionalProperties: x
  });
  return L ? (console.error("Error loading tableau embed api: " + i.errorMessage), /* @__PURE__ */ j("h3", { children: "error loading tableau" })) : P ? E ? /* @__PURE__ */ j(ht, { children: E }) : (console.error("finished loading but component is falsy"), /* @__PURE__ */ j("h3", { children: 'component error: falsy"' })) : (console.warn("Not implemented: default loading spinner"), /* @__PURE__ */ j("h3", { children: "loading..." }));
}
const vn = M.forwardRef(Nt);
var jt = /* @__PURE__ */ ((e) => (e.Cluster = "cluster", e.Forecast = "forecast", e.TrendLine = "trend-line", e))(jt || {}), Ft = /* @__PURE__ */ ((e) => (e.Mark = "mark", e.Point = "point", e.Area = "area", e))(Ft || {}), Ut = /* @__PURE__ */ ((e) => (e.Discrete = "discrete", e.Continuous = "continuous", e))(Ut || {}), Bt = /* @__PURE__ */ ((e) => (e.WorksheetTitle = "tableau-worksheet-title", e.Worksheet = "tableau-worksheet", e.Tooltip = "tableau-tooltip", e.StoryTitle = "tableau-story-title", e.DashboardTitle = "tableau-dashboard-title", e))(Bt || {}), Vt = /* @__PURE__ */ ((e) => (e.Blank = "blank", e.Worksheet = "worksheet", e.QuickFilter = "quick-filter", e.ParameterControl = "parameter-control", e.PageFilter = "page-filter", e.Legend = "legend", e.Title = "title", e.Text = "text", e.Image = "image", e.WebPage = "web-page", e.Extension = "extension", e))(Vt || {}), We = /* @__PURE__ */ ((e) => (e.Show = "show", e.Hide = "hide", e))(We || {}), Yt = /* @__PURE__ */ ((e) => (e.String = "string", e.Int = "int", e.Float = "float", e.Bool = "bool", e.Date = "date", e.DateTime = "date-time", e.Spatial = "spatial", e))(Yt || {}), $t = /* @__PURE__ */ ((e) => (e.Added = "added", e.Removed = "removed", e.IsFloatingChanged = "is-floating-changed", e.IsVisibleChanged = "is-visible-changed", e.PositionChanged = "position-changed", e.SizeChanged = "size-changed", e.NameChanged = "name-changed", e))($t || {}), qt = /* @__PURE__ */ ((e) => (e.Last = "last", e.LastN = "last-n", e.Next = "next", e.NextN = "next-n", e.Current = "current", e.ToDate = "to-date", e))(qt || {}), Ht = /* @__PURE__ */ ((e) => (e.Window = "window", e.Modal = "modal", e.Modeless = "modeless", e))(Ht || {}), Kt = /* @__PURE__ */ ((e) => (e.Column = "column", e.Row = "row", e.Page = "page", e.Filter = "filter", e.MarksType = "marks-type", e.MeasureValues = "measure-values", e.Color = "color", e.Size = "size", e.Label = "label", e.Detail = "detail", e.Tooltip = "tooltip", e.Shape = "shape", e.Path = "path", e.Angle = "angle", e))(Kt || {}), Gt = /* @__PURE__ */ ((e) => (e.Sum = "sum", e.Avg = "avg", e.Min = "min", e.Max = "max", e.Stdev = "stdev", e.Stdevp = "stdevp", e.Var = "var", e.Varp = "varp", e.Count = "count", e.Countd = "countd", e.Median = "median", e.Attr = "attr", e.None = "none", e.Year = "year", e.Qtr = "qtr", e.Month = "month", e.Day = "day", e.Hour = "hour", e.Minute = "minute", e.Second = "second", e.Week = "week", e.Weekday = "weekday", e.MonthYear = "month-year", e.Mdy = "mdy", e.End = "end", e.TruncYear = "trunc-year", e.TruncQtr = "trunc-qtr", e.TruncMonth = "trunc-month", e.TruncWeek = "trunc-week", e.TruncDay = "trunc-day", e.TruncHour = "trunc-hour", e.TruncMinute = "trunc-minute", e.TruncSecond = "trunc-second", e.Quart1 = "quart1", e.Quart3 = "quart3", e.Skewness = "skewness", e.Kurtosis = "kurtosis", e.InOut = "in-out", e.User = "user", e))(Gt || {}), yt = /* @__PURE__ */ ((e) => (e.Dimension = "dimension", e.Measure = "measure", e.Unknown = "unknown", e))(yt || {}), Jt = /* @__PURE__ */ ((e) => (e.Categorical = "categorical", e.Range = "range", e.Hierarchical = "hierarchical", e.RelativeDate = "relative-date", e))(Jt || {}), zt = /* @__PURE__ */ ((e) => (e.Add = "add", e.All = "all", e.Replace = "replace", e.Remove = "remove", e))(zt || {}), Xt = /* @__PURE__ */ ((e) => (e.Relevant = "relevant", e.Database = "database", e))(Xt || {}), Zt = /* @__PURE__ */ ((e) => (e.NullValues = "null-values", e.NonNullValues = "non-null-values", e.AllValues = "all-values", e))(Zt || {}), Qt = /* @__PURE__ */ ((e) => (e.AllValues = "all-values", e.OnlyNativeValues = "only-native-values", e.OnlyFormattedValues = "only-formatted-values", e))(Qt || {}), At = /* @__PURE__ */ ((e) => (e.Bar = "bar", e.Line = "line", e.Area = "area", e.Square = "square", e.Circle = "circle", e.Shape = "shape", e.Text = "text", e.Map = "map", e.Pie = "pie", e.GanttBar = "gantt-bar", e.Polygon = "polygon", e))(At || {}), pt = /* @__PURE__ */ ((e) => (e.All = "all", e.List = "list", e.Range = "range", e))(pt || {}), Tt = /* @__PURE__ */ ((e) => (e.Years = "years", e.Quarters = "quarters", e.Months = "months", e.Weeks = "weeks", e.Days = "days", e.Hours = "hours", e.Minutes = "minutes", e.Seconds = "seconds", e))(Tt || {}), en = /* @__PURE__ */ ((e) => (e.RunningTotal = "running-total", e.Difference = "difference", e.PercentDifference = "percent-difference", e.PercentOfTotal = "percent-of-total", e.Rank = "rank", e.Percentile = "percentile", e.MovingAverage = "moving-average", e.YTDTotal = "ytd-total", e.CompoundGrowthRate = "compound-growth-rate", e.YearOverYearGrowth = "year-over-year-growth", e.YTDGrowth = "ytd-growth", e.Undefined = "undefined", e))(en || {}), tn = /* @__PURE__ */ ((e) => (e.Replace = "select-replace", e.Add = "select-add", e.Remove = "select-remove", e))(tn || {}), nn = /* @__PURE__ */ ((e) => (e.Dashboard = "dashboard", e.Story = "story", e.Worksheet = "worksheet", e))(nn || {}), rn = /* @__PURE__ */ ((e) => (e.Increasing = "increasing", e.Decreasing = "decreasing", e))(rn || {}), an = /* @__PURE__ */ ((e) => (e.Linear = "linear", e.Logarithmic = "logarithmic", e.Exponential = "exponential", e.Polynomial = "polynomial", e))(an || {}), on = /* @__PURE__ */ ((e) => (e.Slow = "slow", e.Normal = "normal", e.Fast = "fast", e))(on || {}), sn = /* @__PURE__ */ ((e) => (e.AllSelected = "all-selected", e.NoneSelected = "none-selected", e.SomeSelected = "some-selected", e.UnknownSelected = "unknown-selected", e))(sn || {});
const mn = { ...We };
var un = /* @__PURE__ */ ((e) => (e.Src = "src", e.Width = "width", e.Height = "height", e.Token = "token", e.TouchOptimize = "touch-optimize", e.HideEditInDesktopButton = "hide-edit-in-desktop-button", e.SuppressDefaultEditBehavior = "suppress-default-edit-behavior", e.Debug = "debug", e.DisableVersionCheck = "disable-version-check", e.OnEditInDesktopButtonClicked = "onEditInDesktopButtonClicked", e.OnFirstVizSizeKnown = "onFirstVizSizeKnown", e.OnFirstInteractive = "onFirstInteractive", e.DisableUrlActionsPopups = "disable-url-actions", e.HideTabs = "hide-tabs", e.Toolbar = "toolbar", e.InstanceIdToClone = "instance-id-to-clone", e.Device = "device", e.HideEditButton = "hide-edit-button", e.OnEditButtonClicked = "onEditButtonClicked", e.OnFilterChanged = "onFilterChanged", e.OnCustomMarkContextMenuEvent = "onCustomMarkContextMenuEvent", e.OnMarkSelectionChanged = "onMarkSelectionChanged", e.OnParameterChanged = "onParameterChanged", e.OnToolbarStateChanged = "onToolbarStateChanged", e.OnUrlAction = "onUrlAction", e.OnTabSwitched = "onTabSwitched", e.OnCustomViewLoaded = "onCustomViewLoaded", e.OnCustomViewRemoved = "onCustomViewRemoved", e.OnCustomViewSaved = "onCustomViewSaved", e.OnCustomViewSetDefault = "onCustomViewSetDefault", e.OnStoryPointSwitched = "onStoryPointSwitched", e))(un || {}), ln = /* @__PURE__ */ ((e) => (e.Src = "src", e.Width = "width", e.Height = "height", e.Token = "token", e.TouchOptimize = "touch-optimize", e.HideEditInDesktopButton = "hide-edit-in-desktop-button", e.SuppressDefaultEditBehavior = "suppress-default-edit-behavior", e.Debug = "debug", e.DisableVersionCheck = "disable-version-check", e.OnEditInDesktopButtonClicked = "onEditInDesktopButtonClicked", e.OnFirstVizSizeKnown = "onFirstVizSizeKnown", e.OnFirstInteractive = "onFirstInteractive", e.OnWorkbookPublished = "onWorkbookPublished", e.OnWorkbookPublishedAs = "onWorkbookPublishedAs", e.OnWorkbookReadyToClose = "onWorkbookReadyToClose", e.HideCloseButton = "hide-close-button", e))(ln || {}), cn = /* @__PURE__ */ ((e) => (e.VizFilter = "viz-filter", e.VizParameter = "viz-parameter", e.CustomParameter = "custom-parameter", e))(cn || {}), fn = /* @__PURE__ */ ((e) => (e.Field = "field", e.Value = "value", e.Name = "name", e))(fn || {});
export {
  jt as AnalyticsObjectType,
  Ft as AnnotationType,
  bt as ApiMenuType,
  Bt as ClassNameKey,
  Ut as ColumnType,
  $t as DashboardLayoutChange,
  Vt as DashboardObjectType,
  We as DashboardObjectVisibilityType,
  Yt as DataType,
  qt as DateRangeType,
  kt as DeviceType,
  Ht as DialogStyle,
  wt as EmbeddingErrorCodes,
  Kt as EncodingType,
  Gt as FieldAggregationType,
  yt as FieldRoleType,
  Et as FileFormats,
  Xt as FilterDomainType,
  Zt as FilterNullOption,
  Jt as FilterType,
  zt as FilterUpdateType,
  sn as HierarchicalLevelSelectionState,
  Qt as IncludeDataValuesOption,
  At as MarkType,
  pt as ParameterValueType,
  Tt as PeriodType,
  en as QuickTableCalcType,
  on as ReplaySpeedType,
  St as RevertVizSelection,
  tn as SelectionUpdateType,
  Rt as SheetSizeBehavior,
  nn as SheetType,
  rn as SortDirection,
  Pt as TableauDialogType,
  vn as TableauEmbed,
  s as TableauEventType,
  Lt as Toolbar,
  Ct as ToolbarButtons,
  an as TrendLineModelType,
  un as VizAttributes,
  ln as VizAuthoringAttributes,
  fn as VizChildElementAttributes,
  cn as VizChildElements,
  mn as ZoneVisibilityType,
  Dt as useTableau
};
