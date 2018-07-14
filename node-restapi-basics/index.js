var app = require('express')()
var path = require('path')

var port = process.event.PORT || 3000

app.get('/', function(req,res){
    res.send('<h1>Bello</h1>');
})

app.get('/page2', function(req,res){
    res.send('<h1>Bello, page2</h1>');
})


app.listen(port, function(){
    console.log("starting application at port " + port)
})