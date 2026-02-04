const bookModel =require('../models/book')

// Add Book
exports.addBook=async(req,res)=>{
    try{
        console.log(req.body);
         const {title,author,genres,price,stock,rating}=req.body;
        const book=await bookModel.create({title,author,genres,price,stock,rating});
        console.log(book);
        res.status(200).json(book);
    }catch(err){
        console.log(err);
        res.status(400).json({message:err.message})
    } 
}

// Read All books

exports.getBooks=async(req,res)=>{
    try{
        const books=await bookModel.find({})
        res.json(books);
    }catch(err){
        res.status(400).json({message:err.message})
    }
}
// Get Single Book
exports.getBook=async(req,res)=>{    
    try{
        const book=await bookModel.findById(req.params.id);
        res.json(book);
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

// Update Book
exports.updateBook=async(req,res)=>{    
    try{
         const {title,author,genres,price,stock,rating}=req.body;
        const book=await bookModel.findByIdAndUpdate(req.params.id,{title,author,genres,price,stock,rating},{new:true});
        res.json(book);
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

// Delete Book
exports.deleteBook=async(req,res)=>{    
    try{
        await bookModel.findByIdAndDelete(req.params.id);
        res.json({message:"Book Deleted Successfully"});
    }catch(err){
        res.status(400).json({message:err.message})
    }
}