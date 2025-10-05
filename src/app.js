import os from 'node:os';                          // from node
import fs from 'node:fs';                          // from node


// console.log(os.arch() );
// console.log( os.cpus().length );
// console.log( os.cpus()[0]);
// console.log( os.totalmem()/(1024*1024*1024) );
// console.log( os.freemem()/(1024*1024*1024) );

// console.log( os.networkInterfaces() );
// console.log( os.platform() );
// console.log( os.type() );
// console.log( os.uptime()/(60/60/24) );
// console.log( os.userInfo() );


// const file=fs.readFileSync('src/data.txt','utf-8');
// console.log(file);

 fs.readFile('src/data.txt',{encoding:'utf8'},(err,data)=>{
     if(err){
          console.warn(err);
     }
     else{
          console.log(data);
     }
 });

//  fs.stat('src/data.txt', (err, stats) => {
//     if (err) {
//       console.error(err)
//     }
//     else{
//         console.log(stats.isFile());      // true
//         console.log(stats.isDirectory());      // false
//         console.log(stats.size);             // 
//     }
//   });

// fs.writeFile('src/data1.txt','hello, i am node 2','utf8',(err)=>{
//      if(err){ console.warn(err) }
// })

// fs.appendFile('src/data1.txt',`hello, its ${new Date().getTime()} \n`,'utf8',(err)=>{
//      if(err){ console.warn(err) }
// });


// fs.unlink("src/data1.txt",(err)=>{
//      if(err){
//           console.warn(err)
//      }
//      else{
//           console.log("file deleted");
//      }
// });