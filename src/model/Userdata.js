
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.mtvj9.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');


// User Schema
const UserSchema = mongoose.Schema({
  username:String,
  email:String,
  password:String,
  confirmpassword:String 
});
 //model creation
const Userdata = mongoose.model('userdata', UserSchema);
module.exports= Userdata;