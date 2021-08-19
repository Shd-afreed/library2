const express=require("express");
const loginRouter=express.Router();
const Userdata=require('../model/Userdata');



function router(nav1,nav2){


loginRouter.get('/',function(req,res){
   
    res.render("login",{
        nav1,
        nav2, 
        title:'Library'
        
    });
});


    
       // 'Email':'adminlib@gmail.com',
      //  'Password':'Lib@123'
    


loginRouter.post('/checkuser',async(req,res)=>{

try{
   const  email=req.body.email
   const   password=req.body.password
   Userdata.findOne({email:email,password:password},function(err,doc){
    if(email==='adminlib@gmail.com'||password==='Lib@123'){
        res.redirect('/admin');
    }
   else if(doc){        
    res.status(201).redirect('/user');
    }  
   else{
     res.send('Invalid username or password')
          
   }
});
}
   catch(error){
    res.status(400).send('Invalid email');
    }
});

return loginRouter;

}
module.exports=router;