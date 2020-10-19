var express=require('express');
var app=express();

app.get('/greet',function(req,res){

res.send("Welcome to my Web App");

});

app.listen(4000);

console.log("Server running on port 4000");