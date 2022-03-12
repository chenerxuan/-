<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <!-- 声明一个插槽区域 -->
    <slot name="default">
      <h6>这是default插槽的默认内容</h6>
    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
