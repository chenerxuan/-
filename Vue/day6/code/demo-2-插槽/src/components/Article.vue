<template>
  <div class="article-container">
      <h3 v-color="'red'">Article组件</h3>
    <!-- 文章标题 -->
    <div class="header-box">
        <slot name="title"></slot>
    </div>
    <!-- 文章内容 -->
    <div class="content-box">
        <slot name="content" msg="hello vue" :user="userinfo"></slot>
    </div>
    <!-- 文章作者 -->
    <div class="footer-box">
        <slot name="author"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Article',
    data() {
        return {
            userinfo: {
                name: 'zs',
                age: 27
            }
        }
    }
}
</script>

<style lang="less" scoped>
.article-container {
    > div {
        min-height: 150px;
    }
    .header-box {
        background-color: pink;
    }
    .content-box {
        background-color: lightblue;
    }
    .footer-box {
        background-color: lightsalmon;
    }
}
</style>