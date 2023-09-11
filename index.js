// var express = require('express');

// var app = express();

//  here we can get the message on console.
// Simple request time logger
// app.use(function(req, res, next){
//     console.log("A new request received at" + Date.now());
//     // function route handler.
//     next();
// }); 

// middleWARE can be used with routes we cannot apply it with anywhere.
// it is function req and res can be acess and modify to check authentication user is loged in or not we can check it in middleware
//  we cannot change it into routes because we have to rewrite the same code again and again.
// in middleware we can do it with once.

const express = require('express');
const app = express();

 const reqFilter=(req,res, next)=>{
    if(!req.query.age)
    {
        res.send("please provide age")
    }else if(req.query.age<18)
    {
       res.send("you cannot access this page")
    }else{
        next();    
    }
      
 }

 app.use(reqFilter)

app.get('/',(req, res)=>{
  res.send('Welcome to Home page')
})

app.get('/users', (req, res)=> {
    res.send('Welcome to users page')
})

app.listen(3000);

// types of middleware
// application-level-middleware
// Router-level-middleware
// Error-handling middleware
// Built-in-middleware
// Third party middleware