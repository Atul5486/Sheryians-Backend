const  mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/MulterImage';

mongoose.connect(mongoDB);
const img=mongoose.Schema({
    imagePath:String
});
module.exports=mongoose.model('Image',img);