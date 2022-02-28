(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"5Bsi":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("dEAq"),c=t("H1Ra"),s=o.a.memo((e=>{e.demos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u5b9e\u73b0combinereducers"},o.a.createElement(a["AnchorLink"],{to:"#\u5b9e\u73b0combinereducers","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0combineReducers"),o.a.createElement("h2",{id:"srcindexjs"},o.a.createElement(a["AnchorLink"],{to:"#srcindexjs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/index.js"),o.a.createElement(c["a"],{code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport Counter1 from './components/Counter1'\nimport Counter2 from './components/Counter2'\n\nReactDOM.render(\n  <div>\n    <Counter1 />\n    <hr/>\n    <Counter2 />\n  </div>,\n  document.getElementById('root')\n)",lang:"js"}),o.a.createElement("h2",{id:"srccomponentscounter1js"},o.a.createElement(a["AnchorLink"],{to:"#srccomponentscounter1js","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/components/Counter1.js"),o.a.createElement(c["a"],{code:'import React from \'react\'\nimport store from "../store";\nimport { bindActionCreators } from "../redux";\nimport actionCreators from "../store/actionCreators/counter1";\n\n// \u628a\u4e00\u4e2a action \u521b\u5efa\u8005\u5bf9\u8c61\u548c store.dispatch \u8fdb\u884c\u7ed1\u5b9a\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\nconst boundActions = bindActionCreators(actionCreators, store.dispatch)\n\nfunction Counter1() {\n  let [state, setState] = React.useState(store.getState().counter1.number)\n  React.useEffect(() => {\n    store.subscribe(() => {\n      setState(store.getState().counter1.number)\n    })\n  }, [])\n  return (\n    <div>\n      <p>{store.getState().counter1.number}</p>\n      <button onClick={boundActions.add}>+</button>\n      <button onClick={boundActions.minus}>-</button>\n    </div>\n  )\n}\n\nexport default Counter1\n\n/**\n * \u7ec4\u4ef6\u548c\u4ed3\u5e93\u6709\u4e24\u79cd\u5173\u7cfb\n * \u4e00\u79cd\u8f93\u5165 \u7ec4\u4ef6\u53ef\u4ee5\u4ece\u4ed3\u5e93\u4e2d\u8bfb\u53d6\u72b6\u6001\u6570\u636e\u8fdb\u884c\u6e32\u67d3\u548c\u663e\u793a\n * \u4e00\u79cd\u53eb\u8f93\u51fa \u53ef\u4ee5\u5728\u7ec4\u4ef6\u6d3e\u53d1\u52a8\u4f5c\uff0c\u4fee\u6539\u4ed3\u5e93\u4e2d\u7684\u72b6\u6001\n */',lang:"js"}),o.a.createElement("h2",{id:"srccomponentscounter2js"},o.a.createElement(a["AnchorLink"],{to:"#srccomponentscounter2js","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/components/Counter2.js"),o.a.createElement(c["a"],{code:'import React from \'react\'\nimport store from "../store";\nimport { bindActionCreators } from "../redux";\nimport actionCreators from "../store/actionCreators/counter2";\n\n// \u628a\u4e00\u4e2a action \u521b\u5efa\u8005\u5bf9\u8c61\u548c store.dispatch \u8fdb\u884c\u7ed1\u5b9a\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\nconst boundActions = bindActionCreators(actionCreators, store.dispatch)\n\nfunction Counter2() {\n  let [state, setState] = React.useState(store.getState().counter2.number)\n  React.useEffect(() => {\n    store.subscribe(() => {\n      setState(store.getState().counter2.number)\n    })\n  }, [])\n  return (\n    <div>\n      <p>{store.getState().counter2.number}</p>\n      <button onClick={boundActions.add2}>+</button>\n      <button onClick={boundActions.minus2}>-</button>\n    </div>\n  )\n}\n\nexport default Counter2\n\n/**\n * \u7ec4\u4ef6\u548c\u4ed3\u5e93\u6709\u4e24\u79cd\u5173\u7cfb\n * \u4e00\u79cd\u8f93\u5165 \u7ec4\u4ef6\u53ef\u4ee5\u4ece\u4ed3\u5e93\u4e2d\u8bfb\u53d6\u72b6\u6001\u6570\u636e\u8fdb\u884c\u6e32\u67d3\u548c\u663e\u793a\n * \u4e00\u79cd\u53eb\u8f93\u51fa \u53ef\u4ee5\u5728\u7ec4\u4ef6\u6d3e\u53d1\u52a8\u4f5c\uff0c\u4fee\u6539\u4ed3\u5e93\u4e2d\u7684\u72b6\u6001\n */',lang:"js"}),o.a.createElement("h2",{id:"srcstoreactioncreatorscounter2js"},o.a.createElement(a["AnchorLink"],{to:"#srcstoreactioncreatorscounter2js","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/store/actionCreators/counter2.js"),o.a.createElement(c["a"],{code:'import * as actionType from "../action-types";\n\nfunction add2() {\n  return { type: actionType.ADD2 }\n}\n\nfunction minus2() {\n  return { type: actionType.MINUS2 }\n}\n\nconst actionCreators = { add2, minus2 }\n\nexport default actionCreators',lang:"js"}),o.a.createElement("h2",{id:"srcstorereducerscounter1js"},o.a.createElement(a["AnchorLink"],{to:"#srcstorereducerscounter1js","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/store/reducers/counter1.js"),o.a.createElement(c["a"],{code:'import * as actionType from "../action-types";\n\n/**\n * \u72b6\u6001\u8ba1\u7b97\u5668\n * @param state \u8001\u72b6\u6001\n * @param action \u52a8\u4f5c \u5fc5\u987b\u6709\u4e00\u4e2atype\u5c5e\u6027\n */\nfunction counter1(state = {number: 0}, action) {\n  switch (action.type) {\n    case actionType.ADD:\n      return { number: state.number + 1 }\n    case actionType.MINUS:\n      return { number: state.number - 1 }\n    default:\n      return state\n  }\n}\n\nexport default counter1',lang:"js"}),o.a.createElement("h2",{id:"srcstorereducerscounter2js"},o.a.createElement(a["AnchorLink"],{to:"#srcstorereducerscounter2js","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/store/reducers/counter2.js"),o.a.createElement(c["a"],{code:'import * as actionType from "../action-types";\n\n/**\n * \u72b6\u6001\u8ba1\u7b97\u5668\n * @param state \u8001\u72b6\u6001\n * @param action \u52a8\u4f5c \u5fc5\u987b\u6709\u4e00\u4e2atype\u5c5e\u6027\n */\nfunction counter2(state = {number: 0}, action) {\n  switch (action.type) {\n    case actionType.ADD2:\n      return { number: state.number + 1 }\n    case actionType.MINUS2:\n      return { number: state.number - 1 }\n    default:\n      return state\n  }\n}\n\nexport default counter2',lang:"js"}),o.a.createElement("h2",{id:"srcstorereducersindexjs"},o.a.createElement(a["AnchorLink"],{to:"#srcstorereducersindexjs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/store/reducers/index.js"),o.a.createElement(c["a"],{code:'import counter1 from "./counter1";\nimport counter2 from "./counter2";\nimport {combineReducers} from "../../redux";\n\nlet reducers = {\n  counter1,\n  counter2,\n}\nlet combinedReducer = combineReducers(reducers)\nexport default combinedReducer',lang:"js"}),o.a.createElement("h2",{id:"srcstoreindexjs"},o.a.createElement(a["AnchorLink"],{to:"#srcstoreindexjs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/store/index.js"),o.a.createElement(c["a"],{code:'import { createStore } from "../redux";\nimport combinedReducer from "./reducers";\n\nlet store = createStore(combinedReducer, { counter1: { number: 0 }, counter2: { number: 0 } });\nwindow.store = store;\nexport default store',lang:"js"}),o.a.createElement("h2",{id:"srcreduxcombinereducersjs"},o.a.createElement(a["AnchorLink"],{to:"#srcreduxcombinereducersjs","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"src/redux/combineReducers.js"),o.a.createElement(c["a"],{code:"function combineReducers(reducers) {\n  return function(lastState = {}, action) {\n    let nextState = {};\n\n    for (let key in reducers) {\n      // key \u662f\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u503c\u662f reducer \u51fd\u6570\n      let reducer = reducers[key];\n      // \u83b7\u53d6\u8001\u7684\u603b\u72b6\u6001\u4e2d\u6b64key\u5bf9\u5e94\u7684\u5206\u72b6\u6001\n      let lastStateForKey = lastState[key]\n      // \u628a\u6b64key\u5bf9\u5e94\u7684\u8001\u5f97\u5206\u72b6\u6001\u548c\u52a8\u4f5c\u5bf9\u8c61\u4f20\u9012\u7ed9\u8001\u5f97\u5904\u7406\u5668reducerForKey\uff0c\u8ba1\u7b97\u65b0\u7684\u5206\u72b6\u6001\n      let nextStateForKey = reducer(lastStateForKey, action);\n      // \u628a\u8ba1\u7b97\u7684\u7ed3\u679c\u518d\u4f20\u9012\u7ed9\u65b0\u7684\u603b\u72b6\u6001\u7684key\u5c5e\u6027\n      nextState[key] = nextStateForKey\n    }\n\n    return nextState\n  }\n}\n\nexport default combineReducers",lang:"js"})))}));n["default"]=e=>{var n=o.a.useContext(a["context"]),t=n.demos;return o.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(s,{demos:t})}}}]);