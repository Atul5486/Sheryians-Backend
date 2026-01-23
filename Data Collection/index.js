const express = require('express');
const app = express();
const userModel=require('./models/user')
const postModel= require('./models/post');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async(req, res) => {
  let user=await userModel.create({
    username:'John Doe',
    age:30,
    email:'john@example.com',
    posts:[]
  })
  res.send(user) 
})

app.get('/create/post', async (req, res) => {
  let post = await postModel.create({
    postdata: 'This is a post',
    user: '686d527fb8eeb7c3bc15dcef',
  })
  let user=await userModel.findOne({ _id: '686d527fb8eeb7c3bc15dcef' })
  user.posts.push(post._id)
    await user.save()
  res.send({post,user})
})

app.listen(3000)