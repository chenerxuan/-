const { response } = require('express');
const express = require('express');

const app = express();

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
  response.send('用户数据');
});

// 用户名检测是否存在
app.all('/check-username', (request, response) => {
  // 设置响应头 设置允许跨域
  // response.setHeader('Access-Control-Allow-Origin', '*')
    // response.send('HELLO jQuery AJAX')
    const data = {
      exist: 1,
      msg: '用户名已经存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`)
});

app.all('/jquery-jsonp-server', (request, response) => {
    const data = {
      name: '陈雨轩',
      city: ['北京', '上海', '深圳']
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`)
});

app.all('/cors-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.send('hello CORS~');
});


app.listen(9000, ()=>{
  console.log('服务已启动');
})
