"use strict";
const require$$0$2 = require("util");
const require$$0$1 = require("os");
const require$$0$3 = require("events");
const require$$2$1 = require("buffer");
const require$$10 = require("string_decoder/");
const require$$0$4 = require("fs");
const require$$1$1 = require("path");
const require$$3 = require("zlib");
const require$$1 = require("string_decoder");
const require$$0$5 = require("http");
const require$$1$2 = require("https");
const jsxRuntime = require("react/jsx-runtime");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const require$$0__default$1 = /* @__PURE__ */ _interopDefault(require$$0$2);
const require$$0__default = /* @__PURE__ */ _interopDefault(require$$0$1);
const require$$0__default$2 = /* @__PURE__ */ _interopDefault(require$$0$3);
const require$$2__default = /* @__PURE__ */ _interopDefault(require$$2$1);
const require$$10__default = /* @__PURE__ */ _interopDefault(require$$10);
const require$$0__default$3 = /* @__PURE__ */ _interopDefault(require$$0$4);
const require$$1__default$1 = /* @__PURE__ */ _interopDefault(require$$1$1);
const require$$3__default = /* @__PURE__ */ _interopDefault(require$$3);
const require$$1__default = /* @__PURE__ */ _interopDefault(require$$1);
const require$$0__default$4 = /* @__PURE__ */ _interopDefault(require$$0$5);
const require$$1__default$2 = /* @__PURE__ */ _interopDefault(require$$1$2);
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d2 = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var winston = {};
var browser$3 = {};
function _typeof$e(o) {
  "@babel/helpers - typeof";
  return _typeof$e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$e(o);
}
function _createClass$c(Constructor, protoProps, staticProps) {
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck$c(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf$3(subClass, superClass);
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$3(this, result);
  };
}
function _possibleConstructorReturn$3(self2, call2) {
  if (call2 && (_typeof$e(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$3(self2);
}
function _assertThisInitialized$3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf$3(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf$3(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$3()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf$3(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$3(o, p);
}
function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$3(o);
}
var InvalidFormatError = /* @__PURE__ */ function(_Error) {
  _inherits$3(InvalidFormatError2, _Error);
  var _super = _createSuper$3(InvalidFormatError2);
  function InvalidFormatError2(formatFn) {
    var _this2;
    _classCallCheck$c(this, InvalidFormatError2);
    _this2 = _super.call(this, "Format functions must be synchronous taking a two arguments: (info, opts)\nFound: ".concat(formatFn.toString().split("\n")[0], "\n"));
    Error.captureStackTrace(_assertThisInitialized$3(_this2), InvalidFormatError2);
    return _this2;
  }
  return _createClass$c(InvalidFormatError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
var format$f = function(formatFn) {
  if (formatFn.length > 2) {
    throw new InvalidFormatError(formatFn);
  }
  function Format() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.options = options;
  }
  Format.prototype.transform = formatFn;
  function createFormatWrap(opts) {
    return new Format(opts);
  }
  createFormatWrap.Format = Format;
  return createFormatWrap;
};
var colorize = { exports: {} };
var safe = { exports: {} };
var colors$2 = { exports: {} };
var styles = { exports: {} };
(function(module2) {
  var styles2 = {};
  module2["exports"] = styles2;
  var codes2 = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],
    brightRed: [91, 39],
    brightGreen: [92, 39],
    brightYellow: [93, 39],
    brightBlue: [94, 39],
    brightMagenta: [95, 39],
    brightCyan: [96, 39],
    brightWhite: [97, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgGray: [100, 49],
    bgGrey: [100, 49],
    bgBrightRed: [101, 49],
    bgBrightGreen: [102, 49],
    bgBrightYellow: [103, 49],
    bgBrightBlue: [104, 49],
    bgBrightMagenta: [105, 49],
    bgBrightCyan: [106, 49],
    bgBrightWhite: [107, 49],
    // legacy styles for colors pre v1.0.0
    blackBG: [40, 49],
    redBG: [41, 49],
    greenBG: [42, 49],
    yellowBG: [43, 49],
    blueBG: [44, 49],
    magentaBG: [45, 49],
    cyanBG: [46, 49],
    whiteBG: [47, 49]
  };
  Object.keys(codes2).forEach(function(key) {
    var val = codes2[key];
    var style = styles2[key] = [];
    style.open = "\x1B[" + val[0] + "m";
    style.close = "\x1B[" + val[1] + "m";
  });
})(styles);
var stylesExports = styles.exports;
var hasFlag$1 = function(flag, argv) {
  argv = argv || process.argv || [];
  var terminatorPos = argv.indexOf("--");
  var prefix = /^-{1,2}/.test(flag) ? "" : "--";
  var pos = argv.indexOf(prefix + flag);
  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};
var os$2 = require$$0__default.default;
var hasFlag = hasFlag$1;
var env = process.env;
var forceColor = void 0;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
  forceColor = false;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  forceColor = true;
}
if ("FORCE_COLOR" in env) {
  forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function supportsColor(stream2) {
  if (forceColor === false) {
    return 0;
  }
  if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
    return 3;
  }
  if (hasFlag("color=256")) {
    return 2;
  }
  if (stream2 && !stream2.isTTY && forceColor !== true) {
    return 0;
  }
  var min = forceColor ? 1 : 0;
  if (process.platform === "win32") {
    var osRelease = os$2.release().split(".");
    if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if ("TERM_PROGRAM" in env) {
    var version2 = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app":
        return version2 >= 3 ? 3 : 2;
      case "Hyper":
        return 3;
      case "Apple_Terminal":
        return 2;
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  if (env.TERM === "dumb") {
    return min;
  }
  return min;
}
function getSupportLevel(stream2) {
  var level = supportsColor(stream2);
  return translateLevel(level);
}
var supportsColors = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr)
};
var trap = { exports: {} };
var hasRequiredTrap;
function requireTrap() {
  if (hasRequiredTrap)
    return trap.exports;
  hasRequiredTrap = 1;
  (function(module2) {
    module2["exports"] = function runTheTrap(text, options) {
      var result = "";
      text = text || "Run the trap, drop the bass";
      text = text.split("");
      var trap2 = {
        a: ["@", "Ą", "Ⱥ", "Ʌ", "Δ", "Λ", "Д"],
        b: ["ß", "Ɓ", "Ƀ", "ɮ", "β", "฿"],
        c: ["©", "Ȼ", "Ͼ"],
        d: ["Ð", "Ɗ", "Ԁ", "ԁ", "Ԃ", "ԃ"],
        e: [
          "Ë",
          "ĕ",
          "Ǝ",
          "ɘ",
          "Σ",
          "ξ",
          "Ҽ",
          "੬"
        ],
        f: ["Ӻ"],
        g: ["ɢ"],
        h: ["Ħ", "ƕ", "Ң", "Һ", "Ӈ", "Ԋ"],
        i: ["༏"],
        j: ["Ĵ"],
        k: ["ĸ", "Ҡ", "Ӄ", "Ԟ"],
        l: ["Ĺ"],
        m: ["ʍ", "Ӎ", "ӎ", "Ԡ", "ԡ", "൩"],
        n: ["Ñ", "ŋ", "Ɲ", "Ͷ", "Π", "Ҋ"],
        o: [
          "Ø",
          "õ",
          "ø",
          "Ǿ",
          "ʘ",
          "Ѻ",
          "ם",
          "۝",
          "๏"
        ],
        p: ["Ƿ", "Ҏ"],
        q: ["্"],
        r: ["®", "Ʀ", "Ȑ", "Ɍ", "ʀ", "Я"],
        s: ["§", "Ϟ", "ϟ", "Ϩ"],
        t: ["Ł", "Ŧ", "ͳ"],
        u: ["Ʊ", "Ս"],
        v: ["ט"],
        w: ["Ш", "Ѡ", "Ѽ", "൰"],
        x: ["Ҳ", "Ӿ", "Ӽ", "ӽ"],
        y: ["¥", "Ұ", "Ӌ"],
        z: ["Ƶ", "ɀ"]
      };
      text.forEach(function(c) {
        c = c.toLowerCase();
        var chars = trap2[c] || [" "];
        var rand = Math.floor(Math.random() * chars.length);
        if (typeof trap2[c] !== "undefined") {
          result += trap2[c][rand];
        } else {
          result += c;
        }
      });
      return result;
    };
  })(trap);
  return trap.exports;
}
var zalgo = { exports: {} };
var hasRequiredZalgo;
function requireZalgo() {
  if (hasRequiredZalgo)
    return zalgo.exports;
  hasRequiredZalgo = 1;
  (function(module2) {
    module2["exports"] = function zalgo2(text, options) {
      text = text || "   he is here   ";
      var soul = {
        "up": [
          "̍",
          "̎",
          "̄",
          "̅",
          "̿",
          "̑",
          "̆",
          "̐",
          "͒",
          "͗",
          "͑",
          "̇",
          "̈",
          "̊",
          "͂",
          "̓",
          "̈",
          "͊",
          "͋",
          "͌",
          "̃",
          "̂",
          "̌",
          "͐",
          "̀",
          "́",
          "̋",
          "̏",
          "̒",
          "̓",
          "̔",
          "̽",
          "̉",
          "ͣ",
          "ͤ",
          "ͥ",
          "ͦ",
          "ͧ",
          "ͨ",
          "ͩ",
          "ͪ",
          "ͫ",
          "ͬ",
          "ͭ",
          "ͮ",
          "ͯ",
          "̾",
          "͛",
          "͆",
          "̚"
        ],
        "down": [
          "̖",
          "̗",
          "̘",
          "̙",
          "̜",
          "̝",
          "̞",
          "̟",
          "̠",
          "̤",
          "̥",
          "̦",
          "̩",
          "̪",
          "̫",
          "̬",
          "̭",
          "̮",
          "̯",
          "̰",
          "̱",
          "̲",
          "̳",
          "̹",
          "̺",
          "̻",
          "̼",
          "ͅ",
          "͇",
          "͈",
          "͉",
          "͍",
          "͎",
          "͓",
          "͔",
          "͕",
          "͖",
          "͙",
          "͚",
          "̣"
        ],
        "mid": [
          "̕",
          "̛",
          "̀",
          "́",
          "͘",
          "̡",
          "̢",
          "̧",
          "̨",
          "̴",
          "̵",
          "̶",
          "͜",
          "͝",
          "͞",
          "͟",
          "͠",
          "͢",
          "̸",
          "̷",
          "͡",
          " ҉"
        ]
      };
      var all = [].concat(soul.up, soul.down, soul.mid);
      function randomNumber(range) {
        var r = Math.floor(Math.random() * range);
        return r;
      }
      function isChar(character) {
        var bool = false;
        all.filter(function(i) {
          bool = i === character;
        });
        return bool;
      }
      function heComes(text2, options2) {
        var result = "";
        var counts;
        var l;
        options2 = options2 || {};
        options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
        options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
        options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
        options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
        text2 = text2.split("");
        for (l in text2) {
          if (isChar(l)) {
            continue;
          }
          result = result + text2[l];
          counts = { "up": 0, "down": 0, "mid": 0 };
          switch (options2.size) {
            case "mini":
              counts.up = randomNumber(8);
              counts.mid = randomNumber(2);
              counts.down = randomNumber(8);
              break;
            case "maxi":
              counts.up = randomNumber(16) + 3;
              counts.mid = randomNumber(4) + 1;
              counts.down = randomNumber(64) + 3;
              break;
            default:
              counts.up = randomNumber(8) + 1;
              counts.mid = randomNumber(6) / 2;
              counts.down = randomNumber(8) + 1;
              break;
          }
          var arr = ["up", "mid", "down"];
          for (var d2 in arr) {
            var index2 = arr[d2];
            for (var i = 0; i <= counts[index2]; i++) {
              if (options2[index2]) {
                result = result + soul[index2][randomNumber(soul[index2].length)];
              }
            }
          }
        }
        return result;
      }
      return heComes(text, options);
    };
  })(zalgo);
  return zalgo.exports;
}
var america = { exports: {} };
var hasRequiredAmerica;
function requireAmerica() {
  if (hasRequiredAmerica)
    return america.exports;
  hasRequiredAmerica = 1;
  (function(module2) {
    module2["exports"] = function(colors2) {
      return function(letter, i, exploded) {
        if (letter === " ")
          return letter;
        switch (i % 3) {
          case 0:
            return colors2.red(letter);
          case 1:
            return colors2.white(letter);
          case 2:
            return colors2.blue(letter);
        }
      };
    };
  })(america);
  return america.exports;
}
var zebra = { exports: {} };
var hasRequiredZebra;
function requireZebra() {
  if (hasRequiredZebra)
    return zebra.exports;
  hasRequiredZebra = 1;
  (function(module2) {
    module2["exports"] = function(colors2) {
      return function(letter, i, exploded) {
        return i % 2 === 0 ? letter : colors2.inverse(letter);
      };
    };
  })(zebra);
  return zebra.exports;
}
var rainbow = { exports: {} };
var hasRequiredRainbow;
function requireRainbow() {
  if (hasRequiredRainbow)
    return rainbow.exports;
  hasRequiredRainbow = 1;
  (function(module2) {
    module2["exports"] = function(colors2) {
      var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
      return function(letter, i, exploded) {
        if (letter === " ") {
          return letter;
        } else {
          return colors2[rainbowColors[i++ % rainbowColors.length]](letter);
        }
      };
    };
  })(rainbow);
  return rainbow.exports;
}
var random = { exports: {} };
var hasRequiredRandom;
function requireRandom() {
  if (hasRequiredRandom)
    return random.exports;
  hasRequiredRandom = 1;
  (function(module2) {
    module2["exports"] = function(colors2) {
      var available = [
        "underline",
        "inverse",
        "grey",
        "yellow",
        "red",
        "green",
        "blue",
        "white",
        "cyan",
        "magenta",
        "brightYellow",
        "brightRed",
        "brightGreen",
        "brightBlue",
        "brightWhite",
        "brightCyan",
        "brightMagenta"
      ];
      return function(letter, i, exploded) {
        return letter === " " ? letter : colors2[available[Math.round(Math.random() * (available.length - 2))]](letter);
      };
    };
  })(random);
  return random.exports;
}
(function(module2) {
  var colors2 = {};
  module2["exports"] = colors2;
  colors2.themes = {};
  var util2 = require$$0__default$1.default;
  var ansiStyles = colors2.styles = stylesExports;
  var defineProps = Object.defineProperties;
  var newLineRegex = new RegExp(/[\r\n]+/g);
  colors2.supportsColor = supportsColors.supportsColor;
  if (typeof colors2.enabled === "undefined") {
    colors2.enabled = colors2.supportsColor() !== false;
  }
  colors2.enable = function() {
    colors2.enabled = true;
  };
  colors2.disable = function() {
    colors2.enabled = false;
  };
  colors2.stripColors = colors2.strip = function(str) {
    return ("" + str).replace(/\x1B\[\d+m/g, "");
  };
  colors2.stylize = function stylize(str, style) {
    if (!colors2.enabled) {
      return str + "";
    }
    var styleMap = ansiStyles[style];
    if (!styleMap && style in colors2) {
      return colors2[style](str);
    }
    return styleMap.open + str + styleMap.close;
  };
  var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
  var escapeStringRegexp = function(str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string");
    }
    return str.replace(matchOperatorsRe, "\\$&");
  };
  function build(_styles) {
    var builder = function builder2() {
      return applyStyle.apply(builder2, arguments);
    };
    builder._styles = _styles;
    builder.__proto__ = proto;
    return builder;
  }
  var styles2 = function() {
    var ret = {};
    ansiStyles.grey = ansiStyles.gray;
    Object.keys(ansiStyles).forEach(function(key) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      ret[key] = {
        get: function() {
          return build(this._styles.concat(key));
        }
      };
    });
    return ret;
  }();
  var proto = defineProps(function colors3() {
  }, styles2);
  function applyStyle() {
    var args = Array.prototype.slice.call(arguments);
    var str = args.map(function(arg) {
      if (arg != null && arg.constructor === String) {
        return arg;
      } else {
        return util2.inspect(arg);
      }
    }).join(" ");
    if (!colors2.enabled || !str) {
      return str;
    }
    var newLinesPresent = str.indexOf("\n") != -1;
    var nestedStyles = this._styles;
    var i = nestedStyles.length;
    while (i--) {
      var code = ansiStyles[nestedStyles[i]];
      str = code.open + str.replace(code.closeRe, code.open) + code.close;
      if (newLinesPresent) {
        str = str.replace(newLineRegex, function(match) {
          return code.close + match + code.open;
        });
      }
    }
    return str;
  }
  colors2.setTheme = function(theme) {
    if (typeof theme === "string") {
      console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
      return;
    }
    for (var style in theme) {
      (function(style2) {
        colors2[style2] = function(str) {
          if (typeof theme[style2] === "object") {
            var out = str;
            for (var i in theme[style2]) {
              out = colors2[theme[style2][i]](out);
            }
            return out;
          }
          return colors2[theme[style2]](str);
        };
      })(style);
    }
  };
  function init() {
    var ret = {};
    Object.keys(styles2).forEach(function(name3) {
      ret[name3] = {
        get: function() {
          return build([name3]);
        }
      };
    });
    return ret;
  }
  var sequencer = function sequencer2(map3, str) {
    var exploded = str.split("");
    exploded = exploded.map(map3);
    return exploded.join("");
  };
  colors2.trap = requireTrap();
  colors2.zalgo = requireZalgo();
  colors2.maps = {};
  colors2.maps.america = requireAmerica()(colors2);
  colors2.maps.zebra = requireZebra()(colors2);
  colors2.maps.rainbow = requireRainbow()(colors2);
  colors2.maps.random = requireRandom()(colors2);
  for (var map2 in colors2.maps) {
    (function(map3) {
      colors2[map3] = function(str) {
        return sequencer(colors2.maps[map3], str);
      };
    })(map2);
  }
  defineProps(colors2, init());
})(colors$2);
var colorsExports = colors$2.exports;
(function(module2) {
  var colors2 = colorsExports;
  module2["exports"] = colors2;
})(safe);
var safeExports = safe.exports;
var tripleBeam = {};
var config$4 = {};
var cli$1 = {};
cli$1.levels = {
  error: 0,
  warn: 1,
  help: 2,
  data: 3,
  info: 4,
  debug: 5,
  prompt: 6,
  verbose: 7,
  input: 8,
  silly: 9
};
cli$1.colors = {
  error: "red",
  warn: "yellow",
  help: "cyan",
  data: "grey",
  info: "green",
  debug: "blue",
  prompt: "grey",
  verbose: "cyan",
  input: "grey",
  silly: "magenta"
};
var npm = {};
npm.levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
npm.colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "green",
  verbose: "cyan",
  debug: "blue",
  silly: "magenta"
};
var syslog = {};
syslog.levels = {
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7
};
syslog.colors = {
  emerg: "red",
  alert: "yellow",
  crit: "red",
  error: "red",
  warning: "red",
  notice: "yellow",
  info: "green",
  debug: "blue"
};
(function(exports2) {
  Object.defineProperty(exports2, "cli", {
    value: cli$1
  });
  Object.defineProperty(exports2, "npm", {
    value: npm
  });
  Object.defineProperty(exports2, "syslog", {
    value: syslog
  });
})(config$4);
(function(exports2) {
  Object.defineProperty(exports2, "LEVEL", {
    value: Symbol.for("level")
  });
  Object.defineProperty(exports2, "MESSAGE", {
    value: Symbol.for("message")
  });
  Object.defineProperty(exports2, "SPLAT", {
    value: Symbol.for("splat")
  });
  Object.defineProperty(exports2, "configs", {
    value: config$4
  });
})(tripleBeam);
function _typeof$d(o) {
  "@babel/helpers - typeof";
  return _typeof$d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$d(o);
}
function _classCallCheck$b(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$a(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$c(descriptor.key), descriptor);
  }
}
function _createClass$b(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$a(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$a(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$c(t) {
  var i = _toPrimitive$c(t, "string");
  return "symbol" == _typeof$d(i) ? i : String(i);
}
function _toPrimitive$c(t, r) {
  if ("object" != _typeof$d(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$d(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var colors$1 = safeExports;
var _require$h = tripleBeam, LEVEL$9 = _require$h.LEVEL, MESSAGE$9 = _require$h.MESSAGE;
colors$1.enabled = true;
var hasSpace = /\s+/;
var Colorizer$2 = /* @__PURE__ */ function() {
  function Colorizer2() {
    var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck$b(this, Colorizer2);
    if (opts.colors) {
      this.addColors(opts.colors);
    }
    this.options = opts;
  }
  _createClass$b(Colorizer2, [{
    key: "addColors",
    value: (
      /*
       * Adds the colors Object to the set of allColors
       * known by the Colorizer
       *
       * @param {Object} colors Set of color mappings to add.
       */
      function addColors(clrs) {
        return Colorizer2.addColors(clrs);
      }
    )
    /*
     * function colorize (lookup, level, message)
     * Performs multi-step colorization using @colors/colors/safe
     */
  }, {
    key: "colorize",
    value: function colorize2(lookup, level, message) {
      if (typeof message === "undefined") {
        message = level;
      }
      if (!Array.isArray(Colorizer2.allColors[lookup])) {
        return colors$1[Colorizer2.allColors[lookup]](message);
      }
      for (var i = 0, len = Colorizer2.allColors[lookup].length; i < len; i++) {
        message = colors$1[Colorizer2.allColors[lookup][i]](message);
      }
      return message;
    }
    /*
     * function transform (info, opts)
     * Attempts to colorize the { level, message } of the given
     * `logform` info object.
     */
  }, {
    key: "transform",
    value: function transform(info, opts) {
      if (opts.all && typeof info[MESSAGE$9] === "string") {
        info[MESSAGE$9] = this.colorize(info[LEVEL$9], info.level, info[MESSAGE$9]);
      }
      if (opts.level || opts.all || !opts.message) {
        info.level = this.colorize(info[LEVEL$9], info.level);
      }
      if (opts.all || opts.message) {
        info.message = this.colorize(info[LEVEL$9], info.level, info.message);
      }
      return info;
    }
  }], [{
    key: "addColors",
    value: function addColors(clrs) {
      var nextColors = Object.keys(clrs).reduce(function(acc, level) {
        acc[level] = hasSpace.test(clrs[level]) ? clrs[level].split(hasSpace) : clrs[level];
        return acc;
      }, {});
      Colorizer2.allColors = Object.assign({}, Colorizer2.allColors || {}, nextColors);
      return Colorizer2.allColors;
    }
  }]);
  return Colorizer2;
}();
colorize.exports = function(opts) {
  return new Colorizer$2(opts);
};
colorize.exports.Colorizer = colorize.exports.Format = Colorizer$2;
var colorizeExports = colorize.exports;
var _require$g = colorizeExports, Colorizer$1 = _require$g.Colorizer;
var levels = function(config2) {
  Colorizer$1.addColors(config2.colors || config2);
  return config2;
};
var format$e = format$f;
var align = format$e(function(info) {
  info.message = "	".concat(info.message);
  return info;
});
var cli = { exports: {} };
var padLevels = { exports: {} };
function _typeof$c(o) {
  "@babel/helpers - typeof";
  return _typeof$c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$c(o);
}
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$b(descriptor.key), descriptor);
  }
}
function _createClass$a(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$9(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$b(t) {
  var i = _toPrimitive$b(t, "string");
  return "symbol" == _typeof$c(i) ? i : String(i);
}
function _toPrimitive$b(t, r) {
  if ("object" != _typeof$c(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$c(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var _require$f = tripleBeam, configs$2 = _require$f.configs, LEVEL$8 = _require$f.LEVEL, MESSAGE$8 = _require$f.MESSAGE;
var Padder$1 = /* @__PURE__ */ function() {
  function Padder2() {
    var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      levels: configs$2.npm.levels
    };
    _classCallCheck$a(this, Padder2);
    this.paddings = Padder2.paddingForLevels(opts.levels, opts.filler);
    this.options = opts;
  }
  _createClass$a(Padder2, [{
    key: "transform",
    value: (
      /**
       * Prepends the padding onto the `message` based on the `LEVEL` of
       * the `info`. This is based on the behavior of `winston@2` which also
       * prepended the level onto the message.
       *
       * See: https://github.com/winstonjs/winston/blob/2.x/lib/winston/logger.js#L198-L201
       *
       * @param  {Info} info Logform info object
       * @param  {Object} opts Options passed along to this instance.
       * @returns {Info} Modified logform info object.
       */
      function transform(info, opts) {
        info.message = "".concat(this.paddings[info[LEVEL$8]]).concat(info.message);
        if (info[MESSAGE$8]) {
          info[MESSAGE$8] = "".concat(this.paddings[info[LEVEL$8]]).concat(info[MESSAGE$8]);
        }
        return info;
      }
    )
  }], [{
    key: "getLongestLevel",
    value: function getLongestLevel(levels2) {
      var lvls = Object.keys(levels2).map(function(level) {
        return level.length;
      });
      return Math.max.apply(Math, _toConsumableArray$1(lvls));
    }
    /**
     * Returns the padding for the specified `level` assuming that the
     * maximum length of all levels it's associated with is `maxLength`.
     * @param  {String} level Level to calculate padding for.
     * @param  {String} filler Repeatable text to use for padding.
     * @param  {Number} maxLength Length of the longest level
     * @returns {String} Padding string for the `level`
     */
  }, {
    key: "paddingForLevel",
    value: function paddingForLevel(level, filler, maxLength) {
      var targetLen = maxLength + 1 - level.length;
      var rep = Math.floor(targetLen / filler.length);
      var padding = "".concat(filler).concat(filler.repeat(rep));
      return padding.slice(0, targetLen);
    }
    /**
     * Returns an object with the string paddings for the given `levels`
     * using the specified `filler`.
     * @param  {Object} levels Set of all levels to calculate padding for.
     * @param  {String} filler Repeatable text to use for padding.
     * @returns {Object} Mapping of level to desired padding.
     */
  }, {
    key: "paddingForLevels",
    value: function paddingForLevels(levels2) {
      var filler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
      var maxLength = Padder2.getLongestLevel(levels2);
      return Object.keys(levels2).reduce(function(acc, level) {
        acc[level] = Padder2.paddingForLevel(level, filler, maxLength);
        return acc;
      }, {});
    }
  }]);
  return Padder2;
}();
padLevels.exports = function(opts) {
  return new Padder$1(opts);
};
padLevels.exports.Padder = padLevels.exports.Format = Padder$1;
var padLevelsExports = padLevels.exports;
function _typeof$b(o) {
  "@babel/helpers - typeof";
  return _typeof$b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$b(o);
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$a(descriptor.key), descriptor);
  }
}
function _createClass$9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$8(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$a(t) {
  var i = _toPrimitive$a(t, "string");
  return "symbol" == _typeof$b(i) ? i : String(i);
}
function _toPrimitive$a(t, r) {
  if ("object" != _typeof$b(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$b(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var _require$e = colorizeExports, Colorizer = _require$e.Colorizer;
var _require2$1 = padLevelsExports, Padder = _require2$1.Padder;
var _require3$1 = tripleBeam, configs$1 = _require3$1.configs, MESSAGE$7 = _require3$1.MESSAGE;
var CliFormat = /* @__PURE__ */ function() {
  function CliFormat2() {
    var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck$9(this, CliFormat2);
    if (!opts.levels) {
      opts.levels = configs$1.cli.levels;
    }
    this.colorizer = new Colorizer(opts);
    this.padder = new Padder(opts);
    this.options = opts;
  }
  _createClass$9(CliFormat2, [{
    key: "transform",
    value: function transform(info, opts) {
      this.colorizer.transform(this.padder.transform(info, opts), opts);
      info[MESSAGE$7] = "".concat(info.level, ":").concat(info.message);
      return info;
    }
  }]);
  return CliFormat2;
}();
cli.exports = function(opts) {
  return new CliFormat(opts);
};
cli.exports.Format = CliFormat;
var cliExports = cli.exports;
var combine = { exports: {} };
var format$d = format$f;
function cascade(formats) {
  if (!formats.every(isValidFormat)) {
    return;
  }
  return function(info) {
    var obj = info;
    for (var i = 0; i < formats.length; i++) {
      obj = formats[i].transform(obj, formats[i].options);
      if (!obj) {
        return false;
      }
    }
    return obj;
  };
}
function isValidFormat(fmt) {
  if (typeof fmt.transform !== "function") {
    throw new Error(["No transform function found on format. Did you create a format instance?", "const myFormat = format(formatFn);", "const instance = myFormat();"].join("\n"));
  }
  return true;
}
combine.exports = function() {
  for (var _len = arguments.length, formats = new Array(_len), _key = 0; _key < _len; _key++) {
    formats[_key] = arguments[_key];
  }
  var combinedFormat = format$d(cascade(formats));
  var instance = combinedFormat();
  instance.Format = combinedFormat.Format;
  return instance;
};
combine.exports.cascade = cascade;
var combineExports = combine.exports;
function _typeof$a(o) {
  "@babel/helpers - typeof";
  return _typeof$a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$a(o);
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$9(t) {
  var i = _toPrimitive$9(t, "string");
  return "symbol" == _typeof$a(i) ? i : String(i);
}
function _toPrimitive$9(t, r) {
  if ("object" != _typeof$a(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$a(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var format$c = format$f;
var _require$d = tripleBeam, LEVEL$7 = _require$d.LEVEL, MESSAGE$6 = _require$d.MESSAGE;
var errors = format$c(function(einfo, _ref) {
  var stack = _ref.stack, cause = _ref.cause;
  if (einfo instanceof Error) {
    var info = Object.assign({}, einfo, _defineProperty$3(_defineProperty$3(_defineProperty$3({
      level: einfo.level
    }, LEVEL$7, einfo[LEVEL$7] || einfo.level), "message", einfo.message), MESSAGE$6, einfo[MESSAGE$6] || einfo.message));
    if (stack)
      info.stack = einfo.stack;
    if (cause)
      info.cause = einfo.cause;
    return info;
  }
  if (!(einfo.message instanceof Error))
    return einfo;
  var err = einfo.message;
  Object.assign(einfo, err);
  einfo.message = err.message;
  einfo[MESSAGE$6] = err.message;
  if (stack)
    einfo.stack = err.stack;
  if (cause)
    einfo.cause = err.cause;
  return einfo;
});
var safeStableStringify = { exports: {} };
(function(module2, exports2) {
  const { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
  const stringify2 = configure();
  stringify2.configure = configure;
  stringify2.stringify = stringify2;
  stringify2.default = stringify2;
  exports2.stringify = stringify2;
  exports2.configure = configure;
  module2.exports = stringify2;
  const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
  function strEscape(str) {
    if (str.length < 5e3 && !strEscapeSequencesRegExp.test(str)) {
      return `"${str}"`;
    }
    return JSON.stringify(str);
  }
  function insertSort(array2) {
    if (array2.length > 200) {
      return array2.sort();
    }
    for (let i = 1; i < array2.length; i++) {
      const currentValue = array2[i];
      let position = i;
      while (position !== 0 && array2[position - 1] > currentValue) {
        array2[position] = array2[position - 1];
        position--;
      }
      array2[position] = currentValue;
    }
    return array2;
  }
  const typedArrayPrototypeGetSymbolToStringTag = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(
      Object.getPrototypeOf(
        new Int8Array()
      )
    ),
    Symbol.toStringTag
  ).get;
  function isTypedArrayWithEntries(value) {
    return typedArrayPrototypeGetSymbolToStringTag.call(value) !== void 0 && value.length !== 0;
  }
  function stringifyTypedArray(array2, separator, maximumBreadth) {
    if (array2.length < maximumBreadth) {
      maximumBreadth = array2.length;
    }
    const whitespace = separator === "," ? "" : " ";
    let res = `"0":${whitespace}${array2[0]}`;
    for (let i = 1; i < maximumBreadth; i++) {
      res += `${separator}"${i}":${whitespace}${array2[i]}`;
    }
    return res;
  }
  function getCircularValueOption(options) {
    if (hasOwnProperty2.call(options, "circularValue")) {
      const circularValue = options.circularValue;
      if (typeof circularValue === "string") {
        return `"${circularValue}"`;
      }
      if (circularValue == null) {
        return circularValue;
      }
      if (circularValue === Error || circularValue === TypeError) {
        return {
          toString() {
            throw new TypeError("Converting circular structure to JSON");
          }
        };
      }
      throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
    }
    return '"[Circular]"';
  }
  function getBooleanOption(options, key) {
    let value;
    if (hasOwnProperty2.call(options, key)) {
      value = options[key];
      if (typeof value !== "boolean") {
        throw new TypeError(`The "${key}" argument must be of type boolean`);
      }
    }
    return value === void 0 ? true : value;
  }
  function getPositiveIntegerOption(options, key) {
    let value;
    if (hasOwnProperty2.call(options, key)) {
      value = options[key];
      if (typeof value !== "number") {
        throw new TypeError(`The "${key}" argument must be of type number`);
      }
      if (!Number.isInteger(value)) {
        throw new TypeError(`The "${key}" argument must be an integer`);
      }
      if (value < 1) {
        throw new RangeError(`The "${key}" argument must be >= 1`);
      }
    }
    return value === void 0 ? Infinity : value;
  }
  function getItemCount(number2) {
    if (number2 === 1) {
      return "1 item";
    }
    return `${number2} items`;
  }
  function getUniqueReplacerSet(replacerArray) {
    const replacerSet = /* @__PURE__ */ new Set();
    for (const value of replacerArray) {
      if (typeof value === "string" || typeof value === "number") {
        replacerSet.add(String(value));
      }
    }
    return replacerSet;
  }
  function getStrictOption(options) {
    if (hasOwnProperty2.call(options, "strict")) {
      const value = options.strict;
      if (typeof value !== "boolean") {
        throw new TypeError('The "strict" argument must be of type boolean');
      }
      if (value) {
        return (value2) => {
          let message = `Object can not safely be stringified. Received type ${typeof value2}`;
          if (typeof value2 !== "function")
            message += ` (${value2.toString()})`;
          throw new Error(message);
        };
      }
    }
  }
  function configure(options) {
    options = { ...options };
    const fail = getStrictOption(options);
    if (fail) {
      if (options.bigint === void 0) {
        options.bigint = false;
      }
      if (!("circularValue" in options)) {
        options.circularValue = Error;
      }
    }
    const circularValue = getCircularValueOption(options);
    const bigint = getBooleanOption(options, "bigint");
    const deterministic = getBooleanOption(options, "deterministic");
    const maximumDepth = getPositiveIntegerOption(options, "maximumDepth");
    const maximumBreadth = getPositiveIntegerOption(options, "maximumBreadth");
    function stringifyFnReplacer(key, parent, stack, replacer2, spacer, indentation) {
      let value = parent[key];
      if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
        value = value.toJSON(key);
      }
      value = replacer2.call(parent, key, value);
      switch (typeof value) {
        case "string":
          return strEscape(value);
        case "object": {
          if (value === null) {
            return "null";
          }
          if (stack.indexOf(value) !== -1) {
            return circularValue;
          }
          let res = "";
          let join = ",";
          const originalIndentation = indentation;
          if (Array.isArray(value)) {
            if (value.length === 0) {
              return "[]";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Array]"';
            }
            stack.push(value);
            if (spacer !== "") {
              indentation += spacer;
              res += `
${indentation}`;
              join = `,
${indentation}`;
            }
            const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
            let i = 0;
            for (; i < maximumValuesToStringify - 1; i++) {
              const tmp2 = stringifyFnReplacer(String(i), value, stack, replacer2, spacer, indentation);
              res += tmp2 !== void 0 ? tmp2 : "null";
              res += join;
            }
            const tmp = stringifyFnReplacer(String(i), value, stack, replacer2, spacer, indentation);
            res += tmp !== void 0 ? tmp : "null";
            if (value.length - 1 > maximumBreadth) {
              const removedKeys = value.length - maximumBreadth - 1;
              res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
            }
            if (spacer !== "") {
              res += `
${originalIndentation}`;
            }
            stack.pop();
            return `[${res}]`;
          }
          let keys2 = Object.keys(value);
          const keyLength = keys2.length;
          if (keyLength === 0) {
            return "{}";
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Object]"';
          }
          let whitespace = "";
          let separator = "";
          if (spacer !== "") {
            indentation += spacer;
            join = `,
${indentation}`;
            whitespace = " ";
          }
          const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
          if (deterministic && !isTypedArrayWithEntries(value)) {
            keys2 = insertSort(keys2);
          }
          stack.push(value);
          for (let i = 0; i < maximumPropertiesToStringify; i++) {
            const key2 = keys2[i];
            const tmp = stringifyFnReplacer(key2, value, stack, replacer2, spacer, indentation);
            if (tmp !== void 0) {
              res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
              separator = join;
            }
          }
          if (keyLength > maximumBreadth) {
            const removedKeys = keyLength - maximumBreadth;
            res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
            separator = join;
          }
          if (spacer !== "" && separator.length > 1) {
            res = `
${indentation}${res}
${originalIndentation}`;
          }
          stack.pop();
          return `{${res}}`;
        }
        case "number":
          return isFinite(value) ? String(value) : fail ? fail(value) : "null";
        case "boolean":
          return value === true ? "true" : "false";
        case "undefined":
          return void 0;
        case "bigint":
          if (bigint) {
            return String(value);
          }
        default:
          return fail ? fail(value) : void 0;
      }
    }
    function stringifyArrayReplacer(key, value, stack, replacer2, spacer, indentation) {
      if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
        value = value.toJSON(key);
      }
      switch (typeof value) {
        case "string":
          return strEscape(value);
        case "object": {
          if (value === null) {
            return "null";
          }
          if (stack.indexOf(value) !== -1) {
            return circularValue;
          }
          const originalIndentation = indentation;
          let res = "";
          let join = ",";
          if (Array.isArray(value)) {
            if (value.length === 0) {
              return "[]";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Array]"';
            }
            stack.push(value);
            if (spacer !== "") {
              indentation += spacer;
              res += `
${indentation}`;
              join = `,
${indentation}`;
            }
            const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
            let i = 0;
            for (; i < maximumValuesToStringify - 1; i++) {
              const tmp2 = stringifyArrayReplacer(String(i), value[i], stack, replacer2, spacer, indentation);
              res += tmp2 !== void 0 ? tmp2 : "null";
              res += join;
            }
            const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer2, spacer, indentation);
            res += tmp !== void 0 ? tmp : "null";
            if (value.length - 1 > maximumBreadth) {
              const removedKeys = value.length - maximumBreadth - 1;
              res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
            }
            if (spacer !== "") {
              res += `
${originalIndentation}`;
            }
            stack.pop();
            return `[${res}]`;
          }
          stack.push(value);
          let whitespace = "";
          if (spacer !== "") {
            indentation += spacer;
            join = `,
${indentation}`;
            whitespace = " ";
          }
          let separator = "";
          for (const key2 of replacer2) {
            const tmp = stringifyArrayReplacer(key2, value[key2], stack, replacer2, spacer, indentation);
            if (tmp !== void 0) {
              res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
              separator = join;
            }
          }
          if (spacer !== "" && separator.length > 1) {
            res = `
${indentation}${res}
${originalIndentation}`;
          }
          stack.pop();
          return `{${res}}`;
        }
        case "number":
          return isFinite(value) ? String(value) : fail ? fail(value) : "null";
        case "boolean":
          return value === true ? "true" : "false";
        case "undefined":
          return void 0;
        case "bigint":
          if (bigint) {
            return String(value);
          }
        default:
          return fail ? fail(value) : void 0;
      }
    }
    function stringifyIndent(key, value, stack, spacer, indentation) {
      switch (typeof value) {
        case "string":
          return strEscape(value);
        case "object": {
          if (value === null) {
            return "null";
          }
          if (typeof value.toJSON === "function") {
            value = value.toJSON(key);
            if (typeof value !== "object") {
              return stringifyIndent(key, value, stack, spacer, indentation);
            }
            if (value === null) {
              return "null";
            }
          }
          if (stack.indexOf(value) !== -1) {
            return circularValue;
          }
          const originalIndentation = indentation;
          if (Array.isArray(value)) {
            if (value.length === 0) {
              return "[]";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Array]"';
            }
            stack.push(value);
            indentation += spacer;
            let res2 = `
${indentation}`;
            const join2 = `,
${indentation}`;
            const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
            let i = 0;
            for (; i < maximumValuesToStringify - 1; i++) {
              const tmp2 = stringifyIndent(String(i), value[i], stack, spacer, indentation);
              res2 += tmp2 !== void 0 ? tmp2 : "null";
              res2 += join2;
            }
            const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
            res2 += tmp !== void 0 ? tmp : "null";
            if (value.length - 1 > maximumBreadth) {
              const removedKeys = value.length - maximumBreadth - 1;
              res2 += `${join2}"... ${getItemCount(removedKeys)} not stringified"`;
            }
            res2 += `
${originalIndentation}`;
            stack.pop();
            return `[${res2}]`;
          }
          let keys2 = Object.keys(value);
          const keyLength = keys2.length;
          if (keyLength === 0) {
            return "{}";
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Object]"';
          }
          indentation += spacer;
          const join = `,
${indentation}`;
          let res = "";
          let separator = "";
          let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
          if (isTypedArrayWithEntries(value)) {
            res += stringifyTypedArray(value, join, maximumBreadth);
            keys2 = keys2.slice(value.length);
            maximumPropertiesToStringify -= value.length;
            separator = join;
          }
          if (deterministic) {
            keys2 = insertSort(keys2);
          }
          stack.push(value);
          for (let i = 0; i < maximumPropertiesToStringify; i++) {
            const key2 = keys2[i];
            const tmp = stringifyIndent(key2, value[key2], stack, spacer, indentation);
            if (tmp !== void 0) {
              res += `${separator}${strEscape(key2)}: ${tmp}`;
              separator = join;
            }
          }
          if (keyLength > maximumBreadth) {
            const removedKeys = keyLength - maximumBreadth;
            res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
            separator = join;
          }
          if (separator !== "") {
            res = `
${indentation}${res}
${originalIndentation}`;
          }
          stack.pop();
          return `{${res}}`;
        }
        case "number":
          return isFinite(value) ? String(value) : fail ? fail(value) : "null";
        case "boolean":
          return value === true ? "true" : "false";
        case "undefined":
          return void 0;
        case "bigint":
          if (bigint) {
            return String(value);
          }
        default:
          return fail ? fail(value) : void 0;
      }
    }
    function stringifySimple(key, value, stack) {
      switch (typeof value) {
        case "string":
          return strEscape(value);
        case "object": {
          if (value === null) {
            return "null";
          }
          if (typeof value.toJSON === "function") {
            value = value.toJSON(key);
            if (typeof value !== "object") {
              return stringifySimple(key, value, stack);
            }
            if (value === null) {
              return "null";
            }
          }
          if (stack.indexOf(value) !== -1) {
            return circularValue;
          }
          let res = "";
          if (Array.isArray(value)) {
            if (value.length === 0) {
              return "[]";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Array]"';
            }
            stack.push(value);
            const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
            let i = 0;
            for (; i < maximumValuesToStringify - 1; i++) {
              const tmp2 = stringifySimple(String(i), value[i], stack);
              res += tmp2 !== void 0 ? tmp2 : "null";
              res += ",";
            }
            const tmp = stringifySimple(String(i), value[i], stack);
            res += tmp !== void 0 ? tmp : "null";
            if (value.length - 1 > maximumBreadth) {
              const removedKeys = value.length - maximumBreadth - 1;
              res += `,"... ${getItemCount(removedKeys)} not stringified"`;
            }
            stack.pop();
            return `[${res}]`;
          }
          let keys2 = Object.keys(value);
          const keyLength = keys2.length;
          if (keyLength === 0) {
            return "{}";
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Object]"';
          }
          let separator = "";
          let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
          if (isTypedArrayWithEntries(value)) {
            res += stringifyTypedArray(value, ",", maximumBreadth);
            keys2 = keys2.slice(value.length);
            maximumPropertiesToStringify -= value.length;
            separator = ",";
          }
          if (deterministic) {
            keys2 = insertSort(keys2);
          }
          stack.push(value);
          for (let i = 0; i < maximumPropertiesToStringify; i++) {
            const key2 = keys2[i];
            const tmp = stringifySimple(key2, value[key2], stack);
            if (tmp !== void 0) {
              res += `${separator}${strEscape(key2)}:${tmp}`;
              separator = ",";
            }
          }
          if (keyLength > maximumBreadth) {
            const removedKeys = keyLength - maximumBreadth;
            res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
          }
          stack.pop();
          return `{${res}}`;
        }
        case "number":
          return isFinite(value) ? String(value) : fail ? fail(value) : "null";
        case "boolean":
          return value === true ? "true" : "false";
        case "undefined":
          return void 0;
        case "bigint":
          if (bigint) {
            return String(value);
          }
        default:
          return fail ? fail(value) : void 0;
      }
    }
    function stringify3(value, replacer2, space) {
      if (arguments.length > 1) {
        let spacer = "";
        if (typeof space === "number") {
          spacer = " ".repeat(Math.min(space, 10));
        } else if (typeof space === "string") {
          spacer = space.slice(0, 10);
        }
        if (replacer2 != null) {
          if (typeof replacer2 === "function") {
            return stringifyFnReplacer("", { "": value }, [], replacer2, spacer, "");
          }
          if (Array.isArray(replacer2)) {
            return stringifyArrayReplacer("", value, [], getUniqueReplacerSet(replacer2), spacer, "");
          }
        }
        if (spacer.length !== 0) {
          return stringifyIndent("", value, [], spacer, "");
        }
      }
      return stringifySimple("", value, []);
    }
    return stringify3;
  }
})(safeStableStringify, safeStableStringify.exports);
var safeStableStringifyExports = safeStableStringify.exports;
var format$b = format$f;
var _require$c = tripleBeam, MESSAGE$5 = _require$c.MESSAGE;
var stringify = safeStableStringifyExports;
function replacer(key, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
var json$1 = format$b(function(info, opts) {
  var jsonStringify2 = stringify.configure(opts);
  info[MESSAGE$5] = jsonStringify2(info, opts.replacer || replacer, opts.space);
  return info;
});
var format$a = format$f;
var label = format$a(function(info, opts) {
  if (opts.message) {
    info.message = "[".concat(opts.label, "] ").concat(info.message);
    return info;
  }
  info.label = opts.label;
  return info;
});
var format$9 = format$f;
var _require$b = tripleBeam, MESSAGE$4 = _require$b.MESSAGE;
var jsonStringify$1 = safeStableStringifyExports;
var logstash = format$9(function(info) {
  var logstash2 = {};
  if (info.message) {
    logstash2["@message"] = info.message;
    delete info.message;
  }
  if (info.timestamp) {
    logstash2["@timestamp"] = info.timestamp;
    delete info.timestamp;
  }
  logstash2["@fields"] = info;
  info[MESSAGE$4] = jsonStringify$1(logstash2);
  return info;
});
function _typeof$9(o) {
  "@babel/helpers - typeof";
  return _typeof$9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$9(o);
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$8(t) {
  var i = _toPrimitive$8(t, "string");
  return "symbol" == _typeof$9(i) ? i : String(i);
}
function _toPrimitive$8(t, r) {
  if ("object" != _typeof$9(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$9(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var format$8 = format$f;
function fillExcept(info, fillExceptKeys, metadataKey) {
  var savedKeys = fillExceptKeys.reduce(function(acc, key) {
    acc[key] = info[key];
    delete info[key];
    return acc;
  }, {});
  var metadata2 = Object.keys(info).reduce(function(acc, key) {
    acc[key] = info[key];
    delete info[key];
    return acc;
  }, {});
  Object.assign(info, savedKeys, _defineProperty$2({}, metadataKey, metadata2));
  return info;
}
function fillWith(info, fillWithKeys, metadataKey) {
  info[metadataKey] = fillWithKeys.reduce(function(acc, key) {
    acc[key] = info[key];
    delete info[key];
    return acc;
  }, {});
  return info;
}
var metadata = format$8(function(info) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var metadataKey = "metadata";
  if (opts.key) {
    metadataKey = opts.key;
  }
  var fillExceptKeys = [];
  if (!opts.fillExcept && !opts.fillWith) {
    fillExceptKeys.push("level");
    fillExceptKeys.push("message");
  }
  if (opts.fillExcept) {
    fillExceptKeys = opts.fillExcept;
  }
  if (fillExceptKeys.length > 0) {
    return fillExcept(info, fillExceptKeys, metadataKey);
  }
  if (opts.fillWith) {
    return fillWith(info, opts.fillWith, metadataKey);
  }
  return info;
});
var s = 1e3;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
var ms$1 = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === "string" && val.length > 0) {
    return parse$1(val);
  } else if (type === "number" && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
  );
};
function parse$1(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n * y;
    case "weeks":
    case "week":
    case "w":
      return n * w;
    case "days":
    case "day":
    case "d":
      return n * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n;
    default:
      return void 0;
  }
}
function fmtShort(ms2) {
  var msAbs = Math.abs(ms2);
  if (msAbs >= d) {
    return Math.round(ms2 / d) + "d";
  }
  if (msAbs >= h) {
    return Math.round(ms2 / h) + "h";
  }
  if (msAbs >= m) {
    return Math.round(ms2 / m) + "m";
  }
  if (msAbs >= s) {
    return Math.round(ms2 / s) + "s";
  }
  return ms2 + "ms";
}
function fmtLong(ms2) {
  var msAbs = Math.abs(ms2);
  if (msAbs >= d) {
    return plural(ms2, msAbs, d, "day");
  }
  if (msAbs >= h) {
    return plural(ms2, msAbs, h, "hour");
  }
  if (msAbs >= m) {
    return plural(ms2, msAbs, m, "minute");
  }
  if (msAbs >= s) {
    return plural(ms2, msAbs, s, "second");
  }
  return ms2 + " ms";
}
function plural(ms2, msAbs, n, name3) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms2 / n) + " " + name3 + (isPlural ? "s" : "");
}
var _this = void 0;
var format$7 = format$f;
var ms = ms$1;
var ms_1 = format$7(function(info) {
  var curr = +/* @__PURE__ */ new Date();
  _this.diff = curr - (_this.prevTime || curr);
  _this.prevTime = curr;
  info.ms = "+".concat(ms(_this.diff));
  return info;
});
var inspect = require$$0__default$1.default.inspect;
var format$6 = format$f;
var _require$a = tripleBeam, LEVEL$6 = _require$a.LEVEL, MESSAGE$3 = _require$a.MESSAGE, SPLAT$2 = _require$a.SPLAT;
var prettyPrint = format$6(function(info) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stripped = Object.assign({}, info);
  delete stripped[LEVEL$6];
  delete stripped[MESSAGE$3];
  delete stripped[SPLAT$2];
  info[MESSAGE$3] = inspect(stripped, false, opts.depth || null, opts.colorize);
  return info;
});
var printf = { exports: {} };
function _typeof$8(o) {
  "@babel/helpers - typeof";
  return _typeof$8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$8(o);
}
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$7(descriptor.key), descriptor);
  }
}
function _createClass$8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$7(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$7(t) {
  var i = _toPrimitive$7(t, "string");
  return "symbol" == _typeof$8(i) ? i : String(i);
}
function _toPrimitive$7(t, r) {
  if ("object" != _typeof$8(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$8(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var _require$9 = tripleBeam, MESSAGE$2 = _require$9.MESSAGE;
var Printf = /* @__PURE__ */ function() {
  function Printf2(templateFn) {
    _classCallCheck$8(this, Printf2);
    this.template = templateFn;
  }
  _createClass$8(Printf2, [{
    key: "transform",
    value: function transform(info) {
      info[MESSAGE$2] = this.template(info);
      return info;
    }
  }]);
  return Printf2;
}();
printf.exports = function(opts) {
  return new Printf(opts);
};
printf.exports.Printf = printf.exports.Format = Printf;
var printfExports = printf.exports;
var format$5 = format$f;
var _require$8 = tripleBeam, MESSAGE$1 = _require$8.MESSAGE;
var jsonStringify = safeStableStringifyExports;
var simple = format$5(function(info) {
  var stringifiedRest = jsonStringify(Object.assign({}, info, {
    level: void 0,
    message: void 0,
    splat: void 0
  }));
  var padding = info.padding && info.padding[info.level] || "";
  if (stringifiedRest !== "{}") {
    info[MESSAGE$1] = "".concat(info.level, ":").concat(padding, " ").concat(info.message, " ").concat(stringifiedRest);
  } else {
    info[MESSAGE$1] = "".concat(info.level, ":").concat(padding, " ").concat(info.message);
  }
  return info;
});
function _typeof$7(o) {
  "@babel/helpers - typeof";
  return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$7(o);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$6(descriptor.key), descriptor);
  }
}
function _createClass$7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$6(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$6(t) {
  var i = _toPrimitive$6(t, "string");
  return "symbol" == _typeof$7(i) ? i : String(i);
}
function _toPrimitive$6(t, r) {
  if ("object" != _typeof$7(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$7(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var util$4 = require$$0__default$1.default;
var _require$7 = tripleBeam, SPLAT$1 = _require$7.SPLAT;
var formatRegExp$1 = /%[scdjifoO%]/g;
var escapedPercent = /%%/g;
var Splatter = /* @__PURE__ */ function() {
  function Splatter2(opts) {
    _classCallCheck$7(this, Splatter2);
    this.options = opts;
  }
  _createClass$7(Splatter2, [{
    key: "_splat",
    value: function _splat(info, tokens) {
      var msg = info.message;
      var splat2 = info[SPLAT$1] || info.splat || [];
      var percents = msg.match(escapedPercent);
      var escapes = percents && percents.length || 0;
      var expectedSplat = tokens.length - escapes;
      var extraSplat = expectedSplat - splat2.length;
      var metas = extraSplat < 0 ? splat2.splice(extraSplat, -1 * extraSplat) : [];
      var metalen = metas.length;
      if (metalen) {
        for (var i = 0; i < metalen; i++) {
          Object.assign(info, metas[i]);
        }
      }
      info.message = util$4.format.apply(util$4, [msg].concat(_toConsumableArray(splat2)));
      return info;
    }
    /**
      * Transforms the `info` message by using `util.format` to complete
      * any `info.message` provided it has string interpolation tokens.
      * If no tokens exist then `info` is immutable.
      *
      * @param  {Info} info Logform info message.
      * @param  {Object} opts Options for this instance.
      * @returns {Info} Modified info message
      */
  }, {
    key: "transform",
    value: function transform(info) {
      var msg = info.message;
      var splat2 = info[SPLAT$1] || info.splat;
      if (!splat2 || !splat2.length) {
        return info;
      }
      var tokens = msg && msg.match && msg.match(formatRegExp$1);
      if (!tokens && (splat2 || splat2.length)) {
        var metas = splat2.length > 1 ? splat2.splice(0) : splat2;
        var metalen = metas.length;
        if (metalen) {
          for (var i = 0; i < metalen; i++) {
            Object.assign(info, metas[i]);
          }
        }
        return info;
      }
      if (tokens) {
        return this._splat(info, tokens);
      }
      return info;
    }
  }]);
  return Splatter2;
}();
var splat = function(opts) {
  return new Splatter(opts);
};
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigitsOptional = "\\d\\d?";
var twoDigits = "\\d\\d";
var threeDigits = "\\d{3}";
var fourDigits = "\\d{4}";
var word = "[^\\s]+";
var literal = /\[([^]*?)\]/gm;
function shorten(arr, sLen) {
  var newArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }
  return newArr;
}
var monthUpdate = function(arrName) {
  return function(v, i18n) {
    var lowerCaseArr = i18n[arrName].map(function(v2) {
      return v2.toLowerCase();
    });
    var index2 = lowerCaseArr.indexOf(v.toLowerCase());
    if (index2 > -1) {
      return index2;
    }
    return null;
  };
};
function assign(origObj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var obj = args_1[_a];
    for (var key in obj) {
      origObj[key] = obj[key];
    }
  }
  return origObj;
}
var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
var defaultI18n = {
  dayNamesShort,
  dayNames,
  monthNamesShort,
  monthNames,
  amPm: ["am", "pm"],
  DoFn: function(dayOfMonth) {
    return dayOfMonth + ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3 ? 0 : (dayOfMonth - dayOfMonth % 10 !== 10 ? 1 : 0) * dayOfMonth % 10];
  }
};
var globalI18n = assign({}, defaultI18n);
var setGlobalDateI18n = function(i18n) {
  return globalI18n = assign(globalI18n, i18n);
};
var regexEscape = function(str) {
  return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
};
var pad = function(val, len) {
  if (len === void 0) {
    len = 2;
  }
  val = String(val);
  while (val.length < len) {
    val = "0" + val;
  }
  return val;
};
var formatFlags = {
  D: function(dateObj) {
    return String(dateObj.getDate());
  },
  DD: function(dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function(dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function(dateObj) {
    return String(dateObj.getDay());
  },
  dd: function(dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function(dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function(dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function(dateObj) {
    return String(dateObj.getMonth() + 1);
  },
  MM: function(dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function(dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function(dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function(dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function(dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function(dateObj) {
    return String(dateObj.getHours() % 12 || 12);
  },
  hh: function(dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function(dateObj) {
    return String(dateObj.getHours());
  },
  HH: function(dateObj) {
    return pad(dateObj.getHours());
  },
  m: function(dateObj) {
    return String(dateObj.getMinutes());
  },
  mm: function(dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function(dateObj) {
    return String(dateObj.getSeconds());
  },
  ss: function(dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function(dateObj) {
    return String(Math.round(dateObj.getMilliseconds() / 100));
  },
  SS: function(dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function(dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function(dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function(dateObj) {
    var offset = dateObj.getTimezoneOffset();
    return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60) * 100 + Math.abs(offset) % 60, 4);
  },
  Z: function(dateObj) {
    var offset = dateObj.getTimezoneOffset();
    return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + ":" + pad(Math.abs(offset) % 60, 2);
  }
};
var monthParse = function(v) {
  return +v - 1;
};
var emptyDigits = [null, twoDigitsOptional];
var emptyWord = [null, word];
var amPm = [
  "isPm",
  word,
  function(v, i18n) {
    var val = v.toLowerCase();
    if (val === i18n.amPm[0]) {
      return 0;
    } else if (val === i18n.amPm[1]) {
      return 1;
    }
    return null;
  }
];
var timezoneOffset = [
  "timezoneOffset",
  "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
  function(v) {
    var parts = (v + "").match(/([+-]|\d\d)/gi);
    if (parts) {
      var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
      return parts[0] === "+" ? minutes : -minutes;
    }
    return 0;
  }
];
var parseFlags = {
  D: ["day", twoDigitsOptional],
  DD: ["day", twoDigits],
  Do: ["day", twoDigitsOptional + word, function(v) {
    return parseInt(v, 10);
  }],
  M: ["month", twoDigitsOptional, monthParse],
  MM: ["month", twoDigits, monthParse],
  YY: [
    "year",
    twoDigits,
    function(v) {
      var now = /* @__PURE__ */ new Date();
      var cent = +("" + now.getFullYear()).substr(0, 2);
      return +("" + (+v > 68 ? cent - 1 : cent) + v);
    }
  ],
  h: ["hour", twoDigitsOptional, void 0, "isPm"],
  hh: ["hour", twoDigits, void 0, "isPm"],
  H: ["hour", twoDigitsOptional],
  HH: ["hour", twoDigits],
  m: ["minute", twoDigitsOptional],
  mm: ["minute", twoDigits],
  s: ["second", twoDigitsOptional],
  ss: ["second", twoDigits],
  YYYY: ["year", fourDigits],
  S: ["millisecond", "\\d", function(v) {
    return +v * 100;
  }],
  SS: ["millisecond", twoDigits, function(v) {
    return +v * 10;
  }],
  SSS: ["millisecond", threeDigits],
  d: emptyDigits,
  dd: emptyDigits,
  ddd: emptyWord,
  dddd: emptyWord,
  MMM: ["month", word, monthUpdate("monthNamesShort")],
  MMMM: ["month", word, monthUpdate("monthNames")],
  a: amPm,
  A: amPm,
  ZZ: timezoneOffset,
  Z: timezoneOffset
};
var globalMasks = {
  default: "ddd MMM DD YYYY HH:mm:ss",
  shortDate: "M/D/YY",
  mediumDate: "MMM D, YYYY",
  longDate: "MMMM D, YYYY",
  fullDate: "dddd, MMMM D, YYYY",
  isoDate: "YYYY-MM-DD",
  isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
  shortTime: "HH:mm",
  mediumTime: "HH:mm:ss",
  longTime: "HH:mm:ss.SSS"
};
var setGlobalDateMasks = function(masks) {
  return assign(globalMasks, masks);
};
var format$4 = function(dateObj, mask, i18n) {
  if (mask === void 0) {
    mask = globalMasks["default"];
  }
  if (i18n === void 0) {
    i18n = {};
  }
  if (typeof dateObj === "number") {
    dateObj = new Date(dateObj);
  }
  if (Object.prototype.toString.call(dateObj) !== "[object Date]" || isNaN(dateObj.getTime())) {
    throw new Error("Invalid Date pass to format");
  }
  mask = globalMasks[mask] || mask;
  var literals = [];
  mask = mask.replace(literal, function($0, $1) {
    literals.push($1);
    return "@@@";
  });
  var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
  mask = mask.replace(token, function($0) {
    return formatFlags[$0](dateObj, combinedI18nSettings);
  });
  return mask.replace(/@@@/g, function() {
    return literals.shift();
  });
};
function parse(dateStr, format2, i18n) {
  if (i18n === void 0) {
    i18n = {};
  }
  if (typeof format2 !== "string") {
    throw new Error("Invalid format in fecha parse");
  }
  format2 = globalMasks[format2] || format2;
  if (dateStr.length > 1e3) {
    return null;
  }
  var today = /* @__PURE__ */ new Date();
  var dateInfo = {
    year: today.getFullYear(),
    month: 0,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    isPm: null,
    timezoneOffset: null
  };
  var parseInfo = [];
  var literals = [];
  var newFormat = format2.replace(literal, function($0, $1) {
    literals.push(regexEscape($1));
    return "@@@";
  });
  var specifiedFields = {};
  var requiredFields = {};
  newFormat = regexEscape(newFormat).replace(token, function($0) {
    var info = parseFlags[$0];
    var field2 = info[0], regex = info[1], requiredField = info[3];
    if (specifiedFields[field2]) {
      throw new Error("Invalid format. " + field2 + " specified twice in format");
    }
    specifiedFields[field2] = true;
    if (requiredField) {
      requiredFields[requiredField] = true;
    }
    parseInfo.push(info);
    return "(" + regex + ")";
  });
  Object.keys(requiredFields).forEach(function(field2) {
    if (!specifiedFields[field2]) {
      throw new Error("Invalid format. " + field2 + " is required in specified format");
    }
  });
  newFormat = newFormat.replace(/@@@/g, function() {
    return literals.shift();
  });
  var matches = dateStr.match(new RegExp(newFormat, "i"));
  if (!matches) {
    return null;
  }
  var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
  for (var i = 1; i < matches.length; i++) {
    var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
    var value = parser ? parser(matches[i], combinedI18nSettings) : +matches[i];
    if (value == null) {
      return null;
    }
    dateInfo[field] = value;
  }
  if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }
  var dateTZ;
  if (dateInfo.timezoneOffset == null) {
    dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
    var validateFields = [
      ["month", "getMonth"],
      ["day", "getDate"],
      ["hour", "getHours"],
      ["minute", "getMinutes"],
      ["second", "getSeconds"]
    ];
    for (var i = 0, len = validateFields.length; i < len; i++) {
      if (specifiedFields[validateFields[i][0]] && dateInfo[validateFields[i][0]] !== dateTZ[validateFields[i][1]]()) {
        return null;
      }
    }
  } else {
    dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
    if (dateInfo.month > 11 || dateInfo.month < 0 || dateInfo.day > 31 || dateInfo.day < 1 || dateInfo.hour > 23 || dateInfo.hour < 0 || dateInfo.minute > 59 || dateInfo.minute < 0 || dateInfo.second > 59 || dateInfo.second < 0) {
      return null;
    }
  }
  return dateTZ;
}
var fecha$1 = {
  format: format$4,
  parse,
  defaultI18n,
  setGlobalDateI18n,
  setGlobalDateMasks
};
const fecha$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assign,
  default: fecha$1,
  defaultI18n,
  format: format$4,
  parse,
  setGlobalDateI18n,
  setGlobalDateMasks
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(fecha$2);
var fecha = require$$0;
var format$3 = format$f;
var timestamp = format$3(function(info) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (opts.format) {
    info.timestamp = typeof opts.format === "function" ? opts.format() : fecha.format(/* @__PURE__ */ new Date(), opts.format);
  }
  if (!info.timestamp) {
    info.timestamp = (/* @__PURE__ */ new Date()).toISOString();
  }
  if (opts.alias) {
    info[opts.alias] = info.timestamp;
  }
  return info;
});
var colors = safeExports;
var format$2 = format$f;
var _require$6 = tripleBeam, MESSAGE = _require$6.MESSAGE;
var uncolorize = format$2(function(info, opts) {
  if (opts.level !== false) {
    info.level = colors.strip(info.level);
  }
  if (opts.message !== false) {
    info.message = colors.strip(String(info.message));
  }
  if (opts.raw !== false && info[MESSAGE]) {
    info[MESSAGE] = colors.strip(String(info[MESSAGE]));
  }
  return info;
});
var format$1 = browser$3.format = format$f;
browser$3.levels = levels;
Object.defineProperty(format$1, "align", {
  value: align
});
Object.defineProperty(format$1, "cli", {
  value: cliExports
});
Object.defineProperty(format$1, "colorize", {
  value: colorizeExports
});
Object.defineProperty(format$1, "combine", {
  value: combineExports
});
Object.defineProperty(format$1, "errors", {
  value: errors
});
Object.defineProperty(format$1, "json", {
  value: json$1
});
Object.defineProperty(format$1, "label", {
  value: label
});
Object.defineProperty(format$1, "logstash", {
  value: logstash
});
Object.defineProperty(format$1, "metadata", {
  value: metadata
});
Object.defineProperty(format$1, "ms", {
  value: ms_1
});
Object.defineProperty(format$1, "padLevels", {
  value: padLevelsExports
});
Object.defineProperty(format$1, "prettyPrint", {
  value: prettyPrint
});
Object.defineProperty(format$1, "printf", {
  value: printfExports
});
Object.defineProperty(format$1, "simple", {
  value: simple
});
Object.defineProperty(format$1, "splat", {
  value: splat
});
Object.defineProperty(format$1, "timestamp", {
  value: timestamp
});
Object.defineProperty(format$1, "uncolorize", {
  value: uncolorize
});
var common = {};
(function(exports2) {
  var _require4 = require$$0__default$1.default, format2 = _require4.format;
  exports2.warn = {
    deprecated: function deprecated(prop) {
      return function() {
        throw new Error(format2("{ %s } was removed in winston@3.0.0.", prop));
      };
    },
    useFormat: function useFormat(prop) {
      return function() {
        throw new Error([format2("{ %s } was removed in winston@3.0.0.", prop), "Use a custom winston.format = winston.format(function) instead."].join("\n"));
      };
    },
    forFunctions: function forFunctions(obj, type, props) {
      props.forEach(function(prop) {
        obj[prop] = exports2.warn[type](prop);
      });
    },
    forProperties: function forProperties(obj, type, props) {
      props.forEach(function(prop) {
        var notice = exports2.warn[type](prop);
        Object.defineProperty(obj, prop, {
          get: notice,
          set: notice
        });
      });
    }
  };
})(common);
const name$1 = "winston";
const description = "A logger for just about everything.";
const version = "3.10.0";
const author = "Charlie Robbins <charlie.robbins@gmail.com>";
const maintainers = [
  "David Hyde <dabh@alumni.stanford.edu>"
];
const repository = {
  type: "git",
  url: "https://github.com/winstonjs/winston.git"
};
const keywords = [
  "winston",
  "logger",
  "logging",
  "logs",
  "sysadmin",
  "bunyan",
  "pino",
  "loglevel",
  "tools",
  "json",
  "stream"
];
const dependencies = {
  "@dabh/diagnostics": "^2.0.2",
  "@colors/colors": "1.5.0",
  async: "^3.2.3",
  "is-stream": "^2.0.0",
  logform: "^2.4.0",
  "one-time": "^1.0.0",
  "readable-stream": "^3.4.0",
  "safe-stable-stringify": "^2.3.1",
  "stack-trace": "0.0.x",
  "triple-beam": "^1.3.0",
  "winston-transport": "^4.5.0"
};
const devDependencies = {
  "@babel/cli": "^7.17.0",
  "@babel/core": "^7.17.2",
  "@babel/preset-env": "^7.16.7",
  "@dabh/eslint-config-populist": "^5.0.0",
  "@types/node": "^20.3.1",
  "abstract-winston-transport": "^0.5.1",
  assume: "^2.2.0",
  "cross-spawn-async": "^2.2.5",
  eslint: "^8.9.0",
  hock: "^1.4.1",
  mocha: "8.1.3",
  nyc: "^15.1.0",
  rimraf: "^3.0.2",
  split2: "^4.1.0",
  "std-mocks": "^1.0.1",
  through2: "^4.0.2",
  "winston-compat": "^0.1.5"
};
const main = "./lib/winston.js";
const browser$2 = "./dist/winston";
const types = "./index.d.ts";
const scripts = {
  lint: "eslint lib/*.js lib/winston/*.js lib/winston/**/*.js --resolve-plugins-relative-to ./node_modules/@dabh/eslint-config-populist",
  test: "mocha",
  "test:coverage": "nyc npm run test:unit",
  "test:unit": "mocha test/unit",
  "test:integration": "mocha test/integration",
  build: "rimraf dist && babel lib -d dist",
  prepublishOnly: "npm run build"
};
const engines = {
  node: ">= 12.0.0"
};
const license = "MIT";
const require$$2 = {
  name: name$1,
  description,
  version,
  author,
  maintainers,
  repository,
  keywords,
  dependencies,
  devDependencies,
  main,
  browser: browser$2,
  types,
  scripts,
  engines,
  license
};
var transports = {};
var dist = { exports: {} };
var modern$1 = { exports: {} };
var browser$1 = deprecate;
function deprecate(fn, msg) {
  if (config$3("noDeprecation")) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config$3("throwDeprecation")) {
        throw new Error(msg);
      } else if (config$3("traceDeprecation")) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function config$3(name3) {
  try {
    if (!commonjsGlobal.localStorage)
      return false;
  } catch (_) {
    return false;
  }
  var val = commonjsGlobal.localStorage[name3];
  if (null == val)
    return false;
  return String(val).toLowerCase() === "true";
}
var streamBrowser = require$$0__default$2.default.EventEmitter;
function destroy(err, cb) {
  var _this2 = this;
  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;
  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }
    return this;
  }
  if (this._readableState) {
    this._readableState.destroyed = true;
  }
  if (this._writableState) {
    this._writableState.destroyed = true;
  }
  this._destroy(err || null, function(err2) {
    if (!cb && err2) {
      if (!_this2._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this2, err2);
      } else if (!_this2._writableState.errorEmitted) {
        _this2._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this2, err2);
      } else {
        process.nextTick(emitCloseNT, _this2);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this2);
      cb(err2);
    } else {
      process.nextTick(emitCloseNT, _this2);
    }
  });
  return this;
}
function emitErrorAndCloseNT(self2, err) {
  emitErrorNT(self2, err);
  emitCloseNT(self2);
}
function emitCloseNT(self2) {
  if (self2._writableState && !self2._writableState.emitClose)
    return;
  if (self2._readableState && !self2._readableState.emitClose)
    return;
  self2.emit("close");
}
function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }
  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}
function emitErrorNT(self2, err) {
  self2.emit("error", err);
}
function errorOrDestroy(stream2, err) {
  var rState = stream2._readableState;
  var wState = stream2._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy)
    stream2.destroy(err);
  else
    stream2.emit("error", err);
}
var destroy_1 = {
  destroy,
  undestroy,
  errorOrDestroy
};
var errorsBrowser = {};
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var codes = {};
function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }
  function getMessage(arg1, arg2, arg3) {
    if (typeof message === "string") {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }
  var NodeError = /* @__PURE__ */ function(_Base) {
    _inheritsLoose(NodeError2, _Base);
    function NodeError2(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }
    return NodeError2;
  }(Base);
  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
}
function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function(i) {
      return String(i);
    });
    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
}
function startsWith(str, search, pos) {
  return str.substr(0, search.length) === search;
}
function endsWith(str, search, this_len) {
  if (this_len === void 0 || this_len > str.length) {
    this_len = str.length;
  }
  return str.substring(this_len - search.length, this_len) === search;
}
function includes(str, search, start) {
  if (typeof start !== "number") {
    start = 0;
  }
  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}
createErrorType("ERR_INVALID_OPT_VALUE", function(name3, value) {
  return 'The value "' + value + '" is invalid for option "' + name3 + '"';
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name3, expected, actual) {
  var determiner;
  if (typeof expected === "string" && startsWith(expected, "not ")) {
    determiner = "must not be";
    expected = expected.replace(/^not /, "");
  } else {
    determiner = "must be";
  }
  var msg;
  if (endsWith(name3, " argument")) {
    msg = "The ".concat(name3, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
  } else {
    var type = includes(name3, ".") ? "property" : "argument";
    msg = 'The "'.concat(name3, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
  }
  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name3) {
  return "The " + name3 + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function(name3) {
  return "Cannot call " + name3 + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
  return "Unknown encoding: " + arg;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
errorsBrowser.codes = codes;
var ERR_INVALID_OPT_VALUE = errorsBrowser.codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state2, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name3 = isDuplex ? duplexKey : "highWaterMark";
      throw new ERR_INVALID_OPT_VALUE(name3, hwm);
    }
    return Math.floor(hwm);
  }
  return state2.objectMode ? 16 : 16 * 1024;
}
var state = {
  getHighWaterMark
};
var inherits_browser = { exports: {} };
if (typeof Object.create === "function") {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
var inherits_browserExports = inherits_browser.exports;
var buffer_list;
var hasRequiredBuffer_list;
function requireBuffer_list() {
  if (hasRequiredBuffer_list)
    return buffer_list;
  hasRequiredBuffer_list = 1;
  function ownKeys(object2, enumerableOnly) {
    var keys2 = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty2(obj, key, value) {
    key = _toPropertyKey2(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey2(arg) {
    var key = _toPrimitive2(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive2(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var _require4 = require$$2__default.default, Buffer2 = _require4.Buffer;
  var _require22 = require$$0__default$1.default, inspect2 = _require22.inspect;
  var custom = inspect2 && inspect2.custom || "inspect";
  function copyBuffer(src, target, offset) {
    Buffer2.prototype.copy.call(src, target, offset);
  }
  buffer_list = /* @__PURE__ */ function() {
    function BufferList() {
      _classCallCheck2(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass2(BufferList, [{
      key: "push",
      value: function push(v) {
        var entry = {
          data: v,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v) {
        var entry = {
          data: v,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s2) {
        if (this.length === 0)
          return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next)
          ret += s2 + p.data;
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function consume(n, hasStrings) {
        var ret;
        if (n < this.head.data.length) {
          ret = this.head.data.slice(0, n);
          this.head.data = this.head.data.slice(n);
        } else if (n === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n) : this._getBuffer(n);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function _getString(n) {
        var p = this.head;
        var c = 1;
        var ret = p.data;
        n -= ret.length;
        while (p = p.next) {
          var str = p.data;
          var nb = n > str.length ? str.length : n;
          if (nb === str.length)
            ret += str;
          else
            ret += str.slice(0, n);
          n -= nb;
          if (n === 0) {
            if (nb === str.length) {
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p;
              p.data = str.slice(nb);
            }
            break;
          }
          ++c;
        }
        this.length -= c;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n) {
        var ret = Buffer2.allocUnsafe(n);
        var p = this.head;
        var c = 1;
        p.data.copy(ret);
        n -= p.data.length;
        while (p = p.next) {
          var buf = p.data;
          var nb = n > buf.length ? buf.length : n;
          buf.copy(ret, ret.length - n, 0, nb);
          n -= nb;
          if (n === 0) {
            if (nb === buf.length) {
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p;
              p.data = buf.slice(nb);
            }
            break;
          }
          ++c;
        }
        this.length -= c;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: custom,
      value: function value(_, options) {
        return inspect2(this, _objectSpread(_objectSpread({}, options), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  }();
  return buffer_list;
}
var ERR_STREAM_PREMATURE_CLOSE = errorsBrowser.codes.ERR_STREAM_PREMATURE_CLOSE;
function once$5(callback) {
  var called = false;
  return function() {
    if (called)
      return;
    called = true;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callback.apply(this, args);
  };
}
function noop$1() {
}
function isRequest$1(stream2) {
  return stream2.setHeader && typeof stream2.abort === "function";
}
function eos$1(stream2, opts, callback) {
  if (typeof opts === "function")
    return eos$1(stream2, null, opts);
  if (!opts)
    opts = {};
  callback = once$5(callback || noop$1);
  var readable = opts.readable || opts.readable !== false && stream2.readable;
  var writable = opts.writable || opts.writable !== false && stream2.writable;
  var onlegacyfinish = function onlegacyfinish2() {
    if (!stream2.writable)
      onfinish();
  };
  var writableEnded = stream2._writableState && stream2._writableState.finished;
  var onfinish = function onfinish2() {
    writable = false;
    writableEnded = true;
    if (!readable)
      callback.call(stream2);
  };
  var readableEnded = stream2._readableState && stream2._readableState.endEmitted;
  var onend = function onend2() {
    readable = false;
    readableEnded = true;
    if (!writable)
      callback.call(stream2);
  };
  var onerror = function onerror2(err) {
    callback.call(stream2, err);
  };
  var onclose = function onclose2() {
    var err;
    if (readable && !readableEnded) {
      if (!stream2._readableState || !stream2._readableState.ended)
        err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream2, err);
    }
    if (writable && !writableEnded) {
      if (!stream2._writableState || !stream2._writableState.ended)
        err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream2, err);
    }
  };
  var onrequest = function onrequest2() {
    stream2.req.on("finish", onfinish);
  };
  if (isRequest$1(stream2)) {
    stream2.on("complete", onfinish);
    stream2.on("abort", onclose);
    if (stream2.req)
      onrequest();
    else
      stream2.on("request", onrequest);
  } else if (writable && !stream2._writableState) {
    stream2.on("end", onlegacyfinish);
    stream2.on("close", onlegacyfinish);
  }
  stream2.on("end", onend);
  stream2.on("finish", onfinish);
  if (opts.error !== false)
    stream2.on("error", onerror);
  stream2.on("close", onclose);
  return function() {
    stream2.removeListener("complete", onfinish);
    stream2.removeListener("abort", onclose);
    stream2.removeListener("request", onrequest);
    if (stream2.req)
      stream2.req.removeListener("finish", onfinish);
    stream2.removeListener("end", onlegacyfinish);
    stream2.removeListener("close", onlegacyfinish);
    stream2.removeListener("finish", onfinish);
    stream2.removeListener("end", onend);
    stream2.removeListener("error", onerror);
    stream2.removeListener("close", onclose);
  };
}
var endOfStream = eos$1;
var async_iterator;
var hasRequiredAsync_iterator;
function requireAsync_iterator() {
  if (hasRequiredAsync_iterator)
    return async_iterator;
  hasRequiredAsync_iterator = 1;
  var _Object$setPrototypeO;
  function _defineProperty2(obj, key, value) {
    key = _toPropertyKey2(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey2(arg) {
    var key = _toPrimitive2(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive2(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var finished = endOfStream;
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  function createIterResult(value, done2) {
    return {
      value,
      done: done2
    };
  }
  function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
      var data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult(data, false));
      }
    }
  }
  function onReadable(iter) {
    process.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve(createIterResult(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next() {
      var _this2 = this;
      var error = this[kError];
      if (error !== null) {
        return Promise.reject(error);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve, reject) {
          process.nextTick(function() {
            if (_this2[kError]) {
              reject(_this2[kError]);
            } else {
              resolve(createIterResult(void 0, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty2(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty2(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(createIterResult(void 0, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream2) {
    var _Object$create;
    var iterator2 = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty2(_Object$create, kStream, {
      value: stream2,
      writable: true
    }), _defineProperty2(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty2(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty2(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty2(_Object$create, kEnded, {
      value: stream2._readableState.endEmitted,
      writable: true
    }), _defineProperty2(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data = iterator2[kStream].read();
        if (data) {
          iterator2[kLastPromise] = null;
          iterator2[kLastResolve] = null;
          iterator2[kLastReject] = null;
          resolve(createIterResult(data, false));
        } else {
          iterator2[kLastResolve] = resolve;
          iterator2[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator2[kLastPromise] = null;
    finished(stream2, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator2[kLastReject];
        if (reject !== null) {
          iterator2[kLastPromise] = null;
          iterator2[kLastResolve] = null;
          iterator2[kLastReject] = null;
          reject(err);
        }
        iterator2[kError] = err;
        return;
      }
      var resolve = iterator2[kLastResolve];
      if (resolve !== null) {
        iterator2[kLastPromise] = null;
        iterator2[kLastResolve] = null;
        iterator2[kLastReject] = null;
        resolve(createIterResult(void 0, true));
      }
      iterator2[kEnded] = true;
    });
    stream2.on("readable", onReadable.bind(null, iterator2));
    return iterator2;
  };
  async_iterator = createReadableStreamAsyncIterator;
  return async_iterator;
}
var fromBrowser;
var hasRequiredFromBrowser;
function requireFromBrowser() {
  if (hasRequiredFromBrowser)
    return fromBrowser;
  hasRequiredFromBrowser = 1;
  fromBrowser = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return fromBrowser;
}
var _stream_readable;
var hasRequired_stream_readable;
function require_stream_readable() {
  if (hasRequired_stream_readable)
    return _stream_readable;
  hasRequired_stream_readable = 1;
  _stream_readable = Readable;
  var Duplex2;
  Readable.ReadableState = ReadableState;
  require$$0__default$2.default.EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream2 = streamBrowser;
  var Buffer2 = require$$2__default.default.Buffer;
  var OurUint8Array = (typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var debugUtil = require$$0__default$1.default;
  var debug2;
  if (debugUtil && debugUtil.debuglog) {
    debug2 = debugUtil.debuglog("stream");
  } else {
    debug2 = function debug3() {
    };
  }
  var BufferList = requireBuffer_list();
  var destroyImpl = destroy_1;
  var _require4 = state, getHighWaterMark2 = _require4.getHighWaterMark;
  var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes2.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder;
  var createReadableStreamAsyncIterator;
  var from;
  inherits_browserExports(Readable, Stream2);
  var errorOrDestroy2 = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function")
      return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream2, isDuplex) {
    Duplex2 = Duplex2 || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream2 instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark2(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder)
        StringDecoder = require$$10__default.default.StringDecoder;
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    Duplex2 = Duplex2 || require_stream_duplex();
    if (!(this instanceof Readable))
      return new Readable(options);
    var isDuplex = this instanceof Duplex2;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function")
        this._read = options.read;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
    }
    Stream2.call(this);
  }
  Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set2(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state2 = this._readableState;
    var skipChunkCheck;
    if (!state2.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state2.defaultEncoding;
        if (encoding !== state2.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream2, chunk, encoding, addToFront, skipChunkCheck) {
    debug2("readableAddChunk", chunk);
    var state2 = stream2._readableState;
    if (chunk === null) {
      state2.reading = false;
      onEofChunk(stream2, state2);
    } else {
      var er;
      if (!skipChunkCheck)
        er = chunkInvalid(state2, chunk);
      if (er) {
        errorOrDestroy2(stream2, er);
      } else if (state2.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state2.endEmitted)
            errorOrDestroy2(stream2, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else
            addChunk(stream2, state2, chunk, true);
        } else if (state2.ended) {
          errorOrDestroy2(stream2, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state2.destroyed) {
          return false;
        } else {
          state2.reading = false;
          if (state2.decoder && !encoding) {
            chunk = state2.decoder.write(chunk);
            if (state2.objectMode || chunk.length !== 0)
              addChunk(stream2, state2, chunk, false);
            else
              maybeReadMore(stream2, state2);
          } else {
            addChunk(stream2, state2, chunk, false);
          }
        }
      } else if (!addToFront) {
        state2.reading = false;
        maybeReadMore(stream2, state2);
      }
    }
    return !state2.ended && (state2.length < state2.highWaterMark || state2.length === 0);
  }
  function addChunk(stream2, state2, chunk, addToFront) {
    if (state2.flowing && state2.length === 0 && !state2.sync) {
      state2.awaitDrain = 0;
      stream2.emit("data", chunk);
    } else {
      state2.length += state2.objectMode ? 1 : chunk.length;
      if (addToFront)
        state2.buffer.unshift(chunk);
      else
        state2.buffer.push(chunk);
      if (state2.needReadable)
        emitReadable(stream2);
    }
    maybeReadMore(stream2, state2);
  }
  function chunkInvalid(state2, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder)
      StringDecoder = require$$10__default.default.StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p = this._readableState.buffer.head;
    var content = "";
    while (p !== null) {
      content += decoder.write(p.data);
      p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }
  function howMuchToRead(n, state2) {
    if (n <= 0 || state2.length === 0 && state2.ended)
      return 0;
    if (state2.objectMode)
      return 1;
    if (n !== n) {
      if (state2.flowing && state2.length)
        return state2.buffer.head.data.length;
      else
        return state2.length;
    }
    if (n > state2.highWaterMark)
      state2.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state2.length)
      return n;
    if (!state2.ended) {
      state2.needReadable = true;
      return 0;
    }
    return state2.length;
  }
  Readable.prototype.read = function(n) {
    debug2("read", n);
    n = parseInt(n, 10);
    var state2 = this._readableState;
    var nOrig = n;
    if (n !== 0)
      state2.emittedReadable = false;
    if (n === 0 && state2.needReadable && ((state2.highWaterMark !== 0 ? state2.length >= state2.highWaterMark : state2.length > 0) || state2.ended)) {
      debug2("read: emitReadable", state2.length, state2.ended);
      if (state2.length === 0 && state2.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n = howMuchToRead(n, state2);
    if (n === 0 && state2.ended) {
      if (state2.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state2.needReadable;
    debug2("need readable", doRead);
    if (state2.length === 0 || state2.length - n < state2.highWaterMark) {
      doRead = true;
      debug2("length less than watermark", doRead);
    }
    if (state2.ended || state2.reading) {
      doRead = false;
      debug2("reading or ended", doRead);
    } else if (doRead) {
      debug2("do read");
      state2.reading = true;
      state2.sync = true;
      if (state2.length === 0)
        state2.needReadable = true;
      this._read(state2.highWaterMark);
      state2.sync = false;
      if (!state2.reading)
        n = howMuchToRead(nOrig, state2);
    }
    var ret;
    if (n > 0)
      ret = fromList(n, state2);
    else
      ret = null;
    if (ret === null) {
      state2.needReadable = state2.length <= state2.highWaterMark;
      n = 0;
    } else {
      state2.length -= n;
      state2.awaitDrain = 0;
    }
    if (state2.length === 0) {
      if (!state2.ended)
        state2.needReadable = true;
      if (nOrig !== n && state2.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream2, state2) {
    debug2("onEofChunk");
    if (state2.ended)
      return;
    if (state2.decoder) {
      var chunk = state2.decoder.end();
      if (chunk && chunk.length) {
        state2.buffer.push(chunk);
        state2.length += state2.objectMode ? 1 : chunk.length;
      }
    }
    state2.ended = true;
    if (state2.sync) {
      emitReadable(stream2);
    } else {
      state2.needReadable = false;
      if (!state2.emittedReadable) {
        state2.emittedReadable = true;
        emitReadable_(stream2);
      }
    }
  }
  function emitReadable(stream2) {
    var state2 = stream2._readableState;
    debug2("emitReadable", state2.needReadable, state2.emittedReadable);
    state2.needReadable = false;
    if (!state2.emittedReadable) {
      debug2("emitReadable", state2.flowing);
      state2.emittedReadable = true;
      process.nextTick(emitReadable_, stream2);
    }
  }
  function emitReadable_(stream2) {
    var state2 = stream2._readableState;
    debug2("emitReadable_", state2.destroyed, state2.length, state2.ended);
    if (!state2.destroyed && (state2.length || state2.ended)) {
      stream2.emit("readable");
      state2.emittedReadable = false;
    }
    state2.needReadable = !state2.flowing && !state2.ended && state2.length <= state2.highWaterMark;
    flow(stream2);
  }
  function maybeReadMore(stream2, state2) {
    if (!state2.readingMore) {
      state2.readingMore = true;
      process.nextTick(maybeReadMore_, stream2, state2);
    }
  }
  function maybeReadMore_(stream2, state2) {
    while (!state2.reading && !state2.ended && (state2.length < state2.highWaterMark || state2.flowing && state2.length === 0)) {
      var len = state2.length;
      debug2("maybeReadMore read 0");
      stream2.read(0);
      if (len === state2.length)
        break;
    }
    state2.readingMore = false;
  }
  Readable.prototype._read = function(n) {
    errorOrDestroy2(this, new ERR_METHOD_NOT_IMPLEMENTED2("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state2 = this._readableState;
    switch (state2.pipesCount) {
      case 0:
        state2.pipes = dest;
        break;
      case 1:
        state2.pipes = [state2.pipes, dest];
        break;
      default:
        state2.pipes.push(dest);
        break;
    }
    state2.pipesCount += 1;
    debug2("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state2.endEmitted)
      process.nextTick(endFn);
    else
      src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug2("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug2("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug2("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;
      if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug2("ondata");
      var ret = dest.write(chunk);
      debug2("dest.write", ret);
      if (ret === false) {
        if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf(state2.pipes, dest) !== -1) && !cleanedUp) {
          debug2("false write response, pause", state2.awaitDrain);
          state2.awaitDrain++;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug2("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0)
        errorOrDestroy2(dest, er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug2("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug2("unpipe");
      src.unpipe(dest);
    }
    dest.emit("pipe", src);
    if (!state2.flowing) {
      debug2("pipe resume");
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
      var state2 = src._readableState;
      debug2("pipeOnDrain", state2.awaitDrain);
      if (state2.awaitDrain)
        state2.awaitDrain--;
      if (state2.awaitDrain === 0 && EElistenerCount(src, "data")) {
        state2.flowing = true;
        flow(src);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state2 = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state2.pipesCount === 0)
      return this;
    if (state2.pipesCount === 1) {
      if (dest && dest !== state2.pipes)
        return this;
      if (!dest)
        dest = state2.pipes;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      if (dest)
        dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state2.pipes;
      var len = state2.pipesCount;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      for (var i = 0; i < len; i++)
        dests[i].emit("unpipe", this, {
          hasUnpiped: false
        });
      return this;
    }
    var index2 = indexOf(state2.pipes, dest);
    if (index2 === -1)
      return this;
    state2.pipes.splice(index2, 1);
    state2.pipesCount -= 1;
    if (state2.pipesCount === 1)
      state2.pipes = state2.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream2.prototype.on.call(this, ev, fn);
    var state2 = this._readableState;
    if (ev === "data") {
      state2.readableListening = this.listenerCount("readable") > 0;
      if (state2.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      if (!state2.endEmitted && !state2.readableListening) {
        state2.readableListening = state2.needReadable = true;
        state2.flowing = false;
        state2.emittedReadable = false;
        debug2("on readable", state2.length, state2.reading);
        if (state2.length) {
          emitReadable(this);
        } else if (!state2.reading) {
          process.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream2.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream2.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    var state2 = self2._readableState;
    state2.readableListening = self2.listenerCount("readable") > 0;
    if (state2.resumeScheduled && !state2.paused) {
      state2.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug2("readable nexttick read 0");
    self2.read(0);
  }
  Readable.prototype.resume = function() {
    var state2 = this._readableState;
    if (!state2.flowing) {
      debug2("resume");
      state2.flowing = !state2.readableListening;
      resume(this, state2);
    }
    state2.paused = false;
    return this;
  };
  function resume(stream2, state2) {
    if (!state2.resumeScheduled) {
      state2.resumeScheduled = true;
      process.nextTick(resume_, stream2, state2);
    }
  }
  function resume_(stream2, state2) {
    debug2("resume", state2.reading);
    if (!state2.reading) {
      stream2.read(0);
    }
    state2.resumeScheduled = false;
    stream2.emit("resume");
    flow(stream2);
    if (state2.flowing && !state2.reading)
      stream2.read(0);
  }
  Readable.prototype.pause = function() {
    debug2("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug2("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream2) {
    var state2 = stream2._readableState;
    debug2("flow", state2.flowing);
    while (state2.flowing && stream2.read() !== null)
      ;
  }
  Readable.prototype.wrap = function(stream2) {
    var _this2 = this;
    var state2 = this._readableState;
    var paused = false;
    stream2.on("end", function() {
      debug2("wrapped end");
      if (state2.decoder && !state2.ended) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length)
          _this2.push(chunk);
      }
      _this2.push(null);
    });
    stream2.on("data", function(chunk) {
      debug2("wrapped data");
      if (state2.decoder)
        chunk = state2.decoder.write(chunk);
      if (state2.objectMode && (chunk === null || chunk === void 0))
        return;
      else if (!state2.objectMode && (!chunk || !chunk.length))
        return;
      var ret = _this2.push(chunk);
      if (!ret) {
        paused = true;
        stream2.pause();
      }
    });
    for (var i in stream2) {
      if (this[i] === void 0 && typeof stream2[i] === "function") {
        this[i] = /* @__PURE__ */ function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream2[method].apply(stream2, arguments);
          };
        }(i);
      }
    }
    for (var n = 0; n < kProxyEvents.length; n++) {
      stream2.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    }
    this._read = function(n2) {
      debug2("wrapped _read", n2);
      if (paused) {
        paused = false;
        stream2.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = requireAsync_iterator();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._readableState.flowing;
    },
    set: function set2(state2) {
      if (this._readableState) {
        this._readableState.flowing = state2;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._readableState.length;
    }
  });
  function fromList(n, state2) {
    if (state2.length === 0)
      return null;
    var ret;
    if (state2.objectMode)
      ret = state2.buffer.shift();
    else if (!n || n >= state2.length) {
      if (state2.decoder)
        ret = state2.buffer.join("");
      else if (state2.buffer.length === 1)
        ret = state2.buffer.first();
      else
        ret = state2.buffer.concat(state2.length);
      state2.buffer.clear();
    } else {
      ret = state2.buffer.consume(n, state2.decoder);
    }
    return ret;
  }
  function endReadable(stream2) {
    var state2 = stream2._readableState;
    debug2("endReadable", state2.endEmitted);
    if (!state2.endEmitted) {
      state2.ended = true;
      process.nextTick(endReadableNT, state2, stream2);
    }
  }
  function endReadableNT(state2, stream2) {
    debug2("endReadableNT", state2.endEmitted, state2.length);
    if (!state2.endEmitted && state2.length === 0) {
      state2.endEmitted = true;
      stream2.readable = false;
      stream2.emit("end");
      if (state2.autoDestroy) {
        var wState = stream2._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream2.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from === void 0) {
        from = requireFromBrowser();
      }
      return from(Readable, iterable, opts);
    };
  }
  function indexOf(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x)
        return i;
    }
    return -1;
  }
  return _stream_readable;
}
var _stream_duplex;
var hasRequired_stream_duplex;
function require_stream_duplex() {
  if (hasRequired_stream_duplex)
    return _stream_duplex;
  hasRequired_stream_duplex = 1;
  var objectKeys = Object.keys || function(obj) {
    var keys3 = [];
    for (var key in obj)
      keys3.push(key);
    return keys3;
  };
  _stream_duplex = Duplex2;
  var Readable = require_stream_readable();
  var Writable2 = require_stream_writable();
  inherits_browserExports(Duplex2, Readable);
  {
    var keys2 = objectKeys(Writable2.prototype);
    for (var v = 0; v < keys2.length; v++) {
      var method = keys2[v];
      if (!Duplex2.prototype[method])
        Duplex2.prototype[method] = Writable2.prototype[method];
    }
  }
  function Duplex2(options) {
    if (!(this instanceof Duplex2))
      return new Duplex2(options);
    Readable.call(this, options);
    Writable2.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false)
        this.readable = false;
      if (options.writable === false)
        this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended)
      return;
    process.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex2.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set2(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return _stream_duplex;
}
var _stream_writable;
var hasRequired_stream_writable;
function require_stream_writable() {
  if (hasRequired_stream_writable)
    return _stream_writable;
  hasRequired_stream_writable = 1;
  _stream_writable = Writable2;
  function CorkedRequest(state2) {
    var _this2 = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this2, state2);
    };
  }
  var Duplex2;
  Writable2.WritableState = WritableState;
  var internalUtil = {
    deprecate: browser$1
  };
  var Stream2 = streamBrowser;
  var Buffer2 = require$$2__default.default.Buffer;
  var OurUint8Array = (typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var destroyImpl = destroy_1;
  var _require4 = state, getHighWaterMark2 = _require4.getHighWaterMark;
  var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK2 = _require$codes2.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes2.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED2 = _require$codes2.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes2.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes2.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes2.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy2 = destroyImpl.errorOrDestroy;
  inherits_browserExports(Writable2, Stream2);
  function nop() {
  }
  function WritableState(options, stream2, isDuplex) {
    Duplex2 = Duplex2 || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream2 instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark2(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream2, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable2, Symbol.hasInstance, {
      value: function value(object2) {
        if (realHasInstance.call(this, object2))
          return true;
        if (this !== Writable2)
          return false;
        return object2 && object2._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object2) {
      return object2 instanceof this;
    };
  }
  function Writable2(options) {
    Duplex2 = Duplex2 || require_stream_duplex();
    var isDuplex = this instanceof Duplex2;
    if (!isDuplex && !realHasInstance.call(Writable2, this))
      return new Writable2(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
      if (typeof options.final === "function")
        this._final = options.final;
    }
    Stream2.call(this);
  }
  Writable2.prototype.pipe = function() {
    errorOrDestroy2(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream2, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy2(stream2, er);
    process.nextTick(cb, er);
  }
  function validChunk(stream2, state2, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy2(stream2, er);
      process.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable2.prototype.write = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    var ret = false;
    var isBuf = !state2.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf)
      encoding = "buffer";
    else if (!encoding)
      encoding = state2.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state2.ending)
      writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state2, chunk, cb)) {
      state2.pendingcb++;
      ret = writeOrBuffer(this, state2, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable2.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable2.prototype.uncork = function() {
    var state2 = this._writableState;
    if (state2.corked) {
      state2.corked--;
      if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest)
        clearBuffer(this, state2);
    }
  };
  Writable2.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
      throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable2.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state2, chunk, encoding) {
    if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable2.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream2, state2, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state2, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state2.objectMode ? 1 : chunk.length;
    state2.length += len;
    var ret = state2.length < state2.highWaterMark;
    if (!ret)
      state2.needDrain = true;
    if (state2.writing || state2.corked) {
      var last = state2.lastBufferedRequest;
      state2.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state2.lastBufferedRequest;
      } else {
        state2.bufferedRequest = state2.lastBufferedRequest;
      }
      state2.bufferedRequestCount += 1;
    } else {
      doWrite(stream2, state2, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream2, state2, writev, len, chunk, encoding, cb) {
    state2.writelen = len;
    state2.writecb = cb;
    state2.writing = true;
    state2.sync = true;
    if (state2.destroyed)
      state2.onwrite(new ERR_STREAM_DESTROYED2("write"));
    else if (writev)
      stream2._writev(chunk, state2.onwrite);
    else
      stream2._write(chunk, encoding, state2.onwrite);
    state2.sync = false;
  }
  function onwriteError(stream2, state2, sync, er, cb) {
    --state2.pendingcb;
    if (sync) {
      process.nextTick(cb, er);
      process.nextTick(finishMaybe, stream2, state2);
      stream2._writableState.errorEmitted = true;
      errorOrDestroy2(stream2, er);
    } else {
      cb(er);
      stream2._writableState.errorEmitted = true;
      errorOrDestroy2(stream2, er);
      finishMaybe(stream2, state2);
    }
  }
  function onwriteStateUpdate(state2) {
    state2.writing = false;
    state2.writecb = null;
    state2.length -= state2.writelen;
    state2.writelen = 0;
  }
  function onwrite(stream2, er) {
    var state2 = stream2._writableState;
    var sync = state2.sync;
    var cb = state2.writecb;
    if (typeof cb !== "function")
      throw new ERR_MULTIPLE_CALLBACK2();
    onwriteStateUpdate(state2);
    if (er)
      onwriteError(stream2, state2, sync, er, cb);
    else {
      var finished = needFinish(state2) || stream2.destroyed;
      if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
        clearBuffer(stream2, state2);
      }
      if (sync) {
        process.nextTick(afterWrite, stream2, state2, finished, cb);
      } else {
        afterWrite(stream2, state2, finished, cb);
      }
    }
  }
  function afterWrite(stream2, state2, finished, cb) {
    if (!finished)
      onwriteDrain(stream2, state2);
    state2.pendingcb--;
    cb();
    finishMaybe(stream2, state2);
  }
  function onwriteDrain(stream2, state2) {
    if (state2.length === 0 && state2.needDrain) {
      state2.needDrain = false;
      stream2.emit("drain");
    }
  }
  function clearBuffer(stream2, state2) {
    state2.bufferProcessing = true;
    var entry = state2.bufferedRequest;
    if (stream2._writev && entry && entry.next) {
      var l = state2.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state2.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer[count] = entry;
        if (!entry.isBuf)
          allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer.allBuffers = allBuffers;
      doWrite(stream2, state2, true, state2.length, buffer, "", holder.finish);
      state2.pendingcb++;
      state2.lastBufferedRequest = null;
      if (holder.next) {
        state2.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state2.corkedRequestsFree = new CorkedRequest(state2);
      }
      state2.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state2.objectMode ? 1 : chunk.length;
        doWrite(stream2, state2, false, len, chunk, encoding, cb);
        entry = entry.next;
        state2.bufferedRequestCount--;
        if (state2.writing) {
          break;
        }
      }
      if (entry === null)
        state2.lastBufferedRequest = null;
    }
    state2.bufferedRequest = entry;
    state2.bufferProcessing = false;
  }
  Writable2.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED2("_write()"));
  };
  Writable2.prototype._writev = null;
  Writable2.prototype.end = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0)
      this.write(chunk, encoding);
    if (state2.corked) {
      state2.corked = 1;
      this.uncork();
    }
    if (!state2.ending)
      endWritable(this, state2, cb);
    return this;
  };
  Object.defineProperty(Writable2.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      return this._writableState.length;
    }
  });
  function needFinish(state2) {
    return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
  }
  function callFinal(stream2, state2) {
    stream2._final(function(err) {
      state2.pendingcb--;
      if (err) {
        errorOrDestroy2(stream2, err);
      }
      state2.prefinished = true;
      stream2.emit("prefinish");
      finishMaybe(stream2, state2);
    });
  }
  function prefinish2(stream2, state2) {
    if (!state2.prefinished && !state2.finalCalled) {
      if (typeof stream2._final === "function" && !state2.destroyed) {
        state2.pendingcb++;
        state2.finalCalled = true;
        process.nextTick(callFinal, stream2, state2);
      } else {
        state2.prefinished = true;
        stream2.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream2, state2) {
    var need = needFinish(state2);
    if (need) {
      prefinish2(stream2, state2);
      if (state2.pendingcb === 0) {
        state2.finished = true;
        stream2.emit("finish");
        if (state2.autoDestroy) {
          var rState = stream2._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream2.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream2, state2, cb) {
    state2.ending = true;
    finishMaybe(stream2, state2);
    if (cb) {
      if (state2.finished)
        process.nextTick(cb);
      else
        stream2.once("finish", cb);
    }
    state2.ended = true;
    stream2.writable = false;
  }
  function onCorkedFinish(corkReq, state2, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state2.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state2.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable2.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get3() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set2(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable2.prototype.destroy = destroyImpl.destroy;
  Writable2.prototype._undestroy = destroyImpl.undestroy;
  Writable2.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return _stream_writable;
}
var util$3 = require$$0__default$1.default;
var Writable$2 = require_stream_writable();
var _require$5 = tripleBeam, LEVEL$5 = _require$5.LEVEL;
var TransportStream$3 = modern$1.exports = function TransportStream() {
  var _this2 = this;
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Writable$2.call(this, { objectMode: true, highWaterMark: options.highWaterMark });
  this.format = options.format;
  this.level = options.level;
  this.handleExceptions = options.handleExceptions;
  this.handleRejections = options.handleRejections;
  this.silent = options.silent;
  if (options.log)
    this.log = options.log;
  if (options.logv)
    this.logv = options.logv;
  if (options.close)
    this.close = options.close;
  this.once("pipe", function(logger2) {
    _this2.levels = logger2.levels;
    _this2.parent = logger2;
  });
  this.once("unpipe", function(src) {
    if (src === _this2.parent) {
      _this2.parent = null;
      if (_this2.close) {
        _this2.close();
      }
    }
  });
};
util$3.inherits(TransportStream$3, Writable$2);
TransportStream$3.prototype._write = function _write(info, enc, callback) {
  if (this.silent || info.exception === true && !this.handleExceptions) {
    return callback(null);
  }
  var level = this.level || this.parent && this.parent.level;
  if (!level || this.levels[level] >= this.levels[info[LEVEL$5]]) {
    if (info && !this.format) {
      return this.log(info, callback);
    }
    var errState = void 0;
    var transformed = void 0;
    try {
      transformed = this.format.transform(Object.assign({}, info), this.format.options);
    } catch (err) {
      errState = err;
    }
    if (errState || !transformed) {
      callback();
      if (errState)
        throw errState;
      return;
    }
    return this.log(transformed, callback);
  }
  this._writableState.sync = false;
  return callback(null);
};
TransportStream$3.prototype._writev = function _writev(chunks, callback) {
  if (this.logv) {
    var infos = chunks.filter(this._accept, this);
    if (!infos.length) {
      return callback(null);
    }
    return this.logv(infos, callback);
  }
  for (var i = 0; i < chunks.length; i++) {
    if (!this._accept(chunks[i]))
      continue;
    if (chunks[i].chunk && !this.format) {
      this.log(chunks[i].chunk, chunks[i].callback);
      continue;
    }
    var errState = void 0;
    var transformed = void 0;
    try {
      transformed = this.format.transform(Object.assign({}, chunks[i].chunk), this.format.options);
    } catch (err) {
      errState = err;
    }
    if (errState || !transformed) {
      chunks[i].callback();
      if (errState) {
        callback(null);
        throw errState;
      }
    } else {
      this.log(transformed, chunks[i].callback);
    }
  }
  return callback(null);
};
TransportStream$3.prototype._accept = function _accept(write) {
  var info = write.chunk;
  if (this.silent) {
    return false;
  }
  var level = this.level || this.parent && this.parent.level;
  if (info.exception === true || !level || this.levels[level] >= this.levels[info[LEVEL$5]]) {
    if (this.handleExceptions || info.exception !== true) {
      return true;
    }
  }
  return false;
};
TransportStream$3.prototype._nop = function _nop() {
  return void 0;
};
var modernExports$1 = modern$1.exports;
var legacy$1 = { exports: {} };
var util$2 = require$$0__default$1.default;
var _require$4 = tripleBeam, LEVEL$4 = _require$4.LEVEL;
var TransportStream$2 = modernExports$1;
var LegacyTransportStream$2 = legacy$1.exports = function LegacyTransportStream() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  TransportStream$2.call(this, options);
  if (!options.transport || typeof options.transport.log !== "function") {
    throw new Error("Invalid transport, must be an object with a log method.");
  }
  this.transport = options.transport;
  this.level = this.level || options.transport.level;
  this.handleExceptions = this.handleExceptions || options.transport.handleExceptions;
  this._deprecated();
  function transportError(err) {
    this.emit("error", err, this.transport);
  }
  if (!this.transport.__winstonError) {
    this.transport.__winstonError = transportError.bind(this);
    this.transport.on("error", this.transport.__winstonError);
  }
};
util$2.inherits(LegacyTransportStream$2, TransportStream$2);
LegacyTransportStream$2.prototype._write = function _write2(info, enc, callback) {
  if (this.silent || info.exception === true && !this.handleExceptions) {
    return callback(null);
  }
  if (!this.level || this.levels[this.level] >= this.levels[info[LEVEL$4]]) {
    this.transport.log(info[LEVEL$4], info.message, info, this._nop);
  }
  callback(null);
};
LegacyTransportStream$2.prototype._writev = function _writev2(chunks, callback) {
  for (var i = 0; i < chunks.length; i++) {
    if (this._accept(chunks[i])) {
      this.transport.log(chunks[i].chunk[LEVEL$4], chunks[i].chunk.message, chunks[i].chunk, this._nop);
      chunks[i].callback();
    }
  }
  return callback(null);
};
LegacyTransportStream$2.prototype._deprecated = function _deprecated() {
  console.error([this.transport.name + " is a legacy winston transport. Consider upgrading: ", "- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md"].join("\n"));
};
LegacyTransportStream$2.prototype.close = function close() {
  if (this.transport.close) {
    this.transport.close();
  }
  if (this.transport.__winstonError) {
    this.transport.removeListener("error", this.transport.__winstonError);
    this.transport.__winstonError = null;
  }
};
var legacyExports$1 = legacy$1.exports;
dist.exports = modernExports$1;
dist.exports.LegacyTransportStream = legacyExports$1;
var distExports = dist.exports;
var console_1$1;
var hasRequiredConsole$1;
function requireConsole$1() {
  if (hasRequiredConsole$1)
    return console_1$1;
  hasRequiredConsole$1 = 1;
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof2(obj);
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey2(arg) {
    var key = _toPrimitive2(arg, "string");
    return _typeof2(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive2(input, hint) {
    if (_typeof2(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint);
      if (_typeof2(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(input);
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call2) {
    if (call2 && (_typeof2(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var os2 = require$$0__default.default;
  var _require4 = tripleBeam, LEVEL2 = _require4.LEVEL, MESSAGE2 = _require4.MESSAGE;
  var TransportStream4 = distExports;
  console_1$1 = /* @__PURE__ */ function(_TransportStream) {
    _inherits2(Console, _TransportStream);
    var _super = _createSuper2(Console);
    function Console() {
      var _this2;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck2(this, Console);
      _this2 = _super.call(this, options);
      _this2.name = options.name || "console";
      _this2.stderrLevels = _this2._stringArrayToSet(options.stderrLevels);
      _this2.consoleWarnLevels = _this2._stringArrayToSet(options.consoleWarnLevels);
      _this2.eol = typeof options.eol === "string" ? options.eol : os2.EOL;
      _this2.setMaxListeners(30);
      return _this2;
    }
    _createClass2(Console, [{
      key: "log",
      value: function log(info, callback) {
        var _this2 = this;
        setImmediate(function() {
          return _this2.emit("logged", info);
        });
        if (this.stderrLevels[info[LEVEL2]]) {
          if (console._stderr) {
            console._stderr.write("".concat(info[MESSAGE2]).concat(this.eol));
          } else {
            console.error(info[MESSAGE2]);
          }
          if (callback) {
            callback();
          }
          return;
        } else if (this.consoleWarnLevels[info[LEVEL2]]) {
          if (console._stderr) {
            console._stderr.write("".concat(info[MESSAGE2]).concat(this.eol));
          } else {
            console.warn(info[MESSAGE2]);
          }
          if (callback) {
            callback();
          }
          return;
        }
        if (console._stdout) {
          console._stdout.write("".concat(info[MESSAGE2]).concat(this.eol));
        } else {
          console.log(info[MESSAGE2]);
        }
        if (callback) {
          callback();
        }
      }
      /**
       * Returns a Set-like object with strArray's elements as keys (each with the
       * value true).
       * @param {Array} strArray - Array of Set-elements as strings.
       * @param {?string} [errMsg] - Custom error message thrown on invalid input.
       * @returns {Object} - TODO: add return description.
       * @private
       */
    }, {
      key: "_stringArrayToSet",
      value: function _stringArrayToSet(strArray, errMsg) {
        if (!strArray)
          return {};
        errMsg = errMsg || "Cannot make set from type other than Array of string elements";
        if (!Array.isArray(strArray)) {
          throw new Error(errMsg);
        }
        return strArray.reduce(function(set2, el) {
          if (typeof el !== "string") {
            throw new Error(errMsg);
          }
          set2[el] = true;
          return set2;
        }, {});
      }
    }]);
    return Console;
  }(TransportStream4);
  return console_1$1;
}
var series = { exports: {} };
var parallel = { exports: {} };
var isArrayLike$2 = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = isArrayLike2;
  function isArrayLike2(value) {
    return value && typeof value.length === "number" && value.length >= 0 && value.length % 1 === 0;
  }
  module2.exports = exports2.default;
})(isArrayLike$2, isArrayLike$2.exports);
var isArrayLikeExports = isArrayLike$2.exports;
var wrapAsync = {};
var asyncify = { exports: {} };
var initialParams = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = function(fn) {
    return function(...args) {
      var callback = args.pop();
      return fn.call(this, args, callback);
    };
  };
  module2.exports = exports2.default;
})(initialParams, initialParams.exports);
var initialParamsExports = initialParams.exports;
var setImmediate$1 = {};
Object.defineProperty(setImmediate$1, "__esModule", {
  value: true
});
setImmediate$1.fallback = fallback;
setImmediate$1.wrap = wrap;
var hasQueueMicrotask = setImmediate$1.hasQueueMicrotask = typeof queueMicrotask === "function" && queueMicrotask;
var hasSetImmediate = setImmediate$1.hasSetImmediate = typeof setImmediate === "function" && setImmediate;
var hasNextTick = setImmediate$1.hasNextTick = typeof process === "object" && typeof process.nextTick === "function";
function fallback(fn) {
  setTimeout(fn, 0);
}
function wrap(defer) {
  return (fn, ...args) => defer(() => fn(...args));
}
var _defer;
if (hasQueueMicrotask) {
  _defer = queueMicrotask;
} else if (hasSetImmediate) {
  _defer = setImmediate;
} else if (hasNextTick) {
  _defer = process.nextTick;
} else {
  _defer = fallback;
}
setImmediate$1.default = wrap(_defer);
var hasRequiredAsyncify;
function requireAsyncify() {
  if (hasRequiredAsyncify)
    return asyncify.exports;
  hasRequiredAsyncify = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = asyncify2;
    var _initialParams = initialParamsExports;
    var _initialParams2 = _interopRequireDefault(_initialParams);
    var _setImmediate = setImmediate$1;
    var _setImmediate2 = _interopRequireDefault(_setImmediate);
    var _wrapAsync = requireWrapAsync();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function asyncify2(func) {
      if ((0, _wrapAsync.isAsync)(func)) {
        return function(...args) {
          const callback = args.pop();
          const promise = func.apply(this, args);
          return handlePromise(promise, callback);
        };
      }
      return (0, _initialParams2.default)(function(args, callback) {
        var result;
        try {
          result = func.apply(this, args);
        } catch (e) {
          return callback(e);
        }
        if (result && typeof result.then === "function") {
          return handlePromise(result, callback);
        } else {
          callback(null, result);
        }
      });
    }
    function handlePromise(promise, callback) {
      return promise.then((value) => {
        invokeCallback(callback, null, value);
      }, (err) => {
        invokeCallback(callback, err && (err instanceof Error || err.message) ? err : new Error(err));
      });
    }
    function invokeCallback(callback, error, value) {
      try {
        callback(error, value);
      } catch (err) {
        (0, _setImmediate2.default)((e) => {
          throw e;
        }, err);
      }
    }
    module2.exports = exports2.default;
  })(asyncify, asyncify.exports);
  return asyncify.exports;
}
var hasRequiredWrapAsync;
function requireWrapAsync() {
  if (hasRequiredWrapAsync)
    return wrapAsync;
  hasRequiredWrapAsync = 1;
  Object.defineProperty(wrapAsync, "__esModule", {
    value: true
  });
  wrapAsync.isAsyncIterable = wrapAsync.isAsyncGenerator = wrapAsync.isAsync = void 0;
  var _asyncify = requireAsyncify();
  var _asyncify2 = _interopRequireDefault(_asyncify);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isAsync(fn) {
    return fn[Symbol.toStringTag] === "AsyncFunction";
  }
  function isAsyncGenerator(fn) {
    return fn[Symbol.toStringTag] === "AsyncGenerator";
  }
  function isAsyncIterable(obj) {
    return typeof obj[Symbol.asyncIterator] === "function";
  }
  function wrapAsync$1(asyncFn) {
    if (typeof asyncFn !== "function")
      throw new Error("expected a function");
    return isAsync(asyncFn) ? (0, _asyncify2.default)(asyncFn) : asyncFn;
  }
  wrapAsync.default = wrapAsync$1;
  wrapAsync.isAsync = isAsync;
  wrapAsync.isAsyncGenerator = isAsyncGenerator;
  wrapAsync.isAsyncIterable = isAsyncIterable;
  return wrapAsync;
}
var awaitify = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = awaitify2;
  function awaitify2(asyncFn, arity) {
    if (!arity)
      arity = asyncFn.length;
    if (!arity)
      throw new Error("arity is undefined");
    function awaitable(...args) {
      if (typeof args[arity - 1] === "function") {
        return asyncFn.apply(this, args);
      }
      return new Promise((resolve, reject) => {
        args[arity - 1] = (err, ...cbArgs) => {
          if (err)
            return reject(err);
          resolve(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
        };
        asyncFn.apply(this, args);
      });
    }
    return awaitable;
  }
  module2.exports = exports2.default;
})(awaitify, awaitify.exports);
var awaitifyExports = awaitify.exports;
var hasRequiredParallel;
function requireParallel() {
  if (hasRequiredParallel)
    return parallel.exports;
  hasRequiredParallel = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var _isArrayLike = isArrayLikeExports;
    var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
    var _wrapAsync = requireWrapAsync();
    var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
    var _awaitify = awaitifyExports;
    var _awaitify2 = _interopRequireDefault(_awaitify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2.default = (0, _awaitify2.default)((eachfn, tasks, callback) => {
      var results = (0, _isArrayLike2.default)(tasks) ? [] : {};
      eachfn(tasks, (task, key, taskCb) => {
        (0, _wrapAsync2.default)(task)((err, ...result) => {
          if (result.length < 2) {
            [result] = result;
          }
          results[key] = result;
          taskCb(err);
        });
      }, (err) => callback(err, results));
    }, 3);
    module2.exports = exports2.default;
  })(parallel, parallel.exports);
  return parallel.exports;
}
var eachOfSeries = { exports: {} };
var eachOfLimit$1 = { exports: {} };
var eachOfLimit = { exports: {} };
var once$4 = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = once2;
  function once2(fn) {
    function wrapper(...args) {
      if (fn === null)
        return;
      var callFn = fn;
      fn = null;
      callFn.apply(this, args);
    }
    Object.assign(wrapper, fn);
    return wrapper;
  }
  module2.exports = exports2.default;
})(once$4, once$4.exports);
var onceExports = once$4.exports;
var iterator = { exports: {} };
var getIterator = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = function(coll) {
    return coll[Symbol.iterator] && coll[Symbol.iterator]();
  };
  module2.exports = exports2.default;
})(getIterator, getIterator.exports);
var getIteratorExports = getIterator.exports;
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = createIterator;
  var _isArrayLike = isArrayLikeExports;
  var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
  var _getIterator = getIteratorExports;
  var _getIterator2 = _interopRequireDefault(_getIterator);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
      return ++i < len ? { value: coll[i], key: i } : null;
    };
  }
  function createES2015Iterator(iterator2) {
    var i = -1;
    return function next() {
      var item = iterator2.next();
      if (item.done)
        return null;
      i++;
      return { value: item.value, key: i };
    };
  }
  function createObjectIterator(obj) {
    var okeys = obj ? Object.keys(obj) : [];
    var i = -1;
    var len = okeys.length;
    return function next() {
      var key = okeys[++i];
      if (key === "__proto__") {
        return next();
      }
      return i < len ? { value: obj[key], key } : null;
    };
  }
  function createIterator(coll) {
    if ((0, _isArrayLike2.default)(coll)) {
      return createArrayIterator(coll);
    }
    var iterator2 = (0, _getIterator2.default)(coll);
    return iterator2 ? createES2015Iterator(iterator2) : createObjectIterator(coll);
  }
  module2.exports = exports2.default;
})(iterator, iterator.exports);
var iteratorExports = iterator.exports;
var onlyOnce = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = onlyOnce2;
  function onlyOnce2(fn) {
    return function(...args) {
      if (fn === null)
        throw new Error("Callback was already called.");
      var callFn = fn;
      fn = null;
      callFn.apply(this, args);
    };
  }
  module2.exports = exports2.default;
})(onlyOnce, onlyOnce.exports);
var onlyOnceExports = onlyOnce.exports;
var asyncEachOfLimit = { exports: {} };
var breakLoop = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  const breakLoop2 = {};
  exports2.default = breakLoop2;
  module2.exports = exports2.default;
})(breakLoop, breakLoop.exports);
var breakLoopExports = breakLoop.exports;
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = asyncEachOfLimit2;
  var _breakLoop = breakLoopExports;
  var _breakLoop2 = _interopRequireDefault(_breakLoop);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function asyncEachOfLimit2(generator, limit, iteratee, callback) {
    let done2 = false;
    let canceled = false;
    let awaiting = false;
    let running = 0;
    let idx = 0;
    function replenish() {
      if (running >= limit || awaiting || done2)
        return;
      awaiting = true;
      generator.next().then(({ value, done: iterDone }) => {
        if (canceled || done2)
          return;
        awaiting = false;
        if (iterDone) {
          done2 = true;
          if (running <= 0) {
            callback(null);
          }
          return;
        }
        running++;
        iteratee(value, idx, iterateeCallback);
        idx++;
        replenish();
      }).catch(handleError);
    }
    function iterateeCallback(err, result) {
      running -= 1;
      if (canceled)
        return;
      if (err)
        return handleError(err);
      if (err === false) {
        done2 = true;
        canceled = true;
        return;
      }
      if (result === _breakLoop2.default || done2 && running <= 0) {
        done2 = true;
        return callback(null);
      }
      replenish();
    }
    function handleError(err) {
      if (canceled)
        return;
      awaiting = false;
      done2 = true;
      callback(err);
    }
    replenish();
  }
  module2.exports = exports2.default;
})(asyncEachOfLimit, asyncEachOfLimit.exports);
var asyncEachOfLimitExports = asyncEachOfLimit.exports;
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  var _once = onceExports;
  var _once2 = _interopRequireDefault(_once);
  var _iterator = iteratorExports;
  var _iterator2 = _interopRequireDefault(_iterator);
  var _onlyOnce = onlyOnceExports;
  var _onlyOnce2 = _interopRequireDefault(_onlyOnce);
  var _wrapAsync = requireWrapAsync();
  var _asyncEachOfLimit = asyncEachOfLimitExports;
  var _asyncEachOfLimit2 = _interopRequireDefault(_asyncEachOfLimit);
  var _breakLoop = breakLoopExports;
  var _breakLoop2 = _interopRequireDefault(_breakLoop);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports2.default = (limit) => {
    return (obj, iteratee, callback) => {
      callback = (0, _once2.default)(callback);
      if (limit <= 0) {
        throw new RangeError("concurrency limit cannot be less than 1");
      }
      if (!obj) {
        return callback(null);
      }
      if ((0, _wrapAsync.isAsyncGenerator)(obj)) {
        return (0, _asyncEachOfLimit2.default)(obj, limit, iteratee, callback);
      }
      if ((0, _wrapAsync.isAsyncIterable)(obj)) {
        return (0, _asyncEachOfLimit2.default)(obj[Symbol.asyncIterator](), limit, iteratee, callback);
      }
      var nextElem = (0, _iterator2.default)(obj);
      var done2 = false;
      var canceled = false;
      var running = 0;
      var looping = false;
      function iterateeCallback(err, value) {
        if (canceled)
          return;
        running -= 1;
        if (err) {
          done2 = true;
          callback(err);
        } else if (err === false) {
          done2 = true;
          canceled = true;
        } else if (value === _breakLoop2.default || done2 && running <= 0) {
          done2 = true;
          return callback(null);
        } else if (!looping) {
          replenish();
        }
      }
      function replenish() {
        looping = true;
        while (running < limit && !done2) {
          var elem = nextElem();
          if (elem === null) {
            done2 = true;
            if (running <= 0) {
              callback(null);
            }
            return;
          }
          running += 1;
          iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
        }
        looping = false;
      }
      replenish();
    };
  };
  module2.exports = exports2.default;
})(eachOfLimit, eachOfLimit.exports);
var eachOfLimitExports$1 = eachOfLimit.exports;
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  var _eachOfLimit2 = eachOfLimitExports$1;
  var _eachOfLimit3 = _interopRequireDefault(_eachOfLimit2);
  var _wrapAsync = requireWrapAsync();
  var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
  var _awaitify = awaitifyExports;
  var _awaitify2 = _interopRequireDefault(_awaitify);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function eachOfLimit2(coll, limit, iteratee, callback) {
    return (0, _eachOfLimit3.default)(limit)(coll, (0, _wrapAsync2.default)(iteratee), callback);
  }
  exports2.default = (0, _awaitify2.default)(eachOfLimit2, 4);
  module2.exports = exports2.default;
})(eachOfLimit$1, eachOfLimit$1.exports);
var eachOfLimitExports = eachOfLimit$1.exports;
var hasRequiredEachOfSeries;
function requireEachOfSeries() {
  if (hasRequiredEachOfSeries)
    return eachOfSeries.exports;
  hasRequiredEachOfSeries = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var _eachOfLimit = eachOfLimitExports;
    var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);
    var _awaitify = awaitifyExports;
    var _awaitify2 = _interopRequireDefault(_awaitify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function eachOfSeries2(coll, iteratee, callback) {
      return (0, _eachOfLimit2.default)(coll, 1, iteratee, callback);
    }
    exports2.default = (0, _awaitify2.default)(eachOfSeries2, 3);
    module2.exports = exports2.default;
  })(eachOfSeries, eachOfSeries.exports);
  return eachOfSeries.exports;
}
var hasRequiredSeries;
function requireSeries() {
  if (hasRequiredSeries)
    return series.exports;
  hasRequiredSeries = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = series2;
    var _parallel2 = requireParallel();
    var _parallel3 = _interopRequireDefault(_parallel2);
    var _eachOfSeries = requireEachOfSeries();
    var _eachOfSeries2 = _interopRequireDefault(_eachOfSeries);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function series2(tasks, callback) {
      return (0, _parallel3.default)(_eachOfSeries2.default, tasks, callback);
    }
    module2.exports = exports2.default;
  })(series, series.exports);
  return series.exports;
}
var readableBrowser = { exports: {} };
var _stream_transform = Transform$2;
var _require$codes$1 = errorsBrowser.codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require_stream_duplex();
inherits_browserExports(Transform$2, Duplex);
function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (cb === null) {
    return this.emit("error", new ERR_MULTIPLE_CALLBACK());
  }
  ts.writechunk = null;
  ts.writecb = null;
  if (data != null)
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}
function Transform$2(options) {
  if (!(this instanceof Transform$2))
    return new Transform$2(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === "function")
      this._transform = options.transform;
    if (typeof options.flush === "function")
      this._flush = options.flush;
  }
  this.on("prefinish", prefinish);
}
function prefinish() {
  var _this2 = this;
  if (typeof this._flush === "function" && !this._readableState.destroyed) {
    this._flush(function(er, data) {
      done(_this2, er, data);
    });
  } else {
    done(this, null, null);
  }
}
Transform$2.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};
Transform$2.prototype._transform = function(chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
Transform$2.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};
Transform$2.prototype._read = function(n) {
  var ts = this._transformState;
  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    ts.needTransform = true;
  }
};
Transform$2.prototype._destroy = function(err, cb) {
  Duplex.prototype._destroy.call(this, err, function(err2) {
    cb(err2);
  });
};
function done(stream2, er, data) {
  if (er)
    return stream2.emit("error", er);
  if (data != null)
    stream2.push(data);
  if (stream2._writableState.length)
    throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream2._transformState.transforming)
    throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream2.push(null);
}
var _stream_passthrough = PassThrough;
var Transform$1 = _stream_transform;
inherits_browserExports(PassThrough, Transform$1);
function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);
  Transform$1.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};
var eos;
function once$3(callback) {
  var called = false;
  return function() {
    if (called)
      return;
    called = true;
    callback.apply(void 0, arguments);
  };
}
var _require$codes = errorsBrowser.codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
  if (err)
    throw err;
}
function isRequest(stream2) {
  return stream2.setHeader && typeof stream2.abort === "function";
}
function destroyer(stream2, reading, writing, callback) {
  callback = once$3(callback);
  var closed = false;
  stream2.on("close", function() {
    closed = true;
  });
  if (eos === void 0)
    eos = endOfStream;
  eos(stream2, {
    readable: reading,
    writable: writing
  }, function(err) {
    if (err)
      return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function(err) {
    if (closed)
      return;
    if (destroyed)
      return;
    destroyed = true;
    if (isRequest(stream2))
      return stream2.abort();
    if (typeof stream2.destroy === "function")
      return stream2.destroy();
    callback(err || new ERR_STREAM_DESTROYED("pipe"));
  };
}
function call(fn) {
  fn();
}
function pipe(from, to) {
  return from.pipe(to);
}
function popCallback(streams) {
  if (!streams.length)
    return noop;
  if (typeof streams[streams.length - 1] !== "function")
    return noop;
  return streams.pop();
}
function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }
  var callback = popCallback(streams);
  if (Array.isArray(streams[0]))
    streams = streams[0];
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS("streams");
  }
  var error;
  var destroys = streams.map(function(stream2, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream2, reading, writing, function(err) {
      if (!error)
        error = err;
      if (err)
        destroys.forEach(call);
      if (reading)
        return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}
var pipeline_1 = pipeline;
(function(module2, exports2) {
  exports2 = module2.exports = require_stream_readable();
  exports2.Stream = exports2;
  exports2.Readable = exports2;
  exports2.Writable = require_stream_writable();
  exports2.Duplex = require_stream_duplex();
  exports2.Transform = _stream_transform;
  exports2.PassThrough = _stream_passthrough;
  exports2.finished = endOfStream;
  exports2.pipeline = pipeline_1;
})(readableBrowser, readableBrowser.exports);
var readableBrowserExports = readableBrowser.exports;
var browser = { exports: {} };
var diagnostics;
var hasRequiredDiagnostics;
function requireDiagnostics() {
  if (hasRequiredDiagnostics)
    return diagnostics;
  hasRequiredDiagnostics = 1;
  var adapters2 = [];
  var modifiers = [];
  var logger2 = function devnull() {
  };
  function use(adapter) {
    if (~adapters2.indexOf(adapter))
      return false;
    adapters2.push(adapter);
    return true;
  }
  function set2(custom) {
    logger2 = custom;
  }
  function enabled2(namespace2) {
    var async = [];
    for (var i = 0; i < adapters2.length; i++) {
      if (adapters2[i].async) {
        async.push(adapters2[i]);
        continue;
      }
      if (adapters2[i](namespace2))
        return true;
    }
    if (!async.length)
      return false;
    return new Promise(function pinky(resolve) {
      Promise.all(
        async.map(function prebind(fn) {
          return fn(namespace2);
        })
      ).then(function resolved(values) {
        resolve(values.some(Boolean));
      });
    });
  }
  function modify(fn) {
    if (~modifiers.indexOf(fn))
      return false;
    modifiers.push(fn);
    return true;
  }
  function write() {
    logger2.apply(logger2, arguments);
  }
  function process2(message) {
    for (var i = 0; i < modifiers.length; i++) {
      message = modifiers[i].apply(modifiers[i], arguments);
    }
    return message;
  }
  function introduce(fn, options) {
    var has2 = Object.prototype.hasOwnProperty;
    for (var key in options) {
      if (has2.call(options, key)) {
        fn[key] = options[key];
      }
    }
    return fn;
  }
  function nope(options) {
    options.enabled = false;
    options.modify = modify;
    options.set = set2;
    options.use = use;
    return introduce(function diagnopes() {
      return false;
    }, options);
  }
  function yep(options) {
    function diagnostics2() {
      var args = Array.prototype.slice.call(arguments, 0);
      write.call(write, options, process2(args, options));
      return true;
    }
    options.enabled = true;
    options.modify = modify;
    options.set = set2;
    options.use = use;
    return introduce(diagnostics2, options);
  }
  diagnostics = function create2(diagnostics2) {
    diagnostics2.introduce = introduce;
    diagnostics2.enabled = enabled2;
    diagnostics2.process = process2;
    diagnostics2.modify = modify;
    diagnostics2.write = write;
    diagnostics2.nope = nope;
    diagnostics2.yep = yep;
    diagnostics2.set = set2;
    diagnostics2.use = use;
    return diagnostics2;
  };
  return diagnostics;
}
var production;
var hasRequiredProduction;
function requireProduction() {
  if (hasRequiredProduction)
    return production;
  hasRequiredProduction = 1;
  var create2 = requireDiagnostics();
  var diagnostics2 = create2(function prod(namespace2, options) {
    options = options || {};
    options.namespace = namespace2;
    options.prod = true;
    options.dev = false;
    if (!(options.force || prod.force))
      return prod.nope(options);
    return prod.yep(options);
  });
  production = diagnostics2;
  return production;
}
var colorString = { exports: {} };
var colorName$1;
var hasRequiredColorName$1;
function requireColorName$1() {
  if (hasRequiredColorName$1)
    return colorName$1;
  hasRequiredColorName$1 = 1;
  colorName$1 = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  return colorName$1;
}
var simpleSwizzle = { exports: {} };
var isArrayish;
var hasRequiredIsArrayish;
function requireIsArrayish() {
  if (hasRequiredIsArrayish)
    return isArrayish;
  hasRequiredIsArrayish = 1;
  isArrayish = function isArrayish2(obj) {
    if (!obj || typeof obj === "string") {
      return false;
    }
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
  };
  return isArrayish;
}
var hasRequiredSimpleSwizzle;
function requireSimpleSwizzle() {
  if (hasRequiredSimpleSwizzle)
    return simpleSwizzle.exports;
  hasRequiredSimpleSwizzle = 1;
  var isArrayish2 = requireIsArrayish();
  var concat = Array.prototype.concat;
  var slice = Array.prototype.slice;
  var swizzle = simpleSwizzle.exports = function swizzle2(args) {
    var results = [];
    for (var i = 0, len = args.length; i < len; i++) {
      var arg = args[i];
      if (isArrayish2(arg)) {
        results = concat.call(results, slice.call(arg));
      } else {
        results.push(arg);
      }
    }
    return results;
  };
  swizzle.wrap = function(fn) {
    return function() {
      return fn(swizzle(arguments));
    };
  };
  return simpleSwizzle.exports;
}
var hasRequiredColorString;
function requireColorString() {
  if (hasRequiredColorString)
    return colorString.exports;
  hasRequiredColorString = 1;
  var colorNames = requireColorName$1();
  var swizzle = requireSimpleSwizzle();
  var hasOwnProperty2 = Object.hasOwnProperty;
  var reverseNames = /* @__PURE__ */ Object.create(null);
  for (var name3 in colorNames) {
    if (hasOwnProperty2.call(colorNames, name3)) {
      reverseNames[colorNames[name3]] = name3;
    }
  }
  var cs = colorString.exports = {
    to: {},
    get: {}
  };
  cs.get = function(string2) {
    var prefix = string2.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch (prefix) {
      case "hsl":
        val = cs.get.hsl(string2);
        model = "hsl";
        break;
      case "hwb":
        val = cs.get.hwb(string2);
        model = "hwb";
        break;
      default:
        val = cs.get.rgb(string2);
        model = "rgb";
        break;
    }
    if (!val) {
      return null;
    }
    return { model, value: val };
  };
  cs.get.rgb = function(string2) {
    if (!string2) {
      return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [0, 0, 0, 1];
    var match;
    var i;
    var hexAlpha;
    if (match = string2.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0; i < 3; i++) {
        var i2 = i * 2;
        rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string2.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string2.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i + 1], 0);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string2.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string2.match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!hasOwnProperty2.call(colorNames, match[1])) {
        return null;
      }
      rgb = colorNames[match[1]];
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }
    for (i = 0; i < 3; i++) {
      rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
  };
  cs.get.hsl = function(string2) {
    if (!string2) {
      return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string2.match(hsl);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h2 = (parseFloat(match[1]) % 360 + 360) % 360;
      var s2 = clamp(parseFloat(match[2]), 0, 100);
      var l = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h2, s2, l, a];
    }
    return null;
  };
  cs.get.hwb = function(string2) {
    if (!string2) {
      return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string2.match(hwb);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h2 = (parseFloat(match[1]) % 360 + 360) % 360;
      var w2 = clamp(parseFloat(match[2]), 0, 100);
      var b = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h2, w2, b, a];
    }
    return null;
  };
  cs.to.hex = function() {
    var rgba = swizzle(arguments);
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
  };
  cs.to.rgb = function() {
    var rgba = swizzle(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs.to.rgb.percent = function() {
    var rgba = swizzle(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
  };
  cs.to.hsl = function() {
    var hsla = swizzle(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs.to.hwb = function() {
    var hwba = swizzle(arguments);
    var a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs.to.keyword = function(rgb) {
    return reverseNames[rgb.slice(0, 3)];
  };
  function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }
  function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  }
  return colorString.exports;
}
var conversions = { exports: {} };
var colorName;
var hasRequiredColorName;
function requireColorName() {
  if (hasRequiredColorName)
    return colorName;
  hasRequiredColorName = 1;
  colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };
  return colorName;
}
var hasRequiredConversions;
function requireConversions() {
  if (hasRequiredConversions)
    return conversions.exports;
  hasRequiredConversions = 1;
  var cssKeywords = requireColorName();
  var reverseKeywords = {};
  for (var key in cssKeywords) {
    if (cssKeywords.hasOwnProperty(key)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
  }
  var convert = conversions.exports = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  for (var model in convert) {
    if (convert.hasOwnProperty(model)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      var channels = convert[model].channels;
      var labels = convert[model].labels;
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
  }
  convert.rgb.hsl = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h2;
    var s2;
    var l;
    if (max === min) {
      h2 = 0;
    } else if (r === max) {
      h2 = (g - b) / delta;
    } else if (g === max) {
      h2 = 2 + (b - r) / delta;
    } else if (b === max) {
      h2 = 4 + (r - g) / delta;
    }
    h2 = Math.min(h2 * 60, 360);
    if (h2 < 0) {
      h2 += 360;
    }
    l = (min + max) / 2;
    if (max === min) {
      s2 = 0;
    } else if (l <= 0.5) {
      s2 = delta / (max + min);
    } else {
      s2 = delta / (2 - max - min);
    }
    return [h2, s2 * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    var rdif;
    var gdif;
    var bdif;
    var h2;
    var s2;
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var v = Math.max(r, g, b);
    var diff = v - Math.min(r, g, b);
    var diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h2 = s2 = 0;
    } else {
      s2 = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h2 = bdif - gdif;
      } else if (g === v) {
        h2 = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h2 = 2 / 3 + gdif - rdif;
      }
      if (h2 < 0) {
        h2 += 1;
      } else if (h2 > 1) {
        h2 -= 1;
      }
    }
    return [
      h2 * 360,
      s2 * 100,
      v * 100
    ];
  };
  convert.rgb.hwb = function(rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    var h2 = convert.rgb.hsl(rgb)[0];
    var w2 = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h2, w2 * 100, b * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var c;
    var m2;
    var y2;
    var k;
    k = Math.min(1 - r, 1 - g, 1 - b);
    c = (1 - r - k) / (1 - k) || 0;
    m2 = (1 - g - k) / (1 - k) || 0;
    y2 = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m2 * 100, y2 * 100, k * 100];
  };
  function comparativeDistance(x, y2) {
    return Math.pow(x[0] - y2[0], 2) + Math.pow(x[1] - y2[1], 2) + Math.pow(x[2] - y2[2], 2);
  }
  convert.rgb.keyword = function(rgb) {
    var reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    var currentClosestDistance = Infinity;
    var currentClosestKeyword;
    for (var keyword in cssKeywords) {
      if (cssKeywords.hasOwnProperty(keyword)) {
        var value = cssKeywords[keyword];
        var distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    var y2 = r * 0.2126 + g * 0.7152 + b * 0.0722;
    var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y2 * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    var xyz = convert.rgb.xyz(rgb);
    var x = xyz[0];
    var y2 = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y2 /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y2 = y2 > 8856e-6 ? Math.pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
    z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y2 - 16;
    a = 500 * (x - y2);
    b = 200 * (y2 - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    var h2 = hsl[0] / 360;
    var s2 = hsl[1] / 100;
    var l = hsl[2] / 100;
    var t1;
    var t2;
    var t3;
    var rgb;
    var val;
    if (s2 === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s2);
    } else {
      t2 = l + s2 - l * s2;
    }
    t1 = 2 * l - t2;
    rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      t3 = h2 + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    var h2 = hsl[0];
    var s2 = hsl[1] / 100;
    var l = hsl[2] / 100;
    var smin = s2;
    var lmin = Math.max(l, 0.01);
    var sv;
    var v;
    l *= 2;
    s2 *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    v = (l + s2) / 2;
    sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s2 / (l + s2);
    return [h2, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    var h2 = hsv[0] / 60;
    var s2 = hsv[1] / 100;
    var v = hsv[2] / 100;
    var hi = Math.floor(h2) % 6;
    var f = h2 - Math.floor(h2);
    var p = 255 * v * (1 - s2);
    var q = 255 * v * (1 - s2 * f);
    var t = 255 * v * (1 - s2 * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert.hsv.hsl = function(hsv) {
    var h2 = hsv[0];
    var s2 = hsv[1] / 100;
    var v = hsv[2] / 100;
    var vmin = Math.max(v, 0.01);
    var lmin;
    var sl;
    var l;
    l = (2 - s2) * v;
    lmin = (2 - s2) * vmin;
    sl = s2 * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h2, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    var h2 = hwb[0] / 360;
    var wh = hwb[1] / 100;
    var bl = hwb[2] / 100;
    var ratio = wh + bl;
    var i;
    var v;
    var f;
    var n;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    i = Math.floor(6 * h2);
    v = 1 - bl;
    f = 6 * h2 - i;
    if ((i & 1) !== 0) {
      f = 1 - f;
    }
    n = wh + f * (v - wh);
    var r;
    var g;
    var b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    var c = cmyk[0] / 100;
    var m2 = cmyk[1] / 100;
    var y2 = cmyk[2] / 100;
    var k = cmyk[3] / 100;
    var r;
    var g;
    var b;
    r = 1 - Math.min(1, c * (1 - k) + k);
    g = 1 - Math.min(1, m2 * (1 - k) + k);
    b = 1 - Math.min(1, y2 * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    var x = xyz[0] / 100;
    var y2 = xyz[1] / 100;
    var z = xyz[2] / 100;
    var r;
    var g;
    var b;
    r = x * 3.2406 + y2 * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y2 * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y2 * -0.204 + z * 1.057;
    r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
    g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
    b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    var x = xyz[0];
    var y2 = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y2 /= 100;
    z /= 108.883;
    x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y2 = y2 > 8856e-6 ? Math.pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
    z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y2 - 16;
    a = 500 * (x - y2);
    b = 200 * (y2 - z);
    return [l, a, b];
  };
  convert.lab.xyz = function(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var x;
    var y2;
    var z;
    y2 = (l + 16) / 116;
    x = a / 500 + y2;
    z = y2 - b / 200;
    var y22 = Math.pow(y2, 3);
    var x2 = Math.pow(x, 3);
    var z2 = Math.pow(z, 3);
    y2 = y22 > 8856e-6 ? y22 : (y2 - 16 / 116) / 7.787;
    x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y2 *= 100;
    z *= 108.883;
    return [x, y2, z];
  };
  convert.lab.lch = function(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var hr;
    var h2;
    var c;
    hr = Math.atan2(b, a);
    h2 = hr * 360 / 2 / Math.PI;
    if (h2 < 0) {
      h2 += 360;
    }
    c = Math.sqrt(a * a + b * b);
    return [l, c, h2];
  };
  convert.lch.lab = function(lch) {
    var l = lch[0];
    var c = lch[1];
    var h2 = lch[2];
    var a;
    var b;
    var hr;
    hr = h2 / 360 * 2 * Math.PI;
    a = c * Math.cos(hr);
    b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    var color2 = args % 10;
    if (color2 === 0 || color2 === 7) {
      if (args > 50) {
        color2 += 3.5;
      }
      color2 = color2 / 10.5 * 255;
      return [color2, color2, color2];
    }
    var mult = (~~(args > 50) + 1) * 0.5;
    var r = (color2 & 1) * mult * 255;
    var g = (color2 >> 1 & 1) * mult * 255;
    var b = (color2 >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    if (args >= 232) {
      var c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    var rem;
    var r = Math.floor(args / 36) / 5 * 255;
    var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    var b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
    var string2 = integer.toString(16).toUpperCase();
    return "000000".substring(string2.length) + string2;
  };
  convert.hex.rgb = function(args) {
    var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    var colorString2 = match[0];
    if (match[0].length === 3) {
      colorString2 = colorString2.split("").map(function(char) {
        return char + char;
      }).join("");
    }
    var integer = parseInt(colorString2, 16);
    var r = integer >> 16 & 255;
    var g = integer >> 8 & 255;
    var b = integer & 255;
    return [r, g, b];
  };
  convert.rgb.hcg = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var max = Math.max(Math.max(r, g), b);
    var min = Math.min(Math.min(r, g), b);
    var chroma = max - min;
    var grayscale;
    var hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma + 4;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert.hsl.hcg = function(hsl) {
    var s2 = hsl[1] / 100;
    var l = hsl[2] / 100;
    var c = 1;
    var f = 0;
    if (l < 0.5) {
      c = 2 * s2 * l;
    } else {
      c = 2 * s2 * (1 - l);
    }
    if (c < 1) {
      f = (l - 0.5 * c) / (1 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert.hsv.hcg = function(hsv) {
    var s2 = hsv[1] / 100;
    var v = hsv[2] / 100;
    var c = s2 * v;
    var f = 0;
    if (c < 1) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert.hcg.rgb = function(hcg) {
    var h2 = hcg[0] / 360;
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    if (c === 0) {
      return [g * 255, g * 255, g * 255];
    }
    var pure = [0, 0, 0];
    var hi = h2 % 1 * 6;
    var v = hi % 1;
    var w2 = 1 - v;
    var mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w2;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w2;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w2;
    }
    mg = (1 - c) * g;
    return [
      (c * pure[0] + mg) * 255,
      (c * pure[1] + mg) * 255,
      (c * pure[2] + mg) * 255
    ];
  };
  convert.hcg.hsv = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1 - c);
    var f = 0;
    if (v > 0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert.hcg.hsl = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var l = g * (1 - c) + 0.5 * c;
    var s2 = 0;
    if (l > 0 && l < 0.5) {
      s2 = c / (2 * l);
    } else if (l >= 0.5 && l < 1) {
      s2 = c / (2 * (1 - l));
    }
    return [hcg[0], s2 * 100, l * 100];
  };
  convert.hcg.hwb = function(hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert.hwb.hcg = function(hwb) {
    var w2 = hwb[1] / 100;
    var b = hwb[2] / 100;
    var v = 1 - b;
    var c = v - w2;
    var g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert.apple.rgb = function(apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert.rgb.apple = function(rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert.gray.rgb = function(args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert.gray.hsl = convert.gray.hsv = function(args) {
    return [0, 0, args[0]];
  };
  convert.gray.hwb = function(gray) {
    return [0, 100, gray[0]];
  };
  convert.gray.cmyk = function(gray) {
    return [0, 0, 0, gray[0]];
  };
  convert.gray.lab = function(gray) {
    return [gray[0], 0, 0];
  };
  convert.gray.hex = function(gray) {
    var val = Math.round(gray[0] / 100 * 255) & 255;
    var integer = (val << 16) + (val << 8) + val;
    var string2 = integer.toString(16).toUpperCase();
    return "000000".substring(string2.length) + string2;
  };
  convert.rgb.gray = function(rgb) {
    var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
  return conversions.exports;
}
var route;
var hasRequiredRoute;
function requireRoute() {
  if (hasRequiredRoute)
    return route;
  hasRequiredRoute = 1;
  var conversions2 = requireConversions();
  function buildGraph() {
    var graph = {};
    var models = Object.keys(conversions2);
    for (var len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    var graph = buildGraph();
    var queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      var current = queue.pop();
      var adjacents = Object.keys(conversions2[current]);
      for (var len = adjacents.length, i = 0; i < len; i++) {
        var adjacent = adjacents[i];
        var node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    var path = [graph[toModel].parent, toModel];
    var fn = conversions2[graph[toModel].parent][toModel];
    var cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions2[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  route = function(fromModel) {
    var graph = deriveBFS(fromModel);
    var conversion = {};
    var models = Object.keys(graph);
    for (var len = models.length, i = 0; i < len; i++) {
      var toModel = models[i];
      var node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
  return route;
}
var colorConvert;
var hasRequiredColorConvert;
function requireColorConvert() {
  if (hasRequiredColorConvert)
    return colorConvert;
  hasRequiredColorConvert = 1;
  var conversions2 = requireConversions();
  var route2 = requireRoute();
  var convert = {};
  var models = Object.keys(conversions2);
  function wrapRaw(fn) {
    var wrappedFn = function(args) {
      if (args === void 0 || args === null) {
        return args;
      }
      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }
      return fn(args);
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    var wrappedFn = function(args) {
      if (args === void 0 || args === null) {
        return args;
      }
      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }
      var result = fn(args);
      if (typeof result === "object") {
        for (var len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach(function(fromModel) {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], "channels", { value: conversions2[fromModel].channels });
    Object.defineProperty(convert[fromModel], "labels", { value: conversions2[fromModel].labels });
    var routes = route2(fromModel);
    var routeModels = Object.keys(routes);
    routeModels.forEach(function(toModel) {
      var fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  colorConvert = convert;
  return colorConvert;
}
var color;
var hasRequiredColor;
function requireColor() {
  if (hasRequiredColor)
    return color;
  hasRequiredColor = 1;
  var colorString2 = requireColorString();
  var convert = requireColorConvert();
  var _slice = [].slice;
  var skippedModels = [
    // to be honest, I don't really feel like keyword belongs in color convert, but eh.
    "keyword",
    // gray conflicts with some method names, and has its own method defined.
    "gray",
    // shouldn't really be in color-convert either...
    "hex"
  ];
  var hashedModelKeys = {};
  Object.keys(convert).forEach(function(model) {
    hashedModelKeys[_slice.call(convert[model].labels).sort().join("")] = model;
  });
  var limiters = {};
  function Color(obj, model) {
    if (!(this instanceof Color)) {
      return new Color(obj, model);
    }
    if (model && model in skippedModels) {
      model = null;
    }
    if (model && !(model in convert)) {
      throw new Error("Unknown model: " + model);
    }
    var i;
    var channels;
    if (obj == null) {
      this.model = "rgb";
      this.color = [0, 0, 0];
      this.valpha = 1;
    } else if (obj instanceof Color) {
      this.model = obj.model;
      this.color = obj.color.slice();
      this.valpha = obj.valpha;
    } else if (typeof obj === "string") {
      var result = colorString2.get(obj);
      if (result === null) {
        throw new Error("Unable to parse color from string: " + obj);
      }
      this.model = result.model;
      channels = convert[this.model].channels;
      this.color = result.value.slice(0, channels);
      this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
    } else if (obj.length) {
      this.model = model || "rgb";
      channels = convert[this.model].channels;
      var newArr = _slice.call(obj, 0, channels);
      this.color = zeroArray(newArr, channels);
      this.valpha = typeof obj[channels] === "number" ? obj[channels] : 1;
    } else if (typeof obj === "number") {
      obj &= 16777215;
      this.model = "rgb";
      this.color = [
        obj >> 16 & 255,
        obj >> 8 & 255,
        obj & 255
      ];
      this.valpha = 1;
    } else {
      this.valpha = 1;
      var keys2 = Object.keys(obj);
      if ("alpha" in obj) {
        keys2.splice(keys2.indexOf("alpha"), 1);
        this.valpha = typeof obj.alpha === "number" ? obj.alpha : 0;
      }
      var hashedKeys = keys2.sort().join("");
      if (!(hashedKeys in hashedModelKeys)) {
        throw new Error("Unable to parse color from object: " + JSON.stringify(obj));
      }
      this.model = hashedModelKeys[hashedKeys];
      var labels = convert[this.model].labels;
      var color2 = [];
      for (i = 0; i < labels.length; i++) {
        color2.push(obj[labels[i]]);
      }
      this.color = zeroArray(color2);
    }
    if (limiters[this.model]) {
      channels = convert[this.model].channels;
      for (i = 0; i < channels; i++) {
        var limit = limiters[this.model][i];
        if (limit) {
          this.color[i] = limit(this.color[i]);
        }
      }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
      Object.freeze(this);
    }
  }
  Color.prototype = {
    toString: function() {
      return this.string();
    },
    toJSON: function() {
      return this[this.model]();
    },
    string: function(places) {
      var self2 = this.model in colorString2.to ? this : this.rgb();
      self2 = self2.round(typeof places === "number" ? places : 1);
      var args = self2.valpha === 1 ? self2.color : self2.color.concat(this.valpha);
      return colorString2.to[self2.model](args);
    },
    percentString: function(places) {
      var self2 = this.rgb().round(typeof places === "number" ? places : 1);
      var args = self2.valpha === 1 ? self2.color : self2.color.concat(this.valpha);
      return colorString2.to.rgb.percent(args);
    },
    array: function() {
      return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
    },
    object: function() {
      var result = {};
      var channels = convert[this.model].channels;
      var labels = convert[this.model].labels;
      for (var i = 0; i < channels; i++) {
        result[labels[i]] = this.color[i];
      }
      if (this.valpha !== 1) {
        result.alpha = this.valpha;
      }
      return result;
    },
    unitArray: function() {
      var rgb = this.rgb().color;
      rgb[0] /= 255;
      rgb[1] /= 255;
      rgb[2] /= 255;
      if (this.valpha !== 1) {
        rgb.push(this.valpha);
      }
      return rgb;
    },
    unitObject: function() {
      var rgb = this.rgb().object();
      rgb.r /= 255;
      rgb.g /= 255;
      rgb.b /= 255;
      if (this.valpha !== 1) {
        rgb.alpha = this.valpha;
      }
      return rgb;
    },
    round: function(places) {
      places = Math.max(places || 0, 0);
      return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
    },
    alpha: function(val) {
      if (arguments.length) {
        return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
      }
      return this.valpha;
    },
    // rgb
    red: getset("rgb", 0, maxfn(255)),
    green: getset("rgb", 1, maxfn(255)),
    blue: getset("rgb", 2, maxfn(255)),
    hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(val) {
      return (val % 360 + 360) % 360;
    }),
    // eslint-disable-line brace-style
    saturationl: getset("hsl", 1, maxfn(100)),
    lightness: getset("hsl", 2, maxfn(100)),
    saturationv: getset("hsv", 1, maxfn(100)),
    value: getset("hsv", 2, maxfn(100)),
    chroma: getset("hcg", 1, maxfn(100)),
    gray: getset("hcg", 2, maxfn(100)),
    white: getset("hwb", 1, maxfn(100)),
    wblack: getset("hwb", 2, maxfn(100)),
    cyan: getset("cmyk", 0, maxfn(100)),
    magenta: getset("cmyk", 1, maxfn(100)),
    yellow: getset("cmyk", 2, maxfn(100)),
    black: getset("cmyk", 3, maxfn(100)),
    x: getset("xyz", 0, maxfn(100)),
    y: getset("xyz", 1, maxfn(100)),
    z: getset("xyz", 2, maxfn(100)),
    l: getset("lab", 0, maxfn(100)),
    a: getset("lab", 1),
    b: getset("lab", 2),
    keyword: function(val) {
      if (arguments.length) {
        return new Color(val);
      }
      return convert[this.model].keyword(this.color);
    },
    hex: function(val) {
      if (arguments.length) {
        return new Color(val);
      }
      return colorString2.to.hex(this.rgb().round().color);
    },
    rgbNumber: function() {
      var rgb = this.rgb().color;
      return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
    },
    luminosity: function() {
      var rgb = this.rgb().color;
      var lum = [];
      for (var i = 0; i < rgb.length; i++) {
        var chan = rgb[i] / 255;
        lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast: function(color2) {
      var lum1 = this.luminosity();
      var lum2 = color2.luminosity();
      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }
      return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level: function(color2) {
      var contrastRatio = this.contrast(color2);
      if (contrastRatio >= 7.1) {
        return "AAA";
      }
      return contrastRatio >= 4.5 ? "AA" : "";
    },
    isDark: function() {
      var rgb = this.rgb().color;
      var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
      return yiq < 128;
    },
    isLight: function() {
      return !this.isDark();
    },
    negate: function() {
      var rgb = this.rgb();
      for (var i = 0; i < 3; i++) {
        rgb.color[i] = 255 - rgb.color[i];
      }
      return rgb;
    },
    lighten: function(ratio) {
      var hsl = this.hsl();
      hsl.color[2] += hsl.color[2] * ratio;
      return hsl;
    },
    darken: function(ratio) {
      var hsl = this.hsl();
      hsl.color[2] -= hsl.color[2] * ratio;
      return hsl;
    },
    saturate: function(ratio) {
      var hsl = this.hsl();
      hsl.color[1] += hsl.color[1] * ratio;
      return hsl;
    },
    desaturate: function(ratio) {
      var hsl = this.hsl();
      hsl.color[1] -= hsl.color[1] * ratio;
      return hsl;
    },
    whiten: function(ratio) {
      var hwb = this.hwb();
      hwb.color[1] += hwb.color[1] * ratio;
      return hwb;
    },
    blacken: function(ratio) {
      var hwb = this.hwb();
      hwb.color[2] += hwb.color[2] * ratio;
      return hwb;
    },
    grayscale: function() {
      var rgb = this.rgb().color;
      var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      return Color.rgb(val, val, val);
    },
    fade: function(ratio) {
      return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer: function(ratio) {
      return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate: function(degrees) {
      var hsl = this.hsl();
      var hue = hsl.color[0];
      hue = (hue + degrees) % 360;
      hue = hue < 0 ? 360 + hue : hue;
      hsl.color[0] = hue;
      return hsl;
    },
    mix: function(mixinColor, weight) {
      if (!mixinColor || !mixinColor.rgb) {
        throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
      }
      var color1 = mixinColor.rgb();
      var color2 = this.rgb();
      var p = weight === void 0 ? 0.5 : weight;
      var w2 = 2 * p - 1;
      var a = color1.alpha() - color2.alpha();
      var w1 = ((w2 * a === -1 ? w2 : (w2 + a) / (1 + w2 * a)) + 1) / 2;
      var w22 = 1 - w1;
      return Color.rgb(
        w1 * color1.red() + w22 * color2.red(),
        w1 * color1.green() + w22 * color2.green(),
        w1 * color1.blue() + w22 * color2.blue(),
        color1.alpha() * p + color2.alpha() * (1 - p)
      );
    }
  };
  Object.keys(convert).forEach(function(model) {
    if (skippedModels.indexOf(model) !== -1) {
      return;
    }
    var channels = convert[model].channels;
    Color.prototype[model] = function() {
      if (this.model === model) {
        return new Color(this);
      }
      if (arguments.length) {
        return new Color(arguments, model);
      }
      var newAlpha = typeof arguments[channels] === "number" ? channels : this.valpha;
      return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
    };
    Color[model] = function(color2) {
      if (typeof color2 === "number") {
        color2 = zeroArray(_slice.call(arguments), channels);
      }
      return new Color(color2, model);
    };
  });
  function roundTo(num, places) {
    return Number(num.toFixed(places));
  }
  function roundToPlace(places) {
    return function(num) {
      return roundTo(num, places);
    };
  }
  function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [model];
    model.forEach(function(m2) {
      (limiters[m2] || (limiters[m2] = []))[channel] = modifier;
    });
    model = model[0];
    return function(val) {
      var result;
      if (arguments.length) {
        if (modifier) {
          val = modifier(val);
        }
        result = this[model]();
        result.color[channel] = val;
        return result;
      }
      result = this[model]().color[channel];
      if (modifier) {
        result = modifier(result);
      }
      return result;
    };
  }
  function maxfn(max) {
    return function(v) {
      return Math.max(0, Math.min(max, v));
    };
  }
  function assertArray(val) {
    return Array.isArray(val) ? val : [val];
  }
  function zeroArray(arr, length) {
    for (var i = 0; i < length; i++) {
      if (typeof arr[i] !== "number") {
        arr[i] = 0;
      }
    }
    return arr;
  }
  color = Color;
  return color;
}
var textHex;
var hasRequiredTextHex;
function requireTextHex() {
  if (hasRequiredTextHex)
    return textHex;
  hasRequiredTextHex = 1;
  textHex = function hex(str) {
    for (var i = 0, hash2 = 0; i < str.length; hash2 = str.charCodeAt(i++) + ((hash2 << 5) - hash2))
      ;
    var color2 = Math.floor(
      Math.abs(
        Math.sin(hash2) * 1e4 % 1 * 16777216
      )
    ).toString(16);
    return "#" + Array(6 - color2.length + 1).join("0") + color2;
  };
  return textHex;
}
var colorspace;
var hasRequiredColorspace;
function requireColorspace() {
  if (hasRequiredColorspace)
    return colorspace;
  hasRequiredColorspace = 1;
  var color2 = requireColor(), hex = requireTextHex();
  colorspace = function colorspace2(namespace2, delimiter) {
    var split2 = namespace2.split(delimiter || ":");
    var base = hex(split2[0]);
    if (!split2.length)
      return base;
    for (var i = 0, l = split2.length - 1; i < l; i++) {
      base = color2(base).mix(color2(hex(split2[i + 1]))).saturate(1).hex();
    }
    return base;
  };
  return colorspace;
}
var namespace;
var hasRequiredNamespace;
function requireNamespace() {
  if (hasRequiredNamespace)
    return namespace;
  hasRequiredNamespace = 1;
  var colorspace2 = requireColorspace();
  namespace = function colorNamespace(args, options) {
    var namespace2 = options.namespace;
    if (options.colors === false) {
      args[0] = namespace2 + ": " + args[0];
      return args;
    }
    var color2 = colorspace2(namespace2);
    args[0] = "%c" + namespace2 + ":%c " + args[0];
    args.splice(1, 0, "color:" + color2, "color:inherit");
    return args;
  };
  return namespace;
}
var enabled;
var hasRequiredEnabled;
function requireEnabled() {
  if (hasRequiredEnabled)
    return enabled;
  hasRequiredEnabled = 1;
  enabled = function enabled2(name3, variable) {
    if (!variable)
      return false;
    var variables = variable.split(/[\s,]+/), i = 0;
    for (; i < variables.length; i++) {
      variable = variables[i].replace("*", ".*?");
      if ("-" === variable.charAt(0)) {
        if (new RegExp("^" + variable.substr(1) + "$").test(name3)) {
          return false;
        }
        continue;
      }
      if (new RegExp("^" + variable + "$").test(name3)) {
        return true;
      }
    }
    return false;
  };
  return enabled;
}
var adapters;
var hasRequiredAdapters;
function requireAdapters() {
  if (hasRequiredAdapters)
    return adapters;
  hasRequiredAdapters = 1;
  var enabled2 = requireEnabled();
  adapters = function create2(fn) {
    return function adapter(namespace2) {
      try {
        return enabled2(namespace2, fn());
      } catch (e) {
      }
      return false;
    };
  };
  return adapters;
}
var localstorage;
var hasRequiredLocalstorage;
function requireLocalstorage() {
  if (hasRequiredLocalstorage)
    return localstorage;
  hasRequiredLocalstorage = 1;
  var adapter = requireAdapters();
  localstorage = adapter(function storage() {
    return localStorage.getItem("debug") || localStorage.getItem("diagnostics");
  });
  return localstorage;
}
var hash;
var hasRequiredHash;
function requireHash() {
  if (hasRequiredHash)
    return hash;
  hasRequiredHash = 1;
  var adapter = requireAdapters();
  hash = adapter(function hash2() {
    return /(debug|diagnostics)=([^&]+)/i.exec(window.location.hash)[2];
  });
  return hash;
}
var console_1;
var hasRequiredConsole;
function requireConsole() {
  if (hasRequiredConsole)
    return console_1;
  hasRequiredConsole = 1;
  console_1 = function(meta, messages) {
    try {
      Function.prototype.apply.call(console.log, console, messages);
    } catch (e) {
    }
  };
  return console_1;
}
var development;
var hasRequiredDevelopment;
function requireDevelopment() {
  if (hasRequiredDevelopment)
    return development;
  hasRequiredDevelopment = 1;
  var create2 = requireDiagnostics();
  var diagnostics2 = create2(function dev(namespace2, options) {
    options = options || {};
    options.namespace = namespace2;
    options.prod = false;
    options.dev = true;
    if (!dev.enabled(namespace2) && !(options.force || dev.force)) {
      return dev.nope(options);
    }
    return dev.yep(options);
  });
  diagnostics2.modify(requireNamespace());
  diagnostics2.use(requireLocalstorage());
  diagnostics2.use(requireHash());
  diagnostics2.set(requireConsole());
  development = diagnostics2;
  return development;
}
if (process.env.NODE_ENV === "production") {
  browser.exports = requireProduction();
} else {
  browser.exports = requireDevelopment();
}
var browserExports = browser.exports;
var tailFile;
var hasRequiredTailFile;
function requireTailFile() {
  if (hasRequiredTailFile)
    return tailFile;
  hasRequiredTailFile = 1;
  var fs = require$$0__default$3.default;
  var _require4 = require$$1__default.default, StringDecoder = _require4.StringDecoder;
  var _require22 = readableBrowserExports, Stream2 = _require22.Stream;
  function noop2() {
  }
  tailFile = function(options, iter) {
    var buffer = Buffer.alloc(64 * 1024);
    var decode = new StringDecoder("utf8");
    var stream2 = new Stream2();
    var buff = "";
    var pos = 0;
    var row = 0;
    if (options.start === -1) {
      delete options.start;
    }
    stream2.readable = true;
    stream2.destroy = function() {
      stream2.destroyed = true;
      stream2.emit("end");
      stream2.emit("close");
    };
    fs.open(options.file, "a+", "0644", function(err, fd) {
      if (err) {
        if (!iter) {
          stream2.emit("error", err);
        } else {
          iter(err);
        }
        stream2.destroy();
        return;
      }
      (function read() {
        if (stream2.destroyed) {
          fs.close(fd, noop2);
          return;
        }
        return fs.read(fd, buffer, 0, buffer.length, pos, function(error, bytes) {
          if (error) {
            if (!iter) {
              stream2.emit("error", error);
            } else {
              iter(error);
            }
            stream2.destroy();
            return;
          }
          if (!bytes) {
            if (buff) {
              if (options.start == null || row > options.start) {
                if (!iter) {
                  stream2.emit("line", buff);
                } else {
                  iter(null, buff);
                }
              }
              row++;
              buff = "";
            }
            return setTimeout(read, 1e3);
          }
          var data = decode.write(buffer.slice(0, bytes));
          if (!iter) {
            stream2.emit("data", data);
          }
          data = (buff + data).split(/\n+/);
          var l = data.length - 1;
          var i = 0;
          for (; i < l; i++) {
            if (options.start == null || row > options.start) {
              if (!iter) {
                stream2.emit("line", data[i]);
              } else {
                iter(null, data[i]);
              }
            }
            row++;
          }
          buff = data[l];
          pos += bytes;
          return read();
        });
      })();
    });
    if (!iter) {
      return stream2;
    }
    return stream2.destroy;
  };
  return tailFile;
}
var file;
var hasRequiredFile;
function requireFile() {
  if (hasRequiredFile)
    return file;
  hasRequiredFile = 1;
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof2(obj);
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey2(arg) {
    var key = _toPrimitive2(arg, "string");
    return _typeof2(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive2(input, hint) {
    if (_typeof2(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint);
      if (_typeof2(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(input);
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call2) {
    if (call2 && (_typeof2(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var fs = require$$0__default$3.default;
  var path = require$$1__default$1.default;
  var asyncSeries = requireSeries();
  var zlib = require$$3__default.default;
  var _require4 = tripleBeam, MESSAGE2 = _require4.MESSAGE;
  var _require22 = readableBrowserExports, Stream2 = _require22.Stream, PassThrough2 = _require22.PassThrough;
  var TransportStream4 = distExports;
  var debug2 = browserExports("winston:file");
  var os2 = require$$0__default.default;
  var tailFile2 = requireTailFile();
  file = /* @__PURE__ */ function(_TransportStream) {
    _inherits2(File, _TransportStream);
    var _super = _createSuper2(File);
    function File() {
      var _this2;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck2(this, File);
      _this2 = _super.call(this, options);
      _this2.name = options.name || "file";
      function throwIf(target) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        args.slice(1).forEach(function(name3) {
          if (options[name3]) {
            throw new Error("Cannot set ".concat(name3, " and ").concat(target, " together"));
          }
        });
      }
      _this2._stream = new PassThrough2();
      _this2._stream.setMaxListeners(30);
      _this2._onError = _this2._onError.bind(_assertThisInitialized2(_this2));
      if (options.filename || options.dirname) {
        throwIf("filename or dirname", "stream");
        _this2._basename = _this2.filename = options.filename ? path.basename(options.filename) : "winston.log";
        _this2.dirname = options.dirname || path.dirname(options.filename);
        _this2.options = options.options || {
          flags: "a"
        };
      } else if (options.stream) {
        console.warn("options.stream will be removed in winston@4. Use winston.transports.Stream");
        throwIf("stream", "filename", "maxsize");
        _this2._dest = _this2._stream.pipe(_this2._setupStream(options.stream));
        _this2.dirname = path.dirname(_this2._dest.path);
      } else {
        throw new Error("Cannot log to file without filename or stream.");
      }
      _this2.maxsize = options.maxsize || null;
      _this2.rotationFormat = options.rotationFormat || false;
      _this2.zippedArchive = options.zippedArchive || false;
      _this2.maxFiles = options.maxFiles || null;
      _this2.eol = typeof options.eol === "string" ? options.eol : os2.EOL;
      _this2.tailable = options.tailable || false;
      _this2.lazy = options.lazy || false;
      _this2._size = 0;
      _this2._pendingSize = 0;
      _this2._created = 0;
      _this2._drain = false;
      _this2._opening = false;
      _this2._ending = false;
      _this2._fileExist = false;
      if (_this2.dirname)
        _this2._createLogDirIfNotExist(_this2.dirname);
      if (!_this2.lazy)
        _this2.open();
      return _this2;
    }
    _createClass2(File, [{
      key: "finishIfEnding",
      value: function finishIfEnding() {
        var _this2 = this;
        if (this._ending) {
          if (this._opening) {
            this.once("open", function() {
              _this2._stream.once("finish", function() {
                return _this2.emit("finish");
              });
              setImmediate(function() {
                return _this2._stream.end();
              });
            });
          } else {
            this._stream.once("finish", function() {
              return _this2.emit("finish");
            });
            setImmediate(function() {
              return _this2._stream.end();
            });
          }
        }
      }
      /**
       * Core logging method exposed to Winston. Metadata is optional.
       * @param {Object} info - TODO: add param description.
       * @param {Function} callback - TODO: add param description.
       * @returns {undefined}
       */
    }, {
      key: "log",
      value: function log(info) {
        var _this3 = this;
        var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
        };
        if (this.silent) {
          callback();
          return true;
        }
        if (this._drain) {
          this._stream.once("drain", function() {
            _this3._drain = false;
            _this3.log(info, callback);
          });
          return;
        }
        if (this._rotate) {
          this._stream.once("rotate", function() {
            _this3._rotate = false;
            _this3.log(info, callback);
          });
          return;
        }
        if (this.lazy) {
          if (!this._fileExist) {
            if (!this._opening) {
              this.open();
            }
            this.once("open", function() {
              _this3._fileExist = true;
              _this3.log(info, callback);
              return;
            });
            return;
          }
          if (this._needsNewFile(this._pendingSize)) {
            this._dest.once("close", function() {
              if (!_this3._opening) {
                _this3.open();
              }
              _this3.once("open", function() {
                _this3.log(info, callback);
                return;
              });
              return;
            });
            return;
          }
        }
        var output = "".concat(info[MESSAGE2]).concat(this.eol);
        var bytes = Buffer.byteLength(output);
        function logged() {
          var _this4 = this;
          this._size += bytes;
          this._pendingSize -= bytes;
          debug2("logged %s %s", this._size, output);
          this.emit("logged", info);
          if (this._rotate) {
            return;
          }
          if (this._opening) {
            return;
          }
          if (!this._needsNewFile()) {
            return;
          }
          if (this.lazy) {
            this._endStream(function() {
              _this4.emit("fileclosed");
            });
            return;
          }
          this._rotate = true;
          this._endStream(function() {
            return _this4._rotateFile();
          });
        }
        this._pendingSize += bytes;
        if (this._opening && !this.rotatedWhileOpening && this._needsNewFile(this._size + this._pendingSize)) {
          this.rotatedWhileOpening = true;
        }
        var written = this._stream.write(output, logged.bind(this));
        if (!written) {
          this._drain = true;
          this._stream.once("drain", function() {
            _this3._drain = false;
            callback();
          });
        } else {
          callback();
        }
        debug2("written", written, this._drain);
        this.finishIfEnding();
        return written;
      }
      /**
       * Query the transport. Options object is optional.
       * @param {Object} options - Loggly-like query options for this instance.
       * @param {function} callback - Continuation to respond to when complete.
       * TODO: Refactor me.
       */
    }, {
      key: "query",
      value: function query(options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        options = normalizeQuery(options);
        var file2 = path.join(this.dirname, this.filename);
        var buff = "";
        var results = [];
        var row = 0;
        var stream2 = fs.createReadStream(file2, {
          encoding: "utf8"
        });
        stream2.on("error", function(err) {
          if (stream2.readable) {
            stream2.destroy();
          }
          if (!callback) {
            return;
          }
          return err.code !== "ENOENT" ? callback(err) : callback(null, results);
        });
        stream2.on("data", function(data) {
          data = (buff + data).split(/\n+/);
          var l = data.length - 1;
          var i = 0;
          for (; i < l; i++) {
            if (!options.start || row >= options.start) {
              add(data[i]);
            }
            row++;
          }
          buff = data[l];
        });
        stream2.on("close", function() {
          if (buff) {
            add(buff, true);
          }
          if (options.order === "desc") {
            results = results.reverse();
          }
          if (callback)
            callback(null, results);
        });
        function add(buff2, attempt) {
          try {
            var log = JSON.parse(buff2);
            if (check(log)) {
              push(log);
            }
          } catch (e) {
            if (!attempt) {
              stream2.emit("error", e);
            }
          }
        }
        function push(log) {
          if (options.rows && results.length >= options.rows && options.order !== "desc") {
            if (stream2.readable) {
              stream2.destroy();
            }
            return;
          }
          if (options.fields) {
            log = options.fields.reduce(function(obj, key) {
              obj[key] = log[key];
              return obj;
            }, {});
          }
          if (options.order === "desc") {
            if (results.length >= options.rows) {
              results.shift();
            }
          }
          results.push(log);
        }
        function check(log) {
          if (!log) {
            return;
          }
          if (_typeof2(log) !== "object") {
            return;
          }
          var time = new Date(log.timestamp);
          if (options.from && time < options.from || options.until && time > options.until || options.level && options.level !== log.level) {
            return;
          }
          return true;
        }
        function normalizeQuery(options2) {
          options2 = options2 || {};
          options2.rows = options2.rows || options2.limit || 10;
          options2.start = options2.start || 0;
          options2.until = options2.until || /* @__PURE__ */ new Date();
          if (_typeof2(options2.until) !== "object") {
            options2.until = new Date(options2.until);
          }
          options2.from = options2.from || options2.until - 24 * 60 * 60 * 1e3;
          if (_typeof2(options2.from) !== "object") {
            options2.from = new Date(options2.from);
          }
          options2.order = options2.order || "desc";
          return options2;
        }
      }
      /**
       * Returns a log stream for this transport. Options object is optional.
       * @param {Object} options - Stream options for this instance.
       * @returns {Stream} - TODO: add return description.
       * TODO: Refactor me.
       */
    }, {
      key: "stream",
      value: function stream2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var file2 = path.join(this.dirname, this.filename);
        var stream3 = new Stream2();
        var tail = {
          file: file2,
          start: options.start
        };
        stream3.destroy = tailFile2(tail, function(err, line) {
          if (err) {
            return stream3.emit("error", err);
          }
          try {
            stream3.emit("data", line);
            line = JSON.parse(line);
            stream3.emit("log", line);
          } catch (e) {
            stream3.emit("error", e);
          }
        });
        return stream3;
      }
      /**
       * Checks to see the filesize of.
       * @returns {undefined}
       */
    }, {
      key: "open",
      value: function open() {
        var _this5 = this;
        if (!this.filename)
          return;
        if (this._opening)
          return;
        this._opening = true;
        this.stat(function(err, size) {
          if (err) {
            return _this5.emit("error", err);
          }
          debug2("stat done: %s { size: %s }", _this5.filename, size);
          _this5._size = size;
          _this5._dest = _this5._createStream(_this5._stream);
          _this5._opening = false;
          _this5.once("open", function() {
            if (_this5._stream.eventNames().includes("rotate")) {
              _this5._stream.emit("rotate");
            } else {
              _this5._rotate = false;
            }
          });
        });
      }
      /**
       * Stat the file and assess information in order to create the proper stream.
       * @param {function} callback - TODO: add param description.
       * @returns {undefined}
       */
    }, {
      key: "stat",
      value: function stat(callback) {
        var _this6 = this;
        var target = this._getFile();
        var fullpath = path.join(this.dirname, target);
        fs.stat(fullpath, function(err, stat2) {
          if (err && err.code === "ENOENT") {
            debug2("ENOENT ok", fullpath);
            _this6.filename = target;
            return callback(null, 0);
          }
          if (err) {
            debug2("err ".concat(err.code, " ").concat(fullpath));
            return callback(err);
          }
          if (!stat2 || _this6._needsNewFile(stat2.size)) {
            return _this6._incFile(function() {
              return _this6.stat(callback);
            });
          }
          _this6.filename = target;
          callback(null, stat2.size);
        });
      }
      /**
       * Closes the stream associated with this instance.
       * @param {function} cb - TODO: add param description.
       * @returns {undefined}
       */
    }, {
      key: "close",
      value: function close3(cb) {
        var _this7 = this;
        if (!this._stream) {
          return;
        }
        this._stream.end(function() {
          if (cb) {
            cb();
          }
          _this7.emit("flush");
          _this7.emit("closed");
        });
      }
      /**
       * TODO: add method description.
       * @param {number} size - TODO: add param description.
       * @returns {undefined}
       */
    }, {
      key: "_needsNewFile",
      value: function _needsNewFile(size) {
        size = size || this._size;
        return this.maxsize && size >= this.maxsize;
      }
      /**
       * TODO: add method description.
       * @param {Error} err - TODO: add param description.
       * @returns {undefined}
       */
    }, {
      key: "_onError",
      value: function _onError(err) {
        this.emit("error", err);
      }
      /**
       * TODO: add method description.
       * @param {Stream} stream - TODO: add param description.
       * @returns {mixed} - TODO: add return description.
       */
    }, {
      key: "_setupStream",
      value: function _setupStream(stream2) {
        stream2.on("error", this._onError);
        return stream2;
      }
      /**
       * TODO: add method description.
       * @param {Stream} stream - TODO: add param description.
       * @returns {mixed} - TODO: add return description.
       */
    }, {
      key: "_cleanupStream",
      value: function _cleanupStream(stream2) {
        stream2.removeListener("error", this._onError);
        stream2.destroy();
        return stream2;
      }
      /**
       * TODO: add method description.
       */
    }, {
      key: "_rotateFile",
      value: function _rotateFile() {
        var _this8 = this;
        this._incFile(function() {
          return _this8.open();
        });
      }
      /**
       * Unpipe from the stream that has been marked as full and end it so it
       * flushes to disk.
       *
       * @param {function} callback - Callback for when the current file has closed.
       * @private
       */
    }, {
      key: "_endStream",
      value: function _endStream() {
        var _this9 = this;
        var callback = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
        };
        if (this._dest) {
          this._stream.unpipe(this._dest);
          this._dest.end(function() {
            _this9._cleanupStream(_this9._dest);
            callback();
          });
        } else {
          callback();
        }
      }
      /**
       * Returns the WritableStream for the active file on this instance. If we
       * should gzip the file then a zlib stream is returned.
       *
       * @param {ReadableStream} source –PassThrough to pipe to the file when open.
       * @returns {WritableStream} Stream that writes to disk for the active file.
       */
    }, {
      key: "_createStream",
      value: function _createStream(source) {
        var _this10 = this;
        var fullpath = path.join(this.dirname, this.filename);
        debug2("create stream start", fullpath, this.options);
        var dest = fs.createWriteStream(fullpath, this.options).on("error", function(err) {
          return debug2(err);
        }).on("close", function() {
          return debug2("close", dest.path, dest.bytesWritten);
        }).on("open", function() {
          debug2("file open ok", fullpath);
          _this10.emit("open", fullpath);
          source.pipe(dest);
          if (_this10.rotatedWhileOpening) {
            _this10._stream = new PassThrough2();
            _this10._stream.setMaxListeners(30);
            _this10._rotateFile();
            _this10.rotatedWhileOpening = false;
            _this10._cleanupStream(dest);
            source.end();
          }
        });
        debug2("create stream ok", fullpath);
        if (this.zippedArchive) {
          var gzip = zlib.createGzip();
          gzip.pipe(dest);
          return gzip;
        }
        return dest;
      }
      /**
       * TODO: add method description.
       * @param {function} callback - TODO: add param description.
       * @returns {undefined}
       */
    }, {
      key: "_incFile",
      value: function _incFile(callback) {
        debug2("_incFile", this.filename);
        var ext = path.extname(this._basename);
        var basename = path.basename(this._basename, ext);
        if (!this.tailable) {
          this._created += 1;
          this._checkMaxFilesIncrementing(ext, basename, callback);
        } else {
          this._checkMaxFilesTailable(ext, basename, callback);
        }
      }
      /**
       * Gets the next filename to use for this instance in the case that log
       * filesizes are being capped.
       * @returns {string} - TODO: add return description.
       * @private
       */
    }, {
      key: "_getFile",
      value: function _getFile() {
        var ext = path.extname(this._basename);
        var basename = path.basename(this._basename, ext);
        var isRotation = this.rotationFormat ? this.rotationFormat() : this._created;
        var target = !this.tailable && this._created ? "".concat(basename).concat(isRotation).concat(ext) : "".concat(basename).concat(ext);
        return this.zippedArchive && !this.tailable ? "".concat(target, ".gz") : target;
      }
      /**
       * Increment the number of files created or checked by this instance.
       * @param {mixed} ext - TODO: add param description.
       * @param {mixed} basename - TODO: add param description.
       * @param {mixed} callback - TODO: add param description.
       * @returns {undefined}
       * @private
       */
    }, {
      key: "_checkMaxFilesIncrementing",
      value: function _checkMaxFilesIncrementing(ext, basename, callback) {
        if (!this.maxFiles || this._created < this.maxFiles) {
          return setImmediate(callback);
        }
        var oldest = this._created - this.maxFiles;
        var isOldest = oldest !== 0 ? oldest : "";
        var isZipped = this.zippedArchive ? ".gz" : "";
        var filePath = "".concat(basename).concat(isOldest).concat(ext).concat(isZipped);
        var target = path.join(this.dirname, filePath);
        fs.unlink(target, callback);
      }
      /**
       * Roll files forward based on integer, up to maxFiles. e.g. if base if
       * file.log and it becomes oversized, roll to file1.log, and allow file.log
       * to be re-used. If file is oversized again, roll file1.log to file2.log,
       * roll file.log to file1.log, and so on.
       * @param {mixed} ext - TODO: add param description.
       * @param {mixed} basename - TODO: add param description.
       * @param {mixed} callback - TODO: add param description.
       * @returns {undefined}
       * @private
       */
    }, {
      key: "_checkMaxFilesTailable",
      value: function _checkMaxFilesTailable(ext, basename, callback) {
        var _this12 = this;
        var tasks = [];
        if (!this.maxFiles) {
          return;
        }
        var isZipped = this.zippedArchive ? ".gz" : "";
        for (var x = this.maxFiles - 1; x > 1; x--) {
          tasks.push(function(i, cb) {
            var _this11 = this;
            var fileName = "".concat(basename).concat(i - 1).concat(ext).concat(isZipped);
            var tmppath = path.join(this.dirname, fileName);
            fs.exists(tmppath, function(exists) {
              if (!exists) {
                return cb(null);
              }
              fileName = "".concat(basename).concat(i).concat(ext).concat(isZipped);
              fs.rename(tmppath, path.join(_this11.dirname, fileName), cb);
            });
          }.bind(this, x));
        }
        asyncSeries(tasks, function() {
          fs.rename(path.join(_this12.dirname, "".concat(basename).concat(ext)), path.join(_this12.dirname, "".concat(basename, "1").concat(ext).concat(isZipped)), callback);
        });
      }
    }, {
      key: "_createLogDirIfNotExist",
      value: function _createLogDirIfNotExist(dirPath) {
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, {
            recursive: true
          });
        }
      }
    }]);
    return File;
  }(TransportStream4);
  return file;
}
var http_1;
var hasRequiredHttp;
function requireHttp() {
  if (hasRequiredHttp)
    return http_1;
  hasRequiredHttp = 1;
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof2(obj);
  }
  function ownKeys(object2, enumerableOnly) {
    var keys2 = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty2(obj, key, value) {
    key = _toPropertyKey2(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey2(arg) {
    var key = _toPrimitive2(arg, "string");
    return _typeof2(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive2(input, hint) {
    if (_typeof2(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (_typeof2(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call2) {
    if (call2 && (_typeof2(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var http = require$$0__default$4.default;
  var https = require$$1__default$2.default;
  var _require4 = readableBrowserExports, Stream2 = _require4.Stream;
  var TransportStream4 = distExports;
  var jsonStringify2 = safeStableStringifyExports;
  http_1 = /* @__PURE__ */ function(_TransportStream) {
    _inherits2(Http, _TransportStream);
    var _super = _createSuper2(Http);
    function Http() {
      var _this2;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck2(this, Http);
      _this2 = _super.call(this, options);
      _this2.options = options;
      _this2.name = options.name || "http";
      _this2.ssl = !!options.ssl;
      _this2.host = options.host || "localhost";
      _this2.port = options.port;
      _this2.auth = options.auth;
      _this2.path = options.path || "";
      _this2.agent = options.agent;
      _this2.headers = options.headers || {};
      _this2.headers["content-type"] = "application/json";
      _this2.batch = options.batch || false;
      _this2.batchInterval = options.batchInterval || 5e3;
      _this2.batchCount = options.batchCount || 10;
      _this2.batchOptions = [];
      _this2.batchTimeoutID = -1;
      _this2.batchCallback = {};
      if (!_this2.port) {
        _this2.port = _this2.ssl ? 443 : 80;
      }
      return _this2;
    }
    _createClass2(Http, [{
      key: "log",
      value: function log(info, callback) {
        var _this2 = this;
        this._request(info, null, null, function(err, res) {
          if (res && res.statusCode !== 200) {
            err = new Error("Invalid HTTP Status Code: ".concat(res.statusCode));
          }
          if (err) {
            _this2.emit("warn", err);
          } else {
            _this2.emit("logged", info);
          }
        });
        if (callback) {
          setImmediate(callback);
        }
      }
      /**
       * Query the transport. Options object is optional.
       * @param {Object} options -  Loggly-like query options for this instance.
       * @param {function} callback - Continuation to respond to when complete.
       * @returns {undefined}
       */
    }, {
      key: "query",
      value: function query(options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        options = {
          method: "query",
          params: this.normalizeQuery(options)
        };
        var auth = options.params.auth || null;
        delete options.params.auth;
        var path = options.params.path || null;
        delete options.params.path;
        this._request(options, auth, path, function(err, res, body) {
          if (res && res.statusCode !== 200) {
            err = new Error("Invalid HTTP Status Code: ".concat(res.statusCode));
          }
          if (err) {
            return callback(err);
          }
          if (typeof body === "string") {
            try {
              body = JSON.parse(body);
            } catch (e) {
              return callback(e);
            }
          }
          callback(null, body);
        });
      }
      /**
       * Returns a log stream for this transport. Options object is optional.
       * @param {Object} options - Stream options for this instance.
       * @returns {Stream} - TODO: add return description
       */
    }, {
      key: "stream",
      value: function stream2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var stream3 = new Stream2();
        options = {
          method: "stream",
          params: options
        };
        var path = options.params.path || null;
        delete options.params.path;
        var auth = options.params.auth || null;
        delete options.params.auth;
        var buff = "";
        var req = this._request(options, auth, path);
        stream3.destroy = function() {
          return req.destroy();
        };
        req.on("data", function(data) {
          data = (buff + data).split(/\n+/);
          var l = data.length - 1;
          var i = 0;
          for (; i < l; i++) {
            try {
              stream3.emit("log", JSON.parse(data[i]));
            } catch (e) {
              stream3.emit("error", e);
            }
          }
          buff = data[l];
        });
        req.on("error", function(err) {
          return stream3.emit("error", err);
        });
        return stream3;
      }
      /**
       * Make a request to a winstond server or any http server which can
       * handle json-rpc.
       * @param {function} options - Options to sent the request.
       * @param {Object?} auth - authentication options
       * @param {string} path - request path
       * @param {function} callback - Continuation to respond to when complete.
       */
    }, {
      key: "_request",
      value: function _request(options, auth, path, callback) {
        options = options || {};
        auth = auth || this.auth;
        path = path || this.path || "";
        if (this.batch) {
          this._doBatch(options, callback, auth, path);
        } else {
          this._doRequest(options, callback, auth, path);
        }
      }
      /**
       * Send or memorize the options according to batch configuration
       * @param {function} options - Options to sent the request.
       * @param {function} callback - Continuation to respond to when complete.
       * @param {Object?} auth - authentication options
       * @param {string} path - request path
       */
    }, {
      key: "_doBatch",
      value: function _doBatch(options, callback, auth, path) {
        this.batchOptions.push(options);
        if (this.batchOptions.length === 1) {
          var me = this;
          this.batchCallback = callback;
          this.batchTimeoutID = setTimeout(function() {
            me.batchTimeoutID = -1;
            me._doBatchRequest(me.batchCallback, auth, path);
          }, this.batchInterval);
        }
        if (this.batchOptions.length === this.batchCount) {
          this._doBatchRequest(this.batchCallback, auth, path);
        }
      }
      /**
       * Initiate a request with the memorized batch options, stop the batch timeout
       * @param {function} callback - Continuation to respond to when complete.
       * @param {Object?} auth - authentication options
       * @param {string} path - request path
       */
    }, {
      key: "_doBatchRequest",
      value: function _doBatchRequest(callback, auth, path) {
        if (this.batchTimeoutID > 0) {
          clearTimeout(this.batchTimeoutID);
          this.batchTimeoutID = -1;
        }
        var batchOptionsCopy = this.batchOptions.slice();
        this.batchOptions = [];
        this._doRequest(batchOptionsCopy, callback, auth, path);
      }
      /**
       * Make a request to a winstond server or any http server which can
       * handle json-rpc.
       * @param {function} options - Options to sent the request.
       * @param {function} callback - Continuation to respond to when complete.
       * @param {Object?} auth - authentication options
       * @param {string} path - request path
       */
    }, {
      key: "_doRequest",
      value: function _doRequest(options, callback, auth, path) {
        var headers = Object.assign({}, this.headers);
        if (auth && auth.bearer) {
          headers.Authorization = "Bearer ".concat(auth.bearer);
        }
        var req = (this.ssl ? https : http).request(_objectSpread(_objectSpread({}, this.options), {}, {
          method: "POST",
          host: this.host,
          port: this.port,
          path: "/".concat(path.replace(/^\//, "")),
          headers,
          auth: auth && auth.username && auth.password ? "".concat(auth.username, ":").concat(auth.password) : "",
          agent: this.agent
        }));
        req.on("error", callback);
        req.on("response", function(res) {
          return res.on("end", function() {
            return callback(null, res);
          }).resume();
        });
        req.end(Buffer.from(jsonStringify2(options, this.options.replacer), "utf8"));
      }
    }]);
    return Http;
  }(TransportStream4);
  return http_1;
}
const isStream$1 = (stream2) => stream2 !== null && typeof stream2 === "object" && typeof stream2.pipe === "function";
isStream$1.writable = (stream2) => isStream$1(stream2) && stream2.writable !== false && typeof stream2._write === "function" && typeof stream2._writableState === "object";
isStream$1.readable = (stream2) => isStream$1(stream2) && stream2.readable !== false && typeof stream2._read === "function" && typeof stream2._readableState === "object";
isStream$1.duplex = (stream2) => isStream$1.writable(stream2) && isStream$1.readable(stream2);
isStream$1.transform = (stream2) => isStream$1.duplex(stream2) && typeof stream2._transform === "function";
var isStream_1 = isStream$1;
var stream;
var hasRequiredStream;
function requireStream() {
  if (hasRequiredStream)
    return stream;
  hasRequiredStream = 1;
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof2(obj);
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey2(arg) {
    var key = _toPrimitive2(arg, "string");
    return _typeof2(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive2(input, hint) {
    if (_typeof2(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint);
      if (_typeof2(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(input);
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass)
      _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call2) {
    if (call2 && (_typeof2(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  var isStream2 = isStream_1;
  var _require4 = tripleBeam, MESSAGE2 = _require4.MESSAGE;
  var os2 = require$$0__default.default;
  var TransportStream4 = distExports;
  stream = /* @__PURE__ */ function(_TransportStream) {
    _inherits2(Stream2, _TransportStream);
    var _super = _createSuper2(Stream2);
    function Stream2() {
      var _this2;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck2(this, Stream2);
      _this2 = _super.call(this, options);
      if (!options.stream || !isStream2(options.stream)) {
        throw new Error("options.stream is required.");
      }
      _this2._stream = options.stream;
      _this2._stream.setMaxListeners(Infinity);
      _this2.isObjectMode = options.stream._writableState.objectMode;
      _this2.eol = typeof options.eol === "string" ? options.eol : os2.EOL;
      return _this2;
    }
    _createClass2(Stream2, [{
      key: "log",
      value: function log(info, callback) {
        var _this2 = this;
        setImmediate(function() {
          return _this2.emit("logged", info);
        });
        if (this.isObjectMode) {
          this._stream.write(info);
          if (callback) {
            callback();
          }
          return;
        }
        this._stream.write("".concat(info[MESSAGE2]).concat(this.eol));
        if (callback) {
          callback();
        }
        return;
      }
    }]);
    return Stream2;
  }(TransportStream4);
  return stream;
}
(function(exports2) {
  Object.defineProperty(exports2, "Console", {
    configurable: true,
    enumerable: true,
    get: function get3() {
      return requireConsole$1();
    }
  });
  Object.defineProperty(exports2, "File", {
    configurable: true,
    enumerable: true,
    get: function get3() {
      return requireFile();
    }
  });
  Object.defineProperty(exports2, "Http", {
    configurable: true,
    enumerable: true,
    get: function get3() {
      return requireHttp();
    }
  });
  Object.defineProperty(exports2, "Stream", {
    configurable: true,
    enumerable: true,
    get: function get3() {
      return requireStream();
    }
  });
})(transports);
var config$2 = {};
var logform = browser$3;
var _require$3 = tripleBeam, configs = _require$3.configs;
config$2.cli = logform.levels(configs.cli);
config$2.npm = logform.levels(configs.npm);
config$2.syslog = logform.levels(configs.syslog);
config$2.addColors = logform.levels;
var forEach$1 = { exports: {} };
var eachOf = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  var _isArrayLike = isArrayLikeExports;
  var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
  var _breakLoop = breakLoopExports;
  var _breakLoop2 = _interopRequireDefault(_breakLoop);
  var _eachOfLimit = eachOfLimitExports;
  var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);
  var _once = onceExports;
  var _once2 = _interopRequireDefault(_once);
  var _onlyOnce = onlyOnceExports;
  var _onlyOnce2 = _interopRequireDefault(_onlyOnce);
  var _wrapAsync = requireWrapAsync();
  var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
  var _awaitify = awaitifyExports;
  var _awaitify2 = _interopRequireDefault(_awaitify);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function eachOfArrayLike(coll, iteratee, callback) {
    callback = (0, _once2.default)(callback);
    var index2 = 0, completed = 0, { length } = coll, canceled = false;
    if (length === 0) {
      callback(null);
    }
    function iteratorCallback(err, value) {
      if (err === false) {
        canceled = true;
      }
      if (canceled === true)
        return;
      if (err) {
        callback(err);
      } else if (++completed === length || value === _breakLoop2.default) {
        callback(null);
      }
    }
    for (; index2 < length; index2++) {
      iteratee(coll[index2], index2, (0, _onlyOnce2.default)(iteratorCallback));
    }
  }
  function eachOfGeneric(coll, iteratee, callback) {
    return (0, _eachOfLimit2.default)(coll, Infinity, iteratee, callback);
  }
  function eachOf2(coll, iteratee, callback) {
    var eachOfImplementation = (0, _isArrayLike2.default)(coll) ? eachOfArrayLike : eachOfGeneric;
    return eachOfImplementation(coll, (0, _wrapAsync2.default)(iteratee), callback);
  }
  exports2.default = (0, _awaitify2.default)(eachOf2, 3);
  module2.exports = exports2.default;
})(eachOf, eachOf.exports);
var eachOfExports = eachOf.exports;
var withoutIndex = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = _withoutIndex;
  function _withoutIndex(iteratee) {
    return (value, index2, callback) => iteratee(value, callback);
  }
  module2.exports = exports2.default;
})(withoutIndex, withoutIndex.exports);
var withoutIndexExports = withoutIndex.exports;
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  var _eachOf = eachOfExports;
  var _eachOf2 = _interopRequireDefault(_eachOf);
  var _withoutIndex = withoutIndexExports;
  var _withoutIndex2 = _interopRequireDefault(_withoutIndex);
  var _wrapAsync = requireWrapAsync();
  var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
  var _awaitify = awaitifyExports;
  var _awaitify2 = _interopRequireDefault(_awaitify);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function eachLimit(coll, iteratee, callback) {
    return (0, _eachOf2.default)(coll, (0, _withoutIndex2.default)((0, _wrapAsync2.default)(iteratee)), callback);
  }
  exports2.default = (0, _awaitify2.default)(eachLimit, 3);
  module2.exports = exports2.default;
})(forEach$1, forEach$1.exports);
var forEachExports = forEach$1.exports;
var toString$3 = Object.prototype.toString;
var fn_name = function name(fn) {
  if ("string" === typeof fn.displayName && fn.constructor.name) {
    return fn.displayName;
  } else if ("string" === typeof fn.name && fn.name) {
    return fn.name;
  }
  if ("object" === typeof fn && fn.constructor && "string" === typeof fn.constructor.name)
    return fn.constructor.name;
  var named = fn.toString(), type = toString$3.call(fn).slice(8, -1);
  if ("Function" === type) {
    named = named.substring(named.indexOf("(") + 1, named.indexOf(")"));
  } else {
    named = type;
  }
  return named || "anonymous";
};
var name2 = fn_name;
var oneTime = function one(fn) {
  var called = 0, value;
  function onetime() {
    if (called)
      return value;
    called = 1;
    value = fn.apply(this, arguments);
    fn = null;
    return value;
  }
  onetime.displayName = name2(fn);
  return onetime;
};
var stackTrace$2 = {};
(function(exports2) {
  exports2.get = function(belowFn) {
    var oldLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = Infinity;
    var dummyObject = {};
    var v8Handler = Error.prepareStackTrace;
    Error.prepareStackTrace = function(dummyObject2, v8StackTrace2) {
      return v8StackTrace2;
    };
    Error.captureStackTrace(dummyObject, belowFn || exports2.get);
    var v8StackTrace = dummyObject.stack;
    Error.prepareStackTrace = v8Handler;
    Error.stackTraceLimit = oldLimit;
    return v8StackTrace;
  };
  exports2.parse = function(err) {
    if (!err.stack) {
      return [];
    }
    var self2 = this;
    var lines = err.stack.split("\n").slice(1);
    return lines.map(function(line) {
      if (line.match(/^\s*[-]{4,}$/)) {
        return self2._createParsedCallSite({
          fileName: line,
          lineNumber: null,
          functionName: null,
          typeName: null,
          methodName: null,
          columnNumber: null,
          "native": null
        });
      }
      var lineMatch = line.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
      if (!lineMatch) {
        return;
      }
      var object2 = null;
      var method = null;
      var functionName = null;
      var typeName = null;
      var methodName = null;
      var isNative = lineMatch[5] === "native";
      if (lineMatch[1]) {
        functionName = lineMatch[1];
        var methodStart = functionName.lastIndexOf(".");
        if (functionName[methodStart - 1] == ".")
          methodStart--;
        if (methodStart > 0) {
          object2 = functionName.substr(0, methodStart);
          method = functionName.substr(methodStart + 1);
          var objectEnd = object2.indexOf(".Module");
          if (objectEnd > 0) {
            functionName = functionName.substr(objectEnd + 1);
            object2 = object2.substr(0, objectEnd);
          }
        }
        typeName = null;
      }
      if (method) {
        typeName = object2;
        methodName = method;
      }
      if (method === "<anonymous>") {
        methodName = null;
        functionName = null;
      }
      var properties = {
        fileName: lineMatch[2] || null,
        lineNumber: parseInt(lineMatch[3], 10) || null,
        functionName,
        typeName,
        methodName,
        columnNumber: parseInt(lineMatch[4], 10) || null,
        "native": isNative
      };
      return self2._createParsedCallSite(properties);
    }).filter(function(callSite) {
      return !!callSite;
    });
  };
  function CallSite(properties) {
    for (var property2 in properties) {
      this[property2] = properties[property2];
    }
  }
  var strProperties = [
    "this",
    "typeName",
    "functionName",
    "methodName",
    "fileName",
    "lineNumber",
    "columnNumber",
    "function",
    "evalOrigin"
  ];
  var boolProperties = [
    "topLevel",
    "eval",
    "native",
    "constructor"
  ];
  strProperties.forEach(function(property2) {
    CallSite.prototype[property2] = null;
    CallSite.prototype["get" + property2[0].toUpperCase() + property2.substr(1)] = function() {
      return this[property2];
    };
  });
  boolProperties.forEach(function(property2) {
    CallSite.prototype[property2] = false;
    CallSite.prototype["is" + property2[0].toUpperCase() + property2.substr(1)] = function() {
      return this[property2];
    };
  });
  exports2._createParsedCallSite = function(properties) {
    return new CallSite(properties);
  };
})(stackTrace$2);
function _typeof$6(obj) {
  "@babel/helpers - typeof";
  return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$6(obj);
}
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$5(descriptor.key), descriptor);
  }
}
function _createClass$6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$5(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$5(arg) {
  var key = _toPrimitive$5(arg, "string");
  return _typeof$6(key) === "symbol" ? key : String(key);
}
function _toPrimitive$5(input, hint) {
  if (_typeof$6(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (_typeof$6(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(input);
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$2(o, p);
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$2(this, result);
  };
}
function _possibleConstructorReturn$2(self2, call2) {
  if (call2 && (_typeof$6(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2(self2);
}
function _assertThisInitialized$2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$2(o);
}
var _require$2 = readableBrowserExports, Writable$1 = _require$2.Writable;
var exceptionStream = /* @__PURE__ */ function(_Writable) {
  _inherits$2(ExceptionStream2, _Writable);
  var _super = _createSuper$2(ExceptionStream2);
  function ExceptionStream2(transport) {
    var _this2;
    _classCallCheck$6(this, ExceptionStream2);
    _this2 = _super.call(this, {
      objectMode: true
    });
    if (!transport) {
      throw new Error("ExceptionStream requires a TransportStream instance.");
    }
    _this2.handleExceptions = true;
    _this2.transport = transport;
    return _this2;
  }
  _createClass$6(ExceptionStream2, [{
    key: "_write",
    value: function _write5(info, enc, callback) {
      if (info.exception) {
        return this.transport.log(info, callback);
      }
      callback();
      return true;
    }
  }]);
  return ExceptionStream2;
}(Writable$1);
function _typeof$5(obj) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$5(obj);
}
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$4(descriptor.key), descriptor);
  }
}
function _createClass$5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$4(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$4(arg) {
  var key = _toPrimitive$4(arg, "string");
  return _typeof$5(key) === "symbol" ? key : String(key);
}
function _toPrimitive$4(input, hint) {
  if (_typeof$5(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (_typeof$5(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(input);
}
var os$1 = require$$0__default.default;
var asyncForEach$2 = forEachExports;
var debug$2 = browserExports("winston:exception");
var once$2 = oneTime;
var stackTrace$1 = stackTrace$2;
var ExceptionStream$1 = exceptionStream;
var exceptionHandler = /* @__PURE__ */ function() {
  function ExceptionHandler2(logger2) {
    _classCallCheck$5(this, ExceptionHandler2);
    if (!logger2) {
      throw new Error("Logger is required to handle exceptions");
    }
    this.logger = logger2;
    this.handlers = /* @__PURE__ */ new Map();
  }
  _createClass$5(ExceptionHandler2, [{
    key: "handle",
    value: function handle() {
      var _this2 = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.forEach(function(arg) {
        if (Array.isArray(arg)) {
          return arg.forEach(function(handler) {
            return _this2._addHandler(handler);
          });
        }
        _this2._addHandler(arg);
      });
      if (!this.catcher) {
        this.catcher = this._uncaughtException.bind(this);
        process.on("uncaughtException", this.catcher);
      }
    }
    /**
     * Removes any handlers to `uncaughtException` events for the current
     * process. This does not modify the state of the `this.handlers` set.
     * @returns {undefined}
     */
  }, {
    key: "unhandle",
    value: function unhandle() {
      var _this2 = this;
      if (this.catcher) {
        process.removeListener("uncaughtException", this.catcher);
        this.catcher = false;
        Array.from(this.handlers.values()).forEach(function(wrapper) {
          return _this2.logger.unpipe(wrapper);
        });
      }
    }
    /**
     * TODO: add method description
     * @param {Error} err - Error to get information about.
     * @returns {mixed} - TODO: add return description.
     */
  }, {
    key: "getAllInfo",
    value: function getAllInfo(err) {
      var message = null;
      if (err) {
        message = typeof err === "string" ? err : err.message;
      }
      return {
        error: err,
        // TODO (indexzero): how do we configure this?
        level: "error",
        message: ["uncaughtException: ".concat(message || "(no error message)"), err && err.stack || "  No stack trace"].join("\n"),
        stack: err && err.stack,
        exception: true,
        date: (/* @__PURE__ */ new Date()).toString(),
        process: this.getProcessInfo(),
        os: this.getOsInfo(),
        trace: this.getTrace(err)
      };
    }
    /**
     * Gets all relevant process information for the currently running process.
     * @returns {mixed} - TODO: add return description.
     */
  }, {
    key: "getProcessInfo",
    value: function getProcessInfo() {
      return {
        pid: process.pid,
        uid: process.getuid ? process.getuid() : null,
        gid: process.getgid ? process.getgid() : null,
        cwd: process.cwd(),
        execPath: process.execPath,
        version: process.version,
        argv: process.argv,
        memoryUsage: process.memoryUsage()
      };
    }
    /**
     * Gets all relevant OS information for the currently running process.
     * @returns {mixed} - TODO: add return description.
     */
  }, {
    key: "getOsInfo",
    value: function getOsInfo() {
      return {
        loadavg: os$1.loadavg(),
        uptime: os$1.uptime()
      };
    }
    /**
     * Gets a stack trace for the specified error.
     * @param {mixed} err - TODO: add param description.
     * @returns {mixed} - TODO: add return description.
     */
  }, {
    key: "getTrace",
    value: function getTrace(err) {
      var trace = err ? stackTrace$1.parse(err) : stackTrace$1.get();
      return trace.map(function(site) {
        return {
          column: site.getColumnNumber(),
          file: site.getFileName(),
          "function": site.getFunctionName(),
          line: site.getLineNumber(),
          method: site.getMethodName(),
          "native": site.isNative()
        };
      });
    }
    /**
     * Helper method to add a transport as an exception handler.
     * @param {Transport} handler - The transport to add as an exception handler.
     * @returns {void}
     */
  }, {
    key: "_addHandler",
    value: function _addHandler(handler) {
      if (!this.handlers.has(handler)) {
        handler.handleExceptions = true;
        var wrapper = new ExceptionStream$1(handler);
        this.handlers.set(handler, wrapper);
        this.logger.pipe(wrapper);
      }
    }
    /**
     * Logs all relevant information around the `err` and exits the current
     * process.
     * @param {Error} err - Error to handle
     * @returns {mixed} - TODO: add return description.
     * @private
     */
  }, {
    key: "_uncaughtException",
    value: function _uncaughtException(err) {
      var info = this.getAllInfo(err);
      var handlers = this._getExceptionHandlers();
      var doExit = typeof this.logger.exitOnError === "function" ? this.logger.exitOnError(err) : this.logger.exitOnError;
      var timeout;
      if (!handlers.length && doExit) {
        console.warn("winston: exitOnError cannot be true with no exception handlers.");
        console.warn("winston: not exiting process.");
        doExit = false;
      }
      function gracefulExit() {
        debug$2("doExit", doExit);
        debug$2("process._exiting", process._exiting);
        if (doExit && !process._exiting) {
          if (timeout) {
            clearTimeout(timeout);
          }
          process.exit(1);
        }
      }
      if (!handlers || handlers.length === 0) {
        return process.nextTick(gracefulExit);
      }
      asyncForEach$2(handlers, function(handler, next) {
        var done2 = once$2(next);
        var transport = handler.transport || handler;
        function onDone(event) {
          return function() {
            debug$2(event);
            done2();
          };
        }
        transport._ending = true;
        transport.once("finish", onDone("finished"));
        transport.once("error", onDone("error"));
      }, function() {
        return doExit && gracefulExit();
      });
      this.logger.log(info);
      if (doExit) {
        timeout = setTimeout(gracefulExit, 3e3);
      }
    }
    /**
     * Returns the list of transports and exceptionHandlers for this instance.
     * @returns {Array} - List of transports and exceptionHandlers for this
     * instance.
     * @private
     */
  }, {
    key: "_getExceptionHandlers",
    value: function _getExceptionHandlers() {
      return this.logger.transports.filter(function(wrap2) {
        var transport = wrap2.transport || wrap2;
        return transport.handleExceptions;
      });
    }
  }]);
  return ExceptionHandler2;
}();
function _typeof$4(obj) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$4(obj);
}
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$3(descriptor.key), descriptor);
  }
}
function _createClass$4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$3(arg) {
  var key = _toPrimitive$3(arg, "string");
  return _typeof$4(key) === "symbol" ? key : String(key);
}
function _toPrimitive$3(input, hint) {
  if (_typeof$4(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (_typeof$4(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(input);
}
var os = require$$0__default.default;
var asyncForEach$1 = forEachExports;
var debug$1 = browserExports("winston:rejection");
var once$1 = oneTime;
var stackTrace = stackTrace$2;
var ExceptionStream = exceptionStream;
var rejectionHandler = /* @__PURE__ */ function() {
  function RejectionHandler2(logger2) {
    _classCallCheck$4(this, RejectionHandler2);
    if (!logger2) {
      throw new Error("Logger is required to handle rejections");
    }
    this.logger = logger2;
    this.handlers = /* @__PURE__ */ new Map();
  }
  _createClass$4(RejectionHandler2, [{
    key: "handle",
    value: function handle() {
      var _this2 = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.forEach(function(arg) {
        if (Array.isArray(arg)) {
          return arg.forEach(function(handler) {
            return _this2._addHandler(handler);
          });
        }
        _this2._addHandler(arg);
      });
      if (!this.catcher) {
        this.catcher = this._unhandledRejection.bind(this);
        process.on("unhandledRejection", this.catcher);
      }
    }
    /**
     * Removes any handlers to `unhandledRejection` events for the current
     * process. This does not modify the state of the `this.handlers` set.
     * @returns {undefined}
     */
  }, {
    key: "unhandle",
    value: function unhandle() {
      var _this2 = this;
      if (this.catcher) {
        process.removeListener("unhandledRejection", this.catcher);
        this.catcher = false;
        Array.from(this.handlers.values()).forEach(function(wrapper) {
          return _this2.logger.unpipe(wrapper);
        });
      }
    }
    /**
     * TODO: add method description
     * @param {Error} err - Error to get information about.
     * @returns {mixed} - TODO: add return description.
     */
  }, {
    key: "getAllInfo",
    value: function getAllInfo(err) {
      var message = null;
      if (err) {
        message = typeof err === "string" ? err : err.message;
      }
      return {
        error: err,
        // TODO (indexzero): how do we configure this?
        level: "error",
        message: ["unhandledRejection: ".concat(message || "(no error message)"), err && err.stack || "  No stack trace"].join("\n"),
        stack: err && err.stack,
        exception: true,
        date: (/* @__PURE__ */ new Date()).toString(),
        process: this.getProcessInfo(),
        os: this.getOsInfo(),
        trace: this.getTrace(err)
      };
    }
    /**
     * Gets all relevant process information for the currently running process.
     * @returns {mixed} - TODO: add return description.
     */
  }, {
    key: "getProcessInfo",
    value: function getProcessInfo() {
      return {
        pid: process.pid,
        uid: process.getuid ? process.getuid() : null,
        gid: process.getgid ? process.getgid() : null,
        cwd: process.cwd(),
        execPath: process.execPath,
        version: process.version,
        argv: process.argv,
        memoryUsage: process.memoryUsage()
      };
    }
    /**
     * Gets all relevant OS information for the currently running process.
     * @returns {mixed} - TODO: add return description.
     */
  }, {
    key: "getOsInfo",
    value: function getOsInfo() {
      return {
        loadavg: os.loadavg(),
        uptime: os.uptime()
      };
    }
    /**
     * Gets a stack trace for the specified error.
     * @param {mixed} err - TODO: add param description.
     * @returns {mixed} - TODO: add return description.
     */
  }, {
    key: "getTrace",
    value: function getTrace(err) {
      var trace = err ? stackTrace.parse(err) : stackTrace.get();
      return trace.map(function(site) {
        return {
          column: site.getColumnNumber(),
          file: site.getFileName(),
          "function": site.getFunctionName(),
          line: site.getLineNumber(),
          method: site.getMethodName(),
          "native": site.isNative()
        };
      });
    }
    /**
     * Helper method to add a transport as an exception handler.
     * @param {Transport} handler - The transport to add as an exception handler.
     * @returns {void}
     */
  }, {
    key: "_addHandler",
    value: function _addHandler(handler) {
      if (!this.handlers.has(handler)) {
        handler.handleRejections = true;
        var wrapper = new ExceptionStream(handler);
        this.handlers.set(handler, wrapper);
        this.logger.pipe(wrapper);
      }
    }
    /**
     * Logs all relevant information around the `err` and exits the current
     * process.
     * @param {Error} err - Error to handle
     * @returns {mixed} - TODO: add return description.
     * @private
     */
  }, {
    key: "_unhandledRejection",
    value: function _unhandledRejection(err) {
      var info = this.getAllInfo(err);
      var handlers = this._getRejectionHandlers();
      var doExit = typeof this.logger.exitOnError === "function" ? this.logger.exitOnError(err) : this.logger.exitOnError;
      var timeout;
      if (!handlers.length && doExit) {
        console.warn("winston: exitOnError cannot be true with no rejection handlers.");
        console.warn("winston: not exiting process.");
        doExit = false;
      }
      function gracefulExit() {
        debug$1("doExit", doExit);
        debug$1("process._exiting", process._exiting);
        if (doExit && !process._exiting) {
          if (timeout) {
            clearTimeout(timeout);
          }
          process.exit(1);
        }
      }
      if (!handlers || handlers.length === 0) {
        return process.nextTick(gracefulExit);
      }
      asyncForEach$1(handlers, function(handler, next) {
        var done2 = once$1(next);
        var transport = handler.transport || handler;
        function onDone(event) {
          return function() {
            debug$1(event);
            done2();
          };
        }
        transport._ending = true;
        transport.once("finish", onDone("finished"));
        transport.once("error", onDone("error"));
      }, function() {
        return doExit && gracefulExit();
      });
      this.logger.log(info);
      if (doExit) {
        timeout = setTimeout(gracefulExit, 3e3);
      }
    }
    /**
     * Returns the list of transports and exceptionHandlers for this instance.
     * @returns {Array} - List of transports and exceptionHandlers for this
     * instance.
     * @private
     */
  }, {
    key: "_getRejectionHandlers",
    value: function _getRejectionHandlers() {
      return this.logger.transports.filter(function(wrap2) {
        var transport = wrap2.transport || wrap2;
        return transport.handleRejections;
      });
    }
  }]);
  return RejectionHandler2;
}();
var legacy = { exports: {} };
var modern = { exports: {} };
const util$1 = require$$0__default$1.default;
const Writable = require_stream_writable();
const { LEVEL: LEVEL$3 } = tripleBeam;
const TransportStream$1 = modern.exports = function TransportStream2(options = {}) {
  Writable.call(this, { objectMode: true, highWaterMark: options.highWaterMark });
  this.format = options.format;
  this.level = options.level;
  this.handleExceptions = options.handleExceptions;
  this.handleRejections = options.handleRejections;
  this.silent = options.silent;
  if (options.log)
    this.log = options.log;
  if (options.logv)
    this.logv = options.logv;
  if (options.close)
    this.close = options.close;
  this.once("pipe", (logger2) => {
    this.levels = logger2.levels;
    this.parent = logger2;
  });
  this.once("unpipe", (src) => {
    if (src === this.parent) {
      this.parent = null;
      if (this.close) {
        this.close();
      }
    }
  });
};
util$1.inherits(TransportStream$1, Writable);
TransportStream$1.prototype._write = function _write3(info, enc, callback) {
  if (this.silent || info.exception === true && !this.handleExceptions) {
    return callback(null);
  }
  const level = this.level || this.parent && this.parent.level;
  if (!level || this.levels[level] >= this.levels[info[LEVEL$3]]) {
    if (info && !this.format) {
      return this.log(info, callback);
    }
    let errState;
    let transformed;
    try {
      transformed = this.format.transform(Object.assign({}, info), this.format.options);
    } catch (err) {
      errState = err;
    }
    if (errState || !transformed) {
      callback();
      if (errState)
        throw errState;
      return;
    }
    return this.log(transformed, callback);
  }
  this._writableState.sync = false;
  return callback(null);
};
TransportStream$1.prototype._writev = function _writev3(chunks, callback) {
  if (this.logv) {
    const infos = chunks.filter(this._accept, this);
    if (!infos.length) {
      return callback(null);
    }
    return this.logv(infos, callback);
  }
  for (let i = 0; i < chunks.length; i++) {
    if (!this._accept(chunks[i]))
      continue;
    if (chunks[i].chunk && !this.format) {
      this.log(chunks[i].chunk, chunks[i].callback);
      continue;
    }
    let errState;
    let transformed;
    try {
      transformed = this.format.transform(
        Object.assign({}, chunks[i].chunk),
        this.format.options
      );
    } catch (err) {
      errState = err;
    }
    if (errState || !transformed) {
      chunks[i].callback();
      if (errState) {
        callback(null);
        throw errState;
      }
    } else {
      this.log(transformed, chunks[i].callback);
    }
  }
  return callback(null);
};
TransportStream$1.prototype._accept = function _accept2(write) {
  const info = write.chunk;
  if (this.silent) {
    return false;
  }
  const level = this.level || this.parent && this.parent.level;
  if (info.exception === true || !level || this.levels[level] >= this.levels[info[LEVEL$3]]) {
    if (this.handleExceptions || info.exception !== true) {
      return true;
    }
  }
  return false;
};
TransportStream$1.prototype._nop = function _nop2() {
  return void 0;
};
var modernExports = modern.exports;
const util = require$$0__default$1.default;
const { LEVEL: LEVEL$2 } = tripleBeam;
const TransportStream3 = modernExports;
const LegacyTransportStream$1 = legacy.exports = function LegacyTransportStream2(options = {}) {
  TransportStream3.call(this, options);
  if (!options.transport || typeof options.transport.log !== "function") {
    throw new Error("Invalid transport, must be an object with a log method.");
  }
  this.transport = options.transport;
  this.level = this.level || options.transport.level;
  this.handleExceptions = this.handleExceptions || options.transport.handleExceptions;
  this._deprecated();
  function transportError(err) {
    this.emit("error", err, this.transport);
  }
  if (!this.transport.__winstonError) {
    this.transport.__winstonError = transportError.bind(this);
    this.transport.on("error", this.transport.__winstonError);
  }
};
util.inherits(LegacyTransportStream$1, TransportStream3);
LegacyTransportStream$1.prototype._write = function _write4(info, enc, callback) {
  if (this.silent || info.exception === true && !this.handleExceptions) {
    return callback(null);
  }
  if (!this.level || this.levels[this.level] >= this.levels[info[LEVEL$2]]) {
    this.transport.log(info[LEVEL$2], info.message, info, this._nop);
  }
  callback(null);
};
LegacyTransportStream$1.prototype._writev = function _writev4(chunks, callback) {
  for (let i = 0; i < chunks.length; i++) {
    if (this._accept(chunks[i])) {
      this.transport.log(
        chunks[i].chunk[LEVEL$2],
        chunks[i].chunk.message,
        chunks[i].chunk,
        this._nop
      );
      chunks[i].callback();
    }
  }
  return callback(null);
};
LegacyTransportStream$1.prototype._deprecated = function _deprecated2() {
  console.error([
    `${this.transport.name} is a legacy winston transport. Consider upgrading: `,
    "- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md"
  ].join("\n"));
};
LegacyTransportStream$1.prototype.close = function close2() {
  if (this.transport.close) {
    this.transport.close();
  }
  if (this.transport.__winstonError) {
    this.transport.removeListener("error", this.transport.__winstonError);
    this.transport.__winstonError = null;
  }
};
var legacyExports = legacy.exports;
function _typeof$3(obj) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$3(obj);
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$2(arg) {
  var key = _toPrimitive$2(arg, "string");
  return _typeof$3(key) === "symbol" ? key : String(key);
}
function _toPrimitive$2(input, hint) {
  if (_typeof$3(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (_typeof$3(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(input);
}
var profiler = /* @__PURE__ */ function() {
  function Profiler2(logger2) {
    _classCallCheck$3(this, Profiler2);
    if (!logger2) {
      throw new Error("Logger is required for profiling.");
    }
    this.logger = logger2;
    this.start = Date.now();
  }
  _createClass$3(Profiler2, [{
    key: "done",
    value: function done2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (typeof args[args.length - 1] === "function") {
        console.warn("Callback function no longer supported as of winston@3.0.0");
        args.pop();
      }
      var info = _typeof$3(args[args.length - 1]) === "object" ? args.pop() : {};
      info.level = info.level || "info";
      info.durationMs = Date.now() - this.start;
      return this.logger.write(info);
    }
  }]);
  return Profiler2;
}();
var format;
var hasRequiredFormat;
function requireFormat() {
  if (hasRequiredFormat)
    return format;
  hasRequiredFormat = 1;
  class InvalidFormatError2 extends Error {
    constructor(formatFn) {
      super(`Format functions must be synchronous taking a two arguments: (info, opts)
Found: ${formatFn.toString().split("\n")[0]}
`);
      Error.captureStackTrace(this, InvalidFormatError2);
    }
  }
  format = (formatFn) => {
    if (formatFn.length > 2) {
      throw new InvalidFormatError2(formatFn);
    }
    function Format(options = {}) {
      this.options = options;
    }
    Format.prototype.transform = formatFn;
    function createFormatWrap(opts) {
      return new Format(opts);
    }
    createFormatWrap.Format = Format;
    return createFormatWrap;
  };
  return format;
}
var json;
var hasRequiredJson;
function requireJson() {
  if (hasRequiredJson)
    return json;
  hasRequiredJson = 1;
  const format2 = requireFormat();
  const { MESSAGE: MESSAGE2 } = tripleBeam;
  const stringify2 = safeStableStringifyExports;
  function replacer2(key, value) {
    if (typeof value === "bigint")
      return value.toString();
    return value;
  }
  json = format2((info, opts) => {
    const jsonStringify2 = stringify2.configure(opts);
    info[MESSAGE2] = jsonStringify2(info, opts.replacer || replacer2, opts.space);
    return info;
  });
  return json;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$1(arg) {
  var key = _toPrimitive$1(arg, "string");
  return _typeof$2(key) === "symbol" ? key : String(key);
}
function _toPrimitive$1(input, hint) {
  if (_typeof$2(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _possibleConstructorReturn$1(self2, call2) {
  if (call2 && (_typeof$2(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self2);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
var _require$1 = readableBrowserExports, Stream = _require$1.Stream, Transform = _require$1.Transform;
var asyncForEach = forEachExports;
var _require2 = tripleBeam, LEVEL$1 = _require2.LEVEL, SPLAT = _require2.SPLAT;
var isStream = isStream_1;
var ExceptionHandler = exceptionHandler;
var RejectionHandler = rejectionHandler;
var LegacyTransportStream3 = legacyExports;
var Profiler = profiler;
var _require3 = common, warn = _require3.warn;
var config$1 = config$2;
var formatRegExp = /%[scdjifoO%]/g;
var Logger$1 = /* @__PURE__ */ function(_Transform) {
  _inherits$1(Logger2, _Transform);
  var _super = _createSuper$1(Logger2);
  function Logger2(options) {
    var _this2;
    _classCallCheck$2(this, Logger2);
    _this2 = _super.call(this, {
      objectMode: true
    });
    _this2.configure(options);
    return _this2;
  }
  _createClass$2(Logger2, [{
    key: "child",
    value: function child(defaultRequestMetadata) {
      var logger2 = this;
      return Object.create(logger2, {
        write: {
          value: function value(info) {
            var infoClone = Object.assign({}, defaultRequestMetadata, info);
            if (info instanceof Error) {
              infoClone.stack = info.stack;
              infoClone.message = info.message;
            }
            logger2.write(infoClone);
          }
        }
      });
    }
    /**
     * This will wholesale reconfigure this instance by:
     * 1. Resetting all transports. Older transports will be removed implicitly.
     * 2. Set all other options including levels, colors, rewriters, filters,
     *    exceptionHandlers, etc.
     * @param {!Object} options - TODO: add param description.
     * @returns {undefined}
     */
  }, {
    key: "configure",
    value: function configure() {
      var _this2 = this;
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, silent = _ref.silent, format2 = _ref.format, defaultMeta = _ref.defaultMeta, levels2 = _ref.levels, _ref$level = _ref.level, level = _ref$level === void 0 ? "info" : _ref$level, _ref$exitOnError = _ref.exitOnError, exitOnError = _ref$exitOnError === void 0 ? true : _ref$exitOnError, transports2 = _ref.transports, colors2 = _ref.colors, emitErrs = _ref.emitErrs, formatters = _ref.formatters, padLevels2 = _ref.padLevels, rewriters = _ref.rewriters, stripColors = _ref.stripColors, exceptionHandlers = _ref.exceptionHandlers, rejectionHandlers = _ref.rejectionHandlers;
      if (this.transports.length) {
        this.clear();
      }
      this.silent = silent;
      this.format = format2 || this.format || requireJson()();
      this.defaultMeta = defaultMeta || null;
      this.levels = levels2 || this.levels || config$1.npm.levels;
      this.level = level;
      if (this.exceptions) {
        this.exceptions.unhandle();
      }
      if (this.rejections) {
        this.rejections.unhandle();
      }
      this.exceptions = new ExceptionHandler(this);
      this.rejections = new RejectionHandler(this);
      this.profilers = {};
      this.exitOnError = exitOnError;
      if (transports2) {
        transports2 = Array.isArray(transports2) ? transports2 : [transports2];
        transports2.forEach(function(transport) {
          return _this2.add(transport);
        });
      }
      if (colors2 || emitErrs || formatters || padLevels2 || rewriters || stripColors) {
        throw new Error(["{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.", "Use a custom winston.format(function) instead.", "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md"].join("\n"));
      }
      if (exceptionHandlers) {
        this.exceptions.handle(exceptionHandlers);
      }
      if (rejectionHandlers) {
        this.rejections.handle(rejectionHandlers);
      }
    }
  }, {
    key: "isLevelEnabled",
    value: function isLevelEnabled(level) {
      var _this3 = this;
      var givenLevelValue = getLevelValue(this.levels, level);
      if (givenLevelValue === null) {
        return false;
      }
      var configuredLevelValue = getLevelValue(this.levels, this.level);
      if (configuredLevelValue === null) {
        return false;
      }
      if (!this.transports || this.transports.length === 0) {
        return configuredLevelValue >= givenLevelValue;
      }
      var index2 = this.transports.findIndex(function(transport) {
        var transportLevelValue = getLevelValue(_this3.levels, transport.level);
        if (transportLevelValue === null) {
          transportLevelValue = configuredLevelValue;
        }
        return transportLevelValue >= givenLevelValue;
      });
      return index2 !== -1;
    }
    /* eslint-disable valid-jsdoc */
    /**
     * Ensure backwards compatibility with a `log` method
     * @param {mixed} level - Level the log message is written at.
     * @param {mixed} msg - TODO: add param description.
     * @param {mixed} meta - TODO: add param description.
     * @returns {Logger} - TODO: add return description.
     *
     * @example
     *    // Supports the existing API:
     *    logger.log('info', 'Hello world', { custom: true });
     *    logger.log('info', new Error('Yo, it\'s on fire'));
     *
     *    // Requires winston.format.splat()
     *    logger.log('info', '%s %d%%', 'A string', 50, { thisIsMeta: true });
     *
     *    // And the new API with a single JSON literal:
     *    logger.log({ level: 'info', message: 'Hello world', custom: true });
     *    logger.log({ level: 'info', message: new Error('Yo, it\'s on fire') });
     *
     *    // Also requires winston.format.splat()
     *    logger.log({
     *      level: 'info',
     *      message: '%s %d%%',
     *      [SPLAT]: ['A string', 50],
     *      meta: { thisIsMeta: true }
     *    });
     *
     */
    /* eslint-enable valid-jsdoc */
  }, {
    key: "log",
    value: function log(level, msg) {
      var _Object$assign2;
      for (var _len = arguments.length, splat2 = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        splat2[_key - 2] = arguments[_key];
      }
      if (arguments.length === 1) {
        level[LEVEL$1] = level.level;
        this._addDefaultMeta(level);
        this.write(level);
        return this;
      }
      if (arguments.length === 2) {
        var _msg;
        if (msg && _typeof$2(msg) === "object") {
          msg[LEVEL$1] = msg.level = level;
          this._addDefaultMeta(msg);
          this.write(msg);
          return this;
        }
        msg = (_msg = {}, _defineProperty$1(_msg, LEVEL$1, level), _defineProperty$1(_msg, "level", level), _defineProperty$1(_msg, "message", msg), _msg);
        this._addDefaultMeta(msg);
        this.write(msg);
        return this;
      }
      var meta = splat2[0];
      if (_typeof$2(meta) === "object" && meta !== null) {
        var tokens = msg && msg.match && msg.match(formatRegExp);
        if (!tokens) {
          var _Object$assign;
          var info = Object.assign({}, this.defaultMeta, meta, (_Object$assign = {}, _defineProperty$1(_Object$assign, LEVEL$1, level), _defineProperty$1(_Object$assign, SPLAT, splat2), _defineProperty$1(_Object$assign, "level", level), _defineProperty$1(_Object$assign, "message", msg), _Object$assign));
          if (meta.message)
            info.message = "".concat(info.message, " ").concat(meta.message);
          if (meta.stack)
            info.stack = meta.stack;
          this.write(info);
          return this;
        }
      }
      this.write(Object.assign({}, this.defaultMeta, (_Object$assign2 = {}, _defineProperty$1(_Object$assign2, LEVEL$1, level), _defineProperty$1(_Object$assign2, SPLAT, splat2), _defineProperty$1(_Object$assign2, "level", level), _defineProperty$1(_Object$assign2, "message", msg), _Object$assign2)));
      return this;
    }
    /**
     * Pushes data so that it can be picked up by all of our pipe targets.
     * @param {mixed} info - TODO: add param description.
     * @param {mixed} enc - TODO: add param description.
     * @param {mixed} callback - Continues stream processing.
     * @returns {undefined}
     * @private
     */
  }, {
    key: "_transform",
    value: function _transform(info, enc, callback) {
      if (this.silent) {
        return callback();
      }
      if (!info[LEVEL$1]) {
        info[LEVEL$1] = info.level;
      }
      if (!this.levels[info[LEVEL$1]] && this.levels[info[LEVEL$1]] !== 0) {
        console.error("[winston] Unknown logger level: %s", info[LEVEL$1]);
      }
      if (!this._readableState.pipes) {
        console.error("[winston] Attempt to write logs with no transports, which can increase memory usage: %j", info);
      }
      try {
        this.push(this.format.transform(info, this.format.options));
      } finally {
        this._writableState.sync = false;
        callback();
      }
    }
    /**
     * Delays the 'finish' event until all transport pipe targets have
     * also emitted 'finish' or are already finished.
     * @param {mixed} callback - Continues stream processing.
     */
  }, {
    key: "_final",
    value: function _final(callback) {
      var transports2 = this.transports.slice();
      asyncForEach(transports2, function(transport, next) {
        if (!transport || transport.finished)
          return setImmediate(next);
        transport.once("finish", next);
        transport.end();
      }, callback);
    }
    /**
     * Adds the transport to this logger instance by piping to it.
     * @param {mixed} transport - TODO: add param description.
     * @returns {Logger} - TODO: add return description.
     */
  }, {
    key: "add",
    value: function add(transport) {
      var target = !isStream(transport) || transport.log.length > 2 ? new LegacyTransportStream3({
        transport
      }) : transport;
      if (!target._writableState || !target._writableState.objectMode) {
        throw new Error("Transports must WritableStreams in objectMode. Set { objectMode: true }.");
      }
      this._onEvent("error", target);
      this._onEvent("warn", target);
      this.pipe(target);
      if (transport.handleExceptions) {
        this.exceptions.handle();
      }
      if (transport.handleRejections) {
        this.rejections.handle();
      }
      return this;
    }
    /**
     * Removes the transport from this logger instance by unpiping from it.
     * @param {mixed} transport - TODO: add param description.
     * @returns {Logger} - TODO: add return description.
     */
  }, {
    key: "remove",
    value: function remove(transport) {
      if (!transport)
        return this;
      var target = transport;
      if (!isStream(transport) || transport.log.length > 2) {
        target = this.transports.filter(function(match) {
          return match.transport === transport;
        })[0];
      }
      if (target) {
        this.unpipe(target);
      }
      return this;
    }
    /**
     * Removes all transports from this logger instance.
     * @returns {Logger} - TODO: add return description.
     */
  }, {
    key: "clear",
    value: function clear() {
      this.unpipe();
      return this;
    }
    /**
     * Cleans up resources (streams, event listeners) for all transports
     * associated with this instance (if necessary).
     * @returns {Logger} - TODO: add return description.
     */
  }, {
    key: "close",
    value: function close3() {
      this.exceptions.unhandle();
      this.rejections.unhandle();
      this.clear();
      this.emit("close");
      return this;
    }
    /**
     * Sets the `target` levels specified on this instance.
     * @param {Object} Target levels to use on this instance.
     */
  }, {
    key: "setLevels",
    value: function setLevels() {
      warn.deprecated("setLevels");
    }
    /**
     * Queries the all transports for this instance with the specified `options`.
     * This will aggregate each transport's results into one object containing
     * a property per transport.
     * @param {Object} options - Query options for this instance.
     * @param {function} callback - Continuation to respond to when complete.
     */
  }, {
    key: "query",
    value: function query(options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      options = options || {};
      var results = {};
      var queryObject = Object.assign({}, options.query || {});
      function queryTransport(transport, next) {
        if (options.query && typeof transport.formatQuery === "function") {
          options.query = transport.formatQuery(queryObject);
        }
        transport.query(options, function(err, res) {
          if (err) {
            return next(err);
          }
          if (typeof transport.formatResults === "function") {
            res = transport.formatResults(res, options.format);
          }
          next(null, res);
        });
      }
      function addResults(transport, next) {
        queryTransport(transport, function(err, result) {
          if (next) {
            result = err || result;
            if (result) {
              results[transport.name] = result;
            }
            next();
          }
          next = null;
        });
      }
      asyncForEach(this.transports.filter(function(transport) {
        return !!transport.query;
      }), addResults, function() {
        return callback(null, results);
      });
    }
    /**
     * Returns a log stream for all transports. Options object is optional.
     * @param{Object} options={} - Stream options for this instance.
     * @returns {Stream} - TODO: add return description.
     */
  }, {
    key: "stream",
    value: function stream2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var out = new Stream();
      var streams = [];
      out._streams = streams;
      out.destroy = function() {
        var i = streams.length;
        while (i--) {
          streams[i].destroy();
        }
      };
      this.transports.filter(function(transport) {
        return !!transport.stream;
      }).forEach(function(transport) {
        var str = transport.stream(options);
        if (!str) {
          return;
        }
        streams.push(str);
        str.on("log", function(log) {
          log.transport = log.transport || [];
          log.transport.push(transport.name);
          out.emit("log", log);
        });
        str.on("error", function(err) {
          err.transport = err.transport || [];
          err.transport.push(transport.name);
          out.emit("error", err);
        });
      });
      return out;
    }
    /**
     * Returns an object corresponding to a specific timing. When done is called
     * the timer will finish and log the duration. e.g.:
     * @returns {Profile} - TODO: add return description.
     * @example
     *    const timer = winston.startTimer()
     *    setTimeout(() => {
     *      timer.done({
     *        message: 'Logging message'
     *      });
     *    }, 1000);
     */
  }, {
    key: "startTimer",
    value: function startTimer() {
      return new Profiler(this);
    }
    /**
     * Tracks the time inbetween subsequent calls to this method with the same
     * `id` parameter. The second call to this method will log the difference in
     * milliseconds along with the message.
     * @param {string} id Unique id of the profiler
     * @returns {Logger} - TODO: add return description.
     */
  }, {
    key: "profile",
    value: function profile(id) {
      var time = Date.now();
      if (this.profilers[id]) {
        var timeEnd = this.profilers[id];
        delete this.profilers[id];
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        if (typeof args[args.length - 2] === "function") {
          console.warn("Callback function no longer supported as of winston@3.0.0");
          args.pop();
        }
        var info = _typeof$2(args[args.length - 1]) === "object" ? args.pop() : {};
        info.level = info.level || "info";
        info.durationMs = time - timeEnd;
        info.message = info.message || id;
        return this.write(info);
      }
      this.profilers[id] = time;
      return this;
    }
    /**
     * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
     * @returns {undefined}
     * @deprecated
     */
  }, {
    key: "handleExceptions",
    value: function handleExceptions() {
      var _this$exceptions;
      console.warn("Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()");
      (_this$exceptions = this.exceptions).handle.apply(_this$exceptions, arguments);
    }
    /**
     * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
     * @returns {undefined}
     * @deprecated
     */
  }, {
    key: "unhandleExceptions",
    value: function unhandleExceptions() {
      var _this$exceptions2;
      console.warn("Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()");
      (_this$exceptions2 = this.exceptions).unhandle.apply(_this$exceptions2, arguments);
    }
    /**
     * Throw a more meaningful deprecation notice
     * @throws {Error} - TODO: add throws description.
     */
  }, {
    key: "cli",
    value: function cli2() {
      throw new Error(["Logger.cli() was removed in winston@3.0.0", "Use a custom winston.formats.cli() instead.", "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md"].join("\n"));
    }
    /**
     * Bubbles the `event` that occured on the specified `transport` up
     * from this instance.
     * @param {string} event - The event that occured
     * @param {Object} transport - Transport on which the event occured
     * @private
     */
  }, {
    key: "_onEvent",
    value: function _onEvent(event, transport) {
      function transportEvent(err) {
        if (event === "error" && !this.transports.includes(transport)) {
          this.add(transport);
        }
        this.emit(event, err, transport);
      }
      if (!transport["__winston" + event]) {
        transport["__winston" + event] = transportEvent.bind(this);
        transport.on(event, transport["__winston" + event]);
      }
    }
  }, {
    key: "_addDefaultMeta",
    value: function _addDefaultMeta(msg) {
      if (this.defaultMeta) {
        Object.assign(msg, this.defaultMeta);
      }
    }
  }]);
  return Logger2;
}(Transform);
function getLevelValue(levels2, level) {
  var value = levels2[level];
  if (!value && value !== 0) {
    return null;
  }
  return value;
}
Object.defineProperty(Logger$1.prototype, "transports", {
  configurable: false,
  enumerable: true,
  get: function get() {
    var pipes = this._readableState.pipes;
    return !Array.isArray(pipes) ? [pipes].filter(Boolean) : pipes;
  }
});
var logger = Logger$1;
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
function _createClass$1(Constructor, protoProps, staticProps) {
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call2) {
  if (call2 && (_typeof$1(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var _require = tripleBeam, LEVEL = _require.LEVEL;
var config = config$2;
var Logger = logger;
var debug = browserExports("winston:create-logger");
function isLevelEnabledFunctionName(level) {
  return "is" + level.charAt(0).toUpperCase() + level.slice(1) + "Enabled";
}
var createLogger$1 = function() {
  var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  opts.levels = opts.levels || config.npm.levels;
  var DerivedLogger = /* @__PURE__ */ function(_Logger) {
    _inherits(DerivedLogger2, _Logger);
    var _super = _createSuper(DerivedLogger2);
    function DerivedLogger2(options) {
      _classCallCheck$1(this, DerivedLogger2);
      return _super.call(this, options);
    }
    return _createClass$1(DerivedLogger2);
  }(Logger);
  var logger2 = new DerivedLogger(opts);
  Object.keys(opts.levels).forEach(function(level) {
    debug('Define prototype method for "%s"', level);
    if (level === "log") {
      console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.');
      return;
    }
    DerivedLogger.prototype[level] = function() {
      var self2 = this || logger2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1) {
        var msg = args[0];
        var info = msg && msg.message && msg || {
          message: msg
        };
        info.level = info[LEVEL] = level;
        self2._addDefaultMeta(info);
        self2.write(info);
        return this || logger2;
      }
      if (args.length === 0) {
        self2.log(level, "");
        return self2;
      }
      return self2.log.apply(self2, [level].concat(args));
    };
    DerivedLogger.prototype[isLevelEnabledFunctionName(level)] = function() {
      return (this || logger2).isLevelEnabled(level);
    };
  });
  return logger2;
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(input);
}
var createLogger = createLogger$1;
var container = /* @__PURE__ */ function() {
  function Container() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, Container);
    this.loggers = /* @__PURE__ */ new Map();
    this.options = options;
  }
  _createClass(Container, [{
    key: "add",
    value: function add(id, options) {
      var _this2 = this;
      if (!this.loggers.has(id)) {
        options = Object.assign({}, options || this.options);
        var existing = options.transports || this.options.transports;
        if (existing) {
          options.transports = Array.isArray(existing) ? existing.slice() : [existing];
        } else {
          options.transports = [];
        }
        var logger2 = createLogger(options);
        logger2.on("close", function() {
          return _this2._delete(id);
        });
        this.loggers.set(id, logger2);
      }
      return this.loggers.get(id);
    }
    /**
     * Retreives a `winston.Logger` instance for the specified `id`. If
     * an instance does not exist, one is created.
     * @param {!string} id - The id of the Logger to get.
     * @param {?Object} [options] - Options for the Logger instance.
     * @returns {Logger} - A configured Logger instance with a specified id.
     */
  }, {
    key: "get",
    value: function get3(id, options) {
      return this.add(id, options);
    }
    /**
     * Check if the container has a logger with the id.
     * @param {?string} id - The id of the Logger instance to find.
     * @returns {boolean} - Boolean value indicating if this instance has a
     * logger with the specified `id`.
     */
  }, {
    key: "has",
    value: function has2(id) {
      return !!this.loggers.has(id);
    }
    /**
     * Closes a `Logger` instance with the specified `id` if it exists.
     * If no `id` is supplied then all Loggers are closed.
     * @param {?string} id - The id of the Logger instance to close.
     * @returns {undefined}
     */
  }, {
    key: "close",
    value: function close3(id) {
      var _this2 = this;
      if (id) {
        return this._removeLogger(id);
      }
      this.loggers.forEach(function(val, key) {
        return _this2._removeLogger(key);
      });
    }
    /**
     * Remove a logger based on the id.
     * @param {!string} id - The id of the logger to remove.
     * @returns {undefined}
     * @private
     */
  }, {
    key: "_removeLogger",
    value: function _removeLogger(id) {
      if (!this.loggers.has(id)) {
        return;
      }
      var logger2 = this.loggers.get(id);
      logger2.close();
      this._delete(id);
    }
    /**
     * Deletes a `Logger` instance with the specified `id`.
     * @param {!string} id - The id of the Logger instance to delete from
     * container.
     * @returns {undefined}
     * @private
     */
  }, {
    key: "_delete",
    value: function _delete(id) {
      this.loggers["delete"](id);
    }
  }]);
  return Container;
}();
(function(exports2) {
  var logform2 = browser$3;
  var _require4 = common, warn2 = _require4.warn;
  exports2.version = require$$2.version;
  exports2.transports = transports;
  exports2.config = config$2;
  exports2.addColors = logform2.levels;
  exports2.format = logform2.format;
  exports2.createLogger = createLogger$1;
  exports2.Logger = logger;
  exports2.ExceptionHandler = exceptionHandler;
  exports2.RejectionHandler = rejectionHandler;
  exports2.Container = container;
  exports2.Transport = distExports;
  exports2.loggers = new exports2.Container();
  var defaultLogger = exports2.createLogger();
  Object.keys(exports2.config.npm.levels).concat(["log", "query", "stream", "add", "remove", "clear", "profile", "startTimer", "handleExceptions", "unhandleExceptions", "handleRejections", "unhandleRejections", "configure", "child"]).forEach(function(method) {
    return exports2[method] = function() {
      return defaultLogger[method].apply(defaultLogger, arguments);
    };
  });
  Object.defineProperty(exports2, "level", {
    get: function get3() {
      return defaultLogger.level;
    },
    set: function set2(val) {
      defaultLogger.level = val;
    }
  });
  Object.defineProperty(exports2, "exceptions", {
    get: function get3() {
      return defaultLogger.exceptions;
    }
  });
  ["exitOnError"].forEach(function(prop) {
    Object.defineProperty(exports2, prop, {
      get: function get3() {
        return defaultLogger[prop];
      },
      set: function set2(val) {
        defaultLogger[prop] = val;
      }
    });
  });
  Object.defineProperty(exports2, "default", {
    get: function get3() {
      return {
        exceptionHandlers: defaultLogger.exceptionHandlers,
        rejectionHandlers: defaultLogger.rejectionHandlers,
        transports: defaultLogger.transports
      };
    }
  });
  warn2.deprecated(exports2, "setLevels");
  warn2.forFunctions(exports2, "useFormat", ["cli"]);
  warn2.forProperties(exports2, "useFormat", ["padLevels", "stripColors"]);
  warn2.forFunctions(exports2, "deprecated", ["addRewriter", "addFilter", "clone", "extend"]);
  warn2.forProperties(exports2, "deprecated", ["emitErrs", "levelLength"]);
})(winston);
const LEVELS = winston.config.npm.levels;
const LEVEL_LABEL = "silly";
LEVELS[LEVEL_LABEL];
winston.format((info) => {
  if (info instanceof Error) {
    return { ...info, message: `${info.message}${info.stack ? `
${info.stack}` : ""}` };
  }
  return info;
});
winston.format.printf(({ message }) => {
  if (typeof message !== "string") {
    return message;
  }
  return message.replace(
    // eslint-disable-next-line no-control-regex
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ""
  );
});
var map;
try {
  map = Map;
} catch (_) {
}
var set;
try {
  set = Set;
} catch (_) {
}
function baseClone(src, circulars, clones) {
  if (!src || typeof src !== "object" || typeof src === "function") {
    return src;
  }
  if (src.nodeType && "cloneNode" in src) {
    return src.cloneNode(true);
  }
  if (src instanceof Date) {
    return new Date(src.getTime());
  }
  if (src instanceof RegExp) {
    return new RegExp(src);
  }
  if (Array.isArray(src)) {
    return src.map(clone);
  }
  if (map && src instanceof map) {
    return new Map(Array.from(src.entries()));
  }
  if (set && src instanceof set) {
    return new Set(Array.from(src.values()));
  }
  if (src instanceof Object) {
    circulars.push(src);
    var obj = Object.create(src);
    clones.push(obj);
    for (var key in src) {
      var idx = circulars.findIndex(function(i) {
        return i === src[key];
      });
      obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones);
    }
    return obj;
  }
  return src;
}
function clone(src) {
  return baseClone(src, [], []);
}
const toString$2 = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString$1 = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val)
    return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false)
    return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number")
    return printNumber(val);
  if (typeOf === "string")
    return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function")
    return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol")
    return symbolToString$1.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString$2.call(val).slice(8, -1);
  if (tag === "Date")
    return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error)
    return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp")
    return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null)
    return result;
  return JSON.stringify(value, function(key, value2) {
    let result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null)
      return result2;
    return value2;
  }, 2);
}
let mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg = `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + (isCast ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".");
    if (value === null) {
      msg += `
 If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }
    return msg;
  },
  defined: "${path} must be defined"
};
let string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
let number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
let date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
let boolean = {
  isValue: "${path} field must be ${value}"
};
let object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
};
let array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must be have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});
var objectProto$c = Object.prototype;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
function baseHas$1(object2, key) {
  return object2 != null && hasOwnProperty$9.call(object2, key);
}
var _baseHas = baseHas$1;
var isArray$8 = Array.isArray;
var isArray_1 = isArray$8;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$4 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var symbolTag$1 = "[object Symbol]";
function isSymbol$3(value) {
  return typeof value == "symbol" || isObjectLike$4(value) && baseGetTag$4(value) == symbolTag$1;
}
var isSymbol_1 = isSymbol$3;
var isArray$7 = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object2) {
  if (isArray$7(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
}
var _isKey = isKey$3;
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var baseGetTag$3 = _baseGetTag, isObject$2 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$1 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object2, key) {
  var value = getValue(object2, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var nativeCreate$4 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq$1(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var getNative$5 = _getNative, root$5 = _root;
var Map$4 = getNative$5(root$5, "Map");
var _Map = Map$4;
var Hash = _Hash, ListCache$3 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$3)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var MapCache$2 = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2)();
  return memoized;
}
memoize$1.Cache = MapCache$2;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(array2, iteratee) {
  var index2 = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array2[index2], index2, array2);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$2 = _Symbol, arrayMap = _arrayMap, isArray$6 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$6(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$5 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$2(value, object2) {
  if (isArray$5(value)) {
    return value;
  }
  return isKey$2(value, object2) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$2;
var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$2 = isObjectLike_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$4(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$4;
var castPath$1 = _castPath, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isIndex$1 = _isIndex, isLength$2 = isLength_1, toKey$3 = _toKey;
function hasPath$2(object2, path, hasFunc) {
  path = castPath$1(path, object2);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$3(path[index2]);
    if (!(result = object2 != null && hasFunc(object2, key))) {
      break;
    }
    object2 = object2[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object2 == null ? 0 : object2.length;
  return !!length && isLength$2(length) && isIndex$1(key, length) && (isArray$4(object2) || isArguments$1(object2));
}
var _hasPath = hasPath$2;
var baseHas = _baseHas, hasPath$1 = _hasPath;
function has(object2, path) {
  return object2 != null && hasPath$1(object2, path, baseHas);
}
var has_1 = has;
const has$1 = /* @__PURE__ */ getDefaultExportFromCjs(has_1);
const isSchema = (obj) => obj && obj.__isYupSchema__;
class Condition {
  constructor(refs, options) {
    this.refs = refs;
    this.refs = refs;
    if (typeof options === "function") {
      this.fn = options;
      return;
    }
    if (!has$1(options, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!options.then && !options.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is,
      then,
      otherwise
    } = options;
    let check = typeof is === "function" ? is : (...values) => values.every((value) => value === is);
    this.fn = function(...args) {
      let options2 = args.pop();
      let schema = args.pop();
      let branch = check(...args) ? then : otherwise;
      if (!branch)
        return void 0;
      if (typeof branch === "function")
        return branch(schema);
      return schema.concat(branch.resolve(options2));
    };
  }
  resolve(base, options) {
    let values = this.refs.map((ref) => ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn.apply(base, values.concat(base, options));
    if (schema === void 0 || schema === base)
      return base;
    if (!isSchema(schema))
      throw new TypeError("conditions must return a schema object");
    return schema.resolve(options);
  }
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || "this";
    if (path !== params.path)
      params = _extends$2({}, params, {
        path
      });
    if (typeof message === "string")
      return message.replace(strReg, (_, key) => printValue(params[key]));
    if (typeof message === "function")
      return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === "ValidationError";
  }
  constructor(errorOrErrors, value, field, type) {
    super();
    this.name = "ValidationError";
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach((err) => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ValidationError);
  }
}
const once = (cb) => {
  let fired = false;
  return (...args) => {
    if (fired)
      return;
    fired = true;
    cb(...args);
  };
};
function runTests(options, cb) {
  let {
    endEarly,
    tests,
    args,
    value,
    errors: errors2,
    sort,
    path
  } = options;
  let callback = once(cb);
  let count = tests.length;
  const nestedErrors = [];
  errors2 = errors2 ? errors2 : [];
  if (!count)
    return errors2.length ? callback(new ValidationError(errors2, value, path)) : callback(null, value);
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    test(args, function finishTestRun(err) {
      if (err) {
        if (!ValidationError.isError(err)) {
          return callback(err, value);
        }
        if (endEarly) {
          err.value = value;
          return callback(err, value);
        }
        nestedErrors.push(err);
      }
      if (--count <= 0) {
        if (nestedErrors.length) {
          if (sort)
            nestedErrors.sort(sort);
          if (errors2.length)
            nestedErrors.push(...errors2);
          errors2 = nestedErrors;
        }
        if (errors2.length) {
          callback(new ValidationError(errors2, value, path), value);
          return;
        }
        callback(null, value);
      }
    });
  }
}
var getNative$4 = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$1;
var defineProperty = _defineProperty;
function baseAssignValue$1(object2, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$1;
function createBaseFor$1(fromRight) {
  return function(object2, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object2;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$2.exports;
(function(module2, exports2) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports2 && !exports2.nodeType && exports2;
  var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module2.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var isBufferExports = isBuffer$2.exports;
var baseGetTag$1 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$1 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module2, exports2) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports2 && !exports2.nodeType && exports2;
  var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types2 = freeModule && freeModule.require && freeModule.require("util").types;
      if (types2) {
        return types2;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module2.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$3 = isArray_1, isBuffer$1 = isBufferExports, isIndex = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$3(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$4 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys$1(object2) {
  if (!isPrototype(object2)) {
    return nativeKeys(object2);
  }
  var result = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$2.call(object2, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength = isLength_1;
function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$3(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
}
var keys_1 = keys$3;
var baseFor = _baseFor, keys$2 = keys_1;
function baseForOwn$1(object2, iteratee) {
  return object2 && baseFor(object2, iteratee, keys$2);
}
var _baseForOwn = baseForOwn$1;
var ListCache$2 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$2();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array2, predicate) {
  var index2 = -1, length = array2 == null ? 0 : array2.length;
  while (++index2 < length) {
    if (predicate(array2[index2], index2, array2)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array2.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array2);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array2;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array2, other);
  stack.set(other, array2);
  while (++index2 < arrLength) {
    var arrValue = array2[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array2, stack) : customizer(arrValue, othValue, index2, array2, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array2);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$1 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$1;
function mapToArray$1(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$1 = _Symbol, Uint8Array = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag$1(object2, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
        return false;
      }
      object2 = object2.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array(object2), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object2, +other);
    case errorTag:
      return object2.name == other.name && object2.message == other.message;
    case regexpTag:
    case stringTag:
      return object2 == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object2.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object2);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object2, other);
      var result = equalArrays$1(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object2);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object2) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array2, values) {
  var index2 = -1, length = values.length, offset = array2.length;
  while (++index2 < length) {
    array2[offset + index2] = values[index2];
  }
  return array2;
}
var _arrayPush = arrayPush$1;
var arrayPush = _arrayPush, isArray$2 = isArray_1;
function baseGetAllKeys$1(object2, keysFunc, symbolsFunc) {
  var result = keysFunc(object2);
  return isArray$2(object2) ? result : arrayPush(result, symbolsFunc(object2));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array2, predicate) {
  var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array2[index2];
    if (predicate(value, index2, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter(nativeGetSymbols(object2), function(symbol) {
    return propertyIsEnumerable.call(object2, symbol);
  });
};
var _getSymbols = getSymbols$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object2) {
  return baseGetAllKeys(object2, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects$1(object2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object2);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object2;
  }
  var result = true;
  stack.set(object2, other);
  stack.set(other, object2);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object2[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object2.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object2);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$2 = getNative$1(root$1, "Set");
var _Set = Set$2;
var getNative = _getNative, root = _root;
var WeakMap$1 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
var getTag$1 = baseGetTag;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1()) != setTag || WeakMap && getTag$1(new WeakMap()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$1 = isArray_1, isBuffer = isBufferExports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object2, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object2), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object2)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object2, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object2 == null) {
    return !length;
  }
  object2 = Object(object2);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object2[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object2)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object2, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object2) {
  var result = keys(object2), length = result.length;
  while (length--) {
    var key = result[length], value = object2[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object2) {
    if (object2 == null) {
      return false;
    }
    return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object2) {
    return object2 === source || baseIsMatch(object2, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var castPath = _castPath, toKey$2 = _toKey;
function baseGet$2(object2, path) {
  path = castPath(path, object2);
  var index2 = 0, length = path.length;
  while (object2 != null && index2 < length) {
    object2 = object2[toKey$2(path[index2++])];
  }
  return index2 && index2 == length ? object2 : void 0;
}
var _baseGet = baseGet$2;
var baseGet$1 = _baseGet;
function get$1(object2, path, defaultValue) {
  var result = object2 == null ? void 0 : baseGet$1(object2, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
function baseHasIn$1(object2, key) {
  return object2 != null && key in Object(object2);
}
var _baseHasIn = baseHasIn$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object2, path) {
  return object2 != null && hasPath(object2, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get2 = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object2) {
    var objValue = get2(object2, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$1(value) {
  return value;
}
var identity_1 = identity$1;
function baseProperty$1(key) {
  return function(object2) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object2) {
    return baseGet(object2, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray = isArray_1, property = property_1;
function baseIteratee$1(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$1;
var baseAssignValue = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee = _baseIteratee;
function mapValues(object2, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object2, function(value, key, object3) {
    baseAssignValue(result, key, iteratee(value, key, object3));
  });
  return result;
}
var mapValues_1 = mapValues;
const mapValues$1 = /* @__PURE__ */ getDefaultExportFromCjs(mapValues_1);
function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function() {
  this._size = 0;
  this._values = /* @__PURE__ */ Object.create(null);
};
Cache.prototype.get = function(key) {
  return this._values[key];
};
Cache.prototype.set = function(key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values))
    this._size++;
  return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var propertyExpr = {
  Cache,
  split,
  normalizePath,
  setter: function(path) {
    var parts = normalizePath(path);
    return setCache.get(path) || setCache.set(path, function setter(obj, value) {
      var index2 = 0;
      var len = parts.length;
      var data = obj;
      while (index2 < len - 1) {
        var part = parts[index2];
        if (part === "__proto__" || part === "constructor" || part === "prototype") {
          return obj;
        }
        data = data[parts[index2++]];
      }
      data[parts[index2]] = value;
    });
  },
  getter: function(path, safe2) {
    var parts = normalizePath(path);
    return getCache.get(path) || getCache.set(path, function getter(data) {
      var index2 = 0, len = parts.length;
      while (index2 < len) {
        if (data != null || !safe2)
          data = data[parts[index2++]];
        else
          return;
      }
      return data;
    });
  },
  join: function(segments) {
    return segments.reduce(function(path, part) {
      return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
    }, "");
  },
  forEach: function(path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
  }
};
function normalizePath(path) {
  return pathCache.get(path) || pathCache.set(
    path,
    split(path).map(function(part) {
      return part.replace(CLEAN_QUOTES_REGEX, "$2");
    })
  );
}
function split(path) {
  return path.match(SPLIT_REGEX) || [""];
}
function forEach(parts, iter, thisArg) {
  var len = parts.length, part, idx, isArray2, isBracket;
  for (idx = 0; idx < len; idx++) {
    part = parts[idx];
    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }
      isBracket = isQuoted(part);
      isArray2 = !isBracket && /^\d+$/.test(part);
      iter.call(thisArg, part, isBracket, isArray2, idx, parts);
    }
  }
}
function isQuoted(str) {
  return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}
const prefixes = {
  context: "$",
  value: "."
};
class Reference {
  constructor(key, options = {}) {
    if (typeof key !== "string")
      throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && propertyExpr.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter)
      result = this.getter(result || {});
    if (this.map)
      result = this.map(result);
    return result;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}
Reference.prototype.__isYupRef = true;
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function createValidation(config2) {
  function validate(_ref, cb) {
    let {
      value,
      path = "",
      label: label2,
      options,
      originalValue,
      sync
    } = _ref, rest = _objectWithoutPropertiesLoose(_ref, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name: name3,
      test,
      params,
      message
    } = config2;
    let {
      parent,
      context
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = mapValues$1(_extends$1({
        value,
        originalValue,
        label: label2,
        path: overrides.path || path
      }, params, overrides.params), resolve);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name3);
      error.params = nextParams;
      return error;
    }
    let ctx = _extends$1({
      path,
      parent,
      type: name3,
      createError,
      resolve,
      options,
      originalValue
    }, rest);
    if (!sync) {
      try {
        Promise.resolve(test.call(ctx, value, ctx)).then((validOrError) => {
          if (ValidationError.isError(validOrError))
            cb(validOrError);
          else if (!validOrError)
            cb(createError());
          else
            cb(null, validOrError);
        });
      } catch (err) {
        cb(err);
      }
      return;
    }
    let result;
    try {
      var _ref2;
      result = test.call(ctx, value, ctx);
      if (typeof ((_ref2 = result) == null ? void 0 : _ref2.then) === "function") {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
      }
    } catch (err) {
      cb(err);
      return;
    }
    if (ValidationError.isError(result))
      cb(result);
    else if (!result)
      cb(createError());
    else
      cb(null, result);
  }
  validate.OPTIONS = config2;
  return validate;
}
let trim = (part) => part.substr(0, part.length - 1).substr(1);
function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path)
    return {
      parent,
      parentPath: path,
      schema
    };
  propertyExpr.forEach(path, (_part, isBracket, isArray2) => {
    let part = isBracket ? trim(_part) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    if (schema.innerType) {
      let idx = isArray2 ? parseInt(part, 10) : 0;
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = schema.innerType;
    }
    if (!isArray2) {
      if (!schema.fields || !schema.fields[part])
        throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema._type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
class ReferenceSet {
  constructor() {
    this.list = /* @__PURE__ */ new Set();
    this.refs = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const description2 = [];
    for (const item of this.list)
      description2.push(item);
    for (const [, ref] of this.refs)
      description2.push(ref.describe());
    return description2;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  add(value) {
    Reference.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
  }
  delete(value) {
    Reference.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
  }
  has(value, resolve) {
    if (this.list.has(value))
      return true;
    let item, values = this.refs.values();
    while (item = values.next(), !item.done)
      if (resolve(item.value) === value)
        return true;
    return false;
  }
  clone() {
    const next = new ReferenceSet();
    next.list = new Set(this.list);
    next.refs = new Map(this.refs);
    return next;
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.list.forEach((value) => next.add(value));
    newItems.refs.forEach((value) => next.add(value));
    removeItems.list.forEach((value) => next.delete(value));
    removeItems.refs.forEach((value) => next.delete(value));
    return next;
  }
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
class BaseSchema {
  constructor(options) {
    this.deps = [];
    this.conditions = [];
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = /* @__PURE__ */ Object.create(null);
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = (options == null ? void 0 : options.type) || "mixed";
    this.spec = _extends({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      presence: "optional"
    }, options == null ? void 0 : options.spec);
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  _typeCheck(_value) {
    return true;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec)
        Object.assign(this.spec, spec);
      return this;
    }
    const next = Object.create(Object.getPrototypeOf(this));
    next.type = this.type;
    next._typeError = this._typeError;
    next._whitelistError = this._whitelistError;
    next._blacklistError = this._blacklistError;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.exclusiveTests = _extends({}, this.exclusiveTests);
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(_extends({}, this.spec, spec));
    return next;
  }
  label(label2) {
    var next = this.clone();
    next.spec.label = label2;
    return next;
  }
  meta(...args) {
    if (args.length === 0)
      return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  // withContext<TContext extends AnyObject>(): BaseSchema<
  //   TCast,
  //   TContext,
  //   TOutput
  // > {
  //   return this as any;
  // }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this)
      return this;
    if (schema.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = _extends({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined._typeError || (combined._typeError = base._typeError);
    combined._whitelistError || (combined._whitelistError = base._whitelistError);
    combined._blacklistError || (combined._blacklistError = base._blacklistError);
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;
    combined.withMutation((next) => {
      schema.tests.forEach((fn) => {
        next.test(fn.OPTIONS);
      });
    });
    return combined;
  }
  isType(v) {
    if (this.spec.nullable && v === null)
      return true;
    return this._typeCheck(v);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((schema2, condition) => condition.resolve(schema2, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {*=} options.parent
   * @param {*=} options.context
   */
  cast(value, options = {}) {
    let resolvedSchema = this.resolve(_extends({
      value
    }, options));
    let result = resolvedSchema._cast(value, options);
    if (value !== void 0 && options.assert !== false && resolvedSchema.isType(result) !== true) {
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema._type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
    }
    return result;
  }
  _cast(rawValue, _options) {
    let value = rawValue === void 0 ? rawValue : this.transforms.reduce((value2, fn) => fn.call(this, value2, rawValue, this), rawValue);
    if (value === void 0) {
      value = this.getDefault();
    }
    return value;
  }
  _validate(_value, options = {}, cb) {
    let {
      sync,
      path,
      from = [],
      originalValue = _value,
      strict = this.spec.strict,
      abortEarly = this.spec.abortEarly
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, _extends({
        assert: false
      }, options));
    }
    let args = {
      value,
      path,
      options,
      originalValue,
      schema: this,
      label: this.spec.label,
      sync,
      from
    };
    let initialTests = [];
    if (this._typeError)
      initialTests.push(this._typeError);
    if (this._whitelistError)
      initialTests.push(this._whitelistError);
    if (this._blacklistError)
      initialTests.push(this._blacklistError);
    runTests({
      args,
      value,
      path,
      sync,
      tests: initialTests,
      endEarly: abortEarly
    }, (err) => {
      if (err)
        return void cb(err, value);
      runTests({
        tests: this.tests,
        args,
        path,
        sync,
        value,
        endEarly: abortEarly
      }, cb);
    });
  }
  validate(value, options, maybeCb) {
    let schema = this.resolve(_extends({}, options, {
      value
    }));
    return typeof maybeCb === "function" ? schema._validate(value, options, maybeCb) : new Promise((resolve, reject) => schema._validate(value, options, (err, value2) => {
      if (err)
        reject(err);
      else
        resolve(value2);
    }));
  }
  validateSync(value, options) {
    let schema = this.resolve(_extends({}, options, {
      value
    }));
    let result;
    schema._validate(value, _extends({}, options, {
      sync: true
    }), (err, value2) => {
      if (err)
        throw err;
      result = value2;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, (err) => {
      if (ValidationError.isError(err))
        return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err))
        return false;
      throw err;
    }
  }
  _getDefault() {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === "function" ? defaultValue.call(this) : clone(defaultValue);
  }
  getDefault(options) {
    let schema = this.resolve(options || {});
    return schema._getDefault();
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    var next = this.clone();
    next.spec.strict = isStrict;
    return next;
  }
  _isPresent(value) {
    return value != null;
  }
  defined(message = mixed.defined) {
    return this.test({
      message,
      name: "defined",
      exclusive: true,
      test(value) {
        return value !== void 0;
      }
    });
  }
  required(message = mixed.required) {
    return this.clone({
      presence: "required"
    }).withMutation((s2) => s2.test({
      message,
      name: "required",
      exclusive: true,
      test(value) {
        return this.schema._isPresent(value);
      }
    }));
  }
  notRequired() {
    var next = this.clone({
      presence: "optional"
    });
    next.tests = next.tests.filter((test) => test.OPTIONS.name !== "required");
    return next;
  }
  nullable(isNullable = true) {
    var next = this.clone({
      nullable: isNullable !== false
    });
    return next;
  }
  transform(fn) {
    var next = this.clone();
    next.transforms.push(fn);
    return next;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === "function") {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === void 0)
      opts.message = mixed.default;
    if (typeof opts.test !== "function")
      throw new TypeError("`test` is a required parameters");
    let next = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    if (opts.name)
      next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter((fn) => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive)
          return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test)
          return false;
      }
      return true;
    });
    next.tests.push(validate);
    return next;
  }
  when(keys2, options) {
    if (!Array.isArray(keys2) && typeof keys2 !== "string") {
      options = keys2;
      keys2 = ".";
    }
    let next = this.clone();
    let deps = toArray(keys2).map((key) => new Reference(key));
    deps.forEach((dep) => {
      if (dep.isSibling)
        next.deps.push(dep.key);
    });
    next.conditions.push(new Condition(deps, options));
    return next;
  }
  typeError(message) {
    var next = this.clone();
    next._typeError = createValidation({
      message,
      name: "typeError",
      test(value) {
        if (value !== void 0 && !this.schema.isType(value))
          return this.createError({
            params: {
              type: this.schema._type
            }
          });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message = mixed.oneOf) {
    var next = this.clone();
    enums.forEach((val) => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next._whitelistError = createValidation({
      message,
      name: "oneOf",
      test(value) {
        if (value === void 0)
          return true;
        let valids = this.schema._whitelist;
        return valids.has(value, this.resolve) ? true : this.createError({
          params: {
            values: valids.toArray().join(", ")
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    var next = this.clone();
    enums.forEach((val) => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next._blacklistError = createValidation({
      message,
      name: "notOneOf",
      test(value) {
        let invalids = this.schema._blacklist;
        if (invalids.has(value, this.resolve))
          return this.createError({
            params: {
              values: invalids.toArray().join(", ")
            }
          });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }
  describe() {
    const next = this.clone();
    const {
      label: label2,
      meta
    } = next.spec;
    const description2 = {
      meta,
      label: label2,
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map((fn) => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list) => list.findIndex((c) => c.name === n.name) === idx)
    };
    return description2;
  }
}
BaseSchema.prototype.__isYupSchema__ = true;
for (const method of ["validate", "validateSync"])
  BaseSchema.prototype[`${method}At`] = function(path, value, options = {}) {
    const {
      parent,
      parentPath,
      schema
    } = getIn(this, path, value, options.context);
    return schema[method](parent && parent[parentPath], _extends({}, options, {
      parent,
      path
    }));
  };
for (const alias of ["equals", "is"])
  BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;
for (const alias of ["not", "nope"])
  BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf;
BaseSchema.prototype.optional = BaseSchema.prototype.notRequired;
const isAbsent = (value) => value == null;
let rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = (value) => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create() {
  return new StringSchema();
}
class StringSchema extends BaseSchema {
  constructor() {
    super({
      type: "string"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value))
          return value;
        if (Array.isArray(value))
          return value;
        const strValue = value != null && value.toString ? value.toString() : value;
        if (strValue === objStringTag)
          return value;
        return strValue;
      });
    });
  }
  _typeCheck(value) {
    if (value instanceof String)
      value = value.valueOf();
    return typeof value === "string";
  }
  _isPresent(value) {
    return super._isPresent(value) && !!value.length;
  }
  length(length, message = string.length) {
    return this.test({
      message,
      name: "length",
      exclusive: true,
      params: {
        length
      },
      test(value) {
        return isAbsent(value) || value.length === this.resolve(length);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value.length >= this.resolve(min);
      }
    });
  }
  max(max, message = string.max) {
    return this.test({
      name: "max",
      exclusive: true,
      message,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name3;
    if (options) {
      if (typeof options === "object") {
        ({
          excludeEmptyString = false,
          message,
          name: name3
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name3 || "matches",
      message: message || string.matches,
      params: {
        regex
      },
      test: (value) => isAbsent(value) || value === "" && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: "email",
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: "url",
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: "uuid",
      message,
      excludeEmptyString: false
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((val) => val === null ? "" : val);
  }
  trim(message = string.trim) {
    return this.transform((val) => val != null ? val.trim() : val).test({
      message,
      name: "trim",
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform((value) => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      test: (value) => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform((value) => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      test: (value) => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create.prototype = StringSchema.prototype;
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date2) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11], minutesOffset = 0, timestamp2, struct;
  if (struct = isoReg.exec(date2)) {
    for (var i = 0, k; k = numericKeys[i]; ++i)
      struct[k] = +struct[k] || 0;
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
    if ((struct[8] === void 0 || struct[8] === "") && (struct[9] === void 0 || struct[9] === ""))
      timestamp2 = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
    else {
      if (struct[8] !== "Z" && struct[9] !== void 0) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === "+")
          minutesOffset = 0 - minutesOffset;
      }
      timestamp2 = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else
    timestamp2 = Date.parse ? Date.parse(date2) : NaN;
  return timestamp2;
}
let invalidDate = /* @__PURE__ */ new Date("");
let isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
class DateSchema extends BaseSchema {
  constructor() {
    super({
      type: "date"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value))
          return value;
        value = parseIsoDate(value);
        return !isNaN(value) ? new Date(value) : invalidDate;
      });
    });
  }
  _typeCheck(v) {
    return isDate(v) && !isNaN(v.getTime());
  }
  prepareParam(ref, name3) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast))
        throw new TypeError(`\`${name3}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, "min");
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    var limit = this.prepareParam(max, "max");
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
var toposort$1 = { exports: {} };
toposort$1.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges);
};
toposort$1.exports.array = toposort;
function toposort(nodes, edges) {
  var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (i--) {
    if (!visited[i])
      visit(nodes[i], i, /* @__PURE__ */ new Set());
  }
  return sorted;
  function visit(node, i2, predecessors) {
    if (predecessors.has(node)) {
      var nodeRep;
      try {
        nodeRep = ", node was:" + JSON.stringify(node);
      } catch (e) {
        nodeRep = "";
      }
      throw new Error("Cyclic dependency" + nodeRep);
    }
    if (!nodesHash.has(node)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
    }
    if (visited[i2])
      return;
    visited[i2] = true;
    var outgoing = outgoingEdges.get(node) || /* @__PURE__ */ new Set();
    outgoing = Array.from(outgoing);
    if (i2 = outgoing.length) {
      predecessors.add(node);
      do {
        var child = outgoing[--i2];
        visit(child, nodesHash.get(child), predecessors);
      } while (i2);
      predecessors.delete(node);
    }
    sorted[--cursor] = node;
  }
}
function uniqueNodes(arr) {
  var res = /* @__PURE__ */ new Set();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    res.add(edge[0]);
    res.add(edge[1]);
  }
  return Array.from(res);
}
function makeOutgoingEdges(arr) {
  var edges = /* @__PURE__ */ new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    if (!edges.has(edge[0]))
      edges.set(edge[0], /* @__PURE__ */ new Set());
    if (!edges.has(edge[1]))
      edges.set(edge[1], /* @__PURE__ */ new Set());
    edges.get(edge[0]).add(edge[1]);
  }
  return edges;
}
function makeNodesHash(arr) {
  var res = /* @__PURE__ */ new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i);
  }
  return res;
}
const strapi = {
  id: "ckeditor5",
  name: "CKEditor5",
  description: "CKEditor for strapi v5",
  kind: "plugin",
  type: "richtext"
};
const PluginIcon = "data:image/svg+xml,%3csvg%20width='1em'%20height='1em'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2021%2024'%3e%3cpath%20d='M15.34%2014.18Z'%20fill='%23141A25'/%3e%3cpath%20d='M15.04%2016.726a3.98%203.98%200%200%200-1.535.524%203.96%203.96%200%200%200-1.402%201.364c-.108.18-.716%201.347-.716%201.347l-2.09%203.82.022.016c.097.063.2.116.308.159.317.113.65.175.987.18%201.264.058%202.529-.016%203.793-.007.725.023%201.45.005%202.172-.053.348-.017.687-.117.99-.29.31-.178.576-.423.78-.717.138-.205.283-.407.409-.62.6-1.02%201.199-2.043%201.794-3.065.187-.321.37-.644.555-.966l.281-.481c.236-.392.367-.838.381-1.294l-3.258.057s-3.147-.012-3.472.026Zm2.764.903Z'%20fill='%23AFE229'%20/%3e%3cpath%20d='M18.828%2015.666a.195.195%200%200%200%200%200Z'%20fill='%23771BFF'/%3e%3cpath%20d='m7.12%2022.61%201.901-3.477.46-.877c-.31-.168-.614-.35-.918-.528-.866-.508-1.766-.957-2.613-1.498a2.459%202.459%200%200%201-.609-.517c-.27-.336-.341-.736-.362-1.15-.052-1.022-.003-2.045-.02-3.068-.01-.487%200-.975.005-1.462.01-.806.384-1.382%201.069-1.783L8.115%207.03c.55-.322%201.102-.642%201.654-.961.127-.073.263-.13.395-.192.68-.321%201.298-.119%201.9.213.039.02.075.045.112.068.306.149.605.313.895.491.794.445%201.587.893%202.378%201.343.239.139.469.292.688.458.485.36.636.875.666%201.445.039.71.017%201.422.013%202.134-.002.698.01%201.396.003%202.094%201.478-.006%203.146%200%203.146%200l1.807-.032c-.006-.73-.016-1.46-.017-2.19%200-1.31.037-2.62-.039-3.928-.061-1.05-.34-2-1.232-2.666a12.549%2012.549%200%200%200-1.264-.848c-1.454-.834-2.91-1.664-4.37-2.49-.545-.308-1.067-.659-1.644-.91-.069-.043-.135-.089-.205-.128-1.106-.613-2.24-.992-3.485-.405-.242.115-.49.218-.723.352-1.011.58-2.02%201.166-3.026%201.757-1.271.744-2.54%201.488-3.81%202.234C.705%205.602.025%206.66.012%208.144c-.008.897-.02%201.794%200%202.691.039%201.884-.045%203.77.058%205.652.042.761.174%201.499.672%202.12.32.377.698.7%201.121.956%201.556%201.001%203.209%201.835%204.8%202.775l.457.271Z'%20fill='%23771BFF'%20/%3e%3c/svg%3e";
const RegisterOptions = {
  pluginId: strapi.id,
  name: strapi.name,
  type: strapi.type,
  icon: () => /* @__PURE__ */ jsxRuntime.jsx("img", { src: PluginIcon, style: { width: 24, height: 24 }, alt: "plugin image" }),
  intlLabel: {
    id: `${strapi.id}.label`,
    defaultMessage: strapi.name
  },
  intlDescription: {
    id: `${strapi.id}.description`,
    defaultMessage: "The rich text editor for every use case"
  },
  components: {
    Input: async () => await Promise.resolve().then(() => require("./index-PePR_V1R.js")).then((module2) => ({ default: module2.CKEditorInput }))
  },
  options: {
    base: [
      {
        intlLabel: {
          id: `${strapi.id}.preset.label`,
          defaultMessage: "Choose editor version"
        },
        description: {
          id: `${strapi.id}.preset.description`,
          defaultMessage: "Do you need more or less features?"
        },
        name: "options.preset",
        type: "select",
        defaultValue: "standard",
        options: [
          {
            key: "light",
            value: "light",
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.preset.light.label`,
                defaultMessage: "Light version"
              }
            }
          },
          {
            key: "standard",
            value: "standard",
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.preset.standard.label`,
                defaultMessage: "Standard version"
              }
            }
          },
          {
            key: "rich",
            value: "rich",
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.preset.rich.label`,
                defaultMessage: "Rich version"
              }
            }
          }
        ]
      },
      {
        intlLabel: {
          id: `${strapi.id}.output.label`,
          defaultMessage: "Choose output type"
        },
        description: {
          id: `${strapi.id}.output.description`,
          defaultMessage: "Decide, whether you want to get your output in HTML or Markdown"
        },
        name: "options.output",
        type: "select",
        defaultValue: "HTML",
        options: [
          {
            key: "html",
            value: "HTML",
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.output.html.label`,
                defaultMessage: "HTML"
              }
            }
          },
          {
            key: "markdown",
            value: "Markdown",
            metadatas: {
              intlLabel: {
                id: `${strapi.id}.output.markdown.label`,
                defaultMessage: "Markdown"
              }
            }
          }
        ]
      }
    ],
    advanced: [
      {
        sectionTitle: null,
        items: [
          {
            name: "required",
            type: "checkbox",
            intlLabel: {
              id: `${strapi.id}.required.label`,
              defaultMessage: "Required field"
            },
            description: {
              id: `${strapi.id}.required.description`,
              defaultMessage: "You won't be able to create an entry if this field is empty"
            }
          },
          // Note: We can't call it simply "maxLength" because then Strapi
          // applies this to the length of HTML string automatically.
          // We want to apply this to the number of characters in the editor,
          // hence – a unique name.
          {
            name: "options.maxLengthCharacters",
            type: "checkbox-with-number-field",
            intlLabel: {
              id: `${strapi.id}.maxLength.label`,
              defaultMessage: "Maximum length (characters)"
            }
          }
        ]
      }
    ],
    validator: () => ({
      preset: create().required({
        id: `${strapi.id}.preset.error.required`,
        defaultMessage: "Editor preset is required"
      })
    })
  }
};
class CKEditorPlugin {
  logger;
  constructor() {
    this.logger = winston.createLogger();
  }
  register = (app) => {
    app.customFields.register(RegisterOptions);
  };
  registerTrads = async ({ locales }) => {
    const promises = locales.map(async (locale) => {
      try {
        const { default: data } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => Promise.resolve().then(() => require("./en-DJjl48L6.js")) }), `./translations/${locale}.json`);
        return {
          data,
          locale
        };
      } catch (error) {
        this.logger.error(error);
        return {
          data: {},
          locale
        };
      }
    });
    return await Promise.all(promises);
  };
}
const index = new CKEditorPlugin();
exports.index = index;
exports.strapi = strapi;
//# sourceMappingURL=index-DO7oVz1R.js.map
