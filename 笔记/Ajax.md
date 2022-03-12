## AJAX
Asynchronous JavaScript And XML 异步JS和XML
通过AJAX可以在浏览器中向服务器发送异步请求，优势 无刷新获取数据 懒加载 存在跨域问题
不是新的编程语言，而是一种将现有的标准结合在一起使用的新方式
- 优点
  1. 无需刷新页面与服务器端进行通信
  2. 允许根据用户事件来更新部分页面内容
- 缺点
  1. 没有浏览历史 不能回退
  2. 跨域问题
  3. SEO不友好

XML 可扩展标记语言 被设计用来传输和存储数据 都是自定义标签

HTTP (hypertext transport protocol) 超文本传输协议 协议详细规定了浏览器和万维网服务器之间相互通信的规则


#### HTTP 请求报文
格式与参数
```
行      POST(类型)  /s?ie-utf-8  HTTP/1.1
头      Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-torm-urlencoded
        User-agent: chrome 83
空行
体      username=admin&password=admin
```

#### HTTP 响应报文
```
行      HTTP/1.1  200(状态码)  OK
头      Content-type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行
体      <html>
```

安装node.js 运行JavaScript的程序
初始化 npm是node.js下的包管理工具
npm init --yes

Express 框架 基于Node.js的web框架

Ajax 请求 GET POST  

?分隔传参 ?a=100&b=200&c=300

nodemon 自动重启工具

### 跨域

同源策略(Same-Origin-Policy)是浏览器的一种安全策略

JSONP (JSON with Padding) 非官方的跨域解决方案 只支持get请求

CORS
