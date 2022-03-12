// 引入express
const { request, response } = require('express')
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由规则
app.get('/server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')

  // 设置响应体
  response.send('HELLO AJAX - 2')
});

app.all('/json-server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 响应头
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 响应一个数据
  const data = {
    name: 'chenyuxuan',
    age: 28
  }; 
  // 将对象字符串转换
  let str = JSON.stringify(data)
  // 设置响应体
  response.send(str)
});
// 针对IE缓存
app.get('/ie', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')

  // 设置响应体
  response.send('HELLO IE - 2')
});

// 延时响应
app.get('/delay', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    response.send('延时响应3s')
  }, 3000);  
});

// jQuery服务
app.all('/jquery-server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
    // response.send('HELLO jQuery AJAX')
    const data = {name: '陈雨轩'};
    response.send(JSON.stringify(data))
});

// axios服务
app.all('/axios-server', (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Allow-Origin', '*')
    // response.send('HELLO jQuery AJAX')
    const data = {name: '陈雨轩'};
    response.send(JSON.stringify(data))
});

// 监听端口启动服务
app.listen(8000, () => {
  console.log('服务已启动，8000端口监听中...');
})