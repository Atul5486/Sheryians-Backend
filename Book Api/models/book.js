const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:{type:String,required:true},
    author:String,
    genres:[String],
    price:Number,
    stock:Number,
    rating:Number,
},
{timestamps:true}
)
module.exports=mongoose.model("book",bookSchema); 