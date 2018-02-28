//
var http = require('http');
var express = require('express');

var app = express();
var server = http.createServer(app);

app.get('/api/widgets',function(req,res){
    res.json([
        {nickname: "mustafa", email:"mturkoz93@gmail.com", pwd:"123" },
        {nickname: "ahmet", email:"mturkoz@gmail.com", pwd:"111" },
        {nickname: "ali", email:"turkoz93@gmail.com", pwd:"444" },
    ]);
});

// if "app.get()" function gets other link parameters, this shows a 404 page.
app.use(function(req,res){
    // res.status(404)
    res.send("<h1>not found 404</h1>");
    res.end();
});

server.listen(3000,function(){
    console.log('rest service is running on port 3000')
});
