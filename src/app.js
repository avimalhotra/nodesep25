import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';
import { EventEmitter } from 'node:events';
const emitter=new EventEmitter();


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log( path );

// console.log(path.normalize('./src'));
// console.log(path.normalize('src//retina'));
// console.log(path.resolve('src/app'));
// console.log(path.resolve(__filename));
// console.log(path.resolve(__dirname));


// fs.readFile(path.resolve('src/data.txt'),'utf-8',(err,res)=>{
//      if(err){ console.warn(err);}
//      else{ console.log(res) }
// });


// fs.ReadStream(path.resolve("src/data.txt")).on("open",()=>{
//      console.log("file open");
// });

emitter.on("start",(res)=>{
     console.log(`event 1 done with ${res}`);
});
emitter.on("start",(res)=>{
     console.log(`event 2 done with ${res}`);
});

// emitter.on("done",(x)=>{
//     console.log(`done`);
//     x.handled=false;
// })

// emitter.on("done",(x)=>{
//     if(x.handled){
//         console.log(`already done`);
//     }
// });


// emitter.once("done",(x)=>{
//      console.log(`done`);
// });

// emitter.emit("start",'avi');
// emitter.emit("done",);
// emitter.emit("done",);