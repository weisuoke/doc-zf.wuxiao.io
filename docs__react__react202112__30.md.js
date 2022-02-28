(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"7dXh":function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=t("dEAq"),i=t("H1Ra"),c=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u5b9e\u73b0\u53d7\u4fdd\u62a4\u8def\u7531"},a.a.createElement(r["AnchorLink"],{to:"#\u5b9e\u73b0\u53d7\u4fdd\u62a4\u8def\u7531","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u53d7\u4fdd\u62a4\u8def\u7531"),a.a.createElement("h2",{id:"srcindexjs"},a.a.createElement(r["AnchorLink"],{to:"#srcindexjs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"src/index.js"),a.a.createElement(i["a"],{code:"import React from 'react';\nimport ReactDOM from 'react-dom';\n+ import {HashRouter, BrowserRouter, Routes, Route, Link, NavLink, Navigate} from './react-router-dom';\nimport Home from './components/Home';\nimport User from './components/User';\nimport Profile from './components/Profile';\n+ import Protected from './components/Protected'\n+ import Login from './components/Login'\nimport Post from './components/Post';\n\nconst activeStyle = { backgroundColor: 'red' }\n\nReactDOM.render(\n  <BrowserRouter>\n    <ul>\n      <li>\n        <NavLink\n          to=\"/\"\n          style={({isActive}) => isActive ? activeStyle : {}}\n          className={({isActive}) => isActive ? 'active' : ''}\n        >\n          \u9996\u9875\n        </NavLink>\n      </li>\n      <li><NavLink to=\"/user\">\u7528\u6237\u7ba1\u7406</NavLink></li>\n      <li><NavLink to=\"/profile\">\u4e2a\u4eba\u4e2d\u5fc3</NavLink></li>\n    </ul>\n    <Routes>\n      <Route path=\"/\" element={<Home name=\"zhufeng\" />} />\n      <Route path=\"/user\" element={<User />} />\n+      <Route path=\"/profile\" element={<Protected component={Profile} path={'/profile'}/>}/>\n      <Route path=\"/post/:id\" element={<Post />}/>\n+      <Route path=\"/login\" element={<Login />}/>\n+      <Route path=\"/home\" element={<Navigate to=\"/\" />}/>\n    </Routes>\n  </BrowserRouter>\n  ,document.getElementById('root'));\n\n// Switch => Routes\n// component => element\n// render => element",lang:"diff"}),a.a.createElement("h2",{id:"srcreact-routerindexjs"},a.a.createElement(r["AnchorLink"],{to:"#srcreact-routerindexjs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"src/react-router/index.js"),a.a.createElement(i["a"],{code:"// ...\n\n+ export function Navigate({ to }) {\n+   let navigate = useNavigate()\n+   React.useEffect(() => {\n+     navigate(to)\n+   })\n+   return null\n+ }",lang:"diff"}),a.a.createElement("h3",{id:"srccomponentsloginjs"},a.a.createElement(r["AnchorLink"],{to:"#srccomponentsloginjs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"src/components/Login.js"),a.a.createElement(i["a"],{code:"import React from 'react';\nimport { useNavigate, useLocation } from \"../react-router-dom\";\n\nfunction Login(props) {\n  let navigate = useNavigate()\n  let location = useLocation()\n  function login() {\n    localStorage.setItem('login', true);\n    let to = '/'\n    if (location.state) {\n      to = location.state.from || '/'\n    }\n    navigate(to)\n  }\n  return (\n    <button onClick={login}>\u767b\u5f55</button>\n  )\n}\n\nexport default Login",lang:"js"}),a.a.createElement("h3",{id:"srccomponentsprotectedjs"},a.a.createElement(r["AnchorLink"],{to:"#srccomponentsprotectedjs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"src/components/Protected.js"),a.a.createElement(i["a"],{code:"import React from 'react';\nimport { Navigate } from \"../react-router-dom\";\n\nfunction Profile(props) {\n  let { component: RouteComponent, path } = props\n  return (\n    localStorage.getItem('login') ? <RouteComponent /> : <Navigate to={{\n      pathname: '/login',\n      state: {from: path}\n    }}/>\n  )\n}\n\nexport default Profile",lang:"js"}),a.a.createElement("h2",{id:"srccomponentshomejs"},a.a.createElement(r["AnchorLink"],{to:"#srccomponentshomejs","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"src/components/Home.js"),a.a.createElement(i["a"],{code:'import React from \'react\';\nimport {useNavigate} from "../react-router";\n\nfunction Home(props) {\n  let navigate = useNavigate()\n  function navigateTo() {\n    navigate("/profile")\n  }\n  return (\n    <div>\n      <p>Home</p>\n      <button onClick={navigateTo}>\u8df3\u8f6c\u5230/profile</button>\n    </div>\n  )\n}\n\nexport default Home',lang:"js"})))}));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(c,{demos:t})}}}]);