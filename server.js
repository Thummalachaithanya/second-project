const express=require('express')
const app=express()
app.get('/honey',function(req,res){
    res.send("honey product data")
})
app.get('/clothes',function(req,res){
    res.send("bymistake products data")
})
app.get('/shampoo',function(req,res){
    res.send("shampoo products datan")
})
app.listen(8086)