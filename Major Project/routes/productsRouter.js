const express=require("express");
const upload = require("../config/multer-connection");
const productModel = require("../models/product-model");
const router=express.Router();

router.post("/create",upload.single("image"),async (req,res)=>{
    let{name,price,discount,bgcolor,panelcolor,textcolor} =req.body;
    let product=await productModel.create({
        image:req.file.buffer,
        discount,
        bgcolor,
        textcolor,
        panelcolor ,
        name,
        price,
    })
    req.flash("success","Product created Successfully")
    res.redirect("/owners/products");

})
module.exports=router;  