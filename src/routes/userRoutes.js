const express=require("express")

const userRouter=express.Router();

function router(nav4,nav3){

userRouter.get('/',function(req,res){
     
       
    res.render("user",{
        nav4,nav3,
        title:'Library'
    });
});


return userRouter;
}
module.exports=router;