const http = require('http');

const server = http.createServer(function (req, res) {
    //콜백함수 내용 써야 함
    res.writeHead(200, {'content-Type':'text/html'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<h6>Hello Node!</h6>');
    res.end('<p>Hello Server</p>');
})

server.listen(8080, function() {
    console.log('8080번 포트에서 서버 대기 중입니다.');
  });

