//Backend Steps
// import---------
const express= require('express')
 const app=express()
 app.get('/',function(req,res){
    res.send(`Back-end App Running`)
 })
 app.get('/login',function(req,res){
    res.send(`Login Command`)
 })
 // listen()
 app.listen(3000,function(){
    console.log(`http://localhost:3000`)
 })