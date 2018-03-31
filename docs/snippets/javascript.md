# 代码片段
- 主要目的是备忘

## JS基本操作

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