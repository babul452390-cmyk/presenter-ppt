
var __pptx_lib__ = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // libs/entry_pptx.mjs
  var entry_pptx_exports = {};
  __export(entry_pptx_exports, {
    parse: () => Jf
  });

  // node_modules/pptxtojson/dist/index.js
  function t(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function e(e2) {
    return (function(e3) {
      if (Array.isArray(e3)) return t(e3);
    })(e2) || (function(t2) {
      if ("undefined" != typeof Symbol && null != t2[Symbol.iterator] || null != t2["@@iterator"]) return Array.from(t2);
    })(e2) || (function(e3, r2) {
      if (e3) {
        if ("string" == typeof e3) return t(e3, r2);
        var a2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === a2 && e3.constructor && (a2 = e3.constructor.name), "Map" === a2 || "Set" === a2 ? Array.from(e3) : "Arguments" === a2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a2) ? t(e3, r2) : void 0;
      }
    })(e2) || (function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function r(t2, e2, r2) {
    return e2 in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
  }
  function a(t2, e2, r2, a2, n2, o2, c2) {
    try {
      var i2 = t2[o2](c2), s2 = i2.value;
    } catch (t3) {
      return void r2(t3);
    }
    i2.done ? e2(s2) : Promise.resolve(s2).then(a2, n2);
  }
  function n(t2) {
    return function() {
      var e2 = this, r2 = arguments;
      return new Promise((function(n2, o2) {
        var c2 = t2.apply(e2, r2);
        function i2(t3) {
          a(c2, n2, o2, i2, s2, "next", t3);
        }
        function s2(t3) {
          a(c2, n2, o2, i2, s2, "throw", t3);
        }
        i2(void 0);
      }));
    };
  }
  var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function c(t2) {
    var e2 = t2.default;
    if ("function" == typeof e2) {
      var r2 = function() {
        return e2.apply(this, arguments);
      };
      r2.prototype = e2.prototype;
    } else r2 = {};
    return Object.defineProperty(r2, "__esModule", { value: true }), Object.keys(t2).forEach((function(e3) {
      var a2 = Object.getOwnPropertyDescriptor(t2, e3);
      Object.defineProperty(r2, e3, a2.get ? a2 : { enumerable: true, get: function() {
        return t2[e3];
      } });
    })), r2;
  }
  var i = { exports: {} };
  var s = { exports: {} };
  !(function(t2) {
    function e2(r2) {
      return t2.exports = e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      }, t2.exports.__esModule = true, t2.exports.default = t2.exports, e2(r2);
    }
    t2.exports = e2, t2.exports.__esModule = true, t2.exports.default = t2.exports;
  })(s), (function(t2) {
    var e2 = s.exports.default;
    function r2() {
      t2.exports = r2 = function() {
        return a2;
      }, t2.exports.__esModule = true, t2.exports.default = t2.exports;
      var a2 = {}, n2 = Object.prototype, o2 = n2.hasOwnProperty, c2 = Object.defineProperty || function(t3, e3, r3) {
        t3[e3] = r3.value;
      }, i2 = "function" == typeof Symbol ? Symbol : {}, s2 = i2.iterator || "@@iterator", l2 = i2.asyncIterator || "@@asyncIterator", u2 = i2.toStringTag || "@@toStringTag";
      function f2(t3, e3, r3) {
        return Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }), t3[e3];
      }
      try {
        f2({}, "");
      } catch (t3) {
        f2 = function(t4, e3, r3) {
          return t4[e3] = r3;
        };
      }
      function h2(t3, e3, r3, a3) {
        var n3 = e3 && e3.prototype instanceof b2 ? e3 : b2, o3 = Object.create(n3.prototype), i3 = new C2(a3 || []);
        return c2(o3, "_invoke", { value: M2(t3, r3, i3) }), o3;
      }
      function d2(t3, e3, r3) {
        try {
          return { type: "normal", arg: t3.call(e3, r3) };
        } catch (t4) {
          return { type: "throw", arg: t4 };
        }
      }
      a2.wrap = h2;
      var p2 = {};
      function b2() {
      }
      function g2() {
      }
      function v2() {
      }
      var m2 = {};
      f2(m2, s2, (function() {
        return this;
      }));
      var y2 = Object.getPrototypeOf, L2 = y2 && y2(y2(A2([])));
      L2 && L2 !== n2 && o2.call(L2, s2) && (m2 = L2);
      var w2 = v2.prototype = b2.prototype = Object.create(m2);
      function _2(t3) {
        ["next", "throw", "return"].forEach((function(e3) {
          f2(t3, e3, (function(t4) {
            return this._invoke(e3, t4);
          }));
        }));
      }
      function k2(t3, r3) {
        function a3(n4, c3, i3, s3) {
          var l3 = d2(t3[n4], t3, c3);
          if ("throw" !== l3.type) {
            var u3 = l3.arg, f3 = u3.value;
            return f3 && "object" == e2(f3) && o2.call(f3, "__await") ? r3.resolve(f3.__await).then((function(t4) {
              a3("next", t4, i3, s3);
            }), (function(t4) {
              a3("throw", t4, i3, s3);
            })) : r3.resolve(f3).then((function(t4) {
              u3.value = t4, i3(u3);
            }), (function(t4) {
              return a3("throw", t4, i3, s3);
            }));
          }
          s3(l3.arg);
        }
        var n3;
        c2(this, "_invoke", { value: function(t4, e3) {
          function o3() {
            return new r3((function(r4, n4) {
              a3(t4, e3, r4, n4);
            }));
          }
          return n3 = n3 ? n3.then(o3, o3) : o3();
        } });
      }
      function M2(t3, e3, r3) {
        var a3 = "suspendedStart";
        return function(n3, o3) {
          if ("executing" === a3) throw new Error("Generator is already running");
          if ("completed" === a3) {
            if ("throw" === n3) throw o3;
            return P2();
          }
          for (r3.method = n3, r3.arg = o3; ; ) {
            var c3 = r3.delegate;
            if (c3) {
              var i3 = x2(c3, r3);
              if (i3) {
                if (i3 === p2) continue;
                return i3;
              }
            }
            if ("next" === r3.method) r3.sent = r3._sent = r3.arg;
            else if ("throw" === r3.method) {
              if ("suspendedStart" === a3) throw a3 = "completed", r3.arg;
              r3.dispatchException(r3.arg);
            } else "return" === r3.method && r3.abrupt("return", r3.arg);
            a3 = "executing";
            var s3 = d2(t3, e3, r3);
            if ("normal" === s3.type) {
              if (a3 = r3.done ? "completed" : "suspendedYield", s3.arg === p2) continue;
              return { value: s3.arg, done: r3.done };
            }
            "throw" === s3.type && (a3 = "completed", r3.method = "throw", r3.arg = s3.arg);
          }
        };
      }
      function x2(t3, e3) {
        var r3 = t3.iterator[e3.method];
        if (void 0 === r3) {
          if (e3.delegate = null, "throw" === e3.method) {
            if (t3.iterator.return && (e3.method = "return", e3.arg = void 0, x2(t3, e3), "throw" === e3.method)) return p2;
            e3.method = "throw", e3.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return p2;
        }
        var a3 = d2(r3, t3.iterator, e3.arg);
        if ("throw" === a3.type) return e3.method = "throw", e3.arg = a3.arg, e3.delegate = null, p2;
        var n3 = a3.arg;
        return n3 ? n3.done ? (e3[t3.resultName] = n3.value, e3.next = t3.nextLoc, "return" !== e3.method && (e3.method = "next", e3.arg = void 0), e3.delegate = null, p2) : n3 : (e3.method = "throw", e3.arg = new TypeError("iterator result is not an object"), e3.delegate = null, p2);
      }
      function S2(t3) {
        var e3 = { tryLoc: t3[0] };
        1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
      }
      function I2(t3) {
        var e3 = t3.completion || {};
        e3.type = "normal", delete e3.arg, t3.completion = e3;
      }
      function C2(t3) {
        this.tryEntries = [{ tryLoc: "root" }], t3.forEach(S2, this), this.reset(true);
      }
      function A2(t3) {
        if (t3) {
          var e3 = t3[s2];
          if (e3) return e3.call(t3);
          if ("function" == typeof t3.next) return t3;
          if (!isNaN(t3.length)) {
            var r3 = -1, a3 = function e4() {
              for (; ++r3 < t3.length; ) if (o2.call(t3, r3)) return e4.value = t3[r3], e4.done = false, e4;
              return e4.value = void 0, e4.done = true, e4;
            };
            return a3.next = a3;
          }
        }
        return { next: P2 };
      }
      function P2() {
        return { value: void 0, done: true };
      }
      return g2.prototype = v2, c2(w2, "constructor", { value: v2, configurable: true }), c2(v2, "constructor", { value: g2, configurable: true }), g2.displayName = f2(v2, u2, "GeneratorFunction"), a2.isGeneratorFunction = function(t3) {
        var e3 = "function" == typeof t3 && t3.constructor;
        return !!e3 && (e3 === g2 || "GeneratorFunction" === (e3.displayName || e3.name));
      }, a2.mark = function(t3) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t3, v2) : (t3.__proto__ = v2, f2(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(w2), t3;
      }, a2.awrap = function(t3) {
        return { __await: t3 };
      }, _2(k2.prototype), f2(k2.prototype, l2, (function() {
        return this;
      })), a2.AsyncIterator = k2, a2.async = function(t3, e3, r3, n3, o3) {
        void 0 === o3 && (o3 = Promise);
        var c3 = new k2(h2(t3, e3, r3, n3), o3);
        return a2.isGeneratorFunction(e3) ? c3 : c3.next().then((function(t4) {
          return t4.done ? t4.value : c3.next();
        }));
      }, _2(w2), f2(w2, u2, "Generator"), f2(w2, s2, (function() {
        return this;
      })), f2(w2, "toString", (function() {
        return "[object Generator]";
      })), a2.keys = function(t3) {
        var e3 = Object(t3), r3 = [];
        for (var a3 in e3) r3.push(a3);
        return r3.reverse(), function t4() {
          for (; r3.length; ) {
            var a4 = r3.pop();
            if (a4 in e3) return t4.value = a4, t4.done = false, t4;
          }
          return t4.done = true, t4;
        };
      }, a2.values = A2, C2.prototype = { constructor: C2, reset: function(t3) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I2), !t3) for (var e3 in this) "t" === e3.charAt(0) && o2.call(this, e3) && !isNaN(+e3.slice(1)) && (this[e3] = void 0);
      }, stop: function() {
        this.done = true;
        var t3 = this.tryEntries[0].completion;
        if ("throw" === t3.type) throw t3.arg;
        return this.rval;
      }, dispatchException: function(t3) {
        if (this.done) throw t3;
        var e3 = this;
        function r3(r4, a4) {
          return c3.type = "throw", c3.arg = t3, e3.next = r4, a4 && (e3.method = "next", e3.arg = void 0), !!a4;
        }
        for (var a3 = this.tryEntries.length - 1; a3 >= 0; --a3) {
          var n3 = this.tryEntries[a3], c3 = n3.completion;
          if ("root" === n3.tryLoc) return r3("end");
          if (n3.tryLoc <= this.prev) {
            var i3 = o2.call(n3, "catchLoc"), s3 = o2.call(n3, "finallyLoc");
            if (i3 && s3) {
              if (this.prev < n3.catchLoc) return r3(n3.catchLoc, true);
              if (this.prev < n3.finallyLoc) return r3(n3.finallyLoc);
            } else if (i3) {
              if (this.prev < n3.catchLoc) return r3(n3.catchLoc, true);
            } else {
              if (!s3) throw new Error("try statement without catch or finally");
              if (this.prev < n3.finallyLoc) return r3(n3.finallyLoc);
            }
          }
        }
      }, abrupt: function(t3, e3) {
        for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
          var a3 = this.tryEntries[r3];
          if (a3.tryLoc <= this.prev && o2.call(a3, "finallyLoc") && this.prev < a3.finallyLoc) {
            var n3 = a3;
            break;
          }
        }
        n3 && ("break" === t3 || "continue" === t3) && n3.tryLoc <= e3 && e3 <= n3.finallyLoc && (n3 = null);
        var c3 = n3 ? n3.completion : {};
        return c3.type = t3, c3.arg = e3, n3 ? (this.method = "next", this.next = n3.finallyLoc, p2) : this.complete(c3);
      }, complete: function(t3, e3) {
        if ("throw" === t3.type) throw t3.arg;
        return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), p2;
      }, finish: function(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r3 = this.tryEntries[e3];
          if (r3.finallyLoc === t3) return this.complete(r3.completion, r3.afterLoc), I2(r3), p2;
        }
      }, catch: function(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r3 = this.tryEntries[e3];
          if (r3.tryLoc === t3) {
            var a3 = r3.completion;
            if ("throw" === a3.type) {
              var n3 = a3.arg;
              I2(r3);
            }
            return n3;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(t3, e3, r3) {
        return this.delegate = { iterator: A2(t3), resultName: e3, nextLoc: r3 }, "next" === this.method && (this.arg = void 0), p2;
      } }, a2;
    }
    t2.exports = r2, t2.exports.__esModule = true, t2.exports.default = t2.exports;
  })(i);
  var l = i.exports();
  var u = l;
  try {
    regeneratorRuntime = l;
  } catch (t2) {
    "object" == typeof globalThis ? globalThis.regeneratorRuntime = l : Function("r", "regeneratorRuntime = r")(l);
  }
  var f = {};
  var h = {};
  var d = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
  var p = [];
  var b = [];
  var g = "undefined" != typeof Uint8Array ? Uint8Array : Array;
  var v = false;
  function m() {
    v = true;
    for (var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e2 = 0, r2 = t2.length; e2 < r2; ++e2) p[e2] = t2[e2], b[t2.charCodeAt(e2)] = e2;
    b["-".charCodeAt(0)] = 62, b["_".charCodeAt(0)] = 63;
  }
  function y(t2, e2, r2) {
    for (var a2, n2, o2 = [], c2 = e2; c2 < r2; c2 += 3) a2 = (t2[c2] << 16) + (t2[c2 + 1] << 8) + t2[c2 + 2], o2.push(p[(n2 = a2) >> 18 & 63] + p[n2 >> 12 & 63] + p[n2 >> 6 & 63] + p[63 & n2]);
    return o2.join("");
  }
  function L(t2) {
    var e2;
    v || m();
    for (var r2 = t2.length, a2 = r2 % 3, n2 = "", o2 = [], c2 = 16383, i2 = 0, s2 = r2 - a2; i2 < s2; i2 += c2) o2.push(y(t2, i2, i2 + c2 > s2 ? s2 : i2 + c2));
    return 1 === a2 ? (e2 = t2[r2 - 1], n2 += p[e2 >> 2], n2 += p[e2 << 4 & 63], n2 += "==") : 2 === a2 && (e2 = (t2[r2 - 2] << 8) + t2[r2 - 1], n2 += p[e2 >> 10], n2 += p[e2 >> 4 & 63], n2 += p[e2 << 2 & 63], n2 += "="), o2.push(n2), o2.join("");
  }
  function w(t2, e2, r2, a2, n2) {
    var o2, c2, i2 = 8 * n2 - a2 - 1, s2 = (1 << i2) - 1, l2 = s2 >> 1, u2 = -7, f2 = r2 ? n2 - 1 : 0, h2 = r2 ? -1 : 1, d2 = t2[e2 + f2];
    for (f2 += h2, o2 = d2 & (1 << -u2) - 1, d2 >>= -u2, u2 += i2; u2 > 0; o2 = 256 * o2 + t2[e2 + f2], f2 += h2, u2 -= 8) ;
    for (c2 = o2 & (1 << -u2) - 1, o2 >>= -u2, u2 += a2; u2 > 0; c2 = 256 * c2 + t2[e2 + f2], f2 += h2, u2 -= 8) ;
    if (0 === o2) o2 = 1 - l2;
    else {
      if (o2 === s2) return c2 ? NaN : 1 / 0 * (d2 ? -1 : 1);
      c2 += Math.pow(2, a2), o2 -= l2;
    }
    return (d2 ? -1 : 1) * c2 * Math.pow(2, o2 - a2);
  }
  function _(t2, e2, r2, a2, n2, o2) {
    var c2, i2, s2, l2 = 8 * o2 - n2 - 1, u2 = (1 << l2) - 1, f2 = u2 >> 1, h2 = 23 === n2 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d2 = a2 ? 0 : o2 - 1, p2 = a2 ? 1 : -1, b2 = e2 < 0 || 0 === e2 && 1 / e2 < 0 ? 1 : 0;
    for (e2 = Math.abs(e2), isNaN(e2) || e2 === 1 / 0 ? (i2 = isNaN(e2) ? 1 : 0, c2 = u2) : (c2 = Math.floor(Math.log(e2) / Math.LN2), e2 * (s2 = Math.pow(2, -c2)) < 1 && (c2--, s2 *= 2), (e2 += c2 + f2 >= 1 ? h2 / s2 : h2 * Math.pow(2, 1 - f2)) * s2 >= 2 && (c2++, s2 /= 2), c2 + f2 >= u2 ? (i2 = 0, c2 = u2) : c2 + f2 >= 1 ? (i2 = (e2 * s2 - 1) * Math.pow(2, n2), c2 += f2) : (i2 = e2 * Math.pow(2, f2 - 1) * Math.pow(2, n2), c2 = 0)); n2 >= 8; t2[r2 + d2] = 255 & i2, d2 += p2, i2 /= 256, n2 -= 8) ;
    for (c2 = c2 << n2 | i2, l2 += n2; l2 > 0; t2[r2 + d2] = 255 & c2, d2 += p2, c2 /= 256, l2 -= 8) ;
    t2[r2 + d2 - p2] |= 128 * b2;
  }
  var k = {}.toString;
  var M = Array.isArray || function(t2) {
    return "[object Array]" == k.call(t2);
  };
  C.TYPED_ARRAY_SUPPORT = void 0 === d.TYPED_ARRAY_SUPPORT || d.TYPED_ARRAY_SUPPORT;
  var x = S();
  function S() {
    return C.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function I(t2, e2) {
    if (S() < e2) throw new RangeError("Invalid typed array length");
    return C.TYPED_ARRAY_SUPPORT ? (t2 = new Uint8Array(e2)).__proto__ = C.prototype : (null === t2 && (t2 = new C(e2)), t2.length = e2), t2;
  }
  function C(t2, e2, r2) {
    if (!(C.TYPED_ARRAY_SUPPORT || this instanceof C)) return new C(t2, e2, r2);
    if ("number" == typeof t2) {
      if ("string" == typeof e2) throw new Error("If encoding is specified then the first argument must be a string");
      return E(this, t2);
    }
    return A(this, t2, e2, r2);
  }
  function A(t2, e2, r2, a2) {
    if ("number" == typeof e2) throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && e2 instanceof ArrayBuffer ? (function(t3, e3, r3, a3) {
      if (e3.byteLength, r3 < 0 || e3.byteLength < r3) throw new RangeError("'offset' is out of bounds");
      if (e3.byteLength < r3 + (a3 || 0)) throw new RangeError("'length' is out of bounds");
      e3 = void 0 === r3 && void 0 === a3 ? new Uint8Array(e3) : void 0 === a3 ? new Uint8Array(e3, r3) : new Uint8Array(e3, r3, a3);
      C.TYPED_ARRAY_SUPPORT ? (t3 = e3).__proto__ = C.prototype : t3 = R(t3, e3);
      return t3;
    })(t2, e2, r2, a2) : "string" == typeof e2 ? (function(t3, e3, r3) {
      "string" == typeof r3 && "" !== r3 || (r3 = "utf8");
      if (!C.isEncoding(r3)) throw new TypeError('"encoding" must be a valid string encoding');
      var a3 = 0 | j(e3, r3), n2 = (t3 = I(t3, a3)).write(e3, r3);
      n2 !== a3 && (t3 = t3.slice(0, n2));
      return t3;
    })(t2, e2, r2) : (function(t3, e3) {
      if (O(e3)) {
        var r3 = 0 | T(e3.length);
        return 0 === (t3 = I(t3, r3)).length || e3.copy(t3, 0, 0, r3), t3;
      }
      if (e3) {
        if ("undefined" != typeof ArrayBuffer && e3.buffer instanceof ArrayBuffer || "length" in e3) return "number" != typeof e3.length || (a3 = e3.length) != a3 ? I(t3, 0) : R(t3, e3);
        if ("Buffer" === e3.type && M(e3.data)) return R(t3, e3.data);
      }
      var a3;
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    })(t2, e2);
  }
  function P(t2) {
    if ("number" != typeof t2) throw new TypeError('"size" argument must be a number');
    if (t2 < 0) throw new RangeError('"size" argument must not be negative');
  }
  function E(t2, e2) {
    if (P(e2), t2 = I(t2, e2 < 0 ? 0 : 0 | T(e2)), !C.TYPED_ARRAY_SUPPORT) for (var r2 = 0; r2 < e2; ++r2) t2[r2] = 0;
    return t2;
  }
  function R(t2, e2) {
    var r2 = e2.length < 0 ? 0 : 0 | T(e2.length);
    t2 = I(t2, r2);
    for (var a2 = 0; a2 < r2; a2 += 1) t2[a2] = 255 & e2[a2];
    return t2;
  }
  function T(t2) {
    if (t2 >= S()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + S().toString(16) + " bytes");
    return 0 | t2;
  }
  function O(t2) {
    return !(null == t2 || !t2._isBuffer);
  }
  function j(t2, e2) {
    if (O(t2)) return t2.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t2) || t2 instanceof ArrayBuffer)) return t2.byteLength;
    "string" != typeof t2 && (t2 = "" + t2);
    var r2 = t2.length;
    if (0 === r2) return 0;
    for (var a2 = false; ; ) switch (e2) {
      case "ascii":
      case "latin1":
      case "binary":
        return r2;
      case "utf8":
      case "utf-8":
      case void 0:
        return it(t2).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r2;
      case "hex":
        return r2 >>> 1;
      case "base64":
        return st(t2).length;
      default:
        if (a2) return it(t2).length;
        e2 = ("" + e2).toLowerCase(), a2 = true;
    }
  }
  function z(t2, e2, r2) {
    var a2 = false;
    if ((void 0 === e2 || e2 < 0) && (e2 = 0), e2 > this.length) return "";
    if ((void 0 === r2 || r2 > this.length) && (r2 = this.length), r2 <= 0) return "";
    if ((r2 >>>= 0) <= (e2 >>>= 0)) return "";
    for (t2 || (t2 = "utf8"); ; ) switch (t2) {
      case "hex":
        return $(this, e2, r2);
      case "utf8":
      case "utf-8":
        return Y(this, e2, r2);
      case "ascii":
        return V(this, e2, r2);
      case "latin1":
      case "binary":
        return Q(this, e2, r2);
      case "base64":
        return Z(this, e2, r2);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return K(this, e2, r2);
      default:
        if (a2) throw new TypeError("Unknown encoding: " + t2);
        t2 = (t2 + "").toLowerCase(), a2 = true;
    }
  }
  function B(t2, e2, r2) {
    var a2 = t2[e2];
    t2[e2] = t2[r2], t2[r2] = a2;
  }
  function D(t2, e2, r2, a2, n2) {
    if (0 === t2.length) return -1;
    if ("string" == typeof r2 ? (a2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), r2 = +r2, isNaN(r2) && (r2 = n2 ? 0 : t2.length - 1), r2 < 0 && (r2 = t2.length + r2), r2 >= t2.length) {
      if (n2) return -1;
      r2 = t2.length - 1;
    } else if (r2 < 0) {
      if (!n2) return -1;
      r2 = 0;
    }
    if ("string" == typeof e2 && (e2 = C.from(e2, a2)), O(e2)) return 0 === e2.length ? -1 : F(t2, e2, r2, a2, n2);
    if ("number" == typeof e2) return e2 &= 255, C.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n2 ? Uint8Array.prototype.indexOf.call(t2, e2, r2) : Uint8Array.prototype.lastIndexOf.call(t2, e2, r2) : F(t2, [e2], r2, a2, n2);
    throw new TypeError("val must be string, number or Buffer");
  }
  function F(t2, e2, r2, a2, n2) {
    var o2, c2 = 1, i2 = t2.length, s2 = e2.length;
    if (void 0 !== a2 && ("ucs2" === (a2 = String(a2).toLowerCase()) || "ucs-2" === a2 || "utf16le" === a2 || "utf-16le" === a2)) {
      if (t2.length < 2 || e2.length < 2) return -1;
      c2 = 2, i2 /= 2, s2 /= 2, r2 /= 2;
    }
    function l2(t3, e3) {
      return 1 === c2 ? t3[e3] : t3.readUInt16BE(e3 * c2);
    }
    if (n2) {
      var u2 = -1;
      for (o2 = r2; o2 < i2; o2++) if (l2(t2, o2) === l2(e2, -1 === u2 ? 0 : o2 - u2)) {
        if (-1 === u2 && (u2 = o2), o2 - u2 + 1 === s2) return u2 * c2;
      } else -1 !== u2 && (o2 -= o2 - u2), u2 = -1;
    } else for (r2 + s2 > i2 && (r2 = i2 - s2), o2 = r2; o2 >= 0; o2--) {
      for (var f2 = true, h2 = 0; h2 < s2; h2++) if (l2(t2, o2 + h2) !== l2(e2, h2)) {
        f2 = false;
        break;
      }
      if (f2) return o2;
    }
    return -1;
  }
  function N(t2, e2, r2, a2) {
    r2 = Number(r2) || 0;
    var n2 = t2.length - r2;
    a2 ? (a2 = Number(a2)) > n2 && (a2 = n2) : a2 = n2;
    var o2 = e2.length;
    if (o2 % 2 != 0) throw new TypeError("Invalid hex string");
    a2 > o2 / 2 && (a2 = o2 / 2);
    for (var c2 = 0; c2 < a2; ++c2) {
      var i2 = parseInt(e2.substr(2 * c2, 2), 16);
      if (isNaN(i2)) return c2;
      t2[r2 + c2] = i2;
    }
    return c2;
  }
  function U(t2, e2, r2, a2) {
    return lt(it(e2, t2.length - r2), t2, r2, a2);
  }
  function G(t2, e2, r2, a2) {
    return lt((function(t3) {
      for (var e3 = [], r3 = 0; r3 < t3.length; ++r3) e3.push(255 & t3.charCodeAt(r3));
      return e3;
    })(e2), t2, r2, a2);
  }
  function q(t2, e2, r2, a2) {
    return G(t2, e2, r2, a2);
  }
  function W(t2, e2, r2, a2) {
    return lt(st(e2), t2, r2, a2);
  }
  function H(t2, e2, r2, a2) {
    return lt((function(t3, e3) {
      for (var r3, a3, n2, o2 = [], c2 = 0; c2 < t3.length && !((e3 -= 2) < 0); ++c2) a3 = (r3 = t3.charCodeAt(c2)) >> 8, n2 = r3 % 256, o2.push(n2), o2.push(a3);
      return o2;
    })(e2, t2.length - r2), t2, r2, a2);
  }
  function Z(t2, e2, r2) {
    return 0 === e2 && r2 === t2.length ? L(t2) : L(t2.slice(e2, r2));
  }
  function Y(t2, e2, r2) {
    r2 = Math.min(t2.length, r2);
    for (var a2 = [], n2 = e2; n2 < r2; ) {
      var o2, c2, i2, s2, l2 = t2[n2], u2 = null, f2 = l2 > 239 ? 4 : l2 > 223 ? 3 : l2 > 191 ? 2 : 1;
      if (n2 + f2 <= r2) switch (f2) {
        case 1:
          l2 < 128 && (u2 = l2);
          break;
        case 2:
          128 == (192 & (o2 = t2[n2 + 1])) && (s2 = (31 & l2) << 6 | 63 & o2) > 127 && (u2 = s2);
          break;
        case 3:
          o2 = t2[n2 + 1], c2 = t2[n2 + 2], 128 == (192 & o2) && 128 == (192 & c2) && (s2 = (15 & l2) << 12 | (63 & o2) << 6 | 63 & c2) > 2047 && (s2 < 55296 || s2 > 57343) && (u2 = s2);
          break;
        case 4:
          o2 = t2[n2 + 1], c2 = t2[n2 + 2], i2 = t2[n2 + 3], 128 == (192 & o2) && 128 == (192 & c2) && 128 == (192 & i2) && (s2 = (15 & l2) << 18 | (63 & o2) << 12 | (63 & c2) << 6 | 63 & i2) > 65535 && s2 < 1114112 && (u2 = s2);
      }
      null === u2 ? (u2 = 65533, f2 = 1) : u2 > 65535 && (u2 -= 65536, a2.push(u2 >>> 10 & 1023 | 55296), u2 = 56320 | 1023 & u2), a2.push(u2), n2 += f2;
    }
    return (function(t3) {
      var e3 = t3.length;
      if (e3 <= 4096) return String.fromCharCode.apply(String, t3);
      var r3 = "", a3 = 0;
      for (; a3 < e3; ) r3 += String.fromCharCode.apply(String, t3.slice(a3, a3 += 4096));
      return r3;
    })(a2);
  }
  C.poolSize = 8192, C._augment = function(t2) {
    return t2.__proto__ = C.prototype, t2;
  }, C.from = function(t2, e2, r2) {
    return A(null, t2, e2, r2);
  }, C.TYPED_ARRAY_SUPPORT && (C.prototype.__proto__ = Uint8Array.prototype, C.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && C[Symbol.species]), C.alloc = function(t2, e2, r2) {
    return (function(t3, e3, r3, a2) {
      return P(e3), e3 <= 0 ? I(t3, e3) : void 0 !== r3 ? "string" == typeof a2 ? I(t3, e3).fill(r3, a2) : I(t3, e3).fill(r3) : I(t3, e3);
    })(null, t2, e2, r2);
  }, C.allocUnsafe = function(t2) {
    return E(null, t2);
  }, C.allocUnsafeSlow = function(t2) {
    return E(null, t2);
  }, C.isBuffer = ut, C.compare = function(t2, e2) {
    if (!O(t2) || !O(e2)) throw new TypeError("Arguments must be Buffers");
    if (t2 === e2) return 0;
    for (var r2 = t2.length, a2 = e2.length, n2 = 0, o2 = Math.min(r2, a2); n2 < o2; ++n2) if (t2[n2] !== e2[n2]) {
      r2 = t2[n2], a2 = e2[n2];
      break;
    }
    return r2 < a2 ? -1 : a2 < r2 ? 1 : 0;
  }, C.isEncoding = function(t2) {
    switch (String(t2).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, C.concat = function(t2, e2) {
    if (!M(t2)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t2.length) return C.alloc(0);
    var r2;
    if (void 0 === e2) for (e2 = 0, r2 = 0; r2 < t2.length; ++r2) e2 += t2[r2].length;
    var a2 = C.allocUnsafe(e2), n2 = 0;
    for (r2 = 0; r2 < t2.length; ++r2) {
      var o2 = t2[r2];
      if (!O(o2)) throw new TypeError('"list" argument must be an Array of Buffers');
      o2.copy(a2, n2), n2 += o2.length;
    }
    return a2;
  }, C.byteLength = j, C.prototype._isBuffer = true, C.prototype.swap16 = function() {
    var t2 = this.length;
    if (t2 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var e2 = 0; e2 < t2; e2 += 2) B(this, e2, e2 + 1);
    return this;
  }, C.prototype.swap32 = function() {
    var t2 = this.length;
    if (t2 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var e2 = 0; e2 < t2; e2 += 4) B(this, e2, e2 + 3), B(this, e2 + 1, e2 + 2);
    return this;
  }, C.prototype.swap64 = function() {
    var t2 = this.length;
    if (t2 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var e2 = 0; e2 < t2; e2 += 8) B(this, e2, e2 + 7), B(this, e2 + 1, e2 + 6), B(this, e2 + 2, e2 + 5), B(this, e2 + 3, e2 + 4);
    return this;
  }, C.prototype.toString = function() {
    var t2 = 0 | this.length;
    return 0 === t2 ? "" : 0 === arguments.length ? Y(this, 0, t2) : z.apply(this, arguments);
  }, C.prototype.equals = function(t2) {
    if (!O(t2)) throw new TypeError("Argument must be a Buffer");
    return this === t2 || 0 === C.compare(this, t2);
  }, C.prototype.inspect = function() {
    var t2 = "";
    return this.length > 0 && (t2 = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (t2 += " ... ")), "<Buffer " + t2 + ">";
  }, C.prototype.compare = function(t2, e2, r2, a2, n2) {
    if (!O(t2)) throw new TypeError("Argument must be a Buffer");
    if (void 0 === e2 && (e2 = 0), void 0 === r2 && (r2 = t2 ? t2.length : 0), void 0 === a2 && (a2 = 0), void 0 === n2 && (n2 = this.length), e2 < 0 || r2 > t2.length || a2 < 0 || n2 > this.length) throw new RangeError("out of range index");
    if (a2 >= n2 && e2 >= r2) return 0;
    if (a2 >= n2) return -1;
    if (e2 >= r2) return 1;
    if (this === t2) return 0;
    for (var o2 = (n2 >>>= 0) - (a2 >>>= 0), c2 = (r2 >>>= 0) - (e2 >>>= 0), i2 = Math.min(o2, c2), s2 = this.slice(a2, n2), l2 = t2.slice(e2, r2), u2 = 0; u2 < i2; ++u2) if (s2[u2] !== l2[u2]) {
      o2 = s2[u2], c2 = l2[u2];
      break;
    }
    return o2 < c2 ? -1 : c2 < o2 ? 1 : 0;
  }, C.prototype.includes = function(t2, e2, r2) {
    return -1 !== this.indexOf(t2, e2, r2);
  }, C.prototype.indexOf = function(t2, e2, r2) {
    return D(this, t2, e2, r2, true);
  }, C.prototype.lastIndexOf = function(t2, e2, r2) {
    return D(this, t2, e2, r2, false);
  }, C.prototype.write = function(t2, e2, r2, a2) {
    if (void 0 === e2) a2 = "utf8", r2 = this.length, e2 = 0;
    else if (void 0 === r2 && "string" == typeof e2) a2 = e2, r2 = this.length, e2 = 0;
    else {
      if (!isFinite(e2)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      e2 |= 0, isFinite(r2) ? (r2 |= 0, void 0 === a2 && (a2 = "utf8")) : (a2 = r2, r2 = void 0);
    }
    var n2 = this.length - e2;
    if ((void 0 === r2 || r2 > n2) && (r2 = n2), t2.length > 0 && (r2 < 0 || e2 < 0) || e2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    a2 || (a2 = "utf8");
    for (var o2 = false; ; ) switch (a2) {
      case "hex":
        return N(this, t2, e2, r2);
      case "utf8":
      case "utf-8":
        return U(this, t2, e2, r2);
      case "ascii":
        return G(this, t2, e2, r2);
      case "latin1":
      case "binary":
        return q(this, t2, e2, r2);
      case "base64":
        return W(this, t2, e2, r2);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return H(this, t2, e2, r2);
      default:
        if (o2) throw new TypeError("Unknown encoding: " + a2);
        a2 = ("" + a2).toLowerCase(), o2 = true;
    }
  }, C.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function V(t2, e2, r2) {
    var a2 = "";
    r2 = Math.min(t2.length, r2);
    for (var n2 = e2; n2 < r2; ++n2) a2 += String.fromCharCode(127 & t2[n2]);
    return a2;
  }
  function Q(t2, e2, r2) {
    var a2 = "";
    r2 = Math.min(t2.length, r2);
    for (var n2 = e2; n2 < r2; ++n2) a2 += String.fromCharCode(t2[n2]);
    return a2;
  }
  function $(t2, e2, r2) {
    var a2 = t2.length;
    (!e2 || e2 < 0) && (e2 = 0), (!r2 || r2 < 0 || r2 > a2) && (r2 = a2);
    for (var n2 = "", o2 = e2; o2 < r2; ++o2) n2 += ct(t2[o2]);
    return n2;
  }
  function K(t2, e2, r2) {
    for (var a2 = t2.slice(e2, r2), n2 = "", o2 = 0; o2 < a2.length; o2 += 2) n2 += String.fromCharCode(a2[o2] + 256 * a2[o2 + 1]);
    return n2;
  }
  function X(t2, e2, r2) {
    if (t2 % 1 != 0 || t2 < 0) throw new RangeError("offset is not uint");
    if (t2 + e2 > r2) throw new RangeError("Trying to access beyond buffer length");
  }
  function J(t2, e2, r2, a2, n2, o2) {
    if (!O(t2)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e2 > n2 || e2 < o2) throw new RangeError('"value" argument is out of bounds');
    if (r2 + a2 > t2.length) throw new RangeError("Index out of range");
  }
  function tt(t2, e2, r2, a2) {
    e2 < 0 && (e2 = 65535 + e2 + 1);
    for (var n2 = 0, o2 = Math.min(t2.length - r2, 2); n2 < o2; ++n2) t2[r2 + n2] = (e2 & 255 << 8 * (a2 ? n2 : 1 - n2)) >>> 8 * (a2 ? n2 : 1 - n2);
  }
  function et(t2, e2, r2, a2) {
    e2 < 0 && (e2 = 4294967295 + e2 + 1);
    for (var n2 = 0, o2 = Math.min(t2.length - r2, 4); n2 < o2; ++n2) t2[r2 + n2] = e2 >>> 8 * (a2 ? n2 : 3 - n2) & 255;
  }
  function rt(t2, e2, r2, a2, n2, o2) {
    if (r2 + a2 > t2.length) throw new RangeError("Index out of range");
    if (r2 < 0) throw new RangeError("Index out of range");
  }
  function at(t2, e2, r2, a2, n2) {
    return n2 || rt(t2, 0, r2, 4), _(t2, e2, r2, a2, 23, 4), r2 + 4;
  }
  function nt(t2, e2, r2, a2, n2) {
    return n2 || rt(t2, 0, r2, 8), _(t2, e2, r2, a2, 52, 8), r2 + 8;
  }
  C.prototype.slice = function(t2, e2) {
    var r2, a2 = this.length;
    if ((t2 = ~~t2) < 0 ? (t2 += a2) < 0 && (t2 = 0) : t2 > a2 && (t2 = a2), (e2 = void 0 === e2 ? a2 : ~~e2) < 0 ? (e2 += a2) < 0 && (e2 = 0) : e2 > a2 && (e2 = a2), e2 < t2 && (e2 = t2), C.TYPED_ARRAY_SUPPORT) (r2 = this.subarray(t2, e2)).__proto__ = C.prototype;
    else {
      var n2 = e2 - t2;
      r2 = new C(n2, void 0);
      for (var o2 = 0; o2 < n2; ++o2) r2[o2] = this[o2 + t2];
    }
    return r2;
  }, C.prototype.readUIntLE = function(t2, e2, r2) {
    t2 |= 0, e2 |= 0, r2 || X(t2, e2, this.length);
    for (var a2 = this[t2], n2 = 1, o2 = 0; ++o2 < e2 && (n2 *= 256); ) a2 += this[t2 + o2] * n2;
    return a2;
  }, C.prototype.readUIntBE = function(t2, e2, r2) {
    t2 |= 0, e2 |= 0, r2 || X(t2, e2, this.length);
    for (var a2 = this[t2 + --e2], n2 = 1; e2 > 0 && (n2 *= 256); ) a2 += this[t2 + --e2] * n2;
    return a2;
  }, C.prototype.readUInt8 = function(t2, e2) {
    return e2 || X(t2, 1, this.length), this[t2];
  }, C.prototype.readUInt16LE = function(t2, e2) {
    return e2 || X(t2, 2, this.length), this[t2] | this[t2 + 1] << 8;
  }, C.prototype.readUInt16BE = function(t2, e2) {
    return e2 || X(t2, 2, this.length), this[t2] << 8 | this[t2 + 1];
  }, C.prototype.readUInt32LE = function(t2, e2) {
    return e2 || X(t2, 4, this.length), (this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16) + 16777216 * this[t2 + 3];
  }, C.prototype.readUInt32BE = function(t2, e2) {
    return e2 || X(t2, 4, this.length), 16777216 * this[t2] + (this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3]);
  }, C.prototype.readIntLE = function(t2, e2, r2) {
    t2 |= 0, e2 |= 0, r2 || X(t2, e2, this.length);
    for (var a2 = this[t2], n2 = 1, o2 = 0; ++o2 < e2 && (n2 *= 256); ) a2 += this[t2 + o2] * n2;
    return a2 >= (n2 *= 128) && (a2 -= Math.pow(2, 8 * e2)), a2;
  }, C.prototype.readIntBE = function(t2, e2, r2) {
    t2 |= 0, e2 |= 0, r2 || X(t2, e2, this.length);
    for (var a2 = e2, n2 = 1, o2 = this[t2 + --a2]; a2 > 0 && (n2 *= 256); ) o2 += this[t2 + --a2] * n2;
    return o2 >= (n2 *= 128) && (o2 -= Math.pow(2, 8 * e2)), o2;
  }, C.prototype.readInt8 = function(t2, e2) {
    return e2 || X(t2, 1, this.length), 128 & this[t2] ? -1 * (255 - this[t2] + 1) : this[t2];
  }, C.prototype.readInt16LE = function(t2, e2) {
    e2 || X(t2, 2, this.length);
    var r2 = this[t2] | this[t2 + 1] << 8;
    return 32768 & r2 ? 4294901760 | r2 : r2;
  }, C.prototype.readInt16BE = function(t2, e2) {
    e2 || X(t2, 2, this.length);
    var r2 = this[t2 + 1] | this[t2] << 8;
    return 32768 & r2 ? 4294901760 | r2 : r2;
  }, C.prototype.readInt32LE = function(t2, e2) {
    return e2 || X(t2, 4, this.length), this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16 | this[t2 + 3] << 24;
  }, C.prototype.readInt32BE = function(t2, e2) {
    return e2 || X(t2, 4, this.length), this[t2] << 24 | this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3];
  }, C.prototype.readFloatLE = function(t2, e2) {
    return e2 || X(t2, 4, this.length), w(this, t2, true, 23, 4);
  }, C.prototype.readFloatBE = function(t2, e2) {
    return e2 || X(t2, 4, this.length), w(this, t2, false, 23, 4);
  }, C.prototype.readDoubleLE = function(t2, e2) {
    return e2 || X(t2, 8, this.length), w(this, t2, true, 52, 8);
  }, C.prototype.readDoubleBE = function(t2, e2) {
    return e2 || X(t2, 8, this.length), w(this, t2, false, 52, 8);
  }, C.prototype.writeUIntLE = function(t2, e2, r2, a2) {
    (t2 = +t2, e2 |= 0, r2 |= 0, a2) || J(this, t2, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
    var n2 = 1, o2 = 0;
    for (this[e2] = 255 & t2; ++o2 < r2 && (n2 *= 256); ) this[e2 + o2] = t2 / n2 & 255;
    return e2 + r2;
  }, C.prototype.writeUIntBE = function(t2, e2, r2, a2) {
    (t2 = +t2, e2 |= 0, r2 |= 0, a2) || J(this, t2, e2, r2, Math.pow(2, 8 * r2) - 1, 0);
    var n2 = r2 - 1, o2 = 1;
    for (this[e2 + n2] = 255 & t2; --n2 >= 0 && (o2 *= 256); ) this[e2 + n2] = t2 / o2 & 255;
    return e2 + r2;
  }, C.prototype.writeUInt8 = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 1, 255, 0), C.TYPED_ARRAY_SUPPORT || (t2 = Math.floor(t2)), this[e2] = 255 & t2, e2 + 1;
  }, C.prototype.writeUInt16LE = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 2, 65535, 0), C.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8) : tt(this, t2, e2, true), e2 + 2;
  }, C.prototype.writeUInt16BE = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 2, 65535, 0), C.TYPED_ARRAY_SUPPORT ? (this[e2] = t2 >>> 8, this[e2 + 1] = 255 & t2) : tt(this, t2, e2, false), e2 + 2;
  }, C.prototype.writeUInt32LE = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 4, 4294967295, 0), C.TYPED_ARRAY_SUPPORT ? (this[e2 + 3] = t2 >>> 24, this[e2 + 2] = t2 >>> 16, this[e2 + 1] = t2 >>> 8, this[e2] = 255 & t2) : et(this, t2, e2, true), e2 + 4;
  }, C.prototype.writeUInt32BE = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 4, 4294967295, 0), C.TYPED_ARRAY_SUPPORT ? (this[e2] = t2 >>> 24, this[e2 + 1] = t2 >>> 16, this[e2 + 2] = t2 >>> 8, this[e2 + 3] = 255 & t2) : et(this, t2, e2, false), e2 + 4;
  }, C.prototype.writeIntLE = function(t2, e2, r2, a2) {
    if (t2 = +t2, e2 |= 0, !a2) {
      var n2 = Math.pow(2, 8 * r2 - 1);
      J(this, t2, e2, r2, n2 - 1, -n2);
    }
    var o2 = 0, c2 = 1, i2 = 0;
    for (this[e2] = 255 & t2; ++o2 < r2 && (c2 *= 256); ) t2 < 0 && 0 === i2 && 0 !== this[e2 + o2 - 1] && (i2 = 1), this[e2 + o2] = (t2 / c2 >> 0) - i2 & 255;
    return e2 + r2;
  }, C.prototype.writeIntBE = function(t2, e2, r2, a2) {
    if (t2 = +t2, e2 |= 0, !a2) {
      var n2 = Math.pow(2, 8 * r2 - 1);
      J(this, t2, e2, r2, n2 - 1, -n2);
    }
    var o2 = r2 - 1, c2 = 1, i2 = 0;
    for (this[e2 + o2] = 255 & t2; --o2 >= 0 && (c2 *= 256); ) t2 < 0 && 0 === i2 && 0 !== this[e2 + o2 + 1] && (i2 = 1), this[e2 + o2] = (t2 / c2 >> 0) - i2 & 255;
    return e2 + r2;
  }, C.prototype.writeInt8 = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 1, 127, -128), C.TYPED_ARRAY_SUPPORT || (t2 = Math.floor(t2)), t2 < 0 && (t2 = 255 + t2 + 1), this[e2] = 255 & t2, e2 + 1;
  }, C.prototype.writeInt16LE = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 2, 32767, -32768), C.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8) : tt(this, t2, e2, true), e2 + 2;
  }, C.prototype.writeInt16BE = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 2, 32767, -32768), C.TYPED_ARRAY_SUPPORT ? (this[e2] = t2 >>> 8, this[e2 + 1] = 255 & t2) : tt(this, t2, e2, false), e2 + 2;
  }, C.prototype.writeInt32LE = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 4, 2147483647, -2147483648), C.TYPED_ARRAY_SUPPORT ? (this[e2] = 255 & t2, this[e2 + 1] = t2 >>> 8, this[e2 + 2] = t2 >>> 16, this[e2 + 3] = t2 >>> 24) : et(this, t2, e2, true), e2 + 4;
  }, C.prototype.writeInt32BE = function(t2, e2, r2) {
    return t2 = +t2, e2 |= 0, r2 || J(this, t2, e2, 4, 2147483647, -2147483648), t2 < 0 && (t2 = 4294967295 + t2 + 1), C.TYPED_ARRAY_SUPPORT ? (this[e2] = t2 >>> 24, this[e2 + 1] = t2 >>> 16, this[e2 + 2] = t2 >>> 8, this[e2 + 3] = 255 & t2) : et(this, t2, e2, false), e2 + 4;
  }, C.prototype.writeFloatLE = function(t2, e2, r2) {
    return at(this, t2, e2, true, r2);
  }, C.prototype.writeFloatBE = function(t2, e2, r2) {
    return at(this, t2, e2, false, r2);
  }, C.prototype.writeDoubleLE = function(t2, e2, r2) {
    return nt(this, t2, e2, true, r2);
  }, C.prototype.writeDoubleBE = function(t2, e2, r2) {
    return nt(this, t2, e2, false, r2);
  }, C.prototype.copy = function(t2, e2, r2, a2) {
    if (r2 || (r2 = 0), a2 || 0 === a2 || (a2 = this.length), e2 >= t2.length && (e2 = t2.length), e2 || (e2 = 0), a2 > 0 && a2 < r2 && (a2 = r2), a2 === r2) return 0;
    if (0 === t2.length || 0 === this.length) return 0;
    if (e2 < 0) throw new RangeError("targetStart out of bounds");
    if (r2 < 0 || r2 >= this.length) throw new RangeError("sourceStart out of bounds");
    if (a2 < 0) throw new RangeError("sourceEnd out of bounds");
    a2 > this.length && (a2 = this.length), t2.length - e2 < a2 - r2 && (a2 = t2.length - e2 + r2);
    var n2, o2 = a2 - r2;
    if (this === t2 && r2 < e2 && e2 < a2) for (n2 = o2 - 1; n2 >= 0; --n2) t2[n2 + e2] = this[n2 + r2];
    else if (o2 < 1e3 || !C.TYPED_ARRAY_SUPPORT) for (n2 = 0; n2 < o2; ++n2) t2[n2 + e2] = this[n2 + r2];
    else Uint8Array.prototype.set.call(t2, this.subarray(r2, r2 + o2), e2);
    return o2;
  }, C.prototype.fill = function(t2, e2, r2, a2) {
    if ("string" == typeof t2) {
      if ("string" == typeof e2 ? (a2 = e2, e2 = 0, r2 = this.length) : "string" == typeof r2 && (a2 = r2, r2 = this.length), 1 === t2.length) {
        var n2 = t2.charCodeAt(0);
        n2 < 256 && (t2 = n2);
      }
      if (void 0 !== a2 && "string" != typeof a2) throw new TypeError("encoding must be a string");
      if ("string" == typeof a2 && !C.isEncoding(a2)) throw new TypeError("Unknown encoding: " + a2);
    } else "number" == typeof t2 && (t2 &= 255);
    if (e2 < 0 || this.length < e2 || this.length < r2) throw new RangeError("Out of range index");
    if (r2 <= e2) return this;
    var o2;
    if (e2 >>>= 0, r2 = void 0 === r2 ? this.length : r2 >>> 0, t2 || (t2 = 0), "number" == typeof t2) for (o2 = e2; o2 < r2; ++o2) this[o2] = t2;
    else {
      var c2 = O(t2) ? t2 : it(new C(t2, a2).toString()), i2 = c2.length;
      for (o2 = 0; o2 < r2 - e2; ++o2) this[o2 + e2] = c2[o2 % i2];
    }
    return this;
  };
  var ot = /[^+\/0-9A-Za-z-_]/g;
  function ct(t2) {
    return t2 < 16 ? "0" + t2.toString(16) : t2.toString(16);
  }
  function it(t2, e2) {
    var r2;
    e2 = e2 || 1 / 0;
    for (var a2 = t2.length, n2 = null, o2 = [], c2 = 0; c2 < a2; ++c2) {
      if ((r2 = t2.charCodeAt(c2)) > 55295 && r2 < 57344) {
        if (!n2) {
          if (r2 > 56319) {
            (e2 -= 3) > -1 && o2.push(239, 191, 189);
            continue;
          }
          if (c2 + 1 === a2) {
            (e2 -= 3) > -1 && o2.push(239, 191, 189);
            continue;
          }
          n2 = r2;
          continue;
        }
        if (r2 < 56320) {
          (e2 -= 3) > -1 && o2.push(239, 191, 189), n2 = r2;
          continue;
        }
        r2 = 65536 + (n2 - 55296 << 10 | r2 - 56320);
      } else n2 && (e2 -= 3) > -1 && o2.push(239, 191, 189);
      if (n2 = null, r2 < 128) {
        if ((e2 -= 1) < 0) break;
        o2.push(r2);
      } else if (r2 < 2048) {
        if ((e2 -= 2) < 0) break;
        o2.push(r2 >> 6 | 192, 63 & r2 | 128);
      } else if (r2 < 65536) {
        if ((e2 -= 3) < 0) break;
        o2.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128);
      } else {
        if (!(r2 < 1114112)) throw new Error("Invalid code point");
        if ((e2 -= 4) < 0) break;
        o2.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128);
      }
    }
    return o2;
  }
  function st(t2) {
    return (function(t3) {
      var e2, r2, a2, n2, o2, c2;
      v || m();
      var i2 = t3.length;
      if (i2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      o2 = "=" === t3[i2 - 2] ? 2 : "=" === t3[i2 - 1] ? 1 : 0, c2 = new g(3 * i2 / 4 - o2), a2 = o2 > 0 ? i2 - 4 : i2;
      var s2 = 0;
      for (e2 = 0, r2 = 0; e2 < a2; e2 += 4, r2 += 3) n2 = b[t3.charCodeAt(e2)] << 18 | b[t3.charCodeAt(e2 + 1)] << 12 | b[t3.charCodeAt(e2 + 2)] << 6 | b[t3.charCodeAt(e2 + 3)], c2[s2++] = n2 >> 16 & 255, c2[s2++] = n2 >> 8 & 255, c2[s2++] = 255 & n2;
      return 2 === o2 ? (n2 = b[t3.charCodeAt(e2)] << 2 | b[t3.charCodeAt(e2 + 1)] >> 4, c2[s2++] = 255 & n2) : 1 === o2 && (n2 = b[t3.charCodeAt(e2)] << 10 | b[t3.charCodeAt(e2 + 1)] << 4 | b[t3.charCodeAt(e2 + 2)] >> 2, c2[s2++] = n2 >> 8 & 255, c2[s2++] = 255 & n2), c2;
    })((function(t3) {
      if ((t3 = (function(t4) {
        return t4.trim ? t4.trim() : t4.replace(/^\s+|\s+$/g, "");
      })(t3).replace(ot, "")).length < 2) return "";
      for (; t3.length % 4 != 0; ) t3 += "=";
      return t3;
    })(t2));
  }
  function lt(t2, e2, r2, a2) {
    for (var n2 = 0; n2 < a2 && !(n2 + r2 >= e2.length || n2 >= t2.length); ++n2) e2[n2 + r2] = t2[n2];
    return n2;
  }
  function ut(t2) {
    return null != t2 && (!!t2._isBuffer || ft(t2) || (function(t3) {
      return "function" == typeof t3.readFloatLE && "function" == typeof t3.slice && ft(t3.slice(0, 0));
    })(t2));
  }
  function ft(t2) {
    return !!t2.constructor && "function" == typeof t2.constructor.isBuffer && t2.constructor.isBuffer(t2);
  }
  var ht = Object.freeze({ __proto__: null, INSPECT_MAX_BYTES: 50, kMaxLength: x, Buffer: C, SlowBuffer: function(t2) {
    return +t2 != t2 && (t2 = 0), C.alloc(+t2);
  }, isBuffer: ut });
  var dt = {};
  function pt() {
    throw new Error("setTimeout has not been defined");
  }
  function bt() {
    throw new Error("clearTimeout has not been defined");
  }
  var gt = pt;
  var vt = bt;
  function mt(t2) {
    if (gt === setTimeout) return setTimeout(t2, 0);
    if ((gt === pt || !gt) && setTimeout) return gt = setTimeout, setTimeout(t2, 0);
    try {
      return gt(t2, 0);
    } catch (e2) {
      try {
        return gt.call(null, t2, 0);
      } catch (e3) {
        return gt.call(this, t2, 0);
      }
    }
  }
  "function" == typeof d.setTimeout && (gt = setTimeout), "function" == typeof d.clearTimeout && (vt = clearTimeout);
  var yt;
  var Lt = [];
  var wt = false;
  var _t = -1;
  function kt() {
    wt && yt && (wt = false, yt.length ? Lt = yt.concat(Lt) : _t = -1, Lt.length && Mt());
  }
  function Mt() {
    if (!wt) {
      var t2 = mt(kt);
      wt = true;
      for (var e2 = Lt.length; e2; ) {
        for (yt = Lt, Lt = []; ++_t < e2; ) yt && yt[_t].run();
        _t = -1, e2 = Lt.length;
      }
      yt = null, wt = false, (function(t3) {
        if (vt === clearTimeout) return clearTimeout(t3);
        if ((vt === bt || !vt) && clearTimeout) return vt = clearTimeout, clearTimeout(t3);
        try {
          vt(t3);
        } catch (e3) {
          try {
            return vt.call(null, t3);
          } catch (e4) {
            return vt.call(this, t3);
          }
        }
      })(t2);
    }
  }
  function xt(t2) {
    var e2 = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var r2 = 1; r2 < arguments.length; r2++) e2[r2 - 1] = arguments[r2];
    Lt.push(new St(t2, e2)), 1 !== Lt.length || wt || mt(Mt);
  }
  function St(t2, e2) {
    this.fun = t2, this.array = e2;
  }
  St.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  function It() {
  }
  var Ct = It;
  var At = It;
  var Pt = It;
  var Et = It;
  var Rt = It;
  var Tt = It;
  var Ot = It;
  var jt = d.performance || {};
  var zt = jt.now || jt.mozNow || jt.msNow || jt.oNow || jt.webkitNow || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  var Bt = /* @__PURE__ */ new Date();
  var Dt = { nextTick: xt, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: Ct, addListener: At, once: Pt, off: Et, removeListener: Rt, removeAllListeners: Tt, emit: Ot, binding: function(t2) {
    throw new Error("process.binding is not supported");
  }, cwd: function() {
    return "/";
  }, chdir: function(t2) {
    throw new Error("process.chdir is not supported");
  }, umask: function() {
    return 0;
  }, hrtime: function(t2) {
    var e2 = 1e-3 * zt.call(jt), r2 = Math.floor(e2), a2 = Math.floor(e2 % 1 * 1e9);
    return t2 && (r2 -= t2[0], (a2 -= t2[1]) < 0 && (r2--, a2 += 1e9)), [r2, a2];
  }, platform: "browser", release: {}, config: {}, uptime: function() {
    return (/* @__PURE__ */ new Date() - Bt) / 1e3;
  } };
  var Ft = { exports: {} };
  function Nt() {
  }
  function Ut() {
    Ut.init.call(this);
  }
  function Gt(t2) {
    return void 0 === t2._maxListeners ? Ut.defaultMaxListeners : t2._maxListeners;
  }
  function qt(t2, e2, r2) {
    if (e2) t2.call(r2);
    else for (var a2 = t2.length, n2 = Kt(t2, a2), o2 = 0; o2 < a2; ++o2) n2[o2].call(r2);
  }
  function Wt(t2, e2, r2, a2) {
    if (e2) t2.call(r2, a2);
    else for (var n2 = t2.length, o2 = Kt(t2, n2), c2 = 0; c2 < n2; ++c2) o2[c2].call(r2, a2);
  }
  function Ht(t2, e2, r2, a2, n2) {
    if (e2) t2.call(r2, a2, n2);
    else for (var o2 = t2.length, c2 = Kt(t2, o2), i2 = 0; i2 < o2; ++i2) c2[i2].call(r2, a2, n2);
  }
  function Zt(t2, e2, r2, a2, n2, o2) {
    if (e2) t2.call(r2, a2, n2, o2);
    else for (var c2 = t2.length, i2 = Kt(t2, c2), s2 = 0; s2 < c2; ++s2) i2[s2].call(r2, a2, n2, o2);
  }
  function Yt(t2, e2, r2, a2) {
    if (e2) t2.apply(r2, a2);
    else for (var n2 = t2.length, o2 = Kt(t2, n2), c2 = 0; c2 < n2; ++c2) o2[c2].apply(r2, a2);
  }
  function Vt(t2, e2, r2, a2) {
    var n2, o2, c2, i2;
    if ("function" != typeof r2) throw new TypeError('"listener" argument must be a function');
    if ((o2 = t2._events) ? (o2.newListener && (t2.emit("newListener", e2, r2.listener ? r2.listener : r2), o2 = t2._events), c2 = o2[e2]) : (o2 = t2._events = new Nt(), t2._eventsCount = 0), c2) {
      if ("function" == typeof c2 ? c2 = o2[e2] = a2 ? [r2, c2] : [c2, r2] : a2 ? c2.unshift(r2) : c2.push(r2), !c2.warned && (n2 = Gt(t2)) && n2 > 0 && c2.length > n2) {
        c2.warned = true;
        var s2 = new Error("Possible EventEmitter memory leak detected. " + c2.length + " " + e2 + " listeners added. Use emitter.setMaxListeners() to increase limit");
        s2.name = "MaxListenersExceededWarning", s2.emitter = t2, s2.type = e2, s2.count = c2.length, i2 = s2, "function" == typeof console.warn ? console.warn(i2) : console.log(i2);
      }
    } else c2 = o2[e2] = r2, ++t2._eventsCount;
    return t2;
  }
  function Qt(t2, e2, r2) {
    var a2 = false;
    function n2() {
      t2.removeListener(e2, n2), a2 || (a2 = true, r2.apply(t2, arguments));
    }
    return n2.listener = r2, n2;
  }
  function $t(t2) {
    var e2 = this._events;
    if (e2) {
      var r2 = e2[t2];
      if ("function" == typeof r2) return 1;
      if (r2) return r2.length;
    }
    return 0;
  }
  function Kt(t2, e2) {
    for (var r2 = new Array(e2); e2--; ) r2[e2] = t2[e2];
    return r2;
  }
  Nt.prototype = /* @__PURE__ */ Object.create(null), Ut.EventEmitter = Ut, Ut.usingDomains = false, Ut.prototype.domain = void 0, Ut.prototype._events = void 0, Ut.prototype._maxListeners = void 0, Ut.defaultMaxListeners = 10, Ut.init = function() {
    this.domain = null, Ut.usingDomains && (void 0).active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new Nt(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, Ut.prototype.setMaxListeners = function(t2) {
    if ("number" != typeof t2 || t2 < 0 || isNaN(t2)) throw new TypeError('"n" argument must be a positive number');
    return this._maxListeners = t2, this;
  }, Ut.prototype.getMaxListeners = function() {
    return Gt(this);
  }, Ut.prototype.emit = function(t2) {
    var e2, r2, a2, n2, o2, c2, i2, s2 = "error" === t2;
    if (c2 = this._events) s2 = s2 && null == c2.error;
    else if (!s2) return false;
    if (i2 = this.domain, s2) {
      if (e2 = arguments[1], !i2) {
        if (e2 instanceof Error) throw e2;
        var l2 = new Error('Uncaught, unspecified "error" event. (' + e2 + ")");
        throw l2.context = e2, l2;
      }
      return e2 || (e2 = new Error('Uncaught, unspecified "error" event')), e2.domainEmitter = this, e2.domain = i2, e2.domainThrown = false, i2.emit("error", e2), false;
    }
    if (!(r2 = c2[t2])) return false;
    var u2 = "function" == typeof r2;
    switch (a2 = arguments.length) {
      case 1:
        qt(r2, u2, this);
        break;
      case 2:
        Wt(r2, u2, this, arguments[1]);
        break;
      case 3:
        Ht(r2, u2, this, arguments[1], arguments[2]);
        break;
      case 4:
        Zt(r2, u2, this, arguments[1], arguments[2], arguments[3]);
        break;
      default:
        for (n2 = new Array(a2 - 1), o2 = 1; o2 < a2; o2++) n2[o2 - 1] = arguments[o2];
        Yt(r2, u2, this, n2);
    }
    return true;
  }, Ut.prototype.addListener = function(t2, e2) {
    return Vt(this, t2, e2, false);
  }, Ut.prototype.on = Ut.prototype.addListener, Ut.prototype.prependListener = function(t2, e2) {
    return Vt(this, t2, e2, true);
  }, Ut.prototype.once = function(t2, e2) {
    if ("function" != typeof e2) throw new TypeError('"listener" argument must be a function');
    return this.on(t2, Qt(this, t2, e2)), this;
  }, Ut.prototype.prependOnceListener = function(t2, e2) {
    if ("function" != typeof e2) throw new TypeError('"listener" argument must be a function');
    return this.prependListener(t2, Qt(this, t2, e2)), this;
  }, Ut.prototype.removeListener = function(t2, e2) {
    var r2, a2, n2, o2, c2;
    if ("function" != typeof e2) throw new TypeError('"listener" argument must be a function');
    if (!(a2 = this._events)) return this;
    if (!(r2 = a2[t2])) return this;
    if (r2 === e2 || r2.listener && r2.listener === e2) 0 == --this._eventsCount ? this._events = new Nt() : (delete a2[t2], a2.removeListener && this.emit("removeListener", t2, r2.listener || e2));
    else if ("function" != typeof r2) {
      for (n2 = -1, o2 = r2.length; o2-- > 0; ) if (r2[o2] === e2 || r2[o2].listener && r2[o2].listener === e2) {
        c2 = r2[o2].listener, n2 = o2;
        break;
      }
      if (n2 < 0) return this;
      if (1 === r2.length) {
        if (r2[0] = void 0, 0 == --this._eventsCount) return this._events = new Nt(), this;
        delete a2[t2];
      } else !(function(t3, e3) {
        for (var r3 = e3, a3 = r3 + 1, n3 = t3.length; a3 < n3; r3 += 1, a3 += 1) t3[r3] = t3[a3];
        t3.pop();
      })(r2, n2);
      a2.removeListener && this.emit("removeListener", t2, c2 || e2);
    }
    return this;
  }, Ut.prototype.removeAllListeners = function(t2) {
    var e2, r2;
    if (!(r2 = this._events)) return this;
    if (!r2.removeListener) return 0 === arguments.length ? (this._events = new Nt(), this._eventsCount = 0) : r2[t2] && (0 == --this._eventsCount ? this._events = new Nt() : delete r2[t2]), this;
    if (0 === arguments.length) {
      for (var a2, n2 = Object.keys(r2), o2 = 0; o2 < n2.length; ++o2) "removeListener" !== (a2 = n2[o2]) && this.removeAllListeners(a2);
      return this.removeAllListeners("removeListener"), this._events = new Nt(), this._eventsCount = 0, this;
    }
    if ("function" == typeof (e2 = r2[t2])) this.removeListener(t2, e2);
    else if (e2) do {
      this.removeListener(t2, e2[e2.length - 1]);
    } while (e2[0]);
    return this;
  }, Ut.prototype.listeners = function(t2) {
    var e2, r2, a2 = this._events;
    return r2 = a2 && (e2 = a2[t2]) ? "function" == typeof e2 ? [e2.listener || e2] : (function(t3) {
      for (var e3 = new Array(t3.length), r3 = 0; r3 < e3.length; ++r3) e3[r3] = t3[r3].listener || t3[r3];
      return e3;
    })(e2) : [], r2;
  }, Ut.listenerCount = function(t2, e2) {
    return "function" == typeof t2.listenerCount ? t2.listenerCount(e2) : $t.call(t2, e2);
  }, Ut.prototype.listenerCount = $t, Ut.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };
  var Xt = Object.freeze({ __proto__: null, default: Ut, EventEmitter: Ut });
  var Jt = "function" == typeof Object.create ? function(t2, e2) {
    t2.super_ = e2, t2.prototype = Object.create(e2.prototype, { constructor: { value: t2, enumerable: false, writable: true, configurable: true } });
  } : function(t2, e2) {
    t2.super_ = e2;
    var r2 = function() {
    };
    r2.prototype = e2.prototype, t2.prototype = new r2(), t2.prototype.constructor = t2;
  };
  var te = /%[sdj%]/g;
  function ee(t2) {
    if (!ve(t2)) {
      for (var e2 = [], r2 = 0; r2 < arguments.length; r2++) e2.push(ce(arguments[r2]));
      return e2.join(" ");
    }
    r2 = 1;
    for (var a2 = arguments, n2 = a2.length, o2 = String(t2).replace(te, (function(t3) {
      if ("%%" === t3) return "%";
      if (r2 >= n2) return t3;
      switch (t3) {
        case "%s":
          return String(a2[r2++]);
        case "%d":
          return Number(a2[r2++]);
        case "%j":
          try {
            return JSON.stringify(a2[r2++]);
          } catch (t4) {
            return "[Circular]";
          }
        default:
          return t3;
      }
    })), c2 = a2[r2]; r2 < n2; c2 = a2[++r2]) pe(c2) || !we(c2) ? o2 += " " + c2 : o2 += " " + ce(c2);
    return o2;
  }
  function re(t2, e2) {
    if (ye(d.process)) return function() {
      return re(t2, e2).apply(this, arguments);
    };
    if (true === Dt.noDeprecation) return t2;
    var r2 = false;
    return function() {
      if (!r2) {
        if (Dt.throwDeprecation) throw new Error(e2);
        Dt.traceDeprecation ? console.trace(e2) : console.error(e2), r2 = true;
      }
      return t2.apply(this, arguments);
    };
  }
  var ae;
  var ne = {};
  function oe(t2) {
    if (ye(ae) && (ae = Dt.env.NODE_DEBUG || ""), t2 = t2.toUpperCase(), !ne[t2]) if (new RegExp("\\b" + t2 + "\\b", "i").test(ae)) {
      ne[t2] = function() {
        var e2 = ee.apply(null, arguments);
        console.error("%s %d: %s", t2, 0, e2);
      };
    } else ne[t2] = function() {
    };
    return ne[t2];
  }
  function ce(t2, e2) {
    var r2 = { seen: [], stylize: se };
    return arguments.length >= 3 && (r2.depth = arguments[2]), arguments.length >= 4 && (r2.colors = arguments[3]), de(e2) ? r2.showHidden = e2 : e2 && Re(r2, e2), ye(r2.showHidden) && (r2.showHidden = false), ye(r2.depth) && (r2.depth = 2), ye(r2.colors) && (r2.colors = false), ye(r2.customInspect) && (r2.customInspect = true), r2.colors && (r2.stylize = ie), le(r2, t2, r2.depth);
  }
  function ie(t2, e2) {
    var r2 = ce.styles[e2];
    return r2 ? "\x1B[" + ce.colors[r2][0] + "m" + t2 + "\x1B[" + ce.colors[r2][1] + "m" : t2;
  }
  function se(t2, e2) {
    return t2;
  }
  function le(t2, e2, r2) {
    if (t2.customInspect && e2 && Me(e2.inspect) && e2.inspect !== ce && (!e2.constructor || e2.constructor.prototype !== e2)) {
      var a2 = e2.inspect(r2, t2);
      return ve(a2) || (a2 = le(t2, a2, r2)), a2;
    }
    var n2 = (function(t3, e3) {
      if (ye(e3)) return t3.stylize("undefined", "undefined");
      if (ve(e3)) {
        var r3 = "'" + JSON.stringify(e3).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return t3.stylize(r3, "string");
      }
      if (ge(e3)) return t3.stylize("" + e3, "number");
      if (de(e3)) return t3.stylize("" + e3, "boolean");
      if (pe(e3)) return t3.stylize("null", "null");
    })(t2, e2);
    if (n2) return n2;
    var o2 = Object.keys(e2), c2 = (function(t3) {
      var e3 = {};
      return t3.forEach((function(t4, r3) {
        e3[t4] = true;
      })), e3;
    })(o2);
    if (t2.showHidden && (o2 = Object.getOwnPropertyNames(e2)), ke(e2) && (o2.indexOf("message") >= 0 || o2.indexOf("description") >= 0)) return ue(e2);
    if (0 === o2.length) {
      if (Me(e2)) {
        var i2 = e2.name ? ": " + e2.name : "";
        return t2.stylize("[Function" + i2 + "]", "special");
      }
      if (Le(e2)) return t2.stylize(RegExp.prototype.toString.call(e2), "regexp");
      if (_e(e2)) return t2.stylize(Date.prototype.toString.call(e2), "date");
      if (ke(e2)) return ue(e2);
    }
    var s2, l2 = "", u2 = false, f2 = ["{", "}"];
    (he(e2) && (u2 = true, f2 = ["[", "]"]), Me(e2)) && (l2 = " [Function" + (e2.name ? ": " + e2.name : "") + "]");
    return Le(e2) && (l2 = " " + RegExp.prototype.toString.call(e2)), _e(e2) && (l2 = " " + Date.prototype.toUTCString.call(e2)), ke(e2) && (l2 = " " + ue(e2)), 0 !== o2.length || u2 && 0 != e2.length ? r2 < 0 ? Le(e2) ? t2.stylize(RegExp.prototype.toString.call(e2), "regexp") : t2.stylize("[Object]", "special") : (t2.seen.push(e2), s2 = u2 ? (function(t3, e3, r3, a3, n3) {
      for (var o3 = [], c3 = 0, i3 = e3.length; c3 < i3; ++c3) Te(e3, String(c3)) ? o3.push(fe(t3, e3, r3, a3, String(c3), true)) : o3.push("");
      return n3.forEach((function(n4) {
        n4.match(/^\d+$/) || o3.push(fe(t3, e3, r3, a3, n4, true));
      })), o3;
    })(t2, e2, r2, c2, o2) : o2.map((function(a3) {
      return fe(t2, e2, r2, c2, a3, u2);
    })), t2.seen.pop(), (function(t3, e3, r3) {
      if (t3.reduce((function(t4, e4) {
        return e4.indexOf("\n"), t4 + e4.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }), 0) > 60) return r3[0] + ("" === e3 ? "" : e3 + "\n ") + " " + t3.join(",\n  ") + " " + r3[1];
      return r3[0] + e3 + " " + t3.join(", ") + " " + r3[1];
    })(s2, l2, f2)) : f2[0] + l2 + f2[1];
  }
  function ue(t2) {
    return "[" + Error.prototype.toString.call(t2) + "]";
  }
  function fe(t2, e2, r2, a2, n2, o2) {
    var c2, i2, s2;
    if ((s2 = Object.getOwnPropertyDescriptor(e2, n2) || { value: e2[n2] }).get ? i2 = s2.set ? t2.stylize("[Getter/Setter]", "special") : t2.stylize("[Getter]", "special") : s2.set && (i2 = t2.stylize("[Setter]", "special")), Te(a2, n2) || (c2 = "[" + n2 + "]"), i2 || (t2.seen.indexOf(s2.value) < 0 ? (i2 = pe(r2) ? le(t2, s2.value, null) : le(t2, s2.value, r2 - 1)).indexOf("\n") > -1 && (i2 = o2 ? i2.split("\n").map((function(t3) {
      return "  " + t3;
    })).join("\n").substr(2) : "\n" + i2.split("\n").map((function(t3) {
      return "   " + t3;
    })).join("\n")) : i2 = t2.stylize("[Circular]", "special")), ye(c2)) {
      if (o2 && n2.match(/^\d+$/)) return i2;
      (c2 = JSON.stringify("" + n2)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (c2 = c2.substr(1, c2.length - 2), c2 = t2.stylize(c2, "name")) : (c2 = c2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), c2 = t2.stylize(c2, "string"));
    }
    return c2 + ": " + i2;
  }
  function he(t2) {
    return Array.isArray(t2);
  }
  function de(t2) {
    return "boolean" == typeof t2;
  }
  function pe(t2) {
    return null === t2;
  }
  function be(t2) {
    return null == t2;
  }
  function ge(t2) {
    return "number" == typeof t2;
  }
  function ve(t2) {
    return "string" == typeof t2;
  }
  function me(t2) {
    return "symbol" == typeof t2;
  }
  function ye(t2) {
    return void 0 === t2;
  }
  function Le(t2) {
    return we(t2) && "[object RegExp]" === Ie(t2);
  }
  function we(t2) {
    return "object" == typeof t2 && null !== t2;
  }
  function _e(t2) {
    return we(t2) && "[object Date]" === Ie(t2);
  }
  function ke(t2) {
    return we(t2) && ("[object Error]" === Ie(t2) || t2 instanceof Error);
  }
  function Me(t2) {
    return "function" == typeof t2;
  }
  function xe(t2) {
    return null === t2 || "boolean" == typeof t2 || "number" == typeof t2 || "string" == typeof t2 || "symbol" == typeof t2 || void 0 === t2;
  }
  function Se(t2) {
    return ut(t2);
  }
  function Ie(t2) {
    return Object.prototype.toString.call(t2);
  }
  function Ce(t2) {
    return t2 < 10 ? "0" + t2.toString(10) : t2.toString(10);
  }
  ce.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, ce.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
  var Ae = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function Pe() {
    var t2 = /* @__PURE__ */ new Date(), e2 = [Ce(t2.getHours()), Ce(t2.getMinutes()), Ce(t2.getSeconds())].join(":");
    return [t2.getDate(), Ae[t2.getMonth()], e2].join(" ");
  }
  function Ee() {
    console.log("%s - %s", Pe(), ee.apply(null, arguments));
  }
  function Re(t2, e2) {
    if (!e2 || !we(e2)) return t2;
    for (var r2 = Object.keys(e2), a2 = r2.length; a2--; ) t2[r2[a2]] = e2[r2[a2]];
    return t2;
  }
  function Te(t2, e2) {
    return Object.prototype.hasOwnProperty.call(t2, e2);
  }
  var Oe = { inherits: Jt, _extend: Re, log: Ee, isBuffer: Se, isPrimitive: xe, isFunction: Me, isError: ke, isDate: _e, isObject: we, isRegExp: Le, isUndefined: ye, isSymbol: me, isString: ve, isNumber: ge, isNullOrUndefined: be, isNull: pe, isBoolean: de, isArray: he, inspect: ce, deprecate: re, format: ee, debuglog: oe };
  var je = Object.freeze({ __proto__: null, format: ee, deprecate: re, debuglog: oe, inspect: ce, isArray: he, isBoolean: de, isNull: pe, isNullOrUndefined: be, isNumber: ge, isString: ve, isSymbol: me, isUndefined: ye, isRegExp: Le, isObject: we, isDate: _e, isError: ke, isFunction: Me, isPrimitive: xe, isBuffer: Se, log: Ee, inherits: Jt, _extend: Re, default: Oe });
  function ze() {
    this.head = null, this.tail = null, this.length = 0;
  }
  ze.prototype.push = function(t2) {
    var e2 = { data: t2, next: null };
    this.length > 0 ? this.tail.next = e2 : this.head = e2, this.tail = e2, ++this.length;
  }, ze.prototype.unshift = function(t2) {
    var e2 = { data: t2, next: this.head };
    0 === this.length && (this.tail = e2), this.head = e2, ++this.length;
  }, ze.prototype.shift = function() {
    if (0 !== this.length) {
      var t2 = this.head.data;
      return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t2;
    }
  }, ze.prototype.clear = function() {
    this.head = this.tail = null, this.length = 0;
  }, ze.prototype.join = function(t2) {
    if (0 === this.length) return "";
    for (var e2 = this.head, r2 = "" + e2.data; e2 = e2.next; ) r2 += t2 + e2.data;
    return r2;
  }, ze.prototype.concat = function(t2) {
    if (0 === this.length) return C.alloc(0);
    if (1 === this.length) return this.head.data;
    for (var e2 = C.allocUnsafe(t2 >>> 0), r2 = this.head, a2 = 0; r2; ) r2.data.copy(e2, a2), a2 += r2.data.length, r2 = r2.next;
    return e2;
  };
  var Be = C.isEncoding || function(t2) {
    switch (t2 && t2.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function De(t2) {
    switch (this.encoding = (t2 || "utf8").toLowerCase().replace(/[-_]/, ""), (function(t3) {
      if (t3 && !Be(t3)) throw new Error("Unknown encoding: " + t3);
    })(t2), this.encoding) {
      case "utf8":
        this.surrogateSize = 3;
        break;
      case "ucs2":
      case "utf16le":
        this.surrogateSize = 2, this.detectIncompleteChar = Ne;
        break;
      case "base64":
        this.surrogateSize = 3, this.detectIncompleteChar = Ue;
        break;
      default:
        return void (this.write = Fe);
    }
    this.charBuffer = new C(6), this.charReceived = 0, this.charLength = 0;
  }
  function Fe(t2) {
    return t2.toString(this.encoding);
  }
  function Ne(t2) {
    this.charReceived = t2.length % 2, this.charLength = this.charReceived ? 2 : 0;
  }
  function Ue(t2) {
    this.charReceived = t2.length % 3, this.charLength = this.charReceived ? 3 : 0;
  }
  De.prototype.write = function(t2) {
    for (var e2 = ""; this.charLength; ) {
      var r2 = t2.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t2.length;
      if (t2.copy(this.charBuffer, this.charReceived, 0, r2), this.charReceived += r2, this.charReceived < this.charLength) return "";
      if (t2 = t2.slice(r2, t2.length), !((n2 = (e2 = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(e2.length - 1)) >= 55296 && n2 <= 56319)) {
        if (this.charReceived = this.charLength = 0, 0 === t2.length) return e2;
        break;
      }
      this.charLength += this.surrogateSize, e2 = "";
    }
    this.detectIncompleteChar(t2);
    var a2 = t2.length;
    this.charLength && (t2.copy(this.charBuffer, 0, t2.length - this.charReceived, a2), a2 -= this.charReceived);
    var n2;
    a2 = (e2 += t2.toString(this.encoding, 0, a2)).length - 1;
    if ((n2 = e2.charCodeAt(a2)) >= 55296 && n2 <= 56319) {
      var o2 = this.surrogateSize;
      return this.charLength += o2, this.charReceived += o2, this.charBuffer.copy(this.charBuffer, o2, 0, o2), t2.copy(this.charBuffer, 0, 0, o2), e2.substring(0, a2);
    }
    return e2;
  }, De.prototype.detectIncompleteChar = function(t2) {
    for (var e2 = t2.length >= 3 ? 3 : t2.length; e2 > 0; e2--) {
      var r2 = t2[t2.length - e2];
      if (1 == e2 && r2 >> 5 == 6) {
        this.charLength = 2;
        break;
      }
      if (e2 <= 2 && r2 >> 4 == 14) {
        this.charLength = 3;
        break;
      }
      if (e2 <= 3 && r2 >> 3 == 30) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = e2;
  }, De.prototype.end = function(t2) {
    var e2 = "";
    if (t2 && t2.length && (e2 = this.write(t2)), this.charReceived) {
      var r2 = this.charReceived, a2 = this.charBuffer, n2 = this.encoding;
      e2 += a2.slice(0, r2).toString(n2);
    }
    return e2;
  }, We.ReadableState = qe;
  var Ge = oe("stream");
  function qe(t2, e2) {
    t2 = t2 || {}, this.objectMode = !!t2.objectMode, e2 instanceof vr && (this.objectMode = this.objectMode || !!t2.readableObjectMode);
    var r2 = t2.highWaterMark, a2 = this.objectMode ? 16 : 16384;
    this.highWaterMark = r2 || 0 === r2 ? r2 : a2, this.highWaterMark = ~~this.highWaterMark, this.buffer = new ze(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.defaultEncoding = t2.defaultEncoding || "utf8", this.ranOut = false, this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t2.encoding && (this.decoder = new De(t2.encoding), this.encoding = t2.encoding);
  }
  function We(t2) {
    if (!(this instanceof We)) return new We(t2);
    this._readableState = new qe(t2, this), this.readable = true, t2 && "function" == typeof t2.read && (this._read = t2.read), Ut.call(this);
  }
  function He(t2, e2, r2, a2, n2) {
    var o2 = (function(t3, e3) {
      var r3 = null;
      ut(e3) || "string" == typeof e3 || null == e3 || t3.objectMode || (r3 = new TypeError("Invalid non-string/buffer chunk"));
      return r3;
    })(e2, r2);
    if (o2) t2.emit("error", o2);
    else if (null === r2) e2.reading = false, (function(t3, e3) {
      if (e3.ended) return;
      if (e3.decoder) {
        var r3 = e3.decoder.end();
        r3 && r3.length && (e3.buffer.push(r3), e3.length += e3.objectMode ? 1 : r3.length);
      }
      e3.ended = true, Ye(t3);
    })(t2, e2);
    else if (e2.objectMode || r2 && r2.length > 0) if (e2.ended && !n2) {
      var c2 = new Error("stream.push() after EOF");
      t2.emit("error", c2);
    } else if (e2.endEmitted && n2) {
      var i2 = new Error("stream.unshift() after end event");
      t2.emit("error", i2);
    } else {
      var s2;
      !e2.decoder || n2 || a2 || (r2 = e2.decoder.write(r2), s2 = !e2.objectMode && 0 === r2.length), n2 || (e2.reading = false), s2 || (e2.flowing && 0 === e2.length && !e2.sync ? (t2.emit("data", r2), t2.read(0)) : (e2.length += e2.objectMode ? 1 : r2.length, n2 ? e2.buffer.unshift(r2) : e2.buffer.push(r2), e2.needReadable && Ye(t2))), (function(t3, e3) {
        e3.readingMore || (e3.readingMore = true, xt(Qe, t3, e3));
      })(t2, e2);
    }
    else n2 || (e2.reading = false);
    return (function(t3) {
      return !t3.ended && (t3.needReadable || t3.length < t3.highWaterMark || 0 === t3.length);
    })(e2);
  }
  Jt(We, Ut), We.prototype.push = function(t2, e2) {
    var r2 = this._readableState;
    return r2.objectMode || "string" != typeof t2 || (e2 = e2 || r2.defaultEncoding) !== r2.encoding && (t2 = C.from(t2, e2), e2 = ""), He(this, r2, t2, e2, false);
  }, We.prototype.unshift = function(t2) {
    return He(this, this._readableState, t2, "", true);
  }, We.prototype.isPaused = function() {
    return false === this._readableState.flowing;
  }, We.prototype.setEncoding = function(t2) {
    return this._readableState.decoder = new De(t2), this._readableState.encoding = t2, this;
  };
  function Ze(t2, e2) {
    return t2 <= 0 || 0 === e2.length && e2.ended ? 0 : e2.objectMode ? 1 : t2 != t2 ? e2.flowing && e2.length ? e2.buffer.head.data.length : e2.length : (t2 > e2.highWaterMark && (e2.highWaterMark = (function(t3) {
      return t3 >= 8388608 ? t3 = 8388608 : (t3--, t3 |= t3 >>> 1, t3 |= t3 >>> 2, t3 |= t3 >>> 4, t3 |= t3 >>> 8, t3 |= t3 >>> 16, t3++), t3;
    })(t2)), t2 <= e2.length ? t2 : e2.ended ? e2.length : (e2.needReadable = true, 0));
  }
  function Ye(t2) {
    var e2 = t2._readableState;
    e2.needReadable = false, e2.emittedReadable || (Ge("emitReadable", e2.flowing), e2.emittedReadable = true, e2.sync ? xt(Ve, t2) : Ve(t2));
  }
  function Ve(t2) {
    Ge("emit readable"), t2.emit("readable"), Xe(t2);
  }
  function Qe(t2, e2) {
    for (var r2 = e2.length; !e2.reading && !e2.flowing && !e2.ended && e2.length < e2.highWaterMark && (Ge("maybeReadMore read 0"), t2.read(0), r2 !== e2.length); ) r2 = e2.length;
    e2.readingMore = false;
  }
  function $e(t2) {
    Ge("readable nexttick read 0"), t2.read(0);
  }
  function Ke(t2, e2) {
    e2.reading || (Ge("resume read 0"), t2.read(0)), e2.resumeScheduled = false, e2.awaitDrain = 0, t2.emit("resume"), Xe(t2), e2.flowing && !e2.reading && t2.read(0);
  }
  function Xe(t2) {
    var e2 = t2._readableState;
    for (Ge("flow", e2.flowing); e2.flowing && null !== t2.read(); ) ;
  }
  function Je(t2, e2) {
    return 0 === e2.length ? null : (e2.objectMode ? r2 = e2.buffer.shift() : !t2 || t2 >= e2.length ? (r2 = e2.decoder ? e2.buffer.join("") : 1 === e2.buffer.length ? e2.buffer.head.data : e2.buffer.concat(e2.length), e2.buffer.clear()) : r2 = (function(t3, e3, r3) {
      var a2;
      t3 < e3.head.data.length ? (a2 = e3.head.data.slice(0, t3), e3.head.data = e3.head.data.slice(t3)) : a2 = t3 === e3.head.data.length ? e3.shift() : r3 ? (function(t4, e4) {
        var r4 = e4.head, a3 = 1, n2 = r4.data;
        t4 -= n2.length;
        for (; r4 = r4.next; ) {
          var o2 = r4.data, c2 = t4 > o2.length ? o2.length : t4;
          if (c2 === o2.length ? n2 += o2 : n2 += o2.slice(0, t4), 0 === (t4 -= c2)) {
            c2 === o2.length ? (++a3, r4.next ? e4.head = r4.next : e4.head = e4.tail = null) : (e4.head = r4, r4.data = o2.slice(c2));
            break;
          }
          ++a3;
        }
        return e4.length -= a3, n2;
      })(t3, e3) : (function(t4, e4) {
        var r4 = C.allocUnsafe(t4), a3 = e4.head, n2 = 1;
        a3.data.copy(r4), t4 -= a3.data.length;
        for (; a3 = a3.next; ) {
          var o2 = a3.data, c2 = t4 > o2.length ? o2.length : t4;
          if (o2.copy(r4, r4.length - t4, 0, c2), 0 === (t4 -= c2)) {
            c2 === o2.length ? (++n2, a3.next ? e4.head = a3.next : e4.head = e4.tail = null) : (e4.head = a3, a3.data = o2.slice(c2));
            break;
          }
          ++n2;
        }
        return e4.length -= n2, r4;
      })(t3, e3);
      return a2;
    })(t2, e2.buffer, e2.decoder), r2);
    var r2;
  }
  function tr(t2) {
    var e2 = t2._readableState;
    if (e2.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    e2.endEmitted || (e2.ended = true, xt(er, e2, t2));
  }
  function er(t2, e2) {
    t2.endEmitted || 0 !== t2.length || (t2.endEmitted = true, e2.readable = false, e2.emit("end"));
  }
  function rr(t2, e2) {
    for (var r2 = 0, a2 = t2.length; r2 < a2; r2++) if (t2[r2] === e2) return r2;
    return -1;
  }
  function ar() {
  }
  function nr(t2, e2, r2) {
    this.chunk = t2, this.encoding = e2, this.callback = r2, this.next = null;
  }
  function or(t2, e2) {
    Object.defineProperty(this, "buffer", { get: re((function() {
      return this.getBuffer();
    }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.") }), t2 = t2 || {}, this.objectMode = !!t2.objectMode, e2 instanceof vr && (this.objectMode = this.objectMode || !!t2.writableObjectMode);
    var r2 = t2.highWaterMark, a2 = this.objectMode ? 16 : 16384;
    this.highWaterMark = r2 || 0 === r2 ? r2 : a2, this.highWaterMark = ~~this.highWaterMark, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false;
    var n2 = false === t2.decodeStrings;
    this.decodeStrings = !n2, this.defaultEncoding = t2.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(t3) {
      !(function(t4, e3) {
        var r3 = t4._writableState, a3 = r3.sync, n3 = r3.writecb;
        if ((function(t5) {
          t5.writing = false, t5.writecb = null, t5.length -= t5.writelen, t5.writelen = 0;
        })(r3), e3) !(function(t5, e4, r4, a4, n4) {
          --e4.pendingcb, r4 ? xt(n4, a4) : n4(a4);
          t5._writableState.errorEmitted = true, t5.emit("error", a4);
        })(t4, r3, a3, e3, n3);
        else {
          var o2 = ur(r3);
          o2 || r3.corked || r3.bufferProcessing || !r3.bufferedRequest || lr(t4, r3), a3 ? xt(sr, t4, r3, o2, n3) : sr(t4, r3, o2, n3);
        }
      })(e2, t3);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.bufferedRequestCount = 0, this.corkedRequestsFree = new dr(this);
  }
  function cr(t2) {
    if (!(this instanceof cr || this instanceof vr)) return new cr(t2);
    this._writableState = new or(t2, this), this.writable = true, t2 && ("function" == typeof t2.write && (this._write = t2.write), "function" == typeof t2.writev && (this._writev = t2.writev)), Ut.call(this);
  }
  function ir(t2, e2, r2, a2, n2, o2, c2) {
    e2.writelen = a2, e2.writecb = c2, e2.writing = true, e2.sync = true, r2 ? t2._writev(n2, e2.onwrite) : t2._write(n2, o2, e2.onwrite), e2.sync = false;
  }
  function sr(t2, e2, r2, a2) {
    r2 || (function(t3, e3) {
      0 === e3.length && e3.needDrain && (e3.needDrain = false, t3.emit("drain"));
    })(t2, e2), e2.pendingcb--, a2(), hr(t2, e2);
  }
  function lr(t2, e2) {
    e2.bufferProcessing = true;
    var r2 = e2.bufferedRequest;
    if (t2._writev && r2 && r2.next) {
      var a2 = e2.bufferedRequestCount, n2 = new Array(a2), o2 = e2.corkedRequestsFree;
      o2.entry = r2;
      for (var c2 = 0; r2; ) n2[c2] = r2, r2 = r2.next, c2 += 1;
      ir(t2, e2, true, e2.length, n2, "", o2.finish), e2.pendingcb++, e2.lastBufferedRequest = null, o2.next ? (e2.corkedRequestsFree = o2.next, o2.next = null) : e2.corkedRequestsFree = new dr(e2);
    } else {
      for (; r2; ) {
        var i2 = r2.chunk, s2 = r2.encoding, l2 = r2.callback;
        if (ir(t2, e2, false, e2.objectMode ? 1 : i2.length, i2, s2, l2), r2 = r2.next, e2.writing) break;
      }
      null === r2 && (e2.lastBufferedRequest = null);
    }
    e2.bufferedRequestCount = 0, e2.bufferedRequest = r2, e2.bufferProcessing = false;
  }
  function ur(t2) {
    return t2.ending && 0 === t2.length && null === t2.bufferedRequest && !t2.finished && !t2.writing;
  }
  function fr(t2, e2) {
    e2.prefinished || (e2.prefinished = true, t2.emit("prefinish"));
  }
  function hr(t2, e2) {
    var r2 = ur(e2);
    return r2 && (0 === e2.pendingcb ? (fr(t2, e2), e2.finished = true, t2.emit("finish")) : fr(t2, e2)), r2;
  }
  function dr(t2) {
    var e2 = this;
    this.next = null, this.entry = null, this.finish = function(r2) {
      var a2 = e2.entry;
      for (e2.entry = null; a2; ) {
        var n2 = a2.callback;
        t2.pendingcb--, n2(r2), a2 = a2.next;
      }
      t2.corkedRequestsFree ? t2.corkedRequestsFree.next = e2 : t2.corkedRequestsFree = e2;
    };
  }
  We.prototype.read = function(t2) {
    Ge("read", t2), t2 = parseInt(t2, 10);
    var e2 = this._readableState, r2 = t2;
    if (0 !== t2 && (e2.emittedReadable = false), 0 === t2 && e2.needReadable && (e2.length >= e2.highWaterMark || e2.ended)) return Ge("read: emitReadable", e2.length, e2.ended), 0 === e2.length && e2.ended ? tr(this) : Ye(this), null;
    if (0 === (t2 = Ze(t2, e2)) && e2.ended) return 0 === e2.length && tr(this), null;
    var a2, n2 = e2.needReadable;
    return Ge("need readable", n2), (0 === e2.length || e2.length - t2 < e2.highWaterMark) && Ge("length less than watermark", n2 = true), e2.ended || e2.reading ? Ge("reading or ended", n2 = false) : n2 && (Ge("do read"), e2.reading = true, e2.sync = true, 0 === e2.length && (e2.needReadable = true), this._read(e2.highWaterMark), e2.sync = false, e2.reading || (t2 = Ze(r2, e2))), null === (a2 = t2 > 0 ? Je(t2, e2) : null) ? (e2.needReadable = true, t2 = 0) : e2.length -= t2, 0 === e2.length && (e2.ended || (e2.needReadable = true), r2 !== t2 && e2.ended && tr(this)), null !== a2 && this.emit("data", a2), a2;
  }, We.prototype._read = function(t2) {
    this.emit("error", new Error("not implemented"));
  }, We.prototype.pipe = function(t2, e2) {
    var r2 = this, a2 = this._readableState;
    switch (a2.pipesCount) {
      case 0:
        a2.pipes = t2;
        break;
      case 1:
        a2.pipes = [a2.pipes, t2];
        break;
      default:
        a2.pipes.push(t2);
    }
    a2.pipesCount += 1, Ge("pipe count=%d opts=%j", a2.pipesCount, e2);
    var n2 = !e2 || false !== e2.end ? c2 : l2;
    function o2(t3) {
      Ge("onunpipe"), t3 === r2 && l2();
    }
    function c2() {
      Ge("onend"), t2.end();
    }
    a2.endEmitted ? xt(n2) : r2.once("end", n2), t2.on("unpipe", o2);
    var i2 = /* @__PURE__ */ (function(t3) {
      return function() {
        var e3 = t3._readableState;
        Ge("pipeOnDrain", e3.awaitDrain), e3.awaitDrain && e3.awaitDrain--, 0 === e3.awaitDrain && t3.listeners("data").length && (e3.flowing = true, Xe(t3));
      };
    })(r2);
    t2.on("drain", i2);
    var s2 = false;
    function l2() {
      Ge("cleanup"), t2.removeListener("close", d2), t2.removeListener("finish", p2), t2.removeListener("drain", i2), t2.removeListener("error", h2), t2.removeListener("unpipe", o2), r2.removeListener("end", c2), r2.removeListener("end", l2), r2.removeListener("data", f2), s2 = true, !a2.awaitDrain || t2._writableState && !t2._writableState.needDrain || i2();
    }
    var u2 = false;
    function f2(e3) {
      Ge("ondata"), u2 = false, false !== t2.write(e3) || u2 || ((1 === a2.pipesCount && a2.pipes === t2 || a2.pipesCount > 1 && -1 !== rr(a2.pipes, t2)) && !s2 && (Ge("false write response, pause", r2._readableState.awaitDrain), r2._readableState.awaitDrain++, u2 = true), r2.pause());
    }
    function h2(e3) {
      var r3;
      Ge("onerror", e3), b2(), t2.removeListener("error", h2), 0 === (r3 = "error", t2.listeners(r3).length) && t2.emit("error", e3);
    }
    function d2() {
      t2.removeListener("finish", p2), b2();
    }
    function p2() {
      Ge("onfinish"), t2.removeListener("close", d2), b2();
    }
    function b2() {
      Ge("unpipe"), r2.unpipe(t2);
    }
    return r2.on("data", f2), (function(t3, e3, r3) {
      if ("function" == typeof t3.prependListener) return t3.prependListener(e3, r3);
      t3._events && t3._events[e3] ? Array.isArray(t3._events[e3]) ? t3._events[e3].unshift(r3) : t3._events[e3] = [r3, t3._events[e3]] : t3.on(e3, r3);
    })(t2, "error", h2), t2.once("close", d2), t2.once("finish", p2), t2.emit("pipe", r2), a2.flowing || (Ge("pipe resume"), r2.resume()), t2;
  }, We.prototype.unpipe = function(t2) {
    var e2 = this._readableState;
    if (0 === e2.pipesCount) return this;
    if (1 === e2.pipesCount) return t2 && t2 !== e2.pipes || (t2 || (t2 = e2.pipes), e2.pipes = null, e2.pipesCount = 0, e2.flowing = false, t2 && t2.emit("unpipe", this)), this;
    if (!t2) {
      var r2 = e2.pipes, a2 = e2.pipesCount;
      e2.pipes = null, e2.pipesCount = 0, e2.flowing = false;
      for (var n2 = 0; n2 < a2; n2++) r2[n2].emit("unpipe", this);
      return this;
    }
    var o2 = rr(e2.pipes, t2);
    return -1 === o2 || (e2.pipes.splice(o2, 1), e2.pipesCount -= 1, 1 === e2.pipesCount && (e2.pipes = e2.pipes[0]), t2.emit("unpipe", this)), this;
  }, We.prototype.on = function(t2, e2) {
    var r2 = Ut.prototype.on.call(this, t2, e2);
    if ("data" === t2) false !== this._readableState.flowing && this.resume();
    else if ("readable" === t2) {
      var a2 = this._readableState;
      a2.endEmitted || a2.readableListening || (a2.readableListening = a2.needReadable = true, a2.emittedReadable = false, a2.reading ? a2.length && Ye(this) : xt($e, this));
    }
    return r2;
  }, We.prototype.addListener = We.prototype.on, We.prototype.resume = function() {
    var t2 = this._readableState;
    return t2.flowing || (Ge("resume"), t2.flowing = true, (function(t3, e2) {
      e2.resumeScheduled || (e2.resumeScheduled = true, xt(Ke, t3, e2));
    })(this, t2)), this;
  }, We.prototype.pause = function() {
    return Ge("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (Ge("pause"), this._readableState.flowing = false, this.emit("pause")), this;
  }, We.prototype.wrap = function(t2) {
    var e2 = this._readableState, r2 = false, a2 = this;
    for (var n2 in t2.on("end", (function() {
      if (Ge("wrapped end"), e2.decoder && !e2.ended) {
        var t3 = e2.decoder.end();
        t3 && t3.length && a2.push(t3);
      }
      a2.push(null);
    })), t2.on("data", (function(n3) {
      (Ge("wrapped data"), e2.decoder && (n3 = e2.decoder.write(n3)), e2.objectMode && null == n3) || (e2.objectMode || n3 && n3.length) && (a2.push(n3) || (r2 = true, t2.pause()));
    })), t2) void 0 === this[n2] && "function" == typeof t2[n2] && (this[n2] = /* @__PURE__ */ (function(e3) {
      return function() {
        return t2[e3].apply(t2, arguments);
      };
    })(n2));
    return (function(t3, e3) {
      for (var r3 = 0, a3 = t3.length; r3 < a3; r3++) e3(t3[r3], r3);
    })(["error", "close", "destroy", "pause", "resume"], (function(e3) {
      t2.on(e3, a2.emit.bind(a2, e3));
    })), a2._read = function(e3) {
      Ge("wrapped _read", e3), r2 && (r2 = false, t2.resume());
    }, a2;
  }, We._fromList = Je, cr.WritableState = or, Jt(cr, Ut), or.prototype.getBuffer = function() {
    for (var t2 = this.bufferedRequest, e2 = []; t2; ) e2.push(t2), t2 = t2.next;
    return e2;
  }, cr.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  }, cr.prototype.write = function(t2, e2, r2) {
    var a2 = this._writableState, n2 = false;
    return "function" == typeof e2 && (r2 = e2, e2 = null), C.isBuffer(t2) ? e2 = "buffer" : e2 || (e2 = a2.defaultEncoding), "function" != typeof r2 && (r2 = ar), a2.ended ? (function(t3, e3) {
      var r3 = new Error("write after end");
      t3.emit("error", r3), xt(e3, r3);
    })(this, r2) : (function(t3, e3, r3, a3) {
      var n3 = true, o2 = false;
      return null === r3 ? o2 = new TypeError("May not write null values to stream") : C.isBuffer(r3) || "string" == typeof r3 || void 0 === r3 || e3.objectMode || (o2 = new TypeError("Invalid non-string/buffer chunk")), o2 && (t3.emit("error", o2), xt(a3, o2), n3 = false), n3;
    })(this, a2, t2, r2) && (a2.pendingcb++, n2 = (function(t3, e3, r3, a3, n3) {
      r3 = (function(t4, e4, r4) {
        t4.objectMode || false === t4.decodeStrings || "string" != typeof e4 || (e4 = C.from(e4, r4));
        return e4;
      })(e3, r3, a3), C.isBuffer(r3) && (a3 = "buffer");
      var o2 = e3.objectMode ? 1 : r3.length;
      e3.length += o2;
      var c2 = e3.length < e3.highWaterMark;
      c2 || (e3.needDrain = true);
      if (e3.writing || e3.corked) {
        var i2 = e3.lastBufferedRequest;
        e3.lastBufferedRequest = new nr(r3, a3, n3), i2 ? i2.next = e3.lastBufferedRequest : e3.bufferedRequest = e3.lastBufferedRequest, e3.bufferedRequestCount += 1;
      } else ir(t3, e3, false, o2, r3, a3, n3);
      return c2;
    })(this, a2, t2, e2, r2)), n2;
  }, cr.prototype.cork = function() {
    this._writableState.corked++;
  }, cr.prototype.uncork = function() {
    var t2 = this._writableState;
    t2.corked && (t2.corked--, t2.writing || t2.corked || t2.finished || t2.bufferProcessing || !t2.bufferedRequest || lr(this, t2));
  }, cr.prototype.setDefaultEncoding = function(t2) {
    if ("string" == typeof t2 && (t2 = t2.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t2 + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t2);
    return this._writableState.defaultEncoding = t2, this;
  }, cr.prototype._write = function(t2, e2, r2) {
    r2(new Error("not implemented"));
  }, cr.prototype._writev = null, cr.prototype.end = function(t2, e2, r2) {
    var a2 = this._writableState;
    "function" == typeof t2 ? (r2 = t2, t2 = null, e2 = null) : "function" == typeof e2 && (r2 = e2, e2 = null), null != t2 && this.write(t2, e2), a2.corked && (a2.corked = 1, this.uncork()), a2.ending || a2.finished || (function(t3, e3, r3) {
      e3.ending = true, hr(t3, e3), r3 && (e3.finished ? xt(r3) : t3.once("finish", r3));
      e3.ended = true, t3.writable = false;
    })(this, a2, r2);
  }, Jt(vr, We);
  for (pr = Object.keys(cr.prototype), br = 0; br < pr.length; br++) {
    gr = pr[br];
    vr.prototype[gr] || (vr.prototype[gr] = cr.prototype[gr]);
  }
  var gr;
  var pr;
  var br;
  function vr(t2) {
    if (!(this instanceof vr)) return new vr(t2);
    We.call(this, t2), cr.call(this, t2), t2 && false === t2.readable && (this.readable = false), t2 && false === t2.writable && (this.writable = false), this.allowHalfOpen = true, t2 && false === t2.allowHalfOpen && (this.allowHalfOpen = false), this.once("end", mr);
  }
  function mr() {
    this.allowHalfOpen || this._writableState.ended || xt(yr, this);
  }
  function yr(t2) {
    t2.end();
  }
  function Lr(t2) {
    this.afterTransform = function(e2, r2) {
      return (function(t3, e3, r3) {
        var a2 = t3._transformState;
        a2.transforming = false;
        var n2 = a2.writecb;
        if (!n2) return t3.emit("error", new Error("no writecb in Transform class"));
        a2.writechunk = null, a2.writecb = null, null != r3 && t3.push(r3);
        n2(e3);
        var o2 = t3._readableState;
        o2.reading = false, (o2.needReadable || o2.length < o2.highWaterMark) && t3._read(o2.highWaterMark);
      })(t2, e2, r2);
    }, this.needTransform = false, this.transforming = false, this.writecb = null, this.writechunk = null, this.writeencoding = null;
  }
  function wr(t2) {
    if (!(this instanceof wr)) return new wr(t2);
    vr.call(this, t2), this._transformState = new Lr(this);
    var e2 = this;
    this._readableState.needReadable = true, this._readableState.sync = false, t2 && ("function" == typeof t2.transform && (this._transform = t2.transform), "function" == typeof t2.flush && (this._flush = t2.flush)), this.once("prefinish", (function() {
      "function" == typeof this._flush ? this._flush((function(t3) {
        _r(e2, t3);
      })) : _r(e2);
    }));
  }
  function _r(t2, e2) {
    if (e2) return t2.emit("error", e2);
    var r2 = t2._writableState, a2 = t2._transformState;
    if (r2.length) throw new Error("Calling transform done when ws.length != 0");
    if (a2.transforming) throw new Error("Calling transform done when still transforming");
    return t2.push(null);
  }
  function kr(t2) {
    if (!(this instanceof kr)) return new kr(t2);
    wr.call(this, t2);
  }
  function Mr() {
    Ut.call(this);
  }
  Jt(wr, vr), wr.prototype.push = function(t2, e2) {
    return this._transformState.needTransform = false, vr.prototype.push.call(this, t2, e2);
  }, wr.prototype._transform = function(t2, e2, r2) {
    throw new Error("Not implemented");
  }, wr.prototype._write = function(t2, e2, r2) {
    var a2 = this._transformState;
    if (a2.writecb = r2, a2.writechunk = t2, a2.writeencoding = e2, !a2.transforming) {
      var n2 = this._readableState;
      (a2.needTransform || n2.needReadable || n2.length < n2.highWaterMark) && this._read(n2.highWaterMark);
    }
  }, wr.prototype._read = function(t2) {
    var e2 = this._transformState;
    null !== e2.writechunk && e2.writecb && !e2.transforming ? (e2.transforming = true, this._transform(e2.writechunk, e2.writeencoding, e2.afterTransform)) : e2.needTransform = true;
  }, Jt(kr, wr), kr.prototype._transform = function(t2, e2, r2) {
    r2(null, t2);
  }, Jt(Mr, Ut), Mr.Readable = We, Mr.Writable = cr, Mr.Duplex = vr, Mr.Transform = wr, Mr.PassThrough = kr, Mr.Stream = Mr, Mr.prototype.pipe = function(t2, e2) {
    var r2 = this;
    function a2(e3) {
      t2.writable && false === t2.write(e3) && r2.pause && r2.pause();
    }
    function n2() {
      r2.readable && r2.resume && r2.resume();
    }
    r2.on("data", a2), t2.on("drain", n2), t2._isStdio || e2 && false === e2.end || (r2.on("end", c2), r2.on("close", i2));
    var o2 = false;
    function c2() {
      o2 || (o2 = true, t2.end());
    }
    function i2() {
      o2 || (o2 = true, "function" == typeof t2.destroy && t2.destroy());
    }
    function s2(t3) {
      if (l2(), 0 === Ut.listenerCount(this, "error")) throw t3;
    }
    function l2() {
      r2.removeListener("data", a2), t2.removeListener("drain", n2), r2.removeListener("end", c2), r2.removeListener("close", i2), r2.removeListener("error", s2), t2.removeListener("error", s2), r2.removeListener("end", l2), r2.removeListener("close", l2), t2.removeListener("close", l2);
    }
    return r2.on("error", s2), t2.on("error", s2), r2.on("end", l2), r2.on("close", l2), t2.on("close", l2), t2.emit("pipe", r2), t2;
  };
  var xr;
  var Sr;
  var Ir;
  var Cr = c(Object.freeze({ __proto__: null, default: Mr, Readable: We, Writable: cr, Duplex: vr, Transform: wr, PassThrough: kr, Stream: Mr }));
  var Ar = { exports: {} };
  function Pr() {
    if (xr) return Ar.exports;
    return xr = 1, void 0 === Dt || !Dt.version || 0 === Dt.version.indexOf("v0.") || 0 === Dt.version.indexOf("v1.") && 0 !== Dt.version.indexOf("v1.8.") ? Ar.exports = { nextTick: function(t2, e2, r2, a2) {
      if ("function" != typeof t2) throw new TypeError('"callback" argument must be a function');
      var n2, o2, c2 = arguments.length;
      switch (c2) {
        case 0:
        case 1:
          return xt(t2);
        case 2:
          return xt((function() {
            t2.call(null, e2);
          }));
        case 3:
          return xt((function() {
            t2.call(null, e2, r2);
          }));
        case 4:
          return xt((function() {
            t2.call(null, e2, r2, a2);
          }));
        default:
          for (n2 = new Array(c2 - 1), o2 = 0; o2 < n2.length; ) n2[o2++] = arguments[o2];
          return xt((function() {
            t2.apply(null, n2);
          }));
      }
    } } : Ar.exports = Dt, Ar.exports;
  }
  var Er;
  var Rr = c(Xt);
  var Tr = { exports: {} };
  function Or() {
    return Er ? Tr.exports : (Er = 1, Tr.exports = Cr);
  }
  var jr;
  var zr = { exports: {} };
  var Br = c(ht);
  function Dr() {
    return jr || (jr = 1, (function(t2, e2) {
      var r2 = Br, a2 = r2.Buffer;
      function n2(t3, e3) {
        for (var r3 in t3) e3[r3] = t3[r3];
      }
      function o2(t3, e3, r3) {
        return a2(t3, e3, r3);
      }
      a2.from && a2.alloc && a2.allocUnsafe && a2.allocUnsafeSlow ? t2.exports = r2 : (n2(r2, e2), e2.Buffer = o2), n2(a2, o2), o2.from = function(t3, e3, r3) {
        if ("number" == typeof t3) throw new TypeError("Argument must not be a number");
        return a2(t3, e3, r3);
      }, o2.alloc = function(t3, e3, r3) {
        if ("number" != typeof t3) throw new TypeError("Argument must be a number");
        var n3 = a2(t3);
        return void 0 !== e3 ? "string" == typeof r3 ? n3.fill(e3, r3) : n3.fill(e3) : n3.fill(0), n3;
      }, o2.allocUnsafe = function(t3) {
        if ("number" != typeof t3) throw new TypeError("Argument must be a number");
        return a2(t3);
      }, o2.allocUnsafeSlow = function(t3) {
        if ("number" != typeof t3) throw new TypeError("Argument must be a number");
        return r2.SlowBuffer(t3);
      };
    })(zr, zr.exports)), zr.exports;
  }
  var Fr;
  var Nr = {};
  function Ur() {
    if (Fr) return Nr;
    function t2(t3) {
      return Object.prototype.toString.call(t3);
    }
    return Fr = 1, Nr.isArray = function(e2) {
      return Array.isArray ? Array.isArray(e2) : "[object Array]" === t2(e2);
    }, Nr.isBoolean = function(t3) {
      return "boolean" == typeof t3;
    }, Nr.isNull = function(t3) {
      return null === t3;
    }, Nr.isNullOrUndefined = function(t3) {
      return null == t3;
    }, Nr.isNumber = function(t3) {
      return "number" == typeof t3;
    }, Nr.isString = function(t3) {
      return "string" == typeof t3;
    }, Nr.isSymbol = function(t3) {
      return "symbol" == typeof t3;
    }, Nr.isUndefined = function(t3) {
      return void 0 === t3;
    }, Nr.isRegExp = function(e2) {
      return "[object RegExp]" === t2(e2);
    }, Nr.isObject = function(t3) {
      return "object" == typeof t3 && null !== t3;
    }, Nr.isDate = function(e2) {
      return "[object Date]" === t2(e2);
    }, Nr.isError = function(e2) {
      return "[object Error]" === t2(e2) || e2 instanceof Error;
    }, Nr.isFunction = function(t3) {
      return "function" == typeof t3;
    }, Nr.isPrimitive = function(t3) {
      return null === t3 || "boolean" == typeof t3 || "number" == typeof t3 || "string" == typeof t3 || "symbol" == typeof t3 || void 0 === t3;
    }, Nr.isBuffer = Br.Buffer.isBuffer, Nr;
  }
  var Gr;
  var qr;
  var Wr = { exports: {} };
  var Hr = c(je);
  var Zr = { exports: {} };
  function Yr() {
    return qr || (qr = 1, (function(t2) {
      try {
        var e2 = Hr;
        if ("function" != typeof e2.inherits) throw "";
        t2.exports = e2.inherits;
      } catch (e3) {
        t2.exports = (Gr || (Gr = 1, "function" == typeof Object.create ? Zr.exports = function(t3, e4) {
          e4 && (t3.super_ = e4, t3.prototype = Object.create(e4.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }));
        } : Zr.exports = function(t3, e4) {
          if (e4) {
            t3.super_ = e4;
            var r2 = function() {
            };
            r2.prototype = e4.prototype, t3.prototype = new r2(), t3.prototype.constructor = t3;
          }
        }), Zr.exports);
      }
    })(Wr)), Wr.exports;
  }
  var Vr;
  var Qr;
  var $r;
  var Kr;
  var Xr;
  var Jr;
  var ta;
  var ea;
  var ra;
  var aa = { exports: {} };
  function na() {
    return Vr || (Vr = 1, (function(t2) {
      var e2 = Dr().Buffer, r2 = Hr;
      t2.exports = (function() {
        function t3() {
          !(function(t4, e3) {
            if (!(t4 instanceof e3)) throw new TypeError("Cannot call a class as a function");
          })(this, t3), this.head = null, this.tail = null, this.length = 0;
        }
        return t3.prototype.push = function(t4) {
          var e3 = { data: t4, next: null };
          this.length > 0 ? this.tail.next = e3 : this.head = e3, this.tail = e3, ++this.length;
        }, t3.prototype.unshift = function(t4) {
          var e3 = { data: t4, next: this.head };
          0 === this.length && (this.tail = e3), this.head = e3, ++this.length;
        }, t3.prototype.shift = function() {
          if (0 !== this.length) {
            var t4 = this.head.data;
            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t4;
          }
        }, t3.prototype.clear = function() {
          this.head = this.tail = null, this.length = 0;
        }, t3.prototype.join = function(t4) {
          if (0 === this.length) return "";
          for (var e3 = this.head, r3 = "" + e3.data; e3 = e3.next; ) r3 += t4 + e3.data;
          return r3;
        }, t3.prototype.concat = function(t4) {
          if (0 === this.length) return e2.alloc(0);
          if (1 === this.length) return this.head.data;
          for (var r3, a2, n2, o2 = e2.allocUnsafe(t4 >>> 0), c2 = this.head, i2 = 0; c2; ) r3 = c2.data, a2 = o2, n2 = i2, r3.copy(a2, n2), i2 += c2.data.length, c2 = c2.next;
          return o2;
        }, t3;
      })(), r2 && r2.inspect && r2.inspect.custom && (t2.exports.prototype[r2.inspect.custom] = function() {
        var t3 = r2.inspect({ length: this.length });
        return this.constructor.name + " " + t3;
      });
    })(aa)), aa.exports;
  }
  function oa() {
    if ($r) return Qr;
    $r = 1;
    var t2 = Pr();
    function e2(t3, e3) {
      t3.emit("error", e3);
    }
    return Qr = { destroy: function(r2, a2) {
      var n2 = this, o2 = this._readableState && this._readableState.destroyed, c2 = this._writableState && this._writableState.destroyed;
      return o2 || c2 ? (a2 ? a2(r2) : !r2 || this._writableState && this._writableState.errorEmitted || t2.nextTick(e2, this, r2), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(r2 || null, (function(r3) {
        !a2 && r3 ? (t2.nextTick(e2, n2, r3), n2._writableState && (n2._writableState.errorEmitted = true)) : a2 && a2(r3);
      })), this);
    }, undestroy: function() {
      this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
    } }, Qr;
  }
  function ca() {
    if (ta) return Jr;
    ta = 1;
    var t2 = Pr();
    function e2(t3) {
      var e3 = this;
      this.next = null, this.entry = null, this.finish = function() {
        !(function(t4, e4, r3) {
          var a3 = t4.entry;
          t4.entry = null;
          for (; a3; ) {
            var n3 = a3.callback;
            e4.pendingcb--, n3(r3), a3 = a3.next;
          }
          e4.corkedRequestsFree ? e4.corkedRequestsFree.next = t4 : e4.corkedRequestsFree = t4;
        })(e3, t3);
      };
    }
    Jr = p2;
    var r2, a2 = t2.nextTick;
    p2.WritableState = d2;
    var n2 = Object.create(Ur());
    n2.inherits = Yr();
    var c2 = { deprecate: Xr ? Kr : (Xr = 1, Kr = Hr.deprecate) }, i2 = Or(), s2 = Dr().Buffer, l2 = o.Uint8Array || function() {
    };
    var u2, f2 = oa();
    function h2() {
    }
    function d2(n3, o2) {
      r2 = r2 || ia(), n3 = n3 || {};
      var c3 = o2 instanceof r2;
      this.objectMode = !!n3.objectMode, c3 && (this.objectMode = this.objectMode || !!n3.writableObjectMode);
      var i3 = n3.highWaterMark, s3 = n3.writableHighWaterMark, l3 = this.objectMode ? 16 : 16384;
      this.highWaterMark = i3 || 0 === i3 ? i3 : c3 && (s3 || 0 === s3) ? s3 : l3, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      var u3 = false === n3.decodeStrings;
      this.decodeStrings = !u3, this.defaultEncoding = n3.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(e3) {
        !(function(e4, r3) {
          var n4 = e4._writableState, o3 = n4.sync, c4 = n4.writecb;
          if ((function(t3) {
            t3.writing = false, t3.writecb = null, t3.length -= t3.writelen, t3.writelen = 0;
          })(n4), r3) !(function(e5, r4, a3, n5, o4) {
            --r4.pendingcb, a3 ? (t2.nextTick(o4, n5), t2.nextTick(L2, e5, r4), e5._writableState.errorEmitted = true, e5.emit("error", n5)) : (o4(n5), e5._writableState.errorEmitted = true, e5.emit("error", n5), L2(e5, r4));
          })(e4, n4, o3, r3, c4);
          else {
            var i4 = m2(n4);
            i4 || n4.corked || n4.bufferProcessing || !n4.bufferedRequest || v2(e4, n4), o3 ? a2(g2, e4, n4, i4, c4) : g2(e4, n4, i4, c4);
          }
        })(o2, e3);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e2(this);
    }
    function p2(t3) {
      if (r2 = r2 || ia(), !(u2.call(p2, this) || this instanceof r2)) return new p2(t3);
      this._writableState = new d2(t3, this), this.writable = true, t3 && ("function" == typeof t3.write && (this._write = t3.write), "function" == typeof t3.writev && (this._writev = t3.writev), "function" == typeof t3.destroy && (this._destroy = t3.destroy), "function" == typeof t3.final && (this._final = t3.final)), i2.call(this);
    }
    function b2(t3, e3, r3, a3, n3, o2, c3) {
      e3.writelen = a3, e3.writecb = c3, e3.writing = true, e3.sync = true, r3 ? t3._writev(n3, e3.onwrite) : t3._write(n3, o2, e3.onwrite), e3.sync = false;
    }
    function g2(t3, e3, r3, a3) {
      r3 || (function(t4, e4) {
        0 === e4.length && e4.needDrain && (e4.needDrain = false, t4.emit("drain"));
      })(t3, e3), e3.pendingcb--, a3(), L2(t3, e3);
    }
    function v2(t3, r3) {
      r3.bufferProcessing = true;
      var a3 = r3.bufferedRequest;
      if (t3._writev && a3 && a3.next) {
        var n3 = r3.bufferedRequestCount, o2 = new Array(n3), c3 = r3.corkedRequestsFree;
        c3.entry = a3;
        for (var i3 = 0, s3 = true; a3; ) o2[i3] = a3, a3.isBuf || (s3 = false), a3 = a3.next, i3 += 1;
        o2.allBuffers = s3, b2(t3, r3, true, r3.length, o2, "", c3.finish), r3.pendingcb++, r3.lastBufferedRequest = null, c3.next ? (r3.corkedRequestsFree = c3.next, c3.next = null) : r3.corkedRequestsFree = new e2(r3), r3.bufferedRequestCount = 0;
      } else {
        for (; a3; ) {
          var l3 = a3.chunk, u3 = a3.encoding, f3 = a3.callback;
          if (b2(t3, r3, false, r3.objectMode ? 1 : l3.length, l3, u3, f3), a3 = a3.next, r3.bufferedRequestCount--, r3.writing) break;
        }
        null === a3 && (r3.lastBufferedRequest = null);
      }
      r3.bufferedRequest = a3, r3.bufferProcessing = false;
    }
    function m2(t3) {
      return t3.ending && 0 === t3.length && null === t3.bufferedRequest && !t3.finished && !t3.writing;
    }
    function y2(t3, e3) {
      t3._final((function(r3) {
        e3.pendingcb--, r3 && t3.emit("error", r3), e3.prefinished = true, t3.emit("prefinish"), L2(t3, e3);
      }));
    }
    function L2(e3, r3) {
      var a3 = m2(r3);
      return a3 && (!(function(e4, r4) {
        r4.prefinished || r4.finalCalled || ("function" == typeof e4._final ? (r4.pendingcb++, r4.finalCalled = true, t2.nextTick(y2, e4, r4)) : (r4.prefinished = true, e4.emit("prefinish")));
      })(e3, r3), 0 === r3.pendingcb && (r3.finished = true, e3.emit("finish"))), a3;
    }
    return n2.inherits(p2, i2), d2.prototype.getBuffer = function() {
      for (var t3 = this.bufferedRequest, e3 = []; t3; ) e3.push(t3), t3 = t3.next;
      return e3;
    }, (function() {
      try {
        Object.defineProperty(d2.prototype, "buffer", { get: c2.deprecate((function() {
          return this.getBuffer();
        }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
      } catch (t3) {
      }
    })(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (u2 = Function.prototype[Symbol.hasInstance], Object.defineProperty(p2, Symbol.hasInstance, { value: function(t3) {
      return !!u2.call(this, t3) || this === p2 && (t3 && t3._writableState instanceof d2);
    } })) : u2 = function(t3) {
      return t3 instanceof this;
    }, p2.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    }, p2.prototype.write = function(e3, r3, a3) {
      var n3, o2 = this._writableState, c3 = false, i3 = !o2.objectMode && (n3 = e3, s2.isBuffer(n3) || n3 instanceof l2);
      return i3 && !s2.isBuffer(e3) && (e3 = (function(t3) {
        return s2.from(t3);
      })(e3)), "function" == typeof r3 && (a3 = r3, r3 = null), i3 ? r3 = "buffer" : r3 || (r3 = o2.defaultEncoding), "function" != typeof a3 && (a3 = h2), o2.ended ? (function(e4, r4) {
        var a4 = new Error("write after end");
        e4.emit("error", a4), t2.nextTick(r4, a4);
      })(this, a3) : (i3 || (function(e4, r4, a4, n4) {
        var o3 = true, c4 = false;
        return null === a4 ? c4 = new TypeError("May not write null values to stream") : "string" == typeof a4 || void 0 === a4 || r4.objectMode || (c4 = new TypeError("Invalid non-string/buffer chunk")), c4 && (e4.emit("error", c4), t2.nextTick(n4, c4), o3 = false), o3;
      })(this, o2, e3, a3)) && (o2.pendingcb++, c3 = (function(t3, e4, r4, a4, n4, o3) {
        if (!r4) {
          var c4 = (function(t4, e5, r5) {
            t4.objectMode || false === t4.decodeStrings || "string" != typeof e5 || (e5 = s2.from(e5, r5));
            return e5;
          })(e4, a4, n4);
          a4 !== c4 && (r4 = true, n4 = "buffer", a4 = c4);
        }
        var i4 = e4.objectMode ? 1 : a4.length;
        e4.length += i4;
        var l3 = e4.length < e4.highWaterMark;
        l3 || (e4.needDrain = true);
        if (e4.writing || e4.corked) {
          var u3 = e4.lastBufferedRequest;
          e4.lastBufferedRequest = { chunk: a4, encoding: n4, isBuf: r4, callback: o3, next: null }, u3 ? u3.next = e4.lastBufferedRequest : e4.bufferedRequest = e4.lastBufferedRequest, e4.bufferedRequestCount += 1;
        } else b2(t3, e4, false, i4, a4, n4, o3);
        return l3;
      })(this, o2, i3, e3, r3, a3)), c3;
    }, p2.prototype.cork = function() {
      this._writableState.corked++;
    }, p2.prototype.uncork = function() {
      var t3 = this._writableState;
      t3.corked && (t3.corked--, t3.writing || t3.corked || t3.finished || t3.bufferProcessing || !t3.bufferedRequest || v2(this, t3));
    }, p2.prototype.setDefaultEncoding = function(t3) {
      if ("string" == typeof t3 && (t3 = t3.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t3 + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t3);
      return this._writableState.defaultEncoding = t3, this;
    }, Object.defineProperty(p2.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
      return this._writableState.highWaterMark;
    } }), p2.prototype._write = function(t3, e3, r3) {
      r3(new Error("_write() is not implemented"));
    }, p2.prototype._writev = null, p2.prototype.end = function(e3, r3, a3) {
      var n3 = this._writableState;
      "function" == typeof e3 ? (a3 = e3, e3 = null, r3 = null) : "function" == typeof r3 && (a3 = r3, r3 = null), null != e3 && this.write(e3, r3), n3.corked && (n3.corked = 1, this.uncork()), n3.ending || n3.finished || (function(e4, r4, a4) {
        r4.ending = true, L2(e4, r4), a4 && (r4.finished ? t2.nextTick(a4) : e4.once("finish", a4));
        r4.ended = true, e4.writable = false;
      })(this, n3, a3);
    }, Object.defineProperty(p2.prototype, "destroyed", { get: function() {
      return void 0 !== this._writableState && this._writableState.destroyed;
    }, set: function(t3) {
      this._writableState && (this._writableState.destroyed = t3);
    } }), p2.prototype.destroy = f2.destroy, p2.prototype._undestroy = f2.undestroy, p2.prototype._destroy = function(t3, e3) {
      this.end(), e3(t3);
    }, Jr;
  }
  function ia() {
    if (ra) return ea;
    ra = 1;
    var t2 = Pr(), e2 = Object.keys || function(t3) {
      var e3 = [];
      for (var r3 in t3) e3.push(r3);
      return e3;
    };
    ea = s2;
    var r2 = Object.create(Ur());
    r2.inherits = Yr();
    var a2 = ma(), n2 = ca();
    r2.inherits(s2, a2);
    for (var o2 = e2(n2.prototype), c2 = 0; c2 < o2.length; c2++) {
      var i2 = o2[c2];
      s2.prototype[i2] || (s2.prototype[i2] = n2.prototype[i2]);
    }
    function s2(t3) {
      if (!(this instanceof s2)) return new s2(t3);
      a2.call(this, t3), n2.call(this, t3), t3 && false === t3.readable && (this.readable = false), t3 && false === t3.writable && (this.writable = false), this.allowHalfOpen = true, t3 && false === t3.allowHalfOpen && (this.allowHalfOpen = false), this.once("end", l2);
    }
    function l2() {
      this.allowHalfOpen || this._writableState.ended || t2.nextTick(u2, this);
    }
    function u2(t3) {
      t3.end();
    }
    return Object.defineProperty(s2.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
      return this._writableState.highWaterMark;
    } }), Object.defineProperty(s2.prototype, "destroyed", { get: function() {
      return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
    }, set: function(t3) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t3, this._writableState.destroyed = t3);
    } }), s2.prototype._destroy = function(e3, r3) {
      this.push(null), this.end(), t2.nextTick(r3, e3);
    }, ea;
  }
  var sa;
  var la;
  var ua;
  var fa;
  var ha;
  var da;
  var pa;
  var ba;
  var ga = {};
  function va() {
    if (sa) return ga;
    sa = 1;
    var t2 = Dr().Buffer, e2 = t2.isEncoding || function(t3) {
      switch ((t3 = "" + t3) && t3.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function r2(r3) {
      var a3;
      switch (this.encoding = (function(r4) {
        var a4 = (function(t3) {
          if (!t3) return "utf8";
          for (var e3; ; ) switch (t3) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return t3;
            default:
              if (e3) return;
              t3 = ("" + t3).toLowerCase(), e3 = true;
          }
        })(r4);
        if ("string" != typeof a4 && (t2.isEncoding === e2 || !e2(r4))) throw new Error("Unknown encoding: " + r4);
        return a4 || r4;
      })(r3), this.encoding) {
        case "utf16le":
          this.text = o2, this.end = c2, a3 = 4;
          break;
        case "utf8":
          this.fillLast = n2, a3 = 4;
          break;
        case "base64":
          this.text = i2, this.end = s2, a3 = 3;
          break;
        default:
          return this.write = l2, void (this.end = u2);
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t2.allocUnsafe(a3);
    }
    function a2(t3) {
      return t3 <= 127 ? 0 : t3 >> 5 == 6 ? 2 : t3 >> 4 == 14 ? 3 : t3 >> 3 == 30 ? 4 : t3 >> 6 == 2 ? -1 : -2;
    }
    function n2(t3) {
      var e3 = this.lastTotal - this.lastNeed, r3 = (function(t4, e4, r4) {
        if (128 != (192 & e4[0])) return t4.lastNeed = 0, "\uFFFD";
        if (t4.lastNeed > 1 && e4.length > 1) {
          if (128 != (192 & e4[1])) return t4.lastNeed = 1, "\uFFFD";
          if (t4.lastNeed > 2 && e4.length > 2 && 128 != (192 & e4[2])) return t4.lastNeed = 2, "\uFFFD";
        }
      })(this, t3);
      return void 0 !== r3 ? r3 : this.lastNeed <= t3.length ? (t3.copy(this.lastChar, e3, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t3.copy(this.lastChar, e3, 0, t3.length), void (this.lastNeed -= t3.length));
    }
    function o2(t3, e3) {
      if ((t3.length - e3) % 2 == 0) {
        var r3 = t3.toString("utf16le", e3);
        if (r3) {
          var a3 = r3.charCodeAt(r3.length - 1);
          if (a3 >= 55296 && a3 <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t3[t3.length - 2], this.lastChar[1] = t3[t3.length - 1], r3.slice(0, -1);
        }
        return r3;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t3[t3.length - 1], t3.toString("utf16le", e3, t3.length - 1);
    }
    function c2(t3) {
      var e3 = t3 && t3.length ? this.write(t3) : "";
      if (this.lastNeed) {
        var r3 = this.lastTotal - this.lastNeed;
        return e3 + this.lastChar.toString("utf16le", 0, r3);
      }
      return e3;
    }
    function i2(t3, e3) {
      var r3 = (t3.length - e3) % 3;
      return 0 === r3 ? t3.toString("base64", e3) : (this.lastNeed = 3 - r3, this.lastTotal = 3, 1 === r3 ? this.lastChar[0] = t3[t3.length - 1] : (this.lastChar[0] = t3[t3.length - 2], this.lastChar[1] = t3[t3.length - 1]), t3.toString("base64", e3, t3.length - r3));
    }
    function s2(t3) {
      var e3 = t3 && t3.length ? this.write(t3) : "";
      return this.lastNeed ? e3 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e3;
    }
    function l2(t3) {
      return t3.toString(this.encoding);
    }
    function u2(t3) {
      return t3 && t3.length ? this.write(t3) : "";
    }
    return ga.StringDecoder = r2, r2.prototype.write = function(t3) {
      if (0 === t3.length) return "";
      var e3, r3;
      if (this.lastNeed) {
        if (void 0 === (e3 = this.fillLast(t3))) return "";
        r3 = this.lastNeed, this.lastNeed = 0;
      } else r3 = 0;
      return r3 < t3.length ? e3 ? e3 + this.text(t3, r3) : this.text(t3, r3) : e3 || "";
    }, r2.prototype.end = function(t3) {
      var e3 = t3 && t3.length ? this.write(t3) : "";
      return this.lastNeed ? e3 + "\uFFFD" : e3;
    }, r2.prototype.text = function(t3, e3) {
      var r3 = (function(t4, e4, r4) {
        var n4 = e4.length - 1;
        if (n4 < r4) return 0;
        var o3 = a2(e4[n4]);
        if (o3 >= 0) return o3 > 0 && (t4.lastNeed = o3 - 1), o3;
        if (--n4 < r4 || -2 === o3) return 0;
        if ((o3 = a2(e4[n4])) >= 0) return o3 > 0 && (t4.lastNeed = o3 - 2), o3;
        if (--n4 < r4 || -2 === o3) return 0;
        if ((o3 = a2(e4[n4])) >= 0) return o3 > 0 && (2 === o3 ? o3 = 0 : t4.lastNeed = o3 - 3), o3;
        return 0;
      })(this, t3, e3);
      if (!this.lastNeed) return t3.toString("utf8", e3);
      this.lastTotal = r3;
      var n3 = t3.length - (r3 - this.lastNeed);
      return t3.copy(this.lastChar, 0, n3), t3.toString("utf8", e3, n3);
    }, r2.prototype.fillLast = function(t3) {
      if (this.lastNeed <= t3.length) return t3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t3.length), this.lastNeed -= t3.length;
    }, ga;
  }
  function ma() {
    if (ua) return la;
    ua = 1;
    var t2 = Pr();
    la = g2;
    var e2, r2 = (function() {
      if (Ir) return Sr;
      Ir = 1;
      var t3 = {}.toString;
      return Sr = Array.isArray || function(e3) {
        return "[object Array]" == t3.call(e3);
      };
    })();
    g2.ReadableState = b2, Rr.EventEmitter;
    var a2 = function(t3, e3) {
      return t3.listeners(e3).length;
    }, n2 = Or(), c2 = Dr().Buffer, i2 = o.Uint8Array || function() {
    };
    var s2 = Object.create(Ur());
    s2.inherits = Yr();
    var l2 = Hr, u2 = void 0;
    u2 = l2 && l2.debuglog ? l2.debuglog("stream") : function() {
    };
    var f2, h2 = na(), d2 = oa();
    s2.inherits(g2, n2);
    var p2 = ["error", "close", "destroy", "pause", "resume"];
    function b2(t3, r3) {
      t3 = t3 || {};
      var a3 = r3 instanceof (e2 = e2 || ia());
      this.objectMode = !!t3.objectMode, a3 && (this.objectMode = this.objectMode || !!t3.readableObjectMode);
      var n3 = t3.highWaterMark, o2 = t3.readableHighWaterMark, c3 = this.objectMode ? 16 : 16384;
      this.highWaterMark = n3 || 0 === n3 ? n3 : a3 && (o2 || 0 === o2) ? o2 : c3, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new h2(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.destroyed = false, this.defaultEncoding = t3.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t3.encoding && (f2 || (f2 = va().StringDecoder), this.decoder = new f2(t3.encoding), this.encoding = t3.encoding);
    }
    function g2(t3) {
      if (e2 = e2 || ia(), !(this instanceof g2)) return new g2(t3);
      this._readableState = new b2(t3, this), this.readable = true, t3 && ("function" == typeof t3.read && (this._read = t3.read), "function" == typeof t3.destroy && (this._destroy = t3.destroy)), n2.call(this);
    }
    function v2(t3, e3, r3, a3, n3) {
      var o2, s3 = t3._readableState;
      null === e3 ? (s3.reading = false, (function(t4, e4) {
        if (e4.ended) return;
        if (e4.decoder) {
          var r4 = e4.decoder.end();
          r4 && r4.length && (e4.buffer.push(r4), e4.length += e4.objectMode ? 1 : r4.length);
        }
        e4.ended = true, w2(t4);
      })(t3, s3)) : (n3 || (o2 = (function(t4, e4) {
        var r4;
        a4 = e4, c2.isBuffer(a4) || a4 instanceof i2 || "string" == typeof e4 || void 0 === e4 || t4.objectMode || (r4 = new TypeError("Invalid non-string/buffer chunk"));
        var a4;
        return r4;
      })(s3, e3)), o2 ? t3.emit("error", o2) : s3.objectMode || e3 && e3.length > 0 ? ("string" == typeof e3 || s3.objectMode || Object.getPrototypeOf(e3) === c2.prototype || (e3 = (function(t4) {
        return c2.from(t4);
      })(e3)), a3 ? s3.endEmitted ? t3.emit("error", new Error("stream.unshift() after end event")) : m2(t3, s3, e3, true) : s3.ended ? t3.emit("error", new Error("stream.push() after EOF")) : (s3.reading = false, s3.decoder && !r3 ? (e3 = s3.decoder.write(e3), s3.objectMode || 0 !== e3.length ? m2(t3, s3, e3, false) : k2(t3, s3)) : m2(t3, s3, e3, false))) : a3 || (s3.reading = false));
      return (function(t4) {
        return !t4.ended && (t4.needReadable || t4.length < t4.highWaterMark || 0 === t4.length);
      })(s3);
    }
    function m2(t3, e3, r3, a3) {
      e3.flowing && 0 === e3.length && !e3.sync ? (t3.emit("data", r3), t3.read(0)) : (e3.length += e3.objectMode ? 1 : r3.length, a3 ? e3.buffer.unshift(r3) : e3.buffer.push(r3), e3.needReadable && w2(t3)), k2(t3, e3);
    }
    Object.defineProperty(g2.prototype, "destroyed", { get: function() {
      return void 0 !== this._readableState && this._readableState.destroyed;
    }, set: function(t3) {
      this._readableState && (this._readableState.destroyed = t3);
    } }), g2.prototype.destroy = d2.destroy, g2.prototype._undestroy = d2.undestroy, g2.prototype._destroy = function(t3, e3) {
      this.push(null), e3(t3);
    }, g2.prototype.push = function(t3, e3) {
      var r3, a3 = this._readableState;
      return a3.objectMode ? r3 = true : "string" == typeof t3 && ((e3 = e3 || a3.defaultEncoding) !== a3.encoding && (t3 = c2.from(t3, e3), e3 = ""), r3 = true), v2(this, t3, e3, false, r3);
    }, g2.prototype.unshift = function(t3) {
      return v2(this, t3, null, true, false);
    }, g2.prototype.isPaused = function() {
      return false === this._readableState.flowing;
    }, g2.prototype.setEncoding = function(t3) {
      return f2 || (f2 = va().StringDecoder), this._readableState.decoder = new f2(t3), this._readableState.encoding = t3, this;
    };
    var y2 = 8388608;
    function L2(t3, e3) {
      return t3 <= 0 || 0 === e3.length && e3.ended ? 0 : e3.objectMode ? 1 : t3 != t3 ? e3.flowing && e3.length ? e3.buffer.head.data.length : e3.length : (t3 > e3.highWaterMark && (e3.highWaterMark = (function(t4) {
        return t4 >= y2 ? t4 = y2 : (t4--, t4 |= t4 >>> 1, t4 |= t4 >>> 2, t4 |= t4 >>> 4, t4 |= t4 >>> 8, t4 |= t4 >>> 16, t4++), t4;
      })(t3)), t3 <= e3.length ? t3 : e3.ended ? e3.length : (e3.needReadable = true, 0));
    }
    function w2(e3) {
      var r3 = e3._readableState;
      r3.needReadable = false, r3.emittedReadable || (u2("emitReadable", r3.flowing), r3.emittedReadable = true, r3.sync ? t2.nextTick(_2, e3) : _2(e3));
    }
    function _2(t3) {
      u2("emit readable"), t3.emit("readable"), I2(t3);
    }
    function k2(e3, r3) {
      r3.readingMore || (r3.readingMore = true, t2.nextTick(M2, e3, r3));
    }
    function M2(t3, e3) {
      for (var r3 = e3.length; !e3.reading && !e3.flowing && !e3.ended && e3.length < e3.highWaterMark && (u2("maybeReadMore read 0"), t3.read(0), r3 !== e3.length); ) r3 = e3.length;
      e3.readingMore = false;
    }
    function x2(t3) {
      u2("readable nexttick read 0"), t3.read(0);
    }
    function S2(t3, e3) {
      e3.reading || (u2("resume read 0"), t3.read(0)), e3.resumeScheduled = false, e3.awaitDrain = 0, t3.emit("resume"), I2(t3), e3.flowing && !e3.reading && t3.read(0);
    }
    function I2(t3) {
      var e3 = t3._readableState;
      for (u2("flow", e3.flowing); e3.flowing && null !== t3.read(); ) ;
    }
    function C2(t3, e3) {
      return 0 === e3.length ? null : (e3.objectMode ? r3 = e3.buffer.shift() : !t3 || t3 >= e3.length ? (r3 = e3.decoder ? e3.buffer.join("") : 1 === e3.buffer.length ? e3.buffer.head.data : e3.buffer.concat(e3.length), e3.buffer.clear()) : r3 = (function(t4, e4, r4) {
        var a3;
        t4 < e4.head.data.length ? (a3 = e4.head.data.slice(0, t4), e4.head.data = e4.head.data.slice(t4)) : a3 = t4 === e4.head.data.length ? e4.shift() : r4 ? (function(t5, e5) {
          var r5 = e5.head, a4 = 1, n3 = r5.data;
          t5 -= n3.length;
          for (; r5 = r5.next; ) {
            var o2 = r5.data, c3 = t5 > o2.length ? o2.length : t5;
            if (c3 === o2.length ? n3 += o2 : n3 += o2.slice(0, t5), 0 === (t5 -= c3)) {
              c3 === o2.length ? (++a4, r5.next ? e5.head = r5.next : e5.head = e5.tail = null) : (e5.head = r5, r5.data = o2.slice(c3));
              break;
            }
            ++a4;
          }
          return e5.length -= a4, n3;
        })(t4, e4) : (function(t5, e5) {
          var r5 = c2.allocUnsafe(t5), a4 = e5.head, n3 = 1;
          a4.data.copy(r5), t5 -= a4.data.length;
          for (; a4 = a4.next; ) {
            var o2 = a4.data, i3 = t5 > o2.length ? o2.length : t5;
            if (o2.copy(r5, r5.length - t5, 0, i3), 0 === (t5 -= i3)) {
              i3 === o2.length ? (++n3, a4.next ? e5.head = a4.next : e5.head = e5.tail = null) : (e5.head = a4, a4.data = o2.slice(i3));
              break;
            }
            ++n3;
          }
          return e5.length -= n3, r5;
        })(t4, e4);
        return a3;
      })(t3, e3.buffer, e3.decoder), r3);
      var r3;
    }
    function A2(e3) {
      var r3 = e3._readableState;
      if (r3.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      r3.endEmitted || (r3.ended = true, t2.nextTick(P2, r3, e3));
    }
    function P2(t3, e3) {
      t3.endEmitted || 0 !== t3.length || (t3.endEmitted = true, e3.readable = false, e3.emit("end"));
    }
    function E2(t3, e3) {
      for (var r3 = 0, a3 = t3.length; r3 < a3; r3++) if (t3[r3] === e3) return r3;
      return -1;
    }
    return g2.prototype.read = function(t3) {
      u2("read", t3), t3 = parseInt(t3, 10);
      var e3 = this._readableState, r3 = t3;
      if (0 !== t3 && (e3.emittedReadable = false), 0 === t3 && e3.needReadable && (e3.length >= e3.highWaterMark || e3.ended)) return u2("read: emitReadable", e3.length, e3.ended), 0 === e3.length && e3.ended ? A2(this) : w2(this), null;
      if (0 === (t3 = L2(t3, e3)) && e3.ended) return 0 === e3.length && A2(this), null;
      var a3, n3 = e3.needReadable;
      return u2("need readable", n3), (0 === e3.length || e3.length - t3 < e3.highWaterMark) && u2("length less than watermark", n3 = true), e3.ended || e3.reading ? u2("reading or ended", n3 = false) : n3 && (u2("do read"), e3.reading = true, e3.sync = true, 0 === e3.length && (e3.needReadable = true), this._read(e3.highWaterMark), e3.sync = false, e3.reading || (t3 = L2(r3, e3))), null === (a3 = t3 > 0 ? C2(t3, e3) : null) ? (e3.needReadable = true, t3 = 0) : e3.length -= t3, 0 === e3.length && (e3.ended || (e3.needReadable = true), r3 !== t3 && e3.ended && A2(this)), null !== a3 && this.emit("data", a3), a3;
    }, g2.prototype._read = function(t3) {
      this.emit("error", new Error("_read() is not implemented"));
    }, g2.prototype.pipe = function(e3, n3) {
      var o2 = this, c3 = this._readableState;
      switch (c3.pipesCount) {
        case 0:
          c3.pipes = e3;
          break;
        case 1:
          c3.pipes = [c3.pipes, e3];
          break;
        default:
          c3.pipes.push(e3);
      }
      c3.pipesCount += 1, u2("pipe count=%d opts=%j", c3.pipesCount, n3);
      var i3 = (!n3 || false !== n3.end) && e3 !== Dt.stdout && e3 !== Dt.stderr ? l3 : m3;
      function s3(t3, r3) {
        u2("onunpipe"), t3 === o2 && r3 && false === r3.hasUnpiped && (r3.hasUnpiped = true, u2("cleanup"), e3.removeListener("close", g3), e3.removeListener("finish", v3), e3.removeListener("drain", f3), e3.removeListener("error", b3), e3.removeListener("unpipe", s3), o2.removeListener("end", l3), o2.removeListener("end", m3), o2.removeListener("data", p3), h3 = true, !c3.awaitDrain || e3._writableState && !e3._writableState.needDrain || f3());
      }
      function l3() {
        u2("onend"), e3.end();
      }
      c3.endEmitted ? t2.nextTick(i3) : o2.once("end", i3), e3.on("unpipe", s3);
      var f3 = /* @__PURE__ */ (function(t3) {
        return function() {
          var e4 = t3._readableState;
          u2("pipeOnDrain", e4.awaitDrain), e4.awaitDrain && e4.awaitDrain--, 0 === e4.awaitDrain && a2(t3, "data") && (e4.flowing = true, I2(t3));
        };
      })(o2);
      e3.on("drain", f3);
      var h3 = false;
      var d3 = false;
      function p3(t3) {
        u2("ondata"), d3 = false, false !== e3.write(t3) || d3 || ((1 === c3.pipesCount && c3.pipes === e3 || c3.pipesCount > 1 && -1 !== E2(c3.pipes, e3)) && !h3 && (u2("false write response, pause", o2._readableState.awaitDrain), o2._readableState.awaitDrain++, d3 = true), o2.pause());
      }
      function b3(t3) {
        u2("onerror", t3), m3(), e3.removeListener("error", b3), 0 === a2(e3, "error") && e3.emit("error", t3);
      }
      function g3() {
        e3.removeListener("finish", v3), m3();
      }
      function v3() {
        u2("onfinish"), e3.removeListener("close", g3), m3();
      }
      function m3() {
        u2("unpipe"), o2.unpipe(e3);
      }
      return o2.on("data", p3), (function(t3, e4, a3) {
        if ("function" == typeof t3.prependListener) return t3.prependListener(e4, a3);
        t3._events && t3._events[e4] ? r2(t3._events[e4]) ? t3._events[e4].unshift(a3) : t3._events[e4] = [a3, t3._events[e4]] : t3.on(e4, a3);
      })(e3, "error", b3), e3.once("close", g3), e3.once("finish", v3), e3.emit("pipe", o2), c3.flowing || (u2("pipe resume"), o2.resume()), e3;
    }, g2.prototype.unpipe = function(t3) {
      var e3 = this._readableState, r3 = { hasUnpiped: false };
      if (0 === e3.pipesCount) return this;
      if (1 === e3.pipesCount) return t3 && t3 !== e3.pipes || (t3 || (t3 = e3.pipes), e3.pipes = null, e3.pipesCount = 0, e3.flowing = false, t3 && t3.emit("unpipe", this, r3)), this;
      if (!t3) {
        var a3 = e3.pipes, n3 = e3.pipesCount;
        e3.pipes = null, e3.pipesCount = 0, e3.flowing = false;
        for (var o2 = 0; o2 < n3; o2++) a3[o2].emit("unpipe", this, r3);
        return this;
      }
      var c3 = E2(e3.pipes, t3);
      return -1 === c3 || (e3.pipes.splice(c3, 1), e3.pipesCount -= 1, 1 === e3.pipesCount && (e3.pipes = e3.pipes[0]), t3.emit("unpipe", this, r3)), this;
    }, g2.prototype.on = function(e3, r3) {
      var a3 = n2.prototype.on.call(this, e3, r3);
      if ("data" === e3) false !== this._readableState.flowing && this.resume();
      else if ("readable" === e3) {
        var o2 = this._readableState;
        o2.endEmitted || o2.readableListening || (o2.readableListening = o2.needReadable = true, o2.emittedReadable = false, o2.reading ? o2.length && w2(this) : t2.nextTick(x2, this));
      }
      return a3;
    }, g2.prototype.addListener = g2.prototype.on, g2.prototype.resume = function() {
      var e3 = this._readableState;
      return e3.flowing || (u2("resume"), e3.flowing = true, (function(e4, r3) {
        r3.resumeScheduled || (r3.resumeScheduled = true, t2.nextTick(S2, e4, r3));
      })(this, e3)), this;
    }, g2.prototype.pause = function() {
      return u2("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (u2("pause"), this._readableState.flowing = false, this.emit("pause")), this;
    }, g2.prototype.wrap = function(t3) {
      var e3 = this, r3 = this._readableState, a3 = false;
      for (var n3 in t3.on("end", (function() {
        if (u2("wrapped end"), r3.decoder && !r3.ended) {
          var t4 = r3.decoder.end();
          t4 && t4.length && e3.push(t4);
        }
        e3.push(null);
      })), t3.on("data", (function(n4) {
        (u2("wrapped data"), r3.decoder && (n4 = r3.decoder.write(n4)), r3.objectMode && null == n4) || (r3.objectMode || n4 && n4.length) && (e3.push(n4) || (a3 = true, t3.pause()));
      })), t3) void 0 === this[n3] && "function" == typeof t3[n3] && (this[n3] = /* @__PURE__ */ (function(e4) {
        return function() {
          return t3[e4].apply(t3, arguments);
        };
      })(n3));
      for (var o2 = 0; o2 < p2.length; o2++) t3.on(p2[o2], this.emit.bind(this, p2[o2]));
      return this._read = function(e4) {
        u2("wrapped _read", e4), a3 && (a3 = false, t3.resume());
      }, this;
    }, Object.defineProperty(g2.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } }), g2._fromList = C2, la;
  }
  function ya() {
    if (ha) return fa;
    ha = 1, fa = a2;
    var t2 = ia(), e2 = Object.create(Ur());
    function r2(t3, e3) {
      var r3 = this._transformState;
      r3.transforming = false;
      var a3 = r3.writecb;
      if (!a3) return this.emit("error", new Error("write callback called multiple times"));
      r3.writechunk = null, r3.writecb = null, null != e3 && this.push(e3), a3(t3);
      var n3 = this._readableState;
      n3.reading = false, (n3.needReadable || n3.length < n3.highWaterMark) && this._read(n3.highWaterMark);
    }
    function a2(e3) {
      if (!(this instanceof a2)) return new a2(e3);
      t2.call(this, e3), this._transformState = { afterTransform: r2.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, e3 && ("function" == typeof e3.transform && (this._transform = e3.transform), "function" == typeof e3.flush && (this._flush = e3.flush)), this.on("prefinish", n2);
    }
    function n2() {
      var t3 = this;
      "function" == typeof this._flush ? this._flush((function(e3, r3) {
        o2(t3, e3, r3);
      })) : o2(this, null, null);
    }
    function o2(t3, e3, r3) {
      if (e3) return t3.emit("error", e3);
      if (null != r3 && t3.push(r3), t3._writableState.length) throw new Error("Calling transform done when ws.length != 0");
      if (t3._transformState.transforming) throw new Error("Calling transform done when still transforming");
      return t3.push(null);
    }
    return e2.inherits = Yr(), e2.inherits(a2, t2), a2.prototype.push = function(e3, r3) {
      return this._transformState.needTransform = false, t2.prototype.push.call(this, e3, r3);
    }, a2.prototype._transform = function(t3, e3, r3) {
      throw new Error("_transform() is not implemented");
    }, a2.prototype._write = function(t3, e3, r3) {
      var a3 = this._transformState;
      if (a3.writecb = r3, a3.writechunk = t3, a3.writeencoding = e3, !a3.transforming) {
        var n3 = this._readableState;
        (a3.needTransform || n3.needReadable || n3.length < n3.highWaterMark) && this._read(n3.highWaterMark);
      }
    }, a2.prototype._read = function(t3) {
      var e3 = this._transformState;
      null !== e3.writechunk && e3.writecb && !e3.transforming ? (e3.transforming = true, this._transform(e3.writechunk, e3.writeencoding, e3.afterTransform)) : e3.needTransform = true;
    }, a2.prototype._destroy = function(e3, r3) {
      var a3 = this;
      t2.prototype._destroy.call(this, e3, (function(t3) {
        r3(t3), a3.emit("close");
      }));
    }, fa;
  }
  function La() {
    return ba || (ba = 1, (function(t2, e2) {
      var r2 = Cr;
      "disable" === Dt.env.READABLE_STREAM && r2 ? (t2.exports = r2, (e2 = t2.exports = r2.Readable).Readable = r2.Readable, e2.Writable = r2.Writable, e2.Duplex = r2.Duplex, e2.Transform = r2.Transform, e2.PassThrough = r2.PassThrough, e2.Stream = r2) : ((e2 = t2.exports = ma()).Stream = r2 || e2, e2.Readable = e2, e2.Writable = ca(), e2.Duplex = ia(), e2.Transform = ya(), e2.PassThrough = (function() {
        if (pa) return da;
        pa = 1, da = r3;
        var t3 = ya(), e3 = Object.create(Ur());
        function r3(e4) {
          if (!(this instanceof r3)) return new r3(e4);
          t3.call(this, e4);
        }
        return e3.inherits = Yr(), e3.inherits(r3, t3), r3.prototype._transform = function(t4, e4, r4) {
          r4(null, t4);
        }, da;
      })());
    })(Ft, Ft.exports)), Ft.exports;
  }
  if (dt.base64 = true, dt.array = true, dt.string = true, dt.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, dt.nodebuffer = true, dt.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) dt.blob = false;
  else {
    wa = new ArrayBuffer(0);
    try {
      dt.blob = 0 === new Blob([wa], { type: "application/zip" }).size;
    } catch (t2) {
      try {
        _a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
        _a.append(wa), dt.blob = 0 === _a.getBlob("application/zip").size;
      } catch (t3) {
        dt.blob = false;
      }
    }
  }
  var wa;
  var _a;
  try {
    dt.nodestream = !!La().Readable;
  } catch (t2) {
    dt.nodestream = false;
  }
  var ka;
  var Ma = {};
  function xa() {
    if (ka) return Ma;
    ka = 1;
    var t2 = Oa(), e2 = dt, r2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return Ma.encode = function(e3) {
      for (var a2, n2, o2, c2, i2, s2, l2, u2 = [], f2 = 0, h2 = e3.length, d2 = h2, p2 = "string" !== t2.getTypeOf(e3); f2 < e3.length; ) d2 = h2 - f2, p2 ? (a2 = e3[f2++], n2 = f2 < h2 ? e3[f2++] : 0, o2 = f2 < h2 ? e3[f2++] : 0) : (a2 = e3.charCodeAt(f2++), n2 = f2 < h2 ? e3.charCodeAt(f2++) : 0, o2 = f2 < h2 ? e3.charCodeAt(f2++) : 0), c2 = a2 >> 2, i2 = (3 & a2) << 4 | n2 >> 4, s2 = d2 > 1 ? (15 & n2) << 2 | o2 >> 6 : 64, l2 = d2 > 2 ? 63 & o2 : 64, u2.push(r2.charAt(c2) + r2.charAt(i2) + r2.charAt(s2) + r2.charAt(l2));
      return u2.join("");
    }, Ma.decode = function(t3) {
      var a2, n2, o2, c2, i2, s2, l2 = 0, u2 = 0, f2 = "data:";
      if (t3.substr(0, f2.length) === f2) throw new Error("Invalid base64 input, it looks like a data url.");
      var h2, d2 = 3 * (t3 = t3.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
      if (t3.charAt(t3.length - 1) === r2.charAt(64) && d2--, t3.charAt(t3.length - 2) === r2.charAt(64) && d2--, d2 % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
      for (h2 = e2.uint8array ? new Uint8Array(0 | d2) : new Array(0 | d2); l2 < t3.length; ) a2 = r2.indexOf(t3.charAt(l2++)) << 2 | (c2 = r2.indexOf(t3.charAt(l2++))) >> 4, n2 = (15 & c2) << 4 | (i2 = r2.indexOf(t3.charAt(l2++))) >> 2, o2 = (3 & i2) << 6 | (s2 = r2.indexOf(t3.charAt(l2++))), h2[u2++] = a2, 64 !== i2 && (h2[u2++] = n2), 64 !== s2 && (h2[u2++] = o2);
      return h2;
    }, Ma;
  }
  var Sa;
  var Ia;
  var Ca;
  var Aa;
  var Pa = { isNode: true, newBufferFrom: function(t2, e2) {
    if (C.from && C.from !== Uint8Array.from) return C.from(t2, e2);
    if ("number" == typeof t2) throw new Error('The "data" argument must not be a number');
    return new C(t2, e2);
  }, allocBuffer: function(t2) {
    if (C.alloc) return C.alloc(t2);
    var e2 = new C(t2);
    return e2.fill(0), e2;
  }, isBuffer: function(t2) {
    return ut(t2);
  }, isStream: function(t2) {
    return t2 && "function" == typeof t2.on && "function" == typeof t2.pause && "function" == typeof t2.resume;
  } };
  var Ea = null;
  Ea = "undefined" != typeof Promise ? Promise : (function() {
    if (Aa) return Ca;
    Aa = 1;
    var t2 = (function() {
      if (Ia) return Sa;
      Ia = 1;
      var t3, e3, r3 = o.MutationObserver || o.WebKitMutationObserver;
      if (r3) {
        var a3 = 0, n3 = new r3(l3), c3 = o.document.createTextNode("");
        n3.observe(c3, { characterData: true }), t3 = function() {
          c3.data = a3 = ++a3 % 2;
        };
      } else if (o.setImmediate || void 0 === o.MessageChannel) t3 = "document" in o && "onreadystatechange" in o.document.createElement("script") ? function() {
        var t4 = o.document.createElement("script");
        t4.onreadystatechange = function() {
          l3(), t4.onreadystatechange = null, t4.parentNode.removeChild(t4), t4 = null;
        }, o.document.documentElement.appendChild(t4);
      } : function() {
        setTimeout(l3, 0);
      };
      else {
        var i3 = new o.MessageChannel();
        i3.port1.onmessage = l3, t3 = function() {
          i3.port2.postMessage(0);
        };
      }
      var s3 = [];
      function l3() {
        var t4, r4;
        e3 = true;
        for (var a4 = s3.length; a4; ) {
          for (r4 = s3, s3 = [], t4 = -1; ++t4 < a4; ) r4[t4]();
          a4 = s3.length;
        }
        e3 = false;
      }
      return Sa = function(r4) {
        1 !== s3.push(r4) || e3 || t3();
      };
    })();
    function e2() {
    }
    var r2 = {}, a2 = ["REJECTED"], n2 = ["FULFILLED"], c2 = ["PENDING"];
    function i2(t3) {
      if ("function" != typeof t3) throw new TypeError("resolver must be a function");
      this.state = c2, this.queue = [], this.outcome = void 0, t3 !== e2 && f2(this, t3);
    }
    function s2(t3, e3, r3) {
      this.promise = t3, "function" == typeof e3 && (this.onFulfilled = e3, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r3 && (this.onRejected = r3, this.callRejected = this.otherCallRejected);
    }
    function l2(e3, a3, n3) {
      t2((function() {
        var t3;
        try {
          t3 = a3(n3);
        } catch (t4) {
          return r2.reject(e3, t4);
        }
        t3 === e3 ? r2.reject(e3, new TypeError("Cannot resolve promise with itself")) : r2.resolve(e3, t3);
      }));
    }
    function u2(t3) {
      var e3 = t3 && t3.then;
      if (t3 && ("object" == typeof t3 || "function" == typeof t3) && "function" == typeof e3) return function() {
        e3.apply(t3, arguments);
      };
    }
    function f2(t3, e3) {
      var a3 = false;
      function n3(e4) {
        a3 || (a3 = true, r2.reject(t3, e4));
      }
      function o2(e4) {
        a3 || (a3 = true, r2.resolve(t3, e4));
      }
      var c3 = h2((function() {
        e3(o2, n3);
      }));
      "error" === c3.status && n3(c3.value);
    }
    function h2(t3, e3) {
      var r3 = {};
      try {
        r3.value = t3(e3), r3.status = "success";
      } catch (t4) {
        r3.status = "error", r3.value = t4;
      }
      return r3;
    }
    return Ca = i2, i2.prototype.finally = function(t3) {
      if ("function" != typeof t3) return this;
      var e3 = this.constructor;
      return this.then((function(r3) {
        return e3.resolve(t3()).then((function() {
          return r3;
        }));
      }), (function(r3) {
        return e3.resolve(t3()).then((function() {
          throw r3;
        }));
      }));
    }, i2.prototype.catch = function(t3) {
      return this.then(null, t3);
    }, i2.prototype.then = function(t3, r3) {
      if ("function" != typeof t3 && this.state === n2 || "function" != typeof r3 && this.state === a2) return this;
      var o2 = new this.constructor(e2);
      return this.state !== c2 ? l2(o2, this.state === n2 ? t3 : r3, this.outcome) : this.queue.push(new s2(o2, t3, r3)), o2;
    }, s2.prototype.callFulfilled = function(t3) {
      r2.resolve(this.promise, t3);
    }, s2.prototype.otherCallFulfilled = function(t3) {
      l2(this.promise, this.onFulfilled, t3);
    }, s2.prototype.callRejected = function(t3) {
      r2.reject(this.promise, t3);
    }, s2.prototype.otherCallRejected = function(t3) {
      l2(this.promise, this.onRejected, t3);
    }, r2.resolve = function(t3, e3) {
      var a3 = h2(u2, e3);
      if ("error" === a3.status) return r2.reject(t3, a3.value);
      var o2 = a3.value;
      if (o2) f2(t3, o2);
      else {
        t3.state = n2, t3.outcome = e3;
        for (var c3 = -1, i3 = t3.queue.length; ++c3 < i3; ) t3.queue[c3].callFulfilled(e3);
      }
      return t3;
    }, r2.reject = function(t3, e3) {
      t3.state = a2, t3.outcome = e3;
      for (var r3 = -1, n3 = t3.queue.length; ++r3 < n3; ) t3.queue[r3].callRejected(e3);
      return t3;
    }, i2.resolve = function(t3) {
      return t3 instanceof this ? t3 : r2.resolve(new this(e2), t3);
    }, i2.reject = function(t3) {
      var a3 = new this(e2);
      return r2.reject(a3, t3);
    }, i2.all = function(t3) {
      var a3 = this;
      if ("[object Array]" !== Object.prototype.toString.call(t3)) return this.reject(new TypeError("must be an array"));
      var n3 = t3.length, o2 = false;
      if (!n3) return this.resolve([]);
      for (var c3 = new Array(n3), i3 = 0, s3 = -1, l3 = new this(e2); ++s3 < n3; ) u3(t3[s3], s3);
      return l3;
      function u3(t4, e3) {
        a3.resolve(t4).then((function(t5) {
          c3[e3] = t5, ++i3 !== n3 || o2 || (o2 = true, r2.resolve(l3, c3));
        }), (function(t5) {
          o2 || (o2 = true, r2.reject(l3, t5));
        }));
      }
    }, i2.race = function(t3) {
      var a3 = this;
      if ("[object Array]" !== Object.prototype.toString.call(t3)) return this.reject(new TypeError("must be an array"));
      var n3 = t3.length, o2 = false;
      if (!n3) return this.resolve([]);
      for (var c3, i3 = -1, s3 = new this(e2); ++i3 < n3; ) c3 = t3[i3], a3.resolve(c3).then((function(t4) {
        o2 || (o2 = true, r2.resolve(s3, t4));
      }), (function(t4) {
        o2 || (o2 = true, r2.reject(s3, t4));
      }));
      return s3;
    }, Ca;
  })();
  var Ra;
  var Ta = { Promise: Ea };
  function Oa() {
    return Ra || (Ra = 1, (function(t2) {
      var e2 = dt, r2 = xa(), a2 = Pa, n2 = Ta;
      function o2(t3) {
        return t3;
      }
      function c2(t3, e3) {
        for (var r3 = 0; r3 < t3.length; ++r3) e3[r3] = 255 & t3.charCodeAt(r3);
        return e3;
      }
      t2.newBlob = function(e3, r3) {
        t2.checkSupport("blob");
        try {
          return new Blob([e3], { type: r3 });
        } catch (t3) {
          try {
            var a3 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return a3.append(e3), a3.getBlob(r3);
          } catch (t4) {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var i2 = { stringifyByChunk: function(t3, e3, r3) {
        var a3 = [], n3 = 0, o3 = t3.length;
        if (o3 <= r3) return String.fromCharCode.apply(null, t3);
        for (; n3 < o3; ) "array" === e3 || "nodebuffer" === e3 ? a3.push(String.fromCharCode.apply(null, t3.slice(n3, Math.min(n3 + r3, o3)))) : a3.push(String.fromCharCode.apply(null, t3.subarray(n3, Math.min(n3 + r3, o3)))), n3 += r3;
        return a3.join("");
      }, stringifyByChar: function(t3) {
        for (var e3 = "", r3 = 0; r3 < t3.length; r3++) e3 += String.fromCharCode(t3[r3]);
        return e3;
      }, applyCanBeUsed: { uint8array: (function() {
        try {
          return e2.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
        } catch (t3) {
          return false;
        }
      })(), nodebuffer: (function() {
        try {
          return e2.nodebuffer && 1 === String.fromCharCode.apply(null, a2.allocBuffer(1)).length;
        } catch (t3) {
          return false;
        }
      })() } };
      function s2(e3) {
        var r3 = 65536, a3 = t2.getTypeOf(e3), n3 = true;
        if ("uint8array" === a3 ? n3 = i2.applyCanBeUsed.uint8array : "nodebuffer" === a3 && (n3 = i2.applyCanBeUsed.nodebuffer), n3) for (; r3 > 1; ) try {
          return i2.stringifyByChunk(e3, a3, r3);
        } catch (t3) {
          r3 = Math.floor(r3 / 2);
        }
        return i2.stringifyByChar(e3);
      }
      function l2(t3, e3) {
        for (var r3 = 0; r3 < t3.length; r3++) e3[r3] = t3[r3];
        return e3;
      }
      t2.applyFromCharCode = s2;
      var u2 = {};
      u2.string = { string: o2, array: function(t3) {
        return c2(t3, new Array(t3.length));
      }, arraybuffer: function(t3) {
        return u2.string.uint8array(t3).buffer;
      }, uint8array: function(t3) {
        return c2(t3, new Uint8Array(t3.length));
      }, nodebuffer: function(t3) {
        return c2(t3, a2.allocBuffer(t3.length));
      } }, u2.array = { string: s2, array: o2, arraybuffer: function(t3) {
        return new Uint8Array(t3).buffer;
      }, uint8array: function(t3) {
        return new Uint8Array(t3);
      }, nodebuffer: function(t3) {
        return a2.newBufferFrom(t3);
      } }, u2.arraybuffer = { string: function(t3) {
        return s2(new Uint8Array(t3));
      }, array: function(t3) {
        return l2(new Uint8Array(t3), new Array(t3.byteLength));
      }, arraybuffer: o2, uint8array: function(t3) {
        return new Uint8Array(t3);
      }, nodebuffer: function(t3) {
        return a2.newBufferFrom(new Uint8Array(t3));
      } }, u2.uint8array = { string: s2, array: function(t3) {
        return l2(t3, new Array(t3.length));
      }, arraybuffer: function(t3) {
        return t3.buffer;
      }, uint8array: o2, nodebuffer: function(t3) {
        return a2.newBufferFrom(t3);
      } }, u2.nodebuffer = { string: s2, array: function(t3) {
        return l2(t3, new Array(t3.length));
      }, arraybuffer: function(t3) {
        return u2.nodebuffer.uint8array(t3).buffer;
      }, uint8array: function(t3) {
        return l2(t3, new Uint8Array(t3.length));
      }, nodebuffer: o2 }, t2.transformTo = function(e3, r3) {
        if (r3 || (r3 = ""), !e3) return r3;
        t2.checkSupport(e3);
        var a3 = t2.getTypeOf(r3);
        return u2[a3][e3](r3);
      }, t2.resolve = function(t3) {
        for (var e3 = t3.split("/"), r3 = [], a3 = 0; a3 < e3.length; a3++) {
          var n3 = e3[a3];
          "." === n3 || "" === n3 && 0 !== a3 && a3 !== e3.length - 1 || (".." === n3 ? r3.pop() : r3.push(n3));
        }
        return r3.join("/");
      }, t2.getTypeOf = function(t3) {
        return "string" == typeof t3 ? "string" : "[object Array]" === Object.prototype.toString.call(t3) ? "array" : e2.nodebuffer && a2.isBuffer(t3) ? "nodebuffer" : e2.uint8array && t3 instanceof Uint8Array ? "uint8array" : e2.arraybuffer && t3 instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, t2.checkSupport = function(t3) {
        if (!e2[t3.toLowerCase()]) throw new Error(t3 + " is not supported by this platform");
      }, t2.MAX_VALUE_16BITS = 65535, t2.MAX_VALUE_32BITS = -1, t2.pretty = function(t3) {
        var e3, r3, a3 = "";
        for (r3 = 0; r3 < (t3 || "").length; r3++) a3 += "\\x" + ((e3 = t3.charCodeAt(r3)) < 16 ? "0" : "") + e3.toString(16).toUpperCase();
        return a3;
      }, t2.delay = function(t3, e3, r3) {
        setImmediate((function() {
          t3.apply(r3 || null, e3 || []);
        }));
      }, t2.inherits = function(t3, e3) {
        var r3 = function() {
        };
        r3.prototype = e3.prototype, t3.prototype = new r3();
      }, t2.extend = function() {
        var t3, e3, r3 = {};
        for (t3 = 0; t3 < arguments.length; t3++) for (e3 in arguments[t3]) Object.prototype.hasOwnProperty.call(arguments[t3], e3) && void 0 === r3[e3] && (r3[e3] = arguments[t3][e3]);
        return r3;
      }, t2.prepareContent = function(a3, o3, i3, s3, l3) {
        return n2.Promise.resolve(o3).then((function(t3) {
          return e2.blob && (t3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(t3))) && "undefined" != typeof FileReader ? new n2.Promise((function(e3, r3) {
            var a4 = new FileReader();
            a4.onload = function(t4) {
              e3(t4.target.result);
            }, a4.onerror = function(t4) {
              r3(t4.target.error);
            }, a4.readAsArrayBuffer(t3);
          })) : t3;
        })).then((function(o4) {
          var u3, f2 = t2.getTypeOf(o4);
          return f2 ? ("arraybuffer" === f2 ? o4 = t2.transformTo("uint8array", o4) : "string" === f2 && (l3 ? o4 = r2.decode(o4) : i3 && true !== s3 && (o4 = c2(u3 = o4, e2.uint8array ? new Uint8Array(u3.length) : new Array(u3.length)))), o4) : n2.Promise.reject(new Error("Can't read the data of '" + a3 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        }));
      };
    })(h)), h;
  }
  function ja(t2) {
    this.name = t2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
  }
  !(function(t2, e2) {
    if (!t2.setImmediate) {
      var r2, a2, n2, o2, c2, i2 = 1, s2 = {}, l2 = false, u2 = t2.document, f2 = Object.getPrototypeOf && Object.getPrototypeOf(t2);
      f2 = f2 && f2.setTimeout ? f2 : t2, "[object process]" === {}.toString.call(t2.process) ? r2 = function(t3) {
        xt((function() {
          d2(t3);
        }));
      } : !(function() {
        if (t2.postMessage && !t2.importScripts) {
          var e3 = true, r3 = t2.onmessage;
          return t2.onmessage = function() {
            e3 = false;
          }, t2.postMessage("", "*"), t2.onmessage = r3, e3;
        }
      })() ? t2.MessageChannel ? ((n2 = new MessageChannel()).port1.onmessage = function(t3) {
        d2(t3.data);
      }, r2 = function(t3) {
        n2.port2.postMessage(t3);
      }) : u2 && "onreadystatechange" in u2.createElement("script") ? (a2 = u2.documentElement, r2 = function(t3) {
        var e3 = u2.createElement("script");
        e3.onreadystatechange = function() {
          d2(t3), e3.onreadystatechange = null, a2.removeChild(e3), e3 = null;
        }, a2.appendChild(e3);
      }) : r2 = function(t3) {
        setTimeout(d2, 0, t3);
      } : (o2 = "setImmediate$" + Math.random() + "$", c2 = function(e3) {
        e3.source === t2 && "string" == typeof e3.data && 0 === e3.data.indexOf(o2) && d2(+e3.data.slice(o2.length));
      }, t2.addEventListener ? t2.addEventListener("message", c2, false) : t2.attachEvent("onmessage", c2), r2 = function(e3) {
        t2.postMessage(o2 + e3, "*");
      }), f2.setImmediate = function(t3) {
        "function" != typeof t3 && (t3 = new Function("" + t3));
        for (var e3 = new Array(arguments.length - 1), a3 = 0; a3 < e3.length; a3++) e3[a3] = arguments[a3 + 1];
        var n3 = { callback: t3, args: e3 };
        return s2[i2] = n3, r2(i2), i2++;
      }, f2.clearImmediate = h2;
    }
    function h2(t3) {
      delete s2[t3];
    }
    function d2(t3) {
      if (l2) setTimeout(d2, 0, t3);
      else {
        var e3 = s2[t3];
        if (e3) {
          l2 = true;
          try {
            !(function(t4) {
              var e4 = t4.callback, r3 = t4.args;
              switch (r3.length) {
                case 0:
                  e4();
                  break;
                case 1:
                  e4(r3[0]);
                  break;
                case 2:
                  e4(r3[0], r3[1]);
                  break;
                case 3:
                  e4(r3[0], r3[1], r3[2]);
                  break;
                default:
                  e4.apply(void 0, r3);
              }
            })(e3);
          } finally {
            h2(t3), l2 = false;
          }
        }
      }
    }
  })("undefined" == typeof self ? o : self), ja.prototype = { push: function(t2) {
    this.emit("data", t2);
  }, end: function() {
    if (this.isFinished) return false;
    this.flush();
    try {
      this.emit("end"), this.cleanUp(), this.isFinished = true;
    } catch (t2) {
      this.emit("error", t2);
    }
    return true;
  }, error: function(t2) {
    return !this.isFinished && (this.isPaused ? this.generatedError = t2 : (this.isFinished = true, this.emit("error", t2), this.previous && this.previous.error(t2), this.cleanUp()), true);
  }, on: function(t2, e2) {
    return this._listeners[t2].push(e2), this;
  }, cleanUp: function() {
    this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
  }, emit: function(t2, e2) {
    if (this._listeners[t2]) for (var r2 = 0; r2 < this._listeners[t2].length; r2++) this._listeners[t2][r2].call(this, e2);
  }, pipe: function(t2) {
    return t2.registerPrevious(this);
  }, registerPrevious: function(t2) {
    if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
    this.streamInfo = t2.streamInfo, this.mergeStreamInfo(), this.previous = t2;
    var e2 = this;
    return t2.on("data", (function(t3) {
      e2.processChunk(t3);
    })), t2.on("end", (function() {
      e2.end();
    })), t2.on("error", (function(t3) {
      e2.error(t3);
    })), this;
  }, pause: function() {
    return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
  }, resume: function() {
    if (!this.isPaused || this.isFinished) return false;
    this.isPaused = false;
    var t2 = false;
    return this.generatedError && (this.error(this.generatedError), t2 = true), this.previous && this.previous.resume(), !t2;
  }, flush: function() {
  }, processChunk: function(t2) {
    this.push(t2);
  }, withStreamInfo: function(t2, e2) {
    return this.extraStreamInfo[t2] = e2, this.mergeStreamInfo(), this;
  }, mergeStreamInfo: function() {
    for (var t2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, t2) && (this.streamInfo[t2] = this.extraStreamInfo[t2]);
  }, lock: function() {
    if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
    this.isLocked = true, this.previous && this.previous.lock();
  }, toString: function() {
    var t2 = "Worker " + this.name;
    return this.previous ? this.previous + " -> " + t2 : t2;
  } };
  var za = ja;
  !(function(t2) {
    for (var e2 = Oa(), r2 = dt, a2 = Pa, n2 = za, o2 = new Array(256), c2 = 0; c2 < 256; c2++) o2[c2] = c2 >= 252 ? 6 : c2 >= 248 ? 5 : c2 >= 240 ? 4 : c2 >= 224 ? 3 : c2 >= 192 ? 2 : 1;
    o2[254] = o2[254] = 1;
    function i2() {
      n2.call(this, "utf-8 decode"), this.leftOver = null;
    }
    function s2() {
      n2.call(this, "utf-8 encode");
    }
    t2.utf8encode = function(t3) {
      return r2.nodebuffer ? a2.newBufferFrom(t3, "utf-8") : (function(t4) {
        var e3, a3, n3, o3, c3, i3 = t4.length, s3 = 0;
        for (o3 = 0; o3 < i3; o3++) 55296 == (64512 & (a3 = t4.charCodeAt(o3))) && o3 + 1 < i3 && 56320 == (64512 & (n3 = t4.charCodeAt(o3 + 1))) && (a3 = 65536 + (a3 - 55296 << 10) + (n3 - 56320), o3++), s3 += a3 < 128 ? 1 : a3 < 2048 ? 2 : a3 < 65536 ? 3 : 4;
        for (e3 = r2.uint8array ? new Uint8Array(s3) : new Array(s3), c3 = 0, o3 = 0; c3 < s3; o3++) 55296 == (64512 & (a3 = t4.charCodeAt(o3))) && o3 + 1 < i3 && 56320 == (64512 & (n3 = t4.charCodeAt(o3 + 1))) && (a3 = 65536 + (a3 - 55296 << 10) + (n3 - 56320), o3++), a3 < 128 ? e3[c3++] = a3 : a3 < 2048 ? (e3[c3++] = 192 | a3 >>> 6, e3[c3++] = 128 | 63 & a3) : a3 < 65536 ? (e3[c3++] = 224 | a3 >>> 12, e3[c3++] = 128 | a3 >>> 6 & 63, e3[c3++] = 128 | 63 & a3) : (e3[c3++] = 240 | a3 >>> 18, e3[c3++] = 128 | a3 >>> 12 & 63, e3[c3++] = 128 | a3 >>> 6 & 63, e3[c3++] = 128 | 63 & a3);
        return e3;
      })(t3);
    }, t2.utf8decode = function(t3) {
      return r2.nodebuffer ? e2.transformTo("nodebuffer", t3).toString("utf-8") : (function(t4) {
        var r3, a3, n3, c3, i3 = t4.length, s3 = new Array(2 * i3);
        for (a3 = 0, r3 = 0; r3 < i3; ) if ((n3 = t4[r3++]) < 128) s3[a3++] = n3;
        else if ((c3 = o2[n3]) > 4) s3[a3++] = 65533, r3 += c3 - 1;
        else {
          for (n3 &= 2 === c3 ? 31 : 3 === c3 ? 15 : 7; c3 > 1 && r3 < i3; ) n3 = n3 << 6 | 63 & t4[r3++], c3--;
          c3 > 1 ? s3[a3++] = 65533 : n3 < 65536 ? s3[a3++] = n3 : (n3 -= 65536, s3[a3++] = 55296 | n3 >> 10 & 1023, s3[a3++] = 56320 | 1023 & n3);
        }
        return s3.length !== a3 && (s3.subarray ? s3 = s3.subarray(0, a3) : s3.length = a3), e2.applyFromCharCode(s3);
      })(t3 = e2.transformTo(r2.uint8array ? "uint8array" : "array", t3));
    }, e2.inherits(i2, n2), i2.prototype.processChunk = function(a3) {
      var n3 = e2.transformTo(r2.uint8array ? "uint8array" : "array", a3.data);
      if (this.leftOver && this.leftOver.length) {
        if (r2.uint8array) {
          var c3 = n3;
          (n3 = new Uint8Array(c3.length + this.leftOver.length)).set(this.leftOver, 0), n3.set(c3, this.leftOver.length);
        } else n3 = this.leftOver.concat(n3);
        this.leftOver = null;
      }
      var i3 = (function(t3, e3) {
        var r3;
        for ((e3 = e3 || t3.length) > t3.length && (e3 = t3.length), r3 = e3 - 1; r3 >= 0 && 128 == (192 & t3[r3]); ) r3--;
        return r3 < 0 || 0 === r3 ? e3 : r3 + o2[t3[r3]] > e3 ? r3 : e3;
      })(n3), s3 = n3;
      i3 !== n3.length && (r2.uint8array ? (s3 = n3.subarray(0, i3), this.leftOver = n3.subarray(i3, n3.length)) : (s3 = n3.slice(0, i3), this.leftOver = n3.slice(i3, n3.length))), this.push({ data: t2.utf8decode(s3), meta: a3.meta });
    }, i2.prototype.flush = function() {
      this.leftOver && this.leftOver.length && (this.push({ data: t2.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
    }, t2.Utf8DecodeWorker = i2, e2.inherits(s2, n2), s2.prototype.processChunk = function(e3) {
      this.push({ data: t2.utf8encode(e3.data), meta: e3.meta });
    }, t2.Utf8EncodeWorker = s2;
  })(f);
  var Ba = za;
  var Da = Oa();
  function Fa(t2) {
    Ba.call(this, "ConvertWorker to " + t2), this.destType = t2;
  }
  Da.inherits(Fa, Ba), Fa.prototype.processChunk = function(t2) {
    this.push({ data: Da.transformTo(this.destType, t2.data), meta: t2.meta });
  };
  var Na;
  var Ua;
  var Ga = Fa;
  var qa = Oa();
  var Wa = Ga;
  var Ha = za;
  var Za = xa();
  var Ya = Ta;
  var Va = null;
  if (dt.nodestream) try {
    Va = (function() {
      if (Ua) return Na;
      Ua = 1;
      var t2 = La().Readable;
      function e2(e3, r2, a2) {
        t2.call(this, r2), this._helper = e3;
        var n2 = this;
        e3.on("data", (function(t3, e4) {
          n2.push(t3) || n2._helper.pause(), a2 && a2(e4);
        })).on("error", (function(t3) {
          n2.emit("error", t3);
        })).on("end", (function() {
          n2.push(null);
        }));
      }
      return Oa().inherits(e2, t2), e2.prototype._read = function() {
        this._helper.resume();
      }, Na = e2;
    })();
  } catch (t2) {
  }
  function Qa(t2, e2) {
    return new Ya.Promise((function(r2, a2) {
      var n2 = [], o2 = t2._internalType, c2 = t2._outputType, i2 = t2._mimeType;
      t2.on("data", (function(t3, r3) {
        n2.push(t3), e2 && e2(r3);
      })).on("error", (function(t3) {
        n2 = [], a2(t3);
      })).on("end", (function() {
        try {
          var t3 = (function(t4, e3, r3) {
            switch (t4) {
              case "blob":
                return qa.newBlob(qa.transformTo("arraybuffer", e3), r3);
              case "base64":
                return Za.encode(e3);
              default:
                return qa.transformTo(t4, e3);
            }
          })(c2, (function(t4, e3) {
            var r3, a3 = 0, n3 = null, o3 = 0;
            for (r3 = 0; r3 < e3.length; r3++) o3 += e3[r3].length;
            switch (t4) {
              case "string":
                return e3.join("");
              case "array":
                return Array.prototype.concat.apply([], e3);
              case "uint8array":
                for (n3 = new Uint8Array(o3), r3 = 0; r3 < e3.length; r3++) n3.set(e3[r3], a3), a3 += e3[r3].length;
                return n3;
              case "nodebuffer":
                return C.concat(e3);
              default:
                throw new Error("concat : unsupported type '" + t4 + "'");
            }
          })(o2, n2), i2);
          r2(t3);
        } catch (t4) {
          a2(t4);
        }
        n2 = [];
      })).resume();
    }));
  }
  function $a(t2, e2, r2) {
    var a2 = e2;
    switch (e2) {
      case "blob":
      case "arraybuffer":
        a2 = "uint8array";
        break;
      case "base64":
        a2 = "string";
    }
    try {
      this._internalType = a2, this._outputType = e2, this._mimeType = r2, qa.checkSupport(a2), this._worker = t2.pipe(new Wa(a2)), t2.lock();
    } catch (t3) {
      this._worker = new Ha("error"), this._worker.error(t3);
    }
  }
  $a.prototype = { accumulate: function(t2) {
    return Qa(this, t2);
  }, on: function(t2, e2) {
    var r2 = this;
    return "data" === t2 ? this._worker.on(t2, (function(t3) {
      e2.call(r2, t3.data, t3.meta);
    })) : this._worker.on(t2, (function() {
      qa.delay(e2, arguments, r2);
    })), this;
  }, resume: function() {
    return qa.delay(this._worker.resume, [], this._worker), this;
  }, pause: function() {
    return this._worker.pause(), this;
  }, toNodejsStream: function(t2) {
    if (qa.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
    return new Va(this, { objectMode: "nodebuffer" !== this._outputType }, t2);
  } };
  var Ka = $a;
  var Xa = { base64: false, binary: false, dir: false, createFolders: true, date: null, compression: null, compressionOptions: null, comment: null, unixPermissions: null, dosPermissions: null };
  var Ja = Oa();
  var tn = za;
  function en(t2) {
    tn.call(this, "DataWorker");
    var e2 = this;
    this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, t2.then((function(t3) {
      e2.dataIsReady = true, e2.data = t3, e2.max = t3 && t3.length || 0, e2.type = Ja.getTypeOf(t3), e2.isPaused || e2._tickAndRepeat();
    }), (function(t3) {
      e2.error(t3);
    }));
  }
  Ja.inherits(en, tn), en.prototype.cleanUp = function() {
    tn.prototype.cleanUp.call(this), this.data = null;
  }, en.prototype.resume = function() {
    return !!tn.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, Ja.delay(this._tickAndRepeat, [], this)), true);
  }, en.prototype._tickAndRepeat = function() {
    this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (Ja.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
  }, en.prototype._tick = function() {
    if (this.isPaused || this.isFinished) return false;
    var t2 = null, e2 = Math.min(this.max, this.index + 16384);
    if (this.index >= this.max) return this.end();
    switch (this.type) {
      case "string":
        t2 = this.data.substring(this.index, e2);
        break;
      case "uint8array":
        t2 = this.data.subarray(this.index, e2);
        break;
      case "array":
      case "nodebuffer":
        t2 = this.data.slice(this.index, e2);
    }
    return this.index = e2, this.push({ data: t2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
  };
  var rn = en;
  var an = Oa();
  var nn = (function() {
    for (var t2, e2 = [], r2 = 0; r2 < 256; r2++) {
      t2 = r2;
      for (var a2 = 0; a2 < 8; a2++) t2 = 1 & t2 ? 3988292384 ^ t2 >>> 1 : t2 >>> 1;
      e2[r2] = t2;
    }
    return e2;
  })();
  var on = function(t2, e2) {
    return void 0 !== t2 && t2.length ? "string" !== an.getTypeOf(t2) ? (function(t3, e3, r2, a2) {
      var n2 = nn, o2 = a2 + r2;
      t3 ^= -1;
      for (var c2 = a2; c2 < o2; c2++) t3 = t3 >>> 8 ^ n2[255 & (t3 ^ e3[c2])];
      return -1 ^ t3;
    })(0 | e2, t2, t2.length, 0) : (function(t3, e3, r2, a2) {
      var n2 = nn, o2 = a2 + r2;
      t3 ^= -1;
      for (var c2 = a2; c2 < o2; c2++) t3 = t3 >>> 8 ^ n2[255 & (t3 ^ e3.charCodeAt(c2))];
      return -1 ^ t3;
    })(0 | e2, t2, t2.length, 0) : 0;
  };
  var cn = za;
  var sn = on;
  function ln() {
    cn.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
  }
  Oa().inherits(ln, cn), ln.prototype.processChunk = function(t2) {
    this.streamInfo.crc32 = sn(t2.data, this.streamInfo.crc32 || 0), this.push(t2);
  };
  var un = ln;
  var fn = Oa();
  var hn = za;
  function dn(t2) {
    hn.call(this, "DataLengthProbe for " + t2), this.propName = t2, this.withStreamInfo(t2, 0);
  }
  fn.inherits(dn, hn), dn.prototype.processChunk = function(t2) {
    if (t2) {
      var e2 = this.streamInfo[this.propName] || 0;
      this.streamInfo[this.propName] = e2 + t2.data.length;
    }
    hn.prototype.processChunk.call(this, t2);
  };
  var pn = Ta;
  var bn = rn;
  var gn = un;
  var vn = dn;
  function mn(t2, e2, r2, a2, n2) {
    this.compressedSize = t2, this.uncompressedSize = e2, this.crc32 = r2, this.compression = a2, this.compressedContent = n2;
  }
  mn.prototype = { getContentWorker: function() {
    var t2 = new bn(pn.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new vn("data_length")), e2 = this;
    return t2.on("end", (function() {
      if (this.streamInfo.data_length !== e2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
    })), t2;
  }, getCompressedWorker: function() {
    return new bn(pn.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
  } }, mn.createWorkerFrom = function(t2, e2, r2) {
    return t2.pipe(new gn()).pipe(new vn("uncompressedSize")).pipe(e2.compressWorker(r2)).pipe(new vn("compressedSize")).withStreamInfo("compression", e2);
  };
  var yn = mn;
  var Ln = Ka;
  var wn = rn;
  var _n = f;
  var kn = yn;
  var Mn = za;
  var xn = function(t2, e2, r2) {
    this.name = t2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = e2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
  };
  xn.prototype = { internalStream: function(t2) {
    var e2 = null, r2 = "string";
    try {
      if (!t2) throw new Error("No output type specified.");
      var a2 = "string" === (r2 = t2.toLowerCase()) || "text" === r2;
      "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), e2 = this._decompressWorker();
      var n2 = !this._dataBinary;
      n2 && !a2 && (e2 = e2.pipe(new _n.Utf8EncodeWorker())), !n2 && a2 && (e2 = e2.pipe(new _n.Utf8DecodeWorker()));
    } catch (t3) {
      (e2 = new Mn("error")).error(t3);
    }
    return new Ln(e2, r2, "");
  }, async: function(t2, e2) {
    return this.internalStream(t2).accumulate(e2);
  }, nodeStream: function(t2, e2) {
    return this.internalStream(t2 || "nodebuffer").toNodejsStream(e2);
  }, _compressWorker: function(t2, e2) {
    if (this._data instanceof kn && this._data.compression.magic === t2.magic) return this._data.getCompressedWorker();
    var r2 = this._decompressWorker();
    return this._dataBinary || (r2 = r2.pipe(new _n.Utf8EncodeWorker())), kn.createWorkerFrom(r2, t2, e2);
  }, _decompressWorker: function() {
    return this._data instanceof kn ? this._data.getContentWorker() : this._data instanceof Mn ? this._data : new wn(this._data);
  } };
  for (Sn = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], In = function() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  }, Cn = 0; Cn < Sn.length; Cn++) xn.prototype[Sn[Cn]] = In;
  var Sn;
  var In;
  var Cn;
  var An = xn;
  var Pn = {};
  var En = {};
  var Rn = {};
  var Tn = {};
  !(function(t2) {
    var e2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    function r2(t3, e3) {
      return Object.prototype.hasOwnProperty.call(t3, e3);
    }
    t2.assign = function(t3) {
      for (var e3 = Array.prototype.slice.call(arguments, 1); e3.length; ) {
        var a3 = e3.shift();
        if (a3) {
          if ("object" != typeof a3) throw new TypeError(a3 + "must be non-object");
          for (var n3 in a3) r2(a3, n3) && (t3[n3] = a3[n3]);
        }
      }
      return t3;
    }, t2.shrinkBuf = function(t3, e3) {
      return t3.length === e3 ? t3 : t3.subarray ? t3.subarray(0, e3) : (t3.length = e3, t3);
    };
    var a2 = { arraySet: function(t3, e3, r3, a3, n3) {
      if (e3.subarray && t3.subarray) t3.set(e3.subarray(r3, r3 + a3), n3);
      else for (var o2 = 0; o2 < a3; o2++) t3[n3 + o2] = e3[r3 + o2];
    }, flattenChunks: function(t3) {
      var e3, r3, a3, n3, o2, c2;
      for (a3 = 0, e3 = 0, r3 = t3.length; e3 < r3; e3++) a3 += t3[e3].length;
      for (c2 = new Uint8Array(a3), n3 = 0, e3 = 0, r3 = t3.length; e3 < r3; e3++) o2 = t3[e3], c2.set(o2, n3), n3 += o2.length;
      return c2;
    } }, n2 = { arraySet: function(t3, e3, r3, a3, n3) {
      for (var o2 = 0; o2 < a3; o2++) t3[n3 + o2] = e3[r3 + o2];
    }, flattenChunks: function(t3) {
      return [].concat.apply([], t3);
    } };
    t2.setTyped = function(e3) {
      e3 ? (t2.Buf8 = Uint8Array, t2.Buf16 = Uint16Array, t2.Buf32 = Int32Array, t2.assign(t2, a2)) : (t2.Buf8 = Array, t2.Buf16 = Array, t2.Buf32 = Array, t2.assign(t2, n2));
    }, t2.setTyped(e2);
  })(Tn);
  var On = {};
  var jn = {};
  var zn = {};
  var Bn = Tn;
  function Dn(t2) {
    for (var e2 = t2.length; --e2 >= 0; ) t2[e2] = 0;
  }
  var Fn = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var Nn = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var Un = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  var Gn = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var qn = new Array(576);
  Dn(qn);
  var Wn = new Array(60);
  Dn(Wn);
  var Hn = new Array(512);
  Dn(Hn);
  var Zn = new Array(256);
  Dn(Zn);
  var Yn = new Array(29);
  Dn(Yn);
  var Vn;
  var Qn;
  var $n;
  var Kn = new Array(30);
  function Xn(t2, e2, r2, a2, n2) {
    this.static_tree = t2, this.extra_bits = e2, this.extra_base = r2, this.elems = a2, this.max_length = n2, this.has_stree = t2 && t2.length;
  }
  function Jn(t2, e2) {
    this.dyn_tree = t2, this.max_code = 0, this.stat_desc = e2;
  }
  function to(t2) {
    return t2 < 256 ? Hn[t2] : Hn[256 + (t2 >>> 7)];
  }
  function eo(t2, e2) {
    t2.pending_buf[t2.pending++] = 255 & e2, t2.pending_buf[t2.pending++] = e2 >>> 8 & 255;
  }
  function ro(t2, e2, r2) {
    t2.bi_valid > 16 - r2 ? (t2.bi_buf |= e2 << t2.bi_valid & 65535, eo(t2, t2.bi_buf), t2.bi_buf = e2 >> 16 - t2.bi_valid, t2.bi_valid += r2 - 16) : (t2.bi_buf |= e2 << t2.bi_valid & 65535, t2.bi_valid += r2);
  }
  function ao(t2, e2, r2) {
    ro(t2, r2[2 * e2], r2[2 * e2 + 1]);
  }
  function no(t2, e2) {
    var r2 = 0;
    do {
      r2 |= 1 & t2, t2 >>>= 1, r2 <<= 1;
    } while (--e2 > 0);
    return r2 >>> 1;
  }
  function oo(t2, e2, r2) {
    var a2, n2, o2 = new Array(16), c2 = 0;
    for (a2 = 1; a2 <= 15; a2++) o2[a2] = c2 = c2 + r2[a2 - 1] << 1;
    for (n2 = 0; n2 <= e2; n2++) {
      var i2 = t2[2 * n2 + 1];
      0 !== i2 && (t2[2 * n2] = no(o2[i2]++, i2));
    }
  }
  function co(t2) {
    var e2;
    for (e2 = 0; e2 < 286; e2++) t2.dyn_ltree[2 * e2] = 0;
    for (e2 = 0; e2 < 30; e2++) t2.dyn_dtree[2 * e2] = 0;
    for (e2 = 0; e2 < 19; e2++) t2.bl_tree[2 * e2] = 0;
    t2.dyn_ltree[512] = 1, t2.opt_len = t2.static_len = 0, t2.last_lit = t2.matches = 0;
  }
  function io(t2) {
    t2.bi_valid > 8 ? eo(t2, t2.bi_buf) : t2.bi_valid > 0 && (t2.pending_buf[t2.pending++] = t2.bi_buf), t2.bi_buf = 0, t2.bi_valid = 0;
  }
  function so(t2, e2, r2, a2) {
    var n2 = 2 * e2, o2 = 2 * r2;
    return t2[n2] < t2[o2] || t2[n2] === t2[o2] && a2[e2] <= a2[r2];
  }
  function lo(t2, e2, r2) {
    for (var a2 = t2.heap[r2], n2 = r2 << 1; n2 <= t2.heap_len && (n2 < t2.heap_len && so(e2, t2.heap[n2 + 1], t2.heap[n2], t2.depth) && n2++, !so(e2, a2, t2.heap[n2], t2.depth)); ) t2.heap[r2] = t2.heap[n2], r2 = n2, n2 <<= 1;
    t2.heap[r2] = a2;
  }
  function uo(t2, e2, r2) {
    var a2, n2, o2, c2, i2 = 0;
    if (0 !== t2.last_lit) do {
      a2 = t2.pending_buf[t2.d_buf + 2 * i2] << 8 | t2.pending_buf[t2.d_buf + 2 * i2 + 1], n2 = t2.pending_buf[t2.l_buf + i2], i2++, 0 === a2 ? ao(t2, n2, e2) : (ao(t2, (o2 = Zn[n2]) + 256 + 1, e2), 0 !== (c2 = Fn[o2]) && ro(t2, n2 -= Yn[o2], c2), ao(t2, o2 = to(--a2), r2), 0 !== (c2 = Nn[o2]) && ro(t2, a2 -= Kn[o2], c2));
    } while (i2 < t2.last_lit);
    ao(t2, 256, e2);
  }
  function fo(t2, e2) {
    var r2, a2, n2, o2 = e2.dyn_tree, c2 = e2.stat_desc.static_tree, i2 = e2.stat_desc.has_stree, s2 = e2.stat_desc.elems, l2 = -1;
    for (t2.heap_len = 0, t2.heap_max = 573, r2 = 0; r2 < s2; r2++) 0 !== o2[2 * r2] ? (t2.heap[++t2.heap_len] = l2 = r2, t2.depth[r2] = 0) : o2[2 * r2 + 1] = 0;
    for (; t2.heap_len < 2; ) o2[2 * (n2 = t2.heap[++t2.heap_len] = l2 < 2 ? ++l2 : 0)] = 1, t2.depth[n2] = 0, t2.opt_len--, i2 && (t2.static_len -= c2[2 * n2 + 1]);
    for (e2.max_code = l2, r2 = t2.heap_len >> 1; r2 >= 1; r2--) lo(t2, o2, r2);
    n2 = s2;
    do {
      r2 = t2.heap[1], t2.heap[1] = t2.heap[t2.heap_len--], lo(t2, o2, 1), a2 = t2.heap[1], t2.heap[--t2.heap_max] = r2, t2.heap[--t2.heap_max] = a2, o2[2 * n2] = o2[2 * r2] + o2[2 * a2], t2.depth[n2] = (t2.depth[r2] >= t2.depth[a2] ? t2.depth[r2] : t2.depth[a2]) + 1, o2[2 * r2 + 1] = o2[2 * a2 + 1] = n2, t2.heap[1] = n2++, lo(t2, o2, 1);
    } while (t2.heap_len >= 2);
    t2.heap[--t2.heap_max] = t2.heap[1], (function(t3, e3) {
      var r3, a3, n3, o3, c3, i3, s3 = e3.dyn_tree, l3 = e3.max_code, u2 = e3.stat_desc.static_tree, f2 = e3.stat_desc.has_stree, h2 = e3.stat_desc.extra_bits, d2 = e3.stat_desc.extra_base, p2 = e3.stat_desc.max_length, b2 = 0;
      for (o3 = 0; o3 <= 15; o3++) t3.bl_count[o3] = 0;
      for (s3[2 * t3.heap[t3.heap_max] + 1] = 0, r3 = t3.heap_max + 1; r3 < 573; r3++) (o3 = s3[2 * s3[2 * (a3 = t3.heap[r3]) + 1] + 1] + 1) > p2 && (o3 = p2, b2++), s3[2 * a3 + 1] = o3, a3 > l3 || (t3.bl_count[o3]++, c3 = 0, a3 >= d2 && (c3 = h2[a3 - d2]), i3 = s3[2 * a3], t3.opt_len += i3 * (o3 + c3), f2 && (t3.static_len += i3 * (u2[2 * a3 + 1] + c3)));
      if (0 !== b2) {
        do {
          for (o3 = p2 - 1; 0 === t3.bl_count[o3]; ) o3--;
          t3.bl_count[o3]--, t3.bl_count[o3 + 1] += 2, t3.bl_count[p2]--, b2 -= 2;
        } while (b2 > 0);
        for (o3 = p2; 0 !== o3; o3--) for (a3 = t3.bl_count[o3]; 0 !== a3; ) (n3 = t3.heap[--r3]) > l3 || (s3[2 * n3 + 1] !== o3 && (t3.opt_len += (o3 - s3[2 * n3 + 1]) * s3[2 * n3], s3[2 * n3 + 1] = o3), a3--);
      }
    })(t2, e2), oo(o2, l2, t2.bl_count);
  }
  function ho(t2, e2, r2) {
    var a2, n2, o2 = -1, c2 = e2[1], i2 = 0, s2 = 7, l2 = 4;
    for (0 === c2 && (s2 = 138, l2 = 3), e2[2 * (r2 + 1) + 1] = 65535, a2 = 0; a2 <= r2; a2++) n2 = c2, c2 = e2[2 * (a2 + 1) + 1], ++i2 < s2 && n2 === c2 || (i2 < l2 ? t2.bl_tree[2 * n2] += i2 : 0 !== n2 ? (n2 !== o2 && t2.bl_tree[2 * n2]++, t2.bl_tree[32]++) : i2 <= 10 ? t2.bl_tree[34]++ : t2.bl_tree[36]++, i2 = 0, o2 = n2, 0 === c2 ? (s2 = 138, l2 = 3) : n2 === c2 ? (s2 = 6, l2 = 3) : (s2 = 7, l2 = 4));
  }
  function po(t2, e2, r2) {
    var a2, n2, o2 = -1, c2 = e2[1], i2 = 0, s2 = 7, l2 = 4;
    for (0 === c2 && (s2 = 138, l2 = 3), a2 = 0; a2 <= r2; a2++) if (n2 = c2, c2 = e2[2 * (a2 + 1) + 1], !(++i2 < s2 && n2 === c2)) {
      if (i2 < l2) do {
        ao(t2, n2, t2.bl_tree);
      } while (0 != --i2);
      else 0 !== n2 ? (n2 !== o2 && (ao(t2, n2, t2.bl_tree), i2--), ao(t2, 16, t2.bl_tree), ro(t2, i2 - 3, 2)) : i2 <= 10 ? (ao(t2, 17, t2.bl_tree), ro(t2, i2 - 3, 3)) : (ao(t2, 18, t2.bl_tree), ro(t2, i2 - 11, 7));
      i2 = 0, o2 = n2, 0 === c2 ? (s2 = 138, l2 = 3) : n2 === c2 ? (s2 = 6, l2 = 3) : (s2 = 7, l2 = 4);
    }
  }
  Dn(Kn);
  var bo = false;
  function go(t2, e2, r2, a2) {
    ro(t2, 0 + (a2 ? 1 : 0), 3), (function(t3, e3, r3, a3) {
      io(t3), a3 && (eo(t3, r3), eo(t3, ~r3)), Bn.arraySet(t3.pending_buf, t3.window, e3, r3, t3.pending), t3.pending += r3;
    })(t2, e2, r2, true);
  }
  zn._tr_init = function(t2) {
    bo || (!(function() {
      var t3, e2, r2, a2, n2, o2 = new Array(16);
      for (r2 = 0, a2 = 0; a2 < 28; a2++) for (Yn[a2] = r2, t3 = 0; t3 < 1 << Fn[a2]; t3++) Zn[r2++] = a2;
      for (Zn[r2 - 1] = a2, n2 = 0, a2 = 0; a2 < 16; a2++) for (Kn[a2] = n2, t3 = 0; t3 < 1 << Nn[a2]; t3++) Hn[n2++] = a2;
      for (n2 >>= 7; a2 < 30; a2++) for (Kn[a2] = n2 << 7, t3 = 0; t3 < 1 << Nn[a2] - 7; t3++) Hn[256 + n2++] = a2;
      for (e2 = 0; e2 <= 15; e2++) o2[e2] = 0;
      for (t3 = 0; t3 <= 143; ) qn[2 * t3 + 1] = 8, t3++, o2[8]++;
      for (; t3 <= 255; ) qn[2 * t3 + 1] = 9, t3++, o2[9]++;
      for (; t3 <= 279; ) qn[2 * t3 + 1] = 7, t3++, o2[7]++;
      for (; t3 <= 287; ) qn[2 * t3 + 1] = 8, t3++, o2[8]++;
      for (oo(qn, 287, o2), t3 = 0; t3 < 30; t3++) Wn[2 * t3 + 1] = 5, Wn[2 * t3] = no(t3, 5);
      Vn = new Xn(qn, Fn, 257, 286, 15), Qn = new Xn(Wn, Nn, 0, 30, 15), $n = new Xn(new Array(0), Un, 0, 19, 7);
    })(), bo = true), t2.l_desc = new Jn(t2.dyn_ltree, Vn), t2.d_desc = new Jn(t2.dyn_dtree, Qn), t2.bl_desc = new Jn(t2.bl_tree, $n), t2.bi_buf = 0, t2.bi_valid = 0, co(t2);
  }, zn._tr_stored_block = go, zn._tr_flush_block = function(t2, e2, r2, a2) {
    var n2, o2, c2 = 0;
    t2.level > 0 ? (2 === t2.strm.data_type && (t2.strm.data_type = (function(t3) {
      var e3, r3 = 4093624447;
      for (e3 = 0; e3 <= 31; e3++, r3 >>>= 1) if (1 & r3 && 0 !== t3.dyn_ltree[2 * e3]) return 0;
      if (0 !== t3.dyn_ltree[18] || 0 !== t3.dyn_ltree[20] || 0 !== t3.dyn_ltree[26]) return 1;
      for (e3 = 32; e3 < 256; e3++) if (0 !== t3.dyn_ltree[2 * e3]) return 1;
      return 0;
    })(t2)), fo(t2, t2.l_desc), fo(t2, t2.d_desc), c2 = (function(t3) {
      var e3;
      for (ho(t3, t3.dyn_ltree, t3.l_desc.max_code), ho(t3, t3.dyn_dtree, t3.d_desc.max_code), fo(t3, t3.bl_desc), e3 = 18; e3 >= 3 && 0 === t3.bl_tree[2 * Gn[e3] + 1]; e3--) ;
      return t3.opt_len += 3 * (e3 + 1) + 5 + 5 + 4, e3;
    })(t2), n2 = t2.opt_len + 3 + 7 >>> 3, (o2 = t2.static_len + 3 + 7 >>> 3) <= n2 && (n2 = o2)) : n2 = o2 = r2 + 5, r2 + 4 <= n2 && -1 !== e2 ? go(t2, e2, r2, a2) : 4 === t2.strategy || o2 === n2 ? (ro(t2, 2 + (a2 ? 1 : 0), 3), uo(t2, qn, Wn)) : (ro(t2, 4 + (a2 ? 1 : 0), 3), (function(t3, e3, r3, a3) {
      var n3;
      for (ro(t3, e3 - 257, 5), ro(t3, r3 - 1, 5), ro(t3, a3 - 4, 4), n3 = 0; n3 < a3; n3++) ro(t3, t3.bl_tree[2 * Gn[n3] + 1], 3);
      po(t3, t3.dyn_ltree, e3 - 1), po(t3, t3.dyn_dtree, r3 - 1);
    })(t2, t2.l_desc.max_code + 1, t2.d_desc.max_code + 1, c2 + 1), uo(t2, t2.dyn_ltree, t2.dyn_dtree)), co(t2), a2 && io(t2);
  }, zn._tr_tally = function(t2, e2, r2) {
    return t2.pending_buf[t2.d_buf + 2 * t2.last_lit] = e2 >>> 8 & 255, t2.pending_buf[t2.d_buf + 2 * t2.last_lit + 1] = 255 & e2, t2.pending_buf[t2.l_buf + t2.last_lit] = 255 & r2, t2.last_lit++, 0 === e2 ? t2.dyn_ltree[2 * r2]++ : (t2.matches++, e2--, t2.dyn_ltree[2 * (Zn[r2] + 256 + 1)]++, t2.dyn_dtree[2 * to(e2)]++), t2.last_lit === t2.lit_bufsize - 1;
  }, zn._tr_align = function(t2) {
    ro(t2, 2, 3), ao(t2, 256, qn), (function(t3) {
      16 === t3.bi_valid ? (eo(t3, t3.bi_buf), t3.bi_buf = 0, t3.bi_valid = 0) : t3.bi_valid >= 8 && (t3.pending_buf[t3.pending++] = 255 & t3.bi_buf, t3.bi_buf >>= 8, t3.bi_valid -= 8);
    })(t2);
  };
  var vo = function(t2, e2, r2, a2) {
    for (var n2 = 65535 & t2 | 0, o2 = t2 >>> 16 & 65535 | 0, c2 = 0; 0 !== r2; ) {
      r2 -= c2 = r2 > 2e3 ? 2e3 : r2;
      do {
        o2 = o2 + (n2 = n2 + e2[a2++] | 0) | 0;
      } while (--c2);
      n2 %= 65521, o2 %= 65521;
    }
    return n2 | o2 << 16 | 0;
  };
  var mo = (function() {
    for (var t2, e2 = [], r2 = 0; r2 < 256; r2++) {
      t2 = r2;
      for (var a2 = 0; a2 < 8; a2++) t2 = 1 & t2 ? 3988292384 ^ t2 >>> 1 : t2 >>> 1;
      e2[r2] = t2;
    }
    return e2;
  })();
  var yo;
  var Lo = function(t2, e2, r2, a2) {
    var n2 = mo, o2 = a2 + r2;
    t2 ^= -1;
    for (var c2 = a2; c2 < o2; c2++) t2 = t2 >>> 8 ^ n2[255 & (t2 ^ e2[c2])];
    return -1 ^ t2;
  };
  var wo = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
  var _o = Tn;
  var ko = zn;
  var Mo = vo;
  var xo = Lo;
  var So = wo;
  function Io(t2, e2) {
    return t2.msg = So[e2], e2;
  }
  function Co(t2) {
    return (t2 << 1) - (t2 > 4 ? 9 : 0);
  }
  function Ao(t2) {
    for (var e2 = t2.length; --e2 >= 0; ) t2[e2] = 0;
  }
  function Po(t2) {
    var e2 = t2.state, r2 = e2.pending;
    r2 > t2.avail_out && (r2 = t2.avail_out), 0 !== r2 && (_o.arraySet(t2.output, e2.pending_buf, e2.pending_out, r2, t2.next_out), t2.next_out += r2, e2.pending_out += r2, t2.total_out += r2, t2.avail_out -= r2, e2.pending -= r2, 0 === e2.pending && (e2.pending_out = 0));
  }
  function Eo(t2, e2) {
    ko._tr_flush_block(t2, t2.block_start >= 0 ? t2.block_start : -1, t2.strstart - t2.block_start, e2), t2.block_start = t2.strstart, Po(t2.strm);
  }
  function Ro(t2, e2) {
    t2.pending_buf[t2.pending++] = e2;
  }
  function To(t2, e2) {
    t2.pending_buf[t2.pending++] = e2 >>> 8 & 255, t2.pending_buf[t2.pending++] = 255 & e2;
  }
  function Oo(t2, e2) {
    var r2, a2, n2 = t2.max_chain_length, o2 = t2.strstart, c2 = t2.prev_length, i2 = t2.nice_match, s2 = t2.strstart > t2.w_size - 262 ? t2.strstart - (t2.w_size - 262) : 0, l2 = t2.window, u2 = t2.w_mask, f2 = t2.prev, h2 = t2.strstart + 258, d2 = l2[o2 + c2 - 1], p2 = l2[o2 + c2];
    t2.prev_length >= t2.good_match && (n2 >>= 2), i2 > t2.lookahead && (i2 = t2.lookahead);
    do {
      if (l2[(r2 = e2) + c2] === p2 && l2[r2 + c2 - 1] === d2 && l2[r2] === l2[o2] && l2[++r2] === l2[o2 + 1]) {
        o2 += 2, r2++;
        do {
        } while (l2[++o2] === l2[++r2] && l2[++o2] === l2[++r2] && l2[++o2] === l2[++r2] && l2[++o2] === l2[++r2] && l2[++o2] === l2[++r2] && l2[++o2] === l2[++r2] && l2[++o2] === l2[++r2] && l2[++o2] === l2[++r2] && o2 < h2);
        if (a2 = 258 - (h2 - o2), o2 = h2 - 258, a2 > c2) {
          if (t2.match_start = e2, c2 = a2, a2 >= i2) break;
          d2 = l2[o2 + c2 - 1], p2 = l2[o2 + c2];
        }
      }
    } while ((e2 = f2[e2 & u2]) > s2 && 0 != --n2);
    return c2 <= t2.lookahead ? c2 : t2.lookahead;
  }
  function jo(t2) {
    var e2, r2, a2, n2, o2, c2, i2, s2, l2, u2, f2 = t2.w_size;
    do {
      if (n2 = t2.window_size - t2.lookahead - t2.strstart, t2.strstart >= f2 + (f2 - 262)) {
        _o.arraySet(t2.window, t2.window, f2, f2, 0), t2.match_start -= f2, t2.strstart -= f2, t2.block_start -= f2, e2 = r2 = t2.hash_size;
        do {
          a2 = t2.head[--e2], t2.head[e2] = a2 >= f2 ? a2 - f2 : 0;
        } while (--r2);
        e2 = r2 = f2;
        do {
          a2 = t2.prev[--e2], t2.prev[e2] = a2 >= f2 ? a2 - f2 : 0;
        } while (--r2);
        n2 += f2;
      }
      if (0 === t2.strm.avail_in) break;
      if (c2 = t2.strm, i2 = t2.window, s2 = t2.strstart + t2.lookahead, l2 = n2, u2 = void 0, (u2 = c2.avail_in) > l2 && (u2 = l2), r2 = 0 === u2 ? 0 : (c2.avail_in -= u2, _o.arraySet(i2, c2.input, c2.next_in, u2, s2), 1 === c2.state.wrap ? c2.adler = Mo(c2.adler, i2, u2, s2) : 2 === c2.state.wrap && (c2.adler = xo(c2.adler, i2, u2, s2)), c2.next_in += u2, c2.total_in += u2, u2), t2.lookahead += r2, t2.lookahead + t2.insert >= 3) for (o2 = t2.strstart - t2.insert, t2.ins_h = t2.window[o2], t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[o2 + 1]) & t2.hash_mask; t2.insert && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[o2 + 3 - 1]) & t2.hash_mask, t2.prev[o2 & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = o2, o2++, t2.insert--, !(t2.lookahead + t2.insert < 3)); ) ;
    } while (t2.lookahead < 262 && 0 !== t2.strm.avail_in);
  }
  function zo(t2, e2) {
    for (var r2, a2; ; ) {
      if (t2.lookahead < 262) {
        if (jo(t2), t2.lookahead < 262 && 0 === e2) return 1;
        if (0 === t2.lookahead) break;
      }
      if (r2 = 0, t2.lookahead >= 3 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, r2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), 0 !== r2 && t2.strstart - r2 <= t2.w_size - 262 && (t2.match_length = Oo(t2, r2)), t2.match_length >= 3) if (a2 = ko._tr_tally(t2, t2.strstart - t2.match_start, t2.match_length - 3), t2.lookahead -= t2.match_length, t2.match_length <= t2.max_lazy_match && t2.lookahead >= 3) {
        t2.match_length--;
        do {
          t2.strstart++, t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, r2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart;
        } while (0 != --t2.match_length);
        t2.strstart++;
      } else t2.strstart += t2.match_length, t2.match_length = 0, t2.ins_h = t2.window[t2.strstart], t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 1]) & t2.hash_mask;
      else a2 = ko._tr_tally(t2, 0, t2.window[t2.strstart]), t2.lookahead--, t2.strstart++;
      if (a2 && (Eo(t2, false), 0 === t2.strm.avail_out)) return 1;
    }
    return t2.insert = t2.strstart < 2 ? t2.strstart : 2, 4 === e2 ? (Eo(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.last_lit && (Eo(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
  }
  function Bo(t2, e2) {
    for (var r2, a2, n2; ; ) {
      if (t2.lookahead < 262) {
        if (jo(t2), t2.lookahead < 262 && 0 === e2) return 1;
        if (0 === t2.lookahead) break;
      }
      if (r2 = 0, t2.lookahead >= 3 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, r2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart), t2.prev_length = t2.match_length, t2.prev_match = t2.match_start, t2.match_length = 2, 0 !== r2 && t2.prev_length < t2.max_lazy_match && t2.strstart - r2 <= t2.w_size - 262 && (t2.match_length = Oo(t2, r2), t2.match_length <= 5 && (1 === t2.strategy || 3 === t2.match_length && t2.strstart - t2.match_start > 4096) && (t2.match_length = 2)), t2.prev_length >= 3 && t2.match_length <= t2.prev_length) {
        n2 = t2.strstart + t2.lookahead - 3, a2 = ko._tr_tally(t2, t2.strstart - 1 - t2.prev_match, t2.prev_length - 3), t2.lookahead -= t2.prev_length - 1, t2.prev_length -= 2;
        do {
          ++t2.strstart <= n2 && (t2.ins_h = (t2.ins_h << t2.hash_shift ^ t2.window[t2.strstart + 3 - 1]) & t2.hash_mask, r2 = t2.prev[t2.strstart & t2.w_mask] = t2.head[t2.ins_h], t2.head[t2.ins_h] = t2.strstart);
        } while (0 != --t2.prev_length);
        if (t2.match_available = 0, t2.match_length = 2, t2.strstart++, a2 && (Eo(t2, false), 0 === t2.strm.avail_out)) return 1;
      } else if (t2.match_available) {
        if ((a2 = ko._tr_tally(t2, 0, t2.window[t2.strstart - 1])) && Eo(t2, false), t2.strstart++, t2.lookahead--, 0 === t2.strm.avail_out) return 1;
      } else t2.match_available = 1, t2.strstart++, t2.lookahead--;
    }
    return t2.match_available && (a2 = ko._tr_tally(t2, 0, t2.window[t2.strstart - 1]), t2.match_available = 0), t2.insert = t2.strstart < 2 ? t2.strstart : 2, 4 === e2 ? (Eo(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : t2.last_lit && (Eo(t2, false), 0 === t2.strm.avail_out) ? 1 : 2;
  }
  function Do(t2, e2, r2, a2, n2) {
    this.good_length = t2, this.max_lazy = e2, this.nice_length = r2, this.max_chain = a2, this.func = n2;
  }
  function Fo() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new _o.Buf16(1146), this.dyn_dtree = new _o.Buf16(122), this.bl_tree = new _o.Buf16(78), Ao(this.dyn_ltree), Ao(this.dyn_dtree), Ao(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new _o.Buf16(16), this.heap = new _o.Buf16(573), Ao(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new _o.Buf16(573), Ao(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function No(t2) {
    var e2;
    return t2 && t2.state ? (t2.total_in = t2.total_out = 0, t2.data_type = 2, (e2 = t2.state).pending = 0, e2.pending_out = 0, e2.wrap < 0 && (e2.wrap = -e2.wrap), e2.status = e2.wrap ? 42 : 113, t2.adler = 2 === e2.wrap ? 0 : 1, e2.last_flush = 0, ko._tr_init(e2), 0) : Io(t2, -2);
  }
  function Uo(t2) {
    var e2, r2 = No(t2);
    return 0 === r2 && ((e2 = t2.state).window_size = 2 * e2.w_size, Ao(e2.head), e2.max_lazy_match = yo[e2.level].max_lazy, e2.good_match = yo[e2.level].good_length, e2.nice_match = yo[e2.level].nice_length, e2.max_chain_length = yo[e2.level].max_chain, e2.strstart = 0, e2.block_start = 0, e2.lookahead = 0, e2.insert = 0, e2.match_length = e2.prev_length = 2, e2.match_available = 0, e2.ins_h = 0), r2;
  }
  function Go(t2, e2, r2, a2, n2, o2) {
    if (!t2) return -2;
    var c2 = 1;
    if (-1 === e2 && (e2 = 6), a2 < 0 ? (c2 = 0, a2 = -a2) : a2 > 15 && (c2 = 2, a2 -= 16), n2 < 1 || n2 > 9 || 8 !== r2 || a2 < 8 || a2 > 15 || e2 < 0 || e2 > 9 || o2 < 0 || o2 > 4) return Io(t2, -2);
    8 === a2 && (a2 = 9);
    var i2 = new Fo();
    return t2.state = i2, i2.strm = t2, i2.wrap = c2, i2.gzhead = null, i2.w_bits = a2, i2.w_size = 1 << i2.w_bits, i2.w_mask = i2.w_size - 1, i2.hash_bits = n2 + 7, i2.hash_size = 1 << i2.hash_bits, i2.hash_mask = i2.hash_size - 1, i2.hash_shift = ~~((i2.hash_bits + 3 - 1) / 3), i2.window = new _o.Buf8(2 * i2.w_size), i2.head = new _o.Buf16(i2.hash_size), i2.prev = new _o.Buf16(i2.w_size), i2.lit_bufsize = 1 << n2 + 6, i2.pending_buf_size = 4 * i2.lit_bufsize, i2.pending_buf = new _o.Buf8(i2.pending_buf_size), i2.d_buf = 1 * i2.lit_bufsize, i2.l_buf = 3 * i2.lit_bufsize, i2.level = e2, i2.strategy = o2, i2.method = r2, Uo(t2);
  }
  yo = [new Do(0, 0, 0, 0, (function(t2, e2) {
    var r2 = 65535;
    for (r2 > t2.pending_buf_size - 5 && (r2 = t2.pending_buf_size - 5); ; ) {
      if (t2.lookahead <= 1) {
        if (jo(t2), 0 === t2.lookahead && 0 === e2) return 1;
        if (0 === t2.lookahead) break;
      }
      t2.strstart += t2.lookahead, t2.lookahead = 0;
      var a2 = t2.block_start + r2;
      if ((0 === t2.strstart || t2.strstart >= a2) && (t2.lookahead = t2.strstart - a2, t2.strstart = a2, Eo(t2, false), 0 === t2.strm.avail_out)) return 1;
      if (t2.strstart - t2.block_start >= t2.w_size - 262 && (Eo(t2, false), 0 === t2.strm.avail_out)) return 1;
    }
    return t2.insert = 0, 4 === e2 ? (Eo(t2, true), 0 === t2.strm.avail_out ? 3 : 4) : (t2.strstart > t2.block_start && (Eo(t2, false), t2.strm.avail_out), 1);
  })), new Do(4, 4, 8, 4, zo), new Do(4, 5, 16, 8, zo), new Do(4, 6, 32, 32, zo), new Do(4, 4, 16, 16, Bo), new Do(8, 16, 32, 32, Bo), new Do(8, 16, 128, 128, Bo), new Do(8, 32, 128, 256, Bo), new Do(32, 128, 258, 1024, Bo), new Do(32, 258, 258, 4096, Bo)], jn.deflateInit = function(t2, e2) {
    return Go(t2, e2, 8, 15, 8, 0);
  }, jn.deflateInit2 = Go, jn.deflateReset = Uo, jn.deflateResetKeep = No, jn.deflateSetHeader = function(t2, e2) {
    return t2 && t2.state ? 2 !== t2.state.wrap ? -2 : (t2.state.gzhead = e2, 0) : -2;
  }, jn.deflate = function(t2, e2) {
    var r2, a2, n2, o2;
    if (!t2 || !t2.state || e2 > 5 || e2 < 0) return t2 ? Io(t2, -2) : -2;
    if (a2 = t2.state, !t2.output || !t2.input && 0 !== t2.avail_in || 666 === a2.status && 4 !== e2) return Io(t2, 0 === t2.avail_out ? -5 : -2);
    if (a2.strm = t2, r2 = a2.last_flush, a2.last_flush = e2, 42 === a2.status) if (2 === a2.wrap) t2.adler = 0, Ro(a2, 31), Ro(a2, 139), Ro(a2, 8), a2.gzhead ? (Ro(a2, (a2.gzhead.text ? 1 : 0) + (a2.gzhead.hcrc ? 2 : 0) + (a2.gzhead.extra ? 4 : 0) + (a2.gzhead.name ? 8 : 0) + (a2.gzhead.comment ? 16 : 0)), Ro(a2, 255 & a2.gzhead.time), Ro(a2, a2.gzhead.time >> 8 & 255), Ro(a2, a2.gzhead.time >> 16 & 255), Ro(a2, a2.gzhead.time >> 24 & 255), Ro(a2, 9 === a2.level ? 2 : a2.strategy >= 2 || a2.level < 2 ? 4 : 0), Ro(a2, 255 & a2.gzhead.os), a2.gzhead.extra && a2.gzhead.extra.length && (Ro(a2, 255 & a2.gzhead.extra.length), Ro(a2, a2.gzhead.extra.length >> 8 & 255)), a2.gzhead.hcrc && (t2.adler = xo(t2.adler, a2.pending_buf, a2.pending, 0)), a2.gzindex = 0, a2.status = 69) : (Ro(a2, 0), Ro(a2, 0), Ro(a2, 0), Ro(a2, 0), Ro(a2, 0), Ro(a2, 9 === a2.level ? 2 : a2.strategy >= 2 || a2.level < 2 ? 4 : 0), Ro(a2, 3), a2.status = 113);
    else {
      var c2 = 8 + (a2.w_bits - 8 << 4) << 8;
      c2 |= (a2.strategy >= 2 || a2.level < 2 ? 0 : a2.level < 6 ? 1 : 6 === a2.level ? 2 : 3) << 6, 0 !== a2.strstart && (c2 |= 32), c2 += 31 - c2 % 31, a2.status = 113, To(a2, c2), 0 !== a2.strstart && (To(a2, t2.adler >>> 16), To(a2, 65535 & t2.adler)), t2.adler = 1;
    }
    if (69 === a2.status) if (a2.gzhead.extra) {
      for (n2 = a2.pending; a2.gzindex < (65535 & a2.gzhead.extra.length) && (a2.pending !== a2.pending_buf_size || (a2.gzhead.hcrc && a2.pending > n2 && (t2.adler = xo(t2.adler, a2.pending_buf, a2.pending - n2, n2)), Po(t2), n2 = a2.pending, a2.pending !== a2.pending_buf_size)); ) Ro(a2, 255 & a2.gzhead.extra[a2.gzindex]), a2.gzindex++;
      a2.gzhead.hcrc && a2.pending > n2 && (t2.adler = xo(t2.adler, a2.pending_buf, a2.pending - n2, n2)), a2.gzindex === a2.gzhead.extra.length && (a2.gzindex = 0, a2.status = 73);
    } else a2.status = 73;
    if (73 === a2.status) if (a2.gzhead.name) {
      n2 = a2.pending;
      do {
        if (a2.pending === a2.pending_buf_size && (a2.gzhead.hcrc && a2.pending > n2 && (t2.adler = xo(t2.adler, a2.pending_buf, a2.pending - n2, n2)), Po(t2), n2 = a2.pending, a2.pending === a2.pending_buf_size)) {
          o2 = 1;
          break;
        }
        o2 = a2.gzindex < a2.gzhead.name.length ? 255 & a2.gzhead.name.charCodeAt(a2.gzindex++) : 0, Ro(a2, o2);
      } while (0 !== o2);
      a2.gzhead.hcrc && a2.pending > n2 && (t2.adler = xo(t2.adler, a2.pending_buf, a2.pending - n2, n2)), 0 === o2 && (a2.gzindex = 0, a2.status = 91);
    } else a2.status = 91;
    if (91 === a2.status) if (a2.gzhead.comment) {
      n2 = a2.pending;
      do {
        if (a2.pending === a2.pending_buf_size && (a2.gzhead.hcrc && a2.pending > n2 && (t2.adler = xo(t2.adler, a2.pending_buf, a2.pending - n2, n2)), Po(t2), n2 = a2.pending, a2.pending === a2.pending_buf_size)) {
          o2 = 1;
          break;
        }
        o2 = a2.gzindex < a2.gzhead.comment.length ? 255 & a2.gzhead.comment.charCodeAt(a2.gzindex++) : 0, Ro(a2, o2);
      } while (0 !== o2);
      a2.gzhead.hcrc && a2.pending > n2 && (t2.adler = xo(t2.adler, a2.pending_buf, a2.pending - n2, n2)), 0 === o2 && (a2.status = 103);
    } else a2.status = 103;
    if (103 === a2.status && (a2.gzhead.hcrc ? (a2.pending + 2 > a2.pending_buf_size && Po(t2), a2.pending + 2 <= a2.pending_buf_size && (Ro(a2, 255 & t2.adler), Ro(a2, t2.adler >> 8 & 255), t2.adler = 0, a2.status = 113)) : a2.status = 113), 0 !== a2.pending) {
      if (Po(t2), 0 === t2.avail_out) return a2.last_flush = -1, 0;
    } else if (0 === t2.avail_in && Co(e2) <= Co(r2) && 4 !== e2) return Io(t2, -5);
    if (666 === a2.status && 0 !== t2.avail_in) return Io(t2, -5);
    if (0 !== t2.avail_in || 0 !== a2.lookahead || 0 !== e2 && 666 !== a2.status) {
      var i2 = 2 === a2.strategy ? (function(t3, e3) {
        for (var r3; ; ) {
          if (0 === t3.lookahead && (jo(t3), 0 === t3.lookahead)) {
            if (0 === e3) return 1;
            break;
          }
          if (t3.match_length = 0, r3 = ko._tr_tally(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++, r3 && (Eo(t3, false), 0 === t3.strm.avail_out)) return 1;
        }
        return t3.insert = 0, 4 === e3 ? (Eo(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.last_lit && (Eo(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
      })(a2, e2) : 3 === a2.strategy ? (function(t3, e3) {
        for (var r3, a3, n3, o3, c3 = t3.window; ; ) {
          if (t3.lookahead <= 258) {
            if (jo(t3), t3.lookahead <= 258 && 0 === e3) return 1;
            if (0 === t3.lookahead) break;
          }
          if (t3.match_length = 0, t3.lookahead >= 3 && t3.strstart > 0 && (a3 = c3[n3 = t3.strstart - 1]) === c3[++n3] && a3 === c3[++n3] && a3 === c3[++n3]) {
            o3 = t3.strstart + 258;
            do {
            } while (a3 === c3[++n3] && a3 === c3[++n3] && a3 === c3[++n3] && a3 === c3[++n3] && a3 === c3[++n3] && a3 === c3[++n3] && a3 === c3[++n3] && a3 === c3[++n3] && n3 < o3);
            t3.match_length = 258 - (o3 - n3), t3.match_length > t3.lookahead && (t3.match_length = t3.lookahead);
          }
          if (t3.match_length >= 3 ? (r3 = ko._tr_tally(t3, 1, t3.match_length - 3), t3.lookahead -= t3.match_length, t3.strstart += t3.match_length, t3.match_length = 0) : (r3 = ko._tr_tally(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++), r3 && (Eo(t3, false), 0 === t3.strm.avail_out)) return 1;
        }
        return t3.insert = 0, 4 === e3 ? (Eo(t3, true), 0 === t3.strm.avail_out ? 3 : 4) : t3.last_lit && (Eo(t3, false), 0 === t3.strm.avail_out) ? 1 : 2;
      })(a2, e2) : yo[a2.level].func(a2, e2);
      if (3 !== i2 && 4 !== i2 || (a2.status = 666), 1 === i2 || 3 === i2) return 0 === t2.avail_out && (a2.last_flush = -1), 0;
      if (2 === i2 && (1 === e2 ? ko._tr_align(a2) : 5 !== e2 && (ko._tr_stored_block(a2, 0, 0, false), 3 === e2 && (Ao(a2.head), 0 === a2.lookahead && (a2.strstart = 0, a2.block_start = 0, a2.insert = 0))), Po(t2), 0 === t2.avail_out)) return a2.last_flush = -1, 0;
    }
    return 4 !== e2 ? 0 : a2.wrap <= 0 ? 1 : (2 === a2.wrap ? (Ro(a2, 255 & t2.adler), Ro(a2, t2.adler >> 8 & 255), Ro(a2, t2.adler >> 16 & 255), Ro(a2, t2.adler >> 24 & 255), Ro(a2, 255 & t2.total_in), Ro(a2, t2.total_in >> 8 & 255), Ro(a2, t2.total_in >> 16 & 255), Ro(a2, t2.total_in >> 24 & 255)) : (To(a2, t2.adler >>> 16), To(a2, 65535 & t2.adler)), Po(t2), a2.wrap > 0 && (a2.wrap = -a2.wrap), 0 !== a2.pending ? 0 : 1);
  }, jn.deflateEnd = function(t2) {
    var e2;
    return t2 && t2.state ? 42 !== (e2 = t2.state.status) && 69 !== e2 && 73 !== e2 && 91 !== e2 && 103 !== e2 && 113 !== e2 && 666 !== e2 ? Io(t2, -2) : (t2.state = null, 113 === e2 ? Io(t2, -3) : 0) : -2;
  }, jn.deflateSetDictionary = function(t2, e2) {
    var r2, a2, n2, o2, c2, i2, s2, l2, u2 = e2.length;
    if (!t2 || !t2.state) return -2;
    if (2 === (o2 = (r2 = t2.state).wrap) || 1 === o2 && 42 !== r2.status || r2.lookahead) return -2;
    for (1 === o2 && (t2.adler = Mo(t2.adler, e2, u2, 0)), r2.wrap = 0, u2 >= r2.w_size && (0 === o2 && (Ao(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), l2 = new _o.Buf8(r2.w_size), _o.arraySet(l2, e2, u2 - r2.w_size, r2.w_size, 0), e2 = l2, u2 = r2.w_size), c2 = t2.avail_in, i2 = t2.next_in, s2 = t2.input, t2.avail_in = u2, t2.next_in = 0, t2.input = e2, jo(r2); r2.lookahead >= 3; ) {
      a2 = r2.strstart, n2 = r2.lookahead - 2;
      do {
        r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[a2 + 3 - 1]) & r2.hash_mask, r2.prev[a2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = a2, a2++;
      } while (--n2);
      r2.strstart = a2, r2.lookahead = 2, jo(r2);
    }
    return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = 2, r2.match_available = 0, t2.next_in = i2, t2.input = s2, t2.avail_in = c2, r2.wrap = o2, 0;
  }, jn.deflateInfo = "pako deflate (from Nodeca project)";
  var qo = {};
  var Wo = Tn;
  var Ho = true;
  var Zo = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (t2) {
    Ho = false;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t2) {
    Zo = false;
  }
  for (Yo = new Wo.Buf8(256), Vo = 0; Vo < 256; Vo++) Yo[Vo] = Vo >= 252 ? 6 : Vo >= 248 ? 5 : Vo >= 240 ? 4 : Vo >= 224 ? 3 : Vo >= 192 ? 2 : 1;
  var Yo;
  var Vo;
  function Qo(t2, e2) {
    if (e2 < 65534 && (t2.subarray && Zo || !t2.subarray && Ho)) return String.fromCharCode.apply(null, Wo.shrinkBuf(t2, e2));
    for (var r2 = "", a2 = 0; a2 < e2; a2++) r2 += String.fromCharCode(t2[a2]);
    return r2;
  }
  Yo[254] = Yo[254] = 1, qo.string2buf = function(t2) {
    var e2, r2, a2, n2, o2, c2 = t2.length, i2 = 0;
    for (n2 = 0; n2 < c2; n2++) 55296 == (64512 & (r2 = t2.charCodeAt(n2))) && n2 + 1 < c2 && 56320 == (64512 & (a2 = t2.charCodeAt(n2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (a2 - 56320), n2++), i2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
    for (e2 = new Wo.Buf8(i2), o2 = 0, n2 = 0; o2 < i2; n2++) 55296 == (64512 & (r2 = t2.charCodeAt(n2))) && n2 + 1 < c2 && 56320 == (64512 & (a2 = t2.charCodeAt(n2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (a2 - 56320), n2++), r2 < 128 ? e2[o2++] = r2 : r2 < 2048 ? (e2[o2++] = 192 | r2 >>> 6, e2[o2++] = 128 | 63 & r2) : r2 < 65536 ? (e2[o2++] = 224 | r2 >>> 12, e2[o2++] = 128 | r2 >>> 6 & 63, e2[o2++] = 128 | 63 & r2) : (e2[o2++] = 240 | r2 >>> 18, e2[o2++] = 128 | r2 >>> 12 & 63, e2[o2++] = 128 | r2 >>> 6 & 63, e2[o2++] = 128 | 63 & r2);
    return e2;
  }, qo.buf2binstring = function(t2) {
    return Qo(t2, t2.length);
  }, qo.binstring2buf = function(t2) {
    for (var e2 = new Wo.Buf8(t2.length), r2 = 0, a2 = e2.length; r2 < a2; r2++) e2[r2] = t2.charCodeAt(r2);
    return e2;
  }, qo.buf2string = function(t2, e2) {
    var r2, a2, n2, o2, c2 = e2 || t2.length, i2 = new Array(2 * c2);
    for (a2 = 0, r2 = 0; r2 < c2; ) if ((n2 = t2[r2++]) < 128) i2[a2++] = n2;
    else if ((o2 = Yo[n2]) > 4) i2[a2++] = 65533, r2 += o2 - 1;
    else {
      for (n2 &= 2 === o2 ? 31 : 3 === o2 ? 15 : 7; o2 > 1 && r2 < c2; ) n2 = n2 << 6 | 63 & t2[r2++], o2--;
      o2 > 1 ? i2[a2++] = 65533 : n2 < 65536 ? i2[a2++] = n2 : (n2 -= 65536, i2[a2++] = 55296 | n2 >> 10 & 1023, i2[a2++] = 56320 | 1023 & n2);
    }
    return Qo(i2, a2);
  }, qo.utf8border = function(t2, e2) {
    var r2;
    for ((e2 = e2 || t2.length) > t2.length && (e2 = t2.length), r2 = e2 - 1; r2 >= 0 && 128 == (192 & t2[r2]); ) r2--;
    return r2 < 0 || 0 === r2 ? e2 : r2 + Yo[t2[r2]] > e2 ? r2 : e2;
  };
  var $o = function() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  };
  var Ko = jn;
  var Xo = Tn;
  var Jo = qo;
  var tc = wo;
  var ec = $o;
  var rc = Object.prototype.toString;
  function ac(t2) {
    if (!(this instanceof ac)) return new ac(t2);
    this.options = Xo.assign({ level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" }, t2 || {});
    var e2 = this.options;
    e2.raw && e2.windowBits > 0 ? e2.windowBits = -e2.windowBits : e2.gzip && e2.windowBits > 0 && e2.windowBits < 16 && (e2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new ec(), this.strm.avail_out = 0;
    var r2 = Ko.deflateInit2(this.strm, e2.level, e2.method, e2.windowBits, e2.memLevel, e2.strategy);
    if (0 !== r2) throw new Error(tc[r2]);
    if (e2.header && Ko.deflateSetHeader(this.strm, e2.header), e2.dictionary) {
      var a2;
      if (a2 = "string" == typeof e2.dictionary ? Jo.string2buf(e2.dictionary) : "[object ArrayBuffer]" === rc.call(e2.dictionary) ? new Uint8Array(e2.dictionary) : e2.dictionary, 0 !== (r2 = Ko.deflateSetDictionary(this.strm, a2))) throw new Error(tc[r2]);
      this._dict_set = true;
    }
  }
  function nc(t2, e2) {
    var r2 = new ac(e2);
    if (r2.push(t2, true), r2.err) throw r2.msg || tc[r2.err];
    return r2.result;
  }
  ac.prototype.push = function(t2, e2) {
    var r2, a2, n2 = this.strm, o2 = this.options.chunkSize;
    if (this.ended) return false;
    a2 = e2 === ~~e2 ? e2 : true === e2 ? 4 : 0, "string" == typeof t2 ? n2.input = Jo.string2buf(t2) : "[object ArrayBuffer]" === rc.call(t2) ? n2.input = new Uint8Array(t2) : n2.input = t2, n2.next_in = 0, n2.avail_in = n2.input.length;
    do {
      if (0 === n2.avail_out && (n2.output = new Xo.Buf8(o2), n2.next_out = 0, n2.avail_out = o2), 1 !== (r2 = Ko.deflate(n2, a2)) && 0 !== r2) return this.onEnd(r2), this.ended = true, false;
      0 !== n2.avail_out && (0 !== n2.avail_in || 4 !== a2 && 2 !== a2) || ("string" === this.options.to ? this.onData(Jo.buf2binstring(Xo.shrinkBuf(n2.output, n2.next_out))) : this.onData(Xo.shrinkBuf(n2.output, n2.next_out)));
    } while ((n2.avail_in > 0 || 0 === n2.avail_out) && 1 !== r2);
    return 4 === a2 ? (r2 = Ko.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, 0 === r2) : 2 !== a2 || (this.onEnd(0), n2.avail_out = 0, true);
  }, ac.prototype.onData = function(t2) {
    this.chunks.push(t2);
  }, ac.prototype.onEnd = function(t2) {
    0 === t2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Xo.flattenChunks(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
  }, On.Deflate = ac, On.deflate = nc, On.deflateRaw = function(t2, e2) {
    return (e2 = e2 || {}).raw = true, nc(t2, e2);
  }, On.gzip = function(t2, e2) {
    return (e2 = e2 || {}).gzip = true, nc(t2, e2);
  };
  var oc = {};
  var cc = {};
  var ic = Tn;
  var sc = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
  var lc = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
  var uc = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
  var fc = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
  var hc = Tn;
  var dc = vo;
  var pc = Lo;
  var bc = function(t2, e2) {
    var r2, a2, n2, o2, c2, i2, s2, l2, u2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2, x2, S2;
    r2 = t2.state, a2 = t2.next_in, x2 = t2.input, n2 = a2 + (t2.avail_in - 5), o2 = t2.next_out, S2 = t2.output, c2 = o2 - (e2 - t2.avail_out), i2 = o2 + (t2.avail_out - 257), s2 = r2.dmax, l2 = r2.wsize, u2 = r2.whave, f2 = r2.wnext, h2 = r2.window, d2 = r2.hold, p2 = r2.bits, b2 = r2.lencode, g2 = r2.distcode, v2 = (1 << r2.lenbits) - 1, m2 = (1 << r2.distbits) - 1;
    t: do {
      p2 < 15 && (d2 += x2[a2++] << p2, p2 += 8, d2 += x2[a2++] << p2, p2 += 8), y2 = b2[d2 & v2];
      e: for (; ; ) {
        if (d2 >>>= L2 = y2 >>> 24, p2 -= L2, 0 === (L2 = y2 >>> 16 & 255)) S2[o2++] = 65535 & y2;
        else {
          if (!(16 & L2)) {
            if (0 == (64 & L2)) {
              y2 = b2[(65535 & y2) + (d2 & (1 << L2) - 1)];
              continue e;
            }
            if (32 & L2) {
              r2.mode = 12;
              break t;
            }
            t2.msg = "invalid literal/length code", r2.mode = 30;
            break t;
          }
          w2 = 65535 & y2, (L2 &= 15) && (p2 < L2 && (d2 += x2[a2++] << p2, p2 += 8), w2 += d2 & (1 << L2) - 1, d2 >>>= L2, p2 -= L2), p2 < 15 && (d2 += x2[a2++] << p2, p2 += 8, d2 += x2[a2++] << p2, p2 += 8), y2 = g2[d2 & m2];
          r: for (; ; ) {
            if (d2 >>>= L2 = y2 >>> 24, p2 -= L2, !(16 & (L2 = y2 >>> 16 & 255))) {
              if (0 == (64 & L2)) {
                y2 = g2[(65535 & y2) + (d2 & (1 << L2) - 1)];
                continue r;
              }
              t2.msg = "invalid distance code", r2.mode = 30;
              break t;
            }
            if (_2 = 65535 & y2, p2 < (L2 &= 15) && (d2 += x2[a2++] << p2, (p2 += 8) < L2 && (d2 += x2[a2++] << p2, p2 += 8)), (_2 += d2 & (1 << L2) - 1) > s2) {
              t2.msg = "invalid distance too far back", r2.mode = 30;
              break t;
            }
            if (d2 >>>= L2, p2 -= L2, _2 > (L2 = o2 - c2)) {
              if ((L2 = _2 - L2) > u2 && r2.sane) {
                t2.msg = "invalid distance too far back", r2.mode = 30;
                break t;
              }
              if (k2 = 0, M2 = h2, 0 === f2) {
                if (k2 += l2 - L2, L2 < w2) {
                  w2 -= L2;
                  do {
                    S2[o2++] = h2[k2++];
                  } while (--L2);
                  k2 = o2 - _2, M2 = S2;
                }
              } else if (f2 < L2) {
                if (k2 += l2 + f2 - L2, (L2 -= f2) < w2) {
                  w2 -= L2;
                  do {
                    S2[o2++] = h2[k2++];
                  } while (--L2);
                  if (k2 = 0, f2 < w2) {
                    w2 -= L2 = f2;
                    do {
                      S2[o2++] = h2[k2++];
                    } while (--L2);
                    k2 = o2 - _2, M2 = S2;
                  }
                }
              } else if (k2 += f2 - L2, L2 < w2) {
                w2 -= L2;
                do {
                  S2[o2++] = h2[k2++];
                } while (--L2);
                k2 = o2 - _2, M2 = S2;
              }
              for (; w2 > 2; ) S2[o2++] = M2[k2++], S2[o2++] = M2[k2++], S2[o2++] = M2[k2++], w2 -= 3;
              w2 && (S2[o2++] = M2[k2++], w2 > 1 && (S2[o2++] = M2[k2++]));
            } else {
              k2 = o2 - _2;
              do {
                S2[o2++] = S2[k2++], S2[o2++] = S2[k2++], S2[o2++] = S2[k2++], w2 -= 3;
              } while (w2 > 2);
              w2 && (S2[o2++] = S2[k2++], w2 > 1 && (S2[o2++] = S2[k2++]));
            }
            break;
          }
        }
        break;
      }
    } while (a2 < n2 && o2 < i2);
    a2 -= w2 = p2 >> 3, d2 &= (1 << (p2 -= w2 << 3)) - 1, t2.next_in = a2, t2.next_out = o2, t2.avail_in = a2 < n2 ? n2 - a2 + 5 : 5 - (a2 - n2), t2.avail_out = o2 < i2 ? i2 - o2 + 257 : 257 - (o2 - i2), r2.hold = d2, r2.bits = p2;
  };
  var gc = function(t2, e2, r2, a2, n2, o2, c2, i2) {
    var s2, l2, u2, f2, h2, d2, p2, b2, g2, v2 = i2.bits, m2 = 0, y2 = 0, L2 = 0, w2 = 0, _2 = 0, k2 = 0, M2 = 0, x2 = 0, S2 = 0, I2 = 0, C2 = null, A2 = 0, P2 = new ic.Buf16(16), E2 = new ic.Buf16(16), R2 = null, T2 = 0;
    for (m2 = 0; m2 <= 15; m2++) P2[m2] = 0;
    for (y2 = 0; y2 < a2; y2++) P2[e2[r2 + y2]]++;
    for (_2 = v2, w2 = 15; w2 >= 1 && 0 === P2[w2]; w2--) ;
    if (_2 > w2 && (_2 = w2), 0 === w2) return n2[o2++] = 20971520, n2[o2++] = 20971520, i2.bits = 1, 0;
    for (L2 = 1; L2 < w2 && 0 === P2[L2]; L2++) ;
    for (_2 < L2 && (_2 = L2), x2 = 1, m2 = 1; m2 <= 15; m2++) if (x2 <<= 1, (x2 -= P2[m2]) < 0) return -1;
    if (x2 > 0 && (0 === t2 || 1 !== w2)) return -1;
    for (E2[1] = 0, m2 = 1; m2 < 15; m2++) E2[m2 + 1] = E2[m2] + P2[m2];
    for (y2 = 0; y2 < a2; y2++) 0 !== e2[r2 + y2] && (c2[E2[e2[r2 + y2]]++] = y2);
    if (0 === t2 ? (C2 = R2 = c2, d2 = 19) : 1 === t2 ? (C2 = sc, A2 -= 257, R2 = lc, T2 -= 257, d2 = 256) : (C2 = uc, R2 = fc, d2 = -1), I2 = 0, y2 = 0, m2 = L2, h2 = o2, k2 = _2, M2 = 0, u2 = -1, f2 = (S2 = 1 << _2) - 1, 1 === t2 && S2 > 852 || 2 === t2 && S2 > 592) return 1;
    for (; ; ) {
      p2 = m2 - M2, c2[y2] < d2 ? (b2 = 0, g2 = c2[y2]) : c2[y2] > d2 ? (b2 = R2[T2 + c2[y2]], g2 = C2[A2 + c2[y2]]) : (b2 = 96, g2 = 0), s2 = 1 << m2 - M2, L2 = l2 = 1 << k2;
      do {
        n2[h2 + (I2 >> M2) + (l2 -= s2)] = p2 << 24 | b2 << 16 | g2 | 0;
      } while (0 !== l2);
      for (s2 = 1 << m2 - 1; I2 & s2; ) s2 >>= 1;
      if (0 !== s2 ? (I2 &= s2 - 1, I2 += s2) : I2 = 0, y2++, 0 == --P2[m2]) {
        if (m2 === w2) break;
        m2 = e2[r2 + c2[y2]];
      }
      if (m2 > _2 && (I2 & f2) !== u2) {
        for (0 === M2 && (M2 = _2), h2 += L2, x2 = 1 << (k2 = m2 - M2); k2 + M2 < w2 && !((x2 -= P2[k2 + M2]) <= 0); ) k2++, x2 <<= 1;
        if (S2 += 1 << k2, 1 === t2 && S2 > 852 || 2 === t2 && S2 > 592) return 1;
        n2[u2 = I2 & f2] = _2 << 24 | k2 << 16 | h2 - o2 | 0;
      }
    }
    return 0 !== I2 && (n2[h2 + I2] = m2 - M2 << 24 | 64 << 16 | 0), i2.bits = _2, 0;
  };
  function vc(t2) {
    return (t2 >>> 24 & 255) + (t2 >>> 8 & 65280) + ((65280 & t2) << 8) + ((255 & t2) << 24);
  }
  function mc() {
    this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new hc.Buf16(320), this.work = new hc.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function yc(t2) {
    var e2;
    return t2 && t2.state ? (e2 = t2.state, t2.total_in = t2.total_out = e2.total = 0, t2.msg = "", e2.wrap && (t2.adler = 1 & e2.wrap), e2.mode = 1, e2.last = 0, e2.havedict = 0, e2.dmax = 32768, e2.head = null, e2.hold = 0, e2.bits = 0, e2.lencode = e2.lendyn = new hc.Buf32(852), e2.distcode = e2.distdyn = new hc.Buf32(592), e2.sane = 1, e2.back = -1, 0) : -2;
  }
  function Lc(t2) {
    var e2;
    return t2 && t2.state ? ((e2 = t2.state).wsize = 0, e2.whave = 0, e2.wnext = 0, yc(t2)) : -2;
  }
  function wc(t2, e2) {
    var r2, a2;
    return t2 && t2.state ? (a2 = t2.state, e2 < 0 ? (r2 = 0, e2 = -e2) : (r2 = 1 + (e2 >> 4), e2 < 48 && (e2 &= 15)), e2 && (e2 < 8 || e2 > 15) ? -2 : (null !== a2.window && a2.wbits !== e2 && (a2.window = null), a2.wrap = r2, a2.wbits = e2, Lc(t2))) : -2;
  }
  function _c(t2, e2) {
    var r2, a2;
    return t2 ? (a2 = new mc(), t2.state = a2, a2.window = null, 0 !== (r2 = wc(t2, e2)) && (t2.state = null), r2) : -2;
  }
  var kc;
  var Mc;
  var xc = true;
  function Sc(t2) {
    if (xc) {
      var e2;
      for (kc = new hc.Buf32(512), Mc = new hc.Buf32(32), e2 = 0; e2 < 144; ) t2.lens[e2++] = 8;
      for (; e2 < 256; ) t2.lens[e2++] = 9;
      for (; e2 < 280; ) t2.lens[e2++] = 7;
      for (; e2 < 288; ) t2.lens[e2++] = 8;
      for (gc(1, t2.lens, 0, 288, kc, 0, t2.work, { bits: 9 }), e2 = 0; e2 < 32; ) t2.lens[e2++] = 5;
      gc(2, t2.lens, 0, 32, Mc, 0, t2.work, { bits: 5 }), xc = false;
    }
    t2.lencode = kc, t2.lenbits = 9, t2.distcode = Mc, t2.distbits = 5;
  }
  function Ic(t2, e2, r2, a2) {
    var n2, o2 = t2.state;
    return null === o2.window && (o2.wsize = 1 << o2.wbits, o2.wnext = 0, o2.whave = 0, o2.window = new hc.Buf8(o2.wsize)), a2 >= o2.wsize ? (hc.arraySet(o2.window, e2, r2 - o2.wsize, o2.wsize, 0), o2.wnext = 0, o2.whave = o2.wsize) : ((n2 = o2.wsize - o2.wnext) > a2 && (n2 = a2), hc.arraySet(o2.window, e2, r2 - a2, n2, o2.wnext), (a2 -= n2) ? (hc.arraySet(o2.window, e2, r2 - a2, a2, 0), o2.wnext = a2, o2.whave = o2.wsize) : (o2.wnext += n2, o2.wnext === o2.wsize && (o2.wnext = 0), o2.whave < o2.wsize && (o2.whave += n2))), 0;
  }
  cc.inflateReset = Lc, cc.inflateReset2 = wc, cc.inflateResetKeep = yc, cc.inflateInit = function(t2) {
    return _c(t2, 15);
  }, cc.inflateInit2 = _c, cc.inflate = function(t2, e2) {
    var r2, a2, n2, o2, c2, i2, s2, l2, u2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2, x2, S2 = 0, I2 = new hc.Buf8(4), C2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!t2 || !t2.state || !t2.output || !t2.input && 0 !== t2.avail_in) return -2;
    12 === (r2 = t2.state).mode && (r2.mode = 13), c2 = t2.next_out, n2 = t2.output, s2 = t2.avail_out, o2 = t2.next_in, a2 = t2.input, i2 = t2.avail_in, l2 = r2.hold, u2 = r2.bits, f2 = i2, h2 = s2, k2 = 0;
    t: for (; ; ) switch (r2.mode) {
      case 1:
        if (0 === r2.wrap) {
          r2.mode = 13;
          break;
        }
        for (; u2 < 16; ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        if (2 & r2.wrap && 35615 === l2) {
          r2.check = 0, I2[0] = 255 & l2, I2[1] = l2 >>> 8 & 255, r2.check = pc(r2.check, I2, 2, 0), l2 = 0, u2 = 0, r2.mode = 2;
          break;
        }
        if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & l2) << 8) + (l2 >> 8)) % 31) {
          t2.msg = "incorrect header check", r2.mode = 30;
          break;
        }
        if (8 != (15 & l2)) {
          t2.msg = "unknown compression method", r2.mode = 30;
          break;
        }
        if (u2 -= 4, _2 = 8 + (15 & (l2 >>>= 4)), 0 === r2.wbits) r2.wbits = _2;
        else if (_2 > r2.wbits) {
          t2.msg = "invalid window size", r2.mode = 30;
          break;
        }
        r2.dmax = 1 << _2, t2.adler = r2.check = 1, r2.mode = 512 & l2 ? 10 : 12, l2 = 0, u2 = 0;
        break;
      case 2:
        for (; u2 < 16; ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        if (r2.flags = l2, 8 != (255 & r2.flags)) {
          t2.msg = "unknown compression method", r2.mode = 30;
          break;
        }
        if (57344 & r2.flags) {
          t2.msg = "unknown header flags set", r2.mode = 30;
          break;
        }
        r2.head && (r2.head.text = l2 >> 8 & 1), 512 & r2.flags && (I2[0] = 255 & l2, I2[1] = l2 >>> 8 & 255, r2.check = pc(r2.check, I2, 2, 0)), l2 = 0, u2 = 0, r2.mode = 3;
      case 3:
        for (; u2 < 32; ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        r2.head && (r2.head.time = l2), 512 & r2.flags && (I2[0] = 255 & l2, I2[1] = l2 >>> 8 & 255, I2[2] = l2 >>> 16 & 255, I2[3] = l2 >>> 24 & 255, r2.check = pc(r2.check, I2, 4, 0)), l2 = 0, u2 = 0, r2.mode = 4;
      case 4:
        for (; u2 < 16; ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        r2.head && (r2.head.xflags = 255 & l2, r2.head.os = l2 >> 8), 512 & r2.flags && (I2[0] = 255 & l2, I2[1] = l2 >>> 8 & 255, r2.check = pc(r2.check, I2, 2, 0)), l2 = 0, u2 = 0, r2.mode = 5;
      case 5:
        if (1024 & r2.flags) {
          for (; u2 < 16; ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          r2.length = l2, r2.head && (r2.head.extra_len = l2), 512 & r2.flags && (I2[0] = 255 & l2, I2[1] = l2 >>> 8 & 255, r2.check = pc(r2.check, I2, 2, 0)), l2 = 0, u2 = 0;
        } else r2.head && (r2.head.extra = null);
        r2.mode = 6;
      case 6:
        if (1024 & r2.flags && ((d2 = r2.length) > i2 && (d2 = i2), d2 && (r2.head && (_2 = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), hc.arraySet(r2.head.extra, a2, o2, d2, _2)), 512 & r2.flags && (r2.check = pc(r2.check, a2, d2, o2)), i2 -= d2, o2 += d2, r2.length -= d2), r2.length)) break t;
        r2.length = 0, r2.mode = 7;
      case 7:
        if (2048 & r2.flags) {
          if (0 === i2) break t;
          d2 = 0;
          do {
            _2 = a2[o2 + d2++], r2.head && _2 && r2.length < 65536 && (r2.head.name += String.fromCharCode(_2));
          } while (_2 && d2 < i2);
          if (512 & r2.flags && (r2.check = pc(r2.check, a2, d2, o2)), i2 -= d2, o2 += d2, _2) break t;
        } else r2.head && (r2.head.name = null);
        r2.length = 0, r2.mode = 8;
      case 8:
        if (4096 & r2.flags) {
          if (0 === i2) break t;
          d2 = 0;
          do {
            _2 = a2[o2 + d2++], r2.head && _2 && r2.length < 65536 && (r2.head.comment += String.fromCharCode(_2));
          } while (_2 && d2 < i2);
          if (512 & r2.flags && (r2.check = pc(r2.check, a2, d2, o2)), i2 -= d2, o2 += d2, _2) break t;
        } else r2.head && (r2.head.comment = null);
        r2.mode = 9;
      case 9:
        if (512 & r2.flags) {
          for (; u2 < 16; ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          if (l2 !== (65535 & r2.check)) {
            t2.msg = "header crc mismatch", r2.mode = 30;
            break;
          }
          l2 = 0, u2 = 0;
        }
        r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), t2.adler = r2.check = 0, r2.mode = 12;
        break;
      case 10:
        for (; u2 < 32; ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        t2.adler = r2.check = vc(l2), l2 = 0, u2 = 0, r2.mode = 11;
      case 11:
        if (0 === r2.havedict) return t2.next_out = c2, t2.avail_out = s2, t2.next_in = o2, t2.avail_in = i2, r2.hold = l2, r2.bits = u2, 2;
        t2.adler = r2.check = 1, r2.mode = 12;
      case 12:
        if (5 === e2 || 6 === e2) break t;
      case 13:
        if (r2.last) {
          l2 >>>= 7 & u2, u2 -= 7 & u2, r2.mode = 27;
          break;
        }
        for (; u2 < 3; ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        switch (r2.last = 1 & l2, u2 -= 1, 3 & (l2 >>>= 1)) {
          case 0:
            r2.mode = 14;
            break;
          case 1:
            if (Sc(r2), r2.mode = 20, 6 === e2) {
              l2 >>>= 2, u2 -= 2;
              break t;
            }
            break;
          case 2:
            r2.mode = 17;
            break;
          case 3:
            t2.msg = "invalid block type", r2.mode = 30;
        }
        l2 >>>= 2, u2 -= 2;
        break;
      case 14:
        for (l2 >>>= 7 & u2, u2 -= 7 & u2; u2 < 32; ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        if ((65535 & l2) != (l2 >>> 16 ^ 65535)) {
          t2.msg = "invalid stored block lengths", r2.mode = 30;
          break;
        }
        if (r2.length = 65535 & l2, l2 = 0, u2 = 0, r2.mode = 15, 6 === e2) break t;
      case 15:
        r2.mode = 16;
      case 16:
        if (d2 = r2.length) {
          if (d2 > i2 && (d2 = i2), d2 > s2 && (d2 = s2), 0 === d2) break t;
          hc.arraySet(n2, a2, o2, d2, c2), i2 -= d2, o2 += d2, s2 -= d2, c2 += d2, r2.length -= d2;
          break;
        }
        r2.mode = 12;
        break;
      case 17:
        for (; u2 < 14; ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        if (r2.nlen = 257 + (31 & l2), l2 >>>= 5, u2 -= 5, r2.ndist = 1 + (31 & l2), l2 >>>= 5, u2 -= 5, r2.ncode = 4 + (15 & l2), l2 >>>= 4, u2 -= 4, r2.nlen > 286 || r2.ndist > 30) {
          t2.msg = "too many length or distance symbols", r2.mode = 30;
          break;
        }
        r2.have = 0, r2.mode = 18;
      case 18:
        for (; r2.have < r2.ncode; ) {
          for (; u2 < 3; ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          r2.lens[C2[r2.have++]] = 7 & l2, l2 >>>= 3, u2 -= 3;
        }
        for (; r2.have < 19; ) r2.lens[C2[r2.have++]] = 0;
        if (r2.lencode = r2.lendyn, r2.lenbits = 7, M2 = { bits: r2.lenbits }, k2 = gc(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, M2), r2.lenbits = M2.bits, k2) {
          t2.msg = "invalid code lengths set", r2.mode = 30;
          break;
        }
        r2.have = 0, r2.mode = 19;
      case 19:
        for (; r2.have < r2.nlen + r2.ndist; ) {
          for (; v2 = (S2 = r2.lencode[l2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, m2 = 65535 & S2, !((g2 = S2 >>> 24) <= u2); ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          if (m2 < 16) l2 >>>= g2, u2 -= g2, r2.lens[r2.have++] = m2;
          else {
            if (16 === m2) {
              for (x2 = g2 + 2; u2 < x2; ) {
                if (0 === i2) break t;
                i2--, l2 += a2[o2++] << u2, u2 += 8;
              }
              if (l2 >>>= g2, u2 -= g2, 0 === r2.have) {
                t2.msg = "invalid bit length repeat", r2.mode = 30;
                break;
              }
              _2 = r2.lens[r2.have - 1], d2 = 3 + (3 & l2), l2 >>>= 2, u2 -= 2;
            } else if (17 === m2) {
              for (x2 = g2 + 3; u2 < x2; ) {
                if (0 === i2) break t;
                i2--, l2 += a2[o2++] << u2, u2 += 8;
              }
              u2 -= g2, _2 = 0, d2 = 3 + (7 & (l2 >>>= g2)), l2 >>>= 3, u2 -= 3;
            } else {
              for (x2 = g2 + 7; u2 < x2; ) {
                if (0 === i2) break t;
                i2--, l2 += a2[o2++] << u2, u2 += 8;
              }
              u2 -= g2, _2 = 0, d2 = 11 + (127 & (l2 >>>= g2)), l2 >>>= 7, u2 -= 7;
            }
            if (r2.have + d2 > r2.nlen + r2.ndist) {
              t2.msg = "invalid bit length repeat", r2.mode = 30;
              break;
            }
            for (; d2--; ) r2.lens[r2.have++] = _2;
          }
        }
        if (30 === r2.mode) break;
        if (0 === r2.lens[256]) {
          t2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
          break;
        }
        if (r2.lenbits = 9, M2 = { bits: r2.lenbits }, k2 = gc(1, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, M2), r2.lenbits = M2.bits, k2) {
          t2.msg = "invalid literal/lengths set", r2.mode = 30;
          break;
        }
        if (r2.distbits = 6, r2.distcode = r2.distdyn, M2 = { bits: r2.distbits }, k2 = gc(2, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, M2), r2.distbits = M2.bits, k2) {
          t2.msg = "invalid distances set", r2.mode = 30;
          break;
        }
        if (r2.mode = 20, 6 === e2) break t;
      case 20:
        r2.mode = 21;
      case 21:
        if (i2 >= 6 && s2 >= 258) {
          t2.next_out = c2, t2.avail_out = s2, t2.next_in = o2, t2.avail_in = i2, r2.hold = l2, r2.bits = u2, bc(t2, h2), c2 = t2.next_out, n2 = t2.output, s2 = t2.avail_out, o2 = t2.next_in, a2 = t2.input, i2 = t2.avail_in, l2 = r2.hold, u2 = r2.bits, 12 === r2.mode && (r2.back = -1);
          break;
        }
        for (r2.back = 0; v2 = (S2 = r2.lencode[l2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, m2 = 65535 & S2, !((g2 = S2 >>> 24) <= u2); ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        if (v2 && 0 == (240 & v2)) {
          for (y2 = g2, L2 = v2, w2 = m2; v2 = (S2 = r2.lencode[w2 + ((l2 & (1 << y2 + L2) - 1) >> y2)]) >>> 16 & 255, m2 = 65535 & S2, !(y2 + (g2 = S2 >>> 24) <= u2); ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          l2 >>>= y2, u2 -= y2, r2.back += y2;
        }
        if (l2 >>>= g2, u2 -= g2, r2.back += g2, r2.length = m2, 0 === v2) {
          r2.mode = 26;
          break;
        }
        if (32 & v2) {
          r2.back = -1, r2.mode = 12;
          break;
        }
        if (64 & v2) {
          t2.msg = "invalid literal/length code", r2.mode = 30;
          break;
        }
        r2.extra = 15 & v2, r2.mode = 22;
      case 22:
        if (r2.extra) {
          for (x2 = r2.extra; u2 < x2; ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          r2.length += l2 & (1 << r2.extra) - 1, l2 >>>= r2.extra, u2 -= r2.extra, r2.back += r2.extra;
        }
        r2.was = r2.length, r2.mode = 23;
      case 23:
        for (; v2 = (S2 = r2.distcode[l2 & (1 << r2.distbits) - 1]) >>> 16 & 255, m2 = 65535 & S2, !((g2 = S2 >>> 24) <= u2); ) {
          if (0 === i2) break t;
          i2--, l2 += a2[o2++] << u2, u2 += 8;
        }
        if (0 == (240 & v2)) {
          for (y2 = g2, L2 = v2, w2 = m2; v2 = (S2 = r2.distcode[w2 + ((l2 & (1 << y2 + L2) - 1) >> y2)]) >>> 16 & 255, m2 = 65535 & S2, !(y2 + (g2 = S2 >>> 24) <= u2); ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          l2 >>>= y2, u2 -= y2, r2.back += y2;
        }
        if (l2 >>>= g2, u2 -= g2, r2.back += g2, 64 & v2) {
          t2.msg = "invalid distance code", r2.mode = 30;
          break;
        }
        r2.offset = m2, r2.extra = 15 & v2, r2.mode = 24;
      case 24:
        if (r2.extra) {
          for (x2 = r2.extra; u2 < x2; ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          r2.offset += l2 & (1 << r2.extra) - 1, l2 >>>= r2.extra, u2 -= r2.extra, r2.back += r2.extra;
        }
        if (r2.offset > r2.dmax) {
          t2.msg = "invalid distance too far back", r2.mode = 30;
          break;
        }
        r2.mode = 25;
      case 25:
        if (0 === s2) break t;
        if (d2 = h2 - s2, r2.offset > d2) {
          if ((d2 = r2.offset - d2) > r2.whave && r2.sane) {
            t2.msg = "invalid distance too far back", r2.mode = 30;
            break;
          }
          d2 > r2.wnext ? (d2 -= r2.wnext, p2 = r2.wsize - d2) : p2 = r2.wnext - d2, d2 > r2.length && (d2 = r2.length), b2 = r2.window;
        } else b2 = n2, p2 = c2 - r2.offset, d2 = r2.length;
        d2 > s2 && (d2 = s2), s2 -= d2, r2.length -= d2;
        do {
          n2[c2++] = b2[p2++];
        } while (--d2);
        0 === r2.length && (r2.mode = 21);
        break;
      case 26:
        if (0 === s2) break t;
        n2[c2++] = r2.length, s2--, r2.mode = 21;
        break;
      case 27:
        if (r2.wrap) {
          for (; u2 < 32; ) {
            if (0 === i2) break t;
            i2--, l2 |= a2[o2++] << u2, u2 += 8;
          }
          if (h2 -= s2, t2.total_out += h2, r2.total += h2, h2 && (t2.adler = r2.check = r2.flags ? pc(r2.check, n2, h2, c2 - h2) : dc(r2.check, n2, h2, c2 - h2)), h2 = s2, (r2.flags ? l2 : vc(l2)) !== r2.check) {
            t2.msg = "incorrect data check", r2.mode = 30;
            break;
          }
          l2 = 0, u2 = 0;
        }
        r2.mode = 28;
      case 28:
        if (r2.wrap && r2.flags) {
          for (; u2 < 32; ) {
            if (0 === i2) break t;
            i2--, l2 += a2[o2++] << u2, u2 += 8;
          }
          if (l2 !== (4294967295 & r2.total)) {
            t2.msg = "incorrect length check", r2.mode = 30;
            break;
          }
          l2 = 0, u2 = 0;
        }
        r2.mode = 29;
      case 29:
        k2 = 1;
        break t;
      case 30:
        k2 = -3;
        break t;
      case 31:
        return -4;
      default:
        return -2;
    }
    return t2.next_out = c2, t2.avail_out = s2, t2.next_in = o2, t2.avail_in = i2, r2.hold = l2, r2.bits = u2, (r2.wsize || h2 !== t2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== e2)) && Ic(t2, t2.output, t2.next_out, h2 - t2.avail_out), f2 -= t2.avail_in, h2 -= t2.avail_out, t2.total_in += f2, t2.total_out += h2, r2.total += h2, r2.wrap && h2 && (t2.adler = r2.check = r2.flags ? pc(r2.check, n2, h2, t2.next_out - h2) : dc(r2.check, n2, h2, t2.next_out - h2)), t2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 === f2 && 0 === h2 || 4 === e2) && 0 === k2 && (k2 = -5), k2;
  }, cc.inflateEnd = function(t2) {
    if (!t2 || !t2.state) return -2;
    var e2 = t2.state;
    return e2.window && (e2.window = null), t2.state = null, 0;
  }, cc.inflateGetHeader = function(t2, e2) {
    var r2;
    return t2 && t2.state ? 0 == (2 & (r2 = t2.state).wrap) ? -2 : (r2.head = e2, e2.done = false, 0) : -2;
  }, cc.inflateSetDictionary = function(t2, e2) {
    var r2, a2 = e2.length;
    return t2 && t2.state ? 0 !== (r2 = t2.state).wrap && 11 !== r2.mode ? -2 : 11 === r2.mode && dc(1, e2, a2, 0) !== r2.check ? -3 : Ic(t2, e2, a2, a2) ? (r2.mode = 31, -4) : (r2.havedict = 1, 0) : -2;
  }, cc.inflateInfo = "pako inflate (from Nodeca project)";
  var Cc = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
  var Ac = cc;
  var Pc = Tn;
  var Ec = qo;
  var Rc = Cc;
  var Tc = wo;
  var Oc = $o;
  var jc = function() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
  };
  var zc = Object.prototype.toString;
  function Bc(t2) {
    if (!(this instanceof Bc)) return new Bc(t2);
    this.options = Pc.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t2 || {});
    var e2 = this.options;
    e2.raw && e2.windowBits >= 0 && e2.windowBits < 16 && (e2.windowBits = -e2.windowBits, 0 === e2.windowBits && (e2.windowBits = -15)), !(e2.windowBits >= 0 && e2.windowBits < 16) || t2 && t2.windowBits || (e2.windowBits += 32), e2.windowBits > 15 && e2.windowBits < 48 && 0 == (15 & e2.windowBits) && (e2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Oc(), this.strm.avail_out = 0;
    var r2 = Ac.inflateInit2(this.strm, e2.windowBits);
    if (r2 !== Rc.Z_OK) throw new Error(Tc[r2]);
    if (this.header = new jc(), Ac.inflateGetHeader(this.strm, this.header), e2.dictionary && ("string" == typeof e2.dictionary ? e2.dictionary = Ec.string2buf(e2.dictionary) : "[object ArrayBuffer]" === zc.call(e2.dictionary) && (e2.dictionary = new Uint8Array(e2.dictionary)), e2.raw && (r2 = Ac.inflateSetDictionary(this.strm, e2.dictionary)) !== Rc.Z_OK)) throw new Error(Tc[r2]);
  }
  function Dc(t2, e2) {
    var r2 = new Bc(e2);
    if (r2.push(t2, true), r2.err) throw r2.msg || Tc[r2.err];
    return r2.result;
  }
  Bc.prototype.push = function(t2, e2) {
    var r2, a2, n2, o2, c2, i2 = this.strm, s2 = this.options.chunkSize, l2 = this.options.dictionary, u2 = false;
    if (this.ended) return false;
    a2 = e2 === ~~e2 ? e2 : true === e2 ? Rc.Z_FINISH : Rc.Z_NO_FLUSH, "string" == typeof t2 ? i2.input = Ec.binstring2buf(t2) : "[object ArrayBuffer]" === zc.call(t2) ? i2.input = new Uint8Array(t2) : i2.input = t2, i2.next_in = 0, i2.avail_in = i2.input.length;
    do {
      if (0 === i2.avail_out && (i2.output = new Pc.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), (r2 = Ac.inflate(i2, Rc.Z_NO_FLUSH)) === Rc.Z_NEED_DICT && l2 && (r2 = Ac.inflateSetDictionary(this.strm, l2)), r2 === Rc.Z_BUF_ERROR && true === u2 && (r2 = Rc.Z_OK, u2 = false), r2 !== Rc.Z_STREAM_END && r2 !== Rc.Z_OK) return this.onEnd(r2), this.ended = true, false;
      i2.next_out && (0 !== i2.avail_out && r2 !== Rc.Z_STREAM_END && (0 !== i2.avail_in || a2 !== Rc.Z_FINISH && a2 !== Rc.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n2 = Ec.utf8border(i2.output, i2.next_out), o2 = i2.next_out - n2, c2 = Ec.buf2string(i2.output, n2), i2.next_out = o2, i2.avail_out = s2 - o2, o2 && Pc.arraySet(i2.output, i2.output, n2, o2, 0), this.onData(c2)) : this.onData(Pc.shrinkBuf(i2.output, i2.next_out)))), 0 === i2.avail_in && 0 === i2.avail_out && (u2 = true);
    } while ((i2.avail_in > 0 || 0 === i2.avail_out) && r2 !== Rc.Z_STREAM_END);
    return r2 === Rc.Z_STREAM_END && (a2 = Rc.Z_FINISH), a2 === Rc.Z_FINISH ? (r2 = Ac.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === Rc.Z_OK) : a2 !== Rc.Z_SYNC_FLUSH || (this.onEnd(Rc.Z_OK), i2.avail_out = 0, true);
  }, Bc.prototype.onData = function(t2) {
    this.chunks.push(t2);
  }, Bc.prototype.onEnd = function(t2) {
    t2 === Rc.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Pc.flattenChunks(this.chunks)), this.chunks = [], this.err = t2, this.msg = this.strm.msg;
  }, oc.Inflate = Bc, oc.inflate = Dc, oc.inflateRaw = function(t2, e2) {
    return (e2 = e2 || {}).raw = true, Dc(t2, e2);
  }, oc.ungzip = Dc;
  var Fc = {};
  (0, Tn.assign)(Fc, On, oc, Cc);
  var Nc = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
  var Uc = Fc;
  var Gc = Oa();
  var qc = za;
  var Wc = Nc ? "uint8array" : "array";
  function Hc(t2, e2) {
    qc.call(this, "FlateWorker/" + t2), this._pako = null, this._pakoAction = t2, this._pakoOptions = e2, this.meta = {};
  }
  Rn.magic = "\b\0", Gc.inherits(Hc, qc), Hc.prototype.processChunk = function(t2) {
    this.meta = t2.meta, null === this._pako && this._createPako(), this._pako.push(Gc.transformTo(Wc, t2.data), false);
  }, Hc.prototype.flush = function() {
    qc.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
  }, Hc.prototype.cleanUp = function() {
    qc.prototype.cleanUp.call(this), this._pako = null;
  }, Hc.prototype._createPako = function() {
    this._pako = new Uc[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
    var t2 = this;
    this._pako.onData = function(e2) {
      t2.push({ data: e2, meta: t2.meta });
    };
  }, Rn.compressWorker = function(t2) {
    return new Hc("Deflate", t2);
  }, Rn.uncompressWorker = function() {
    return new Hc("Inflate", {});
  };
  var Zc = za;
  En.STORE = { magic: "\0\0", compressWorker: function() {
    return new Zc("STORE compression");
  }, uncompressWorker: function() {
    return new Zc("STORE decompression");
  } }, En.DEFLATE = Rn;
  var Yc = { LOCAL_FILE_HEADER: "PK", CENTRAL_FILE_HEADER: "PK", CENTRAL_DIRECTORY_END: "PK", ZIP64_CENTRAL_DIRECTORY_LOCATOR: "PK\x07", ZIP64_CENTRAL_DIRECTORY_END: "PK", DATA_DESCRIPTOR: "PK\x07\b" };
  var Vc = Oa();
  var Qc = za;
  var $c = f;
  var Kc = on;
  var Xc = Yc;
  var Jc = function(t2, e2) {
    var r2, a2 = "";
    for (r2 = 0; r2 < e2; r2++) a2 += String.fromCharCode(255 & t2), t2 >>>= 8;
    return a2;
  };
  var ti = function(t2, e2, r2, a2, n2, o2) {
    var c2, i2, s2 = t2.file, l2 = t2.compression, u2 = o2 !== $c.utf8encode, f2 = Vc.transformTo("string", o2(s2.name)), h2 = Vc.transformTo("string", $c.utf8encode(s2.name)), d2 = s2.comment, p2 = Vc.transformTo("string", o2(d2)), b2 = Vc.transformTo("string", $c.utf8encode(d2)), g2 = h2.length !== s2.name.length, v2 = b2.length !== d2.length, m2 = "", y2 = "", L2 = "", w2 = s2.dir, _2 = s2.date, k2 = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
    e2 && !r2 || (k2.crc32 = t2.crc32, k2.compressedSize = t2.compressedSize, k2.uncompressedSize = t2.uncompressedSize);
    var M2 = 0;
    e2 && (M2 |= 8), u2 || !g2 && !v2 || (M2 |= 2048);
    var x2, S2, I2, C2 = 0, A2 = 0;
    w2 && (C2 |= 16), "UNIX" === n2 ? (A2 = 798, C2 |= (x2 = s2.unixPermissions, S2 = w2, I2 = x2, x2 || (I2 = S2 ? 16893 : 33204), (65535 & I2) << 16)) : (A2 = 20, C2 |= 63 & (s2.dosPermissions || 0)), c2 = _2.getUTCHours(), c2 <<= 6, c2 |= _2.getUTCMinutes(), c2 <<= 5, c2 |= _2.getUTCSeconds() / 2, i2 = _2.getUTCFullYear() - 1980, i2 <<= 4, i2 |= _2.getUTCMonth() + 1, i2 <<= 5, i2 |= _2.getUTCDate(), g2 && (y2 = Jc(1, 1) + Jc(Kc(f2), 4) + h2, m2 += "up" + Jc(y2.length, 2) + y2), v2 && (L2 = Jc(1, 1) + Jc(Kc(p2), 4) + b2, m2 += "uc" + Jc(L2.length, 2) + L2);
    var P2 = "";
    return P2 += "\n\0", P2 += Jc(M2, 2), P2 += l2.magic, P2 += Jc(c2, 2), P2 += Jc(i2, 2), P2 += Jc(k2.crc32, 4), P2 += Jc(k2.compressedSize, 4), P2 += Jc(k2.uncompressedSize, 4), P2 += Jc(f2.length, 2), P2 += Jc(m2.length, 2), { fileRecord: Xc.LOCAL_FILE_HEADER + P2 + f2 + m2, dirRecord: Xc.CENTRAL_FILE_HEADER + Jc(A2, 2) + P2 + Jc(p2.length, 2) + "\0\0\0\0" + Jc(C2, 4) + Jc(a2, 4) + f2 + m2 + p2 };
  };
  var ei = function(t2) {
    return Xc.DATA_DESCRIPTOR + Jc(t2.crc32, 4) + Jc(t2.compressedSize, 4) + Jc(t2.uncompressedSize, 4);
  };
  function ri(t2, e2, r2, a2) {
    Qc.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = e2, this.zipPlatform = r2, this.encodeFileName = a2, this.streamFiles = t2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
  }
  Vc.inherits(ri, Qc), ri.prototype.push = function(t2) {
    var e2 = t2.meta.percent || 0, r2 = this.entriesCount, a2 = this._sources.length;
    this.accumulate ? this.contentBuffer.push(t2) : (this.bytesWritten += t2.data.length, Qc.prototype.push.call(this, { data: t2.data, meta: { currentFile: this.currentFile, percent: r2 ? (e2 + 100 * (r2 - a2 - 1)) / r2 : 100 } }));
  }, ri.prototype.openedSource = function(t2) {
    this.currentSourceOffset = this.bytesWritten, this.currentFile = t2.file.name;
    var e2 = this.streamFiles && !t2.file.dir;
    if (e2) {
      var r2 = ti(t2, e2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.push({ data: r2.fileRecord, meta: { percent: 0 } });
    } else this.accumulate = true;
  }, ri.prototype.closedSource = function(t2) {
    this.accumulate = false;
    var e2 = this.streamFiles && !t2.file.dir, r2 = ti(t2, e2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    if (this.dirRecords.push(r2.dirRecord), e2) this.push({ data: ei(t2), meta: { percent: 100 } });
    else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
    this.currentFile = null;
  }, ri.prototype.flush = function() {
    for (var t2 = this.bytesWritten, e2 = 0; e2 < this.dirRecords.length; e2++) this.push({ data: this.dirRecords[e2], meta: { percent: 100 } });
    var r2 = this.bytesWritten - t2, a2 = (function(t3, e3, r3, a3, n2) {
      var o2 = Vc.transformTo("string", n2(a3));
      return Xc.CENTRAL_DIRECTORY_END + "\0\0\0\0" + Jc(t3, 2) + Jc(t3, 2) + Jc(e3, 4) + Jc(r3, 4) + Jc(o2.length, 2) + o2;
    })(this.dirRecords.length, r2, t2, this.zipComment, this.encodeFileName);
    this.push({ data: a2, meta: { percent: 100 } });
  }, ri.prototype.prepareNextSource = function() {
    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
  }, ri.prototype.registerPrevious = function(t2) {
    this._sources.push(t2);
    var e2 = this;
    return t2.on("data", (function(t3) {
      e2.processChunk(t3);
    })), t2.on("end", (function() {
      e2.closedSource(e2.previous.streamInfo), e2._sources.length ? e2.prepareNextSource() : e2.end();
    })), t2.on("error", (function(t3) {
      e2.error(t3);
    })), this;
  }, ri.prototype.resume = function() {
    return !!Qc.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
  }, ri.prototype.error = function(t2) {
    var e2 = this._sources;
    if (!Qc.prototype.error.call(this, t2)) return false;
    for (var r2 = 0; r2 < e2.length; r2++) try {
      e2[r2].error(t2);
    } catch (t3) {
    }
    return true;
  }, ri.prototype.lock = function() {
    Qc.prototype.lock.call(this);
    for (var t2 = this._sources, e2 = 0; e2 < t2.length; e2++) t2[e2].lock();
  };
  var ai = En;
  var ni = ri;
  Pn.generateWorker = function(t2, e2, r2) {
    var a2 = new ni(e2.streamFiles, r2, e2.platform, e2.encodeFileName), n2 = 0;
    try {
      t2.forEach((function(t3, r3) {
        n2++;
        var o2 = (function(t4, e3) {
          var r4 = t4 || e3, a3 = ai[r4];
          if (!a3) throw new Error(r4 + " is not a valid compression method !");
          return a3;
        })(r3.options.compression, e2.compression), c2 = r3.options.compressionOptions || e2.compressionOptions || {}, i2 = r3.dir, s2 = r3.date;
        r3._compressWorker(o2, c2).withStreamInfo("file", { name: t3, dir: i2, date: s2, comment: r3.comment || "", unixPermissions: r3.unixPermissions, dosPermissions: r3.dosPermissions }).pipe(a2);
      })), a2.entriesCount = n2;
    } catch (t3) {
      a2.error(t3);
    }
    return a2;
  };
  var oi = Oa();
  var ci = za;
  function ii(t2, e2) {
    ci.call(this, "Nodejs stream input adapter for " + t2), this._upstreamEnded = false, this._bindStream(e2);
  }
  oi.inherits(ii, ci), ii.prototype._bindStream = function(t2) {
    var e2 = this;
    this._stream = t2, t2.pause(), t2.on("data", (function(t3) {
      e2.push({ data: t3, meta: { percent: 0 } });
    })).on("error", (function(t3) {
      e2.isPaused ? this.generatedError = t3 : e2.error(t3);
    })).on("end", (function() {
      e2.isPaused ? e2._upstreamEnded = true : e2.end();
    }));
  }, ii.prototype.pause = function() {
    return !!ci.prototype.pause.call(this) && (this._stream.pause(), true);
  }, ii.prototype.resume = function() {
    return !!ci.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
  };
  var si = ii;
  var li = f;
  var ui = Oa();
  var fi = za;
  var hi = Ka;
  var di = Xa;
  var pi = yn;
  var bi = An;
  var gi = Pn;
  var vi = Pa;
  var mi = si;
  var yi = function(t2, e2, r2) {
    var a2, n2 = ui.getTypeOf(e2), o2 = ui.extend(r2 || {}, di);
    o2.date = o2.date || /* @__PURE__ */ new Date(), null !== o2.compression && (o2.compression = o2.compression.toUpperCase()), "string" == typeof o2.unixPermissions && (o2.unixPermissions = parseInt(o2.unixPermissions, 8)), o2.unixPermissions && 16384 & o2.unixPermissions && (o2.dir = true), o2.dosPermissions && 16 & o2.dosPermissions && (o2.dir = true), o2.dir && (t2 = wi(t2)), o2.createFolders && (a2 = Li(t2)) && _i.call(this, a2, true);
    var c2 = "string" === n2 && false === o2.binary && false === o2.base64;
    r2 && void 0 !== r2.binary || (o2.binary = !c2), (e2 instanceof pi && 0 === e2.uncompressedSize || o2.dir || !e2 || 0 === e2.length) && (o2.base64 = false, o2.binary = true, e2 = "", o2.compression = "STORE", n2 = "string");
    var i2 = null;
    i2 = e2 instanceof pi || e2 instanceof fi ? e2 : vi.isNode && vi.isStream(e2) ? new mi(t2, e2) : ui.prepareContent(t2, e2, o2.binary, o2.optimizedBinaryString, o2.base64);
    var s2 = new bi(t2, i2, o2);
    this.files[t2] = s2;
  };
  var Li = function(t2) {
    "/" === t2.slice(-1) && (t2 = t2.substring(0, t2.length - 1));
    var e2 = t2.lastIndexOf("/");
    return e2 > 0 ? t2.substring(0, e2) : "";
  };
  var wi = function(t2) {
    return "/" !== t2.slice(-1) && (t2 += "/"), t2;
  };
  var _i = function(t2, e2) {
    return e2 = void 0 !== e2 ? e2 : di.createFolders, t2 = wi(t2), this.files[t2] || yi.call(this, t2, null, { dir: true, createFolders: e2 }), this.files[t2];
  };
  function ki(t2) {
    return "[object RegExp]" === Object.prototype.toString.call(t2);
  }
  var Mi = { load: function() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  }, forEach: function(t2) {
    var e2, r2, a2;
    for (e2 in this.files) a2 = this.files[e2], (r2 = e2.slice(this.root.length, e2.length)) && e2.slice(0, this.root.length) === this.root && t2(r2, a2);
  }, filter: function(t2) {
    var e2 = [];
    return this.forEach((function(r2, a2) {
      t2(r2, a2) && e2.push(a2);
    })), e2;
  }, file: function(t2, e2, r2) {
    if (1 === arguments.length) {
      if (ki(t2)) {
        var a2 = t2;
        return this.filter((function(t3, e3) {
          return !e3.dir && a2.test(t3);
        }));
      }
      var n2 = this.files[this.root + t2];
      return n2 && !n2.dir ? n2 : null;
    }
    return t2 = this.root + t2, yi.call(this, t2, e2, r2), this;
  }, folder: function(t2) {
    if (!t2) return this;
    if (ki(t2)) return this.filter((function(e3, r3) {
      return r3.dir && t2.test(e3);
    }));
    var e2 = this.root + t2, r2 = _i.call(this, e2), a2 = this.clone();
    return a2.root = r2.name, a2;
  }, remove: function(t2) {
    t2 = this.root + t2;
    var e2 = this.files[t2];
    if (e2 || ("/" !== t2.slice(-1) && (t2 += "/"), e2 = this.files[t2]), e2 && !e2.dir) delete this.files[t2];
    else for (var r2 = this.filter((function(e3, r3) {
      return r3.name.slice(0, t2.length) === t2;
    })), a2 = 0; a2 < r2.length; a2++) delete this.files[r2[a2].name];
    return this;
  }, generate: function() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  }, generateInternalStream: function(t2) {
    var e2, r2 = {};
    try {
      if ((r2 = ui.extend(t2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: li.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
      ui.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
      var a2 = r2.comment || this.comment || "";
      e2 = gi.generateWorker(this, r2, a2);
    } catch (t3) {
      (e2 = new fi("error")).error(t3);
    }
    return new hi(e2, r2.type || "string", r2.mimeType);
  }, generateAsync: function(t2, e2) {
    return this.generateInternalStream(t2).accumulate(e2);
  }, generateNodeStream: function(t2, e2) {
    return (t2 = t2 || {}).type || (t2.type = "nodebuffer"), this.generateInternalStream(t2).toNodejsStream(e2);
  } };
  var xi = Mi;
  var Si = Oa();
  function Ii(t2) {
    this.data = t2, this.length = t2.length, this.index = 0, this.zero = 0;
  }
  Ii.prototype = { checkOffset: function(t2) {
    this.checkIndex(this.index + t2);
  }, checkIndex: function(t2) {
    if (this.length < this.zero + t2 || t2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t2 + "). Corrupted zip ?");
  }, setIndex: function(t2) {
    this.checkIndex(t2), this.index = t2;
  }, skip: function(t2) {
    this.setIndex(this.index + t2);
  }, byteAt: function() {
  }, readInt: function(t2) {
    var e2, r2 = 0;
    for (this.checkOffset(t2), e2 = this.index + t2 - 1; e2 >= this.index; e2--) r2 = (r2 << 8) + this.byteAt(e2);
    return this.index += t2, r2;
  }, readString: function(t2) {
    return Si.transformTo("string", this.readData(t2));
  }, readData: function() {
  }, lastIndexOfSignature: function() {
  }, readAndCheckSignature: function() {
  }, readDate: function() {
    var t2 = this.readInt(4);
    return new Date(Date.UTC(1980 + (t2 >> 25 & 127), (t2 >> 21 & 15) - 1, t2 >> 16 & 31, t2 >> 11 & 31, t2 >> 5 & 63, (31 & t2) << 1));
  } };
  var Ci = Ii;
  var Ai = Ci;
  function Pi(t2) {
    Ai.call(this, t2);
    for (var e2 = 0; e2 < this.data.length; e2++) t2[e2] = 255 & t2[e2];
  }
  Oa().inherits(Pi, Ai), Pi.prototype.byteAt = function(t2) {
    return this.data[this.zero + t2];
  }, Pi.prototype.lastIndexOfSignature = function(t2) {
    for (var e2 = t2.charCodeAt(0), r2 = t2.charCodeAt(1), a2 = t2.charCodeAt(2), n2 = t2.charCodeAt(3), o2 = this.length - 4; o2 >= 0; --o2) if (this.data[o2] === e2 && this.data[o2 + 1] === r2 && this.data[o2 + 2] === a2 && this.data[o2 + 3] === n2) return o2 - this.zero;
    return -1;
  }, Pi.prototype.readAndCheckSignature = function(t2) {
    var e2 = t2.charCodeAt(0), r2 = t2.charCodeAt(1), a2 = t2.charCodeAt(2), n2 = t2.charCodeAt(3), o2 = this.readData(4);
    return e2 === o2[0] && r2 === o2[1] && a2 === o2[2] && n2 === o2[3];
  }, Pi.prototype.readData = function(t2) {
    if (this.checkOffset(t2), 0 === t2) return [];
    var e2 = this.data.slice(this.zero + this.index, this.zero + this.index + t2);
    return this.index += t2, e2;
  };
  var Ei = Pi;
  var Ri = Ci;
  function Ti(t2) {
    Ri.call(this, t2);
  }
  Oa().inherits(Ti, Ri), Ti.prototype.byteAt = function(t2) {
    return this.data.charCodeAt(this.zero + t2);
  }, Ti.prototype.lastIndexOfSignature = function(t2) {
    return this.data.lastIndexOf(t2) - this.zero;
  }, Ti.prototype.readAndCheckSignature = function(t2) {
    return t2 === this.readData(4);
  }, Ti.prototype.readData = function(t2) {
    this.checkOffset(t2);
    var e2 = this.data.slice(this.zero + this.index, this.zero + this.index + t2);
    return this.index += t2, e2;
  };
  var Oi = Ti;
  var ji = Ei;
  function zi(t2) {
    ji.call(this, t2);
  }
  Oa().inherits(zi, ji), zi.prototype.readData = function(t2) {
    if (this.checkOffset(t2), 0 === t2) return new Uint8Array(0);
    var e2 = this.data.subarray(this.zero + this.index, this.zero + this.index + t2);
    return this.index += t2, e2;
  };
  var Bi = zi;
  var Di = Bi;
  function Fi(t2) {
    Di.call(this, t2);
  }
  Oa().inherits(Fi, Di), Fi.prototype.readData = function(t2) {
    this.checkOffset(t2);
    var e2 = this.data.slice(this.zero + this.index, this.zero + this.index + t2);
    return this.index += t2, e2;
  };
  var Ni = Fi;
  var Ui = Oa();
  var Gi = dt;
  var qi = Ei;
  var Wi = Oi;
  var Hi = Ni;
  var Zi = Bi;
  var Yi = function(t2) {
    var e2 = Ui.getTypeOf(t2);
    return Ui.checkSupport(e2), "string" !== e2 || Gi.uint8array ? "nodebuffer" === e2 ? new Hi(t2) : Gi.uint8array ? new Zi(Ui.transformTo("uint8array", t2)) : new qi(Ui.transformTo("array", t2)) : new Wi(t2);
  };
  var Vi = Yi;
  var Qi = Oa();
  var $i = yn;
  var Ki = on;
  var Xi = f;
  var Ji = En;
  var ts = dt;
  function es(t2, e2) {
    this.options = t2, this.loadOptions = e2;
  }
  es.prototype = { isEncrypted: function() {
    return 1 == (1 & this.bitFlag);
  }, useUTF8: function() {
    return 2048 == (2048 & this.bitFlag);
  }, readLocalPart: function(t2) {
    var e2, r2;
    if (t2.skip(22), this.fileNameLength = t2.readInt(2), r2 = t2.readInt(2), this.fileName = t2.readData(this.fileNameLength), t2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
    if (e2 = (function(t3) {
      for (var e3 in Ji) if (Object.prototype.hasOwnProperty.call(Ji, e3) && Ji[e3].magic === t3) return Ji[e3];
      return null;
    })(this.compressionMethod), null === e2) throw new Error("Corrupted zip : compression " + Qi.pretty(this.compressionMethod) + " unknown (inner file : " + Qi.transformTo("string", this.fileName) + ")");
    this.decompressed = new $i(this.compressedSize, this.uncompressedSize, this.crc32, e2, t2.readData(this.compressedSize));
  }, readCentralPart: function(t2) {
    this.versionMadeBy = t2.readInt(2), t2.skip(2), this.bitFlag = t2.readInt(2), this.compressionMethod = t2.readString(2), this.date = t2.readDate(), this.crc32 = t2.readInt(4), this.compressedSize = t2.readInt(4), this.uncompressedSize = t2.readInt(4);
    var e2 = t2.readInt(2);
    if (this.extraFieldsLength = t2.readInt(2), this.fileCommentLength = t2.readInt(2), this.diskNumberStart = t2.readInt(2), this.internalFileAttributes = t2.readInt(2), this.externalFileAttributes = t2.readInt(4), this.localHeaderOffset = t2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
    t2.skip(e2), this.readExtraFields(t2), this.parseZIP64ExtraField(t2), this.fileComment = t2.readData(this.fileCommentLength);
  }, processAttributes: function() {
    this.unixPermissions = null, this.dosPermissions = null;
    var t2 = this.versionMadeBy >> 8;
    this.dir = !!(16 & this.externalFileAttributes), 0 === t2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 === t2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
  }, parseZIP64ExtraField: function() {
    if (this.extraFields[1]) {
      var t2 = Vi(this.extraFields[1].value);
      this.uncompressedSize === Qi.MAX_VALUE_32BITS && (this.uncompressedSize = t2.readInt(8)), this.compressedSize === Qi.MAX_VALUE_32BITS && (this.compressedSize = t2.readInt(8)), this.localHeaderOffset === Qi.MAX_VALUE_32BITS && (this.localHeaderOffset = t2.readInt(8)), this.diskNumberStart === Qi.MAX_VALUE_32BITS && (this.diskNumberStart = t2.readInt(4));
    }
  }, readExtraFields: function(t2) {
    var e2, r2, a2, n2 = t2.index + this.extraFieldsLength;
    for (this.extraFields || (this.extraFields = {}); t2.index + 4 < n2; ) e2 = t2.readInt(2), r2 = t2.readInt(2), a2 = t2.readData(r2), this.extraFields[e2] = { id: e2, length: r2, value: a2 };
    t2.setIndex(n2);
  }, handleUTF8: function() {
    var t2 = ts.uint8array ? "uint8array" : "array";
    if (this.useUTF8()) this.fileNameStr = Xi.utf8decode(this.fileName), this.fileCommentStr = Xi.utf8decode(this.fileComment);
    else {
      var e2 = this.findExtraFieldUnicodePath();
      if (null !== e2) this.fileNameStr = e2;
      else {
        var r2 = Qi.transformTo(t2, this.fileName);
        this.fileNameStr = this.loadOptions.decodeFileName(r2);
      }
      var a2 = this.findExtraFieldUnicodeComment();
      if (null !== a2) this.fileCommentStr = a2;
      else {
        var n2 = Qi.transformTo(t2, this.fileComment);
        this.fileCommentStr = this.loadOptions.decodeFileName(n2);
      }
    }
  }, findExtraFieldUnicodePath: function() {
    var t2 = this.extraFields[28789];
    if (t2) {
      var e2 = Vi(t2.value);
      return 1 !== e2.readInt(1) || Ki(this.fileName) !== e2.readInt(4) ? null : Xi.utf8decode(e2.readData(t2.length - 5));
    }
    return null;
  }, findExtraFieldUnicodeComment: function() {
    var t2 = this.extraFields[25461];
    if (t2) {
      var e2 = Vi(t2.value);
      return 1 !== e2.readInt(1) || Ki(this.fileComment) !== e2.readInt(4) ? null : Xi.utf8decode(e2.readData(t2.length - 5));
    }
    return null;
  } };
  var rs = es;
  var as = Yi;
  var ns = Oa();
  var os = Yc;
  var cs = rs;
  var is = dt;
  function ss(t2) {
    this.files = [], this.loadOptions = t2;
  }
  ss.prototype = { checkSignature: function(t2) {
    if (!this.reader.readAndCheckSignature(t2)) {
      this.reader.index -= 4;
      var e2 = this.reader.readString(4);
      throw new Error("Corrupted zip or bug: unexpected signature (" + ns.pretty(e2) + ", expected " + ns.pretty(t2) + ")");
    }
  }, isSignature: function(t2, e2) {
    var r2 = this.reader.index;
    this.reader.setIndex(t2);
    var a2 = this.reader.readString(4) === e2;
    return this.reader.setIndex(r2), a2;
  }, readBlockEndOfCentral: function() {
    this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
    var t2 = this.reader.readData(this.zipCommentLength), e2 = is.uint8array ? "uint8array" : "array", r2 = ns.transformTo(e2, t2);
    this.zipComment = this.loadOptions.decodeFileName(r2);
  }, readBlockZip64EndOfCentral: function() {
    this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
    for (var t2, e2, r2, a2 = this.zip64EndOfCentralSize - 44; 0 < a2; ) t2 = this.reader.readInt(2), e2 = this.reader.readInt(4), r2 = this.reader.readData(e2), this.zip64ExtensibleData[t2] = { id: t2, length: e2, value: r2 };
  }, readBlockZip64EndOfCentralLocator: function() {
    if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error("Multi-volumes zip are not supported");
  }, readLocalFiles: function() {
    var t2, e2;
    for (t2 = 0; t2 < this.files.length; t2++) e2 = this.files[t2], this.reader.setIndex(e2.localHeaderOffset), this.checkSignature(os.LOCAL_FILE_HEADER), e2.readLocalPart(this.reader), e2.handleUTF8(), e2.processAttributes();
  }, readCentralDir: function() {
    var t2;
    for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(os.CENTRAL_FILE_HEADER); ) (t2 = new cs({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t2);
    if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
  }, readEndOfCentral: function() {
    var t2 = this.reader.lastIndexOfSignature(os.CENTRAL_DIRECTORY_END);
    if (t2 < 0) throw !this.isSignature(0, os.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
    this.reader.setIndex(t2);
    var e2 = t2;
    if (this.checkSignature(os.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === ns.MAX_VALUE_16BITS || this.diskWithCentralDirStart === ns.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === ns.MAX_VALUE_16BITS || this.centralDirRecords === ns.MAX_VALUE_16BITS || this.centralDirSize === ns.MAX_VALUE_32BITS || this.centralDirOffset === ns.MAX_VALUE_32BITS) {
      if (this.zip64 = true, (t2 = this.reader.lastIndexOfSignature(os.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
      if (this.reader.setIndex(t2), this.checkSignature(os.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, os.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(os.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
      this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(os.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
    }
    var r2 = this.centralDirOffset + this.centralDirSize;
    this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
    var a2 = e2 - r2;
    if (a2 > 0) this.isSignature(e2, os.CENTRAL_FILE_HEADER) || (this.reader.zero = a2);
    else if (a2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(a2) + " bytes.");
  }, prepareReader: function(t2) {
    this.reader = as(t2);
  }, load: function(t2) {
    this.prepareReader(t2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
  } };
  var ls = ss;
  var us = Oa();
  var fs = Ta;
  var hs = f;
  var ds = ls;
  var ps = un;
  var bs = Pa;
  function gs(t2) {
    return new fs.Promise((function(e2, r2) {
      var a2 = t2.decompressed.getContentWorker().pipe(new ps());
      a2.on("error", (function(t3) {
        r2(t3);
      })).on("end", (function() {
        a2.streamInfo.crc32 !== t2.decompressed.crc32 ? r2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
      })).resume();
    }));
  }
  function vs() {
    if (!(this instanceof vs)) return new vs();
    if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
      var t2 = new vs();
      for (var e2 in this) "function" != typeof this[e2] && (t2[e2] = this[e2]);
      return t2;
    };
  }
  vs.prototype = xi, vs.prototype.loadAsync = function(t2, e2) {
    var r2 = this;
    return e2 = us.extend(e2 || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: hs.utf8decode }), bs.isNode && bs.isStream(t2) ? fs.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : us.prepareContent("the loaded zip file", t2, true, e2.optimizedBinaryString, e2.base64).then((function(t3) {
      var r3 = new ds(e2);
      return r3.load(t3), r3;
    })).then((function(t3) {
      var r3 = [fs.Promise.resolve(t3)], a2 = t3.files;
      if (e2.checkCRC32) for (var n2 = 0; n2 < a2.length; n2++) r3.push(gs(a2[n2]));
      return fs.Promise.all(r3);
    })).then((function(t3) {
      for (var a2 = t3.shift(), n2 = a2.files, o2 = 0; o2 < n2.length; o2++) {
        var c2 = n2[o2], i2 = c2.fileNameStr, s2 = us.resolve(c2.fileNameStr);
        r2.file(s2, c2.decompressed, { binary: true, optimizedBinaryString: true, date: c2.date, dir: c2.dir, comment: c2.fileCommentStr.length ? c2.fileCommentStr : null, unixPermissions: c2.unixPermissions, dosPermissions: c2.dosPermissions, createFolders: e2.createFolders }), c2.dir || (r2.file(s2).unsafeOriginalName = i2);
      }
      return a2.zipComment.length && (r2.comment = a2.zipComment), r2;
    }));
  }, vs.support = dt, vs.defaults = Xa, vs.version = "3.10.1", vs.loadAsync = function(t2, e2) {
    return new vs().loadAsync(t2, e2);
  }, vs.external = Ta;
  var ms = vs;
  function ys(t2) {
    return ys = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, ys(t2);
  }
  function Ls(t2, e2) {
    var r2 = (e2 = e2 || {}).pos || 0, a2 = !!e2.keepComments, n2 = !!e2.keepWhitespace, o2 = "<".charCodeAt(0), c2 = ">".charCodeAt(0), i2 = "-".charCodeAt(0), s2 = "/".charCodeAt(0), l2 = "!".charCodeAt(0), u2 = "'".charCodeAt(0), f2 = '"'.charCodeAt(0), h2 = "[".charCodeAt(0), d2 = "]".charCodeAt(0);
    function p2(e3) {
      for (var u3 = []; t2[r2]; ) if (t2.charCodeAt(r2) == o2) {
        if (t2.charCodeAt(r2 + 1) === s2) {
          var f3 = r2 + 2;
          if (r2 = t2.indexOf(">", r2), -1 == t2.substring(f3, r2).indexOf(e3)) {
            var p3 = t2.substring(0, r2).split("\n");
            throw new Error("Unexpected close tag\nLine: " + (p3.length - 1) + "\nColumn: " + (p3[p3.length - 1].length + 1) + "\nChar: " + t2[r2]);
          }
          return r2 + 1 && (r2 += 1), u3;
        }
        if (t2.charCodeAt(r2 + 1) === l2) {
          if (t2.charCodeAt(r2 + 2) == i2) {
            const e4 = r2;
            for (; -1 !== r2 && (t2.charCodeAt(r2) !== c2 || t2.charCodeAt(r2 - 1) != i2 || t2.charCodeAt(r2 - 2) != i2 || -1 == r2); ) r2 = t2.indexOf(">", r2 + 1);
            -1 === r2 && (r2 = t2.length), a2 && u3.push(t2.substring(e4, r2 + 1));
          } else {
            if (t2.charCodeAt(r2 + 2) === h2 && t2.charCodeAt(r2 + 8) === h2 && "cdata" === t2.substr(r2 + 3, 5).toLowerCase()) {
              var g3 = t2.indexOf("]]>", r2);
              -1 == g3 ? (u3.push(t2.substr(r2 + 9)), r2 = t2.length) : (u3.push(t2.substring(r2 + 9, g3)), r2 = g3 + 3);
              continue;
            }
            {
              const e4 = r2 + 1;
              r2 += 2;
              for (var v3 = false; (t2.charCodeAt(r2) !== c2 || true === v3) && t2[r2]; ) t2.charCodeAt(r2) === h2 ? v3 = true : true === v3 && t2.charCodeAt(r2) === d2 && (v3 = false), r2++;
              u3.push(t2.substring(e4, r2));
            }
          }
          r2++;
          continue;
        }
        var y3 = m2();
        u3.push(y3), "?" === y3.tagName[0] && (u3.push(...y3.children), y3.children = []);
      } else {
        var L3 = b2();
        if (n2) L3.length > 0 && u3.push(L3);
        else {
          var w3 = L3.trim();
          w3.length > 0 && u3.push(w3);
        }
        r2++;
      }
      return u3;
    }
    function b2() {
      var e3 = r2;
      return -2 === (r2 = t2.indexOf("<", r2) - 1) && (r2 = t2.length), t2.slice(e3, r2 + 1);
    }
    function g2() {
      for (var e3 = r2; -1 === "\r\n	>/= ".indexOf(t2[r2]) && t2[r2]; ) r2++;
      return t2.slice(e3, r2);
    }
    var v2 = e2.noChildNodes || ["img", "br", "input", "meta", "link", "hr"];
    function m2() {
      r2++;
      const e3 = g2(), a3 = {};
      let n3 = [];
      for (; t2.charCodeAt(r2) !== c2 && t2[r2]; ) {
        var o3 = t2.charCodeAt(r2);
        if (o3 > 64 && o3 < 91 || o3 > 96 && o3 < 123) {
          for (var i3 = g2(), l3 = t2.charCodeAt(r2); l3 && l3 !== u2 && l3 !== f2 && !(l3 > 64 && l3 < 91 || l3 > 96 && l3 < 123) && l3 !== c2; ) r2++, l3 = t2.charCodeAt(r2);
          if (l3 === u2 || l3 === f2) {
            var h3 = y2();
            if (-1 === r2) return { tagName: e3, attributes: a3, children: n3 };
          } else h3 = null, r2--;
          a3[i3] = h3;
        }
        r2++;
      }
      if (t2.charCodeAt(r2 - 1) !== s2) if ("script" == e3) {
        var d3 = r2 + 1;
        r2 = t2.indexOf("<\/script>", r2), n3 = [t2.slice(d3, r2)], r2 += 9;
      } else if ("style" == e3) {
        d3 = r2 + 1;
        r2 = t2.indexOf("</style>", r2), n3 = [t2.slice(d3, r2)], r2 += 8;
      } else -1 === v2.indexOf(e3) ? (r2++, n3 = p2(e3)) : r2++;
      else r2++;
      return { tagName: e3, attributes: a3, children: n3 };
    }
    function y2() {
      var e3 = t2[r2], a3 = r2 + 1;
      return r2 = t2.indexOf(e3, a3), t2.slice(a3, r2);
    }
    var L2, w2 = null;
    if (void 0 !== e2.attrValue) {
      e2.attrName = e2.attrName || "id";
      for (w2 = []; -1 !== (L2 = void 0, L2 = new RegExp("\\s" + e2.attrName + `\\s*=['"]` + e2.attrValue + `['"]`).exec(t2), r2 = L2 ? L2.index : -1); ) -1 !== (r2 = t2.lastIndexOf("<", r2)) && w2.push(m2()), t2 = t2.substr(r2), r2 = 0;
    } else w2 = e2.parseNode ? m2() : p2("");
    return e2.filter && (w2 = _s(w2, e2.filter)), e2.simplify ? ws(Array.isArray(w2) ? w2 : [w2]) : (e2.setPos && (w2.pos = r2), w2);
  }
  function ws(t2) {
    var e2 = {};
    if (!t2.length) return "";
    if (1 === t2.length && "string" == typeof t2[0]) return t2[0];
    for (var r2 in t2.forEach((function(t3) {
      if ("object" == typeof t3) {
        e2[t3.tagName] || (e2[t3.tagName] = []);
        var r3 = ws(t3.children);
        e2[t3.tagName].push(r3), Object.keys(t3.attributes).length && "string" != typeof r3 && (r3._attributes = t3.attributes);
      }
    })), e2) 1 == e2[r2].length && (e2[r2] = e2[r2][0]);
    return e2;
  }
  function _s(t2, e2, r2 = 0, a2 = "") {
    var n2 = [];
    return t2.forEach((function(t3, o2) {
      if ("object" == typeof t3 && e2(t3, o2, r2, a2) && n2.push(t3), t3.children) {
        var c2 = _s(t3.children, e2, r2 + 1, (a2 ? a2 + "." : "") + o2 + "." + t3.tagName);
        n2 = n2.concat(c2);
      }
    })), n2;
  }
  function ks(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return Ms(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return Ms(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function Ms(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function xs(t2, e2) {
    var r2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(t2);
      e2 && (a2 = a2.filter((function(e3) {
        return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
      }))), r2.push.apply(r2, a2);
    }
    return r2;
  }
  function Ss(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var a2 = null != arguments[e2] ? arguments[e2] : {};
      e2 % 2 ? xs(Object(a2), true).forEach((function(e3) {
        r(t2, e3, a2[e3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(a2)) : xs(Object(a2)).forEach((function(e3) {
        Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(a2, e3));
      }));
    }
    return t2;
  }
  var Is = 0;
  function Cs(t2) {
    return "string" == typeof t2 && "" === t2.trim();
  }
  function As(t2) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = {};
    if (!t2.length) return r2;
    if (1 === t2.length && "string" == typeof t2[0]) return Object.keys(e2).length ? { attrs: Ss({ order: Is++ }, e2), value: t2[0] } : t2[0];
    var a2, n2 = ks(t2);
    try {
      for (n2.s(); !(a2 = n2.n()).done; ) {
        var o2 = a2.value;
        if (!Cs(o2)) {
          if ("object" !== ys(o2)) return;
          if ("?xml" !== o2.tagName) {
            r2[o2.tagName] || (r2[o2.tagName] = []);
            var c2 = As(o2.children || [], o2.attributes);
            "object" === ys(c2) && (c2.attrs ? c2.attrs.order = Is++ : c2.attrs = { order: Is++ }), Object.keys(o2.attributes || {}).length && (c2.attrs = Ss(Ss({}, c2.attrs), o2.attributes)), r2[o2.tagName].push(c2);
          }
        }
      }
    } catch (t3) {
      n2.e(t3);
    } finally {
      n2.f();
    }
    for (var i2 in r2) 1 === r2[i2].length && (r2[i2] = r2[i2][0]);
    return r2;
  }
  function Ps(t2, e2) {
    return Es.apply(this, arguments);
  }
  function Es() {
    return (Es = n(u.mark((function t2(e2, r2) {
      var a2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return t3.prev = 0, t3.next = 3, e2.file(r2).async("string");
          case 3:
            return a2 = t3.sent, t3.abrupt("return", As(Ls(a2, { keepWhitespace: true })));
          case 7:
            return t3.prev = 7, t3.t0 = t3.catch(0), t3.abrupt("return", null);
          case 10:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[0, 7]]);
    })))).apply(this, arguments);
  }
  function Rs(t2) {
    return Rs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, Rs(t2);
  }
  var Ts = /^\s+/;
  var Os = /\s+$/;
  function js(t2, e2) {
    if (e2 = e2 || {}, (t2 = t2 || "") instanceof js) return t2;
    if (!(this instanceof js)) return new js(t2, e2);
    var r2 = (function(t3) {
      var e3 = { r: 0, g: 0, b: 0 }, r3 = 1, a2 = null, n2 = null, o2 = null, c2 = false, i2 = false;
      "string" == typeof t3 && (t3 = (function(t4) {
        t4 = t4.replace(Ts, "").replace(Os, "").toLowerCase();
        var e4, r4 = false;
        if (Xs[t4]) t4 = Xs[t4], r4 = true;
        else if ("transparent" == t4) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        if (e4 = fl.rgb.exec(t4)) return { r: e4[1], g: e4[2], b: e4[3] };
        if (e4 = fl.rgba.exec(t4)) return { r: e4[1], g: e4[2], b: e4[3], a: e4[4] };
        if (e4 = fl.hsl.exec(t4)) return { h: e4[1], s: e4[2], l: e4[3] };
        if (e4 = fl.hsla.exec(t4)) return { h: e4[1], s: e4[2], l: e4[3], a: e4[4] };
        if (e4 = fl.hsv.exec(t4)) return { h: e4[1], s: e4[2], v: e4[3] };
        if (e4 = fl.hsva.exec(t4)) return { h: e4[1], s: e4[2], v: e4[3], a: e4[4] };
        if (e4 = fl.hex8.exec(t4)) return { r: al(e4[1]), g: al(e4[2]), b: al(e4[3]), a: il(e4[4]), format: r4 ? "name" : "hex8" };
        if (e4 = fl.hex6.exec(t4)) return { r: al(e4[1]), g: al(e4[2]), b: al(e4[3]), format: r4 ? "name" : "hex" };
        if (e4 = fl.hex4.exec(t4)) return { r: al(e4[1] + "" + e4[1]), g: al(e4[2] + "" + e4[2]), b: al(e4[3] + "" + e4[3]), a: il(e4[4] + "" + e4[4]), format: r4 ? "name" : "hex8" };
        if (e4 = fl.hex3.exec(t4)) return { r: al(e4[1] + "" + e4[1]), g: al(e4[2] + "" + e4[2]), b: al(e4[3] + "" + e4[3]), format: r4 ? "name" : "hex" };
        return false;
      })(t3));
      "object" == Rs(t3) && (hl(t3.r) && hl(t3.g) && hl(t3.b) ? (s2 = t3.r, l2 = t3.g, u2 = t3.b, e3 = { r: 255 * el(s2, 255), g: 255 * el(l2, 255), b: 255 * el(u2, 255) }, c2 = true, i2 = "%" === String(t3.r).substr(-1) ? "prgb" : "rgb") : hl(t3.h) && hl(t3.s) && hl(t3.v) ? (a2 = ol(t3.s), n2 = ol(t3.v), e3 = (function(t4, e4, r4) {
        t4 = 6 * el(t4, 360), e4 = el(e4, 100), r4 = el(r4, 100);
        var a3 = Math.floor(t4), n3 = t4 - a3, o3 = r4 * (1 - e4), c3 = r4 * (1 - n3 * e4), i3 = r4 * (1 - (1 - n3) * e4), s3 = a3 % 6;
        return { r: 255 * [r4, c3, o3, o3, i3, r4][s3], g: 255 * [i3, r4, r4, c3, o3, o3][s3], b: 255 * [o3, o3, i3, r4, r4, c3][s3] };
      })(t3.h, a2, n2), c2 = true, i2 = "hsv") : hl(t3.h) && hl(t3.s) && hl(t3.l) && (a2 = ol(t3.s), o2 = ol(t3.l), e3 = (function(t4, e4, r4) {
        var a3, n3, o3;
        function c3(t5, e5, r5) {
          return r5 < 0 && (r5 += 1), r5 > 1 && (r5 -= 1), r5 < 1 / 6 ? t5 + 6 * (e5 - t5) * r5 : r5 < 0.5 ? e5 : r5 < 2 / 3 ? t5 + (e5 - t5) * (2 / 3 - r5) * 6 : t5;
        }
        if (t4 = el(t4, 360), e4 = el(e4, 100), r4 = el(r4, 100), 0 === e4) a3 = n3 = o3 = r4;
        else {
          var i3 = r4 < 0.5 ? r4 * (1 + e4) : r4 + e4 - r4 * e4, s3 = 2 * r4 - i3;
          a3 = c3(s3, i3, t4 + 1 / 3), n3 = c3(s3, i3, t4), o3 = c3(s3, i3, t4 - 1 / 3);
        }
        return { r: 255 * a3, g: 255 * n3, b: 255 * o3 };
      })(t3.h, a2, o2), c2 = true, i2 = "hsl"), t3.hasOwnProperty("a") && (r3 = t3.a));
      var s2, l2, u2;
      return r3 = tl(r3), { ok: c2, format: t3.format || i2, r: Math.min(255, Math.max(e3.r, 0)), g: Math.min(255, Math.max(e3.g, 0)), b: Math.min(255, Math.max(e3.b, 0)), a: r3 };
    })(t2);
    this._originalInput = t2, this._r = r2.r, this._g = r2.g, this._b = r2.b, this._a = r2.a, this._roundA = Math.round(100 * this._a) / 100, this._format = e2.format || r2.format, this._gradientType = e2.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = r2.ok;
  }
  function zs(t2, e2, r2) {
    t2 = el(t2, 255), e2 = el(e2, 255), r2 = el(r2, 255);
    var a2, n2, o2 = Math.max(t2, e2, r2), c2 = Math.min(t2, e2, r2), i2 = (o2 + c2) / 2;
    if (o2 == c2) a2 = n2 = 0;
    else {
      var s2 = o2 - c2;
      switch (n2 = i2 > 0.5 ? s2 / (2 - o2 - c2) : s2 / (o2 + c2), o2) {
        case t2:
          a2 = (e2 - r2) / s2 + (e2 < r2 ? 6 : 0);
          break;
        case e2:
          a2 = (r2 - t2) / s2 + 2;
          break;
        case r2:
          a2 = (t2 - e2) / s2 + 4;
      }
      a2 /= 6;
    }
    return { h: a2, s: n2, l: i2 };
  }
  function Bs(t2, e2, r2) {
    t2 = el(t2, 255), e2 = el(e2, 255), r2 = el(r2, 255);
    var a2, n2, o2 = Math.max(t2, e2, r2), c2 = Math.min(t2, e2, r2), i2 = o2, s2 = o2 - c2;
    if (n2 = 0 === o2 ? 0 : s2 / o2, o2 == c2) a2 = 0;
    else {
      switch (o2) {
        case t2:
          a2 = (e2 - r2) / s2 + (e2 < r2 ? 6 : 0);
          break;
        case e2:
          a2 = (r2 - t2) / s2 + 2;
          break;
        case r2:
          a2 = (t2 - e2) / s2 + 4;
      }
      a2 /= 6;
    }
    return { h: a2, s: n2, v: i2 };
  }
  function Ds(t2, e2, r2, a2) {
    var n2 = [nl(Math.round(t2).toString(16)), nl(Math.round(e2).toString(16)), nl(Math.round(r2).toString(16))];
    return a2 && n2[0].charAt(0) == n2[0].charAt(1) && n2[1].charAt(0) == n2[1].charAt(1) && n2[2].charAt(0) == n2[2].charAt(1) ? n2[0].charAt(0) + n2[1].charAt(0) + n2[2].charAt(0) : n2.join("");
  }
  function Fs(t2, e2, r2, a2) {
    return [nl(cl(a2)), nl(Math.round(t2).toString(16)), nl(Math.round(e2).toString(16)), nl(Math.round(r2).toString(16))].join("");
  }
  function Ns(t2, e2) {
    e2 = 0 === e2 ? 0 : e2 || 10;
    var r2 = js(t2).toHsl();
    return r2.s -= e2 / 100, r2.s = rl(r2.s), js(r2);
  }
  function Us(t2, e2) {
    e2 = 0 === e2 ? 0 : e2 || 10;
    var r2 = js(t2).toHsl();
    return r2.s += e2 / 100, r2.s = rl(r2.s), js(r2);
  }
  function Gs(t2) {
    return js(t2).desaturate(100);
  }
  function qs(t2, e2) {
    e2 = 0 === e2 ? 0 : e2 || 10;
    var r2 = js(t2).toHsl();
    return r2.l += e2 / 100, r2.l = rl(r2.l), js(r2);
  }
  function Ws(t2, e2) {
    e2 = 0 === e2 ? 0 : e2 || 10;
    var r2 = js(t2).toRgb();
    return r2.r = Math.max(0, Math.min(255, r2.r - Math.round(-e2 / 100 * 255))), r2.g = Math.max(0, Math.min(255, r2.g - Math.round(-e2 / 100 * 255))), r2.b = Math.max(0, Math.min(255, r2.b - Math.round(-e2 / 100 * 255))), js(r2);
  }
  function Hs(t2, e2) {
    e2 = 0 === e2 ? 0 : e2 || 10;
    var r2 = js(t2).toHsl();
    return r2.l -= e2 / 100, r2.l = rl(r2.l), js(r2);
  }
  function Zs(t2, e2) {
    var r2 = js(t2).toHsl(), a2 = (r2.h + e2) % 360;
    return r2.h = a2 < 0 ? 360 + a2 : a2, js(r2);
  }
  function Ys(t2) {
    var e2 = js(t2).toHsl();
    return e2.h = (e2.h + 180) % 360, js(e2);
  }
  function Vs(t2, e2) {
    if (isNaN(e2) || e2 <= 0) throw new Error("Argument to polyad must be a positive number");
    for (var r2 = js(t2).toHsl(), a2 = [js(t2)], n2 = 360 / e2, o2 = 1; o2 < e2; o2++) a2.push(js({ h: (r2.h + o2 * n2) % 360, s: r2.s, l: r2.l }));
    return a2;
  }
  function Qs(t2) {
    var e2 = js(t2).toHsl(), r2 = e2.h;
    return [js(t2), js({ h: (r2 + 72) % 360, s: e2.s, l: e2.l }), js({ h: (r2 + 216) % 360, s: e2.s, l: e2.l })];
  }
  function $s(t2, e2, r2) {
    e2 = e2 || 6, r2 = r2 || 30;
    var a2 = js(t2).toHsl(), n2 = 360 / r2, o2 = [js(t2)];
    for (a2.h = (a2.h - (n2 * e2 >> 1) + 720) % 360; --e2; ) a2.h = (a2.h + n2) % 360, o2.push(js(a2));
    return o2;
  }
  function Ks(t2, e2) {
    e2 = e2 || 6;
    for (var r2 = js(t2).toHsv(), a2 = r2.h, n2 = r2.s, o2 = r2.v, c2 = [], i2 = 1 / e2; e2--; ) c2.push(js({ h: a2, s: n2, v: o2 })), o2 = (o2 + i2) % 1;
    return c2;
  }
  js.prototype = { isDark: function() {
    return this.getBrightness() < 128;
  }, isLight: function() {
    return !this.isDark();
  }, isValid: function() {
    return this._ok;
  }, getOriginalInput: function() {
    return this._originalInput;
  }, getFormat: function() {
    return this._format;
  }, getAlpha: function() {
    return this._a;
  }, getBrightness: function() {
    var t2 = this.toRgb();
    return (299 * t2.r + 587 * t2.g + 114 * t2.b) / 1e3;
  }, getLuminance: function() {
    var t2, e2, r2, a2 = this.toRgb();
    return t2 = a2.r / 255, e2 = a2.g / 255, r2 = a2.b / 255, 0.2126 * (t2 <= 0.03928 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4)) + 0.7152 * (e2 <= 0.03928 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4)) + 0.0722 * (r2 <= 0.03928 ? r2 / 12.92 : Math.pow((r2 + 0.055) / 1.055, 2.4));
  }, setAlpha: function(t2) {
    return this._a = tl(t2), this._roundA = Math.round(100 * this._a) / 100, this;
  }, toHsv: function() {
    var t2 = Bs(this._r, this._g, this._b);
    return { h: 360 * t2.h, s: t2.s, v: t2.v, a: this._a };
  }, toHsvString: function() {
    var t2 = Bs(this._r, this._g, this._b), e2 = Math.round(360 * t2.h), r2 = Math.round(100 * t2.s), a2 = Math.round(100 * t2.v);
    return 1 == this._a ? "hsv(" + e2 + ", " + r2 + "%, " + a2 + "%)" : "hsva(" + e2 + ", " + r2 + "%, " + a2 + "%, " + this._roundA + ")";
  }, toHsl: function() {
    var t2 = zs(this._r, this._g, this._b);
    return { h: 360 * t2.h, s: t2.s, l: t2.l, a: this._a };
  }, toHslString: function() {
    var t2 = zs(this._r, this._g, this._b), e2 = Math.round(360 * t2.h), r2 = Math.round(100 * t2.s), a2 = Math.round(100 * t2.l);
    return 1 == this._a ? "hsl(" + e2 + ", " + r2 + "%, " + a2 + "%)" : "hsla(" + e2 + ", " + r2 + "%, " + a2 + "%, " + this._roundA + ")";
  }, toHex: function(t2) {
    return Ds(this._r, this._g, this._b, t2);
  }, toHexString: function(t2) {
    return "#" + this.toHex(t2);
  }, toHex8: function(t2) {
    return (function(t3, e2, r2, a2, n2) {
      var o2 = [nl(Math.round(t3).toString(16)), nl(Math.round(e2).toString(16)), nl(Math.round(r2).toString(16)), nl(cl(a2))];
      if (n2 && o2[0].charAt(0) == o2[0].charAt(1) && o2[1].charAt(0) == o2[1].charAt(1) && o2[2].charAt(0) == o2[2].charAt(1) && o2[3].charAt(0) == o2[3].charAt(1)) return o2[0].charAt(0) + o2[1].charAt(0) + o2[2].charAt(0) + o2[3].charAt(0);
      return o2.join("");
    })(this._r, this._g, this._b, this._a, t2);
  }, toHex8String: function(t2) {
    return "#" + this.toHex8(t2);
  }, toRgb: function() {
    return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
  }, toRgbString: function() {
    return 1 == this._a ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  }, toPercentageRgb: function() {
    return { r: Math.round(100 * el(this._r, 255)) + "%", g: Math.round(100 * el(this._g, 255)) + "%", b: Math.round(100 * el(this._b, 255)) + "%", a: this._a };
  }, toPercentageRgbString: function() {
    return 1 == this._a ? "rgb(" + Math.round(100 * el(this._r, 255)) + "%, " + Math.round(100 * el(this._g, 255)) + "%, " + Math.round(100 * el(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * el(this._r, 255)) + "%, " + Math.round(100 * el(this._g, 255)) + "%, " + Math.round(100 * el(this._b, 255)) + "%, " + this._roundA + ")";
  }, toName: function() {
    return 0 === this._a ? "transparent" : !(this._a < 1) && (Js[Ds(this._r, this._g, this._b, true)] || false);
  }, toFilter: function(t2) {
    var e2 = "#" + Fs(this._r, this._g, this._b, this._a), r2 = e2, a2 = this._gradientType ? "GradientType = 1, " : "";
    if (t2) {
      var n2 = js(t2);
      r2 = "#" + Fs(n2._r, n2._g, n2._b, n2._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + a2 + "startColorstr=" + e2 + ",endColorstr=" + r2 + ")";
  }, toString: function(t2) {
    var e2 = !!t2;
    t2 = t2 || this._format;
    var r2 = false, a2 = this._a < 1 && this._a >= 0;
    return e2 || !a2 || "hex" !== t2 && "hex6" !== t2 && "hex3" !== t2 && "hex4" !== t2 && "hex8" !== t2 && "name" !== t2 ? ("rgb" === t2 && (r2 = this.toRgbString()), "prgb" === t2 && (r2 = this.toPercentageRgbString()), "hex" !== t2 && "hex6" !== t2 || (r2 = this.toHexString()), "hex3" === t2 && (r2 = this.toHexString(true)), "hex4" === t2 && (r2 = this.toHex8String(true)), "hex8" === t2 && (r2 = this.toHex8String()), "name" === t2 && (r2 = this.toName()), "hsl" === t2 && (r2 = this.toHslString()), "hsv" === t2 && (r2 = this.toHsvString()), r2 || this.toHexString()) : "name" === t2 && 0 === this._a ? this.toName() : this.toRgbString();
  }, clone: function() {
    return js(this.toString());
  }, _applyModification: function(t2, e2) {
    var r2 = t2.apply(null, [this].concat([].slice.call(e2)));
    return this._r = r2._r, this._g = r2._g, this._b = r2._b, this.setAlpha(r2._a), this;
  }, lighten: function() {
    return this._applyModification(qs, arguments);
  }, brighten: function() {
    return this._applyModification(Ws, arguments);
  }, darken: function() {
    return this._applyModification(Hs, arguments);
  }, desaturate: function() {
    return this._applyModification(Ns, arguments);
  }, saturate: function() {
    return this._applyModification(Us, arguments);
  }, greyscale: function() {
    return this._applyModification(Gs, arguments);
  }, spin: function() {
    return this._applyModification(Zs, arguments);
  }, _applyCombination: function(t2, e2) {
    return t2.apply(null, [this].concat([].slice.call(e2)));
  }, analogous: function() {
    return this._applyCombination($s, arguments);
  }, complement: function() {
    return this._applyCombination(Ys, arguments);
  }, monochromatic: function() {
    return this._applyCombination(Ks, arguments);
  }, splitcomplement: function() {
    return this._applyCombination(Qs, arguments);
  }, triad: function() {
    return this._applyCombination(Vs, [3]);
  }, tetrad: function() {
    return this._applyCombination(Vs, [4]);
  } }, js.fromRatio = function(t2, e2) {
    if ("object" == Rs(t2)) {
      var r2 = {};
      for (var a2 in t2) t2.hasOwnProperty(a2) && (r2[a2] = "a" === a2 ? t2[a2] : ol(t2[a2]));
      t2 = r2;
    }
    return js(t2, e2);
  }, js.equals = function(t2, e2) {
    return !(!t2 || !e2) && js(t2).toRgbString() == js(e2).toRgbString();
  }, js.random = function() {
    return js.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
  }, js.mix = function(t2, e2, r2) {
    r2 = 0 === r2 ? 0 : r2 || 50;
    var a2 = js(t2).toRgb(), n2 = js(e2).toRgb(), o2 = r2 / 100;
    return js({ r: (n2.r - a2.r) * o2 + a2.r, g: (n2.g - a2.g) * o2 + a2.g, b: (n2.b - a2.b) * o2 + a2.b, a: (n2.a - a2.a) * o2 + a2.a });
  }, js.readability = function(t2, e2) {
    var r2 = js(t2), a2 = js(e2);
    return (Math.max(r2.getLuminance(), a2.getLuminance()) + 0.05) / (Math.min(r2.getLuminance(), a2.getLuminance()) + 0.05);
  }, js.isReadable = function(t2, e2, r2) {
    var a2, n2, o2 = js.readability(t2, e2);
    switch (n2 = false, (a2 = (function(t3) {
      var e3, r3;
      e3 = ((t3 = t3 || { level: "AA", size: "small" }).level || "AA").toUpperCase(), r3 = (t3.size || "small").toLowerCase(), "AA" !== e3 && "AAA" !== e3 && (e3 = "AA");
      "small" !== r3 && "large" !== r3 && (r3 = "small");
      return { level: e3, size: r3 };
    })(r2)).level + a2.size) {
      case "AAsmall":
      case "AAAlarge":
        n2 = o2 >= 4.5;
        break;
      case "AAlarge":
        n2 = o2 >= 3;
        break;
      case "AAAsmall":
        n2 = o2 >= 7;
    }
    return n2;
  }, js.mostReadable = function(t2, e2, r2) {
    var a2, n2, o2, c2, i2 = null, s2 = 0;
    n2 = (r2 = r2 || {}).includeFallbackColors, o2 = r2.level, c2 = r2.size;
    for (var l2 = 0; l2 < e2.length; l2++) (a2 = js.readability(t2, e2[l2])) > s2 && (s2 = a2, i2 = js(e2[l2]));
    return js.isReadable(t2, i2, { level: o2, size: c2 }) || !n2 ? i2 : (r2.includeFallbackColors = false, js.mostReadable(t2, ["#fff", "#000"], r2));
  };
  var Xs = js.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
  var Js = js.hexNames = (function(t2) {
    var e2 = {};
    for (var r2 in t2) t2.hasOwnProperty(r2) && (e2[t2[r2]] = r2);
    return e2;
  })(Xs);
  function tl(t2) {
    return t2 = parseFloat(t2), (isNaN(t2) || t2 < 0 || t2 > 1) && (t2 = 1), t2;
  }
  function el(t2, e2) {
    (function(t3) {
      return "string" == typeof t3 && -1 != t3.indexOf(".") && 1 === parseFloat(t3);
    })(t2) && (t2 = "100%");
    var r2 = (function(t3) {
      return "string" == typeof t3 && -1 != t3.indexOf("%");
    })(t2);
    return t2 = Math.min(e2, Math.max(0, parseFloat(t2))), r2 && (t2 = parseInt(t2 * e2, 10) / 100), Math.abs(t2 - e2) < 1e-6 ? 1 : t2 % e2 / parseFloat(e2);
  }
  function rl(t2) {
    return Math.min(1, Math.max(0, t2));
  }
  function al(t2) {
    return parseInt(t2, 16);
  }
  function nl(t2) {
    return 1 == t2.length ? "0" + t2 : "" + t2;
  }
  function ol(t2) {
    return t2 <= 1 && (t2 = 100 * t2 + "%"), t2;
  }
  function cl(t2) {
    return Math.round(255 * parseFloat(t2)).toString(16);
  }
  function il(t2) {
    return al(t2) / 255;
  }
  var sl;
  var ll;
  var ul;
  var fl = (ll = "[\\s|\\(]+(" + (sl = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + sl + ")[,|\\s]+(" + sl + ")\\s*\\)?", ul = "[\\s|\\(]+(" + sl + ")[,|\\s]+(" + sl + ")[,|\\s]+(" + sl + ")[,|\\s]+(" + sl + ")\\s*\\)?", { CSS_UNIT: new RegExp(sl), rgb: new RegExp("rgb" + ll), rgba: new RegExp("rgba" + ul), hsl: new RegExp("hsl" + ll), hsla: new RegExp("hsla" + ul), hsv: new RegExp("hsv" + ll), hsva: new RegExp("hsva" + ul), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
  function hl(t2) {
    return !!fl.CSS_UNIT.exec(t2);
  }
  function dl(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return pl(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return pl(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function pl(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function bl(t2) {
    for (var e2, r2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a2 = new Uint8Array(t2), n2 = a2.byteLength, o2 = n2 % 3, c2 = n2 - o2, i2 = "", s2 = 0; s2 < c2; s2 += 3) i2 += r2[(16515072 & (e2 = a2[s2] << 16 | a2[s2 + 1] << 8 | a2[s2 + 2])) >> 18] + r2[(258048 & e2) >> 12] + r2[(4032 & e2) >> 6] + r2[63 & e2];
    return 1 === o2 ? i2 += r2[(252 & (e2 = a2[c2])) >> 2] + r2[(3 & e2) << 4] + "==" : 2 === o2 && (i2 += r2[(64512 & (e2 = a2[c2] << 8 | a2[c2 + 1])) >> 10] + r2[(1008 & e2) >> 4] + r2[(15 & e2) << 2] + "="), i2;
  }
  function gl(t2) {
    return t2.substr(2 + (~-t2.lastIndexOf(".") >>> 0));
  }
  function vl(t2, e2) {
    if (!t2) return t2;
    var r2 = "";
    if (t2.constructor === Array) for (var a2 = 0; a2 < t2.length; a2++) r2 += e2(t2[a2], a2);
    else r2 += e2(t2, 0);
    return r2;
  }
  function ml(t2, e2) {
    if (!t2) return t2;
    var r2, a2 = dl(e2);
    try {
      for (a2.s(); !(r2 = a2.n()).done; ) {
        if (!(t2 = t2[r2.value])) return t2;
      }
    } catch (t3) {
      a2.e(t3);
    } finally {
      a2.f();
    }
    return t2;
  }
  function yl(t2) {
    return t2 ? Math.round(t2 / 6e4) : 0;
  }
  function Ll(t2) {
    var e2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return t2.replace(/[&<>"']/g, (function(t3) {
      return e2[t3];
    }));
  }
  function wl(t2) {
    var e2 = "";
    switch (t2.toLowerCase()) {
      case "jpg":
      case "jpeg":
        e2 = "image/jpeg";
        break;
      case "png":
        e2 = "image/png";
        break;
      case "gif":
        e2 = "image/gif";
        break;
      case "emf":
        e2 = "image/x-emf";
        break;
      case "wmf":
        e2 = "image/x-wmf";
        break;
      case "svg":
        e2 = "image/svg+xml";
        break;
      case "mp4":
        e2 = "video/mp4";
        break;
      case "webm":
        e2 = "video/webm";
        break;
      case "ogg":
        e2 = "video/ogg";
        break;
      case "avi":
        e2 = "video/avi";
        break;
      case "mpg":
        e2 = "video/mpg";
        break;
      case "wmv":
        e2 = "video/wmv";
        break;
      case "mp3":
        e2 = "audio/mpeg";
        break;
      case "wav":
        e2 = "audio/wav";
        break;
      case "tif":
      case "tiff":
        e2 = "image/tiff";
    }
    return e2;
  }
  function _l(t2) {
    return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(t2);
  }
  function kl(t2) {
    for (var e2 = t2.toString(16); e2.length < 2; ) e2 = "0" + e2;
    return e2;
  }
  function Ml(t2) {
    if ("undefined" == typeof DOMParser) return "" !== t2.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    var e2 = new DOMParser().parseFromString(t2, "text/html");
    return "" !== (e2.body.textContent || e2.body.innerText).trim();
  }
  function xl(t2) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
    return parseFloat(t2.toFixed(e2));
  }
  function Sl(t2, e2, r2, a2) {
    var n2, o2;
    if (r2) o2 = r2;
    else {
      var c2 = ml(e2.slideContent, ["p:sld", "p:clrMapOvr", "a:overrideClrMapping", "attrs"]);
      o2 = c2 || ((c2 = ml(e2.slideLayoutContent, ["p:sldLayout", "p:clrMapOvr", "a:overrideClrMapping", "attrs"])) || ml(e2.slideMasterContent, ["p:sldMaster", "p:clrMap", "attrs"]));
    }
    var i2 = t2.substr(2);
    if ("phClr" === i2 && a2) n2 = a2;
    else {
      if (o2) switch (i2) {
        case "tx1":
        case "tx2":
        case "bg1":
        case "bg2":
          t2 = "a:" + o2[i2];
      }
      else switch (i2) {
        case "tx1":
          t2 = "a:dk1";
          break;
        case "tx2":
          t2 = "a:dk2";
          break;
        case "bg1":
          t2 = "a:lt1";
          break;
        case "bg2":
          t2 = "a:lt2";
      }
      var s2 = ml(e2.themeContent, ["a:theme", "a:themeElements", "a:clrScheme", t2]);
      !(n2 = ml(s2, ["a:srgbClr", "attrs", "val"])) && s2 && (n2 = ml(s2, ["a:sysClr", "attrs", "lastClr"]));
    }
    return n2;
  }
  function Il(t2, e2, r2) {
    return r2 < 0 && (r2 += 6), r2 >= 6 && (r2 -= 6), r2 < 1 ? (e2 - t2) * r2 + t2 : r2 < 3 ? e2 : r2 < 4 ? (e2 - t2) * (4 - r2) + t2 : t2;
  }
  function Cl(t2, e2, r2) {
    var a2 = js(t2).toHsl();
    e2 >= 1 && (e2 = 1);
    var n2 = a2.l * e2 + (1 - e2);
    return r2 ? js({ h: a2.h, s: a2.s, l: n2, a: a2.a }).toHex8() : js({ h: a2.h, s: a2.s, l: n2, a: a2.a }).toHex();
  }
  function Al(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return Pl(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return Pl(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function Pl(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function El(t2) {
    var e2 = "";
    return t2["a:noFill"] && (e2 = "NO_FILL"), t2["a:solidFill"] && (e2 = "SOLID_FILL"), t2["a:gradFill"] && (e2 = "GRADIENT_FILL"), t2["a:pattFill"] && (e2 = "PATTERN_FILL"), t2["a:blipFill"] && (e2 = "PIC_FILL"), t2["a:grpFill"] && (e2 = "GROUP_FILL"), e2;
  }
  function Rl() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return { ref: t2, base64: "", blob: "" };
  }
  function Tl() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return { ref: t2, blob: "" };
  }
  function Ol(t2, e2) {
    var r2 = t2[e2] || {};
    return t2[e2] = r2, r2;
  }
  function jl(t2, e2, r2) {
    return zl.apply(this, arguments);
  }
  function zl() {
    return zl = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2, i2, s2, l2, f2, h2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (n2 = h2.length > 3 && void 0 !== h2[3] ? h2[3] : "base64", e2 && ("base64" === n2 || "blob" === n2)) {
              t3.next = 3;
              break;
            }
            return t3.abrupt("return", "");
          case 3:
            if (o2 = Ll(e2), c2 = Ol(r2, a2), i2 = c2[o2] || { base64: "", blob: "" }, c2[o2] = i2, !i2[n2]) {
              t3.next = 9;
              break;
            }
            return t3.abrupt("return", i2[n2]);
          case 9:
            if ("xml" !== (s2 = o2.split(".").pop().toLowerCase())) {
              t3.next = 12;
              break;
            }
            return t3.abrupt("return", "");
          case 12:
            return t3.next = 14, r2.zip.file(o2).async("arraybuffer");
          case 14:
            return l2 = t3.sent, f2 = wl(s2), "base64" === n2 ? i2.base64 = "data:".concat(f2, ";base64,").concat(bl(l2)) : "blob" === n2 && (i2.blob = URL.createObjectURL(new Blob([l2], f2 ? { type: f2 } : void 0))), t3.abrupt("return", i2[n2]);
          case 18:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), zl.apply(this, arguments);
  }
  function Bl(t2, e2) {
    return Dl.apply(this, arguments);
  }
  function Dl() {
    return Dl = n(u.mark((function t2(e2, r2) {
      var a2, n2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return a2 = n2.length > 2 && void 0 !== n2[2] ? n2[2] : "base64", t3.next = 3, jl(e2, r2, "loadedImages", a2);
          case 3:
            return t3.abrupt("return", t3.sent);
          case 4:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Dl.apply(this, arguments);
  }
  function Fl(t2, e2) {
    return Nl.apply(this, arguments);
  }
  function Nl() {
    return Nl = n(u.mark((function t2(e2, r2) {
      var a2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if ("blob" === (a2.length > 2 && void 0 !== a2[2] ? a2[2] : "blob")) {
              t3.next = 3;
              break;
            }
            return t3.abrupt("return", "");
          case 3:
            return t3.next = 5, jl(e2, r2, "loadedVideos", "blob");
          case 5:
            return t3.abrupt("return", t3.sent);
          case 6:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Nl.apply(this, arguments);
  }
  function Ul(t2, e2) {
    return Gl.apply(this, arguments);
  }
  function Gl() {
    return Gl = n(u.mark((function t2(e2, r2) {
      var a2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if ("blob" === (a2.length > 2 && void 0 !== a2[2] ? a2[2] : "blob")) {
              t3.next = 3;
              break;
            }
            return t3.abrupt("return", "");
          case 3:
            return t3.next = 5, jl(e2, r2, "loadedAudios", "blob");
          case 5:
            return t3.abrupt("return", t3.sent);
          case 6:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Gl.apply(this, arguments);
  }
  function ql(t2) {
    var e2 = ml(t2, ["options", "imageMode"]);
    return "blob" === e2 || "both" === e2 || "none" === e2 ? e2 : "base64";
  }
  function Wl(t2) {
    return "blob" === ml(t2, ["options", "videoMode"]) ? "blob" : "none";
  }
  function Hl(t2) {
    return "blob" === ml(t2, ["options", "audioMode"]) ? "blob" : "none";
  }
  function Zl(t2, e2) {
    return Yl.apply(this, arguments);
  }
  function Yl() {
    return (Yl = n(u.mark((function t2(e2, r2) {
      var a2, n2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (a2 = Rl(e2 || ""), e2) {
              t3.next = 3;
              break;
            }
            return t3.abrupt("return", a2);
          case 3:
            if ("base64" !== (n2 = ql(r2)) && "both" !== n2) {
              t3.next = 8;
              break;
            }
            return t3.next = 7, Bl(e2, r2, "base64");
          case 7:
            a2.base64 = t3.sent;
          case 8:
            if ("blob" !== n2 && "both" !== n2) {
              t3.next = 12;
              break;
            }
            return t3.next = 11, Bl(e2, r2, "blob");
          case 11:
            a2.blob = t3.sent;
          case 12:
            return t3.abrupt("return", a2);
          case 13:
          case "end":
            return t3.stop();
        }
      }), t2);
    })))).apply(this, arguments);
  }
  function Vl(t2, e2) {
    return Ql.apply(this, arguments);
  }
  function Ql() {
    return (Ql = n(u.mark((function t2(e2, r2) {
      var a2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (a2 = Tl(e2 || ""), e2) {
              t3.next = 3;
              break;
            }
            return t3.abrupt("return", a2);
          case 3:
            if ("blob" !== Wl(r2)) {
              t3.next = 7;
              break;
            }
            return t3.next = 6, Fl(e2, r2, "blob");
          case 6:
            a2.blob = t3.sent;
          case 7:
            return t3.abrupt("return", a2);
          case 8:
          case "end":
            return t3.stop();
        }
      }), t2);
    })))).apply(this, arguments);
  }
  function $l(t2, e2) {
    return Kl.apply(this, arguments);
  }
  function Kl() {
    return (Kl = n(u.mark((function t2(e2, r2) {
      var a2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (a2 = Tl(e2 || ""), e2) {
              t3.next = 3;
              break;
            }
            return t3.abrupt("return", a2);
          case 3:
            if ("blob" !== Hl(r2)) {
              t3.next = 7;
              break;
            }
            return t3.next = 6, Ul(e2, r2, "blob");
          case 6:
            a2.blob = t3.sent;
          case 7:
            return t3.abrupt("return", a2);
          case 8:
          case "end":
            return t3.stop();
        }
      }), t2);
    })))).apply(this, arguments);
  }
  function Xl(t2, e2, r2) {
    return Jl.apply(this, arguments);
  }
  function Jl() {
    return Jl = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (r2) {
              t3.next = 2;
              break;
            }
            return t3.abrupt("return", Rl());
          case 2:
            if (n2 = ml(r2, ["a:blip", "attrs", "r:embed"]), "slideBg" === e2 || "slide" === e2 ? o2 = ml(a2, ["slideResObj", n2, "target"]) : "slideLayoutBg" === e2 ? o2 = ml(a2, ["layoutResObj", n2, "target"]) : "slideMasterBg" === e2 ? o2 = ml(a2, ["masterResObj", n2, "target"]) : "themeBg" === e2 ? o2 = ml(a2, ["themeResObj", n2, "target"]) : "diagramBg" === e2 && (o2 = ml(a2, ["diagramResObj", n2, "target"])), o2) {
              t3.next = 6;
              break;
            }
            return t3.abrupt("return", Rl());
          case 6:
            return t3.next = 8, Zl(o2, a2);
          case 8:
            return t3.abrupt("return", t3.sent);
          case 9:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Jl.apply(this, arguments);
  }
  function tu(t2) {
    var e2 = ml(t2["a:blip"], ["a:alphaModFix", "attrs"]), r2 = 1;
    return e2 && e2.amt && "" !== e2.amt && (r2 = parseInt(e2.amt) / 1e5), r2;
  }
  function eu(t2) {
    if (!t2) return null;
    var e2 = t2["a:blip"];
    if (!e2) return null;
    var r2 = {}, a2 = e2["a:extLst"];
    if (a2 && a2["a:ext"]) {
      var n2, o2 = Al(Array.isArray(a2["a:ext"]) ? a2["a:ext"] : [a2["a:ext"]]);
      try {
        for (o2.s(); !(n2 = o2.n()).done; ) {
          var c2 = n2.value;
          if (c2["a14:imgProps"] && c2["a14:imgProps"]["a14:imgLayer"]) {
            var i2 = c2["a14:imgProps"]["a14:imgLayer"]["a14:imgEffect"];
            if (i2) {
              var s2, l2 = Al(Array.isArray(i2) ? i2 : [i2]);
              try {
                for (l2.s(); !(s2 = l2.n()).done; ) {
                  var u2 = s2.value;
                  if (u2["a14:saturation"]) {
                    var f2 = ml(u2, ["a14:saturation", "attrs", "sat"]);
                    f2 && (r2.saturation = parseInt(f2) / 1e5);
                  }
                  if (u2["a14:brightnessContrast"]) {
                    var h2 = ml(u2, ["a14:brightnessContrast", "attrs", "bright"]), d2 = ml(u2, ["a14:brightnessContrast", "attrs", "contrast"]);
                    h2 && (r2.brightness = parseInt(h2) / 1e5), d2 && (r2.contrast = parseInt(d2) / 1e5);
                  }
                  if (u2["a14:sharpenSoften"]) {
                    var p2 = ml(u2, ["a14:sharpenSoften", "attrs", "amount"]);
                    if (p2) {
                      var b2 = parseInt(p2) / 1e5;
                      b2 > 0 ? r2.sharpen = b2 : r2.soften = Math.abs(b2);
                    }
                  }
                  if (u2["a14:colorTemperature"]) {
                    var g2 = ml(u2, ["a14:colorTemperature", "attrs", "colorTemp"]);
                    g2 && (r2.colorTemperature = parseInt(g2));
                  }
                }
              } catch (t3) {
                l2.e(t3);
              } finally {
                l2.f();
              }
            }
          }
        }
      } catch (t3) {
        o2.e(t3);
      } finally {
        o2.f();
      }
    }
    return Object.keys(r2).length > 0 ? r2 : null;
  }
  function ru(t2, e2, r2) {
    return au.apply(this, arguments);
  }
  function au() {
    return (au = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2, i2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return t3.next = 2, Xl(r2, e2["a:blipFill"], a2);
          case 2:
            return n2 = t3.sent, o2 = e2["a:blipFill"]["a:blip"], c2 = ml(o2, ["a:alphaModFix", "attrs"]), i2 = 1, c2 && c2.amt && "" !== c2.amt && (i2 = parseInt(c2.amt) / 1e5), t3.abrupt("return", { ref: n2.ref, base64: n2.base64, blob: n2.blob, opacity: i2 });
          case 8:
          case "end":
            return t3.stop();
        }
      }), t2);
    })))).apply(this, arguments);
  }
  function nu(t2, e2) {
    for (var r2 = t2["a:gsLst"]["a:gs"], a2 = [], n2 = 0; n2 < r2.length; n2++) {
      var o2 = gu(r2[n2], void 0, void 0, e2), c2 = ml(r2[n2], ["attrs", "pos"]);
      a2[n2] = { pos: c2 ? c2 / 1e3 + "%" : "", color: o2 };
    }
    var i2 = t2["a:lin"], s2 = 0, l2 = "line";
    if (i2) s2 = yl(i2.attrs.ang);
    else {
      var u2 = t2["a:path"];
      u2 && u2.attrs && u2.attrs.path && (l2 = u2.attrs.path);
    }
    return { rot: s2, path: l2, colors: a2.sort((function(t3, e3) {
      return parseInt(t3.pos) - parseInt(e3.pos);
    })) };
  }
  function ou(t2, e2) {
    if (!t2) return null;
    var r2 = t2["a:pattFill"];
    if (!r2) return null;
    var a2 = ml(r2, ["attrs", "prst"]), n2 = r2["a:fgClr"], o2 = r2["a:bgClr"], c2 = "#000000", i2 = "#FFFFFF";
    return n2 && (c2 = gu(n2, void 0, void 0, e2)), o2 && (i2 = gu(o2, void 0, void 0, e2)), { type: a2, foregroundColor: c2, backgroundColor: i2 };
  }
  function cu(t2, e2, r2, a2) {
    if (t2) {
      for (var n2 = t2["a:gradFill"], o2 = n2["a:gsLst"]["a:gs"], c2 = [], i2 = 0; i2 < o2.length; i2++) {
        var s2 = gu(o2[i2], r2["p:sldMaster"]["p:clrMap"].attrs, e2, a2), l2 = ml(o2[i2], ["attrs", "pos"]);
        c2[i2] = { pos: l2 ? l2 / 1e3 + "%" : "", color: s2 };
      }
      var u2 = n2["a:lin"], f2 = 0, h2 = "line";
      if (u2) f2 = yl(u2.attrs.ang) + 0;
      else {
        var d2 = n2["a:path"];
        d2 && d2.attrs && d2.attrs.path && (h2 = d2.attrs.path);
      }
      return { rot: f2, path: h2, colors: c2.sort((function(t3, e3) {
        return parseInt(t3.pos) - parseInt(e3.pos);
      })) };
    }
    return e2 ? -1 === e2.indexOf("#") ? "#".concat(e2) : e2 : null;
  }
  function iu(t2) {
    return su.apply(this, arguments);
  }
  function su() {
    return su = n(u.mark((function t2(e2) {
      var r2, a2, n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2, x2, S2, I2, C2, A2, P2, E2, R2, T2, O2, j2, z2, B2, D2, F2, N2, U2, G2, q2, W2, H2, Z2, Y2, V2, Q2, $2, K2, X2, J2, tt2, et2, rt2, at2, nt2, ot2, ct2, it2, st2, lt2, ut2, ft2, ht2, dt2, pt2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (r2 = e2.slideContent, a2 = e2.slideLayoutContent, n2 = e2.slideMasterContent, o2 = ml(r2, ["p:sld", "p:cSld", "p:bg", "p:bgPr"]), c2 = ml(r2, ["p:sld", "p:cSld", "p:bg", "p:bgRef"]), i2 = "#fff", s2 = "color", !o2) {
              t3.next = 32;
              break;
            }
            if ("SOLID_FILL" !== (l2 = El(o2))) {
              t3.next = 17;
              break;
            }
            f2 = o2["a:solidFill"], (d2 = ml(r2, ["p:sld", "p:clrMapOvr", "a:overrideClrMapping", "attrs"])) ? h2 = d2 : (p2 = ml(a2, ["p:sldLayout", "p:clrMapOvr", "a:overrideClrMapping", "attrs"]), h2 = p2 || ml(n2, ["p:sldMaster", "p:clrMap", "attrs"])), b2 = gu(f2, h2, void 0, e2), i2 = b2, t3.next = 30;
            break;
          case 17:
            if ("GRADIENT_FILL" !== l2) {
              t3.next = 22;
              break;
            }
            "string" == typeof (g2 = cu(o2, void 0, n2, e2)) ? i2 = g2 : g2 && (i2 = g2, s2 = "gradient"), t3.next = 30;
            break;
          case 22:
            if ("PIC_FILL" !== l2) {
              t3.next = 29;
              break;
            }
            return t3.next = 25, ru(o2, "slideBg", e2);
          case 25:
            i2 = t3.sent, s2 = "image", t3.next = 30;
            break;
          case 29:
            "PATTERN_FILL" === l2 && (v2 = ou(o2, e2)) && (i2 = v2, s2 = "pattern");
          case 30:
            t3.next = 157;
            break;
          case 32:
            if (!c2) {
              t3.next = 40;
              break;
            }
            (y2 = ml(r2, ["p:sld", "p:clrMapOvr", "a:overrideClrMapping", "attrs"])) ? m2 = y2 : (L2 = ml(a2, ["p:sldLayout", "p:clrMapOvr", "a:overrideClrMapping", "attrs"]), m2 = L2 || ml(n2, ["p:sldMaster", "p:clrMap", "attrs"])), w2 = gu(c2, m2, void 0, e2), (_2 = Number(c2.attrs.idx)) > 1e3 && (k2 = _2 - 1e3, M2 = e2.themeContent["a:theme"]["a:themeElements"]["a:fmtScheme"]["a:bgFillStyleLst"], x2 = [], Object.keys(M2).forEach((function(t4) {
              var e3 = M2[t4];
              if ("attrs" !== t4) if (e3.constructor === Array) for (var r3 = 0; r3 < e3.length; r3++) {
                var a3 = {};
                a3[t4] = e3[r3], e3[r3].attrs && (a3.idex = e3[r3].attrs.order, a3.attrs = { order: e3[r3].attrs.order }), x2.push(a3);
              }
              else {
                var n3 = {};
                n3[t4] = e3, e3.attrs && (n3.idex = e3.attrs.order, n3.attrs = { order: e3.attrs.order }), x2.push(n3);
              }
            })), (S2 = x2.slice(0)).sort((function(t4, e3) {
              return t4.idex - e3.idex;
            })), I2 = S2[k2 - 1], "SOLID_FILL" === (C2 = El(I2)) ? (A2 = I2["a:solidFill"], P2 = gu(A2, m2, void 0, e2), i2 = P2) : "GRADIENT_FILL" === C2 && ("string" == typeof (E2 = cu(I2, w2, n2, e2)) ? i2 = E2 : E2 && (i2 = E2, s2 = "gradient"))), t3.next = 157;
            break;
          case 40:
            if (o2 = ml(a2, ["p:sldLayout", "p:cSld", "p:bg", "p:bgPr"]), c2 = ml(a2, ["p:sldLayout", "p:cSld", "p:bg", "p:bgRef"]), T2 = ml(a2, ["p:sldLayout", "p:clrMapOvr", "a:overrideClrMapping", "attrs"]), R2 = T2 || ml(n2, ["p:sldMaster", "p:clrMap", "attrs"]), !o2) {
              t3.next = 67;
              break;
            }
            if ("SOLID_FILL" !== (O2 = El(o2))) {
              t3.next = 52;
              break;
            }
            j2 = o2["a:solidFill"], z2 = gu(j2, R2, void 0, e2), i2 = z2, t3.next = 65;
            break;
          case 52:
            if ("GRADIENT_FILL" !== O2) {
              t3.next = 57;
              break;
            }
            "string" == typeof (B2 = cu(o2, void 0, n2, e2)) ? i2 = B2 : B2 && (i2 = B2, s2 = "gradient"), t3.next = 65;
            break;
          case 57:
            if ("PIC_FILL" !== O2) {
              t3.next = 64;
              break;
            }
            return t3.next = 60, ru(o2, "slideLayoutBg", e2);
          case 60:
            i2 = t3.sent, s2 = "image", t3.next = 65;
            break;
          case 64:
            "PATTERN_FILL" === O2 && (D2 = ou(o2, e2)) && (i2 = D2, s2 = "pattern");
          case 65:
            t3.next = 157;
            break;
          case 67:
            if (!c2) {
              t3.next = 100;
              break;
            }
            if (F2 = gu(c2, R2, void 0, e2), !((N2 = Number(c2.attrs.idx)) > 1e3)) {
              t3.next = 98;
              break;
            }
            if (U2 = N2 - 1e3, G2 = e2.themeContent["a:theme"]["a:themeElements"]["a:fmtScheme"]["a:bgFillStyleLst"], q2 = [], Object.keys(G2).forEach((function(t4) {
              var e3 = G2[t4];
              if ("attrs" !== t4) if (e3.constructor === Array) for (var r3 = 0; r3 < e3.length; r3++) {
                var a3 = {};
                a3[t4] = e3[r3], e3[r3].attrs && (a3.idex = e3[r3].attrs.order, a3.attrs = { order: e3[r3].attrs.order }), q2.push(a3);
              }
              else {
                var n3 = {};
                n3[t4] = e3, e3.attrs && (n3.idex = e3.attrs.order, n3.attrs = { order: e3.attrs.order }), q2.push(n3);
              }
            })), (W2 = q2.slice(0)).sort((function(t4, e3) {
              return t4.idex - e3.idex;
            })), H2 = W2[U2 - 1], "SOLID_FILL" !== (Z2 = El(H2))) {
              t3.next = 85;
              break;
            }
            Y2 = H2["a:solidFill"], V2 = gu(Y2, R2, void 0, e2), i2 = V2, t3.next = 98;
            break;
          case 85:
            if ("GRADIENT_FILL" !== Z2) {
              t3.next = 90;
              break;
            }
            "string" == typeof (Q2 = cu(H2, F2, n2, e2)) ? i2 = Q2 : Q2 && (i2 = Q2, s2 = "gradient"), t3.next = 98;
            break;
          case 90:
            if ("PIC_FILL" !== Z2) {
              t3.next = 97;
              break;
            }
            return t3.next = 93, ru(H2, "themeBg", e2);
          case 93:
            i2 = t3.sent, s2 = "image", t3.next = 98;
            break;
          case 97:
            "PATTERN_FILL" === Z2 && ($2 = ou(H2, e2)) && (i2 = $2, s2 = "pattern");
          case 98:
            t3.next = 157;
            break;
          case 100:
            if (o2 = ml(n2, ["p:sldMaster", "p:cSld", "p:bg", "p:bgPr"]), c2 = ml(n2, ["p:sldMaster", "p:cSld", "p:bg", "p:bgRef"]), K2 = ml(n2, ["p:sldMaster", "p:clrMap", "attrs"]), !o2) {
              t3.next = 126;
              break;
            }
            if ("SOLID_FILL" !== (X2 = El(o2))) {
              t3.next = 111;
              break;
            }
            J2 = o2["a:solidFill"], tt2 = gu(J2, K2, void 0, e2), i2 = tt2, t3.next = 124;
            break;
          case 111:
            if ("GRADIENT_FILL" !== X2) {
              t3.next = 116;
              break;
            }
            "string" == typeof (et2 = cu(o2, void 0, n2, e2)) ? i2 = et2 : et2 && (i2 = et2, s2 = "gradient"), t3.next = 124;
            break;
          case 116:
            if ("PIC_FILL" !== X2) {
              t3.next = 123;
              break;
            }
            return t3.next = 119, ru(o2, "slideMasterBg", e2);
          case 119:
            i2 = t3.sent, s2 = "image", t3.next = 124;
            break;
          case 123:
            "PATTERN_FILL" === X2 && (rt2 = ou(o2, e2)) && (i2 = rt2, s2 = "pattern");
          case 124:
            t3.next = 157;
            break;
          case 126:
            if (!c2) {
              t3.next = 157;
              break;
            }
            if (at2 = gu(c2, K2, void 0, e2), !((nt2 = Number(c2.attrs.idx)) > 1e3)) {
              t3.next = 157;
              break;
            }
            if (ot2 = nt2 - 1e3, ct2 = e2.themeContent["a:theme"]["a:themeElements"]["a:fmtScheme"]["a:bgFillStyleLst"], it2 = [], Object.keys(ct2).forEach((function(t4) {
              var e3 = ct2[t4];
              if ("attrs" !== t4) if (e3.constructor === Array) for (var r3 = 0; r3 < e3.length; r3++) {
                var a3 = {};
                a3[t4] = e3[r3], e3[r3].attrs && (a3.idex = e3[r3].attrs.order, a3.attrs = { order: e3[r3].attrs.order }), it2.push(a3);
              }
              else {
                var n3 = {};
                n3[t4] = e3, e3.attrs && (n3.idex = e3.attrs.order, n3.attrs = { order: e3.attrs.order }), it2.push(n3);
              }
            })), (st2 = it2.slice(0)).sort((function(t4, e3) {
              return t4.idex - e3.idex;
            })), lt2 = st2[ot2 - 1], "SOLID_FILL" !== (ut2 = El(lt2))) {
              t3.next = 144;
              break;
            }
            ft2 = lt2["a:solidFill"], ht2 = gu(ft2, R2, void 0, e2), i2 = ht2, t3.next = 157;
            break;
          case 144:
            if ("GRADIENT_FILL" !== ut2) {
              t3.next = 149;
              break;
            }
            "string" == typeof (dt2 = cu(lt2, at2, n2, e2)) ? i2 = dt2 : dt2 && (i2 = dt2, s2 = "gradient"), t3.next = 157;
            break;
          case 149:
            if ("PIC_FILL" !== ut2) {
              t3.next = 156;
              break;
            }
            return t3.next = 152, ru(lt2, "themeBg", e2);
          case 152:
            i2 = t3.sent, s2 = "image", t3.next = 157;
            break;
          case 156:
            "PATTERN_FILL" === ut2 && (pt2 = ou(lt2, e2)) && (i2 = pt2, s2 = "pattern");
          case 157:
            return t3.abrupt("return", { type: s2, value: i2 });
          case 158:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), su.apply(this, arguments);
  }
  function lu(t2, e2, r2, a2) {
    var n2 = [{ node: t2, source: e2 }];
    return r2 && n2.push({ node: r2, source: "slideLayoutBg" }), a2 && n2.push({ node: a2, source: "slideMasterBg" }), n2;
  }
  function uu(t2, e2, r2, a2) {
    return fu.apply(this, arguments);
  }
  function fu() {
    return fu = n(u.mark((function t2(e2, r2, a2, n2) {
      var o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (e2) {
              t3.next = 2;
              break;
            }
            return t3.abrupt("return", { state: "missing" });
          case 2:
            if (o2 = ml(e2, ["p:spPr"]), c2 = o2 ? El(o2) : "", i2 = "color", s2 = "", "NO_FILL" !== c2) {
              t3.next = 10;
              break;
            }
            return t3.abrupt("return", { state: "none" });
          case 10:
            if ("SOLID_FILL" !== c2) {
              t3.next = 16;
              break;
            }
            l2 = o2["a:solidFill"], s2 = gu(l2, void 0, void 0, r2), i2 = "color", t3.next = 43;
            break;
          case 16:
            if ("GRADIENT_FILL" !== c2) {
              t3.next = 22;
              break;
            }
            f2 = o2["a:gradFill"], s2 = nu(f2, r2), i2 = "gradient", t3.next = 43;
            break;
          case 22:
            if ("PIC_FILL" !== c2) {
              t3.next = 32;
              break;
            }
            return h2 = o2["a:blipFill"], t3.next = 26, Xl(a2, h2, r2);
          case 26:
            d2 = t3.sent, p2 = tu(h2), s2 = { ref: d2.ref, base64: d2.base64, blob: d2.blob, opacity: p2 }, i2 = "image", t3.next = 43;
            break;
          case 32:
            if ("PATTERN_FILL" !== c2) {
              t3.next = 38;
              break;
            }
            b2 = o2["a:pattFill"], s2 = ou({ "a:pattFill": b2 }, r2), i2 = "pattern", t3.next = 43;
            break;
          case 38:
            if ("GROUP_FILL" !== c2) {
              t3.next = 43;
              break;
            }
            return t3.next = 41, pu(n2, r2, a2);
          case 41:
            return g2 = t3.sent, t3.abrupt("return", g2 ? { state: "found", fill: g2 } : { state: "none" });
          case 43:
            if (s2 || (v2 = ml(e2, ["p:style", "a:fillRef"]), s2 = gu(v2, void 0, void 0, r2), i2 = "color"), s2) {
              t3.next = 46;
              break;
            }
            return t3.abrupt("return", { state: "missing" });
          case 46:
            return t3.abrupt("return", { state: "found", fill: { type: i2, value: s2 } });
          case 47:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), fu.apply(this, arguments);
  }
  function hu(t2, e2, r2) {
    return du.apply(this, arguments);
  }
  function du() {
    return du = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            n2 = b2.length > 3 && void 0 !== b2[3] ? b2[3] : {}, o2 = n2.groupHierarchy, c2 = void 0 === o2 ? [] : o2, i2 = n2.slideLayoutSpNode, s2 = n2.slideMasterSpNode, l2 = lu(e2, a2, i2, s2), f2 = Al(l2), t3.prev = 4, f2.s();
          case 6:
            if ((h2 = f2.n()).done) {
              t3.next = 17;
              break;
            }
            return d2 = h2.value, t3.next = 10, uu(d2.node, r2, d2.source, c2);
          case 10:
            if ("none" !== (p2 = t3.sent).state) {
              t3.next = 13;
              break;
            }
            return t3.abrupt("return", null);
          case 13:
            if ("found" !== p2.state) {
              t3.next = 15;
              break;
            }
            return t3.abrupt("return", p2.fill);
          case 15:
            t3.next = 6;
            break;
          case 17:
            t3.next = 22;
            break;
          case 19:
            t3.prev = 19, t3.t0 = t3.catch(4), f2.e(t3.t0);
          case 22:
            return t3.prev = 22, f2.f(), t3.finish(22);
          case 25:
            return t3.abrupt("return", null);
          case 26:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[4, 19, 22, 25]]);
    }))), du.apply(this, arguments);
  }
  function pu(t2, e2, r2) {
    return bu.apply(this, arguments);
  }
  function bu() {
    return (bu = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            n2 = Al(e2), t3.prev = 1, n2.s();
          case 3:
            if ((o2 = n2.n()).done) {
              t3.next = 40;
              break;
            }
            if ((c2 = o2.value) && c2["p:grpSpPr"]) {
              t3.next = 7;
              break;
            }
            return t3.abrupt("continue", 38);
          case 7:
            if (i2 = c2["p:grpSpPr"], "SOLID_FILL" !== (s2 = El(i2))) {
              t3.next = 16;
              break;
            }
            if (l2 = i2["a:solidFill"], !(f2 = gu(l2, void 0, void 0, r2))) {
              t3.next = 14;
              break;
            }
            return t3.abrupt("return", { type: "color", value: f2 });
          case 14:
            t3.next = 38;
            break;
          case 16:
            if ("GRADIENT_FILL" !== s2) {
              t3.next = 23;
              break;
            }
            if (h2 = i2["a:gradFill"], !(d2 = nu(h2, r2))) {
              t3.next = 21;
              break;
            }
            return t3.abrupt("return", { type: "gradient", value: d2 });
          case 21:
            t3.next = 38;
            break;
          case 23:
            if ("PIC_FILL" !== s2) {
              t3.next = 33;
              break;
            }
            return p2 = i2["a:blipFill"], t3.next = 27, Xl(a2, p2, r2);
          case 27:
            if (b2 = t3.sent, g2 = tu(p2), !(b2.ref || b2.base64 || b2.blob)) {
              t3.next = 31;
              break;
            }
            return t3.abrupt("return", { type: "image", value: { ref: b2.ref, base64: b2.base64, blob: b2.blob, opacity: g2 } });
          case 31:
            t3.next = 38;
            break;
          case 33:
            if ("PATTERN_FILL" !== s2) {
              t3.next = 38;
              break;
            }
            if (v2 = i2["a:pattFill"], !(m2 = ou({ "a:pattFill": v2 }, r2))) {
              t3.next = 38;
              break;
            }
            return t3.abrupt("return", { type: "pattern", value: m2 });
          case 38:
            t3.next = 3;
            break;
          case 40:
            t3.next = 45;
            break;
          case 42:
            t3.prev = 42, t3.t0 = t3.catch(1), n2.e(t3.t0);
          case 45:
            return t3.prev = 45, n2.f(), t3.finish(45);
          case 48:
            return t3.abrupt("return", null);
          case 49:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[1, 42, 45, 48]]);
    })))).apply(this, arguments);
  }
  function gu(t2, e2, r2, a2) {
    if (!t2) return "";
    var n2, o2, c2, i2, s2 = "";
    if (t2["a:srgbClr"]) s2 = ml(n2 = t2["a:srgbClr"], ["attrs", "val"]);
    else if (t2["a:schemeClr"]) {
      s2 = Sl("a:" + ml(n2 = t2["a:schemeClr"], ["attrs", "val"]), a2, e2, r2) || "";
    } else if (t2["a:scrgbClr"]) {
      var l2 = (n2 = t2["a:scrgbClr"]).attrs, u2 = -1 !== l2.r.indexOf("%") ? l2.r.split("%").shift() : l2.r, f2 = -1 !== l2.g.indexOf("%") ? l2.g.split("%").shift() : l2.g, h2 = -1 !== l2.b.indexOf("%") ? l2.b.split("%").shift() : l2.b;
      s2 = kl(Number(u2) / 100 * 255) + kl(Number(f2) / 100 * 255) + kl(Number(h2) / 100 * 255);
    } else if (t2["a:prstClr"]) {
      var d2 = ml(n2 = t2["a:prstClr"], ["attrs", "val"]);
      c2 = d2.toLowerCase(), -1 !== (i2 = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"].findIndex((function(t3) {
        return t3.toLowerCase() === c2;
      }))) && (o2 = ["f0f8ff", "faebd7", "00ffff", "7fffd4", "f0ffff", "f5f5dc", "ffe4c4", "000000", "ffebcd", "0000ff", "8a2be2", "a52a2a", "deb887", "5f9ea0", "7fff00", "d2691e", "ff7f50", "6495ed", "fff8dc", "dc143c", "00ffff", "00008b", "008b8b", "b8860b", "a9a9a9", "a9a9a9", "006400", "bdb76b", "8b008b", "556b2f", "ff8c00", "9932cc", "8b0000", "e9967a", "8fbc8f", "483d8b", "2f4f4f", "2f4f4f", "00ced1", "9400d3", "ff1493", "00bfff", "696969", "696969", "1e90ff", "b22222", "fffaf0", "228b22", "ff00ff", "dcdcdc", "f8f8ff", "ffd700", "daa520", "808080", "808080", "008000", "adff2f", "f0fff0", "ff69b4", "cd5c5c", "4b0082", "fffff0", "f0e68c", "e6e6fa", "fff0f5", "7cfc00", "fffacd", "add8e6", "f08080", "e0ffff", "fafad2", "d3d3d3", "d3d3d3", "90ee90", "ffb6c1", "ffa07a", "20b2aa", "87cefa", "778899", "778899", "b0c4de", "ffffe0", "00ff00", "32cd32", "faf0e6", "ff00ff", "800000", "66cdaa", "0000cd", "ba55d3", "9370db", "3cb371", "7b68ee", "00fa9a", "48d1cc", "c71585", "191970", "f5fffa", "ffe4e1", "ffe4b5", "ffdead", "000080", "fdf5e6", "808000", "6b8e23", "ffa500", "ff4500", "da70d6", "eee8aa", "98fb98", "afeeee", "db7093", "ffefd5", "ffdab9", "cd853f", "ffc0cb", "dda0dd", "b0e0e6", "800080", "663399", "ff0000", "bc8f8f", "4169e1", "8b4513", "fa8072", "f4a460", "2e8b57", "fff5ee", "a0522d", "c0c0c0", "87ceeb", "6a5acd", "708090", "708090", "fffafa", "00ff7f", "4682b4", "d2b48c", "008080", "d8bfd8", "ff6347", "40e0d0", "ee82ee", "f5deb3", "ffffff", "f5f5f5", "ffff00", "9acd32"][i2]), s2 = o2;
    } else if (t2["a:hslClr"]) {
      var p2 = (n2 = t2["a:hslClr"]).attrs, b2 = (function(t3, e3, r3) {
        var a3, n3 = 2 * r3 - (a3 = r3 <= 0.5 ? r3 * (e3 + 1) : r3 + e3 - r3 * e3);
        return { r: 255 * Il(n3, a3, 2 + (t3 /= 60)), g: 255 * Il(n3, a3, t3), b: 255 * Il(n3, a3, t3 - 2) };
      })(Number(p2.hue) / 1e5, Number(-1 !== p2.sat.indexOf("%") ? p2.sat.split("%").shift() : p2.sat) / 100, Number(-1 !== p2.lum.indexOf("%") ? p2.lum.split("%").shift() : p2.lum) / 100);
      s2 = kl(b2.r) + kl(b2.g) + kl(b2.b);
    } else if (t2["a:sysClr"]) {
      var g2 = ml(n2 = t2["a:sysClr"], ["attrs", "lastClr"]);
      g2 && (s2 = g2);
    }
    var v2 = false, m2 = parseInt(ml(n2, ["a:alpha", "attrs", "val"])) / 1e5;
    if (!isNaN(m2)) {
      var y2 = js(s2);
      y2.setAlpha(m2), s2 = y2.toHex8(), v2 = true;
    }
    var L2 = parseInt(ml(n2, ["a:hueMod", "attrs", "val"])) / 1e5;
    isNaN(L2) || (s2 = (function(t3, e3, r3) {
      var a3 = js(t3).toHsl(), n3 = a3.h * e3;
      return n3 >= 360 && (n3 -= 360), r3 ? js({ h: n3, s: a3.s, l: a3.l, a: a3.a }).toHex8() : js({ h: n3, s: a3.s, l: a3.l, a: a3.a }).toHex();
    })(s2, L2, v2));
    var w2 = parseInt(ml(n2, ["a:lumMod", "attrs", "val"])) / 1e5;
    isNaN(w2) || (s2 = (function(t3, e3, r3) {
      var a3 = js(t3).toHsl(), n3 = a3.l * e3;
      return n3 >= 1 && (n3 = 1), r3 ? js({ h: a3.h, s: a3.s, l: n3, a: a3.a }).toHex8() : js({ h: a3.h, s: a3.s, l: n3, a: a3.a }).toHex();
    })(s2, w2, v2));
    var _2 = parseInt(ml(n2, ["a:lumOff", "attrs", "val"])) / 1e5;
    isNaN(_2) || (s2 = (function(t3, e3, r3) {
      var a3 = js(t3).toHsl(), n3 = e3 + a3.l;
      return n3 >= 1 ? r3 ? js({ h: a3.h, s: a3.s, l: 1, a: a3.a }).toHex8() : js({ h: a3.h, s: a3.s, l: 1, a: a3.a }).toHex() : r3 ? js({ h: a3.h, s: a3.s, l: n3, a: a3.a }).toHex8() : js({ h: a3.h, s: a3.s, l: n3, a: a3.a }).toHex();
    })(s2, _2, v2));
    var k2 = parseInt(ml(n2, ["a:satMod", "attrs", "val"])) / 1e5;
    isNaN(k2) || (s2 = (function(t3, e3, r3) {
      var a3 = js(t3).toHsl(), n3 = a3.s * e3;
      return n3 >= 1 && (n3 = 1), r3 ? js({ h: a3.h, s: n3, l: a3.l, a: a3.a }).toHex8() : js({ h: a3.h, s: n3, l: a3.l, a: a3.a }).toHex();
    })(s2, k2, v2));
    var M2 = parseInt(ml(n2, ["a:shade", "attrs", "val"])) / 1e5;
    isNaN(M2) || (s2 = (function(t3, e3, r3) {
      var a3 = js(t3).toHsl();
      e3 >= 1 && (e3 = 1);
      var n3 = Math.min(a3.l * e3, 1);
      return r3 ? js({ h: a3.h, s: a3.s, l: n3, a: a3.a }).toHex8() : js({ h: a3.h, s: a3.s, l: n3, a: a3.a }).toHex();
    })(s2, M2, v2));
    var x2 = parseInt(ml(n2, ["a:tint", "attrs", "val"])) / 1e5;
    return isNaN(x2) || (s2 = Cl(s2, x2, v2)), s2 && -1 === s2.indexOf("#") && (s2 = "#" + s2), s2;
  }
  function vu(t2) {
    var e2 = ml(t2, ["attrs"]);
    if (e2) {
      var r2 = { type: e2.type || "none" };
      return e2.w && (r2.width = e2.w), e2.len && (r2.length = e2.len), r2;
    }
  }
  function mu(t2, e2, r2) {
    var a2 = ml(t2, ["p:spPr", "a:ln"]);
    if (!a2) {
      var n2 = ml(t2, ["p:style", "a:lnRef"]);
      if (n2) {
        var o2 = ml(n2, ["attrs", "idx"]);
        a2 = r2.themeContent["a:theme"]["a:themeElements"]["a:fmtScheme"]["a:lnStyleLst"]["a:ln"][Number(o2) - 1];
      }
    }
    a2 || (a2 = t2);
    var c2 = ml(a2, ["a:noFill"]) ? 0 : parseInt(ml(a2, ["attrs", "w"])) / 12700;
    isNaN(c2) && (c2 = a2 || "obj" !== e2 ? 0 : 1);
    var i2 = gu(ml(a2, ["a:solidFill"]), void 0, void 0, r2);
    if (!i2) {
      var s2 = ml(t2, ["p:style", "a:lnRef", "a:schemeClr"]);
      if (i2 = Sl("a:" + ml(s2, ["attrs", "val"]), r2)) {
        var l2 = ml(s2, ["a:shade", "attrs", "val"]);
        if (l2) {
          l2 = parseInt(l2) / 1e5;
          var u2 = js("#" + i2).toHsl();
          i2 = js({ h: u2.h, s: u2.s, l: u2.l * l2, a: u2.a }).toHex();
        }
      }
    }
    i2 ? i2.startsWith("#") || (i2 = "#".concat(i2)) : i2 = "#000000";
    var f2 = "solid", h2 = "0";
    switch (ml(a2, ["a:prstDash", "attrs", "val"])) {
      case "solid":
        f2 = "solid", h2 = "0";
        break;
      case "dash":
        f2 = "dashed", h2 = "5";
        break;
      case "dashDot":
        f2 = "dashed", h2 = "5, 5, 1, 5";
        break;
      case "dot":
        f2 = "dotted", h2 = "1, 5";
        break;
      case "lgDash":
        f2 = "dashed", h2 = "10, 5";
        break;
      case "lgDashDotDot":
        f2 = "dotted", h2 = "10, 5, 1, 5, 1, 5";
        break;
      case "sysDash":
        f2 = "dashed", h2 = "5, 2";
        break;
      case "sysDashDot":
        f2 = "dotted", h2 = "5, 2, 1, 5";
        break;
      case "sysDashDotDot":
        f2 = "dotted", h2 = "5, 2, 1, 5, 1, 5";
        break;
      case "sysDot":
        f2 = "dotted", h2 = "2, 5";
    }
    return { borderColor: i2, borderWidth: c2, borderType: f2, strokeDasharray: h2, headEnd: vu(ml(a2, ["a:headEnd"])), tailEnd: vu(ml(a2, ["a:tailEnd"])) };
  }
  function yu(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return Lu(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return Lu(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function Lu(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function wu(t2, e2) {
    if (!t2) return [];
    t2.constructor !== Array && (t2 = [t2]);
    var r2, a2 = [], n2 = yu(t2);
    try {
      for (n2.s(); !(r2 = n2.n()).done; ) {
        var o2 = r2.value, c2 = ml(o2, ["c:spPr", "a:solidFill", "a:schemeClr"]);
        c2 || (c2 = ml(o2, ["c:spPr", "a:ln", "a:solidFill", "a:schemeClr"])), c2 || (c2 = ml(o2, ["c:marker", "c:spPr", "a:ln", "a:solidFill", "a:schemeClr"]));
        var i2 = ml(c2, ["attrs", "val"]);
        if (i2) {
          i2 = ml(e2.themeContent, ["a:theme", "a:themeElements", "a:clrScheme", "a:".concat(i2), "a:srgbClr", "attrs", "val"]);
          var s2 = ml(c2, ["a:tint", "attrs", "val"]) / 1e5;
          i2 && !isNaN(s2) && (i2 = Cl(i2, s2));
        } else i2 = ml(o2, ["c:spPr", "a:solidFill", "a:srgbClr", "attrs", "val"]);
        i2 && (i2 = "#" + i2), a2.push(i2);
      }
    } catch (t3) {
      n2.e(t3);
    } finally {
      n2.f();
    }
    return a2;
  }
  function _u(t2) {
    var e2 = [];
    return t2 ? (vl(t2, (function(t3, r2) {
      var a2 = [], n2 = ml(t3, ["c:tx", "c:strRef", "c:strCache", "c:pt", "c:v"]) || r2, o2 = {};
      return ml(t3, ["c:cat", "c:strRef", "c:strCache", "c:pt"]) ? vl(t3["c:cat"]["c:strRef"]["c:strCache"]["c:pt"], (function(t4) {
        return o2[t4.attrs.idx] = t4["c:v"], "";
      })) : ml(t3, ["c:cat", "c:numRef", "c:numCache", "c:pt"]) && vl(t3["c:cat"]["c:numRef"]["c:numCache"]["c:pt"], (function(t4) {
        return o2[t4.attrs.idx] = t4["c:v"], "";
      })), ml(t3, ["c:val", "c:numRef", "c:numCache", "c:pt"]) && vl(t3["c:val"]["c:numRef"]["c:numCache"]["c:pt"], (function(t4) {
        return a2.push({ x: t4.attrs.idx, y: parseFloat(t4["c:v"]) }), "";
      })), e2.push({ key: n2, values: a2, xlabels: o2 }), "";
    })), e2) : e2;
  }
  function ku(t2) {
    var e2 = [];
    if (!t2) return e2;
    var r2 = t2.constructor === Array ? t2 : [t2], a2 = r2[0], n2 = [];
    vl(a2["c:xVal"]["c:numRef"]["c:numCache"]["c:pt"], (function(t3) {
      return n2.push(parseFloat(t3["c:v"])), "";
    })), e2.push(n2);
    var o2, c2 = yu(r2);
    try {
      var i2 = function() {
        var t3 = o2.value, r3 = [];
        vl(t3["c:yVal"]["c:numRef"]["c:numCache"]["c:pt"], (function(t4) {
          return r3.push(parseFloat(t4["c:v"])), "";
        })), e2.push(r3);
      };
      for (c2.s(); !(o2 = c2.n()).done; ) i2();
    } catch (t3) {
      c2.e(t3);
    } finally {
      c2.f();
    }
    return e2;
  }
  function Mu(t2, e2) {
    var r2 = null;
    for (var a2 in t2) if (t2[a2]["c:ser"]) switch (a2) {
      case "c:lineChart":
        r2 = { type: "lineChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2), grouping: ml(t2[a2], ["c:grouping", "attrs", "val"]), marker: !!t2[a2]["c:marker"] };
        break;
      case "c:line3DChart":
        r2 = { type: "line3DChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2), grouping: ml(t2[a2], ["c:grouping", "attrs", "val"]) };
        break;
      case "c:barChart":
        r2 = { type: "barChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2), grouping: ml(t2[a2], ["c:grouping", "attrs", "val"]), barDir: ml(t2[a2], ["c:barDir", "attrs", "val"]) };
        break;
      case "c:bar3DChart":
        r2 = { type: "bar3DChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2), grouping: ml(t2[a2], ["c:grouping", "attrs", "val"]), barDir: ml(t2[a2], ["c:barDir", "attrs", "val"]) };
        break;
      case "c:pieChart":
        r2 = { type: "pieChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"]["c:dPt"], e2) };
        break;
      case "c:pie3DChart":
        r2 = { type: "pie3DChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"]["c:dPt"], e2) };
        break;
      case "c:doughnutChart":
        r2 = { type: "doughnutChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"]["c:dPt"], e2), holeSize: ml(t2[a2], ["c:holeSize", "attrs", "val"]) };
        break;
      case "c:areaChart":
        r2 = { type: "areaChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2), grouping: ml(t2[a2], ["c:grouping", "attrs", "val"]) };
        break;
      case "c:area3DChart":
        r2 = { type: "area3DChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2), grouping: ml(t2[a2], ["c:grouping", "attrs", "val"]) };
        break;
      case "c:scatterChart":
        r2 = { type: "scatterChart", data: ku(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2), style: ml(t2[a2], ["c:scatterStyle", "attrs", "val"]) };
        break;
      case "c:bubbleChart":
        r2 = { type: "bubbleChart", data: ku(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2) };
        break;
      case "c:radarChart":
        r2 = { type: "radarChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2), style: ml(t2[a2], ["c:radarStyle", "attrs", "val"]) };
        break;
      case "c:surfaceChart":
        r2 = { type: "surfaceChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2) };
        break;
      case "c:surface3DChart":
        r2 = { type: "surface3DChart", data: _u(t2[a2]["c:ser"]), colors: wu(t2[a2]["c:ser"], e2) };
        break;
      case "c:stockChart":
        r2 = { type: "stockChart", data: _u(t2[a2]["c:ser"]), colors: [] };
    }
    return r2;
  }
  var xu = 72 / 914400;
  function Su(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return Iu(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return Iu(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function Iu(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function Cu(t2) {
    var e2 = 1, r2 = ml(t2, ["a:pPr", "attrs", "lvl"]);
    return void 0 !== r2 && (e2 = parseInt(r2) + 1), e2;
  }
  function Au(t2, e2) {
    if (!t2) return "";
    var r2 = ml(t2, ["p:txBody", "a:lstStyle", e2, "attrs", "algn"]);
    return r2 || (r2 = ml(t2, ["p:txBody", "a:p", "a:pPr", "attrs", "algn"])), r2 || "";
  }
  function Pu(t2, e2, r2, a2, n2, o2) {
    var c2 = ml(t2, ["a:pPr", "attrs", "algn"]);
    if (c2 || (c2 = ml(e2, ["p:txBody", "a:p", "a:pPr", "attrs", "algn"])), !c2) {
      var i2 = "a:lvl" + Cu(t2) + "pPr";
      (c2 = Au(a2, i2)) || (c2 = Au(n2, i2)), c2 || "title" !== r2 && "ctrTitle" !== r2 && "subTitle" !== r2 ? c2 || "body" !== r2 ? c2 || (c2 = ml(o2, ["slideMasterTextStyles", "p:otherStyle", i2, "attrs", "algn"])) : c2 = ml(o2, ["slideMasterTextStyles", "p:bodyStyle", i2, "attrs", "algn"]) : (c2 = ml(o2, ["slideMasterTextStyles", "p:titleStyle", i2, "attrs", "algn"])) || "subTitle" !== r2 || (c2 = ml(o2, ["slideMasterTextStyles", "p:bodyStyle", i2, "attrs", "algn"]));
    }
    var s2 = "left";
    if (c2) switch (c2) {
      case "l":
        s2 = "left";
        break;
      case "r":
        s2 = "right";
        break;
      case "ctr":
        s2 = "center";
        break;
      case "just":
      case "dist":
        s2 = "justify";
        break;
      default:
        s2 = "inherit";
    }
    return s2;
  }
  function Eu(t2, e2, r2) {
    var a2 = ml(t2, ["p:txBody", "a:bodyPr", "attrs", "anchor"]);
    return a2 || (a2 = ml(e2, ["p:txBody", "a:bodyPr", "attrs", "anchor"])) || (a2 = ml(r2, ["p:txBody", "a:bodyPr", "attrs", "anchor"])) || (a2 = "t"), "ctr" === a2 ? "mid" : "b" === a2 ? "down" : "up";
  }
  function Ru(t2, e2, r2) {
    function a2(t3) {
      if (!t3) return null;
      if (t3["a:noAutofit"]) return { result: null };
      if (t3["a:spAutoFit"]) return { result: { type: "shape" } };
      if (t3["a:normAutofit"]) {
        var e3 = ml(t3["a:normAutofit"], ["attrs", "fontScale"]);
        return e3 ? { result: { type: "text", fontScale: parseInt(e3) / 1e3 } } : { result: { type: "text" } };
      }
      return null;
    }
    var n2 = a2(ml(t2, ["p:txBody", "a:bodyPr"]));
    if (n2) return n2.result;
    var o2 = a2(ml(e2, ["p:txBody", "a:bodyPr"]));
    if (o2) return o2.result;
    var c2 = a2(ml(r2, ["p:txBody", "a:bodyPr"]));
    return c2 ? c2.result : null;
  }
  function Tu(t2, e2) {
    e2 && t2.push(e2);
  }
  function Ou(t2, e2, r2) {
    e2 && (Tu(t2, ml(e2, ["p:txBody", "a:lstStyle", "a:lvl".concat(r2, "pPr")])), Tu(t2, ml(e2, ["p:txBody", "a:p", "a:pPr"])));
  }
  function ju(t2, e2, r2, a2, n2, o2, c2) {
    if (!t2) return null;
    var i2 = t2["a:pPr"], s2 = Cu(t2), l2 = [];
    return Tu(l2, i2), (function(t3, e3, r3) {
      e3 && Tu(t3, ml(e3, ["a:lstStyle", "a:lvl".concat(r3, "pPr")]));
    })(l2, e2, s2), Ou(l2, r2, s2), Ou(l2, a2, s2), (function(t3, e3, r3, a3) {
      if (a3) {
        var n3 = "a:lvl".concat(r3, "pPr");
        "title" === e3 || "ctrTitle" === e3 || "subTitle" === e3 ? (Tu(t3, ml(a3, ["p:titleStyle", n3])), "subTitle" === e3 && Tu(t3, ml(a3, ["p:bodyStyle", n3]))) : Tu(t3, ml(a3, "body" === e3 ? ["p:bodyStyle", n3] : ["p:otherStyle", n3]));
      }
    })(l2, n2, s2, o2), (function(t3, e3, r3) {
      e3 && (Tu(t3, ml(e3, ["a:lvl".concat(r3, "pPr")])), Tu(t3, ml(e3, ["a:defPPr"])));
    })(l2, ml(c2, ["defaultTextStyle"]), s2), l2;
  }
  function zu(t2) {
    var e2 = ml(t2, ["a:spcPct", "attrs", "val"]), r2 = ml(t2, ["a:spcPts", "attrs", "val"]);
    return e2 ? parseInt(e2) / 1e3 + "em" : r2 ? parseInt(r2) / 100 + "pt" : void 0;
  }
  function Bu(t2, e2) {
    var r2 = ml(t2, ["attrs", e2]);
    if (void 0 !== r2 && "" !== r2) return xl(parseInt(r2) * xu) + "pt";
  }
  function Du(t2, e2, r2, a2, n2, o2, c2) {
    var i2 = ju(t2, e2, r2, a2, n2, o2, c2);
    if (!i2) return null;
    var s2, l2, u2, f2, h2 = {}, d2 = Su(i2);
    try {
      for (d2.s(); !(s2 = d2.n()).done; ) {
        var p2 = s2.value;
        if (void 0 === h2.lineSpacing) {
          var b2 = (l2 = p2["a:lnSpc"], u2 = void 0, f2 = void 0, u2 = ml(l2, ["a:spcPct", "attrs", "val"]), f2 = ml(l2, ["a:spcPts", "attrs", "val"]), u2 ? parseInt(u2) / 1e3 / 100 : f2 ? parseInt(f2) / 100 + "pt" : void 0);
          void 0 !== b2 && (h2.lineSpacing = b2);
        }
        if (void 0 === h2.spaceBefore) {
          var g2 = zu(p2["a:spcBef"]);
          void 0 !== g2 && (h2.spaceBefore = g2);
        }
        if (void 0 === h2.spaceAfter) {
          var v2 = zu(p2["a:spcAft"]);
          void 0 !== v2 && (h2.spaceAfter = v2);
        }
      }
    } catch (t3) {
      d2.e(t3);
    } finally {
      d2.f();
    }
    return Object.keys(h2).length > 0 ? h2 : null;
  }
  function Fu(t2, e2, r2, a2, n2, o2, c2) {
    var i2 = ju(t2, e2, r2, a2, n2, o2, c2);
    if (!i2) return null;
    var s2, l2 = {}, u2 = Su(i2);
    try {
      for (u2.s(); !(s2 = u2.n()).done; ) {
        var f2 = s2.value;
        if (void 0 === l2.marginLeft) {
          var h2 = Bu(f2, "marL");
          void 0 !== h2 && (l2.marginLeft = h2);
        }
        if (void 0 === l2.textIndent) {
          var d2 = Bu(f2, "indent");
          void 0 !== d2 && (l2.textIndent = d2);
        }
      }
    } catch (t3) {
      u2.e(t3);
    } finally {
      u2.f();
    }
    return Object.keys(l2).length > 0 ? l2 : null;
  }
  var Nu = 91440;
  var Uu = 91440;
  var Gu = 45720;
  var qu = 45720;
  function Wu(t2, e2, r2, a2) {
    var n2 = ml(t2, ["p:txBody", "a:bodyPr", "attrs", a2]);
    return null != n2 && "" !== n2 || null != (n2 = ml(e2, ["p:txBody", "a:bodyPr", "attrs", a2])) && "" !== n2 ? n2 : ml(r2, ["p:txBody", "a:bodyPr", "attrs", a2]);
  }
  function Hu(t2) {
    if (null == t2 || "" === t2) return null;
    var e2 = parseInt(t2, 10);
    return Number.isFinite(e2) ? xl(e2 * xu) : null;
  }
  function Zu(t2, e2, r2) {
    var a2 = ml(t2, ["p:txBody", "a:bodyPr"]), n2 = ml(e2, ["p:txBody", "a:bodyPr"]), o2 = ml(r2, ["p:txBody", "a:bodyPr"]);
    if (!a2 && !n2 && !o2) return null;
    var c2 = Wu(t2, e2, r2, "lIns");
    null != c2 && "" !== c2 || (c2 = Nu);
    var i2 = Wu(t2, e2, r2, "tIns");
    null != i2 && "" !== i2 || (i2 = Gu);
    var s2 = Wu(t2, e2, r2, "rIns");
    null != s2 && "" !== s2 || (s2 = Uu);
    var l2 = Wu(t2, e2, r2, "bIns");
    null != l2 && "" !== l2 || (l2 = qu);
    var u2 = Hu(c2);
    null === u2 && (u2 = 0);
    var f2 = Hu(i2);
    null === f2 && (f2 = 0);
    var h2 = Hu(s2);
    null === h2 && (h2 = 0);
    var d2 = Hu(l2);
    return null === d2 && (d2 = 0), { l: u2, t: f2, r: h2, b: d2 };
  }
  function Yu(t2, e2, r2) {
    var a2;
    return t2 ? a2 = t2["a:off"].attrs : e2 ? a2 = e2["a:off"].attrs : r2 && (a2 = r2["a:off"].attrs), a2 ? { top: xl(parseInt(a2.y) * xu), left: xl(parseInt(a2.x) * xu) } : { top: 0, left: 0 };
  }
  function Vu(t2, e2, r2) {
    var a2;
    return t2 ? a2 = t2["a:ext"].attrs : e2 ? a2 = e2["a:ext"].attrs : r2 && (a2 = r2["a:ext"].attrs), a2 ? { width: xl(parseInt(a2.cx) * xu), height: xl(parseInt(a2.cy) * xu) } : { width: 0, height: 0 };
  }
  function Qu(t2, e2) {
    var r2 = gu(t2, void 0, void 0, e2), a2 = t2.attrs, n2 = a2.dir ? parseInt(a2.dir) / 6e4 : 0, o2 = a2.dist ? parseInt(a2.dist) * xu : 0, c2 = a2.blurRad ? parseInt(a2.blurRad) * xu : "", i2 = o2 * Math.sin(n2 * Math.PI / 180);
    return { h: o2 * Math.cos(n2 * Math.PI / 180), v: i2, blur: c2, color: r2 };
  }
  function $u(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return Ku(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return Ku(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function Ku(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function Xu(t2, e2) {
    e2 && t2.push(e2);
  }
  function Ju(t2) {
    return "a:lvl".concat(t2, "pPr");
  }
  function tf(t2, e2, r2) {
    e2 && (Xu(t2, ml(e2, ["p:txBody", "a:lstStyle", Ju(r2), "a:defRPr"])), Xu(t2, ml(e2, ["p:txBody", "a:p", "a:pPr", "a:defRPr"])));
  }
  function ef(t2, e2, r2, a2) {
    if (a2) {
      var n2 = Ju(r2);
      "title" === e2 || "ctrTitle" === e2 || "subTitle" === e2 ? (Xu(t2, ml(a2, ["p:titleStyle", n2, "a:defRPr"])), "subTitle" === e2 && Xu(t2, ml(a2, ["p:bodyStyle", n2, "a:defRPr"]))) : Xu(t2, ml(a2, "body" === e2 ? ["p:bodyStyle", n2, "a:defRPr"] : ["p:otherStyle", n2, "a:defRPr"]));
    }
  }
  function rf(t2, e2, r2, a2, n2, o2) {
    var c2 = [], i2 = ml(t2, ["a:rPr"]);
    return Xu(c2, i2), i2 || Xu(c2, ml(e2, ["a:endParaRPr"])), Xu(c2, ml(e2, ["a:pPr", "a:defRPr"])), (function(t3, e3, r3) {
      e3 && Xu(t3, ml(e3, ["a:lstStyle", Ju(r3), "a:defRPr"]));
    })(c2, r2, o2), tf(c2, a2, o2), tf(c2, n2, o2), c2;
  }
  function af(t2, e2, r2, a2, n2, o2, c2, i2) {
    var s2 = rf(t2, e2, r2, a2, n2, i2);
    return ef(s2, o2, i2, c2), s2;
  }
  function nf(t2, e2) {
    var r2, a2 = $u(t2);
    try {
      for (a2.s(); !(r2 = a2.n()).done; ) {
        var n2 = ml(r2.value, ["attrs", e2]);
        if (void 0 !== n2 && "" !== n2) return n2;
      }
    } catch (t3) {
      a2.e(t3);
    } finally {
      a2.f();
    }
    return "";
  }
  function of(t2, e2) {
    if (!t2) return "";
    var r2 = El(t2);
    return "SOLID_FILL" === r2 ? gu(t2["a:solidFill"], void 0, void 0, e2) : "GRADIENT_FILL" === r2 ? nu(t2["a:gradFill"], e2) : "";
  }
  function cf(t2, e2) {
    var r2, a2 = $u(t2);
    try {
      for (a2.s(); !(r2 = a2.n()).done; ) {
        var n2 = of(r2.value, e2);
        if (n2) return n2;
      }
    } catch (t3) {
      a2.e(t3);
    } finally {
      a2.f();
    }
    return "";
  }
  function sf(t2, e2, r2, a2, n2, o2, c2, i2, s2) {
    var l2 = (function(t3) {
      var e3, r3 = $u(t3);
      try {
        for (r3.s(); !(e3 = r3.n()).done; ) {
          var a3 = e3.value, n3 = ml(a3, ["a:latin", "attrs", "typeface"]) || ml(a3, ["a:ea", "attrs", "typeface"]);
          if (n3) return n3;
        }
      } catch (t4) {
        r3.e(t4);
      } finally {
        r3.f();
      }
      return "";
    })(af(t2, e2, r2, a2, n2, o2, c2, i2));
    if (!l2 || l2.startsWith("+")) {
      var u2 = ml(s2.themeContent, ["a:theme", "a:themeElements", "a:fontScheme"]);
      if (u2 && l2 && l2.startsWith("+")) switch (l2) {
        case "+mj-lt":
          return ml(u2, ["a:majorFont", "a:latin", "attrs", "typeface"]);
        case "+mn-lt":
          return ml(u2, ["a:minorFont", "a:latin", "attrs", "typeface"]);
        case "+mj-ea":
          return ml(u2, ["a:majorFont", "a:ea", "attrs", "typeface"]);
        case "+mn-ea":
          return ml(u2, ["a:minorFont", "a:ea", "attrs", "typeface"]);
        default:
          return l2.replace(/^\+/, "");
      }
      l2 = "title" === o2 || "subTitle" === o2 || "ctrTitle" === o2 ? ml(u2, ["a:majorFont", "a:latin", "attrs", "typeface"]) || ml(u2, ["a:majorFont", "a:ea", "attrs", "typeface"]) : ml(u2, ["a:minorFont", "a:latin", "attrs", "typeface"]);
    }
    return l2 || "";
  }
  function lf(t2, e2, r2, a2, n2, o2, c2, i2, s2) {
    var l2 = af(t2, e2, r2, a2, n2, o2, c2, i2);
    !(function(t3, e3, r3) {
      r3 && (Xu(t3, ml(r3, [Ju(e3), "a:defRPr"])), Xu(t3, ml(r3, ["a:defPPr", "a:defRPr"])));
    })(l2, i2, s2);
    var u2 = nf(l2, "sz"), f2 = u2 ? parseInt(u2) / 100 : void 0;
    return !isNaN(f2) && f2 || "dt" !== o2 && "sldNum" !== o2 || (f2 = 12), (f2 = isNaN(f2) || !f2 ? 18 : f2) + "pt";
  }
  function uf(t2, e2, r2, a2, n2, o2, c2, i2, s2) {
    var l2 = (function(t3, e3) {
      var r3, a3 = $u(t3);
      try {
        for (a3.s(); !(r3 = a3.n()).done; ) {
          var n3 = ml(r3.value, ["a:effectLst", "a:outerShdw"]);
          if (n3) {
            var o3 = Qu(n3, e3);
            if (o3) return o3;
          }
        }
      } catch (t4) {
        a3.e(t4);
      } finally {
        a3.f();
      }
      return null;
    })(af(t2, e2, r2, a2, n2, o2, c2, i2), s2);
    if (l2) {
      var u2 = l2.h, f2 = l2.v, h2 = l2.blur, d2 = l2.color;
      if (!isNaN(f2) && !isNaN(u2)) return u2 + "pt " + f2 + "pt " + (h2 ? h2 + "pt" : "") + " " + d2;
    }
    return "";
  }
  function ff(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return hf(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return hf(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function hf(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function df(t2) {
    return "string" == typeof t2 ? t2 : t2 && "string" == typeof t2.value ? t2.value : void 0;
  }
  function pf(t2, e2, r2, a2, n2, o2) {
    if (!t2) return "";
    var c2, i2 = "", s2 = ml(e2, ["p:style", "a:fontRef"]), l2 = e2 && e2["a:tcPr"] ? void 0 : o2.slideMasterTextStyles, u2 = e2 && e2["a:tcPr"] ? o2.defaultTextStyle : void 0, f2 = t2["a:p"], h2 = [], d2 = ff(f2.constructor === Array ? f2 : [f2]);
    try {
      for (d2.s(); !(c2 = d2.n()).done; ) {
        var p2 = c2.value, b2 = p2["a:r"], g2 = p2["a:fld"], v2 = p2["a:br"];
        b2 && (b2 = b2.constructor === Array ? b2 : [b2], g2 && (g2 = g2.constructor === Array ? g2 : [g2], b2 = b2.concat(g2)), v2 && ((v2 = v2.constructor === Array ? v2 : [v2]).forEach((function(t3) {
          return t3.type = "br";
        })), v2.length > 1 && v2.shift(), (b2 = b2.concat(v2)).sort((function(t3, e3) {
          return !t3.attrs || !e3.attrs || t3.attrs.order - e3.attrs.order;
        }))));
        var m2 = Pu(p2, e2, n2, r2, a2, o2), y2 = Du(p2, t2, r2, a2, n2, l2, o2), L2 = Fu(p2, t2, r2, a2, n2, l2, o2), w2 = bf(p2), _2 = gf(p2), k2 = "text-align: ".concat(m2, ";");
        if (y2 && (y2.lineSpacing && (k2 += "line-height: ".concat(y2.lineSpacing, ";")), y2.spaceBefore && (k2 += "margin-top: ".concat(y2.spaceBefore, ";")), y2.spaceAfter && (k2 += "margin-bottom: ".concat(y2.spaceAfter, ";"))), L2 && (!w2 && L2.marginLeft && (k2 += "margin-left: ".concat(L2.marginLeft, ";")), !w2 && L2.textIndent && (k2 += "text-indent: ".concat(L2.textIndent, ";"))), w2) {
          for (; h2.length > _2 + 1; ) {
            var M2 = h2.pop();
            i2 += "</".concat(M2, ">");
          }
          void 0 === h2[_2] ? (i2 += "<".concat(w2, ">"), h2[_2] = w2) : h2[_2] !== w2 && (i2 += "</".concat(h2[_2], ">"), i2 += "<".concat(w2, ">"), h2[_2] = w2), i2 += '<li><p style="'.concat(k2, '">');
        } else {
          for (; h2.length > 0; ) {
            var x2 = h2.pop();
            i2 += "</".concat(x2, ">");
          }
          i2 += '<p style="'.concat(k2, '">');
        }
        if (b2) {
          var S2, I2 = null, C2 = "", A2 = ff(b2);
          try {
            for (A2.s(); !(S2 = A2.n()).done; ) {
              var P2 = mf(S2.value, p2, t2, s2, r2, a2, n2, l2, u2, o2);
              if (!I2 || I2.styleText !== P2.styleText || I2.hasLink !== P2.hasLink || P2.hasLink) {
                if (C2) {
                  var E2 = C2.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\s/g, "&nbsp;");
                  i2 += '<span style="'.concat(I2.styleText, '">').concat(E2, "</span>"), C2 = "";
                }
                if (P2.hasLink) {
                  var R2 = P2.text.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\s/g, "&nbsp;");
                  i2 += '<span style="'.concat(P2.styleText, '"><a href="').concat(P2.linkURL, '" target="_blank">').concat(R2, "</a></span>"), I2 = null;
                } else I2 = P2, C2 = P2.text;
              } else C2 += P2.text;
            }
          } catch (t3) {
            A2.e(t3);
          } finally {
            A2.f();
          }
          if (C2 && I2) {
            var T2 = C2.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\s/g, "&nbsp;");
            i2 += '<span style="'.concat(I2.styleText, '">').concat(T2, "</span>");
          }
        } else i2 += vf(p2, e2, t2, s2, r2, a2, n2, l2, u2, o2);
        i2 += w2 ? "</p></li>" : "</p>";
      }
    } catch (t3) {
      d2.e(t3);
    } finally {
      d2.f();
    }
    for (; h2.length > 0; ) {
      var O2 = h2.pop();
      i2 += "</".concat(O2, ">");
    }
    return i2;
  }
  function bf(t2) {
    var e2 = t2["a:pPr"];
    return e2 ? e2["a:buChar"] ? "ul" : e2["a:buAutoNum"] ? "ol" : "" : "";
  }
  function gf(t2) {
    var e2 = t2["a:pPr"];
    if (!e2) return -1;
    var r2 = ml(e2, ["attrs", "lvl"]);
    return void 0 !== r2 ? parseInt(r2) : 0;
  }
  function vf(t2, e2, r2, a2, n2, o2, c2, i2, s2, l2) {
    var u2 = mf(t2, e2, r2, a2, n2, o2, c2, i2, s2, l2), f2 = u2.styleText, h2 = u2.text, d2 = u2.hasLink, p2 = u2.linkURL, b2 = h2.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\s/g, "&nbsp;");
    return d2 ? '<span style="'.concat(f2, '"><a href="').concat(p2, '" target="_blank">').concat(b2, "</a></span>") : '<span style="'.concat(f2, '">').concat(b2, "</span>");
  }
  function mf(t2, e2, r2, a2, n2, o2, c2, i2, s2, l2) {
    var u2 = 1, f2 = ml(e2["a:pPr"], ["attrs", "lvl"]);
    void 0 !== f2 && (u2 = parseInt(f2) + 1);
    var h2 = df(t2["a:t"]);
    "string" != typeof h2 && (h2 = df(ml(t2, ["a:fld", "a:t"]))), "string" != typeof h2 && (h2 = "&nbsp;");
    var d2 = "", p2 = (function(t3, e3, r3, a3, n3, o3, c3, i3, s3, l3) {
      var u3 = rf(t3, e3, r3, a3, n3, i3), f3 = cf(u3, l3);
      if (!f3) {
        if (s3 && (f3 = gu(s3, void 0, void 0, l3)), !f3) {
          var h3 = ml(a3, ["p:style", "a:fontRef"]);
          h3 && (f3 = gu(h3, void 0, void 0, l3));
        }
        if (!f3) {
          var d3 = ml(n3, ["p:style", "a:fontRef"]);
          d3 && (f3 = gu(d3, void 0, void 0, l3));
        }
      }
      return f3 || (ef(u3, o3, i3, c3), f3 = cf(u3, l3)), f3 || "";
    })(t2, e2, r2, n2, o2, c2, i2, u2, a2, l2), b2 = lf(t2, e2, r2, n2, o2, c2, i2, u2, s2), g2 = sf(t2, e2, r2, n2, o2, c2, i2, u2, l2), v2 = (function(t3, e3, r3, a3, n3, o3, c3, i3) {
      return "1" === nf(af(t3, e3, r3, a3, n3, o3, c3, i3), "b") ? "bold" : "";
    })(t2, e2, r2, n2, o2, c2, i2, u2), m2 = (function(t3, e3, r3, a3, n3, o3, c3, i3) {
      return "1" === nf(af(t3, e3, r3, a3, n3, o3, c3, i3), "i") ? "italic" : "";
    })(t2, e2, r2, n2, o2, c2, i2, u2), y2 = (function(t3, e3, r3, a3, n3, o3, c3, i3) {
      return "sng" === nf(af(t3, e3, r3, a3, n3, o3, c3, i3), "u") ? "underline" : "";
    })(t2, e2, r2, n2, o2, c2, i2, u2), L2 = (function(t3, e3, r3, a3, n3, o3, c3, i3) {
      return "sngStrike" === nf(af(t3, e3, r3, a3, n3, o3, c3, i3), "strike") ? "line-through" : "";
    })(t2, e2, r2, n2, o2, c2, i2, u2), w2 = (function(t3, e3, r3, a3, n3, o3, c3, i3) {
      var s3 = nf(af(t3, e3, r3, a3, n3, o3, c3, i3), "spc");
      return s3 && 0 !== parseInt(s3) ? parseInt(s3) / 100 + "pt" : "";
    })(t2, e2, r2, n2, o2, c2, i2, u2), _2 = uf(t2, e2, r2, n2, o2, c2, i2, u2, l2), k2 = (function(t3, e3, r3, a3, n3, o3, c3, i3) {
      var s3 = nf(af(t3, e3, r3, a3, n3, o3, c3, i3), "baseline");
      return s3 && 0 !== parseInt(s3) ? parseInt(s3) > 0 ? "super" : "sub" : "";
    })(t2, e2, r2, n2, o2, c2, i2, u2);
    if (p2) {
      if ("string" == typeof p2) d2 += "color: ".concat(p2, ";");
      else if (p2.colors) {
        var M2 = p2.colors, x2 = p2.rot, S2 = M2.map((function(t3) {
          return "".concat(t3.color, " ").concat(t3.pos);
        })).join(", "), I2 = "linear-gradient(".concat(x2 + 90, "deg, ").concat(S2, ")");
        d2 += "background: ".concat(I2, "; background-clip: text; color: transparent;");
      }
    }
    b2 && (d2 += "font-size: ".concat(b2, ";")), g2 && (d2 += "font-family: ".concat(g2, ";")), v2 && (d2 += "font-weight: ".concat(v2, ";")), m2 && (d2 += "font-style: ".concat(m2, ";")), y2 && (d2 += "text-decoration: ".concat(y2, ";")), L2 && (d2 += "text-decoration-line: ".concat(L2, ";")), w2 && (d2 += "letter-spacing: ".concat(w2, ";")), k2 && (d2 += "vertical-align: ".concat(k2, ";")), _2 && (d2 += "text-shadow: ".concat(_2, ";"));
    var C2 = ml(t2, ["a:rPr", "a:hlinkClick", "attrs", "r:id"]), A2 = C2 && l2.slideResObj[C2];
    return { styleText: d2, text: h2, hasLink: A2, linkURL: A2 ? l2.slideResObj[C2].target : null };
  }
  function yf(t2, e2, r2, a2, n2, o2, c2) {
    var i2, s2 = n2;
    if (o2 >= n2) for (; s2 <= o2; ) {
      var l2 = s2 * (Math.PI / 180), u2 = t2 + Math.cos(l2) * r2, f2 = e2 + Math.sin(l2) * a2;
      s2 === n2 && (i2 = " M" + u2 + " " + f2), i2 += " L" + u2 + " " + f2, s2++;
    }
    else for (; s2 > o2; ) {
      var h2 = s2 * (Math.PI / 180), d2 = t2 + Math.cos(h2) * r2, p2 = e2 + Math.sin(h2) * a2;
      s2 === n2 && (i2 = " M " + d2 + " " + p2), i2 += " L " + d2 + " " + p2, s2--;
    }
    return i2 += c2 ? " z" : "";
  }
  function Lf(t2, e2, r2) {
    var a2 = ml(t2, ["a:pathLst"]), n2 = ml(a2, ["a:path"]);
    Array.isArray(n2) && (n2 = n2.shift());
    var o2 = parseInt(n2.attrs.w), c2 = parseInt(n2.attrs.h), i2 = 0 === o2 ? 0 : 1 / o2 * e2, s2 = 0 === c2 ? 0 : 1 / c2 * r2, l2 = "", u2 = ml(n2, ["a:moveTo"]), f2 = n2["a:lnTo"], h2 = n2["a:cubicBezTo"], d2 = n2["a:quadBezTo"], p2 = n2["a:arcTo"], b2 = ml(n2, ["a:close"]);
    Array.isArray(u2) || (u2 = [u2]);
    var g2 = [];
    if (u2.length > 0) {
      if (Object.keys(u2).forEach((function(t3) {
        var e3 = u2[t3]["a:pt"];
        e3 && Object.keys(e3).forEach((function(t4) {
          var r3 = e3[t4], a3 = r3.x, n3 = r3.y, o3 = r3.order;
          g2.push({ type: "movto", x: a3, y: n3, order: o3 });
        }));
      })), f2 && (Array.isArray(f2) || (f2 = [f2]), Object.keys(f2).forEach((function(t3) {
        var e3 = f2[t3]["a:pt"];
        e3 && Object.keys(e3).forEach((function(t4) {
          var r3 = e3[t4], a3 = r3.x, n3 = r3.y, o3 = r3.order;
          g2.push({ type: "lnto", x: a3, y: n3, order: o3 });
        }));
      }))), h2) {
        var v2 = [];
        Array.isArray(h2) || (h2 = [h2]), Object.keys(h2).forEach((function(t3) {
          v2.push(h2[t3]["a:pt"]);
        })), v2.forEach((function(t3) {
          var e3 = [];
          t3.forEach((function(t4) {
            var r4 = { x: t4.attrs.x, y: t4.attrs.y };
            e3.push(r4);
          }));
          var r3 = t3[0].attrs.order;
          g2.push({ type: "cubicBezTo", cubBzPt: e3, order: r3 });
        }));
      }
      if (d2) {
        var m2 = [];
        Array.isArray(d2) || (d2 = [d2]), Object.keys(d2).forEach((function(t3) {
          m2.push(d2[t3]["a:pt"]);
        })), m2.forEach((function(t3) {
          var e3 = [];
          t3.forEach((function(t4) {
            var r4 = { x: t4.attrs.x, y: t4.attrs.y };
            e3.push(r4);
          }));
          var r3 = t3[0].attrs.order;
          g2.push({ type: "quadBezTo", quadBzPt: e3, order: r3 });
        }));
      }
      if (p2) (Array.isArray(p2) ? p2 : [p2]).forEach((function(t3) {
        var e3 = t3.attrs, r3 = e3.order, a3 = e3.hR, n3 = e3.wR, o3 = e3.stAng, c3 = e3.swAng, i3 = 0, s3 = 0, l3 = ml(t3, ["a:pt", "attrs"]);
        l3 && (i3 = l3.x, s3 = l3.y), g2.push({ type: "arcTo", hR: a3, wR: n3, stAng: o3, swAng: c3, shftX: i3, shftY: s3, order: r3 });
      }));
      b2 && (Array.isArray(b2) || (b2 = [b2]), Object.keys(b2).forEach((function() {
        g2.push({ type: "close", order: 1 / 0 });
      }))), g2.sort((function(t3, e3) {
        return t3.order - e3.order;
      }));
      for (var y2 = 0; y2 < g2.length; ) {
        if ("movto" === g2[y2].type) l2 += " M" + parseInt(g2[y2].x) * i2 + "," + parseInt(g2[y2].y) * s2;
        else if ("lnto" === g2[y2].type) {
          l2 += " L" + parseInt(g2[y2].x) * i2 + "," + parseInt(g2[y2].y) * s2;
        } else if ("cubicBezTo" === g2[y2].type) {
          l2 += " C" + parseInt(g2[y2].cubBzPt[0].x) * i2 + "," + parseInt(g2[y2].cubBzPt[0].y) * s2 + " " + parseInt(g2[y2].cubBzPt[1].x) * i2 + "," + parseInt(g2[y2].cubBzPt[1].y) * s2 + " " + parseInt(g2[y2].cubBzPt[2].x) * i2 + "," + parseInt(g2[y2].cubBzPt[2].y) * s2;
        } else if ("quadBezTo" === g2[y2].type) {
          l2 += " Q" + parseInt(g2[y2].quadBzPt[0].x) * i2 + "," + parseInt(g2[y2].quadBzPt[0].y) * s2 + " " + parseInt(g2[y2].quadBzPt[1].x) * i2 + "," + parseInt(g2[y2].quadBzPt[1].y) * s2;
        } else if ("arcTo" === g2[y2].type) {
          var L2 = parseInt(g2[y2].hR) * i2, w2 = parseInt(g2[y2].wR) * s2, _2 = parseInt(g2[y2].stAng) / 6e4;
          l2 += yf(w2, L2, w2, L2, _2, _2 + parseInt(g2[y2].swAng) / 6e4, false);
        } else "close" === g2[y2].type && (l2 += "z");
        y2++;
      }
    }
    return l2;
  }
  function wf(t2) {
    var e2 = ml(t2, ["a:pathLst", "a:path"]);
    if (!e2) return false;
    var r2 = Array.isArray(e2) ? e2 : [e2];
    return 1 === r2.length && "none" === ml(r2[0], ["attrs", "fill"]);
  }
  function _f(t2) {
    var e2, r2, a2 = t2["a:pathLst"];
    if (!a2 || !a2["a:path"]) return "custom";
    var n2 = a2["a:path"], o2 = parseInt(null === (e2 = n2.attrs) || void 0 === e2 ? void 0 : e2.w) || 0, c2 = parseInt(null === (r2 = n2.attrs) || void 0 === r2 ? void 0 : r2.h) || 0, i2 = (function(t3) {
      var e3 = [];
      if (t3["a:moveTo"]) {
        var r3, a3, n3 = t3["a:moveTo"]["a:pt"];
        if (n3) e3.push({ type: "moveTo", points: [{ x: parseInt(null === (r3 = n3.attrs) || void 0 === r3 ? void 0 : r3.x) || 0, y: parseInt(null === (a3 = n3.attrs) || void 0 === a3 ? void 0 : a3.y) || 0 }] });
      }
      kf(t3["a:lnTo"]).forEach((function(t4) {
        var r4, a4, n4 = t4["a:pt"];
        n4 && e3.push({ type: "lineTo", points: [{ x: parseInt(null === (r4 = n4.attrs) || void 0 === r4 ? void 0 : r4.x) || 0, y: parseInt(null === (a4 = n4.attrs) || void 0 === a4 ? void 0 : a4.y) || 0 }] });
      })), kf(t3["a:cubicBezTo"]).forEach((function(t4) {
        var r4 = kf(t4["a:pt"]).map((function(t5) {
          var e4, r5;
          return { x: parseInt(null === (e4 = t5.attrs) || void 0 === e4 ? void 0 : e4.x) || 0, y: parseInt(null === (r5 = t5.attrs) || void 0 === r5 ? void 0 : r5.y) || 0 };
        }));
        3 === r4.length && e3.push({ type: "cubicBezTo", points: r4 });
      })), kf(t3["a:arcTo"]).forEach((function(t4) {
        var r4, a4, n4, o3;
        e3.push({ type: "arcTo", wR: parseInt(null === (r4 = t4.attrs) || void 0 === r4 ? void 0 : r4.wR) || 0, hR: parseInt(null === (a4 = t4.attrs) || void 0 === a4 ? void 0 : a4.hR) || 0, stAng: parseInt(null === (n4 = t4.attrs) || void 0 === n4 ? void 0 : n4.stAng) || 0, swAng: parseInt(null === (o3 = t4.attrs) || void 0 === o3 ? void 0 : o3.swAng) || 0 });
      })), kf(t3["a:quadBezTo"]).forEach((function(t4) {
        var r4 = kf(t4["a:pt"]).map((function(t5) {
          var e4, r5;
          return { x: parseInt(null === (e4 = t5.attrs) || void 0 === e4 ? void 0 : e4.x) || 0, y: parseInt(null === (r5 = t5.attrs) || void 0 === r5 ? void 0 : r5.y) || 0 };
        }));
        e3.push({ type: "quadBezTo", points: r4 });
      })), t3["a:close"] && e3.push({ type: "close" });
      return e3;
    })(n2);
    if (0 === i2.length) return "custom";
    var s2 = (function(t3, e3, r3) {
      var a3 = { lineCount: 0, curveCount: 0, arcCount: 0, isClosed: false, vertices: [], aspectRatio: 0 !== r3 ? e3 / r3 : 1, pathWidth: e3, pathHeight: r3, hasCurves: false, isCircular: false, commands: t3 };
      t3.forEach((function(t4) {
        switch (t4.type) {
          case "moveTo":
            a3.vertices.push(t4.points[0]);
            break;
          case "lineTo":
            a3.lineCount++, a3.vertices.push(t4.points[0]);
            break;
          case "cubicBezTo":
            a3.curveCount++, a3.hasCurves = true, 3 === t4.points.length && a3.vertices.push(t4.points[2]);
            break;
          case "quadBezTo":
            a3.curveCount++, a3.hasCurves = true, t4.points.length >= 2 && a3.vertices.push(t4.points[t4.points.length - 1]);
            break;
          case "arcTo":
            a3.arcCount++, a3.hasCurves = true;
            break;
          case "close":
            a3.isClosed = true;
        }
      })), 4 === a3.curveCount && 0 === a3.lineCount && a3.isClosed && (a3.isCircular = (function(t4, e4, r4) {
        var a4 = t4.filter((function(t5) {
          return "cubicBezTo" === t5.type;
        }));
        if (4 !== a4.length) return false;
        var n3 = a4.map((function(t5) {
          return t5.points[2];
        })), o3 = n3.some((function(t5) {
          return Math.abs(t5.y) < 0.1 * r4;
        })), c3 = n3.some((function(t5) {
          return Math.abs(t5.y - r4) < 0.1 * r4;
        })), i3 = n3.some((function(t5) {
          return Math.abs(t5.x) < 0.1 * e4;
        })), s3 = n3.some((function(t5) {
          return Math.abs(t5.x - e4) < 0.1 * e4;
        }));
        return (o3 || c3) && (i3 || s3);
      })(t3, e3, r3));
      return a3;
    })(i2, o2, c2);
    return (function(t3) {
      var e3 = t3.lineCount, r3 = t3.curveCount, a3 = t3.isClosed, n3 = t3.vertices, o3 = t3.hasCurves, c3 = t3.isCircular;
      if (t3.pathWidth, t3.pathHeight, c3) return "ellipse";
      if (t3.arcCount >= 2 && a3 && 0 === e3) return "ellipse";
      if (!o3 && a3 && n3.length >= 3) return (function(t4, e4, r4) {
        var a4 = (function(t5) {
          var e5 = 100, r5 = [];
          return t5.forEach((function(t6) {
            r5.some((function(r6) {
              return Math.abs(r6.x - t6.x) < e5 && Math.abs(r6.y - t6.y) < e5;
            })) || r5.push(t6);
          })), r5;
        })(t4), n4 = a4.length;
        switch (n4) {
          case 3:
            return "triangle";
          case 4:
            return (function(t5) {
              if (4 !== t5.length) return "custom";
              for (var e5 = [], r5 = 0; r5 < 4; r5++) {
                var a5 = t5[r5], n5 = t5[(r5 + 1) % 4];
                e5.push({ dx: n5.x - a5.x, dy: n5.y - a5.y, length: Math.sqrt(Math.pow(n5.x - a5.x, 2) + Math.pow(n5.y - a5.y, 2)) });
              }
              return (function(t6) {
                var e6 = 0.1, r6 = Math.abs(t6[0].length - t6[2].length) / Math.max(t6[0].length, t6[2].length) < e6, a6 = Math.abs(t6[1].length - t6[3].length) / Math.max(t6[1].length, t6[3].length) < e6;
                if (!r6 || !a6) return false;
                for (var n6 = 0; n6 < 4; n6++) {
                  var o4 = t6[n6], c4 = t6[(n6 + 1) % 4], i4 = (o4.dx * c4.dx + o4.dy * c4.dy) / (o4.length * c4.length);
                  if (Math.abs(i4) > 0.1) return false;
                }
                return true;
              })(e5) ? "roundRect" : (function(t6) {
                var e6 = 0.1, r6 = t6.reduce((function(t7, e7) {
                  return t7 + e7.length;
                }), 0) / 4;
                return t6.every((function(t7) {
                  return Math.abs(t7.length - r6) / r6 < e6;
                }));
              })(e5) ? "rhombus" : (function(t6) {
                var e6 = 0.15, r6 = 0 !== t6[0].dx ? t6[0].dy / t6[0].dx : 1 / 0, a6 = 0 !== t6[2].dx ? t6[2].dy / t6[2].dx : 1 / 0, n6 = 0 !== t6[1].dx ? t6[1].dy / t6[1].dx : 1 / 0, o4 = 0 !== t6[3].dx ? t6[3].dy / t6[3].dx : 1 / 0, c4 = Math.abs(r6 - a6) < e6 || Math.abs(r6) > 1e3 && Math.abs(a6) > 1e3, i4 = Math.abs(n6 - o4) < e6 || Math.abs(n6) > 1e3 && Math.abs(o4) > 1e3;
                return c4 && i4;
              })(e5) ? "parallelogram" : (function(t6) {
                var e6 = 0.15, r6 = 0 !== t6[0].dx ? t6[0].dy / t6[0].dx : 1 / 0, a6 = 0 !== t6[2].dx ? t6[2].dy / t6[2].dx : 1 / 0, n6 = 0 !== t6[1].dx ? t6[1].dy / t6[1].dx : 1 / 0, o4 = 0 !== t6[3].dx ? t6[3].dy / t6[3].dx : 1 / 0, c4 = Math.abs(r6 - a6) < e6 || Math.abs(r6) > 1e3 && Math.abs(a6) > 1e3, i4 = Math.abs(n6 - o4) < e6 || Math.abs(n6) > 1e3 && Math.abs(o4) > 1e3;
                return c4 && !i4 || !c4 && i4;
              })(e5) ? "trapezoid" : "custom";
            })(a4);
          case 5:
            return "pentagon";
          case 6:
            return "hexagon";
          case 7:
            return "heptagon";
          case 8:
            return "octagon";
          default:
            return n4 > 8 ? "ellipse" : "custom";
        }
      })(n3);
      if (4 === e3 && 4 === r3 && a3) return "roundRect";
      if (e3 >= 3 && r3 > 0 && r3 <= e3 && a3) {
        var i3 = (function(t4) {
          switch (t4) {
            case 3:
              return "triangle";
            case 4:
              return "rectangle";
            case 5:
              return "pentagon";
            case 6:
              return "hexagon";
            case 7:
              return "heptagon";
            case 8:
              return "octagon";
            default:
              return "custom";
          }
        })(e3);
        if ("custom" !== i3) return "rectangle" === i3 ? "roundRect" : i3;
      }
      return "custom";
    })(s2);
  }
  function kf(t2) {
    return t2 ? Array.isArray(t2) ? t2 : [t2] : [];
  }
  function Mf(t2, e2) {
    if (t2) return gu(t2["a:solidFill"] || t2, void 0, void 0, e2);
  }
  function xf(t2, e2) {
    var r2 = {};
    if (t2["a:bottom"]) {
      var a2 = mu({ "p:spPr": { "a:ln": t2["a:bottom"]["a:ln"] } }, void 0, e2);
      r2.bottom = a2;
    }
    if (t2["a:top"]) {
      var n2 = mu({ "p:spPr": { "a:ln": t2["a:top"]["a:ln"] } }, void 0, e2);
      r2.top = n2;
    }
    if (t2["a:right"]) {
      var o2 = mu({ "p:spPr": { "a:ln": t2["a:right"]["a:ln"] } }, void 0, e2);
      r2.right = o2;
    }
    if (t2["a:left"]) {
      var c2 = mu({ "p:spPr": { "a:ln": t2["a:left"]["a:ln"] } }, void 0, e2);
      r2.left = c2;
    }
    return r2;
  }
  function Sf(t2, e2, r2, a2) {
    return If.apply(this, arguments);
  }
  function If() {
    return (If = n(u.mark((function t2(e2, r2, a2, n2) {
      var o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (o2 = ml(e2, ["attrs", "rowSpan"]), c2 = ml(e2, ["attrs", "gridSpan"]), i2 = ml(e2, ["attrs", "vMerge"]), s2 = ml(e2, ["attrs", "hMerge"]), l2 = ml(e2, ["a:tcPr", "attrs", "anchor"]), !(p2 = ml(e2, ["a:tcPr"]))) {
              t3.next = 12;
              break;
            }
            return b2 = { "p:spPr": p2 }, t3.next = 10, hu(b2, n2, "slide");
          case 10:
            (g2 = t3.sent) && "color" === g2.type && g2.value && (f2 = g2.value);
          case 12:
            return f2 || (a2 && (v2 = ml(r2, [a2, "a:tcStyle", "a:fill", "a:solidFill"])), v2 && (f2 = gu(v2, void 0, void 0, n2))), a2 && (m2 = ml(r2, [a2, "a:tcTxStyle"])), m2 && (h2 = Mf(m2, n2), "on" === ml(m2, ["attrs", "b"]) && (d2 = true)), (y2 = ml(e2, ["a:tcPr", "a:lnB"])) || (a2 && (y2 = ml(r2[a2], ["a:tcStyle", "a:tcBdr", "a:bottom", "a:ln"])), y2 || (y2 = ml(r2, ["a:wholeTbl", "a:tcStyle", "a:tcBdr", "a:bottom", "a:ln"]))), (L2 = ml(e2, ["a:tcPr", "a:lnT"])) || (a2 && (L2 = ml(r2[a2], ["a:tcStyle", "a:tcBdr", "a:top", "a:ln"])), L2 || (L2 = ml(r2, ["a:wholeTbl", "a:tcStyle", "a:tcBdr", "a:top", "a:ln"]))), (w2 = ml(e2, ["a:tcPr", "a:lnL"])) || (a2 && (w2 = ml(r2[a2], ["a:tcStyle", "a:tcBdr", "a:left", "a:ln"])), w2 || (w2 = ml(r2, ["a:wholeTbl", "a:tcStyle", "a:tcBdr", "a:left", "a:ln"]))), (_2 = ml(e2, ["a:tcPr", "a:lnR"])) || (a2 && (_2 = ml(r2[a2], ["a:tcStyle", "a:tcBdr", "a:right", "a:ln"])), _2 || (_2 = ml(r2, ["a:wholeTbl", "a:tcStyle", "a:tcBdr", "a:right", "a:ln"]))), k2 = {}, y2 && (k2.bottom = mu(y2, void 0, n2)), L2 && (k2.top = mu(L2, void 0, n2)), w2 && (k2.left = mu(w2, void 0, n2)), _2 && (k2.right = mu(_2, void 0, n2)), t3.abrupt("return", { fillColor: f2, fontColor: h2, fontBold: d2, borders: k2, vAlign: "ctr" === l2 ? "mid" : "b" === l2 ? "down" : "up", rowSpan: o2 ? +o2 : void 0, colSpan: c2 ? +c2 : void 0, vMerge: i2 ? +i2 : void 0, hMerge: s2 ? +s2 : void 0 });
          case 29:
          case "end":
            return t3.stop();
        }
      }), t2);
    })))).apply(this, arguments);
  }
  function Cf(t2, e2, r2, a2, n2) {
    var o2, c2, i2;
    if (a2 && a2["a:wholeTbl"]) {
      var s2 = ml(a2, ["a:wholeTbl", "a:tcStyle", "a:fill", "a:solidFill"]);
      if (s2) {
        var l2 = gu(s2, void 0, void 0, n2);
        l2 && (o2 = l2);
      }
      var u2 = ml(a2, ["a:wholeTbl", "a:tcTxStyle"]);
      if (u2) {
        var f2 = Mf(u2, n2);
        f2 && (c2 = f2), "on" === ml(u2, ["attrs", "b"]) && (i2 = true);
      }
    }
    if (0 === e2 && 1 === r2.isFrstRowAttr && a2) {
      var h2 = ml(a2, ["a:firstRow", "a:tcStyle", "a:fill", "a:solidFill"]);
      if (h2) {
        var d2 = gu(h2, void 0, void 0, n2);
        d2 && (o2 = d2);
      }
      var p2 = ml(a2, ["a:firstRow", "a:tcTxStyle"]);
      if (p2) {
        var b2 = Mf(p2, n2);
        b2 && (c2 = b2), "on" === ml(p2, ["attrs", "b"]) && (i2 = true);
      }
    } else if (e2 > 0 && 1 === r2.isBandRowAttr && a2) {
      if (o2 = "", e2 % 2 == 0 && a2["a:band2H"]) {
        var g2 = ml(a2, ["a:band2H", "a:tcStyle", "a:fill", "a:solidFill"]);
        if (g2) {
          var v2 = gu(g2, void 0, void 0, n2);
          v2 && (o2 = v2);
        }
        var m2 = ml(a2, ["a:band2H", "a:tcTxStyle"]);
        if (m2) {
          var y2 = Mf(m2, n2);
          y2 && (c2 = y2);
        }
        "on" === ml(m2, ["attrs", "b"]) && (i2 = true);
      }
      if (e2 % 2 != 0 && a2["a:band1H"]) {
        var L2 = ml(a2, ["a:band1H", "a:tcStyle", "a:fill", "a:solidFill"]);
        if (L2) {
          var w2 = gu(L2, void 0, void 0, n2);
          w2 && (o2 = w2);
        }
        var _2 = ml(a2, ["a:band1H", "a:tcTxStyle"]);
        if (_2) {
          var k2 = Mf(_2, n2);
          k2 && (c2 = k2), "on" === ml(_2, ["attrs", "b"]) && (i2 = true);
        }
      }
    }
    if (e2 === t2.length - 1 && 1 === r2.isLstRowAttr && a2) {
      var M2 = ml(a2, ["a:lastRow", "a:tcStyle", "a:fill", "a:solidFill"]);
      if (M2) {
        var x2 = gu(M2, void 0, void 0, n2);
        x2 && (o2 = x2);
      }
      var S2 = ml(a2, ["a:lastRow", "a:tcTxStyle"]);
      if (S2) {
        var I2 = Mf(S2, n2);
        I2 && (c2 = I2), "on" === ml(S2, ["attrs", "b"]) && (i2 = true);
      }
    }
    return { fillColor: o2, fontColor: c2, fontBold: i2 };
  }
  function Af(t2) {
    var e2 = [];
    return "object" !== ys(t2) || (t2["m:oMath"] && (e2 = e2.concat(t2["m:oMath"])), Object.values(t2).forEach((function(t3) {
      (Array.isArray(t3) || "object" === ys(t3)) && (e2 = e2.concat(Af(t3)));
    }))), e2;
  }
  function Pf(t2, e2) {
    var r2 = Ef(t2["m:e"]), a2 = Ef(t2["m:lim"]);
    return "low" === e2 ? "".concat(r2, "_{").concat(a2, "}") : "".concat(r2, "^{").concat(a2, "}");
  }
  function Ef(t2) {
    if (!t2) return "";
    if (Array.isArray(t2)) return t2.map((function(t3) {
      return Ef(t3);
    })).join("");
    for (var r2 = [], a2 = Object.keys(t2), n2 = function() {
      var a3 = c2[o2];
      Array.isArray(t2[a3]) ? r2.push.apply(r2, e(t2[a3].map((function(t3) {
        return { key: a3, value: t3 };
      })))) : r2.push({ key: a3, value: t2[a3] });
    }, o2 = 0, c2 = a2; o2 < c2.length; o2++) n2();
    return r2.sort((function(t3, e2) {
      var r3 = 0;
      "m:r" === t3.key && t3.value && t3.value["a:rPr"] ? r3 = t3.value["a:rPr"].attrs.order : t3.value["".concat(t3.key, "Pr")] && t3.value["".concat(t3.key, "Pr")]["m:ctrlPr"] && t3.value["".concat(t3.key, "Pr")]["m:ctrlPr"]["a:rPr"] && (r3 = t3.value["".concat(t3.key, "Pr")] && t3.value["".concat(t3.key, "Pr")]["m:ctrlPr"] && t3.value["".concat(t3.key, "Pr")]["m:ctrlPr"]["a:rPr"] && t3.value["".concat(t3.key, "Pr")]["m:ctrlPr"]["a:rPr"].attrs.order);
      var a3 = 0;
      return "m:r" === e2.key && e2.value && e2.value["a:rPr"] ? a3 = e2.value["a:rPr"].attrs.order : e2.value["".concat(e2.key, "Pr")] && e2.value["".concat(e2.key, "Pr")]["m:ctrlPr"] && e2.value["".concat(e2.key, "Pr")]["m:ctrlPr"]["a:rPr"] && (a3 = e2.value["".concat(e2.key, "Pr")] && e2.value["".concat(e2.key, "Pr")]["m:ctrlPr"] && e2.value["".concat(e2.key, "Pr")]["m:ctrlPr"]["a:rPr"] && e2.value["".concat(e2.key, "Pr")]["m:ctrlPr"]["a:rPr"].attrs.order), r3 - a3;
    })), r2.map((function(t3) {
      var e2, r3, a3, n3, o3, c3, i2, s2, l2, u2, f2, h2, d2, p2, b2, g2, v2, m2 = t3.key, y2 = t3.value;
      return "m:f" === m2 ? (r3 = Ef((e2 = y2)["m:num"]), a3 = Ef(e2["m:den"]), "\\frac{".concat(r3, "}{").concat(a3, "}")) : "m:sSup" === m2 ? (o3 = Ef((n3 = y2)["m:e"]), c3 = Ef(n3["m:sup"]), "".concat(o3, "^{").concat(c3, "}")) : "m:sSub" === m2 ? (function(t4) {
        var e3 = Ef(t4["m:e"]), r4 = Ef(t4["m:sub"]);
        return "".concat(e3, "_{").concat(r4, "}");
      })(y2) : "m:rad" === m2 ? (s2 = Ef((i2 = y2)["m:deg"]), l2 = Ef(i2["m:e"]), s2 ? "\\sqrt[".concat(s2, "]{").concat(l2, "}") : "\\sqrt{".concat(l2, "}")) : "m:nary" === m2 ? (function(t4) {
        var e3 = ml(t4, ["m:naryPr", "m:chr", "attrs", "m:val"]) || "\u222B", r4 = Ef(t4["m:sub"]), a4 = Ef(t4["m:sup"]), n4 = Ef(t4["m:e"]);
        return "".concat(e3, "_{").concat(r4, "}^{").concat(a4, "}{").concat(n4, "}");
      })(y2) : "m:limLow" === m2 ? Pf(y2, "low") : "m:limUpp" === m2 ? Pf(y2, "upp") : "m:d" === m2 ? (function(t4) {
        var e3 = ml(t4, ["m:dPr", "m:begChr", "attrs", "m:val"]), r4 = ml(t4, ["m:dPr", "m:endChr", "attrs", "m:val"]);
        e3 || r4 || (e3 = "(", r4 = ")"), e3 && r4 && (e3 = "\\left".concat(e3), r4 = "\\right".concat(r4));
        var a4 = Ef(t4["m:e"]);
        return "".concat(e3).concat(a4).concat(r4);
      })(y2) : "m:func" === m2 ? (f2 = Ef((u2 = y2)["m:fName"]), h2 = Ef(u2["m:e"]), "\\".concat(f2, "{").concat(h2, "}")) : "m:groupChr" === m2 ? (p2 = ml(d2 = y2, ["m:groupChrPr", "m:chr", "attrs", "m:val"]), b2 = Ef(d2["m:e"]), "".concat(p2).concat(b2).concat(p2)) : "m:eqArr" === m2 ? (g2 = y2["m:e"].map((function(t4) {
        return Ef(t4);
      })).join(" \\\\ "), "\\begin{cases} ".concat(g2, " \\end{cases}")) : "m:bar" === m2 ? (function(t4) {
        var e3 = Ef(t4["m:e"]);
        return "top" === ml(t4, ["m:barPr", "m:pos", "attrs", "m:val"]) ? "\\overline{".concat(e3, "}") : "\\underline{".concat(e3, "}");
      })(y2) : "m:acc" === m2 ? (function(t4) {
        var e3 = ml(t4, ["m:accPr", "m:chr", "attrs", "m:val"]) || "^", r4 = Ef(t4["m:e"]);
        switch (e3) {
          case "\u0301":
            return "\\acute{".concat(r4, "}");
          case "\u0300":
            return "\\grave{".concat(r4, "}");
          case "\u0302":
            return "\\hat{".concat(r4, "}");
          case "\u0303":
            return "\\tilde{".concat(r4, "}");
          case "\u0304":
            return "\\bar{".concat(r4, "}");
          case "\u0306":
            return "\\breve{".concat(r4, "}");
          case "\u0307":
            return "\\dot{".concat(r4, "}");
          case "\u0308":
            return "\\ddot{".concat(r4, "}");
          case "\u030A":
            return "\\mathring{".concat(r4, "}");
          case "\u030B":
            return "\\H{".concat(r4, "}");
          case "\u030C":
            return "\\check{".concat(r4, "}");
          case "\u0327":
            return "\\c{".concat(r4, "}");
          default:
            return "\\".concat(e3, "{").concat(r4, "}");
        }
      })(y2) : "m:borderBox" === m2 ? (function(t4) {
        var e3 = Ef(t4["m:e"]);
        return "\\boxed{".concat(e3, "}");
      })(y2) : "m:m" === m2 ? (v2 = y2["m:mr"].map((function(t4) {
        return t4["m:e"].map((function(t5) {
          return Ef(t5);
        })).join(" & ");
      })), "\\begin{matrix} ".concat(v2.join(" \\\\ "), " \\end{matrix}")) : "m:r" === m2 ? Ef(y2) : "m:t" === m2 ? y2 : "";
    })).join("");
  }
  function Rf(t2) {
    return t2.replaceAll(/&lt;/g, "<").replaceAll(/&gt;/g, ">").replaceAll(/&amp;/g, "&").replaceAll(/&apos;/g, "'").replaceAll(/&quot;/g, '"');
  }
  function Tf(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return Of(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return Of(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function Of(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function jf(t2, e2, r2, a2, n2, o2, c2) {
    for (var i2, s2 = "", l2 = o2 >= n2 ? 1 : -1, u2 = n2; i2 = u2, l2 > 0 ? i2 <= o2 : i2 >= o2; ) {
      var f2 = u2 * (Math.PI / 180), h2 = t2 + Math.cos(f2) * r2, d2 = e2 + Math.sin(f2) * a2;
      u2 === n2 && (s2 = " M".concat(h2, " ").concat(d2)), s2 += " L".concat(h2, " ").concat(d2), u2 += l2;
    }
    return c2 && (s2 += " z"), s2;
  }
  function zf(t2, r2, a2, n2) {
    var o2 = "";
    switch (t2) {
      case "rect":
      case "actionButtonBlank":
      case "leftRightCircularArrow":
      case "chartPlus":
      case "chartStar":
      case "chartX":
      case "cornerTabs":
      case "flowChartOfflineStorage":
      case "folderCorner":
      case "funnel":
      case "lineInv":
      case "nonIsoscelesTrapezoid":
      case "plaqueTabs":
      case "squareTabs":
      case "upDownArrowCallout":
      default:
        o2 = "M 0 0 L ".concat(r2, " 0 L ").concat(r2, " ").concat(a2, " L 0 ").concat(a2, " Z");
        break;
      case "flowChartPredefinedProcess":
        o2 = "M 0 0 L ".concat(r2, " 0 L ").concat(r2, " ").concat(a2, " L 0 ").concat(a2, " Z M ").concat(r2 * (1 / 8), " 0 L ").concat(r2 * (1 / 8), " ").concat(a2, " M ").concat(r2 * (7 / 8), " 0 L ").concat(r2 * (7 / 8), " ").concat(a2);
        break;
      case "flowChartInternalStorage":
        o2 = "M 0 0 L ".concat(r2, " 0 L ").concat(r2, " ").concat(a2, " L 0 ").concat(a2, " Z M ").concat(r2 * (1 / 8), " 0 L ").concat(r2 * (1 / 8), " ").concat(a2, " M 0 ").concat(a2 * (1 / 8), " L ").concat(r2, " ").concat(a2 * (1 / 8));
        break;
      case "flowChartCollate":
        o2 = "M 0,0 L ".concat(r2, ",0 L 0,").concat(a2, " L ").concat(r2, ",").concat(a2, " z");
        break;
      case "flowChartDocument":
        var c2 = 10800 * r2 / 21600, i2 = 17322 * a2 / 21600, s2 = 20172 * a2 / 21600, l2 = 23922 * a2 / 21600;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(i2, " C ").concat(c2, ",").concat(i2, " ").concat(c2, ",").concat(l2, " 0,").concat(s2, " z");
        break;
      case "flowChartMultidocument":
        var u2 = 18022 * a2 / 21600, f2 = 3675 * a2 / 21600, h2 = 23542 * a2 / 21600, d2 = 1815 * a2 / 21600, p2 = 16252 * a2 / 21600, b2 = 16352 * a2 / 21600, g2 = 14392 * a2 / 21600, v2 = 20782 * a2 / 21600, m2 = 14467 * a2 / 21600, y2 = 1532 * r2 / 21600, L2 = 2e4 * r2 / 21600, w2 = 9298 * r2 / 21600, _2 = 19298 * r2 / 21600, k2 = 18595 * r2 / 21600, M2 = 2972 * r2 / 21600, x2 = 20800 * r2 / 21600;
        o2 = "M 0,".concat(f2, " L ").concat(k2, ",").concat(f2, " L ").concat(k2, ",").concat(u2, " C ").concat(w2, ",").concat(u2, " ").concat(w2, ",").concat(h2, " 0,").concat(v2, " z M ").concat(y2, ",").concat(f2, " L ").concat(y2, ",").concat(d2, " L ").concat(L2, ",").concat(d2, " L ").concat(L2, ",").concat(p2, " C ").concat(_2, ",").concat(p2, " ").concat(k2, ",").concat(b2, " ").concat(k2, ",").concat(b2, " M ").concat(M2, ",").concat(d2, " L ").concat(M2, ",0 L ").concat(r2, ",0 L ").concat(r2, ",").concat(g2, " C ").concat(x2, ",").concat(g2, " ").concat(L2, ",").concat(m2, " ").concat(L2, ",").concat(m2);
        break;
      case "actionButtonBackPrevious":
        var S2 = r2 / 2, I2 = a2 / 2, C2 = 3 * Math.min(r2, a2) / 8, A2 = I2 - C2, P2 = I2 + C2, E2 = S2 - C2, R2 = S2 + C2;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(E2, ",").concat(I2, " L ").concat(R2, ",").concat(A2, " L ").concat(R2, ",").concat(P2, " z");
        break;
      case "actionButtonBeginning":
        var T2 = r2 / 2, O2 = a2 / 2, j2 = Math.min(r2, a2), z2 = 3 * j2 / 8, B2 = O2 - z2, D2 = O2 + z2, F2 = T2 - z2, N2 = T2 + z2, U2 = 3 * j2 / 4, G2 = F2 + U2 / 8, q2 = F2 + U2 / 4;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(q2, ",").concat(O2, " L ").concat(N2, ",").concat(B2, " L ").concat(N2, ",").concat(D2, " z M ").concat(G2, ",").concat(B2, " L ").concat(F2, ",").concat(B2, " L ").concat(F2, ",").concat(D2, " L ").concat(G2, ",").concat(D2, " z");
        break;
      case "actionButtonDocument":
        var W2 = r2 / 2, H2 = a2 / 2, Z2 = Math.min(r2, a2), Y2 = 3 * Z2 / 8, V2 = H2 - Y2, Q2 = H2 + Y2, $2 = 9 * Z2 / 32, K2 = W2 - $2, X2 = W2 + $2, J2 = 3 * Z2 / 16, tt2 = X2 - J2, et2 = V2 + J2;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(K2, ",").concat(V2, " L ").concat(tt2, ",").concat(V2, " L ").concat(X2, ",").concat(et2, " L ").concat(X2, ",").concat(Q2, " L ").concat(K2, ",").concat(Q2, " z M ").concat(tt2, ",").concat(V2, " L ").concat(tt2, ",").concat(et2, " L ").concat(X2, ",").concat(et2, " z");
        break;
      case "actionButtonEnd":
        var rt2 = r2 / 2, at2 = a2 / 2, nt2 = Math.min(r2, a2), ot2 = 3 * nt2 / 8, ct2 = at2 - ot2, it2 = at2 + ot2, st2 = rt2 - ot2, lt2 = rt2 + ot2, ut2 = 3 * nt2 / 4, ft2 = st2 + 3 * ut2 / 4, ht2 = st2 + 7 * ut2 / 8;
        o2 = "M 0,".concat(a2, " L ").concat(r2, ",").concat(a2, " L ").concat(r2, ",0 L 0,0 z M ").concat(ht2, ",").concat(ct2, " L ").concat(lt2, ",").concat(ct2, " L ").concat(lt2, ",").concat(it2, " L ").concat(ht2, ",").concat(it2, " z M ").concat(ft2, ",").concat(at2, " L ").concat(st2, ",").concat(ct2, " L ").concat(st2, ",").concat(it2, " z");
        break;
      case "actionButtonForwardNext":
        var dt2 = r2 / 2, pt2 = a2 / 2, bt2 = 3 * Math.min(r2, a2) / 8, gt2 = pt2 - bt2, vt2 = pt2 + bt2, mt2 = dt2 - bt2, yt2 = dt2 + bt2;
        o2 = "M 0,".concat(a2, " L ").concat(r2, ",").concat(a2, " L ").concat(r2, ",0 L 0,0 z M ").concat(yt2, ",").concat(pt2, " L ").concat(mt2, ",").concat(gt2, " L ").concat(mt2, ",").concat(vt2, " z");
        break;
      case "actionButtonHelp":
        var Lt2 = r2 / 2, wt2 = a2 / 2, _t2 = Math.min(r2, a2), kt2 = 3 * _t2 / 8, Mt2 = wt2 - kt2, xt2 = Lt2 - kt2, St2 = 3 * _t2 / 4, It2 = St2 / 7, Ct2 = 3 * St2 / 14, At2 = 2 * St2 / 7, Pt2 = Mt2 + At2, Et2 = Mt2 + 17 * St2 / 28, Rt2 = Mt2 + 21 * St2 / 28, Tt2 = Mt2 + 11 * St2 / 14, Ot2 = xt2 + Ct2, jt2 = xt2 + 3 * St2 / 7, zt2 = xt2 + 4 * St2 / 7, Bt2 = St2 / 14, Dt2 = 3 * St2 / 28, Ft2 = Ot2 + At2, Nt2 = jt2 + It2, Ut2 = Tt2 + Dt2, Gt2 = (zt2 + jt2 + At2) / 2;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(Ot2, ",").concat(Pt2, " ").concat(jf(Ft2, Pt2, At2, At2, 180, 360, false).replace("M", "L"), " ").concat(jf(Gt2, Pt2, It2, Ct2, 0, 90, false).replace("M", "L"), " ").concat(jf(Gt2, Et2, Bt2, Dt2, 270, 180, false).replace("M", "L"), " L ").concat(zt2, ",").concat(Rt2, " L ").concat(jt2, ",").concat(Rt2, " L ").concat(jt2, ",").concat(Et2, " ").concat(jf(Nt2, Et2, It2, Ct2, 180, 270, false).replace("M", "L"), " ").concat(jf(zt2, Pt2, Bt2, Dt2, 90, 0, false).replace("M", "L"), " ").concat(jf(Ft2, Pt2, It2, It2, 0, -180, false).replace("M", "L"), " z M ").concat(Lt2, ",").concat(Tt2, " ").concat(jf(Lt2, Ut2, Dt2, Dt2, 270, 630, false).replace("M", "L"), " z");
        break;
      case "actionButtonHome":
        var qt2 = r2 / 2, Wt2 = a2 / 2, Ht2 = Math.min(r2, a2), Zt2 = 3 * Ht2 / 8, Yt2 = Wt2 - Zt2, Vt2 = Wt2 + Zt2, Qt2 = qt2 - Zt2, $t2 = qt2 + Zt2, Kt2 = 3 * Ht2 / 4, Xt2 = Yt2 + Kt2 / 16, Jt2 = Yt2 + 3 * Kt2 / 16, te2 = Yt2 + 5 * Kt2 / 16, ee2 = Yt2 + 3 * Kt2 / 4, re2 = Qt2 + Kt2 / 8, ae2 = Qt2 + 7 * Kt2 / 16, ne2 = Qt2 + 9 * Kt2 / 16, oe2 = Qt2 + 11 * Kt2 / 16, ce2 = Qt2 + 13 * Kt2 / 16, ie2 = Qt2 + 7 * Kt2 / 8;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(qt2, ",").concat(Yt2, " L ").concat(Qt2, ",").concat(Wt2, " L ").concat(re2, ",").concat(Wt2, " L ").concat(re2, ",").concat(Vt2, " L ").concat(ie2, ",").concat(Vt2, " L ").concat(ie2, ",").concat(Wt2, " L ").concat($t2, ",").concat(Wt2, " L ").concat(ce2, ",").concat(te2, " L ").concat(ce2, ",").concat(Xt2, " L ").concat(oe2, ",").concat(Xt2, " L ").concat(oe2, ",").concat(Jt2, " z M ").concat(ae2, ",").concat(ee2, " L ").concat(ne2, ",").concat(ee2, " L ").concat(ne2, ",").concat(Vt2, " L ").concat(ae2, ",").concat(Vt2, " z");
        break;
      case "actionButtonInformation":
        var se2 = r2 / 2, le2 = a2 / 2, ue2 = Math.min(r2, a2), fe2 = 3 * ue2 / 8, he2 = le2 - fe2, de2 = se2 - fe2, pe2 = 3 * ue2 / 4, be2 = 5 * pe2 / 16, ge2 = he2 + pe2 / 32, ve2 = he2 + be2, me2 = he2 + 3 * pe2 / 8, ye2 = he2 + 13 * pe2 / 16, Le2 = he2 + 7 * pe2 / 8, we2 = de2 + be2, _e2 = de2 + 13 * pe2 / 32, ke2 = de2 + 19 * pe2 / 32, Me2 = de2 + 11 * pe2 / 16, xe2 = 3 * pe2 / 32, Se2 = he2 + fe2, Ie2 = ge2 + xe2;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(se2, ",").concat(he2, " ").concat(jf(se2, Se2, fe2, fe2, 270, 630, false).replace("M", "L"), " z M ").concat(se2, ",").concat(ge2, " ").concat(jf(se2, Ie2, xe2, xe2, 270, 630, false).replace("M", "L"), " M ").concat(we2, ",").concat(ve2, " L ").concat(ke2, ",").concat(ve2, " L ").concat(ke2, ",").concat(ye2, " L ").concat(Me2, ",").concat(ye2, " L ").concat(Me2, ",").concat(Le2, " L ").concat(we2, ",").concat(Le2, " L ").concat(we2, ",").concat(ye2, " L ").concat(_e2, ",").concat(ye2, " L ").concat(_e2, ",").concat(me2, " L ").concat(we2, ",").concat(me2, " z");
        break;
      case "actionButtonMovie":
        var Ce2 = r2 / 2, Ae2 = a2 / 2, Pe2 = Math.min(r2, a2), Ee2 = Ce2 - 3 * Pe2 / 8, Re2 = Ae2 - 3 * Pe2 / 8, Te2 = Ce2 + 3 * Pe2 / 8, Oe2 = 3 * Pe2 / 4, je2 = Ee2 + 1455 * Oe2 / 21600, ze2 = Ee2 + 1905 * Oe2 / 21600, Be2 = Ee2 + 2325 * Oe2 / 21600, De2 = Ee2 + 16155 * Oe2 / 21600, Fe2 = Ee2 + 17010 * Oe2 / 21600, Ne2 = Ee2 + 19335 * Oe2 / 21600, Ue2 = Ee2 + 19725 * Oe2 / 21600, Ge2 = Ee2 + 20595 * Oe2 / 21600, qe2 = Re2 + 5280 * Oe2 / 21600, We2 = Re2 + 5730 * Oe2 / 21600, He2 = Re2 + 6630 * Oe2 / 21600, Ze2 = Re2 + 7492 * Oe2 / 21600, Ye2 = Re2 + 9067 * Oe2 / 21600, Ve2 = Re2 + 9555 * Oe2 / 21600, Qe2 = Re2 + 13342 * Oe2 / 21600, $e2 = Re2 + 14580 * Oe2 / 21600, Ke2 = Re2 + 15592 * Oe2 / 21600;
        o2 = "M 0,".concat(a2, " L ").concat(r2, ",").concat(a2, " L ").concat(r2, ",0 L 0,0 z M ").concat(Ee2, ",").concat(qe2, " L ").concat(Ee2, ",").concat(Ve2, " L ").concat(je2, ",").concat(Ve2, " L ").concat(ze2, ",").concat(Ye2, " L ").concat(Be2, ",").concat(Ye2, " L ").concat(Be2, ",").concat(Ke2, " L ").concat(Fe2, ",").concat(Ke2, " L ").concat(Fe2, ",").concat(Qe2, " L ").concat(Ne2, ",").concat(Qe2, " L ").concat(Ge2, ",").concat($e2, " L ").concat(Te2, ",").concat($e2, " L ").concat(Te2, ",").concat(He2, " L ").concat(Ge2, ",").concat(He2, " L ").concat(Ue2, ",").concat(Ze2, " L ").concat(Fe2, ",").concat(Ze2, " L ").concat(Fe2, ",").concat(He2, " L ").concat(De2, ",").concat(We2, " L ").concat(ze2, ",").concat(We2, " L ").concat(je2, ",").concat(qe2, " z");
        break;
      case "actionButtonReturn":
        var Xe2 = r2 / 2, Je2 = a2 / 2, tr2 = Math.min(r2, a2), er2 = 3 * tr2 / 8, rr2 = Je2 - er2, ar2 = Je2 + er2, nr2 = Xe2 - er2, or2 = Xe2 + er2, cr2 = 3 * tr2 / 4, ir2 = 3 * cr2 / 4, sr2 = 5 * cr2 / 8, lr2 = 3 * cr2 / 8, ur2 = cr2 / 4, fr2 = rr2 + ir2, hr2 = rr2 + sr2, dr2 = rr2 + ur2, pr2 = nr2 + 7 * cr2 / 8, br2 = nr2 + ir2, gr2 = nr2 + sr2, vr2 = nr2 + lr2, mr2 = nr2 + ur2, yr2 = cr2 / 8, Lr2 = gr2 - yr2, wr2 = fr2 - yr2, _r2 = nr2 + lr2, kr2 = ar2 - lr2;
        o2 = "M 0,".concat(a2, " L ").concat(r2, ",").concat(a2, " L ").concat(r2, ",0 L 0,0 z M ").concat(or2, ",").concat(dr2, " L ").concat(br2, ",").concat(rr2, " L ").concat(Xe2, ",").concat(dr2, " L ").concat(gr2, ",").concat(dr2, " L ").concat(gr2, ",").concat(hr2, " ").concat(jf(Lr2, hr2, yr2, yr2, 0, 90, false).replace("M", "L"), " L ").concat(vr2, ",").concat(fr2, " ").concat(jf(vr2, wr2, yr2, yr2, 90, 180, false).replace("M", "L"), " L ").concat(mr2, ",").concat(dr2, " L ").concat(nr2, ",").concat(dr2, " L ").concat(nr2, ",").concat(hr2, " ").concat(jf(_r2, hr2, lr2, lr2, 180, 90, false).replace("M", "L"), " L ").concat(Xe2, ",").concat(ar2, " ").concat(jf(Xe2, kr2, lr2, lr2, 90, 0, false).replace("M", "L"), " L ").concat(pr2, ",").concat(dr2, " z");
        break;
      case "actionButtonSound":
        var Mr2 = r2 / 2, xr2 = a2 / 2, Sr2 = Math.min(r2, a2), Ir2 = 3 * Sr2 / 8, Cr2 = xr2 - Ir2, Ar2 = xr2 + Ir2, Pr2 = Mr2 - Ir2, Er2 = Mr2 + Ir2, Rr2 = 3 * Sr2 / 4, Tr2 = 5 * Rr2 / 16, Or2 = Cr2 + Rr2 / 8, jr2 = Cr2 + Tr2, zr2 = Cr2 + 11 * Rr2 / 16, Br2 = Cr2 + 7 * Rr2 / 8, Dr2 = Pr2 + Tr2, Fr2 = Pr2 + 5 * Rr2 / 8, Nr2 = Pr2 + 3 * Rr2 / 4;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(Pr2, ",").concat(jr2, " L ").concat(Dr2, ",").concat(jr2, " L ").concat(Fr2, ",").concat(Cr2, " L ").concat(Fr2, ",").concat(Ar2, " L ").concat(Dr2, ",").concat(zr2, " L ").concat(Pr2, ",").concat(zr2, " z M ").concat(Nr2, ",").concat(jr2, " L ").concat(Er2, ",").concat(Or2, " M ").concat(Nr2, ",").concat(xr2, " L ").concat(Er2, ",").concat(xr2, " M ").concat(Nr2, ",").concat(zr2, " L ").concat(Er2, ",").concat(Br2);
        break;
      case "irregularSeal1":
        o2 = "M ".concat(10800 * r2 / 21600, ",").concat(5800 * a2 / 21600, " L ").concat(14522 * r2 / 21600, ",0 L ").concat(14155 * r2 / 21600, ",").concat(5325 * a2 / 21600, " L ").concat(18380 * r2 / 21600, ",").concat(4457 * a2 / 21600, " L ").concat(16702 * r2 / 21600, ",").concat(7315 * a2 / 21600, " L ").concat(21097 * r2 / 21600, ",").concat(8137 * a2 / 21600, " L ").concat(17607 * r2 / 21600, ",").concat(10475 * a2 / 21600, " L ").concat(r2, ",").concat(13290 * a2 / 21600, " L ").concat(16837 * r2 / 21600, ",").concat(12942 * a2 / 21600, " L ").concat(18145 * r2 / 21600, ",").concat(18095 * a2 / 21600, " L ").concat(14020 * r2 / 21600, ",").concat(14457 * a2 / 21600, " L ").concat(13247 * r2 / 21600, ",").concat(19737 * a2 / 21600, " L ").concat(10532 * r2 / 21600, ",").concat(14935 * a2 / 21600, " L ").concat(8485 * r2 / 21600, ",").concat(a2, " L ").concat(7715 * r2 / 21600, ",").concat(15627 * a2 / 21600, " L ").concat(4762 * r2 / 21600, ",").concat(17617 * a2 / 21600, " L ").concat(5667 * r2 / 21600, ",").concat(13937 * a2 / 21600, " L ").concat(135 * r2 / 21600, ",").concat(14587 * a2 / 21600, " L ").concat(3722 * r2 / 21600, ",").concat(11775 * a2 / 21600, " L 0,").concat(8615 * a2 / 21600, " L ").concat(4627 * r2 / 21600, ",").concat(7617 * a2 / 21600, " L ").concat(370 * r2 / 21600, ",").concat(2295 * a2 / 21600, " L ").concat(7312 * r2 / 21600, ",").concat(6320 * a2 / 21600, " L ").concat(8352 * r2 / 21600, ",").concat(2295 * a2 / 21600, " z");
        break;
      case "irregularSeal2":
        o2 = "M ".concat(11462 * r2 / 21600, ",").concat(4342 * a2 / 21600, " L ").concat(14790 * r2 / 21600, ",0 L ").concat(14525 * r2 / 21600, ",").concat(5777 * a2 / 21600, " L ").concat(18007 * r2 / 21600, ",").concat(3172 * a2 / 21600, " L ").concat(16380 * r2 / 21600, ",").concat(6532 * a2 / 21600, " L ").concat(r2, ",").concat(6645 * a2 / 21600, " L ").concat(16985 * r2 / 21600, ",").concat(9402 * a2 / 21600, " L ").concat(18270 * r2 / 21600, ",").concat(11290 * a2 / 21600, " L ").concat(16380 * r2 / 21600, ",").concat(12310 * a2 / 21600, " L ").concat(18877 * r2 / 21600, ",").concat(15632 * a2 / 21600, " L ").concat(14640 * r2 / 21600, ",").concat(14350 * a2 / 21600, " L ").concat(14942 * r2 / 21600, ",").concat(17370 * a2 / 21600, " L ").concat(12180 * r2 / 21600, ",").concat(15935 * a2 / 21600, " L ").concat(11612 * r2 / 21600, ",").concat(18842 * a2 / 21600, " L ").concat(9872 * r2 / 21600, ",").concat(17370 * a2 / 21600, " L ").concat(8700 * r2 / 21600, ",").concat(19712 * a2 / 21600, " L ").concat(7527 * r2 / 21600, ",").concat(18125 * a2 / 21600, " L ").concat(4917 * r2 / 21600, ",").concat(a2, " L ").concat(4805 * r2 / 21600, ",").concat(18240 * a2 / 21600, " L ").concat(1285 * r2 / 21600, ",").concat(17825 * a2 / 21600, " L ").concat(3330 * r2 / 21600, ",").concat(15370 * a2 / 21600, " L 0,").concat(12877 * a2 / 21600, " L ").concat(3935 * r2 / 21600, ",").concat(11592 * a2 / 21600, " L ").concat(1172 * r2 / 21600, ",").concat(8270 * a2 / 21600, " L ").concat(5372 * r2 / 21600, ",").concat(7817 * a2 / 21600, " L ").concat(4502 * r2 / 21600, ",").concat(3625 * a2 / 21600, " L ").concat(8550 * r2 / 21600, ",").concat(6382 * a2 / 21600, " L ").concat(9722 * r2 / 21600, ",").concat(1887 * a2 / 21600, " z");
        break;
      case "flowChartTerminator":
        var Ur2 = 3475 * r2 / 21600, Gr2 = 18125 * r2 / 21600, qr2 = 10800 * a2 / 21600;
        o2 = "M ".concat(Ur2, ",0 L ").concat(Gr2, ",0 ").concat(jf(Gr2, a2 / 2, Ur2, qr2, 270, 450, false).replace("M", "L"), " L ").concat(Ur2, ",").concat(a2, " ").concat(jf(Ur2, a2 / 2, Ur2, qr2, 90, 270, false).replace("M", "L"), " z");
        break;
      case "flowChartPunchedTape":
        var Wr2 = 180, Hr2 = 5 * r2 / 20, Zr2 = 2 * a2 / 20, Yr2 = 18 * a2 / 20;
        o2 = "M 0,".concat(Zr2, " ").concat(jf(Hr2, Zr2, Hr2, Zr2, Wr2, 0, false).replace("M", "L"), " ").concat(jf(r2 * (3 / 4), Zr2, Hr2, Zr2, Wr2, 360, false).replace("M", "L"), " L ").concat(r2, ",").concat(Yr2, " ").concat(jf(r2 * (3 / 4), Yr2, Hr2, Zr2, 0, -180, false).replace("M", "L"), " ").concat(jf(Hr2, Yr2, Hr2, Zr2, 0, Wr2, false).replace("M", "L"), " z");
        break;
      case "flowChartOnlineStorage":
        var Vr2 = 1 * r2 / 6, Qr2 = 3 * a2 / 6;
        o2 = "M ".concat(Vr2, ",0 L ").concat(r2, ",0 ").concat(jf(r2, a2 / 2, Vr2, Qr2, 270, 90, false).replace("M", "L"), " L ").concat(Vr2, ",").concat(a2, " ").concat(jf(Vr2, a2 / 2, Vr2, Qr2, 90, 270, false).replace("M", "L"), " z");
        break;
      case "flowChartDisplay":
        var $r2 = 1 * r2 / 6, Kr2 = 5 * r2 / 6, Xr2 = 3 * a2 / 6;
        o2 = "M 0,".concat(Xr2, " L ").concat($r2, ",0 L ").concat(Kr2, ",0 ").concat(jf(r2, a2 / 2, $r2, Xr2, 270, 450, false).replace("M", "L"), " L ").concat($r2, ",").concat(a2, " z");
        break;
      case "flowChartDelay":
        var Jr2 = r2 / 2, ta2 = a2 / 2;
        o2 = "M 0,0 L ".concat(Jr2, ",0 ").concat(jf(Jr2, ta2, Jr2, ta2, 270, 450, false).replace("M", "L"), " L 0,").concat(a2, " z");
        break;
      case "flowChartMagneticTape":
        var ea2 = r2 / 2, ra2 = a2 / 2, aa2 = ra2 + ra2 * Math.sin(Math.PI / 4), na2 = 180 * Math.atan(a2 / r2) / Math.PI;
        o2 = "M ".concat(ea2, ",").concat(a2, " ").concat(jf(ea2, ra2, ea2, ra2, 90, 180, false).replace("M", "L"), " ").concat(jf(ea2, ra2, ea2, ra2, 180, 270, false).replace("M", "L"), " ").concat(jf(ea2, ra2, ea2, ra2, 270, 360, false).replace("M", "L"), " ").concat(jf(ea2, ra2, ea2, ra2, 0, na2, false).replace("M", "L"), " L ").concat(r2, ",").concat(aa2, " L ").concat(r2, ",").concat(a2, " z");
        break;
      case "ellipse":
      case "flowChartConnector":
      case "flowChartSummingJunction":
      case "flowChartOr":
        var oa2 = r2 / 2, ca2 = a2 / 2, ia2 = r2 / 2, sa2 = a2 / 2;
        if (o2 = "M ".concat(oa2 - ia2, ",").concat(ca2, " A ").concat(ia2, ",").concat(sa2, " 0 1,0 ").concat(oa2 + ia2, ",").concat(ca2, " A ").concat(ia2, ",").concat(sa2, " 0 1,0 ").concat(oa2 - ia2, ",").concat(ca2, " Z"), "flowChartOr" === t2) o2 += " M ".concat(r2 / 2, " 0 L ").concat(r2 / 2, " ").concat(a2, " M 0 ").concat(a2 / 2, " L ").concat(r2, " ").concat(a2 / 2);
        else if ("flowChartSummingJunction" === t2) {
          var la2 = Math.PI / 4, ua2 = r2 / 2 * Math.cos(la2), fa2 = a2 / 2 * Math.sin(la2), ha2 = oa2 - ua2, da2 = oa2 + ua2, pa2 = ca2 - fa2, ba2 = ca2 + fa2;
          o2 += " M ".concat(ha2, " ").concat(pa2, " L ").concat(da2, " ").concat(ba2, " M ").concat(da2, " ").concat(pa2, " L ").concat(ha2, " ").concat(ba2);
        }
        break;
      case "roundRect":
      case "round1Rect":
      case "round2DiagRect":
      case "round2SameRect":
      case "snip1Rect":
      case "snip2DiagRect":
      case "snip2SameRect":
      case "flowChartAlternateProcess":
      case "flowChartPunchedCard":
        var ga2, va2, ma2, ya2, La2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if (La2 && Array.isArray(La2)) {
          var wa2, _a2 = Tf(La2);
          try {
            for (_a2.s(); !(wa2 = _a2.n()).done; ) {
              var ka2 = wa2.value, Ma2 = ml(ka2, ["attrs", "name"]);
              if ("adj1" === Ma2) {
                var xa2 = ml(ka2, ["attrs", "fmla"]);
                ga2 = parseInt(xa2.substring(4)) / 5e4;
              } else if ("adj2" === Ma2) {
                var Sa2 = ml(ka2, ["attrs", "fmla"]);
                va2 = parseInt(Sa2.substring(4)) / 5e4;
              }
            }
          } catch (t3) {
            _a2.e(t3);
          } finally {
            _a2.f();
          }
        } else if (La2) {
          var Ia2 = ml(La2, ["attrs", "fmla"]);
          ga2 = parseInt(Ia2.substring(4)) / 5e4, va2 = 0;
        }
        switch (t2) {
          case "roundRect":
          case "flowChartAlternateProcess":
            ma2 = "round", ya2 = "cornrAll", void 0 === ga2 && (ga2 = 0.33334), va2 = 0;
            break;
          case "round1Rect":
            ma2 = "round", ya2 = "cornr1", void 0 === ga2 && (ga2 = 0.33334), va2 = 0;
            break;
          case "round2DiagRect":
            ma2 = "round", ya2 = "diag", void 0 === ga2 && (ga2 = 0.33334), void 0 === va2 && (va2 = 0);
            break;
          case "round2SameRect":
            ma2 = "round", ya2 = "cornr2", void 0 === ga2 && (ga2 = 0.33334), void 0 === va2 && (va2 = 0);
            break;
          case "snip1Rect":
            ma2 = "snip", ya2 = "cornr1", void 0 === ga2 && (ga2 = 0.33334), va2 = 0;
            break;
          case "flowChartPunchedCard":
            ma2 = "snip", ya2 = "cornrTL", void 0 === ga2 && (ga2 = 0.33334), va2 = 0;
            break;
          case "snip2DiagRect":
            ma2 = "snip", ya2 = "diag", void 0 === ga2 && (ga2 = 0), void 0 === va2 && (va2 = 0.33334);
            break;
          case "snip2SameRect":
            ma2 = "snip", ya2 = "cornr2", void 0 === ga2 && (ga2 = 0.33334), void 0 === va2 && (va2 = 0);
        }
        o2 = (function(t3, e2, r3, a3, n3, o3) {
          var c3, i3, s3, l3;
          switch (o3) {
            case "cornr1":
              c3 = 0, i3 = 0, s3 = 0, l3 = r3;
              break;
            case "cornr2":
              c3 = r3, i3 = a3, s3 = a3, l3 = r3;
              break;
            case "cornrAll":
              c3 = r3, i3 = r3, s3 = r3, l3 = r3;
              break;
            case "diag":
              c3 = r3, i3 = a3, s3 = r3, l3 = a3;
              break;
            case "cornrTL":
              c3 = r3, i3 = 0, s3 = 0, l3 = 0;
              break;
            default:
              c3 = i3 = s3 = l3 = 0;
          }
          return "round" === n3 ? "M0,".concat(e2 / 2 + e2 / 2 * (1 - i3), " Q0,").concat(e2, " ").concat(i3 * (t3 / 2), ",").concat(e2, " L").concat(t3 / 2 + t3 / 2 * (1 - s3), ",").concat(e2, " Q").concat(t3, ",").concat(e2, " ").concat(t3, ",").concat(e2 / 2 + e2 / 2 * (1 - s3), " L").concat(t3, ",").concat(e2 / 2 * l3, " Q").concat(t3, ",0 ").concat(t3 / 2 + t3 / 2 * (1 - l3), ",0 L").concat(t3 / 2 * c3, ",0 Q0,0 0,").concat(e2 / 2 * c3, " z") : "snip" === n3 ? "M0,".concat(c3 * (e2 / 2), " L0,").concat(e2 / 2 + e2 / 2 * (1 - i3), " L").concat(i3 * (t3 / 2), ",").concat(e2, " L").concat(t3 / 2 + t3 / 2 * (1 - s3), ",").concat(e2, " L").concat(t3, ",").concat(e2 / 2 + e2 / 2 * (1 - s3), " L").concat(t3, ",").concat(l3 * (e2 / 2), " L").concat(t3 / 2 + t3 / 2 * (1 - l3), ",0 L").concat(t3 / 2 * c3, ",0 z") : "";
        })(r2, a2, ga2, va2, ma2, ya2);
        break;
      case "snipRoundRect":
        var Ca2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), Aa2 = 0.33334, Pa2 = 0.33334;
        if (Ca2) {
          var Ea2, Ra2 = Tf(Ca2);
          try {
            for (Ra2.s(); !(Ea2 = Ra2.n()).done; ) {
              var Ta2 = Ea2.value, Oa2 = ml(Ta2, ["attrs", "name"]);
              if ("adj1" === Oa2) {
                var ja2 = ml(Ta2, ["attrs", "fmla"]);
                Aa2 = parseInt(ja2.substring(4)) / 5e4;
              } else if ("adj2" === Oa2) {
                var za2 = ml(Ta2, ["attrs", "fmla"]);
                Pa2 = parseInt(za2.substring(4)) / 5e4;
              }
            }
          } catch (t3) {
            Ra2.e(t3);
          } finally {
            Ra2.f();
          }
        }
        o2 = "M0,".concat(a2, " L").concat(r2, ",").concat(a2, " L").concat(r2, ",").concat(a2 / 2 * Pa2, " L").concat(r2 / 2 + r2 / 2 * (1 - Pa2), ",0 L").concat(r2 / 2 * Aa2, ",0 Q0,0 0,").concat(a2 / 2 * Aa2, " z");
        break;
      case "bentConnector2":
        o2 = "M ".concat(r2, " 0 L ").concat(r2, " ").concat(a2, " L 0 ").concat(a2);
        break;
      case "rtTriangle":
        o2 = "M 0 0 L 0 ".concat(a2, " L ").concat(r2, " ").concat(a2, " Z");
        break;
      case "triangle":
      case "flowChartExtract":
      case "flowChartMerge":
        var Ba2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Da2 = 0.5;
        Ba2 && (Da2 = parseInt(Ba2.substring(4)) * xu);
        var Fa2 = r2 * Da2, Na2 = 0, Ua2 = 0, Ga2 = a2, qa2 = r2, Wa2 = a2;
        if ("flowChartMerge" === t2) {
          var Ha2 = [r2 - Fa2, a2 - Na2];
          Fa2 = Ha2[0], Na2 = Ha2[1];
          var Za2 = [r2 - Ua2, a2 - Ga2];
          Ua2 = Za2[0], Ga2 = Za2[1];
          var Ya2 = [r2 - qa2, a2 - Wa2];
          qa2 = Ya2[0], Wa2 = Ya2[1];
        }
        o2 = "M ".concat(Fa2, " ").concat(Na2, " L ").concat(Ua2, " ").concat(Ga2, " L ").concat(qa2, " ").concat(Wa2, " Z");
        break;
      case "diamond":
      case "flowChartDecision":
      case "flowChartSort":
        o2 = "M ".concat(r2 / 2, " 0 L 0 ").concat(a2 / 2, " L ").concat(r2 / 2, " ").concat(a2, " L ").concat(r2, " ").concat(a2 / 2, " Z"), "flowChartSort" === t2 && (o2 += " M 0 ".concat(a2 / 2, " L ").concat(r2, " ").concat(a2 / 2));
        break;
      case "trapezoid":
      case "flowChartManualOperation":
      case "flowChartManualInput":
        var Va2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Qa2 = 0.2;
        if (Va2) Qa2 = 0.5 * (parseInt(Va2.substring(4)) * xu) / 0.7407;
        var $a2 = r2 * Qa2, Ka2 = 0, Xa2 = 0, Ja2 = a2, tn2 = r2, en2 = a2, rn2 = (1 - Qa2) * r2, an2 = 0;
        if ("flowChartManualInput" === t2 && (Ka2 = a2 / 5, $a2 = r2 * (Qa2 = 0), rn2 = (1 - Qa2) * r2), "flowChartManualOperation" === t2) {
          var nn2 = [r2 - $a2, a2 - Ka2];
          $a2 = nn2[0], Ka2 = nn2[1];
          var on2 = [r2 - Xa2, a2 - Ja2];
          Xa2 = on2[0], Ja2 = on2[1];
          var cn2 = [r2 - tn2, a2 - en2];
          tn2 = cn2[0], en2 = cn2[1];
          var sn2 = [r2 - rn2, a2 - an2];
          rn2 = sn2[0], an2 = sn2[1];
        }
        o2 = "M ".concat($a2, " ").concat(Ka2, " L ").concat(Xa2, " ").concat(Ja2, " L ").concat(tn2, " ").concat(en2, " L ").concat(rn2, " ").concat(an2, " Z");
        break;
      case "parallelogram":
      case "flowChartInputOutput":
        var ln2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), un2 = 0.25;
        if (ln2) {
          var fn2 = r2 > a2 ? r2 / a2 : a2 / r2;
          un2 = parseInt(ln2.substring(4)) / 1e5 / fn2;
        }
        o2 = "M ".concat(un2 * r2, " 0 L 0 ").concat(a2, " L ").concat((1 - un2) * r2, " ").concat(a2, " L ").concat(r2, " 0 Z");
        break;
      case "pentagon":
        o2 = "M ".concat(0.5 * r2, " 0 L 0 ").concat(0.375 * a2, " L ").concat(0.15 * r2, " ").concat(a2, " L ").concat(0.85 * r2, " ").concat(a2, " L ").concat(r2, " ").concat(0.375 * a2, " Z");
        break;
      case "hexagon":
      case "flowChartPreparation":
        var hn2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), dn2 = 1.9685039370078738;
        hn2 && (dn2 = parseInt(hn2.substring(4)) * xu);
        var pn2 = 7.874015748031495, bn2 = 60 * Math.PI / 180, gn2 = Math.min(r2, a2), vn2 = 3.9370078740157477 * r2 / gn2, mn2 = gn2 * (dn2 < 0 ? 0 : dn2 > vn2 ? vn2 : dn2) / pn2, yn2 = r2 - mn2, Ln2 = 9.092125984251968 * (a2 / 2) / pn2 * Math.sin(bn2), wn2 = a2 / 2, _n2 = wn2 - Ln2, kn2 = wn2 + Ln2;
        o2 = "M 0,".concat(wn2, " L ").concat(mn2, ",").concat(_n2, " L ").concat(yn2, ",").concat(_n2, " L ").concat(r2, ",").concat(wn2, " L ").concat(yn2, ",").concat(kn2, " L ").concat(mn2, ",").concat(kn2, " z");
        break;
      case "heptagon":
        o2 = "M ".concat(0.5 * r2, " 0 L ").concat(r2 / 8, " ").concat(a2 / 4, " L 0 ").concat(5 / 8 * a2, " L ").concat(r2 / 4, " ").concat(a2, " L ").concat(3 / 4 * r2, " ").concat(a2, " L ").concat(r2, " ").concat(5 / 8 * a2, " L ").concat(7 / 8 * r2, " ").concat(a2 / 4, " Z");
        break;
      case "octagon":
        var Mn2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), xn2 = 0.25;
        Mn2 && (xn2 = parseInt(Mn2.substring(4)) / 1e5);
        var Sn2 = 1 - xn2;
        o2 = "M ".concat(xn2 * r2, " 0 L 0 ").concat(xn2 * a2, " L 0 ").concat(Sn2 * a2, " L ").concat(xn2 * r2, " ").concat(a2, " L ").concat(Sn2 * r2, " ").concat(a2, " L ").concat(r2, " ").concat(Sn2 * a2, " L ").concat(r2, " ").concat(xn2 * a2, " L ").concat(Sn2 * r2, " 0 Z");
        break;
      case "decagon":
        o2 = "M ".concat(3 / 8 * r2, " 0 L ").concat(r2 / 8, " ").concat(a2 / 8, " L 0 ").concat(a2 / 2, " L ").concat(r2 / 8, " ").concat(7 / 8 * a2, " L ").concat(3 / 8 * r2, " ").concat(a2, " L ").concat(5 / 8 * r2, " ").concat(a2, " L ").concat(7 / 8 * r2, " ").concat(7 / 8 * a2, " L ").concat(r2, " ").concat(a2 / 2, " L ").concat(7 / 8 * r2, " ").concat(a2 / 8, " L ").concat(5 / 8 * r2, " 0 Z");
        break;
      case "dodecagon":
        o2 = "M ".concat(3 / 8 * r2, " 0 L ").concat(r2 / 8, " ").concat(a2 / 8, " L 0 ").concat(3 / 8 * a2, " L 0 ").concat(5 / 8 * a2, " L ").concat(r2 / 8, " ").concat(7 / 8 * a2, " L ").concat(3 / 8 * r2, " ").concat(a2, " L ").concat(5 / 8 * r2, " ").concat(a2, " L ").concat(7 / 8 * r2, " ").concat(7 / 8 * a2, " L ").concat(r2, " ").concat(5 / 8 * a2, " L ").concat(r2, " ").concat(3 / 8 * a2, " L ").concat(7 / 8 * r2, " ").concat(a2 / 8, " L ").concat(5 / 8 * r2, " 0 Z");
        break;
      case "star4":
        var In2 = r2 / 2, Cn2 = a2 / 2, An2 = r2 / 2, Pn2 = a2 / 2, En2 = 1.503779527559055, Rn2 = 3.9370078740157477, Tn2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if (Tn2) "adj" === Tn2.attrs.name && (En2 = parseInt(Tn2.attrs.fmla.substring(4)) * xu);
        var On2 = En2 < 0 ? 0 : En2 > Rn2 ? Rn2 : En2, jn2 = Pn2 * On2 / Rn2, zn2 = An2 * On2 / Rn2 * Math.cos(0.7853981634), Bn2 = jn2 * Math.sin(0.7853981634), Dn2 = In2 - zn2, Fn2 = In2 + zn2, Nn2 = Cn2 - Bn2, Un2 = Cn2 + Bn2;
        o2 = "M 0,".concat(Cn2, " L ").concat(Dn2, ",").concat(Nn2, " L ").concat(In2, ",0 L ").concat(Fn2, ",").concat(Nn2, " L ").concat(r2, ",").concat(Cn2, " L ").concat(Fn2, ",").concat(Un2, " L ").concat(In2, ",").concat(a2, " L ").concat(Dn2, ",").concat(Un2, " z");
        break;
      case "star5":
        var Gn2 = r2 / 2, qn2 = a2 / 2, Wn2 = r2 / 2, Hn2 = a2 / 2, Zn2 = 1.503779527559055, Yn2 = 8.279212598425197, Vn2 = 8.70527559055118, Qn2 = 3.9370078740157477, $n2 = 7.874015748031495, Kn2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        Kn2 && Object.keys(Kn2).forEach((function(t3) {
          var e2 = Kn2[t3].attrs.name;
          "adj" === e2 ? Zn2 = parseInt(Kn2[t3].attrs.fmla.substring(4)) * xu : "hf" === e2 ? Yn2 = parseInt(Kn2[t3].attrs.fmla.substring(4)) * xu : "vf" === e2 && (Vn2 = parseInt(Kn2[t3].attrs.fmla.substring(4)) * xu);
        }));
        var Xn2 = Zn2 < 0 ? 0 : Zn2 > Qn2 ? Qn2 : Zn2, Jn2 = Wn2 * Yn2 / $n2, to2 = Hn2 * Vn2 / $n2, eo2 = qn2 * Vn2 / $n2, ro2 = Jn2 * Math.cos(0.31415926536), ao2 = Jn2 * Math.cos(5.3407075111), no2 = Gn2 - ro2, oo2 = Gn2 - ao2, co2 = Gn2 + ao2, io2 = Gn2 + ro2, so2 = eo2 - to2 * Math.sin(0.31415926536), lo2 = eo2 - to2 * Math.sin(5.3407075111), uo2 = Jn2 * Xn2 / Qn2, fo2 = to2 * Xn2 / Qn2, ho2 = uo2 * Math.cos(5.9690260418), po2 = uo2 * Math.cos(0.94247779608), bo2 = Gn2 - ho2, go2 = Gn2 - po2, vo2 = Gn2 + po2, mo2 = Gn2 + ho2, yo2 = eo2 - fo2 * Math.sin(0.94247779608), Lo2 = eo2 - fo2 * Math.sin(5.9690260418), wo2 = eo2 + fo2;
        o2 = "M ".concat(no2, ",").concat(so2, " L ").concat(go2, ",").concat(yo2, " L ").concat(Gn2, ",0 L ").concat(vo2, ",").concat(yo2, " L ").concat(io2, ",").concat(so2, " L ").concat(mo2, ",").concat(Lo2, " L ").concat(co2, ",").concat(lo2, " L ").concat(Gn2, ",").concat(wo2, " L ").concat(oo2, ",").concat(lo2, " L ").concat(bo2, ",").concat(Lo2, " z");
        break;
      case "star6":
        var _o2 = r2 / 2, ko2 = a2 / 2, Mo2 = r2 / 2, xo2 = a2 / 2, So2 = a2 / 4, Io2 = 2.2730708661417323, Co2 = 9.092125984251968, Ao2 = 3.9370078740157477, Po2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        Po2 && Object.keys(Po2).forEach((function(t3) {
          var e2 = Po2[t3].attrs.name;
          "adj" === e2 ? Io2 = parseInt(Po2[t3].attrs.fmla.substring(4)) * xu : "hf" === e2 && (Co2 = parseInt(Po2[t3].attrs.fmla.substring(4)) * xu);
        }));
        var Eo2 = Io2 < 0 ? 0 : Io2 > Ao2 ? Ao2 : Io2, Ro2 = Mo2 * Co2 / 7.874015748031495, To2 = Ro2 * Math.cos(0.5235987756), Oo2 = _o2 - To2, jo2 = _o2 + To2, zo2 = ko2 + So2, Bo2 = Ro2 * Eo2 / Ao2, Do2 = Bo2 / 2, Fo2 = _o2 - Bo2, No2 = _o2 - Do2, Uo2 = _o2 + Do2, Go2 = _o2 + Bo2, qo2 = xo2 * Eo2 / Ao2 * Math.sin(1.0471975512), Wo2 = ko2 - qo2, Ho2 = ko2 + qo2;
        o2 = "M ".concat(Oo2, ",").concat(So2, " L ").concat(No2, ",").concat(Wo2, " L ").concat(_o2, ",0 L ").concat(Uo2, ",").concat(Wo2, " L ").concat(jo2, ",").concat(So2, " L ").concat(Go2, ",").concat(ko2, " L ").concat(jo2, ",").concat(zo2, " L ").concat(Uo2, ",").concat(Ho2, " L ").concat(_o2, ",").concat(a2, " L ").concat(No2, ",").concat(Ho2, " L ").concat(Oo2, ",").concat(zo2, " L ").concat(Fo2, ",").concat(ko2, " z");
        break;
      case "star7":
        var Zo2 = r2 / 2, Yo2 = a2 / 2, Vo2 = r2 / 2, Qo2 = a2 / 2, $o2 = 2.7244881889763777, Ko2 = 8.076535433070866, Xo2 = 8.284251968503936, Jo2 = 3.9370078740157477, tc2 = 7.874015748031495, ec2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        ec2 && Object.keys(ec2).forEach((function(t3) {
          var e2 = ec2[t3].attrs.name;
          "adj" === e2 ? $o2 = parseInt(ec2[t3].attrs.fmla.substring(4)) * xu : "hf" === e2 ? Ko2 = parseInt(ec2[t3].attrs.fmla.substring(4)) * xu : "vf" === e2 && (Xo2 = parseInt(ec2[t3].attrs.fmla.substring(4)) * xu);
        }));
        var rc2 = $o2 < 0 ? 0 : $o2 > Jo2 ? Jo2 : $o2, ac2 = Vo2 * Ko2 / tc2, nc2 = Qo2 * Xo2 / tc2, oc2 = Yo2 * Xo2 / tc2, cc2 = 97493 * ac2 / 1e5, ic2 = 78183 * ac2 / 1e5, sc2 = 43388 * ac2 / 1e5, lc2 = Zo2 - ic2, uc2 = Zo2 - sc2, fc2 = Zo2 + sc2, hc2 = Zo2 + ic2, dc2 = Zo2 + cc2, pc2 = oc2 - 62349 * nc2 / 1e5, bc2 = oc2 + 22252 * nc2 / 1e5, gc2 = oc2 + 90097 * nc2 / 1e5, vc2 = ac2 * rc2 / Jo2, mc2 = nc2 * rc2 / Jo2, yc2 = 97493 * vc2 / 1e5, Lc2 = 78183 * vc2 / 1e5, wc2 = 43388 * vc2 / 1e5, _c2 = Zo2 - yc2, kc2 = Zo2 - Lc2, Mc2 = Zo2 - wc2, xc2 = Zo2 + wc2, Sc2 = Zo2 + Lc2, Ic2 = Zo2 + yc2, Cc2 = oc2 - 90097 * mc2 / 1e5, Ac2 = oc2 - 22252 * mc2 / 1e5, Pc2 = oc2 + 62349 * mc2 / 1e5, Ec2 = oc2 + mc2;
        o2 = "M ".concat(Zo2 - cc2, ",").concat(bc2, " L ").concat(_c2, ",").concat(Ac2, " L ").concat(lc2, ",").concat(pc2, " L ").concat(Mc2, ",").concat(Cc2, " L ").concat(Zo2, ",0 L ").concat(xc2, ",").concat(Cc2, " L ").concat(hc2, ",").concat(pc2, " L ").concat(Ic2, ",").concat(Ac2, " L ").concat(dc2, ",").concat(bc2, " L ").concat(Sc2, ",").concat(Pc2, " L ").concat(fc2, ",").concat(gc2, " L ").concat(Zo2, ",").concat(Ec2, " L ").concat(uc2, ",").concat(gc2, " L ").concat(kc2, ",").concat(Pc2, " z");
        break;
      case "star8":
        var Rc2 = r2 / 2, Tc2 = a2 / 2, Oc2 = r2 / 2, jc2 = a2 / 2, zc2 = 2.9527559055118107, Bc2 = 3.9370078740157477, Dc2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if (Dc2) "adj" === Dc2.attrs.name && (zc2 = parseInt(Dc2.attrs.fmla.substring(4)) * xu);
        var Fc2 = zc2 < 0 ? 0 : zc2 > Bc2 ? Bc2 : zc2, Nc2 = Oc2 * Math.cos(0.7853981634), Uc2 = Rc2 - Nc2, Gc2 = Rc2 + Nc2, qc2 = jc2 * Math.sin(0.7853981634), Wc2 = Tc2 - qc2, Hc2 = Tc2 + qc2, Zc2 = Oc2 * Fc2 / Bc2, Yc2 = jc2 * Fc2 / Bc2, Vc2 = 92388 * Zc2 / 1e5, Qc2 = 38268 * Zc2 / 1e5, $c2 = 92388 * Yc2 / 1e5, Kc2 = 38268 * Yc2 / 1e5, Xc2 = Rc2 - Vc2, Jc2 = Rc2 - Qc2, ti2 = Rc2 + Qc2, ei2 = Rc2 + Vc2, ri2 = Tc2 - $c2, ai2 = Tc2 - Kc2, ni2 = Tc2 + Kc2, oi2 = Tc2 + $c2;
        o2 = "M 0,".concat(Tc2, " L ").concat(Xc2, ",").concat(ai2, " L ").concat(Uc2, ",").concat(Wc2, " L ").concat(Jc2, ",").concat(ri2, " L ").concat(Rc2, ",0 L ").concat(ti2, ",").concat(ri2, " L ").concat(Gc2, ",").concat(Wc2, " L ").concat(ei2, ",").concat(ai2, " L ").concat(r2, ",").concat(Tc2, " L ").concat(ei2, ",").concat(ni2, " L ").concat(Gc2, ",").concat(Hc2, " L ").concat(ti2, ",").concat(oi2, " L ").concat(Rc2, ",").concat(a2, " L ").concat(Jc2, ",").concat(oi2, " L ").concat(Uc2, ",").concat(Hc2, " L ").concat(Xc2, ",").concat(ni2, " z");
        break;
      case "star10":
        var ci2 = r2 / 2, ii2 = a2 / 2, si2 = r2 / 2, li2 = a2 / 2, ui2 = 3.349055118110236, fi2 = 8.279212598425197, hi2 = 3.9370078740157477, di2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        di2 && Object.keys(di2).forEach((function(t3) {
          var e2 = di2[t3].attrs.name;
          "adj" === e2 ? ui2 = parseInt(di2[t3].attrs.fmla.substring(4)) * xu : "hf" === e2 && (fi2 = parseInt(di2[t3].attrs.fmla.substring(4)) * xu);
        }));
        var pi2 = ui2 < 0 ? 0 : ui2 > hi2 ? hi2 : ui2, bi2 = si2 * fi2 / 7.874015748031495, gi2 = 95106 * bi2 / 1e5, vi2 = 58779 * bi2 / 1e5, mi2 = ci2 - gi2, yi2 = ci2 - vi2, Li2 = ci2 + vi2, wi2 = ci2 + gi2, _i2 = 80902 * li2 / 1e5, ki2 = 30902 * li2 / 1e5, Mi2 = ii2 - _i2, xi2 = ii2 - ki2, Si2 = ii2 + ki2, Ii2 = ii2 + _i2, Ci2 = bi2 * pi2 / hi2, Ai2 = li2 * pi2 / hi2, Pi2 = 80902 * Ci2 / 1e5, Ei2 = 30902 * Ci2 / 1e5, Ri2 = 95106 * Ai2 / 1e5, Ti2 = 58779 * Ai2 / 1e5, Oi2 = ci2 - Ci2, ji2 = ci2 - Pi2, zi2 = ci2 - Ei2, Bi2 = ci2 + Ei2, Di2 = ci2 + Pi2, Fi2 = ci2 + Ci2, Ni2 = ii2 - Ri2, Ui2 = ii2 - Ti2, Gi2 = ii2 + Ti2, qi2 = ii2 + Ri2;
        o2 = "M ".concat(mi2, ",").concat(xi2, " L ").concat(ji2, ",").concat(Ui2, " L ").concat(yi2, ",").concat(Mi2, " L ").concat(zi2, ",").concat(Ni2, " L ").concat(ci2, ",0 L ").concat(Bi2, ",").concat(Ni2, " L ").concat(Li2, ",").concat(Mi2, " L ").concat(Di2, ",").concat(Ui2, " L ").concat(wi2, ",").concat(xi2, " L ").concat(Fi2, ",").concat(ii2, " L ").concat(wi2, ",").concat(Si2, " L ").concat(Di2, ",").concat(Gi2, " L ").concat(Li2, ",").concat(Ii2, " L ").concat(Bi2, ",").concat(qi2, " L ").concat(ci2, ",").concat(a2, " L ").concat(zi2, ",").concat(qi2, " L ").concat(yi2, ",").concat(Ii2, " L ").concat(ji2, ",").concat(Gi2, " L ").concat(mi2, ",").concat(Si2, " L ").concat(Oi2, ",").concat(ii2, " z");
        break;
      case "star12":
        var Wi2 = r2 / 2, Hi2 = a2 / 2, Zi2 = r2 / 2, Yi2 = a2 / 2, Vi2 = a2 / 4, Qi2 = r2 / 4, $i2 = 2.9527559055118107, Ki2 = 3.9370078740157477, Xi2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if (Xi2) "adj" === Xi2.attrs.name && ($i2 = parseInt(Xi2.attrs.fmla.substring(4)) * xu);
        var Ji2 = $i2 < 0 ? 0 : $i2 > Ki2 ? Ki2 : $i2, ts2 = Zi2 * Math.cos(0.5235987756), es2 = Yi2 * Math.sin(1.0471975512), rs2 = Wi2 - ts2, as2 = 3 * r2 / 4, ns2 = Wi2 + ts2, os2 = Hi2 - es2, cs2 = 3 * a2 / 4, is2 = Hi2 + es2, ss2 = Zi2 * Ji2 / Ki2, ls2 = Yi2 * Ji2 / Ki2, us2 = ss2 * Math.cos(0.2617993878), fs2 = ss2 * Math.cos(0.7853981634), hs2 = ss2 * Math.cos(1.308996939), ds2 = ls2 * Math.sin(1.308996939), ps2 = ls2 * Math.sin(0.7853981634), bs2 = ls2 * Math.sin(0.2617993878), gs2 = Wi2 - us2, vs2 = Wi2 - fs2, ms2 = Wi2 - hs2, ys2 = Wi2 + hs2, Ls2 = Wi2 + fs2, ws2 = Wi2 + us2, _s2 = Hi2 - ds2, ks2 = Hi2 - ps2, Ms2 = Hi2 - bs2, xs2 = Hi2 + bs2, Ss2 = Hi2 + ps2, Is2 = Hi2 + ds2;
        o2 = "M 0,".concat(Hi2, " L ").concat(gs2, ",").concat(Ms2, " L ").concat(rs2, ",").concat(Vi2, " L ").concat(vs2, ",").concat(ks2, " L ").concat(Qi2, ",").concat(os2, " L ").concat(ms2, ",").concat(_s2, " L ").concat(Wi2, ",0 L ").concat(ys2, ",").concat(_s2, " L ").concat(as2, ",").concat(os2, " L ").concat(Ls2, ",").concat(ks2, " L ").concat(ns2, ",").concat(Vi2, " L ").concat(ws2, ",").concat(Ms2, " L ").concat(r2, ",").concat(Hi2, " L ").concat(ws2, ",").concat(xs2, " L ").concat(ns2, ",").concat(cs2, " L ").concat(Ls2, ",").concat(Ss2, " L ").concat(as2, ",").concat(is2, " L ").concat(ys2, ",").concat(Is2, " L ").concat(Wi2, ",").concat(a2, " L ").concat(ms2, ",").concat(Is2, " L ").concat(Qi2, ",").concat(is2, " L ").concat(vs2, ",").concat(Ss2, " L ").concat(rs2, ",").concat(cs2, " L ").concat(gs2, ",").concat(xs2, " z");
        break;
      case "star16":
        var Cs2 = r2 / 2, As2 = a2 / 2, Ps2 = r2 / 2, Es2 = a2 / 2, Rs2 = 2.9527559055118107, Ts2 = 3.9370078740157477, Os2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if (Os2) "adj" === Os2.attrs.name && (Rs2 = parseInt(Os2.attrs.fmla.substring(4)) * xu);
        var js2 = Rs2 < 0 ? 0 : Rs2 > Ts2 ? Ts2 : Rs2, zs2 = 92388 * Ps2 / 1e5, Bs2 = 70711 * Ps2 / 1e5, Ds2 = 38268 * Ps2 / 1e5, Fs2 = 92388 * Es2 / 1e5, Ns2 = 70711 * Es2 / 1e5, Us2 = 38268 * Es2 / 1e5, Gs2 = Cs2 - zs2, qs2 = Cs2 - Bs2, Ws2 = Cs2 - Ds2, Hs2 = Cs2 + Ds2, Zs2 = Cs2 + Bs2, Ys2 = Cs2 + zs2, Vs2 = As2 - Fs2, Qs2 = As2 - Ns2, $s2 = As2 - Us2, Ks2 = As2 + Us2, Xs2 = As2 + Ns2, Js2 = As2 + Fs2, tl2 = Ps2 * js2 / Ts2, el2 = Es2 * js2 / Ts2, rl2 = 98079 * tl2 / 1e5, al2 = 83147 * tl2 / 1e5, nl2 = 55557 * tl2 / 1e5, ol2 = 19509 * tl2 / 1e5, cl2 = 98079 * el2 / 1e5, il2 = 83147 * el2 / 1e5, sl2 = 55557 * el2 / 1e5, ll2 = 19509 * el2 / 1e5, ul2 = Cs2 - rl2, fl2 = Cs2 - al2, hl2 = Cs2 - nl2, dl2 = Cs2 - ol2, pl2 = Cs2 + ol2, bl2 = Cs2 + nl2, gl2 = Cs2 + al2, vl2 = Cs2 + rl2, yl2 = As2 - cl2, Ll2 = As2 - il2, wl2 = As2 - sl2, _l2 = As2 - ll2, kl2 = As2 + ll2, Ml2 = As2 + sl2, xl2 = As2 + il2, Sl2 = As2 + cl2;
        o2 = "M 0,".concat(As2, " L ").concat(ul2, ",").concat(_l2, " L ").concat(Gs2, ",").concat($s2, " L ").concat(fl2, ",").concat(wl2, " L ").concat(qs2, ",").concat(Qs2, " L ").concat(hl2, ",").concat(Ll2, " L ").concat(Ws2, ",").concat(Vs2, " L ").concat(dl2, ",").concat(yl2, " L ").concat(Cs2, ",0 L ").concat(pl2, ",").concat(yl2, " L ").concat(Hs2, ",").concat(Vs2, " L ").concat(bl2, ",").concat(Ll2, " L ").concat(Zs2, ",").concat(Qs2, " L ").concat(gl2, ",").concat(wl2, " L ").concat(Ys2, ",").concat($s2, " L ").concat(vl2, ",").concat(_l2, " L ").concat(r2, ",").concat(As2, " L ").concat(vl2, ",").concat(kl2, " L ").concat(Ys2, ",").concat(Ks2, " L ").concat(gl2, ",").concat(Ml2, " L ").concat(Zs2, ",").concat(Xs2, " L ").concat(bl2, ",").concat(xl2, " L ").concat(Hs2, ",").concat(Js2, " L ").concat(pl2, ",").concat(Sl2, " L ").concat(Cs2, ",").concat(a2, " L ").concat(dl2, ",").concat(Sl2, " L ").concat(Ws2, ",").concat(Js2, " L ").concat(hl2, ",").concat(xl2, " L ").concat(qs2, ",").concat(Xs2, " L ").concat(fl2, ",").concat(Ml2, " L ").concat(Gs2, ",").concat(Ks2, " L ").concat(ul2, ",").concat(kl2, " z");
        break;
      case "star24":
        var Il2 = r2 / 2, Cl2 = a2 / 2, Al2 = r2 / 2, Pl2 = a2 / 2, El2 = a2 / 4, Rl2 = r2 / 4, Tl2 = 2.9527559055118107, Ol2 = 3.9370078740157477, jl2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if (jl2) "adj" === jl2.attrs.name && (Tl2 = parseInt(jl2.attrs.fmla.substring(4)) * xu);
        var zl2 = Tl2 < 0 ? 0 : Tl2 > Ol2 ? Ol2 : Tl2, Bl2 = Al2 * Math.cos(0.2617993878), Dl2 = Al2 * Math.cos(0.5235987756), Fl2 = Al2 * Math.cos(0.7853981634), Nl2 = Rl2, Ul2 = Al2 * Math.cos(1.308996939), Gl2 = Pl2 * Math.sin(1.308996939), ql2 = Pl2 * Math.sin(1.0471975512), Wl2 = Pl2 * Math.sin(0.7853981634), Hl2 = El2, Zl2 = Pl2 * Math.sin(0.2617993878), Yl2 = Il2 - Bl2, Vl2 = Il2 - Dl2, Ql2 = Il2 - Fl2, $l2 = Il2 - Nl2, Kl2 = Il2 - Ul2, Xl2 = Il2 + Ul2, Jl2 = Il2 + Nl2, tu2 = Il2 + Fl2, eu2 = Il2 + Dl2, ru2 = Il2 + Bl2, au2 = Cl2 - Gl2, nu2 = Cl2 - ql2, ou2 = Cl2 - Wl2, cu2 = Cl2 - Hl2, iu2 = Cl2 - Zl2, su2 = Cl2 + Zl2, lu2 = Cl2 + Hl2, uu2 = Cl2 + Wl2, fu2 = Cl2 + ql2, hu2 = Cl2 + Gl2, du2 = Al2 * zl2 / Ol2, pu2 = Pl2 * zl2 / Ol2, bu2 = 99144 * du2 / 1e5, gu2 = 92388 * du2 / 1e5, vu2 = 79335 * du2 / 1e5, mu2 = 60876 * du2 / 1e5, yu2 = 38268 * du2 / 1e5, Lu2 = 13053 * du2 / 1e5, wu2 = 99144 * pu2 / 1e5, _u2 = 92388 * pu2 / 1e5, ku2 = 79335 * pu2 / 1e5, Mu2 = 60876 * pu2 / 1e5, Su2 = 38268 * pu2 / 1e5, Iu2 = 13053 * pu2 / 1e5, Cu2 = Il2 - bu2, Au2 = Il2 - gu2, Pu2 = Il2 - vu2, Eu2 = Il2 - mu2, Ru2 = Il2 - yu2, Tu2 = Il2 - Lu2, Ou2 = Il2 + Lu2, ju2 = Il2 + yu2, zu2 = Il2 + mu2, Bu2 = Il2 + vu2, Du2 = Il2 + gu2, Fu2 = Il2 + bu2, Nu2 = Cl2 - wu2, Uu2 = Cl2 - _u2, Gu2 = Cl2 - ku2, qu2 = Cl2 - Mu2, Wu2 = Cl2 - Su2, Hu2 = Cl2 - Iu2, Zu2 = Cl2 + Iu2, Yu2 = Cl2 + Su2, Vu2 = Cl2 + Mu2, Qu2 = Cl2 + ku2, $u2 = Cl2 + _u2, Ku2 = Cl2 + wu2;
        o2 = "M 0,".concat(Cl2, " L ").concat(Cu2, ",").concat(Hu2, " L ").concat(Yl2, ",").concat(iu2, " L ").concat(Au2, ",").concat(Wu2, " L ").concat(Vl2, ",").concat(cu2, " L ").concat(Pu2, ",").concat(qu2, " L ").concat(Ql2, ",").concat(ou2, " L ").concat(Eu2, ",").concat(Gu2, " L ").concat($l2, ",").concat(nu2, " L ").concat(Ru2, ",").concat(Uu2, " L ").concat(Kl2, ",").concat(au2, " L ").concat(Tu2, ",").concat(Nu2, " L ").concat(Il2, ",0 L ").concat(Ou2, ",").concat(Nu2, " L ").concat(Xl2, ",").concat(au2, " L ").concat(ju2, ",").concat(Uu2, " L ").concat(Jl2, ",").concat(nu2, " L ").concat(zu2, ",").concat(Gu2, " L ").concat(tu2, ",").concat(ou2, " L ").concat(Bu2, ",").concat(qu2, " L ").concat(eu2, ",").concat(cu2, " L ").concat(Du2, ",").concat(Wu2, " L ").concat(ru2, ",").concat(iu2, " L ").concat(Fu2, ",").concat(Hu2, " L ").concat(r2, ",").concat(Cl2, " L ").concat(Fu2, ",").concat(Zu2, " L ").concat(ru2, ",").concat(su2, " L ").concat(Du2, ",").concat(Yu2, " L ").concat(eu2, ",").concat(lu2, " L ").concat(Bu2, ",").concat(Vu2, " L ").concat(tu2, ",").concat(uu2, " L ").concat(zu2, ",").concat(Qu2, " L ").concat(Jl2, ",").concat(fu2, " L ").concat(ju2, ",").concat($u2, " L ").concat(Xl2, ",").concat(hu2, " L ").concat(Ou2, ",").concat(Ku2, " L ").concat(Il2, ",").concat(a2, " L ").concat(Tu2, ",").concat(Ku2, " L ").concat(Kl2, ",").concat(hu2, " L ").concat(Ru2, ",").concat($u2, " L ").concat($l2, ",").concat(fu2, " L ").concat(Eu2, ",").concat(Qu2, " L ").concat(Ql2, ",").concat(uu2, " L ").concat(Pu2, ",").concat(Vu2, " L ").concat(Vl2, ",").concat(lu2, " L ").concat(Au2, ",").concat(Yu2, " L ").concat(Yl2, ",").concat(su2, " L ").concat(Cu2, ",").concat(Zu2, " z");
        break;
      case "star32":
        var Xu2 = r2 / 2, Ju2 = a2 / 2, tf2 = r2 / 2, ef2 = a2 / 2, rf2 = 2.9527559055118107, af2 = 3.9370078740157477, nf2 = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if (nf2) "adj" === nf2.attrs.name && (rf2 = parseInt(nf2.attrs.fmla.substring(4)) * xu);
        var of2 = rf2 < 0 ? 0 : rf2 > af2 ? af2 : rf2, cf2 = 98079 * tf2 / 1e5, sf2 = 92388 * tf2 / 1e5, lf2 = 83147 * tf2 / 1e5, uf2 = tf2 * Math.cos(0.7853981634), ff2 = 55557 * tf2 / 1e5, hf2 = 38268 * tf2 / 1e5, df2 = 19509 * tf2 / 1e5, pf2 = 98079 * ef2 / 1e5, bf2 = 92388 * ef2 / 1e5, gf2 = 83147 * ef2 / 1e5, vf2 = ef2 * Math.sin(0.7853981634), mf2 = 55557 * ef2 / 1e5, yf2 = 38268 * ef2 / 1e5, Lf2 = 19509 * ef2 / 1e5, wf2 = Xu2 - cf2, _f2 = Xu2 - sf2, kf2 = Xu2 - lf2, Mf2 = Xu2 - uf2, xf2 = Xu2 - ff2, Sf2 = Xu2 - hf2, If2 = Xu2 - df2, Cf2 = Xu2 + df2, Af2 = Xu2 + hf2, Pf2 = Xu2 + ff2, Ef2 = Xu2 + uf2, Rf2 = Xu2 + lf2, Of2 = Xu2 + sf2, zf2 = Xu2 + cf2, Bf2 = Ju2 - pf2, Df2 = Ju2 - bf2, Ff2 = Ju2 - gf2, Nf2 = Ju2 - vf2, Uf2 = Ju2 - mf2, Gf2 = Ju2 - yf2, qf2 = Ju2 - Lf2, Wf2 = Ju2 + Lf2, Hf2 = Ju2 + yf2, Zf2 = Ju2 + mf2, Yf2 = Ju2 + vf2, Vf2 = Ju2 + gf2, Qf2 = Ju2 + bf2, $f2 = Ju2 + pf2, Kf2 = tf2 * of2 / af2, Xf2 = ef2 * of2 / af2, Jf2 = 99518 * Kf2 / 1e5, th2 = 95694 * Kf2 / 1e5, eh2 = 88192 * Kf2 / 1e5, rh2 = 77301 * Kf2 / 1e5, ah2 = 63439 * Kf2 / 1e5, nh2 = 47140 * Kf2 / 1e5, oh2 = 29028 * Kf2 / 1e5, ch2 = 9802 * Kf2 / 1e5, ih2 = 99518 * Xf2 / 1e5, sh2 = 95694 * Xf2 / 1e5, lh2 = 88192 * Xf2 / 1e5, uh2 = 77301 * Xf2 / 1e5, fh2 = 63439 * Xf2 / 1e5, hh2 = 47140 * Xf2 / 1e5, dh2 = 29028 * Xf2 / 1e5, ph2 = 9802 * Xf2 / 1e5, bh2 = Xu2 - Jf2, gh2 = Xu2 - th2, vh2 = Xu2 - eh2, mh2 = Xu2 - rh2, yh2 = Xu2 - ah2, Lh2 = Xu2 - nh2, wh2 = Xu2 - oh2, _h2 = Xu2 - ch2, kh2 = Xu2 + ch2, Mh2 = Xu2 + oh2, xh2 = Xu2 + nh2, Sh2 = Xu2 + ah2, Ih2 = Xu2 + rh2, Ch2 = Xu2 + eh2, Ah2 = Xu2 + th2, Ph2 = Xu2 + Jf2, Eh2 = Ju2 - ih2, Rh2 = Ju2 - sh2, Th2 = Ju2 - lh2, Oh2 = Ju2 - uh2, jh2 = Ju2 - fh2, zh2 = Ju2 - hh2, Bh2 = Ju2 - dh2, Dh2 = Ju2 - ph2, Fh2 = Ju2 + ph2, Nh = Ju2 + dh2, Uh = Ju2 + hh2, Gh = Ju2 + fh2, qh = Ju2 + uh2, Wh = Ju2 + lh2, Hh = Ju2 + sh2, Zh = Ju2 + ih2;
        o2 = "M 0,".concat(Ju2, " L ").concat(bh2, ",").concat(Dh2, " L ").concat(wf2, ",").concat(qf2, " L ").concat(gh2, ",").concat(Bh2, " L ").concat(_f2, ",").concat(Gf2, " L ").concat(vh2, ",").concat(zh2, " L ").concat(kf2, ",").concat(Uf2, " L ").concat(mh2, ",").concat(jh2, " L ").concat(Mf2, ",").concat(Nf2, " L ").concat(yh2, ",").concat(Oh2, " L ").concat(xf2, ",").concat(Ff2, " L ").concat(Lh2, ",").concat(Th2, " L ").concat(Sf2, ",").concat(Df2, " L ").concat(wh2, ",").concat(Rh2, " L ").concat(If2, ",").concat(Bf2, " L ").concat(_h2, ",").concat(Eh2, " L ").concat(Xu2, ",0 L ").concat(kh2, ",").concat(Eh2, " L ").concat(Cf2, ",").concat(Bf2, " L ").concat(Mh2, ",").concat(Rh2, " L ").concat(Af2, ",").concat(Df2, " L ").concat(xh2, ",").concat(Th2, " L ").concat(Pf2, ",").concat(Ff2, " L ").concat(Sh2, ",").concat(Oh2, " L ").concat(Ef2, ",").concat(Nf2, " L ").concat(Ih2, ",").concat(jh2, " L ").concat(Rf2, ",").concat(Uf2, " L ").concat(Ch2, ",").concat(zh2, " L ").concat(Of2, ",").concat(Gf2, " L ").concat(Ah2, ",").concat(Bh2, " L ").concat(zf2, ",").concat(qf2, " L ").concat(Ph2, ",").concat(Dh2, " L ").concat(r2, ",").concat(Ju2, " L ").concat(Ph2, ",").concat(Fh2, " L ").concat(zf2, ",").concat(Wf2, " L ").concat(Ah2, ",").concat(Nh, " L ").concat(Of2, ",").concat(Hf2, " L ").concat(Ch2, ",").concat(Uh, " L ").concat(Rf2, ",").concat(Zf2, " L ").concat(Ih2, ",").concat(Gh, " L ").concat(Ef2, ",").concat(Yf2, " L ").concat(Sh2, ",").concat(qh, " L ").concat(Pf2, ",").concat(Vf2, " L ").concat(xh2, ",").concat(Wh, " L ").concat(Af2, ",").concat(Qf2, " L ").concat(Mh2, ",").concat(Hh, " L ").concat(Cf2, ",").concat($f2, " L ").concat(kh2, ",").concat(Zh, " L ").concat(Xu2, ",").concat(a2, " L ").concat(_h2, ",").concat(Zh, " L ").concat(If2, ",").concat($f2, " L ").concat(wh2, ",").concat(Hh, " L ").concat(Sf2, ",").concat(Qf2, " L ").concat(Lh2, ",").concat(Wh, " L ").concat(xf2, ",").concat(Vf2, " L ").concat(yh2, ",").concat(qh, " L ").concat(Mf2, ",").concat(Yf2, " L ").concat(mh2, ",").concat(Gh, " L ").concat(kf2, ",").concat(Zf2, " L ").concat(vh2, ",").concat(Uh, " L ").concat(_f2, ",").concat(Hf2, " L ").concat(gh2, ",").concat(Nh, " L ").concat(wf2, ",").concat(Wf2, " L ").concat(bh2, ",").concat(Fh2, " z");
        break;
      case "pie":
      case "pieWedge":
      case "arc":
        var Yh, Vh, Qh, $h, Kh = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if ("pie" === t2 ? (Yh = 0, Vh = 270, Qh = a2, $h = true) : "pieWedge" === t2 ? (Yh = 180, Vh = 270, Qh = 2 * a2, $h = true) : "arc" === t2 && (Yh = 270, Vh = 0, Qh = a2, $h = false), Kh) {
          var Xh, Jh = Tf(Array.isArray(Kh) ? Kh : [Kh]);
          try {
            for (Jh.s(); !(Xh = Jh.n()).done; ) {
              var td = Xh.value, ed = ml(td, ["attrs", "name"]), rd = ml(td, ["attrs", "fmla"]);
              ed && rd && ("adj1" === ed ? Yh = parseInt(rd.substring(4)) / 6e4 : "adj2" === ed && (Vh = parseInt(rd.substring(4)) / 6e4));
            }
          } catch (t3) {
            Jh.e(t3);
          } finally {
            Jh.f();
          }
        }
        o2 = (function(t3, e2, r3, a3, n3) {
          var o3 = parseFloat(a3), c3 = parseFloat(r3), i3 = parseInt(t3) / 2, s3 = e2 / 2, l3 = s3, u3 = i3, f3 = o3 - c3;
          f3 < 0 && (f3 = 360 + f3), f3 = Math.min(Math.max(f3, 0), 360);
          var h3, d3, p3 = c3 * Math.PI / 180, b3 = (c3 + f3) * Math.PI / 180, g3 = l3 + Math.cos(p3) * s3, v3 = u3 + Math.sin(p3) * i3, m3 = l3 + Math.cos(b3) * s3, y3 = u3 + Math.sin(b3) * i3;
          return n3 ? (h3 = f3 <= 180 ? 0 : 1, d3 = "M".concat(l3, ",").concat(u3, " L").concat(g3, ",").concat(v3, " A").concat(s3, ",").concat(i3, " 0 ").concat(h3, ",1 ").concat(m3, ",").concat(y3, " z")) : (h3 = f3 <= 180 ? 0 : 1, d3 = "M".concat(g3, ",").concat(v3, " A").concat(s3, ",").concat(i3, " 0 ").concat(h3, ",1 ").concat(m3, ",").concat(y3)), d3;
        })(Qh, r2, Yh, Vh, $h);
        break;
      case "chord":
        var ad = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), nd = 45, od = 270;
        if (ad) {
          var cd, id = Tf(ad);
          try {
            for (id.s(); !(cd = id.n()).done; ) {
              var sd = cd.value, ld = ml(sd, ["attrs", "name"]);
              if ("adj1" === ld) {
                var ud = ml(sd, ["attrs", "fmla"]);
                nd = parseInt(ud.substring(4)) / 6e4;
              } else if ("adj2" === ld) {
                var fd = ml(sd, ["attrs", "fmla"]);
                od = parseInt(fd.substring(4)) / 6e4;
              }
            }
          } catch (t3) {
            id.e(t3);
          } finally {
            id.f();
          }
        }
        var hd = a2 / 2, dd = r2 / 2;
        o2 = jf(dd, hd, dd, hd, nd, od, true);
        break;
      case "frame":
        var pd = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), bd = 0.9842519685039369, gd = 3.9370078740157477;
        pd && (bd = parseInt(pd.substring(4)) * xu);
        var vd = bd < 0 ? 0 : bd > gd ? gd : bd, md = Math.min(r2, a2) * vd / 7.874015748031495, yd = r2 - md, Ld = a2 - md;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(md, ",").concat(md, " L ").concat(md, ",").concat(Ld, " L ").concat(yd, ",").concat(Ld, " L ").concat(yd, ",").concat(md, " z");
        break;
      case "donut":
        var wd = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), _d = 1.9685039370078738, kd = 3.9370078740157477;
        wd && (_d = parseInt(wd.substring(4)) * xu);
        var Md = _d < 0 ? 0 : _d > kd ? kd : _d, xd = Math.min(r2, a2) * Md / 7.874015748031495, Sd = r2 / 2 - xd, Id = a2 / 2 - xd, Cd = "M ".concat(r2 / 2 - r2 / 2, ",").concat(a2 / 2, " A ").concat(r2 / 2, ",").concat(a2 / 2, " 0 1,0 ").concat(r2 / 2 + r2 / 2, ",").concat(a2 / 2, " A ").concat(r2 / 2, ",").concat(a2 / 2, " 0 1,0 ").concat(r2 / 2 - r2 / 2, ",").concat(a2 / 2, " Z"), Ad = "M ".concat(r2 / 2 + Sd, ",").concat(a2 / 2, " A ").concat(Sd, ",").concat(Id, " 0 1,0 ").concat(r2 / 2 - Sd, ",").concat(a2 / 2, " A ").concat(Sd, ",").concat(Id, " 0 1,0 ").concat(r2 / 2 + Sd, ",").concat(a2 / 2, " Z");
        o2 = "".concat(Cd, " ").concat(Ad);
        break;
      case "noSmoking":
        var Pd = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Ed = 1.4763779527559053, Rd = 3.9370078740157477;
        Pd && (Ed = parseInt(Pd.substring(4)) * xu);
        var Td = Ed < 0 ? 0 : Ed > Rd ? Rd : Ed, Od = Math.min(r2, a2) * Td / 7.874015748031495, jd = r2 / 2 - Od, zd = a2 / 2 - Od, Bd = Math.atan(a2 / r2), Dd = zd * Math.cos(Bd), Fd = jd * Math.sin(Bd), Nd = jd * zd / Math.sqrt(Dd * Dd + Fd * Fd), Ud = Od / 2, Gd = Math.atan(Ud / Nd), qd = -Math.PI + 2 * Gd, Wd = Bd - Gd, Hd = Wd - Math.PI, Zd = zd * Math.cos(Wd), Yd = jd * Math.sin(Wd), Vd = jd * zd / Math.sqrt(Zd * Zd + Yd * Yd), Qd = Vd * Math.cos(Wd), $d = Vd * Math.sin(Wd), Kd = r2 / 2 + Qd, Xd = a2 / 2 + $d, Jd = r2 / 2 - Qd, tp = a2 / 2 - $d, ep = 180 * Wd / Math.PI, rp = 180 * Hd / Math.PI, ap = 180 * qd / Math.PI, np = "M ".concat(r2 / 2 - r2 / 2, ",").concat(a2 / 2, " A ").concat(r2 / 2, ",").concat(a2 / 2, " 0 1,0 ").concat(r2 / 2 + r2 / 2, ",").concat(a2 / 2, " A ").concat(r2 / 2, ",").concat(a2 / 2, " 0 1,0 ").concat(r2 / 2 - r2 / 2, ",").concat(a2 / 2, " Z"), op = "M ".concat(Kd, ",").concat(Xd, " ").concat(jf(r2 / 2, a2 / 2, jd, zd, ep, ep + ap, false).replace("M", "L"), " z"), cp = "M ".concat(Jd, ",").concat(tp, " ").concat(jf(r2 / 2, a2 / 2, jd, zd, rp, rp + ap, false).replace("M", "L"), " z");
        o2 = "".concat(np, " ").concat(op, " ").concat(cp);
        break;
      case "halfFrame":
        var ip = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), sp = 3.5, lp = 3.5, up = 7.874015748031495;
        if (ip) {
          var fp, hp = Tf(ip);
          try {
            for (hp.s(); !(fp = hp.n()).done; ) {
              var dp = fp.value, pp = ml(dp, ["attrs", "name"]);
              "adj1" === pp ? sp = parseInt(ml(dp, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === pp && (lp = parseInt(ml(dp, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            hp.e(t3);
          } finally {
            hp.f();
          }
        }
        var bp = Math.min(r2, a2), gp = up * r2 / bp, vp = bp * (lp < 0 ? 0 : lp > gp ? gp : lp) / up, mp = up * (a2 - a2 * vp / r2) / bp, yp = bp * (sp < 0 ? 0 : sp > mp ? mp : sp) / up, Lp = r2 - yp * r2 / a2, wp = a2 - vp * a2 / r2;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(Lp, ",").concat(yp, " L ").concat(vp, ",").concat(yp, " L ").concat(vp, ",").concat(wp, " L 0,").concat(a2, " z");
        break;
      case "blockArc":
        var _p = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), kp = 180, Mp = 0, xp = 1.9685039370078738, Sp = 3.9370078740157477;
        if (_p) {
          var Ip, Cp = Tf(_p);
          try {
            for (Cp.s(); !(Ip = Cp.n()).done; ) {
              var Ap = Ip.value, Pp = ml(Ap, ["attrs", "name"]);
              "adj1" === Pp ? kp = parseInt(ml(Ap, ["attrs", "fmla"]).substring(4)) / 6e4 : "adj2" === Pp ? Mp = parseInt(ml(Ap, ["attrs", "fmla"]).substring(4)) / 6e4 : "adj3" === Pp && (xp = parseInt(ml(Ap, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            Cp.e(t3);
          } finally {
            Cp.f();
          }
        }
        var Ep, Rp, Tp = 360, Op = kp < 0 ? 0 : kp > Tp ? Tp : kp, jp = Mp < 0 ? 0 : Mp > Tp ? Tp : Mp, zp = xp < 0 ? 0 : xp > Sp ? Sp : xp, Bp = jp - Op, Dp = Bp > 0 ? Bp : Bp + Tp, Fp = Op + Dp, Np = jp + -Dp, Up = Op * Math.PI / 180, Gp = jp * Math.PI / 180, qp = r2 / 2, Wp = a2 / 2, Hp = r2 / 2, Zp = a2 / 2;
        if (Op > 90 && Op < 270) {
          var Yp = qp * Math.sin(Math.PI / 2 - Up), Vp = Wp * Math.cos(Math.PI / 2 - Up);
          Ep = Hp - qp * Math.cos(Math.atan(Vp / Yp)), Rp = Zp - Wp * Math.sin(Math.atan(Vp / Yp));
        } else {
          var Qp = qp * Math.sin(Up), $p = Wp * Math.cos(Up);
          Ep = Hp + qp * Math.cos(Math.atan(Qp / $p)), Rp = Zp + Wp * Math.sin(Math.atan(Qp / $p));
        }
        var Kp, Xp, Jp = Math.min(r2, a2) * zp / 7.874015748031495, tb = qp - Jp, eb = Wp - Jp;
        if (Fp <= 450 && Fp > 270 || Fp >= 630 && Fp < 720) {
          var rb = tb * Math.sin(Gp), ab = eb * Math.cos(Gp);
          Kp = Hp + tb * Math.cos(Math.atan(rb / ab)), Xp = Zp + eb * Math.sin(Math.atan(rb / ab));
        } else {
          var nb = tb * Math.sin(Math.PI / 2 - Gp), ob = eb * Math.cos(Math.PI / 2 - Gp);
          Kp = Hp - tb * Math.cos(Math.atan(ob / nb)), Xp = Zp - eb * Math.sin(Math.atan(ob / nb));
        }
        o2 = "M ".concat(Ep, ",").concat(Rp, " ").concat(jf(qp, Wp, qp, Wp, Op, Fp, false).replace("M", "L"), " L ").concat(Kp, ",").concat(Xp, " ").concat(jf(qp, Wp, tb, eb, jp, Np, false).replace("M", "L"), " z");
        break;
      case "bracePair":
        var cb = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), ib = 0.6561417322834645, sb = 1.9685039370078738;
        cb && (ib = parseInt(cb.substring(4)) * xu);
        var lb = a2 / 2, ub = 180, fb = ib < 0 ? 0 : ib > sb ? sb : ib, hb = Math.min(r2, a2), db = hb * fb / 7.874015748031495, pb = hb * fb / 3.9370078740157477, bb = r2 - pb, gb = r2 - db, vb = lb - db, mb = lb + db, yb = a2 - db;
        o2 = "M ".concat(pb, ",").concat(a2, " ").concat(jf(pb, yb, db, db, 90, ub, false).replace("M", "L"), " L ").concat(db, ",").concat(mb, " ").concat(jf(0, mb, db, db, 0, -90, false).replace("M", "L"), " ").concat(jf(0, vb, db, db, 90, 0, false).replace("M", "L"), " L ").concat(db, ",").concat(db, " ").concat(jf(pb, db, db, db, ub, 270, false).replace("M", "L"), " M ").concat(bb, ",0 ").concat(jf(bb, db, db, db, 270, 360, false).replace("M", "L"), " L ").concat(gb, ",").concat(vb, " ").concat(jf(r2, vb, db, db, ub, 90, false).replace("M", "L"), " ").concat(jf(r2, mb, db, db, 270, ub, false).replace("M", "L"), " L ").concat(gb, ",").concat(yb, " ").concat(jf(bb, yb, db, db, 0, 90, false).replace("M", "L"));
        break;
      case "leftBrace":
        var Lb = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), wb = 0.6561417322834645, _b = 3.9370078740157477, kb = 7.874015748031495;
        if (Lb) {
          var Mb, xb = Tf(Lb);
          try {
            for (xb.s(); !(Mb = xb.n()).done; ) {
              var Sb = Mb.value, Ib = ml(Sb, ["attrs", "name"]);
              "adj1" === Ib ? wb = parseInt(ml(Sb, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === Ib && (_b = parseInt(ml(Sb, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            xb.e(t3);
          } finally {
            xb.f();
          }
        }
        var Cb = _b < 0 ? 0 : _b > kb ? kb : _b, Ab = Math.min(r2, a2), Pb = kb - Cb, Eb = (Pb < Cb ? Pb : Cb) / 2 * a2 / Ab, Rb = Ab * (wb < 0 ? 0 : wb > Eb ? Eb : wb) / kb, Tb = a2 * Cb / kb, Ob = Tb - Rb, jb = Tb + Rb;
        o2 = "M ".concat(r2, ",").concat(a2, " ").concat(jf(r2, a2 - Rb, r2 / 2, Rb, 90, 180, false).replace("M", "L"), " L ").concat(r2 / 2, ",").concat(jb, " ").concat(jf(0, jb, r2 / 2, Rb, 0, -90, false).replace("M", "L"), " ").concat(jf(0, Ob, r2 / 2, Rb, 90, 0, false).replace("M", "L"), " L ").concat(r2 / 2, ",").concat(Rb, " ").concat(jf(r2, Rb, r2 / 2, Rb, 180, 270, false).replace("M", "L"));
        break;
      case "rightBrace":
        var zb = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), Bb = 0.6561417322834645, Db = 3.9370078740157477, Fb = 7.874015748031495;
        if (zb) {
          var Nb, Ub = Tf(zb);
          try {
            for (Ub.s(); !(Nb = Ub.n()).done; ) {
              var Gb = Nb.value, qb = ml(Gb, ["attrs", "name"]);
              "adj1" === qb ? Bb = parseInt(ml(Gb, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === qb && (Db = parseInt(ml(Gb, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            Ub.e(t3);
          } finally {
            Ub.f();
          }
        }
        var Wb = Db < 0 ? 0 : Db > Fb ? Fb : Db, Hb = Math.min(r2, a2), Zb = Fb - Wb, Yb = (Zb < Wb ? Zb : Wb) / 2 * a2 / Hb, Vb = Hb * (Bb < 0 ? 0 : Bb > Yb ? Yb : Bb) / Fb, Qb = a2 * Wb / Fb, $b = Qb - Vb, Kb = a2 - Vb;
        o2 = "M 0,0 ".concat(jf(0, Vb, r2 / 2, Vb, 270, 360, false).replace("M", "L"), " L ").concat(r2 / 2, ",").concat($b, " ").concat(jf(r2, $b, r2 / 2, Vb, 180, 90, false).replace("M", "L"), " ").concat(jf(r2, Qb + Vb, r2 / 2, Vb, 270, 180, false).replace("M", "L"), " L ").concat(r2 / 2, ",").concat(Kb, " ").concat(jf(0, Kb, r2 / 2, Vb, 0, 90, false).replace("M", "L"));
        break;
      case "bracketPair":
        var Xb = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Jb = 1.3123622047244095, tg = 3.9370078740157477;
        Xb && (Jb = parseInt(Xb.substring(4)) * xu);
        var eg = Jb < 0 ? 0 : Jb > tg ? tg : Jb, rg = Math.min(r2, a2) * eg / 7.874015748031495, ag = r2 - rg, ng = a2 - rg;
        o2 = "".concat(jf(rg, rg, rg, rg, 270, 180, false), " ").concat(jf(rg, ng, rg, rg, 180, 90, false).replace("M", "L"), " ").concat(jf(ag, rg, rg, rg, 270, 360, false), " ").concat(jf(ag, ng, rg, rg, 0, 90, false).replace("M", "L"));
        break;
      case "leftBracket":
        var og = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), cg = 0.6561417322834645, ig = 3.9370078740157477 * a2 / Math.min(r2, a2);
        og && (cg = parseInt(og.substring(4)) * xu);
        var sg = cg < 0 ? 0 : cg > ig ? ig : cg, lg = Math.min(r2, a2) * sg / 7.874015748031495;
        lg > r2 && (lg = r2);
        var ug = a2 - lg;
        o2 = "M ".concat(r2, ",").concat(a2, " ").concat(jf(lg, ug, lg, lg, 90, 180, false).replace("M", "L"), " L 0,").concat(lg, " ").concat(jf(lg, lg, lg, lg, 180, 270, false).replace("M", "L"), " L ").concat(r2, ",0");
        break;
      case "rightBracket":
        var fg = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), hg = 0.6561417322834645, dg = 3.9370078740157477 * a2 / Math.min(r2, a2);
        fg && (hg = parseInt(fg.substring(4)) * xu);
        var pg = hg < 0 ? 0 : hg > dg ? dg : hg, bg = Math.min(r2, a2) * pg / 7.874015748031495, gg = a2 - bg, vg = r2 - bg;
        o2 = "M 0,".concat(a2, " ").concat(jf(vg, gg, bg, bg, 90, 0, false).replace("M", "L"), " L ").concat(r2, ",").concat(a2 / 2, " ").concat(jf(vg, bg, bg, bg, 360, 270, false).replace("M", "L"), " L 0,0");
        break;
      case "moon":
        var mg = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), yg = 0.5;
        mg && (yg = parseInt(mg.substring(4)) / 1e5);
        var Lg = a2 / 2, wg = (1 - yg) * r2;
        o2 = "M ".concat(r2, ",").concat(a2, " ").concat(jf(r2, Lg, r2, Lg, 90, 270, false).replace("M", "L"), " ").concat(jf(r2, Lg, wg, Lg, 270, 90, false).replace("M", "L"), " z");
        break;
      case "corner":
        var _g = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), kg = 3.9370078740157477, Mg = 3.9370078740157477, xg = 7.874015748031495;
        if (_g) {
          var Sg, Ig = Tf(_g);
          try {
            for (Ig.s(); !(Sg = Ig.n()).done; ) {
              var Cg = Sg.value, Ag = ml(Cg, ["attrs", "name"]);
              "adj1" === Ag ? kg = parseInt(ml(Cg, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === Ag && (Mg = parseInt(ml(Cg, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            Ig.e(t3);
          } finally {
            Ig.f();
          }
        }
        var Pg = Math.min(r2, a2), Eg = xg * a2 / Pg, Rg = xg * r2 / Pg, Tg = Pg * (Mg < 0 ? 0 : Mg > Rg ? Rg : Mg) / xg, Og = a2 - Pg * (kg < 0 ? 0 : kg > Eg ? Eg : kg) / xg;
        o2 = "M 0,0 L ".concat(Tg, ",0 L ").concat(Tg, ",").concat(Og, " L ").concat(r2, ",").concat(Og, " L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z");
        break;
      case "diagStripe":
        var jg = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), zg = 3.9370078740157477, Bg = 7.874015748031495;
        jg && (zg = parseInt(jg.substring(4)) * xu);
        var Dg = zg < 0 ? 0 : zg > Bg ? Bg : zg, Fg = r2 * Dg / Bg;
        o2 = "M 0,".concat(a2 * Dg / Bg, " L ").concat(Fg, ",0 L ").concat(r2, ",0 L 0,").concat(a2, " z");
        break;
      case "gear6":
      case "gear9":
        o2 = (function(t3, e2) {
          for (var r3 = 1.5 * t3, a3 = r3, n3 = r3, o3 = e2, c3 = r3, i3 = t3, s3 = 2 * Math.PI, l3 = s3 / (2 * o3), u3 = 35 * l3 * 5e-3, f3 = 50 * l3 * 5e-3, h3 = l3, d3 = false, p3 = " M" + (a3 + c3 * Math.cos(f3)) + " " + (n3 + c3 * Math.sin(f3)); h3 <= s3 + l3; h3 += l3) d3 ? (p3 += " L" + (a3 + i3 * Math.cos(h3 - u3)) + "," + (n3 + i3 * Math.sin(h3 - u3)), p3 += " L" + (a3 + c3 * Math.cos(h3 + f3)) + "," + (n3 + c3 * Math.sin(h3 + f3))) : (p3 += " L" + (a3 + c3 * Math.cos(h3 - f3)) + "," + (n3 + c3 * Math.sin(h3 - f3)), p3 += " L" + (a3 + i3 * Math.cos(h3 + u3)) + "," + (n3 + i3 * Math.sin(h3 + u3))), d3 = !d3;
          return p3 + " ";
        })(r2, a2 / 3.5, parseInt(t2.substring(4)));
        break;
      case "bentConnector3":
        var Ng = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Ug = 0.5;
        Ng && (Ug = parseInt(Ng.substring(4)) / 1e5), o2 = "M 0 0 L ".concat(Ug * r2, " 0 L ").concat(Ug * r2, " ").concat(a2, " L ").concat(r2, " ").concat(a2);
        break;
      case "plus":
        var Gg = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), qg = 0.25;
        Gg && (qg = parseInt(Gg.substring(4)) / 1e5);
        var Wg = 1 - qg;
        o2 = "M ".concat(qg * r2, " 0 L ").concat(qg * r2, " ").concat(qg * a2, " L 0 ").concat(qg * a2, " L 0 ").concat(Wg * a2, " L ").concat(qg * r2, " ").concat(Wg * a2, " L ").concat(qg * r2, " ").concat(a2, " L ").concat(Wg * r2, " ").concat(a2, " L ").concat(Wg * r2, " ").concat(Wg * a2, " L ").concat(r2, " ").concat(Wg * a2, " L ").concat(r2, " ").concat(qg * a2, " L ").concat(Wg * r2, " ").concat(qg * a2, " L ").concat(Wg * r2, " 0 Z");
        break;
      case "teardrop":
        var Hg = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Zg = 7.874015748031495, Yg = Zg, Vg = 15.74803149606299;
        Hg && (Zg = parseInt(Hg.substring(4)) * xu);
        var Qg = Zg < 0 ? 0 : Zg > Vg ? Vg : Zg, $g = Math.sqrt(2), Kg = $g * (r2 / 2) * Qg / Yg, Xg = $g * (a2 / 2) * Qg / Yg, Jg = 45 * Math.PI / 180, tv = Kg * Math.cos(Jg), ev = Xg * Math.cos(Jg), rv = r2 / 2 + tv, av = a2 / 2 - ev, nv = (r2 / 2 + rv) / 2, ov = (a2 / 2 + av) / 2;
        o2 = "".concat(jf(r2 / 2, a2 / 2, r2 / 2, a2 / 2, 180, 270, false), " Q ").concat(nv, ",0 ").concat(rv, ",").concat(av, " Q ").concat(r2, ",").concat(ov, " ").concat(r2, ",").concat(a2 / 2, " ").concat(jf(r2 / 2, a2 / 2, r2 / 2, a2 / 2, 0, 90, false).replace("M", "L"), " ").concat(jf(r2 / 2, a2 / 2, r2 / 2, a2 / 2, 90, 180, false).replace("M", "L"), " z");
        break;
      case "plaque":
        var cv = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), iv = 1.3123622047244095, sv = 3.9370078740157477;
        cv && (iv = parseInt(cv.substring(4)) * xu);
        var lv = (iv < 0 ? 0 : iv > sv ? sv : iv) * Math.min(r2, a2) / 7.874015748031495, uv = r2 - lv, fv = a2 - lv;
        o2 = "M 0,".concat(lv, " ").concat(jf(0, 0, lv, lv, 90, 0, false).replace("M", "L"), " L ").concat(uv, ",0 ").concat(jf(r2, 0, lv, lv, 180, 90, false).replace("M", "L"), " L ").concat(r2, ",").concat(fv, " ").concat(jf(r2, a2, lv, lv, 270, 180, false).replace("M", "L"), " L ").concat(lv, ",").concat(a2, " ").concat(jf(0, a2, lv, lv, 0, -90, false).replace("M", "L"), " z");
        break;
      case "sun":
        var hv = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), dv = xu, pv = 25e3 * dv, bv = 12500 * dv, gv = 46875 * dv;
        hv && (pv = parseInt(hv.substring(4)) * dv);
        var vv = pv < bv ? bv : pv > gv ? gv : pv, mv = 5e4 * dv, yv = 1e5 * dv, Lv = mv - vv, wv = 3 * (mv - 30274 * Lv / 32768) / 4, _v = 3 * (mv - 12540 * Lv / 32768) / 4, kv = wv + 3662 * dv, Mv = _v + 36620 * dv, xv = _v + 12500 * dv, Sv = yv - wv, Iv = yv - kv, Cv = yv - Mv, Av = yv - xv, Pv = 18436 * r2 / 21600, Ev = 3163 * a2 / 21600, Rv = 3163 * r2 / 21600, Tv = 18436 * a2 / 21600, Ov = r2 * wv / yv, jv = r2 * kv / yv, zv = r2 * Mv / yv, Bv = r2 * xv / yv, Dv = r2 * Sv / yv, Fv = r2 * Iv / yv, Nv = r2 * Cv / yv, Uv = r2 * Av / yv, Gv = r2 * vv / yv, qv = r2 * Lv / yv, Wv = a2 * Lv / yv, Hv = a2 * wv / yv, Zv = a2 * kv / yv, Yv = a2 * Mv / yv, Vv = a2 * xv / yv, Qv = a2 * Sv / yv, $v = a2 * Iv / yv, Kv = a2 * Cv / yv, Xv = a2 * Av / yv;
        o2 = "M ".concat(r2, ",").concat(a2 / 2, " L ").concat(Dv, ",").concat(Xv, " L ").concat(Dv, ",").concat(Vv, " z M ").concat(Pv, ",").concat(Ev, " L ").concat(Fv, ",").concat(Kv, " L ").concat(zv, ",").concat(Zv, " z M ").concat(r2 / 2, ",0 L ").concat(Uv, ",").concat(Hv, " L ").concat(Bv, ",").concat(Hv, " z M ").concat(Rv, ",").concat(Ev, " L ").concat(Nv, ",").concat(Zv, " L ").concat(jv, ",").concat(Kv, " z M 0,").concat(a2 / 2, " L ").concat(Ov, ",").concat(Vv, " L ").concat(Ov, ",").concat(Xv, " z M ").concat(Rv, ",").concat(Tv, " L ").concat(jv, ",").concat(Yv, " L ").concat(Nv, ",").concat($v, " z M ").concat(r2 / 2, ",").concat(a2, " L ").concat(Bv, ",").concat(Qv, " L ").concat(Uv, ",").concat(Qv, " z M ").concat(Pv, ",").concat(Tv, " L ").concat(zv, ",").concat($v, " L ").concat(Fv, ",").concat(Yv, " z M ").concat(Gv, ",").concat(a2 / 2, " ").concat(jf(r2 / 2, a2 / 2, qv, Wv, 180, 540, false).replace("M", "L"), " z");
        break;
      case "heart":
        var Jv = 49 * r2 / 48, tm = 10 * r2 / 48, em = r2 / 2 - Jv, rm = r2 / 2 - tm, am = r2 / 2 + tm, nm = r2 / 2 + Jv, om = -a2 / 3;
        o2 = "M ".concat(r2 / 2, ",").concat(a2 / 4, " C ").concat(am, ",").concat(om, " ").concat(nm, ",").concat(a2 / 4, " ").concat(r2 / 2, ",").concat(a2, " C ").concat(em, ",").concat(a2 / 4, " ").concat(rm, ",").concat(om, " ").concat(r2 / 2, ",").concat(a2 / 4, " z");
        break;
      case "lightningBolt":
        var cm = 5022 * r2 / 21600, im = 11050 * r2 / 21600, sm = 10012 * r2 / 21600, lm = 14767 * r2 / 21600, um = 12222 * r2 / 21600, fm = 12860 * r2 / 21600, hm = 7602 * r2 / 21600, dm = 16577 * r2 / 21600, pm = 3890 * a2 / 21600, bm = 6080 * a2 / 21600, gm = 6797 * a2 / 21600, vm = 12877 * a2 / 21600, mm = 9705 * a2 / 21600, ym = 12007 * a2 / 21600, Lm = 13987 * a2 / 21600, wm = 8382 * a2 / 21600, _m = 14915 * a2 / 21600;
        o2 = "M ".concat(8472 * r2 / 21600, ",0 L ").concat(fm, ",").concat(bm, " L ").concat(im, ",").concat(gm, " L ").concat(dm, ",").concat(ym, " L ").concat(lm, ",").concat(vm, " L ").concat(r2, ",").concat(a2, " L ").concat(sm, ",").concat(_m, " L ").concat(um, ",").concat(Lm, " L ").concat(cm, ",").concat(mm, " L ").concat(hm, ",").concat(wm, " L 0,").concat(pm, " z");
        break;
      case "cube":
        var km = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Mm = xu, xm = 25e3 * Mm;
        km && (xm = parseInt(km.substring(4)) * Mm);
        var Sm = 1e5 * Mm, Im = Math.min(r2, a2) * (xm < 0 ? 0 : xm > Sm ? Sm : xm) / Sm, Cm = a2 - Im, Am = r2 - Im;
        o2 = "M 0,".concat(Im, " L ").concat(Im, ",0 L ").concat(r2, ",0 L ").concat(r2, ",").concat(Cm, " L ").concat(Am, ",").concat(a2, " L 0,").concat(a2, " z M 0,").concat(Im, " L ").concat(Am, ",").concat(Im, " M ").concat(Am, ",").concat(Im, " L ").concat(r2, ",0 M ").concat(Am, ",").concat(Im, " L ").concat(Am, ",").concat(a2);
        break;
      case "bevel":
        var Pm = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Em = xu, Rm = 12500 * Em;
        Pm && (Rm = parseInt(Pm.substring(4)) * Em);
        var Tm = 5e4 * Em, Om = Math.min(r2, a2) * (Rm < 0 ? 0 : Rm > Tm ? Tm : Rm) / 7.874015748031495, jm = r2 - Om, zm = a2 - Om;
        o2 = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z M ").concat(Om, ",").concat(Om, " L ").concat(jm, ",").concat(Om, " L ").concat(jm, ",").concat(zm, " L ").concat(Om, ",").concat(zm, " z M 0,0 L ").concat(Om, ",").concat(Om, " M 0,").concat(a2, " L ").concat(Om, ",").concat(zm, " M ").concat(r2, ",0 L ").concat(jm, ",").concat(Om, " M ").concat(r2, ",").concat(a2, " L ").concat(jm, ",").concat(zm);
        break;
      case "foldedCorner":
        var Bm = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), Dm = xu, Fm = 16667 * Dm;
        Bm && (Fm = parseInt(Bm.substring(4)) * Dm);
        var Nm = 5e4 * Dm, Um = Math.min(r2, a2) * (Fm < 0 ? 0 : Fm > Nm ? Nm : Fm) / 7.874015748031495, Gm = Um / 5, qm = r2 - Um, Wm = qm + Gm, Hm = a2 - Um, Zm = Hm + Gm;
        o2 = "M ".concat(qm, ",").concat(a2, " L ").concat(Wm, ",").concat(Zm, " L ").concat(r2, ",").concat(Hm, " L ").concat(qm, ",").concat(a2, " L 0,").concat(a2, " L 0,0 L ").concat(r2, ",0 L ").concat(r2, ",").concat(Hm);
        break;
      case "cloud":
      case "cloudCallout":
        for (var Ym = 3900 * r2 / 43200, Vm = 14370 * a2 / 43200, Qm = 6753 * r2 / 43200, $m = 9190 * a2 / 43200, Km = 5333 * r2 / 43200, Xm = 7267 * a2 / 43200, Jm = 4365 * r2 / 43200, ty = 5945 * a2 / 43200, ey = 4857 * r2 / 43200, ry = 6595 * a2 / 43200, ay = 7273 * a2 / 43200, ny = 6775 * r2 / 43200, oy = 9220 * a2 / 43200, cy = 5785 * r2 / 43200, iy = 7867 * a2 / 43200, sy = 6752 * r2 / 43200, ly = 9215 * a2 / 43200, uy = 7720 * r2 / 43200, fy = 10543 * a2 / 43200, hy = 4360 * r2 / 43200, dy = 5918 * a2 / 43200, py = 4345 * r2 / 43200, by = function(t3, e2, r3, a3, n3, o3) {
          return jf(t3 - r3 * Math.cos(n3 * Math.PI / 180), e2 - a3 * Math.sin(n3 * Math.PI / 180), r3, a3, n3, n3 + o3, false).replace("M", "L");
        }, gy = "M ".concat(Ym, ",").concat(Vm), vy = [Ym, Vm], my = 0, yy = [[Qm, $m, -11429249 / 6e4, 7426832 / 6e4], [Km, Xm, -8646143 / 6e4, 5396714 / 6e4], [Jm, ty, -8748475 / 6e4, 5983381 / 6e4], [ey, ry, -7859164 / 6e4, 7034504 / 6e4], [Km, ay, -4722533 / 6e4, 6541615 / 6e4], [ny, oy, -46.26725, 130.269], [cy, iy, 37501 / 6e4, 6842e3 / 6e4], [sy, ly, 22.4516, 115.17255], [uy, fy, 3974558 / 6e4, 4542661 / 6e4], [hy, dy, -16496525 / 6e4, 8804134 / 6e4], [py, ty, -246.8285, 152.51885]]; my < yy.length; my++) {
          var Ly = yy[my], wy = by.apply(void 0, [vy[0], vy[1]].concat(e(Ly)));
          gy += wy;
          var _y = wy.lastIndexOf("L"), ky = wy.substring(_y + 1).split(" ");
          vy = [parseFloat(ky[0]), parseFloat(ky[1])];
        }
        if (gy += " z", "cloudCallout" === t2) {
          var My = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), xy = xu, Sy = -20833 * xy, Iy = 62500 * xy;
          if (My) {
            var Cy, Ay = Tf(My);
            try {
              for (Ay.s(); !(Cy = Ay.n()).done; ) {
                var Py = Cy.value, Ey = ml(Py, ["attrs", "name"]);
                "adj1" === Ey ? Sy = parseInt(ml(Py, ["attrs", "fmla"]).substring(4)) * xy : "adj2" === Ey && (Iy = parseInt(ml(Py, ["attrs", "fmla"]).substring(4)) * xy);
              }
            } catch (t3) {
              Ay.e(t3);
            } finally {
              Ay.f();
            }
          }
          var Ry = 1e5 * xy, Ty = Math.min(r2, a2), Oy = r2 / 2, jy = a2 / 2, zy = r2 * Sy / Ry, By = a2 * Iy / Ry, Dy = Oy + zy, Fy = jy + By, Ny = jy * Math.cos(Math.atan(By / zy)), Uy = Oy * Math.sin(Math.atan(By / zy)), Gy = Oy * Math.cos(Math.atan(Uy / Ny)), qy = jy * Math.sin(Math.atan(Uy / Ny)), Wy = (Sy >= 0 ? Oy + Gy : Oy - Gy) - Dy, Hy = (Sy >= 0 ? jy + qy : jy - qy) - Fy, Zy = Math.sqrt(Wy * Wy + Hy * Hy), Yy = (Zy - 6600 * Ty / 21600) / 3, Vy = 1800 * Ty / 21600, Qy = Yy + Vy, $y = Qy * Hy / Zy + Fy, Ky = 4800 * Ty / 21600 + 2 * Yy, Xy = Ky * Hy / Zy + Fy, Jy = 1200 * Ty / 21600, tL = 600 * Ty / 21600, eL = Qy * Wy / Zy + Dy + Jy, rL = Ky * Wy / Zy + Dy + Vy;
          gy += "".concat(jf(Dy + tL - tL, Fy, tL, tL, 0, 360, true), " M ").concat(eL, ",").concat($y, " ").concat(jf(eL - Jy, $y, Jy, Jy, 0, 360, true).replace("M", "L"), " M ").concat(rL, ",").concat(Xy, " ").concat(jf(rL - Vy, Xy, Vy, Vy, 0, 360, true).replace("M", "L"));
        }
        o2 = gy;
        break;
      case "smileyFace":
        var aL = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), nL = xu, oL = 4653 * nL;
        aL && (oL = parseInt(aL.substring(4)) * nL);
        var cL = 4653 * nL, iL = r2 / 2, sL = a2 / 2, lL = oL < -cL ? -cL : oL > cL ? cL : oL, uL = 16640 * r2 / 21600, fL = 16515 * a2 / 21600, hL = a2 * lL / 7.874015748031495, dL = fL - hL, pL = fL + hL + a2 * lL / 3.9370078740157477, bL = 1125 * r2 / 21600, gL = 1125 * a2 / 21600, vL = 7570 * a2 / 21600, mL = 13135 * r2 / 21600, yL = 4969 * r2 / 21699;
        o2 = "".concat(jf(6215 * r2 / 21600, vL, bL, gL, 0, 360, true), " ").concat(jf(mL, vL, bL, gL, 0, 360, true), " M ").concat(yL, ",").concat(dL, " Q ").concat(iL, ",").concat(pL, " ").concat(uL, ",").concat(dL, " Q ").concat(iL, ",").concat(pL, " ").concat(yL, ",").concat(dL, " M 0,").concat(sL, " ").concat(jf(iL, sL, iL, sL, 180, 540, false).replace("M", "L"), " z");
        break;
      case "verticalScroll":
      case "horizontalScroll":
        var LL = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), wL = xu, _L = 12500 * wL;
        LL && (_L = parseInt(LL.substring(4)) * wL);
        var kL = 25e3 * wL, ML = Math.min(r2, a2), xL = a2, SL = r2, IL = ML * (_L < 0 ? 0 : _L > kL ? kL : _L) / 7.874015748031495, CL = IL / 2, AL = IL / 4;
        if ("verticalScroll" === t2) {
          var PL = IL + CL, EL = IL + IL, RL = SL - IL, TL = SL - CL, OL = RL - CL, jL = xL - IL, zL = xL - CL;
          o2 = "M ".concat(IL, ",").concat(jL, " L ").concat(IL, ",").concat(CL, " ").concat(jf(PL, CL, CL, CL, 180, 270, false).replace("M", "L"), " L ").concat(TL, ",").concat(0, " ").concat(jf(TL, CL, CL, CL, 270, 450, false).replace("M", "L"), " L ").concat(RL, ",").concat(IL, " L ").concat(RL, ",").concat(zL, " ").concat(jf(OL, zL, CL, CL, 0, 90, false).replace("M", "L"), " L ").concat(CL, ",").concat(xL, " ").concat(jf(CL, zL, CL, CL, 90, 270, false).replace("M", "L"), " z M ").concat(PL, ",").concat(0, " ").concat(jf(PL, CL, CL, CL, 270, 450, false).replace("M", "L"), " ").concat(jf(PL, PL / 2, AL, AL, 90, 270, false).replace("M", "L"), " L ").concat(EL, ",").concat(CL, " M ").concat(RL, ",").concat(IL, " L ").concat(PL, ",").concat(IL, " M ").concat(IL, ",").concat(zL, " ").concat(jf(CL, zL, CL, CL, 0, 270, false).replace("M", "L"), " ").concat(jf(CL, (zL + jL) / 2, AL, AL, 270, 450, false).replace("M", "L"), " z M ").concat(IL, ",").concat(zL, " L ").concat(IL, ",").concat(jL);
        } else if ("horizontalScroll" === t2) {
          var BL = IL + CL, DL = IL + IL, FL = xL - IL, NL = xL - CL, UL = FL - CL, GL = SL - IL, qL = SL - CL;
          o2 = "M ".concat(0, ",").concat(BL, " ").concat(jf(CL, BL, CL, CL, 180, 270, false).replace("M", "L"), " L ").concat(GL, ",").concat(IL, " L ").concat(GL, ",").concat(CL, " ").concat(jf(qL, CL, CL, CL, 180, 360, false).replace("M", "L"), " L ").concat(SL, ",").concat(UL, " ").concat(jf(qL, UL, CL, CL, 0, 90, false).replace("M", "L"), " L ").concat(IL, ",").concat(FL, " L ").concat(IL, ",").concat(NL, " ").concat(jf(CL, NL, CL, CL, 0, 180, false).replace("M", "L"), " z M ").concat(qL, ",").concat(IL, " ").concat(jf(qL, CL, CL, CL, 90, -180, false).replace("M", "L"), " ").concat(jf((GL + qL) / 2, CL, AL, AL, 180, 0, false).replace("M", "L"), " z M ").concat(qL, ",").concat(IL, " L ").concat(GL, ",").concat(IL, " M ").concat(CL, ",").concat(DL, " L ").concat(CL, ",").concat(BL, " ").concat(jf(BL / 2, BL, AL, AL, 180, 360, false).replace("M", "L"), " ").concat(jf(CL, BL, CL, CL, 0, 180, false).replace("M", "L"), " M ").concat(IL, ",").concat(BL, " L ").concat(IL, ",").concat(FL);
        }
        break;
      case "wedgeEllipseCallout":
        var WL = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), HL = xu, ZL = -20833 * HL, YL = 62500 * HL;
        if (WL) {
          var VL, QL = Tf(WL);
          try {
            for (QL.s(); !(VL = QL.n()).done; ) {
              var $L = VL.value, KL = ml($L, ["attrs", "name"]);
              "adj1" === KL ? ZL = parseInt(ml($L, ["attrs", "fmla"]).substring(4)) * HL : "adj2" === KL && (YL = parseInt(ml($L, ["attrs", "fmla"]).substring(4)) * HL);
            }
          } catch (t3) {
            QL.e(t3);
          } finally {
            QL.f();
          }
        }
        var XL = 7.874015748031495, JL = 11 * Math.PI / 180, tw = a2 / 2, ew = r2 / 2, rw = r2 * ZL / XL, aw = a2 * YL / XL, nw = ew + rw, ow = tw + aw, cw = Math.atan2(aw * r2, rw * a2), iw = cw + JL, sw = cw - JL, lw = ew * Math.cos(iw), uw = tw + tw * Math.sin(iw), fw = ew + ew * Math.cos(sw), hw = tw + tw * Math.sin(sw);
        o2 = "M ".concat(ew + lw, ",").concat(uw, " L ").concat(nw, ",").concat(ow, " L ").concat(fw, ",").concat(hw, " ").concat(jf(ew, tw, ew, tw, 180 * sw / Math.PI, 180 * iw / Math.PI, true).replace("M", "L"));
        break;
      case "wedgeRectCallout":
        var dw = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), pw = xu, bw = -20833 * pw, gw = 62500 * pw;
        if (dw) {
          var vw, mw = Tf(dw);
          try {
            for (mw.s(); !(vw = mw.n()).done; ) {
              var yw = vw.value, Lw = ml(yw, ["attrs", "name"]);
              "adj1" === Lw ? bw = parseInt(ml(yw, ["attrs", "fmla"]).substring(4)) * pw : "adj2" === Lw && (gw = parseInt(ml(yw, ["attrs", "fmla"]).substring(4)) * pw);
            }
          } catch (t3) {
            mw.e(t3);
          } finally {
            mw.f();
          }
        }
        var ww = 7.874015748031495, _w = r2 * bw / ww, kw = a2 * gw / ww, Mw = r2 / 2 + _w, xw = a2 / 2 + kw, Sw = _w * a2 / r2, Iw = Math.abs(kw) - Math.abs(Sw), Cw = r2 * (_w > 0 ? 7 : 2) / 12, Aw = r2 * (_w > 0 ? 10 : 5) / 12, Pw = a2 * (kw > 0 ? 7 : 2) / 12, Ew = a2 * (kw > 0 ? 10 : 5) / 12, Rw = Iw > 0 || _w > 0 ? 0 : Mw, Tw = Iw > 0 ? kw > 0 ? Cw : Mw : Cw, Ow = Iw > 0 ? r2 : _w > 0 ? Mw : r2, jw = Iw > 0 && kw > 0 ? Mw : Cw, zw = Iw > 0 || _w > 0 ? Pw : xw, Bw = Iw > 0 ? kw > 0 ? 0 : xw : 0, Dw = Iw > 0 ? Pw : _w > 0 ? xw : Pw, Fw = Iw > 0 && kw > 0 ? xw : a2;
        o2 = "M 0,0 L ".concat(Cw, ",0 L ").concat(Tw, ",").concat(Bw, " L ").concat(Aw, ",0 L ").concat(r2, ",0 L ").concat(r2, ",").concat(Pw, " L ").concat(Ow, ",").concat(Dw, " L ").concat(r2, ",").concat(Ew, " L ").concat(r2, ",").concat(a2, " L ").concat(Aw, ",").concat(a2, " L ").concat(jw, ",").concat(Fw, " L ").concat(Cw, ",").concat(a2, " L 0,").concat(a2, " L 0,").concat(Ew, " L ").concat(Rw, ",").concat(zw, " L 0,").concat(Pw, " z");
        break;
      case "wedgeRoundRectCallout":
        var Nw = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), Uw = xu, Gw = -20833 * Uw, qw = 62500 * Uw, Ww = 16667 * Uw;
        if (Nw) {
          var Hw, Zw = Tf(Nw);
          try {
            for (Zw.s(); !(Hw = Zw.n()).done; ) {
              var Yw = Hw.value, Vw = ml(Yw, ["attrs", "name"]);
              "adj1" === Vw ? Gw = parseInt(ml(Yw, ["attrs", "fmla"]).substring(4)) * Uw : "adj2" === Vw ? qw = parseInt(ml(Yw, ["attrs", "fmla"]).substring(4)) * Uw : "adj3" === Vw && (Ww = parseInt(ml(Yw, ["attrs", "fmla"]).substring(4)) * Uw);
            }
          } catch (t3) {
            Zw.e(t3);
          } finally {
            Zw.f();
          }
        }
        var Qw = 7.874015748031495, $w = Math.min(r2, a2), Kw = r2 * Gw / Qw, Xw = a2 * qw / Qw, Jw = r2 / 2 + Kw, t_ = a2 / 2 + Xw, e_ = Kw * a2 / r2, r_ = Math.abs(Xw) - Math.abs(e_), a_ = r2 * (Kw > 0 ? 7 : 2) / 12, n_ = r2 * (Kw > 0 ? 10 : 5) / 12, o_ = a2 * (Xw > 0 ? 7 : 2) / 12, c_ = a2 * (Xw > 0 ? 10 : 5) / 12, i_ = r_ > 0 || Kw > 0 ? 0 : Jw, s_ = r_ > 0 ? Xw > 0 ? a_ : Jw : a_, l_ = r_ > 0 ? r2 : Kw > 0 ? Jw : r2, u_ = r_ > 0 && Xw > 0 ? Jw : a_, f_ = r_ > 0 || Kw > 0 ? o_ : t_, h_ = r_ > 0 ? Xw > 0 ? 0 : t_ : 0, d_ = r_ > 0 ? o_ : Kw > 0 ? t_ : o_, p_ = r_ > 0 && Xw > 0 ? t_ : a2, b_ = $w * Ww / Qw, g_ = r2 - b_, v_ = a2 - b_;
        o2 = "M 0,".concat(b_, " ").concat(jf(b_, b_, b_, b_, 180, 270, false).replace("M", "L"), " L ").concat(a_, ",0 L ").concat(s_, ",").concat(h_, " L ").concat(n_, ",0 L ").concat(g_, ",0 ").concat(jf(g_, b_, b_, b_, 270, 360, false).replace("M", "L"), " L ").concat(r2, ",").concat(o_, " L ").concat(l_, ",").concat(d_, " L ").concat(r2, ",").concat(c_, " L ").concat(r2, ",").concat(v_, " ").concat(jf(g_, v_, b_, b_, 0, 90, false).replace("M", "L"), " L ").concat(n_, ",").concat(a2, " L ").concat(u_, ",").concat(p_, " L ").concat(a_, ",").concat(a2, " L ").concat(b_, ",").concat(a2, " ").concat(jf(b_, v_, b_, b_, 90, 180, false).replace("M", "L"), " L 0,").concat(c_, " L ").concat(i_, ",").concat(f_, " L 0,").concat(o_, " z");
        break;
      case "accentBorderCallout1":
      case "accentBorderCallout2":
      case "accentBorderCallout3":
      case "borderCallout1":
      case "borderCallout2":
      case "borderCallout3":
      case "accentCallout1":
      case "accentCallout2":
      case "accentCallout3":
      case "callout1":
      case "callout2":
      case "callout3":
        var m_ = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), y_ = xu, L_ = 18750 * y_, w_ = -8333 * y_, __ = 18750 * y_, k_ = -16667 * y_, M_ = 1e5 * y_, x_ = -16667 * y_, S_ = 112963 * y_, I_ = -8333 * y_;
        if (m_) {
          var C_, A_ = Tf(m_);
          try {
            for (A_.s(); !(C_ = A_.n()).done; ) {
              var P_ = C_.value, E_ = ml(P_, ["attrs", "name"]);
              "adj1" === E_ ? L_ = parseInt(ml(P_, ["attrs", "fmla"]).substring(4)) * y_ : "adj2" === E_ ? w_ = parseInt(ml(P_, ["attrs", "fmla"]).substring(4)) * y_ : "adj3" === E_ ? __ = parseInt(ml(P_, ["attrs", "fmla"]).substring(4)) * y_ : "adj4" === E_ ? k_ = parseInt(ml(P_, ["attrs", "fmla"]).substring(4)) * y_ : "adj5" === E_ ? M_ = parseInt(ml(P_, ["attrs", "fmla"]).substring(4)) * y_ : "adj6" === E_ ? x_ = parseInt(ml(P_, ["attrs", "fmla"]).substring(4)) * y_ : "adj7" === E_ ? S_ = parseInt(ml(P_, ["attrs", "fmla"]).substring(4)) * y_ : "adj8" === E_ && (I_ = parseInt(ml(P_, ["attrs", "fmla"]).substring(4)) * y_);
            }
          } catch (t3) {
            A_.e(t3);
          } finally {
            A_.f();
          }
        }
        var R_, T_, O_, j_, z_, B_, D_, F_, N_ = 1e5 * y_, U_ = "M 0,0 L ".concat(r2, ",0 L ").concat(r2, ",").concat(a2, " L 0,").concat(a2, " z");
        switch (t2) {
          case "borderCallout1":
          case "callout1":
            m_ || (L_ = 18750 * y_, w_ = -8333 * y_, __ = 112500 * y_, k_ = -38333 * y_), T_ = a2 * L_ / N_, R_ = r2 * w_ / N_, j_ = a2 * __ / N_, O_ = r2 * k_ / N_, o2 = "".concat(U_, " M ").concat(R_, ",").concat(T_, " L ").concat(O_, ",").concat(j_);
            break;
          case "borderCallout2":
          case "callout2":
            m_ || (L_ = 18750 * y_, w_ = -8333 * y_, __ = 18750 * y_, k_ = -16667 * y_, M_ = 112500 * y_, x_ = -46667 * y_), T_ = a2 * L_ / N_, R_ = r2 * w_ / N_, j_ = a2 * __ / N_, O_ = r2 * k_ / N_, B_ = a2 * M_ / N_, z_ = r2 * x_ / N_, o2 = "".concat(U_, " M ").concat(R_, ",").concat(T_, " L ").concat(O_, ",").concat(j_, " L ").concat(z_, ",").concat(B_);
            break;
          case "borderCallout3":
          case "callout3":
            m_ || (L_ = 18750 * y_, w_ = -8333 * y_, __ = 18750 * y_, k_ = -16667 * y_, M_ = 1e5 * y_, x_ = -16667 * y_, S_ = 112963 * y_, I_ = -8333 * y_), T_ = a2 * L_ / N_, R_ = r2 * w_ / N_, j_ = a2 * __ / N_, O_ = r2 * k_ / N_, B_ = a2 * M_ / N_, z_ = r2 * x_ / N_, F_ = a2 * S_ / N_, D_ = r2 * I_ / N_, o2 = "".concat(U_, " M ").concat(R_, ",").concat(T_, " L ").concat(O_, ",").concat(j_, " L ").concat(z_, ",").concat(B_, " L ").concat(D_, ",").concat(F_);
            break;
          case "accentBorderCallout1":
          case "accentCallout1":
            m_ || (L_ = 18750 * y_, w_ = -8333 * y_, __ = 112500 * y_, k_ = -38333 * y_), T_ = a2 * L_ / N_, R_ = r2 * w_ / N_, j_ = a2 * __ / N_, O_ = r2 * k_ / N_, o2 = "".concat(U_, " M ").concat(R_, ",").concat(T_, " L ").concat(O_, ",").concat(j_, " M ").concat(R_, ",0 L ").concat(R_, ",").concat(a2);
            break;
          case "accentBorderCallout2":
          case "accentCallout2":
            m_ || (L_ = 18750 * y_, w_ = -8333 * y_, __ = 18750 * y_, k_ = -16667 * y_, M_ = 112500 * y_, x_ = -46667 * y_), T_ = a2 * L_ / N_, R_ = r2 * w_ / N_, j_ = a2 * __ / N_, O_ = r2 * k_ / N_, B_ = a2 * M_ / N_, z_ = r2 * x_ / N_, o2 = "".concat(U_, " M ").concat(R_, ",").concat(T_, " L ").concat(O_, ",").concat(j_, " L ").concat(z_, ",").concat(B_, " M ").concat(R_, ",0 L ").concat(R_, ",").concat(a2);
            break;
          case "accentBorderCallout3":
          case "accentCallout3":
            m_ || (L_ = 18750 * y_, w_ = -8333 * y_, __ = 18750 * y_, k_ = -16667 * y_, M_ = 1e5 * y_, x_ = -16667 * y_, S_ = 112963 * y_, I_ = -8333 * y_), T_ = a2 * L_ / N_, R_ = r2 * w_ / N_, j_ = a2 * __ / N_, O_ = r2 * k_ / N_, B_ = a2 * M_ / N_, z_ = r2 * x_ / N_, F_ = a2 * S_ / N_, D_ = r2 * I_ / N_, o2 = "".concat(U_, " M ").concat(R_, ",").concat(T_, " L ").concat(O_, ",").concat(j_, " L ").concat(z_, ",").concat(B_, " L ").concat(D_, ",").concat(F_, " M ").concat(R_, ",0 L ").concat(R_, ",").concat(a2);
        }
        break;
      case "leftRightRibbon":
        var G_ = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), q_ = xu, W_ = 5e4 * q_, H_ = 5e4 * q_, Z_ = 16667 * q_;
        if (G_) {
          var Y_, V_ = Tf(G_);
          try {
            for (V_.s(); !(Y_ = V_.n()).done; ) {
              var Q_ = Y_.value, $_ = ml(Q_, ["attrs", "name"]);
              "adj1" === $_ ? W_ = parseInt(ml(Q_, ["attrs", "fmla"]).substring(4)) * q_ : "adj2" === $_ ? H_ = parseInt(ml(Q_, ["attrs", "fmla"]).substring(4)) * q_ : "adj3" === $_ && (Z_ = parseInt(ml(Q_, ["attrs", "fmla"]).substring(4)) * q_);
            }
          } catch (t3) {
            V_.e(t3);
          } finally {
            V_.f();
          }
        }
        var K_ = 33333 * q_, X_ = 1e5 * q_, J_ = 2e5 * q_, tk = Math.min(r2, a2), ek = r2 / 2, rk = a2 / 2, ak = Z_ < 0 ? 0 : Z_ > K_ ? K_ : Z_, nk = X_ - ak, ok = X_ * (ek - r2 / 32) / tk, ck = tk * (H_ < 0 ? 0 : H_ > ok ? ok : H_) / X_, ik = r2 - ck, sk = a2 * (W_ < 0 ? 0 : W_ > nk ? nk : W_) / J_, lk = a2 * ak / -J_, uk = rk + lk - sk, fk = rk + sk - lk, hk = uk + sk, dk = a2 - hk, pk = 2 * hk, bk = a2 - (pk - uk), gk = ak * tk / 31.49606299212598, vk = ek - r2 / 32, mk = ek + r2 / 32, yk = uk + gk, Lk = bk - gk;
        o2 = "M 0,".concat(hk, " L ").concat(ck, ",0 L ").concat(ck, ",").concat(uk, " L ").concat(ek, ",").concat(uk, " ").concat(jf(ek, yk, r2 / 32, gk, 270, 450, false).replace("M", "L"), " ").concat(jf(ek, Lk, r2 / 32, gk, 270, 90, false).replace("M", "L"), " L ").concat(ik, ",").concat(bk, " L ").concat(ik, ",").concat(a2 - pk, " L ").concat(r2, ",").concat(dk, " L ").concat(ik, ",").concat(a2, " L ").concat(ik, ",").concat(fk, " L ").concat(ek, ",").concat(fk, " ").concat(jf(ek, fk - gk, r2 / 32, gk, 90, 180, false).replace("M", "L"), " L ").concat(vk, ",").concat(pk - uk, " L ").concat(ck, ",").concat(pk - uk, " L ").concat(ck, ",").concat(pk, " z M ").concat(mk, ",").concat(yk, " L ").concat(mk, ",").concat(bk, " M ").concat(vk, ",").concat(Lk, " L ").concat(vk, ",").concat(pk - uk);
        break;
      case "ribbon":
      case "ribbon2":
        var wk = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), _k = 1.3123622047244095, kk = 3.9370078740157477;
        if (wk) {
          var Mk, xk = Tf(wk);
          try {
            for (xk.s(); !(Mk = xk.n()).done; ) {
              var Sk = Mk.value, Ik = ml(Sk, ["attrs", "name"]);
              "adj1" === Ik ? _k = parseInt(ml(Sk, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === Ik && (kk = parseInt(ml(Sk, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            xk.e(t3);
          } finally {
            xk.f();
          }
        }
        var Ck = 1.9685039370078738, Ak = 2.6246456692913385, Pk = 5.905511811023621, Ek = 7.874015748031495, Rk = 15.74803149606299, Tk = r2 / 2, Ok = a2, jk = r2, zk = r2 / 8, Bk = r2 / 32, Dk = _k < 0 ? 0 : _k > Ak ? Ak : _k, Fk = jk - zk, Nk = r2 * (kk < Ck ? Ck : kk > Pk ? Pk : kk) / Rk, Uk = Tk - Nk, Gk = Tk + Nk, qk = Uk + Bk, Wk = Gk - Bk, Hk = Uk + zk, Zk = Gk - zk, Yk = Hk - Bk, Vk = Zk + Bk, Qk = a2 * Dk / 31.49606299212598;
        if ("ribbon2" === t2) {
          var $k = Ok - a2 * Dk / Rk, Kk = a2 * Dk / Ek, Xk = Ok - Kk, Jk = 0 + Kk, tM = (Jk + Ok) / 2, eM = Ok - Qk, rM = $k - Qk;
          o2 = "M ".concat(0, ",").concat(Ok, " L ").concat(zk, ",").concat(tM, " L ").concat(0, ",").concat(Jk, " L ").concat(Uk, ",").concat(Jk, " L ").concat(Uk, ",").concat(Qk, " ").concat(jf(qk, Qk, Bk, Qk, 180, 270, false).replace("M", "L"), " L ").concat(Wk, ",").concat(0, " ").concat(jf(Wk, Qk, Bk, Qk, 270, 360, false).replace("M", "L"), " L ").concat(Gk, ",").concat(Jk, " L ").concat(jk, ",").concat(Jk, " L ").concat(Fk, ",").concat(tM, " L ").concat(jk, ",").concat(Ok, " L ").concat(Vk, ",").concat(Ok, " ").concat(jf(Vk, eM, Bk, Qk, 90, 270, false).replace("M", "L"), " L ").concat(Wk, ",").concat($k, " ").concat(jf(Wk, rM, Bk, Qk, 90, -90, false).replace("M", "L"), " L ").concat(qk, ",").concat(Xk, " ").concat(jf(qk, rM, Bk, Qk, 270, 90, false).replace("M", "L"), " L ").concat(Yk, ",").concat($k, " ").concat(jf(Yk, eM, Bk, Qk, 270, 450, false).replace("M", "L"), " z M ").concat(Hk, ",").concat(Xk, " L ").concat(Hk, ",").concat(eM, " M ").concat(Zk, ",").concat(eM, " L ").concat(Zk, ",").concat(Xk, " M ").concat(Uk, ",").concat(rM, " L ").concat(Uk, ",").concat(Jk, " M ").concat(Gk, ",").concat(Jk, " L ").concat(Gk, ",").concat(rM);
        } else if ("ribbon" === t2) {
          var aM = a2 * Dk / Rk, nM = a2 * Dk / Ek, oM = Ok - nM, cM = oM / 2, iM = Ok - Qk, sM = nM - Qk;
          o2 = "M ".concat(0, ",").concat(0, " L ").concat(Yk, ",").concat(0, " ").concat(jf(Yk, Qk, Bk, Qk, 270, 450, false).replace("M", "L"), " L ").concat(qk, ",").concat(aM, " ").concat(jf(qk, sM, Bk, Qk, 270, 90, false).replace("M", "L"), " L ").concat(Wk, ",").concat(nM, " ").concat(jf(Wk, sM, Bk, Qk, 90, -90, false).replace("M", "L"), " L ").concat(Vk, ",").concat(aM, " ").concat(jf(Vk, Qk, Bk, Qk, 90, 270, false).replace("M", "L"), " L ").concat(jk, ",").concat(0, " L ").concat(Fk, ",").concat(cM, " L ").concat(jk, ",").concat(oM, " L ").concat(Gk, ",").concat(oM, " L ").concat(Gk, ",").concat(iM, " ").concat(jf(Wk, iM, Bk, Qk, 0, 90, false).replace("M", "L"), " L ").concat(qk, ",").concat(Ok, " ").concat(jf(qk, iM, Bk, Qk, 90, 180, false).replace("M", "L"), " L ").concat(Uk, ",").concat(oM, " L ").concat(0, ",").concat(oM, " L ").concat(zk, ",").concat(cM, " z M ").concat(Hk, ",").concat(Qk, " L ").concat(Hk, ",").concat(nM, " M ").concat(Zk, ",").concat(nM, " L ").concat(Zk, ",").concat(Qk, " M ").concat(Uk, ",").concat(oM, " L ").concat(Uk, ",").concat(sM, " M ").concat(Gk, ",").concat(sM, " L ").concat(Gk, ",").concat(oM);
        }
        break;
      case "doubleWave":
      case "wave":
        var lM = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), uM = "doubleWave" === t2 ? 0.49212598425196846 : 0.9842519685039369, fM = 0;
        if (lM) {
          var hM, dM = Tf(lM);
          try {
            for (dM.s(); !(hM = dM.n()).done; ) {
              var pM = hM.value, bM = ml(pM, ["attrs", "name"]);
              "adj1" === bM ? uM = parseInt(ml(pM, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === bM && (fM = parseInt(ml(pM, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            dM.e(t3);
          } finally {
            dM.f();
          }
        }
        var gM = -0.7874015748031495, vM = 3.9370078740157477, mM = 7.874015748031495, yM = a2, LM = r2;
        if ("doubleWave" === t2) {
          var wM = 0.9842519685039369, _M = a2 * (uM < 0 ? 0 : uM > wM ? wM : uM) / mM, kM = 10 * _M / 3, MM = _M - kM, xM = _M + kM, SM = yM - _M, IM = SM - kM, CM = SM + kM, AM = r2 * (fM < gM ? gM : fM > mM ? mM : fM) / vM, PM = AM > 0 ? 0 : AM, EM = 0 - PM, RM = AM > 0 ? AM : 0, TM = LM - RM, OM = (PM + TM) / 6, jM = EM + OM, zM = (PM + TM) / 3, BM = EM + zM, DM = (EM + TM) / 2, FM = DM + OM, NM = (FM + TM) / 2, UM = 0 + RM, GM = LM + PM, qM = UM + OM, WM = UM + zM, HM = (UM + GM) / 2, ZM = HM + OM, YM = (ZM + GM) / 2;
          o2 = "M ".concat(EM, ",").concat(_M, " C ").concat(jM, ",").concat(MM, " ").concat(BM, ",").concat(xM, " ").concat(DM, ",").concat(_M, " C ").concat(FM, ",").concat(MM, " ").concat(NM, ",").concat(xM, " ").concat(TM, ",").concat(_M, " L ").concat(GM, ",").concat(SM, " C ").concat(YM, ",").concat(CM, " ").concat(ZM, ",").concat(IM, " ").concat(HM, ",").concat(SM, " C ").concat(WM, ",").concat(CM, " ").concat(qM, ",").concat(IM, " ").concat(UM, ",").concat(SM, " z");
        } else if ("wave" === t2) {
          var VM = 1.574803149606299, QM = a2 * (uM < 0 ? 0 : uM > VM ? VM : uM) / mM, $M = 10 * QM / 3, KM = QM - $M, XM = QM + $M, JM = yM - QM, tx = JM - $M, ex = JM + $M, rx = r2 * (fM < gM ? gM : fM > mM ? mM : fM) / vM, ax = rx > 0 ? 0 : rx, nx = 0 - ax, ox = rx > 0 ? rx : 0, cx = LM - ox, ix = (ax + cx) / 3, sx = nx + ix, lx = (sx + cx) / 2, ux = 0 + ox, fx = LM + ax, hx = ux + ix, dx = (hx + fx) / 2;
          o2 = "M ".concat(nx, ",").concat(QM, " C ").concat(sx, ",").concat(KM, " ").concat(lx, ",").concat(XM, " ").concat(cx, ",").concat(QM, " L ").concat(fx, ",").concat(JM, " C ").concat(dx, ",").concat(ex, " ").concat(hx, ",").concat(tx, " ").concat(ux, ",").concat(JM, " z");
        }
        break;
      case "ellipseRibbon":
      case "ellipseRibbon2":
        var px = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), bx = 1.9685039370078738, gx = 3.9370078740157477, vx = 0.9842519685039369;
        if (px) {
          var mx, yx = Tf(px);
          try {
            for (yx.s(); !(mx = yx.n()).done; ) {
              var Lx = mx.value, wx = ml(Lx, ["attrs", "name"]);
              "adj1" === wx ? bx = parseInt(ml(Lx, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === wx ? gx = parseInt(ml(Lx, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === wx && (vx = parseInt(ml(Lx, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            yx.e(t3);
          } finally {
            yx.f();
          }
        }
        var _x = 1.9685039370078738, kx = 5.905511811023621, Mx = 7.874015748031495, xx = r2 / 2, Sx = a2, Ix = r2, Cx = r2 / 8, Ax = bx < 0 ? 0 : bx > Mx ? Mx : bx, Px = Mx - Ax, Ex = Ax - Px / 2 > 0 ? Ax - Px / 2 : 0, Rx = xx - r2 * (gx < _x ? _x : gx > kx ? kx : gx) / 15.74803149606299, Tx = Rx + Cx, Ox = Ix - Tx, jx = Ix - Rx, zx = Ix - Cx, Bx = a2 * (vx < Ex ? Ex : vx > Ax ? Ax : vx) / Mx, Dx = 4 * Bx / r2, Fx = Tx - Tx * Tx / r2, Nx = Tx / 2, Ux = Ix - Nx, Gx = a2 * Ax / Mx, qx = Gx - Bx, Wx = Dx * (Rx - Rx * Rx / r2), Hx = Sx - Gx, Zx = 14 * Bx / 16, Yx = Rx / 2, Vx = Dx * Yx, Qx = Ix - Yx;
        if ("ellipseRibbon" === t2) {
          var $x = Dx * Fx, Kx = Dx * Nx, Xx = Wx + qx, Jx = Bx + qx - Xx + Bx + qx, tS = (Zx + Hx) / 2, eS = Wx + Hx, rS = Xx + Hx, aS = Vx + Hx, nS = Jx + Hx, oS = $x + qx;
          o2 = "M ".concat(0, ",").concat(0, " Q ").concat(Nx, ",").concat(Kx, " ").concat(Tx, ",").concat($x, " L ").concat(Rx, ",").concat(Xx, " Q ").concat(xx, ",").concat(Jx, " ").concat(jx, ",").concat(Xx, " L ").concat(Ox, ",").concat($x, " Q ").concat(Ux, ",").concat(Kx, " ").concat(Ix, ",").concat(0, " L ").concat(zx, ",").concat(tS, " L ").concat(Ix, ",").concat(Hx, " Q ").concat(Qx, ",").concat(aS, " ").concat(jx, ",").concat(eS, " L ").concat(jx, ",").concat(rS, " Q ").concat(xx, ",").concat(nS, " ").concat(Rx, ",").concat(rS, " L ").concat(Rx, ",").concat(eS, " Q ").concat(Yx, ",").concat(aS, " ").concat(0, ",").concat(Hx, " L ").concat(Cx, ",").concat(tS, " z M ").concat(Rx, ",").concat(eS, " L ").concat(Rx, ",").concat(Xx, " M ").concat(jx, ",").concat(Xx, " L ").concat(jx, ",").concat(eS, " M ").concat(Tx, ",").concat($x, " L ").concat(Tx, ",").concat(oS, " M ").concat(Ox, ",").concat(oS, " L ").concat(Ox, ",").concat($x);
        } else if ("ellipseRibbon2" === t2) {
          var cS = Dx * Fx, iS = Sx - cS, sS = Sx - Dx * Nx, lS = Wx + qx, uS = Sx - lS, fS = Bx + qx - lS + Bx + qx, hS = Sx - fS, dS = Sx - (Zx + Hx) / 2, pS = Sx - (Wx + Hx), bS = Sx - (lS + Hx), gS = Sx - (Vx + Hx), vS = Sx - (fS + Hx), mS = Sx - (cS + qx);
          o2 = "M ".concat(0, ",").concat(Sx, " L ").concat(Cx, ",").concat(dS, " L ").concat(0, ",").concat(Gx, " Q ").concat(Yx, ",").concat(gS, " ").concat(Rx, ",").concat(pS, " L ").concat(Rx, ",").concat(bS, " Q ").concat(xx, ",").concat(vS, " ").concat(jx, ",").concat(bS, " L ").concat(jx, ",").concat(pS, " Q ").concat(Qx, ",").concat(gS, " ").concat(Ix, ",").concat(Gx, " L ").concat(zx, ",").concat(dS, " L ").concat(Ix, ",").concat(Sx, " Q ").concat(Ux, ",").concat(sS, " ").concat(Ox, ",").concat(iS, " L ").concat(jx, ",").concat(uS, " Q ").concat(xx, ",").concat(hS, " ").concat(Rx, ",").concat(uS, " L ").concat(Tx, ",").concat(iS, " Q ").concat(Nx, ",").concat(sS, " ").concat(0, ",").concat(Sx, " z M ").concat(Rx, ",").concat(uS, " L ").concat(Rx, ",").concat(pS, " M ").concat(jx, ",").concat(pS, " L ").concat(jx, ",").concat(uS, " M ").concat(Tx, ",").concat(mS, " L ").concat(Tx, ",").concat(iS, " M ").concat(Ox, ",").concat(iS, " L ").concat(Ox, ",").concat(mS);
        }
        break;
      case "line":
      case "straightConnector1":
      case "bentConnector4":
      case "bentConnector5":
      case "curvedConnector2":
      case "curvedConnector3":
      case "curvedConnector4":
      case "curvedConnector5":
        o2 = "M 0 0 L ".concat(r2, " ").concat(a2);
        break;
      case "rightArrow":
        var yS = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), LS = 0.25, wS = 0.5;
        if (yS) {
          var _S, kS = r2 / a2, MS = Tf(yS);
          try {
            for (MS.s(); !(_S = MS.n()).done; ) {
              var xS = _S.value, SS = ml(xS, ["attrs", "name"]);
              if ("adj1" === SS) LS = 0.5 - parseInt(ml(xS, ["attrs", "fmla"]).substring(4)) / 2e5;
              else if ("adj2" === SS) {
                wS = 1 - parseInt(ml(xS, ["attrs", "fmla"]).substring(4)) / 1e5 / kS;
              }
            }
          } catch (t3) {
            MS.e(t3);
          } finally {
            MS.f();
          }
        }
        o2 = "M ".concat(r2, " ").concat(a2 / 2, " L ").concat(wS * r2, " 0 L ").concat(wS * r2, " ").concat(LS * a2, " L 0 ").concat(LS * a2, " L 0 ").concat((1 - LS) * a2, " L ").concat(wS * r2, " ").concat((1 - LS) * a2, " L ").concat(wS * r2, " ").concat(a2, " Z");
        break;
      case "leftArrow":
        var IS = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), CS = 0.25, AS = 0.5;
        if (IS) {
          var PS, ES = r2 / a2, RS = Tf(IS);
          try {
            for (RS.s(); !(PS = RS.n()).done; ) {
              var TS = PS.value, OS = ml(TS, ["attrs", "name"]);
              if ("adj1" === OS) CS = 0.5 - parseInt(ml(TS, ["attrs", "fmla"]).substring(4)) / 2e5;
              else if ("adj2" === OS) {
                AS = parseInt(ml(TS, ["attrs", "fmla"]).substring(4)) / 1e5 / ES;
              }
            }
          } catch (t3) {
            RS.e(t3);
          } finally {
            RS.f();
          }
        }
        o2 = "M 0 ".concat(a2 / 2, " L ").concat(AS * r2, " ").concat(a2, " L ").concat(AS * r2, " ").concat((1 - CS) * a2, " L ").concat(r2, " ").concat((1 - CS) * a2, " L ").concat(r2, " ").concat(CS * a2, " L ").concat(AS * r2, " ").concat(CS * a2, " L ").concat(AS * r2, " 0 Z");
        break;
      case "downArrow":
      case "flowChartOffpageConnector":
        var jS = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), zS = 0.25, BS = 0.5;
        if (jS) {
          var DS, FS = a2 / r2, NS = Tf(jS);
          try {
            for (NS.s(); !(DS = NS.n()).done; ) {
              var US = DS.value, GS = ml(US, ["attrs", "name"]);
              if ("adj1" === GS) zS = parseInt(ml(US, ["attrs", "fmla"]).substring(4)) / 2e5;
              else if ("adj2" === GS) {
                BS = parseInt(ml(US, ["attrs", "fmla"]).substring(4)) / 1e5 / FS;
              }
            }
          } catch (t3) {
            NS.e(t3);
          } finally {
            NS.f();
          }
        }
        "flowChartOffpageConnector" === t2 && (zS = 0.5, BS = 0.212), o2 = "M ".concat((0.5 - zS) * r2, " 0 L ").concat((0.5 - zS) * r2, " ").concat((1 - BS) * a2, " L 0 ").concat((1 - BS) * a2, " L ").concat(r2 / 2, " ").concat(a2, " L ").concat(r2, " ").concat((1 - BS) * a2, " L ").concat((0.5 + zS) * r2, " ").concat((1 - BS) * a2, " L ").concat((0.5 + zS) * r2, " 0 Z");
        break;
      case "upArrow":
        var qS = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), WS = 0.25, HS = 0.5;
        if (qS) {
          var ZS, YS = a2 / r2, VS = Tf(qS);
          try {
            for (VS.s(); !(ZS = VS.n()).done; ) {
              var QS = ZS.value, $S = ml(QS, ["attrs", "name"]);
              if ("adj1" === $S) WS = parseInt(ml(QS, ["attrs", "fmla"]).substring(4)) / 2e5;
              else if ("adj2" === $S) {
                HS = parseInt(ml(QS, ["attrs", "fmla"]).substring(4)) / 1e5 / YS;
              }
            }
          } catch (t3) {
            VS.e(t3);
          } finally {
            VS.f();
          }
        }
        o2 = "M ".concat(r2 / 2, " 0 L 0 ").concat(HS * a2, " L ").concat((0.5 - WS) * r2, " ").concat(HS * a2, " L ").concat((0.5 - WS) * r2, " ").concat(a2, " L ").concat((0.5 + WS) * r2, " ").concat(a2, " L ").concat((0.5 + WS) * r2, " ").concat(HS * a2, " L ").concat(r2, " ").concat(HS * a2, " Z");
        break;
      case "leftRightArrow":
        var KS = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), XS = 0.25, JS = 0.25;
        if (KS) {
          var tI, eI = r2 / a2, rI = Tf(KS);
          try {
            for (rI.s(); !(tI = rI.n()).done; ) {
              var aI = tI.value, nI = ml(aI, ["attrs", "name"]);
              if ("adj1" === nI) XS = 0.5 - parseInt(ml(aI, ["attrs", "fmla"]).substring(4)) / 2e5;
              else if ("adj2" === nI) {
                JS = parseInt(ml(aI, ["attrs", "fmla"]).substring(4)) / 1e5 / eI;
              }
            }
          } catch (t3) {
            rI.e(t3);
          } finally {
            rI.f();
          }
        }
        o2 = "M 0 ".concat(a2 / 2, " L ").concat(JS * r2, " ").concat(a2, " L ").concat(JS * r2, " ").concat((1 - XS) * a2, " L ").concat((1 - JS) * r2, " ").concat((1 - XS) * a2, " L ").concat((1 - JS) * r2, " ").concat(a2, " L ").concat(r2, " ").concat(a2 / 2, " L ").concat((1 - JS) * r2, " 0 L ").concat((1 - JS) * r2, " ").concat(XS * a2, " L ").concat(JS * r2, " ").concat(XS * a2, " L ").concat(JS * r2, " 0 Z");
        break;
      case "upDownArrow":
        var oI = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), cI = 0.25, iI = 0.25;
        if (oI) {
          var sI, lI = a2 / r2, uI = Tf(oI);
          try {
            for (uI.s(); !(sI = uI.n()).done; ) {
              var fI = sI.value, hI = ml(fI, ["attrs", "name"]);
              if ("adj1" === hI) cI = 0.5 - parseInt(ml(fI, ["attrs", "fmla"]).substring(4)) / 2e5;
              else if ("adj2" === hI) {
                iI = parseInt(ml(fI, ["attrs", "fmla"]).substring(4)) / 1e5 / lI;
              }
            }
          } catch (t3) {
            uI.e(t3);
          } finally {
            uI.f();
          }
        }
        o2 = "M ".concat(r2 / 2, " 0 L 0 ").concat(iI * a2, " L ").concat(cI * r2, " ").concat(iI * a2, " L ").concat(cI * r2, " ").concat((1 - iI) * a2, " L 0 ").concat((1 - iI) * a2, " L ").concat(r2 / 2, " ").concat(a2, " L ").concat(r2, " ").concat((1 - iI) * a2, " L ").concat((1 - cI) * r2, " ").concat((1 - iI) * a2, " L ").concat((1 - cI) * r2, " ").concat(iI * a2, " L ").concat(r2, " ").concat(iI * a2, " Z");
        break;
      case "quadArrow":
        var dI = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), pI = 1.7716535433070866, bI = 1.7716535433070866, gI = 1.7716535433070866, vI = 3.9370078740157477, mI = 7.874015748031495;
        if (dI) {
          var yI, LI = Tf(dI);
          try {
            for (LI.s(); !(yI = LI.n()).done; ) {
              var wI = yI.value, _I = ml(wI, ["attrs", "name"]);
              "adj1" === _I ? pI = parseInt(ml(wI, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === _I ? bI = parseInt(ml(wI, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === _I && (gI = parseInt(ml(wI, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            LI.e(t3);
          } finally {
            LI.f();
          }
        }
        var kI = a2 / 2, MI = r2 / 2, xI = Math.min(r2, a2), SI = bI < 0 ? 0 : bI > vI ? vI : bI, II = 2 * SI, CI = (mI - II) / 2, AI = xI * (gI < 0 ? 0 : gI > CI ? CI : gI) / mI, PI = xI * SI / mI, EI = MI - PI, RI = MI + PI, TI = xI * (pI < 0 ? 0 : pI > II ? II : pI) / 15.74803149606299, OI = MI - TI, jI = MI + TI, zI = r2 - AI, BI = kI - PI, DI = kI + PI, FI = kI - TI, NI = kI + TI, UI = a2 - AI;
        o2 = "M 0,".concat(kI, " L ").concat(AI, ",").concat(BI, " L ").concat(AI, ",").concat(FI, " L ").concat(OI, ",").concat(FI, " L ").concat(OI, ",").concat(AI, " L ").concat(EI, ",").concat(AI, " L ").concat(MI, ",0 L ").concat(RI, ",").concat(AI, " L ").concat(jI, ",").concat(AI, " L ").concat(jI, ",").concat(FI, " L ").concat(zI, ",").concat(FI, " L ").concat(zI, ",").concat(BI, " L ").concat(r2, ",").concat(kI, " L ").concat(zI, ",").concat(DI, " L ").concat(zI, ",").concat(NI, " L ").concat(jI, ",").concat(NI, " L ").concat(jI, ",").concat(UI, " L ").concat(RI, ",").concat(UI, " L ").concat(MI, ",").concat(a2, " L ").concat(EI, ",").concat(UI, " L ").concat(OI, ",").concat(UI, " L ").concat(OI, ",").concat(NI, " L ").concat(AI, ",").concat(NI, " L ").concat(AI, ",").concat(DI, " z");
        break;
      case "leftRightUpArrow":
        var GI = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), qI = 1.9685039370078738, WI = 1.9685039370078738, HI = 1.9685039370078738, ZI = 3.9370078740157477, YI = 7.874015748031495;
        if (GI) {
          var VI, QI = Tf(GI);
          try {
            for (QI.s(); !(VI = QI.n()).done; ) {
              var $I = VI.value, KI = ml($I, ["attrs", "name"]);
              "adj1" === KI ? qI = parseInt(ml($I, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === KI ? WI = parseInt(ml($I, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === KI && (HI = parseInt(ml($I, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            QI.e(t3);
          } finally {
            QI.f();
          }
        }
        var XI = r2 / 2, JI = Math.min(r2, a2), tC = WI < 0 ? 0 : WI > ZI ? ZI : WI, eC = 2 * tC, rC = (YI - eC) / 2, aC = JI * (HI < 0 ? 0 : HI > rC ? rC : HI) / YI, nC = JI * tC / YI, oC = XI - nC, cC = XI + nC, iC = JI * (qI < 0 ? 0 : qI > eC ? eC : qI) / 15.74803149606299, sC = XI - iC, lC = XI + iC, uC = r2 - aC, fC = a2 - JI * tC / ZI, hC = a2 - nC, dC = hC - iC, pC = hC + iC;
        o2 = "M 0,".concat(hC, " L ").concat(aC, ",").concat(fC, " L ").concat(aC, ",").concat(dC, " L ").concat(sC, ",").concat(dC, " L ").concat(sC, ",").concat(aC, " L ").concat(oC, ",").concat(aC, " L ").concat(XI, ",0 L ").concat(cC, ",").concat(aC, " L ").concat(lC, ",").concat(aC, " L ").concat(lC, ",").concat(dC, " L ").concat(uC, ",").concat(dC, " L ").concat(uC, ",").concat(fC, " L ").concat(r2, ",").concat(hC, " L ").concat(uC, ",").concat(a2, " L ").concat(uC, ",").concat(pC, " L ").concat(aC, ",").concat(pC, " L ").concat(aC, ",").concat(a2, " z");
        break;
      case "leftUpArrow":
        var bC = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), gC = 1.9685039370078738, vC = 1.9685039370078738, mC = 1.9685039370078738, yC = 3.9370078740157477, LC = 7.874015748031495;
        if (bC) {
          var wC, _C = Tf(bC);
          try {
            for (_C.s(); !(wC = _C.n()).done; ) {
              var kC = wC.value, MC = ml(kC, ["attrs", "name"]);
              "adj1" === MC ? gC = parseInt(ml(kC, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === MC ? vC = parseInt(ml(kC, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === MC && (mC = parseInt(ml(kC, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            _C.e(t3);
          } finally {
            _C.f();
          }
        }
        var xC = Math.min(r2, a2), SC = vC < 0 ? 0 : vC > yC ? yC : vC, IC = 2 * SC, CC = LC - IC, AC = xC * (mC < 0 ? 0 : mC > CC ? CC : mC) / LC, PC = xC * SC / yC, EC = r2 - PC, RC = a2 - PC, TC = xC * SC / LC, OC = r2 - TC, jC = a2 - TC, zC = xC * (gC < 0 ? 0 : gC > IC ? IC : gC) / 15.74803149606299, BC = OC - zC, DC = OC + zC, FC = jC - zC, NC = jC + zC;
        o2 = "M 0,".concat(jC, " L ").concat(AC, ",").concat(RC, " L ").concat(AC, ",").concat(FC, " L ").concat(BC, ",").concat(FC, " L ").concat(BC, ",").concat(AC, " L ").concat(EC, ",").concat(AC, " L ").concat(OC, ",0 L ").concat(r2, ",").concat(AC, " L ").concat(DC, ",").concat(AC, " L ").concat(DC, ",").concat(NC, " L ").concat(AC, ",").concat(NC, " L ").concat(AC, ",").concat(a2, " z");
        break;
      case "bentUpArrow":
        var UC = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), GC = 1.9685039370078738, qC = 1.9685039370078738, WC = 1.9685039370078738, HC = 3.9370078740157477, ZC = 7.874015748031495;
        if (UC) {
          var YC, VC = Tf(UC);
          try {
            for (VC.s(); !(YC = VC.n()).done; ) {
              var QC = YC.value, $C = ml(QC, ["attrs", "name"]);
              "adj1" === $C ? GC = parseInt(ml(QC, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === $C ? qC = parseInt(ml(QC, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === $C && (WC = parseInt(ml(QC, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            VC.e(t3);
          } finally {
            VC.f();
          }
        }
        var KC = Math.min(r2, a2), XC = GC < 0 ? 0 : GC > HC ? HC : GC, JC = qC < 0 ? 0 : qC > HC ? HC : qC, tA = KC * (WC < 0 ? 0 : WC > HC ? HC : WC) / ZC, eA = r2 - KC * JC / HC, rA = r2 - KC * JC / ZC, aA = KC * XC / 15.74803149606299, nA = rA - aA, oA = rA + aA, cA = a2 - KC * XC / ZC;
        o2 = "M 0,".concat(cA, " L ").concat(nA, ",").concat(cA, " L ").concat(nA, ",").concat(tA, " L ").concat(eA, ",").concat(tA, " L ").concat(rA, ",0 L ").concat(r2, ",").concat(tA, " L ").concat(oA, ",").concat(tA, " L ").concat(oA, ",").concat(a2, " L 0,").concat(a2, " z");
        break;
      case "bentArrow":
        var iA = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), sA = 1.9685039370078738, lA = 1.9685039370078738, uA = 1.9685039370078738, fA = 3.444881889763779, hA = 3.9370078740157477, dA = 7.874015748031495;
        if (iA) {
          var pA, bA = Tf(iA);
          try {
            for (bA.s(); !(pA = bA.n()).done; ) {
              var gA = pA.value, vA = ml(gA, ["attrs", "name"]);
              "adj1" === vA ? sA = parseInt(ml(gA, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === vA ? lA = parseInt(ml(gA, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === vA ? uA = parseInt(ml(gA, ["attrs", "fmla"]).substring(4)) * xu : "adj4" === vA && (fA = parseInt(ml(gA, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            bA.e(t3);
          } finally {
            bA.f();
          }
        }
        var mA = Math.min(r2, a2), yA = lA < 0 ? 0 : lA > hA ? hA : lA, LA = 2 * yA, wA = mA * (sA < 0 ? 0 : sA > LA ? LA : sA) / dA, _A = mA * yA / dA, kA = _A - wA / 2, MA = mA * (uA < 0 ? 0 : uA > hA ? hA : uA) / dA, xA = r2 - MA, SA = a2 - kA, IA = dA * (xA < SA ? xA : SA) / mA, CA = mA * (fA < 0 ? 0 : fA > IA ? IA : fA) / dA, AA = CA - wA, PA = AA > 0 ? AA : 0, EA = wA + PA, RA = r2 - MA, TA = kA + wA, OA = TA + kA, jA = kA + CA, zA = TA + PA;
        o2 = "M 0,".concat(a2, " L 0,").concat(jA, " ").concat(jf(CA, jA, CA, CA, 180, 270, false).replace("M", "L"), " L ").concat(RA, ",").concat(kA, " L ").concat(RA, ",0 L ").concat(r2, ",").concat(_A, " L ").concat(RA, ",").concat(OA, " L ").concat(RA, ",").concat(TA, " L ").concat(EA, ",").concat(TA, " ").concat(jf(EA, zA, PA, PA, 270, 180, false).replace("M", "L"), " L ").concat(wA, ",").concat(a2, " z");
        break;
      case "uturnArrow":
        var BA = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), DA = 1.9685039370078738, FA = 1.9685039370078738, NA = 1.9685039370078738, UA = 3.444881889763779, GA = 5.905511811023621, qA = 1.9685039370078738, WA = 7.874015748031495;
        if (BA) {
          var HA, ZA = Tf(BA);
          try {
            for (ZA.s(); !(HA = ZA.n()).done; ) {
              var YA = HA.value, VA = ml(YA, ["attrs", "name"]);
              "adj1" === VA ? DA = parseInt(ml(YA, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === VA ? FA = parseInt(ml(YA, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === VA ? NA = parseInt(ml(YA, ["attrs", "fmla"]).substring(4)) * xu : "adj4" === VA ? UA = parseInt(ml(YA, ["attrs", "fmla"]).substring(4)) * xu : "adj5" === VA && (GA = parseInt(ml(YA, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            ZA.e(t3);
          } finally {
            ZA.f();
          }
        }
        var QA = Math.min(r2, a2), $A = FA < 0 ? 0 : FA > qA ? qA : FA, KA = 2 * $A, XA = DA < 0 ? 0 : DA > KA ? KA : DA, JA = (WA - XA * QA / a2) * a2 / QA, tP = NA < 0 ? 0 : NA > JA ? JA : NA, eP = (tP + XA) * QA / a2, rP = QA * XA / WA, aP = QA * $A / WA, nP = aP - rP / 2, oP = a2 * (GA < eP ? eP : GA > WA ? WA : GA) / WA, cP = oP - QA * tP / WA, iP = r2 - nP, sP = iP / 2, lP = WA * (sP < cP ? sP : cP) / QA, uP = QA * (UA < 0 ? 0 : UA > lP ? lP : UA) / WA, fP = uP - rP, hP = fP > 0 ? fP : 0, dP = rP + hP, pP = r2 - aP, bP = pP - aP, gP = bP + nP, vP = iP - uP, mP = gP - hP;
        o2 = "M 0,".concat(a2, " L 0,").concat(uP, " ").concat(jf(uP, uP, uP, uP, 180, 270, false).replace("M", "L"), " L ").concat(vP, ",0 ").concat(jf(vP, uP, uP, uP, 270, 360, false).replace("M", "L"), " L ").concat(iP, ",").concat(cP, " L ").concat(r2, ",").concat(cP, " L ").concat(pP, ",").concat(oP, " L ").concat(bP, ",").concat(cP, " L ").concat(gP, ",").concat(cP, " L ").concat(gP, ",").concat(dP, " ").concat(jf(mP, dP, hP, hP, 0, -90, false).replace("M", "L"), " L ").concat(dP, ",").concat(rP, " ").concat(jf(dP, dP, hP, hP, 270, 180, false).replace("M", "L"), " L ").concat(rP, ",").concat(a2, " z");
        break;
      case "stripedRightArrow":
        var yP = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), LP = 3.9370078740157477, wP = 3.9370078740157477, _P = 7.874015748031495;
        if (yP) {
          var kP, MP = Tf(yP);
          try {
            for (MP.s(); !(kP = MP.n()).done; ) {
              var xP = kP.value, SP = ml(xP, ["attrs", "name"]);
              "adj1" === SP ? LP = parseInt(ml(xP, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === SP && (wP = parseInt(ml(xP, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            MP.e(t3);
          } finally {
            MP.f();
          }
        }
        var IP = a2 / 2, CP = Math.min(r2, a2), AP = 6.643700787401574 * r2 / CP, PP = 5 * CP / 32, EP = r2 - CP * (wP < 0 ? 0 : wP > AP ? AP : wP) / _P, RP = a2 * (LP < 0 ? 0 : LP > _P ? _P : LP) / 15.74803149606299, TP = IP - RP, OP = IP + RP, jP = CP / 8, zP = CP / 16, BP = CP / 32;
        o2 = "M 0,".concat(TP, " L ").concat(BP, ",").concat(TP, " L ").concat(BP, ",").concat(OP, " L 0,").concat(OP, " z M ").concat(zP, ",").concat(TP, " L ").concat(jP, ",").concat(TP, " L ").concat(jP, ",").concat(OP, " L ").concat(zP, ",").concat(OP, " z M ").concat(PP, ",").concat(TP, " L ").concat(EP, ",").concat(TP, " L ").concat(EP, ",0 L ").concat(r2, ",").concat(IP, " L ").concat(EP, ",").concat(a2, " L ").concat(EP, ",").concat(OP, " L ").concat(PP, ",").concat(OP, " z");
        break;
      case "notchedRightArrow":
        var DP = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), FP = 3.9370078740157477, NP = 3.9370078740157477, UP = 7.874015748031495;
        if (DP) {
          var GP, qP = Tf(DP);
          try {
            for (qP.s(); !(GP = qP.n()).done; ) {
              var WP = GP.value, HP = ml(WP, ["attrs", "name"]);
              "adj1" === HP ? FP = parseInt(ml(WP, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === HP && (NP = parseInt(ml(WP, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            qP.e(t3);
          } finally {
            qP.f();
          }
        }
        var ZP = a2 / 2, YP = ZP, VP = Math.min(r2, a2), QP = UP * r2 / VP, $P = VP * (NP < 0 ? 0 : NP > QP ? QP : NP) / UP, KP = r2 - $P, XP = a2 * (FP < 0 ? 0 : FP > UP ? UP : FP) / 15.74803149606299, JP = ZP - XP, tE = ZP + XP, eE = XP * $P / YP;
        o2 = "M 0,".concat(JP, " L ").concat(KP, ",").concat(JP, " L ").concat(KP, ",0 L ").concat(r2, ",").concat(ZP, " L ").concat(KP, ",").concat(a2, " L ").concat(KP, ",").concat(tE, " L 0,").concat(tE, " L ").concat(eE, ",").concat(ZP, " z");
        break;
      case "homePlate":
        var rE = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), aE = 3.9370078740157477, nE = 7.874015748031495;
        rE && (aE = parseInt(rE.substring(4)) * xu);
        var oE = a2 / 2, cE = Math.min(r2, a2), iE = nE * r2 / cE, sE = r2 - cE * (aE < 0 ? 0 : aE > iE ? iE : aE) / nE;
        o2 = "M 0,0 L ".concat(sE, ",0 L ").concat(r2, ",").concat(oE, " L ").concat(sE, ",").concat(a2, " L 0,").concat(a2, " z");
        break;
      case "chevron":
        var lE = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), uE = 3.9370078740157477, fE = 7.874015748031495;
        lE && (uE = parseInt(lE.substring(4)) * xu);
        var hE = a2 / 2, dE = Math.min(r2, a2), pE = fE * r2 / dE, bE = dE * (uE < 0 ? 0 : uE > pE ? pE : uE) / fE, gE = r2 - bE;
        o2 = "M 0,0 L ".concat(gE, ",0 L ").concat(r2, ",").concat(hE, " L ").concat(gE, ",").concat(a2, " L 0,").concat(a2, " L ").concat(bE, ",").concat(hE, " z");
        break;
      case "rightArrowCallout":
        var vE = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), mE = 1.9685039370078738, yE = 1.9685039370078738, LE = 1.9685039370078738, wE = 5.116299212598425, _E = 7.874015748031495;
        if (vE) {
          var kE, ME = Tf(vE);
          try {
            for (ME.s(); !(kE = ME.n()).done; ) {
              var xE = kE.value, SE = ml(xE, ["attrs", "name"]);
              "adj1" === SE ? mE = parseInt(ml(xE, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === SE ? yE = parseInt(ml(xE, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === SE ? LE = parseInt(ml(xE, ["attrs", "fmla"]).substring(4)) * xu : "adj4" === SE && (wE = parseInt(ml(xE, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            ME.e(t3);
          } finally {
            ME.f();
          }
        }
        var IE = a2 / 2, CE = r2, AE = a2, PE = Math.min(r2, a2), EE = 3.9370078740157477 * a2 / PE, RE = yE < 0 ? 0 : yE > EE ? EE : yE, TE = 2 * RE, OE = _E * r2 / PE, jE = LE < 0 ? 0 : LE > OE ? OE : LE, zE = _E - jE * PE / r2, BE = PE * RE / _E, DE = PE * (mE < 0 ? 0 : mE > TE ? TE : mE) / 15.74803149606299, FE = IE - BE, NE = IE - DE, UE = IE + DE, GE = IE + BE, qE = CE - PE * jE / _E, WE = r2 * (wE < 0 ? 0 : wE > zE ? zE : wE) / _E;
        o2 = "M ".concat(0, ",").concat(0, " L ").concat(WE, ",").concat(0, " L ").concat(WE, ",").concat(NE, " L ").concat(qE, ",").concat(NE, " L ").concat(qE, ",").concat(FE, " L ").concat(CE, ",").concat(IE, " L ").concat(qE, ",").concat(GE, " L ").concat(qE, ",").concat(UE, " L ").concat(WE, ",").concat(UE, " L ").concat(WE, ",").concat(AE, " L ").concat(0, ",").concat(AE, " z");
        break;
      case "downArrowCallout":
        var HE = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), ZE = 1.9685039370078738, YE = 1.9685039370078738, VE = 1.9685039370078738, QE = 5.116299212598425, $E = 7.874015748031495;
        if (HE) {
          var KE, XE = Tf(HE);
          try {
            for (XE.s(); !(KE = XE.n()).done; ) {
              var JE = KE.value, tR = ml(JE, ["attrs", "name"]);
              "adj1" === tR ? ZE = parseInt(ml(JE, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === tR ? YE = parseInt(ml(JE, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === tR ? VE = parseInt(ml(JE, ["attrs", "fmla"]).substring(4)) * xu : "adj4" === tR && (QE = parseInt(ml(JE, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            XE.e(t3);
          } finally {
            XE.f();
          }
        }
        var eR = r2 / 2, rR = r2, aR = a2, nR = Math.min(r2, a2), oR = 3.9370078740157477 * r2 / nR, cR = YE < 0 ? 0 : YE > oR ? oR : YE, iR = 2 * cR, sR = $E * a2 / nR, lR = VE < 0 ? 0 : VE > sR ? sR : VE, uR = $E - lR * nR / a2, fR = nR * cR / $E, hR = nR * (ZE < 0 ? 0 : ZE > iR ? iR : ZE) / 15.74803149606299, dR = eR - fR, pR = eR - hR, bR = eR + hR, gR = eR + fR, vR = aR - nR * lR / $E, mR = a2 * (QE < 0 ? 0 : QE > uR ? uR : QE) / $E;
        o2 = "M ".concat(0, ",").concat(0, " L ").concat(rR, ",").concat(0, " L ").concat(rR, ",").concat(mR, " L ").concat(bR, ",").concat(mR, " L ").concat(bR, ",").concat(vR, " L ").concat(gR, ",").concat(vR, " L ").concat(eR, ",").concat(aR, " L ").concat(dR, ",").concat(vR, " L ").concat(pR, ",").concat(vR, " L ").concat(pR, ",").concat(mR, " L ").concat(0, ",").concat(mR, " z");
        break;
      case "leftArrowCallout":
        var yR = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), LR = 1.9685039370078738, wR = 1.9685039370078738, _R = 1.9685039370078738, kR = 5.116299212598425, MR = 7.874015748031495;
        if (yR) {
          var xR, SR = Tf(yR);
          try {
            for (SR.s(); !(xR = SR.n()).done; ) {
              var IR = xR.value, CR = ml(IR, ["attrs", "name"]);
              "adj1" === CR ? LR = parseInt(ml(IR, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === CR ? wR = parseInt(ml(IR, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === CR ? _R = parseInt(ml(IR, ["attrs", "fmla"]).substring(4)) * xu : "adj4" === CR && (kR = parseInt(ml(IR, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            SR.e(t3);
          } finally {
            SR.f();
          }
        }
        var AR = a2 / 2, PR = r2, ER = a2, RR = Math.min(r2, a2), TR = 3.9370078740157477 * a2 / RR, OR = wR < 0 ? 0 : wR > TR ? TR : wR, jR = 2 * OR, zR = MR * r2 / RR, BR = _R < 0 ? 0 : _R > zR ? zR : _R, DR = MR - BR * RR / r2, FR = RR * OR / MR, NR = RR * (LR < 0 ? 0 : LR > jR ? jR : LR) / 15.74803149606299, UR = AR - FR, GR = AR - NR, qR = AR + NR, WR = AR + FR, HR = RR * BR / MR, ZR = PR - r2 * (kR < 0 ? 0 : kR > DR ? DR : kR) / MR;
        o2 = "M ".concat(0, ",").concat(AR, " L ").concat(HR, ",").concat(UR, " L ").concat(HR, ",").concat(GR, " L ").concat(ZR, ",").concat(GR, " L ").concat(ZR, ",").concat(0, " L ").concat(PR, ",").concat(0, " L ").concat(PR, ",").concat(ER, " L ").concat(ZR, ",").concat(ER, " L ").concat(ZR, ",").concat(qR, " L ").concat(HR, ",").concat(qR, " L ").concat(HR, ",").concat(WR, " z");
        break;
      case "upArrowCallout":
        var YR = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), VR = 1.9685039370078738, QR = 1.9685039370078738, $R = 1.9685039370078738, KR = 5.116299212598425, XR = 7.874015748031495;
        if (YR) {
          var JR, tT = Tf(YR);
          try {
            for (tT.s(); !(JR = tT.n()).done; ) {
              var eT = JR.value, rT = ml(eT, ["attrs", "name"]);
              "adj1" === rT ? VR = parseInt(ml(eT, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === rT ? QR = parseInt(ml(eT, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === rT ? $R = parseInt(ml(eT, ["attrs", "fmla"]).substring(4)) * xu : "adj4" === rT && (KR = parseInt(ml(eT, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            tT.e(t3);
          } finally {
            tT.f();
          }
        }
        var aT = r2 / 2, nT = r2, oT = a2, cT = Math.min(r2, a2), iT = 3.9370078740157477 * r2 / cT, sT = QR < 0 ? 0 : QR > iT ? iT : QR, lT = 2 * sT, uT = XR * a2 / cT, fT = $R < 0 ? 0 : $R > uT ? uT : $R, hT = XR - fT * cT / a2, dT = cT * sT / XR, pT = cT * (VR < 0 ? 0 : VR > lT ? lT : VR) / 15.74803149606299, bT = aT - dT, gT = aT - pT, vT = aT + pT, mT = aT + dT, yT = cT * fT / XR, LT = oT - a2 * (KR < 0 ? 0 : KR > hT ? hT : KR) / XR;
        o2 = "M ".concat(0, ",").concat(LT, " L ").concat(gT, ",").concat(LT, " L ").concat(gT, ",").concat(yT, " L ").concat(bT, ",").concat(yT, " L ").concat(aT, ",").concat(0, " L ").concat(mT, ",").concat(yT, " L ").concat(vT, ",").concat(yT, " L ").concat(vT, ",").concat(LT, " L ").concat(nT, ",").concat(LT, " L ").concat(nT, ",").concat(oT, " L ").concat(0, ",").concat(oT, " z");
        break;
      case "leftRightArrowCallout":
        var wT = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), _T = 1.9685039370078738, kT = 1.9685039370078738, MT = 1.9685039370078738, xT = 3.7892125984251965, ST = 3.9370078740157477, IT = 7.874015748031495, CT = 15.74803149606299;
        if (wT) {
          var AT, PT = Tf(wT);
          try {
            for (PT.s(); !(AT = PT.n()).done; ) {
              var ET = AT.value, RT = ml(ET, ["attrs", "name"]);
              "adj1" === RT ? _T = parseInt(ml(ET, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === RT ? kT = parseInt(ml(ET, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === RT ? MT = parseInt(ml(ET, ["attrs", "fmla"]).substring(4)) * xu : "adj4" === RT && (xT = parseInt(ml(ET, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            PT.e(t3);
          } finally {
            PT.f();
          }
        }
        var TT = a2 / 2, OT = r2 / 2, jT = r2, zT = a2, BT = Math.min(r2, a2), DT = ST * a2 / BT, FT = kT < 0 ? 0 : kT > DT ? DT : kT, NT = 2 * FT, UT = ST * r2 / BT, GT = MT < 0 ? 0 : MT > UT ? UT : MT, qT = IT - GT * BT / (r2 / 2), WT = BT * FT / IT, HT = BT * (_T < 0 ? 0 : _T > NT ? NT : _T) / CT, ZT = TT - WT, YT = TT - HT, VT = TT + HT, QT = TT + WT, $T = BT * GT / IT, KT = jT - $T, XT = r2 * (xT < 0 ? 0 : xT > qT ? qT : xT) / CT, JT = OT - XT, tO = OT + XT;
        o2 = "M ".concat(0, ",").concat(TT, " L ").concat($T, ",").concat(ZT, " L ").concat($T, ",").concat(YT, " L ").concat(JT, ",").concat(YT, " L ").concat(JT, ",").concat(0, " L ").concat(tO, ",").concat(0, " L ").concat(tO, ",").concat(YT, " L ").concat(KT, ",").concat(YT, " L ").concat(KT, ",").concat(ZT, " L ").concat(jT, ",").concat(TT, " L ").concat(KT, ",").concat(QT, " L ").concat(KT, ",").concat(VT, " L ").concat(tO, ",").concat(VT, " L ").concat(tO, ",").concat(zT, " L ").concat(JT, ",").concat(zT, " L ").concat(JT, ",").concat(VT, " L ").concat($T, ",").concat(VT, " L ").concat($T, ",").concat(QT, " z");
        break;
      case "quadArrowCallout":
        var eO = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), rO = 1.4578740157480314, aO = 1.4578740157480314, nO = 1.4578740157480314, oO = 3.7892125984251965, cO = 3.9370078740157477, iO = 7.874015748031495, sO = 15.74803149606299;
        if (eO) {
          var lO, uO = Tf(eO);
          try {
            for (uO.s(); !(lO = uO.n()).done; ) {
              var fO = lO.value, hO = ml(fO, ["attrs", "name"]);
              "adj1" === hO ? rO = parseInt(ml(fO, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === hO ? aO = parseInt(ml(fO, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === hO ? nO = parseInt(ml(fO, ["attrs", "fmla"]).substring(4)) * xu : "adj4" === hO && (oO = parseInt(ml(fO, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            uO.e(t3);
          } finally {
            uO.f();
          }
        }
        var dO = a2 / 2, pO = r2 / 2, bO = r2, gO = a2, vO = Math.min(r2, a2), mO = aO < 0 ? 0 : aO > cO ? cO : aO, yO = 2 * mO, LO = rO < 0 ? 0 : rO > yO ? yO : rO, wO = cO - mO, _O = nO < 0 ? 0 : nO > wO ? wO : nO, kO = iO - 2 * _O, MO = oO < LO ? LO : oO > kO ? kO : oO, xO = vO * mO / iO, SO = vO * LO / sO, IO = vO * _O / iO, CO = r2 * MO / sO, AO = a2 * MO / sO, PO = bO - IO, EO = pO - CO, RO = pO + CO, TO = pO - xO, OO = pO + xO, jO = pO - SO, zO = pO + SO, BO = gO - IO, DO = dO - AO, FO = dO + AO, NO = dO - xO, UO = dO + xO, GO = dO - SO, qO = dO + SO;
        o2 = "M ".concat(0, ",").concat(dO, " L ").concat(IO, ",").concat(NO, " L ").concat(IO, ",").concat(GO, " L ").concat(EO, ",").concat(GO, " L ").concat(EO, ",").concat(DO, " L ").concat(jO, ",").concat(DO, " L ").concat(jO, ",").concat(IO, " L ").concat(TO, ",").concat(IO, " L ").concat(pO, ",").concat(0, " L ").concat(OO, ",").concat(IO, " L ").concat(zO, ",").concat(IO, " L ").concat(zO, ",").concat(DO, " L ").concat(RO, ",").concat(DO, " L ").concat(RO, ",").concat(GO, " L ").concat(PO, ",").concat(GO, " L ").concat(PO, ",").concat(NO, " L ").concat(bO, ",").concat(dO, " L ").concat(PO, ",").concat(UO, " L ").concat(PO, ",").concat(qO, " L ").concat(RO, ",").concat(qO, " L ").concat(RO, ",").concat(FO, " L ").concat(zO, ",").concat(FO, " L ").concat(zO, ",").concat(BO, " L ").concat(OO, ",").concat(BO, " L ").concat(pO, ",").concat(gO, " L ").concat(TO, ",").concat(BO, " L ").concat(jO, ",").concat(BO, " L ").concat(jO, ",").concat(FO, " L ").concat(EO, ",").concat(FO, " L ").concat(EO, ",").concat(qO, " L ").concat(IO, ",").concat(qO, " L ").concat(IO, ",").concat(UO, " z");
        break;
      case "curvedDownArrow":
        var WO = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), HO = 1.9685039370078738, ZO = 3.9370078740157477, YO = 1.9685039370078738, VO = 7.874015748031495;
        if (WO) {
          var QO, $O = Tf(WO);
          try {
            for ($O.s(); !(QO = $O.n()).done; ) {
              var KO = QO.value, XO = ml(KO, ["attrs", "name"]);
              "adj1" === XO ? HO = parseInt(ml(KO, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === XO ? ZO = parseInt(ml(KO, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === XO && (YO = parseInt(ml(KO, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            $O.e(t3);
          } finally {
            $O.f();
          }
        }
        var JO = r2 / 2, tj = r2, ej = a2, rj = 270, aj = Math.min(r2, a2), nj = 3.9370078740157477 * r2 / aj, oj = aj * (HO < 0 ? 0 : HO > VO ? VO : HO) / VO, cj = aj * (ZO < 0 ? 0 : ZO > nj ? nj : ZO) / VO, ij = JO - (oj + cj) / 4, sj = 2 * ij, lj = Math.sqrt(sj * sj - oj * oj) * a2 / sj, uj = VO * lj / aj, fj = aj * (YO < 0 ? 0 : YO > uj ? uj : YO) / VO, hj = ij + oj, dj = Math.sqrt(a2 * a2 - fj * fj) * ij / a2, pj = ij + dj, bj = (cj - oj) / 2, gj = pj - bj, vj = hj + dj + bj, mj = tj - cj / 2, yj = ej - fj, Lj = 180 * Math.atan(dj / fj) / Math.PI, wj = -Lj, _j = 180 * Math.atan(oj / 2 / lj) / Math.PI, kj = rj + Lj, Mj = rj - _j, xj = _j - 90, Sj = 90 + _j;
        o2 = "M ".concat(mj, ",").concat(ej, " L ").concat(gj, ",").concat(yj, " L ").concat(pj, ",").concat(yj, " ").concat(jf(ij, a2, ij, a2, kj, kj + wj, false).replace("M", "L"), " L ").concat(hj, ",").concat(0, " ").concat(jf(hj, a2, ij, a2, rj, rj + Lj, false).replace("M", "L"), " L ").concat(pj + oj, ",").concat(yj, " L ").concat(vj, ",").concat(yj, " z M ").concat(hj, ",").concat(0, " ").concat(jf(hj, a2, ij, a2, Mj, Mj + xj, false).replace("M", "L"), " ").concat(jf(ij, a2, ij, a2, 180, 180 + Sj, false).replace("M", "L"));
        break;
      case "curvedLeftArrow":
        var Ij = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), Cj = 1.9685039370078738, Aj = 3.9370078740157477, Pj = 1.9685039370078738, Ej = 7.874015748031495;
        if (Ij) {
          var Rj, Tj = Tf(Ij);
          try {
            for (Tj.s(); !(Rj = Tj.n()).done; ) {
              var Oj = Rj.value, jj = ml(Oj, ["attrs", "name"]);
              "adj1" === jj ? Cj = parseInt(ml(Oj, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === jj ? Aj = parseInt(ml(Oj, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === jj && (Pj = parseInt(ml(Oj, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            Tj.e(t3);
          } finally {
            Tj.f();
          }
        }
        var zj = a2 / 2, Bj = r2, Dj = a2, Fj = 270, Nj = Math.min(r2, a2), Uj = 3.9370078740157477 * a2 / Nj, Gj = Aj < 0 ? 0 : Aj > Uj ? Uj : Aj, qj = Nj * (Cj < 0 ? 0 : Cj > Gj ? Gj : Cj) / Ej, Wj = Nj * Gj / Ej, Hj = zj - (qj + Wj) / 4, Zj = 2 * Hj, Yj = Math.sqrt(Zj * Zj - qj * qj) * r2 / Zj, Vj = Ej * Yj / Nj, Qj = Nj * (Pj < 0 ? 0 : Pj > Vj ? Vj : Pj) / Ej, $j = Hj + qj, Kj = Math.sqrt(r2 * r2 - Qj * Qj) * Hj / r2, Xj = Hj + Kj, Jj = $j + Kj, tz = (Wj - qj) / 2, ez = Xj - tz, rz = Jj + tz, az = Dj - Wj / 2, nz = 0 + Qj, oz = Math.atan(Kj / Qj), cz = Math.atan(qj / 2 / Yj) - oz, iz = 180 * oz / Math.PI, sz = 180 * cz / Math.PI;
        o2 = "M ".concat(Bj, ",").concat($j, " ").concat(jf(0, Hj, r2, Hj, 0, -90, false).replace("M", "L"), " L ").concat(0, ",").concat(0, " ").concat(jf(0, $j, r2, Hj, Fj, 360, false).replace("M", "L"), " L ").concat(Bj, ",").concat($j, " ").concat(jf(0, $j, r2, Hj, 0, iz, false).replace("M", "L"), " L ").concat(nz, ",").concat(Jj, " L ").concat(nz, ",").concat(rz, " L ").concat(0, ",").concat(az, " L ").concat(nz, ",").concat(ez, " L ").concat(nz, ",").concat(Xj, " ").concat(jf(0, Hj, r2, Hj, iz, iz + sz, false).replace("M", "L"), " ").concat(jf(0, Hj, r2, Hj, 0, -90, false).replace("M", "L"), " ").concat(jf(0, $j, r2, Hj, Fj, 360, false).replace("M", "L"));
        break;
      case "curvedRightArrow":
        var lz = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), uz = 1.9685039370078738, fz = 3.9370078740157477, hz = 1.9685039370078738, dz = 7.874015748031495;
        if (lz) {
          var pz, bz = Tf(lz);
          try {
            for (bz.s(); !(pz = bz.n()).done; ) {
              var gz = pz.value, vz = ml(gz, ["attrs", "name"]);
              "adj1" === vz ? uz = parseInt(ml(gz, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === vz ? fz = parseInt(ml(gz, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === vz && (hz = parseInt(ml(gz, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            bz.e(t3);
          } finally {
            bz.f();
          }
        }
        var mz = a2 / 2, yz = r2, Lz = a2, wz = 180, _z = Math.min(r2, a2), kz = 3.9370078740157477 * a2 / _z, Mz = fz < 0 ? 0 : fz > kz ? kz : fz, xz = _z * (uz < 0 ? 0 : uz > Mz ? Mz : uz) / dz, Sz = _z * Mz / dz, Iz = mz - (xz + Sz) / 4, Cz = 2 * Iz, Az = Math.sqrt(Cz * Cz - xz * xz) * r2 / Cz, Pz = dz * Az / _z, Ez = _z * (hz < 0 ? 0 : hz > Pz ? Pz : hz) / dz, Rz = Iz + xz, Tz = Math.sqrt(r2 * r2 - Ez * Ez) * Iz / r2, Oz = Iz + Tz, jz = Rz + Tz, zz = (Sz - xz) / 2, Bz = Oz - zz, Dz = jz + zz, Fz = Lz - Sz / 2, Nz = yz - Ez, Uz = Math.atan(Tz / Ez), Gz = Math.PI - Uz, qz = -Uz, Wz = Math.atan(xz / 2 / Az) - Math.PI / 2, Hz = 180 * Gz / Math.PI, Zz = 180 * qz / Math.PI, Yz = 180 * Uz / Math.PI, Vz = 180 * Wz / Math.PI;
        o2 = "M ".concat(0, ",").concat(Iz, " ").concat(jf(r2, Iz, r2, Iz, wz, wz + Zz, false).replace("M", "L"), " L ").concat(Nz, ",").concat(Oz, " L ").concat(Nz, ",").concat(Bz, " L ").concat(yz, ",").concat(Fz, " L ").concat(Nz, ",").concat(Dz, " L ").concat(Nz, ",").concat(jz, " ").concat(jf(r2, Rz, r2, Iz, Hz, Hz + Yz, false).replace("M", "L"), " L ").concat(0, ",").concat(Iz, " ").concat(jf(r2, Iz, r2, Iz, wz, 270, false).replace("M", "L"), " L ").concat(yz, ",").concat(xz, " ").concat(jf(r2, Rz, r2, Iz, 270, 270 + Vz, false).replace("M", "L"));
        break;
      case "curvedUpArrow":
        var Qz = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), $z = 1.9685039370078738, Kz = 3.9370078740157477, Xz = 1.9685039370078738, Jz = 7.874015748031495;
        if (Qz) {
          var tB, eB = Tf(Qz);
          try {
            for (eB.s(); !(tB = eB.n()).done; ) {
              var rB = tB.value, aB = ml(rB, ["attrs", "name"]);
              "adj1" === aB ? $z = parseInt(ml(rB, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === aB ? Kz = parseInt(ml(rB, ["attrs", "fmla"]).substring(4)) * xu : "adj3" === aB && (Xz = parseInt(ml(rB, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            eB.e(t3);
          } finally {
            eB.f();
          }
        }
        var nB = r2 / 2, oB = r2, cB = a2, iB = Math.min(r2, a2), sB = 3.9370078740157477 * r2 / iB, lB = iB * ($z < 0 ? 0 : $z > Jz ? Jz : $z) / Jz, uB = iB * (Kz < 0 ? 0 : Kz > sB ? sB : Kz) / Jz, fB = nB - (lB + uB) / 4, hB = 2 * fB, dB = Math.sqrt(hB * hB - lB * lB) * a2 / hB, pB = Jz * dB / iB, bB = iB * (Xz < 0 ? 0 : Xz > pB ? pB : Xz) / Jz, gB = fB + lB, vB = Math.sqrt(a2 * a2 - bB * bB) * fB / a2, mB = fB + vB, yB = gB + vB, LB = (uB - lB) / 2, wB = mB - LB, _B = yB + LB, kB = oB - uB / 2, MB = 0 + bB, xB = Math.atan(vB / bB), SB = Math.atan(lB / 2 / dB), IB = SB - xB, CB = Math.PI / 2 - xB, AB = 180 * (Math.PI / 2 - SB) / Math.PI, PB = 180 * IB / Math.PI, EB = 180 * CB / Math.PI, RB = 180 * xB / Math.PI;
        o2 = "".concat(jf(fB, 0, fB, a2, AB, AB + PB, false), " L ").concat(mB, ",").concat(MB, " L ").concat(wB, ",").concat(MB, " L ").concat(kB, ",").concat(0, " L ").concat(_B, ",").concat(MB, " L ").concat(yB, ",").concat(MB, " ").concat(jf(gB, 0, fB, a2, EB, EB + RB, false).replace("M", "L"), " L ").concat(fB, ",").concat(cB, " ").concat(jf(fB, 0, fB, a2, 90, 180, false).replace("M", "L"), " L ").concat(lB, ",").concat(0, " ").concat(jf(gB, 0, fB, a2, 180, 90, false).replace("M", "L"));
        break;
      case "mathDivide":
      case "mathEqual":
      case "mathMinus":
      case "mathMultiply":
      case "mathNotEqual":
      case "mathPlus":
        var TB, OB, jB, zB = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]);
        if (zB) if (Array.isArray(zB)) {
          var BB, DB = Tf(zB);
          try {
            for (DB.s(); !(BB = DB.n()).done; ) {
              var FB = BB.value, NB = ml(FB, ["attrs", "name"]);
              "adj1" === NB ? TB = parseInt(ml(FB, ["attrs", "fmla"]).substring(4)) : "adj2" === NB ? OB = parseInt(ml(FB, ["attrs", "fmla"]).substring(4)) : "adj3" === NB && (jB = parseInt(ml(FB, ["attrs", "fmla"]).substring(4)));
            }
          } catch (t3) {
            DB.e(t3);
          } finally {
            DB.f();
          }
        } else TB = parseInt(ml(zB, ["attrs", "fmla"]).substring(4));
        var UB = 3.9370078740157477, GB = 7.874015748031495, qB = 15.74803149606299, WB = r2 / 2, HB = a2 / 2, ZB = a2 / 2;
        if ("mathNotEqual" === t2) {
          void 0 === TB && (TB = 23520), void 0 === OB && (OB = 66e5), void 0 === jB && (jB = 11760), TB *= xu, OB = OB / 6e4 * Math.PI / 180, jB *= xu;
          var YB = 70 * Math.PI / 180, VB = 110 * Math.PI / 180, QB = TB < 0 ? 0 : TB > UB ? UB : TB, $B = GB - 2 * QB, KB = a2 * QB / GB, XB = a2 * (jB < 0 ? 0 : jB > $B ? $B : jB) / qB, JB = 5.7866141732283465 * r2 / qB, tD = WB - JB, eD = WB + JB, rD = HB - XB, aD = HB + XB, nD = rD - KB, oD = aD + KB, cD = (OB < YB ? YB : OB > VB ? VB : OB) - Math.PI / 2, iD = ZB * Math.tan(cD), sD = Math.sqrt(iD * iD + ZB * ZB), lD = sD * KB / ZB, uD = WB + iD - lD / 2, fD = uD - iD * nD / ZB, hD = uD - iD * rD / ZB, dD = uD - iD * aD / ZB, pD = uD - iD * oD / ZB, bD = fD + lD, gD = hD + lD, vD = dD + lD, mD = pD + lD, yD = KB * ZB / sD, LD = cD > 0 ? uD + yD : uD + lD, wD = cD > 0 ? uD : uD + lD - yD, _D = KB * iD / sD, kD = cD > 0 ? _D : 0, MD = cD > 0 ? 0 : -_D, xD = r2 - LD, SD = r2 - wD, ID = a2 - kD, CD = a2 - MD;
          o2 = "M ".concat(tD, ",").concat(nD, " L ").concat(fD, ",").concat(nD, " L ").concat(wD, ",").concat(MD, " L ").concat(LD, ",").concat(kD, " L ").concat(bD, ",").concat(nD, " L ").concat(eD, ",").concat(nD, " L ").concat(eD, ",").concat(rD, " L ").concat(gD, ",").concat(rD, " L ").concat(vD, ",").concat(aD, " L ").concat(eD, ",").concat(aD, " L ").concat(eD, ",").concat(oD, " L ").concat(mD, ",").concat(oD, " L ").concat(SD, ",").concat(CD, " L ").concat(xD, ",").concat(ID, " L ").concat(pD, ",").concat(oD, " L ").concat(tD, ",").concat(oD, " L ").concat(tD, ",").concat(aD, " L ").concat(dD, ",").concat(aD, " L ").concat(hD, ",").concat(rD, " L ").concat(tD, ",").concat(rD, " z");
        } else if ("mathDivide" === t2) {
          void 0 === TB && (TB = 23520), void 0 === OB && (OB = 5880), void 0 === jB && (jB = 11760);
          var AD = 0.07874015748031496, PD = 2.8933070866141732, ED = 5.7866141732283465, RD = (TB *= xu) < AD ? AD : TB > PD ? PD : TB, TD = (ED - RD) / 4, OD = PD * r2 / a2, jD = TD < OD ? TD : OD, zD = (jB *= xu) < AD ? AD : jB > jD ? jD : jB, BD = ED - 4 * zD - RD, DD = a2 * RD / qB, FD = a2 * zD / GB, ND = r2 * ED / qB, UD = HB - DD, GD = HB + DD, qD = UD - (a2 * ((OB *= xu) < 0 ? 0 : OB > BD ? BD : OB) / GB + FD) - FD, WD = a2 - qD, HD = WB - ND, ZD = WB + ND;
          o2 = "M ".concat(WB, ",").concat(qD, " A ").concat(FD, ",").concat(FD, " 0 1,0 ").concat(WB, ",").concat(qD + 2 * FD, " A ").concat(FD, ",").concat(FD, " 0 1,0 ").concat(WB, ",").concat(qD, " z M ").concat(WB, ",").concat(WD, " A ").concat(FD, ",").concat(FD, " 0 1,1 ").concat(WB, ",").concat(WD - 2 * FD, " A ").concat(FD, ",").concat(FD, " 0 1,1 ").concat(WB, ",").concat(WD, " z M ").concat(HD, ",").concat(UD, " L ").concat(ZD, ",").concat(UD, " L ").concat(ZD, ",").concat(GD, " L ").concat(HD, ",").concat(GD, " z");
        } else if ("mathEqual" === t2) {
          void 0 === TB && (TB = 23520), void 0 === OB && (OB = 11760);
          var YD = 2.8933070866141732, VD = (TB *= xu) < 0 ? 0 : TB > YD ? YD : TB, QD = GB - 2 * VD, $D = a2 * VD / GB, KD = a2 * ((OB *= xu) < 0 ? 0 : OB > QD ? QD : OB) / qB, XD = 5.7866141732283465 * r2 / qB, JD = HB - KD, tF = HB + KD, eF = JD - $D, rF = tF + $D, aF = WB - XD, nF = WB + XD;
          o2 = "M ".concat(aF, ",").concat(eF, " L ").concat(nF, ",").concat(eF, " L ").concat(nF, ",").concat(JD, " L ").concat(aF, ",").concat(JD, " z M ").concat(aF, ",").concat(tF, " L ").concat(nF, ",").concat(tF, " L ").concat(nF, ",").concat(rF, " L ").concat(aF, ",").concat(rF, " z");
        } else if ("mathMinus" === t2) {
          void 0 === TB && (TB = 23520);
          var oF = a2 * ((TB *= xu) < 0 ? 0 : TB > GB ? GB : TB) / qB, cF = 5.7866141732283465 * r2 / qB, iF = HB - oF, sF = HB + oF, lF = WB - cF, uF = WB + cF;
          o2 = "M ".concat(lF, ",").concat(iF, " L ").concat(uF, ",").concat(iF, " L ").concat(uF, ",").concat(sF, " L ").concat(lF, ",").concat(sF, " z");
        } else if ("mathMultiply" === t2) {
          void 0 === TB && (TB = 23520), TB *= xu;
          var fF = 4.091732283464567, hF = Math.min(r2, a2) * (TB < 0 ? 0 : TB > fF ? fF : TB) / GB, dF = Math.atan(a2 / r2), pF = Math.sin(dF), bF = Math.cos(dF), gF = Math.tan(dF), vF = Math.sqrt(r2 * r2 + a2 * a2), mF = vF - vF * fF / GB, yF = bF * mF / 2, LF = pF * mF / 2, wF = pF * hF / 2, _F = bF * hF / 2, kF = yF - wF, MF = LF + _F, xF = yF + wF, SF = LF - _F, IF = (WB - xF) * gF + SF, CF = r2 - xF, AF = r2 - kF, PF = AF - (HB - MF) / gF, EF = kF + (HB - MF) / gF, RF = a2 - MF, TF = a2 - SF, OF = a2 - IF;
          o2 = "M ".concat(kF, ",").concat(MF, " L ").concat(xF, ",").concat(SF, " L ").concat(WB, ",").concat(IF, " L ").concat(CF, ",").concat(SF, " L ").concat(AF, ",").concat(MF, " L ").concat(PF, ",").concat(HB, " L ").concat(AF, ",").concat(RF, " L ").concat(CF, ",").concat(TF, " L ").concat(WB, ",").concat(OF, " L ").concat(xF, ",").concat(TF, " L ").concat(kF, ",").concat(RF, " L ").concat(EF, ",").concat(HB, " z");
        } else if ("mathPlus" === t2) {
          void 0 === TB && (TB = 23520), TB *= xu;
          var jF = 5.7866141732283465, zF = Math.min(r2, a2), BF = r2 * jF / qB, DF = a2 * jF / qB, FF = zF * (TB < 0 ? 0 : TB > jF ? jF : TB) / qB, NF = WB - BF, UF = WB - FF, GF = WB + FF, qF = WB + BF, WF = HB - DF, HF = HB - FF, ZF = HB + FF, YF = HB + DF;
          o2 = "M ".concat(NF, ",").concat(HF, " L ").concat(UF, ",").concat(HF, " L ").concat(UF, ",").concat(WF, " L ").concat(GF, ",").concat(WF, " L ").concat(GF, ",").concat(HF, " L ").concat(qF, ",").concat(HF, " L ").concat(qF, ",").concat(ZF, " L ").concat(GF, ",").concat(ZF, " L ").concat(GF, ",").concat(YF, " L ").concat(UF, ",").concat(YF, " L ").concat(UF, ",").concat(ZF, " L ").concat(NF, ",").concat(ZF, " z");
        }
        break;
      case "can":
      case "flowChartMagneticDisk":
      case "flowChartMagneticDrum":
        var VF = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd", "attrs", "fmla"]), QF = 1.9685039370078738;
        VF && (QF = parseInt(VF.substring(4)) * xu), "flowChartMagneticDisk" !== t2 && "flowChartMagneticDrum" !== t2 || (QF = 3.9370078740157477);
        var $F = Math.min(r2, a2), KF = 3.9370078740157477 * a2 / $F, XF = $F * (QF < 0 ? 0 : QF > KF ? KF : QF) / 15.74803149606299, JF = a2 - XF, tN = 180, eN = r2 / 2, rN = "".concat(jf(eN, XF, eN, XF, 0, tN, false), " ").concat(jf(eN, XF, eN, XF, tN, 360, false).replace("M", "L"), " L ").concat(r2, ",").concat(JF, " ").concat(jf(eN, JF, eN, XF, 0, tN, false).replace("M", "L"), " L 0,").concat(XF);
        "flowChartMagneticDrum" === t2 && (rN = rN.replace(/([MLQC])\s*([-\d.e]+)\s*([-\d.e]+)/gi, (function(t3, e2, n3, o3) {
          var c3 = r2 / 2 - (parseFloat(o3) - a2 / 2), i3 = a2 / 2 + (parseFloat(n3) - r2 / 2);
          return "".concat(e2).concat(c3, " ").concat(i3);
        })).replace(/([MLQC])\s*([-\d.e]+)\s*([-\d.e]+)\s*([-\d.e]+)\s*([-\d.e]+)/gi, (function(t3, e2, n3, o3, c3, i3) {
          var s3 = r2 / 2 - (parseFloat(o3) - a2 / 2), l3 = a2 / 2 + (parseFloat(n3) - r2 / 2), u3 = r2 / 2 - (parseFloat(i3) - a2 / 2), f3 = a2 / 2 + (parseFloat(c3) - r2 / 2);
          return "".concat(e2).concat(s3, " ").concat(l3, " ").concat(u3, " ").concat(f3);
        }))), o2 = rN;
        break;
      case "swooshArrow":
        var aN = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), nN = xu, oN = 25e3 * nN, cN = 16667 * nN;
        if (aN) {
          var iN, sN = Tf(aN);
          try {
            for (sN.s(); !(iN = sN.n()).done; ) {
              var lN = iN.value, uN = ml(lN, ["attrs", "name"]);
              "adj1" === uN ? oN = parseInt(ml(lN, ["attrs", "fmla"]).substring(4)) * nN : "adj2" === uN && (cN = parseInt(ml(lN, ["attrs", "fmla"]).substring(4)) * nN);
            }
          } catch (t3) {
            sN.e(t3);
          } finally {
            sN.f();
          }
        }
        var fN = 1 * nN, hN = 75e3 * nN, dN = 1e5 * nN, pN = Math.min(r2, a2), bN = pN / 8, gN = a2 / 6, vN = 5.511811023622047 * r2 / pN, mN = a2 * (oN < fN ? fN : oN > hN ? hN : oN) / dN, yN = r2 - pN * (cN < 0 ? 0 : cN > vN ? vN : cN) / dN, LN = bN, wN = Math.PI / 2 / 14, _N = bN * Math.tan(wN), kN = yN - _N, MN = LN + mN, xN = yN + mN * Math.tan(wN), SN = xN + _N, IN = MN + bN, CN = IN / 2 - a2 / 20, AN = gN + gN, PN = r2 / 6, EN = MN + gN / 2, RN = r2 / 4;
        o2 = "M 0,".concat(a2, " Q ").concat(PN, ",").concat(AN, " ").concat(yN, ",").concat(LN, " L ").concat(kN, ",0 L ").concat(r2, ",").concat(CN, " L ").concat(SN, ",").concat(IN, " L ").concat(xN, ",").concat(MN, " Q ").concat(RN, ",").concat(EN, " 0,").concat(a2, " z");
        break;
      case "circularArrow":
        var TN = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), ON = 0.9842519685039369, jN = 19.03865 * Math.PI / 180, zN = 340.96135 * Math.PI / 180, BN = 180 * Math.PI / 180, DN = 0.9842519685039369;
        if (TN) {
          var FN, NN = Tf(TN);
          try {
            for (NN.s(); !(FN = NN.n()).done; ) {
              var UN = FN.value, GN = ml(UN, ["attrs", "name"]);
              "adj1" === GN ? ON = parseInt(ml(UN, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === GN ? jN = parseInt(ml(UN, ["attrs", "fmla"]).substring(4)) / 6e4 * Math.PI / 180 : "adj3" === GN ? zN = parseInt(ml(UN, ["attrs", "fmla"]).substring(4)) / 6e4 * Math.PI / 180 : "adj4" === GN ? BN = parseInt(ml(UN, ["attrs", "fmla"]).substring(4)) / 6e4 * Math.PI / 180 : "adj5" === GN && (DN = parseInt(ml(UN, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            NN.e(t3);
          } finally {
            NN.f();
          }
        }
        var qN = r2 / 2, WN = a2 / 2, HN = r2 / 2, ZN = a2 / 2, YN = Math.min(r2, a2), VN = 1.9685039370078738, QN = 7.874015748031495, $N = 1 / 6e4 * Math.PI / 180, KN = 21599999 / 6e4 * Math.PI / 180, XN = 2 * Math.PI, JN = DN < 0 ? 0 : DN > VN ? VN : DN, tU = 2 * JN, eU = zN < $N ? $N : zN > KN ? KN : zN, rU = BN < 0 ? 0 : BN > KN ? KN : BN, aU = YN * (ON < 0 ? 0 : ON > tU ? tU : ON) / QN, nU = YN * JN / QN, oU = aU / 2, cU = HN + oU - nU, iU = ZN + oU - nU, sU = cU - aU, lU = iU - aU, uU = sU + oU, fU = lU + oU, hU = uU * Math.sin(eU), dU = fU * Math.cos(eU), pU = uU * Math.cos(Math.atan2(hU, dU)), bU = fU * Math.sin(Math.atan2(hU, dU)), gU = qN + pU, vU = WN + bU, mU = Math.min(sU, lU), yU = 1 - (pU * pU - mU * mU) * (bU * bU - mU * mU) / (pU * pU * bU * bU), LU = (1 + Math.sqrt(yU)) / ((pU * pU - mU * mU) / pU / bU), wU = Math.atan2(LU, 1) > 0 ? Math.atan2(LU, 1) : Math.atan2(LU, 1) + XN, _U = wU - eU > 0 ? wU - eU : wU - eU + XN, kU = _U - Math.PI > 0 ? _U - XN : _U, MU = Math.abs(kU), xU = eU + (jN < 0 ? 0 : jN > MU ? MU : jN), SU = uU * Math.sin(xU), IU = fU * Math.cos(xU), CU = qN + uU * Math.cos(Math.atan2(SU, IU)), AU = WN + fU * Math.sin(Math.atan2(SU, IU)), PU = gU + nU * Math.cos(xU), EU = vU + nU * Math.sin(xU), RU = gU - nU * Math.cos(xU), TU = vU - nU * Math.sin(xU), OU = RU - qN, jU = TU - WN, zU = PU - qN, BU = EU - WN, DU = Math.min(cU, iU), FU = OU * DU / cU, NU = jU * DU / iU, UU = zU * DU / cU, GU = BU * DU / iU, qU = UU - FU, WU = GU - NU, HU = Math.sqrt(qU * qU + WU * WU), ZU = FU * GU - UU * NU, YU = Math.sqrt(Math.max(0, DU * DU * HU * HU - ZU * ZU)), VU = -1 * WU > 0 ? -1 : 1, QU = (ZU * WU + VU * qU * YU) / (HU * HU), $U = (ZU * WU - VU * qU * YU) / (HU * HU), KU = (-ZU * qU + Math.abs(WU) * YU) / (HU * HU), XU = (-ZU * qU - Math.abs(WU) * YU) / (HU * HU), JU = Math.sqrt(Math.pow(UU - $U, 2) + Math.pow(GU - XU, 2)) - Math.sqrt(Math.pow(UU - QU, 2) + Math.pow(GU - KU, 2)), tG = qN + (JU > 0 ? QU : $U) * cU / DU, eG = WN + (JU > 0 ? KU : XU) * iU / DU, rG = OU * mU / sU, aG = jU * mU / lU, nG = zU * mU / sU, oG = BU * mU / lU, cG = nG - rG, iG = oG - aG, sG = Math.sqrt(cG * cG + iG * iG), lG = rG * oG - nG * aG, uG = Math.sqrt(Math.max(0, mU * mU * sG * sG - lG * lG)), fG = (lG * iG + VU * cG * uG) / (sG * sG), hG = (lG * iG - VU * cG * uG) / (sG * sG), dG = (-lG * cG + Math.abs(iG) * uG) / (sG * sG), pG = (-lG * cG - Math.abs(iG) * uG) / (sG * sG), bG = Math.sqrt(Math.pow(rG - hG, 2) + Math.pow(aG - pG, 2)) - Math.sqrt(Math.pow(rG - fG, 2) + Math.pow(aG - dG, 2)), gG = bG > 0 ? fG : hG, vG = bG > 0 ? dG : pG, mG = qN + gG * sU / mU, yG = WN + vG * lU / mU, LG = Math.atan2(vG * lU / mU, gG * sU / mU), wG = LG > 0 ? LG : LG + XN, _G = rU - wG, kG = _G > 0 ? _G - XN : _G, MG = Math.sqrt(Math.pow(tG - mG, 2) + Math.pow(eG - yG, 2)) / 2 - nU, xG = MG > 0 ? tG : PU, SG = MG > 0 ? eG : EU, IG = MG > 0 ? mG : RU, CG = MG > 0 ? yG : TU, AG = Math.atan2(eG - WN, tG - qN), PG = (AG > 0 ? AG : AG + XN) - rU, EG = PG > 0 ? PG : PG + XN, RG = 180 * rU / Math.PI, TG = RG + 180 * EG / Math.PI, OG = 180 * wG / Math.PI, jG = OG + 180 * kG / Math.PI;
        o2 = "".concat(jf(r2 / 2, a2 / 2, cU, iU, RG, TG, false), " L ").concat(xG, ",").concat(SG, " L ").concat(CU, ",").concat(AU, " L ").concat(IG, ",").concat(CG, " L ").concat(mG, ",").concat(yG, " ").concat(jf(r2 / 2, a2 / 2, sU, lU, OG, jG, false).replace("M", "L"), " z");
        break;
      case "leftCircularArrow":
        var zG = ml(n2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]), BG = 0.9842519685039369, DG = -19.03865 * Math.PI / 180, FG = 19.03865 * Math.PI / 180, NG = 180 * Math.PI / 180, UG = 0.9842519685039369;
        if (zG) {
          var GG, qG = Tf(zG);
          try {
            for (qG.s(); !(GG = qG.n()).done; ) {
              var WG = GG.value, HG = ml(WG, ["attrs", "name"]);
              "adj1" === HG ? BG = parseInt(ml(WG, ["attrs", "fmla"]).substring(4)) * xu : "adj2" === HG ? DG = parseInt(ml(WG, ["attrs", "fmla"]).substring(4)) / 6e4 * Math.PI / 180 : "adj3" === HG ? FG = parseInt(ml(WG, ["attrs", "fmla"]).substring(4)) / 6e4 * Math.PI / 180 : "adj4" === HG ? NG = parseInt(ml(WG, ["attrs", "fmla"]).substring(4)) / 6e4 * Math.PI / 180 : "adj5" === HG && (UG = parseInt(ml(WG, ["attrs", "fmla"]).substring(4)) * xu);
            }
          } catch (t3) {
            qG.e(t3);
          } finally {
            qG.f();
          }
        }
        var ZG = r2 / 2, YG = a2 / 2, VG = r2 / 2, QG = a2 / 2, $G = Math.min(r2, a2), KG = 1.9685039370078738, XG = 7.874015748031495, JG = 1 / 6e4 * Math.PI / 180, tq = 21599999 / 6e4 * Math.PI / 180, eq = 2 * Math.PI, rq = UG < 0 ? 0 : UG > KG ? KG : UG, aq = 2 * rq, nq = FG < JG ? JG : FG > tq ? tq : FG, oq = NG < 0 ? 0 : NG > tq ? tq : NG, cq = $G * (BG < 0 ? 0 : BG > aq ? aq : BG) / XG, iq = $G * rq / XG, sq = cq / 2, lq = VG + sq - iq, uq = QG + sq - iq, fq = lq - cq, hq = uq - cq, dq = fq + sq, pq = hq + sq, bq = dq * Math.cos(nq), gq = pq * Math.sin(nq), vq = ZG + bq, mq = YG + gq, yq = Math.min(fq, hq), Lq = 1 - (bq * bq - yq * yq) * (gq * gq - yq * yq) / (bq * bq * gq * gq), wq = (1 + Math.sqrt(Lq)) / ((bq * bq - yq * yq) / bq / gq), _q = Math.atan2(wq, 1) > 0 ? Math.atan2(wq, 1) : Math.atan2(wq, 1) + eq, kq = _q - nq > 0 ? _q - nq : _q - nq + eq, Mq = kq - Math.PI > 0 ? kq - eq : kq, xq = -Math.abs(Mq), Sq = nq + (DG < xq ? xq : DG > 0 ? 0 : DG), Iq = ZG + dq * Math.cos(Sq), Cq = YG + pq * Math.sin(Sq), Aq = ZG + lq * Math.cos(oq), Pq = YG + uq * Math.sin(oq), Eq = ZG + fq * Math.cos(oq), Rq = YG + hq * Math.sin(oq), Tq = vq + iq * Math.cos(Sq), Oq = mq + iq * Math.sin(Sq), jq = vq - iq * Math.cos(Sq), zq = mq - iq * Math.sin(Sq), Bq = jq - ZG, Dq = zq - YG, Fq = Tq - ZG, Nq = Oq - YG, Uq = Math.min(lq, uq), Gq = Bq * Uq / lq, qq = Dq * Uq / uq, Wq = Fq * Uq / lq, Hq = Nq * Uq / uq, Zq = Wq - Gq, Yq = Hq - qq, Vq = Math.sqrt(Zq * Zq + Yq * Yq), Qq = Gq * Hq - Wq * qq, $q = Math.sqrt(Math.max(0, Uq * Uq * Vq * Vq - Qq * Qq)), Kq = -1 * Yq > 0 ? -1 : 1, Xq = (Qq * Yq + Kq * Zq * $q) / (Vq * Vq), Jq = (Qq * Yq - Kq * Zq * $q) / (Vq * Vq), tW = (-Qq * Zq + Math.abs(Yq) * $q) / (Vq * Vq), eW = (-Qq * Zq - Math.abs(Yq) * $q) / (Vq * Vq), rW = Math.sqrt(Math.pow(Wq - Jq, 2) + Math.pow(Hq - eW, 2)) - Math.sqrt(Math.pow(Wq - Xq, 2) + Math.pow(Hq - tW, 2)), aW = ZG + (rW > 0 ? Xq : Jq) * lq / Uq, nW = YG + (rW > 0 ? tW : eW) * uq / Uq, oW = Bq * yq / fq, cW = Dq * yq / hq, iW = Fq * yq / fq, sW = Nq * yq / hq, lW = iW - oW, uW = sW - cW, fW = Math.sqrt(lW * lW + uW * uW), hW = oW * sW - iW * cW, dW = Math.sqrt(Math.max(0, yq * yq * fW * fW - hW * hW)), pW = (hW * uW + Kq * lW * dW) / (fW * fW), bW = (hW * uW - Kq * lW * dW) / (fW * fW), gW = (-hW * lW + Math.abs(uW) * dW) / (fW * fW), vW = (-hW * lW - Math.abs(uW) * dW) / (fW * fW), mW = Math.sqrt(Math.pow(oW - bW, 2) + Math.pow(cW - vW, 2)) - Math.sqrt(Math.pow(oW - pW, 2) + Math.pow(cW - gW, 2)), yW = mW > 0 ? pW : bW, LW = mW > 0 ? gW : vW, wW = ZG + yW * fq / yq, _W = YG + LW * hq / yq, kW = Math.atan2(LW * hq / yq, yW * fq / yq), MW = kW > 0 ? kW : kW + eq, xW = oq - MW, SW = xW > 0 ? xW : xW + eq, IW = MW + SW, CW = -SW, AW = Math.sqrt(Math.pow(aW - wW, 2) + Math.pow(nW - _W, 2)) / 2 - iq, PW = AW > 0 ? aW : Tq, EW = AW > 0 ? nW : Oq, RW = AW > 0 ? wW : jq, TW = AW > 0 ? _W : zq, OW = Math.atan2(nW - YG, aW - ZG), jW = (OW > 0 ? OW : OW + eq) - oq, zW = 180 * (oq + (jW > 0 ? jW - eq : jW)) / Math.PI, BW = 180 * oq / Math.PI, DW = 180 * IW / Math.PI, FW = DW + 180 * CW / Math.PI;
        o2 = "M ".concat(Aq, ",").concat(Pq, " L ").concat(Eq, ",").concat(Rq, " ").concat(jf(r2 / 2, a2 / 2, fq, hq, DW, FW, false).replace("M", "L"), " L ").concat(RW, ",").concat(TW, " L ").concat(Iq, ",").concat(Cq, " L ").concat(PW, ",").concat(EW, " L ").concat(aW, ",").concat(nW, " ").concat(jf(r2 / 2, a2 / 2, lq, uq, zW, BW, false).replace("M", "L"), " z");
    }
    return o2;
  }
  function Bf(t2, e2) {
    if (!t2 || !e2) return null;
    var r2 = ml(t2, [e2, "p:transition"]);
    return r2 || ((r2 = ml(t2, [e2, "mc:AlternateContent", "mc:Choice", "p:transition"])) ? r2 : r2 = ml(t2, [e2, "mc:AlternateContent", "mc:Fallback", "p:transition"]));
  }
  function Df(t2) {
    if (!t2) return null;
    var e2 = { type: "none", duration: 1e3, direction: null }, r2 = t2.attrs || {}, a2 = false, n2 = /^p\d{2}:dur$/;
    for (var o2 in r2) if (n2.test(o2) && !isNaN(parseInt(r2[o2], 10))) {
      e2.duration = parseInt(r2[o2], 10), a2 = true;
      break;
    }
    if (!a2 && r2.spd) switch (r2.spd) {
      case "slow":
      default:
        e2.duration = 1e3;
        break;
      case "med":
        e2.duration = 800;
        break;
      case "fast":
        e2.duration = 500;
    }
    "0" === r2.advClick && r2.advTm && (e2.autoNextAfter = parseInt(r2.advTm, 10));
    var c2 = /^(p|p\d{2}):/;
    for (var i2 in t2) if ("attrs" !== i2 && c2.test(i2)) {
      var s2 = t2[i2];
      if (e2.type = i2.substring(i2.indexOf(":") + 1), s2 && s2.attrs) {
        var l2 = s2.attrs;
        l2.dur && !isNaN(parseInt(l2.dur, 10)) && (a2 || (e2.duration = parseInt(l2.dur, 10))), l2.dir && (e2.direction = l2.dir);
      }
      break;
    }
    return e2;
  }
  function Ff(t2, e2) {
    var r2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(t2);
      e2 && (a2 = a2.filter((function(e3) {
        return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
      }))), r2.push.apply(r2, a2);
    }
    return r2;
  }
  function Nf(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var a2 = null != arguments[e2] ? arguments[e2] : {};
      e2 % 2 ? Ff(Object(a2), true).forEach((function(e3) {
        r(t2, e3, a2[e3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(a2)) : Ff(Object(a2)).forEach((function(e3) {
        Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(a2, e3));
      }));
    }
    return t2;
  }
  function Uf(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return Gf(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return Gf(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function Gf(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function qf(t2, e2) {
    return Wf.apply(this, arguments);
  }
  function Wf() {
    return Wf = n(u.mark((function t2(e2, r2) {
      var a2, n2, o2, c2, i2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (a2 = i2.length > 2 && void 0 !== i2[2] && i2[2], r2) {
              t3.next = 3;
              break;
            }
            return t3.abrupt("return", null);
          case 3:
            if (n2 = "".concat(a2 ? "drawing:" : "xml:").concat(r2), !e2.diagramFileCache[n2]) {
              t3.next = 6;
              break;
            }
            return t3.abrupt("return", e2.diagramFileCache[n2]);
          case 6:
            return t3.next = 8, Ps(e2.zip, r2);
          case 8:
            return (o2 = t3.sent) && a2 && (c2 = JSON.stringify(o2).replace(/dsp:/g, "p:"), o2 = JSON.parse(c2)), e2.diagramFileCache[n2] = o2, t3.abrupt("return", o2);
          case 12:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Wf.apply(this, arguments);
  }
  function Hf(t2) {
    var e2 = ml(t2, ["dgm:dataModel", "dgm:extLst", "a:ext"]);
    if (!e2) return "";
    Array.isArray(e2) || (e2 = [e2]);
    var r2, a2 = Uf(e2);
    try {
      for (a2.s(); !(r2 = a2.n()).done; ) {
        var n2 = ml(r2.value, ["dsp:dataModelExt", "attrs", "relId"]);
        if (n2) return n2;
      }
    } catch (t3) {
      a2.e(t3);
    } finally {
      a2.f();
    }
    return "";
  }
  function Zf(t2, e2) {
    return Yf.apply(this, arguments);
  }
  function Yf() {
    return Yf = n(u.mark((function t2(e2, r2) {
      var a2, n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (a2 = ml(e2, ["a:graphic", "a:graphicData", "dgm:relIds", "attrs"]) || {}, n2 = { data: null, layout: null, quickStyle: null, colors: null, drawing: null }, o2 = {}, c2 = {}, i2 = ml(r2.slideResObj, [a2["r:dm"], "target"]), s2 = ml(r2.slideResObj, [a2["r:lo"], "target"]), l2 = ml(r2.slideResObj, [a2["r:qs"], "target"]), f2 = ml(r2.slideResObj, [a2["r:cs"], "target"]), !i2) {
              t3.next = 12;
              break;
            }
            return t3.next = 11, qf(r2, i2);
          case 11:
            n2.data = t3.sent;
          case 12:
            if (!s2) {
              t3.next = 16;
              break;
            }
            return t3.next = 15, qf(r2, s2);
          case 15:
            n2.layout = t3.sent;
          case 16:
            if (!l2) {
              t3.next = 20;
              break;
            }
            return t3.next = 19, qf(r2, l2);
          case 19:
            n2.quickStyle = t3.sent;
          case 20:
            if (!f2) {
              t3.next = 24;
              break;
            }
            return t3.next = 23, qf(r2, f2);
          case 23:
            n2.colors = t3.sent;
          case 24:
            if (h2 = n2.data ? Hf(n2.data) : "", !(d2 = ml(r2.slideResObj, [h2, "target"]))) {
              t3.next = 40;
              break;
            }
            return t3.next = 29, qf(r2, d2, true);
          case 29:
            if (t3.t0 = t3.sent, t3.t0) {
              t3.next = 32;
              break;
            }
            t3.t0 = {};
          case 32:
            return o2 = t3.t0, n2.drawing = o2, p2 = d2.split("/").pop(), b2 = d2.replace(p2, "_rels/" + p2) + ".rels", t3.next = 38, Ps(r2.zip, b2);
          case 38:
            if ((g2 = t3.sent) && ((v2 = g2.Relationships.Relationship) && v2.constructor !== Array && (v2 = [v2]), v2)) {
              m2 = Uf(v2);
              try {
                for (m2.s(); !(y2 = m2.n()).done; ) L2 = y2.value, w2 = -1 !== (w2 = L2.attrs.Target).indexOf("../") ? w2.replace("../", "ppt/") : d2.replace(p2, "") + w2, c2[L2.attrs.Id] = { type: L2.attrs.Type.replace("http://schemas.openxmlformats.org/officeDocument/2006/relationships/", ""), target: w2 };
              } catch (t4) {
                m2.e(t4);
              } finally {
                m2.f();
              }
            }
          case 40:
            return t3.abrupt("return", Nf(Nf({}, r2), {}, { digramFileContent: o2, diagramResObj: c2, diagramContent: n2 }));
          case 41:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Yf.apply(this, arguments);
  }
  function Vf(t2) {
    var e2 = [], r2 = ml(t2, ["dgm:dataModel", "dgm:ptLst", "dgm:pt"]);
    if (!r2) return e2;
    Array.isArray(r2) || (r2 = [r2]);
    var a2, n2 = Uf(r2);
    try {
      for (n2.s(); !(a2 = n2.n()).done; ) {
        var o2 = ml(a2.value, ["dgm:t"]);
        o2 && (function() {
          var t3 = "", r3 = ml(o2, ["a:p"]);
          r3 && (Array.isArray(r3) || (r3 = [r3]), r3.forEach((function(e3) {
            var r4 = ml(e3, ["a:r"]);
            r4 && (Array.isArray(r4) || (r4 = [r4]), r4.forEach((function(e4) {
              var r5 = df(ml(e4, ["a:t"]));
              r5 && "string" == typeof r5 && (t3 += r5);
            }))), t3.length > 0 && (t3 += "\n");
          })));
          var a3 = t3.trim();
          a3 && e2.push(a3);
        })();
      }
    } catch (t3) {
      n2.e(t3);
    } finally {
      n2.f();
    }
    return e2;
  }
  function Qf(t2, e2) {
    var r2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(t2);
      e2 && (a2 = a2.filter((function(e3) {
        return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
      }))), r2.push.apply(r2, a2);
    }
    return r2;
  }
  function $f(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var a2 = null != arguments[e2] ? arguments[e2] : {};
      e2 % 2 ? Qf(Object(a2), true).forEach((function(e3) {
        r(t2, e3, a2[e3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(a2)) : Qf(Object(a2)).forEach((function(e3) {
        Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(a2, e3));
      }));
    }
    return t2;
  }
  function Kf(t2, e2) {
    var r2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
    if (!r2) {
      if (Array.isArray(t2) || (r2 = (function(t3, e3) {
        if (!t3) return;
        if ("string" == typeof t3) return Xf(t3, e3);
        var r3 = Object.prototype.toString.call(t3).slice(8, -1);
        "Object" === r3 && t3.constructor && (r3 = t3.constructor.name);
        if ("Map" === r3 || "Set" === r3) return Array.from(t3);
        if ("Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return Xf(t3, e3);
      })(t2)) || e2 && t2 && "number" == typeof t2.length) {
        r2 && (t2 = r2);
        var a2 = 0, n2 = function() {
        };
        return { s: n2, n: function() {
          return a2 >= t2.length ? { done: true } : { done: false, value: t2[a2++] };
        }, e: function(t3) {
          throw t3;
        }, f: n2 };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o2, c2 = true, i2 = false;
    return { s: function() {
      r2 = r2.call(t2);
    }, n: function() {
      var t3 = r2.next();
      return c2 = t3.done, t3;
    }, e: function(t3) {
      i2 = true, o2 = t3;
    }, f: function() {
      try {
        c2 || null == r2.return || r2.return();
      } finally {
        if (i2) throw o2;
      }
    } };
  }
  function Xf(t2, e2) {
    (null == e2 || e2 > t2.length) && (e2 = t2.length);
    for (var r2 = 0, a2 = new Array(e2); r2 < e2; r2++) a2[r2] = t2[r2];
    return a2;
  }
  function Jf(t2) {
    return th.apply(this, arguments);
  }
  function th() {
    return th = n(u.mark((function t2(e2) {
      var r2, a2, n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return r2 = M2.length > 1 && void 0 !== M2[1] ? M2[1] : {}, a2 = [], n2 = {}, o2 = {}, c2 = {}, i2 = {}, s2 = $f($f({}, r2), {}, { imageMode: r2.imageMode || "base64", videoMode: r2.videoMode || "none", audioMode: r2.audioMode || "none" }), t3.next = 9, ms.loadAsync(e2);
          case 9:
            return l2 = t3.sent, t3.next = 12, eh(l2);
          case 12:
            return f2 = t3.sent, t3.next = 15, oh(l2);
          case 15:
            return h2 = t3.sent, d2 = h2.width, p2 = h2.height, b2 = h2.defaultTextStyle, t3.next = 21, ih(l2);
          case 21:
            return g2 = t3.sent, v2 = g2.themeContent, m2 = g2.themeColors, t3.next = 26, ah(l2);
          case 26:
            y2 = t3.sent, L2 = Kf(f2.slides), t3.prev = 28, L2.s();
          case 30:
            if ((w2 = L2.n()).done) {
              t3.next = 38;
              break;
            }
            return _2 = w2.value, t3.next = 34, fh(l2, _2, v2, b2, n2, o2, c2, s2, i2);
          case 34:
            k2 = t3.sent, a2.push(k2);
          case 36:
            t3.next = 30;
            break;
          case 38:
            t3.next = 43;
            break;
          case 40:
            t3.prev = 40, t3.t0 = t3.catch(28), L2.e(t3.t0);
          case 43:
            return t3.prev = 43, L2.f(), t3.finish(43);
          case 46:
            return t3.abrupt("return", { slides: a2, usedFonts: y2, themeColors: m2, size: { width: d2, height: p2 } });
          case 47:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[28, 40, 43, 46]]);
    }))), th.apply(this, arguments);
  }
  function eh(t2) {
    return rh.apply(this, arguments);
  }
  function rh() {
    return (rh = n(u.mark((function t2(e2) {
      var r2, a2, n2, o2, c2, i2, s2, l2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return t3.next = 2, Ps(e2, "[Content_Types].xml");
          case 2:
            r2 = t3.sent, a2 = r2.Types.Override, n2 = [], o2 = [], c2 = Kf(a2), t3.prev = 7, c2.s();
          case 9:
            if ((i2 = c2.n()).done) {
              t3.next = 20;
              break;
            }
            s2 = i2.value, t3.t0 = s2.attrs.ContentType, t3.next = "application/vnd.openxmlformats-officedocument.presentationml.slide+xml" === t3.t0 ? 14 : "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml" === t3.t0 ? 16 : 18;
            break;
          case 14:
            return n2.push(s2.attrs.PartName.substr(1)), t3.abrupt("break", 18);
          case 16:
            return o2.push(s2.attrs.PartName.substr(1)), t3.abrupt("break", 18);
          case 18:
            t3.next = 9;
            break;
          case 20:
            t3.next = 25;
            break;
          case 22:
            t3.prev = 22, t3.t1 = t3.catch(7), c2.e(t3.t1);
          case 25:
            return t3.prev = 25, c2.f(), t3.finish(25);
          case 28:
            return l2 = function(t4, e3) {
              return +/(\d+)\.xml/.exec(t4)[1] - +/(\d+)\.xml/.exec(e3)[1];
            }, n2 = n2.sort(l2), o2 = o2.sort(l2), t3.abrupt("return", { slides: n2, slideLayouts: o2 });
          case 32:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[7, 22, 25, 28]]);
    })))).apply(this, arguments);
  }
  function ah(t2) {
    return nh.apply(this, arguments);
  }
  function nh() {
    return nh = n(u.mark((function t2(e2) {
      var r2, a2, n2, o2, c2, i2, s2, l2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return t3.next = 2, Ps(e2, "ppt/presentation.xml");
          case 2:
            if (r2 = t3.sent, a2 = ml(r2, ["p:presentation", "p:embeddedFontLst", "p:embeddedFont"]), n2 = [], a2) {
              t3.next = 7;
              break;
            }
            return t3.abrupt("return", n2);
          case 7:
            o2 = a2.constructor === Array ? a2 : [a2], c2 = Kf(o2);
            try {
              for (c2.s(); !(i2 = c2.n()).done; ) s2 = i2.value, (l2 = ml(s2, ["p:font", "attrs", "typeface"])) && !n2.includes(l2) && n2.push(l2);
            } catch (t4) {
              c2.e(t4);
            } finally {
              c2.f();
            }
            return t3.abrupt("return", n2);
          case 11:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), nh.apply(this, arguments);
  }
  function oh(t2) {
    return ch.apply(this, arguments);
  }
  function ch() {
    return (ch = n(u.mark((function t2(e2) {
      var r2, a2, n2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return t3.next = 2, Ps(e2, "ppt/presentation.xml");
          case 2:
            return r2 = t3.sent, a2 = r2["p:presentation"]["p:sldSz"].attrs, n2 = r2["p:presentation"]["p:defaultTextStyle"], t3.abrupt("return", { width: parseInt(a2.cx) * xu, height: parseInt(a2.cy) * xu, defaultTextStyle: n2 });
          case 6:
          case "end":
            return t3.stop();
        }
      }), t2);
    })))).apply(this, arguments);
  }
  function ih(t2) {
    return sh.apply(this, arguments);
  }
  function sh() {
    return sh = n(u.mark((function t2(e2) {
      var r2, a2, n2, o2, c2, i2, s2, l2, f2, h2, d2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return t3.next = 2, Ps(e2, "ppt/_rels/presentation.xml.rels");
          case 2:
            if (r2 = t3.sent, (a2 = r2.Relationships.Relationship).constructor !== Array) {
              t3.next = 25;
              break;
            }
            o2 = Kf(a2), t3.prev = 6, o2.s();
          case 8:
            if ((c2 = o2.n()).done) {
              t3.next = 15;
              break;
            }
            if ("http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" !== (i2 = c2.value).attrs.Type) {
              t3.next = 13;
              break;
            }
            return n2 = i2.attrs.Target, t3.abrupt("break", 15);
          case 13:
            t3.next = 8;
            break;
          case 15:
            t3.next = 20;
            break;
          case 17:
            t3.prev = 17, t3.t0 = t3.catch(6), o2.e(t3.t0);
          case 20:
            return t3.prev = 20, o2.f(), t3.finish(20);
          case 23:
            t3.next = 26;
            break;
          case 25:
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" === a2.attrs.Type && (n2 = a2.attrs.Target);
          case 26:
            return t3.next = 28, Ps(e2, "ppt/" + n2);
          case 28:
            if (s2 = t3.sent, l2 = [], !(f2 = ml(s2, ["a:theme", "a:themeElements", "a:clrScheme"]))) {
              t3.next = 41;
              break;
            }
            h2 = 1;
          case 33:
            if (!(h2 <= 6)) {
              t3.next = 41;
              break;
            }
            if (void 0 !== f2["a:accent".concat(h2)]) {
              t3.next = 36;
              break;
            }
            return t3.abrupt("break", 41);
          case 36:
            (d2 = ml(f2, ["a:accent".concat(h2), "a:srgbClr", "attrs", "val"])) && l2.push("#" + d2);
          case 38:
            h2++, t3.next = 33;
            break;
          case 41:
            return t3.abrupt("return", { themeContent: s2, themeColors: l2 });
          case 42:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[6, 17, 20, 23]]);
    }))), sh.apply(this, arguments);
  }
  function lh(t2, e2, r2) {
    return uh.apply(this, arguments);
  }
  function uh() {
    return (uh = n(u.mark((function t2(e2, r2, a2) {
      var n2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (r2) {
              t3.next = 2;
              break;
            }
            return t3.abrupt("return", null);
          case 2:
            if (!Object.prototype.hasOwnProperty.call(a2, r2)) {
              t3.next = 4;
              break;
            }
            return t3.abrupt("return", a2[r2]);
          case 4:
            return t3.next = 6, Ps(e2, r2);
          case 6:
            return n2 = t3.sent, a2[r2] = n2, t3.abrupt("return", n2);
          case 9:
          case "end":
            return t3.stop();
        }
      }), t2);
    })))).apply(this, arguments);
  }
  function fh(t2, e2, r2, a2, n2, o2, c2, i2, s2) {
    return hh.apply(this, arguments);
  }
  function hh() {
    return hh = n(u.mark((function t2(e2, r2, a2, n2, o2, c2, i2, s2, l2) {
      var f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2, x2, S2, I2, C2, A2, P2, E2, R2, T2, O2, j2, z2, B2, D2, F2, N2, U2, G2, q2, W2, H2, Z2, Y2, V2, Q2, $2, K2, X2, J2, tt2, et2, rt2, at2, nt2, ot2, ct2, it2, st2, lt2, ut2, ft2, ht2, dt2, pt2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return f2 = r2.replace("slides/slide", "slides/_rels/slide") + ".rels", t3.next = 3, Ps(e2, f2);
          case 3:
            h2 = t3.sent, (d2 = h2.Relationships.Relationship).constructor !== Array && (d2 = [d2]), p2 = "", b2 = "", g2 = "", v2 = "", m2 = {}, y2 = {}, L2 = {}, w2 = {}, _2 = Kf(d2), t3.prev = 15, _2.s();
          case 17:
            if ((k2 = _2.n()).done) {
              t3.next = 37;
              break;
            }
            M2 = k2.value, x2 = M2.attrs.Type.replace("http://schemas.openxmlformats.org/officeDocument/2006/relationships/", ""), S2 = M2.attrs.Target, "External" === M2.attrs.TargetMode || (S2 = -1 !== S2.indexOf("../") ? S2.replace("../", "ppt/") : "ppt/slides/" + S2), t3.t0 = M2.attrs.Type, t3.next = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" === t3.t0 ? 26 : "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide" === t3.t0 ? 29 : "http://schemas.microsoft.com/office/2007/relationships/diagramDrawing" === t3.t0 || "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramData" === t3.t0 || "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramLayout" === t3.t0 || "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramQuickStyle" === t3.t0 || "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramColors" === t3.t0 ? 32 : ("http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" === t3.t0 || "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart" === t3.t0 || t3.t0, 34);
            break;
          case 26:
            return b2 = S2, m2[M2.attrs.Id] = { type: x2, target: S2 }, t3.abrupt("break", 35);
          case 29:
            return p2 = S2, m2[M2.attrs.Id] = { type: x2, target: S2 }, t3.abrupt("break", 35);
          case 32:
            return m2[M2.attrs.Id] = { type: x2, target: S2 }, t3.abrupt("break", 35);
          case 34:
            m2[M2.attrs.Id] = { type: x2, target: S2 };
          case 35:
            t3.next = 17;
            break;
          case 37:
            t3.next = 42;
            break;
          case 39:
            t3.prev = 39, t3.t1 = t3.catch(15), _2.e(t3.t1);
          case 42:
            return t3.prev = 42, _2.f(), t3.finish(42);
          case 45:
            return t3.next = 47, Ps(e2, p2);
          case 47:
            return I2 = t3.sent, C2 = ph(I2), t3.next = 51, lh(e2, b2, l2);
          case 51:
            return A2 = t3.sent, P2 = vh(A2), E2 = b2.replace("slideLayouts/slideLayout", "slideLayouts/_rels/slideLayout") + ".rels", t3.next = 56, lh(e2, E2, l2);
          case 56:
            R2 = t3.sent, (d2 = R2.Relationships.Relationship).constructor !== Array && (d2 = [d2]), T2 = Kf(d2), t3.prev = 60, T2.s();
          case 62:
            if ((O2 = T2.n()).done) {
              t3.next = 75;
              break;
            }
            j2 = O2.value, z2 = j2.attrs.Type.replace("http://schemas.openxmlformats.org/officeDocument/2006/relationships/", ""), B2 = -1 !== (B2 = j2.attrs.Target).indexOf("../") ? B2.replace("../", "ppt/") : "ppt/slideLayouts/" + B2, t3.t2 = j2.attrs.Type, t3.next = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" === t3.t2 ? 70 : 72;
            break;
          case 70:
            return g2 = B2, t3.abrupt("break", 73);
          case 72:
            y2[j2.attrs.Id] = { type: z2, target: B2 };
          case 73:
            t3.next = 62;
            break;
          case 75:
            t3.next = 80;
            break;
          case 77:
            t3.prev = 77, t3.t3 = t3.catch(60), T2.e(t3.t3);
          case 80:
            return t3.prev = 80, T2.f(), t3.finish(80);
          case 83:
            return t3.next = 85, lh(e2, g2, l2);
          case 85:
            return D2 = t3.sent, F2 = ml(D2, ["p:sldMaster", "p:txStyles"]), N2 = vh(D2), U2 = g2.replace("slideMasters/slideMaster", "slideMasters/_rels/slideMaster") + ".rels", t3.next = 91, lh(e2, U2, l2);
          case 91:
            G2 = t3.sent, (d2 = G2.Relationships.Relationship).constructor !== Array && (d2 = [d2]), q2 = Kf(d2), t3.prev = 95, q2.s();
          case 97:
            if ((W2 = q2.n()).done) {
              t3.next = 110;
              break;
            }
            H2 = W2.value, Z2 = H2.attrs.Type.replace("http://schemas.openxmlformats.org/officeDocument/2006/relationships/", ""), Y2 = -1 !== (Y2 = H2.attrs.Target).indexOf("../") ? Y2.replace("../", "ppt/") : "ppt/slideMasters/" + Y2, t3.t4 = H2.attrs.Type, t3.next = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" === t3.t4 ? 105 : 107;
            break;
          case 105:
            return v2 = Y2, t3.abrupt("break", 108);
          case 107:
            L2[H2.attrs.Id] = { type: Z2, target: Y2 };
          case 108:
            t3.next = 97;
            break;
          case 110:
            t3.next = 115;
            break;
          case 112:
            t3.prev = 112, t3.t5 = t3.catch(95), q2.e(t3.t5);
          case 115:
            return t3.prev = 115, q2.f(), t3.finish(115);
          case 118:
            if (V2 = a2, !v2) {
              t3.next = 132;
              break;
            }
            if (t3.t6 = V2, t3.t6) {
              t3.next = 125;
              break;
            }
            return t3.next = 124, lh(e2, v2, l2);
          case 124:
            t3.t6 = t3.sent;
          case 125:
            return V2 = t3.t6, Q2 = v2.split("/").pop(), $2 = v2.replace(Q2, "_rels/" + Q2) + ".rels", t3.next = 130, Ps(e2, $2);
          case 130:
            if ((K2 = t3.sent) && (d2 = K2.Relationships.Relationship)) {
              d2.constructor !== Array && (d2 = [d2]), X2 = Kf(d2);
              try {
                for (X2.s(); !(J2 = X2.n()).done; ) tt2 = J2.value, w2[tt2.attrs.Id] = { type: tt2.attrs.Type.replace("http://schemas.openxmlformats.org/officeDocument/2006/relationships/", ""), target: tt2.attrs.Target.replace("../", "ppt/") };
              } catch (t4) {
                X2.e(t4);
              } finally {
                X2.f();
              }
            }
          case 132:
            return t3.next = 134, lh(e2, "ppt/tableStyles.xml", l2);
          case 134:
            return et2 = t3.sent, t3.next = 137, Ps(e2, r2);
          case 137:
            return rt2 = t3.sent, at2 = rt2["p:sld"]["p:cSld"]["p:spTree"], nt2 = { zip: e2, loadedImages: o2, loadedVideos: c2, loadedAudios: i2, options: s2, slideLayoutContent: A2, slideLayoutTables: P2, slideMasterContent: D2, slideMasterTables: N2, slideContent: rt2, tableStyles: et2, slideResObj: m2, slideMasterTextStyles: F2, layoutResObj: y2, masterResObj: L2, themeContent: V2, themeResObj: w2, diagramFileCache: {}, defaultTextStyle: n2 }, t3.next = 142, bh(nt2);
          case 142:
            return ot2 = t3.sent, t3.next = 145, iu(nt2);
          case 145:
            ct2 = t3.sent, it2 = [], t3.t7 = u.keys(at2);
          case 148:
            if ((t3.t8 = t3.t7()).done) {
              t3.next = 172;
              break;
            }
            st2 = t3.t8.value, at2[st2].constructor !== Array && (at2[st2] = [at2[st2]]), lt2 = Kf(at2[st2]), t3.prev = 152, lt2.s();
          case 154:
            if ((ut2 = lt2.n()).done) {
              t3.next = 162;
              break;
            }
            return ft2 = ut2.value, t3.next = 158, mh(st2, ft2, nt2, "slide");
          case 158:
            (ht2 = t3.sent) && it2.push(ht2);
          case 160:
            t3.next = 154;
            break;
          case 162:
            t3.next = 167;
            break;
          case 164:
            t3.prev = 164, t3.t9 = t3.catch(152), lt2.e(t3.t9);
          case 167:
            return t3.prev = 167, lt2.f(), t3.finish(167);
          case 170:
            t3.next = 148;
            break;
          case 172:
            return (dt2 = Bf(rt2, "p:sld")) || (dt2 = Bf(A2, "p:sldLayout")), dt2 || (dt2 = Bf(D2, "p:sldMaster")), pt2 = Df(dt2), t3.abrupt("return", { fill: ct2, elements: it2, layoutElements: ot2, note: C2, transition: pt2 });
          case 177:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[15, 39, 42, 45], [60, 77, 80, 83], [95, 112, 115, 118], [152, 164, 167, 170]]);
    }))), hh.apply(this, arguments);
  }
  function dh(t2, e2) {
    var r2 = ml(t2, ["a:hlinkClick", "attrs"]);
    if (!r2) return null;
    var a2 = r2["r:id"];
    if (!a2) return null;
    var n2 = e2.slideResObj[a2];
    if (!n2) return null;
    if ("hyperlink" !== n2.type) return null;
    var o2 = n2.target;
    return o2 && /^https?:\/\//.test(o2) ? o2 : null;
  }
  function ph(t2) {
    var e2 = "", r2 = ml(t2, ["p:notes", "p:cSld", "p:spTree", "p:sp"]);
    if (!r2) return "";
    r2.constructor !== Array && (r2 = [r2]);
    var a2, n2 = Kf(r2);
    try {
      for (n2.s(); !(a2 = n2.n()).done; ) {
        var o2 = a2.value;
        if ("body" === ml(o2, ["p:nvSpPr", "p:nvPr", "p:ph", "attrs", "type"])) {
          var c2 = ml(o2, ["p:txBody"]);
          if (c2) {
            var i2 = c2["a:p"];
            if (i2) {
              i2.constructor !== Array && (i2 = [i2]);
              var s2, l2 = [], u2 = Kf(i2);
              try {
                for (u2.s(); !(s2 = u2.n()).done; ) {
                  var f2 = s2.value, h2 = f2["a:pPr"], d2 = ml(h2, ["attrs", "algn"]), p2 = "left";
                  if (d2) switch (d2) {
                    case "r":
                      p2 = "right";
                      break;
                    case "ctr":
                      p2 = "center";
                      break;
                    case "just":
                    case "dist":
                      p2 = "justify";
                  }
                  var b2 = "";
                  h2 && (h2["a:buChar"] ? b2 = "ul" : h2["a:buAutoNum"] && (b2 = "ol"));
                  var g2 = ml(h2, ["attrs", "lvl"]), v2 = void 0 !== g2 ? parseInt(g2) : 0;
                  if (b2) {
                    for (; l2.length > v2 + 1; ) e2 += "</".concat(l2.pop(), ">");
                    void 0 === l2[v2] ? (e2 += "<".concat(b2, ">"), l2[v2] = b2) : l2[v2] !== b2 && (e2 += "</".concat(l2[v2], ">"), e2 += "<".concat(b2, ">"), l2[v2] = b2), e2 += '<li><p style="text-align:'.concat(p2, ';">');
                  } else {
                    for (; l2.length > 0; ) e2 += "</".concat(l2.pop(), ">");
                    e2 += '<p style="text-align:'.concat(p2, ';">');
                  }
                  var m2 = f2["a:r"];
                  if (m2) {
                    m2.constructor !== Array && (m2 = [m2]);
                    var y2, L2 = Kf(m2);
                    try {
                      for (L2.s(); !(y2 = L2.n()).done; ) {
                        var w2 = df(ml(y2.value, ["a:t"]));
                        w2 && "string" == typeof w2 && (e2 += w2);
                      }
                    } catch (t3) {
                      L2.e(t3);
                    } finally {
                      L2.f();
                    }
                  }
                  e2 += b2 ? "</p></li>" : "</p>";
                }
              } catch (t3) {
                u2.e(t3);
              } finally {
                u2.f();
              }
              for (; l2.length > 0; ) e2 += "</".concat(l2.pop(), ">");
            }
          }
        }
      }
    } catch (t3) {
      n2.e(t3);
    } finally {
      n2.f();
    }
    return e2;
  }
  function bh(t2) {
    return gh.apply(this, arguments);
  }
  function gh() {
    return gh = n(u.mark((function t2(e2) {
      var r2, a2, n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (r2 = [], a2 = e2.slideLayoutContent, n2 = e2.slideMasterContent, o2 = ml(a2, ["p:sldLayout", "p:cSld", "p:spTree"]), c2 = ml(n2, ["p:sldMaster", "p:cSld", "p:spTree"]), i2 = ml(a2, ["p:sldLayout", "attrs", "showMasterSp"]), !o2) {
              t3.next = 32;
              break;
            }
            t3.t0 = u.keys(o2);
          case 8:
            if ((t3.t1 = t3.t0()).done) {
              t3.next = 32;
              break;
            }
            if (s2 = t3.t1.value, o2[s2].constructor !== Array) {
              t3.next = 24;
              break;
            }
            l2 = 0;
          case 12:
            if (!(l2 < o2[s2].length)) {
              t3.next = 22;
              break;
            }
            if (ml(o2[s2][l2], ["p:nvSpPr", "p:nvPr", "p:ph"])) {
              t3.next = 19;
              break;
            }
            return t3.next = 17, mh(s2, o2[s2][l2], e2, "slideLayoutBg");
          case 17:
            (f2 = t3.sent) && r2.push(f2);
          case 19:
            l2++, t3.next = 12;
            break;
          case 22:
            t3.next = 30;
            break;
          case 24:
            if (ml(o2[s2], ["p:nvSpPr", "p:nvPr", "p:ph"])) {
              t3.next = 30;
              break;
            }
            return t3.next = 28, mh(s2, o2[s2], e2, "slideLayoutBg");
          case 28:
            (h2 = t3.sent) && r2.push(h2);
          case 30:
            t3.next = 8;
            break;
          case 32:
            if (!c2 || "0" === i2) {
              t3.next = 58;
              break;
            }
            t3.t2 = u.keys(c2);
          case 34:
            if ((t3.t3 = t3.t2()).done) {
              t3.next = 58;
              break;
            }
            if (d2 = t3.t3.value, c2[d2].constructor !== Array) {
              t3.next = 50;
              break;
            }
            p2 = 0;
          case 38:
            if (!(p2 < c2[d2].length)) {
              t3.next = 48;
              break;
            }
            if (ml(c2[d2][p2], ["p:nvSpPr", "p:nvPr", "p:ph"])) {
              t3.next = 45;
              break;
            }
            return t3.next = 43, mh(d2, c2[d2][p2], e2, "slideMasterBg");
          case 43:
            (b2 = t3.sent) && r2.push(b2);
          case 45:
            p2++, t3.next = 38;
            break;
          case 48:
            t3.next = 56;
            break;
          case 50:
            if (ml(c2[d2], ["p:nvSpPr", "p:nvPr", "p:ph"])) {
              t3.next = 56;
              break;
            }
            return t3.next = 54, mh(d2, c2[d2], e2, "slideMasterBg");
          case 54:
            (g2 = t3.sent) && r2.push(g2);
          case 56:
            t3.next = 34;
            break;
          case 58:
            return t3.abrupt("return", r2);
          case 59:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), gh.apply(this, arguments);
  }
  function vh(t2) {
    var e2 = t2[Object.keys(t2)[0]]["p:cSld"]["p:spTree"], r2 = {}, a2 = {}, n2 = {};
    for (var o2 in e2) if ("p:nvGrpSpPr" !== o2 && "p:grpSpPr" !== o2) {
      var c2 = e2[o2];
      if (c2.constructor === Array) {
        var i2, s2 = Kf(c2);
        try {
          for (s2.s(); !(i2 = s2.n()).done; ) {
            var l2 = i2.value, u2 = l2["p:nvSpPr"], f2 = ml(u2, ["p:cNvPr", "attrs", "id"]), h2 = ml(u2, ["p:nvPr", "p:ph", "attrs", "idx"]), d2 = ml(u2, ["p:nvPr", "p:ph", "attrs", "type"]);
            f2 && (r2[f2] = l2), h2 && (a2[h2] = l2), d2 && !n2[d2] && (n2[d2] = l2);
          }
        } catch (t3) {
          s2.e(t3);
        } finally {
          s2.f();
        }
      } else {
        var p2 = c2["p:nvSpPr"], b2 = ml(p2, ["p:cNvPr", "attrs", "id"]), g2 = ml(p2, ["p:nvPr", "p:ph", "attrs", "idx"]), v2 = ml(p2, ["p:nvPr", "p:ph", "attrs", "type"]);
        b2 && (r2[b2] = c2), g2 && (a2[g2] = c2), v2 && !n2[v2] && (n2[v2] = c2);
      }
    }
    return { idTable: r2, idxTable: a2, typeTable: n2 };
  }
  function mh(t2, e2, r2, a2) {
    return yh.apply(this, arguments);
  }
  function yh() {
    return yh = n(u.mark((function t2(e2, r2, a2, n2) {
      var o2, c2, i2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            o2 = i2.length > 4 && void 0 !== i2[4] ? i2[4] : [], t3.t0 = e2, t3.next = "p:sp" === t3.t0 ? 4 : "p:cxnSp" === t3.t0 ? 8 : "p:pic" === t3.t0 ? 12 : "p:graphicFrame" === t3.t0 ? 16 : "p:grpSp" === t3.t0 ? 20 : "mc:AlternateContent" === t3.t0 ? 24 : 35;
            break;
          case 4:
            return t3.next = 6, Mh(r2, a2, n2, o2);
          case 6:
            return c2 = t3.sent, t3.abrupt("break", 35);
          case 8:
            return t3.next = 10, Sh(r2, a2, n2);
          case 10:
            return c2 = t3.sent, t3.abrupt("break", 35);
          case 12:
            return t3.next = 14, Ph(r2, a2, n2);
          case 14:
            return c2 = t3.sent, t3.abrupt("break", 35);
          case 16:
            return t3.next = 18, Rh(r2, a2, n2);
          case 18:
            return c2 = t3.sent, t3.abrupt("break", 35);
          case 20:
            return t3.next = 22, _h(r2, a2, n2, o2);
          case 22:
            return c2 = t3.sent, t3.abrupt("break", 35);
          case 24:
            if (!ml(r2, ["mc:Fallback", "p:grpSpPr", "a:xfrm"])) {
              t3.next = 30;
              break;
            }
            return t3.next = 27, _h(ml(r2, ["mc:Fallback"]), a2, n2, o2);
          case 27:
            c2 = t3.sent, t3.next = 34;
            break;
          case 30:
            if (!ml(r2, ["mc:Choice"])) {
              t3.next = 34;
              break;
            }
            return t3.next = 33, Lh(r2, a2, n2);
          case 33:
            c2 = t3.sent;
          case 34:
            return t3.abrupt("break", 35);
          case 35:
            return t3.abrupt("return", c2);
          case 36:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), yh.apply(this, arguments);
  }
  function Lh(t2, e2, r2) {
    return wh.apply(this, arguments);
  }
  function wh() {
    return wh = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (n2 = ml(e2, ["mc:Choice"]), o2 = ml(e2, ["mc:Fallback"]), c2 = e2.attrs.order, i2 = ml(n2, ["p:sp", "p:spPr", "a:xfrm"]), s2 = Yu(i2, void 0, void 0), l2 = s2.top, f2 = s2.left, h2 = Vu(i2, void 0, void 0), d2 = h2.width, p2 = h2.height, b2 = Af(n2)[0]) {
              t3.next = 9;
              break;
            }
            return t3.abrupt("return", null);
          case 9:
            return g2 = Rf(Ef(b2)), v2 = ml(o2, ["p:sp", "p:spPr", "a:blipFill"]), t3.next = 13, Xl(a2, v2, r2);
          case 13:
            return m2 = t3.sent, y2 = "", ml(n2, ["p:sp", "p:txBody", "a:p", "a:r"]) && (L2 = ml(n2, ["p:sp"]), y2 = pf(L2["p:txBody"], L2, void 0, void 0, void 0, r2)), t3.abrupt("return", { type: "math", top: l2, left: f2, width: d2, height: p2, latex: g2, picRef: m2.ref, picBase64: m2.base64, picBlob: m2.blob, text: y2, order: c2 });
          case 17:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), wh.apply(this, arguments);
  }
  function _h(t2, e2, r2) {
    return kh.apply(this, arguments);
  }
  function kh() {
    return kh = n(u.mark((function t2(r2, a2, n2) {
      var o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2, x2, S2, I2, C2, A2, P2, E2, R2, T2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (R2 = function(t4) {
              var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return e2 > 10 ? t4 : t4.map((function(t5) {
                var r3 = P2(t5);
                return "group" === t5.type && t5.elements && (r3.elements = R2(t5.elements, e2 + 1)), r3;
              }));
            }, o2 = T2.length > 3 && void 0 !== T2[3] ? T2[3] : [], c2 = r2.attrs.order, i2 = ml(r2, ["p:grpSpPr", "a:xfrm"])) {
              t3.next = 6;
              break;
            }
            return t3.abrupt("return", null);
          case 6:
            s2 = parseInt(i2["a:off"].attrs.x) * xu, l2 = parseInt(i2["a:off"].attrs.y) * xu, f2 = parseInt(i2["a:chOff"].attrs.x) * xu, h2 = parseInt(i2["a:chOff"].attrs.y) * xu, d2 = parseInt(i2["a:ext"].attrs.cx) * xu, p2 = parseInt(i2["a:ext"].attrs.cy) * xu, b2 = parseInt(i2["a:chExt"].attrs.cx) * xu, g2 = parseInt(i2["a:chExt"].attrs.cy) * xu, v2 = "1" === ml(i2, ["attrs", "flipV"]), m2 = "1" === ml(i2, ["attrs", "flipH"]), (y2 = ml(i2, ["attrs", "rot"]) || 0) && (y2 = yl(y2)), L2 = 0 === b2 ? 0 : d2 / b2, w2 = 0 === g2 ? 0 : p2 / g2, _2 = [].concat(e(o2), [r2]), k2 = [], t3.t0 = u.keys(r2);
          case 23:
            if ((t3.t1 = t3.t0()).done) {
              t3.next = 53;
              break;
            }
            if (M2 = t3.t1.value, r2[M2].constructor !== Array) {
              t3.next = 47;
              break;
            }
            x2 = Kf(r2[M2]), t3.prev = 27, x2.s();
          case 29:
            if ((S2 = x2.n()).done) {
              t3.next = 37;
              break;
            }
            return I2 = S2.value, t3.next = 33, mh(M2, I2, a2, n2, _2);
          case 33:
            (C2 = t3.sent) && k2.push(C2);
          case 35:
            t3.next = 29;
            break;
          case 37:
            t3.next = 42;
            break;
          case 39:
            t3.prev = 39, t3.t2 = t3.catch(27), x2.e(t3.t2);
          case 42:
            return t3.prev = 42, x2.f(), t3.finish(42);
          case 45:
            t3.next = 51;
            break;
          case 47:
            return t3.next = 49, mh(M2, r2[M2], a2, n2, _2);
          case 49:
            (A2 = t3.sent) && k2.push(A2);
          case 51:
            t3.next = 23;
            break;
          case 53:
            return P2 = function(t4) {
              var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a3 = t4.rotate || 0, n3 = (a3 % 360 + 360) % 360, o3 = Math.abs(L2 - w2) < 1e-6, c3 = 90 === n3 || 270 === n3, i3 = t4.left + t4.width / 2, s3 = t4.top + t4.height / 2, l3 = (i3 - e2) * L2, u2 = (s3 - r3) * w2, f3 = c3 && !o3 ? w2 : L2, h3 = c3 && !o3 ? L2 : w2, d3 = t4.width * f3, p3 = t4.height * h3, b3 = $f($f({}, t4), {}, { left: xl(l3 - d3 / 2), top: xl(u2 - p3 / 2), width: xl(d3), height: xl(p3) });
              return b3;
            }, E2 = k2.map((function(t4) {
              return $f($f({}, P2(t4, f2, h2)), "group" === t4.type && t4.elements ? { elements: R2(t4.elements) } : {});
            })), t3.abrupt("return", { type: "group", top: xl(l2), left: xl(s2), width: xl(d2), height: xl(p2), rotate: y2, order: c2, isFlipV: v2, isFlipH: m2, elements: E2 });
          case 56:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[27, 39, 42, 45]]);
    }))), kh.apply(this, arguments);
  }
  function Mh(t2, e2, r2) {
    return xh.apply(this, arguments);
  }
  function xh() {
    return xh = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2, i2, s2, l2, f2, h2, d2, p2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return n2 = p2.length > 3 && void 0 !== p2[3] ? p2[3] : [], o2 = ml(e2, ["p:nvSpPr", "p:cNvPr"]), c2 = ml(o2, ["attrs", "name"]), i2 = ml(e2, ["p:nvSpPr", "p:nvPr", "p:ph", "attrs", "idx"]), s2 = ml(e2, ["p:nvSpPr", "p:nvPr", "p:ph", "attrs", "type"]), l2 = ml(e2, ["attrs", "order"]), s2 ? i2 ? (f2 = r2.slideLayoutTables.idxTable[i2], h2 = r2.slideMasterTables.idxTable[i2], f2 || (f2 = r2.slideLayoutTables.typeTable[s2]), h2 || (h2 = r2.slideMasterTables.typeTable[s2])) : (f2 = r2.slideLayoutTables.typeTable[s2], h2 = r2.slideMasterTables.typeTable[s2]) : i2 && (f2 = r2.slideLayoutTables.idxTable[i2], h2 = r2.slideMasterTables.idxTable[i2]), s2 || "1" === ml(e2, ["p:nvSpPr", "p:cNvSpPr", "attrs", "txBox"]) && (s2 = "text"), s2 || (s2 = ml(f2, ["p:nvSpPr", "p:nvPr", "p:ph", "attrs", "type"])), s2 || (s2 = ml(h2, ["p:nvSpPr", "p:nvPr", "p:ph", "attrs", "type"])), h2 || "ctrTitle" !== s2 || (h2 = r2.slideMasterTables.typeTable.title), s2 || (s2 = "diagramBg" === a2 ? "diagram" : "obj"), d2 = dh(o2, r2), t3.next = 15, Ch(e2, f2, h2, c2, s2, l2, r2, a2, d2, n2);
          case 15:
            return t3.abrupt("return", t3.sent);
          case 16:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), xh.apply(this, arguments);
  }
  function Sh(t2, e2, r2) {
    return Ih.apply(this, arguments);
  }
  function Ih() {
    return Ih = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2, i2, s2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return n2 = ml(e2, ["p:nvCxnSpPr", "p:cNvPr"]), o2 = ml(n2, ["attrs", "name"]), c2 = void 0 === e2["p:nvCxnSpPr"]["p:nvPr"]["p:ph"] ? void 0 : e2["p:nvCxnSpPr"]["p:nvPr"]["p:ph"].attrs.type, i2 = e2.attrs.order, s2 = dh(n2, r2), t3.next = 7, Ch(e2, void 0, void 0, o2, c2, i2, r2, a2, s2);
          case 7:
            return t3.abrupt("return", t3.sent);
          case 8:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Ih.apply(this, arguments);
  }
  function Ch(t2, e2, r2, a2, n2, o2, c2, i2, s2) {
    return Ah.apply(this, arguments);
  }
  function Ah() {
    return Ah = n(u.mark((function t2(e2, r2, a2, n2, o2, c2, i2, s2, l2) {
      var f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2, x2, S2, I2, C2, A2, P2, E2, R2, T2, O2, j2, z2, B2, D2, F2, N2, U2, G2, q2, W2, H2, Z2, Y2, V2, Q2, $2, K2, X2, J2, tt2, et2, rt2, at2, nt2, ot2, ct2, it2, st2, lt2, ut2, ft2 = arguments;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (f2 = ft2.length > 9 && void 0 !== ft2[9] ? ft2[9] : [], d2 = ml(e2, h2 = ["p:spPr", "a:xfrm"]), p2 = ml(r2, h2), b2 = ml(a2, h2), g2 = ml(e2, ["p:spPr", "a:prstGeom", "attrs", "prst"]), v2 = ml(e2, ["p:spPr", "a:custGeom"]), m2 = {}, g2 && (y2 = ml(e2, ["p:spPr", "a:prstGeom", "a:avLst", "a:gd"]))) {
              L2 = Array.isArray(y2) ? y2 : [y2], w2 = Kf(L2);
              try {
                for (w2.s(); !(_2 = w2.n()).done; ) k2 = _2.value, M2 = ml(k2, ["attrs", "name"]), x2 = ml(k2, ["attrs", "fmla"]), M2 && x2 && x2.startsWith("val ") && (m2[M2] = parseInt(x2.substring(4)) / 5e4);
              } catch (t4) {
                w2.e(t4);
              } finally {
                w2.f();
              }
            }
            return S2 = Yu(d2, p2, b2), I2 = S2.top, C2 = S2.left, A2 = Vu(d2, p2, b2), P2 = A2.width, E2 = A2.height, R2 = { x: 0, y: 0, width: P2, height: E2 }, T2 = "1" === ml(d2, ["attrs", "flipV"]), O2 = "1" === ml(d2, ["attrs", "flipH"]), j2 = yl(ml(d2, ["attrs", "rot"])), (z2 = ml(e2, ["p:txXfrm"])) ? (D2 = ml(z2, ["attrs", "rot"])) && (B2 = yl(D2) + 90) : B2 = j2, F2 = "", e2["p:txBody"] && (F2 = pf(e2["p:txBody"], e2, r2, a2, o2, i2)), N2 = mu(e2, o2, i2), U2 = N2.borderColor, G2 = N2.borderWidth, q2 = N2.borderType, W2 = N2.strokeDasharray, H2 = N2.headEnd, Z2 = N2.tailEnd, t3.next = 22, hu(e2, i2, s2, { groupHierarchy: f2, slideLayoutSpNode: r2, slideMasterSpNode: a2 });
          case 22:
            if (Y2 = t3.sent, (Q2 = ml(e2, ["p:spPr", "a:effectLst", "a:outerShdw"])) && (V2 = Qu(Q2, i2)), $2 = Eu(e2, r2, a2), K2 = "eaVert" === ml(e2, ["p:txBody", "a:bodyPr", "attrs", "vert"]), X2 = Ru(e2, r2, a2), J2 = Zu(e2, r2, a2), tt2 = { left: C2, top: I2, width: P2, height: E2, borderColor: U2, borderWidth: G2, borderType: q2, borderStrokeDasharray: W2, fill: Y2, content: F2, isFlipV: T2, isFlipH: O2, rotate: j2, vAlign: $2, name: n2, order: c2 }, V2 && (tt2.shadow = V2), X2 && (tt2.autoFit = X2), l2 && (tt2.link = l2), J2 && (tt2.textInset = J2), H2 && (tt2.headEnd = H2), Z2 && (tt2.tailEnd = Z2), et2 = tt2.content && Ml(tt2.content), !v2 || "diagram" === o2) {
              t3.next = 46;
              break;
            }
            return rt2 = ml(d2, ["a:ext", "attrs"]), at2 = parseInt(rt2.cx) * xu, nt2 = parseInt(rt2.cy) * xu, ot2 = Lf(v2, at2, nt2), et2 || (tt2.content = ""), ct2 = $f($f({}, tt2), {}, { type: "shape", shapType: "custom", path: ot2, pathViewBox: { x: 0, y: 0, width: at2, height: nt2 } }), wf(v2) && (ct2.strokeOnly = true), t3.abrupt("return", ct2);
          case 46:
            if (it2 = "", g2 && (it2 = zf(g2, P2, E2, e2)), st2 = ["arc", "leftBrace", "rightBrace", "bracePair", "leftBracket", "rightBracket", "bracketPair"].includes(g2), !g2 || "obj" !== o2 && o2 && "rect" === g2) {
              t3.next = 55;
              break;
            }
            return et2 || (tt2.content = ""), lt2 = $f($f({}, tt2), {}, { type: "shape", shapType: g2, path: it2, pathViewBox: R2, keypoints: m2 }), st2 && (lt2.strokeOnly = true), t3.abrupt("return", lt2);
          case 55:
            if (!g2 || et2 || !Y2 && !G2) {
              t3.next = 59;
              break;
            }
            return ut2 = $f($f({}, tt2), {}, { type: "shape", content: "", shapType: g2, path: it2, pathViewBox: R2, keypoints: m2 }), st2 && (ut2.strokeOnly = true), t3.abrupt("return", ut2);
          case 59:
            return t3.abrupt("return", $f($f({}, tt2), {}, { type: "text", isVertical: K2, rotate: B2 }));
          case 60:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Ah.apply(this, arguments);
  }
  function Ph(t2, e2, r2) {
    return Eh.apply(this, arguments);
  }
  function Eh() {
    return Eh = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2, x2, S2, I2, C2, A2, P2, E2, R2, T2, O2, j2, z2, B2, D2, F2, N2, U2, G2, q2, W2, H2, Z2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (n2 = "slideMasterBg" === a2 ? r2.masterResObj : "slideLayoutBg" === a2 ? r2.layoutResObj : r2.slideResObj, o2 = ml(e2, ["p:nvPicPr", "p:cNvPr"]), c2 = dh(o2, r2), i2 = e2.attrs.order, (s2 = e2["p:blipFill"]["a:blip"].attrs["r:embed"]) && n2[s2]) {
              t3.next = 7;
              break;
            }
            return t3.abrupt("return", null);
          case 7:
            return l2 = n2[s2].target, (f2 = e2["p:spPr"]["a:xfrm"]) || (h2 = ml(e2, ["p:nvPicPr", "p:nvPr", "p:ph", "attrs", "idx"])) && (f2 = ml(r2.slideLayoutTables, ["idxTable", h2, "p:spPr", "a:xfrm"])), d2 = Yu(f2, void 0, void 0), p2 = d2.top, b2 = d2.left, g2 = Vu(f2, void 0, void 0), v2 = g2.width, m2 = g2.height, t3.next = 14, Zl(l2, r2);
          case 14:
            if (y2 = t3.sent, L2 = "1" === ml(f2, ["attrs", "flipV"]), w2 = "1" === ml(f2, ["attrs", "flipH"]), _2 = 0, (k2 = ml(e2, ["p:spPr", "a:xfrm", "attrs", "rot"])) && (_2 = yl(k2)), M2 = ml(e2, ["p:nvPicPr", "p:nvPr", "a:videoFile"]), C2 = { ref: "", blob: "" }, A2 = false, !M2) {
              t3.next = 40;
              break;
            }
            if (x2 = M2.attrs["r:link"], !_l(S2 = n2[x2].target)) {
              t3.next = 31;
              break;
            }
            S2 = Ll(S2), A2 = true, t3.next = 39;
            break;
          case 31:
            if ("mp4" !== (I2 = gl(S2).toLowerCase()) && "webm" !== I2 && "ogg" !== I2) {
              t3.next = 38;
              break;
            }
            return t3.next = 35, Vl(S2, r2);
          case 35:
            C2 = t3.sent, t3.next = 39;
            break;
          case 38:
            C2 = { ref: S2, blob: "" };
          case 39:
            A2 && (C2 = { ref: S2, blob: "" });
          case 40:
            if (P2 = ml(e2, ["p:nvPicPr", "p:nvPr", "a:audioFile"]), O2 = { ref: "", blob: "" }, !P2) {
              t3.next = 53;
              break;
            }
            if (E2 = P2.attrs["r:link"], R2 = n2[E2].target, "mp3" !== (T2 = gl(R2).toLowerCase()) && "wav" !== T2 && "ogg" !== T2) {
              t3.next = 52;
              break;
            }
            return t3.next = 49, $l(R2, r2);
          case 49:
            O2 = t3.sent, t3.next = 53;
            break;
          case 52:
            O2 = { ref: R2, blob: "" };
          case 53:
            if (!M2 || A2) {
              t3.next = 55;
              break;
            }
            return t3.abrupt("return", { type: "video", top: p2, left: b2, width: v2, height: m2, rotate: _2, ref: C2.ref, blob: C2.blob, order: i2 });
          case 55:
            if (!M2 || !A2) {
              t3.next = 57;
              break;
            }
            return t3.abrupt("return", { type: "video", top: p2, left: b2, width: v2, height: m2, rotate: _2, ref: C2.ref, blob: C2.blob, order: i2 });
          case 57:
            if (!P2) {
              t3.next = 59;
              break;
            }
            return t3.abrupt("return", { type: "audio", top: p2, left: b2, width: v2, height: m2, rotate: _2, ref: O2.ref, blob: O2.blob, order: i2 });
          case 59:
            return (z2 = ml(e2, ["p:blipFill", "a:srcRect", "attrs"])) && (z2.t || z2.b || z2.l || z2.r) && (j2 = {}, z2.t && (j2.t = z2.t / 1e3), z2.b && (j2.b = z2.b / 1e3), z2.l && (j2.l = z2.l / 1e3), z2.r && (j2.r = z2.r / 1e3)), B2 = "rect", D2 = ml(e2, ["p:spPr", "a:prstGeom", "attrs", "prst"]), F2 = ml(e2, ["p:spPr", "a:custGeom"]), D2 ? B2 = D2 : F2 && "custom" !== (B2 = _f(F2)) && (B2 = "custom:".concat(B2)), N2 = mu(e2, void 0, r2), U2 = N2.borderColor, G2 = N2.borderWidth, q2 = N2.borderType, W2 = N2.strokeDasharray, H2 = eu(e2["p:blipFill"]), Z2 = { type: "image", top: p2, left: b2, width: v2, height: m2, rotate: _2, ref: y2.ref, base64: y2.base64, blob: y2.blob, isFlipV: L2, isFlipH: w2, order: i2, rect: j2, geom: B2, borderColor: U2, borderWidth: G2, borderType: q2, borderStrokeDasharray: W2 }, H2 && (Z2.filters = H2), c2 && (Z2.link = c2), t3.abrupt("return", Z2);
          case 71:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Eh.apply(this, arguments);
  }
  function Rh(t2, e2, r2) {
    return Th.apply(this, arguments);
  }
  function Th() {
    return Th = n(u.mark((function t2(e2, r2, a2) {
      var n2, o2, c2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            n2 = ml(e2, ["a:graphic", "a:graphicData", "attrs", "uri"]), t3.t0 = n2, t3.next = "http://schemas.openxmlformats.org/drawingml/2006/table" === t3.t0 ? 4 : "http://schemas.openxmlformats.org/drawingml/2006/chart" === t3.t0 ? 8 : "http://schemas.openxmlformats.org/drawingml/2006/diagram" === t3.t0 ? 12 : "http://schemas.openxmlformats.org/presentationml/2006/ole" === t3.t0 ? 16 : 23;
            break;
          case 4:
            return t3.next = 6, Oh(e2, r2);
          case 6:
            return o2 = t3.sent, t3.abrupt("break", 23);
          case 8:
            return t3.next = 10, zh(e2, r2);
          case 10:
            return o2 = t3.sent, t3.abrupt("break", 23);
          case 12:
            return t3.next = 14, Dh(e2, r2);
          case 14:
            return o2 = t3.sent, t3.abrupt("break", 23);
          case 16:
            if ((c2 = ml(e2, ["a:graphic", "a:graphicData", "mc:AlternateContent", "mc:Fallback", "p:oleObj"])) || (c2 = ml(e2, ["a:graphic", "a:graphicData", "p:oleObj"])), !c2) {
              t3.next = 22;
              break;
            }
            return t3.next = 21, _h(c2, r2, a2);
          case 21:
            o2 = t3.sent;
          case 22:
            return t3.abrupt("break", 23);
          case 23:
            return t3.abrupt("return", o2);
          case 24:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Th.apply(this, arguments);
  }
  function Oh(t2, e2) {
    return jh.apply(this, arguments);
  }
  function jh() {
    return jh = n(u.mark((function t2(e2, r2) {
      var a2, n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2, w2, _2, k2, M2, x2, S2, I2, C2, A2, P2, E2, R2, T2, O2, j2, z2, B2, D2, F2, N2, U2, G2, q2, W2, H2, Z2, Y2, V2, Q2, $2, K2, X2, J2, tt2, et2, rt2, at2, nt2, ot2, ct2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (a2 = e2.attrs.order, n2 = ml(e2, ["a:graphic", "a:graphicData", "a:tbl"]), o2 = ml(e2, ["p:xfrm"]), c2 = Yu(o2, void 0, void 0), i2 = c2.top, s2 = c2.left, l2 = Vu(o2, void 0, void 0), f2 = l2.width, h2 = l2.height, d2 = ml(e2, ["a:graphic", "a:graphicData", "a:tbl", "a:tblPr"]), (p2 = ml(e2, ["a:graphic", "a:graphicData", "a:tbl", "a:tblGrid", "a:gridCol"])).constructor !== Array && (p2 = [p2]), b2 = [], p2) {
              g2 = Kf(p2);
              try {
                for (g2.s(); !(v2 = g2.n()).done; ) m2 = v2.value, y2 = ml(m2, ["attrs", "w"]) || 0, L2 = parseInt(y2) * xu, b2.push(L2);
              } catch (t4) {
                g2.e(t4);
              } finally {
                g2.f();
              }
            }
            if (w2 = d2.attrs ? d2.attrs.firstRow : void 0, _2 = d2.attrs ? d2.attrs.firstCol : void 0, k2 = d2.attrs ? d2.attrs.lastRow : void 0, M2 = d2.attrs ? d2.attrs.lastCol : void 0, x2 = d2.attrs ? d2.attrs.bandRow : void 0, S2 = d2.attrs ? d2.attrs.bandCol : void 0, I2 = { isFrstRowAttr: w2 && "1" === w2 ? 1 : 0, isFrstColAttr: _2 && "1" === _2 ? 1 : 0, isLstRowAttr: k2 && "1" === k2 ? 1 : 0, isLstColAttr: M2 && "1" === M2 ? 1 : 0, isBandRowAttr: x2 && "1" === x2 ? 1 : 0, isBandColAttr: S2 && "1" === S2 ? 1 : 0 }, (A2 = d2["a:tableStyleId"]) && (P2 = r2.tableStyles["a:tblStyleLst"]["a:tblStyle"])) if (P2.constructor === Array) for (E2 = 0; E2 < P2.length; E2++) P2[E2].attrs.styleId === A2 && (C2 = P2[E2]);
            else P2.attrs.styleId === A2 && (C2 = P2);
            C2 && (C2.tblStylAttrObj = I2), R2 = {}, T2 = ml(C2, ["a:wholeTbl", "a:tcStyle"]), (O2 = ml(T2, ["a:tcBdr"])) && (R2 = xf(O2, r2)), j2 = "", (z2 = ml(C2, ["a:tblBg", "a:fillRef"])) && (j2 = gu(z2, void 0, void 0, r2)), void 0 === z2 && (z2 = ml(C2, ["a:wholeTbl", "a:tcStyle", "a:fill", "a:solidFill"]), j2 = gu(z2, void 0, void 0, r2)), (B2 = n2["a:tr"]).constructor !== Array && (B2 = [B2]), D2 = [], F2 = [], N2 = 0;
          case 33:
            if (!(N2 < B2.length)) {
              t3.next = 90;
              break;
            }
            if (U2 = B2[N2], G2 = ml(B2[N2], ["attrs", "h"]) || 0, q2 = parseInt(G2) * xu, F2.push(q2), W2 = Cf(B2, N2, I2, C2, r2), H2 = W2.fillColor, Z2 = W2.fontColor, Y2 = W2.fontBold, V2 = U2["a:tc"], Q2 = [], V2.constructor !== Array) {
              t3.next = 68;
              break;
            }
            $2 = 0;
          case 43:
            if (!($2 < V2.length)) {
              t3.next = 66;
              break;
            }
            return K2 = V2[$2], X2 = void 0, 0 === $2 && 1 === I2.isFrstColAttr ? (X2 = "a:firstCol", 1 === I2.isLstRowAttr && N2 === B2.length - 1 && ml(C2, ["a:seCell"]) ? X2 = "a:seCell" : 1 === I2.isFrstRowAttr && 0 === N2 && ml(C2, ["a:neCell"]) && (X2 = "a:neCell")) : !($2 > 0 && 1 === I2.isBandColAttr) || 1 === I2.isFrstColAttr && 0 === N2 || 1 === I2.isLstRowAttr && N2 === B2.length - 1 || $2 === V2.length - 1 || $2 % 2 != 0 && (void 0 === ml(C2, ["a:band2V"]) ? ml(C2, ["a:band1V"]) && (X2 = "a:band2V") : X2 = "a:band2V"), $2 === V2.length - 1 && 1 === I2.isLstColAttr && (X2 = "a:lastCol", 1 === I2.isLstRowAttr && N2 === B2.length - 1 && ml(C2, ["a:swCell"]) ? X2 = "a:swCell" : 1 === I2.isFrstRowAttr && 0 === N2 && ml(C2, ["a:nwCell"]) && (X2 = "a:nwCell")), J2 = pf(K2["a:txBody"], K2, void 0, void 0, void 0, r2), t3.next = 51, Sf(K2, C2, X2, r2);
          case 51:
            tt2 = t3.sent, et2 = { text: J2 }, tt2.rowSpan && (et2.rowSpan = tt2.rowSpan), tt2.colSpan && (et2.colSpan = tt2.colSpan), tt2.vMerge && (et2.vMerge = tt2.vMerge), tt2.hMerge && (et2.hMerge = tt2.hMerge), tt2.vAlign && (et2.vAlign = tt2.vAlign), (tt2.fontBold || Y2) && (et2.fontBold = tt2.fontBold || Y2), (tt2.fontColor || Z2) && (et2.fontColor = tt2.fontColor || Z2), (tt2.fillColor || H2 || j2) && (et2.fillColor = tt2.fillColor || H2 || j2), tt2.borders && (et2.borders = tt2.borders), Q2.push(et2);
          case 63:
            $2++, t3.next = 43;
            break;
          case 66:
            t3.next = 86;
            break;
          case 68:
            return rt2 = void 0, 1 === I2.isFrstColAttr && 1 !== I2.isLstRowAttr ? rt2 = "a:firstCol" : 1 === I2.isBandColAttr && 1 !== I2.isLstRowAttr && (ml(C2, ["a:band2V"]) || ml(C2, ["a:band1V"])) && (rt2 = "a:band2V"), 1 === I2.isLstColAttr && 1 !== I2.isLstRowAttr && (rt2 = "a:lastCol"), at2 = pf(V2["a:txBody"], V2, void 0, void 0, void 0, r2), t3.next = 74, Sf(V2, C2, rt2, r2);
          case 74:
            nt2 = t3.sent, ot2 = { text: at2 }, nt2.rowSpan && (ot2.rowSpan = nt2.rowSpan), nt2.colSpan && (ot2.colSpan = nt2.colSpan), nt2.vMerge && (ot2.vMerge = nt2.vMerge), nt2.hMerge && (ot2.hMerge = nt2.hMerge), nt2.vAlign && (ot2.vAlign = nt2.vAlign), (nt2.fontBold || Y2) && (ot2.fontBold = nt2.fontBold || Y2), (nt2.fontColor || Z2) && (ot2.fontColor = nt2.fontColor || Z2), (nt2.fillColor || H2 || j2) && (ot2.fillColor = nt2.fillColor || H2 || j2), nt2.borders && (ot2.borders = nt2.borders), Q2.push(ot2);
          case 86:
            D2.push(Q2);
          case 87:
            N2++, t3.next = 33;
            break;
          case 90:
            return ct2 = b2.reduce((function(t4, e3) {
              return t4 + e3;
            }), 0), ct2 && (ct2 = xl(ct2)), t3.abrupt("return", { type: "table", top: i2, left: s2, width: ct2 || f2, height: h2, data: D2, order: a2, borders: R2, rowHeights: F2, colWidths: b2 });
          case 93:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), jh.apply(this, arguments);
  }
  function zh(t2, e2) {
    return Bh.apply(this, arguments);
  }
  function Bh() {
    return Bh = n(u.mark((function t2(e2, r2) {
      var a2, n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            if (a2 = e2.attrs.order, n2 = ml(e2, ["p:xfrm"]), o2 = Yu(n2, void 0, void 0), c2 = o2.top, i2 = o2.left, s2 = Vu(n2, void 0, void 0), l2 = s2.width, f2 = s2.height, h2 = e2["a:graphic"]["a:graphicData"]["c:chart"].attrs["r:id"], (d2 = ml(r2.slideResObj, [h2, "target"])) || (d2 = ml(r2.layoutResObj, [h2, "target"])), d2 || (d2 = ml(r2.masterResObj, [h2, "target"])), d2) {
              t3.next = 10;
              break;
            }
            return t3.abrupt("return", null);
          case 10:
            return t3.next = 12, Ps(r2.zip, d2);
          case 12:
            if (p2 = t3.sent, b2 = ml(p2, ["c:chartSpace", "c:chart", "c:plotArea"]), g2 = Mu(b2, r2)) {
              t3.next = 17;
              break;
            }
            return t3.abrupt("return", null);
          case 17:
            return v2 = { type: "chart", top: c2, left: i2, width: l2, height: f2, data: g2.data, colors: g2.colors, chartType: g2.type, order: a2 }, void 0 !== g2.marker && (v2.marker = g2.marker), void 0 !== g2.barDir && (v2.barDir = g2.barDir), void 0 !== g2.holeSize && (v2.holeSize = g2.holeSize), void 0 !== g2.grouping && (v2.grouping = g2.grouping), void 0 !== g2.style && (v2.style = g2.style), t3.abrupt("return", v2);
          case 24:
          case "end":
            return t3.stop();
        }
      }), t2);
    }))), Bh.apply(this, arguments);
  }
  function Dh(t2, e2) {
    return Fh.apply(this, arguments);
  }
  function Fh() {
    return Fh = n(u.mark((function t2(e2, r2) {
      var a2, n2, o2, c2, i2, s2, l2, f2, h2, d2, p2, b2, g2, v2, m2, y2, L2;
      return u.wrap((function(t3) {
        for (; ; ) switch (t3.prev = t3.next) {
          case 0:
            return a2 = e2.attrs.order, n2 = ml(e2, ["p:xfrm"]), o2 = Yu(n2, void 0, void 0), c2 = o2.left, i2 = o2.top, s2 = Vu(n2, void 0, void 0), l2 = s2.width, f2 = s2.height, t3.next = 6, Zf(e2, r2);
          case 6:
            if (h2 = t3.sent, d2 = ml(h2.digramFileContent, ["p:drawing", "p:spTree", "p:sp"]), p2 = [], b2 = [], !d2) {
              t3.next = 31;
              break;
            }
            g2 = Array.isArray(d2) ? d2 : [d2], v2 = Kf(g2), t3.prev = 13, v2.s();
          case 15:
            if ((m2 = v2.n()).done) {
              t3.next = 23;
              break;
            }
            return y2 = m2.value, t3.next = 19, Mh(y2, h2, "diagramBg");
          case 19:
            (L2 = t3.sent) && p2.push(L2);
          case 21:
            t3.next = 15;
            break;
          case 23:
            t3.next = 28;
            break;
          case 25:
            t3.prev = 25, t3.t0 = t3.catch(13), v2.e(t3.t0);
          case 28:
            return t3.prev = 28, v2.f(), t3.finish(28);
          case 31:
            return h2.diagramContent && h2.diagramContent.data && (b2 = Vf(h2.diagramContent.data)), t3.abrupt("return", { type: "diagram", left: c2, top: i2, width: l2, height: f2, elements: p2, textList: b2, order: a2 });
          case 33:
          case "end":
            return t3.stop();
        }
      }), t2, null, [[13, 25, 28, 31]]);
    }))), Fh.apply(this, arguments);
  }
  return __toCommonJS(entry_pptx_exports);
})();

