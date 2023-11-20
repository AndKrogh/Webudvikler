const express = require('express')

const app = express();

app.use(express.json());

/* app.get('/', function( req, res) {
    res.send('Hello world!');
}); */

app.post('/test', function( req, res) {
    console.log(req.body);
    res.send('hey class');
});

app.get('/api/v1/users', function( req, res) {
    try {
        res.status(200).json({
            message:'Et array', 
        });
    }
    catch(e){    
        res.status(500).json({
            message:'Dumme it',
        })
    }
});

app.post('api/v1/users', (req, res) => {
    res.status(201).json({
        data: req.body,
    });
});

app.delete('/api/v1/users/:userId', (req, res) => {
    console.log(req.query);
    res.sendStatus(204);
});

app.listen(3001);

