const express = require('express')

const app = express();

app.use(express.json());

app.get('/', function( req, res) {
    res.send('Hello world!');
});

app.post('/test', function( req, res) {
    console.log(req.body);
    res.send('hey class');
});

app.listen(3000);

