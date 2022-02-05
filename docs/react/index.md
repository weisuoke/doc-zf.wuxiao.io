---
nav:
  title: React
  order: 15
group:
  title: React 目录
  order: 1
order: 1
---

# React 目录

## React-2021.12

### React 核心

Github仓库：[zf-react-202112](https://github.com/weisuoke/zf-react-202112)

1. [实现JSX](/react202112/1)
2. [实现ReactDOM.render](/react202112/2)
3. [实现函数组件和类组件](/react202112/3)
4. [实现类组件的更新](/react202112/4)
5. [实现批量更新](/react202112/5)
6. [实现合成事件](/react202112/6)
7. [实现ref](/react202112/7)
8. [实现React类组件的基本生命周期](/react202112/8)
9. [实现子组件的生命周期](/react202112/9)
10. [实现类组件的子组件更新](/react202112/9)
11. [实现domdiff](/react202112/11)
12. [实现新的生命周期方法](/react202112/12)
13. [使用Context](/react202112/14)
14. [实现Context](/react202112/14)
15. [实现高阶组件](/react202112/15)
16. [renderProps](/react202112/16)
17. [性能优化](/react202112/17)
18. [实现useState+useMemo+useCallback](/react202112/18)
19. [实现useReducer](/react202112/19)
20. [useEffect](/react202112/20)
21. [useLayoutEffect + useImperativeHandle](/react202112/21)
22. [重构 + Fragment](/react202112/22)

### React路由

**react-router-dom(v6)**

Github仓库：[zf-react202112-router](https://github.com/weisuoke/zf-react202112-router)

23. [路由的实现基本原理](/react202112/23)
24. [使用基本路由](/react202112/24)
25. [实现基本路由](/react202112/25)
26. [实现history](/react202112/26)
27. [实现路径参数](/react202112/26)
28. 实现Link导航
29. 实现NavLink
30. 实现受保护路由
31. 使用嵌套路由
32. 调试官方源码
33. 实现嵌套路由
34. 实现嵌套路由
35. 实现配置式路由和懒加载
36. 计算路由分支的权重

### Redux

Github仓库：[zf-react202112-redux](https://github.com/weisuoke/zf-react202112-redux)

37. [实现createStore](/react202112/37)
38. [实现bindActionCreators](/react202112/38)
39. [实现combineReducers](/react202112/39)
40. [实现react-redux](/react202112/40)
41. [实现单个中间件](/react202112/41)
42. [实现compose方法](/react202112/42)
43. [实现三个中间件的级联](/react202112/43)
44. [实现promise和thunk中间件](/react202112/44)
45. 使用connected-react-router
46. redux-first-history实战
47. 实现redux-first-history
48. 实现take和put
49. 实现fork和takeEvery
50. 实现call和cps
51. 支持all
52. 支持取消任务

### dva

53. 使用dva
54. 实现effects
55. 实现路由和跳转路径
56. 使用antd

### 项目

58. 项目初始化
59. 启动开发环境
60. 实现底部导航
61. 实现首页的顶部
62. 实现个人中心
63. 实现注册登录和上传头像
64. 实现轮播图和课程列表
65. 实现上拉加载和下拉刷新
66. 实现虚拟列表和懒加载
67. 实现购物车
68. 实现购物车动画和持久化
69. 搭建后台初始化环境
70. 实现用户接口

## React源码专题课

### React17

[r1701. ReactJSX](/reactsource/v17/1)

r1702. ReactJSX

r1703. ReactFiber

r1704. ReactFiber

r1705. DOM-DIFF算法

r1706. 合成事件

r1707. monoRepos

r1708. setState的表示效果

r1709. setState的执行过程

r1710. useReducer的初次渲染

r1711. useReducer答疑

r1712. 实现updateReducer

r1713. 实现useState

r1714. React的合成事件工作流程

r1715. 实现事件名称的注册

r1716. 实现事件的绑定

r1717. 实现事件监听函数查找

r1718. 实现监听函数执行

r1719. 实现虚拟DOM

r1720. fiber树的遍历和收集

r1721. 开始执行渲染

r1722. 实现初次渲染

r1723. 实现单节点的更新

r1724. 处理多节点和移动的情况

r1725. 实现时间片调度

r1726. 实现同时调度多个任务

r1727. 优先级任务和延迟任务

## React组件库专题课

c01. React树组件（上）

c02. React树组件（下）

c03. 实现Antdesign4的Form组件（上）

c04. 实现Antdesign4的Form组件（下）

c05. React文件拖拽上传组件

c06. 实现keepalive基本功能

c07. 实现滚动监听和缓存销毁

## 进阶课

### ADV101 React单元测试

adv1011. react_test_1

adv1012. react_test_2

adv1013. react_test_3

### ADV102 React18新特性

adv1021. 搭建vite + typescript+react18开发环境

adv1022. 使用Suspense

adv1023. 使用React18新API

### ADV103 实用的自定义 Hooks

adv1031. 自定义Hooks_1

adv1032. 自定义Hooks_2

### ADV104 实现新版JSX转换器

adv1041. 使用jsx转换器

adv1042. 实现jsx转换器

### ADV105 实现create-react-app

adv1051. 实现create-react-app_1

adv1052. 实现create-react-app_2

adv1053. 实现react-scripts中的build命令

adv1054. react-scripts源码中的webpack源码

### ADV106 React性能优化

adv1061. react性能优化_1

adv1062. react性能优化_2

adv1063. react性能优化_3

adv1064. react性能优化_4

### ADV107 UMI3实战和手写实现

adv1071. umi3实战

adv1072. 实现运行时

adv1073. 如何调试umi3源码

adv1074. 实现命令插件的注册和执行

adv1074. 实现hook的注册和触发

### ADV108 Antd Design Pro实战

adv1081. Ant Design Pro(2019) - 1

adv1082. Ant Design Pro(2019) - 2

adv1083. Ant Design Pro(2020) - 1

adv1084. Ant Design Pro(2020) - 2

### ADV109 TypeScript + React工程化

adv1091. 搭建基本的 Webpack + React 开发环境

adv1092. 配置测试和持续集成

adv1093. TypeScript + React 工程化开发

adv1094. React_TypeScript_1

adv1095. React_TypeScript_2

adv1096. React_TypeScript_3

### ADV110 实现Immer不可变数据

adv1101. Immer_1

adv1102. Immer_2
