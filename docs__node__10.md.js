(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"0Q53":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),o=t("dEAq"),i=t("H1Ra"),c=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"generator-\u4f7f\u7528\u548c\u5b9e\u73b0"},a.a.createElement(o["AnchorLink"],{to:"#generator-\u4f7f\u7528\u548c\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Generator \u4f7f\u7528\u548c\u5b9e\u73b0"),a.a.createElement("h2",{id:"promisify-\u7684\u5b9e\u73b0"},a.a.createElement(o["AnchorLink"],{to:"#promisify-\u7684\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Promisify \u7684\u5b9e\u73b0"),a.a.createElement("p",null,"13.promisify.js"),a.a.createElement(i["a"],{code:"const fs = require('fs');  // \u5982\u679c\u5c06\u4e0d\u662fpromise\u7684\u5f02\u6b65api\u8f6c\u6362\u6210promise\n\n// const util = require('util');\n\nfunction promisify(fn) {  // \u9ad8\u9636\u51fd\u6570\n  return function (...args) {\n    return new Promise((resolve, reject) => {\n      fn(...args, function(err, data) {  // node \u6240\u6709\u7684 api \u7b2c\u4e00\u4e2a\u53c2\u6570\u90fd\u662f error\n        if (err) return reject(err)\n        resolve(data)\n      })\n    })\n  }\n}\n\nfunction promisifyAll(obj) {  // \u91cd\u5199\u5bf9\u8c61\u4e2d\u7684\u65b9\u6cd5\n  for (let key in obj) {\n    if (typeof obj[key] === 'function') {\n      obj[key] = promisify(obj[key])\n    }\n  }\n  return obj\n}\n\nlet read = promisify(fs.readFile)\nlet newFs = promisifyAll(fs)\n\nread('name.txt', 'utf8').then(data => {\n  console.log('data', data)\n}).catch(e => {\n  console.log('err', e)\n})\n\nnewFs.readFile('12.note.md', 'utf8').then(data => {\n  console.log('data', data)\n}).catch(e => {\n  console.log('err', e)\n})",lang:"js"}),a.a.createElement("h2",{id:"promise-race-\u5b9e\u73b0"},a.a.createElement(o["AnchorLink"],{to:"#promise-race-\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Promise Race \u5b9e\u73b0"),a.a.createElement(i["a"],{code:"// race \u65b9\u6cd5 \u8d5b\u8dd1 \u8c03\u7528\u7684\u5217\u8868\u4e2d\u4efb\u4f55\u4e00\u4e2a\u6210\u529f\u6216\u5931\u8d25 \u5c31\u91c7\u7528\u4ed6\u7684\u7ed3\u679c\nconst fs = require('fs').promises;\n\nPromise.race = function (promises) {\n  return new Promise((resolve, reject) => {\n    for (let promise of promises) {\n      if (promise && typeof promise.then === 'function') {\n        promise.then(resolve, reject)\n      } else {\n        resolve(promise)\n      }\n    }\n  })\n}\n\nPromise.race([fs.readFile('age.txt', 'utf8'), fs.readFile('age1.txt', 'utf8')]).then(data => {\n  console.log('data', data)\n}, err => {\n  console.log(\"err\", err)\n})\n\n// \u6211\u5e0c\u671b\u4e2d\u65ad promise \u7684\u94fe\u5f0f\u8c03\u7528\nPromise.resolve(1).then(data => {\n  console.log(data)\n  return new Promise(() => {})  // \u8fd4\u56de\u4e00\u4e2a promise\uff0c\u4f1a\u91c7\u7528\u4ed6\u7684\u72b6\u6001\uff0c\u5982\u679c\u4e0d\u6210\u529f\u4e5f\u4e0d\u5931\u8d25\uff0c\u5c31\u4e0d\u4f1a\u5411\u4e0b\u6267\u884c\u4e86\n}).then(data => {\n  console.log(data)\n})",lang:"js"}),a.a.createElement("h2",{id:"generator\u4f7f\u7528"},a.a.createElement(o["AnchorLink"],{to:"#generator\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"generator\u4f7f\u7528"),a.a.createElement("p",null,"15.generator.js"),a.a.createElement(i["a"],{code:"// \u65b9\u6cd5\u78b0\u5230 yield \u5c31\u505c\u6b62\nfunction* read() {  // \u8868\u793a\u4ed6\u662f\u4e00\u4e2a generator \u51fd\u6570\uff0c\u53ef\u4ee5\u5c06\u51fd\u6570\u5207\u6210\u82e5\u5e72\u4e2a\u90e8\u5206\n  const a = yield 1;\n  const b = yield 2;\n  const c = yield 3;\n} // generator \u8fd4\u56de\u7684\u7ed3\u679c\u662f\u4e00\u4e2a Iterator \u80fd\u88ab\u4e0d\u505c\u8c03\u7528 next \u6765\u8fdb\u884c\u8fed\u4ee3\u7684\n\nconsole.dir(read().next())\n\nlet it = read();\nconsole.log([...it])\n\nconsole.log([...{\n  0: 1,\n  1: 2,\n  2: 3,\n  length: 3,\n  [Symbol.iterator]: function () {\n    let arr = this\n    let index = 0\n    return {\n      next() {  // \u8fed\u4ee3\u65f6\u4f1a\u8c03\u7528 next \u65b9\u6cd5\uff0c\u5fc5\u987b\u8981\u8fd4\u56de\u4e24\u4e2a\u5c5e\u6027 {value, done}\n        return {value: arr[index], done: index++ === arr.length}\n      }\n    }\n  }\n}])",lang:"js"}),a.a.createElement("h2",{id:"babel-\u7f16\u8bd1-generator-\u51fd\u6570"},a.a.createElement(o["AnchorLink"],{to:"#babel-\u7f16\u8bd1-generator-\u51fd\u6570","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"babel \u7f16\u8bd1 generator \u51fd\u6570"),a.a.createElement("p",null,"\u4f7f\u7528 babeljs.io \u5728\u7ebf\u7f16\u8bd1\u4e0b\u9762\u4ee3\u7801"),a.a.createElement(i["a"],{code:"function* read() {  // \u8868\u793a\u4ed6\u662f\u4e00\u4e2a generator \u51fd\u6570\uff0c\u53ef\u4ee5\u5c06\u51fd\u6570\u5207\u6210\u82e5\u5e72\u4e2a\u90e8\u5206\n  const a = yield 1;\n  const b = yield 2;\n  const c = yield 3;\n} // generator \u8fd4\u56de\u7684\u7ed3\u679c\u662f\u4e00\u4e2a Iterator \u80fd\u88ab\u4e0d\u505c\u8c03\u7528 next \u6765\u8fdb\u884c\u8fed\u4ee3\u7684",lang:"js"}),a.a.createElement("p",null,"\u5f97\u5230\u7684\u7ed3\u679c\u662f"),a.a.createElement(i["a"],{code:'"use strict";\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(read);\n\nfunction read() {\n  var a, b, c;\n  return regeneratorRuntime.wrap(function read$(_context) {\n    while (1) { // \u8fd9\u4e2a while \u662f\u7528\u6765\u6807\u8bc6\u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u6b62\u6267\u884c\u4e00\u6b21\uff0c\u65b9\u6cd5\u4f1a\u591a\u6b21\u6267\u884c\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return 1;\n\n        case 2:\n          a = _context.sent;\n          _context.next = 5;\n          return 2;\n\n        case 5:\n          b = _context.sent;\n          _context.next = 8;\n          return 3;\n\n        case 8:\n          c = _context.sent;\n\n        case 9:\n        case "end":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}',lang:"js"}),a.a.createElement("h2",{id:"\u5b9e\u73b0-regeneratorruntime"},a.a.createElement(o["AnchorLink"],{to:"#\u5b9e\u73b0-regeneratorruntime","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0 regeneratorRuntime"),a.a.createElement(i["a"],{code:"let regeneratorRuntime = {\n  mark(genFn) { // \u6ca1\u5565\u7528\n    return genFn\n  },\n  wrap(iterator) {\n    const context = {\n      next: 0,\n      done: false,  // \u8868\u793a\u8fed\u4ee3\u5668\u6ca1\u6709\u6267\u884c\u5b8c\u6bd5\n      stop() {\n        context.done = true;  // \u8868\u793a\u6574\u4e2a\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\n      },\n      sent: null\n    }\n    let it = {}\n    it.next = function(value) { // \u6b64 value \u4f1a\u4f20\u9012\u7ed9\u4e0a\u4e00\u6b21 yield \u7684\u8fd4\u56de\u503c\n      context.sent = value;\n      let value2 = iterator(context)\n      return {\n        value: value2,\n        done: context.done\n      }\n    }\n    return it\n  }\n}",lang:"js"})))}));n["default"]=e=>{var n=a.a.useContext(o["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(c,{demos:t})}}}]);