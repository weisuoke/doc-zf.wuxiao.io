---
nav:
  title: Node
  order: 5
title: 05. promise的链式调用
order: 5
---

# promise的链式调用

7.promise.js

```js
// let promise = new Promise((resolve, reject) => {
//   resolve('ok')
// })
//
// promise.then((data) => {
//   console.log(data)
// }, () => {
//
// })

const Promise = require('./promise')
const fs = require('fs')

// 为什么要处理链式调用 我们写一个功能 先读取 a.txt 文件，拿到具体的内容 读取内容对应的文件
// fs.readFile('./a.txt', 'utf8', function (err, data) {
//   fs.readFile(data, 'utf8', function (err, data) {
//     // 回调地狱 错误不好处理，代码全部耦合在一起
//   })
// })

function readFile(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, function (err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}

// 可以在 then 方法（成功和失败）中返回一个 promise，promise会采用返回的 promise 的成功的值或失败原因

// 1. then 方法中成功的回调或者失败的回调返回的是一个promise，那么采用返回的 promise 的状态，走外层下一次 then 中的成功或失败，同时将promise处理后的结果向下传递
// 2. then 方法中，成功的回调或者失败的回调返回的是一个普通值（不是promise）这里会将返回的结果传递到下一次 then 成功中去
// 3. 如果在 then 方法中成功的回调或者失败的回调，执行出错会走到外层下一个 then 中的失败中去
readFile('./a.txt', 'utf8').then(data => {
  console.log('success', data)
  // return readFile(data, 'utf8');
  throw new Error('1234')
}, err => {
  console.log('fail', err)
}).then((data) => {
  console.log(data)
}, (err) => {
  console.log('err', err)
})

// promise 一旦成功不能失败
// 如果返回的是一个失败的 promise 或者报错了。才会走下一个 then 的失败，否则全部走成功
// 如何实现链式调用？ return new Promise()
```

promise/index.js

```js
const PENDING = "PENDING"; // 默认等待态
const FULFILLED = "FULFILLED";  // 成功态
const REJECT = "REJECT";  // 失败态

function resolvePromise(x, promise2, resolve, reject) {
  // 如果x是一个普通值则直接调用resolve即可

  // 如果x是一个promise那么应该采用这个promise的状态决定调用的是resolve还是reject
}

class Promise {
  constructor(executor) { // executor 会默认执行 同步执行
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
     // 用户调用 resolve 和 reject 可以将对应的结果暴露在当前的 promise 实例上
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECT
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject); // 默认 new Promise中的函数会立即执行
    } catch (e) { // 如果执行时出错，我们将错误传递到 reject 中 =》 执行到了失败逻辑
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    // 每次调用 then 方法，都必须返回一个全新的 promise
    let promise2 = new Promise((resolve, reject) => {
      // NOTE: x 就是上一个 then 成功或者失败的返回值，这个 x 决定 promise2 走成功还是走失败
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(x, promise2, resolve, reject)
          } catch(e) {
            reject(e)
          }
        }, 0)
      }

      if (this.status === REJECT) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(x, promise2, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.status === PENDING) {
        console.log('pending')
        // 发布订阅模式
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(x, promise2, resolve, reject)
            } catch(e) {
              reject(e)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(x, promise2, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return promise2
  }
}

module.exports = Promise
```

