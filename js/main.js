! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.11",
        setup: function () {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (b) {
            var c = a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return c.length || (c = a("body")), parseInt(c.css("fontSize"), 10)
        },
        getPageHeight: function (b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
}),
function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a, b) {
    function c(a) {
        function b() {
            d ? (c(), M(b), e = !0, d = !1) : e = !1
        }
        var c = a,
            d = !1,
            e = !1;
        this.kick = function () {
            d = !0, e || b()
        }, this.end = function (a) {
            var b = c;
            a && (e ? (c = d ? function () {
                b(), a()
            } : a, d = !0) : a())
        }
    }

    function d() {
        return !0
    }

    function e() {
        return !1
    }

    function f(a) {
        a.preventDefault()
    }

    function g(a) {
        N[a.target.tagName.toLowerCase()] || a.preventDefault()
    }

    function h(a) {
        return 1 === a.which && !a.ctrlKey && !a.altKey
    }

    function i(a, b) {
        var c, d;
        if (a.identifiedTouch) return a.identifiedTouch(b);
        for (c = -1, d = a.length; ++c < d;)
            if (a[c].identifier === b) return a[c]
    }

    function j(a, b) {
        var c = i(a.changedTouches, b.identifier);
        if (c && (c.pageX !== b.pageX || c.pageY !== b.pageY)) return c
    }

    function k(a) {
        var b;
        h(a) && (b = {
            target: a.target,
            startX: a.pageX,
            startY: a.pageY,
            timeStamp: a.timeStamp
        }, J(document, O.move, l, b), J(document, O.cancel, m, b))
    }

    function l(a) {
        var b = a.data;
        s(a, b, a, n)
    }

    function m() {
        n()
    }

    function n() {
        K(document, O.move, l), K(document, O.cancel, m)
    }

    function o(a) {
        var b, c;
        N[a.target.tagName.toLowerCase()] || (b = a.changedTouches[0], c = {
            target: b.target,
            startX: b.pageX,
            startY: b.pageY,
            timeStamp: a.timeStamp,
            identifier: b.identifier
        }, J(document, P.move + "." + b.identifier, p, c), J(document, P.cancel + "." + b.identifier, q, c))
    }

    function p(a) {
        var b = a.data,
            c = j(a, b);
        c && s(a, b, c, r)
    }

    function q(a) {
        var b = a.data,
            c = i(a.changedTouches, b.identifier);
        c && r(b.identifier)
    }

    function r(a) {
        K(document, "." + a, p), K(document, "." + a, q)
    }

    function s(a, b, c, d) {
        var e = c.pageX - b.startX,
            f = c.pageY - b.startY;
        I * I > e * e + f * f || v(a, b, c, e, f, d)
    }

    function t() {
        return this._handled = d, !1
    }

    function u(a) {
        a._handled()
    }

    function v(a, b, c, d, e, f) {
        {
            var g, h;
            b.target
        }
        g = a.targetTouches, h = a.timeStamp - b.timeStamp, b.type = "movestart", b.distX = d, b.distY = e, b.deltaX = d, b.deltaY = e, b.pageX = c.pageX, b.pageY = c.pageY, b.velocityX = d / h, b.velocityY = e / h, b.targetTouches = g, b.finger = g ? g.length : 1, b._handled = t, b._preventTouchmoveDefault = function () {
            a.preventDefault()
        }, L(b.target, b), f(b.identifier)
    }

    function w(a) {
        var b = a.data.timer;
        a.data.touch = a, a.data.timeStamp = a.timeStamp, b.kick()
    }

    function x(a) {
        var b = a.data.event,
            c = a.data.timer;
        y(), D(b, c, function () {
            setTimeout(function () {
                K(b.target, "click", e)
            }, 0)
        })
    }

    function y() {
        K(document, O.move, w), K(document, O.end, x)
    }

    function z(a) {
        var b = a.data.event,
            c = a.data.timer,
            d = j(a, b);
        d && (a.preventDefault(), b.targetTouches = a.targetTouches, a.data.touch = d, a.data.timeStamp = a.timeStamp, c.kick())
    }

    function A(a) {
        var b = a.data.event,
            c = a.data.timer,
            d = i(a.changedTouches, b.identifier);
        d && (B(b), D(b, c))
    }

    function B(a) {
        K(document, "." + a.identifier, z), K(document, "." + a.identifier, A)
    }

    function C(a, b, c) {
        var d = c - a.timeStamp;
        a.type = "move", a.distX = b.pageX - a.startX, a.distY = b.pageY - a.startY, a.deltaX = b.pageX - a.pageX, a.deltaY = b.pageY - a.pageY, a.velocityX = .3 * a.velocityX + .7 * a.deltaX / d, a.velocityY = .3 * a.velocityY + .7 * a.deltaY / d, a.pageX = b.pageX, a.pageY = b.pageY
    }

    function D(a, b, c) {
        b.end(function () {
            return a.type = "moveend", L(a.target, a), c && c()
        })
    }

    function E() {
        return J(this, "movestart.move", u), !0
    }

    function F() {
        return K(this, "dragstart drag", f), K(this, "mousedown touchstart", g), K(this, "movestart", u), !0
    }

    function G(a) {
        "move" !== a.namespace && "moveend" !== a.namespace && (J(this, "dragstart." + a.guid + " drag." + a.guid, f, b, a.selector), J(this, "mousedown." + a.guid, g, b, a.selector))
    }

    function H(a) {
        "move" !== a.namespace && "moveend" !== a.namespace && (K(this, "dragstart." + a.guid + " drag." + a.guid), K(this, "mousedown." + a.guid))
    }
    var I = 6,
        J = a.event.add,
        K = a.event.remove,
        L = function (b, c, d) {
            a.event.trigger(c, d, b)
        },
        M = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
                return window.setTimeout(function () {
                    a()
                }, 25)
            }
        }(),
        N = {
            textarea: !0,
            input: !0,
            select: !0,
            button: !0
        },
        O = {
            move: "mousemove",
            cancel: "mouseup dragstart",
            end: "mouseup"
        },
        P = {
            move: "touchmove",
            cancel: "touchend",
            end: "touchend"
        };
    a.event.special.movestart = {
        setup: E,
        teardown: F,
        add: G,
        remove: H,
        _default: function (a) {
            function d() {
                C(f, g.touch, g.timeStamp), L(a.target, f)
            }
            var f, g;
            a._handled() && (f = {
                target: a.target,
                startX: a.startX,
                startY: a.startY,
                pageX: a.pageX,
                pageY: a.pageY,
                distX: a.distX,
                distY: a.distY,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                velocityX: a.velocityX,
                velocityY: a.velocityY,
                timeStamp: a.timeStamp,
                identifier: a.identifier,
                targetTouches: a.targetTouches,
                finger: a.finger
            }, g = {
                event: f,
                timer: new c(d),
                touch: b,
                timeStamp: b
            }, a.identifier === b ? (J(a.target, "click", e), J(document, O.move, w, g), J(document, O.end, x, g)) : (a._preventTouchmoveDefault(), J(document, P.move + "." + a.identifier, z, g), J(document, P.end + "." + a.identifier, A, g)))
        }
    }, a.event.special.move = {
        setup: function () {
            J(this, "movestart.move", a.noop)
        },
        teardown: function () {
            K(this, "movestart.move", a.noop)
        }
    }, a.event.special.moveend = {
        setup: function () {
            J(this, "movestart.moveend", a.noop)
        },
        teardown: function () {
            K(this, "movestart.moveend", a.noop)
        }
    }, J(document, "mousedown.move", k), J(document, "touchstart.move", o), "function" == typeof Array.prototype.indexOf && ! function (a) {
        for (var b = ["changedTouches", "targetTouches"], c = b.length; c--;) - 1 === a.event.props.indexOf(b[c]) && a.event.props.push(b[c])
    }(a)
}),
function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    function b(a) {
        var b, c, d;
        b = a.currentTarget.offsetWidth, c = a.currentTarget.offsetHeight, d = {
            distX: a.distX,
            distY: a.distY,
            velocityX: a.velocityX,
            velocityY: a.velocityY,
            finger: a.finger
        }, a.distX > a.distY ? a.distX > -a.distY ? (a.distX / b > g.threshold || a.velocityX * a.distX / b * g.sensitivity > 1) && (d.type = "swiperight", f(a.currentTarget, d)) : (-a.distY / c > g.threshold || a.velocityY * a.distY / b * g.sensitivity > 1) && (d.type = "swipeup", f(a.currentTarget, d)) : a.distX > -a.distY ? (a.distY / c > g.threshold || a.velocityY * a.distY / b * g.sensitivity > 1) && (d.type = "swipedown", f(a.currentTarget, d)) : (-a.distX / b > g.threshold || a.velocityX * a.distX / b * g.sensitivity > 1) && (d.type = "swipeleft", f(a.currentTarget, d))
    }

    function c(b) {
        var c = a.data(b, "event_swipe");
        return c || (c = {
            count: 0
        }, a.data(b, "event_swipe", c)), c
    }
    var d = a.event.add,
        e = a.event.remove,
        f = function (b, c, d) {
            a.event.trigger(c, d, b)
        },
        g = {
            threshold: .4,
            sensitivity: 6
        };
    a.event.special.swipe = a.event.special.swipeleft = a.event.special.swiperight = a.event.special.swipeup = a.event.special.swipedown = {
        setup: function (a) {
            var a = c(this);
            if (!(a.count++ > 0)) return d(this, "moveend", b), !0
        },
        teardown: function () {
            var a = c(this);
            if (!(--a.count > 0)) return e(this, "moveend", b), !0
        },
        settings: g
    }
}),
function (a) {
    a.fn.avController = function (b) {
        function c(a, b) {
            var e;
            d.trigger({
                type: a
            }), e = b ? 500 : 1e3 * f.stepTime, g = setTimeout(function () {
                c(a, !1)
            }, e)
        }
        var d = this,
            e = {
                playIsActive: !0,
                stepTime: .2
            },
            f = a.extend({}, e, b);
        this.append('<div id="relativediv"><img id="prev" class="imag" src="' + b.path + 'img/controller/next.png" alt="prev"><img id="play" class="imag" src="' + b.path + 'img/controller/play.png" alt="play"><span id="pause-span" class="imag"><img id="pause" src="' + b.path + 'img/controller/pause.png" alt="pause"></span><img id="next" class="imag" src="' + b.path + 'img/controller/next.png" alt="next"></div>'), $imag = this.find(".imag"), $play = this.find("#play"), $pause = this.find("#pause"), $prev = this.find("#prev"), $next = this.find("#next"), f.playIsActive ? ($play.css("visibility", "visible"), $pause.css("visibility", "hidden")) : ($pause.css("visibility", "visible"), $play.css("visibility", "hidden")), $imag.on("mousedown", function () {
            a(this).css("top", 1).css("left", 1)
        }), $imag.on("mouseup mouseleave", function () {
            a(this).css("top", "auto").css("left", "auto")
        }), $play.on("click", function () {
            playIsActive = !1, a(this).css("visibility", "hidden"), d.find("#pause").css("visibility", "visible"), d.trigger({
                type: "play"
            })
        }), $pause.on("click", function () {
            playIsActive = !0, a(this).css("visibility", "hidden"), d.find("#play").css("visibility", "visible"), d.trigger({
                type: "pause"
            })
        });
        var g;
        return $prev.on("mousedown", function () {
            c("prev", !0)
        }), $next.on("mousedown", function () {
            c("next", !0)
        }), $prev.on("mouseup mouseleave", function () {
            clearTimeout(g)
        }), $next.on("mouseup mouseleave", function () {
            clearTimeout(g)
        }), this
    }
}(jQuery),
function (a) {
    a.fn.avScrollBar = function (b) {
        function c(a, b, d) {
            var e;
            k.changeStep(a), e = b ? 500 : 1e3 * j.stepTime, void 0 === d || null === d ? q = setTimeout(function () {
                c(a, !1)
            }, e) : (h > d || d > h + f) && (q = setTimeout(function () {
                c(a, !1, d)
            }, e))
        }
        var d, e, f, g, h, i = {
                nrOfSteps: 10,
                startStep: 6,
                stepTime: .2,
                transitionFunction: "ease-out",
                transitionDuration: .1
            },
            j = a.extend({}, i, b),
            k = this,
            l = j.startStep - 1;
        this.append('<div class="firstArrow"><div class="firstTriangle"></div></div><div class="dragArea"><div class="tracker"></div></div><div class="lastArrow"><div class="lastTriangle"></div></div>');
        var m = this.find(".dragArea"),
            n = this.find(".firstArrow"),
            o = this.find(".lastArrow"),
            p = this.find(".tracker");
        this.trackWidth = p.width() ? "non-auto" : "auto", this.setNrOfSteps = function (a) {
            j.nrOfSteps = a
        }, this.setCurrentStep = function (a) {
            l = a
        }, this.refreshPositions = function () {
            "none" === n.css("display") ? (e = this.width(), m.css("width", this.width()).css("height", this.height())) : (e = this.width() - 2 * this.height(), m.css("width", e).css("height", this.height())), f = "auto" === this.trackWidth ? Math.round(e / j.nrOfSteps * 2) : p.width(), p.css("width", f), d = e - f - 4, g = d / (j.nrOfSteps - 1), h = l * g, p.addClass("notransition"), p.css("left", h), p[0].offsetHeight, p.removeClass("notransition")
        }, this.refreshPositions(), p.draggable({
            axis: "x",
            containment: "parent",
            drag: function () {
                h = parseInt(p.css("left"));
                var a, b = Math.floor(g);
                a = Math.floor(h / b), h % b > b / 2 && a++, a !== l && (l = a, k.trigger({
                    type: "change",
                    current: l + 1
                }))
            },
            start: function () {
                p.addClass("notransition")
            },
            stop: function () {
                var a = Math.floor(g);
                h = parseInt(p.css("left")), l = Math.floor(h / a), h % a > a / 2 && l++, p[0].offsetHeight, p.removeClass("notransition"), h = l * g, p.css("left", h)
            }
        }), this.changeStep = function (a, b) {
            var c;
            c = "number" == typeof a ? a - 1 : "prev" === a ? l - 1 : l + 1, c >= 0 && c < j.nrOfSteps && (l = c, h = l * g, p.css("left", h), (void 0 === b || null === b) && this.trigger({
                type: "change",
                current: l + 1
            }))
        };
        var q, r = !1;
        return n.on("mousedown", function () {
            c("prev", !0)
        }), o.on("mousedown", function () {
            c("next", !0)
        }), n.on("mouseup mouseleave", function () {
            clearTimeout(q)
        }), o.on("mouseup mouseleave", function () {
            clearTimeout(q)
        }), p.on("mousedown", function () {
            r = !0
        }), p.on("mouseup mouseleave", function () {
            r = !1
        }), m.on("mousedown", function (a) {
            if (!r) {
                var b = a.clientX - m.offset().left;
                h > b ? c("prev", !0, b) : b > h + f && c("next", !0, b)
            }
        }), m.on("mouseup mouseleave", function () {
            clearTimeout(q)
        }), this
    }
}(jQuery);
var aW = function (a) {
    a.append('<a href="http://www.cssjquery.com" target="_blank" title="CSS jQuery" style="width:95px; height:27px; position:absolute;left:0;top:0;"><img alt="" src=""></a>')
};
! function (a, b) {
    a.fn.coverflow = function (c) {
        function d() {
            v = H.width(), w = C.width(), x = B.width()
        }

        function e() {
            N && (M > v ? (E.width(v), E.refreshPositions()) : E.width() < M && (E.width(M), E.refreshPositions()))
        }

        function f(b) {
            var c = i;
            if ("number" == typeof b ? b > 0 && g >= b && (i = b) : i = parseInt(a(this).parent().attr("id")), c !== i) {
                H.trigger({
                    type: "change",
                    current: i
                }), H.recenterCF();
                var d = B.eq(i - 1);
                d.find(".imgdiv").removeClass().addClass("imgdiv straight"), d.removeClass("leftLI rightLI").addClass("straightLI"), i > c ? C.slice(c - 1, i - 1).removeClass().addClass("imgdiv leftItems").parent().removeClass("rightLI straightLI").addClass("leftLI") : C.slice(i, c).removeClass().addClass("imgdiv rightItems").parent().removeClass("leftLI straightLI").addClass("rightLI"), j = g * k, clearTimeout(y), y = setTimeout(function () {
                    C.each(function (b) {
                        j += i > b ? k : -k, a(this).parent().css("z-index", j)
                    })
                }, A.css("transition-duration").slice(0, -1) / 4 * 1e3);
                var e = d.find(".text"),
                    f = B.eq(c - 1).find(".text"),
                    h = 1e3 * parseFloat(e.css("transition-duration"));
                h = parseInt(.6 * h), f.addClass("notransition").css("visibility", "hidden").css("opacity", 0), f.length && f[0].offsetHeight, f.removeClass("notransition"), e.css("visibility", "visible"), clearTimeout(u), u = setTimeout(function () {
                    e.css("opacity", 1)
                }, h);
                var l = d.find("a").first(),
                    m = B.eq(c - 1).find("a").first();
                l.unbind("click"), m.on("click", function (a) {
                    a.preventDefault()
                }), K && ("gallery" !== l.attr("data-gallery") || l.hasClass("boxed") || l.boxer(), "gallery" === m.attr("data-gallery") && m.boxer("destroy"))
            }
        }
        var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F = {
                path: "coverflow/"
            },
            G = a.extend({}, F, c),
            H = this,
            I = 140,
            J = a('<div class="Lightbox"></div>').appendTo(H),
            K = "block" === H.find(".Lightbox").css("display");
        J.remove(), "function" == typeof aW && aW(H), H.buildCoverflow = function () {
            z = H.find(".covers"), A = H.find("ul"), B = H.find("li"), C = H.find(".imgdiv"), D = C.find("a"), g = B.length, i = h = Math.round(g / 2), k = 100, j = g * k, B.each(function (b) {
                var c = a(this),
                    d = b + 1;
                c.attr("id", d), j += h >= d ? k : -k, c.css("z-index", j)
            }), D.on("click", function (a) {
                a.preventDefault()
            }), D.eq(h - 1).unbind("click"), B.eq(h - 1).find(".text").css("visibility", "visible").css("opacity", 1), C.on("click", f)
        }, H.buildCoverflow(), A.addClass("notransition"), B.addClass("notransition"), C.addClass("notransition");
        var L = a('<div class="refl"></div>').appendTo(H);
        "block" === H.find(".refl").css("display") && C.each(function () {
            var b = a(this);
            b.find("img").clone().appendTo(b).wrap('<div class="refl"></div>')
        }), L.remove(), H.refreshRotations = function () {
            i = h = Math.round(g / 2);
            var a = B.eq(i - 1);
            a.find(".imgdiv").removeClass().addClass("imgdiv straight"), a.removeClass("leftLI rightLI").addClass("straightLI"), C.slice(0, i - 1).removeClass().addClass("imgdiv leftItems").parent().removeClass("rightLI straightLI").addClass("leftLI"), C.slice(i, g).removeClass().addClass("imgdiv rightItems").parent().removeClass("leftLI straightLI").addClass("rightLI"), B.find(".text").css("visibility", "hidden").css("opacity", 0), B.eq(h - 1).find(".text").css("visibility", "visible").css("opacity", 1), S && (E.setNrOfSteps(g), E.setCurrentStep(h - 1), E.refreshPositions())
        }, H.refreshScrollbarPositions = function () {
            E.refreshPositions()
        }, H.setTrackWidth = function (a) {
            E.trackWidth = a
        }, d(), H.on("getcssvalues", d);
        var M, N = !1;
        H.recenterCF = function () {
            A.css("transform", "translate3d(" + (v / 2 - w / 2 - (i - 1) * x) + "px, 0, 0)")
        }, H.recenterCF(), a(b).on("resize", function () {
            d(), H.recenterCF(), e()
        }), H.on("scrollbarloaded", function () {
            N = !0, M = E.width(), e()
        }), H.on("bind-mousewheel", function () {
            H.on("mousewheel", function (a) {
                a.preventDefault(), f(i - a.deltaY)
            }), H.css("overflow", "hidden")
        }), H.on("unbind-mousewheel", function () {
            H.unbind("mousewheel"), H.css("overflow", "visible")
        }), "hidden" === H.css("overflow") && setTimeout(function () {
            H.trigger("bind-mousewheel")
        }, 100);
        var O = function (c) {
            var d = a(b).scrollTop();
            c.focus(), a(b).scrollTop(d)
        };
        H.on("bind-arrowkeys", function () {
            H.attr("tabindex", 1), H.on("keydown", function (a) {
                if (37 === a.keyCode) {
                    var b = i - 1;
                    a.preventDefault(), f(b)
                }
                if (39 === a.keyCode) {
                    var b = i + 1;
                    a.preventDefault(), f(b)
                }
            }), O(H), H.css("outline", "solid 0px")
        }), H.on("unbind-arrowkeys", function () {
            H.unbind("keydown"), H.css("outline", "none")
        }), "solid" === H.css("outline-style") && H.trigger("bind-arrowkeys"), z.on("movestart", function () {
            m = 0, o = I / 3, p = 0, q = 0, s = 0, t = .001
        }), z.on("move", function (a) {
            n = a.distX - m, r = Math.abs(n), 0 === p && (p = n > 0 ? 1 : -1), r > o && (m = a.distX, o = I, .8 > t && (f(i - p), t = Math.abs(a.velocityX)), p = 0, q = 0, s = 0), p > 0 ? n > q ? q = n : q - 20 > n && (p = q = s = 0, m = a.distX, f(i + 1)) : 0 > p && (s > n ? s = n : n > s + 20 && (p = q = s = 0, m = a.distX, f(i - 1)))
        });
        var P = a.Deferred(),
            Q = a.Deferred(),
            R = a.Deferred();
        H.refreshLightbox = function () {
            if (K) {
                D.each(function () {
                    a(this).boxer("destroy")
                });
                var b = D.eq(i - 1);
                "gallery" === b.attr("data-gallery") && b.boxer()
            }
        }, K ? a.get(G.path + "lightbox/jquery.fs.boxer.min.css", function (b) {
            a("<style>" + b + "</style>").appendTo("head"), a.getScript(G.path + "lightbox/jquery.fs.boxer.min.js", function () {
                H.refreshLightbox(), R.resolve()
            })
        }) : R.resolve();
        var S = "block" === H.find(".ScrollBar").css("display");
        this.loadScrollbar = function () {
            a.getScript(G.path + "js/jquery-ui-1.10.4.draggable.min.js", function () {
                E = a(".ScrollBar").avScrollBar({
                    nrOfSteps: g,
                    startStep: h
                }), E.on("change", function (a) {
                    f(a.current)
                }), H.trigger("scrollbarloaded"), Q.resolve()
            })
        }, S ? this.loadScrollbar() : Q.resolve(), H.on("change", function (a) {
            S && E.changeStep(a.current, "dontTrigger"), H.trigger({
                type: "restartPreloader"
            })
        });
        var T, U = "block" === H.find(".Controller").css("display"),
            V = a('<div class="Preloader"></div>').appendTo(H),
            W = "block" === H.find(".Preloader").css("display");
        return this.loadController = function () {
            function b() {
                e ? i === g ? (e = !1, f(i - 1)) : f(i + 1) : 1 === i ? (e = !0, f(i + 1)) : f(i - 1), d()
            }

            function c() {
                $preloader.addClass("notransition"), $preloader.removeClass("modified"), $preloader[0].offsetHeight
            }

            function d() {
                c(), $preloader.css("visibility", "visible"), $preloader.removeClass("notransition"), $preloader.addClass("modified")
            }
            T = a(".Controller").avController({
                path: G.path
            }), $preloader = a(".Preloader"), $preloader.css("display", "block"), H.pauseDelay = 1e3 * parseInt($preloader.css("transition-duration"));
            var e = !0,
                h = !1;
            T.on("prev", function () {
                f(i - 1)
            }), T.on("next", function () {
                f(i + 1)
            }), T.on("play", function () {
                h = !0, d(), l = setTimeout(b, H.pauseDelay)
            }), W && (T.trigger("play"), H.find("#play").trigger("click")), H.on("restartPreloader", function () {
                h && (d(), clearTimeout(l), l = setTimeout(b, H.pauseDelay))
            }), T.on("pause", function () {
                clearTimeout(l), c(), h = !1
            }), P.resolve()
        }, U ? this.loadController() : (V.remove(), P.resolve()), a.when(P, Q, R).done(function () {
            A.removeClass("notransition"), B.removeClass("notransition"), C.removeClass("notransition"), H.trigger("coverflowLoaded")
        }), this
    }
}(jQuery, window, document);




// (function ($, undefined) {
//     'use strict';
//     var defaults = {
//         item: 3,
//         autoWidth: false,
//         slideMove: 1,
//         slideMargin: 10,
//         addClass: '',
//         mode: 'slide',
//         useCSS: true,
//         cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
//         easing: 'linear', //'for jquery animation',//
//         speed: 400, //ms'
//         auto: false,
//         pauseOnHover: false,
//         loop: false,
//         slideEndAnimation: true,
//         pause: 2000,
//         keyPress: false,
//         controls: true,
//         prevHtml: '',
//         nextHtml: '',
//         rtl: false,
//         adaptiveHeight: false,
//         vertical: false,
//         verticalHeight: 500,
//         vThumbWidth: 100,
//         thumbItem: 10,
//         pager: true,
//         gallery: false,
//         galleryMargin: 5,
//         thumbMargin: 5,
//         currentPagerPosition: 'middle',
//         enableTouch: true,
//         enableDrag: true,
//         freeMove: true,
//         swipeThreshold: 40,
//         responsive: [],
//         /* jshint ignore:start */
//         onBeforeStart: function ($el) {},
//         onSliderLoad: function ($el) {},
//         onBeforeSlide: function ($el, scene) {},
//         onAfterSlide: function ($el, scene) {},
//         onBeforeNextSlide: function ($el, scene) {},
//         onBeforePrevSlide: function ($el, scene) {}
//         /* jshint ignore:end */
//     };
//     $.fn.lightSlider = function (options) {
//         if (this.length === 0) {
//             return this;
//         }

//         if (this.length > 1) {
//             this.each(function () {
//                 $(this).lightSlider(options);
//             });
//             return this;
//         }

//         var plugin = {},
//             settings = $.extend(true, {}, defaults, options),
//             settingsTemp = {},
//             $el = this;
//         plugin.$el = this;

//         if (settings.mode === 'fade') {
//             settings.vertical = false;
//         }
//         var $children = $el.children(),
//             windowW = $(window).width(),
//             breakpoint = null,
//             resposiveObj = null,
//             length = 0,
//             w = 0,
//             on = false,
//             elSize = 0,
//             $slide = '',
//             scene = 0,
//             property = (settings.vertical === true) ? 'height' : 'width',
//             gutter = (settings.vertical === true) ? 'margin-bottom' : 'margin-right',
//             slideValue = 0,
//             pagerWidth = 0,
//             slideWidth = 0,
//             thumbWidth = 0,
//             interval = null,
//             isTouch = ('ontouchstart' in document.documentElement);
//         var refresh = {};

//         refresh.chbreakpoint = function () {
//             windowW = $(window).width();
//             if (settings.responsive.length) {
//                 var item;
//                 if (settings.autoWidth === false) {
//                     item = settings.item;
//                 }
//                 if (windowW < settings.responsive[0].breakpoint) {
//                     for (var i = 0; i < settings.responsive.length; i++) {
//                         if (windowW < settings.responsive[i].breakpoint) {
//                             breakpoint = settings.responsive[i].breakpoint;
//                             resposiveObj = settings.responsive[i];
//                         }
//                     }
//                 }
//                 if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
//                     for (var j in resposiveObj.settings) {
//                         if (resposiveObj.settings.hasOwnProperty(j)) {
//                             if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
//                                 settingsTemp[j] = settings[j];
//                             }
//                             settings[j] = resposiveObj.settings[j];
//                         }
//                     }
//                 }
//                 if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
//                     for (var k in settingsTemp) {
//                         if (settingsTemp.hasOwnProperty(k)) {
//                             settings[k] = settingsTemp[k];
//                         }
//                     }
//                 }
//                 if (settings.autoWidth === false) {
//                     if (slideValue > 0 && slideWidth > 0) {
//                         if (item !== settings.item) {
//                             scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
//                         }
//                     }
//                 }
//             }
//         };

//         refresh.calSW = function () {
//             if (settings.autoWidth === false) {
//                 slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
//             }
//         };

//         refresh.calWidth = function (cln) {
//             var ln = cln === true ? $slide.find('.lslide').length : $children.length;
//             if (settings.autoWidth === false) {
//                 w = ln * (slideWidth + settings.slideMargin);
//             } else {
//                 w = 0;
//                 for (var i = 0; i < ln; i++) {
//                     w += (parseInt($children.eq(i).width()) + settings.slideMargin);
//                 }
//             }
//             return w;
//         };
//         plugin = {
//             doCss: function () {
//                 var support = function () {
//                     var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
//                     var root = document.documentElement;
//                     for (var i = 0; i < transition.length; i++) {
//                         if (transition[i] in root.style) {
//                             return true;
//                         }
//                     }
//                 };
//                 if (settings.useCSS && support()) {
//                     return true;
//                 }
//                 return false;
//             },
//             keyPress: function () {
//                 if (settings.keyPress) {
//                     $(document).on('keyup.lightslider', function (e) {
//                         if (!$(':focus').is('input, textarea')) {
//                             if (e.preventDefault) {
//                                 e.preventDefault();
//                             } else {
//                                 e.returnValue = false;
//                             }
//                             if (e.keyCode === 37) {
//                                 $el.goToPrevSlide();
//                             } else if (e.keyCode === 39) {
//                                 $el.goToNextSlide();
//                             }
//                         }
//                     });
//                 }
//             },
//             controls: function () {
//                 if (settings.controls) {
//                     $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
//                     if (!settings.autoWidth) {
//                         if (length <= settings.item) {
//                             $slide.find('.lSAction').hide();
//                         }
//                     } else {
//                         if (refresh.calWidth(false) < elSize) {
//                             $slide.find('.lSAction').hide();
//                         }
//                     }
//                     $slide.find('.lSAction a').on('click', function (e) {
//                         if (e.preventDefault) {
//                             e.preventDefault();
//                         } else {
//                             e.returnValue = false;
//                         }
//                         if ($(this).attr('class') === 'lSPrev') {
//                             $el.goToPrevSlide();
//                         } else {
//                             $el.goToNextSlide();
//                         }
//                         return false;
//                     });
//                 }
//             },
//             initialStyle: function () {
//                 var $this = this;
//                 if (settings.mode === 'fade') {
//                     settings.autoWidth = false;
//                     settings.slideEndAnimation = false;
//                 }
//                 if (settings.auto) {
//                     settings.slideEndAnimation = false;
//                 }
//                 if (settings.autoWidth) {
//                     settings.slideMove = 1;
//                     settings.item = 1;
//                 }
//                 if (settings.loop) {
//                     settings.slideMove = 1;
//                     settings.freeMove = false;
//                 }
//                 settings.onBeforeStart.call(this, $el);
//                 refresh.chbreakpoint();
//                 $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
//                 $slide = $el.parent('.lSSlideWrapper');
//                 if (settings.rtl === true) {
//                     $slide.parent().addClass('lSrtl');
//                 }
//                 if (settings.vertical) {
//                     $slide.parent().addClass('vertical');
//                     elSize = settings.verticalHeight;
//                     $slide.css('height', elSize + 'px');
//                 } else {
//                     elSize = $el.outerWidth();
//                 }
//                 $children.addClass('lslide');
//                 if (settings.loop === true && settings.mode === 'slide') {
//                     refresh.calSW();
//                     refresh.clone = function () {
//                         if (refresh.calWidth(true) > elSize) {
//                             /**/
//                             var tWr = 0,
//                                 tI = 0;
//                             for (var k = 0; k < $children.length; k++) {
//                                 tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
//                                 tI++;
//                                 if (tWr >= (elSize + settings.slideMargin)) {
//                                     break;
//                                 }
//                             }
//                             var tItem = settings.autoWidth === true ? tI : settings.item;

//                             /**/
//                             if (tItem < $el.find('.clone.left').length) {
//                                 for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
//                                     $children.eq(i).remove();
//                                 }
//                             }
//                             if (tItem < $el.find('.clone.right').length) {
//                                 for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
//                                     scene--;
//                                     $children.eq(j).remove();
//                                 }
//                             }
//                             /**/
//                             for (var n = $el.find('.clone.right').length; n < tItem; n++) {
//                                 $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
//                                 scene++;
//                             }
//                             for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
//                                 $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
//                             }
//                             $children = $el.children();
//                         } else {
//                             if ($children.hasClass('clone')) {
//                                 $el.find('.clone').remove();
//                                 $this.move($el, 0);
//                             }
//                         }
//                     };
//                     refresh.clone();
//                 }
//                 refresh.sSW = function () {
//                     length = $children.length;
//                     if (settings.rtl === true && settings.vertical === false) {
//                         gutter = 'margin-left';
//                     }
//                     if (settings.autoWidth === false) {
//                         $children.css(property, slideWidth + 'px');
//                     }
//                     $children.css(gutter, settings.slideMargin + 'px');
//                     w = refresh.calWidth(false);
//                     $el.css(property, w + 'px');
//                     if (settings.loop === true && settings.mode === 'slide') {
//                         if (on === false) {
//                             scene = $el.find('.clone.left').length;
//                         }
//                     }
//                 };
//                 refresh.calL = function () {
//                     $children = $el.children();
//                     length = $children.length;
//                 };
//                 if (this.doCss()) {
//                     $slide.addClass('usingCss');
//                 }
//                 refresh.calL();
//                 if (settings.mode === 'slide') {
//                     refresh.calSW();
//                     refresh.sSW();
//                     if (settings.loop === true) {
//                         slideValue = $this.slideValue();
//                         this.move($el, slideValue);
//                     }
//                     if (settings.vertical === false) {
//                         this.setHeight($el, false);
//                     }

//                 } else {
//                     this.setHeight($el, true);
//                     $el.addClass('lSFade');
//                     if (!this.doCss()) {
//                         $children.fadeOut(0);
//                         $children.eq(scene).fadeIn(0);
//                     }
//                 }
//                 if (settings.loop === true && settings.mode === 'slide') {
//                     $children.eq(scene).addClass('active');
//                 } else {
//                     $children.first().addClass('active');
//                 }
//             },
//             pager: function () {
//                 var $this = this;
//                 refresh.createPager = function () {
//                     thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
//                     var $children = $slide.find('.lslide');
//                     var length = $slide.find('.lslide').length;
//                     var i = 0,
//                         pagers = '',
//                         v = 0;
//                     for (i = 0; i < length; i++) {
//                         if (settings.mode === 'slide') {
//                             // calculate scene * slide value
//                             if (!settings.autoWidth) {
//                                 v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
//                             } else {
//                                 v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
//                             }
//                         }
//                         var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
//                         if (settings.gallery === true) {
//                             pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
//                         } else {
//                             pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
//                         }
//                         if (settings.mode === 'slide') {
//                             if ((v) >= w - elSize - settings.slideMargin) {
//                                 i = i + 1;
//                                 var minPgr = 2;
//                                 if (settings.autoWidth) {
//                                     pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
//                                     minPgr = 1;
//                                 }
//                                 if (i < minPgr) {
//                                     pagers = null;
//                                     $slide.parent().addClass('noPager');
//                                 } else {
//                                     $slide.parent().removeClass('noPager');
//                                 }
//                                 break;
//                             }
//                         }
//                     }
//                     var $cSouter = $slide.parent();
//                     $cSouter.find('.lSPager').html(pagers); 
//                     if (settings.gallery === true) {
//                         if (settings.vertical === true) {
//                             // set Gallery thumbnail width
//                             $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
//                         }
//                         pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
//                         $cSouter.find('.lSPager').css({
//                             property: pagerWidth + 'px',
//                             'transition-duration': settings.speed + 'ms'
//                         });
//                         if (settings.vertical === true) {
//                             $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
//                         }
//                         $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
//                     }
//                     var $pager = $cSouter.find('.lSPager').find('li');
//                     $pager.first().addClass('active');
//                     $pager.on('click', function () {
//                         if (settings.loop === true && settings.mode === 'slide') {
//                             scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
//                         } else {
//                             scene = $pager.index(this);
//                         }
//                         $el.mode(false);
//                         if (settings.gallery === true) {
//                             $this.slideThumb();
//                         }
//                         return false;
//                     });
//                 };
//                 if (settings.pager) {
//                     var cl = 'lSpg';
//                     if (settings.gallery) {
//                         cl = 'lSGallery';
//                     }
//                     $slide.after('<ul class="lSPager ' + cl + '"></ul>');
//                     var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
//                     $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
//                     refresh.createPager();
//                 }

//                 setTimeout(function () {
//                     refresh.init();
//                 }, 0);
//             },
//             setHeight: function (ob, fade) {
//                 var obj = null,
//                     $this = this;
//                 if (settings.loop) {
//                     obj = ob.children('.lslide ').first();
//                 } else {
//                     obj = ob.children().first();
//                 }
//                 var setCss = function () {
//                     var tH = obj.outerHeight(),
//                         tP = 0,
//                         tHT = tH;
//                     if (fade) {
//                         tH = 0;
//                         tP = ((tHT) * 100) / elSize;
//                     }
//                     ob.css({
//                         'height': tH + 'px',
//                         'padding-bottom': tP + '%'
//                     });
//                 };
//                 setCss();
//                 if (obj.find('img').length) {
//                     if ( obj.find('img')[0].complete) {
//                         setCss();
//                         if (!interval) {
//                             $this.auto();
//                         }   
//                     }else{
//                         obj.find('img').on('load', function () {
//                             setTimeout(function () {
//                                 setCss();
//                                 if (!interval) {
//                                     $this.auto();
//                                 }
//                             }, 100);
//                         });
//                     }
//                 }else{
//                     if (!interval) {
//                         $this.auto();
//                     }
//                 }
//             },
//             active: function (ob, t) {
//                 if (this.doCss() && settings.mode === 'fade') {
//                     $slide.addClass('on');
//                 }
//                 var sc = 0;
//                 if (scene * settings.slideMove < length) {
//                     ob.removeClass('active');
//                     if (!this.doCss() && settings.mode === 'fade' && t === false) {
//                         ob.fadeOut(settings.speed);
//                     }
//                     if (t === true) {
//                         sc = scene;
//                     } else {
//                         sc = scene * settings.slideMove;
//                     }
//                     //t === true ? sc = scene : sc = scene * settings.slideMove;
//                     var l, nl;
//                     if (t === true) {
//                         l = ob.length;
//                         nl = l - 1;
//                         if (sc + 1 >= l) {
//                             sc = nl;
//                         }
//                     }
//                     if (settings.loop === true && settings.mode === 'slide') {
//                         //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
//                         if (t === true) {
//                             sc = scene - $el.find('.clone.left').length;
//                         } else {
//                             sc = scene * settings.slideMove;
//                         }
//                         if (t === true) {
//                             l = ob.length;
//                             nl = l - 1;
//                             if (sc + 1 === l) {
//                                 sc = nl;
//                             } else if (sc + 1 > l) {
//                                 sc = 0;
//                             }
//                         }
//                     }

//                     if (!this.doCss() && settings.mode === 'fade' && t === false) {
//                         ob.eq(sc).fadeIn(settings.speed);
//                     }
//                     ob.eq(sc).addClass('active');
//                 } else {
//                     ob.removeClass('active');
//                     ob.eq(ob.length - 1).addClass('active');
//                     if (!this.doCss() && settings.mode === 'fade' && t === false) {
//                         ob.fadeOut(settings.speed);
//                         ob.eq(sc).fadeIn(settings.speed);
//                     }
//                 }
//             },
//             move: function (ob, v) {
//                 if (settings.rtl === true) {
//                     v = -v;
//                 }
//                 if (this.doCss()) {
//                     if (settings.vertical === true) {
//                         ob.css({
//                             'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
//                             '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
//                         });
//                     } else {
//                         ob.css({
//                             'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
//                             '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
//                         });
//                     }
//                 } else {
//                     if (settings.vertical === true) {
//                         ob.css('position', 'relative').animate({
//                             top: -v + 'px'
//                         }, settings.speed, settings.easing);
//                     } else {
//                         ob.css('position', 'relative').animate({
//                             left: -v + 'px'
//                         }, settings.speed, settings.easing);
//                     }
//                 }
//                 var $thumb = $slide.parent().find('.lSPager').find('li');
//                 this.active($thumb, true);
//             },
//             fade: function () {
//                 this.active($children, false);
//                 var $thumb = $slide.parent().find('.lSPager').find('li');
//                 this.active($thumb, true);
//             },
//             slide: function () {
//                 var $this = this;
//                 refresh.calSlide = function () {
//                     if (w > elSize) {
//                         slideValue = $this.slideValue();
//                         $this.active($children, false);
//                         if ((slideValue) > w - elSize - settings.slideMargin) {
//                             slideValue = w - elSize - settings.slideMargin;
//                         } else if (slideValue < 0) {
//                             slideValue = 0;
//                         }
//                         $this.move($el, slideValue);
//                         if (settings.loop === true && settings.mode === 'slide') {
//                             if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
//                                 $this.resetSlide($el.find('.clone.left').length);
//                             }
//                             if (scene === 0) {
//                                 $this.resetSlide($slide.find('.lslide').length);
//                             }
//                         }
//                     }
//                 };
//                 refresh.calSlide();
//             },
//             resetSlide: function (s) {
//                 var $this = this;
//                 $slide.find('.lSAction a').addClass('disabled');
//                 setTimeout(function () {
//                     scene = s;
//                     $slide.css('transition-duration', '0ms');
//                     slideValue = $this.slideValue();
//                     $this.active($children, false);
//                     plugin.move($el, slideValue);
//                     setTimeout(function () {
//                         $slide.css('transition-duration', settings.speed + 'ms');
//                         $slide.find('.lSAction a').removeClass('disabled');
//                     }, 50);
//                 }, settings.speed + 100);
//             },
//             slideValue: function () {
//                 var _sV = 0;
//                 if (settings.autoWidth === false) {
//                     _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
//                 } else {
//                     _sV = 0;
//                     for (var i = 0; i < scene; i++) {
//                         _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
//                     }
//                 }
//                 return _sV;
//             },
//             slideThumb: function () {
//                 var position;
//                 switch (settings.currentPagerPosition) {
//                 case 'left':
//                     position = 0;
//                     break;
//                 case 'middle':
//                     position = (elSize / 2) - (thumbWidth / 2);
//                     break;
//                 case 'right':
//                     position = elSize - thumbWidth;
//                 }
//                 var sc = scene - $el.find('.clone.left').length;
//                 var $pager = $slide.parent().find('.lSPager');
//                 if (settings.mode === 'slide' && settings.loop === true) {
//                     if (sc >= $pager.children().length) {
//                         sc = 0;
//                     } else if (sc < 0) {
//                         sc = $pager.children().length;
//                     }
//                 }
//                 var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
//                 if ((thumbSlide + elSize) > pagerWidth) {
//                     thumbSlide = pagerWidth - elSize - settings.thumbMargin;
//                 }
//                 if (thumbSlide < 0) {
//                     thumbSlide = 0;
//                 }
//                 this.move($pager, thumbSlide);
//             },
//             auto: function () {
//                 if (settings.auto) {
//                     clearInterval(interval);
//                     interval = setInterval(function () {
//                         $el.goToNextSlide();
//                     }, settings.pause);
//                 }
//             },
//             pauseOnHover: function(){
//                 var $this = this;
//                 if (settings.auto && settings.pauseOnHover) {
//                     $slide.on('mouseenter', function(){
//                         $(this).addClass('ls-hover');
//                         $el.pause();
//                         settings.auto = true;
//                     });
//                     $slide.on('mouseleave',function(){
//                         $(this).removeClass('ls-hover');
//                         if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
//                             $this.auto();
//                         }
//                     });
//                 }
//             },
//             touchMove: function (endCoords, startCoords) {
//                 $slide.css('transition-duration', '0ms');
//                 if (settings.mode === 'slide') {
//                     var distance = endCoords - startCoords;
//                     var swipeVal = slideValue - distance;
//                     if ((swipeVal) >= w - elSize - settings.slideMargin) {
//                         if (settings.freeMove === false) {
//                             swipeVal = w - elSize - settings.slideMargin;
//                         } else {
//                             var swipeValT = w - elSize - settings.slideMargin;
//                             swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);

//                         }
//                     } else if (swipeVal < 0) {
//                         if (settings.freeMove === false) {
//                             swipeVal = 0;
//                         } else {
//                             swipeVal = swipeVal / 5;
//                         }
//                     }
//                     this.move($el, swipeVal);
//                 }
//             },

//             touchEnd: function (distance) {
//                 $slide.css('transition-duration', settings.speed + 'ms');
//                 if (settings.mode === 'slide') {
//                     var mxVal = false;
//                     var _next = true;
//                     slideValue = slideValue - distance;
//                     if ((slideValue) > w - elSize - settings.slideMargin) {
//                         slideValue = w - elSize - settings.slideMargin;
//                         if (settings.autoWidth === false) {
//                             mxVal = true;
//                         }
//                     } else if (slideValue < 0) {
//                         slideValue = 0;
//                     }
//                     var gC = function (next) {
//                         var ad = 0;
//                         if (!mxVal) {
//                             if (next) {
//                                 ad = 1;
//                             }
//                         }
//                         if (!settings.autoWidth) {
//                             var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
//                             scene = parseInt(num) + ad;
//                             if (slideValue >= (w - elSize - settings.slideMargin)) {
//                                 if (num % 1 !== 0) {
//                                     scene++;
//                                 }
//                             }
//                         } else {
//                             var tW = 0;
//                             for (var i = 0; i < $children.length; i++) {
//                                 tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
//                                 scene = i + ad;
//                                 if (tW >= slideValue) {
//                                     break;
//                                 }
//                             }
//                         }
//                     };
//                     if (distance >= settings.swipeThreshold) {
//                         gC(false);
//                         _next = false;
//                     } else if (distance <= -settings.swipeThreshold) {
//                         gC(true);
//                         _next = false;
//                     }
//                     $el.mode(_next);
//                     this.slideThumb();
//                 } else {
//                     if (distance >= settings.swipeThreshold) {
//                         $el.goToPrevSlide();
//                     } else if (distance <= -settings.swipeThreshold) {
//                         $el.goToNextSlide();
//                     }
//                 }
//             },



//             enableDrag: function () {
//                 var $this = this;
//                 if (!isTouch) {
//                     var startCoords = 0,
//                         endCoords = 0,
//                         isDraging = false;
//                     $slide.find('.lightSlider').addClass('lsGrab');
//                     $slide.on('mousedown', function (e) {
//                         if (w < elSize) {
//                             if (w !== 0) {
//                                 return false;
//                             }
//                         }
//                         if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
//                             startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
//                             isDraging = true;
//                             if (e.preventDefault) {
//                                 e.preventDefault();
//                             } else {
//                                 e.returnValue = false;
//                             }
//                             // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
//                             $slide.scrollLeft += 1;
//                             $slide.scrollLeft -= 1;
//                             // *
//                             $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
//                             clearInterval(interval);
//                         }
//                     });
//                     $(window).on('mousemove', function (e) {
//                         if (isDraging) {
//                             endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
//                             $this.touchMove(endCoords, startCoords);
//                         }
//                     });
//                     $(window).on('mouseup', function (e) {
//                         if (isDraging) {
//                             $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
//                             isDraging = false;
//                             endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
//                             var distance = endCoords - startCoords;
//                             if (Math.abs(distance) >= settings.swipeThreshold) {
//                                 $(window).on('click.ls', function (e) {
//                                     if (e.preventDefault) {
//                                         e.preventDefault();
//                                     } else {
//                                         e.returnValue = false;
//                                     }
//                                     e.stopImmediatePropagation();
//                                     e.stopPropagation();
//                                     $(window).off('click.ls');
//                                 });
//                             }

//                             $this.touchEnd(distance);

//                         }
//                     });
//                 }
//             },




//             enableTouch: function () {
//                 var $this = this;
//                 if (isTouch) {
//                     var startCoords = {},
//                         endCoords = {};
//                     $slide.on('touchstart', function (e) {
//                         endCoords = e.originalEvent.targetTouches[0];
//                         startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
//                         startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
//                         clearInterval(interval);
//                     });
//                     $slide.on('touchmove', function (e) {
//                         if (w < elSize) {
//                             if (w !== 0) {
//                                 return false;
//                             }
//                         }
//                         var orig = e.originalEvent;
//                         endCoords = orig.targetTouches[0];
//                         var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
//                         var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
//                         if (settings.vertical === true) {
//                             if ((yMovement * 3) > xMovement) {
//                                 e.preventDefault();
//                             }
//                             $this.touchMove(endCoords.pageY, startCoords.pageY);
//                         } else {
//                             if ((xMovement * 3) > yMovement) {
//                                 e.preventDefault();
//                             }
//                             $this.touchMove(endCoords.pageX, startCoords.pageX);
//                         }

//                     });
//                     $slide.on('touchend', function () {
//                         if (w < elSize) {
//                             if (w !== 0) {
//                                 return false;
//                             }
//                         }
//                         var distance;
//                         if (settings.vertical === true) {
//                             distance = endCoords.pageY - startCoords.pageY;
//                         } else {
//                             distance = endCoords.pageX - startCoords.pageX;
//                         }
//                         $this.touchEnd(distance);
//                     });
//                 }
//             },
//             build: function () {
//                 var $this = this;
//                 $this.initialStyle();
//                 if (this.doCss()) {

//                     if (settings.enableTouch === true) {
//                         $this.enableTouch();
//                     }
//                     if (settings.enableDrag === true) {
//                         $this.enableDrag();
//                     }
//                 }

//                 $(window).on('focus', function(){
//                     $this.auto();
//                 });

//                 $(window).on('blur', function(){
//                     clearInterval(interval);
//                 });

//                 $this.pager();
//                 $this.pauseOnHover();
//                 $this.controls();
//                 $this.keyPress();
//             }
//         };
//         plugin.build();
//         refresh.init = function () {
//             refresh.chbreakpoint();
//             if (settings.vertical === true) {
//                 if (settings.item > 1) {
//                     elSize = settings.verticalHeight;
//                 } else {
//                     elSize = $children.outerHeight();
//                 }
//                 $slide.css('height', elSize + 'px');
//             } else {
//                 elSize = $slide.outerWidth();
//             }
//             if (settings.loop === true && settings.mode === 'slide') {
//                 refresh.clone();
//             }
//             refresh.calL();
//             if (settings.mode === 'slide') {
//                 $el.removeClass('lSSlide');
//             }
//             if (settings.mode === 'slide') {
//                 refresh.calSW();
//                 refresh.sSW();
//             }
//             setTimeout(function () {
//                 if (settings.mode === 'slide') {
//                     $el.addClass('lSSlide');
//                 }
//             }, 1000);
//             if (settings.pager) {
//                 refresh.createPager();
//             }
//             if (settings.adaptiveHeight === true && settings.vertical === false) {
//                 $el.css('height', $children.eq(scene).outerHeight(true));
//             }
//             if (settings.adaptiveHeight === false) {
//                 if (settings.mode === 'slide') {
//                     if (settings.vertical === false) {
//                         plugin.setHeight($el, false);
//                     }else{
//                         plugin.auto();
//                     }
//                 } else {
//                     plugin.setHeight($el, true);
//                 }
//             }
//             if (settings.gallery === true) {
//                 plugin.slideThumb();
//             }
//             if (settings.mode === 'slide') {
//                 plugin.slide();
//             }
//             if (settings.autoWidth === false) {
//                 if ($children.length <= settings.item) {
//                     $slide.find('.lSAction').hide();
//                 } else {
//                     $slide.find('.lSAction').show();
//                 }
//             } else {
//                 if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
//                     $slide.find('.lSAction').hide();
//                 } else {
//                     $slide.find('.lSAction').show();
//                 }
//             }
//         };
//         $el.goToPrevSlide = function () {
//             if (scene > 0) {
//                 settings.onBeforePrevSlide.call(this, $el, scene);
//                 scene--;
//                 $el.mode(false);
//                 if (settings.gallery === true) {
//                     plugin.slideThumb();
//                 }
//             } else {
//                 if (settings.loop === true) {
//                     settings.onBeforePrevSlide.call(this, $el, scene);
//                     if (settings.mode === 'fade') {
//                         var l = (length - 1);
//                         scene = parseInt(l / settings.slideMove);
//                     }
//                     $el.mode(false);
//                     if (settings.gallery === true) {
//                         plugin.slideThumb();
//                     }
//                 } else if (settings.slideEndAnimation === true) {
//                     $el.addClass('leftEnd');
//                     setTimeout(function () {
//                         $el.removeClass('leftEnd');
//                     }, 400);
//                 }
//             }
//         };
//         $el.goToNextSlide = function () {
//             var nextI = true;
//             if (settings.mode === 'slide') {
//                 var _slideValue = plugin.slideValue();
//                 nextI = _slideValue < w - elSize - settings.slideMargin;
//             }
//             if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
//                 settings.onBeforeNextSlide.call(this, $el, scene);
//                 scene++;
//                 $el.mode(false);
//                 if (settings.gallery === true) {
//                     plugin.slideThumb();
//                 }
//             } else {
//                 if (settings.loop === true) {
//                     settings.onBeforeNextSlide.call(this, $el, scene);
//                     scene = 0;
//                     $el.mode(false);
//                     if (settings.gallery === true) {
//                         plugin.slideThumb();
//                     }
//                 } else if (settings.slideEndAnimation === true) {
//                     $el.addClass('rightEnd');
//                     setTimeout(function () {
//                         $el.removeClass('rightEnd');
//                     }, 400);
//                 }
//             }
//         };
//         $el.mode = function (_touch) {
//             if (settings.adaptiveHeight === true && settings.vertical === false) {
//                 $el.css('height', $children.eq(scene).outerHeight(true));
//             }
//             if (on === false) {
//                 if (settings.mode === 'slide') {
//                     if (plugin.doCss()) {
//                         $el.addClass('lSSlide');
//                         if (settings.speed !== '') {
//                             $slide.css('transition-duration', settings.speed + 'ms');
//                         }
//                         if (settings.cssEasing !== '') {
//                             $slide.css('transition-timing-function', settings.cssEasing);
//                         }
//                     }
//                 } else {
//                     if (plugin.doCss()) {
//                         if (settings.speed !== '') {
//                             $el.css('transition-duration', settings.speed + 'ms');
//                         }
//                         if (settings.cssEasing !== '') {
//                             $el.css('transition-timing-function', settings.cssEasing);
//                         }
//                     }
//                 }
//             }
//             if (!_touch) {
//                 settings.onBeforeSlide.call(this, $el, scene);
//             }
//             if (settings.mode === 'slide') {
//                 plugin.slide();
//             } else {
//                 plugin.fade();
//             }
//             if (!$slide.hasClass('ls-hover')) {
//                 plugin.auto();
//             }
//             setTimeout(function () {
//                 if (!_touch) {
//                     settings.onAfterSlide.call(this, $el, scene);
//                 }
//             }, settings.speed);
//             on = true;
//         };
//         $el.play = function () {
//             $el.goToNextSlide();
//             settings.auto = true;
//             plugin.auto();
//         };
//         $el.pause = function () {
//             settings.auto = false;
//             clearInterval(interval);
//         };
//         $el.refresh = function () {
//             refresh.init();
//         };
//         $el.getCurrentSlideCount = function () {
//             var sc = scene;
//             if (settings.loop) {
//                 var ln = $slide.find('.lslide').length,
//                     cl = $el.find('.clone.left').length;
//                 if (scene <= cl - 1) {
//                     sc = ln + (scene - cl);
//                 } else if (scene >= (ln + cl)) {
//                     sc = scene - ln - cl;
//                 } else {
//                     sc = scene - cl;
//                 }
//             }
//             return sc + 1;
//         }; 
//         $el.getTotalSlideCount = function () {
//             return $slide.find('.lslide').length;
//         };
//         $el.goToSlide = function (s) {
//             if (settings.loop) {
//                 scene = (s + $el.find('.clone.left').length - 1);
//             } else {
//                 scene = s;
//             }
//             $el.mode(false);
//             if (settings.gallery === true) {
//                 plugin.slideThumb();
//             }
//         };
//         $el.destroy = function () {
//             if ($el.lightSlider) {
//                 $el.goToPrevSlide = function(){};
//                 $el.goToNextSlide = function(){};
//                 $el.mode = function(){};
//                 $el.play = function(){};
//                 $el.pause = function(){};
//                 $el.refresh = function(){};
//                 $el.getCurrentSlideCount = function(){};
//                 $el.getTotalSlideCount = function(){};
//                 $el.goToSlide = function(){}; 
//                 $el.lightSlider = null;
//                 refresh = {
//                     init : function(){}
//                 };
//                 $el.parent().parent().find('.lSAction, .lSPager').remove();
//                 $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
//                 $el.children().removeAttr('style');
//                 $children.removeClass('lslide active');
//                 $el.find('.clone').remove();
//                 $children = null;
//                 interval = null;
//                 on = false;
//                 scene = 0;
//             }

//         };
//         setTimeout(function () {
//             settings.onSliderLoad.call(this, $el);
//         }, 10);
//         $(window).on('resize orientationchange', function (e) {
//             setTimeout(function () {
//                 if (e.preventDefault) {
//                     e.preventDefault();
//                 } else {
//                     e.returnValue = false;
//                 }
//                 refresh.init();
//             }, 200);
//         });
//         return this;
//     };
// }(jQuery));

// (function($, undefined) {
// 	"use strict";

// 	var sign		= function(number) {
// 						return number < 0 ? -1 : 1;
// 					},
// 		scl			= function(number, fromMin, fromMax, toMin, toMax) {
// 						return ((number - fromMin) * (toMax - toMin) / (fromMax - fromMin)) + toMin;
// 					},
// 		wheelEvents	= ('onwheel' in document) ? 'wheel' : 'mousewheel',	// FF
// 		getWheel	= function(event) {
// 						if ('deltaY' in event.originalEvent) {
// 							return 0 - event.originalEvent.deltaY;
// 						} else if ('wheelDelta' in event.originalEvent) { 
// 							return event.originalEvent.wheelDelta;	// IE
// 						}
// 					};

// 	$.widget("vanderlee.coverflow", {
// 		options: {
// 			animateComplete:	undefined,
// 			animateStart:		undefined,
// 			animateStep:		undefined,
// 			density:			1,
// 			duration:			'normal',
// 			easing:				undefined,
// 			enableKeyboard:		'both',			// true, false, 'both', 'focus', 'hover', 'none'
// 			enableClick:		true,
// 			enableWheel:		true,
// 			index:				0,
// 			innerAngle:			-75,
// 			innerCss:			undefined,
// 			innerOffset:		100 / 3,
// 			innerScale:			0.75,
// 			outerAngle:			-30,
// 			outerCss:			undefined,
// 			outerScale:			0.25,
// 			selectedCss:		undefined,
// 			visible:			'density',		// 'density', 'all', NNN (exact)
// 			width:				undefined,

// 			change:				undefined,		// Whenever index is changed
// 			confirm:			undefined,		// Whenever clicking on the current item
// 			select:				undefined		// Whenever index is set (also on init)
// 		},

// 		_window_handler_resize:		null,
// 		_window_handler_keydown:	null,

// 		_create: function() {
// 			var that = this,
// 				covers = that._getCovers(),
// 				images = covers.filter('img').add('img', covers).filter(function() {
// 					return !(this.complete || this.height > 0);
// 				}),
// 				maxHeight = Math.max.apply(null, covers.map(function(){
// 					return $(this).height();
// 				}).get()),
// 				height;

// 			// Internal event prefix
// 			that.widgetEventPrefix	= 'vanderlee-coverflow';

// 			that.hovering			= false;
// 			that.pagesize			= 1;
// 			that.currentIndex		= that.options.index;

// 			// Fix height
// 			that.element.height(maxHeight);
// 			images.on(function() {
// 				height = that._getCovers().height();
// 				if (height > maxHeight) {
// 					maxHeight = height;
// 					that.element.height(maxHeight);
// 				}
// 			});

// 			// Hide all covers and set position to absolute
// 			covers.hide();

// 			// Add tabindex and autofocus if needed.
// 			if (this.element.not(':tabbable')) {
// 				this.element.attr('tabIndex', -1);
// 				if (this.element.attr('autofocus')) {
// 					this.element.focus();
// 				}
// 			}

// 			// Enable click-jump
// 			that.element.on('mousedown tap click', '> *', function(event) {
// 				if (that.options.enableClick) {
// 					var index = that._getCovers().index(this);
// 					if (index === that.currentIndex) {
// 						that._callback('confirm', event);
// 					} else {
// 						that._setIndex(index, true);
// 					}
// 				}
// 			});

// 			// Mousewheel
// 			that.element.on(wheelEvents, function(event) {
// 				if (that.options.enableWheel) {
// 					var delta = getWheel(event) > 0 ? 1 : -1;

// 					event.preventDefault();
// 					that._setIndex(that.options.index - delta, true);
// 				}
// 			});

// 			// Swipe
// 			if ($.isFunction(that.element.swipe)) {
// 				that.element.swipe({
// 					allowPageScroll: "vertical",
// 					swipe: function(event, direction, distance, duration, fingerCount) {
// 						var count = Math.round((direction==="left"? 1 : (direction==="right"? -1 : 0 )) * 1.25 * that.pagesize * distance / that.element.width());
// 						that._setIndex(that.options.index + count, true);
// 					}
// 				});
// 			}

// 			// Keyboard
// //			that.element.hover(
// //				function() { that.hovering = true; }
// //			,	function() { that.hovering = false; }
// //			);

// 			// Refresh on resize
// 			that._window_handler_resize = function() {
// 				that.refresh();
// 			};
// 			$(window).on('resize', that._window_handler_resize);

// 			that._window_handler_keydown = function(event) {
// 				if (($.inArray(that.options.enableKeyboard, [true, 'both', 'focus']) >= 0 && that.element.is(':focus'))
// 				 || ($.inArray(that.options.enableKeyboard, [true, 'both', 'hover']) >= 0 >= 0 && that.element.is(':hover'))) {
// 					switch (event.which) {
// 						case 36:	// home
// 							event.preventDefault();
// 							that._setIndex(0, true);
// 							break;

// 						case 35:	// end
// 							event.preventDefault();
// 							that._setIndex(that._getCovers().length - 1, true);
// 							break;

// 						case 38:	// up
// 						case 37:	// left
// 							event.preventDefault();
// 							that._setIndex(that.options.index - 1, true);
// 							break;

// 						case 40:	// down
// 						case 39:	// right
// 							event.preventDefault();
// 							that._setIndex(that.options.index + 1, true);
// 							break;

// 						case 33:	// page up (towards home)
// 							event.preventDefault();
// 							that._setIndex(that.options.index - that.pagesize, true);
// 							break;

// 						case 34:	// page down (towards end)
// 							event.preventDefault();
// 							that._setIndex(that.options.index + that.pagesize, true);
// 							break;
// 					}
// 				}
// 			};
// 			$(window).on('keydown', that._window_handler_keydown);

// 			// Initialize
// 			that._setIndex(that.options.index, false, true);

// 			return that;
// 		},


// 		/**
// 		 * Destroy this object
// 		 * @returns {undefined}
// 		 */
// 		_destroy: function() {
// 			$(window).off('resize', this._window_handler_resize);
// 			$(window).off('keydown', this._window_handler_keydown);
// 			this.element.height('');
// 		},

// 		/**
// 		 * Returns the currently selected cover
// 		 * @returns {jQuery} jQuery object
// 		 */
// 		cover: function() {
// 			return $(this._getCovers()[this.options.index]);
// 		},

// 		/**
// 		 *
// 		 * @returns {unresolved}
// 		 */
// 		_getCovers: function() {
// 			return $('> *', this.element);
// 		},

// 		_setIndex: function(index, animate, initial) {
// 			var that = this,
// 				covers = that._getCovers();

// 			index = Math.max(0, Math.min(index, covers.length - 1));

// 			if (index !== that.options.index) {
// 				// Fix reflections
// 				covers.css('position', 'absolute');
// 				this._frame(that.options.index);						

// 				if (animate === true || that.options.duration === 0) {
// 					that.options.index	= Math.round(index);

// 					var duration	= typeof that.options.duration === "number"
// 									? that.options.duration
// 									: jQuery.fx.speeds[that.options.duration] || jQuery.fx.speeds._default;

// 					this.refresh(duration, that.options.index);
// 				} else {
// 					that.options.index = Math.round(index);
// 					that.refresh(0);
// 				}
// 			} else if (initial === true) {
// 				that.refresh();
// 				that._callback('select');
// 			}
// 		},

// 		_callback: function(callback, event) {
// 			this._trigger(callback, event, [this._getCovers().get(this.currentIndex), this.currentIndex]);
// 		},

// 		index: function(index) {
// 			if (index === undefined) {
// 				return this.options.index;
// 			}

// 			while (index < 0) {
// 				index += this._getCovers().length;
// 			}

// 			this._setIndex(index, true);
// 		},

// 		_frame: function(frame) {
// 			frame = frame.toFixed(4);		

// 			var that		= this,
// 				covers		= that._getCovers(),
// 				count		= covers.length,
// 				parentWidth	= that.element.innerWidth(),			
// 				coverWidth	= that.options.width || covers.eq(this.options.index).show().get(0).offsetWidth,
// 				visible		= that.options.visible === 'density'	? Math.round(parentWidth * that.options.density / coverWidth)
// 							: $.isNumeric(that.options.visible)		? that.options.visible
// 							: count,
// 				parentLeft	= that.element.position().left - ((1 - that.options.outerScale) * coverWidth * 0.5),
// 				space		= (parentWidth - (that.options.outerScale * coverWidth)) * 0.5;

// 			that.pagesize	= visible;

// 			covers.removeClass('current').each(function(index, cover) {
// 				var $cover		= $(cover),
// 					position	= index - frame,
// 					offset		= Math.min(Math.max(-1., position / visible), 1),
// 					isMiddle	= position == 0,
// 					zIndex		= count - Math.abs(Math.round(position)),
// 					isVisible	= Math.abs(position) <= visible,
// 					sin			= Math.sin(offset * Math.PI * 0.5),
// 					cos			= Math.cos(offset * Math.PI * 0.5),
// 					left		= sign(sin) * scl(Math.abs(sin), 0, 1, that.options.innerOffset * that.options.density, space),
// 					scale		= isVisible ? scl(Math.abs(cos), 1, 0, that.options.innerScale, that.options.outerScale) : 0,
// 					angle		= sign(sin) * scl(Math.abs(sin), 0, 1, that.options.innerAngle, that.options.outerAngle),
// 					css			= isMiddle ? that.options.selectedCss || {}
// 								: ( $.interpolate && that.options.outerCss && !$.isEmptyObject(that.options.outerCss) ? (
// 									isVisible ? $.interpolate(that.options.innerCss || {}, that.options.outerCss, Math.abs(sin))
// 											  : that.options.outerCss
// 									) : {}
// 								),
// 					transform;

// 				// bad behaviour for being in the middle
// 				if (Math.abs(position) < 1) {
// 					angle	= 0 - (0 - angle) * Math.abs(position);
// 					scale	= 1 - (1 - scale) * Math.abs(position);
// 					left	= 0 - (0 - left) * Math.abs(position);
// 				}

// 				//@todo Test CSS for middle behaviour (or does $.interpolate handle it?)

// 				transform = 'scale(' + scale + ',' + scale + ') perspective(' + (parentWidth * 0.5) + 'px) rotateY(' + angle + 'deg)';

// 				$cover[isMiddle ? 'addClass' : 'removeClass']('current');
// 				$cover[isVisible ? 'show' : 'hide']();				

// 				$cover.css($.extend(css, {
// 					'left':					parentLeft + space + left,
// 					'z-index':				zIndex,
// 					'-webkit-transform':	transform,
// 					'-ms-transform':		transform,
// 					'transform':			transform
// 				}));

// 				that._trigger('animateStep', null, [cover, offset, isVisible, isMiddle, sin, cos]);

// 				if (frame == that.options.index) {
// 					that._trigger('animateComplete', null, [cover, offset, isVisible, isMiddle, sin, cos]);
// 				}
// 			});
// 		},

// 		refresh: function(duration, index) {	
// 			var that = this,
// 				previous = that.currentIndex,
// 				covers = that._getCovers(),
// 				covercount = covers.length,
// 				triggered = false;

// 			that._callback('before');

// 			covers.css('position', 'absolute');
// 			that.element.stop().animate({
// 				'__coverflow_frame':	index || that.options.index
// 			}, {
// 				'easing':	that.options.easing,
// 				'duration': duration || 0,
// 				'step':		function(now, fx) {					
// 					that._frame(now);					

// 					that.currentIndex = Math.max(0, Math.min(Math.round(now), covercount - 1));
// 					if (previous !== that.currentIndex) {
// 						previous = that.currentIndex;
// 						that._callback('change');
// 						if (that.currentIndex === that.options.index) {
// 							triggered = true;
// 						}
// 					}
// 				},
// 				'complete':		function() {				
// 					that.currentIndex	= that.options.index;
// 					that._callback('after');

// 					if (!triggered) {
// 						that._callback('change');
// 					}
// 					that._callback('select');
// 				}
// 			});
// 		}
// 	});
// }(jQuery));