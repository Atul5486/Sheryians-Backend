const mongoose=require('mongoose')
try{
    mongoose.connect('mongodb://127.0.0.1:27017/self')
}catch(err){
console.log(err.message)
}

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    image:String
})

module.exports=mongoose.model('user',userSchema)