(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{SLUu:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),i=t.n(r),l=t("dEAq"),o=t("H1Ra"),a=i.a.memo((e=>{e.demos;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"fiber"},i.a.createElement(l["AnchorLink"],{to:"#fiber","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Fiber"),i.a.createElement("h2",{id:"\u8bf7\u8bf4\u4e00\u4e0breact\u4e2d\u7684\u6e32\u67d3\u6d41\u7a0b"},i.a.createElement(l["AnchorLink"],{to:"#\u8bf7\u8bf4\u4e00\u4e0breact\u4e2d\u7684\u6e32\u67d3\u6d41\u7a0b","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u8bf7\u8bf4\u4e00\u4e0bReact\u4e2d\u7684\u6e32\u67d3\u6d41\u7a0b"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u9898\u76ee\u5206\u6790 \u672c\u9898\u5c5e\u4e8e\u539f\u7406\u9898"),i.a.createElement("li",null,"\u89e3\u9898\u601d\u8def",i.a.createElement("ul",null,i.a.createElement("li",null,"\u5b8f\u89c2\u7684\u8bbe\u8ba1\u7406\u5ff5"),i.a.createElement("li",null,"\u5173\u952e\u539f\u7406\u6e05\u6670\u63cf\u8ff0\uff0c\u62bd\u8c61\u548c\u5177\u8c61\u76f8\u7ed3\u5408"),i.a.createElement("li",null,"\u7ed3\u5408\u5de5\u7a0b\u5b9e\u8df5\u548c\u5de5\u4f5c\u6210\u679c")))),i.a.createElement("h2",{id:"\u8bbe\u8ba1\u7406\u5ff5"},i.a.createElement(l["AnchorLink"],{to:"#\u8bbe\u8ba1\u7406\u5ff5","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u8bbe\u8ba1\u7406\u5ff5"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u8de8\u5e73\u53f0\u6e32\u67d3=>\u865a\u62dfDOM"),i.a.createElement("li",null,"\u5feb\u901f\u54cd\u5e94=>\u5f02\u6b65\u53ef\u4e2d\u65ad+\u589e\u91cf\u66f4\u65b0")),i.a.createElement("h2",{id:"\u6027\u80fd\u74f6\u9888"},i.a.createElement(l["AnchorLink"],{to:"#\u6027\u80fd\u74f6\u9888","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u6027\u80fd\u74f6\u9888"),i.a.createElement("ul",null,i.a.createElement("li",null,"JS\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u8fc7\u957f",i.a.createElement("ul",null,i.a.createElement("li",null,"\u6d4f\u89c8\u5668\u5237\u65b0\u9891\u7387\u4e3a60Hz,\u5927\u698216.6\u6beb\u79d2\u6e32\u67d3\u4e00\u6b21\uff0c\u800cJS\u7ebf\u7a0b\u548c\u6e32\u67d3\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\uff0c\u6240\u4ee5\u5982\u679cJS\u7ebf\u7a0b\u6267\u884c\u4efb\u52a1\u65f6\u95f4\u8d85\u8fc716.6ms\u7684\u8bdd\uff0c\u5c31\u4f1a\u5bfc\u81f4\u6389\u5e27\uff0c\u5bfc\u81f4\u5361\u987f\uff0c\u89e3\u51b3\u65b9\u6848\u5c31\u662fReact\u5229\u7528\u7a7a\u95f2\u7684\u65f6\u95f4\u8fdb\u884c\u66f4\u65b0\uff0c\u4e0d\u5f71\u54cd\u6e32\u67d3\u8fdb\u884c\u7684\u6e32\u67d3"),i.a.createElement("li",null,"\u628a\u4e00\u4e2a\u8017\u65f6\u4efb\u52a1\u5207\u5206\u6210\u4e00\u4e2a\u4e2a\u5c0f\u4efb\u52a1\uff0c\u5206\u5e03\u5728\u6bcf\u4e00\u5e27\u91cc\u7684\u65b9\u5f0f\u5c31\u53eb\u65f6\u95f4\u5207\u7247")))),i.a.createElement("h2",{id:"\u6848\u4f8b"},i.a.createElement(l["AnchorLink"],{to:"#\u6848\u4f8b","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u6848\u4f8b"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l["Link"],{to:"https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html"},"concurrent-mode")),i.a.createElement("li",null,i.a.createElement(l["Link"],{to:"https://zh-hans.reactjs.org/docs/concurrent-mode-adoption.html"},"concurrent-mode-adoption"))),i.a.createElement(o["a"],{code:"import React from 'react';\nimport ReactDOM from 'react-dom';\nclass App extends React.Component{\n  state = {list:new Array(10000).fill(0)}\n  add = ()=>{\n    this.setState({list:[...this.state.list,1]});\n  }\n  render(){\n      return (\n        <ul>\n          <input/>\n          <button onClick={this.add}>add</button>\n          {\n            this.state.list.map((item,index)=><li key={index}>{item}</li>)\n          }\n        </ul>\n      );\n  }\n}\nlet root = document.getElementById('root');\n//ReactDOM.render(<App/>,root);\nReactDOM.unstable_createRoot(root).render(<App/>);",lang:"js"}),i.a.createElement("h2",{id:"\u5c4f\u5e55\u5237\u65b0\u7387"},i.a.createElement(l["AnchorLink"],{to:"#\u5c4f\u5e55\u5237\u65b0\u7387","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u5c4f\u5e55\u5237\u65b0\u7387"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u76ee\u524d\u5927\u591a\u6570\u8bbe\u5907\u7684\u5c4f\u5e55\u5237\u65b0\u7387\u4e3a 60 \u6b21/\u79d2"),i.a.createElement("li",null,"\u6d4f\u89c8\u5668\u6e32\u67d3\u52a8\u753b\u6216\u9875\u9762\u7684\u6bcf\u4e00\u5e27\u7684\u901f\u7387\u4e5f\u9700\u8981\u8ddf\u8bbe\u5907\u5c4f\u5e55\u7684\u5237\u65b0\u7387\u4fdd\u6301\u4e00\u81f4"),i.a.createElement("li",null,"\u9875\u9762\u662f\u4e00\u5e27\u4e00\u5e27\u7ed8\u5236\u51fa\u6765\u7684\uff0c\u5f53\u6bcf\u79d2\u7ed8\u5236\u7684\u5e27\u6570\uff08FPS\uff09\u8fbe\u5230 60 \u65f6\uff0c\u9875\u9762\u662f\u6d41\u7545\u7684,\u5c0f\u4e8e\u8fd9\u4e2a\u503c\u65f6\uff0c\u7528\u6237\u4f1a\u611f\u89c9\u5230\u5361\u987f"),i.a.createElement("li",null,"\u6bcf\u4e2a\u5e27\u7684\u9884\u7b97\u65f6\u95f4\u662f16.66 \u6beb\u79d2 (1\u79d2/60)"),i.a.createElement("li",null,"1s 60\u5e27\uff0c\u6240\u4ee5\u6bcf\u4e00\u5e27\u5206\u5230\u7684\u65f6\u95f4\u662f 1000/60 \u2248 16 ms,\u6240\u4ee5\u6211\u4eec\u4e66\u5199\u4ee3\u7801\u65f6\u529b\u6c42\u4e0d\u8ba9\u4e00\u5e27\u7684\u5de5\u4f5c\u91cf\u8d85\u8fc7 16ms")),i.a.createElement("h2",{id:"\u5e27"},i.a.createElement(l["AnchorLink"],{to:"#\u5e27","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u5e27"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u6bcf\u4e2a\u5e27\u7684\u5f00\u5934\u5305\u62ec\u6837\u5f0f\u8ba1\u7b97\u3001\u5e03\u5c40\u548c\u7ed8\u5236"),i.a.createElement("li",null,"JavaScript\u6267\u884c Javascript\u5f15\u64ce\u548c\u9875\u9762\u6e32\u67d3\u5f15\u64ce\u5728\u540c\u4e00\u4e2a\u6e32\u67d3\u7ebf\u7a0b,GUI\u6e32\u67d3\u548cJavascript\u6267\u884c\u4e24\u8005\u662f\u4e92\u65a5\u7684"),i.a.createElement("li",null,"\u5982\u679c\u67d0\u4e2a\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u8fc7\u957f\uff0c\u6d4f\u89c8\u5668\u4f1a\u63a8\u8fdf\u6e32\u67d3")),i.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-14-013057.png",alt:"lifeofframe",style:{zoom:"50%"}}),i.a.createElement("h2",{id:"requestidlecallback"},i.a.createElement(l["AnchorLink"],{to:"#requestidlecallback","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"requestIdleCallback"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u6211\u4eec\u5e0c\u671b\u5feb\u901f\u54cd\u5e94\u7528\u6237\uff0c\u8ba9\u7528\u6237\u89c9\u5f97\u591f\u5feb\uff0c\u4e0d\u80fd\u963b\u585e\u7528\u6237\u7684\u4ea4\u4e92"),i.a.createElement("li",null,"requestIdleCallback\u4f7f\u5f00\u53d1\u8005\u80fd\u591f\u5728\u4e3b\u4e8b\u4ef6\u5faa\u73af\u4e0a\u6267\u884c\u540e\u53f0\u548c\u4f4e\u4f18\u5148\u7ea7\u5de5\u4f5c\uff0c\u800c\u4e0d\u4f1a\u5f71\u54cd\u5ef6\u8fdf\u5173\u952e\u4e8b\u4ef6\uff0c\u5982\u52a8\u753b\u548c\u8f93\u5165\u54cd\u5e94"),i.a.createElement("li",null,"\u6b63\u5e38\u5e27\u4efb\u52a1\u5b8c\u6210\u540e\u6ca1\u8d85\u8fc716 ms,\u8bf4\u660e\u65f6\u95f4\u6709\u5bcc\u4f59\uff0c\u6b64\u65f6\u5c31\u4f1a\u6267\u884c ",i.a.createElement("code",null,"requestIdleCallback")," \u91cc\u6ce8\u518c\u7684\u4efb\u52a1")),i.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-14-013157.png",alt:"cooperativescheduling2",style:{zoom:"50%"}}),i.a.createElement("h2",{id:"react16\u7684\u6e32\u67d3\u6d41\u7a0b"},i.a.createElement(l["AnchorLink"],{to:"#react16\u7684\u6e32\u67d3\u6d41\u7a0b","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"React16+\u7684\u6e32\u67d3\u6d41\u7a0b"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l["Link"],{to:"https://gitee.com/mirrors/react/tree/v17.0.1/packages/scheduler"},"scheduler")," \u9009\u62e9\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u8fdb\u5165reconciler"),i.a.createElement("li",null,i.a.createElement(l["Link"],{to:"https://gitee.com/mirrors/react/tree/v17.0.1/packages/react-reconciler"},"reconciler")," \u8ba1\u7b97\u53d8\u66f4\u7684\u5185\u5bb9"),i.a.createElement("li",null,i.a.createElement(l["Link"],{to:"https://gitee.com/mirrors/react/tree/v17.0.1/packages/react-dom"},"react-dom")," \u628a\u53d8\u66f4\u7684\u5185\u5bb9\u6e32\u67d3\u5230\u9875\u9762\u4e0a")),i.a.createElement("h3",{id:"indexjs"},i.a.createElement(l["AnchorLink"],{to:"#indexjs","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"index.js"),i.a.createElement(o["a"],{code:"import React from './react';\nimport ReactDOM from './react-dom';\nlet style = { border: '3px solid red', margin: '5px' };\nlet virtualDOM = (\n  <div id=\"A1\" key=\"A1\" style={style}>A1</div>\n)\nlet root = document.getElementById('root');\nReactDOM.render(virtualDOM,root);",lang:"js"}),i.a.createElement("h3",{id:"fiber-1"},i.a.createElement(l["AnchorLink"],{to:"#fiber-1","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"fiber"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u67d0\u4e9b\u8c03\u5ea6\u7b56\u7565\u5408\u7406\u5206\u914dCPU\u8d44\u6e90\uff0c\u4ece\u800c\u63d0\u9ad8\u7528\u6237\u7684\u54cd\u5e94\u901f\u5ea6"),i.a.createElement("li",null,"\u901a\u8fc7Fiber\u67b6\u6784\uff0c\u8ba9\u81ea\u5df1\u7684\u8c03\u548c\u8fc7\u7a0b\u53d8\u6210\u53ef\u88ab\u4e2d\u65ad\u3002 \u9002\u65f6\u5730\u8ba9\u51faCPU\u6267\u884c\u6743\uff0c\u9664\u4e86\u53ef\u4ee5\u8ba9\u6d4f\u89c8\u5668\u53ca\u65f6\u5730\u54cd\u5e94\u7528\u6237\u7684\u4ea4\u4e92")),i.a.createElement("h4",{id:"fiber\u662f\u4e00\u4e2a\u6267\u884c\u5355\u5143"},i.a.createElement(l["AnchorLink"],{to:"#fiber\u662f\u4e00\u4e2a\u6267\u884c\u5355\u5143","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Fiber\u662f\u4e00\u4e2a\u6267\u884c\u5355\u5143"),i.a.createElement("ul",null,i.a.createElement("li",null,"Fiber\u662f\u4e00\u4e2a\u6267\u884c\u5355\u5143,\u6bcf\u6b21\u6267\u884c\u5b8c\u4e00\u4e2a\u6267\u884c\u5355\u5143, React \u5c31\u4f1a\u68c0\u67e5\u73b0\u5728\u8fd8\u5269\u591a\u5c11\u65f6\u95f4\uff0c\u5982\u679c\u6ca1\u6709\u65f6\u95f4\u5c31\u5c06\u63a7\u5236\u6743\u8ba9\u51fa\u53bb")),i.a.createElement("img",{src:"http://img.zhufengpeixun.cn/fiberflow.jpg",alt:"fiberflow",style:{zoom:"50%"}}),i.a.createElement("h4",{id:"fiber\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784"},i.a.createElement(l["AnchorLink"],{to:"#fiber\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"Fiber\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784"),i.a.createElement("ul",null,i.a.createElement("li",null,"React\u76ee\u524d\u7684\u505a\u6cd5\u662f\u4f7f\u7528\u94fe\u8868, \u6bcf\u4e2a VirtualDOM \u8282\u70b9\u5185\u90e8\u8868\u793a\u4e3a\u4e00\u4e2aFiber"),i.a.createElement("li",null,"\u4ece\u9876\u70b9\u5f00\u59cb\u904d\u5386"),i.a.createElement("li",null,"\u5982\u679c\u6709\u7b2c\u4e00\u4e2a\u513f\u5b50\uff0c\u5148\u904d\u5386\u7b2c\u4e00\u4e2a\u513f\u5b50"),i.a.createElement("li",null,"\u5982\u679c\u6ca1\u6709\u7b2c\u4e00\u4e2a\u513f\u5b50\uff0c\u6807\u5fd7\u7740\u6b64\u8282\u70b9\u904d\u5386\u5b8c\u6210"),i.a.createElement("li",null,"\u5982\u679c\u6709\u5f1f\u5f1f\u904d\u5386\u5f1f\u5f1f"),i.a.createElement("li",null,"\u5982\u679c\u6709\u6ca1\u6709\u4e0b\u4e00\u4e2a\u5f1f\u5f1f\uff0c\u8fd4\u56de\u7236\u8282\u70b9\u6807\u8bc6\u5b8c\u6210\u7236\u8282\u70b9\u904d\u5386\uff0c\u5982\u679c\u6709\u53d4\u53d4\u904d\u5386\u53d4\u53d4"),i.a.createElement("li",null,"\u6ca1\u6709\u7236\u8282\u70b9\u904d\u5386\u7ed3\u675f")),i.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-14-014213.png",alt:"fiberconstructor.jpg",style:{zoom:"50%"}}),i.a.createElement("h2",{id:"\u5b9e\u73b0\u6e32\u67d3"},i.a.createElement(l["AnchorLink"],{to:"#\u5b9e\u73b0\u6e32\u67d3","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u6e32\u67d3"),i.a.createElement("img",{src:"https://img.zhufengpeixun.com/8bed037dfa35a83bad852c6f3afa18fe",alt:"8bed037dfa35a83bad852c6f3afa18fe",style:{zoom:"50%"}}),i.a.createElement("p",null,i.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-14-014308.png",alt:"9b71de681e0eab51939d09f625b8ffe6"})),i.a.createElement("h3",{id:"\u5b9a\u4e49jsx"},i.a.createElement(l["AnchorLink"],{to:"#\u5b9a\u4e49jsx","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u5b9a\u4e49JSX"),i.a.createElement(o["a"],{code:"let style = {border:'1px solid red',color:'red',margin:'5px'};\nlet A = {\n  type: 'div',\n  key: 'A',\n  props: {\n      style,\n      children: [\n          'A\u6587\u672c',\n          { type: 'div', key: 'B1', props: { style,children: 'B1\u6587\u672c' } },\n          { type: 'div', key: 'B2', props: { style,children: 'B2\u6587\u672c' } }\n      ]\n  }\n}",lang:"js"}),i.a.createElement("h3",{id:"workloop"},i.a.createElement(l["AnchorLink"],{to:"#workloop","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"workLoop"),i.a.createElement(o["a"],{code:"let style = {border:'1px solid red',color:'red',margin:'5px'};\nlet A = {\n  type: 'div',\n  key: 'A',\n  props: {\n      style,\n      children: [\n          'A\u6587\u672c',\n          { type: 'div', key: 'B1', props: { style,children: 'B1\u6587\u672c' } },\n          { type: 'div', key: 'B2', props: { style,children: 'B2\u6587\u672c' } }\n      ]\n  }\n}\n+let workInProgress;\n+const TAG_ROOT = 'TAG_ROOT';\n+function workLoop() {\n+  while (workInProgress) {\n+      workInProgress = performUnitOfWork(workInProgress);\n+  }\n+}\n+let rootFiber = {\n+  tag: TAG_ROOT,\n+  key: 'ROOT',\n+  stateNode: document.getElementById('root'),\n+  props: { children: [A] }\n+}\n+function performUnitOfWork(fiber) {\n+  console.log(fiber.key);\n+}\n+workInProgress=rootFiber;\n+workLoop();",lang:"diff"}),i.a.createElement("h3",{id:"beginwork"},i.a.createElement(l["AnchorLink"],{to:"#beginwork","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"beginWork"),i.a.createElement(o["a"],{code:"let style = {border:'1px solid red',color:'red',margin:'5px'};\nlet A = {\n  type: 'div',\n  key: 'A',\n  props: {\n      style,\n      children: [\n          'A\u6587\u672c',\n          { type: 'div', key: 'B1', props: { style,children: 'B1\u6587\u672c' } },\n          { type: 'div', key: 'B2', props: { style,children: 'B2\u6587\u672c' } }\n      ]\n  }\n}\nlet workInProgress;\nconst TAG_ROOT = 'TAG_ROOT';\nconst TAG_TEXT = 'TAG_TEXT';\nconst TAG_HOST = 'TAG_HOST';\nfunction workLoop() {\n  while (workInProgress) {\n      workInProgress = performUnitOfWork(workInProgress);\n  }\n}\nlet rootFiber = {\n  tag: TAG_ROOT,\n  key: 'ROOT',\n  stateNode: document.getElementById('root'),\n  props: { children: [A] }\n}\n\nworkInProgress=rootFiber;\nworkLoop();\n\nfunction performUnitOfWork(fiber) {\n+  beginWork(fiber);\n+  if (fiber.child) {//\u5982\u679c\u5b50\u8282\u70b9\u5c31\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5b50\u8282\u70b9\n+      return fiber.child;\n+  }\n+  while (fiber) {//\u5982\u679c\u6ca1\u6709\u5b50\u8282\u70b9\u8bf4\u660e\u5f53\u524d\u8282\u70b9\u5df2\u7ecf\u5b8c\u6210\u4e86\u6e32\u67d3\u5de5\u4f5c\n+      if (fiber.sibling) {//\u5982\u679c\u5b83\u6709\u5f1f\u5f1f\u5c31\u8fd4\u56de\u5f1f\u5f1f\n+          return fiber.sibling;\n+      }\n+      fiber = fiber.return;//\u5982\u679c\u6ca1\u6709\u5f1f\u5f1f\u8ba9\u7238\u7238\u5b8c\u6210\uff0c\u7136\u540e\u627e\u53d4\u53d4\n+  }\n}\n+/**\n+ * \u6839\u636e\u5f53\u524d\u7684fiber\u548c\u5b50JSX\u6784\u5efa\u5b50fiber\u6811\n+ * @param {*} fiber \n+ * @returns \n+ */\n+function beginWork(fiber) {\n+  console.log('beginWork', fiber.key);\n+  let nextChildren = fiber.props.children;\n+  if(typeof nextChildren === 'string'){\n+    nextChildren=null;\n+  }\n+  return reconcileChildren(fiber,nextChildren);\n+}\n+\n+function reconcileChildren(returnFiber, nextChildren) {\n+  let firstChild = null;\n+  let previousNewFiber = null;\n+  let newChildren=[];\n+  if(Array.isArray(nextChildren)){\n+    newChildren = nextChildren;\n+  }else if(!!nextChildren){\n+    newChildren=[nextChildren];\n+  }\n+  for (let newIdx = 0; newIdx < newChildren.length; newIdx++) {\n+      let newFiber = createFiber(newChildren[newIdx]);\n+      newFiber.return = returnFiber;\n+      if (!previousNewFiber) {\n+        firstChild = newFiber;\n+      } else {\n+          previousNewFiber.sibling = newFiber;\n+      }\n+      previousNewFiber = newFiber;\n+  }\n+  returnFiber.child = firstChild;\n+  return firstChild;\n+}\n+function createFiber(element) {\n+  if (typeof element === 'string') {\n+      return { tag: TAG_TEXT, type: element.type, key: element, props: element };\n+  } else {\n+      return { tag: TAG_HOST, type: element.type, key: element.key, props: element.props };\n+  }\n+}",lang:"diff"}),i.a.createElement("h3",{id:"completeunitofwork"},i.a.createElement(l["AnchorLink"],{to:"#completeunitofwork","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"completeUnitOfWork"),i.a.createElement(o["a"],{code:"+import {setInitialProperties} from './utils';\nlet style = {border:'1px solid red',color:'red',margin:'5px'};\nlet A = {\n  type: 'div',\n  key: 'A',\n  props: {\n      style,\n      children: [\n          'A\u6587\u672c',\n          { type: 'div', key: 'B1', props: { style,children: 'B1\u6587\u672c' } },\n          { type: 'div', key: 'B2', props: { style,children: 'B2\u6587\u672c' } }\n      ]\n  }\n}\nlet workInProgress;\nconst TAG_ROOT = 'TAG_ROOT';\nconst TAG_TEXT = 'TAG_TEXT';\nconst TAG_HOST = 'TAG_HOST';\n+const Placement = 'Placement';\n\nfunction workLoop() {\n  while (workInProgress) {\n      workInProgress = performUnitOfWork(workInProgress);\n  }\n}\nlet rootFiber = {\n  tag: TAG_ROOT,\n  key: 'ROOT',\n  stateNode: document.getElementById('root'),\n  props: { children: [A] }\n}\n\nworkInProgress=rootFiber;\nworkLoop();\n\nfunction performUnitOfWork(fiber) {\n  beginWork(fiber);\n  if (fiber.child) {//\u5982\u679c\u5b50\u8282\u70b9\u5c31\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5b50\u8282\u70b9\n      return fiber.child;\n  }\n  while (fiber) {//\u5982\u679c\u6ca1\u6709\u5b50\u8282\u70b9\u8bf4\u660e\u5f53\u524d\u8282\u70b9\u5df2\u7ecf\u5b8c\u6210\u4e86\u6e32\u67d3\u5de5\u4f5c\n+     completeUnitOfWork(fiber);//\u53ef\u4ee5\u7ed3\u675f\u6b64fiber\u7684\u6e32\u67d3\u4e86\n      if (fiber.sibling) {//\u5982\u679c\u5b83\u6709\u5f1f\u5f1f\u5c31\u8fd4\u56de\u5f1f\u5f1f\n          return fiber.sibling;\n      }\n      fiber = fiber.return;//\u5982\u679c\u6ca1\u6709\u5f1f\u5f1f\u8ba9\u7238\u7238\u5b8c\u6210\uff0c\u7136\u540e\u627e\u53d4\u53d4\n  }\n}\n+function completeUnitOfWork(workInProgress) {\n+  console.log('completeUnitOfWork', workInProgress.key);\n+  let stateNode;\n+  switch (workInProgress.tag) {\n+    case TAG_HOST:\n+      stateNode=createStateNode(workInProgress);\n+      setInitialProperties(stateNode, workInProgress.props);\n+      break;\n+    case TAG_TEXT:\n+      createStateNode(workInProgress);\n+      break;\n+  }\n+  makeEffectList(workInProgress);\n+}\n+function createStateNode(fiber){\n+  if (fiber.tag === TAG_TEXT) {\n+      let stateNode = document.createTextNode(fiber.props);\n+      fiber.stateNode = stateNode;\n+  } else if (fiber.tag === TAG_HOST) {\n+      let stateNode = document.createElement(fiber.type);\n+      if (typeof fiber.props.children === 'string') {\n+          stateNode.appendChild(document.createTextNode(fiber.props.children));\n+      }\n+      fiber.stateNode = stateNode;\n+  }\n+  return fiber.stateNode;\n+}\n+function makeEffectList(completedWork){\n+  const returnFiber = completedWork.return;\n+  if (returnFiber) {\n+    if (!returnFiber.firstEffect) {//\u7236\u4eb2\u4e3a\u7a7a\u5c31\u6307\u5411\u513f\u5b50\u7684\u5b50\u94fe\u8868\n+      returnFiber.firstEffect = completedWork.firstEffect;\n+    } \n+    if (completedWork.lastEffect) {//\u7236\u4eb2\u975e\u7a7a\u5c31\u7236\u4eb2\u8001\u5c3e\u4e0b\u4e00\u4e2a\u6307\u5411\u513f\u5b50\u5b50\u94fe\u8868\u5934,\u7236\u4eb2\u5c3e\u6307\u51fa\u513f\u5b50\u5b50\u94fe\u8868\u5934\n+      if (returnFiber.lastEffect) {\n+          returnFiber.lastEffect.nextEffect = completedWork.firstEffect;\n+      }\n+      returnFiber.lastEffect = completedWork.lastEffect;//\u7236\u4eb2\u7684\u5c3e\u6307\u5411\u81ea\u5df1\u7684\u5c3e\n+    }\n+    if (completedWork.flags) {\n+          if (returnFiber.lastEffect) {//\u5982\u679c\u7236\u4eb2\u6709\u5c3e\uff0c\u5c3e\u5df4\u4e0b\u4e00\u4e2a\u6307\u5411\u81ea\u5df1\n+              returnFiber.lastEffect.nextEffect = completedWork;\n+          } else {//\u5982\u679c\u7236\u4eb2\u6ca1\u6709\u5c3e\uff0c\u7236\u4eb2\u7684\u5934\u6bdb\u90fd\u6307\u5411\u81ea\u5df1\n+              returnFiber.firstEffect = completedWork;\n+          }\n+          returnFiber.lastEffect = completedWork;\n+    }\n+  }\n}\n/**\n * \u6839\u636e\u5f53\u524d\u7684fiber\u548c\u5b50JSX\u6784\u5efa\u5b50fiber\u6811\n * @param {*} fiber \n * @returns \n */\nfunction beginWork(fiber) {\n  console.log('beginWork', fiber.key);\n  let nextChildren = fiber.props.children;\n  if(typeof nextChildren === 'string'){\n    nextChildren=null;\n  }\n  return reconcileChildren(fiber,nextChildren);\n}\n\nfunction reconcileChildren(returnFiber, nextChildren) {\n  let firstChild = null;\n  let previousNewFiber = null;\n  let newChildren=[];\n  if(Array.isArray(nextChildren)){\n    newChildren = nextChildren;\n  }else if(!!nextChildren){\n    newChildren=[nextChildren];\n  }\n  for (let newIdx = 0; newIdx < newChildren.length; newIdx++) {\n      let newFiber = createFiber(newChildren[newIdx]);\n      newFiber.return = returnFiber;\n      if (!previousNewFiber) {\n        firstChild = newFiber;\n      } else {\n          previousNewFiber.sibling = newFiber;\n      }\n      previousNewFiber = newFiber;\n  }\n  returnFiber.child = firstChild;\n  return firstChild;\n}\nfunction createFiber(element) {\n  if (typeof element === 'string') {\n      return { tag: TAG_TEXT, type: element.type, key: element, props: element };\n  } else {\n      return { tag: TAG_HOST, type: element.type, key: element.key, props: element.props };\n  }\n}",lang:"diff"}),i.a.createElement("h3",{id:"commitroot"},i.a.createElement(l["AnchorLink"],{to:"#commitroot","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"commitRoot"),i.a.createElement(o["a"],{code:"import {setInitialProperties} from './utils';\nlet style = {border:'1px solid red',color:'red',margin:'5px'};\nlet A = {\n  type: 'div',\n  key: 'A',\n  props: {\n      style,\n      children: [\n          'A\u6587\u672c',\n          { type: 'div', key: 'B1', props: { style,children: 'B1\u6587\u672c' } },\n          { type: 'div', key: 'B2', props: { style,children: 'B2\u6587\u672c' } }\n      ]\n  }\n}\nlet workInProgress;\nconst TAG_ROOT = 'TAG_ROOT';\nconst TAG_TEXT = 'TAG_TEXT';\nconst TAG_HOST = 'TAG_HOST';\nconst Placement = 'Placement';\n\nfunction workLoop() {\n  while (workInProgress) {\n      workInProgress = performUnitOfWork(workInProgress);\n  }\n+ commitRoot(rootFiber);\n}\n+function commitRoot(rootFiber){\n+  let currentEffect = rootFiber.firstEffect;\n+  while(currentEffect){\n+    let flags = currentEffect.flags;\n+    switch (flags) {\n+      case Placement:\n+        commitPlacement(currentEffect);\n+        break;\n+    }\n+    currentEffect=currentEffect.nextEffect;\n+  }\n+}\nfunction commitPlacement(currentFiber) {\n  let parent = currentFiber.return.stateNode;\n  parent.appendChild(currentFiber.stateNode);\n}\nlet rootFiber = {\n  tag: TAG_ROOT,\n  key: 'ROOT',\n  stateNode: document.getElementById('root'),\n  props: { children: [A] }\n}\n\nworkInProgress=rootFiber;\nworkLoop();\n\nfunction performUnitOfWork(fiber) {\n  beginWork(fiber);\n  if (fiber.child) {//\u5982\u679c\u5b50\u8282\u70b9\u5c31\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5b50\u8282\u70b9\n      return fiber.child;\n  }\n  while (fiber) {//\u5982\u679c\u6ca1\u6709\u5b50\u8282\u70b9\u8bf4\u660e\u5f53\u524d\u8282\u70b9\u5df2\u7ecf\u5b8c\u6210\u4e86\u6e32\u67d3\u5de5\u4f5c\n      completeUnitOfWork(fiber);//\u53ef\u4ee5\u7ed3\u675f\u6b64fiber\u7684\u6e32\u67d3\u4e86\n      if (fiber.sibling) {//\u5982\u679c\u5b83\u6709\u5f1f\u5f1f\u5c31\u8fd4\u56de\u5f1f\u5f1f\n          return fiber.sibling;\n      }\n      fiber = fiber.return;//\u5982\u679c\u6ca1\u6709\u5f1f\u5f1f\u8ba9\u7238\u7238\u5b8c\u6210\uff0c\u7136\u540e\u627e\u53d4\u53d4\n  }\n}\nfunction completeUnitOfWork(workInProgress) {\n  console.log('completeUnitOfWork', workInProgress.key);\n  let stateNode;\n  switch (workInProgress.tag) {\n    case TAG_HOST:\n      stateNode=createStateNode(workInProgress);\n      setInitialProperties(stateNode, workInProgress.props);\n      break;\n    case TAG_TEXT:\n      createStateNode(workInProgress);\n      break;\n  }\n  makeEffectList(workInProgress);\n}\nfunction createStateNode(fiber){\n  if (fiber.tag === TAG_TEXT) {\n      let stateNode = document.createTextNode(fiber.props);\n      fiber.stateNode = stateNode;\n  } else if (fiber.tag === TAG_HOST) {\n      let stateNode = document.createElement(fiber.type);\n      if (typeof fiber.props.children === 'string') {\n          stateNode.appendChild(document.createTextNode(fiber.props.children));\n      }\n      fiber.stateNode = stateNode;\n  }\n  return fiber.stateNode;\n}\nfunction makeEffectList(completedWork){\n  const returnFiber = completedWork.return;\n  if (returnFiber) {\n    if (!returnFiber.firstEffect) {//\u7236\u4eb2\u4e3a\u7a7a\u5c31\u6307\u5411\u513f\u5b50\u7684\u5b50\u94fe\u8868\n      returnFiber.firstEffect = completedWork.firstEffect;\n    } \n    if (completedWork.lastEffect) {//\u7236\u4eb2\u975e\u7a7a\u5c31\u7236\u4eb2\u8001\u5c3e\u4e0b\u4e00\u4e2a\u6307\u5411\u513f\u5b50\u5b50\u94fe\u8868\u5934,\u7236\u4eb2\u5c3e\u6307\u51fa\u513f\u5b50\u5b50\u94fe\u8868\u5934\n      if (returnFiber.lastEffect) {\n          returnFiber.lastEffect.nextEffect = completedWork.firstEffect;\n      }\n      returnFiber.lastEffect = completedWork.lastEffect;//\u7236\u4eb2\u7684\u5c3e\u6307\u5411\u81ea\u5df1\u7684\u5c3e\n    }\n    if (completedWork.flags) {\n          if (returnFiber.lastEffect) {//\u5982\u679c\u7236\u4eb2\u6709\u5c3e\uff0c\u5c3e\u5df4\u4e0b\u4e00\u4e2a\u6307\u5411\u81ea\u5df1\n              returnFiber.lastEffect.nextEffect = completedWork;\n          } else {//\u5982\u679c\u7236\u4eb2\u6ca1\u6709\u5c3e\uff0c\u7236\u4eb2\u7684\u5934\u6bdb\u90fd\u6307\u5411\u81ea\u5df1\n              returnFiber.firstEffect = completedWork;\n          }\n          returnFiber.lastEffect = completedWork;\n    }\n  }\n}\n/**\n * \u6839\u636e\u5f53\u524d\u7684fiber\u548c\u5b50JSX\u6784\u5efa\u5b50fiber\u6811\n * @param {*} fiber \n * @returns \n */\nfunction beginWork(fiber) {\n  console.log('beginWork', fiber.key);\n  let nextChildren = fiber.props.children;\n  if(typeof nextChildren === 'string'){\n    nextChildren=null;\n  }\n  return reconcileChildren(fiber,nextChildren);\n}\n\nfunction reconcileChildren(returnFiber, nextChildren) {\n  let firstChild = null;\n  let previousNewFiber = null;\n  let newChildren=[];\n  if(Array.isArray(nextChildren)){\n    newChildren = nextChildren;\n  }else if(!!nextChildren){\n    newChildren=[nextChildren];\n  }\n  for (let newIdx = 0; newIdx < newChildren.length; newIdx++) {\n      let newFiber = createFiber(newChildren[newIdx]);\n      newFiber.return = returnFiber;\n      newFiber.flags = Placement;\n      if (!previousNewFiber) {\n        firstChild = newFiber;\n      } else {\n          previousNewFiber.sibling = newFiber;\n      }\n      previousNewFiber = newFiber;\n  }\n  returnFiber.child = firstChild;\n  return firstChild;\n}\nfunction createFiber(element) {\n  if (typeof element === 'string') {\n      return { tag: TAG_TEXT, type: element.type, key: element, props: element };\n  } else {\n      return { tag: TAG_HOST, type: element.type, key: element.key, props: element.props };\n  }\n}",lang:"diff"})))}));n["default"]=e=>{var n=i.a.useContext(l["context"]),t=n.demos;return i.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),i.a.createElement(a,{demos:t})}}}]);