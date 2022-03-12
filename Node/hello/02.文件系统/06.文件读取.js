var fs = require("fs");

fs.readFile('前端路线图.jpg', (err, data) => {
  if(!err) {
    // console.log(data.toString());
    fs.writeFile("hello.jpg", data, function(err){
      if(!err){
        console.log("写入成功");
      }
    })
  } else {
    console.log(err);
  }
})