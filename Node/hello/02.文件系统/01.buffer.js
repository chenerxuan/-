var str = "Hello yuxuan";

// 将一个字符串保存到buffer中
var buf = Buffer.from(str);

// console.log(buf.length);
// var buf2 = new Buffer(10);

// console.log(buf2.length);
var buf2 = Buffer.alloc(10);
buf2[0] = 0x88;
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 257;
// console.log(buf2[2].toString(2));

// for(var i = 0; i < buf2.length; i++) {
//   console.log(buf2[i]);
// }

var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);