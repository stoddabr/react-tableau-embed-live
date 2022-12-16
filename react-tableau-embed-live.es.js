import * as x from "react";
import xe, { useState as _e, useEffect as ft } from "react";
var ee = { exports: {} }, W = {};
var Pe;
function dt() {
  if (Pe)
    return W;
  Pe = 1;
  var t = xe, l = Symbol.for("react.element"), v = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, _ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(g, o, S) {
    var E, b = {}, y = null, U = null;
    S !== void 0 && (y = "" + S), o.key !== void 0 && (y = "" + o.key), o.ref !== void 0 && (U = o.ref);
    for (E in o)
      i.call(o, E) && !w.hasOwnProperty(E) && (b[E] = o[E]);
    if (g && g.defaultProps)
      for (E in o = g.defaultProps, o)
        b[E] === void 0 && (b[E] = o[E]);
    return { $$typeof: l, type: g, key: y, ref: U, props: b, _owner: _.current };
  }
  return W.Fragment = v, W.jsx = k, W.jsxs = k, W;
}
var I = {};
var Oe;
function vt() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = xe, l = Symbol.for("react.element"), v = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), g = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), te = Symbol.iterator, Te = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Te];
      return typeof r == "function" ? r : null;
    }
    var F = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        Ve("error", e, n);
      }
    }
    function Ve(e, r, n) {
      {
        var a = F.ReactDebugCurrentFrame, f = a.getStackAddendum();
        f !== "" && (r += "%s", n = n.concat([f]));
        var d = n.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var je = !1, Ae = !1, De = !1, Me = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === w || We || e === _ || e === S || e === E || Me || e === U || je || Ae || De || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === b || e.$$typeof === k || e.$$typeof === g || e.$$typeof === o || e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ue(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var f = r.displayName || r.name || "";
      return f !== "" ? n + "(" + f + ")" : n;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case v:
          return "Portal";
        case w:
          return "Profiler";
        case _:
          return "StrictMode";
        case S:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ne(r) + ".Consumer";
          case k:
            var n = e;
            return ne(n._context) + ".Provider";
          case o:
            return Ue(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : P(e.type) || "Memo";
          case y: {
            var f = e, d = f._payload, c = f._init;
            try {
              return P(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, D = 0, ie, ae, oe, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function $e() {
      {
        if (D === 0) {
          ie = console.log, ae = console.info, oe = console.warn, se = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function ze() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: ie
            }),
            info: T({}, e, {
              value: ae
            }),
            warn: T({}, e, {
              value: oe
            }),
            error: T({}, e, {
              value: se
            }),
            group: T({}, e, {
              value: ue
            }),
            groupCollapsed: T({}, e, {
              value: le
            }),
            groupEnd: T({}, e, {
              value: ce
            })
          });
        }
        D < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = F.ReactCurrentDispatcher, p;
    function $(e, r, n) {
      {
        if (p === void 0)
          try {
            throw Error();
          } catch (f) {
            var a = f.stack.trim().match(/\n( *(at )?)/);
            p = a && a[1] || "";
          }
        return `
` + p + e;
      }
    }
    var q = !1, z;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Be();
    }
    function de(e, r) {
      if (!e || q)
        return "";
      {
        var n = z.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      q = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = K.current, K.current = null, $e();
      try {
        if (r) {
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
            } catch (O) {
              a = O;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (O) {
              a = O;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            a = O;
          }
          e();
        }
      } catch (O) {
        if (O && a && typeof O.stack == "string") {
          for (var u = O.stack.split(`
`), L = a.stack.split(`
`), m = u.length - 1, h = L.length - 1; m >= 1 && h >= 0 && u[m] !== L[h]; )
            h--;
          for (; m >= 1 && h >= 0; m--, h--)
            if (u[m] !== L[h]) {
              if (m !== 1 || h !== 1)
                do
                  if (m--, h--, h < 0 || u[m] !== L[h]) {
                    var R = `
` + u[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, R), R;
                  }
                while (m >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        q = !1, K.current = d, ze(), Error.prepareStackTrace = f;
      }
      var j = e ? e.displayName || e.name : "", ye = j ? $(j) : "";
      return typeof e == "function" && z.set(e, ye), ye;
    }
    function Ye(e, r, n) {
      return de(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ne(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case S:
          return $("Suspense");
        case E:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            return Ye(e.render);
          case b:
            return B(e.type, r, n);
          case y: {
            var a = e, f = a._payload, d = a._init;
            try {
              return B(d(f), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ve = {}, Ee = F.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, n = B(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Ke(e, r, n, a, f) {
      {
        var d = Function.call.bind(Y);
        for (var c in e)
          if (d(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var L = Error((a || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              u = e[c](r, c, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              u = m;
            }
            u && !(u instanceof Error) && (N(f), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, c, typeof u), N(null)), u instanceof Error && !(u.message in ve) && (ve[u.message] = !0, N(f), C("Failed %s type: %s", n, u.message), N(null));
          }
      }
    }
    var pe = Array.isArray;
    function J(e) {
      return pe(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Je(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function he(e) {
      if (Je(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), me(e);
    }
    var M = F.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ge, G;
    G = {};
    function He(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var n = P(M.current.type);
        G[n] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(M.current.type), e.ref), G[n] = !0);
      }
    }
    function Qe(e, r) {
      {
        var n = function() {
          be || (be = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function et(e, r) {
      {
        var n = function() {
          ge || (ge = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var tt = function(e, r, n, a, f, d, c) {
      var u = {
        $$typeof: l,
        type: e,
        key: r,
        ref: n,
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
        value: a
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function rt(e, r, n, a, f) {
      {
        var d, c = {}, u = null, L = null;
        n !== void 0 && (he(n), u = "" + n), Xe(r) && (he(r.key), u = "" + r.key), He(r) && (L = r.ref, Ze(r, f));
        for (d in r)
          Y.call(r, d) && !Ge.hasOwnProperty(d) && (c[d] = r[d]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (d in m)
            c[d] === void 0 && (c[d] = m[d]);
        }
        if (u || L) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && Qe(c, h), L && et(c, h);
        }
        return tt(e, u, L, f, a, M.current, c);
      }
    }
    var H = F.ReactCurrentOwner, Ce = F.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, n = B(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Le() {
      {
        if (H.current) {
          var e = P(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nt(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var ke = {};
    function it(e) {
      {
        var r = Le();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = it(r);
        if (ke[n])
          return;
        ke[n] = !0;
        var a = "";
        e && e._owner && e._owner !== H.current && (a = " It was passed a child from " + P(e._owner.type) + "."), V(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), V(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            Z(a) && Se(a, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Fe(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), c; !(c = d.next()).done; )
              Z(c.value) && Se(c.value, r);
        }
      }
    }
    function at(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === o || r.$$typeof === b))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = P(r);
          Ke(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var f = P(r);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ot(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            V(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function we(e, r, n, a, f, d) {
      {
        var c = Ie(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = nt(f);
          L ? u += L : u += Le();
          var m;
          e === null ? m = "null" : J(e) ? m = "array" : e !== void 0 && e.$$typeof === l ? (m = "<" + (P(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, u);
        }
        var h = rt(e, r, n, f, d);
        if (h == null)
          return h;
        if (c) {
          var R = r.children;
          if (R !== void 0)
            if (a)
              if (J(R)) {
                for (var j = 0; j < R.length; j++)
                  Re(R[j], e);
                Object.freeze && Object.freeze(R);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(R, e);
        }
        return e === i ? ot(h) : at(h), h;
      }
    }
    function st(e, r, n) {
      return we(e, r, n, !0);
    }
    function ut(e, r, n) {
      return we(e, r, n, !1);
    }
    var lt = ut, ct = st;
    I.Fragment = i, I.jsx = lt, I.jsxs = ct;
  }()), I;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = dt() : t.exports = vt();
})(ee);
const Et = ee.exports.Fragment, A = ee.exports.jsx;
var s = /* @__PURE__ */ ((t) => (t.CustomViewLoaded = "customviewloaded", t.CustomViewRemoved = "customviewremoved", t.CustomViewSaved = "customviewsaved", t.CustomViewSetDefault = "customviewsetdefault", t.EditButtonClicked = "editbuttonclicked", t.EditInDesktopButtonClicked = "editindesktopbuttonclicked", t.FilterChanged = "filterchanged", t.FirstVizSizeKnown = "firstvizsizeknown", t.FirstInteractive = "firstinteractive", t.CustomMarkContextMenuEvent = "custommarkcontextmenu", t.MarkSelectionChanged = "markselectionchanged", t.ParameterChanged = "parameterchanged", t.ToolbarStateChanged = "toolbarstatechanged", t.WorkbookReadyToClose = "workbookreadytoclose", t.WorkbookPublished = "workbookpublished", t.WorkbookPublishedAs = "workbookpublishedas", t.UrlAction = "urlaction", t.TabSwitched = "tabswitched", t.StoryPointSwitched = "storypointswitched", t))(s || {});
function mt(t, l) {
  const v = x.useRef(null);
  return x.useImperativeHandle(l, () => v.current), x.useEffect(() => {
    if (v && v.current) {
      const i = v.current;
      return t.onEventListenerCustomMarkContextMenuEvent && i.addEventListener(
        s.CustomMarkContextMenuEvent,
        t.onEventListenerCustomMarkContextMenuEvent
      ), t.onEventListenerCustomViewLoaded && i.addEventListener(
        s.CustomViewLoaded,
        t.onEventListenerCustomViewLoaded
      ), t.onEventListenerCustomViewRemoved && i.addEventListener(
        s.CustomViewRemoved,
        t.onEventListenerCustomViewRemoved
      ), t.onEventListenerCustomViewSaved && i.addEventListener(
        s.CustomViewSaved,
        t.onEventListenerCustomViewSaved
      ), t.onEventListenerCustomViewSetDefault && i.addEventListener(
        s.CustomViewSetDefault,
        t.onEventListenerCustomViewSetDefault
      ), t.onEventListenerEditButtonClicked && i.addEventListener(
        s.EditButtonClicked,
        t.onEventListenerEditButtonClicked
      ), t.onEventListenerEditInDesktopButtonClicked && i.addEventListener(
        s.EditInDesktopButtonClicked,
        t.onEventListenerEditInDesktopButtonClicked
      ), t.onEventListenerFilterChanged && i.addEventListener(
        s.FilterChanged,
        t.onEventListenerFilterChanged
      ), t.onEventListenerFirstInteractive && i.addEventListener(
        s.FirstInteractive,
        t.onEventListenerFirstInteractive
      ), t.onEventListenerFirstVizSizeKnown && i.addEventListener(
        s.FirstVizSizeKnown,
        t.onEventListenerFirstVizSizeKnown
      ), t.onEventListenerMarkSelectionChanged && i.addEventListener(
        s.MarkSelectionChanged,
        t.onEventListenerMarkSelectionChanged
      ), t.onEventListenerToolbarStateChanged && i.addEventListener(
        s.ToolbarStateChanged,
        t.onEventListenerToolbarStateChanged
      ), t.onEventListenerTabSwitched && i.addEventListener(
        s.TabSwitched,
        t.onEventListenerTabSwitched
      ), t.onEventListenerParameterChanged && i.addEventListener(
        s.ParameterChanged,
        t.onEventListenerParameterChanged
      ), t.onEventListenerUrlAction && i.addEventListener(
        s.UrlAction,
        t.onEventListenerUrlAction
      ), t.onEventListenerWorkbookPublished && i.addEventListener(
        s.WorkbookPublished,
        t.onEventListenerWorkbookPublished
      ), t.onEventListenerWorkbookPublishedAs && i.addEventListener(
        s.WorkbookPublishedAs,
        t.onEventListenerWorkbookPublishedAs
      ), t.onEventListenerWorkbookReadyToClose && i.addEventListener(
        s.WorkbookReadyToClose,
        t.onEventListenerWorkbookReadyToClose
      ), () => {
        t.onEventListenerCustomMarkContextMenuEvent && i.removeEventListener(
          s.CustomMarkContextMenuEvent,
          t.onEventListenerCustomMarkContextMenuEvent
        ), t.onEventListenerCustomViewLoaded && i.removeEventListener(
          s.CustomViewLoaded,
          t.onEventListenerCustomViewLoaded
        ), t.onEventListenerCustomViewRemoved && i.removeEventListener(
          s.CustomViewRemoved,
          t.onEventListenerCustomViewRemoved
        ), t.onEventListenerCustomViewSaved && i.removeEventListener(
          s.CustomViewSaved,
          t.onEventListenerCustomViewSaved
        ), t.onEventListenerCustomViewSetDefault && i.removeEventListener(
          s.CustomViewSetDefault,
          t.onEventListenerCustomViewSetDefault
        ), t.onEventListenerEditButtonClicked && i.removeEventListener(
          s.EditButtonClicked,
          t.onEventListenerEditButtonClicked
        ), t.onEventListenerEditInDesktopButtonClicked && i.removeEventListener(
          s.EditInDesktopButtonClicked,
          t.onEventListenerEditInDesktopButtonClicked
        ), t.onEventListenerFilterChanged && i.removeEventListener(
          s.FilterChanged,
          t.onEventListenerFilterChanged
        ), t.onEventListenerFirstInteractive && i.removeEventListener(
          s.FirstInteractive,
          t.onEventListenerFirstInteractive
        ), t.onEventListenerFirstVizSizeKnown && i.removeEventListener(
          s.FirstVizSizeKnown,
          t.onEventListenerFirstVizSizeKnown
        ), t.onEventListenerMarkSelectionChanged && i.removeEventListener(
          s.MarkSelectionChanged,
          t.onEventListenerMarkSelectionChanged
        ), t.onEventListenerToolbarStateChanged && i.removeEventListener(
          s.ToolbarStateChanged,
          t.onEventListenerToolbarStateChanged
        ), t.onEventListenerTabSwitched && i.removeEventListener(
          s.TabSwitched,
          t.onEventListenerTabSwitched
        ), t.onEventListenerParameterChanged && i.removeEventListener(
          s.ParameterChanged,
          t.onEventListenerParameterChanged
        ), t.onEventListenerUrlAction && i.removeEventListener(
          s.UrlAction,
          t.onEventListenerUrlAction
        ), t.onEventListenerWorkbookPublished && i.removeEventListener(
          s.WorkbookPublished,
          t.onEventListenerWorkbookPublished
        ), t.onEventListenerWorkbookPublishedAs && i.removeEventListener(
          s.WorkbookPublishedAs,
          t.onEventListenerWorkbookPublishedAs
        ), t.onEventListenerWorkbookReadyToClose && i.removeEventListener(
          s.WorkbookReadyToClose,
          t.onEventListenerWorkbookReadyToClose
        );
      };
    }
    return () => {
    };
  }, [v]), /* @__PURE__ */ A("tableau-viz", { id: "tableauViz", ref: v, ...t });
}
const ht = x.forwardRef(mt), Q = {};
function bt(t) {
  const l = document.querySelector(
    `script[src="${t}"]`
  ), v = l == null ? void 0 : l.getAttribute("data-status");
  return {
    node: l,
    status: v
  };
}
function gt(t, l) {
  const [v, i] = _e(() => !t || l != null && l.shouldPreventLoad ? "idle" : typeof window > "u" ? "loading" : Q[t] ?? "loading"), [_, w] = _e("");
  return ft(() => {
    if (!t || l != null && l.shouldPreventLoad)
      return;
    const k = Q[t];
    if (k === "ready" || k === "error") {
      i(k);
      return;
    }
    const g = bt(t);
    let o = g.node;
    if (o)
      i(g.status ?? k ?? "loading");
    else {
      o = document.createElement("script"), o.type = "module", o.src = t, o.async = !0, o.setAttribute("data-status", "loading"), document.body.appendChild(o);
      const E = (b) => {
        const y = b.type === "load" ? "ready" : "error";
        o == null || o.setAttribute("data-status", y);
      };
      o.addEventListener("load", E), o.addEventListener("error", E);
    }
    const S = (E) => {
      const b = E.type === "load" ? "ready" : "error";
      b === "error" && w(E.message ?? JSON.stringify(E)), i(b), Q[t] = b;
    };
    return o.addEventListener("load", S), o.addEventListener("error", S), () => {
      o && (o.removeEventListener("load", S), o.removeEventListener("error", S)), o && (l != null && l.removeOnUnmount) && o.remove();
    };
  }, [t, l == null ? void 0 : l.shouldPreventLoad, l == null ? void 0 : l.removeOnUnmount]), { status: v, errorMessage: _ };
}
const Ct = {};
function Lt(t) {
  return new URL(t).hostname;
}
function kt(t, l, v = !1) {
  return `https://${t}/javascripts/api/tableau.embedding.${l ?? "3.latest"}${v ? ".min" : ""}.js`;
}
function St(t) {
  const l = t.version ?? "latest", [v, i] = x.useState(() => t.sourceUrl ? typeof window > "u" ? "loading" : Ct[l] ?? "loading" : "idle"), [_, w] = x.useState(), [k, g] = x.useState(null), o = Lt(t.sourceUrl), S = kt(o), { status: E, errorMessage: b } = gt(S);
  return x.useEffect(() => {
    if (E === "ready") {
      const y = /* @__PURE__ */ A(
        ht,
        {
          ref: t.ref,
          src: t.sourceUrl,
          ...t.optionalProperties
        }
      );
      g(y), i("ready");
    }
    v === "error" && w(b), E === "idle" && (w(""), g(null)), i(E);
  }, [E]), {
    status: v,
    component: k,
    errorMessage: _,
    isIdle: v === "idle",
    isLoading: v === "loading",
    isError: v === "error",
    isSuccess: v === "ready"
  };
}
function Rt(t, l) {
  const { sourceUrl: v, version: i, ..._ } = t, { isSuccess: w, isError: k, component: g, ...o } = St({
    ref: l,
    sourceUrl: v,
    version: i,
    optionalProperties: _
  });
  return k ? (console.error("Error loading tableau embed api: " + o.errorMessage), /* @__PURE__ */ A("h3", { children: "error loading tableau" })) : w ? g ? /* @__PURE__ */ A(Et, { children: g }) : (console.error("finished loading but component is falsy"), /* @__PURE__ */ A("h3", { children: 'component error: falsy"' })) : (console.warn("Not implemented: default loading spinner"), /* @__PURE__ */ A("h3", { children: "loading..." }));
}
const yt = x.forwardRef(Rt);
export {
  yt as TableauEmbed,
  St as useTableau
};
