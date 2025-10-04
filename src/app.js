// require('colors');                             // cjs
//const os= require('os');                        // cjs

/* esm */
import colors from 'colors';                       // from npm
import {pi,r} from './modules.js';                 // from custom
import os from 'node:os';                          // from node


// console.log(process.version);

console.log("Hello World".red);
// console.log("Hello World".green);
// console.log("Hello World".yellow);

// console.log( global.city );
console.log( pi );
console.log( r );
console.log( os.arch() );

console.log(process.version);
