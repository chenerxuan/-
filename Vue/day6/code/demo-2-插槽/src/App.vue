<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <p v-color="'red'">测试</p>

    <button @click="color = 'green'">改变color的颜色值</button>
    <hr />
    <Article>
      <template #title="obj">
        <h3>
          一首歌---{{ obj }}
        </h3>
      </template>

      // 解构赋值{}
      <template #content="{ msg, user }">
        <div>
          <p>生活不止眼前的苟且</p>
          <p>还有诗和远方的田野</p>
          <p> {{ msg }} </p>
          <p> {{ user.name }} </p>
        </div>
      </template>

      <template #author>
        <div>
          高晓松
        </div>
      </template>
    </Article>
    <hr>
    <div class="box" style="display: none;">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <template #default>
          <p>
            这是Left组件中的p
          </p>
        </template>
      </Left>
      
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Article from '@/components/Article.vue'

export default {
  data() {
    return {
      color: 'blue',
    }
  },
  components: {
    Left,
    Article
  },
  directives: {
    // color: {
    //   bind(el, binding) {
    //     el.style.color = binding.value
    //   },
    //   update(el, binding) {
    //     el.style.color = binding.value
    //   },
    color(el, binding) {
      el.style.color = binding.value
    }
  
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
