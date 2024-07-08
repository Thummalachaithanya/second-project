const express=require('express')
const app=express()
app.get('/product/:sportname',function(req,res){
    res.send(`the product is of ${req.params.sportname}`)
})
app.listen(8088)