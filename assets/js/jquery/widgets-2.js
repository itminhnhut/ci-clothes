! function() {
    Function && Function.prototype && Function.prototype.bind && (/MSIE [678]/.test(navigator.userAgent) || (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(), window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init || ! function(t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }
        var n = window.__twttrll;
        window.__twttrll = function(r, o) {
            for (var s, a, u = 0, c = []; u < r.length; u++) a = r[u], i[a] && c.push.apply(c, i[a]), i[a] = 0;
            for (s in o) t[s] = o[s];
            for (n && n(r, o); c.length;) c.shift().call(null, null, e)
        };
        var r = {},
            i = {
                0: 0
            };
        return e.e = function(t, e) {}, e.e = function(t, n) {
            if (0 === i[t]) return n.call(null, null, e);
            if (void 0 !== i[t]) i[t].push(n);
            else {
                i[t] = [n];
                var r = document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
                o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.onerror = function() {
                    var e = i[t];
                    for (o.onerror = null, delete i[t]; e.length;) e.shift().call(null, new Error("failed to load chunk"))
                }, o.src = e.p + "js/" + ({
                    1: "dm_button",
                    2: "button",
                    3: "grid",
                    4: "moment",
                    5: "periscope_on_air",
                    6: "timeline",
                    7: "tweet"
                }[t] || t) + "." + {
                    1: "a1468fb185e29620bfcee242edc4197d",
                    2: "dbd2ecb9bd9c842d156aaccc19b23231",
                    3: "929cf6f47a96ec537b23705d3ee44337",
                    4: "91252b66789b75cf1713fc323b14eb5a",
                    5: "60b5054c0fe75f215c7f2b4c3b5e0196",
                    6: "6acaf768813ce8930b56fccda57f51f5",
                    7: "77b0c8c821734364d3d725fc2955821b"
                }[t] + ".js", r.appendChild(o)
            }
        }, e.m = t, e.c = r, e.p = "https://platform.twitter.com/", e(0)
    }([function(t, e, n) {
        var r, i = n(1),
            o = n(9),
            s = n(12),
            a = n(14),
            u = n(16),
            c = n(17),
            d = n(31),
            f = n(29),
            l = n(41),
            h = n(254),
            p = n(34),
            m = n(265),
            v = n(266),
            g = "_e";
        u.set("https://platform.twitter.com/widgets.init", !0), a.set("init", !0), v(), r = new i, s.exposeReadyPromise(r.promise, a.base, g), a.set("widgets", h), a.set("https://platform.twitter.com/widgets.load", l.load), a.set("events", f), u.init("host", "https://platform.twitter.com/platform.twitter.com"), m(function() {
            r.resolve(a.base), c.attachTo(o), d.start("widgets-js-load"), l.loadPage().then(function() {
                d.endAndTrack("render", "widgets-js-load", "page", {
                    widget_origin: p.rootDocumentLocation(),
                    widget_frame: p.isFramed() && p.currentDocumentLocation()
                })
            })
        })
    }, function(t, e, n) {
        function r() {
            var t = this;
            this.promise = new i(function(e, n) {
                t.resolve = e, t.reject = n
            })
        }
        var i = n(2);
        t.exports = r
    }, function(t, e, n) {
        var r = n(3).Promise,
            i = n(7),
            o = n(8);
        t.exports = o.hasPromiseSupport() ? i.Promise : r
    }, function(t, e, n) {
        var r;
        (function(t) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
             * @version   2.3.0
             */
            (function() {
                "use strict";

                function i(t) {
                    return "function" == typeof t || "object" == typeof t && null !== t
                }

                function o(t) {
                    return "function" == typeof t
                }

                function s(t) {
                    return "object" == typeof t && null !== t
                }

                function a(t) {
                    V = t
                }

                function u(t) {
                    K = t
                }

                function c() {
                    var t = process.nextTick,
                        e = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                    return Array.isArray(e) && "0" === e[1] && "10" === e[2] && (t = setImmediate),
                        function() {
                            t(p)
                        }
                }

                function d() {
                    return function() {
                        W(p)
                    }
                }

                function f() {
                    var t = 0,
                        e = new Y(p),
                        n = document.createTextNode("");
                    return e.observe(n, {
                            characterData: !0
                        }),
                        function() {
                            n.data = t = ++t % 2
                        }
                }

                function l() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = p,
                        function() {
                            t.port2.postMessage(0)
                        }
                }

                function h() {
                    return function() {
                        setTimeout(p, 1)
                    }
                }

                function p() {
                    for (var t = 0; t < G; t += 2) {
                        var e = et[t],
                            n = et[t + 1];
                        e(n), et[t] = void 0, et[t + 1] = void 0
                    }
                    G = 0
                }

                function m() {
                    try {
                        var t = n(5);
                        return W = t.runOnLoop || t.runOnContext, d()
                    } catch (t) {
                        return h()
                    }
                }

                function v() {}

                function g() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function w() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function y(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return ot.error = t, ot
                    }
                }

                function b(t, e, n, r) {
                    try {
                        t.call(e, n, r)
                    } catch (t) {
                        return t
                    }
                }

                function _(t, e, n) {
                    K(function(t) {
                        var r = !1,
                            i = b(n, e, function(n) {
                                r || (r = !0, e !== n ? T(t, n) : A(t, n))
                            }, function(e) {
                                r || (r = !0, R(t, e))
                            }, "Settle: " + (t._label || " unknown promise"));
                        !r && i && (r = !0, R(t, i))
                    }, t)
                }

                function E(t, e) {
                    e._state === rt ? A(t, e._result) : e._state === it ? R(t, e._result) : I(e, void 0, function(e) {
                        T(t, e)
                    }, function(e) {
                        R(t, e)
                    })
                }

                function x(t, e) {
                    if (e.constructor === t.constructor) E(t, e);
                    else {
                        var n = y(e);
                        n === ot ? R(t, ot.error) : void 0 === n ? A(t, e) : o(n) ? _(t, e, n) : A(t, e)
                    }
                }

                function T(t, e) {
                    t === e ? R(t, g()) : i(e) ? x(t, e) : A(t, e)
                }

                function C(t) {
                    t._onerror && t._onerror(t._result), S(t)
                }

                function A(t, e) {
                    t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && K(S, t))
                }

                function R(t, e) {
                    t._state === nt && (t._state = it, t._result = e, K(C, t))
                }

                function I(t, e, n, r) {
                    var i = t._subscribers,
                        o = i.length;
                    t._onerror = null, i[o] = e, i[o + rt] = n, i[o + it] = r, 0 === o && t._state && K(S, t)
                }

                function S(t) {
                    var e = t._subscribers,
                        n = t._state;
                    if (0 !== e.length) {
                        for (var r, i, o = t._result, s = 0; s < e.length; s += 3) r = e[s], i = e[s + n], r ? j(n, r, i, o) : i(o);
                        t._subscribers.length = 0
                    }
                }

                function P() {
                    this.error = null
                }

                function N(t, e) {
                    try {
                        return t(e)
                    } catch (t) {
                        return st.error = t, st
                    }
                }

                function j(t, e, n, r) {
                    var i, s, a, u, c = o(n);
                    if (c) {
                        if (i = N(n, r), i === st ? (u = !0, s = i.error, i = null) : a = !0, e === i) return void R(e, w())
                    } else i = r, a = !0;
                    e._state !== nt || (c && a ? T(e, i) : u ? R(e, s) : t === rt ? A(e, i) : t === it && R(e, i))
                }

                function k(t, e) {
                    try {
                        e(function(e) {
                            T(t, e)
                        }, function(e) {
                            R(t, e)
                        })
                    } catch (e) {
                        R(t, e)
                    }
                }

                function O(t, e) {
                    var n = this;
                    n._instanceConstructor = t, n.promise = new t(v), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? A(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && A(n.promise, n._result))) : R(n.promise, n._validationError())
                }

                function L(t) {
                    return new at(this, t).promise
                }

                function D(t) {
                    function e(t) {
                        T(i, t)
                    }

                    function n(t) {
                        R(i, t)
                    }
                    var r = this,
                        i = new r(v);
                    if (!$(t)) return R(i, new TypeError("You must pass an array to race.")), i;
                    for (var o = t.length, s = 0; i._state === nt && s < o; s++) I(r.resolve(t[s]), void 0, e, n);
                    return i
                }

                function z(t) {
                    var e = this;
                    if (t && "object" == typeof t && t.constructor === e) return t;
                    var n = new e(v);
                    return T(n, t), n
                }

                function F(t) {
                    var e = this,
                        n = new e(v);
                    return R(n, t), n
                }

                function B() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function M() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function q(t) {
                    this._id = lt++, this._state = void 0, this._result = void 0, this._subscribers = [], v !== t && (o(t) || B(), this instanceof q || M(), k(this, t))
                }

                function U() {
                    var t;
                    if ("undefined" != typeof global) t = global;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = ht)
                }
                var H;
                H = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var W, V, Q, $ = H,
                    G = 0,
                    K = ({}.toString, function(t, e) {
                        et[G] = t, et[G + 1] = e, G += 2, 2 === G && (V ? V(p) : Q())
                    }),
                    J = "undefined" != typeof window ? window : void 0,
                    X = J || {},
                    Y = X.MutationObserver || X.WebKitMutationObserver,
                    Z = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                    tt = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    et = new Array(1e3);
                Q = Z ? c() : Y ? f() : tt ? l() : void 0 === J ? m() : h();
                var nt = void 0,
                    rt = 1,
                    it = 2,
                    ot = new P,
                    st = new P;
                O.prototype._validateInput = function(t) {
                    return $(t)
                }, O.prototype._validationError = function() {
                    return new Error("Array Methods must be provided an Array")
                }, O.prototype._init = function() {
                    this._result = new Array(this.length)
                };
                var at = O;
                O.prototype._enumerate = function() {
                    for (var t = this, e = t.length, n = t.promise, r = t._input, i = 0; n._state === nt && i < e; i++) t._eachEntry(r[i], i)
                }, O.prototype._eachEntry = function(t, e) {
                    var n = this,
                        r = n._instanceConstructor;
                    s(t) ? t.constructor === r && t._state !== nt ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(r.resolve(t), e) : (n._remaining--, n._result[e] = t)
                }, O.prototype._settledAt = function(t, e, n) {
                    var r = this,
                        i = r.promise;
                    i._state === nt && (r._remaining--, t === it ? R(i, n) : r._result[e] = n), 0 === r._remaining && A(i, r._result)
                }, O.prototype._willSettleAt = function(t, e) {
                    var n = this;
                    I(t, void 0, function(t) {
                        n._settledAt(rt, e, t)
                    }, function(t) {
                        n._settledAt(it, e, t)
                    })
                };
                var ut = L,
                    ct = D,
                    dt = z,
                    ft = F,
                    lt = 0,
                    ht = q;
                q.all = ut, q.race = ct, q.resolve = dt, q.reject = ft, q._setScheduler = a, q._setAsap = u, q._asap = K, q.prototype = {
                    constructor: q,
                    then: function(t, e) {
                        var n = this,
                            r = n._state;
                        if (r === rt && !t || r === it && !e) return this;
                        var i = new this.constructor(v),
                            o = n._result;
                        if (r) {
                            var s = arguments[r - 1];
                            K(function() {
                                j(r, i, s, o)
                            })
                        } else I(n, i, t, e);
                        return i
                    },
                    catch: function(t) {
                        return this.then(null, t)
                    }
                };
                var pt = U,
                    mt = {
                        Promise: ht,
                        polyfill: pt
                    };
                n(6).amd ? (r = function() {
                    return mt
                }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))) : "undefined" != typeof t && t.exports && (t.exports = mt)
            }).call(this)
        }).call(e, n(4)(t))
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
        }
    }, function(t, e) {}, function(t, e) {
        t.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }, function(t, e) {
        t.exports = window
    }, function(t, e, n) {
        function r(t) {
            return t = t || v, t.devicePixelRatio ? t.devicePixelRatio >= 1.5 : !!t.matchMedia && t.matchMedia("only screen and (min-resolution: 144dpi)").matches
        }

        function i(t) {
            return t = t || w, /(Trident|MSIE|Edge[\/ ]?\d)/.test(t)
        }

        function o(t) {
            return t = t || w, /MSIE 9/.test(t)
        }

        function s(t) {
            return t = t || w, /MSIE 10/.test(t)
        }

        function a(t) {
            return t = t || w, /(iPad|iPhone|iPod)/.test(t)
        }

        function u(t) {
            return t = t || w, /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)
        }

        function c(t, e) {
            return t = t || v, e = e || w, t.postMessage && !(i(e) && t.opener)
        }

        function d(t, e, n) {
            return t = t || v, e = e || m, n = n || w, "ontouchstart" in t || /Opera Mini/.test(n) || e.msMaxTouchPoints > 0
        }

        function f() {
            var t = p.body.style;
            return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
        }

        function l() {
            return !!v.IntersectionObserver
        }

        function h() {
            return !!(v.Promise && v.Promise.resolve && v.Promise.reject && v.Promise.all && v.Promise.race && function() {
                var t;
                return new v.Promise(function(e) {
                    t = e
                }), g.isType("function", t)
            }())
        }
        var p = n(9),
            m = n(10),
            v = n(7),
            g = n(11),
            w = m.userAgent;
        t.exports = {
            retina: r,
            anyIE: i,
            ie9: o,
            ie10: s,
            ios: a,
            android: u,
            canPostMessage: c,
            touch: d,
            cssTransitions: f,
            hasPromiseSupport: h,
            hasIntersectionObserverSupport: l
        }
    }, function(t, e) {
        t.exports = document
    }, function(t, e) {
        t.exports = navigator
    }, function(t, e, n) {
        function r(t) {
            return f(arguments).slice(1).forEach(function(e) {
                o(e, function(e, n) {
                    t[e] = n
                })
            }), t
        }

        function i(t) {
            return o(t, function(e, n) {
                u(n) && (i(n), c(n) && delete t[e]), void 0 !== n && null !== n && "" !== n || delete t[e]
            }), t
        }

        function o(t, e) {
            var n;
            for (n in t) t.hasOwnProperty && !t.hasOwnProperty(n) || e(n, t[n]);
            return t
        }

        function s(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function a(t, e) {
            return t == s(e)
        }

        function u(t) {
            return t === Object(t)
        }

        function c(t) {
            var e;
            if (!u(t)) return !1;
            if (Object.keys) return !Object.keys(t).length;
            for (e in t)
                if (t.hasOwnProperty(e)) return !1;
            return !0
        }

        function d(t, e) {
            h.setTimeout(function() {
                t.call(e || null)
            }, 0)
        }

        function f(t) {
            return t ? Array.prototype.slice.call(t) : []
        }

        function l(t, e) {
            return !(!t || !t.indexOf) && t.indexOf(e) > -1
        }
        var h = n(7);
        t.exports = {
            aug: r,
            async: d,
            compact: i,
            contains: l,
            forIn: o,
            isObject: u,
            isEmptyObject: c,
            toType: s,
            isType: a,
            toRealArray: f
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            e.ready = i(t.then, t), n && Array.isArray(e[n]) && (e[n].forEach(i(t.then, t)), delete e[n])
        }
        var i = n(13);
        t.exports = {
            exposeReadyPromise: r
        }
    }, function(t, e, n) {
        var r = n(11);
        t.exports = function(t, e) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function() {
                var i = r.toRealArray(arguments);
                return t.apply(e, n.concat(i))
            }
        }
    }, function(t, e, n) {
        var r = n(15);
        t.exports = new r("twttr")
    }, function(t, e, n) {
        function r(t) {
            return a.isType("string", t) ? t.split(".") : a.isType("array", t) ? t : []
        }

        function i(t, e) {
            var n = r(e),
                i = n.slice(0, -1);
            return i.reduce(function(t, e, n) {
                if (t[e] = t[e] || {}, !a.isObject(t[e])) throw new Error(i.slice(0, n + 1).join(".") + " is already defined with a value.");
                return t[e]
            }, t)
        }

        function o(t, e) {
            e = e || s, e[t] = e[t] || {}, Object.defineProperty(this, "base", {
                value: e[t]
            }), Object.defineProperty(this, "name", {
                value: t
            })
        }
        var s = n(7),
            a = n(11);
        a.aug(o.prototype, {
            get: function(t) {
                var e = r(t);
                return e.reduce(function(t, e) {
                    if (a.isObject(t)) return t[e]
                }, this.base)
            },
            set: function(t, e, n) {
                var o = r(t),
                    s = i(this.base, t),
                    a = o.slice(-1);
                return n && a in s ? s[a] : s[a] = e
            },
            init: function(t, e) {
                return this.set(t, e, !0)
            },
            unset: function(t) {
                var e = r(t),
                    n = this.get(e.slice(0, -1));
                n && delete n[e.slice(-1)]
            },
            aug: function(t) {
                var e = this.get(t),
                    n = a.toRealArray(arguments).slice(1);
                if (e = "undefined" != typeof e ? e : {}, n.unshift(e), !n.every(a.isObject)) throw new Error("Cannot augment non-object.");
                return this.set(t, a.aug.apply(null, n))
            },
            call: function(t) {
                var e = this.get(t),
                    n = a.toRealArray(arguments).slice(1);
                if (!a.isType("function", e)) throw new Error("Function " + t + "does not exist.");
                return e.apply(null, n)
            },
            fullPath: function(t) {
                var e = r(t);
                return e.unshift(this.name), e.join(".")
            }
        }), t.exports = o
    }, function(t, e, n) {
        var r = n(15);
        t.exports = new r("__twttr")
    }, function(t, e, n) {
        function r(t) {
            var e = s.href,
                n = "original_referer=" + e;
            return [t, n].join(t.indexOf("?") == -1 ? "?" : "&")
        }

        function i(t) {
            var e, n;
            t.altKey || t.metaKey || t.shiftKey || (e = u.closest(function(t) {
                return "A" === t.tagName || "AREA" === t.tagName
            }, t.target), e && d.isIntentURL(e.href) && (n = r(e.href), n = n.replace(/^http[:]/, "https:"), n = n.replace(/^\/\//, "https://"), c.open(n, e), a.preventDefault(t)))
        }

        function o(t) {
            t.addEventListener("click", i, !1)
        }
        var s = n(18),
            a = n(19),
            u = n(21),
            c = n(22),
            d = n(23);
        t.exports = {
            attachTo: o
        }
    }, function(t, e) {
        t.exports = location
    }, function(t, e, n) {
        function r(t) {
            var e = t.getAttribute("data-twitter-event-id");
            return e ? e : (t.setAttribute("data-twitter-event-id", ++g), g)
        }

        function i(t, e, n) {
            var r = 0,
                i = t && t.length || 0;
            for (r = 0; r < i; r++)
                if (t[r].call(e, n, e), n.ceaseImmediately) return !1
        }

        function o(t, e, n) {
            for (var r = n || t.target || t.srcElement, s = m.list(r).map(function(t) {
                    return "." + t
                }), a = s.concat(r.tagName), u = 0, c = a.length; u < c; u++)
                if (i(e[a[u]], r, t) === !1) return;
            t.cease || r !== this && o.call(this, t, e, r.parentElement || r.parentNode)
        }

        function s(t, e, n, r) {
            function i(r) {
                o.call(t, r, n[e])
            }
            a(t, i, e, r), t.addEventListener(e, i, !1)
        }

        function a(t, e, n, r) {
            t.id && (w[t.id] = w[t.id] || [], w[t.id].push({
                el: t,
                listener: e,
                type: n,
                rootId: r
            }))
        }

        function u(t) {
            var e = w[t];
            e && (e.forEach(function(t) {
                t.el.removeEventListener(t.type, t.listener, !1), delete v[t.rootId]
            }), delete w[t])
        }

        function c(t, e, n, i) {
            var o = r(t);
            v[o] = v[o] || {}, v[o][e] || (v[o][e] = {}, s(t, e, v[o], o)), v[o][e][n] = v[o][e][n] || [], v[o][e][n].push(i)
        }

        function d(t, e, n) {
            var i = r(e),
                s = v[i] && v[i];
            o.call(e, {
                target: n
            }, s[t])
        }

        function f(t) {
            return h(t), l(t), !1
        }

        function l(t) {
            t && t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function h(t) {
            t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }

        function p(t) {
            t && (t.ceaseImmediately = !0, h(t), t.stopImmediatePropagation())
        }
        var m = n(20),
            v = {},
            g = -1,
            w = {};
        t.exports = {
            stop: f,
            stopPropagation: h,
            stopImmediatePropagation: p,
            preventDefault: l,
            delegate: c,
            simulate: d,
            removeDelegatesForWidget: u
        }
    }, function(t, e, n) {
        function r(t) {
            return new RegExp("\\b" + t + "\\b", "g")
        }

        function i(t, e) {
            return t.classList ? void t.classList.add(e) : void(r(e).test(t.className) || (t.className += " " + e))
        }

        function o(t, e) {
            return t.classList ? void t.classList.remove(e) : void(t.className = t.className.replace(r(e), " "))
        }

        function s(t, e, n) {
            return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle(e, n) : (n ? i(t, e) : o(t, e), n)
        }

        function a(t, e, n) {
            return t.classList && u(t, e) ? (o(t, e), void i(t, n)) : void(t.className = t.className.replace(r(e), n))
        }

        function u(t, e) {
            return t.classList ? t.classList.contains(e) : d.contains(c(t), e)
        }

        function c(t) {
            return d.toRealArray(t.classList ? t.classList : t.className.match(f))
        }
        var d = n(11),
            f = /\b([\w-_]+)\b/g;
        t.exports = {
            add: i,
            remove: o,
            replace: a,
            toggle: s,
            present: u,
            list: c
        }
    }, function(t, e, n) {
        function r(t) {
            var e = t.charAt(0);
            return "." === e ? function(e) {
                var n = e.className ? e.className.split(/\s+/) : [];
                return o.contains(n, t.slice(1))
            } : "#" === e ? function(e) {
                return e.id === t.slice(1)
            } : function(e) {
                return e.tagName === t.toUpperCase()
            }
        }

        function i(t, e, n) {
            var s;
            if (e) return n = n || e && e.ownerDocument, s = o.isType("function", t) ? t : r(t), e === n ? s(e) ? e : void 0 : s(e) ? e : i(s, e.parentNode, n)
        }
        var o = n(11);
        t.exports = {
            closest: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            u.open(t, {}, e)
        }

        function i(t, e) {
            var n = d.decodeURL(e);
            switch (t) {
                case "favorite":
                case "like":
                    return {
                        tweet_id: n.tweet_id
                    };
                case "follow":
                    return {
                        screen_name: n.screen_name,
                        user_id: n.user_id
                    };
                case "retweet":
                    return {
                        source_tweet_id: n.tweet_id
                    };
                default:
                    return {}
            }
        }

        function o(t, e, n) {
            var o = (a.intentType(t) || "").toLowerCase();
            a.isTwitterURL(t) && (r(t, n), e && c.trigger("click", {
                target: e,
                region: "intent",
                type: "click",
                data: {}
            }), e && f[o] && f[o].forEach(function(n) {
                c.trigger(n, {
                    target: e,
                    region: "intent",
                    type: n,
                    data: i(o, t)
                })
            }))
        }

        function s(t) {
            this.srcEl = [], this.element = t
        }
        var a = n(23),
            u = n(26),
            c = n(29),
            d = n(24),
            f = {
                favorite: ["favorite", "like"],
                follow: ["follow"],
                like: ["favorite", "like"],
                retweet: ["retweet"],
                tweet: ["tweet"]
            };
        s.open = o, t.exports = s
    }, function(t, e, n) {
        function r(t) {
            return "string" == typeof t && _.test(t) && RegExp.$1.length <= 20
        }

        function i(t) {
            if (r(t)) return RegExp.$1
        }

        function o(t, e) {
            var n = b.decodeURL(t);
            if (e = e || !1, n.screen_name = i(t), n.screen_name) return b.url("https://twitter.com/intent/" + (e ? "follow" : "user"), n)
        }

        function s(t) {
            return o(t, !0)
        }

        function a(t) {
            return "string" == typeof t && C.test(t)
        }

        function u(t, e) {
            if (e = void 0 === e || e, a(t)) return (e ? "#" : "") + RegExp.$1
        }

        function c(t) {
            return "string" == typeof t && E.test(t)
        }

        function d(t) {
            return c(t) && RegExp.$1
        }

        function f(t) {
            return x.test(t)
        }

        function l(t) {
            return T.test(t)
        }

        function h(t) {
            return A.test(t)
        }

        function p(t) {
            return I.test(t) && RegExp.$1
        }

        function m(t) {
            return R.test(t) && RegExp.$1
        }

        function v(t) {
            return A.test(t) && RegExp.$1
        }

        function g(t) {
            return S.test(t) && RegExp.$1
        }

        function w(t) {
            return !!P.test(t) && {
                ownerScreenName: RegExp.$1,
                slug: RegExp.$2
            }
        }

        function y(t) {
            return N.test(t) && RegExp.$1
        }
        var b = n(24),
            _ = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
            E = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
            x = /^http(s?):\/\/(\w+\.)*twitter\.com([:\/]|$)/i,
            T = /^http(s?):\/\/pbs\.twimg\.com\//,
            C = /^#?([^.,<>!\s\/#\-()'"]+)$/,
            A = /twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,
            R = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
            I = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,
            S = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,
            P = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-]+)/i,
            N = /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i;
        t.exports = {
            isHashTag: a,
            hashTag: u,
            isScreenName: r,
            screenName: i,
            isStatus: c,
            status: d,
            intentForProfileURL: o,
            intentForFollowURL: s,
            isTwitterURL: f,
            isTwimgURL: l,
            isIntentURL: h,
            regexen: {
                profile: _
            },
            momentId: p,
            collectionId: m,
            intentType: v,
            likesScreenName: g,
            listScreenNameAndSlug: w,
            eventId: y
        }
    }, function(t, e, n) {
        function r(t) {
            return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27")
        }

        function i(t) {
            return decodeURIComponent(t)
        }

        function o(t) {
            var e = [];
            return d.forIn(t, function(t, n) {
                var i = r(t);
                d.isType("array", n) || (n = [n]), n.forEach(function(t) {
                    c.hasValue(t) && e.push(i + "=" + r(t))
                })
            }), e.sort().join("&")
        }

        function s(t) {
            var e, n = {};
            return t ? (e = t.split("&"), e.forEach(function(t) {
                var e = t.split("="),
                    r = i(e[0]),
                    o = i(e[1]);
                if (2 == e.length) return d.isType("array", n[r]) ? void n[r].push(o) : r in n ? (n[r] = [n[r]], void n[r].push(o)) : void(n[r] = o)
            }), n) : {}
        }

        function a(t, e) {
            var n = o(e);
            return n.length > 0 ? d.contains(t, "?") ? t + "&" + o(e) : t + "?" + o(e) : t
        }

        function u(t) {
            var e = t && t.split("?");
            return 2 == e.length ? s(e[1]) : {}
        }
        var c = n(25),
            d = n(11);
        t.exports = {
            url: a,
            decodeURL: u,
            decode: s,
            encode: o,
            encodePart: r,
            decodePart: i
        }
    }, function(t, e, n) {
        function r(t) {
            return void 0 !== t && null !== t && "" !== t
        }

        function i(t) {
            return a(t) && t % 1 === 0
        }

        function o(t) {
            return "string" === m.toType(t)
        }

        function s(t) {
            return a(t) && !i(t)
        }

        function a(t) {
            return r(t) && !isNaN(t)
        }

        function u(t) {
            return r(t) && "array" == m.toType(t)
        }

        function c(t) {
            return m.contains(g, t)
        }

        function d(t) {
            return m.contains(v, t)
        }

        function f(t) {
            return !!r(t) && (!!d(t) || !c(t) && !!t)
        }

        function l(t) {
            if (a(t)) return t
        }

        function h(t) {
            if (s(t)) return t
        }

        function p(t) {
            if (i(t)) return parseInt(t, 10)
        }
        var m = n(11),
            v = [!0, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"],
            g = [!1, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];
        t.exports = {
            hasValue: r,
            isInt: i,
            isFloat: s,
            isNumber: a,
            isString: o,
            isArray: u,
            isTruthValue: d,
            isFalseValue: c,
            asInt: p,
            asFloat: h,
            asNumber: l,
            asBoolean: f
        }
    }, function(t, e, n) {
        function r(t) {
            var e = [];
            return m.forIn(t, function(t, n) {
                e.push(t + "=" + n)
            }), e.join(",")
        }

        function i() {
            return v + p.generate()
        }

        function o(t, e) {
            function n(t) {
                return Math.round(t / 2)
            }
            return t > e ? {
                coordinate: 0,
                size: e
            } : {
                coordinate: n(e) - n(t),
                size: t
            }
        }

        function s(t, e, n) {
            var i, s;
            e = a.parse(e), n = n || {}, i = o(e.width, n.width || g), e.left = i.coordinate, e.width = i.size, s = o(e.height, n.height || w), e.top = s.coordinate, e.height = s.size, this.win = t, this.features = r(e)
        }
        var a, u = n(7),
            c = n(27),
            d = n(19),
            f = n(21),
            l = n(8),
            h = n(23),
            p = n(28),
            m = n(11),
            v = "intent_",
            g = u.screen.width,
            w = u.screen.height;
        a = (new c).defaults({
            width: 550,
            height: 520,
            personalbar: "0",
            toolbar: "0",
            location: "1",
            scrollbars: "1",
            resizable: "1"
        }), s.prototype.open = function(t, e) {
            var n = e && "click" == e.type && f.closest("a", e.target),
                r = e && (e.altKey || e.metaKey || e.shiftKey),
                o = n && (l.ios() || l.android());
            if (h.isTwitterURL(t)) return r || o ? this : (this.name = i(), this.popup = this.win.open(t, this.name, this.features), e && d.preventDefault(e), this)
        }, s.open = function(t, e, n) {
            var r = new s(u, e);
            return r.open(t, n)
        }, t.exports = s
    }, function(t, e, n) {
        function r(t) {
            return function(e) {
                return o.hasValue(e[t])
            }
        }

        function i() {
            this.assertions = [], this._defaults = {}
        }
        var o = n(25),
            s = n(11);
        i.prototype.assert = function(t, e) {
            return this.assertions.push({
                fn: t,
                msg: e || "assertion failed"
            }), this
        }, i.prototype.defaults = function(t) {
            return this._defaults = t || this._defaults, this
        }, i.prototype.require = function(t) {
            var e = this;
            return t = Array.isArray(t) ? t : s.toRealArray(arguments), t.forEach(function(t) {
                e.assert(r(t), "required: " + t)
            }), this
        }, i.prototype.parse = function(t) {
            var e, n;
            if (e = s.aug({}, this._defaults, t || {}), n = this.assertions.reduce(function(t, n) {
                    return n.fn(e) || t.push(n.msg), t
                }, []), n.length > 0) throw new Error(n.join("\n"));
            return e
        }, t.exports = i
    }, function(t, e) {
        function n() {
            return i + String(+new Date) + Math.floor(1e5 * Math.random()) + o++
        }

        function r() {
            return i + String(s++)
        }
        var i = "i",
            o = 0,
            s = 0;
        t.exports = {
            generate: n,
            deterministic: r
        }
    }, function(t, e, n) {
        function r() {
            return i.get("events") || {}
        }
        var i = n(14),
            o = n(30),
            s = n(11);
        t.exports = s.aug(r(), o.Emitter)
    }, function(t, e, n) {
        var r = n(11),
            i = n(13),
            o = {
                bind: function(t, e) {
                    return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e)
                },
                unbind: function(t, e) {
                    var n;
                    this._handlers && this._handlers[t] && (e ? (n = this._handlers[t].indexOf(e), n >= 0 && this._handlers[t].splice(n, 1)) : this._handlers[t] = [])
                },
                trigger: function(t, e) {
                    var n = this._handlers && this._handlers[t];
                    e = e || {}, e.type = t, n && n.forEach(function(t) {
                        r.async(i(t, this, e))
                    })
                }
            };
        t.exports = {
            Emitter: o
        }
    }, function(t, e, n) {
        function r(t) {
            c[t] = +new Date
        }

        function i(t) {
            return c[t] ? +new Date - c[t] : null
        }

        function o(t, e, n, r, o) {
            var a = i(e);
            a && s(t, n, r, a, o)
        }

        function s(t, e, n, r, i) {
            var o, s = void 0 === i ? d : i;
            100 * Math.random() > s || (n = u.aug(n || {}, {
                duration_ms: r
            }), o = {
                page: e,
                component: "performance",
                action: t
            }, a.clientEvent(o, n, !0))
        }
        var a = n(32),
            u = n(11),
            c = {},
            d = 1;
        t.exports = {
            start: r,
            end: i,
            track: s,
            endAndTrack: o
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            return i(t, e, n, 2)
        }

        function i(t, e, n, r) {
            var i = !v.isObject(t),
                o = !!e && !v.isObject(e);
            i || o || s(m.formatClientEventNamespace(t), m.formatClientEventData(e, n, r), m.CLIENT_EVENT_ENDPOINT)
        }

        function o(t, e, n, r) {
            var o = m.extractTermsFromDOM(t.target || t.srcElement);
            o.action = r || "click", i(o, e, n)
        }

        function s(t, e, n) {
            var r, i;
            n && v.isObject(t) && v.isObject(e) && (r = m.flattenClientEventPayload(t, e), i = {
                l: m.stringify(r)
            }, m.noticeSeen(t) && (i.notice_seen = !0), r.dnt && (i.dnt = 1), l(p.url(n, i)))
        }

        function a(t, e, n, r) {
            var i, o = !v.isObject(t),
                s = !!e && !v.isObject(e);
            if (!o && !s) return i = m.flattenClientEventPayload(m.formatClientEventNamespace(t), m.formatClientEventData(e, n, r)), u(i)
        }

        function u(t) {
            return w.push(t), w
        }

        function c() {
            var t, e;
            return w.length > 1 && a({
                page: "widgets_js",
                component: "scribe_pixel",
                action: "batch_log"
            }, {}), t = w, w = [], e = t.reduce(function(e, n, r) {
                var i = e.length,
                    o = i && e[i - 1],
                    s = r + 1 == t.length;
                return s && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = ["entries:" + r, "requests:" + i].join("/")), d(n).forEach(function(t) {
                    var n = f(t);
                    (!o || o.urlLength + n > g) && (o = {
                        urlLength: b,
                        items: []
                    }, e.push(o)), o.urlLength += n, o.items.push(t)
                }), e
            }, []), e.map(function(t) {
                var e = {
                    l: t.items
                };
                return h.enabled() && (e.dnt = 1), l(p.url(m.CLIENT_EVENT_ENDPOINT, e))
            })
        }

        function d(t) {
            return Array.isArray(t) || (t = [t]), t.reduce(function(t, e) {
                var n, r = m.stringify(e),
                    i = f(r);
                return b + i < g ? t = t.concat(r) : (n = m.splitLogEntry(e), n.length > 1 && (t = t.concat(d(n)))), t
            }, [])
        }

        function f(t) {
            return encodeURIComponent(t).length + 3
        }

        function l(t) {
            var e = new Image;
            return e.src = t
        }
        var h = n(33),
            p = n(24),
            m = n(38),
            v = n(11),
            g = 2083,
            w = [],
            y = p.url(m.CLIENT_EVENT_ENDPOINT, {
                dnt: 0,
                l: ""
            }),
            b = encodeURIComponent(y).length;
        t.exports = {
            _enqueueRawObject: u,
            scribe: s,
            clientEvent: i,
            clientEvent2: r,
            enqueueClientEvent: a,
            flushClientEvents: c,
            interaction: o
        }
    }, function(t, e, n) {
        function r() {
            f = !0
        }

        function i(t, e) {
            return !!f || (!!c.asBoolean(d.val("dnt")) || (!!u.isUrlSensitive(e || s.host) || (!(!a.isFramed() || !u.isUrlSensitive(a.rootDocumentLocation())) || (t = l.test(t || o.referrer) && RegExp.$1, !(!t || !u.isUrlSensitive(t))))))
        }
        var o = n(9),
            s = n(18),
            a = n(34),
            u = n(36),
            c = n(25),
            d = n(37),
            f = !1,
            l = /https?:\/\/([^\/]+).*/i;
        t.exports = {
            setOn: r,
            enabled: i
        }
    }, function(t, e, n) {
        function r(t) {
            return t && u.isType("string", t) && (c = t), c
        }

        function i() {
            return d
        }

        function o() {
            return c !== d
        }
        var s = n(18),
            a = n(35),
            u = n(11),
            c = a.getCanonicalURL() || s.href,
            d = c;
        t.exports = {
            isFramed: o,
            rootDocumentLocation: r,
            currentDocumentLocation: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            var n, r;
            return e = e || a, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && (r = e.pathname.split("/"), r.pop(), r.push(t), t = "/" + r.join("/")), [e.protocol, "//", n, t].join(""))
        }

        function i() {
            for (var t, e = s.getElementsByTagName("link"), n = 0; e[n]; n++)
                if (t = e[n], "canonical" == t.rel) return r(t.href)
        }

        function o() {
            for (var t, e, n, r = s.getElementsByTagName("a"), i = s.getElementsByTagName("link"), o = [r, i], a = 0, c = 0, d = /\bme\b/; t = o[a]; a++)
                for (c = 0; e = t[c]; c++)
                    if (d.test(e.rel) && (n = u.screenName(e.href))) return n
        }
        var s = n(9),
            a = n(18),
            u = n(23);
        t.exports = {
            absolutize: r,
            getCanonicalURL: i,
            getScreenNameFromPage: o
        }
    }, function(t, e, n) {
        function r(t) {
            return t in a ? a[t] : a[t] = s.test(t)
        }

        function i() {
            return r(o.host)
        }
        var o = n(18),
            s = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,
            a = {};
        t.exports = {
            isUrlSensitive: r,
            isHostPageSensitive: i
        }
    }, function(t, e, n) {
        function r(t) {
            var e, n, r, i = 0;
            for (o = {}, t = t || s, e = t.getElementsByTagName("meta"); e[i]; i++) n = e[i], /^twitter:/.test(n.name) && (r = n.name.replace(/^twitter:/, ""), o[r] = n.content)
        }

        function i(t) {
            return o[t]
        }
        var o, s = n(9);
        r(), t.exports = {
            init: r,
            val: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            var n;
            return e = e || {}, t && t.nodeType === Node.ELEMENT_NODE ? (n = t.getAttribute("data-scribe"), n && n.split(" ").forEach(function(t) {
                var n = t.trim().split(":"),
                    r = n[0],
                    i = n[1];
                r && i && !e[r] && (e[r] = i)
            }), r(t.parentNode, e)) : e
        }

        function i(t) {
            return v.aug({
                client: "tfw"
            }, t || {})
        }

        function o(t, e, n) {
            var r = t && t.widget_origin || h.referrer;
            return t = s("tfw_client_event", t, r), t.client_version = w, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = r), t
        }

        function s(t, e, n) {
            return e = e || {}, v.aug({}, e, {
                _category_: t,
                triggered_on: e.triggered_on || +new Date,
                dnt: m.enabled(n)
            })
        }

        function a(t, e) {
            var n = {};
            return e = e || {}, e.association_namespace = i(t), n[E] = e, n
        }

        function u(t, e) {
            return v.aug({}, e, {
                event_namespace: t
            })
        }

        function c(t) {
            return "notice" === t.element && "seen" === t.action
        }

        function d(t) {
            var e, n = Array.prototype.toJSON;
            return delete Array.prototype.toJSON, e = p.stringify(t), n && (Array.prototype.toJSON = n), e
        }

        function f(t) {
            var e, n, r, i, o, s;
            return t.item_ids && t.item_ids.length > 1 ? (e = Math.floor(t.item_ids.length / 2), n = t.item_ids.slice(0, e), r = {}, i = t.item_ids.slice(e), o = {}, n.forEach(function(e) {
                r[e] = t.item_details[e]
            }), i.forEach(function(e) {
                o[e] = t.item_details[e]
            }), s = [v.aug({}, t, {
                item_ids: n,
                item_details: r
            }), v.aug({}, t, {
                item_ids: i,
                item_details: o
            })]) : [t]
        }

        function l(t) {
            return t.forEach(function(t) {
                t.input.data.unbucketed = !0
            }), t
        }
        var h = n(9),
            p = n(39),
            m = n(33),
            v = n(11),
            g = n(40),
            w = g.version,
            y = "https://syndication.twitter.com/i/jot",
            b = "https://syndication.twitter.com/i/jot/syndication",
            _ = "https://platform.twitter.com/jot.html",
            E = 1;
        t.exports = {
            extractTermsFromDOM: r,
            flattenClientEventPayload: u,
            formatGenericEventData: s,
            formatClientEventData: o,
            formatClientEventNamespace: i,
            formatTweetAssociation: a,
            noticeSeen: c,
            splitLogEntry: f,
            stringify: d,
            flagUnbucketedScribeItems: l,
            AUDIENCE_ENDPOINT: b,
            CLIENT_EVENT_ENDPOINT: y,
            RUFOUS_REDIRECT: _
        }
    }, function(t, e, n) {
        var r = n(7),
            i = r.JSON;
        t.exports = {
            stringify: i.stringify || i.encode,
            parse: i.parse || i.decode
        }
    }, function(t, e) {
        t.exports = {
            version: "83f813d:1508868157223"
        }
    }, function(t, e, n) {
        function r(t) {
            return t.reduce(function(t, e) {
                return t.concat(w.reduce(function(t, n) {
                    return t.concat(n(e))
                }, []))
            }, [])
        }

        function i() {
            var t = f.val("widgets:autoload") || !0;
            return !m.isFalseValue(t) && (m.isTruthValue(t) ? a.body : a.querySelectorAll(t))
        }

        function o(t) {
            var e;
            return t = t || a.body, t = t.length ? v.toRealArray(t) : [t], h.pause(), g.load(), e = c.allResolved(r(t).map(function(t) {
                return d.addWidget(t)
            })).then(function(t) {
                p.trigger("loaded", {
                    widgets: t
                })
            }), c.always(e, function() {
                h.resume()
            }), e
        }

        function s() {
            var t = i();
            return t === !1 ? u.resolve() : (l.set("widgets.loaded", !0), o(t))
        }
        var a = n(9),
            u = n(2),
            c = n(42),
            d = n(43),
            f = n(37),
            l = n(16),
            h = n(50),
            p = n(29),
            m = n(25),
            v = n(11),
            g = n(73),
            w = n(80);
        t.exports = {
            load: o,
            loadPage: s,
            _getPageLoadTarget: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            return t.then(e, e)
        }

        function i(t) {
            var e;
            return t = t || [], e = t.length, t = t.filter(a), e ? e !== t.length ? u.reject("https://platform.twitter.com/non-Promise passed to .some") : new u(function(e, n) {
                function r() {
                    i += 1, i === t.length && n()
                }
                var i = 0;
                t.forEach(function(t) {
                    t.then(e, r)
                })
            }) : u.reject("https://platform.twitter.com/no promises passed to .some")
        }

        function o(t) {
            var e;
            return void 0 === t ? u.reject(new Error("undefined is not an object")) : Array.isArray(t) ? (e = t.length, e ? new u(function(n, r) {
                function i() {
                    s += 1, s === e && (0 === u.length ? r() : n(u))
                }

                function o(t) {
                    u.push(t), i()
                }
                var s = 0,
                    u = [];
                t.forEach(function(t) {
                    a(t) ? t.then(o, i) : o(t)
                })
            }) : u.resolve([])) : u.reject(new Error("Type error"))
        }

        function s(t) {
            function e() {}
            return u.all((t || []).map(function(t) {
                return r(t, e)
            }))
        }

        function a(t) {
            return t instanceof u
        }
        var u = n(2);
        t.exports = {
            always: r,
            allResolved: o,
            some: i,
            isPromise: a,
            allSettled: s
        }
    }, function(t, e, n) {
        function r(t) {
            return t.reduce(function(t, e) {
                return t[e.className] = t[e.className] || [], t[e.className].push(e), t
            }, {})
        }

        function i(t) {
            var e = t.map(s.fromRawTask),
                n = r(e);
            f.forIn(n, function(t, e) {
                c.allSettled(e.map(function(t) {
                    return t.initialize()
                })).then(function() {
                    e.forEach(function(t) {
                        u.all([t.hydrate(), t.insertIntoDom()]).then(d(t.render, t)).then(d(t.success, t), d(t.fail, t))
                    })
                })
            })
        }

        function o(t) {
            return l.add(t)
        }
        var s = n(44),
            a = n(48),
            u = n(2),
            c = n(42),
            d = n(13),
            f = n(11),
            l = new a(i);
        t.exports = {
            addWidget: o
        }
    }, function(t, e, n) {
        function r(t) {
            var e = t.srcEl || t.targetEl;
            return e.ownerDocument.defaultView
        }

        function i(t, e) {
            this._widget = null, this._sandbox = null, this._hydrated = !1, this._insertedIntoDom = !1, this._Sandbox = t.Sandbox, this._factory = t.factory, this._widgetParams = t.parameters, this._resolve = e, this._className = t.className, this._renderedClassName = t.className + "-rendered", this._errorClassName = t.className + "-error", this._srcEl = t.srcEl, this._targetGlobal = r(t), this._insertionStrategy = function(e) {
                var n = t.srcEl,
                    r = t.targetEl;
                n ? r.insertBefore(e, n) : r.appendChild(e)
            }
        }
        var o = n(20),
            s = n(45),
            a = n(29),
            u = n(47),
            c = n(2),
            d = n(42);
        i.fromRawTask = function(t) {
            return new i(t.input, t.taskDoneDeferred.resolve)
        }, i.prototype.initialize = function() {
            var t = this,
                e = new this._Sandbox(this._targetGlobal);
            return this._factory(this._widgetParams, e).then(function(n) {
                return t._widget = n, t._sandbox = e, n
            })
        }, i.prototype.insertIntoDom = function() {
            var t = this;
            return this._widget ? this._sandbox.insert(this._widget.id, {
                class: [this._className, this._renderedClassName].join(" ")
            }, null, this._insertionStrategy).then(function() {
                t._insertedIntoDom = !0
            }) : c.reject(new Error("cannot insert widget into DOM before it is initialized"))
        }, i.prototype.hydrate = function() {
            var t = this;
            return this._widget ? this._widget.hydrate().then(function() {
                t._hydrated = !0
            }) : c.reject(new Error("cannot hydrate widget before it is initialized"))
        }, i.prototype.render = function() {
            function t() {
                r._sandbox.onResize(function() {
                    return r._widget.resize().then(function() {
                        a.trigger("resize", {
                            target: r._sandbox.sandboxEl
                        })
                    })
                })
            }

            function e() {
                return u(r._srcEl).then(function() {
                    return r._sandbox.sandboxEl
                })
            }

            function n(t) {
                return u(r._sandbox.sandboxEl).then(function() {
                    return c.reject(t)
                })
            }
            var r = this;
            return this._hydrated ? this._insertedIntoDom ? r._widget.render(r._sandbox).then(function() {
                return t(), r._widget.show()
            }).then(e, n) : n(new Error("cannot render widget before DOM insertion")) : n(new Error("cannot render widget before hydration"))
        }, i.prototype.fail = function() {
            var t = this;
            return this._srcEl ? d.always(s.write(function() {
                o.add(t._srcEl, t._errorClassName)
            }), function() {
                a.trigger("rendered", {
                    target: t._srcEl
                }), t._resolve(t._srcEl)
            }) : (t._resolve(), c.resolve())
        }, i.prototype.success = function() {
            a.trigger("rendered", {
                target: this._sandbox.sandboxEl
            }), this._resolve(this._sandbox.sandboxEl)
        }, t.exports = i
    }, function(t, e, n) {
        function r(t, e) {
            return function() {
                try {
                    e.resolve(t.call(this))
                } catch (t) {
                    e.reject(t)
                }
            }
        }

        function i(t, e) {
            t.call(e)
        }

        function o(t, e) {
            var n = new c;
            return u.read(r(t, n), e), n.promise
        }

        function s(t, e) {
            var n = new c;
            return u.write(r(t, n), e), n.promise
        }

        function a(t, e, n) {
            var i = new c;
            return d.isType("function", t) && (n = e, e = t, t = 1), u.defer(t, r(e, i), n), i.promise
        }
        var u = n(46),
            c = n(1),
            d = n(11);
        t.exports = {
            sync: i,
            read: o,
            write: s,
            defer: a
        }
    }, function(t, e, n) {
        var r;
        ! function() {
            "use strict";

            function i() {
                this.frames = [], this.lastId = 0, this.raf = o, this.batch = {
                    hash: {},
                    read: [],
                    write: [],
                    mode: null
                }
            }
            var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            };
            i.prototype.read = function(t, e) {
                var n = this.add("read", t, e),
                    r = n.id;
                this.batch.read.push(n.id);
                var i = "reading" === this.batch.mode || this.batch.scheduled;
                return i ? r : (this.scheduleBatch(), r)
            }, i.prototype.write = function(t, e) {
                var n = this.add("write", t, e),
                    r = this.batch.mode,
                    i = n.id;
                this.batch.write.push(n.id);
                var o = "writing" === r || "reading" === r || this.batch.scheduled;
                return o ? i : (this.scheduleBatch(), i)
            }, i.prototype.defer = function(t, e, n) {
                "function" == typeof t && (n = e, e = t, t = 1);
                var r = this,
                    i = t - 1;
                return this.schedule(i, function() {
                    r.run({
                        fn: e,
                        ctx: n
                    })
                })
            }, i.prototype.clear = function(t) {
                if ("function" == typeof t) return this.clearFrame(t);
                t = Number(t);
                var e = this.batch.hash[t];
                if (e) {
                    var n = this.batch[e.type],
                        r = n.indexOf(t);
                    delete this.batch.hash[t], ~r && n.splice(r, 1)
                }
            }, i.prototype.clearFrame = function(t) {
                var e = this.frames.indexOf(t);
                ~e && this.frames.splice(e, 1)
            }, i.prototype.scheduleBatch = function() {
                var t = this;
                this.schedule(0, function() {
                    t.batch.scheduled = !1, t.runBatch()
                }), this.batch.scheduled = !0
            }, i.prototype.uniqueId = function() {
                return ++this.lastId
            }, i.prototype.flush = function(t) {
                for (var e; e = t.shift();) this.run(this.batch.hash[e])
            }, i.prototype.runBatch = function() {
                try {
                    this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null
                } catch (t) {
                    throw this.runBatch(), t
                }
            }, i.prototype.add = function(t, e, n) {
                var r = this.uniqueId();
                return this.batch.hash[r] = {
                    id: r,
                    fn: e,
                    ctx: n,
                    type: t
                }
            }, i.prototype.run = function(t) {
                var e = t.ctx || this,
                    n = t.fn;
                if (delete this.batch.hash[t.id], !this.onError) return n.call(e);
                try {
                    n.call(e)
                } catch (t) {
                    this.onError(t)
                }
            }, i.prototype.loop = function() {
                function t() {
                    var e = n.frames.shift();
                    n.frames.length ? r(t) : n.looping = !1, e && e()
                }
                var e, n = this,
                    r = this.raf,
                    i = !1,
                    o = 500;
                this.looping || (e = setTimeout(function() {
                    i = !0, t()
                }, o), r(function() {
                    i || (clearTimeout(e), t())
                }), this.looping = !0)
            }, i.prototype.schedule = function(t, e) {
                return this.frames[t] ? this.schedule(t + 1, e) : (this.loop(), this.frames[t] = e)
            };
            var s = new i;
            "undefined" != typeof t && t.exports ? t.exports = s : (r = function() {
                return s
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)))
        }()
    }, function(t, e, n) {
        function r(t) {
            return i.write(function() {
                t && t.parentNode && t.parentNode.removeChild(t)
            })
        }
        var i = n(45);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            this._inputsQueue = [], this._task = t, this._hasFlushBeenScheduled = !1
        }
        var i = n(1),
            o = n(49),
            s = n(13);
        r.prototype.add = function(t) {
            var e = new i;
            return this._inputsQueue.push({
                input: t,
                taskDoneDeferred: e
            }), this._hasFlushBeenScheduled || (this._hasFlushBeenScheduled = !0, o(s(this._flush, this))), e.promise
        }, r.prototype._flush = function() {
            try {
                this._task.call(null, this._inputsQueue)
            } catch (t) {
                this._inputsQueue.forEach(function(e) {
                    e.taskDoneDeferred.reject(t)
                })
            }
            this._inputsQueue = [], this._hasFlushBeenScheduled = !1
        }, t.exports = r
    }, function(t, e, n) {
        var r = n(3).Promise;
        t.exports = r._asap
    }, function(t, e, n) {
        function r(t) {
            t.forEach(function(t) {
                var e = t.input.namespace,
                    n = t.input.data,
                    r = t.input.offsite,
                    i = t.input.version;
                f.clientEvent(e, n, r, i), t.taskDoneDeferred.resolve()
            })
        }

        function i(t) {
            function e() {
                t.forEach(function(t) {
                    t.taskDoneDeferred.resolve()
                })
            }

            function n() {
                t.forEach(function(t) {
                    t.taskDoneDeferred.reject()
                })
            }
            d.init(), t.forEach(function(t) {
                var e = t.input.namespace,
                    n = t.input.data,
                    r = t.input.offsite,
                    i = t.input.version;
                d.clientEvent(e, n, r, i)
            }), d.flush().then(e, n)
        }

        function o(t) {
            var e, n, o;
            0 !== t.length && h.isUnbucketed().then(function(s) {
                return s && l.flagUnbucketedScribeItems(t), 1 === t.length ? r(t) : (e = c(t, function(t) {
                    return l.noticeSeen(t.input.namespace)
                }), n = e.true, o = e.false, n && n.length > 0 && r(n.slice(0, 1)), void(o && (1 === o.length ? r : i)(o)))
            })
        }

        function s(t, e, n, r) {
            return m.add({
                namespace: t,
                data: e,
                offsite: n,
                version: r
            })
        }

        function a() {
            m.pause()
        }

        function u() {
            m.resume()
        }
        var c = n(51),
            d = n(52),
            f = n(32),
            l = n(38),
            h = n(73),
            p = n(79),
            m = new p(o);
        t.exports = {
            scribe: s,
            pause: a,
            resume: u
        }
    }, function(t, e) {
        function n(t, e) {
            return t.reduce(function(t, n) {
                var r = e(n);
                return t[r] = t[r] || [], t[r].push(n), t
            }, {})
        }
        t.exports = n
    }, function(t, e, n) {
        function r() {
            function t(t) {
                h.body.appendChild(t)
            }
            return A ? R.promise : (l = new _(p), l.insert("rufous-sandbox", null, {
                display: "none"
            }, t).then(function() {
                l.setTitle("Twitter analytics iframe"), d = u(), f = c(), R.resolve([d, f])
            }), A = !0, R.promise)
        }

        function i(t, e) {
            var n, r, i;
            b.isObject(t) && b.isObject(e) && (i = y.flattenClientEventPayload(t, e), n = d.firstChild, n.value = +(+n.value || i.dnt || 0), r = l.createElement("input"), r.type = "hidden", r.name = "l", r.value = y.stringify(i), d.appendChild(r))
        }

        function o(t, e, n) {
            var r = !b.isObject(t),
                o = !!e && !b.isObject(e);
            r || o || R.promise.then(function() {
                i(y.formatClientEventNamespace(t), y.formatClientEventData(e, n))
            })
        }

        function s() {
            return R.promise.then(function() {
                var t;
                return d.children.length <= 2 ? w.reject() : (t = w.all([l.doc.body.appendChild(d), l.doc.body.appendChild(f)]).then(function(t) {
                    var e = t[0],
                        n = t[1];
                    return n.addEventListener("load", function() {
                        a(e, n)()
                    }), e.submit(), t
                }), d = u(), f = c(), t)
            })
        }

        function a(t, e) {
            return function() {
                var n = t.parentNode;
                n && (n.removeChild(t), n.removeChild(e))
            }
        }

        function u() {
            var t = l.createElement("form"),
                e = l.createElement("input"),
                n = l.createElement("input");
            return C++, t.action = y.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = x + C, t.id = T + C, e.type = "hidden", e.name = "dnt", e.value = v.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = y.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(n), t
        }

        function c() {
            var t = x + C;
            return m({
                id: t,
                name: t,
                width: 0,
                height: 0,
                border: 0
            }, {
                display: "none"
            }, l.doc)
        }
        var d, f, l, h = n(9),
            p = n(7),
            m = n(53),
            v = n(33),
            g = n(1),
            w = n(2),
            y = n(38),
            b = n(11),
            _ = n(54),
            E = Math.floor(1e3 * Math.random()) + "_",
            x = "rufous-frame-" + E + "-",
            T = "rufous-form-" + E + "-",
            C = 0,
            A = !1,
            R = new g;
        t.exports = {
            clientEvent: o,
            flush: s,
            init: r
        }
    }, function(t, e, n) {
        var r = n(9),
            i = n(11);
        t.exports = function(t, e, n) {
            var o;
            if (n = n || r, t = t || {}, e = e || {}, t.name) {
                try {
                    o = n.createElement('<iframe name="' + t.name + '"></iframe>')
                } catch (e) {
                    o = n.createElement("iframe"), o.name = t.name
                }
                delete t.name
            } else o = n.createElement("iframe");
            return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute("frameBorder", 0), o.setAttribute("allowTransparency", !0), i.forIn(t, function(t, e) {
                o.setAttribute(t, e)
            }), i.forIn(e, function(t, e) {
                o.style[t] = e
            }), o
        }
    }, function(t, e, n) {
        var r = n(55),
            i = n(64);
        t.exports = r.build([i])
    }, function(t, e, n) {
        var r = n(56),
            i = n(59),
            o = n(13);
        r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
    }, function(t, e, n) {
        function r() {
            return a.toRealArray(arguments)
        }

        function i(t, e, n) {
            var r = new t;
            return e = s(o(e || [])), e.forEach(function(t) {
                t.call(null, r)
            }), r.build(n)
        }
        var o = n(57),
            s = n(58),
            a = n(11);
        t.exports = {
            couple: r,
            build: i
        }
    }, function(t, e, n) {
        function r(t) {
            var e = [];
            return t.forEach(function(t) {
                var n = i.isType("array", t) ? r(t) : [t];
                e = e.concat(n)
            }), e
        }
        var i = n(11);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            return t.filter(function(e, n) {
                return t.indexOf(e) === n
            })
        }
        t.exports = n
    }, function(t, e, n) {
        function r() {
            i.apply(this, arguments)
        }
        var i = n(60),
            o = n(11),
            s = n(63);
        r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
            factory: s
        }), t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = this[e];
            if (!r) throw new Error(e + " does not exist");
            this[e] = t(r, n)
        }

        function i() {
            this.Component = this.factory(), this._adviceArgs = [], this._lastArgs = []
        }
        var o = n(61),
            s = n(11),
            a = n(62);
        s.aug(i.prototype, {
            factory: a,
            build: function(t) {
                var e = this;
                this.Component;
                return s.aug(this.Component.prototype.boundParams, t), this._adviceArgs.concat(this._lastArgs).forEach(function(t) {
                    r.apply(e.Component.prototype, t)
                }), delete this._lastArgs, delete this._adviceArgs, this.Component
            },
            params: function(t) {
                var e = this.Component.prototype.paramConfigs;
                t = t || {}, this.Component.prototype.paramConfigs = s.aug({}, t, e)
            },
            define: function(t, e) {
                if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
                this.override(t, e)
            },
            defineStatic: function(t, e) {
                this.Component[t] = e
            },
            override: function(t, e) {
                this.Component.prototype[t] = e
            },
            defineProperty: function(t, e) {
                if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
                this.overrideProperty(t, e)
            },
            overrideProperty: function(t, e) {
                var n = s.aug({
                    configurable: !0
                }, e);
                Object.defineProperty(this.Component.prototype, t, n)
            },
            before: function(t, e) {
                this._adviceArgs.push([o.before, t, e])
            },
            after: function(t, e) {
                this._adviceArgs.push([o.after, t, e])
            },
            around: function(t, e) {
                this._adviceArgs.push([o.around, t, e])
            },
            last: function(t, e) {
                this._lastArgs.push([o.after, t, e])
            }
        }), t.exports = i
    }, function(t, e, n) {
        function r(t, e) {
            return function() {
                var n, r = this,
                    i = arguments;
                return n = e.apply(this, arguments), s.isPromise(n) ? n.then(function() {
                    return t.apply(r, i)
                }) : t.apply(this, arguments)
            }
        }

        function i(t, e) {
            return function() {
                function n(t, e) {
                    return s.isPromise(e) ? e.then(function() {
                        return t
                    }) : t
                }
                var r, i = this,
                    o = arguments;
                return r = t.apply(this, arguments), s.isPromise(r) ? r.then(function(t) {
                    return n(t, e.apply(i, o))
                }) : n(r, e.apply(this, arguments))
            }
        }

        function o(t, e) {
            return function() {
                var n = a.toRealArray(arguments);
                return n.unshift(u(t, this)), e.apply(this, n)
            }
        }
        var s = n(42),
            a = n(11),
            u = n(13);
        t.exports = {
            before: r,
            after: i,
            around: o
        }
    }, function(t, e, n) {
        function r() {
            return !0
        }

        function i(t) {
            return t
        }

        function o(t, e, n) {
            var r = null;
            return t.some(function(t) {
                if (t = a.isType("function", t) ? t() : t, e(t)) return r = n(t), !0
            }), r
        }

        function s() {
            function t(t) {
                var e = this;
                t = t || {}, this.params = Object.keys(this.paramConfigs).reduce(function(n, s) {
                    var a = [],
                        u = e.boundParams,
                        c = e.paramConfigs[s],
                        d = c.validate || r,
                        f = c.transform || i;
                    if (s in u && a.push(u[s]), s in t && a.push(t[s]), a = "fallback" in c ? a.concat(c.fallback) : a, n[s] = o(a, d, f), c.required && null == n[s]) throw new Error(s + " is a required parameter");
                    return n
                }, {}), this.initialize()
            }
            return a.aug(t.prototype, {
                paramConfigs: {},
                boundParams: {},
                initialize: function() {}
            }), t
        }
        var a = n(11);
        t.exports = s
    }, function(t, e, n) {
        function r() {
            function t(t) {
                e.apply(this, arguments), Object.defineProperty(this, "targetGlobal", {
                    value: t
                })
            }
            var e = s();
            return t.prototype = Object.create(e.prototype), u.aug(t.prototype, {
                id: null,
                initialized: !1,
                width: 0,
                height: 0,
                sandboxEl: null,
                insert: function() {
                    return a.reject()
                },
                onResize: function() {},
                addClass: function(t) {
                    var e = this.sandboxEl;
                    return t = Array.isArray(t) ? t : [t], o.write(function() {
                        t.forEach(function(t) {
                            i.add(e, t)
                        })
                    })
                },
                removeClass: function(t) {
                    var e = this.sandboxEl;
                    return t = Array.isArray(t) ? t : [t], o.write(function() {
                        t.forEach(function(t) {
                            i.remove(e, t)
                        })
                    })
                },
                styleSelf: function(t) {
                    var e = this;
                    return o.write(function() {
                        u.forIn(t, function(t, n) {
                            e.sandboxEl.style[t] = n
                        })
                    })
                }
            }), t
        }
        var i = n(20),
            o = n(45),
            s = n(62),
            a = n(2),
            u = n(11);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n, r) {
            return e = y.aug({
                id: t
            }, x, e), n = y.aug({}, T, n), m(e, n, r)
        }

        function i(t) {
            try {
                t.contentWindow.document
            } catch (t) {
                return w.reject(t)
            }
            return w.resolve(t)
        }

        function o(t, e, n, i, o) {
            var s = new g,
                u = _.generate(),
                d = r(t, e, n, o);
            return b.set(["sandbox", u], function() {
                var t = d.contentWindow.document,
                    e = "<!DOCTYPE html><html><head></head><body></body></html>";
                c.write(function() {
                    t.write(e)
                }).then(function() {
                    t.close(), s.resolve(d)
                })
            }), d.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", 'catch (e) { document.domain="' + a.domain + '"; }', "window.parent." + b.fullPath(["sandbox", u]) + "();"].join(""), d.addEventListener("error", s.reject, !1), c.write(function() {
                i.parentNode.replaceChild(d, i)
            }), s.promise
        }

        function s(t) {
            t.overrideProperty("id", {
                get: function() {
                    return this.sandboxEl && this.sandboxEl.id
                }
            }), t.overrideProperty("initialized", {
                get: function() {
                    return !!this.win
                }
            }), t.overrideProperty("width", {
                get: function() {
                    return this._width
                }
            }), t.overrideProperty("height", {
                get: function() {
                    return this._height
                }
            }), t.overrideProperty("sandboxEl", {
                get: function() {
                    return this.iframeEl
                }
            }), t.defineProperty("iframeEl", {
                get: function() {
                    return this._iframe
                }
            }), t.defineProperty("rootEl", {
                get: function() {
                    return this.doc && this.doc.documentElement
                }
            }), t.defineProperty("widgetEl", {
                get: function() {
                    return this.doc && this.doc.body.firstElementChild
                }
            }), t.defineProperty("win", {
                get: function() {
                    return this.iframeEl && this.iframeEl.contentWindow
                }
            }), t.defineProperty("doc", {
                get: function() {
                    return this.win && this.win.document
                }
            }), t.define("_updateCachedDimensions", function() {
                var t = this;
                return c.read(function() {
                    var e, n = v(t.sandboxEl);
                    "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = v(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
                })
            }), t.define("_setTargetToBlank", function() {
                var t = this.createElement("base");
                t.target = "_blank", this.doc.head.appendChild(t)
            }), t.define("_didResize", function() {
                var t = this,
                    e = this._resizeHandlers.slice(0);
                return this._updateCachedDimensions().then(function() {
                    e.forEach(function(e) {
                        e(t)
                    })
                })
            }), t.define("setTitle", function(t) {
                this.iframeEl.title = t
            }), t.override("createElement", function(t) {
                return this.doc.createElement(t)
            }), t.override("createFragment", function() {
                return this.doc.createDocumentFragment()
            }), t.override("htmlToElement", function(t) {
                var e;
                return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild
            }), t.override("hasSelectedText", function() {
                return !!d.getSelectedText(this.win)
            }), t.override("addRootClass", function(t) {
                var e = this.rootEl;
                return t = Array.isArray(t) ? t : [t], this.initialized ? c.write(function() {
                    t.forEach(function(t) {
                        u.add(e, t)
                    })
                }) : w.reject(new Error("sandbox not initialized"))
            }), t.override("removeRootClass", function(t) {
                var e = this.rootEl;
                return t = Array.isArray(t) ? t : [t], this.initialized ? c.write(function() {
                    t.forEach(function(t) {
                        u.remove(e, t)
                    })
                }) : w.reject(new Error("sandbox not initialized"))
            }), t.override("hasRootClass", function(t) {
                return u.present(this.rootEl, t)
            }), t.define("addStyleSheet", function(t, e) {
                var n, r = new g;
                return this.initialized ? (n = this.createElement("link"), n.type = "text/css", n.rel = "stylesheet", n.href = t, n.addEventListener("load", r.resolve, !1), n.addEventListener("error", r.reject, !1), c.write(E(e, null, n)).then(function() {
                    return l(t).then(r.resolve, r.reject), r.promise
                })) : w.reject(new Error("sandbox not initialized"))
            }), t.override("prependStyleSheet", function(t) {
                var e = this.doc;
                return this.addStyleSheet(t, function(t) {
                    var n = e.head.firstElementChild;
                    return n ? e.head.insertBefore(t, n) : e.head.appendChild(t)
                })
            }), t.override("appendStyleSheet", function(t) {
                var e = this.doc;
                return this.addStyleSheet(t, function(t) {
                    return e.head.appendChild(t)
                })
            }), t.define("addCss", function(t, e) {
                var n;
                return h.inlineStyle() ? (n = this.createElement("style"), n.type = "text/css", n.appendChild(this.doc.createTextNode(t)), c.write(E(e, null, n))) : w.resolve()
            }), t.override("prependCss", function(t) {
                var e = this.doc;
                return this.addCss(t, function(t) {
                    var n = e.head.firstElementChild;
                    return n ? e.head.insertBefore(t, n) : e.head.appendChild(t)
                })
            }), t.override("appendCss", function(t) {
                var e = this.doc;
                return this.addCss(t, function(t) {
                    return e.head.appendChild(t)
                })
            }), t.override("makeVisible", function() {
                var t = this;
                return this.styleSelf(C).then(function() {
                    t._updateCachedDimensions()
                })
            }), t.override("injectWidgetEl", function(t) {
                var e = this;
                return this.initialized ? this.widgetEl ? w.reject(new Error("widget already injected")) : c.write(function() {
                    e.doc.body.appendChild(t)
                }) : w.reject(new Error("sandbox not initialized"))
            }), t.override("matchHeightToContent", function() {
                var t, e = this;
                return c.read(function() {
                    t = e.widgetEl ? v(e.widgetEl).height : 0
                }), c.write(function() {
                    e.sandboxEl.style.height = t + "px"
                }).then(function() {
                    return e._updateCachedDimensions()
                })
            }), t.override("matchWidthToContent", function() {
                var t, e = this;
                return c.read(function() {
                    t = e.widgetEl ? v(e.widgetEl).width : 0
                }), c.write(function() {
                    e.sandboxEl.style.width = t + "px"
                }).then(function() {
                    return e._updateCachedDimensions()
                })
            }), t.after("initialize", function() {
                this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
            }), t.override("insert", function(t, e, n, s) {
                var a = this,
                    u = new g,
                    d = this.targetGlobal.document,
                    f = r(t, e, n, d);
                return c.write(E(s, null, f)), f.addEventListener("load", function() {
                    i(f).then(null, E(o, null, t, e, n, f, d)).then(u.resolve, u.reject)
                }, !1), f.addEventListener("error", u.reject, !1), u.promise.then(function(t) {
                    var e = p(a._didResize, I, a);
                    return a._iframe = t, a.win.addEventListener("resize", e, !1), w.all([a._setTargetToBlank(), a.addRootClass(A), a.prependCss(R)])
                })
            }), t.override("onResize", function(t) {
                this._resizeHandlers.push(t)
            }), t.after("styleSelf", function() {
                return this._updateCachedDimensions()
            })
        }
        var a = n(9),
            u = n(20),
            c = n(45),
            d = n(65),
            f = n(55),
            l = n(66),
            h = n(67),
            p = n(68),
            m = n(53),
            v = (n(69), n(70)),
            g = n(1),
            w = n(2),
            y = n(11),
            b = n(16),
            _ = n(28),
            E = n(13),
            x = {
                allowfullscreen: "true"
            },
            T = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
                width: "0px",
                height: "0px",
                padding: "0",
                border: "none"
            },
            C = {
                position: "static",
                visibility: "visible"
            },
            A = "SandboxRoot",
            R = ".SandboxRoot { display: none; }",
            I = 50;
        t.exports = f.couple(n(71), s)
    }, function(t, e, n) {
        function r(t) {
            return t = t || o, t.getSelection && t.getSelection()
        }

        function i(t) {
            var e = r(t);
            return e ? e.toString() : ""
        }
        var o = n(7);
        t.exports = {
            getSelection: r,
            getSelectedText: i
        }
    }, function(t, e, n) {
        function r(t) {
            var e = new s,
                n = i.createElement("img");
            return n.onload = n.onerror = function() {
                o.setTimeout(e.resolve, 50)
            }, n.src = t, o.setTimeout(e.reject, a), e.promise
        }
        var i = n(9),
            o = n(7),
            s = n(1),
            a = 2e4;
        t.exports = r
    }, function(t, e, n) {
        function r() {
            return h + l.generate()
        }

        function i() {
            var t = r(),
                e = a.createElement("div"),
                n = a.createElement("style"),
                i = "." + t + " { visibility: hidden; }";
            return !!a.body && (f.asBoolean(c.val("widgets:csp")) && (o = !1), void 0 !== o ? o : (e.style.display = "none", s.add(e, t), n.type = "text/css", n.appendChild(a.createTextNode(i)), a.body.appendChild(n), a.body.appendChild(e), o = "hidden" === u.getComputedStyle(e).visibility, d(e), d(n), o))
        }
        var o, s = n(20),
            a = n(9),
            u = n(7),
            c = n(37),
            d = n(47),
            f = n(25),
            l = n(28),
            h = "csptest";
        t.exports = {
            inlineStyle: i
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            function r() {
                var a = n || this,
                    u = arguments,
                    c = +new Date;
                return i.clearTimeout(o), c - s > e ? (s = c, void t.apply(a, u)) : void(o = i.setTimeout(function() {
                    r.apply(a, u)
                }, e))
            }
            var o, s = 0;
            return n = n || null, r
        }
        var i = n(7);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            c("info", l.toRealArray(arguments))
        }

        function i() {
            c("warn", l.toRealArray(arguments))
        }

        function o() {
            c("error", l.toRealArray(arguments))
        }

        function s(t) {
            m && (p[t] = u())
        }

        function a(t) {
            var e;
            m && (p[t] ? (e = u(), r("_twitter", t, e - p[t])) : o("timeEnd() called before time() for id: ", t))
        }

        function u() {
            return f.performance && +f.performance.now() || +new Date
        }

        function c(t, e) {
            if (f[h] && f[h][t]) switch (e.length) {
                case 1:
                    f[h][t](e[0]);
                    break;
                case 2:
                    f[h][t](e[0], e[1]);
                    break;
                case 3:
                    f[h][t](e[0], e[1], e[2]);
                    break;
                case 4:
                    f[h][t](e[0], e[1], e[2], e[3]);
                    break;
                case 5:
                    f[h][t](e[0], e[1], e[2], e[3], e[4]);
                    break;
                default:
                    0 !== e.length && f[h].warn && f[h].warn("too many params passed to logger." + t)
            }
        }
        var d = n(18),
            f = n(7),
            l = n(11),
            h = ["con", "sole"].join(""),
            p = {},
            m = l.contains(d.href, "tw_debug=true");
        t.exports = {
            info: r,
            warn: i,
            error: o,
            time: s,
            timeEnd: a
        }
    }, function(t, e) {
        function n(t) {
            var e = t.getBoundingClientRect();
            return {
                width: e.width,
                height: e.height
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            t.define("createElement", i), t.define("createFragment", i), t.define("htmlToElement", i), t.define("hasSelectedText", i), t.define("addRootClass", i), t.define("removeRootClass", i), t.define("hasRootClass", i), t.define("prependStyleSheet", i), t.define("appendStyleSheet", i), t.define("prependCss", i), t.define("appendCss", i), t.define("makeVisible", i), t.define("injectWidgetEl", i), t.define("matchHeightToContent", i), t.define("matchWidthToContent", i)
        }
        var i = n(72);
        t.exports = r
    }, function(t, e) {
        function n() {
            throw new Error("unimplemented method")
        }
        t.exports = n
    }, function(t, e, n) {
        function r() {
            u = l.isBucketedCookie(), c = d(), u.then(function(t) {
                a = t
            }), c.then(function(t) {
                var e = void 0 !== a;
                m && e && a !== t.isBucketed && (p = !0), v = !0
            })
        }

        function i() {
            return c.then(function() {
                return p
            })
        }

        function o() {
            var t;
            return m = !0, t = v ? c.then(function(t) {
                return t.isBucketed
            }) : h.always(u).then(function() {
                return v ? c.then(function(t) {
                    return t.isBucketed
                }) : f.resolve(a)
            }), t.catch(function() {
                return !1
            })
        }

        function s() {
            return c.then(function(t) {
                return t.shouldObtainCookieConsent
            })
        }
        var a, u, c, d = n(74),
            f = n(2),
            l = n(78),
            h = n(42),
            p = !1,
            m = !1,
            v = !1;
        t.exports = {
            shouldObtainCookieConsent: s,
            isBucketed: o,
            isUnbucketed: i,
            load: r
        }
    }, function(t, e, n) {
        var r, i = n(75),
            o = n(34),
            s = n(76),
            a = n(31),
            u = n(2),
            c = n(77),
            d = "settings-load";
        t.exports = function() {
            return r || (a.start(d), r = i.request(s.settings()).then(function(t) {
                return a.endAndTrack("load_settings_success", d, "page", {
                    widget_origin: o.rootDocumentLocation(),
                    widget_frame: o.isFramed() && o.currentDocumentLocation()
                }), r = void 0, new c(t.is_bucketed, t.should_obtain_cookie_consent)
            }).catch(function(t) {
                return a.endAndTrack("load_settings_failed", d, "page", {
                    widget_origin: o.rootDocumentLocation(),
                    widget_frame: o.isFramed() && o.currentDocumentLocation()
                }), r = void 0, u.reject(t)
            })), r
        }
    }, function(t, e, n) {
        function r(t, e) {
            var n, r;
            return e = l.aug({}, p, e || {}), n = f.url(t, e.params), r = h.fetch, r ? r(n, e).catch(function() {
                return u.reject(v.NETWORK_ERROR)
            }).then(function(t) {
                if (e.isSuccess(t.status)) return t.text().then(function(e) {
                    var n = t.headers.get("content-type");
                    return e && l.contains(n, m.JSON) ? d.parse(e) : e
                });
                throw new Error("Request failed with status: " + t.status)
            }) : i(n, e)
        }

        function i(t, e) {
            function n() {
                var t = o ? r.contentType : r.getResponseHeader("content-type"),
                    n = l.contains(t, m.JSON) ? s(r.responseText) : r.responseText;
                o || e.isSuccess(r.status) ? i.resolve(n) : o || 0 !== r.status ? i.reject(n) : i.reject(v.NETWORK_ERROR)
            }
            var r, i = new a,
                o = c.ie9(),
                d = o ? h.XDomainRequest : h.XMLHttpRequest;
            return d ? (r = new d, r.onreadystatechange = function() {
                4 === r.readyState && n()
            }, r.onload = n, r.onerror = function() {
                i.reject(v.REQUEST_FAILED)
            }, r.onabort = function() {
                i.reject(v.REQUEST_ABORTED)
            }, r.ontimeout = function() {
                i.reject(v.REQUEST_TIMED_OUT)
            }, r.open(e.method, t), "include" === e.credentials && (r.withCredentials = !0), r.setRequestHeader && l.forIn(e.headers, function(t) {
                r.setRequestHeader(t, e.headers[t])
            }), r.send(), i.promise) : u.reject(v.NO_XHR)
        }

        function o(t) {
            return t >= 200 && t < 300
        }

        function s(t) {
            return t ? d.parse(t) : t
        }
        var a = n(1),
            u = n(2),
            c = n(8),
            d = n(39),
            f = n(24),
            l = n(11),
            h = n(7),
            p = {
                method: "GET",
                params: {},
                headers: {},
                credentials: "include",
                isSuccess: o
            },
            m = {
                JSON: "application/json",
                TEXT: "text/plain"
            },
            v = {
                NO_XHR: new Error("No suitable XHR implementation available."),
                REQUEST_FAILED: new Error("XHR request failed."),
                REQUEST_ABORTED: new Error("XHR request aborted."),
                REQUEST_TIMED_OUT: new Error("XHR request timed out."),
                NETWORK_ERROR: new Error("Network error.")
            };
        t.exports = {
            request: r,
            mimeTypes: m,
            errors: v
        }
    }, function(t, e, n) {
        function r() {
            w.init("backendHost", b)
        }

        function i() {
            w.unset("backendHost", b)
        }

        function o(t) {
            var e = t || [];
            return e.unshift("cookie/consent"), p(E(), e)
        }

        function s(t) {
            var e = t || [];
            return e.unshift("settings"), p(E(), e)
        }

        function a(t) {
            var e = t || [];
            return e.unshift("video/event"), p(_(), e)
        }

        function u(t) {
            var e = t || [];
            return e.unshift("grid/collection"), p(_(), e)
        }

        function c(t) {
            var e = t || [];
            return e.unshift("moments"), p(_(), e)
        }

        function d(t) {
            var e = t || [];
            return e.unshift("timeline"), p(_(), e)
        }

        function f(t) {
            var e = t || [];
            return e.unshift("widgets/timelines"), p(_(), e)
        }

        function l(t) {
            var e = t || [];
            return e.unshift("https://platform.twitter.com/tweets.json"), p(_(), e)
        }

        function h(t) {
            var e = t || [];
            return e.unshift("widgets/video"), p(_(), e)
        }

        function p(t, e) {
            var n = [t];
            return e.forEach(function(t) {
                n.push(m(t))
            }), n.join("/")
        }

        function m(t) {
            var e = (t || "").toString(),
                n = v(e) ? 1 : 0,
                r = g(e) ? -1 : void 0;
            return e.slice(n, r)
        }

        function v(t) {
            return "/" === t.slice(0, 1)
        }

        function g(t) {
            return "/" === t.slice(-1)
        }
        var w = n(16),
            y = "https://cdn.syndication.twimg.com",
            b = "https://syndication.twitter.com",
            _ = function() {
                return w.get("backendHost") || y
            },
            E = function() {
                return w.get("settingsSvcHost") || b
            };
        t.exports = {
            cookieConsent: o,
            disableCDN: r,
            enableCDN: i,
            eventVideo: a,
            grid: u,
            moment: c,
            settings: s,
            timeline: d,
            timelinePreconfigured: f,
            tweetBatch: l,
            video: h
        }
    }, function(t, e) {
        function n(t, e) {
            this.isBucketed = t, this.shouldObtainCookieConsent = e
        }
        t.exports = n
    }, function(t, e, n) {
        function r() {
            var t, e, n, r, i, y, b = new s;
            return m.ie9() || m.ie10() || "http:" !== d.protocol && "https:" !== d.protocol ? (b.resolve({}), b.promise) : (f.start(w), t = {
                namespace: g,
                origin: d.origin
            }, e = h.url("https://" + l.get("host") + "/widgets/twitter_cookies.html", t), n = setTimeout(function() {
                r(), f.endAndTrack("load_cookies_timed_out", w, "page", {
                    widget_origin: a.rootDocumentLocation(),
                    widget_frame: a.isFramed() && a.currentDocumentLocation()
                })
            }, v), r = function(t) {
                b.resolve(t || {}), p.removeEventListener("message", i), u.body.removeChild(y)
            }, i = function(t) {
                var i;
                if (e.substr(0, t.origin.length) === t.origin) try {
                    i = c.parse(t.data), i && i.namespace === g && (r(i.cookies), clearTimeout(n), f.endAndTrack("load_cookies_success", w, "page", {
                        widget_origin: a.rootDocumentLocation(),
                        widget_frame: a.isFramed() && a.currentDocumentLocation()
                    }))
                } catch (t) {}
            }, p.addEventListener("message", i), y = o({
                src: e
            }, {
                display: "none"
            }), u.body.appendChild(y), b.promise)
        }

        function i() {
            return r().then(function(t) {
                return "1" === t.tfw_exp
            })
        }
        var o = n(53),
            s = n(1),
            a = n(34),
            u = n(9),
            c = n(39),
            d = n(18),
            f = n(31),
            l = n(16),
            h = n(24),
            p = n(7),
            m = n(8),
            v = 400,
            g = "twttr:cookies",
            w = "cookie-iframe-load";
        t.exports = {
            getTwitterCookies: r,
            isBucketedCookie: i
        }
    }, function(t, e, n) {
        function r(t, e) {
            this._inputsQueue = [], this._task = t, this._isPaused = !1, this._flushDelay = e && e.flushDelay || s, this._pauseLength = e && e.pauseLength || a, this._flushTimeout = void 0
        }
        var i = n(1),
            o = n(13),
            s = 100,
            a = 3e3;
        r.prototype.add = function(t) {
            var e = new i;
            return this._inputsQueue.push({
                input: t,
                taskDoneDeferred: e
            }), this._scheduleFlush(), e.promise
        }, r.prototype._scheduleFlush = function() {
            this._isPaused || (clearTimeout(this._flushTimeout), this._flushTimeout = setTimeout(o(this._flush, this), this._flushDelay))
        }, r.prototype._flush = function() {
            try {
                this._task.call(null, this._inputsQueue)
            } catch (t) {
                this._inputsQueue.forEach(function(e) {
                    e.taskDoneDeferred.reject(t)
                })
            }
            this._inputsQueue = [], this._flushTimeout = void 0
        }, r.prototype.pause = function(t) {
            clearTimeout(this._flushTimeout), this._isPaused = !0, !t && this._pauseLength && setTimeout(o(this.resume, this), this._pauseLength)
        }, r.prototype.resume = function() {
            this._isPaused = !1, this._scheduleFlush()
        }, t.exports = r
    }, function(t, e, n) {
        t.exports = [n(81), n(114), n(130), n(162), n(173), n(179), n(224), n(235), n(240)]
    }, function(t, e, n) {
        function r(t) {
            var e = t.getAttribute("data-show-screen-name"),
                n = u(t),
                r = t.getAttribute("href"),
                i = t.getAttribute("data-screen-name"),
                c = e ? s.asBoolean(e) : null,
                d = t.getAttribute("data-size"),
                f = o.decodeURL(r),
                l = f.recipient_id,
                h = t.getAttribute("data-text") || f.text,
                p = t.getAttribute("data-welcome-message-id") || f.welcomeMessageId;
            return a.aug(n, {
                screenName: i,
                showScreenName: c,
                size: d,
                text: h,
                userId: l,
                welcomeMessageId: p
            })
        }

        function i(t) {
            var e = c(t, f);
            return e.map(function(t) {
                return d(r(t), t.parentNode, t)
            })
        }
        var o = n(24),
            s = n(25),
            a = n(11),
            u = n(82),
            c = n(84)(),
            d = n(87),
            f = "a.twitter-dm-button";
        t.exports = i
    }, function(t, e, n) {
        function r(t) {
            var e = t.href && t.href.split("?")[1],
                n = e ? s.decode(e) : {},
                r = {
                    lang: u(t),
                    width: t.getAttribute("data-width") || t.getAttribute("width"),
                    height: t.getAttribute("data-height") || t.getAttribute("height"),
                    related: t.getAttribute("data-related"),
                    partner: t.getAttribute("data-partner")
                };
            return o.asBoolean(t.getAttribute("data-dnt")) && i.setOn(), a.forIn(r, function(t, e) {
                var r = n[t];
                n[t] = o.hasValue(r) ? r : e
            }), n
        }
        var i = n(33),
            o = n(25),
            s = n(24),
            a = n(11),
            u = n(83);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e;
            if (t) return e = t.lang || t.getAttribute("data-lang"), i.isType("string", e) ? e : r(t.parentElement)
        }
        var i = n(11);
        t.exports = r
    }, function(t, e, n) {
        var r = n(85),
            i = n(28);
        t.exports = function() {
            var t = "data-twitter-extracted-" + i.generate();
            return function(e, n) {
                function i(e) {
                    return !e.hasAttribute(t)
                }

                function o(e) {
                    return e.setAttribute(t, "true"), e
                }
                return r(e, n).filter(i).map(o)
            }
        }
    }, function(t, e, n) {
        function r(t, e) {
            return o(t, e) ? [t] : i.toRealArray(t.querySelectorAll(e))
        }
        var i = n(11),
            o = n(86);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            if (s) return s.call(t, e)
        }
        var i = n(7),
            o = i.HTMLElement,
            s = o.prototype.matches || o.prototype.matchesSelector || o.prototype.webkitMatchesSelector || o.prototype.mozMatchesSelector || o.prototype.msMatchesSelector || o.prototype.oMatchesSelector;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, s, "twitter-dm-button", t, e, n)
        }
        var i = n(88),
            o = n(89),
            s = n(110);
        t.exports = r
    }, function(t, e) {
        function n(t, e, n, r, i, o) {
            this.factory = t, this.Sandbox = e, this.srcEl = o, this.targetEl = i, this.parameters = r, this.className = n
        }
        n.prototype.destroy = function() {
            this.srcEl = this.targetEl = null
        }, t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(1, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(90), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , function(t, e, n) {
        var r = n(56),
            i = n(92),
            o = n(13);
        r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
    }, function(t, e, n) {
        function r() {
            i.apply(this, arguments), this.Widget = this.Component
        }
        var i = n(60),
            o = n(11),
            s = n(93);
        r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
            factory: s,
            build: function() {
                var t = i.prototype.build.apply(this, arguments);
                return t
            },
            selectors: function(t) {
                var e = this.Widget.prototype.selectors;
                t = t || {}, this.Widget.prototype.selectors = o.aug({}, t, e)
            }
        }), t.exports = r
    }, function(t, e, n) {
        function r() {
            function t(t, n) {
                e.apply(this, arguments), this.id = d + c(), this.sandbox = n
            }
            var e = s();
            return t.prototype = Object.create(e.prototype), a.aug(t.prototype, {
                selectors: {},
                hydrate: function() {
                    return i.resolve()
                },
                prepForInsertion: function() {},
                render: function() {
                    return i.resolve()
                },
                show: function() {
                    return i.resolve()
                },
                resize: function() {
                    return i.resolve()
                },
                select: function(t, e) {
                    return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, a.toRealArray(t.querySelectorAll(e))) : []
                },
                selectOne: function() {
                    return this.select.apply(this, arguments)[0]
                },
                selectLast: function() {
                    return this.select.apply(this, arguments).pop()
                },
                on: function(t, e, n) {
                    function r(t) {
                        a.addEventListener(t, n, !1)
                    }

                    function i(t) {
                        o.delegate(a, t, s, n)
                    }
                    var s, a = this.el;
                    this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? n = e : s = e, s = this.selectors[s] || s, n = u(n, this), t.forEach(s ? i : r))
                }
            }), t
        }
        var i = n(2),
            o = n(19),
            s = n(62),
            a = n(11),
            u = n(13),
            c = n(94),
            d = "twitter-widget-";
        t.exports = r
    }, function(t, e) {
        function n() {
            return String(r++)
        }
        var r = 0;
        t.exports = n
    }, , function(t, e, n) {
        function r(t) {
            return "dark" === t ? "dark" : "light"
        }

        function i(t, e, n) {
            var i, o;
            return n = r(n), i = a.isRtlLang(e) ? "rtl" : "ltr", o = [t, c.css, n, i, "css"].join("."), u.base() + "/css/" + o
        }

        function o() {
            return u.base() + "/css/" + ["periscope_on_air", c.css, "css"].join(".")
        }

        function s() {
            return u.base() + "/css/" + ["dm_button", c.css, "css"].join(".")
        }
        var a = n(97),
            u = n(100),
            c = n(101),
            d = n(13);
        t.exports = {
            dmButton: s,
            tweet: d(i, null, "tweet"),
            timeline: d(i, null, "timeline"),
            video: d(i, null, "video"),
            moment: d(i, null, "moment"),
            grid: d(i, null, "grid"),
            periscopeOnAir: o
        }
    }, function(t, e, n) {
        function r(t) {
            return t = String(t).toLowerCase(), o.contains(a, t)
        }

        function i(t) {
            return t = (t || "").toLowerCase(), t = t.replace("_", "-"), s(t) ? t : (t = t.replace(/-.*/, ""), s(t) ? t : "en")
        }
        var o = n(11),
            s = n(98),
            a = ["ar", "fa", "he", "ur"];
        t.exports = {
            isRtlLang: r,
            matchLanguage: i
        }
    }, function(t, e, n) {
        function r(t) {
            return "en" === t || i.contains(o, t)
        }
        var i = n(11),
            o = n(99);
        t.exports = r
    }, function(t, e) {
        t.exports = ["hi", "zh-cn", "fr", "zh-tw", "msa", "fil", "fi", "sv", "pl", "ja", "ko", "de", "it", "pt", "es", "ru", "id", "tr", "da", "no", "nl", "hu", "fa", "ar", "ur", "he", "th", "cs", "uk", "vi", "ro", "bn", "el", "en-gb", "gu", "kn", "mr", "ta", "bg", "ca", "hr", "sr", "sk"]
    }, function(t, e, n) {
        function r(t) {
            var e = s.get("host");
            return i(t) + "://" + e
        }
        var i, o = n(18),
            s = n(16);
        i = function() {
            return /^http:$/.test(o.protocol) ? function(t) {
                return t ? "https" : "http"
            } : function() {
                return "https"
            }
        }(), t.exports = {
            base: r
        }
    }, function(t, e) {
        t.exports = {
            css: "6ca4ddceb51c98199a0b1f03f7ae4215"
        }
    }, , function(t, e, n) {
        function r(t) {
            t.define("injectRefUrlParams", function(t) {
                t.getAttribute(s) || (t.setAttribute(s, !0), t.href = i(t.href))
            }), t.after("render", function() {
                this.on("click", "A", function(t, e) {
                    o.isTwitterURL(e.href) && this.injectRefUrlParams(e)
                })
            })
        }
        var i = n(104),
            o = n(23),
            s = "data-url-ref-attrs-injected";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return i.url(t, {
                ref_src: s,
                ref_url: o.rootDocumentLocation()
            })
        }
        var i = n(24),
            o = n(34),
            s = "twsrc^tfw";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.define("scribeItems", function() {
                return {}
            }), t.define("scribeNamespace", function() {
                return {
                    client: "tfw"
                }
            }), t.define("scribeData", function() {
                return {
                    widget_origin: s.rootDocumentLocation(),
                    widget_frame: s.isFramed() && s.currentDocumentLocation()
                }
            }), t.define("scribe", function(t, e, n) {
                t = a.aug(this.scribeNamespace(), t || {}), e = a.aug(this.scribeData(), e || {}), i.scribe(t, e, !1, n)
            }), t.define("scribeInteraction", function(t, e, n) {
                var r = o.extractTermsFromDOM(t.target);
                r.action = t.type, this.scribe(r, e, n)
            })
        }
        var i = n(50),
            o = n(38),
            s = n(34),
            a = n(11);
        t.exports = r
    }, , function(t, e, n) {
        function r(t) {
            var e;
            if (t) return e = a([t]), {
                item_ids: Object.keys(e),
                item_details: e
            }
        }

        function i(t) {
            t.selectors({
                tweetIdInfo: ".js-tweetIdInfo"
            }), t.define("scribeClickInteraction", function(t, e) {
                var n = o.closest(this.selectors.tweetIdInfo, e, this.el);
                this.scribeInteraction(t, r(n))
            }), t.after("render", function() {
                this.on("click", "A", this.scribeClickInteraction), this.on("click", "BUTTON", this.scribeClickInteraction)
            })
        }
        var o = n(21),
            s = n(91),
            a = n(108);
        t.exports = s.couple(n(105), i)
    }, function(t, e, n) {
        function r(t) {
            return t ? (t = Array.isArray(t) ? t : [t], t.reduce(function(t, e) {
                var n = e.getAttribute("data-tweet-id"),
                    r = e.getAttribute("data-rendered-tweet-id") || n;
                return n === r ? t[r] = {
                    item_type: i.TWEET
                } : n && (t[r] = {
                    item_type: i.RETWEET,
                    target_type: i.TWEET,
                    target_id: n
                }), t
            }, {})) : {}
        }
        var i = n(109);
        t.exports = r
    }, function(t, e) {
        t.exports = {
            TWEET: 0,
            RETWEET: 10,
            CUSTOM_TIMELINE: 17,
            LIVE_VIDEO_EVENT: 28
        }
    }, function(t, e, n) {
        var r = n(111),
            i = n(54);
        t.exports = r.isSupported() ? r : i
    }, function(t, e, n) {
        var r = n(55),
            i = n(112);
        t.exports = r.build([i])
    }, function(t, e, n) {
        function r(t) {
            t.defineStatic("isSupported", function() {
                return !!o.HTMLElement.prototype.createShadowRoot && l.inlineStyle() && !h.android()
            }), t.overrideProperty("id", {
                get: function() {
                    return this.sandboxEl && this.sandboxEl.id
                }
            }), t.overrideProperty("initialized", {
                get: function() {
                    return !!this._shadowHost
                }
            }), t.overrideProperty("width", {
                get: function() {
                    return this._width
                }
            }), t.overrideProperty("height", {
                get: function() {
                    return this._height
                }
            }), t.overrideProperty("sandboxEl", {
                get: function() {
                    return this._shadowHost
                }
            }), t.define("_updateCachedDimensions", function() {
                var t = this;
                return u.read(function() {
                    var e, n = p(t.sandboxEl);
                    "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = p(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
                })
            }), t.define("_didResize", function() {
                var t = this,
                    e = this._resizeHandlers.slice(0);
                return this._updateCachedDimensions().then(function() {
                    e.forEach(function(e) {
                        e(t)
                    })
                })
            }), t.override("createElement", function(t) {
                return this.targetGlobal.document.createElement(t)
            }), t.override("createFragment", function() {
                return this.targetGlobal.document.createDocumentFragment()
            }), t.override("htmlToElement", function(t) {
                var e;
                return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild
            }), t.override("hasSelectedText", function() {
                return !!c.getSelectedText(this.targetGlobal)
            }), t.override("addRootClass", function(t) {
                var e = this._shadowRootBody;
                return t = Array.isArray(t) ? t : [t], this.initialized ? u.write(function() {
                    t.forEach(function(t) {
                        s.add(e, t)
                    })
                }) : g.reject(new Error("sandbox not initialized"))
            }), t.override("removeRootClass", function(t) {
                var e = this._shadowRootBody;
                return t = Array.isArray(t) ? t : [t], this.initialized ? u.write(function() {
                    t.forEach(function(t) {
                        s.remove(e, t)
                    })
                }) : g.reject(new Error("sandbox not initialized"))
            }), t.override("hasRootClass", function(t) {
                return s.present(this._shadowRootBody, t)
            }), t.override("addStyleSheet", function(t, e) {
                return this.addCss('@import url("' + t + '");', e).then(function() {
                    return f(t)
                })
            }), t.override("prependStyleSheet", function(t) {
                var e = this._shadowRoot;
                return this.addStyleSheet(t, function(t) {
                    var n = e.firstElementChild;
                    return n ? e.insertBefore(t, n) : e.appendChild(t)
                })
            }), t.override("appendStyleSheet", function(t) {
                var e = this._shadowRoot;
                return this.addStyleSheet(t, function(t) {
                    return e.appendChild(t)
                })
            }), t.override("addCss", function(t, e) {
                var n;
                return this.initialized ? l.inlineStyle() ? (n = this.createElement("style"), n.type = "text/css", n.appendChild(this.targetGlobal.document.createTextNode(t)), u.write(m(e, null, n))) : g.resolve() : g.reject(new Error("sandbox not initialized"))
            }), t.override("prependCss", function(t) {
                var e = this._shadowRoot;
                return this.addCss(t, function(t) {
                    var n = e.firstElementChild;
                    return n ? e.insertBefore(t, n) : e.appendChild(t)
                })
            }), t.override("appendCss", function(t) {
                var e = this._shadowRoot;
                return this.addCss(t, function(t) {
                    return e.appendChild(t)
                })
            }), t.override("makeVisible", function() {
                return this.styleSelf(_)
            }), t.override("injectWidgetEl", function(t) {
                function e() {
                    var t = v(n._didResize, y, n);
                    new i(n._shadowRootBody, t)
                }
                var n = this;
                return this.initialized ? this._shadowRootBody.firstElementChild ? g.reject(new Error("widget already injected")) : u.write(function() {
                    n._shadowRootBody.appendChild(t)
                }).then(function() {
                    return n._updateCachedDimensions()
                }).then(e) : g.reject(new Error("sandbox not initialized"))
            }), t.override("matchHeightToContent", function() {
                return g.resolve()
            }), t.override("matchWidthToContent", function() {
                return g.resolve()
            }), t.override("insert", function(t, e, n, r) {
                var i = this.targetGlobal.document,
                    o = this._shadowHost = i.createElement(E),
                    s = this._shadowRoot = o.createShadowRoot(),
                    c = this._shadowRootBody = i.createElement("div");
                return w.forIn(e || {}, function(t, e) {
                    o.setAttribute(t, e)
                }), o.id = t, s.appendChild(c), a.delegate(c, "click", "A", function(t, e) {
                    e.hasAttribute("target") || e.setAttribute("target", "_blank")
                }), g.all([this.styleSelf(b), this.addRootClass(x), this.prependCss(T), u.write(r.bind(null, o))])
            }), t.override("onResize", function(t) {
                this._resizeHandlers.push(t)
            }), t.after("initialize", function() {
                this._shadowHost = this._shadowRoot = this._shadowRootBody = null, this._width = this._height = 0, this._resizeHandlers = []
            }), t.after("styleSelf", function() {
                return this._updateCachedDimensions()
            })
        }
        var i = n(113),
            o = n(7),
            s = n(20),
            a = n(19),
            u = n(45),
            c = n(65),
            d = n(55),
            f = n(66),
            l = n(67),
            h = n(8),
            p = n(70),
            m = n(13),
            v = n(68),
            g = n(2),
            w = n(11),
            y = 50,
            b = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
                transform: "rotate(0deg)"
            },
            _ = {
                position: "static",
                visibility: "visible"
            },
            E = "twitterwidget",
            x = "SandboxRoot",
            T = ".SandboxRoot { display: none; }";
        t.exports = d.couple(n(71), r)
    }, function(t, e) {
        ! function() {
            var e = function(t, n) {
                function r() {
                    this.q = [], this.add = function(t) {
                        this.q.push(t)
                    };
                    var t, e;
                    this.call = function() {
                        for (t = 0, e = this.q.length; t < e; t++) this.q[t].call()
                    }
                }

                function i(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(e) : t.style[e]
                }

                function o(t, e) {
                    if (t.resizedAttached) {
                        if (t.resizedAttached) return void t.resizedAttached.add(e)
                    } else t.resizedAttached = new r, t.resizedAttached.add(e);
                    t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
                    var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                        o = "position: absolute; left: 0; top: 0; transition: 0s;";
                    t.resizeSensor.style.cssText = n, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', t.appendChild(t.resizeSensor), {
                        fixed: 1,
                        absolute: 1
                    }[i(t, "position")] || (t.style.position = "relative");
                    var s, a, u = t.resizeSensor.childNodes[0],
                        c = u.childNodes[0],
                        d = t.resizeSensor.childNodes[1],
                        f = (d.childNodes[0], function() {
                            c.style.width = u.offsetWidth + 10 + "px", c.style.height = u.offsetHeight + 10 + "px", u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, d.scrollLeft = d.scrollWidth, d.scrollTop = d.scrollHeight, s = t.offsetWidth, a = t.offsetHeight
                        });
                    f();
                    var l = function() {
                            t.resizedAttached && t.resizedAttached.call()
                        },
                        h = function(t, e, n) {
                            t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener(e, n)
                        },
                        p = function() {
                            t.offsetWidth == s && t.offsetHeight == a || l(), f()
                        };
                    h(u, "scroll", p), h(d, "scroll", p)
                }
                var s = Object.prototype.toString.call(t),
                    a = "[object Array]" === s || "[object NodeList]" === s || "[object HTMLCollection]" === s || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
                if (a)
                    for (var u = 0, c = t.length; u < c; u++) o(t[u], n);
                else o(t, n);
                this.detach = function() {
                    if (a)
                        for (var n = 0, r = t.length; n < r; n++) e.detach(t[n]);
                    else e.detach(t)
                }
            };
            e.detach = function(t) {
                t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached)
            }, "undefined" != typeof t && "undefined" != typeof t.exports ? t.exports = e : window.ResizeSensor = e
        }()
    }, function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = {
                    screenName: o.screenName(t.href),
                    showScreenName: "false" !== t.getAttribute("data-show-screen-name"),
                    showCount: "false" !== t.getAttribute("data-show-count"),
                    size: t.getAttribute("data-size"),
                    count: t.getAttribute("data-count"),
                    preview: t.getAttribute("data-preview")
                };
            return s.forIn(n, function(t, n) {
                var r = e[t];
                e[t] = d.hasValue(r) ? r : n
            }), e.screenName = e.screenName || e.screen_name, e
        }

        function i(t) {
            var e = u(t, f);
            return e.map(function(t) {
                return c(r(t), t.parentNode, t)
            })
        }
        var o = n(23),
            s = n(11),
            a = n(82),
            u = n(84)(),
            c = n(115),
            d = n(25),
            f = "a.twitter-follow-button";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, s, "twitter-follow-button", t, e, n)
        }
        var i = n(88),
            o = n(116),
            s = n(122);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(2, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(117), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , , function(t, e, n) {
        function r(t) {
            t.define("widgetDataAttributes", function() {
                return {}
            }), t.define("setDataAttributes", function() {
                var t = this.sandbox.sandboxEl;
                o.forIn(this.widgetDataAttributes(), function(e, n) {
                    i.hasValue(n) && t.setAttribute("data-" + e, n)
                })
            }), t.after("render", function() {
                this.setDataAttributes()
            })
        }
        var i = n(25),
            o = n(11);
        t.exports = r
    }, function(t, e, n) {
        var r = n(55),
            i = n(123);
        t.exports = r.build([i])
    }, function(t, e, n) {
        function r(t) {
            t.overrideProperty("id", {
                get: function() {
                    return this.sandboxEl && this.sandboxEl.id
                }
            }), t.overrideProperty("initialized", {
                get: function() {
                    return !!this.iframeEl
                }
            }), t.overrideProperty("width", {
                get: function() {
                    return this._width
                }
            }), t.overrideProperty("height", {
                get: function() {
                    return this._height
                }
            }), t.overrideProperty("sandboxEl", {
                get: function() {
                    return this.iframeEl
                }
            }), t.defineProperty("iframeEl", {
                get: function() {
                    return this._iframe
                }
            }), t.define("updateCachedDimensions", function() {
                var t = this;
                return this.initialized ? i.read(function() {
                    t._width = t.sandboxEl.offsetWidth, t._height = t.sandboxEl.offsetHeight
                }) : c.resolve()
            }), t.define("setTitle", function(t) {
                this.iframeEl.title = t
            }), t.define("makeVisible", function() {
                return this.styleSelf(h)
            }), t.define("didResize", function() {
                var t = this,
                    e = t._resizeHandlers.length > 0;
                return this.updateCachedDimensions().then(function() {
                    e && t._resizeHandlers.forEach(function(e) {
                        e(t)
                    })
                })
            }), t.define("loadDocument", function(t) {
                var e = new u;
                return this.initialized ? this.iframeEl.src ? c.reject(new Error("widget already loaded")) : (this.iframeEl.addEventListener("load", e.resolve, !1), this.iframeEl.addEventListener("error", e.reject, !1), this.iframeEl.src = t, e.promise) : c.reject(new Error("sandbox not initialized"))
            }), t.after("initialize", function() {
                this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
            }), t.override("insert", function(t, e, n, r) {
                var o = this;
                return e = f.aug({
                    id: t
                }, e), n = f.aug({}, l, n), this._iframe = a(e, n), p[t] = this, this.onResize(s(function() {
                    o.makeVisible()
                })), i.write(d(r, null, this._iframe))
            }), t.override("onResize", function(t) {
                this._resizeHandlers.push(t)
            }), t.after("styleSelf", function() {
                return this.updateCachedDimensions()
            })
        }
        var i = n(45),
            o = n(124),
            s = n(129),
            a = n(53),
            u = n(1),
            c = n(2),
            d = n(13),
            f = n(11),
            l = {
                position: "absolute",
                visibility: "hidden",
                width: "0px",
                height: "0px"
            },
            h = {
                position: "static",
                visibility: "visible"
            },
            p = {};
        o(function(t, e, n) {
            var r = p[t];
            if (r) return r.styleSelf({
                width: e + "px",
                height: n + "px"
            }).then(function() {
                r.didResize()
            })
        }), t.exports = r
    }, function(t, e, n) {
        function r(t) {
            (new o).attachReceiver(new s.Receiver(i, "twttr.button")).bind("twttr.private.trigger", function(t, e) {
                var n = c(this);
                a.trigger(t, {
                    target: n,
                    region: e,
                    type: t,
                    data: {}
                })
            }).bind("twttr.private.resizeButton", function(e) {
                var n = c(this),
                    r = n && n.id,
                    i = u.asInt(e.width),
                    o = u.asInt(e.height);
                r && i && o && t(r, i, o)
            })
        }
        var i = n(7),
            o = n(125),
            s = n(127),
            a = n(29),
            u = n(25),
            c = n(128);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            this.registry = t || {}
        }

        function i(t) {
            return h.isType("string", t) ? f.parse(t) : t
        }

        function o(t) {
            var e, n, r;
            return !!h.isObject(t) && (e = t.jsonrpc === v, n = h.isType("string", t.method), r = !("id" in t) || s(t.id), e && n && r)
        }

        function s(t) {
            var e, n, r;
            return e = h.isType("string", t), n = h.isType("number", t), r = null === t, e || n || r
        }

        function a(t) {
            return h.isObject(t) && !h.isType("function", t)
        }

        function u(t, e) {
            return {
                jsonrpc: v,
                id: t,
                result: e
            }
        }

        function c(t, e) {
            return {
                jsonrpc: v,
                id: s(t) ? t : null,
                error: e
            }
        }

        function d(t) {
            return p.all(t).then(function(t) {
                return t = t.filter(function(t) {
                    return void 0 !== t
                }), t.length ? t : void 0
            })
        }
        var f = n(39),
            l = n(126),
            h = n(11),
            p = n(2),
            m = n(42),
            v = "2.0";
        r.prototype._invoke = function(t, e) {
            var n, r, i;
            n = this.registry[t.method], r = t.params || [], r = h.isType("array", r) ? r : [r];
            try {
                i = n.apply(e.source || null, r)
            } catch (t) {
                i = p.reject(t.message)
            }
            return m.isPromise(i) ? i : p.resolve(i)
        }, r.prototype._processRequest = function(t, e) {
            function n(e) {
                return u(t.id, e)
            }

            function r() {
                return c(t.id, l.INTERNAL_ERROR)
            }
            var i;
            return o(t) ? (i = "params" in t && !a(t.params) ? p.resolve(c(t.id, l.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, {
                source: e
            }).then(n, r) : p.resolve(c(t.id, l.METHOD_NOT_FOUND)), null != t.id ? i : p.resolve()) : p.resolve(c(t.id, l.INVALID_REQUEST))
        }, r.prototype.attachReceiver = function(t) {
            return t.attachTo(this), this
        }, r.prototype.bind = function(t, e) {
            return this.registry[t] = e, this
        }, r.prototype.receive = function(t, e) {
            var n, r, o, s = this;
            try {
                t = i(t)
            } catch (t) {
                return p.resolve(c(null, l.PARSE_ERROR))
            }
            return e = e || null, n = h.isType("array", t), r = n ? t : [t], o = r.map(function(t) {
                return s._processRequest(t, e)
            }), n ? d(o) : o[0]
        }, t.exports = r
    }, function(t, e) {
        t.exports = {
            PARSE_ERROR: {
                code: -32700,
                message: "Parse error"
            },
            INVALID_REQUEST: {
                code: -32600,
                message: "Invalid Request"
            },
            INVALID_PARAMS: {
                code: -32602,
                message: "Invalid params"
            },
            METHOD_NOT_FOUND: {
                code: -32601,
                message: "Method not found"
            },
            INTERNAL_ERROR: {
                code: -32603,
                message: "Internal error"
            }
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            var r;
            t && t.postMessage && (g ? r = (n || "") + f.stringify(e) : n ? (r = {}, r[n] = e) : r = e, t.postMessage(r, "*"))
        }

        function i(t) {
            return p.isType("string", t) ? t : "JSONRPC"
        }

        function o(t, e) {
            return e ? p.isType("string", t) && 0 === t.indexOf(e) ? t.substring(e.length) : t[e] ? t[e] : void 0 : t
        }

        function s(t, e) {
            var n = t.document;
            this.filter = i(e), this.server = null, this.isTwitterFrame = m.isTwitterURL(n.location.href), t.addEventListener("message", v(this._onMessage, this), !1)
        }

        function a(t, e) {
            this.pending = {}, this.target = t, this.isTwitterHost = m.isTwitterURL(c.href), this.filter = i(e), d.addEventListener("message", v(this._onMessage, this), !1)
        }

        function u(t) {
            return arguments.length > 0 && (g = !!t), g
        }
        var c = n(18),
            d = n(7),
            f = n(39),
            l = n(1),
            h = n(8),
            p = n(11),
            m = n(23),
            v = n(13),
            g = h.ie9();
        p.aug(s.prototype, {
            _onMessage: function(t) {
                var e, n = this;
                this.server && (this.isTwitterFrame && !m.isTwitterURL(t.origin) || (e = o(t.data, this.filter), e && this.server.receive(e, t.source).then(function(e) {
                    e && r(t.source, e, n.filter)
                })))
            },
            attachTo: function(t) {
                this.server = t
            },
            detach: function() {
                this.server = null
            }
        }), p.aug(a.prototype, {
            _processResponse: function(t) {
                var e = this.pending[t.id];
                e && (e.resolve(t), delete this.pending[t.id])
            },
            _onMessage: function(t) {
                var e;
                if ((!this.isTwitterHost || m.isTwitterURL(t.origin)) && (e = o(t.data, this.filter))) {
                    if (p.isType("string", e)) try {
                        e = f.parse(e)
                    } catch (t) {
                        return
                    }
                    e = p.isType("array", e) ? e : [e], e.forEach(v(this._processResponse, this))
                }
            },
            send: function(t) {
                var e = new l;
                return t.id ? this.pending[t.id] = e : e.resolve(), r(this.target, t, this.filter), e.promise
            }
        }), t.exports = {
            Receiver: s,
            Dispatcher: a,
            _stringifyPayload: u
        }
    }, function(t, e, n) {
        function r(t) {
            for (var e, n = i.getElementsByTagName("iframe"), r = 0; n[r]; r++)
                if (e = n[r], e.contentWindow === t) return e
        }
        var i = n(9);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e, n = !1;
            return function() {
                return n ? e : (n = !0, e = t.apply(this, arguments))
            }
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = u(t),
                n = {
                    collectionId: a.collectionId(t.href),
                    chrome: t.getAttribute("data-chrome"),
                    limit: t.getAttribute("data-limit")
                };
            return s.forIn(n, function(t, n) {
                var r = e[t];
                e[t] = o.hasValue(r) ? r : n
            }), e
        }

        function i(t) {
            var e = c(t, f);
            return e.map(function(t) {
                return d(r(t), t.parentNode, t)
            })
        }
        var o = n(25),
            s = n(11),
            a = n(23),
            u = n(82),
            c = n(84)(),
            d = n(131),
            f = "a.twitter-grid";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, s, "twitter-grid", t, e, n)
        }
        var i = n(88),
            o = n(132),
            s = n(54);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(3, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(133), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , function(t, e, n) {
        function r(t) {
            if (t) return t.replace(/[^\w$]/g, "_")
        }

        function i() {
            return f + l++
        }

        function o(t, e, n, o) {
            var f, l, h;
            return o = r(o || i()), f = a.fullPath(["callbacks", o]), l = s.createElement("script"), h = new u, e = c.aug({}, e, {
                callback: f,
                suppress_response_codes: !0
            }), a.set(["callbacks", o], function(t) {
                var e, r;
                e = n(t || !1), t = e.resp, r = e.success, r ? h.resolve(t) : h.reject(t), l.onload = l.onreadystatechange = null, l.parentNode && l.parentNode.removeChild(l), a.unset(["callbacks", o])
            }), l.onerror = function() {
                h.reject(new Error("failed to fetch " + l.src))
            }, l.src = d.url(t, e), l.async = "async", s.body.appendChild(l), h.promise
        }
        var s = n(9),
            a = n(16),
            u = n(1),
            c = n(11),
            d = n(24),
            f = "cb",
            l = 0;
        t.exports = {
            fetch: o
        }
    }, function(t, e, n) {
        function r(t) {
            var e, n;
            return e = t.headers && t.headers.status, n = t && !t.error && 200 === e, !n && t.headers && t.headers.message && i.warn(t.headers.message), {
                success: n,
                resp: t
            }
        }
        var i = n(69);
        t.exports = r
    }, function(t, e) {
        function n() {
            var t = (new Date).toString().match(/(GMT[+-]?\d+)/);
            return t && t[0] || "GMT"
        }
        t.exports = {
            getTimezoneOffset: n
        }
    }, function(t, e) {
        function n() {
            var t = 9e5;
            return Math.floor(+new Date / t)
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(9),
            i = n(25),
            o = r.createElement("div");
        t.exports = function(t) {
            return i.isNumber(t) && (t += "px"), o.style.width = "", o.style.width = t, o.style.width || null
        }
    }, function(t, e, n) {
        function r(t) {
            t.after("prepForInsertion", function(t) {
                o.sizeIframes(t, this.sandbox.width, s, i.sync)
            }), t.after("resize", function() {
                o.sizeIframes(this.el, this.sandbox.width, s, i.write)
            })
        }
        var i = n(45),
            o = n(142),
            s = 375;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = t.split(" ");
            this.url = decodeURIComponent(e[0].trim()), this.width = +e[1].replace(/w$/, "").trim()
        }

        function i(t, e, n) {
            var i, o, s, a;
            if (t = h.devicePixelRatio ? t * h.devicePixelRatio : t, o = e.split(",").map(function(t) {
                    return new r(t.trim())
                }), n)
                for (a = 0; a < o.length; a++) o[a].url === n && (i = o[a]);
            return s = o.reduce(function(e, n) {
                return n.width < e.width && n.width >= t ? n : e
            }, o[0]), i && i.width > s.width ? i : s
        }

        function o(t, e) {
            var n, r = t.getAttribute("data-srcset"),
                o = t.src;
            r && (n = i(e, r, o), t.src = n.url)
        }

        function s(t, e) {
            e = void 0 !== e ? !!e : v.retina(), p.toRealArray(t.getElementsByTagName("IMG")).forEach(function(t) {
                var n = t.getAttribute("data-src-1x") || t.getAttribute("src"),
                    r = t.getAttribute("data-src-2x");
                e && r ? t.src = r : n && (t.src = n)
            })
        }

        function a(t, e, n) {
            t && (p.toRealArray(t.querySelectorAll(".NaturalImage-image")).forEach(function(t) {
                n(function() {
                    o(t, e)
                })
            }), p.toRealArray(t.querySelectorAll(".CroppedImage-image")).forEach(function(t) {
                n(function() {
                    o(t, e / 2)
                })
            }), p.toRealArray(t.querySelectorAll("img.autosized-media")).forEach(function(t) {
                n(function() {
                    o(t, e), t.removeAttribute("width"), t.removeAttribute("height")
                })
            }))
        }

        function u(t, e, n, r) {
            t && p.toRealArray(t.querySelectorAll("iframe.autosized-media, .wvp-player-container")).forEach(function(t) {
                var i = d(t.getAttribute("data-width"), t.getAttribute("data-height"), g.effectiveWidth(t.parentElement) || e, n);
                r(function() {
                    t.setAttribute("width", i.width), t.setAttribute("height", i.height), w.present(t, "wvp-player-container") ? (t.style.width = i.width, t.style.height = i.height) : (t.width = i.width, t.height = i.height)
                })
            })
        }

        function c(t, e, n, r) {
            a(t, e, r), u(t, e, n, r)
        }

        function d(t, e, n, r, i, o) {
            return n = n || t, r = r || e, i = i || 0, o = o || 0, t > n && (e *= n / t, t = n), e > r && (t *= r / e, e = r), t < i && (e *= i / t, t = i), e < o && (t *= o / e, e = o), {
                width: Math.floor(t),
                height: Math.floor(e)
            }
        }

        function f(t, e, n, r) {
            p.toRealArray(t.querySelectorAll(e)).forEach(function(t) {
                var e = t.getAttribute("style") || t.getAttribute("data-style"),
                    i = r.test(e) && RegExp.$1;
                i && (t.setAttribute("data-csp-fix", !0), t.style[n] = i)
            })
        }

        function l(t) {
            m.inlineStyle() || (f(t, ".MediaCard-widthConstraint", "maxWidth", y), f(t, ".MediaCard-mediaContainer", "paddingBottom", E), f(t, ".CroppedImage-image", "top", b), f(t, ".CroppedImage-image", "left", _))
        }
        var h = n(7),
            p = n(11),
            m = n(67),
            v = n(8),
            g = n(143),
            w = n(20),
            y = /max-width:\s*([\d.]+px)/,
            b = /top:\s*(-?[\d.]+%)/,
            _ = /left:\s*(-?[\d.]+%)/,
            E = /padding-bottom:\s*([\d.]+%)/;
        t.exports = {
            scaleDimensions: d,
            retinize: s,
            setSrcForImgs: a,
            sizeIframes: u,
            constrainMedia: c,
            fixMediaCardLayout: l,
            __setSrcFromSet: o
        }
    }, function(t, e) {
        function n(t) {
            return t && 1 === t.nodeType ? t.offsetWidth || n(t.parentNode) : 0
        }
        t.exports = {
            effectiveWidth: n
        }
    }, function(t, e, n) {
        function r(t) {
            return t.replace(/-(.)/g, function(t, e) {
                return e.toUpperCase()
            })
        }

        function i(t) {
            return (t || "").split(";").reduce(function(t, e) {
                var n, i;
                return c.test(e.trim()) && (n = RegExp.$1, i = RegExp.$2, t[r(n)] = i), t
            }, {})
        }

        function o(t) {
            var e = i(t.getAttribute("data-style"));
            0 !== Object.keys(e).length && (t.setAttribute("data-csp-fix", "true"), u.forIn(e, function(e, n) {
                t.style[e] = n
            }))
        }

        function s(t) {
            t.selectors({
                cspForcedStyle: ".js-cspForcedStyle"
            }), t.after("prepForInsertion", function(t) {
                a.inlineStyle() || this.select(t, "cspForcedStyle").forEach(o)
            })
        }
        var a = n(67),
            u = (n(69), n(11)),
            c = /^([a-zA-Z-]+):\s*(.+)$/;
        t.exports = s
    }, function(t, e, n) {
        function r(t) {
            t.after("prepForInsertion", function(t) {
                i.retinize(t)
            })
        }
        var i = n(142);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.after("prepForInsertion", function(t) {
                o.setSrcForImgs(t, this.sandbox.width, i.sync)
            }), t.after("resize", function() {
                o.setSrcForImgs(this.el, this.sandbox.width, i.write)
            })
        }
        var i = n(45),
            o = n(142);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            t.after("render", function() {
                var t = this.el.getAttribute(r);
                t && this.sandbox.setTitle && this.sandbox.setTitle(t)
            })
        }
        var r = "data-iframe-title";
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            return t.every(a.isInt)
        }

        function i(t) {
            var e = t.map(function(t) {
                return {
                    size: +t,
                    className: u + t
                }
            }).sort(function(t, e) {
                return t.size - e.size
            });
            return e.unshift({
                size: 0,
                className: c
            }), e
        }

        function o(t) {
            t.params({
                breakpoints: {
                    required: !0,
                    validate: r,
                    transform: i
                }
            }), t.define("getClassForWidth", function(t) {
                var e, n, r;
                for (n = this.params.breakpoints.length - 1; n >= 0; n--)
                    if (r = this.params.breakpoints[n], t > r.size) {
                        e = r.className;
                        break
                    }
                return e
            }), t.after("initialize", function() {
                this.allBreakpoints = this.params.breakpoints.map(function(t) {
                    return t.className
                })
            }), t.define("recalculateBreakpoints", function() {
                var t = this.getClassForWidth(this.sandbox.width);
                return t && this.sandbox.hasRootClass(t) ? s.resolve() : s.all([this.sandbox.removeRootClass(this.allBreakpoints), this.sandbox.addRootClass(t)])
            }), t.after("render", function() {
                return this.recalculateBreakpoints()
            }), t.after("resize", function() {
                return this.recalculateBreakpoints()
            })
        }
        var s = n(2),
            a = n(25),
            u = "env-bp-",
            c = u + "min";
        t.exports = o
    }, , function(t, e, n) {
        function r(t, e, n, r, i) {
            var o, s = new u,
                c = a(t, n, r, i);
            if (c) return (o = d.createPlayerForTweet(c.element, e, c.options)) ? (s.resolve(o), s.promise) : s.reject(new Error("unable to create tweet video player"))
        }

        function i(t, e, n, r, i) {
            var o, s = new u,
                c = a(t, n, r, i);
            return c ? (o = d.createPlayerForLiveVideo(c.element, e, c.options), o.on("ready", function() {
                o.playPreview(), s.resolve(o)
            }), s.promise) : s.reject(new Error("unable to initialize event video player"))
        }

        function o(t) {
            var e = t.querySelector(".wvp-player-container"),
                n = e && d.findPlayerForElement(e);
            if (n) return n.teardown()
        }

        function s(t) {
            return d.findPlayerForElement(t)
        }

        function a(t, e, n, r) {
            var i, o;
            if (r = r || {}, o = {
                    scribeContext: {
                        client: "tfw",
                        page: e
                    },
                    languageCode: n,
                    hideControls: r.hideControls || !1,
                    addTwitterBranding: r.addBranding || !1,
                    widgetOrigin: r.widgetOrigin,
                    borderRadius: r.borderRadius
                }, i = c(t, ".wvp-player-container"), i.length > 0) return f && d.setBaseUrl(f), {
                element: i[0],
                options: o
            }
        }
        var u = n(1),
            c = n(85),
            d = n(151),
            f = null;
        t.exports = {
            insertForTweet: r,
            insertForEvent: i,
            remove: o,
            find: s
        }
    }, function(t, e, n) {
        var r;
        ! function(i, o) {
            r = function() {
                return i.TwitterVideoPlayer = o()
            }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
        }(this, function() {
            function t(t) {
                if (t && t.data && t.data.params && t.data.params[0]) {
                    var e = t.data.params[0],
                        n = t.data.id;
                    if (e && e.context && "TwitterVideoPlayer" === e.context) {
                        var r = e.playerId;
                        delete e.playerId, delete e.context;
                        var i = a[r];
                        i && i.processMessage(t.data.method, e, n)
                    }
                }
            }

            function e(t, e, n) {
                var r = Object.keys(n).filter(function(t) {
                    return null != n[t]
                }).map(function(t) {
                    var e = n[t];
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e)
                }).join("&");
                return r && (r = "?" + r), t + e + r
            }

            function n(n, i, o, u, c) {
                var d = n.ownerDocument,
                    f = d.defaultView;
                f.addEventListener("message", t), this.playerId = s++;
                var l = {
                    embed_source: "clientlib",
                    player_id: this.playerId,
                    rpc_init: 1
                };
                if (this.scribeParams = {}, this.scribeParams.suppressScribing = u && u.suppressScribing, !this.scribeParams.suppressScribing) {
                    if (!u.scribeContext) throw "video_player: Missing scribe context";
                    if (!u.scribeContext.client) throw "video_player: Scribe context missing client property";
                    this.scribeParams.client = u.scribeContext.client, this.scribeParams.page = u.scribeContext.page, this.scribeParams.section = u.scribeContext.section, this.scribeParams.component = u.scribeContext.component
                }
                this.scribeParams.debugScribe = u && u.scribeContext && u.scribeContext.debugScribing, this.scribeParams.scribeUrl = u && u.scribeContext && u.scribeContext.scribeUrl, this.promotedLogParams = u.promotedContext, this.adRequestCallback = u.adRequestCallback, u.languageCode && (l.language_code = u.languageCode), "tfw" === this.scribeParams.client && (l.use_syndication_guest_id = !0);
                var h = e(r, i, l);
                return this.videoIframe = document.createElement("iframe"), this.videoIframe.setAttribute("src", h), this.videoIframe.setAttribute("allowfullscreen", ""), this.videoIframe.setAttribute("id", o), this.videoIframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"), this.domElement = n, this.domElement.appendChild(this.videoIframe), a[this.playerId] = this, this.eventCallbacks = {}, this.emitEvent = function(t, e) {
                    var n = this.eventCallbacks[t];
                    "undefined" != typeof n && n.forEach(function(t) {
                        t.apply(this.playerInterface, [e])
                    }.bind(this))
                }, this.jsonRpc = function(t) {
                    var e = this.videoIframe.contentWindow;
                    t.jsonrpc = "2.0", e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
                }, this.jsonRpcCall = function(t, e) {
                    this.jsonRpc({
                        method: t,
                        params: e
                    })
                }, this.jsonRpcResult = function(t, e) {
                    this.jsonRpc({
                        result: t,
                        id: e
                    })
                }, this.processMessage = function(t, e, n) {
                    switch (t) {
                        case "requestPlayerConfig":
                            this.jsonRpcResult({
                                scribeParams: this.scribeParams,
                                promotedLogParams: this.promotedLogParams,
                                squareCorners: u.squareCorners,
                                borderRadius: u.borderRadius,
                                hideControls: u.hideControls,
                                embedded: u.addTwitterBranding,
                                widgetOrigin: u.widgetOrigin,
                                ignoreFineGrainGeoblocking: u.ignoreFineGrainGeoblocking
                            }, n);
                            break;
                        case "videoPlayerAdStart":
                            this.emitEvent("adStart", e);
                            break;
                        case "videoPlayerAdEnd":
                            this.emitEvent("adEnd", e);
                            break;
                        case "videoPlayerPlay":
                            this.emitEvent("play", e);
                            break;
                        case "videoPlayerPause":
                            this.emitEvent("pause", e);
                            break;
                        case "videoPlayerMute":
                            this.emitEvent("mute", e);
                            break;
                        case "videoPlayerUnmute":
                            this.emitEvent("unmute", e);
                            break;
                        case "videoPlayerPlaybackComplete":
                            this.emitEvent("playbackComplete", e);
                            break;
                        case "videoPlayerReady":
                            this.emitEvent("ready", e);
                            break;
                        case "videoView":
                            this.emitEvent("view", e);
                            break;
                        case "debugLoggingEvent":
                            this.emitEvent("logged", e);
                            break;
                        case "requestDynamicAd":
                            "function" == typeof this.adRequestCallback ? this.jsonRpcResult(this.adRequestCallback(), n) : this.jsonRpcResult({}, n);
                            break;
                        case "videoPlayerError":
                            e && "NO_COOKIES_ERROR" === e.error_category ? this.emitEvent("noCookiesError", e) : e && "GEOBLOCK_ERROR" === e.error_category && this.emitEvent("geoblockError", e)
                    }
                }, this.playerInterface = {
                    on: function(t, e) {
                        return "undefined" == typeof this.eventCallbacks[t] && (this.eventCallbacks[t] = []), this.eventCallbacks[t].push(e), this.playerInterface
                    }.bind(this),
                    off: function(t, e) {
                        if ("undefined" == typeof e) delete this.eventCallbacks[t];
                        else {
                            var n = this.eventCallbacks[t];
                            if ("undefined" != typeof n) {
                                var r = n.indexOf(e);
                                r > -1 && n.splice(r, 1)
                            }
                        }
                        return this.playerInterface
                    }.bind(this),
                    play: function() {
                        return this.jsonRpcCall("play"), this.playerInterface
                    }.bind(this),
                    pause: function() {
                        return this.jsonRpcCall("pause"), this.playerInterface
                    }.bind(this),
                    mute: function() {
                        return this.jsonRpcCall("mute"), this.playerInterface
                    }.bind(this),
                    unmute: function() {
                        return this.jsonRpcCall("unmute"), this.playerInterface
                    }.bind(this),
                    playPreview: function() {
                        return this.jsonRpcCall("autoPlayPreview"), this.playerInterface
                    }.bind(this),
                    pausePreview: function() {
                        return this.jsonRpcCall("autoPlayPreviewStop"), this.playerInterface
                    }.bind(this),
                    updatePosition: function(t) {
                        return this.jsonRpcCall("updatePosition", [t]), this.playerInterface
                    }.bind(this),
                    updateLayoutBreakpoint: function(t) {
                        return this.jsonRpcCall("updateLayoutBreakpoint", [t]), this.playerInterface
                    }.bind(this),
                    enterFullScreen: function() {
                        return this.jsonRpcCall("enterFullScreen"), this.playerInterface
                    }.bind(this),
                    exitFullScreen: function() {
                        return this.jsonRpcCall("exitFullScreen"), this.playerInterface
                    }.bind(this),
                    teardown: function() {
                        this.eventCallbacks = {}, n.removeChild(this.videoIframe), this.videoIframe = void 0, delete a[this.playerId]
                    }.bind(this)
                }, this.playerInterface
            }
            var r = "https://twitter.com",
                i = /^https?:\/\/([a-zA-Z0-9]+\.)*twitter.com(:\d+)?$/,
                o = {
                    suppressScribing: !1,
                    squareCorners: !1,
                    hideControls: !1,
                    addTwitterBranding: !1
                },
                s = 0,
                a = {};
            return {
                setBaseUrl: function(t) {
                    i.test(t) ? r = t : window.console.error("newBaseUrl " + t + " not allowed")
                },
                createPlayerForTweet: function(t, e, r) {
                    var i = "/i/videos/tweet/" + e,
                        s = "player_tweet_" + e;
                    return new n(t, i, s, r || o)
                },
                createPlayerForDm: function(t, e, r) {
                    var i = "/i/videos/dm/" + e,
                        s = "player_dm_" + e;
                    return new n(t, i, s, r || o)
                },
                createPlayerForLiveVideo: function(t, e, r) {
                    var i = "/i/videos/live_video/" + e,
                        s = "player_live_video_" + e;
                    return new n(t, i, s, r || o)
                },
                findPlayerForElement: function(t) {
                    for (var e in a)
                        if (a.hasOwnProperty(e)) {
                            var n = a[e];
                            if (n && n.domElement === t) return n.playerInterface
                        }
                    return null
                }
            }
        })
    }, function(t, e, n) {
        function r(t) {
            t.selectors({
                clickToOpen: ".js-clickToOpenTarget"
            }), t.define("shouldOpenTarget", function(t) {
                var e = i.closest("A", t.target, this.el),
                    n = i.closest("BUTTON", t.target, this.el),
                    r = this.sandbox.hasSelectedText();
                return !e && !n && !r
            }), t.define("openTarget", function(t, e) {
                var n = e && e.getAttribute(u);
                n && (o(n), this.scribeOpenClick(t))
            }), t.define("attemptToOpenTarget", function(t, e) {
                this.shouldOpenTarget(t) && this.openTarget(t, e)
            }), t.define("scribeOpenClick", function(t) {
                var e = a.extractTermsFromDOM(t.target),
                    n = {
                        associations: a.formatTweetAssociation(e)
                    };
                this.scribe({
                    section: "chrome",
                    action: "click"
                }, n)
            }), t.after("render", function() {
                this.on("click", "clickToOpen", this.attemptToOpenTarget)
            })
        }
        var i = n(21),
            o = n(153),
            s = n(91),
            a = n(38),
            u = "data-click-to-open-target";
        t.exports = s.couple(n(105), r)
    }, function(t, e, n) {
        function r(t) {
            s.isTwitterURL(t) && (t = o(t)), i.open(t)
        }
        var i = n(7),
            o = n(104),
            s = n(23);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.params({
                productName: {
                    required: !0
                },
                dataSource: {
                    required: !1
                },
                related: {
                    required: !1
                },
                partner: {
                    fallback: d(o.val, o, "partner")
                }
            }), t.selectors({
                timeline: ".timeline",
                tweetIdInfo: ".js-tweetIdInfo"
            }), t.define("injectWebIntentParams", function(t) {
                var e = i.closest(this.selectors.timeline, t, this.el),
                    n = i.closest(this.selectors.tweetIdInfo, t, this.el);
                t.getAttribute(f) || (t.setAttribute(f, !0), t.href = u.url(t.href, {
                    tw_w: this.params.dataSource && this.params.dataSource.id,
                    tw_i: n && n.getAttribute("data-tweet-id"),
                    tw_p: this.params.productName,
                    related: this.params.related,
                    partner: this.params.partner,
                    query: e && e.getAttribute("data-search-query"),
                    profile_id: e && e.getAttribute("data-profile-id"),
                    original_referer: a.rootDocumentLocation()
                }))
            }), t.after("render", function() {
                this.on("click", "A", function(t, e) {
                    c.isIntentURL(e.href) && (this.injectWebIntentParams(e), s.open(e.href, this.sandbox.sandboxEl, t))
                })
            })
        }
        var i = n(21),
            o = n(37),
            s = n(22),
            a = n(34),
            u = n(24),
            c = n(23),
            d = n(13),
            f = "data-url-params-injected";
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.before("render", function() {
                i.ios() && this.sandbox.addRootClass("env-ios"), i.ie9() && this.sandbox.addRootClass("ie9"), i.touch() && this.sandbox.addRootClass("is-touch")
            })
        }
        var i = n(8);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            t.params({
                pageForAudienceImpression: {
                    required: !0
                }
            }), t.before("hydrate", function() {
                i.scribeAudienceImpression(this.params.pageForAudienceImpression)
            })
        }
        var i = n(157);
        t.exports = r
    }, function(t, e, n) {
        function r() {
            return d.formatGenericEventData("syndicated_impression", {})
        }

        function i() {
            u("tweet")
        }

        function o() {
            u("timeline")
        }

        function s() {
            u("video")
        }

        function a() {
            u("partnertweet")
        }

        function u(t) {
            f.isHostPageSensitive() || l[t] || (l[t] = !0, c.scribe(d.formatClientEventNamespace({
                page: t,
                action: "impression"
            }), r(), d.AUDIENCE_ENDPOINT))
        }
        var c = n(32),
            d = n(38),
            f = n(36),
            l = {};
        t.exports = {
            scribeAudienceImpression: u,
            scribePartnerTweetAudienceImpression: a,
            scribeTweetAudienceImpression: i,
            scribeTimelineAudienceImpression: o,
            scribeVideoAudienceImpression: s
        }
    }, function(t, e, n) {
        function r(t) {
            var e = {
                    action: "dimensions"
                },
                n = new o(s);
            t.after("show", function() {
                var t, r, i;
                n.nextBoolean() && (t = this.sandbox.width, r = this.sandbox.height, i = {
                    context: t + "," + r
                }, this.scribe(e, i))
            })
        }
        var i = n(91),
            o = n(159),
            s = 1;
        t.exports = i.couple(n(105), r)
    }, function(t, e) {
        function n(t) {
            this.percentage = t
        }
        n.prototype.nextBoolean = function() {
            return 100 * Math.random() < this.percentage
        }, t.exports = n
    }, , function(t, e, n) {
        function r(t) {
            var e = {
                transparent: !1,
                hideBorder: !1,
                hideHeader: !1,
                hideFooter: !1,
                hideScrollBar: !1
            };
            return t = t || "", i.contains(t, "transparent") && (e.transparent = !0), i.contains(t, "noborders") && (e.hideBorder = !0), i.contains(t, "noheader") && (e.hideHeader = !0), i.contains(t, "nofooter") && (e.hideFooter = !0), i.contains(t, "noscrollbar") && (e.hideScrollBar = !0), e
        }
        var i = n(11);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = u(t),
                n = {
                    momentId: a.momentId(t.href),
                    chrome: t.getAttribute("data-chrome"),
                    limit: t.getAttribute("data-limit")
                };
            return s.forIn(n, function(t, n) {
                var r = e[t];
                e[t] = o.hasValue(r) ? r : n
            }), e
        }

        function i(t) {
            var e = c(t, f);
            return e.map(function(t) {
                return d(r(t), t.parentNode, t)
            })
        }
        var o = n(25),
            s = n(11),
            a = n(23),
            u = n(82),
            c = n(84)(),
            d = n(163),
            f = "a.twitter-moment";
        t.exports = i;
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, s, "twitter-moment", t, e, n)
        }
        var i = n(88),
            o = n(164),
            s = n(54);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(4, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(165), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , function(t, e, n) {
        function r(t) {
            t.selectors({
                inViewportMarker: ".js-inViewportScribingTarget"
            }), t.define("scribeInViewportSeen", function(t, e) {
                var n = i.extractTermsFromDOM(t);
                n.action = "seen", this.scribe(n, e, s.version)
            }), t.after("show", function() {
                var t = this.selectors.inViewportMarker,
                    e = this.select(t);
                e.forEach(function(t) {
                    t && a.inViewportOnce(t, this.sandbox.sandboxEl, function() {
                        this.scribeInViewportSeen(t, this.scribeItems())
                    }.bind(this))
                }, this)
            })
        }
        var i = n(38),
            o = n(91),
            s = n(40),
            a = n(169);
        t.exports = o.couple(n(105), r)
    }, function(t, e, n) {
        var r = n(170),
            i = n(68),
            o = n(171),
            s = n(7),
            a = n(8),
            u = 50,
            c = function(t) {
                return (s.requestIdleCallback || s.requestAnimationFrame || function(t) {
                    t()
                })(t)
            },
            d = function() {
                this.observers = []
            };
        d.prototype._register = function(t, e, n) {
            var i, u = this;
            return a.hasIntersectionObserverSupport() ? (i = new s.IntersectionObserver(function(t) {
                t.forEach(function(t) {
                    t.intersectionRatio >= 1 && (c(n), u._unregister(i))
                })
            }, {
                threshold: 1
            }), i.observe(t), i) : (i = {
                update: function(o, s) {
                    r(t, {
                        viewportWidth: o,
                        viewportHeight: s,
                        sandboxEl: e
                    }) && (n(), u._unregister(i))
                }
            }, this.observers.push(i), 1 === this.observers.length && (this.unlisten = o.addScrollListener(this._onViewportChange.bind(this))), this._onViewportChange(), i)
        }, d.prototype._unregister = function(t) {
            var e;
            a.hasIntersectionObserverSupport() && t instanceof s.IntersectionObserver ? t.disconnect() : (e = this.observers.indexOf(t), e > -1 && (this.observers.splice(e, 1), 0 === this.observers.length && this.unlisten && this.unlisten()))
        }, d.prototype._onViewportChange = function() {
            i(c(function() {
                this._notify(o.getWidth(), o.getHeight())
            }.bind(this)), u, this)
        }, d.prototype._notify = function(t, e) {
            this.observers.forEach(function(n) {
                n.update(t, e)
            })
        }, d.prototype.inViewportOnce = function(t, e, n) {
            return this._register(t, e, n)
        }, t.exports = new d
    }, function(t, e, n) {
        function r(t, e) {
            var n, r, s, a;
            return e = e || {}, r = e.viewportWidth || o.innerWidth, n = e.viewportHeight || o.innerHeight, s = t.getBoundingClientRect(), t.ownerDocument !== i && e.sandboxEl && (a = e.sandboxEl.getBoundingClientRect(), s = {
                top: s.top + a.top,
                bottom: s.bottom + a.top,
                left: s.left + a.left,
                right: s.right + a.left
            }), s.top >= 0 && s.left >= 0 && s.bottom <= n && s.right <= r
        }
        var i = n(9),
            o = n(7);
        t.exports = r
    }, function(t, e, n) {
        var r = n(7),
            i = {
                _addListener: function(t, e) {
                    var n, i = function() {
                        e()
                    };
                    return r.addEventListener(t, i), n = function() {
                        r.removeEventListener(t, i)
                    }
                },
                addScrollListener: function(t) {
                    return this._addListener("scroll", t)
                },
                getHeight: function() {
                    return r.innerHeight
                },
                getWidth: function() {
                    return r.innerWidth
                }
            };
        t.exports = i
    }, , function(t, e, n) {
        function r(t) {
            var e = s(t),
                n = t.getAttribute("href"),
                r = t.getAttribute("data-size"),
                i = d.exec(n)[1];
            return o.aug(e, {
                username: i,
                size: r
            })
        }

        function i(t) {
            var e = a(t, c);
            return e.map(function(t) {
                return u(r(t), t.parentNode, t)
            })
        }
        var o = n(11),
            s = n(82),
            a = n(84)(),
            u = n(174),
            c = "a.periscope-on-air",
            d = /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, s, "periscope-on-air", t, e, n)
        }
        var i = n(88),
            o = n(175),
            s = n(54);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(5, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(176), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , function(t, e, n) {
        function r(t) {
            var e = c(t),
                n = t.getAttribute("data-show-replies"),
                r = {
                    widgetId: t.getAttribute("data-widget-id"),
                    chrome: t.getAttribute("data-chrome"),
                    tweetLimit: t.getAttribute("data-tweet-limit"),
                    ariaLive: t.getAttribute("data-aria-polite"),
                    theme: t.getAttribute("data-theme"),
                    linkColor: t.getAttribute("data-link-color"),
                    borderColor: t.getAttribute("data-border-color"),
                    showReplies: n ? o.asBoolean(n) : null,
                    profileScreenName: t.getAttribute("data-screen-name"),
                    profileUserId: t.getAttribute("data-user-id"),
                    favoritesScreenName: t.getAttribute("data-favorites-screen-name"),
                    favoritesUserId: t.getAttribute("data-favorites-user-id"),
                    likesScreenName: t.getAttribute("data-likes-screen-name"),
                    likesUserId: t.getAttribute("data-likes-user-id"),
                    listOwnerScreenName: t.getAttribute("data-list-owner-screen-name"),
                    listOwnerUserId: t.getAttribute("data-list-owner-id"),
                    listId: t.getAttribute("data-list-id"),
                    listSlug: t.getAttribute("data-list-slug"),
                    customTimelineId: t.getAttribute("data-custom-timeline-id"),
                    staticContent: t.getAttribute("data-static-content"),
                    url: t.href
                };
            return r = s.aug(r, s.compact(e)), r.dataSource = a(r), r.useLegacyDefaults = r.dataSource instanceof u, r
        }

        function i(t) {
            var e = d(t, l);
            return e.map(function(t) {
                return f(r(t), t.parentNode, t)
            })
        }
        var o = n(25),
            s = n(11),
            a = n(180),
            u = n(196),
            c = n(82),
            d = n(84)(),
            f = n(198),
            l = "a.twitter-timeline,div.twitter-timeline";
        t.exports = i
    }, function(t, e, n) {
        function r(t) {
            var e, n;
            return e = (t.sourceType + "").toLowerCase(), n = p[e], n ? new n(t) : null
        }

        function i(t) {
            return s(m, function(e) {
                try {
                    return new e(t)
                } catch (t) {}
            })
        }

        function o(t) {
            return t ? r(t) || i(t) : null
        }
        var s = n(181),
            a = n(182),
            u = n(186),
            c = n(188),
            d = n(190),
            f = n(192),
            l = n(194),
            h = n(196),
            p = {
                collection: a,
                event: u,
                likes: c,
                list: d,
                profile: l,
                widget: h,
                url: i
            },
            m = [h, l, c, a, d, u, f];
        t.exports = o
    }, function(t, e) {
        t.exports = function(t, e, n) {
            for (var r, i = 0; i < t.length; i++)
                if (r = e.call(n, t[i], i, t)) return r
        }
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(184), n(185)])
    }, function(t, e, n) {
        var r = n(56),
            i = n(60),
            o = n(13);
        r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if (!t || !t.headers) throw new Error("unexpected response schema");
            return {
                html: t.body,
                config: t.config,
                pollInterval: 1e3 * parseInt(t.headers.xPolling, 10) || null,
                maxCursorPosition: t.headers.maxPosition,
                minCursorPosition: t.headers.minPosition
            }
        }

        function i(t) {
            if (t && t.headers) throw new Error(t.headers.status);
            throw t instanceof Error ? t : new Error(t)
        }

        function o(t) {
            t.params({
                instanceId: {
                    required: !0,
                    fallback: p.deterministic
                },
                lang: {
                    required: !0,
                    transform: d.matchLanguage,
                    fallback: "en"
                },
                tweetLimit: {
                    transform: h.asInt
                }
            }), t.defineProperty("endpoint", {
                get: function() {
                    throw new Error("endpoint not specified")
                }
            }), t.defineProperty("pollEndpoint", {
                get: function() {
                    return this.endpoint
                }
            }), t.define("cbId", function(t) {
                var e = t ? "_new" : "_old";
                return "tl_" + this.params.instanceId + "_" + this.id + e
            }), t.define("queryParams", function() {
                return {
                    lang: this.params.lang,
                    tz: f.getTimezoneOffset(),
                    t: s(),
                    domain: c.host,
                    tweet_limit: this.params.tweetLimit,
                    dnt: l.enabled()
                }
            }), t.define("fetch", function() {
                return a.fetch(this.endpoint, this.queryParams(), u, this.cbId()).then(r, i)
            }), t.define("poll", function(t, e) {
                var n, o;
                return t = t || {}, n = {
                    since_id: t.sinceId,
                    max_id: t.maxId,
                    min_position: t.minPosition,
                    max_position: t.maxPosition
                }, o = m.aug(this.queryParams(), n), a.fetch(this.pollEndpoint, o, u, this.cbId(e)).then(r, i)
            })
        }
        var s = n(139),
            a = n(136),
            u = n(137),
            c = n(18),
            d = n(97),
            f = n(138),
            l = n(33),
            h = n(25),
            p = n(28),
            m = n(11);
        t.exports = o
    }, function(t, e, n) {
        function r(t, e) {
            return o.collectionId(t) || e
        }

        function i(t) {
            t.params({
                id: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t = r(this.params.url, this.params.id);
                    return u + t
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return a.timeline(["collection"])
                }
            }), t.around("queryParams", function(t) {
                return s.aug(t(), {
                    collection_id: r(this.params.url, this.params.id)
                })
            }), t.before("initialize", function() {
                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
            })
        }
        var o = n(23),
            s = n(11),
            a = n(76),
            u = "collection:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(184), n(187)])
    }, function(t, e, n) {
        function r(t, e) {
            return o.eventId(t) || e
        }

        function i(t) {
            t.params({
                id: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t = r(this.params.url, this.params.id);
                    return u + t
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return a.timeline(["event"])
                }
            }), t.around("queryParams", function(t) {
                return s.aug(t(), {
                    event_id: r(this.params.url, this.params.id)
                })
            }), t.before("initialize", function() {
                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
            })
        }
        var o = n(23),
            s = n(11),
            a = n(76),
            u = "event:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(184), n(189)])
    }, function(t, e, n) {
        function r(t) {
            return o.likesScreenName(t.url) || t.screenName
        }

        function i(t) {
            t.params({
                screenName: {},
                userId: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t = r(this.params) || this.params.userId;
                    return u + t
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return a.timeline(["likes"])
                }
            }), t.define("_getLikesQueryParam", function() {
                var t = r(this.params);
                return t ? {
                    screen_name: t
                } : {
                    user_id: this.params.userId
                }
            }), t.around("queryParams", function(t) {
                return s.aug(t(), this._getLikesQueryParam())
            }), t.before("initialize", function() {
                if (!r(this.params) && !this.params.userId) throw new Error("screen name or user id is required")
            })
        }
        var o = n(23),
            s = n(11),
            a = n(76),
            u = "likes:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(184), n(191)])
    }, function(t, e, n) {
        function r(t) {
            var e = o.listScreenNameAndSlug(t.url) || t;
            return s.compact({
                screen_name: e.ownerScreenName,
                user_id: e.ownerUserId,
                list_slug: e.slug
            })
        }

        function i(t) {
            t.params({
                id: {},
                ownerScreenName: {},
                ownerUserId: {},
                slug: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t, e, n;
                    return this.params.id ? u + this.params.id : (t = r(this.params), e = t && t.list_slug.replace(/-/g, "_"), n = t && (t.screen_name || t.user_id), u + (n + ":" + e))
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return a.timeline(["list"])
                }
            }), t.define("_getListQueryParam", function() {
                return this.params.id ? {
                    list_id: this.params.id
                } : r(this.params)
            }), t.around("queryParams", function(t) {
                return s.aug(t(), this._getListQueryParam())
            }), t.before("initialize", function() {
                var t = r(this.params);
                if (s.isEmptyObject(t) && !this.params.id) throw new Error("qualified slug or list id required")
            })
        }
        var o = n(23),
            s = n(11),
            a = n(76),
            u = "list:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(184), n(193)])
    }, function(t, e, n) {
        function r(t) {
            t.params({
                previewParams: {
                    required: !0,
                    validate: i.isObject
                }
            }), t.overrideProperty("id", {
                get: function() {
                    return "preview"
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return o.timelinePreconfigured(["preview"])
                }
            }), t.override("queryParams", function() {
                return this.params.previewParams
            })
        }
        var i = n(25),
            o = n(76);
        t.exports = r
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(184), n(195)])
    }, function(t, e, n) {
        function r(t, e) {
            return o.screenName(t) || e
        }

        function i(t) {
            t.params({
                showReplies: {
                    fallback: !1,
                    transform: s.asBoolean
                },
                screenName: {},
                userId: {},
                url: {}
            }), t.overrideProperty("id", {
                get: function() {
                    var t = r(this.params.url, this.params.screenName);
                    return c + (t || this.params.userId)
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return u.timeline(["profile"])
                }
            }), t.define("_getProfileQueryParam", function() {
                var t = r(this.params.url, this.params.screenName),
                    e = t ? {
                        screen_name: t
                    } : {
                        user_id: this.params.userId
                    };
                return a.aug(e, {
                    with_replies: this.params.showReplies ? "true" : "false"
                })
            }), t.around("queryParams", function(t) {
                return a.aug(t(), this._getProfileQueryParam())
            }), t.before("initialize", function() {
                var t = r(this.params.url, this.params.screenName);
                if (!t && !this.params.userId) throw new Error("screen name or user id is required")
            })
        }
        var o = n(23),
            s = n(25),
            a = n(11),
            u = n(76),
            c = "profile:";
        t.exports = i
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(184), n(197)])
    }, function(t, e, n) {
        function r(t) {
            t.params({
                widgetId: {
                    required: !0
                },
                profileShowReplies: {
                    fallback: !1,
                    transform: i.asBoolean
                },
                showReplies: {
                    fallback: !1,
                    transform: i.asBoolean
                },
                profileScreenName: {},
                screenName: {},
                profileUserId: {},
                userId: {},
                favoritesScreenName: {},
                favoritesUserId: {},
                listOwnerScreenName: {},
                listOwnerUserId: {},
                listOwnerId: {},
                listId: {},
                listSlug: {},
                customTimelineId: {},
                previewParams: {}
            }), t.overrideProperty("id", {
                get: function() {
                    return this.params.widgetId
                }
            }), t.overrideProperty("endpoint", {
                get: function() {
                    return s.timelinePreconfigured([this.params.widgetId])
                }
            }), t.overrideProperty("pollEndpoint", {
                get: function() {
                    return s.timelinePreconfigured(["paged", this.params.widgetId])
                }
            }), t.define("_getWidgetQueryParams", function() {
                var t = this.params.profileScreenName || this.params.screenName,
                    e = this.params.profileUserId || this.params.userId,
                    n = this.params.profileShowReplies || this.params.showReplies,
                    r = this.params.listOwnerUserId || this.params.listOwnerId;
                return t || e ? {
                    override_type: "user",
                    override_id: e,
                    override_name: t,
                    with_replies: n ? "true" : "false"
                } : this.params.favoritesScreenName || this.params.favoritesUserId ? {
                    override_type: "favorites",
                    override_id: this.params.favoritesUserId,
                    override_name: this.params.favoritesScreenName
                } : this.params.listOwnerScreenName || r || this.params.listId || this.params.listSlug ? {
                    override_type: "list",
                    override_owner_id: r,
                    override_owner_name: this.params.listOwnerScreenName,
                    override_id: this.params.listId,
                    override_name: this.params.listSlug
                } : this.params.customTimelineId ? {
                    override_type: "custom",
                    override_id: this.params.customTimelineId
                } : void 0
            }), t.around("queryParams", function(t) {
                return o.aug(t(), this._getWidgetQueryParams())
            })
        }
        var i = n(25),
            o = n(11),
            s = n(76);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, s, "twitter-timeline", t, e, n)
        }
        var i = n(88),
            o = n(199),
            s = n(54);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(6, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(200), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        function r(t) {
            var e = u(t),
                n = t.getElementsByTagName("A"),
                r = n && n[n.length - 1],
                i = r && s.status(r.href),
                c = t.getAttribute("data-conversation"),
                d = "none" == c || "hidden" == c || o.present(t, "tw-hide-thread"),
                f = t.getAttribute("data-cards"),
                h = "none" == f || "hidden" == f || o.present(t, "tw-hide-media"),
                p = t.getAttribute("data-align") || t.getAttribute("align"),
                m = t.getAttribute("data-link-color"),
                v = t.getAttribute("data-theme");
            return !p && l.test(t.className) && (p = RegExp.$1), a.aug(e, {
                tweetId: i,
                hideThread: d,
                hideCard: h,
                align: p,
                linkColor: m,
                theme: v
            })
        }

        function i(t) {
            var e = c(t, f);
            return e.map(function(t) {
                return d(r(t), t.parentNode, t)
            })
        }
        var o = n(20),
            s = n(23),
            a = n(11),
            u = n(82),
            c = n(84)(),
            d = n(225),
            f = "blockquote.twitter-tweet",
            l = /\btw-align-(left|right|center)\b/;
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, s, "twitter-tweet", t, e, n)
        }
        var i = n(88),
            o = n(226),
            s = n(110);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(7, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(227), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , , function(t, e, n) {
        function r(t) {
            return t.input.lang || v
        }

        function i(t, e) {
            var n = {
                ids: [],
                lang: t,
                tz: h.getTimezoneOffset()
            };
            return n = e.reduce(function(t, e) {
                return t.ids.push(e.input.id), t
            }, n), n.ids = n.ids.sort().join(","), n
        }

        function o(t, e) {
            t.forEach(function(t) {
                var n = e[t.input.id];
                n ? t.taskDoneDeferred.resolve(n) : t.taskDoneDeferred.reject(new Error("not found"))
            })
        }

        function s(t) {
            t.forEach(function(t) {
                t.taskDoneDeferred.reject(new Error("request failed"))
            })
        }

        function a(t, e) {
            var n = f(e, r);
            p.forIn(n, function(e, n) {
                var r = i(e, n),
                    a = m(o, null, n),
                    u = m(s, null, n);
                d.fetch(t, r, c).then(a, u)
            })
        }

        function u(t) {
            this.requestQueue = new l(m(a, null, t))
        }
        var c = n(231),
            d = n(136),
            f = n(51),
            l = n(48),
            h = n(138),
            p = n(11),
            m = n(13),
            v = "en";
        u.prototype.fetch = function(t, e) {
            return this.requestQueue.add({
                id: t,
                lang: e
            })
        }, t.exports = u
    }, function(t, e) {
        function n(t) {
            return {
                success: !0,
                resp: t
            }
        }
        t.exports = n
    }, , , , function(t, e, n) {
        function r(t) {
            var e = a(t),
                n = {
                    screenName: t.getAttribute("data-button-screen-name"),
                    text: t.getAttribute("data-text"),
                    type: t.getAttribute("data-type"),
                    size: t.getAttribute("data-size"),
                    url: t.getAttribute("data-url"),
                    hashtags: t.getAttribute("data-hashtags"),
                    via: t.getAttribute("data-via"),
                    buttonHashtag: t.getAttribute("data-button-hashtag")
                };
            return s.forIn(n, function(t, n) {
                var r = e[t];
                e[t] = d.hasValue(r) ? r : n
            }), e.screenName = e.screenName || e.screen_name, e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag, o.present(t, l) && (e.type = "hashtag"), o.present(t, h) && (e.type = "mention"), e
        }

        function i(t) {
            var e = u(t, f);
            return e.map(function(t) {
                return c(r(t), t.parentNode, t)
            })
        }
        var o = n(20),
            s = n(11),
            a = n(82),
            u = n(84)(),
            c = n(236),
            d = n(25),
            f = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button",
            l = "twitter-hashtag-button",
            h = "twitter-mention-button";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = t && t.type || "share",
                a = "hashtag" == r ? "twitter-hashtag-button" : "mention" == r ? "twitter-mention-button" : "twitter-share-button";
            return new i(o, s, a, t, e, n)
        }
        var i = n(88),
            o = n(237),
            s = n(122);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(2, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(238), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , function(t, e, n) {
        function r(t) {
            var e = s(t),
                n = t.getElementsByTagName("A"),
                r = n && n[n.length - 1],
                i = {
                    url: r.href
                };
            return i = o.aug({}, i, o.compact(e)), i.dataSource = c(i), i
        }

        function i(t) {
            var e = a(t, d);
            return e.map(function(t) {
                return u(r(t), t.parentNode, t)
            })
        }
        var o = n(11),
            s = n(82),
            a = n(84)(),
            u = n(241),
            c = n(246),
            d = "blockquote.twitter-video";
        t.exports = i
    }, function(t, e, n) {
        function r(t, e, n) {
            return new i(o, s, "twitter-video", t, e, n)
        }
        var i = n(88),
            o = n(242),
            s = n(245);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var r = new i;
            return n.e(7, function(i, o) {
                var s;
                if (i) return r.reject(i);
                try {
                    s = n(243), r.resolve(new s(t, e))
                } catch (t) {
                    r.reject(t)
                }
            }), r.promise
        }
        var i = n(1);
        t.exports = r
    }, , , function(t, e, n) {
        function r(t) {
            t.overrideProperty("sandboxEl", {
                get: function() {
                    return this._constrainingWrapper
                }
            }), t.override("makeVisible", function() {
                var t = this.iframeEl;
                return i.write(function() {
                    t.style.visibility = "visible"
                })
            }), t.define("setWrapperSize", function(t, e) {
                var n = this,
                    r = t / e,
                    o = 100 / r + "%",
                    s = u * r + "px";
                return i.write(function() {
                    n._constrainingWrapper.style.maxWidth = s, n._iframeWrapper.style.paddingBottom = o
                })
            }), t.after("initialize", function() {
                this._constrainingWrapper = this._iframeWrapper = null
            }), t.around("insert", function(t, e, n, r, i) {
                var o = this.targetGlobal.document,
                    s = this._constrainingWrapper = o.createElement("div"),
                    u = this._iframeWrapper = o.createElement("div");
                return s.id = e, s.className = (n || {}).class, s.style.minWidth = a + "px", s.style.position = "relative", s.style.margin = c, u.style.position = "relative", u.style.height = "0px", s.appendChild(u), t(void 0, null, null, function(t) {
                    t.style.position = "absolute", t.style.top = "0px", t.style.bottom = "0px", t.style.width = "100%", t.style.height = "100%", u.appendChild(t), i(s)
                })
            })
        }
        var i = n(45),
            o = n(55),
            s = n(64),
            a = 320,
            u = 500,
            c = "10px 0px";
        t.exports = o.build([s, r])
    }, function(t, e, n) {
        function r(t) {
            var e, n;
            return e = (t.sourceType + "").toLowerCase(), n = a[e], n ? new n(t) : null
        }

        function i(t) {
            return s(Object.keys(a), function(e) {
                var n = a[e];
                try {
                    return new n(t)
                } catch (t) {}
            })
        }

        function o(t) {
            return t ? r(t) || i(t) : null
        }
        var s = n(181),
            a = n(247);
        t.exports = o
    }, function(t, e, n) {
        var r = n(248),
            i = n(251);
        t.exports = {
            tweet: r,
            event: i
        }
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(249), n(250)])
    }, function(t, e, n) {
        function r(t) {
            t.params({
                lang: {
                    required: !0,
                    transform: i.matchLanguage,
                    fallback: "en"
                }
            }), t.defineProperty("identifier", {
                get: function() {
                    throw new Error("identifier not specified")
                }
            }), t.defineProperty("name", {
                get: function() {
                    throw new Error("name not specified")
                }
            }), t.defineProperty("scribeItemType", {
                get: function() {
                    throw new Error("scribeItemType not specified")
                }
            }), t.define("fetch", function() {
                throw new Error("fetch not specified")
            })
        }
        var i = n(97);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            return e || o.status(t)
        }

        function i(t) {
            t.params({
                id: {},
                url: {}
            }), t.overrideProperty("identifier", {
                get: function() {
                    return r(this.params.url, this.params.id)
                }
            }), t.override("fetch", function() {
                return u.fetch(this.identifier, this.params.lang)
            }), t.overrideProperty("scribeItemType", {
                get: function() {
                    return c.TWEET
                }
            }), t.overrideProperty("name", {
                get: function() {
                    return "tweet"
                }
            }), t.before("initialize", function() {
                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
            })
        }
        var o = n(23),
            s = n(76),
            a = n(230),
            u = new a(s.video()),
            c = n(109);
        t.exports = i
    }, function(t, e, n) {
        var r = n(183);
        t.exports = r.build([n(249), n(252)])
    }, function(t, e, n) {
        function r(t, e) {
            return o.eventId(t) || e
        }

        function i(t) {
            t.params({
                id: {},
                url: {}
            }), t.overrideProperty("identifier", {
                get: function() {
                    return r(this.params.url, this.params.id)
                }
            }), t.override("fetch", function() {
                var t = {
                    lang: this.params.lang,
                    event_id: this.identifier
                };
                return s.fetch(a.eventVideo(), t)
            }), t.overrideProperty("scribeItemType", {
                get: function() {
                    return u.LIVE_VIDEO_EVENT
                }
            }), t.overrideProperty("name", {
                get: function() {
                    return "event"
                }
            }), t.before("initialize", function() {
                if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
            })
        }
        var o = n(23),
            s = n(253),
            a = n(76),
            u = n(109);
        t.exports = i
    }, function(t, e, n) {
        function r(t, e) {
            return a.fetch(t, e, i).then(o, s)
        }

        function i(t) {
            return {
                success: !t.error,
                resp: t
            }
        }

        function o(t) {
            return t.data.html
        }

        function s(t) {
            return u.reject(t.error.detail)
        }
        var a = n(136),
            u = n(2);
        t.exports = {
            fetch: r
        }
    }, function(t, e, n) {
        var r = n(11);
        t.exports = r.aug({}, n(255), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264))
    }, function(t, e, n) {
        var r = n(87),
            i = n(256),
            o = i(["userId"], {}, r);
        t.exports = {
            createDMButton: o
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            var r;
            return t = t || [], e = e || {}, r = "ƒ(" + t.join(", ") + ", target, [options]);",
                function() {
                    var c, d, f, l, h = Array.prototype.slice.apply(arguments, [0, t.length]),
                        p = Array.prototype.slice.apply(arguments, [t.length]);
                    return p.forEach(function(t) {
                        if (t) return t.nodeType === Node.ELEMENT_NODE ? void(f = t) : u.isType("function", t) ? void(c = t) : void(u.isType("object", t) && (d = t))
                    }), h.length !== t.length || 0 === p.length ? (c && u.async(function() {
                        c(!1)
                    }), i.reject(new Error("Not enough parameters. Expected: " + r))) : f ? (d = u.aug({}, d || {}, e), t.forEach(function(t) {
                        d[t] = h.shift()
                    }), a.asBoolean(d.dnt) && s.setOn(), l = o.addWidget(n(d, f)), c && l.then(c, function() {
                        c(!1)
                    }), l) : (c && u.async(function() {
                        c(!1)
                    }), i.reject(new Error("No target element specified. Expected: " + r)))
                }
        }
        var i = n(2),
            o = n(43),
            s = n(33),
            a = n(25),
            u = n(11);
        t.exports = r
    }, function(t, e, n) {
        var r = n(115),
            i = n(256),
            o = i(["screenName"], {}, r);
        t.exports = {
            createFollowButton: o
        }
    }, function(t, e, n) {
        var r = n(131),
            i = n(256),
            o = i(["collectionId"], {}, r);
        t.exports = {
            createGridFromCollection: o
        }
    }, function(t, e, n) {
        var r = n(163),
            i = n(256),
            o = i(["momentId"], {}, r);
        t.exports = {
            createMoment: o
        }
    }, function(t, e, n) {
        var r = n(174),
            i = n(256),
            o = i(["username"], {}, r);
        t.exports = {
            createPeriscopeOnAirButton: o
        }
    }, function(t, e, n) {
        function r(t) {
            var e, n = a.toRealArray(arguments).slice(1);
            return t = t || {}, n.forEach(function(t) {
                a.isType("object", t) && (e = t, i(e))
            }), e || (e = {}, n.push(e)), u.isString(t) && (t = a.aug({}, e, {
                sourceType: "widget",
                widgetId: t
            })), t.lang = e.lang, t.tweetLimit = e.tweetLimit, t.showReplies = e.showReplies, e.dataSource = c(t), e.useLegacyDefaults = e.dataSource instanceof d, h.apply(this, n)
        }

        function i(t) {
            t.ariaLive = t.ariaPolite
        }
        var o = n(18),
            s = n(23),
            a = n(11),
            u = n(25),
            c = n(180),
            d = n(196),
            f = n(198),
            l = n(256),
            h = l([], {}, f),
            p = {
                createTimeline: r
            };
        s.isTwitterURL(o.href) && (p.createTimelinePreview = function(t, e, n) {
            var r = {
                previewParams: t,
                useLegacyDefaults: !0,
                isPreviewTimeline: !0
            };
            return r.dataSource = c(r), h(e, r, n)
        }), t.exports = p
    }, function(t, e, n) {
        function r(t) {
            return function() {
                return i.toRealArray(arguments).slice(1).forEach(function(t) {
                    i.isType("object", t) && (t.hideCard = "none" == t.cards || "hidden" == t.cards, t.hideThread = "none" == t.conversation || "hidden" == t.conversation)
                }), t.apply(this, arguments)
            }
        }
        var i = n(11),
            o = n(225),
            s = n(256),
            a = r(s(["tweetId"], {}, o));
        t.exports = {
            createTweet: a,
            createTweetEmbed: a
        }
    }, function(t, e, n) {
        function r(t) {
            return function() {
                return i.toRealArray(arguments).slice(1).forEach(function(t) {
                    i.isType("object", t) && (t.screenName = t.screenName || t.screen_name, t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag)
                }), t.apply(this, arguments)
            }
        }
        var i = n(11),
            o = n(236),
            s = n(256),
            a = s(["url"], {
                type: "share"
            }, o),
            u = s(["buttonHashtag"], {
                type: "hashtag"
            }, o),
            c = s(["screenName"], {
                type: "mention"
            }, o);
        t.exports = {
            createShareButton: r(a),
            createHashtagButton: r(u),
            createMentionButton: r(c)
        }
    }, function(t, e, n) {
        function r(t) {
            var e, n = s.toRealArray(arguments).slice(1),
                r = t || {};
            return n.forEach(function(t) {
                s.isType("object", t) && (e = t)
            }), e || (e = {}, n.push(e)), (a.isString(t) || a.isNumber(t)) && (r = {
                sourceType: "tweet",
                id: t
            }), r.lang = e.lang, e.dataSource = u(r), c.apply(this, n)
        }
        var i = n(241),
            o = n(256),
            s = n(11),
            a = n(25),
            u = n(246),
            c = o([], {}, i);
        t.exports = {
            createVideo: r
        }
    }, function(t, e, n) {
        function r() {
            var t, e;
            for (c = 1, t = 0, e = d.length; t < e; t++) d[t]()
        }
        var i, o, s, a = n(9),
            u = n(7),
            c = 0,
            d = [],
            f = !1,
            l = a.createElement("a");
        /^loade|c/.test(a.readyState) && (c = 1), a.addEventListener && a.addEventListener("DOMContentLoaded", o = function() {
            a.removeEventListener("DOMContentLoaded", o, f), r()
        }, f), l.doScroll && a.attachEvent("onreadystatechange", i = function() {
            /^c/.test(a.readyState) && (a.detachEvent("onreadystatechange", i), r())
        }), s = l.doScroll ? function(t) {
            u.self != u.top ? c ? t() : d.push(t) : ! function() {
                try {
                    l.doScroll("left")
                } catch (e) {
                    return setTimeout(function() {
                        s(t)
                    }, 50)
                }
                t()
            }()
        } : function(t) {
            c ? t() : d.push(t)
        }, t.exports = s
    }, function(t, e, n) {
        var r = n(40),
            i = n(16);
        t.exports = function() {
            i.set("buildVersion", r.version)
        }
    }])))
}();