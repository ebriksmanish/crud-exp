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

app.post('/createuser', (req, res) => {
    let value = {
        name : req.body.Name,
        email : req.body.Email,
        password : req.body.Password
    };
    User.create(value)
    .then((records) => {return res.json(records)})
    .catch((err) => {return res.json("err")})
})

app.get('/retrieveuser', (req, res) => {
    let value = {};
    User.find(value)
    .then((records) => {return res.json(records)})
    .catch((err) => {return res.json("err")})
})

app.put('/updateuserbyemail', (req, res) => {
    let findCriteria = {
        email : req.body.Email
    };
    let updatedRecords = {
        name : req.body.Name,
        password : req.body.Password
    };
    User.update(findCriteria, updatedRecords)
    .then((records) => {return res.json(records)})
    .catch((err) => {return res.json("err")})
})

app.delete('/deleteuserbyemail', (req, res) => {
    let criteria = {
        email : req.body.Email
    };
    User.remove(criteria)
    .then((records) => {return res.json("user deleted")})
    .catch(() => {return res.json("err")})
})


// app.post('/createuser', (req, res) => {
//     let value = {
//         name : req.body.Name,
//         email : req.body.Email,
//         password : req.body.Password
//     };
//     User.create(value, (err, records) => {
//         if(err) return res.json("err")
//         else return res.json(records)
//     })
// })

// app.get('/retrieveuser', (req, res) => {
//     let value = {};
//     User.find(value, (err, records) => {
//         if(err) return res.json("err")
//         else return res.json(records)
//     })
// })

// app.put('/updateuserbyemail', (req, res) => {
//     let findCriteria = {
//         email : req.body.Email
//     };
//     let updatedRecords = {
//         name : req.body.Name,
//         password : req.body.Password
//     };
//     User.update(findCriteria, updatedRecords, (err, records) => {
//         if(err) return res.json("err")
//         else return res.json(records)
//     })
// })

// app.delete('/deleteuserbyemail', (req, res) => {
//     let criteria = {
//         email : req.body.Email
//     };
//     User.remove(criteria, (err) => {
//         if(err) return res.json("err")
//         else return res.json("user deleted")
//     })
// })

// app.post('/createuser', function(req, res){
//     let value = {
//         name : req.body.Name,
//         email : req.body.Email,
//         password : req.body.Password
//     };
//     User.create(value, function(err, records){
//         if(err) return res.json("err")
//         else return res.json(records)
//     })
// })

// app.get('/retrieveuser', function(req, res){
//     let value = {};
//     User.find(value, function(err, records){
//         if(err) return res.json("err")
//         else return res.json(records)
//     })
// })

// app.put('/updateuserbyemail', function(req, res){
//     let findCriteria = {
//         email : req.body.Email
//     };
//     let updatedRecords = {
//         name : req.body.Name,
//         password : req.body.Password
//     };
//     User.update(findCriteria, updatedRecords, function(err, records){
//         if(err) return res.json("err")
//         else return res.json(records)
//     })
// })

// app.delete('/deleteuserbyemail', function(req, res){
//     let criteria = {
//         email : req.body.Email
//     };
//     User.remove(criteria, function(err){
//         if(err) return res.json("err")
//         else return res.json("user deleted")
//     })
// })



app.listen(4000, () => console.log('Example app listening on port 4000!'))