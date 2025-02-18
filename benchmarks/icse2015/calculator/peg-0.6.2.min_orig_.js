/* PEG.js 0.6.2 (http://pegjs.majda.cz/) */
(function () {
    function contains(a, b) {
        var c = a.length;
        for (var d = 0; d < c; d++)
            if (a[d] === b) return !0;
        return !1
    }

    function each(a, b) {
        var c = a.length;
        for (var d = 0; d < c; d++) b(a[d])
    }

    function map(a, b) {
        var c = [],
            d = a.length;
        for (var e = 0; e < d; e++) c[e] = b(a[e]);
        return c
    }

    function padLeft(a, b, c) {
        var d = a,
            e = c - a.length;
        for (var f = 0; f < e; f++) d = b + d;
        return d
    }

    function escape(a) {
        var b = a.charCodeAt(0);
        if (b <= 255) var c = "x",
            d = 2;
        else var c = "u",
            d = 4;
        return "\\" + c + padLeft(b.toString(16).toUpperCase(), "0", d)
    }

    function quote(a) {
        return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/[\x80-\uFFFF]/g, escape) + '"'
    }

    function quoteForRegexpClass(a) {
        return a.replace(/\\/g, "\\\\").replace(/\0/g, "\\0").replace(/\//g, "\\/").replace(/]/g, "\\]").replace(/-/g, "\\-").replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/[\x80-\uFFFF]/g, escape)
    }

    function buildNodeVisitor(a) {
        return function (b) {
            return a[b.type].apply(null, arguments)
        }
    }
    var undefined, PEG = {
        VERSION: "0.6.2",
        buildParser: function (a) {
            return PEG.compiler.compile(PEG.parser.parse(a))
        }
    };
    PEG.GrammarError = function (a) {
        this.name = "PEG.GrammarError", this.message = a
    }, PEG.GrammarError.prototype = Error.prototype, PEG.parser = function () {
        var a = {
            parse: function (a, b) {
                function i(a, b, c) {
                    var d = a,
                        e = c - a.length;
                    for (var f = 0; f < e; f++) d = b + d;
                    return d
                }

                function j(a) {
                    var b = a.charCodeAt(0);
                    if (b <= 255) var c = "x",
                        d = 2;
                    else var c = "u",
                        d = 4;
                    return "\\" + c + i(b.toString(16).toUpperCase(), "0", d)
                }

                function k(a) {
                    return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/[\x80-\uFFFF]/g, j) + '"'
                }

                function l(a) {
                    if (d < f) return;
                    d > f && (f = d, g = []), g.push(a)
                }

                function m() {
                    var a = "grammar@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = d,
                        f = bg();
                    if (f !== null) {
                        var g = n(),
                            i = g !== null ? g : "";
                        if (i !== null) {
                            var j = o();
                            if (j !== null) {
                                var k = [];
                                while (j !== null) {
                                    k.push(j);
                                    var j = o()
                                }
                            } else var k = null; if (k !== null) var l = [f, i, k];
                            else {
                                var l = null;
                                d = e
                            }
                        } else {
                            var l = null;
                            d = e
                        }
                    } else {
                        var l = null;
                        d = e
                    }
                    var m = l !== null ? function (a, b) {
                        var c = {};
                        return each(b, function (a) {
                            c[a.name] = a
                        }), {
                            type: "grammar",
                            initializer: a !== "" ? a : null,
                            rules: c,
                            startRule: b[0].name
                        }
                    }(l[1], l[2]) : null;
                    if (m !== null) var p = m;
                    else {
                        var p = null;
                        d = c
                    }
                    return h[a] = {
                        nextPos: d,
                        result: p
                    }, p
                }

                function n() {
                    var a = "initializer@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = d,
                        f = v();
                    if (f !== null) {
                        var g = B(),
                            i = g !== null ? g : "";
                        if (i !== null) var j = [f, i];
                        else {
                            var j = null;
                            d = e
                        }
                    } else {
                        var j = null;
                        d = e
                    }
                    var k = j !== null ? function (a) {
                        return {
                            type: "initializer",
                            code: a
                        }
                    }(j[0]) : null;
                    if (k !== null) var l = k;
                    else {
                        var l = null;
                        d = c
                    }
                    return h[a] = {
                        nextPos: d,
                        result: l
                    }, l
                }

                function o() {
                    var b = "rule@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d,
                        i = L();
                    if (i !== null) {
                        var j = M();
                        if (j !== null) var k = j;
                        else {
                            if (a.substr(d, 0) === "") {
                                var m = "";
                                d += 0
                            } else {
                                var m = null;
                                e && l('""')
                            } if (m !== null) var k = m;
                            else var k = null
                        } if (k !== null) {
                            var n = z();
                            if (n !== null) {
                                var o = p();
                                if (o !== null) {
                                    var q = B(),
                                        r = q !== null ? q : "";
                                    if (r !== null) var s = [i, k, n, o, r];
                                    else {
                                        var s = null;
                                        d = g
                                    }
                                } else {
                                    var s = null;
                                    d = g
                                }
                            } else {
                                var s = null;
                                d = g
                            }
                        } else {
                            var s = null;
                            d = g
                        }
                    } else {
                        var s = null;
                        d = g
                    }
                    var t = s !== null ? function (a, b, c) {
                        return {
                            type: "rule",
                            name: a,
                            displayName: b !== "" ? b : null,
                            expression: c
                        }
                    }(s[0], s[1], s[3]) : null;
                    if (t !== null) var u = t;
                    else {
                        var u = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: u
                    }, u
                }

                function p() {
                    var a = "choice@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = d,
                        f = q();
                    if (f !== null) {
                        var g = [],
                            i = d,
                            j = C();
                        if (j !== null) {
                            var k = q();
                            if (k !== null) var l = [j, k];
                            else {
                                var l = null;
                                d = i
                            }
                        } else {
                            var l = null;
                            d = i
                        }
                        while (l !== null) {
                            g.push(l);
                            var i = d,
                                j = C();
                            if (j !== null) {
                                var k = q();
                                if (k !== null) var l = [j, k];
                                else {
                                    var l = null;
                                    d = i
                                }
                            } else {
                                var l = null;
                                d = i
                            }
                        }
                        if (g !== null) var m = [f, g];
                        else {
                            var m = null;
                            d = e
                        }
                    } else {
                        var m = null;
                        d = e
                    }
                    var n = m !== null ? function (a, b) {
                        if (b.length > 0) {
                            var c = [a].concat(map(b, function (a) {
                                return a[1]
                            }));
                            return {
                                type: "choice",
                                alternatives: c
                            }
                        }
                        return a
                    }(m[0], m[1]) : null;
                    if (n !== null) var o = n;
                    else {
                        var o = null;
                        d = c
                    }
                    return h[a] = {
                        nextPos: d,
                        result: o
                    }, o
                }

                function q() {
                    var a = "sequence@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = d,
                        f = [],
                        g = r();
                    while (g !== null) {
                        f.push(g);
                        var g = r()
                    }
                    if (f !== null) {
                        var i = v();
                        if (i !== null) var j = [f, i];
                        else {
                            var j = null;
                            d = e
                        }
                    } else {
                        var j = null;
                        d = e
                    }
                    var k = j !== null ? function (a, b) {
                        var c = a.length != 1 ? {
                            type: "sequence",
                            elements: a
                        } : a[0];
                        return {
                            type: "action",
                            expression: c,
                            code: b
                        }
                    }(j[0], j[1]) : null;
                    if (k !== null) var l = k;
                    else {
                        var l = null;
                        d = c
                    } if (l !== null) var m = l;
                    else {
                        var n = d,
                            o = [],
                            p = r();
                        while (p !== null) {
                            o.push(p);
                            var p = r()
                        }
                        var q = o !== null ? function (a) {
                            return a.length != 1 ? {
                                type: "sequence",
                                elements: a
                            } : a[0]
                        }(o) : null;
                        if (q !== null) var s = q;
                        else {
                            var s = null;
                            d = n
                        } if (s !== null) var m = s;
                        else var m = null
                    }
                    return h[a] = {
                        nextPos: d,
                        result: m
                    }, m
                }

                function r() {
                    var a = "labeled@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = d,
                        f = L();
                    if (f !== null) {
                        var g = A();
                        if (g !== null) {
                            var i = s();
                            if (i !== null) var j = [f, g, i];
                            else {
                                var j = null;
                                d = e
                            }
                        } else {
                            var j = null;
                            d = e
                        }
                    } else {
                        var j = null;
                        d = e
                    }
                    var k = j !== null ? function (a, b) {
                        return {
                            type: "labeled",
                            label: a,
                            expression: b
                        }
                    }(j[0], j[2]) : null;
                    if (k !== null) var l = k;
                    else {
                        var l = null;
                        d = c
                    } if (l !== null) var m = l;
                    else {
                        var n = s();
                        if (n !== null) var m = n;
                        else var m = null
                    }
                    return h[a] = {
                        nextPos: d,
                        result: m
                    }, m
                }

                function s() {
                    var a = "prefixed@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = d,
                        f = D();
                    if (f !== null) {
                        var g = v();
                        if (g !== null) var i = [f, g];
                        else {
                            var i = null;
                            d = e
                        }
                    } else {
                        var i = null;
                        d = e
                    }
                    var j = i !== null ? function (a) {
                        return {
                            type: "semantic_and",
                            code: a
                        }
                    }(i[1]) : null;
                    if (j !== null) var k = j;
                    else {
                        var k = null;
                        d = c
                    } if (k !== null) var l = k;
                    else {
                        var m = d,
                            n = d,
                            o = D();
                        if (o !== null) {
                            var p = t();
                            if (p !== null) var q = [o, p];
                            else {
                                var q = null;
                                d = n
                            }
                        } else {
                            var q = null;
                            d = n
                        }
                        var r = q !== null ? function (a) {
                            return {
                                type: "simple_and",
                                expression: a
                            }
                        }(q[1]) : null;
                        if (r !== null) var s = r;
                        else {
                            var s = null;
                            d = m
                        } if (s !== null) var l = s;
                        else {
                            var u = d,
                                w = d,
                                x = E();
                            if (x !== null) {
                                var y = v();
                                if (y !== null) var z = [x, y];
                                else {
                                    var z = null;
                                    d = w
                                }
                            } else {
                                var z = null;
                                d = w
                            }
                            var A = z !== null ? function (a) {
                                return {
                                    type: "semantic_not",
                                    code: a
                                }
                            }(z[1]) : null;
                            if (A !== null) var B = A;
                            else {
                                var B = null;
                                d = u
                            } if (B !== null) var l = B;
                            else {
                                var C = d,
                                    F = d,
                                    G = E();
                                if (G !== null) {
                                    var H = t();
                                    if (H !== null) var I = [G, H];
                                    else {
                                        var I = null;
                                        d = F
                                    }
                                } else {
                                    var I = null;
                                    d = F
                                }
                                var J = I !== null ? function (a) {
                                    return {
                                        type: "simple_not",
                                        expression: a
                                    }
                                }(I[1]) : null;
                                if (J !== null) var K = J;
                                else {
                                    var K = null;
                                    d = C
                                } if (K !== null) var l = K;
                                else {
                                    var L = t();
                                    if (L !== null) var l = L;
                                    else var l = null
                                }
                            }
                        }
                    }
                    return h[a] = {
                        nextPos: d,
                        result: l
                    }, l
                }

                function t() {
                    var a = "suffixed@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = d,
                        f = u();
                    if (f !== null) {
                        var g = F();
                        if (g !== null) var i = [f, g];
                        else {
                            var i = null;
                            d = e
                        }
                    } else {
                        var i = null;
                        d = e
                    }
                    var j = i !== null ? function (a) {
                        return {
                            type: "optional",
                            expression: a
                        }
                    }(i[0]) : null;
                    if (j !== null) var k = j;
                    else {
                        var k = null;
                        d = c
                    } if (k !== null) var l = k;
                    else {
                        var m = d,
                            n = d,
                            o = u();
                        if (o !== null) {
                            var p = G();
                            if (p !== null) var q = [o, p];
                            else {
                                var q = null;
                                d = n
                            }
                        } else {
                            var q = null;
                            d = n
                        }
                        var r = q !== null ? function (a) {
                            return {
                                type: "zero_or_more",
                                expression: a
                            }
                        }(q[0]) : null;
                        if (r !== null) var s = r;
                        else {
                            var s = null;
                            d = m
                        } if (s !== null) var l = s;
                        else {
                            var t = d,
                                v = d,
                                w = u();
                            if (w !== null) {
                                var x = H();
                                if (x !== null) var y = [w, x];
                                else {
                                    var y = null;
                                    d = v
                                }
                            } else {
                                var y = null;
                                d = v
                            }
                            var z = y !== null ? function (a) {
                                return {
                                    type: "one_or_more",
                                    expression: a
                                }
                            }(y[0]) : null;
                            if (z !== null) var A = z;
                            else {
                                var A = null;
                                d = t
                            } if (A !== null) var l = A;
                            else {
                                var B = u();
                                if (B !== null) var l = B;
                                else var l = null
                            }
                        }
                    }
                    return h[a] = {
                        nextPos: d,
                        result: l
                    }, l
                }

                function u() {
                    var b = "primary@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d,
                        i = L();
                    if (i !== null) {
                        var j = d,
                            k = e;
                        e = !1;
                        var m = d,
                            n = M();
                        if (n !== null) var o = n;
                        else {
                            if (a.substr(d, 0) === "") {
                                var q = "";
                                d += 0
                            } else {
                                var q = null;
                                e && l('""')
                            } if (q !== null) var o = q;
                            else var o = null
                        } if (o !== null) {
                            var r = z();
                            if (r !== null) var s = [o, r];
                            else {
                                var s = null;
                                d = m
                            }
                        } else {
                            var s = null;
                            d = m
                        }
                        e = k;
                        if (s === null) var t = "";
                        else {
                            var t = null;
                            d = j
                        } if (t !== null) var u = [i, t];
                        else {
                            var u = null;
                            d = g
                        }
                    } else {
                        var u = null;
                        d = g
                    }
                    var v = u !== null ? function (a) {
                        return {
                            type: "rule_ref",
                            name: a
                        }
                    }(u[0]) : null;
                    if (v !== null) var w = v;
                    else {
                        var w = null;
                        d = f
                    } if (w !== null) var x = w;
                    else {
                        var y = d,
                            A = M(),
                            B = A !== null ? function (a) {
                                return {
                                    type: "literal",
                                    value: a
                                }
                            }(A) : null;
                        if (B !== null) var C = B;
                        else {
                            var C = null;
                            d = y
                        } if (C !== null) var x = C;
                        else {
                            var D = d,
                                E = K(),
                                F = E !== null ? function () {
                                    return {
                                        type: "any"
                                    }
                                }() : null;
                            if (F !== null) var G = F;
                            else {
                                var G = null;
                                d = D
                            } if (G !== null) var x = G;
                            else {
                                var H = T();
                                if (H !== null) var x = H;
                                else {
                                    var N = d,
                                        O = d,
                                        P = I();
                                    if (P !== null) {
                                        var Q = p();
                                        if (Q !== null) {
                                            var R = J();
                                            if (R !== null) var S = [P, Q, R];
                                            else {
                                                var S = null;
                                                d = O
                                            }
                                        } else {
                                            var S = null;
                                            d = O
                                        }
                                    } else {
                                        var S = null;
                                        d = O
                                    }
                                    var U = S !== null ? function (a) {
                                        return a
                                    }(S[1]) : null;
                                    if (U !== null) var V = U;
                                    else {
                                        var V = null;
                                        d = N
                                    } if (V !== null) var x = V;
                                    else var x = null
                                }
                            }
                        }
                    }
                    return h[b] = {
                        nextPos: d,
                        result: x
                    }, x
                }

                function v() {
                    var a = "action@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = e;
                    e = !1;
                    var f = d,
                        g = d,
                        i = w();
                    if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function (a) {
                        return a.substr(1, a.length - 2)
                    }(k[0]) : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return e = c, e && n === null && l("action"), h[a] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function w() {
                    var b = "braced@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "{") {
                        var i = "{";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"{"')
                    } if (i !== null) {
                        var j = [],
                            k = w();
                        if (k !== null) var m = k;
                        else {
                            var n = y();
                            if (n !== null) var m = n;
                            else var m = null
                        }
                        while (m !== null) {
                            j.push(m);
                            var k = w();
                            if (k !== null) var m = k;
                            else {
                                var n = y();
                                if (n !== null) var m = n;
                                else var m = null
                            }
                        }
                        if (j !== null) {
                            if (a.substr(d, 1) === "}") {
                                var o = "}";
                                d += 1
                            } else {
                                var o = null;
                                e && l('"}"')
                            } if (o !== null) var p = [i, j, o];
                            else {
                                var p = null;
                                d = g
                            }
                        } else {
                            var p = null;
                            d = g
                        }
                    } else {
                        var p = null;
                        d = g
                    }
                    var q = p !== null ? function (a) {
                        return "{" + a.join("") + "}"
                    }(p[1]) : null;
                    if (q !== null) var r = q;
                    else {
                        var r = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: r
                    }, r
                }

                function x() {
                    var a = "nonBraceCharacters@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = y();
                    if (e !== null) {
                        var f = [];
                        while (e !== null) {
                            f.push(e);
                            var e = y()
                        }
                    } else var f = null;
                    var g = f !== null ? function (a) {
                        return a.join("")
                    }(f) : null;
                    if (g !== null) var i = g;
                    else {
                        var i = null;
                        d = c
                    }
                    return h[a] = {
                        nextPos: d,
                        result: i
                    }, i
                }

                function y() {
                    var b = "nonBraceCharacter@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    if (a.substr(d).match(/^[^{}]/) !== null) {
                        var f = a.charAt(d);
                        d++
                    } else {
                        var f = null;
                        e && l("[^{}]")
                    }
                    return h[b] = {
                        nextPos: d,
                        result: f
                    }, f
                }

                function z() {
                    var b = "equals@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "=") {
                        var i = "=";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"="')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "="
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function A() {
                    var b = "colon@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === ":") {
                        var i = ":";
                        d += 1
                    } else {
                        var i = null;
                        e && l('":"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return ":"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function B() {
                    var b = "semicolon@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === ";") {
                        var i = ";";
                        d += 1
                    } else {
                        var i = null;
                        e && l('";"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return ";"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function C() {
                    var b = "slash@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "/") {
                        var i = "/";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"/"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "/"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function D() {
                    var b = "and@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "&") {
                        var i = "&";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"&"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "&"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function E() {
                    var b = "not@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "!") {
                        var i = "!";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"!"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "!"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function F() {
                    var b = "question@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "?") {
                        var i = "?";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"?"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "?"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function G() {
                    var b = "star@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "*") {
                        var i = "*";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"*"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "*"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function H() {
                    var b = "plus@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "+") {
                        var i = "+";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"+"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "+"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function I() {
                    var b = "lparen@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "(") {
                        var i = "(";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"("')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "("
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function J() {
                    var b = "rparen@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === ")") {
                        var i = ")";
                        d += 1
                    } else {
                        var i = null;
                        e && l('")"')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return ")"
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function K() {
                    var b = "dot@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === ".") {
                        var i = ".";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"."')
                    } if (i !== null) {
                        var j = bg();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function () {
                        return "."
                    }() : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function L() {
                    var b = "identifier@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = e;
                    e = !1;
                    var g = d,
                        i = d,
                        j = bd();
                    if (j !== null) var k = j;
                    else {
                        if (a.substr(d, 1) === "_") {
                            var m = "_";
                            d += 1
                        } else {
                            var m = null;
                            e && l('"_"')
                        } if (m !== null) var k = m;
                        else {
                            if (a.substr(d, 1) === "$") {
                                var n = "$";
                                d += 1
                            } else {
                                var n = null;
                                e && l('"$"')
                            } if (n !== null) var k = n;
                            else var k = null
                        }
                    } if (k !== null) {
                        var o = [],
                            p = bd();
                        if (p !== null) var q = p;
                        else {
                            var r = bb();
                            if (r !== null) var q = r;
                            else {
                                if (a.substr(d, 1) === "_") {
                                    var s = "_";
                                    d += 1
                                } else {
                                    var s = null;
                                    e && l('"_"')
                                } if (s !== null) var q = s;
                                else {
                                    if (a.substr(d, 1) === "$") {
                                        var t = "$";
                                        d += 1
                                    } else {
                                        var t = null;
                                        e && l('"$"')
                                    } if (t !== null) var q = t;
                                    else var q = null
                                }
                            }
                        }
                        while (q !== null) {
                            o.push(q);
                            var p = bd();
                            if (p !== null) var q = p;
                            else {
                                var r = bb();
                                if (r !== null) var q = r;
                                else {
                                    if (a.substr(d, 1) === "_") {
                                        var s = "_";
                                        d += 1
                                    } else {
                                        var s = null;
                                        e && l('"_"')
                                    } if (s !== null) var q = s;
                                    else {
                                        if (a.substr(d, 1) === "$") {
                                            var t = "$";
                                            d += 1
                                        } else {
                                            var t = null;
                                            e && l('"$"')
                                        } if (t !== null) var q = t;
                                        else var q = null
                                    }
                                }
                            }
                        }
                        if (o !== null) {
                            var u = bg();
                            if (u !== null) var v = [k, o, u];
                            else {
                                var v = null;
                                d = i
                            }
                        } else {
                            var v = null;
                            d = i
                        }
                    } else {
                        var v = null;
                        d = i
                    }
                    var w = v !== null ? function (a, b) {
                        return a + b.join("")
                    }(v[0], v[1]) : null;
                    if (w !== null) var x = w;
                    else {
                        var x = null;
                        d = g
                    }
                    return e = f, e && x === null && l("identifier"), h[b] = {
                        nextPos: d,
                        result: x
                    }, x
                }

                function M() {
                    var a = "literal@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = e;
                    e = !1;
                    var f = d,
                        g = d,
                        i = N();
                    if (i !== null) var j = i;
                    else {
                        var k = Q();
                        if (k !== null) var j = k;
                        else var j = null
                    } if (j !== null) {
                        var m = bg();
                        if (m !== null) var n = [j, m];
                        else {
                            var n = null;
                            d = g
                        }
                    } else {
                        var n = null;
                        d = g
                    }
                    var o = n !== null ? function (a) {
                        return a
                    }(n[0]) : null;
                    if (o !== null) var p = o;
                    else {
                        var p = null;
                        d = f
                    }
                    return e = c, e && p === null && l("literal"), h[a] = {
                        nextPos: d,
                        result: p
                    }, p
                }

                function N() {
                    var b = "doubleQuotedLiteral@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === '"') {
                        var i = '"';
                        d += 1
                    } else {
                        var i = null;
                        e && l('"\\""')
                    } if (i !== null) {
                        var j = [],
                            k = O();
                        while (k !== null) {
                            j.push(k);
                            var k = O()
                        }
                        if (j !== null) {
                            if (a.substr(d, 1) === '"') {
                                var m = '"';
                                d += 1
                            } else {
                                var m = null;
                                e && l('"\\""')
                            } if (m !== null) var n = [i, j, m];
                            else {
                                var n = null;
                                d = g
                            }
                        } else {
                            var n = null;
                            d = g
                        }
                    } else {
                        var n = null;
                        d = g
                    }
                    var o = n !== null ? function (a) {
                        return a.join("")
                    }(n[1]) : null;
                    if (o !== null) var p = o;
                    else {
                        var p = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: p
                    }, p
                }

                function O() {
                    var a = "doubleQuotedCharacter@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = P();
                    if (c !== null) var e = c;
                    else {
                        var f = Y();
                        if (f !== null) var e = f;
                        else {
                            var g = Z();
                            if (g !== null) var e = g;
                            else {
                                var i = $();
                                if (i !== null) var e = i;
                                else {
                                    var j = _();
                                    if (j !== null) var e = j;
                                    else {
                                        var k = ba();
                                        if (k !== null) var e = k;
                                        else var e = null
                                    }
                                }
                            }
                        }
                    }
                    return h[a] = {
                        nextPos: d,
                        result: e
                    }, e
                }

                function P() {
                    var b = "simpleDoubleQuotedCharacter@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d,
                        i = d,
                        j = e;
                    e = !1;
                    if (a.substr(d, 1) === '"') {
                        var k = '"';
                        d += 1
                    } else {
                        var k = null;
                        e && l('"\\""')
                    } if (k !== null) var m = k;
                    else {
                        if (a.substr(d, 1) === "\\") {
                            var n = "\\";
                            d += 1
                        } else {
                            var n = null;
                            e && l('"\\\\"')
                        } if (n !== null) var m = n;
                        else {
                            var o = bl();
                            if (o !== null) var m = o;
                            else var m = null
                        }
                    }
                    e = j;
                    if (m === null) var p = "";
                    else {
                        var p = null;
                        d = i
                    } if (p !== null) {
                        if (a.length > d) {
                            var q = a.charAt(d);
                            d++
                        } else {
                            var q = null;
                            e && l("any character")
                        } if (q !== null) var r = [p, q];
                        else {
                            var r = null;
                            d = g
                        }
                    } else {
                        var r = null;
                        d = g
                    }
                    var s = r !== null ? function (a) {
                        return a
                    }(r[1]) : null;
                    if (s !== null) var t = s;
                    else {
                        var t = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: t
                    }, t
                }

                function Q() {
                    var b = "singleQuotedLiteral@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "'") {
                        var i = "'";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"\'"')
                    } if (i !== null) {
                        var j = [],
                            k = R();
                        while (k !== null) {
                            j.push(k);
                            var k = R()
                        }
                        if (j !== null) {
                            if (a.substr(d, 1) === "'") {
                                var m = "'";
                                d += 1
                            } else {
                                var m = null;
                                e && l('"\'"')
                            } if (m !== null) var n = [i, j, m];
                            else {
                                var n = null;
                                d = g
                            }
                        } else {
                            var n = null;
                            d = g
                        }
                    } else {
                        var n = null;
                        d = g
                    }
                    var o = n !== null ? function (a) {
                        return a.join("")
                    }(n[1]) : null;
                    if (o !== null) var p = o;
                    else {
                        var p = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: p
                    }, p
                }

                function R() {
                    var a = "singleQuotedCharacter@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = S();
                    if (c !== null) var e = c;
                    else {
                        var f = Y();
                        if (f !== null) var e = f;
                        else {
                            var g = Z();
                            if (g !== null) var e = g;
                            else {
                                var i = $();
                                if (i !== null) var e = i;
                                else {
                                    var j = _();
                                    if (j !== null) var e = j;
                                    else {
                                        var k = ba();
                                        if (k !== null) var e = k;
                                        else var e = null
                                    }
                                }
                            }
                        }
                    }
                    return h[a] = {
                        nextPos: d,
                        result: e
                    }, e
                }

                function S() {
                    var b = "simpleSingleQuotedCharacter@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d,
                        i = d,
                        j = e;
                    e = !1;
                    if (a.substr(d, 1) === "'") {
                        var k = "'";
                        d += 1
                    } else {
                        var k = null;
                        e && l('"\'"')
                    } if (k !== null) var m = k;
                    else {
                        if (a.substr(d, 1) === "\\") {
                            var n = "\\";
                            d += 1
                        } else {
                            var n = null;
                            e && l('"\\\\"')
                        } if (n !== null) var m = n;
                        else {
                            var o = bl();
                            if (o !== null) var m = o;
                            else var m = null
                        }
                    }
                    e = j;
                    if (m === null) var p = "";
                    else {
                        var p = null;
                        d = i
                    } if (p !== null) {
                        if (a.length > d) {
                            var q = a.charAt(d);
                            d++
                        } else {
                            var q = null;
                            e && l("any character")
                        } if (q !== null) var r = [p, q];
                        else {
                            var r = null;
                            d = g
                        }
                    } else {
                        var r = null;
                        d = g
                    }
                    var s = r !== null ? function (a) {
                        return a
                    }(r[1]) : null;
                    if (s !== null) var t = s;
                    else {
                        var t = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: t
                    }, t
                }

                function T() {
                    var b = "class@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = e;
                    e = !1;
                    var g = d,
                        i = d;
                    if (a.substr(d, 1) === "[") {
                        var j = "[";
                        d += 1
                    } else {
                        var j = null;
                        e && l('"["')
                    } if (j !== null) {
                        if (a.substr(d, 1) === "^") {
                            var k = "^";
                            d += 1
                        } else {
                            var k = null;
                            e && l('"^"')
                        }
                        var m = k !== null ? k : "";
                        if (m !== null) {
                            var n = [],
                                o = U();
                            if (o !== null) var p = o;
                            else {
                                var q = V();
                                if (q !== null) var p = q;
                                else var p = null
                            }
                            while (p !== null) {
                                n.push(p);
                                var o = U();
                                if (o !== null) var p = o;
                                else {
                                    var q = V();
                                    if (q !== null) var p = q;
                                    else var p = null
                                }
                            }
                            if (n !== null) {
                                if (a.substr(d, 1) === "]") {
                                    var r = "]";
                                    d += 1
                                } else {
                                    var r = null;
                                    e && l('"]"')
                                } if (r !== null) {
                                    var s = bg();
                                    if (s !== null) var t = [j, m, n, r, s];
                                    else {
                                        var t = null;
                                        d = i
                                    }
                                } else {
                                    var t = null;
                                    d = i
                                }
                            } else {
                                var t = null;
                                d = i
                            }
                        } else {
                            var t = null;
                            d = i
                        }
                    } else {
                        var t = null;
                        d = i
                    }
                    var u = t !== null ? function (a, b) {
                        var c = map(b, function (a) {
                                return a.data
                            }),
                            d = "[" + a + map(b, function (a) {
                                return a.rawText
                            }).join("") + "]";
                        return {
                            type: "class",
                            inverted: a === "^",
                            parts: c,
                            rawText: d
                        }
                    }(t[1], t[2]) : null;
                    if (u !== null) var v = u;
                    else {
                        var v = null;
                        d = g
                    }
                    return e = f, e && v === null && l("character class"), h[b] = {
                        nextPos: d,
                        result: v
                    }, v
                }

                function U() {
                    var b = "classCharacterRange@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d,
                        i = V();
                    if (i !== null) {
                        if (a.substr(d, 1) === "-") {
                            var j = "-";
                            d += 1
                        } else {
                            var j = null;
                            e && l('"-"')
                        } if (j !== null) {
                            var k = V();
                            if (k !== null) var m = [i, j, k];
                            else {
                                var m = null;
                                d = g
                            }
                        } else {
                            var m = null;
                            d = g
                        }
                    } else {
                        var m = null;
                        d = g
                    }
                    var n = m !== null ? function (a, b) {
                        if (a.data.charCodeAt(0) > b.data.charCodeAt(0)) throw new this.SyntaxError("Invalid character range: " + a.rawText + "-" + b.rawText + ".");
                        return {
                            data: [a.data, b.data],
                            rawText: a.rawText + "-" + b.rawText
                        }
                    }(m[0], m[2]) : null;
                    if (n !== null) var o = n;
                    else {
                        var o = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: o
                    }, o
                }

                function V() {
                    var a = "classCharacter@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = d,
                        e = W(),
                        f = e !== null ? function (a) {
                            return {
                                data: a,
                                rawText: quoteForRegexpClass(a)
                            }
                        }(e) : null;
                    if (f !== null) var g = f;
                    else {
                        var g = null;
                        d = c
                    }
                    return h[a] = {
                        nextPos: d,
                        result: g
                    }, g
                }

                function W() {
                    var a = "bracketDelimitedCharacter@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = X();
                    if (c !== null) var e = c;
                    else {
                        var f = Y();
                        if (f !== null) var e = f;
                        else {
                            var g = Z();
                            if (g !== null) var e = g;
                            else {
                                var i = $();
                                if (i !== null) var e = i;
                                else {
                                    var j = _();
                                    if (j !== null) var e = j;
                                    else {
                                        var k = ba();
                                        if (k !== null) var e = k;
                                        else var e = null
                                    }
                                }
                            }
                        }
                    }
                    return h[a] = {
                        nextPos: d,
                        result: e
                    }, e
                }

                function X() {
                    var b = "simpleBracketDelimitedCharacter@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d,
                        i = d,
                        j = e;
                    e = !1;
                    if (a.substr(d, 1) === "]") {
                        var k = "]";
                        d += 1
                    } else {
                        var k = null;
                        e && l('"]"')
                    } if (k !== null) var m = k;
                    else {
                        if (a.substr(d, 1) === "\\") {
                            var n = "\\";
                            d += 1
                        } else {
                            var n = null;
                            e && l('"\\\\"')
                        } if (n !== null) var m = n;
                        else {
                            var o = bl();
                            if (o !== null) var m = o;
                            else var m = null
                        }
                    }
                    e = j;
                    if (m === null) var p = "";
                    else {
                        var p = null;
                        d = i
                    } if (p !== null) {
                        if (a.length > d) {
                            var q = a.charAt(d);
                            d++
                        } else {
                            var q = null;
                            e && l("any character")
                        } if (q !== null) var r = [p, q];
                        else {
                            var r = null;
                            d = g
                        }
                    } else {
                        var r = null;
                        d = g
                    }
                    var s = r !== null ? function (a) {
                        return a
                    }(r[1]) : null;
                    if (s !== null) var t = s;
                    else {
                        var t = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: t
                    }, t
                }

                function Y() {
                    var b = "simpleEscapeSequence@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "\\") {
                        var i = "\\";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"\\\\"')
                    } if (i !== null) {
                        var j = d,
                            k = e;
                        e = !1;
                        var m = bb();
                        if (m !== null) var n = m;
                        else {
                            if (a.substr(d, 1) === "x") {
                                var o = "x";
                                d += 1
                            } else {
                                var o = null;
                                e && l('"x"')
                            } if (o !== null) var n = o;
                            else {
                                if (a.substr(d, 1) === "u") {
                                    var p = "u";
                                    d += 1
                                } else {
                                    var p = null;
                                    e && l('"u"')
                                } if (p !== null) var n = p;
                                else {
                                    var q = bl();
                                    if (q !== null) var n = q;
                                    else var n = null
                                }
                            }
                        }
                        e = k;
                        if (n === null) var r = "";
                        else {
                            var r = null;
                            d = j
                        } if (r !== null) {
                            if (a.length > d) {
                                var s = a.charAt(d);
                                d++
                            } else {
                                var s = null;
                                e && l("any character")
                            } if (s !== null) var t = [i, r, s];
                            else {
                                var t = null;
                                d = g
                            }
                        } else {
                            var t = null;
                            d = g
                        }
                    } else {
                        var t = null;
                        d = g
                    }
                    var u = t !== null ? function (a) {
                        return a.replace("b", "\b").replace("f", "\f").replace("n", "\n").replace("r", "\r").replace("t", "\t").replace("v", "")
                    }(t[2]) : null;
                    if (u !== null) var v = u;
                    else {
                        var v = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: v
                    }, v
                }

                function Z() {
                    var b = "zeroEscapeSequence@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 2) === "\\0") {
                        var i = "\\0";
                        d += 2
                    } else {
                        var i = null;
                        e && l('"\\\\0"')
                    } if (i !== null) {
                        var j = d,
                            k = e;
                        e = !1;
                        var m = bb();
                        e = k;
                        if (m === null) var n = "";
                        else {
                            var n = null;
                            d = j
                        } if (n !== null) var o = [i, n];
                        else {
                            var o = null;
                            d = g
                        }
                    } else {
                        var o = null;
                        d = g
                    }
                    var p = o !== null ? function () {
                        return "�"
                    }() : null;
                    if (p !== null) var q = p;
                    else {
                        var q = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: q
                    }, q
                }

                function $() {
                    var b = "hexEscapeSequence@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 2) === "\\x") {
                        var i = "\\x";
                        d += 2
                    } else {
                        var i = null;
                        e && l('"\\\\x"')
                    } if (i !== null) {
                        var j = bc();
                        if (j !== null) {
                            var k = bc();
                            if (k !== null) var m = [i, j, k];
                            else {
                                var m = null;
                                d = g
                            }
                        } else {
                            var m = null;
                            d = g
                        }
                    } else {
                        var m = null;
                        d = g
                    }
                    var n = m !== null ? function (a, b) {
                        return String.fromCharCode(parseInt("0x" + a + b))
                    }(m[1], m[2]) : null;
                    if (n !== null) var o = n;
                    else {
                        var o = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: o
                    }, o
                }

                function _() {
                    var b = "unicodeEscapeSequence@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 2) === "\\u") {
                        var i = "\\u";
                        d += 2
                    } else {
                        var i = null;
                        e && l('"\\\\u"')
                    } if (i !== null) {
                        var j = bc();
                        if (j !== null) {
                            var k = bc();
                            if (k !== null) {
                                var m = bc();
                                if (m !== null) {
                                    var n = bc();
                                    if (n !== null) var o = [i, j, k, m, n];
                                    else {
                                        var o = null;
                                        d = g
                                    }
                                } else {
                                    var o = null;
                                    d = g
                                }
                            } else {
                                var o = null;
                                d = g
                            }
                        } else {
                            var o = null;
                            d = g
                        }
                    } else {
                        var o = null;
                        d = g
                    }
                    var p = o !== null ? function (a, b, c, d) {
                        return String.fromCharCode(parseInt("0x" + a + b + c + d))
                    }(o[1], o[2], o[3], o[4]) : null;
                    if (p !== null) var q = p;
                    else {
                        var q = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: q
                    }, q
                }

                function ba() {
                    var b = "eolEscapeSequence@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d,
                        g = d;
                    if (a.substr(d, 1) === "\\") {
                        var i = "\\";
                        d += 1
                    } else {
                        var i = null;
                        e && l('"\\\\"')
                    } if (i !== null) {
                        var j = bk();
                        if (j !== null) var k = [i, j];
                        else {
                            var k = null;
                            d = g
                        }
                    } else {
                        var k = null;
                        d = g
                    }
                    var m = k !== null ? function (a) {
                        return a
                    }(k[1]) : null;
                    if (m !== null) var n = m;
                    else {
                        var n = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: n
                    }, n
                }

                function bb() {
                    var b = "digit@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    if (a.substr(d).match(/^[0-9]/) !== null) {
                        var f = a.charAt(d);
                        d++
                    } else {
                        var f = null;
                        e && l("[0-9]")
                    }
                    return h[b] = {
                        nextPos: d,
                        result: f
                    }, f
                }

                function bc() {
                    var b = "hexDigit@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    if (a.substr(d).match(/^[0-9a-fA-F]/) !== null) {
                        var f = a.charAt(d);
                        d++
                    } else {
                        var f = null;
                        e && l("[0-9a-fA-F]")
                    }
                    return h[b] = {
                        nextPos: d,
                        result: f
                    }, f
                }

                function bd() {
                    var a = "letter@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = be();
                    if (c !== null) var e = c;
                    else {
                        var f = bf();
                        if (f !== null) var e = f;
                        else var e = null
                    }
                    return h[a] = {
                        nextPos: d,
                        result: e
                    }, e
                }

                function be() {
                    var b = "lowerCaseLetter@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    if (a.substr(d).match(/^[a-z]/) !== null) {
                        var f = a.charAt(d);
                        d++
                    } else {
                        var f = null;
                        e && l("[a-z]")
                    }
                    return h[b] = {
                        nextPos: d,
                        result: f
                    }, f
                }

                function bf() {
                    var b = "upperCaseLetter@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    if (a.substr(d).match(/^[A-Z]/) !== null) {
                        var f = a.charAt(d);
                        d++
                    } else {
                        var f = null;
                        e && l("[A-Z]")
                    }
                    return h[b] = {
                        nextPos: d,
                        result: f
                    }, f
                }

                function bg() {
                    var a = "__@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = [],
                        e = bm();
                    if (e !== null) var f = e;
                    else {
                        var g = bk();
                        if (g !== null) var f = g;
                        else {
                            var i = bh();
                            if (i !== null) var f = i;
                            else var f = null
                        }
                    }
                    while (f !== null) {
                        c.push(f);
                        var e = bm();
                        if (e !== null) var f = e;
                        else {
                            var g = bk();
                            if (g !== null) var f = g;
                            else {
                                var i = bh();
                                if (i !== null) var f = i;
                                else var f = null
                            }
                        }
                    }
                    return h[a] = {
                        nextPos: d,
                        result: c
                    }, c
                }

                function bh() {
                    var a = "comment@" + d,
                        b = h[a];
                    if (b) return d = b.nextPos, b.result;
                    var c = e;
                    e = !1;
                    var f = bi();
                    if (f !== null) var g = f;
                    else {
                        var i = bj();
                        if (i !== null) var g = i;
                        else var g = null
                    }
                    return e = c, e && g === null && l("comment"), h[a] = {
                        nextPos: d,
                        result: g
                    }, g
                }

                function bi() {
                    var b = "singleLineComment@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d;
                    if (a.substr(d, 2) === "//") {
                        var g = "//";
                        d += 2
                    } else {
                        var g = null;
                        e && l('"//"')
                    } if (g !== null) {
                        var i = [],
                            j = d,
                            k = d,
                            m = e;
                        e = !1;
                        var n = bl();
                        e = m;
                        if (n === null) var o = "";
                        else {
                            var o = null;
                            d = k
                        } if (o !== null) {
                            if (a.length > d) {
                                var p = a.charAt(d);
                                d++
                            } else {
                                var p = null;
                                e && l("any character")
                            } if (p !== null) var q = [o, p];
                            else {
                                var q = null;
                                d = j
                            }
                        } else {
                            var q = null;
                            d = j
                        }
                        while (q !== null) {
                            i.push(q);
                            var j = d,
                                k = d,
                                m = e;
                            e = !1;
                            var n = bl();
                            e = m;
                            if (n === null) var o = "";
                            else {
                                var o = null;
                                d = k
                            } if (o !== null) {
                                if (a.length > d) {
                                    var p = a.charAt(d);
                                    d++
                                } else {
                                    var p = null;
                                    e && l("any character")
                                } if (p !== null) var q = [o, p];
                                else {
                                    var q = null;
                                    d = j
                                }
                            } else {
                                var q = null;
                                d = j
                            }
                        }
                        if (i !== null) var r = [g, i];
                        else {
                            var r = null;
                            d = f
                        }
                    } else {
                        var r = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: r
                    }, r
                }

                function bj() {
                    var b = "multiLineComment@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = d;
                    if (a.substr(d, 2) === "/*") {
                        var g = "/*";
                        d += 2
                    } else {
                        var g = null;
                        e && l('"/*"')
                    } if (g !== null) {
                        var i = [],
                            j = d,
                            k = d,
                            m = e;
                        e = !1;
                        if (a.substr(d, 2) === "*/") {
                            var n = "*/";
                            d += 2
                        } else {
                            var n = null;
                            e && l('"*/"')
                        }
                        e = m;
                        if (n === null) var o = "";
                        else {
                            var o = null;
                            d = k
                        } if (o !== null) {
                            if (a.length > d) {
                                var p = a.charAt(d);
                                d++
                            } else {
                                var p = null;
                                e && l("any character")
                            } if (p !== null) var q = [o, p];
                            else {
                                var q = null;
                                d = j
                            }
                        } else {
                            var q = null;
                            d = j
                        }
                        while (q !== null) {
                            i.push(q);
                            var j = d,
                                k = d,
                                m = e;
                            e = !1;
                            if (a.substr(d, 2) === "*/") {
                                var n = "*/";
                                d += 2
                            } else {
                                var n = null;
                                e && l('"*/"')
                            }
                            e = m;
                            if (n === null) var o = "";
                            else {
                                var o = null;
                                d = k
                            } if (o !== null) {
                                if (a.length > d) {
                                    var p = a.charAt(d);
                                    d++
                                } else {
                                    var p = null;
                                    e && l("any character")
                                } if (p !== null) var q = [o, p];
                                else {
                                    var q = null;
                                    d = j
                                }
                            } else {
                                var q = null;
                                d = j
                            }
                        }
                        if (i !== null) {
                            if (a.substr(d, 2) === "*/") {
                                var r = "*/";
                                d += 2
                            } else {
                                var r = null;
                                e && l('"*/"')
                            } if (r !== null) var s = [g, i, r];
                            else {
                                var s = null;
                                d = f
                            }
                        } else {
                            var s = null;
                            d = f
                        }
                    } else {
                        var s = null;
                        d = f
                    }
                    return h[b] = {
                        nextPos: d,
                        result: s
                    }, s
                }

                function bk() {
                    var b = "eol@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = e;
                    e = !1;
                    if (a.substr(d, 1) === "\n") {
                        var g = "\n";
                        d += 1
                    } else {
                        var g = null;
                        e && l('"\\n"')
                    } if (g !== null) var i = g;
                    else {
                        if (a.substr(d, 2) === "\r\n") {
                            var j = "\r\n";
                            d += 2
                        } else {
                            var j = null;
                            e && l('"\\r\\n"')
                        } if (j !== null) var i = j;
                        else {
                            if (a.substr(d, 1) === "\r") {
                                var k = "\r";
                                d += 1
                            } else {
                                var k = null;
                                e && l('"\\r"')
                            } if (k !== null) var i = k;
                            else {
                                if (a.substr(d, 1) === "\u2028") {
                                    var m = "\u2028";
                                    d += 1
                                } else {
                                    var m = null;
                                    e && l('"\\u2028"')
                                } if (m !== null) var i = m;
                                else {
                                    if (a.substr(d, 1) === "\u2029") {
                                        var n = "\u2029";
                                        d += 1
                                    } else {
                                        var n = null;
                                        e && l('"\\u2029"')
                                    } if (n !== null) var i = n;
                                    else var i = null
                                }
                            }
                        }
                    }
                    return e = f, e && i === null && l("end of line"), h[b] = {
                        nextPos: d,
                        result: i
                    }, i
                }

                function bl() {
                    var b = "eolChar@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    if (a.substr(d).match(/^[\n\r\u2028\u2029]/) !== null) {
                        var f = a.charAt(d);
                        d++
                    } else {
                        var f = null;
                        e && l("[\\n\\r\\u2028\\u2029]")
                    }
                    return h[b] = {
                        nextPos: d,
                        result: f
                    }, f
                }

                function bm() {
                    var b = "whitespace@" + d,
                        c = h[b];
                    if (c) return d = c.nextPos, c.result;
                    var f = e;
                    e = !1;
                    if (a.substr(d).match(/^[ 	\xA0\uFEFF\u1680\u180E\u2000-\u200A\u202F\u205F\u3000]/) !== null) {
                        var g = a.charAt(d);
                        d++
                    } else {
                        var g = null;
                        e && l("[ \t\f\\xA0\\uFEFF\\u1680\\u180E\\u2000-\\u200A\\u202F\\u205F\\u3000]")
                    }
                    return e = f, e && g === null && l("whitespace"), h[b] = {
                        nextPos: d,
                        result: g
                    }, g
                }

                function bn() {
                    function b(a) {
                        a.sort();
                        var b = null,
                            c = [];
                        for (var d = 0; d < a.length; d++) a[d] !== b && (c.push(a[d]), b = a[d]);
                        switch (c.length) {
                            case 0:
                                return "end of input";
                            case 1:
                                return c[0];
                            default:
                                return c.slice(0, c.length - 1).join(", ") + " or " + c[c.length - 1]
                        }
                    }
                    var c = b(g),
                        e = Math.max(d, f),
                        h = e < a.length ? k(a.charAt(e)) : "end of input";
                    return "Expected " + c + " but " + h + " found."
                }

                function bo() {
                    var b = 1,
                        c = 1,
                        d = !1;
                    for (var e = 0; e < f; e++) {
                        var g = a.charAt(e);
                        g === "\n" ? (d || b++, c = 1, d = !1) : g === "\r" | g === "\u2028" || g === "\u2029" ? (b++, c = 1, d = !0) : (c++, d = !1)
                    }
                    return {
                        line: b,
                        column: c
                    }
                }
                var c = {
                    __: bg,
                    action: v,
                    and: D,
                    braced: w,
                    bracketDelimitedCharacter: W,
                    choice: p,
                    "class": T,
                    classCharacter: V,
                    classCharacterRange: U,
                    colon: A,
                    comment: bh,
                    digit: bb,
                    dot: K,
                    doubleQuotedCharacter: O,
                    doubleQuotedLiteral: N,
                    eol: bk,
                    eolChar: bl,
                    eolEscapeSequence: ba,
                    equals: z,
                    grammar: m,
                    hexDigit: bc,
                    hexEscapeSequence: $,
                    identifier: L,
                    initializer: n,
                    labeled: r,
                    letter: bd,
                    literal: M,
                    lowerCaseLetter: be,
                    lparen: I,
                    multiLineComment: bj,
                    nonBraceCharacter: y,
                    nonBraceCharacters: x,
                    not: E,
                    plus: H,
                    prefixed: s,
                    primary: u,
                    question: F,
                    rparen: J,
                    rule: o,
                    semicolon: B,
                    sequence: q,
                    simpleBracketDelimitedCharacter: X,
                    simpleDoubleQuotedCharacter: P,
                    simpleEscapeSequence: Y,
                    simpleSingleQuotedCharacter: S,
                    singleLineComment: bi,
                    singleQuotedCharacter: R,
                    singleQuotedLiteral: Q,
                    slash: C,
                    star: G,
                    suffixed: t,
                    unicodeEscapeSequence: _,
                    upperCaseLetter: bf,
                    whitespace: bm,
                    zeroEscapeSequence: Z
                };
                if (b !== undefined) {
                    if (c[b] === undefined) throw new Error("Invalid rule name: " + k(b) + ".")
                } else b = "grammar";
                var d = 0,
                    e = !0,
                    f = 0,
                    g = [],
                    h = {}, bp = c[b]();
                if (bp === null || d !== a.length) {
                    var bq = bo();
                    throw new this.SyntaxError(bn(), bq.line, bq.column)
                }
                return bp
            },
            toSource: function () {
                return this._source
            }
        };
        return a.SyntaxError = function (a, b, c) {
            this.name = "SyntaxError", this.message = a, this.line = b, this.column = c
        }, a.SyntaxError.prototype = Error.prototype, a
    }(), PEG.compiler = {
        compile: function (ast) {
            var CHECK_NAMES = ["missingReferencedRules", "leftRecursion"],
                PASS_NAMES = ["proxyRules"];
            for (var i = 0; i < CHECK_NAMES.length; i++) this.checks[CHECK_NAMES[i]](ast);
            for (var i = 0; i < PASS_NAMES.length; i++) ast = this.passes[PASS_NAMES[i]](ast);
            var source = this.emitter(ast),
                result = eval(source);
            return result._source = source, result
        }
    }, PEG.compiler.checks = {
        missingReferencedRules: function (a) {
            function b() {}

            function c(a) {
                e(a.expression)
            }

            function d(a) {
                return function (b) {
                    each(b[a], e)
                }
            }
            var e = buildNodeVisitor({
                grammar: function (a) {
                    for (var b in a.rules) e(a.rules[b])
                },
                rule: c,
                choice: d("alternatives"),
                sequence: d("elements"),
                labeled: c,
                simple_and: c,
                simple_not: c,
                semantic_and: b,
                semantic_not: b,
                optional: c,
                zero_or_more: c,
                one_or_more: c,
                action: c,
                rule_ref: function (b) {
                    if (a.rules[b.name] === undefined) throw new PEG.GrammarError('Referenced rule "' + b.name + '" does not exist.')
                },
                literal: b,
                any: b,
                "class": b
            });
            e(a)
        },
        leftRecursion: function (a) {
            function b() {}

            function c(a, b) {
                d(a.expression, b)
            }
            var d = buildNodeVisitor({
                grammar: function (a, b) {
                    for (var c in a.rules) d(a.rules[c], b)
                },
                rule: function (a, b) {
                    d(a.expression, b.concat(a.name))
                },
                choice: function (a, b) {
                    each(a.alternatives, function (a) {
                        d(a, b)
                    })
                },
                sequence: function (a, b) {
                    a.elements.length > 0 && d(a.elements[0], b)
                },
                labeled: c,
                simple_and: c,
                simple_not: c,
                semantic_and: b,
                semantic_not: b,
                optional: c,
                zero_or_more: c,
                one_or_more: c,
                action: c,
                rule_ref: function (b, c) {
                    if (contains(c, b.name)) throw new PEG.GrammarError('Left recursion detected for rule "' + b.name + '".');
                    d(a.rules[b.name], c)
                },
                literal: b,
                any: b,
                "class": b
            });
            d(a, [])
        }
    }, PEG.compiler.passes = {
        proxyRules: function (a) {
            function b(a) {
                return a.type === "rule" && a.expression.type === "rule_ref"
            }

            function c(a, b, c) {
                function d() {}

                function e(a, b, c) {
                    g(a.expression, b, c)
                }

                function f(a) {
                    return function (b, c, d) {
                        each(b[a], function (a) {
                            g(a, c, d)
                        })
                    }
                }
                var g = buildNodeVisitor({
                    grammar: function (a, b, c) {
                        for (var d in a.rules)
                            g(a.rules[d], b, c)
                    },
                    rule: e,
                    choice: f("alternatives"),
                    sequence: f("elements"),
                    labeled: e,
                    simple_and: e,
                    simple_not: e,
                    semantic_and: d,
                    semantic_not: d,
                    optional: e,
                    zero_or_more: e,
                    one_or_more: e,
                    action: e,
                    rule_ref: function (a, b, c) {
                        a.name === b && (a.name = c)
                    },
                    literal: d,
                    any: d,
                    "class": d
                });
                g(a, b, c)
            }
            for (var d in a.rules) b(a.rules[d]) && (c(a, a.rules[d].name, a.rules[d].expression.name), d === a.startRule && (a.startRule = a.rules[d].expression.name), delete a.rules[d]);
            return a
        }
    }, PEG.compiler.emitter = function (a) {
        function b() {
            function a(a) {
                return map(a, function (a) {
                    return a.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_]*)(\|([a-zA-Z_][a-zA-Z0-9_]*))?\}/g, function (a, b, c, e) {
                        var f = d[b];
                        if (f === undefined) throw new Error('Undefined variable: "' + b + '".');
                        if (e !== undefined && e != "") {
                            if (e === "string") return quote(f);
                            throw new Error('Unrecognized filter: "' + e + '".')
                        }
                        return f
                    })
                })
            }

            function b(a) {
                return map(a, function (a) {
                    if (!/\n/.test(a)) return a;
                    var b = a.match(/^\s*/)[0],
                        c = a.split("\n"),
                        d = [c[0]].concat(map(c.slice(1), function (a) {
                            return b + a
                        }));
                    return d.join("\n")
                })
            }
            var c = Array.prototype.slice.call(arguments),
                d = c[c.length - 1] instanceof Object ? c.pop() : {};
            return b(a(c)).join("\n")
        }
        var c = {
            _counters: {},
            next: function (a) {
                return this._counters[a] = this._counters[a] || 0, a + this._counters[a]++
            },
            reset: function () {
                this._counters = {}
            }
        }, d = buildNodeVisitor({
            grammar: function (a) {
                var c = a.initializer !== null ? d(a.initializer) : "",
                    e = [];
                for (var f in a.rules) e.push(quote(f) + ": parse_" + f);
                e.sort();
                var g = [];
                for (var f in a.rules) g.push(d(a.rules[f]));
                return b("(function(){", "  /* Generated by PEG.js 0.6.2 (http://pegjs.majda.cz/). */", "  ", "  var result = {", "    /*", "     * Parses the input with a generated parser. If the parsing is successfull,", "     * returns a value explicitly or implicitly specified by the grammar from", "     * which the parser was generated (see |PEG.buildParser|). If the parsing is", "     * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.", "     */", "    parse: function(input, startRule) {", "      var parseFunctions = {", "        ${parseFunctionTableItems}", "      };", "      ", "      if (startRule !== undefined) {", "        if (parseFunctions[startRule] === undefined) {", '          throw new Error("Invalid rule name: " + quote(startRule) + ".");', "        }", "      } else {", "        startRule = ${startRule|string};", "      }", "      ", "      var pos = 0;", "      var reportMatchFailures = true;", "      var rightmostMatchFailuresPos = 0;", "      var rightmostMatchFailuresExpected = [];", "      var cache = {};", "      ", "      function padLeft(input, padding, length) {", "        var result = input;", "        ", "        var padLength = length - input.length;", "        for (var i = 0; i < padLength; i++) {", "          result = padding + result;", "        }", "        ", "        return result;", "      }", "      ", "      function escape(ch) {", "        var charCode = ch.charCodeAt(0);", "        ", "        if (charCode <= 0xFF) {", "          var escapeChar = 'x';", "          var length = 2;", "        } else {", "          var escapeChar = 'u';", "          var length = 4;", "        }", "        ", "        return '\\\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);", "      }", "      ", "      function quote(s) {", "        /*", "         * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a", "         * string literal except for the closing quote character, backslash,", "         * carriage return, line separator, paragraph separator, and line feed.", "         * Any character may appear in the form of an escape sequence.", "         */", "        return '\"' + s", "          .replace(/\\\\/g, '\\\\\\\\')            // backslash", "          .replace(/\"/g, '\\\\\"')              // closing quote character", "          .replace(/\\r/g, '\\\\r')             // carriage return", "          .replace(/\\n/g, '\\\\n')             // line feed", "          .replace(/[\\x80-\\uFFFF]/g, escape) // non-ASCII characters", "          + '\"';", "      }", "      ", "      function matchFailed(failure) {", "        if (pos < rightmostMatchFailuresPos) {", "          return;", "        }", "        ", "        if (pos > rightmostMatchFailuresPos) {", "          rightmostMatchFailuresPos = pos;", "          rightmostMatchFailuresExpected = [];", "        }", "        ", "        rightmostMatchFailuresExpected.push(failure);", "      }", "      ", "      ${parseFunctionDefinitions}", "      ", "      function buildErrorMessage() {", "        function buildExpected(failuresExpected) {", "          failuresExpected.sort();", "          ", "          var lastFailure = null;", "          var failuresExpectedUnique = [];", "          for (var i = 0; i < failuresExpected.length; i++) {", "            if (failuresExpected[i] !== lastFailure) {", "              failuresExpectedUnique.push(failuresExpected[i]);", "              lastFailure = failuresExpected[i];", "            }", "          }", "          ", "          switch (failuresExpectedUnique.length) {", "            case 0:", "              return 'end of input';", "            case 1:", "              return failuresExpectedUnique[0];", "            default:", "              return failuresExpectedUnique.slice(0, failuresExpectedUnique.length - 1).join(', ')", "                + ' or '", "                + failuresExpectedUnique[failuresExpectedUnique.length - 1];", "          }", "        }", "        ", "        var expected = buildExpected(rightmostMatchFailuresExpected);", "        var actualPos = Math.max(pos, rightmostMatchFailuresPos);", "        var actual = actualPos < input.length", "          ? quote(input.charAt(actualPos))", "          : 'end of input';", "        ", "        return 'Expected ' + expected + ' but ' + actual + ' found.';", "      }", "      ", "      function computeErrorPosition() {", "        /*", "         * The first idea was to use |String.split| to break the input up to the", "         * error position along newlines and derive the line and column from", "         * there. However IE's |split| implementation is so broken that it was", "         * enough to prevent it.", "         */", "        ", "        var line = 1;", "        var column = 1;", "        var seenCR = false;", "        ", "        for (var i = 0; i <  rightmostMatchFailuresPos; i++) {", "          var ch = input.charAt(i);", "          if (ch === '\\n') {", "            if (!seenCR) { line++; }", "            column = 1;", "            seenCR = false;", "          } else if (ch === '\\r' | ch === '\\u2028' || ch === '\\u2029') {", "            line++;", "            column = 1;", "            seenCR = true;", "          } else {", "            column++;", "            seenCR = false;", "          }", "        }", "        ", "        return { line: line, column: column };", "      }", "      ", "      ${initializerCode}", "      ", "      var result = parseFunctions[startRule]();", "      ", "      /*", "       * The parser is now in one of the following three states:", "       *", "       * 1. The parser successfully parsed the whole input.", "       *", "       *    - |result !== null|", "       *    - |pos === input.length|", "       *    - |rightmostMatchFailuresExpected| may or may not contain something", "       *", "       * 2. The parser successfully parsed only a part of the input.", "       *", "       *    - |result !== null|", "       *    - |pos < input.length|", "       *    - |rightmostMatchFailuresExpected| may or may not contain something", "       *", "       * 3. The parser did not successfully parse any part of the input.", "       *", "       *   - |result === null|", "       *   - |pos === 0|", "       *   - |rightmostMatchFailuresExpected| contains at least one failure", "       *", "       * All code following this comment (including called functions) must", "       * handle these states.", "       */", "      if (result === null || pos !== input.length) {", "        var errorPosition = computeErrorPosition();", "        throw new this.SyntaxError(", "          buildErrorMessage(),", "          errorPosition.line,", "          errorPosition.column", "        );", "      }", "      ", "      return result;", "    },", "    ", "    /* Returns the parser source code. */", "    toSource: function() { return this._source; }", "  };", "  ", "  /* Thrown when a parser encounters a syntax error. */", "  ", "  result.SyntaxError = function(message, line, column) {", "    this.name = 'SyntaxError';", "    this.message = message;", "    this.line = line;", "    this.column = column;", "  };", "  ", "  result.SyntaxError.prototype = Error.prototype;", "  ", "  return result;", "})()", {
                    initializerCode: c,
                    parseFunctionTableItems: e.join(",\n"),
                    parseFunctionDefinitions: g.join("\n\n"),
                    startRule: a.startRule
                })
            },
            initializer: function (a) {
                return a.code
            },
            rule: function (a) {
                c.reset();
                var e = c.next("result");
                if (a.displayName !== null) var f = b("var savedReportMatchFailures = reportMatchFailures;", "reportMatchFailures = false;"),
                    g = b("reportMatchFailures = savedReportMatchFailures;"), h = b("if (reportMatchFailures && ${resultVar} === null) {", "  matchFailed(${displayName|string});", "}", {
                        displayName: a.displayName,
                        resultVar: e
                    });
                else var f = "",
                    g = "", h = "";
                return b("function parse_${name}() {", "  var cacheKey = '${name}@' + pos;", "  var cachedResult = cache[cacheKey];", "  if (cachedResult) {", "    pos = cachedResult.nextPos;", "    return cachedResult.result;", "  }", "  ", "  ${setReportMatchFailuresCode}", "  ${code}", "  ${restoreReportMatchFailuresCode}", "  ${reportMatchFailureCode}", "  ", "  cache[cacheKey] = {", "    nextPos: pos,", "    result:  ${resultVar}", "  };", "  return ${resultVar};", "}", {
                    name: a.name,
                    setReportMatchFailuresCode: f,
                    restoreReportMatchFailuresCode: g,
                    reportMatchFailureCode: h,
                    code: d(a.expression, e),
                    resultVar: e
                })
            },
            choice: function (a, e) {
                var f = b("var ${resultVar} = null;", {
                    resultVar: e
                });
                for (var g = a.alternatives.length - 1; g >= 0; g--) {
                    var h = c.next("result");
                    f = b("${alternativeCode}", "if (${alternativeResultVar} !== null) {", "  var ${resultVar} = ${alternativeResultVar};", "} else {", "  ${code};", "}", {
                        alternativeCode: d(a.alternatives[g], h),
                        alternativeResultVar: h,
                        code: f,
                        resultVar: e
                    })
                }
                return f
            },
            sequence: function (a, e) {
                var f = c.next("savedPos"),
                    g = map(a.elements, function () {
                        return c.next("result")
                    }),
                    h = b("var ${resultVar} = ${elementResultVarArray};", {
                        resultVar: e,
                        elementResultVarArray: "[" + g.join(", ") + "]"
                    });
                for (var i = a.elements.length - 1; i >= 0; i--) h = b("${elementCode}", "if (${elementResultVar} !== null) {", "  ${code}", "} else {", "  var ${resultVar} = null;", "  pos = ${savedPosVar};", "}", {
                    elementCode: d(a.elements[i], g[i]),
                    elementResultVar: g[i],
                    code: h,
                    savedPosVar: f,
                    resultVar: e
                });
                return b("var ${savedPosVar} = pos;", "${code}", {
                    code: h,
                    savedPosVar: f
                })
            },
            labeled: function (a, b) {
                return d(a.expression, b)
            },
            simple_and: function (a, e) {
                var f = c.next("savedPos"),
                    g = c.next("savedReportMatchFailuresVar"),
                    h = c.next("result");
                return b("var ${savedPosVar} = pos;", "var ${savedReportMatchFailuresVar} = reportMatchFailures;", "reportMatchFailures = false;", "${expressionCode}", "reportMatchFailures = ${savedReportMatchFailuresVar};", "if (${expressionResultVar} !== null) {", "  var ${resultVar} = '';", "  pos = ${savedPosVar};", "} else {", "  var ${resultVar} = null;", "}", {
                    expressionCode: d(a.expression, h),
                    expressionResultVar: h,
                    savedPosVar: f,
                    savedReportMatchFailuresVar: g,
                    resultVar: e
                })
            },
            simple_not: function (a, e) {
                var f = c.next("savedPos"),
                    g = c.next("savedReportMatchFailuresVar"),
                    h = c.next("result");
                return b("var ${savedPosVar} = pos;", "var ${savedReportMatchFailuresVar} = reportMatchFailures;", "reportMatchFailures = false;", "${expressionCode}", "reportMatchFailures = ${savedReportMatchFailuresVar};", "if (${expressionResultVar} === null) {", "  var ${resultVar} = '';", "} else {", "  var ${resultVar} = null;", "  pos = ${savedPosVar};", "}", {
                    expressionCode: d(a.expression, h),
                    expressionResultVar: h,
                    savedPosVar: f,
                    savedReportMatchFailuresVar: g,
                    resultVar: e
                })
            },
            semantic_and: function (a, c) {
                return b("var ${resultVar} = (function() {${actionCode}})() ? '' : null;", {
                    actionCode: a.code,
                    resultVar: c
                })
            },
            semantic_not: function (a, c) {
                return b("var ${resultVar} = (function() {${actionCode}})() ? null : '';", {
                    actionCode: a.code,
                    resultVar: c
                })
            },
            optional: function (a, e) {
                var f = c.next("result");
                return b("${expressionCode}", "var ${resultVar} = ${expressionResultVar} !== null ? ${expressionResultVar} : '';", {
                    expressionCode: d(a.expression, f),
                    expressionResultVar: f,
                    resultVar: e
                })
            },
            zero_or_more: function (a, e) {
                var f = c.next("result");
                return b("var ${resultVar} = [];", "${expressionCode}", "while (${expressionResultVar} !== null) {", "  ${resultVar}.push(${expressionResultVar});", "  ${expressionCode}", "}", {
                    expressionCode: d(a.expression, f),
                    expressionResultVar: f,
                    resultVar: e
                })
            },
            one_or_more: function (a, e) {
                var f = c.next("result");
                return b("${expressionCode}", "if (${expressionResultVar} !== null) {", "  var ${resultVar} = [];", "  while (${expressionResultVar} !== null) {", "    ${resultVar}.push(${expressionResultVar});", "    ${expressionCode}", "  }", "} else {", "  var ${resultVar} = null;", "}", {
                    expressionCode: d(a.expression, f),
                    expressionResultVar: f,
                    resultVar: e
                })
            },
            action: function (a, e) {
                var f = c.next("result"),
                    g = c.next("result"),
                    h = c.next("savedPos");
                if (a.expression.type === "sequence") {
                    var i = [],
                        j = [],
                        k = a.expression.elements,
                        l = k.length;
                    for (var m = 0; m < l; m++) k[m].type === "labeled" && (i.push(k[m].label), j.push(f + "[" + m + "]"))
                } else if (a.expression.type === "labeled") var i = [a.expression.label],
                    j = [f];
                else var i = [],
                        j = [];
                return b("var ${savedPosVar} = pos;", "${expressionCode}", "var ${actionResultVar} = ${expressionResultVar} !== null", "  ? (function(${formalParams}) {${actionCode}})(${actualParams})", "  : null;", "if (${actionResultVar} !== null) {", "  var ${resultVar} = ${actionResultVar};", "} else {", "  var ${resultVar} = null;", "  pos = ${savedPosVar};", "}", {
                    expressionCode: d(a.expression, f),
                    expressionResultVar: f,
                    actionCode: a.code,
                    actionResultVar: g,
                    formalParams: i.join(", "),
                    actualParams: j.join(", "),
                    savedPosVar: h,
                    resultVar: e
                })
            },
            rule_ref: function (a, c) {
                return b("var ${resultVar} = ${ruleMethod}();", {
                    ruleMethod: "parse_" + a.name,
                    resultVar: c
                })
            },
            literal: function (a, c) {
                return b("if (input.substr(pos, ${length}) === ${value|string}) {", "  var ${resultVar} = ${value|string};", "  pos += ${length};", "} else {", "  var ${resultVar} = null;", "  if (reportMatchFailures) {", "    matchFailed(${valueQuoted|string});", "  }", "}", {
                    value: a.value,
                    valueQuoted: quote(a.value),
                    length: a.value.length,
                    resultVar: c
                })
            },
            any: function (a, c) {
                return b("if (input.length > pos) {", "  var ${resultVar} = input.charAt(pos);", "  pos++;", "} else {", "  var ${resultVar} = null;", "  if (reportMatchFailures) {", "    matchFailed('any character');", "  }", "}", {
                    resultVar: c
                })
            },
            "class": function (a, c) {
                if (a.parts.length > 0) var d = "/^[" + (a.inverted ? "^" : "") + map(a.parts, function (a) {
                    return a instanceof Array ? quoteForRegexpClass(a[0]) + "-" + quoteForRegexpClass(a[1]) : quoteForRegexpClass(a)
                }).join("") + "]/";
                else var d = a.inverted ? "/^[\\S\\s]/" : "/^(?!)/";
                return b("if (input.substr(pos).match(${regexp}) !== null) {", "  var ${resultVar} = input.charAt(pos);", "  pos++;", "} else {", "  var ${resultVar} = null;", "  if (reportMatchFailures) {", "    matchFailed(${rawText|string});", "  }", "}", {
                    regexp: d,
                    rawText: a.rawText,
                    resultVar: c
                })
            }
        });
        return d(a)
    };
    if (typeof module == "object") module.exports = PEG;
    else if (typeof window == "object") window.PEG = PEG;
    else throw new Error('Can\'t export PEG library (no "module" nor "window" object detected).')
})()
