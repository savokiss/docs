# 代码片段
- 主要目的是备忘

## 浏览器相关

### 切换全屏
```javascript
// http://stackoverflow.com/a/10627148  
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