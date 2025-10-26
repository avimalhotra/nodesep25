import express from "express";

const router =express.Router();


router.get("/",(req,res)=>{
      res.status(200).send(`Products Page`)
})
router.get("/:brand",(req,res)=>{
      console.log( req.params );
      res.status(200).send(`Brand: ${req.params.brand}`);
});
router.get("/:brand/:model",(req,res)=>{
      console.log( req.params );
      res.status(200).send(`Brand: ${req.params.model}, Model: ${req.params.brand}`);
});
router.get("/:brand/:model/:varient",(req,res)=>{
      console.log( req.params );
      res.status(200).send(`Brand: ${req.params.brand}, Model: ${req.params.model}, Varient: ${req.params.varient},`);
});

export default router;