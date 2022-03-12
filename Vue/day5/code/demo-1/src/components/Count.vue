<template>
  <div>
      <h5>Count组件</h5>
      <p>Count的值是{{ count }}</p>
      <button @click="count += 1">+1</button>

      <button @click="show">打印this</button>
  </div>
</template>

<script>
export default {
    // props是自定义属性，允许使用者自定义属性
    // props: ['init'],
    // 自定义属性的默认值
    props: {
        init: {
            default: 11,
            type: Number,
            required: true
        },
    },

    data() {
        return {
            count: this.init
        }
    },
    methods: {
        add () {
            this.count += 1
        },
        show () {
            console.log(this);
        }
    },
}
</script>

<style lang="less">

</style>