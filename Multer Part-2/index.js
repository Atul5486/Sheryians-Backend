const express =require('express');
const app=express();
const path=require('path')
const upload=require('./config/upload');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/image', upload.single('image'),async (req,res)=>{
    const imagePath = req.file.path;
    const Image = require('./models/img');
    let image=await Image.create({ imagePath });
    res.render('image', { message: 'Image uploaded successfully!', image });
    console.log(image.imagePath.replaceAll("\\", "/"));
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})