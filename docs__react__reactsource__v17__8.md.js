(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{BBGx:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),c=n("dEAq"),o=n("H1Ra"),r=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"v17-react\u7684\u8868\u793a\u6548\u679c"},l.a.createElement(c["AnchorLink"],{to:"#v17-react\u7684\u8868\u793a\u6548\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"V17-React\u7684\u8868\u793a\u6548\u679c"),l.a.createElement("h2",{id:"3-setstate\u7684\u66f4\u65b0\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684"},l.a.createElement(c["AnchorLink"],{to:"#3-setstate\u7684\u66f4\u65b0\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3. setState\u7684\u66f4\u65b0\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684?"),l.a.createElement("h3",{id:"31-setstate"},l.a.createElement(c["AnchorLink"],{to:"#31-setstate","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.1 setState"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u5f00\u53d1\u4e2d\u6211\u4eec\u5e76\u4e0d\u80fd\u76f4\u63a5\u901a\u8fc7\u4fee\u6539state\u7684\u503c\u6765\u8ba9\u754c\u9762\u53d1\u751f\u66f4\u65b0",l.a.createElement("ul",null,l.a.createElement("li",null,"\u56e0\u4e3a\u4fee\u6539\u4e86state\u4e4b\u540e\uff0c\u5e0c\u671bReact\u6839\u636e\u6700\u65b0\u7684State\u6765\u91cd\u65b0\u6e32\u67d3\u754c\u9762\uff0c\u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u7684\u4fee\u6539React\u5e76\u4e0d\u77e5\u9053\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316"),l.a.createElement("li",null,"React\u5e76\u6ca1\u6709\u5b9e\u73b0\u7c7b\u4f3c\u4e8eVue2\u4e2d\u7684Object.defineProperty\u6216\u8005Vue3\u4e2d\u7684Proxy\u7684\u65b9\u5f0f\u6765\u76d1\u542c\u6570\u636e\u7684\u53d8\u5316"),l.a.createElement("li",null,"\u5fc5\u987b\u901a\u8fc7setState\u6765\u544a\u77e5React\u6570\u636e\u5df2\u7ecf\u53d1\u751f\u4e86\u53d8\u5316")))),l.a.createElement("h3",{id:"32-\u5f02\u6b65\u66f4\u65b0"},l.a.createElement(c["AnchorLink"],{to:"#32-\u5f02\u6b65\u66f4\u65b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.2 \u5f02\u6b65\u66f4\u65b0"),l.a.createElement("ul",null,l.a.createElement("li",null,"React\u5728\u6267\u884csetState\u7684\u65f6\u5019\u4f1a\u628a\u66f4\u65b0\u7684\u5185\u5bb9\u653e\u5165\u961f\u5217"),l.a.createElement("li",null,"\u5728\u4e8b\u4ef6\u6267\u884c\u7ed3\u675f\u540e\u4f1a\u8ba1\u7b97state\u7684\u6570\u636e\uff0c\u7136\u540e\u6267\u884c\u56de\u8c03"),l.a.createElement("li",null,"\u6700\u540e\u6839\u636e\u6700\u65b0\u7684state\u8ba1\u7b97\u865a\u62dfDOM\u66f4\u65b0\u771f\u5b9eDOM"),l.a.createElement("li",null,"\u4f18\u70b9",l.a.createElement("ul",null,l.a.createElement("li",null,"\u4fdd\u6301\u5185\u90e8\u4e00\u81f4\u6027\u3002\u5982\u679c\u6539\u4e3a\u540c\u6b65\u66f4\u65b0\u7684\u65b9\u5f0f\uff0c\u5c3d\u7ba1 setState \u53d8\u6210\u4e86\u540c\u6b65\uff0c\u4f46\u662f props \u4e0d\u662f"),l.a.createElement("li",null,"\u4e3a\u540e\u7eed\u7684\u67b6\u6784\u5347\u7ea7\u542f\u7528\u5e76\u53d1\u66f4\u65b0,React \u4f1a\u5728 setState \u65f6\uff0c\u6839\u636e\u5b83\u4eec\u7684\u6570\u636e\u6765\u6e90\u5206\u914d\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\uff0c\u8fd9\u4e9b\u6570\u636e\u6765\u6e90\u6709\uff1a\u4e8b\u4ef6\u56de\u8c03\u53e5\u67c4\u3001\u52a8\u753b\u6548\u679c\u7b49\uff0c\u518d\u6839\u636e\u4f18\u5148\u7ea7\u5e76\u53d1\u5904\u7406\uff0c\u63d0\u5347\u6e32\u67d3\u6027\u80fd"),l.a.createElement("li",null,"setState\u8bbe\u8ba1\u4e3a\u5f02\u6b65\uff0c\u53ef\u4ee5\u663e\u8457\u7684\u63d0\u5347\u6027\u80fd")))),l.a.createElement(o["a"],{code:"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\n\nclass Counter extends React.Component{\n  state = {number:0}\n  buttonClick = ()=>{\n    console.log('buttonClick');\n    this.setState({number:this.state.number+1});\n    console.log(this.state.number);\n    this.setState({number:this.state.number+1});\n    console.log(this.state.number);\n  }\n  divClick = ()=>{\n    console.log('divClick');\n  }\n  render(){\n    return (\n      <div onClick={this.divClick} id=\"counter\">\n        <p>{this.state.number}</p>\n        <button onClick={this.buttonClick}>+</button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Counter/>,document.getElementById('root'));",lang:"js"}),l.a.createElement("h3",{id:"33-\u56de\u8c03\u6267\u884c"},l.a.createElement(c["AnchorLink"],{to:"#33-\u56de\u8c03\u6267\u884c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.3 \u56de\u8c03\u6267\u884c"),l.a.createElement(o["a"],{code:"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\n\nclass Counter extends React.Component{\n  state = {number:0}\n  buttonClick = ()=>{\n    console.log('buttonClick');\n+   this.setState({number:this.state.number+1},()=>{\n+     console.log(this.state.number);\n+   }); \n+   this.setState({number:this.state.number+1},()=>{\n+     console.log(this.state.number);\n+   });\n  }\n  divClick = ()=>{\n    console.log('divClick');\n  }\n  render(){\n    return (\n      <div onClick={this.divClick} id=\"counter\">\n        <p>{this.state.number}</p>\n        <button onClick={this.buttonClick}>+</button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Counter/>,document.getElementById('root'));",lang:"diff"}),l.a.createElement("h3",{id:"34-\u51fd\u6570\u66f4\u65b0"},l.a.createElement(c["AnchorLink"],{to:"#34-\u51fd\u6570\u66f4\u65b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.4 \u51fd\u6570\u66f4\u65b0"),l.a.createElement(o["a"],{code:"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\n\nclass Counter extends React.Component{\n  state = {number:0}\n  buttonClick = ()=>{\n    console.log('buttonClick');\n+   this.setState((state)=>({number:state.number+1}),()=>{\n+     console.log(this.state.number);\n+   });\n+  \n+   this.setState((state)=>({number:state.number+1}),()=>{\n+     console.log(this.state.number);\n+   });\n\n  }\n  divClick = ()=>{\n    console.log('divClick');\n  }\n  render(){\n    return (\n      <div onClick={this.divClick} id=\"counter\">\n        <p>{this.state.number}</p>\n        <button onClick={this.buttonClick}>+</button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Counter/>,document.getElementById('root'));",lang:"diff"}),l.a.createElement("h3",{id:"35-\u540c\u6b65\u6267\u884c"},l.a.createElement(c["AnchorLink"],{to:"#35-\u540c\u6b65\u6267\u884c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.5 \u540c\u6b65\u6267\u884c"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728React\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c\u5408\u6210\u4e8b\u4ef6\u4e2d\u53ef\u4ee5\u4fee\u6539\u6279\u91cf\u66f4\u65b0\u7684\u53d8\u91cf",l.a.createElement("code",null,"isBatchingUpdates")),l.a.createElement("li",null,"\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u6279\u91cf\uff0c\u5176\u5b83\u5730\u65b9\u5982",l.a.createElement("code",null,"addEventListener"),"\u3001",l.a.createElement("code",null,"setTimeout\u548csetInterval"),"\u91cc\u65e0\u6cd5\u8bbe\u7f6e")),l.a.createElement(o["a"],{code:"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\n\nclass Counter extends React.Component{\n  state = {number:0}\n  buttonClick = ()=>{\n    console.log('buttonClick');// 2234\n    this.setState((state)=>({number:state.number+1}),()=>{\n      console.log(this.state.number);\n    });\n\n    this.setState((state)=>({number:state.number+1}),()=>{\n      console.log(this.state.number);\n    });\n+   setTimeout(()=>{\n+     this.setState((state)=>({number:state.number+1}),()=>{\n+       console.log(this.state.number);\n+     });\n+    \n+     this.setState((state)=>({number:state.number+1}),()=>{\n+       console.log(this.state.number);\n+     });\n    });\n\n  }\n  divClick = ()=>{\n    console.log('divClick');\n  }\n  render(){\n    return (\n      <div onClick={this.divClick} id=\"counter\">\n        <p>{this.state.number}</p>\n        <button onClick={this.buttonClick}>+</button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Counter/>,document.getElementById('root'));",lang:"diff"}),l.a.createElement("h3",{id:"36-\u5f3a\u884c\u6279\u91cf\u66f4\u65b0"},l.a.createElement(c["AnchorLink"],{to:"#36-\u5f3a\u884c\u6279\u91cf\u66f4\u65b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.6 \u5f3a\u884c\u6279\u91cf\u66f4\u65b0"),l.a.createElement(o["a"],{code:"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\n\nclass Counter extends React.Component{\n  state = {number:0}\n  buttonClick = ()=>{\n    console.log('buttonClick');// 2234\n    setTimeout(()=>{\n+     ReactDOM.unstable_batchedUpdates(()=>{\n+       this.setState((state)=>({number:state.number+1}));\n+       console.log(this.state.number);\n+     });\n    });\n  }\n  divClick = ()=>{\n    console.log('divClick');\n  }\n  render(){\n    return (\n      <div onClick={this.divClick} id=\"counter\">\n        <p>{this.state.number}</p>\n        <button onClick={this.buttonClick}>+</button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Counter/>,document.getElementById('root'));",lang:"diff"}),l.a.createElement("h3",{id:"37-\u5e76\u53d1\u66f4\u65b0"},l.a.createElement(c["AnchorLink"],{to:"#37-\u5e76\u53d1\u66f4\u65b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3.7 \u5e76\u53d1\u66f4\u65b0"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u542f\u7528",l.a.createElement("code",null,"concurrent"),"\u6a21\u5f0f")),l.a.createElement(o["a"],{code:"+ReactDOM.unstable_createRoot(document.getElementById('root')).render(<Counter/>);\n+ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);",lang:"diff"}),l.a.createElement("h2",{id:"\u603b\u7ed3"},l.a.createElement(c["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),l.a.createElement("ul",null,l.a.createElement("li",null,"React17\u4e4b\u524d\uff0cReact\u7ba1\u5230\u7684\u90e8\u5206\u6279\u91cf\u66f4\u65b0\uff0c\u8868\u73b0\u4e3a\u5f02\u6b65\u3002\u7ba1\u4e0d\u5230\u7684\u90e8\u5206\uff08setTimeout\uff09\u662f\u540c\u6b65\u66f4\u65b0"),l.a.createElement("li",null,"React17\u4e4b\u540e\uff0cLegacy\u6a21\u5f0f\u8868\u73b0\u548cReact17\u4e4b\u524d\u4e00\u81f4\uff0c\u5e76\u53d1\u6a21\u5f0f\u4e0bsetTimeout\u4e5f\u662f\u5f02\u6b65\u66f4\u65b0"))))}));t["default"]=e=>{var t=l.a.useContext(c["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(r,{demos:n})}}}]);