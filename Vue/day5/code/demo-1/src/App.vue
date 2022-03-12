<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印this</button>
    <button @click="resetL">重置Left组件中的count为0</button>
    <hr/>
    <input type="text" v-if="inputVisible" @blur="showBtn" ref="iptRef">
    <button v-else @click="showInput">展示输入框</button>
    
    <hr>
    <div class="box">
      <Left ref="myleft"></Left>
    </div>
  </div>
</template>

<script>
// 1. 导入需要使用的App名称
import Left from '@/components/Left.vue'

export default {
  data() {
    return {
      inputVisible: false
    }
  },
  methods: {
    showThis() {
      console.log(this);
      console.log(this.$refs.myh1);
      this.$refs.myh1.style.color = 'red'
    },
    resetL() {
      // this.$refs.myleft.count = 0
      this.$refs.myleft.resetCount()
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.iptRef.focus()
      })
      // console.log(this.$refs.iptRef);
    },
    showBtn() {
      this.inputVisible = false
    }
  },
  // 2. 注册组件
  components: {
    Left,
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
