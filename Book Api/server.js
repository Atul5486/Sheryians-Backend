const express=require('express');
const app=express();
const connectDb=require('./config/db.js')
const dotenv=require("dotenv");
const router=require('./routes/bookRouter')

dotenv.config();
connectDb();
app.use(express.json());
app.use('/api/books',router);
 
app.listen(3000,()=>{
    console.log("Server Is running at 3000 port")
})