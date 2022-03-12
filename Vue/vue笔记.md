## 第一天：前端工程化与webpack

- 前端工程化的相关概念
- Webpack的常见用法
- 打包发布
- Source Map

目标：理解什么是前端工程化 了解webpack的基本用法 

Layui

前端工程化：
- 模块化  (js的模块化 css的模块化 资源的模块化)
- 组件化  (复用现有的UI结构 样式 行为)
- 规范化  (目录结构的划分、编码规范化、接口规范化、文档规范化、Git分支管理)
- 自动化   (自动化构建、自动部署、自动化测试)

webpack是目前主流的前端工程化解决方案 主要提供了前端模块化开发支持，以及代码压缩混淆、处理浏览器JS的兼容性、性能优化等强大功能

### 创建列表隔行变色项目

-S 是 --save 的简写
-D 是 --save-dev 的简写  仅在开发阶段用

在根目录中创建webpack.config.js的webpack配置文件，向外导出一个webpack 的配置对象，然后在package.json的scripts节点下，新增dev脚本，最后在终端中运行npm run dev 命令，启动webpack进行项目的打包构建

webpack插件 
- webpack-dev-server 
  - 类似于node.js阶段用到的nodemon工具
  - 每当修改了源代码，webpack会自动进行项目的打包和构建
- html-webpack-plugin
  - webpack中的HTML插件(类似于一个模板引擎插件)
  - 可以通过此插件自定制index.html页面的内容

通过devServer节点对webpack-dev-server插件进行更多的配置

实际开发中，webpack默认只能处理js后缀名结尾的文件，由于代码中包含了index.css文件，其他文件需要查找config配置文件，loader加载器 css-loader => style-loader => webpack将style-loader的结果合并到/dist/bundle.js中，最终生成打包好的文件

base64 文件格式的优缺点 防止浏览器发送不必要的请求 缺点：体积会增大 不适合大图片

精灵图 将小图片合并成大图片 通过定位获取每一个小图片

打包处理样式表中与url路径相关的文件 url-loader file-loader

对于webpack不能处理的JS高级语法，需要通过babel-loader打包处理

发布上线：前端将最终文件打包给后端，后端部署上线

为了每次打包发布时自动清理掉dist目录中的旧文件，可以安装并配置clean-webpack-plugin插件

source map是一个信息文件，里面储存着位置信息，存储着压缩混淆后的代码所对应的转换前的位置，出错的时候出错工具据此显示原始代码
实际开发中，不需要自己配置webpack，使用命令行工具(俗称CLI)一键生成带有webpack的项目
## 第二天

- Vue的基本使用步骤
- Vue中常见的指令
- vue-devtools调试工具

目标：使用Vue指令完成页面结构的渲染 使用Vue的调试工具辅助Vue的开发

### Vue简介

Vue是一套用于 构建用户界面 的前端 框架   
构建用户界面表示往html页面填充数据 框架表示一套现成的解决方案

Vue指令、组件(对UI 结构的复用)、路由、Vuex、Vue组件库

#### Vue的特性
- 数据驱动视图
  - vue会监听数据的变化，自动重新渲染页面的结构 注意：此为单项数据绑定
- 双向数据绑定
  - 填写表单时 在不操作DOM的前提下 自动把数据同步到数据源中
    - JS数据的变化会被自动渲染到页面上
    - 页面上表单采集的数据发生变化时，页面结构会被vue自动渲染出来
  > 在网页中 form负责采集数据 Ajax负责提交数据

#### MVVM
MVVM(Model View ViewModel)是vue实现数据驱动视图和双向数据绑定的核心原理
将每个HTML拆分成三个部分
- Model表示当前页面渲染时所依赖的数据源
- View表示当前页面渲染的DOM结构
- ViewModel表示vue的实例 核心

#### 基本使用步骤
1. 导入vue.js的script脚本文件
2. 在页面声明一个将要被vue控制的DOM区域
3. 创建vm实例对象(vue实例对象)

#### 指令与过滤器
指令(Directives)是vue为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构
按照用途可分为六大类
- 内容渲染指令
  - 辅助开发者渲染DOM元素的文本内容，常用的有三个
    - v-text 会覆盖元素原有内容 几乎不用
    - `{{ }}` 插值表达式(Mustache) 专门解决覆盖 内容的占位符 只能用在元素的内容节点 不能用在属性节点中
    - v-html 可以把带有标签的字符串渲染成真正的HTML内容
- 属性绑定指令
  - `v-bind:` 为元素的属性动态绑定属性值 可简写为 :
  - 属性绑定期间，动态拼接的字符串需要加单引号
- 事件绑定指令
  - `v-on:` 为DOM元素绑定事件监听 可简写为 @ @click @input @keyup
  - 在绑定事件处理函数时使用()传递参数
  - 内置变量$event等于原生DOM的事件对象e 不传参() 默认有事件对象e
  - 事件修饰符 辅助程序员更方便的对事件的触发进行控制 .prevent 阻止默认行为 event.preventDefault() .stop 阻止事件冒泡 event.preventDefault()
  - 按键修饰符 @keyup.esc @keyup.enter
- 双向绑定指令
  - v-model 在不操作DOM的情况下 快速获取表单数据
  - v-model 只能和input textarea selected 使用
  - v-model 修饰符 .number .trim 自动过滤首尾空白字符 .lazy 中间过程不会被同步
- 条件渲染指令
  - 按需控制DOM的显示与隐藏 v-if  v-show
  - v-if动态创建或删除元素 v-show 添加或移除 `display: none` 样式
  - 若要频繁切换元素的显示状态 v-show 若默认不展示 v-if更优
  - v-else-if 必须配合 v-if使用
- 列表渲染指令
  - v-for 基于一个数组来循环渲染一个列表结构 需要使用item in items形式的语法
  - items是待循环的数组 item 是被循环的每一项
  - v-for 可选第二参数 当前项的索引 (item, index)in items 括号里为形参可自定义
  - 官方建议绑定:key属性，尽量把id作为key的值(字符串或数字类型, 必须唯一)

指令是Vue开发中最基础、最常用、最简单的知识点



## 第三天

- 过滤器
  - Filters本质是函数 常用于文本格式化 用于插值表达式和v-bind属性绑定
  - 过滤器函数必须定义到filters节点下，形参val为原值，要有返回值
  - 全局过滤器 Vue.filter('capitalize', (str) => {})
  - 可以调用多个过滤器 可以传参 通过管道符调用|
- 侦听器 watch
  - 监视数据变化, 从而针对数据的变化做特定的操作
  - username(newVal, oldVal) 侦听的数据名作为方法名
  - 方法格式 无法自动触发，对象属性的变化无法侦听
  - 对象格式immediate: true deep深度侦听每个属性的变化 'info.username'(表达式)
- 计算属性的用法
  - 动态计算属性值可以被模板结构或methods方法使用
  - computed节点下 定义成方法格式 使用时当属性使用
  - 实现了代码的复用 数据源变化则计算属性会自动重新求值
- axios的基本用法
  - axios是一个专注于网络请求的库 返回promise对象 前面可加await(await只能用在被async修饰的方法中)简化
  - 通过params发起get请求  data发起post请求
  - 解构赋值 :重命名res
- vue-cli的安装和使用
  - 单页面应用程序(Single Page Application)SPA 只有一个页面的网站 所有的功能与交互都在唯一的页面内完成
  - vue-cli是Vue.js开发的标准工具，简化了webpack创建工程化Vue项目的过程 vue-cli 是npm上的一个全局包 npm install -g @vue/cli
  - vue create 项目名称
  - vue项目中src目录的构成：
    - assents(项目中用到的静态资源文件如css样式表 图片资源)
    - components(封装的，可复用的组件)
    - main.js(项目的入口文件，整个项目的运行要先执行main.js)
    - app.vue (项目的根组件)
  - 通过main.js把App.vue渲染到index.html的指定区域
  - Vue实例的$mount()方法和el属性完全一样
  - vue组件的三个组成部分 template(组件的模板结构) script(组件的JS行为) style(组件的样式)
  - .vue组件的data不能指向对象，必须是函数

目标：在实际开发中合理运用过滤器、侦听器、计算属性解决自己遇到的问题 使用axios发起Ajax请求 使用vue-cli工具生成工程化的Vue项目

## 第四天：组件与生命周期

- 组件的注册与使用
  - 使用组件的三个步骤 (父子关系 兄弟关系)
    - import导入需要使用的App名称
    - 在组件A的components节点下注册
- 组件的props自定义属性
  - props是组件的自定义属性，封装通用组件时合理使用props可提高组件的复用性 props: ['', '', ''] 数组格式
  - 组件的封装者和使用者 props自定义属性为只读属性 直接修改终端会报错
  - props 的 default默认值 对象格式   type定义属性的值类型 Number Bool Array Object
  - required 属性必填项 不传属性强制报错
- 解决组件样式冲突
  - .vue组件的样式默认会全局生效，会造成多个组件之间的样式冲突问题  样式加 scoped 属性
  - /deep/ 修改子组件中的样式 使用第三方组件库时修改组件默样式
- 组件的生命周期
  - Life Cycle 是指 一个组件从创建 -> 运行 -> 销毁的整个阶段
  - 生命周期函数是vue框架提供的内置函数，beforeCreate -> created -> beforeMount -> mounted ->beforeUpdate -> updated ->beforeDestroy -> destroyed
  - created生命周期函数 在里面调用methods方法请求数据转存到data中供template模板渲染使用
  - mounted 第一次把DOM结构渲染好
  - 为了操作更新数据后的DOM，updated函数
- 组件之间的通讯(数据共享)
  - 组件之间最常见的关系 父子 兄弟
  - 父组件向子组件共享数据需要使用 自定义属性
  - 子向父传值使用自定义事件 this.$emit()触发自定义事件
  - 兄弟组件之间的数据共享EventBus
    - 创建eventBus.js模块，向外共享一个Vue实例对象
    - 发送方调用bus.$emit('事件名称', 要发送的数据)方法触发自定义事件
    - 接收方调用bus,$on('事件名称', 事件处理函数)方法注册一个自定义事件

目标：掌握.vue单文件组件的基本用法 掌握组件通讯的三种方式 掌握组件生命周期的执行顺序和应用场景

## 第五天：ref & 购物车案例

- 使用ref 引用DOM 元素和组件实例
  - jQuery简化了操作DOM的过程 vue MVVM 不需要操作DOM 只管维护数据(数据驱动视图)不建议用jQuery
  - ref引用在不依赖jQuery的情况下 获取DOM元素或组件的使用 $refs
- this.$nextTick(cb) 方法的基本使用
  - 延迟到DOM重新渲染完毕后执行 即把cb回调函数推迟到下一个DOM更新周期后执行 保证cb回调函数可以操作到最新的DOM元素
- 购物车案例

目标：使用ref获取页面上的DOM或组件的引用 能够知道￥nextTick的应用场景并合理的使用 通过"购物车案例"巩固前四天所学的知识

## 第六天 Vue组件的高级用法

- 动态组件的使用
  - 动态组件指的是动态切换组件的显示与隐藏 vue内置<component>组件 专门用来实现动态组件的渲染 占位 属性is=""表示要渲染的组件的名字
  - <keep-alive></keep-alive> 防止组件隐藏时被销毁 把内部组件进行缓存 include属性 指定被缓存的组件 exclude属性被排除的 二选一
  - 组件被缓存时 自动触发 deactivated声明周期函数 被激活时 activated
- 插槽的使用(默认插槽、具名插槽、作用域插槽)
  - 插槽(Slot) 允许开发者在封装组件时，把不确定的、希望由用户指定的部分定义为插槽
  - 每一个插槽都要有一个name 省略则默认default  v-slot:插槽名字 简写# 具名插槽
  - 封装组件时为slot提供属性对应的值 称为作用域插槽
- 自定义指令
  - 私有 directives节点下声明  bind(el) {}  bindind.value获取指令绑定的值  update() {} DOM更新时触发
  - 若bind和update函数的逻辑完全相同 则对象格式的自定义指令可简写为函数格式
  - 全局 跟全局过滤器一样 Vue.directive('color', function(el, binding) {})
- ESLint的使用
  - 强制约束代码风格
  - axios挂载到Vue原型上 Vue.prototype.$http = axios  axios.defaults.baseURL = '请求根路径'

目标：使用keep-alive实现组件的缓存 使用插槽提高组件的复用性 了解常见的ESLint语法规则

## 第七天 路由(vue-router)

路由(router) 就是对应关系 Hash 地址与组件之间的对应关系 核心 window.onhashchange

- 路由的基本配置与使用
  - 插件vue-router 管理SPA组件的切换
  - 模块化导入时，如果给定的时文件夹，默认导入的是此文件夹下index.js的文件
- 路由重定向
  - 访问地址A时强制跳转到地址C redirect属性
- 嵌套路由、动态路由
  - 通过路由实现组件的嵌套显示  通过children属性声明子路由规则
  - path值为空 默认子路由 父组件展示时默认展示此组件
  - 动态路由 是指把hash地址中可变部分定义为参数项 提高复用性 :id
  - this.$route 是路由的参数对象  .params访问路径参数 路由规则props: true
  - hash地址 /后面的参数成为路径参数 ?后面的参数称为查询参数
- 编程式导航、路由导航守卫
  - 点击链接实现导航的方式称为声明式导航  调用API实现导航的方式称为编程式导航
  - vue-router提供的编程式导航API  this.$router 是导航对象
    - this.$router.push('hash地址')  跳转并增加一条历史记录
    - this.$router.replace('hash地址')  跳转并替换当前历史记录
    - this.$router.go(数值n)  在浏览历史中前进或后退 $router.back() $router.forward
  - 导航守卫可以控制路由的访问权限  
  - 全局前置守卫 每次发生路由导航跳转时，都会触发全局前置守卫，其中可对每个路由进行访问权限的控制
  - router.beforeEach(fn)  回调函数三个形参(to, from, next) 
  - next()表示放行 next('/login') next(false)

目标：在项目中安装和配置路由 使用路由实现单页面应用程序的开发 使用导航守卫控制路由的访问权限

## 第八天：黑马头条(收尾案例)

- Vant组件库
  - 
- 封装axios
- 上拉加载&下拉刷新
- Vant主题定制

目标：掌握Vant组件库的基本使用 知道如何封装axios请求模块 知道如何实现上拉加载和下拉刷新功能

