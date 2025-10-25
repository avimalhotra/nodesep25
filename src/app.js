import express from 'express';
import path from 'node:path';


const app=express();
const port=process.env.PORT || 8081;

app.use(express.static(path.resolve('src/public')));
// app.use(express.static(path.resolve('node_modules/bootstrap/dist')));

app.use((req,res,next)=>{
     console.log(`App starts at ${new Date().toLocaleString()}`);
     next();
});

/* routing */
app.get('/',(req,res)=>{
     res.status(200).send('Hello Express');
});

app.get('/login',(req,res)=>{
     res.status(200).send('Login Page');
});


app.listen(port,()=>{
     console.log(`App server running at http://127.0.0.1:${port}`);
});