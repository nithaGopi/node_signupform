var http = require('http');
var fs   = require('fs');
var url  = require('url');

// we can add html through this write code

//http.createServer(function(req, res){
//res.write("Its a data from server ..nitha");
//res.end();
//}).listen(7000)

//ADD HTML THROUGH WRITE()


http.createServer(function (req, res) {

    var q  =  url.parse(req.url,true);
    if(q.pathname==='/'){
       fs.readFile('table.html',function(err,data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();

        })
    } else if(q.pathname==='/signup'){
        fs.readFile('signup.html',function(err,data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();

        })


    } else if(q.pathname==='/signupAction'){


        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>"+q.query.email+"</h1>")

        res.end()
    }else{
         res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('error')
        res.end()
    }




}).listen(7000);






//ctrl c   - cmd prompt to quit from server