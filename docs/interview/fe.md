# Frontend 前端面试题
- 简单直接，适合口述答题
- 部分摘自 [30 secondsOfCode](https://30secondsofcode.org/)

## JS基础
### 如何判断一个对象是不是数组
```javascript
export function isArray (arr) {
  var _toString = Object.prototype.toString
  return _toString.call(arr) === '[object Array]'
}
```

### 如何判断一个对象是不是 promise
```javascript
export function isPromise (val) {
  return val && typeof val.then === 'function'
}
```

### 实现一个 padZero 方法，输入一个月中的某一天 1-31，输出补 0 后的 01-31
```javascript
/**
 * 用于日期补0
 * @param { Number } n
 */
export function padZero (n) {
  if (n % 1 === 0 && n < 10) {
    return '0' + n
  } else {
    return n.toString()
  }
}
```

### 用四个数字 2、3、10、10 写一个JS表达式，让其值等于24，每个数字只能用一次
```javascript
Math.pow(2,10) - Math.pow(10,3) === 24

(10 - 3) * 2 + 10 === 24
```

### 实现一个偏函数
```javascript
// 已知函数 add
function add (x, y) {
  return x + y
}
// 实现一个函数 addTwo
let addTwo = add.bind(this, 2)

addTwo(3) // 5
addTwo(10) // 12
```

### 使用 apply 实现 bind 方法
```javascript
function bind(fn, context) {
  return (...args) => fn.apply(context, args)
}
```

## 正则相关
### 写一个函数，输入一个英文单词，输出该单词的首字母大写形式
```javascript
// regexp
export function upperFirst (str) {
  return str.replace(/\b[a-z]/, char => char.toUpperCase())
}

// array methods
export function upperFirst (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
```

### 写一个函数，输入 2018-08-08, 输出 2018.08.08
```javascript
export function replaceDate(dateStr) {
  return dateStr.replace(/-/g, '.')
}
```

### 实现一个 debounce 函数
```javascript
// from https://30secondsofcode.org/#debounce
// code
export function debounce(fn, ms = 0) {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

// usage
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```

## CSS 基础
### Flexbox实现垂直居中
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
### 绝对定位实现水平居中
```css
.child {
    position: absolute;
    left: 50%;
    transform: translate(50%, 0%);
}
```