const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 
  id:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true,
  },
  password: {
    type: String,
    required: true
  },
  image:{
    type:String,
    required:true
  }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
