<template>
    <div>
        <div class="test-box">
        <h3>这是用户自定义的test.vue --- {{ username }}</h3>
        <button @click="changeName">修改用户名</button>
    </div>
    <div>123</div>
    </div>
</template>

<script>
//固定写法 默认导出
export default {
    //data数据源
    // .vue组件的data不能指向对象，应该是函数
    data() {
        // return {}对象中可定义对象
        return {
            username: 'zs'
        }
    },
    methods: {
        changeName() {
            // 在组件中，this表示当前组件的实例对象
            console.log(this)
            this.username = '哇哈哈'
        }
    },
    // 当前组件中的侦听器
    watch: {},
    // 当前组件中的计算属性
    computed: {},
    // 当前组件中的过滤器
    filters: {}
}
</script>

<style lang="less">
.test-box {
    background-color: pink;
    h3 {
        color: red;
    }
}
</style>