import express from "express";

const router =express.Router();

router.get("/",(req,res)=>{
     res.status(200).send(`Login Page`);
});
router.get("/login",(req,res)=>{
     res.status(200).send(`Admin Page`);
});

export default router;