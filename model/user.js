const mongoose = require('mongoose');
const user = mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
});

const Users = module.exports =  mongoose.model('Users', user);