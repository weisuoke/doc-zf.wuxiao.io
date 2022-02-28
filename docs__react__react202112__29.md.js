(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{CMUI:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=t("dEAq"),i=t("H1Ra"),s=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u5b9e\u73b0navlink"},a.a.createElement(r["AnchorLink"],{to:"#\u5b9e\u73b0navlink","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0NavLink"),a.a.createElement("h2",{id:"srcindexjs"},a.a.createElement(r["AnchorLink"],{to:"#srcindexjs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"src\\index.js"),a.a.createElement(i["a"],{code:"import React from 'react';\nimport ReactDOM from 'react-dom';\n+ import {HashRouter, BrowserRouter, Routes, Route, Link, NavLink} from './react-router-dom';\nimport Home from './components/Home';\nimport User from './components/User';\nimport Profile from './components/Profile';\nimport Post from './components/Post';\n\n+ const activeStyle = { backgroundColor: 'red' }\n\nReactDOM.render(\n  <BrowserRouter>\n    <ul>\n      <li>\n+        <NavLink\n+          to=\"/\"\n+          style={({isActive}) => isActive ? activeStyle : {}}\n+          className={({isActive}) => isActive ? 'active' : ''}\n+        >\n+          \u9996\u9875\n+        </NavLink>\n+      </li>\n+      <li><NavLink to=\"/user\">\u7528\u6237\u7ba1\u7406</NavLink></li>\n+      <li><NavLink to=\"/profile\">\u4e2a\u4eba\u4e2d\u5fc3</NavLink></li>\n    </ul>\n    <Routes>\n      <Route path=\"/\" element={<Home name=\"zhufeng\" />} />\n      <Route path=\"/user\" element={<User />} />\n      <Route path=\"/profile\" element={<Profile />}/>\n      <Route path=\"/post/:id\" element={<Post />}/>\n    </Routes>\n  </BrowserRouter>\n  ,document.getElementById('root'));\n\n// Switch => Routes\n// component => element\n// render => element",lang:"diff"}),a.a.createElement("h2",{id:"srcreact-router-domindexjs"},a.a.createElement(r["AnchorLink"],{to:"#srcreact-router-domindexjs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"src\\react-router-dom\\index.js"),a.a.createElement(i["a"],{code:"import React from 'react'\n+ import { Router, useNavigate, useLocation } from \"../react-router\";\nimport { createBrowserHistory, createHashHistory } from \"../history\";\nexport * from '../react-router'\n\n/**\n * \u4e00\u4e2a Router \u7528\u5728\u6d4f\u89c8\u5668\u7aef\uff0c\u63d0\u4f9b\u6700\u5e72\u51c0\u7684URL\n * @param ref\n * @constructor\n */\nfunction BrowserRouter({children}) {\n  let historyRef = React.useRef(null)\n  if (historyRef.current === null) {\n    historyRef.current = createBrowserHistory()\n  }\n  let history = historyRef.current;\n  let [state, setState] = React.useState({\n    action: history.action,\n    location: history.location\n  })\n  React.useLayoutEffect(() => {\n    history.listen(({location, action}) => {\n      setState({location, action})\n    })\n  }, [history])\n\n  return (\n    <Router\n      children={children}\n      location={state.location}\n      navigator={history}\n      navigationType={state.action}\n    />\n  )\n}\n\n/**\n * \u4e00\u4e2a\u7528\u5728\u6d4f\u89c8\u5668\u7684 Router\n * \u628a\u8def\u5f84\u4fdd\u5b58\u5728 URL \u5730\u5740\u7684 hash \u90e8\u5206\uff0c\u4ee5\u4fbf\u5728\u6539\u53d8\u7684\u65f6\u5019\u4e0d\u4f1a\u53d1\u9001\u7ed9\u670d\u52a1\u5668\n * @param children\n * @constructor\n */\nfunction HashRouter({ children }) {\n  let historyRef = React.useRef(null)\n  if (historyRef.current === null) {\n    historyRef.current = createHashHistory()\n  }\n  let history = historyRef.current;\n  let [state, setState] = React.useState({\n    action: history.action,\n    location: history.location\n  })\n  React.useLayoutEffect(() => {\n    history.listen(setState)\n  }, [history])\n\n  return (\n    <Router\n      children={children}\n      location={state.location}\n      navigator={history}\n      navigationType={state.action}\n    />\n  )\n}\n\nexport {\n  BrowserRouter,\n  HashRouter\n}\n\nexport function Link({to, ...rest}) {\n  let navigator = useNavigate() // navigate history\n  function handleClick(event) {\n    event.preventDefault();\n    navigator(to)\n  }\n  return (\n    <a {...rest} href={to} onClick={handleClick} />\n  )\n}\n\n+ export function NavLink({\n+   className: classNameProp = '',  // \u7c7b\u540d,\u53ef\u80fd\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u80fd\u662f\u4e00\u4e2a\u51fd\u6570\n+   end = false,  // \u662f\u5426\u7ed3\u675f\n+   style: styleProp = {},  // \u6837\u5f0f\uff0c\u53ef\u80fd\u662f\u4e00\u4e2a\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u65f6\u4e00\u4e2a\u51fd\u6570\n+   to, // \u8df3\u8f6c\u5230\u54ea\u91cc\n+   children, // \u513f\u5b50\n+   ...rest\n+ }) {\n+   let location = useLocation();\n+   // \u5f53\u524d\u5730\u5740\u680f\u4e2d\u7684\u5b9e\u9645\u8def\u5f84\n+   let pathname = location.pathname\n+   // \u8981\u5339\u914d\u7684\u8def\u5f84\n+   let path = {pathname: to}\n+   let toPathname = path.pathname;\n+   let isActive = pathname === to\n+     || (!end && pathname.startsWith(to) && pathname.charAt(to.length) === '/')\n+   let className\n+   if (typeof classNameProp === 'function') {\n+     className = classNameProp({ isActive })\n+   } else {\n+     className = classNameProp;\n+   }\n+   let style = typeof styleProp === 'function' ? styleProp({ isActive }) : styleProp;\n+   return (\n+     <Link {...rest} className={className} style={style} to={to}>{children}</Link>\n+   )\n+ }",lang:"diff"})))}));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(s,{demos:t})}}}]);