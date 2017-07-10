
var express = require('express');
var app = express();
var exphbs = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',exphbs.engine)
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);   //设置服务启动窗口

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

app.use(express.static(__dirname + '/public'))//设置静态路由


app.get('/',function(req,res){
    res.render('home');
});
app.get('/about',function(req,res){
    var randomFortunes = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about',{fortunes:randomFortunes});
});

//404页面
app.use(function(req,res){
    res.status(404);
    res.render('404');
});
//500页面
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});

