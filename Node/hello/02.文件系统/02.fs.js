const fs =  require("fs");

// console.log(fs);
// 打开文件
var fd = fs.openSync("hello.txt", "w");

// console.log(fd);
// 写入内容
fs.writeSync(fd, "FS文件系统~", 2);

// 关闭文件
fs.closeSync(fd);

console.log("程序向下执行~~~~~");























