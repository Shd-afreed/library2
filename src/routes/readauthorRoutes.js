
const express=require("express")

const readauthorRouter=express.Router();
const Authordata=require('../model/Authordata');


function router(nav4,nav3){

readauthorRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
       res.render("readauthors",{
           nav4,nav3,
           title:'Library',
           authors
       });
    });
  
});

readauthorRouter.get('/:id',function(req,res){
const id=req.params.id;
Authordata.findOne({_id:id})
.then(function(author){
    res.render('readauthor',{
        nav4,
        title:'Library',
        author
    });
});  
});
 return readauthorRouter;
}
module.exports=router;