(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{WpQk:function(e,n,t){},XPSJ:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),c=t("dEAq"),r=t("H1Ra"),o=t("dMo/"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5408\u6210\u4e8b\u4ef6"},l.a.createElement(c["AnchorLink"],{to:"#\u5408\u6210\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5408\u6210\u4e8b\u4ef6"),l.a.createElement("h2",{id:"7-\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9react\u5408\u6210\u4e8b\u4ef6\u7684\u7406\u89e3"},l.a.createElement(c["AnchorLink"],{to:"#7-\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9react\u5408\u6210\u4e8b\u4ef6\u7684\u7406\u89e3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7. \u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9React\u5408\u6210\u4e8b\u4ef6\u7684\u7406\u89e3\uff1f"),l.a.createElement("h3",{id:"71-\u4e8b\u4ef6\u5de5\u4f5c\u6d41"},l.a.createElement(c["AnchorLink"],{to:"#71-\u4e8b\u4ef6\u5de5\u4f5c\u6d41","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.1 \u4e8b\u4ef6\u5de5\u4f5c\u6d41"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e8b\u4ef6\u6355\u83b7"),l.a.createElement("li",null,"\u4e8b\u4ef6\u76ee\u6807"),l.a.createElement("li",null,"\u4e8b\u4ef6\u5192\u6ce1"),l.a.createElement("li",null,"\u4e8b\u4ef6\u59d4\u6258"),l.a.createElement("li",null,"\u5148\u7ed1\u5b9a\u5148\u6267\u884c")),l.a.createElement("p",null,l.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-28-094607.png",alt:"6f1dae04a2159507c0875343ca202169"})),l.a.createElement("h3",{id:"72-\u4e8b\u4ef6\u5dee\u5f02"},l.a.createElement(c["AnchorLink"],{to:"#72-\u4e8b\u4ef6\u5dee\u5f02","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.2 \u4e8b\u4ef6\u5dee\u5f02"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u7c7b\u578b"),l.a.createElement("th",{align:"left"},"\u539f\u751f\u4e8b\u4ef6"),l.a.createElement("th",{align:"left"},"\u5408\u6210\u4e8b\u4ef6"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"\u547d\u540d\u65b9\u5f0f"),l.a.createElement("td",{align:"left"},"\u5168\u5c0f\u5199"),l.a.createElement("td",{align:"left"},"\u5c0f\u9a7c\u5cf0\u547d\u540d")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"\u4e8b\u4ef6\u5904\u7406\u51fd\u6570"),l.a.createElement("td",{align:"left"},"\u5b57\u7b26\u4e32"),l.a.createElement("td",{align:"left"},"\u51fd\u6570\u5bf9\u8c61")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"),l.a.createElement("td",{align:"left"},"\u8fd4\u56defalse"),l.a.createElement("td",{align:"left"},"event.preventDefault()")))),l.a.createElement(r["a"],{code:'const handleClick = (event)=>{event.preventDefault();}\n// \u539f\u751f\u4e8b\u4ef6\n<a href="#" onclick="handleClick()">Button</a>\n\n//\u5408\u6210\u4e8b\u4ef6\n<a href="#" onClick={handleClick}>Button</a>',lang:"js"}),l.a.createElement("h3",{id:"73-\u5408\u6210\u4e8b\u4ef6"},l.a.createElement(c["AnchorLink"],{to:"#73-\u5408\u6210\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.3 \u5408\u6210\u4e8b\u4ef6"),l.a.createElement("ul",null,l.a.createElement("li",null,"React\u628a\u4e8b\u4ef6\u59d4\u6258\u5230document\u5bf9\u8c61\u4e0a"),l.a.createElement("li",null,"\u5f53\u771f\u5b9eDOM\u5143\u7d20\u89e6\u53d1\u4e8b\u4ef6,\u5148\u5904\u7406\u539f\u751f\u4e8b\u4ef6\uff0c\u7136\u540e\u4f1a\u5192\u6ce1\u5230 document \u5bf9\u8c61\u540e,\u518d\u5904\u7406 React \u4e8b\u4ef6"),l.a.createElement("li",null,"React\u4e8b\u4ef6\u7ed1\u5b9a\u7684\u65f6\u523b\u662f\u5728reconciliation\u9636\u6bb5,\u4f1a\u5728\u539f\u751f\u4e8b\u4ef6\u7684\u7ed1\u5b9a\u524d\u6267\u884c"),l.a.createElement("li",null,"\u76ee\u7684\u548c\u4f18\u52bf",l.a.createElement("ul",null,l.a.createElement("li",null,"\u8fdb\u884c\u6d4f\u89c8\u5668\u517c\u5bb9,React \u91c7\u7528\u7684\u662f\u9876\u5c42\u4e8b\u4ef6\u4ee3\u7406\u673a\u5236\uff0c\u80fd\u591f\u4fdd\u8bc1\u5192\u6ce1\u4e00\u81f4\u6027"),l.a.createElement("li",null,"\u4e8b\u4ef6\u5bf9\u8c61\u53ef\u80fd\u4f1a\u88ab\u9891\u7e41\u521b\u5efa\u548c\u56de\u6536\uff0c\u56e0\u6b64 React \u5f15\u5165\u4e8b\u4ef6\u6c60,\u5728\u4e8b\u4ef6\u6c60\u4e2d\u83b7\u53d6\u6216\u91ca\u653e\u4e8b\u4ef6\u5bf9\u8c61(React17\u4e2d\u88ab\u5e9f\u5f03)")))),l.a.createElement("h4",{id:"731-react17\u4ee5\u524d"},l.a.createElement(c["AnchorLink"],{to:"#731-react17\u4ee5\u524d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.3.1 React17\u4ee5\u524d"),l.a.createElement("h5",{id:"7311-\u4f7f\u7528"},l.a.createElement(c["AnchorLink"],{to:"#7311-\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.3.1.1 \u4f7f\u7528"),l.a.createElement(r["a"],{code:'import * as React from \'react\';\nimport * as ReactDOM from \'react-dom\';\nclass App extends React.Component {\n  parentRef=React.createRef();\n  childRef=React.createRef();\n  componentDidMount() {\n    this.parentRef.current.addEventListener("click", () => {\n      console.log("\u7236\u5143\u7d20\u539f\u751f\u6355\u83b7");\n    },true);\n    this.parentRef.current.addEventListener("click", () => {\n      console.log("\u7236\u5143\u7d20\u539f\u751f\u5192\u6ce1");\n    });\n    this.childRef.current.addEventListener("click", () => {\n      console.log("\u5b50\u5143\u7d20\u539f\u751f\u6355\u83b7");\n    },true);\n    this.childRef.current.addEventListener("click", () => {\n      console.log("\u5b50\u5143\u7d20\u539f\u751f\u5192\u6ce1");\n    });\n    document.addEventListener(\'click\',()=>{\n        console.log("document\u6355\u83b7");\n    },true);\n    document.addEventListener(\'click\',()=>{\n        console.log("document\u5192\u6ce1");\n    });\n  }\n  parentBubble = () => {\n    console.log("\u7236\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1");\n  };\n  childBubble = () => {\n    console.log("\u5b50\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1");\n  };\n  parentCapture = () => {\n    console.log("\u7236\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7");\n  };\n  childCapture = () => {\n    console.log("\u5b50\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7");\n  };\n  render() {\n    return (\n      <div ref={this.parentRef} onClick={this.parentBubble} onClickCapture={this.parentCapture}>\n        <p ref={this.childRef} onClick={this.childBubble} onClickCapture={this.childCapture}>\n          \u4e8b\u4ef6\u6267\u884c\u987a\u5e8f\n        </p>\n      </div>\n    );\n  }\n}\nReactDOM.render(<App />, document.getElementById(\'root\'));\n/**\ndocument\u6355\u83b7\n\u7236\u5143\u7d20\u539f\u751f\u6355\u83b7\n\u5b50\u5143\u7d20\u539f\u751f\u6355\u83b7\n\u5b50\u5143\u7d20\u539f\u751f\u5192\u6ce1\n\u7236\u5143\u7d20\u539f\u751f\u5192\u6ce1\n\u7236\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7\n\u5b50\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7\n\u5b50\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1\n\u7236\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1\ndocument\u5192\u6ce1\n */',lang:"js"}),l.a.createElement("h5",{id:"7312-\u5b9e\u73b0"},l.a.createElement(c["AnchorLink"],{to:"#7312-\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.3.1.2 \u5b9e\u73b0"),l.a.createElement(r["a"],{code:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>event</title>\n    </head>\n    <body>\n        <div id="parent">\n            <p id="child">\n              \u4e8b\u4ef6\u6267\u884c\u987a\u5e8f\n            </p>\n          </div>\n        <script>\n        document.addEventListener(\'click\',dispatchEvent);\n        function dispatchEvent(event,isCapture){\n            let paths = [];\n            let current = event.target;\n            while(current){\n                paths.push(current);\n                current=current.parentNode;\n            }\n            for(let i=paths.length-1;i>=0;i--){\n                let eventHandler = paths[i].onClickCapture;\n                eventHandler&&eventHandler()\n            }\n            for(let i=0;i<paths.length;i++){\n                let eventHandler = paths[i].onClick;\n                eventHandler&&eventHandler()\n            }\n        }\n        let parent = document.getElementById(\'parent\');\n        let child = document.getElementById(\'child\');\n        parent.addEventListener("click", () => {\n          console.log("\u7236\u5143\u7d20\u539f\u751f\u6355\u83b7");\n        },true);\n        parent.addEventListener("click", () => {\n          console.log("\u7236\u5143\u7d20\u539f\u751f\u5192\u6ce1");\n        });\n        child.addEventListener("click", () => {\n          console.log("\u5b50\u5143\u7d20\u539f\u751f\u6355\u83b7");\n        },true);\n        child.addEventListener("click", () => {\n          console.log("\u5b50\u5143\u7d20\u539f\u751f\u5192\u6ce1");\n        });\n        document.addEventListener(\'click\',()=>{\n            console.log("document\u6355\u83b7");\n        },true);\n        document.addEventListener(\'click\',()=>{\n            console.log("document\u5192\u6ce1");\n        });\n        parent.onClick=() => {\n            console.log("\u7236\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1");\n        }\n        parent.onClickCapture=() => {\n            console.log("\u7236\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7");\n        }\n        child.onClick=() => {\n            console.log("\u5b50\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1");\n        }\n        child.onClickCapture=() => {\n            console.log("\u5b50\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7");\n        }\n/*\n\u7236\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7\n\u5b50\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7\n\u7236\u5143\u7d20\u539f\u751f\u6355\u83b7\n\u5b50\u5143\u7d20\u539f\u751f\u6355\u83b7\n\u5b50\u5143\u7d20\u539f\u751f\u5192\u6ce1\n\u7236\u5143\u7d20\u539f\u751f\u5192\u6ce1\n\u5b50\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1\n\u7236\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1\n*/\n    <\/script>\n    </body>\n</html>',lang:"html"}),l.a.createElement("h4",{id:"732-react17\u4ee5\u540e"},l.a.createElement(c["AnchorLink"],{to:"#732-react17\u4ee5\u540e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.3.2 React17\u4ee5\u540e"),l.a.createElement("h5",{id:"7321-\u4f7f\u7528"},l.a.createElement(c["AnchorLink"],{to:"#7321-\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.3.2.1 \u4f7f\u7528"),l.a.createElement(r["a"],{code:'import * as React from \'react\';\nimport * as ReactDOM from \'react-dom\';\nclass App extends React.Component {\n  parentRef=React.createRef();\n  childRef=React.createRef();\n  componentDidMount() {\n    this.parentRef.current.addEventListener("click", () => {\n      console.log("\u7236\u5143\u7d20\u539f\u751f\u6355\u83b7");\n    },true);\n    this.parentRef.current.addEventListener("click", () => {\n      console.log("\u7236\u5143\u7d20\u539f\u751f\u5192\u6ce1");\n    });\n    this.childRef.current.addEventListener("click", () => {\n      console.log("\u5b50\u5143\u7d20\u539f\u751f\u6355\u83b7");\n    },true);\n    this.childRef.current.addEventListener("click", () => {\n      console.log("\u5b50\u5143\u7d20\u539f\u751f\u5192\u6ce1");\n    });\n    document.addEventListener(\'click\',()=>{\n        console.log("document\u539f\u751f\u6355\u83b7");\n    },true);\n    document.addEventListener(\'click\',()=>{\n        console.log("document\u539f\u751f\u5192\u6ce1");\n    });\n  }\n  parentBubble = () => {\n    console.log("\u7236\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1");\n  };\n  childBubble = () => {\n    console.log("\u5b50\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1");\n  };\n  parentCapture = () => {\n    console.log("\u7236\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7");\n  };\n  childCapture = () => {\n    console.log("\u5b50\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7");\n  };\n  render() {\n    return (\n      <div ref={this.parentRef} onClick={this.parentBubble} onClickCapture={this.parentCapture}>\n        <p ref={this.childRef} onClick={this.childBubble} onClickCapture={this.childCapture}>\n          \u4e8b\u4ef6\u6267\u884c\u987a\u5e8f\n        </p>\n      </div>\n    );\n  }\n}\nReactDOM.render(<App />, document.getElementById(\'root\'));\n/**\ndocument\u539f\u751f\u6355\u83b7\n\u7236\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7\n\u5b50\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7\n\u7236\u5143\u7d20\u539f\u751f\u6355\u83b7\n\u5b50\u5143\u7d20\u539f\u751f\u6355\u83b7\n\u5b50\u5143\u7d20\u539f\u751f\u5192\u6ce1\n\u7236\u5143\u7d20\u539f\u751f\u5192\u6ce1\n\u5b50\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1\n\u7236\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1\ndocument\u539f\u751f\u5192\u6ce1\n */',lang:"js"}),l.a.createElement("h5",{id:"7322-\u5b9e\u73b0"},l.a.createElement(c["AnchorLink"],{to:"#7322-\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.3.2.2 \u5b9e\u73b0"),l.a.createElement(r["a"],{code:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>event</title>\n    </head>\n    <body>\n        <div id="root">\n            <div id="parent">\n                <p id="child">\n                  \u4e8b\u4ef6\u6267\u884c\u987a\u5e8f\n                </p>\n              </div>\n        </div>\n        <script>\n        let root = document.getElementById(\'root\');\n        let parent = document.getElementById(\'parent\');\n        let child = document.getElementById(\'child\');\n\n        root.addEventListener(\'click\',event=>dispatchEvent(event,true),true);\n        root.addEventListener(\'click\',event=>dispatchEvent(event,false));\n        function dispatchEvent(event,isCapture){\n            let paths = [];\n            let current = event.target;\n            while(current){\n                paths.push(current);\n                current=current.parentNode;\n            }\n            if(isCapture){\n              for(let i=paths.length-1;i>=0;i--){\n                let eventHandler = paths[i].onClickCapture;\n                eventHandler&&eventHandler()\n              }\n            }else{\n              for(let i=0;i<paths.length;i++){\n                let eventHandler = paths[i].onClick;\n                eventHandler&&eventHandler()\n               }\n            }\n        }\n\n        parent.addEventListener("click", () => {\n          console.log("\u7236\u5143\u7d20\u539f\u751f\u6355\u83b7");\n        },true);\n        parent.addEventListener("click", () => {\n          console.log("\u7236\u5143\u7d20\u539f\u751f\u5192\u6ce1");\n        });\n        child.addEventListener("click", () => {\n          console.log("\u5b50\u5143\u7d20\u539f\u751f\u6355\u83b7");\n        },true);\n        child.addEventListener("click", () => {\n          console.log("\u5b50\u5143\u7d20\u539f\u751f\u5192\u6ce1");\n        });\n        document.addEventListener(\'click\',()=>{\n            console.log("document\u539f\u751f\u6355\u83b7");\n        },true);\n        document.addEventListener(\'click\',()=>{\n            console.log("document\u539f\u751f\u5192\u6ce1");\n        });\n        parent.onClick=() => {\n            console.log("\u7236\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1");\n        }\n        parent.onClickCapture=() => {\n            console.log("\u7236\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7");\n        }\n        child.onClick=() => {\n            console.log("\u5b50\u5143\u7d20React\u4e8b\u4ef6\u5192\u6ce1");\n        }\n        child.onClickCapture=() => {\n            console.log("\u5b50\u5143\u7d20React\u4e8b\u4ef6\u6355\u83b7");\n        }\n    <\/script>\n    </body>\n</html>',lang:"html"}),l.a.createElement("h3",{id:"74-\u4e8b\u4ef6\u7cfb\u7edf\u53d8\u66f4"},l.a.createElement(c["AnchorLink"],{to:"#74-\u4e8b\u4ef6\u7cfb\u7edf\u53d8\u66f4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.4 \u4e8b\u4ef6\u7cfb\u7edf\u53d8\u66f4"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u66f4\u6539\u4e8b\u4ef6\u59d4\u6258",l.a.createElement("ul",null,l.a.createElement("li",null,"\u9996\u5148\u7b2c\u4e00\u4e2a\u4fee\u6539\u70b9\u5c31\u662f\u66f4\u6539\u4e86\u4e8b\u4ef6\u59d4\u6258\u7ed1\u5b9a\u8282\u70b9\uff0c\u572816\u7248\u672c\u4e2d\uff0cReact\u90fd\u4f1a\u628a\u4e8b\u4ef6\u7ed1\u5b9a\u5230\u9875\u9762\u7684document\u5143\u7d20\u4e0a\uff0c\u8fd9\u5728\u591a\u4e2aReact\u7248\u672c\u5171\u5b58\u7684\u60c5\u51b5\u4e0b\u5c31\u4f1a\u867d\u7136\u67d0\u4e2a\u8282\u70b9\u4e0a\u7684\u51fd\u6570\u8c03\u7528\u4e86",l.a.createElement("code",null,"event.stopPropagation()"),",\u4f46\u8fd8\u662f\u4f1a\u5bfc\u81f4\u53e6\u5916\u4e00\u4e2aReact\u7248\u672c\u4e0a\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u6ca1\u6709\u88ab\u963b\u6b62\u89e6\u53d1\uff0c\u6240\u4ee5\u572817\u7248\u672c\u4e2d\u4f1a\u628a\u4e8b\u4ef6\u7ed1\u5b9a\u5230render\u51fd\u6570\u7684\u8282\u70b9\u4e0a"))),l.a.createElement("li",null,"\u53bb\u9664\u4e8b\u4ef6\u6c60",l.a.createElement("ul",null,l.a.createElement("li",null,"17\u7248\u672c\u4e2d\u79fb\u9664\u4e86\u4e8b\u4ef6\u5bf9\u8c61\u6c60\uff0c\u8fd9\u662f\u56e0\u4e3a React \u5728\u65e7\u6d4f\u89c8\u5668\u4e2d\u91cd\u7528\u4e86\u4e0d\u540c\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\uff0c\u5e76\u5c06\u6240\u6709\u4e8b\u4ef6\u5b57\u6bb5\u5728\u5b83\u4eec\u4e4b\u524d\u8bbe\u7f6e\u4e3a null\u3002\u5728 React 16 \u53ca\u66f4\u65e9\u7248\u672c\u4e2d\uff0c\u4f7f\u7528\u8005\u5fc5\u987b\u8c03\u7528",l.a.createElement("code",null,"event.persist()")," \u624d\u80fd\u6b63\u786e\u7684\u4f7f\u7528\u8be5\u4e8b\u4ef6\uff0c\u6216\u8005\u6b63\u786e\u8bfb\u53d6\u9700\u8981\u7684\u5c5e\u6027")))),l.a.createElement("h3",{id:"75-\u6848\u4f8b"},l.a.createElement(c["AnchorLink"],{to:"#75-\u6848\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.5 \u6848\u4f8b"),l.a.createElement("p",null,"React16"),l.a.createElement(r["a"],{code:"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nclass Dialog extends React.Component{\n    state = {show: false};\n    componentDidMount() {\n      document.addEventListener(\"click\",  () => {\n        this.setState({show: false});\n      });\n    }\n    handleButtonClick = (event) => {\n      //event.stopPropagation();\n      event.nativeEvent.stopImmediatePropagation();\n      this.setState({show: true});\n    };\n\n    render() {\n      return (\n        <div>\n          <button onClick={this.handleButtonClick}>\u663e\u793a</button>\n          {this.state.show && (\n            <div onClick={(event) => event.nativeEvent.stopImmediatePropagation()}>\n              Modal\n            </div>\n          )}\n        </div>\n      );\n    }\n  }\nReactDOM.render(<Dialog />, document.getElementById('root'));",lang:"js"}),l.a.createElement("p",null,"React17"),l.a.createElement(r["a"],{code:"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nclass Dialog extends React.Component{\n  state = {show: false};\n  componentDidMount() {\n    document.addEventListener(\"click\",  () => {\n      this.setState({show: false});\n    });\n  }\n  handleButtonClick = (event) => {\n+   event.stopPropagation();\n-   //event.nativeEvent.stopImmediatePropagation();\n    this.setState({show: true});\n  };\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleButtonClick}>\u663e\u793a</button>\n        {this.state.show && (\n+         <div onClick={(event) => event.stopPropagation()}>\n            Modal\n          </div>\n        )}\n      </div>\n    );\n  }\n}\nReactDOM.render(<Dialog />, document.getElementById('root'));",lang:"diff"})))}));n["default"]=e=>{var n=l.a.useContext(c["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:t})}},"dMo/":function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),c=t("hKI/"),r=t.n(c);t("WpQk");function o(e,n){return m(e)||u(e,n)||d(e,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,n){if(e){if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function u(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,l,c=[],r=!0,o=!1;try{for(t=t.call(e);!(r=(a=t.next()).done);r=!0)if(c.push(a.value),n&&c.length===n)break}catch(i){o=!0,l=i}finally{try{r||null==t["return"]||t["return"]()}finally{if(o)throw l}}return c}}function m(e){if(Array.isArray(e))return e}var h=function(e){var n=e.children,t=Object(a["useRef"])(),c=Object(a["useState"])(!1),i=o(c,2),d=i[0],s=i[1],u=Object(a["useState"])(!1),m=o(u,2),h=m[0],p=m[1];return Object(a["useEffect"])((function(){var e=t.current,n=r()((function(){s(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return n(),e.addEventListener("scroll",n),window.addEventListener("resize",n),function(){e.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:t,"data-left-folded":d||void 0,"data-right-folded":h||void 0},l.a.createElement("table",null,n)))};n["a"]=h}}]);