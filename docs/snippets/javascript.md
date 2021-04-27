# JavaScript 代码片段

## JS基本操作

### 字符串repeat

```javascript
function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}
```

### 数字前补0

```javascript
function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}
```

### 数组乱序

```javascript
// in place
export function shuffle(arr) {
  let newArr = []
  for(var i=0; i< arr.length; i++){
    let random = Math.floor(Math.random()* arr.length)
    let item = arr.splice(random, 1)[0]
    arr.push(item)
  }
  return arr
}
```

### 深拷贝

- from vuex utils

```javascript
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}
```

### 缓存纯函数

- from vue shared/util

```js
/**
 * Create a cached version of a pure function.
 * 只适用于缓存 接收一个字符串为参数的fn
 */
export function cached (fn) {
  const cache = Object.create(null)
  return function cachedFn (str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}
// use cases
/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = cached((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})
/**
 * Capitalize a string.
 */
export const capitalize = cached((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})
/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B([A-Z])/g
export const hyphenate = cached((str) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})
```

### once

```js
/**
 * Ensure a function is called only once.
 */
export function once (fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}
```

## 日期相关

### 根据日期偏移量获取日期

```javascript
/**
 * jqueryui datepicker 的 string转日期
 * @param { String } offset [-][+]20[y][m][w][d] 表示偏移多少
 * @param { String } date 可选，初始计算的日期，若不传则为现在
 * @return { Date }
 */
export function getOffsetDate (offset, date) {
  date = date ? new Date(date) : new Date()
  var year = date.getFullYear()
  var month = date.getMonth()
  var day = date.getDate()
  var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g
  var matches = pattern.exec(offset)
  while (matches) {
    switch (matches[2] || 'd') {
      case 'd':
      case 'D':
        day += parseInt(matches[1], 10)
        break
      case 'w':
      case 'W':
        day += parseInt(matches[1], 10) * 7
        break
      case 'm':
      case 'M':
        month += parseInt(matches[1], 10)
        break
      case 'y':
      case 'Y':
        year += parseInt(matches[1], 10)
        break
    }
    matches = pattern.exec(offset)
  }
  return new Date(year, month, day)
}
```

### JS 实现多久以前

see [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0/blob/master/src/util/filters.js)

```javascript
export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
```

## 浏览器相关

### 解析 url query 为一个对象

```javascript
function parseUrlQuery() {
  var a = window.location.search.substr(1).split('&')
  if (a == '') return {}
  var b = {}
  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split('=', 2)
    if (p.length == 1) {
      b[p[0]] = ''
    } else {
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '))
    }
  }
  return b
}
```

### 切换全屏

see [stackoverflow](http://stackoverflow.com/a/10627148)

```javascript
function toggleFullScreen() {
   if ((document.fullScreenElement && document.fullScreenElement !== null) ||
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
     if (document.documentElement.requestFullScreen) {
       document.documentElement.requestFullScreen()
     } else if (document.documentElement.mozRequestFullScreen) {
       document.documentElement.mozRequestFullScreen()
     } else if (document.documentElement.webkitRequestFullScreen) {
       document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
     }
   } else {
     if (document.cancelFullScreen) {
       document.cancelFullScreen()
     } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen()
     } else if (document.webkitCancelFullScreen) {
       document.webkitCancelFullScreen()
     }
   }
}
```

### Symbol 简易实现

- 摘自微信小游戏模板项目

```javascript
/**
 * 对于ES6中Symbol的极简兼容
 * 方便模拟私有变量
 */

let Symbol  = window.Symbol
let idCounter = 0

if (!Symbol) {
  Symbol = function Symbol(key) {
    return `__${key}_${Math.floor(Math.random() * 1e9)}_${++idCounter}__`
  }

  Symbol.iterator = Symbol('Symbol.iterator')
}

window.Symbol = Symbol
```

## Node.js 相关

### 获取本机IP地址

```javascript
function getIPAddress(){
  var interfaces = require('os').networkInterfaces()
  for(var deviceName in interfaces){
    var iface = interfaces[deviceName]
    for(var i=0;i<iface.length;i++){
       var alias = iface[i]
       if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
         return alias.address
       }
    }
  }
}
```

## 工具函数

```javascript
// copied from uni-app shared/color.js
export function hexToRgba (hex) {
  let r
  let g
  let b
  hex = hex.replace('#', '')
  if (hex.length === 6) {
    r = hex.substring(0, 2)
    g = hex.substring(2, 4)
    b = hex.substring(4, 6)
  } else if (hex.length === 3) {
    r = hex.substring(0, 1)
    g = hex.substring(1, 2)
    b = hex.substring(2, 3)
  } else {
    return false
  }
  if (r.length === 1) {
    r += r
  }
  if (g.length === 1) {
    g += g
  }
  if (b.length === 1) {
    b += b
  }
  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  return {
    r,
    g,
    b
  }
}
```

## 工具类

```js
// Hooks 类
module.exports = class Hooks {
  constructor () {
    this.hooks = new Map()
  }

  add (name, fn) {
    const hooks = this.get(name)
    hooks.add(fn)
    this.hooks.set(name, hooks)
  }

  get (name) {
    return this.hooks.get(name) || new Set()
  }

  invoke (name, ...args) {
    for (const hook of this.get(name)) {
      hook(...args)
    }
  }

  async invokePromise (name, ...args) {
    for (const hook of this.get(name)) {
      await hook(...args)
    }
  }
}
```