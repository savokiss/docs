# Vue 相关面试题

## Vue 基础
### MVVM 是什么？
Model View ViewModel
- Model - `域模型` - JS 对象
- View - `视图模板` - DOM
- ViewModel - `视图的模型（为视图服务）` - Vue 实例

数据驱动，操作数据就可以操作视图（无需操作 DOM）。

ViewModel 作为中间的桥梁，Model 的更新会自动更新 View，反过来也一样。


### Vue 中组件间通信的方法
1. 父到子
  - props (.sync 修饰符，是 `this.$emit('update:props', val)` 的语法糖)
  - v-model (是 props value, `this.$emit('value', val')` 的语法糖)
  - provide/inject (一般用于组件库)

2. 子到父
  - $emit() 传值， @接收 （emit实现了观察者模式方法，可以传多个参数，@是v-on的缩写)

3. 组件间
  - eventHub 通信中心（本质上是Vue实例，this.$root 也可以)
  - router 传参 (query和params的区别)
  - vuex

### Vue 组件的选项对象中的data是对象还是函数，为什么？
都可以
一般在 SFC 中是函数
如果能确认这个组件只使用一次，可以写成对象，否则复用该组件时会共享该对象，引起混乱。

### Vue Router 中的 mode 分别有几个值，有什么区别？
三个。"hash" | "history" | "abstract"
见<https://router.vuejs.org/zh/api/#mode>

## Vue 进阶
### Vue 中如何实现双向绑定？
![](../assets/vue/vue-reactive.png)
1. 使用 `Object.defineProperty` 进行数据劫持
2. getter 中进行依赖收集
3. setter 中定义响应式并且通知更新