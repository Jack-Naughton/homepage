// nuke game state on load
// stats won't be affected, and total victory tracking is probably whacky. oh well
window.localStorage.removeItem('waffle-state');


function t(t) {
    return t && t.__esModule ? t.default : t
}

var e = {};
!function () {
    var t = {
        class: "className",
        contenteditable: "contentEditable",
        for: "htmlFor",
        readonly: "readOnly",
        maxlength: "maxLength",
        tabindex: "tabIndex",
        colspan: "colSpan",
        rowspan: "rowSpan",
        usemap: "useMap"
    };

    function n(t, e) {
        try {
            return t(e)
        } catch (t) {
            return e
        }
    }

    var r = document
        , i = window
        , o = r.documentElement
        , s = r.createElement.bind(r)
        , a = s("div")
        , u = s("table")
        , l = s("tbody")
        , c = s("tr")
        , f = Array.isArray
        , d = Array.prototype
        , h = d.concat
        , p = d.filter
        , g = d.indexOf
        , m = d.map
        , y = d.push
        , v = d.slice
        , b = d.some
        , w = d.splice
        , x = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/
        , _ = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/
        , S = /<.+>/
        , T = /^\w+$/;

    function C(t, e) {
        return t && (H(e) || D(e)) ? _.test(t) ? e.getElementsByClassName(t.slice(1)) : T.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t) : []
    }

    var E = function () {
        function t(t, e) {
            if (t) {
                if (R(t))
                    return t;
                var n = t;
                if (U(t)) {
                    var o = (R(e) ? e[0] : e) || r;
                    if (!(n = x.test(t) ? o.getElementById(t.slice(1)) : S.test(t) ? Nt(t) : C(t, o)))
                        return
                } else if (I(t))
                    return this.ready(t);
                (n.nodeType || n === i) && (n = [n]),
                    this.length = n.length;
                for (var s = 0, a = this.length; s < a; s++)
                    this[s] = n[s]
            }
        }

        return t.prototype.init = function (e, n) {
            return new t(e, n)
        }
            ,
            t
    }()
        , A = E.prototype
        , z = A.init;
    z.fn = z.prototype = A,
        A.length = 0,
        A.splice = w,
    "function" == typeof Symbol && (A[Symbol.iterator] = d[Symbol.iterator]),
        A.map = function (t) {
            return z(h.apply([], m.call(this, (function (e, n) {
                    return t.call(e, n, e)
                }
            ))))
        }
        ,
        A.slice = function (t, e) {
            return z(v.call(this, t, e))
        }
    ;
    var k = /-([a-z])/g;

    function N(t) {
        return t.replace(k, (function (t, e) {
                return e.toUpperCase()
            }
        ))
    }

    function P(t, e) {
        var n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
        return !!n && !!e && n.call(t, e)
    }

    function R(t) {
        return t instanceof E
    }

    function O(t) {
        return !!t && t === t.window
    }

    function H(t) {
        return !!t && 9 === t.nodeType
    }

    function D(t) {
        return !!t && 1 === t.nodeType
    }

    function B(t) {
        return "boolean" == typeof t
    }

    function I(t) {
        return "function" == typeof t
    }

    function U(t) {
        return "string" == typeof t
    }

    function M(t) {
        return void 0 === t
    }

    function L(t) {
        return null === t
    }

    function j(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function G(t) {
        if ("object" != typeof t || null === t)
            return !1;
        var e = Object.getPrototypeOf(t);
        return null === e || e === Object.prototype
    }

    function $(t, e, n) {
        if (n) {
            for (var r = t.length; r--;)
                if (!1 === e.call(t[r], r, t[r]))
                    return t
        } else if (G(t))
            for (var i = Object.keys(t), o = (r = 0,
                i.length); r < o; r++) {
                var s = i[r];
                if (!1 === e.call(t[s], s, t[s]))
                    return t
            }
        else
            for (r = 0,
                     o = t.length; r < o; r++)
                if (!1 === e.call(t[r], r, t[r]))
                    return t;
        return t
    }

    function q() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = !!B(t[0]) && t.shift()
            , r = t.shift()
            , i = t.length;
        if (!r)
            return {};
        if (!i)
            return q(n, z, r);
        for (var o = 0; o < i; o++) {
            var s = t[o];
            for (var a in s)
                n && (f(s[a]) || G(s[a])) ? (r[a] && r[a].constructor === s[a].constructor || (r[a] = new s[a].constructor),
                    q(n, r[a], s[a])) : r[a] = s[a]
        }
        return r
    }

    function F(t) {
        return U(t) ? function (e, n) {
                return P(n, t)
            }
            : I(t) ? t : R(t) ? function (e, n) {
                    return t.is(n)
                }
                : t ? function (e, n) {
                        return n === t
                    }
                    : function () {
                        return !1
                    }
    }

    function J(t, e) {
        return e ? t.filter(e) : t
    }

    z.guid = 1,
        z.isWindow = O,
        z.isFunction = I,
        z.isArray = f,
        z.isNumeric = j,
        z.isPlainObject = G,
        A.get = function (t) {
            return M(t) ? v.call(this) : this[(t = Number(t)) < 0 ? t + this.length : t]
        }
        ,
        A.eq = function (t) {
            return z(this.get(t))
        }
        ,
        A.first = function () {
            return this.eq(0)
        }
        ,
        A.last = function () {
            return this.eq(-1)
        }
        ,
        z.each = $,
        A.each = function (t) {
            return $(this, t)
        }
        ,
        A.prop = function (e, n) {
            if (e) {
                if (U(e))
                    return e = t[e] || e,
                        arguments.length < 2 ? this[0] && this[0][e] : this.each((function (t, r) {
                                r[e] = n
                            }
                        ));
                for (var r in e)
                    this.prop(r, e[r]);
                return this
            }
        }
        ,
        A.removeProp = function (e) {
            return this.each((function (n, r) {
                    delete r[t[e] || e]
                }
            ))
        }
        ,
        z.extend = q,
        A.extend = function (t) {
            return q(A, t)
        }
        ,
        A.filter = function (t) {
            var e = F(t);
            return z(p.call(this, (function (t, n) {
                    return e.call(t, n, t)
                }
            )))
        }
    ;
    var W = /\S+/g;

    function V(t) {
        return U(t) && t.match(W) || []
    }

    function X(t, e, n, r) {
        for (var i = [], o = I(e), s = r && F(r), a = 0, u = t.length; a < u; a++)
            if (o) {
                var l = e(t[a]);
                l.length && y.apply(i, l)
            } else
                for (var c = t[a][e]; !(null == c || r && s(-1, c));)
                    i.push(c),
                        c = n ? c[e] : null;
        return i
    }

    function Y(t) {
        return t.length > 1 ? p.call(t, (function (t, e, n) {
                return g.call(n, t) === e
            }
        )) : t
    }

    function Z(t, e, n) {
        if (D(t)) {
            var r = i.getComputedStyle(t, null);
            return n ? r.getPropertyValue(e) || void 0 : r[e] || t.style[e]
        }
    }

    function K(t, e) {
        return parseInt(Z(t, e), 10) || 0
    }

    A.hasClass = function (t) {
        return !!t && b.call(this, (function (e) {
                return D(e) && e.classList.contains(t)
            }
        ))
    }
        ,
        A.removeAttr = function (t) {
            var e = V(t);
            return this.each((function (t, n) {
                    D(n) && $(e, (function (t, e) {
                            n.removeAttribute(e)
                        }
                    ))
                }
            ))
        }
        ,
        A.attr = function (t, e) {
            if (t) {
                if (U(t)) {
                    if (arguments.length < 2) {
                        if (!this[0] || !D(this[0]))
                            return;
                        var n = this[0].getAttribute(t);
                        return L(n) ? void 0 : n
                    }
                    return M(e) ? this : L(e) ? this.removeAttr(t) : this.each((function (n, r) {
                            D(r) && r.setAttribute(t, e)
                        }
                    ))
                }
                for (var r in t)
                    this.attr(r, t[r]);
                return this
            }
        }
        ,
        A.toggleClass = function (t, e) {
            var n = V(t)
                , r = !M(e);
            return this.each((function (t, i) {
                    D(i) && $(n, (function (t, n) {
                            r ? e ? i.classList.add(n) : i.classList.remove(n) : i.classList.toggle(n)
                        }
                    ))
                }
            ))
        }
        ,
        A.addClass = function (t) {
            return this.toggleClass(t, !0)
        }
        ,
        A.removeClass = function (t) {
            return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "")
        }
        ,
        z.unique = Y,
        A.add = function (t, e) {
            return z(Y(this.get().concat(z(t, e).get())))
        }
    ;
    var Q = /^--/;

    function tt(t) {
        return Q.test(t)
    }

    var et = {}
        , nt = a.style
        , rt = ["webkit", "moz", "ms"];

    function it(t, e) {
        if (void 0 === e && (e = tt(t)),
            e)
            return t;
        if (!et[t]) {
            var n = N(t)
                , r = "" + n[0].toUpperCase() + n.slice(1);
            $((n + " " + rt.join(r + " ") + r).split(" "), (function (e, n) {
                    if (n in nt)
                        return et[t] = n,
                            !1
                }
            ))
        }
        return et[t]
    }

    var ot = {
        animationIterationCount: !0,
        columnCount: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0
    };

    function st(t, e, n) {
        return void 0 === n && (n = tt(t)),
            n || ot[t] || !j(e) ? e : e + "px"
    }

    A.css = function (t, e) {
        if (U(t)) {
            var n = tt(t);
            return t = it(t, n),
                arguments.length < 2 ? this[0] && Z(this[0], t, n) : t ? (e = st(t, e, n),
                    this.each((function (r, i) {
                            D(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e)
                        }
                    ))) : this
        }
        for (var r in t)
            this.css(r, t[r]);
        return this
    }
    ;
    var at = /^\s+|\s+$/;

    function ut(t, e) {
        var r = t.dataset[e] || t.dataset[N(e)];
        return at.test(r) ? r : n(JSON.parse, r)
    }

    function lt(t, e, r) {
        r = n(JSON.stringify, r),
            t.dataset[N(e)] = r
    }

    function ct(t, e) {
        var n = t.documentElement;
        return Math.max(t.body["scroll" + e], n["scroll" + e], t.body["offset" + e], n["offset" + e], n["client" + e])
    }

    function ft(t, e) {
        return K(t, "border" + (e ? "Left" : "Top") + "Width") + K(t, "padding" + (e ? "Left" : "Top")) + K(t, "padding" + (e ? "Right" : "Bottom")) + K(t, "border" + (e ? "Right" : "Bottom") + "Width")
    }

    A.data = function (t, e) {
        if (!t) {
            if (!this[0])
                return;
            var n = {};
            for (var r in this[0].dataset)
                n[r] = ut(this[0], r);
            return n
        }
        if (U(t))
            return arguments.length < 2 ? this[0] && ut(this[0], t) : M(e) ? this : this.each((function (n, r) {
                    lt(r, t, e)
                }
            ));
        for (var r in t)
            this.data(r, t[r]);
        return this
    }
        ,
        $([!0, !1], (function (t, e) {
                $(["Width", "Height"], (function (t, n) {
                        A[(e ? "outer" : "inner") + n] = function (r) {
                            if (this[0])
                                return O(this[0]) ? e ? this[0]["inner" + n] : this[0].document.documentElement["client" + n] : H(this[0]) ? ct(this[0], n) : this[0][(e ? "offset" : "client") + n] + (r && e ? K(this[0], "margin" + (t ? "Top" : "Left")) + K(this[0], "margin" + (t ? "Bottom" : "Right")) : 0)
                        }
                    }
                ))
            }
        )),
        $(["Width", "Height"], (function (t, e) {
                var n = e.toLowerCase();
                A[n] = function (r) {
                    if (!this[0])
                        return M(r) ? void 0 : this;
                    if (!arguments.length)
                        return O(this[0]) ? this[0].document.documentElement["client" + e] : H(this[0]) ? ct(this[0], e) : this[0].getBoundingClientRect()[n] - ft(this[0], !t);
                    var i = parseInt(r, 10);
                    return this.each((function (e, r) {
                            if (D(r)) {
                                var o = Z(r, "boxSizing");
                                r.style[n] = st(n, i + ("border-box" === o ? ft(r, !t) : 0))
                            }
                        }
                    ))
                }
            }
        ));
    var dt = {};

    function ht(t) {
        return "none" === Z(t, "display")
    }

    function pt(t, e) {
        return !e || !b.call(e, (function (e) {
                return t.indexOf(e) < 0
            }
        ))
    }

    A.toggle = function (t) {
        return this.each((function (e, n) {
                D(n) && ((M(t) ? ht(n) : t) ? (n.style.display = n.___cd || "",
                ht(n) && (n.style.display = function (t) {
                    if (dt[t])
                        return dt[t];
                    var e = s(t);
                    r.body.insertBefore(e, null);
                    var n = Z(e, "display");
                    return r.body.removeChild(e),
                        dt[t] = "none" !== n ? n : "block"
                }(n.tagName))) : (n.___cd = Z(n, "display"),
                    n.style.display = "none"))
            }
        ))
    }
        ,
        A.hide = function () {
            return this.toggle(!1)
        }
        ,
        A.show = function () {
            return this.toggle(!0)
        }
    ;
    var gt = {
        focus: "focusin",
        blur: "focusout"
    }
        , mt = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
        , yt = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;

    function vt(t) {
        return mt[t] || gt[t] || t
    }

    function bt(t) {
        return t.___ce = t.___ce || {}
    }

    function wt(t) {
        var e = t.split(".");
        return [e[0], e.slice(1).sort()]
    }

    function xt(t, e, n, r, i) {
        var o = bt(t);
        if (e)
            o[e] && (o[e] = o[e].filter((function (o) {
                    var s = o[0]
                        , a = o[1]
                        , u = o[2];
                    if (i && u.guid !== i.guid || !pt(s, n) || r && r !== a)
                        return !0;
                    t.removeEventListener(e, u)
                }
            )));
        else
            for (e in o)
                xt(t, e, n, r, i)
    }

    function _t(t) {
        return t.multiple && t.options ? X(p.call(t.options, (function (t) {
                return t.selected && !t.disabled && !t.parentNode.disabled
            }
        )), "value") : t.value || ""
    }

    A.off = function (t, e, n) {
        var r = this;
        if (M(t))
            this.each((function (t, e) {
                    (D(e) || H(e) || O(e)) && xt(e)
                }
            ));
        else if (U(t))
            I(e) && (n = e,
                e = ""),
                $(V(t), (function (t, i) {
                        var o = wt(i)
                            , s = o[0]
                            , a = o[1]
                            , u = vt(s);
                        r.each((function (t, r) {
                                (D(r) || H(r) || O(r)) && xt(r, u, a, e, n)
                            }
                        ))
                    }
                ));
        else
            for (var i in t)
                this.off(i, t[i]);
        return this
    }
        ,
        A.on = function (t, e, n, r, i) {
            var o = this;
            if (!U(t)) {
                for (var s in t)
                    this.on(s, e, n, t[s], i);
                return this
            }
            return U(e) || (M(e) || L(e) ? e = "" : M(n) ? (n = e,
                e = "") : (r = n,
                n = e,
                e = "")),
            I(r) || (r = n,
                n = void 0),
                r ? ($(V(t), (function (t, s) {
                        var a = wt(s)
                            , u = a[0]
                            , l = a[1]
                            , c = vt(u)
                            , f = u in mt
                            , d = u in gt;
                        c && o.each((function (t, o) {
                                if (D(o) || H(o) || O(o)) {
                                    var s = function t(s) {
                                        if (s.target["___i" + s.type])
                                            return s.stopImmediatePropagation();
                                        if ((!s.namespace || pt(l, s.namespace.split("."))) && (e || !(d && (s.target !== o || s.___ot === c) || f && s.relatedTarget && o.contains(s.relatedTarget)))) {
                                            var a = o;
                                            if (e) {
                                                for (var u = s.target; !P(u, e);) {
                                                    if (u === o)
                                                        return;
                                                    if (!(u = u.parentNode))
                                                        return
                                                }
                                                a = u,
                                                    s.___cd = !0
                                            }
                                            s.___cd && Object.defineProperty(s, "currentTarget", {
                                                configurable: !0,
                                                get: function () {
                                                    return a
                                                }
                                            }),
                                                Object.defineProperty(s, "data", {
                                                    configurable: !0,
                                                    get: function () {
                                                        return n
                                                    }
                                                });
                                            var h = r.call(a, s, s.___td);
                                            i && xt(o, c, l, e, t),
                                            !1 === h && (s.preventDefault(),
                                                s.stopPropagation())
                                        }
                                    };
                                    s.guid = r.guid = r.guid || z.guid++,
                                        function (t, e, n, r, i) {
                                            var o = bt(t);
                                            o[e] = o[e] || [],
                                                o[e].push([n, r, i]),
                                                t.addEventListener(e, i)
                                        }(o, c, l, e, s)
                                }
                            }
                        ))
                    }
                )),
                    this) : this
        }
        ,
        A.one = function (t, e, n, r) {
            return this.on(t, e, n, r, !0)
        }
        ,
        A.ready = function (t) {
            var e = function () {
                return setTimeout(t, 0, z)
            };
            return "loading" !== r.readyState ? e() : r.addEventListener("DOMContentLoaded", e),
                this
        }
        ,
        A.trigger = function (t, e) {
            if (U(t)) {
                var n = wt(t)
                    , i = n[0]
                    , o = n[1]
                    , s = vt(i);
                if (!s)
                    return this;
                var a = yt.test(s) ? "MouseEvents" : "HTMLEvents";
                (t = r.createEvent(a)).initEvent(s, !0, !0),
                    t.namespace = o.join("."),
                    t.___ot = i
            }
            t.___td = e;
            var u = t.___ot in gt;
            return this.each((function (e, n) {
                    u && I(n[t.___ot]) && (n["___i" + t.type] = !0,
                        n[t.___ot](),
                        n["___i" + t.type] = !1),
                        n.dispatchEvent(t)
                }
            ))
        }
    ;
    var St = /%20/g
        , Tt = /\r?\n/g;
    var Ct = /file|reset|submit|button|image/i
        , Et = /radio|checkbox/i;
    A.serialize = function () {
        var t = "";
        return this.each((function (e, n) {
                $(n.elements || [n], (function (e, n) {
                        if (!(n.disabled || !n.name || "FIELDSET" === n.tagName || Ct.test(n.type) || Et.test(n.type) && !n.checked)) {
                            var r = _t(n);
                            if (!M(r))
                                $(f(r) ? r : [r], (function (e, r) {
                                        t += function (t, e) {
                                            return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e.replace(Tt, "\r\n")).replace(St, "+")
                                        }(n.name, r)
                                    }
                                ))
                        }
                    }
                ))
            }
        )),
            t.slice(1)
    }
        ,
        A.val = function (t) {
            return arguments.length ? this.each((function (e, n) {
                    var r = n.multiple && n.options;
                    if (r || Et.test(n.type)) {
                        var i = f(t) ? m.call(t, String) : L(t) ? [] : [String(t)];
                        r ? $(n.options, (function (t, e) {
                                e.selected = i.indexOf(e.value) >= 0
                            }
                        ), !0) : n.checked = i.indexOf(n.value) >= 0
                    } else
                        n.value = M(t) || L(t) ? "" : t
                }
            )) : this[0] && _t(this[0])
        }
        ,
        A.clone = function () {
            return this.map((function (t, e) {
                    return e.cloneNode(!0)
                }
            ))
        }
        ,
        A.detach = function (t) {
            return J(this, t).each((function (t, e) {
                    e.parentNode && e.parentNode.removeChild(e)
                }
            )),
                this
        }
    ;
    var At = /^\s*<(\w+)[^>]*>/
        , zt = /^<(\w+)\s*\/?>(?:<\/\1>)?$/
        , kt = {
        "*": a,
        tr: l,
        td: c,
        th: c,
        thead: u,
        tbody: u,
        tfoot: u
    };

    function Nt(t) {
        if (!U(t))
            return [];
        if (zt.test(t))
            return [s(RegExp.$1)];
        var e = At.test(t) && RegExp.$1
            , n = kt[e] || kt["*"];
        return n.innerHTML = t,
            z(n.childNodes).detach().get()
    }

    z.parseHTML = Nt,
        A.empty = function () {
            return this.each((function (t, e) {
                    for (; e.firstChild;)
                        e.removeChild(e.firstChild)
                }
            ))
        }
        ,
        A.html = function (t) {
            return arguments.length ? M(t) ? this : this.each((function (e, n) {
                    D(n) && (n.innerHTML = t)
                }
            )) : this[0] && this[0].innerHTML
        }
        ,
        A.remove = function (t) {
            return J(this, t).detach().off(),
                this
        }
        ,
        A.text = function (t) {
            return M(t) ? this[0] ? this[0].textContent : "" : this.each((function (e, n) {
                    D(n) && (n.textContent = t)
                }
            ))
        }
        ,
        A.unwrap = function () {
            return this.parent().each((function (t, e) {
                    if ("BODY" !== e.tagName) {
                        var n = z(e);
                        n.replaceWith(n.children())
                    }
                }
            )),
                this
        }
        ,
        A.offset = function () {
            var t = this[0];
            if (t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }
            }
        }
        ,
        A.offsetParent = function () {
            return this.map((function (t, e) {
                    for (var n = e.offsetParent; n && "static" === Z(n, "position");)
                        n = n.offsetParent;
                    return n || o
                }
            ))
        }
        ,
        A.position = function () {
            var t = this[0];
            if (t) {
                var e = "fixed" === Z(t, "position")
                    , n = e ? t.getBoundingClientRect() : this.offset();
                if (!e) {
                    for (var r = t.ownerDocument, i = t.offsetParent || r.documentElement; (i === r.body || i === r.documentElement) && "static" === Z(i, "position");)
                        i = i.parentNode;
                    if (i !== t && D(i)) {
                        var o = z(i).offset();
                        n.top -= o.top + K(i, "borderTopWidth"),
                            n.left -= o.left + K(i, "borderLeftWidth")
                    }
                }
                return {
                    top: n.top - K(t, "marginTop"),
                    left: n.left - K(t, "marginLeft")
                }
            }
        }
        ,
        A.children = function (t) {
            return J(z(Y(X(this, (function (t) {
                    return t.children
                }
            )))), t)
        }
        ,
        A.contents = function () {
            return z(Y(X(this, (function (t) {
                    return "IFRAME" === t.tagName ? [t.contentDocument] : "TEMPLATE" === t.tagName ? t.content.childNodes : t.childNodes
                }
            ))))
        }
        ,
        A.find = function (t) {
            return z(Y(X(this, (function (e) {
                    return C(t, e)
                }
            ))))
        }
    ;
    var Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Rt = /^$|^module$|\/(java|ecma)script/i
        , Ot = ["type", "src", "nonce", "noModule"];

    function Ht(t, e, n, r, i) {
        var a, u, l;
        r ? t.insertBefore(e, n ? t.firstChild : null) : t.parentNode.insertBefore(e, n ? t : t.nextSibling),
        i && (a = e,
            u = t.ownerDocument,
            (l = z(a)).filter("script").add(l.find("script")).each((function (t, e) {
                    if (Rt.test(e.type) && o.contains(e)) {
                        var n = s("script");
                        n.text = e.textContent.replace(Pt, ""),
                            $(Ot, (function (t, r) {
                                    e[r] && (n[r] = e[r])
                                }
                            )),
                            u.head.insertBefore(n, null),
                            u.head.removeChild(n)
                    }
                }
            )))
    }

    function Dt(t, e, n, r, i, o, s, a) {
        return $(t, (function (t, o) {
                $(z(o), (function (t, o) {
                        $(z(e), (function (e, s) {
                                var a = n ? s : o
                                    , u = n ? t : e;
                                Ht(n ? o : s, u ? a.cloneNode(!0) : a, r, i, !u)
                            }
                        ), a)
                    }
                ), s)
            }
        ), o),
            e
    }

    A.after = function () {
        return Dt(arguments, this, !1, !1, !1, !0, !0)
    }
        ,
        A.append = function () {
            return Dt(arguments, this, !1, !1, !0)
        }
        ,
        A.appendTo = function (t) {
            return Dt(arguments, this, !0, !1, !0)
        }
        ,
        A.before = function () {
            return Dt(arguments, this, !1, !0)
        }
        ,
        A.insertAfter = function (t) {
            return Dt(arguments, this, !0, !1, !1, !1, !1, !0)
        }
        ,
        A.insertBefore = function (t) {
            return Dt(arguments, this, !0, !0)
        }
        ,
        A.prepend = function () {
            return Dt(arguments, this, !1, !0, !0, !0, !0)
        }
        ,
        A.prependTo = function (t) {
            return Dt(arguments, this, !0, !0, !0, !1, !1, !0)
        }
        ,
        A.replaceWith = function (t) {
            return this.before(t).remove()
        }
        ,
        A.replaceAll = function (t) {
            return z(t).replaceWith(this),
                this
        }
        ,
        A.wrapAll = function (t) {
            for (var e = z(t), n = e[0]; n.children.length;)
                n = n.firstElementChild;
            return this.first().before(e),
                this.appendTo(n)
        }
        ,
        A.wrap = function (t) {
            return this.each((function (e, n) {
                    var r = z(t)[0];
                    z(n).wrapAll(e ? r.cloneNode(!0) : r)
                }
            ))
        }
        ,
        A.wrapInner = function (t) {
            return this.each((function (e, n) {
                    var r = z(n)
                        , i = r.contents();
                    i.length ? i.wrapAll(t) : r.append(t)
                }
            ))
        }
        ,
        A.has = function (t) {
            var e = U(t) ? function (e, n) {
                        return C(t, n).length
                    }
                    : function (e, n) {
                        return n.contains(t)
                    }
            ;
            return this.filter(e)
        }
        ,
        A.is = function (t) {
            var e = F(t);
            return b.call(this, (function (t, n) {
                    return e.call(t, n, t)
                }
            ))
        }
        ,
        A.next = function (t, e, n) {
            return J(z(Y(X(this, "nextElementSibling", e, n))), t)
        }
        ,
        A.nextAll = function (t) {
            return this.next(t, !0)
        }
        ,
        A.nextUntil = function (t, e) {
            return this.next(e, !0, t)
        }
        ,
        A.not = function (t) {
            var e = F(t);
            return this.filter((function (n, r) {
                    return (!U(t) || D(r)) && !e.call(r, n, r)
                }
            ))
        }
        ,
        A.parent = function (t) {
            return J(z(Y(X(this, "parentNode"))), t)
        }
        ,
        A.index = function (t) {
            var e = t ? z(t)[0] : this[0]
                , n = t ? this : z(e).parent().children();
            return g.call(n, e)
        }
        ,
        A.closest = function (t) {
            var e = this.filter(t);
            if (e.length)
                return e;
            var n = this.parent();
            return n.length ? n.closest(t) : e
        }
        ,
        A.parents = function (t, e) {
            return J(z(Y(X(this, "parentElement", !0, e))), t)
        }
        ,
        A.parentsUntil = function (t, e) {
            return this.parents(e, t)
        }
        ,
        A.prev = function (t, e, n) {
            return J(z(Y(X(this, "previousElementSibling", e, n))), t)
        }
        ,
        A.prevAll = function (t) {
            return this.prev(t, !0)
        }
        ,
        A.prevUntil = function (t, e) {
            return this.prev(e, !0, t)
        }
        ,
        A.siblings = function (t) {
            return J(z(Y(X(this, (function (t) {
                    return z(t).parent().children().not(t)
                }
            )))), t)
        }
        ,
        void 0 !== e ? e = z : i.cash = i.$ = z
}();
var n = !1;
if ("undefined" != typeof window) {
    var r = {
        get passive() {
            n = !0
        }
    };
    window.addEventListener("testPassive", null, r),
        window.removeEventListener("testPassive", null, r)
}
var i = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1)
    , o = []
    , s = !1
    , a = -1
    , u = void 0
    , l = void 0
    , c = void 0
    , f = function (t) {
    return o.some((function (e) {
            return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
        }
    ))
}
    , d = function (t) {
    var e = t || window.event;
    return !!f(e.target) || (e.touches.length > 1 || (e.preventDefault && e.preventDefault(),
        !1))
}
    , h = function () {
    void 0 !== c && (document.body.style.paddingRight = c,
        c = void 0),
    void 0 !== u && (document.body.style.overflow = u,
        u = void 0)
}
    , p = function () {
    if (void 0 !== l) {
        var t = -parseInt(document.body.style.top, 10)
            , e = -parseInt(document.body.style.left, 10);
        document.body.style.position = l.position,
            document.body.style.top = l.top,
            document.body.style.left = l.left,
            window.scrollTo(e, t),
            l = void 0
    }
}
    , g = function (t, e) {
    if (t) {
        if (!o.some((function (e) {
                return e.targetElement === t
            }
        ))) {
            var r = {
                targetElement: t,
                options: e || {}
            };
            o = [].concat(function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
                return Array.from(t)
            }(o), [r]),
                i ? window.requestAnimationFrame((function () {
                        if (void 0 === l) {
                            l = {
                                position: document.body.style.position,
                                top: document.body.style.top,
                                left: document.body.style.left
                            };
                            var t = window
                                , e = t.scrollY
                                , n = t.scrollX
                                , r = t.innerHeight;
                            document.body.style.position = "fixed",
                                document.body.style.top = -e,
                                document.body.style.left = -n,
                                setTimeout((function () {
                                        return window.requestAnimationFrame((function () {
                                                var t = r - window.innerHeight;
                                                t && e >= r && (document.body.style.top = -(e + t))
                                            }
                                        ))
                                    }
                                ), 300)
                        }
                    }
                )) : function (t) {
                    if (void 0 === c) {
                        var e = !!t && !0 === t.reserveScrollBarGap
                            , n = window.innerWidth - document.documentElement.clientWidth;
                        if (e && n > 0) {
                            var r = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
                            c = document.body.style.paddingRight,
                                document.body.style.paddingRight = r + n + "px"
                        }
                    }
                    void 0 === u && (u = document.body.style.overflow,
                        document.body.style.overflow = "hidden")
                }(e),
            i && (t.ontouchstart = function (t) {
                1 === t.targetTouches.length && (a = t.targetTouches[0].clientY)
            }
                ,
                t.ontouchmove = function (e) {
                    1 === e.targetTouches.length && function (t, e) {
                        var n = t.targetTouches[0].clientY - a;
                        !f(t.target) && (e && 0 === e.scrollTop && n > 0 || function (t) {
                            return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
                        }(e) && n < 0 ? d(t) : t.stopPropagation())
                    }(e, t)
                }
                ,
            s || (document.addEventListener("touchmove", d, n ? {
                passive: !1
            } : void 0),
                s = !0))
        }
    } else
        console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
}
    , m = function () {
    i && (o.forEach((function (t) {
            t.targetElement.ontouchstart = null,
                t.targetElement.ontouchmove = null
        }
    )),
    s && (document.removeEventListener("touchmove", d, n ? {
        passive: !1
    } : void 0),
        s = !1),
        a = -1),
        i ? p() : h(),
        o = []
};
var y = new class {
        constructor() {
            this.eventHandlers = [],
                this.solution = [],
                this.puzzle = [],
                this.swapsRemaining = 0,
                this.tiles = [],
                this.gameNumber = 0,
                this.nextPuzzle = null,
                this.startTime = null,
                this.load()
        }

        load() {
            const t = JSON.parse(localStorage.getItem("waffle-state"));
            t && (this.solution = t.solution,
                this.puzzle = t.puzzle,
                this.swapsRemaining = t.swapsRemaining,
                this.gameNumber = t.gameNumber || 0,
                this.nextPuzzle = t.nextPuzzle || null,
                this.startTime = t.startTime || null)
        }

        save() {
            const t = JSON.parse(JSON.stringify(this));
            delete t.eventHandlers,
                delete t.tiles,
                localStorage.setItem("waffle-state", JSON.stringify(t))
        }

        on(t, e) {
            this.eventHandlers[t] = this.eventHandlers[t] || [],
                this.eventHandlers[t].push(e)
        }

        off(t, e) {
            this.eventHandlers[t] && (this.eventHandlers[t] = this.eventHandlers[t].filter((t => t !== e)))
        }

        emit(t, ...e) {
            this.eventHandlers[t] && this.eventHandlers[t].forEach((t => t(...e)))
        }

        setSolution(t) {
            this.solution = t,
                this.emit("SOLUTION_CHANGED", this.solution),
                this.save()
        }

        setPuzzle(t) {
            this.puzzle = t,
                this.emit("PUZZLE_CHANGED", this.puzzle),
                this.save()
        }

        setSwapsRemaining(t) {
            this.swapsRemaining = t,
                this.emit("SWAPS_CHANGED", this.swapsRemaining),
                this.save()
        }

        setTiles(t) {
            this.tiles = t,
                this.emit("TILES_CHANGED", this.tiles),
                this.save()
        }

        setGameNumber(t) {
            this.gameNumber = t,
                this.emit("GAMENUMBER_CHANGED", this.gameNumber),
                this.save()
        }

        setNextPuzzle(t) {
            this.nextPuzzle = t,
                this.save()
        }

        setStartTime(t) {
            this.startTime = t,
                this.save()
        }

        getGameNumber() {
            return this.gameNumber
        }

        getSolution() {
            return this.solution
        }

        getTiles() {
            return this.tiles
        }

        getPuzzle() {
            return this.puzzle
        }

        getSwapsRemaining() {
            return this.swapsRemaining
        }

        getNextPuzzle() {
            return this.nextPuzzle
        }

        getStartTime() {
            return this.startTime
        }
    }
;
var v, b, w, x, _, S = new class {
    constructor() {
        this.eventHandlers = {},
            this.eventHandlers = {},
            this.highcontrast = !1,
            this.darkmode = !1,
            this.load()
    }

    load() {
        const t = JSON.parse(localStorage.getItem("waffle-settings"));
        t && (this.highcontrast = t.highcontrast || this.highcontrast,
            this.darkmode = t.darkmode || this.darkmode,
            this.emit("SETTINGS_CHANGED"))
    }

    save() {
        const t = JSON.parse(JSON.stringify(this));
        delete t.eventHandlers,
            localStorage.setItem("waffle-settings", JSON.stringify(t))
    }

    setHighcontrast(t) {
        this.highcontrast = t,
            this.save(),
            this.emit("SETTINGS_CHANGED")
    }

    getHighcontrast() {
        return this.highcontrast
    }

    setDarkMode(t) {
        this.darkmode = t,
            this.save(),
            this.emit("SETTINGS_CHANGED")
    }

    getDarkMode() {
        return this.darkmode
    }

    on(t, e) {
        this.eventHandlers[t] = this.eventHandlers[t] || [],
            this.eventHandlers[t].push(e)
    }

    off(t, e) {
        this.eventHandlers[t] && (this.eventHandlers[t] = this.eventHandlers[t].filter((t => t !== e)))
    }

    emit(t, ...e) {
        this.eventHandlers[t] && this.eventHandlers[t].forEach((t => t(...e)))
    }
}
    , T = {};
v = T,
    b = function () {
        function t(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    t[r] = n[r]
            }
            return t
        }

        var e = function e(n, r) {
            function i(e, i, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof (o = t({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                    o.expires && (o.expires = o.expires.toUTCString()),
                        e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                    var s = "";
                    for (var a in o)
                        o[a] && (s += "; " + a,
                        !0 !== o[a] && (s += "=" + o[a].split(";")[0]));
                    return document.cookie = e + "=" + n.write(i, e) + s
                }
            }

            return Object.create({
                set: i,
                get: function (t) {
                    if ("undefined" != typeof document && (!arguments.length || t)) {
                        for (var e = document.cookie ? document.cookie.split("; ") : [], r = {}, i = 0; i < e.length; i++) {
                            var o = e[i].split("=")
                                , s = o.slice(1).join("=");
                            try {
                                var a = decodeURIComponent(o[0]);
                                if (r[a] = n.read(s, a),
                                t === a)
                                    break
                            } catch (t) {
                            }
                        }
                        return t ? r[t] : r
                    }
                },
                remove: function (e, n) {
                    i(e, "", t({}, n, {
                        expires: -1
                    }))
                },
                withAttributes: function (n) {
                    return e(this.converter, t({}, this.attributes, n))
                },
                withConverter: function (n) {
                    return e(t({}, this.converter, n), this.attributes)
                }
            }, {
                attributes: {
                    value: Object.freeze(r)
                },
                converter: {
                    value: Object.freeze(n)
                }
            })
        }({
            read: function (t) {
                return '"' === t[0] && (t = t.slice(1, -1)),
                    t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            },
            write: function (t) {
                return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
            }
        }, {
            path: "/"
        });
        return e
    }
    ,
    "object" == typeof T ? T = b() : "function" == typeof define && define.amd ? define(b) : (v = v || self,
            w = v.Cookies,
            (x = v.Cookies = b()).noConflict = function () {
                return v.Cookies = w,
                    x
            }
    );
var C = new Uint8Array(16);

function E() {
    if (!_ && !(_ = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return _(C)
}

var A = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
for (var z = function (t) {
    return "string" == typeof t && A.test(t)
}, k = [], N = 0; N < 256; ++N)
    k.push((N + 256).toString(16).substr(1));
var P = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        ,
        n = (k[t[e + 0]] + k[t[e + 1]] + k[t[e + 2]] + k[t[e + 3]] + "-" + k[t[e + 4]] + k[t[e + 5]] + "-" + k[t[e + 6]] + k[t[e + 7]] + "-" + k[t[e + 8]] + k[t[e + 9]] + "-" + k[t[e + 10]] + k[t[e + 11]] + k[t[e + 12]] + k[t[e + 13]] + k[t[e + 14]] + k[t[e + 15]]).toLowerCase();
    if (!z(n))
        throw TypeError("Stringified UUID is invalid");
    return n
};
var R, O = function (t, e, n) {
        var r = (t = t || {}).random || (t.rng || E)();
        if (r[6] = 15 & r[6] | 64,
            r[8] = 63 & r[8] | 128,
            e) {
            n = n || 0;
            for (var i = 0; i < 16; ++i)
                e[n + i] = r[i];
            return e
        }
        return P(r)
    }, H = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== H && H,
    D = "URLSearchParams" in H, B = "Symbol" in H && "iterator" in Symbol,
    I = "FileReader" in H && "Blob" in H && function () {
        try {
            return new Blob,
                !0
        } catch (t) {
            return !1
        }
    }(), U = "FormData" in H, M = "ArrayBuffer" in H;
if (M)
    var L = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
        , j = ArrayBuffer.isView || function (t) {
            return t && L.indexOf(Object.prototype.toString.call(t)) > -1
        }
    ;

function G(t) {
    if ("string" != typeof t && (t = String(t)),
    /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
        throw new TypeError('Invalid character in header field name: "' + t + '"');
    return t.toLowerCase()
}

function $(t) {
    return "string" != typeof t && (t = String(t)),
        t
}

function q(t) {
    var e = {
        next: function () {
            var e = t.shift();
            return {
                done: void 0 === e,
                value: e
            }
        }
    };
    return B && (e[Symbol.iterator] = function () {
            return e
        }
    ),
        e
}

function F(t) {
    this.map = {},
        t instanceof F ? t.forEach((function (t, e) {
                this.append(e, t)
            }
        ), this) : Array.isArray(t) ? t.forEach((function (t) {
                this.append(t[0], t[1])
            }
        ), this) : t && Object.getOwnPropertyNames(t).forEach((function (e) {
                this.append(e, t[e])
            }
        ), this)
}

function J(t) {
    if (t.bodyUsed)
        return Promise.reject(new TypeError("Already read"));
    t.bodyUsed = !0
}

function W(t) {
    return new Promise((function (e, n) {
            t.onload = function () {
                e(t.result)
            }
                ,
                t.onerror = function () {
                    n(t.error)
                }
        }
    ))
}

function V(t) {
    var e = new FileReader
        , n = W(e);
    return e.readAsArrayBuffer(t),
        n
}

function X(t) {
    if (t.slice)
        return t.slice(0);
    var e = new Uint8Array(t.byteLength);
    return e.set(new Uint8Array(t)),
        e.buffer
}

function Y() {
    return this.bodyUsed = !1,
        this._initBody = function (t) {
            var e;
            this.bodyUsed = this.bodyUsed,
                this._bodyInit = t,
                t ? "string" == typeof t ? this._bodyText = t : I && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : U && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : D && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : M && I && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = X(t.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : M && (ArrayBuffer.prototype.isPrototypeOf(t) || j(t)) ? this._bodyArrayBuffer = X(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : D && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }
        ,
    I && (this.blob = function () {
            var t = J(this);
            if (t)
                return t;
            if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }
            ,
            this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                    var t = J(this);
                    return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                }
                return this.blob().then(V)
            }
    ),
        this.text = function () {
            var t, e, n, r = J(this);
            if (r)
                return r;
            if (this._bodyBlob)
                return t = this._bodyBlob,
                    e = new FileReader,
                    n = W(e),
                    e.readAsText(t),
                    n;
            if (this._bodyArrayBuffer)
                return Promise.resolve(function (t) {
                    for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++)
                        n[r] = String.fromCharCode(e[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }
        ,
    U && (this.formData = function () {
            return this.text().then(Q)
        }
    ),
        this.json = function () {
            return this.text().then(JSON.parse)
        }
        ,
        this
}

F.prototype.append = function (t, e) {
    t = G(t),
        e = $(e);
    var n = this.map[t];
    this.map[t] = n ? n + ", " + e : e
}
    ,
    F.prototype.delete = function (t) {
        delete this.map[G(t)]
    }
    ,
    F.prototype.get = function (t) {
        return t = G(t),
            this.has(t) ? this.map[t] : null
    }
    ,
    F.prototype.has = function (t) {
        return this.map.hasOwnProperty(G(t))
    }
    ,
    F.prototype.set = function (t, e) {
        this.map[G(t)] = $(e)
    }
    ,
    F.prototype.forEach = function (t, e) {
        for (var n in this.map)
            this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
    }
    ,
    F.prototype.keys = function () {
        var t = [];
        return this.forEach((function (e, n) {
                t.push(n)
            }
        )),
            q(t)
    }
    ,
    F.prototype.values = function () {
        var t = [];
        return this.forEach((function (e) {
                t.push(e)
            }
        )),
            q(t)
    }
    ,
    F.prototype.entries = function () {
        var t = [];
        return this.forEach((function (e, n) {
                t.push([n, e])
            }
        )),
            q(t)
    }
    ,
B && (F.prototype[Symbol.iterator] = F.prototype.entries);
var Z = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

function K(t, e) {
    if (!(this instanceof K))
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    var n, r, i = (e = e || {}).body;
    if (t instanceof K) {
        if (t.bodyUsed)
            throw new TypeError("Already read");
        this.url = t.url,
            this.credentials = t.credentials,
        e.headers || (this.headers = new F(t.headers)),
            this.method = t.method,
            this.mode = t.mode,
            this.signal = t.signal,
        i || null == t._bodyInit || (i = t._bodyInit,
            t.bodyUsed = !0)
    } else
        this.url = String(t);
    if (this.credentials = e.credentials || this.credentials || "same-origin",
    !e.headers && this.headers || (this.headers = new F(e.headers)),
        this.method = (n = e.method || this.method || "GET",
            r = n.toUpperCase(),
            Z.indexOf(r) > -1 ? r : n),
        this.mode = e.mode || this.mode || null,
        this.signal = e.signal || this.signal,
        this.referrer = null,
    ("GET" === this.method || "HEAD" === this.method) && i)
        throw new TypeError("Body not allowed for GET or HEAD requests");
    if (this._initBody(i),
        !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
        var o = /([?&])_=[^&]*/;
        if (o.test(this.url))
            this.url = this.url.replace(o, "$1_=" + (new Date).getTime());
        else {
            this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
        }
    }
}

function Q(t) {
    var e = new FormData;
    return t.trim().split("&").forEach((function (t) {
            if (t) {
                var n = t.split("=")
                    , r = n.shift().replace(/\+/g, " ")
                    , i = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(i))
            }
        }
    )),
        e
}

function tt(t, e) {
    if (!(this instanceof tt))
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    e || (e = {}),
        this.type = "default",
        this.status = void 0 === e.status ? 200 : e.status,
        this.ok = this.status >= 200 && this.status < 300,
        this.statusText = void 0 === e.statusText ? "" : "" + e.statusText,
        this.headers = new F(e.headers),
        this.url = e.url || "",
        this._initBody(t)
}

K.prototype.clone = function () {
    return new K(this, {
        body: this._bodyInit
    })
}
    ,
    Y.call(K.prototype),
    Y.call(tt.prototype),
    tt.prototype.clone = function () {
        return new tt(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new F(this.headers),
            url: this.url
        })
    }
    ,
    tt.error = function () {
        var t = new tt(null, {
            status: 0,
            statusText: ""
        });
        return t.type = "error",
            t
    }
;
var et = [301, 302, 303, 307, 308];
tt.redirect = function (t, e) {
    if (-1 === et.indexOf(e))
        throw new RangeError("Invalid status code");
    return new tt(null, {
        status: e,
        headers: {
            location: t
        }
    })
}
;
var nt = H.DOMException;
try {
    new nt
} catch (t) {
    (nt = function (t, e) {
            this.message = t,
                this.name = e;
            var n = Error(t);
            this.stack = n.stack
        }
    ).prototype = Object.create(Error.prototype),
        nt.prototype.constructor = nt
}

function rt(t, e) {
    return new Promise((function (n, r) {
            var i = new K(t, e);
            if (i.signal && i.signal.aborted)
                return r(new nt("Aborted", "AbortError"));
            var o = new XMLHttpRequest;

            function s() {
                o.abort()
            }

            o.onload = function () {
                var t, e, r = {
                    status: o.status,
                    statusText: o.statusText,
                    headers: (t = o.getAllResponseHeaders() || "",
                        e = new F,
                        t.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function (t) {
                                return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                            }
                        )).forEach((function (t) {
                                var n = t.split(":")
                                    , r = n.shift().trim();
                                if (r) {
                                    var i = n.join(":").trim();
                                    e.append(r, i)
                                }
                            }
                        )),
                        e)
                };
                r.url = "responseURL" in o ? o.responseURL : r.headers.get("X-Request-URL");
                var i = "response" in o ? o.response : o.responseText;
                setTimeout((function () {
                        n(new tt(i, r))
                    }
                ), 0)
            }
                ,
                o.onerror = function () {
                    setTimeout((function () {
                            r(new TypeError("Network request failed"))
                        }
                    ), 0)
                }
                ,
                o.ontimeout = function () {
                    setTimeout((function () {
                            r(new TypeError("Network request failed"))
                        }
                    ), 0)
                }
                ,
                o.onabort = function () {
                    setTimeout((function () {
                            r(new nt("Aborted", "AbortError"))
                        }
                    ), 0)
                }
                ,
                o.open(i.method, function (t) {
                    try {
                        return "" === t && H.location.href ? H.location.href : t
                    } catch (e) {
                        return t
                    }
                }(i.url), !0),
                "include" === i.credentials ? o.withCredentials = !0 : "omit" === i.credentials && (o.withCredentials = !1),
            "responseType" in o && (I ? o.responseType = "blob" : M && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (o.responseType = "arraybuffer")),
                !e || "object" != typeof e.headers || e.headers instanceof F ? i.headers.forEach((function (t, e) {
                        o.setRequestHeader(e, t)
                    }
                )) : Object.getOwnPropertyNames(e.headers).forEach((function (t) {
                        o.setRequestHeader(t, $(e.headers[t]))
                    }
                )),
            i.signal && (i.signal.addEventListener("abort", s),
                    o.onreadystatechange = function () {
                        4 === o.readyState && i.signal.removeEventListener("abort", s)
                    }
            ),
                o.send(void 0 === i._bodyInit ? null : i._bodyInit)
        }
    ))
}

rt.polyfill = !0,
H.fetch || (H.fetch = rt,
    H.Headers = F,
    H.Request = K,
    H.Response = tt),
    R = self.fetch.bind(self);
var it, ot = async function (e, n) {
    try {
        const r = t(T).get()
            , i = r.stat ? JSON.parse(decodeURIComponent(r.stat)) : null
            , {did: o} = r
            , s = Math.max(...e.map((t => t.i)))
            , a = i ? i.l : -1;
        if (s > a) {
            const r = {
                results: e.filter((t => t.i > a)),
                uuid: o || n
            };
            await t(R)("https://api.wafflegame.net/api/stats", {
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                method: "POST",
                body: JSON.stringify(r)
            })
        }
    } catch (t) {
        console.error(t)
    }
};
it = function (t, e) {
    const {i: n, s: r} = e
        , i = t || {
        p: 0,
        s: 0,
        sk: 0,
        b: 0,
        l: 0,
        dst: [0, 0, 0, 0, 0, 0, 0]
    };
    return n > 0 && n <= i.l || (i.p += 1,
        i.s += -1 === r ? 0 : r,
        r >= 0 ? (i.sk += 1,
            i.b = Math.max(i.b, i.sk)) : i.sk = 0,
        i.l = n,
        i.dst[r + 1] += 1),
        i
}
;
var st = new class {
        constructor() {
            this.eventHandlers = [],
                this.results = [],
                this.uuid = null,
                this.load()
        }

        async load() {
            const t = JSON.parse(localStorage.getItem("waffle-stats"));
            t && (this.results = t.results || [],
                this.uuid = t.uuid || O()),
                await ot(this.getPuzzleResults(), this.getUUID())
        }

        save() {
            const t = JSON.parse(JSON.stringify(this));
            delete t.eventHandlers,
                localStorage.setItem("waffle-stats", JSON.stringify(t))
        }

        setPuzzleResults(t) {
            this.results = [...t],
                this.emit("RESULTS_CHANGED", this.results),
                this.save()
        }

        async setPuzzleResult(t, e) {
            const n = [...this.results].filter((e => e.i !== t));
            n.push({
                i: t,
                s: e
            }),
                this.setPuzzleResults(n),
                await ot(this.getPuzzleResults(), this.getUUID())
        }

        getPuzzleResult(t) {
            return [...this.results].find((e => e.i === t))
        }

        getPuzzleResults() {
            return this.results
        }

        getCurrentStreak() {
            return this.getCombinedStats().sk
        }

        getMaxStreak() {
            return this.getCombinedStats().b
        }

        getGamesPlayed() {
            return this.getCombinedStats().p
        }

        getTotalStars() {
            return this.getCombinedStats().s
        }

        getStarsDistribution() {
            return this.getCombinedStats().dst
        }

        getUUID() {
            if (!this.uuid) {
                const e = t(T).get();
                this.uuid = e.did || O(),
                    this.save()
            }
            return this.uuid
        }

        getCombinedStats() {
            const e = t(T).get();
            let n = (e.stat ? JSON.parse(decodeURIComponent(e.stat)) : null) || {
                p: 0,
                s: 0,
                sk: 0,
                b: 0,
                l: 0,
                dst: [0, 0, 0, 0, 0, 0, 0]
            };
            for (const e of this.results)
                n = t(it)(n, e);
            return n
        }

        on(t, e) {
            this.eventHandlers[t] = this.eventHandlers[t] || [],
                this.eventHandlers[t].push(e)
        }

        off(t, e) {
            this.eventHandlers[t] && (this.eventHandlers[t] = this.eventHandlers[t].filter((t => t !== e)))
        }

        emit(t, ...e) {
            this.eventHandlers[t] && this.eventHandlers[t].forEach((t => t(...e)))
        }
    }
;

function at(t, e) {
    const {tileSize: n, gapSize: r} = ut();
    return {
        top: e * (n + r),
        left: t * (n + r)
    }
}

function ut() {
    const n = t(e)(".board .tile").length
        , r = t(e)(".board").width()
        , i = Math.ceil(Math.sqrt(n));
    let o = .015;
    t(e)("body").hasClass("wh") && (o = .04);
    const s = o * r;
    return {
        tileSize: (r - s * (i - 1)) / i,
        gapSize: s
    }
}

function lt() {
    const {tileSize: n} = ut();
    document.documentElement.style.setProperty("--tile-size", `${n}px`),
        t(e)(".board").find(".space, .tile").each(((n, r) => {
                const i = t(e)(r)
                    , {x: o, y: s} = i.data("pos")
                    , {top: a, left: u} = at(o, s);
                i.css({
                    transform: `translate(${u}px, ${a}px)`
                })
            }
        ))
}

var ct;
ct = function (t, e, n = 5) {
    const r = 5 === n ? [6, 8, 16, 18].reverse() : [8, 10, 12, 22, 24, 26, 36, 38, 40].reverse();
    let i = t + e * n;
    return r.forEach((t => {
            i >= t && (i -= 1)
        }
    )),
        i
}
;
let ft = null
    , dt = null
    , ht = null;

function pt(t) {
    return {
        x: t?.changedTouches?.[0]?.pageX ?? t.pageX,
        y: t?.changedTouches?.[0]?.pageY ?? t.pageY
    }
}

var gt;
gt = function (t, e) {
    const n = e.split("").map((() => ""))
        , r = [...t]
        , i = [...e];
    for (let t = 0; t < i.length; t += 1)
        i[t] === r[t] && (n[t] = "green",
            r[t] = null,
            i[t] = null);
    for (let t = 0; t < i.length; t += 1) {
        if (!i[t])
            continue;
        const e = r.indexOf(i[t]);
        e >= 0 && (n[t] = "yellow",
            r[e] = null)
    }
    return n
}
;
var mt = function (e, n, r) {
    const {solution: i, tiles: o} = y
        , s = Math.ceil(Math.sqrt(i.length))
        , a = t(ct)(n, r, s);
    if (i) {
        if (i[a] === e)
            return "green";
        if (r % 2 == 0) {
            const e = t(ct)(0, r, s)
                , a = t(ct)(s - 1, r, s)
                , u = i.slice(e, a + 1)
                , l = o.map((t => t[r]?.text() ?? "")).join("")
                , c = t(gt)(u, l);
            if (c[n])
                return c[n]
        }
        if (n % 2 == 0) {
            let e = "";
            for (let r = 0; r < s; r++)
                e += i[t(ct)(n, r, s)];
            const a = o[n].map((t => t?.text() ?? "")).join("")
                , u = t(gt)(e, a);
            if (u[r])
                return u[r]
        }
        return ""
    }
};

function yt() {
    t(e)(".board .tile").each(((n, r) => {
            const {x: i, y: o} = t(e)(r).data("pos")
                , s = t(e)(r).find(".letter").text()
                , a = mt(s, i, o);
            t(e)(r).toggleClass("green", "green" === a),
                t(e)(r).toggleClass("yellow", "yellow" === a)
        }
    ))
}

function vt() {
    const n = y.getNextPuzzle();
    if (!n)
        return void t(e)(".success__timer-val").hide();
    const r = new Date(n).getTime() - Date.now();
    if (r > 0) {
        const n = String(Math.floor(r / 36e5)).padStart(2, "0")
            , i = String(Math.floor(r % 36e5 / 6e4)).padStart(2, "0")
            , o = String(Math.floor(r % 6e4 / 1e3)).padStart(2, "0");
        t(e)(".success__timer-val").text(`${n}:${i}:${o}`)
    } else
        t(e)(".success__timer-val").text("00:00:00")
    // remove section that reloaded the page when a new puzzle became available
    // setTimeout((()=>window.location.reload()), 5e3),
}

function bt(n) {
    m(),
        t(e)("body").addClass("body--modalopen"),
        t(e)(".modal." + n).addClass("modal--show")
}

function wt() {
    t(e)("body").hasClass("gameover") || g(t(e)(".top")[0]),
        t(e)("body").removeClass("body--modalopen"),
        t(e)(".modal").removeClass("modal--show")
}

function xt() {
    t(e)(".definitions").empty(),
        Ct.definitions.forEach((n => {
                t(e)(".definitions").append((({
                                                  word: t = "",
                                                  phonetic: e = "",
                                                  type: n = "",
                                                  definition: r = "",
                                                  origin: i = "",
                                                  example: o = ""
                                              }) => `<div class="definition">\n\t<span class="definition__word">${t}</span>\n\t<span class="definition__phonetic">${e ? "/" + e + "/" : ""}</span>\n\t<span class="definition__type">${n}.</span>\n\t<span class="definition__text">${r}</span>\n\t<div class="definition__example">${o ? '"' + o + '"' : ""}</div>\n\t<div class="definition__origin">${i}</div>\n</div>`)(n))
            }
        ))
}

function _t(n) {
    t(e)(".swaps__val").text(String(n)),
        t(e)(".swaps__text").text(1 === n ? " swap remaining" : " swaps remaining"),
        t(e)(".stars img").each(((r, i) => t(e)(i).toggle(r < n))),
        t(e)(".nostars").toggle(0 === n),
        t(e)(".stars").toggle(n > 0)
}

function St() {
    yt();
    const n = y.getSwapsRemaining()
        , r = y.getPuzzle().join("") === y.getSolution().join("")
        , i = r || 0 === n;
    if (r ? (bt("success"),
        setTimeout((() => {
                t(e)("body").addClass("success"),
                    t(e)("body").addClass("gameover"),
                t(e)(".note").html().length && t(e)(".note").show(),
                    wt(),
                    m(),
                    xt()
            }
        ), 2500)) : i && (m(),
        t(e)("body").addClass("gameover")),
    r || i) {
        const t = y.getGameNumber()
            , e = y.getStartTime();
        if (t >= 0 && e && !st.getPuzzleResult(t)) {
            const e = r ? n : -1;
            st.setPuzzleResult(t, e)
        }
    }
}

function Tt() {
    t(e)("body").toggleClass("body--highcontrast", S.getHighcontrast()),
        t(e)("#settings__highcontrast").prop("checked", S.getHighcontrast()),
        t(e)("html").toggleClass("html--darkmode", S.getDarkMode()),
        t(e)("#settings__darkmode").prop("checked", S.getDarkMode())
}

let Ct;
S.on("SETTINGS_CHANGED", Tt),
    Tt();
try {
    Ct = "string" == typeof window.waffle ? JSON.parse(function (t) {
        const e = atob(t)
            , n = new Uint8Array(e.length);
        for (let t = 0; t < n.length; t++)
            n[t] = e.charCodeAt(t);
        return String.fromCharCode(...new Uint16Array(n.buffer))
    }(window.waffle)) : window.waffle
} catch (n) {
    t(e)("main").hide(),
        t(e)(".error").show()
}
if (Ct && Ct.number > y.getGameNumber() && function (t) {
    y.setSolution(t.solution.split("")),
        y.setPuzzle(t.puzzle.split("")),
        y.setGameNumber(t.number),
        y.setNextPuzzle(t.nextPuzzle),
        y.setStartTime(Date.now());
    const e = Math.ceil(Math.sqrt(t.puzzle.length));
    y.setSwapsRemaining(5 === e ? 15 : 25)
}(Ct),
    t(e)(".note").hide(),
    Ct.note) {
    let n = Ct.note;
    n = n.replace("@thatwafflegame", '<a href="https://twitter.com/thatwafflegame">@thatwafflegame</a>'),
        t(e)(".note").html(n)
}
const Et = Math.ceil(Math.sqrt(y.getSolution().length));
t(e)("body").toggleClass("deluxe", 7 === Et),
    t(e)(".game-number").text("#" + String(y.getGameNumber())),
0 === st.getGamesPlayed();
let {puzzle: At, tiles: zt} = y;
At = [...y.puzzle],
    zt = y.tiles,
    _t(y.swapsRemaining),
    t(e)("body").addClass("body--loading"),
    function (n, r, i) {
        i.empty(),
            r.length = 0;
        const o = Math.ceil(Math.sqrt(n.length));
        for (let s = 0; s < o; s++)
            for (let a = 0; a < o; a++) {
                let o, u;
                if (r[a] = r[a] || [],
                a % 2 == 0 || s % 2 == 0) {
                    const l = n.shift();
                    o = t(e)('<div class="space" />').data("pos", {
                        x: a,
                        y: s
                    }),
                        u = t(e)(`<div class="tile draggable tile--${l.toLowerCase()}">${l}</div>`).data("pos", {
                            x: a,
                            y: s
                        }),
                        r[a][s] = u,
                        i.prepend(o),
                        i.append(u)
                }
            }
    }(At, zt, t(e)(".board")),
    lt(),
    yt(),
    g(t(e)(".top")[0]),
    St(),
    setTimeout((() => t(e)("body").removeClass("body--loading")), 1e3);

function kt() {
    const n = st.getStarsDistribution()
        , r = Math.max(...Object.values(n))
        , i = st.getGamesPlayed();
    for (let o = 0; o <= 6; o++) {
        const s = n[o] || 0
            , a = 100 / r * s
            , u = t(e)(".stats__row").eq(o);
        u.find(".stats__bar").css("width", a + "%").text(String(s)).toggleClass("stats__bar--empty", 0 === s);
        const l = Math.round(s / i * 100) || 0;
        u.find(".stats__label").eq(1).text(l ? l + "%" : "")
    }
    t(e)(".current-streak .stat-row__val").text(String(st.getCurrentStreak() || 0)),
        t(e)(".games-played .stat-row__val").text(String(st.getGamesPlayed() || 0)),
        t(e)(".total-stars .stat-row__val").text(String(st.getTotalStars() || 0))
}

navigator.canShare || navigator?.clipboard?.writeText || t(e)(".button--share").hide(),
    setInterval((() => vt()), 1e3),
    vt(),
    y.on("SWAPS_CHANGED", _t),
    y.on("SOLUTION_CHANGED", yt),
    y.on("TILES_CHANGED", yt),
    y.on("PUZZLE_CHANGED", St),
    st.on("RESULTS_CHANGED", kt),
    kt(),
    t(e)("body").on("mousedown touchstart", ".tile:not(.fixed):not(.green)", (function (n) {
            const r = pt(n);
            ft = t(e)(n.currentTarget),
                ft.addClass("tile--dragging"),
                t(e)(".tile--dropped").removeClass("tile--dropped"),
                dt = {
                    x: r.x,
                    y: r.y
                };
            const i = ft.css("transform").split("(")[1].split(")")[0].split(", ");
            ht = {
                x: parseFloat(i[4]),
                y: parseFloat(i[5])
            };
            const {x: o, y: s} = ht;
            ft.css("transform", "translate(" + o + "px, " + s + "px) scale(1.3)")
        }
    )),
    t(e)("body").on("mousemove touchmove", (function (t) {
            if (!ft)
                return;
            const e = pt(t)
                , n = e.x - dt.x
                , r = e.y - dt.y
                , i = ht.x + n
                , o = ht.y + r;
            ft.css("transform", "translate(" + i + "px, " + o + "px) scale(1.3)")
        }
    )),
    t(e)("body").on("mouseup touchend", (function (n) {
            if (!ft)
                return;
            const r = pt(n)
                , i = t(e)(function (n, r) {
                const {tiles: i} = y
                    , o = t(e)(".space").filter(((n, r) => {
                        const {x: o, y: s} = t(e)(r).data("pos");
                        return !i[o][s].hasClass("green")
                    }
                ));
                let s = null
                    , a = null;
                return o.each(((t, e) => {
                        const i = e.getBoundingClientRect()
                            , o = i.left + i.width / 2
                            , u = i.top + i.height / 2
                            , l = Math.sqrt(Math.pow(o - n, 2) + Math.pow(u - r, 2));
                        (null === a || l < a) && (s = e,
                            a = l)
                    }
                )),
                    s
            }(r.x, r.y));
            ft.addClass("tile--dropped"),
                ft.removeClass("tile--dragging"),
                i.data("pos");
            const o = ft.data("pos")
                , {x: s, y: a} = i.data("pos")
                , {tiles: u} = y
                , l = u[s]?.[a];
            if (o.x === s && o.y === a || !l.length)
                return lt(),
                    void (ft = null);
            const {x: c, y: f} = ft.data("pos");
            l.data("pos", {
                x: c,
                y: f
            }),
                u[c][f] = l;
            const {top: d, left: h} = at(c, f);
            l.css("transform", "translate(" + h + "px, " + d + "px)"),
                u[s][a] = ft,
                ft.data("pos", {
                    x: s,
                    y: a
                });
            const {top: p, left: g} = at(s, a);
            ft.css("transform", "translate(" + g + "px, " + p + "px)"),
                ft = null,
                y.setTiles(u);
            let m = [...y.getPuzzle()];
            const v = Math.ceil(Math.sqrt(m.length));
            let b = m[t(ct)(s, a, v)]
                , w = m[t(ct)(c, f, v)];
            b !== w && (m[t(ct)(c, f, v)] = b,
                m[t(ct)(s, a, v)] = w,
                y.setSwapsRemaining(y.swapsRemaining - 1),
                y.setPuzzle(m))
        }
    )),
    t(e)("body").on("click", ".button--help", (() => bt("help"))),
    t(e)("body").on("click", ".button--stats", (() => bt("statistics"))),
    t(e)("body").on("click", ".button--settings", (() => bt("settings"))),
    t(e)("body").on("click", ".button--showsolution", (function () {
            const n = y.getSolution()
                , r = t(e)(".solution");
            r.empty(),
                t(e)(".button--showsolution").hide(),
            t(e)(".note").html().length && t(e)(".note").show();
            const i = Math.ceil(Math.sqrt(n.length));
            for (let o = 0; o < i; o++)
                for (let s = 0; s < i; s++) {
                    let i;
                    if (s % 2 == 0 || o % 2 == 0) {
                        const o = n.shift();
                        i = t(e)('<div class="tile">' + o + "</div>"),
                            r.append(i)
                    } else
                        r.append(t(e)('<div class="tile blank"></div>'))
                }
            xt(),
                t(e)(".definitions").addClass("definitions--show")
        }
    )),
    t(e)("body").on("click", ".modal .button--close", wt),
    t(e)("body").on("click", ".modal", (t => {
            t.target === t.currentTarget && wt()
        }
    )),
    t(e)("body").on("click", ".button--share", (function () {
            let n = y.getSwapsRemaining();
            const r = y.getPuzzle()
                , i = y.getSolution()
                , o = st.getCurrentStreak() || 0
                , s = t(e)("body").hasClass("success");
            let a = "";
            a = `#waffle${y.getGameNumber()} ${s ? n : "X"}/5\n\n`,
                a += function (e, n, r) {
                    const i = Math.ceil(Math.sqrt(e.length));
                    let o = "";
                    for (let e = 0; e < i; e++) {
                        for (let s = 0; s < i; s++) {
                            const a = t(ct)(s, e, i);
                            if (1 === s && 1 === e && [2, 3, 4, 5].includes(r))
                                o += "⭐";
                            else if (3 === s && 1 === e && [4, 5].includes(r))
                                o += "⭐";
                            else if (2 === s && 2 === e && [1, 3, 5].includes(r))
                                o += "⭐";
                            else if (1 === s && 3 === e && [4, 5].includes(r))
                                o += "⭐";
                            else if (3 === s && 3 === e && [2, 3, 4, 5].includes(r))
                                o += "⭐";
                            else if (s % 2 == 1 && e % 2 == 1)
                                o += "⬜";
                            else {
                                o += "green" === mt(n[a], s, e) ? "🟩" : "⬛"
                            }
                        }
                        o += "\n"
                    }
                    return o
                }(i, r, n),
                a += "\n",
                a += `${s ? "🔥" : "💔"} streak: ${st.getCurrentStreak() || 0}\n`,
                o >= 500 ? a += "👑 #wafflemaster\n" : o >= 250 ? a += "💫 #wafflemaster\n" : o >= 100 ? a += "🌟 #wafflecenturion\n" : o >= 50 ? a += "🥇 #wafflegoldteam\n" : o >= 25 ? a += "🥈 #wafflesilverteam\n" : o >= 10 && (a += "🏆 #waffleelite\n"),
                a += "wafflegame.net";
            const u = {
                title: "Waffle",
                text: a
            };
            !function () {
                const t = navigator.userAgent || navigator.vendor || window.opera;
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))
            }() || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || !navigator?.canShare(u) ? navigator?.clipboard?.writeText && (navigator.clipboard.writeText(a),
                t(e)(".summary .smalltext").remove(),
                t(e)(".summary").append(t(e)('<div class="smalltext"><br />Copied results to the clipboard</div>'))) : navigator.share(u)
        }
    )),
    t(e)("body").on("change", "#settings__highcontrast", (n => {
            S.setHighcontrast(t(e)(n.target).is(":checked"))
        }
    )),
    t(e)("body").on("change", "#settings__darkmode", (n => {
            S.setDarkMode(t(e)(n.target).is(":checked"))
        }
    )),
    window.addEventListener("resize", lt);
