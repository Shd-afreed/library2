const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.mtvj9.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;

const BookSchema= new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});


//Model creation
const Bookdata=mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;