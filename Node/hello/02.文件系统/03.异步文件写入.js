var fs = require("fs");

fs.open("hello1.txt", "w", function(err, fd){
  if(!err) {
    // 如果没有出错，对文件写入操作
    fs.write(fd, "这是异步写入的内容111", function(err, l){
      if(!err){
        console.log("写入成功！" + l);
      }

      // 关闭文件
      fs.close(fd, function(err){
        if(!err){
          console.log("文件已关闭~");
        }
      })
    })
  }else {
    console.log(err);
  }
});

console.log("程序向下执行~~~~~");
