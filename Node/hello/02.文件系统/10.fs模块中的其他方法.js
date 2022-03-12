var fs = require('fs');

// var isExists = fs.existsSync('b.jpg');

// console.log(isExists);

// fs.stat('b.jpg', function(err,stat){
//   console.log(stat.birthtime);
// })

// fs.unlinkSync('b.jpg')

// fs.readdir('./', function(err, files){
//   if(!err){
//     console.log(files);
//   }
// })

fs.watchFile("hello.txt", function(curr,prev){
  console.log("文件发生变化了");
  console.log(curr);
  console.log(prev);
})