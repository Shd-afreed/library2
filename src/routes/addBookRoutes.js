
const express=require("express")

const addbookRouter=express.Router();

const Bookdata=require('../model/Bookdata');

const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/images/',
  filename: function(req, file, cb){
    cb(null,file.originalname);
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  
}).single('image');



function router(nav1,nav3){

    addbookRouter.get('/',function(req,res){
   
        res.render("addBooks",{
            nav1,nav3,
            title:'Library'
            
        })
    })

    addbookRouter.post('/add',function(req,res){
      
        upload(req, res, (err) => {
     var item={ 
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: req.file.originalname
     }

    var book=Bookdata(item);
    book.save();//save to database
    res.redirect('/books');
    
    });
}); 


return addbookRouter;
}
module.exports=router;

