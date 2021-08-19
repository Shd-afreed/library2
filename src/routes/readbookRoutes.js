
const express=require("express")

const readbookRouter=express.Router();

const Bookdata=require('../model/Bookdata');


function router(nav4,nav3){

    readbookRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
           res.render("readbooks",{
               nav4,nav3,
               title:'Library',
               books
           });
        });
      
   });
  
    
   readbookRouter.get('/:id',function(req,res){
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
 return readbookRouter;
}
module.exports=router;