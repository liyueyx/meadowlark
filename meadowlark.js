/*

var express = require('express');
var app = express();
app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
    res.type('text/plain');
    res.end('Meadowlark Travel');
});
app.get('/about',function(req,res){
    res.type('text/plain');
    res.end('about Meadowlark Travel');
});

//404页面
app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.end('404 not find');
});
//500页面
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.end('500 - Server Error');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

app.listen(app.get('port'),'localhost',function(){
    console.log('server stared on localhost:3000');
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});
*/
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});