var fs = require("fs");

var rs = fs.createReadStream("前端路线图.jpg");
var ws = fs.createWriteStream("a.jpg");

rs.once("open", function() {
  console.log("可读流打开了");
})
rs.once("close", function() {
  console.log("可读流关闭了");
})
ws.once("open", function() {
  console.log("可写流打开了");
})
ws.once("open", function() {
  console.log("可写流关闭了");
})
rs.on("data", function(data) {
  ws.write(data);
  
})


