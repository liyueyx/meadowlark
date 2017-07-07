/**
 * Created by fff on 2017/7/6.
 */
var http = require('http'),
    fs = require('fs');
function serverStaticFile(res,path,contentType,responseCode){
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname+path,function(err,data){
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('500 - Internal Error');
        }else{
            res.writeHead(responseCode,{'Content-Type':contentType});
            res.end(data);
        }
    });
}

http.createServer(function(req,res){
    var path = req.url.replace('/\/?(?:\?.*)?$/','');
    if(path === '/favicon.ico') return ;
    switch (path){
        case '/':
            serverStaticFile(res,'/public/home.html','text/html');
            break;
        case '/home':
            serverStaticFile(res,'/public/home.html','text/html');
            break;
        case '/about':
            serverStaticFile(res,'/public/about.html','text/html');
            break;
        case '/img/logo.png':
            serverStaticFile(res,'/public/images/ttgf.jpg','image/jpeg');
            break;
        default:
            serverStaticFile(res,'/public/notfoud.html','text/html',404);
            break;
    }
}).listen(3000,'localhost',function(){
    console.log("server started on localhost:3000");
});