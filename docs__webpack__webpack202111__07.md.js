(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{t2Zk:function(e,n,o){"use strict";o.r(n);var t=o("q1tI"),a=o.n(t),l=o("dEAq"),r=o("H1Ra"),c=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"commonjs\u52a0\u8f7des_module"},a.a.createElement(l["AnchorLink"],{to:"#commonjs\u52a0\u8f7des_module","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"COMMONJS\u52a0\u8f7dES_MODULE"),a.a.createElement("p",null,a.a.createElement("strong",null,"js\u52a0\u8f7d\u7684\u56db\u79cd\u60c5\u51b5")),a.a.createElement("ol",null,a.a.createElement("li",null,"commonjs + commonjs"),a.a.createElement("li",null,"commonjs + esm"),a.a.createElement("li",null,"esm + commonjs"),a.a.createElement("li",null,"esm + esm")),a.a.createElement("h2",{id:"commonjs--commonjs"},a.a.createElement(l["AnchorLink"],{to:"#commonjs--commonjs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Commonjs + Commonjs"),a.a.createElement(r["a"],{code:"(() => {\n    var __webpack_modules__ = ({\n      \"./src/title.js\":\n        ((__unused_webpack_module, exports) => {\n          exports.name = 'title_name'\n          exports.age = 'title_age'\n        })\n    });\n    var __webpack_module_cache__ = {};\n    function __webpack_require__(moduleId) {\n      var cachedModule = __webpack_module_cache__[moduleId];\n      if (cachedModule !== undefined) {\n        return cachedModule.exports;\n      }\n      var module = __webpack_module_cache__[moduleId] = {\n        exports: {}\n      };\n      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n      return module.exports;\n    }\n    var __webpack_exports__ = {};\n    (() => {\n      let title = __webpack_require__(\"./src/title.js\")\n      console.log(title.name)\n      console.log(title.age)\n    })();\n  })()\n    ;",lang:"js"}),a.a.createElement("h2",{id:"commonjs--esm"},a.a.createElement(l["AnchorLink"],{to:"#commonjs--esm","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Commonjs + ESM"),a.a.createElement(r["a"],{code:"var modules = {\n  './src/title.js': (module, exports, require) => {\n    // \u4e00\u65e6 webpack \u68c0\u6d4b\u5230\u4f60\u7684\u4ee3\u7801\u91cc\u6709 export \u548c import \u5173\u952e\u5b57\uff0c\u5b83\u5c31\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a ES Module\n    // ES \u6a21\u5757\u8f6c\u6362\u6210 COMMONJS \u4e4b\u540e\u6709\u54ea\u4e9b\u4e0d\u4e00\u6837\u7684\u5730\u65b9\uff1f\n    // exports.__esModule=true \u4f60\u53ef\u4ee5\u901a\u8fc7\u5b83\u6765\u5224\u65ad\u8f6c\u6362\u524d\u662f\u4e0d\u662f ES Module\n    require.r(exports)\n    // ES \u6a21\u5757\u9ed8\u8ba4\u5bfc\u51fa export default \u4f1a\u6302\u8f7d\u5230 exports.default \u4e0a\uff0c age \u4f1a\u6302\u8f7d\u5230 exports.age \u4e0a\n    require.d(exports, {\n      default: () => DEFAULT_EXPORT,\n      age: () => age\n    })\n\n    const DEFAULT_EXPORT = 'title_name';\n    const age = 'title_age'\n  }\n}\n\nvar cache = {};\nfunction require(moduleId) {\n  var cachedModule = cache[moduleId]\n  if (cachedModule !== undefined) {\n    return cachedModule.exports;\n  }\n\n  // \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6a21\u5757\n  var module = cache[moduleId] = {\n    exports: {}\n  }\n\n  // \u6267\u884c\u6a21\u5757\u5b9a\u4e49\u65b9\u6cd5\uff0c\u7ed9\u5bfc\u51fa\u5bf9\u8c61\u8d4b\u503c\n  modules[moduleId](module, module.exports, require);\n\n  // \u8fd4\u56de\u5bfc\u51fa\u5bf9\u8c61\n  return module.exports;\n}\n\nrequire.d = (exports, definition) => {\n  for (var key in definition) {\n    Object.defineProperty(exports, key, { get: definition[key] })\n  }\n}\n\nrequire.r = (exports) => {\n  // \u8868\u793a\u8fd9\u4e2a exports \u662f\u4e00\u4e2a ES \u6a21\u5757\u7684\u5bfc\u51fa\u5bf9\u8c61 [object Module]\n  Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});\n  // exports.__esModule = true\n  Object.defineProperty(exports, '__esModule', {value: true})\n}\n\nlet title = require('./src/title.js');\nconsole.log(title.default)\nconsole.log(title.age)",lang:"js"})))}));n["default"]=e=>{var n=a.a.useContext(l["context"]),o=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(c,{demos:o})}}}]);