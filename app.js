// console.log(`Hello Node JS`);
// console.log(process.version);

// console.log( __filename );
// console.log( __dirname );

// console.log( process==globalThis.process );

// require('./modules.js');
// import "./modules.js";
import fs from "fs";

// console.log( uname  );
// console.log( id  );
// console.log( city );

// fs.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.warn(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log("done");

/* console.log(1);
Promise.resolve(2).then(res=>console.log(res));
setTimeout(()=>console.log(3));
setImmediate(()=>console.log(4));
process.nextTick(()=>console.log(5));
console.log(6); */


fs.readFile("data.txt", "utf-8", (err, data) => {
  
    console.log(1);
    Promise.resolve(2).then(res=>console.log(res));
    setTimeout(()=>console.log(3));
    setImmediate(()=>console.log(4));
    process.nextTick(()=>console.log(5));
    console.log(6);

});