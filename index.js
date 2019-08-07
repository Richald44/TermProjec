const http = require('http');
const site = http.createServer(function(req,res){
    console.log("hellow World");

    res.setHeader('Content-Type','text/html');
    console.log(req.rawHeaders);
    res.end('<h1>hellow world</h1>');
});
site.listen(3000);