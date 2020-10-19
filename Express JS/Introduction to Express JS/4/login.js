var express=require('express');

var app=express();

app.get('/login/:userid/:password',function(req,res){



var user=req.params.userid;
var pass=req.params.password;

if(user=='object' && pass=='knowit')
{
res.send('Successful login');
}
else
{
res.send('failed login');
}
});

app.listen(5000);

console.log("server running on 5000");