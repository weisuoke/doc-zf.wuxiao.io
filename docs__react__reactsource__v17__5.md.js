(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{"51Ap":function(e,l,n){"use strict";n.r(l);var a=n("q1tI"),t=n.n(a),i=n("dEAq"),c=n("H1Ra"),r=t.a.memo((e=>{e.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"dom-diff"},t.a.createElement(i["AnchorLink"],{to:"#dom-diff","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"DOM Diff"),t.a.createElement("h2",{id:"6-\u8bf7\u8bf4\u4e00\u4e0breact\u4e2d\u6709dom-diff\u7b97\u6cd5"},t.a.createElement(i["AnchorLink"],{to:"#6-\u8bf7\u8bf4\u4e00\u4e0breact\u4e2d\u6709dom-diff\u7b97\u6cd5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6. \u8bf7\u8bf4\u4e00\u4e0bReact\u4e2d\u6709DOM-DIFF\u7b97\u6cd5?"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5728React17+\u4e2dDOM-DIFF\u5c31\u662f\u6839\u636e\u8001\u7684fiber\u6811\u548c\u6700\u65b0\u7684JSX\u5bf9\u6bd4\u751f\u6210\u65b0\u7684fiber\u6811\u7684\u8fc7\u7a0b")),t.a.createElement("h3",{id:"61-react\u4f18\u5316\u539f\u5219"},t.a.createElement(i["AnchorLink"],{to:"#61-react\u4f18\u5316\u539f\u5219","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6.1 React\u4f18\u5316\u539f\u5219"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u53ea\u5bf9\u540c\u7ea7\u8282\u70b9\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5982\u679cDOM\u8282\u70b9\u8de8\u5c42\u7ea7\u79fb\u52a8\uff0c\u5219React\u4e0d\u4f1a\u590d\u7528"),t.a.createElement("li",null,"\u4e0d\u540c\u7c7b\u578b\u7684\u5143\u7d20\u4f1a\u4ea7\u51fa\u4e0d\u540c\u7684\u7ed3\u6784 \uff0c\u4f1a\u9500\u6bc1\u8001\u7ed3\u6784\uff0c\u521b\u5efa\u65b0\u7ed3\u6784"),t.a.createElement("li",null,"\u53ef\u4ee5\u901a\u8fc7key\u6807\u8bc6\u79fb\u52a8\u7684\u5143\u7d20")),t.a.createElement("h3",{id:"62-\u5355\u8282\u70b9"},t.a.createElement(i["AnchorLink"],{to:"#62-\u5355\u8282\u70b9","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6.2 \u5355\u8282\u70b9"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5982\u679c\u65b0\u7684\u8282\u70b9\u53ea\u6709\u4e00\u4e2a\u7684\u8bdd")),t.a.createElement("p",null,t.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-27-151110.png",alt:"018b18574d27f40bc86cae775cc8d79a"})),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"type\u4e0d\u540c"),t.a.createElement(c["a"],{code:"<div>\n<h1>h1</h1>\n</div>\n/*************/\n<div>\n<h2>h2</h2>\n</div>",lang:"js"})),t.a.createElement("li",null,t.a.createElement("p",null,"key\u4e0d\u540c"),t.a.createElement(c["a"],{code:'<div>\n<h1 key="h1">h1</h1>\n</div>\n/*************/\n<div>\n<h2 key="h2">h2</h2>\n</div>',lang:"js"})),t.a.createElement("li",null,t.a.createElement("p",null,"type\u548ckey\u90fd\u76f8\u540c"),t.a.createElement(c["a"],{code:'<div>\n<h1 key="h1">h1</h1>\n</div>\n/*************/\n<div>\n<h1 key="h1">h1-new</h1>\n</div>',lang:"js"})),t.a.createElement("li",null,t.a.createElement("p",null,"key\u76f8\u540c\u4f46\u662ftype\u4e0d\u540c\uff0c\u76f4\u63a5\u5220\u9664\u6240\u6709\u8001\u8282\u70b9"),t.a.createElement(c["a"],{code:'<div>\n<h1 key="h1">h1</h1>\n<h2 key="h2">h2</h2>\n</div>\n/*************/\n<div>\n<p key="h1">p</p>\n</div>',lang:"js"})),t.a.createElement("li",null,t.a.createElement("p",null,"key\u4e0d\u540c\uff0c\u5220\u9664\u5f53\u524d\u8001\u8282\u70b9\uff0c\u63a5\u7740\u5bf9\u6bd4\u4e0b\u4e00\u4e2a\u8282\u70b9"),t.a.createElement(c["a"],{code:'<div>\n<h1 key="h1">h1</h1>\n<h2 key="h2">h2</h2>\n</div>\n/*************/\n<div>\n<h2 key="h2">h2</h2>\n</div>',lang:"js"}))),t.a.createElement("h3",{id:"63-\u591a\u8282\u70b9"},t.a.createElement(i["AnchorLink"],{to:"#63-\u591a\u8282\u70b9","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6.3 \u591a\u8282\u70b9"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u5982\u679c\u65b0\u7684\u8282\u70b9\u6709\u591a\u4e2a\u8282\u70b9\u7684\u8bdd")),t.a.createElement("li",null,t.a.createElement("p",null,"\u8282\u70b9\u6709\u53ef\u80fd\u66f4\u65b0\u3001\u5220\u9664\u3001\u65b0\u589e")),t.a.createElement("li",null,t.a.createElement("p",null,"\u591a\u8282\u70b9\u7684\u65f6\u5019\u4f1a\u7ecf\u5386\u4e8c\u8f6e\u904d\u5386")),t.a.createElement("li",null,t.a.createElement("p",null,"\u7b2c\u4e00\u8f6e\u904d\u5386\u4e3b\u8981\u662f\u5904\u7406\u8282\u70b9\u7684\u66f4\u65b0,\u66f4\u65b0\u5305\u62ec\u5c5e\u6027\u548c\u7c7b\u578b\u7684\u66f4\u65b0")),t.a.createElement("li",null,t.a.createElement("p",null,"\u7b2c\u4e8c\u8f6e\u904d\u5386\u4e3b\u8981\u5904\u7406\u8282\u70b9\u7684\u65b0\u589e\u3001\u5220\u9664\u548c\u79fb\u52a8")),t.a.createElement("li",null,t.a.createElement("p",null,"\u79fb\u52a8\u65f6\u7684\u539f\u5219\u662f\u5c3d\u91cf\u5c11\u91cf\u7684\u79fb\u52a8\uff0c\u5982\u679c\u5fc5\u987b\u6709\u4e00\u4e2a\u8981\u52a8\uff0c\u65b0\u5730\u4f4d\u9ad8\u7684\u4e0d\u52a8\uff0c\u65b0\u5730\u4f4d\u4f4e\u7684\u52a8")),t.a.createElement("li",null,t.a.createElement("p",null,"\u4e00\u4e00\u5bf9\u6bd4\uff0c\u90fd\u53ef\u590d\u7528\uff0c\u53ea\u9700\u66f4\u65b0"),t.a.createElement(c["a"],{code:'<ul>\n<li key="A">A</li>\n<li key="B">B</li>\n<li key="C">C</li>\n<li key="D">D</li>\n</ul>\n/*************/\n<ul>\n<li key="A">A-new</li>\n<li key="B">B-new</li>\n<li key="C">C-new</li>\n<li key="D">D-new</li>\n</ul>',lang:"js"})),t.a.createElement("li",null,t.a.createElement("p",null,"\u4e00\u4e00\u5bf9\u6bd4\uff0ckey\u76f8\u540c\uff0ctype\u4e0d\u540c\uff0c\u5220\u9664\u8001\u7684\uff0c\u6dfb\u65b0\u7684"),t.a.createElement(c["a"],{code:'<ul>\n<li key="A">A</li>\n<li key="B">B</li>\n<li key="C">C</li>\n<li key="D">D</li>\n</ul>\n/*************/\n<ul>\n<div key="A">A-new</div>\n<li key="B">B-new</li>\n<li key="C">C-new</li>\n<li key="D">D-new</li>\n</ul>',lang:"js"})),t.a.createElement("li",null,t.a.createElement("p",null,"key\u4e0d\u540c\u9000\u51fa\u7b2c\u4e00\u8f6e\u5faa\u73af"),t.a.createElement(c["a"],{code:'<ul>\n<li key="A">A</li>\n<li key="B">B</li>\n<li key="C">C</li>\n<li key="D">D</li>\n</ul>\n/*************/\n<ul>\n<li key="A">A-new</li>\n<li key="C">C-new</li>\n<li key="D">D-new</li>\n<li key="B">B-new</li>\n</ul>',lang:"js"}))),t.a.createElement("p",null,"\u79fb\u52a8"),t.a.createElement(c["a"],{code:'import * as React from \'react\';\nimport * as ReactDOM from \'react-dom\';\nlet oldStyle = { border: \'3px solid red\', margin: \'5px\' };\nlet newStyle = { border: \'3px solid green\', margin: \'5px\' };\nlet root = document.getElementById(\'root\');\nlet oldVDOM = (\n  <ul>\n  <li key="A" style={oldStyle}>A</li>\n  <li key="B" style={oldStyle}>B</li>\n  <li key="C" style={oldStyle}>C</li>\n  <li key="D" style={oldStyle}>D</li>\n  <li key="E" style={oldStyle}>E</li>\n  <li key="F" style={oldStyle}>F</li>\n</ul>\n)\nReactDOM.render(oldVDOM,root);\nsetTimeout(()=>{\n  let newVDOM = (\n    <ul>\n    <li key="A"  style={newStyle}>A-new</li>\n    <li key="C"  style={newStyle}>C-new</li>\n    <li key="E"  style={newStyle}>E-new</li>\n    <li key="B"  style={newStyle}>B-new</li>\n    <li key="G"  style={newStyle}>G</li>\n   </ul>\n  )\n  ReactDOM.render(newVDOM,root);\n},1000);',lang:"js"}),t.a.createElement("p",null,t.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-27-151141.png",alt:"81b92f5eeab21a3f37fe7c3728ec13d4"}))))}));l["default"]=e=>{var l=t.a.useContext(i["context"]),n=l.demos;return t.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(r,{demos:n})}}}]);