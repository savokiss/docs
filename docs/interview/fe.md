## JS基础
### 如何判断一个对象是不是数组
```javascript
export function isArray (arr) {
  var _toString = Object.prototype.toString
  return _toString.call(arr) === '[object Array]'
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
1. Math.pow(2,10) - Math.pow(10,3) === 24
2. (10-3)*2 + 10 === 24
```


## 正则相关
### 写一个函数，输入一个英文单词，输出该单词的首字母大写形式
```javascript
export function upperFirst (str) {
  return str.replace(/\b[a-z]/, char => char.toUpperCase())
}
```

### 写一个函数，输入 2018-08-08, 输出 2018.08.08
```javascript
export function replaceDate(dateStr) {
  return dateStr.replace(/-/g, '.')
}
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