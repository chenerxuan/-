var fs = require("fs");

// 创建一个可写流

// fs.createWriteStream(path[, options])

var ws = fs.createWriteStream("hello4.txt");

ws.once("open", function () {
  console.log("流打开了");
})
ws.once("close", function () {
  console.log("流关闭了");
})

ws.write("通过可写流写入文件的内容\r\n");
ws.write("今天天气不错\r\n");
ws.write("锄禾日当午\r\n");
ws.write("红掌拨清波\r\n");
ws.write("接天莲叶无穷碧\r\n");
ws.write("映日荷花别样红\r\n");

ws.end();
// ws.close();
