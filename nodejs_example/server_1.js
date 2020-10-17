const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(function (req, res) {
    console.log(req.method + ' : ' + req.url);
    res.writeHead(200, {'content-Type':'text/html'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<h6>Hello Node!</h6>');
    //res.end('<p>Hello Server</p>');
    if (req.method == 'GET'){
        if(req.url == '/'){
            fs.readFile('server_1.html')
            .then((data) => {
                res.end(data);
            })
            //res.end('<p>Hello Server</p>')
        } else if(req.url == '/about'){
            res.end('<p>This is about page</p>')
        } else if(req.url == '/user'){
            res.end('<p>This is user page</p>')
        } /*else if(req.url == '/list'){
            res.end('<p>This is list page</p>')
        } */
    } else if(req.mrthod == 'POST'){
        if(req.url == '/post'){
            res.end('<p>POST test page</p>');
        }
    }
})

server.listen(8080, function() {
    console.log('8080번 포트에서 서버 대기 중입니다.');
  });

/*  server.on('error', function(err){
      console.log('8080 port에 이미 서버가 실행 중입니다.');
  }) */