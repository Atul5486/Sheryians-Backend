const express=require("express");
const { isLoggedIn } = require("../middleware/isLoggedIn");
const productsModel=require("../models/product-model")
const router=express.Router();
router.get("/",(req,res)=>{
   let error=req.flash("error");
   res.render("index",{error,loggedIn:false});
})
router.get("/shop",isLoggedIn,async function(req,res){
   let products=await productsModel.find();
   res.render("shop",{products});
})

 
module.exports=router;