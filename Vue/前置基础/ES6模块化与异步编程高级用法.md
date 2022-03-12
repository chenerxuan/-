学习目标
- 知道如何使用ES6 的模块化语法
- 知道如何使用Promise解决回调地狱的问题
- 知道如何使用async/await简化Promise的调用
- 能够说出什么是EventLoop
- 能够说出宏任务和微任务的执行顺序

### ES6模块化
node.js遵循了CommonJS的模块化规范，其中：
 - 导入其他模块使用require()方法
 - 模块对外共享成员使用 module.export 对象

模块化的好处：大家都遵守同样的模块化规范编写代码，降低了沟通成本，方便了各个模块之间的相互调用，利人利己

ES6模块化规范是浏览器与服务器通用的模块化开发规范，它的出现极大降低了前端开发者的模块化学习成本，开发者不需再额外学习AMD CMD CommonJS等模块化规范

ES6模块化规范中定义：
- 每个JS文件都是一个独立的模块
- 导入其他模块成员使用import关键字
- 向外共享模块成员使用export关键字

实操 npm init -y  package.json中加"type": "module"

ES6模块化主要包含三种用法：
1. 默认导出与默认导入
   export default 默认导出的成员  每个模块中 只允许使用一次export default 否则会报错
   import 接收名称from '模块标识符'  

2. 按需导出与按需导入
   export 按需导出的成员  每个模块可以使用多次按需导出 
   import {s1} from '模块标识符' 按需导入的成员名称必须和按需导出一致 可以使用as关键字重命名 **按需导入可以和默认导入一起使用**
3. 直接导入并执行模块中的代码
   
### Promise

多层回调函数的相互嵌套 就形成了回调地狱 缺点：
代码耦合性太强，牵一发而动全身，难以维护，大量冗余代码相互嵌套，可读性变差

1. Promise是一个构造函数 可以创建实例，代表一个异步操作
2. Promise.prototype上包含一个.then()方法 可以通过原型链的方式访问到then()方法
3. .then() 方法用来预先指定成功和失败的回调函数 p.then(result => {}, error => {}) 成功的回调函数是必选的，失败的回调函数是可选的

基于回调函数按顺序读取文件内容
安装then-fs这个第三方包，基于Promise的方式读取文件的内容 npm i then-fs  调用then-fs提供的readFile()方法 异步读取文件的内容 返回值是Promise的实例对象 再用.then()指定回调函数

Promise的链式操作中如果发生了错误，可以使用Promise.prototype.catch方法进行捕获和处理

Promise.all()方法会发起并行的Promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then操作

Promise.race()方法会发起并行的Promise异步操作，只要任何一个异步操作完成，就立即执行下一步的.then操作(赛跑机制)

基于Promise封装读文件的方法 封装要求
1. 方法名称要定义为getFile
2. 方法接收一个形参fpath,表示要读取文件的路径
3. 方法的返回值为Promise实例对象

如果要创建具体的异步操作，则需要在new Promise() 构造函数期间 传递一个function 函数，将具体的异步操作定义到function函数内部


### async/await
async/await 是ES8引入的新语法，用来简化Promise异步操作
async方法中 第一个await之前的代码会同步执行，await之后的代码会异步执行

### EventLoop
JavaScript是一门单线程执行的编程语言，同一时间只能做一件事情，问题是，如果前一个任务非常耗时，后续任务就会一直等待，从而导致程序假死问题，为了防止这个问题，JavaScript把待执行的任务分为两类

- 同步任务 (synchronous)
  - 又称非耗时任务，指的是在主线程上排队执行的那些任务
  - 只有前一个任务执行完毕 才能执行后一个任务
- 异步任务(asynchronous)
  - 又称耗时任务，异步任务由JavaScript委托给宿主环境进行执行
  - 异步任务执行完成后，会通知JavaScript主线程执行异步任务的回调函数

EventLoop的基本概念
JavaScript主线程从"任务队列"中读取异步任务的回调函数，放到栈中依次执行，这种运行机制称为EventLoop

### 宏任务和微任务
异步任务又分为：
- 宏任务 (macrotask)
  - 异步Ajax请求
  - setTimeout setInterval
  - 文件操作
  - 其他宏任务
- 微任务 (microtask)
  - Promise.then .catch .finally
  - process.nextTick
  - 其他微任务

宏任务执行完后 会检查是否存在待执行的微任务，若有，则执行完所有微任务后再执行下一个宏任务

### API接口案例

基于MySQL数据库 + Express对外提供用户列表的API接口服务，用到的技术点如下
- 第三方包express和mysql2
- ES6模块化
- Promise
- async/await