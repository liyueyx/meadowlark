
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

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});

