var exp = require('express');

var app = exp();

app.use(exp.static('images'));
app.use(exp.static('styles'));
app.use(exp.static('scripts'));

app.use(function(req,res,next){
    var d =  new Date();
    console.log("Request received at "+d.toString()+" for "+req.url);
    next();
});

app.get('/image',function(req,res){
    res.send("<img src='Desert.jpg' width='200' height='200' />");
});

app.listen(8100, function(){
     console.log("server started at 8100");
});