const express =require('express');
const multer = require('multer');
const app=express();
const path=require('path')
const crypto=require('crypto');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12,(err,byte)=>{
        cb(null,byte.toString('hex')+path.extname(file.originalname
          
        ));
    })
  }
})

const upload = multer({ storage: storage })

app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/image', upload.single('image'),(req,res)=>{
    let img=req.file;
    console.log(img);
    res.redirect('/');
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})