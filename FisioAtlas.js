(function() {
    const I = document.createElement("link").relList;
    if (I && I.supports && I.supports("modulepreload"))
        return;
    for (const R of document.querySelectorAll('link[rel="modulepreload"]'))
        m(R);
    new MutationObserver(R => {
        for (const O of R)
            if (O.type === "childList")
                for (const Y of O.addedNodes)
                    Y.tagName === "LINK" && Y.rel === "modulepreload" && m(Y)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function A(R) {
        const O = {};
        return R.integrity && (O.integrity = R.integrity),
        R.referrerPolicy && (O.referrerPolicy = R.referrerPolicy),
        R.crossOrigin === "use-credentials" ? O.credentials = "include" : R.crossOrigin === "anonymous" ? O.credentials = "omit" : O.credentials = "same-origin",
        O
    }
    function m(R) {
        if (R.ep)
            return;
        R.ep = !0;
        const O = A(R);
        fetch(R.href, O)
    }
}
)();
function Ip(v) {
    return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v
}
var Iu = {
    exports: {}
}
  , un = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp;
function Nh() {
    if (cp)
        return un;
    cp = 1;
    var v = Symbol.for("react.transitional.element")
      , I = Symbol.for("react.fragment");
    function A(m, R, O) {
        var Y = null;
        if (O !== void 0 && (Y = "" + O),
        R.key !== void 0 && (Y = "" + R.key),
        "key" in R) {
            O = {};
            for (var J in R)
                J !== "key" && (O[J] = R[J])
        } else
            O = R;
        return R = O.ref,
        {
            $$typeof: v,
            type: m,
            key: Y,
            ref: R !== void 0 ? R : null,
            props: O
        }
    }
    return un.Fragment = I,
    un.jsx = A,
    un.jsxs = A,
    un
}
var dp;
function Rh() {
    return dp || (dp = 1,
    Iu.exports = Nh()),
    Iu.exports
}
var u = Rh()
  , Nu = {
    exports: {}
}
  , V = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp;
function zh() {
    if (mp)
        return V;
    mp = 1;
    var v = Symbol.for("react.transitional.element")
      , I = Symbol.for("react.portal")
      , A = Symbol.for("react.fragment")
      , m = Symbol.for("react.strict_mode")
      , R = Symbol.for("react.profiler")
      , O = Symbol.for("react.consumer")
      , Y = Symbol.for("react.context")
      , J = Symbol.for("react.forward_ref")
      , oe = Symbol.for("react.suspense")
      , j = Symbol.for("react.memo")
      , z = Symbol.for("react.lazy")
      , w = Symbol.for("react.activity")
      , L = Symbol.for("react.view_transition")
      , qe = Symbol.iterator;
    function ea(d) {
        return d === null || typeof d != "object" ? null : (d = qe && d[qe] || d["@@iterator"],
        typeof d == "function" ? d : null)
    }
    var Ue = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Z = Object.assign
      , Ne = {};
    function Fe(d, _, b) {
        this.props = d,
        this.context = _,
        this.refs = Ne,
        this.updater = b || Ue
    }
    Fe.prototype.isReactComponent = {},
    Fe.prototype.setState = function(d, _) {
        if (typeof d != "object" && typeof d != "function" && d != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, _, "setState")
    }
    ,
    Fe.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate")
    }
    ;
    function Xa() {}
    Xa.prototype = Fe.prototype;
    function pa(d, _, b) {
        this.props = d,
        this.context = _,
        this.refs = Ne,
        this.updater = b || Ue
    }
    var ga = pa.prototype = new Xa;
    ga.constructor = pa,
    Z(ga, Fe.prototype),
    ga.isPureReactComponent = !0;
    var Ke = Array.isArray;
    function $() {}
    var ae = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , ba = Object.prototype.hasOwnProperty;
    function aa(d, _, b) {
        var E = b.ref;
        return {
            $$typeof: v,
            type: d,
            key: _,
            ref: E !== void 0 ? E : null,
            props: b
        }
    }
    function Je(d, _) {
        return aa(d.type, _, d.props)
    }
    function ta(d) {
        return typeof d == "object" && d !== null && d.$$typeof === v
    }
    function Ha(d) {
        var _ = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + d.replace(/[=:]/g, function(b) {
            return _[b]
        })
    }
    var $e = /\/+/g;
    function Ae(d, _) {
        return typeof d == "object" && d !== null && d.key != null ? Ha("" + d.key) : _.toString(36)
    }
    function C(d) {
        switch (d.status) {
        case "fulfilled":
            return d.value;
        case "rejected":
            throw d.reason;
        default:
            switch (typeof d.status == "string" ? d.then($, $) : (d.status = "pending",
            d.then(function(_) {
                d.status === "pending" && (d.status = "fulfilled",
                d.value = _)
            }, function(_) {
                d.status === "pending" && (d.status = "rejected",
                d.reason = _)
            })),
            d.status) {
            case "fulfilled":
                return d.value;
            case "rejected":
                throw d.reason
            }
        }
        throw d
    }
    function Q(d, _, b, E, D) {
        var X = typeof d;
        (X === "undefined" || X === "boolean") && (d = null);
        var ie = !1;
        if (d === null)
            ie = !0;
        else
            switch (X) {
            case "bigint":
            case "string":
            case "number":
                ie = !0;
                break;
            case "object":
                switch (d.$$typeof) {
                case v:
                case I:
                    ie = !0;
                    break;
                case z:
                    return ie = d._init,
                    Q(ie(d._payload), _, b, E, D)
                }
            }
        if (ie)
            return D = D(d),
            ie = E === "" ? "." + Ae(d, 0) : E,
            Ke(D) ? (b = "",
            ie != null && (b = ie.replace($e, "$&/") + "/"),
            Q(D, _, b, "", function(rt) {
                return rt
            })) : D != null && (ta(D) && (D = Je(D, b + (D.key == null || d && d.key === D.key ? "" : ("" + D.key).replace($e, "$&/") + "/") + ie)),
            _.push(D)),
            1;
        ie = 0;
        var H = E === "" ? "." : E + ":";
        if (Ke(d))
            for (var k = 0; k < d.length; k++)
                E = d[k],
                X = H + Ae(E, k),
                ie += Q(E, _, b, X, D);
        else if (k = ea(d),
        typeof k == "function")
            for (d = k.call(d),
            k = 0; !(E = d.next()).done; )
                E = E.value,
                X = H + Ae(E, k++),
                ie += Q(E, _, b, X, D);
        else if (X === "object") {
            if (typeof d.then == "function")
                return Q(C(d), _, b, E, D);
            throw _ = String(d),
            Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ie
    }
    function U(d, _, b) {
        if (d == null)
            return d;
        var E = []
          , D = 0;
        return Q(d, E, "", "", function(X) {
            return _.call(b, X, D++)
        }),
        E
    }
    function me(d) {
        if (d._status === -1) {
            var _ = d._result
              , b = _();
            b.then(function(E) {
                (d._status === 0 || d._status === -1) && (d._status = 1,
                d._result = E,
                b.status === void 0 && (b.status = "fulfilled",
                b.value = E))
            }, function(E) {
                (d._status === 0 || d._status === -1) && (d._status = 2,
                d._result = E,
                b.status === void 0 && (b.status = "rejected",
                b.reason = E))
            }),
            d._status === -1 && (d._status = 0,
            d._result = b)
        }
        if (d._status === 1)
            return d._result.default;
        throw d._result
    }
    var re = typeof reportError == "function" ? reportError : function(d) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var _ = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
                error: d
            });
            if (!window.dispatchEvent(_))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", d);
            return
        }
        console.error(d)
    }
    ;
    function la(d) {
        var _ = ae.T
          , b = {};
        b.types = _ !== null ? _.types : null,
        ae.T = b;
        try {
            var E = d()
              , D = ae.S;
            D !== null && D(b, E),
            typeof E == "object" && E !== null && typeof E.then == "function" && E.then($, re)
        } catch (X) {
            re(X)
        } finally {
            _ !== null && b.types !== null && (_.types = b.types),
            ae.T = _
        }
    }
    function We(d) {
        var _ = ae.T;
        if (_ !== null) {
            var b = _.types;
            b === null ? _.types = [d] : b.indexOf(d) === -1 && b.push(d)
        } else
            la(We.bind(null, d))
    }
    var ka = {
        map: U,
        forEach: function(d, _, b) {
            U(d, function() {
                _.apply(this, arguments)
            }, b)
        },
        count: function(d) {
            var _ = 0;
            return U(d, function() {
                _++
            }),
            _
        },
        toArray: function(d) {
            return U(d, function(_) {
                return _
            }) || []
        },
        only: function(d) {
            if (!ta(d))
                throw Error("React.Children.only expected to receive a single React element child.");
            return d
        }
    };
    return V.Activity = w,
    V.Children = ka,
    V.Component = Fe,
    V.Fragment = A,
    V.Profiler = R,
    V.PureComponent = pa,
    V.StrictMode = m,
    V.Suspense = oe,
    V.ViewTransition = L,
    V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae,
    V.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(d) {
            return ae.H.useMemoCache(d)
        }
    },
    V.addTransitionType = We,
    V.cache = function(d) {
        return function() {
            return d.apply(null, arguments)
        }
    }
    ,
    V.cacheSignal = function() {
        return null
    }
    ,
    V.cloneElement = function(d, _, b) {
        if (d == null)
            throw Error("The argument must be a React element, but you passed " + d + ".");
        var E = Z({}, d.props)
          , D = d.key;
        if (_ != null)
            for (X in _.key !== void 0 && (D = "" + _.key),
            _)
                !ba.call(_, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && _.ref === void 0 || (E[X] = _[X]);
        var X = arguments.length - 2;
        if (X === 1)
            E.children = b;
        else if (1 < X) {
            for (var ie = Array(X), H = 0; H < X; H++)
                ie[H] = arguments[H + 2];
            E.children = ie
        }
        return aa(d.type, D, E)
    }
    ,
    V.createContext = function(d) {
        return d = {
            $$typeof: Y,
            _currentValue: d,
            _currentValue2: d,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        d.Provider = d,
        d.Consumer = {
            $$typeof: O,
            _context: d
        },
        d
    }
    ,
    V.createElement = function(d, _, b) {
        var E, D = {}, X = null;
        if (_ != null)
            for (E in _.key !== void 0 && (X = "" + _.key),
            _)
                ba.call(_, E) && E !== "key" && E !== "__self" && E !== "__source" && (D[E] = _[E]);
        var ie = arguments.length - 2;
        if (ie === 1)
            D.children = b;
        else if (1 < ie) {
            for (var H = Array(ie), k = 0; k < ie; k++)
                H[k] = arguments[k + 2];
            D.children = H
        }
        if (d && d.defaultProps)
            for (E in ie = d.defaultProps,
            ie)
                D[E] === void 0 && (D[E] = ie[E]);
        return aa(d, X, D)
    }
    ,
    V.createRef = function() {
        return {
            current: null
        }
    }
    ,
    V.forwardRef = function(d) {
        return {
            $$typeof: J,
            render: d
        }
    }
    ,
    V.isValidElement = ta,
    V.lazy = function(d) {
        return {
            $$typeof: z,
            _payload: {
                _status: -1,
                _result: d
            },
            _init: me
        }
    }
    ,
    V.memo = function(d, _) {
        return {
            $$typeof: j,
            type: d,
            compare: _ === void 0 ? null : _
        }
    }
    ,
    V.startTransition = la,
    V.unstable_useCacheRefresh = function() {
        return ae.H.useCacheRefresh()
    }
    ,
    V.use = function(d) {
        return ae.H.use(d)
    }
    ,
    V.useActionState = function(d, _, b) {
        return ae.H.useActionState(d, _, b)
    }
    ,
    V.useCallback = function(d, _) {
        return ae.H.useCallback(d, _)
    }
    ,
    V.useContext = function(d) {
        return ae.H.useContext(d)
    }
    ,
    V.useDebugValue = function() {}
    ,
    V.useDeferredValue = function(d, _) {
        return ae.H.useDeferredValue(d, _)
    }
    ,
    V.useEffect = function(d, _) {
        return ae.H.useEffect(d, _)
    }
    ,
    V.useEffectEvent = function(d) {
        return ae.H.useEffectEvent(d)
    }
    ,
    V.useId = function() {
        return ae.H.useId()
    }
    ,
    V.useImperativeHandle = function(d, _, b) {
        return ae.H.useImperativeHandle(d, _, b)
    }
    ,
    V.useInsertionEffect = function(d, _) {
        return ae.H.useInsertionEffect(d, _)
    }
    ,
    V.useLayoutEffect = function(d, _) {
        return ae.H.useLayoutEffect(d, _)
    }
    ,
    V.useMemo = function(d, _) {
        return ae.H.useMemo(d, _)
    }
    ,
    V.useOptimistic = function(d, _) {
        return ae.H.useOptimistic(d, _)
    }
    ,
    V.useReducer = function(d, _, b) {
        return ae.H.useReducer(d, _, b)
    }
    ,
    V.useRef = function(d) {
        return ae.H.useRef(d)
    }
    ,
    V.useState = function(d) {
        return ae.H.useState(d)
    }
    ,
    V.useSyncExternalStore = function(d, _, b) {
        return ae.H.useSyncExternalStore(d, _, b)
    }
    ,
    V.useTransition = function() {
        return ae.H.useTransition()
    }
    ,
    V.version = "19.3.0",
    V
}
var fp;
function Hu() {
    return fp || (fp = 1,
    Nu.exports = zh()),
    Nu.exports
}
var de = Hu();
const Ch = Ip(de);
var Ru = {
    exports: {}
}
  , cn = {}
  , zu = {
    exports: {}
}
  , Cu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pp;
function Th() {
    return pp || (pp = 1,
    (function(v) {
        function I(C, Q) {
            var U = C.length;
            C.push(Q);
            e: for (; 0 < U; ) {
                var me = U - 1 >>> 1
                  , re = C[me];
                if (0 < R(re, Q))
                    C[me] = Q,
                    C[U] = re,
                    U = me;
                else
                    break e
            }
        }
        function A(C) {
            return C.length === 0 ? null : C[0]
        }
        function m(C) {
            if (C.length === 0)
                return null;
            var Q = C[0]
              , U = C.pop();
            if (U !== Q) {
                C[0] = U;
                e: for (var me = 0, re = C.length, la = re >>> 1; me < la; ) {
                    var We = 2 * (me + 1) - 1
                      , ka = C[We]
                      , d = We + 1
                      , _ = C[d];
                    if (0 > R(ka, U))
                        d < re && 0 > R(_, ka) ? (C[me] = _,
                        C[d] = U,
                        me = d) : (C[me] = ka,
                        C[We] = U,
                        me = We);
                    else if (d < re && 0 > R(_, U))
                        C[me] = _,
                        C[d] = U,
                        me = d;
                    else
                        break e
                }
            }
            return Q
        }
        function R(C, Q) {
            var U = C.sortIndex - Q.sortIndex;
            return U !== 0 ? U : C.id - Q.id
        }
        if (v.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var O = performance;
            v.unstable_now = function() {
                return O.now()
            }
        } else {
            var Y = Date
              , J = Y.now();
            v.unstable_now = function() {
                return Y.now() - J
            }
        }
        var oe = []
          , j = []
          , z = 1
          , w = null
          , L = 3
          , qe = !1
          , ea = !1
          , Ue = !1
          , Z = !1
          , Ne = typeof setTimeout == "function" ? setTimeout : null
          , Fe = typeof clearTimeout == "function" ? clearTimeout : null
          , Xa = typeof setImmediate < "u" ? setImmediate : null;
        function pa(C) {
            for (var Q = A(j); Q !== null; ) {
                if (Q.callback === null)
                    m(j);
                else if (Q.startTime <= C)
                    m(j),
                    Q.sortIndex = Q.expirationTime,
                    I(oe, Q);
                else
                    break;
                Q = A(j)
            }
        }
        function ga(C) {
            if (Ue = !1,
            pa(C),
            !ea)
                if (A(oe) !== null)
                    ea = !0,
                    Ke || (Ke = !0,
                    ta());
                else {
                    var Q = A(j);
                    Q !== null && Ae(ga, Q.startTime - C)
                }
        }
        var Ke = !1
          , $ = -1
          , ae = 5
          , ba = -1;
        function aa() {
            return Z ? !0 : !(v.unstable_now() - ba < ae)
        }
        function Je() {
            if (Z = !1,
            Ke) {
                var C = v.unstable_now();
                ba = C;
                var Q = !0;
                try {
                    e: {
                        ea = !1,
                        Ue && (Ue = !1,
                        Fe($),
                        $ = -1),
                        qe = !0;
                        var U = L;
                        try {
                            a: {
                                for (pa(C),
                                w = A(oe); w !== null && !(w.expirationTime > C && aa()); ) {
                                    var me = w.callback;
                                    if (typeof me == "function") {
                                        w.callback = null,
                                        L = w.priorityLevel;
                                        var re = me(w.expirationTime <= C);
                                        if (C = v.unstable_now(),
                                        typeof re == "function") {
                                            w.callback = re,
                                            pa(C),
                                            Q = !0;
                                            break a
                                        }
                                        w === A(oe) && m(oe),
                                        pa(C)
                                    } else
                                        m(oe);
                                    w = A(oe)
                                }
                                if (w !== null)
                                    Q = !0;
                                else {
                                    var la = A(j);
                                    la !== null && Ae(ga, la.startTime - C),
                                    Q = !1
                                }
                            }
                            break e
                        } finally {
                            w = null,
                            L = U,
                            qe = !1
                        }
                        Q = void 0
                    }
                } finally {
                    Q ? ta() : Ke = !1
                }
            }
        }
        var ta;
        if (typeof Xa == "function")
            ta = function() {
                Xa(Je)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ha = new MessageChannel
              , $e = Ha.port2;
            Ha.port1.onmessage = Je,
            ta = function() {
                $e.postMessage(null)
            }
        } else
            ta = function() {
                Ne(Je, 0)
            }
            ;
        function Ae(C, Q) {
            $ = Ne(function() {
                C(v.unstable_now())
            }, Q)
        }
        v.unstable_IdlePriority = 5,
        v.unstable_ImmediatePriority = 1,
        v.unstable_LowPriority = 4,
        v.unstable_NormalPriority = 3,
        v.unstable_Profiling = null,
        v.unstable_UserBlockingPriority = 2,
        v.unstable_cancelCallback = function(C) {
            C.callback = null
        }
        ,
        v.unstable_forceFrameRate = function(C) {
            0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ae = 0 < C ? Math.floor(1e3 / C) : 5
        }
        ,
        v.unstable_getCurrentPriorityLevel = function() {
            return L
        }
        ,
        v.unstable_next = function(C) {
            switch (L) {
            case 1:
            case 2:
            case 3:
                var Q = 3;
                break;
            default:
                Q = L
            }
            var U = L;
            L = Q;
            try {
                return C()
            } finally {
                L = U
            }
        }
        ,
        v.unstable_requestPaint = function() {
            Z = !0
        }
        ,
        v.unstable_runWithPriority = function(C, Q) {
            switch (C) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                C = 3
            }
            var U = L;
            L = C;
            try {
                return Q()
            } finally {
                L = U
            }
        }
        ,
        v.unstable_scheduleCallback = function(C, Q, U) {
            var me = v.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay,
            U = typeof U == "number" && 0 < U ? me + U : me) : U = me,
            C) {
            case 1:
                var re = -1;
                break;
            case 2:
                re = 250;
                break;
            case 5:
                re = 1073741823;
                break;
            case 4:
                re = 1e4;
                break;
            default:
                re = 5e3
            }
            return re = U + re,
            C = {
                id: z++,
                callback: Q,
                priorityLevel: C,
                startTime: U,
                expirationTime: re,
                sortIndex: -1
            },
            U > me ? (C.sortIndex = U,
            I(j, C),
            A(oe) === null && C === A(j) && (Ue ? (Fe($),
            $ = -1) : Ue = !0,
            Ae(ga, U - me))) : (C.sortIndex = re,
            I(oe, C),
            ea || qe || (ea = !0,
            Ke || (Ke = !0,
            ta()))),
            C
        }
        ,
        v.unstable_shouldYield = aa,
        v.unstable_wrapCallback = function(C) {
            var Q = L;
            return function() {
                var U = L;
                L = Q;
                try {
                    return C.apply(this, arguments)
                } finally {
                    L = U
                }
            }
        }
    }
    )(Cu)),
    Cu
}
var gp;
function jh() {
    return gp || (gp = 1,
    zu.exports = Th()),
    zu.exports
}
var Tu = {
    exports: {}
}
  , ke = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bp;
function Mh() {
    if (bp)
        return ke;
    bp = 1;
    var v = Hu();
    function I(z) {
        var w = "https://react.dev/errors/" + z;
        if (1 < arguments.length) {
            w += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var L = 2; L < arguments.length; L++)
                w += "&args[]=" + encodeURIComponent(arguments[L])
        }
        return "Minified React error #" + z + "; visit " + w + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function A() {}
    var m = {
        d: {
            f: A,
            r: function() {
                throw Error(I(522))
            },
            D: A,
            C: A,
            L: A,
            m: A,
            X: A,
            S: A,
            M: A
        },
        p: 0,
        findDOMNode: null
    }
      , R = Symbol.for("react.portal")
      , O = Symbol.for("react.recoverable")
      , Y = Symbol.for("react.optimistic_key");
    function J(z, w, L) {
        var qe = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: R,
            key: qe == null ? null : qe === Y ? Y : "" + qe,
            children: z,
            containerInfo: w,
            implementation: L
        }
    }
    var oe = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function j(z, w) {
        if (z === "font")
            return "";
        if (typeof w == "string")
            return w === "use-credentials" ? w : ""
    }
    return ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m,
    ke.browser = function(z) {
        return {
            $$typeof: O,
            _reason: z
        }
    }
    ,
    ke.createPortal = function(z, w) {
        var L = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!w || w.nodeType !== 1 && w.nodeType !== 9 && w.nodeType !== 11)
            throw Error(I(299));
        return J(z, w, null, L)
    }
    ,
    ke.flushSync = function(z) {
        var w = oe.T
          , L = m.p;
        try {
            if (oe.T = null,
            m.p = 2,
            z)
                return z()
        } finally {
            oe.T = w,
            m.p = L,
            m.d.f()
        }
    }
    ,
    ke.preconnect = function(z, w) {
        typeof z == "string" && (w ? (w = w.crossOrigin,
        w = typeof w == "string" ? w === "use-credentials" ? w : "" : void 0) : w = null,
        m.d.C(z, w))
    }
    ,
    ke.prefetchDNS = function(z) {
        typeof z == "string" && m.d.D(z)
    }
    ,
    ke.preinit = function(z, w) {
        if (typeof z == "string" && w && typeof w.as == "string") {
            var L = w.as
              , qe = j(L, w.crossOrigin)
              , ea = typeof w.integrity == "string" ? w.integrity : void 0
              , Ue = typeof w.fetchPriority == "string" ? w.fetchPriority : void 0;
            L === "style" ? m.d.S(z, typeof w.precedence == "string" ? w.precedence : void 0, {
                crossOrigin: qe,
                integrity: ea,
                fetchPriority: Ue
            }) : L === "script" && m.d.X(z, {
                crossOrigin: qe,
                integrity: ea,
                fetchPriority: Ue,
                nonce: typeof w.nonce == "string" ? w.nonce : void 0
            })
        }
    }
    ,
    ke.preinitModule = function(z, w) {
        if (typeof z == "string")
            if (typeof w == "object" && w !== null) {
                if (w.as == null || w.as === "script") {
                    var L = j(w.as, w.crossOrigin);
                    m.d.M(z, {
                        crossOrigin: L,
                        integrity: typeof w.integrity == "string" ? w.integrity : void 0,
                        nonce: typeof w.nonce == "string" ? w.nonce : void 0,
                        fetchPriority: typeof w.fetchPriority == "string" ? w.fetchPriority : void 0
                    })
                }
            } else
                w == null && m.d.M(z)
    }
    ,
    ke.preload = function(z, w) {
        if (typeof z == "string" && typeof w == "object" && w !== null && typeof w.as == "string") {
            var L = w.as
              , qe = j(L, w.crossOrigin);
            m.d.L(z, L, {
                crossOrigin: qe,
                integrity: typeof w.integrity == "string" ? w.integrity : void 0,
                nonce: typeof w.nonce == "string" ? w.nonce : void 0,
                type: typeof w.type == "string" ? w.type : void 0,
                fetchPriority: typeof w.fetchPriority == "string" ? w.fetchPriority : void 0,
                referrerPolicy: typeof w.referrerPolicy == "string" ? w.referrerPolicy : void 0,
                imageSrcSet: typeof w.imageSrcSet == "string" ? w.imageSrcSet : void 0,
                imageSizes: typeof w.imageSizes == "string" ? w.imageSizes : void 0,
                media: typeof w.media == "string" ? w.media : void 0
            })
        }
    }
    ,
    ke.preloadModule = function(z, w) {
        if (typeof z == "string")
            if (w) {
                var L = j(w.as, w.crossOrigin);
                m.d.m(z, {
                    as: typeof w.as == "string" && w.as !== "script" ? w.as : void 0,
                    crossOrigin: L,
                    integrity: typeof w.integrity == "string" ? w.integrity : void 0,
                    nonce: typeof w.nonce == "string" ? w.nonce : void 0,
                    fetchPriority: typeof w.fetchPriority == "string" ? w.fetchPriority : void 0
                })
            } else
                m.d.m(z)
    }
    ,
    ke.requestFormReset = function(z) {
        m.d.r(z)
    }
    ,
    ke.unstable_batchedUpdates = function(z, w) {
        return z(w)
    }
    ,
    ke.useFormState = function(z, w, L) {
        return oe.H.useFormState(z, w, L)
    }
    ,
    ke.useFormStatus = function() {
        return oe.H.useHostTransitionStatus()
    }
    ,
    ke.version = "19.3.0",
    ke
}
var hp;
function Oh() {
    if (hp)
        return Tu.exports;
    hp = 1;
    function v() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)
            } catch (I) {
                console.error(I)
            }
    }
    return v(),
    Tu.exports = Mh(),
    Tu.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp;
function Dh() {
    if (yp)
        return cn;
    yp = 1;
    var v = jh()
      , I = Hu()
      , A = Oh();
    function m(e) {
        var a = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            a += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; t < arguments.length; t++)
                a += "&args[]=" + encodeURIComponent(arguments[t])
        }
        return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function R(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function O(e) {
        for (var a = e, t = a; t && !t.alternate; )
            a = t,
            (a.flags & 4098) !== 0 && (e = a.return),
            t = a.return;
        for (; a.return; )
            a = a.return;
        return a.tag === 3 ? e : null
    }
    function Y(e) {
        if (e.tag === 13) {
            var a = e.memoizedState;
            if (a === null && (e = e.alternate,
            e !== null && (a = e.memoizedState)),
            a !== null)
                return a.dehydrated
        }
        return null
    }
    function J(e) {
        if (e.tag === 31) {
            var a = e.memoizedState;
            if (a === null && (e = e.alternate,
            e !== null && (a = e.memoizedState)),
            a !== null)
                return a.dehydrated
        }
        return null
    }
    function oe(e) {
        if (O(e) !== e)
            throw Error(m(188))
    }
    function j(e) {
        var a = e.alternate;
        if (!a) {
            if (a = O(e),
            a === null)
                throw Error(m(188));
            return a !== e ? null : e
        }
        for (var t = e, l = a; ; ) {
            var o = t.return;
            if (o === null)
                break;
            var n = o.alternate;
            if (n === null) {
                if (l = o.return,
                l !== null) {
                    t = l;
                    continue
                }
                break
            }
            if (o.child === n.child) {
                for (n = o.child; n; ) {
                    if (n === t)
                        return oe(o),
                        e;
                    if (n === l)
                        return oe(o),
                        a;
                    n = n.sibling
                }
                throw Error(m(188))
            }
            if (t.return !== l.return)
                t = o,
                l = n;
            else {
                for (var i = !1, r = o.child; r; ) {
                    if (r === t) {
                        i = !0,
                        t = o,
                        l = n;
                        break
                    }
                    if (r === l) {
                        i = !0,
                        l = o,
                        t = n;
                        break
                    }
                    r = r.sibling
                }
                if (!i) {
                    for (r = n.child; r; ) {
                        if (r === t) {
                            i = !0,
                            t = n,
                            l = o;
                            break
                        }
                        if (r === l) {
                            i = !0,
                            l = n,
                            t = o;
                            break
                        }
                        r = r.sibling
                    }
                    if (!i)
                        throw Error(m(189))
                }
            }
            if (t.alternate !== l)
                throw Error(m(190))
        }
        if (t.tag !== 3)
            throw Error(m(188));
        return t.stateNode.current === t ? e : a
    }
    function z(e) {
        var a = e.tag;
        if (a === 5 || a === 26 || a === 27 || a === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (a = z(e),
            a !== null)
                return a;
            e = e.sibling
        }
        return null
    }
    function w(e, a, t, l, o, n) {
        for (; e !== null; ) {
            if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && t(e, l, o, n) || (e.tag !== 22 || e.memoizedState === null) && (a || e.tag !== 5 && e.tag !== 27) && w(e.child, a, t, l, o, n))
                return !0;
            e = e.sibling
        }
        return !1
    }
    function L(e) {
        for (e = e.return; e !== null; ) {
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
                return e;
            e = e.return
        }
        return null
    }
    function qe(e) {
        var a = !1;
        for (e = e.return; e !== null && (e.tag === 4 && (a = !0),
        !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
            e = e.return;
        return a
    }
    function ea(e) {
        var a = [null, null]
          , t = L(e);
        return t === null || Ue(a, e, t.child, {
            foundSelf: !1
        }),
        a
    }
    function Ue(e, a, t, l) {
        for (; t !== null; ) {
            if (t === a)
                l.foundSelf = !0;
            else if (t.tag === 5 || t.tag === 27 || t.tag === 6) {
                if (l.foundSelf)
                    return e[1] = t,
                    !0;
                e[0] = t
            } else if ((t.tag !== 22 || t.memoizedState === null) && Ue(e, a, t.child, l))
                return !0;
            t = t.sibling
        }
        return !1
    }
    function Z(e) {
        switch (e.tag) {
        case 5:
        case 27:
        case 6:
            return e.stateNode;
        case 3:
            return e.stateNode.containerInfo;
        default:
            throw Error(m(559))
        }
    }
    var Ne = null
      , Fe = null;
    function Xa(e, a, t) {
        return e === t ? !0 : e === a ? (Ne = e,
        !0) : !1
    }
    function pa(e, a, t) {
        return e === t ? (Fe = e,
        !1) : e === a ? (Fe !== null && (Ne = e),
        !0) : !1
    }
    function ga(e) {
        if (e === null)
            return null;
        do
            e = e === null ? null : e.return;
        while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
        return e || null
    }
    function Ke(e, a, t) {
        for (var l = 0, o = e; o; o = t(o))
            l++;
        o = 0;
        for (var n = a; n; n = t(n))
            o++;
        for (; 0 < l - o; )
            e = t(e),
            l--;
        for (; 0 < o - l; )
            a = t(a),
            o--;
        for (; l--; ) {
            if (e === a || a !== null && e === a.alternate)
                return e;
            e = t(e),
            a = t(a)
        }
        return null
    }
    var $ = Object.assign
      , ae = Symbol.for("react.element")
      , ba = Symbol.for("react.transitional.element")
      , aa = Symbol.for("react.portal")
      , Je = Symbol.for("react.fragment")
      , ta = Symbol.for("react.strict_mode")
      , Ha = Symbol.for("react.profiler")
      , $e = Symbol.for("react.consumer")
      , Ae = Symbol.for("react.context")
      , C = Symbol.for("react.forward_ref")
      , Q = Symbol.for("react.suspense")
      , U = Symbol.for("react.suspense_list")
      , me = Symbol.for("react.memo")
      , re = Symbol.for("react.lazy")
      , la = Symbol.for("react.activity")
      , We = Symbol.for("react.legacy_hidden")
      , ka = Symbol.for("react.memo_cache_sentinel")
      , d = Symbol.for("react.view_transition")
      , _ = Symbol.for("react.recoverable")
      , b = Symbol.iterator;
    function E(e) {
        return e === null || typeof e != "object" ? null : (e = b && e[b] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var D = Symbol.for("react.client.reference");
    function X(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === D ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case Je:
            return "Fragment";
        case Ha:
            return "Profiler";
        case ta:
            return "StrictMode";
        case Q:
            return "Suspense";
        case U:
            return "SuspenseList";
        case la:
            return "Activity";
        case d:
            return "ViewTransition"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case aa:
                return "Portal";
            case Ae:
                return e.displayName || "Context";
            case $e:
                return (e._context.displayName || "Context") + ".Consumer";
            case C:
                var a = e.render;
                return e = e.displayName,
                e || (e = a.displayName || a.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case me:
                return a = e.displayName || null,
                a !== null ? a : X(e.type) || "Memo";
            case re:
                a = e._payload,
                e = e._init;
                try {
                    return X(e(a))
                } catch {}
            }
        return null
    }
    var ie = Array.isArray
      , H = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , k = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , rt = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ki = []
      , wl = -1;
    function Va(e) {
        return {
            current: e
        }
    }
    function Be(e) {
        0 > wl || (e.current = ki[wl],
        ki[wl] = null,
        wl--)
    }
    function ye(e, a) {
        wl++,
        ki[wl] = e.current,
        e.current = a
    }
    var Fa = Va(null)
      , po = Va(null)
      , qt = Va(null)
      , fn = Va(null);
    function pn(e, a) {
        switch (ye(qt, a),
        ye(po, e),
        ye(Fa, null),
        a.nodeType) {
        case 9:
        case 11:
            e = (e = a.documentElement) && (e = e.namespaceURI) ? vf(e) : 0;
            break;
        default:
            if (e = a.tagName,
            a = a.namespaceURI)
                a = vf(a),
                e = Sf(a, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        Be(Fa),
        ye(Fa, e)
    }
    function xl() {
        Be(Fa),
        Be(po),
        Be(qt)
    }
    function Vi(e) {
        var a = e.memoizedState;
        a !== null && (uo._currentValue = a.memoizedState,
        ye(fn, e)),
        a = Fa.current;
        var t = Sf(a, e.type);
        a !== t && (ye(po, e),
        ye(Fa, t))
    }
    function gn(e) {
        po.current === e && (Be(Fa),
        Be(po)),
        fn.current === e && (Be(fn),
        uo._currentValue = rt)
    }
    var Fi, Bu;
    function At(e) {
        if (Fi === void 0)
            try {
                throw Error()
            } catch (t) {
                var a = t.stack.trim().match(/\n( *(at )?)/);
                Fi = a && a[1] || "",
                Bu = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Fi + e + Bu
    }
    var Ki = !1;
    function Ji(e, a) {
        if (!e || Ki)
            return "";
        Ki = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (a) {
                            var q = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(q.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(q, [])
                                } catch (N) {
                                    var f = N
                                }
                                Reflect.construct(e, [], q)
                            } else {
                                try {
                                    q.call()
                                } catch (N) {
                                    f = N
                                }
                                q = !1;
                                try {
                                    var y = Object.getOwnPropertyDescriptor(e.prototype, "props");
                                    Object.defineProperty(e.prototype, "props", {
                                        configurable: !0,
                                        set: function() {
                                            throw Error()
                                        }
                                    }),
                                    q = !0,
                                    new e
                                } finally {
                                    q && (y !== void 0 ? Object.defineProperty(e.prototype, "props", y) : delete e.prototype.props)
                                }
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (N) {
                                f = N
                            }
                            (q = e()) && typeof q.catch == "function" && q.catch(function() {})
                        }
                    } catch (N) {
                        if (N && f && typeof N.stack == "string")
                            return [N.stack, f.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = l.DetermineComponentFrameRoot()
              , i = n[0]
              , r = n[1];
            if (i && r) {
                var s = i.split(`
`)
                  , g = r.split(`
`);
                for (o = l = 0; l < s.length && !s[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; o < g.length && !g[o].includes("DetermineComponentFrameRoot"); )
                    o++;
                if (l === s.length || o === g.length)
                    for (l = s.length - 1,
                    o = g.length - 1; 1 <= l && 0 <= o && s[l] !== g[o]; )
                        o--;
                for (; 1 <= l && 0 <= o; l--,
                o--)
                    if (s[l] !== g[o]) {
                        if (l !== 1 || o !== 1)
                            do
                                if (l--,
                                o--,
                                0 > o || s[l] !== g[o]) {
                                    var S = `
` + s[l].replace(" at new ", " at ");
                                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)),
                                    S
                                }
                            while (1 <= l && 0 <= o);
                        break
                    }
            }
        } finally {
            Ki = !1,
            Error.prepareStackTrace = t
        }
        return (t = e ? e.displayName || e.name : "") ? At(t) : ""
    }
    function Tp(e, a) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return At(e.type);
        case 16:
            return At("Lazy");
        case 13:
            return e.child !== a && a !== null ? At("Suspense Fallback") : At("Suspense");
        case 19:
            return At("SuspenseList");
        case 0:
        case 15:
            return Ji(e.type, !1);
        case 11:
            return Ji(e.type.render, !1);
        case 1:
            return Ji(e.type, !0);
        case 31:
            return At("Activity");
        case 30:
            return At("ViewTransition");
        default:
            return ""
        }
    }
    function Qu(e) {
        try {
            var a = ""
              , t = null;
            do
                a += Tp(e, t),
                t = e,
                e = e.return;
            while (e);
            return a
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var $i = Object.prototype.hasOwnProperty
      , Wi = v.unstable_scheduleCallback
      , Pi = v.unstable_cancelCallback
      , jp = v.unstable_shouldYield
      , Mp = v.unstable_requestPaint
      , ha = v.unstable_now
      , Op = v.unstable_getCurrentPriorityLevel
      , Yu = v.unstable_ImmediatePriority
      , Lu = v.unstable_UserBlockingPriority
      , bn = v.unstable_NormalPriority
      , Dp = v.unstable_LowPriority
      , Gu = v.unstable_IdlePriority
      , Hp = v.log
      , Up = v.unstable_setDisableYieldValue
      , go = null
      , ya = null;
    function _t(e) {
        if (typeof Hp == "function" && Up(e),
        ya && typeof ya.setStrictMode == "function")
            try {
                ya.setStrictMode(go, e)
            } catch {}
    }
    var va = Math.clz32 ? Math.clz32 : Yp
      , Bp = Math.log
      , Qp = Math.LN2;
    function Yp(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Bp(e) / Qp | 0) | 0
    }
    var hn = 256
      , yn = 262144
      , vn = 4194304;
    function Wt(e) {
        var a = e & 42;
        if (a !== 0)
            return a;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & -e;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Sn(e, a, t) {
        var l = e.pendingLanes;
        if (l === 0)
            return 0;
        var o = 0
          , n = e.suspendedLanes
          , i = e.pingedLanes;
        e = e.warmLanes;
        var r = l & 134217727;
        return r !== 0 ? (l = r & ~n,
        l !== 0 ? o = Wt(l) : (i &= r,
        i !== 0 ? o = Wt(i) : t || (t = r & ~e,
        t !== 0 && (o = Wt(t))))) : (r = l & ~n,
        r !== 0 ? o = Wt(r) : i !== 0 ? o = Wt(i) : t || (t = l & ~e,
        t !== 0 && (o = Wt(t)))),
        o === 0 ? 0 : a !== 0 && a !== o && (a & n) === 0 && (n = o & -o,
        t = a & -a,
        n >= t || n === 32 && (t & 4194048) !== 0) ? a : o
    }
    function bo(e, a) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0
    }
    function Zu(e, a) {
        (a & 8) !== 0 && (a |= a & 32);
        var t = e.entangledLanes;
        if (t !== 0)
            for (e = e.entanglements,
            t &= a; 0 < t; ) {
                var l = 31 - va(t)
                  , o = 1 << l;
                a |= e[l],
                t &= ~o
            }
        return a
    }
    function Lp(e, a) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return a + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return a + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Xu() {
        var e = vn;
        return vn <<= 1,
        (vn & 62914560) === 0 && (vn = 4194304),
        e
    }
    function er(e) {
        for (var a = [], t = 0; 31 > t; t++)
            a.push(e);
        return a
    }
    function ho(e, a) {
        e.pendingLanes |= a,
        a !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Gp(e, a, t, l, o, n) {
        var i = e.pendingLanes;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= t,
        e.entangledLanes &= t,
        e.errorRecoveryDisabledLanes &= t,
        e.shellSuspendCounter = 0;
        var r = e.entanglements
          , s = e.expirationTimes
          , g = e.hiddenUpdates;
        for (t = i & ~t; 0 < t; ) {
            var S = 31 - va(t)
              , q = 1 << S;
            r[S] = 0,
            s[S] = -1;
            var f = g[S];
            if (f !== null)
                for (g[S] = null,
                S = 0; S < f.length; S++) {
                    var y = f[S];
                    y !== null && (y.lane &= -536870913)
                }
            t &= ~q
        }
        l !== 0 && ku(e, l, 0),
        n !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= n & ~(i & ~a))
    }
    function ku(e, a, t) {
        e.pendingLanes |= a,
        e.suspendedLanes &= ~a;
        var l = 31 - va(a);
        e.entangledLanes |= a,
        e.entanglements[l] = e.entanglements[l] | 1073741824 | t & 261930
    }
    function Vu(e, a) {
        var t = e.entangledLanes |= a;
        for (e = e.entanglements; t; ) {
            var l = 31 - va(t)
              , o = 1 << l;
            o & a | e[l] & a && (e[l] |= a),
            t &= ~o
        }
    }
    function Fu(e, a) {
        var t = a & -a;
        return t = (t & 42) !== 0 ? 1 : ar(t),
        (t & (e.suspendedLanes | a)) !== 0 ? 0 : t
    }
    function ar(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function tr(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Ku() {
        var e = k.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : lp(e.type))
    }
    function Ju(e, a) {
        var t = k.p;
        try {
            return k.p = e,
            a()
        } finally {
            k.p = t
        }
    }
    var st = Math.random().toString(36).slice(2)
      , Qe = "__reactFiber$" + st
      , sa = "__reactProps$" + st
      , ql = "__reactContainer$" + st
      , $u = "__reactEvents$" + st
      , Zp = "__reactListeners$" + st
      , Xp = "__reactHandles$" + st
      , Wu = "__reactResources$" + st
      , yo = "__reactMarker$" + st
      , wn = "__reactLoad$" + st;
    function xn(e) {
        delete e[Qe],
        delete e[sa],
        delete e[Zp],
        delete e[Xp]
    }
    function Pt(e) {
        var a;
        if (a = e[Qe])
            return a;
        for (var t = e.parentNode; t; ) {
            if (a = t[ql] || t[Qe]) {
                if (t = a.alternate,
                a.child !== null || t !== null && t.child !== null)
                    for (e = Hf(e); e !== null; ) {
                        if (t = e[Qe])
                            return t;
                        e = Hf(e)
                    }
                return a
            }
            e = t,
            t = e.parentNode
        }
        return null
    }
    function Al(e) {
        if (e = e[Qe] || e[ql]) {
            var a = e.tag;
            if (a === 5 || a === 6 || a === 13 || a === 31 || a === 26 || a === 27 || a === 3)
                return e
        }
        return null
    }
    function vo(e) {
        var a = e.tag;
        if (a === 5 || a === 26 || a === 27 || a === 6)
            return e.stateNode;
        throw Error(m(33))
    }
    function _l(e) {
        var a = e[Wu];
        return a || (a = e[Wu] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        a
    }
    function Me(e) {
        e[yo] = !0
    }
    function Pu(e) {
        e[wn] = void 0
    }
    var ec = new Set
      , ac = {};
    function el(e, a) {
        El(e, a),
        El(e + "Capture", a)
    }
    function El(e, a) {
        for (ac[e] = a,
        e = 0; e < a.length; e++)
            ec.add(a[e])
    }
    var kp = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , tc = {}
      , lc = {};
    function Vp(e) {
        return $i.call(lc, e) ? !0 : $i.call(tc, e) ? !1 : kp.test(e) ? lc[e] = !0 : (tc[e] = !0,
        !1)
    }
    var se = !1;
    function oc() {
        var e = se;
        return se = !1,
        e
    }
    function qn(e, a, t) {
        if (Vp(a))
            if (t === null)
                e.removeAttribute(a);
            else {
                switch (typeof t) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(a);
                    return;
                case "boolean":
                    var l = a.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        e.removeAttribute(a);
                        return
                    }
                }
                e.setAttribute(a, t)
            }
    }
    function An(e, a, t) {
        if (t === null)
            e.removeAttribute(a);
        else {
            switch (typeof t) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return
            }
            e.setAttribute(a, t)
        }
    }
    function ut(e, a, t, l) {
        if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttributeNS(a, t, l)
        }
    }
    function Sa(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function nc(e) {
        var a = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (a === "checkbox" || a === "radio")
    }
    function Fp(e, a, t) {
        var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, a);
        if (!e.hasOwnProperty(a) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var o = l.get
              , n = l.set;
            return Object.defineProperty(e, a, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(i) {
                    t = "" + i,
                    n.call(this, i)
                }
            }),
            Object.defineProperty(e, a, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return t
                },
                setValue: function(i) {
                    t = "" + i
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[a]
                }
            }
        }
    }
    function lr(e) {
        if (!e._valueTracker) {
            var a = nc(e) ? "checked" : "value";
            e._valueTracker = Fp(e, a, "" + e[a])
        }
    }
    function ic(e) {
        if (!e)
            return !1;
        var a = e._valueTracker;
        if (!a)
            return !0;
        var t = a.getValue()
          , l = "";
        return e && (l = nc(e) ? e.checked ? "true" : "false" : e.value),
        e = l,
        e !== t ? (a.setValue(e),
        !0) : !1
    }
    var Kp = /[\n"\\]/g;
    function Na(e) {
        return e.replace(Kp, function(a) {
            return "\\" + a.charCodeAt(0).toString(16) + " "
        })
    }
    function or(e, a, t, l, o, n, i, r) {
        e.name = "",
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"),
        a != null ? i === "number" ? (a === 0 && e.value === "" || e.value != a) && (e.value = "" + Sa(a)) : e.value !== "" + Sa(a) && (e.value = "" + Sa(a)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"),
        a != null ? i === "number" && e.value == a ? nr(e, Sa(e.value)) : nr(e, Sa(a)) : t != null ? nr(e, Sa(t)) : l != null && e.removeAttribute("value"),
        o == null && n != null && (e.defaultChecked = !!n),
        o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"),
        r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Sa(r) : e.removeAttribute("name")
    }
    function rc(e, a, t, l, o, n, i, r) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (e.type = n),
        a != null || t != null) {
            if (!(n !== "submit" && n !== "reset" || a != null)) {
                lr(e);
                return
            }
            t = t != null ? "" + Sa(t) : "",
            a = a != null ? "" + Sa(a) : t,
            r || a === e.value || (e.value = a),
            e.defaultValue = a
        }
        l = l ?? o,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        e.checked = r ? e.checked : !!l,
        e.defaultChecked = !!l,
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i),
        lr(e)
    }
    function nr(e, a) {
        e.defaultValue !== "" + a && (e.defaultValue = "" + a)
    }
    function Il(e, a, t, l) {
        if (e = e.options,
        a) {
            a = {};
            for (var o = 0; o < t.length; o++)
                a["$" + t[o]] = !0;
            for (t = 0; t < e.length; t++)
                o = a.hasOwnProperty("$" + e[t].value),
                e[t].selected !== o && (e[t].selected = o),
                o && l && (e[t].defaultSelected = !0)
        } else {
            for (t = "" + Sa(t),
            a = null,
            o = 0; o < e.length; o++) {
                if (e[o].value === t) {
                    e[o].selected = !0,
                    l && (e[o].defaultSelected = !0);
                    return
                }
                a !== null || e[o].disabled || (a = e[o])
            }
            a !== null && (a.selected = !0)
        }
    }
    function sc(e, a, t) {
        if (a != null && (a = "" + Sa(a),
        a !== e.value && (e.value = a),
        t == null)) {
            e.defaultValue !== a && (e.defaultValue = a);
            return
        }
        e.defaultValue = t != null ? "" + Sa(t) : ""
    }
    function uc(e, a, t, l) {
        if (a == null) {
            if (l != null) {
                if (t != null)
                    throw Error(m(92));
                if (ie(l)) {
                    if (1 < l.length)
                        throw Error(m(93));
                    l = l[0]
                }
                t = l
            }
            t == null && (t = ""),
            a = t
        }
        t = Sa(a),
        e.defaultValue = t,
        l = e.textContent,
        l === t && l !== "" && l !== null && (e.value = l),
        lr(e)
    }
    function Nl(e, a) {
        if (a) {
            var t = e.firstChild;
            if (t && t === e.lastChild && t.nodeType === 3) {
                t.nodeValue = a;
                return
            }
        }
        e.textContent = a
    }
    var Jp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function cc(e, a, t) {
        var l = a.indexOf("--") === 0;
        t == null || typeof t == "boolean" || t === "" ? l ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "" : l ? e.setProperty(a, t) : typeof t != "number" || t === 0 || Jp.has(a) ? a === "float" ? e.cssFloat = t : e[a] = ("" + t).trim() : e[a] = t + "px"
    }
    function dc(e, a, t) {
        if (a != null && typeof a != "object")
            throw Error(m(62));
        if (e = e.style,
        t != null) {
            for (var l in t)
                !t.hasOwnProperty(l) || a != null && a.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "",
                se = !0);
            for (var o in a)
                l = a[o],
                a.hasOwnProperty(o) && t[o] !== l && (cc(e, o, l),
                se = !0)
        } else
            for (var n in a)
                a.hasOwnProperty(n) && cc(e, n, a[n])
    }
    function ir(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var $p = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["maskType", "mask-type"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Wp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function _n(e) {
        return Wp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function Ka() {}
    var rr = null;
    function sr(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Rl = null
      , zl = null;
    function mc(e) {
        var a = Al(e);
        if (a && (e = a.stateNode)) {
            var t = e[sa] || null;
            e: switch (e = a.stateNode,
            a.type) {
            case "input":
                if (or(e, t.value, t.defaultValue, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name),
                a = t.name,
                t.type === "radio" && a != null) {
                    for (t = e; t.parentNode; )
                        t = t.parentNode;
                    for (t = t.querySelectorAll('input[name="' + Na("" + a) + '"][type="radio"]'),
                    a = 0; a < t.length; a++) {
                        var l = t[a];
                        if (l !== e && l.form === e.form) {
                            var o = l[sa] || null;
                            if (!o)
                                throw Error(m(90));
                            or(l, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                        }
                    }
                    for (a = 0; a < t.length; a++)
                        l = t[a],
                        l.form === e.form && ic(l)
                }
                break e;
            case "textarea":
                sc(e, t.value, t.defaultValue);
                break e;
            case "select":
                a = t.value,
                a != null && Il(e, !!t.multiple, a, !1)
            }
        }
    }
    var ur = !1;
    function fc(e, a, t) {
        if (ur)
            return e(a, t);
        ur = !0;
        try {
            var l = e(a);
            return l
        } finally {
            if (ur = !1,
            (Rl !== null || zl !== null) && (_i(),
            Rl && (a = Rl,
            e = zl,
            zl = Rl = null,
            mc(a),
            e)))
                for (a = 0; a < e.length; a++)
                    mc(e[a])
        }
    }
    function So(e, a) {
        var t = e.stateNode;
        if (t === null)
            return null;
        var l = t[sa] || null;
        if (l === null)
            return null;
        t = l[a];
        e: switch (a) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (e = e.type,
            l = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !l;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (t && typeof t != "function")
            throw Error(m(231, a, typeof t));
        return t
    }
    var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , cr = !1;
    if (ct)
        try {
            var wo = {};
            Object.defineProperty(wo, "passive", {
                get: function() {
                    cr = !0
                }
            }),
            window.addEventListener("test", wo, wo),
            window.removeEventListener("test", wo, wo)
        } catch {
            cr = !1
        }
    var Et = null
      , dr = null
      , En = null;
    function pc() {
        if (En)
            return En;
        var e, a = dr, t = a.length, l, o = "value" in Et ? Et.value : Et.textContent, n = o.length;
        for (e = 0; e < t && a[e] === o[e]; e++)
            ;
        var i = t - e;
        for (l = 1; l <= i && a[t - l] === o[n - l]; l++)
            ;
        return En = o.slice(e, 1 < l ? 1 - l : void 0)
    }
    function In(e) {
        var a = e.keyCode;
        return "charCode" in e ? (e = e.charCode,
        e === 0 && a === 13 && (e = 13)) : e = a,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Nn() {
        return !0
    }
    function gc() {
        return !1
    }
    function oa(e) {
        function a(t, l, o, n, i) {
            this._reactName = t,
            this._targetInst = o,
            this.type = l,
            this.nativeEvent = n,
            this.target = i,
            this.currentTarget = null;
            for (var r in e)
                e.hasOwnProperty(r) && (t = e[r],
                this[r] = t ? t(n) : n[r]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Nn : gc,
            this.isPropagationStopped = gc,
            this
        }
        return $(a.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
                this.isDefaultPrevented = Nn)
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
                this.isPropagationStopped = Nn)
            },
            persist: function() {},
            isPersistent: Nn
        }),
        a
    }
    var It = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Rn = oa(It), xo = $({}, It, {
        view: 0,
        detail: 0
    }), Pp = oa(xo), mr, fr, qo, zn = $({}, xo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: gr,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== qo && (qo && e.type === "mousemove" ? (mr = e.screenX - qo.screenX,
            fr = e.screenY - qo.screenY) : fr = mr = 0,
            qo = e),
            mr)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : fr
        }
    }), bc = oa(zn), eg = $({}, zn, {
        dataTransfer: 0
    }), ag = oa(eg), tg = $({}, xo, {
        relatedTarget: 0
    }), pr = oa(tg), lg = $({}, It, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), og = oa(lg), ng = $({}, It, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), ig = oa(ng), rg = $({}, It, {
        data: 0
    }), hc = oa(rg), sg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, ug = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, cg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function dg(e) {
        var a = this.nativeEvent;
        return a.getModifierState ? a.getModifierState(e) : (e = cg[e]) ? !!a[e] : !1
    }
    function gr() {
        return dg
    }
    var mg = $({}, xo, {
        key: function(e) {
            if (e.key) {
                var a = sg[e.key] || e.key;
                if (a !== "Unidentified")
                    return a
            }
            return e.type === "keypress" ? (e = In(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ug[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: gr,
        charCode: function(e) {
            return e.type === "keypress" ? In(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? In(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , fg = oa(mg)
      , pg = $({}, zn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , yc = oa(pg)
      , gg = $({}, It, {
        submitter: 0
    })
      , bg = oa(gg)
      , hg = $({}, xo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: gr
    })
      , yg = oa(hg)
      , vg = $({}, It, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Sg = oa(vg)
      , wg = $({}, zn, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , xg = oa(wg)
      , qg = $({}, It, {
        newState: 0,
        oldState: 0,
        source: 0
    })
      , Ag = oa(qg)
      , _g = [9, 13, 27, 32]
      , br = ct && "CompositionEvent" in window
      , Ao = null;
    ct && "documentMode" in document && (Ao = document.documentMode);
    var Eg = ct && "TextEvent" in window && !Ao
      , vc = ct && (!br || Ao && 8 < Ao && 11 >= Ao)
      , Sc = " "
      , wc = !1;
    function xc(e, a) {
        switch (e) {
        case "keyup":
            return _g.indexOf(a.keyCode) !== -1;
        case "keydown":
            return a.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function qc(e) {
        return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
    }
    var Cl = !1;
    function Ig(e, a) {
        switch (e) {
        case "compositionend":
            return qc(a);
        case "keypress":
            return a.which !== 32 ? null : (wc = !0,
            Sc);
        case "textInput":
            return e = a.data,
            e === Sc && wc ? null : e;
        default:
            return null
        }
    }
    function Ng(e, a) {
        if (Cl)
            return e === "compositionend" || !br && xc(e, a) ? (e = pc(),
            En = dr = Et = null,
            Cl = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
                if (a.char && 1 < a.char.length)
                    return a.char;
                if (a.which)
                    return String.fromCharCode(a.which)
            }
            return null;
        case "compositionend":
            return vc && a.locale !== "ko" ? null : a.data;
        default:
            return null
        }
    }
    var Rg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Ac(e) {
        var a = e && e.nodeName && e.nodeName.toLowerCase();
        return a === "input" ? !!Rg[e.type] : a === "textarea"
    }
    function _c(e, a, t, l) {
        Rl ? zl ? zl.push(l) : zl = [l] : Rl = l,
        a = Ci(a, "onChange"),
        0 < a.length && (t = new Rn("onChange","change",null,t,l),
        e.push({
            event: t,
            listeners: a
        }))
    }
    var _o = null
      , Eo = null;
    function zg(e) {
        ff(e, 0)
    }
    function Cn(e) {
        var a = vo(e);
        if (ic(a))
            return e
    }
    function Ec(e, a) {
        if (e === "change")
            return a
    }
    var Ic = !1;
    if (ct) {
        var hr;
        if (ct) {
            var yr = "oninput" in document;
            if (!yr) {
                var Nc = document.createElement("div");
                Nc.setAttribute("oninput", "return;"),
                yr = typeof Nc.oninput == "function"
            }
            hr = yr
        } else
            hr = !1;
        Ic = hr && (!document.documentMode || 9 < document.documentMode)
    }
    function Rc() {
        _o && (_o.detachEvent("onpropertychange", zc),
        Eo = _o = null)
    }
    function zc(e) {
        if (e.propertyName === "value" && Cn(Eo)) {
            var a = [];
            _c(a, Eo, e, sr(e)),
            fc(zg, a)
        }
    }
    function Cg(e, a, t) {
        e === "focusin" ? (Rc(),
        _o = a,
        Eo = t,
        _o.attachEvent("onpropertychange", zc)) : e === "focusout" && Rc()
    }
    function Tg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Cn(Eo)
    }
    function jg(e, a) {
        if (e === "click")
            return Cn(a)
    }
    function Mg(e, a) {
        if (e === "input" || e === "change")
            return Cn(a)
    }
    function Og(e, a) {
        return e === a && (e !== 0 || 1 / e === 1 / a) || e !== e && a !== a
    }
    var wa = typeof Object.is == "function" ? Object.is : Og;
    function Io(e, a) {
        if (wa(e, a))
            return !0;
        if (typeof e != "object" || e === null || typeof a != "object" || a === null)
            return !1;
        var t = Object.keys(e)
          , l = Object.keys(a);
        if (t.length !== l.length)
            return !1;
        for (l = 0; l < t.length; l++) {
            var o = t[l];
            if (!$i.call(a, o) || !wa(e[o], a[o]))
                return !1
        }
        return !0
    }
    function vr(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function Cc(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Tc(e, a) {
        var t = Cc(e);
        e = 0;
        for (var l; t; ) {
            if (t.nodeType === 3) {
                if (l = e + t.textContent.length,
                e <= a && l >= a)
                    return {
                        node: t,
                        offset: a - e
                    };
                e = l
            }
            e: {
                for (; t; ) {
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break e
                    }
                    t = t.parentNode
                }
                t = void 0
            }
            t = Cc(t)
        }
    }
    function jc(e, a) {
        return e && a ? e === a ? !0 : e && e.nodeType === 3 ? !1 : a && a.nodeType === 3 ? jc(e, a.parentNode) : "contains" in e ? e.contains(a) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(a) & 16) : !1 : !1
    }
    function Mc(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var a = vr(e.document); a instanceof e.HTMLIFrameElement; ) {
            try {
                var t = typeof a.contentWindow.location.href == "string"
            } catch {
                t = !1
            }
            if (t)
                e = a.contentWindow;
            else
                break;
            a = vr(e.document)
        }
        return a
    }
    function Sr(e) {
        var a = e && e.nodeName && e.nodeName.toLowerCase();
        return a && (a === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || a === "textarea" || e.contentEditable === "true")
    }
    var Dg = ct && "documentMode" in document && 11 >= document.documentMode
      , Tl = null
      , wr = null
      , No = null
      , xr = !1;
    function Oc(e, a, t) {
        var l = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        xr || Tl == null || Tl !== vr(l) || (l = Tl,
        "selectionStart" in l && Sr(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        No && Io(No, l) || (No = l,
        l = Ci(wr, "onSelect"),
        0 < l.length && (a = new Rn("onSelect","select",null,a,t),
        e.push({
            event: a,
            listeners: l
        }),
        a.target = Tl)))
    }
    function al(e, a) {
        var t = {};
        return t[e.toLowerCase()] = a.toLowerCase(),
        t["Webkit" + e] = "webkit" + a,
        t["Moz" + e] = "moz" + a,
        t
    }
    var jl = {
        animationend: al("Animation", "AnimationEnd"),
        animationiteration: al("Animation", "AnimationIteration"),
        animationstart: al("Animation", "AnimationStart"),
        transitionrun: al("Transition", "TransitionRun"),
        transitionstart: al("Transition", "TransitionStart"),
        transitioncancel: al("Transition", "TransitionCancel"),
        transitionend: al("Transition", "TransitionEnd")
    }
      , qr = {}
      , Dc = {};
    ct && (Dc = document.createElement("div").style,
    "AnimationEvent" in window || (delete jl.animationend.animation,
    delete jl.animationiteration.animation,
    delete jl.animationstart.animation),
    "TransitionEvent" in window || delete jl.transitionend.transition);
    function tl(e) {
        if (qr[e])
            return qr[e];
        if (!jl[e])
            return e;
        var a = jl[e], t;
        for (t in a)
            if (a.hasOwnProperty(t) && t in Dc)
                return qr[e] = a[t];
        return e
    }
    var Hc = tl("animationend")
      , Uc = tl("animationiteration")
      , Bc = tl("animationstart")
      , Hg = tl("transitionrun")
      , Ug = tl("transitionstart")
      , Bg = tl("transitioncancel")
      , Qc = tl("transitionend")
      , Yc = new Map
      , Ar = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ar.push("scrollEnd");
    function Ua(e, a) {
        Yc.set(e, a),
        el(a, [e])
    }
    var Qg = 0;
    function dt(e, a) {
        if (e.name != null && e.name !== "auto")
            return e.name;
        if (a.autoName !== null)
            return a.autoName;
        e = La.identifierPrefix;
        var t = Qg++;
        return e = "_" + e + "t_" + t.toString(32) + "_",
        a.autoName = e
    }
    function Lc(e) {
        if (e == null || typeof e == "string")
            return e;
        var a = null
          , t = Pl;
        if (t !== null)
            for (var l = 0; l < t.length; l++) {
                var o = e[t[l]];
                if (o != null) {
                    if (o === "none")
                        return "none";
                    a = a == null ? o : a + (" " + o)
                }
            }
        return a ?? e.default
    }
    function mt(e, a) {
        return e = Lc(e),
        a = Lc(a),
        a == null ? e === "auto" ? null : e : a === "auto" ? null : a
    }
    var Tn = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var a = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(a))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Ra = []
      , Ml = 0
      , _r = 0;
    function jn() {
        for (var e = Ml, a = _r = Ml = 0; a < e; ) {
            var t = Ra[a];
            Ra[a++] = null;
            var l = Ra[a];
            Ra[a++] = null;
            var o = Ra[a];
            Ra[a++] = null;
            var n = Ra[a];
            if (Ra[a++] = null,
            l !== null && o !== null) {
                var i = l.pending;
                i === null ? o.next = o : (o.next = i.next,
                i.next = o),
                l.pending = o
            }
            n !== 0 && Gc(t, o, n)
        }
    }
    function Mn(e, a, t, l) {
        Ra[Ml++] = e,
        Ra[Ml++] = a,
        Ra[Ml++] = t,
        Ra[Ml++] = l,
        _r |= l,
        e.lanes |= l,
        e = e.alternate,
        e !== null && (e.lanes |= l)
    }
    function Er(e, a, t, l) {
        return Mn(e, a, t, l),
        On(e)
    }
    function ll(e, a) {
        return Mn(e, null, null, a),
        On(e)
    }
    function Gc(e, a, t) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t);
        for (var o = !1, n = e.return; n !== null; )
            n.childLanes |= t,
            l = n.alternate,
            l !== null && (l.childLanes |= t),
            n.tag === 22 && (e = n.stateNode,
            e === null || e._visibility & 1 || (o = !0)),
            e = n,
            n = n.return;
        return e.tag === 3 ? (n = e.stateNode,
        o && a !== null && (o = 31 - va(t),
        e = n.hiddenUpdates,
        l = e[o],
        l === null ? e[o] = [a] : l.push(a),
        a.lane = t | 536870912),
        n) : null
    }
    function On(e) {
        if (50 < Jo)
            throw Jo = 0,
            Ai = null,
            Error(m(185));
        for (var a = e.return; a !== null; )
            e = a,
            a = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Ol = {};
    function Yg(e, a, t, l) {
        this.tag = e,
        this.key = t,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = a,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function ua(e, a, t, l) {
        return new Yg(e,a,t,l)
    }
    function Ir(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function ft(e, a) {
        var t = e.alternate;
        return t === null ? (t = ua(e.tag, a, e.key, e.mode),
        t.elementType = e.elementType,
        t.type = e.type,
        t.stateNode = e.stateNode,
        t.alternate = e,
        e.alternate = t) : (t.pendingProps = a,
        t.type = e.type,
        t.flags = 0,
        t.subtreeFlags = 0,
        t.deletions = null),
        t.flags = e.flags & 1206910976,
        t.childLanes = e.childLanes,
        t.lanes = e.lanes,
        t.child = e.child,
        t.memoizedProps = e.memoizedProps,
        t.memoizedState = e.memoizedState,
        t.updateQueue = e.updateQueue,
        a = e.dependencies,
        t.dependencies = a === null ? null : {
            lanes: a.lanes,
            firstContext: a.firstContext
        },
        t.sibling = e.sibling,
        t.index = e.index,
        t.ref = e.ref,
        t.refCleanup = e.refCleanup,
        t
    }
    function Zc(e, a) {
        e.flags &= 1206910978;
        var t = e.alternate;
        return t === null ? (e.childLanes = 0,
        e.lanes = a,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = t.childLanes,
        e.lanes = t.lanes,
        e.child = t.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = t.memoizedProps,
        e.memoizedState = t.memoizedState,
        e.updateQueue = t.updateQueue,
        e.type = t.type,
        a = t.dependencies,
        e.dependencies = a === null ? null : {
            lanes: a.lanes,
            firstContext: a.firstContext
        }),
        e
    }
    function Dn(e, a, t, l, o, n) {
        var i = 0;
        if (l = e,
        typeof l == "function")
            Ir(l) && (i = 1);
        else if (typeof l == "string")
            i = gh(e, t, Fa.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (l) {
            case la:
                return e = ua(31, t, a, o),
                e.elementType = la,
                e.lanes = n,
                e;
            case Je:
                return ol(t.children, o, n, a);
            case ta:
                i = 8,
                o |= 24;
                break;
            case Ha:
                return e = ua(12, t, a, o | 2),
                e.elementType = Ha,
                e.lanes = n,
                e;
            case Q:
                return e = ua(13, t, a, o),
                e.elementType = Q,
                e.lanes = n,
                e;
            case U:
                return e = ua(19, t, a, o),
                e.elementType = U,
                e.lanes = n,
                e;
            case We:
            case d:
                return e = o | 32,
                e = ua(30, t, a, e),
                e.elementType = d,
                e.lanes = n,
                e.stateNode = {
                    autoName: null,
                    paired: null,
                    clones: null,
                    ref: null
                },
                e;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case Ae:
                        i = 10;
                        break e;
                    case $e:
                        i = 9;
                        break e;
                    case C:
                        i = 11;
                        break e;
                    case me:
                        i = 14;
                        break e;
                    case re:
                        i = 16,
                        l = null;
                        break e
                    }
                i = 29,
                t = Error(m(130, e === null ? "null" : typeof e, "")),
                l = null
            }
        return a = ua(i, t, a, o),
        a.elementType = e,
        a.type = l,
        a.lanes = n,
        a
    }
    function ol(e, a, t, l) {
        return e = ua(7, e, l, a),
        e.lanes = t,
        e
    }
    function Nr(e, a, t) {
        return e = ua(6, e, null, a),
        e.lanes = t,
        e
    }
    function Xc(e) {
        var a = ua(18, null, null, 0);
        return a.stateNode = e,
        a
    }
    function Rr(e, a, t) {
        return a = ua(4, e.children !== null ? e.children : [], e.key, a),
        a.lanes = t,
        a.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        a
    }
    var kc = new WeakMap;
    function za(e, a) {
        if (typeof e == "object" && e !== null) {
            var t = kc.get(e);
            return t !== void 0 ? t : (a = {
                value: e,
                source: a,
                stack: Qu(a)
            },
            kc.set(e, a),
            a)
        }
        return {
            value: e,
            source: a,
            stack: Qu(a)
        }
    }
    var Dl = []
      , Hl = 0
      , Hn = null
      , Ro = 0
      , Ca = []
      , Ta = 0
      , Nt = null
      , Ja = 1
      , $a = "";
    function pt(e, a) {
        Dl[Hl++] = Ro,
        Dl[Hl++] = Hn,
        Hn = e,
        Ro = a
    }
    function Vc(e, a, t) {
        Ca[Ta++] = Ja,
        Ca[Ta++] = $a,
        Ca[Ta++] = Nt,
        Nt = e;
        var l = Ja;
        e = $a;
        var o = 32 - va(l) - 1;
        l &= ~(1 << o),
        t += 1;
        var n = 32 - va(a) + o;
        if (30 < n) {
            var i = o - o % 5;
            n = (l & (1 << i) - 1).toString(32),
            l >>= i,
            o -= i,
            Ja = 1 << 32 - va(a) + o | t << o | l,
            $a = n + e
        } else
            Ja = 1 << n | t << o | l,
            $a = e
    }
    function Un(e) {
        e.return !== null && (pt(e, 1),
        Vc(e, 1, 0))
    }
    function zr(e) {
        for (; e === Hn; )
            Hn = Dl[--Hl],
            Dl[Hl] = null,
            Ro = Dl[--Hl],
            Dl[Hl] = null;
        for (; e === Nt; )
            Nt = Ca[--Ta],
            Ca[Ta] = null,
            $a = Ca[--Ta],
            Ca[Ta] = null,
            Ja = Ca[--Ta],
            Ca[Ta] = null
    }
    function Fc(e, a) {
        Ca[Ta++] = Ja,
        Ca[Ta++] = $a,
        Ca[Ta++] = Nt,
        Ja = a.id,
        $a = a.overflow,
        Nt = e
    }
    var Oe = null
      , ve = null
      , W = !1
      , Rt = null
      , ja = !1
      , Cr = Error(m(519));
    function zt(e) {
        var a = Error(m(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw zo(za(a, e)),
        Cr
    }
    function Kc(e) {
        var a = e.stateNode
          , t = e.type
          , l = e.memoizedProps;
        switch (a[Qe] = e,
        a[sa] = l,
        t) {
        case "dialog":
            ee("cancel", a),
            ee("close", a);
            break;
        case "iframe":
        case "object":
        case "embed":
            ee("load", a);
            break;
        case "video":
        case "audio":
            for (t = 0; t < Wo.length; t++)
                ee(Wo[t], a);
            break;
        case "source":
            ee("error", a);
            break;
        case "img":
        case "image":
        case "link":
            ee("error", a),
            ee("load", a);
            break;
        case "details":
            ee("toggle", a);
            break;
        case "input":
            ee("invalid", a),
            rc(a, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            ee("invalid", a);
            break;
        case "textarea":
            ee("invalid", a),
            uc(a, l.value, l.defaultValue, l.children)
        }
        t = l.children,
        typeof t != "string" && typeof t != "number" && typeof t != "bigint" || a.textContent === "" + t || l.suppressHydrationWarning === !0 || hf(a.textContent, t) ? (l.popover != null && (ee("beforetoggle", a),
        ee("toggle", a)),
        l.onScroll != null && ee("scroll", a),
        l.onScrollEnd != null && ee("scrollend", a),
        l.onClick != null && (a.onclick = Ka),
        a = !0) : a = !1,
        a || zt(e, !0)
    }
    function Bn(e) {
        for (Oe = e.return; Oe; )
            switch (Oe.tag) {
            case 5:
            case 31:
            case 13:
                ja = !1;
                return;
            case 27:
            case 3:
                ja = !0;
                return;
            default:
                Oe = Oe.return
            }
    }
    function Ul(e) {
        if (e !== Oe)
            return !1;
        if (!W)
            return Bn(e),
            W = !0,
            !1;
        var a = e.tag, t;
        if ((t = a !== 3 && a !== 27) && ((t = a === 5) && (t = e.type,
        t = !(t !== "form" && t !== "button") || ru(e.type, e.memoizedProps)),
        t = !t),
        t && ve && zt(e),
        Bn(e),
        a === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(m(317));
            ve = Df(e)
        } else if (a === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(m(317));
            ve = Df(e)
        } else
            a === 27 ? (a = ve,
            kt(e.type) ? (e = bu,
            bu = null,
            ve = e) : ve = a) : ve = Oe ? Oa(e.stateNode.nextSibling) : null;
        return !0
    }
    function nl() {
        ve = Oe = null,
        W = !1
    }
    function Tr() {
        var e = Rt;
        return e !== null && (ma === null ? ma = e : ma.push.apply(ma, e),
        Rt = null),
        e
    }
    function zo(e) {
        Rt === null ? Rt = [e] : Rt.push(e)
    }
    var jr = Va(null)
      , il = null
      , gt = null;
    function Ct(e, a, t) {
        ye(jr, a._currentValue),
        a._currentValue = t
    }
    function bt(e) {
        e._currentValue = jr.current,
        Be(jr)
    }
    function Qn(e, a, t) {
        for (; e !== null; ) {
            var l = e.alternate;
            if ((e.childLanes & a) !== a ? (e.childLanes |= a,
            l !== null && (l.childLanes |= a)) : l !== null && (l.childLanes & a) !== a && (l.childLanes |= a),
            e === t)
                break;
            e = e.return
        }
    }
    function Mr(e, a, t, l) {
        var o = e.child;
        for (o !== null && (o.return = e); o !== null; ) {
            var n = o.dependencies;
            if (n !== null) {
                var i = o.child;
                n = n.firstContext;
                e: for (; n !== null; ) {
                    var r = n;
                    n = o;
                    for (var s = 0; s < a.length; s++)
                        if (r.context === a[s]) {
                            n.lanes |= t,
                            r = n.alternate,
                            r !== null && (r.lanes |= t),
                            Qn(n.return, t, e),
                            l || (i = null);
                            break e
                        }
                    n = r.next
                }
            } else if (o.tag === 18) {
                if (i = o.return,
                i === null)
                    throw Error(m(341));
                i.lanes |= t,
                n = i.alternate,
                n !== null && (n.lanes |= t),
                Qn(i, t, e),
                i = null
            } else
                o.tag === 13 && o.memoizedState !== null && o.memoizedState.dehydrated === null ? (o.lanes |= t,
                i = o.alternate,
                i !== null && (i.lanes |= t),
                Qn(o.return, t, e),
                i = o.child,
                i = i !== null ? i.sibling : null) : i = o.child;
            if (i !== null)
                i.return = o;
            else
                for (i = o; i !== null; ) {
                    if (i === e) {
                        i = null;
                        break
                    }
                    if (o = i.sibling,
                    o !== null) {
                        o.return = i.return,
                        i = o;
                        break
                    }
                    i = i.return
                }
            o = i
        }
    }
    function rl(e, a, t, l) {
        e = null;
        for (var o = a, n = !1; o !== null; ) {
            if (!n) {
                if ((o.flags & 524288) !== 0)
                    n = !0;
                else if ((o.flags & 262144) !== 0)
                    break
            }
            if (o.tag === 10) {
                var i = o.alternate;
                if (i === null)
                    throw Error(m(387));
                if (i = i.memoizedProps,
                i !== null) {
                    var r = o.type;
                    wa(o.pendingProps.value, i.value) || (e !== null ? e.push(r) : e = [r])
                }
            } else if (o === fn.current) {
                if (i = o.alternate,
                i === null)
                    throw Error(m(387));
                i.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(uo) : e = [uo])
            }
            o = o.return
        }
        return e !== null && Mr(a, e, t, l),
        a.flags |= 262144,
        e !== null
    }
    function Yn(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!wa(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function sl(e) {
        il = e,
        gt = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Ye(e) {
        return Jc(il, e)
    }
    function Ln(e, a) {
        return il === null && sl(e),
        Jc(e, a)
    }
    function Jc(e, a) {
        var t = a._currentValue;
        if (a = {
            context: a,
            memoizedValue: t,
            next: null
        },
        gt === null) {
            if (e === null)
                throw Error(m(308));
            gt = a,
            e.dependencies = {
                lanes: 0,
                firstContext: a
            },
            e.flags |= 524288
        } else
            gt = gt.next = a;
        return t
    }
    var Lg = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , a = this.signal = {
            aborted: !1,
            addEventListener: function(t, l) {
                e.push(l)
            }
        };
        this.abort = function() {
            a.aborted = !0,
            e.forEach(function(t) {
                return t()
            })
        }
    }
      , Gg = v.unstable_scheduleCallback
      , Zg = v.unstable_NormalPriority
      , Re = {
        $$typeof: Ae,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Or() {
        return {
            controller: new Lg,
            data: new Map,
            refCount: 0
        }
    }
    function Co(e) {
        e.refCount--,
        e.refCount === 0 && Gg(Zg, function() {
            e.controller.abort()
        })
    }
    function $c(e, a) {
        if ((e.pendingLanes & 4194048) !== 0) {
            var t = e.transitionTypes;
            for (t === null && (t = e.transitionTypes = []),
            e = 0; e < a.length; e++) {
                var l = a[e];
                t.indexOf(l) === -1 && t.push(l)
            }
        }
    }
    var To = null;
    function Xg(e) {
        var a = e.transitionTypes;
        return e.transitionTypes = null,
        a
    }
    var jo = null
      , Dr = 0
      , ul = 0
      , Bl = null;
    function kg(e, a) {
        if (jo === null) {
            var t = jo = [];
            Dr = 0,
            ul = Ws(),
            Bl = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    t.push(l)
                }
            }
        }
        return Dr++,
        a.then(Wc, Wc),
        a
    }
    function Wc() {
        if (--Dr === 0 && (To = null,
        jo !== null)) {
            Bl !== null && (Bl.status = "fulfilled");
            var e = jo;
            jo = null,
            ul = 0,
            Bl = null;
            for (var a = 0; a < e.length; a++)
                (0,
                e[a])()
        }
    }
    function Vg(e, a) {
        var t = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(o) {
                t.push(o)
            }
        };
        return e.then(function() {
            l.status = "fulfilled",
            l.value = a;
            for (var o = 0; o < t.length; o++)
                (0,
                t[o])(a)
        }, function(o) {
            for (l.status = "rejected",
            l.reason = o,
            o = 0; o < t.length; o++)
                (0,
                t[o])(void 0)
        }),
        l
    }
    var Pc = H.S;
    H.S = function(e, a) {
        if (Xm = ha(),
        typeof a == "object" && a !== null && typeof a.then == "function" && kg(e, a),
        To !== null)
            for (var t = lo; t !== null; )
                $c(t, To),
                t = t.next;
        if (t = e.types,
        t !== null) {
            for (var l = lo; l !== null; )
                $c(l, t),
                l = l.next;
            if (ul !== 0) {
                l = To,
                l === null && (l = To = []);
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    l.indexOf(n) === -1 && l.push(n)
                }
            }
        }
        Pc !== null && Pc(e, a)
    }
    ;
    var cl = Va(null);
    function Hr() {
        var e = cl.current;
        return e !== null ? e : he.pooledCache
    }
    function Gn(e, a) {
        a === null ? ye(cl, cl.current) : ye(cl, a.pool)
    }
    function ed() {
        var e = Hr();
        return e === null ? null : {
            parent: Re._currentValue,
            pool: e
        }
    }
    var Ql = Error(m(460))
      , Ur = Error(m(474))
      , Zn = Error(m(542))
      , Xn = {
        then: function() {}
    };
    function ad(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function td(e, a, t) {
        switch (t = e[t],
        t === void 0 ? e.push(a) : t !== a && (a.then(Ka, Ka),
        a = t),
        a.status) {
        case "fulfilled":
            return a.value;
        case "rejected":
            throw e = a.reason,
            od(e),
            e === void 0 && !("reason" in a) ? Error(m(600)) : e;
        default:
            if (typeof a.status == "string")
                a.then(Ka, Ka);
            else {
                if (e = he,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(m(482));
                e = a,
                e.status = "pending",
                e.then(function(l) {
                    if (a.status === "pending") {
                        var o = a;
                        o.status = "fulfilled",
                        o.value = l
                    }
                }, function(l) {
                    if (a.status === "pending") {
                        var o = a;
                        o.status = "rejected",
                        o.reason = l
                    }
                })
            }
            switch (a.status) {
            case "fulfilled":
                return a.value;
            case "rejected":
                throw e = a.reason,
                od(e),
                e
            }
            throw ml = a,
            Ql
        }
    }
    function dl(e) {
        try {
            var a = e._init;
            return a(e._payload)
        } catch (t) {
            throw t !== null && typeof t == "object" && typeof t.then == "function" ? (ml = t,
            Ql) : t
        }
    }
    var ml = null;
    function ld() {
        if (ml === null)
            throw Error(m(459));
        var e = ml;
        return ml = null,
        e
    }
    function od(e) {
        if (e === Ql || e === Zn)
            throw Error(m(483))
    }
    var Yl = null
      , Mo = 0;
    function kn(e) {
        var a = Mo;
        return Mo += 1,
        Yl === null && (Yl = []),
        td(Yl, e, a)
    }
    function Tt(e, a) {
        a = a.props.ref,
        e.ref = a !== void 0 ? a : null
    }
    function Vn(e, a) {
        throw a.$$typeof === ae ? Error(m(525)) : (e = Object.prototype.toString.call(a),
        Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : e)))
    }
    function nd(e) {
        function a(p, c) {
            if (e) {
                var h = p.deletions;
                h === null ? (p.deletions = [c],
                p.flags |= 16) : h.push(c)
            }
        }
        function t(p, c) {
            if (!e)
                return null;
            for (; c !== null; )
                a(p, c),
                c = c.sibling;
            return null
        }
        function l(p) {
            for (var c = new Map; p !== null; )
                p.key === null ? c.set(p.index, p) : c.set(p.key, p),
                p = p.sibling;
            return c
        }
        function o(p, c) {
            return p = ft(p, c),
            p.index = 0,
            p.sibling = null,
            p
        }
        function n(p, c, h) {
            return p.index = h,
            e ? (h = p.alternate,
            h !== null ? (h = h.index,
            h < c ? (p.flags |= 2,
            c) : h) : (p.flags |= 134217730,
            c)) : (p.flags |= 1048576,
            c)
        }
        function i(p) {
            return e && p.alternate === null && (p.flags |= 134217730),
            p
        }
        function r(p, c, h, x) {
            return c === null || c.tag !== 6 ? (c = Nr(h, p.mode, x),
            c.return = p,
            c) : (c = o(c, h),
            c.return = p,
            c)
        }
        function s(p, c, h, x) {
            var T = h.type;
            return T === Je ? (p = S(p, c, h.props.children, x, h.key),
            Tt(p, h),
            p) : c !== null && (c.elementType === T || typeof T == "object" && T !== null && T.$$typeof === re && dl(T) === c.type) ? (c = o(c, h.props),
            Tt(c, h),
            c.return = p,
            c) : (c = Dn(h.type, h.key, h.props, null, p.mode, x),
            Tt(c, h),
            c.return = p,
            c)
        }
        function g(p, c, h, x) {
            return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Rr(h, p.mode, x),
            c.return = p,
            c) : (c = o(c, h.children || []),
            c.return = p,
            c)
        }
        function S(p, c, h, x, T) {
            return c === null || c.tag !== 7 ? (c = ol(h, p.mode, x, T),
            c.return = p,
            c) : (c = o(c, h),
            c.return = p,
            c)
        }
        function q(p, c, h) {
            if (typeof c == "string" && c !== "" || typeof c == "number" || typeof c == "bigint")
                return c = Nr("" + c, p.mode, h),
                c.return = p,
                c;
            if (typeof c == "object" && c !== null) {
                switch (c.$$typeof) {
                case ba:
                    return h = Dn(c.type, c.key, c.props, null, p.mode, h),
                    Tt(h, c),
                    h.return = p,
                    h;
                case aa:
                    return c = Rr(c, p.mode, h),
                    c.return = p,
                    c;
                case re:
                    return c = dl(c),
                    q(p, c, h)
                }
                if (ie(c) || E(c))
                    return c = ol(c, p.mode, h, null),
                    c.return = p,
                    c;
                if (typeof c.then == "function")
                    return q(p, kn(c), h);
                if (c.$$typeof === Ae)
                    return q(p, Ln(p, c), h);
                Vn(p, c)
            }
            return null
        }
        function f(p, c, h, x) {
            var T = c !== null ? c.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
                return T !== null ? null : r(p, c, "" + h, x);
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case ba:
                    return h.key === T ? s(p, c, h, x) : null;
                case aa:
                    return h.key === T ? g(p, c, h, x) : null;
                case re:
                    return h = dl(h),
                    f(p, c, h, x)
                }
                if (ie(h) || E(h))
                    return T !== null ? null : S(p, c, h, x, null);
                if (typeof h.then == "function")
                    return f(p, c, kn(h), x);
                if (h.$$typeof === Ae)
                    return f(p, c, Ln(p, h), x);
                Vn(p, h)
            }
            return null
        }
        function y(p, c, h, x, T) {
            if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
                return p = p.get(h) || null,
                r(c, p, "" + x, T);
            if (typeof x == "object" && x !== null) {
                switch (x.$$typeof) {
                case ba:
                    return p = p.get(x.key === null ? h : x.key) || null,
                    s(c, p, x, T);
                case aa:
                    return p = p.get(x.key === null ? h : x.key) || null,
                    g(c, p, x, T);
                case re:
                    return x = dl(x),
                    y(p, c, h, x, T)
                }
                if (ie(x) || E(x))
                    return p = p.get(h) || null,
                    S(c, p, x, T, null);
                if (typeof x.then == "function")
                    return y(p, c, h, kn(x), T);
                if (x.$$typeof === Ae)
                    return y(p, c, h, Ln(c, x), T);
                Vn(c, x)
            }
            return null
        }
        function N(p, c, h, x) {
            for (var T = null, le = null, B = c, G = c = 0, Te = null; B !== null && G < h.length; G++) {
                B.index > G ? (Te = B,
                B = null) : Te = B.sibling;
                var ne = f(p, B, h[G], x);
                if (ne === null) {
                    B === null && (B = Te);
                    break
                }
                e && B && ne.alternate === null && a(p, B),
                c = n(ne, c, G),
                le === null ? T = ne : le.sibling = ne,
                le = ne,
                B = Te
            }
            if (G === h.length)
                return t(p, B),
                W && pt(p, G),
                T;
            if (B === null) {
                for (; G < h.length; G++)
                    B = q(p, h[G], x),
                    B !== null && (c = n(B, c, G),
                    le === null ? T = B : le.sibling = B,
                    le = B);
                return W && pt(p, G),
                T
            }
            for (B = l(B); G < h.length; G++)
                Te = y(B, p, G, h[G], x),
                Te !== null && (e && (ne = Te.alternate,
                ne !== null && B.delete(ne.key === null ? G : ne.key)),
                c = n(Te, c, G),
                le === null ? T = Te : le.sibling = Te,
                le = Te);
            return e && B.forEach(function($t) {
                return a(p, $t)
            }),
            W && pt(p, G),
            T
        }
        function M(p, c, h, x) {
            if (h == null)
                throw Error(m(151));
            for (var T = null, le = null, B = c, G = c = 0, Te = null, ne = h.next(); B !== null && !ne.done; G++,
            ne = h.next()) {
                B.index > G ? (Te = B,
                B = null) : Te = B.sibling;
                var $t = f(p, B, ne.value, x);
                if ($t === null) {
                    B === null && (B = Te);
                    break
                }
                e && B && $t.alternate === null && a(p, B),
                c = n($t, c, G),
                le === null ? T = $t : le.sibling = $t,
                le = $t,
                B = Te
            }
            if (ne.done)
                return t(p, B),
                W && pt(p, G),
                T;
            if (B === null) {
                for (; !ne.done; G++,
                ne = h.next())
                    ne = q(p, ne.value, x),
                    ne !== null && (c = n(ne, c, G),
                    le === null ? T = ne : le.sibling = ne,
                    le = ne);
                return W && pt(p, G),
                T
            }
            for (B = l(B); !ne.done; G++,
            ne = h.next())
                ne = y(B, p, G, ne.value, x),
                ne !== null && (e && (Te = ne.alternate,
                Te !== null && B.delete(Te.key === null ? G : Te.key)),
                c = n(ne, c, G),
                le === null ? T = ne : le.sibling = ne,
                le = ne);
            return e && B.forEach(function(Ih) {
                return a(p, Ih)
            }),
            W && pt(p, G),
            T
        }
        function K(p, c, h, x) {
            if (typeof h == "object" && h !== null && h.type === Je && h.key === null && h.props.ref === void 0 && (h = h.props.children),
            typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case ba:
                    e: {
                        for (var T = h.key; c !== null; ) {
                            if (c.key === T) {
                                if (T = h.type,
                                T === Je) {
                                    if (c.tag === 7) {
                                        t(p, c.sibling),
                                        x = o(c, h.props.children),
                                        Tt(x, h),
                                        x.return = p,
                                        p = x;
                                        break e
                                    }
                                } else if (c.elementType === T || typeof T == "object" && T !== null && T.$$typeof === re && dl(T) === c.type) {
                                    t(p, c.sibling),
                                    x = o(c, h.props),
                                    Tt(x, h),
                                    x.return = p,
                                    p = x;
                                    break e
                                }
                                t(p, c);
                                break
                            } else
                                a(p, c);
                            c = c.sibling
                        }
                        h.type === Je ? (x = ol(h.props.children, p.mode, x, h.key),
                        Tt(x, h),
                        x.return = p,
                        p = x) : (x = Dn(h.type, h.key, h.props, null, p.mode, x),
                        Tt(x, h),
                        x.return = p,
                        p = x)
                    }
                    return i(p);
                case aa:
                    e: {
                        for (T = h.key; c !== null; ) {
                            if (c.key === T)
                                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                                    t(p, c.sibling),
                                    x = o(c, h.children || []),
                                    x.return = p,
                                    p = x;
                                    break e
                                } else {
                                    t(p, c);
                                    break
                                }
                            else
                                a(p, c);
                            c = c.sibling
                        }
                        x = Rr(h, p.mode, x),
                        x.return = p,
                        p = x
                    }
                    return i(p);
                case re:
                    return h = dl(h),
                    K(p, c, h, x)
                }
                if (ie(h))
                    return N(p, c, h, x);
                if (E(h)) {
                    if (T = E(h),
                    typeof T != "function")
                        throw Error(m(150));
                    return h = T.call(h),
                    M(p, c, h, x)
                }
                if (typeof h.then == "function")
                    return K(p, c, kn(h), x);
                if (h.$$typeof === Ae)
                    return K(p, c, Ln(p, h), x);
                Vn(p, h)
            }
            return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h,
            c !== null && c.tag === 6 ? (t(p, c.sibling),
            x = o(c, h),
            x.return = p,
            p = x) : (t(p, c),
            x = Nr(h, p.mode, x),
            x.return = p,
            p = x),
            i(p)) : t(p, c)
        }
        return function(p, c, h, x) {
            try {
                Mo = 0;
                var T = K(p, c, h, x);
                return Yl = null,
                T
            } catch (B) {
                if (B === Ql || B === Zn)
                    throw B;
                var le = ua(29, B, null, p.mode);
                return le.lanes = x,
                le.return = p,
                le
            } finally {}
        }
    }
    var fl = nd(!0)
      , id = nd(!1)
      , jt = !1;
    function Br(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Qr(e, a) {
        e = e.updateQueue,
        a.updateQueue === e && (a.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Mt(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ot(e, a, t) {
        var l = e.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (ue & 2) !== 0) {
            var o = l.pending;
            return o === null ? a.next = a : (a.next = o.next,
            o.next = a),
            l.pending = a,
            a = On(e),
            Gc(e, null, t),
            a
        }
        return Mn(e, l, a, t),
        On(e)
    }
    function Oo(e, a, t) {
        if (a = a.updateQueue,
        a !== null && (a = a.shared,
        (t & 4194048) !== 0)) {
            var l = a.lanes;
            l &= e.pendingLanes,
            t |= l,
            a.lanes = t,
            Vu(e, t)
        }
    }
    function Yr(e, a) {
        var t = e.updateQueue
          , l = e.alternate;
        if (l !== null && (l = l.updateQueue,
        t === l)) {
            var o = null
              , n = null;
            if (t = t.firstBaseUpdate,
            t !== null) {
                do {
                    var i = {
                        lane: t.lane,
                        tag: t.tag,
                        payload: t.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? o = n = i : n = n.next = i,
                    t = t.next
                } while (t !== null);
                n === null ? o = n = a : n = n.next = a
            } else
                o = n = a;
            t = {
                baseState: l.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: n,
                shared: l.shared,
                callbacks: l.callbacks
            },
            e.updateQueue = t;
            return
        }
        e = t.lastBaseUpdate,
        e === null ? t.firstBaseUpdate = a : e.next = a,
        t.lastBaseUpdate = a
    }
    var Lr = !1;
    function Do() {
        if (Lr) {
            var e = Bl;
            if (e !== null)
                throw e
        }
    }
    function Ho(e, a, t, l) {
        Lr = !1;
        var o = e.updateQueue;
        jt = !1;
        var n = o.firstBaseUpdate
          , i = o.lastBaseUpdate
          , r = o.shared.pending;
        if (r !== null) {
            o.shared.pending = null;
            var s = r
              , g = s.next;
            s.next = null,
            i === null ? n = g : i.next = g,
            i = s;
            var S = e.alternate;
            S !== null && (S = S.updateQueue,
            r = S.lastBaseUpdate,
            r !== i && (r === null ? S.firstBaseUpdate = g : r.next = g,
            S.lastBaseUpdate = s))
        }
        if (n !== null) {
            var q = o.baseState;
            i = 0,
            S = g = s = null,
            r = n;
            do {
                var f = r.lane & -536870913
                  , y = f !== r.lane;
                if (y ? (te & f) === f : (l & f) === f) {
                    f !== 0 && f === ul && (Lr = !0),
                    S !== null && (S = S.next = {
                        lane: 0,
                        tag: r.tag,
                        payload: r.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var N = e
                          , M = r;
                        f = a;
                        var K = t;
                        switch (M.tag) {
                        case 1:
                            if (N = M.payload,
                            typeof N == "function") {
                                q = N.call(K, q, f);
                                break e
                            }
                            q = N;
                            break e;
                        case 3:
                            N.flags = N.flags & -65537 | 128;
                        case 0:
                            if (N = M.payload,
                            f = typeof N == "function" ? N.call(K, q, f) : N,
                            f == null)
                                break e;
                            q = $({}, q, f);
                            break e;
                        case 2:
                            jt = !0
                        }
                    }
                    f = r.callback,
                    f !== null && (e.flags |= 64,
                    y && (e.flags |= 8192),
                    y = o.callbacks,
                    y === null ? o.callbacks = [f] : y.push(f))
                } else
                    y = {
                        lane: f,
                        tag: r.tag,
                        payload: r.payload,
                        callback: r.callback,
                        next: null
                    },
                    S === null ? (g = S = y,
                    s = q) : S = S.next = y,
                    i |= f;
                if (r = r.next,
                r === null) {
                    if (r = o.shared.pending,
                    r === null)
                        break;
                    y = r,
                    r = y.next,
                    y.next = null,
                    o.lastBaseUpdate = y,
                    o.shared.pending = null
                }
            } while (!0);
            S === null && (s = q),
            o.baseState = s,
            o.firstBaseUpdate = g,
            o.lastBaseUpdate = S,
            n === null && (o.shared.lanes = 0),
            Lt |= i,
            e.lanes = i,
            e.memoizedState = q
        }
    }
    function rd(e, a) {
        if (typeof e != "function")
            throw Error(m(191, e));
        e.call(a)
    }
    function sd(e, a) {
        var t = e.callbacks;
        if (t !== null)
            for (e.callbacks = null,
            e = 0; e < t.length; e++)
                rd(t[e], a)
    }
    var Dt = Va(null)
      , Fn = Va(0);
    function ud(e, a) {
        e = wt,
        ye(Fn, e),
        ye(Dt, a),
        wt = e | a.baseLanes
    }
    function Gr() {
        ye(Fn, wt),
        ye(Dt, Dt.current)
    }
    function Zr() {
        wt = Fn.current,
        Be(Dt),
        Be(Fn)
    }
    var Le = Va(null)
      , Pe = null;
    function Ht(e) {
        var a = e.alternate;
        ye(Ge, Ge.current & 1),
        ye(Le, e),
        Pe === null && (a === null || Dt.current !== null || a.memoizedState !== null) && (Pe = e)
    }
    function Xr(e) {
        ye(Ge, Ge.current),
        ye(Le, e),
        Pe === null && (Pe = e)
    }
    function cd(e) {
        e.tag === 22 ? (ye(Ge, Ge.current),
        ye(Le, e),
        Pe === null && (Pe = e)) : Ut()
    }
    function Ut() {
        ye(Ge, Ge.current),
        ye(Le, Le.current)
    }
    function xa(e) {
        Be(Le),
        Pe === e && (Pe = null),
        Be(Ge)
    }
    var Ge = Va(0);
    function Uo(e, a) {
        ye(Le, Le.current),
        ye(Ge, a)
    }
    function kr(e) {
        Be(Ge),
        Be(Le),
        Pe === e && (Pe = null)
    }
    function Kn(e) {
        for (var a = e; a !== null; ) {
            if (a.tag === 13) {
                var t = a.memoizedState;
                if (t !== null && (t = t.dehydrated,
                t === null || pu(t) || gu(t)))
                    return a
            } else if (a.tag === 19 && a.memoizedProps.revealOrder !== "independent") {
                if ((a.flags & 128) !== 0)
                    return a
            } else if (a.child !== null) {
                a.child.return = a,
                a = a.child;
                continue
            }
            if (a === e)
                break;
            for (; a.sibling === null; ) {
                if (a.return === null || a.return === e)
                    return null;
                a = a.return
            }
            a.sibling.return = a.return,
            a = a.sibling
        }
        return null
    }
    var ht = 0
      , F = null
      , be = null
      , ze = null
      , Jn = !1
      , Ll = !1
      , pl = !1
      , $n = 0
      , Bo = 0
      , Gl = null
      , Fg = 0;
    function _e() {
        throw Error(m(321))
    }
    function Vr(e, a) {
        if (a === null)
            return !1;
        for (var t = 0; t < a.length && t < e.length; t++)
            if (!wa(e[t], a[t]))
                return !1;
        return !0
    }
    function Fr(e, a, t, l, o, n) {
        return ht = n,
        F = a,
        a.memoizedState = null,
        a.updateQueue = null,
        a.lanes = 0,
        H.H = e === null || e.memoizedState === null ? Vd : Fd,
        pl = !1,
        n = t(l, o),
        pl = !1,
        Ll && (n = md(a, t, l, o)),
        dd(e),
        n
    }
    function dd(e) {
        H.H = oi;
        var a = be !== null && be.next !== null;
        if (ht = 0,
        ze = be = F = null,
        Jn = !1,
        Bo = 0,
        Gl = null,
        a)
            throw Error(m(300));
        e === null || Ce || (e = e.dependencies,
        e !== null && Yn(e) && (Ce = !0))
    }
    function md(e, a, t, l) {
        F = e;
        var o = 0;
        do {
            if (Ll && (Gl = null),
            Bo = 0,
            Ll = !1,
            25 <= o)
                throw Error(m(301));
            if (o += 1,
            ze = be = null,
            e.updateQueue != null) {
                var n = e.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            H.H = tb,
            n = a(t, l)
        } while (Ll);
        return n
    }
    function Kg() {
        var e = H.H
          , a = e.useState()[0];
        return a = typeof a.then == "function" ? Qo(a) : a,
        e = e.useState()[0],
        (be !== null ? be.memoizedState : null) !== e && (F.flags |= 1024),
        a
    }
    function Kr() {
        var e = $n !== 0;
        return $n = 0,
        e
    }
    function Jr(e, a, t) {
        a.updateQueue = e.updateQueue,
        a.flags &= -2053,
        e.lanes &= ~t
    }
    function $r(e) {
        if (Jn) {
            for (e = e.memoizedState; e !== null; ) {
                var a = e.queue;
                a !== null && (a.pending = null),
                e = e.next
            }
            Jn = !1
        }
        ht = 0,
        ze = be = F = null,
        Ll = !1,
        Bo = $n = 0,
        Gl = null
    }
    function na() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ze === null ? F.memoizedState = ze = e : ze = ze.next = e,
        ze
    }
    function Ie() {
        if (be === null) {
            var e = F.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = be.next;
        var a = ze === null ? F.memoizedState : ze.next;
        if (a !== null)
            ze = a,
            be = e;
        else {
            if (e === null)
                throw F.alternate === null ? Error(m(467)) : Error(m(310));
            be = e,
            e = {
                memoizedState: be.memoizedState,
                baseState: be.baseState,
                baseQueue: be.baseQueue,
                queue: be.queue,
                next: null
            },
            ze === null ? F.memoizedState = ze = e : ze = ze.next = e
        }
        return ze
    }
    function Wn() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Qo(e) {
        var a = Bo;
        return Bo += 1,
        Gl === null && (Gl = []),
        e = td(Gl, e, a),
        a = F,
        (ze === null ? a.memoizedState : ze.next) === null && (a = a.alternate,
        H.H = a === null || a.memoizedState === null ? Vd : Fd),
        e
    }
    function Pn(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Qo(e);
            if (e.$$typeof === _)
                return;
            if (e.$$typeof === Ae)
                return Ye(e)
        }
        throw Error(m(438, String(e)))
    }
    function Wr(e) {
        var a = null
          , t = F.updateQueue;
        if (t !== null && (a = t.memoCache),
        a == null) {
            var l = F.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (a = {
                data: l.data.map(function(o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (a == null && (a = {
            data: [],
            index: 0
        }),
        t === null && (t = Wn(),
        F.updateQueue = t),
        t.memoCache = a,
        t = a.data[a.index],
        t === void 0)
            for (t = a.data[a.index] = Array(e),
            l = 0; l < e; l++)
                t[l] = ka;
        return a.index++,
        t
    }
    function yt(e, a) {
        return typeof a == "function" ? a(e) : a
    }
    function ei(e) {
        var a = Ie();
        return Pr(a, be, e)
    }
    function Pr(e, a, t) {
        var l = e.queue;
        if (l === null)
            throw Error(m(311));
        l.lastRenderedReducer = t;
        var o = e.baseQueue
          , n = l.pending;
        if (n !== null) {
            if (o !== null) {
                var i = o.next;
                o.next = n.next,
                n.next = i
            }
            a.baseQueue = o = n,
            l.pending = null
        }
        if (n = e.baseState,
        o === null)
            e.memoizedState = n;
        else {
            a = o.next;
            var r = i = null
              , s = null
              , g = a
              , S = !1;
            do {
                var q = g.lane & -536870913;
                if (q !== g.lane ? (te & q) === q : (ht & q) === q) {
                    var f = g.revertLane;
                    if (f === 0)
                        s !== null && (s = s.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        }),
                        q === ul && (S = !0);
                    else if ((ht & f) === f) {
                        g = g.next,
                        f === ul && (S = !0);
                        continue
                    } else
                        q = {
                            lane: 0,
                            revertLane: g.revertLane,
                            gesture: null,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        },
                        s === null ? (r = s = q,
                        i = n) : s = s.next = q,
                        F.lanes |= f,
                        Lt |= f;
                    q = g.action,
                    pl && t(n, q),
                    n = g.hasEagerState ? g.eagerState : t(n, q)
                } else
                    f = {
                        lane: q,
                        revertLane: g.revertLane,
                        gesture: g.gesture,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    },
                    s === null ? (r = s = f,
                    i = n) : s = s.next = f,
                    F.lanes |= q,
                    Lt |= q;
                g = g.next
            } while (g !== null && g !== a);
            if (s === null ? i = n : s.next = r,
            !wa(n, e.memoizedState) && (Ce = !0,
            S && (t = Bl,
            t !== null)))
                throw t;
            e.memoizedState = n,
            e.baseState = i,
            e.baseQueue = s,
            l.lastRenderedState = n
        }
        return o === null && (l.lanes = 0),
        [e.memoizedState, l.dispatch]
    }
    function es(e) {
        var a = Ie()
          , t = a.queue;
        if (t === null)
            throw Error(m(311));
        t.lastRenderedReducer = e;
        var l = t.dispatch
          , o = t.pending
          , n = a.memoizedState;
        if (o !== null) {
            t.pending = null;
            var i = o = o.next;
            do
                n = e(n, i.action),
                i = i.next;
            while (i !== o);
            wa(n, a.memoizedState) || (Ce = !0),
            a.memoizedState = n,
            a.baseQueue === null && (a.baseState = n),
            t.lastRenderedState = n
        }
        return [n, l]
    }
    function fd(e, a, t) {
        var l = F
          , o = Ie()
          , n = W;
        if (n) {
            if (t === void 0)
                throw Error(m(407));
            t = t()
        } else
            t = a();
        var i = !wa((be || o).memoizedState, t);
        if (i && (o.memoizedState = t,
        Ce = !0),
        o = o.queue,
        ls(bd.bind(null, l, o, e), [e]),
        e = o.getSnapshot !== a || i || ze !== null && (ze.memoizedState.tag & 1) !== 0,
        Zl(e ? 9 : 8, {
            destroy: void 0
        }, gd.bind(null, l, o, t, a), null),
        e) {
            if (l.flags |= 2048,
            he === null)
                throw Error(m(349));
            n || (ht & 127) !== 0 || pd(l, a, t)
        }
        return t
    }
    function pd(e, a, t) {
        e.flags |= 16384,
        e = {
            getSnapshot: a,
            value: t
        },
        a = F.updateQueue,
        a === null ? (a = Wn(),
        F.updateQueue = a,
        a.stores = [e]) : (t = a.stores,
        t === null ? a.stores = [e] : t.push(e))
    }
    function gd(e, a, t, l) {
        a.value = t,
        a.getSnapshot = l,
        hd(a) && yd(e)
    }
    function bd(e, a, t) {
        return t(function() {
            hd(a) && yd(e)
        })
    }
    function hd(e) {
        var a = e.getSnapshot;
        e = e.value;
        try {
            var t = a();
            return !wa(e, t)
        } catch {
            return !0
        }
    }
    function yd(e) {
        var a = ll(e, 2);
        a !== null && fa(a, e, 2)
    }
    function as(e) {
        var a = na();
        if (typeof e == "function") {
            var t = e;
            if (e = t(),
            pl) {
                _t(!0);
                try {
                    t()
                } finally {
                    _t(!1)
                }
            }
        }
        return a.memoizedState = a.baseState = e,
        a.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: yt,
            lastRenderedState: e
        },
        a
    }
    function vd(e, a, t, l) {
        return e.baseState = t,
        Pr(e, be, typeof l == "function" ? l : yt)
    }
    function Jg(e, a, t, l, o) {
        if (li(e))
            throw Error(m(485));
        if (e = a.action,
        e !== null) {
            var n = {
                payload: o,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    n.listeners.push(i)
                }
            };
            H.T !== null ? t(!0) : n.isTransition = !1,
            l(n),
            t = a.pending,
            t === null ? (n.next = a.pending = n,
            Sd(a, n)) : (n.next = t.next,
            a.pending = t.next = n)
        }
    }
    function Sd(e, a) {
        var t = a.action
          , l = a.payload
          , o = e.state;
        if (a.isTransition) {
            var n = H.T
              , i = {};
            i.types = n !== null ? n.types : null,
            H.T = i;
            try {
                var r = t(o, l)
                  , s = H.S;
                s !== null && s(i, r),
                wd(e, a, r)
            } catch (g) {
                ts(e, a, g)
            } finally {
                n !== null && i.types !== null && (n.types = i.types),
                H.T = n
            }
        } else
            try {
                n = t(o, l),
                wd(e, a, n)
            } catch (g) {
                ts(e, a, g)
            }
    }
    function wd(e, a, t) {
        t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function(l) {
            xd(e, a, l)
        }, function(l) {
            return ts(e, a, l)
        }) : xd(e, a, t)
    }
    function xd(e, a, t) {
        a.status = "fulfilled",
        a.value = t,
        qd(a),
        e.state = t,
        a = e.pending,
        a !== null && (t = a.next,
        t === a ? e.pending = null : (t = t.next,
        a.next = t,
        Sd(e, t)))
    }
    function ts(e, a, t) {
        var l = e.pending;
        if (e.pending = null,
        l !== null) {
            l = l.next;
            do
                a.status = "rejected",
                a.reason = t,
                qd(a),
                a = a.next;
            while (a !== l)
        }
        e.action = null
    }
    function qd(e) {
        e = e.listeners;
        for (var a = 0; a < e.length; a++)
            (0,
            e[a])()
    }
    function Ad(e, a) {
        return a
    }
    function _d(e, a) {
        if (W) {
            var t = he.formState;
            if (t !== null) {
                e: {
                    var l = F;
                    if (W) {
                        if (ve) {
                            a: {
                                for (var o = ve, n = ja; o.nodeType !== 8; ) {
                                    if (!n) {
                                        o = null;
                                        break a
                                    }
                                    if (o = Oa(o.nextSibling),
                                    o === null) {
                                        o = null;
                                        break a
                                    }
                                }
                                n = o.data,
                                o = n === "F!" || n === "F" ? o : null
                            }
                            if (o) {
                                ve = Oa(o.nextSibling),
                                l = o.data === "F!";
                                break e
                            }
                        }
                        zt(l)
                    }
                    l = !1
                }
                l && (a = t[0])
            }
        }
        return t = na(),
        t.memoizedState = t.baseState = a,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ad,
            lastRenderedState: a
        },
        t.queue = l,
        t = Zd.bind(null, F, l),
        l.dispatch = t,
        l = as(!1),
        n = ss.bind(null, F, !1, l.queue),
        l = na(),
        o = {
            state: a,
            dispatch: null,
            action: e,
            pending: null
        },
        l.queue = o,
        t = Jg.bind(null, F, o, n, t),
        o.dispatch = t,
        l.memoizedState = e,
        [a, t, !1]
    }
    function Ed(e) {
        var a = Ie();
        return Id(a, be, e)
    }
    function Id(e, a, t) {
        if (a = Pr(e, a, Ad)[0],
        e = ei(yt)[0],
        typeof a == "object" && a !== null && typeof a.then == "function")
            try {
                var l = Qo(a)
            } catch (i) {
                throw i === Ql ? Zn : i
            }
        else
            l = a;
        a = Ie();
        var o = a.queue
          , n = o.dispatch;
        return t !== a.memoizedState && (F.flags |= 2048,
        Zl(9, {
            destroy: void 0
        }, $g.bind(null, o, t), null)),
        [l, n, e]
    }
    function $g(e, a) {
        e.action = a
    }
    function Nd(e) {
        var a = Ie()
          , t = be;
        if (t !== null)
            return Id(a, t, e);
        Ie(),
        a = a.memoizedState,
        t = Ie();
        var l = t.queue.dispatch;
        return t.memoizedState = e,
        [a, l, !1]
    }
    function Zl(e, a, t, l) {
        return e = {
            tag: e,
            create: t,
            deps: l,
            inst: a,
            next: null
        },
        a = F.updateQueue,
        a === null && (a = Wn(),
        F.updateQueue = a),
        t = a.lastEffect,
        t === null ? a.lastEffect = e.next = e : (l = t.next,
        t.next = e,
        e.next = l,
        a.lastEffect = e),
        e
    }
    function Rd() {
        return Ie().memoizedState
    }
    function ai(e, a, t, l) {
        var o = na();
        F.flags |= e,
        o.memoizedState = Zl(1 | a, {
            destroy: void 0
        }, t, l === void 0 ? null : l)
    }
    function ti(e, a, t, l) {
        var o = Ie();
        l = l === void 0 ? null : l;
        var n = o.memoizedState.inst;
        be !== null && l !== null && Vr(l, be.memoizedState.deps) ? o.memoizedState = Zl(a, n, t, l) : (F.flags |= e,
        o.memoizedState = Zl(1 | a, n, t, l))
    }
    function zd(e, a) {
        ai(8390656, 8, e, a)
    }
    function ls(e, a) {
        ti(2048, 8, e, a)
    }
    function Wg(e) {
        F.flags |= 4;
        var a = F.updateQueue;
        if (a === null)
            a = Wn(),
            F.updateQueue = a,
            a.events = [e];
        else {
            var t = a.events;
            t === null ? a.events = [e] : t.push(e)
        }
    }
    function Cd(e) {
        var a = Ie().memoizedState;
        return Wg({
            ref: a,
            nextImpl: e
        }),
        function() {
            if ((ue & 2) !== 0)
                throw Error(m(440));
            return a.impl.apply(void 0, arguments)
        }
    }
    function Td(e, a) {
        return ti(4, 2, e, a)
    }
    function jd(e, a) {
        return ti(4, 4, e, a)
    }
    function Md(e, a) {
        if (typeof a == "function") {
            e = e();
            var t = a(e);
            return function() {
                typeof t == "function" ? t() : a(null)
            }
        }
        if (a != null)
            return e = e(),
            a.current = e,
            function() {
                a.current = null
            }
    }
    function Od(e, a, t) {
        t = t != null ? t.concat([e]) : null,
        ti(4, 4, Md.bind(null, a, e), t)
    }
    function os() {}
    function Dd(e, a) {
        var t = Ie();
        a = a === void 0 ? null : a;
        var l = t.memoizedState;
        return a !== null && Vr(a, l[1]) ? l[0] : (t.memoizedState = [e, a],
        e)
    }
    function Hd(e, a) {
        var t = Ie();
        a = a === void 0 ? null : a;
        var l = t.memoizedState;
        if (a !== null && Vr(a, l[1]))
            return l[0];
        if (l = e(),
        pl) {
            _t(!0);
            try {
                e()
            } finally {
                _t(!1)
            }
        }
        return t.memoizedState = [l, a],
        l
    }
    function ns(e, a, t) {
        return t === void 0 || (ht & 1073741824) !== 0 && (te & 261930) === 0 ? e.memoizedState = a : (e.memoizedState = t,
        e = Vm(),
        F.lanes |= e,
        Lt |= e,
        t)
    }
    function Ud(e, a, t, l) {
        return wa(t, a) ? t : Dt.current !== null ? (e = ns(e, t, l),
        wa(e, a) || (Ce = !0),
        e) : (ht & 106) === 0 || (ht & 1073741824) !== 0 && (te & 261930) === 0 ? (Ce = !0,
        e.memoizedState = t) : (e = Vm(),
        F.lanes |= e,
        Lt |= e,
        a)
    }
    function Bd(e, a, t, l, o) {
        var n = k.p;
        k.p = n !== 0 && 8 > n ? n : 8;
        var i = H.T
          , r = {};
        r.types = i !== null ? i.types : null,
        H.T = r,
        ss(e, !1, a, t);
        try {
            var s = o()
              , g = H.S;
            if (g !== null && g(r, s),
            s !== null && typeof s == "object" && typeof s.then == "function") {
                var S = Vg(s, l);
                Yo(e, a, S, Ea(e))
            } else
                Yo(e, a, l, Ea(e))
        } catch (q) {
            Yo(e, a, {
                then: function() {},
                status: "rejected",
                reason: q
            }, Ea())
        } finally {
            k.p = n,
            i !== null && r.types !== null && (i.types = r.types),
            H.T = i
        }
    }
    function Pg() {}
    function is(e, a, t, l) {
        if (e.tag !== 5)
            throw Error(m(476));
        var o = Qd(e).queue;
        Bd(e, o, a, rt, t === null ? Pg : function() {
            return Yd(e),
            t(l)
        }
        )
    }
    function Qd(e) {
        var a = e.memoizedState;
        if (a !== null)
            return a;
        a = {
            memoizedState: rt,
            baseState: rt,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: yt,
                lastRenderedState: rt
            },
            next: null
        };
        var t = {};
        return a.next = {
            memoizedState: t,
            baseState: t,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: yt,
                lastRenderedState: t
            },
            next: null
        },
        e.memoizedState = a,
        e = e.alternate,
        e !== null && (e.memoizedState = a),
        a
    }
    function Yd(e) {
        var a = Qd(e);
        a.next === null && (a = e.alternate.memoizedState),
        Yo(e, a.next.queue, {}, Ea())
    }
    function rs() {
        return Ye(uo)
    }
    function Ld() {
        return Ie().memoizedState
    }
    function Gd() {
        return Ie().memoizedState
    }
    function eb(e) {
        for (var a = e.return; a !== null; ) {
            switch (a.tag) {
            case 24:
            case 3:
                var t = Ea();
                e = Mt(t);
                var l = Ot(a, e, t);
                l !== null && (fa(l, a, t),
                Oo(l, a, t)),
                a = {
                    cache: Or()
                },
                e.payload = a;
                return
            }
            a = a.return
        }
    }
    function ab(e, a, t) {
        var l = Ea();
        t = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        li(e) ? Xd(a, t) : (t = Er(e, a, t, l),
        t !== null && (fa(t, e, l),
        kd(t, a, l)))
    }
    function Zd(e, a, t) {
        var l = Ea();
        Yo(e, a, t, l)
    }
    function Yo(e, a, t, l) {
        var o = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (li(e))
            Xd(a, o);
        else {
            var n = e.alternate;
            if (e.lanes === 0 && (n === null || n.lanes === 0) && (n = a.lastRenderedReducer,
            n !== null))
                try {
                    var i = a.lastRenderedState
                      , r = n(i, t);
                    if (o.hasEagerState = !0,
                    o.eagerState = r,
                    wa(r, i))
                        return Mn(e, a, o, 0),
                        he === null && jn(),
                        !1
                } catch {} finally {}
            if (t = Er(e, a, o, l),
            t !== null)
                return fa(t, e, l),
                kd(t, a, l),
                !0
        }
        return !1
    }
    function ss(e, a, t, l) {
        if (l = {
            lane: 2,
            revertLane: Ws(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        li(e)) {
            if (a)
                throw Error(m(479))
        } else
            a = Er(e, t, l, 2),
            a !== null && fa(a, e, 2)
    }
    function li(e) {
        var a = e.alternate;
        return e === F || a !== null && a === F
    }
    function Xd(e, a) {
        Ll = Jn = !0;
        var t = e.pending;
        t === null ? a.next = a : (a.next = t.next,
        t.next = a),
        e.pending = a
    }
    function kd(e, a, t) {
        if ((t & 4194048) !== 0) {
            var l = a.lanes;
            l &= e.pendingLanes,
            t |= l,
            a.lanes = t,
            Vu(e, t)
        }
    }
    var oi = {
        readContext: Ye,
        use: Pn,
        useCallback: _e,
        useContext: _e,
        useEffect: _e,
        useImperativeHandle: _e,
        useLayoutEffect: _e,
        useInsertionEffect: _e,
        useMemo: _e,
        useReducer: _e,
        useRef: _e,
        useState: _e,
        useDebugValue: _e,
        useDeferredValue: _e,
        useTransition: _e,
        useSyncExternalStore: _e,
        useId: _e,
        useHostTransitionStatus: _e,
        useFormState: _e,
        useActionState: _e,
        useOptimistic: _e,
        useMemoCache: _e,
        useCacheRefresh: _e,
        useEffectEvent: _e
    }
      , Vd = {
        readContext: Ye,
        use: Pn,
        useCallback: function(e, a) {
            return na().memoizedState = [e, a === void 0 ? null : a],
            e
        },
        useContext: Ye,
        useEffect: zd,
        useImperativeHandle: function(e, a, t) {
            t = t != null ? t.concat([e]) : null,
            ai(4194308, 4, Md.bind(null, a, e), t)
        },
        useLayoutEffect: function(e, a) {
            return ai(4194308, 4, e, a)
        },
        useInsertionEffect: function(e, a) {
            ai(4, 2, e, a)
        },
        useMemo: function(e, a) {
            var t = na();
            a = a === void 0 ? null : a;
            var l = e();
            if (pl) {
                _t(!0);
                try {
                    e()
                } finally {
                    _t(!1)
                }
            }
            return t.memoizedState = [l, a],
            l
        },
        useReducer: function(e, a, t) {
            var l = na();
            if (t !== void 0) {
                var o = t(a);
                if (pl) {
                    _t(!0);
                    try {
                        t(a)
                    } finally {
                        _t(!1)
                    }
                }
            } else
                o = a;
            return l.memoizedState = l.baseState = o,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: o
            },
            l.queue = e,
            e = e.dispatch = ab.bind(null, F, e),
            [l.memoizedState, e]
        },
        useRef: function(e) {
            var a = na();
            return e = {
                current: e
            },
            a.memoizedState = e
        },
        useState: function(e) {
            e = as(e);
            var a = e.queue
              , t = Zd.bind(null, F, a);
            return a.dispatch = t,
            [e.memoizedState, t]
        },
        useDebugValue: os,
        useDeferredValue: function(e, a) {
            var t = na();
            return ns(t, e, a)
        },
        useTransition: function() {
            var e = as(!1);
            return e = Bd.bind(null, F, e.queue, !0, !1),
            na().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, a, t) {
            var l = F
              , o = na();
            if (W) {
                if (t === void 0)
                    throw Error(m(407));
                t = t()
            } else {
                if (t = a(),
                he === null)
                    throw Error(m(349));
                (te & 127) !== 0 || pd(l, a, t)
            }
            o.memoizedState = t;
            var n = {
                value: t,
                getSnapshot: a
            };
            return o.queue = n,
            zd(bd.bind(null, l, n, e), [e]),
            l.flags |= 2048,
            Zl(9, {
                destroy: void 0
            }, gd.bind(null, l, n, t, a), null),
            t
        },
        useId: function() {
            var e = na()
              , a = he.identifierPrefix;
            if (W) {
                var t = $a
                  , l = Ja;
                t = (l & ~(1 << 32 - va(l) - 1)).toString(32) + t,
                a = "_" + a + "R_" + t,
                t = $n++,
                0 < t && (a += "H" + t.toString(32)),
                a += "_"
            } else
                t = Fg++,
                a = "_" + a + "r_" + t.toString(32) + "_";
            return e.memoizedState = a
        },
        useHostTransitionStatus: rs,
        useFormState: _d,
        useActionState: _d,
        useOptimistic: function(e) {
            var a = na();
            a.memoizedState = a.baseState = e;
            var t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return a.queue = t,
            a = ss.bind(null, F, !0, t),
            t.dispatch = a,
            [e, a]
        },
        useMemoCache: Wr,
        useCacheRefresh: function() {
            return na().memoizedState = eb.bind(null, F)
        },
        useEffectEvent: function(e) {
            var a = na()
              , t = {
                impl: e
            };
            return a.memoizedState = t,
            function() {
                if ((ue & 2) !== 0)
                    throw Error(m(440));
                return t.impl.apply(void 0, arguments)
            }
        }
    }
      , Fd = {
        readContext: Ye,
        use: Pn,
        useCallback: Dd,
        useContext: Ye,
        useEffect: ls,
        useImperativeHandle: Od,
        useInsertionEffect: Td,
        useLayoutEffect: jd,
        useMemo: Hd,
        useReducer: ei,
        useRef: Rd,
        useState: function() {
            return ei(yt)
        },
        useDebugValue: os,
        useDeferredValue: function(e, a) {
            var t = Ie();
            return Ud(t, be.memoizedState, e, a)
        },
        useTransition: function() {
            var e = ei(yt)[0]
              , a = Ie().memoizedState;
            return [typeof e == "boolean" ? e : Qo(e), a]
        },
        useSyncExternalStore: fd,
        useId: Ld,
        useHostTransitionStatus: rs,
        useFormState: Ed,
        useActionState: Ed,
        useOptimistic: function(e, a) {
            var t = Ie();
            return vd(t, be, e, a)
        },
        useMemoCache: Wr,
        useCacheRefresh: Gd,
        useEffectEvent: Cd
    }
      , tb = {
        readContext: Ye,
        use: Pn,
        useCallback: Dd,
        useContext: Ye,
        useEffect: ls,
        useImperativeHandle: Od,
        useInsertionEffect: Td,
        useLayoutEffect: jd,
        useMemo: Hd,
        useReducer: es,
        useRef: Rd,
        useState: function() {
            return es(yt)
        },
        useDebugValue: os,
        useDeferredValue: function(e, a) {
            var t = Ie();
            return be === null ? ns(t, e, a) : Ud(t, be.memoizedState, e, a)
        },
        useTransition: function() {
            var e = es(yt)[0]
              , a = Ie().memoizedState;
            return [typeof e == "boolean" ? e : Qo(e), a]
        },
        useSyncExternalStore: fd,
        useId: Ld,
        useHostTransitionStatus: rs,
        useFormState: Nd,
        useActionState: Nd,
        useOptimistic: function(e, a) {
            var t = Ie();
            return be !== null ? vd(t, be, e, a) : (t.baseState = e,
            [e, t.queue.dispatch])
        },
        useMemoCache: Wr,
        useCacheRefresh: Gd,
        useEffectEvent: Cd
    };
    function us(e, a, t, l) {
        a = e.memoizedState,
        t = t(l, a),
        t = t == null ? a : $({}, a, t),
        e.memoizedState = t,
        e.lanes === 0 && (e.updateQueue.baseState = t)
    }
    var cs = {
        enqueueSetState: function(e, a, t) {
            e = e._reactInternals;
            var l = Ea()
              , o = Mt(l);
            o.payload = a,
            t != null && (o.callback = t),
            a = Ot(e, o, l),
            a !== null && (fa(a, e, l),
            Oo(a, e, l))
        },
        enqueueReplaceState: function(e, a, t) {
            e = e._reactInternals;
            var l = Ea()
              , o = Mt(l);
            o.tag = 1,
            o.payload = a,
            t != null && (o.callback = t),
            a = Ot(e, o, l),
            a !== null && (fa(a, e, l),
            Oo(a, e, l))
        },
        enqueueForceUpdate: function(e, a) {
            e = e._reactInternals;
            var t = Ea()
              , l = Mt(t);
            l.tag = 2,
            a != null && (l.callback = a),
            a = Ot(e, l, t),
            a !== null && (fa(a, e, t),
            Oo(a, e, t))
        }
    };
    function Kd(e, a, t, l, o, n, i) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, n, i) : a.prototype && a.prototype.isPureReactComponent ? !Io(t, l) || !Io(o, n) : !0
    }
    function Jd(e, a, t, l) {
        e = a.state,
        typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(t, l),
        typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(t, l),
        a.state !== e && cs.enqueueReplaceState(a, a.state, null)
    }
    function gl(e, a) {
        var t = a;
        if ("ref" in a) {
            t = {};
            for (var l in a)
                l !== "ref" && (t[l] = a[l])
        }
        if (e = e.defaultProps) {
            t === a && (t = $({}, t));
            for (var o in e)
                t[o] === void 0 && (t[o] = e[o])
        }
        return t
    }
    function $d(e) {
        Tn(e)
    }
    function Wd(e) {
        console.error(e)
    }
    function Pd(e) {
        Tn(e)
    }
    function ni(e, a) {
        try {
            var t = e.onUncaughtError;
            t(a.value, {
                componentStack: a.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function em(e, a, t) {
        try {
            var l = e.onCaughtError;
            l(t.value, {
                componentStack: t.stack,
                errorBoundary: a.tag === 1 ? a.stateNode : null
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    function ds(e, a, t) {
        return t = Mt(t),
        t.tag = 3,
        t.payload = {
            element: null
        },
        t.callback = function() {
            ni(e, a)
        }
        ,
        t
    }
    function am(e) {
        return e = Mt(e),
        e.tag = 3,
        e
    }
    function tm(e, a, t, l) {
        var o = t.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var n = l.value;
            e.payload = function() {
                return o(n)
            }
            ,
            e.callback = function() {
                em(a, t, l)
            }
        }
        var i = t.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
            em(a, t, l),
            typeof o != "function" && (Gt === null ? Gt = new Set([this]) : Gt.add(this));
            var r = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: r !== null ? r : ""
            })
        }
        )
    }
    function lb(e, a, t, l, o) {
        if (t.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (a = t.alternate,
            a !== null && rl(a, t, o, !0),
            t = Le.current,
            t !== null) {
                switch (t.tag) {
                case 31:
                case 13:
                case 19:
                    return Pe === null ? Ei() : t.alternate === null && Ee === 0 && (Ee = 3),
                    t.flags &= -257,
                    t.flags |= 65536,
                    t.lanes = o,
                    l === Xn ? t.flags |= 16384 : (a = t.updateQueue,
                    a === null ? t.updateQueue = new Set([l]) : a.add(l),
                    Ks(e, l, o)),
                    !1;
                case 22:
                    return t.flags |= 65536,
                    l === Xn ? t.flags |= 16384 : (a = t.updateQueue,
                    a === null ? (a = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    t.updateQueue = a) : (t = a.retryQueue,
                    t === null ? a.retryQueue = new Set([l]) : t.add(l)),
                    Ks(e, l, o)),
                    !1
                }
                throw Error(m(435, t.tag))
            }
            return Ks(e, l, o),
            Ei(),
            !1
        }
        if (W)
            return a = Le.current,
            a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            a.flags |= 65536,
            a.lanes = o,
            l !== Cr && (e = Error(m(422), {
                cause: l
            }),
            zo(za(e, t)))) : (l !== Cr && (a = Error(m(423), {
                cause: l
            }),
            zo(za(a, t))),
            e = e.current.alternate,
            e.flags |= 65536,
            o &= -o,
            e.lanes |= o,
            l = za(l, t),
            o = ds(e.stateNode, l, o),
            Yr(e, o),
            Ee !== 4 && (Ee = 2)),
            !1;
        var n = Error(m(520), {
            cause: l
        });
        if (n = za(n, t),
        Ko === null ? Ko = [n] : Ko.push(n),
        Ee !== 4 && (Ee = 2),
        a === null)
            return !0;
        l = za(l, t),
        t = a;
        do {
            switch (t.tag) {
            case 3:
                return t.flags |= 65536,
                e = o & -o,
                t.lanes |= e,
                e = ds(t.stateNode, l, e),
                Yr(t, e),
                !1;
            case 1:
                if (a = t.type,
                n = t.stateNode,
                (t.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Gt === null || !Gt.has(n))))
                    return t.flags |= 65536,
                    o &= -o,
                    t.lanes |= o,
                    o = am(o),
                    tm(o, e, t, l),
                    Yr(t, o),
                    !1;
                break;
            case 22:
                if (t.memoizedState !== null)
                    return t.flags |= 65536,
                    !1
            }
            t = t.return
        } while (t !== null);
        return !1
    }
    var ms = Error(m(461))
      , Ce = !1;
    function je(e, a, t, l) {
        a.child = e === null ? id(a, null, t, l) : fl(a, e.child, t, l)
    }
    function lm(e, a, t, l, o) {
        t = t.render;
        var n = a.ref;
        if ("ref" in l) {
            var i = {};
            for (var r in l)
                r !== "ref" && (i[r] = l[r])
        } else
            i = l;
        return sl(a),
        l = Fr(e, a, t, i, n, o),
        r = Kr(),
        e !== null && !Ce ? (Jr(e, a, o),
        vt(e, a, o)) : (W && r && Un(a),
        a.flags |= 1,
        je(e, a, l, o),
        a.child)
    }
    function om(e, a, t, l, o) {
        if (e === null) {
            var n = t.type;
            return typeof n == "function" && !Ir(n) && n.defaultProps === void 0 && t.compare === null ? (a.tag = 15,
            a.type = n,
            nm(e, a, n, l, o)) : (e = Dn(t.type, null, l, a, a.mode, o),
            e.ref = a.ref,
            e.return = a,
            a.child = e)
        }
        if (n = e.child,
        !Ss(e, o)) {
            var i = n.memoizedProps;
            if (t = t.compare,
            t = t !== null ? t : Io,
            t(i, l) && e.ref === a.ref)
                return vt(e, a, o)
        }
        return a.flags |= 1,
        e = ft(n, l),
        e.ref = a.ref,
        e.return = a,
        a.child = e
    }
    function nm(e, a, t, l, o) {
        if (e !== null) {
            var n = e.memoizedProps;
            if (Io(n, l) && e.ref === a.ref)
                if (Ce = !1,
                a.pendingProps = l = n,
                Ss(e, o))
                    (e.flags & 131072) !== 0 && (Ce = !0);
                else
                    return a.lanes = e.lanes,
                    vt(e, a, o)
        }
        return fs(e, a, t, l, o)
    }
    function im(e, a, t, l) {
        var o = l.children
          , n = e !== null ? e.memoizedState : null;
        if (e === null && a.stateNode === null && (a.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((a.flags & 128) !== 0) {
                if (n = n !== null ? n.baseLanes | t : t,
                e !== null) {
                    for (l = a.child = e.child,
                    o = 0; l !== null; )
                        o = o | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = o & ~n
                } else
                    l = 0,
                    a.child = null;
                return rm(e, a, n, t, l)
            }
            if ((t & 536870912) !== 0)
                a.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Gn(a, n !== null ? n.cachePool : null),
                n !== null ? ud(a, n) : Gr(),
                cd(a);
            else
                return l = a.lanes = 536870912,
                rm(e, a, n !== null ? n.baseLanes | t : t, t, l)
        } else
            n !== null ? (Gn(a, n.cachePool),
            ud(a, n),
            Ut(),
            a.memoizedState = null) : (e !== null && Gn(a, null),
            Gr(),
            Ut());
        return je(e, a, o, t),
        a.child
    }
    function Lo(e, a) {
        return e !== null && e.tag === 22 || a.stateNode !== null || (a.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.sibling
    }
    function rm(e, a, t, l, o) {
        var n = Hr();
        return n = n === null ? null : {
            parent: Re._currentValue,
            pool: n
        },
        a.memoizedState = {
            baseLanes: t,
            cachePool: n
        },
        e !== null && Gn(a, null),
        Gr(),
        cd(a),
        e !== null && rl(e, a, l, !0),
        a.childLanes = o,
        null
    }
    function ii(e, a) {
        return a = ri({
            mode: a.mode,
            children: a.children
        }, e.mode),
        a.ref = e.ref,
        e.child = a,
        a.return = e,
        a
    }
    function sm(e, a, t) {
        return fl(a, e.child, null, t),
        e = ii(a, a.pendingProps),
        e.flags |= 2,
        xa(a),
        a.memoizedState = null,
        e
    }
    function ob(e, a, t) {
        var l = a.pendingProps
          , o = (a.flags & 128) !== 0;
        if (a.flags &= -129,
        e === null) {
            if (W) {
                if (l.mode === "hidden")
                    return e = ii(a, l),
                    a.lanes = 536870912,
                    e.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    },
                    Lo(null, e);
                if (Xr(a),
                (e = ve) ? (e = Of(e, ja),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (a.memoizedState = {
                    dehydrated: e,
                    treeContext: Nt !== null ? {
                        id: Ja,
                        overflow: $a
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                t = Xc(e),
                t.return = a,
                a.child = t,
                Oe = a,
                ve = null)) : e = null,
                e === null)
                    throw zt(a);
                return a.lanes = 536870912,
                null
            }
            return ii(a, l)
        }
        var n = e.memoizedState;
        if (n !== null) {
            var i = n.dehydrated;
            if (Xr(a),
            o)
                if (a.flags & 256)
                    a.flags &= -257,
                    a = sm(e, a, t);
                else if (a.memoizedState !== null)
                    a.child = e.child,
                    a.flags |= 128,
                    a = null;
                else
                    throw Error(m(558));
            else if (Ce || rl(e, a, t, !1),
            o = (t & e.childLanes) !== 0,
            Ce || o) {
                if (Dt.current === null) {
                    if (l = he,
                    l !== null && (i = Fu(l, t),
                    i !== 0 && i !== n.retryLane))
                        throw n.retryLane = i,
                        ll(e, i),
                        fa(l, e, i),
                        ms;
                    Ei()
                }
                a = sm(e, a, t)
            } else
                e = n.treeContext,
                ve = Oa(i.nextSibling),
                Oe = a,
                W = !0,
                Rt = null,
                ja = !1,
                e !== null && Fc(a, e),
                a = ii(a, l),
                a.flags |= 134221824;
            return a
        }
        return e = ft(e.child, {
            mode: l.mode,
            children: l.children
        }),
        e.ref = a.ref,
        a.child = e,
        e.return = a,
        e
    }
    function Xl(e, a) {
        var t = a.ref;
        if (t === null)
            e !== null && e.ref !== null && (a.flags |= 4194816);
        else {
            if (typeof t != "function" && typeof t != "object")
                throw Error(m(284));
            (e === null || e.ref !== t) && (a.flags |= 4194816)
        }
    }
    function fs(e, a, t, l, o) {
        return sl(a),
        t = Fr(e, a, t, l, void 0, o),
        l = Kr(),
        e !== null && !Ce ? (Jr(e, a, o),
        vt(e, a, o)) : (W && l && Un(a),
        a.flags |= 1,
        je(e, a, t, o),
        a.child)
    }
    function um(e, a, t, l, o, n) {
        return sl(a),
        a.updateQueue = null,
        t = md(a, l, t, o),
        dd(e),
        l = Kr(),
        e !== null && !Ce ? (Jr(e, a, n),
        vt(e, a, n)) : (W && l && Un(a),
        a.flags |= 1,
        je(e, a, t, n),
        a.child)
    }
    function cm(e, a, t, l, o) {
        if (sl(a),
        a.stateNode === null) {
            var n = Ol
              , i = t.contextType;
            typeof i == "object" && i !== null && (n = Ye(i)),
            n = new t(l,n),
            a.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = cs,
            a.stateNode = n,
            n._reactInternals = a,
            n = a.stateNode,
            n.props = l,
            n.state = a.memoizedState,
            n.refs = {},
            Br(a),
            i = t.contextType,
            n.context = typeof i == "object" && i !== null ? Ye(i) : Ol,
            n.state = a.memoizedState,
            i = t.getDerivedStateFromProps,
            typeof i == "function" && (us(a, t, i, l),
            n.state = a.memoizedState),
            typeof t.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state,
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            i !== n.state && cs.enqueueReplaceState(n, n.state, null),
            Ho(a, l, n, o),
            Do(),
            n.state = a.memoizedState),
            typeof n.componentDidMount == "function" && (a.flags |= 4194308),
            l = !0
        } else if (e === null) {
            n = a.stateNode;
            var r = a.memoizedProps
              , s = gl(t, r);
            n.props = s;
            var g = n.context
              , S = t.contextType;
            i = Ol,
            typeof S == "object" && S !== null && (i = Ye(S));
            var q = t.getDerivedStateFromProps;
            S = typeof q == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            r = a.pendingProps !== r,
            S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (r || g !== i) && Jd(a, n, l, i),
            jt = !1;
            var f = a.memoizedState;
            n.state = f,
            Ho(a, l, n, o),
            Do(),
            g = a.memoizedState,
            r || f !== g || jt ? (typeof q == "function" && (us(a, t, q, l),
            g = a.memoizedState),
            (s = jt || Kd(a, t, s, l, f, g, i)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (a.flags |= 4194308),
            a.memoizedProps = l,
            a.memoizedState = g),
            n.props = l,
            n.state = g,
            n.context = i,
            l = s) : (typeof n.componentDidMount == "function" && (a.flags |= 4194308),
            l = !1)
        } else {
            n = a.stateNode,
            Qr(e, a),
            i = a.memoizedProps,
            S = gl(t, i),
            n.props = S,
            q = a.pendingProps,
            f = n.context,
            g = t.contextType,
            s = Ol,
            typeof g == "object" && g !== null && (s = Ye(g)),
            r = t.getDerivedStateFromProps,
            (g = typeof r == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== q || f !== s) && Jd(a, n, l, s),
            jt = !1,
            f = a.memoizedState,
            n.state = f,
            Ho(a, l, n, o),
            Do();
            var y = a.memoizedState;
            i !== q || f !== y || jt || e !== null && e.dependencies !== null && Yn(e.dependencies) ? (typeof r == "function" && (us(a, t, r, l),
            y = a.memoizedState),
            (S = jt || Kd(a, t, S, l, f, y, s) || e !== null && e.dependencies !== null && Yn(e.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(l, y, s),
            typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(l, y, s)),
            typeof n.componentDidUpdate == "function" && (a.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === e.memoizedProps && f === e.memoizedState || (a.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && f === e.memoizedState || (a.flags |= 1024),
            a.memoizedProps = l,
            a.memoizedState = y),
            n.props = l,
            n.state = y,
            n.context = s,
            l = S) : (typeof n.componentDidUpdate != "function" || i === e.memoizedProps && f === e.memoizedState || (a.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && f === e.memoizedState || (a.flags |= 1024),
            l = !1)
        }
        return n = l,
        Xl(e, a),
        l = (a.flags & 128) !== 0,
        n || l ? (n = a.stateNode,
        t = l && typeof t.getDerivedStateFromError != "function" ? null : n.render(),
        a.flags |= 1,
        e !== null && l ? (a.child = fl(a, e.child, null, o),
        a.child = fl(a, null, t, o)) : je(e, a, t, o),
        a.memoizedState = n.state,
        e = a.child) : e = vt(e, a, o),
        e
    }
    function dm(e, a, t, l) {
        return nl(),
        a.flags |= 256,
        je(e, a, t, l),
        a.child
    }
    var ps = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function gs(e) {
        return {
            baseLanes: e,
            cachePool: ed()
        }
    }
    function bs(e, a, t) {
        return e = e !== null ? e.childLanes & ~t : 0,
        a && (e |= _a),
        e
    }
    function mm(e, a, t) {
        var l = a.pendingProps, o = !1, n = (a.flags & 128) !== 0, i;
        if ((i = n) || (i = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
        i && (o = !0,
        a.flags &= -129),
        i = (a.flags & 32) !== 0,
        a.flags &= -33,
        e === null) {
            if (W) {
                if (o ? Ht(a) : Ut(),
                (e = ve) ? (e = Of(e, ja),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (a.memoizedState = {
                    dehydrated: e,
                    treeContext: Nt !== null ? {
                        id: Ja,
                        overflow: $a
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                t = Xc(e),
                t.return = a,
                a.child = t,
                Oe = a,
                ve = null)) : e = null,
                e === null)
                    throw zt(a);
                return gu(e) ? a.lanes = 32 : a.lanes = 536870912,
                null
            }
            return n = l.children,
            l = l.fallback,
            o ? (Ut(),
            o = a.mode,
            n = ri({
                mode: "hidden",
                children: n
            }, o),
            l = ol(l, o, t, null),
            n.return = a,
            l.return = a,
            n.sibling = l,
            a.child = n,
            l = a.child,
            l.memoizedState = gs(t),
            l.childLanes = bs(e, i, t),
            a.memoizedState = ps,
            Lo(null, l)) : (Ht(a),
            hs(a, n))
        }
        var r = e.memoizedState;
        if (r !== null) {
            var s = r.dehydrated;
            if (s !== null)
                return nb(e, a, n, i, l, s, r, t)
        }
        return o ? (Ut(),
        o = l.fallback,
        n = a.mode,
        r = e.child,
        s = r.sibling,
        l = ft(r, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = r.subtreeFlags & 1206910976,
        s !== null ? o = ft(s, o) : (o = ol(o, n, t, null),
        o.flags |= 2),
        o.return = a,
        l.return = a,
        l.sibling = o,
        a.child = l,
        Lo(null, l),
        l = a.child,
        o = e.child.memoizedState,
        o === null ? o = gs(t) : (n = o.cachePool,
        n !== null ? (r = Re._currentValue,
        n = n.parent !== r ? {
            parent: r,
            pool: r
        } : n) : n = ed(),
        o = {
            baseLanes: o.baseLanes | t,
            cachePool: n
        }),
        l.memoizedState = o,
        l.childLanes = bs(e, i, t),
        a.memoizedState = ps,
        Lo(e.child, l)) : (Ht(a),
        t = e.child,
        e = t.sibling,
        t = ft(t, {
            mode: "visible",
            children: l.children
        }),
        t.return = a,
        t.sibling = null,
        e !== null && (i = a.deletions,
        i === null ? (a.deletions = [e],
        a.flags |= 16) : i.push(e)),
        a.child = t,
        a.memoizedState = null,
        t)
    }
    function hs(e, a) {
        return a = ri({
            mode: "visible",
            children: a
        }, e.mode),
        a.return = e,
        e.child = a
    }
    function ri(e, a) {
        return e = ua(22, e, null, a),
        e.lanes = 0,
        e
    }
    function si(e, a, t) {
        return fl(a, e.child, null, t),
        e = hs(a, a.pendingProps.children),
        e.flags |= 2,
        a.memoizedState = null,
        e
    }
    function nb(e, a, t, l, o, n, i, r) {
        if (t)
            return a.flags & 256 ? (Ht(a),
            a.flags &= -257,
            si(e, a, r)) : a.memoizedState !== null ? (Ut(),
            a.child = e.child,
            a.flags |= 128,
            null) : (Ut(),
            n = o.fallback,
            i = a.mode,
            o = ri({
                mode: "visible",
                children: o.children
            }, i),
            n = ol(n, i, r, null),
            n.flags |= 2,
            o.return = a,
            n.return = a,
            o.sibling = n,
            a.child = o,
            fl(a, e.child, null, r),
            o = a.child,
            o.memoizedState = gs(r),
            o.childLanes = bs(e, l, r),
            a.memoizedState = ps,
            Lo(null, o));
        if (Ht(a),
        gu(n)) {
            if (l = n.nextSibling && n.nextSibling.dataset,
            l)
                var s = l.dgst;
            return l = s,
            l !== "" && (o = Error(m(419)),
            o.stack = "",
            o.digest = l,
            zo({
                value: o,
                source: null,
                stack: null
            })),
            si(e, a, r)
        }
        if (Ce || rl(e, a, r, !1),
        l = (r & e.childLanes) !== 0,
        Ce || l) {
            if (Dt.current !== null)
                return si(e, a, r);
            if (l = he,
            l !== null && (o = Fu(l, r),
            o !== 0 && o !== i.retryLane))
                throw i.retryLane = o,
                ll(e, o),
                fa(l, e, o),
                ms;
            return pu(n) || Ei(),
            si(e, a, r)
        }
        return pu(n) ? (a.flags |= 192,
        a.child = e.child,
        null) : (e = i.treeContext,
        ve = Oa(n.nextSibling),
        Oe = a,
        W = !0,
        Rt = null,
        ja = !1,
        e !== null && Fc(a, e),
        a = hs(a, o.children),
        a.flags |= 134221824,
        a)
    }
    function fm(e, a, t) {
        e.lanes |= a;
        var l = e.alternate;
        l !== null && (l.lanes |= a),
        Qn(e.return, a, t)
    }
    function pm(e) {
        for (var a = null; e !== null; ) {
            var t = e.alternate;
            t !== null && Kn(t) === null && (a = e),
            e = e.sibling
        }
        return a
    }
    function ui(e, a, t, l, o, n) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
            isBackwards: a,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: t,
            tailMode: o,
            treeForkCount: n
        } : (i.isBackwards = a,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = l,
        i.tail = t,
        i.tailMode = o,
        i.treeForkCount = n)
    }
    function ys(e) {
        var a = e.child;
        for (e.child = null; a !== null; ) {
            var t = a.sibling;
            a.sibling = e.child,
            e.child = a,
            a = t
        }
    }
    function vs(e, a, t) {
        var l = a.pendingProps
          , o = l.revealOrder
          , n = l.tail;
        l = l.children;
        var i = Ge.current;
        if (a.flags & 128)
            return Uo(a, i),
            null;
        var r = (i & 2) !== 0;
        if (r ? (i = i & 1 | 2,
        a.flags |= 128) : i &= 1,
        Uo(a, i),
        o === "backwards" && e !== null ? (ys(e),
        je(e, a, l, t),
        ys(e)) : je(e, a, l, t),
        l = W ? Ro : 0,
        !r && e !== null && (e.flags & 128) !== 0)
            e: for (e = a.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && fm(e, t, a);
                else if (e.tag === 19)
                    fm(e, t, a);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === a)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === a)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (o) {
        case "backwards":
            t = pm(a.child),
            t === null ? (o = a.child,
            a.child = null) : (o = t.sibling,
            t.sibling = null,
            ys(a)),
            ui(a, !0, o, null, n, l);
            break;
        case "unstable_legacy-backwards":
            for (t = null,
            o = a.child,
            a.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Kn(e) === null) {
                    a.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = t,
                t = o,
                o = e
            }
            ui(a, !0, t, null, n, l);
            break;
        case "together":
            ui(a, !1, null, null, void 0, l);
            break;
        case "independent":
            a.memoizedState = null;
            break;
        default:
            t = pm(a.child),
            t === null ? (o = a.child,
            a.child = null) : (o = t.sibling,
            t.sibling = null),
            ui(a, !1, o, t, n, l)
        }
        return a.child
    }
    function gm(e, a, t) {
        var l = a.pendingProps;
        return Ct(a, a.type, l.value),
        je(e, a, l.children, t),
        a.child
    }
    function vt(e, a, t) {
        if (e !== null && (a.dependencies = e.dependencies),
        Lt |= a.lanes,
        (t & a.childLanes) === 0)
            if (e !== null) {
                if (rl(e, a, t, !1),
                (t & a.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && a.child !== e.child)
            throw Error(m(153));
        if (a.child !== null) {
            for (e = a.child,
            t = ft(e, e.pendingProps),
            a.child = t,
            t.return = a; e.sibling !== null; )
                e = e.sibling,
                t = t.sibling = ft(e, e.pendingProps),
                t.return = a;
            t.sibling = null
        }
        return a.child
    }
    function Ss(e, a) {
        return (e.lanes & a) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Yn(e)))
    }
    function ib(e, a, t) {
        switch (a.tag) {
        case 3:
            pn(a, a.stateNode.containerInfo),
            Ct(a, Re, e.memoizedState.cache),
            nl();
            break;
        case 27:
        case 5:
            Vi(a);
            break;
        case 4:
            pn(a, a.stateNode.containerInfo);
            break;
        case 10:
            Ct(a, a.type, a.memoizedProps.value);
            break;
        case 31:
            if (a.memoizedState !== null)
                return a.flags |= 128,
                Xr(a),
                null;
            break;
        case 13:
            var l = a.memoizedState;
            if (l !== null) {
                if (l.dehydrated !== null)
                    return Ht(a),
                    a.flags |= 128,
                    null;
                l = rl(e, a, t, !1);
                var o = a.child.childLanes;
                return l || (t & o) !== 0 ? mm(e, a, t) : (Ht(a),
                e = vt(e, a, t),
                e !== null ? e.sibling : null)
            }
            Ht(a);
            break;
        case 19:
            if (a.flags & 128)
                return vs(e, a, t);
            if (o = (e.flags & 128) !== 0,
            l = (t & a.childLanes) !== 0,
            l || (rl(e, a, t, !1),
            l = (t & a.childLanes) !== 0),
            o) {
                if (l)
                    return vs(e, a, t);
                a.flags |= 128
            }
            if (o = a.memoizedState,
            o !== null && (o.rendering = null,
            o.tail = null,
            o.lastEffect = null),
            Uo(a, Ge.current),
            l)
                break;
            return null;
        case 22:
            return a.lanes = 0,
            im(e, a, t, a.pendingProps);
        case 24:
            Ct(a, Re, e.memoizedState.cache)
        }
        return vt(e, a, t)
    }
    function bm(e, a, t) {
        if (e !== null)
            if (e.memoizedProps !== a.pendingProps)
                Ce = !0;
            else {
                if (!Ss(e, t) && (a.flags & 128) === 0)
                    return Ce = !1,
                    ib(e, a, t);
                Ce = (e.flags & 131072) !== 0
            }
        else
            Ce = !1,
            W && (a.flags & 1048576) !== 0 && Vc(a, Ro, a.index);
        switch (a.lanes = 0,
        a.tag) {
        case 16:
            e: {
                var l = a.pendingProps;
                if (e = dl(a.elementType),
                a.type = e,
                typeof e == "function")
                    Ir(e) ? (l = gl(e, l),
                    a.tag = 1,
                    a = cm(null, a, e, l, t)) : (a.tag = 0,
                    a = fs(null, a, e, l, t));
                else {
                    if (e != null) {
                        var o = e.$$typeof;
                        if (o === C) {
                            a.tag = 11,
                            a = lm(null, a, e, l, t);
                            break e
                        } else if (o === me) {
                            a.tag = 14,
                            a = om(null, a, e, l, t);
                            break e
                        } else if (o === Ae) {
                            a.tag = 10,
                            a.type = e,
                            a = gm(null, a, t);
                            break e
                        }
                    }
                    throw a = X(e) || e,
                    Error(m(306, a, ""))
                }
            }
            return a;
        case 0:
            return fs(e, a, a.type, a.pendingProps, t);
        case 1:
            return l = a.type,
            o = gl(l, a.pendingProps),
            cm(e, a, l, o, t);
        case 3:
            e: {
                if (pn(a, a.stateNode.containerInfo),
                e === null)
                    throw Error(m(387));
                l = a.pendingProps;
                var n = a.memoizedState;
                o = n.element,
                Qr(e, a),
                Ho(a, l, null, t);
                var i = a.memoizedState;
                if (l = i.cache,
                Ct(a, Re, l),
                l !== n.cache && Mr(a, [Re], t, !0),
                Do(),
                l = i.element,
                n.isDehydrated)
                    if (n = {
                        element: l,
                        isDehydrated: !1,
                        cache: i.cache
                    },
                    a.updateQueue.baseState = n,
                    a.memoizedState = n,
                    a.flags & 256) {
                        a = dm(e, a, l, t);
                        break e
                    } else if (l !== o) {
                        o = za(Error(m(424)), a),
                        zo(o),
                        a = dm(e, a, l, t);
                        break e
                    } else {
                        switch (e = a.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (ve = Oa(e.firstChild),
                        Oe = a,
                        W = !0,
                        Rt = null,
                        ja = !0,
                        t = id(a, null, l, t),
                        a.child = t; t; )
                            t.flags = t.flags & -3 | 134221824,
                            t = t.sibling
                    }
                else {
                    if (nl(),
                    l === o) {
                        a = vt(e, a, t);
                        break e
                    }
                    je(e, a, l, t)
                }
                a = a.child
            }
            return a;
        case 26:
            return Xl(e, a),
            e === null ? (t = Lf(a.type, null, a.pendingProps, null)) ? a.memoizedState = t : W || (a.stateNode = wf(a.type, a.pendingProps, qt.current, a)) : a.memoizedState = Lf(a.type, e.memoizedProps, a.pendingProps, e.memoizedState),
            null;
        case 27:
            return Vi(a),
            e === null && W && (l = a.stateNode = Uf(a.type, a.pendingProps, qt.current),
            Oe = a,
            ja = !0,
            o = ve,
            kt(a.type) ? (bu = o,
            ve = Oa(l.firstChild)) : ve = o),
            je(e, a, a.pendingProps.children, t),
            Xl(e, a),
            e === null && (a.flags |= 4194304),
            a.child;
        case 5:
            return e === null && W && ((o = l = ve) && (l = eh(l, a.type, a.pendingProps, ja),
            l !== null ? (a.stateNode = l,
            Oe = a,
            ve = Oa(l.firstChild),
            ja = !1,
            o = !0) : o = !1),
            o || zt(a)),
            Vi(a),
            o = a.type,
            n = a.pendingProps,
            i = e !== null ? e.memoizedProps : null,
            l = n.children,
            ru(o, n) ? l = null : i !== null && ru(o, i) && (a.flags |= 32),
            a.memoizedState !== null && (o = Fr(e, a, Kg, null, null, t),
            uo._currentValue = o),
            Xl(e, a),
            je(e, a, l, t),
            a.child;
        case 6:
            return e === null && W && ((e = t = ve) && (t = ah(t, a.pendingProps, ja),
            t !== null ? (a.stateNode = t,
            Oe = a,
            ve = null,
            e = !0) : e = !1),
            e || zt(a)),
            null;
        case 13:
            return mm(e, a, t);
        case 4:
            return pn(a, a.stateNode.containerInfo),
            l = a.pendingProps,
            e === null ? a.child = fl(a, null, l, t) : je(e, a, l, t),
            a.child;
        case 11:
            return lm(e, a, a.type, a.pendingProps, t);
        case 7:
            return l = a.pendingProps,
            Xl(e, a),
            je(e, a, l, t),
            a.child;
        case 8:
            return je(e, a, a.pendingProps.children, t),
            a.child;
        case 12:
            return je(e, a, a.pendingProps.children, t),
            a.child;
        case 10:
            return gm(e, a, t);
        case 9:
            return o = a.type._context,
            l = a.pendingProps.children,
            sl(a),
            o = Ye(o),
            l = l(o),
            a.flags |= 1,
            je(e, a, l, t),
            a.child;
        case 14:
            return om(e, a, a.type, a.pendingProps, t);
        case 15:
            return nm(e, a, a.type, a.pendingProps, t);
        case 19:
            return vs(e, a, t);
        case 31:
            return ob(e, a, t);
        case 22:
            return im(e, a, t, a.pendingProps);
        case 24:
            return sl(a),
            l = Ye(Re),
            e === null ? (o = Hr(),
            o === null && (o = he,
            n = Or(),
            o.pooledCache = n,
            n.refCount++,
            n !== null && (o.pooledCacheLanes |= t),
            o = n),
            a.memoizedState = {
                parent: l,
                cache: o
            },
            Br(a),
            Ct(a, Re, o)) : ((e.lanes & t) !== 0 && (Qr(e, a),
            Ho(a, null, null, t),
            Do()),
            o = e.memoizedState,
            n = a.memoizedState,
            o.parent !== l ? (o = {
                parent: l,
                cache: l
            },
            a.memoizedState = o,
            a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = o),
            Ct(a, Re, l)) : (l = n.cache,
            Ct(a, Re, l),
            l !== o.cache && Mr(a, [Re], t, !0))),
            je(e, a, a.pendingProps.children, t),
            a.child;
        case 30:
            return a.stateNode === null && (a.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null
            }),
            l = a.pendingProps,
            l.name != null && l.name !== "auto" ? a.flags |= e === null ? 18882560 : 18874368 : W && Un(a),
            e !== null && e.memoizedProps.name !== l.name ? a.flags |= 4194816 : Xl(e, a),
            je(e, a, l.children, t),
            a.child;
        case 29:
            throw a.pendingProps
        }
        throw Error(m(156, a.tag))
    }
    function St(e) {
        e.flags |= 4
    }
    function ws(e, a, t, l, o) {
        var n;
        if ((n = (e.mode & 32) !== 0) && (n = t === null ? kf(a, l) : kf(a, l) && (l.src !== t.src || l.srcSet !== t.srcSet)),
        n) {
            if (e.flags |= 16777216,
            (o & 335544128) === o)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if ($m())
                    e.flags |= 8192;
                else
                    throw ml = Xn,
                    Ur
        } else
            e.flags &= -16777217
    }
    function hm(e, a) {
        if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Vf(a))
            if ($m())
                e.flags |= 8192;
            else
                throw ml = Xn,
                Ur
    }
    function ci(e, a) {
        a !== null && (e.flags |= 4),
        e.flags & 16384 && (a = e.tag !== 22 ? Xu() : 536870912,
        e.lanes |= a,
        Jl |= a)
    }
    function Go(e, a) {
        if (!W)
            switch (e.tailMode) {
            case "visible":
                break;
            case "collapsed":
                for (var t = e.tail, l = null; t !== null; )
                    t.alternate !== null && (l = t),
                    t = t.sibling;
                l === null ? a || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
                break;
            default:
                for (a = e.tail,
                t = null; a !== null; )
                    a.alternate !== null && (t = a),
                    a = a.sibling;
                t === null ? e.tail = null : t.sibling = null
            }
    }
    function Se(e) {
        var a = e.alternate !== null && e.alternate.child === e.child
          , t = 0
          , l = 0;
        if (a)
            for (var o = e.child; o !== null; )
                t |= o.lanes | o.childLanes,
                l |= o.subtreeFlags & 1206910976,
                l |= o.flags & 1206910976,
                o.return = e,
                o = o.sibling;
        else
            for (o = e.child; o !== null; )
                t |= o.lanes | o.childLanes,
                l |= o.subtreeFlags,
                l |= o.flags,
                o.return = e,
                o = o.sibling;
        return e.subtreeFlags |= l,
        e.childLanes = t,
        a
    }
    function rb(e, a, t) {
        var l = a.pendingProps;
        switch (zr(a),
        a.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Se(a),
            null;
        case 1:
            return Se(a),
            null;
        case 3:
            return t = a.stateNode,
            l = null,
            e !== null && (l = e.memoizedState.cache),
            a.memoizedState.cache !== l && (a.flags |= 2048),
            bt(Re),
            xl(),
            t.pendingContext && (t.context = t.pendingContext,
            t.pendingContext = null),
            (e === null || e.child === null) && (Ul(a) ? St(a) : e === null || e.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024,
            Tr())),
            Se(a),
            null;
        case 26:
            var o = a.type
              , n = a.memoizedState;
            return e === null ? (St(a),
            n !== null ? (Se(a),
            hm(a, n)) : (Se(a),
            ws(a, o, null, l, t))) : n ? n !== e.memoizedState ? (St(a),
            Se(a),
            hm(a, n)) : (Se(a),
            a.flags &= -16777217) : (e = e.memoizedProps,
            e !== l && St(a),
            Se(a),
            ws(a, o, e, l, t)),
            null;
        case 27:
            if (gn(a),
            t = qt.current,
            o = a.type,
            e !== null && a.stateNode != null)
                e.memoizedProps !== l && St(a);
            else {
                if (!l) {
                    if (a.stateNode === null)
                        throw Error(m(166));
                    return Se(a),
                    a.subtreeFlags &= -33554433,
                    null
                }
                e = Fa.current,
                Ul(a) ? Kc(a) : (e = Uf(o, l, t),
                a.stateNode = e,
                St(a))
            }
            return Se(a),
            a.subtreeFlags &= -33554433,
            null;
        case 5:
            if (gn(a),
            o = a.type,
            e !== null && a.stateNode != null)
                e.memoizedProps !== l && St(a);
            else {
                if (!l) {
                    if (a.stateNode === null)
                        throw Error(m(166));
                    return Se(a),
                    a.subtreeFlags &= -33554433,
                    null
                }
                if (n = Fa.current,
                Ul(a))
                    Kc(a);
                else {
                    var i = en(qt.current);
                    switch (n) {
                    case 1:
                        n = i.createElementNS("http://www.w3.org/2000/svg", o);
                        break;
                    case 2:
                        n = i.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                        break;
                    default:
                        switch (o) {
                        case "svg":
                            n = i.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case "math":
                            n = i.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        case "script":
                            n = i.createElement("div"),
                            n.innerHTML = "<script><\/script>",
                            n = n.removeChild(n.firstChild);
                            break;
                        case "select":
                            n = typeof l.is == "string" ? i.createElement("select", {
                                is: l.is
                            }) : i.createElement("select"),
                            l.multiple ? n.multiple = !0 : l.size && (n.size = l.size);
                            break;
                        default:
                            n = typeof l.is == "string" ? i.createElement(o, {
                                is: l.is
                            }) : i.createElement(o)
                        }
                    }
                    n[Qe] = a,
                    n[sa] = l;
                    e: for (i = a.child; i !== null; ) {
                        if (i.tag === 5 || i.tag === 6)
                            n.appendChild(i.stateNode);
                        else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                            i.child.return = i,
                            i = i.child;
                            continue
                        }
                        if (i === a)
                            break e;
                        for (; i.sibling === null; ) {
                            if (i.return === null || i.return === a)
                                break e;
                            i = i.return
                        }
                        i.sibling.return = i.return,
                        i = i.sibling
                    }
                    a.stateNode = n;
                    e: switch (Xe(n, o, l),
                    o) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break e;
                    case "img":
                        l = !0;
                        break e;
                    default:
                        l = !1
                    }
                    l && St(a)
                }
            }
            return Se(a),
            a.subtreeFlags &= -33554433,
            ws(a, a.type, e === null ? null : e.memoizedProps, a.pendingProps, t),
            null;
        case 6:
            if (e && a.stateNode != null)
                e.memoizedProps !== l && St(a);
            else {
                if (typeof l != "string" && a.stateNode === null)
                    throw Error(m(166));
                if (e = qt.current,
                Ul(a)) {
                    if (e = a.stateNode,
                    t = a.memoizedProps,
                    l = null,
                    o = Oe,
                    o !== null)
                        switch (o.tag) {
                        case 27:
                        case 5:
                            l = o.memoizedProps
                        }
                    e[Qe] = a,
                    e = !!(e.nodeValue === t || l !== null && l.suppressHydrationWarning === !0 || hf(e.nodeValue, t)),
                    e || zt(a, !0)
                } else
                    e = en(e).createTextNode(l),
                    e[Qe] = a,
                    a.stateNode = e
            }
            return Se(a),
            null;
        case 31:
            if (t = a.memoizedState,
            e === null || e.memoizedState !== null) {
                if (l = Ul(a),
                t !== null) {
                    if (e === null) {
                        if (!l)
                            throw Error(m(318));
                        if (e = a.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(m(557));
                        e[Qe] = a
                    } else
                        nl(),
                        (a.flags & 128) === 0 && (a.memoizedState = null),
                        a.flags |= 4;
                    Se(a),
                    e = !1
                } else
                    t = Tr(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t),
                    e = !0;
                if (!e)
                    return a.flags & 256 ? (xa(a),
                    a) : (xa(a),
                    null);
                if ((a.flags & 128) !== 0)
                    throw Error(m(558))
            }
            return Se(a),
            null;
        case 13:
            if (l = a.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (o = Ul(a),
                l !== null && l.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(m(318));
                        if (o = a.memoizedState,
                        o = o !== null ? o.dehydrated : null,
                        !o)
                            throw Error(m(317));
                        o[Qe] = a
                    } else
                        nl(),
                        (a.flags & 128) === 0 && (a.memoizedState = null),
                        a.flags |= 4;
                    Se(a),
                    o = !1
                } else
                    o = Tr(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o),
                    o = !0;
                if (!o)
                    return a.flags & 256 ? (xa(a),
                    a) : (xa(a),
                    null)
            }
            return xa(a),
            (a.flags & 128) !== 0 ? (a.lanes = t,
            a) : (t = l !== null,
            e = e !== null && e.memoizedState !== null,
            t && (l = a.child,
            o = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool),
            n = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool),
            n !== o && (l.flags |= 2048)),
            t !== e && t && (a.child.flags |= 8192),
            ci(a, a.updateQueue),
            Se(a),
            null);
        case 4:
            return xl(),
            e === null && tu(a.stateNode.containerInfo),
            a.flags |= 67108864,
            Se(a),
            null;
        case 10:
            return bt(a.type),
            Se(a),
            null;
        case 19:
            if (kr(a),
            l = a.memoizedState,
            l === null)
                return Se(a),
                null;
            if (o = (a.flags & 128) !== 0,
            n = l.rendering,
            n === null)
                if (o)
                    Go(l, !1);
                else {
                    if (Ee !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = a.child; e !== null; ) {
                            if (n = Kn(e),
                            n !== null) {
                                for (a.flags |= 128,
                                Go(l, !1),
                                e = n.updateQueue,
                                a.updateQueue = e,
                                ci(a, e),
                                a.subtreeFlags = 0,
                                e = t,
                                t = a.child; t !== null; )
                                    Zc(t, e),
                                    t = t.sibling;
                                return Uo(a, Ge.current & 1 | 2),
                                W && pt(a, l.treeForkCount),
                                a.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && ha() > xi && (a.flags |= 128,
                    o = !0,
                    Go(l, !1),
                    a.lanes = 4194304)
                }
            else {
                if (!o)
                    if (e = Kn(n),
                    e !== null) {
                        if (a.flags |= 128,
                        o = !0,
                        e = e.updateQueue,
                        a.updateQueue = e,
                        ci(a, e),
                        Go(l, !0),
                        l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !n.alternate && !W)
                            return Se(a),
                            null
                    } else
                        2 * ha() - l.renderingStartTime > xi && t !== 536870912 && (a.flags |= 128,
                        o = !0,
                        Go(l, !1),
                        a.lanes = 4194304);
                l.isBackwards ? (n.sibling = a.child,
                a.child = n) : (e = l.last,
                e !== null ? e.sibling = n : a.child = n,
                l.last = n)
            }
            if (l.tail !== null) {
                e = l.tail;
                e: {
                    for (t = e; t !== null; ) {
                        if (t.alternate !== null) {
                            t = !1;
                            break e
                        }
                        t = t.sibling
                    }
                    t = !0
                }
                return l.rendering = e,
                l.tail = e.sibling,
                l.renderingStartTime = ha(),
                e.sibling = null,
                n = Ge.current,
                n = o ? n & 1 | 2 : n & 1,
                l.tailMode === "visible" || l.tailMode === "collapsed" || !t || W ? Uo(a, n) : (t = n,
                ye(Le, a),
                ye(Ge, t),
                Pe === null && (Pe = a)),
                W && pt(a, l.treeForkCount),
                e
            }
            return Se(a),
            null;
        case 22:
        case 23:
            return xa(a),
            Zr(),
            l = a.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== l && (a.flags |= 8192) : l && (a.flags |= 8192),
            l ? (t & 536870912) !== 0 && (a.flags & 128) === 0 && (Se(a),
            a.subtreeFlags & 6 && (a.flags |= 8192)) : Se(a),
            t = a.updateQueue,
            t !== null && ci(a, t.retryQueue),
            t = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
            l = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool),
            l !== t && (a.flags |= 2048),
            e !== null && Be(cl),
            null;
        case 24:
            return t = null,
            e !== null && (t = e.memoizedState.cache),
            a.memoizedState.cache !== t && (a.flags |= 2048),
            bt(Re),
            Se(a),
            null;
        case 25:
            return null;
        case 30:
            return a.flags |= 33554432,
            Se(a),
            null
        }
        throw Error(m(156, a.tag))
    }
    function sb(e, a) {
        switch (zr(a),
        a.tag) {
        case 1:
            return e = a.flags,
            e & 65536 ? (a.flags = e & -65537 | 128,
            a) : null;
        case 3:
            return bt(Re),
            xl(),
            e = a.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (a.flags = e & -65537 | 128,
            a) : null;
        case 26:
        case 27:
        case 5:
            return gn(a),
            null;
        case 31:
            if (a.memoizedState !== null) {
                if (xa(a),
                a.alternate === null)
                    throw Error(m(340));
                nl()
            }
            return e = a.flags,
            e & 65536 ? (a.flags = e & -65537 | 128,
            a) : null;
        case 13:
            if (xa(a),
            e = a.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (a.alternate === null)
                    throw Error(m(340));
                nl()
            }
            return e = a.flags,
            e & 65536 ? (a.flags = e & -65537 | 128,
            a) : null;
        case 19:
            return kr(a),
            e = a.flags,
            e & 65536 ? (a.flags = e & -65537 | 128,
            e = a.memoizedState,
            e !== null && (e.rendering = null,
            e.tail = null),
            a.flags |= 4,
            a) : null;
        case 4:
            return xl(),
            null;
        case 10:
            return bt(a.type),
            null;
        case 22:
        case 23:
            return xa(a),
            Zr(),
            e !== null && Be(cl),
            e = a.flags,
            e & 65536 ? (a.flags = e & -65537 | 128,
            a) : null;
        case 24:
            return bt(Re),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function ym(e, a) {
        switch (zr(a),
        a.tag) {
        case 3:
            bt(Re),
            xl();
            break;
        case 26:
        case 27:
        case 5:
            gn(a);
            break;
        case 4:
            xl();
            break;
        case 31:
            a.memoizedState !== null && xa(a);
            break;
        case 13:
            xa(a);
            break;
        case 19:
            kr(a);
            break;
        case 10:
            bt(a.type);
            break;
        case 22:
        case 23:
            xa(a),
            Zr(),
            e !== null && Be(cl);
            break;
        case 24:
            bt(Re)
        }
    }
    function Zo(e, a) {
        try {
            var t = a.updateQueue
              , l = t !== null ? t.lastEffect : null;
            if (l !== null) {
                var o = l.next;
                t = o;
                do {
                    if ((t.tag & e) === e) {
                        l = void 0;
                        var n = t.create
                          , i = t.inst;
                        l = n(),
                        i.destroy = l
                    }
                    t = t.next
                } while (t !== o)
            }
        } catch (r) {
            pe(a, a.return, r)
        }
    }
    function Bt(e, a, t) {
        try {
            var l = a.updateQueue
              , o = l !== null ? l.lastEffect : null;
            if (o !== null) {
                var n = o.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        var i = l.inst
                          , r = i.destroy;
                        if (r !== void 0) {
                            i.destroy = void 0,
                            o = a;
                            var s = t
                              , g = r;
                            try {
                                g()
                            } catch (S) {
                                pe(o, s, S)
                            }
                        }
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (S) {
            pe(a, a.return, S)
        }
    }
    function vm(e) {
        var a = e.updateQueue;
        if (a !== null) {
            var t = e.stateNode;
            try {
                sd(a, t)
            } catch (l) {
                pe(e, e.return, l)
            }
        }
    }
    function Sm(e, a, t) {
        t.props = gl(e.type, e.memoizedProps),
        t.state = e.memoizedState;
        try {
            t.componentWillUnmount()
        } catch (l) {
            pe(e, a, l)
        }
    }
    function Wa(e, a) {
        try {
            var t = e.ref;
            if (t !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var l = e.stateNode;
                    break;
                case 30:
                    var o = e.stateNode
                      , n = dt(e.memoizedProps, o);
                    (o.ref === null || o.ref.name !== n) && (o.ref = Nf(n)),
                    l = o.ref;
                    break;
                case 7:
                    if (e.stateNode === null) {
                        var i = new Ia(e);
                        w(e.child, !1, Wb, i, void 0, void 0),
                        e.stateNode = i
                    }
                    l = e.stateNode;
                    break;
                default:
                    l = e.stateNode
                }
                typeof t == "function" ? e.refCleanup = t(l) : t.current = l
            }
        } catch (r) {
            pe(e, a, r)
        }
    }
    function Ze(e, a) {
        var t = e.ref
          , l = e.refCleanup;
        if (t !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (o) {
                    pe(e, a, o)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof t == "function")
                try {
                    t(null)
                } catch (o) {
                    pe(e, a, o)
                }
            else
                t.current = null
    }
    function di(e, a) {
        if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && a !== null)
            for (var t = 0; t < a.length; t++)
                Mf(e.stateNode, a[t])
    }
    function wm(e) {
        for (var a = e.return; a !== null && (qs(a) && Mf(e.stateNode, a.stateNode),
        !xs(a)); )
            a = a.return
    }
    function Xo(e) {
        for (var a = e.return; a !== null && (qs(a) && Pb(e.stateNode, a.stateNode),
        !xs(a)); )
            a = a.return
    }
    function xs(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 27
    }
    function qs(e) {
        return e && e.tag === 7 && e.stateNode !== null
    }
    function As(e) {
        var a = e.type
          , t = e.memoizedProps
          , l = e.stateNode;
        try {
            e: switch (a) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                t.autoFocus && l.focus();
                break e;
            case "img":
                t.src ? l.src = t.src : t.srcSet && (l.srcset = t.srcSet)
            }
        } catch (o) {
            pe(e, e.return, o)
        }
    }
    function _s(e, a, t) {
        try {
            var l = e.stateNode;
            Mb(l, e.type, t, a),
            l[sa] = a
        } catch (o) {
            pe(e, e.return, o)
        }
    }
    function xm(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && kt(e.type) || e.tag === 4
    }
    function Es(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || xm(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && kt(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Is(e, a, t, l) {
        var o = e.tag;
        if (o === 5 || o === 6)
            o = e.stateNode,
            a ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(o, a) : (a = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.appendChild(o),
            t = t._reactRootContainer,
            t != null || a.onclick !== null || (a.onclick = Ka)),
            di(e, l),
            se = !0;
        else if (o !== 4 && (o === 27 && (di(e, l),
        l = null,
        kt(e.type) && (t = e.stateNode,
        a = null)),
        e = e.child,
        e !== null))
            for (Is(e, a, t, l),
            e = e.sibling; e !== null; )
                Is(e, a, t, l),
                e = e.sibling
    }
    function mi(e, a, t, l) {
        var o = e.tag;
        if (o === 5 || o === 6)
            o = e.stateNode,
            a ? t.insertBefore(o, a) : t.appendChild(o),
            di(e, l),
            se = !0;
        else if (o !== 4 && (o === 27 && (di(e, l),
        l = null,
        kt(e.type) && (t = e.stateNode)),
        e = e.child,
        e !== null))
            for (mi(e, a, t, l),
            e = e.sibling; e !== null; )
                mi(e, a, t, l),
                e = e.sibling
    }
    function qm(e) {
        var a = e.stateNode
          , t = e.memoizedProps;
        try {
            for (var l = e.type, o = a.attributes; o.length; )
                a.removeAttributeNode(o[0]);
            Xe(a, l, t),
            a[Qe] = e,
            a[sa] = t
        } catch (n) {
            pe(e, e.return, n)
        }
    }
    var fi = !1
      , qa = null;
    function Am(e) {
        (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (fi = !0)
    }
    var Pa = null;
    function _m() {
        var e = Pa;
        return Pa = null,
        e
    }
    var ca = 0;
    function kl(e, a, t, l, o) {
        return ca = 0,
        Em(e.child, a, t, l, o)
    }
    function Em(e, a, t, l, o) {
        for (var n = !1; e !== null; ) {
            if (e.tag === 5) {
                var i = e.stateNode;
                if (l !== null) {
                    var r = cu(i);
                    l.push(r),
                    r.view && (n = !0)
                } else
                    n || cu(i).view && (n = !0);
                fi = !0,
                Ef(i, ca === 0 ? a : a + "_" + ca, t),
                ca++
            } else
                (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && o || Em(e.child, a, t, l, o) && (n = !0));
            e = e.sibling
        }
        return n
    }
    function et(e, a) {
        for (; e !== null; )
            e.tag === 5 ? If(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && a || et(e.child, a)),
            e = e.sibling
    }
    function pi(e) {
        if ((e.subtreeFlags & 18874368) !== 0)
            for (e = e.child; e !== null; ) {
                if ((e.tag !== 22 || e.memoizedState === null) && (pi(e),
                e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
                    var a = e.memoizedProps;
                    if (a.name == null || a.name === "auto")
                        throw Error(m(544));
                    var t = a.name;
                    a = mt(a.default, a.share),
                    a !== "none" && (kl(e, t, a, null, !1) || et(e.child, !1))
                }
                e = e.sibling
            }
    }
    function Ns(e, a) {
        if (e.tag === 30) {
            var t = e.stateNode
              , l = e.memoizedProps
              , o = dt(l, t)
              , n = mt(l.default, t.paired ? l.share : l.enter);
            n !== "none" ? kl(e, o, n, null, !1) ? (pi(e),
            t.paired || a || eo(e, l.onEnter)) : et(e.child, !1) : pi(e)
        } else if ((e.subtreeFlags & 33554432) !== 0)
            for (e = e.child; e !== null; )
                Ns(e, a),
                e = e.sibling;
        else
            pi(e)
    }
    function Rs(e) {
        if (qa !== null && qa.size !== 0) {
            var a = qa;
            if ((e.subtreeFlags & 18874368) !== 0)
                for (e = e.child; e !== null; ) {
                    if (e.tag !== 22 || e.memoizedState === null) {
                        if (e.tag === 30 && (e.flags & 18874368) !== 0) {
                            var t = e.memoizedProps
                              , l = t.name;
                            if (l != null && l !== "auto") {
                                var o = a.get(l);
                                if (o !== void 0) {
                                    var n = mt(t.default, t.share);
                                    if (n !== "none" && (kl(e, l, n, null, !1) ? (n = e.stateNode,
                                    o.paired = n,
                                    n.paired = o,
                                    eo(e, t.onShare)) : et(e.child, !1)),
                                    a.delete(l),
                                    a.size === 0)
                                        break
                                }
                            }
                        }
                        Rs(e)
                    }
                    e = e.sibling
                }
        }
    }
    function zs(e) {
        if (e.tag === 30) {
            var a = e.memoizedProps
              , t = dt(a, e.stateNode)
              , l = qa !== null ? qa.get(t) : void 0
              , o = mt(a.default, l !== void 0 ? a.share : a.exit);
            o !== "none" && (kl(e, t, o, null, !1) ? l !== void 0 ? (o = e.stateNode,
            l.paired = o,
            o.paired = l,
            qa.delete(t),
            eo(e, a.onShare)) : eo(e, a.onExit) : et(e.child, !1)),
            qa !== null && Rs(e)
        } else if ((e.subtreeFlags & 33554432) !== 0)
            for (e = e.child; e !== null; )
                zs(e),
                e = e.sibling;
        else
            qa !== null && Rs(e)
    }
    function Im(e) {
        for (e = e.child; e !== null; ) {
            if (e.tag === 30) {
                var a = e.memoizedProps
                  , t = dt(a, e.stateNode);
                a = mt(a.default, a.update),
                e.flags &= -5,
                a !== "none" && kl(e, t, a, e.memoizedState = [], !1)
            } else
                (e.subtreeFlags & 33554432) !== 0 && Im(e);
            e = e.sibling
        }
    }
    function Cs(e) {
        if ((e.subtreeFlags & 18874368) !== 0)
            for (e = e.child; e !== null; ) {
                if (e.tag !== 22 || e.memoizedState === null) {
                    if (e.tag === 30 && (e.flags & 18874368) !== 0) {
                        var a = e.stateNode;
                        a.paired !== null && (a.paired = null,
                        et(e.child, !1))
                    }
                    Cs(e)
                }
                e = e.sibling
            }
    }
    function gi(e) {
        if (e.tag === 30)
            e.stateNode.paired = null,
            et(e.child, !1),
            Cs(e);
        else if ((e.subtreeFlags & 33554432) !== 0)
            for (e = e.child; e !== null; )
                gi(e),
                e = e.sibling;
        else
            Cs(e)
    }
    function Nm(e) {
        for (e = e.child; e !== null; )
            e.tag === 30 ? et(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Nm(e),
            e = e.sibling
    }
    function Ts(e, a, t, l, o, n, i) {
        for (var r = !1; a !== null; ) {
            if (a.tag === 5) {
                var s = a.stateNode;
                if (n !== null && ca < n.length) {
                    var g = n[ca]
                      , S = cu(s);
                    (g.view || S.view) && (r = !0);
                    var q;
                    if (q = (e.flags & 4) === 0)
                        if (S.clip)
                            q = !0;
                        else {
                            q = g.rect;
                            var f = S.rect;
                            q = q.y !== f.y || q.x !== f.x || q.height !== f.height || q.width !== f.width
                        }
                    q && (e.flags |= 4),
                    S.abs ? S = !g.abs : (g = g.rect,
                    S = S.rect,
                    S = g.height !== S.height || g.width !== S.width),
                    S && (e.flags |= 32)
                } else
                    e.flags |= 32;
                (e.flags & 4) !== 0 && Ef(s, ca === 0 ? t : t + "_" + ca, o),
                r && (e.flags & 4) !== 0 || (Pa === null && (Pa = []),
                Pa.push(s, ca === 0 ? l : l + "_" + ca, a.memoizedProps)),
                ca++
            } else
                (a.tag !== 22 || a.memoizedState === null) && (a.tag === 30 && i ? e.flags |= a.flags & 32 : Ts(e, a.child, t, l, o, n, i) && (r = !0));
            a = a.sibling
        }
        return r
    }
    function Rm(e, a) {
        for (e = e.child; e !== null; ) {
            if (e.tag === 30) {
                var t = e.memoizedProps, l = e.stateNode, o = dt(t, l), n = mt(t.default, t.update), i;
                i = e.memoizedState,
                e.memoizedState = null,
                l = e;
                var r = e.child;
                ca = 0,
                o = Ts(l, r, o, o, n, i, !1),
                (e.flags & 4) !== 0 && o && eo(e, t.onUpdate)
            } else
                (e.subtreeFlags & 33554432) !== 0 && Rm(e);
            e = e.sibling
        }
    }
    var De = !1
      , ce = !1
      , at = !1
      , js = !1
      , zm = typeof WeakSet == "function" ? WeakSet : Set
      , He = null
      , tt = !1
      , ko = !1
      , bi = !1
      , Ms = !1;
    function ub(e, a, t) {
        if (e = e.containerInfo,
        nu = co,
        e = Mc(e),
        Sr(e)) {
            if ("selectionStart" in e)
                var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var o = l.getSelection && l.getSelection();
                    if (o && o.rangeCount !== 0) {
                        l = o.anchorNode;
                        var n = o.anchorOffset
                          , i = o.focusNode;
                        o = o.focusOffset;
                        try {
                            l.nodeType,
                            i.nodeType
                        } catch {
                            l = null;
                            break e
                        }
                        var r = 0
                          , s = -1
                          , g = -1
                          , S = 0
                          , q = 0
                          , f = e
                          , y = null;
                        a: for (; ; ) {
                            for (var N; f !== l || n !== 0 && f.nodeType !== 3 || (s = r + n),
                            f !== i || o !== 0 && f.nodeType !== 3 || (g = r + o),
                            f.nodeType === 3 && (r += f.nodeValue.length),
                            (N = f.firstChild) !== null; )
                                y = f,
                                f = N;
                            for (; ; ) {
                                if (f === e)
                                    break a;
                                if (y === l && ++S === n && (s = r),
                                y === i && ++q === o && (g = r),
                                (N = f.nextSibling) !== null)
                                    break;
                                f = y,
                                y = f.parentNode
                            }
                            f = N
                        }
                        l = s === -1 || g === -1 ? null : {
                            start: s,
                            end: g
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (iu = {
            focusedElem: e,
            selectionRange: l
        },
        co = !1,
        t = (t & 335544064) === t,
        He = a,
        a = t ? 9270 : 1024; He !== null; ) {
            if (e = He,
            t && (l = e.deletions,
            l !== null))
                for (n = 0; n < l.length; n++)
                    t && zs(l[n]);
            if (e.alternate === null && (e.flags & 2) !== 0)
                t && Am(e),
                hi(t);
            else {
                if (e.tag === 22) {
                    if (l = e.alternate,
                    e.memoizedState !== null) {
                        l !== null && l.memoizedState === null && t && zs(l),
                        hi(t);
                        continue
                    } else if (l !== null && l.memoizedState !== null) {
                        t && Am(e),
                        hi(t);
                        continue
                    }
                }
                l = e.child,
                (e.subtreeFlags & a) !== 0 && l !== null ? (l.return = e,
                He = l) : (t && Im(e),
                hi(t))
            }
        }
        qa = null
    }
    function hi(e) {
        for (; He !== null; ) {
            var a = He
              , t = e
              , l = a.alternate
              , o = a.flags;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                break;
            case 1:
                if ((o & 1024) !== 0 && l !== null) {
                    t = void 0,
                    o = l.memoizedProps,
                    l = l.memoizedState;
                    var n = a.stateNode;
                    try {
                        var i = gl(a.type, o);
                        t = n.getSnapshotBeforeUpdate(i, l),
                        n.__reactInternalSnapshotBeforeUpdate = t
                    } catch (r) {
                        pe(a, a.return, r)
                    }
                }
                break;
            case 3:
                if ((o & 1024) !== 0) {
                    if (l = a.stateNode.containerInfo,
                    t = l.nodeType,
                    t === 9)
                        fu(l);
                    else if (t === 1)
                        switch (l.nodeName) {
                        case "HEAD":
                        case "HTML":
                        case "BODY":
                            fu(l);
                            break;
                        default:
                            l.textContent = ""
                        }
                }
                break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
                break;
            case 30:
                t && l !== null && (t = dt(l.memoizedProps, l.stateNode),
                o = a.memoizedProps,
                o = mt(o.default, o.update),
                o !== "none" && kl(l, t, o, l.memoizedState = [], !0));
                break;
            default:
                if ((o & 1024) !== 0)
                    throw Error(m(163))
            }
            if (l = a.sibling,
            l !== null) {
                l.return = a.return,
                He = l;
                break
            }
            He = a.return
        }
    }
    function Cm(e, a, t) {
        var l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            lt(e, t),
            l & 4 && Zo(5, t);
            break;
        case 1:
            if (lt(e, t),
            l & 4)
                if (e = t.stateNode,
                a === null)
                    try {
                        e.componentDidMount()
                    } catch (i) {
                        pe(t, t.return, i)
                    }
                else {
                    var o = gl(t.type, a.memoizedProps);
                    a = a.memoizedState;
                    try {
                        e.componentDidUpdate(o, a, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        pe(t, t.return, i)
                    }
                }
            l & 64 && vm(t),
            l & 512 && Wa(t, t.return);
            break;
        case 3:
            if (lt(e, t),
            l & 64 && (e = t.updateQueue,
            e !== null)) {
                if (a = null,
                t.child !== null)
                    switch (t.child.tag) {
                    case 27:
                    case 5:
                        a = t.child.stateNode;
                        break;
                    case 1:
                        a = t.child.stateNode
                    }
                try {
                    sd(e, a)
                } catch (i) {
                    pe(t, t.return, i)
                }
            }
            break;
        case 27:
            a === null && l & 4 && qm(t);
        case 26:
        case 5:
            lt(e, t),
            a === null && l & 4 && As(t),
            l & 512 && Wa(t, t.return);
            break;
        case 12:
            lt(e, t);
            break;
        case 31:
            lt(e, t),
            l & 4 && Om(e, t);
            break;
        case 13:
            lt(e, t),
            l & 4 && Dm(e, t),
            l & 64 && (e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (t = wb.bind(null, t),
            th(e, t))));
            break;
        case 22:
            if (l = t.memoizedState !== null || De,
            !l) {
                var n = a !== null && a.memoizedState !== null || ce;
                a = De,
                o = ce,
                De = l,
                (ce = n) && !o ? (l = 2,
                (t.subtreeFlags & 8772) !== 0 && (l |= 1),
                Ya(e, t, l)) : lt(e, t),
                De = a,
                ce = o
            }
            break;
        case 30:
            lt(e, t),
            l & 512 && Wa(t, t.return);
            break;
        case 7:
            l & 512 && Wa(t, t.return);
        default:
            lt(e, t)
        }
    }
    function Os(e, a) {
        for (e = e.child; e !== null; )
            Tm(e, a),
            e = e.sibling
    }
    function Tm(e, a) {
        switch (e.tag) {
        case 5:
        case 26:
            try {
                var t = e.stateNode;
                if (a) {
                    var l = t.style;
                    typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none"
                } else {
                    var o = e.stateNode
                      , n = e.memoizedProps.style
                      , i = n != null && n.hasOwnProperty("display") ? n.display : null;
                    o.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim()
                }
            } catch (s) {
                pe(e, e.return, s)
            }
            Ds(e, a);
            break;
        case 6:
            try {
                e.stateNode.nodeValue = a ? "" : e.memoizedProps,
                se = !0
            } catch (s) {
                pe(e, e.return, s)
            }
            break;
        case 18:
            try {
                var r = e.stateNode;
                a ? _f(r, !0) : _f(e.stateNode, !1)
            } catch (s) {
                pe(e, e.return, s)
            }
            break;
        case 22:
        case 23:
            e.memoizedState === null && Os(e, a);
            break;
        default:
            Os(e, a)
        }
    }
    function Ds(e, a) {
        if (e.subtreeFlags & 67108864)
            for (e = e.child; e !== null; ) {
                e: {
                    var t = e
                      , l = a;
                    switch (t.tag) {
                    case 4:
                        Tm(t, l);
                        break e;
                    case 22:
                        t.memoizedState === null && Ds(t, l);
                        break e;
                    default:
                        Ds(t, l)
                    }
                }
                e = e.sibling
            }
    }
    function jm(e) {
        var a = e.alternate;
        a !== null && (e.alternate = null,
        jm(a)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (a = e.stateNode,
        a !== null && xn(a)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var we = null
      , da = !1;
    function Ba(e, a, t) {
        for (t = t.child; t !== null; )
            Mm(e, a, t),
            t = t.sibling
    }
    function Mm(e, a, t) {
        if (ya && typeof ya.onCommitFiberUnmount == "function")
            try {
                ya.onCommitFiberUnmount(go, t)
            } catch {}
        switch (t.tag) {
        case 26:
            ce || Ze(t, a),
            Ba(e, a, t),
            t.memoizedState ? t.memoizedState.count-- : t.stateNode && !ce && (t = t.stateNode,
            t.parentNode.removeChild(t));
            break;
        case 27:
            ce || Ze(t, a),
            Xo(t);
            var l = we
              , o = da;
            kt(t.type) && (we = t.stateNode,
            da = !1),
            Ba(e, a, t),
            Bf(t.stateNode, t.type, t.memoizedProps),
            we = l,
            da = o;
            break;
        case 5:
            ce || Ze(t, a),
            Xo(t);
        case 6:
            if (t.tag === 6 && Xo(t),
            l = we,
            o = da,
            we = null,
            Ba(e, a, t),
            we = l,
            da = o,
            we !== null)
                if (da)
                    try {
                        (we.nodeType === 9 ? we.body : we.nodeName === "HTML" ? we.ownerDocument.body : we).removeChild(t.stateNode),
                        se = !0
                    } catch (n) {
                        pe(t, a, n)
                    }
                else
                    try {
                        we.removeChild(t.stateNode),
                        se = !0
                    } catch (n) {
                        pe(t, a, n)
                    }
            break;
        case 18:
            we !== null && (da ? (e = we,
            Af(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.stateNode),
            mo(e)) : Af(we, t.stateNode));
            break;
        case 4:
            l = we,
            o = da,
            we = t.stateNode.containerInfo,
            da = !0,
            Ba(e, a, t),
            we = l,
            da = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Bt(2, t, a),
            ce || Bt(4, t, a),
            Ba(e, a, t);
            break;
        case 1:
            ce || (Ze(t, a),
            l = t.stateNode,
            typeof l.componentWillUnmount == "function" && Sm(t, a, l)),
            Ba(e, a, t);
            break;
        case 21:
            Ba(e, a, t);
            break;
        case 22:
            ce = (l = ce) || t.memoizedState !== null,
            Ba(e, a, t),
            ce = l;
            break;
        case 30:
            Ze(t, a),
            Ba(e, a, t);
            break;
        case 7:
            ce || Ze(t, a),
            Ba(e, a, t);
            break;
        default:
            Ba(e, a, t)
        }
    }
    function Om(e, a) {
        if (a.memoizedState === null && (e = a.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                mo(e)
            } catch (t) {
                pe(a, a.return, t)
            }
        }
    }
    function Dm(e, a) {
        if (a.memoizedState === null && (e = a.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                mo(e)
            } catch (t) {
                pe(a, a.return, t)
            }
    }
    function cb(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var a = e.stateNode;
            return a === null && (a = e.stateNode = new zm),
            a;
        case 22:
            return e = e.stateNode,
            a = e._retryCache,
            a === null && (a = e._retryCache = new zm),
            a;
        default:
            throw Error(m(435, e.tag))
        }
    }
    function yi(e, a) {
        var t = cb(e);
        a.forEach(function(l) {
            if (!t.has(l)) {
                t.add(l);
                var o = xb.bind(null, e, l);
                l.then(o, o)
            }
        })
    }
    function ia(e, a, t) {
        var l = a.deletions;
        if (l !== null)
            for (var o = 0; o < l.length; o++) {
                var n = l[o]
                  , i = e
                  , r = a
                  , s = r;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 27:
                        if (kt(s.type)) {
                            we = s.stateNode,
                            da = !1;
                            break e
                        }
                        break;
                    case 5:
                        we = s.stateNode,
                        da = !1;
                        break e;
                    case 3:
                    case 4:
                        we = s.stateNode.containerInfo,
                        da = !0;
                        break e
                    }
                    s = s.return
                }
                if (we === null)
                    throw Error(m(160));
                Mm(i, r, n),
                we = null,
                da = !1,
                i = n.alternate,
                i !== null && (i.return = null),
                n.return = null
            }
        if (a.subtreeFlags & 13886)
            for (a = a.child; a !== null; )
                Hm(a, e, t),
                a = a.sibling
    }
    var Qa = null;
    function Hm(e, a, t) {
        var l = e.alternate
          , o = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (o & 4 && (l = e.updateQueue,
            l = l !== null ? l.events : null,
            l !== null))
                for (var n = 0; n < l.length; n++) {
                    var i = l[n];
                    i.ref.impl = i.nextImpl
                }
            ia(a, e, t),
            ra(e),
            o & 4 && (Bt(3, e, e.return),
            Zo(3, e),
            Bt(5, e, e.return));
            break;
        case 1:
            ia(a, e, t),
            ra(e),
            o & 512 && (ce || l === null || Ze(l, l.return)),
            o & 64 && De && (e = e.updateQueue,
            e !== null && (a = e.callbacks,
            a !== null && (t = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
            break;
        case 26:
            if (n = Qa,
            ia(a, e, t),
            ra(e),
            o & 512 && (ce || l === null || Ze(l, l.return)),
            o & 4)
                if (o = l !== null ? l.memoizedState : null,
                t = e.memoizedState,
                l === null)
                    if (t === null)
                        if (e.stateNode === null)
                            if (De)
                                e.stateNode = wf(e.type, e.memoizedProps, a.containerInfo, e);
                            else {
                                e: {
                                    a = e.type,
                                    t = e.memoizedProps,
                                    o = n.ownerDocument || n;
                                    a: switch (a) {
                                    case "title":
                                        l = o.getElementsByTagName("title")[0],
                                        (!l || l[yo] || l[Qe] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = o.createElement(a),
                                        o.head.insertBefore(l, o.querySelector("head > title"))),
                                        Xe(l, a, t),
                                        l[Qe] = e,
                                        Me(l),
                                        a = l;
                                        break e;
                                    case "link":
                                        if (n = Xf("link", "href", o).get(a + (t.href || ""))) {
                                            for (i = 0; i < n.length; i++)
                                                if (l = n[i],
                                                l.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && l.getAttribute("rel") === (t.rel == null ? null : t.rel) && l.getAttribute("title") === (t.title == null ? null : t.title) && l.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                                                    n.splice(i, 1);
                                                    break a
                                                }
                                        }
                                        l = o.createElement(a),
                                        Xe(l, a, t),
                                        o.head.appendChild(l);
                                        break;
                                    case "meta":
                                        if (n = Xf("meta", "content", o).get(a + (t.content || ""))) {
                                            for (i = 0; i < n.length; i++)
                                                if (l = n[i],
                                                l.getAttribute("content") === (t.content == null ? null : "" + t.content) && l.getAttribute("name") === (t.name == null ? null : t.name) && l.getAttribute("property") === (t.property == null ? null : t.property) && l.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && l.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                                                    n.splice(i, 1);
                                                    break a
                                                }
                                        }
                                        l = o.createElement(a),
                                        Xe(l, a, t),
                                        o.head.appendChild(l);
                                        break;
                                    default:
                                        throw Error(m(468, a))
                                    }
                                    l[Qe] = e,
                                    Me(l),
                                    a = l
                                }
                                e.stateNode = a
                            }
                        else
                            De || Su(n, e.type, e.stateNode);
                    else
                        e.stateNode = Zf(n, t, e.memoizedProps);
                else
                    o !== t ? (o === null ? (a = l.stateNode,
                    a === null || ce || a.parentNode.removeChild(a)) : o.count--,
                    t === null ? De || Su(n, e.type, e.stateNode) : Zf(n, t, e.memoizedProps)) : t === null && e.stateNode !== null && _s(e, e.memoizedProps, l.memoizedProps);
            break;
        case 27:
            ia(a, e, t),
            ra(e),
            o & 512 && (ce || l === null || Ze(l, l.return)),
            l !== null && o & 4 && _s(e, e.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (n = at,
            at = !1,
            ia(a, e, t),
            at = n,
            ra(e),
            o & 512 && (ce || l === null || Ze(l, l.return)),
            e.flags & 32) {
                a = e.stateNode;
                try {
                    Nl(a, ""),
                    se = !0
                } catch (S) {
                    pe(e, e.return, S)
                }
            }
            o & 4 && e.stateNode != null && (a = e.memoizedProps,
            _s(e, a, l !== null ? l.memoizedProps : a)),
            o & 1024 && (js = !0);
            break;
        case 6:
            if (ia(a, e, t),
            ra(e),
            o & 4) {
                if (e.stateNode === null)
                    throw Error(m(162));
                a = e.memoizedProps,
                t = e.stateNode;
                try {
                    t.nodeValue = a,
                    se = !0
                } catch (S) {
                    pe(e, e.return, S)
                }
            }
            break;
        case 3:
            if (se = !1,
            ji = null,
            n = Qa,
            Qa = an(a.containerInfo),
            ia(a, e, t),
            Qa = n,
            ra(e),
            o & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    mo(a.containerInfo)
                } catch (S) {
                    pe(e, e.return, S)
                }
            js && (js = !1,
            Um(e)),
            se = !1;
            break;
        case 4:
            o = at,
            at = De,
            l = oc(),
            n = Qa,
            Qa = an(e.stateNode.containerInfo),
            ia(a, e, t),
            ra(e),
            Qa = n,
            se && ko && (bi = !0),
            se = l,
            at = o;
            break;
        case 12:
            ia(a, e, t),
            ra(e);
            break;
        case 31:
            ia(a, e, t),
            ra(e),
            o & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            yi(e, a)));
            break;
        case 13:
            ia(a, e, t),
            ra(e),
            e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (wi = ha()),
            o & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            yi(e, a)));
            break;
        case 22:
            n = e.memoizedState !== null,
            i = l !== null && l.memoizedState !== null;
            var r = De
              , s = ce
              , g = at;
            De = r || n,
            at = g || n,
            ce = s || i,
            ia(a, e, t),
            ce = s,
            at = g,
            De = r,
            ra(e),
            o & 8192 && (a = e.stateNode,
            a._visibility = n ? a._visibility & -2 : a._visibility | 1,
            !n || l === null || i || De || ce || (a = i || ce,
            t = De,
            l = ce,
            De = n || De,
            ce = a,
            Qt(e, 2),
            De = t,
            ce = l),
            !n && at || Os(e, n)),
            o & 4 && (a = e.updateQueue,
            a !== null && (t = a.retryQueue,
            t !== null && (a.retryQueue = null,
            yi(e, t))));
            break;
        case 19:
            ia(a, e, t),
            ra(e),
            o & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            yi(e, a)));
            break;
        case 30:
            o & 512 && (ce || l === null || Ze(l, l.return)),
            o = oc(),
            n = ko,
            i = (t & 335544064) === t,
            r = e.memoizedProps,
            ko = i && mt(r.default, r.update) !== "none",
            ia(a, e, t),
            ra(e),
            i && l !== null && se && (e.flags |= 4),
            ko = n,
            se = o;
            break;
        case 21:
            break;
        case 7:
            o & 512 && (ce || l === null || Ze(l, l.return)),
            l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
        default:
            ia(a, e, t),
            ra(e)
        }
    }
    function ra(e) {
        var a = e.flags;
        if (a & 2) {
            try {
                for (var t, l = e.return; l !== null; ) {
                    if (xm(l)) {
                        t = l;
                        break
                    }
                    l = l.return
                }
                l = null;
                for (var o = e.return; o !== null; ) {
                    if (qs(o)) {
                        var n = o.stateNode;
                        l === null ? l = [n] : l.push(n)
                    }
                    if (xs(o))
                        break;
                    o = o.return
                }
                var i = l;
                if (t == null)
                    throw Error(m(160));
                switch (t.tag) {
                case 27:
                    var r = t.stateNode
                      , s = Es(e);
                    mi(e, s, r, i);
                    break;
                case 5:
                    var g = t.stateNode;
                    t.flags & 32 && (Nl(g, ""),
                    t.flags &= -33);
                    var S = Es(e);
                    mi(e, S, g, i);
                    break;
                case 3:
                case 4:
                    var q = t.stateNode.containerInfo
                      , f = Es(e);
                    Is(e, f, q, i);
                    break;
                default:
                    throw Error(m(161))
                }
            } catch (y) {
                pe(e, e.return, y)
            }
            e.flags &= -3
        }
        a & 4096 && (e.flags &= -4097)
    }
    function Um(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var a = e;
                Um(a),
                a.tag === 5 && a.flags & 1024 && (a = a.stateNode,
                co = !0,
                a.reset(),
                co = !1),
                e = e.sibling
            }
    }
    function Vl(e, a) {
        if (a.subtreeFlags & 9270)
            for (a = a.child; a !== null; )
                Bm(a, e),
                a = a.sibling;
        else
            Rm(a)
    }
    function Bm(e, a) {
        var t = e.alternate;
        if (t === null)
            Ns(e, !1);
        else
            switch (e.tag) {
            case 3:
                if (Ms = tt = !1,
                _m(),
                Vl(a, e),
                !tt && !bi) {
                    if (e = Pa,
                    e !== null)
                        for (var l = 0; l < e.length; l += 3) {
                            t = e[l];
                            var o = e[l + 1];
                            If(t, e[l + 2]),
                            t = t.ownerDocument.documentElement,
                            t !== null && t.animate({
                                opacity: [0, 0],
                                pointerEvents: ["none", "none"]
                            }, {
                                duration: 0,
                                fill: "forwards",
                                pseudoElement: "::view-transition-group(" + o + ")"
                            })
                        }
                    e = a.containerInfo,
                    e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement,
                    e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none",
                    e.animate({
                        opacity: [0, 0],
                        pointerEvents: ["none", "none"]
                    }, {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(root)"
                    }),
                    e.animate({
                        width: [0, 0],
                        height: [0, 0]
                    }, {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition"
                    })),
                    Ms = !0
                }
                Pa = null;
                break;
            case 5:
                Vl(a, e);
                break;
            case 4:
                l = tt,
                tt = !1,
                Vl(a, e),
                tt && (bi = !0),
                tt = l;
                break;
            case 22:
                e.memoizedState === null && (t.memoizedState !== null ? Ns(e, !1) : Vl(a, e));
                break;
            case 30:
                l = tt,
                o = _m(),
                tt = !1,
                Vl(a, e),
                tt && (e.flags |= 4);
                var n = e.memoizedProps
                  , i = e.stateNode;
                a = dt(n, i),
                i = dt(t.memoizedProps, i);
                var r = mt(n.default, n.update);
                r === "none" ? a = !1 : (n = t.memoizedState,
                t.memoizedState = null,
                t = e.child,
                ca = 0,
                a = Ts(e, t, a, i, r, n, !0),
                ca !== (n === null ? 0 : n.length) && (e.flags |= 32)),
                (e.flags & 4) !== 0 && a ? (eo(e, e.memoizedProps.onUpdate),
                Pa = o) : o !== null && (o.push.apply(o, Pa),
                Pa = o),
                tt = (e.flags & 32) !== 0 ? !0 : l;
                break;
            default:
                Vl(a, e)
            }
    }
    function lt(e, a) {
        if (a.subtreeFlags & 8772)
            for (a = a.child; a !== null; )
                Cm(e, a.alternate, a),
                a = a.sibling
    }
    function Qt(e, a) {
        for (e = e.child; e !== null; ) {
            var t = e
              , l = a;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Bt(4, t, t.return),
                Qt(t, l);
                break;
            case 1:
                Ze(t, t.return);
                var o = t.stateNode;
                typeof o.componentWillUnmount == "function" && Sm(t, t.return, o),
                Qt(t, l);
                break;
            case 27:
                (l & 2) !== 0 && Bf(t.stateNode, t.type, t.memoizedProps);
            case 5:
                Ze(t, t.return),
                t.tag !== 5 && t.tag !== 27 || Xo(t),
                Qt(t, l);
                break;
            case 6:
                Xo(t);
                break;
            case 26:
                Ze(t, t.return),
                o = t.stateNode,
                t.memoizedState !== null || o === null || ce || o.parentNode.removeChild(o),
                Qt(t, l);
                break;
            case 22:
                t.memoizedState === null && Qt(t, l);
                break;
            case 30:
                Ze(t, t.return),
                Qt(t, l);
                break;
            case 7:
                Ze(t, t.return);
            default:
                Qt(t, l)
            }
            e = e.sibling
        }
    }
    function Ya(e, a, t) {
        for (t = (a.subtreeFlags & 8772) !== 0 ? t : t & -2,
        a = a.child; a !== null; ) {
            var l = a.alternate
              , o = e
              , n = a
              , i = n.flags
              , r = (t & 1) !== 0;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Ya(o, n, t),
                Zo(4, n);
                break;
            case 1:
                if (Ya(o, n, t),
                l = n,
                o = l.stateNode,
                typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount()
                    } catch (S) {
                        pe(l, l.return, S)
                    }
                if (l = n,
                o = l.updateQueue,
                o !== null) {
                    var s = l.stateNode;
                    try {
                        var g = o.shared.hiddenCallbacks;
                        if (g !== null)
                            for (o.shared.hiddenCallbacks = null,
                            o = 0; o < g.length; o++)
                                rd(g[o], s)
                    } catch (S) {
                        pe(l, l.return, S)
                    }
                }
                r && i & 64 && vm(n),
                Wa(n, n.return);
                break;
            case 27:
                (t & 2) !== 0 && qm(n);
            case 5:
                n.tag !== 5 && n.tag !== 27 || wm(n),
                Ya(o, n, t),
                r && l === null && i & 4 && As(n),
                Wa(n, n.return);
                break;
            case 6:
                wm(n);
                break;
            case 26:
                s = n.stateNode,
                n.memoizedState !== null || s === null || De || Su(an(s.ownerDocument), n.type, s),
                Ya(o, n, t),
                r && l === null && i & 4 && As(n),
                Wa(n, n.return);
                break;
            case 12:
                Ya(o, n, t);
                break;
            case 31:
                Ya(o, n, t),
                r && i & 4 && Om(o, n);
                break;
            case 13:
                Ya(o, n, t),
                r && i & 4 && Dm(o, n);
                break;
            case 22:
                n.memoizedState === null && Ya(o, n, t),
                Wa(n, n.return);
                break;
            case 30:
                Ya(o, n, t),
                Wa(n, n.return);
                break;
            case 7:
                Wa(n, n.return);
            default:
                Ya(o, n, t)
            }
            a = a.sibling
        }
    }
    function Hs(e, a) {
        var t = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        e = null,
        a.memoizedState !== null && a.memoizedState.cachePool !== null && (e = a.memoizedState.cachePool.pool),
        e !== t && (e != null && e.refCount++,
        t != null && Co(t))
    }
    function Us(e, a) {
        e = null,
        a.alternate !== null && (e = a.alternate.memoizedState.cache),
        a = a.memoizedState.cache,
        a !== e && (a.refCount++,
        e != null && Co(e))
    }
    function Ma(e, a, t, l) {
        var o = (t & 335544064) === t;
        if (a.subtreeFlags & (o ? 10262 : 10256))
            for (a = a.child; a !== null; )
                Qm(e, a, t, l),
                a = a.sibling;
        else
            o && Nm(a)
    }
    function Qm(e, a, t, l) {
        var o = (t & 335544064) === t;
        o && a.alternate === null && a.return !== null && a.return.alternate !== null && gi(a);
        var n = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Ma(e, a, t, l),
            n & 2048 && Zo(9, a);
            break;
        case 1:
            Ma(e, a, t, l);
            break;
        case 3:
            Ma(e, a, t, l),
            o && Ms && (e = e.containerInfo,
            e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""),
            e = e.ownerDocument.documentElement,
            e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")),
            n & 2048 && (n = null,
            a.alternate !== null && (n = a.alternate.memoizedState.cache),
            a = a.memoizedState.cache,
            a !== n && (a.refCount++,
            n != null && Co(n)));
            break;
        case 12:
            if (n & 2048) {
                Ma(e, a, t, l),
                n = a.stateNode;
                try {
                    var i = a.memoizedProps
                      , r = i.id
                      , s = i.onPostCommit;
                    typeof s == "function" && s(r, a.alternate === null ? "mount" : "update", n.passiveEffectDuration, -0)
                } catch (g) {
                    pe(a, a.return, g)
                }
            } else
                Ma(e, a, t, l);
            break;
        case 31:
            Ma(e, a, t, l);
            break;
        case 13:
            Ma(e, a, t, l);
            break;
        case 23:
            break;
        case 22:
            i = a.stateNode,
            r = a.alternate,
            a.memoizedState !== null ? (o && r !== null && r.memoizedState === null && gi(r),
            i._visibility & 2 ? Ma(e, a, t, l) : Vo(e, a)) : (o && r !== null && r.memoizedState !== null && gi(a),
            i._visibility & 2 ? Ma(e, a, t, l) : (i._visibility |= 2,
            Fl(e, a, t, l, (a.subtreeFlags & 10256) !== 0 || !1))),
            n & 2048 && Hs(r, a);
            break;
        case 24:
            Ma(e, a, t, l),
            n & 2048 && Us(a.alternate, a);
            break;
        case 30:
            o && (n = a.alternate,
            n !== null && (et(n.child, !0),
            et(a.child, !0))),
            Ma(e, a, t, l);
            break;
        default:
            Ma(e, a, t, l)
        }
    }
    function Fl(e, a, t, l, o) {
        for (o = o && ((a.subtreeFlags & 10256) !== 0 || !1),
        a = a.child; a !== null; ) {
            var n = e
              , i = a
              , r = t
              , s = l
              , g = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                Fl(n, i, r, s, o),
                Zo(8, i);
                break;
            case 23:
                break;
            case 22:
                var S = i.stateNode;
                i.memoizedState !== null ? S._visibility & 2 ? Fl(n, i, r, s, o) : Vo(n, i) : (S._visibility |= 2,
                Fl(n, i, r, s, o)),
                o && g & 2048 && Hs(i.alternate, i);
                break;
            case 24:
                Fl(n, i, r, s, o),
                o && g & 2048 && Us(i.alternate, i);
                break;
            default:
                Fl(n, i, r, s, o)
            }
            a = a.sibling
        }
    }
    function Vo(e, a) {
        if (a.subtreeFlags & 10256)
            for (a = a.child; a !== null; ) {
                var t = e
                  , l = a
                  , o = l.flags;
                switch (l.tag) {
                case 22:
                    Vo(t, l),
                    o & 2048 && Hs(l.alternate, l);
                    break;
                case 24:
                    Vo(t, l),
                    o & 2048 && Us(l.alternate, l);
                    break;
                default:
                    Vo(t, l)
                }
                a = a.sibling
            }
    }
    var bl = 8192;
    function hl(e, a, t) {
        if (e.subtreeFlags & bl)
            for (e = e.child; e !== null; )
                Ym(e, a, t),
                e = e.sibling
    }
    function Ym(e, a, t) {
        switch (e.tag) {
        case 26:
            hl(e, a, t),
            e.flags & bl && (e.memoizedState !== null ? bh(t, Qa, e.memoizedState, e.memoizedProps) : (e = e.stateNode,
            (a & 335544128) === a && Kf(t, e)));
            break;
        case 5:
            hl(e, a, t),
            e.flags & bl && (e = e.stateNode,
            (a & 335544128) === a && Kf(t, e));
            break;
        case 3:
        case 4:
            var l = Qa;
            Qa = an(e.stateNode.containerInfo),
            hl(e, a, t),
            Qa = l;
            break;
        case 22:
            e.memoizedState === null && (l = e.alternate,
            l !== null && l.memoizedState !== null ? (l = bl,
            bl = 16777216,
            hl(e, a, t),
            bl = l) : hl(e, a, t));
            break;
        case 30:
            if ((e.flags & bl) !== 0 && (l = e.memoizedProps.name,
            l != null && l !== "auto")) {
                var o = e.stateNode;
                o.paired = null,
                qa === null && (qa = new Map),
                qa.set(l, o)
            }
            hl(e, a, t);
            break;
        default:
            hl(e, a, t)
        }
    }
    function Lm(e) {
        var a = e.alternate;
        if (a !== null && (e = a.child,
        e !== null)) {
            a.child = null;
            do
                a = e.sibling,
                e.sibling = null,
                e = a;
            while (e !== null)
        }
    }
    function Fo(e) {
        var a = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (a !== null)
                for (var t = 0; t < a.length; t++) {
                    var l = a[t];
                    He = l,
                    Zm(l, e)
                }
            Lm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Gm(e),
                e = e.sibling
    }
    function Gm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Fo(e),
            e.flags & 2048 && Bt(9, e, e.return);
            break;
        case 3:
            Fo(e);
            break;
        case 12:
            Fo(e);
            break;
        case 22:
            var a = e.stateNode;
            e.memoizedState !== null && a._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (a._visibility &= -3,
            vi(e)) : Fo(e);
            break;
        default:
            Fo(e)
        }
    }
    function vi(e) {
        var a = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (a !== null)
                for (var t = 0; t < a.length; t++) {
                    var l = a[t];
                    He = l,
                    Zm(l, e)
                }
            Lm(e)
        }
        for (e = e.child; e !== null; ) {
            switch (a = e,
            a.tag) {
            case 0:
            case 11:
            case 15:
                Bt(8, a, a.return),
                vi(a);
                break;
            case 22:
                t = a.stateNode,
                t._visibility & 2 && (t._visibility &= -3,
                vi(a));
                break;
            default:
                vi(a)
            }
            e = e.sibling
        }
    }
    function Zm(e, a) {
        for (; He !== null; ) {
            var t = He;
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Bt(8, t, a);
                break;
            case 23:
            case 22:
                if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
                    var l = t.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                Co(t.memoizedState.cache)
            }
            if (l = t.child,
            l !== null)
                l.return = t,
                He = l;
            else
                e: for (t = e; He !== null; ) {
                    l = He;
                    var o = l.sibling
                      , n = l.return;
                    if (jm(l),
                    l === t) {
                        He = null;
                        break e
                    }
                    if (o !== null) {
                        o.return = n,
                        He = o;
                        break e
                    }
                    He = n
                }
        }
    }
    var db = {
        getCacheForType: function(e) {
            var a = Ye(Re)
              , t = a.data.get(e);
            return t === void 0 && (t = e(),
            a.data.set(e, t)),
            t
        },
        cacheSignal: function() {
            return Ye(Re).controller.signal
        }
    }
      , mb = typeof WeakMap == "function" ? WeakMap : Map
      , ue = 0
      , he = null
      , P = null
      , te = 0
      , fe = 0
      , Aa = null
      , Yt = !1
      , Kl = !1
      , Bs = !1
      , wt = 0
      , Ee = 0
      , Lt = 0
      , yl = 0
      , Si = 0
      , _a = 0
      , Jl = 0
      , Ko = null
      , ma = null
      , Qs = !1
      , wi = 0
      , Xm = 0
      , xi = 1 / 0
      , qi = null
      , Gt = null
      , xe = 0
      , La = null
      , vl = null
      , ot = 0
      , Ys = 0
      , Ls = null
      , km = null
      , $l = null
      , Wl = null
      , Pl = null
      , Jo = 0
      , Ai = null;
    function Ea() {
        return (ue & 2) !== 0 && te !== 0 ? te & -te : H.T !== null ? Ws() : Ku()
    }
    function Vm() {
        if (_a === 0)
            if ((te & 536870912) === 0 || W) {
                var e = yn;
                yn <<= 1,
                (yn & 3932160) === 0 && (yn = 262144),
                _a = e
            } else
                _a = 536870912;
        return e = Le.current,
        e !== null && (e.flags |= 32),
        _a
    }
    function eo(e, a) {
        if (a != null) {
            var t = e.stateNode
              , l = t.ref;
            l === null && (l = t.ref = Nf(dt(e.memoizedProps, t))),
            Wl === null && (Wl = []),
            Wl.push(a.bind(null, l))
        }
    }
    function fa(e, a, t) {
        (e === he && (fe === 2 || fe === 9) || e.cancelPendingCommit !== null) && (ao(e, 0),
        Zt(e, te, _a, !1)),
        ho(e, t),
        ((ue & 2) === 0 || e !== he) && (e === he && ((ue & 2) === 0 && (yl |= t),
        Ee === 4 && Zt(e, te, _a, !1)),
        nt(e))
    }
    function Fm(e, a, t) {
        if ((ue & 6) !== 0)
            throw Error(m(327));
        var l = !t && (a & 127) === 0 && (a & e.expiredLanes) === 0 || bo(e, a)
          , o = l ? gb(e, a) : Zs(e, a, !0)
          , n = l;
        do {
            if (o === 0) {
                Kl && !l && Zt(e, a, 0, !1);
                break
            } else {
                if (t = e.current.alternate,
                n && !fb(t)) {
                    o = Zs(e, a, !1),
                    n = !1;
                    continue
                }
                if (o === 2) {
                    if (n = a,
                    e.errorRecoveryDisabledLanes & n)
                        var i = 0;
                    else
                        i = e.pendingLanes & -536870913,
                        i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        a = i;
                        e: {
                            var r = e;
                            o = Ko;
                            var s = r.current.memoizedState.isDehydrated;
                            if (s && (ao(r, i).flags |= 256),
                            i = Zs(r, i, !1),
                            i !== 2 && i !== 6) {
                                if (Bs && !s) {
                                    r.errorRecoveryDisabledLanes |= n,
                                    yl |= n,
                                    o = 4;
                                    break e
                                }
                                n = ma,
                                ma = o,
                                n !== null && (ma === null ? ma = n : ma.push.apply(ma, n))
                            }
                            o = i
                        }
                        if (n = !1,
                        o !== 2)
                            continue
                    }
                }
                if (o === 1) {
                    ao(e, 0),
                    Zt(e, a, 0, !0);
                    break
                }
                e: {
                    switch (l = e,
                    n = o,
                    n) {
                    case 0:
                    case 1:
                        throw Error(m(345));
                    case 4:
                        if ((a & 4194048) !== a && (a & 62914560) !== a)
                            break;
                    case 6:
                        Zt(l, a, _a, !Yt);
                        break e;
                    case 2:
                        ma = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(m(329))
                    }
                    if ((a & 62914560) === a && (o = wi + 300 - ha(),
                    10 < o)) {
                        if (Zt(l, a, _a, !Yt),
                        Sn(l, 0, !0) !== 0)
                            break e;
                        ot = a,
                        l.timeoutHandle = uu(Km.bind(null, l, t, ma, qi, Qs, a, _a, yl, Jl, Yt, n, "Throttled", -0, 0), o);
                        break e
                    }
                    Km(l, t, ma, qi, Qs, a, _a, yl, Jl, Yt, n, null, -0, 0)
                }
            }
            break
        } while (!0);
        nt(e)
    }
    function Km(e, a, t, l, o, n, i, r, s, g, S, q, f, y) {
        e.timeoutHandle = -1;
        var N = a.subtreeFlags
          , M = (n & 335544064) === n;
        if (q = null,
        (M || N & 8192 || (N & 16785408) === 16785408) && (q = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: Ka
        },
        qa = null,
        Ym(a, n, q),
        M && (N = q,
        M = e.containerInfo,
        M = (M.nodeType === 9 ? M : M.ownerDocument).__reactViewTransition,
        M != null && (N.count++,
        N.waitingForViewTransition = !0,
        N = on.bind(N),
        M.finished.then(N, N))),
        N = (n & 62914560) === n ? wi - ha() : (n & 4194048) === n ? Xm - ha() : 0,
        N = hh(q, N),
        N !== null)) {
            ot = n,
            e.cancelPendingCommit = N(lf.bind(null, e, a, n, t, l, o, i, r, s, g, S, q, null, f, y)),
            Zt(e, n, i, !g);
            return
        }
        lf(e, a, n, t, l, o, i, r, s, g, S, q)
    }
    function fb(e) {
        for (var a = e; ; ) {
            var t = a.tag;
            if ((t === 0 || t === 11 || t === 15) && a.flags & 16384 && (t = a.updateQueue,
            t !== null && (t = t.stores,
            t !== null)))
                for (var l = 0; l < t.length; l++) {
                    var o = t[l]
                      , n = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!wa(n(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (t = a.child,
            a.subtreeFlags & 16384 && t !== null)
                t.return = a,
                a = t;
            else {
                if (a === e)
                    break;
                for (; a.sibling === null; ) {
                    if (a.return === null || a.return === e)
                        return !0;
                    a = a.return
                }
                a.sibling.return = a.return,
                a = a.sibling
            }
        }
        return !0
    }
    function Zt(e, a, t, l) {
        a = Zu(e, a),
        a &= ~Si,
        a &= ~yl,
        e.suspendedLanes |= a,
        e.pingedLanes &= ~a,
        l && (e.warmLanes |= a),
        l = e.expirationTimes;
        for (var o = a; 0 < o; ) {
            var n = 31 - va(o)
              , i = 1 << n;
            l[n] = -1,
            o &= ~i
        }
        t !== 0 && ku(e, t, a)
    }
    function _i() {
        return (ue & 6) === 0 ? ($o(0),
        !1) : !0
    }
    function Gs() {
        if (P !== null) {
            if (fe === 0)
                var e = P.return;
            else
                e = P,
                gt = il = null,
                $r(e),
                Yl = null,
                Mo = 0,
                e = P;
            for (; e !== null; )
                ym(e.alternate, e),
                e = e.return;
            P = null
        }
    }
    function ao(e, a) {
        var t = e.timeoutHandle;
        return t !== -1 && (e.timeoutHandle = -1,
        Hb(t)),
        t = e.cancelPendingCommit,
        t !== null && (e.cancelPendingCommit = null,
        t()),
        ot = 0,
        Gs(),
        he = e,
        P = t = ft(e.current, null),
        te = a,
        fe = 0,
        Aa = null,
        Yt = !1,
        Kl = bo(e, a),
        Bs = !1,
        Jl = _a = Si = yl = Lt = Ee = 0,
        ma = Ko = null,
        Qs = !1,
        wt = Zu(e, a),
        jn(),
        t
    }
    function Jm(e, a) {
        F = null,
        H.H = oi,
        a === Ql || a === Zn ? (a = ld(),
        fe = 3) : a === Ur ? (a = ld(),
        fe = 4) : fe = a === ms ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1,
        Aa = a,
        P === null && (Ee = 1,
        ni(e, za(a, e.current)))
    }
    function $m() {
        var e = Le.current;
        return e === null ? !0 : (te & 4194048) === te ? Pe === null : (te & 62914560) === te || (te & 536870912) !== 0 ? e === Pe : !1
    }
    function Wm() {
        var e = H.H;
        return H.H = oi,
        e === null ? oi : e
    }
    function Pm() {
        var e = H.A;
        return H.A = db,
        e
    }
    function Ei() {
        Ee = 4,
        Yt || (te & 4194048) !== te && Le.current !== null || (Kl = !0),
        (Lt & 134217727) === 0 && (yl & 134217727) === 0 || he === null || Zt(he, te, _a, !1)
    }
    function Zs(e, a, t) {
        var l = ue;
        ue |= 2;
        var o = Wm()
          , n = Pm();
        (he !== e || te !== a) && (qi = null,
        ao(e, a)),
        a = !1;
        var i = Ee;
        e: do
            try {
                if (fe !== 0 && P !== null) {
                    var r = P
                      , s = Aa;
                    switch (fe) {
                    case 8:
                        Gs(),
                        i = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Le.current === null && (a = !0);
                        var g = fe;
                        if (fe = 0,
                        Aa = null,
                        to(e, r, s, g),
                        t && Kl) {
                            i = 0;
                            break e
                        }
                        break;
                    default:
                        g = fe,
                        fe = 0,
                        Aa = null,
                        to(e, r, s, g)
                    }
                }
                pb(),
                i = Ee;
                break
            } catch (S) {
                Jm(e, S)
            }
        while (!0);
        return a && e.shellSuspendCounter++,
        gt = il = null,
        ue = l,
        H.H = o,
        H.A = n,
        P === null && (he = null,
        te = 0,
        jn()),
        i
    }
    function pb() {
        for (; P !== null; )
            ef(P)
    }
    function gb(e, a) {
        var t = ue;
        ue |= 2;
        var l = Wm()
          , o = Pm();
        he !== e || te !== a ? (qi = null,
        xi = ha() + 500,
        ao(e, a)) : Kl = bo(e, a);
        e: do
            try {
                if (fe !== 0 && P !== null) {
                    a = P;
                    var n = Aa;
                    a: switch (fe) {
                    case 1:
                        fe = 0,
                        Aa = null,
                        to(e, a, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (ad(n)) {
                            fe = 0,
                            Aa = null,
                            af(a);
                            break
                        }
                        a = function() {
                            fe !== 2 && fe !== 9 || he !== e || (fe = 7),
                            nt(e)
                        }
                        ,
                        n.then(a, a);
                        break e;
                    case 3:
                        fe = 7;
                        break e;
                    case 4:
                        fe = 5;
                        break e;
                    case 7:
                        ad(n) ? (fe = 0,
                        Aa = null,
                        af(a)) : (fe = 0,
                        Aa = null,
                        to(e, a, n, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (P.tag) {
                        case 26:
                            i = P.memoizedState;
                        case 5:
                        case 27:
                            var r = P;
                            if (i ? Vf(i) : r.stateNode.complete) {
                                fe = 0,
                                Aa = null;
                                var s = r.sibling;
                                if (s !== null)
                                    P = s;
                                else {
                                    var g = r.return;
                                    g !== null ? (P = g,
                                    Ii(g)) : P = null
                                }
                                break a
                            }
                        }
                        fe = 0,
                        Aa = null,
                        to(e, a, n, 5);
                        break;
                    case 6:
                        fe = 0,
                        Aa = null,
                        to(e, a, n, 6);
                        break;
                    case 8:
                        Gs(),
                        Ee = 6;
                        break e;
                    default:
                        throw Error(m(462))
                    }
                }
                bb();
                break
            } catch (S) {
                Jm(e, S)
            }
        while (!0);
        return gt = il = null,
        H.H = l,
        H.A = o,
        ue = t,
        P !== null ? 0 : (he = null,
        te = 0,
        jn(),
        Ee)
    }
    function bb() {
        for (; P !== null && !jp(); )
            ef(P)
    }
    function ef(e) {
        var a = bm(e.alternate, e, wt);
        e.memoizedProps = e.pendingProps,
        a === null ? Ii(e) : P = a
    }
    function af(e) {
        var a = e
          , t = a.alternate;
        switch (a.tag) {
        case 15:
        case 0:
            a = um(t, a, a.pendingProps, a.type, void 0, te);
            break;
        case 11:
            a = um(t, a, a.pendingProps, a.type.render, a.ref, te);
            break;
        case 5:
            $r(a);
            var l = a;
            l === Oe && (W ? (Bn(l),
            l.tag === 5 && l.stateNode != null && (ve = l.stateNode)) : (Bn(l),
            W = !0));
        default:
            ym(t, a),
            a = P = Zc(a, wt),
            a = bm(t, a, wt)
        }
        e.memoizedProps = e.pendingProps,
        a === null ? Ii(e) : P = a
    }
    function to(e, a, t, l) {
        gt = il = null,
        $r(a),
        Yl = null,
        Mo = 0;
        var o = a.return;
        try {
            if (lb(e, o, a, t, te)) {
                Ee = 1,
                ni(e, za(t, e.current)),
                P = null;
                return
            }
        } catch (n) {
            if (o !== null)
                throw P = o,
                n;
            Ee = 1,
            ni(e, za(t, e.current)),
            P = null;
            return
        }
        a.flags & 32768 ? (W || l === 1 ? e = !0 : Kl || (te & 536870912) !== 0 ? e = !1 : (Yt = e = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = Le.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        tf(a, e)) : Ii(a)
    }
    function Ii(e) {
        var a = e;
        do {
            if ((a.flags & 32768) !== 0) {
                tf(a, Yt);
                return
            }
            e = a.return;
            var t = rb(a.alternate, a, wt);
            if (t !== null) {
                P = t;
                return
            }
            if (a = a.sibling,
            a !== null) {
                P = a;
                return
            }
            P = a = e
        } while (a !== null);
        Ee === 0 && (Ee = 5)
    }
    function tf(e, a) {
        do {
            var t = sb(e.alternate, e);
            if (t !== null) {
                t.flags &= 32767,
                P = t;
                return
            }
            if (t = e.return,
            t !== null && (t.flags |= 32768,
            t.subtreeFlags = 0,
            t.deletions = null),
            !a && (e = e.sibling,
            e !== null)) {
                P = e;
                return
            }
            P = e = t
        } while (e !== null);
        Ee = 6,
        P = null
    }
    function lf(e, a, t, l, o, n, i, r, s, g, S, q) {
        e.cancelPendingCommit = null;
        do
            Ni();
        while (xe !== 0);
        if ((ue & 6) !== 0)
            throw Error(m(327));
        if (a !== null) {
            if (a === e.current)
                throw Error(m(177));
            e === he && (P = he = null,
            te = 0),
            vl = a,
            La = e,
            ot = t,
            Ls = o,
            km = l,
            hb(e, a, t, i, r, s, q)
        }
    }
    function hb(e, a, t, l, o, n, i) {
        var r = a.lanes | a.childLanes;
        if (Ys = r,
        r |= _r,
        Gp(e, t, r, l, o, n),
        Wl = null,
        (t & 335544064) === t ? (Pl = Xg(e),
        l = 10262) : (Pl = null,
        l = 10256),
        (a.subtreeFlags & l) !== 0 || (a.flags & l) !== 0 ? (e.callbackNode = null,
        e.callbackPriority = 0,
        qb(bn, function() {
            return Fs(),
            null
        })) : (e.callbackNode = null,
        e.callbackPriority = 0),
        fi = !1,
        l = (a.flags & 13878) !== 0,
        (a.subtreeFlags & 13878) !== 0 || l) {
            l = H.T,
            H.T = null,
            o = k.p,
            k.p = 2,
            n = ue,
            ue |= 4;
            try {
                ub(e, a, t)
            } finally {
                ue = n,
                k.p = o,
                H.T = l
            }
        }
        xe = 1,
        fi ? $l = Gb(i, e.containerInfo, Pl, Xs, ks, vb, Vs, Fs, yb) : (Xs(),
        ks(),
        Vs())
    }
    function yb(e) {
        if (xe !== 0) {
            var a = La.onRecoverableError;
            a(e, {
                componentStack: null
            })
        }
    }
    function vb() {
        xe === 3 && (xe = 0,
        Bm(vl, La),
        xe = 4)
    }
    function Xs() {
        if (xe === 1) {
            xe = 0;
            var e = La
              , a = vl
              , t = ot
              , l = (a.flags & 13878) !== 0;
            if ((a.subtreeFlags & 13878) !== 0 || l) {
                l = H.T,
                H.T = null;
                var o = k.p;
                k.p = 2;
                var n = ue;
                ue |= 4;
                try {
                    ko = bi = !1,
                    Hm(a, e, t),
                    t = iu;
                    var i = Mc(e.containerInfo)
                      , r = t.focusedElem
                      , s = t.selectionRange;
                    if (i !== r && r && r.ownerDocument && jc(r.ownerDocument.documentElement, r)) {
                        if (s !== null && Sr(r)) {
                            var g = s.start
                              , S = s.end;
                            if (S === void 0 && (S = g),
                            "selectionStart" in r)
                                r.selectionStart = g,
                                r.selectionEnd = Math.min(S, r.value.length);
                            else {
                                var q = r.ownerDocument || document
                                  , f = q && q.defaultView || window;
                                if (f.getSelection) {
                                    var y = f.getSelection()
                                      , N = r.textContent.length
                                      , M = Math.min(s.start, N)
                                      , K = s.end === void 0 ? M : Math.min(s.end, N);
                                    !y.extend && M > K && (i = K,
                                    K = M,
                                    M = i);
                                    var p = Tc(r, M)
                                      , c = Tc(r, K);
                                    if (p && c && (y.rangeCount !== 1 || y.anchorNode !== p.node || y.anchorOffset !== p.offset || y.focusNode !== c.node || y.focusOffset !== c.offset)) {
                                        var h = q.createRange();
                                        h.setStart(p.node, p.offset),
                                        y.removeAllRanges(),
                                        M > K ? (y.addRange(h),
                                        y.extend(c.node, c.offset)) : (h.setEnd(c.node, c.offset),
                                        y.addRange(h))
                                    }
                                }
                            }
                        }
                        for (q = [],
                        y = r; y = y.parentNode; )
                            y.nodeType === 1 && q.push({
                                element: y,
                                left: y.scrollLeft,
                                top: y.scrollTop
                            });
                        for (typeof r.focus == "function" && r.focus(),
                        r = 0; r < q.length; r++) {
                            var x = q[r];
                            x.element.scrollLeft = x.left,
                            x.element.scrollTop = x.top
                        }
                    }
                    co = !!nu,
                    iu = nu = null
                } finally {
                    ue = n,
                    k.p = o,
                    H.T = l
                }
            }
            e.current = a,
            xe = 2
        }
    }
    function ks() {
        if (xe === 2) {
            xe = 0;
            var e = La
              , a = vl
              , t = (a.flags & 8772) !== 0;
            if ((a.subtreeFlags & 8772) !== 0 || t) {
                t = H.T,
                H.T = null;
                var l = k.p;
                k.p = 2;
                var o = ue;
                ue |= 4;
                try {
                    Cm(e, a.alternate, a)
                } finally {
                    ue = o,
                    k.p = l,
                    H.T = t
                }
            }
            xe = 3
        }
    }
    function Vs() {
        if (xe === 4 || xe === 3) {
            xe = 0;
            var e = $l;
            $l = null,
            Mp();
            var a = La
              , t = vl
              , l = ot
              , o = km
              , n = (l & 335544064) === l ? 10262 : 10256;
            if ((t.subtreeFlags & n) !== 0 || (t.flags & n) !== 0 ? xe = 5 : (xe = 0,
            vl = La = null,
            of(a, a.pendingLanes)),
            n = a.pendingLanes,
            n === 0 && (Gt = null),
            tr(l),
            t = t.stateNode,
            ya && typeof ya.onCommitFiberRoot == "function")
                try {
                    ya.onCommitFiberRoot(go, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (o !== null) {
                t = H.T,
                n = k.p,
                k.p = 2,
                H.T = null;
                try {
                    for (var i = a.onRecoverableError, r = 0; r < o.length; r++) {
                        var s = o[r];
                        i(s.value, {
                            componentStack: s.stack
                        })
                    }
                } finally {
                    H.T = t,
                    k.p = n
                }
            }
            if (o = Wl,
            i = Pl,
            Pl = null,
            o !== null && (Wl = null,
            i === null && (i = []),
            e !== null))
                for (s = 0; s < o.length; s++)
                    t = (0,
                    o[s])(i),
                    t !== void 0 && e.finished.finally(t);
            (ot & 3) !== 0 && Ni(),
            nt(a),
            n = a.pendingLanes,
            (l & 261930) !== 0 && (n & 42) !== 0 ? a === Ai ? Jo++ : (Jo = 0,
            Ai = a) : (Jo = 0,
            Ai = null),
            $o(0)
        }
    }
    function of(e, a) {
        (e.pooledCacheLanes &= a) === 0 && (a = e.pooledCache,
        a != null && (e.pooledCache = null,
        Co(a)))
    }
    function Ni() {
        return $l !== null && ($l.skipTransition(),
        $l = null),
        Xs(),
        ks(),
        Vs(),
        Fs()
    }
    function Fs() {
        if (xe !== 5)
            return !1;
        var e = La
          , a = Ys;
        Ys = 0;
        var t = tr(ot)
          , l = H.T
          , o = k.p;
        try {
            k.p = 32 > t ? 32 : t,
            H.T = null,
            t = Ls,
            Ls = null;
            var n = La
              , i = ot;
            if (xe = 0,
            vl = La = null,
            ot = 0,
            (ue & 6) !== 0)
                throw Error(m(331));
            var r = ue;
            if (ue |= 4,
            Gm(n.current),
            Qm(n, n.current, i, t),
            ue = r,
            $o(0, !1),
            ya && typeof ya.onPostCommitFiberRoot == "function")
                try {
                    ya.onPostCommitFiberRoot(go, n)
                } catch {}
            return !0
        } finally {
            k.p = o,
            H.T = l,
            of(e, a)
        }
    }
    function nf(e, a, t) {
        a = za(t, a),
        a = ds(e.stateNode, a, 2),
        e = Ot(e, a, 2),
        e !== null && (ho(e, 2),
        nt(e))
    }
    function pe(e, a, t) {
        if (e.tag === 3)
            nf(e, e, t);
        else
            for (; a !== null; ) {
                if (a.tag === 3) {
                    nf(a, e, t);
                    break
                } else if (a.tag === 1) {
                    var l = a.stateNode;
                    if (typeof a.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Gt === null || !Gt.has(l))) {
                        e = za(t, e),
                        t = am(2),
                        l = Ot(a, t, 2),
                        l !== null && (tm(t, l, a, e),
                        ho(l, 2),
                        nt(l));
                        break
                    }
                }
                a = a.return
            }
    }
    function Ks(e, a, t) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new mb;
            var o = new Set;
            l.set(a, o)
        } else
            o = l.get(a),
            o === void 0 && (o = new Set,
            l.set(a, o));
        o.has(t) || (Bs = !0,
        o.add(t),
        e = Sb.bind(null, e, a, t),
        a.then(e, e))
    }
    function Sb(e, a, t) {
        var l = e.pingCache;
        l !== null && l.delete(a),
        e.pingedLanes |= e.suspendedLanes & t,
        e.warmLanes &= ~t,
        he === e && (te & t) === t && ((Ee === 4 || Ee === 3 && (te & 62914560) === te && 300 > ha() - wi) && (ue & 2) === 0 ? ao(e, 0) : Si |= t,
        Jl === te && (Jl = 0)),
        nt(e)
    }
    function rf(e, a) {
        a === 0 && (a = Xu()),
        e = ll(e, a),
        e !== null && (ho(e, a),
        nt(e))
    }
    function wb(e) {
        var a = e.memoizedState
          , t = 0;
        a !== null && (t = a.retryLane),
        rf(e, t)
    }
    function xb(e, a) {
        var t = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var l = e.stateNode
              , o = e.memoizedState;
            o !== null && (t = o.retryLane);
            break;
        case 19:
            l = e.stateNode;
            break;
        case 22:
            l = e.stateNode._retryCache;
            break;
        default:
            throw Error(m(314))
        }
        l !== null && l.delete(a),
        rf(e, t)
    }
    function qb(e, a) {
        return Wi(e, a)
    }
    var lo = null
      , oo = null
      , Js = !1
      , Ri = !1
      , $s = !1
      , Xt = 0;
    function nt(e) {
        e !== oo && e.next === null && (oo === null ? lo = oo = e : oo = oo.next = e),
        Ri = !0,
        Js || (Js = !0,
        _b())
    }
    function $o(e, a) {
        if (!$s && Ri) {
            $s = !0;
            do
                for (var t = !1, l = lo; l !== null; ) {
                    if (e !== 0) {
                        var o = l.pendingLanes;
                        if (o === 0)
                            var n = 0;
                        else {
                            var i = l.suspendedLanes
                              , r = l.pingedLanes;
                            n = (1 << 31 - va(42 | e) + 1) - 1,
                            n &= o & ~(i & ~r),
                            n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (t = !0,
                        df(l, n))
                    } else
                        n = te,
                        n = Sn(l, l === he ? n : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (n & 3) === 0 || bo(l, n) || (t = !0,
                        df(l, n));
                    l = l.next
                }
            while (t);
            $s = !1
        }
    }
    function Ab() {
        sf()
    }
    function sf() {
        Ri = Js = !1;
        var e = 0;
        Xt !== 0 && Db() && (e = Xt);
        for (var a = ha(), t = null, l = lo; l !== null; ) {
            var o = l.next
              , n = uf(l, a);
            n === 0 ? (l.next = null,
            t === null ? lo = o : t.next = o,
            o === null && (oo = t)) : (t = l,
            (e !== 0 || (n & 3) !== 0) && (Ri = !0)),
            l = o
        }
        xe !== 0 && xe !== 5 || $o(e),
        Xt !== 0 && (Xt = 0)
    }
    function uf(e, a) {
        for (var t = e.suspendedLanes, l = e.pingedLanes, o = e.expirationTimes, n = e.pendingLanes & -62914561; 0 < n; ) {
            var i = 31 - va(n)
              , r = 1 << i
              , s = o[i];
            s === -1 ? ((r & t) === 0 || (r & l) !== 0) && (o[i] = Lp(r, a)) : s <= a && (e.expiredLanes |= r),
            n &= ~r
        }
        if (a = he,
        t = te,
        t = Sn(e, e === a ? t : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        l = e.callbackNode,
        t === 0 || e === a && (fe === 2 || fe === 9) || e.cancelPendingCommit !== null)
            return l !== null && l !== null && Pi(l),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((t & 3) === 0 || bo(e, t)) {
            if (a = t & -t,
            a === e.callbackPriority)
                return a;
            switch (l !== null && Pi(l),
            tr(t)) {
            case 2:
            case 8:
                t = Lu;
                break;
            case 32:
                t = bn;
                break;
            case 268435456:
                t = Gu;
                break;
            default:
                t = bn
            }
            return l = cf.bind(null, e),
            t = Wi(t, l),
            e.callbackPriority = a,
            e.callbackNode = t,
            a
        }
        return l !== null && l !== null && Pi(l),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function cf(e, a) {
        if (xe !== 0 && xe !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var t = e.callbackNode;
        if (Ni() && e.callbackNode !== t)
            return null;
        var l = te;
        return l = Sn(e, e === he ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        l === 0 ? null : (Fm(e, l, a),
        uf(e, ha()),
        e.callbackNode != null && e.callbackNode === t ? cf.bind(null, e) : null)
    }
    function df(e, a) {
        if (Ni())
            return null;
        Fm(e, a, !0)
    }
    function _b() {
        Ub(function() {
            (ue & 6) !== 0 ? Wi(Yu, Ab) : sf()
        })
    }
    function Ws() {
        if (Xt === 0) {
            var e = ul;
            e === 0 && (e = hn,
            hn <<= 1,
            (hn & 261888) === 0 && (hn = 256)),
            Xt = e
        }
        return Xt
    }
    function mf(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _n(e)
    }
    function Eb(e, a, t, l, o) {
        if (a === "submit" && t && t.stateNode === o) {
            var n = mf((o[sa] || null).action)
              , i = l.submitter;
            i && (a = (a = i[sa] || null) ? mf(a.formAction) : i.getAttribute("formAction"),
            a !== null && (n = a,
            i = null));
            var r = new Rn("action","action",null,l,o);
            e.push({
                event: r,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Xt !== 0) {
                                var s = new FormData(o,i);
                                is(t, {
                                    pending: !0,
                                    data: s,
                                    method: o.method,
                                    action: n
                                }, null, s)
                            }
                        } else
                            typeof n == "function" && (r.preventDefault(),
                            s = new FormData(o,i),
                            is(t, {
                                pending: !0,
                                data: s,
                                method: o.method,
                                action: n
                            }, n, s))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var Ps = 0; Ps < Ar.length; Ps++) {
        var eu = Ar[Ps]
          , Ib = eu.toLowerCase()
          , Nb = eu[0].toUpperCase() + eu.slice(1);
        Ua(Ib, "on" + Nb)
    }
    Ua(Hc, "onAnimationEnd"),
    Ua(Uc, "onAnimationIteration"),
    Ua(Bc, "onAnimationStart"),
    Ua("dblclick", "onDoubleClick"),
    Ua("focusin", "onFocus"),
    Ua("focusout", "onBlur"),
    Ua(Hg, "onTransitionRun"),
    Ua(Ug, "onTransitionStart"),
    Ua(Bg, "onTransitionCancel"),
    Ua(Qc, "onTransitionEnd"),
    El("onMouseEnter", ["mouseout", "mouseover"]),
    El("onMouseLeave", ["mouseout", "mouseover"]),
    El("onPointerEnter", ["pointerout", "pointerover"]),
    El("onPointerLeave", ["pointerout", "pointerover"]),
    el("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    el("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    el("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    el("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    el("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    el("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Wo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Rb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));
    function ff(e, a) {
        a = (a & 4) !== 0;
        for (var t = 0; t < e.length; t++) {
            var l = e[t]
              , o = l.event;
            l = l.listeners;
            e: {
                var n = void 0;
                if (a)
                    for (var i = l.length - 1; 0 <= i; i--) {
                        var r = l[i]
                          , s = r.instance
                          , g = r.currentTarget;
                        if (r = r.listener,
                        s !== n && o.isPropagationStopped())
                            break e;
                        n = r,
                        o.currentTarget = g;
                        try {
                            n(o)
                        } catch (S) {
                            Tn(S)
                        }
                        o.currentTarget = null,
                        n = s
                    }
                else
                    for (i = 0; i < l.length; i++) {
                        if (r = l[i],
                        s = r.instance,
                        g = r.currentTarget,
                        r = r.listener,
                        s !== n && o.isPropagationStopped())
                            break e;
                        n = r,
                        o.currentTarget = g;
                        try {
                            n(o)
                        } catch (S) {
                            Tn(S)
                        }
                        o.currentTarget = null,
                        n = s
                    }
            }
        }
    }
    function ee(e, a) {
        var t = a[$u];
        t === void 0 && (t = a[$u] = new Set);
        var l = e + "__bubble";
        t.has(l) || (pf(a, e, 2, !1),
        t.add(l))
    }
    function au(e, a, t) {
        var l = 0;
        a && (l |= 4),
        pf(t, e, l, a)
    }
    var zi = "_reactListening" + Math.random().toString(36).slice(2);
    function tu(e) {
        if (!e[zi]) {
            e[zi] = !0,
            ec.forEach(function(t) {
                t !== "selectionchange" && (Rb.has(t) || au(t, !1, e),
                au(t, !0, e))
            });
            var a = e.nodeType === 9 ? e : e.ownerDocument;
            a === null || a[zi] || (a[zi] = !0,
            au("selectionchange", !1, a))
        }
    }
    function pf(e, a, t, l) {
        switch (lp(a)) {
        case 2:
            var o = wh;
            break;
        case 8:
            o = xh;
            break;
        default:
            o = xu
        }
        t = o.bind(null, a, t, e),
        o = void 0,
        !cr || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (o = !0),
        l ? o !== void 0 ? e.addEventListener(a, t, {
            capture: !0,
            passive: o
        }) : e.addEventListener(a, t, !0) : o !== void 0 ? e.addEventListener(a, t, {
            passive: o
        }) : e.addEventListener(a, t, !1)
    }
    function lu(e, a, t, l, o) {
        var n = l;
        if ((a & 1) === 0 && (a & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var i = l.tag;
                if (i === 3 || i === 4) {
                    var r = l.stateNode.containerInfo;
                    if (r === o)
                        break;
                    if (i === 4)
                        for (i = l.return; i !== null; ) {
                            var s = i.tag;
                            if ((s === 3 || s === 4) && i.stateNode.containerInfo === o)
                                return;
                            i = i.return
                        }
                    for (; r !== null; ) {
                        if (i = Pt(r),
                        i === null)
                            return;
                        if (s = i.tag,
                        s === 5 || s === 6 || s === 26 || s === 27) {
                            l = n = i;
                            continue e
                        }
                        r = r.parentNode
                    }
                }
                l = l.return
            }
        fc(function() {
            var g = n
              , S = sr(t)
              , q = [];
            e: {
                var f = Yc.get(e);
                if (f !== void 0) {
                    var y = Rn
                      , N = e;
                    switch (e) {
                    case "keypress":
                        if (In(t) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        y = fg;
                        break;
                    case "focusin":
                        N = "focus",
                        y = pr;
                        break;
                    case "focusout":
                        N = "blur",
                        y = pr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = pr;
                        break;
                    case "click":
                        if (t.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = bc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = ag;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = yg;
                        break;
                    case Hc:
                    case Uc:
                    case Bc:
                        y = og;
                        break;
                    case Qc:
                        y = Sg;
                        break;
                    case "scroll":
                    case "scrollend":
                        y = Pp;
                        break;
                    case "wheel":
                        y = xg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = ig;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = yc;
                        break;
                    case "submit":
                        y = bg;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        y = Ag
                    }
                    var M = (a & 4) !== 0
                      , K = !M && (e === "scroll" || e === "scrollend")
                      , p = M ? f !== null ? f + "Capture" : null : f;
                    M = [];
                    for (var c = g, h; c !== null; ) {
                        var x = c;
                        if (h = x.stateNode,
                        x = x.tag,
                        x !== 5 && x !== 26 && x !== 27 || h === null || p === null || (x = So(c, p),
                        x != null && M.push(Po(c, x, h))),
                        K)
                            break;
                        c = c.return
                    }
                    0 < M.length && (f = new y(f,N,null,t,S),
                    q.push({
                        event: f,
                        listeners: M
                    }))
                }
            }
            if ((a & 7) === 0) {
                e: {
                    if (y = e === "mouseover" || e === "pointerover",
                    f = e === "mouseout" || e === "pointerout",
                    y && t !== rr && (N = t.relatedTarget || t.fromElement) && (Pt(N) || N[ql]))
                        break e;
                    (f || y) && (N = S.window === S ? S : (y = S.ownerDocument) ? y.defaultView || y.parentWindow : window,
                    f ? (y = t.relatedTarget || t.toElement,
                    f = g,
                    y = y ? Pt(y) : null,
                    y !== null && (K = O(y),
                    M = y.tag,
                    y !== K || M !== 5 && M !== 27 && M !== 6) && (y = null)) : (f = null,
                    y = g),
                    f !== y && (M = bc,
                    x = "onMouseLeave",
                    p = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (M = yc,
                    x = "onPointerLeave",
                    p = "onPointerEnter",
                    c = "pointer"),
                    K = f == null ? N : vo(f),
                    h = y == null ? N : vo(y),
                    N = new M(x,c + "leave",f,t,S),
                    N.target = K,
                    N.relatedTarget = h,
                    x = null,
                    Pt(S) === g && (M = new M(p,c + "enter",y,t,S),
                    M.target = h,
                    M.relatedTarget = K,
                    x = M),
                    K = x,
                    M = f && y ? Ke(f, y, zb) : null,
                    f !== null && gf(q, N, f, M, !1),
                    y !== null && K !== null && gf(q, K, y, M, !0)))
                }
                e: {
                    if (f = g ? vo(g) : window,
                    y = f.nodeName && f.nodeName.toLowerCase(),
                    y === "select" || y === "input" && f.type === "file")
                        var T = Ec;
                    else if (Ac(f))
                        if (Ic)
                            T = Mg;
                        else {
                            T = Tg;
                            var le = Cg
                        }
                    else
                        y = f.nodeName,
                        !y || y.toLowerCase() !== "input" || f.type !== "checkbox" && f.type !== "radio" ? g && ir(g.elementType) && (T = Ec) : T = jg;
                    if (T && (T = T(e, g))) {
                        _c(q, T, t, S);
                        break e
                    }
                    le && le(e, f, g)
                }
                switch (le = g ? vo(g) : window,
                e) {
                case "focusin":
                    (Ac(le) || le.contentEditable === "true") && (Tl = le,
                    wr = g,
                    No = null);
                    break;
                case "focusout":
                    No = wr = Tl = null;
                    break;
                case "mousedown":
                    xr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    xr = !1,
                    Oc(q, t, S);
                    break;
                case "selectionchange":
                    if (Dg)
                        break;
                case "keydown":
                case "keyup":
                    Oc(q, t, S)
                }
                var B;
                if (br)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var G = "onCompositionStart";
                            break e;
                        case "compositionend":
                            G = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            G = "onCompositionUpdate";
                            break e
                        }
                        G = void 0
                    }
                else
                    Cl ? xc(e, t) && (G = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (G = "onCompositionStart");
                G && (vc && t.locale !== "ko" && (Cl || G !== "onCompositionStart" ? G === "onCompositionEnd" && Cl && (B = pc()) : (Et = S,
                dr = "value" in Et ? Et.value : Et.textContent,
                Cl = !0)),
                le = Ci(g, G),
                0 < le.length && (G = new hc(G,e,null,t,S),
                q.push({
                    event: G,
                    listeners: le
                }),
                B ? G.data = B : (B = qc(t),
                B !== null && (G.data = B)))),
                (B = Eg ? Ig(e, t) : Ng(e, t)) && (G = Ci(g, "onBeforeInput"),
                0 < G.length && (le = new hc("onBeforeInput","beforeinput",null,t,S),
                q.push({
                    event: le,
                    listeners: G
                }),
                le.data = B)),
                Eb(q, e, g, t, S)
            }
            ff(q, a)
        })
    }
    function Po(e, a, t) {
        return {
            instance: e,
            listener: a,
            currentTarget: t
        }
    }
    function Ci(e, a) {
        for (var t = a + "Capture", l = []; e !== null; ) {
            var o = e
              , n = o.stateNode;
            if (o = o.tag,
            o !== 5 && o !== 26 && o !== 27 || n === null || (o = So(e, t),
            o != null && l.unshift(Po(e, o, n)),
            o = So(e, a),
            o != null && l.push(Po(e, o, n))),
            e.tag === 3)
                return l;
            e = e.return
        }
        return []
    }
    function zb(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function gf(e, a, t, l, o) {
        for (var n = a._reactName, i = []; t !== null && t !== l; ) {
            var r = t
              , s = r.alternate
              , g = r.stateNode;
            if (r = r.tag,
            s !== null && s === l)
                break;
            r !== 5 && r !== 26 && r !== 27 || g === null || (s = g,
            o ? (g = So(t, n),
            g != null && i.unshift(Po(t, g, s))) : o || (g = So(t, n),
            g != null && i.push(Po(t, g, s)))),
            t = t.return
        }
        i.length !== 0 && e.push({
            event: a,
            listeners: i
        })
    }
    var Cb = /\r\n?/g
      , Tb = /\u0000|\uFFFD/g;
    function bf(e) {
        return (typeof e == "string" ? e : "" + e).replace(Cb, `
`).replace(Tb, "")
    }
    function hf(e, a) {
        return a = bf(a),
        bf(e) === a
    }
    function ge(e, a, t, l, o, n) {
        switch (t) {
        case "children":
            if (typeof l == "string")
                a === "body" || a === "textarea" && l === "" || Nl(e, l);
            else if (typeof l == "number" || typeof l == "bigint")
                a !== "body" && Nl(e, "" + l);
            else
                return;
            break;
        case "className":
            An(e, "class", l);
            break;
        case "tabIndex":
            An(e, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            An(e, t, l);
            break;
        case "style":
            dc(e, l, n);
            return;
        case "data":
            if (a !== "object") {
                An(e, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (a !== "a" || t !== "href")) {
                e.removeAttribute(t);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                e.removeAttribute(t);
                break
            }
            l = _n(l),
            e.setAttribute(t, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                e.setAttribute(t, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (t === "formAction" ? (a !== "input" && ge(e, a, "name", o.name, o, null),
                ge(e, a, "formEncType", o.formEncType, o, null),
                ge(e, a, "formMethod", o.formMethod, o, null),
                ge(e, a, "formTarget", o.formTarget, o, null)) : (ge(e, a, "encType", o.encType, o, null),
                ge(e, a, "method", o.method, o, null),
                ge(e, a, "target", o.target, o, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                e.removeAttribute(t);
                break
            }
            l = _n(l),
            e.setAttribute(t, l);
            break;
        case "onClick":
            l != null && (e.onclick = Ka);
            return;
        case "onScroll":
            l != null && ee("scroll", e);
            return;
        case "onScrollEnd":
            l != null && ee("scrollend", e);
            return;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html" in l))
                    throw Error(m(61));
                if (t = l.__html,
                t != null) {
                    if (o.children != null)
                        throw Error(m(60));
                    (n != null ? n.__html : void 0) !== t && (e.innerHTML = t)
                }
            }
            break;
        case "multiple":
            e.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            e.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            t = _n(l),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(t, l) : e.removeAttribute(t);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "credentialless":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(t, "") : e.removeAttribute(t);
            break;
        case "capture":
        case "download":
            l === !0 ? e.setAttribute(t, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(t, l) : e.removeAttribute(t);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(t, l) : e.removeAttribute(t);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(t) : e.setAttribute(t, l);
            break;
        case "popover":
            ee("beforetoggle", e),
            ee("toggle", e),
            qn(e, "popover", l);
            break;
        case "xlinkActuate":
            ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            ut(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            ut(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            ut(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            ut(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            qn(e, "is", l);
            break;
        case "innerText":
        case "textContent":
            return;
        default:
            if (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N")
                t = $p.get(t) || t,
                qn(e, t, l);
            else
                return
        }
        se = !0
    }
    function ou(e, a, t, l, o, n) {
        switch (t) {
        case "style":
            dc(e, l, n);
            return;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html" in l))
                    throw Error(m(61));
                if (t = l.__html,
                t != null) {
                    if (o.children != null)
                        throw Error(m(60));
                    (n != null ? n.__html : void 0) !== t && (e.innerHTML = t)
                }
            }
            break;
        case "children":
            if (typeof l == "string")
                Nl(e, l);
            else if (typeof l == "number" || typeof l == "bigint")
                Nl(e, "" + l);
            else
                return;
            break;
        case "onScroll":
            l != null && ee("scroll", e);
            return;
        case "onScrollEnd":
            l != null && ee("scrollend", e);
            return;
        case "onClick":
            l != null && (e.onclick = Ka);
            return;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            return;
        case "innerText":
        case "textContent":
            return;
        default:
            if (!ac.hasOwnProperty(t))
                e: {
                    if (t[0] === "o" && t[1] === "n" && (o = t.endsWith("Capture"),
                    n = t.slice(2, o ? t.length - 7 : void 0),
                    a = e[sa] || null,
                    a = a != null ? a[t] : null,
                    typeof a == "function" && e.removeEventListener(n, a, o),
                    typeof l == "function")) {
                        typeof a != "function" && a !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)),
                        e.addEventListener(n, l, o);
                        break e
                    }
                    se = !0,
                    t in e ? e[t] = l : l === !0 ? e.setAttribute(t, "") : qn(e, t, l)
                }
            return
        }
        se = !0
    }
    function Xe(e, a, t) {
        switch (a) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            ee("error", e),
            ee("load", e);
            var l = !1, o = !1, n;
            for (n in t)
                if (t.hasOwnProperty(n)) {
                    var i = t[n];
                    if (i != null)
                        switch (n) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            o = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(m(137, a));
                        default:
                            ge(e, a, n, i, t, null)
                        }
                }
            o && ge(e, a, "srcSet", t.srcSet, t, null),
            l && ge(e, a, "src", t.src, t, null);
            return;
        case "input":
            ee("invalid", e);
            var r = n = i = o = null
              , s = null
              , g = null;
            for (l in t)
                if (t.hasOwnProperty(l)) {
                    var S = t[l];
                    if (S != null)
                        switch (l) {
                        case "name":
                            o = S;
                            break;
                        case "type":
                            i = S;
                            break;
                        case "checked":
                            s = S;
                            break;
                        case "defaultChecked":
                            g = S;
                            break;
                        case "value":
                            n = S;
                            break;
                        case "defaultValue":
                            r = S;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (S != null)
                                throw Error(m(137, a));
                            break;
                        default:
                            ge(e, a, l, S, t, null)
                        }
                }
            rc(e, n, r, s, g, i, o, !1);
            return;
        case "select":
            ee("invalid", e),
            l = i = n = null;
            for (o in t)
                if (t.hasOwnProperty(o) && (r = t[o],
                r != null))
                    switch (o) {
                    case "value":
                        n = r;
                        break;
                    case "defaultValue":
                        i = r;
                        break;
                    case "multiple":
                        l = r;
                    default:
                        ge(e, a, o, r, t, null)
                    }
            a = n,
            t = i,
            e.multiple = !!l,
            a != null ? Il(e, !!l, a, !1) : t != null && Il(e, !!l, t, !0);
            return;
        case "textarea":
            ee("invalid", e),
            n = o = l = null;
            for (i in t)
                if (t.hasOwnProperty(i) && (r = t[i],
                r != null))
                    switch (i) {
                    case "value":
                        l = r;
                        break;
                    case "defaultValue":
                        o = r;
                        break;
                    case "children":
                        n = r;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(m(91));
                        break;
                    default:
                        ge(e, a, i, r, t, null)
                    }
            uc(e, l, o, n);
            return;
        case "option":
            for (s in t)
                if (t.hasOwnProperty(s) && (l = t[s],
                l != null))
                    switch (s) {
                    case "selected":
                        e.selected = l && typeof l != "function" && typeof l != "symbol";
                        break;
                    default:
                        ge(e, a, s, l, t, null)
                    }
            return;
        case "dialog":
            ee("beforetoggle", e),
            ee("toggle", e),
            ee("cancel", e),
            ee("close", e);
            break;
        case "iframe":
        case "object":
            ee("load", e);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Wo.length; l++)
                ee(Wo[l], e);
            break;
        case "image":
            ee("error", e),
            ee("load", e);
            break;
        case "details":
            ee("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            ee("error", e),
            ee("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (g in t)
                if (t.hasOwnProperty(g) && (l = t[g],
                l != null))
                    switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(m(137, a));
                    default:
                        ge(e, a, g, l, t, null)
                    }
            return;
        default:
            if (ir(a)) {
                for (S in t)
                    t.hasOwnProperty(S) && (l = t[S],
                    l !== void 0 && ou(e, a, S, l, t, void 0));
                return
            }
        }
        for (r in t)
            t.hasOwnProperty(r) && (l = t[r],
            l != null && ge(e, a, r, l, t, null))
    }
    var jb = {};
    function Mb(e, a, t, l) {
        switch (a) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var o = null
              , n = null
              , i = null
              , r = null
              , s = null
              , g = null
              , S = null;
            for (y in t) {
                var q = t[y];
                if (t.hasOwnProperty(y) && q != null)
                    switch (y) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        s = q;
                    default:
                        l.hasOwnProperty(y) || ge(e, a, y, null, l, q)
                    }
            }
            for (var f in l) {
                var y = l[f];
                if (q = t[f],
                l.hasOwnProperty(f) && (y != null || q != null))
                    switch (f) {
                    case "type":
                        y !== q && (se = !0),
                        n = y;
                        break;
                    case "name":
                        y !== q && (se = !0),
                        o = y;
                        break;
                    case "checked":
                        y !== q && (se = !0),
                        g = y;
                        break;
                    case "defaultChecked":
                        y !== q && (se = !0),
                        S = y;
                        break;
                    case "value":
                        y !== q && (se = !0),
                        i = y;
                        break;
                    case "defaultValue":
                        y !== q && (se = !0),
                        r = y;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(m(137, a));
                        break;
                    default:
                        y !== q && ge(e, a, f, y, l, q)
                    }
            }
            or(e, i, r, s, g, S, n, o);
            return;
        case "select":
            y = i = r = f = null;
            for (n in t)
                if (s = t[n],
                t.hasOwnProperty(n) && s != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        y = s;
                    default:
                        l.hasOwnProperty(n) || ge(e, a, n, null, l, s)
                    }
            for (o in l)
                if (n = l[o],
                s = t[o],
                l.hasOwnProperty(o) && (n != null || s != null))
                    switch (o) {
                    case "value":
                        n !== s && (se = !0),
                        f = n;
                        break;
                    case "defaultValue":
                        n !== s && (se = !0),
                        r = n;
                        break;
                    case "multiple":
                        n !== s && (se = !0),
                        i = n;
                    default:
                        n !== s && ge(e, a, o, n, l, s)
                    }
            a = r,
            t = i,
            l = y,
            f != null ? Il(e, !!t, f, !1) : !!l != !!t && (a != null ? Il(e, !!t, a, !0) : Il(e, !!t, t ? [] : "", !1));
            return;
        case "textarea":
            y = f = null;
            for (r in t)
                if (o = t[r],
                t.hasOwnProperty(r) && o != null && !l.hasOwnProperty(r))
                    switch (r) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        ge(e, a, r, null, l, o)
                    }
            for (i in l)
                if (o = l[i],
                n = t[i],
                l.hasOwnProperty(i) && (o != null || n != null))
                    switch (i) {
                    case "value":
                        o !== n && (se = !0),
                        f = o;
                        break;
                    case "defaultValue":
                        o !== n && (se = !0),
                        y = o;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (o != null)
                            throw Error(m(91));
                        break;
                    default:
                        o !== n && ge(e, a, i, o, l, n)
                    }
            sc(e, f, y);
            return;
        case "option":
            for (var N in t)
                if (f = t[N],
                t.hasOwnProperty(N) && f != null && !l.hasOwnProperty(N))
                    switch (N) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        ge(e, a, N, null, l, f)
                    }
            for (s in l)
                if (f = l[s],
                y = t[s],
                l.hasOwnProperty(s) && f !== y && (f != null || y != null))
                    switch (s) {
                    case "selected":
                        f !== y && (se = !0),
                        e.selected = f && typeof f != "function" && typeof f != "symbol";
                        break;
                    default:
                        ge(e, a, s, f, l, y)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var M in t)
                f = t[M],
                t.hasOwnProperty(M) && f != null && !l.hasOwnProperty(M) && ge(e, a, M, null, l, f);
            for (g in l)
                if (f = l[g],
                y = t[g],
                l.hasOwnProperty(g) && f !== y && (f != null || y != null))
                    switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (f != null)
                            throw Error(m(137, a));
                        break;
                    default:
                        ge(e, a, g, f, l, y)
                    }
            return;
        default:
            if (ir(a)) {
                for (var K in t)
                    f = t[K],
                    t.hasOwnProperty(K) && f !== void 0 && !l.hasOwnProperty(K) && ou(e, a, K, void 0, l, f);
                for (S in l)
                    f = l[S],
                    y = t[S],
                    !l.hasOwnProperty(S) || f === y || f === void 0 && y === void 0 || ou(e, a, S, f, l, y);
                return
            }
        }
        for (var p in t)
            f = t[p],
            t.hasOwnProperty(p) && f != null && !l.hasOwnProperty(p) && ge(e, a, p, null, l, f);
        for (q in l)
            f = l[q],
            y = t[q],
            !l.hasOwnProperty(q) || f === y || f == null && y == null || ge(e, a, q, f, l, y)
    }
    function yf(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Ob() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, a = 0, t = performance.getEntriesByType("resource"), l = 0; l < t.length; l++) {
                var o = t[l]
                  , n = o.transferSize
                  , i = o.initiatorType
                  , r = o.duration;
                if (n && r && yf(i)) {
                    for (i = 0,
                    r = o.responseEnd,
                    l += 1; l < t.length; l++) {
                        var s = t[l]
                          , g = s.startTime;
                        if (g > r)
                            break;
                        var S = s.transferSize
                          , q = s.initiatorType;
                        S && yf(q) && (s = s.responseEnd,
                        i += S * (s < r ? 1 : (r - g) / (s - g)))
                    }
                    if (--l,
                    a += 8 * (n + i) / (o.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return a / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var nu = null
      , iu = null;
    function en(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function vf(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Sf(e, a) {
        if (e === 0)
            switch (a) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && a === "foreignObject" ? 0 : e
    }
    function wf(e, a, t, l) {
        return t = en(t).createElement(e),
        t[Qe] = l,
        t[sa] = a,
        Xe(t, e, a),
        Me(t),
        t
    }
    function ru(e, a) {
        return e === "textarea" || e === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null
    }
    var su = null;
    function Db() {
        var e = window.event;
        return e && e.type === "popstate" ? e === su ? !1 : (su = e,
        !0) : (su = null,
        !1)
    }
    var uu = typeof setTimeout == "function" ? setTimeout : void 0
      , Hb = typeof clearTimeout == "function" ? clearTimeout : void 0
      , xf = typeof Promise == "function" ? Promise : void 0
      , qf = typeof requestAnimationFrame == "function" ? requestAnimationFrame : uu
      , Ub = typeof queueMicrotask == "function" ? queueMicrotask : typeof xf < "u" ? function(e) {
        return xf.resolve(null).then(e).catch(Bb)
    }
    : uu;
    function Bb(e) {
        setTimeout(function() {
            throw e
        })
    }
    function kt(e) {
        return e === "head"
    }
    function Af(e, a) {
        var t = a
          , l = 0;
        do {
            var o = t.nextSibling;
            if (e.removeChild(t),
            o && o.nodeType === 8)
                if (t = o.data,
                t === "/$" || t === "/&") {
                    if (l === 0) {
                        e.removeChild(o),
                        mo(a);
                        return
                    }
                    l--
                } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
                    l++;
                else if (t === "html")
                    hu(e.ownerDocument.documentElement);
                else if (t === "head") {
                    t = e.ownerDocument.head,
                    hu(t);
                    for (var n = t.firstChild; n; ) {
                        var i = n.nextSibling
                          , r = n.nodeName;
                        n[yo] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && n.rel.toLowerCase() === "stylesheet" || t.removeChild(n),
                        n = i
                    }
                } else
                    t === "body" && hu(e.ownerDocument.body);
            t = o
        } while (t);
        mo(a)
    }
    function _f(e, a) {
        var t = e;
        e = 0;
        do {
            var l = t.nextSibling;
            if (t.nodeType === 1 ? a ? (t._stashedDisplay = t.style.display,
            t.style.display = "none") : (t.style.display = t._stashedDisplay || "",
            t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (a ? (t._stashedText = t.nodeValue,
            t.nodeValue = "") : t.nodeValue = t._stashedText || ""),
            l && l.nodeType === 8)
                if (t = l.data,
                t === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || e++;
            t = l
        } while (t)
    }
    function Ef(e, a, t) {
        if (a = CSS.escape(a) !== a ? "r-" + btoa(a).replace(/=/g, "") : a,
        e.style.viewTransitionName = a,
        t != null && (e.style.viewTransitionClass = t),
        t = getComputedStyle(e),
        t.display === "inline") {
            if (a = e.getClientRects(),
            a.length === 1)
                var l = 1;
            else
                for (var o = l = 0; o < a.length; o++) {
                    var n = a[o];
                    0 < n.width && 0 < n.height && l++
                }
            l === 1 && (e = e.style,
            e.display = a.length === 1 ? "inline-block" : "block",
            e.marginTop = "-" + t.paddingTop,
            e.marginBottom = "-" + t.paddingBottom)
        }
    }
    function If(e, a) {
        e = e.style,
        a = a.style;
        var t = a != null ? a.hasOwnProperty("viewTransitionName") ? a.viewTransitionName : a.hasOwnProperty("view-transition-name") ? a["view-transition-name"] : null : null;
        e.viewTransitionName = t == null || typeof t == "boolean" ? "" : ("" + t).trim(),
        t = a != null ? a.hasOwnProperty("viewTransitionClass") ? a.viewTransitionClass : a.hasOwnProperty("view-transition-class") ? a["view-transition-class"] : null : null,
        e.viewTransitionClass = t == null || typeof t == "boolean" ? "" : ("" + t).trim(),
        e.display === "inline-block" && (a == null ? e.display = e.margin = "" : (t = a.display,
        e.display = t == null || typeof t == "boolean" ? "" : t,
        t = a.margin,
        t != null ? e.margin = t : (t = a.hasOwnProperty("marginTop") ? a.marginTop : a["margin-top"],
        e.marginTop = t == null || typeof t == "boolean" ? "" : t,
        a = a.hasOwnProperty("marginBottom") ? a.marginBottom : a["margin-bottom"],
        e.marginBottom = a == null || typeof a == "boolean" ? "" : a)))
    }
    function Qb(e, a, t) {
        return t = t.ownerDocument.defaultView,
        {
            rect: e,
            abs: a.position === "absolute" || a.position === "fixed",
            clip: a.clipPath !== "none" || a.overflow !== "visible" || a.filter !== "none" || a.mask !== "none" || a.mask !== "none" || a.borderRadius !== "0px",
            view: 0 <= e.bottom && 0 <= e.right && e.top <= t.innerHeight && e.left <= t.innerWidth
        }
    }
    function cu(e) {
        var a = e.getBoundingClientRect()
          , t = getComputedStyle(e);
        return Qb(a, t, e)
    }
    function Yb(e) {
        return e.documentElement.clientHeight
    }
    function Lb(e) {
        this.addEventListener("load", e),
        this.addEventListener("error", e)
    }
    function Gb(e, a, t, l, o, n, i, r, s) {
        var g = a.nodeType === 9 ? a : a.ownerDocument;
        try {
            var S = g.startViewTransition({
                update: function() {
                    var f = g.defaultView
                      , y = f.navigation && f.navigation.transition
                      , N = g.fonts.status;
                    l();
                    var M = [];
                    if (N === "loaded" && (Yb(g),
                    g.fonts.status === "loading" && M.push(g.fonts.ready)),
                    N = M.length,
                    e !== null)
                        for (var K = e.suspenseyImages, p = 0, c = 0; c < K.length; c++) {
                            var h = K[c];
                            if (!h.complete) {
                                var x = h.getBoundingClientRect();
                                if (0 < x.bottom && 0 < x.right && x.top < f.innerHeight && x.left < f.innerWidth) {
                                    if (p += Ff(h),
                                    p > Mi) {
                                        M.length = N;
                                        break
                                    }
                                    h = new Promise(Lb.bind(h)),
                                    M.push(h)
                                }
                            }
                        }
                    if (0 < M.length)
                        return f = Promise.race([Promise.all(M), new Promise(function(T) {
                            return setTimeout(T, 500)
                        }
                        )]).then(o, o),
                        (y ? Promise.allSettled([y.finished, f]) : f).then(n, n);
                    if (o(),
                    y)
                        return y.finished.then(n, n);
                    n()
                },
                types: t
            });
            g.__reactViewTransition = S;
            var q = [];
            return S.ready.then(function() {
                for (var f = g.documentElement.getAnimations({
                    subtree: !0
                }), y = 0; y < f.length; y++) {
                    var N = f[y]
                      , M = N.effect
                      , K = M.pseudoElement;
                    if (K != null && K.startsWith("::view-transition")) {
                        q.push(N),
                        N = M.getKeyframes();
                        for (var p = K = void 0, c = !0, h = 0; h < N.length; h++) {
                            var x = N[h]
                              , T = x.width;
                            if (K === void 0)
                                K = T;
                            else if (K !== T) {
                                c = !1;
                                break
                            }
                            if (T = x.height,
                            p === void 0)
                                p = T;
                            else if (p !== T) {
                                c = !1;
                                break
                            }
                            delete x.width,
                            delete x.height,
                            x.transform === "none" && delete x.transform
                        }
                        c && K !== void 0 && p !== void 0 && (M.setKeyframes(N),
                        c = getComputedStyle(M.target, M.pseudoElement),
                        c.width !== K || c.height !== p) && (c = N[0],
                        c.width = K,
                        c.height = p,
                        c = N[N.length - 1],
                        c.width = K,
                        c.height = p,
                        M.setKeyframes(N))
                    }
                }
                i()
            }, function(f) {
                g.__reactViewTransition === S && (g.__reactViewTransition = null);
                try {
                    if (typeof f == "object" && f !== null)
                        switch (f.name) {
                        case "InvalidStateError":
                            (f.message === "View transition was skipped because document visibility state is hidden." || f.message === "Skipping view transition because document visibility state has become hidden." || f.message === "Skipping view transition because viewport size changed." || f.message === "Transition was aborted because of invalid state") && (f = null)
                        }
                    f !== null && s(f)
                } finally {
                    l(),
                    o(),
                    i()
                }
            }),
            S.finished.finally(function() {
                for (var f = 0; f < q.length; f++)
                    q[f].cancel();
                g.__reactViewTransition === S && (g.__reactViewTransition = null),
                r()
            }),
            S
        } catch {
            return l(),
            o(),
            i(),
            null
        }
    }
    function Sl(e, a) {
        this._scope = document.documentElement,
        this._selector = "::view-transition-" + e + "(" + a + ")"
    }
    Sl.prototype.animate = function(e, a) {
        return a = typeof a == "number" ? {
            duration: a
        } : $({}, a),
        a.pseudoElement = this._selector,
        this._scope.animate(e, a)
    }
    ,
    Sl.prototype.getAnimations = function() {
        for (var e = this._scope, a = this._selector, t = e.getAnimations({
            subtree: !0
        }), l = [], o = 0; o < t.length; o++) {
            var n = t[o].effect;
            n !== null && n.target === e && n.pseudoElement === a && l.push(t[o])
        }
        return l
    }
    ,
    Sl.prototype.getComputedStyle = function() {
        return getComputedStyle(this._scope, this._selector)
    }
    ;
    function Nf(e) {
        return {
            name: e,
            group: new Sl("group",e),
            imagePair: new Sl("image-pair",e),
            old: new Sl("old",e),
            new: new Sl("new",e)
        }
    }
    function Ia(e) {
        this._fragmentFiber = e,
        this._observers = this._eventListeners = null
    }
    Ia.prototype.addEventListener = function(e, a, t) {
        var l = null
          , o = null;
        if (!(t != null && typeof t != "boolean" && (l = t.signal || null,
        l !== null && l.aborted))) {
            this._eventListeners === null && (this._eventListeners = []);
            var n = this._eventListeners;
            if (zf(n, e, a, t) === -1) {
                var i = this
                  , r = a;
                t != null && typeof t != "boolean" && t.once === !0 && (r = function(s) {
                    i.removeEventListener(e, a, t),
                    typeof a == "function" ? a.call(this, s) : a.handleEvent(s)
                }
                ),
                l !== null && (o = i.removeEventListener.bind(i, e, a, t),
                l.addEventListener("abort", o, {
                    once: !0
                }),
                o = l.removeEventListener.bind(l, "abort", o)),
                l = no(t),
                n.push({
                    type: e,
                    listener: a,
                    optionsOrUseCapture: t,
                    attachedListener: r,
                    cleanup: o
                }),
                w(this._fragmentFiber.child, !1, Zb, e, r, l)
            }
            this._eventListeners = n
        }
    }
    ;
    function Zb(e, a, t, l) {
        return Z(e).addEventListener(a, t, l),
        !1
    }
    Ia.prototype.removeEventListener = function(e, a, t) {
        var l = this._eventListeners;
        if (l !== null && (a = zf(l, e, a, t),
        a !== -1)) {
            var o = l[a];
            t = o.attachedListener;
            var n = o.cleanup;
            o = no(o.optionsOrUseCapture),
            w(this._fragmentFiber.child, !1, Xb, e, t, o),
            l.splice(a, 1),
            n !== null && n()
        }
    }
    ;
    function Xb(e, a, t, l) {
        return Z(e).removeEventListener(a, t, l),
        !1
    }
    function no(e) {
        return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? {
            capture: e.capture,
            passive: e.passive
        } : e
    }
    function Rf(e) {
        return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0")
    }
    function zf(e, a, t, l) {
        if (e.length === 0)
            return -1;
        l = Rf(l);
        for (var o = 0; o < e.length; o++) {
            var n = e[o];
            if (n.type === a && n.listener === t && Rf(n.optionsOrUseCapture) === l)
                return o
        }
        return -1
    }
    Ia.prototype.dispatchEvent = function(e) {
        var a = L(this._fragmentFiber);
        if (a === null)
            return !0;
        a = Z(a);
        var t = this._eventListeners;
        if (t !== null && 0 < t.length || !e.bubbles) {
            var l = a.nodeType === 9 ? a.createComment("") : document.createTextNode("");
            if (t)
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    l.addEventListener(n.type, n.attachedListener, no(n.optionsOrUseCapture))
                }
            if (a.appendChild(l),
            e = l.dispatchEvent(e),
            t)
                for (o = 0; o < t.length; o++)
                    n = t[o],
                    l.removeEventListener(n.type, n.attachedListener, no(n.optionsOrUseCapture));
            return a.removeChild(l),
            e
        }
        return a.dispatchEvent(e)
    }
    ,
    Ia.prototype.focus = function(e) {
        w(this._fragmentFiber.child, !0, Cf, e, void 0, void 0)
    }
    ;
    function Cf(e, a) {
        return e.tag === 6 ? !1 : (e = Z(e),
        lh(e, a))
    }
    Ia.prototype.focusLast = function(e) {
        var a = [];
        w(this._fragmentFiber.child, !0, du, a, void 0, void 0);
        for (var t = a.length - 1; 0 <= t && !Cf(a[t], e); t--)
            ;
    }
    ;
    function du(e, a) {
        return a.push(e),
        !1
    }
    Ia.prototype.blur = function() {
        var e = L(this._fragmentFiber);
        e !== null && (e = Z(e),
        e = en(e).activeElement,
        e !== null && w(this._fragmentFiber.child, !1, kb, e, void 0, void 0))
    }
    ;
    function kb(e, a) {
        return e.tag === 6 ? !1 : (e = Z(e),
        e === a || e.contains(a) ? (a.blur(),
        !0) : !1)
    }
    Ia.prototype.observeUsing = function(e) {
        this._observers === null && (this._observers = new Set),
        this._observers.add(e),
        w(this._fragmentFiber.child, !1, Vb, e, void 0, void 0)
    }
    ;
    function Vb(e, a) {
        return e.tag === 6 || (e = Z(e),
        a.observe(e)),
        !1
    }
    Ia.prototype.unobserveUsing = function(e) {
        var a = this._observers;
        if (a !== null && a.has(e)) {
            a.delete(e),
            w(this._fragmentFiber.child, !1, Fb, e, void 0, void 0);
            for (var t = a = 0; t < Ga.length; t++) {
                var l = Ga[t];
                l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : Ga[a++] = l
            }
            Ga.length = a
        }
    }
    ;
    function Fb(e, a) {
        return e.tag === 6 || (e = Z(e),
        a.unobserve(e)),
        !1
    }
    var Ga = []
      , mu = !1;
    function Kb(e, a, t) {
        Ga.push({
            fragmentInstance: e,
            observer: a,
            instance: t
        }),
        mu || (mu = !0,
        oh(function() {
            mu = !1;
            var l = Ga;
            Ga = [];
            for (var o = 0; o < l.length; o++) {
                var n = l[o];
                n.observer.unobserve(n.instance)
            }
        }))
    }
    Ia.prototype.getClientRects = function() {
        var e = [];
        return w(this._fragmentFiber.child, !1, Jb, e, void 0, void 0),
        e
    }
    ;
    function Jb(e, a) {
        if (e.tag === 6) {
            e = e.stateNode;
            var t = e.ownerDocument.createRange();
            t.selectNodeContents(e),
            a.push.apply(a, t.getClientRects())
        } else
            e = Z(e),
            a.push.apply(a, e.getClientRects());
        return !1
    }
    Ia.prototype.getRootNode = function(e) {
        var a = L(this._fragmentFiber);
        return a === null ? this : Z(a).getRootNode(e)
    }
    ,
    Ia.prototype.compareDocumentPosition = function(e) {
        var a = L(this._fragmentFiber);
        if (a === null)
            return Node.DOCUMENT_POSITION_DISCONNECTED;
        var t = [];
        w(this._fragmentFiber.child, !1, du, t, void 0, void 0);
        var l = Z(a);
        if (t.length === 0) {
            if (t = l,
            qe(this._fragmentFiber)) {
                e: {
                    for (a = this._fragmentFiber.return; a !== null; ) {
                        if (a.tag === 4) {
                            a = a.stateNode.containerInfo;
                            break e
                        }
                        if (a.tag === 3 || a.tag === 5 || a.tag === 27)
                            break;
                        a = a.return
                    }
                    a = null
                }
                a != null && (t = a)
            }
            a = this._fragmentFiber;
            var o = l = t.compareDocumentPosition(e);
            return t === e ? o = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (t = ea(a)[1],
            t === null ? o = Node.DOCUMENT_POSITION_PRECEDING : (e = Z(t).compareDocumentPosition(e),
            o = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)),
            o |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        }
        a = Z(t[0]),
        o = Z(t[t.length - 1]);
        var n = qe(this._fragmentFiber) ? a.parentElement : l;
        if (n == null)
            return Node.DOCUMENT_POSITION_DISCONNECTED;
        l = n.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY,
        n = n.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY;
        var i = a.compareDocumentPosition(e)
          , r = o.compareDocumentPosition(e)
          , s = i & Node.DOCUMENT_POSITION_CONTAINED_BY || r & Node.DOCUMENT_POSITION_CONTAINED_BY;
        return r = l && n && i & Node.DOCUMENT_POSITION_FOLLOWING && r & Node.DOCUMENT_POSITION_PRECEDING,
        a = l && a === e || n && o === e || s || r ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && a === e || !n && o === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i,
        a & Node.DOCUMENT_POSITION_DISCONNECTED || a & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || $b(a, this._fragmentFiber, t[0], t[t.length - 1], e) ? a : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    }
    ;
    function $b(e, a, t, l, o) {
        var n = Pt(o);
        if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            if (t = !!n)
                e: {
                    for (; n !== null; ) {
                        if (n.tag === 7 && (n === a || n.alternate === a)) {
                            t = !0;
                            break e
                        }
                        n = n.return
                    }
                    t = !1
                }
            return t
        }
        if (e & Node.DOCUMENT_POSITION_CONTAINS) {
            if (n === null)
                return n = o.ownerDocument,
                o === n || o === n.documentElement || o === n.body;
            e: {
                for (n = a,
                a = L(a); n !== null; ) {
                    if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== a && n.alternate !== a)) {
                        n = !0;
                        break e
                    }
                    n = n.return
                }
                n = !1
            }
            return n
        }
        return e & Node.DOCUMENT_POSITION_PRECEDING ? ((a = !!n) && !(a = n === t) && (a = Ke(t, n, ga),
        a === null ? a = !1 : (w(a, !0, Xa, n, t),
        n = Ne,
        Ne = null,
        a = n !== null)),
        a) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((a = !!n) && !(a = n === l) && (a = Ke(l, n, ga),
        a === null ? a = !1 : (w(a, !0, pa, n, l),
        n = Ne,
        Fe = Ne = null,
        a = n !== null)),
        a) : !1
    }
    function Tf(e, a) {
        var t = e.ownerDocument.createRange();
        t.selectNodeContents(e),
        e = t.getBoundingClientRect(),
        window.scrollTo(window.scrollX + e.left, a ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight)
    }
    Ia.prototype.scrollIntoView = function(e) {
        if (typeof e == "object")
            throw Error(m(566));
        var a = [];
        w(this._fragmentFiber.child, !1, du, a, void 0, void 0);
        var t = e !== !1;
        if (a.length === 0) {
            var l = ea(this._fragmentFiber);
            if (l = t ? l[1] || l[0] || L(this._fragmentFiber) : l[0] || l[1],
            l === null)
                return;
            if (l.tag === 6) {
                e = Z(l),
                Tf(e, t);
                return
            }
            if (l = Z(l),
            l.nodeType !== 9) {
                if (l.nodeType === 11) {
                    t = "host" in l ? l.host : null,
                    t !== null && t.scrollIntoView(e);
                    return
                }
                l.scrollIntoView(e)
            }
        }
        for (l = t ? a.length - 1 : 0; l !== (t ? -1 : a.length); ) {
            var o = a[l];
            o.tag === 6 ? (o = Z(o),
            Tf(o, t)) : Z(o).scrollIntoView(e),
            l += t ? -1 : 1
        }
    }
    ;
    function Wb(e, a) {
        return e = Z(e),
        jf(e, a),
        !1
    }
    function jf(e, a) {
        e.reactFragments == null && (e.reactFragments = new Set),
        e.reactFragments.add(a)
    }
    function Mf(e, a) {
        var t = a._eventListeners;
        if (t !== null)
            for (var l = 0; l < t.length; l++) {
                var o = t[l];
                e.addEventListener(o.type, o.attachedListener, no(o.optionsOrUseCapture))
            }
        e.nodeType !== 3 && (t = a._observers,
        t !== null && t.forEach(function(n) {
            for (var i = 0, r = 0; r < Ga.length; r++) {
                var s = Ga[r];
                (s.fragmentInstance !== a || s.observer !== n || s.instance !== e) && (Ga[i++] = s)
            }
            Ga.length = i,
            n.observe(e)
        }),
        jf(e, a))
    }
    function Pb(e, a) {
        var t = a._eventListeners;
        if (t !== null)
            for (var l = 0; l < t.length; l++) {
                var o = t[l];
                e.removeEventListener(o.type, o.attachedListener, no(o.optionsOrUseCapture))
            }
        e.nodeType !== 3 && (t = a._observers,
        t !== null && t.forEach(function(n) {
            typeof n.rootMargin == "string" ? Kb(a, n, e) : n.unobserve(e)
        }),
        e.reactFragments != null && e.reactFragments.delete(a))
    }
    function fu(e) {
        var a = e.firstChild;
        for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
            var t = a;
            switch (a = a.nextSibling,
            t.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                fu(t),
                xn(t);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (t.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(t)
        }
    }
    function eh(e, a, t, l) {
        for (; e.nodeType === 1; ) {
            var o = t;
            if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (l) {
                if (!e[yo])
                    switch (a) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (n = e.getAttribute("rel"),
                        n === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (n !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (n = e.getAttribute("src"),
                        (n !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && n && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (a === "input" && e.type === "hidden") {
                var n = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && e.getAttribute("name") === n)
                    return e
            } else
                return e;
            if (e = Oa(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function ah(e, a, t) {
        if (a === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Oa(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Of(e, a) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Oa(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function pu(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function gu(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function th(e, a) {
        var t = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = a;
        else if (e.data !== "$?" || t.readyState !== "loading")
            a();
        else {
            var l = function() {
                a(),
                t.removeEventListener("DOMContentLoaded", l)
            };
            t.addEventListener("DOMContentLoaded", l),
            e._reactRetry = l
        }
    }
    function Oa(e) {
        for (; e != null; e = e.nextSibling) {
            var a = e.nodeType;
            if (a === 1 || a === 3)
                break;
            if (a === 8) {
                if (a = e.data,
                a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&" || a === "F!" || a === "F")
                    break;
                if (a === "/$" || a === "/&")
                    return null
            }
        }
        return e
    }
    var bu = null;
    function Df(e) {
        e = e.nextSibling;
        for (var a = 0; e; ) {
            if (e.nodeType === 8) {
                var t = e.data;
                if (t === "/$" || t === "/&") {
                    if (a === 0)
                        return Oa(e.nextSibling);
                    a--
                } else
                    t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || a++
            }
            e = e.nextSibling
        }
        return null
    }
    function Hf(e) {
        e = e.previousSibling;
        for (var a = 0; e; ) {
            if (e.nodeType === 8) {
                var t = e.data;
                if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
                    if (a === 0)
                        return e;
                    a--
                } else
                    t !== "/$" && t !== "/&" || a++
            }
            e = e.previousSibling
        }
        return null
    }
    function lh(e, a) {
        function t() {
            l = !0
        }
        if (e.ownerDocument.activeElement === e)
            return !0;
        var l = !1;
        try {
            e.ownerDocument.addEventListener("focus", t, !0),
            (e.focus || HTMLElement.prototype.focus).call(e, a)
        } finally {
            e.ownerDocument.removeEventListener("focus", t, !0)
        }
        return l
    }
    function oh(e) {
        qf(function() {
            qf(function(a) {
                return e(a)
            })
        })
    }
    function Uf(e, a, t) {
        switch (a = en(t),
        e) {
        case "html":
            if (e = a.documentElement,
            !e)
                throw Error(m(452));
            return e;
        case "head":
            if (e = a.head,
            !e)
                throw Error(m(453));
            return e;
        case "body":
            if (e = a.body,
            !e)
                throw Error(m(454));
            return e;
        default:
            throw Error(m(451))
        }
    }
    function Bf(e, a, t) {
        for (var l in t) {
            var o = t[l];
            t.hasOwnProperty(l) && o != null && ge(e, a, l, null, jb, o)
        }
        t.dangerouslySetInnerHTML != null && (e.textContent = ""),
        e.onclick === Ka && (e.onclick = null),
        xn(e)
    }
    function hu(e) {
        for (var a = e.attributes; a.length; )
            e.removeAttributeNode(a[0]);
        xn(e)
    }
    var Da = new Map
      , Qf = new Set;
    function an(e) {
        if (typeof e.getRootNode == "function") {
            var a = e.getRootNode();
            if (a.nodeType === 9 || a.nodeType === 11)
                return a
        }
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    var xt = k.d;
    k.d = {
        f: nh,
        r: ih,
        D: rh,
        C: sh,
        L: uh,
        m: ch,
        X: mh,
        S: dh,
        M: fh
    };
    function nh() {
        var e = xt.f()
          , a = _i();
        return e || a
    }
    function ih(e) {
        var a = Al(e);
        a !== null && a.tag === 5 && a.type === "form" ? Yd(a) : xt.r(e)
    }
    var io = typeof document > "u" ? null : document;
    function Yf(e, a, t) {
        var l = io;
        if (l && typeof a == "string" && a) {
            var o = Na(a);
            o = 'link[rel="' + e + '"][href="' + o + '"]',
            typeof t == "string" && (o += '[crossorigin="' + t + '"]'),
            Qf.has(o) || (Qf.add(o),
            e = {
                rel: e,
                crossOrigin: t,
                href: a
            },
            l.querySelector(o) === null && (a = l.createElement("link"),
            Xe(a, "link", e),
            Me(a),
            l.head.appendChild(a)))
        }
    }
    function rh(e) {
        xt.D(e),
        Yf("dns-prefetch", e, null)
    }
    function sh(e, a) {
        xt.C(e, a),
        Yf("preconnect", e, a)
    }
    function uh(e, a, t) {
        xt.L(e, a, t);
        var l = io;
        if (l && e && a) {
            var o = 'link[rel="preload"][as="' + Na(a) + '"]';
            a === "image" && t && t.imageSrcSet ? (o += '[imagesrcset="' + Na(t.imageSrcSet) + '"]',
            typeof t.imageSizes == "string" && (o += '[imagesizes="' + Na(t.imageSizes) + '"]')) : o += '[href="' + Na(e) + '"]';
            var n = o;
            switch (a) {
            case "style":
                n = ro(e);
                break;
            case "script":
                n = so(e)
            }
            if (!(Da.has(n) || (e = $({
                rel: "preload",
                href: a === "image" && t && t.imageSrcSet ? void 0 : e,
                as: a
            }, t),
            Da.set(n, e),
            l.querySelector(o) !== null || a === "style" && l.querySelector(tn(n)) || a === "script" && l.querySelector(ln(n))))) {
                var i = l.createElement("link");
                Xe(i, "link", e),
                a === "style" && (i[wn] = !0,
                i.onload = i.onerror = function() {
                    Pu(i)
                }
                ),
                Me(i),
                l.head.appendChild(i)
            }
        }
    }
    function ch(e, a) {
        xt.m(e, a);
        var t = io;
        if (t && e) {
            var l = a && typeof a.as == "string" ? a.as : "script"
              , o = 'link[rel="modulepreload"][as="' + Na(l) + '"][href="' + Na(e) + '"]'
              , n = o;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = so(e)
            }
            if (!Da.has(n) && (e = $({
                rel: "modulepreload",
                href: e
            }, a),
            Da.set(n, e),
            t.querySelector(o) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (t.querySelector(ln(n)))
                        return
                }
                l = t.createElement("link"),
                Xe(l, "link", e),
                Me(l),
                t.head.appendChild(l)
            }
        }
    }
    function dh(e, a, t) {
        xt.S(e, a, t);
        var l = io;
        if (l && e) {
            var o = _l(l).hoistableStyles
              , n = ro(e);
            a = a || "default";
            var i = o.get(n);
            if (!i) {
                var r = {
                    loading: 0,
                    preload: null
                };
                if (i = l.querySelector(tn(n)))
                    r.loading = 5;
                else {
                    e = $({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": a
                    }, t),
                    (t = Da.get(n)) && yu(e, t);
                    var s = i = l.createElement("link");
                    Me(s),
                    Xe(s, "link", e),
                    s._p = new Promise(function(g, S) {
                        s.onload = g,
                        s.onerror = S
                    }
                    ),
                    s.addEventListener("load", function() {
                        r.loading |= 1
                    }),
                    s.addEventListener("error", function() {
                        r.loading |= 2
                    }),
                    r.loading |= 4,
                    Ti(i, a, l)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: r
                },
                o.set(n, i)
            }
        }
    }
    function mh(e, a) {
        xt.X(e, a);
        var t = io;
        if (t && e) {
            var l = _l(t).hoistableScripts
              , o = so(e)
              , n = l.get(o);
            n || (n = t.querySelector(ln(o)),
            n || (e = $({
                src: e,
                async: !0
            }, a),
            (a = Da.get(o)) && vu(e, a),
            n = t.createElement("script"),
            Me(n),
            Xe(n, "link", e),
            t.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            l.set(o, n))
        }
    }
    function fh(e, a) {
        xt.M(e, a);
        var t = io;
        if (t && e) {
            var l = _l(t).hoistableScripts
              , o = so(e)
              , n = l.get(o);
            n || (n = t.querySelector(ln(o)),
            n || (e = $({
                src: e,
                async: !0,
                type: "module"
            }, a),
            (a = Da.get(o)) && vu(e, a),
            n = t.createElement("script"),
            Me(n),
            Xe(n, "link", e),
            t.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            l.set(o, n))
        }
    }
    function Lf(e, a, t, l) {
        var o = (o = qt.current) ? an(o) : null;
        if (!o)
            throw Error(m(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof t.precedence == "string" && typeof t.href == "string" ? (t = ro(t.href),
            a = _l(o).hoistableStyles,
            l = a.get(t),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
                e = ro(t.href);
                var n = _l(o).hoistableStyles
                  , i = n.get(e);
                if (i || (o = o.ownerDocument || o,
                i = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                n.set(e, i),
                (n = o.querySelector(tn(e))) ? n._p || (i.instance = n,
                i.state.loading = 5) : (n = Da.get(e),
                n || (n = {
                    rel: "preload",
                    as: "style",
                    href: t.href,
                    crossOrigin: t.crossOrigin,
                    integrity: t.integrity,
                    media: t.media,
                    hrefLang: t.hrefLang,
                    referrerPolicy: t.referrerPolicy
                },
                Da.set(e, n)),
                ph(o, e, n, i.state))),
                a && l === null)
                    throw Error(m(528, ""));
                return i
            }
            if (a && l !== null)
                throw Error(m(529, ""));
            return null;
        case "script":
            return a = t.async,
            t = t.src,
            typeof t == "string" && a && typeof a != "function" && typeof a != "symbol" ? (t = so(t),
            a = _l(o).hoistableScripts,
            l = a.get(t),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(m(444, e))
        }
    }
    function ro(e) {
        return 'href="' + Na(e) + '"'
    }
    function tn(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Gf(e) {
        return $({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function ph(e, a, t, l) {
        if (a = e.querySelector('link[rel="preload"][as="style"][' + a + "]")) {
            if (a[wn] !== !0) {
                l.loading = 1;
                return
            }
        } else
            a = e.createElement("link"),
            a[wn] = !0,
            a.onload = a.onerror = Pu.bind(null, a),
            Xe(a, "link", t),
            Me(a),
            e.head.appendChild(a);
        l.preload = a,
        a.addEventListener("load", function() {
            return l.loading |= 1
        }),
        a.addEventListener("error", function() {
            return l.loading |= 2
        })
    }
    function so(e) {
        return '[src="' + Na(e) + '"]'
    }
    function ln(e) {
        return "script[async]" + e
    }
    function Zf(e, a, t) {
        if (a.count++,
        a.instance === null)
            switch (a.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + Na(t.href) + '"]');
                if (l)
                    return a.instance = l,
                    Me(l),
                    l;
                var o = $({}, t, {
                    "data-href": t.href,
                    "data-precedence": t.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"),
                Me(l),
                Xe(l, "style", o),
                Ti(l, t.precedence, e),
                a.instance = l;
            case "stylesheet":
                o = ro(t.href);
                var n = e.querySelector(tn(o));
                if (n)
                    return a.state.loading |= 4,
                    a.instance = n,
                    Me(n),
                    n;
                l = Gf(t),
                (o = Da.get(o)) && yu(l, o),
                n = (e.ownerDocument || e).createElement("link"),
                Me(n);
                var i = n;
                return i._p = new Promise(function(r, s) {
                    i.onload = r,
                    i.onerror = s
                }
                ),
                Xe(n, "link", l),
                a.state.loading |= 4,
                Ti(n, t.precedence, e),
                a.instance = n;
            case "script":
                return n = so(t.src),
                (o = e.querySelector(ln(n))) ? (a.instance = o,
                Me(o),
                o) : (l = t,
                (o = Da.get(n)) && (l = $({}, t),
                vu(l, o)),
                e = e.ownerDocument || e,
                o = e.createElement("script"),
                Me(o),
                Xe(o, "link", l),
                e.head.appendChild(o),
                a.instance = o);
            case "void":
                return null;
            default:
                throw Error(m(443, a.type))
            }
        else
            a.type === "stylesheet" && (a.state.loading & 4) === 0 && (l = a.instance,
            a.state.loading |= 4,
            Ti(l, t.precedence, e));
        return a.instance
    }
    function Ti(e, a, t) {
        for (var l = t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = l.length ? l[l.length - 1] : null, n = o, i = 0; i < l.length; i++) {
            var r = l[i];
            if (r.dataset.precedence === a)
                n = r;
            else if (n !== o)
                break
        }
        n ? n.parentNode.insertBefore(e, n.nextSibling) : (a = t.nodeType === 9 ? t.head : t,
        a.insertBefore(e, a.firstChild))
    }
    function yu(e, a) {
        e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
        e.title == null && (e.title = a.title)
    }
    function vu(e, a) {
        e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
        e.integrity == null && (e.integrity = a.integrity)
    }
    var ji = null;
    function Xf(e, a, t) {
        if (ji === null) {
            var l = new Map
              , o = ji = new Map;
            o.set(t, l)
        } else
            o = ji,
            l = o.get(t),
            l || (l = new Map,
            o.set(t, l));
        if (l.has(e))
            return l;
        for (l.set(e, null),
        t = t.getElementsByTagName(e),
        o = 0; o < t.length; o++) {
            var n = t[o];
            if (!(n[yo] || n[Qe] || e === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(a) || "";
                i = e + i;
                var r = l.get(i);
                r ? r.push(n) : l.set(i, [n])
            }
        }
        return l
    }
    function Su(e, a, t) {
        e = e.ownerDocument || e,
        e.head.insertBefore(t, a === "title" ? e.querySelector("head > title") : null)
    }
    function gh(e, a, t) {
        if (t === 1 || a.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
                break;
            return !0;
        case "link":
            if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
                break;
            switch (a.rel) {
            case "stylesheet":
                return e = a.disabled,
                typeof a.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
                return !0
        }
        return !1
    }
    function kf(e, a) {
        return e === "img" && a.src != null && a.src !== "" && a.onLoad == null && a.loading !== "lazy"
    }
    function Vf(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function Ff(e) {
        return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25
    }
    function Kf(e, a) {
        typeof a.decode == "function" && (e.imgCount++,
        a.complete || (e.imgBytes += Ff(a),
        e.suspenseyImages.push(a)),
        e = yh.bind(e),
        a.decode().then(e, e))
    }
    function bh(e, a, t, l) {
        if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var o = ro(l.href)
                  , n = a.querySelector(tn(o));
                if (n) {
                    a = n._p,
                    a !== null && typeof a == "object" && typeof a.then == "function" && (e.count++,
                    e = on.bind(e),
                    a.then(e, e)),
                    t.state.loading |= 4,
                    t.instance = n,
                    Me(n);
                    return
                }
                n = a.ownerDocument || a,
                l = Gf(l),
                (o = Da.get(o)) && yu(l, o),
                n = n.createElement("link"),
                Me(n);
                var i = n;
                i._p = new Promise(function(r, s) {
                    i.onload = r,
                    i.onerror = s
                }
                ),
                Xe(n, "link", l),
                t.instance = n
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(t, a),
            (a = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++,
            t = on.bind(e),
            a.addEventListener("load", t),
            a.addEventListener("error", t))
        }
    }
    var Mi = 0;
    function hh(e, a) {
        return e.stylesheets && e.count === 0 && Di(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(t) {
            var l = setTimeout(function() {
                if (e.stylesheets && Di(e, e.stylesheets),
                e.unsuspend) {
                    var n = e.unsuspend;
                    e.unsuspend = null,
                    n()
                }
            }, 6e4 + a);
            0 < e.imgBytes && Mi === 0 && (Mi = 62500 * Ob());
            var o = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && Di(e, e.stylesheets),
                e.unsuspend)) {
                    var n = e.unsuspend;
                    e.unsuspend = null,
                    n()
                }
            }, (e.imgBytes > Mi ? 50 : 800) + a);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(l),
                clearTimeout(o)
            }
        }
        : null
    }
    function Jf(e) {
        if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
            if (e.stylesheets)
                Di(e, e.stylesheets);
            else if (e.unsuspend) {
                var a = e.unsuspend;
                e.unsuspend = null,
                a()
            }
        }
    }
    function on() {
        this.count--,
        Jf(this)
    }
    function yh() {
        this.imgCount--,
        Jf(this)
    }
    var Oi = null;
    function Di(e, a) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Oi = new Map,
        a.forEach(vh, e),
        Oi = null,
        on.call(e))
    }
    function vh(e, a) {
        if (!(a.state.loading & 4)) {
            var t = Oi.get(e);
            if (t)
                var l = t.get(null);
            else {
                t = new Map,
                Oi.set(e, t);
                for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < o.length; n++) {
                    var i = o[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (t.set(i.dataset.precedence, i),
                    l = i)
                }
                l && t.set(null, l)
            }
            o = a.instance,
            i = o.getAttribute("data-precedence"),
            n = t.get(i) || l,
            n === l && t.set(null, o),
            t.set(i, o),
            this.count++,
            l = on.bind(this),
            o.addEventListener("load", l),
            o.addEventListener("error", l),
            n ? n.parentNode.insertBefore(o, n.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(o, e.firstChild)),
            a.state.loading |= 4
        }
    }
    var uo = {
        $$typeof: Ae,
        Provider: null,
        Consumer: null,
        _currentValue: rt,
        _currentValue2: rt,
        _threadCount: 0
    };
    function Sh(e, a, t, l, o, n, i, r, s) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = er(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = er(0),
        this.hiddenUpdates = er(null),
        this.identifierPrefix = l,
        this.onUncaughtError = o,
        this.onCaughtError = n,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = s,
        this.transitionTypes = null,
        this.incompleteTransitions = new Map
    }
    function $f(e, a, t, l, o, n, i, r, s, g, S, q) {
        return e = new Sh(e,a,t,i,s,g,S,q,r),
        a = 1,
        n === !0 && (a |= 24),
        n = ua(3, null, null, a),
        e.current = n,
        n.stateNode = e,
        a = Or(),
        a.refCount++,
        e.pooledCache = a,
        a.refCount++,
        n.memoizedState = {
            element: l,
            isDehydrated: t,
            cache: a
        },
        Br(n),
        e
    }
    function Wf(e) {
        return e ? (e = Ol,
        e) : Ol
    }
    function Pf(e, a, t, l, o, n) {
        o = Wf(o),
        l.context === null ? l.context = o : l.pendingContext = o,
        l = Mt(a),
        l.payload = {
            element: t
        },
        n = n === void 0 ? null : n,
        n !== null && (l.callback = n),
        t = Ot(e, l, a),
        t !== null && (fa(t, e, a),
        Oo(t, e, a))
    }
    function ep(e, a) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var t = e.retryLane;
            e.retryLane = t !== 0 && t < a ? t : a
        }
    }
    function wu(e, a) {
        ep(e, a),
        (e = e.alternate) && ep(e, a)
    }
    function ap(e) {
        if (e.tag === 13 || e.tag === 31) {
            var a = ll(e, 67108864);
            a !== null && fa(a, e, 67108864),
            wu(e, 67108864)
        }
    }
    function tp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var a = Ea();
            a = ar(a);
            var t = ll(e, a);
            t !== null && fa(t, e, a),
            wu(e, a)
        }
    }
    var co = !0;
    function wh(e, a, t, l) {
        var o = H.T;
        H.T = null;
        var n = k.p;
        try {
            k.p = 2,
            xu(e, a, t, l)
        } finally {
            k.p = n,
            H.T = o
        }
    }
    function xh(e, a, t, l) {
        var o = H.T;
        H.T = null;
        var n = k.p;
        try {
            k.p = 8,
            xu(e, a, t, l)
        } finally {
            k.p = n,
            H.T = o
        }
    }
    function xu(e, a, t, l) {
        if (co) {
            var o = qu(l);
            if (o === null)
                lu(e, a, l, Hi, t),
                op(e, l);
            else if (Ah(o, e, a, t, l))
                l.stopPropagation();
            else if (op(e, l),
            a & 4 && -1 < qh.indexOf(e)) {
                for (; o !== null; ) {
                    var n = Al(o);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode,
                            n.current.memoizedState.isDehydrated) {
                                var i = Wt(n.pendingLanes);
                                if (i !== 0) {
                                    var r = n;
                                    for (r.pendingLanes |= 2,
                                    r.entangledLanes |= 2; i; ) {
                                        var s = 1 << 31 - va(i);
                                        r.entanglements[1] |= s,
                                        i &= ~s
                                    }
                                    nt(n),
                                    (ue & 6) === 0 && (xi = ha() + 500,
                                    $o(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            r = ll(n, 2),
                            r !== null && fa(r, n, 2),
                            _i(),
                            wu(n, 2)
                        }
                    if (n = qu(l),
                    n === null && lu(e, a, l, Hi, t),
                    n === o)
                        break;
                    o = n
                }
                o !== null && l.stopPropagation()
            } else
                lu(e, a, l, null, t)
        }
    }
    function qu(e) {
        return e = sr(e),
        Au(e)
    }
    var Hi = null;
    function Au(e) {
        if (Hi = null,
        e = Pt(e),
        e !== null) {
            var a = O(e);
            if (a === null)
                e = null;
            else {
                var t = a.tag;
                if (t === 13) {
                    if (e = Y(a),
                    e !== null)
                        return e;
                    e = null
                } else if (t === 31) {
                    if (e = J(a),
                    e !== null)
                        return e;
                    e = null
                } else if (t === 3) {
                    if (a.stateNode.current.memoizedState.isDehydrated)
                        return a.tag === 3 ? a.stateNode.containerInfo : null;
                    e = null
                } else
                    a !== e && (e = null)
            }
        }
        return Hi = e,
        null
    }
    function lp(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "fullscreenerror":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "resize":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Op()) {
            case Yu:
                return 2;
            case Lu:
                return 8;
            case bn:
            case Dp:
                return 32;
            case Gu:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var _u = !1
      , Vt = null
      , Ft = null
      , Kt = null
      , nn = new Map
      , rn = new Map
      , Jt = []
      , qh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function op(e, a) {
        switch (e) {
        case "focusin":
        case "focusout":
            Vt = null;
            break;
        case "dragenter":
        case "dragleave":
            Ft = null;
            break;
        case "mouseover":
        case "mouseout":
            Kt = null;
            break;
        case "pointerover":
        case "pointerout":
            nn.delete(a.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            rn.delete(a.pointerId)
        }
    }
    function sn(e, a, t, l, o, n) {
        return e === null || e.nativeEvent !== n ? (e = {
            blockedOn: a,
            domEventName: t,
            eventSystemFlags: l,
            nativeEvent: n,
            targetContainers: [o]
        },
        a !== null && (a = Al(a),
        a !== null && ap(a)),
        e) : (e.eventSystemFlags |= l,
        a = e.targetContainers,
        o !== null && a.indexOf(o) === -1 && a.push(o),
        e)
    }
    function Ah(e, a, t, l, o) {
        switch (a) {
        case "focusin":
            return Vt = sn(Vt, e, a, t, l, o),
            !0;
        case "dragenter":
            return Ft = sn(Ft, e, a, t, l, o),
            !0;
        case "mouseover":
            return Kt = sn(Kt, e, a, t, l, o),
            !0;
        case "pointerover":
            var n = o.pointerId;
            return nn.set(n, sn(nn.get(n) || null, e, a, t, l, o)),
            !0;
        case "gotpointercapture":
            return n = o.pointerId,
            rn.set(n, sn(rn.get(n) || null, e, a, t, l, o)),
            !0
        }
        return !1
    }
    function np(e) {
        var a = Pt(e.target);
        if (a !== null) {
            var t = O(a);
            if (t !== null) {
                if (a = t.tag,
                a === 13) {
                    if (a = Y(t),
                    a !== null) {
                        e.blockedOn = a,
                        Ju(e.priority, function() {
                            tp(t)
                        });
                        return
                    }
                } else if (a === 31) {
                    if (a = J(t),
                    a !== null) {
                        e.blockedOn = a,
                        Ju(e.priority, function() {
                            tp(t)
                        });
                        return
                    }
                } else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Ui(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var a = e.targetContainers; 0 < a.length; ) {
            var t = qu(e.nativeEvent);
            if (t === null) {
                t = e.nativeEvent;
                var l = new t.constructor(t.type,t);
                rr = l,
                t.target.dispatchEvent(l),
                rr = null
            } else
                return a = Al(t),
                a !== null && ap(a),
                e.blockedOn = t,
                !1;
            a.shift()
        }
        return !0
    }
    function ip(e, a, t) {
        Ui(e) && t.delete(a)
    }
    function _h() {
        _u = !1,
        Vt !== null && Ui(Vt) && (Vt = null),
        Ft !== null && Ui(Ft) && (Ft = null),
        Kt !== null && Ui(Kt) && (Kt = null),
        nn.forEach(ip),
        rn.forEach(ip)
    }
    function Bi(e, a) {
        e.blockedOn === a && (e.blockedOn = null,
        _u || (_u = !0,
        v.unstable_scheduleCallback(v.unstable_NormalPriority, _h)))
    }
    var Qi = null;
    function rp(e) {
        Qi !== e && (Qi = e,
        v.unstable_scheduleCallback(v.unstable_NormalPriority, function() {
            Qi === e && (Qi = null);
            for (var a = 0; a < e.length; a += 3) {
                var t = e[a]
                  , l = e[a + 1]
                  , o = e[a + 2];
                if (typeof l != "function") {
                    if (Au(l || t) === null)
                        continue;
                    break
                }
                var n = Al(t);
                n !== null && (e.splice(a, 3),
                a -= 3,
                is(n, {
                    pending: !0,
                    data: o,
                    method: t.method,
                    action: l
                }, l, o))
            }
        }))
    }
    function mo(e) {
        function a(s) {
            return Bi(s, e)
        }
        Vt !== null && Bi(Vt, e),
        Ft !== null && Bi(Ft, e),
        Kt !== null && Bi(Kt, e),
        nn.forEach(a),
        rn.forEach(a);
        for (var t = 0; t < Jt.length; t++) {
            var l = Jt[t];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < Jt.length && (t = Jt[0],
        t.blockedOn === null); )
            np(t),
            t.blockedOn === null && Jt.shift();
        if (t = (e.ownerDocument || e).$$reactFormReplay,
        t != null)
            for (l = 0; l < t.length; l += 3) {
                var o = t[l]
                  , n = t[l + 1]
                  , i = o[sa] || null;
                if (typeof n == "function")
                    i || rp(t);
                else if (i) {
                    var r = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (o = n,
                        i = n[sa] || null)
                            r = i.formAction;
                        else if (Au(o) !== null)
                            continue
                    } else
                        r = i.action;
                    typeof r == "function" ? t[l + 1] = r : (t.splice(l, 3),
                    l -= 3),
                    rp(t)
                }
            }
    }
    function sp() {
        function e(n) {
            n.canIntercept && n.info === "react-transition" && n.intercept({
                handler: function() {
                    return new Promise(function(i) {
                        return o = i
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function a() {
            o !== null && (o(),
            o = null),
            l || setTimeout(t, 20)
        }
        function t() {
            if (!l && !navigation.transition) {
                var n = navigation.currentEntry;
                n && n.url != null && navigation.navigate(n.url, {
                    state: n.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , o = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", a),
            navigation.addEventListener("navigateerror", a),
            setTimeout(t, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", a),
                navigation.removeEventListener("navigateerror", a),
                o !== null && (o(),
                o = null)
            }
        }
    }
    function Eu(e) {
        this._internalRoot = e
    }
    Yi.prototype.render = Eu.prototype.render = function(e) {
        var a = this._internalRoot;
        if (a === null)
            throw Error(m(409));
        var t = a.current
          , l = Ea();
        Pf(t, l, e, a, null, null)
    }
    ,
    Yi.prototype.unmount = Eu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var a = e.containerInfo;
            Pf(e.current, 2, null, e, null, null),
            _i(),
            a[ql] = null
        }
    }
    ;
    function Yi(e) {
        this._internalRoot = e
    }
    Yi.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var a = Ku();
            e = {
                blockedOn: null,
                target: e,
                priority: a
            };
            for (var t = 0; t < Jt.length && a !== 0 && a < Jt[t].priority; t++)
                ;
            Jt.splice(t, 0, e),
            t === 0 && np(e)
        }
    }
    ;
    var up = I.version;
    if (up !== "19.3.0")
        throw Error(m(527, up, "19.3.0"));
    k.findDOMNode = function(e) {
        var a = e._reactInternals;
        if (a === void 0)
            throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","),
            Error(m(268, e)));
        return e = j(a),
        e = e !== null ? z(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var Eh = {
        bundleType: 0,
        version: "19.3.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        reconcilerVersion: "19.3.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Li.isDisabled && Li.supportsFiber)
            try {
                go = Li.inject(Eh),
                ya = Li
            } catch {}
    }
    return cn.createRoot = function(e, a) {
        if (!R(e))
            throw Error(m(299));
        var t = !1
          , l = ""
          , o = $d
          , n = Wd
          , i = Pd;
        return a != null && (a.unstable_strictMode === !0 && (t = !0),
        a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (o = a.onUncaughtError),
        a.onCaughtError !== void 0 && (n = a.onCaughtError),
        a.onRecoverableError !== void 0 && (i = a.onRecoverableError)),
        a = $f(e, 1, !1, null, null, t, l, null, o, n, i, sp),
        e[ql] = a.current,
        tu(e),
        new Eu(a)
    }
    ,
    cn.hydrateRoot = function(e, a, t) {
        if (!R(e))
            throw Error(m(299));
        var l = !1
          , o = ""
          , n = $d
          , i = Wd
          , r = Pd
          , s = null;
        return t != null && (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
        t.onCaughtError !== void 0 && (i = t.onCaughtError),
        t.onRecoverableError !== void 0 && (r = t.onRecoverableError),
        t.formState !== void 0 && (s = t.formState)),
        a = $f(e, 1, !0, a, t ?? null, l, o, s, n, i, r, sp),
        a.context = Wf(null),
        t = a.current,
        l = Ea(),
        l = ar(l),
        o = Mt(l),
        o.callback = null,
        Ot(t, o, l),
        t = l,
        a.current.lanes = t,
        ho(a, t),
        nt(a),
        e[ql] = a.current,
        tu(e),
        new Yi(a)
    }
    ,
    cn.version = "19.3.0",
    cn
}
var vp;
function Hh() {
    if (vp)
        return Ru.exports;
    vp = 1;
    function v() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)
            } catch (I) {
                console.error(I)
            }
    }
    return v(),
    Ru.exports = Dh(),
    Ru.exports
}
var Uh = Hh();
const Bh = Ip(Uh)
  , Za = {
    medicine_ball: {
        label: "Bola medicinal",
        group: "ball",
        aliases: ["medicine ball", "bola com peso"]
    },
    cushion: {
        label: "Almofada",
        group: "balance",
        aliases: ["superfície instável"]
    },
    none: {
        label: "Sem equipamento",
        group: "none",
        aliases: ["peso corporal", "solo", "bodyweight"]
    },
    elastic_band: {
        label: "Faixa elástica",
        group: "elastic",
        aliases: ["elástico", "theraband", "resistance band"]
    },
    mini_band: {
        label: "Mini band",
        group: "elastic",
        aliases: ["miniband", "elástico"]
    },
    elastic_tube: {
        label: "Tubo elástico",
        group: "elastic",
        aliases: ["elástico", "tubing"]
    },
    small_ball: {
        label: "Bola pequena",
        group: "ball",
        aliases: ["bola", "soft ball"]
    },
    swiss_ball: {
        label: "Bola suíça",
        group: "ball",
        aliases: ["bola", "fitball", "stability ball"]
    },
    therapy_ball: {
        label: "Bola terapêutica",
        group: "ball",
        aliases: ["bola macia"]
    },
    dumbbell: {
        label: "Halter",
        group: "weights",
        aliases: ["halteres", "peso", "dumbbells"]
    },
    ankle_weight: {
        label: "Caneleira",
        group: "weights",
        aliases: ["caneleiras", "peso"]
    },
    barbell: {
        label: "Barra com pesos",
        group: "weights",
        aliases: ["barbell"]
    },
    stick: {
        label: "Bastão",
        group: "other",
        aliases: ["bastao"]
    },
    step: {
        label: "Step",
        group: "other",
        aliases: ["degrau", "plataforma"]
    },
    balance_disc: {
        label: "Disco de equilíbrio",
        group: "balance",
        aliases: ["disco", "propriocepção"]
    },
    bosu: {
        label: "Bosu",
        group: "balance",
        aliases: ["meia bola", "equilíbrio"]
    },
    roller: {
        label: "Rolo",
        group: "other",
        aliases: ["foam roller"]
    },
    wall: {
        label: "Parede",
        group: "support",
        aliases: ["apoio"]
    },
    chair: {
        label: "Cadeira",
        group: "support",
        aliases: ["sentado", "apoio"]
    },
    bench: {
        label: "Banco",
        group: "support",
        aliases: ["bench"]
    },
    towel: {
        label: "Toalha",
        group: "other",
        aliases: ["toalha"]
    },
    therapy_putty: {
        label: "Massa terapêutica",
        group: "other",
        aliases: ["putty", "massinha"]
    },
    small_objects: {
        label: "Objetos pequenos",
        group: "other",
        aliases: ["coordenação", "destreza"]
    },
    pilates_reformer: {
        label: "Reformer",
        group: "pilates",
        aliases: ["pilates", "molas"]
    },
    pilates_cadillac: {
        label: "Cadillac",
        group: "pilates",
        aliases: ["pilates", "molas", "trapeze"]
    },
    pilates_chair: {
        label: "Chair",
        group: "pilates",
        aliases: ["pilates", "wunda chair"]
    },
    pilates_barrel: {
        label: "Barrel",
        group: "pilates",
        aliases: ["pilates", "ladder barrel"]
    },
    pilates_spine_corrector: {
        label: "Spine Corrector",
        group: "pilates",
        aliases: ["pilates", "corretor de coluna"]
    },
    pilates_ring: {
        label: "Magic Circle",
        group: "pilates",
        aliases: ["pilates", "anel", "aro"]
    },
    pullup_bar: {
        label: "Barra fixa",
        group: "other",
        aliases: ["pull up"]
    },
    ladder: {
        label: "Escada de agilidade",
        group: "other",
        aliases: ["coordenação"]
    },
    cones: {
        label: "Cones",
        group: "other",
        aliases: ["obstáculos"]
    }
}
  , Zi = {
    mobility: "Mobilidade",
    strength: "Fortalecimento",
    stability: "Estabilidade",
    balance: "Equilíbrio",
    stretching: "Alongamento",
    motor_control: "Controle motor",
    functional: "Funcional",
    isometric: "Isometria",
    coordination: "Coordenação",
    proprioception: "Propriocepção"
}
  , Np = [{
    id: "all",
    label: "Todos"
}, {
    id: "none",
    label: "Sem equipamento"
}, {
    id: "elastic",
    label: "Elástico"
}, {
    id: "ball",
    label: "Bola"
}, {
    id: "weights",
    label: "Pesos"
}, {
    id: "pilates",
    label: "Pilates"
}, ...Object.entries(Zi).map( ([v,I]) => ({
    id: v,
    label: I
}))];
function Uu(v, I) {
    return I === "all" ? !0 : I === "pilates" ? v.tags.includes("Pilates") : ["none", "elastic", "ball", "weights"].includes(I) ? v.equipmentIds.some(A => Za[A].group === I) : v.categoryIds.includes(I)
}
const Qh = v => Np.filter(I => I.id === "all" || v.some(A => Uu(A, I.id)))
  , Sp = (v, I, A="all") => v.filter(m => Uu(m, I) && (A === "all" || m.equipmentIds.includes(A)))
  , Yh = v => [v.name, (v.aliases ?? []).join(" "), v.equipment, v.categories.join(" "), v.tags.join(" "), ...v.equipmentIds.flatMap(I => [I, Za[I].label, ...Za[I].aliases]), ...v.categoryIds].join(" ")
  , it = [{
    id: "cervical",
    name: "Pescoço / Cervical",
    short: "Pescoço / Cervical",
    slug: "pescoco-cervical",
    minimumExercises: 40
}, {
    id: "ombro",
    name: "Ombro",
    short: "Ombro",
    slug: "ombro",
    minimumExercises: 40
}, {
    id: "peitoral",
    name: "Peitoral",
    short: "Peitoral",
    slug: "peitoral",
    minimumExercises: 40
}, {
    id: "trapezio",
    name: "Parte superior das costas",
    short: "Parte superior das costas",
    slug: "parte-superior-das-costas",
    minimumExercises: 40
}, {
    id: "braco",
    name: "Braço",
    short: "Braço",
    slug: "braco",
    minimumExercises: 40
}, {
    id: "cotovelo",
    name: "Cotovelo",
    short: "Cotovelo",
    slug: "cotovelo",
    minimumExercises: 40
}, {
    id: "antebraco",
    name: "Antebraço",
    short: "Antebraço",
    slug: "antebraco",
    minimumExercises: 40
}, {
    id: "mao",
    name: "Punho e Mão",
    short: "Punho e Mão",
    slug: "punho-e-mao",
    minimumExercises: 40
}, {
    id: "toracica",
    name: "Coluna Torácica",
    short: "Coluna Torácica",
    slug: "coluna-toracica",
    minimumExercises: 40
}, {
    id: "coluna",
    name: "Coluna Lombar",
    short: "Coluna Lombar",
    slug: "coluna-lombar",
    minimumExercises: 40
}, {
    id: "abdomen",
    name: "Core / Abdômen",
    short: "Core / Abdômen",
    slug: "core-abdomen",
    minimumExercises: 40
}, {
    id: "quadril",
    name: "Quadril",
    short: "Quadril",
    slug: "quadril",
    minimumExercises: 40
}, {
    id: "gluteos",
    name: "Glúteos",
    short: "Glúteos",
    slug: "gluteos",
    minimumExercises: 40
}, {
    id: "coxa",
    name: "Coxa anterior",
    short: "Coxa anterior",
    slug: "coxa-anterior",
    minimumExercises: 40
}, {
    id: "posterior_coxa",
    name: "Coxa posterior",
    short: "Coxa posterior",
    slug: "coxa-posterior",
    minimumExercises: 40
}, {
    id: "joelho",
    name: "Joelho",
    short: "Joelho",
    slug: "joelho",
    minimumExercises: 40
}, {
    id: "panturrilha",
    name: "Perna e Panturrilha",
    short: "Perna e Panturrilha",
    slug: "perna-e-panturrilha",
    minimumExercises: 40
}, {
    id: "tornozelo",
    name: "Tornozelo",
    short: "Tornozelo",
    slug: "tornozelo",
    minimumExercises: 40
}, {
    id: "pe",
    name: "Pé",
    short: "Pé",
    slug: "pe",
    minimumExercises: 40
}]
  , Lh = {
    "full-reverse-band": {
        type: "image",
        src: "/media/demonstrations/full-reverse-band-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rosca inversa em pé com faixa elástica presa sob os pés, braços estendidos e cotovelos flexionados com palmas para baixo."
    },
    "full-ball-diagonal-slam": {
        type: "image",
        src: "/media/demonstrations/full-ball-diagonal-slam-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Arremesso diagonal ajoelhado com bola medicinal, da posição acima do ombro até o chão ao lado do joelho oposto."
    },
    "full-ring-rotation": {
        type: "image",
        src: "/media/demonstrations/full-ring-rotation-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação de tronco sentado no solo segurando um aro de Pilates à frente do peito."
    },
    "full-ring-pec": {
        type: "image",
        src: "/media/demonstrations/full-ring-pec-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem em pé com aro de Pilates à frente do peito, mostrando preparação e compressão sustentada entre as palmas."
    },
    "full-rear-row": {
        type: "image",
        src: "/media/demonstrations/full-rear-row-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Remada com halteres e cotovelos abertos, do início com braços pendentes ao final da tração com tronco inclinado."
    },
    "full-hammer-band": {
        type: "image",
        src: "/media/demonstrations/full-hammer-band-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza rosca com faixa elástica presa sob os pés, passando dos braços estendidos à flexão dos cotovelos em pegada neutra."
    },
    "full-ball-side-toss": {
        type: "image",
        src: "/media/demonstrations/full-ball-side-toss-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem prepara bola medicinal ao lado do quadril e gira o tronco para realizar passe lateral."
    },
    "full-ring-airplane": {
        type: "image",
        src: "/media/demonstrations/full-ring-airplane-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem parte da posição em pé e assume equilíbrio em avião com aro de Pilates nas mãos à frente."
    },
    "full-wrist-bar": {
        type: "image",
        src: "/media/demonstrations/full-wrist-bar-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de punhos com barra, sentado em banco."
    },
    "full-ring-triceps": {
        type: "image",
        src: "/media/demonstrations/full-ring-triceps-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pressão de tríceps em pé com aro de Pilates."
    },
    "full-ring-kneel-hinge": {
        type: "image",
        src: "/media/demonstrations/full-ring-kneel-hinge-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Inclinação em bloco para trás ajoelhado segurando aro de Pilates."
    },
    "full-reverse-curl": {
        type: "image",
        src: "/media/demonstrations/full-reverse-curl-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rosca inversa com halteres, palmas para baixo e cotovelos ao lado do tronco."
    },
    "full-triceps-overhead-band": {
        type: "image",
        src: "/media/demonstrations/full-triceps-overhead-band-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de tríceps acima da cabeça com faixa elástica presa sob o pé, mostrando cotovelos dobrados e estendidos."
    },
    "full-ring-bridge": {
        type: "image",
        src: "/media/demonstrations/full-ring-bridge-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Ponte de glúteos com aro de Pilates entre os joelhos, da posição deitada à elevação do quadril."
    },
    "full-reverse-bar": {
        type: "image",
        src: "/media/demonstrations/full-reverse-bar-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rosca inversa em pé com barra, mostrando pegada pronada no início e após flexionar os cotovelos."
    },
    "full-ball-diagonal": {
        type: "image",
        src: "/media/demonstrations/full-ball-diagonal-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação do tronco em meio ajoelhado com bola medicinal mantida diante do peito."
    },
    "full-ring-sidebend": {
        type: "image",
        src: "/media/demonstrations/full-ring-sidebend-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Inclinação lateral do tronco em pé segurando aro de Pilates acima da cabeça."
    },
    "full-preacher": {
        type: "image",
        src: "/media/demonstrations/full-preacher-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza rosca unilateral com halter e braço apoiado no encosto inclinado de um banco."
    },
    "full-triceps-mini": {
        type: "image",
        src: "/media/demonstrations/full-triceps-mini-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem fixa mini band com uma mão no peito e estende o outro cotovelo para baixo."
    },
    "full-pulldown-band": {
        type: "image",
        src: "/media/demonstrations/full-pulldown-band-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem ajoelhado puxa elástico de uma âncora alta até o ombro, aproximando o cotovelo das costelas."
    },
    "full-romanian-bar": {
        type: "image",
        src: "/media/demonstrations/full-romanian-bar-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz levantamento terra romeno com barra, inclinando o tronco a partir do quadril."
    },
    "full-bridge-db": {
        type: "image",
        src: "/media/demonstrations/full-bridge-db-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva o quadril em ponte no chão com halter apoiado na pelve."
    },
    "full-good-morning": {
        type: "image",
        src: "/media/demonstrations/full-good-morning-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem inclina o tronco com quadril para trás e braços cruzados sobre o peito."
    },
    "full-one-arm-row": {
        type: "image",
        src: "/media/demonstrations/full-one-arm-row-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Remada unilateral com halter e apoio de mão e joelho no banco."
    },
    "full-deadlift-bar": {
        type: "image",
        src: "/media/demonstrations/full-deadlift-bar-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Levantamento terra com barra, da posição no solo à postura ereta."
    },
    "full-squat-bar": {
        type: "image",
        src: "/media/demonstrations/full-squat-bar-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Agachamento com barra nas costas, em pé e com joelhos e quadris flexionados."
    },
    "full-scapula-bent": {
        type: "image",
        src: "/media/demonstrations/full-scapula-bent-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Retração das escápulas com halteres e tronco inclinado, mantendo cotovelos estendidos."
    },
    "full-sumo-deadlift": {
        type: "image",
        src: "/media/demonstrations/full-sumo-deadlift-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Levantamento terra sumô com barra, desde a posição inicial no chão até ficar em pé."
    },
    "full-pallof": {
        type: "image",
        src: "/media/demonstrations/full-pallof-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem estende os braços à frente contra resistência lateral do elástico sem girar o tronco."
    },
    "full-side-plank-full": {
        type: "image",
        src: "/media/demonstrations/full-side-plank-full-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem assume prancha lateral com pernas estendidas e apoio nos pés."
    },
    "full-neck-rotation-quad": {
        type: "image",
        src: "/media/demonstrations/full-neck-rotation-quad-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem em quatro apoios gira a cabeça para o lado mantendo o tronco estável."
    },
    "full-single-hinge": {
        type: "image",
        src: "/media/demonstrations/full-single-hinge-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Inclinação do tronco em uma perna, com a outra estendida para trás."
    },
    "full-reverse-lunge": {
        type: "image",
        src: "/media/demonstrations/full-reverse-lunge-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Afundo para trás sem equipamento."
    },
    "full-leg-raises": {
        type: "image",
        src: "/media/demonstrations/full-leg-raises-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação das duas pernas estendidas deitado de costas."
    },
    "full-bulgarian-db": {
        type: "image",
        src: "/media/demonstrations/full-bulgarian-db-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Agachamento búlgaro com halteres e pé de trás apoiado sobre um banco."
    },
    "full-finger-tip": {
        type: "image",
        src: "/media/demonstrations/full-finger-tip-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão isolada da ponta do indicador com a articulação do meio estabilizada pela outra mão."
    },
    "full-wring-towel": {
        type: "image",
        src: "/media/demonstrations/full-wring-towel-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem segura toalha e torce com as mãos em sentidos opostos."
    },
    "full-spine-rock": {
        type: "image",
        src: "/media/demonstrations/full-spine-rock-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Balanço para frente e para trás em quatro apoios."
    },
    "full-neck-prone": {
        type: "image",
        src: "/media/demonstrations/full-neck-prone-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sustentação cervical de barriga para baixo, elevando apenas a cabeça."
    },
    "full-shoulder-abd-iso": {
        type: "image",
        src: "/media/demonstrations/full-shoulder-abd-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria de abdução do ombro pressionando lateralmente o cotovelo contra a parede."
    },
    "full-ring-leg-circle": {
        type: "image",
        src: "/media/demonstrations/full-ring-leg-circle-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Círculos de uma perna deitado segurando aro de Pilates acima do peito."
    },
    "full-hop-one": {
        type: "image",
        src: "/media/demonstrations/full-hop-one-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Salto no lugar com uma perna, mostrando preparação e fase aérea."
    },
    "full-nordic": {
        type: "image",
        src: "/media/demonstrations/full-nordic-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão nórdica com parceiro segurando os tornozelos, mostrando início ajoelhado e descida controlada."
    },
    "full-reverse-fly-db": {
        type: "image",
        src: "/media/demonstrations/full-reverse-fly-db-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Crucifixo inverso sentado com halteres, da posição pendente à abertura lateral dos braços."
    },
    "full-plank-full": {
        type: "image",
        src: "/media/demonstrations/full-plank-full-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Preparação e sustentação da prancha nos antebraços com pernas estendidas e joelhos fora do chão."
    },
    "full-y-quad": {
        type: "image",
        src: "/media/demonstrations/full-y-quad-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação diagonal de um braço em Y em quatro apoios, com apoio mantido nos outros três membros."
    },
    "full-ring-reverse-crunch": {
        type: "image",
        src: "/media/demonstrations/full-ring-reverse-crunch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdominal reverso com aro entre as coxas, mostrando pequeno enrolamento e elevação da pelve."
    },
    "full-neck-tuck-quad": {
        type: "image",
        src: "/media/demonstrations/full-neck-tuck-quad-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Retração cervical em quatro apoios com recolhimento suave do queixo."
    },
    "full-ring-forward": {
        type: "image",
        src: "/media/demonstrations/full-ring-forward-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento da coluna à frente sentado, com mãos apoiadas sobre aro de Pilates vertical."
    },
    "full-fist-passive": {
        type: "image",
        src: "/media/demonstrations/full-fist-passive-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Mão oposta ajuda a flexionar dedos para fechar a mão."
    },
    "full-jump-two": {
        type: "image",
        src: "/media/demonstrations/full-jump-two-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem flexiona joelhos para impulsionar e salta no lugar com os dois pés."
    },
    "full-balance-catch": {
        type: "image",
        src: "/media/demonstrations/full-balance-catch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem mantém equilíbrio em uma perna enquanto lança e recebe bola pequena."
    },
    "full-calf-bent": {
        type: "image",
        src: "/media/demonstrations/full-calf-bent-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva os calcanhares com tronco inclinado e mãos apoiadas em banco."
    },
    "mw-decline-fly": {
        type: "image",
        src: "/media/demonstrations/mw-decline-fly-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza crucifixo com halteres deitado em banco declinado."
    },
    "mw-barbell-floor": {
        type: "image",
        src: "/media/demonstrations/mw-barbell-floor-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz supino no chão com barra e joelhos flexionados."
    },
    "mw-decline-pushup": {
        type: "image",
        src: "/media/demonstrations/mw-decline-pushup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz flexão de braços com os pés elevados sobre banco."
    },
    "full-triceps-front-band": {
        type: "image",
        src: "/media/demonstrations/full-triceps-front-band-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de tríceps à frente com elástico: cotovelo flexionado e depois estendido, faixa presa atrás e ao lado do corpo."
    },
    "full-balance-cushion-catch": {
        type: "image",
        src: "/media/demonstrations/full-balance-cushion-catch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Equilíbrio sobre almofada lançando e recebendo uma bola pequena."
    },
    "mw-band-pushup": {
        type: "image",
        src: "/media/demonstrations/mw-band-pushup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de braços no solo com elástico sobre as costas e preso nas mãos."
    },
    "mw-incline-fly": {
        type: "image",
        src: "/media/demonstrations/mw-incline-fly-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Crucifixo com halteres em banco inclinado."
    },
    "mw-barbell-press": {
        type: "image",
        src: "/media/demonstrations/mw-barbell-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Supino reto com barra sobre banco horizontal."
    },
    "mw-barbell-decline": {
        type: "image",
        src: "/media/demonstrations/mw-barbell-decline-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Supino declinado com barra em banco com apoio dos pés."
    },
    "mw-ball-chest-pass": {
        type: "image",
        src: "/media/demonstrations/mw-ball-chest-pass-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Passe de peito com bola medicinal contra parede."
    },
    "full-finger-stretch": {
        type: "image",
        src: "/media/demonstrations/full-finger-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento assistido dos dedos, pressionando suavemente o dorso da mão apoiada sobre uma mesa."
    },
    "full-toe-spread": {
        type: "image",
        src: "/media/demonstrations/full-toe-spread-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abertura ativa dos dedos dos pés, mostrando dedos relaxados e afastados."
    },
    "full-hop-line": {
        type: "image",
        src: "/media/demonstrations/full-hop-line-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Salto em uma perna, mostrando preparação no apoio e fase aérea do deslocamento."
    },
    "full-calf-step": {
        type: "image",
        src: "/media/demonstrations/full-calf-step-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação de panturrilha sobre degrau, mostrando calcanhares baixos e elevados."
    },
    "mw-ball-pushup": {
        type: "image",
        src: "/media/demonstrations/mw-ball-pushup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza flexão de braços com mãos apoiadas na bola medicinal."
    },
    "mw-ball-halo": {
        type: "image",
        src: "/media/demonstrations/mw-ball-halo-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem conduz bola medicinal ao redor da cabeça com os cotovelos flexionados."
    },
    "mw-ball-overhead-slam": {
        type: "image",
        src: "/media/demonstrations/mw-ball-overhead-slam-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem arremessa bola medicinal ao chão a partir da posição acima da cabeça."
    },
    "mw-band-squat-long": {
        type: "image",
        src: "/media/demonstrations/mw-band-squat-long-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem agacha segurando faixa elástica sob os pés."
    },
    "mw-band-face-pull": {
        type: "image",
        src: "/media/demonstrations/mw-band-face-pull-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem puxa elástico em direção ao rosto com cotovelos altos."
    },
    "mw-weighted-calf": {
        type: "image",
        src: "/media/demonstrations/mw-weighted-calf-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva os calcanhares segurando halteres."
    },
    "full-finger-middle": {
        type: "image",
        src: "/media/demonstrations/full-finger-middle-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Indicador estabilizado pela outra mão: estendido e flexionado apenas na articulação do meio."
    },
    "full-thumb-stretch": {
        type: "image",
        src: "/media/demonstrations/full-thumb-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento assistido do polegar: a outra mão afasta suavemente o polegar dos demais dedos."
    },
    "full-toe-yoga": {
        type: "image",
        src: "/media/demonstrations/full-toe-yoga-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Mesmo pé com o dedão elevado e os outros dedos apoiados, seguido do dedão apoiado e dos quatro dedos menores elevados."
    },
    "mw-ball-walkover": {
        type: "image",
        src: "/media/demonstrations/mw-ball-walkover-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de braços alternando a mão na bola medicinal."
    },
    "mw-ball-situp-pass": {
        type: "image",
        src: "/media/demonstrations/mw-ball-situp-pass-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdominal com passe de bola medicinal."
    },
    "mw-ball-hollow": {
        type: "image",
        src: "/media/demonstrations/mw-ball-hollow-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sustentação abdominal com bola medicinal acima da cabeça."
    },
    "mw-band-front-raise": {
        type: "image",
        src: "/media/demonstrations/mw-band-front-raise-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação frontal de braços com elástico."
    },
    "mw-weighted-seated-calf": {
        type: "image",
        src: "/media/demonstrations/mw-weighted-seated-calf-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação de panturrilhas sentado com halteres nas coxas."
    },
    "topic-band-press": {
        type: "image",
        src: "/media/demonstrations/topic-band-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Desenvolvimento de ombros sentado com elástico preso sob os pés."
    },
    "mw-decline-press": {
        type: "image",
        src: "/media/demonstrations/mw-decline-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Supino declinado com halteres, mostrando braços flexionados e estendidos acima do peito."
    },
    "mw-barbell-incline": {
        type: "image",
        src: "/media/demonstrations/mw-barbell-incline-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Supino inclinado com barra, mostrando a barra próxima ao peito e elevada."
    },
    "mw-band-single-fly": {
        type: "image",
        src: "/media/demonstrations/mw-band-single-fly-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Crucifixo unilateral com elástico ancorado à altura do ombro, da abertura à adução do braço."
    },
    "mw-incline-pushup": {
        type: "image",
        src: "/media/demonstrations/mw-incline-pushup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de braços com mãos apoiadas no banco, mostrando posição alta e descida do peito."
    },
    "mw-ball-chest-slam": {
        type: "image",
        src: "/media/demonstrations/mw-ball-chest-slam-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Arremesso de peito ao chão com bola medicinal, antes e após soltar a bola."
    },
    "mw-ball-tuck-pushup": {
        type: "image",
        src: "/media/demonstrations/mw-ball-tuck-pushup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de braços com recolhimento dos joelhos apoiados na bola suíça."
    },
    "mw-ball-plank": {
        type: "image",
        src: "/media/demonstrations/mw-ball-plank-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Preparação e sustentação de prancha com antebraços apoiados na bola medicinal."
    },
    "mw-ball-deadbug": {
        type: "image",
        src: "/media/demonstrations/mw-ball-deadbug-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de braço e perna opostos enquanto a mão e o joelho restantes estabilizam a bola medicinal."
    },
    "topic-band-lateral": {
        type: "image",
        src: "/media/demonstrations/topic-band-lateral-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva braços lateralmente contra faixa elástica sob os pés."
    },
    "topic-band-reverse-fly": {
        type: "image",
        src: "/media/demonstrations/topic-band-reverse-fly-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem ajoelhado abre braços em crucifixo inverso contra tubo elástico ancorado à frente."
    },
    "full-chest-towel": {
        type: "image",
        src: "/media/demonstrations/full-chest-towel-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento de peitoral deitado sobre toalha enrolada ao longo da coluna, passando dos braços junto ao corpo para braços abertos."
    },
    "full-thumb-lift": {
        type: "image",
        src: "/media/demonstrations/full-thumb-lift-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Mão apoiada na mesa: polegar inicialmente apoiado e depois elevado, mantendo a palma e os outros quatro dedos no lugar."
    },
    "mw-band-leg-press": {
        type: "image",
        src: "/media/demonstrations/mw-band-leg-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Empurrada de pernas deitado contra elástico ancorado nas mãos."
    },
    "topic-band-knee-curl": {
        type: "image",
        src: "/media/demonstrations/topic-band-knee-curl-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de joelho em pé contra faixa elástica presa ao tornozelo."
    },
    "topic-band-squat": {
        type: "image",
        src: "/media/demonstrations/topic-band-squat-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Agachamento com mini band acima dos joelhos."
    },
    "topic-db-triceps-overhead": {
        type: "image",
        src: "/media/demonstrations/topic-db-triceps-overhead-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de tríceps acima da cabeça segurando um halter com as duas mãos."
    },
    "topic-db-press": {
        type: "image",
        src: "/media/demonstrations/topic-db-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Desenvolvimento de ombros sentado com dois halteres."
    },
    "topic-db-hip-thrust": {
        type: "image",
        src: "/media/demonstrations/topic-db-hip-thrust-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação do quadril com as costas apoiadas no banco e halter sobre a pelve."
    },
    "topic-neck-flex-iso": {
        type: "image",
        src: "/media/demonstrations/topic-neck-flex-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria de flexão cervical pressionando a testa contra a palma."
    },
    "topic-neck-nod": {
        type: "image",
        src: "/media/demonstrations/topic-neck-nod-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pequeno movimento de sim deitado com cabeça apoiada."
    },
    "topic-shoulder-sleeper": {
        type: "image",
        src: "/media/demonstrations/topic-shoulder-sleeper-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento de rotação interna do ombro deitado de lado."
    },
    "mw-band-spanish-squat": {
        type: "image",
        src: "/media/demonstrations/mw-band-spanish-squat-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza agachamento espanhol com faixa elástica atrás dos joelhos."
    },
    "mw-band-pullthrough": {
        type: "image",
        src: "/media/demonstrations/mw-band-pullthrough-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem estende o quadril puxando elástico entre as pernas."
    },
    "topic-band-curl": {
        type: "image",
        src: "/media/demonstrations/topic-band-curl-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz rosca de bíceps com elástico preso sob os pés."
    },
    "topic-band-hip-extend": {
        type: "image",
        src: "/media/demonstrations/topic-band-hip-extend-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem estende a perna para trás contra elástico nos tornozelos."
    },
    "topic-db-shrug": {
        type: "image",
        src: "/media/demonstrations/topic-db-shrug-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva os ombros segurando halteres ao lado do corpo."
    },
    "full-ring-biceps": {
        type: "image",
        src: "/media/demonstrations/full-ring-biceps-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem pressiona aro de Pilates apoiado sobre o ombro com o braço flexionado."
    },
    "full-ring-crunch": {
        type: "image",
        src: "/media/demonstrations/full-ring-crunch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza abdominal curto com aro entre as coxas."
    },
    "full-ring-squat": {
        type: "image",
        src: "/media/demonstrations/full-ring-squat-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem agacha segurando e comprimindo aro de Pilates à frente."
    },
    "topic-band-adduct": {
        type: "image",
        src: "/media/demonstrations/topic-band-adduct-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem aproxima a perna cruzando à frente contra elástico preso lateralmente ao tornozelo."
    },
    "topic-db-triceps-back": {
        type: "image",
        src: "/media/demonstrations/topic-db-triceps-back-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz tríceps coice com halteres e tronco inclinado."
    },
    "topic-db-front": {
        type: "image",
        src: "/media/demonstrations/topic-db-front-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva halteres à frente até a altura dos ombros."
    },
    "topic-db-lateral-lunge": {
        type: "image",
        src: "/media/demonstrations/topic-db-lateral-lunge-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza afundo lateral segurando halteres."
    },
    "full-ring-side-leg": {
        type: "image",
        src: "/media/demonstrations/full-ring-side-leg-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deitado de lado com os pés dentro do aro de Pilates, elevando a perna de cima contra a parte interna superior do aro."
    },
    "topic-ball-back": {
        type: "image",
        src: "/media/demonstrations/topic-ball-back-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão do tronco com pelve apoiada sobre bola suíça."
    },
    "topic-ball-walkout": {
        type: "image",
        src: "/media/demonstrations/topic-ball-walkout-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Caminhada das mãos transferindo o apoio da bola para as pernas."
    },
    "topic-ball-side-crunch": {
        type: "image",
        src: "/media/demonstrations/topic-ball-side-crunch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdominal lateral com cintura apoiada sobre bola suíça."
    },
    "topic-balance-cushion": {
        type: "image",
        src: "/media/demonstrations/topic-balance-cushion-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Equilíbrio em pé sobre uma almofada."
    },
    "topic-walk-turn": {
        type: "image",
        src: "/media/demonstrations/topic-walk-turn-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Caminhada com mudança de direção em um quarto de volta."
    },
    "topic-hip-wall-iso": {
        type: "image",
        src: "/media/demonstrations/topic-hip-wall-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdução isométrica do quadril pressionando o joelho contra a parede."
    },
    "topic-weighted-abduction": {
        type: "image",
        src: "/media/demonstrations/topic-weighted-abduction-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdução de quadril deitado de lado com caneleira."
    },
    "topic-calf-single": {
        type: "image",
        src: "/media/demonstrations/topic-calf-single-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação de panturrilha em uma perna com apoio na cadeira."
    },
    "topic-abdominal-brace": {
        type: "image",
        src: "/media/demonstrations/topic-abdominal-brace-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Contração abdominal deitado com joelhos dobrados."
    },
    "topic-band-rotation-high": {
        type: "image",
        src: "/media/demonstrations/topic-band-rotation-high-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza rotação externa com braço elevado e elástico."
    },
    "topic-db-upright": {
        type: "image",
        src: "/media/demonstrations/topic-db-upright-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem puxa halteres das coxas até o peito em remada alta."
    },
    "topic-db-carry": {
        type: "image",
        src: "/media/demonstrations/topic-db-carry-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem caminha segurando um halter em cada mão."
    },
    "topic-neck-extend-iso": {
        type: "image",
        src: "/media/demonstrations/topic-neck-extend-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz isometria de extensão cervical contra a própria mão."
    },
    "topic-neck-band": {
        type: "image",
        src: "/media/demonstrations/topic-neck-band-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem retrai a cabeça contra elástico com antebraços apoiados na parede."
    },
    "topic-shoulder-external-stick": {
        type: "image",
        src: "/media/demonstrations/topic-shoulder-external-stick-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem roda o ombro para fora com assistência de bastão."
    },
    "topic-ball-pelvis-side": {
        type: "image",
        src: "/media/demonstrations/topic-ball-pelvis-side-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem desloca a pelve lateralmente sentado na bola suíça."
    },
    "topic-ball-pass": {
        type: "image",
        src: "/media/demonstrations/topic-ball-pass-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem passa a bola suíça das mãos para os pés deitado."
    },
    "topic-ball-side-leg": {
        type: "image",
        src: "/media/demonstrations/topic-ball-side-leg-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva lateralmente a perna apoiando o tronco na bola suíça."
    },
    "topic-balance-eyes": {
        type: "image",
        src: "/media/demonstrations/topic-balance-eyes-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem mantém equilíbrio com os pés juntos e os olhos fechados."
    },
    "topic-neck-four-point": {
        type: "image",
        src: "/media/demonstrations/topic-neck-four-point-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem movimenta o pescoço em flexão e extensão em quatro apoios."
    },
    "topic-neck-extend": {
        type: "image",
        src: "/media/demonstrations/topic-neck-extend-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem sentado olha para cima estendendo o pescoço."
    },
    "topic-ball-crunch": {
        type: "image",
        src: "/media/demonstrations/topic-ball-crunch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz abdominal curto com costas apoiadas em bola suíça."
    },
    "topic-ball-pushup": {
        type: "image",
        src: "/media/demonstrations/topic-ball-pushup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de braços com pernas apoiadas na bola suíça."
    },
    "topic-ball-forearm-plank": {
        type: "image",
        src: "/media/demonstrations/topic-ball-forearm-plank-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Prancha ajoelhada com antebraços na bola suíça."
    },
    "topic-weighted-straight-leg": {
        type: "image",
        src: "/media/demonstrations/topic-weighted-straight-leg-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação da perna estendida com caneleira em decúbito dorsal."
    },
    "topic-ball-knee-extend": {
        type: "image",
        src: "/media/demonstrations/topic-ball-knee-extend-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de joelho pressionando bola contra a parede."
    },
    "topic-ankle-invert-iso": {
        type: "image",
        src: "/media/demonstrations/topic-ankle-invert-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria de inversão do tornozelo com pressão entre os pés."
    },
    "topic-wrist-extend-iso": {
        type: "image",
        src: "/media/demonstrations/topic-wrist-extend-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria de extensão de punho com resistência manual."
    },
    "topic-ball-pelvis-forward": {
        type: "image",
        src: "/media/demonstrations/topic-ball-pelvis-forward-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentado na bola suíça, alternando a inclinação da pelve para frente e para trás, com mudança visível na curva da lombar."
    },
    "topic-wrist-radial-iso": {
        type: "image",
        src: "/media/demonstrations/topic-wrist-radial-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria de desvio radial do punho."
    },
    "topic-band-deadlift": {
        type: "image",
        src: "/media/demonstrations/topic-band-deadlift-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Levantamento terra com faixa elástica sob os pés."
    },
    "ombro-ex-0": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-0-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão dos ombros assistida com bastão."
    },
    "ombro-ex-3": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-3-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação interna de ombro contra faixa elástica fixada lateralmente."
    },
    "topic-band-hip-rotate": {
        type: "image",
        src: "/media/demonstrations/topic-band-hip-rotate-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem roda o quadril para fora com faixa no tornozelo e auxílio de terapeuta."
    },
    "topic-ball-bounce": {
        type: "image",
        src: "/media/demonstrations/topic-ball-bounce-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem quica uma bola pequena com uma mão."
    },
    "topic-weighted-extension": {
        type: "image",
        src: "/media/demonstrations/topic-weighted-extension-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem estende o joelho sentado usando caneleira."
    },
    "topic-step-square": {
        type: "image",
        src: "/media/demonstrations/topic-step-square-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem pratica passos para frente e para o lado em quatro direções."
    },
    "topic-weighted-adduction": {
        type: "image",
        src: "/media/demonstrations/topic-weighted-adduction-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva a perna inferior com caneleira em adução de quadril deitado de lado."
    },
    "topic-knee-chest": {
        type: "image",
        src: "/media/demonstrations/topic-knee-chest-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem aproxima um joelho do peito deitado de costas."
    },
    "ombro-ex-2": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-2-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação externa de ombro com elástico."
    },
    "ombro-ex-5": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-5-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação dos braços no plano da escápula."
    },
    "ombro-ex-8": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-8-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Retração escapular em pé."
    },
    "ombro-ex-11": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-11-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pêndulo de ombro com braço relaxado."
    },
    "ombro-ex-14": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-14-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento posterior do ombro cruzando o braço à frente."
    },
    "ombro-ex-17": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-17-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de braços na parede em duas fases."
    },
    "cotovelo-ex-1": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-1-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão ativa do cotovelo."
    },
    "cotovelo-ex-4": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-4-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de cotovelo com halter."
    },
    "cotovelo-ex-10": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-10-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Preensão manual com bola macia."
    },
    "topic-ankle-evert-iso": {
        type: "image",
        src: "/media/demonstrations/topic-ankle-evert-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentado com as pernas estendidas e tornozelos cruzados, pressionando as bordas externas dos pés uma contra a outra sem movimentá-los."
    },
    "ombro-ex-6": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-6-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deslizamento dos braços para cima na parede."
    },
    "ombro-ex-12": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-12-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Apoio das mãos sobre bola suíça."
    },
    "ombro-ex-15": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-15-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação lateral de ombros com halteres."
    },
    "ombro-ex-18": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-18-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Estabilização do ombro pressionando uma bola pequena contra a parede."
    },
    "cotovelo-ex-2": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-2-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pronação do antebraço segurando um bastão."
    },
    "topic-wrist-flex-iso": {
        type: "image",
        src: "/media/demonstrations/topic-wrist-flex-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem resiste à flexão do punho com a outra mão."
    },
    "topic-wrist-ulnar-iso": {
        type: "image",
        src: "/media/demonstrations/topic-wrist-ulnar-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza isometria de desvio ulnar do punho."
    },
    "topic-ankle-dorsi-iso": {
        type: "image",
        src: "/media/demonstrations/topic-ankle-dorsi-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem resiste à elevação de um pé com o outro pé sobre ele."
    },
    "topic-forearm-pronation-iso": {
        type: "image",
        src: "/media/demonstrations/topic-forearm-pronation-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem resiste à rotação do antebraço para a palma ficar voltada para baixo."
    },
    "ombro-ex-1": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-1-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva o braço para o lado com assistência de bastão."
    },
    "ombro-ex-4": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-4-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz remada em pé com faixa elástica fixada à frente."
    },
    "ombro-ex-7": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-7-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem projeta as escápulas para frente contra faixa elástica."
    },
    "ombro-ex-10": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-10-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem faz isometria de rotação interna do ombro contra a mão oposta."
    },
    "ombro-ex-13": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-13-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem eleva um braço acima da cabeça deitado de costas."
    },
    "mao-ex-0": {
        type: "image",
        src: "/media/demonstrations/mao-ex-0-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão ativa do punho com antebraço apoiado."
    },
    "mao-ex-6": {
        type: "image",
        src: "/media/demonstrations/mao-ex-6-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abertura dos dedos com a mão apoiada."
    },
    "mao-ex-10": {
        type: "image",
        src: "/media/demonstrations/mao-ex-10-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdução do polegar."
    },
    "mao-ex-13": {
        type: "image",
        src: "/media/demonstrations/mao-ex-13-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pronação e supinação do antebraço."
    },
    "cotovelo-ex-14": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-14-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento dos flexores do punho."
    },
    "coluna-ex-0": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-0-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Inclinação pélvica posterior deitado com joelhos flexionados."
    },
    "coluna-ex-4": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-4-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão alternada de braço e perna em quatro apoios."
    },
    "coluna-ex-7": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-7-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Prancha lateral com joelhos apoiados."
    },
    "review-band-wrist-ulnar": {
        type: "image",
        src: "/media/demonstrations/review-band-wrist-ulnar-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Com o antebraço apoiado e polegar para cima, inclinando a mão para o lado do mínimo contra a faixa sustentada pela outra mão acima."
    },
    "review-ball-bridge": {
        type: "image",
        src: "/media/demonstrations/review-ball-bridge-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Ponte de glúteos com os calcanhares na bola suíça: quadril apoiado no colchonete e depois elevado."
    },
    "review-ball-opposite": {
        type: "image",
        src: "/media/demonstrations/review-ball-opposite-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "De bruços sobre a bola suíça, elevando um braço à frente e a perna oposta para trás, mantendo os outros dois apoios no chão."
    },
    "mao-ex-3": {
        type: "image",
        src: "/media/demonstrations/mao-ex-3-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Com o antebraço e a palma apoiados, movendo a mão para o lado do dedo mínimo sem levantar o punho."
    },
    "cotovelo-ex-5": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-5-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão do cotovelo com faixa elástica presa acima."
    },
    "cotovelo-ex-8": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-8-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão excêntrica do punho com halter e antebraço apoiado."
    },
    "cotovelo-ex-11": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-11-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Desvio radial do punho segurando um halter."
    },
    "cotovelo-ex-15": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-15-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pronação do antebraço segurando um halter."
    },
    "cotovelo-ex-18": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-18-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão dos cotovelos com halteres em pegada neutra."
    },
    "ombro-ex-16": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-16-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem estende o ombro para trás contra faixa elástica."
    },
    "cotovelo-ex-0": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-0-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem dobra ativamente o cotovelo sem equipamento."
    },
    "cotovelo-ex-3": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-3-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem gira a palma para cima segurando bastão por uma extremidade."
    },
    "cotovelo-ex-6": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-6-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem resiste à flexão do cotovelo com a mão oposta."
    },
    "coluna-ex-10": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-10-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão torácica sobre toalha enrolada."
    },
    "coluna-ex-13": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-13-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento dos flexores do quadril ajoelhado."
    },
    "coluna-ex-17": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-17-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Marcha estacionária alternando os joelhos."
    },
    "quadril-ex-1": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-1-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdução de quadril em decúbito lateral."
    },
    "quadril-ex-5": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-5-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Adução de quadril comprimindo bola entre os joelhos."
    },
    "quadril-ex-10": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-10-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Subida no degrau."
    },
    "quadril-ex-17": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-17-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria dos glúteos em decúbito dorsal."
    },
    "joelho-ex-2": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-2-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Agachamento parcial sem equipamento."
    },
    "joelho-ex-7": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-7-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deslizamento do calcanhar para flexão do joelho."
    },
    "ombro-ex-9": {
        type: "image",
        src: "/media/demonstrations/ombro-ex-9-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Com o cotovelo junto ao corpo, tentando girar o antebraço para fora enquanto a outra mão envolve o punho e impede o movimento."
    },
    "review-ball-alphabet": {
        type: "image",
        src: "/media/demonstrations/review-ball-alphabet-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Ajoelhado com antebraços na bola suíça, deslocando-a em pequenos trajetos enquanto mantém o tronco estável."
    },
    "review-band-wrist-flex": {
        type: "image",
        src: "/media/demonstrations/review-band-wrist-flex-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Com a palma para cima e antebraço apoiado, dobrando o punho para cima contra a faixa elástica."
    },
    "review-ball-catch": {
        type: "image",
        src: "/media/demonstrations/review-ball-catch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Lançando uma bola pequena suavemente para cima e recebendo-a com a mesma mão."
    },
    "mao-ex-4": {
        type: "image",
        src: "/media/demonstrations/mao-ex-4-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Oposição do polegar até o dedo mínimo."
    },
    "mao-ex-8": {
        type: "image",
        src: "/media/demonstrations/mao-ex-8-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pinça de ponta comprimindo massa terapêutica."
    },
    "mao-ex-11": {
        type: "image",
        src: "/media/demonstrations/mao-ex-11-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de punho com halter e palma voltada para cima."
    },
    "coluna-ex-2": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-2-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Gato e camelo em quatro apoios."
    },
    "cotovelo-ex-13": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-13-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento dos extensores do punho com auxílio da outra mão."
    },
    "cotovelo-ex-16": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-16-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Supinação do antebraço com halter, passando da posição neutra para palma para cima."
    },
    "cotovelo-ex-19": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-19-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de cotovelo auxiliada pela outra mão puxando toalha sob o antebraço."
    },
    "mao-ex-2": {
        type: "image",
        src: "/media/demonstrations/mao-ex-2-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Desvio radial do punho com mão apoiada, movendo-a em direção ao polegar."
    },
    "joelho-ex-17": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-17-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de joelhos com bola suíça."
    },
    "pe-ex-10": {
        type: "image",
        src: "/media/demonstrations/pe-ex-10-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Equilíbrio bipodal."
    },
    "pe-ex-19": {
        type: "image",
        src: "/media/demonstrations/pe-ex-19-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rolamento plantar com bola pequena."
    },
    "lib-bench-press": {
        type: "image",
        src: "/media/demonstrations/lib-bench-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Supino com halteres no banco plano."
    },
    "lib-pullover": {
        type: "image",
        src: "/media/demonstrations/lib-pullover-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de ombro deitado com halter."
    },
    "lib-crunch": {
        type: "image",
        src: "/media/demonstrations/lib-crunch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão abdominal curta."
    },
    "cotovelo-ex-9": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-9-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Com o antebraço apoiado e palma para cima, abaixando lentamente o halter do punho flexionado até a posição neutra."
    },
    "lib-reach-side": {
        type: "image",
        src: "/media/demonstrations/lib-reach-side-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentado com os pés apoiados, alcançando para o lado com um braço e inclinando o tronco na mesma direção."
    },
    "review-ball-wall-squat": {
        type: "image",
        src: "/media/demonstrations/review-ball-wall-squat-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Em pé com bola suíça entre a lombar e a parede, depois agachando com os pés apoiados."
    },
    "review-band-wrist-extend": {
        type: "image",
        src: "/media/demonstrations/review-band-wrist-extend-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Com o antebraço apoiado e palma para baixo, elevando a mão contra a faixa elástica sustentada pela outra mão."
    },
    "mao-ex-1": {
        type: "image",
        src: "/media/demonstrations/mao-ex-1-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Antebraço apoiado com palma para baixo, elevando a mão pela extensão do punho sem peso."
    },
    "mao-ex-18": {
        type: "image",
        src: "/media/demonstrations/mao-ex-18-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Transferência de pequenos objetos para recipiente."
    },
    "coluna-ex-5": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-5-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão alternada de braço e perna deitado de bruços."
    },
    "coluna-ex-8": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-8-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Retração cervical com o olhar mantido à frente."
    },
    "coluna-ex-11": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-11-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação lombar deitado com joelhos flexionados."
    },
    "coluna-ex-15": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-15-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentar e levantar da cadeira sem apoio das mãos."
    },
    "mao-ex-5": {
        type: "image",
        src: "/media/demonstrations/mao-ex-5-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deslizamento dos tendões com dedos retos e posição em gancho."
    },
    "mao-ex-12": {
        type: "image",
        src: "/media/demonstrations/mao-ex-12-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão do punho com halter e antebraço apoiado na mesa."
    },
    "mao-ex-19": {
        type: "image",
        src: "/media/demonstrations/mao-ex-19-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Apoio progressivo nas mãos em quatro apoios, transferindo o peso para a frente."
    },
    "coluna-ex-3": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-3-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação torácica deitado de lado, abrindo o braço superior."
    },
    "coluna-ex-6": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-6-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Prancha isométrica nos antebraços com joelhos apoiados."
    },
    "coluna-ex-9": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-9-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação cervical ativa, virando a cabeça para o lado."
    },
    "lib-cobra": {
        type: "image",
        src: "/media/demonstrations/lib-cobra-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de tronco apoiado nas mãos."
    },
    "lib-bridge-single": {
        type: "image",
        src: "/media/demonstrations/lib-bridge-single-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Ponte de quadril unilateral."
    },
    "lib-scalene-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-scalene-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentado, estabilizando a clavícula com uma mão e inclinando suavemente a cabeça para alongar a lateral do pescoço."
    },
    "lib-reverse-fly": {
        type: "image",
        src: "/media/demonstrations/lib-reverse-fly-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "De bruços sobre uma maca, elevando o braço com halter para o lado até a altura do ombro."
    },
    "lib-roller-extension": {
        type: "image",
        src: "/media/demonstrations/lib-roller-extension-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Com rolo sob a parte alta das costas, estendendo suavemente a região torácica com a cabeça apoiada pelas mãos."
    },
    "lib-tandem": {
        type: "image",
        src: "/media/demonstrations/lib-tandem-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Equilíbrio com um pé alinhado à frente do outro, calcanhar junto aos dedos, ao lado de uma cadeira."
    },
    "mao-ex-9": {
        type: "image",
        src: "/media/demonstrations/mao-ex-9-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abrindo e estendendo os dedos contra um elástico colocado ao redor das pontas."
    },
    "coluna-ex-18": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-18-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Equilíbrio sentado na bola suíça com braços abertos."
    },
    "quadril-ex-2": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-2-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abertura do joelho superior de lado contra mini band."
    },
    "quadril-ex-6": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-6-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdução de quadril em pé contra faixa elástica presa lateralmente."
    },
    "quadril-ex-11": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-11-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Descida controlada de degrau."
    },
    "quadril-ex-15": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-15-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Ponte de glúteos com mini band acima dos joelhos."
    },
    "quadril-ex-19": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-19-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de quadril em quatro apoios com joelho dobrado."
    },
    "joelho-ex-5": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-5-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de joelho sentado contra elástico."
    },
    "joelho-ex-15": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-15-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão terminal do joelho em pé sem equipamento."
    },
    "coluna-ex-12": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-12-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Respiração diafragmática deitado com mãos no peito e abdome."
    },
    "coluna-ex-16": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-16-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de quadril em pé levando uma perna para trás."
    },
    "coluna-ex-19": {
        type: "image",
        src: "/media/demonstrations/coluna-ex-19-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Agachamento parcial segurando o encosto de uma cadeira."
    },
    "quadril-ex-4": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-4-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de quadril em pé elevando o joelho."
    },
    "quadril-ex-7": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-7-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Passo lateral com mini band acima dos joelhos."
    },
    "quadril-ex-12": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-12-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Equilíbrio em uma perna com apoio da mão na cadeira."
    },
    "quadril-ex-16": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-16-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação da perna estendida deitado."
    },
    "joelho-ex-0": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-0-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Contração isométrica do quadríceps com perna estendida."
    },
    "joelho-ex-6": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-6-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de joelho em pé aproximando o calcanhar do glúteo."
    },
    "lib-step-tap": {
        type: "image",
        src: "/media/demonstrations/lib-step-tap-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Toques alternados no step."
    },
    "lib-prone-hip": {
        type: "image",
        src: "/media/demonstrations/lib-prone-hip-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de quadril em decúbito ventral."
    },
    "pe-ex-14": {
        type: "image",
        src: "/media/demonstrations/pe-ex-14-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Caminhada sobre os calcanhares."
    },
    "lib-pushup": {
        type: "image",
        src: "/media/demonstrations/lib-pushup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de braços no solo, início e descida."
    },
    "lib-neck-side": {
        type: "image",
        src: "/media/demonstrations/lib-neck-side-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Inclinação lateral cervical ativa."
    },
    "lib-trap-prone": {
        type: "image",
        src: "/media/demonstrations/lib-trap-prone-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação dos braços em Y deitado."
    },
    "lib-palmar-pinch": {
        type: "image",
        src: "/media/demonstrations/lib-palmar-pinch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pinça palmar com massa terapêutica."
    },
    "lib-finger-roll": {
        type: "image",
        src: "/media/demonstrations/lib-finger-roll-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão dos dedos rolando massa terapêutica."
    },
    "lib-thumb-flex": {
        type: "image",
        src: "/media/demonstrations/lib-thumb-flex-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão do polegar contra massa terapêutica."
    },
    "lib-levator-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-levator-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentado, girando a cabeça e aproximando o queixo da axila oposta para alongar a região posterior lateral do pescoço."
    },
    "lib-chest-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-chest-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Em pé, afastando as mãos unidas atrás do quadril para abrir suavemente o peito."
    },
    "lib-reach-seated": {
        type: "image",
        src: "/media/demonstrations/lib-reach-seated-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentado com pés apoiados, inclinando o tronco para alcançar à frente com os dois braços."
    },
    "joelho-ex-18": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-18-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento de panturrilha em posição de passada."
    },
    "pe-ex-1": {
        type: "image",
        src: "/media/demonstrations/pe-ex-1-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão plantar contra faixa elástica segurada nas mãos."
    },
    "pe-ex-5": {
        type: "image",
        src: "/media/demonstrations/pe-ex-5-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação dos calcanhares sentado em cadeira."
    },
    "pe-ex-8": {
        type: "image",
        src: "/media/demonstrations/pe-ex-8-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão dos dedos do pé para puxar uma toalha."
    },
    "pe-ex-12": {
        type: "image",
        src: "/media/demonstrations/pe-ex-12-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Transferência lateral de peso em pé."
    },
    "pe-ex-16": {
        type: "image",
        src: "/media/demonstrations/pe-ex-16-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Mobilidade ativa dos tornozelos sentado com pernas estendidas."
    },
    "lib-pushup-knees": {
        type: "image",
        src: "/media/demonstrations/lib-pushup-knees-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão de braços com os joelhos apoiados."
    },
    "lib-incline-press": {
        type: "image",
        src: "/media/demonstrations/lib-incline-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Supino inclinado com halteres."
    },
    "lib-triceps-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-triceps-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento de tríceps com o braço acima da cabeça."
    },
    "lib-lat-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-lat-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento dorsal com tronco inclinado e mãos na parede."
    },
    "lib-inverted-v": {
        type: "image",
        src: "/media/demonstrations/lib-inverted-v-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Apoio em V invertido no solo."
    },
    "joelho-ex-16": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-16-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Agachamento isométrico com costas apoiadas na parede."
    },
    "joelho-ex-19": {
        type: "image",
        src: "/media/demonstrations/joelho-ex-19-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Marcha passando sobre cones baixos."
    },
    "pe-ex-2": {
        type: "image",
        src: "/media/demonstrations/pe-ex-2-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Inversão do tornozelo contra faixa elástica presa lateralmente."
    },
    "pe-ex-6": {
        type: "image",
        src: "/media/demonstrations/pe-ex-6-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Mobilidade de tornozelo levando o joelho à parede sem levantar o calcanhar."
    },
    "pe-ex-9": {
        type: "image",
        src: "/media/demonstrations/pe-ex-9-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão dos dedos do pé mantendo a base do antepé apoiada."
    },
    "pe-ex-13": {
        type: "image",
        src: "/media/demonstrations/pe-ex-13-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Marcha na ponta dos pés com calcanhares elevados."
    },
    "pe-ex-17": {
        type: "image",
        src: "/media/demonstrations/pe-ex-17-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alcance do pé em direções da estrela com apoio na outra perna."
    },
    "lib-inchworm": {
        type: "image",
        src: "/media/demonstrations/lib-inchworm-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Caminhada das mãos à frente até a posição de prancha."
    },
    "lib-thumb-extension": {
        type: "image",
        src: "/media/demonstrations/lib-thumb-extension-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão do polegar contra massa terapêutica."
    },
    "lib-hip-adduction": {
        type: "image",
        src: "/media/demonstrations/lib-hip-adduction-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Adução de quadril em decúbito lateral."
    },
    "lib-calf-towel": {
        type: "image",
        src: "/media/demonstrations/lib-calf-towel-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento de panturrilha com toalha."
    },
    "topic-shoulder-internal-stick": {
        type: "image",
        src: "/media/demonstrations/topic-shoulder-internal-stick-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação interna de ombro assistida por bastão."
    },
    "lib-hip-rotation-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-hip-rotation-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento sentado em rotação de quadril e tronco."
    },
    "lib-neck-rotate-iso": {
        type: "image",
        src: "/media/demonstrations/lib-neck-rotate-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria de rotação cervical contra resistência da mão."
    },
    "lib-neck-ball": {
        type: "image",
        src: "/media/demonstrations/lib-neck-ball-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação cervical apoiada em bola pequena."
    },
    "topic-walk-head": {
        type: "image",
        src: "/media/demonstrations/topic-walk-head-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Caminhada com movimentos da cabeça."
    },
    "topic-neck-reposition": {
        type: "image",
        src: "/media/demonstrations/topic-neck-reposition-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Reposicionamento da cabeça em direção ao polegar como alvo visual."
    },
    "lib-cadillac-curl": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-curl-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rosca com barra e duas molas inferiores, cotovelos flexionam com tronco estável."
    },
    "lib-cadillac-boxing": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-boxing-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Empurradas alternadas com molas ancoradas atrás dos ombros, braços alternam flexão e extensão."
    },
    "lib-cadillac-shaving": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-shaving-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão dos cotovelos da altura da testa para diagonal superior, molas externas aos braços."
    },
    "lib-chair-pushup": {
        type: "image",
        src: "/media/demonstrations/lib-chair-pushup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão em prancha, uma mão no pedal baixo e outra no bloco, corpo alinhado."
    },
    "lib-chair-pushdown": {
        type: "image",
        src: "/media/demonstrations/lib-chair-pushdown-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão do tronco em pé pressionando pedal com braços longos, pés apoiados."
    },
    "lib-barrel-back": {
        type: "image",
        src: "/media/demonstrations/lib-barrel-back-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pé posterior no Barrel e mãos na escada, joelho de apoio flexiona suavemente com tronco ereto."
    },
    "lib-chair-upside": {
        type: "image",
        src: "/media/demonstrations/lib-chair-upside-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Subida lateral com pé interno no assento e externo no pedal, elevação controlada do corpo."
    },
    "lib-swan-cadillac": {
        type: "image",
        src: "/media/demonstrations/lib-swan-cadillac-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deitado de barriga para baixo no Cadillac, elevando o peito com os braços estendidos na barra."
    },
    "lib-bent-row": {
        type: "image",
        src: "/media/demonstrations/lib-bent-row-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Remada curvada com barra e anilhas."
    },
    "lib-fire-hydrant": {
        type: "image",
        src: "/media/demonstrations/lib-fire-hydrant-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdução de quadril em quatro apoios."
    },
    "lib-single-squat": {
        type: "image",
        src: "/media/demonstrations/lib-single-squat-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Agachamento unipodal com apoio no encosto de cadeira."
    },
    "lib-lateral-step": {
        type: "image",
        src: "/media/demonstrations/lib-lateral-step-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Subida lateral em degrau baixo."
    },
    "lib-deadlift": {
        type: "image",
        src: "/media/demonstrations/lib-deadlift-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Levantamento terra com halteres."
    },
    "lib-back-walk": {
        type: "image",
        src: "/media/demonstrations/lib-back-walk-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Passo para trás durante caminhada retrógrada."
    },
    "lib-hamstring-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-hamstring-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento posterior da coxa deitado segurando a coxa."
    },
    "lib-chest-fly": {
        type: "image",
        src: "/media/demonstrations/lib-chest-fly-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Crucifixo deitado no banco com halteres."
    },
    "lib-triceps-lying": {
        type: "image",
        src: "/media/demonstrations/lib-triceps-lying-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de tríceps deitado no banco com barra."
    },
    "lib-child-pose": {
        type: "image",
        src: "/media/demonstrations/lib-child-pose-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento na posição de criança com braços à frente."
    },
    "lib-prone-opposite": {
        type: "image",
        src: "/media/demonstrations/lib-prone-opposite-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação de braço e perna opostos deitado de barriga para baixo."
    },
    "lib-front-squat": {
        type: "image",
        src: "/media/demonstrations/lib-front-squat-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Agachamento frontal segurando halteres junto aos ombros."
    },
    "lib-forward-lunge": {
        type: "image",
        src: "/media/demonstrations/lib-forward-lunge-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Avanço à frente flexionando os dois joelhos."
    },
    "lib-band-fly": {
        type: "image",
        src: "/media/demonstrations/lib-band-fly-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Crucifixo em pé com elásticos presos atrás do corpo."
    },
    "lib-disc-stand": {
        type: "image",
        src: "/media/demonstrations/lib-disc-stand-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Equilíbrio no disco com apoio das mãos na cadeira."
    },
    "full-y-band-neck": {
        type: "image",
        src: "/media/demonstrations/full-y-band-neck-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação dos braços em Y com elástico e controle cervical."
    },
    "topic-db-diagonal": {
        type: "image",
        src: "/media/demonstrations/topic-db-diagonal-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação diagonal com halter."
    },
    "cotovelo-ex-17": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-17-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Apoio das mãos na parede."
    },
    "topic-forearm-supination-iso": {
        type: "image",
        src: "/media/demonstrations/topic-forearm-supination-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria de supinação do antebraço."
    },
    "cotovelo-ex-7": {
        type: "image",
        src: "/media/demonstrations/cotovelo-ex-7-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria de extensão de cotovelo."
    },
    "lib-bosu-plank": {
        type: "image",
        src: "/media/demonstrations/lib-bosu-plank-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Prancha com apoio no Bosu."
    },
    "pe-ex-7": {
        type: "image",
        src: "/media/demonstrations/pe-ex-7-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Ativação do arco plantar sentado."
    },
    "lib-chin-up": {
        type: "image",
        src: "/media/demonstrations/lib-chin-up-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Tração na barra com pegada supinada."
    },
    "topic-ball-target": {
        type: "image",
        src: "/media/demonstrations/topic-ball-target-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Arremesso de bola pequena em alvo."
    },
    "lib-band-chest-press": {
        type: "image",
        src: "/media/demonstrations/lib-band-chest-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Em pé com um pé à frente, empurrando um pegador de elástico à frente do peito."
    },
    "lib-barrel-side-situp": {
        type: "image",
        src: "/media/demonstrations/lib-barrel-side-situp-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Com o quadril apoiado no Barrel e pés na escada, inclinando e elevando o tronco de lado."
    },
    "lib-cadillac-sideleg": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-sideleg-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deitado de lado no Cadillac, movendo a perna superior à frente e para trás com uma alça presa à mola."
    },
    "lib-quad-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-quad-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento anterior da coxa em pé."
    },
    "lib-toe-pickup": {
        type: "image",
        src: "/media/demonstrations/lib-toe-pickup-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Recolher uma bolinha com os dedos do pé."
    },
    "lib-upper-trap-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-upper-trap-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento do trapézio superior com inclinação lateral da cabeça."
    },
    "lib-hook-grip": {
        type: "image",
        src: "/media/demonstrations/lib-hook-grip-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Preensão em gancho comprimindo massa terapêutica."
    },
    "lib-finger-adduct": {
        type: "image",
        src: "/media/demonstrations/lib-finger-adduct-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Adução dos dedos contra massa terapêutica."
    },
    "lib-thumb-adduct": {
        type: "image",
        src: "/media/demonstrations/lib-thumb-adduct-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Adução do polegar comprimindo massa terapêutica."
    },
    "lib-finger-scratch": {
        type: "image",
        src: "/media/demonstrations/lib-finger-scratch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão dos dedos em arraste na massa terapêutica."
    },
    "lib-hundred": {
        type: "image",
        src: "/media/demonstrations/lib-hundred-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Bombeamento dos braços com sustentação abdominal."
    },
    "lib-single-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-single-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alternância de pernas com sustentação abdominal."
    },
    "lib-single-kick": {
        type: "image",
        src: "/media/demonstrations/lib-single-kick-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão alternada dos joelhos deitado de barriga para baixo."
    },
    "lib-side-kneel": {
        type: "image",
        src: "/media/demonstrations/lib-side-kneel-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdução de quadril em apoio lateral ajoelhado."
    },
    "lib-spine-twist": {
        type: "image",
        src: "/media/demonstrations/lib-spine-twist-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação de tronco sentado com braços abertos."
    },
    "lib-offset-stand": {
        type: "image",
        src: "/media/demonstrations/lib-offset-stand-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentar e levantar com um pé mais à frente do outro."
    },
    "lib-weighted-curl": {
        type: "image",
        src: "/media/demonstrations/lib-weighted-curl-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão do joelho em pé com caneleira e apoio na cadeira."
    },
    "lib-side-walk": {
        type: "image",
        src: "/media/demonstrations/lib-side-walk-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Caminhada lateral cruzando uma perna à frente da outra."
    },
    "lib-soleus-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-soleus-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento da panturrilha com joelho posterior dobrado e mãos na parede."
    },
    "lib-ankle-alphabet": {
        type: "image",
        src: "/media/demonstrations/lib-ankle-alphabet-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Movimento do tornozelo no ar para desenhar letras com o pé."
    },
    "lib-neck-side-iso": {
        type: "image",
        src: "/media/demonstrations/lib-neck-side-iso-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Isometria cervical com a mão apoiada na lateral da cabeça."
    },
    "lib-key-pinch": {
        type: "image",
        src: "/media/demonstrations/lib-key-pinch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pinça lateral comprimindo massa entre polegar e lateral do indicador."
    },
    "lib-finger-abduct": {
        type: "image",
        src: "/media/demonstrations/lib-finger-abduct-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abertura dos dedos contra um anel de massa terapêutica."
    },
    "lib-tripod-pinch": {
        type: "image",
        src: "/media/demonstrations/lib-tripod-pinch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pinça trípode comprimindo massa com polegar, indicador e médio."
    },
    "mw-band-cross-press": {
        type: "image",
        src: "/media/demonstrations/mw-band-cross-press-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Pressão cruzada de peito com elástico."
    },
    "quadril-ex-13": {
        type: "image",
        src: "/media/demonstrations/quadril-ex-13-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Mobilidade de rotação do quadril."
    },
    "topic-back-rotation-stretch": {
        type: "image",
        src: "/media/demonstrations/topic-back-rotation-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento lombar com rotação do tronco sentado."
    },
    "pe-ex-0": {
        type: "image",
        src: "/media/demonstrations/pe-ex-0-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Dorsiflexão do tornozelo com faixa elástica."
    },
    "lib-leg-circles": {
        type: "image",
        src: "/media/demonstrations/lib-leg-circles-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Círculos de uma perna no solo."
    },
    "lib-criss-cross": {
        type: "image",
        src: "/media/demonstrations/lib-criss-cross-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdominal com rotação e pernas alternadas."
    },
    "lib-barrel-front": {
        type: "image",
        src: "/media/demonstrations/lib-barrel-front-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Perna longa apoiada no Barrel, inclinação suave do tronco e apoio posterior na escada."
    },
    "lib-barrel-side-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-barrel-side-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento lateral preparatório com pés no chão, lado do tronco no Barrel e mãos na escada."
    },
    "lib-corrector-arm": {
        type: "image",
        src: "/media/demonstrations/lib-corrector-arm-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Arcos dos braços com costas e cabeça apoiadas no Spine Corrector, pernas longas."
    },
    "lib-chair-upfront": {
        type: "image",
        src: "/media/demonstrations/lib-chair-upfront-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Subida frontal, pé da frente no assento e posterior no pedal, tronco ereto."
    },
    "lib-chair-backarms": {
        type: "image",
        src: "/media/demonstrations/lib-chair-backarms-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Sentado no chão de costas para a Chair, extensão dos cotovelos pressiona o pedal atrás da pelve. Layout corrigido para duas colunas."
    },
    "lib-chair-mermaid": {
        type: "image",
        src: "/media/demonstrations/lib-chair-mermaid-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Variação ajoelhada, mão no pedal e braço oposto sobre a cabeça durante inclinação lateral."
    },
    "lib-barrel-side": {
        type: "image",
        src: "/media/demonstrations/lib-barrel-side-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Perna apoiada lateralmente no Barrel e tronco inclina suavemente sobre ela."
    },
    "lib-barrel-swan": {
        type: "image",
        src: "/media/demonstrations/lib-barrel-swan-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão preparatória do tronco com pelve apoiada no Barrel e pés na escada, mãos atrás da cabeça. Layout corrigido."
    },
    "lib-neck-flex": {
        type: "image",
        src: "/media/demonstrations/lib-neck-flex-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão ativa da cabeça com tronco estável e mãos nas coxas."
    },
    "lib-frog-straps": {
        type: "image",
        src: "/media/demonstrations/lib-frog-straps-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem estende as pernas com os pés nas alças do Reformer."
    },
    "lib-pelvic-lift": {
        type: "image",
        src: "/media/demonstrations/lib-pelvic-lift-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem realiza ponte de glúteos com os pés na barra do Reformer."
    },
    "lib-pull-straps": {
        type: "image",
        src: "/media/demonstrations/lib-pull-straps-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem puxa as alças até os quadris deitado de barriga para baixo sobre a caixa do Reformer."
    },
    "lib-roll-down": {
        type: "image",
        src: "/media/demonstrations/lib-roll-down-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem enrola a coluna para trás segurando a barra com molas do Cadillac."
    },
    "lib-cadillac-leg-walk": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-leg-walk-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem alterna a altura das pernas estendidas com molas no Cadillac."
    },
    "lib-thigh-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-thigh-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem inclina o tronco para trás ajoelhado no Cadillac, segurando a barra com molas."
    },
    "lib-cadillac-squat": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-squat-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem agacha segurando a barra com molas do Cadillac."
    },
    "lib-chair-footwork": {
        type: "image",
        src: "/media/demonstrations/lib-chair-footwork-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem sentado na Chair flexiona e estende os joelhos pressionando o pedal."
    },
    "lib-thumb-abduct": {
        type: "image",
        src: "/media/demonstrations/lib-thumb-abduct-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Abdução do polegar esticando massa entre polegar e indicador."
    },
    "lib-roll-up": {
        type: "image",
        src: "/media/demonstrations/lib-roll-up-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Elevação do tronco com enrolamento da coluna e pernas estendidas."
    },
    "lib-double-kick": {
        type: "image",
        src: "/media/demonstrations/lib-double-kick-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão dos joelhos seguida de extensão de tronco com mãos unidas atrás."
    },
    "lib-double-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-double-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão simultânea de braços e pernas com abdômen sustentado."
    },
    "lib-spine-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-spine-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento da coluna sentado com pernas estendidas e braços à frente."
    },
    "lib-mermaid-mat": {
        type: "image",
        src: "/media/demonstrations/lib-mermaid-mat-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Inclinação lateral sentado no solo com pernas dobradas e braço acima da cabeça."
    },
    "lib-elephant": {
        type: "image",
        src: "/media/demonstrations/lib-elephant-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deslocamento do carro com pés apoiados e mãos na barra do Reformer."
    },
    "pe-ex-3": {
        type: "image",
        src: "/media/demonstrations/pe-ex-3-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Eversão de tornozelo com elástico."
    },
    "lib-footwork": {
        type: "image",
        src: "/media/demonstrations/lib-footwork-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Flexão e extensão dos joelhos no Reformer."
    },
    "lib-tree": {
        type: "image",
        src: "/media/demonstrations/lib-tree-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alongamento de perna na caixa do Reformer."
    },
    "lib-side-splits": {
        type: "image",
        src: "/media/demonstrations/lib-side-splits-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Afastamento lateral das pernas no Reformer."
    },
    "topic-hip-internal-band": {
        type: "image",
        src: "/media/demonstrations/topic-hip-internal-band-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação interna do quadril em pé com elástico."
    },
    "lib-it-band-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-it-band-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Em pé com a perna junto à parede cruzada atrás, aproximando o quadril da parede."
    },
    "lib-side-kick": {
        type: "image",
        src: "/media/demonstrations/lib-side-kick-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deitado de lado no colchonete, levando a perna superior estendida à frente e para trás."
    },
    "lib-tandem-walk": {
        type: "image",
        src: "/media/demonstrations/lib-tandem-walk-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Marcha tandem representada por dois apoios sucessivos, calcanhar encosta nos dedos do pé posterior, braços abertos para equilíbrio."
    },
    "lib-saw": {
        type: "image",
        src: "/media/demonstrations/lib-saw-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Rotação do tronco sentado com mão direita alcançando o pé esquerdo, braço oposto para trás e pernas mantidas no solo."
    },
    "lib-chair-legpress": {
        type: "image",
        src: "/media/demonstrations/lib-chair-legpress-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem em pé pressiona o pedal da Chair com uma perna."
    },
    "lib-chair-swan": {
        type: "image",
        src: "/media/demonstrations/lib-chair-swan-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Homem apoiado de barriga para baixo na Chair eleva o tronco pressionando o pedal."
    },
    "lib-long-stretch": {
        type: "image",
        src: "/media/demonstrations/lib-long-stretch-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Prancha com deslocamento do carro no Reformer."
    },
    "lib-chest-expansion": {
        type: "image",
        src: "/media/demonstrations/lib-chest-expansion-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Extensão dos ombros ajoelhado com barra e molas no Cadillac."
    },
    "lib-running-reformer": {
        type: "image",
        src: "/media/demonstrations/lib-running-reformer-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Alternância dos calcanhares no Reformer, com um joelho flexionado e o outro estendido."
    },
    "lib-circles-straps": {
        type: "image",
        src: "/media/demonstrations/lib-circles-straps-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Círculos de pernas no Reformer, com pernas juntas e abertas e cada pé em sua alça."
    },
    "lib-cadillac-triceps": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-triceps-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Deitado no Cadillac, estendendo os cotovelos ao lado do tronco enquanto segura os puxadores das molas."
    },
    "lib-cadillac-arm-circles": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-arm-circles-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Círculos dos braços em pé no Cadillac, com duas molas e braços passando da posição baixa à elevada."
    },
    "lib-mermaid-cadillac": {
        type: "image",
        src: "/media/demonstrations/lib-mermaid-cadillac-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Inclinação lateral sentado no Cadillac, com pés na caixa e uma mão pressionando a barra enquanto o outro braço passa sobre a cabeça."
    },
    "lib-cadillac-bicycle": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-bicycle-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Bicicleta com molas no Cadillac, alternando uma perna flexionada e a outra estendida com a cabeça apoiada."
    },
    "lib-cadillac-hug": {
        type: "image",
        src: "/media/demonstrations/lib-cadillac-hug-web.webp",
        layout: "start-end",
        generated: !0,
        alt: "Em pé diante do Cadillac, fechando os braços à frente do peito com as alças das molas."
    }
}
  , Gh = {
    ...Lh,
    "coluna-ex-1": {
        type: "image",
        src: "/media/demonstrations/ponte-gluteos.png",
        layout: "start-end",
        generated: !0,
        alt: "Ponte de glúteos: à esquerda, deitado com joelhos flexionados e quadril no chão; à direita, quadril elevado com pés e ombros apoiados."
    },
    "joelho-ex-13": {
        type: "image",
        src: "/media/demonstrations/panturrilha-em-pe.png",
        layout: "start-end",
        generated: !0,
        alt: "Elevação de panturrilha em pé: à esquerda, calcanhares apoiados; à direita, calcanhares elevados e joelhos estendidos."
    },
    "lib-knee-extension": {
        type: "image",
        src: "/media/demonstrations/extensao-joelho-sentado.png",
        layout: "start-end",
        generated: !0,
        alt: "Extensão de joelho sentado: à esquerda, joelho flexionado com o pé no chão; à direita, a mesma perna estendida à frente, mantendo a coxa apoiada na cadeira."
    }
}
  , Zh = [["band-curl", "Rosca de bíceps com elástico", "braco,cotovelo", ["elastic_band"], ["strength"], "nchpad-resistance", "Resistência elástica, distinta da carga gravitacional do halter."], ["band-lateral", "Elevação lateral com elástico", "ombro", ["elastic_band"], ["strength"], "nchpad-resistance", "Abdução resistida; distinta de flexão e rotações."], ["band-press", "Desenvolvimento de ombros com elástico", "ombro,braco,cotovelo", ["elastic_band", "chair"], ["strength"], "nchpad-resistance", "Empurrada acima da cabeça, diferente da pressão à frente do peito."], ["band-rotation-high", "Rotação externa com braço elevado e elástico", "ombro", ["elastic_band"], ["strength"], "aaos-shoulder", "Braço elevado a 90 graus altera a posição de trabalho dos rotadores."], ["band-reverse-fly", "Crucifixo inverso ajoelhado com elástico", "ombro,trapezio,toracica", ["elastic_tube"], ["strength"], "ace-kneeling-fly", "Abertura em arco com cotovelos estendidos; não é remada."], ["band-knee-curl", "Flexão de joelho com elástico", "joelho,posterior_coxa", ["elastic_band"], ["strength"], "nhs-knee-band", "Flexão resistida, distinta da extensão de joelho."], ["band-hip-extend", "Extensão de quadril com elástico", "quadril,gluteos,posterior_coxa", ["elastic_band"], ["strength"], "nhs-hip-progressive", "Movimento para trás com resistência elástica."], ["band-adduct", "Adução de quadril com elástico", "quadril,coxa", ["elastic_band"], ["strength"], "nhs-adductor", "Tração para dentro contra faixa ancorada; diferente da compressão de bola."], ["band-squat", "Agachamento com mini band", "quadril,gluteos,coxa,joelho", ["mini_band"], ["strength", "functional"], "nhs-gluteal", "Resistência lateral nos joelhos durante agachamento."], ["band-hip-rotate", "Rotação externa de quadril deitado com elástico", "quadril,gluteos", ["elastic_band"], ["strength"], "research-hip-band", "Rotação resistida deitado, diferente da abdução em pé."], ["db-triceps-back", "Tríceps coice com halteres", "braco,cotovelo", ["dumbbell"], ["strength"], "nchpad-resistance", "Extensão de cotovelo com braço posterior; distinta da extensão acima da cabeça."], ["db-triceps-overhead", "Tríceps acima da cabeça com halter", "braco,cotovelo", ["dumbbell"], ["strength"], "nchpad-resistance", "Extensão de cotovelo com ombro elevado."], ["db-shrug", "Encolhimento dos ombros com halteres", "trapezio", ["dumbbell"], ["strength"], "nchpad-resistance", "Elevação das escápulas, diferente de retração escapular."], ["db-front", "Elevação frontal com halteres", "ombro", ["dumbbell"], ["strength"], "nchpad-resistance", "Flexão de ombro resistida, distinta da elevação lateral."], ["db-press", "Desenvolvimento de ombros com halteres", "ombro,braco,cotovelo", ["dumbbell", "chair"], ["strength"], "nchpad-resistance", "Pressão vertical com pesos livres."], ["db-upright", "Remada alta com halteres", "ombro,trapezio,braco", ["dumbbell"], ["strength"], "nchpad-resistance", "Tração vertical, diferente da remada curvada."], ["db-diagonal", "Elevação diagonal com halter", "ombro", ["dumbbell"], ["strength", "coordination"], "ace-dumbbell-catalog", "Elevação cruzada em diagonal."], ["db-hip-thrust", "Elevação de quadril no banco com halter", "quadril,gluteos,posterior_coxa", ["dumbbell", "bench"], ["strength"], "ace-dumbbell-catalog", "Apoio superior no banco e carga no quadril; distinto da ponte no solo."], ["db-carry", "Caminhada segurando halteres", "antebraco,mao,abdomen", ["dumbbell"], ["functional", "strength", "stability"], "ace-dumbbell-catalog", "Preensão sustentada e controle do tronco durante transporte de carga."], ["db-lateral-lunge", "Afundo lateral com halteres", "quadril,gluteos,coxa,joelho", ["dumbbell"], ["strength", "functional"], "ace-dumbbell-catalog", "Deslocamento lateral sob carga; distinto do avanço à frente."], ["neck-flex-iso", "Isometria de flexão do pescoço", "cervical", ["none"], ["isometric", "strength"], "nhs-neck-eput", "Resistência manual anterior, sem movimento."], ["neck-extend-iso", "Isometria de extensão do pescoço", "cervical", ["none"], ["isometric", "strength"], "nhs-neck-bexley", "Resistência manual posterior, sem movimento."], ["neck-four-point", "Flexão e extensão do pescoço em quatro apoios", "cervical", ["none"], ["mobility", "motor_control"], "nhs-neck-eput", "Mobilidade cervical com tronco apoiado em quatro apoios."], ["neck-nod", "Movimento de sim com a cabeça apoiada", "cervical", ["cushion"], ["motor_control"], "nhs-neck-eput", "Pequeno movimento craniocervical com cabeça apoiada, diferente da retração horizontal."], ["neck-band", "Retração cervical com elástico", "cervical", ["elastic_band", "wall"], ["strength", "motor_control"], "nhs-neck-bexley", "Retração contra faixa, distinta da retração ativa livre."], ["neck-extend", "Extensão do pescoço sentado", "cervical", ["chair"], ["mobility"], "nhs-neck-eput", "Movimento ativo para olhar para cima, distinto da isometria."], ["shoulder-sleeper", "Alongamento de rotação interna de ombro de lado", "ombro", ["none"], ["stretching"], "aaos-shoulder", "Alongamento em decúbito lateral; distinto de puxar o braço à frente do peito."], ["shoulder-external-stick", "Rotação externa de ombro com bastão", "ombro", ["stick"], ["mobility", "stretching"], "aaos-shoulder", "Rotação assistida; distinta de resistência elástica."], ["shoulder-internal-stick", "Rotação interna de ombro com bastão", "ombro", ["stick"], ["mobility", "stretching"], "aaos-shoulder", "Movimento assistido atrás do tronco."], ["ball-pelvis-forward", "Inclinação pélvica na bola suíça", "coluna,abdomen", ["swiss_ball"], ["mobility", "motor_control"], "nhs-kmpt-ball", "Movimento pélvico para frente e para trás, diferente de equilíbrio estático sentado."], ["ball-pelvis-side", "Deslocamento lateral da pelve na bola suíça", "coluna,abdomen", ["swiss_ball"], ["mobility", "motor_control"], "nhs-kmpt-ball", "Controle da pelve no plano lateral."], ["ball-crunch", "Abdominal na bola suíça", "abdomen", ["swiss_ball"], ["strength"], "nhs-kmpt-ball", "Flexão de tronco com apoio curvo e móvel."], ["ball-back", "Extensão de tronco sobre bola suíça", "coluna,toracica", ["swiss_ball"], ["strength"], "nhs-kmpt-ball", "Extensão do tronco contra gravidade com pelve apoiada na bola."], ["ball-side-leg", "Abdução de quadril apoiado na bola suíça", "quadril,gluteos", ["swiss_ball"], ["strength", "stability"], "nhs-kmpt-ball", "Apoio lateral do tronco na bola durante elevação da perna."], ["ball-pushup", "Flexão de braços com pernas na bola suíça", "peitoral,ombro,braco,cotovelo,abdomen", ["swiss_ball"], ["strength", "stability"], "ace-ball-pushup", "Apoio móvel nas pernas altera a estabilidade durante flexão de braços."], ["ball-walkout", "Caminhada das mãos com apoio na bola suíça", "abdomen,ombro", ["swiss_ball"], ["stability", "coordination"], "ace-ball-walkout", "Deslocamento das mãos transfere o apoio da bola ao longo das pernas."], ["ball-pass", "Passagem da bola suíça entre mãos e pés", "abdomen,quadril", ["swiss_ball"], ["strength", "coordination"], "nhs-gym-ball", "Transferência da bola entre membros durante exercício abdominal."], ["ball-forearm-plank", "Prancha ajoelhada na bola suíça", "abdomen,ombro", ["swiss_ball"], ["isometric", "stability"], "nhs-gym-ball", "Sustentação estática com antebraços na bola, distinta de desenhar letras."], ["ball-side-crunch", "Abdominal lateral sobre bola suíça", "abdomen", ["swiss_ball"], ["strength"], "nhs-gym-ball", "Flexão lateral do tronco com apoio na bola."], ["ball-bounce", "Quicar bola com a mão", "mao,ombro", ["small_ball"], ["coordination", "proprioception"], "nhs-shoulder-level3", "Controle repetido de rebote, distinto de lançar e receber."], ["ball-target", "Arremesso de bola em alvo", "ombro,braco,cotovelo", ["small_ball"], ["coordination", "functional"], "nhs-shoulder-level3", "Precisão de lançamento a um alvo externo."], ["balance-cushion", "Equilíbrio em pé sobre almofada", "tornozelo,pe", ["cushion"], ["balance", "proprioception"], "nhs-gait-mersey", "Superfície deformável, diferente do equilíbrio no piso."], ["balance-eyes", "Equilíbrio com pés juntos e olhos fechados", "tornozelo,pe", ["none"], ["balance", "proprioception"], "nhs-gait-mersey", "Retirada da visão como tarefa sensorial; distinta de variar apenas o lado."], ["walk-head", "Caminhada com movimentos da cabeça", "tornozelo,pe", ["none"], ["balance", "coordination"], "nhs-gait-mersey", "Dupla tarefa de marcha e movimentos da cabeça."], ["walk-turn", "Caminhada com mudanças de direção", "tornozelo,pe,quadril", ["none"], ["balance", "functional", "coordination"], "nhs-gait-mersey", "Controle de giro e redirecionamento da marcha."], ["step-square", "Passos em quatro direções", "tornozelo,pe,quadril", ["none"], ["balance", "coordination", "proprioception"], "nhs-gait-mersey", "Sequência multidirecional de passos; distinta da marcha em linha reta."], ["neck-reposition", "Reposicionamento da cabeça em direção a um alvo", "cervical", ["none"], ["proprioception", "motor_control"], "nhs-gait-mersey", "Reprodução de posição cervical com referência visual; não é rotação livre."], ["hip-wall-iso", "Abdução de quadril contra a parede", "quadril,gluteos", ["wall"], ["isometric", "stability"], "nhs-hip-cuh", "Pressão lateral do joelho na parede com controle da pelve."], ["weighted-extension", "Extensão de joelho com caneleira", "joelho,coxa", ["ankle_weight", "chair"], ["strength"], "aaos-knee", "Carga externa distal, diferente de extensão ativa sem resistência."], ["weighted-straight-leg", "Elevação da perna estendida com caneleira", "quadril,coxa,joelho", ["ankle_weight"], ["strength"], "aaos-knee", "Elevação da perna sob carga externa, com joelho estabilizado."], ["weighted-abduction", "Abdução de quadril com caneleira", "quadril,gluteos", ["ankle_weight"], ["strength"], "aaos-hip", "Carga gravitacional distal em abdução de lado."], ["weighted-adduction", "Adução de quadril com caneleira", "quadril,coxa", ["ankle_weight"], ["strength"], "aaos-hip", "Carga distal em adução de lado, diferente da faixa em pé."], ["hip-internal-band", "Rotação interna de quadril em pé com elástico", "quadril", ["elastic_band"], ["strength"], "research-hip-core", "Rotação interna resistida em pé, diferente da rotação externa."], ["calf-single", "Elevação de panturrilha em uma perna", "panturrilha,tornozelo", ["chair"], ["strength", "balance"], "aaos-knee", "Sustentação da carga corporal em um membro. Não separado por lado."], ["knee-chest", "Alongamento com joelho ao peito", "coluna,quadril", ["none"], ["stretching"], "aaos-spine", "Flexão de quadril e lombar com alcance ao joelho."], ["back-rotation-stretch", "Alongamento lombar com rotação de tronco", "coluna", ["none"], ["stretching"], "aaos-spine", "Alongamento mantido em rotação, distinto da mobilidade oscilatória."], ["abdominal-brace", "Contração abdominal deitado", "abdomen,coluna", ["none"], ["isometric", "motor_control"], "aaos-spine", "Ativação abdominal sem movimento dos membros."], ["wrist-flex-iso", "Isometria de flexão do punho", "antebraco,mao", ["none"], ["isometric", "strength"], "nhs-wrist-isometric", "Resistência manual à flexão, sem deslocamento articular."], ["wrist-extend-iso", "Isometria de extensão do punho", "antebraco,mao", ["none"], ["isometric", "strength"], "nhs-wrist-isometric", "Resistência manual à extensão."], ["wrist-radial-iso", "Isometria de desvio radial do punho", "antebraco,mao", ["none"], ["isometric", "strength"], "nhs-wrist-isometric", "Resistência manual em direção ao polegar."], ["wrist-ulnar-iso", "Isometria de desvio ulnar do punho", "antebraco,mao", ["none"], ["isometric", "strength"], "nhs-wrist-isometric", "Resistência manual em direção ao dedo mínimo."], ["ankle-invert-iso", "Isometria de inversão do tornozelo", "tornozelo,pe", ["none"], ["isometric", "strength"], "nhs-ankle-dynamic", "Pressão para dentro sem movimentar o tornozelo."], ["ankle-evert-iso", "Isometria de eversão do tornozelo", "tornozelo,pe", ["none"], ["isometric", "strength"], "nhs-ankle-elht", "Pressão para fora com os pés cruzados."], ["ankle-dorsi-iso", "Isometria de dorsiflexão do tornozelo", "tornozelo,panturrilha", ["none"], ["isometric", "strength"], "nhs-ankle-elht", "Resistência de um pé sobre o outro ao movimento de elevar o pé."], ["ball-knee-extend", "Extensão de joelho com bola na parede", "joelho,coxa", ["small_ball", "wall"], ["strength", "motor_control"], "nhs-knee-rnoh", "Pressão posterior contra bola para extensão em pé."], ["band-deadlift", "Levantamento terra com elástico", "quadril,gluteos,posterior_coxa", ["elastic_band"], ["strength", "functional"], "nhs-knee-rnoh", "Extensão dos quadris sob resistência crescente da faixa."], ["forearm-pronation-iso", "Isometria de pronação do antebraço", "antebraco,cotovelo", ["none"], ["isometric", "strength"], "nhs-wrist-isometric", "Resistência manual à rotação da palma para baixo."], ["forearm-supination-iso", "Isometria de supinação do antebraço", "antebraco,cotovelo", ["none"], ["isometric", "strength"], "nhs-wrist-isometric", "Resistência manual à rotação da palma para cima."]]
  , Xh = Zh.map( ([v,I,A,m,R,O,Y]) => ({
    id: `topic-${v}`,
    name: I,
    regionIds: A.split(","),
    equipmentIds: m,
    categoryIds: R,
    equipment: m.map(J => Za[J].label).join(" e "),
    categories: R.map(J => Zi[J]),
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    tags: [],
    sourceIds: [O],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewScope: "nomenclature-and-metadata",
    reviewedAt: "2026-09-23",
    reviewNotes: Y
}))
  , kh = [["band-pushup", "Flexão de braços com elástico", "peitoral,braco,cotovelo", ["elastic_band"], ["strength"], "mw-chest-band", "Flexão no solo com resistência elástica adicional."], ["band-single-fly", "Crucifixo unilateral com elástico", "peitoral", ["elastic_band"], ["strength"], "mw-chest-band", "Adução horizontal unilateral; não separar lados em registros."], ["band-cross-press", "Pressão cruzada de peito com elástico", "peitoral,braco,cotovelo", ["elastic_band"], ["strength"], "mw-chest-band", "Empurrada cruzada com extensão do cotovelo; diferente do crucifixo."], ["incline-fly", "Crucifixo inclinado com halteres", "peitoral", ["dumbbell", "bench"], ["strength"], "mw-chest-dumbbells", "Banco inclinado; distinto do crucifixo horizontal já cadastrado."], ["decline-press", "Supino declinado com halteres", "peitoral,braco,cotovelo", ["dumbbell", "bench"], ["strength"], "mw-chest-dumbbells-2", "Empurrada com banco declinado."], ["decline-fly", "Crucifixo declinado com halteres", "peitoral", ["dumbbell", "bench"], ["strength"], "mw-chest-dumbbells-2", "Adução horizontal no banco declinado, sem extensão dinâmica do cotovelo."], ["barbell-press", "Supino reto com barra", "peitoral,braco,cotovelo", ["barbell", "bench"], ["strength"], "mw-chest-barbell", "Carga compartilhada entre as mãos; distinta dos halteres independentes."], ["barbell-incline", "Supino inclinado com barra", "peitoral,braco,cotovelo", ["barbell", "bench"], ["strength"], "mw-chest-barbell", "Empurrada com barra no banco inclinado."], ["barbell-floor", "Supino no chão com barra", "peitoral,braco,cotovelo", ["barbell"], ["strength"], "mw-chest-barbell", "O solo limita a descida dos braços; distinto do apoio no banco."], ["barbell-decline", "Supino declinado com barra", "peitoral,braco,cotovelo", ["barbell", "bench"], ["strength"], "mw-chest-barbell", "Empurrada com barra no banco declinado."], ["incline-pushup", "Flexão de braços com mãos no banco", "peitoral,braco,cotovelo", ["bench"], ["strength"], "mw-chest-bodyweight", "Apoio elevado das mãos; exige banco e não entra em Sem equipamento."], ["decline-pushup", "Flexão de braços com pés no banco", "peitoral,braco,cotovelo", ["bench"], ["strength"], "mw-chest-bodyweight", "Elevação dos pés; diferente de elevar as mãos."], ["ball-chest-pass", "Passe de peito com bola medicinal", "peitoral,braco,cotovelo", ["medicine_ball"], ["strength", "coordination"], "mw-chest-ball", "Passe frontal; parede e parceiro são alternativas do mesmo registro."], ["ball-chest-slam", "Arremesso de peito ao chão com bola medicinal", "peitoral,braco,cotovelo", ["medicine_ball"], ["strength", "coordination"], "mw-chest-ball", "Lançamento descendente iniciado à frente do peito."], ["ball-pushup", "Flexão de braços com mãos na bola medicinal", "peitoral,braco,cotovelo", ["medicine_ball"], ["strength", "stability"], "mw-chest-ball", "Apoio móvel das mãos; distinto de apoiar pernas na bola suíça."], ["ball-walkover", "Flexão de braços alternando a mão na bola medicinal", "peitoral,braco,cotovelo", ["medicine_ball"], ["strength", "coordination", "stability"], "mw-chest-ball-2", "Transferência lateral de apoio entre repetições."], ["ball-tuck-pushup", "Flexão de braços com recolhimento dos joelhos na bola suíça", "peitoral,abdomen,braco,cotovelo", ["swiss_ball"], ["strength", "stability", "coordination"], "mw-chest-bodyweight-2", "Combina flexão de braços e recolhimento das pernas; não é a flexão simples já presente."], ["ball-halo", "Círculos ao redor da cabeça com bola medicinal", "ombro,abdomen", ["medicine_ball"], ["stability", "coordination"], "mw-abs-ball", "Trajeto circular da carga com controle do tronco."], ["ball-situp-pass", "Abdominal com passe de bola medicinal", "abdomen", ["medicine_ball"], ["strength", "coordination"], "mw-abs-ball", "Flexão de tronco combinada ao passe."], ["ball-plank", "Prancha com antebraços na bola medicinal", "abdomen", ["medicine_ball"], ["isometric", "stability"], "mw-abs-ball", "Sustentação sobre bola medicinal; apoio distinto da bola suíça."], ["ball-overhead-slam", "Arremesso de bola medicinal ao chão acima da cabeça", "abdomen,ombro", ["medicine_ball"], ["strength", "coordination"], "mw-abs-ball", "Lançamento iniciado acima da cabeça; distinto do passe de peito."], ["ball-hollow", "Sustentação abdominal com bola medicinal acima da cabeça", "abdomen", ["medicine_ball"], ["isometric", "stability"], "mw-abs-ball-2", "Sustentação deitado com membros afastados do chão e carga nas mãos."], ["ball-deadbug", "Extensão alternada de braço e perna com bola medicinal", "abdomen", ["medicine_ball"], ["stability", "motor_control"], "mw-abs-ball-2", "Controle da bola entre membros; distinto da alternância livre."], ["band-squat-long", "Agachamento com faixa elástica sob os pés", "coxa,joelho,quadril,gluteos", ["elastic_band"], ["strength", "functional"], "mw-quads-band", "Resistência longitudinal; diferente da mini band ao redor dos joelhos."], ["band-leg-press", "Empurrada de pernas deitado com elástico", "coxa,joelho,quadril,gluteos", ["elastic_band"], ["strength"], "mw-quads-band", "Extensão combinada de quadril e joelho contra faixa ancorada."], ["band-spanish-squat", "Agachamento com elástico atrás dos joelhos", "coxa,joelho", ["elastic_band"], ["strength"], "mw-quads-band", "Faixa ancorada atrás dos joelhos; configuração distinta da mini band."], ["band-face-pull", "Puxada de elástico em direção ao rosto", "ombro,trapezio,toracica", ["elastic_band"], ["strength"], "mw-shoulder-band", "Tração alta com cotovelos flexionados; distinta de crucifixo inverso."], ["band-front-raise", "Elevação frontal com elástico", "ombro", ["elastic_band"], ["strength"], "mw-shoulder-band", "Flexão de ombro resistida, diferente da elevação lateral."], ["band-pullthrough", "Extensão de quadril puxando elástico entre as pernas", "quadril,gluteos,posterior_coxa", ["elastic_band"], ["strength"], "mw-hamstrings-band", "Tração posterior ancorada baixa; diferente da faixa pisada no levantamento terra."], ["weighted-calf", "Elevação de panturrilha em pé com halteres", "panturrilha,tornozelo", ["dumbbell"], ["strength"], "mw-calves-dumbbells", "Flexão plantar com carga externa; distinta do movimento livre."], ["weighted-seated-calf", "Elevação de panturrilha sentado com halteres", "panturrilha,tornozelo", ["dumbbell", "bench"], ["strength"], "mw-calves-dumbbells", "Carga sobre as coxas com joelhos flexionados."]]
  , Vh = kh.map( ([v,I,A,m,R,O,Y]) => ({
    id: `mw-${v}`,
    name: I,
    regionIds: A.split(","),
    equipmentIds: m,
    categoryIds: R,
    equipment: m.map(J => Za[J].label).join(" e "),
    categories: R.map(J => Zi[J]),
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    tags: [],
    sourceIds: [O],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewScope: "nomenclature-and-metadata",
    reviewedAt: "2026-09-23",
    reviewNotes: Y
}))
  , Fh = [["wrist-bar", "Flexão de punho com barra", "mao,antebraco", ["barbell", "bench"], ["strength"], "mw-forearm-bar", "Resistência bilateral com barra."], ["reverse-bar", "Rosca inversa com barra", "braco,cotovelo,antebraco", ["barbell"], ["strength"], "mw-forearm-bar", "Pegada pronada com carga compartilhada."], ["hammer-band", "Rosca com elástico em pegada neutra", "braco,cotovelo,antebraco", ["elastic_band"], ["strength"], "mw-forearm-band", "Faixa ancorada baixa; pegada neutra."], ["reverse-band", "Rosca inversa com elástico", "braco,cotovelo,antebraco", ["elastic_band"], ["strength"], "mw-forearm-band", "Resistência elástica com pegada pronada."], ["ball-diagonal", "Rotação de tronco em meio ajoelhado com bola medicinal", "abdomen", ["medicine_ball"], ["strength", "motor_control"], "mw-oblique-ball", "Rotação com carga e base assimétrica."], ["ball-side-toss", "Passe lateral com bola medicinal", "abdomen", ["medicine_ball"], ["strength", "coordination"], "mw-oblique-ball", "Lançamento lateral; distinto do passe frontal."], ["ball-diagonal-slam", "Arremesso diagonal ao chão com bola medicinal ajoelhado", "abdomen", ["medicine_ball"], ["strength", "coordination"], "mw-oblique-ball", "Lançamento diagonal com apoio nos joelhos."], ["ring-pec", "Compressão do aro de Pilates à frente do peito", "peitoral", ["pilates_ring"], ["strength"], "merrithew-ring-flow", "Compressão do aro; distinta das molas do Cadillac."], ["ring-biceps", "Pressão de bíceps com aro de Pilates", "braco,cotovelo", ["pilates_ring"], ["strength"], "merrithew-ring-flow", "Resistência do aro para flexores do cotovelo."], ["ring-triceps", "Pressão de tríceps em pé com aro de Pilates", "braco,cotovelo", ["pilates_ring"], ["strength"], "merrithew-ring-flow", "Extensores do cotovelo com aro."], ["ring-bridge", "Ponte de glúteos com aro de Pilates", "gluteos,quadril,posterior_coxa", ["pilates_ring"], ["strength", "motor_control"], "merrithew-ring-flow", "Ponte com acessório resistivo."], ["ring-crunch", "Abdominal curto com aro de Pilates", "abdomen", ["pilates_ring"], ["strength", "motor_control"], "merrithew-ring-flow", "Flexão curta do tronco com aro."], ["ring-rotation", "Rotação de tronco sentado com aro de Pilates", "toracica,abdomen", ["pilates_ring"], ["mobility", "motor_control"], "merrithew-ring-flow", "Rotação com acessório, distinta da versão livre."], ["ring-sidebend", "Inclinação lateral do tronco com aro de Pilates", "abdomen,coluna", ["pilates_ring"], ["mobility", "motor_control"], "merrithew-ring-athletic", "Flexão lateral com aro."], ["ring-squat", "Agachamento com aro de Pilates", "coxa,joelho,quadril,gluteos", ["pilates_ring"], ["strength", "functional"], "merrithew-ring-athletic", "Agachamento integrado ao controle do aro."], ["ring-kneel-hinge", "Inclinação do corpo ajoelhado com aro de Pilates", "coxa,joelho,abdomen", ["pilates_ring"], ["strength", "motor_control"], "merrithew-ring-athletic", "Controle do corpo em bloco a partir dos joelhos."], ["ring-reverse-crunch", "Abdominal reverso com aro de Pilates", "abdomen", ["pilates_ring"], ["strength", "motor_control"], "merrithew-ring-athletic", "Elevação controlada da pelve com aro."], ["ring-side-leg", "Elevação lateral da perna com aro de Pilates", "quadril,gluteos", ["pilates_ring"], ["strength", "motor_control"], "merrithew-ring-flex", "Controle lateral do membro com aro."], ["ring-leg-circle", "Círculos de uma perna com aro de Pilates", "quadril,abdomen", ["pilates_ring"], ["mobility", "motor_control"], "merrithew-ring-flex", "Circundução com controle do aro."], ["ring-forward", "Alongamento da coluna à frente com aro de Pilates", "coluna,toracica", ["pilates_ring"], ["stretching", "mobility"], "merrithew-ring-flex", "Flexão da coluna com acessório."], ["ring-airplane", "Equilíbrio em avião com aro de Pilates", "quadril,gluteos,abdomen,tornozelo,pe", ["pilates_ring"], ["balance", "stability", "motor_control"], "merrithew-airplane", "Apoio unilateral com alcance e compressões do aro."], ["reverse-curl", "Rosca inversa com halteres", "braco,cotovelo,antebraco", ["dumbbell"], ["strength"], "mw-biceps-db", "Pegada pronada, distinta da rosca supinada e neutra."], ["rear-row", "Remada com halteres e cotovelos abertos", "ombro,trapezio,toracica", ["dumbbell"], ["strength"], "mw-biceps-db", "Tração com abdução horizontal; diferente da remada com cotovelos junto ao corpo."], ["preacher", "Rosca de bíceps com braço apoiado no banco", "braco,cotovelo", ["dumbbell", "bench"], ["strength"], "mw-biceps-db2", "Apoio do braço em flexão de ombro."], ["triceps-front-band", "Extensão de tríceps à frente com elástico", "braco,cotovelo", ["elastic_band"], ["strength"], "mw-triceps-band", "Braços elevados à frente, faixa ancorada atrás."], ["triceps-overhead-band", "Extensão de tríceps acima da cabeça com elástico", "braco,cotovelo", ["elastic_band"], ["strength"], "mw-triceps-band", "Ombro elevado e resistência elástica."], ["triceps-mini", "Extensão de tríceps para baixo com mini band", "braco,cotovelo", ["mini_band"], ["strength"], "mw-triceps-band", "A outra mão fixa a faixa; não exige âncora externa."], ["one-arm-row", "Remada unilateral com halter e apoio no banco", "toracica,trapezio,braco,cotovelo", ["dumbbell", "bench"], ["strength"], "mw-forearm-db", "Carga unilateral com apoio; não classificada como exercício de mão apenas pela preensão."], ["scapula-bent", "Retração das escápulas com halteres e tronco inclinado", "trapezio,toracica", ["dumbbell"], ["strength"], "mw-traps-db", "Movimento escapular; não é flexão de cotovelos nem encolhimento vertical."], ["pulldown-band", "Puxada unilateral ajoelhado com elástico", "toracica,braco,cotovelo", ["elastic_band"], ["strength"], "mw-lats-band", "Tração de cima para baixo, distinta da remada horizontal."], ["deadlift-bar", "Levantamento terra com barra", "quadril,gluteos,posterior_coxa,coluna", ["barbell"], ["strength", "functional"], "mw-lower-bar", "Levantamento desde o solo; carga com barra."], ["sumo-deadlift", "Levantamento terra sumô com barra", "quadril,gluteos,coxa,coluna", ["barbell"], ["strength", "functional"], "mw-lower-bar", "Base ampla e braços entre as pernas."], ["romanian-bar", "Levantamento terra romeno com barra", "posterior_coxa,gluteos,quadril,coluna", ["barbell"], ["strength"], "mw-lower-bar", "Movimento predominante de quadril; distinto do levantamento iniciado no solo."], ["squat-bar", "Agachamento com barra nas costas", "coxa,joelho,quadril,gluteos", ["barbell"], ["strength", "functional"], "mw-lower-bar", "Carga posterior com barra."], ["bulgarian-db", "Agachamento búlgaro com halteres", "coxa,joelho,quadril,gluteos", ["dumbbell", "bench"], ["strength"], "mw-glutes-db", "Pé traseiro elevado; diferente do avanço livre."], ["bridge-db", "Ponte de glúteos no chão com halter", "gluteos,quadril,posterior_coxa", ["dumbbell"], ["strength"], "mw-glutes-db", "Ombros no chão; diferente da elevação com tronco no banco."], ["single-hinge", "Inclinação do tronco em uma perna", "posterior_coxa,gluteos,quadril", ["none"], ["strength", "balance", "motor_control"], "mw-ham-body", "Dobradiça unilateral sem carga externa."], ["nordic", "Flexão nórdica com ajuda de parceiro", "posterior_coxa,joelho", ["none"], ["strength"], "mw-ham-body", "Parceiro estabiliza os tornozelos; controle da descida do corpo ajoelhado."], ["good-morning", "Inclinação do tronco com quadril para trás", "posterior_coxa,gluteos,quadril,coluna", ["none"], ["motor_control", "strength"], "mw-ham-body", "Dobradiça bilateral do quadril sem peso externo."], ["reverse-lunge", "Afundo para trás", "coxa,joelho,quadril,gluteos", ["none"], ["strength", "functional"], "mw-ham-body", "Passo posterior; diferente do avanço anterior."], ["reverse-fly-db", "Crucifixo inverso sentado com halteres", "ombro,trapezio,toracica", ["dumbbell", "bench"], ["strength"], "mw-shoulders-db", "Abertura dos braços sob carga gravitacional."], ["pallof", "Pressão de braços com elástico sem girar o tronco", "abdomen,coluna", ["elastic_band"], ["stability", "motor_control"], "mw-pallof", "Resistência lateral à rotação do tronco."], ["leg-raises", "Elevação das duas pernas deitado", "abdomen,quadril", ["none"], ["strength", "motor_control"], "mw-leg-raises", "Elevação bilateral; diferente da perna estendida isolada."], ["plank-full", "Prancha com pernas estendidas", "abdomen,coluna", ["none"], ["stability", "isometric"], "aaos-spine", "Sustentação com joelhos fora do chão."], ["side-plank-full", "Prancha lateral com pernas estendidas", "abdomen,coluna", ["none"], ["stability", "isometric"], "aaos-spine", "Apoio nos pés; diferente da versão com joelhos apoiados."], ["spine-rock", "Balanço do tronco para frente e para trás ajoelhado", "coluna,toracica", ["none"], ["mobility", "motor_control"], "aaos-spine", "Transferência em quatro apoios; distinta do gato e camelo."], ["neck-tuck-quad", "Retração cervical em quatro apoios", "cervical", ["none"], ["motor_control", "strength"], "nhs-neck-strength-whh", "Retração com cabeça contra a gravidade; diferente de flexão e extensão."], ["neck-rotation-quad", "Rotação cervical em quatro apoios", "cervical", ["none"], ["mobility", "motor_control"], "nhs-neck-eput", "Rotação com controle da cabeça em apoio horizontal."], ["neck-prone", "Sustentação cervical deitado de barriga para baixo", "cervical", ["none"], ["isometric", "motor_control"], "nhs-neck-cht", "Controle cervical em decúbito ventral, sem elevar o tronco."], ["y-quad", "Elevação do braço em Y em quatro apoios", "ombro,trapezio", ["none"], ["strength", "motor_control"], "nhs-neck-strength-whh", "Elevação diagonal com apoio em três membros."], ["y-band-neck", "Elevação dos braços em Y com elástico e controle cervical", "ombro,trapezio,cervical", ["elastic_band"], ["strength", "motor_control"], "nhs-neck-strength-whh", "Tarefa combinada de elevação resistida e sustentação cervical."], ["shoulder-abd-iso", "Isometria de abdução do ombro na parede", "ombro", ["wall"], ["isometric", "strength"], "nhs-shoulder-sfh", "Pressão lateral, distinta das isometrias de rotação."], ["chest-towel", "Alongamento de peitoral deitado sobre toalha", "peitoral,ombro", ["towel"], ["stretching"], "nhs-breast-plymouth", "Apoio longitudinal no tronco; distinto do alongamento em pé."], ["finger-tip", "Flexão isolada da ponta do dedo", "mao", ["none"], ["mobility", "motor_control"], "nhs-finger-isolated", "Bloqueio da articulação do meio."], ["finger-middle", "Flexão isolada da articulação do meio do dedo", "mao", ["none"], ["mobility", "motor_control"], "nhs-finger-isolated", "Movimento isolado da articulação intermediária."], ["finger-stretch", "Alongamento dos dedos para estender a mão", "mao", ["none"], ["stretching"], "nhs-hand-ruh", "Extensão assistida, diferente do deslizamento ativo."], ["fist-passive", "Flexão assistida dos dedos para fechar a mão", "mao", ["none"], ["mobility"], "nhs-hand-ruh", "Assistência manual, distinta do fechamento ativo."], ["thumb-stretch", "Alongamento do polegar para fora", "mao", ["none"], ["stretching"], "nhs-hand-ruh", "Abertura assistida do polegar."], ["thumb-lift", "Elevação do polegar com a mão apoiada", "mao", ["none"], ["strength", "motor_control"], "nhs-hand-ruh", "Extensão ativa contra gravidade."], ["wring-towel", "Torcer toalha com as mãos", "mao,antebraco", ["towel"], ["strength", "functional"], "nhs-hand-ruh", "Preensão e torção coordenadas."], ["toe-yoga", "Elevação alternada do dedão e dos outros dedos", "pe", ["none"], ["coordination", "motor_control"], "nhs-toe-yoga", "Dissociação dos dedos; diferente da extensão de todos juntos."], ["toe-spread", "Abertura dos dedos do pé", "pe", ["none"], ["strength", "motor_control"], "nhs-toe-spread", "Afastamento ativo dos dedos."], ["jump-two", "Saltos no lugar com os dois pés", "tornozelo,pe,panturrilha,joelho", ["none"], ["functional", "coordination"], "nhs-ankle-kch", "Impulsão e aterrissagem bilateral; demanda de impacto."], ["hop-one", "Saltos no lugar em uma perna", "tornozelo,pe,panturrilha,joelho", ["none"], ["functional", "coordination", "proprioception"], "nhs-ankle-kch", "Aterrissagem unilateral; demanda de impacto."], ["hop-line", "Saltos em uma perna para frente e para trás", "tornozelo,pe,panturrilha,joelho", ["none"], ["functional", "coordination", "proprioception"], "nhs-ankle-kch", "Deslocamento com inversão de direção."], ["balance-catch", "Equilíbrio em uma perna lançando e recebendo bola", "tornozelo,pe", ["small_ball"], ["balance", "coordination", "proprioception"], "nhs-ankle-advanced", "Dupla tarefa com perturbação durante o passe."], ["balance-cushion-catch", "Equilíbrio sobre almofada lançando e recebendo bola", "tornozelo,pe", ["small_ball", "cushion"], ["balance", "coordination", "proprioception"], "nhs-ankle-advanced", "Superfície deformável combinada ao passe."], ["calf-step", "Elevação de panturrilha no degrau", "panturrilha,tornozelo", ["step"], ["strength"], "mw-calves-body", "Calcanhares podem descer abaixo do apoio; distinto do piso."], ["calf-bent", "Elevação de panturrilha com tronco inclinado e apoio", "panturrilha,tornozelo", ["bench"], ["strength"], "mw-calves-body", "Tronco apoiado em flexão de quadril."]]
  , Kh = Fh.map( ([v,I,A,m,R,O,Y]) => ({
    id: `full-${v}`,
    name: I,
    regionIds: A.split(","),
    equipmentIds: m,
    categoryIds: R,
    equipment: m.map(J => Za[J].label).join(" e "),
    categories: R.map(J => Zi[J]),
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    tags: m.includes("pilates_ring") ? ["Pilates"] : [],
    sourceIds: [O],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewScope: "nomenclature-and-metadata",
    reviewedAt: "2026-09-23",
    reviewNotes: Y
}))
  , Xi = [...Kh, ...Vh, ...Xh, {
    id: "ombro-ex-0",
    name: "Flexão de ombro assistida com bastão",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bastão",
    categories: ["Mobilidade"],
    equipmentIds: ["stick"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Flexão assistida com bastão"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-1",
    name: "Abdução de ombro assistida com bastão",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bastão",
    categories: ["Mobilidade"],
    equipmentIds: ["stick"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Abdução assistida com bastão"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-2",
    name: "Rotação externa de ombro com elástico",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Rotação externa com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-3",
    name: "Rotação interna de ombro com elástico",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Rotação interna com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-4",
    name: "Remada com elástico",
    regionIds: ["ombro", "trapezio", "toracica", "braco", "cotovelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-5",
    name: "Elevação do braço no plano da escápula",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Elevação no plano escapular"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-6",
    name: "Deslizamento dos braços na parede",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Parede",
    categories: ["Mobilidade"],
    equipmentIds: ["wall"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Deslizamento na parede"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-7",
    name: "Protração das escápulas com elástico",
    regionIds: ["ombro", "trapezio"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Serrátil com faixa elástica"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-8",
    name: "Retração escapular",
    regionIds: ["ombro", "trapezio"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-9",
    name: "Isometria de rotação externa de ombro",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Isometria"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "isometric"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Isometria de rotação externa"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-10",
    name: "Isometria de rotação interna de ombro",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Isometria"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "isometric"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Isometria de rotação interna"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-11",
    name: "Pêndulo de ombro",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-12",
    name: "Apoio das mãos na bola suíça",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola suíça",
    categories: ["Fortalecimento"],
    equipmentIds: ["swiss_ball"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Apoio de mãos na bola"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-13",
    name: "Flexão de ombro deitado",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Flexão de ombro em decúbito"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-14",
    name: "Alongamento posterior do ombro",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-15",
    name: "Elevação lateral com halter",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-16",
    name: "Extensão de ombro com elástico",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-17",
    name: "Flexão de braços na parede",
    regionIds: ["ombro", "peitoral", "braco", "cotovelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Parede",
    categories: ["Fortalecimento"],
    equipmentIds: ["wall"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Wall push-up"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-18",
    name: "Estabilização do ombro com bola na parede",
    regionIds: ["ombro", "trapezio"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola pequena + Parede",
    categories: ["Equilíbrio"],
    equipmentIds: ["small_ball", "wall"],
    categoryIds: ["balance"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Estabilização rítmica com bola"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "ombro-ex-19",
    name: "Alcance funcional na parede",
    regionIds: ["ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Parede",
    categories: ["Fortalecimento"],
    equipmentIds: ["wall"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Alcance na parede sem execução distinta do deslizamento dos braços.",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-0",
    name: "Flexão ativa do cotovelo",
    regionIds: ["cotovelo", "braco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-1",
    name: "Extensão ativa do cotovelo",
    regionIds: ["cotovelo", "braco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-2",
    name: "Pronação com bastão",
    regionIds: ["cotovelo", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bastão",
    categories: ["Fortalecimento"],
    equipmentIds: ["stick"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-3",
    name: "Supinação com bastão",
    regionIds: ["cotovelo", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bastão",
    categories: ["Fortalecimento"],
    equipmentIds: ["stick"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-4",
    name: "Flexão de cotovelo com halter",
    regionIds: ["cotovelo", "braco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Flexão com halter"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-5",
    name: "Extensão de cotovelo com elástico",
    regionIds: ["cotovelo", "braco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Extensão com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-6",
    name: "Isometria de flexão de cotovelo",
    regionIds: ["cotovelo", "braco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Isometria"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "isometric"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Isometria de flexão"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-7",
    name: "Isometria de extensão de cotovelo",
    regionIds: ["cotovelo", "braco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Isometria"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "isometric"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Isometria de extensão"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-8",
    name: "Extensão excêntrica de punho com halter",
    regionIds: ["cotovelo", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Extensão de punho excêntrica"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-9",
    name: "Flexão excêntrica de punho com halter",
    regionIds: ["cotovelo", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Flexão de punho excêntrica"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-10",
    name: "Preensão com bola macia",
    regionIds: ["cotovelo", "mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola terapêutica",
    categories: ["Fortalecimento"],
    equipmentIds: ["therapy_ball"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-11",
    name: "Desvio radial de punho com halter",
    regionIds: ["cotovelo", "antebraco", "mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Desvio radial com halter"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-13",
    name: "Alongamento dos extensores do punho",
    regionIds: ["cotovelo", "antebraco", "mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Alongamento dos extensores"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-14",
    name: "Alongamento dos flexores do punho",
    regionIds: ["cotovelo", "antebraco", "mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Alongamento dos flexores"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-15",
    name: "Pronação do antebraço com halter",
    regionIds: ["cotovelo", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Pronação resistida"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-16",
    name: "Supinação do antebraço com halter",
    regionIds: ["cotovelo", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Supinação resistida"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-17",
    name: "Apoio das mãos na parede",
    regionIds: ["cotovelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Parede",
    categories: ["Fortalecimento"],
    equipmentIds: ["wall"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Apoio na parede"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-18",
    name: "Flexão de cotovelo com halter em pegada neutra",
    regionIds: ["cotovelo", "braco", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Rosca martelo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "cotovelo-ex-19",
    name: "Flexão de cotovelo assistida com toalha",
    regionIds: ["cotovelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Toalha",
    categories: ["Mobilidade"],
    equipmentIds: ["towel"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Flexão assistida com toalha"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-0",
    name: "Flexão ativa do punho",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-1",
    name: "Extensão ativa do punho",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-2",
    name: "Desvio radial de punho",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Desvio radial"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-3",
    name: "Desvio ulnar de punho",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Desvio ulnar"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-4",
    name: "Oposição do polegar",
    regionIds: ["mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-5",
    name: "Deslizamento dos tendões dos dedos",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Deslizamento de tendões"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-6",
    name: "Abertura dos dedos",
    regionIds: ["mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-8",
    name: "Pinça de ponta com massa terapêutica",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-9",
    name: "Extensão dos dedos com elástico",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-10",
    name: "Abdução do polegar",
    regionIds: ["mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-11",
    name: "Flexão do punho com halter",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-12",
    name: "Extensão do punho com halter",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-13",
    name: "Pronação e supinação do antebraço",
    regionIds: ["mao", "antebraco", "cotovelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Pronação e supinação"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-14",
    name: "Mobilidade dos dedos",
    regionIds: ["mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Mobilidade dos dedos sem padrão definido; usar os movimentos específicos já cadastrados.",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-17",
    name: "Isometria do punho",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Isometria"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "isometric"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Isometria do punho sem direção definida; exige especificação antes de voltar ao acervo.",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-18",
    name: "Transferência de objetos",
    regionIds: ["mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Objetos pequenos",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["small_objects"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "mao-ex-19",
    name: "Apoio progressivo das mãos",
    regionIds: ["mao", "antebraco"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-0",
    name: "Inclinação pélvica",
    regionIds: ["coluna", "abdomen", "quadril"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-1",
    name: "Ponte de glúteos",
    regionIds: ["coluna", "quadril", "gluteos", "joelho", "posterior_coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Ponte de quadril"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-2",
    name: "Gato e camelo",
    regionIds: ["coluna", "toracica"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-3",
    name: "Rotação torácica em decúbito",
    regionIds: ["coluna", "peitoral", "toracica"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-4",
    name: "Extensão alternada de braço e perna em quatro apoios",
    regionIds: ["coluna", "abdomen", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Estabilidade", "Controle motor"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "stability", "motor_control"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Bird dog"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-5",
    name: "Extensão alternada de braço e perna deitado",
    regionIds: ["coluna", "abdomen"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Estabilidade", "Controle motor"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "stability", "motor_control"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Dead bug"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-6",
    name: "Prancha com joelhos apoiados",
    regionIds: ["coluna", "abdomen"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Estabilidade", "Controle motor"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "stability", "motor_control"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Prancha modificada"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-7",
    name: "Prancha lateral com joelhos apoiados",
    regionIds: ["coluna", "abdomen"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Estabilidade", "Controle motor"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "stability", "motor_control"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Prancha lateral modificada"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-8",
    name: "Retração cervical",
    regionIds: ["cervical"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-9",
    name: "Rotação cervical ativa",
    regionIds: ["cervical"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-10",
    name: "Extensão torácica com toalha",
    regionIds: ["toracica"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Toalha",
    categories: ["Fortalecimento"],
    equipmentIds: ["towel"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-11",
    name: "Rotação lombar com joelhos flexionados",
    regionIds: ["coluna"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Mobilidade lombar em decúbito"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-12",
    name: "Respiração diafragmática",
    regionIds: ["abdomen"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-13",
    name: "Alongamento de flexores do quadril",
    regionIds: ["quadril"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-15",
    name: "Sentar e levantar",
    regionIds: ["quadril", "coxa", "joelho", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadeira",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["chair"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-16",
    name: "Extensão de quadril em pé",
    regionIds: ["quadril", "gluteos", "posterior_coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-17",
    name: "Marcha estacionária",
    regionIds: ["quadril", "coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-18",
    name: "Equilíbrio sentado na bola suíça",
    regionIds: ["coluna"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola suíça",
    categories: ["Equilíbrio", "Estabilidade", "Controle motor"],
    equipmentIds: ["swiss_ball"],
    categoryIds: ["balance", "stability", "motor_control"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Estabilidade sobre bola"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "coluna-ex-19",
    name: "Agachamento com apoio",
    regionIds: ["quadril", "coxa", "joelho", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadeira",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["chair"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-1",
    name: "Abdução de quadril em decúbito lateral",
    regionIds: ["quadril", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Abdução de quadril em decúbito"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-2",
    name: "Abertura de joelhos de lado com mini band",
    regionIds: ["quadril", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Mini band",
    categories: ["Fortalecimento"],
    equipmentIds: ["mini_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Clamshell com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-4",
    name: "Flexão de quadril em pé",
    regionIds: ["quadril"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-5",
    name: "Adução de quadril com bola pequena",
    regionIds: ["quadril", "coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola pequena",
    categories: ["Fortalecimento"],
    equipmentIds: ["small_ball"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Adução com bola"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-6",
    name: "Abdução de quadril com elástico",
    regionIds: ["quadril", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Abdução com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-7",
    name: "Caminhada lateral com mini band",
    regionIds: ["quadril", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Mini band",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["mini_band"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Caminhada lateral com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-10",
    name: "Subida no degrau",
    regionIds: ["quadril", "joelho", "coxa", "gluteos"],
    thumbnail: "/exercise-reference.png",
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Step",
    categories: ["Fortalecimento", "Funcional"],
    thumbnailCrop: 3,
    equipmentIds: ["step"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "available",
    aliases: ["Step-up"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-11",
    name: "Descida controlada do degrau",
    regionIds: ["quadril", "joelho", "coxa", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Step",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["step"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Step-down baixo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-12",
    name: "Equilíbrio unipodal com apoio",
    regionIds: ["quadril", "joelho", "pe", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadeira",
    categories: ["Equilíbrio"],
    equipmentIds: ["chair"],
    categoryIds: ["balance"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-13",
    name: "Mobilidade de rotação do quadril",
    regionIds: ["quadril"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-15",
    name: "Ponte de glúteos com mini band",
    regionIds: ["quadril", "gluteos", "posterior_coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Mini band",
    categories: ["Fortalecimento"],
    equipmentIds: ["mini_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Ponte com faixa elástica"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-16",
    name: "Elevação da perna estendida",
    regionIds: ["quadril", "joelho", "coxa"],
    thumbnail: "/exercise-reference.png",
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    thumbnailCrop: 1,
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "available",
    aliases: ["Elevação da perna reta"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-17",
    name: "Isometria de glúteos",
    regionIds: ["quadril", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Isometria"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "isometric"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-18",
    name: "Deslocamento lateral",
    regionIds: ["quadril"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Deslocamento lateral genérico, sobreposto às caminhadas e aos movimentos laterais definidos.",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "quadril-ex-19",
    name: "Extensão de quadril em quatro apoios",
    regionIds: ["quadril", "gluteos", "posterior_coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-0",
    name: "Contração do quadríceps",
    regionIds: ["joelho", "coxa"],
    thumbnail: "/exercise-reference.png",
    thumbnailCrop: 0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Isometria"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "isometric"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "available",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-2",
    name: "Agachamento parcial",
    regionIds: ["joelho", "coxa", "quadril", "gluteos"],
    thumbnail: "/exercise-reference.png",
    thumbnailCrop: 2,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "available",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-5",
    name: "Extensão de joelho com elástico",
    regionIds: ["joelho", "coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-6",
    name: "Flexão de joelho em pé",
    regionIds: ["joelho", "posterior_coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-7",
    name: "Deslizamento do calcanhar",
    regionIds: ["joelho"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-13",
    name: "Elevação de panturrilha em pé",
    regionIds: ["panturrilha", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Elevação de panturrilhas"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-15",
    name: "Extensão terminal do joelho",
    regionIds: ["joelho", "coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-16",
    name: "Agachamento isométrico na parede",
    regionIds: ["joelho", "coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Parede",
    categories: ["Fortalecimento", "Isometria"],
    equipmentIds: ["wall"],
    categoryIds: ["strength", "isometric"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Isometria na parede"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-17",
    name: "Flexão de joelho com bola suíça",
    regionIds: ["joelho", "posterior_coxa", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola suíça",
    categories: ["Fortalecimento"],
    equipmentIds: ["swiss_ball"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Flexão de joelho com bola"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-18",
    name: "Alongamento de panturrilha",
    regionIds: ["panturrilha", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "joelho-ex-19",
    name: "Marcha com obstáculos baixos",
    regionIds: ["joelho"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cones",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["cones"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-0",
    name: "Dorsiflexão de tornozelo com elástico",
    regionIds: ["pe", "panturrilha", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Dorsiflexão com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-1",
    name: "Flexão plantar com elástico",
    regionIds: ["pe", "tornozelo", "panturrilha"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-2",
    name: "Inversão de tornozelo com elástico",
    regionIds: ["pe", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Inversão com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-3",
    name: "Eversão de tornozelo com elástico",
    regionIds: ["pe", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Eversão com elástico"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-5",
    name: "Elevação de panturrilha sentado",
    regionIds: ["pe", "panturrilha", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadeira",
    categories: ["Fortalecimento"],
    equipmentIds: ["chair"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-6",
    name: "Mobilidade joelho à parede",
    regionIds: ["pe", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Parede",
    categories: ["Mobilidade"],
    equipmentIds: ["wall"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-7",
    name: "Ativação do arco plantar",
    regionIds: ["pe"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Short foot"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-8",
    name: "Flexão dos dedos com toalha",
    regionIds: ["pe"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Toalha",
    categories: ["Fortalecimento"],
    equipmentIds: ["towel"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-9",
    name: "Extensão dos dedos do pé",
    regionIds: ["pe"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: ["Extensão dos dedos"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-10",
    name: "Equilíbrio bipodal",
    regionIds: ["pe", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Equilíbrio"],
    equipmentIds: ["none"],
    categoryIds: ["balance"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-12",
    name: "Transferência de peso",
    regionIds: ["pe", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-13",
    name: "Marcha na ponta dos pés",
    regionIds: ["pe", "panturrilha", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-14",
    name: "Marcha sobre calcanhares",
    regionIds: ["pe", "panturrilha", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Funcional"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-16",
    name: "Mobilidade ativa de tornozelo",
    regionIds: ["pe", "panturrilha", "tornozelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-17",
    name: "Alcance em estrela com apoio",
    regionIds: ["pe", "tornozelo", "joelho", "quadril", "gluteos"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Equilíbrio"],
    equipmentIds: ["none"],
    categoryIds: ["balance"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "pe-ex-19",
    name: "Rolamento plantar com bola",
    regionIds: ["pe"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola pequena",
    categories: ["Fortalecimento"],
    equipmentIds: ["small_ball"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["original-library"],
    contentStatus: "legacy",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-pushup-knees",
    name: "Flexão de braços com joelhos apoiados",
    regionIds: ["peitoral", "ombro", "braco", "cotovelo"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: ["solo", "cadeia fechada"],
    sourceIds: ["ace-chest"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-inchworm",
    name: "Caminhada das mãos até a prancha",
    regionIds: ["abdomen", "ombro"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: ["solo", "cadeia fechada"],
    sourceIds: ["ace-chest"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Caminhada das mãos — Inchworm"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-bench-press",
    name: "Supino com halteres",
    regionIds: ["peitoral", "ombro", "braco", "cotovelo"],
    equipmentIds: ["dumbbell", "bench"],
    categoryIds: ["strength"],
    tags: ["deitado", "cadeia aberta"],
    sourceIds: ["ace-chest"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter + Banco",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-incline-press",
    name: "Supino inclinado com halteres",
    regionIds: ["peitoral", "ombro", "braco", "cotovelo"],
    equipmentIds: ["dumbbell", "bench"],
    categoryIds: ["strength"],
    tags: ["deitado", "cadeia aberta"],
    sourceIds: ["ace-chest"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter + Banco",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chest-fly",
    name: "Crucifixo deitado com halteres",
    regionIds: ["peitoral", "ombro"],
    equipmentIds: ["dumbbell", "bench"],
    categoryIds: ["strength"],
    tags: ["deitado", "cadeia aberta"],
    sourceIds: ["ace-chest"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter + Banco",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-pullover",
    name: "Extensão de ombro deitado com halter",
    regionIds: ["ombro", "peitoral"],
    equipmentIds: ["dumbbell", "bench"],
    categoryIds: ["strength"],
    tags: ["deitado", "cadeia aberta"],
    sourceIds: ["ace-chest"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter + Banco",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Pullover com halter"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-triceps-stretch",
    name: "Alongamento de tríceps acima da cabeça",
    regionIds: ["braco", "cotovelo", "ombro"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: [],
    sourceIds: ["ace-arms"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-triceps-lying",
    name: "Extensão de tríceps deitado com barra",
    regionIds: ["braco", "cotovelo"],
    equipmentIds: ["barbell", "bench"],
    categoryIds: ["strength"],
    tags: ["deitado"],
    sourceIds: ["ace-arms"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barra com pesos + Banco",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chin-up",
    name: "Tração na barra com pegada supinada",
    regionIds: ["braco", "cotovelo", "toracica", "ombro"],
    equipmentIds: ["pullup_bar"],
    categoryIds: ["strength"],
    tags: ["cadeia fechada"],
    sourceIds: ["ace-arms"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barra fixa",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-lat-stretch",
    name: "Alongamento dorsal com tronco a 90 graus",
    regionIds: ["toracica", "ombro"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: ["solo"],
    sourceIds: ["ace-back"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-child-pose",
    name: "Alongamento em posição de criança",
    regionIds: ["coluna", "toracica", "quadril"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: ["solo"],
    sourceIds: ["ace-back"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cobra",
    name: "Extensão de tronco apoiado nas mãos",
    regionIds: ["coluna", "abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: ["solo"],
    sourceIds: ["ace-back"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Extensão de tronco em apoio ventral — Cobra"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-inverted-v",
    name: "Apoio em V invertido",
    regionIds: ["panturrilha", "posterior_coxa", "ombro"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: ["solo"],
    sourceIds: ["ace-back"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-prone-opposite",
    name: "Elevação contralateral de braço e perna deitado",
    regionIds: ["coluna", "gluteos", "ombro"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "stability"],
    tags: ["solo"],
    sourceIds: ["ace-back"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-bridge-single",
    name: "Ponte de quadril unilateral",
    regionIds: ["gluteos", "posterior_coxa", "quadril", "coluna"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "stability"],
    tags: ["solo"],
    sourceIds: ["ace-back"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-bent-row",
    name: "Remada curvada com barra",
    regionIds: ["toracica", "trapezio", "braco", "cotovelo", "ombro"],
    equipmentIds: ["barbell"],
    categoryIds: ["strength"],
    tags: ["em pé"],
    sourceIds: ["ace-back"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barra com pesos",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-front-squat",
    name: "Agachamento frontal com halteres",
    regionIds: ["coxa", "quadril", "gluteos", "joelho"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength", "functional"],
    tags: ["em pé", "cadeia fechada"],
    sourceIds: ["ace-back"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento", "Funcional"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-crunch",
    name: "Flexão abdominal curta",
    regionIds: ["abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: ["solo"],
    sourceIds: ["ace-abs"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-fire-hydrant",
    name: "Abdução de quadril em quatro apoios",
    regionIds: ["quadril", "gluteos", "abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "stability"],
    tags: ["quatro apoios"],
    sourceIds: ["ace-abs"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-forward-lunge",
    name: "Avanço à frente",
    regionIds: ["coxa", "quadril", "gluteos", "joelho"],
    equipmentIds: ["none"],
    categoryIds: ["strength", "functional"],
    tags: ["em pé", "cadeia fechada"],
    sourceIds: ["ace-abs"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento", "Funcional"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-bosu-plank",
    name: "Prancha com apoio no Bosu",
    regionIds: ["abdomen", "coluna", "ombro"],
    equipmentIds: ["bosu"],
    categoryIds: ["stability", "isometric"],
    tags: ["solo", "cadeia fechada"],
    sourceIds: ["ace-abs"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bosu",
    categories: ["Estabilidade", "Isometria"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-band-chest-press",
    name: "Pressão de peito em pé com tubo elástico",
    regionIds: ["peitoral", "ombro", "braco", "cotovelo"],
    equipmentIds: ["elastic_tube"],
    categoryIds: ["strength"],
    tags: ["em pé"],
    sourceIds: ["ace-bands"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Tubo elástico",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-band-fly",
    name: "Crucifixo em pé com faixa elástica",
    regionIds: ["peitoral", "ombro"],
    equipmentIds: ["elastic_band"],
    categoryIds: ["strength"],
    tags: ["em pé"],
    sourceIds: ["ace-band-fly"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-tandem",
    name: "Equilíbrio com um pé à frente do outro",
    regionIds: ["tornozelo", "pe"],
    equipmentIds: ["chair"],
    categoryIds: ["balance", "proprioception"],
    tags: ["em pé", "com apoio"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadeira",
    categories: ["Equilíbrio", "Propriocepção"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Equilíbrio em tandem com apoio"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-single-squat",
    name: "Agachamento unipodal com apoio",
    regionIds: ["coxa", "quadril", "gluteos", "joelho"],
    equipmentIds: ["chair"],
    categoryIds: ["balance", "proprioception"],
    tags: ["em pé", "com apoio"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadeira",
    categories: ["Equilíbrio", "Propriocepção"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-disc-stand",
    name: "Equilíbrio sobre disco com apoio",
    regionIds: ["tornozelo", "pe", "joelho", "quadril"],
    equipmentIds: ["balance_disc", "chair"],
    categoryIds: ["balance", "proprioception"],
    tags: ["em pé", "com apoio"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Disco de equilíbrio + Cadeira",
    categories: ["Equilíbrio", "Propriocepção"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-step-tap",
    name: "Toque alternado dos pés no degrau",
    regionIds: ["quadril", "coxa", "joelho", "tornozelo"],
    equipmentIds: ["step"],
    categoryIds: ["functional", "coordination"],
    tags: ["em pé", "cadeia fechada"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Step",
    categories: ["Funcional", "Coordenação"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Toque alternado dos pés no step"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-lateral-step",
    name: "Subida lateral no degrau",
    regionIds: ["quadril", "gluteos", "coxa", "joelho"],
    equipmentIds: ["step"],
    categoryIds: ["functional", "coordination"],
    tags: ["em pé", "cadeia fechada"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Step",
    categories: ["Funcional", "Coordenação"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Subida lateral no step"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-offset-stand",
    name: "Sentar e levantar com base assimétrica",
    regionIds: ["coxa", "quadril", "gluteos", "joelho"],
    equipmentIds: ["chair"],
    categoryIds: ["strength", "functional"],
    tags: ["sentado", "cadeia fechada"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadeira",
    categories: ["Fortalecimento", "Funcional"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-prone-hip",
    name: "Extensão de quadril deitado de barriga para baixo",
    regionIds: ["quadril", "gluteos", "posterior_coxa"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: ["solo", "cadeia aberta"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-deadlift",
    name: "Levantamento terra com halteres",
    regionIds: ["posterior_coxa", "gluteos", "quadril", "coluna"],
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength", "functional"],
    tags: ["em pé"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Halter",
    categories: ["Fortalecimento", "Funcional"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-weighted-curl",
    name: "Flexão de joelho com caneleira",
    regionIds: ["posterior_coxa", "joelho"],
    equipmentIds: ["ankle_weight", "chair"],
    categoryIds: ["strength"],
    tags: ["em pé", "com apoio", "cadeia aberta"],
    sourceIds: ["nhs-functional"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Caneleira + Cadeira",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-tandem-walk",
    name: "Marcha com um pé à frente do outro",
    regionIds: ["tornozelo", "pe"],
    equipmentIds: ["none"],
    categoryIds: ["balance", "coordination", "functional"],
    tags: ["em pé"],
    sourceIds: ["nhs-balance"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Equilíbrio", "Coordenação", "Funcional"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Marcha em tandem"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-back-walk",
    name: "Caminhada para trás",
    regionIds: ["tornozelo", "pe", "quadril"],
    equipmentIds: ["none"],
    categoryIds: ["balance", "coordination", "functional"],
    tags: ["em pé"],
    sourceIds: ["nhs-dynamic-balance"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Equilíbrio", "Coordenação", "Funcional"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-side-walk",
    name: "Caminhada lateral cruzada",
    regionIds: ["quadril", "gluteos", "tornozelo", "pe"],
    equipmentIds: ["none"],
    categoryIds: ["balance", "coordination", "functional"],
    tags: ["em pé"],
    sourceIds: ["nhs-grapevine"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Equilíbrio", "Coordenação", "Funcional"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-hip-rotation-stretch",
    name: "Alongamento de rotação do quadril sentado",
    regionIds: ["quadril", "gluteos"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: ["solo"],
    sourceIds: ["aaos-hip"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-hamstring-stretch",
    name: "Alongamento posterior da coxa deitado",
    regionIds: ["posterior_coxa", "quadril"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: ["solo"],
    sourceIds: ["aaos-hip"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-it-band-stretch",
    name: "Alongamento lateral do quadril em pé",
    regionIds: ["quadril", "gluteos"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: ["solo"],
    sourceIds: ["aaos-hip"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-hip-adduction",
    name: "Adução de quadril em decúbito lateral",
    regionIds: ["quadril", "coxa"],
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    tags: ["deitado", "cadeia aberta"],
    sourceIds: ["aaos-hip"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-quad-stretch",
    name: "Alongamento anterior da coxa em pé",
    regionIds: ["coxa", "joelho"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: ["em pé"],
    sourceIds: ["aaos-knee"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-knee-extension",
    name: "Extensão de joelho sentado",
    regionIds: ["coxa", "joelho"],
    equipmentIds: ["chair"],
    categoryIds: ["strength"],
    tags: ["sentado", "cadeia aberta"],
    sourceIds: ["aaos-knee"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadeira",
    categories: ["Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-soleus-stretch",
    name: "Alongamento da panturrilha com joelho flexionado",
    regionIds: ["panturrilha", "tornozelo"],
    equipmentIds: ["wall"],
    categoryIds: ["stretching"],
    tags: ["em pé", "com apoio"],
    sourceIds: ["aaos-foot"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Parede",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-calf-towel",
    name: "Alongamento de panturrilha com toalha",
    regionIds: ["panturrilha", "tornozelo", "pe"],
    equipmentIds: ["towel"],
    categoryIds: ["stretching"],
    tags: ["sentado"],
    sourceIds: ["aaos-foot"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Toalha",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-toe-pickup",
    name: "Recolher objetos com os dedos do pé",
    regionIds: ["pe"],
    equipmentIds: ["small_objects"],
    categoryIds: ["coordination", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["aaos-foot"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Objetos pequenos",
    categories: ["Coordenação", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-ankle-alphabet",
    name: "Desenhar o alfabeto com o tornozelo",
    regionIds: ["tornozelo", "pe", "panturrilha"],
    equipmentIds: ["none"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["aaos-foot"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-neck-ball",
    name: "Rotação cervical apoiada em bola pequena",
    regionIds: ["cervical"],
    equipmentIds: ["small_ball"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["deitado"],
    sourceIds: ["nhs-neck"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola pequena",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-upper-trap-stretch",
    name: "Alongamento do trapézio superior",
    regionIds: ["cervical", "trapezio"],
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    tags: [],
    sourceIds: ["nhs-neck"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-neck-side-iso",
    name: "Isometria de inclinação lateral cervical",
    regionIds: ["cervical"],
    equipmentIds: ["none"],
    categoryIds: ["isometric", "strength"],
    tags: [],
    sourceIds: ["nhs-neck"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Isometria", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-neck-rotate-iso",
    name: "Isometria de rotação cervical",
    regionIds: ["cervical"],
    equipmentIds: ["none"],
    categoryIds: ["isometric", "strength"],
    tags: [],
    sourceIds: ["nhs-neck"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Isometria", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-hook-grip",
    name: "Preensão em gancho com massa terapêutica",
    regionIds: ["mao", "antebraco"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-key-pinch",
    name: "Pinça lateral com massa terapêutica",
    regionIds: ["mao"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-palmar-pinch",
    name: "Pinça palmar com dedos estendidos",
    regionIds: ["mao"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-finger-adduct",
    name: "Adução dos dedos contra massa terapêutica",
    regionIds: ["mao"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-finger-abduct",
    name: "Abdução dos dedos contra massa terapêutica",
    regionIds: ["mao"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-finger-roll",
    name: "Extensão dos dedos rolando massa terapêutica",
    regionIds: ["mao", "antebraco"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-thumb-adduct",
    name: "Adução do polegar contra massa terapêutica",
    regionIds: ["mao"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-thumb-abduct",
    name: "Abdução do polegar contra massa terapêutica",
    regionIds: ["mao"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-thumb-flex",
    name: "Flexão do polegar contra massa terapêutica",
    regionIds: ["mao", "antebraco"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-finger-scratch",
    name: "Flexão dos dedos em arraste na massa",
    regionIds: ["mao", "antebraco"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-finger-flick",
    name: "Extensão individual dos dedos na massa",
    regionIds: ["mao", "antebraco"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-putty"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Sobreposição com extensão individual dos dedos; não há diferenciação suficiente no catálogo.",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-tripod-pinch",
    name: "Pinça trípode com massa terapêutica",
    regionIds: ["mao"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-thumb"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-thumb-extension",
    name: "Extensão do polegar contra massa terapêutica",
    regionIds: ["mao", "antebraco"],
    equipmentIds: ["therapy_putty"],
    categoryIds: ["strength", "motor_control"],
    tags: ["sentado"],
    sourceIds: ["nhs-thumb"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Massa terapêutica",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-hundred",
    name: "Bombeamento dos braços com sustentação abdominal",
    regionIds: ["abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Hundred no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-roll-up",
    name: "Elevação do tronco com enrolamento da coluna",
    regionIds: ["abdomen", "coluna"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Roll Up no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-leg-circles",
    name: "Círculos de uma perna no solo",
    regionIds: ["quadril", "abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-single-stretch",
    name: "Alternância de pernas com sustentação abdominal",
    regionIds: ["abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Single Leg Stretch no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-double-stretch",
    name: "Extensão de braços e pernas com sustentação abdominal",
    regionIds: ["abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Double Leg Stretch no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-criss-cross",
    name: "Abdominal com rotação e pernas alternadas",
    regionIds: ["abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Criss Cross no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-single-kick",
    name: "Flexão alternada de joelho deitado de barriga para baixo",
    regionIds: ["posterior_coxa", "joelho"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Single Leg Kick no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-double-kick",
    name: "Flexão dos joelhos com extensão de tronco",
    regionIds: ["posterior_coxa", "toracica"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Double Leg Kick no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-swimming",
    name: "Elevação alternada de braços e pernas de barriga para baixo",
    regionIds: ["coluna", "gluteos", "posterior_coxa", "ombro"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Swimming no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata",
    active: !1,
    reviewNotes: "Sobreposição com elevação contralateral de braço e perna deitado; retirado para evitar duplicação do mesmo padrão."
}, {
    id: "lib-side-kick",
    name: "Flexão e extensão de quadril deitado de lado",
    regionIds: ["quadril", "gluteos"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Side Kick frente e trás no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-side-kneel",
    name: "Abdução de quadril em apoio lateral ajoelhado",
    regionIds: ["quadril", "gluteos", "abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Side Kick ajoelhado"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-leg-pull-back",
    name: "Prancha invertida com elevação da perna",
    regionIds: ["gluteos", "posterior_coxa", "abdomen", "braco"],
    equipmentIds: ["none"],
    categoryIds: ["motor_control", "strength"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Controle motor", "Fortalecimento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Sequência avançada; não acrescenta opção simples além dos exercícios de apoio já disponíveis.",
    aliases: ["Leg Pull Back no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-spine-stretch",
    name: "Alongamento da coluna sentado com pernas estendidas",
    regionIds: ["coluna", "toracica", "posterior_coxa"],
    equipmentIds: ["none"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Spine Stretch Forward no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-saw",
    name: "Rotação de tronco com alcance ao pé",
    regionIds: ["abdomen", "toracica", "posterior_coxa"],
    equipmentIds: ["none"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Saw no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-spine-twist",
    name: "Rotação de tronco sentado",
    regionIds: ["toracica", "abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Spine Twist sentado"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-mermaid-mat",
    name: "Inclinação lateral do tronco sentado no solo",
    regionIds: ["coluna", "toracica", "abdomen"],
    equipmentIds: ["none"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates", "solo"],
    sourceIds: ["pilates-mat"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Sem equipamento",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Mermaid no solo"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-footwork",
    name: "Flexão e extensão de joelhos no Reformer",
    regionIds: ["coxa", "joelho"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Footwork no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-frog-straps",
    name: "Extensão de pernas com alças no Reformer",
    regionIds: ["quadril", "coxa"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Frog com alças no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-circles-straps",
    name: "Círculos das pernas com alças no Reformer",
    regionIds: ["quadril", "abdomen"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-stomach-massage",
    name: "Flexão de pernas com tronco arredondado no Reformer",
    regionIds: ["abdomen", "quadril", "coxa"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Sequência de Pilates dependente de execução detalhada, inadequada como item genérico.",
    aliases: ["Stomach Massage no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-knee-stretch",
    name: "Deslizamento do carrinho ajoelhado no Reformer",
    regionIds: ["abdomen", "quadril", "ombro"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Descrição insuficiente da variação de coluna e apoio para um item autossuficiente.",
    aliases: ["Knee Stretch no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-running-reformer",
    name: "Alternância de calcanhares no Reformer",
    regionIds: ["panturrilha", "tornozelo", "pe"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Running no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-pelvic-lift",
    name: "Ponte de glúteos no Reformer",
    regionIds: ["gluteos", "posterior_coxa", "quadril", "coluna"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Pelvic Lift no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-elephant",
    name: "Alongamento posterior em apoio no Reformer",
    regionIds: ["posterior_coxa", "panturrilha", "ombro", "quadril"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Elephant no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-tree",
    name: "Alongamento da perna na caixa do Reformer",
    regionIds: ["posterior_coxa", "quadril", "abdomen"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Tree na caixa do Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-pull-straps",
    name: "Extensão de ombros com alças no Reformer",
    regionIds: ["toracica", "trapezio", "ombro"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "stability"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer-intermediate"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Pulling Straps na caixa do Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-backstroke",
    name: "Círculos de braços e pernas no Reformer",
    regionIds: ["abdomen", "ombro", "quadril"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "stability"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer-intermediate"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Sequência complexa com braços e pernas, sem demonstração específica.",
    aliases: ["Backstroke no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-long-stretch",
    name: "Prancha com deslocamento no Reformer",
    regionIds: ["abdomen", "ombro"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "stability"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer-intermediate"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Long Stretch no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-side-splits",
    name: "Afastamento lateral das pernas no Reformer",
    regionIds: ["quadril", "gluteos", "coxa"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "stability"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer-intermediate"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Side Splits no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-coordination",
    name: "Extensão coordenada de braços e pernas no Reformer",
    regionIds: ["abdomen", "braco", "cotovelo", "quadril"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "stability"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer-intermediate"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Sequência complexa de coordenação sem demonstração específica.",
    aliases: ["Coordination no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-semi-circle",
    name: "Articulação da coluna em ponte no Reformer",
    regionIds: ["gluteos", "posterior_coxa", "coluna", "quadril"],
    equipmentIds: ["pilates_reformer"],
    categoryIds: ["strength", "stability"],
    tags: ["Pilates"],
    sourceIds: ["pilates-reformer-intermediate"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Reformer",
    categories: ["Fortalecimento", "Estabilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Articulação avançada da coluna; não manter apenas por contagem.",
    aliases: ["Semi Circle no Reformer"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-roll-down",
    name: "Enrolamento da coluna com barra no Cadillac",
    regionIds: ["abdomen", "coluna"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Roll Down com barra no Cadillac"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chest-expansion",
    name: "Extensão de ombros com molas no Cadillac",
    regionIds: ["ombro", "toracica", "trapezio"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Chest Expansion no Cadillac"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-curl",
    name: "Rosca de bíceps com molas no Cadillac",
    regionIds: ["braco", "cotovelo"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-triceps",
    name: "Tríceps com molas no Cadillac",
    regionIds: ["braco", "cotovelo"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-hug",
    name: "Abraço com molas no Cadillac",
    regionIds: ["peitoral", "ombro"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-boxing",
    name: "Empurrada alternada com molas no Cadillac",
    regionIds: ["peitoral", "ombro", "braco", "cotovelo"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Boxing com molas no Cadillac"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-leg-walk",
    name: "Caminhada das pernas com molas no Cadillac",
    regionIds: ["quadril", "abdomen"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-bicycle",
    name: "Bicicleta com molas no Cadillac",
    regionIds: ["quadril"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-sideleg",
    name: "Pernada lateral frente e trás com molas",
    regionIds: ["quadril", "gluteos"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-squat",
    name: "Agachamento com barra no Cadillac",
    regionIds: ["quadril", "gluteos", "coxa", "joelho"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-arm-circles",
    name: "Círculos dos braços com molas no Cadillac",
    regionIds: ["ombro"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-cadillac-shaving",
    name: "Extensão de cotovelos acima da cabeça no Cadillac",
    regionIds: ["braco", "cotovelo", "ombro"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Shaving com molas no Cadillac"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-thigh-stretch",
    name: "Inclinação do tronco ajoelhado no Cadillac",
    regionIds: ["coxa", "abdomen"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Thigh Stretch no Cadillac"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-mermaid-cadillac",
    name: "Inclinação lateral do tronco no Cadillac",
    regionIds: ["toracica", "coluna", "abdomen"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Mermaid sentada no Cadillac"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-swan-cadillac",
    name: "Extensão de tronco com barra no Cadillac",
    regionIds: ["coluna", "toracica", "ombro"],
    equipmentIds: ["pilates_cadillac"],
    categoryIds: ["mobility", "stretching"],
    tags: ["Pilates"],
    sourceIds: ["pilates-cadillac"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Cadillac",
    categories: ["Mobilidade", "Alongamento"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Swan no Cadillac"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-footwork",
    name: "Flexão e extensão de joelhos na Chair",
    regionIds: ["coxa", "joelho"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Footwork na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-tendon",
    name: "Elevação do corpo em apoio no pedal da Chair",
    regionIds: ["panturrilha", "tornozelo", "pe", "abdomen"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Exercício avançado de apoio corporal; não é opção genérica de panturrilha ou pé.",
    aliases: ["Tendon Stretch na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-mountain",
    name: "Flexão alternada de pernas na Chair",
    regionIds: ["quadril", "gluteos", "coxa", "joelho"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Sobreposição com subidas na Chair; manter a subida frontal mais clara.",
    aliases: ["Mountain Climb na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-upfront",
    name: "Subida frontal na Chair",
    regionIds: ["quadril", "gluteos", "coxa", "joelho"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Going Up Front na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-upside",
    name: "Subida lateral na Chair",
    regionIds: ["quadril", "gluteos", "coxa", "joelho"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Going Up Side na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-legpress",
    name: "Pressão da perna no pedal da Chair",
    regionIds: ["quadril", "gluteos", "coxa", "joelho"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-armfrog",
    name: "Flexão e extensão de cotovelos na Chair",
    regionIds: ["braco", "cotovelo", "ombro"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Padrão pouco definido; existem extensões de cotovelo mais claras.",
    aliases: ["Arm Frog na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-backarms",
    name: "Extensão de cotovelos com apoio posterior na Chair",
    regionIds: ["braco", "cotovelo", "ombro"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Backward Arms na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-pushup",
    name: "Flexão de braços com pedal da Chair",
    regionIds: ["peitoral", "braco", "cotovelo", "ombro"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-table",
    name: "Ponte com apoio das mãos na Chair",
    regionIds: ["gluteos", "posterior_coxa", "braco", "abdomen"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Sequência de suporte corporal sem demonstração; priorizadas pontes simples.",
    aliases: ["Table Top na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-swan",
    name: "Extensão de tronco apoiado na Chair",
    regionIds: ["coluna", "toracica", "ombro"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Swan na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-mermaid",
    name: "Inclinação lateral do tronco na Chair",
    regionIds: ["toracica", "coluna", "abdomen"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Mermaid sentada na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chair-pushdown",
    name: "Flexão de tronco com pressão no pedal da Chair",
    regionIds: ["abdomen", "coluna", "ombro"],
    equipmentIds: ["pilates_chair"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-chair"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Chair",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Push Down na Chair"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-barrel-front",
    name: "Alongamento posterior da perna no Barrel",
    regionIds: ["posterior_coxa", "quadril"],
    equipmentIds: ["pilates_barrel"],
    categoryIds: ["stretching", "mobility"],
    tags: ["Pilates"],
    sourceIds: ["pilates-barrel"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barrel",
    categories: ["Alongamento", "Mobilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-barrel-side",
    name: "Alongamento lateral da perna no Barrel",
    regionIds: ["quadril", "coxa"],
    equipmentIds: ["pilates_barrel"],
    categoryIds: ["stretching", "mobility"],
    tags: ["Pilates"],
    sourceIds: ["pilates-barrel"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barrel",
    categories: ["Alongamento", "Mobilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-barrel-back",
    name: "Alongamento anterior da perna no Barrel",
    regionIds: ["coxa", "quadril"],
    equipmentIds: ["pilates_barrel"],
    categoryIds: ["stretching", "mobility"],
    tags: ["Pilates"],
    sourceIds: ["pilates-barrel"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barrel",
    categories: ["Alongamento", "Mobilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-barrel-side-stretch",
    name: "Alongamento lateral do tronco no Barrel",
    regionIds: ["coluna", "toracica", "abdomen"],
    equipmentIds: ["pilates_barrel"],
    categoryIds: ["stretching", "mobility"],
    tags: ["Pilates"],
    sourceIds: ["pilates-barrel"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barrel",
    categories: ["Alongamento", "Mobilidade"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-barrel-swan",
    name: "Extensão de tronco apoiado no Barrel",
    regionIds: ["coluna", "toracica", "gluteos"],
    equipmentIds: ["pilates_barrel"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-barrel"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barrel",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: ["Swan no Barrel"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-barrel-side-situp",
    name: "Flexão lateral do tronco no Barrel",
    regionIds: ["abdomen", "coluna"],
    equipmentIds: ["pilates_barrel"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-barrel"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barrel",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-barrel-horseback",
    name: "Sustentação do tronco sentado no Barrel",
    regionIds: ["abdomen", "quadril", "coxa"],
    equipmentIds: ["pilates_barrel"],
    categoryIds: ["strength", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-barrel"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Barrel",
    categories: ["Fortalecimento", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Exercício de repertório específico, pouco claro para a navegação regional.",
    aliases: ["Horseback no Barrel"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-corrector-arm",
    name: "Círculos dos braços no Spine Corrector",
    regionIds: ["ombro", "peitoral"],
    equipmentIds: ["pilates_spine_corrector"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-corrector"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Spine Corrector",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-corrector-scissors",
    name: "Tesoura das pernas no Spine Corrector",
    regionIds: ["quadril", "abdomen", "posterior_coxa"],
    equipmentIds: ["pilates_spine_corrector"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-corrector"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Spine Corrector",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Versão apoiada dependente de posicionamento preciso; não somar por equipamento.",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-corrector-bicycle",
    name: "Bicicleta no Spine Corrector",
    regionIds: ["quadril", "coxa", "posterior_coxa"],
    equipmentIds: ["pilates_spine_corrector"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-corrector"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Spine Corrector",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Padrão já representado pela bicicleta com molas; exige demonstração específica.",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-corrector-swim",
    name: "Elevação alternada dos membros no Spine Corrector",
    regionIds: ["coluna", "gluteos", "posterior_coxa", "ombro"],
    equipmentIds: ["pilates_spine_corrector"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-corrector"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Spine Corrector",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Sobreposição com elevação alternada no solo, sem vantagem documentada no catálogo.",
    aliases: ["Swimming no Spine Corrector"],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-corrector-bridge",
    name: "Ponte de ombros no Spine Corrector",
    regionIds: ["gluteos", "posterior_coxa", "quadril", "coluna"],
    equipmentIds: ["pilates_spine_corrector"],
    categoryIds: ["mobility", "motor_control"],
    tags: ["Pilates"],
    sourceIds: ["pilates-corrector"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Spine Corrector",
    categories: ["Mobilidade", "Controle motor"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    active: !1,
    reviewNotes: "Variação de apoio sobreposta à ponte no solo e na bola.",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-neck-flex",
    name: "Flexão cervical ativa",
    regionIds: ["cervical"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    tags: [],
    sourceIds: ["nhs-neck-cuh"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-neck-side",
    name: "Inclinação lateral cervical ativa",
    regionIds: ["cervical"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["none"],
    categoryIds: ["mobility"],
    equipment: "Sem equipamento",
    categories: ["Mobilidade"],
    tags: [],
    sourceIds: ["nhs-neck-cuh"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-scalene-stretch",
    name: "Alongamento dos escalenos sentado",
    regionIds: ["cervical"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["chair"],
    categoryIds: ["stretching"],
    equipment: "Cadeira",
    categories: ["Alongamento"],
    tags: [],
    sourceIds: ["nhs-neck-cuh"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-levator-stretch",
    name: "Alongamento do levantador da escápula",
    regionIds: ["cervical", "trapezio"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["chair"],
    categoryIds: ["stretching"],
    equipment: "Cadeira",
    categories: ["Alongamento"],
    tags: [],
    sourceIds: ["nhs-neck-cuh"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-trap-prone",
    name: "Elevação dos braços em Y deitado",
    regionIds: ["trapezio", "ombro", "toracica"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    tags: ["solo"],
    sourceIds: ["aaos-shoulder"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-reverse-fly",
    name: "Abdução horizontal de ombro deitado",
    regionIds: ["trapezio", "ombro", "toracica"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["dumbbell"],
    categoryIds: ["strength"],
    equipment: "Halter",
    categories: ["Fortalecimento"],
    tags: ["solo"],
    sourceIds: ["aaos-shoulder"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-chest-stretch",
    name: "Alongamento de peitoral em pé",
    regionIds: ["peitoral", "ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["none"],
    categoryIds: ["stretching"],
    equipment: "Sem equipamento",
    categories: ["Alongamento"],
    tags: [],
    sourceIds: ["ace-chest-stretch"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-pushup",
    name: "Flexão de braços no solo",
    regionIds: ["peitoral", "ombro", "braco", "cotovelo"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["none"],
    categoryIds: ["strength"],
    equipment: "Sem equipamento",
    categories: ["Fortalecimento"],
    tags: ["cadeia fechada"],
    sourceIds: ["ace-chest-study"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-roller-extension",
    name: "Extensão torácica apoiada no rolo",
    regionIds: ["toracica"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["roller"],
    categoryIds: ["mobility"],
    equipment: "Rolo",
    categories: ["Mobilidade"],
    tags: ["solo"],
    sourceIds: ["ace-thoracic"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-reach-seated",
    name: "Alcance à frente sentado",
    regionIds: ["abdomen", "ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["chair"],
    categoryIds: ["balance", "functional"],
    equipment: "Cadeira",
    categories: ["Equilíbrio", "Funcional"],
    tags: ["sentado"],
    sourceIds: ["nhs-balance"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "lib-reach-side",
    name: "Alcance lateral sentado",
    regionIds: ["abdomen", "ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipmentIds: ["chair"],
    categoryIds: ["balance", "functional"],
    equipment: "Cadeira",
    categories: ["Equilíbrio", "Funcional"],
    tags: ["sentado"],
    sourceIds: ["nhs-balance"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    aliases: [],
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "review-ball-bridge",
    name: "Ponte de glúteos com bola suíça",
    regionIds: ["quadril", "gluteos", "posterior_coxa"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola suíça",
    equipmentIds: ["swiss_ball"],
    categories: ["Fortalecimento", "Estabilidade"],
    categoryIds: ["strength", "stability"],
    tags: [],
    sourceIds: ["ace-ball-bridge"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "review-ball-alphabet",
    name: "Desenhar letras com os antebraços na bola suíça",
    regionIds: ["abdomen", "ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola suíça",
    equipmentIds: ["swiss_ball"],
    categories: ["Estabilidade", "Coordenação"],
    categoryIds: ["stability", "coordination"],
    tags: [],
    sourceIds: ["ace-ball-letters"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "review-ball-wall-squat",
    name: "Agachamento com bola suíça na parede",
    regionIds: ["quadril", "gluteos", "coxa", "joelho"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola suíça e Parede",
    equipmentIds: ["swiss_ball", "wall"],
    categories: ["Fortalecimento", "Funcional"],
    categoryIds: ["strength", "functional"],
    tags: [],
    sourceIds: ["nhs-gym-ball"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "review-ball-opposite",
    name: "Elevação alternada de braço e perna sobre bola suíça",
    regionIds: ["coluna", "gluteos", "ombro"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola suíça",
    equipmentIds: ["swiss_ball"],
    categories: ["Estabilidade", "Controle motor"],
    categoryIds: ["stability", "motor_control"],
    tags: [],
    sourceIds: ["nhs-gym-ball"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "review-band-wrist-flex",
    name: "Flexão de punho com faixa elástica",
    regionIds: ["antebraco", "mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    equipmentIds: ["elastic_band"],
    categories: ["Fortalecimento"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["nhs-wrist-band"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "review-band-wrist-extend",
    name: "Extensão de punho com faixa elástica",
    regionIds: ["antebraco", "mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    equipmentIds: ["elastic_band"],
    categories: ["Fortalecimento"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["nhs-wrist-band"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "review-band-wrist-ulnar",
    name: "Desvio ulnar de punho com faixa elástica",
    regionIds: ["antebraco", "mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Faixa elástica",
    equipmentIds: ["elastic_band"],
    categories: ["Fortalecimento"],
    categoryIds: ["strength"],
    tags: [],
    sourceIds: ["nhs-wrist-fracture"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}, {
    id: "review-ball-catch",
    name: "Lançar e receber bola pequena",
    regionIds: ["mao"],
    thumbnail: "/anatomy.png",
    illustrative: !0,
    defaultSets: 3,
    defaultReps: 12,
    defaultNotes: "",
    equipment: "Bola pequena",
    equipmentIds: ["small_ball"],
    categories: ["Coordenação"],
    categoryIds: ["coordination"],
    tags: [],
    sourceIds: ["nhs-wrist-fracture"],
    contentStatus: "reference-checked",
    mediaStatus: "illustration-only",
    reviewedAt: "2026-09-23",
    reviewScope: "nomenclature-and-metadata"
}];
for (const v of Xi) {
    const I = Gh[v.id];
    I && (v.media = I,
    v.mediaStatus = "available")
}
const fo = Xi.filter(v => v.active !== !1);
Xi.filter(v => v.active === !1);
const Jh = {
    "joelho-ex-9": "quadril-ex-6",
    "pe-ex-18": "quadril-ex-10",
    "cotovelo-ex-12": "ombro-ex-4",
    "mao-ex-7": "cotovelo-ex-10",
    "mao-ex-15": "cotovelo-ex-14",
    "mao-ex-16": "cotovelo-ex-13",
    "coluna-ex-14": "ombro-ex-4",
    "quadril-ex-0": "coluna-ex-1",
    "quadril-ex-3": "coluna-ex-16",
    "quadril-ex-8": "coluna-ex-15",
    "quadril-ex-9": "coluna-ex-19",
    "quadril-ex-14": "coluna-ex-13",
    "joelho-ex-1": "quadril-ex-16",
    "joelho-ex-3": "quadril-ex-10",
    "joelho-ex-4": "coluna-ex-1",
    "joelho-ex-8": "quadril-ex-5",
    "joelho-ex-10": "coluna-ex-15",
    "joelho-ex-11": "quadril-ex-11",
    "joelho-ex-12": "quadril-ex-12",
    "joelho-ex-14": "quadril-ex-7",
    "pe-ex-4": "joelho-ex-13",
    "pe-ex-11": "quadril-ex-12",
    "pe-ex-15": "joelho-ex-18"
}
  , Rp = v => Xi.find(I => I.id === v)
  , ju = v => v.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  , $h = v => fo.filter(I => I.regionIds.includes(v)).sort( (I, A) => {
    const m = R => v === "joelho" && R.thumbnailCrop !== void 0 ? R.thumbnailCrop : R.regionIds[0] === v ? 10 : 20;
    return m(I) - m(A)
}
);
function wp(v) {
    const I = ju(v.trim())
      , A = it.filter(R => ju(`${R.name} ${R.short}`).includes(I))
      , m = new Set(A.map(R => R.id));
    return {
        regions: A,
        exercises: fo.filter(R => R.regionIds.some(O => m.has(O)) || I.split(/\s+/).every(O => ju(Yh(R)).includes(O)))
    }
}
function Wh(v) {
    try {
        const I = JSON.parse(v || "[]");
        return Array.isArray(I) ? I.flatMap(A => {
            if (!A || typeof A != "object")
                return [];
            const m = Jh[A.exerciseId] ?? A.exerciseId;
            return typeof A.id != "string" || !Rp(m) || !Number.isInteger(A.sets) || A.sets < 1 || A.sets > 99 || !Number.isInteger(A.reps) || A.reps < 1 || A.reps > 999 || typeof A.notes != "string" ? [] : [{
                id: A.id,
                exerciseId: m,
                sets: A.sets,
                reps: A.reps,
                notes: A.notes
            }]
        }
        ) : []
    } catch {
        return []
    }
}
const Ph = [{
    id: "cervical",
    d: "M274 183 Q277 218 260 246 Q276 255 302 249 L292 211 Z",
    mirror: 630
}, {
    id: "ombro",
    d: "M224 255 Q186 232 156 263 Q134 288 140 348 Q167 337 192 301 Q200 275 224 255Z",
    mirror: 630
}, {
    id: "peitoral",
    d: "M244 259 Q276 258 304 268 Q312 276 311 317 L309 351 Q286 379 249 374 Q204 367 195 320 Q194 286 244 259Z",
    mirror: 630
}, {
    id: "braco",
    d: "M173 344 Q195 345 185 395 Q179 437 155 456 L130 448 Q125 404 143 368Z",
    mirror: 630
}, {
    id: "cotovelo",
    d: "M129 442 L155 458 L142 480 L116 463Z",
    mirror: 630
}, {
    id: "antebraco",
    d: "M113 462 Q139 466 135 496 Q129 537 91 602 L84 602 Q101 541 102 498Z M140 486 Q160 474 174 479 Q154 548 106 608 L95 604 Q126 543 140 486Z",
    mirror: 630
}, {
    id: "mao",
    d: "M85 608 L112 616 L124 650 Q122 673 114 701 L107 744 Q96 755 87 740 L83 700 L77 738 Q66 752 61 738 L65 694 L56 719 Q44 732 42 718 L49 682 Q42 681 41 668 Q49 641 74 625Z",
    mirror: 630
}, {
    id: "abdomen",
    d: "M307 378 Q269 377 254 405 Q245 422 248 443 L309 432Z M248 452 L309 439 L309 493 L246 494Z M247 502 L309 501 L309 609 Q264 589 257 544Z",
    mirror: 630
}, {
    id: "quadril",
    d: "M204 553 Q233 570 243 615 Q215 627 195 670 L183 655 Q187 591 204 553Z",
    mirror: 630
}, {
    id: "coxa",
    d: "M222 636 Q266 654 283 715 Q292 771 273 835 Q264 853 247 855 Q219 844 205 799 Q183 744 193 690Z",
    mirror: 630
}, {
    id: "joelho",
    d: "M239 856 Q264 853 276 879 Q282 915 252 944 Q231 942 219 920 Q213 883 239 856Z",
    mirror: 630
}, {
    id: "panturrilha",
    d: "M220 949 Q240 957 238 1010 L239 1147 Q221 1157 212 1121 Q194 1063 190 1022 Q187 981 208 956Z M253 950 Q273 957 276 999 Q282 1046 260 1136 Q254 1151 244 1149 L244 1005Z",
    mirror: 630
}, {
    id: "tornozelo",
    d: "M226 1159 Q254 1150 264 1175 L267 1206 L213 1209 Q210 1174 226 1159Z",
    mirror: 630
}, {
    id: "pe",
    d: "M216 1214 L262 1213 L272 1260 Q277 1283 259 1289 Q229 1296 203 1285 Q181 1280 192 1259Z",
    mirror: 630
}]
  , ey = [{
    id: "cervical",
    d: "M773 168 Q787 150 804 158 L803 206 L756 210 Q768 192 773 168Z",
    mirror: 1616
}, {
    id: "trapezio",
    d: "M756 211 L803 210 Q806 237 788 241 L704 243 Q726 230 756 211Z M803 249 L803 373 Q784 302 740 259Z",
    mirror: 1616
}, {
    id: "ombro",
    d: "M693 249 Q715 251 711 276 Q697 309 638 342 Q633 301 655 273Z",
    mirror: 1616
}, {
    id: "toracica",
    d: "M721 263 Q752 265 777 309 Q795 350 800 437 L770 450 Q734 424 715 374 Q697 330 710 292Z",
    mirror: 1616
}, {
    id: "braco",
    d: "M655 334 Q680 324 692 350 Q698 390 675 440 Q651 427 624 431 Q621 387 636 351Z",
    mirror: 1616
}, {
    id: "cotovelo",
    d: "M643 435 Q667 433 674 454 Q669 480 648 489 Q621 478 622 461Z",
    mirror: 1616
}, {
    id: "antebraco",
    d: "M620 473 Q634 493 646 498 Q641 539 615 608 L595 608 Q594 546 608 501Z",
    mirror: 1616
}, {
    id: "mao",
    d: "M595 613 L620 618 L625 647 Q642 673 643 688 Q638 701 628 684 L622 674 L626 734 Q621 752 611 738 L606 695 L604 741 Q595 756 589 739 L591 695 L580 729 Q570 737 569 722 L579 676 L581 645Z",
    mirror: 1616
}, {
    id: "coluna",
    d: "M770 449 L802 444 L802 552 Q766 562 702 545 Q709 491 739 466Z",
    mirror: 1616
}, {
    id: "gluteos",
    d: "M726 558 Q760 547 791 565 Q808 607 801 652 Q792 686 758 694 Q716 696 698 667 Q684 620 706 578Z",
    mirror: 1616
}, {
    id: "quadril",
    d: "M695 568 Q679 616 691 666 L713 697 L701 746 Q672 708 675 663 Q675 607 695 568Z",
    mirror: 1616
}, {
    id: "posterior_coxa",
    d: "M750 706 Q780 703 790 735 Q788 799 773 881 L724 886 Q712 830 712 774 Q714 723 750 706Z",
    mirror: 1616
}, {
    id: "joelho",
    d: "M730 890 Q754 882 772 899 Q785 927 762 948 Q738 955 720 933 Q714 906 730 890Z",
    mirror: 1616
}, {
    id: "panturrilha",
    d: "M716 949 Q738 945 754 969 Q781 1024 765 1103 L748 1175 Q733 1180 725 1164 Q718 1115 697 1056 Q684 1007 704 968Z",
    mirror: 1616
}, {
    id: "tornozelo",
    d: "M727 1180 L754 1180 L759 1214 Q756 1240 741 1244 L716 1228Z",
    mirror: 1616
}, {
    id: "pe",
    d: "M714 1210 L717 1231 Q739 1250 757 1246 L765 1261 Q750 1286 729 1284 Q706 1280 687 1261 Q680 1248 696 1235Z",
    mirror: 1616
}];
function ay({region: v, onSelect: I}) {
    var J, oe;
    const [A,m] = de.useState("front")
      , [R,O] = de.useState("")
      , Y = A === "front" ? Ph : ey;
    return u.jsxs("div", {
        className: "body-atlas",
        children: [u.jsx("div", {
            className: "view-toggle",
            role: "group",
            "aria-label": "Vista do corpo",
            children: ["front", "back"].map(j => u.jsx("button", {
                "aria-pressed": A === j,
                onClick: () => {
                    m(j),
                    O("")
                }
                ,
                children: j === "front" ? "Frente" : "Costas"
            }, j))
        }), u.jsxs("svg", {
            className: "body-illustration",
            viewBox: A === "front" ? "25 20 565 1295" : "565 20 525 1295",
            "aria-label": `Mapa corporal — ${A === "front" ? "frente" : "costas"}`,
            children: [u.jsxs("defs", {
                children: [u.jsxs("clipPath", {
                    id: "body-crop",
                    children: [u.jsx("rect", {
                        x: A === "front" ? 25 : 588,
                        y: "20",
                        width: A === "front" ? 540 : 502,
                        height: "1295"
                    }), u.jsx("path", {
                        d: (J = Y.find(j => j.id === "mao")) == null ? void 0 : J.d
                    }), u.jsx("path", {
                        d: (oe = Y.find(j => j.id === "mao")) == null ? void 0 : oe.d,
                        transform: `translate(${A === "front" ? 630 : 1616} 0) scale(-1 1)`
                    })]
                }), u.jsxs("filter", {
                    id: "neutral-body",
                    colorInterpolationFilters: "sRGB",
                    children: [u.jsx("feColorMatrix", {
                        type: "saturate",
                        values: "0"
                    }), u.jsxs("feComponentTransfer", {
                        children: [u.jsx("feFuncR", {
                            type: "linear",
                            slope: ".7",
                            intercept: ".3"
                        }), u.jsx("feFuncG", {
                            type: "linear",
                            slope: ".7",
                            intercept: ".3"
                        }), u.jsx("feFuncB", {
                            type: "linear",
                            slope: ".7",
                            intercept: ".3"
                        })]
                    })]
                })]
            }), u.jsxs("g", {
                clipPath: "url(#body-crop)",
                children: [u.jsx("image", {
                    href: "/anatomy/reference.png",
                    width: "1122",
                    height: "1402",
                    filter: "url(#neutral-body)",
                    pointerEvents: "none"
                }), Y.map(j => {
                    var z;
                    return u.jsxs("g", {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": (z = it.find(w => w.id === j.id)) == null ? void 0 : z.name,
                        "aria-pressed": v === j.id,
                        "data-region": j.id,
                        className: `body-area ${v === j.id ? "is-selected" : R === j.id ? "is-hovered" : ""}`,
                        onClick: () => I(j.id),
                        onPointerEnter: () => O(j.id),
                        onPointerLeave: () => O(""),
                        onKeyDown: w => {
                            (w.key === "Enter" || w.key === " ") && (w.preventDefault(),
                            I(j.id))
                        }
                        ,
                        children: [u.jsx("path", {
                            d: j.d
                        }), j.mirror && u.jsx("path", {
                            d: j.d,
                            transform: `translate(${j.mirror} 0) scale(-1 1)`
                        })]
                    }, j.id)
                }
                )]
            })]
        }), u.jsx("p", {
            className: "body-instruction",
            children: "Toque em uma região do corpo"
        }), u.jsxs("details", {
            className: "region-access",
            children: [u.jsx("summary", {
                children: "Selecionar pela lista"
            }), u.jsxs("label", {
                children: ["Região corporal", u.jsxs("select", {
                    "aria-label": "Região corporal",
                    value: v,
                    onChange: j => I(j.target.value),
                    children: [u.jsx("option", {
                        value: "",
                        children: "Selecione uma região"
                    }), it.map(j => u.jsx("option", {
                        value: j.id,
                        children: j.name
                    }, j.id))]
                })]
            })]
        })]
    })
}
const mn = 20;
function ty(v) {
    const I = fo.filter(A => A.regionIds.includes(v));
    return Np.filter(A => A.id !== "all").map(A => {
        const m = I.filter(R => Uu(R, A.id)).length;
        return {
            id: A.id,
            label: A.label,
            count: m,
            target: mn,
            pending: Math.max(0, mn - m),
            status: m >= mn ? "target-met" : "awaiting-review"
        }
    }
    )
}
const Mu = {
    total: 40,
    ball: 20,
    elastic: 20
};
function zp(v) {
    var j;
    const I = ((j = it.find(z => z.id === v)) == null ? void 0 : j.minimumExercises) ?? Mu.total
      , A = fo.filter(z => z.regionIds.includes(v))
      , m = A.length
      , R = A.filter(z => z.equipmentIds.some(w => Za[w].group === "ball")).length
      , O = A.filter(z => z.equipmentIds.some(w => Za[w].group === "elastic")).length
      , Y = Math.max(0, I - m)
      , J = Math.max(0, Mu.ball - R)
      , oe = Math.max(0, Mu.elastic - O);
    return {
        regionId: v,
        target: I,
        available: m,
        pending: Y,
        ballCount: R,
        elasticCount: O,
        ballPending: J,
        elasticPending: oe,
        status: Y === 0 && J === 0 && oe === 0 ? "target-met" : "awaiting-review"
    }
}
it.flatMap(v => Array.from({
    length: zp(v.id).pending
}, (I, A) => ({
    id: `${v.id}-review-${A + 1}`,
    regionId: v.id,
    status: "awaiting-review",
    requiredFields: ["name", "categoryIds", "equipmentIds", "tags", "sourceIds", "media", "regionIds"]
})));
it.flatMap(v => {
    const I = zp(v.id);
    return [{
        regionId: v.id,
        equipmentGroup: "ball",
        pending: I.ballPending
    }, {
        regionId: v.id,
        equipmentGroup: "elastic",
        pending: I.elasticPending
    }].filter(A => A.pending > 0).map(A => ({
        ...A,
        feasibility: "requires-professional-curation"
    }))
}
);
function Ou({exercise: v, controls: I=!1}) {
    var oe;
    const [A,m] = de.useState(!1)
      , [R,O] = de.useState( () => window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      , Y = v.media;
    if (de.useEffect( () => m(!1), [v.id, Y == null ? void 0 : Y.src, v.thumbnail]),
    de.useEffect( () => {
        const j = window.matchMedia("(prefers-reduced-motion: reduce)")
          , z = () => O(j.matches);
        return j.addEventListener("change", z),
        () => j.removeEventListener("change", z)
    }
    , []),
    Y && !A) {
        if (Y.type === "video")
            return u.jsx("video", {
                className: "thumb media-asset",
                src: Y.src,
                poster: Y.poster ?? v.thumbnail,
                muted: !0,
                loop: !0,
                playsInline: !0,
                autoPlay: !R && !I,
                controls: I,
                preload: "metadata",
                "aria-label": v.name,
                onError: () => m(!0)
            });
        const j = /\.(gif|webp)(\?|$)/i.test(Y.src) && Y.layout !== "start-end"
          , z = R && j ? v.thumbnail : Y.src
          , w = u.jsx("img", {
            className: `thumb media-asset ${Y.layout === "start-end" ? "demo-image" : ""}`,
            src: z,
            alt: Y.alt ?? v.name,
            loading: "lazy",
            onError: () => m(!0)
        });
        return I && Y.layout === "start-end" ? u.jsxs("figure", {
            className: "exercise-demonstration",
            children: [u.jsxs("div", {
                className: "demo-labels",
                "aria-hidden": "true",
                children: [u.jsx("span", {
                    children: "Posição inicial"
                }), u.jsx("span", {
                    children: "Posição final"
                })]
            }), w, u.jsx("figcaption", {
                children: Y.generated ? "Ilustração demonstrativa gerada por IA" : "Demonstração do movimento"
            })]
        }) : w
    }
    if (!v.illustrative && v.thumbnailCrop === void 0 && !A)
        return u.jsx("img", {
            className: "thumb media-asset",
            src: v.thumbnail,
            alt: v.name,
            loading: "lazy",
            onError: () => m(!0)
        });
    const J = v.thumbnailCrop;
    return u.jsx("div", {
        className: `thumb ${J !== void 0 ? "reference ref-" + J : "anatomy-thumb"}`,
        role: "img",
        "aria-label": J !== void 0 ? v.name : `Ilustração da região; não demonstra a execução de ${v.name}`,
        children: J !== void 0 ? u.jsx("span", {
            className: "reference-crop"
        }) : u.jsx("span", {
            children: (oe = it.find(j => j.id === v.regionIds[0])) == null ? void 0 : oe.short
        })
    })
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = v => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Cp = (...v) => v.filter( (I, A, m) => !!I && I.trim() !== "" && m.indexOf(I) === A).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ny = de.forwardRef( ({color: v="currentColor", size: I=24, strokeWidth: A=2, absoluteStrokeWidth: m, className: R="", children: O, iconNode: Y, ...J}, oe) => de.createElement("svg", {
    ref: oe,
    ...oy,
    width: I,
    height: I,
    stroke: v,
    strokeWidth: m ? Number(A) * 24 / Number(I) : A,
    className: Cp("lucide", R),
    ...J
}, [...Y.map( ([j,z]) => de.createElement(j, z)), ...Array.isArray(O) ? O : [O]]));
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = (v, I) => {
    const A = de.forwardRef( ({className: m, ...R}, O) => de.createElement(ny, {
        ref: O,
        iconNode: I,
        className: Cp(`lucide-${ly(v)}`, m),
        ...R
    }));
    return A.displayName = `${v}`,
    A
}
;
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = Ve("Activity", [["path", {
    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
    key: "169zse"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ry = Ve("ArrowDown", [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = Ve("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = Ve("ArrowUp", [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = Ve("BookOpen", [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = Ve("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = Ve("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Du = Ve("ClipboardList", [["rect", {
    width: "8",
    height: "4",
    x: "8",
    y: "2",
    rx: "1",
    ry: "1",
    key: "tgr4d6"
}], ["path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    key: "116196"
}], ["path", {
    d: "M12 11h4",
    key: "1jrz19"
}], ["path", {
    d: "M12 16h4",
    key: "n85exb"
}], ["path", {
    d: "M8 11h.01",
    key: "1dfujw"
}], ["path", {
    d: "M8 16h.01",
    key: "18s6g9"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = Ve("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = Ve("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = Ve("Pencil", [["path", {
    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
    key: "1a8usu"
}], ["path", {
    d: "m15 5 4 4",
    key: "1mk7zo"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dn = Ve("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = Ve("Printer", [["path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
    key: "143wyd"
}], ["path", {
    d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
    key: "1itne7"
}], ["rect", {
    x: "6",
    y: "14",
    width: "12",
    height: "8",
    rx: "1",
    key: "1ue0tg"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = Ve("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = Ve("SlidersHorizontal", [["line", {
    x1: "21",
    x2: "14",
    y1: "4",
    y2: "4",
    key: "obuewd"
}], ["line", {
    x1: "10",
    x2: "3",
    y1: "4",
    y2: "4",
    key: "1q6298"
}], ["line", {
    x1: "21",
    x2: "12",
    y1: "12",
    y2: "12",
    key: "1iu8h1"
}], ["line", {
    x1: "8",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "ntss68"
}], ["line", {
    x1: "21",
    x2: "16",
    y1: "20",
    y2: "20",
    key: "14d8ph"
}], ["line", {
    x1: "12",
    x2: "3",
    y1: "20",
    y2: "20",
    key: "m0wm8r"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "2",
    y2: "6",
    key: "14e1ph"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "10",
    y2: "14",
    key: "1i6ji0"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "18",
    y2: "22",
    key: "1lctlv"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = Ve("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = Ve("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Ep = () => u.jsxs("span", {
    className: "logo",
    children: [u.jsx("span", {
        className: "logo-icon",
        children: u.jsx(iy, {
            size: 24
        })
    }), "Fisio", u.jsx("span", {
        children: "Atlas"
    })]
});
function by() {
    var d, _;
    const [v,I] = de.useState("home")
      , [A,m] = de.useState("")
      , [R,O] = de.useState("")
      , [Y,J] = de.useState("all")
      , [oe,j] = de.useState("all")
      , [z,w] = de.useState( () => {
        try {
            return Wh(localStorage.getItem("fisioatlas-sheet"))
        } catch {
            return []
        }
    }
    )
      , [L,qe] = de.useState("")
      , [ea,Ue] = de.useState(!1)
      , [Z,Ne] = de.useState(null)
      , [Fe,Xa] = de.useState(3)
      , [pa,ga] = de.useState(12)
      , [Ke,$] = de.useState("")
      , ae = de.useRef(null)
      , ba = de.useRef(null);
    de.useEffect( () => {
        try {
            localStorage.setItem("fisioatlas-sheet", JSON.stringify(z)),
            Ue(!1)
        } catch {
            Ue(!0)
        }
    }
    , [z]),
    de.useEffect( () => {
        if (!L)
            return;
        const b = setTimeout( () => qe(""), 3e3);
        return () => clearTimeout(b)
    }
    , [L]),
    de.useEffect( () => {
        var b, E, D;
        Z ? (b = ae.current) == null || b.showModal() : ((E = ae.current) == null || E.close(),
        (D = ba.current) == null || D.focus())
    }
    , [Z]),
    de.useEffect( () => {
        const b = document.modelContext;
        if (!b)
            return;
        const E = new AbortController;
        return Promise.resolve(b.registerTool({
            name: "search_fisioatlas_library",
            description: "Search body regions and exercises without changing the sheet.",
            inputSchema: {
                type: "object",
                properties: {
                    query: {
                        type: "string"
                    }
                },
                required: ["query"],
                additionalProperties: !1
            },
            annotations: {
                readOnlyHint: !0
            },
            execute: D => {
                const X = D == null ? void 0 : D.query;
                if (typeof X != "string")
                    throw new Error("query must be a string");
                return wp(X)
            }
        }, {
            signal: E.signal
        })).catch( () => {}
        ),
        () => E.abort()
    }
    , []);
    const aa = b => {
        m(b),
        J("all"),
        j("all"),
        I("home")
    }
      , Je = (b, E, D=!1) => {
        ba.current = document.activeElement,
        Xa((E == null ? void 0 : E.sets) ?? b.defaultSets),
        ga((E == null ? void 0 : E.reps) ?? b.defaultReps),
        $((E == null ? void 0 : E.notes) ?? b.defaultNotes),
        Ne({
            exercise: b,
            entry: E,
            detail: D
        })
    }
      , ta = () => {
        var E;
        if (!Z)
            return;
        const b = {
            id: ((E = Z.entry) == null ? void 0 : E.id) ?? crypto.randomUUID(),
            exerciseId: Z.exercise.id,
            sets: Fe,
            reps: pa,
            notes: Ke
        };
        w(D => Z.entry ? D.map(X => X.id === b.id ? b : X) : [...D, b]),
        Ne(null),
        qe(Z.entry ? "Exercício atualizado" : "Exercício adicionado à ficha")
    }
      , Ha = (b, E) => w(D => {
        const X = [...D];
        return [X[b],X[b + E]] = [X[b + E], X[b]],
        X
    }
    )
      , $e = it.find(b => b.id === A)
      , Ae = $e ? ty($e.id) : []
      , C = Ae.find(b => b.id === Y)
      , Q = wp(R)
      , U = $h(A)
      , me = Qh(U)
      , re = [...new Set(U.flatMap(b => b.equipmentIds))].sort( (b, E) => Za[b].label.localeCompare(Za[E].label, "pt-BR"))
      , la = Sp(U, Y, oe)
      , We = (b, E, D) => u.jsxs("button", {
        className: v === b ? "nav-item active" : "nav-item",
        onClick: () => I(b),
        children: [D, u.jsx("span", {
            children: E
        }), b === "sheet" && z.length > 0 && u.jsx("b", {
            className: "count",
            children: z.length
        })]
    })
      , ka = b => u.jsxs("article", {
        className: "exercise-card",
        children: [u.jsxs("button", {
            className: "exercise-main",
            onClick: () => Je(b, void 0, !0),
            children: [u.jsx(Ou, {
                exercise: b
            }), u.jsxs("span", {
                children: [u.jsx("strong", {
                    children: b.name
                }), b.equipmentIds[0] !== "none" && u.jsx("small", {
                    className: "card-equipment",
                    children: b.equipment
                })]
            })]
        }), u.jsx("button", {
            className: "add",
            "aria-label": `Adicionar ${b.name}`,
            onClick: () => Je(b),
            children: u.jsx(dn, {
                size: 22
            })
        })]
    }, b.id);
    return u.jsxs(u.Fragment, {
        children: [u.jsxs("header", {
            className: "topbar",
            children: [u.jsx("a", {
                href: "#",
                onClick: b => {
                    b.preventDefault(),
                    I("home")
                }
                ,
                "aria-label": "FisioAtlas início",
                children: u.jsx(Ep, {})
            }), u.jsxs("nav", {
                children: [We("home", "Explorar", u.jsx(Ap, {
                    size: 18
                })), We("search", "Busca", u.jsx(Gi, {
                    size: 18
                })), We("sheet", "Minha ficha", u.jsx(Du, {
                    size: 18
                }))]
            }), u.jsxs("span", {
                className: "header-note",
                children: [u.jsx("span", {}), " Movimento com propósito"]
            })]
        }), u.jsxs("main", {
            className: v === "sheet" ? "sheet-main" : "main",
            children: [v === "home" && u.jsxs(u.Fragment, {
                children: [u.jsxs("div", {
                    className: "page-heading",
                    children: [u.jsx("div", {
                        children: u.jsx("h1", {
                            children: "Selecione uma região"
                        })
                    }), u.jsxs("span", {
                        className: "library-tag",
                        children: [u.jsx(uy, {
                            size: 16
                        }), fo.length, " exercícios para explorar"]
                    })]
                }), u.jsxs("div", {
                    className: "workspace",
                    children: [u.jsx("section", {
                        className: "atlas-panel",
                        "aria-label": "Mapa corporal 2D",
                        children: u.jsx(ay, {
                            region: A,
                            onSelect: aa
                        })
                    }), u.jsxs("section", {
                        className: "content-panel",
                        "aria-labelledby": "region-exercises-title",
                        children: [$e ? u.jsx("div", {
                            className: "section-heading",
                            children: u.jsxs("div", {
                                children: [u.jsxs("h2", {
                                    id: "region-exercises-title",
                                    children: ["Exercícios para ", u.jsx("span", {
                                        children: $e.name
                                    })]
                                }), u.jsxs("p", {
                                    "aria-live": "polite",
                                    children: [U.length, " exercícios disponíveis"]
                                }), u.jsx("p", {
                                    className: "coverage-note",
                                    "aria-live": "polite",
                                    children: C ? `${C.label}: ${C.count} de ${mn} exercícios${C.pending > 0 ? " · Em ampliação" : ""}` : `Meta: ${mn} exercícios por tópico nesta região.`
                                })]
                            })
                        }) : u.jsxs("div", {
                            className: "unselected-panel",
                            children: [u.jsx("h2", {
                                id: "region-exercises-title",
                                children: "Por onde começamos?"
                            }), u.jsxs("p", {
                                children: ["Toque em uma região do corpo", u.jsx("br", {}), "para ver os exercícios."]
                            })]
                        }), U.length > 0 && u.jsxs("div", {
                            className: "filters",
                            "aria-label": "Filtrar exercícios",
                            children: [u.jsx(py, {
                                size: 16
                            }), me.map(b => {
                                var E;
                                return u.jsxs("button", {
                                    "aria-label": b.label,
                                    onClick: () => {
                                        J(b.id),
                                        j("all")
                                    }
                                    ,
                                    "aria-pressed": Y === b.id,
                                    className: Y === b.id ? "selected" : "",
                                    children: [b.label, " ", u.jsx("span", {
                                        "aria-hidden": "true",
                                        className: "filter-count",
                                        children: b.id === "all" ? U.length : (E = Ae.find(D => D.id === b.id)) == null ? void 0 : E.count
                                    })]
                                }, b.id)
                            }
                            )]
                        }), $e && u.jsxs("details", {
                            className: "topic-coverage",
                            children: [u.jsx("summary", {
                                children: "Quantidade por tópico"
                            }), u.jsx("ul", {
                                children: Ae.map(b => u.jsxs("li", {
                                    children: [u.jsx("span", {
                                        children: b.label
                                    }), u.jsxs("span", {
                                        children: [b.count, "/", b.target, b.pending > 0 ? " · Em ampliação" : " · Meta atingida"]
                                    })]
                                }, b.id))
                            })]
                        }), $e && u.jsxs("div", {
                            className: "library-refine",
                            children: [u.jsxs("label", {
                                children: ["Equipamento", u.jsxs("select", {
                                    "aria-label": "Filtrar por equipamento",
                                    value: oe,
                                    onChange: b => j(b.target.value),
                                    children: [u.jsx("option", {
                                        value: "all",
                                        children: "Todos os equipamentos"
                                    }), re.filter(b => Y === "all" || Sp(U, Y, b).length > 0).map(b => u.jsx("option", {
                                        value: b,
                                        children: Za[b].label
                                    }, b))]
                                })]
                            }), u.jsxs("span", {
                                "aria-live": "polite",
                                children: [la.length, " de ", U.length]
                            })]
                        }), $e && u.jsxs("div", {
                            className: "exercise-list",
                            children: [la.map(ka), !la.length && u.jsxs("div", {
                                className: "empty-small",
                                children: [u.jsx("p", {
                                    children: U.length ? "Nenhum exercício neste filtro." : "Exercícios desta região em curadoria."
                                }), U.length > 0 && u.jsx("button", {
                                    className: "back-link",
                                    onClick: () => {
                                        J("all"),
                                        j("all")
                                    }
                                    ,
                                    children: "Mostrar todos"
                                })]
                            })]
                        }), $e && u.jsx("div", {
                            className: "clinical-note",
                            children: "Acervo demonstrativo · Ajuste a seleção e a dosagem à sua avaliação."
                        })]
                    })]
                })]
            }), v === "search" && u.jsxs("section", {
                className: "search-page",
                children: [u.jsx("div", {
                    className: "eyebrow",
                    children: "ENCONTRE O MOVIMENTO CERTO"
                }), u.jsxs("h1", {
                    children: ["Explore a biblioteca", u.jsx("span", {
                        children: "."
                    })]
                }), u.jsxs("label", {
                    className: "search-field",
                    children: [u.jsx(Gi, {}), u.jsx("input", {
                        autoFocus: !0,
                        placeholder: "Busque uma região ou exercício",
                        value: R,
                        onChange: b => O(b.target.value),
                        "aria-label": "Buscar na biblioteca"
                    }), R && u.jsx("button", {
                        onClick: () => O(""),
                        "aria-label": "Limpar busca",
                        children: u.jsx(_p, {
                            size: 20
                        })
                    })]
                }), R ? u.jsxs(u.Fragment, {
                    children: [Q.regions.length > 0 && u.jsxs(u.Fragment, {
                        children: [u.jsx("h3", {
                            children: "Regiões"
                        }), u.jsx("div", {
                            className: "suggestions",
                            children: Q.regions.map(b => u.jsxs("button", {
                                onClick: () => aa(b.id),
                                children: [b.name, u.jsx(cy, {
                                    size: 16
                                })]
                            }, b.id))
                        })]
                    }), Q.exercises.length > 0 && u.jsxs(u.Fragment, {
                        children: [u.jsxs("h3", {
                            children: ["Exercícios ", u.jsx("small", {
                                children: Q.exercises.length
                            })]
                        }), u.jsx("div", {
                            className: "search-grid",
                            children: Q.exercises.map(ka)
                        })]
                    }), !Q.regions.length && !Q.exercises.length && u.jsxs("div", {
                        className: "empty",
                        children: [u.jsx(Gi, {
                            size: 34
                        }), u.jsx("h2", {
                            children: "Nenhum resultado"
                        }), u.jsx("p", {
                            children: "Experimente buscar por “joelho”, “bola” ou “mobilidade”."
                        })]
                    })]
                }) : u.jsxs(u.Fragment, {
                    children: [u.jsxs("p", {
                        className: "muted",
                        children: ["Uma biblioteca de ", fo.length, " exercícios em ", it.length, " regiões."]
                    }), u.jsx("div", {
                        className: "suggestions",
                        children: ["Joelho", "Ombro", "Agachamento", "Elástico", "Bola"].map(b => u.jsxs("button", {
                            onClick: () => O(b),
                            children: [b, u.jsx(xp, {
                                size: 15
                            })]
                        }, b))
                    })]
                })]
            }), v === "sheet" && u.jsxs("section", {
                className: "sheet-page",
                children: [u.jsxs("div", {
                    className: "print-brand",
                    children: [u.jsx(Ep, {}), u.jsx("span", {
                        children: "FICHA DE EXERCÍCIOS"
                    })]
                }), u.jsxs("div", {
                    className: "page-heading",
                    children: [u.jsxs("div", {
                        children: [u.jsx("div", {
                            className: "eyebrow",
                            children: "SEU PLANO DE MOVIMENTO"
                        }), u.jsxs("h1", {
                            children: ["Minha ficha", u.jsx("span", {
                                children: "."
                            })]
                        }), u.jsx("p", {
                            children: z.length ? `${z.length} exercícios selecionados. Ajuste os detalhes e imprima.` : "Um novo plano começa com o primeiro movimento."
                        })]
                    }), z.length > 0 && u.jsxs("button", {
                        className: "primary print-action",
                        onClick: () => window.print(),
                        children: [u.jsx(fy, {
                            size: 18
                        }), " Imprimir / Salvar PDF"]
                    })]
                }), z.length > 0 ? u.jsxs(u.Fragment, {
                    children: [u.jsxs("div", {
                        className: "sheet-instructions",
                        children: [u.jsx(qp, {
                            size: 16
                        }), " Salva automaticamente neste navegador ", u.jsx("span", {
                            children: "Para PDF, escolha “Salvar como PDF” na impressão."
                        })]
                    }), u.jsxs("div", {
                        className: "print-patient",
                        children: ["Paciente: _____________________________________ Data: ____ / ____ / ______", u.jsx("br", {}), "Fisioterapeuta: __________________________________ CREFITO: _______________"]
                    }), u.jsx("div", {
                        className: "sheet-items",
                        children: z.map( (b, E) => {
                            const D = Rp(b.exerciseId);
                            return u.jsxs("article", {
                                className: "sheet-item",
                                children: [u.jsx("span", {
                                    className: "item-number",
                                    children: String(E + 1).padStart(2, "0")
                                }), u.jsx(Ou, {
                                    exercise: D
                                }), u.jsxs("div", {
                                    className: "sheet-item-content",
                                    children: [u.jsx("h3", {
                                        children: D.name
                                    }), u.jsxs("div", {
                                        className: "dose",
                                        children: [u.jsxs("span", {
                                            children: [u.jsx("strong", {
                                                children: b.sets
                                            }), " séries"]
                                        }), u.jsxs("span", {
                                            children: [u.jsx("strong", {
                                                children: b.reps
                                            }), " repetições"]
                                        })]
                                    }), b.notes && u.jsx("p", {
                                        className: "notes",
                                        children: b.notes
                                    })]
                                }), u.jsxs("div", {
                                    className: "item-actions",
                                    children: [u.jsx("button", {
                                        disabled: E === 0,
                                        onClick: () => Ha(E, -1),
                                        "aria-label": `Mover ${D.name} para cima`,
                                        children: u.jsx(sy, {
                                            size: 17
                                        })
                                    }), u.jsx("button", {
                                        disabled: E === z.length - 1,
                                        onClick: () => Ha(E, 1),
                                        "aria-label": `Mover ${D.name} para baixo`,
                                        children: u.jsx(ry, {
                                            size: 17
                                        })
                                    }), u.jsx("button", {
                                        onClick: () => Je(D, b),
                                        "aria-label": `Editar ${D.name}`,
                                        children: u.jsx(my, {
                                            size: 17
                                        })
                                    }), u.jsx("button", {
                                        onClick: () => {
                                            w(X => X.filter(ie => ie.id !== b.id)),
                                            qe("Exercício removido")
                                        }
                                        ,
                                        "aria-label": `Remover ${D.name}`,
                                        children: u.jsx(gy, {
                                            size: 17
                                        })
                                    })]
                                })]
                            }, b.id)
                        }
                        )
                    }), u.jsxs("button", {
                        className: "back-link add-more",
                        onClick: () => I("home"),
                        children: [u.jsx(dn, {
                            size: 18
                        }), " Adicionar mais exercícios"]
                    }), u.jsx("p", {
                        className: "clinical-note",
                        children: "Ficha de conteúdo demonstrativo. Revisar a seleção e a dosagem antes de entregar ao paciente. Imagens ilustrativas."
                    })]
                }) : u.jsxs("div", {
                    className: "empty",
                    children: [u.jsx("span", {
                        className: "empty-icon",
                        children: u.jsx(Du, {
                            size: 38
                        })
                    }), u.jsx("h2", {
                        children: "Sua ficha está em branco"
                    }), u.jsxs("p", {
                        children: ["Explore o atlas e adicione os exercícios", u.jsx("br", {}), "que fazem sentido para o seu paciente."]
                    }), u.jsxs("button", {
                        className: "primary",
                        onClick: () => I("home"),
                        children: ["Explorar exercícios ", u.jsx(xp, {
                            size: 18
                        })]
                    })]
                })]
            })]
        }), u.jsxs("footer", {
            className: "desktop-footer",
            children: [u.jsxs("span", {
                children: ["FisioAtlas ", u.jsx("span", {
                    children: "·"
                }), " Movimento com propósito."]
            }), u.jsx("span", {
                children: "Feito para cuidar, pensado para simplificar."
            })]
        }), u.jsxs("nav", {
            className: "bottom-nav",
            children: [We("home", "Início", u.jsx(Ap, {
                size: 22
            })), We("search", "Busca", u.jsx(Gi, {
                size: 22
            })), We("sheet", "Minha ficha", u.jsx(Du, {
                size: 22
            }))]
        }), L && u.jsxs("div", {
            className: "toast",
            role: "status",
            children: [u.jsx(qp, {
                size: 18
            }), L]
        }), ea && u.jsx("div", {
            className: "storage-warning",
            role: "alert",
            children: "Não foi possível salvar neste navegador. Imprima sua ficha antes de sair."
        }), u.jsx("dialog", {
            ref: ae,
            onCancel: () => Ne(null),
            onClick: b => {
                b.target === ae.current && Ne(null)
            }
            ,
            "aria-labelledby": "modal-title",
            children: Z && u.jsxs("div", {
                className: "modal-inner",
                children: [u.jsx("span", {
                    className: "sheet-handle"
                }), u.jsxs("div", {
                    className: "modal-heading",
                    children: [u.jsx("h2", {
                        id: "modal-title",
                        children: Z.detail ? "Detalhes do exercício" : Z.entry ? "Editar exercício" : "Adicionar à ficha"
                    }), u.jsx("button", {
                        onClick: () => Ne(null),
                        "aria-label": "Fechar",
                        children: u.jsx(_p, {})
                    })]
                }), u.jsxs("div", {
                    className: `modal-exercise ${Z.detail && ((d = Z.exercise.media) == null ? void 0 : d.layout) === "start-end" ? "with-demonstration" : ""}`,
                    children: [u.jsx(Ou, {
                        exercise: Z.exercise,
                        controls: Z.detail
                    }), u.jsxs("div", {
                        children: [u.jsx("small", {
                            children: it.filter(b => Z.exercise.regionIds.includes(b.id)).map(b => b.short).join(" · ")
                        }), u.jsx("h3", {
                            children: Z.exercise.name
                        }), u.jsx("span", {
                            children: Z.exercise.equipment
                        })]
                    })]
                }), Z.detail ? u.jsxs(u.Fragment, {
                    children: [u.jsx("div", {
                        className: "detail-tags",
                        children: Z.exercise.categories.map(b => u.jsx("span", {
                            children: b
                        }, b))
                    }), u.jsx("p", {
                        className: "detail-copy",
                        children: ((_ = Z.exercise.media) == null ? void 0 : _.layout) === "start-end" ? "Compare a posição inicial, à esquerda, com a posição final, à direita." : "Exercício do acervo demonstrativo. A imagem é ilustrativa e não substitui uma demonstração de execução."
                    }), u.jsx("p", {
                        className: "detail-copy",
                        children: "Defina amplitude, carga, progressão e dosagem conforme a avaliação individual e a fase de reabilitação."
                    }), u.jsxs("button", {
                        className: "primary wide",
                        onClick: () => Ne({
                            ...Z,
                            detail: !1
                        }),
                        children: [u.jsx(dn, {
                            size: 18
                        }), " Personalizar e adicionar"]
                    })]
                }) : u.jsxs("form", {
                    onSubmit: b => {
                        b.preventDefault(),
                        ta()
                    }
                    ,
                    children: [u.jsx("div", {
                        className: "steppers",
                        children: [{
                            label: "Séries",
                            value: Fe,
                            set: Xa,
                            max: 99
                        }, {
                            label: "Repetições",
                            value: pa,
                            set: ga,
                            max: 999
                        }].map(b => u.jsxs("label", {
                            children: [b.label, u.jsxs("span", {
                                className: "stepper",
                                children: [u.jsx("button", {
                                    type: "button",
                                    "aria-label": `Diminuir ${b.label}`,
                                    disabled: b.value <= 1,
                                    onClick: () => b.set(Math.max(1, b.value - 1)),
                                    children: u.jsx(dy, {
                                        size: 18
                                    })
                                }), u.jsx("input", {
                                    "aria-label": b.label,
                                    type: "number",
                                    required: !0,
                                    min: "1",
                                    max: b.max,
                                    value: b.value || "",
                                    onChange: E => b.set(Number(E.target.value))
                                }), u.jsx("button", {
                                    type: "button",
                                    "aria-label": `Aumentar ${b.label}`,
                                    disabled: b.value >= b.max,
                                    onClick: () => b.set(Math.min(b.max, b.value + 1)),
                                    children: u.jsx(dn, {
                                        size: 18
                                    })
                                })]
                            })]
                        }, b.label))
                    }), u.jsxs("label", {
                        className: "notes-label",
                        children: ["Observação ", u.jsx("span", {
                            children: "(opcional)"
                        }), u.jsx("textarea", {
                            placeholder: "Ex.: lado, carga, amplitude ou orientações…",
                            value: Ke,
                            maxLength: 1e3,
                            onChange: b => $(b.target.value)
                        })]
                    }), u.jsx("p", {
                        className: "modal-hint",
                        children: "Valores iniciais demonstrativos. Ajuste à sua avaliação."
                    }), u.jsxs("div", {
                        className: "modal-actions",
                        children: [u.jsx("button", {
                            type: "button",
                            className: "secondary",
                            onClick: () => Ne(null),
                            children: "Cancelar"
                        }), u.jsxs("button", {
                            className: "primary",
                            type: "submit",
                            children: [Z.entry ? "Salvar alterações" : "Adicionar à ficha", u.jsx(dn, {
                                size: 18
                            })]
                        })]
                    })]
                })]
            })
        })]
    })
}
Bh.createRoot(document.getElementById("root")).render(u.jsx(Ch.StrictMode, {
    children: u.jsx(by, {})
}));
