(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{o6rZ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),r=a("dEAq"),o=a("H1Ra"),s=c.a.memo((e=>{e.demos;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"keepalive\u7ec4\u4ef6"},c.a.createElement(r["AnchorLink"],{to:"#keepalive\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"KeepAlive\u7ec4\u4ef6"),c.a.createElement("h2",{id:"1\u521d\u59cb\u5316\u9879\u76ee"},c.a.createElement(r["AnchorLink"],{to:"#1\u521d\u59cb\u5316\u9879\u76ee","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"1.\u521d\u59cb\u5316\u9879\u76ee"),c.a.createElement(o["a"],{code:"create-react-app zhufeng-keepalive\ncd zhufeng-keepalive\nnpm install react-router-dom@5.3.0 keepalive-react-component --save\nnpm start",lang:"js"}),c.a.createElement("h2",{id:"2\u8dd1\u901a\u8def\u7531"},c.a.createElement(r["AnchorLink"],{to:"#2\u8dd1\u901a\u8def\u7531","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"2.\u8dd1\u901a\u8def\u7531"),c.a.createElement("h3",{id:"21-srcindexjs"},c.a.createElement(r["AnchorLink"],{to:"#21-srcindexjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"2.1 src\\index.js"),c.a.createElement("p",null,"src\\index.js"),c.a.createElement(o["a"],{code:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'\nimport Home from './components/Home';\nimport UserList from './components/UserList';\nimport UserAdd from './components/UserAdd';\nconst App = () => {\n  return (\n    <Router  >\n      <ul>\n        <li><Link to=\"/\">\u9996\u9875</Link></li>\n        <li><Link to=\"/list\">\u7528\u6237\u5217\u8868</Link></li>\n        <li><Link to=\"/add\">\u6dfb\u52a0\u7528\u6237</Link></li>\n      </ul>\n      <Switch>\n        <Route path={'/'} component={Home} exact />\n        <Route path={'/list'} component={UserList} />\n        <Route path={'/add'} component={UserAdd} />\n      </Switch>\n    </Router>\n  )\n}\nReactDOM.render(<App/>, document.getElementById('root'));",lang:"js"}),c.a.createElement("h3",{id:"22-homejs"},c.a.createElement(r["AnchorLink"],{to:"#22-homejs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"2.2 Home.js"),c.a.createElement("p",null,"src\\components\\Home.js"),c.a.createElement(o["a"],{code:"import React from 'react';\nconst Home = (props) => {\n    return (\n        <div>\n            <button >\u91cd\u7f6eUserAdd</button>\n            <button >\u91cd\u7f6eUserList</button>\n        </div>\n    )\n}\nexport default Home;",lang:"js"}),c.a.createElement("h3",{id:"23-useraddjs"},c.a.createElement(r["AnchorLink"],{to:"#23-useraddjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"2.3 UserAdd.js"),c.a.createElement("p",null,"src\\components\\UserAdd.js"),c.a.createElement(o["a"],{code:"import React from 'react';\nconst UserAdd = ()=>{\n    let [number,setNumber]=React.useState(0);\n    return (\n        <div>\n            \u7528\u6237\u540d:<input/>\n            <hr/>\n            <button onClick={()=>setNumber(number=>number+1)}>{number}</button>\n        </div>\n    )\n}\nexport default UserAdd;",lang:"js"}),c.a.createElement("h3",{id:"24-userlistjs"},c.a.createElement(r["AnchorLink"],{to:"#24-userlistjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"2.4 UserList.js"),c.a.createElement("p",null,"src\\components\\UserList.js"),c.a.createElement(o["a"],{code:"import React from 'react';\nimport {Link} from 'react-router-dom'\nconst UserList = (props)=>{\n    let users = new Array(100).fill(0);\n    return (\n        <ul style={{height:'200px',overflow:'scroll'}}>\n            {\n                users.map((item,index)=>(\n                    <li key={index}><Link to={`/detail/${index}`}>{index}</Link></li>\n                ))\n            }\n        </ul>\n    )\n}\nexport default UserList;",lang:"js"}),c.a.createElement("h2",{id:"3\u5b9e\u73b0keep-alive"},c.a.createElement(r["AnchorLink"],{to:"#3\u5b9e\u73b0keep-alive","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3.\u5b9e\u73b0keep-alive"),c.a.createElement("h3",{id:"31-srcindexjs"},c.a.createElement(r["AnchorLink"],{to:"#31-srcindexjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3.1 src\\index.js"),c.a.createElement("p",null,"src\\index.js"),c.a.createElement(o["a"],{code:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'\nimport Home from './components/Home';\nimport UserList from './components/UserList';\nimport UserAdd from './components/UserAdd';\n+import { KeepAliveProvider, withKeepAlive } from './keepalive-react-component';\n+let KeepAliveHome = withKeepAlive(Home, { cacheId: 'Home'});\n+let KeepAliveUserList = withKeepAlive(UserList, { cacheId: 'UserList'});\n+let KeepAliveUserAdd = withKeepAlive(UserAdd, { cacheId: 'UserAdd' });\nconst App = () => {\n  return (\n    <Router  >\n+     <KeepAliveProvider>\n        <ul>\n          <li><Link to=\"/\">\u9996\u9875</Link></li>\n          <li><Link to=\"/list\">\u7528\u6237\u5217\u8868</Link></li>\n          <li><Link to=\"/add\">\u6dfb\u52a0\u7528\u6237</Link></li>\n        </ul>\n        <Switch>\n+          <Route path={'/'} component={KeepAliveHome} exact />\n+          <Route path={'/list'} component={KeepAliveUserList} />\n+          <Route path={'/add'} component={KeepAliveUserAdd} />\n        </Switch>\n+     </KeepAliveProvider>\n    </Router>\n  )\n}\nReactDOM.render(<App/>, document.getElementById('root'));",lang:"diff"}),c.a.createElement("h3",{id:"32-keepalive-react-componentindexjs"},c.a.createElement(r["AnchorLink"],{to:"#32-keepalive-react-componentindexjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3.2 keepalive-react-component\\index.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\index.js"),c.a.createElement(o["a"],{code:"export {default as KeepAliveProvider} from './KeepAliveProvider';\nexport {default as withKeepAlive} from './withKeepAlive';",lang:"js"}),c.a.createElement("h3",{id:"33-cache-typesjs"},c.a.createElement(r["AnchorLink"],{to:"#33-cache-typesjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3.3 cache-types.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\cache-types.js"),c.a.createElement(o["a"],{code:"export const CREATE = 'CREATE';        //\u521b\u5efa\nexport const CREATED = 'CREATED';      //\u521b\u5efa\u6210\u529f\nexport const ACTIVE = 'ACTIVE';        //\u6fc0\u6d3b",lang:"js"}),c.a.createElement("h3",{id:"34-cachereducerjs"},c.a.createElement(r["AnchorLink"],{to:"#34-cachereducerjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3.4 cacheReducer.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\cacheReducer.js"),c.a.createElement(o["a"],{code:"import *  as cacheTypes from './cache-types';\nfunction cacheReducer(cacheStates = {}, { type, payload }) {\n    switch (type) {\n        case cacheTypes.CREATE:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n                    cacheId:payload.cacheId,\n                    element:payload.element,\n                    status:cacheTypes.CREATE\n                } };\n        case cacheTypes.CREATED:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n                    ...cacheStates[payload.cacheId],\n                    doms:payload.doms,\n                    status:cacheTypes.CREATED\n                } };   \n        case cacheTypes.ACTIVE:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n                    ...cacheStates[payload.cacheId],\n                    status:cacheTypes.ACTIVE\n                } };                \n        default:\n            return cacheStates;\n    }\n}\nexport default cacheReducer;",lang:"js"}),c.a.createElement("h3",{id:"35-cachecontextjs"},c.a.createElement(r["AnchorLink"],{to:"#35-cachecontextjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3.5 CacheContext.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\CacheContext.js"),c.a.createElement(o["a"],{code:"import React from 'react';\nconst CacheContext = React.createContext();\nexport default CacheContext;",lang:"js"}),c.a.createElement("h3",{id:"36-keepaliveproviderjs"},c.a.createElement(r["AnchorLink"],{to:"#36-keepaliveproviderjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3.6 KeepAliveProvider.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\KeepAliveProvider.js"),c.a.createElement(o["a"],{code:"import React, { useReducer, useCallback } from \"react\";\nimport CacheContext from './CacheContext';\nimport cacheReducer from './cacheReducer';\nimport * as cacheTypes from './cache-types';\nfunction KeepAliveProvider(props) {\n    let [cacheStates, dispatch] = useReducer(cacheReducer, {});\n    const mount = useCallback(({ cacheId, element }) => {\n        if(!cacheStates[cacheId]){\n            dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } });\n        }\n    }, [cacheStates]);\n    return (\n        <CacheContext.Provider value={{ mount, cacheStates, dispatch }}>\n            {props.children}\n            {Object.values(cacheStates).map(({ cacheId, element }) => (\n                <div\n                    id={`cache_${cacheId}`}\n                    key={cacheId}\n                    ref={(dom) => {\n                        let cacheState = cacheStates[cacheId];\n                        if (dom && (!cacheState.doms)) {\n                            let doms = Array.from(dom.childNodes);\n                            dispatch({ type: cacheTypes.CREATED, payload: { cacheId, doms } });\n                        }\n                    }}\n                >{element}</div>\n            ))}\n        </CacheContext.Provider>\n    );\n}\nexport default KeepAliveProvider;",lang:"js"}),c.a.createElement("h3",{id:"37-withkeepalivejs"},c.a.createElement(r["AnchorLink"],{to:"#37-withkeepalivejs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"3.7 withKeepAlive.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\withKeepAlive.js"),c.a.createElement(o["a"],{code:"import React, { useContext, useRef,useEffect } from \"react\";\nimport CacheContext from './CacheContext';\nfunction withKeepAlive(OldComponent, { cacheId = window.location.pathname }) {\n    return function (props) {\n        const {mount, cacheStates,dispatch } = useContext(CacheContext);\n        const ref = useRef(null);\n        useEffect(() => {\n            let cacheState = cacheStates[cacheId];\n            if(cacheState&&cacheState.doms){\n                 let doms = cacheState.doms;\n                 doms.forEach(dom=>ref.current.appendChild(dom));\n            }else{\n                mount({ cacheId, element: <OldComponent {...props} dispatch={dispatch}/> })\n            }\n        }, [cacheStates, dispatch, mount, props]);\n        return <div id={`keepalive_${cacheId}`} ref={ref} />;\n    }\n}\nexport default withKeepAlive;",lang:"js"}),c.a.createElement("h2",{id:"4\u4fdd\u6301\u6eda\u52a8\u72b6\u6001"},c.a.createElement(r["AnchorLink"],{to:"#4\u4fdd\u6301\u6eda\u52a8\u72b6\u6001","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"4.\u4fdd\u6301\u6eda\u52a8\u72b6\u6001"),c.a.createElement("h3",{id:"41-srcindexjs"},c.a.createElement(r["AnchorLink"],{to:"#41-srcindexjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"4.1 src\\index.js"),c.a.createElement("p",null,"src\\index.js"),c.a.createElement(o["a"],{code:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'\nimport Home from './components/Home';\nimport UserList from './components/UserList';\nimport UserAdd from './components/UserAdd';\nimport { KeepAliveProvider, withKeepAlive } from './keepalive-react-component';\nlet KeepAliveHome = withKeepAlive(Home, { cacheId: 'Home'});\n+let KeepAliveUserList = withKeepAlive(UserList, { cacheId: 'UserList',scroll:true});\nlet KeepAliveUserAdd = withKeepAlive(UserAdd, { cacheId: 'UserAdd' });\nconst App = () => {\n  return (\n    <Router  >\n      <KeepAliveProvider>\n        <ul>\n          <li><Link to=\"/\">\u9996\u9875</Link></li>\n          <li><Link to=\"/list\">\u7528\u6237\u5217\u8868</Link></li>\n          <li><Link to=\"/add\">\u6dfb\u52a0\u7528\u6237</Link></li>\n        </ul>\n        <Switch>\n          <Route path={'/'} component={KeepAliveHome} exact />\n          <Route path={'/list'} component={KeepAliveUserList} />\n          <Route path={'/add'} component={KeepAliveUserAdd} />\n        </Switch>\n      </KeepAliveProvider>\n    </Router>\n  )\n}\nReactDOM.render(<App/>, document.getElementById('root'));",lang:"diff"}),c.a.createElement("h3",{id:"42-cachereducerjs"},c.a.createElement(r["AnchorLink"],{to:"#42-cachereducerjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"4.2 cacheReducer.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\cacheReducer.js"),c.a.createElement(o["a"],{code:"import *  as cacheTypes from './cache-types';\nfunction cacheReducer(cacheStates = {}, { type, payload }) {\n    switch (type) {\n        case cacheTypes.CREATE:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n+                   scrolls:{},\n                    cacheId:payload.cacheId,\n                    element:payload.element,\n                    status:cacheTypes.CREATE\n                } };\n        case cacheTypes.CREATED:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n                    ...cacheStates[payload.cacheId],\n                    doms:payload.doms,\n                    status:cacheTypes.CREATED\n                } };   \n        case cacheTypes.ACTIVE:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n                    ...cacheStates[payload.cacheId],\n                    status:cacheTypes.ACTIVE\n                } };                \n        default:\n            return cacheStates;\n    }\n}\nexport default cacheReducer;",lang:"diff"}),c.a.createElement("h3",{id:"43-keepaliveproviderjs"},c.a.createElement(r["AnchorLink"],{to:"#43-keepaliveproviderjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"4.3 KeepAliveProvider.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\KeepAliveProvider.js"),c.a.createElement(o["a"],{code:"import React, { useReducer, useCallback } from \"react\";\nimport CacheContext from './CacheContext';\nimport cacheReducer from './cacheReducer';\nimport * as cacheTypes from './cache-types';\nfunction KeepAliveProvider(props) {\n    let [cacheStates, dispatch] = useReducer(cacheReducer, {});\n    const mount = useCallback(({ cacheId, element }) => {\n        if(!cacheStates[cacheId]){\n            dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } });\n        }\n    }, [cacheStates]);\n+   let handleScroll = useCallback((cacheId, {target}) => {\n+       if(cacheStates[cacheId]){\n+           let scrolls = cacheStates[cacheId].scrolls;\n+           scrolls[target] = target.scrollTop;\n+       }\n+   }, [cacheStates]);\n    return (\n+       <CacheContext.Provider value={{ mount, cacheStates, dispatch,handleScroll }}>\n            {props.children}\n            {Object.values(cacheStates).map(({ cacheId, element }) => (\n                <div\n                    id={`cache_${cacheId}`}\n                    key={cacheId}\n                    ref={(dom) => {\n                        let cacheState = cacheStates[cacheId];\n                        if (dom && (!cacheState.doms)) {\n                            let doms = Array.from(dom.childNodes);\n                            dispatch({ type: cacheTypes.CREATED, payload: { cacheId, doms } });\n                        }\n                    }}\n                >{element}</div>\n            ))}\n        </CacheContext.Provider>\n    );\n}\nexport default KeepAliveProvider;",lang:"diff"}),c.a.createElement("h3",{id:"44-withkeepalivejs"},c.a.createElement(r["AnchorLink"],{to:"#44-withkeepalivejs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"4.4 withKeepAlive.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\withKeepAlive.js"),c.a.createElement(o["a"],{code:"import React, { useContext, useRef,useEffect } from \"react\";\nimport CacheContext from './CacheContext';\n+function withKeepAlive(OldComponent, { cacheId = window.location.pathname,scroll=false }) {\n    return function (props) {\n+       const {mount, cacheStates,dispatch,handleScroll } = useContext(CacheContext);\n        const ref = useRef(null);\n+       useEffect(()=>{\n+           if(scroll){\n+               ref.current.addEventListener('scroll', handleScroll.bind(null, cacheId),true);\n+           }\n+       },[handleScroll]);\n        useEffect(() => {\n            let cacheState = cacheStates[cacheId];\n            if(cacheState&&cacheState.doms){\n                let doms = cacheState.doms;\n                doms.forEach(dom=>ref.current.appendChild(dom));\n+               if(scroll){\n+                  doms.forEach(dom=>{\n+                      if (cacheState.scrolls[dom])\n+                        dom.scrollTop = cacheState.scrolls[dom];\n+                  });\n+                 }\n            }else{\n                mount({ cacheId, element: <OldComponent {...props} dispatch={dispatch}/> })\n            }\n        }, [cacheStates, dispatch, mount, props]);\n        return <div id={`keepalive_${cacheId}`} ref={ref} />;\n    }\n}\nexport default withKeepAlive;",lang:"diff"}),c.a.createElement("h2",{id:"5\u9500\u6bc1\u7f13\u5b58"},c.a.createElement(r["AnchorLink"],{to:"#5\u9500\u6bc1\u7f13\u5b58","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"5.\u9500\u6bc1\u7f13\u5b58"),c.a.createElement("h3",{id:"51-homejs"},c.a.createElement(r["AnchorLink"],{to:"#51-homejs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"5.1 Home.js"),c.a.createElement("p",null,"src\\components\\Home.js"),c.a.createElement(o["a"],{code:"import React from 'react';\nconst Home = (props) => {\n    return (\n        <div>\n+            <button onClick={() => props.dispatch({ type: 'DESTROY', payload: { cacheId: 'UserAdd' } })}>\u91cd\u7f6eUserAdd</button>\n+            <button onClick={() => props.dispatch({ type: 'DESTROY', payload: { cacheId: 'UserList' } })}>\u91cd\u7f6eUserList</button>\n        </div>\n    )\n}\nexport default Home;",lang:"diff"}),c.a.createElement("h3",{id:"52-cache-typesjs"},c.a.createElement(r["AnchorLink"],{to:"#52-cache-typesjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"5.2 cache-types.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\cache-types.js"),c.a.createElement(o["a"],{code:"export const CREATE = 'CREATE';        //\u521b\u5efa\nexport const CREATED = 'CREATED';      //\u521b\u5efa\u6210\u529f\nexport const ACTIVE = 'ACTIVE';        //\u6fc0\u6d3b\n+export const DESTROY = 'DESTROY';     //\u9500\u6bc1",lang:"diff"}),c.a.createElement("h3",{id:"53-cachereducerjs"},c.a.createElement(r["AnchorLink"],{to:"#53-cachereducerjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"5.3 cacheReducer.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\cacheReducer.js"),c.a.createElement(o["a"],{code:"import *  as cacheTypes from './cache-types';\nfunction cacheReducer(cacheStates = {}, { type, payload }) {\n    switch (type) {\n        case cacheTypes.CREATE:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n                    scrolls:{},\n                    cacheId:payload.cacheId,\n                    element:payload.element,\n                    status:cacheTypes.CREATE\n                } };\n        case cacheTypes.CREATED:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n                    ...cacheStates[payload.cacheId],\n                    doms:payload.doms,\n                    status:cacheTypes.CREATED\n                } };   \n        case cacheTypes.ACTIVE:\n            return { ...cacheStates,\n                [payload.cacheId]: {\n                    ...cacheStates[payload.cacheId],\n                    status:cacheTypes.ACTIVE\n                } };           \n+       case cacheTypes.DESTROY:\n+           return { ...cacheStates,\n+               [payload.cacheId]:{\n+                   ...cacheStates[payload.cacheId],\n+                   status:cacheTypes.DESTROY\n+               }};              \n        default:\n            return cacheStates;\n    }\n}\nexport default cacheReducer;",lang:"diff"}),c.a.createElement("h3",{id:"54-keepaliveproviderjs"},c.a.createElement(r["AnchorLink"],{to:"#54-keepaliveproviderjs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"5.4 KeepAliveProvider.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\KeepAliveProvider.js"),c.a.createElement(o["a"],{code:"import React, { useReducer, useCallback } from \"react\";\nimport CacheContext from './CacheContext';\nimport cacheReducer from './cacheReducer';\nimport * as cacheTypes from './cache-types';\nfunction KeepAliveProvider(props) {\n    let [cacheStates, dispatch] = useReducer(cacheReducer, {});\n    const mount = useCallback(({ cacheId, element }) => {\n+      if(cacheStates[cacheId]){\n+          let cacheState = cacheStates[cacheId];\n+          if(cacheState.status === cacheTypes.DESTROY){\n+              let doms = cacheState.doms;\n+              doms.forEach(dom=>dom.parentNode.removeChild(dom));\n+              dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } });\n+          }\n+      }else{\n           dispatch({ type: cacheTypes.CREATE, payload: { cacheId, element } });\n+      }\n    }, [cacheStates]);\n    let handleScroll = useCallback((cacheId, {target}) => {\n        if(cacheStates[cacheId]){\n            let scrolls = cacheStates[cacheId].scrolls;\n            scrolls[target] = target.scrollTop;\n        }\n    }, [cacheStates]);\n    return (\n        <CacheContext.Provider value={{ mount, cacheStates, dispatch,handleScroll }}>\n            {props.children}\n+           {Object.values(cacheStates).filter(cacheState=>cacheState.status!==cacheTypes.DESTROY).map(({ cacheId, element }) => (\n                <div\n                    id={`cache_${cacheId}`}\n                    key={cacheId}\n                    ref={(dom) => {\n                        let cacheState = cacheStates[cacheId];\n+                       if (dom && (!cacheState.doms || cacheState.status === cacheTypes.DESTROY) ) {\n                            let doms = Array.from(dom.childNodes);\n                            dispatch({ type: cacheTypes.CREATED, payload: { cacheId, doms } });\n                        }\n                    }}\n                >{element}</div>\n            ))}\n        </CacheContext.Provider>\n    );\n}\nexport default KeepAliveProvider;",lang:"diff"}),c.a.createElement("h3",{id:"55-withkeepalivejs"},c.a.createElement(r["AnchorLink"],{to:"#55-withkeepalivejs","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"5.5 withKeepAlive.js"),c.a.createElement("p",null,"src\\keepalive-react-component\\withKeepAlive.js"),c.a.createElement(o["a"],{code:"import React, { useContext, useRef,useEffect } from \"react\";\nimport CacheContext from './CacheContext';\n+import * as cacheTypes from './cache-types';\nfunction withKeepAlive(OldComponent, { cacheId = window.location.pathname,scroll=false }) {\n    return function (props) {\n        const {mount, cacheStates,dispatch,handleScroll } = useContext(CacheContext);\n        const ref = useRef(null);\n        useEffect(()=>{\n            if(scroll){\n                ref.current.addEventListener('scroll', handleScroll.bind(null, cacheId),true);\n            }\n        },[handleScroll]);\n        useEffect(() => {\n            let cacheState = cacheStates[cacheId];\n+           if(cacheState&&cacheState.doms && cacheState.status !== cacheTypes.DESTROY){\n                let doms = cacheState.doms;\n                doms.forEach(dom=>ref.current.appendChild(dom));\n                if(scroll){\n                   doms.forEach(dom=>{\n                       if (cacheState.scrolls[dom])\n                         dom.scrollTop = cacheState.scrolls[dom];\n                   });\n                  }\n            }else{\n                mount({ cacheId, element: <OldComponent {...props} dispatch={dispatch}/> })\n            }\n        }, [cacheStates, dispatch, mount, props]);\n        return <div id={`keepalive_${cacheId}`} ref={ref} />;\n    }\n}\nexport default withKeepAlive;",lang:"diff"})))}));t["default"]=e=>{var t=c.a.useContext(r["context"]),a=t.demos;return c.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),c.a.createElement(s,{demos:a})}}}]);