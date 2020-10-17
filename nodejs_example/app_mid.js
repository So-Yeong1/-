const express = require('express');
var app = expreess();
var count = 0;
app.set('port', process.env.port || 3000);

app.use(function (req, res, next) {
    console.log('Count : ', count);
    count = count+1;
    next();
});

/* app.use('/user/:id', function(req, res, next) {
    console.log('Request Type:', method);
    next();
}); */

app.listen(app.get('port'), () => {
    console.log(app.get('port'),'빈 포트에서 대기 중...')
})