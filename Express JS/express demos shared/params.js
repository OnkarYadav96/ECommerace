var exp = require('express');

var app = exp();

app.listen(8100,function(){
     console.log("server stsrted at 8100");
});

app.get('/login.html',function(req,res){});

app.get('/logincheck',function(req,res){
});



app.get('/welcome',function(req,res){
     res.send("<h1> WELCOME "+req.query.nm+"</h1>");
});

app.get('/products/:id',function(req,res){
     res.send("Info about product id : "+req.params.id);
});

app.get('/products/:id/:qty',function(req,res){
     res.send("product id "+req.params.id+" is added in cart for "+req.params.qty );
});

app.get('/products',function(req,res){
     res.send("Info about all products");
});

app.all('/*', function(req,res){
    res.send("Invalid request");
});


