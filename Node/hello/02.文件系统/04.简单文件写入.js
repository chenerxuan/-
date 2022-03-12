var fs = require("fs");




  fs.writeFile("C:\\Users\\erxuan\\Desktop\\hello3.txt", "这是通过writeFile写入的内容！\r\n", {flag: "a"}, function(err){
    if(!err){
      console.log("写入成功");
    }
  });
