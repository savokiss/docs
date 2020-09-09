# Vue 代码片段

## Vue 简易 store

```js
// 摘自 Vuepress 源码
import Vue from 'vue'

export default class Store {
  constructor () {
    this.store = new Vue({
      data: {
        state: {}
      }
    })
  }

  $get (key) {
    return this.store.state[key]
  }

  $set (key, value) {
    Vue.set(this.store.state, key, value)
  }

  $emit (...args) {
    this.store.$emit(...args)
  }

  $on (...args) {
    this.store.$on(...args)
  }
}
```