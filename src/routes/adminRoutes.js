const express=require("express")

const adminRouter=express.Router();


function router(nav1,nav3){
adminRouter.get('/',function(req,res){
  
    res.render("admin",{
        nav1,nav3,
        title:'Library'
    });

});
 return adminRouter;
}
module.exports=router;