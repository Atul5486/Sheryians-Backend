const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/data_collection')

const userSchema = new mongoose.Schema({
    username:{
      type: String
    },
    age:Number,
    email:String,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
})
module.exports = mongoose.model('user',userSchema)
