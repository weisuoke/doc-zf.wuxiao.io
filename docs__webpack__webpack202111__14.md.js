(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{WpQk:function(e,n,r){},"dMo/":function(e,n,r){"use strict";var a=r("q1tI"),l=r.n(a),t=r("hKI/"),o=r.n(t);r("WpQk");function s(e,n){return m(e)||u(e,n)||i(e,n)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,n){if(e){if("string"===typeof e)return d(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,a=new Array(n);r<n;r++)a[r]=e[r];return a}function u(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,l,t=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(a=r.next()).done);o=!0)if(t.push(a.value),n&&t.length===n)break}catch(c){s=!0,l=c}finally{try{o||null==r["return"]||r["return"]()}finally{if(s)throw l}}return t}}function m(e){if(Array.isArray(e))return e}var p=function(e){var n=e.children,r=Object(a["useRef"])(),t=Object(a["useState"])(!1),c=s(t,2),i=c[0],d=c[1],u=Object(a["useState"])(!1),m=s(u,2),p=m[0],h=m[1];return Object(a["useEffect"])((function(){var e=r.current,n=o()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return n(),e.addEventListener("scroll",n),window.addEventListener("resize",n),function(){e.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:r,"data-left-folded":i||void 0,"data-right-folded":p||void 0},l.a.createElement("table",null,n)))};n["a"]=p},y4TA:function(e,n,r){"use strict";r.r(n);var a=r("q1tI"),l=r.n(a),t=r("dEAq"),o=r("H1Ra"),s=r("dMo/"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"loader\u7684\u5de5\u4f5c\u6d41"},l.a.createElement(t["AnchorLink"],{to:"#loader\u7684\u5de5\u4f5c\u6d41","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"loader\u7684\u5de5\u4f5c\u6d41"),l.a.createElement("h2",{id:"1loader"},l.a.createElement(t["AnchorLink"],{to:"#1loader","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.loader"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6240\u8c13 loader \u53ea\u662f\u4e00\u4e2a\u5bfc\u51fa\u4e3a\u51fd\u6570\u7684 JavaScript \u6a21\u5757\u3002\u5b83\u63a5\u6536\u4e0a\u4e00\u4e2a loader \u4ea7\u751f\u7684\u7ed3\u679c\u6216\u8005\u8d44\u6e90\u6587\u4ef6(resource file)\u4f5c\u4e3a\u5165\u53c2\u3002\u4e5f\u53ef\u4ee5\u7528\u591a\u4e2a loader \u51fd\u6570\u7ec4\u6210 loader chain"),l.a.createElement("li",null,"compiler \u9700\u8981\u5f97\u5230\u6700\u540e\u4e00\u4e2a loader \u4ea7\u751f\u7684\u5904\u7406\u7ed3\u679c\u3002\u8fd9\u4e2a\u5904\u7406\u7ed3\u679c\u5e94\u8be5\u662f String \u6216\u8005 Buffer\uff08\u88ab\u8f6c\u6362\u4e3a\u4e00\u4e2a string\uff09")),l.a.createElement("h3",{id:"11-loader-\u8fd0\u884c\u7684\u603b\u4f53\u6d41\u7a0b"},l.a.createElement(t["AnchorLink"],{to:"#11-loader-\u8fd0\u884c\u7684\u603b\u4f53\u6d41\u7a0b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.1 loader \u8fd0\u884c\u7684\u603b\u4f53\u6d41\u7a0b"),l.a.createElement("p",null,l.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-20-204117.png",alt:"webpackflowloader"})),l.a.createElement("h3",{id:"12-loader-runner"},l.a.createElement(t["AnchorLink"],{to:"#12-loader-runner","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2 loader-runner"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(t["Link"],{to:"https://github.com/webpack/loader-runner#readme"},"loader-runner"),"\u662f\u4e00\u4e2a\u6267\u884cloader\u94fe\u6761\u7684\u7684\u6a21\u5757")),l.a.createElement("p",null,l.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-20-204123.png",alt:"loader-runner2"})),l.a.createElement("h4",{id:"121-loader-\u7c7b\u578b"},l.a.createElement(t["AnchorLink"],{to:"#121-loader-\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.1 loader \u7c7b\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(t["Link"],{to:"https://github.com/webpack/webpack/blob/v4.39.3/lib/NormalModuleFactory.js#L159-L339"},"loader \u7684\u53e0\u52a0\u987a\u5e8f")," = post(\u540e\u7f6e)+inline(\u5185\u8054)+normal(\u6b63\u5e38)+pre(\u524d\u7f6e)")),l.a.createElement("h4",{id:"122-\u6267\u884c\u6d41\u7a0b"},l.a.createElement(t["AnchorLink"],{to:"#122-\u6267\u884c\u6d41\u7a0b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2 \u6267\u884c\u6d41\u7a0b"),l.a.createElement("h5",{id:"1221-runnerjs"},l.a.createElement(t["AnchorLink"],{to:"#1221-runnerjs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.1 runner.js"),l.a.createElement(o["a"],{code:'const { runLoaders } = require("loader-runner");\nconst path = require("path");\nconst fs = require("fs");//webpack-dev-server\u542f\u5f00\u53d1\u670d\u52a1\u5668\u7684\u65f6\u5019 memory-fs\nconst entryFile = path.resolve(__dirname, "src/index.js");\n//\u5982\u4f55\u914d\u7f6e\u884c\u5185\nlet request = `inline-loader1!inline-loader2!${entryFile}`;\nlet rules = [\n    {\n        test: /\\.js$/,\n        use: ["normal-loader1", "normal-loader2"],\n    },\n    {\n        test: /\\.js$/,\n        enforce: "post",\n        use: ["post-loader1", "post-loader2"],\n    },\n    {\n        test: /\\.js$/,\n        enforce: "pre",\n        use: ["pre-loader1", "pre-loader2"],\n    },\n];\nlet parts = request.replace(/^-?!+/, \'\').split(\'!\');\nlet resource = parts.pop();//\u5f39\u51fa\u6700\u540e\u4e00\u4e2a\u5143\u7d20 entryFile=src/index.js\nlet inlineLoaders = parts;//[inline-loader1,inline-loader2]\nlet preLoaders = [], postLoaders = [], normalLoaders = [];\nfor (let i = 0; i < rules.length; i++) {\n    let rule = rules[i];\n    if (rule.test.test(resource)) {\n        if (rule.enforce === \'pre\') {\n            preLoaders.push(...rule.use);\n        } else if (rule.enforce === \'post\') {\n            postLoaders.push(...rule.use);\n        } else {\n            normalLoaders.push(...rule.use);\n        }\n    }\n}\nlet loaders = [...postLoaders, ...inlineLoaders, ...normalLoaders, ...preLoaders];\nlet resolveLoader = loader => path.resolve(__dirname, \'loaders-chain\', loader)\n//\u628aloader\u6570\u7ec4\u4ece\u540d\u79f0\u53d8\u6210\u7edd\u5bf9\u8def\u5f84\nloaders = loaders.map(resolveLoader);\nrunLoaders({\n    resource,//\u4f60\u8981\u52a0\u8f7d\u7684\u8d44\u6e90\n    loaders,\n    context: { name: \'zhufeng\', age: 100 },//\u4fdd\u5b58\u4e00\u4e9b\u72b6\u6001\u548c\u503c\n    readResource: fs.readFile.bind(this)\n}, (err, result) => {\n    console.log(err);//\u8fd0\u884c\u9519\u8bef\n    console.log(result);//\u8fd0\u884c\u7684\u7ed3\u679c\n    console.log(result.resourceBuffer ? result.resourceBuffer.toString(\'utf8\') : null);//\u8bfb\u5230\u7684\u539f\u59cb\u7684\u6587\u4ef6\n});',lang:"js"}),l.a.createElement("h5",{id:"1222-pre-loader1js"},l.a.createElement(t["AnchorLink"],{to:"#1222-pre-loader1js","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.2 pre-loader1.js"),l.a.createElement("p",null,"loaders\\pre-loader1.js"),l.a.createElement(o["a"],{code:'function loader(source) {\n  console.log("pre1");\n  return source + "//pre1";\n}\nmodule.exports = loader;',lang:"js"}),l.a.createElement("h5",{id:"1223-pre-loader2js"},l.a.createElement(t["AnchorLink"],{to:"#1223-pre-loader2js","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.3 pre-loader2.js"),l.a.createElement("p",null,"loaders\\pre-loader2.js"),l.a.createElement(o["a"],{code:'function loader(source) {\n  console.log("pre2");\n  return source + "//pre2";\n}\nmodule.exports = loader;',lang:"js"}),l.a.createElement("h5",{id:"1224-normal-loader1js"},l.a.createElement(t["AnchorLink"],{to:"#1224-normal-loader1js","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.4 normal-loader1.js"),l.a.createElement("p",null,"loaders\\normal-loader1.js"),l.a.createElement(o["a"],{code:'function loader(source) {\n  console.log("normal1");\n  return source + "//normal1";\n}\nloader.pitch = function(){\n  return \'normal1pitch\';\n}\nmodule.exports = loader;',lang:"js"}),l.a.createElement("h5",{id:"1225-normal-loader2js"},l.a.createElement(t["AnchorLink"],{to:"#1225-normal-loader2js","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.5 normal-loader2.js"),l.a.createElement("p",null,"loaders\\normal-loader2.js"),l.a.createElement(o["a"],{code:'function loader(source) {\n  console.log("normal2");\n  return source + "//normal2";\n}\n/* loader.pitch = function(){\n  return \'normal-loader2-pitch\';\n} */\nmodule.exports = loader;',lang:"js"}),l.a.createElement("h5",{id:"1226-inline-loader1js"},l.a.createElement(t["AnchorLink"],{to:"#1226-inline-loader1js","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.6 inline-loader1.js"),l.a.createElement("p",null,"loaders\\inline-loader1.js"),l.a.createElement(o["a"],{code:'function loader(source) {\n  console.log("inline1");\n  return source + "//inline1";\n}\n\nmodule.exports = loader;',lang:"js"}),l.a.createElement("h5",{id:"1227-inline-loader2js"},l.a.createElement(t["AnchorLink"],{to:"#1227-inline-loader2js","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.7 inline-loader2.js"),l.a.createElement("p",null,"loaders\\inline-loader2.js"),l.a.createElement(o["a"],{code:'function loader(source) {\n  console.log("inline2");\n  return source + "//inline2";\n}\nmodule.exports = loader;',lang:"js"}),l.a.createElement("h5",{id:"1228-post-loader1js"},l.a.createElement(t["AnchorLink"],{to:"#1228-post-loader1js","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.8 post-loader1.js"),l.a.createElement("p",null,"loaders\\post-loader1.js"),l.a.createElement(o["a"],{code:'function loader(source) {\n  console.log("post1");\n  return source + "//post1";\n}\nmodule.exports = loader;',lang:"js"}),l.a.createElement("h5",{id:"1229-post-loader2js"},l.a.createElement(t["AnchorLink"],{to:"#1229-post-loader2js","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2.2.9 post-loader2.js"),l.a.createElement("p",null,"loaders\\post-loader2.js"),l.a.createElement(o["a"],{code:'function loader(source) {\n  console.log("post2");\n  return source + "//post2";\n}\nmodule.exports = loader;',lang:"js"}),l.a.createElement("p",null,l.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-20-204128.png",alt:"pitchloaderexec"})),l.a.createElement("h4",{id:"13-\u7279\u6b8a\u914d\u7f6e"},l.a.createElement(t["AnchorLink"],{to:"#13-\u7279\u6b8a\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.3 \u7279\u6b8a\u914d\u7f6e"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(t["Link"],{to:"https://webpack.js.org/concepts/loaders/#configuration"},"loaders/#configuration"))),l.a.createElement(s["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u7b26\u53f7"),l.a.createElement("th",{align:"left"},"\u53d8\u91cf"),l.a.createElement("th",{align:"left"},"\u542b\u4e49"),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("code",null,"-!")),l.a.createElement("td",{align:"left"},"noPreAutoLoaders"),l.a.createElement("td",{align:"left"},"\u4e0d\u8981\u524d\u7f6e\u548c\u666e\u901a loader"),l.a.createElement("td",null,"Prefixing with -! will disable all configured preLoaders and loaders but not postLoaders")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("code",null,"!")),l.a.createElement("td",{align:"left"},"noAutoLoaders"),l.a.createElement("td",{align:"left"},"\u4e0d\u8981\u666e\u901a loader"),l.a.createElement("td",null,"Prefixing with ! will disable all configured normal loaders")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("code",null,"!!")),l.a.createElement("td",{align:"left"},"noPrePostAutoLoaders"),l.a.createElement("td",{align:"left"},"\u4e0d\u8981\u524d\u540e\u7f6e\u548c\u666e\u901a loader,\u53ea\u8981\u5185\u8054 loader"),l.a.createElement("td",null,"Prefixing with !! will disable all configured loaders (preLoaders, loaders, postLoaders)")))),l.a.createElement(o["a"],{code:'const { runLoaders } = require("./loader-runner");\nconst path = require("path");\nconst fs = require("fs");//webpack-dev-server\u542f\u5f00\u53d1\u670d\u52a1\u5668\u7684\u65f6\u5019 memory-fs\nconst entryFile = path.resolve(__dirname, "src/index.js");\n//\u5982\u4f55\u914d\u7f6e\u884c\u5185\nlet request = `inline-loader1!inline-loader2!${entryFile}`;\nlet rules = [\n  {\n    test: /\\.js$/,\n    use: ["normal-loader1", "normal-loader2"],\n  },\n  {\n    test: /\\.js$/,\n    enforce: "post",\n    use: ["post-loader1", "post-loader2"],\n  },\n  {\n    test: /\\.js$/,\n    enforce: "pre",\n    use: ["pre-loader1", "pre-loader2"],\n  },\n];\nlet parts = request.replace(/^-?!+/,\'\').split(\'!\');\nlet resource = parts.pop();//\u5f39\u51fa\u6700\u540e\u4e00\u4e2a\u5143\u7d20 entryFile=src/index.js\nlet inlineLoaders = parts;//[inline-loader1,inline-loader2]\nlet preLoaders = [],postLoaders=[],normalLoaders=[];\nfor(let i=0;i<rules.length;i++){\n    let rule = rules[i];\n    if(rule.test.test(resource)){\n        if(rule.enforce===\'pre\'){\n            preLoaders.push(...rule.use);\n        }else if(rule.enforce===\'post\'){\n            postLoaders.push(...rule.use);\n        }else{\n            normalLoaders.push(...rule.use);\n        }\n    }\n}\n+let loaders = [];\n+if(request.startsWith(\'!!\')){\n+    loaders = [...inlineLoaders];\n+    //noPreAutoLoaders\n+}else if(request.startsWith(\'-!\')){\n+    loaders = [...postLoaders,...inlineLoaders];\n+}else if(request.startsWith(\'!\')){\n+    //noAutoLoaders\n+    loaders = [...postLoaders,...inlineLoaders,...preLoaders];\n+}else{\n+    loaders = [...postLoaders,...inlineLoaders,...normalLoaders,...preLoaders];\n+}\nlet resolveLoader = loader=>path.resolve(__dirname,\'loaders-chain\',loader)\n//\u628aloader\u6570\u7ec4\u4ece\u540d\u79f0\u53d8\u6210\u7edd\u5bf9\u8def\u5f84\nloaders= loaders.map(resolveLoader);\nrunLoaders({\n    resource,//\u4f60\u8981\u52a0\u8f7d\u7684\u8d44\u6e90\n    loaders,\n    context:{name:\'zhufeng\',age:100},//\u4fdd\u5b58\u4e00\u4e9b\u72b6\u6001\u548c\u503c\n    readResource:fs.readFile.bind(this)\n},(err,result)=>{\n    console.log(err);//\u8fd0\u884c\u9519\u8bef\n    console.log(result);//\u8fd0\u884c\u7684\u7ed3\u679c\n    console.log(result.resourceBuffer?result.resourceBuffer.toString(\'utf8\'):null);//\u8bfb\u5230\u7684\u539f\u59cb\u7684\u6587\u4ef6\n});',lang:"diff"}),l.a.createElement("h4",{id:"14-pitch"},l.a.createElement(t["AnchorLink"],{to:"#14-pitch","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.4 pitch"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6bd4\u5982 a!b!c!module, \u6b63\u5e38\u8c03\u7528\u987a\u5e8f\u5e94\u8be5\u662f c\u3001b\u3001a\uff0c\u4f46\u662f\u771f\u6b63\u8c03\u7528\u987a\u5e8f\u662f a(pitch)\u3001b(pitch)\u3001c(pitch)\u3001c\u3001b\u3001a,\u5982\u679c\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a pitching loader \u8fd4\u56de\u4e86\u503c\u5c31\u76f8\u5f53\u4e8e\u5728\u5b83\u4ee5\u53ca\u5b83\u53f3\u8fb9\u7684 loader \u5df2\u7ecf\u6267\u884c\u5b8c\u6bd5"),l.a.createElement("li",null,'\u6bd4\u5982\u5982\u679c b \u8fd4\u56de\u4e86\u5b57\u7b26\u4e32"result b", \u63a5\u4e0b\u6765\u53ea\u6709 a \u4f1a\u88ab\u7cfb\u7edf\u6267\u884c\uff0c\u4e14 a \u7684 loader \u6536\u5230\u7684\u53c2\u6570\u662f result b'),l.a.createElement("li",null,"loader \u6839\u636e\u8fd4\u56de\u503c\u53ef\u4ee5\u5206\u4e3a\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u8fd4\u56de js \u4ee3\u7801\uff08\u4e00\u4e2a module \u7684\u4ee3\u7801\uff0c\u542b\u6709\u7c7b\u4f3c module.export \u8bed\u53e5\uff09\u7684 loader\uff0c\u8fd8\u6709\u4e0d\u80fd\u4f5c\u4e3a\u6700\u5de6\u8fb9 loader \u7684\u5176\u4ed6 loader"),l.a.createElement("li",null,"\u6709\u65f6\u5019\u6211\u4eec\u60f3\u628a\u4e24\u4e2a\u7b2c\u4e00\u79cd loader chain \u8d77\u6765\uff0c\u6bd4\u5982 style-loader!css-loader! \u95ee\u9898\u662f css-loader \u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e32 js \u4ee3\u7801\uff0c\u5982\u679c\u6309\u6b63\u5e38\u65b9\u5f0f\u5199 style-loader \u7684\u53c2\u6570\u5c31\u662f\u4e00\u4e32\u4ee3\u7801\u5b57\u7b26\u4e32"),l.a.createElement("li",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u79cd\u95ee\u9898\uff0c\u6211\u4eec\u9700\u8981\u5728 style-loader \u91cc\u6267\u884c require(css-loader!resources)")),l.a.createElement("p",null,"pitch \u4e0e loader \u672c\u8eab\u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\u56fe"),l.a.createElement(o["a"],{code:"|- a-loader `pitch`\n  |- b-loader `pitch`\n    |- c-loader `pitch`\n      |- requested module is picked up as a dependency\n    |- c-loader normal execution\n  |- b-loader normal execution\n|- a-loader normal execution",lang:"js"}),l.a.createElement("p",null,l.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-20-204134.jpg",alt:"loader_pitch"}))))}));n["default"]=e=>{var n=l.a.useContext(t["context"]),r=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&t["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:r})}}}]);