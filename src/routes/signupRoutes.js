const express=require("express")

const signupRouter=express.Router();
const Userdata=require('../model/Userdata');


function router(nav1,nav2){


    signupRouter.get('/',function(req,res){
        res.render("signup",{
           nav1,
           nav2,
           title:'Library' 
        })
    })
    signupRouter.post('/add',function(req,res){

        var item={ 
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
         }

         
    
        var user=Userdata(item);
        user.save();//save to database
        res.redirect('/login');
        });


    





    return signupRouter;
}



    


module.exports=router;
