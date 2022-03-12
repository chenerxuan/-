<template>
  <div class="right-container">
    <h3>Right 组件---- {{ count }} </h3>
    <hr>
    <button @click="add">+1</button>
    <hr>
    <p> {{ msgFromLeft }} </p>
  </div>
</template>

<script>
import bus from './eventBus.js'

export default {
  data() {
    return {
      count: 0,
      msgFromLeft: '',
    }
  },
  methods: {
    add() {
      this.count += 1
      this.$emit('numchange', this.count)
    },
  },
  created() {
      bus.$on('share', (val) => {
        console.log('在right中定义的share被触发了', val);
        this.msgFromLeft = val
      })
    },
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}

</style>
