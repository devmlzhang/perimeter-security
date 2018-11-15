// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.7.0

(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.ol = factory();
  }
}(this, function () {
  var OPENLAYERS = {};
  var k,aa=aa||{},ba=this;function m(b){return void 0!==b}function u(b,c,d){b=b.split(".");d=d||ba;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&m(c)?d[e]=c:d[e]?d=d[e]:d=d[e]={}}function ca(){}function da(b){b.Ia=function(){return b.mg?b.mg:b.mg=new b}}
function ea(b){var c=typeof b;if("object"==c)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return c;var d=Object.prototype.toString.call(b);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof b.call)return"object";return c}function fa(b){return null===b}function ga(b){return"array"==ea(b)}function ha(b){var c=ea(b);return"array"==c||"object"==c&&"number"==typeof b.length}function ia(b){return"string"==typeof b}function ja(b){return"number"==typeof b}function ka(b){return"function"==ea(b)}function la(b){var c=typeof b;return"object"==c&&null!=b||"function"==c}function ma(b){return b[na]||(b[na]=++oa)}
var na="closure_uid_"+(1E9*Math.random()>>>0),oa=0;function pa(b,c,d){return b.call.apply(b.bind,arguments)}function qa(b,c,d){if(!b)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return b.apply(c,d)}}return function(){return b.apply(c,arguments)}}
function ra(b,c,d){ra=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?pa:qa;return ra.apply(null,arguments)}function ta(b,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=d.slice();c.push.apply(c,arguments);return b.apply(this,c)}}var ua=Date.now||function(){return+new Date};
    function w(b, c) {
        function d() {
        }
        d.prototype = c.prototype;
        b.S = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.Bo = function (b, d, g) {
            for (var h = Array(arguments.length - 2), l = 2; l < arguments.length; l++) h[l - 2] = arguments[l];
            return c.prototype[d].apply(b, h)
        }
    }
    var va, wa;
    function xa(b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, xa); else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        b && (this.message = String(b))
    }
    w(xa, Error);
    xa.prototype.name = "CustomError";
    var ya;
    function Aa(b, c) {
        var d = b.length - c.length;
        return 0 <= d && b.indexOf(c, d) == d
    }
    function Ba(b, c) {
        for (var d = b.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;) e += d.shift() + f.shift();
        return e + d.join("%s")
    }
    var Ca = String.prototype.trim ? function (b) {
        return b.trim()
    } : function (b) {
        return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    function Da(b){if(!Ea.test(b))return b;-1!=b.indexOf("&")&&(b=b.replace(Fa,"&amp;"));-1!=b.indexOf("<")&&(b=b.replace(Ga,"&lt;"));-1!=b.indexOf(">")&&(b=b.replace(Ia,"&gt;"));-1!=b.indexOf('"')&&(b=b.replace(Ja,"&quot;"));-1!=b.indexOf("'")&&(b=b.replace(Ka,"&#39;"));-1!=b.indexOf("\x00")&&(b=b.replace(La,"&#0;"));return b}var Fa=/&/g,Ga=/</g,Ia=/>/g,Ja=/"/g,Ka=/'/g,La=/\x00/g,Ea=/[\x00&<>"']/;
function Ma(b){b=m(void 0)?b.toFixed(void 0):String(b);var c=b.indexOf(".");-1==c&&(c=b.length);c=Math.max(0,2-c);return Array(c+1).join("0")+b}
    function Oa(b, c) {
        for (var d = 0, e = Ca(String(b)).split("."), f = Ca(String(c)).split("."), g = Math.max(e.length, f.length), h = 0; 0 == d && h < g; h++) {
            var l = e[h] || "", n = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
            do {
                var r = p.exec(l) || ["", "", ""], t = q.exec(n) || ["", "", ""];
                if (0 == r[0].length && 0 == t[0].length) break;
                d = Pa(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || Pa(0 == r[2].length, 0 == t[2].length) || Pa(r[2], t[2])
            } while (0 == d)
        }
        return d
    }
    function Pa(b, c) {
        return b < c ? -1 : b > c ? 1 : 0
    }
    var Qa = Array.prototype;
    function Ra(b, c) {
        return Qa.indexOf.call(b, c, void 0)
    }
    function Sa(b, c, d) {
        Qa.forEach.call(b, c, d)
    }
    function Ta(b, c) {
        return Qa.filter.call(b, c, void 0)
    }
    function Ua(b, c, d) {
        return Qa.map.call(b, c, d)
    }
    function Va(b, c) {
        return Qa.some.call(b, c, void 0)
    }
    function Wa(b, c) {
        var d = Xa(b, c, void 0);
        return 0 > d ? null : ia(b) ? b.charAt(d) : b[d]
    }
    function Xa(b, c, d) {
        for (var e = b.length, f = ia(b) ? b.split("") : b, g = 0; g < e; g++) if (g in f && c.call(d, f[g], g, b)) return g;
        return -1
    }
    function Ya(b, c) {
        return 0 <= Ra(b, c)
    }
    function $a(b,c){var d=Ra(b,c),e;(e=0<=d)&&Qa.splice.call(b,d,1);return e}function ab(b){return Qa.concat.apply(Qa,arguments)}function bb(b){var c=b.length;if(0<c){for(var d=Array(c),e=0;e<c;e++)d[e]=b[e];return d}return[]}function db(b,c){for(var d=1;d<arguments.length;d++){var e=arguments[d];if(ha(e)){var f=b.length||0,g=e.length||0;b.length=f+g;for(var h=0;h<g;h++)b[f+h]=e[h]}else b.push(e)}}function eb(b,c,d,e){Qa.splice.apply(b,fb(arguments,1))}
function fb(b,c,d){return 2>=arguments.length?Qa.slice.call(b,c):Qa.slice.call(b,c,d)}function gb(b,c){b.sort(c||hb)}function ib(b,c){if(!ha(b)||!ha(c)||b.length!=c.length)return!1;for(var d=b.length,e=jb,f=0;f<d;f++)if(!e(b[f],c[f]))return!1;return!0}function hb(b,c){return b>c?1:b<c?-1:0}function jb(b,c){return b===c}
    function kb(b) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (ga(e)) for (var f = 0; f < e.length; f += 8192) for (var g = kb.apply(null, fb(e, f, f + 8192)), h = 0; h < g.length; h++) c.push(g[h]); else c.push(e)
        }
        return c
    }
    var lb;
    a:{
        var mb = ba.navigator;
        if (mb) {
            var nb = mb.userAgent;
            if (nb) {
                lb = nb;
                break a
            }
        }
        lb = ""
    }
    function ob(b) {
        return -1 != lb.indexOf(b)
    }
    function pb(b, c, d) {
        for (var e in b) c.call(d, b[e], e, b)
    }
    function qb(b, c) {
        for (var d in b) if (c.call(void 0, b[d], d, b)) return !0;
        return !1
    }
    function rb(b) {
        var c = 0, d;
        for (d in b) c++;
        return c
    }
    function sb(b) {
        var c = [], d = 0, e;
        for (e in b) c[d++] = b[e];
        return c
    }
    function tb(b) {
        var c = [], d = 0, e;
        for (e in b) c[d++] = e;
        return c
    }
    function ub(b, c) {
        return c in b
    }
    function vb(b, c) {
        for (var d in b) if (b[d] == c) return !0;
        return !1
    }
    function wb(b, c) {
        for (var d in b) if (c.call(void 0, b[d], d, b)) return d
    }
    function xb(b){for(var c in b)return!1;return!0}function yb(b){for(var c in b)delete b[c]}function zb(b,c){c in b&&delete b[c]}function Ab(b,c,d){return c in b?b[c]:d}function Cb(b,c){var d=[];return c in b?b[c]:b[c]=d}function Db(b){var c={},d;for(d in b)c[d]=b[d];return c}var Eb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Fb(b, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e) b[d] = e[d];
            for (var g = 0; g < Eb.length; g++) d = Eb[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
    }
    function Gb(b) {
        var c = arguments.length;
        if (1 == c && ga(arguments[0])) return Gb.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
        return d
    }
    var Hb = ob("Opera") || ob("OPR"), Ib = ob("Trident") || ob("MSIE"),
        Jb = ob("Gecko") && -1 == lb.toLowerCase().indexOf("webkit") && !(ob("Trident") || ob("MSIE")),
        Kb = -1 != lb.toLowerCase().indexOf("webkit"), Lb = ob("Macintosh"), Mb = ob("Windows"),
        Nb = ob("Linux") || ob("CrOS");
    function Ob() {
        var b = ba.document;
        return b ? b.documentMode : void 0
    }
    var Pb = function () {
        var b = "", c;
        if (Hb && ba.opera) return b = ba.opera.version, ka(b) ? b() : b;
        Jb ? c = /rv\:([^\);]+)(\)|;)/ : Ib ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Kb && (c = /WebKit\/(\S+)/);
        c && (b = (b = c.exec(lb)) ? b[1] : "");
        return Ib && (c = Ob(), c > parseFloat(b)) ? String(c) : b
    }(), Qb = {};
    function Rb(b) {
        return Qb[b] || (Qb[b] = 0 <= Oa(Pb, b))
    }
    var Sb = ba.document, Tb = Sb && Ib ? Ob() || ("CSS1Compat" == Sb.compatMode ? parseInt(Pb, 10) : 5) : void 0;
    var Ub = Ib && !Rb("9.0") && "" !== Pb;
    function Vb(b, c, d) {
        return Math.min(Math.max(b, c), d)
    }
    function Wb(b, c) {
        var d = b % c;
        return 0 > d * c ? d + c : d
    }
    function Xb(b, c, d) {
        return b + d * (c - b)
    }
    function Yb(b) {
        return b * Math.PI / 180
    }
    function Zb(b) {
        return function (c) {
            if (m(c)) return [Vb(c[0], b[0], b[2]), Vb(c[1], b[1], b[3])]
        }
    }
    function $b(b) {
        return b
    }
    function ac(b, c, d) {
        var e = b.length;
        if (b[0] <= c) return 0;
        if (!(c <= b[e - 1])) if (0 < d) for (d = 1; d < e; ++d) {
            if (b[d] < c) return d - 1
        } else if (0 > d) for (d = 1; d < e; ++d) {
            if (b[d] <= c) return d
        } else for (d = 1; d < e; ++d) {
            if (b[d] == c) return d;
            if (b[d] < c) return b[d - 1] - c < c - b[d] ? d - 1 : d
        }
        return e - 1
    }
    function bc(b) {
        return function (c, d, e) {
            if (m(c)) return c = ac(b, c, e), c = Vb(c + d, 0, b.length - 1), b[c]
        }
    }
    function cc(b, c, d) {
        return function (e, f, g) {
            if (m(e)) return g = 0 < g ? 0 : 0 > g ? 1 : .5, e = Math.floor(Math.log(c / e) / Math.log(b) + g), f = Math.max(e + f, 0), m(d) && (f = Math.min(f, d)), c / Math.pow(b, f)
        }
    }
    function dc(b) {
        if (m(b)) return 0
    }
    function ec(b, c) {
        if (m(b)) return b + c
    }
    function fc(b) {
        var c = 2 * Math.PI / b;
        return function (b, e) {
            if (m(b)) return b = Math.floor((b + e) / c + .5) * c
        }
    }
    function gc() {
        var b = Yb(5);
        return function (c, d) {
            if (m(c)) return Math.abs(c + d) <= b ? 0 : c + d
        }
    }
    function hc(b, c, d) {
        this.center = b;
        this.resolution = c;
        this.rotation = d
    }
    var ic = !Ib || Ib && 9 <= Tb, kc = !Ib || Ib && 9 <= Tb, lc = Ib && !Rb("9");
    !Kb || Rb("528");
    Jb && Rb("1.9b") || Ib && Rb("8") || Hb && Rb("9.5") || Kb && Rb("528");
    Jb && !Rb("8") || Ib && Rb("9");
    function mc() {
        0 != nc && (oc[ma(this)] = this);
        this.Y = this.Y;
        this.W = this.W
    }
    var nc = 0, oc = {};
    mc.prototype.Y = !1;
    mc.prototype.Yc = function () {
        if (!this.Y && (this.Y = !0, this.N(), 0 != nc)) {
            var b = ma(this);
            delete oc[b]
        }
    };
    function pc(b, c) {
        var d = ta(qc, c);
        b.Y ? d.call(void 0) : (b.W || (b.W = []), b.W.push(m(void 0) ? ra(d, void 0) : d))
    }
    mc.prototype.N = function () {
        if (this.W) for (; this.W.length;) this.W.shift()()
    };
    function qc(b) {
        b && "function" == typeof b.Yc && b.Yc()
    }
    function rc(b, c) {
        this.type = b;
        this.c = this.target = c;
        this.f = !1;
        this.mh = !0
    }
    rc.prototype.gb = function () {
        this.f = !0
    };
    rc.prototype.preventDefault = function () {
        this.mh = !1
    };
    function sc(b) {
        b.gb()
    }
    function tc(b) {
        b.preventDefault()
    }
    var uc = Ib ? "focusout" : "DOMFocusOut";
    function vc(b) {
        vc[" "](b);
        return b
    }
    vc[" "] = ca;
    function wc(b, c) {
        rc.call(this, b ? b.type : "");
        this.relatedTarget = this.c = this.target = null;
        this.p = this.e = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.n = this.d = this.b = this.i = !1;
        this.state = null;
        this.g = !1;
        this.a = null;
        b && xc(this, b, c)
    }
    w(wc, rc);
    var yc = [1, 4, 2];
    function xc(b,c,d){b.a=c;var e=b.type=c.type;b.target=c.target||c.srcElement;b.c=d;if(d=c.relatedTarget){if(Jb){var f;a:{try{vc(d.nodeName);f=!0;break a}catch(g){}f=!1}f||(d=null)}}else"mouseover"==e?d=c.fromElement:"mouseout"==e&&(d=c.toElement);b.relatedTarget=d;Object.defineProperties?Object.defineProperties(b,{offsetX:{configurable:!0,enumerable:!0,get:b.ag,set:b.Rn},offsetY:{configurable:!0,enumerable:!0,get:b.bg,set:b.Sn}}):(b.offsetX=b.ag(),b.offsetY=b.bg());b.clientX=void 0!==c.clientX?c.clientX:
c.pageX;b.clientY=void 0!==c.clientY?c.clientY:c.pageY;b.screenX=c.screenX||0;b.screenY=c.screenY||0;b.button=c.button;b.e=c.keyCode||0;b.p=c.charCode||("keypress"==e?c.keyCode:0);b.i=c.ctrlKey;b.b=c.altKey;b.d=c.shiftKey;b.n=c.metaKey;b.g=Lb?c.metaKey:c.ctrlKey;b.state=c.state;c.defaultPrevented&&b.preventDefault()}function zc(b){return(ic?0==b.a.button:"click"==b.type?!0:!!(b.a.button&yc[0]))&&!(Kb&&Lb&&b.i)}k=wc.prototype;
k.gb=function(){wc.S.gb.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};k.preventDefault=function(){wc.S.preventDefault.call(this);var b=this.a;if(b.preventDefault)b.preventDefault();else if(b.returnValue=!1,lc)try{if(b.ctrlKey||112<=b.keyCode&&123>=b.keyCode)b.keyCode=-1}catch(c){}};k.Mi=function(){return this.a};k.ag=function(){return Kb||void 0!==this.a.offsetX?this.a.offsetX:this.a.layerX};
    k.Rn = function (b) {
        Object.defineProperties(this, {offsetX: {writable: !0, enumerable: !0, configurable: !0, value: b}})
    };
    k.bg = function () {
        return Kb || void 0 !== this.a.offsetY ? this.a.offsetY : this.a.layerY
    };
    k.Sn = function (b) {
        Object.defineProperties(this, {offsetY: {writable: !0, enumerable: !0, configurable: !0, value: b}})
    };
    var Ac = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Bc(b) {
        return !(!b || !b[Ac])
    }
    var Cc = 0;
    function Ec(b, c, d, e, f) {
        this.Yb = b;
        this.a = null;
        this.src = c;
        this.type = d;
        this.Qc = !!e;
        this.Qd = f;
        this.key = ++Cc;
        this.Ic = this.wd = !1
    }
    function Fc(b) {
        b.Ic = !0;
        b.Yb = null;
        b.a = null;
        b.src = null;
        b.Qd = null
    }
    function Gc(b) {
        this.src = b;
        this.a = {};
        this.b = 0
    }
    Gc.prototype.add = function (b, c, d, e, f) {
        var g = b.toString();
        b = this.a[g];
        b || (b = this.a[g] = [], this.b++);
        var h = Hc(b, c, e, f);
        -1 < h ? (c = b[h], d || (c.wd = !1)) : (c = new Ec(c, this.src, g, !!e, f), c.wd = d, b.push(c));
        return c
    };
    Gc.prototype.remove = function (b, c, d, e) {
        b = b.toString();
        if (!(b in this.a)) return !1;
        var f = this.a[b];
        c = Hc(f, c, d, e);
        return -1 < c ? (Fc(f[c]), Qa.splice.call(f, c, 1), 0 == f.length && (delete this.a[b], this.b--), !0) : !1
    };
    function Ic(b,c){var d=c.type;if(!(d in b.a))return!1;var e=$a(b.a[d],c);e&&(Fc(c),0==b.a[d].length&&(delete b.a[d],b.b--));return e}function Jc(b,c,d,e,f){b=b.a[c.toString()];c=-1;b&&(c=Hc(b,d,e,f));return-1<c?b[c]:null}function Kc(b,c,d){var e=m(c),f=e?c.toString():"",g=m(d);return qb(b.a,function(b){for(var c=0;c<b.length;++c)if(!(e&&b[c].type!=f||g&&b[c].Qc!=d))return!0;return!1})}
    function Hc(b, c, d, e) {
        for (var f = 0; f < b.length; ++f) {
            var g = b[f];
            if (!g.Ic && g.Yb == c && g.Qc == !!d && g.Qd == e) return f
        }
        return -1
    }
    var Lc = "closure_lm_" + (1E6 * Math.random() | 0), Mc = {}, Nc = 0;
    function x(b, c, d, e, f) {
        if (ga(c)) {
            for (var g = 0; g < c.length; g++) x(b, c[g], d, e, f);
            return null
        }
        d = Oc(d);
        return Bc(b) ? b.Ka(c, d, e, f) : Pc(b, c, d, !1, e, f)
    }
    function Pc(b, c, d, e, f, g) {
        if (!c) throw Error("Invalid event type");
        var h = !!f, l = Qc(b);
        l || (b[Lc] = l = new Gc(b));
        d = l.add(c, d, e, f, g);
        if (d.a) return d;
        e = Rc();
        d.a = e;
        e.src = b;
        e.Yb = d;
        b.addEventListener ? b.addEventListener(c.toString(), e, h) : b.attachEvent(Sc(c.toString()), e);
        Nc++;
        return d
    }
    function Rc(){var b=Tc,c=kc?function(d){return b.call(c.src,c.Yb,d)}:function(d){d=b.call(c.src,c.Yb,d);if(!d)return d};return c}function Uc(b,c,d,e,f){if(ga(c)){for(var g=0;g<c.length;g++)Uc(b,c[g],d,e,f);return null}d=Oc(d);return Bc(b)?b.bb.add(String(c),d,!0,e,f):Pc(b,c,d,!0,e,f)}function Vc(b,c,d,e,f){if(ga(c))for(var g=0;g<c.length;g++)Vc(b,c[g],d,e,f);else d=Oc(d),Bc(b)?b.vf(c,d,e,f):b&&(b=Qc(b))&&(c=Jc(b,c,d,!!e,f))&&Wc(c)}
function Wc(b){if(ja(b)||!b||b.Ic)return!1;var c=b.src;if(Bc(c))return Ic(c.bb,b);var d=b.type,e=b.a;c.removeEventListener?c.removeEventListener(d,e,b.Qc):c.detachEvent&&c.detachEvent(Sc(d),e);Nc--;(d=Qc(c))?(Ic(d,b),0==d.b&&(d.src=null,c[Lc]=null)):Fc(b);return!0}function Sc(b){return b in Mc?Mc[b]:Mc[b]="on"+b}function Xc(b,c,d,e){var f=!0;if(b=Qc(b))if(c=b.a[c.toString()])for(c=c.concat(),b=0;b<c.length;b++){var g=c[b];g&&g.Qc==d&&!g.Ic&&(g=Yc(g,e),f=f&&!1!==g)}return f}
function Yc(b,c){var d=b.Yb,e=b.Qd||b.src;b.wd&&Wc(b);return d.call(e,c)}
function Tc(b,c){if(b.Ic)return!0;if(!kc){var d;if(!(d=c))a:{d=["window","event"];for(var e=ba,f;f=d.shift();)if(null!=e[f])e=e[f];else{d=null;break a}d=e}f=d;d=new wc(f,this);e=!0;if(!(0>f.keyCode||void 0!=f.returnValue)){a:{var g=!1;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==f.returnValue)f.returnValue=!0}f=[];for(g=d.c;g;g=g.parentNode)f.push(g);for(var g=b.type,l=f.length-1;!d.f&&0<=l;l--){d.c=f[l];var n=Xc(f[l],g,!0,d),e=e&&n}for(l=0;!d.f&&l<f.length;l++)d.c=f[l],n=
    Xc(f[l], g, !1, d), e = e && n
}
    return e
}
    return Yc(b, new wc(c, this))
}
    function Qc(b) {
        b = b[Lc];
        return b instanceof Gc ? b : null
    }
    var Zc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Oc(b) {
        if (ka(b)) return b;
        b[Zc] || (b[Zc] = function (c) {
            return b.handleEvent(c)
        });
        return b[Zc]
    }
    function $c() {
        mc.call(this);
        this.bb = new Gc(this);
        this.td = this;
        this.Fa = null
    }
    w($c, mc);
    $c.prototype[Ac] = !0;
    k = $c.prototype;
    k.addEventListener = function (b, c, d, e) {
        x(this, b, c, d, e)
    };
    k.removeEventListener = function (b, c, d, e) {
        Vc(this, b, c, d, e)
    };
    k.dispatchEvent=function(b){var c,d=this.Fa;if(d)for(c=[];d;d=d.Fa)c.push(d);var d=this.td,e=b.type||b;if(ia(b))b=new rc(b,d);else if(b instanceof rc)b.target=b.target||d;else{var f=b;b=new rc(e,d);Fb(b,f)}var f=!0,g;if(c)for(var h=c.length-1;!b.f&&0<=h;h--)g=b.c=c[h],f=ad(g,e,!0,b)&&f;b.f||(g=b.c=d,f=ad(g,e,!0,b)&&f,b.f||(f=ad(g,e,!1,b)&&f));if(c)for(h=0;!b.f&&h<c.length;h++)g=b.c=c[h],f=ad(g,e,!1,b)&&f;return f};
k.N=function(){$c.S.N.call(this);if(this.bb){var b=this.bb,c=0,d;for(d in b.a){for(var e=b.a[d],f=0;f<e.length;f++)++c,Fc(e[f]);delete b.a[d];b.b--}}this.Fa=null};k.Ka=function(b,c,d,e){return this.bb.add(String(b),c,!1,d,e)};k.vf=function(b,c,d,e){return this.bb.remove(String(b),c,d,e)};
    function ad(b, c, d, e) {
        c = b.bb.a[String(c)];
        if (!c) return !0;
        c = c.concat();
        for (var f = !0, g = 0; g < c.length; ++g) {
            var h = c[g];
            if (h && !h.Ic && h.Qc == d) {
                var l = h.Yb, n = h.Qd || h.src;
                h.wd && Ic(b.bb, h);
                f = !1 !== l.call(n, e) && f
            }
        }
        return f && 0 != e.mh
    }
    function bd(b, c, d) {
        return Kc(b.bb, m(c) ? String(c) : void 0, d)
    }
    function cd() {
        $c.call(this);
        this.a = 0
    }
    w(cd, $c);
    function dd(b) {
        Wc(b)
    }
    k = cd.prototype;
    k.k = function () {
        ++this.a;
        this.dispatchEvent("change")
    };
    k.A = function () {
        return this.a
    };
    k.s = function (b, c, d) {
        return x(this, b, c, !1, d)
    };
    k.B = function (b, c, d) {
        return Uc(this, b, c, !1, d)
    };
    k.v = function (b, c, d) {
        Vc(this, b, c, !1, d)
    };
    k.C = dd;
    function ed(b, c, d) {
        rc.call(this, b);
        this.key = c;
        this.oldValue = d
    }
    w(ed, rc);
    function fd(b) {
        cd.call(this);
        ma(this);
        this.p = {};
        m(b) && this.u(b)
    }
    w(fd, cd);
    var gd = {};
    function hd(b) {
        return gd.hasOwnProperty(b) ? gd[b] : gd[b] = "change:" + b
    }
    k = fd.prototype;
    k.get = function (b) {
        var c;
        this.p.hasOwnProperty(b) && (c = this.p[b]);
        return c
    };
    k.G = function () {
        return tb(this.p)
    };
    k.H = function () {
        var b = {}, c;
        for (c in this.p) b[c] = this.p[c];
        return b
    };
    function id(b, c, d) {
        var e;
        e = hd(c);
        b.dispatchEvent(new ed(e, c, d));
        b.dispatchEvent(new ed("propertychange", c, d))
    }
    k.set = function (b, c) {
        var d = this.p[b];
        this.p[b] = c;
        id(this, b, d)
    };
    k.u = function (b) {
        for (var c in b) this.set(c, b[c])
    };
    k.J = function (b) {
        if (b in this.p) {
            var c = this.p[b];
            delete this.p[b];
            id(this, b, c)
        }
    };
    function jd(b, c, d) {
        m(d) || (d = [0, 0]);
        d[0] = b[0] + 2 * c;
        d[1] = b[1] + 2 * c;
        return d
    }
    function kd(b, c, d) {
        m(d) || (d = [0, 0]);
        d[0] = b[0] * c + .5 | 0;
        d[1] = b[1] * c + .5 | 0;
        return d
    }
    function ld(b, c) {
        if (ga(b)) return b;
        m(c) ? (c[0] = b, c[1] = b) : c = [b, b];
        return c
    }
    function md(b, c) {
        b[0] += c[0];
        b[1] += c[1];
        return b
    }
    function nd(b, c) {
        var d = b[0], e = b[1], f = c[0], g = c[1], h = f[0], f = f[1], l = g[0], g = g[1], n = l - h, p = g - f,
            d = 0 === n && 0 === p ? 0 : (n * (d - h) + p * (e - f)) / (n * n + p * p || 0);
        0 >= d || (1 <= d ? (h = l, f = g) : (h += d * n, f += d * p));
        return [h, f]
    }
    function od(b, c) {
        var d = Wb(b + 180, 360) - 180, e = Math.abs(Math.round(3600 * d));
        return Math.floor(e / 3600) + "\u00b0 " + Ma(Math.floor(e / 60 % 60)) + "\u2032 " + Ma(Math.floor(e % 60)) + "\u2033 " + c.charAt(0 > d ? 1 : 0)
    }
    function pd(b, c, d) {
        return m(b) ? c.replace("{x}", b[0].toFixed(d)).replace("{y}", b[1].toFixed(d)) : ""
    }
    function qd(b, c) {
        for (var d = !0, e = b.length - 1; 0 <= e; --e) if (b[e] != c[e]) {
            d = !1;
            break
        }
        return d
    }
    function rd(b, c) {
        var d = Math.cos(c), e = Math.sin(c), f = b[1] * d + b[0] * e;
        b[0] = b[0] * d - b[1] * e;
        b[1] = f;
        return b
    }
    function sd(b, c) {
        var d = b[0] - c[0], e = b[1] - c[1];
        return d * d + e * e
    }
    function td(b, c) {
        return sd(b, nd(b, c))
    }
    function ud(b, c) {
        return pd(b, "{x}, {y}", c)
    }
    function vd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++) this[c] = b[c] || 0
    }
    vd.prototype.a = 4;
    vd.prototype.set = function (b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++) this[c + d] = b[d]
    };
    vd.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (vd.BYTES_PER_ELEMENT = 4, vd.prototype.BYTES_PER_ELEMENT = vd.prototype.a, vd.prototype.set = vd.prototype.set, vd.prototype.toString = vd.prototype.toString, u("Float32Array", vd, void 0));
    function wd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++) this[c] = b[c] || 0
    }
    wd.prototype.a = 8;
    wd.prototype.set = function (b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++) this[c + d] = b[d]
    };
    wd.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            wd.BYTES_PER_ELEMENT = 8
        } catch (xd) {
        }
        wd.prototype.BYTES_PER_ELEMENT = wd.prototype.a;
        wd.prototype.set = wd.prototype.set;
        wd.prototype.toString = wd.prototype.toString;
        u("Float64Array", wd, void 0)
    }
    function yd(b, c, d, e, f) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f
    }
    function zd() {
        var b = Array(16);
        Ad(b, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return b
    }
    function Bd() {
        var b = Array(16);
        Ad(b, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return b
    }
    function Ad(b, c, d, e, f, g, h, l, n, p, q, r, t, v, A, z, E) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f;
        b[4] = g;
        b[5] = h;
        b[6] = l;
        b[7] = n;
        b[8] = p;
        b[9] = q;
        b[10] = r;
        b[11] = t;
        b[12] = v;
        b[13] = A;
        b[14] = z;
        b[15] = E
    }
    function Cd(b,c){b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15]}function Dd(b){b[0]=1;b[1]=0;b[2]=0;b[3]=0;b[4]=0;b[5]=1;b[6]=0;b[7]=0;b[8]=0;b[9]=0;b[10]=1;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1}
function Ed(b,c,d){var e=b[0],f=b[1],g=b[2],h=b[3],l=b[4],n=b[5],p=b[6],q=b[7],r=b[8],t=b[9],v=b[10],A=b[11],z=b[12],E=b[13],B=b[14];b=b[15];var y=c[0],L=c[1],K=c[2],H=c[3],S=c[4],sa=c[5],Na=c[6],R=c[7],za=c[8],cb=c[9],Ha=c[10],Bb=c[11],Za=c[12],Dc=c[13],jc=c[14];c=c[15];d[0]=e*y+l*L+r*K+z*H;d[1]=f*y+n*L+t*K+E*H;d[2]=g*y+p*L+v*K+B*H;d[3]=h*y+q*L+A*K+b*H;d[4]=e*S+l*sa+r*Na+z*R;d[5]=f*S+n*sa+t*Na+E*R;d[6]=g*S+p*sa+v*Na+B*R;d[7]=h*S+q*sa+A*Na+b*R;d[8]=e*za+l*cb+r*Ha+z*Bb;d[9]=f*za+n*cb+t*Ha+E*Bb;d[10]=
g*za+p*cb+v*Ha+B*Bb;d[11]=h*za+q*cb+A*Ha+b*Bb;d[12]=e*Za+l*Dc+r*jc+z*c;d[13]=f*Za+n*Dc+t*jc+E*c;d[14]=g*Za+p*Dc+v*jc+B*c;d[15]=h*Za+q*Dc+A*jc+b*c}
function Fd(b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],l=b[5],n=b[6],p=b[7],q=b[8],r=b[9],t=b[10],v=b[11],A=b[12],z=b[13],E=b[14],B=b[15],y=d*l-e*h,L=d*n-f*h,K=d*p-g*h,H=e*n-f*l,S=e*p-g*l,sa=f*p-g*n,Na=q*z-r*A,R=q*E-t*A,za=q*B-v*A,cb=r*E-t*z,Ha=r*B-v*z,Bb=t*B-v*E,Za=y*Bb-L*Ha+K*cb+H*za-S*R+sa*Na;0!=Za&&(Za=1/Za,c[0]=(l*Bb-n*Ha+p*cb)*Za,c[1]=(-e*Bb+f*Ha-g*cb)*Za,c[2]=(z*sa-E*S+B*H)*Za,c[3]=(-r*sa+t*S-v*H)*Za,c[4]=(-h*Bb+n*za-p*R)*Za,c[5]=(d*Bb-f*za+g*R)*Za,c[6]=(-A*sa+E*K-B*L)*Za,c[7]=(q*sa-t*K+v*
L)*Za,c[8]=(h*Ha-l*za+p*Na)*Za,c[9]=(-d*Ha+e*za-g*Na)*Za,c[10]=(A*S-z*K+B*y)*Za,c[11]=(-q*S+r*K-v*y)*Za,c[12]=(-h*cb+l*R-n*Na)*Za,c[13]=(d*cb-e*R+f*Na)*Za,c[14]=(-A*H+z*L-E*y)*Za,c[15]=(q*H-r*L+t*y)*Za)}function Gd(b,c,d){var e=b[1]*c+b[5]*d+0*b[9]+b[13],f=b[2]*c+b[6]*d+0*b[10]+b[14],g=b[3]*c+b[7]*d+0*b[11]+b[15];b[12]=b[0]*c+b[4]*d+0*b[8]+b[12];b[13]=e;b[14]=f;b[15]=g}
function Hd(b,c,d){Ad(b,b[0]*c,b[1]*c,b[2]*c,b[3]*c,b[4]*d,b[5]*d,b[6]*d,b[7]*d,1*b[8],1*b[9],1*b[10],1*b[11],b[12],b[13],b[14],b[15])}function Id(b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],l=b[5],n=b[6],p=b[7],q=Math.cos(c),r=Math.sin(c);b[0]=d*q+h*r;b[1]=e*q+l*r;b[2]=f*q+n*r;b[3]=g*q+p*r;b[4]=d*-r+h*q;b[5]=e*-r+l*q;b[6]=f*-r+n*q;b[7]=g*-r+p*q}new Float64Array(3);new Float64Array(3);new Float64Array(4);new Float64Array(4);new Float64Array(4);new Float64Array(16);function Jd(b){for(var c=Kd(),d=0,e=b.length;d<e;++d)Ld(c,b[d]);return c}function Md(b,c,d){var e=Math.min.apply(null,b),f=Math.min.apply(null,c);b=Math.max.apply(null,b);c=Math.max.apply(null,c);return Nd(e,f,b,c,d)}function Od(b,c,d){return m(d)?(d[0]=b[0]-c,d[1]=b[1]-c,d[2]=b[2]+c,d[3]=b[3]+c,d):[b[0]-c,b[1]-c,b[2]+c,b[3]+c]}function Pd(b,c){return m(c)?(c[0]=b[0],c[1]=b[1],c[2]=b[2],c[3]=b[3],c):b.slice()}
function Qd(b,c,d){c=c<b[0]?b[0]-c:b[2]<c?c-b[2]:0;b=d<b[1]?b[1]-d:b[3]<d?d-b[3]:0;return c*c+b*b}function Rd(b,c){return Sd(b,c[0],c[1])}function Td(b,c){return b[0]<=c[0]&&c[2]<=b[2]&&b[1]<=c[1]&&c[3]<=b[3]}function Sd(b,c,d){return b[0]<=c&&c<=b[2]&&b[1]<=d&&d<=b[3]}function Ud(b,c){var d=b[1],e=b[2],f=b[3],g=c[0],h=c[1],l=0;g<b[0]?l=l|16:g>e&&(l=l|4);h<d?l|=8:h>f&&(l|=2);0===l&&(l=1);return l}function Kd(){return[Infinity,Infinity,-Infinity,-Infinity]}
function Nd(b,c,d,e,f){return m(f)?(f[0]=b,f[1]=c,f[2]=d,f[3]=e,f):[b,c,d,e]}function Vd(b,c){var d=b[0],e=b[1];return Nd(d,e,d,e,c)}function Wd(b,c){return b[0]==c[0]&&b[2]==c[2]&&b[1]==c[1]&&b[3]==c[3]}function Xd(b,c){c[0]<b[0]&&(b[0]=c[0]);c[2]>b[2]&&(b[2]=c[2]);c[1]<b[1]&&(b[1]=c[1]);c[3]>b[3]&&(b[3]=c[3]);return b}function Ld(b,c){c[0]<b[0]&&(b[0]=c[0]);c[0]>b[2]&&(b[2]=c[0]);c[1]<b[1]&&(b[1]=c[1]);c[1]>b[3]&&(b[3]=c[1])}
function Yd(b,c,d,e,f){for(;d<e;d+=f){var g=b,h=c[d],l=c[d+1];g[0]=Math.min(g[0],h);g[1]=Math.min(g[1],l);g[2]=Math.max(g[2],h);g[3]=Math.max(g[3],l)}return b}function Zd(b,c,d){var e;return(e=c.call(d,$d(b)))||(e=c.call(d,ae(b)))||(e=c.call(d,be(b)))?e:(e=c.call(d,ce(b)))?e:!1}function $d(b){return[b[0],b[1]]}function ae(b){return[b[2],b[1]]}function de(b){return[(b[0]+b[2])/2,(b[1]+b[3])/2]}
function ee(b,c,d,e){var f=c*e[0]/2;e=c*e[1]/2;c=Math.cos(d);d=Math.sin(d);f=[-f,-f,f,f];e=[-e,e,-e,e];var g,h,l;for(g=0;4>g;++g)h=f[g],l=e[g],f[g]=b[0]+h*c-l*d,e[g]=b[1]+h*d+l*c;return Md(f,e,void 0)}function fe(b){return b[3]-b[1]}function ge(b,c,d){d=m(d)?d:Kd();he(b,c)&&(d[0]=b[0]>c[0]?b[0]:c[0],d[1]=b[1]>c[1]?b[1]:c[1],d[2]=b[2]<c[2]?b[2]:c[2],d[3]=b[3]<c[3]?b[3]:c[3]);return d}function ce(b){return[b[0],b[3]]}function be(b){return[b[2],b[3]]}function ie(b){return b[2]-b[0]}
    function he(b, c) {
        return b[0] <= c[2] && b[2] >= c[0] && b[1] <= c[3] && b[3] >= c[1]
    }
    function je(b) {
        return b[2] < b[0] || b[3] < b[1]
    }
    function ke(b, c) {
        var d = (b[2] - b[0]) / 2 * (c - 1), e = (b[3] - b[1]) / 2 * (c - 1);
        b[0] -= d;
        b[2] += d;
        b[1] -= e;
        b[3] += e
    }
    function le(b, c, d) {
        b = [b[0], b[1], b[0], b[3], b[2], b[1], b[2], b[3]];
        c(b, b, 2);
        return Md([b[0], b[2], b[4], b[6]], [b[1], b[3], b[5], b[7]], d)
    }
    function me(b) {
        return function () {
            return b
        }
    }
    var ne = me(!1), oe = me(!0), pe = me(null);
    function qe(b) {
        return b
    }
    function re(b) {
        var c;
        c = c || 0;
        return function () {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    }
    function se(b) {
        var c = arguments, d = c.length;
        return function () {
            for (var b, f = 0; f < d; f++) b = c[f].apply(this, arguments);
            return b
        }
    }
    function te(b) {
        var c = arguments, d = c.length;
        return function () {
            for (var b = 0; b < d; b++) if (!c[b].apply(this, arguments)) return !1;
            return !0
        }
    }
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
    */
function ue(b){this.radius=b}ue.prototype.b=function(b){for(var c=0,d=b.length,e=b[d-1][0],f=b[d-1][1],g=0;g<d;g++)var h=b[g][0],l=b[g][1],c=c+Yb(h-e)*(2+Math.sin(Yb(f))+Math.sin(Yb(l))),e=h,f=l;return c*this.radius*this.radius/2};ue.prototype.a=function(b,c){var d=Yb(b[1]),e=Yb(c[1]),f=(e-d)/2,g=Yb(c[0]-b[0])/2,d=Math.sin(f)*Math.sin(f)+Math.sin(g)*Math.sin(g)*Math.cos(d)*Math.cos(e);return 2*this.radius*Math.atan2(Math.sqrt(d),Math.sqrt(1-d))};
ue.prototype.offset=function(b,c,d){var e=Yb(b[1]);c/=this.radius;var f=Math.asin(Math.sin(e)*Math.cos(c)+Math.cos(e)*Math.sin(c)*Math.cos(d));return[180*(Yb(b[0])+Math.atan2(Math.sin(d)*Math.sin(c)*Math.cos(e),Math.cos(c)-Math.sin(e)*Math.sin(f)))/Math.PI,180*f/Math.PI]};var ve=new ue(6370997);var we={};we.degrees=2*Math.PI*ve.radius/360;we.ft=.3048;we.m=1;we["us-ft"]=1200/3937;
function xe(b){this.a=b.code;this.b=b.units;this.f=m(b.extent)?b.extent:null;this.g=m(b.worldExtent)?b.worldExtent:null;this.d=m(b.axisOrientation)?b.axisOrientation:"enu";this.e=(this.c=m(b.global)?b.global:!1)&&null!==this.f;this.p=m(b.getPointResolution)?b.getPointResolution:this.mj;this.i=null;if("function"==typeof proj4){var c=b.code,d=proj4.defs(c);if(m(d)){m(d.axis)&&!m(b.axisOrientation)&&(this.d=d.axis);m(b.units)||(b=d.units,!m(b)&&m(d.to_meter)&&(b=d.to_meter.toString(),we[b]=d.to_meter),
this.b=b);b=ye;var e,f;for(e in b)f=proj4.defs(e),m(f)&&(b=ze(e),f===d?Ae([b,this]):(f=proj4(e,c),Be(b,this,f.forward,f.inverse)))}}}k=xe.prototype;k.Ni=function(){return this.a};k.I=function(){return this.f};k.Bl=function(){return this.b};k.Fd=function(){return we[this.b]};k.xj=function(){return this.g};function Ce(b){return b.d}k.lk=function(){return this.c};k.Nn=function(b){this.e=(this.c=b)&&null!==this.f};k.Cl=function(b){this.f=b;this.e=this.c&&null!==b};k.Zn=function(b){this.g=b};
k.Mn=function(b){this.p=b};k.mj=function(b,c){if("degrees"==this.b)return b;var d=De(this,ze("EPSG:4326")),e=[c[0]-b/2,c[1],c[0]+b/2,c[1],c[0],c[1]-b/2,c[0],c[1]+b/2],e=d(e,e,2),d=(ve.a(e.slice(0,2),e.slice(2,4))+ve.a(e.slice(4,6),e.slice(6,8)))/2,e=this.Fd();m(e)&&(d/=e);return d};k.getPointResolution=function(b,c){return this.p(b,c)};var ye={},Ee={};function Ae(b){Fe(b);Sa(b,function(c){Sa(b,function(b){c!==b&&Ge(c,b,He)})})}
function Ie(){var b=Je,c=Ke,d=Le;Sa(Me,function(e){Sa(b,function(b){Ge(e,b,c);Ge(b,e,d)})})}function Oe(b){ye[b.a]=b;Ge(b,b,He)}function Fe(b){var c=[];Sa(b,function(b){c.push(Oe(b))})}function Pe(b){return null!=b?ia(b)?ze(b):b:ze("EPSG:3857")}function Ge(b,c,d){b=b.a;c=c.a;b in Ee||(Ee[b]={});Ee[b][c]=d}function Be(b,c,d,e){b=ze(b);c=ze(c);Ge(b,c,Qe(d));Ge(c,b,Qe(e))}
function Qe(b){return function(c,d,e){var f=c.length;e=m(e)?e:2;d=m(d)?d:Array(f);var g,h;for(h=0;h<f;h+=e)for(g=b([c[h],c[h+1]]),d[h]=g[0],d[h+1]=g[1],g=e-1;2<=g;--g)d[h+g]=c[h+g];return d}}function ze(b){var c;b instanceof xe?c=b:ia(b)?(c=ye[b],!m(c)&&"function"==typeof proj4&&m(proj4.defs(b))&&(c=new xe({code:b}),Oe(c))):c=null;return c}function Re(b,c){return b===c?!0:b.a===c.a?!0:b.b!=c.b?!1:De(b,c)===He}function Se(b,c){var d=ze(b),e=ze(c);return De(d,e)}
    function De(b, c) {
        var d = b.a, e = c.a, f;
        d in Ee && e in Ee[d] && (f = Ee[d][e]);
        m(f) || (f = Te);
        return f
    }
    function Te(b, c) {
        if (m(c) && b !== c) {
            for (var d = 0, e = b.length; d < e; ++d) c[d] = b[d];
            b = c
        }
        return b
    }
    function He(b, c) {
        var d;
        if (m(c)) {
            d = 0;
            for (var e = b.length; d < e; ++d) c[d] = b[d];
            d = c
        } else d = b.slice();
        return d
    }
    function Ue(b, c, d) {
        return Se(c, d)(b, void 0, b.length)
    }
    function Ve(b, c, d) {
        c = Se(c, d);
        return le(b, c)
    }
    function We() {
        fd.call(this);
        this.n = Kd();
        this.l = -1;
        this.e = {};
        this.i = this.f = 0
    }
    w(We, fd);
    k = We.prototype;
    k.Ta = function (b, c) {
        var d = m(c) ? c : [NaN, NaN];
        this.Ra(b[0], b[1], d, Infinity);
        return d
    };
    k.Ge = function (b) {
        return this.ac(b[0], b[1])
    };
    k.ac = ne;
    k.I = function (b) {
        this.l != this.a && (this.n = this.xd(this.n), this.l = this.a);
        var c = this.n;
        m(b) ? (b[0] = c[0], b[1] = c[1], b[2] = c[2], b[3] = c[3]) : b = c;
        return b
    };
    k.transform = function (b, c) {
        this.oa(Se(b, c));
        return this
    };
    function Xe(b, c, d, e, f, g) {
        var h = f[0], l = f[1], n = f[4], p = f[5], q = f[12];
        f = f[13];
        for (var r = m(g) ? g : [], t = 0; c < d; c += e) {
            var v = b[c], A = b[c + 1];
            r[t++] = h * v + n * A + q;
            r[t++] = l * v + p * A + f
        }
        m(g) && r.length != t && (r.length = t);
        return r
    }
    function Ye() {
        We.call(this);
        this.b = "XY";
        this.t = 2;
        this.j = null
    }
    w(Ye, We);
    function Ze(b) {
        if ("XY" == b) return 2;
        if ("XYZ" == b || "XYM" == b) return 3;
        if ("XYZM" == b) return 4
    }
    k = Ye.prototype;
    k.ac = ne;
    k.xd = function (b) {
        var c = this.j, d = this.j.length, e = this.t;
        b = Nd(Infinity, Infinity, -Infinity, -Infinity, b);
        return Yd(b, c, 0, d, e)
    };
    k.tb = function () {
        return this.j.slice(0, this.t)
    };
    k.ub = function () {
        return this.j.slice(this.j.length - this.t)
    };
    k.vb = function () {
        return this.b
    };
    k.Te=function(b){this.i!=this.a&&(yb(this.e),this.f=0,this.i=this.a);if(0>b||0!==this.f&&b<=this.f)return this;var c=b.toString();if(this.e.hasOwnProperty(c))return this.e[c];var d=this.wc(b);if(d.j.length<this.j.length)return this.e[c]=d;this.f=b;return this};k.wc=function(){return this};function $e(b,c,d){b.t=Ze(c);b.b=c;b.j=d}
    function af(b, c, d, e) {
        if (m(c)) d = Ze(c); else {
            for (c = 0; c < e; ++c) {
                if (0 === d.length) {
                    b.b = "XY";
                    b.t = 2;
                    return
                }
                d = d[0]
            }
            d = d.length;
            c = 2 == d ? "XY" : 3 == d ? "XYZ" : 4 == d ? "XYZM" : void 0
        }
        b.b = c;
        b.t = d
    }
    k.oa = function (b) {
        null !== this.j && (b(this.j, this.j, this.t), this.k())
    };
    k.Na = function (b, c) {
        var d = this.j;
        if (null !== d) {
            var e = d.length, f = this.t, g = m(d) ? d : [], h = 0, l, n;
            for (l = 0; l < e; l += f) for (g[h++] = d[l] + b, g[h++] = d[l + 1] + c, n = l + 2; n < l + f; ++n) g[h++] = d[n];
            m(d) && g.length != h && (g.length = h);
            this.k()
        }
    };
    function bf(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e) var l = b[c], n = b[c + 1], f = f + (h * l - g * n), g = l, h = n;
        return f / 2
    }
    function cf(b, c, d, e) {
        var f = 0, g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = d[g], f = f + bf(b, c, l, e);
            c = l
        }
        return f
    }
    function df(b, c, d, e, f, g) {
        var h = f - d, l = g - e;
        if (0 !== h || 0 !== l) {
            var n = ((b - d) * h + (c - e) * l) / (h * h + l * l);
            1 < n ? (d = f, e = g) : 0 < n && (d += h * n, e += l * n)
        }
        return ef(b, c, d, e)
    }
    function ef(b, c, d, e) {
        b = d - b;
        c = e - c;
        return b * b + c * c
    }
    function ff(b, c, d, e, f, g, h) {
        var l = b[c], n = b[c + 1], p = b[d] - l, q = b[d + 1] - n;
        if (0 !== p || 0 !== q) if (g = ((f - l) * p + (g - n) * q) / (p * p + q * q), 1 < g) c = d; else if (0 < g) {
            for (f = 0; f < e; ++f) h[f] = Xb(b[c + f], b[d + f], g);
            h.length = e;
            return
        }
        for (f = 0; f < e; ++f) h[f] = b[c + f];
        h.length = e
    }
    function gf(b, c, d, e, f) {
        var g = b[c], h = b[c + 1];
        for (c += e; c < d; c += e) {
            var l = b[c], n = b[c + 1], g = ef(g, h, l, n);
            g > f && (f = g);
            g = l;
            h = n
        }
        return f
    }
    function hf(b, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = d[g];
            f = gf(b, c, l, e, f);
            c = l
        }
        return f
    }
    function jf(b,c,d,e,f,g,h,l,n,p,q){if(c==d)return p;var r;if(0===f){r=ef(h,l,b[c],b[c+1]);if(r<p){for(q=0;q<e;++q)n[q]=b[c+q];n.length=e;return r}return p}for(var t=m(q)?q:[NaN,NaN],v=c+e;v<d;)if(ff(b,v-e,v,e,h,l,t),r=ef(h,l,t[0],t[1]),r<p){p=r;for(q=0;q<e;++q)n[q]=t[q];n.length=e;v+=e}else v+=e*Math.max((Math.sqrt(r)-Math.sqrt(p))/f|0,1);if(g&&(ff(b,d-e,c,e,h,l,t),r=ef(h,l,t[0],t[1]),r<p)){p=r;for(q=0;q<e;++q)n[q]=t[q];n.length=e}return p}
    function kf(b, c, d, e, f, g, h, l, n, p, q) {
        q = m(q) ? q : [NaN, NaN];
        var r, t;
        r = 0;
        for (t = d.length; r < t; ++r) {
            var v = d[r];
            p = jf(b, c, v, e, f, g, h, l, n, p, q);
            c = v
        }
        return p
    }
    function lf(b, c) {
        var d = 0, e, f;
        e = 0;
        for (f = c.length; e < f; ++e) b[d++] = c[e];
        return d
    }
    function mf(b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f], l;
            for (l = 0; l < e; ++l) b[c++] = h[l]
        }
        return c
    }
    function nf(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0, h, l;
        h = 0;
        for (l = d.length; h < l; ++h) c = mf(b, c, d[h], e), f[g++] = c;
        f.length = g;
        return f
    }
    function of(b, c, d, e, f) {
        f = m(f) ? f : [];
        for (var g = 0; c < d; c += e) f[g++] = b.slice(c, c + e);
        f.length = g;
        return f
    }
    function pf(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0, h, l;
        h = 0;
        for (l = d.length; h < l; ++h) {
            var n = d[h];
            f[g++] = of(b, c, n, e, f[g]);
            c = n
        }
        f.length = g;
        return f
    }
    function qf(b, c, d, e, f, g, h) {
        var l = (d - c) / e;
        if (3 > l) {
            for (; c < d; c += e) g[h++] = b[c], g[h++] = b[c + 1];
            return h
        }
        var n = Array(l);
        n[0] = 1;
        n[l - 1] = 1;
        d = [c, d - e];
        for (var p = 0, q; 0 < d.length;) {
            var r = d.pop(), t = d.pop(), v = 0, A = b[t], z = b[t + 1], E = b[r], B = b[r + 1];
            for (q = t + e; q < r; q += e) {
                var y = df(b[q], b[q + 1], A, z, E, B);
                y > v && (p = q, v = y)
            }
            v > f && (n[(p - c) / e] = 1, t + e < p && d.push(t, p), p + e < r && d.push(p, r))
        }
        for (q = 0; q < l; ++q) n[q] && (g[h++] = b[c + q * e], g[h++] = b[c + q * e + 1]);
        return h
    }
    function rf(b,c,d,e,f,g,h,l){var n,p;n=0;for(p=d.length;n<p;++n){var q=d[n];a:{var r=b,t=q,v=e,A=f,z=g;if(c!=t){var E=A*Math.round(r[c]/A),B=A*Math.round(r[c+1]/A);c+=v;z[h++]=E;z[h++]=B;var y=void 0,L=void 0;do if(y=A*Math.round(r[c]/A),L=A*Math.round(r[c+1]/A),c+=v,c==t){z[h++]=y;z[h++]=L;break a}while(y==E&&L==B);for(;c<t;){var K,H;K=A*Math.round(r[c]/A);H=A*Math.round(r[c+1]/A);c+=v;if(K!=y||H!=L){var S=y-E,sa=L-B,Na=K-E,R=H-B;S*R==sa*Na&&(0>S&&Na<S||S==Na||0<S&&Na>S)&&(0>sa&&R<sa||sa==R||0<sa&&
    R > sa) || (z[h++] = y, z[h++] = L, E = y, B = L);
    y = K;
    L = H
}
}
    z[h++] = y;
    z[h++] = L
}
}
    l.push(h);
    c = q
}
    return h
}
    function sf(b, c) {
        Ye.call(this);
        this.c = this.g = -1;
        this.ca(b, c)
    }
    w(sf, Ye);
    k = sf.prototype;
    k.clone = function () {
        var b = new sf(null);
        tf(b, this.b, this.j.slice());
        return b
    };
    k.Ra = function (b, c, d, e) {
        if (e < Qd(this.I(), b, c)) return e;
        this.c != this.a && (this.g = Math.sqrt(gf(this.j, 0, this.j.length, this.t, 0)), this.c = this.a);
        return jf(this.j, 0, this.j.length, this.t, this.g, !0, b, c, d, e)
    };
    k.hl = function () {
        return bf(this.j, 0, this.j.length, this.t)
    };
    k.M = function () {
        return of(this.j, 0, this.j.length, this.t)
    };
    k.wc = function (b) {
        var c = [];
        c.length = qf(this.j, 0, this.j.length, this.t, b, c, 0);
        b = new sf(null);
        tf(b, "XY", c);
        return b
    };
    k.L = function () {
        return "LinearRing"
    };
    k.ca = function (b, c) {
        null === b ? tf(this, "XY", null) : (af(this, c, b, 1), null === this.j && (this.j = []), this.j.length = mf(this.j, 0, b, this.t), this.k())
    };
    function tf(b, c, d) {
        $e(b, c, d);
        b.k()
    }
    function C(b, c) {
        Ye.call(this);
        this.ca(b, c)
    }
    w(C, Ye);
    k = C.prototype;
    k.clone = function () {
        var b = new C(null);
        uf(b, this.b, this.j.slice());
        return b
    };
    k.Ra = function (b, c, d, e) {
        var f = this.j;
        b = ef(b, c, f[0], f[1]);
        if (b < e) {
            e = this.t;
            for (c = 0; c < e; ++c) d[c] = f[c];
            d.length = e;
            return b
        }
        return e
    };
    k.M = function () {
        return null === this.j ? [] : this.j.slice()
    };
    k.xd = function (b) {
        return Vd(this.j, b)
    };
    k.L = function () {
        return "Point"
    };
    k.la = function (b) {
        return Sd(b, this.j[0], this.j[1])
    };
    k.ca = function (b, c) {
        null === b ? uf(this, "XY", null) : (af(this, c, b, 0), null === this.j && (this.j = []), this.j.length = lf(this.j, b), this.k())
    };
    function uf(b, c, d) {
        $e(b, c, d);
        b.k()
    }
    function vf(b, c, d, e, f) {
        return !Zd(f, function (f) {
            return !wf(b, c, d, e, f[0], f[1])
        })
    }
    function wf(b, c, d, e, f, g) {
        for (var h = !1, l = b[d - e], n = b[d - e + 1]; c < d; c += e) {
            var p = b[c], q = b[c + 1];
            n > g != q > g && f < (p - l) * (g - n) / (q - n) + l && (h = !h);
            l = p;
            n = q
        }
        return h
    }
    function xf(b, c, d, e, f, g) {
        if (0 === d.length || !wf(b, c, d[0], e, f, g)) return !1;
        var h;
        c = 1;
        for (h = d.length; c < h; ++c) if (wf(b, d[c - 1], d[c], e, f, g)) return !1;
        return !0
    }
    function yf(b, c, d, e, f, g, h) {
        var l, n, p, q, r, t = f[g + 1], v = [], A = d[0];
        p = b[A - e];
        r = b[A - e + 1];
        for (l = c; l < A; l += e) {
            q = b[l];
            n = b[l + 1];
            if (t <= r && n <= t || r <= t && t <= n) p = (t - r) / (n - r) * (q - p) + p, v.push(p);
            p = q;
            r = n
        }
        A = NaN;
        r = -Infinity;
        v.sort();
        p = v[0];
        l = 1;
        for (n = v.length; l < n; ++l) {
            q = v[l];
            var z = Math.abs(q - p);
            z > r && (p = (p + q) / 2, xf(b, c, d, e, p, t) && (A = p, r = z));
            p = q
        }
        isNaN(A) && (A = f[g]);
        return m(h) ? (h.push(A, t), h) : [A, t]
    }
    function zf(b, c, d, e, f, g) {
        for (var h = [b[c], b[c + 1]], l = [], n; c + e < d; c += e) {
            l[0] = b[c + e];
            l[1] = b[c + e + 1];
            if (n = f.call(g, h, l)) return n;
            h[0] = l[0];
            h[1] = l[1]
        }
        return !1
    }
    function Af(b, c, d, e, f) {
        var g = Yd(Kd(), b, c, d, e);
        return he(f, g) ? Td(f, g) || g[0] >= f[0] && g[2] <= f[2] || g[1] >= f[1] && g[3] <= f[3] ? !0 : zf(b, c, d, e, function (b, c) {
            var d = !1, e = Ud(f, b), g = Ud(f, c);
            if (1 === e || 1 === g) d = !0; else {
                var r = f[0], t = f[1], v = f[2], A = f[3], z = c[0], E = c[1], B = (E - b[1]) / (z - b[0]);
                g & 2 && !(e & 2) && (d = z - (E - A) / B, d = d >= r && d <= v);
                d || !(g & 4) || e & 4 || (d = E - (z - v) * B, d = d >= t && d <= A);
                d || !(g & 8) || e & 8 || (d = z - (E - t) / B, d = d >= r && d <= v);
                d || !(g & 16) || e & 16 || (d = E - (z - r) * B, d = d >= t && d <= A)
            }
            return d
        }) : !1
    }
    function Bf(b, c, d, e, f) {
        var g = d[0];
        if (!(Af(b, c, g, e, f) || wf(b, c, g, e, f[0], f[1]) || wf(b, c, g, e, f[0], f[3]) || wf(b, c, g, e, f[2], f[1]) || wf(b, c, g, e, f[2], f[3]))) return !1;
        if (1 === d.length) return !0;
        c = 1;
        for (g = d.length; c < g; ++c) if (vf(b, d[c - 1], d[c], e, f)) return !1;
        return !0
    }
    function Cf(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e) var l = b[c], n = b[c + 1], f = f + (l - g) * (n + h), g = l, h = n;
        return 0 < f
    }
    function Df(b, c, d, e) {
        var f = 0;
        e = m(e) ? e : !1;
        var g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var l = c[g], f = Cf(b, f, l, d);
            if (0 === g) {
                if (e && f || !e && !f) return !1
            } else if (e && !f || !e && f) return !1;
            f = l
        }
        return !0
    }
    function Ef(b, c, d, e, f) {
        f = m(f) ? f : !1;
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = d[g], n = Cf(b, c, l, e);
            if (0 === g ? f && n || !f && !n : f && !n || !f && n) for (var n = b, p = l, q = e; c < p - q;) {
                var r;
                for (r = 0; r < q; ++r) {
                    var t = n[c + r];
                    n[c + r] = n[p - q + r];
                    n[p - q + r] = t
                }
                c += q;
                p -= q
            }
            c = l
        }
        return c
    }
    function Ff(b, c, d, e) {
        var f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g) f = Ef(b, f, c[g], d, e);
        return f
    }
    function D(b, c) {
        Ye.call(this);
        this.c = [];
        this.o = -1;
        this.r = null;
        this.K = this.q = this.D = -1;
        this.g = null;
        this.ca(b, c)
    }
    w(D, Ye);
    k = D.prototype;
    k.ui = function (b) {
        null === this.j ? this.j = b.j.slice() : db(this.j, b.j);
        this.c.push(this.j.length);
        this.k()
    };
    k.clone = function () {
        var b = new D(null);
        Gf(b, this.b, this.j.slice(), this.c.slice());
        return b
    };
    k.Ra=function(b,c,d,e){if(e<Qd(this.I(),b,c))return e;this.q!=this.a&&(this.D=Math.sqrt(hf(this.j,0,this.c,this.t,0)),this.q=this.a);return kf(this.j,0,this.c,this.t,this.D,!0,b,c,d,e)};k.ac=function(b,c){return xf(Hf(this),0,this.c,this.t,b,c)};k.kl=function(){return cf(Hf(this),0,this.c,this.t)};k.M=function(b){var c;m(b)?(c=Hf(this).slice(),Ef(c,0,this.c,this.t,b)):c=this.j;return pf(c,0,this.c,this.t)};
function If(b){if(b.o!=b.a){var c=de(b.I());b.r=yf(Hf(b),0,b.c,b.t,c,0);b.o=b.a}return b.r}k.Zi=function(){return new C(If(this))};k.dj=function(){return this.c.length};k.Xf=function(b){if(0>b||this.c.length<=b)return null;var c=new sf(null);tf(c,this.b,this.j.slice(0===b?0:this.c[b-1],this.c[b]));return c};k.Ed=function(){var b=this.b,c=this.j,d=this.c,e=[],f=0,g,h;g=0;for(h=d.length;g<h;++g){var l=d[g],n=new sf(null);tf(n,b,c.slice(f,l));e.push(n);f=l}return e};
function Hf(b){if(b.K!=b.a){var c=b.j;Df(c,b.c,b.t)?b.g=c:(b.g=c.slice(),b.g.length=Ef(b.g,0,b.c,b.t));b.K=b.a}return b.g}k.wc=function(b){var c=[],d=[];c.length=rf(this.j,0,this.c,this.t,Math.sqrt(b),c,0,d);b=new D(null);Gf(b,"XY",c,d);return b};k.L=function(){return"Polygon"};k.la=function(b){return Bf(Hf(this),0,this.c,this.t,b)};
k.ca=function(b,c){if(null===b)Gf(this,"XY",null,this.c);else{af(this,c,b,2);null===this.j&&(this.j=[]);var d=nf(this.j,0,b,this.t,this.c);this.j.length=0===d.length?0:d[d.length-1];this.k()}};function Gf(b,c,d,e){$e(b,c,d);b.c=e;b.k()}function Jf(b,c,d,e){var f=m(e)?e:32;e=[];var g;for(g=0;g<f;++g)db(e,b.offset(c,d,2*Math.PI*g/f));e.push(e[0],e[1]);b=new D(null);Gf(b,"XY",e,[e.length]);return b}
    function Kf(b) {
        var c = b[0], d = b[1], e = b[2];
        b = b[3];
        c = [c, d, c, b, e, b, e, d, c, d];
        d = new D(null);
        Gf(d, "XY", c, [c.length]);
        return d
    }
    function Lf(b, c, d) {
        var e = m(c) ? c : 32, f = b.t;
        c = b.b;
        for (var g = new D(null, c), e = f * (e + 1), f = [], h = 0; h < e; h++) f[h] = 0;
        Gf(g, c, f, [f.length]);
        Mf(g, b.dd(), b.cf(), d);
        return g
    }
    function Mf(b, c, d, e) {
        var f = b.j, g = b.b, h = b.t, l = b.c, n = f.length / h - 1;
        e = m(e) ? e : 0;
        for (var p, q, r = 0; r <= n; ++r) q = r * h, p = e + 2 * Wb(r, n) * Math.PI / n, f[q] = c[0] + d * Math.cos(p), f[q + 1] = c[1] + d * Math.sin(p);
        Gf(b, g, f, l)
    }
    function Nf(b) {
        fd.call(this);
        b = m(b) ? b : {};
        this.c = [0, 0];
        var c = {};
        c.center = m(b.center) ? b.center : null;
        this.e = Pe(b.projection);
        var d, e, f, g = m(b.minZoom) ? b.minZoom : 0;
        d = m(b.maxZoom) ? b.maxZoom : 28;
        var h = m(b.zoomFactor) ? b.zoomFactor : 2;
        if (m(b.resolutions)) d = b.resolutions, e = d[0], f = d[d.length - 1], d = bc(d); else {
            e = Pe(b.projection);
            f = e.I();
            var l = (null === f ? 360 * we.degrees / we[e.b] : Math.max(ie(f), fe(f))) / 256 / Math.pow(2, 0),
                n = l / Math.pow(2, 28);
            e = b.maxResolution;
            m(e) ? g = 0 : e = l / Math.pow(h, g);
            f = b.minResolution;
            m(f) || (f = m(b.maxZoom) ?
                m(b.maxResolution)?e/Math.pow(h,d):l/Math.pow(h,d):n);d=g+Math.floor(Math.log(e/f)/Math.log(h));f=e/Math.pow(h,d-g);d=cc(h,e,d-g)}this.b=e;this.g=f;this.d=g;g=m(b.extent)?Zb(b.extent):$b;(m(b.enableRotation)?b.enableRotation:1)?(e=b.constrainRotation,e=m(e)&&!0!==e?!1===e?ec:ja(e)?fc(e):ec:gc()):e=dc;this.f=new hc(g,d,e);m(b.resolution)?c.resolution=b.resolution:m(b.zoom)&&(c.resolution=this.constrainResolution(this.b,b.zoom-this.d));c.rotation=m(b.rotation)?b.rotation:0;this.u(c)}w(Nf,fd);k=Nf.prototype;
k.yd=function(b){return this.f.center(b)};k.constrainResolution=function(b,c,d){return this.f.resolution(b,c||0,d||0)};k.constrainRotation=function(b,c){return this.f.rotation(b,c||0)};k.Da=function(){return this.get("center")};k.Pc=function(b){var c=this.Da(),d=this.wa(),e=this.xa();return ee(c,d,e,b)};k.Sk=function(){return this.e};k.wa=function(){return this.get("resolution")};function Of(b){var c=b.b,d=Math.log(c/b.g)/Math.log(2);return function(b){return c/Math.pow(2,b*d)}}k.xa=function(){return this.get("rotation")};
function Qf(b){var c=b.b,d=Math.log(c/b.g)/Math.log(2);return function(b){return Math.log(c/b)/Math.log(2)/d}}function Rf(b){var c=b.Da(),d=b.e,e=b.wa();b=b.xa();return{center:c.slice(),projection:m(d)?d:null,resolution:e,rotation:b}}k.zj=function(){var b,c=this.wa();if(m(c)){var d,e=0;do{d=this.constrainResolution(this.b,e);if(d==c){b=e;break}++e}while(d>this.g)}return m(b)?this.d+b:b};
k.Je=function(b,c,d){b instanceof Ye||(b=Kf(b));var e=m(d)?d:{};d=m(e.padding)?e.padding:[0,0,0,0];var f=m(e.constrainResolution)?e.constrainResolution:!0,g=m(e.nearest)?e.nearest:!1,h;m(e.minResolution)?h=e.minResolution:m(e.maxZoom)?h=this.constrainResolution(this.b,e.maxZoom-this.d,0):h=0;var l=b.j,n=this.xa(),e=Math.cos(-n),n=Math.sin(-n),p=Infinity,q=Infinity,r=-Infinity,t=-Infinity;b=b.t;for(var v=0,A=l.length;v<A;v+=b)var z=l[v]*e-l[v+1]*n,E=l[v]*n+l[v+1]*e,p=Math.min(p,z),q=Math.min(q,E),
r=Math.max(r,z),t=Math.max(t,E);l=[p,q,r,t];c=[c[0]-d[1]-d[3],c[1]-d[0]-d[2]];c=Math.max(ie(l)/c[0],fe(l)/c[1]);c=isNaN(c)?h:Math.max(c,h);f&&(h=this.constrainResolution(c,0,0),!g&&h<c&&(h=this.constrainResolution(h,-1,0)),c=h);this.Pb(c);n=-n;g=(p+r)/2+(d[1]-d[3])/2*c;d=(q+t)/2+(d[0]-d[2])/2*c;this.Xa([g*e-d*n,d*e+g*n])};
k.yi=function(b,c,d){var e=this.xa(),f=Math.cos(-e),e=Math.sin(-e),g=b[0]*f-b[1]*e;b=b[1]*f+b[0]*e;var h=this.wa(),g=g+(c[0]/2-d[0])*h;b+=(d[1]-c[1]/2)*h;e=-e;this.Xa([g*f-b*e,b*f+g*e])};function Sf(b){return null!=b.Da()&&m(b.wa())}k.rotate=function(b,c){if(m(c)){var d,e=this.Da();m(e)&&(d=[e[0]-c[0],e[1]-c[1]],rd(d,b-this.xa()),md(d,c));this.Xa(d)}this.Zd(b)};k.Xa=function(b){this.set("center",b)};function Tf(b,c){b.c[1]+=c}k.Pb=function(b){this.set("resolution",b)};
    k.Zd = function (b) {
        this.set("rotation", b)
    };
    k.ao = function (b) {
        b = this.constrainResolution(this.b, b - this.d, 0);
        this.Pb(b)
    };
    function Uf(b) {
        return 1 - Math.pow(1 - b, 3)
    }
    function Vf(b) {
        return 3 * b * b - 2 * b * b * b
    }
    function Wf(b) {
        return b
    }
    function Xf(b) {
        return .5 > b ? Vf(2 * b) : 1 - Vf(2 * (b - .5))
    }
    function Yf(b) {
        var c = b.source, d = m(b.start) ? b.start : ua(), e = c[0], f = c[1], g = m(b.duration) ? b.duration : 1E3,
            h = m(b.easing) ? b.easing : Vf;
        return function (b, c) {
            if (c.time < d) return c.animate = !0, c.viewHints[0] += 1, !0;
            if (c.time < d + g) {
                var p = 1 - h((c.time - d) / g), q = e - c.viewState.center[0], r = f - c.viewState.center[1];
                c.animate = !0;
                c.viewState.center[0] += p * q;
                c.viewState.center[1] += p * r;
                c.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }
    function Zf(b){var c=m(b.rotation)?b.rotation:0,d=m(b.start)?b.start:ua(),e=m(b.duration)?b.duration:1E3,f=m(b.easing)?b.easing:Vf,g=m(b.anchor)?b.anchor:null;return function(b,l){if(l.time<d)return l.animate=!0,l.viewHints[0]+=1,!0;if(l.time<d+e){var n=1-f((l.time-d)/e),n=(c-l.viewState.rotation)*n;l.animate=!0;l.viewState.rotation+=n;if(null!==g){var p=l.viewState.center;p[0]-=g[0];p[1]-=g[1];rd(p,n);md(p,g)}l.viewHints[0]+=1;return!0}return!1}}
    function $f(b) {
        var c = b.resolution, d = m(b.start) ? b.start : ua(), e = m(b.duration) ? b.duration : 1E3,
            f = m(b.easing) ? b.easing : Vf;
        return function (b, h) {
            if (h.time < d) return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var l = 1 - f((h.time - d) / e), n = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += l * n;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }
    function ag(b, c, d, e) {
        return m(e) ? (e[0] = b, e[1] = c, e[2] = d, e) : [b, c, d]
    }
    function bg(b, c, d) {
        return b + "/" + c + "/" + d
    }
    function cg(b) {
        var c = b[0], d = Array(c), e = 1 << c - 1, f, g;
        for (f = 0; f < c; ++f) g = 48, b[1] & e && (g += 1), b[2] & e && (g += 2), d[f] = String.fromCharCode(g), e >>= 1;
        return d.join("")
    }
    function dg(b) {
        return bg(b[0], b[1], b[2])
    }
    function eg(b, c, d) {
        var e = b[0], f = fg(c, b);
        d = gg(d);
        if (Rd(d, f)) return b;
        b = ie(d);
        d = Math.ceil((d[0] - f[0]) / b);
        f[0] += b * d;
        return c.Jd(f, e)
    }
    function hg(b, c) {
        var d = b[0], e = b[1], f = b[2];
        if (c.minZoom > d || d > c.maxZoom) return !1;
        var g = c.I(), d = null === g ? null === c.b ? null : c.b[d] : ig(c, g, d);
        return null === d ? !0 : jg(d, e, f)
    }
    function kg(b, c, d, e) {
        this.a = b;
        this.d = c;
        this.b = d;
        this.c = e
    }
    kg.prototype.contains = function (b) {
        return jg(this, b[1], b[2])
    };
    function jg(b, c, d) {
        return b.a <= c && c <= b.d && b.b <= d && d <= b.c
    }
    function lg(b, c) {
        return b.a == c.a && b.b == c.b && b.d == c.d && b.c == c.c
    }
    function mg(b) {
        return b.d - b.a + 1
    }
    function ng(b, c) {
        return b.a <= c.d && b.d >= c.a && b.b <= c.c && b.c >= c.b
    }
    function og(b) {
        this.b = b.html;
        this.a = m(b.tileRanges) ? b.tileRanges : null
    }
    og.prototype.c = function () {
        return this.b
    };
    function pg(b, c, d) {
        rc.call(this, b, d);
        this.element = c
    }
    w(pg, rc);
    function qg(b) {
        fd.call(this);
        this.b = m(b) ? b : [];
        rg(this)
    }
    w(qg, fd);
    k = qg.prototype;
    k.clear = function () {
        for (; 0 < this.Ib();) this.pop()
    };
    k.Ze = function (b) {
        var c, d;
        c = 0;
        for (d = b.length; c < d; ++c) this.push(b[c]);
        return this
    };
    k.forEach = function (b, c) {
        Sa(this.b, b, c)
    };
    k.Bk = function () {
        return this.b
    };
    k.item = function (b) {
        return this.b[b]
    };
    k.Ib = function () {
        return this.get("length")
    };
    k.Rd = function (b, c) {
        eb(this.b, b, 0, c);
        rg(this);
        this.dispatchEvent(new pg("add", c, this))
    };
    k.pop=function(){return this.rf(this.Ib()-1)};k.push=function(b){var c=this.b.length;this.Rd(c,b);return c};k.remove=function(b){var c=this.b,d,e;d=0;for(e=c.length;d<e;++d)if(c[d]===b)return this.rf(d)};k.rf=function(b){var c=this.b[b];Qa.splice.call(this.b,b,1);rg(this);this.dispatchEvent(new pg("remove",c,this));return c};
    k.Jn = function (b, c) {
        var d = this.Ib();
        if (b < d) d = this.b[b], this.b[b] = c, this.dispatchEvent(new pg("remove", d, this)), this.dispatchEvent(new pg("add", c, this)); else {
            for (; d < b; ++d) this.Rd(d, void 0);
            this.Rd(b, c)
        }
    };
    function rg(b) {
        b.set("length", b.b.length)
    }
    var sg = /^#(?:[0-9a-f]{3}){1,2}$/i, tg = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
        ug = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;
    function vg(b) {
        return ga(b) ? b : wg(b)
    }
    function xg(b) {
        if (!ia(b)) {
            var c = b[0];
            c != (c | 0) && (c = c + .5 | 0);
            var d = b[1];
            d != (d | 0) && (d = d + .5 | 0);
            var e = b[2];
            e != (e | 0) && (e = e + .5 | 0);
            b = "rgba(" + c + "," + d + "," + e + "," + b[3] + ")"
        }
        return b
    }
    var wg=function(){var b={},c=0;return function(d){var e;if(b.hasOwnProperty(d))e=b[d];else{if(1024<=c){e=0;for(var f in b)0===(e++&3)&&(delete b[f],--c)}var g,h;sg.exec(d)?(h=3==d.length-1?1:2,e=parseInt(d.substr(1+0*h,h),16),f=parseInt(d.substr(1+1*h,h),16),g=parseInt(d.substr(1+2*h,h),16),1==h&&(e=(e<<4)+e,f=(f<<4)+f,g=(g<<4)+g),e=[e,f,g,1]):(h=ug.exec(d))?(e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),h=Number(h[4]),e=[e,f,g,h],e=yg(e,e)):(h=tg.exec(d))?(e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),
    e = [e, f, g, 1], e = yg(e, e)) : e = void 0;
    b[d] = e;
    ++c
}
    return e
}
}();
    function yg(b, c) {
        var d = m(c) ? c : [];
        d[0] = Vb(b[0] + .5 | 0, 0, 255);
        d[1] = Vb(b[1] + .5 | 0, 0, 255);
        d[2] = Vb(b[2] + .5 | 0, 0, 255);
        d[3] = Vb(b[3], 0, 1);
        return d
    }
    function zg() {
        this.g = zd();
        this.b = void 0;
        this.a = zd();
        this.d = void 0;
        this.c = zd();
        this.f = void 0;
        this.e = zd();
        this.p = void 0;
        this.i = zd()
    }
    function Ag(b,c,d,e,f){var g=!1;m(c)&&c!==b.b&&(g=b.a,Dd(g),g[12]=c,g[13]=c,g[14]=c,g[15]=1,b.b=c,g=!0);if(m(d)&&d!==b.d){g=b.c;Dd(g);g[0]=d;g[5]=d;g[10]=d;g[15]=1;var h=-.5*d+.5;g[12]=h;g[13]=h;g[14]=h;g[15]=1;b.d=d;g=!0}m(e)&&e!==b.f&&(g=Math.cos(e),h=Math.sin(e),Ad(b.e,.213+.787*g-.213*h,.213-.213*g+.143*h,.213-.213*g-.787*h,0,.715-.715*g-.715*h,.715+.285*g+.14*h,.715-.715*g+.715*h,0,.072-.072*g+.928*h,.072-.072*g-.283*h,.072+.928*g+.072*h,0,0,0,0,1),b.f=e,g=!0);m(f)&&f!==b.p&&(Ad(b.i,.213+.787*
    f, .213 - .213 * f, .213 - .213 * f, 0, .715 - .715 * f, .715 + .285 * f, .715 - .715 * f, 0, .072 - .072 * f, .072 - .072 * f, .072 + .928 * f, 0, 0, 0, 0, 1), b.p = f, g = !0);
    g && (g = b.g, Dd(g), m(d) && Ed(g, b.c, g), m(c) && Ed(g, b.a, g), m(f) && Ed(g, b.i, g), m(e) && Ed(g, b.e, g));
    return b.g
}
    var Bg = !Ib || Ib && 9 <= Tb;
    !Jb && !Ib || Ib && Ib && 9 <= Tb || Jb && Rb("1.9.1");
    Ib && Rb("9");
    Gb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    function Cg(b, c) {
        this.x = m(b) ? b : 0;
        this.y = m(c) ? c : 0
    }
    k = Cg.prototype;
    k.clone = function () {
        return new Cg(this.x, this.y)
    };
    k.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    k.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    k.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    k.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.x *= b;
        this.y *= d;
        return this
    };
    function Dg(b, c) {
        this.width = b;
        this.height = c
    }
    k = Dg.prototype;
    k.clone = function () {
        return new Dg(this.width, this.height)
    };
    k.pa = function () {
        return !(this.width * this.height)
    };
    k.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale=function(b,c){var d=ja(c)?c:b;this.width*=b;this.height*=d;return this};function Eg(b){return b?new Fg(Gg(b)):ya||(ya=new Fg)}function Hg(b){var c=document;return ia(b)?c.getElementById(b):b}function Ig(b,c){pb(c,function(c,e){"style"==e?b.style.cssText=c:"class"==e?b.className=c:"for"==e?b.htmlFor=c:e in Jg?b.setAttribute(Jg[e],c):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?b.setAttribute(e,c):b[e]=c})}
var Jg={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Kg(b){b=b.document.documentElement;return new Dg(b.clientWidth,b.clientHeight)}
function Lg(b,c,d){var e=arguments,f=document,g=e[0],h=e[1];if(!Bg&&h&&(h.name||h.type)){g=["<",g];h.name&&g.push(' name="',Da(h.name),'"');if(h.type){g.push(' type="',Da(h.type),'"');var l={};Fb(l,h);delete l.type;h=l}g.push(">");g=g.join("")}g=f.createElement(g);h&&(ia(h)?g.className=h:ga(h)?g.className=h.join(" "):Ig(g,h));2<e.length&&Mg(f,g,e,2);return g}
function Mg(b,c,d,e){function f(d){d&&c.appendChild(ia(d)?b.createTextNode(d):d)}for(;e<d.length;e++){var g=d[e];!ha(g)||la(g)&&0<g.nodeType?f(g):Sa(Ng(g)?bb(g):g,f)}}function Og(b){return document.createElement(b)}function Pg(b,c){Mg(Gg(b),b,arguments,1)}function Qg(b){for(var c;c=b.firstChild;)b.removeChild(c)}function Rg(b,c,d){b.insertBefore(c,b.childNodes[d]||null)}function Sg(b){b&&b.parentNode&&b.parentNode.removeChild(b)}function Tg(b,c){var d=c.parentNode;d&&d.replaceChild(b,c)}
function Ug(b){if(void 0!=b.firstElementChild)b=b.firstElementChild;else for(b=b.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;return b}function Vg(b,c){if(b.contains&&1==c.nodeType)return b==c||b.contains(c);if("undefined"!=typeof b.compareDocumentPosition)return b==c||Boolean(b.compareDocumentPosition(c)&16);for(;c&&b!=c;)c=c.parentNode;return c==b}function Gg(b){return 9==b.nodeType?b:b.ownerDocument||b.document}
function Ng(b){if(b&&"number"==typeof b.length){if(la(b))return"function"==typeof b.item||"string"==typeof b.item;if(ka(b))return"function"==typeof b.item}return!1}function Fg(b){this.a=b||ba.document||document}function Wg(){return!0}function Xg(b){var c=b.a;b=Kb?c.body||c.documentElement:c.documentElement;c=c.parentWindow||c.defaultView;return Ib&&Rb("10")&&c.pageYOffset!=b.scrollTop?new Cg(b.scrollLeft,b.scrollTop):new Cg(c.pageXOffset||b.scrollLeft,c.pageYOffset||b.scrollTop)}
    Fg.prototype.appendChild = function (b, c) {
        b.appendChild(c)
    };
    Fg.prototype.contains = Vg;
    function Yg(b) {
        if (b.classList) return b.classList;
        b = b.className;
        return ia(b) && b.match(/\S+/g) || []
    }
    function Zg(b, c) {
        return b.classList ? b.classList.contains(c) : Ya(Yg(b), c)
    }
    function $g(b, c) {
        b.classList ? b.classList.add(c) : Zg(b, c) || (b.className += 0 < b.className.length ? " " + c : c)
    }
    function ah(b, c) {
        b.classList ? b.classList.remove(c) : Zg(b, c) && (b.className = Ta(Yg(b), function (b) {
            return b != c
        }).join(" "))
    }
    function bh(b, c) {
        Zg(b, c) ? ah(b, c) : $g(b, c)
    }
    function ch(b, c, d, e) {
        this.top = b;
        this.right = c;
        this.bottom = d;
        this.left = e
    }
    k = ch.prototype;
    k.clone = function () {
        return new ch(this.top, this.right, this.bottom, this.left)
    };
    k.contains = function (b) {
        return this && b ? b instanceof ch ? b.left >= this.left && b.right <= this.right && b.top >= this.top && b.bottom <= this.bottom : b.x >= this.left && b.x <= this.right && b.y >= this.top && b.y <= this.bottom : !1
    };
    k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
k.scale=function(b,c){var d=ja(c)?c:b;this.left*=b;this.right*=b;this.top*=d;this.bottom*=d;return this};function dh(b,c,d,e){this.left=b;this.top=c;this.width=d;this.height=e}k=dh.prototype;k.clone=function(){return new dh(this.left,this.top,this.width,this.height)};k.contains=function(b){return b instanceof dh?this.left<=b.left&&this.left+this.width>=b.left+b.width&&this.top<=b.top&&this.top+this.height>=b.top+b.height:b.x>=this.left&&b.x<=this.left+this.width&&b.y>=this.top&&b.y<=this.top+this.height};
function eh(b,c){var d=c.x<b.left?b.left-c.x:Math.max(c.x-(b.left+b.width),0),e=c.y<b.top?b.top-c.y:Math.max(c.y-(b.top+b.height),0);return d*d+e*e}k.distance=function(b){return Math.sqrt(eh(this,b))};k.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};k.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};k.scale=function(b,c){var d=ja(c)?c:b;this.left*=b;this.width*=b;this.top*=d;this.height*=d;return this};function fh(b,c){var d=Gg(b);return d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))?d[c]||d.getPropertyValue(c)||"":""}function gh(b,c){return fh(b,c)||(b.currentStyle?b.currentStyle[c]:null)||b.style&&b.style[c]}function hh(b,c,d){var e;c instanceof Cg?(e=c.x,c=c.y):(e=c,c=d);b.style.left=ih(e);b.style.top=ih(c)}
function jh(b){var c;try{c=b.getBoundingClientRect()}catch(d){return{left:0,top:0,right:0,bottom:0}}Ib&&b.ownerDocument.body&&(b=b.ownerDocument,c.left-=b.documentElement.clientLeft+b.body.clientLeft,c.top-=b.documentElement.clientTop+b.body.clientTop);return c}
function kh(b){if(1==b.nodeType)return b=jh(b),new Cg(b.left,b.top);var c=ka(b.Mi),d=b;b.targetTouches&&b.targetTouches.length?d=b.targetTouches[0]:c&&b.a.targetTouches&&b.a.targetTouches.length&&(d=b.a.targetTouches[0]);return new Cg(d.clientX,d.clientY)}function ih(b){"number"==typeof b&&(b=b+"px");return b}
function lh(b){var c=mh;if("none"!=gh(b,"display"))return c(b);var d=b.style,e=d.display,f=d.visibility,g=d.position;d.visibility="hidden";d.position="absolute";d.display="inline";b=c(b);d.display=e;d.position=g;d.visibility=f;return b}function mh(b){var c=b.offsetWidth,d=b.offsetHeight,e=Kb&&!c&&!d;return m(c)&&!e||!b.getBoundingClientRect?new Dg(c,d):(b=jh(b),new Dg(b.right-b.left,b.bottom-b.top))}function nh(b,c){b.style.display=c?"":"none"}
function oh(b,c,d,e){if(/^\d+px?$/.test(c))return parseInt(c,10);var f=b.style[d],g=b.runtimeStyle[d];b.runtimeStyle[d]=b.currentStyle[d];b.style[d]=c;c=b.style[e];b.style[d]=f;b.runtimeStyle[d]=g;return c}function ph(b,c){var d=b.currentStyle?b.currentStyle[c]:null;return d?oh(b,d,"left","pixelLeft"):0}
function qh(b,c){if(Ib){var d=ph(b,c+"Left"),e=ph(b,c+"Right"),f=ph(b,c+"Top"),g=ph(b,c+"Bottom");return new ch(f,e,g,d)}d=fh(b,c+"Left");e=fh(b,c+"Right");f=fh(b,c+"Top");g=fh(b,c+"Bottom");return new ch(parseFloat(f),parseFloat(e),parseFloat(g),parseFloat(d))}var rh={thin:2,medium:4,thick:6};function sh(b,c){if("none"==(b.currentStyle?b.currentStyle[c+"Style"]:null))return 0;var d=b.currentStyle?b.currentStyle[c+"Width"]:null;return d in rh?rh[d]:oh(b,d,"left","pixelLeft")}
    function th(b) {
        if (Ib && !(Ib && 9 <= Tb)) {
            var c = sh(b, "borderLeft"), d = sh(b, "borderRight"), e = sh(b, "borderTop");
            b = sh(b, "borderBottom");
            return new ch(e, d, b, c)
        }
        c = fh(b, "borderLeftWidth");
        d = fh(b, "borderRightWidth");
        e = fh(b, "borderTopWidth");
        b = fh(b, "borderBottomWidth");
        return new ch(parseFloat(e), parseFloat(d), parseFloat(b), parseFloat(c))
    }
    function uh(b, c, d) {
        rc.call(this, b);
        this.map = c;
        this.frameState = m(d) ? d : null
    }
    w(uh, rc);
    function vh(b) {
        fd.call(this);
        this.element = m(b.element) ? b.element : null;
        this.b = this.K = null;
        this.n = [];
        this.render = m(b.render) ? b.render : ca;
        m(b.target) && this.c(b.target)
    }
    w(vh, fd);
    function wh(b) {
        x(b, ["mouseout", uc], function () {
            this.blur()
        }, !1)
    }
    vh.prototype.N = function () {
        Sg(this.element);
        vh.S.N.call(this)
    };
    vh.prototype.e = function () {
        return this.b
    };
    vh.prototype.setMap=function(b){null===this.b||Sg(this.element);0!=this.n.length&&(Sa(this.n,Wc),this.n.length=0);this.b=b;null!==this.b&&((null===this.K?b.r:this.K).appendChild(this.element),this.render!==ca&&this.n.push(x(b,"postrender",this.render,!1,this)),b.render())};vh.prototype.c=function(b){this.K=Hg(b)};function xh(){this.c=0;this.d={};this.b=this.a=null}k=xh.prototype;k.clear=function(){this.c=0;this.d={};this.b=this.a=null};function yh(b,c){return b.d.hasOwnProperty(c)}k.forEach=function(b,c){for(var d=this.a;null!==d;)b.call(c,d.qc,d.Ud,this),d=d.Wa};k.get=function(b){b=this.d[b];if(b===this.b)return b.qc;b===this.a?(this.a=this.a.Wa,this.a.Lb=null):(b.Wa.Lb=b.Lb,b.Lb.Wa=b.Wa);b.Wa=null;b.Lb=this.b;this.b=this.b.Wa=b;return b.qc};k.Sb=function(){return this.c};
    k.G = function () {
        var b = Array(this.c), c = 0, d;
        for (d = this.b; null !== d; d = d.Lb) b[c++] = d.Ud;
        return b
    };
    k.eb = function () {
        var b = Array(this.c), c = 0, d;
        for (d = this.b; null !== d; d = d.Lb) b[c++] = d.qc;
        return b
    };
    k.pop = function () {
        var b = this.a;
        delete this.d[b.Ud];
        null !== b.Wa && (b.Wa.Lb = null);
        this.a = b.Wa;
        null === this.a && (this.b = null);
        --this.c;
        return b.qc
    };
    k.set = function (b, c) {
        var d = {Ud: b, Wa: null, Lb: this.b, qc: c};
        null === this.b ? this.a = d : this.b.Wa = d;
        this.b = d;
        this.d[b] = d;
        ++this.c
    };
    function zh(b) {
        xh.call(this);
        this.e = m(b) ? b : 2048
    }
    w(zh, xh);
    function Ah(b) {
        return b.Sb() > b.e
    }
    function Bh(b, c) {
        $c.call(this);
        this.a = b;
        this.state = c
    }
    w(Bh, $c);
    function Ch(b) {
        b.dispatchEvent("change")
    }
    Bh.prototype.hb = function () {
        return ma(this).toString()
    };
    Bh.prototype.f = function () {
        return this.a
    };
    function Dh(b) {
        fd.call(this);
        this.g = ze(b.projection);
        this.e = m(b.attributions) ? b.attributions : null;
        this.U = b.logo;
        this.o = m(b.state) ? b.state : "ready";
        this.r = m(b.wrapX) ? b.wrapX : !1
    }
    w(Dh, fd);
    k = Dh.prototype;
    k.de = ca;
    k.ea = function () {
        return this.e
    };
    k.da = function () {
        return this.U
    };
    k.fa = function () {
        return this.g
    };
    k.ga = function () {
        return this.o
    };
    function Eh(b) {
        return b.r
    }
    function Fh(b, c) {
        b.o = c;
        b.k()
    }
    function Gh(b) {
        this.minZoom = m(b.minZoom) ? b.minZoom : 0;
        this.a = b.resolutions;
        this.maxZoom = this.a.length - 1;
        this.c = m(b.origin) ? b.origin : null;
        this.e = null;
        m(b.origins) && (this.e = b.origins);
        var c = b.extent;
        m(c) && null === this.c && null === this.e && (this.c = ce(c));
        this.f = null;
        m(b.tileSizes) && (this.f = b.tileSizes);
        this.i = m(b.tileSize) ? b.tileSize : null === this.f ? 256 : null;
        this.n = m(c) ? c : null;
        this.b = null;
        m(b.sizes) ? this.b = Ua(b.sizes, function (b) {
            return new kg(Math.min(0, b[0]), Math.max(b[0] - 1, -1), Math.min(0, b[1]), Math.max(b[1] -
                1,-1))},this):null!=c&&Hh(this,c);this.d=[0,0]}var Ih=[0,0,0];function Jh(b,c,d,e,f){f=Kh(b,c,f);for(c=c[0]-1;c>=b.minZoom;){if(d.call(null,c,ig(b,f,c,e)))return!0;--c}return!1}k=Gh.prototype;k.I=function(){return this.n};k.Yf=function(){return this.maxZoom};k.Zf=function(){return this.minZoom};k.Ec=function(b){return null===this.c?this.e[b]:this.c};k.na=function(b){return this.a[b]};k.Rg=function(){return this.a};function Lh(b,c,d,e){return c[0]<b.maxZoom?(e=Kh(b,c,e),ig(b,e,c[0]+1,d)):null}
function Mh(b,c,d,e){Nh(b,c[0],c[1],d,!1,Ih);var f=Ih[1],g=Ih[2];Nh(b,c[2],c[3],d,!0,Ih);b=Ih[1];c=Ih[2];m(e)?(e.a=f,e.d=b,e.b=g,e.c=c):e=new kg(f,b,g,c);return e}function ig(b,c,d,e){return Mh(b,c,b.na(d),e)}function fg(b,c){var d=b.Ec(c[0]),e=b.na(c[0]),f=ld(b.Ca(c[0]),b.d);return[d[0]+(c[1]+.5)*f[0]*e,d[1]+(c[2]+.5)*f[1]*e]}function Kh(b,c,d){var e=b.Ec(c[0]),f=b.na(c[0]);b=ld(b.Ca(c[0]),b.d);var g=e[0]+c[1]*b[0]*f;c=e[1]+c[2]*b[1]*f;return Nd(g,c,g+b[0]*f,c+b[1]*f,d)}
k.cd=function(b,c,d){return Nh(this,b[0],b[1],c,!1,d)};function Nh(b,c,d,e,f,g){var h=Oh(b,e),l=e/b.na(h),n=b.Ec(h);b=ld(b.Ca(h),b.d);c=l*Math.floor((c-n[0])/e+(f?.5:0))/b[0];d=l*Math.floor((d-n[1])/e+(f?0:.5))/b[1];f?(c=Math.ceil(c)-1,d=Math.ceil(d)-1):(c=Math.floor(c),d=Math.floor(d));return ag(h,c,d,g)}k.Jd=function(b,c,d){return Nh(this,b[0],b[1],this.na(c),!1,d)};k.Ca=function(b){return null===this.i?this.f[b]:this.i};function Oh(b,c){var d=ac(b.a,c,0);return Vb(d,b.minZoom,b.maxZoom)}
function Hh(b,c){for(var d=b.a.length,e=Array(d),f=b.minZoom;f<d;++f)e[f]=ig(b,c,f);b.b=e}function Ph(b){var c={};Fb(c,m(b)?b:{});m(c.extent)||(c.extent=ze("EPSG:3857").I());c.resolutions=Qh(c.extent,c.maxZoom,c.tileSize);delete c.maxZoom;return new Gh(c)}function Qh(b,c,d){c=m(c)?c:42;var e=fe(b);b=ie(b);d=ld(m(d)?d:256);d=Math.max(b/d[0],e/d[1]);c+=1;e=Array(c);for(b=0;b<c;++b)e[b]=d/Math.pow(2,b);return e}
    function gg(b) {
        b = ze(b);
        var c = b.I();
        null === c && (b = 180 * we.degrees / b.Fd(), c = Nd(-b, -b, b, b));
        return c
    }
    function Rh(b) {
        Dh.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state,
            wrapX: b.wrapX
        });
        this.T = m(b.opaque) ? b.opaque : !1;
        this.X = m(b.tilePixelRatio) ? b.tilePixelRatio : 1;
        this.tileGrid = m(b.tileGrid) ? b.tileGrid : null;
        this.b = new zh;
        this.c = [0, 0]
    }
    w(Rh, Dh);
    function Sh(b, c, d, e) {
        for (var f = !0, g, h, l = d.a; l <= d.d; ++l) for (var n = d.b; n <= d.c; ++n) g = b.cb(c, l, n), h = !1, yh(b.b, g) && (g = b.b.get(g), (h = 2 === g.state) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }
    k = Rh.prototype;
    k.Cd = function () {
        return 0
    };
    k.cb=bg;k.sa=function(){return this.tileGrid};function Th(b,c){var d;if(null===b.tileGrid){var e=c.i;if(null===e){var e=gg(c),f=m(void 0)?void 0:"top-left",g=Qh(e,void 0,void 0);"bottom-left"===f?d=$d(e):"bottom-right"===f?d=ae(e):"top-left"===f?d=ce(e):"top-right"===f&&(d=be(e));e=new Gh({extent:e,origin:d,resolutions:g,tileSize:void 0});c.i=e}d=e}else d=b.tileGrid;return d}k.Vb=function(b,c,d){c=Th(this,d);return kd(ld(c.Ca(b),this.c),this.X,this.c)};
function Uh(b,c,d){d=m(d)?d:b.g;var e=Th(b,d);b.r&&d.c&&(c=eg(c,e,d));return hg(c,e)?c:null}k.xf=ca;function Wh(b,c){rc.call(this,b);this.tile=c}w(Wh,rc);function Xh(b){b=m(b)?b:{};this.r=Og("UL");this.l=Og("LI");this.r.appendChild(this.l);nh(this.l,!1);this.d=m(b.collapsed)?b.collapsed:!0;this.g=m(b.collapsible)?b.collapsible:!0;this.g||(this.d=!1);var c=m(b.className)?b.className:"ol-attribution",d=m(b.tipLabel)?b.tipLabel:"Attributions",e=m(b.collapseLabel)?b.collapseLabel:"\u00bb";this.q=ia(e)?Lg("SPAN",{},e):e;e=m(b.label)?b.label:"i";this.D=ia(e)?Lg("SPAN",{},e):e;d=Lg("BUTTON",{type:"button",title:d},this.g&&!this.d?this.q:this.D);x(d,"click",
this.Vk,!1,this);x(d,["mouseout",uc],function(){this.blur()},!1);c=Lg("DIV",c+" ol-unselectable ol-control"+(this.d&&this.g?" ol-collapsed":"")+(this.g?"":" ol-uncollapsible"),this.r,d);vh.call(this,{element:c,render:m(b.render)?b.render:Yh,target:b.target});this.o=!0;this.i={};this.f={};this.U={}}w(Xh,vh);
function Yh(b){b=b.frameState;if(null===b)this.o&&(nh(this.element,!1),this.o=!1);else{var c,d,e,f,g,h,l,n,p,q,r,t=b.layerStatesArray,v=Db(b.attributions),A={},z=b.viewState.projection;d=0;for(c=t.length;d<c;d++)if(h=t[d].layer.V(),null!==h&&(q=ma(h).toString(),p=h.e,null!==p))for(e=0,f=p.length;e<f;e++)if(l=p[e],n=ma(l).toString(),!(n in v)){g=b.usedTiles[q];if(m(g)){var E=Th(h,z);a:{r=l;var B=z;if(null===r.a)r=!0;else{var y=void 0,L=void 0,K=void 0,H=void 0;for(H in g)if(H in r.a)for(var K=g[H],
S,y=0,L=r.a[H].length;y<L;++y){S=r.a[H][y];if(ng(S,K)){r=!0;break a}var sa=ig(E,B.I(),parseInt(H,10)),Na=mg(sa);if(K.a<sa.a||K.d>sa.d)if(ng(S,new kg(Wb(K.a,Na),Wb(K.d,Na),K.b,K.c))||mg(K)>Na&&ng(S,sa)){r=!0;break a}}r=!1}}}else r=!1;r?(n in A&&delete A[n],v[n]=l):A[n]=l}c=[v,A];d=c[0];c=c[1];for(var R in this.i)R in d?(this.f[R]||(nh(this.i[R],!0),this.f[R]=!0),delete d[R]):R in c?(this.f[R]&&(nh(this.i[R],!1),delete this.f[R]),delete c[R]):(Sg(this.i[R]),delete this.i[R],delete this.f[R]);for(R in d)e=
Og("LI"),e.innerHTML=d[R].b,this.r.appendChild(e),this.i[R]=e,this.f[R]=!0;for(R in c)e=Og("LI"),e.innerHTML=c[R].b,nh(e,!1),this.r.appendChild(e),this.i[R]=e;R=!xb(this.f)||!xb(b.logos);this.o!=R&&(nh(this.element,R),this.o=R);R&&xb(this.f)?$g(this.element,"ol-logo-only"):ah(this.element,"ol-logo-only");var za;b=b.logos;R=this.U;for(za in R)za in b||(Sg(R[za]),delete R[za]);for(var cb in b)cb in R||(za=new Image,za.src=cb,d=b[cb],""===d?d=za:(d=Lg("A",{href:d}),d.appendChild(za)),this.l.appendChild(d),
R[cb]=d);nh(this.l,!xb(b))}}k=Xh.prototype;k.Vk=function(b){b.preventDefault();Zh(this)};function Zh(b){bh(b.element,"ol-collapsed");b.d?Tg(b.q,b.D):Tg(b.D,b.q);b.d=!b.d}k.Uk=function(){return this.g};k.Xk=function(b){this.g!==b&&(this.g=b,bh(this.element,"ol-uncollapsible"),!b&&this.d&&Zh(this))};k.Wk=function(b){this.g&&this.d!==b&&Zh(this)};k.Tk=function(){return this.d};function $h(b){b=m(b)?b:{};var c=m(b.className)?b.className:"ol-rotate",d=m(b.label)?b.label:"\u21e7";this.d=null;ia(d)?this.d=Lg("SPAN","ol-compass",d):(this.d=d,$g(this.d,"ol-compass"));d=Lg("BUTTON",{"class":c+"-reset",type:"button",title:m(b.tipLabel)?b.tipLabel:"Reset rotation"},this.d);x(d,"click",$h.prototype.l,!1,this);wh(d);c=Lg("DIV",c+" ol-unselectable ol-control",d);vh.call(this,{element:c,render:m(b.render)?b.render:ai,target:b.target});this.g=m(b.duration)?b.duration:250;this.f=m(b.autoHide)?
b.autoHide:!0;this.i=void 0;this.f&&$g(this.element,"ol-hidden")}w($h,vh);$h.prototype.l=function(b){b.preventDefault();b=this.b;var c=b.P();if(null!==c){for(var d=c.xa();d<-Math.PI;)d+=2*Math.PI;for(;d>Math.PI;)d-=2*Math.PI;m(d)&&(0<this.g&&b.Ha(Zf({rotation:d,duration:this.g,easing:Uf})),c.Zd(0))}};
    function ai(b) {
        b = b.frameState;
        if (null !== b) {
            b = b.viewState.rotation;
            if (b != this.i) {
                var c = "rotate(" + 180 * b / Math.PI + "deg)";
                if (this.f) {
                    var d = this.element;
                    0 === b ? $g(d, "ol-hidden") : ah(d, "ol-hidden")
                }
                this.d.style.msTransform = c;
                this.d.style.webkitTransform = c;
                this.d.style.transform = c
            }
            this.i = b
        }
    }
    function bi(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-zoom", d = m(b.delta) ? b.delta : 1,
            e = m(b.zoomOutLabel) ? b.zoomOutLabel : "\u2212", f = m(b.zoomOutTipLabel) ? b.zoomOutTipLabel : "放大",
            g = Lg("BUTTON", {
                "class": c + "-in",
                type: "button",
                title: m(b.zoomInTipLabel) ? b.zoomInTipLabel : "缩小"
            }, m(b.zoomInLabel) ? b.zoomInLabel : "+");
        x(g, "click", ta(bi.prototype.f, d), !1, this);
        wh(g);
        e = Lg("BUTTON", {"class": c + "-out", type: "button", title: f}, e);
        x(e, "click", ta(bi.prototype.f, -d), !1, this);
        x(e, ["mouseout", uc], function () {
                this.blur()
            },
            !1);
        c = Lg("DIV", c + " ol-unselectable ol-control", g, e);
        vh.call(this, {element: c, target: b.target});
        this.d = m(b.duration) ? b.duration : 250
    }
    w(bi, vh);
    bi.prototype.f = function (b, c) {
        c.preventDefault();
        var d = this.b, e = d.P();
        if (null !== e) {
            var f = e.wa();
            m(f) && (0 < this.d && d.Ha($f({
                resolution: f,
                duration: this.d,
                easing: Uf
            })), d = e.constrainResolution(f, b), e.Pb(d))
        }
    };
    function ci(b) {
        b = m(b) ? b : {};
        var c = new qg;
        (m(b.zoom) ? b.zoom : 1) && c.push(new bi(b.zoomOptions));
        (m(b.rotate) ? b.rotate : 1) && c.push(new $h(b.rotateOptions));
        (m(b.attribution) ? b.attribution : 1) && c.push(new Xh(b.attributionOptions));
        return c
    }
    var di = Kb ? "webkitfullscreenchange" : Jb ? "mozfullscreenchange" : Ib ? "MSFullscreenChange" : "fullscreenchange";
    function ei() {
        var b = Eg().a, c = b.body;
        return !!(c.webkitRequestFullscreen || c.mozRequestFullScreen && b.mozFullScreenEnabled || c.msRequestFullscreen && b.msFullscreenEnabled || c.requestFullscreen && b.fullscreenEnabled)
    }
    function fi(b) {
        b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.requestFullscreen && b.requestFullscreen()
    }
    function gi() {
        var b = Eg().a;
        return !!(b.webkitIsFullScreen || b.mozFullScreen || b.msFullscreenElement || b.fullscreenElement)
    }
    function hi(b) {
        b = m(b) ? b : {};
        this.d = m(b.className) ? b.className : "ol-full-screen";
        var c = m(b.label) ? b.label : "\u2194";
        this.f = ia(c) ? document.createTextNode(String(c)) : c;
        c = m(b.labelActive) ? b.labelActive : "\u00d7";
        this.g = ia(c) ? document.createTextNode(String(c)) : c;
        c = m(b.tipLabel) ? b.tipLabel : "Toggle full-screen";
        c = Lg("BUTTON", {"class": this.d + "-" + gi(), type: "button", title: c}, this.f);
        x(c, "click", this.o, !1, this);
        wh(c);
        x(ba.document, di, this.i, !1, this);
        var d = this.d + " ol-unselectable ol-control " + (ei() ? "" : "ol-unsupported"),
            c=Lg("DIV",d,c);vh.call(this,{element:c,target:b.target});this.l=m(b.keys)?b.keys:!1}w(hi,vh);
hi.prototype.o=function(b){b.preventDefault();ei()&&(b=this.b,null!==b&&(gi()?(b=Eg().a,b.webkitCancelFullScreen?b.webkitCancelFullScreen():b.mozCancelFullScreen?b.mozCancelFullScreen():b.msExitFullscreen?b.msExitFullscreen():b.exitFullscreen&&b.exitFullscreen()):(b=b.bf(),b=Hg(b),this.l?b.mozRequestFullScreenWithKeys?b.mozRequestFullScreenWithKeys():b.webkitRequestFullscreen?b.webkitRequestFullscreen():fi(b):fi(b))))};
hi.prototype.i=function(){var b=this.d+"-true",c=this.d+"-false",d=Ug(this.element),e=this.b;gi()?(Zg(d,c)&&(ah(d,c),$g(d,b)),Tg(this.g,this.f)):(Zg(d,b)&&(ah(d,b),$g(d,c)),Tg(this.f,this.g));null===e||e.Lc()};function ii(b){b=m(b)?b:{};var c=Lg("DIV",m(b.className)?b.className:"ol-mouse-position");vh.call(this,{element:c,render:m(b.render)?b.render:ji,target:b.target});x(this,hd("projection"),this.Yk,!1,this);m(b.coordinateFormat)&&this.ph(b.coordinateFormat);m(b.projection)&&this.yg(ze(b.projection));this.l=m(b.undefinedHTML)?b.undefinedHTML:"";this.i=c.innerHTML;this.g=this.f=this.d=null}w(ii,vh);
function ji(b){b=b.frameState;null===b?this.d=null:this.d!=b.viewState.projection&&(this.d=b.viewState.projection,this.f=null);ki(this,this.g)}k=ii.prototype;k.Yk=function(){this.f=null};k.Tf=function(){return this.get("coordinateFormat")};k.xg=function(){return this.get("projection")};k.Tj=function(b){this.g=this.b.Bd(b.a);ki(this,this.g)};k.Uj=function(){ki(this,null);this.g=null};
    k.setMap = function (b) {
        ii.S.setMap.call(this, b);
        null !== b && (b = b.b, this.n.push(x(b, "mousemove", this.Tj, !1, this), x(b, "mouseout", this.Uj, !1, this)))
    };
    k.ph = function (b) {
        this.set("coordinateFormat", b)
    };
    k.yg = function (b) {
        this.set("projection", b)
    };
    function ki(b, c) {
        var d = b.l;
        if (null !== c && null !== b.d) {
            if (null === b.f) {
                var e = b.xg();
                b.f = m(e) ? De(b.d, e) : Te
            }
            e = b.b.ma(c);
            null !== e && (b.f(e, e), d = b.Tf(), d = m(d) ? d(e) : e.toString())
        }
        m(b.i) && d == b.i || (b.element.innerHTML = d, b.i = d)
    }
    function li(b, c, d) {
        mc.call(this);
        this.d = b;
        this.c = d;
        this.a = c || window;
        this.b = ra(this.Of, this)
    }
    w(li, mc);
    k = li.prototype;
    k.aa = null;
    k.yf = !1;
    k.start = function () {
        mi(this);
        this.yf = !1;
        var b = ni(this), c = oi(this);
        b && !c && this.a.mozRequestAnimationFrame ? (this.aa = x(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(null), this.yf = !0) : this.aa = b && c ? b.call(this.a, this.b) : this.a.setTimeout(re(this.b), 20)
    };
    function mi(b){if(null!=b.aa){var c=ni(b),d=oi(b);c&&!d&&b.a.mozRequestAnimationFrame?Wc(b.aa):c&&d?d.call(b.a,b.aa):b.a.clearTimeout(b.aa)}b.aa=null}k.Of=function(){this.yf&&this.aa&&Wc(this.aa);this.aa=null;this.d.call(this.c,ua())};k.N=function(){mi(this);li.S.N.call(this)};function ni(b){b=b.a;return b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||null}
    function oi(b) {
        b = b.a;
        return b.cancelAnimationFrame || b.cancelRequestAnimationFrame || b.webkitCancelRequestAnimationFrame || b.mozCancelRequestAnimationFrame || b.oCancelRequestAnimationFrame || b.msCancelRequestAnimationFrame || null
    }
    function pi(b) {
        ba.setTimeout(function () {
            throw b;
        }, 0)
    }
    function qi(b, c) {
        var d = b;
        c && (d = ra(b, c));
        d = ri(d);
        !ka(ba.setImmediate) || ba.Window && ba.Window.prototype.setImmediate == ba.setImmediate ? (si || (si = ti()), si(d)) : ba.setImmediate(d)
    }
    var si;
    function ti(){var b=ba.MessageChannel;"undefined"===typeof b&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(b=function(){var b=document.createElement("iframe");b.style.display="none";b.src="";document.documentElement.appendChild(b);var c=b.contentWindow,b=c.document;b.open();b.write("");b.close();var d="callImmediate"+Math.random(),e="file:"==c.location.protocol?"*":c.location.protocol+"//"+c.location.host,b=ra(function(b){if(("*"==e||b.origin==e)&&b.data==d)this.port1.onmessage()},
this);c.addEventListener("message",b,!1);this.port1={};this.port2={postMessage:function(){c.postMessage(d,e)}}});if("undefined"!==typeof b&&!ob("Trident")&&!ob("MSIE")){var c=new b,d={},e=d;c.port1.onmessage=function(){if(m(d.next)){d=d.next;var b=d.Kf;d.Kf=null;b()}};return function(b){e.next={Kf:b};e=e.next;c.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(b){var c=document.createElement("script");c.onreadystatechange=function(){c.onreadystatechange=
null;c.parentNode.removeChild(c);c=null;b();b=null};document.documentElement.appendChild(c)}:function(b){ba.setTimeout(b,0)}}var ri=qe;function ui(b){if("function"==typeof b.eb)return b.eb();if(ia(b))return b.split("");if(ha(b)){for(var c=[],d=b.length,e=0;e<d;e++)c.push(b[e]);return c}return sb(b)}
    function vi(b, c) {
        if ("function" == typeof b.forEach) b.forEach(c, void 0); else if (ha(b) || ia(b)) Sa(b, c, void 0); else {
            var d;
            if ("function" == typeof b.G) d = b.G(); else if ("function" != typeof b.eb) if (ha(b) || ia(b)) {
                d = [];
                for (var e = b.length, f = 0; f < e; f++) d.push(f)
            } else d = tb(b); else d = void 0;
            for (var e = ui(b), f = e.length, g = 0; g < f; g++) c.call(void 0, e[g], d && d[g], b)
        }
    }
    function wi(b, c) {
        this.b = {};
        this.a = [];
        this.c = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2) throw Error("Uneven number of arguments");
            for (var e = 0; e < d; e += 2) this.set(arguments[e], arguments[e + 1])
        } else if (b) {
            b instanceof wi ? (d = b.G(), e = b.eb()) : (d = tb(b), e = sb(b));
            for (var f = 0; f < d.length; f++) this.set(d[f], e[f])
        }
    }
    k = wi.prototype;
    k.Sb = function () {
        return this.c
    };
    k.eb = function () {
        xi(this);
        for (var b = [], c = 0; c < this.a.length; c++) b.push(this.b[this.a[c]]);
        return b
    };
    k.G = function () {
        xi(this);
        return this.a.concat()
    };
    k.pa=function(){return 0==this.c};k.clear=function(){this.b={};this.c=this.a.length=0};k.remove=function(b){return yi(this.b,b)?(delete this.b[b],this.c--,this.a.length>2*this.c&&xi(this),!0):!1};function xi(b){if(b.c!=b.a.length){for(var c=0,d=0;c<b.a.length;){var e=b.a[c];yi(b.b,e)&&(b.a[d++]=e);c++}b.a.length=d}if(b.c!=b.a.length){for(var f={},d=c=0;c<b.a.length;)e=b.a[c],yi(f,e)||(b.a[d++]=e,f[e]=1),c++;b.a.length=d}}k.get=function(b,c){return yi(this.b,b)?this.b[b]:c};
    k.set = function (b, c) {
        yi(this.b, b) || (this.c++, this.a.push(b));
        this.b[b] = c
    };
    k.forEach = function (b, c) {
        for (var d = this.G(), e = 0; e < d.length; e++) {
            var f = d[e], g = this.get(f);
            b.call(c, g, f, this)
        }
    };
    k.clone = function () {
        return new wi(this)
    };
    function yi(b, c) {
        return Object.prototype.hasOwnProperty.call(b, c)
    }
    function zi() {
        this.a = ua()
    }
    new zi;
    zi.prototype.set = function (b) {
        this.a = b
    };
    zi.prototype.get = function () {
        return this.a
    };
    function Ai(b) {
        $c.call(this);
        this.pd = b || window;
        this.Kd = x(this.pd, "resize", this.bk, !1, this);
        this.Ld = Kg(this.pd || window)
    }
    w(Ai, $c);
    k = Ai.prototype;
    k.Kd = null;
    k.pd = null;
    k.Ld = null;
    k.N = function () {
        Ai.S.N.call(this);
        this.Kd && (Wc(this.Kd), this.Kd = null);
        this.Ld = this.pd = null
    };
    k.bk = function () {
        var b = Kg(this.pd || window), c = this.Ld;
        b == c || b && c && b.width == c.width && b.height == c.height || (this.Ld = b, this.dispatchEvent("resize"))
    };
    function Bi(b, c, d, e, f) {
        if (!(Ib || Kb && Rb("525"))) return !0;
        if (Lb && f) return Ci(b);
        if (f && !e) return !1;
        ja(c) && (c = Di(c));
        if (!d && (17 == c || 18 == c || Lb && 91 == c)) return !1;
        if (Kb && e && d) switch (b) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (Ib && e && c == b) return !1;
        switch (b) {
            case 13:
                return !0;
            case 27:
                return !Kb
        }
        return Ci(b)
    }
    function Ci(b){if(48<=b&&57>=b||96<=b&&106>=b||65<=b&&90>=b||Kb&&0==b)return!0;switch(b){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Di(b){if(Jb)b=Ei(b);else if(Lb&&Kb)switch(b){case 93:b=91;break;}return b}
    function Ei(b) {
        switch (b) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return b
        }
    }
    function Fi(b, c) {
        $c.call(this);
        b && Gi(this, b, c)
    }
    w(Fi, $c);
    k = Fi.prototype;
    k.$ = null;
    k.Sd = null;
    k.We = null;
    k.Td = null;
    k.Ja = -1;
    k.Hb = -1;
    k.Ce = !1;
    var Hi={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ii={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Ji=Ib||Kb&&Rb("525"),Ki=Lb&&Jb;
Fi.prototype.a=function(b){Kb&&(17==this.Ja&&!b.i||18==this.Ja&&!b.b||Lb&&91==this.Ja&&!b.n)&&(this.Hb=this.Ja=-1);-1==this.Ja&&(b.i&&17!=b.e?this.Ja=17:b.b&&18!=b.e?this.Ja=18:b.n&&91!=b.e&&(this.Ja=91));Ji&&!Bi(b.e,this.Ja,b.d,b.i,b.b)?this.handleEvent(b):(this.Hb=Di(b.e),Ki&&(this.Ce=b.b))};Fi.prototype.b=function(b){this.Hb=this.Ja=-1;this.Ce=b.b};
Fi.prototype.handleEvent=function(b){var c=b.a,d,e,f=c.altKey;Ib&&"keypress"==b.type?(d=this.Hb,e=13!=d&&27!=d?c.keyCode:0):Kb&&"keypress"==b.type?(d=this.Hb,e=0<=c.charCode&&63232>c.charCode&&Ci(d)?c.charCode:0):Hb?(d=this.Hb,e=Ci(d)?c.keyCode:0):(d=c.keyCode||this.Hb,e=c.charCode||0,Ki&&(f=this.Ce),Lb&&63==e&&224==d&&(d=191));var g=d=Di(d),h=c.keyIdentifier;d?63232<=d&&d in Hi?g=Hi[d]:25==d&&b.d&&(g=9):h&&h in Ii&&(g=Ii[h]);this.Ja=g;b=new Li(g,e,0,c);b.b=f;this.dispatchEvent(b)};
function Gi(b,c,d){b.Td&&Mi(b);b.$=c;b.Sd=x(b.$,"keypress",b,d);b.We=x(b.$,"keydown",b.a,d,b);b.Td=x(b.$,"keyup",b.b,d,b)}function Mi(b){b.Sd&&(Wc(b.Sd),Wc(b.We),Wc(b.Td),b.Sd=null,b.We=null,b.Td=null);b.$=null;b.Ja=-1;b.Hb=-1}Fi.prototype.N=function(){Fi.S.N.call(this);Mi(this)};function Li(b,c,d,e){wc.call(this,e);this.type="key";this.e=b;this.p=c}w(Li,wc);function Ni(b,c){$c.call(this);var d=this.$=b;(d=la(d)&&1==d.nodeType?this.$:this.$?this.$.body:null)&&gh(d,"direction");this.a=x(this.$,Jb?"DOMMouseScroll":"mousewheel",this,c)}w(Ni,$c);
Ni.prototype.handleEvent=function(b){var c=0,d=0,e=0;b=b.a;if("mousewheel"==b.type){d=1;if(Ib||Kb&&(Mb||Rb("532.0")))d=40;e=Oi(-b.wheelDelta,d);m(b.wheelDeltaX)?(c=Oi(-b.wheelDeltaX,d),d=Oi(-b.wheelDeltaY,d)):d=e}else e=b.detail,100<e?e=3:-100>e&&(e=-3),m(b.axis)&&b.axis===b.HORIZONTAL_AXIS?c=e:d=e;ja(this.b)&&Vb(c,-this.b,this.b);ja(this.c)&&(d=Vb(d,-this.c,this.c));c=new Pi(e,b,0,d);this.dispatchEvent(c)};function Oi(b,c){return Kb&&(Lb||Nb)&&0!=b%c?b:b/c}
Ni.prototype.N=function(){Ni.S.N.call(this);Wc(this.a);this.a=null};function Pi(b,c,d,e){wc.call(this,c);this.type="mousewheel";this.detail=b;this.l=e}w(Pi,wc);function Qi(b,c,d){rc.call(this,b);this.a=c;b=m(d)?d:{};this.buttons=Ri(b);this.pressure=Si(b,this.buttons);this.bubbles=Ab(b,"bubbles",!1);this.cancelable=Ab(b,"cancelable",!1);this.view=Ab(b,"view",null);this.detail=Ab(b,"detail",null);this.screenX=Ab(b,"screenX",0);this.screenY=Ab(b,"screenY",0);this.clientX=Ab(b,"clientX",0);this.clientY=Ab(b,"clientY",0);this.button=Ab(b,"button",0);this.relatedTarget=Ab(b,"relatedTarget",null);this.pointerId=Ab(b,"pointerId",0);this.width=Ab(b,"width",0);this.height=
        Ab(b, "height", 0);
        this.pointerType = Ab(b, "pointerType", "");
        this.isPrimary = Ab(b, "isPrimary", !1);
        c.preventDefault && (this.preventDefault = function () {
            c.preventDefault()
        })
    }
    w(Qi, rc);
    function Ri(b) {
        if (b.buttons || Ti) b = b.buttons; else switch (b.which) {
            case 1:
                b = 1;
                break;
            case 2:
                b = 4;
                break;
            case 3:
                b = 2;
                break;
            default:
                b = 0
        }
        return b
    }
    function Si(b, c) {
        var d = 0;
        b.pressure ? d = b.pressure : d = c ? .5 : 0;
        return d
    }
    var Ti = !1;
    try {
        Ti = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (Ui) {
    }
    function Vi(b, c) {
        var d = Og("CANVAS");
        m(b) && (d.width = b);
        m(c) && (d.height = c);
        return d.getContext("2d")
    }
    var Wi=function(){var b;return function(){if(!m(b))if(ba.getComputedStyle){var c=Og("P"),d,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(c);for(var f in e)f in c.style&&(c.style[f]="translate(1px,1px)",d=ba.getComputedStyle(c).getPropertyValue(e[f]));Sg(c);b=d&&"none"!==d}else b=!1;return b}}(),Xi=function(){var b;return function(){if(!m(b))if(ba.getComputedStyle){var c=Og("P"),
d,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(c);for(var f in e)f in c.style&&(c.style[f]="translate3d(1px,1px,1px)",d=ba.getComputedStyle(c).getPropertyValue(e[f]));Sg(c);b=d&&"none"!==d}else b=!1;return b}}();function Yi(b,c){var d=b.style;d.WebkitTransform=c;d.MozTransform=c;d.a=c;d.msTransform=c;d.transform=c;Ib&&!Ub&&(b.style.transformOrigin="0 0")}
    function Zi(b, c) {
        var d;
        if (Xi()) {
            if (m(6)) {
                var e = Array(16);
                for (d = 0; 16 > d; ++d) e[d] = c[d].toFixed(6);
                d = e.join(",")
            } else d = c.join(",");
            Yi(b, "matrix3d(" + d + ")")
        } else if (Wi()) {
            e = [c[0], c[1], c[4], c[5], c[12], c[13]];
            if (m(6)) {
                var f = Array(6);
                for (d = 0; 6 > d; ++d) f[d] = e[d].toFixed(6);
                d = f.join(",")
            } else d = e.join(",");
            Yi(b, "matrix(" + d + ")")
        } else b.style.left = Math.round(c[12]) + "px", b.style.top = Math.round(c[13]) + "px"
    }
    var $i = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
    function aj(b, c) {
        var d, e, f = $i.length;
        for (e = 0; e < f; ++e) try {
            if (d = b.getContext($i[e], c), null !== d) return d
        } catch (g) {
        }
        return null
    }
    var bj, cj = ba.devicePixelRatio || 1, dj = !1, ej = function () {
            if (!("HTMLCanvasElement" in ba)) return !1;
            try {
                var b = Vi();
                if (null === b) return !1;
                m(b.setLineDash) && (dj = !0);
                return !0
            } catch (c) {
                return !1
            }
        }(), fj = "DeviceOrientationEvent" in ba, gj = "geolocation" in ba.navigator, hj = "ontouchstart" in ba,
        ij = "PointerEvent" in ba, jj = !!ba.navigator.msPointerEnabled, kj = !1, lj, nj = [];
    if ("WebGLRenderingContext" in ba) try {
        var oj = aj(Og("CANVAS"), {failIfMajorPerformanceCaveat: !0});
        null !== oj && (kj = !0, lj = oj.getParameter(oj.MAX_TEXTURE_SIZE), nj = oj.getSupportedExtensions())
    } catch (pj) {
    }
    bj = kj;
    wa = nj;
    va = lj;
    function qj(b, c) {
        this.a = b;
        this.e = c
    }
    function rj(b) {
        qj.call(this, b, {
            mousedown: this.nk,
            mousemove: this.ok,
            mouseup: this.rk,
            mouseover: this.qk,
            mouseout: this.pk
        });
        this.b = b.b;
        this.c = []
    }
    w(rj, qj);
    function sj(b, c) {
        for (var d = b.c, e = c.clientX, f = c.clientY, g = 0, h = d.length, l; g < h && (l = d[g]); g++) {
            var n = Math.abs(f - l[1]);
            if (25 >= Math.abs(e - l[0]) && 25 >= n) return !0
        }
        return !1
    }
    function tj(b) {
        var c = uj(b, b.a), d = c.preventDefault;
        c.preventDefault = function () {
            b.preventDefault();
            d()
        };
        c.pointerId = 1;
        c.isPrimary = !0;
        c.pointerType = "mouse";
        return c
    }
    k = rj.prototype;
    k.nk=function(b){if(!sj(this,b)){(1).toString()in this.b&&this.cancel(b);var c=tj(b);this.b[(1).toString()]=b;vj(this.a,wj,c,b)}};k.ok=function(b){if(!sj(this,b)){var c=tj(b);vj(this.a,xj,c,b)}};k.rk=function(b){if(!sj(this,b)){var c=this.b[(1).toString()];c&&c.button===b.button&&(c=tj(b),vj(this.a,yj,c,b),zb(this.b,(1).toString()))}};k.qk=function(b){if(!sj(this,b)){var c=tj(b);zj(this.a,c,b)}};k.pk=function(b){if(!sj(this,b)){var c=tj(b);Aj(this.a,c,b)}};
k.cancel=function(b){var c=tj(b);this.a.cancel(c,b);zb(this.b,(1).toString())};function Bj(b){qj.call(this,b,{MSPointerDown:this.wk,MSPointerMove:this.xk,MSPointerUp:this.Ak,MSPointerOut:this.yk,MSPointerOver:this.zk,MSPointerCancel:this.vk,MSGotPointerCapture:this.tk,MSLostPointerCapture:this.uk});this.b=b.b;this.c=["","unavailable","touch","pen","mouse"]}w(Bj,qj);function Cj(b,c){var d=c;ja(c.a.pointerType)&&(d=uj(c,c.a),d.pointerType=b.c[c.a.pointerType]);return d}k=Bj.prototype;k.wk=function(b){this.b[b.a.pointerId]=b;var c=Cj(this,b);vj(this.a,wj,c,b)};
k.xk=function(b){var c=Cj(this,b);vj(this.a,xj,c,b)};k.Ak=function(b){var c=Cj(this,b);vj(this.a,yj,c,b);zb(this.b,b.a.pointerId)};k.yk=function(b){var c=Cj(this,b);Aj(this.a,c,b)};k.zk=function(b){var c=Cj(this,b);zj(this.a,c,b)};k.vk=function(b){var c=Cj(this,b);this.a.cancel(c,b);zb(this.b,b.a.pointerId)};k.uk=function(b){this.a.dispatchEvent(new Qi("lostpointercapture",b,b.a))};k.tk=function(b){this.a.dispatchEvent(new Qi("gotpointercapture",b,b.a))};function Dj(b){qj.call(this,b,{pointerdown:this.bn,pointermove:this.cn,pointerup:this.fn,pointerout:this.dn,pointerover:this.en,pointercancel:this.an,gotpointercapture:this.Aj,lostpointercapture:this.mk})}w(Dj,qj);k=Dj.prototype;k.bn=function(b){Ej(this.a,b)};k.cn=function(b){Ej(this.a,b)};k.fn=function(b){Ej(this.a,b)};k.dn=function(b){Ej(this.a,b)};k.en=function(b){Ej(this.a,b)};k.an=function(b){Ej(this.a,b)};k.mk=function(b){Ej(this.a,b)};k.Aj=function(b){Ej(this.a,b)};function Fj(b,c){qj.call(this,b,{touchstart:this.ho,touchmove:this.fo,touchend:this.eo,touchcancel:this.co});this.b=b.b;this.g=c;this.c=void 0;this.f=0;this.d=void 0}w(Fj,qj);k=Fj.prototype;k.lh=function(){this.f=0;this.d=void 0};
function Gj(b,c,d){c=uj(c,d);c.pointerId=d.identifier+2;c.bubbles=!0;c.cancelable=!0;c.detail=b.f;c.button=0;c.buttons=1;c.width=d.webkitRadiusX||d.radiusX||0;c.height=d.webkitRadiusY||d.radiusY||0;c.pressure=d.webkitForce||d.force||.5;c.isPrimary=b.c===d.identifier;c.pointerType="touch";c.clientX=d.clientX;c.clientY=d.clientY;c.screenX=d.screenX;c.screenY=d.screenY;return c}
function Hj(b,c,d){function e(){c.preventDefault()}var f=Array.prototype.slice.call(c.a.changedTouches),g=f.length,h,l;for(h=0;h<g;++h)l=Gj(b,c,f[h]),l.preventDefault=e,d.call(b,c,l)}
k.ho=function(b){var c=b.a.touches,d=tb(this.b),e=d.length;if(e>=c.length){var f=[],g,h,l;for(g=0;g<e;++g){h=d[g];l=this.b[h];var n;if(!(n=1==h))a:{n=c.length;for(var p=void 0,q=0;q<n;q++)if(p=c[q],p.identifier===h-2){n=!0;break a}n=!1}n||f.push(l.ec)}for(g=0;g<f.length;++g)this.De(b,f[g])}c=rb(this.b);if(0===c||1===c&&(1).toString()in this.b)this.c=b.a.changedTouches[0].identifier,m(this.d)&&ba.clearTimeout(this.d);Ij(this,b);this.f++;Hj(this,b,this.Xm)};
k.Xm=function(b,c){this.b[c.pointerId]={target:c.target,ec:c,Vg:c.target};var d=this.a;c.bubbles=!0;vj(d,Jj,c,b);d=this.a;c.bubbles=!1;vj(d,Kj,c,b);vj(this.a,wj,c,b)};k.fo=function(b){b.preventDefault();Hj(this,b,this.sk)};k.sk=function(b,c){var d=this.b[c.pointerId];if(d){var e=d.ec,f=d.Vg;vj(this.a,xj,c,b);e&&f!==c.target&&(e.relatedTarget=c.target,c.relatedTarget=f,e.target=f,c.target?(Aj(this.a,e,b),zj(this.a,c,b)):(c.target=f,c.relatedTarget=null,this.De(b,c)));d.ec=c;d.Vg=c.target}};
k.eo=function(b){Ij(this,b);Hj(this,b,this.io)};k.io=function(b,c){vj(this.a,yj,c,b);this.a.ec(c,b);var d=this.a;c.bubbles=!1;vj(d,Lj,c,b);zb(this.b,c.pointerId);c.isPrimary&&(this.c=void 0,this.d=ba.setTimeout(ra(this.lh,this),200))};k.co=function(b){Hj(this,b,this.De)};k.De=function(b,c){this.a.cancel(c,b);this.a.ec(c,b);var d=this.a;c.bubbles=!1;vj(d,Lj,c,b);zb(this.b,c.pointerId);c.isPrimary&&(this.c=void 0,this.d=ba.setTimeout(ra(this.lh,this),200))};
    function Ij(b, c) {
        var d = b.g.c, e = c.a.changedTouches[0];
        if (b.c === e.identifier) {
            var f = [e.clientX, e.clientY];
            d.push(f);
            ba.setTimeout(function () {
                $a(d, f)
            }, 2500)
        }
    }
    function Mj(b) {
        $c.call(this);
        this.$ = b;
        this.b = {};
        this.c = {};
        this.a = [];
        ij ? Nj(this, new Dj(this)) : jj ? Nj(this, new Bj(this)) : (b = new rj(this), Nj(this, b), hj && Nj(this, new Fj(this, b)));
        b = this.a.length;
        for (var c, d = 0; d < b; d++) c = this.a[d], Oj(this, tb(c.e))
    }
    w(Mj, $c);
    function Nj(b, c) {
        var d = tb(c.e);
        d && (Sa(d, function (b) {
            var d = c.e[b];
            d && (this.c[b] = ra(d, c))
        }, b), b.a.push(c))
    }
    Mj.prototype.d = function (b) {
        var c = this.c[b.type];
        c && c(b)
    };
    function Oj(b, c) {
        Sa(c, function (b) {
            x(this.$, b, this.d, !1, this)
        }, b)
    }
    function Pj(b,c){Sa(c,function(b){Vc(this.$,b,this.d,!1,this)},b)}function uj(b,c){for(var d={},e,f=0,g=Qj.length;f<g;f++)e=Qj[f][0],d[e]=b[e]||c[e]||Qj[f][1];return d}Mj.prototype.ec=function(b,c){b.bubbles=!0;vj(this,Rj,b,c)};Mj.prototype.cancel=function(b,c){vj(this,Sj,b,c)};function Aj(b,c,d){b.ec(c,d);var e=c.relatedTarget;null!==e&&Vg(c.target,e)||(c.bubbles=!1,vj(b,Lj,c,d))}
function zj(b,c,d){c.bubbles=!0;vj(b,Jj,c,d);var e=c.relatedTarget;null!==e&&Vg(c.target,e)||(c.bubbles=!1,vj(b,Kj,c,d))}function vj(b,c,d,e){b.dispatchEvent(new Qi(c,e,d))}function Ej(b,c){b.dispatchEvent(new Qi(c.type,c,c.a))}Mj.prototype.N=function(){for(var b=this.a.length,c,d=0;d<b;d++)c=this.a[d],Pj(this,tb(c.e));Mj.S.N.call(this)};
var xj="pointermove",wj="pointerdown",yj="pointerup",Jj="pointerover",Rj="pointerout",Kj="pointerenter",Lj="pointerleave",Sj="pointercancel",Qj=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",
!1],["type",""],["target",null],["currentTarget",null],["which",0]];function Tj(b,c,d,e,f){uh.call(this,b,c,f);this.a=d;this.originalEvent=d.a;this.pixel=c.Bd(this.originalEvent);this.coordinate=c.ma(this.pixel);this.dragging=m(e)?e:!1}w(Tj,uh);Tj.prototype.preventDefault=function(){Tj.S.preventDefault.call(this);this.a.preventDefault()};Tj.prototype.gb=function(){Tj.S.gb.call(this);this.a.gb()};function Uj(b,c,d,e,f){Tj.call(this,b,c,d.a,e,f);this.b=d}w(Uj,Tj);
function Vj(b){$c.call(this);this.c=b;this.f=0;this.g=!1;this.b=this.i=this.d=null;b=this.c.b;this.l=0;this.n={};this.e=new Mj(b);this.a=null;this.i=x(this.e,wj,this.Xj,!1,this);this.p=x(this.e,xj,this.zn,!1,this)}w(Vj,$c);function Wj(b,c){var d;d=new Uj(Xj,b.c,c);b.dispatchEvent(d);0!==b.f?(ba.clearTimeout(b.f),b.f=0,d=new Uj(Yj,b.c,c),b.dispatchEvent(d)):b.f=ba.setTimeout(ra(function(){this.f=0;var b=new Uj(Zj,this.c,c);this.dispatchEvent(b)},b),250)}
function ak(b,c){c.type==bk||c.type==ck?delete b.n[c.pointerId]:c.type==dk&&(b.n[c.pointerId]=!0);b.l=rb(b.n)}k=Vj.prototype;k.ig=function(b){ak(this,b);var c=new Uj(bk,this.c,b);this.dispatchEvent(c);!this.g&&0===b.button&&Wj(this,this.b);0===this.l&&(Sa(this.d,Wc),this.d=null,this.g=!1,this.b=null,qc(this.a),this.a=null)};
k.Xj=function(b){ak(this,b);var c=new Uj(dk,this.c,b);this.dispatchEvent(c);this.b=b;null===this.d&&(this.a=new Mj(document),this.d=[x(this.a,ek,this.Ok,!1,this),x(this.a,bk,this.ig,!1,this),x(this.e,ck,this.ig,!1,this)])};k.Ok=function(b){if(b.clientX!=this.b.clientX||b.clientY!=this.b.clientY){this.g=!0;var c=new Uj(fk,this.c,b,this.g);this.dispatchEvent(c)}b.preventDefault()};k.zn=function(b){this.dispatchEvent(new Uj(b.type,this.c,b,null!==this.b&&(b.clientX!=this.b.clientX||b.clientY!=this.b.clientY)))};
k.N=function(){null!==this.p&&(Wc(this.p),this.p=null);null!==this.i&&(Wc(this.i),this.i=null);null!==this.d&&(Sa(this.d,Wc),this.d=null);null!==this.a&&(qc(this.a),this.a=null);null!==this.e&&(qc(this.e),this.e=null);Vj.S.N.call(this)};var Zj="singleclick",Xj="click",Yj="dblclick",fk="pointerdrag",ek="pointermove",dk="pointerdown",bk="pointerup",ck="pointercancel",gk={zo:Zj,oo:Xj,po:Yj,so:fk,vo:ek,ro:dk,yo:bk,xo:"pointerover",wo:"pointerout",to:"pointerenter",uo:"pointerleave",qo:ck};function hk(b){fd.call(this);var c=Db(b);c.brightness=m(b.brightness)?b.brightness:0;c.contrast=m(b.contrast)?b.contrast:1;c.hue=m(b.hue)?b.hue:0;c.opacity=m(b.opacity)?b.opacity:1;c.saturation=m(b.saturation)?b.saturation:1;c.visible=m(b.visible)?b.visible:!0;c.maxResolution=m(b.maxResolution)?b.maxResolution:Infinity;c.minResolution=m(b.minResolution)?b.minResolution:0;this.u(c)}w(hk,fd);k=hk.prototype;k.Bb=function(){return this.get("brightness")};k.Cb=function(){return this.get("contrast")};
k.Db=function(){return this.get("hue")};function ik(b){var c=b.Bb(),d=b.Cb(),e=b.Db(),f=b.Jb(),g=b.Gb(),h=b.Ue(),l=b.fb(),n=b.I(),p=b.Eb(),q=b.Fb();return{layer:b,brightness:Vb(c,-1,1),contrast:Math.max(d,0),hue:e,opacity:Vb(f,0,1),saturation:Math.max(g,0),i:h,visible:l,$b:!0,extent:n,maxResolution:p,minResolution:Math.max(q,0)}}k.I=function(){return this.get("extent")};k.Eb=function(){return this.get("maxResolution")};k.Fb=function(){return this.get("minResolution")};k.Jb=function(){return this.get("opacity")};
    k.Gb = function () {
        return this.get("saturation")
    };
    k.fb = function () {
        return this.get("visible")
    };
    k.gc = function (b) {
        this.set("brightness", b)
    };
    k.hc = function (b) {
        this.set("contrast", b)
    };
    k.ic = function (b) {
        this.set("hue", b)
    };
    k.bc = function (b) {
        this.set("extent", b)
    };
    k.jc = function (b) {
        this.set("maxResolution", b)
    };
    k.kc = function (b) {
        this.set("minResolution", b)
    };
    k.cc = function (b) {
        this.set("opacity", b)
    };
    k.lc = function (b) {
        this.set("saturation", b)
    };
    k.mc = function (b) {
        this.set("visible", b)
    };
    function jk() {
    }
    function kk(b, c, d, e, f, g) {
        rc.call(this, b, c);
        this.vectorContext = d;
        this.frameState = e;
        this.context = f;
        this.glContext = g
    }
    w(kk, rc);
    function F(b) {
        var c = Db(b);
        delete c.source;
        hk.call(this, c);
        this.f = this.D = this.q = null;
        m(b.map) && this.setMap(b.map);
        x(this, hd("source"), this.dk, !1, this);
        this.Kc(m(b.source) ? b.source : null)
    }
    w(F, hk);
    function lk(b, c) {
        return b.visible && c >= b.minResolution && c < b.maxResolution
    }
    k = F.prototype;
    k.Se = function (b) {
        b = m(b) ? b : [];
        b.push(ik(this));
        return b
    };
    k.V = function () {
        var b = this.get("source");
        return m(b) ? b : null
    };
    k.Ue = function () {
        var b = this.V();
        return null === b ? "undefined" : b.o
    };
    k.Al = function () {
        this.k()
    };
    k.dk = function () {
        null !== this.f && (Wc(this.f), this.f = null);
        var b = this.V();
        null !== b && (this.f = x(b, "change", this.Al, !1, this));
        this.k()
    };
    k.setMap = function (b) {
        Wc(this.q);
        this.k();
        Wc(this.D);
        null !== b && (this.q = x(b, "precompose", function (b) {
            var d = ik(this);
            d.$b = !1;
            b.frameState.layerStatesArray.push(d);
            b.frameState.layerStates[ma(this)] = d
        }, !1, this), this.D = x(this, "change", b.render, !1, b))
    };
    k.Kc = function (b) {
        this.set("source", b)
    };
    function mk(b, c, d, e, f) {
        $c.call(this);
        this.f = f;
        this.extent = b;
        this.e = d;
        this.resolution = c;
        this.state = e
    }
    w(mk, $c);
    mk.prototype.I = function () {
        return this.extent
    };
    function nk(b, c, d, e, f, g, h, l) {
        Dd(b);
        0 === c && 0 === d || Gd(b, c, d);
        1 == e && 1 == f || Hd(b, e, f);
        0 !== g && Id(b, g);
        0 === h && 0 === l || Gd(b, h, l);
        return b
    }
    function ok(b, c) {
        return b[0] == c[0] && b[1] == c[1] && b[4] == c[4] && b[5] == c[5] && b[12] == c[12] && b[13] == c[13]
    }
    function pk(b, c, d) {
        var e = b[1], f = b[5], g = b[13], h = c[0];
        c = c[1];
        d[0] = b[0] * h + b[4] * c + b[12];
        d[1] = e * h + f * c + g;
        return d
    }
    function qk(b) {
        cd.call(this);
        this.b = b
    }
    w(qk, cd);
    k = qk.prototype;
    k.Oa = ca;
    k.dc = function (b, c, d, e) {
        b = b.slice();
        pk(c.pixelToCoordinateMatrix, b, b);
        if (this.Oa(b, c, oe, this)) return d.call(e, this.b)
    };
    k.be = ne;
    k.zd = function (b, c) {
        return function (d, e) {
            return Sh(b, d, e, function (b) {
                c[d] || (c[d] = {});
                c[d][b.a.toString()] = b
            })
        }
    };
    k.Dl = function (b) {
        2 === b.target.state && rk(this)
    };
    function sk(b, c) {
        var d = c.state;
        2 != d && 3 != d && x(c, "change", b.Dl, !1, b);
        0 == d && (c.load(), d = c.state);
        return 2 == d
    }
    function rk(b){var c=b.b;c.fb()&&"ready"==c.Ue()&&b.k()}function tk(b,c){Ah(c.b)&&b.postRenderFunctions.push(ta(function(b,c,f){c=ma(b).toString();b=b.b;f=f.usedTiles[c];for(var g;Ah(b)&&!(c=b.a.qc,g=c.a[0].toString(),g in f&&f[g].contains(c.a));)b.pop().Yc()},c))}function uk(b,c){if(null!=c){var d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],b[ma(d).toString()]=d}}function vk(b,c){var d=c.U;m(d)&&(ia(d)?b.logos[d]="":la(d)&&(b.logos[d.src]=d.href))}
function wk(b,c,d,e){c=ma(c).toString();d=d.toString();c in b?d in b[c]?(b=b[c][d],e.a<b.a&&(b.a=e.a),e.d>b.d&&(b.d=e.d),e.b<b.b&&(b.b=e.b),e.c>b.c&&(b.c=e.c)):b[c][d]=e:(b[c]={},b[c][d]=e)}function xk(b,c,d){return[c*(Math.round(b[0]/c)+d[0]%2/2),c*(Math.round(b[1]/c)+d[1]%2/2)]}
    function yk(b, c, d, e, f, g, h, l, n, p) {
        var q = ma(c).toString();
        q in b.wantedTiles || (b.wantedTiles[q] = {});
        var r = b.wantedTiles[q];
        b = b.tileQueue;
        var t = d.minZoom, v, A, z, E, B, y;
        for (y = h; y >= t; --y) for (A = ig(d, g, y, A), z = d.na(y), E = A.a; E <= A.d; ++E) for (B = A.b; B <= A.c; ++B) h - y <= l ? (v = c.Ub(y, E, B, e, f), 0 == v.state && (r[dg(v.a)] = !0, v.hb() in b.c || zk(b, [v, q, fg(d, v.a), z])), m(n) && n.call(p, v)) : c.xf(y, E, B)
    }
    function Ak(b) {
        this.o = b.opacity;
        this.r = b.rotateWithView;
        this.p = b.rotation;
        this.n = b.scale;
        this.Y = b.snapToPixel
    }
    k = Ak.prototype;
    k.fe = function () {
        return this.o
    };
    k.Hd = function () {
        return this.r
    };
    k.ge = function () {
        return this.p
    };
    k.he = function () {
        return this.n
    };
    k.Id = function () {
        return this.Y
    };
    k.ie = function (b) {
        this.p = b
    };
    k.je = function (b) {
        this.n = b
    };
    function Bk(b) {
        b = m(b) ? b : {};
        this.e = m(b.anchor) ? b.anchor : [.5, .5];
        this.d = null;
        this.b = m(b.anchorOrigin) ? b.anchorOrigin : "top-left";
        this.g = m(b.anchorXUnits) ? b.anchorXUnits : "fraction";
        this.i = m(b.anchorYUnits) ? b.anchorYUnits : "fraction";
        var c = m(b.crossOrigin) ? b.crossOrigin : null, d = m(b.img) ? b.img : null,
            e = m(b.imgSize) ? b.imgSize : null, f = b.src;
        m(f) && 0 !== f.length || null === d || (f = d.src);
        var g = m(b.src) ? 0 : 2, h = Ck.Ia(), l = h.get(f, c);
        null === l && (l = new Dk(d, f, e, c, g), h.set(f, c, l));
        this.a = l;
        this.W = m(b.offset) ? b.offset : [0, 0];
        this.c =
            m(b.offsetOrigin)?b.offsetOrigin:"top-left";this.f=null;this.l=m(b.size)?b.size:null;Ak.call(this,{opacity:m(b.opacity)?b.opacity:1,rotation:m(b.rotation)?b.rotation:0,scale:m(b.scale)?b.scale:1,snapToPixel:m(b.snapToPixel)?b.snapToPixel:!0,rotateWithView:m(b.rotateWithView)?b.rotateWithView:!1})}w(Bk,Ak);k=Bk.prototype;
k.rb=function(){if(null!==this.d)return this.d;var b=this.e,c=this.Ya();if("fraction"==this.g||"fraction"==this.i){if(null===c)return null;b=this.e.slice();"fraction"==this.g&&(b[0]*=c[0]);"fraction"==this.i&&(b[1]*=c[1])}if("top-left"!=this.b){if(null===c)return null;b===this.e&&(b=this.e.slice());if("top-right"==this.b||"bottom-right"==this.b)b[0]=-b[0]+c[0];if("bottom-left"==this.b||"bottom-right"==this.b)b[1]=-b[1]+c[1]}return this.d=b};k.Kb=function(){return this.a.a};k.Dd=function(){return this.a.b};
k.hd=function(){return this.a.c};k.ee=function(){var b=this.a;if(null===b.e)if(b.i){var c=b.b[0],d=b.b[1],e=Vi(c,d);e.fillRect(0,0,c,d);b.e=e.canvas}else b.e=b.a;return b.e};k.wb=function(){if(null!==this.f)return this.f;var b=this.W;if("top-left"!=this.c){var c=this.Ya(),d=this.a.b;if(null===c||null===d)return null;b=b.slice();if("top-right"==this.c||"bottom-right"==this.c)b[0]=d[0]-c[0]-b[0];if("bottom-left"==this.c||"bottom-right"==this.c)b[1]=d[1]-c[1]-b[1]}return this.f=b};k.qm=function(){return this.a.f};
k.Ya=function(){return null===this.l?this.a.b:this.l};k.Ye=function(b,c){return x(this.a,"change",b,!1,c)};k.load=function(){this.a.load()};k.wf=function(b,c){Vc(this.a,"change",b,!1,c)};function Dk(b,c,d,e,f){$c.call(this);this.e=null;this.a=null===b?new Image:b;null!==e&&(this.a.crossOrigin=e);this.d=null;this.c=f;this.b=d;this.f=c;this.i=!1}w(Dk,$c);Dk.prototype.g=function(){this.c=3;Sa(this.d,Wc);this.d=null;this.dispatchEvent("change")};
Dk.prototype.p=function(){this.c=2;this.b=[this.a.width,this.a.height];Sa(this.d,Wc);this.d=null;var b=Vi(1,1);b.drawImage(this.a,0,0);try{b.getImageData(0,0,1,1)}catch(c){this.i=!0}this.dispatchEvent("change")};Dk.prototype.load=function(){if(0==this.c){this.c=1;this.d=[Uc(this.a,"error",this.g,!1,this),Uc(this.a,"load",this.p,!1,this)];try{this.a.src=this.f}catch(b){this.g()}}};function Ck(){this.a={};this.b=0}da(Ck);Ck.prototype.clear=function(){this.a={};this.b=0};
Ck.prototype.get=function(b,c){var d=c+":"+b;return d in this.a?this.a[d]:null};Ck.prototype.set=function(b,c,d){this.a[c+":"+b]=d;++this.b};function Ek(b,c){mc.call(this);this.f=c;this.d={};this.n={}}w(Ek,mc);function Fk(b){var c=b.viewState,d=b.coordinateToPixelMatrix;nk(d,b.size[0]/2,b.size[1]/2,1/c.resolution,-1/c.resolution,-c.rotation,-c.center[0],-c.center[1]);Fd(d,b.pixelToCoordinateMatrix)}k=Ek.prototype;k.N=function(){pb(this.d,qc);Ek.S.N.call(this)};
function Gk(){var b=Ck.Ia();if(32<b.b){var c=0,d,e;for(d in b.a){e=b.a[d];var f;if(f=0===(c++&3))Bc(e)?e=bd(e,void 0,void 0):(e=Qc(e),e=!!e&&Kc(e,void 0,void 0)),f=!e;f&&(delete b.a[d],--b.b)}}}k.df=function(b,c,d,e,f,g){var h,l=c.viewState,n=l.resolution,p=l.projection,l=b;if(p.e){h=p.I();var p=ie(h),q=b[0];if(q<h[0]||q>h[2])l=Math.ceil((h[0]-q)/p),l=[q+p*l,b[1]]}p=c.layerStatesArray;for(q=p.length-1;0<=q;--q){h=p[q];var r=h.layer;if(lk(h,n)&&f.call(g,r)&&(h=Hk(this,r).Oa(Eh(r.V())?l:b,c,d,e)))return h}};
k.Gg=function(b,c,d,e,f,g){var h,l=c.viewState.resolution,n=c.layerStatesArray,p;for(p=n.length-1;0<=p;--p){h=n[p];var q=h.layer;if(lk(h,l)&&f.call(g,q)&&(h=Hk(this,q).dc(b,c,d,e)))return h}};k.Hg=function(b,c,d,e){b=this.df(b,c,oe,this,d,e);return m(b)};function Hk(b,c){var d=ma(c).toString();if(d in b.d)return b.d[d];var e=b.He(c);b.d[d]=e;b.n[d]=x(e,"change",b.Mj,!1,b);return e}k.Mj=function(){this.f.render()};k.qe=ca;
    k.En = function (b, c) {
        for (var d in this.d) if (!(null !== c && d in c.layerStates)) {
            var e = d, f = this.d[e];
            delete this.d[e];
            Wc(this.n[e]);
            delete this.n[e];
            qc(f)
        }
    };
    function Ik(b, c) {
        for (var d in b.d) if (!(d in c.layerStates)) {
            c.postRenderFunctions.push(ra(b.En, b));
            break
        }
    }
    function Jk(b, c) {
        this.g = b;
        this.e = c;
        this.a = [];
        this.b = [];
        this.c = {}
    }
    Jk.prototype.clear = function () {
        this.a.length = 0;
        this.b.length = 0;
        yb(this.c)
    };
    function Kk(b) {
        var c = b.a, d = b.b, e = c[0];
        1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), Lk(b, 0));
        c = b.e(e);
        delete b.c[c];
        return e
    }
    function zk(b, c) {
        var d = b.g(c);
        Infinity != d && (b.a.push(c), b.b.push(d), b.c[b.e(c)] = !0, Mk(b, 0, b.a.length - 1))
    }
    Jk.prototype.Sb = function () {
        return this.a.length
    };
    Jk.prototype.pa = function () {
        return 0 === this.a.length
    };
    function Lk(b, c) {
        for (var d = b.a, e = b.b, f = d.length, g = d[c], h = e[c], l = c; c < f >> 1;) {
            var n = 2 * c + 1, p = 2 * c + 2, n = p < f && e[p] < e[n] ? p : n;
            d[c] = d[n];
            e[c] = e[n];
            c = n
        }
        d[c] = g;
        e[c] = h;
        Mk(b, l, c)
    }
    function Mk(b, c, d) {
        var e = b.a;
        b = b.b;
        for (var f = e[d], g = b[d]; d > c;) {
            var h = d - 1 >> 1;
            if (b[h] > g) e[d] = e[h], b[d] = b[h], d = h; else break
        }
        e[d] = f;
        b[d] = g
    }
    function Nk(b) {
        var c = b.g, d = b.a, e = b.b, f = 0, g = d.length, h, l, n;
        for (l = 0; l < g; ++l) h = d[l], n = c(h), Infinity == n ? delete b.c[b.e(h)] : (e[f] = n, d[f++] = h);
        d.length = f;
        e.length = f;
        for (c = (b.a.length >> 1) - 1; 0 <= c; c--) Lk(b, c)
    }
    function Ok(b, c) {
        Jk.call(this, function (c) {
            return b.apply(null, c)
        }, function (b) {
            return b[0].hb()
        });
        this.i = c;
        this.d = 0
    }
    w(Ok, Jk);
    Ok.prototype.f = function (b) {
        b = b.target;
        var c = b.state;
        if (2 === c || 3 === c || 4 === c) Vc(b, "change", this.f, !1, this), --this.d, this.i()
    };
    function Pk(b, c, d) {
        this.d = b;
        this.c = c;
        this.f = d;
        this.a = [];
        this.b = this.e = 0
    }
    Pk.prototype.update = function (b, c) {
        this.a.push(b, c, ua())
    };
    function Qk(b, c) {
        var d = b.d, e = b.b, f = b.c - e, g = Rk(b);
        return Yf({
            source: c, duration: g, easing: function (b) {
                return e * (Math.exp(d * b * g) - 1) / f
            }
        })
    }
    function Rk(b) {
        return Math.log(b.c / b.b) / b.d
    }
    function Sk(b) {
        fd.call(this);
        this.n = null;
        this.d(!0);
        this.handleEvent = b.handleEvent
    }
    w(Sk, fd);
    Sk.prototype.b = function () {
        return this.get("active")
    };
    Sk.prototype.d = function (b) {
        this.set("active", b)
    };
    Sk.prototype.setMap = function (b) {
        this.n = b
    };
    function Tk(b, c, d, e, f) {
        if (null != d) {
            var g = c.xa(), h = c.Da();
            m(g) && m(h) && m(f) && 0 < f && (b.Ha(Zf({
                rotation: g,
                duration: f,
                easing: Uf
            })), m(e) && b.Ha(Yf({source: h, duration: f, easing: Uf})));
            c.rotate(d, e)
        }
    }
    function Uk(b, c, d, e, f) {
        var g = c.wa();
        d = c.constrainResolution(g, d, 0);
        Vk(b, c, d, e, f)
    }
    function Vk(b, c, d, e, f) {
        if (null != d) {
            var g = c.wa(), h = c.Da();
            m(g) && m(h) && m(f) && 0 < f && (b.Ha($f({
                resolution: g,
                duration: f,
                easing: Uf
            })), m(e) && b.Ha(Yf({source: h, duration: f, easing: Uf})));
            if (null != e) {
                var l;
                b = c.Da();
                f = c.wa();
                m(b) && m(f) && (l = [e[0] - d * (e[0] - b[0]) / f, e[1] - d * (e[1] - b[1]) / f]);
                c.Xa(l)
            }
            c.Pb(d)
        }
    }
    function Wk(b) {
        b = m(b) ? b : {};
        this.c = m(b.delta) ? b.delta : 1;
        Sk.call(this, {handleEvent: Xk});
        this.e = m(b.duration) ? b.duration : 250
    }
    w(Wk, Sk);
    function Xk(b) {
        var c = !1, d = b.a;
        if (b.type == Yj) {
            var c = b.map, e = b.coordinate, d = d.d ? -this.c : this.c, f = c.P();
            Uk(c, f, d, e, this.e);
            b.preventDefault();
            c = !0
        }
        return !c
    }
    function Yk(b) {
        b = b.a;
        return b.b && !b.g && b.d
    }
    function Zk(b) {
        return "pointermove" == b.type
    }
    function $k(b) {
        return b.type == Zj
    }
    function al(b) {
        b = b.a;
        return !b.b && !b.g && !b.d
    }
    function bl(b) {
        b = b.a;
        return !b.b && !b.g && b.d
    }
    function cl(b) {
        b = b.a.target.tagName;
        return "INPUT" !== b && "SELECT" !== b && "TEXTAREA" !== b
    }
    function dl(b) {
        return 1 == b.b.pointerId
    }
    function el(b) {
        b = m(b) ? b : {};
        Sk.call(this, {handleEvent: m(b.handleEvent) ? b.handleEvent : fl});
        this.Oc = m(b.handleDownEvent) ? b.handleDownEvent : ne;
        this.Ae = m(b.handleDragEvent) ? b.handleDragEvent : ca;
        this.ai = m(b.handleMoveEvent) ? b.handleMoveEvent : ca;
        this.bi = m(b.handleUpEvent) ? b.handleUpEvent : ne;
        this.l = !1;
        this.U = {};
        this.f = []
    }
    w(el, Sk);
    function gl(b) {
        for (var c = b.length, d = 0, e = 0, f = 0; f < c; f++) d += b[f].clientX, e += b[f].clientY;
        return [d / c, e / c]
    }
    function fl(b){if(!(b instanceof Uj))return!0;var c=!1,d=b.type;if(d===dk||d===fk||d===bk)d=b.b,b.type==bk?delete this.U[d.pointerId]:b.type==dk?this.U[d.pointerId]=d:d.pointerId in this.U&&(this.U[d.pointerId]=d),this.f=sb(this.U);this.l&&(b.type==fk?this.Ae(b):b.type==bk&&(this.l=this.bi(b)));b.type==dk?(this.l=b=this.Oc(b),c=this.nc(b)):b.type==ek&&this.ai(b);return!c}el.prototype.nc=qe;function hl(b){el.call(this,{handleDownEvent:il,handleDragEvent:jl,handleUpEvent:kl});b=m(b)?b:{};this.c=b.kinetic;this.e=this.g=null;this.o=m(b.condition)?b.condition:al;this.i=!1}w(hl,el);function jl(b){var c=gl(this.f);this.c&&this.c.update(c[0],c[1]);if(null!==this.e){var d=this.e[0]-c[0],e=c[1]-this.e[1];b=b.map;var f=b.P(),g=Rf(f),e=d=[d,e],h=g.resolution;e[0]*=h;e[1]*=h;rd(d,g.rotation);md(d,g.center);d=f.yd(d);b.render();f.Xa(d)}this.e=c}
function kl(b){b=b.map;var c=b.P();if(0===this.f.length){var d;if(d=!this.i&&this.c)if(d=this.c,6>d.a.length)d=!1;else{var e=ua()-d.f,f=d.a.length-3;if(d.a[f+2]<e)d=!1;else{for(var g=f-3;0<g&&d.a[g+2]>e;)g-=3;var e=d.a[f+2]-d.a[g+2],h=d.a[f]-d.a[g],f=d.a[f+1]-d.a[g+1];d.e=Math.atan2(f,h);d.b=Math.sqrt(h*h+f*f)/e;d=d.b>d.c}}d&&(d=this.c,d=(d.c-d.b)/d.d,f=this.c.e,g=c.Da(),this.g=Qk(this.c,g),b.Ha(this.g),g=b.ra(g),d=b.ma([g[0]-d*Math.cos(f),g[1]-d*Math.sin(f)]),d=c.yd(d),c.Xa(d));Tf(c,-1);b.render();
return!1}this.e=null;return!0}function il(b){if(0<this.f.length&&this.o(b)){var c=b.map,d=c.P();this.e=null;this.l||Tf(d,1);c.render();null!==this.g&&$a(c.q,this.g)&&(d.Xa(b.frameState.viewState.center),this.g=null);this.c&&(b=this.c,b.a.length=0,b.e=0,b.b=0);this.i=1<this.f.length;return!0}return!1}hl.prototype.nc=ne;function ll(b){b=m(b)?b:{};el.call(this,{handleDownEvent:ml,handleDragEvent:nl,handleUpEvent:pl});this.e=m(b.condition)?b.condition:Yk;this.c=void 0;this.g=m(b.duration)?b.duration:250}w(ll,el);function nl(b){if(dl(b)){var c=b.map,d=c.va();b=b.pixel;d=Math.atan2(d[1]/2-b[1],b[0]-d[0]/2);if(m(this.c)){b=d-this.c;var e=c.P(),f=e.xa();c.render();Tk(c,e,f-b)}this.c=d}}
function pl(b){if(!dl(b))return!0;b=b.map;var c=b.P();Tf(c,-1);var d=c.xa(),e=this.g,d=c.constrainRotation(d,0);Tk(b,c,d,void 0,e);return!1}function ml(b){return dl(b)&&zc(b.a)&&this.e(b)?(b=b.map,Tf(b.P(),1),b.render(),this.c=void 0,!0):!1}ll.prototype.nc=ne;function ql(b){this.c=this.b=this.d=this.e=this.a=null;this.g=b}w(ql,mc);function rl(b){var c=b.d,d=b.b;b=Ua([c,[c[0],d[1]],d,[d[0],c[1]]],b.a.ma,b.a);b[4]=b[0].slice();return new D([b])}ql.prototype.N=function(){this.setMap(null)};ql.prototype.f=function(b){var c=this.c,d=this.g;b.vectorContext.sc(Infinity,function(b){b.Aa(d.d,d.c);b.Ba(d.b);b.Qb(c,null)})};ql.prototype.Q=function(){return this.c};function sl(b){null===b.a||null===b.d||null===b.b||b.a.render()}
ql.prototype.setMap=function(b){null!==this.e&&(Wc(this.e),this.e=null,this.a.render(),this.a=null);this.a=b;null!==this.a&&(this.e=x(b,"postcompose",this.f,!1,this),sl(this))};function tl(b,c){rc.call(this,b);this.coordinate=c}w(tl,rc);function ul(b){el.call(this,{handleDownEvent:vl,handleDragEvent:wl,handleUpEvent:xl});b=m(b)?b:{};this.e=new ql(m(b.style)?b.style:null);this.c=null;this.i=m(b.condition)?b.condition:oe}w(ul,el);function wl(b){if(dl(b)){var c=this.e;b=b.pixel;c.d=this.c;c.b=b;c.c=rl(c);sl(c)}}ul.prototype.Q=function(){return this.e.Q()};ul.prototype.g=ca;
    function xl(b) {
        if (!dl(b)) return !0;
        this.e.setMap(null);
        var c = b.pixel[0] - this.c[0], d = b.pixel[1] - this.c[1];
        64 <= c * c + d * d && (this.g(b), this.dispatchEvent(new tl("boxend", b.coordinate)));
        return !1
    }
    function vl(b) {
        if (dl(b) && zc(b.a) && this.i(b)) {
            this.c = b.pixel;
            this.e.setMap(b.map);
            var c = this.e, d = this.c;
            c.d = this.c;
            c.b = d;
            c.c = rl(c);
            sl(c);
            this.dispatchEvent(new tl("boxstart", b.coordinate));
            return !0
        }
        return !1
    }
    function yl() {
        this.b = -1
    }
    function zl() {
        this.b = -1;
        this.b = 64;
        this.a = Array(4);
        this.e = Array(this.b);
        this.d = this.c = 0;
        this.a[0] = 1732584193;
        this.a[1] = 4023233417;
        this.a[2] = 2562383102;
        this.a[3] = 271733878;
        this.d = this.c = 0
    }
    w(zl, yl);
    function Al(b,c,d){d||(d=0);var e=Array(16);if(ia(c))for(var f=0;16>f;++f)e[f]=c.charCodeAt(d++)|c.charCodeAt(d++)<<8|c.charCodeAt(d++)<<16|c.charCodeAt(d++)<<24;else for(f=0;16>f;++f)e[f]=c[d++]|c[d++]<<8|c[d++]<<16|c[d++]<<24;c=b.a[0];d=b.a[1];var f=b.a[2],g=b.a[3],h=0,h=c+(g^d&(f^g))+e[0]+3614090360&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[1]+3905402710&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[2]+606105819&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^
c))+e[3]+3250441966&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[4]+4118548399&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[5]+1200080426&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[6]+2821735955&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[7]+4249261313&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[8]+1770035416&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[9]+2336552879&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+
(d^g&(c^d))+e[10]+4294925233&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[11]+2304563134&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[12]+1804603682&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[13]+4254626195&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[14]+2792965006&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[15]+1236535329&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(f^g&(d^f))+e[1]+4129170786&4294967295;c=d+(h<<5&4294967295|
h>>>27);h=g+(d^f&(c^d))+e[6]+3225465664&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[11]+643717713&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[0]+3921069994&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(f^g&(d^f))+e[5]+3593408605&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[10]+38016083&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[15]+3634488961&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[4]+3889429448&4294967295;d=f+(h<<20&4294967295|
h>>>12);h=c+(f^g&(d^f))+e[9]+568446438&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[14]+3275163606&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[3]+4107603335&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[8]+1163531501&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(f^g&(d^f))+e[13]+2850285829&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[2]+4243563512&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[7]+1735328473&4294967295;f=g+(h<<14&4294967295|
h>>>18);h=d+(g^c&(f^g))+e[12]+2368359562&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(d^f^g)+e[5]+4294588738&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[8]+2272392833&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[11]+1839030562&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[14]+4259657740&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[1]+2763975236&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[4]+1272893353&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^
c^d)+e[7]+4139469664&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[10]+3200236656&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[13]+681279174&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[0]+3936430074&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[3]+3572445317&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[6]+76029189&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[9]+3654602809&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[12]+3873151461&4294967295;
g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[15]+530742520&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[2]+3299628645&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(f^(d|~g))+e[0]+4096336452&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[7]+1126891415&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[14]+2878612391&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[5]+4237533241&4294967295;d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[12]+1700485571&4294967295;c=d+
(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[3]+2399980690&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[10]+4293915773&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[1]+2240044497&4294967295;d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[8]+1873313359&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[15]+4264355552&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[6]+2734768916&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[13]+1309151649&4294967295;
d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[4]+4149444226&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[11]+3174756917&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[2]+718787259&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[9]+3951481745&4294967295;b.a[0]=b.a[0]+c&4294967295;b.a[1]=b.a[1]+(f+(h<<21&4294967295|h>>>11))&4294967295;b.a[2]=b.a[2]+f&4294967295;b.a[3]=b.a[3]+g&4294967295}
zl.prototype.update=function(b,c){m(c)||(c=b.length);for(var d=c-this.b,e=this.e,f=this.c,g=0;g<c;){if(0==f)for(;g<=d;)Al(this,b,g),g+=this.b;if(ia(b))for(;g<c;){if(e[f++]=b.charCodeAt(g++),f==this.b){Al(this,e);f=0;break}}else for(;g<c;)if(e[f++]=b[g++],f==this.b){Al(this,e);f=0;break}}this.c=f;this.d+=c};function Bl(b){b=m(b)?b:{};this.a=m(b.color)?b.color:null;this.d=b.lineCap;this.c=m(b.lineDash)?b.lineDash:null;this.e=b.lineJoin;this.f=b.miterLimit;this.b=b.width;this.g=void 0}k=Bl.prototype;k.wm=function(){return this.a};k.aj=function(){return this.d};k.xm=function(){return this.c};k.bj=function(){return this.e};k.gj=function(){return this.f};k.ym=function(){return this.b};k.zm=function(b){this.a=b;this.g=void 0};k.On=function(b){this.d=b;this.g=void 0};k.Am=function(b){this.c=b;this.g=void 0};
k.Pn=function(b){this.e=b;this.g=void 0};k.Qn=function(b){this.f=b;this.g=void 0};k.Yn=function(b){this.b=b;this.g=void 0};
k.sb=function(){if(!m(this.g)){var b="s"+(null===this.a?"-":xg(this.a))+","+(m(this.d)?this.d.toString():"-")+","+(null===this.c?"-":this.c.toString())+","+(m(this.e)?this.e:"-")+","+(m(this.f)?this.f.toString():"-")+","+(m(this.b)?this.b.toString():"-"),c=new zl;c.update(b);var d=Array((56>c.c?c.b:2*c.b)-c.c);d[0]=128;for(b=1;b<d.length-8;++b)d[b]=0;for(var e=8*c.d,b=d.length-8;b<d.length;++b)d[b]=e&255,e/=256;c.update(d);d=Array(16);for(b=e=0;4>b;++b)for(var f=0;32>f;f+=8)d[e++]=c.a[b]>>>f&255;
if(8192>d.length)c=String.fromCharCode.apply(null,d);else for(c="",b=0;b<d.length;b+=8192)c+=String.fromCharCode.apply(null,fb(d,b,b+8192));this.g=c}return this.g};var Cl=[0,0,0,1],Dl=[],El=[0,0,0,1];function Fl(b){b=m(b)?b:{};this.a=m(b.color)?b.color:null;this.b=void 0}Fl.prototype.c=function(){return this.a};Fl.prototype.d=function(b){this.a=b;this.b=void 0};Fl.prototype.sb=function(){m(this.b)||(this.b="f"+(null===this.a?"-":xg(this.a)));return this.b};function Gl(b){b=m(b)?b:{};this.f=this.a=this.e=null;this.d=m(b.fill)?b.fill:null;this.b=m(b.stroke)?b.stroke:null;this.c=b.radius;this.l=[0,0];this.i=this.W=this.g=null;var c=b.atlasManager,d,e=null,f,g=0;null!==this.b&&(f=xg(this.b.a),g=this.b.b,m(g)||(g=1),e=this.b.c,dj||(e=null));var h=2*(this.c+g)+1;f={strokeStyle:f,md:g,size:h,lineDash:e};m(c)?(h=Math.round(h),(e=null===this.d)&&(d=ra(this.Mg,this,f)),g=this.sb(),f=c.add(g,h,h,ra(this.Ng,this,f),d),this.a=f.image,this.l=[f.offsetX,f.offsetY],
d=f.image.width,this.f=e?f.lg:this.a):(this.a=Og("CANVAS"),this.a.height=h,this.a.width=h,d=h=this.a.width,c=this.a.getContext("2d"),this.Ng(f,c,0,0),null===this.d?(c=this.f=Og("CANVAS"),c.height=f.size,c.width=f.size,c=c.getContext("2d"),this.Mg(f,c,0,0)):this.f=this.a);this.g=[h/2,h/2];this.W=[h,h];this.i=[d,d];Ak.call(this,{opacity:1,rotateWithView:!1,rotation:0,scale:1,snapToPixel:m(b.snapToPixel)?b.snapToPixel:!0})}w(Gl,Ak);k=Gl.prototype;k.rb=function(){return this.g};k.nm=function(){return this.d};
k.ee=function(){return this.f};k.Kb=function(){return this.a};k.hd=function(){return 2};k.Dd=function(){return this.i};k.wb=function(){return this.l};k.om=function(){return this.c};k.Ya=function(){return this.W};k.pm=function(){return this.b};k.Ye=ca;k.load=ca;k.wf=ca;
k.Ng=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();c.arc(b.size/2,b.size/2,this.c,0,2*Math.PI,!0);null!==this.d&&(c.fillStyle=xg(this.d.a),c.fill());null!==this.b&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.md,null===b.lineDash||c.setLineDash(b.lineDash),c.stroke());c.closePath()};
k.Mg=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();c.arc(b.size/2,b.size/2,this.c,0,2*Math.PI,!0);c.fillStyle=Cl;c.fill();null!==this.b&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.md,null===b.lineDash||c.setLineDash(b.lineDash),c.stroke());c.closePath()};k.sb=function(){var b=null===this.b?"-":this.b.sb(),c=null===this.d?"-":this.d.sb();if(null===this.e||b!=this.e[1]||c!=this.e[2]||this.c!=this.e[3])this.e=["c"+b+c+(m(this.c)?this.c.toString():"-"),b,c,this.c];return this.e[0]};function Hl(b){b=m(b)?b:{};this.g=null;this.e=Il;m(b.geometry)&&this.Qg(b.geometry);this.d=m(b.fill)?b.fill:null;this.f=m(b.image)?b.image:null;this.c=m(b.stroke)?b.stroke:null;this.b=m(b.text)?b.text:null;this.a=b.zIndex}k=Hl.prototype;k.Q=function(){return this.g};k.Vi=function(){return this.e};k.Bm=function(){return this.d};k.Cm=function(){return this.f};k.Dm=function(){return this.c};k.Em=function(){return this.b};k.yj=function(){return this.a};
k.Qg=function(b){ka(b)?this.e=b:ia(b)?this.e=function(c){return c.get(b)}:null===b?this.e=Il:m(b)&&(this.e=function(){return b});this.g=b};k.$n=function(b){this.a=b};function Jl(b){ka(b)||(b=ga(b)?b:[b],b=me(b));return b}function Kl(){var b=new Fl({color:"rgba(255,255,255,0.4)"}),c=new Bl({color:"#3399CC",width:1.25}),d=[new Hl({image:new Gl({fill:b,stroke:c,radius:5}),fill:b,stroke:c})];Kl=function(){return d};return d}
function Ll(){var b={},c=[255,255,255,1],d=[0,153,255,1];b.Polygon=[new Hl({fill:new Fl({color:[255,255,255,.5]})})];b.MultiPolygon=b.Polygon;b.LineString=[new Hl({stroke:new Bl({color:c,width:5})}),new Hl({stroke:new Bl({color:d,width:3})})];b.MultiLineString=b.LineString;b.Circle=b.Polygon.concat(b.LineString);b.Point=[new Hl({image:new Gl({radius:6,fill:new Fl({color:d}),stroke:new Bl({color:c,width:1.5})}),zIndex:Infinity})];b.MultiPoint=b.Point;b.GeometryCollection=b.Polygon.concat(b.Point);
    return b
}
    function Il(b) {
        return b.Q()
    }
    function Ml(b) {
        var c = m(b) ? b : {};
        b = m(c.condition) ? c.condition : bl;
        this.o = m(c.duration) ? c.duration : 200;
        c = m(c.style) ? c.style : new Hl({stroke: new Bl({color: [0, 0, 255, 1]})});
        ul.call(this, {condition: b, style: c})
    }
    w(Ml, ul);
    Ml.prototype.g = function () {
        var b = this.n, c = b.P(), d = this.Q().I(), e = de(d), f = b.va(), d = Math.max(ie(d) / f[0], fe(d) / f[1]),
            f = this.o, d = c.constrainResolution(d, 0, void 0);
        Vk(b, c, d, e, f)
    };
    function Nl(b) {
        Sk.call(this, {handleEvent: Ol});
        b = m(b) ? b : {};
        this.c = m(b.condition) ? b.condition : te(al, cl);
        this.e = m(b.duration) ? b.duration : 100;
        this.f = m(b.pixelDelta) ? b.pixelDelta : 128
    }
    w(Nl, Sk);
    function Ol(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.e;
            if (this.c(b) && (40 == d || 37 == d || 39 == d || 38 == d)) {
                var e = b.map, c = e.P(), f = Rf(c), g = f.resolution * this.f, h = 0, l = 0;
                40 == d ? l = -g : 37 == d ? h = -g : 39 == d ? h = g : l = g;
                d = [h, l];
                rd(d, f.rotation);
                f = this.e;
                g = c.Da();
                m(g) && (m(f) && 0 < f && e.Ha(Yf({
                    source: g,
                    duration: f,
                    easing: Wf
                })), e = c.yd([g[0] + d[0], g[1] + d[1]]), c.Xa(e));
                b.preventDefault();
                c = !0
            }
        }
        return !c
    }
    function Pl(b) {
        Sk.call(this, {handleEvent: Ql});
        b = m(b) ? b : {};
        this.e = m(b.condition) ? b.condition : cl;
        this.c = m(b.delta) ? b.delta : 1;
        this.f = m(b.duration) ? b.duration : 100
    }
    w(Pl, Sk);
    function Ql(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.p;
            if (this.e(b) && (43 == d || 45 == d)) {
                c = b.map;
                d = 43 == d ? this.c : -this.c;
                c.render();
                var e = c.P();
                Uk(c, e, d, void 0, this.f);
                b.preventDefault();
                c = !0
            }
        }
        return !c
    }
    function Rl(b) {
        Sk.call(this, {handleEvent: Sl});
        b = m(b) ? b : {};
        this.c = 0;
        this.l = m(b.duration) ? b.duration : 250;
        this.f = null;
        this.g = this.e = void 0
    }
    w(Rl, Sk);
    function Sl(b) {
        var c = !1;
        if ("mousewheel" == b.type) {
            var c = b.map, d = b.a;
            this.f = b.coordinate;
            this.c += d.l;
            m(this.e) || (this.e = ua());
            d = Math.max(80 - (ua() - this.e), 0);
            ba.clearTimeout(this.g);
            this.g = ba.setTimeout(ra(this.i, this, c), d);
            b.preventDefault();
            c = !0
        }
        return !c
    }
    Rl.prototype.i=function(b){var c=Vb(this.c,-1,1),d=b.P();b.render();Uk(b,d,-c,this.f,this.l);this.c=0;this.f=null;this.g=this.e=void 0};function Tl(b){el.call(this,{handleDownEvent:Ul,handleDragEvent:Vl,handleUpEvent:Wl});b=m(b)?b:{};this.e=null;this.g=void 0;this.c=!1;this.i=0;this.r=m(b.threshold)?b.threshold:.3;this.o=m(b.duration)?b.duration:250}w(Tl,el);
function Vl(b){var c=0,d=this.f[0],e=this.f[1],d=Math.atan2(e.clientY-d.clientY,e.clientX-d.clientX);m(this.g)&&(c=d-this.g,this.i+=c,!this.c&&Math.abs(this.i)>this.r&&(this.c=!0));this.g=d;b=b.map;d=kh(b.b);e=gl(this.f);e[0]-=d.x;e[1]-=d.y;this.e=b.ma(e);this.c&&(d=b.P(),e=d.xa(),b.render(),Tk(b,d,e+c,this.e))}function Wl(b){if(2>this.f.length){b=b.map;var c=b.P();Tf(c,-1);if(this.c){var d=c.xa(),e=this.e,f=this.o,d=c.constrainRotation(d,0);Tk(b,c,d,e,f)}return!1}return!0}
function Ul(b){return 2<=this.f.length?(b=b.map,this.e=null,this.g=void 0,this.c=!1,this.i=0,this.l||Tf(b.P(),1),b.render(),!0):!1}Tl.prototype.nc=ne;function Xl(b){el.call(this,{handleDownEvent:Yl,handleDragEvent:Zl,handleUpEvent:$l});b=m(b)?b:{};this.e=null;this.i=m(b.duration)?b.duration:400;this.c=void 0;this.g=1}w(Xl,el);function Zl(b){var c=1,d=this.f[0],e=this.f[1],f=d.clientX-e.clientX,d=d.clientY-e.clientY,f=Math.sqrt(f*f+d*d);m(this.c)&&(c=this.c/f);this.c=f;1!=c&&(this.g=c);b=b.map;var f=b.P(),d=f.wa(),e=kh(b.b),g=gl(this.f);g[0]-=e.x;g[1]-=e.y;this.e=b.ma(g);b.render();Vk(b,f,d*c,this.e)}
function $l(b){if(2>this.f.length){b=b.map;var c=b.P();Tf(c,-1);var d=c.wa(),e=this.e,f=this.i,d=c.constrainResolution(d,0,this.g-1);Vk(b,c,d,e,f);return!1}return!0}function Yl(b){return 2<=this.f.length?(b=b.map,this.e=null,this.c=void 0,this.g=1,this.l||Tf(b.P(),1),b.render(),!0):!1}Xl.prototype.nc=ne;function am(b){b=m(b)?b:{};var c=new qg,d=new Pk(-.005,.05,100);(m(b.altShiftDragRotate)?b.altShiftDragRotate:1)&&c.push(new ll);(m(b.doubleClickZoom)?b.doubleClickZoom:1)&&c.push(new Wk({delta:b.zoomDelta,duration:b.zoomDuration}));(m(b.dragPan)?b.dragPan:1)&&c.push(new hl({kinetic:d}));(m(b.pinchRotate)?b.pinchRotate:1)&&c.push(new Tl);(m(b.pinchZoom)?b.pinchZoom:1)&&c.push(new Xl({duration:b.zoomDuration}));if(m(b.keyboard)?b.keyboard:1)c.push(new Nl),c.push(new Pl({delta:b.zoomDelta,duration:b.zoomDuration}));
        (m(b.mouseWheelZoom) ? b.mouseWheelZoom : 1) && c.push(new Rl({duration: b.zoomDuration}));
        (m(b.shiftDragZoom) ? b.shiftDragZoom : 1) && c.push(new Ml);
        return c
    }
    function G(b) {
        var c = m(b) ? b : {};
        b = Db(c);
        delete b.layers;
        c = c.layers;
        hk.call(this, b);
        this.c = [];
        this.b = {};
        x(this, hd("layers"), this.Oj, !1, this);
        null != c ? ga(c) && (c = new qg(c.slice())) : c = new qg;
        this.uh(c)
    }
    w(G, hk);
    k = G.prototype;
    k.Od = function () {
        this.fb() && this.k()
    };
    k.Oj=function(){Sa(this.c,Wc);this.c.length=0;var b=this.Ac();this.c.push(x(b,"add",this.Nj,!1,this),x(b,"remove",this.Pj,!1,this));pb(this.b,function(b){Sa(b,Wc)});yb(this.b);var b=b.b,c,d,e;c=0;for(d=b.length;c<d;c++)e=b[c],this.b[ma(e).toString()]=[x(e,"propertychange",this.Od,!1,this),x(e,"change",this.Od,!1,this)];this.k()};k.Nj=function(b){b=b.element;var c=ma(b).toString();this.b[c]=[x(b,"propertychange",this.Od,!1,this),x(b,"change",this.Od,!1,this)];this.k()};
k.Pj=function(b){b=ma(b.element).toString();Sa(this.b[b],Wc);delete this.b[b];this.k()};k.Ac=function(){return this.get("layers")};k.uh=function(b){this.set("layers",b)};
k.Se=function(b){var c=m(b)?b:[],d=c.length;this.Ac().forEach(function(b){b.Se(c)});b=ik(this);var e,f;for(e=c.length;d<e;d++)f=c[d],f.brightness=Vb(f.brightness+b.brightness,-1,1),f.contrast*=b.contrast,f.hue+=b.hue,f.opacity*=b.opacity,f.saturation*=b.saturation,f.visible=f.visible&&b.visible,f.maxResolution=Math.min(f.maxResolution,b.maxResolution),f.minResolution=Math.max(f.minResolution,b.minResolution),m(b.extent)&&(f.extent=m(f.extent)?ge(f.extent,b.extent):b.extent);return c};k.Ue=function(){return"ready"};function bm(b){xe.call(this,{code:b,units:"m",extent:cm,global:!0,worldExtent:dm})}w(bm,xe);bm.prototype.getPointResolution=function(b,c){var d=c[1]/6378137;return b/((Math.exp(d)+Math.exp(-d))/2)};var em=6378137*Math.PI,cm=[-em,-em,em,em],dm=[-180,-85,180,85],Je=Ua("EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" "),function(b){return new bm(b)});
    function Ke(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d) c[f] = 6378137 * Math.PI * b[f] / 180, c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (b[f + 1] + 90) / 360));
        return c
    }
    function Le(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d) c[f] = 180 * b[f] / (6378137 * Math.PI), c[f + 1] = 360 * Math.atan(Math.exp(b[f + 1] / 6378137)) / Math.PI - 90;
        return c
    }
    function fm(b, c) {
        xe.call(this, {code: b, units: "degrees", extent: gm, axisOrientation: c, global: !0, worldExtent: gm})
    }
    w(fm, xe);
    fm.prototype.getPointResolution = function (b) {
        return b
    };
    var gm = [-180, -90, 180, 90],
        Me = [new fm("CRS:84"), new fm("EPSG:4326", "neu"), new fm("urn:ogc:def:crs:EPSG::4326", "neu"), new fm("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new fm("urn:ogc:def:crs:OGC:1.3:CRS84"), new fm("urn:ogc:def:crs:OGC:2:84"), new fm("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new fm("urn:x-ogc:def:crs:EPSG:4326", "neu")];
    function hm() {
        Ae(Je);
        Ae(Me);
        Ie()
    }
    function I(b) {
        F.call(this, m(b) ? b : {})
    }
    w(I, F);
    function J(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.preload;
        delete c.useInterimTilesOnError;
        F.call(this, c);
        this.d(m(b.preload) ? b.preload : 0);
        this.e(m(b.useInterimTilesOnError) ? b.useInterimTilesOnError : !0)
    }
    w(J, F);
    J.prototype.b = function () {
        return this.get("preload")
    };
    J.prototype.d = function (b) {
        this.set("preload", b)
    };
    J.prototype.c = function () {
        return this.get("useInterimTilesOnError")
    };
    J.prototype.e = function (b) {
        this.set("useInterimTilesOnError", b)
    };
    function M(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.style;
        delete c.renderBuffer;
        delete c.updateWhileAnimating;
        delete c.updateWhileInteracting;
        F.call(this, c);
        this.c = m(b.renderBuffer) ? b.renderBuffer : 100;
        this.g = null;
        this.b = void 0;
        this.e(b.style);
        this.l = m(b.updateWhileAnimating) ? b.updateWhileAnimating : !1;
        this.o = m(b.updateWhileInteracting) ? b.updateWhileInteracting : !1
    }
    w(M, F);
    M.prototype.K = function () {
        return this.g
    };
    M.prototype.U = function () {
        return this.b
    };
    M.prototype.e=function(b){this.g=m(b)?b:Kl;this.b=null===b?void 0:Jl(this.g);this.k()};function im(b,c,d,e,f){this.o={};this.c=b;this.Y=c;this.e=d;this.q=e;this.Oc=f;this.f=this.a=this.b=this.Fa=this.ka=this.X=null;this.Ga=this.qa=this.l=this.U=this.K=this.D=0;this.Qa=!1;this.g=this.jb=0;this.kb=!1;this.R=0;this.d="";this.p=this.W=this.mb=this.lb=0;this.T=this.n=this.i=null;this.r=[];this.td=zd()}
function jm(b,c,d){if(null!==b.f){c=Xe(c,0,d,2,b.q,b.r);d=b.c;var e=b.td,f=d.globalAlpha;1!=b.l&&(d.globalAlpha=f*b.l);var g=b.jb;b.Qa&&(g+=b.Oc);var h,l;h=0;for(l=c.length;h<l;h+=2){var n=c[h]-b.D,p=c[h+1]-b.K;b.kb&&(n=n+.5|0,p=p+.5|0);if(0!==g||1!=b.g){var q=n+b.D,r=p+b.K;nk(e,q,r,b.g,b.g,g,-q,-r);d.setTransform(e[0],e[1],e[4],e[5],e[12],e[13])}d.drawImage(b.f,b.qa,b.Ga,b.R,b.U,n,p,b.R,b.U)}0===g&&1==b.g||d.setTransform(1,0,0,1,0,0);1!=b.l&&(d.globalAlpha=f)}}
function km(b,c,d,e){var f=0;if(null!==b.T&&""!==b.d){null===b.i||lm(b,b.i);null===b.n||mm(b,b.n);var g=b.T,h=b.c,l=b.Fa;null===l?(h.font=g.font,h.textAlign=g.textAlign,h.textBaseline=g.textBaseline,b.Fa={font:g.font,textAlign:g.textAlign,textBaseline:g.textBaseline}):(l.font!=g.font&&(l.font=h.font=g.font),l.textAlign!=g.textAlign&&(l.textAlign=h.textAlign=g.textAlign),l.textBaseline!=g.textBaseline&&(l.textBaseline=h.textBaseline=g.textBaseline));c=Xe(c,f,d,e,b.q,b.r);for(g=b.c;f<d;f+=e){h=c[f]+
b.lb;l=c[f+1]+b.mb;if(0!==b.W||1!=b.p){var n=nk(b.td,h,l,b.p,b.p,b.W,-h,-l);g.setTransform(n[0],n[1],n[4],n[5],n[12],n[13])}null===b.n||g.strokeText(b.d,h,l);null===b.i||g.fillText(b.d,h,l)}0===b.W&&1==b.p||g.setTransform(1,0,0,1,0,0)}}function nm(b,c,d,e,f,g){var h=b.c;b=Xe(c,d,e,f,b.q,b.r);h.moveTo(b[0],b[1]);for(c=2;c<b.length;c+=2)h.lineTo(b[c],b[c+1]);g&&h.lineTo(b[0],b[1]);return e}function om(b,c,d,e,f){var g=b.c,h,l;h=0;for(l=e.length;h<l;++h)d=nm(b,c,d,e[h],f,!0),g.closePath();return d}
k=im.prototype;k.sc=function(b,c){var d=b.toString(),e=this.o[d];m(e)?e.push(c):this.o[d]=[c]};k.tc=function(b){if(he(this.e,b.I())){if(null!==this.b||null!==this.a){null===this.b||lm(this,this.b);null===this.a||mm(this,this.a);var c;c=b.j;c=null===c?null:Xe(c,0,c.length,b.t,this.q,this.r);var d=c[2]-c[0],e=c[3]-c[1],d=Math.sqrt(d*d+e*e),e=this.c;e.beginPath();e.arc(c[0],c[1],d,0,2*Math.PI);null===this.b||e.fill();null===this.a||e.stroke()}""!==this.d&&km(this,b.dd(),2,2)}};
k.Ie=function(b,c){var d=(0,c.e)(b);if(null!=d&&he(this.e,d.I())){var e=c.a;m(e)||(e=0);this.sc(e,function(b){b.Aa(c.d,c.c);b.$a(c.f);b.Ba(c.b);qm[d.L()].call(b,d,null)})}};k.Ad=function(b,c){var d=b.d,e,f;e=0;for(f=d.length;e<f;++e){var g=d[e];qm[g.L()].call(this,g,c)}};k.pb=function(b){var c=b.j;b=b.t;null===this.f||jm(this,c,c.length);""!==this.d&&km(this,c,c.length,b)};k.ob=function(b){var c=b.j;b=b.t;null===this.f||jm(this,c,c.length);""!==this.d&&km(this,c,c.length,b)};
k.zb=function(b){if(he(this.e,b.I())){if(null!==this.a){mm(this,this.a);var c=this.c,d=b.j;c.beginPath();nm(this,d,0,d.length,b.t,!1);c.stroke()}""!==this.d&&(b=rm(b),km(this,b,2,2))}};k.uc=function(b){var c=b.I();if(he(this.e,c)){if(null!==this.a){mm(this,this.a);var c=this.c,d=b.j,e=0,f=b.c,g=b.t;c.beginPath();var h,l;h=0;for(l=f.length;h<l;++h)e=nm(this,d,e,f[h],g,!1);c.stroke()}""!==this.d&&(b=sm(b),km(this,b,b.length,2))}};
k.Qb=function(b){if(he(this.e,b.I())){if(null!==this.a||null!==this.b){null===this.b||lm(this,this.b);null===this.a||mm(this,this.a);var c=this.c;c.beginPath();om(this,Hf(b),0,b.c,b.t);null===this.b||c.fill();null===this.a||c.stroke()}""!==this.d&&(b=If(b),km(this,b,2,2))}};
k.vc=function(b){if(he(this.e,b.I())){if(null!==this.a||null!==this.b){null===this.b||lm(this,this.b);null===this.a||mm(this,this.a);var c=this.c,d=tm(b),e=0,f=b.c,g=b.t,h,l;h=0;for(l=f.length;h<l;++h){var n=f[h];c.beginPath();e=om(this,d,e,n,g);null===this.b||c.fill();null===this.a||c.stroke()}}""!==this.d&&(b=um(b),km(this,b,b.length,2))}};function vm(b){var c=Ua(tb(b.o),Number);gb(c);var d,e,f,g,h;d=0;for(e=c.length;d<e;++d)for(f=b.o[c[d].toString()],g=0,h=f.length;g<h;++g)f[g](b)}
function lm(b,c){var d=b.c,e=b.X;null===e?(d.fillStyle=c.fillStyle,b.X={fillStyle:c.fillStyle}):e.fillStyle!=c.fillStyle&&(e.fillStyle=d.fillStyle=c.fillStyle)}
function mm(b,c){var d=b.c,e=b.ka;null===e?(d.lineCap=c.lineCap,dj&&d.setLineDash(c.lineDash),d.lineJoin=c.lineJoin,d.lineWidth=c.lineWidth,d.miterLimit=c.miterLimit,d.strokeStyle=c.strokeStyle,b.ka={lineCap:c.lineCap,lineDash:c.lineDash,lineJoin:c.lineJoin,lineWidth:c.lineWidth,miterLimit:c.miterLimit,strokeStyle:c.strokeStyle}):(e.lineCap!=c.lineCap&&(e.lineCap=d.lineCap=c.lineCap),dj&&!ib(e.lineDash,c.lineDash)&&d.setLineDash(e.lineDash=c.lineDash),e.lineJoin!=c.lineJoin&&(e.lineJoin=d.lineJoin=
c.lineJoin),e.lineWidth!=c.lineWidth&&(e.lineWidth=d.lineWidth=c.lineWidth),e.miterLimit!=c.miterLimit&&(e.miterLimit=d.miterLimit=c.miterLimit),e.strokeStyle!=c.strokeStyle&&(e.strokeStyle=d.strokeStyle=c.strokeStyle))}
k.Aa=function(b,c){if(null===b)this.b=null;else{var d=b.a;this.b={fillStyle:xg(null===d?Cl:d)}}if(null===c)this.a=null;else{var d=c.a,e=c.d,f=c.c,g=c.e,h=c.b,l=c.f;this.a={lineCap:m(e)?e:"round",lineDash:null!=f?f:Dl,lineJoin:m(g)?g:"round",lineWidth:this.Y*(m(h)?h:1),miterLimit:m(l)?l:10,strokeStyle:xg(null===d?El:d)}}};
k.$a=function(b){if(null===b)this.f=null;else{var c=b.rb(),d=b.Kb(1),e=b.wb(),f=b.Ya();this.D=c[0];this.K=c[1];this.U=f[1];this.f=d;this.l=b.o;this.qa=e[0];this.Ga=e[1];this.Qa=b.r;this.jb=b.p;this.g=b.n;this.kb=b.Y;this.R=f[0]}};
k.Ba=function(b){if(null===b)this.d="";else{var c=b.a;null===c?this.i=null:(c=c.a,this.i={fillStyle:xg(null===c?Cl:c)});var d=b.f;if(null===d)this.n=null;else{var c=d.a,e=d.d,f=d.c,g=d.e,h=d.b,d=d.f;this.n={lineCap:m(e)?e:"round",lineDash:null!=f?f:Dl,lineJoin:m(g)?g:"round",lineWidth:m(h)?h:1,miterLimit:m(d)?d:10,strokeStyle:xg(null===c?El:c)}}var c=b.d,e=b.p,f=b.n,g=b.e,h=b.b,d=b.c,l=b.g;b=b.i;this.T={font:m(c)?c:"10px sans-serif",textAlign:m(l)?l:"center",textBaseline:m(b)?b:"middle"};this.d=m(d)?
d:"";this.lb=m(e)?this.Y*e:0;this.mb=m(f)?this.Y*f:0;this.W=m(g)?g:0;this.p=this.Y*(m(h)?h:1)}};var qm={Point:im.prototype.pb,LineString:im.prototype.zb,Polygon:im.prototype.Qb,MultiPoint:im.prototype.ob,MultiLineString:im.prototype.uc,MultiPolygon:im.prototype.vc,GeometryCollection:im.prototype.Ad,Circle:im.prototype.tc};function wm(b){qk.call(this,b);this.D=zd()}w(wm,qk);
wm.prototype.l=function(b,c,d){xm(this,"precompose",d,b,void 0);var e=this.ce();if(null!==e){var f=c.extent,g=m(f);if(g){var h=b.pixelRatio,l=ce(f),n=be(f),p=ae(f),f=$d(f);pk(b.coordinateToPixelMatrix,l,l);pk(b.coordinateToPixelMatrix,n,n);pk(b.coordinateToPixelMatrix,p,p);pk(b.coordinateToPixelMatrix,f,f);d.save();d.beginPath();d.moveTo(l[0]*h,l[1]*h);d.lineTo(n[0]*h,n[1]*h);d.lineTo(p[0]*h,p[1]*h);d.lineTo(f[0]*h,f[1]*h);d.clip()}h=this.Wf();l=d.globalAlpha;d.globalAlpha=c.opacity;0===b.viewState.rotation?
(c=h[13],n=e.width*h[0],p=e.height*h[5],d.drawImage(e,0,0,+e.width,+e.height,Math.round(h[12]),Math.round(c),Math.round(n),Math.round(p))):(d.setTransform(h[0],h[1],h[4],h[5],h[12],h[13]),d.drawImage(e,0,0),d.setTransform(1,0,0,1,0,0));d.globalAlpha=l;g&&d.restore()}xm(this,"postcompose",d,b,void 0)};function xm(b,c,d,e,f){var g=b.b;bd(g,c)&&(b=m(f)?f:ym(b,e,0),b=new im(d,e.pixelRatio,e.extent,b,e.viewState.rotation),g.dispatchEvent(new kk(c,g,b,e,d,null)),vm(b))}
function ym(b,c,d){var e=c.viewState,f=c.pixelRatio;return nk(b.D,f*c.size[0]/2,f*c.size[1]/2,f/e.resolution,-f/e.resolution,-e.rotation,-e.center[0]+d,-e.center[1])}function zm(b,c){var d=[0,0];pk(c,b,d);return d}
var Am=function(){var b=null,c=null;return function(d){if(null===b){b=Vi(1,1);c=b.createImageData(1,1);var e=c.data;e[0]=42;e[1]=84;e[2]=126;e[3]=255}var e=b.canvas,f=d[0]<=e.width&&d[1]<=e.height;f||(e.width=d[0],e.height=d[1],e=d[0]-1,d=d[1]-1,b.putImageData(c,e,d),d=b.getImageData(e,d,1,1),f=ib(c.data,d.data));return f}}();var Bm=["Polygon","LineString","Image","Text"];function Cm(b,c,d){this.Fa=b;this.R=c;this.d=null;this.e=0;this.resolution=d;this.K=this.D=null;this.b=[];this.coordinates=[];this.X=zd();this.a=[];this.T=[];this.ka=zd()}w(Cm,jk);
function Dm(b,c,d,e,f,g){var h=b.coordinates.length,l=b.Me(),n=[c[d],c[d+1]],p=[NaN,NaN],q=!0,r,t,v;for(r=d+f;r<e;r+=f)p[0]=c[r],p[1]=c[r+1],v=Ud(l,p),v!==t?(q&&(b.coordinates[h++]=n[0],b.coordinates[h++]=n[1]),b.coordinates[h++]=p[0],b.coordinates[h++]=p[1],q=!1):1===v?(b.coordinates[h++]=p[0],b.coordinates[h++]=p[1],q=!1):q=!0,n[0]=p[0],n[1]=p[1],t=v;r===d+f&&(b.coordinates[h++]=n[0],b.coordinates[h++]=n[1]);g&&(b.coordinates[h++]=c[d],b.coordinates[h++]=c[d+1]);return h}
function Em(b,c){b.D=[0,c,0];b.b.push(b.D);b.K=[0,c,0];b.a.push(b.K)}
function Fm(b,c,d,e,f,g,h,l,n){var p;ok(e,b.X)?p=b.T:(p=Xe(b.coordinates,0,b.coordinates.length,2,e,b.T),Cd(b.X,e));e=0;var q=h.length,r=0,t;for(b=b.ka;e<q;){var v=h[e],A,z,E,B;switch(v[0]){case 0:r=v[1];t=ma(r).toString();m(g[t])?e=v[2]:m(n)&&!he(n,r.Q().I())?e=v[2]:++e;break;case 1:c.beginPath();++e;break;case 2:r=v[1];t=p[r];var y=p[r+1],L=p[r+2]-t,r=p[r+3]-y;c.arc(t,y,Math.sqrt(L*L+r*r),0,2*Math.PI,!0);++e;break;case 3:c.closePath();++e;break;case 4:r=v[1];t=v[2];A=v[3];E=v[4]*d;var K=v[5]*d,
H=v[6];z=v[7];var S=v[8],sa=v[9],y=v[11],L=v[12],Na=v[13],R=v[14];for(v[10]&&(y+=f);r<t;r+=2){v=p[r]-E;B=p[r+1]-K;Na&&(v=v+.5|0,B=B+.5|0);if(1!=L||0!==y){var za=v+E,cb=B+K;nk(b,za,cb,L,L,y,-za,-cb);c.setTransform(b[0],b[1],b[4],b[5],b[12],b[13])}za=c.globalAlpha;1!=z&&(c.globalAlpha=za*z);c.drawImage(A,S,sa,R,H,v,B,R*d,H*d);1!=z&&(c.globalAlpha=za);1==L&&0===y||c.setTransform(1,0,0,1,0,0)}++e;break;case 5:r=v[1];t=v[2];E=v[3];K=v[4]*d;H=v[5]*d;y=v[6];L=v[7]*d;A=v[8];for(z=v[9];r<t;r+=2){v=p[r]+K;
B=p[r+1]+H;if(1!=L||0!==y)nk(b,v,B,L,L,y,-v,-B),c.setTransform(b[0],b[1],b[4],b[5],b[12],b[13]);z&&c.strokeText(E,v,B);A&&c.fillText(E,v,B);1==L&&0===y||c.setTransform(1,0,0,1,0,0)}++e;break;case 6:if(m(l)&&(r=v[1],r=l(r)))return r;++e;break;case 7:c.fill();++e;break;case 8:r=v[1];t=v[2];c.moveTo(p[r],p[r+1]);for(r+=2;r<t;r+=2)c.lineTo(p[r],p[r+1]);++e;break;case 9:c.fillStyle=v[1];++e;break;case 10:r=m(v[7])?v[7]:!0;t=v[2];c.strokeStyle=v[1];c.lineWidth=r?t*d:t;c.lineCap=v[3];c.lineJoin=v[4];c.miterLimit=
v[5];dj&&c.setLineDash(v[6]);++e;break;case 11:c.font=v[1];c.textAlign=v[2];c.textBaseline=v[3];++e;break;case 12:c.stroke();++e;break;default:++e}}}function Gm(b){var c=b.a;c.reverse();var d,e=c.length,f,g,h=-1;for(d=0;d<e;++d)if(f=c[d],g=f[0],6==g)h=d;else if(0==g){f[2]=d;f=b.a;for(g=d;h<g;){var l=f[h];f[h]=f[g];f[g]=l;++h;--g}h=-1}}function Hm(b,c){b.D[2]=b.b.length;b.D=null;b.K[2]=b.a.length;b.K=null;var d=[6,c];b.b.push(d);b.a.push(d)}Cm.prototype.ae=ca;Cm.prototype.Me=function(){return this.R};
function Im(b,c,d){Cm.call(this,b,c,d);this.i=this.U=null;this.q=this.W=this.Y=this.r=this.o=this.l=this.n=this.p=this.g=this.f=this.c=void 0}w(Im,Cm);Im.prototype.pb=function(b,c){if(null!==this.i){Em(this,c);var d=b.j,e=this.coordinates.length,d=Dm(this,d,0,d.length,b.t,!1);this.b.push([4,e,d,this.i,this.c,this.f,this.g,this.p,this.n,this.l,this.o,this.r,this.Y,this.W,this.q]);this.a.push([4,e,d,this.U,this.c,this.f,this.g,this.p,this.n,this.l,this.o,this.r,this.Y,this.W,this.q]);Hm(this,c)}};
Im.prototype.ob=function(b,c){if(null!==this.i){Em(this,c);var d=b.j,e=this.coordinates.length,d=Dm(this,d,0,d.length,b.t,!1);this.b.push([4,e,d,this.i,this.c,this.f,this.g,this.p,this.n,this.l,this.o,this.r,this.Y,this.W,this.q]);this.a.push([4,e,d,this.U,this.c,this.f,this.g,this.p,this.n,this.l,this.o,this.r,this.Y,this.W,this.q]);Hm(this,c)}};Im.prototype.ae=function(){Gm(this);this.f=this.c=void 0;this.i=this.U=null;this.q=this.W=this.r=this.o=this.l=this.n=this.p=this.Y=this.g=void 0};
Im.prototype.$a=function(b){var c=b.rb(),d=b.Ya(),e=b.ee(1),f=b.Kb(1),g=b.wb();this.c=c[0];this.f=c[1];this.U=e;this.i=f;this.g=d[1];this.p=b.o;this.n=g[0];this.l=g[1];this.o=b.r;this.r=b.p;this.Y=b.n;this.W=b.Y;this.q=d[0]};function Jm(b,c,d){Cm.call(this,b,c,d);this.c={Xc:void 0,Sc:void 0,Tc:null,Uc:void 0,Vc:void 0,Wc:void 0,Xe:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}w(Jm,Cm);
function Km(b,c,d,e,f){var g=b.coordinates.length;c=Dm(b,c,d,e,f,!1);g=[8,g,c];b.b.push(g);b.a.push(g);return e}k=Jm.prototype;k.Me=function(){null===this.d&&(this.d=Pd(this.R),0<this.e&&Od(this.d,this.resolution*(this.e+1)/2,this.d));return this.d};
function Lm(b){var c=b.c,d=c.strokeStyle,e=c.lineCap,f=c.lineDash,g=c.lineJoin,h=c.lineWidth,l=c.miterLimit;c.Xc==d&&c.Sc==e&&ib(c.Tc,f)&&c.Uc==g&&c.Vc==h&&c.Wc==l||(c.Xe!=b.coordinates.length&&(b.b.push([12]),c.Xe=b.coordinates.length),b.b.push([10,d,h,e,g,l,f],[1]),c.Xc=d,c.Sc=e,c.Tc=f,c.Uc=g,c.Vc=h,c.Wc=l)}
k.zb=function(b,c){var d=this.c,e=d.lineWidth;m(d.strokeStyle)&&m(e)&&(Lm(this),Em(this,c),this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash],[1]),d=b.j,Km(this,d,0,d.length,b.t),this.a.push([12]),Hm(this,c))};
k.uc=function(b,c){var d=this.c,e=d.lineWidth;if(m(d.strokeStyle)&&m(e)){Lm(this);Em(this,c);this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash],[1]);var d=b.c,e=b.j,f=b.t,g=0,h,l;h=0;for(l=d.length;h<l;++h)g=Km(this,e,g,d[h],f);this.a.push([12]);Hm(this,c)}};k.ae=function(){this.c.Xe!=this.coordinates.length&&this.b.push([12]);Gm(this);this.c=null};
k.Aa=function(b,c){var d=c.a;this.c.strokeStyle=xg(null===d?El:d);d=c.d;this.c.lineCap=m(d)?d:"round";d=c.c;this.c.lineDash=null===d?Dl:d;d=c.e;this.c.lineJoin=m(d)?d:"round";d=c.b;this.c.lineWidth=m(d)?d:1;d=c.f;this.c.miterLimit=m(d)?d:10;this.c.lineWidth>this.e&&(this.e=this.c.lineWidth,this.d=null)};
function Mm(b,c,d){Cm.call(this,b,c,d);this.c={Lf:void 0,Xc:void 0,Sc:void 0,Tc:null,Uc:void 0,Vc:void 0,Wc:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}w(Mm,Cm);
function Nm(b,c,d,e,f){var g=b.c,h=[1];b.b.push(h);b.a.push(h);var l,h=0;for(l=e.length;h<l;++h){var n=e[h],p=b.coordinates.length;d=Dm(b,c,d,n,f,!0);d=[8,p,d];p=[3];b.b.push(d,p);b.a.push(d,p);d=n}c=[7];b.a.push(c);m(g.fillStyle)&&b.b.push(c);m(g.strokeStyle)&&(g=[12],b.b.push(g),b.a.push(g));return d}k=Mm.prototype;
k.tc=function(b,c){var d=this.c,e=d.strokeStyle;if(m(d.fillStyle)||m(e)){Om(this);Em(this,c);this.a.push([9,xg(Cl)]);m(d.strokeStyle)&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]);var f=b.j,e=this.coordinates.length;Dm(this,f,0,f.length,b.t,!1);f=[1];e=[2,e];this.b.push(f,e);this.a.push(f,e);e=[7];this.a.push(e);m(d.fillStyle)&&this.b.push(e);m(d.strokeStyle)&&(d=[12],this.b.push(d),this.a.push(d));Hm(this,c)}};
k.Qb=function(b,c){var d=this.c,e=d.strokeStyle;if(m(d.fillStyle)||m(e))Om(this),Em(this,c),this.a.push([9,xg(Cl)]),m(d.strokeStyle)&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]),d=b.c,e=Hf(b),Nm(this,e,0,d,b.t),Hm(this,c)};
k.vc=function(b,c){var d=this.c,e=d.strokeStyle;if(m(d.fillStyle)||m(e)){Om(this);Em(this,c);this.a.push([9,xg(Cl)]);m(d.strokeStyle)&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]);var d=b.c,e=tm(b),f=b.t,g=0,h,l;h=0;for(l=d.length;h<l;++h)g=Nm(this,e,g,d[h],f);Hm(this,c)}};k.ae=function(){Gm(this);this.c=null;var b=this.Fa;if(0!==b){var c=this.coordinates,d,e;d=0;for(e=c.length;d<e;++d)c[d]=b*Math.round(c[d]/b)}};
k.Me=function(){null===this.d&&(this.d=Pd(this.R),0<this.e&&Od(this.d,this.resolution*(this.e+1)/2,this.d));return this.d};
k.Aa=function(b,c){var d=this.c;if(null===b)d.fillStyle=void 0;else{var e=b.a;d.fillStyle=xg(null===e?Cl:e)}null===c?(d.strokeStyle=void 0,d.lineCap=void 0,d.lineDash=null,d.lineJoin=void 0,d.lineWidth=void 0,d.miterLimit=void 0):(e=c.a,d.strokeStyle=xg(null===e?El:e),e=c.d,d.lineCap=m(e)?e:"round",e=c.c,d.lineDash=null===e?Dl:e.slice(),e=c.e,d.lineJoin=m(e)?e:"round",e=c.b,d.lineWidth=m(e)?e:1,e=c.f,d.miterLimit=m(e)?e:10,d.lineWidth>this.e&&(this.e=d.lineWidth,this.d=null))};
function Om(b){var c=b.c,d=c.fillStyle,e=c.strokeStyle,f=c.lineCap,g=c.lineDash,h=c.lineJoin,l=c.lineWidth,n=c.miterLimit;m(d)&&c.Lf!=d&&(b.b.push([9,d]),c.Lf=c.fillStyle);!m(e)||c.Xc==e&&c.Sc==f&&c.Tc==g&&c.Uc==h&&c.Vc==l&&c.Wc==n||(b.b.push([10,e,l,f,h,n,g]),c.Xc=e,c.Sc=f,c.Tc=g,c.Uc=h,c.Vc=l,c.Wc=n)}function Pm(b,c,d){Cm.call(this,b,c,d);this.W=this.Y=this.r=null;this.i="";this.o=this.l=this.n=this.p=0;this.g=this.f=this.c=null}w(Pm,Cm);
Pm.prototype.qb=function(b,c,d,e,f,g){if(""!==this.i&&null!==this.g&&(null!==this.c||null!==this.f)){if(null!==this.c){f=this.c;var h=this.r;if(null===h||h.fillStyle!=f.fillStyle){var l=[9,f.fillStyle];this.b.push(l);this.a.push(l);null===h?this.r={fillStyle:f.fillStyle}:h.fillStyle=f.fillStyle}}null!==this.f&&(f=this.f,h=this.Y,null===h||h.lineCap!=f.lineCap||h.lineDash!=f.lineDash||h.lineJoin!=f.lineJoin||h.lineWidth!=f.lineWidth||h.miterLimit!=f.miterLimit||h.strokeStyle!=f.strokeStyle)&&(l=[10,
f.strokeStyle,f.lineWidth,f.lineCap,f.lineJoin,f.miterLimit,f.lineDash,!1],this.b.push(l),this.a.push(l),null===h?this.Y={lineCap:f.lineCap,lineDash:f.lineDash,lineJoin:f.lineJoin,lineWidth:f.lineWidth,miterLimit:f.miterLimit,strokeStyle:f.strokeStyle}:(h.lineCap=f.lineCap,h.lineDash=f.lineDash,h.lineJoin=f.lineJoin,h.lineWidth=f.lineWidth,h.miterLimit=f.miterLimit,h.strokeStyle=f.strokeStyle));f=this.g;h=this.W;if(null===h||h.font!=f.font||h.textAlign!=f.textAlign||h.textBaseline!=f.textBaseline)l=
[11,f.font,f.textAlign,f.textBaseline],this.b.push(l),this.a.push(l),null===h?this.W={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline}:(h.font=f.font,h.textAlign=f.textAlign,h.textBaseline=f.textBaseline);Em(this,g);f=this.coordinates.length;b=Dm(this,b,c,d,e,!1);b=[5,f,b,this.i,this.p,this.n,this.l,this.o,null!==this.c,null!==this.f];this.b.push(b);this.a.push(b);Hm(this,g)}};
Pm.prototype.Ba=function(b){if(null===b)this.i="";else{var c=b.a;null===c?this.c=null:(c=c.a,c=xg(null===c?Cl:c),null===this.c?this.c={fillStyle:c}:this.c.fillStyle=c);var d=b.f;if(null===d)this.f=null;else{var c=d.a,e=d.d,f=d.c,g=d.e,h=d.b,d=d.f,e=m(e)?e:"round",f=null!=f?f.slice():Dl,g=m(g)?g:"round",h=m(h)?h:1,d=m(d)?d:10,c=xg(null===c?El:c);if(null===this.f)this.f={lineCap:e,lineDash:f,lineJoin:g,lineWidth:h,miterLimit:d,strokeStyle:c};else{var l=this.f;l.lineCap=e;l.lineDash=f;l.lineJoin=g;l.lineWidth=
h;l.miterLimit=d;l.strokeStyle=c}}var n=b.d,c=b.p,e=b.n,f=b.e,h=b.b,d=b.c,g=b.g,l=b.i;b=m(n)?n:"10px sans-serif";g=m(g)?g:"center";l=m(l)?l:"middle";null===this.g?this.g={font:b,textAlign:g,textBaseline:l}:(n=this.g,n.font=b,n.textAlign=g,n.textBaseline=l);this.i=m(d)?d:"";this.p=m(c)?c:0;this.n=m(e)?e:0;this.l=m(f)?f:0;this.o=m(h)?h:1}};function Qm(b,c,d,e){this.i=b;this.c=c;this.g=d;this.d=e;this.b={};this.e=Vi(1,1);this.f=zd()}
function Rm(b){for(var c in b.b){var d=b.b[c],e;for(e in d)d[e].ae()}}function Sm(b,c,d,e,f,g){var h=b.f;nk(h,.5,.5,1/d,-1/d,-e,-c[0],-c[1]);var l=b.e;l.clearRect(0,0,1,1);var n;m(b.d)&&(n=Kd(),Ld(n,c),Od(n,d*b.d,n));return Tm(b,l,h,e,f,function(b){if(0<l.getImageData(0,0,1,1).data[3]){if(b=g(b))return b;l.clearRect(0,0,1,1)}},n)}Qm.prototype.a=function(b,c){var d=m(b)?b.toString():"0",e=this.b[d];m(e)||(e={},this.b[d]=e);d=e[c];m(d)||(d=new Um[c](this.i,this.c,this.g),e[c]=d);return d};
Qm.prototype.pa=function(){return xb(this.b)};function Vm(b,c,d,e,f,g){var h=Ua(tb(b.b),Number);gb(h);var l=b.c,n=l[0],p=l[1],q=l[2],l=l[3],n=[n,p,n,l,q,l,q,p];Xe(n,0,8,2,e,n);c.save();c.beginPath();c.moveTo(n[0],n[1]);c.lineTo(n[2],n[3]);c.lineTo(n[4],n[5]);c.lineTo(n[6],n[7]);c.closePath();c.clip();for(var r,t,n=0,p=h.length;n<p;++n)for(r=b.b[h[n].toString()],q=0,l=Bm.length;q<l;++q)t=r[Bm[q]],m(t)&&Fm(t,c,d,e,f,g,t.b,void 0);c.restore()}
function Tm(b,c,d,e,f,g,h){var l=Ua(tb(b.b),Number);gb(l,function(b,c){return c-b});var n,p,q,r,t;n=0;for(p=l.length;n<p;++n)for(r=b.b[l[n].toString()],q=Bm.length-1;0<=q;--q)if(t=r[Bm[q]],m(t)&&(t=Fm(t,c,1,d,e,f,t.a,g,h)))return t}var Um={Image:Im,LineString:Jm,Polygon:Mm,Text:Pm};function Wm(b,c,d){Ye.call(this);this.sf(b,m(c)?c:0,d)}w(Wm,Ye);k=Wm.prototype;k.clone=function(){var b=new Wm(null);$e(b,this.b,this.j.slice());b.k();return b};k.Ra=function(b,c,d,e){var f=this.j;b-=f[0];var g=c-f[1];c=b*b+g*g;if(c<e){if(0===c)for(e=0;e<this.t;++e)d[e]=f[e];else for(e=this.cf()/Math.sqrt(c),d[0]=f[0]+e*b,d[1]=f[1]+e*g,e=2;e<this.t;++e)d[e]=f[e];d.length=this.t;return c}return e};k.ac=function(b,c){var d=this.j,e=b-d[0],d=c-d[1];return e*e+d*d<=Xm(this)};
k.dd=function(){return this.j.slice(0,this.t)};k.xd=function(b){var c=this.j,d=c[this.t]-c[0];return Nd(c[0]-d,c[1]-d,c[0]+d,c[1]+d,b)};k.cf=function(){return Math.sqrt(Xm(this))};function Xm(b){var c=b.j[b.t]-b.j[0];b=b.j[b.t+1]-b.j[1];return c*c+b*b}k.L=function(){return"Circle"};k.la=function(b){var c=this.I();return he(b,c)?(c=this.dd(),b[0]<=c[0]&&b[2]>=c[0]||b[1]<=c[1]&&b[3]>=c[1]?!0:Zd(b,this.Ge,this)):!1};
k.dl=function(b){var c=this.t,d=b.slice();d[c]=d[0]+(this.j[c]-this.j[0]);var e;for(e=1;e<c;++e)d[c+e]=b[e];$e(this,this.b,d);this.k()};k.sf=function(b,c,d){if(null===b)$e(this,"XY",null);else{af(this,d,b,0);null===this.j&&(this.j=[]);d=this.j;b=lf(d,b);d[b++]=d[0]+c;var e;c=1;for(e=this.t;c<e;++c)d[b++]=d[c];d.length=b}this.k()};k.el=function(b){this.j[this.t]=this.j[0]+b;this.k()};function Ym(b){We.call(this);this.d=m(b)?b:null;Zm(this)}w(Ym,We);function $m(b){var c=[],d,e;d=0;for(e=b.length;d<e;++d)c.push(b[d].clone());return c}function an(b){var c,d;if(null!==b.d)for(c=0,d=b.d.length;c<d;++c)Vc(b.d[c],"change",b.k,!1,b)}function Zm(b){var c,d;if(null!==b.d)for(c=0,d=b.d.length;c<d;++c)x(b.d[c],"change",b.k,!1,b)}k=Ym.prototype;k.clone=function(){var b=new Ym(null);b.rh(this.d);return b};
k.Ra=function(b,c,d,e){if(e<Qd(this.I(),b,c))return e;var f=this.d,g,h;g=0;for(h=f.length;g<h;++g)e=f[g].Ra(b,c,d,e);return e};k.ac=function(b,c){var d=this.d,e,f;e=0;for(f=d.length;e<f;++e)if(d[e].ac(b,c))return!0;return!1};k.xd=function(b){Nd(Infinity,Infinity,-Infinity,-Infinity,b);for(var c=this.d,d=0,e=c.length;d<e;++d)Xd(b,c[d].I());return b};k.Uf=function(){return $m(this.d)};
k.Te=function(b){this.i!=this.a&&(yb(this.e),this.f=0,this.i=this.a);if(0>b||0!==this.f&&b<this.f)return this;var c=b.toString();if(this.e.hasOwnProperty(c))return this.e[c];var d=[],e=this.d,f=!1,g,h;g=0;for(h=e.length;g<h;++g){var l=e[g],n=l.Te(b);d.push(n);n!==l&&(f=!0)}if(f)return b=new Ym(null),an(b),b.d=d,Zm(b),b.k(),this.e[c]=b;this.f=b;return this};k.L=function(){return"GeometryCollection"};k.la=function(b){var c=this.d,d,e;d=0;for(e=c.length;d<e;++d)if(c[d].la(b))return!0;return!1};
k.pa=function(){return 0==this.d.length};k.rh=function(b){b=$m(b);an(this);this.d=b;Zm(this);this.k()};k.oa=function(b){var c=this.d,d,e;d=0;for(e=c.length;d<e;++d)c[d].oa(b);this.k()};k.Na=function(b,c){var d=this.d,e,f;e=0;for(f=d.length;e<f;++e)d[e].Na(b,c);this.k()};k.N=function(){an(this);Ym.S.N.call(this)};function bn(b,c,d,e,f){var g=NaN,h=NaN,l=(d-c)/e;if(0!==l)if(1==l)g=b[c],h=b[c+1];else if(2==l)g=.5*b[c]+.5*b[c+e],h=.5*b[c+1]+.5*b[c+e+1];else{var h=b[c],l=b[c+1],n=0,g=[0],p;for(p=c+e;p<d;p+=e){var q=b[p],r=b[p+1],n=n+Math.sqrt((q-h)*(q-h)+(r-l)*(r-l));g.push(n);h=q;l=r}d=.5*n;for(var t,h=hb,l=0,n=g.length;l<n;)p=l+n>>1,q=h(d,g[p]),0<q?l=p+1:(n=p,t=!q);t=t?l:~l;0>t?(d=(d-g[-t-2])/(g[-t-1]-g[-t-2]),c+=(-t-2)*e,g=Xb(b[c],b[c+e],d),h=Xb(b[c+1],b[c+e+1],d)):(g=b[c+t*e],h=b[c+t*e+1])}return null!=f?
(f[0]=g,f[1]=h,f):[g,h]}function cn(b,c,d,e,f,g){if(d==c)return null;if(f<b[c+e-1])return g?(d=b.slice(c,c+e),d[e-1]=f,d):null;if(b[d-1]<f)return g?(d=b.slice(d-e,d),d[e-1]=f,d):null;if(f==b[c+e-1])return b.slice(c,c+e);c/=e;for(d/=e;c<d;)g=c+d>>1,f<b[(g+1)*e-1]?d=g:c=g+1;d=b[c*e-1];if(f==d)return b.slice((c-1)*e,(c-1)*e+e);g=(f-d)/(b[(c+1)*e-1]-d);d=[];var h;for(h=0;h<e-1;++h)d.push(Xb(b[(c-1)*e+h],b[c*e+h],g));d.push(f);return d}
    function dn(b, c, d, e, f, g) {
        var h = 0;
        if (g) return cn(b, h, c[c.length - 1], d, e, f);
        if (e < b[d - 1]) return f ? (b = b.slice(0, d), b[d - 1] = e, b) : null;
        if (b[b.length - 1] < e) return f ? (b = b.slice(b.length - d), b[d - 1] = e, b) : null;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var l = c[f];
            if (h != l) {
                if (e < b[h + d - 1]) break;
                if (e <= b[l - 1]) return cn(b, h, l, d, e, !1);
                h = l
            }
        }
        return null
    }
    function N(b, c) {
        Ye.call(this);
        this.c = null;
        this.o = this.r = this.g = -1;
        this.ca(b, c)
    }
    w(N, Ye);
    k = N.prototype;
    k.si = function (b) {
        null === this.j ? this.j = b.slice() : db(this.j, b);
        this.k()
    };
    k.clone = function () {
        var b = new N(null);
        en(b, this.b, this.j.slice());
        return b
    };
    k.Ra = function (b, c, d, e) {
        if (e < Qd(this.I(), b, c)) return e;
        this.o != this.a && (this.r = Math.sqrt(gf(this.j, 0, this.j.length, this.t, 0)), this.o = this.a);
        return jf(this.j, 0, this.j.length, this.t, this.r, !1, b, c, d, e)
    };
    k.Fi=function(b,c){return zf(this.j,0,this.j.length,this.t,b,c)};k.fl=function(b,c){return"XYM"!=this.b&&"XYZM"!=this.b?null:cn(this.j,0,this.j.length,this.t,b,m(c)?c:!1)};k.M=function(){return of(this.j,0,this.j.length,this.t)};k.gl=function(){var b=this.j,c=this.t,d=b[0],e=b[1],f=0,g;for(g=0+c;g<this.j.length;g+=c)var h=b[g],l=b[g+1],f=f+Math.sqrt((h-d)*(h-d)+(l-e)*(l-e)),d=h,e=l;return f};function rm(b){b.g!=b.a&&(b.c=bn(b.j,0,b.j.length,b.t,b.c),b.g=b.a);return b.c}
    k.wc = function (b) {
        var c = [];
        c.length = qf(this.j, 0, this.j.length, this.t, b, c, 0);
        b = new N(null);
        en(b, "XY", c);
        return b
    };
    k.L = function () {
        return "LineString"
    };
    k.la = function (b) {
        return Af(this.j, 0, this.j.length, this.t, b)
    };
    k.ca = function (b, c) {
        null === b ? en(this, "XY", null) : (af(this, c, b, 1), null === this.j && (this.j = []), this.j.length = mf(this.j, 0, b, this.t), this.k())
    };
    function en(b, c, d) {
        $e(b, c, d);
        b.k()
    }
    function O(b, c) {
        Ye.call(this);
        this.c = [];
        this.g = this.o = -1;
        this.ca(b, c)
    }
    w(O, Ye);
    k = O.prototype;
    k.ti = function (b) {
        null === this.j ? this.j = b.j.slice() : db(this.j, b.j.slice());
        this.c.push(this.j.length);
        this.k()
    };
    k.clone = function () {
        var b = new O(null);
        fn(b, this.b, this.j.slice(), this.c.slice());
        return b
    };
    k.Ra = function (b, c, d, e) {
        if (e < Qd(this.I(), b, c)) return e;
        this.g != this.a && (this.o = Math.sqrt(hf(this.j, 0, this.c, this.t, 0)), this.g = this.a);
        return kf(this.j, 0, this.c, this.t, this.o, !1, b, c, d, e)
    };
    k.il=function(b,c,d){return"XYM"!=this.b&&"XYZM"!=this.b||0===this.j.length?null:dn(this.j,this.c,this.t,b,m(c)?c:!1,m(d)?d:!1)};k.M=function(){return pf(this.j,0,this.c,this.t)};k.cj=function(b){if(0>b||this.c.length<=b)return null;var c=new N(null);en(c,this.b,this.j.slice(0===b?0:this.c[b-1],this.c[b]));return c};k.ad=function(){var b=this.j,c=this.c,d=this.b,e=[],f=0,g,h;g=0;for(h=c.length;g<h;++g){var l=c[g],n=new N(null);en(n,d,b.slice(f,l));e.push(n);f=l}return e};
function sm(b){var c=[],d=b.j,e=0,f=b.c;b=b.t;var g,h;g=0;for(h=f.length;g<h;++g){var l=f[g],e=bn(d,e,l,b);db(c,e);e=l}return c}k.wc=function(b){var c=[],d=[],e=this.j,f=this.c,g=this.t,h=0,l=0,n,p;n=0;for(p=f.length;n<p;++n){var q=f[n],l=qf(e,h,q,g,b,c,l);d.push(l);h=q}c.length=l;b=new O(null);fn(b,"XY",c,d);return b};k.L=function(){return"MultiLineString"};k.la=function(b){a:{var c=this.j,d=this.c,e=this.t,f=0,g,h;g=0;for(h=d.length;g<h;++g){if(Af(c,f,d[g],e,b)){b=!0;break a}f=d[g]}b=!1}return b};
    k.ca = function (b, c) {
        if (null === b) fn(this, "XY", null, this.c); else {
            af(this, c, b, 2);
            null === this.j && (this.j = []);
            var d = nf(this.j, 0, b, this.t, this.c);
            this.j.length = 0 === d.length ? 0 : d[d.length - 1];
            this.k()
        }
    };
    function fn(b, c, d, e) {
        $e(b, c, d);
        b.c = e;
        b.k()
    }
    function gn(b, c) {
        var d = "XY", e = [], f = [], g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var l = c[g];
            0 === g && (d = l.b);
            db(e, l.j);
            f.push(e.length)
        }
        fn(b, d, e, f)
    }
    function hn(b, c) {
        Ye.call(this);
        this.ca(b, c)
    }
    w(hn, Ye);
    k = hn.prototype;
    k.vi = function (b) {
        null === this.j ? this.j = b.j.slice() : db(this.j, b.j);
        this.k()
    };
    k.clone = function () {
        var b = new hn(null);
        $e(b, this.b, this.j.slice());
        b.k();
        return b
    };
    k.Ra = function (b, c, d, e) {
        if (e < Qd(this.I(), b, c)) return e;
        var f = this.j, g = this.t, h, l, n;
        h = 0;
        for (l = f.length; h < l; h += g) if (n = ef(b, c, f[h], f[h + 1]), n < e) {
            e = n;
            for (n = 0; n < g; ++n) d[n] = f[h + n];
            d.length = g
        }
        return e
    };
    k.M = function () {
        return of(this.j, 0, this.j.length, this.t)
    };
    k.lj=function(b){var c=null===this.j?0:this.j.length/this.t;if(0>b||c<=b)return null;c=new C(null);uf(c,this.b,this.j.slice(b*this.t,(b+1)*this.t));return c};k.$d=function(){var b=this.j,c=this.b,d=this.t,e=[],f,g;f=0;for(g=b.length;f<g;f+=d){var h=new C(null);uf(h,c,b.slice(f,f+d));e.push(h)}return e};k.L=function(){return"MultiPoint"};k.la=function(b){var c=this.j,d=this.t,e,f,g,h;e=0;for(f=c.length;e<f;e+=d)if(g=c[e],h=c[e+1],Sd(b,g,h))return!0;return!1};
k.ca=function(b,c){null===b?$e(this,"XY",null):(af(this,c,b,1),null===this.j&&(this.j=[]),this.j.length=mf(this.j,0,b,this.t));this.k()};function P(b,c){Ye.call(this);this.c=[];this.o=-1;this.r=null;this.K=this.q=this.D=-1;this.g=null;this.ca(b,c)}w(P,Ye);k=P.prototype;k.wi=function(b){if(null===this.j)this.j=b.j.slice(),b=b.c.slice(),this.c.push();else{var c=this.j.length;db(this.j,b.j);b=b.c.slice();var d,e;d=0;for(e=b.length;d<e;++d)b[d]+=c}this.c.push(b);this.k()};k.clone=function(){var b=new P(null);jn(b,this.b,this.j.slice(),this.c.slice());return b};
k.Ra=function(b,c,d,e){if(e<Qd(this.I(),b,c))return e;if(this.q!=this.a){var f=this.c,g=0,h=0,l,n;l=0;for(n=f.length;l<n;++l)var p=f[l],h=hf(this.j,g,p,this.t,h),g=p[p.length-1];this.D=Math.sqrt(h);this.q=this.a}f=tm(this);g=this.c;h=this.t;l=this.D;n=0;var p=m(void 0)?void 0:[NaN,NaN],q,r;q=0;for(r=g.length;q<r;++q){var t=g[q];e=kf(f,n,t,h,l,!0,b,c,d,e,p);n=t[t.length-1]}return e};
k.ac=function(b,c){var d;a:{d=tm(this);var e=this.c,f=0;if(0!==e.length){var g,h;g=0;for(h=e.length;g<h;++g){var l=e[g];if(xf(d,f,l,this.t,b,c)){d=!0;break a}f=l[l.length-1]}}d=!1}return d};k.jl=function(){var b=tm(this),c=this.c,d=0,e=0,f,g;f=0;for(g=c.length;f<g;++f)var h=c[f],e=e+cf(b,d,h,this.t),d=h[h.length-1];return e};
k.M=function(b){var c;m(b)?(c=tm(this).slice(),Ff(c,this.c,this.t,b)):c=this.j;b=c;c=this.c;var d=this.t,e=0,f=m(void 0)?void 0:[],g=0,h,l;h=0;for(l=c.length;h<l;++h){var n=c[h];f[g++]=pf(b,e,n,d,f[g]);e=n[n.length-1]}f.length=g;return f};
function um(b){if(b.o!=b.a){var c=b.j,d=b.c,e=b.t,f=0,g=[],h,l,n=Kd();h=0;for(l=d.length;h<l;++h){var p=d[h],n=Yd(Nd(Infinity,Infinity,-Infinity,-Infinity,void 0),c,f,p[0],e);g.push((n[0]+n[2])/2,(n[1]+n[3])/2);f=p[p.length-1]}c=tm(b);d=b.c;e=b.t;f=0;h=[];l=0;for(n=d.length;l<n;++l)p=d[l],h=yf(c,f,p,e,g,2*l,h),f=p[p.length-1];b.r=h;b.o=b.a}return b.r}k.$i=function(){var b=new hn(null),c=um(this).slice();$e(b,"XY",c);b.k();return b};
function tm(b){if(b.K!=b.a){var c=b.j,d;a:{d=b.c;var e,f;e=0;for(f=d.length;e<f;++e)if(!Df(c,d[e],b.t,void 0)){d=!1;break a}d=!0}d?b.g=c:(b.g=c.slice(),b.g.length=Ff(b.g,b.c,b.t));b.K=b.a}return b.g}k.wc=function(b){var c=[],d=[],e=this.j,f=this.c,g=this.t;b=Math.sqrt(b);var h=0,l=0,n,p;n=0;for(p=f.length;n<p;++n){var q=f[n],r=[],l=rf(e,h,q,g,b,c,l,r);d.push(r);h=q[q.length-1]}c.length=l;e=new P(null);jn(e,"XY",c,d);return e};
k.nj=function(b){if(0>b||this.c.length<=b)return null;var c;0===b?c=0:(c=this.c[b-1],c=c[c.length-1]);b=this.c[b].slice();var d=b[b.length-1];if(0!==c){var e,f;e=0;for(f=b.length;e<f;++e)b[e]-=c}e=new D(null);Gf(e,this.b,this.j.slice(c,d),b);return e};k.Gd=function(){var b=this.b,c=this.j,d=this.c,e=[],f=0,g,h,l,n;g=0;for(h=d.length;g<h;++g){var p=d[g].slice(),q=p[p.length-1];if(0!==f)for(l=0,n=p.length;l<n;++l)p[l]-=f;l=new D(null);Gf(l,b,c.slice(f,q),p);e.push(l);f=q}return e};k.L=function(){return"MultiPolygon"};
k.la=function(b){a:{var c=tm(this),d=this.c,e=this.t,f=0,g,h;g=0;for(h=d.length;g<h;++g){var l=d[g];if(Bf(c,f,l,e,b)){b=!0;break a}f=l[l.length-1]}b=!1}return b};k.ca=function(b,c){if(null===b)jn(this,"XY",null,this.c);else{af(this,c,b,3);null===this.j&&(this.j=[]);var d=this.j,e=this.t,f=this.c,g=0,f=m(f)?f:[],h=0,l,n;l=0;for(n=b.length;l<n;++l)g=nf(d,g,b[l],e,f[h]),f[h++]=g,g=g[g.length-1];f.length=h;0===f.length?this.j.length=0:(d=f[f.length-1],this.j.length=0===d.length?0:d[d.length-1]);this.k()}};
    function jn(b, c, d, e) {
        $e(b, c, d);
        b.c = e;
        b.k()
    }
    function kn(b, c) {
        var d = "XY", e = [], f = [], g, h, l;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var n = c[g];
            0 === g && (d = n.b);
            var p = e.length;
            l = n.c;
            var q, r;
            q = 0;
            for (r = l.length; q < r; ++q) l[q] += p;
            db(e, n.j);
            f.push(l)
        }
        jn(b, d, e, f)
    }
    function ln(b, c) {
        return ma(b) - ma(c)
    }
    function mn(b, c) {
        var d = .5 * b / c;
        return d * d
    }
    function nn(b, c, d, e, f, g) {
        var h = !1, l, n;
        l = d.f;
        null !== l && (n = l.hd(), 2 == n || 3 == n ? l.wf(f, g) : (0 == n && l.load(), l.Ye(f, g), h = !0));
        f = (0, d.e)(c);
        null != f && (e = f.Te(e), (0, on[e.L()])(b, e, d, c));
        return h
    }
    var on={Point:function(b,c,d,e){var f=d.f;if(null!==f){if(2!=f.hd())return;var g=b.a(d.a,"Image");g.$a(f);g.pb(c,e)}f=d.b;null!==f&&(b=b.a(d.a,"Text"),b.Ba(f),b.qb(c.M(),0,2,2,c,e))},LineString:function(b,c,d,e){var f=d.c;if(null!==f){var g=b.a(d.a,"LineString");g.Aa(null,f);g.zb(c,e)}f=d.b;null!==f&&(b=b.a(d.a,"Text"),b.Ba(f),b.qb(rm(c),0,2,2,c,e))},Polygon:function(b,c,d,e){var f=d.d,g=d.c;if(null!==f||null!==g){var h=b.a(d.a,"Polygon");h.Aa(f,g);h.Qb(c,e)}f=d.b;null!==f&&(b=b.a(d.a,"Text"),b.Ba(f),
b.qb(If(c),0,2,2,c,e))},MultiPoint:function(b,c,d,e){var f=d.f;if(null!==f){if(2!=f.hd())return;var g=b.a(d.a,"Image");g.$a(f);g.ob(c,e)}f=d.b;null!==f&&(b=b.a(d.a,"Text"),b.Ba(f),d=c.j,b.qb(d,0,d.length,c.t,c,e))},MultiLineString:function(b,c,d,e){var f=d.c;if(null!==f){var g=b.a(d.a,"LineString");g.Aa(null,f);g.uc(c,e)}f=d.b;null!==f&&(b=b.a(d.a,"Text"),b.Ba(f),d=sm(c),b.qb(d,0,d.length,2,c,e))},MultiPolygon:function(b,c,d,e){var f=d.d,g=d.c;if(null!==g||null!==f){var h=b.a(d.a,"Polygon");h.Aa(f,
g);h.vc(c,e)}f=d.b;null!==f&&(b=b.a(d.a,"Text"),b.Ba(f),d=um(c),b.qb(d,0,d.length,2,c,e))},GeometryCollection:function(b,c,d,e){c=c.d;var f,g;f=0;for(g=c.length;f<g;++f)(0,on[c[f].L()])(b,c[f],d,e)},Circle:function(b,c,d,e){var f=d.d,g=d.c;if(null!==f||null!==g){var h=b.a(d.a,"Polygon");h.Aa(f,g);h.tc(c,e)}f=d.b;null!==f&&(b=b.a(d.a,"Text"),b.Ba(f),b.qb(c.dd(),0,2,2,c,e))}};function pn(b,c,d,e,f){mk.call(this,b,c,d,2,e);this.b=f}w(pn,mk);pn.prototype.a=function(){return this.b};function qn(b){Dh.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,projection:b.projection,state:b.state});this.n=m(b.resolutions)?b.resolutions:null}w(qn,Dh);function rn(b,c){if(null!==b.n){var d=ac(b.n,c,0);c=b.n[d]}return c}qn.prototype.i=function(b){b=b.target;switch(b.state){case 1:this.dispatchEvent(new sn(tn,b));break;case 2:this.dispatchEvent(new sn(un,b));break;case 3:this.dispatchEvent(new sn(vn,b))}};function wn(b,c){b.a().src=c}
function sn(b,c){rc.call(this,b);this.image=c}w(sn,rc);var tn="imageloadstart",un="imageloadend",vn="imageloaderror";function xn(b){qn.call(this,{attributions:b.attributions,logo:b.logo,projection:b.projection,resolutions:b.resolutions,state:m(b.state)?b.state:void 0});this.R=b.canvasFunction;this.D=null;this.K=0;this.T=m(b.ratio)?b.ratio:1.5}w(xn,qn);xn.prototype.Bc=function(b,c,d,e){c=rn(this,c);var f=this.D;if(null!==f&&this.K==this.a&&f.resolution==c&&f.e==d&&Td(f.I(),b))return f;b=b.slice();ke(b,this.T);e=this.R(b,c,d,[ie(b)/c*d,fe(b)/c*d],e);null===e||(f=new pn(b,c,d,this.e,e));this.D=f;this.K=this.a;return f};function yn(b){fd.call(this);this.aa=void 0;this.b="geometry";this.e=null;this.c=void 0;this.d=null;x(this,hd(this.b),this.Nd,!1,this);m(b)&&(b instanceof We||null===b?this.La(b):this.u(b))}w(yn,fd);k=yn.prototype;k.clone=function(){var b=new yn(this.H());b.Jc(this.b);var c=this.Q();null!=c&&b.La(c.clone());c=this.e;null===c||b.af(c);return b};k.Q=function(){return this.get(this.b)};k.Xi=function(){return this.aa};k.Wi=function(){return this.b};k.Ek=function(){return this.e};k.Fk=function(){return this.c};
    k.Gk = function () {
        this.k()
    };
    k.Nd = function () {
        null !== this.d && (Wc(this.d), this.d = null);
        var b = this.Q();
        null != b && (this.d = x(b, "change", this.Gk, !1, this));
        this.k()
    };
    k.La = function (b) {
        this.set(this.b, b)
    };
    k.af = function (b) {
        this.e = b;
        null === b ? b = void 0 : ka(b) || (b = ga(b) ? b : [b], b = me(b));
        this.c = b;
        this.k()
    };
    k.Ob = function (b) {
        this.aa = b;
        this.k()
    };
    k.Jc = function (b) {
        Vc(this, hd(this.b), this.Nd, !1, this);
        this.b = b;
        x(this, hd(this.b), this.Nd, !1, this);
        this.Nd()
    };
    function zn(b) {
        b.prototype.then = b.prototype.then;
        b.prototype.$goog_Thenable = !0
    }
    function An(b) {
        if (!b) return !1;
        try {
            return !!b.$goog_Thenable
        } catch (c) {
            return !1
        }
    }
    function Bn(b, c) {
        Cn || Dn();
        En || (Cn(), En = !0);
        Fn.push(new Gn(b, c))
    }
    var Cn;
    function Dn() {
        if (ba.Promise && ba.Promise.resolve) {
            var b = ba.Promise.resolve();
            Cn = function () {
                b.then(Hn)
            }
        } else Cn = function () {
            qi(Hn)
        }
    }
    var En = !1, Fn = [];
    function Hn() {
        for (; Fn.length;) {
            var b = Fn;
            Fn = [];
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    d.a.call(d.b)
                } catch (e) {
                    pi(e)
                }
            }
        }
        En = !1
    }
    function Gn(b, c) {
        this.a = b;
        this.b = c
    }
    function In(b, c) {
        this.b = Jn;
        this.f = void 0;
        this.a = this.c = null;
        this.d = this.e = !1;
        try {
            var d = this;
            b.call(c, function (b) {
                Kn(d, Ln, b)
            }, function (b) {
                Kn(d, Mn, b)
            })
        } catch (e) {
            Kn(this, Mn, e)
        }
    }
    var Jn = 0, Ln = 2, Mn = 3;
    In.prototype.then = function (b, c, d) {
        return Nn(this, ka(b) ? b : null, ka(c) ? c : null, d)
    };
    zn(In);
    In.prototype.cancel = function (b) {
        this.b == Jn && Bn(function () {
            var c = new On(b);
            Pn(this, c)
        }, this)
    };
    function Pn(b,c){if(b.b==Jn)if(b.c){var d=b.c;if(d.a){for(var e=0,f=-1,g=0,h;h=d.a[g];g++)if(h=h.Rc)if(e++,h==b&&(f=g),0<=f&&1<e)break;0<=f&&(d.b==Jn&&1==e?Pn(d,c):(e=d.a.splice(f,1)[0],Qn(d,e,Mn,c)))}}else Kn(b,Mn,c)}function Rn(b,c){b.a&&b.a.length||b.b!=Ln&&b.b!=Mn||Sn(b);b.a||(b.a=[]);b.a.push(c)}
function Nn(b,c,d,e){var f={Rc:null,Sg:null,Ug:null};f.Rc=new In(function(b,h){f.Sg=c?function(d){try{var f=c.call(e,d);b(f)}catch(p){h(p)}}:b;f.Ug=d?function(c){try{var f=d.call(e,c);!m(f)&&c instanceof On?h(c):b(f)}catch(p){h(p)}}:h});f.Rc.c=b;Rn(b,f);return f.Rc}In.prototype.g=function(b){this.b=Jn;Kn(this,Ln,b)};In.prototype.i=function(b){this.b=Jn;Kn(this,Mn,b)};
function Kn(b,c,d){if(b.b==Jn){if(b==d)c=Mn,d=new TypeError("Promise cannot resolve to itself");else{if(An(d)){b.b=1;d.then(b.g,b.i,b);return}if(la(d))try{var e=d.then;if(ka(e)){Tn(b,d,e);return}}catch(f){c=Mn,d=f}}b.f=d;b.b=c;Sn(b);c!=Mn||d instanceof On||Un(b,d)}}function Tn(b,c,d){function e(c){g||(g=!0,b.i(c))}function f(c){g||(g=!0,b.g(c))}b.b=1;var g=!1;try{d.call(c,f,e)}catch(h){e(h)}}function Sn(b){b.e||(b.e=!0,Bn(b.p,b))}
    In.prototype.p = function () {
        for (; this.a && this.a.length;) {
            var b = this.a;
            this.a = [];
            for (var c = 0; c < b.length; c++) Qn(this, b[c], this.b, this.f)
        }
        this.e = !1
    };
    function Qn(b, c, d, e) {
        if (d == Ln) c.Sg(e); else {
            if (c.Rc) for (; b && b.d; b = b.c) b.d = !1;
            c.Ug(e)
        }
    }
    function Un(b, c) {
        b.d = !0;
        Bn(function () {
            b.d && Vn.call(null, c)
        })
    }
    var Vn = pi;
    function On(b) {
        xa.call(this, b)
    }
    w(On, xa);
    On.prototype.name = "cancel";
    function Wn(b, c, d) {
        if (ka(b)) d && (b = ra(b, d)); else if (b && "function" == typeof b.handleEvent) b = ra(b.handleEvent, b); else throw Error("Invalid listener argument");
        return 2147483647 < c ? -1 : ba.setTimeout(b, c || 0)
    }
    var Xn = ba.JSON.parse, Yn = ba.JSON.stringify;
    function Zn() {
    }
    Zn.prototype.a = null;
    function $n(b) {
        var c;
        (c = b.a) || (c = {}, ao(b) && (c[0] = !0, c[1] = !0), c = b.a = c);
        return c
    }
    var bo;
    function co() {
    }
    w(co, Zn);
    function eo(b) {
        return (b = ao(b)) ? new ActiveXObject(b) : new XMLHttpRequest
    }
    function ao(b) {
        if (!b.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < c.length; d++) {
                var e = c[d];
                try {
                    return new ActiveXObject(e), b.b = e
                } catch (f) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return b.b
    }
    bo = new co;
    var fo = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    function go(b) {
        if (ho) {
            ho = !1;
            var c = ba.location;
            if (c) {
                var d = c.href;
                if (d && (d = (d = go(d)[3] || null) ? decodeURI(d) : d) && d != c.hostname) throw ho = !0, Error();
            }
        }
        return b.match(fo)
    }
    var ho = Kb;
    function io(b,c){for(var d=b.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null,h=null;0<=f?(g=d[e].substring(0,f),h=d[e].substring(f+1)):g=d[e];c(g,h?decodeURIComponent(h.replace(/\+/g," ")):"")}}function jo(b){if(b[1]){var c=b[0],d=c.indexOf("#");0<=d&&(b.push(c.substr(d)),b[0]=c=c.substr(0,d));d=c.indexOf("?");0>d?b[1]="?":d==c.length-1&&(b[1]=void 0)}return b.join("")}
    function ko(b, c, d) {
        if (ga(c)) for (var e = 0; e < c.length; e++) ko(b, String(c[e]), d); else null != c && d.push("&", b, "" === c ? "" : "=", encodeURIComponent(String(c)))
    }
    function lo(b, c) {
        for (var d in c) ko(d, c[d], b);
        return b
    }
    function mo(b) {
        $c.call(this);
        this.q = new wi;
        this.i = b || null;
        this.a = !1;
        this.g = this.Z = null;
        this.e = this.l = "";
        this.b = this.n = this.d = this.p = !1;
        this.f = 0;
        this.c = null;
        this.o = no;
        this.r = this.D = !1
    }
    w(mo, $c);
    var no = "", oo = /^https?$/i, po = ["POST", "PUT"];
    k = mo.prototype;
    k.send=function(b,c,d,e){if(this.Z)throw Error("[goog.net.XhrIo] Object is active with another request="+this.l+"; newUri="+b);c=c?c.toUpperCase():"GET";this.l=b;this.e="";this.p=!1;this.a=!0;this.Z=this.i?eo(this.i):eo(bo);this.g=this.i?$n(this.i):$n(bo);this.Z.onreadystatechange=ra(this.Tg,this);try{this.n=!0,this.Z.open(c,String(b),!0),this.n=!1}catch(f){qo(this,f);return}b=d||"";var g=this.q.clone();e&&vi(e,function(b,c){g.set(c,b)});e=Wa(g.G(),ro);d=ba.FormData&&b instanceof ba.FormData;!Ya(po,
c)||e||d||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");g.forEach(function(b,c){this.Z.setRequestHeader(c,b)},this);this.o&&(this.Z.responseType=this.o);"withCredentials"in this.Z&&(this.Z.withCredentials=this.D);try{so(this),0<this.f&&((this.r=to(this.Z))?(this.Z.timeout=this.f,this.Z.ontimeout=ra(this.oc,this)):this.c=Wn(this.oc,this.f,this)),this.d=!0,this.Z.send(b),this.d=!1}catch(h){qo(this,h)}};function to(b){return Ib&&Rb(9)&&ja(b.timeout)&&m(b.ontimeout)}
function ro(b){return"content-type"==b.toLowerCase()}k.oc=function(){"undefined"!=typeof aa&&this.Z&&(this.e="Timed out after "+this.f+"ms, aborting",this.dispatchEvent("timeout"),this.Z&&this.a&&(this.a=!1,this.b=!0,this.Z.abort(),this.b=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),uo(this)))};function qo(b,c){b.a=!1;b.Z&&(b.b=!0,b.Z.abort(),b.b=!1);b.e=c;vo(b);uo(b)}function vo(b){b.p||(b.p=!0,b.dispatchEvent("complete"),b.dispatchEvent("error"))}
k.N=function(){this.Z&&(this.a&&(this.a=!1,this.b=!0,this.Z.abort(),this.b=!1),uo(this,!0));mo.S.N.call(this)};k.Tg=function(){this.Y||(this.n||this.d||this.b?wo(this):this.Tm())};k.Tm=function(){wo(this)};
function wo(b){if(b.a&&"undefined"!=typeof aa&&(!b.g[1]||4!=xo(b)||2!=yo(b)))if(b.d&&4==xo(b))Wn(b.Tg,0,b);else if(b.dispatchEvent("readystatechange"),4==xo(b)){b.a=!1;try{if(zo(b))b.dispatchEvent("complete"),b.dispatchEvent("success");else{var c;try{c=2<xo(b)?b.Z.statusText:""}catch(d){c=""}b.e=c+" ["+yo(b)+"]";vo(b)}}finally{uo(b)}}}function uo(b,c){if(b.Z){so(b);var d=b.Z,e=b.g[0]?ca:null;b.Z=null;b.g=null;c||b.dispatchEvent("ready");try{d.onreadystatechange=e}catch(f){}}}
function so(b){b.Z&&b.r&&(b.Z.ontimeout=null);ja(b.c)&&(ba.clearTimeout(b.c),b.c=null)}function zo(b){var c=yo(b),d;switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:d=!0;break;default:d=!1}if(!d){if(c=0===c)b=go(String(b.l))[1]||null,!b&&self.location&&(b=self.location.protocol,b=b.substr(0,b.length-1)),c=!oo.test(b?b.toLowerCase():"");d=c}return d}function xo(b){return b.Z?b.Z.readyState:0}function yo(b){try{return 2<xo(b)?b.Z.status:-1}catch(c){return-1}}
    function Ao(b) {
        try {
            return b.Z ? b.Z.responseText : ""
        } catch (c) {
            return ""
        }
    }
    function Bo(b) {
        if ("undefined" != typeof XMLSerializer) return (new XMLSerializer).serializeToString(b);
        if (b = b.xml) return b;
        throw Error("Your browser does not support serializing XML documents");
    }
    var Co;
    a:if (document.implementation && document.implementation.createDocument) Co = document.implementation.createDocument("", "", null); else {
        if ("undefined" != typeof ActiveXObject) {
            var Do = new ActiveXObject("MSXML2.DOMDocument");
            if (Do) {
                Do.resolveExternals = !1;
                Do.validateOnParse = !1;
                try {
                    Do.setProperty("ProhibitDTD", !0), Do.setProperty("MaxXMLSize", 2048), Do.setProperty("MaxElementDepth", 256)
                } catch (Eo) {
                }
            }
            if (Do) {
                Co = Do;
                break a
            }
        }
        throw Error("Your browser does not support creating new documents");
    }
    var Fo = Co;
    function Go(b,c){return Fo.createElementNS(b,c)}function Ho(b,c){null===b&&(b="");return Fo.createNode(1,c,b)}var Io=document.implementation&&document.implementation.createDocument?Go:Ho;function Jo(b,c){return Ko(b,c,[]).join("")}function Ko(b,c,d){if(4==b.nodeType||3==b.nodeType)c?d.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g,"")):d.push(b.nodeValue);else for(b=b.firstChild;null!==b;b=b.nextSibling)Ko(b,c,d);return d}function Lo(b){return b.localName}
function Mo(b){var c=b.localName;return m(c)?c:b.baseName}var No=Ib?Mo:Lo;function Oo(b){return b instanceof Document}function Po(b){return la(b)&&9==b.nodeType}var Qo=Ib?Po:Oo;function Ro(b){return b instanceof Node}function So(b){return la(b)&&m(b.nodeType)}var To=Ib?So:Ro;function Uo(b,c,d){return b.getAttributeNS(c,d)||""}function Vo(b,c,d){var e="";b=Wo(b,c,d);m(b)&&(e=b.nodeValue);return e}var Xo=document.implementation&&document.implementation.createDocument?Uo:Vo;
function Yo(b,c,d){return b.getAttributeNodeNS(c,d)}function Zo(b,c,d){var e=null;b=b.attributes;for(var f,g,h=0,l=b.length;h<l;++h)if(f=b[h],f.namespaceURI==c&&(g=f.prefix?f.prefix+":"+d:d,g==f.nodeName)){e=f;break}return e}var Wo=document.implementation&&document.implementation.createDocument?Yo:Zo;function $o(b,c,d,e){b.setAttributeNS(c,d,e)}function ap(b,c,d,e){null===c?b.setAttribute(d,e):(c=b.ownerDocument.createNode(2,d,c),c.nodeValue=e,b.setAttributeNode(c))}
var bp=document.implementation&&document.implementation.createDocument?$o:ap;function cp(b){return(new DOMParser).parseFromString(b,"application/xml")}function dp(b,c){return function(d,e){var f=b.call(c,d,e);m(f)&&db(e[e.length-1],f)}}function ep(b,c){return function(d,e){var f=b.call(m(c)?c:this,d,e);m(f)&&e[e.length-1].push(f)}}function fp(b,c){return function(d,e){var f=b.call(m(c)?c:this,d,e);m(f)&&(e[e.length-1]=f)}}
function gp(b){return function(c,d){var e=b.call(m(void 0)?void 0:this,c,d);m(e)&&Cb(d[d.length-1],m(void 0)?void 0:c.localName).push(e)}}function Q(b,c){return function(d,e){var f=b.call(m(void 0)?void 0:this,d,e);m(f)&&(e[e.length-1][m(c)?c:d.localName]=f)}}function T(b,c,d){return hp(b,c,d)}function U(b,c){return function(d,e,f){b.call(m(c)?c:this,d,e,f);f[f.length-1].O.appendChild(d)}}
function ip(b){var c,d;return function(e,f,g){if(!m(c)){c={};var h={};h[e.localName]=b;c[e.namespaceURI]=h;d=jp(e.localName)}kp(c,d,f,g)}}function jp(b,c){return function(d,e,f){d=e[e.length-1].O;e=b;m(e)||(e=f);f=c;m(c)||(f=d.namespaceURI);return Io(f,e)}}var lp=jp();function mp(b,c){for(var d=c.length,e=Array(d),f=0;f<d;++f)e[f]=b[c[f]];return e}function hp(b,c,d){d=m(d)?d:{};var e,f;e=0;for(f=b.length;e<f;++e)d[b[e]]=c;return d}
    function np(b, c, d, e) {
        for (c = c.firstElementChild; null !== c; c = c.nextElementSibling) {
            var f = b[c.namespaceURI];
            m(f) && (f = f[c.localName], m(f) && f.call(e, c, d))
        }
    }
    function V(b, c, d, e, f) {
        e.push(b);
        np(c, d, e, f);
        return e.pop()
    }
    function kp(b, c, d, e, f, g) {
        for (var h = (m(f) ? f : d).length, l, n, p = 0; p < h; ++p) l = d[p], m(l) && (n = c.call(g, l, e, m(f) ? f[p] : void 0), m(n) && b[n.namespaceURI][n.localName].call(g, n, l, e))
    }
    function op(b, c, d, e, f, g, h) {
        f.push(b);
        kp(c, d, e, f, g, h);
        f.pop()
    }
    function pp(b, c, d) {
        return function (e, f, g) {
            e = new mo;
            e.o = "text";
            x(e, "complete", function (b) {
                b = b.target;
                if (zo(b)) {
                    var e = c.L(), f;
                    if ("json" == e) f = Ao(b); else if ("text" == e) f = Ao(b); else if ("xml" == e) {
                        if (!Ib) try {
                            f = b.Z ? b.Z.responseXML : null
                        } catch (p) {
                            f = null
                        }
                        null != f || (f = cp(Ao(b)))
                    }
                    null != f && (f = c.ja(f, {featureProjection: g}), d.call(this, f))
                }
                qc(b)
            }, !1, this);
            e.send(b)
        }
    }
    function qp(b, c) {
        return pp(b, c, function (b) {
            this.rc(b)
        })
    }
    function rp() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    }
    var sp;
    (function(){var b={Pf:{}};(function(){function c(b,d){if(!(this instanceof c))return new c(b,d);this.Be=Math.max(4,b||9);this.Gf=Math.max(2,Math.ceil(.4*this.Be));d&&this.oi(d);this.clear()}function d(b,c){b.bbox=e(b,0,b.children.length,c)}function e(b,c,d,e){for(var g=[Infinity,Infinity,-Infinity,-Infinity],h;c<d;c++)h=b.children[c],f(g,b.ua?e(h):h.bbox);return g}function f(b,c){b[0]=Math.min(b[0],c[0]);b[1]=Math.min(b[1],c[1]);b[2]=Math.max(b[2],c[2]);b[3]=Math.max(b[3],c[3])}function g(b,c){return b.bbox[0]-
c.bbox[0]}function h(b,c){return b.bbox[1]-c.bbox[1]}function l(b){return(b[2]-b[0])*(b[3]-b[1])}function n(b){return b[2]-b[0]+(b[3]-b[1])}function p(b,c){return b[0]<=c[0]&&b[1]<=c[1]&&c[2]<=b[2]&&c[3]<=b[3]}function q(b,c){return c[0]<=b[2]&&c[1]<=b[3]&&c[2]>=b[0]&&c[3]>=b[1]}function r(b,c,d,e,f){for(var g=[c,d],h;g.length;)d=g.pop(),c=g.pop(),d-c<=e||(h=c+Math.ceil((d-c)/e/2)*e,t(b,c,d,h,f),g.push(c,h,h,d))}function t(b,c,d,e,f){for(var g,h,l,n,p;d>c;){600<d-c&&(g=d-c+1,h=e-c+1,l=Math.log(g),
n=.5*Math.exp(2*l/3),p=.5*Math.sqrt(l*n*(g-n)/g)*(0>h-g/2?-1:1),l=Math.max(c,Math.floor(e-h*n/g+p)),h=Math.min(d,Math.floor(e+(g-h)*n/g+p)),t(b,l,h,e,f));g=b[e];h=c;n=d;v(b,c,e);for(0<f(b[d],g)&&v(b,c,d);h<n;){v(b,h,n);h++;for(n--;0>f(b[h],g);)h++;for(;0<f(b[n],g);)n--}0===f(b[c],g)?v(b,c,n):(n++,v(b,n,d));n<=e&&(c=n+1);e<=n&&(d=n-1)}}function v(b,c,d){var e=b[c];b[c]=b[d];b[d]=e}c.prototype={all:function(){return this.Cf(this.data,[])},search:function(b){var c=this.data,d=[],e=this.Ea;if(!q(b,c.bbox))return d;
for(var f=[],g,h,l,n;c;){g=0;for(h=c.children.length;g<h;g++)l=c.children[g],n=c.ua?e(l):l.bbox,q(b,n)&&(c.ua?d.push(l):p(b,n)?this.Cf(l,d):f.push(l));c=f.pop()}return d},load:function(b){if(!b||!b.length)return this;if(b.length<this.Gf){for(var c=0,d=b.length;c<d;c++)this.ha(b[c]);return this}b=this.Ef(b.slice(),0,b.length-1,0);this.data.children.length?this.data.height===b.height?this.Hf(this.data,b):(this.data.height<b.height&&(c=this.data,this.data=b,b=c),this.Ff(b,this.data.height-b.height-1,
!0)):this.data=b;return this},ha:function(b){b&&this.Ff(b,this.data.height-1);return this},clear:function(){this.data={children:[],height:1,bbox:[Infinity,Infinity,-Infinity,-Infinity],ua:!0};return this},remove:function(b){if(!b)return this;for(var c=this.data,d=this.Ea(b),e=[],f=[],g,h,l,n;c||e.length;){c||(c=e.pop(),h=e[e.length-1],g=f.pop(),n=!0);if(c.ua&&(l=c.children.indexOf(b),-1!==l)){c.children.splice(l,1);e.push(c);this.ni(e);break}n||c.ua||!p(c.bbox,d)?h?(g++,c=h.children[g],n=!1):c=null:
(e.push(c),f.push(g),g=0,h=c,c=c.children[0])}return this},Ea:function(b){return b},Ee:function(b,c){return b[0]-c[0]},Fe:function(b,c){return b[1]-c[1]},toJSON:function(){return this.data},Cf:function(b,c){for(var d=[];b;)b.ua?c.push.apply(c,b.children):d.push.apply(d,b.children),b=d.pop();return c},Ef:function(b,c,e,f){var g=e-c+1,h=this.Be,l;if(g<=h)return l={children:b.slice(c,e+1),height:1,bbox:null,ua:!0},d(l,this.Ea),l;f||(f=Math.ceil(Math.log(g)/Math.log(h)),h=Math.ceil(g/Math.pow(h,f-1)));
l={children:[],height:f,bbox:null};var g=Math.ceil(g/h),h=g*Math.ceil(Math.sqrt(h)),n,p,q;for(r(b,c,e,h,this.Ee);c<=e;c+=h)for(p=Math.min(c+h-1,e),r(b,c,p,g,this.Fe),n=c;n<=p;n+=g)q=Math.min(n+g-1,p),l.children.push(this.Ef(b,n,q,f-1));d(l,this.Ea);return l},mi:function(b,c,d,e){for(var f,g,h,n,p,q,r,t;;){e.push(c);if(c.ua||e.length-1===d)break;r=t=Infinity;f=0;for(g=c.children.length;f<g;f++){h=c.children[f];p=l(h.bbox);q=b;var v=h.bbox;q=(Math.max(v[2],q[2])-Math.min(v[0],q[0]))*(Math.max(v[3],
q[3])-Math.min(v[1],q[1]))-p;q<t?(t=q,r=p<r?p:r,n=h):q===t&&p<r&&(r=p,n=h)}c=n}return c},Ff:function(b,c,d){var e=this.Ea;d=d?b.bbox:e(b);var e=[],g=this.mi(d,this.data,c,e);g.children.push(b);for(f(g.bbox,d);0<=c;)if(e[c].children.length>this.Be)this.pi(e,c),c--;else break;this.ji(d,e,c)},pi:function(b,c){var e=b[c],f=e.children.length,g=this.Gf;this.ki(e,g,f);f={children:e.children.splice(this.li(e,g,f)),height:e.height};e.ua&&(f.ua=!0);d(e,this.Ea);d(f,this.Ea);c?b[c-1].children.push(f):this.Hf(e,
f)},Hf:function(b,c){this.data={children:[b,c],height:b.height+1};d(this.data,this.Ea)},li:function(b,c,d){var f,g,h,n,p,q,r;p=q=Infinity;for(f=c;f<=d-c;f++){g=e(b,0,f,this.Ea);h=e(b,f,d,this.Ea);var t=g,v=h;n=Math.max(t[0],v[0]);var za=Math.max(t[1],v[1]),cb=Math.min(t[2],v[2]),t=Math.min(t[3],v[3]);n=Math.max(0,cb-n)*Math.max(0,t-za);g=l(g)+l(h);n<p?(p=n,r=f,q=g<q?g:q):n===p&&g<q&&(q=g,r=f)}return r},ki:function(b,c,d){var e=b.ua?this.Ee:g,f=b.ua?this.Fe:h,l=this.Df(b,c,d,e);c=this.Df(b,c,d,f);
l<c&&b.children.sort(e)},Df:function(b,c,d,g){b.children.sort(g);g=this.Ea;var h=e(b,0,c,g),l=e(b,d-c,d,g),p=n(h)+n(l),q,r;for(q=c;q<d-c;q++)r=b.children[q],f(h,b.ua?g(r):r.bbox),p+=n(h);for(q=d-c-1;q>=c;q--)r=b.children[q],f(l,b.ua?g(r):r.bbox),p+=n(l);return p},ji:function(b,c,d){for(;0<=d;d--)f(c[d].bbox,b)},ni:function(b){for(var c=b.length-1,e;0<=c;c--)0===b[c].children.length?0<c?(e=b[c-1].children,e.splice(e.indexOf(b[c]),1)):this.clear():d(b[c],this.Ea)},oi:function(b){var c=["return a"," - b",
";"];this.Ee=new Function("a","b",c.join(b[0]));this.Fe=new Function("a","b",c.join(b[1]));this.Ea=new Function("a","return [a"+b.join(", a")+"];")}};"function"===typeof define&&define.Ao?define("rbush",function(){return c}):"undefined"!==typeof b?b.Pf=c:"undefined"!==typeof self?self.a=c:window.a=c})();sp=b.Pf})();function tp(b){this.b=sp(b);this.a={}}k=tp.prototype;k.ha=function(b,c){var d=[b[0],b[1],b[2],b[3],c];this.b.ha(d);this.a[ma(c)]=d};k.load=function(b,c){for(var d=Array(c.length),e=0,f=c.length;e<f;e++){var g=b[e],h=c[e],g=[g[0],g[1],g[2],g[3],h];d[e]=g;this.a[ma(h)]=g}this.b.load(d)};k.remove=function(b){b=ma(b);var c=this.a[b];zb(this.a,b);return null!==this.b.remove(c)};k.update=function(b,c){var d=ma(c);Wd(this.a[d].slice(0,4),b)||(this.remove(c),this.ha(b,c))};
function up(b){b=b.b.all();return Ua(b,function(b){return b[4]})}function vp(b,c){var d=b.b.search(c);return Ua(d,function(b){return b[4]})}k.forEach=function(b,c){return wp(up(this),b,c)};function xp(b,c,d,e){return wp(vp(b,c),d,e)}function wp(b,c,d){for(var e,f=0,g=b.length;f<g&&!(e=c.call(d,b[f]));f++);return e}k.pa=function(){return xb(this.a)};k.clear=function(){this.b.clear();this.a={}};k.I=function(){return this.b.data.bbox};function W(b){b=m(b)?b:{};Dh.call(this,{attributions:b.attributions,logo:b.logo,projection:void 0,state:"ready",wrapX:m(b.wrapX)?b.wrapX:!0});this.K=ca;m(b.loader)?this.K=b.loader:m(b.url)&&(this.K=qp(b.url,b.format));this.qa=m(b.strategy)?b.strategy:rp;var c=m(b.useSpatialIndex)?b.useSpatialIndex:!0;this.b=c?new tp:null;this.R=new tp;this.d={};this.f={};this.i={};this.n={};this.c=null;var d,e;b.features instanceof qg?(d=b.features,e=d.b):ga(b.features)&&(e=b.features);c||m(d)||(d=new qg(e));m(e)&&
yp(this,e);m(d)&&zp(this,d)}w(W,Dh);k=W.prototype;k.gd=function(b){var c=ma(b).toString();if(Ap(this,c,b)){Bp(this,c,b);var d=b.Q();null!=d?(c=d.I(),null===this.b||this.b.ha(c,b)):this.d[c]=b;this.dispatchEvent(new Cp("addfeature",b))}this.k()};function Bp(b,c,d){b.n[c]=[x(d,"change",b.gg,!1,b),x(d,"propertychange",b.gg,!1,b)]}function Ap(b,c,d){var e=!0,f=d.aa;m(f)?f.toString()in b.f?e=!1:b.f[f.toString()]=d:b.i[c]=d;return e}k.rc=function(b){yp(this,b);this.k()};
function yp(b,c){var d,e,f,g,h=[],l=[],n=[];e=0;for(f=c.length;e<f;e++)g=c[e],d=ma(g).toString(),Ap(b,d,g)&&l.push(g);e=0;for(f=l.length;e<f;e++){g=l[e];d=ma(g).toString();Bp(b,d,g);var p=g.Q();null!=p?(d=p.I(),h.push(d),n.push(g)):b.d[d]=g}null===b.b||b.b.load(h,n);e=0;for(f=l.length;e<f;e++)b.dispatchEvent(new Cp("addfeature",l[e]))}
function zp(b,c){var d=!1;x(b,"addfeature",function(b){d||(d=!0,c.push(b.feature),d=!1)});x(b,"removefeature",function(b){d||(d=!0,c.remove(b.feature),d=!1)});x(c,"add",function(b){d||(b=b.element,d=!0,this.gd(b),d=!1)},!1,b);x(c,"remove",function(b){d||(b=b.element,d=!0,this.Dc(b),d=!1)},!1,b);b.c=c}
k.clear=function(b){if(b)if(null===this.c){for(var c in this.n)Sa(this.n[c],Wc);this.n={};this.f={};this.i={}}else this.c.clear();else b=this.kh,null!==this.b&&(this.b.forEach(b,this),pb(this.d,b,this));null===this.b||this.b.clear();this.R.clear();this.d={};this.dispatchEvent(new Cp("clear"));this.k()};k.Qf=function(b,c){if(null!==this.b)return this.b.forEach(b,c);if(null!==this.c)return this.c.forEach(b,c)};
function Dp(b,c,d){b.$c([c[0],c[1],c[0],c[1]],function(b){if(b.Q().Ge(c))return d.call(void 0,b)})}k.$c=function(b,c,d){if(null!==this.b)return xp(this.b,b,c,d);if(null!==this.c)return this.c.forEach(c,d)};k.Ab=function(b,c,d,e){return this.$c(b,d,e)};k.Le=function(b,c,d){return this.$c(b,function(e){if(e.Q().la(b)&&(e=c.call(d,e)))return e})};k.Pe=function(){return this.c};k.Cc=function(){var b;null!==this.c?b=this.c.b:null!==this.b&&(b=up(this.b),xb(this.d)||db(b,sb(this.d)));return b};
k.Oe=function(b){var c=[];Dp(this,b,function(b){c.push(b)});return c};k.Qe=function(b){return vp(this.b,b)};k.Sf=function(b){var c=b[0],d=b[1],e=null,f=[NaN,NaN],g=Infinity,h=[-Infinity,-Infinity,Infinity,Infinity];xp(this.b,h,function(b){var n=b.Q(),p=g;g=n.Ra(c,d,f,g);g<p&&(e=b,b=Math.sqrt(g),h[0]=c-b,h[1]=d-b,h[2]=c+b,h[3]=d+b)});return e};k.I=function(){return this.b.I()};k.Ne=function(b){b=this.f[b.toString()];return m(b)?b:null};
k.gg=function(b){b=b.target;var c=ma(b).toString(),d=b.Q();null!=d?(d=d.I(),c in this.d?(delete this.d[c],null===this.b||this.b.ha(d,b)):null===this.b||this.b.update(d,b)):c in this.d||(null===this.b||this.b.remove(b),this.d[c]=b);d=b.aa;m(d)?(d=d.toString(),c in this.i?(delete this.i[c],this.f[d]=b):this.f[d]!==b&&(Ep(this,b),this.f[d]=b)):c in this.i||(Ep(this,b),this.i[c]=b);this.k();this.dispatchEvent(new Cp("changefeature",b))};k.pa=function(){return this.b.pa()&&xb(this.d)};
k.Zb=function(b,c,d){var e=this.R;b=this.qa(b,c);var f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];xp(e,h,function(b){return Td(b.extent,h)})||(this.K.call(this,h,c,d),e.ha(h,{extent:h.slice()}))}};k.Dc=function(b){var c=ma(b).toString();c in this.d?delete this.d[c]:null===this.b||this.b.remove(b);this.kh(b);this.k()};k.kh=function(b){var c=ma(b).toString();Sa(this.n[c],Wc);delete this.n[c];var d=b.aa;m(d)?delete this.f[d.toString()]:delete this.i[c];this.dispatchEvent(new Cp("removefeature",b))};
function Ep(b,c){for(var d in b.f)if(b.f[d]===c){delete b.f[d];break}}function Cp(b,c){rc.call(this,b);this.feature=c}w(Cp,rc);function Fp(b){this.b=b.source;this.X=zd();this.c=Vi();this.d=[0,0];this.l=null;xn.call(this,{attributions:b.attributions,canvasFunction:ra(this.xi,this),logo:b.logo,projection:b.projection,ratio:b.ratio,resolutions:b.resolutions,state:this.b.o});this.q=null;this.f=void 0;this.Jg(b.style);x(this.b,"change",this.Ql,void 0,this)}w(Fp,xn);k=Fp.prototype;
k.xi=function(b,c,d,e,f){var g=new Qm(.5*c/d,b,c);this.b.Zb(b,c,f);var h=!1;this.b.Ab(b,c,function(b){var e;if(!(e=h)){var f;m(b.c)?f=b.c.call(b,c):m(this.f)&&(f=this.f(b,c));if(null!=f){var q,r=!1;e=0;for(q=f.length;e<q;++e)r=nn(g,b,f[e],mn(c,d),this.Pl,this)||r;e=r}else e=!1}h=e},this);Rm(g);if(h)return null;this.d[0]!=e[0]||this.d[1]!=e[1]?(this.c.canvas.width=e[0],this.c.canvas.height=e[1],this.d[0]=e[0],this.d[1]=e[1]):this.c.clearRect(0,0,e[0],e[1]);b=Gp(this,de(b),c,d,e);Vm(g,this.c,d,b,0,
{});this.l=g;return this.c.canvas};k.de=function(b,c,d,e,f){if(null!==this.l){var g={};return Sm(this.l,b,c,0,e,function(b){var c=ma(b).toString();if(!(c in g))return g[c]=!0,f(b)})}};k.Ml=function(){return this.b};k.Nl=function(){return this.q};k.Ol=function(){return this.f};function Gp(b,c,d,e,f){return nk(b.X,f[0]/2,f[1]/2,e/d,-e/d,0,-c[0],-c[1])}k.Pl=function(){this.k()};k.Ql=function(){Fh(this,this.b.o)};k.Jg=function(b){this.q=m(b)?b:Kl;this.f=null===b?void 0:Jl(this.q);this.k()};function Hp(b){wm.call(this,b);this.e=null;this.f=zd();this.c=this.d=null}w(Hp,wm);k=Hp.prototype;k.Oa=function(b,c,d,e){var f=this.b;return f.V().de(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};
k.dc=function(b,c,d,e){if(!fa(this.ce()))if(this.b.V()instanceof Fp){if(b=b.slice(),pk(c.pixelToCoordinateMatrix,b,b),this.Oa(b,c,oe,this))return d.call(e,this.b)}else if(null===this.d&&(this.d=zd(),Fd(this.f,this.d)),c=zm(b,this.d),null===this.c&&(this.c=Vi(1,1)),this.c.clearRect(0,0,1,1),this.c.drawImage(this.ce(),c[0],c[1],1,1,0,0,1,1),0<this.c.getImageData(0,0,1,1).data[3])return d.call(e,this.b)};k.ce=function(){return null===this.e?null:this.e.a()};k.Wf=function(){return this.f};
k.ef=function(b,c){var d=b.pixelRatio,e=b.viewState,f=e.center,g=e.resolution,h=e.rotation,l,n=this.b.V(),p=b.viewHints;l=b.extent;m(c.extent)&&(l=ge(l,c.extent));p[0]||p[1]||je(l)||(e=e.projection,p=n.g,null===p||(e=p),l=n.Bc(l,g,d,e),null!==l&&sk(this,l)&&(this.e=l));if(null!==this.e){l=this.e;var e=l.I(),p=l.resolution,q=l.e,g=d*p/(g*q);nk(this.f,d*b.size[0]/2,d*b.size[1]/2,g,g,h,q*(e[0]-f[0])/p,q*(f[1]-e[3])/p);this.d=null;uk(b.attributions,l.f);vk(b,n)}return!0};function Ip(b){wm.call(this,b);this.c=this.f=null;this.p=!1;this.g=null;this.n=zd();this.e=null;this.r=this.q=this.o=NaN;this.i=this.d=null;this.K=[0,0]}w(Ip,wm);Ip.prototype.ce=function(){return this.f};Ip.prototype.Wf=function(){return this.n};
Ip.prototype.ef=function(b,c){var d=b.pixelRatio,e=b.viewState,f=e.projection,g=this.b,h=g.V(),l=Th(h,f),n=h.Cd(),p=Oh(l,e.resolution),q=h.Vb(p,b.pixelRatio,f),r=q[0]/ld(l.Ca(p),this.K)[0],t=l.na(p),r=t/r,v=e.center,A;t==e.resolution?(v=xk(v,t,b.size),A=ee(v,t,e.rotation,b.size)):A=b.extent;m(c.extent)&&(A=ge(A,c.extent));if(je(A))return!1;var z=Mh(l,A,t),E=q[0]*mg(z),B=q[1]*(z.c-z.b+1),y,L;null===this.f?(L=Vi(E,B),this.f=L.canvas,this.c=[E,B],this.g=L,this.p=!Am(this.c)):(y=this.f,L=this.g,this.c[0]<
E||this.c[1]<B||this.q!==q[0]||this.r!==q[1]||this.p&&(this.c[0]>E||this.c[1]>B)?(y.width=E,y.height=B,this.c=[E,B],this.p=!Am(this.c),this.d=null):(E=this.c[0],B=this.c[1],(y=p!=this.o)||(y=this.d,y=!(y.a<=z.a&&z.d<=y.d&&y.b<=z.b&&z.c<=y.c)),y&&(this.d=null)));var K,H;null===this.d?(E/=q[0],B/=q[1],K=z.a-Math.floor((E-mg(z))/2),H=z.b-Math.floor((B-(z.c-z.b+1))/2),this.o=p,this.q=q[0],this.r=q[1],this.d=new kg(K,K+E-1,H,H+B-1),this.i=Array(E*B),B=this.d):(B=this.d,E=mg(B));y={};y[p]={};var S=[],sa=
this.zd(h,y),Na=g.c(),R=Kd(),za=new kg(0,0,0,0),cb,Ha,Bb;for(H=z.a;H<=z.d;++H)for(Bb=z.b;Bb<=z.c;++Bb)Ha=h.Ub(p,H,Bb,d,f),K=Ha.state,2==K||4==K||3==K&&!Na?y[p][dg(Ha.a)]=Ha:(cb=Jh(l,Ha.a,sa,za,R),cb||(S.push(Ha),cb=Lh(l,Ha.a,za,R),null===cb||sa(p+1,cb)));sa=0;for(cb=S.length;sa<cb;++sa)Ha=S[sa],H=q[0]*(Ha.a[1]-B.a),Bb=q[1]*(B.c-Ha.a[2]),L.clearRect(H,Bb,q[0],q[1]);S=Ua(tb(y),Number);gb(S);var Za=h.T,Dc=ce(Kh(l,[p,B.a,B.c],R)),jc,Ne,mj,Vh,Pf,pm,sa=0;for(cb=S.length;sa<cb;++sa)if(jc=S[sa],q=h.Vb(jc,
d,f),Vh=y[jc],jc==p)for(mj in Vh)Ha=Vh[mj],Ne=(Ha.a[2]-B.b)*E+(Ha.a[1]-B.a),this.i[Ne]!=Ha&&(H=q[0]*(Ha.a[1]-B.a),Bb=q[1]*(B.c-Ha.a[2]),K=Ha.state,4!=K&&(3!=K||Na)&&Za||L.clearRect(H,Bb,q[0],q[1]),2==K&&L.drawImage(Ha.Ma(),n,n,q[0],q[1],H,Bb,q[0],q[1]),this.i[Ne]=Ha);else for(mj in jc=l.na(jc)/t,Vh)for(Ha=Vh[mj],Ne=Kh(l,Ha.a,R),H=(Ne[0]-Dc[0])/r,Bb=(Dc[1]-Ne[3])/r,pm=jc*q[0],Pf=jc*q[1],K=Ha.state,4!=K&&Za||L.clearRect(H,Bb,pm,Pf),2==K&&L.drawImage(Ha.Ma(),n,n,q[0],q[1],H,Bb,pm,Pf),Ha=ig(l,Ne,p,za),
K=Math.max(Ha.a,B.a),Bb=Math.min(Ha.d,B.d),H=Math.max(Ha.b,B.b),Ha=Math.min(Ha.c,B.c);K<=Bb;++K)for(Pf=H;Pf<=Ha;++Pf)Ne=(Pf-B.b)*E+(K-B.a),this.i[Ne]=void 0;wk(b.usedTiles,h,p,z);yk(b,h,l,d,f,A,p,g.b());tk(b,h);vk(b,h);nk(this.n,d*b.size[0]/2,d*b.size[1]/2,d*r/e.resolution,d*r/e.resolution,e.rotation,(Dc[0]-v[0])/r,(v[1]-Dc[1])/r);this.e=null;return!0};
Ip.prototype.dc=function(b,c,d,e){if(null!==this.g&&(null===this.e&&(this.e=zd(),Fd(this.n,this.e)),b=zm(b,this.e),0<this.g.getImageData(b[0],b[1],1,1).data[3]))return d.call(e,this.b)};function Jp(b){wm.call(this,b);this.d=!1;this.p=-1;this.i=NaN;this.f=Kd();this.c=this.g=null;this.e=Vi()}w(Jp,wm);
Jp.prototype.l=function(b,c,d){var e=b.extent,f=b.pixelRatio,g=c.$b?b.skippedFeatureUids:{},h=b.viewState,l=h.projection,h=h.rotation,n=l.I(),p=this.b.V(),q=ym(this,b,0);xm(this,"precompose",d,b,q);var r=this.c;if(null!==r&&!r.pa()){var t;bd(this.b,"render")?(this.e.canvas.width=d.canvas.width,this.e.canvas.height=d.canvas.height,t=this.e):t=d;var v=t.globalAlpha;t.globalAlpha=c.opacity;Vm(r,t,f,q,h,g);if(p.r&&l.e&&!Td(n,e)){c=e[0];l=ie(n);for(p=0;c<n[0];)--p,q=l*p,q=ym(this,b,q),Vm(r,t,f,q,h,g),
c+=l;p=0;for(c=e[2];c>n[2];)++p,q=l*p,q=ym(this,b,q),Vm(r,t,f,q,h,g),c-=l;q=ym(this,b,0)}t!=d&&(xm(this,"render",t,b,q),d.drawImage(t.canvas,0,0));t.globalAlpha=v}xm(this,"postcompose",d,b,q)};Jp.prototype.Oa=function(b,c,d,e){if(null!==this.c){var f=c.viewState.resolution,g=c.viewState.rotation,h=this.b,l=c.layerStates[ma(h)],n={};return Sm(this.c,b,f,g,l.$b?c.skippedFeatureUids:{},function(b){var c=ma(b).toString();if(!(c in n))return n[c]=!0,d.call(e,b,h)})}};Jp.prototype.n=function(){rk(this)};
Jp.prototype.ef=function(b){function c(b){var c;m(b.c)?c=b.c.call(b,p):m(d.b)&&(c=(0,d.b)(b,p));if(null!=c){if(null!=c){var e,f,g=!1;e=0;for(f=c.length;e<f;++e)g=nn(t,b,c[e],mn(p,q),this.n,this)||g;b=g}else b=!1;this.d=this.d||b}}var d=this.b,e=d.V();uk(b.attributions,e.e);vk(b,e);var f=b.viewHints[0],g=b.viewHints[1],h=d.l,l=d.o;if(!this.d&&!h&&f||!l&&g)return!0;var n=b.extent,l=b.viewState,f=l.projection,p=l.resolution,q=b.pixelRatio,g=d.a,r=d.c,h=d.get("renderOrder");m(h)||(h=ln);n=Od(n,r*p);r=
l.projection.I();e.r&&l.projection.e&&!Td(r,b.extent)&&(b=Math.max(ie(n)/2,ie(r)),n[0]=r[0]-b,n[2]=r[2]+b);if(!this.d&&this.i==p&&this.p==g&&this.g==h&&Td(this.f,n))return!0;qc(this.c);this.c=null;this.d=!1;var t=new Qm(.5*p/q,n,p,d.c);e.Zb(n,p,f);if(null===h)e.Ab(n,p,c,this);else{var v=[];e.Ab(n,p,function(b){v.push(b)},this);gb(v,h);Sa(v,c,this)}Rm(t);this.i=p;this.p=g;this.g=h;this.f=n;this.c=t;return!0};function Kp(b,c){Ek.call(this,0,c);this.c=Vi();this.a=this.c.canvas;this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Rg(b,this.a,0);this.b=!0;this.e=zd()}w(Kp,Ek);Kp.prototype.He=function(b){return b instanceof I?new Hp(b):b instanceof J?new Ip(b):b instanceof M?new Jp(b):null};
function Lp(b,c,d){var e=b.f,f=b.c;if(bd(e,c)){var g=d.extent,h=d.pixelRatio,l=d.viewState.rotation,n=d.pixelRatio,p=d.viewState,q=p.resolution;b=nk(b.e,b.a.width/2,b.a.height/2,n/q,-n/q,-p.rotation,-p.center[0],-p.center[1]);g=new im(f,h,g,b,l);e.dispatchEvent(new kk(c,e,g,d,f,null));vm(g)}}Kp.prototype.L=function(){return"canvas"};
Kp.prototype.qe=function(b){if(null===b)this.b&&(nh(this.a,!1),this.b=!1);else{var c=this.c,d=b.size[0]*b.pixelRatio,e=b.size[1]*b.pixelRatio;this.a.width!=d||this.a.height!=e?(this.a.width=d,this.a.height=e):c.clearRect(0,0,this.a.width,this.a.height);Fk(b);Lp(this,"precompose",b);var d=b.layerStatesArray,e=b.viewState.resolution,f,g,h,l;f=0;for(g=d.length;f<g;++f)l=d[f],h=l.layer,h=Hk(this,h),lk(l,e)&&"ready"==l.i&&h.ef(b,l)&&h.l(b,l,c);Lp(this,"postcompose",b);this.b||(nh(this.a,!0),this.b=!0);
Ik(this,b);b.postRenderFunctions.push(Gk)}};function Mp(b,c){qk.call(this,b);this.target=c}w(Mp,qk);Mp.prototype.e=ca;Mp.prototype.i=ca;function Np(b){var c=Og("DIV");c.style.position="absolute";Mp.call(this,b,c);this.c=null;this.d=Bd()}w(Np,Mp);Np.prototype.Oa=function(b,c,d,e){var f=this.b;return f.V().de(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};Np.prototype.e=function(){Qg(this.target);this.c=null};
Np.prototype.f=function(b,c){var d=b.viewState,e=d.center,f=d.resolution,g=d.rotation,h=this.c,l=this.b.V(),n=b.viewHints,p=b.extent;m(c.extent)&&(p=ge(p,c.extent));n[0]||n[1]||je(p)||(d=d.projection,n=l.g,null===n||(d=n),p=l.Bc(p,f,b.pixelRatio,d),null===p||sk(this,p)&&(h=p));null!==h&&(d=h.I(),n=h.resolution,p=zd(),nk(p,b.size[0]/2,b.size[1]/2,n/f,n/f,g,(d[0]-e[0])/n,(e[1]-d[3])/n),h!=this.c&&(e=h.a(this),e.style.maxWidth="none",e.style.position="absolute",Qg(this.target),this.target.appendChild(e),
this.c=h),ok(p,this.d)||(Zi(this.target,p),Cd(this.d,p)),uk(b.attributions,h.f),vk(b,l));return!0};function Op(b){var c=Og("DIV");c.style.position="absolute";Mp.call(this,b,c);this.d=!0;this.p=1;this.g=0;this.c={}}w(Op,Mp);Op.prototype.e=function(){Qg(this.target);this.g=0};
Op.prototype.f=function(b,c){if(!c.visible)return this.d&&(nh(this.target,!1),this.d=!1),!0;var d=b.pixelRatio,e=b.viewState,f=e.projection,g=this.b,h=g.V(),l=Th(h,f),n=h.Cd(),p=Oh(l,e.resolution),q=l.na(p),r=e.center,t;q==e.resolution?(r=xk(r,q,b.size),t=ee(r,q,e.rotation,b.size)):t=b.extent;m(c.extent)&&(t=ge(t,c.extent));var q=Mh(l,t,q),v={};v[p]={};var A=this.zd(h,v),z=g.c(),E=Kd(),B=new kg(0,0,0,0),y,L,K,H;for(K=q.a;K<=q.d;++K)for(H=q.b;H<=q.c;++H)y=h.Ub(p,K,H,d,f),L=y.state,2==L?v[p][dg(y.a)]=
y:4==L||3==L&&!z||(L=Jh(l,y.a,A,B,E),L||(y=Lh(l,y.a,B,E),null===y||A(p+1,y)));var S;if(this.g!=h.a){for(S in this.c)z=this.c[+S],Sg(z.target);this.c={};this.g=h.a}E=Ua(tb(v),Number);gb(E);var A={},sa;K=0;for(H=E.length;K<H;++K){S=E[K];S in this.c?z=this.c[S]:(z=l.Jd(r,S),z=new Pp(l,z),A[S]=!0,this.c[S]=z);S=v[S];for(sa in S){y=z;L=S[sa];var Na=n,R=L.a,za=R[0],cb=R[1],Ha=R[2],R=dg(R);if(!(R in y.b)){var za=ld(y.d.Ca(za),y.i),Bb=L.Ma(y),Za=Bb.style;Za.maxWidth="none";var Dc=void 0,jc=void 0;0<Na?(Dc=
Og("DIV"),jc=Dc.style,jc.overflow="hidden",jc.width=za[0]+"px",jc.height=za[1]+"px",Za.position="absolute",Za.left=-Na+"px",Za.top=-Na+"px",Za.width=za[0]+2*Na+"px",Za.height=za[1]+2*Na+"px",Dc.appendChild(Bb)):(Za.width=za[0]+"px",Za.height=za[1]+"px",Dc=Bb,jc=Za);jc.position="absolute";jc.left=(cb-y.c[1])*za[0]+"px";jc.top=(y.c[2]-Ha)*za[1]+"px";null===y.a&&(y.a=document.createDocumentFragment());y.a.appendChild(Dc);y.b[R]=L}}null!==z.a&&(z.target.appendChild(z.a),z.a=null)}n=Ua(tb(this.c),Number);
gb(n);K=zd();sa=0;for(E=n.length;sa<E;++sa)if(S=n[sa],z=this.c[S],S in v)if(y=z.g,H=z.f,nk(K,b.size[0]/2,b.size[1]/2,y/e.resolution,y/e.resolution,e.rotation,(H[0]-r[0])/y,(r[1]-H[1])/y),H=z,y=K,ok(y,H.e)||(Zi(H.target,y),Cd(H.e,y)),S in A){for(--S;0<=S;--S)if(S in this.c){H=this.c[S].target;H.parentNode&&H.parentNode.insertBefore(z.target,H.nextSibling);break}0>S&&Rg(this.target,z.target,0)}else{if(!b.viewHints[0]&&!b.viewHints[1]){L=ig(z.d,t,z.c[0],B);S=[];y=H=void 0;for(y in z.b)H=z.b[y],L.contains(H.a)||
S.push(H);Na=L=void 0;L=0;for(Na=S.length;L<Na;++L)H=S[L],y=dg(H.a),Sg(H.Ma(z)),delete z.b[y]}}else Sg(z.target),delete this.c[S];c.opacity!=this.p&&(this.p=this.target.style.opacity=c.opacity);c.visible&&!this.d&&(nh(this.target,!0),this.d=!0);wk(b.usedTiles,h,p,q);yk(b,h,l,d,f,t,p,g.b());tk(b,h);vk(b,h);return!0};
    function Pp(b, c) {
        this.target = Og("DIV");
        this.target.style.position = "absolute";
        this.target.style.width = "100%";
        this.target.style.height = "100%";
        this.d = b;
        this.c = c;
        this.f = ce(Kh(b, c));
        this.g = b.na(c[0]);
        this.b = {};
        this.a = null;
        this.e = Bd();
        this.i = [0, 0]
    }
    function Qp(b) {
        this.g = Vi();
        var c = this.g.canvas;
        c.style.maxWidth = "none";
        c.style.position = "absolute";
        Mp.call(this, b, c);
        this.d = !1;
        this.o = -1;
        this.l = NaN;
        this.p = Kd();
        this.c = this.n = null;
        this.q = zd();
        this.r = zd()
    }
    w(Qp, Mp);
    Qp.prototype.i=function(b,c){var d=b.viewState,e=d.center,f=d.rotation,g=d.resolution,d=b.pixelRatio,h=b.size[0],l=b.size[1],n=h*d,p=l*d,e=nk(this.q,d*h/2,d*l/2,d/g,-d/g,-f,-e[0],-e[1]),g=this.g;g.canvas.width=n;g.canvas.height=p;h=nk(this.r,0,0,1/d,1/d,0,-(n-h)/2*d,-(p-l)/2*d);Zi(g.canvas,h);Rp(this,"precompose",b,e);h=this.c;null===h||h.pa()||(g.globalAlpha=c.opacity,Vm(h,g,d,e,f,c.$b?b.skippedFeatureUids:{}),Rp(this,"render",b,e));Rp(this,"postcompose",b,e)};
function Rp(b,c,d,e){var f=b.g;b=b.b;bd(b,c)&&(e=new im(f,d.pixelRatio,d.extent,e,d.viewState.rotation),b.dispatchEvent(new kk(c,b,e,d,f,null)),vm(e))}Qp.prototype.Oa=function(b,c,d,e){if(null!==this.c){var f=c.viewState.resolution,g=c.viewState.rotation,h=this.b,l=c.layerStates[ma(h)],n={};return Sm(this.c,b,f,g,l.$b?c.skippedFeatureUids:{},function(b){var c=ma(b).toString();if(!(c in n))return n[c]=!0,d.call(e,b,h)})}};Qp.prototype.D=function(){rk(this)};
Qp.prototype.f=function(b){function c(b){var c;m(b.c)?c=b.c.call(b,n):m(d.b)&&(c=(0,d.b)(b,n));if(null!=c){if(null!=c){var e,f,g=!1;e=0;for(f=c.length;e<f;++e)g=nn(q,b,c[e],mn(n,p),this.D,this)||g;b=g}else b=!1;this.d=this.d||b}}var d=this.b,e=d.V();uk(b.attributions,e.e);vk(b,e);var f=b.viewHints[0],g=b.viewHints[1],h=d.l,l=d.o;if(!this.d&&!h&&f||!l&&g)return!0;var g=b.extent,h=b.viewState,f=h.projection,n=h.resolution,p=b.pixelRatio;b=d.a;l=d.c;h=d.get("renderOrder");m(h)||(h=ln);g=Od(g,l*n);if(!this.d&&
this.l==n&&this.o==b&&this.n==h&&Td(this.p,g))return!0;qc(this.c);this.c=null;this.d=!1;var q=new Qm(.5*n/p,g,n,d.c);e.Zb(g,n,f);if(null===h)e.Ab(g,n,c,this);else{var r=[];e.Ab(g,n,function(b){r.push(b)},this);gb(r,h);Sa(r,c,this)}Rm(q);this.l=n;this.o=b;this.n=h;this.p=g;this.c=q;return!0};function Sp(b,c){Ek.call(this,0,c);this.b=null;this.b=Vi();var d=this.b.canvas;d.style.position="absolute";d.style.width="100%";d.style.height="100%";d.className="ol-unselectable";Rg(b,d,0);this.e=zd();this.a=Og("DIV");this.a.className="ol-unselectable";d=this.a.style;d.position="absolute";d.width="100%";d.height="100%";x(this.a,"touchstart",tc);Rg(b,this.a,0);this.c=!0}w(Sp,Ek);Sp.prototype.N=function(){Sg(this.a);Sp.S.N.call(this)};
Sp.prototype.He=function(b){if(b instanceof I)b=new Np(b);else if(b instanceof J)b=new Op(b);else if(b instanceof M)b=new Qp(b);else return null;return b};function Tp(b,c,d){var e=b.f;if(bd(e,c)){var f=d.extent,g=d.pixelRatio,h=d.viewState,l=h.rotation,n=b.b,p=n.canvas;nk(b.e,p.width/2,p.height/2,g/h.resolution,-g/h.resolution,-h.rotation,-h.center[0],-h.center[1]);b=new im(n,g,f,b.e,l);e.dispatchEvent(new kk(c,e,b,d,n,null));vm(b)}}Sp.prototype.L=function(){return"dom"};
Sp.prototype.qe=function(b){if(null===b)this.c&&(nh(this.a,!1),this.c=!1);else{var c;c=function(b,c){Rg(this.a,b,c)};var d=this.f;if(bd(d,"precompose")||bd(d,"postcompose")){var d=this.b.canvas,e=b.pixelRatio;d.width=b.size[0]*e;d.height=b.size[1]*e}Tp(this,"precompose",b);var d=b.layerStatesArray,e=b.viewState.resolution,f,g,h,l;f=0;for(g=d.length;f<g;++f)l=d[f],h=l.layer,h=Hk(this,h),c.call(this,h.target,f),lk(l,e)&&"ready"==l.i?h.f(b,l)&&h.i(b,l):h.e();c=b.layerStates;for(var n in this.d)n in c||
(h=this.d[n],Sg(h.target));this.c||(nh(this.a,!0),this.c=!0);Fk(b);Ik(this,b);b.postRenderFunctions.push(Gk);Tp(this,"postcompose",b)}};function Up(b){this.a=b}function Vp(b){this.a=b}w(Vp,Up);Vp.prototype.L=function(){return 35632};function Wp(b){this.a=b}w(Wp,Up);Wp.prototype.L=function(){return 35633};function Xp(){this.a="precision mediump float;varying vec2 a;varying float b;uniform mat4 k;uniform float l;uniform sampler2D m;void main(void){vec4 texColor=texture2D(m,a);float alpha=texColor.a*b*l;if(alpha==0.0){discard;}gl_FragColor.a=alpha;gl_FragColor.rgb=(k*vec4(texColor.rgb,1.)).rgb;}"}w(Xp,Vp);da(Xp);
function Yp(){this.a="varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"}w(Yp,Wp);da(Yp);
    function Zp(b, c) {
        this.n = b.getUniformLocation(c, "k");
        this.i = b.getUniformLocation(c, "j");
        this.p = b.getUniformLocation(c, "i");
        this.f = b.getUniformLocation(c, "l");
        this.g = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.b = b.getAttribLocation(c, "f");
        this.d = b.getAttribLocation(c, "c");
        this.c = b.getAttribLocation(c, "g");
        this.e = b.getAttribLocation(c, "d")
    }
    function $p() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }
    w($p, Vp);
    da($p);
    function aq(){this.a="varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"}w(aq,Wp);da(aq);
    function bq(b, c) {
        this.i = b.getUniformLocation(c, "j");
        this.p = b.getUniformLocation(c, "i");
        this.f = b.getUniformLocation(c, "k");
        this.g = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.b = b.getAttribLocation(c, "f");
        this.d = b.getAttribLocation(c, "c");
        this.c = b.getAttribLocation(c, "g");
        this.e = b.getAttribLocation(c, "d")
    }
    function cq(b) {
        this.a = m(b) ? b : [];
        this.b = m(void 0) ? void 0 : 35044
    }
    function dq(b, c) {
        this.n = b;
        this.a = c;
        this.b = {};
        this.f = {};
        this.e = {};
        this.i = this.p = this.d = this.g = null;
        (this.c = Ya(wa, "OES_element_index_uint")) && c.getExtension("OES_element_index_uint");
        x(this.n, "webglcontextlost", this.Nm, !1, this);
        x(this.n, "webglcontextrestored", this.Om, !1, this)
    }
    function eq(b,c,d){var e=b.a,f=d.a,g=ma(d);if(g in b.b)e.bindBuffer(c,b.b[g].buffer);else{var h=e.createBuffer();e.bindBuffer(c,h);var l;34962==c?l=new Float32Array(f):34963==c&&(l=b.c?new Uint32Array(f):new Uint16Array(f));e.bufferData(c,l,d.b);b.b[g]={c:d,buffer:h}}}function fq(b,c){var d=b.a,e=ma(c),f=b.b[e];d.isContextLost()||d.deleteBuffer(f.buffer);delete b.b[e]}k=dq.prototype;
k.N=function(){var b=this.a;b.isContextLost()||(pb(this.b,function(c){b.deleteBuffer(c.buffer)}),pb(this.e,function(c){b.deleteProgram(c)}),pb(this.f,function(c){b.deleteShader(c)}),b.deleteFramebuffer(this.d),b.deleteRenderbuffer(this.i),b.deleteTexture(this.p))};k.Mm=function(){return this.a};
k.Re=function(){if(null===this.d){var b=this.a,c=b.createFramebuffer();b.bindFramebuffer(b.FRAMEBUFFER,c);var d=gq(b,1,1),e=b.createRenderbuffer();b.bindRenderbuffer(b.RENDERBUFFER,e);b.renderbufferStorage(b.RENDERBUFFER,b.DEPTH_COMPONENT16,1,1);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,d,0);b.framebufferRenderbuffer(b.FRAMEBUFFER,b.DEPTH_ATTACHMENT,b.RENDERBUFFER,e);b.bindTexture(b.TEXTURE_2D,null);b.bindRenderbuffer(b.RENDERBUFFER,null);b.bindFramebuffer(b.FRAMEBUFFER,
null);this.d=c;this.p=d;this.i=e}return this.d};function hq(b,c){var d=ma(c);if(d in b.f)return b.f[d];var e=b.a,f=e.createShader(c.L());e.shaderSource(f,c.a);e.compileShader(f);return b.f[d]=f}function iq(b,c,d){var e=ma(c)+"/"+ma(d);if(e in b.e)return b.e[e];var f=b.a,g=f.createProgram();f.attachShader(g,hq(b,c));f.attachShader(g,hq(b,d));f.linkProgram(g);return b.e[e]=g}k.Nm=function(){yb(this.b);yb(this.f);yb(this.e);this.i=this.p=this.d=this.g=null};k.Om=function(){};
k.ke=function(b){if(b==this.g)return!1;this.a.useProgram(b);this.g=b;return!0};function jq(b,c,d){var e=b.createTexture();b.bindTexture(b.TEXTURE_2D,e);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR);m(c)&&b.texParameteri(3553,10242,c);m(d)&&b.texParameteri(3553,10243,d);return e}function gq(b,c,d){var e=jq(b,void 0,void 0);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,c,d,0,b.RGBA,b.UNSIGNED_BYTE,null);return e}
    function kq(b, c) {
        var d = jq(b, 33071, 33071);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, c);
        return d
    }
    function lq(b, c) {
        this.Y = this.r = void 0;
        this.lb = new zg;
        this.p = de(c);
        this.o = [];
        this.f = [];
        this.D = void 0;
        this.e = [];
        this.d = [];
        this.U = this.K = void 0;
        this.b = [];
        this.q = this.W = this.i = null;
        this.R = void 0;
        this.jb = Bd();
        this.kb = Bd();
        this.X = this.T = void 0;
        this.mb = Bd();
        this.qa = this.Fa = this.ka = void 0;
        this.Qa = [];
        this.g = [];
        this.a = [];
        this.l = null;
        this.c = [];
        this.n = [];
        this.Ga = void 0
    }
    w(lq, jk);
    function mq(b,c){var d=b.l,e=b.i,f=b.Qa,g=b.g,h=c.a;return function(){if(!h.isContextLost()){var b,n;b=0;for(n=f.length;b<n;++b)h.deleteTexture(f[b]);b=0;for(n=g.length;b<n;++b)h.deleteTexture(g[b])}fq(c,d);fq(c,e)}}
function nq(b,c,d,e){var f=b.r,g=b.Y,h=b.D,l=b.K,n=b.U,p=b.R,q=b.T,r=b.X,t=b.ka?1:0,v=b.Fa,A=b.qa,z=b.Ga,E=Math.cos(v),v=Math.sin(v),B=b.b.length,y=b.a.length,L,K,H,S,sa,Na;for(L=0;L<d;L+=e)sa=c[L]-b.p[0],Na=c[L+1]-b.p[1],K=y/8,H=-A*f,S=-A*(h-g),b.a[y++]=sa,b.a[y++]=Na,b.a[y++]=H*E-S*v,b.a[y++]=H*v+S*E,b.a[y++]=q/n,b.a[y++]=(r+h)/l,b.a[y++]=p,b.a[y++]=t,H=A*(z-f),S=-A*(h-g),b.a[y++]=sa,b.a[y++]=Na,b.a[y++]=H*E-S*v,b.a[y++]=H*v+S*E,b.a[y++]=(q+z)/n,b.a[y++]=(r+h)/l,b.a[y++]=p,b.a[y++]=t,H=A*(z-f),
S=A*g,b.a[y++]=sa,b.a[y++]=Na,b.a[y++]=H*E-S*v,b.a[y++]=H*v+S*E,b.a[y++]=(q+z)/n,b.a[y++]=r/l,b.a[y++]=p,b.a[y++]=t,H=-A*f,S=A*g,b.a[y++]=sa,b.a[y++]=Na,b.a[y++]=H*E-S*v,b.a[y++]=H*v+S*E,b.a[y++]=q/n,b.a[y++]=r/l,b.a[y++]=p,b.a[y++]=t,b.b[B++]=K,b.b[B++]=K+1,b.b[B++]=K+2,b.b[B++]=K,b.b[B++]=K+2,b.b[B++]=K+3}lq.prototype.ob=function(b,c){this.c.push(this.b.length);this.n.push(c);var d=b.j;nq(this,d,d.length,b.t)};
lq.prototype.pb=function(b,c){this.c.push(this.b.length);this.n.push(c);var d=b.j;nq(this,d,d.length,b.t)};function oq(b,c){var d=c.a;b.o.push(b.b.length);b.f.push(b.b.length);b.l=new cq(b.a);eq(c,34962,b.l);b.i=new cq(b.b);eq(c,34963,b.i);var e={};pq(b.Qa,b.e,e,d);pq(b.g,b.d,e,d);b.r=void 0;b.Y=void 0;b.D=void 0;b.e=null;b.d=null;b.K=void 0;b.U=void 0;b.b=null;b.R=void 0;b.T=void 0;b.X=void 0;b.ka=void 0;b.Fa=void 0;b.qa=void 0;b.a=null;b.Ga=void 0}
function pq(b,c,d,e){var f,g,h,l=c.length;for(h=0;h<l;++h)f=c[h],g=ma(f).toString(),g in d?f=d[g]:(f=kq(e,f),d[g]=f),b[h]=f}
function qq(b,c,d,e,f,g,h,l,n,p,q,r,t,v,A){var z=c.a;eq(c,34962,b.l);eq(c,34963,b.i);var E=l||1!=n||p||1!=q,B,y;E?(B=Xp.Ia(),y=Yp.Ia()):(B=$p.Ia(),y=aq.Ia());y=iq(c,B,y);E?null===b.W?(B=new Zp(z,y),b.W=B):B=b.W:null===b.q?(B=new bq(z,y),b.q=B):B=b.q;c.ke(y);z.enableVertexAttribArray(B.d);z.vertexAttribPointer(B.d,2,5126,!1,32,0);z.enableVertexAttribArray(B.a);z.vertexAttribPointer(B.a,2,5126,!1,32,8);z.enableVertexAttribArray(B.e);z.vertexAttribPointer(B.e,2,5126,!1,32,16);z.enableVertexAttribArray(B.b);
z.vertexAttribPointer(B.b,1,5126,!1,32,24);z.enableVertexAttribArray(B.c);z.vertexAttribPointer(B.c,1,5126,!1,32,28);y=b.mb;nk(y,0,0,2/(e*g[0]),2/(e*g[1]),-f,-(d[0]-b.p[0]),-(d[1]-b.p[1]));d=b.kb;e=2/g[0];g=2/g[1];Dd(d);d[0]=e;d[5]=g;d[10]=1;d[15]=1;g=b.jb;Dd(g);0!==f&&Id(g,-f);z.uniformMatrix4fv(B.g,!1,y);z.uniformMatrix4fv(B.p,!1,d);z.uniformMatrix4fv(B.i,!1,g);z.uniform1f(B.f,h);E&&z.uniformMatrix4fv(B.n,!1,Ag(b.lb,l,n,p,q));var L;if(m(t)){if(v)a:{f=c.c?5125:5123;c=c.c?4:2;p=b.c.length-1;for(h=
b.g.length-1;0<=h;--h)for(z.bindTexture(3553,b.g[h]),l=0<h?b.f[h-1]:0,q=b.f[h];0<=p&&b.c[p]>=l;){n=b.c[p];v=b.n[p];E=ma(v).toString();if(!m(r[E])&&(!m(A)||he(A,v.Q().I()))&&(z.clear(z.COLOR_BUFFER_BIT|z.DEPTH_BUFFER_BIT),z.drawElements(4,q-n,f,n*c),q=t(v))){b=q;break a}q=n;p--}b=void 0}else z.clear(z.COLOR_BUFFER_BIT|z.DEPTH_BUFFER_BIT),rq(b,z,c,r,b.g,b.f),b=(b=t(null))?b:void 0;L=b}else rq(b,z,c,r,b.Qa,b.o);z.disableVertexAttribArray(B.d);z.disableVertexAttribArray(B.a);z.disableVertexAttribArray(B.e);
z.disableVertexAttribArray(B.b);z.disableVertexAttribArray(B.c);return L}
function rq(b,c,d,e,f,g){var h=d.c?5125:5123;d=d.c?4:2;if(xb(e)){var l;b=0;e=f.length;for(l=0;b<e;++b){c.bindTexture(3553,f[b]);var n=g[b];c.drawElements(4,n-l,h,l*d);l=n}}else{l=0;var p,n=0;for(p=f.length;n<p;++n){c.bindTexture(3553,f[n]);for(var q=0<n?g[n-1]:0,r=g[n],t=q;l<b.c.length&&b.c[l]<=r;){var v=ma(b.n[l]).toString();m(e[v])?(t!==q&&c.drawElements(4,q-t,h,t*d),q=t=l===b.c.length-1?r:b.c[l+1]):q=l===b.c.length-1?r:b.c[l+1];l++}t!==q&&c.drawElements(4,q-t,h,t*d)}}}
lq.prototype.$a=function(b){var c=b.rb(),d=b.Kb(1),e=b.Dd(),f=b.ee(1),g=b.o,h=b.wb(),l=b.r,n=b.p,p=b.Ya();b=b.n;var q;0===this.e.length?this.e.push(d):(q=this.e[this.e.length-1],ma(q)!=ma(d)&&(this.o.push(this.b.length),this.e.push(d)));0===this.d.length?this.d.push(f):(q=this.d[this.d.length-1],ma(q)!=ma(f)&&(this.f.push(this.b.length),this.d.push(f)));this.r=c[0];this.Y=c[1];this.D=p[1];this.K=e[1];this.U=e[0];this.R=g;this.T=h[0];this.X=h[1];this.Fa=n;this.ka=l;this.qa=b;this.Ga=p[0]};
function sq(b,c,d){this.d=c;this.e=b;this.c=d;this.b={}}function tq(b,c){var d=[],e;for(e in b.b)d.push(mq(b.b[e],c));return se.apply(null,d)}function uq(b,c){for(var d in b.b)oq(b.b[d],c)}sq.prototype.a=function(b,c){var d=this.b[c];m(d)||(d=new vq[c](this.e,this.d),this.b[c]=d);return d};sq.prototype.pa=function(){return xb(this.b)};function wq(b,c,d,e,f,g,h,l,n,p,q,r,t,v){var A=xq,z,E;for(z=Bm.length-1;0<=z;--z)if(E=b.b[Bm[z]],m(E)&&(E=qq(E,c,d,e,f,A,g,h,l,n,p,q,r,t,v)))return E}
function yq(b,c,d,e,f,g,h,l,n,p,q,r){var t=d.a;t.bindFramebuffer(t.FRAMEBUFFER,d.Re());var v;m(b.c)&&(v=Od(Vd(c),e*b.c));return wq(b,d,c,e,f,g,h,l,n,p,q,function(b){var c=new Uint8Array(4);t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,c);if(0<c[3]&&(b=r(b)))return b},!0,v)}function zq(b,c,d,e,f,g,h,l,n,p,q){var r=d.a;r.bindFramebuffer(r.FRAMEBUFFER,d.Re());b=wq(b,d,c,e,f,g,h,l,n,p,q,function(){var b=new Uint8Array(4);r.readPixels(0,0,1,1,r.RGBA,r.UNSIGNED_BYTE,b);return 0<b[3]},!1);return m(b)}
var vq={Image:lq},xq=[1,1];function Aq(b,c,d,e,f,g){this.b=b;this.e=c;this.d=g;this.i=f;this.g=e;this.f=d;this.c=null;this.a={}}w(Aq,jk);k=Aq.prototype;k.sc=function(b,c){var d=b.toString(),e=this.a[d];m(e)?e.push(c):this.a[d]=[c]};k.tc=function(){};k.Ie=function(b,c){var d=(0,c.e)(b);if(null!=d&&he(this.d,d.I())){var e=c.a;m(e)||(e=0);this.sc(e,function(b){b.Aa(c.d,c.c);b.$a(c.f);b.Ba(c.b);var e=Bq[d.L()];e&&e.call(b,d,null)})}};
k.Ad=function(b,c){var d=b.d,e,f;e=0;for(f=d.length;e<f;++e){var g=d[e],h=Bq[g.L()];h&&h.call(this,g,c)}};k.pb=function(b,c){var d=this.b,e=(new sq(1,this.d)).a(0,"Image");e.$a(this.c);e.pb(b,c);oq(e,d);qq(e,this.b,this.e,this.f,this.g,this.i,1,0,1,0,1,{},void 0,!1);mq(e,d)()};k.zb=function(){};k.uc=function(){};k.ob=function(b,c){var d=this.b,e=(new sq(1,this.d)).a(0,"Image");e.$a(this.c);e.ob(b,c);oq(e,d);qq(e,this.b,this.e,this.f,this.g,this.i,1,0,1,0,1,{},void 0,!1);mq(e,d)()};k.vc=function(){};
k.Qb=function(){};k.qb=function(){};k.Aa=function(){};k.$a=function(b){this.c=b};k.Ba=function(){};var Bq={Point:Aq.prototype.pb,MultiPoint:Aq.prototype.ob,GeometryCollection:Aq.prototype.Ad};function Cq(){this.a="precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor=texture2D(h,a);gl_FragColor.rgb=(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a=texColor.a*g;}"}w(Cq,Vp);da(Cq);function Dq(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}w(Dq,Wp);da(Dq);
    function Eq(b, c) {
        this.g = b.getUniformLocation(c, "f");
        this.c = b.getUniformLocation(c, "g");
        this.d = b.getUniformLocation(c, "e");
        this.f = b.getUniformLocation(c, "d");
        this.e = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    }
    function Fq() {
        this.a = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }
    w(Fq, Vp);
    da(Fq);
    function Gq() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }
    w(Gq, Wp);
    da(Gq);
    function Hq(b, c) {
        this.c = b.getUniformLocation(c, "f");
        this.d = b.getUniformLocation(c, "e");
        this.f = b.getUniformLocation(c, "d");
        this.e = b.getUniformLocation(c, "g");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    }
    function Iq(b, c) {
        qk.call(this, c);
        this.c = b;
        this.U = new cq([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.e = this.Pa = null;
        this.f = void 0;
        this.p = zd();
        this.o = Bd();
        this.R = new zg;
        this.l = this.n = null
    }
    w(Iq, qk);
    function Jq(b,c,d){var e=b.c.c;if(m(b.f)&&b.f==d)e.bindFramebuffer(36160,b.e);else{c.postRenderFunctions.push(ta(function(b,c,d){b.isContextLost()||(b.deleteFramebuffer(c),b.deleteTexture(d))},e,b.e,b.Pa));c=gq(e,d,d);var f=e.createFramebuffer();e.bindFramebuffer(36160,f);e.framebufferTexture2D(36160,36064,3553,c,0);b.Pa=c;b.e=f;b.f=d}}
Iq.prototype.Ig=function(b,c,d){Kq(this,"precompose",d,b);eq(d,34962,this.U);var e=d.a,f=c.brightness||1!=c.contrast||c.hue||1!=c.saturation,g,h;f?(g=Cq.Ia(),h=Dq.Ia()):(g=Fq.Ia(),h=Gq.Ia());g=iq(d,g,h);f?null===this.n?this.n=h=new Eq(e,g):h=this.n:null===this.l?this.l=h=new Hq(e,g):h=this.l;d.ke(g)&&(e.enableVertexAttribArray(h.a),e.vertexAttribPointer(h.a,2,5126,!1,16,0),e.enableVertexAttribArray(h.b),e.vertexAttribPointer(h.b,2,5126,!1,16,8),e.uniform1i(h.e,0));e.uniformMatrix4fv(h.f,!1,this.p);
e.uniformMatrix4fv(h.d,!1,this.o);f&&e.uniformMatrix4fv(h.g,!1,Ag(this.R,c.brightness,c.contrast,c.hue,c.saturation));e.uniform1f(h.c,c.opacity);e.bindTexture(3553,this.Pa);e.drawArrays(5,0,4);Kq(this,"postcompose",d,b)};function Kq(b,c,d,e){b=b.b;if(bd(b,c)){var f=e.viewState;b.dispatchEvent(new kk(c,b,new Aq(d,f.center,f.resolution,f.rotation,e.size,e.extent),e,null,d))}}Iq.prototype.ff=function(){this.e=this.Pa=null;this.f=void 0};function Lq(b,c){Iq.call(this,b,c);this.i=this.g=this.d=null}w(Lq,Iq);function Mq(b,c){var d=c.a();return kq(b.c.c,d)}Lq.prototype.Oa=function(b,c,d,e){var f=this.b;return f.V().de(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};
Lq.prototype.gf=function(b,c){var d=this.c.c,e=b.pixelRatio,f=b.viewState,g=f.center,h=f.resolution,l=f.rotation,n=this.d,p=this.Pa,q=this.b.V(),r=b.viewHints,t=b.extent;m(c.extent)&&(t=ge(t,c.extent));r[0]||r[1]||je(t)||(f=f.projection,r=q.g,null===r||(f=r),t=q.Bc(t,h,e,f),null!==t&&sk(this,t)&&(n=t,p=Mq(this,t),null===this.Pa||b.postRenderFunctions.push(ta(function(b,c){b.isContextLost()||b.deleteTexture(c)},d,this.Pa))));null!==n&&(d=this.c.e.n,Nq(this,d.width,d.height,e,g,h,l,n.I()),this.i=null,
e=this.p,Dd(e),Hd(e,1,-1),Gd(e,0,-1),this.d=n,this.Pa=p,uk(b.attributions,n.f),vk(b,q));return!0};function Nq(b,c,d,e,f,g,h,l){c*=g;d*=g;b=b.o;Dd(b);Hd(b,2*e/c,2*e/d);Id(b,-h);Gd(b,l[0]-f[0],l[1]-f[1]);Hd(b,(l[2]-l[0])/2,(l[3]-l[1])/2);Gd(b,1,1)}Lq.prototype.be=function(b,c){var d=this.Oa(b,c,oe,this);return m(d)};
Lq.prototype.dc=function(b,c,d,e){if(null!==this.d&&!fa(this.d.a()))if(this.b.V()instanceof Fp){if(b=b.slice(),pk(c.pixelToCoordinateMatrix,b,b),this.Oa(b,c,oe,this))return d.call(e,this.b)}else{var f=[this.d.a().width,this.d.a().height];if(null===this.i){var g=c.size;c=zd();Dd(c);Gd(c,-1,-1);Hd(c,2/g[0],2/g[1]);Gd(c,0,g[1]);Hd(c,1,-1);g=zd();Fd(this.o,g);var h=zd();Dd(h);Gd(h,0,f[1]);Hd(h,1,-1);Hd(h,f[0]/2,f[1]/2);Gd(h,1,1);var l=zd();Ed(h,g,l);Ed(l,c,l);this.i=l}c=[0,0];pk(this.i,b,c);if(!(0>c[0]||
        c[0] > f[0] || 0 > c[1] || c[1] > f[1]) && (null === this.g && (this.g = Vi(1, 1)), this.g.clearRect(0, 0, 1, 1), this.g.drawImage(this.d.a(), c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.g.getImageData(0, 0, 1, 1).data[3])) return d.call(e, this.b)
}
};
    function Oq() {
        this.a = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }
    w(Oq, Vp);
    da(Oq);
    function Pq() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }
    w(Pq, Wp);
    da(Pq);
    function Qq(b, c) {
        this.c = b.getUniformLocation(c, "e");
        this.d = b.getUniformLocation(c, "d");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    }
    function Rq(b, c) {
        Iq.call(this, b, c);
        this.D = Oq.Ia();
        this.T = Pq.Ia();
        this.d = null;
        this.q = new cq([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.r = this.g = null;
        this.i = -1;
        this.K = [0, 0]
    }
    w(Rq, Iq);
    k = Rq.prototype;
    k.N = function () {
        fq(this.c.e, this.q);
        Rq.S.N.call(this)
    };
    k.zd = function (b, c) {
        var d = this.c;
        return function (e, f) {
            return Sh(b, e, f, function (b) {
                var f = yh(d.b, b.hb());
                f && (c[e] || (c[e] = {}), c[e][b.a.toString()] = b);
                return f
            })
        }
    };
    k.ff = function () {
        Rq.S.ff.call(this);
        this.d = null
    };
    k.gf=function(b,c,d){var e=this.c,f=d.a,g=b.viewState,h=g.projection,l=this.b,n=l.V(),p=Th(n,h),q=Oh(p,g.resolution),r=p.na(q),t=n.Vb(q,b.pixelRatio,h),v=t[0]/ld(p.Ca(q),this.K)[0],A=r/v,z=n.Cd(),E=g.center,B;r==g.resolution?(E=xk(E,r,b.size),B=ee(E,r,g.rotation,b.size)):B=b.extent;r=Mh(p,B,r);if(null!==this.g&&lg(this.g,r)&&this.i==n.a)A=this.r;else{var y=[mg(r),r.c-r.b+1],y=Math.max(y[0]*t[0],y[1]*t[1]),L=Math.pow(2,Math.ceil(Math.log(y)/Math.LN2)),y=A*L,K=p.Ec(q),H=K[0]+r.a*t[0]*A,A=K[1]+r.b*t[1]*
A,A=[H,A,H+y,A+y];Jq(this,b,L);f.viewport(0,0,L,L);f.clearColor(0,0,0,0);f.clear(16384);f.disable(3042);L=iq(d,this.D,this.T);d.ke(L);null===this.d&&(this.d=new Qq(f,L));eq(d,34962,this.q);f.enableVertexAttribArray(this.d.a);f.vertexAttribPointer(this.d.a,2,5126,!1,16,0);f.enableVertexAttribArray(this.d.b);f.vertexAttribPointer(this.d.b,2,5126,!1,16,8);f.uniform1i(this.d.c,0);d={};d[q]={};var S=this.zd(n,d),sa=l.c(),L=!0,H=Kd(),Na=new kg(0,0,0,0),R,za,cb;for(za=r.a;za<=r.d;++za)for(cb=r.b;cb<=r.c;++cb){K=
n.Ub(q,za,cb,v,h);if(m(c.extent)&&(R=Kh(p,K.a,H),!he(R,c.extent)))continue;R=K.state;if(2==R){if(yh(e.b,K.hb())){d[q][dg(K.a)]=K;continue}}else if(4==R||3==R&&!sa)continue;L=!1;R=Jh(p,K.a,S,Na,H);R||(K=Lh(p,K.a,Na,H),null===K||S(q+1,K))}c=Ua(tb(d),Number);gb(c);for(var S=new Float32Array(4),Ha,Bb,Za,sa=0,Na=c.length;sa<Na;++sa)for(Ha in Bb=d[c[sa]],Bb)K=Bb[Ha],R=Kh(p,K.a,H),za=2*(R[2]-R[0])/y,cb=2*(R[3]-R[1])/y,Za=2*(R[0]-A[0])/y-1,R=2*(R[1]-A[1])/y-1,yd(S,za,cb,Za,R),f.uniform4fv(this.d.d,S),Sq(e,
K,t,z*v),f.drawArrays(5,0,4);L?(this.g=r,this.r=A,this.i=n.a):(this.r=this.g=null,this.i=-1,b.animate=!0)}wk(b.usedTiles,n,q,r);var Dc=e.i;yk(b,n,p,v,h,B,q,l.b(),function(b){var c;(c=2!=b.state||yh(e.b,b.hb()))||(c=b.hb()in Dc.c);c||zk(Dc,[b,fg(p,b.a),p.na(b.a[0]),t,z*v])},this);tk(b,n);vk(b,n);f=this.p;Dd(f);Gd(f,(E[0]-A[0])/(A[2]-A[0]),(E[1]-A[1])/(A[3]-A[1]));0!==g.rotation&&Id(f,g.rotation);Hd(f,b.size[0]*g.resolution/(A[2]-A[0]),b.size[1]*g.resolution/(A[3]-A[1]));Gd(f,-.5,-.5);return!0};
k.dc=function(b,c,d,e){if(null!==this.e){var f=[0,0];pk(this.p,[b[0]/c.size[0],(c.size[1]-b[1])/c.size[1]],f);b=[f[0]*this.f,f[1]*this.f];c=this.c.e.a;c.bindFramebuffer(c.FRAMEBUFFER,this.e);f=new Uint8Array(4);c.readPixels(b[0],b[1],1,1,c.RGBA,c.UNSIGNED_BYTE,f);if(0<f[3])return d.call(e,this.b)}};function Tq(b,c){Iq.call(this,b,c);this.i=!1;this.K=-1;this.D=NaN;this.r=Kd();this.g=this.d=this.q=null}w(Tq,Iq);k=Tq.prototype;k.Ig=function(b,c,d){this.g=c;var e=b.viewState,f=this.d;if(null!==f&&!f.pa()){var g=e.center,h=e.resolution,e=e.rotation,l=b.size,n=c.opacity,p=c.brightness,q=c.contrast,r=c.hue,t=c.saturation;b=c.$b?b.skippedFeatureUids:{};var v,A;c=0;for(v=Bm.length;c<v;++c)A=f.b[Bm[c]],m(A)&&qq(A,d,g,h,e,l,n,p,q,r,t,b,void 0,!1)}};
k.N=function(){var b=this.d;null!==b&&(tq(b,this.c.e)(),this.d=null);Tq.S.N.call(this)};k.Oa=function(b,c,d,e){if(null!==this.d&&null!==this.g){var f=c.viewState,g=this.b,h=this.g,l={};return yq(this.d,b,this.c.e,f.resolution,f.rotation,h.opacity,h.brightness,h.contrast,h.hue,h.saturation,h.$b?c.skippedFeatureUids:{},function(b){var c=ma(b).toString();if(!(c in l))return l[c]=!0,d.call(e,b,g)})}};
k.be=function(b,c){if(null===this.d||null===this.g)return!1;var d=c.viewState,e=this.g;return zq(this.d,b,this.c.e,d.resolution,d.rotation,e.opacity,e.brightness,e.contrast,e.hue,e.saturation,c.skippedFeatureUids)};k.dc=function(b,c,d,e){b=b.slice();pk(c.pixelToCoordinateMatrix,b,b);if(this.be(b,c))return d.call(e,this.b)};k.Gl=function(){rk(this)};
k.gf=function(b,c,d){function e(b){var c;m(b.c)?c=b.c.call(b,p):m(f.b)&&(c=(0,f.b)(b,p));if(null!=c){if(null!=c){var d,e,g=!1;d=0;for(e=c.length;d<e;++d)g=nn(t,b,c[d],mn(p,q),this.Gl,this)||g;b=g}else b=!1;this.i=this.i||b}}var f=this.b;c=f.V();uk(b.attributions,c.e);vk(b,c);var g=b.viewHints[0],h=b.viewHints[1],l=f.l,n=f.o;if(!this.i&&!l&&g||!n&&h)return!0;var h=b.extent,l=b.viewState,g=l.projection,p=l.resolution,q=b.pixelRatio,l=f.a,r=f.c,n=f.get("renderOrder");m(n)||(n=ln);h=Od(h,r*p);if(!this.i&&
this.D==p&&this.K==l&&this.q==n&&Td(this.r,h))return!0;null===this.d||b.postRenderFunctions.push(tq(this.d,d));this.i=!1;var t=new sq(.5*p/q,h,f.c);c.Zb(h,p,g);if(null===n)c.Ab(h,p,e,this);else{var v=[];c.Ab(h,p,function(b){v.push(b)},this);gb(v,n);Sa(v,e,this)}uq(t,d);this.D=p;this.K=l;this.q=n;this.r=h;this.d=t;return!0};function Uq(b,c){Ek.call(this,0,c);this.a=Og("CANVAS");this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Rg(b,this.a,0);this.o=this.r=0;this.q=Vi();this.p=!0;this.c=aj(this.a,{antialias:!0,depth:!1,failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,stencil:!0});this.e=new dq(this.a,this.c);x(this.a,"webglcontextlost",this.El,!1,this);x(this.a,"webglcontextrestored",this.Fl,!1,this);this.b=new xh;this.l=null;this.i=new Jk(ra(function(b){var c=b[1];b=b[2];
var f=c[0]-this.l[0],c=c[1]-this.l[1];return 65536*Math.log(b)+Math.sqrt(f*f+c*c)/b},this),function(b){return b[0].hb()});this.D=ra(function(){if(!this.i.pa()){Nk(this.i);var b=Kk(this.i);Sq(this,b[0],b[3],b[4])}},this);this.g=0;Vq(this)}w(Uq,Ek);
function Sq(b,c,d,e){var f=b.c,g=c.hb();if(yh(b.b,g))b=b.b.get(g),f.bindTexture(3553,b.Pa),9729!=b.og&&(f.texParameteri(3553,10240,9729),b.og=9729),9729!=b.pg&&(f.texParameteri(3553,10240,9729),b.pg=9729);else{var h=f.createTexture();f.bindTexture(3553,h);if(0<e){var l=b.q.canvas,n=b.q;b.r!==d[0]||b.o!==d[1]?(l.width=d[0],l.height=d[1],b.r=d[0],b.o=d[1]):n.clearRect(0,0,d[0],d[1]);n.drawImage(c.Ma(),e,e,d[0],d[1],0,0,d[0],d[1]);f.texImage2D(3553,0,6408,6408,5121,l)}else f.texImage2D(3553,0,6408,6408,
5121,c.Ma());f.texParameteri(3553,10240,9729);f.texParameteri(3553,10241,9729);f.texParameteri(3553,10242,33071);f.texParameteri(3553,10243,33071);b.b.set(g,{Pa:h,og:9729,pg:9729})}}k=Uq.prototype;k.He=function(b){return b instanceof I?new Lq(this,b):b instanceof J?new Rq(this,b):b instanceof M?new Tq(this,b):null};
function Wq(b,c,d){var e=b.f;if(bd(e,c)){var f=b.e;b=d.viewState;b=new Aq(f,b.center,b.resolution,b.rotation,d.size,d.extent);e.dispatchEvent(new kk(c,e,b,d,null,f));c=Ua(tb(b.a),Number);gb(c);var g,h;d=0;for(e=c.length;d<e;++d)for(f=b.a[c[d].toString()],g=0,h=f.length;g<h;++g)f[g](b)}}k.N=function(){var b=this.c;b.isContextLost()||this.b.forEach(function(c){null===c||b.deleteTexture(c.Pa)});qc(this.e);Uq.S.N.call(this)};
k.Ai=function(b,c){for(var d=this.c,e;1024<this.b.Sb()-this.g;){e=this.b.a.qc;if(null===e)if(+this.b.a.Ud==c.index)break;else--this.g;else d.deleteTexture(e.Pa);this.b.pop()}};k.L=function(){return"webgl"};k.El=function(b){b.preventDefault();this.b.clear();this.g=0;pb(this.d,function(b){b.ff()})};k.Fl=function(){Vq(this);this.f.render()};function Vq(b){b=b.c;b.activeTexture(33984);b.blendFuncSeparate(770,771,1,771);b.disable(2884);b.disable(2929);b.disable(3089);b.disable(2960)}
k.qe=function(b){var c=this.e,d=this.c;if(d.isContextLost())return!1;if(null===b)return this.p&&(nh(this.a,!1),this.p=!1),!1;this.l=b.focus;this.b.set((-b.index).toString(),null);++this.g;var e=[],f=b.layerStatesArray,g=b.viewState.resolution,h,l,n,p;h=0;for(l=f.length;h<l;++h)p=f[h],lk(p,g)&&"ready"==p.i&&(n=Hk(this,p.layer),n.gf(b,p,c)&&e.push(p));f=b.size[0]*b.pixelRatio;g=b.size[1]*b.pixelRatio;if(this.a.width!=f||this.a.height!=g)this.a.width=f,this.a.height=g;d.bindFramebuffer(36160,null);d.clearColor(0,
0,0,0);d.clear(16384);d.enable(3042);d.viewport(0,0,this.a.width,this.a.height);Wq(this,"precompose",b);h=0;for(l=e.length;h<l;++h)p=e[h],n=Hk(this,p.layer),n.Ig(b,p,c);this.p||(nh(this.a,!0),this.p=!0);Fk(b);1024<this.b.Sb()-this.g&&b.postRenderFunctions.push(ra(this.Ai,this));this.i.pa()||(b.postRenderFunctions.push(this.D),b.animate=!0);Wq(this,"postcompose",b);Ik(this,b);b.postRenderFunctions.push(Gk)};
k.df=function(b,c,d,e,f,g){var h;if(this.c.isContextLost())return!1;var l=c.viewState,n=c.layerStatesArray,p;for(p=n.length-1;0<=p;--p){h=n[p];var q=h.layer;if(lk(h,l.resolution)&&f.call(g,q)&&(h=Hk(this,q).Oa(b,c,d,e)))return h}};k.Hg=function(b,c,d,e){var f=!1;if(this.c.isContextLost())return!1;var g=c.viewState,h=c.layerStatesArray,l;for(l=h.length-1;0<=l;--l){var n=h[l],p=n.layer;if(lk(n,g.resolution)&&d.call(e,p)&&(f=Hk(this,p).be(b,c)))return!0}return f};
k.Gg=function(b,c,d,e,f){if(this.c.isContextLost())return!1;var g=c.viewState,h,l=c.layerStatesArray,n;for(n=l.length-1;0<=n;--n){h=l[n];var p=h.layer;if(lk(h,g.resolution)&&f.call(e,p)&&(h=Hk(this,p).dc(b,c,d,e)))return h}};var Xq=["canvas","webgl","dom"];
function X(b){fd.call(this);var c=Yq(b);this.kb=m(b.loadTilesWhileAnimating)?b.loadTilesWhileAnimating:!1;this.lb=m(b.loadTilesWhileInteracting)?b.loadTilesWhileInteracting:!1;this.Oc=m(b.pixelRatio)?b.pixelRatio:cj;this.mb=c.logos;this.l=new li(this.Fn,void 0,this);pc(this,this.l);this.Qa=zd();this.Ae=zd();this.jb=0;this.c=null;this.ka=Kd();this.g=this.D=null;this.b=Lg("DIV","ol-viewport");this.b.style.position="relative";this.b.style.overflow="hidden";this.b.style.width="100%";this.b.style.height=
"100%";this.b.style.msTouchAction="none";hj&&$g(this.b,"ol-touch");this.T=Lg("DIV","ol-overlaycontainer");this.b.appendChild(this.T);this.r=Lg("DIV","ol-overlaycontainer-stopevent");x(this.r,["click","dblclick","mousedown","touchstart","MSPointerDown",dk,Jb?"DOMMouseScroll":"mousewheel"],sc);this.b.appendChild(this.r);b=new Vj(this);x(b,sb(gk),this.hg,!1,this);pc(this,b);this.R=c.keyboardEventTarget;this.o=new Fi;x(this.o,"key",this.fg,!1,this);pc(this,this.o);b=new Ni(this.b);x(b,"mousewheel",this.fg,
!1,this);pc(this,b);this.e=c.controls;this.d=c.interactions;this.f=c.overlays;this.i=new c.Hn(this.b,this);pc(this,this.i);this.Ga=new Ai;pc(this,this.Ga);this.K=this.n=null;this.q=[];this.X=[];this.qa=new Ok(ra(this.uj,this),ra(this.Qk,this));this.U={};x(this,hd("layergroup"),this.Jj,!1,this);x(this,hd("view"),this.fk,!1,this);x(this,hd("size"),this.ck,!1,this);x(this,hd("target"),this.ek,!1,this);this.u(c.values);this.e.forEach(function(b){b.setMap(this)},this);x(this.e,"add",function(b){b.element.setMap(this)},
!1,this);x(this.e,"remove",function(b){b.element.setMap(null)},!1,this);this.d.forEach(function(b){b.setMap(this)},this);x(this.d,"add",function(b){b.element.setMap(this)},!1,this);x(this.d,"remove",function(b){b.element.setMap(null)},!1,this);this.f.forEach(function(b){b.setMap(this)},this);x(this.f,"add",function(b){b.element.setMap(this)},!1,this);x(this.f,"remove",function(b){b.element.setMap(null)},!1,this)}w(X,fd);k=X.prototype;k.qi=function(b){this.e.push(b)};k.ri=function(b){this.d.push(b)};
k.If=function(b){this.Tb().Ac().push(b)};k.Jf=function(b){this.f.push(b)};k.Ha=function(b){this.render();Array.prototype.push.apply(this.q,arguments)};k.N=function(){Sg(this.b);X.S.N.call(this)};k.Ke=function(b,c,d,e,f){if(null!==this.c)return b=this.ma(b),this.i.df(b,this.c,c,m(d)?d:null,m(e)?e:oe,m(f)?f:null)};k.Pk=function(b,c,d,e,f){if(null!==this.c)return this.i.Gg(b,this.c,c,m(d)?d:null,m(e)?e:oe,m(f)?f:null)};
k.hk=function(b,c,d){if(null===this.c)return!1;b=this.ma(b);return this.i.Hg(b,this.c,m(c)?c:oe,m(d)?d:null)};k.Qi=function(b){return this.ma(this.Bd(b))};k.Bd=function(b){if(m(b.changedTouches)){var c=b.changedTouches[0];b=kh(this.b);return[c.clientX-b.x,c.clientY-b.y]}c=this.b;b=kh(b);c=kh(c);c=new Cg(b.x-c.x,b.y-c.y);return[c.x,c.y]};k.bf=function(){return this.get("target")};k.bd=function(){var b=this.bf();return m(b)?Hg(b):null};
k.ma=function(b){var c=this.c;if(null===c)return null;b=b.slice();return pk(c.pixelToCoordinateMatrix,b,b)};k.Oi=function(){return this.e};k.jj=function(){return this.f};k.Yi=function(){return this.d};k.Tb=function(){return this.get("layergroup")};k.vg=function(){return this.Tb().Ac()};k.ra=function(b){var c=this.c;if(null===c)return null;b=b.slice(0,2);return pk(c.coordinateToPixelMatrix,b,b)};k.va=function(){return this.get("size")};k.P=function(){return this.get("view")};k.wj=function(){return this.b};
k.uj=function(b,c,d,e){var f=this.c;if(!(null!==f&&c in f.wantedTiles&&f.wantedTiles[c][dg(b.a)]))return Infinity;b=d[0]-f.focus[0];d=d[1]-f.focus[1];return 65536*Math.log(e)+Math.sqrt(b*b+d*d)/e};k.fg=function(b,c){var d=new Tj(c||b.type,this,b);this.hg(d)};k.hg=function(b){if(null!==this.c){this.K=b.coordinate;b.frameState=this.c;var c=this.d.b,d;if(!1!==this.dispatchEvent(b))for(d=c.length-1;0<=d;d--){var e=c[d];if(e.b()&&!e.handleEvent(b))break}}};
k.$j=function(){var b=this.c,c=this.qa;if(!c.pa()){var d=16,e=d,f=0;null!==b&&(f=b.viewHints,f[0]&&(d=this.kb?8:0,e=2),f[1]&&(d=this.lb?8:0,e=2),f=rb(b.wantedTiles));d*=f;e*=f;if(c.d<d){Nk(c);d=Math.min(d-c.d,e,c.Sb());for(e=0;e<d;++e)f=Kk(c)[0],x(f,"change",c.f,!1,c),f.load();c.d+=d}}c=this.X;d=0;for(e=c.length;d<e;++d)c[d](this,b);c.length=0};k.ck=function(){this.render()};
k.ek=function(){var b=this.bd();Mi(this.o);null===b?(Sg(this.b),null!==this.n&&(Wc(this.n),this.n=null)):(b.appendChild(this.b),Gi(this.o,null===this.R?b:this.R),null===this.n&&(this.n=x(this.Ga,"resize",this.Lc,!1,this)));this.Lc()};k.Qk=function(){this.render()};k.gk=function(){this.render()};k.fk=function(){null!==this.D&&(Wc(this.D),this.D=null);var b=this.P();null!==b&&(this.D=x(b,"propertychange",this.gk,!1,this));this.render()};k.Kj=function(){this.render()};k.Lj=function(){this.render()};
k.Jj=function(){if(null!==this.g){for(var b=this.g.length,c=0;c<b;++c)Wc(this.g[c]);this.g=null}b=this.Tb();null!=b&&(this.g=[x(b,"propertychange",this.Lj,!1,this),x(b,"change",this.Kj,!1,this)]);this.render()};k.Gn=function(){var b=this.l;mi(b);b.Of()};k.render=function(){null!=this.l.aa||this.l.start()};k.An=function(b){if(m(this.e.remove(b)))return b};k.Bn=function(b){var c;m(this.d.remove(b))&&(c=b);return c};k.Cn=function(b){return this.Tb().Ac().remove(b)};k.Dn=function(b){if(m(this.f.remove(b)))return b};
k.Fn=function(b){var c,d,e,f=this.va(),g=this.P(),h=null;if(m(f)&&0<f[0]&&0<f[1]&&null!==g&&Sf(g)){var h=g.c.slice(),l=this.Tb().Se(),n={};c=0;for(d=l.length;c<d;++c)n[ma(l[c].layer)]=l[c];e=Rf(g);h={animate:!1,attributions:{},coordinateToPixelMatrix:this.Qa,extent:null,focus:null===this.K?e.center:this.K,index:this.jb++,layerStates:n,layerStatesArray:l,logos:Db(this.mb),pixelRatio:this.Oc,pixelToCoordinateMatrix:this.Ae,postRenderFunctions:[],size:f,skippedFeatureUids:this.U,tileQueue:this.qa,time:b,
usedTiles:{},viewState:e,viewHints:h,wantedTiles:{}}}if(null!==h){b=this.q;c=f=0;for(d=b.length;c<d;++c)g=b[c],g(this,h)&&(b[f++]=g);b.length=f;h.extent=ee(e.center,e.resolution,e.rotation,h.size)}this.c=h;this.i.qe(h);null!==h&&(h.animate&&this.render(),Array.prototype.push.apply(this.X,h.postRenderFunctions),0!==this.q.length||h.viewHints[0]||h.viewHints[1]||Wd(h.extent,this.ka)||(this.dispatchEvent(new uh("moveend",this,h)),Pd(h.extent,this.ka)));this.dispatchEvent(new uh("postrender",this,h));
qi(this.$j,this)};k.th=function(b){this.set("layergroup",b)};k.uf=function(b){this.set("size",b)};k.Rk=function(b){this.set("target",b)};k.Xn=function(b){this.set("view",b)};k.yh=function(b){b=ma(b).toString();this.U[b]=!0;this.render()};
k.Lc=function(){var b=this.bd();if(null===b)this.uf(void 0);else{var c=Gg(b),d=Ib&&b.currentStyle;d&&Wg(Eg(c))&&"auto"!=d.width&&"auto"!=d.height&&!d.boxSizing?(c=oh(b,d.width,"width","pixelWidth"),b=oh(b,d.height,"height","pixelHeight"),b=new Dg(c,b)):(d=new Dg(b.offsetWidth,b.offsetHeight),c=qh(b,"padding"),b=th(b),b=new Dg(d.width-b.left-c.left-c.right-b.right,d.height-b.top-c.top-c.bottom-b.bottom));this.uf([b.width,b.height])}};k.Ch=function(b){b=ma(b).toString();delete this.U[b];this.render()};
function Yq(b){var c=null;m(b.keyboardEventTarget)&&(c=ia(b.keyboardEventTarget)?document.getElementById(b.keyboardEventTarget):b.keyboardEventTarget);var d={},e={};if(!m(b.logo)||"boolean"==typeof b.logo&&b.logo)e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]=
"http://openlayers.org/";else{var f=b.logo;ia(f)?e[f]="":la(f)&&(e[f.src]=f.href)}f=b.layers instanceof G?b.layers:new G({layers:b.layers});d.layergroup=f;d.target=b.target;d.view=m(b.view)?b.view:new Nf;var f=Ek,g;m(b.renderer)?ga(b.renderer)?g=b.renderer:ia(b.renderer)&&(g=[b.renderer]):g=Xq;var h,l;h=0;for(l=g.length;h<l;++h){var n=g[h];if("canvas"==n){if(ej){f=Kp;break}}else if("dom"==n){f=Sp;break}else if("webgl"==n&&bj){f=Uq;break}}var p;m(b.controls)?p=ga(b.controls)?new qg(b.controls.slice()):
b.controls:p=ci();var q;m(b.interactions)?q=ga(b.interactions)?new qg(b.interactions.slice()):b.interactions:q=am();b=m(b.overlays)?ga(b.overlays)?new qg(b.overlays.slice()):b.overlays:new qg;return{controls:p,interactions:q,keyboardEventTarget:c,logos:e,overlays:b,Hn:f,values:d}}hm();function Zq(b){fd.call(this);this.g=m(b.insertFirst)?b.insertFirst:!0;this.i=m(b.stopEvent)?b.stopEvent:!0;this.$=Lg("DIV",{"class":"ol-overlay-container"});this.$.style.position="absolute";this.f=m(b.autoPan)?b.autoPan:!1;this.d=m(b.autoPanAnimation)?b.autoPanAnimation:{};this.e=m(b.autoPanMargin)?b.autoPanMargin:20;this.b={vd:"",Vd:"",re:"",se:"",visible:!0};this.c=null;x(this,hd("element"),this.Fj,!1,this);x(this,hd("map"),this.Rj,!1,this);x(this,hd("offset"),this.Wj,!1,this);x(this,hd("position"),
this.Yj,!1,this);x(this,hd("positioning"),this.Zj,!1,this);m(b.element)&&this.qh(b.element);this.vh(m(b.offset)?b.offset:[0,0]);this.wh(m(b.positioning)?b.positioning:"top-left");m(b.position)&&this.tf(b.position)}w(Zq,fd);k=Zq.prototype;k.Xd=function(){return this.get("element")};k.Yd=function(){return this.get("map")};k.$f=function(){return this.get("offset")};k.wg=function(){return this.get("position")};k.cg=function(){return this.get("positioning")};
k.Fj=function(){Qg(this.$);var b=this.Xd();null!=b&&Pg(this.$,b)};k.Rj=function(){null!==this.c&&(Sg(this.$),Wc(this.c),this.c=null);var b=this.Yd();null!=b&&(this.c=x(b,"postrender",this.render,!1,this),$q(this),b=this.i?b.r:b.T,this.g?Rg(b,this.$,0):Pg(b,this.$))};k.render=function(){$q(this)};k.Wj=function(){$q(this)};
k.Yj=function(){$q(this);if(m(this.get("position"))&&this.f){var b=this.Yd();if(m(b)&&!fa(b.bd())){var c=ar(b.bd(),b.va()),d=this.Xd(),e=d.offsetWidth,f=d.currentStyle||window.getComputedStyle(d),e=e+(parseInt(f.marginLeft,10)+parseInt(f.marginRight,10)),f=d.offsetHeight,g=d.currentStyle||window.getComputedStyle(d),f=f+(parseInt(g.marginTop,10)+parseInt(g.marginBottom,10)),h=ar(d,[e,f]),d=this.e;Td(c,h)||(e=h[0]-c[0],f=c[2]-h[2],g=h[1]-c[1],h=c[3]-h[3],c=[0,0],0>e?c[0]=e-d:0>f&&(c[0]=Math.abs(f)+
d),0>g?c[1]=g-d:0>h&&(c[1]=Math.abs(h)+d),0===c[0]&&0===c[1])||(d=b.P().Da(),e=b.ra(d),c=[e[0]+c[0],e[1]+c[1]],null!==this.d&&(this.d.source=d,b.Ha(Yf(this.d))),b.P().Xa(b.ma(c)))}}};k.Zj=function(){$q(this)};k.qh=function(b){this.set("element",b)};k.setMap=function(b){this.set("map",b)};k.vh=function(b){this.set("offset",b)};k.tf=function(b){this.set("position",b)};
function ar(b,c){var d=Gg(b);gh(b,"position");var e=new Cg(0,0),f;f=d?Gg(d):document;f=!Ib||Ib&&9<=Tb||Wg(Eg(f))?f.documentElement:f.body;b!=f&&(f=jh(b),d=Xg(Eg(d)),e.x=f.left+d.x,e.y=f.top+d.y);return[e.x,e.y,e.x+c[0],e.y+c[1]]}k.wh=function(b){this.set("positioning",b)};
function $q(b){var c=b.Yd(),d=b.wg();if(m(c)&&null!==c.c&&m(d)){var d=c.ra(d),e=c.va(),c=b.$.style,f=b.$f(),g=b.cg(),h=f[0],f=f[1];if("bottom-right"==g||"center-right"==g||"top-right"==g)""!==b.b.Vd&&(b.b.Vd=c.left=""),h=Math.round(e[0]-d[0]-h)+"px",b.b.re!=h&&(b.b.re=c.right=h);else{""!==b.b.re&&(b.b.re=c.right="");if("bottom-center"==g||"center-center"==g||"top-center"==g)h-=lh(b.$).width/2;h=Math.round(d[0]+h)+"px";b.b.Vd!=h&&(b.b.Vd=c.left=h)}if("bottom-left"==g||"bottom-center"==g||"bottom-right"==
    g) "" !== b.b.se && (b.b.se = c.top = ""), d = Math.round(e[1] - d[1] - f) + "px", b.b.vd != d && (b.b.vd = c.bottom = d); else {
    "" !== b.b.vd && (b.b.vd = c.bottom = "");
    if ("center-left" == g || "center-center" == g || "center-right" == g) f -= lh(b.$).height / 2;
    d = Math.round(d[1] + f) + "px";
    b.b.se != d && (b.b.se = c.top = d)
}
    b.b.visible || (nh(b.$, !0), b.b.visible = !0)
} else b.b.visible && (nh(b.$, !1), b.b.visible = !1)
}
    function br(b) {
        b = m(b) ? b : {};
        this.f = m(b.collapsed) ? b.collapsed : !0;
        this.g = m(b.collapsible) ? b.collapsible : !0;
        this.g || (this.f = !1);
        var c = m(b.className) ? b.className : "ol-overviewmap", d = m(b.tipLabel) ? b.tipLabel : "Overview map",
            e = m(b.collapseLabel) ? b.collapseLabel : "\u00ab";
        this.l = ia(e) ? Lg("SPAN", {}, e) : e;
        e = m(b.label) ? b.label : "\u00bb";
        this.o = ia(e) ? Lg("SPAN", {}, e) : e;
        d = Lg("BUTTON", {type: "button", title: d}, this.g && !this.f ? this.l : this.o);
        x(d, "click", this.al, !1, this);
        wh(d);
        var e = Lg("DIV", "ol-overviewmap-map"), f = this.d =
            new X({controls:new qg,interactions:new qg,target:e});m(b.layers)&&b.layers.forEach(function(b){f.If(b)},this);var g=Lg("DIV","ol-overviewmap-box");this.i=new Zq({position:[0,0],positioning:"bottom-left",element:g});this.d.Jf(this.i);c=Lg("DIV",c+" ol-unselectable ol-control"+(this.f&&this.g?" ol-collapsed":"")+(this.g?"":" ol-uncollapsible"),e,d);vh.call(this,{element:c,render:m(b.render)?b.render:cr,target:b.target})}w(br,vh);k=br.prototype;
k.setMap=function(b){var c=this.b;b!==c&&(c&&(c=c.P())&&Vc(c,hd("rotation"),this.Pd,!1,this),br.S.setMap.call(this,b),b&&(this.n.push(x(b,"propertychange",this.Sj,!1,this)),0===this.d.vg().Ib()&&this.d.th(b.Tb()),b=b.P()))&&(x(b,hd("rotation"),this.Pd,!1,this),Sf(b)&&(this.d.Lc(),dr(this)))};k.Sj=function(b){"view"===b.key&&((b=b.oldValue)&&Vc(b,hd("rotation"),this.Pd,!1,this),b=this.b.P(),x(b,hd("rotation"),this.Pd,!1,this))};k.Pd=function(){this.d.P().Zd(this.b.P().xa())};
function cr(){var b=this.b,c=this.d;if(null!==b.c&&null!==c.c){var d=b.va(),b=b.P().Pc(d),e=c.va(),d=c.P().Pc(e),f=c.ra(ce(b)),c=c.ra(ae(b)),c=new Dg(Math.abs(f[0]-c[0]),Math.abs(f[1]-c[1])),f=e[0],e=e[1];c.width<.1*f||c.height<.1*e||c.width>.75*f||c.height>.75*e?dr(this):Td(d,b)||(b=this.d,d=this.b.P(),b.P().Xa(d.Da()))}er(this)}function dr(b){var c=b.b;b=b.d;var d=c.va(),c=c.P().Pc(d),d=b.va();b=b.P();var e=Math.log(7.5)/Math.LN2;ke(c,1/(.1*Math.pow(2,e/2)));b.Je(c,d)}
function er(b){var c=b.b,d=b.d;if(null!==c.c&&null!==d.c){var e=c.va(),f=c.P(),g=d.P();d.va();var c=f.xa(),h=b.i,d=b.i.Xd(),f=f.Pc(e),e=g.wa(),g=$d(f),f=be(f),l;b=b.b.P().Da();m(b)&&(l=[g[0]-b[0],g[1]-b[1]],rd(l,c),md(l,b));h.tf(l);null!=d&&(l=new Dg(Math.abs((g[0]-f[0])/e),Math.abs((f[1]-g[1])/e)),c=Wg(Eg(Gg(d))),!Ib||Rb("10")||c&&Rb("8")?(d=d.style,Jb?d.MozBoxSizing="border-box":Kb?d.WebkitBoxSizing="border-box":d.boxSizing="border-box",d.width=Math.max(l.width,0)+"px",d.height=Math.max(l.height,
0)+"px"):(b=d.style,c?(c=qh(d,"padding"),d=th(d),b.pixelWidth=l.width-d.left-c.left-c.right-d.right,b.pixelHeight=l.height-d.top-c.top-c.bottom-d.bottom):(b.pixelWidth=l.width,b.pixelHeight=l.height)))}}k.al=function(b){b.preventDefault();fr(this)};function fr(b){bh(b.element,"ol-collapsed");b.f?Tg(b.l,b.o):Tg(b.o,b.l);b.f=!b.f;var c=b.d;b.f||null!==c.c||(c.Lc(),dr(b),Uc(c,"postrender",function(){er(this)},!1,b))}k.$k=function(){return this.g};
k.cl=function(b){this.g!==b&&(this.g=b,bh(this.element,"ol-uncollapsible"),!b&&this.f&&fr(this))};k.bl=function(b){this.g&&this.f!==b&&fr(this)};k.Zk=function(){return this.f};function gr(b){b=m(b)?b:{};var c=m(b.className)?b.className:"ol-scale-line";this.g=Lg("DIV",c+"-inner");this.$=Lg("DIV",c+" ol-unselectable",this.g);this.l=null;this.i=m(b.minWidth)?b.minWidth:64;this.d=!1;this.q=void 0;this.o="";this.f=null;vh.call(this,{element:this.$,render:m(b.render)?b.render:hr,target:b.target});x(this,hd("units"),this.U,!1,this);this.D(b.units||"metric")}w(gr,vh);var ir=[1,2,5];gr.prototype.r=function(){return this.get("units")};
function hr(b){b=b.frameState;null===b?this.l=null:this.l=b.viewState;jr(this)}gr.prototype.U=function(){jr(this)};gr.prototype.D=function(b){this.set("units",b)};
function jr(b){var c=b.l;if(null===c)b.d&&(nh(b.$,!1),b.d=!1);else{var d=c.center,e=c.projection,c=e.getPointResolution(c.resolution,d),f=e.b,g=b.r();"degrees"!=f||"metric"!=g&&"imperial"!=g&&"us"!=g&&"nautical"!=g?"degrees"!=f&&"degrees"==g?(null===b.f&&(b.f=De(e,ze("EPSG:4326"))),d=Math.cos(Yb(b.f(d)[1])),e=ve.radius,e/=we[f],c*=180/(Math.PI*d*e)):b.f=null:(b.f=null,d=Math.cos(Yb(d[1])),c*=Math.PI*d*ve.radius/180);d=b.i*c;f="";"degrees"==g?d<1/60?(f="\u2033",c*=3600):1>d?(f="\u2032",c*=60):f="\u00b0":
"imperial"==g?.9144>d?(f="in",c/=.0254):1609.344>d?(f="ft",c/=.3048):(f="mi",c/=1609.344):"nautical"==g?(c/=1852,f="nm"):"metric"==g?1>d?(f="mm",c*=1E3):1E3>d?f="m":(f="km",c/=1E3):"us"==g&&(.9144>d?(f="in",c*=39.37):1609.344>d?(f="ft",c/=.30480061):(f="mi",c/=1609.3472));for(d=3*Math.floor(Math.log(b.i*c)/Math.log(10));;){e=ir[d%3]*Math.pow(10,Math.floor(d/3));g=Math.round(e/c);if(isNaN(g)){nh(b.$,!1);b.d=!1;return}if(g>=b.i)break;++d}c=e+" "+f;b.o!=c&&(b.g.innerHTML=c,b.o=c);b.q!=g&&(b.g.style.width=
    g + "px", b.q = g);
    b.d || (nh(b.$, !0), b.d = !0)
}
}
    function kr(b) {
        mc.call(this);
        this.b = b;
        this.a = {}
    }
    w(kr, mc);
    var lr = [];
    kr.prototype.Ka = function (b, c, d, e) {
        ga(c) || (c && (lr[0] = c.toString()), c = lr);
        for (var f = 0; f < c.length; f++) {
            var g = x(b, c[f], d || this.handleEvent, e || !1, this.b || this);
            if (!g) break;
            this.a[g.key] = g
        }
        return this
    };
    kr.prototype.vf=function(b,c,d,e,f){if(ga(c))for(var g=0;g<c.length;g++)this.vf(b,c[g],d,e,f);else d=d||this.handleEvent,f=f||this.b||this,d=Oc(d),e=!!e,c=Bc(b)?Jc(b.bb,String(c),d,e,f):b?(b=Qc(b))?Jc(b,c,d,e,f):null:null,c&&(Wc(c),delete this.a[c.key]);return this};function mr(b){pb(b.a,Wc);b.a={}}kr.prototype.N=function(){kr.S.N.call(this);mr(this)};kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function nr(b,c,d){$c.call(this);this.target=b;this.handle=c||b;this.a=d||new dh(NaN,NaN,NaN,NaN);this.c=Gg(b);this.b=new kr(this);pc(this,this.b);x(this.handle,["touchstart","mousedown"],this.eg,!1,this)}w(nr,$c);var or=Ib||Jb&&Rb("1.9.3");k=nr.prototype;k.clientX=0;k.clientY=0;k.screenX=0;k.screenY=0;k.zh=0;k.Ah=0;k.xc=0;k.yc=0;k.Xb=!1;k.N=function(){nr.S.N.call(this);Vc(this.handle,["touchstart","mousedown"],this.eg,!1,this);mr(this.b);or&&this.c.releaseCapture();this.handle=this.target=null};
k.eg=function(b){var c="mousedown"==b.type;if(this.Xb||c&&!zc(b))this.dispatchEvent("earlycancel");else if(pr(b),this.dispatchEvent(new qr("start",this,b.clientX,b.clientY))){this.Xb=!0;b.preventDefault();var c=this.c,d=c.documentElement,e=!or;this.b.Ka(c,["touchmove","mousemove"],this.Vj,e);this.b.Ka(c,["touchend","mouseup"],this.Md,e);or?(d.setCapture(!1),this.b.Ka(d,"losecapture",this.Md)):this.b.Ka(c?c.parentWindow||c.defaultView:window,"blur",this.Md);this.e&&this.b.Ka(this.e,"scroll",this.Um,
e);this.clientX=this.zh=b.clientX;this.clientY=this.Ah=b.clientY;this.screenX=b.screenX;this.screenY=b.screenY;this.xc=this.target.offsetLeft;this.yc=this.target.offsetTop;this.d=Xg(Eg(this.c));ua()}};k.Md=function(b){mr(this.b);or&&this.c.releaseCapture();if(this.Xb){pr(b);this.Xb=!1;var c=rr(this,this.xc),d=sr(this,this.yc);this.dispatchEvent(new qr("end",this,b.clientX,b.clientY,0,c,d))}else this.dispatchEvent("earlycancel")};
function pr(b){var c=b.type;"touchstart"==c||"touchmove"==c?xc(b,b.a.targetTouches[0],b.c):"touchend"!=c&&"touchcancel"!=c||xc(b,b.a.changedTouches[0],b.c)}
k.Vj=function(b){pr(b);var c=1*(b.clientX-this.clientX),d=b.clientY-this.clientY;this.clientX=b.clientX;this.clientY=b.clientY;this.screenX=b.screenX;this.screenY=b.screenY;if(!this.Xb){var e=this.zh-this.clientX,f=this.Ah-this.clientY;if(0<e*e+f*f)if(this.dispatchEvent(new qr("start",this,b.clientX,b.clientY)))this.Xb=!0;else{this.Y||this.Md(b);return}}d=tr(this,c,d);c=d.x;d=d.y;this.Xb&&this.dispatchEvent(new qr("beforedrag",this,b.clientX,b.clientY,0,c,d))&&(ur(this,b,c,d),b.preventDefault())};
function tr(b,c,d){var e=Xg(Eg(b.c));c+=e.x-b.d.x;d+=e.y-b.d.y;b.d=e;b.xc+=c;b.yc+=d;c=rr(b,b.xc);b=sr(b,b.yc);return new Cg(c,b)}k.Um=function(b){var c=tr(this,0,0);b.clientX=this.clientX;b.clientY=this.clientY;ur(this,b,c.x,c.y)};function ur(b,c,d,e){b.target.style.left=d+"px";b.target.style.top=e+"px";b.dispatchEvent(new qr("drag",b,c.clientX,c.clientY,0,d,e))}
function rr(b,c){var d=b.a,e=isNaN(d.left)?null:d.left,d=isNaN(d.width)?0:d.width;return Math.min(null!=e?e+d:Infinity,Math.max(null!=e?e:-Infinity,c))}function sr(b,c){var d=b.a,e=isNaN(d.top)?null:d.top,d=isNaN(d.height)?0:d.height;return Math.min(null!=e?e+d:Infinity,Math.max(null!=e?e:-Infinity,c))}function qr(b,c,d,e,f,g,h){rc.call(this,b);this.clientX=d;this.clientY=e;this.left=m(g)?g:c.xc;this.top=m(h)?h:c.yc}w(qr,rc);function vr(b){b=m(b)?b:{};this.f=void 0;this.g=wr;this.i=null;this.o=!1;this.l=m(b.duration)?b.duration:200;var c=m(b.className)?b.className:"ol-zoomslider",d=Lg("DIV",[c+"-thumb","ol-unselectable"]),c=Lg("DIV",[c,"ol-unselectable","ol-control"],d);this.d=new nr(d);pc(this,this.d);x(this.d,"start",this.Ej,!1,this);x(this.d,"drag",this.Cj,!1,this);x(this.d,"end",this.Dj,!1,this);x(c,"click",this.Bj,!1,this);x(d,"click",sc);vh.call(this,{element:c,render:m(b.render)?b.render:xr})}w(vr,vh);var wr=0;
k=vr.prototype;k.setMap=function(b){vr.S.setMap.call(this,b);null===b||b.render()};
function xr(b){if(null!==b.frameState){if(!this.o){var c=this.element,d=lh(c),e=Ug(c),c=qh(e,"margin"),f=new Dg(e.offsetWidth,e.offsetHeight),e=f.width+c.right+c.left,c=f.height+c.top+c.bottom;this.i=[e,c];e=d.width-e;c=d.height-c;d.width>d.height?(this.g=1,d=new dh(0,0,e,0)):(this.g=wr,d=new dh(0,0,0,c));this.d.a=d||new dh(NaN,NaN,NaN,NaN);this.o=!0}b=b.frameState.viewState.resolution;b!==this.f&&(this.f=b,b=1-Qf(this.b.P())(b),d=this.d,c=Ug(this.element),1==this.g?hh(c,d.a.left+d.a.width*b):hh(c,
d.a.left,d.a.top+d.a.height*b))}}k.Bj=function(b){var c=this.b,d=c.P(),e=d.wa();c.Ha($f({resolution:e,duration:this.l,easing:Uf}));b=yr(this,b.offsetX-this.i[0]/2,b.offsetY-this.i[1]/2);b=zr(this,b);d.Pb(d.constrainResolution(b))};k.Ej=function(){Tf(this.b.P(),1)};k.Cj=function(b){b=yr(this,b.left,b.top);this.f=zr(this,b);this.b.P().Pb(this.f)};k.Dj=function(){var b=this.b,c=b.P();Tf(c,-1);b.Ha($f({resolution:this.f,duration:this.l,easing:Uf}));b=c.constrainResolution(this.f);c.Pb(b)};
    function yr(b, c, d) {
        var e = b.d.a;
        return Vb(1 === b.g ? (c - e.left) / e.width : (d - e.top) / e.height, 0, 1)
    }
    function zr(b, c) {
        return Of(b.b.P())(1 - c)
    }
    function Ar(b) {
        b = m(b) ? b : {};
        this.d = m(b.extent) ? b.extent : null;
        var c = m(b.className) ? b.className : "ol-zoom-extent", d = Lg("BUTTON", {
            type: "button",
            title: m(b.tipLabel) ? b.tipLabel : "Fit to extent"
        }, m(b.label) ? b.label : "E");
        x(d, "click", this.f, !1, this);
        wh(d);
        c = Lg("DIV", c + " ol-unselectable ol-control", d);
        vh.call(this, {element: c, target: b.target})
    }
    w(Ar, vh);
    Ar.prototype.f = function (b) {
        b.preventDefault();
        var c = this.b;
        b = c.P();
        var d = null === this.d ? b.e.I() : this.d, c = c.va();
        b.Je(d, c)
    };
    function Br(b) {
        fd.call(this);
        b = m(b) ? b : {};
        this.b = null;
        x(this, hd("tracking"), this.Dk, !1, this);
        this.$e(m(b.tracking) ? b.tracking : !1)
    }
    w(Br, fd);
    k = Br.prototype;
    k.N = function () {
        this.$e(!1);
        Br.S.N.call(this)
    };
    k.Vm=function(b){b=b.a;if(null!=b.alpha){var c=Yb(b.alpha);this.set("alpha",c);"boolean"==typeof b.absolute&&b.absolute?this.set("heading",c):null!=b.webkitCompassHeading&&null!=b.webkitCompassAccuracy&&-1!=b.webkitCompassAccuracy&&this.set("heading",Yb(b.webkitCompassHeading))}null!=b.beta&&this.set("beta",Yb(b.beta));null!=b.gamma&&this.set("gamma",Yb(b.gamma));this.k()};k.Ii=function(){return this.get("alpha")};k.Li=function(){return this.get("beta")};k.Ui=function(){return this.get("gamma")};
k.Ck=function(){return this.get("heading")};k.rg=function(){return this.get("tracking")};k.Dk=function(){if(fj){var b=this.rg();b&&null===this.b?this.b=x(ba,"deviceorientation",this.Vm,!1,this):b||null===this.b||(Wc(this.b),this.b=null)}};k.$e=function(b){this.set("tracking",b)};function Cr(){this.defaultDataProjection=null}function Dr(b,c,d){var e;m(d)&&(e={dataProjection:m(d.dataProjection)?d.dataProjection:b.za(c),featureProjection:d.featureProjection});return Er(b,e)}function Er(b,c){var d;m(c)&&(d={featureProjection:c.featureProjection,dataProjection:null!=c.dataProjection?c.dataProjection:b.defaultDataProjection,rightHanded:c.rightHanded});return d}
    function Fr(b, c, d) {
        var e = m(d) ? ze(d.featureProjection) : null;
        d = m(d) ? ze(d.dataProjection) : null;
        return null === e || null === d || Re(e, d) ? b : b instanceof We ? (c ? b.clone() : b).transform(c ? e : d, c ? d : e) : Ve(c ? b.slice() : b, c ? e : d, c ? d : e)
    }
    function Gr() {
        this.defaultDataProjection = null
    }
    w(Gr, Cr);
    function Hr(b) {
        return la(b) ? b : ia(b) ? (b = Xn(b), m(b) ? b : null) : null
    }
    k = Gr.prototype;
    k.L = function () {
        return "json"
    };
    k.xb = function (b, c) {
        return this.Gc(Hr(b), Dr(this, b, c))
    };
    k.ja = function (b, c) {
        return this.mf(Hr(b), Dr(this, b, c))
    };
    k.Hc = function (b, c) {
        return this.bh(Hr(b), Dr(this, b, c))
    };
    k.za = function (b) {
        return this.ih(Hr(b))
    };
    k.qd = function (b, c) {
        return Yn(this.Mc(b, c))
    };
    k.yb = function (b, c) {
        return Yn(this.ve(b, c))
    };
    k.Nc = function (b, c) {
        return Yn(this.xe(b, c))
    };
    function Ir(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.a = b.geometryName
    }
    w(Ir, Gr);
    function Jr(b,c){if(null===b)return null;var d;if(ja(b.x)&&ja(b.y))d="Point";else if(null!=b.points)d="MultiPoint";else if(null!=b.paths)d=1===b.paths.length?"LineString":"MultiLineString";else if(null!=b.rings){var e=b.rings,f=Kr(b),g=[];d=[];var h,l;h=0;for(l=e.length;h<l;++h){var n=kb(e[h]);Cf(n,0,n.length,f.length)?g.push([e[h]]):d.push(e[h])}for(;d.length;){e=d.shift();f=!1;for(h=g.length-1;0<=h;h--)if(Td((new sf(g[h][0])).I(),(new sf(e)).I())){g[h].push(e);f=!0;break}f||g.push([e.reverse()])}b=
Db(b);1===g.length?(d="Polygon",b.rings=g[0]):(d="MultiPolygon",b.rings=g)}return Fr((0,Lr[d])(b),!1,c)}function Kr(b){var c="XY";!0===b.hasZ&&!0===b.hasM?c="XYZM":!0===b.hasZ?c="XYZ":!0===b.hasM&&(c="XYM");return c}function Mr(b){b=b.b;return{hasZ:"XYZ"===b||"XYZM"===b,hasM:"XYM"===b||"XYZM"===b}}
var Lr={Point:function(b){return null!=b.m&&null!=b.z?new C([b.x,b.y,b.z,b.m],"XYZM"):null!=b.z?new C([b.x,b.y,b.z],"XYZ"):null!=b.m?new C([b.x,b.y,b.m],"XYM"):new C([b.x,b.y])},LineString:function(b){return new N(b.paths[0],Kr(b))},Polygon:function(b){return new D(b.rings,Kr(b))},MultiPoint:function(b){return new hn(b.points,Kr(b))},MultiLineString:function(b){return new O(b.paths,Kr(b))},MultiPolygon:function(b){return new P(b.rings,Kr(b))}},Nr={Point:function(b){var c=b.M();b=b.b;if("XYZ"===b)return{x:c[0],
y:c[1],z:c[2]};if("XYM"===b)return{x:c[0],y:c[1],m:c[2]};if("XYZM"===b)return{x:c[0],y:c[1],z:c[2],m:c[3]};if("XY"===b)return{x:c[0],y:c[1]}},LineString:function(b){var c=Mr(b);return{hasZ:c.hasZ,hasM:c.hasM,paths:[b.M()]}},Polygon:function(b){var c=Mr(b);return{hasZ:c.hasZ,hasM:c.hasM,rings:b.M(!1)}},MultiPoint:function(b){var c=Mr(b);return{hasZ:c.hasZ,hasM:c.hasM,points:b.M()}},MultiLineString:function(b){var c=Mr(b);return{hasZ:c.hasZ,hasM:c.hasM,paths:b.M()}},MultiPolygon:function(b){var c=Mr(b);
b=b.M(!1);for(var d=[],e=0;e<b.length;e++)for(var f=b[e].length-1;0<=f;f--)d.push(b[e][f]);return{hasZ:c.hasZ,hasM:c.hasM,rings:d}}};k=Ir.prototype;k.Gc=function(b,c){var d=Jr(b.geometry,c),e=new yn;m(this.a)&&e.Jc(this.a);e.La(d);m(c)&&m(c.Ve)&&m(b.attributes[c.Ve])&&e.Ob(b.attributes[c.Ve]);m(b.attributes)&&e.u(b.attributes);return e};
k.mf=function(b,c){var d=m(c)?c:{};if(null!=b.features){var e=[],f=b.features,g,h;d.Ve=b.objectIdFieldName;g=0;for(h=f.length;g<h;++g)e.push(this.Gc(f[g],d));return e}return[this.Gc(b,d)]};k.bh=function(b,c){return Jr(b,c)};k.ih=function(b){return null!=b.spatialReference&&null!=b.spatialReference.wkid?ze("EPSG:"+b.spatialReference.wkid):null};function Or(b,c){return(0,Nr[b.L()])(Fr(b,!0,c),c)}k.xe=function(b,c){return Or(b,Er(this,c))};
k.Mc=function(b,c){c=Er(this,c);var d={},e=b.Q();null!=e&&(d.geometry=Or(e,c));e=b.H();zb(e,b.b);d.attributes=xb(e)?{}:e;m(c)&&m(c.featureProjection)&&(d.spatialReference={wkid:ze(c.featureProjection).a.split(":").pop()});return d};k.ve=function(b,c){c=Er(this,c);var d=[],e,f;e=0;for(f=b.length;e<f;++e)d.push(this.Mc(b[e],c));return{features:d}};function Pr(b){b=m(b)?b:{};this.defaultDataProjection=null;this.defaultDataProjection=ze(null!=b.defaultDataProjection?b.defaultDataProjection:"EPSG:4326");this.a=b.geometryName}w(Pr,Gr);function Qr(b,c){return null===b?null:Fr((0,Rr[b.type])(b),!1,c)}function Sr(b,c){return(0,Tr[b.L()])(Fr(b,!0,c),c)}
var Rr={Point:function(b){return new C(b.coordinates)},LineString:function(b){return new N(b.coordinates)},Polygon:function(b){return new D(b.coordinates)},MultiPoint:function(b){return new hn(b.coordinates)},MultiLineString:function(b){return new O(b.coordinates)},MultiPolygon:function(b){return new P(b.coordinates)},GeometryCollection:function(b,c){var d=Ua(b.geometries,function(b){return Qr(b,c)});return new Ym(d)}},Tr={Point:function(b){return{type:"Point",coordinates:b.M()}},LineString:function(b){return{type:"LineString",
coordinates:b.M()}},Polygon:function(b,c){var d;m(c)&&(d=c.rightHanded);return{type:"Polygon",coordinates:b.M(d)}},MultiPoint:function(b){return{type:"MultiPoint",coordinates:b.M()}},MultiLineString:function(b){return{type:"MultiLineString",coordinates:b.M()}},MultiPolygon:function(b,c){var d;m(c)&&(d=c.rightHanded);return{type:"MultiPolygon",coordinates:b.M(d)}},GeometryCollection:function(b,c){return{type:"GeometryCollection",geometries:Ua(b.d,function(b){return Sr(b,c)})}},Circle:function(){return{type:"GeometryCollection",
geometries:[]}}};k=Pr.prototype;k.Gc=function(b,c){var d=Qr(b.geometry,c),e=new yn;m(this.a)&&e.Jc(this.a);e.La(d);m(b.id)&&e.Ob(b.id);m(b.properties)&&e.u(b.properties);return e};k.mf=function(b,c){if("Feature"==b.type)return[this.Gc(b,c)];if("FeatureCollection"==b.type){var d=[],e=b.features,f,g;f=0;for(g=e.length;f<g;++f)d.push(this.Gc(e[f],c));return d}return[]};k.bh=function(b,c){return Qr(b,c)};
k.ih=function(b){b=b.crs;return null!=b?"name"==b.type?ze(b.properties.name):"EPSG"==b.type?ze("EPSG:"+b.properties.code):null:this.defaultDataProjection};k.Mc=function(b,c){c=Er(this,c);var d={type:"Feature"},e=b.aa;null!=e&&(d.id=e);e=b.Q();d.geometry=null!=e?Sr(e,c):null;e=b.H();zb(e,b.b);d.properties=xb(e)?null:e;return d};k.ve=function(b,c){c=Er(this,c);var d=[],e,f;e=0;for(f=b.length;e<f;++e)d.push(this.Mc(b[e],c));return{type:"FeatureCollection",features:d}};
k.xe=function(b,c){return Sr(b,Er(this,c))};function Ur(){this.defaultDataProjection=null}w(Ur,Cr);k=Ur.prototype;k.L=function(){return"xml"};k.xb=function(b,c){if(Qo(b))return Vr(this,b,c);if(To(b))return this.$g(b,c);if(ia(b)){var d=cp(b);return Vr(this,d,c)}return null};function Vr(b,c,d){b=Wr(b,c,d);return 0<b.length?b[0]:null}k.ja=function(b,c){if(Qo(b))return Wr(this,b,c);if(To(b))return this.Mb(b,c);if(ia(b)){var d=cp(b);return Wr(this,d,c)}return[]};
function Wr(b,c,d){var e=[];for(c=c.firstChild;null!==c;c=c.nextSibling)1==c.nodeType&&db(e,b.Mb(c,d));return e}k.Hc=function(b,c){if(Qo(b))return this.n(b,c);if(To(b)){var d=this.me(b,[Dr(this,b,m(c)?c:{})]);return m(d)?d:null}return ia(b)?(d=cp(b),this.n(d,c)):null};k.za=function(b){return Qo(b)?this.qf(b):To(b)?this.pe(b):ia(b)?(b=cp(b),this.qf(b)):null};k.qf=function(){return this.defaultDataProjection};k.pe=function(){return this.defaultDataProjection};k.qd=function(b,c){var d=this.o(b,c);return Bo(d)};
k.yb=function(b,c){var d=this.b(b,c);return Bo(d)};k.Nc=function(b,c){var d=this.p(b,c);return Bo(d)};function Xr(b){b=m(b)?b:{};this.featureType=b.featureType;this.featureNS=b.featureNS;this.srsName=b.srsName;this.schemaLocation="";this.a={};this.a["http://www.opengis.net/gml"]={featureMember:fp(Xr.prototype.kd),featureMembers:fp(Xr.prototype.kd)};this.defaultDataProjection=null}w(Xr,Ur);k=Xr.prototype;
k.kd=function(b,c){var d=No(b),e;if("FeatureCollection"==d)"http://www.opengis.net/wfs"===b.namespaceURI?e=V([],this.a,b,c,this):e=V(null,this.a,b,c,this);else if("featureMembers"==d||"featureMember"==d){var f=c[0],g=f.featureType;e=f.featureNS;var h,l;if(!m(g)&&null!=b.childNodes){g=[];e={};h=0;for(l=b.childNodes.length;h<l;++h){var n=b.childNodes[h];if(1===n.nodeType){var p=n.nodeName.split(":").pop();if(-1===Ra(g,p)){var q;vb(e,n.namespaceURI)?q=wb(e,function(b){return b===n.namespaceURI}):(q=
"p"+rb(e),e[q]=n.namespaceURI);g.push(q+":"+p)}}}f.featureType=g;f.featureNS=e}ia(e)&&(h=e,e={},e.p0=h);var f={},g=ga(g)?g:[g],r;for(r in e){p={};h=0;for(l=g.length;h<l;++h)(-1===g[h].indexOf(":")?"p0":g[h].split(":")[0])===r&&(p[g[h].split(":").pop()]="featureMembers"==d?ep(this.lf,this):fp(this.lf,this));f[e[r]]=p}e=V([],f,b,c)}m(e)||(e=[]);return e};k.me=function(b,c){var d=c[0];d.srsName=b.firstElementChild.getAttribute("srsName");var e=V(null,this.Bf,b,c,this);if(null!=e)return Fr(e,!1,d)};
k.lf=function(b,c){var d,e=b.getAttribute("fid")||Xo(b,"http://www.opengis.net/gml","id"),f={},g;for(d=b.firstElementChild;null!==d;d=d.nextElementSibling){var h=No(d);if(0===d.childNodes.length||1===d.childNodes.length&&(3===d.firstChild.nodeType||4===d.firstChild.nodeType)){var l=Jo(d,!1);/^[\s\xa0]*$/.test(l)&&(l=void 0);f[h]=l}else"boundedBy"!==h&&(g=h),f[h]=this.me(d,c)}d=new yn(f);m(g)&&d.Jc(g);e&&d.Ob(e);return d};
k.hh=function(b,c){var d=this.le(b,c);if(null!=d){var e=new C(null);uf(e,"XYZ",d);return e}};k.fh=function(b,c){var d=V([],this.Vh,b,c,this);if(m(d))return new hn(d)};k.eh=function(b,c){var d=V([],this.Uh,b,c,this);if(m(d)){var e=new O(null);gn(e,d);return e}};k.gh=function(b,c){var d=V([],this.Wh,b,c,this);if(m(d)){var e=new P(null);kn(e,d);return e}};k.Wg=function(b,c){np(this.Zh,b,c,this)};k.ng=function(b,c){np(this.Sh,b,c,this)};k.Xg=function(b,c){np(this.$h,b,c,this)};
k.ne=function(b,c){var d=this.le(b,c);if(null!=d){var e=new N(null);en(e,"XYZ",d);return e}};k.ln=function(b,c){var d=V(null,this.sd,b,c,this);if(null!=d)return d};k.dh=function(b,c){var d=this.le(b,c);if(m(d)){var e=new sf(null);tf(e,"XYZ",d);return e}};k.oe=function(b,c){var d=V([null],this.ze,b,c,this);if(m(d)&&null!==d[0]){var e=new D(null),f=d[0],g=[f.length],h,l;h=1;for(l=d.length;h<l;++h)db(f,d[h]),g.push(f.length);Gf(e,"XYZ",f,g);return e}};k.le=function(b,c){return V(null,this.sd,b,c,this)};
k.Vh=Object({"http://www.opengis.net/gml":{pointMember:ep(Xr.prototype.Wg),pointMembers:ep(Xr.prototype.Wg)}});k.Uh=Object({"http://www.opengis.net/gml":{lineStringMember:ep(Xr.prototype.ng),lineStringMembers:ep(Xr.prototype.ng)}});k.Wh=Object({"http://www.opengis.net/gml":{polygonMember:ep(Xr.prototype.Xg),polygonMembers:ep(Xr.prototype.Xg)}});k.Zh=Object({"http://www.opengis.net/gml":{Point:ep(Xr.prototype.le)}});k.Sh=Object({"http://www.opengis.net/gml":{LineString:ep(Xr.prototype.ne)}});
k.$h=Object({"http://www.opengis.net/gml":{Polygon:ep(Xr.prototype.oe)}});k.ud=Object({"http://www.opengis.net/gml":{LinearRing:fp(Xr.prototype.ln)}});k.Mb=function(b,c){var d={featureType:this.featureType,featureNS:this.featureNS};m(c)&&Fb(d,Dr(this,b,c));return this.kd(b,[d])};k.pe=function(b){return ze(m(this.l)?this.l:b.firstElementChild.getAttribute("srsName"))};function Yr(b){b=Jo(b,!1);return Zr(b)}function Zr(b){if(b=/^\s*(true|1)|(false|0)\s*$/.exec(b))return m(b[1])||!1}function $r(b){b=Jo(b,!1);if(b=/^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(b)){var c=Date.UTC(parseInt(b[1],10),parseInt(b[2],10)-1,parseInt(b[3],10),parseInt(b[4],10),parseInt(b[5],10),parseInt(b[6],10))/1E3;if("Z"!=b[7]){var d="-"==b[8]?-1:1,c=c+60*d*parseInt(b[9],10);m(b[10])&&(c+=3600*d*parseInt(b[10],10))}return c}}
    function as(b) {
        b = Jo(b, !1);
        return bs(b)
    }
    function bs(b) {
        if (b = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(b)) return parseFloat(b[1])
    }
    function cs(b) {
        b = Jo(b, !1);
        return ds(b)
    }
    function ds(b) {
        if (b = /^\s*(\d+)\s*$/.exec(b)) return parseInt(b[1], 10)
    }
    function Y(b) {
        b = Jo(b, !1);
        return Ca(b)
    }
    function es(b, c) {
        fs(b, c ? "1" : "0")
    }
    function gs(b, c) {
        b.appendChild(Fo.createTextNode(c.toPrecision()))
    }
    function hs(b, c) {
        b.appendChild(Fo.createTextNode(c.toString()))
    }
    function fs(b, c) {
        b.appendChild(Fo.createTextNode(c))
    }
    function is(b) {
        b = m(b) ? b : {};
        Xr.call(this, b);
        this.i = m(b.surface) ? b.surface : !1;
        this.e = m(b.curve) ? b.curve : !1;
        this.f = m(b.multiCurve) ? b.multiCurve : !0;
        this.g = m(b.multiSurface) ? b.multiSurface : !0;
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }
    w(is, Xr);
    k = is.prototype;
    k.pn = function (b, c) {
        var d = V([], this.Th, b, c, this);
        if (m(d)) {
            var e = new O(null);
            gn(e, d);
            return e
        }
    };
    k.qn=function(b,c){var d=V([],this.Xh,b,c,this);if(m(d)){var e=new P(null);kn(e,d);return e}};k.Mf=function(b,c){np(this.Ph,b,c,this)};k.Bh=function(b,c){np(this.fi,b,c,this)};k.tn=function(b,c){return V([null],this.Yh,b,c,this)};k.wn=function(b,c){return V([null],this.ei,b,c,this)};k.vn=function(b,c){return V([null],this.ze,b,c,this)};k.nn=function(b,c){return V([null],this.sd,b,c,this)};k.kk=function(b,c){var d=V(void 0,this.ud,b,c,this);m(d)&&c[c.length-1].push(d)};
k.Bi=function(b,c){var d=V(void 0,this.ud,b,c,this);m(d)&&(c[c.length-1][0]=d)};k.jh=function(b,c){var d=V([null],this.gi,b,c,this);if(m(d)&&null!==d[0]){var e=new D(null),f=d[0],g=[f.length],h,l;h=1;for(l=d.length;h<l;++h)db(f,d[h]),g.push(f.length);Gf(e,"XYZ",f,g);return e}};k.Yg=function(b,c){var d=V([null],this.Qh,b,c,this);if(m(d)){var e=new N(null);en(e,"XYZ",d);return e}};k.kn=function(b,c){var d=V([null],this.Rh,b,c,this);return Nd(d[1][0],d[1][1],d[2][0],d[2][1])};
k.mn=function(b,c){for(var d=Jo(b,!1),e=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,f=[],g;g=e.exec(d);)f.push(parseFloat(g[1])),d=d.substr(g[0].length);if(""===d){d=c[0].srsName;e="enu";null===d||(e=Ce(ze(d)));if("neu"===e)for(d=0,e=f.length;d<e;d+=3)g=f[d],f[d]=f[d+1],f[d+1]=g;d=f.length;2==d&&f.push(0);return 0===d?void 0:f}};
k.of=function(b,c){var d=Jo(b,!1).replace(/^\s*|\s*$/g,""),e=c[0].srsName,f=b.parentNode.getAttribute("srsDimension"),g="enu";null===e||(g=Ce(ze(e)));d=d.split(/\s+/);e=2;fa(b.getAttribute("srsDimension"))?fa(b.getAttribute("dimension"))?null===f||(e=ds(f)):e=ds(b.getAttribute("dimension")):e=ds(b.getAttribute("srsDimension"));for(var h,l,n=[],p=0,q=d.length;p<q;p+=e)f=parseFloat(d[p]),h=parseFloat(d[p+1]),l=3===e?parseFloat(d[p+2]):0,"en"===g.substr(0,2)?n.push(f,h,l):n.push(h,f,l);return n};
k.sd=Object({"http://www.opengis.net/gml":{pos:fp(is.prototype.mn),posList:fp(is.prototype.of)}});k.ze=Object({"http://www.opengis.net/gml":{interior:is.prototype.kk,exterior:is.prototype.Bi}});
k.Bf=Object({"http://www.opengis.net/gml":{Point:fp(Xr.prototype.hh),MultiPoint:fp(Xr.prototype.fh),LineString:fp(Xr.prototype.ne),MultiLineString:fp(Xr.prototype.eh),LinearRing:fp(Xr.prototype.dh),Polygon:fp(Xr.prototype.oe),MultiPolygon:fp(Xr.prototype.gh),Surface:fp(is.prototype.jh),MultiSurface:fp(is.prototype.qn),Curve:fp(is.prototype.Yg),MultiCurve:fp(is.prototype.pn),Envelope:fp(is.prototype.kn)}});k.Th=Object({"http://www.opengis.net/gml":{curveMember:ep(is.prototype.Mf),curveMembers:ep(is.prototype.Mf)}});
k.Xh=Object({"http://www.opengis.net/gml":{surfaceMember:ep(is.prototype.Bh),surfaceMembers:ep(is.prototype.Bh)}});k.Ph=Object({"http://www.opengis.net/gml":{LineString:ep(Xr.prototype.ne),Curve:ep(is.prototype.Yg)}});k.fi=Object({"http://www.opengis.net/gml":{Polygon:ep(Xr.prototype.oe),Surface:ep(is.prototype.jh)}});k.gi=Object({"http://www.opengis.net/gml":{patches:fp(is.prototype.tn)}});k.Qh=Object({"http://www.opengis.net/gml":{segments:fp(is.prototype.wn)}});
k.Rh=Object({"http://www.opengis.net/gml":{lowerCorner:ep(is.prototype.of),upperCorner:ep(is.prototype.of)}});k.Yh=Object({"http://www.opengis.net/gml":{PolygonPatch:fp(is.prototype.vn)}});k.ei=Object({"http://www.opengis.net/gml":{LineStringSegment:fp(is.prototype.nn)}});function js(b,c,d){d=d[d.length-1].srsName;c=c.M();for(var e=c.length,f=Array(e),g,h=0;h<e;++h){g=c[h];var l=h,n="enu";null!=d&&(n=Ce(ze(d)));f[l]="en"===n.substr(0,2)?g[0]+" "+g[1]:g[1]+" "+g[0]}fs(b,f.join(" "))}
k.Lh=function(b,c,d){var e=d[d.length-1].srsName;null!=e&&b.setAttribute("srsName",e);e=Io(b.namespaceURI,"pos");b.appendChild(e);d=d[d.length-1].srsName;b="enu";null!=d&&(b=Ce(ze(d)));c=c.M();fs(e,"en"===b.substr(0,2)?c[0]+" "+c[1]:c[1]+" "+c[0])};var ks={"http://www.opengis.net/gml":{lowerCorner:U(fs),upperCorner:U(fs)}};k=is.prototype;k.lo=function(b,c,d){var e=d[d.length-1].srsName;m(e)&&b.setAttribute("srsName",e);op({O:b},ks,lp,[c[0]+" "+c[1],c[2]+" "+c[3]],d,["lowerCorner","upperCorner"],this)};
k.Ih=function(b,c,d){var e=d[d.length-1].srsName;null!=e&&b.setAttribute("srsName",e);e=Io(b.namespaceURI,"posList");b.appendChild(e);js(e,c,d)};k.ci=function(b,c){var d=c[c.length-1],e=d.O,f=d.exteriorWritten;m(f)||(d.exteriorWritten=!0);return Io(e.namespaceURI,m(f)?"interior":"exterior")};
k.ye=function(b,c,d){var e=d[d.length-1].srsName;"PolygonPatch"!==b.nodeName&&null!=e&&b.setAttribute("srsName",e);"Polygon"===b.nodeName||"PolygonPatch"===b.nodeName?(c=c.Ed(),op({O:b,srsName:e},ls,this.ci,c,d,void 0,this)):"Surface"===b.nodeName&&(e=Io(b.namespaceURI,"patches"),b.appendChild(e),b=Io(e.namespaceURI,"PolygonPatch"),e.appendChild(b),this.ye(b,c,d))};
k.te=function(b,c,d){var e=d[d.length-1].srsName;"LineStringSegment"!==b.nodeName&&null!=e&&b.setAttribute("srsName",e);"LineString"===b.nodeName||"LineStringSegment"===b.nodeName?(e=Io(b.namespaceURI,"posList"),b.appendChild(e),js(e,c,d)):"Curve"===b.nodeName&&(e=Io(b.namespaceURI,"segments"),b.appendChild(e),b=Io(e.namespaceURI,"LineStringSegment"),e.appendChild(b),this.te(b,c,d))};
k.Kh=function(b,c,d){var e=d[d.length-1],f=e.srsName,e=e.surface;null!=f&&b.setAttribute("srsName",f);c=c.Gd();op({O:b,srsName:f,surface:e},ms,this.d,c,d,void 0,this)};k.mo=function(b,c,d){var e=d[d.length-1].srsName;null!=e&&b.setAttribute("srsName",e);c=c.$d();op({O:b,srsName:e},ns,jp("pointMember"),c,d,void 0,this)};k.Jh=function(b,c,d){var e=d[d.length-1],f=e.srsName,e=e.curve;null!=f&&b.setAttribute("srsName",f);c=c.ad();op({O:b,srsName:f,curve:e},os,this.d,c,d,void 0,this)};
k.Mh=function(b,c,d){var e=Io(b.namespaceURI,"LinearRing");b.appendChild(e);this.Ih(e,c,d)};k.Nh=function(b,c,d){var e=this.c(c,d);m(e)&&(b.appendChild(e),this.ye(e,c,d))};k.no=function(b,c,d){var e=Io(b.namespaceURI,"Point");b.appendChild(e);this.Lh(e,c,d)};k.Hh=function(b,c,d){var e=this.c(c,d);m(e)&&(b.appendChild(e),this.te(e,c,d))};
k.we=function(b,c,d){var e=d[d.length-1],f=Db(e);f.O=b;var g;ga(c)?m(e.dataProjection)?g=Ve(c,e.featureProjection,e.dataProjection):g=c:g=Fr(c,!0,e);op(f,ps,this.c,[g],d,void 0,this)};
k.Fh=function(b,c,d){var e=c.aa;m(e)&&b.setAttribute("fid",e);var e=d[d.length-1],f=e.featureNS,g=c.b;m(e.fc)||(e.fc={},e.fc[f]={});var h=c.H();c=[];var l=[],n;for(n in h){var p=h[n];null!==p&&(c.push(n),l.push(p),n==g?n in e.fc[f]||(e.fc[f][n]=U(this.we,this)):n in e.fc[f]||(e.fc[f][n]=U(fs)))}n=Db(e);n.O=b;op(n,e.fc,jp(void 0,f),l,d,c)};
var ms={"http://www.opengis.net/gml":{surfaceMember:U(is.prototype.Nh),polygonMember:U(is.prototype.Nh)}},ns={"http://www.opengis.net/gml":{pointMember:U(is.prototype.no)}},os={"http://www.opengis.net/gml":{lineStringMember:U(is.prototype.Hh),curveMember:U(is.prototype.Hh)}},ls={"http://www.opengis.net/gml":{exterior:U(is.prototype.Mh),interior:U(is.prototype.Mh)}},ps={"http://www.opengis.net/gml":{Curve:U(is.prototype.te),MultiCurve:U(is.prototype.Jh),Point:U(is.prototype.Lh),MultiPoint:U(is.prototype.mo),
LineString:U(is.prototype.te),MultiLineString:U(is.prototype.Jh),LinearRing:U(is.prototype.Ih),Polygon:U(is.prototype.ye),MultiPolygon:U(is.prototype.Kh),Surface:U(is.prototype.ye),MultiSurface:U(is.prototype.Kh),Envelope:U(is.prototype.lo)}},qs={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};is.prototype.d=function(b,c){return Io("http://www.opengis.net/gml",qs[c[c.length-1].O.nodeName])};
is.prototype.c=function(b,c){var d=c[c.length-1],e=d.multiSurface,f=d.surface,g=d.curve,d=d.multiCurve,h;ga(b)?h="Envelope":(h=b.L(),"MultiPolygon"===h&&!0===e?h="MultiSurface":"Polygon"===h&&!0===f?h="Surface":"LineString"===h&&!0===g?h="Curve":"MultiLineString"===h&&!0===d&&(h="MultiCurve"));return Io("http://www.opengis.net/gml",h)};
is.prototype.p=function(b,c){c=Er(this,c);var d=Io("http://www.opengis.net/gml","geom"),e={O:d,srsName:this.srsName,curve:this.e,surface:this.i,multiSurface:this.g,multiCurve:this.f};m(c)&&Fb(e,c);this.we(d,b,[e]);return d};
is.prototype.b=function(b,c){c=Er(this,c);var d=Io("http://www.opengis.net/gml","featureMembers");bp(d,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.schemaLocation);var e={srsName:this.srsName,curve:this.e,surface:this.i,multiSurface:this.g,multiCurve:this.f,featureNS:this.featureNS,featureType:this.featureType};m(c)&&Fb(e,c);var e=[e],f=e[e.length-1],g=f.featureType,h=f.featureNS,l={};l[h]={};l[h][g]=U(this.Fh,this);f=Db(f);f.O=d;op(f,l,jp(g,h),b,e);return d};function rs(b){b=m(b)?b:{};Xr.call(this,b);this.a["http://www.opengis.net/gml"].featureMember=ep(Xr.prototype.kd);this.schemaLocation=m(b.schemaLocation)?b.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"}w(rs,Xr);k=rs.prototype;
k.ah=function(b,c){var d=Jo(b,!1).replace(/^\s*|\s*$/g,""),e=c[0].srsName,f=b.parentNode.getAttribute("srsDimension"),g="enu";null===e||(g=Ce(ze(e)));d=d.split(/[\s,]+/);e=2;fa(b.getAttribute("srsDimension"))?fa(b.getAttribute("dimension"))?null===f||(e=ds(f)):e=ds(b.getAttribute("dimension")):e=ds(b.getAttribute("srsDimension"));for(var h,l,n=[],p=0,q=d.length;p<q;p+=e)f=parseFloat(d[p]),h=parseFloat(d[p+1]),l=3===e?parseFloat(d[p+2]):0,"en"===g.substr(0,2)?n.push(f,h,l):n.push(h,f,l);return n};
k.jn=function(b,c){var d=V([null],this.Oh,b,c,this);return Nd(d[1][0],d[1][1],d[1][3],d[1][4])};k.ik=function(b,c){var d=V(void 0,this.ud,b,c,this);m(d)&&c[c.length-1].push(d)};k.Wm=function(b,c){var d=V(void 0,this.ud,b,c,this);m(d)&&(c[c.length-1][0]=d)};k.sd=Object({"http://www.opengis.net/gml":{coordinates:fp(rs.prototype.ah)}});k.ze=Object({"http://www.opengis.net/gml":{innerBoundaryIs:rs.prototype.ik,outerBoundaryIs:rs.prototype.Wm}});k.Oh=Object({"http://www.opengis.net/gml":{coordinates:ep(rs.prototype.ah)}});
k.Bf=Object({"http://www.opengis.net/gml":{Point:fp(Xr.prototype.hh),MultiPoint:fp(Xr.prototype.fh),LineString:fp(Xr.prototype.ne),MultiLineString:fp(Xr.prototype.eh),LinearRing:fp(Xr.prototype.dh),Polygon:fp(Xr.prototype.oe),MultiPolygon:fp(Xr.prototype.gh),Box:fp(rs.prototype.jn)}});function ss(b){b=m(b)?b:{};this.defaultDataProjection=null;this.defaultDataProjection=ze("EPSG:4326");this.a=b.readExtensions}w(ss,Ur);var ts=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function us(b,c,d){b.push(parseFloat(c.getAttribute("lon")),parseFloat(c.getAttribute("lat")));"ele"in d?(b.push(d.ele),zb(d,"ele")):b.push(0);"time"in d?(b.push(d.time),zb(d,"time")):b.push(0);return b}
function vs(b,c){var d=c[c.length-1],e=b.getAttribute("href");null===e||(d.link=e);np(ws,b,c)}function xs(b,c){c[c.length-1].extensionsNode_=b}function ys(b,c){var d=c[0],e=V({flatCoordinates:[]},zs,b,c);if(m(e)){var f=e.flatCoordinates;zb(e,"flatCoordinates");var g=new N(null);en(g,"XYZM",f);Fr(g,!1,d);d=new yn(g);d.u(e);return d}}
function As(b,c){var d=c[0],e=V({flatCoordinates:[],ends:[]},Bs,b,c);if(m(e)){var f=e.flatCoordinates;zb(e,"flatCoordinates");var g=e.ends;zb(e,"ends");var h=new O(null);fn(h,"XYZM",f,g);Fr(h,!1,d);d=new yn(h);d.u(e);return d}}function Cs(b,c){var d=c[0],e=V({},Ds,b,c);if(m(e)){var f=us([],b,e),f=new C(f,"XYZM");Fr(f,!1,d);d=new yn(f);d.u(e);return d}}
var Es={rte:ys,trk:As,wpt:Cs},Fs=T(ts,{rte:ep(ys),trk:ep(As),wpt:ep(Cs)}),ws=T(ts,{text:Q(Y,"linkText"),type:Q(Y,"linkType")}),zs=T(ts,{name:Q(Y),cmt:Q(Y),desc:Q(Y),src:Q(Y),link:vs,number:Q(cs),extensions:xs,type:Q(Y),rtept:function(b,c){var d=V({},Gs,b,c);m(d)&&us(c[c.length-1].flatCoordinates,b,d)}}),Gs=T(ts,{ele:Q(as),time:Q($r)}),Bs=T(ts,{name:Q(Y),cmt:Q(Y),desc:Q(Y),src:Q(Y),link:vs,number:Q(cs),type:Q(Y),extensions:xs,trkseg:function(b,c){var d=c[c.length-1];np(Hs,b,c);d.ends.push(d.flatCoordinates.length)}}),
Hs=T(ts,{trkpt:function(b,c){var d=V({},Is,b,c);m(d)&&us(c[c.length-1].flatCoordinates,b,d)}}),Is=T(ts,{ele:Q(as),time:Q($r)}),Ds=T(ts,{ele:Q(as),time:Q($r),magvar:Q(as),geoidheight:Q(as),name:Q(Y),cmt:Q(Y),desc:Q(Y),src:Q(Y),link:vs,sym:Q(Y),type:Q(Y),fix:Q(Y),sat:Q(cs),hdop:Q(as),vdop:Q(as),pdop:Q(as),ageofdgpsdata:Q(as),dgpsid:Q(cs),extensions:xs});
function Js(b,c){null===c&&(c=[]);for(var d=0,e=c.length;d<e;++d){var f=c[d];if(m(b.a)){var g=f.get("extensionsNode_")||null;b.a(f,g)}f.set("extensionsNode_",void 0)}}ss.prototype.$g=function(b,c){if(!Ya(ts,b.namespaceURI))return null;var d=Es[b.localName];if(!m(d))return null;d=d(b,[Dr(this,b,c)]);if(!m(d))return null;Js(this,[d]);return d};ss.prototype.Mb=function(b,c){if(!Ya(ts,b.namespaceURI))return[];if("gpx"==b.localName){var d=V([],Fs,b,[Dr(this,b,c)]);if(m(d))return Js(this,d),d}return[]};
function Ks(b,c,d){b.setAttribute("href",c);c=d[d.length-1].properties;op({O:b},Ls,lp,[c.linkText,c.linkType],d,Ms)}function Ns(b,c,d){var e=d[d.length-1],f=e.O.namespaceURI,g=e.properties;bp(b,null,"lat",c[1]);bp(b,null,"lon",c[0]);switch(e.geometryLayout){case "XYZM":0!==c[3]&&(g.time=c[3]);case "XYZ":0!==c[2]&&(g.ele=c[2]);break;case "XYM":0!==c[2]&&(g.time=c[2])}c=Os[f];e=mp(g,c);op({O:b,properties:g},Ps,lp,e,d,c)}
var Ms=["text","type"],Ls=hp(ts,{text:U(fs),type:U(fs)}),Qs=hp(ts,"name cmt desc src link number type rtept".split(" ")),Rs=hp(ts,{name:U(fs),cmt:U(fs),desc:U(fs),src:U(fs),link:U(Ks),number:U(hs),type:U(fs),rtept:ip(U(Ns))}),Ss=hp(ts,"name cmt desc src link number type trkseg".split(" ")),Vs=hp(ts,{name:U(fs),cmt:U(fs),desc:U(fs),src:U(fs),link:U(Ks),number:U(hs),type:U(fs),trkseg:ip(U(function(b,c,d){op({O:b,geometryLayout:c.b,properties:{}},Ts,Us,c.M(),d)}))}),Us=jp("trkpt"),Ts=hp(ts,{trkpt:U(Ns)}),
Os=hp(ts,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),Ps=hp(ts,{ele:U(gs),time:U(function(b,c){var d=new Date(1E3*c),d=d.getUTCFullYear()+"-"+Ma(d.getUTCMonth()+1)+"-"+Ma(d.getUTCDate())+"T"+Ma(d.getUTCHours())+":"+Ma(d.getUTCMinutes())+":"+Ma(d.getUTCSeconds())+"Z";b.appendChild(Fo.createTextNode(d))}),magvar:U(gs),geoidheight:U(gs),name:U(fs),cmt:U(fs),desc:U(fs),src:U(fs),link:U(Ks),sym:U(fs),type:U(fs),fix:U(fs),sat:U(hs),
hdop:U(gs),vdop:U(gs),pdop:U(gs),ageofdgpsdata:U(gs),dgpsid:U(hs)}),Ws={Point:"wpt",LineString:"rte",MultiLineString:"trk"};function Xs(b,c){var d=b.Q();if(m(d))return Io(c[c.length-1].O.namespaceURI,Ws[d.L()])}
var Ys=hp(ts,{rte:U(function(b,c,d){var e=d[0],f=c.H();b={O:b,properties:f};c=c.Q();m(c)&&(c=Fr(c,!0,e),b.geometryLayout=c.b,f.rtept=c.M());e=Qs[d[d.length-1].O.namespaceURI];f=mp(f,e);op(b,Rs,lp,f,d,e)}),trk:U(function(b,c,d){var e=d[0],f=c.H();b={O:b,properties:f};c=c.Q();m(c)&&(c=Fr(c,!0,e),f.trkseg=c.ad());e=Ss[d[d.length-1].O.namespaceURI];f=mp(f,e);op(b,Vs,lp,f,d,e)}),wpt:U(function(b,c,d){var e=d[0],f=d[d.length-1];f.properties=c.H();c=c.Q();m(c)&&(c=Fr(c,!0,e),f.geometryLayout=c.b,Ns(b,c.M(),
    d))
})
});
    ss.prototype.b = function (b, c) {
        c = Er(this, c);
        var d = Io("http://www.topografix.com/GPX/1/1", "gpx");
        op({O: d}, Ys, Xs, b, [c]);
        return d
    };
    function Zs(b) {
        b = $s(b);
        return Ua(b, function (b) {
            return b.c.substring(b.b, b.a)
        })
    }
    function at(b, c, d) {
        this.c = b;
        this.b = c;
        this.a = d
    }
    function $s(b) {
        for (var c = RegExp("\r\n|\r|\n", "g"), d = 0, e, f = []; e = c.exec(b);) d = new at(b, d, e.index), f.push(d), d = c.lastIndex;
        d < b.length && (d = new at(b, d, b.length), f.push(d));
        return f
    }
    function bt() {
        this.defaultDataProjection = null
    }
    w(bt, Cr);
    k = bt.prototype;
    k.L = function () {
        return "text"
    };
    k.xb = function (b, c) {
        return this.jd(ia(b) ? b : "", Er(this, c))
    };
    k.ja = function (b, c) {
        return this.nf(ia(b) ? b : "", Er(this, c))
    };
    k.Hc = function (b, c) {
        return this.ld(ia(b) ? b : "", Er(this, c))
    };
    k.za = function () {
        return this.defaultDataProjection
    };
    k.qd = function (b, c) {
        return this.ue(b, Er(this, c))
    };
    k.yb = function (b, c) {
        return this.Gh(b, Er(this, c))
    };
    k.Nc = function (b, c) {
        return this.rd(b, Er(this, c))
    };
    function ct(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ze("EPSG:4326");
        this.a = m(b.altitudeMode) ? b.altitudeMode : "none"
    }
    w(ct, bt);
    var dt = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
        et = /^H.([A-Z]{3}).*?:(.*)/, ft = /^HFDTE(\d{2})(\d{2})(\d{2})/;
    ct.prototype.jd=function(b,c){var d=this.a,e=Zs(b),f={},g=[],h=2E3,l=0,n=1,p,q;p=0;for(q=e.length;p<q;++p){var r=e[p],t;if("B"==r.charAt(0)){if(t=dt.exec(r)){var r=parseInt(t[1],10),v=parseInt(t[2],10),A=parseInt(t[3],10),z=parseInt(t[4],10)+parseInt(t[5],10)/6E4;"S"==t[6]&&(z=-z);var E=parseInt(t[7],10)+parseInt(t[8],10)/6E4;"W"==t[9]&&(E=-E);g.push(E,z);"none"!=d&&g.push("gps"==d?parseInt(t[11],10):"barometric"==d?parseInt(t[12],10):0);g.push(Date.UTC(h,l,n,r,v,A)/1E3)}}else if("H"==r.charAt(0))if(t=
ft.exec(r))n=parseInt(t[1],10),l=parseInt(t[2],10)-1,h=2E3+parseInt(t[3],10);else if(t=et.exec(r))f[t[1]]=Ca(t[2]),ft.exec(r)}if(0===g.length)return null;e=new N(null);en(e,"none"==d?"XYM":"XYZM",g);d=new yn(Fr(e,!1,c));d.u(f);return d};ct.prototype.nf=function(b,c){var d=this.jd(b,c);return null===d?[]:[d]};function gt(b,c){var d;b instanceof gt?(this.Wb=m(c)?c:b.Wb,ht(this,b.Nb),this.pc=b.pc,this.nb=b.nb,it(this,b.Fc),this.ib=b.ib,jt(this,b.a.clone()),this.Rb=b.Rb):b&&(d=go(String(b)))?(this.Wb=!!c,ht(this,d[1]||"",!0),this.pc=kt(d[2]||""),this.nb=kt(d[3]||"",!0),it(this,d[4]),this.ib=kt(d[5]||"",!0),jt(this,d[6]||"",!0),this.Rb=kt(d[7]||"")):(this.Wb=!!c,this.a=new lt(null,0,this.Wb))}k=gt.prototype;k.Nb="";k.pc="";k.nb="";k.Fc=null;k.ib="";k.Rb="";k.Wb=!1;
k.toString=function(){var b=[],c=this.Nb;c&&b.push(mt(c,nt,!0),":");if(c=this.nb){b.push("//");var d=this.pc;d&&b.push(mt(d,nt,!0),"@");b.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));c=this.Fc;null!=c&&b.push(":",String(c))}if(c=this.ib)this.nb&&"/"!=c.charAt(0)&&b.push("/"),b.push(mt(c,"/"==c.charAt(0)?ot:pt,!0));(c=this.a.toString())&&b.push("?",c);(c=this.Rb)&&b.push("#",mt(c,qt));return b.join("")};k.clone=function(){return new gt(this)};
function ht(b,c,d){b.Nb=d?kt(c,!0):c;b.Nb&&(b.Nb=b.Nb.replace(/:$/,""))}function it(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.Fc=c}else b.Fc=null}function jt(b,c,d){c instanceof lt?(b.a=c,rt(b.a,b.Wb)):(d||(c=mt(c,st)),b.a=new lt(c,0,b.Wb))}function tt(b){return b instanceof gt?b.clone():new gt(b,void 0)}
function ut(b,c){b instanceof gt||(b=tt(b));c instanceof gt||(c=tt(c));var d=b,e=c,f=d.clone(),g=!!e.Nb;g?ht(f,e.Nb):g=!!e.pc;g?f.pc=e.pc:g=!!e.nb;g?f.nb=e.nb:g=null!=e.Fc;var h=e.ib;if(g)it(f,e.Fc);else if(g=!!e.ib)if("/"!=h.charAt(0)&&(d.nb&&!d.ib?h="/"+h:(d=f.ib.lastIndexOf("/"),-1!=d&&(h=f.ib.substr(0,d+1)+h))),d=h,".."==d||"."==d)h="";else if(-1!=d.indexOf("./")||-1!=d.indexOf("/.")){for(var h=0==d.lastIndexOf("/",0),d=d.split("/"),l=[],n=0;n<d.length;){var p=d[n++];"."==p?h&&n==d.length&&l.push(""):
".."==p?((1<l.length||1==l.length&&""!=l[0])&&l.pop(),h&&n==d.length&&l.push("")):(l.push(p),h=!0)}h=l.join("/")}else h=d;g?f.ib=h:g=""!==e.a.toString();g?jt(f,kt(e.a.toString())):g=!!e.Rb;g&&(f.Rb=e.Rb);return f}function kt(b,c){return b?c?decodeURI(b):decodeURIComponent(b):""}function mt(b,c,d){return ia(b)?(b=encodeURI(b).replace(c,vt),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function vt(b){b=b.charCodeAt(0);return"%"+(b>>4&15).toString(16)+(b&15).toString(16)}
var nt=/[#\/\?@]/g,pt=/[\#\?:]/g,ot=/[\#\?]/g,st=/[\#\?@]/g,qt=/#/g;function lt(b,c,d){this.a=b||null;this.b=!!d}function wt(b){b.ia||(b.ia=new wi,b.ta=0,b.a&&io(b.a,function(c,d){b.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}k=lt.prototype;k.ia=null;k.ta=null;k.Sb=function(){wt(this);return this.ta};k.add=function(b,c){wt(this);this.a=null;b=xt(this,b);var d=this.ia.get(b);d||this.ia.set(b,d=[]);d.push(c);this.ta++;return this};
k.remove=function(b){wt(this);b=xt(this,b);return yi(this.ia.b,b)?(this.a=null,this.ta-=this.ia.get(b).length,this.ia.remove(b)):!1};k.clear=function(){this.ia=this.a=null;this.ta=0};k.pa=function(){wt(this);return 0==this.ta};function yt(b,c){wt(b);c=xt(b,c);return yi(b.ia.b,c)}k.G=function(){wt(this);for(var b=this.ia.eb(),c=this.ia.G(),d=[],e=0;e<c.length;e++)for(var f=b[e],g=0;g<f.length;g++)d.push(c[e]);return d};
k.eb=function(b){wt(this);var c=[];if(ia(b))yt(this,b)&&(c=ab(c,this.ia.get(xt(this,b))));else{b=this.ia.eb();for(var d=0;d<b.length;d++)c=ab(c,b[d])}return c};k.set=function(b,c){wt(this);this.a=null;b=xt(this,b);yt(this,b)&&(this.ta-=this.ia.get(b).length);this.ia.set(b,[c]);this.ta++;return this};k.get=function(b,c){var d=b?this.eb(b):[];return 0<d.length?String(d[0]):c};function zt(b,c,d){b.remove(c);0<d.length&&(b.a=null,b.ia.set(xt(b,c),bb(d)),b.ta+=d.length)}
k.toString=function(){if(this.a)return this.a;if(!this.ia)return"";for(var b=[],c=this.ia.G(),d=0;d<c.length;d++)for(var e=c[d],f=encodeURIComponent(String(e)),e=this.eb(e),g=0;g<e.length;g++){var h=f;""!==e[g]&&(h+="="+encodeURIComponent(String(e[g])));b.push(h)}return this.a=b.join("&")};k.clone=function(){var b=new lt;b.a=this.a;this.ia&&(b.ia=this.ia.clone(),b.ta=this.ta);return b};function xt(b,c){var d=String(c);b.b&&(d=d.toLowerCase());return d}
    function rt(b, c) {
        c && !b.b && (wt(b), b.a = null, b.ia.forEach(function (b, c) {
            var f = c.toLowerCase();
            c != f && (this.remove(c), zt(this, f, b))
        }, b));
        b.b = c
    }
    function At(b) {
        b = m(b) ? b : {};
        this.d = b.font;
        this.e = b.rotation;
        this.b = b.scale;
        this.c = b.text;
        this.g = b.textAlign;
        this.i = b.textBaseline;
        this.a = m(b.fill) ? b.fill : null;
        this.f = m(b.stroke) ? b.stroke : null;
        this.p = m(b.offsetX) ? b.offsetX : 0;
        this.n = m(b.offsetY) ? b.offsetY : 0
    }
    k = At.prototype;
    k.Si = function () {
        return this.d
    };
    k.hj = function () {
        return this.p
    };
    k.ij = function () {
        return this.n
    };
    k.Fm = function () {
        return this.a
    };
    k.Gm = function () {
        return this.e
    };
    k.Hm = function () {
        return this.b
    };
    k.Im = function () {
        return this.f
    };
    k.Jm = function () {
        return this.c
    };
    k.sj=function(){return this.g};k.tj=function(){return this.i};k.Ln=function(b){this.d=b};k.Kn=function(b){this.a=b};k.Km=function(b){this.e=b};k.Lm=function(b){this.b=b};k.Tn=function(b){this.f=b};k.Un=function(b){this.c=b};k.Vn=function(b){this.g=b};k.Wn=function(b){this.i=b};function Bt(b){function c(b){return ga(b)?b:ia(b)?(!(b in e)&&"#"+b in e&&(b="#"+b),c(e[b])):d}b=m(b)?b:{};this.defaultDataProjection=null;this.defaultDataProjection=ze("EPSG:4326");var d=m(b.defaultStyle)?b.defaultStyle:Ct,e={};this.c=m(b.extractStyles)?b.extractStyles:!0;this.a=e;this.d=function(){var b=this.get("Style");if(m(b))return b;b=this.get("styleUrl");return m(b)?c(b):d}}w(Bt,Ur);
var Dt=["http://www.google.com/kml/ext/2.2"],Et=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],Ft=[255,255,255,1],Gt=new Fl({color:Ft}),Ht=[20,2],It=[64,64],Jt=new Bk({anchor:Ht,anchorOrigin:"bottom-left",anchorXUnits:"pixels",anchorYUnits:"pixels",crossOrigin:"anonymous",rotation:0,scale:.5,size:It,src:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"}),Kt=new Bl({color:Ft,width:1}),Lt=new At({font:"normal 16px Helvetica",
fill:Gt,stroke:Kt,scale:1}),Ct=[new Hl({fill:Gt,image:Jt,text:Lt,stroke:Kt,zIndex:0})],Mt={fraction:"fraction",pixels:"pixels"};function Nt(b){b=Jo(b,!1);if(b=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(b))return b=b[1],[parseInt(b.substr(6,2),16),parseInt(b.substr(4,2),16),parseInt(b.substr(2,2),16),parseInt(b.substr(0,2),16)/255]}
function Ot(b){b=Jo(b,!1);for(var c=[],d=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,e;e=d.exec(b);)c.push(parseFloat(e[1]),parseFloat(e[2]),e[3]?parseFloat(e[3]):0),b=b.substr(e[0].length);return""!==b?void 0:c}function Pt(b){var c=Jo(b,!1);return null!=b.baseURI?ut(b.baseURI,Ca(c)).toString():Ca(c)}function Qt(b){b=as(b);if(m(b))return Math.sqrt(b)}function Rt(b,c){return V(null,St,b,c)}
function Tt(b,c){var d=V({j:[],Eh:[]},Ut,b,c);if(m(d)){var e=d.j,d=d.Eh,f,g;f=0;for(g=Math.min(e.length,d.length);f<g;++f)e[4*f+3]=d[f];d=new N(null);en(d,"XYZM",e);return d}}function Vt(b,c){var d=V({},Wt,b,c),e=V(null,Xt,b,c);if(m(e)){var f=new N(null);en(f,"XYZ",e);f.u(d);return f}}function Yt(b,c){var d=V({},Wt,b,c),e=V(null,Xt,b,c);if(m(e)){var f=new D(null);Gf(f,"XYZ",e,[e.length]);f.u(d);return f}}
function Zt(b,c){var d=V([],$t,b,c);if(!m(d))return null;if(0===d.length)return new Ym(d);var e=!0,f=d[0].L(),g,h,l;h=1;for(l=d.length;h<l;++h)if(g=d[h],g.L()!=f){e=!1;break}if(e){if("Point"==f){g=d[0];e=g.b;f=g.j;h=1;for(l=d.length;h<l;++h)g=d[h],db(f,g.j);g=new hn(null);$e(g,e,f);g.k();au(g,d);return g}return"LineString"==f?(g=new O(null),gn(g,d),au(g,d),g):"Polygon"==f?(g=new P(null),kn(g,d),au(g,d),g):"GeometryCollection"==f?new Ym(d):null}return new Ym(d)}
function bu(b,c){var d=V({},Wt,b,c),e=V(null,Xt,b,c);if(null!=e){var f=new C(null);uf(f,"XYZ",e);f.u(d);return f}}function cu(b,c){var d=V({},Wt,b,c),e=V([null],du,b,c);if(null!=e&&null!==e[0]){var f=new D(null),g=e[0],h=[g.length],l,n;l=1;for(n=e.length;l<n;++l)db(g,e[l]),h.push(g.length);Gf(f,"XYZ",g,h);f.u(d);return f}}
function eu(b,c){var d=V({},fu,b,c);if(!m(d))return null;var e=Ab(d,"fillStyle",Gt),f=d.fill;m(f)&&!f&&(e=null);var f=Ab(d,"imageStyle",Jt),g=Ab(d,"textStyle",Lt),h=Ab(d,"strokeStyle",Kt),d=d.outline;m(d)&&!d&&(h=null);return[new Hl({fill:e,image:f,stroke:h,text:g,zIndex:void 0})]}
function au(b,c){var d=c.length,e=Array(c.length),f=Array(c.length),g,h,l,n;l=n=!1;for(h=0;h<d;++h)g=c[h],e[h]=g.get("extrude"),f[h]=g.get("altitudeMode"),l=l||m(e[h]),n=n||m(f[h]);l&&b.set("extrude",e);n&&b.set("altitudeMode",f)}function gu(b,c){np(hu,b,c)}
var iu=T(Et,{value:fp(Y)}),hu=T(Et,{Data:function(b,c){var d=b.getAttribute("name");if(null!==d){var e=V(void 0,iu,b,c);m(e)&&(c[c.length-1][d]=e)}},SchemaData:function(b,c){np(ju,b,c)}}),Wt=T(Et,{extrude:Q(Yr),altitudeMode:Q(Y)}),St=T(Et,{coordinates:fp(Ot)}),du=T(Et,{innerBoundaryIs:function(b,c){var d=V(void 0,ku,b,c);m(d)&&c[c.length-1].push(d)},outerBoundaryIs:function(b,c){var d=V(void 0,lu,b,c);m(d)&&(c[c.length-1][0]=d)}}),Ut=T(Et,{when:function(b,c){var d=c[c.length-1].Eh,e=Jo(b,!1);if(e=
/^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)){var f=Date.UTC(parseInt(e[1],10),m(e[3])?parseInt(e[3],10)-1:0,m(e[5])?parseInt(e[5],10):1,m(e[7])?parseInt(e[7],10):0,m(e[8])?parseInt(e[8],10):0,m(e[9])?parseInt(e[9],10):0);if(m(e[10])&&"Z"!=e[10]){var g="-"==e[11]?-1:1,f=f+60*g*parseInt(e[12],10);m(e[13])&&(f+=3600*g*parseInt(e[13],10))}d.push(f)}else d.push(0)}},T(Dt,{coord:function(b,c){var d=c[c.length-1].j,e=Jo(b,!1);(e=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e))?
d.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),0):d.push(0,0,0,0)}})),Xt=T(Et,{coordinates:fp(Ot)}),mu=T(Et,{href:Q(Pt)},T(Dt,{x:Q(as),y:Q(as),w:Q(as),h:Q(as)})),nu=T(Et,{Icon:Q(function(b,c){var d=V({},mu,b,c);return m(d)?d:null}),heading:Q(as),hotSpot:Q(function(b){var c=b.getAttribute("xunits"),d=b.getAttribute("yunits");return{x:parseFloat(b.getAttribute("x")),zf:Mt[c],y:parseFloat(b.getAttribute("y")),Af:Mt[d]}}),scale:Q(Qt)}),ku=T(Et,{LinearRing:fp(Rt)}),ou=T(Et,{color:Q(Nt),scale:Q(Qt)}),
pu=T(Et,{color:Q(Nt),width:Q(as)}),$t=T(Et,{LineString:ep(Vt),LinearRing:ep(Yt),MultiGeometry:ep(Zt),Point:ep(bu),Polygon:ep(cu)}),qu=T(Dt,{Track:ep(Tt)}),su=T(Et,{ExtendedData:gu,Link:function(b,c){np(ru,b,c)},address:Q(Y),description:Q(Y),name:Q(Y),open:Q(Yr),phoneNumber:Q(Y),visibility:Q(Yr)}),ru=T(Et,{href:Q(Pt)}),lu=T(Et,{LinearRing:fp(Rt)}),tu=T(Et,{Style:Q(eu),key:Q(Y),styleUrl:Q(function(b){var c=Ca(Jo(b,!1));return null!=b.baseURI?ut(b.baseURI,c).toString():c})}),vu=T(Et,{ExtendedData:gu,
MultiGeometry:Q(Zt,"geometry"),LineString:Q(Vt,"geometry"),LinearRing:Q(Yt,"geometry"),Point:Q(bu,"geometry"),Polygon:Q(cu,"geometry"),Style:Q(eu),StyleMap:function(b,c){var d=V(void 0,uu,b,c);if(m(d)){var e=c[c.length-1];ga(d)?e.Style=d:ia(d)&&(e.styleUrl=d)}},address:Q(Y),description:Q(Y),name:Q(Y),open:Q(Yr),phoneNumber:Q(Y),styleUrl:Q(Pt),visibility:Q(Yr)},T(Dt,{MultiTrack:Q(function(b,c){var d=V([],qu,b,c);if(m(d)){var e=new O(null);gn(e,d);return e}},"geometry"),Track:Q(Tt,"geometry")})),wu=
T(Et,{color:Q(Nt),fill:Q(Yr),outline:Q(Yr)}),ju=T(Et,{SimpleData:function(b,c){var d=b.getAttribute("name");if(null!==d){var e=Y(b);c[c.length-1][d]=e}}}),fu=T(Et,{IconStyle:function(b,c){var d=V({},nu,b,c);if(m(d)){var e=c[c.length-1],f=Ab(d,"Icon",{}),g;g=f.href;g=m(g)?g:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";var h,l,n,p=d.hotSpot;m(p)?(h=[p.x,p.y],l=p.zf,n=p.Af):"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"===g?(h=Ht,n=l="pixels"):/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g)&&
(h=[.5,0],n=l="fraction");var q,p=f.x,r=f.y;m(p)&&m(r)&&(q=[p,r]);var t,p=f.w,f=f.h;m(p)&&m(f)&&(t=[p,f]);var v,f=d.heading;m(f)&&(v=Yb(f));d=d.scale;"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"==g&&(t=It);h=new Bk({anchor:h,anchorOrigin:"bottom-left",anchorXUnits:l,anchorYUnits:n,crossOrigin:"anonymous",offset:q,offsetOrigin:"bottom-left",rotation:v,scale:d,size:t,src:g});e.imageStyle=h}},LabelStyle:function(b,c){var d=V({},ou,b,c);m(d)&&(c[c.length-1].textStyle=new At({fill:new Fl({color:Ab(d,
"color",Ft)}),scale:d.scale}))},LineStyle:function(b,c){var d=V({},pu,b,c);m(d)&&(c[c.length-1].strokeStyle=new Bl({color:Ab(d,"color",Ft),width:Ab(d,"width",1)}))},PolyStyle:function(b,c){var d=V({},wu,b,c);if(m(d)){var e=c[c.length-1];e.fillStyle=new Fl({color:Ab(d,"color",Ft)});var f=d.fill;m(f)&&(e.fill=f);d=d.outline;m(d)&&(e.outline=d)}}}),uu=T(Et,{Pair:function(b,c){var d=V({},tu,b,c);if(m(d)){var e=d.key;m(e)&&"normal"==e&&(e=d.styleUrl,m(e)&&(c[c.length-1]=e),d=d.Style,m(d)&&(c[c.length-
1]=d))}}});k=Bt.prototype;k.Zg=function(b,c){No(b);var d=T(Et,{Folder:dp(this.Zg,this),Placemark:ep(this.pf,this),Style:ra(this.yn,this),StyleMap:ra(this.xn,this)}),d=V([],d,b,c,this);if(m(d))return d};k.pf=function(b,c){var d=V({geometry:null},vu,b,c);if(m(d)){var e=new yn,f=b.getAttribute("id");null===f||e.Ob(f);f=c[0];null!=d.geometry&&Fr(d.geometry,!1,f);e.u(d);this.c&&e.af(this.d);return e}};
k.yn=function(b,c){var d=b.getAttribute("id");if(null!==d){var e=eu(b,c);m(e)&&(d=null!=b.baseURI?ut(b.baseURI,"#"+d).toString():"#"+d,this.a[d]=e)}};k.xn=function(b,c){var d=b.getAttribute("id");if(null!==d){var e=V(void 0,uu,b,c);m(e)&&(d=null!=b.baseURI?ut(b.baseURI,"#"+d).toString():"#"+d,this.a[d]=e)}};k.$g=function(b,c){if(!Ya(Et,b.namespaceURI))return null;var d=this.pf(b,[Dr(this,b,c)]);return m(d)?d:null};
k.Mb=function(b,c){if(!Ya(Et,b.namespaceURI))return[];var d;d=No(b);if("Document"==d||"Folder"==d)return d=this.Zg(b,[Dr(this,b,c)]),m(d)?d:[];if("Placemark"==d)return d=this.pf(b,[Dr(this,b,c)]),m(d)?[d]:[];if("kml"==d){d=[];var e;for(e=b.firstElementChild;null!==e;e=e.nextElementSibling){var f=this.Mb(e,c);m(f)&&db(d,f)}return d}return[]};k.rn=function(b){if(Qo(b))return xu(this,b);if(To(b))return yu(this,b);if(ia(b))return b=cp(b),xu(this,b)};
function xu(b,c){var d;for(d=c.firstChild;null!==d;d=d.nextSibling)if(1==d.nodeType){var e=yu(b,d);if(m(e))return e}}function yu(b,c){var d;for(d=c.firstElementChild;null!==d;d=d.nextElementSibling)if(Ya(Et,d.namespaceURI)&&"name"==d.localName)return Y(d);for(d=c.firstElementChild;null!==d;d=d.nextElementSibling){var e=No(d);if(Ya(Et,d.namespaceURI)&&("Document"==e||"Folder"==e||"Placemark"==e||"kml"==e)&&(e=yu(b,d),m(e)))return e}}
k.sn=function(b){var c=[];Qo(b)?db(c,zu(this,b)):To(b)?db(c,Au(this,b)):ia(b)&&(b=cp(b),db(c,zu(this,b)));return c};function zu(b,c){var d,e=[];for(d=c.firstChild;null!==d;d=d.nextSibling)1==d.nodeType&&db(e,Au(b,d));return e}
function Au(b,c){var d,e=[];for(d=c.firstElementChild;null!==d;d=d.nextElementSibling)if(Ya(Et,d.namespaceURI)&&"NetworkLink"==d.localName){var f=V({},su,d,[]);e.push(f)}for(d=c.firstElementChild;null!==d;d=d.nextElementSibling)f=No(d),!Ya(Et,d.namespaceURI)||"Document"!=f&&"Folder"!=f&&"kml"!=f||db(e,Au(b,d));return e}function Bu(b,c){var d=vg(c),d=[255*(4==d.length?d[3]:1),d[2],d[1],d[0]],e;for(e=0;4>e;++e){var f=parseInt(d[e],10).toString(16);d[e]=1==f.length?"0"+f:f}fs(b,d.join(""))}
function Cu(b,c,d){op({O:b},Du,Eu,[c],d)}function Fu(b,c,d){var e={O:b};null!=c.aa&&b.setAttribute("id",c.aa);b=c.H();var f=c.c;m(f)&&(f=f.call(c,0),null!==f&&0<f.length&&(b.Style=f[0],f=f[0].b,null===f||(b.name=f.c)));f=Gu[d[d.length-1].O.namespaceURI];b=mp(b,f);op(e,Hu,lp,b,d,f);b=d[0];c=c.Q();null!=c&&(c=Fr(c,!0,b));op(e,Hu,Iu,[c],d)}function Ju(b,c,d){var e=c.j;b={O:b};b.layout=c.b;b.stride=c.t;op(b,Ku,Lu,[e],d)}
function Mu(b,c,d){c=c.Ed();var e=c.shift();b={O:b};op(b,Nu,Ou,c,d);op(b,Nu,Pu,[e],d)}function Qu(b,c){gs(b,c*c)}
var Ru=hp(Et,["Document","Placemark"]),Uu=hp(Et,{Document:U(function(b,c,d){op({O:b},Su,Tu,c,d)}),Placemark:U(Fu)}),Su=hp(Et,{Placemark:U(Fu)}),Vu={Point:"Point",LineString:"LineString",LinearRing:"LinearRing",Polygon:"Polygon",MultiPoint:"MultiGeometry",MultiLineString:"MultiGeometry",MultiPolygon:"MultiGeometry"},Wu=hp(Et,["href"],hp(Dt,["x","y","w","h"])),Xu=hp(Et,{href:U(fs)},hp(Dt,{x:U(gs),y:U(gs),w:U(gs),h:U(gs)})),Yu=hp(Et,["scale","heading","Icon","hotSpot"]),$u=hp(Et,{Icon:U(function(b,c,
d){b={O:b};var e=Wu[d[d.length-1].O.namespaceURI],f=mp(c,e);op(b,Xu,lp,f,d,e);e=Wu[Dt[0]];f=mp(c,e);op(b,Xu,Zu,f,d,e)}),heading:U(gs),hotSpot:U(function(b,c){b.setAttribute("x",c.x);b.setAttribute("y",c.y);b.setAttribute("xunits",c.zf);b.setAttribute("yunits",c.Af)}),scale:U(Qu)}),av=hp(Et,["color","scale"]),bv=hp(Et,{color:U(Bu),scale:U(Qu)}),cv=hp(Et,["color","width"]),dv=hp(Et,{color:U(Bu),width:U(gs)}),Du=hp(Et,{LinearRing:U(Ju)}),ev=hp(Et,{LineString:U(Ju),Point:U(Ju),Polygon:U(Mu)}),Gu=hp(Et,
"name open visibility address phoneNumber description styleUrl Style".split(" ")),Hu=hp(Et,{MultiGeometry:U(function(b,c,d){b={O:b};var e=c.L(),f,g;"MultiPoint"==e?(f=c.$d(),g=fv):"MultiLineString"==e?(f=c.ad(),g=gv):"MultiPolygon"==e&&(f=c.Gd(),g=hv);op(b,ev,g,f,d)}),LineString:U(Ju),LinearRing:U(Ju),Point:U(Ju),Polygon:U(Mu),Style:U(function(b,c,d){b={O:b};var e={},f=c.d,g=c.c,h=c.f;c=c.b;null===h||(e.IconStyle=h);null===c||(e.LabelStyle=c);null===g||(e.LineStyle=g);null===f||(e.PolyStyle=f);c=
iv[d[d.length-1].O.namespaceURI];e=mp(e,c);op(b,jv,lp,e,d,c)}),address:U(fs),description:U(fs),name:U(fs),open:U(es),phoneNumber:U(fs),styleUrl:U(fs),visibility:U(es)}),Ku=hp(Et,{coordinates:U(function(b,c,d){d=d[d.length-1];var e=d.layout;d=d.stride;var f;"XY"==e||"XYM"==e?f=2:("XYZ"==e||"XYZM"==e)&&(f=3);var g,h=c.length,l="";if(0<h){l+=c[0];for(e=1;e<f;++e)l+=","+c[e];for(g=d;g<h;g+=d)for(l+=" "+c[g],e=1;e<f;++e)l+=","+c[g+e]}fs(b,l)})}),Nu=hp(Et,{outerBoundaryIs:U(Cu),innerBoundaryIs:U(Cu)}),
kv=hp(Et,{color:U(Bu)}),iv=hp(Et,["IconStyle","LabelStyle","LineStyle","PolyStyle"]),jv=hp(Et,{IconStyle:U(function(b,c,d){b={O:b};var e={},f=c.Ya(),g=c.Dd(),h={href:c.a.f};if(null!==f){h.w=f[0];h.h=f[1];var l=c.rb(),n=c.wb();null!==n&&null!==g&&0!==n[0]&&n[1]!==f[1]&&(h.x=n[0],h.y=g[1]-(n[1]+f[1]));null===l||0===l[0]||l[1]===f[1]||(e.hotSpot={x:l[0],zf:"pixels",y:f[1]-l[1],Af:"pixels"})}e.Icon=h;f=c.n;1!==f&&(e.scale=f);c=c.p;0!==c&&(e.heading=c);c=Yu[d[d.length-1].O.namespaceURI];e=mp(e,c);op(b,
$u,lp,e,d,c)}),LabelStyle:U(function(b,c,d){b={O:b};var e={},f=c.a;null===f||(e.color=f.a);c=c.b;m(c)&&1!==c&&(e.scale=c);c=av[d[d.length-1].O.namespaceURI];e=mp(e,c);op(b,bv,lp,e,d,c)}),LineStyle:U(function(b,c,d){b={O:b};var e=cv[d[d.length-1].O.namespaceURI];c=mp({color:c.a,width:c.b},e);op(b,dv,lp,c,d,e)}),PolyStyle:U(function(b,c,d){op({O:b},kv,lv,[c.a],d)})});function Zu(b,c,d){return Io(Dt[0],"gx:"+d)}function Tu(b,c){return Io(c[c.length-1].O.namespaceURI,"Placemark")}
function Iu(b,c){if(null!=b)return Io(c[c.length-1].O.namespaceURI,Vu[b.L()])}var lv=jp("color"),Lu=jp("coordinates"),Ou=jp("innerBoundaryIs"),fv=jp("Point"),gv=jp("LineString"),Eu=jp("LinearRing"),hv=jp("Polygon"),Pu=jp("outerBoundaryIs");
Bt.prototype.b=function(b,c){c=Er(this,c);var d=Io(Et[4],"kml");bp(d,"http://www.w3.org/2000/xmlns/","xmlns:gx",Dt[0]);bp(d,"http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");bp(d,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");var e={O:d},f={};1<b.length?f.Document=b:1==b.length&&(f.Placemark=b[0]);var g=Ru[d.namespaceURI],f=mp(f,g);op(e,Uu,lp,f,[c],g);return d};function mv(){this.defaultDataProjection=null;this.defaultDataProjection=ze("EPSG:4326")}w(mv,Ur);function nv(b,c){c[c.length-1].od[b.getAttribute("k")]=b.getAttribute("v")}
var ov=[null],pv=T(ov,{nd:function(b,c){c[c.length-1].zc.push(b.getAttribute("ref"))},tag:nv}),rv=T(ov,{node:function(b,c){var d=c[0],e=c[c.length-1],f=b.getAttribute("id"),g=[parseFloat(b.getAttribute("lon")),parseFloat(b.getAttribute("lat"))];e.qg[f]=g;var h=V({od:{}},qv,b,c);xb(h.od)||(g=new C(g),Fr(g,!1,d),d=new yn(g),d.Ob(f),d.u(h.od),e.features.push(d))},way:function(b,c){for(var d=c[0],e=b.getAttribute("id"),f=V({zc:[],od:{}},pv,b,c),g=c[c.length-1],h=[],l=0,n=f.zc.length;l<n;l++)db(h,g.qg[f.zc[l]]);
    f.zc[0] == f.zc[f.zc.length - 1] ? (l = new D(null), Gf(l, "XY", h, [h.length])) : (l = new N(null), en(l, "XY", h));
    Fr(l, !1, d);
    d = new yn(l);
    d.Ob(e);
    d.u(f.od);
    g.features.push(d)
}
}), qv = T(ov, {tag: nv});
    mv.prototype.Mb = function (b, c) {
        var d = Dr(this, b, c);
        return "osm" == b.localName && (d = V({qg: {}, features: []}, rv, b, [d]), m(d.features)) ? d.features : []
    };
    function sv(b) {
        return b.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    }
    function tv() {
    }
    tv.prototype.c = function (b) {
        return Qo(b) ? this.b(b) : To(b) ? this.a(b) : ia(b) ? (b = cp(b), this.b(b)) : null
    };
    function uv() {
    }
    w(uv, tv);
    uv.prototype.b = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling) if (1 == b.nodeType) return this.a(b);
        return null
    };
    uv.prototype.a = function (b) {
        b = V({}, vv, b, []);
        return m(b) ? b : null
    };
    var wv=[null,"http://www.opengis.net/ows/1.1"],vv=T(wv,{ServiceIdentification:Q(function(b,c){return V({},xv,b,c)}),ServiceProvider:Q(function(b,c){return V({},yv,b,c)}),OperationsMetadata:Q(function(b,c){return V({},zv,b,c)})}),Av=T(wv,{DeliveryPoint:Q(Y),City:Q(Y),AdministrativeArea:Q(Y),PostalCode:Q(Y),Country:Q(Y),ElectronicMailAddress:Q(Y)}),Bv=T(wv,{Value:gp(function(b){return Y(b)})}),Cv=T(wv,{AllowedValues:Q(function(b,c){return V({},Bv,b,c)})}),Ev=T(wv,{Phone:Q(function(b,c){return V({},
Dv,b,c)}),Address:Q(function(b,c){return V({},Av,b,c)})}),Gv=T(wv,{HTTP:Q(function(b,c){return V({},Fv,b,c)})}),Fv=T(wv,{Get:gp(function(b,c){var d=sv(b);return m(d)?V({href:d},Hv,b,c):void 0}),Post:void 0}),Iv=T(wv,{DCP:Q(function(b,c){return V({},Gv,b,c)})}),zv=T(wv,{Operation:function(b,c){var d=b.getAttribute("name"),e=V({},Iv,b,c);m(e)&&(c[c.length-1][d]=e)}}),Dv=T(wv,{Voice:Q(Y),Facsimile:Q(Y)}),Hv=T(wv,{Constraint:gp(function(b,c){var d=b.getAttribute("name");return m(d)?V({name:d},Cv,b,c):
    void 0
})
}), Jv = T(wv, {
    IndividualName: Q(Y), PositionName: Q(Y), ContactInfo: Q(function (b, c) {
        return V({}, Ev, b, c)
    })
}), xv = T(wv, {Title: Q(Y), ServiceTypeVersion: Q(Y), ServiceType: Q(Y)}), yv = T(wv, {
    ProviderName: Q(Y), ProviderSite: Q(sv), ServiceContact: Q(function (b, c) {
        return V({}, Jv, b, c)
    })
});
    function Kv(b, c, d, e) {
        var f;
        m(e) ? f = m(void 0) ? void 0 : 0 : (e = [], f = 0);
        var g, h;
        for (g = 0; g < c;) for (h = b[g++], e[f++] = b[g++], e[f++] = h, h = 2; h < d; ++h) e[f++] = b[g++];
        e.length = f
    }
    function Lv(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ze("EPSG:4326");
        this.a = m(b.factor) ? b.factor : 1E5;
        this.b = m(b.geometryLayout) ? b.geometryLayout : "XY"
    }
    w(Lv, bt);
    function Mv(b, c, d) {
        d = m(d) ? d : 1E5;
        var e, f = Array(c);
        for (e = 0; e < c; ++e) f[e] = 0;
        var g, h;
        g = 0;
        for (h = b.length; g < h;) for (e = 0; e < c; ++e, ++g) {
            var l = b[g], n = l - f[e];
            f[e] = l;
            b[g] = n
        }
        return Nv(b, d)
    }
    function Ov(b,c,d){var e=m(d)?d:1E5,f=Array(c);for(d=0;d<c;++d)f[d]=0;b=Pv(b,e);var g,e=0;for(g=b.length;e<g;)for(d=0;d<c;++d,++e)f[d]+=b[e],b[e]=f[d];return b}function Nv(b,c){var d=m(c)?c:1E5,e,f;e=0;for(f=b.length;e<f;++e)b[e]=Math.round(b[e]*d);d=0;for(e=b.length;d<e;++d)f=b[d],b[d]=0>f?~(f<<1):f<<1;d="";e=0;for(f=b.length;e<f;++e){for(var g=b[e],h=void 0,l="";32<=g;)h=(32|g&31)+63,l+=String.fromCharCode(h),g>>=5;h=g+63;l+=String.fromCharCode(h);d+=l}return d}
function Pv(b,c){var d=m(c)?c:1E5,e=[],f=0,g=0,h,l;h=0;for(l=b.length;h<l;++h){var n=b.charCodeAt(h)-63,f=f|(n&31)<<g;32>n?(e.push(f),g=f=0):g+=5}f=0;for(g=e.length;f<g;++f)h=e[f],e[f]=h&1?~(h>>1):h>>1;f=0;for(g=e.length;f<g;++f)e[f]/=d;return e}k=Lv.prototype;k.jd=function(b,c){var d=this.ld(b,c);return new yn(d)};k.nf=function(b,c){return[this.jd(b,c)]};k.ld=function(b,c){var d=Ze(this.b),e=Ov(b,d,this.a);Kv(e,e.length,d,e);d=of(e,0,e.length,d);return Fr(new N(d,this.b),!1,Er(this,c))};
k.ue=function(b,c){var d=b.Q();return null!=d?this.rd(d,c):""};k.Gh=function(b,c){return this.ue(b[0],c)};k.rd=function(b,c){b=Fr(b,!0,Er(this,c));var d=b.j,e=b.t;Kv(d,d.length,e,d);return Mv(d,e,this.a)};function Qv(b){b=m(b)?b:{};this.defaultDataProjection=null;this.defaultDataProjection=ze(null!=b.defaultDataProjection?b.defaultDataProjection:"EPSG:4326")}w(Qv,Gr);function Rv(b,c){var d=[],e,f,g,h;g=0;for(h=b.length;g<h;++g)e=b[g],0<g&&d.pop(),0<=e?f=c[e]:f=c[~e].slice().reverse(),d.push.apply(d,f);e=0;for(f=d.length;e<f;++e)d[e]=d[e].slice();return d}function Sv(b,c,d,e,f){b=b.geometries;var g=[],h,l;h=0;for(l=b.length;h<l;++h)g[h]=Tv(b[h],c,d,e,f);return g}
function Tv(b,c,d,e,f){var g=b.type,h=Uv[g];c="Point"===g||"MultiPoint"===g?h(b,d,e):h(b,c);d=new yn;d.La(Fr(c,!1,f));m(b.id)&&d.Ob(b.id);m(b.properties)&&d.u(b.properties);return d}
Qv.prototype.mf=function(b,c){if("Topology"==b.type){var d,e=null,f=null;m(b.transform)&&(d=b.transform,e=d.scale,f=d.translate);var g=b.arcs;if(m(d)){d=e;var h=f,l,n;l=0;for(n=g.length;l<n;++l)for(var p=g[l],q=d,r=h,t=0,v=0,A=void 0,z=void 0,E=void 0,z=0,E=p.length;z<E;++z)A=p[z],t+=A[0],v+=A[1],A[0]=t,A[1]=v,Vv(A,q,r)}d=[];h=sb(b.objects);l=0;for(n=h.length;l<n;++l)"GeometryCollection"===h[l].type?(p=h[l],d.push.apply(d,Sv(p,g,e,f,c))):(p=h[l],d.push(Tv(p,g,e,f,c)));return d}return[]};
function Vv(b,c,d){b[0]=b[0]*c[0]+d[0];b[1]=b[1]*c[1]+d[1]}Qv.prototype.za=function(){return this.defaultDataProjection};
var Uv={Point:function(b,c,d){b=b.coordinates;null===c||null===d||Vv(b,c,d);return new C(b)},LineString:function(b,c){var d=Rv(b.arcs,c);return new N(d)},Polygon:function(b,c){var d=[],e,f;e=0;for(f=b.arcs.length;e<f;++e)d[e]=Rv(b.arcs[e],c);return new D(d)},MultiPoint:function(b,c,d){b=b.coordinates;var e,f;if(null!==c&&null!==d)for(e=0,f=b.length;e<f;++e)Vv(b[e],c,d);return new hn(b)},MultiLineString:function(b,c){var d=[],e,f;e=0;for(f=b.arcs.length;e<f;++e)d[e]=Rv(b.arcs[e],c);return new O(d)},
MultiPolygon:function(b,c){var d=[],e,f,g,h,l,n;l=0;for(n=b.arcs.length;l<n;++l){e=b.arcs[l];f=[];g=0;for(h=e.length;g<h;++g)f[g]=Rv(e[g],c);d[l]=f}return new P(d)}};function Wv(b){b=m(b)?b:{};this.e=b.featureType;this.c=b.featureNS;this.a=m(b.gmlFormat)?b.gmlFormat:new is;this.d=m(b.schemaLocation)?b.schemaLocation:"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";this.defaultDataProjection=null}w(Wv,Ur);Wv.prototype.Mb=function(b,c){var d={featureType:this.e,featureNS:this.c};Fb(d,Dr(this,b,m(c)?c:{}));d=[d];this.a.a["http://www.opengis.net/gml"].featureMember=ep(Xr.prototype.kd);d=V([],this.a.a,b,d,this.a);m(d)||(d=[]);return d};
Wv.prototype.g=function(b){if(Qo(b))return Xv(b);if(To(b))return V({},Yv,b,[]);if(ia(b))return b=cp(b),Xv(b)};Wv.prototype.f=function(b){if(Qo(b))return Zv(this,b);if(To(b))return $v(this,b);if(ia(b))return b=cp(b),Zv(this,b)};function Zv(b,c){for(var d=c.firstChild;null!==d;d=d.nextSibling)if(1==d.nodeType)return $v(b,d)}var aw={"http://www.opengis.net/gml":{boundedBy:Q(Xr.prototype.me,"bounds")}};
function $v(b,c){var d={},e=ds(c.getAttribute("numberOfFeatures"));d.numberOfFeatures=e;return V(d,aw,c,[],b.a)}
var bw={"http://www.opengis.net/wfs":{totalInserted:Q(cs),totalUpdated:Q(cs),totalDeleted:Q(cs)}},cw={"http://www.opengis.net/ogc":{FeatureId:ep(function(b){return b.getAttribute("fid")})}},dw={"http://www.opengis.net/wfs":{Feature:function(b,c){np(cw,b,c)}}},Yv={"http://www.opengis.net/wfs":{TransactionSummary:Q(function(b,c){return V({},bw,b,c)},"transactionSummary"),InsertResults:Q(function(b,c){return V([],dw,b,c)},"insertIds")}};
function Xv(b){for(b=b.firstChild;null!==b;b=b.nextSibling)if(1==b.nodeType)return V({},Yv,b,[])}var ew={"http://www.opengis.net/wfs":{PropertyName:U(fs)}};function fw(b,c){var d=Io("http://www.opengis.net/ogc","Filter"),e=Io("http://www.opengis.net/ogc","FeatureId");d.appendChild(e);e.setAttribute("fid",c);b.appendChild(d)}
var gw={"http://www.opengis.net/wfs":{Insert:U(function(b,c,d){var e=d[d.length-1],e=Io(e.featureNS,e.featureType);b.appendChild(e);is.prototype.Fh(e,c,d)}),Update:U(function(b,c,d){var e=d[d.length-1],f=e.featureType,g=e.featurePrefix,g=m(g)?g:"feature",h=e.featureNS;b.setAttribute("typeName",g+":"+f);bp(b,"http://www.w3.org/2000/xmlns/","xmlns:"+g,h);f=c.aa;if(m(f)){for(var g=c.G(),h=[],l=0,n=g.length;l<n;l++){var p=c.get(g[l]);m(p)&&h.push({name:g[l],value:p})}op({O:b,srsName:e.srsName},gw,jp("Property"),
h,d);fw(b,f)}}),Delete:U(function(b,c,d){var e=d[d.length-1];d=e.featureType;var f=e.featurePrefix,f=m(f)?f:"feature",e=e.featureNS;b.setAttribute("typeName",f+":"+d);bp(b,"http://www.w3.org/2000/xmlns/","xmlns:"+f,e);c=c.aa;m(c)&&fw(b,c)}),Property:U(function(b,c,d){var e=Io("http://www.opengis.net/wfs","Name");b.appendChild(e);fs(e,c.name);null!=c.value&&(e=Io("http://www.opengis.net/wfs","Value"),b.appendChild(e),c.value instanceof We?is.prototype.we(e,c.value,d):fs(e,c.value))}),Native:U(function(b,
c){m(c.ko)&&b.setAttribute("vendorId",c.ko);m(c.In)&&b.setAttribute("safeToIgnore",c.In);m(c.value)&&fs(b,c.value)})}},hw={"http://www.opengis.net/wfs":{Query:U(function(b,c,d){var e=d[d.length-1],f=e.featurePrefix,g=e.featureNS,h=e.propertyNames,l=e.srsName;b.setAttribute("typeName",(m(f)?f+":":"")+c);m(l)&&b.setAttribute("srsName",l);m(g)&&bp(b,"http://www.w3.org/2000/xmlns/","xmlns:"+f,g);c=Db(e);c.O=b;op(c,ew,jp("PropertyName"),h,d);e=e.bbox;m(e)&&(h=Io("http://www.opengis.net/ogc","Filter"),
c=d[d.length-1].geometryName,f=Io("http://www.opengis.net/ogc","BBOX"),h.appendChild(f),g=Io("http://www.opengis.net/ogc","PropertyName"),fs(g,c),f.appendChild(g),is.prototype.we(f,e,d),b.appendChild(h))})}};
Wv.prototype.i=function(b){var c=Io("http://www.opengis.net/wfs","GetFeature");c.setAttribute("service","WFS");c.setAttribute("version","1.1.0");m(b)&&(m(b.handle)&&c.setAttribute("handle",b.handle),m(b.outputFormat)&&c.setAttribute("outputFormat",b.outputFormat),m(b.maxFeatures)&&c.setAttribute("maxFeatures",b.maxFeatures),m(b.resultType)&&c.setAttribute("resultType",b.resultType),m(b.bo)&&c.setAttribute("startIndex",b.bo),m(b.count)&&c.setAttribute("count",b.count));bp(c,"http://www.w3.org/2001/XMLSchema-instance",
"xsi:schemaLocation",this.d);var d=b.featureTypes;b=[{O:c,srsName:b.srsName,featureNS:m(b.featureNS)?b.featureNS:this.c,featurePrefix:b.featurePrefix,geometryName:b.geometryName,bbox:b.bbox,propertyNames:m(b.propertyNames)?b.propertyNames:[]}];var e=Db(b[b.length-1]);e.O=c;op(e,hw,jp("Query"),d,b);return c};
Wv.prototype.l=function(b,c,d,e){var f=[],g=Io("http://www.opengis.net/wfs","Transaction");g.setAttribute("service","WFS");g.setAttribute("version","1.1.0");var h,l;m(e)&&(h=m(e.gmlOptions)?e.gmlOptions:{},m(e.handle)&&g.setAttribute("handle",e.handle));bp(g,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.d);null!=b&&(l={O:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},Fb(l,h),op(l,gw,jp("Insert"),b,f));null!=c&&(l={O:g,featureNS:e.featureNS,
featureType:e.featureType,featurePrefix:e.featurePrefix},Fb(l,h),op(l,gw,jp("Update"),c,f));null!=d&&op({O:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},gw,jp("Delete"),d,f);m(e.nativeElements)&&op({O:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},gw,jp("Native"),e.nativeElements,f);return g};Wv.prototype.qf=function(b){for(b=b.firstChild;null!==b;b=b.nextSibling)if(1==b.nodeType)return this.pe(b);return null};
Wv.prototype.pe=function(b){if(null!=b.firstElementChild&&null!=b.firstElementChild.firstElementChild)for(b=b.firstElementChild.firstElementChild,b=b.firstElementChild;null!==b;b=b.nextElementSibling)if(0!==b.childNodes.length&&(1!==b.childNodes.length||3!==b.firstChild.nodeType)){var c=[{}];this.a.me(b,c);return ze(c.pop().srsName)}return null};function iw(b){b=m(b)?b:{};this.defaultDataProjection=null;this.a=m(b.splitCollection)?b.splitCollection:!1}w(iw,bt);function jw(b){b=b.M();return 0==b.length?"":b[0]+" "+b[1]}function kw(b){b=b.M();for(var c=[],d=0,e=b.length;d<e;++d)c.push(b[d][0]+" "+b[d][1]);return c.join(",")}function lw(b){var c=[];b=b.Ed();for(var d=0,e=b.length;d<e;++d)c.push("("+kw(b[d])+")");return c.join(",")}function mw(b){var c=b.L();b=(0,nw[c])(b);c=c.toUpperCase();return 0===b.length?c+" EMPTY":c+"("+b+")"}
var nw={Point:jw,LineString:kw,Polygon:lw,MultiPoint:function(b){var c=[];b=b.$d();for(var d=0,e=b.length;d<e;++d)c.push("("+jw(b[d])+")");return c.join(",")},MultiLineString:function(b){var c=[];b=b.ad();for(var d=0,e=b.length;d<e;++d)c.push("("+kw(b[d])+")");return c.join(",")},MultiPolygon:function(b){var c=[];b=b.Gd();for(var d=0,e=b.length;d<e;++d)c.push("("+lw(b[d])+")");return c.join(",")},GeometryCollection:function(b){var c=[];b=b.Uf();for(var d=0,e=b.length;d<e;++d)c.push(mw(b[d]));return c.join(",")}};
k=iw.prototype;k.jd=function(b,c){var d=this.ld(b,c);if(m(d)){var e=new yn;e.La(d);return e}return null};k.nf=function(b,c){var d=[],e=this.ld(b,c);this.a&&"GeometryCollection"==e.L()?d=e.d:d=[e];for(var f=[],g=0,h=d.length;g<h;++g)e=new yn,e.La(d[g]),f.push(e);return f};k.ld=function(b,c){var d;d=new ow(new pw(b));d.a=qw(d.b);d=rw(d);return m(d)?Fr(d,!1,c):null};k.ue=function(b,c){var d=b.Q();return m(d)?this.rd(d,c):""};
k.Gh=function(b,c){if(1==b.length)return this.ue(b[0],c);for(var d=[],e=0,f=b.length;e<f;++e)d.push(b[e].Q());d=new Ym(d);return this.rd(d,c)};k.rd=function(b,c){return mw(Fr(b,!0,c))};function pw(b){this.b=b;this.a=-1}function sw(b,c){var d=m(c)?c:!1;return"0"<=b&&"9">=b||"."==b&&!d}
function qw(b){var c=b.b.charAt(++b.a),d={position:b.a,value:c};if("("==c)d.type=2;else if(","==c)d.type=5;else if(")"==c)d.type=3;else if(sw(c)||"-"==c){d.type=4;var e,c=b.a,f=!1,g=!1;do{if("."==e)f=!0;else if("e"==e||"E"==e)g=!0;e=b.b.charAt(++b.a)}while(sw(e,f)||!g&&("e"==e||"E"==e)||g&&("-"==e||"+"==e));b=parseFloat(b.b.substring(c,b.a--));d.value=b}else if("a"<=c&&"z">=c||"A"<=c&&"Z">=c){d.type=1;c=b.a;do e=b.b.charAt(++b.a);while("a"<=e&&"z">=e||"A"<=e&&"Z">=e);b=b.b.substring(c,b.a--).toUpperCase();
d.value=b}else{if(" "==c||"\t"==c||"\r"==c||"\n"==c)return qw(b);if(""===c)d.type=6;else throw Error("Unexpected character: "+c);}return d}function ow(b){this.b=b}k=ow.prototype;k.match=function(b){if(b=this.a.type==b)this.a=qw(this.b);return b};
function rw(b){var c=b.a;if(b.match(1)){var d=c.value;if("GEOMETRYCOLLECTION"==d){a:{if(b.match(2)){c=[];do c.push(rw(b));while(b.match(5));if(b.match(3)){b=c;break a}}else if(tw(b)){b=[];break a}throw Error(uw(b));}return new Ym(b)}var e=vw[d],c=ww[d];if(!m(e)||!m(c))throw Error("Invalid geometry type: "+d);b=e.call(b);return new c(b)}throw Error(uw(b));}k.jf=function(){if(this.match(2)){var b=xw(this);if(this.match(3))return b}else if(tw(this))return null;throw Error(uw(this));};
k.hf=function(){if(this.match(2)){var b=yw(this);if(this.match(3))return b}else if(tw(this))return[];throw Error(uw(this));};k.kf=function(){if(this.match(2)){var b=zw(this);if(this.match(3))return b}else if(tw(this))return[];throw Error(uw(this));};k.Zm=function(){if(this.match(2)){var b;if(2==this.a.type)for(b=[this.jf()];this.match(5);)b.push(this.jf());else b=yw(this);if(this.match(3))return b}else if(tw(this))return[];throw Error(uw(this));};
k.Ym=function(){if(this.match(2)){var b=zw(this);if(this.match(3))return b}else if(tw(this))return[];throw Error(uw(this));};k.$m=function(){if(this.match(2)){for(var b=[this.kf()];this.match(5);)b.push(this.kf());if(this.match(3))return b}else if(tw(this))return[];throw Error(uw(this));};function xw(b){for(var c=[],d=0;2>d;++d){var e=b.a;if(b.match(4))c.push(e.value);else break}if(2==c.length)return c;throw Error(uw(b));}function yw(b){for(var c=[xw(b)];b.match(5);)c.push(xw(b));return c}
function zw(b){for(var c=[b.hf()];b.match(5);)c.push(b.hf());return c}function tw(b){var c=1==b.a.type&&"EMPTY"==b.a.value;c&&(b.a=qw(b.b));return c}function uw(b){return"Unexpected `"+b.a.value+"` at position "+b.a.position+" in `"+b.b.b+"`"}var ww={POINT:C,LINESTRING:N,POLYGON:D,MULTIPOINT:hn,MULTILINESTRING:O,MULTIPOLYGON:P},vw={POINT:ow.prototype.jf,LINESTRING:ow.prototype.hf,POLYGON:ow.prototype.kf,MULTIPOINT:ow.prototype.Zm,MULTILINESTRING:ow.prototype.Ym,MULTIPOLYGON:ow.prototype.$m};function Aw(){this.version=void 0}w(Aw,tv);Aw.prototype.b=function(b){for(b=b.firstChild;null!==b;b=b.nextSibling)if(1==b.nodeType)return this.a(b);return null};Aw.prototype.a=function(b){this.version=Ca(b.getAttribute("version"));b=V({version:this.version},Bw,b,[]);return m(b)?b:null};function Cw(b,c){return V({},Dw,b,c)}function Ew(b,c){return V({},Fw,b,c)}function Gw(b,c){var d=Cw(b,c);if(m(d)){var e=[ds(b.getAttribute("width")),ds(b.getAttribute("height"))];d.size=e;return d}}
function Hw(b,c){return V([],Iw,b,c)}
var Jw=[null,"http://www.opengis.net/wms"],Bw=T(Jw,{Service:Q(function(b,c){return V({},Kw,b,c)}),Capability:Q(function(b,c){return V({},Lw,b,c)})}),Lw=T(Jw,{Request:Q(function(b,c){return V({},Mw,b,c)}),Exception:Q(function(b,c){return V([],Nw,b,c)}),Layer:Q(function(b,c){return V({},Ow,b,c)})}),Kw=T(Jw,{Name:Q(Y),Title:Q(Y),Abstract:Q(Y),KeywordList:Q(Hw),OnlineResource:Q(sv),ContactInformation:Q(function(b,c){return V({},Pw,b,c)}),Fees:Q(Y),AccessConstraints:Q(Y),LayerLimit:Q(cs),MaxWidth:Q(cs),
MaxHeight:Q(cs)}),Pw=T(Jw,{ContactPersonPrimary:Q(function(b,c){return V({},Qw,b,c)}),ContactPosition:Q(Y),ContactAddress:Q(function(b,c){return V({},Rw,b,c)}),ContactVoiceTelephone:Q(Y),ContactFacsimileTelephone:Q(Y),ContactElectronicMailAddress:Q(Y)}),Qw=T(Jw,{ContactPerson:Q(Y),ContactOrganization:Q(Y)}),Rw=T(Jw,{AddressType:Q(Y),Address:Q(Y),City:Q(Y),StateOrProvince:Q(Y),PostCode:Q(Y),Country:Q(Y)}),Nw=T(Jw,{Format:ep(Y)}),Ow=T(Jw,{Name:Q(Y),Title:Q(Y),Abstract:Q(Y),KeywordList:Q(Hw),CRS:gp(Y),
EX_GeographicBoundingBox:Q(function(b,c){var d=V({},Sw,b,c);if(m(d)){var e=d.westBoundLongitude,f=d.southBoundLatitude,g=d.eastBoundLongitude,d=d.northBoundLatitude;return m(e)&&m(f)&&m(g)&&m(d)?[e,f,g,d]:void 0}}),BoundingBox:gp(function(b){var c=[bs(b.getAttribute("minx")),bs(b.getAttribute("miny")),bs(b.getAttribute("maxx")),bs(b.getAttribute("maxy"))],d=[bs(b.getAttribute("resx")),bs(b.getAttribute("resy"))];return{crs:b.getAttribute("CRS"),extent:c,res:d}}),Dimension:gp(function(b){return{name:b.getAttribute("name"),
units:b.getAttribute("units"),unitSymbol:b.getAttribute("unitSymbol"),"default":b.getAttribute("default"),multipleValues:Zr(b.getAttribute("multipleValues")),nearestValue:Zr(b.getAttribute("nearestValue")),current:Zr(b.getAttribute("current")),values:Y(b)}}),Attribution:Q(function(b,c){return V({},Tw,b,c)}),AuthorityURL:gp(function(b,c){var d=Cw(b,c);if(m(d))return d.name=b.getAttribute("name"),d}),Identifier:gp(Y),MetadataURL:gp(function(b,c){var d=Cw(b,c);if(m(d))return d.type=b.getAttribute("type"),
d}),DataURL:gp(Cw),FeatureListURL:gp(Cw),Style:gp(function(b,c){return V({},Uw,b,c)}),MinScaleDenominator:Q(as),MaxScaleDenominator:Q(as),Layer:gp(function(b,c){var d=c[c.length-1],e=V({},Ow,b,c);if(m(e)){var f=Zr(b.getAttribute("queryable"));m(f)||(f=d.queryable);e.queryable=m(f)?f:!1;f=ds(b.getAttribute("cascaded"));m(f)||(f=d.cascaded);e.cascaded=f;f=Zr(b.getAttribute("opaque"));m(f)||(f=d.opaque);e.opaque=m(f)?f:!1;f=Zr(b.getAttribute("noSubsets"));m(f)||(f=d.noSubsets);e.noSubsets=m(f)?f:!1;
f=bs(b.getAttribute("fixedWidth"));m(f)||(f=d.fixedWidth);e.fixedWidth=f;f=bs(b.getAttribute("fixedHeight"));m(f)||(f=d.fixedHeight);e.fixedHeight=f;Sa(["Style","CRS","AuthorityURL"],function(b){var c=d[b];if(m(c)){var f=Cb(e,b),f=f.concat(c);e[b]=f}});Sa("EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" "),function(b){m(e[b])||(e[b]=d[b])});return e}})}),Tw=T(Jw,{Title:Q(Y),OnlineResource:Q(sv),LogoURL:Q(Gw)}),Sw=T(Jw,{westBoundLongitude:Q(as),
eastBoundLongitude:Q(as),southBoundLatitude:Q(as),northBoundLatitude:Q(as)}),Mw=T(Jw,{GetCapabilities:Q(Ew),GetMap:Q(Ew),GetFeatureInfo:Q(Ew)}),Fw=T(Jw,{Format:gp(Y),DCPType:gp(function(b,c){return V({},Vw,b,c)})}),Vw=T(Jw,{HTTP:Q(function(b,c){return V({},Ww,b,c)})}),Ww=T(Jw,{Get:Q(Cw),Post:Q(Cw)}),Uw=T(Jw,{Name:Q(Y),Title:Q(Y),Abstract:Q(Y),LegendURL:gp(Gw),StyleSheetURL:Q(Cw),StyleURL:Q(Cw)}),Dw=T(Jw,{Format:Q(Y),OnlineResource:Q(sv)}),Iw=T(Jw,{Keyword:ep(Y)});function Xw(){this.c="http://mapserver.gis.umn.edu/mapserver";this.a=new rs;this.defaultDataProjection=null}w(Xw,Ur);
function Yw(b,c,d){c.namespaceURI=b.c;var e=No(c),f=[];if(0===c.childNodes.length)return f;"msGMLOutput"==e&&Sa(c.childNodes,function(b){if(1===b.nodeType){var c=d[0],e=b.localName,n=RegExp,p;p="_layer".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08");n=new n(p,"");e=e.replace(n,"")+"_feature";c.featureType=e;c.featureNS=this.c;n={};n[e]=ep(this.a.lf,this.a);c=T([c.featureNS,null],n);b.namespaceURI=this.c;b=V([],c,b,d,this.a);m(b)&&db(f,b)}},b);"FeatureCollection"==e&&(b=V([],
b.a.a,c,[{}],b.a),m(b)&&(f=b));return f}Xw.prototype.Mb=function(b,c){var d={featureType:this.featureType,featureNS:this.featureNS};m(c)&&Fb(d,Dr(this,b,c));return Yw(this,b,[d])};function Zw(){this.d=new uv}w(Zw,tv);Zw.prototype.b=function(b){for(b=b.firstChild;null!==b;b=b.nextSibling)if(1==b.nodeType)return this.a(b);return null};Zw.prototype.a=function(b){this.version=Ca(b.getAttribute("version"));var c=this.d.a(b);if(!m(c))return null;c.version=this.version;c=V(c,$w,b,[]);return m(c)?c:null};function ax(b){var c=Y(b).split(" ");if(m(c)&&2==c.length)return b=+c[0],c=+c[1],isNaN(b)||isNaN(c)?void 0:[b,c]}
var bx=[null,"http://www.opengis.net/wmts/1.0"],cx=[null,"http://www.opengis.net/ows/1.1"],$w=T(bx,{Contents:Q(function(b,c){return V({},dx,b,c)})}),dx=T(bx,{Layer:gp(function(b,c){return V({},ex,b,c)}),TileMatrixSet:gp(function(b,c){return V({},fx,b,c)})}),ex=T(bx,{Style:gp(function(b,c){var d=V({},gx,b,c);if(m(d)){var e="true"===b.getAttribute("isDefault");d.isDefault=e;return d}}),Format:gp(Y),TileMatrixSetLink:gp(function(b,c){return V({},hx,b,c)}),ResourceURL:gp(function(b){var c=b.getAttribute("format"),
d=b.getAttribute("template");b=b.getAttribute("resourceType");var e={};m(c)&&(e.format=c);m(d)&&(e.template=d);m(b)&&(e.resourceType=b);return e})},T(cx,{Title:Q(Y),Abstract:Q(Y),WGS84BoundingBox:Q(function(b,c){var d=V([],ix,b,c);return 2!=d.length?void 0:Jd(d)}),Identifier:Q(Y)})),gx=T(bx,{LegendURL:gp(function(b){var c={};c.format=b.getAttribute("format");c.href=sv(b);return c})},T(cx,{Title:Q(Y),Identifier:Q(Y)})),hx=T(bx,{TileMatrixSet:Q(Y)}),ix=T(cx,{LowerCorner:ep(ax),UpperCorner:ep(ax)}),
fx=T(bx,{WellKnownScaleSet:Q(Y),TileMatrix:gp(function(b,c){return V({},jx,b,c)})},T(cx,{SupportedCRS:Q(Y),Identifier:Q(Y)})),jx=T(bx,{TopLeftCorner:Q(ax),ScaleDenominator:Q(as),TileWidth:Q(cs),TileHeight:Q(cs),MatrixWidth:Q(cs),MatrixHeight:Q(cs)},T(cx,{Identifier:Q(Y)}));var kx=new ue(6378137);function lx(b){fd.call(this);b=m(b)?b:{};this.b=null;this.d=Te;this.c=void 0;x(this,hd("projection"),this.Jk,!1,this);x(this,hd("tracking"),this.Kk,!1,this);m(b.projection)&&this.ug(ze(b.projection));m(b.trackingOptions)&&this.xh(b.trackingOptions);this.Wd(m(b.tracking)?b.tracking:!1)}w(lx,fd);k=lx.prototype;k.N=function(){this.Wd(!1);lx.S.N.call(this)};k.Jk=function(){var b=this.sg();null!=b&&(this.d=De(ze("EPSG:4326"),b),null===this.b||this.set("position",this.d(this.b)))};
k.Kk=function(){if(gj){var b=this.tg();b&&!m(this.c)?this.c=ba.navigator.geolocation.watchPosition(ra(this.gn,this),ra(this.hn,this),this.dg()):!b&&m(this.c)&&(ba.navigator.geolocation.clearWatch(this.c),this.c=void 0)}};
k.gn=function(b){b=b.coords;this.set("accuracy",b.accuracy);this.set("altitude",null===b.altitude?void 0:b.altitude);this.set("altitudeAccuracy",null===b.altitudeAccuracy?void 0:b.altitudeAccuracy);this.set("heading",null===b.heading?void 0:Yb(b.heading));null===this.b?this.b=[b.longitude,b.latitude]:(this.b[0]=b.longitude,this.b[1]=b.latitude);var c=this.d(this.b);this.set("position",c);this.set("speed",null===b.speed?void 0:b.speed);b=Jf(kx,this.b,b.accuracy);b.oa(this.d);this.set("accuracyGeometry",
b);this.k()};k.hn=function(b){b.type="error";this.Wd(!1);this.dispatchEvent(b)};k.Gi=function(){return this.get("accuracy")};k.Hi=function(){return this.get("accuracyGeometry")||null};k.Ji=function(){return this.get("altitude")};k.Ki=function(){return this.get("altitudeAccuracy")};k.Hk=function(){return this.get("heading")};k.Ik=function(){return this.get("position")};k.sg=function(){return this.get("projection")};k.qj=function(){return this.get("speed")};k.tg=function(){return this.get("tracking")};
k.dg=function(){return this.get("trackingOptions")};k.ug=function(b){this.set("projection",b)};k.Wd=function(b){this.set("tracking",b)};k.xh=function(b){this.set("trackingOptions",b)};function mx(b,c,d){for(var e=[],f=b(0),g=b(1),h=c(f),l=c(g),n=[g,f],p=[l,h],q=[1,0],r={},t=1E5,v,A,z,E,B;0<--t&&0<q.length;)z=q.pop(),f=n.pop(),h=p.pop(),g=z.toString(),g in r||(e.push(h[0],h[1]),r[g]=!0),E=q.pop(),g=n.pop(),l=p.pop(),B=(z+E)/2,v=b(B),A=c(v),df(A[0],A[1],h[0],h[1],l[0],l[1])<d?(e.push(l[0],l[1]),g=E.toString(),r[g]=!0):(q.push(E,B,B,z),p.push(l,A,A,h),n.push(g,v,v,f));return e}function nx(b,c,d,e,f){var g=ze("EPSG:4326");return mx(function(e){return[b,c+(d-c)*e]},Se(g,e),f)}
    function ox(b, c, d, e, f) {
        var g = ze("EPSG:4326");
        return mx(function (e) {
            return [c + (d - c) * e, b]
        }, Se(g, e), f)
    }
    function px(b) {
        b = m(b) ? b : {};
        this.i = this.g = null;
        this.d = this.c = Infinity;
        this.f = this.e = -Infinity;
        this.Y = m(b.targetSize) ? b.targetSize : 100;
        this.o = m(b.maxLines) ? b.maxLines : 100;
        this.a = [];
        this.b = [];
        this.r = m(b.strokeStyle) ? b.strokeStyle : qx;
        this.l = this.p = void 0;
        this.n = null;
        this.setMap(m(b.map) ? b.map : null)
    }
    var qx = new Bl({color: "rgba(0,0,0,0.2)"}),
        rx = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];
    function sx(b,c,d,e,f){var g=f;c=nx(c,b.e,b.c,b.i,d);g=m(b.a[g])?b.a[g]:new N(null);en(g,"XY",c);he(g.I(),e)&&(b.a[f++]=g);return f}function tx(b,c,d,e,f){var g=f;c=ox(c,b.f,b.d,b.i,d);g=m(b.b[g])?b.b[g]:new N(null);en(g,"XY",c);he(g.I(),e)&&(b.b[f++]=g);return f}k=px.prototype;k.Lk=function(){return this.g};k.fj=function(){return this.a};k.kj=function(){return this.b};
k.jg=function(b){var c=b.vectorContext,d=b.frameState;b=d.extent;var e=d.viewState,f=e.center,g=e.projection,e=e.resolution,d=d.pixelRatio,d=e*e/(4*d*d);if(null===this.i||!Re(this.i,g)){var h=g.I(),l=g.g,n=l[2],p=l[1],q=l[0];this.c=l[3];this.d=n;this.e=p;this.f=q;l=ze("EPSG:4326");this.p=Se(l,g);this.l=Se(g,l);this.n=this.l(de(h));this.i=g}for(var g=this.n[0],h=this.n[1],l=-1,r,p=Math.pow(this.Y*e,2),q=[],t=[],e=0,n=rx.length;e<n;++e){r=rx[e]/2;q[0]=g-r;q[1]=h-r;t[0]=g+r;t[1]=h+r;this.p(q,q);this.p(t,
t);r=Math.pow(t[0]-q[0],2)+Math.pow(t[1]-q[1],2);if(r<=p)break;l=rx[e]}e=l;if(-1==e)this.a.length=this.b.length=0;else{g=this.l(f);f=g[0];g=g[1];h=this.o;f=Math.floor(f/e)*e;p=Vb(f,this.f,this.d);n=sx(this,p,d,b,0);for(l=0;p!=this.f&&l++<h;)p=Math.max(p-e,this.f),n=sx(this,p,d,b,n);p=Vb(f,this.f,this.d);for(l=0;p!=this.d&&l++<h;)p=Math.min(p+e,this.d),n=sx(this,p,d,b,n);this.a.length=n;g=Math.floor(g/e)*e;f=Vb(g,this.e,this.c);n=tx(this,f,d,b,0);for(l=0;f!=this.e&&l++<h;)f=Math.max(f-e,this.e),n=
tx(this,f,d,b,n);f=Vb(g,this.e,this.c);for(l=0;f!=this.c&&l++<h;)f=Math.min(f+e,this.c),n=tx(this,f,d,b,n);this.b.length=n}c.Aa(null,this.r);b=0;for(d=this.a.length;b<d;++b)f=this.a[b],c.zb(f,null);b=0;for(d=this.b.length;b<d;++b)f=this.b[b],c.zb(f,null)};k.setMap=function(b){null!==this.g&&(this.g.v("postcompose",this.jg,this),this.g.render());null!==b&&(b.s("postcompose",this.jg,this),b.render());this.g=b};function ux(b,c,d,e,f,g,h){mk.call(this,b,c,d,0,e);this.i=f;this.b=new Image;null!==g&&(this.b.crossOrigin=g);this.d={};this.c=null;this.state=0;this.g=h}w(ux,mk);ux.prototype.a=function(b){if(m(b)){var c=ma(b);if(c in this.d)return this.d[c];b=xb(this.d)?this.b:this.b.cloneNode(!1);return this.d[c]=b}return this.b};ux.prototype.p=function(){this.state=3;Sa(this.c,Wc);this.c=null;this.dispatchEvent("change")};
ux.prototype.n=function(){m(this.resolution)||(this.resolution=fe(this.extent)/this.b.height);this.state=2;Sa(this.c,Wc);this.c=null;this.dispatchEvent("change")};ux.prototype.load=function(){0==this.state&&(this.state=1,this.dispatchEvent("change"),this.c=[Uc(this.b,"error",this.p,!1,this),Uc(this.b,"load",this.n,!1,this)],this.g(this,this.i))};function vx(b,c,d,e,f){Bh.call(this,b,c);this.g=d;this.b=new Image;null!==e&&(this.b.crossOrigin=e);this.c={};this.e=null;this.i=f}w(vx,Bh);k=vx.prototype;k.N=function(){1==this.state&&wx(this);vx.S.N.call(this)};k.Ma=function(b){if(m(b)){var c=ma(b);if(c in this.c)return this.c[c];b=xb(this.c)?this.b:this.b.cloneNode(!1);return this.c[c]=b}return this.b};k.hb=function(){return this.g};k.Mk=function(){this.state=3;wx(this);Ch(this)};
    k.Nk = function () {
        this.state = this.b.naturalWidth && this.b.naturalHeight ? 2 : 4;
        wx(this);
        Ch(this)
    };
    k.load = function () {
        0 == this.state && (this.state = 1, Ch(this), this.e = [Uc(this.b, "error", this.Mk, !1, this), Uc(this.b, "load", this.Nk, !1, this)], this.i(this, this.g))
    };
    function wx(b) {
        Sa(b.e, Wc);
        b.e = null
    }
    function xx(b, c, d) {
        return function (e, f, g) {
            return d(b, c, e, f, g)
        }
    }
    function yx() {
    }
    function zx(b, c) {
        $c.call(this);
        this.a = new kr(this);
        var d = b;
        c && (d = Gg(b));
        this.a.Ka(d, "dragenter", this.Pm);
        d != b && this.a.Ka(d, "dragover", this.Qm);
        this.a.Ka(b, "dragover", this.Rm);
        this.a.Ka(b, "drop", this.Sm)
    }
    w(zx, $c);
    k = zx.prototype;
    k.Zc = !1;
    k.N = function () {
        zx.S.N.call(this);
        this.a.Yc()
    };
    k.Pm = function (b) {
        var c = b.a.dataTransfer;
        (this.Zc = !(!c || !(c.types && (Ya(c.types, "Files") || Ya(c.types, "public.file-url")) || c.files && 0 < c.files.length))) && b.preventDefault()
    };
    k.Qm=function(b){this.Zc&&(b.preventDefault(),b.a.dataTransfer.dropEffect="none")};k.Rm=function(b){this.Zc&&(b.preventDefault(),b.gb(),b=b.a.dataTransfer,b.effectAllowed="all",b.dropEffect="copy")};k.Sm=function(b){this.Zc&&(b.preventDefault(),b.gb(),b=new wc(b.a),b.type="drop",this.dispatchEvent(b))};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Ax(b,c){this.e=[];this.o=b;this.l=c||null;this.d=this.a=!1;this.c=void 0;this.p=this.r=this.g=!1;this.f=0;this.b=null;this.i=0}Ax.prototype.cancel=function(b){if(this.a)this.c instanceof Ax&&this.c.cancel();else{if(this.b){var c=this.b;delete this.b;b?c.cancel(b):(c.i--,0>=c.i&&c.cancel())}this.o?this.o.call(this.l,this):this.p=!0;this.a||(b=new Bx,Cx(this),Dx(this,!1,b))}};Ax.prototype.n=function(b,c){this.g=!1;Dx(this,b,c)};function Dx(b,c,d){b.a=!0;b.c=d;b.d=!c;Ex(b)}
function Cx(b){if(b.a){if(!b.p)throw new Fx;b.p=!1}}function Gx(b,c,d,e){b.e.push([c,d,e]);b.a&&Ex(b)}Ax.prototype.then=function(b,c,d){var e,f,g=new In(function(b,c){e=b;f=c});Gx(this,e,function(b){b instanceof Bx?g.cancel():f(b)});return g.then(b,c,d)};zn(Ax);function Hx(b){return Va(b.e,function(b){return ka(b[1])})}
function Ex(b){if(b.f&&b.a&&Hx(b)){var c=b.f,d=Ix[c];d&&(ba.clearTimeout(d.aa),delete Ix[c]);b.f=0}b.b&&(b.b.i--,delete b.b);for(var c=b.c,e=d=!1;b.e.length&&!b.g;){var f=b.e.shift(),g=f[0],h=f[1],f=f[2];if(g=b.d?h:g)try{var l=g.call(f||b.l,c);m(l)&&(b.d=b.d&&(l==c||l instanceof Error),b.c=c=l);An(c)&&(e=!0,b.g=!0)}catch(n){c=n,b.d=!0,Hx(b)||(d=!0)}}b.c=c;e&&(l=ra(b.n,b,!0),e=ra(b.n,b,!1),c instanceof Ax?(Gx(c,l,e),c.r=!0):c.then(l,e));d&&(c=new Jx(c),Ix[c.aa]=c,b.f=c.aa)}
function Fx(){xa.call(this)}w(Fx,xa);Fx.prototype.message="Deferred has already fired";Fx.prototype.name="AlreadyCalledError";function Bx(){xa.call(this)}w(Bx,xa);Bx.prototype.message="Deferred was canceled";Bx.prototype.name="CanceledError";function Jx(b){this.aa=ba.setTimeout(ra(this.b,this),0);this.a=b}Jx.prototype.b=function(){delete Ix[this.aa];throw this.a;};var Ix={};function Kx(b,c){m(b.name)?(this.name=b.name,this.code=Lx[b.name]):(this.code=b.code,this.name=Mx(b.code));xa.call(this,Ba("%s %s",this.name,c))}w(Kx,xa);function Mx(b){var c=wb(Lx,function(c){return b==c});if(!m(c))throw Error("Invalid code: "+b);return c}var Lx={AbortError:3,EncodingError:5,InvalidModificationError:9,InvalidStateError:7,NotFoundError:1,NotReadableError:4,NoModificationAllowedError:6,PathExistsError:12,QuotaExceededError:10,SecurityError:2,SyntaxError:8,TypeMismatchError:11};function Nx(b,c){rc.call(this,b.type,c)}w(Nx,rc);function Ox(){$c.call(this);this.Za=new FileReader;this.Za.onloadstart=ra(this.a,this);this.Za.onprogress=ra(this.a,this);this.Za.onload=ra(this.a,this);this.Za.onabort=ra(this.a,this);this.Za.onerror=ra(this.a,this);this.Za.onloadend=ra(this.a,this)}w(Ox,$c);Ox.prototype.getError=function(){return this.Za.error&&new Kx(this.Za.error,"reading file")};Ox.prototype.a=function(b){this.dispatchEvent(new Nx(b,this))};Ox.prototype.N=function(){Ox.S.N.call(this);delete this.Za};
    function Px(b) {
        var c = new Ax;
        b.Ka("loadend", ta(function (b, c) {
            var f = c.Za.result, g = c.getError();
            null == f || g ? (Cx(b), Dx(b, !1, g)) : (Cx(b), Dx(b, !0, f));
            c.Yc()
        }, c, b));
        return c
    }
    function Qx(b) {
        b = m(b) ? b : {};
        Sk.call(this, {handleEvent: oe});
        this.f = m(b.formatConstructors) ? b.formatConstructors : [];
        this.l = m(b.projection) ? ze(b.projection) : null;
        this.e = null;
        this.c = void 0
    }
    w(Qx, Sk);
    Qx.prototype.N = function () {
        m(this.c) && Wc(this.c);
        Qx.S.N.call(this)
    };
    Qx.prototype.g = function (b) {
        b = b.a.dataTransfer.files;
        var c, d, e;
        c = 0;
        for (d = b.length; c < d; ++c) {
            var f = e = b[c], g = new Ox, h = Px(g);
            g.Za.readAsText(f, "");
            Gx(h, ta(this.i, e), null, this)
        }
    };
    Qx.prototype.i=function(b,c){var d=this.n,e=this.l;null===e&&(e=d.P().e);var d=this.f,f=[],g,h;g=0;for(h=d.length;g<h;++g){var l=new d[g],n;try{n=l.ja(c)}catch(p){n=null}if(null!==n){var l=l.za(c),l=Se(l,e),q,r;q=0;for(r=n.length;q<r;++q){var t=n[q],v=t.Q();null!=v&&v.oa(l);f.push(t)}}}this.dispatchEvent(new Rx(Sx,this,b,f,e))};
Qx.prototype.setMap=function(b){m(this.c)&&(Wc(this.c),this.c=void 0);null!==this.e&&(qc(this.e),this.e=null);Qx.S.setMap.call(this,b);null!==b&&(this.e=new zx(b.b),this.c=x(this.e,"drop",this.g,!1,this))};var Sx="addfeatures";function Rx(b,c,d,e,f){rc.call(this,b,c);this.features=e;this.file=d;this.projection=f}w(Rx,rc);function Tx(b,c){this.x=b;this.y=c}w(Tx,Cg);Tx.prototype.clone=function(){return new Tx(this.x,this.y)};Tx.prototype.scale=Cg.prototype.scale;Tx.prototype.add=function(b){this.x+=b.x;this.y+=b.y;return this};Tx.prototype.rotate=function(b){var c=Math.cos(b);b=Math.sin(b);var d=this.y*c+this.x*b;this.x=this.x*c-this.y*b;this.y=d;return this};function Ux(b){b=m(b)?b:{};el.call(this,{handleDownEvent:Vx,handleDragEvent:Wx,handleUpEvent:Xx});this.i=m(b.condition)?b.condition:bl;this.c=this.e=void 0;this.g=0;this.o=m(b.duration)?b.duration:400}w(Ux,el);
function Wx(b){if(dl(b)){var c=b.map,d=c.va();b=b.pixel;b=new Tx(b[0]-d[0]/2,d[1]/2-b[1]);d=Math.atan2(b.y,b.x);b=Math.sqrt(b.x*b.x+b.y*b.y);var e=c.P(),f=Rf(e);c.render();m(this.e)&&Tk(c,e,f.rotation-(d-this.e));this.e=d;m(this.c)&&Vk(c,e,f.resolution/b*this.c);m(this.c)&&(this.g=this.c/b);this.c=b}}
    function Xx(b) {
        if (!dl(b)) return !0;
        b = b.map;
        var c = b.P();
        Tf(c, -1);
        var d = Rf(c), e = this.g - 1, f = d.rotation, f = c.constrainRotation(f, 0);
        Tk(b, c, f, void 0, void 0);
        d = d.resolution;
        f = this.o;
        d = c.constrainResolution(d, 0, e);
        Vk(b, c, d, void 0, f);
        this.g = 0;
        return !1
    }
    function Vx(b) {
        return dl(b) && this.i(b) ? (Tf(b.map.P(), 1), this.c = this.e = void 0, !0) : !1
    }
    function Yx(b, c) {
        rc.call(this, b);
        this.feature = c
    }
    w(Yx, rc);
    function Zx(b){el.call(this,{handleDownEvent:$x,handleEvent:ay,handleUpEvent:by});this.T=null;this.K=!1;this.lb=m(b.source)?b.source:null;this.jb=m(b.features)?b.features:null;this.hi=m(b.snapTolerance)?b.snapTolerance:12;this.R=b.type;this.c=cy(this.R);this.Qa=m(b.minPoints)?b.minPoints:this.c===dy?3:2;this.Ga=m(b.maxPoints)?b.maxPoints:Infinity;var c=b.geometryFunction;if(!m(c))if("Circle"===this.R)c=function(b,c){var d=m(c)?c:new Wm([NaN,NaN]);d.sf(b[0],Math.sqrt(sd(b[0],b[1])));return d};else{var d,
c=this.c;c===ey?d=C:c===fy?d=N:c===dy&&(d=D);c=function(b,c){var g=c;m(g)?g.ca(b):g=new d(b);return g}}this.q=c;this.D=this.o=this.e=this.r=this.i=this.g=null;this.ii=m(b.clickTolerance)?b.clickTolerance*b.clickTolerance:36;this.ka=new M({source:new W({useSpatialIndex:!1,wrapX:m(b.wrapX)?b.wrapX:!1}),style:m(b.style)?b.style:gy()});this.kb=b.geometryName;this.di=m(b.condition)?b.condition:al;this.qa=m(b.freehandCondition)?b.freehandCondition:bl;x(this,hd("active"),this.mb,!1,this)}w(Zx,el);
function gy(){var b=Ll();return function(c){return b[c.Q().L()]}}Zx.prototype.setMap=function(b){Zx.S.setMap.call(this,b);this.mb()};function ay(b){var c=!this.K;this.K&&b.type===fk?(hy(this,b),c=!1):b.type===ek?c=iy(this,b):b.type===Yj&&(c=!1);return fl.call(this,b)&&c}function $x(b){if(this.di(b))return this.T=b.pixel,!0;if(this.c!==fy&&this.c!==dy||!this.qa(b))return!1;this.T=b.pixel;this.K=!0;null===this.g&&jy(this,b);return!0}
function by(b){this.K=!1;var c=this.T,d=b.pixel,e=c[0]-d[0],c=c[1]-d[1],d=!0;e*e+c*c<=this.ii&&(iy(this,b),null===this.g?jy(this,b):(this.c===ey||this.c===ky)&&null!==this.g||ly(this,b)?this.X():hy(this,b),d=!1);return d}
function iy(b,c){if(b.c===ey&&null===b.g)jy(b,c);else if(null===b.g){var d=c.coordinate.slice();null===b.r?(b.r=new yn(new C(d)),my(b)):b.r.Q().ca(d)}else{var d=c.coordinate,e=b.i.Q(),f;b.c===ey?f=b.e:b.c===dy?(f=b.e[0],f=f[f.length-1],ly(b,c)&&(d=b.g.slice())):(f=b.e,f=f[f.length-1]);f[0]=d[0];f[1]=d[1];b.q(b.e,e);null===b.r||b.r.Q().ca(d);e instanceof D&&b.c!==dy?(null===b.o&&(b.o=new yn(new N(null))),e=e.Xf(0),d=b.o.Q(),en(d,e.b,e.j)):null!==b.D&&(d=b.o.Q(),d.ca(b.D));my(b)}return!0}
function ly(b,c){var d=!1;if(null!==b.i){var e=!1,f=[b.g];b.c===fy?e=b.e.length>b.Qa:b.c===dy&&(e=b.e[0].length>b.Qa,f=[b.e[0][0],b.e[0][b.e[0].length-2]]);if(e)for(var e=c.map,g=0,h=f.length;g<h;g++){var l=f[g],n=e.ra(l),p=c.pixel,d=p[0]-n[0],n=p[1]-n[1],p=b.K&&b.qa(c)?1:b.hi;if(d=Math.sqrt(d*d+n*n)<=p){b.g=l;break}}}return d}
function jy(b,c){var d=c.coordinate;b.g=d;b.c===ey?b.e=d.slice():b.c===dy?(b.e=[[d.slice(),d.slice()]],b.D=b.e[0]):(b.e=[d.slice(),d.slice()],b.c===ky&&(b.D=b.e));null!==b.D&&(b.o=new yn(new N(b.D)));d=b.q(b.e);b.i=new yn;m(b.kb)&&b.i.Jc(b.kb);b.i.La(d);my(b);b.dispatchEvent(new Yx("drawstart",b.i))}
function hy(b,c){var d=c.coordinate,e=b.i.Q(),f,g;if(b.c===fy)b.g=d.slice(),g=b.e,g.push(d.slice()),f=g.length>b.Ga,b.q(g,e);else if(b.c===dy){g=b.e[0];g.push(d.slice());if(f=g.length>b.Ga)b.g=g[0];b.q(b.e,e)}my(b);f&&b.X()}
Zx.prototype.X=function(){var b=ny(this),c=this.e,d=b.Q();this.c===fy?(c.pop(),this.q(c,d)):this.c===dy&&(c[0].pop(),c[0].push(c[0][0]),this.q(c,d));"MultiPoint"===this.R?b.La(new hn([c])):"MultiLineString"===this.R?b.La(new O([c])):"MultiPolygon"===this.R&&b.La(new P([c]));this.dispatchEvent(new Yx("drawend",b));null===this.jb||this.jb.push(b);null===this.lb||this.lb.gd(b)};function ny(b){b.g=null;var c=b.i;null!==c&&(b.i=null,b.r=null,b.o=null,b.ka.V().clear(!0));return c}Zx.prototype.nc=ne;
function my(b){var c=[];null===b.i||c.push(b.i);null===b.o||c.push(b.o);null===b.r||c.push(b.r);b=b.ka.V();b.clear(!0);b.rc(c)}Zx.prototype.mb=function(){var b=this.n,c=this.b();null!==b&&c||ny(this);this.ka.setMap(c?b:null)};function cy(b){var c;"Point"===b||"MultiPoint"===b?c=ey:"LineString"===b||"MultiLineString"===b?c=fy:"Polygon"===b||"MultiPolygon"===b?c=dy:"Circle"===b&&(c=ky);return c}var ey="Point",fy="LineString",dy="Polygon",ky="Circle";function oy(b,c,d){rc.call(this,b);this.features=c;this.mapBrowserPointerEvent=d}w(oy,rc);
function py(b){el.call(this,{handleDownEvent:qy,handleDragEvent:ry,handleEvent:sy,handleUpEvent:ty});this.X=m(b.deleteCondition)?b.deleteCondition:te(al,$k);this.T=this.e=null;this.r=[0,0];this.D=[NaN,NaN];this.c=new tp;this.o=m(b.pixelTolerance)?b.pixelTolerance:10;this.R=!1;this.g=null;this.q=new M({source:new W({useSpatialIndex:!1,wrapX:m(b.wrapX)?b.wrapX:!1}),style:m(b.style)?b.style:uy(),updateWhileAnimating:!0,updateWhileInteracting:!0});this.K={Point:this.rl,LineString:this.Ag,LinearRing:this.Ag,
Polygon:this.sl,MultiPoint:this.pl,MultiLineString:this.ol,MultiPolygon:this.ql,GeometryCollection:this.nl};this.i=b.features;this.i.forEach(this.zg,this);x(this.i,"add",this.ll,!1,this);x(this.i,"remove",this.ml,!1,this)}w(py,el);k=py.prototype;k.zg=function(b){var c=b.Q();m(this.K[c.L()])&&this.K[c.L()].call(this,b,c);b=this.n;null===b||vy(this,this.r,b)};k.setMap=function(b){this.q.setMap(b);py.S.setMap.call(this,b)};k.ll=function(b){this.zg(b.element)};
k.ml=function(b){var c=b.element;b=this.c;var d,e=[];xp(b,c.Q().I(),function(b){c===b.feature&&e.push(b)});for(d=e.length-1;0<=d;--d)b.remove(e[d]);null!==this.e&&0===this.i.Ib()&&(this.q.V().Dc(this.e),this.e=null)};k.rl=function(b,c){var d=c.M(),d={feature:b,geometry:c,ba:[d,d]};this.c.ha(c.I(),d)};k.pl=function(b,c){var d=c.M(),e,f,g;f=0;for(g=d.length;f<g;++f)e=d[f],e={feature:b,geometry:c,depth:[f],index:f,ba:[e,e]},this.c.ha(c.I(),e)};
k.Ag=function(b,c){var d=c.M(),e,f,g,h;e=0;for(f=d.length-1;e<f;++e)g=d.slice(e,e+2),h={feature:b,geometry:c,index:e,ba:g},this.c.ha(Jd(g),h)};k.ol=function(b,c){var d=c.M(),e,f,g,h,l,n,p;h=0;for(l=d.length;h<l;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)n=e.slice(f,f+2),p={feature:b,geometry:c,depth:[h],index:f,ba:n},this.c.ha(Jd(n),p)};
k.sl=function(b,c){var d=c.M(),e,f,g,h,l,n,p;h=0;for(l=d.length;h<l;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)n=e.slice(f,f+2),p={feature:b,geometry:c,depth:[h],index:f,ba:n},this.c.ha(Jd(n),p)};k.ql=function(b,c){var d=c.M(),e,f,g,h,l,n,p,q,r,t;n=0;for(p=d.length;n<p;++n)for(q=d[n],h=0,l=q.length;h<l;++h)for(e=q[h],f=0,g=e.length-1;f<g;++f)r=e.slice(f,f+2),t={feature:b,geometry:c,depth:[h,n],index:f,ba:r},this.c.ha(Jd(r),t)};
k.nl=function(b,c){var d,e=c.d;for(d=0;d<e.length;++d)this.K[e[d].L()].call(this,b,e[d])};function wy(b,c){var d=b.e;null===d?(d=new yn(new C(c)),b.e=d,b.q.V().gd(d)):d.Q().ca(c)}function xy(b,c){return b.index-c.index}
function qy(b){vy(this,b.pixel,b.map);this.g=[];var c=this.e;if(null!==c){var d=[],c=c.Q().M(),e=Jd([c]),e=vp(this.c,e),f={};e.sort(xy);for(var g=0,h=e.length;g<h;++g){var l=e[g],n=l.ba,p=ma(l.feature),q=l.depth;q&&(p+="-"+q.join("-"));f[p]||(f[p]=Array(2));if(qd(n[0],c)&&!f[p][0])this.g.push([l,0]),f[p][0]=l;else if(qd(n[1],c)&&!f[p][1]){if("LineString"!==l.geometry.L()&&"MultiLineString"!==l.geometry.L()||!f[p][0]||0!==f[p][0].index)this.g.push([l,1]),f[p][1]=l}else ma(n)in this.T&&!f[p][0]&&!f[p][1]&&
d.push([l,c])}for(g=d.length-1;0<=g;--g)this.jk.apply(this,d[g]);this.dispatchEvent(new oy("modifystart",this.i,b))}return null!==this.e}
function ry(b){b=b.coordinate;for(var c=0,d=this.g.length;c<d;++c){for(var e=this.g[c],f=e[0],g=f.depth,h=f.geometry,l=h.M(),n=f.ba,e=e[1];b.length<h.t;)b.push(0);switch(h.L()){case "Point":l=b;n[0]=n[1]=b;break;case "MultiPoint":l[f.index]=b;n[0]=n[1]=b;break;case "LineString":l[f.index+e]=b;n[e]=b;break;case "MultiLineString":l[g[0]][f.index+e]=b;n[e]=b;break;case "Polygon":l[g[0]][f.index+e]=b;n[e]=b;break;case "MultiPolygon":l[g[1]][g[0]][f.index+e]=b,n[e]=b}h.ca(l)}wy(this,b)}
function ty(b){for(var c,d=this.g.length-1;0<=d;--d)c=this.g[d][0],this.c.update(Jd(c.ba),c);this.dispatchEvent(new oy("modifyend",this.i,b));return!1}
function sy(b){var c;b.map.P().c.slice()[1]||b.type!=ek||this.l||(this.r=b.pixel,vy(this,b.pixel,b.map));if(null!==this.e&&this.X(b))if(this.D[0]!==this.r[0]||this.D[1]!==this.r[1]){this.e.Q();c=this.g;var d={},e,f,g,h,l,n,p,q,r;for(l=c.length-1;0<=l;--l)if(g=c[l],q=g[0],h=q.geometry,f=h.M(),r=ma(q.feature),q.depth&&(r+="-"+q.depth.join("-")),e=p=n=void 0,0===g[1]?(p=q,n=q.index):1==g[1]&&(e=q,n=q.index+1),r in d||(d[r]=[e,p,n]),g=d[r],m(e)&&(g[0]=e),m(p)&&(g[1]=p),m(g[0])&&m(g[1])){e=f;r=!1;p=n-
1;switch(h.L()){case "MultiLineString":f[q.depth[0]].splice(n,1);r=!0;break;case "LineString":f.splice(n,1);r=!0;break;case "MultiPolygon":e=e[q.depth[1]];case "Polygon":e=e[q.depth[0]],4<e.length&&(n==e.length-1&&(n=0),e.splice(n,1),r=!0,0===n&&(e.pop(),e.push(e[0]),p=e.length-1))}r&&(this.c.remove(g[0]),this.c.remove(g[1]),h.ca(f),f={depth:q.depth,feature:q.feature,geometry:q.geometry,index:p,ba:[g[0].ba[0],g[1].ba[1]]},this.c.ha(Jd(f.ba),f),yy(this,h,n,q.depth,-1),this.q.V().Dc(this.e),this.e=
null)}c=!0}else c=!0;return fl.call(this,b)&&!c}
function vy(b,c,d){function e(b,c){return td(f,b.ba)-td(f,c.ba)}var f=d.ma(c),g=d.ma([c[0]-b.o,c[1]+b.o]),h=d.ma([c[0]+b.o,c[1]-b.o]),g=Jd([g,h]),g=vp(b.c,g);if(0<g.length){g.sort(e);var h=g[0].ba,l=nd(f,h),n=d.ra(l);if(Math.sqrt(sd(c,n))<=b.o){c=d.ra(h[0]);d=d.ra(h[1]);c=sd(n,c);d=sd(n,d);b.R=Math.sqrt(Math.min(c,d))<=b.o;b.R&&(l=c>d?h[1]:h[0]);wy(b,l);d={};d[ma(h)]=!0;c=1;for(n=g.length;c<n;++c)if(l=g[c].ba,qd(h[0],l[0])&&qd(h[1],l[1])||qd(h[0],l[1])&&qd(h[1],l[0]))d[ma(l)]=!0;else break;b.T=d;
return}}null!==b.e&&(b.q.V().Dc(b.e),b.e=null)}
k.jk=function(b,c){for(var d=b.ba,e=b.feature,f=b.geometry,g=b.depth,h=b.index,l;c.length<f.t;)c.push(0);switch(f.L()){case "MultiLineString":l=f.M();l[g[0]].splice(h+1,0,c);break;case "Polygon":l=f.M();l[g[0]].splice(h+1,0,c);break;case "MultiPolygon":l=f.M();l[g[1]][g[0]].splice(h+1,0,c);break;case "LineString":l=f.M();l.splice(h+1,0,c);break;default:return}f.ca(l);l=this.c;l.remove(b);yy(this,f,h,g,1);var n={ba:[d[0],c],feature:e,geometry:f,depth:g,index:h};l.ha(Jd(n.ba),n);this.g.push([n,1]);
    d = {ba: [c, d[1]], feature: e, geometry: f, depth: g, index: h + 1};
    l.ha(Jd(d.ba), d);
    this.g.push([d, 0]);
    this.D = this.r
};
    function yy(b, c, d, e, f) {
        xp(b.c, c.I(), function (b) {
            b.geometry === c && (!m(e) || ib(b.depth, e)) && b.index > d && (b.index += f)
        })
    }
    function uy() {
        var b = Ll();
        return function () {
            return b.Point
        }
    }
    function zy(b, c, d, e) {
        rc.call(this, b);
        this.selected = c;
        this.deselected = d;
        this.mapBrowserEvent = e
    }
    w(zy, rc);
    function Ay(b){Sk.call(this,{handleEvent:By});b=m(b)?b:{};this.l=m(b.condition)?b.condition:$k;this.g=m(b.addCondition)?b.addCondition:ne;this.q=m(b.removeCondition)?b.removeCondition:ne;this.K=m(b.toggleCondition)?b.toggleCondition:bl;this.i=m(b.multi)?b.multi:!1;this.e=m(b.filter)?b.filter:oe;var c;if(m(b.layers))if(ka(b.layers))c=b.layers;else{var d=b.layers;c=function(b){return Ya(d,b)}}else c=oe;this.f=c;this.c=new M({source:new W({useSpatialIndex:!1,wrapX:b.wrapX}),style:m(b.style)?b.style:
Cy(),updateWhileAnimating:!0,updateWhileInteracting:!0});b=this.c.V().c;x(b,"add",this.o,!1,this);x(b,"remove",this.D,!1,this)}w(Ay,Sk);Ay.prototype.r=function(){return this.c.V().c};
function By(b){if(!this.l(b))return!0;var c=this.g(b),d=this.q(b),e=this.K(b),f=!c&&!d&&!e,g=b.map,h=this.c.V().c,l=[],n=[],p=!1;if(f)g.Ke(b.pixel,function(b,c){if(this.e(b,c))return n.push(b),!this.i},this,this.f),0<n.length&&1==h.Ib()&&h.item(0)==n[0]||(p=!0,0!==h.Ib()&&(l=Array.prototype.concat(h.b),h.clear()),h.Ze(n));else{g.Ke(b.pixel,function(b,f){-1==Ra(h.b,b)?(c||e)&&this.e(b,f)&&n.push(b):(d||e)&&l.push(b)},this,this.f);for(f=l.length-1;0<=f;--f)h.remove(l[f]);h.Ze(n);if(0<n.length||0<l.length)p=
!0}p&&this.dispatchEvent(new zy("select",n,l,b));return Zk(b)}Ay.prototype.setMap=function(b){var c=this.n,d=this.c.V().c;null===c||d.forEach(c.Ch,c);Ay.S.setMap.call(this,b);this.c.setMap(b);null===b||d.forEach(b.yh,b)};function Cy(){var b=Ll();db(b.Polygon,b.LineString);db(b.GeometryCollection,b.LineString);return function(c){return b[c.Q().L()]}}Ay.prototype.o=function(b){b=b.element;var c=this.n;null===c||c.yh(b)};Ay.prototype.D=function(b){b=b.element;var c=this.n;null===c||c.Ch(b)};function Dy(b){el.call(this,{handleEvent:Ey,handleDownEvent:oe,handleUpEvent:Fy});b=m(b)?b:{};this.i=m(b.source)?b.source:null;this.g=m(b.features)?b.features:null;this.T=[];this.r={};this.q={};this.K={};this.o={};this.D=null;this.e=m(b.pixelTolerance)?b.pixelTolerance:10;this.X=ra(Gy,this);this.c=new tp;this.R={Point:this.yl,LineString:this.Dg,LinearRing:this.Dg,Polygon:this.zl,MultiPoint:this.wl,MultiLineString:this.vl,MultiPolygon:this.xl,GeometryCollection:this.ul}}w(Dy,el);k=Dy.prototype;
k.ed=function(b,c){var d=m(c)?c:!0,e=b.Q(),f=this.R[e.L()];if(m(f)){var g=ma(b);this.K[g]=e.I(Kd());f.call(this,b,e);d&&(this.q[g]=e.s("change",ra(this.Hj,this,b),this),this.r[g]=b.s(hd(b.b),this.tl,this))}};k.Di=function(b){this.ed(b)};k.Ei=function(b){this.fd(b)};k.Bg=function(b){var c;b instanceof Cp?c=b.feature:b instanceof pg&&(c=b.element);this.ed(c)};k.Cg=function(b){var c;b instanceof Cp?c=b.feature:b instanceof pg&&(c=b.element);this.fd(c)};
k.tl=function(b){b=b.c;this.fd(b,!0);this.ed(b,!0)};k.Hj=function(b){if(this.l){var c=ma(b);c in this.o||(this.o[c]=b)}else this.Dh(b)};k.fd=function(b,c){var d=m(c)?c:!0,e=ma(b),f=this.K[e];if(f){var g=this.c,h=[];xp(g,f,function(c){b===c.feature&&h.push(c)});for(f=h.length-1;0<=f;--f)g.remove(h[f]);d&&(Wc(this.q[e]),delete this.q[e],Wc(this.r[e]),delete this.r[e])}};
k.setMap=function(b){var c=this.n,d=this.T,e;null===this.g?null===this.i||(e=this.i.Cc()):e=this.g;c&&(Sa(d,dd),d.length=0,e.forEach(this.Ei,this));Dy.S.setMap.call(this,b);b&&(null!==this.g?(d.push(this.g.s("add",this.Bg,this)),d.push(this.g.s("remove",this.Cg,this))):null!==this.i&&(d.push(this.i.s("addfeature",this.Bg,this)),d.push(this.i.s("removefeature",this.Cg,this))),e.forEach(this.Di,this))};k.nc=ne;k.Dh=function(b){this.fd(b,!1);this.ed(b,!1)};
k.ul=function(b,c){var d,e=c.d;for(d=0;d<e.length;++d)this.R[e[d].L()].call(this,b,e[d])};k.Dg=function(b,c){var d=c.M(),e,f,g,h;e=0;for(f=d.length-1;e<f;++e)g=d.slice(e,e+2),h={feature:b,ba:g},this.c.ha(Jd(g),h)};k.vl=function(b,c){var d=c.M(),e,f,g,h,l,n,p;h=0;for(l=d.length;h<l;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)n=e.slice(f,f+2),p={feature:b,ba:n},this.c.ha(Jd(n),p)};k.wl=function(b,c){var d=c.M(),e,f,g;f=0;for(g=d.length;f<g;++f)e=d[f],e={feature:b,ba:[e,e]},this.c.ha(c.I(),e)};
k.xl=function(b,c){var d=c.M(),e,f,g,h,l,n,p,q,r,t;n=0;for(p=d.length;n<p;++n)for(q=d[n],h=0,l=q.length;h<l;++h)for(e=q[h],f=0,g=e.length-1;f<g;++f)r=e.slice(f,f+2),t={feature:b,ba:r},this.c.ha(Jd(r),t)};k.yl=function(b,c){var d=c.M(),d={feature:b,ba:[d,d]};this.c.ha(c.I(),d)};k.zl=function(b,c){var d=c.M(),e,f,g,h,l,n,p;h=0;for(l=d.length;h<l;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)n=e.slice(f,f+2),p={feature:b,ba:n},this.c.ha(Jd(n),p)};
function Ey(b){var c,d,e=b.pixel,f=b.coordinate;c=b.map;var g=c.ma([e[0]-this.e,e[1]+this.e]);d=c.ma([e[0]+this.e,e[1]-this.e]);var g=Jd([g,d]),h=vp(this.c,g),l=!1,g=!1,n=null;d=null;0<h.length&&(this.D=f,h.sort(this.X),h=h[0].ba,n=nd(f,h),d=c.ra(n),Math.sqrt(sd(e,d))<=this.e&&(g=!0,e=c.ra(h[0]),f=c.ra(h[1]),e=sd(d,e),f=sd(d,f),l=Math.sqrt(Math.min(e,f))<=this.e))&&(n=e>f?h[1]:h[0],d=c.ra(n),d=[Math.round(d[0]),Math.round(d[1])]);c=n;g&&(b.coordinate=c.slice(0,2),b.pixel=d);return fl.call(this,b)}
    function Fy() {
        var b = sb(this.o);
        b.length && (Sa(b, this.Dh, this), this.o = {});
        return !1
    }
    function Gy(b, c) {
        return td(this.D, b.ba) - td(this.D, c.ba)
    }
    function Z(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.gradient;
        delete c.radius;
        delete c.blur;
        delete c.shadow;
        delete c.weight;
        M.call(this, c);
        this.d = null;
        this.R = m(b.shadow) ? b.shadow : 250;
        this.r = void 0;
        this.n = null;
        x(this, hd("gradient"), this.Ij, !1, this);
        this.sh(m(b.gradient) ? b.gradient : Hy);
        this.oh(m(b.blur) ? b.blur : 15);
        this.Fg(m(b.radius) ? b.radius : 8);
        x(this, [hd("blur"), hd("radius")], this.kg, !1, this);
        this.kg();
        var d = m(b.weight) ? b.weight : "weight", e;
        ia(d) ? e = function (b) {
            return b.get(d)
        } : e = d;
        this.e(ra(function (b) {
            b =
                e(b);b=m(b)?Vb(b,0,1):1;var c=255*b|0,d=this.n[c];m(d)||(d=[new Hl({image:new Bk({opacity:b,src:this.r})})],this.n[c]=d);return d},this));this.set("renderOrder",null);x(this,"render",this.ak,!1,this)}w(Z,M);var Hy=["#00f","#0ff","#0f0","#ff0","#f00"];k=Z.prototype;k.Rf=function(){return this.get("blur")};k.Vf=function(){return this.get("gradient")};k.Eg=function(){return this.get("radius")};
k.Ij=function(){for(var b=this.Vf(),c=Vi(1,256),d=c.createLinearGradient(0,0,1,256),e=1/(b.length-1),f=0,g=b.length;f<g;++f)d.addColorStop(f*e,b[f]);c.fillStyle=d;c.fillRect(0,0,1,256);this.d=c.getImageData(0,0,1,256).data};k.kg=function(){var b=this.Eg(),c=this.Rf(),d=b+c+1,e=2*d,e=Vi(e,e);e.shadowOffsetX=e.shadowOffsetY=this.R;e.shadowBlur=c;e.shadowColor="#000";e.beginPath();c=d-this.R;e.arc(c,c,b,0,2*Math.PI,!0);e.fill();this.r=e.canvas.toDataURL();this.n=Array(256);this.k()};
k.ak=function(b){b=b.context;var c=b.canvas,c=b.getImageData(0,0,c.width,c.height),d=c.data,e,f,g;e=0;for(f=d.length;e<f;e+=4)if(g=4*d[e+3])d[e]=this.d[g],d[e+1]=this.d[g+1],d[e+2]=this.d[g+2];b.putImageData(c,0,0)};k.oh=function(b){this.set("blur",b)};k.sh=function(b){this.set("gradient",b)};k.Fg=function(b){this.set("radius",b)};function Iy(b,c){var d=c||{},e=d.document||document,f=Og("SCRIPT"),g={nh:f,oc:void 0},h=new Ax(Jy,g),l=null,n=null!=d.timeout?d.timeout:5E3;0<n&&(l=window.setTimeout(function(){Ky(f,!0);var c=new Ly(My,"Timeout reached for loading script "+b);Cx(h);Dx(h,!1,c)},n),g.oc=l);f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||(Ky(f,d.zi||!1,l),Cx(h),Dx(h,!0,null))};f.onerror=function(){Ky(f,!0,l);var c=new Ly(Ny,"Error while loading script "+b);Cx(h);
Dx(h,!1,c)};Ig(f,{type:"text/javascript",charset:"UTF-8",src:b});Oy(e).appendChild(f);return h}function Oy(b){var c=b.getElementsByTagName("HEAD");return c&&0!=c.length?c[0]:b.documentElement}function Jy(){if(this&&this.nh){var b=this.nh;b&&"SCRIPT"==b.tagName&&Ky(b,!0,this.oc)}}function Ky(b,c,d){null!=d&&ba.clearTimeout(d);b.onload=ca;b.onerror=ca;b.onreadystatechange=ca;c&&window.setTimeout(function(){Sg(b)},0)}var Ny=0,My=1;
function Ly(b,c){var d="Jsloader error (code #"+b+")";c&&(d+=": "+c);xa.call(this,d);this.code=b}w(Ly,xa);function Py(b,c){this.b=new gt(b);this.a=c?c:"callback";this.oc=5E3}var Qy=0;
Py.prototype.send=function(b,c,d,e){b=b||null;e=e||"_"+(Qy++).toString(36)+ua().toString(36);ba._callbacks_||(ba._callbacks_={});var f=this.b.clone();if(b)for(var g in b)if(!b.hasOwnProperty||b.hasOwnProperty(g)){var h=f,l=g,n=b[g];ga(n)||(n=[String(n)]);zt(h.a,l,n)}c&&(ba._callbacks_[e]=Ry(e,c),c=this.a,g="_callbacks_."+e,ga(g)||(g=[String(g)]),zt(f.a,c,g));c=Iy(f.toString(),{timeout:this.oc,zi:!0});Gx(c,null,Sy(e,b,d),void 0);return{aa:e,Nf:c}};
    Py.prototype.cancel = function (b) {
        b && (b.Nf && b.Nf.cancel(), b.aa && Ty(b.aa, !1))
    };
    function Sy(b, c, d) {
        return function () {
            Ty(b, !1);
            d && d(c)
        }
    }
    function Ry(b, c) {
        return function (d) {
            Ty(b, !0);
            c.apply(void 0, arguments)
        }
    }
    function Ty(b, c) {
        ba._callbacks_[b] && (c ? delete ba._callbacks_[b] : ba._callbacks_[b] = ca)
    }
    function Uy(b) {
        var c = /\{z\}/g, d = /\{x\}/g, e = /\{y\}/g, f = /\{-y\}/g;
        return function (g) {
            return null === g ? void 0 : b.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function () {
                return (-g[2] - 1).toString()
            }).replace(f, function () {
                return ((1 << g[0]) + g[2]).toString()
            })
        }
    }
    function Vy(b) {
        return Wy(Ua(b, Uy))
    }
    function Wy(b) {
        return 1 === b.length ? b[0] : function (c, d, e) {
            return null === c ? void 0 : b[Wb((c[1] << c[0]) + c[2], b.length)](c, d, e)
        }
    }
    function Xy() {
    }
    function Yy(b) {
        var c = [], d = /\{(\d)-(\d)\}/.exec(b) || /\{([a-z])-([a-z])\}/.exec(b);
        if (d) {
            var e = d[2].charCodeAt(0), f;
            for (f = d[1].charCodeAt(0); f <= e; ++f) c.push(b.replace(d[0], String.fromCharCode(f)))
        } else c.push(b);
        return c
    }
    function Zy(b) {
        Rh.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            opaque: b.opaque,
            projection: b.projection,
            state: m(b.state) ? b.state : void 0,
            tileGrid: b.tileGrid,
            tilePixelRatio: b.tilePixelRatio,
            wrapX: b.wrapX
        });
        this.tileUrlFunction = m(b.tileUrlFunction) ? b.tileUrlFunction : Xy;
        this.crossOrigin = m(b.crossOrigin) ? b.crossOrigin : null;
        this.tileLoadFunction = m(b.tileLoadFunction) ? b.tileLoadFunction : $y;
        this.tileClass = m(b.tileClass) ? b.tileClass : vx
    }
    w(Zy, Rh);
    function $y(b, c) {
        b.Ma().src = c
    }
    k = Zy.prototype;
    k.Ub=function(b,c,d,e,f){var g=this.cb(b,c,d);if(yh(this.b,g))return this.b.get(g);b=[b,c,d];c=Uh(this,b,f);e=null===c?void 0:this.tileUrlFunction(c,e,f);e=new this.tileClass(b,m(e)?0:4,m(e)?e:"",this.crossOrigin,this.tileLoadFunction);x(e,"change",this.cm,!1,this);this.b.set(g,e);return e};k.Ua=function(){return this.tileLoadFunction};k.Va=function(){return this.tileUrlFunction};
k.cm=function(b){b=b.target;switch(b.state){case 1:this.dispatchEvent(new Wh("tileloadstart",b));break;case 2:this.dispatchEvent(new Wh("tileloadend",b));break;case 3:this.dispatchEvent(new Wh("tileloaderror",b))}};k.ab=function(b){this.b.clear();this.tileLoadFunction=b;this.k()};k.ya=function(b){this.b.clear();this.tileUrlFunction=b;this.k()};k.xf=function(b,c,d){b=this.cb(b,c,d);yh(this.b,b)&&this.b.get(b)};function az(b){Zy.call(this,{crossOrigin:"anonymous",opaque:!0,projection:ze("EPSG:3857"),state:"loading",tileLoadFunction:b.tileLoadFunction,wrapX:m(b.wrapX)?b.wrapX:!0});this.f=m(b.culture)?b.culture:"en-us";this.d=m(b.maxZoom)?b.maxZoom:-1;var c=new gt("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+b.imagerySet);(new Py(c,"jsonp")).send({include:"ImageryProviders",uriScheme:"https",key:b.key},ra(this.i,this))}w(az,Zy);var bz=new og({html:'<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
az.prototype.i=function(b){if(200!=b.statusCode||"OK"!=b.statusDescription||"ValidCredentials"!=b.authenticationResultCode||1!=b.resourceSets.length||1!=b.resourceSets[0].resources.length)Fh(this,"error");else{var c=b.brandLogoUri;-1==c.indexOf("https")&&(c=c.replace("http","https"));var d=b.resourceSets[0].resources[0],e=-1==this.d?d.zoomMax:this.d;b=gg(this.g);var f=Ph({extent:b,minZoom:d.zoomMin,maxZoom:e,tileSize:d.imageWidth==d.imageHeight?d.imageWidth:[d.imageWidth,d.imageHeight]});this.tileGrid=
f;var g=this.f;this.tileUrlFunction=Wy(Ua(d.imageUrlSubdomains,function(b){var c=[0,0,0],e=d.imageUrl.replace("{subdomain}",b).replace("{culture}",g);return function(b){if(null!==b)return ag(b[0],b[1],-b[2]-1,c),e.replace("{quadkey}",cg(c))}}));if(d.imageryProviders){var h=De(ze("EPSG:4326"),this.g);b=Ua(d.imageryProviders,function(b){var c=b.attribution,d={};Sa(b.coverageAreas,function(b){var c=b.zoomMin,g=Math.min(b.zoomMax,e);b=b.bbox;b=le([b[1],b[0],b[3],b[2]],h);var l,n;for(l=c;l<=g;++l)n=l.toString(),
c=ig(f,b,l),n in d?d[n].push(c):d[n]=[c]});return new og({html:c,tileRanges:d})});b.push(bz);this.e=b}this.U=c;Fh(this,"ready")}};function cz(b){W.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,projection:b.projection});this.D=void 0;this.T=m(b.distance)?b.distance:20;this.q=[];this.l=b.source;this.l.s("change",cz.prototype.ka,this)}w(cz,W);cz.prototype.X=function(){return this.l};cz.prototype.Zb=function(b,c,d){c!==this.D&&(this.clear(),this.D=c,this.l.Zb(b,c,d),dz(this),this.rc(this.q))};cz.prototype.ka=function(){this.clear();dz(this);this.rc(this.q);this.k()};
    function dz(b) {
        if (m(b.D)) {
            b.q.length = 0;
            for (var c = Kd(), d = b.T * b.D, e = b.l.Cc(), f = {}, g = 0, h = e.length; g < h; g++) {
                var l = e[g];
                ub(f, ma(l).toString()) || (l = l.Q().M(), Vd(l, c), Od(c, d, c), l = b.l.Qe(c), l = Ta(l, function (b) {
                    b = ma(b).toString();
                    return b in f ? !1 : f[b] = !0
                }), b.q.push(ez(l)))
            }
        }
    }
    function ez(b) {
        for (var c = b.length, d = [0, 0], e = 0; e < c; e++) {
            var f = b[e].Q().M();
            md(d, f)
        }
        c = 1 / c;
        d[0] *= c;
        d[1] *= c;
        d = new yn(new C(d));
        d.set("features", b);
        return d
    }
    function fz(b) {
        qn.call(this, {projection: b.projection, resolutions: b.resolutions});
        this.R = m(b.crossOrigin) ? b.crossOrigin : null;
        this.f = m(b.displayDpi) ? b.displayDpi : 96;
        this.d = m(b.params) ? b.params : {};
        var c;
        m(b.url) ? c = xx(b.url, this.d, ra(this.Jl, this)) : c = yx;
        this.D = c;
        this.b = m(b.imageLoadFunction) ? b.imageLoadFunction : wn;
        this.T = m(b.hidpi) ? b.hidpi : !0;
        this.K = m(b.metersPerUnit) ? b.metersPerUnit : 1;
        this.l = m(b.ratio) ? b.ratio : 1;
        this.X = m(b.useOverlay) ? b.useOverlay : !1;
        this.c = null;
        this.q = 0
    }
    w(fz, qn);
    k = fz.prototype;
    k.Il=function(){return this.d};k.Bc=function(b,c,d,e){c=rn(this,c);d=this.T?d:1;var f=this.c;if(null!==f&&this.q==this.a&&f.resolution==c&&f.e==d&&Td(f.I(),b))return f;1!=this.l&&(b=b.slice(),ke(b,this.l));e=this.D(b,[ie(b)/c*d,fe(b)/c*d],e);m(e)?(f=new ux(b,c,d,this.e,e,this.R,this.b),x(f,"change",this.i,!1,this)):f=null;this.c=f;this.q=this.a;return f};k.Hl=function(){return this.b};k.Ll=function(b){Fb(this.d,b);this.k()};
k.Jl=function(b,c,d,e){var f;f=this.K;var g=ie(d),h=fe(d),l=e[0],n=e[1],p=.0254/this.f;f=n*g>l*h?g*f/(l*p):h*f/(n*p);d=de(d);e={OPERATION:this.X?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol.source.ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.f,SETDISPLAYWIDTH:Math.round(e[0]),SETDISPLAYHEIGHT:Math.round(e[1]),SETVIEWSCALE:f,SETVIEWCENTERX:d[0],SETVIEWCENTERY:d[1]};Fb(e,c);return jo(lo([b],e))};k.Kl=function(b){this.c=null;this.b=b;this.k()};function gz(b){var c=m(b.attributions)?b.attributions:null,d=b.imageExtent,e,f;m(b.imageSize)&&(e=fe(d)/b.imageSize[1],f=[e]);var g=m(b.crossOrigin)?b.crossOrigin:null,h=m(b.imageLoadFunction)?b.imageLoadFunction:wn;qn.call(this,{attributions:c,logo:b.logo,projection:ze(b.projection),resolutions:f});this.b=new ux(d,e,1,c,b.url,g,h);x(this.b,"change",this.i,!1,this)}w(gz,qn);gz.prototype.Bc=function(b){return he(b,this.b.I())?this.b:null};function hz(b){b=m(b)?b:{};qn.call(this,{attributions:b.attributions,logo:b.logo,projection:b.projection,resolutions:b.resolutions});this.T=m(b.crossOrigin)?b.crossOrigin:null;this.d=b.url;this.l=m(b.imageLoadFunction)?b.imageLoadFunction:wn;this.c=b.params;this.f=!0;iz(this);this.R=b.serverType;this.X=m(b.hidpi)?b.hidpi:!0;this.b=null;this.q=[0,0];this.K=0;this.D=m(b.ratio)?b.ratio:1.5}w(hz,qn);var jz=[101,101];k=hz.prototype;
k.Rl=function(b,c,d,e){if(m(this.d)){var f=ee(b,c,0,jz),g={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.c.LAYERS};Fb(g,this.c,e);e=Math.floor((f[3]-b[1])/c);g[this.f?"I":"X"]=Math.floor((b[0]-f[0])/c);g[this.f?"J":"Y"]=e;return kz(this,f,jz,1,ze(d),g)}};k.Tl=function(){return this.c};
k.Bc=function(b,c,d,e){if(!m(this.d))return null;c=rn(this,c);1==d||this.X&&m(this.R)||(d=1);var f=this.b;if(null!==f&&this.K==this.a&&f.resolution==c&&f.e==d&&Td(f.I(),b))return f;f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};Fb(f,this.c);b=b.slice();var g=(b[0]+b[2])/2,h=(b[1]+b[3])/2;if(1!=this.D){var l=this.D*ie(b)/2,n=this.D*fe(b)/2;b[0]=g-l;b[1]=h-n;b[2]=g+l;b[3]=h+n}var l=c/d,n=Math.ceil(ie(b)/l),p=Math.ceil(fe(b)/l);b[0]=g-l*n/2;b[2]=g+l*n/2;b[1]=h-l*
p/2;b[3]=h+l*p/2;this.q[0]=n;this.q[1]=p;e=kz(this,b,this.q,d,e,f);this.b=new ux(b,c,d,this.e,e,this.T,this.l);this.K=this.a;x(this.b,"change",this.i,!1,this);return this.b};k.Sl=function(){return this.l};
function kz(b,c,d,e,f,g){g[b.f?"CRS":"SRS"]=f.a;"STYLES"in b.c||(g.STYLES=String(""));if(1!=e)switch(b.R){case "geoserver":e=90*e+.5|0;g.FORMAT_OPTIONS=m(g.FORMAT_OPTIONS)?g.FORMAT_OPTIONS+(";dpi:"+e):"dpi:"+e;break;case "mapserver":g.MAP_RESOLUTION=90*e;break;case "carmentaserver":case "qgis":g.DPI=90*e}g.WIDTH=d[0];g.HEIGHT=d[1];d=f.d;var h;b.f&&"ne"==d.substr(0,2)?h=[c[1],c[0],c[3],c[2]]:h=c;g.BBOX=h.join(",");return jo(lo([b.d],g))}k.Ul=function(){return this.d};
    k.Vl = function (b) {
        this.b = null;
        this.l = b;
        this.k()
    };
    k.Wl = function (b) {
        b != this.d && (this.d = b, this.b = null, this.k())
    };
    k.Xl = function (b) {
        Fb(this.c, b);
        iz(this);
        this.b = null;
        this.k()
    };
    function iz(b) {
        b.f = 0 <= Oa(Ab(b.c, "VERSION", "1.3.0"), "1.3")
    }
    function lz(b) {
        var c = m(b.projection) ? b.projection : "EPSG:3857",
            d = m(b.tileGrid) ? b.tileGrid : Ph({extent: gg(c), maxZoom: b.maxZoom, tileSize: b.tileSize});
        Zy.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: c,
            tileGrid: d,
            tileLoadFunction: b.tileLoadFunction,
            tilePixelRatio: b.tilePixelRatio,
            tileUrlFunction: Xy,
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        m(b.tileUrlFunction) ? this.ya(b.tileUrlFunction) : m(b.urls) ? this.ya(Vy(b.urls)) : m(b.url) && this.d(b.url)
    }
    w(lz, Zy);
    lz.prototype.d = function (b) {
        this.ya(Vy(Yy(b)))
    };
    function mz(b) {
        b = m(b) ? b : {};
        var c;
        m(b.attributions) ? c = b.attributions : c = [nz];
        lz.call(this, {
            attributions: c,
            crossOrigin: m(b.crossOrigin) ? b.crossOrigin : "anonymous",
            opaque: !0,
            maxZoom: m(b.maxZoom) ? b.maxZoom : 19,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: b.wrapX
        })
    }
    w(mz, lz);
    var nz = new og({html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});
    function oz(b) {
        b = m(b) ? b : {};
        var c = pz[b.layer];
        this.f = b.layer;
        lz.call(this, {
            attributions: c.attributions,
            crossOrigin: "anonymous",
            logo: "https://developer.mapquest.com/content/osm/mq_logo.png",
            maxZoom: c.maxZoom,
            opaque: !0,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : "https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + this.f + "/{z}/{x}/{y}.jpg"
        })
    }
    w(oz, lz);
    var qz=new og({html:'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'}),pz={osm:{maxZoom:19,attributions:[qz,nz]},sat:{maxZoom:18,attributions:[qz,new og({html:"Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]},hyb:{maxZoom:18,attributions:[qz,nz]}};oz.prototype.i=function(){return this.f};var rz={terrain:{Sa:"jpg",opaque:!0},"terrain-background":{Sa:"jpg",opaque:!0},"terrain-labels":{Sa:"png",opaque:!1},"terrain-lines":{Sa:"png",opaque:!1},"toner-background":{Sa:"png",opaque:!0},toner:{Sa:"png",opaque:!0},"toner-hybrid":{Sa:"png",opaque:!1},"toner-labels":{Sa:"png",opaque:!1},"toner-lines":{Sa:"png",opaque:!1},"toner-lite":{Sa:"png",opaque:!0},watercolor:{Sa:"jpg",opaque:!0}},sz={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:3,maxZoom:16}};
function tz(b){var c=b.layer.indexOf("-"),d=rz[b.layer];lz.call(this,{attributions:uz,crossOrigin:"anonymous",maxZoom:sz[-1==c?b.layer:b.layer.slice(0,c)].maxZoom,opaque:d.opaque,tileLoadFunction:b.tileLoadFunction,url:m(b.url)?b.url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/"+b.layer+"/{z}/{x}/{y}."+d.Sa})}w(tz,lz);var uz=[new og({html:'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}),nz];function vz(b){b=m(b)?b:{};var c=m(b.params)?b.params:{};Zy.call(this,{attributions:b.attributions,logo:b.logo,projection:b.projection,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction,tileUrlFunction:ra(this.am,this),wrapX:m(b.wrapX)?b.wrapX:!0});var d=b.urls;!m(d)&&m(b.url)&&(d=Yy(b.url));this.f=null!=d?d:[];this.d=c;this.i=Kd()}w(vz,Zy);k=vz.prototype;k.Yl=function(){return this.d};k.Vb=function(b,c,d){b=vz.S.Vb.call(this,b,c,d);return 1==c?b:kd(b,c,this.c)};k.Zl=function(){return this.f};
k.$l=function(b){b=m(b)?Yy(b):null;this.Kg(b)};k.Kg=function(b){this.f=null!=b?b:[];this.k()};
k.am=function(b,c,d){var e=this.tileGrid;null===e&&(e=Th(this,d));if(!(e.a.length<=b[0])){var f=Kh(e,b,this.i),g=ld(e.Ca(b[0]),this.c);1!=c&&(g=kd(g,c,this.c));e={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};Fb(e,this.d);var h=this.f;0==h.length?b=void 0:(d=d.a.split(":").pop(),e.SIZE=g[0]+","+g[1],e.BBOX=f.join(","),e.BBOXSR=d,e.IMAGESR=d,e.DPI=Math.round(90*c),b=1==h.length?h[0]:h[Wb((b[1]<<b[0])+b[2],h.length)],Aa(b,"/")||(b+="/"),Aa(b,"MapServer/")?b+="export":Aa(b,"ImageServer/")&&(b+="exportImage"),
b=jo(lo([b],e)));return b}};k.bm=function(b){Fb(this.d,b);this.k()};function wz(b,c,d){Bh.call(this,b,2);this.d=c;this.c=d;this.b={}}w(wz,Bh);wz.prototype.Ma=function(b){b=m(b)?ma(b):-1;if(b in this.b)return this.b[b];var c=this.d,d=Vi(c[0],c[1]);d.strokeStyle="black";d.strokeRect(.5,.5,c[0]+.5,c[1]+.5);d.fillStyle="black";d.textAlign="center";d.textBaseline="middle";d.font="24px sans-serif";d.fillText(this.c,c[0]/2,c[1]/2);return this.b[b]=d.canvas};function xz(b){Rh.call(this,{opaque:!1,projection:b.projection,tileGrid:b.tileGrid,wrapX:m(b.wrapX)?b.wrapX:!0})}
w(xz,Rh);xz.prototype.Ub=function(b,c,d){var e=this.cb(b,c,d);if(yh(this.b,e))return this.b.get(e);var f=ld(this.tileGrid.Ca(b));b=[b,c,d];c=Uh(this,b);c=null===c?"":dg(Uh(this,c));f=new wz(b,f,c);this.b.set(e,f);return f};function yz(b){Zy.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,projection:ze("EPSG:3857"),state:"loading",tileLoadFunction:b.tileLoadFunction,wrapX:m(b.wrapX)?b.wrapX:!0});(new Py(b.url)).send(void 0,ra(this.d,this))}w(yz,Zy);
yz.prototype.d=function(b){var c=ze("EPSG:4326"),d=this.g,e;m(b.bounds)&&(e=le(b.bounds,De(c,d)));var f=b.minzoom||0,g=b.maxzoom||22;this.tileGrid=d=Ph({extent:gg(d),maxZoom:g,minZoom:f});this.tileUrlFunction=Vy(b.tiles);if(m(b.attribution)&&null===this.e){c=m(e)?e:c.I();e={};for(var h;f<=g;++f)h=f.toString(),e[h]=[ig(d,c,f)];this.e=[new og({html:b.attribution,tileRanges:e})]}Fh(this,"ready")};function zz(b){Rh.call(this,{projection:ze("EPSG:3857"),state:"loading"});this.i=m(b.preemptive)?b.preemptive:!0;this.d=Xy;this.f=void 0;(new Py(b.url)).send(void 0,ra(this.dm,this))}w(zz,Rh);k=zz.prototype;k.rj=function(){return this.f};k.Ci=function(b,c,d,e,f){null===this.tileGrid?!0===f?qi(function(){d.call(e,null)}):d.call(e,null):(c=this.tileGrid.cd(b,c),Az(this.Ub(c[0],c[1],c[2],1,this.g),b,d,e,f))};
k.dm=function(b){var c=ze("EPSG:4326"),d=this.g,e;m(b.bounds)&&(e=le(b.bounds,De(c,d)));var f=b.minzoom||0,g=b.maxzoom||22;this.tileGrid=d=Ph({extent:gg(d),maxZoom:g,minZoom:f});this.f=b.template;var h=b.grids;if(null!=h){this.d=Vy(h);if(m(b.attribution)){c=m(e)?e:c.I();for(e={};f<=g;++f)h=f.toString(),e[h]=[ig(d,c,f)];this.e=[new og({html:b.attribution,tileRanges:e})]}Fh(this,"ready")}else Fh(this,"error")};
k.Ub=function(b,c,d,e,f){var g=this.cb(b,c,d);if(yh(this.b,g))return this.b.get(g);b=[b,c,d];c=Uh(this,b,f);e=this.d(c,e,f);e=new Bz(b,m(e)?0:4,m(e)?e:"",Kh(this.tileGrid,b),this.i);this.b.set(g,e);return e};k.xf=function(b,c,d){b=this.cb(b,c,d);yh(this.b,b)&&this.b.get(b)};function Bz(b,c,d,e,f){Bh.call(this,b,c);this.g=d;this.b=e;this.i=f;this.d=this.e=this.c=null}w(Bz,Bh);k=Bz.prototype;k.Ma=function(){return null};
function Cz(b,c){if(null===b.c||null===b.e||null==b.d)return null;var d=b.c[Math.floor((1-(c[1]-b.b[1])/(b.b[3]-b.b[1]))*b.c.length)];if(!ia(d))return null;d=d.charCodeAt(Math.floor((c[0]-b.b[0])/(b.b[2]-b.b[0])*d.length));93<=d&&d--;35<=d&&d--;d=b.e[d-32];return null!=d?b.d[d]:null}function Az(b,c,d,e,f){0==b.state&&!0===f?(Uc(b,"change",function(){d.call(e,Cz(this,c))},!1,b),Dz(b)):!0===f?qi(function(){d.call(e,Cz(this,c))},b):d.call(e,Cz(b,c))}k.hb=function(){return this.g};
k.Gj=function(){this.state=3;Ch(this)};k.Qj=function(b){this.c=b.grid;this.e=b.keys;this.d=b.data;this.state=4;Ch(this)};function Dz(b){0==b.state&&(b.state=1,(new Py(b.g)).send(void 0,ra(b.Qj,b),ra(b.Gj,b)))}k.load=function(){this.i&&Dz(this)};function Ez(b){W.call(this,{attributions:b.attributions,logo:b.logo,projection:void 0,state:"ready",wrapX:b.wrapX});this.X=m(b.format)?b.format:null;this.q=b.tileGrid;this.D=Xy;this.T=m(b.tileLoadFunction)?b.tileLoadFunction:null;this.l={};m(b.tileUrlFunction)?(this.D=b.tileUrlFunction,this.k()):m(b.urls)?(this.D=Vy(b.urls),this.k()):m(b.url)&&(this.D=Vy(Yy(b.url)),this.k())}w(Ez,W);k=Ez.prototype;k.clear=function(){yb(this.l)};
function Fz(b,c,d,e){var f=b.l;b=b.q.cd(c,d);f=f[b[0]+"/"+b[1]+"/"+b[2]];if(m(f))for(b=0,d=f.length;b<d;++b){var g=f[b];if(g.Q().Ge(c)&&e.call(void 0,g))break}}k.Ab=function(b,c,d,e){var f=this.q,g=this.l;c=Oh(f,c);b=ig(f,b,c);for(var h,f=b.a;f<=b.d;++f)for(h=b.b;h<=b.c;++h){var l=g[c+"/"+f+"/"+h];if(m(l)){var n,p;n=0;for(p=l.length;n<p;++n){var q=d.call(e,l[n]);if(q)return q}}}};k.Cc=function(){var b=this.l,c=[],d;for(d in b)db(c,b[d]);return c};
k.Ri=function(b,c){var d=[];Fz(this,b,c,function(b){d.push(b)});return d};function Gz(b,c,d){var e=b.q;b.r&&d.c&&(c=eg(c,e,d));return hg(c,e)?c:null}k.Zb=function(b,c,d){function e(b,c){h[b]=c;this.k()}var f=this.q,g=this.D,h=this.l,l=Oh(f,c),f=ig(f,b,l),n=[l,0,0],p,q;for(p=f.a;p<=f.d;++p)for(q=f.b;q<=f.c;++q){var r=l+"/"+p+"/"+q;if(!(r in h)){n[1]=p;n[2]=q;var t=Gz(this,n,d),t=null===t?void 0:g(t,1,d);m(t)&&(h[r]=[],r=ta(e,r),null===this.T?pp(t,this.X,r).call(this,b,c,d):this.T(t,ra(r,this)))}}};function Hz(b){b=m(b)?b:{};var c=m(b.params)?b.params:{};Zy.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,opaque:!Ab(c,"TRANSPARENT",!0),projection:b.projection,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction,tileUrlFunction:ra(this.im,this),wrapX:m(b.wrapX)?b.wrapX:!0});var d=b.urls;!m(d)&&m(b.url)&&(d=Yy(b.url));this.f=null!=d?d:[];this.n=m(b.gutter)?b.gutter:0;this.d=c;this.i=!0;this.l=b.serverType;this.D=m(b.hidpi)?b.hidpi:!0;this.q="";Iz(this);this.K=Kd();
Jz(this)}w(Hz,Zy);k=Hz.prototype;
k.em=function(b,c,d,e){d=ze(d);var f=this.tileGrid;null===f&&(f=Th(this,d));c=f.cd(b,c);if(!(f.a.length<=c[0])){var g=f.na(c[0]),h=Kh(f,c,this.K),f=ld(f.Ca(c[0]),this.c),l=this.n;0!==l&&(f=jd(f,l,this.c),h=Od(h,g*l,h));l={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.d.LAYERS};Fb(l,this.d,e);e=Math.floor((h[3]-b[1])/g);l[this.i?"I":"X"]=Math.floor((b[0]-h[0])/g);l[this.i?"J":"Y"]=e;return Kz(this,c,f,h,1,d,l)}};k.Cd=function(){return this.n};
k.cb=function(b,c,d){return this.q+Hz.S.cb.call(this,b,c,d)};k.fm=function(){return this.d};
function Kz(b,c,d,e,f,g,h){var l=b.f;if(0!=l.length){h.WIDTH=d[0];h.HEIGHT=d[1];h[b.i?"CRS":"SRS"]=g.a;"STYLES"in b.d||(h.STYLES=String(""));if(1!=f)switch(b.l){case "geoserver":d=90*f+.5|0;h.FORMAT_OPTIONS=m(h.FORMAT_OPTIONS)?h.FORMAT_OPTIONS+(";dpi:"+d):"dpi:"+d;break;case "mapserver":h.MAP_RESOLUTION=90*f;break;case "carmentaserver":case "qgis":h.DPI=90*f}g=g.d;b.i&&"ne"==g.substr(0,2)&&(b=e[0],e[0]=e[1],e[1]=b,b=e[2],e[2]=e[3],e[3]=b);h.BBOX=e.join(",");return jo(lo([1==l.length?l[0]:l[Wb((c[1]<<
c[0])+c[2],l.length)]],h))}}k.Vb=function(b,c,d){b=Hz.S.Vb.call(this,b,c,d);return 1!=c&&this.D&&m(this.l)?kd(b,c,this.c):b};k.gm=function(){return this.f};function Iz(b){var c=0,d=[],e,f;e=0;for(f=b.f.length;e<f;++e)d[c++]=b.f[e];for(var g in b.d)d[c++]=g+"-"+b.d[g];b.q=d.join("#")}k.hm=function(b){b=m(b)?Yy(b):null;this.Lg(b)};k.Lg=function(b){this.f=null!=b?b:[];Iz(this);this.k()};
    k.im = function (b, c, d) {
        var e = this.tileGrid;
        null === e && (e = Th(this, d));
        if (!(e.a.length <= b[0])) {
            1 == c || this.D && m(this.l) || (c = 1);
            var f = e.na(b[0]), g = Kh(e, b, this.K), e = ld(e.Ca(b[0]), this.c), h = this.n;
            0 !== h && (e = jd(e, h, this.c), g = Od(g, f * h, g));
            1 != c && (e = kd(e, c, this.c));
            f = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
            Fb(f, this.d);
            return Kz(this, b, e, g, c, d, f)
        }
    };
    k.jm = function (b) {
        Fb(this.d, b);
        Iz(this);
        Jz(this);
        this.k()
    };
    function Jz(b) {
        b.i = 0 <= Oa(Ab(b.d, "VERSION", "1.3.0"), "1.3")
    }
    function Lz(b) {
        this.g = b.matrixIds;
        Gh.call(this, {
            extent: b.extent,
            origin: b.origin,
            origins: b.origins,
            resolutions: b.resolutions,
            tileSize: b.tileSize,
            tileSizes: b.tileSizes,
            sizes: b.sizes
        })
    }
    w(Lz, Gh);
    Lz.prototype.p = function () {
        return this.g
    };
    function Mz(b,c){var d=[],e=[],f=[],g=[],h=[],l;l=ze(b.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var n=l.Fd(),p="ne"==l.d.substr(0,2);gb(b.TileMatrix,function(b,c){return c.ScaleDenominator-b.ScaleDenominator});Sa(b.TileMatrix,function(b){e.push(b.Identifier);var c=2.8E-4*b.ScaleDenominator/n,l=b.TileWidth,v=b.TileHeight;p?f.push([b.TopLeftCorner[1],b.TopLeftCorner[0]]):f.push(b.TopLeftCorner);d.push(c);g.push(l==v?l:[l,v]);h.push([b.MatrixWidth,-b.MatrixHeight])});return new Lz({extent:c,
    origins: f, resolutions: d, matrixIds: e, tileSizes: g, sizes: h
})
}
    function Nz(b) {
        function c(b) {
            b = "KVP" == e ? jo(lo([b], g)) : b.replace(/\{(\w+?)\}/g, function (b, c) {
                return c.toLowerCase() in g ? g[c.toLowerCase()] : b
            });
            return function (c) {
                if (null !== c) {
                    var d = {TileMatrix: f.g[c[0]], TileCol: c[1], TileRow: -c[2] - 1};
                    Fb(d, h);
                    c = b;
                    return c = "KVP" == e ? jo(lo([c], d)) : c.replace(/\{(\w+?)\}/g, function (b, c) {
                        return d[c]
                    })
                }
            }
        }
        this.K = m(b.version) ? b.version : "1.0.0";
        this.l = m(b.format) ? b.format : "image/jpeg";
        this.d = m(b.dimensions) ? b.dimensions : {};
        this.n = "";
        Oz(this);
        this.q = b.layer;
        this.i = b.matrixSet;
        this.D=b.style;var d=b.urls;!m(d)&&m(b.url)&&(d=Yy(b.url));this.f=null!=d?d:[];var e=this.R=m(b.requestEncoding)?b.requestEncoding:"KVP",f=b.tileGrid,g={layer:this.q,style:this.D,tilematrixset:this.i};"KVP"==e&&Fb(g,{Service:"WMTS",Request:"GetTile",Version:this.K,Format:this.l});var h=this.d,d=0<this.f.length?Wy(Ua(this.f,c)):Xy;Zy.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,projection:b.projection,tileClass:b.tileClass,tileGrid:f,tileLoadFunction:b.tileLoadFunction,
tilePixelRatio:b.tilePixelRatio,tileUrlFunction:d,wrapX:m(b.wrapX)?b.wrapX:!1})}w(Nz,Zy);k=Nz.prototype;k.Pi=function(){return this.d};k.Ti=function(){return this.l};k.cb=function(b,c,d){return this.n+Nz.S.cb.call(this,b,c,d)};k.km=function(){return this.q};k.ej=function(){return this.i};k.pj=function(){return this.R};k.lm=function(){return this.D};k.mm=function(){return this.f};k.vj=function(){return this.K};function Oz(b){var c=0,d=[],e;for(e in b.d)d[c++]=e+"-"+b.d[e];b.n=d.join("/")}
k.jo=function(b){Fb(this.d,b);Oz(this);this.k()};function Pz(b){b=m(b)?b:{};var c=b.size,d=c[0],e=c[1],f=[],g=256;switch(m(b.tierSizeCalculation)?b.tierSizeCalculation:"default"){case "default":for(;d>g||e>g;)f.push([Math.ceil(d/g),Math.ceil(e/g)]),g+=g;break;case "truncated":for(;d>g||e>g;)f.push([Math.ceil(d/g),Math.ceil(e/g)]),d>>=1,e>>=1}f.push([1,1]);f.reverse();for(var g=[1],h=[0],e=1,d=f.length;e<d;e++)g.push(1<<e),h.push(f[e-1][0]*f[e-1][1]+h[e-1]);g.reverse();var c=[0,-c[1],c[0],0],c=new Gh({extent:c,origin:ce(c),resolutions:g}),l=b.url;
Zy.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,tileClass:Qz,tileGrid:c,tileUrlFunction:function(b){if(null!==b){var c=b[0],d=b[1];b=-b[2]-1;return l+"TileGroup"+((d+b*f[c][0]+h[c])/256|0)+"/"+c+"-"+d+"-"+b+".jpg"}}})}w(Pz,Zy);function Qz(b,c,d,e,f){vx.call(this,b,c,d,e,f);this.d={}}w(Qz,vx);
Qz.prototype.Ma=function(b){var c=m(b)?ma(b).toString():"";if(c in this.d)return this.d[c];b=Qz.S.Ma.call(this,b);if(2==this.state){if(256==b.width&&256==b.height)return this.d[c]=b;var d=Vi(256,256);d.drawImage(b,0,0);return this.d[c]=d.canvas}return b};function Rz(b){b=m(b)?b:{};this.b=m(b.initialSize)?b.initialSize:256;this.c=m(b.maxSize)?b.maxSize:m(va)?va:2048;this.a=m(b.space)?b.space:1;this.e=[new Sz(this.b,this.a)];this.d=this.b;this.f=[new Sz(this.d,this.a)]}Rz.prototype.add=function(b,c,d,e,f,g){if(c+this.a>this.c||d+this.a>this.c)return null;e=Tz(this,!1,b,c,d,e,g);if(null===e)return null;b=Tz(this,!0,b,c,d,m(f)?f:pe,g);return{offsetX:e.offsetX,offsetY:e.offsetY,image:e.image,lg:b.image}};
function Tz(b,c,d,e,f,g,h){var l=c?b.f:b.e,n,p,q;p=0;for(q=l.length;p<q;++p){n=l[p];n=n.add(d,e,f,g,h);if(null!==n)return n;null===n&&p===q-1&&(c?(n=Math.min(2*b.d,b.c),b.d=n):(n=Math.min(2*b.b,b.c),b.b=n),n=new Sz(n,b.a),l.push(n),++q)}}function Sz(b,c){this.a=c;this.b=[{x:0,y:0,width:b,height:b}];this.d={};this.c=Og("CANVAS");this.c.width=b;this.c.height=b;this.e=this.c.getContext("2d")}Sz.prototype.get=function(b){return Ab(this.d,b,null)};
Sz.prototype.add=function(b,c,d,e,f){var g,h,l;h=0;for(l=this.b.length;h<l;++h)if(g=this.b[h],g.width>=c+this.a&&g.height>=d+this.a)return l={offsetX:g.x+this.a,offsetY:g.y+this.a,image:this.c},this.d[b]=l,e.call(f,this.e,g.x+this.a,g.y+this.a),b=h,c=c+this.a,d=d+this.a,f=e=void 0,g.width-c>g.height-d?(e={x:g.x+c,y:g.y,width:g.width-c,height:g.height},f={x:g.x,y:g.y+d,width:c,height:g.height-d},Uz(this,b,e,f)):(e={x:g.x+c,y:g.y,width:g.width-c,height:d},f={x:g.x,y:g.y+d,width:g.width,height:g.height-
d
}, Uz(this, b, e, f)), l;
    return null
};
    function Uz(b, c, d, e) {
        c = [c, 1];
        0 < d.width && 0 < d.height && c.push(d);
        0 < e.width && 0 < e.height && c.push(e);
        b.b.splice.apply(b.b, c)
    }
    function Vz(b) {
        this.l = this.d = this.e = null;
        this.i = m(b.fill) ? b.fill : null;
        this.D = [0, 0];
        this.a = b.points;
        this.c = m(b.radius) ? b.radius : b.radius1;
        this.f = m(b.radius2) ? b.radius2 : this.c;
        this.g = m(b.angle) ? b.angle : 0;
        this.b = m(b.stroke) ? b.stroke : null;
        this.q = this.K = this.W = null;
        var c = b.atlasManager, d = "", e = "", f = 0, g = null, h, l = 0;
        null !== this.b && (h = xg(this.b.a), l = this.b.b, m(l) || (l = 1), g = this.b.c, dj || (g = null), e = this.b.e, m(e) || (e = "round"), d = this.b.d, m(d) || (d = "round"), f = this.b.f, m(f) || (f = 10));
        var n = 2 * (this.c + l) + 1, d = {
            strokeStyle: h,
            md:l,size:n,lineCap:d,lineDash:g,lineJoin:e,miterLimit:f};if(m(c)){var n=Math.round(n),e=null===this.i,p;e&&(p=ra(this.Og,this,d));f=this.sb();p=c.add(f,n,n,ra(this.Pg,this,d),p);this.d=p.image;this.D=[p.offsetX,p.offsetY];c=p.image.width;this.l=e?p.lg:this.d}else this.d=Og("CANVAS"),this.d.height=n,this.d.width=n,c=n=this.d.width,p=this.d.getContext("2d"),this.Pg(d,p,0,0),null===this.i?(p=this.l=Og("CANVAS"),p.height=d.size,p.width=d.size,p=p.getContext("2d"),this.Og(d,p,0,0)):this.l=this.d;this.W=
[n/2,n/2];this.K=[n,n];this.q=[c,c];Ak.call(this,{opacity:1,rotateWithView:!1,rotation:m(b.rotation)?b.rotation:0,scale:1,snapToPixel:m(b.snapToPixel)?b.snapToPixel:!0})}w(Vz,Ak);k=Vz.prototype;k.rb=function(){return this.W};k.rm=function(){return this.g};k.sm=function(){return this.i};k.ee=function(){return this.l};k.Kb=function(){return this.d};k.Dd=function(){return this.q};k.hd=function(){return 2};k.wb=function(){return this.D};k.tm=function(){return this.a};k.um=function(){return this.c};
k.oj=function(){return this.f};k.Ya=function(){return this.K};k.vm=function(){return this.b};k.Ye=ca;k.load=ca;k.wf=ca;
k.Pg=function(b,c,d,e){var f;c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();this.f!==this.c&&(this.a*=2);for(d=0;d<=this.a;d++)e=2*d*Math.PI/this.a-Math.PI/2+this.g,f=0===d%2?this.c:this.f,c.lineTo(b.size/2+f*Math.cos(e),b.size/2+f*Math.sin(e));null!==this.i&&(c.fillStyle=xg(this.i.a),c.fill());null!==this.b&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.md,null===b.lineDash||c.setLineDash(b.lineDash),c.lineCap=b.lineCap,c.lineJoin=b.lineJoin,c.miterLimit=b.miterLimit,c.stroke());c.closePath()};
k.Og=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();this.f!==this.c&&(this.a*=2);var f;for(d=0;d<=this.a;d++)f=2*d*Math.PI/this.a-Math.PI/2+this.g,e=0===d%2?this.c:this.f,c.lineTo(b.size/2+e*Math.cos(f),b.size/2+e*Math.sin(f));c.fillStyle=Cl;c.fill();null!==this.b&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.md,null===b.lineDash||c.setLineDash(b.lineDash),c.stroke());c.closePath()};
k.sb=function(){var b=null===this.b?"-":this.b.sb(),c=null===this.i?"-":this.i.sb();if(null===this.e||b!=this.e[1]||c!=this.e[2]||this.c!=this.e[3]||this.f!=this.e[4]||this.g!=this.e[5]||this.a!=this.e[6])this.e=["r"+b+c+(m(this.c)?this.c.toString():"-")+(m(this.f)?this.f.toString():"-")+(m(this.g)?this.g.toString():"-")+(m(this.a)?this.a.toString():"-"),b,c,this.c,this.f,this.g,this.a];return this.e[0]};u("ol.animation.bounce",function(b){var c=b.resolution,d=m(b.start)?b.start:ua(),e=m(b.duration)?b.duration:1E3,f=m(b.easing)?b.easing:Xf;return function(b,h){if(h.time<d)return h.animate=!0,h.viewHints[0]+=1,!0;if(h.time<d+e){var l=f((h.time-d)/e),n=c-h.viewState.resolution;h.animate=!0;h.viewState.resolution+=l*n;h.viewHints[0]+=1;return!0}return!1}},OPENLAYERS);u("ol.animation.pan",Yf,OPENLAYERS);u("ol.animation.rotate",Zf,OPENLAYERS);u("ol.animation.zoom",$f,OPENLAYERS);
u("ol.Attribution",og,OPENLAYERS);og.prototype.getHTML=og.prototype.c;pg.prototype.element=pg.prototype.element;u("ol.Collection",qg,OPENLAYERS);qg.prototype.clear=qg.prototype.clear;qg.prototype.extend=qg.prototype.Ze;qg.prototype.forEach=qg.prototype.forEach;qg.prototype.getArray=qg.prototype.Bk;qg.prototype.item=qg.prototype.item;qg.prototype.getLength=qg.prototype.Ib;qg.prototype.insertAt=qg.prototype.Rd;qg.prototype.pop=qg.prototype.pop;qg.prototype.push=qg.prototype.push;
qg.prototype.remove=qg.prototype.remove;qg.prototype.removeAt=qg.prototype.rf;qg.prototype.setAt=qg.prototype.Jn;u("ol.coordinate.add",md,OPENLAYERS);u("ol.coordinate.createStringXY",function(b){return function(c){return ud(c,b)}},OPENLAYERS);u("ol.coordinate.format",pd,OPENLAYERS);u("ol.coordinate.rotate",rd,OPENLAYERS);u("ol.coordinate.toStringHDMS",function(b){return m(b)?od(b[1],"NS")+" "+od(b[0],"EW"):""},OPENLAYERS);u("ol.coordinate.toStringXY",ud,OPENLAYERS);u("ol.DeviceOrientation",Br,OPENLAYERS);
Br.prototype.getAlpha=Br.prototype.Ii;Br.prototype.getBeta=Br.prototype.Li;Br.prototype.getGamma=Br.prototype.Ui;Br.prototype.getHeading=Br.prototype.Ck;Br.prototype.getTracking=Br.prototype.rg;Br.prototype.setTracking=Br.prototype.$e;u("ol.easing.easeIn",function(b){return Math.pow(b,3)},OPENLAYERS);u("ol.easing.easeOut",Uf,OPENLAYERS);u("ol.easing.inAndOut",Vf,OPENLAYERS);u("ol.easing.linear",Wf,OPENLAYERS);u("ol.easing.upAndDown",Xf,OPENLAYERS);u("ol.extent.boundingExtent",Jd,OPENLAYERS);
u("ol.extent.buffer",Od,OPENLAYERS);u("ol.extent.containsCoordinate",Rd,OPENLAYERS);u("ol.extent.containsExtent",Td,OPENLAYERS);u("ol.extent.containsXY",Sd,OPENLAYERS);u("ol.extent.createEmpty",Kd,OPENLAYERS);u("ol.extent.equals",Wd,OPENLAYERS);u("ol.extent.extend",Xd,OPENLAYERS);u("ol.extent.getBottomLeft",$d,OPENLAYERS);u("ol.extent.getBottomRight",ae,OPENLAYERS);u("ol.extent.getCenter",de,OPENLAYERS);u("ol.extent.getHeight",fe,OPENLAYERS);u("ol.extent.getIntersection",ge,OPENLAYERS);
u("ol.extent.getSize",function(b){return[b[2]-b[0],b[3]-b[1]]},OPENLAYERS);u("ol.extent.getTopLeft",ce,OPENLAYERS);u("ol.extent.getTopRight",be,OPENLAYERS);u("ol.extent.getWidth",ie,OPENLAYERS);u("ol.extent.intersects",he,OPENLAYERS);u("ol.extent.isEmpty",je,OPENLAYERS);u("ol.extent.applyTransform",le,OPENLAYERS);u("ol.Feature",yn,OPENLAYERS);yn.prototype.clone=yn.prototype.clone;yn.prototype.getGeometry=yn.prototype.Q;yn.prototype.getId=yn.prototype.Xi;yn.prototype.getGeometryName=yn.prototype.Wi;
yn.prototype.getStyle=yn.prototype.Ek;yn.prototype.getStyleFunction=yn.prototype.Fk;yn.prototype.setGeometry=yn.prototype.La;yn.prototype.setStyle=yn.prototype.af;yn.prototype.setId=yn.prototype.Ob;yn.prototype.setGeometryName=yn.prototype.Jc;u("ol.featureloader.xhr",qp,OPENLAYERS);u("ol.Geolocation",lx,OPENLAYERS);lx.prototype.getAccuracy=lx.prototype.Gi;lx.prototype.getAccuracyGeometry=lx.prototype.Hi;lx.prototype.getAltitude=lx.prototype.Ji;lx.prototype.getAltitudeAccuracy=lx.prototype.Ki;
lx.prototype.getHeading=lx.prototype.Hk;lx.prototype.getPosition=lx.prototype.Ik;lx.prototype.getProjection=lx.prototype.sg;lx.prototype.getSpeed=lx.prototype.qj;lx.prototype.getTracking=lx.prototype.tg;lx.prototype.getTrackingOptions=lx.prototype.dg;lx.prototype.setProjection=lx.prototype.ug;lx.prototype.setTracking=lx.prototype.Wd;lx.prototype.setTrackingOptions=lx.prototype.xh;u("ol.Graticule",px,OPENLAYERS);px.prototype.getMap=px.prototype.Lk;px.prototype.getMeridians=px.prototype.fj;
px.prototype.getParallels=px.prototype.kj;px.prototype.setMap=px.prototype.setMap;u("ol.has.DEVICE_PIXEL_RATIO",cj,OPENLAYERS);u("ol.has.CANVAS",ej,OPENLAYERS);u("ol.has.DEVICE_ORIENTATION",fj,OPENLAYERS);u("ol.has.GEOLOCATION",gj,OPENLAYERS);u("ol.has.TOUCH",hj,OPENLAYERS);u("ol.has.WEBGL",bj,OPENLAYERS);ux.prototype.getImage=ux.prototype.a;vx.prototype.getImage=vx.prototype.Ma;u("ol.Kinetic",Pk,OPENLAYERS);u("ol.loadingstrategy.all",rp,OPENLAYERS);
u("ol.loadingstrategy.bbox",function(b){return[b]},OPENLAYERS);u("ol.loadingstrategy.tile",function(b){return function(c,d){var e=Oh(b,d),f=ig(b,c,e),g=[],e=[e,0,0];for(e[1]=f.a;e[1]<=f.d;++e[1])for(e[2]=f.b;e[2]<=f.c;++e[2])g.push(Kh(b,e));return g}},OPENLAYERS);u("ol.Map",X,OPENLAYERS);X.prototype.addControl=X.prototype.qi;X.prototype.addInteraction=X.prototype.ri;X.prototype.addLayer=X.prototype.If;X.prototype.addOverlay=X.prototype.Jf;X.prototype.beforeRender=X.prototype.Ha;
X.prototype.forEachFeatureAtPixel=X.prototype.Ke;X.prototype.forEachLayerAtPixel=X.prototype.Pk;X.prototype.hasFeatureAtPixel=X.prototype.hk;X.prototype.getEventCoordinate=X.prototype.Qi;X.prototype.getEventPixel=X.prototype.Bd;X.prototype.getTarget=X.prototype.bf;X.prototype.getTargetElement=X.prototype.bd;X.prototype.getCoordinateFromPixel=X.prototype.ma;X.prototype.getControls=X.prototype.Oi;X.prototype.getOverlays=X.prototype.jj;X.prototype.getInteractions=X.prototype.Yi;
X.prototype.getLayerGroup=X.prototype.Tb;X.prototype.getLayers=X.prototype.vg;X.prototype.getPixelFromCoordinate=X.prototype.ra;X.prototype.getSize=X.prototype.va;X.prototype.getView=X.prototype.P;X.prototype.getViewport=X.prototype.wj;X.prototype.renderSync=X.prototype.Gn;X.prototype.render=X.prototype.render;X.prototype.removeControl=X.prototype.An;X.prototype.removeInteraction=X.prototype.Bn;X.prototype.removeLayer=X.prototype.Cn;X.prototype.removeOverlay=X.prototype.Dn;
X.prototype.setLayerGroup=X.prototype.th;X.prototype.setSize=X.prototype.uf;X.prototype.setTarget=X.prototype.Rk;X.prototype.setView=X.prototype.Xn;X.prototype.updateSize=X.prototype.Lc;Tj.prototype.originalEvent=Tj.prototype.originalEvent;Tj.prototype.pixel=Tj.prototype.pixel;Tj.prototype.coordinate=Tj.prototype.coordinate;Tj.prototype.dragging=Tj.prototype.dragging;Tj.prototype.preventDefault=Tj.prototype.preventDefault;Tj.prototype.stopPropagation=Tj.prototype.gb;uh.prototype.map=uh.prototype.map;
uh.prototype.frameState=uh.prototype.frameState;ed.prototype.key=ed.prototype.key;ed.prototype.oldValue=ed.prototype.oldValue;u("ol.Object",fd,OPENLAYERS);fd.prototype.get=fd.prototype.get;fd.prototype.getKeys=fd.prototype.G;fd.prototype.getProperties=fd.prototype.H;fd.prototype.set=fd.prototype.set;fd.prototype.setProperties=fd.prototype.u;fd.prototype.unset=fd.prototype.J;u("ol.Observable",cd,OPENLAYERS);u("ol.Observable.unByKey",dd,OPENLAYERS);cd.prototype.changed=cd.prototype.k;
cd.prototype.getRevision=cd.prototype.A;cd.prototype.on=cd.prototype.s;cd.prototype.once=cd.prototype.B;cd.prototype.un=cd.prototype.v;cd.prototype.unByKey=cd.prototype.C;u("ol.inherits",w,OPENLAYERS);u("ol.Overlay",Zq,OPENLAYERS);Zq.prototype.getElement=Zq.prototype.Xd;Zq.prototype.getMap=Zq.prototype.Yd;Zq.prototype.getOffset=Zq.prototype.$f;Zq.prototype.getPosition=Zq.prototype.wg;Zq.prototype.getPositioning=Zq.prototype.cg;Zq.prototype.setElement=Zq.prototype.qh;Zq.prototype.setMap=Zq.prototype.setMap;
Zq.prototype.setOffset=Zq.prototype.vh;Zq.prototype.setPosition=Zq.prototype.tf;Zq.prototype.setPositioning=Zq.prototype.wh;u("ol.size.toSize",ld,OPENLAYERS);Bh.prototype.getTileCoord=Bh.prototype.f;u("ol.View",Nf,OPENLAYERS);Nf.prototype.constrainCenter=Nf.prototype.yd;Nf.prototype.constrainResolution=Nf.prototype.constrainResolution;Nf.prototype.constrainRotation=Nf.prototype.constrainRotation;Nf.prototype.getCenter=Nf.prototype.Da;Nf.prototype.calculateExtent=Nf.prototype.Pc;
Nf.prototype.getProjection=Nf.prototype.Sk;Nf.prototype.getResolution=Nf.prototype.wa;Nf.prototype.getRotation=Nf.prototype.xa;Nf.prototype.getZoom=Nf.prototype.zj;Nf.prototype.fit=Nf.prototype.Je;Nf.prototype.centerOn=Nf.prototype.yi;Nf.prototype.rotate=Nf.prototype.rotate;Nf.prototype.setCenter=Nf.prototype.Xa;Nf.prototype.setResolution=Nf.prototype.Pb;Nf.prototype.setRotation=Nf.prototype.Zd;Nf.prototype.setZoom=Nf.prototype.ao;u("ol.xml.getAllTextContent",Jo,OPENLAYERS);u("ol.xml.parse",cp,OPENLAYERS);
u("ol.webgl.Context",dq,OPENLAYERS);dq.prototype.getGL=dq.prototype.Mm;dq.prototype.getHitDetectionFramebuffer=dq.prototype.Re;dq.prototype.useProgram=dq.prototype.ke;u("ol.tilegrid.TileGrid",Gh,OPENLAYERS);Gh.prototype.getMaxZoom=Gh.prototype.Yf;Gh.prototype.getMinZoom=Gh.prototype.Zf;Gh.prototype.getOrigin=Gh.prototype.Ec;Gh.prototype.getResolution=Gh.prototype.na;Gh.prototype.getResolutions=Gh.prototype.Rg;Gh.prototype.getTileCoordForCoordAndResolution=Gh.prototype.cd;
Gh.prototype.getTileCoordForCoordAndZ=Gh.prototype.Jd;Gh.prototype.getTileSize=Gh.prototype.Ca;u("ol.tilegrid.createXYZ",Ph,OPENLAYERS);u("ol.tilegrid.WMTS",Lz,OPENLAYERS);Lz.prototype.getMatrixIds=Lz.prototype.p;u("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet",Mz,OPENLAYERS);u("ol.style.AtlasManager",Rz,OPENLAYERS);u("ol.style.Circle",Gl,OPENLAYERS);Gl.prototype.getAnchor=Gl.prototype.rb;Gl.prototype.getFill=Gl.prototype.nm;Gl.prototype.getImage=Gl.prototype.Kb;Gl.prototype.getOrigin=Gl.prototype.wb;
Gl.prototype.getRadius=Gl.prototype.om;Gl.prototype.getSize=Gl.prototype.Ya;Gl.prototype.getStroke=Gl.prototype.pm;u("ol.style.Fill",Fl,OPENLAYERS);Fl.prototype.getColor=Fl.prototype.c;Fl.prototype.setColor=Fl.prototype.d;u("ol.style.Icon",Bk,OPENLAYERS);Bk.prototype.getAnchor=Bk.prototype.rb;Bk.prototype.getImage=Bk.prototype.Kb;Bk.prototype.getOrigin=Bk.prototype.wb;Bk.prototype.getSrc=Bk.prototype.qm;Bk.prototype.getSize=Bk.prototype.Ya;u("ol.style.Image",Ak,OPENLAYERS);
Ak.prototype.getOpacity=Ak.prototype.fe;Ak.prototype.getRotateWithView=Ak.prototype.Hd;Ak.prototype.getRotation=Ak.prototype.ge;Ak.prototype.getScale=Ak.prototype.he;Ak.prototype.getSnapToPixel=Ak.prototype.Id;Ak.prototype.setRotation=Ak.prototype.ie;Ak.prototype.setScale=Ak.prototype.je;u("ol.style.RegularShape",Vz,OPENLAYERS);Vz.prototype.getAnchor=Vz.prototype.rb;Vz.prototype.getAngle=Vz.prototype.rm;Vz.prototype.getFill=Vz.prototype.sm;Vz.prototype.getImage=Vz.prototype.Kb;
Vz.prototype.getOrigin=Vz.prototype.wb;Vz.prototype.getPoints=Vz.prototype.tm;Vz.prototype.getRadius=Vz.prototype.um;Vz.prototype.getRadius2=Vz.prototype.oj;Vz.prototype.getSize=Vz.prototype.Ya;Vz.prototype.getStroke=Vz.prototype.vm;u("ol.style.Stroke",Bl,OPENLAYERS);Bl.prototype.getColor=Bl.prototype.wm;Bl.prototype.getLineCap=Bl.prototype.aj;Bl.prototype.getLineDash=Bl.prototype.xm;Bl.prototype.getLineJoin=Bl.prototype.bj;Bl.prototype.getMiterLimit=Bl.prototype.gj;Bl.prototype.getWidth=Bl.prototype.ym;
Bl.prototype.setColor=Bl.prototype.zm;Bl.prototype.setLineCap=Bl.prototype.On;Bl.prototype.setLineDash=Bl.prototype.Am;Bl.prototype.setLineJoin=Bl.prototype.Pn;Bl.prototype.setMiterLimit=Bl.prototype.Qn;Bl.prototype.setWidth=Bl.prototype.Yn;u("ol.style.Style",Hl,OPENLAYERS);Hl.prototype.getGeometry=Hl.prototype.Q;Hl.prototype.getGeometryFunction=Hl.prototype.Vi;Hl.prototype.getFill=Hl.prototype.Bm;Hl.prototype.getImage=Hl.prototype.Cm;Hl.prototype.getStroke=Hl.prototype.Dm;Hl.prototype.getText=Hl.prototype.Em;
Hl.prototype.getZIndex=Hl.prototype.yj;Hl.prototype.setGeometry=Hl.prototype.Qg;Hl.prototype.setZIndex=Hl.prototype.$n;u("ol.style.Text",At,OPENLAYERS);At.prototype.getFont=At.prototype.Si;At.prototype.getOffsetX=At.prototype.hj;At.prototype.getOffsetY=At.prototype.ij;At.prototype.getFill=At.prototype.Fm;At.prototype.getRotation=At.prototype.Gm;At.prototype.getScale=At.prototype.Hm;At.prototype.getStroke=At.prototype.Im;At.prototype.getText=At.prototype.Jm;At.prototype.getTextAlign=At.prototype.sj;
At.prototype.getTextBaseline=At.prototype.tj;At.prototype.setFont=At.prototype.Ln;At.prototype.setFill=At.prototype.Kn;At.prototype.setRotation=At.prototype.Km;At.prototype.setScale=At.prototype.Lm;At.prototype.setStroke=At.prototype.Tn;At.prototype.setText=At.prototype.Un;At.prototype.setTextAlign=At.prototype.Vn;At.prototype.setTextBaseline=At.prototype.Wn;u("ol.Sphere",ue,OPENLAYERS);ue.prototype.geodesicArea=ue.prototype.b;ue.prototype.haversineDistance=ue.prototype.a;
u("ol.source.BingMaps",az,OPENLAYERS);u("ol.source.BingMaps.TOS_ATTRIBUTION",bz,OPENLAYERS);u("ol.source.Cluster",cz,OPENLAYERS);cz.prototype.getSource=cz.prototype.X;u("ol.source.ImageCanvas",xn,OPENLAYERS);u("ol.source.ImageMapGuide",fz,OPENLAYERS);fz.prototype.getParams=fz.prototype.Il;fz.prototype.getImageLoadFunction=fz.prototype.Hl;fz.prototype.updateParams=fz.prototype.Ll;fz.prototype.setImageLoadFunction=fz.prototype.Kl;u("ol.source.Image",qn,OPENLAYERS);sn.prototype.image=sn.prototype.image;
u("ol.source.ImageStatic",gz,OPENLAYERS);u("ol.source.ImageVector",Fp,OPENLAYERS);Fp.prototype.getSource=Fp.prototype.Ml;Fp.prototype.getStyle=Fp.prototype.Nl;Fp.prototype.getStyleFunction=Fp.prototype.Ol;Fp.prototype.setStyle=Fp.prototype.Jg;u("ol.source.ImageWMS",hz,OPENLAYERS);hz.prototype.getGetFeatureInfoUrl=hz.prototype.Rl;hz.prototype.getParams=hz.prototype.Tl;hz.prototype.getImageLoadFunction=hz.prototype.Sl;hz.prototype.getUrl=hz.prototype.Ul;hz.prototype.setImageLoadFunction=hz.prototype.Vl;
hz.prototype.setUrl=hz.prototype.Wl;hz.prototype.updateParams=hz.prototype.Xl;u("ol.source.MapQuest",oz,OPENLAYERS);oz.prototype.getLayer=oz.prototype.i;u("ol.source.OSM",mz,OPENLAYERS);u("ol.source.OSM.ATTRIBUTION",nz,OPENLAYERS);u("ol.source.Source",Dh,OPENLAYERS);Dh.prototype.getAttributions=Dh.prototype.ea;Dh.prototype.getLogo=Dh.prototype.da;Dh.prototype.getProjection=Dh.prototype.fa;Dh.prototype.getState=Dh.prototype.ga;u("ol.source.Stamen",tz,OPENLAYERS);u("ol.source.TileArcGISRest",vz,OPENLAYERS);
vz.prototype.getParams=vz.prototype.Yl;vz.prototype.getUrls=vz.prototype.Zl;vz.prototype.setUrl=vz.prototype.$l;vz.prototype.setUrls=vz.prototype.Kg;vz.prototype.updateParams=vz.prototype.bm;u("ol.source.TileDebug",xz,OPENLAYERS);u("ol.source.TileImage",Zy,OPENLAYERS);Zy.prototype.getTileLoadFunction=Zy.prototype.Ua;Zy.prototype.getTileUrlFunction=Zy.prototype.Va;Zy.prototype.setTileLoadFunction=Zy.prototype.ab;Zy.prototype.setTileUrlFunction=Zy.prototype.ya;u("ol.source.TileJSON",yz,OPENLAYERS);
u("ol.source.Tile",Rh,OPENLAYERS);Rh.prototype.getTileGrid=Rh.prototype.sa;Wh.prototype.tile=Wh.prototype.tile;u("ol.source.TileUTFGrid",zz,OPENLAYERS);zz.prototype.getTemplate=zz.prototype.rj;zz.prototype.forDataAtCoordinateAndResolution=zz.prototype.Ci;u("ol.source.TileVector",Ez,OPENLAYERS);Ez.prototype.getFeatures=Ez.prototype.Cc;Ez.prototype.getFeaturesAtCoordinateAndResolution=Ez.prototype.Ri;u("ol.source.TileWMS",Hz,OPENLAYERS);Hz.prototype.getGetFeatureInfoUrl=Hz.prototype.em;
Hz.prototype.getParams=Hz.prototype.fm;Hz.prototype.getUrls=Hz.prototype.gm;Hz.prototype.setUrl=Hz.prototype.hm;Hz.prototype.setUrls=Hz.prototype.Lg;Hz.prototype.updateParams=Hz.prototype.jm;u("ol.source.Vector",W,OPENLAYERS);W.prototype.addFeature=W.prototype.gd;W.prototype.addFeatures=W.prototype.rc;W.prototype.clear=W.prototype.clear;W.prototype.forEachFeature=W.prototype.Qf;W.prototype.forEachFeatureInExtent=W.prototype.$c;W.prototype.forEachFeatureIntersectingExtent=W.prototype.Le;
W.prototype.getFeaturesCollection=W.prototype.Pe;W.prototype.getFeatures=W.prototype.Cc;W.prototype.getFeaturesAtCoordinate=W.prototype.Oe;W.prototype.getFeaturesInExtent=W.prototype.Qe;W.prototype.getClosestFeatureToCoordinate=W.prototype.Sf;W.prototype.getExtent=W.prototype.I;W.prototype.getFeatureById=W.prototype.Ne;W.prototype.removeFeature=W.prototype.Dc;Cp.prototype.feature=Cp.prototype.feature;u("ol.source.WMTS",Nz,OPENLAYERS);Nz.prototype.getDimensions=Nz.prototype.Pi;
Nz.prototype.getFormat=Nz.prototype.Ti;Nz.prototype.getLayer=Nz.prototype.km;Nz.prototype.getMatrixSet=Nz.prototype.ej;Nz.prototype.getRequestEncoding=Nz.prototype.pj;Nz.prototype.getStyle=Nz.prototype.lm;Nz.prototype.getUrls=Nz.prototype.mm;Nz.prototype.getVersion=Nz.prototype.vj;Nz.prototype.updateDimensions=Nz.prototype.jo;
u("ol.source.WMTS.optionsFromCapabilities",function(b,c){var d=Wa(b.Contents.Layer,function(b){return b.Identifier==c.layer}),e,f;e=1<d.TileMatrixSetLink.length?Xa(d.TileMatrixSetLink,function(b){return b.TileMatrixSet==c.matrixSet}):m(c.projection)?Xa(d.TileMatrixSetLink,function(b){return b.TileMatrixSet.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3")==c.projection}):0;0>e&&(e=0);f=d.TileMatrixSetLink[e].TileMatrixSet;var g=d.Format[0];m(c.format)&&(g=c.format);e=Xa(d.Style,function(b){return m(c.style)?
b.Title==c.style:b.isDefault});0>e&&(e=0);e=d.Style[e].Identifier;var h={};m(d.Dimension)&&Sa(d.Dimension,function(b){var c=b.Identifier,d=b["default"];m(d)||(d=b.values[0]);h[c]=d});var l=Wa(b.Contents.TileMatrixSet,function(b){return b.Identifier==f}),n;n=m(c.projection)?ze(c.projection):ze(l.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var p=d.WGS84BoundingBox,q,r;m(p)&&(r=ze("EPSG:4326").I(),r=p[0]==r[0]&&p[2]==r[2],q=Ve(p,"EPSG:4326",n),p=n.I(),null===p||Td(p,q)||(q=void 0));
var l=Mz(l,q),t=[];q=c.requestEncoding;q=m(q)?q:"";if(b.hasOwnProperty("OperationsMetadata")&&b.OperationsMetadata.hasOwnProperty("GetTile")&&0!=q.lastIndexOf("REST",0))for(var d=b.OperationsMetadata.GetTile.DCP.HTTP.Get,p=0,v=d.length;p<v;++p){var A=Wa(d[p].Constraint,function(b){return"GetEncoding"==b.name}).AllowedValues.Value;0<A.length&&Ya(A,"KVP")&&(q="KVP",t.push(d[p].href))}else q="REST",Sa(d.ResourceURL,function(b){"tile"==b.resourceType&&(g=b.format,t.push(b.template))});return{urls:t,layer:c.layer,
matrixSet:f,format:g,projection:n,requestEncoding:q,tileGrid:l,style:e,dimensions:h,wrapX:r}},OPENLAYERS);u("ol.source.XYZ",lz,OPENLAYERS);lz.prototype.setUrl=lz.prototype.d;u("ol.source.Zoomify",Pz,OPENLAYERS);kk.prototype.vectorContext=kk.prototype.vectorContext;kk.prototype.frameState=kk.prototype.frameState;kk.prototype.context=kk.prototype.context;kk.prototype.glContext=kk.prototype.glContext;u("ol.render.VectorContext",jk,OPENLAYERS);Aq.prototype.drawAsync=Aq.prototype.sc;
Aq.prototype.drawCircleGeometry=Aq.prototype.tc;Aq.prototype.drawFeature=Aq.prototype.Ie;Aq.prototype.drawGeometryCollectionGeometry=Aq.prototype.Ad;Aq.prototype.drawPointGeometry=Aq.prototype.pb;Aq.prototype.drawLineStringGeometry=Aq.prototype.zb;Aq.prototype.drawMultiLineStringGeometry=Aq.prototype.uc;Aq.prototype.drawMultiPointGeometry=Aq.prototype.ob;Aq.prototype.drawMultiPolygonGeometry=Aq.prototype.vc;Aq.prototype.drawPolygonGeometry=Aq.prototype.Qb;Aq.prototype.drawText=Aq.prototype.qb;
Aq.prototype.setFillStrokeStyle=Aq.prototype.Aa;Aq.prototype.setImageStyle=Aq.prototype.$a;Aq.prototype.setTextStyle=Aq.prototype.Ba;im.prototype.drawAsync=im.prototype.sc;im.prototype.drawCircleGeometry=im.prototype.tc;im.prototype.drawFeature=im.prototype.Ie;im.prototype.drawPointGeometry=im.prototype.pb;im.prototype.drawMultiPointGeometry=im.prototype.ob;im.prototype.drawLineStringGeometry=im.prototype.zb;im.prototype.drawMultiLineStringGeometry=im.prototype.uc;
im.prototype.drawPolygonGeometry=im.prototype.Qb;im.prototype.drawMultiPolygonGeometry=im.prototype.vc;im.prototype.setFillStrokeStyle=im.prototype.Aa;im.prototype.setImageStyle=im.prototype.$a;im.prototype.setTextStyle=im.prototype.Ba;u("ol.proj.common.add",hm,OPENLAYERS);u("ol.proj.METERS_PER_UNIT",we,OPENLAYERS);u("ol.proj.Projection",xe,OPENLAYERS);xe.prototype.getCode=xe.prototype.Ni;xe.prototype.getExtent=xe.prototype.I;xe.prototype.getUnits=xe.prototype.Bl;xe.prototype.getMetersPerUnit=xe.prototype.Fd;
xe.prototype.getWorldExtent=xe.prototype.xj;xe.prototype.isGlobal=xe.prototype.lk;xe.prototype.setGlobal=xe.prototype.Nn;xe.prototype.setExtent=xe.prototype.Cl;xe.prototype.setWorldExtent=xe.prototype.Zn;xe.prototype.setGetPointResolution=xe.prototype.Mn;xe.prototype.getPointResolution=xe.prototype.getPointResolution;u("ol.proj.addEquivalentProjections",Ae,OPENLAYERS);u("ol.proj.addProjection",Oe,OPENLAYERS);u("ol.proj.addCoordinateTransforms",Be,OPENLAYERS);
u("ol.proj.fromLonLat",function(b,c){return Ue(b,"EPSG:4326",m(c)?c:"EPSG:3857")},OPENLAYERS);u("ol.proj.toLonLat",function(b,c){return Ue(b,m(c)?c:"EPSG:3857","EPSG:4326")},OPENLAYERS);u("ol.proj.get",ze,OPENLAYERS);u("ol.proj.getTransform",Se,OPENLAYERS);u("ol.proj.transform",Ue,OPENLAYERS);u("ol.proj.transformExtent",Ve,OPENLAYERS);u("ol.layer.Heatmap",Z,OPENLAYERS);Z.prototype.getBlur=Z.prototype.Rf;Z.prototype.getGradient=Z.prototype.Vf;Z.prototype.getRadius=Z.prototype.Eg;
Z.prototype.setBlur=Z.prototype.oh;Z.prototype.setGradient=Z.prototype.sh;Z.prototype.setRadius=Z.prototype.Fg;u("ol.layer.Image",I,OPENLAYERS);I.prototype.getSource=I.prototype.V;u("ol.layer.Layer",F,OPENLAYERS);F.prototype.getSource=F.prototype.V;F.prototype.setMap=F.prototype.setMap;F.prototype.setSource=F.prototype.Kc;u("ol.layer.Base",hk,OPENLAYERS);hk.prototype.getBrightness=hk.prototype.Bb;hk.prototype.getContrast=hk.prototype.Cb;hk.prototype.getHue=hk.prototype.Db;hk.prototype.getExtent=hk.prototype.I;
hk.prototype.getMaxResolution=hk.prototype.Eb;hk.prototype.getMinResolution=hk.prototype.Fb;hk.prototype.getOpacity=hk.prototype.Jb;hk.prototype.getSaturation=hk.prototype.Gb;hk.prototype.getVisible=hk.prototype.fb;hk.prototype.setBrightness=hk.prototype.gc;hk.prototype.setContrast=hk.prototype.hc;hk.prototype.setHue=hk.prototype.ic;hk.prototype.setExtent=hk.prototype.bc;hk.prototype.setMaxResolution=hk.prototype.jc;hk.prototype.setMinResolution=hk.prototype.kc;hk.prototype.setOpacity=hk.prototype.cc;
hk.prototype.setSaturation=hk.prototype.lc;hk.prototype.setVisible=hk.prototype.mc;u("ol.layer.Group",G,OPENLAYERS);G.prototype.getLayers=G.prototype.Ac;G.prototype.setLayers=G.prototype.uh;u("ol.layer.Tile",J,OPENLAYERS);J.prototype.getPreload=J.prototype.b;J.prototype.getSource=J.prototype.V;J.prototype.setPreload=J.prototype.d;J.prototype.getUseInterimTilesOnError=J.prototype.c;J.prototype.setUseInterimTilesOnError=J.prototype.e;u("ol.layer.Vector",M,OPENLAYERS);M.prototype.getSource=M.prototype.V;
M.prototype.getStyle=M.prototype.K;M.prototype.getStyleFunction=M.prototype.U;M.prototype.setStyle=M.prototype.e;u("ol.interaction.DoubleClickZoom",Wk,OPENLAYERS);u("ol.interaction.DoubleClickZoom.handleEvent",Xk,OPENLAYERS);u("ol.interaction.DragAndDrop",Qx,OPENLAYERS);u("ol.interaction.DragAndDrop.handleEvent",oe,OPENLAYERS);Rx.prototype.features=Rx.prototype.features;Rx.prototype.file=Rx.prototype.file;Rx.prototype.projection=Rx.prototype.projection;tl.prototype.coordinate=tl.prototype.coordinate;
u("ol.interaction.DragBox",ul,OPENLAYERS);ul.prototype.getGeometry=ul.prototype.Q;u("ol.interaction.DragPan",hl,OPENLAYERS);u("ol.interaction.DragRotateAndZoom",Ux,OPENLAYERS);u("ol.interaction.DragRotate",ll,OPENLAYERS);u("ol.interaction.DragZoom",Ml,OPENLAYERS);Yx.prototype.feature=Yx.prototype.feature;u("ol.interaction.Draw",Zx,OPENLAYERS);u("ol.interaction.Draw.handleEvent",ay,OPENLAYERS);Zx.prototype.finishDrawing=Zx.prototype.X;
u("ol.interaction.Draw.createRegularPolygon",function(b,c){return function(d,e){var f=d[0],g=d[1],h=Math.sqrt(sd(f,g)),l=m(e)?e:Lf(new Wm(f),b);Mf(l,f,h,m(c)?c:Math.atan((g[1]-f[1])/(g[0]-f[0])));return l}},OPENLAYERS);u("ol.interaction.Interaction",Sk,OPENLAYERS);Sk.prototype.getActive=Sk.prototype.b;Sk.prototype.setActive=Sk.prototype.d;u("ol.interaction.defaults",am,OPENLAYERS);u("ol.interaction.KeyboardPan",Nl,OPENLAYERS);u("ol.interaction.KeyboardPan.handleEvent",Ol,OPENLAYERS);
u("ol.interaction.KeyboardZoom",Pl,OPENLAYERS);u("ol.interaction.KeyboardZoom.handleEvent",Ql,OPENLAYERS);oy.prototype.features=oy.prototype.features;oy.prototype.mapBrowserPointerEvent=oy.prototype.mapBrowserPointerEvent;u("ol.interaction.Modify",py,OPENLAYERS);u("ol.interaction.Modify.handleEvent",sy,OPENLAYERS);u("ol.interaction.MouseWheelZoom",Rl,OPENLAYERS);u("ol.interaction.MouseWheelZoom.handleEvent",Sl,OPENLAYERS);u("ol.interaction.PinchRotate",Tl,OPENLAYERS);
u("ol.interaction.PinchZoom",Xl,OPENLAYERS);u("ol.interaction.Pointer",el,OPENLAYERS);u("ol.interaction.Pointer.handleEvent",fl,OPENLAYERS);zy.prototype.selected=zy.prototype.selected;zy.prototype.deselected=zy.prototype.deselected;zy.prototype.mapBrowserEvent=zy.prototype.mapBrowserEvent;u("ol.interaction.Select",Ay,OPENLAYERS);Ay.prototype.getFeatures=Ay.prototype.r;u("ol.interaction.Select.handleEvent",By,OPENLAYERS);Ay.prototype.setMap=Ay.prototype.setMap;u("ol.interaction.Snap",Dy,OPENLAYERS);
Dy.prototype.addFeature=Dy.prototype.ed;Dy.prototype.removeFeature=Dy.prototype.fd;u("ol.geom.Circle",Wm,OPENLAYERS);Wm.prototype.clone=Wm.prototype.clone;Wm.prototype.getCenter=Wm.prototype.dd;Wm.prototype.getRadius=Wm.prototype.cf;Wm.prototype.getType=Wm.prototype.L;Wm.prototype.intersectsExtent=Wm.prototype.la;Wm.prototype.setCenter=Wm.prototype.dl;Wm.prototype.setCenterAndRadius=Wm.prototype.sf;Wm.prototype.setRadius=Wm.prototype.el;Wm.prototype.transform=Wm.prototype.transform;
u("ol.geom.Geometry",We,OPENLAYERS);We.prototype.getClosestPoint=We.prototype.Ta;We.prototype.getExtent=We.prototype.I;We.prototype.transform=We.prototype.transform;u("ol.geom.GeometryCollection",Ym,OPENLAYERS);Ym.prototype.clone=Ym.prototype.clone;Ym.prototype.getGeometries=Ym.prototype.Uf;Ym.prototype.getType=Ym.prototype.L;Ym.prototype.intersectsExtent=Ym.prototype.la;Ym.prototype.setGeometries=Ym.prototype.rh;Ym.prototype.applyTransform=Ym.prototype.oa;Ym.prototype.translate=Ym.prototype.Na;
u("ol.geom.LinearRing",sf,OPENLAYERS);sf.prototype.clone=sf.prototype.clone;sf.prototype.getArea=sf.prototype.hl;sf.prototype.getCoordinates=sf.prototype.M;sf.prototype.getType=sf.prototype.L;sf.prototype.setCoordinates=sf.prototype.ca;u("ol.geom.LineString",N,OPENLAYERS);N.prototype.appendCoordinate=N.prototype.si;N.prototype.clone=N.prototype.clone;N.prototype.forEachSegment=N.prototype.Fi;N.prototype.getCoordinateAtM=N.prototype.fl;N.prototype.getCoordinates=N.prototype.M;
N.prototype.getLength=N.prototype.gl;N.prototype.getType=N.prototype.L;N.prototype.intersectsExtent=N.prototype.la;N.prototype.setCoordinates=N.prototype.ca;u("ol.geom.MultiLineString",O,OPENLAYERS);O.prototype.appendLineString=O.prototype.ti;O.prototype.clone=O.prototype.clone;O.prototype.getCoordinateAtM=O.prototype.il;O.prototype.getCoordinates=O.prototype.M;O.prototype.getLineString=O.prototype.cj;O.prototype.getLineStrings=O.prototype.ad;O.prototype.getType=O.prototype.L;
O.prototype.intersectsExtent=O.prototype.la;O.prototype.setCoordinates=O.prototype.ca;u("ol.geom.MultiPoint",hn,OPENLAYERS);hn.prototype.appendPoint=hn.prototype.vi;hn.prototype.clone=hn.prototype.clone;hn.prototype.getCoordinates=hn.prototype.M;hn.prototype.getPoint=hn.prototype.lj;hn.prototype.getPoints=hn.prototype.$d;hn.prototype.getType=hn.prototype.L;hn.prototype.intersectsExtent=hn.prototype.la;hn.prototype.setCoordinates=hn.prototype.ca;u("ol.geom.MultiPolygon",P,OPENLAYERS);
P.prototype.appendPolygon=P.prototype.wi;P.prototype.clone=P.prototype.clone;P.prototype.getArea=P.prototype.jl;P.prototype.getCoordinates=P.prototype.M;P.prototype.getInteriorPoints=P.prototype.$i;P.prototype.getPolygon=P.prototype.nj;P.prototype.getPolygons=P.prototype.Gd;P.prototype.getType=P.prototype.L;P.prototype.intersectsExtent=P.prototype.la;P.prototype.setCoordinates=P.prototype.ca;u("ol.geom.Point",C,OPENLAYERS);C.prototype.clone=C.prototype.clone;C.prototype.getCoordinates=C.prototype.M;
C.prototype.getType=C.prototype.L;C.prototype.intersectsExtent=C.prototype.la;C.prototype.setCoordinates=C.prototype.ca;u("ol.geom.Polygon",D,OPENLAYERS);D.prototype.appendLinearRing=D.prototype.ui;D.prototype.clone=D.prototype.clone;D.prototype.getArea=D.prototype.kl;D.prototype.getCoordinates=D.prototype.M;D.prototype.getInteriorPoint=D.prototype.Zi;D.prototype.getLinearRingCount=D.prototype.dj;D.prototype.getLinearRing=D.prototype.Xf;D.prototype.getLinearRings=D.prototype.Ed;
D.prototype.getType=D.prototype.L;D.prototype.intersectsExtent=D.prototype.la;D.prototype.setCoordinates=D.prototype.ca;u("ol.geom.Polygon.circular",Jf,OPENLAYERS);u("ol.geom.Polygon.fromExtent",Kf,OPENLAYERS);u("ol.geom.Polygon.fromCircle",Lf,OPENLAYERS);u("ol.geom.SimpleGeometry",Ye,OPENLAYERS);Ye.prototype.getFirstCoordinate=Ye.prototype.tb;Ye.prototype.getLastCoordinate=Ye.prototype.ub;Ye.prototype.getLayout=Ye.prototype.vb;Ye.prototype.applyTransform=Ye.prototype.oa;Ye.prototype.translate=Ye.prototype.Na;
u("ol.format.EsriJSON",Ir,OPENLAYERS);Ir.prototype.readFeature=Ir.prototype.xb;Ir.prototype.readFeatures=Ir.prototype.ja;Ir.prototype.readGeometry=Ir.prototype.Hc;Ir.prototype.readProjection=Ir.prototype.za;Ir.prototype.writeGeometry=Ir.prototype.Nc;Ir.prototype.writeGeometryObject=Ir.prototype.xe;Ir.prototype.writeFeature=Ir.prototype.qd;Ir.prototype.writeFeatureObject=Ir.prototype.Mc;Ir.prototype.writeFeatures=Ir.prototype.yb;Ir.prototype.writeFeaturesObject=Ir.prototype.ve;
u("ol.format.Feature",Cr,OPENLAYERS);u("ol.format.GeoJSON",Pr,OPENLAYERS);Pr.prototype.readFeature=Pr.prototype.xb;Pr.prototype.readFeatures=Pr.prototype.ja;Pr.prototype.readGeometry=Pr.prototype.Hc;Pr.prototype.readProjection=Pr.prototype.za;Pr.prototype.writeFeature=Pr.prototype.qd;Pr.prototype.writeFeatureObject=Pr.prototype.Mc;Pr.prototype.writeFeatures=Pr.prototype.yb;Pr.prototype.writeFeaturesObject=Pr.prototype.ve;Pr.prototype.writeGeometry=Pr.prototype.Nc;
Pr.prototype.writeGeometryObject=Pr.prototype.xe;u("ol.format.GPX",ss,OPENLAYERS);ss.prototype.readFeature=ss.prototype.xb;ss.prototype.readFeatures=ss.prototype.ja;ss.prototype.readProjection=ss.prototype.za;ss.prototype.writeFeatures=ss.prototype.yb;ss.prototype.writeFeaturesNode=ss.prototype.b;u("ol.format.IGC",ct,OPENLAYERS);ct.prototype.readFeature=ct.prototype.xb;ct.prototype.readFeatures=ct.prototype.ja;ct.prototype.readProjection=ct.prototype.za;u("ol.format.KML",Bt,OPENLAYERS);
Bt.prototype.readFeature=Bt.prototype.xb;Bt.prototype.readFeatures=Bt.prototype.ja;Bt.prototype.readName=Bt.prototype.rn;Bt.prototype.readNetworkLinks=Bt.prototype.sn;Bt.prototype.readProjection=Bt.prototype.za;Bt.prototype.writeFeatures=Bt.prototype.yb;Bt.prototype.writeFeaturesNode=Bt.prototype.b;u("ol.format.OSMXML",mv,OPENLAYERS);mv.prototype.readFeatures=mv.prototype.ja;mv.prototype.readProjection=mv.prototype.za;u("ol.format.Polyline",Lv,OPENLAYERS);u("ol.format.Polyline.encodeDeltas",Mv,OPENLAYERS);
u("ol.format.Polyline.decodeDeltas",Ov,OPENLAYERS);u("ol.format.Polyline.encodeFloats",Nv,OPENLAYERS);u("ol.format.Polyline.decodeFloats",Pv,OPENLAYERS);Lv.prototype.readFeature=Lv.prototype.xb;Lv.prototype.readFeatures=Lv.prototype.ja;Lv.prototype.readGeometry=Lv.prototype.Hc;Lv.prototype.readProjection=Lv.prototype.za;Lv.prototype.writeGeometry=Lv.prototype.Nc;u("ol.format.TopoJSON",Qv,OPENLAYERS);Qv.prototype.readFeatures=Qv.prototype.ja;Qv.prototype.readProjection=Qv.prototype.za;
u("ol.format.WFS",Wv,OPENLAYERS);Wv.prototype.readFeatures=Wv.prototype.ja;Wv.prototype.readTransactionResponse=Wv.prototype.g;Wv.prototype.readFeatureCollectionMetadata=Wv.prototype.f;Wv.prototype.writeGetFeature=Wv.prototype.i;Wv.prototype.writeTransaction=Wv.prototype.l;Wv.prototype.readProjection=Wv.prototype.za;u("ol.format.WKT",iw,OPENLAYERS);iw.prototype.readFeature=iw.prototype.xb;iw.prototype.readFeatures=iw.prototype.ja;iw.prototype.readGeometry=iw.prototype.Hc;
iw.prototype.writeFeature=iw.prototype.qd;iw.prototype.writeFeatures=iw.prototype.yb;iw.prototype.writeGeometry=iw.prototype.Nc;u("ol.format.WMSCapabilities",Aw,OPENLAYERS);Aw.prototype.read=Aw.prototype.c;u("ol.format.WMSGetFeatureInfo",Xw,OPENLAYERS);Xw.prototype.readFeatures=Xw.prototype.ja;u("ol.format.WMTSCapabilities",Zw,OPENLAYERS);Zw.prototype.read=Zw.prototype.c;u("ol.format.GML2",rs,OPENLAYERS);u("ol.format.GML3",is,OPENLAYERS);is.prototype.writeGeometryNode=is.prototype.p;
is.prototype.writeFeatures=is.prototype.yb;is.prototype.writeFeaturesNode=is.prototype.b;u("ol.format.GML",is,OPENLAYERS);is.prototype.writeFeatures=is.prototype.yb;is.prototype.writeFeaturesNode=is.prototype.b;Xr.prototype.readFeatures=Xr.prototype.ja;u("ol.events.condition.altKeyOnly",function(b){b=b.a;return b.b&&!b.g&&!b.d},OPENLAYERS);u("ol.events.condition.altShiftKeysOnly",Yk,OPENLAYERS);u("ol.events.condition.always",oe,OPENLAYERS);
u("ol.events.condition.click",function(b){return b.type==Xj},OPENLAYERS);u("ol.events.condition.never",ne,OPENLAYERS);u("ol.events.condition.pointerMove",Zk,OPENLAYERS);u("ol.events.condition.singleClick",$k,OPENLAYERS);u("ol.events.condition.noModifierKeys",al,OPENLAYERS);u("ol.events.condition.platformModifierKeyOnly",function(b){b=b.a;return!b.b&&b.g&&!b.d},OPENLAYERS);u("ol.events.condition.shiftKeyOnly",bl,OPENLAYERS);u("ol.events.condition.targetNotEditable",cl,OPENLAYERS);
u("ol.events.condition.mouseOnly",dl,OPENLAYERS);u("ol.control.Attribution",Xh,OPENLAYERS);u("ol.control.Attribution.render",Yh,OPENLAYERS);Xh.prototype.getCollapsible=Xh.prototype.Uk;Xh.prototype.setCollapsible=Xh.prototype.Xk;Xh.prototype.setCollapsed=Xh.prototype.Wk;Xh.prototype.getCollapsed=Xh.prototype.Tk;u("ol.control.Control",vh,OPENLAYERS);vh.prototype.getMap=vh.prototype.e;vh.prototype.setMap=vh.prototype.setMap;vh.prototype.setTarget=vh.prototype.c;u("ol.control.defaults",ci,OPENLAYERS);
u("ol.control.FullScreen",hi,OPENLAYERS);u("ol.control.MousePosition",ii,OPENLAYERS);u("ol.control.MousePosition.render",ji,OPENLAYERS);ii.prototype.getCoordinateFormat=ii.prototype.Tf;ii.prototype.getProjection=ii.prototype.xg;ii.prototype.setMap=ii.prototype.setMap;ii.prototype.setCoordinateFormat=ii.prototype.ph;ii.prototype.setProjection=ii.prototype.yg;u("ol.control.OverviewMap",br,OPENLAYERS);br.prototype.setMap=br.prototype.setMap;u("ol.control.OverviewMap.render",cr,OPENLAYERS);
br.prototype.getCollapsible=br.prototype.$k;br.prototype.setCollapsible=br.prototype.cl;br.prototype.setCollapsed=br.prototype.bl;br.prototype.getCollapsed=br.prototype.Zk;u("ol.control.Rotate",$h,OPENLAYERS);u("ol.control.Rotate.render",ai,OPENLAYERS);u("ol.control.ScaleLine",gr,OPENLAYERS);gr.prototype.getUnits=gr.prototype.r;u("ol.control.ScaleLine.render",hr,OPENLAYERS);gr.prototype.setUnits=gr.prototype.D;u("ol.control.Zoom",bi,OPENLAYERS);u("ol.control.ZoomSlider",vr,OPENLAYERS);
u("ol.control.ZoomSlider.render",xr,OPENLAYERS);u("ol.control.ZoomToExtent",Ar,OPENLAYERS);u("ol.color.asArray",vg,OPENLAYERS);u("ol.color.asString",xg,OPENLAYERS);fd.prototype.changed=fd.prototype.k;fd.prototype.getRevision=fd.prototype.A;fd.prototype.on=fd.prototype.s;fd.prototype.once=fd.prototype.B;fd.prototype.un=fd.prototype.v;fd.prototype.unByKey=fd.prototype.C;qg.prototype.get=qg.prototype.get;qg.prototype.getKeys=qg.prototype.G;qg.prototype.getProperties=qg.prototype.H;qg.prototype.set=qg.prototype.set;
qg.prototype.setProperties=qg.prototype.u;qg.prototype.unset=qg.prototype.J;qg.prototype.changed=qg.prototype.k;qg.prototype.getRevision=qg.prototype.A;qg.prototype.on=qg.prototype.s;qg.prototype.once=qg.prototype.B;qg.prototype.un=qg.prototype.v;qg.prototype.unByKey=qg.prototype.C;Br.prototype.get=Br.prototype.get;Br.prototype.getKeys=Br.prototype.G;Br.prototype.getProperties=Br.prototype.H;Br.prototype.set=Br.prototype.set;Br.prototype.setProperties=Br.prototype.u;Br.prototype.unset=Br.prototype.J;
Br.prototype.changed=Br.prototype.k;Br.prototype.getRevision=Br.prototype.A;Br.prototype.on=Br.prototype.s;Br.prototype.once=Br.prototype.B;Br.prototype.un=Br.prototype.v;Br.prototype.unByKey=Br.prototype.C;yn.prototype.get=yn.prototype.get;yn.prototype.getKeys=yn.prototype.G;yn.prototype.getProperties=yn.prototype.H;yn.prototype.set=yn.prototype.set;yn.prototype.setProperties=yn.prototype.u;yn.prototype.unset=yn.prototype.J;yn.prototype.changed=yn.prototype.k;yn.prototype.getRevision=yn.prototype.A;
yn.prototype.on=yn.prototype.s;yn.prototype.once=yn.prototype.B;yn.prototype.un=yn.prototype.v;yn.prototype.unByKey=yn.prototype.C;lx.prototype.get=lx.prototype.get;lx.prototype.getKeys=lx.prototype.G;lx.prototype.getProperties=lx.prototype.H;lx.prototype.set=lx.prototype.set;lx.prototype.setProperties=lx.prototype.u;lx.prototype.unset=lx.prototype.J;lx.prototype.changed=lx.prototype.k;lx.prototype.getRevision=lx.prototype.A;lx.prototype.on=lx.prototype.s;lx.prototype.once=lx.prototype.B;
lx.prototype.un=lx.prototype.v;lx.prototype.unByKey=lx.prototype.C;vx.prototype.getTileCoord=vx.prototype.f;X.prototype.get=X.prototype.get;X.prototype.getKeys=X.prototype.G;X.prototype.getProperties=X.prototype.H;X.prototype.set=X.prototype.set;X.prototype.setProperties=X.prototype.u;X.prototype.unset=X.prototype.J;X.prototype.changed=X.prototype.k;X.prototype.getRevision=X.prototype.A;X.prototype.on=X.prototype.s;X.prototype.once=X.prototype.B;X.prototype.un=X.prototype.v;X.prototype.unByKey=X.prototype.C;
Tj.prototype.map=Tj.prototype.map;Tj.prototype.frameState=Tj.prototype.frameState;Uj.prototype.originalEvent=Uj.prototype.originalEvent;Uj.prototype.pixel=Uj.prototype.pixel;Uj.prototype.coordinate=Uj.prototype.coordinate;Uj.prototype.dragging=Uj.prototype.dragging;Uj.prototype.preventDefault=Uj.prototype.preventDefault;Uj.prototype.stopPropagation=Uj.prototype.gb;Uj.prototype.map=Uj.prototype.map;Uj.prototype.frameState=Uj.prototype.frameState;Zq.prototype.get=Zq.prototype.get;
Zq.prototype.getKeys=Zq.prototype.G;Zq.prototype.getProperties=Zq.prototype.H;Zq.prototype.set=Zq.prototype.set;Zq.prototype.setProperties=Zq.prototype.u;Zq.prototype.unset=Zq.prototype.J;Zq.prototype.changed=Zq.prototype.k;Zq.prototype.getRevision=Zq.prototype.A;Zq.prototype.on=Zq.prototype.s;Zq.prototype.once=Zq.prototype.B;Zq.prototype.un=Zq.prototype.v;Zq.prototype.unByKey=Zq.prototype.C;Nf.prototype.get=Nf.prototype.get;Nf.prototype.getKeys=Nf.prototype.G;Nf.prototype.getProperties=Nf.prototype.H;
Nf.prototype.set=Nf.prototype.set;Nf.prototype.setProperties=Nf.prototype.u;Nf.prototype.unset=Nf.prototype.J;Nf.prototype.changed=Nf.prototype.k;Nf.prototype.getRevision=Nf.prototype.A;Nf.prototype.on=Nf.prototype.s;Nf.prototype.once=Nf.prototype.B;Nf.prototype.un=Nf.prototype.v;Nf.prototype.unByKey=Nf.prototype.C;Lz.prototype.getMaxZoom=Lz.prototype.Yf;Lz.prototype.getMinZoom=Lz.prototype.Zf;Lz.prototype.getOrigin=Lz.prototype.Ec;Lz.prototype.getResolution=Lz.prototype.na;
Lz.prototype.getResolutions=Lz.prototype.Rg;Lz.prototype.getTileCoordForCoordAndResolution=Lz.prototype.cd;Lz.prototype.getTileCoordForCoordAndZ=Lz.prototype.Jd;Lz.prototype.getTileSize=Lz.prototype.Ca;Gl.prototype.getOpacity=Gl.prototype.fe;Gl.prototype.getRotateWithView=Gl.prototype.Hd;Gl.prototype.getRotation=Gl.prototype.ge;Gl.prototype.getScale=Gl.prototype.he;Gl.prototype.getSnapToPixel=Gl.prototype.Id;Gl.prototype.setRotation=Gl.prototype.ie;Gl.prototype.setScale=Gl.prototype.je;
Bk.prototype.getOpacity=Bk.prototype.fe;Bk.prototype.getRotateWithView=Bk.prototype.Hd;Bk.prototype.getRotation=Bk.prototype.ge;Bk.prototype.getScale=Bk.prototype.he;Bk.prototype.getSnapToPixel=Bk.prototype.Id;Bk.prototype.setRotation=Bk.prototype.ie;Bk.prototype.setScale=Bk.prototype.je;Vz.prototype.getOpacity=Vz.prototype.fe;Vz.prototype.getRotateWithView=Vz.prototype.Hd;Vz.prototype.getRotation=Vz.prototype.ge;Vz.prototype.getScale=Vz.prototype.he;Vz.prototype.getSnapToPixel=Vz.prototype.Id;
Vz.prototype.setRotation=Vz.prototype.ie;Vz.prototype.setScale=Vz.prototype.je;Dh.prototype.get=Dh.prototype.get;Dh.prototype.getKeys=Dh.prototype.G;Dh.prototype.getProperties=Dh.prototype.H;Dh.prototype.set=Dh.prototype.set;Dh.prototype.setProperties=Dh.prototype.u;Dh.prototype.unset=Dh.prototype.J;Dh.prototype.changed=Dh.prototype.k;Dh.prototype.getRevision=Dh.prototype.A;Dh.prototype.on=Dh.prototype.s;Dh.prototype.once=Dh.prototype.B;Dh.prototype.un=Dh.prototype.v;Dh.prototype.unByKey=Dh.prototype.C;
Rh.prototype.getAttributions=Rh.prototype.ea;Rh.prototype.getLogo=Rh.prototype.da;Rh.prototype.getProjection=Rh.prototype.fa;Rh.prototype.getState=Rh.prototype.ga;Rh.prototype.get=Rh.prototype.get;Rh.prototype.getKeys=Rh.prototype.G;Rh.prototype.getProperties=Rh.prototype.H;Rh.prototype.set=Rh.prototype.set;Rh.prototype.setProperties=Rh.prototype.u;Rh.prototype.unset=Rh.prototype.J;Rh.prototype.changed=Rh.prototype.k;Rh.prototype.getRevision=Rh.prototype.A;Rh.prototype.on=Rh.prototype.s;
Rh.prototype.once=Rh.prototype.B;Rh.prototype.un=Rh.prototype.v;Rh.prototype.unByKey=Rh.prototype.C;Zy.prototype.getTileGrid=Zy.prototype.sa;Zy.prototype.getAttributions=Zy.prototype.ea;Zy.prototype.getLogo=Zy.prototype.da;Zy.prototype.getProjection=Zy.prototype.fa;Zy.prototype.getState=Zy.prototype.ga;Zy.prototype.get=Zy.prototype.get;Zy.prototype.getKeys=Zy.prototype.G;Zy.prototype.getProperties=Zy.prototype.H;Zy.prototype.set=Zy.prototype.set;Zy.prototype.setProperties=Zy.prototype.u;
Zy.prototype.unset=Zy.prototype.J;Zy.prototype.changed=Zy.prototype.k;Zy.prototype.getRevision=Zy.prototype.A;Zy.prototype.on=Zy.prototype.s;Zy.prototype.once=Zy.prototype.B;Zy.prototype.un=Zy.prototype.v;Zy.prototype.unByKey=Zy.prototype.C;az.prototype.getTileLoadFunction=az.prototype.Ua;az.prototype.getTileUrlFunction=az.prototype.Va;az.prototype.setTileLoadFunction=az.prototype.ab;az.prototype.setTileUrlFunction=az.prototype.ya;az.prototype.getTileGrid=az.prototype.sa;
az.prototype.getAttributions=az.prototype.ea;az.prototype.getLogo=az.prototype.da;az.prototype.getProjection=az.prototype.fa;az.prototype.getState=az.prototype.ga;az.prototype.get=az.prototype.get;az.prototype.getKeys=az.prototype.G;az.prototype.getProperties=az.prototype.H;az.prototype.set=az.prototype.set;az.prototype.setProperties=az.prototype.u;az.prototype.unset=az.prototype.J;az.prototype.changed=az.prototype.k;az.prototype.getRevision=az.prototype.A;az.prototype.on=az.prototype.s;
az.prototype.once=az.prototype.B;az.prototype.un=az.prototype.v;az.prototype.unByKey=az.prototype.C;W.prototype.getAttributions=W.prototype.ea;W.prototype.getLogo=W.prototype.da;W.prototype.getProjection=W.prototype.fa;W.prototype.getState=W.prototype.ga;W.prototype.get=W.prototype.get;W.prototype.getKeys=W.prototype.G;W.prototype.getProperties=W.prototype.H;W.prototype.set=W.prototype.set;W.prototype.setProperties=W.prototype.u;W.prototype.unset=W.prototype.J;W.prototype.changed=W.prototype.k;
W.prototype.getRevision=W.prototype.A;W.prototype.on=W.prototype.s;W.prototype.once=W.prototype.B;W.prototype.un=W.prototype.v;W.prototype.unByKey=W.prototype.C;cz.prototype.addFeature=cz.prototype.gd;cz.prototype.addFeatures=cz.prototype.rc;cz.prototype.clear=cz.prototype.clear;cz.prototype.forEachFeature=cz.prototype.Qf;cz.prototype.forEachFeatureInExtent=cz.prototype.$c;cz.prototype.forEachFeatureIntersectingExtent=cz.prototype.Le;cz.prototype.getFeaturesCollection=cz.prototype.Pe;
cz.prototype.getFeatures=cz.prototype.Cc;cz.prototype.getFeaturesAtCoordinate=cz.prototype.Oe;cz.prototype.getFeaturesInExtent=cz.prototype.Qe;cz.prototype.getClosestFeatureToCoordinate=cz.prototype.Sf;cz.prototype.getExtent=cz.prototype.I;cz.prototype.getFeatureById=cz.prototype.Ne;cz.prototype.removeFeature=cz.prototype.Dc;cz.prototype.getAttributions=cz.prototype.ea;cz.prototype.getLogo=cz.prototype.da;cz.prototype.getProjection=cz.prototype.fa;cz.prototype.getState=cz.prototype.ga;
cz.prototype.get=cz.prototype.get;cz.prototype.getKeys=cz.prototype.G;cz.prototype.getProperties=cz.prototype.H;cz.prototype.set=cz.prototype.set;cz.prototype.setProperties=cz.prototype.u;cz.prototype.unset=cz.prototype.J;cz.prototype.changed=cz.prototype.k;cz.prototype.getRevision=cz.prototype.A;cz.prototype.on=cz.prototype.s;cz.prototype.once=cz.prototype.B;cz.prototype.un=cz.prototype.v;cz.prototype.unByKey=cz.prototype.C;qn.prototype.getAttributions=qn.prototype.ea;qn.prototype.getLogo=qn.prototype.da;
qn.prototype.getProjection=qn.prototype.fa;qn.prototype.getState=qn.prototype.ga;qn.prototype.get=qn.prototype.get;qn.prototype.getKeys=qn.prototype.G;qn.prototype.getProperties=qn.prototype.H;qn.prototype.set=qn.prototype.set;qn.prototype.setProperties=qn.prototype.u;qn.prototype.unset=qn.prototype.J;qn.prototype.changed=qn.prototype.k;qn.prototype.getRevision=qn.prototype.A;qn.prototype.on=qn.prototype.s;qn.prototype.once=qn.prototype.B;qn.prototype.un=qn.prototype.v;qn.prototype.unByKey=qn.prototype.C;
xn.prototype.getAttributions=xn.prototype.ea;xn.prototype.getLogo=xn.prototype.da;xn.prototype.getProjection=xn.prototype.fa;xn.prototype.getState=xn.prototype.ga;xn.prototype.get=xn.prototype.get;xn.prototype.getKeys=xn.prototype.G;xn.prototype.getProperties=xn.prototype.H;xn.prototype.set=xn.prototype.set;xn.prototype.setProperties=xn.prototype.u;xn.prototype.unset=xn.prototype.J;xn.prototype.changed=xn.prototype.k;xn.prototype.getRevision=xn.prototype.A;xn.prototype.on=xn.prototype.s;
xn.prototype.once=xn.prototype.B;xn.prototype.un=xn.prototype.v;xn.prototype.unByKey=xn.prototype.C;fz.prototype.getAttributions=fz.prototype.ea;fz.prototype.getLogo=fz.prototype.da;fz.prototype.getProjection=fz.prototype.fa;fz.prototype.getState=fz.prototype.ga;fz.prototype.get=fz.prototype.get;fz.prototype.getKeys=fz.prototype.G;fz.prototype.getProperties=fz.prototype.H;fz.prototype.set=fz.prototype.set;fz.prototype.setProperties=fz.prototype.u;fz.prototype.unset=fz.prototype.J;
fz.prototype.changed=fz.prototype.k;fz.prototype.getRevision=fz.prototype.A;fz.prototype.on=fz.prototype.s;fz.prototype.once=fz.prototype.B;fz.prototype.un=fz.prototype.v;fz.prototype.unByKey=fz.prototype.C;gz.prototype.getAttributions=gz.prototype.ea;gz.prototype.getLogo=gz.prototype.da;gz.prototype.getProjection=gz.prototype.fa;gz.prototype.getState=gz.prototype.ga;gz.prototype.get=gz.prototype.get;gz.prototype.getKeys=gz.prototype.G;gz.prototype.getProperties=gz.prototype.H;gz.prototype.set=gz.prototype.set;
gz.prototype.setProperties=gz.prototype.u;gz.prototype.unset=gz.prototype.J;gz.prototype.changed=gz.prototype.k;gz.prototype.getRevision=gz.prototype.A;gz.prototype.on=gz.prototype.s;gz.prototype.once=gz.prototype.B;gz.prototype.un=gz.prototype.v;gz.prototype.unByKey=gz.prototype.C;Fp.prototype.getAttributions=Fp.prototype.ea;Fp.prototype.getLogo=Fp.prototype.da;Fp.prototype.getProjection=Fp.prototype.fa;Fp.prototype.getState=Fp.prototype.ga;Fp.prototype.get=Fp.prototype.get;
Fp.prototype.getKeys=Fp.prototype.G;Fp.prototype.getProperties=Fp.prototype.H;Fp.prototype.set=Fp.prototype.set;Fp.prototype.setProperties=Fp.prototype.u;Fp.prototype.unset=Fp.prototype.J;Fp.prototype.changed=Fp.prototype.k;Fp.prototype.getRevision=Fp.prototype.A;Fp.prototype.on=Fp.prototype.s;Fp.prototype.once=Fp.prototype.B;Fp.prototype.un=Fp.prototype.v;Fp.prototype.unByKey=Fp.prototype.C;hz.prototype.getAttributions=hz.prototype.ea;hz.prototype.getLogo=hz.prototype.da;
hz.prototype.getProjection=hz.prototype.fa;hz.prototype.getState=hz.prototype.ga;hz.prototype.get=hz.prototype.get;hz.prototype.getKeys=hz.prototype.G;hz.prototype.getProperties=hz.prototype.H;hz.prototype.set=hz.prototype.set;hz.prototype.setProperties=hz.prototype.u;hz.prototype.unset=hz.prototype.J;hz.prototype.changed=hz.prototype.k;hz.prototype.getRevision=hz.prototype.A;hz.prototype.on=hz.prototype.s;hz.prototype.once=hz.prototype.B;hz.prototype.un=hz.prototype.v;hz.prototype.unByKey=hz.prototype.C;
lz.prototype.getTileLoadFunction=lz.prototype.Ua;lz.prototype.getTileUrlFunction=lz.prototype.Va;lz.prototype.setTileLoadFunction=lz.prototype.ab;lz.prototype.setTileUrlFunction=lz.prototype.ya;lz.prototype.getTileGrid=lz.prototype.sa;lz.prototype.getAttributions=lz.prototype.ea;lz.prototype.getLogo=lz.prototype.da;lz.prototype.getProjection=lz.prototype.fa;lz.prototype.getState=lz.prototype.ga;lz.prototype.get=lz.prototype.get;lz.prototype.getKeys=lz.prototype.G;lz.prototype.getProperties=lz.prototype.H;
lz.prototype.set=lz.prototype.set;lz.prototype.setProperties=lz.prototype.u;lz.prototype.unset=lz.prototype.J;lz.prototype.changed=lz.prototype.k;lz.prototype.getRevision=lz.prototype.A;lz.prototype.on=lz.prototype.s;lz.prototype.once=lz.prototype.B;lz.prototype.un=lz.prototype.v;lz.prototype.unByKey=lz.prototype.C;oz.prototype.setUrl=oz.prototype.d;oz.prototype.getTileLoadFunction=oz.prototype.Ua;oz.prototype.getTileUrlFunction=oz.prototype.Va;oz.prototype.setTileLoadFunction=oz.prototype.ab;
oz.prototype.setTileUrlFunction=oz.prototype.ya;oz.prototype.getTileGrid=oz.prototype.sa;oz.prototype.getAttributions=oz.prototype.ea;oz.prototype.getLogo=oz.prototype.da;oz.prototype.getProjection=oz.prototype.fa;oz.prototype.getState=oz.prototype.ga;oz.prototype.get=oz.prototype.get;oz.prototype.getKeys=oz.prototype.G;oz.prototype.getProperties=oz.prototype.H;oz.prototype.set=oz.prototype.set;oz.prototype.setProperties=oz.prototype.u;oz.prototype.unset=oz.prototype.J;oz.prototype.changed=oz.prototype.k;
oz.prototype.getRevision=oz.prototype.A;oz.prototype.on=oz.prototype.s;oz.prototype.once=oz.prototype.B;oz.prototype.un=oz.prototype.v;oz.prototype.unByKey=oz.prototype.C;mz.prototype.setUrl=mz.prototype.d;mz.prototype.getTileLoadFunction=mz.prototype.Ua;mz.prototype.getTileUrlFunction=mz.prototype.Va;mz.prototype.setTileLoadFunction=mz.prototype.ab;mz.prototype.setTileUrlFunction=mz.prototype.ya;mz.prototype.getTileGrid=mz.prototype.sa;mz.prototype.getAttributions=mz.prototype.ea;
mz.prototype.getLogo=mz.prototype.da;mz.prototype.getProjection=mz.prototype.fa;mz.prototype.getState=mz.prototype.ga;mz.prototype.get=mz.prototype.get;mz.prototype.getKeys=mz.prototype.G;mz.prototype.getProperties=mz.prototype.H;mz.prototype.set=mz.prototype.set;mz.prototype.setProperties=mz.prototype.u;mz.prototype.unset=mz.prototype.J;mz.prototype.changed=mz.prototype.k;mz.prototype.getRevision=mz.prototype.A;mz.prototype.on=mz.prototype.s;mz.prototype.once=mz.prototype.B;mz.prototype.un=mz.prototype.v;
mz.prototype.unByKey=mz.prototype.C;tz.prototype.setUrl=tz.prototype.d;tz.prototype.getTileLoadFunction=tz.prototype.Ua;tz.prototype.getTileUrlFunction=tz.prototype.Va;tz.prototype.setTileLoadFunction=tz.prototype.ab;tz.prototype.setTileUrlFunction=tz.prototype.ya;tz.prototype.getTileGrid=tz.prototype.sa;tz.prototype.getAttributions=tz.prototype.ea;tz.prototype.getLogo=tz.prototype.da;tz.prototype.getProjection=tz.prototype.fa;tz.prototype.getState=tz.prototype.ga;tz.prototype.get=tz.prototype.get;
tz.prototype.getKeys=tz.prototype.G;tz.prototype.getProperties=tz.prototype.H;tz.prototype.set=tz.prototype.set;tz.prototype.setProperties=tz.prototype.u;tz.prototype.unset=tz.prototype.J;tz.prototype.changed=tz.prototype.k;tz.prototype.getRevision=tz.prototype.A;tz.prototype.on=tz.prototype.s;tz.prototype.once=tz.prototype.B;tz.prototype.un=tz.prototype.v;tz.prototype.unByKey=tz.prototype.C;vz.prototype.getTileLoadFunction=vz.prototype.Ua;vz.prototype.getTileUrlFunction=vz.prototype.Va;
vz.prototype.setTileLoadFunction=vz.prototype.ab;vz.prototype.setTileUrlFunction=vz.prototype.ya;vz.prototype.getTileGrid=vz.prototype.sa;vz.prototype.getAttributions=vz.prototype.ea;vz.prototype.getLogo=vz.prototype.da;vz.prototype.getProjection=vz.prototype.fa;vz.prototype.getState=vz.prototype.ga;vz.prototype.get=vz.prototype.get;vz.prototype.getKeys=vz.prototype.G;vz.prototype.getProperties=vz.prototype.H;vz.prototype.set=vz.prototype.set;vz.prototype.setProperties=vz.prototype.u;
vz.prototype.unset=vz.prototype.J;vz.prototype.changed=vz.prototype.k;vz.prototype.getRevision=vz.prototype.A;vz.prototype.on=vz.prototype.s;vz.prototype.once=vz.prototype.B;vz.prototype.un=vz.prototype.v;vz.prototype.unByKey=vz.prototype.C;xz.prototype.getTileGrid=xz.prototype.sa;xz.prototype.getAttributions=xz.prototype.ea;xz.prototype.getLogo=xz.prototype.da;xz.prototype.getProjection=xz.prototype.fa;xz.prototype.getState=xz.prototype.ga;xz.prototype.get=xz.prototype.get;xz.prototype.getKeys=xz.prototype.G;
xz.prototype.getProperties=xz.prototype.H;xz.prototype.set=xz.prototype.set;xz.prototype.setProperties=xz.prototype.u;xz.prototype.unset=xz.prototype.J;xz.prototype.changed=xz.prototype.k;xz.prototype.getRevision=xz.prototype.A;xz.prototype.on=xz.prototype.s;xz.prototype.once=xz.prototype.B;xz.prototype.un=xz.prototype.v;xz.prototype.unByKey=xz.prototype.C;yz.prototype.getTileLoadFunction=yz.prototype.Ua;yz.prototype.getTileUrlFunction=yz.prototype.Va;yz.prototype.setTileLoadFunction=yz.prototype.ab;
yz.prototype.setTileUrlFunction=yz.prototype.ya;yz.prototype.getTileGrid=yz.prototype.sa;yz.prototype.getAttributions=yz.prototype.ea;yz.prototype.getLogo=yz.prototype.da;yz.prototype.getProjection=yz.prototype.fa;yz.prototype.getState=yz.prototype.ga;yz.prototype.get=yz.prototype.get;yz.prototype.getKeys=yz.prototype.G;yz.prototype.getProperties=yz.prototype.H;yz.prototype.set=yz.prototype.set;yz.prototype.setProperties=yz.prototype.u;yz.prototype.unset=yz.prototype.J;yz.prototype.changed=yz.prototype.k;
yz.prototype.getRevision=yz.prototype.A;yz.prototype.on=yz.prototype.s;yz.prototype.once=yz.prototype.B;yz.prototype.un=yz.prototype.v;yz.prototype.unByKey=yz.prototype.C;zz.prototype.getTileGrid=zz.prototype.sa;zz.prototype.getAttributions=zz.prototype.ea;zz.prototype.getLogo=zz.prototype.da;zz.prototype.getProjection=zz.prototype.fa;zz.prototype.getState=zz.prototype.ga;zz.prototype.get=zz.prototype.get;zz.prototype.getKeys=zz.prototype.G;zz.prototype.getProperties=zz.prototype.H;
zz.prototype.set=zz.prototype.set;zz.prototype.setProperties=zz.prototype.u;zz.prototype.unset=zz.prototype.J;zz.prototype.changed=zz.prototype.k;zz.prototype.getRevision=zz.prototype.A;zz.prototype.on=zz.prototype.s;zz.prototype.once=zz.prototype.B;zz.prototype.un=zz.prototype.v;zz.prototype.unByKey=zz.prototype.C;Ez.prototype.forEachFeatureIntersectingExtent=Ez.prototype.Le;Ez.prototype.getFeaturesCollection=Ez.prototype.Pe;Ez.prototype.getFeaturesAtCoordinate=Ez.prototype.Oe;
Ez.prototype.getFeatureById=Ez.prototype.Ne;Ez.prototype.getAttributions=Ez.prototype.ea;Ez.prototype.getLogo=Ez.prototype.da;Ez.prototype.getProjection=Ez.prototype.fa;Ez.prototype.getState=Ez.prototype.ga;Ez.prototype.get=Ez.prototype.get;Ez.prototype.getKeys=Ez.prototype.G;Ez.prototype.getProperties=Ez.prototype.H;Ez.prototype.set=Ez.prototype.set;Ez.prototype.setProperties=Ez.prototype.u;Ez.prototype.unset=Ez.prototype.J;Ez.prototype.changed=Ez.prototype.k;Ez.prototype.getRevision=Ez.prototype.A;
Ez.prototype.on=Ez.prototype.s;Ez.prototype.once=Ez.prototype.B;Ez.prototype.un=Ez.prototype.v;Ez.prototype.unByKey=Ez.prototype.C;Hz.prototype.getTileLoadFunction=Hz.prototype.Ua;Hz.prototype.getTileUrlFunction=Hz.prototype.Va;Hz.prototype.setTileLoadFunction=Hz.prototype.ab;Hz.prototype.setTileUrlFunction=Hz.prototype.ya;Hz.prototype.getTileGrid=Hz.prototype.sa;Hz.prototype.getAttributions=Hz.prototype.ea;Hz.prototype.getLogo=Hz.prototype.da;Hz.prototype.getProjection=Hz.prototype.fa;
Hz.prototype.getState=Hz.prototype.ga;Hz.prototype.get=Hz.prototype.get;Hz.prototype.getKeys=Hz.prototype.G;Hz.prototype.getProperties=Hz.prototype.H;Hz.prototype.set=Hz.prototype.set;Hz.prototype.setProperties=Hz.prototype.u;Hz.prototype.unset=Hz.prototype.J;Hz.prototype.changed=Hz.prototype.k;Hz.prototype.getRevision=Hz.prototype.A;Hz.prototype.on=Hz.prototype.s;Hz.prototype.once=Hz.prototype.B;Hz.prototype.un=Hz.prototype.v;Hz.prototype.unByKey=Hz.prototype.C;Nz.prototype.getTileLoadFunction=Nz.prototype.Ua;
Nz.prototype.getTileUrlFunction=Nz.prototype.Va;Nz.prototype.setTileLoadFunction=Nz.prototype.ab;Nz.prototype.setTileUrlFunction=Nz.prototype.ya;Nz.prototype.getTileGrid=Nz.prototype.sa;Nz.prototype.getAttributions=Nz.prototype.ea;Nz.prototype.getLogo=Nz.prototype.da;Nz.prototype.getProjection=Nz.prototype.fa;Nz.prototype.getState=Nz.prototype.ga;Nz.prototype.get=Nz.prototype.get;Nz.prototype.getKeys=Nz.prototype.G;Nz.prototype.getProperties=Nz.prototype.H;Nz.prototype.set=Nz.prototype.set;
Nz.prototype.setProperties=Nz.prototype.u;Nz.prototype.unset=Nz.prototype.J;Nz.prototype.changed=Nz.prototype.k;Nz.prototype.getRevision=Nz.prototype.A;Nz.prototype.on=Nz.prototype.s;Nz.prototype.once=Nz.prototype.B;Nz.prototype.un=Nz.prototype.v;Nz.prototype.unByKey=Nz.prototype.C;Pz.prototype.getTileLoadFunction=Pz.prototype.Ua;Pz.prototype.getTileUrlFunction=Pz.prototype.Va;Pz.prototype.setTileLoadFunction=Pz.prototype.ab;Pz.prototype.setTileUrlFunction=Pz.prototype.ya;
Pz.prototype.getTileGrid=Pz.prototype.sa;Pz.prototype.getAttributions=Pz.prototype.ea;Pz.prototype.getLogo=Pz.prototype.da;Pz.prototype.getProjection=Pz.prototype.fa;Pz.prototype.getState=Pz.prototype.ga;Pz.prototype.get=Pz.prototype.get;Pz.prototype.getKeys=Pz.prototype.G;Pz.prototype.getProperties=Pz.prototype.H;Pz.prototype.set=Pz.prototype.set;Pz.prototype.setProperties=Pz.prototype.u;Pz.prototype.unset=Pz.prototype.J;Pz.prototype.changed=Pz.prototype.k;Pz.prototype.getRevision=Pz.prototype.A;
Pz.prototype.on=Pz.prototype.s;Pz.prototype.once=Pz.prototype.B;Pz.prototype.un=Pz.prototype.v;Pz.prototype.unByKey=Pz.prototype.C;qk.prototype.changed=qk.prototype.k;qk.prototype.getRevision=qk.prototype.A;qk.prototype.on=qk.prototype.s;qk.prototype.once=qk.prototype.B;qk.prototype.un=qk.prototype.v;qk.prototype.unByKey=qk.prototype.C;Iq.prototype.changed=Iq.prototype.k;Iq.prototype.getRevision=Iq.prototype.A;Iq.prototype.on=Iq.prototype.s;Iq.prototype.once=Iq.prototype.B;Iq.prototype.un=Iq.prototype.v;
Iq.prototype.unByKey=Iq.prototype.C;Lq.prototype.changed=Lq.prototype.k;Lq.prototype.getRevision=Lq.prototype.A;Lq.prototype.on=Lq.prototype.s;Lq.prototype.once=Lq.prototype.B;Lq.prototype.un=Lq.prototype.v;Lq.prototype.unByKey=Lq.prototype.C;Rq.prototype.changed=Rq.prototype.k;Rq.prototype.getRevision=Rq.prototype.A;Rq.prototype.on=Rq.prototype.s;Rq.prototype.once=Rq.prototype.B;Rq.prototype.un=Rq.prototype.v;Rq.prototype.unByKey=Rq.prototype.C;Tq.prototype.changed=Tq.prototype.k;
Tq.prototype.getRevision=Tq.prototype.A;Tq.prototype.on=Tq.prototype.s;Tq.prototype.once=Tq.prototype.B;Tq.prototype.un=Tq.prototype.v;Tq.prototype.unByKey=Tq.prototype.C;Mp.prototype.changed=Mp.prototype.k;Mp.prototype.getRevision=Mp.prototype.A;Mp.prototype.on=Mp.prototype.s;Mp.prototype.once=Mp.prototype.B;Mp.prototype.un=Mp.prototype.v;Mp.prototype.unByKey=Mp.prototype.C;Np.prototype.changed=Np.prototype.k;Np.prototype.getRevision=Np.prototype.A;Np.prototype.on=Np.prototype.s;
Np.prototype.once=Np.prototype.B;Np.prototype.un=Np.prototype.v;Np.prototype.unByKey=Np.prototype.C;Op.prototype.changed=Op.prototype.k;Op.prototype.getRevision=Op.prototype.A;Op.prototype.on=Op.prototype.s;Op.prototype.once=Op.prototype.B;Op.prototype.un=Op.prototype.v;Op.prototype.unByKey=Op.prototype.C;Qp.prototype.changed=Qp.prototype.k;Qp.prototype.getRevision=Qp.prototype.A;Qp.prototype.on=Qp.prototype.s;Qp.prototype.once=Qp.prototype.B;Qp.prototype.un=Qp.prototype.v;Qp.prototype.unByKey=Qp.prototype.C;
wm.prototype.changed=wm.prototype.k;wm.prototype.getRevision=wm.prototype.A;wm.prototype.on=wm.prototype.s;wm.prototype.once=wm.prototype.B;wm.prototype.un=wm.prototype.v;wm.prototype.unByKey=wm.prototype.C;Hp.prototype.changed=Hp.prototype.k;Hp.prototype.getRevision=Hp.prototype.A;Hp.prototype.on=Hp.prototype.s;Hp.prototype.once=Hp.prototype.B;Hp.prototype.un=Hp.prototype.v;Hp.prototype.unByKey=Hp.prototype.C;Ip.prototype.changed=Ip.prototype.k;Ip.prototype.getRevision=Ip.prototype.A;
Ip.prototype.on=Ip.prototype.s;Ip.prototype.once=Ip.prototype.B;Ip.prototype.un=Ip.prototype.v;Ip.prototype.unByKey=Ip.prototype.C;Jp.prototype.changed=Jp.prototype.k;Jp.prototype.getRevision=Jp.prototype.A;Jp.prototype.on=Jp.prototype.s;Jp.prototype.once=Jp.prototype.B;Jp.prototype.un=Jp.prototype.v;Jp.prototype.unByKey=Jp.prototype.C;hk.prototype.get=hk.prototype.get;hk.prototype.getKeys=hk.prototype.G;hk.prototype.getProperties=hk.prototype.H;hk.prototype.set=hk.prototype.set;
hk.prototype.setProperties=hk.prototype.u;hk.prototype.unset=hk.prototype.J;hk.prototype.changed=hk.prototype.k;hk.prototype.getRevision=hk.prototype.A;hk.prototype.on=hk.prototype.s;hk.prototype.once=hk.prototype.B;hk.prototype.un=hk.prototype.v;hk.prototype.unByKey=hk.prototype.C;F.prototype.getBrightness=F.prototype.Bb;F.prototype.getContrast=F.prototype.Cb;F.prototype.getHue=F.prototype.Db;F.prototype.getExtent=F.prototype.I;F.prototype.getMaxResolution=F.prototype.Eb;
F.prototype.getMinResolution=F.prototype.Fb;F.prototype.getOpacity=F.prototype.Jb;F.prototype.getSaturation=F.prototype.Gb;F.prototype.getVisible=F.prototype.fb;F.prototype.setBrightness=F.prototype.gc;F.prototype.setContrast=F.prototype.hc;F.prototype.setHue=F.prototype.ic;F.prototype.setExtent=F.prototype.bc;F.prototype.setMaxResolution=F.prototype.jc;F.prototype.setMinResolution=F.prototype.kc;F.prototype.setOpacity=F.prototype.cc;F.prototype.setSaturation=F.prototype.lc;
F.prototype.setVisible=F.prototype.mc;F.prototype.get=F.prototype.get;F.prototype.getKeys=F.prototype.G;F.prototype.getProperties=F.prototype.H;F.prototype.set=F.prototype.set;F.prototype.setProperties=F.prototype.u;F.prototype.unset=F.prototype.J;F.prototype.changed=F.prototype.k;F.prototype.getRevision=F.prototype.A;F.prototype.on=F.prototype.s;F.prototype.once=F.prototype.B;F.prototype.un=F.prototype.v;F.prototype.unByKey=F.prototype.C;M.prototype.setMap=M.prototype.setMap;
M.prototype.setSource=M.prototype.Kc;M.prototype.getBrightness=M.prototype.Bb;M.prototype.getContrast=M.prototype.Cb;M.prototype.getHue=M.prototype.Db;M.prototype.getExtent=M.prototype.I;M.prototype.getMaxResolution=M.prototype.Eb;M.prototype.getMinResolution=M.prototype.Fb;M.prototype.getOpacity=M.prototype.Jb;M.prototype.getSaturation=M.prototype.Gb;M.prototype.getVisible=M.prototype.fb;M.prototype.setBrightness=M.prototype.gc;M.prototype.setContrast=M.prototype.hc;M.prototype.setHue=M.prototype.ic;
M.prototype.setExtent=M.prototype.bc;M.prototype.setMaxResolution=M.prototype.jc;M.prototype.setMinResolution=M.prototype.kc;M.prototype.setOpacity=M.prototype.cc;M.prototype.setSaturation=M.prototype.lc;M.prototype.setVisible=M.prototype.mc;M.prototype.get=M.prototype.get;M.prototype.getKeys=M.prototype.G;M.prototype.getProperties=M.prototype.H;M.prototype.set=M.prototype.set;M.prototype.setProperties=M.prototype.u;M.prototype.unset=M.prototype.J;M.prototype.changed=M.prototype.k;
M.prototype.getRevision=M.prototype.A;M.prototype.on=M.prototype.s;M.prototype.once=M.prototype.B;M.prototype.un=M.prototype.v;M.prototype.unByKey=M.prototype.C;Z.prototype.getSource=Z.prototype.V;Z.prototype.getStyle=Z.prototype.K;Z.prototype.getStyleFunction=Z.prototype.U;Z.prototype.setStyle=Z.prototype.e;Z.prototype.setMap=Z.prototype.setMap;Z.prototype.setSource=Z.prototype.Kc;Z.prototype.getBrightness=Z.prototype.Bb;Z.prototype.getContrast=Z.prototype.Cb;Z.prototype.getHue=Z.prototype.Db;
Z.prototype.getExtent=Z.prototype.I;Z.prototype.getMaxResolution=Z.prototype.Eb;Z.prototype.getMinResolution=Z.prototype.Fb;Z.prototype.getOpacity=Z.prototype.Jb;Z.prototype.getSaturation=Z.prototype.Gb;Z.prototype.getVisible=Z.prototype.fb;Z.prototype.setBrightness=Z.prototype.gc;Z.prototype.setContrast=Z.prototype.hc;Z.prototype.setHue=Z.prototype.ic;Z.prototype.setExtent=Z.prototype.bc;Z.prototype.setMaxResolution=Z.prototype.jc;Z.prototype.setMinResolution=Z.prototype.kc;
Z.prototype.setOpacity=Z.prototype.cc;Z.prototype.setSaturation=Z.prototype.lc;Z.prototype.setVisible=Z.prototype.mc;Z.prototype.get=Z.prototype.get;Z.prototype.getKeys=Z.prototype.G;Z.prototype.getProperties=Z.prototype.H;Z.prototype.set=Z.prototype.set;Z.prototype.setProperties=Z.prototype.u;Z.prototype.unset=Z.prototype.J;Z.prototype.changed=Z.prototype.k;Z.prototype.getRevision=Z.prototype.A;Z.prototype.on=Z.prototype.s;Z.prototype.once=Z.prototype.B;Z.prototype.un=Z.prototype.v;
Z.prototype.unByKey=Z.prototype.C;I.prototype.setMap=I.prototype.setMap;I.prototype.setSource=I.prototype.Kc;I.prototype.getBrightness=I.prototype.Bb;I.prototype.getContrast=I.prototype.Cb;I.prototype.getHue=I.prototype.Db;I.prototype.getExtent=I.prototype.I;I.prototype.getMaxResolution=I.prototype.Eb;I.prototype.getMinResolution=I.prototype.Fb;I.prototype.getOpacity=I.prototype.Jb;I.prototype.getSaturation=I.prototype.Gb;I.prototype.getVisible=I.prototype.fb;I.prototype.setBrightness=I.prototype.gc;
I.prototype.setContrast=I.prototype.hc;I.prototype.setHue=I.prototype.ic;I.prototype.setExtent=I.prototype.bc;I.prototype.setMaxResolution=I.prototype.jc;I.prototype.setMinResolution=I.prototype.kc;I.prototype.setOpacity=I.prototype.cc;I.prototype.setSaturation=I.prototype.lc;I.prototype.setVisible=I.prototype.mc;I.prototype.get=I.prototype.get;I.prototype.getKeys=I.prototype.G;I.prototype.getProperties=I.prototype.H;I.prototype.set=I.prototype.set;I.prototype.setProperties=I.prototype.u;
I.prototype.unset=I.prototype.J;I.prototype.changed=I.prototype.k;I.prototype.getRevision=I.prototype.A;I.prototype.on=I.prototype.s;I.prototype.once=I.prototype.B;I.prototype.un=I.prototype.v;I.prototype.unByKey=I.prototype.C;G.prototype.getBrightness=G.prototype.Bb;G.prototype.getContrast=G.prototype.Cb;G.prototype.getHue=G.prototype.Db;G.prototype.getExtent=G.prototype.I;G.prototype.getMaxResolution=G.prototype.Eb;G.prototype.getMinResolution=G.prototype.Fb;G.prototype.getOpacity=G.prototype.Jb;
G.prototype.getSaturation=G.prototype.Gb;G.prototype.getVisible=G.prototype.fb;G.prototype.setBrightness=G.prototype.gc;G.prototype.setContrast=G.prototype.hc;G.prototype.setHue=G.prototype.ic;G.prototype.setExtent=G.prototype.bc;G.prototype.setMaxResolution=G.prototype.jc;G.prototype.setMinResolution=G.prototype.kc;G.prototype.setOpacity=G.prototype.cc;G.prototype.setSaturation=G.prototype.lc;G.prototype.setVisible=G.prototype.mc;G.prototype.get=G.prototype.get;G.prototype.getKeys=G.prototype.G;
G.prototype.getProperties=G.prototype.H;G.prototype.set=G.prototype.set;G.prototype.setProperties=G.prototype.u;G.prototype.unset=G.prototype.J;G.prototype.changed=G.prototype.k;G.prototype.getRevision=G.prototype.A;G.prototype.on=G.prototype.s;G.prototype.once=G.prototype.B;G.prototype.un=G.prototype.v;G.prototype.unByKey=G.prototype.C;J.prototype.setMap=J.prototype.setMap;J.prototype.setSource=J.prototype.Kc;J.prototype.getBrightness=J.prototype.Bb;J.prototype.getContrast=J.prototype.Cb;
J.prototype.getHue=J.prototype.Db;J.prototype.getExtent=J.prototype.I;J.prototype.getMaxResolution=J.prototype.Eb;J.prototype.getMinResolution=J.prototype.Fb;J.prototype.getOpacity=J.prototype.Jb;J.prototype.getSaturation=J.prototype.Gb;J.prototype.getVisible=J.prototype.fb;J.prototype.setBrightness=J.prototype.gc;J.prototype.setContrast=J.prototype.hc;J.prototype.setHue=J.prototype.ic;J.prototype.setExtent=J.prototype.bc;J.prototype.setMaxResolution=J.prototype.jc;J.prototype.setMinResolution=J.prototype.kc;
J.prototype.setOpacity=J.prototype.cc;J.prototype.setSaturation=J.prototype.lc;J.prototype.setVisible=J.prototype.mc;J.prototype.get=J.prototype.get;J.prototype.getKeys=J.prototype.G;J.prototype.getProperties=J.prototype.H;J.prototype.set=J.prototype.set;J.prototype.setProperties=J.prototype.u;J.prototype.unset=J.prototype.J;J.prototype.changed=J.prototype.k;J.prototype.getRevision=J.prototype.A;J.prototype.on=J.prototype.s;J.prototype.once=J.prototype.B;J.prototype.un=J.prototype.v;
J.prototype.unByKey=J.prototype.C;Sk.prototype.get=Sk.prototype.get;Sk.prototype.getKeys=Sk.prototype.G;Sk.prototype.getProperties=Sk.prototype.H;Sk.prototype.set=Sk.prototype.set;Sk.prototype.setProperties=Sk.prototype.u;Sk.prototype.unset=Sk.prototype.J;Sk.prototype.changed=Sk.prototype.k;Sk.prototype.getRevision=Sk.prototype.A;Sk.prototype.on=Sk.prototype.s;Sk.prototype.once=Sk.prototype.B;Sk.prototype.un=Sk.prototype.v;Sk.prototype.unByKey=Sk.prototype.C;Wk.prototype.getActive=Wk.prototype.b;
Wk.prototype.setActive=Wk.prototype.d;Wk.prototype.get=Wk.prototype.get;Wk.prototype.getKeys=Wk.prototype.G;Wk.prototype.getProperties=Wk.prototype.H;Wk.prototype.set=Wk.prototype.set;Wk.prototype.setProperties=Wk.prototype.u;Wk.prototype.unset=Wk.prototype.J;Wk.prototype.changed=Wk.prototype.k;Wk.prototype.getRevision=Wk.prototype.A;Wk.prototype.on=Wk.prototype.s;Wk.prototype.once=Wk.prototype.B;Wk.prototype.un=Wk.prototype.v;Wk.prototype.unByKey=Wk.prototype.C;Qx.prototype.getActive=Qx.prototype.b;
Qx.prototype.setActive=Qx.prototype.d;Qx.prototype.get=Qx.prototype.get;Qx.prototype.getKeys=Qx.prototype.G;Qx.prototype.getProperties=Qx.prototype.H;Qx.prototype.set=Qx.prototype.set;Qx.prototype.setProperties=Qx.prototype.u;Qx.prototype.unset=Qx.prototype.J;Qx.prototype.changed=Qx.prototype.k;Qx.prototype.getRevision=Qx.prototype.A;Qx.prototype.on=Qx.prototype.s;Qx.prototype.once=Qx.prototype.B;Qx.prototype.un=Qx.prototype.v;Qx.prototype.unByKey=Qx.prototype.C;el.prototype.getActive=el.prototype.b;
el.prototype.setActive=el.prototype.d;el.prototype.get=el.prototype.get;el.prototype.getKeys=el.prototype.G;el.prototype.getProperties=el.prototype.H;el.prototype.set=el.prototype.set;el.prototype.setProperties=el.prototype.u;el.prototype.unset=el.prototype.J;el.prototype.changed=el.prototype.k;el.prototype.getRevision=el.prototype.A;el.prototype.on=el.prototype.s;el.prototype.once=el.prototype.B;el.prototype.un=el.prototype.v;el.prototype.unByKey=el.prototype.C;ul.prototype.getActive=ul.prototype.b;
ul.prototype.setActive=ul.prototype.d;ul.prototype.get=ul.prototype.get;ul.prototype.getKeys=ul.prototype.G;ul.prototype.getProperties=ul.prototype.H;ul.prototype.set=ul.prototype.set;ul.prototype.setProperties=ul.prototype.u;ul.prototype.unset=ul.prototype.J;ul.prototype.changed=ul.prototype.k;ul.prototype.getRevision=ul.prototype.A;ul.prototype.on=ul.prototype.s;ul.prototype.once=ul.prototype.B;ul.prototype.un=ul.prototype.v;ul.prototype.unByKey=ul.prototype.C;hl.prototype.getActive=hl.prototype.b;
hl.prototype.setActive=hl.prototype.d;hl.prototype.get=hl.prototype.get;hl.prototype.getKeys=hl.prototype.G;hl.prototype.getProperties=hl.prototype.H;hl.prototype.set=hl.prototype.set;hl.prototype.setProperties=hl.prototype.u;hl.prototype.unset=hl.prototype.J;hl.prototype.changed=hl.prototype.k;hl.prototype.getRevision=hl.prototype.A;hl.prototype.on=hl.prototype.s;hl.prototype.once=hl.prototype.B;hl.prototype.un=hl.prototype.v;hl.prototype.unByKey=hl.prototype.C;Ux.prototype.getActive=Ux.prototype.b;
Ux.prototype.setActive=Ux.prototype.d;Ux.prototype.get=Ux.prototype.get;Ux.prototype.getKeys=Ux.prototype.G;Ux.prototype.getProperties=Ux.prototype.H;Ux.prototype.set=Ux.prototype.set;Ux.prototype.setProperties=Ux.prototype.u;Ux.prototype.unset=Ux.prototype.J;Ux.prototype.changed=Ux.prototype.k;Ux.prototype.getRevision=Ux.prototype.A;Ux.prototype.on=Ux.prototype.s;Ux.prototype.once=Ux.prototype.B;Ux.prototype.un=Ux.prototype.v;Ux.prototype.unByKey=Ux.prototype.C;ll.prototype.getActive=ll.prototype.b;
ll.prototype.setActive=ll.prototype.d;ll.prototype.get=ll.prototype.get;ll.prototype.getKeys=ll.prototype.G;ll.prototype.getProperties=ll.prototype.H;ll.prototype.set=ll.prototype.set;ll.prototype.setProperties=ll.prototype.u;ll.prototype.unset=ll.prototype.J;ll.prototype.changed=ll.prototype.k;ll.prototype.getRevision=ll.prototype.A;ll.prototype.on=ll.prototype.s;ll.prototype.once=ll.prototype.B;ll.prototype.un=ll.prototype.v;ll.prototype.unByKey=ll.prototype.C;Ml.prototype.getGeometry=Ml.prototype.Q;
Ml.prototype.getActive=Ml.prototype.b;Ml.prototype.setActive=Ml.prototype.d;Ml.prototype.get=Ml.prototype.get;Ml.prototype.getKeys=Ml.prototype.G;Ml.prototype.getProperties=Ml.prototype.H;Ml.prototype.set=Ml.prototype.set;Ml.prototype.setProperties=Ml.prototype.u;Ml.prototype.unset=Ml.prototype.J;Ml.prototype.changed=Ml.prototype.k;Ml.prototype.getRevision=Ml.prototype.A;Ml.prototype.on=Ml.prototype.s;Ml.prototype.once=Ml.prototype.B;Ml.prototype.un=Ml.prototype.v;Ml.prototype.unByKey=Ml.prototype.C;
Zx.prototype.getActive=Zx.prototype.b;Zx.prototype.setActive=Zx.prototype.d;Zx.prototype.get=Zx.prototype.get;Zx.prototype.getKeys=Zx.prototype.G;Zx.prototype.getProperties=Zx.prototype.H;Zx.prototype.set=Zx.prototype.set;Zx.prototype.setProperties=Zx.prototype.u;Zx.prototype.unset=Zx.prototype.J;Zx.prototype.changed=Zx.prototype.k;Zx.prototype.getRevision=Zx.prototype.A;Zx.prototype.on=Zx.prototype.s;Zx.prototype.once=Zx.prototype.B;Zx.prototype.un=Zx.prototype.v;Zx.prototype.unByKey=Zx.prototype.C;
Nl.prototype.getActive=Nl.prototype.b;Nl.prototype.setActive=Nl.prototype.d;Nl.prototype.get=Nl.prototype.get;Nl.prototype.getKeys=Nl.prototype.G;Nl.prototype.getProperties=Nl.prototype.H;Nl.prototype.set=Nl.prototype.set;Nl.prototype.setProperties=Nl.prototype.u;Nl.prototype.unset=Nl.prototype.J;Nl.prototype.changed=Nl.prototype.k;Nl.prototype.getRevision=Nl.prototype.A;Nl.prototype.on=Nl.prototype.s;Nl.prototype.once=Nl.prototype.B;Nl.prototype.un=Nl.prototype.v;Nl.prototype.unByKey=Nl.prototype.C;
Pl.prototype.getActive=Pl.prototype.b;Pl.prototype.setActive=Pl.prototype.d;Pl.prototype.get=Pl.prototype.get;Pl.prototype.getKeys=Pl.prototype.G;Pl.prototype.getProperties=Pl.prototype.H;Pl.prototype.set=Pl.prototype.set;Pl.prototype.setProperties=Pl.prototype.u;Pl.prototype.unset=Pl.prototype.J;Pl.prototype.changed=Pl.prototype.k;Pl.prototype.getRevision=Pl.prototype.A;Pl.prototype.on=Pl.prototype.s;Pl.prototype.once=Pl.prototype.B;Pl.prototype.un=Pl.prototype.v;Pl.prototype.unByKey=Pl.prototype.C;
py.prototype.getActive=py.prototype.b;py.prototype.setActive=py.prototype.d;py.prototype.get=py.prototype.get;py.prototype.getKeys=py.prototype.G;py.prototype.getProperties=py.prototype.H;py.prototype.set=py.prototype.set;py.prototype.setProperties=py.prototype.u;py.prototype.unset=py.prototype.J;py.prototype.changed=py.prototype.k;py.prototype.getRevision=py.prototype.A;py.prototype.on=py.prototype.s;py.prototype.once=py.prototype.B;py.prototype.un=py.prototype.v;py.prototype.unByKey=py.prototype.C;
Rl.prototype.getActive=Rl.prototype.b;Rl.prototype.setActive=Rl.prototype.d;Rl.prototype.get=Rl.prototype.get;Rl.prototype.getKeys=Rl.prototype.G;Rl.prototype.getProperties=Rl.prototype.H;Rl.prototype.set=Rl.prototype.set;Rl.prototype.setProperties=Rl.prototype.u;Rl.prototype.unset=Rl.prototype.J;Rl.prototype.changed=Rl.prototype.k;Rl.prototype.getRevision=Rl.prototype.A;Rl.prototype.on=Rl.prototype.s;Rl.prototype.once=Rl.prototype.B;Rl.prototype.un=Rl.prototype.v;Rl.prototype.unByKey=Rl.prototype.C;
Tl.prototype.getActive=Tl.prototype.b;Tl.prototype.setActive=Tl.prototype.d;Tl.prototype.get=Tl.prototype.get;Tl.prototype.getKeys=Tl.prototype.G;Tl.prototype.getProperties=Tl.prototype.H;Tl.prototype.set=Tl.prototype.set;Tl.prototype.setProperties=Tl.prototype.u;Tl.prototype.unset=Tl.prototype.J;Tl.prototype.changed=Tl.prototype.k;Tl.prototype.getRevision=Tl.prototype.A;Tl.prototype.on=Tl.prototype.s;Tl.prototype.once=Tl.prototype.B;Tl.prototype.un=Tl.prototype.v;Tl.prototype.unByKey=Tl.prototype.C;
Xl.prototype.getActive=Xl.prototype.b;Xl.prototype.setActive=Xl.prototype.d;Xl.prototype.get=Xl.prototype.get;Xl.prototype.getKeys=Xl.prototype.G;Xl.prototype.getProperties=Xl.prototype.H;Xl.prototype.set=Xl.prototype.set;Xl.prototype.setProperties=Xl.prototype.u;Xl.prototype.unset=Xl.prototype.J;Xl.prototype.changed=Xl.prototype.k;Xl.prototype.getRevision=Xl.prototype.A;Xl.prototype.on=Xl.prototype.s;Xl.prototype.once=Xl.prototype.B;Xl.prototype.un=Xl.prototype.v;Xl.prototype.unByKey=Xl.prototype.C;
Ay.prototype.getActive=Ay.prototype.b;Ay.prototype.setActive=Ay.prototype.d;Ay.prototype.get=Ay.prototype.get;Ay.prototype.getKeys=Ay.prototype.G;Ay.prototype.getProperties=Ay.prototype.H;Ay.prototype.set=Ay.prototype.set;Ay.prototype.setProperties=Ay.prototype.u;Ay.prototype.unset=Ay.prototype.J;Ay.prototype.changed=Ay.prototype.k;Ay.prototype.getRevision=Ay.prototype.A;Ay.prototype.on=Ay.prototype.s;Ay.prototype.once=Ay.prototype.B;Ay.prototype.un=Ay.prototype.v;Ay.prototype.unByKey=Ay.prototype.C;
Dy.prototype.getActive=Dy.prototype.b;Dy.prototype.setActive=Dy.prototype.d;Dy.prototype.get=Dy.prototype.get;Dy.prototype.getKeys=Dy.prototype.G;Dy.prototype.getProperties=Dy.prototype.H;Dy.prototype.set=Dy.prototype.set;Dy.prototype.setProperties=Dy.prototype.u;Dy.prototype.unset=Dy.prototype.J;Dy.prototype.changed=Dy.prototype.k;Dy.prototype.getRevision=Dy.prototype.A;Dy.prototype.on=Dy.prototype.s;Dy.prototype.once=Dy.prototype.B;Dy.prototype.un=Dy.prototype.v;Dy.prototype.unByKey=Dy.prototype.C;
We.prototype.get=We.prototype.get;We.prototype.getKeys=We.prototype.G;We.prototype.getProperties=We.prototype.H;We.prototype.set=We.prototype.set;We.prototype.setProperties=We.prototype.u;We.prototype.unset=We.prototype.J;We.prototype.changed=We.prototype.k;We.prototype.getRevision=We.prototype.A;We.prototype.on=We.prototype.s;We.prototype.once=We.prototype.B;We.prototype.un=We.prototype.v;We.prototype.unByKey=We.prototype.C;Ye.prototype.getClosestPoint=Ye.prototype.Ta;Ye.prototype.getExtent=Ye.prototype.I;
Ye.prototype.transform=Ye.prototype.transform;Ye.prototype.get=Ye.prototype.get;Ye.prototype.getKeys=Ye.prototype.G;Ye.prototype.getProperties=Ye.prototype.H;Ye.prototype.set=Ye.prototype.set;Ye.prototype.setProperties=Ye.prototype.u;Ye.prototype.unset=Ye.prototype.J;Ye.prototype.changed=Ye.prototype.k;Ye.prototype.getRevision=Ye.prototype.A;Ye.prototype.on=Ye.prototype.s;Ye.prototype.once=Ye.prototype.B;Ye.prototype.un=Ye.prototype.v;Ye.prototype.unByKey=Ye.prototype.C;
Wm.prototype.getFirstCoordinate=Wm.prototype.tb;Wm.prototype.getLastCoordinate=Wm.prototype.ub;Wm.prototype.getLayout=Wm.prototype.vb;Wm.prototype.applyTransform=Wm.prototype.oa;Wm.prototype.translate=Wm.prototype.Na;Wm.prototype.getClosestPoint=Wm.prototype.Ta;Wm.prototype.getExtent=Wm.prototype.I;Wm.prototype.get=Wm.prototype.get;Wm.prototype.getKeys=Wm.prototype.G;Wm.prototype.getProperties=Wm.prototype.H;Wm.prototype.set=Wm.prototype.set;Wm.prototype.setProperties=Wm.prototype.u;
Wm.prototype.unset=Wm.prototype.J;Wm.prototype.changed=Wm.prototype.k;Wm.prototype.getRevision=Wm.prototype.A;Wm.prototype.on=Wm.prototype.s;Wm.prototype.once=Wm.prototype.B;Wm.prototype.un=Wm.prototype.v;Wm.prototype.unByKey=Wm.prototype.C;Ym.prototype.getClosestPoint=Ym.prototype.Ta;Ym.prototype.getExtent=Ym.prototype.I;Ym.prototype.transform=Ym.prototype.transform;Ym.prototype.get=Ym.prototype.get;Ym.prototype.getKeys=Ym.prototype.G;Ym.prototype.getProperties=Ym.prototype.H;Ym.prototype.set=Ym.prototype.set;
Ym.prototype.setProperties=Ym.prototype.u;Ym.prototype.unset=Ym.prototype.J;Ym.prototype.changed=Ym.prototype.k;Ym.prototype.getRevision=Ym.prototype.A;Ym.prototype.on=Ym.prototype.s;Ym.prototype.once=Ym.prototype.B;Ym.prototype.un=Ym.prototype.v;Ym.prototype.unByKey=Ym.prototype.C;sf.prototype.getFirstCoordinate=sf.prototype.tb;sf.prototype.getLastCoordinate=sf.prototype.ub;sf.prototype.getLayout=sf.prototype.vb;sf.prototype.applyTransform=sf.prototype.oa;sf.prototype.translate=sf.prototype.Na;
sf.prototype.getClosestPoint=sf.prototype.Ta;sf.prototype.getExtent=sf.prototype.I;sf.prototype.transform=sf.prototype.transform;sf.prototype.get=sf.prototype.get;sf.prototype.getKeys=sf.prototype.G;sf.prototype.getProperties=sf.prototype.H;sf.prototype.set=sf.prototype.set;sf.prototype.setProperties=sf.prototype.u;sf.prototype.unset=sf.prototype.J;sf.prototype.changed=sf.prototype.k;sf.prototype.getRevision=sf.prototype.A;sf.prototype.on=sf.prototype.s;sf.prototype.once=sf.prototype.B;
sf.prototype.un=sf.prototype.v;sf.prototype.unByKey=sf.prototype.C;N.prototype.getFirstCoordinate=N.prototype.tb;N.prototype.getLastCoordinate=N.prototype.ub;N.prototype.getLayout=N.prototype.vb;N.prototype.applyTransform=N.prototype.oa;N.prototype.translate=N.prototype.Na;N.prototype.getClosestPoint=N.prototype.Ta;N.prototype.getExtent=N.prototype.I;N.prototype.transform=N.prototype.transform;N.prototype.get=N.prototype.get;N.prototype.getKeys=N.prototype.G;N.prototype.getProperties=N.prototype.H;
N.prototype.set=N.prototype.set;N.prototype.setProperties=N.prototype.u;N.prototype.unset=N.prototype.J;N.prototype.changed=N.prototype.k;N.prototype.getRevision=N.prototype.A;N.prototype.on=N.prototype.s;N.prototype.once=N.prototype.B;N.prototype.un=N.prototype.v;N.prototype.unByKey=N.prototype.C;O.prototype.getFirstCoordinate=O.prototype.tb;O.prototype.getLastCoordinate=O.prototype.ub;O.prototype.getLayout=O.prototype.vb;O.prototype.applyTransform=O.prototype.oa;O.prototype.translate=O.prototype.Na;
O.prototype.getClosestPoint=O.prototype.Ta;O.prototype.getExtent=O.prototype.I;O.prototype.transform=O.prototype.transform;O.prototype.get=O.prototype.get;O.prototype.getKeys=O.prototype.G;O.prototype.getProperties=O.prototype.H;O.prototype.set=O.prototype.set;O.prototype.setProperties=O.prototype.u;O.prototype.unset=O.prototype.J;O.prototype.changed=O.prototype.k;O.prototype.getRevision=O.prototype.A;O.prototype.on=O.prototype.s;O.prototype.once=O.prototype.B;O.prototype.un=O.prototype.v;
O.prototype.unByKey=O.prototype.C;hn.prototype.getFirstCoordinate=hn.prototype.tb;hn.prototype.getLastCoordinate=hn.prototype.ub;hn.prototype.getLayout=hn.prototype.vb;hn.prototype.applyTransform=hn.prototype.oa;hn.prototype.translate=hn.prototype.Na;hn.prototype.getClosestPoint=hn.prototype.Ta;hn.prototype.getExtent=hn.prototype.I;hn.prototype.transform=hn.prototype.transform;hn.prototype.get=hn.prototype.get;hn.prototype.getKeys=hn.prototype.G;hn.prototype.getProperties=hn.prototype.H;
hn.prototype.set=hn.prototype.set;hn.prototype.setProperties=hn.prototype.u;hn.prototype.unset=hn.prototype.J;hn.prototype.changed=hn.prototype.k;hn.prototype.getRevision=hn.prototype.A;hn.prototype.on=hn.prototype.s;hn.prototype.once=hn.prototype.B;hn.prototype.un=hn.prototype.v;hn.prototype.unByKey=hn.prototype.C;P.prototype.getFirstCoordinate=P.prototype.tb;P.prototype.getLastCoordinate=P.prototype.ub;P.prototype.getLayout=P.prototype.vb;P.prototype.applyTransform=P.prototype.oa;
P.prototype.translate=P.prototype.Na;P.prototype.getClosestPoint=P.prototype.Ta;P.prototype.getExtent=P.prototype.I;P.prototype.transform=P.prototype.transform;P.prototype.get=P.prototype.get;P.prototype.getKeys=P.prototype.G;P.prototype.getProperties=P.prototype.H;P.prototype.set=P.prototype.set;P.prototype.setProperties=P.prototype.u;P.prototype.unset=P.prototype.J;P.prototype.changed=P.prototype.k;P.prototype.getRevision=P.prototype.A;P.prototype.on=P.prototype.s;P.prototype.once=P.prototype.B;
P.prototype.un=P.prototype.v;P.prototype.unByKey=P.prototype.C;C.prototype.getFirstCoordinate=C.prototype.tb;C.prototype.getLastCoordinate=C.prototype.ub;C.prototype.getLayout=C.prototype.vb;C.prototype.applyTransform=C.prototype.oa;C.prototype.translate=C.prototype.Na;C.prototype.getClosestPoint=C.prototype.Ta;C.prototype.getExtent=C.prototype.I;C.prototype.transform=C.prototype.transform;C.prototype.get=C.prototype.get;C.prototype.getKeys=C.prototype.G;C.prototype.getProperties=C.prototype.H;
C.prototype.set=C.prototype.set;C.prototype.setProperties=C.prototype.u;C.prototype.unset=C.prototype.J;C.prototype.changed=C.prototype.k;C.prototype.getRevision=C.prototype.A;C.prototype.on=C.prototype.s;C.prototype.once=C.prototype.B;C.prototype.un=C.prototype.v;C.prototype.unByKey=C.prototype.C;D.prototype.getFirstCoordinate=D.prototype.tb;D.prototype.getLastCoordinate=D.prototype.ub;D.prototype.getLayout=D.prototype.vb;D.prototype.applyTransform=D.prototype.oa;D.prototype.translate=D.prototype.Na;
D.prototype.getClosestPoint=D.prototype.Ta;D.prototype.getExtent=D.prototype.I;D.prototype.transform=D.prototype.transform;D.prototype.get=D.prototype.get;D.prototype.getKeys=D.prototype.G;D.prototype.getProperties=D.prototype.H;D.prototype.set=D.prototype.set;D.prototype.setProperties=D.prototype.u;D.prototype.unset=D.prototype.J;D.prototype.changed=D.prototype.k;D.prototype.getRevision=D.prototype.A;D.prototype.on=D.prototype.s;D.prototype.once=D.prototype.B;D.prototype.un=D.prototype.v;
D.prototype.unByKey=D.prototype.C;rs.prototype.readFeatures=rs.prototype.ja;is.prototype.readFeatures=is.prototype.ja;is.prototype.readFeatures=is.prototype.ja;vh.prototype.get=vh.prototype.get;vh.prototype.getKeys=vh.prototype.G;vh.prototype.getProperties=vh.prototype.H;vh.prototype.set=vh.prototype.set;vh.prototype.setProperties=vh.prototype.u;vh.prototype.unset=vh.prototype.J;vh.prototype.changed=vh.prototype.k;vh.prototype.getRevision=vh.prototype.A;vh.prototype.on=vh.prototype.s;
vh.prototype.once=vh.prototype.B;vh.prototype.un=vh.prototype.v;vh.prototype.unByKey=vh.prototype.C;Xh.prototype.getMap=Xh.prototype.e;Xh.prototype.setMap=Xh.prototype.setMap;Xh.prototype.setTarget=Xh.prototype.c;Xh.prototype.get=Xh.prototype.get;Xh.prototype.getKeys=Xh.prototype.G;Xh.prototype.getProperties=Xh.prototype.H;Xh.prototype.set=Xh.prototype.set;Xh.prototype.setProperties=Xh.prototype.u;Xh.prototype.unset=Xh.prototype.J;Xh.prototype.changed=Xh.prototype.k;Xh.prototype.getRevision=Xh.prototype.A;
Xh.prototype.on=Xh.prototype.s;Xh.prototype.once=Xh.prototype.B;Xh.prototype.un=Xh.prototype.v;Xh.prototype.unByKey=Xh.prototype.C;hi.prototype.getMap=hi.prototype.e;hi.prototype.setMap=hi.prototype.setMap;hi.prototype.setTarget=hi.prototype.c;hi.prototype.get=hi.prototype.get;hi.prototype.getKeys=hi.prototype.G;hi.prototype.getProperties=hi.prototype.H;hi.prototype.set=hi.prototype.set;hi.prototype.setProperties=hi.prototype.u;hi.prototype.unset=hi.prototype.J;hi.prototype.changed=hi.prototype.k;
hi.prototype.getRevision=hi.prototype.A;hi.prototype.on=hi.prototype.s;hi.prototype.once=hi.prototype.B;hi.prototype.un=hi.prototype.v;hi.prototype.unByKey=hi.prototype.C;ii.prototype.getMap=ii.prototype.e;ii.prototype.setTarget=ii.prototype.c;ii.prototype.get=ii.prototype.get;ii.prototype.getKeys=ii.prototype.G;ii.prototype.getProperties=ii.prototype.H;ii.prototype.set=ii.prototype.set;ii.prototype.setProperties=ii.prototype.u;ii.prototype.unset=ii.prototype.J;ii.prototype.changed=ii.prototype.k;
ii.prototype.getRevision=ii.prototype.A;ii.prototype.on=ii.prototype.s;ii.prototype.once=ii.prototype.B;ii.prototype.un=ii.prototype.v;ii.prototype.unByKey=ii.prototype.C;br.prototype.getMap=br.prototype.e;br.prototype.setTarget=br.prototype.c;br.prototype.get=br.prototype.get;br.prototype.getKeys=br.prototype.G;br.prototype.getProperties=br.prototype.H;br.prototype.set=br.prototype.set;br.prototype.setProperties=br.prototype.u;br.prototype.unset=br.prototype.J;br.prototype.changed=br.prototype.k;
br.prototype.getRevision=br.prototype.A;br.prototype.on=br.prototype.s;br.prototype.once=br.prototype.B;br.prototype.un=br.prototype.v;br.prototype.unByKey=br.prototype.C;$h.prototype.getMap=$h.prototype.e;$h.prototype.setMap=$h.prototype.setMap;$h.prototype.setTarget=$h.prototype.c;$h.prototype.get=$h.prototype.get;$h.prototype.getKeys=$h.prototype.G;$h.prototype.getProperties=$h.prototype.H;$h.prototype.set=$h.prototype.set;$h.prototype.setProperties=$h.prototype.u;$h.prototype.unset=$h.prototype.J;
$h.prototype.changed=$h.prototype.k;$h.prototype.getRevision=$h.prototype.A;$h.prototype.on=$h.prototype.s;$h.prototype.once=$h.prototype.B;$h.prototype.un=$h.prototype.v;$h.prototype.unByKey=$h.prototype.C;gr.prototype.getMap=gr.prototype.e;gr.prototype.setMap=gr.prototype.setMap;gr.prototype.setTarget=gr.prototype.c;gr.prototype.get=gr.prototype.get;gr.prototype.getKeys=gr.prototype.G;gr.prototype.getProperties=gr.prototype.H;gr.prototype.set=gr.prototype.set;gr.prototype.setProperties=gr.prototype.u;
gr.prototype.unset=gr.prototype.J;gr.prototype.changed=gr.prototype.k;gr.prototype.getRevision=gr.prototype.A;gr.prototype.on=gr.prototype.s;gr.prototype.once=gr.prototype.B;gr.prototype.un=gr.prototype.v;gr.prototype.unByKey=gr.prototype.C;bi.prototype.getMap=bi.prototype.e;bi.prototype.setMap=bi.prototype.setMap;bi.prototype.setTarget=bi.prototype.c;bi.prototype.get=bi.prototype.get;bi.prototype.getKeys=bi.prototype.G;bi.prototype.getProperties=bi.prototype.H;bi.prototype.set=bi.prototype.set;
bi.prototype.setProperties=bi.prototype.u;bi.prototype.unset=bi.prototype.J;bi.prototype.changed=bi.prototype.k;bi.prototype.getRevision=bi.prototype.A;bi.prototype.on=bi.prototype.s;bi.prototype.once=bi.prototype.B;bi.prototype.un=bi.prototype.v;bi.prototype.unByKey=bi.prototype.C;vr.prototype.getMap=vr.prototype.e;vr.prototype.setTarget=vr.prototype.c;vr.prototype.get=vr.prototype.get;vr.prototype.getKeys=vr.prototype.G;vr.prototype.getProperties=vr.prototype.H;vr.prototype.set=vr.prototype.set;
vr.prototype.setProperties=vr.prototype.u;vr.prototype.unset=vr.prototype.J;vr.prototype.changed=vr.prototype.k;vr.prototype.getRevision=vr.prototype.A;vr.prototype.on=vr.prototype.s;vr.prototype.once=vr.prototype.B;vr.prototype.un=vr.prototype.v;vr.prototype.unByKey=vr.prototype.C;Ar.prototype.getMap=Ar.prototype.e;Ar.prototype.setMap=Ar.prototype.setMap;Ar.prototype.setTarget=Ar.prototype.c;Ar.prototype.get=Ar.prototype.get;Ar.prototype.getKeys=Ar.prototype.G;Ar.prototype.getProperties=Ar.prototype.H;
Ar.prototype.set=Ar.prototype.set;Ar.prototype.setProperties=Ar.prototype.u;Ar.prototype.unset=Ar.prototype.J;Ar.prototype.changed=Ar.prototype.k;Ar.prototype.getRevision=Ar.prototype.A;Ar.prototype.on=Ar.prototype.s;Ar.prototype.once=Ar.prototype.B;Ar.prototype.un=Ar.prototype.v;Ar.prototype.unByKey=Ar.prototype.C;
  return OPENLAYERS.ol;
}));

