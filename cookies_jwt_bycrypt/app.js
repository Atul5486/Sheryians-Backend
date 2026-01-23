const express =require('express')
const cookieParser=require('cookie-parser')
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')
const app=express()
app.use(cookieParser())

// Cookies
// app.get('/',(req,res)=>{
//     res.cookie("name","Harsh")
//     res.send("Pillo")
// })
// app.get('/read',(req,res)=>{
//     res.send(req.cookies)
// })

// Bcrypt
// app.get('/bcrypt',(req,res)=>{
//     bcrypt.genSalt(10,function(err,salt){
//         bcrypt.hash("Airtel@123",salt,function(err,result){
//             console.log(result)
//         })
//     })
//     res.send("Aa gaya")
// })
// app.get('/dcrypt',(req,res)=>{
//     bcrypt.compare("Airtel@123","$2b$10$gdbE3.UMJy2YlQZTGU4LiOeIhMocl3Q5UstfZ3SDyIhyrj05blOX.",function(err,result){
//         console.log(result)
//     })
// })

// JWT

app.get('/jwt',(req,res)=>{
    let token=jwt.sign({email:"example@gmail.com"},"Secret")
    res.cookie("token", token)
    res.send("Done")
})
app.get('/read',(req,res)=>{
   let data =jwt.verify(req.cookies.token,"Secret")
   console.log(data)
   res.send('Bas')
})


app.listen(3000)