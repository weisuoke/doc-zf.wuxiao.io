(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[84],{QBNy:function(n,t,e){"use strict";e.r(t);var o=e("q1tI"),a=e.n(o),s=e("dEAq"),r=e("H1Ra"),i=a.a.memo((n=>{n.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u5b9e\u73b0-hookmap-\u548c-stage-\u548c-before"},a.a.createElement(s["AnchorLink"],{to:"#\u5b9e\u73b0-hookmap-\u548c-stage-\u548c-before","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0 hookMap \u548c stage \u548c before"),a.a.createElement("p",null,a.a.createElement("strong",null,"tapable/AsyncParallelHook.js")),a.a.createElement(r["a"],{code:"const Hook = require('./Hook')\nconst HookCodeFactory = require('./HookCodeFactory')\n\nclass AsyncParallelHookCodeFactory extends HookCodeFactory {\n  // \u83b7\u53d6\u4e8b\u4ef6\u51fd\u6570\u6267\u884c\u7684\u4ee3\u7801\u9700\u8981\u52a8\u6001\u7684\u521b\u5efa\n+  content({ onDone }) {\n+    return this.callTapsParallel({ onDone })\n  }\n}\n\nconst factory = new AsyncParallelHookCodeFactory();\n\nclass AsyncParallelHook extends Hook {\n  compile(options) {\n    // \u5c31\u662f\u7ed9 hook._x \u8d4b\u503c\u4e3a\u4e8b\u4ef6\u51fd\u6570\u7684\u6570\u7ec4\n    factory.setup(this, options)\n    // \u5f00\u59cb\u6839\u636e options{taps, args, type} \u521b\u5efa call \u51fd\u6570 new Function\n    return factory.create(options)\n  }\n}\n\nmodule.exports = AsyncParallelHook",lang:"diff"}),a.a.createElement("p",null,a.a.createElement("strong",null,"src/Hook.js")),a.a.createElement(r["a"],{code:"class Hook {\n  constructor(args) {\n    // \u4e8b\u4ef6\u56de\u8c03\u53c2\u6570\u7684\u51fd\u6570\u5217\u8868\u6570\u7ec4\n    this.args = args;\n    // \u653e\u7f6e\u6240\u6709\u7684\u4e8b\u4ef6\u51fd\u6570\u5bf9\u8c61 [{ type: 'sync', fn, name: ''}]\n    this.taps = [];\n    this._x = null; // [fn]\n    this.call = CALL_DELEGATE;\n    this.callAsync = CALL_ASYNC_DELEGATE;\n+    this.promise = PROMISE_DELEGATE;\n+    this.interceptors = []; // \u62e6\u622a\u5668\u7684\u6570\u7ec4\n  }\n+  intercept(interceptor) {\n+    this.interceptors.push(interceptor)\n+  }\n  tap(options, fn) {\n    this._tap('sync', options, fn);\n  }\n  tapAsync(options, fn) {\n    this._tap('async', options, fn);\n  }\n+  tapPromise(options, fn) {\n+    this._tap('promise', options, fn)\n+  }\n  _tap(type, options, fn) {\n    if (typeof options === 'string') {\n      options = { name: options }\n    }\n    let tapInfo = {...options, type, fn};\n+    this._runRegisterInterceptors(tapInfo);\n    this._insert(tapInfo)\n  }\n+  _runRegisterInterceptors(tapInfo) {\n+    for (const interceptor of this.interceptors) {\n+      if (interceptor.register) {\n+        interceptor.register(tapInfo)\n+      }\n+    }\n+  }\n  _insert(tapInfo) {\n+    let before;\n+    if (typeof tapInfo.before === 'string') {\n+      before = new Set([tapInfo.before])\n+    } else if (Array.isArray(tapInfo.before)) {\n+      before = new Set(tapInfo.before)\n+    }\n+    let stage = 0;\n+    if (typeof tapInfo.stage === 'number') {\n+      stage = tapInfo.stage;\n+    }\n+    let i = this.taps.length;\n+    while (i > 0) {\n+      i--;\n+      const x = this.taps[i];\n+      this.taps[i + 1] = x;\n+      const xStage = x.stage || 0;\n+      if (before) {\n+        if (before.has(x.name)) {\n+          before.delete(x.name);\n+          continue;\n+        }\n+        if (before.size > 0) {\n+          continue;\n+        }\n+      }\n+      if (xStage > stage) {\n+        continue;\n+      }\n+      i++;\n+      break;\n+    }\n+    this.taps[i] = tapInfo;\n+    // this.taps.push(tapInfo);\n+  }\n  compile() {\n    throw new Error('\u62bd\u8c61\u65b9\u6cd5\uff0c\u5fc5\u987b\u7531\u5b50\u7c7b\u53bb\u5b9e\u73b0')\n  }\n  _createCall(type) {\n    return this.compile({\n      taps: this.taps,  // \u4e8b\u4ef6\u51fd\u6570\n      args: this.args,  // \u53c2\u6570\n      type, // \u94a9\u5b50\u7c7b\u578b\n+      interceptors: this.interceptors\n    })\n  }\n}\n\nconst CALL_DELEGATE = function (...args) {\n  this.call = this._createCall('sync');\n  // this \u662f hook \u5b9e\u4f8b\uff0c\u6211\u7528 this \u8c03\u7528 call \u65b9\u6cd5\uff0ccall \u91cc\u9762\u7684 this \u80af\u5b9a\u662f\u6307\u5411 hook \u5b9e\u4f8b\u7684\n  return this.call(...args)\n}\n\nconst CALL_ASYNC_DELEGATE = function (...args) {\n  this.callAsync = this._createCall('async');\n  return this.callAsync(...args)\n}\n\n+ const PROMISE_DELEGATE = function (...args) {\n+   this.promise = this._createCall('promise');\n+   return this.promise(...args)\n+ }\n\nmodule.exports = Hook",lang:"diff"}),a.a.createElement("p",null,a.a.createElement("strong",null,"tapable/HookCodeFactory.js")),a.a.createElement(r["a"],{code:"class HookCodeFactory {\n  setup(hook, options) {\n    // \u628a\u4e8b\u4ef6\u51fd\u6570\u5bf9\u8c61\u4e2d\u7684\u51fd\u6570\u53d6\u51fa\u6765\uff0c\u62fc\u6210\u4e00\u4e2a\u6570\u7ec4\u4f20\u9012\u7ed9 hook._x\n    hook._x = options.taps.map(tap => tap.fn)\n  }\n\n  args(options = {}) {\n    let { before, after } = options\n    let allArgs = this.options.args;\n    if (before) allArgs = [before, ...allArgs]\n    if (after) allArgs = [...allArgs, after]\n    return allArgs.join(',')\n  }\n\n  init(options) {\n    this.options = options;\n  }\n\n  deInit() {\n    this.options = null;\n  }\n\n+  header() {\n+    let code = '';\n+    code += `var _x = this._x \\n`;\n+    let interceptors = this.options.interceptors;\n+    if (interceptors.length > 0) {\n+      code += `var _taps = this.taps;\\n`;\n+      code += `var _interceptors = this.interceptors;\\n`;\n+      for (let i = 0; i < interceptors.length; i++) {\n+        let interceptor = interceptors[i];\n+        if (interceptor.call) {\n+          code += `_interceptors[${i}].call(${this.args()}); \\n`\n+        }\n+      }\n+    }\n+\n+    return code;\n+  }\n\n  /**\n   * \u52a8\u6001\u521b\u5efa\u51fd\u6570\n   * @param options\n   *  taps tapInfo \u6570\u7ec4\n   *  args \u53c2\u6570\u6570\u7ec4\n   *  type \u6ce8\u518c\u7c7b\u578b\n   */\n  create(options) {\n    this.init(options)\n    let { type } = options;\n    let fn;\n    switch (type) {\n      case 'sync':\n        fn = new Function(\n          this.args(),  // name, age\n          this.header() + this.content()\n        );\n        break;\n      case 'async':\n        fn = new Function(\n          this.args({ after: '_callback' }),  // name, age\n+          this.header() + this.content({ onDone: () => `_callback();\\n` })\n        );\n        break;\n+      case 'promise':\n+        let taps = this.options.taps\n+        let tapsContent = this.content({ onDone: () => `_resolve();\\n` })\n+        let content = `\n+          return new Promise((function (_resolve) {\n+            ${tapsContent}\n+          }))\n+        `\n+        fn = new Function(\n+          this.args(),  // name, age\n+          this.header() + content\n+        )\n+        break;\n      default:\n        break;\n    }\n    return fn;\n  }\n\n  callTapsSeries() {\n    let taps = this.options.taps;\n    if (taps.length === 0) {\n      return ''\n    }\n    let code = '';\n    for (let i = 0; i < taps.length; i++) {\n      let content = this.callTap(i);\n      code += content;\n    }\n    return code;\n  }\n\n+  callTapsParallel({ onDone }) {\n    let taps = this.options.taps;\n    let code = `var _counter = ${taps.length};\\n`\n    code += `\n      var _done = (function() {\n+        ${onDone()}\n      })\n    `\n\n    for (let i = 0; i < taps.length; i++) {\n      let content = this.callTap(i);\n      code += content;\n    }\n    return code;\n  }\n\n  callTap(tapIndex) {\n    let code = ''\n+    let interceptors = this.options.interceptors;\n+    if (interceptors.length > 0) {\n+      code += `var _tap${tapIndex} = _taps[${tapIndex}];\\n`;\n+      for (let i = 0; i < interceptors.length; i++) {\n+        code += `_interceptors[${i}].tap(_tap${tapIndex});\\n`\n+      }\n+    }\n+\n    code += `var _fn${tapIndex} = _x[${tapIndex}];`;\n\n    let tapInfo = this.options.taps[tapIndex]\n    switch (tapInfo.type) {\n      case 'sync':\n        code += `_fn${tapIndex}(${this.args()})\\n`;\n        break;\n      case 'async':\n        code += `\n          _fn${tapIndex}(${this.args({\n            after: `\n              function() {\n                if (--_counter === 0) _done();\n              }\n            `\n          })});\n        `\n        break;\n+      case 'promise':\n+        code += `\n+          var _promise${tapIndex} = _fn${tapIndex}(${this.args()});\n+          _promise${tapIndex}.then((function () {\n+            if (--_counter === 0) _done();\n+          }))\n+        `\n+        break;\n      default:\n        break;\n    }\n    return code;\n  }\n}\n\nmodule.exports = HookCodeFactory",lang:"diff"})))}));t["default"]=n=>{var t=a.a.useContext(s["context"]),e=t.demos;return a.a.useEffect((()=>{var t;null!==n&&void 0!==n&&null!==(t=n.location)&&void 0!==t&&t.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),a.a.createElement(i,{demos:e})}}}]);