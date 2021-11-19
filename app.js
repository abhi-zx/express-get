const express = require('express');

// console.log(express)
const user = require('./user');
const app = express();

app.get('/',(req,res)=>{
    return res.send("Welcome to homepage...!!")
})

app.get('/users',(req, res) => {
    
    return res.send(user);
})



app.listen(3000,function(){
    console.log('listening on port 3000')
})