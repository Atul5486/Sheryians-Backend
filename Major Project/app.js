const express =require("express");
const app=express();
const path=require("path");
const cookieParser = require("cookie-parser");
const db=require("./config/mongoose-connection");
const ownersRouter=require("./routes/ownersRouter");
const productsRouter=require("./routes/productsRouter");
const usersRouter=require('./routes/usersRouter');
const flash=require("connect-flash");
const expressSession=require("express-session");
const indexRouter=require("./routes/index");
require("dotenv").config(); 

app.set("view engine","ejs"); 
 
app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({extended:true}));

app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
)
app.use(flash());
app.use(express.static(path.join(__dirname,"public")))

app.use('/',indexRouter);
app.use('/owners',ownersRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);

app.listen(3000,()=>{
    console.log("Server is running at 3000 port");
})  