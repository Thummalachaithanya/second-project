const express=require('express')
const app=express()
app.get('/login',function(req,res){
    res.send("login here")
})
app.get('/register',function(req,res){
    res.send("register here")
})
app.listen(3030)