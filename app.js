const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');
const app = express();


// create application/json parser
app.use(bodyParser.json())
 
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/crud-expDB');
const db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/createuser', function(req, res){
    let value = {
        name : req.body.Name,
        email : req.body.Email,
        password : req.body.Password
    };
    User.create(value, function(err, records){
        if(err) return res.json("err")
        else return res.json(records)
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))