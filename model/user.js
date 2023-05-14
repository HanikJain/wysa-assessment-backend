const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    email: {type: 'string', required: true, unique: true},
    messages: Array,
    startIndex: Number,
    delay: String,
    themes: Array
  });
  

const UserModel = mongoose.model('user', userSchema);  
module.exports = UserModel;