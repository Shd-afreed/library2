const express=require("express")

const booksRouter=express.Router();
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




function router(nav1,nav3,nav4){

    booksRouter.get('/',function(req,res){
         Bookdata.find()
         .then(function(books){
            res.render("books",{
                nav1,nav3,
                title:'Library',
                books
            });
         });
       
    });
    

    
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav4,
                title:'Library',
                book
            });
        });  
    });

 

    /* GET SINGLE User BY ID */
booksRouter.get('/updatebook/:id', function(req, res) {
  const id=req.params.id;
  Bookdata.findOne({_id:id})
  .then(function(book){
      res.render('updatebook',{
          nav1,nav3,
          title:'Library',
          book
      });
  }); 
  
     });
 
     booksRouter.post('/updatebook/:id',function(req,res){
       
         /* UPDATE User */
       
             upload(req, res, (err) => {
          var item={ 
             authorname: req.body.authorname,
             work: req.body.work,
             published: req.body.published,
             image: req.file.originalname
          }
             
             
           Bookdata.findByIdAndUpdate(req.params.id, item, function(err) {
               if (err) {
                   res.redirect('updatebook/' + req.params.id);
               } else {
                   res.redirect('/books')
               }
             });  
         });
     });    
 
 booksRouter.get('/delete/:id', function(req, res) {
 
     Bookdata.findByIdAndRemove(req.params.id, function(err, project) {
         if (err) {
             res.redirect('/books');
         } else
         {
             res.redirect('/books');
         }
     });
 });
 

    return booksRouter;
}


module.exports=router;