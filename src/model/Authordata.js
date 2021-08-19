const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.mtvj9.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;
const AuthorSchema= new Schema({
    authorname:String,
    work:String,
    published:String,
    image:String
});


//Model creation
var Authordata=mongoose.model('authordata',AuthorSchema);

module.exports=Authordata;



