// Part 1
const express=require('express')
const app=express()
const userModel=require('./usermodel')
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.get('/create',async (req,res)=>{
    let createdUser=await userModel.create({name:"Json",username:"JSON",email:"json@email.com"})
    res.send(createdUser)
})
app.get('/update',async (req,res)=>{
    let updatedUser=await userModel.findOneAndUpdate({name:"Json"},{username:"JSONBhaiya"},{new:true})
    res.send(updatedUser)
})
app.get('/read',async (req,res)=>{
    let readUser=await userModel.find({name:"Json"})
    res.send(readUser)
})
app.get('/delete',async (req,res)=>{
    let deletedUser=await userModel.findOneAndDelete({name:"Json"})
    res.send(deletedUser)
})

app.listen(3000) 