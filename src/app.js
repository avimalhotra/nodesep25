import express from 'express';
import path from 'node:path';
import admin from './routes/admin.js';
import products from './routes/products.js';
import search from "./controller/search.js";

const app=express();
const port=process.env.PORT || 8081;

// app.use(express.static(path.resolve('src/public')));
// app.use(express.static(path.resolve('node_modules/bootstrap/dist')));

app.use((req,res,next)=>{
     // console.log(`App starts at ${new Date().toLocaleString()}`);
     console.log( req.url );
     // console.log( req.url );
     next();
});

/* routing */
app.get('/',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send(`<h1>Hello Express</h1>`);
});

function auth(req,res,next){
     const hours=new Date().getHours();
     if(hours>=9 && hours<=17){
          next();
     }
     else{
          res.status(200).send('Can\'t Login');
     }
}
 
app.get('/login',auth,(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send('Login Page');
});
app.get('/api',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).json([{name:"aaa", id:22}]);
});

app.get("/send",(req,res)=>{
     res.status(200).send(`Get data`);
});
app.post("/send",(req,res)=>{
     res.status(200).send(`Post data`);
});

// app.get("/search",(req,res)=>{
//      if(req.query.used){
//            res.status(200).send(`Query: ${req.query.query}, Used: ${req.query.used}`);
//      }
//      else{
//            res.status(200).send(`Query: ${req.query.query}, Used: false`);
//      }
// });

app.get("/search",search);


/* app.get("/products",(req,res)=>{
      res.status(200).send(`Products Page`)
})
app.get("/products/:brand",(req,res)=>{
      console.log( req.params );
      res.status(200).send(`Brand: ${req.params.brand}`);
});
app.get("/products/:brand/:model",(req,res)=>{
      console.log( req.params );
      res.status(200).send(`Brand: ${req.params.model}, Model: ${req.params.brand}`);
});
app.get("/products/:brand/:model/:varient",(req,res)=>{
      console.log( req.params );
      res.status(200).send(`Brand: ${req.params.brand}, Model: ${req.params.model}, Varient: ${req.params.varient},`);
}); */


app.use("/admin",admin);
app.use("/products",products);


/* wild card handler */
app.get("/*splat",(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port,()=>{
     console.log(`App server running at http://127.0.0.1:${port}`);
});