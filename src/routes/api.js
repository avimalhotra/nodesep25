import express from "express";
import searchapi from "../controller/searchapi.js";
const router =express.Router();


router.get("/",(req,res)=>{
     // res.header('Access-Control-Allow-Origin',"*");
     res.status(200).json([{name:"aaa", id:22}]);
});

router.get("/search",(req,res)=>{
     res.status(200).send(`Search API`);
});

router.get("/search/:id",searchapi);


export default router;