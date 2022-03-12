<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="黑马头条" fixed />

    <!-- 导入 注册 并使用Articleinfo组件 -->
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <ArticleInfo v-for="item in artlist" :key="item.id" :title="item.title" :author="item.aut_name" :cmt-count="item.comm_count" :time="item.pubdate" :cover="item.cover"></ArticleInfo>
</van-list>
</van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/Articleinfo.vue'
export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少数据
      limit: 10,
      // 文章的数组
      artlist: [],
      // 是否正在加载下一页数据 若true 不会反复加载onload事件 事件触发完后改为false
      loading: true,
      // 所以数据是否加载完毕 若没有更多数据true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  created() {
    this.initArtricleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArtricleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      if (isRefresh) {
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        // 新旧数据拼接
      this.artlist = [...this.artlist, ...res]
      this.loading = false
      }
      
      // 判断数据是否取完
      if (res.length === 0) {
        // 证明没有下一页数据了
        this.finished = true
      }
    },
    onLoad() {
      console.log('load事件，请求下一页数据');
      this.page ++
      // 重新请求接口获取数据
      this.initArtricleList()
    },
    // 下拉刷新处理函数
    onRefresh() {
      console.log('触发了下拉刷新');
      this.page ++
      this.initArtricleList(true)
    }
  },
  components: {
    ArticleInfo,
  },
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

  // .van-nav-bar {
  //   background-color: #007bff;
  // }
  // /deep/ .van-nav-bar__title {
  //   color: #fff;
  // }
}
</style>
