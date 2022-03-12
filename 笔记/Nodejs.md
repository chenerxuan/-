## 01 node基础-命令行窗口
多种名称：CMD窗口、终端(terminal)、小黑屏、shell、命令行窗口、DOS窗口

打开方式：
1. 开始菜单 -> 运行 -> cmd
2. win + R -> cmd

> C:\Users\erxuan>

常用指令：
- dir  列出当前目录下的所有文件
- cd 目录名  进入指定的目录
- d:
- 目录
  - . 表示当前目录
  - .. 表示上一级目录
- md 目录名  新建文件夹
- rd 目录名  删除文件夹
- 环境变量(windows系统中的变量)
  - path
- 当我们在命令行窗口打开一个文件，或调用一个程序时，系统会首先在当前目录下寻找文件程序，如果找到了则直接打开，如果没有找到，则会依次到环境变量path的路径中寻找，直到找到为止，如果没找到则报错 (类似作用域链)
- 所以我们可以将一些经常需要访问的程序和文件的路径添加到path中，这样就可以在任意位置来访问这些文件和程序了

## 02 进程和线程

### 进程
- 进程负责为程序运行提供必备的环境
- 进程就相当于工厂的车间

### 线程
- 线程是计算机中最小的计算单位，线程负责执行进程中的程序
- 线程就相当于工厂中的工人
- 传统的服务器都是多线程的，每进来一个请求，就创建一个线程去处理请求
- Node处理请求是单线程，但是在后台拥有一个I/O线程池

单线程
- JS是单线程

多线程

## 03 Node简介

- Node.js是一个能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境。
- Node采用Google开发的V8引擎运行js代码，使用**事件驱动**、**非阻塞**和**异步I/O模型**等技术来提高性能，可优化应用程序的传数量和规模。
- Node大部分基本模块都用Javascript编写。在Node出现之前，JS通常作为客户端程序设计语言使用，以JS写出的程序常在用户的浏览器上运行。
- 目前，Node已被IBM、Microsoft、Yahoo！、Walmart、Groupon、SAP、LinkedIn、Rakuten、PayPal、Voxer和GoDaddy等企业采用。

Node的用途
- Web服务API，比如REST
- 实时多人游戏
- 后端的Web服务，例如跨域、服务器端的请求
- 基于Web的应用
- 多客户端的通信，如即时通信

## 04 使用Node执行js文件

I/O (Input/Output)
- I/O操作指的是对硬盘的读写操作

Node
- Node是对ES标准的一个实现，Node也是一个JS引擎
- 通过Node可以使js代码在服务器端执行
- Node仅仅对ES标准进行了实现，所以在Node中不包含DOM和BOM
- Node中可以使用多有的内建对象
  - String Number Boolean Math Date RegExp Function Object Array
- 而BOM和DOM都不能使用，但是可以使用console 也可以使用定时器(setTimeout() setInterval())
- Node可以在后台来编写服务器，Node编写的服务器都是单线程的

## 05 node 整合webstorm
## 06 模块化简介

模块化可以 降低耦合性、方便复用

ECMAScript标准缺陷
- 没有模块化系统
- 标准库比较少
- 没有标准接口
- 缺乏管理系统

模块化
- 如果程序设计的规模达到了一定程度，则必须对其进行模块化。
- 模块化可以有多种形式，但至少应该提供能够将代码分割为多个源文件的机制。
- CommonJS的模块功能可以帮我们解决该问题。

CommonJS规范
- CommonJS规范的提出，主要是为了弥补当前JavaScript没有标准的缺陷
- CommonJS规范希望JS能够在任何地方运行
- CommonJS对模块的定义十分简单：
  - 模块引用
  - 模块定义
  - 模块标识

## 07 模块化详解

模块标识
require("路径") 引入模块 引入后该函数返回一个对象，这个对象代表该引入的模块
Node中每一个js文件中的js代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问(闭包)

可以通过exports来向外部暴露属性或方法，将需要暴露给外部的变量或方法设置为exports属性即可

模块分为两大类
- 核心模块
  - 由node引擎提供的模块
  - 核心模块的标识就是，模块的名字
- 文件模块
  - 用户自己创建的模块
  - 文件模块的标识就是文件的路径(绝对路径，相对路径)
    - 相对路径用. 或 ..开头

在Node中有一个全局对象global，它的作用和网页中window类似
  在全局中创建的变量都会作为global的属性保存
  在全局中创建的函数都会作为global的方法保存

- arguments 伪数组对象，封装函数实参
  - arguments.callee属性保存当前执行的函数对象

当Node在执行模块中的代码时，会用一个函数包起来
  - function (exports, require, module, __filename, __dirname) {}
  - 函数执行时，同时传了5个实参
    - exports 该对象用来将变量或函数暴露到外部
    - require 函数 用来引入外部模块
    - module 代表的是当前模块自身 exports是module的属性
    - __filename 当前模块的完整路径
    - __dirname 当前模块所在文件夹的完整路径

## 08 exports 和 module.exports

exports = module.exports
- 通过exports 只能通过. 的方式来向外暴露变量
- module.exports既可以通过. 的形式，也可以直接赋值

## 09 包简介
package 
- CommonJS的包规范允许我们将一组相关的模块组合到一起，形成一组完整的工具。
- CommonJS的包规范由包结构和包描述文件两个部分组成
- 包结构
  - 用于组织包中的各种文件
- 包描述文件
  - 描述包的相关信息，以供外部读取分析

包结构
- 包实际上就是一个压缩文件，解压后还原为目录。符合规范的目录，应包含如下文件：
  - package json    描述文件
  - bin   可执行二进制文件
  - lib   js代码
  - doc   文档
  - test  单元测试

包描述文件
- 包描述文件用于表达非代码的相关信息，它是一个JSON格式的文件——package.json，位于包的根目录下，是包的重要组成部分
- package.json中的字段    name、description、version、keywords、maintainers、contributors、bugs、licenses、repositories、dependencies、homepage、os、cpu、engine、builtin、directories、implements、scripts、author、bin、main、devDependencies

注意，JSON文件里不能写注释

## 10 npm简介

NPM(Node Package Manager)
- CommonJS包规范是理论，NPM是其中一种实践。
- 对于Node而言，NPM帮助其完成了第三方模块的发布、安装和依赖等。借助NPM，Node与第三方模块之间形成了很好的一个生态系统。

npm命令
- npm -v  查看版本
- npm version 查看所有模块的版本
- npm  帮助说明
- npm search 包名
  - 搜索模块包
- npm install 包名
  - 在当前目录安装包
- npm install/i 包名 -g
  - 全局模式安装包
- npm init 
- npm remove/r 包名 删除包
- npm install 包名 --save 安装包并添加到依赖中***
- npm install  下载当前项目所依赖的包
- npm install 包名 -g 全局安装包
  - 全局安装的包一般都是一些工具

## 11 配置cnpm

镜像服务器 https://npmmirror.com/ 淘宝镜像 

## 12 node搜索包的流程

通过npm下载的包都放在node_modules文件夹中
通过npm下载的包，直接通过包名引入即可

node在使用模块名来引入模块时，首先在当前目录的node_modules中寻找是否有该模块，如果没有则去上一级的node_modules中寻找，如果有直接使用，如果没有再去上一级目录寻找，直到找到为止。直到找到磁盘根目录，若依然没有，则报错

## 13 Buffer缓冲区

缓冲区(Buffer)
- 从结构上看Buffer非常像一个数组，它的元素为16进制的两位数。
- 实际上一个元素就表示内存中的一个字节。
- 实际上Buffer中的内存不是通过Javascript分配的，而是在底层通过C++申请的。
- 也就是我们可以直接通过Buffer来创建内存中的空间

var buf2 = Buffer.alloc(10);
通过索引操作buf中的元素 
buffer一旦创建大小不能修改

- Buffer.from(str)  将一个字符串转化为buffer
- Buffer.alloc(size)  创建一个指定大小的buffer
- Buffer.allocUnsafe(size)  创建一个指定大小的buffer，但可能包含敏感数据
- buf.toString()  将缓冲区的数据转换为字符串

## 14 同步文件写入

fs(文件系统)file system
- 在Node中，与文件系统的交互是非常重要的，服务器的本质就是将本地的文件发送给远程的客户端
- Node通过fs模块来和文件系统进行交互
- 该模块提供了一些标准文件访问API来打开、读取、写入文件，以及与其交互。
- 要使用fs模块，首先需要对其进行加载
  - const fs = require("fs");

同步和异步调用
- fs模块中所有的操作都有两种形式可供选择 同步 和 异步
- 同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码。
- 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回。

- fs.openSync(path,flags[, mode]) 打开文件
- fs.writeSync(fd, string[, position[, encoding]])
- fs.closeSync(fd)

## 15 异步文件的写入

- fs.open(path,flags[, mode], callback)
- fs.write(fd, string[, position[, encoding]], callback)
- fs.close(fd, callback)

- 异步调用的方法，结果都是通过回调函数的参数返回的
  - err 错误对象，如果没有错误则为null
  - fd 文件的描述符

## 16 简单文件写入

- fs.writeFile(file, data[, options], callback)
- fs.writeFileSync(file, data[, options])
- flag
  - r 只读
  - w 可写
  - a 追加

## 17 流式文件写入

同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出

- fs.createReadStream(path[, options])
- fs.createWriteStream(path[, options])

通过监听流的open和close事件，实现流的打开关闭
ws.once("open", function(){
  console.log("流打开了")
})

- on(事件字符串, 回调函数)
  - 可以为对象绑定一个事件
- once(事件字符串, 回调函数)
  - 可以为对象绑定一个一次性事件，触发一次后自动失效

## 18 简单文件读取

- 同步文件读取
- 异步文件读取
- 简单文件读取
- 流式文件读取

- fs.readFileSync(path[, options])
- fs.readFile(path[, options], callback)

## 19 流式文件读取

流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中

如果要读取一个可读流中的数据，必须要为可读流绑定data事件，绑定完毕自动读取

rs.pipe(ws)

## 20 fs模块中的其他方法

- 验证路径是否存在 fs.existsSync(path)
- 获取文件信息
  - fs.stat(path, callback)
  - fs.statSync(path)
- 删除文件
  - fs.unlink(path, callback)
  - fs.unlinkSync(path)
- 列出文件
  - fs.readdir(path[, options], callback)
  - fs.readdirSync(path[, options])
- 截断文件
  - fs.truncate(path, len, callback)
  - fs.truncateSync(path, len)
- 建立目录
  - fs.mkdir(path[, mode], callback)
  - fs.mkdirSync(path[, mode])
