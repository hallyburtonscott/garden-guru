const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());
const User = require('./user.js');

app.get('/', function (req, res) {
    console.log("GET request for homepage");
    res.send('Hello World from the homepage');
})
app.get('/users:id', (req, res) => {
    let users = User.findAll();
    res.send('it worked!');
})

app.post('/users', (req, res) => {
    //console.log('you are at the response body');
    const {first, last, email, phone, username, password} = req.body;
    const user = User.create(first, last, email, phone, username, password);
    console.log('userID', user.id);
    if(user.id == undefined){
        res.status(500).send('Server error, user not created'
        )
    }else {
        res.json(user);
    }
})

const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("listening at http://%s:%s", host, port)
})

