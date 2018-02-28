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

server.listen(3000,function(){
    console.log('rest service is running on port 3000')
});