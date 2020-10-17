const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.port || 3000);


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/about.html');
})

app.get('/user', (req, res)=>{
    res.sendFile(__dirname + '/user.html');
})

app.get('/user/:id/:pwd', (req, res)=>{
    console.log(req.params);
    res.send('user : ' + req.params.id);
})

app.get('/post', (req, res)=>{
    console.log(req.query.id + ',' + req.query.passward);
    res.sendFile(__dirname + '/post.html');
})

app.post('/post', (req,res)=>{
    res.send('This is post page');
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중...')
})