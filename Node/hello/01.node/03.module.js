// 引入其他的模块
/*
  在node中，通过require() 函数来引入外部的模块
    require()可以传递一个文件的路径作为参数，node会自动根据路径引入外部模块
    这里的路径，如果使用相对路径，必须使用. 或..开头

*/

var md = require("./02.module")
var math = require("./math")
var fs = require("fs");

console.log(math.mul(11, 11));
console.log(math.add(11, 11));
console.log(fs);