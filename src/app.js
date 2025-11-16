import express from 'express';
import path from 'node:path';
import admin from './routes/admin.js';
import products from './routes/products.js';
import api from './routes/api.js';
import search from "./controller/search.js"
import cookieParser from 'cookie-parser';
import session from 'express-session';
import parseurl from 'parseurl';
import multer from "multer";
import ejs from 'ejs';



const app=express();
const port=process.env.PORT || 8081;

app.use(express.static(path.resolve('src/public')));
app.use(express.static(path.resolve('node_modules/bootstrap/dist')));


app.set('view engine', 'ejs');
app.set('views', path.resolve('src/public') );

const storage=multer.diskStorage({
     destination: function (req, file, cb) { cb(null, 'src/public/upload/')},
     filename: function (req, file, cb) {
     //  cb(null, file.originalname);                             // for original name 
      cb(null, Date.now() + path.extname(file.originalname)); 

    }
})
const upload=multer({storage:storage});


app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('secret'));

app.set('trust proxy', 1); 
app.use(session({
    secret:"session",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false, maxAge:180000}
}));


app.use((req,res,next)=>{
     // console.log(`App starts at ${new Date().toLocaleString()}`);
     // console.log( req.url );
     // console.log( req.url );
     //  console.log(req.cookies);
     // res.cookie("name","avi", {maxAge:86400, httpOnly: true, signed: true});
     // console.log(req.signedCookies);
     // console.log(req.signedCookies.name);
     if (!req.session.views) { req.session.views = {} }

     const  pathname = parseurl(req).pathname;

     req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

     next();
});


/* routing */
app.get('/',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     // res.status(200).send(`<h1>Hello Express</h1>`);
     // res.status(200).send(`<h1>${req.sessionID}</h1> <p>page Views: ${req.session.views['/']}</p>`);
     res.status(200).render('index',{name:"EJS",version:"3.1.10", car:{name:"swift", power:82}, cars:["swift","polo","baleno","brezza"]});
});

app.get('/about',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).render('about',{name:"EJS",version:"3.1.10"});
})


function auth(req,res,next){
     const hours=new Date().getHours();
     if(hours>=9 && hours<=17){
          next();
     }
     else{
          res.status(403).send('Can\'t Login');
     }
}
 
app.get('/login',auth,(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send('Login Page');
});



app.get("/send",(req,res)=>{
     res.status(200).send(`Get data`);
});

app.post("/send",(req,res)=>{
     if( req.body.login=="admin" && req.body.password=="1234"){
          res.status(200).send(`Welcome ${req.body.login}`);
     }
     else{
          res.status(403).send('Forbidden');
     }
});

app.post("/postdata",(req,res)=>{
     const q=req.body;     
     res.status(200).send(JSON.parse(q));
});

app.post("/uploads",upload.single('resume'),(req,res)=>{
     console.log( req.file );
     // res.status(200).send("uploaded");
     res.status(200).send(`Fil uploaded, size:${(req.file.size/1048576).toFixed(2)} MB, Name alloted: ${req.file.filename}`);
})


app.get("/search",search);

app.use("/admin",admin);
app.use("/products",products);
app.use("/api",api);


/* wild card handler */
app.get("/*splat",(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port,()=>{
     console.log(`App server running at http://127.0.0.1:${port}`);
});