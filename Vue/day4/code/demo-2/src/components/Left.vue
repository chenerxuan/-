<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg 的值是 {{msg}} </p>
    <p>user 的值是 {{user}} </p>
    <button @click="send">向兄弟共享数据</button>
    <hr>
    <div v-for="item in arr"> {{ item.name }} </div>
  </div>
</template>

<script>
import bus from './eventBus.js'

export default {
  props: ['msg', 'user'],
  data() {
    return {
      msg1: 'hello sibling!',
      arr: [
        {id: 1, name: 'zs'},
        {id: 2, name: 'ls'}
      ]
    }
  },
  methods: {
    send() {
      bus.$emit('share', this.msg1)
    }
  }
}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: red;
}

/deep/ h5 {
  color: pink;
}
</style>
