(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{Uw36:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("dEAq"),i=t("H1Ra"),c=o.a.memo((e=>{e.demos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u5b9e\u73b0link\u5bfc\u822a"},o.a.createElement(a["AnchorLink"],{to:"#\u5b9e\u73b0link\u5bfc\u822a","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0Link\u5bfc\u822a"),o.a.createElement("h2",{id:"srcindexjs"},o.a.createElement(a["AnchorLink"],{to:"#srcindexjs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src\\index.js"),o.a.createElement(i["a"],{code:"import React from 'react';\nimport ReactDOM from 'react-dom';\n+ import {HashRouter, BrowserRouter, Routes, Route, Link} from './react-router-dom';\nimport Home from './components/Home';\nimport User from './components/User';\nimport Profile from './components/Profile';\nimport Post from './components/Post';\n\nReactDOM.render(\n  <BrowserRouter>\n+    <ul>\n+      <li><Link to=\"/\">\u9996\u9875</Link></li>\n+      <li><Link to=\"/user\">\u7528\u6237\u7ba1\u7406</Link></li>\n+      <li><Link to=\"/profile\">\u4e2a\u4eba\u4e2d\u5fc3</Link></li>\n+    </ul>\n    <Routes>\n      <Route path=\"/\" element={<Home name=\"zhufeng\" />} />\n      <Route path=\"/user\" element={<User />} />\n      <Route path=\"/profile\" element={<Profile />}/>\n      <Route path=\"/post/:id\" element={<Post />}/>\n    </Routes>\n  </BrowserRouter>\n  ,document.getElementById('root'));\n\n// Switch => Routes\n// component => element\n// render => element",lang:"diff"}),o.a.createElement("h2",{id:"srcreact-router-domindexjs"},o.a.createElement(a["AnchorLink"],{to:"#srcreact-router-domindexjs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src\\react-router-dom\\index.js"),o.a.createElement(i["a"],{code:"import React from 'react'\n+ import { Router, useNavigate } from \"../react-router\";\nimport { createBrowserHistory, createHashHistory } from \"../history\";\nexport * from '../react-router'\n\n// ...\n\n+ export function Link({to, ...rest}) {\n+   let navigator = useNavigate() // navigate history\n+   function handleClick(event) {\n+     event.preventDefault();\n+     navigator(to)\n+   }\n+   return (\n+     <a {...rest} href={to} onClick={handleClick} />\n+   )\n+ }",lang:"diff"}),o.a.createElement("h3",{id:"srcreact-routerindexjs"},o.a.createElement(a["AnchorLink"],{to:"#srcreact-routerindexjs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src\\react-router\\index.js"),o.a.createElement(i["a"],{code:"// ...\n+ export function useNavigate() {\n+   let {navigator} = React.useContext(NavigationContext)\n+   let navigate = React.useCallback((to) => {\n+     navigator.push(to)\n+   },[navigator])\n+   return navigate\n+ }",lang:"diff"})))}));n["default"]=e=>{var n=o.a.useContext(a["context"]),t=n.demos;return o.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(c,{demos:t})}}}]);