const fs = require('fs');

// fs.readFile('./resource/为学.md', (err, data)=>{
//   fs.readFile('./resource/插秧诗.md', (err, data2)=>{
//     fs.readFile('./resource/观书有感.md', (err, data3)=>{
//       let result = data + '\r\n' + data2 + data3;
//       console.log(result);
//     });
//   });
// }); 

// 使用promise实现
const p = new Promise((resolve, reject)=>{
  fs.readFile('./resource/为学.md', (err, data)=>{
    resolve(data);
  });
});

p.then(value=>{
  return new Promise((resolve, reject)=>{
    fs.readFile('./resource/插秧诗.md', (err, data)=>{
      resolve([value, data]);
    });
  })
}).then(value => {
  return new Promise((resolve, reject)=>{
    fs.readFile('./resource/观书有感.md', (err, data)=>{
        value.push(data);
        resolve(value);
    });
  })
}).then(value => {
  console.log(value.join('\r\n'));
})