// const email=document.getElementById('email');
// const pwd=document.getElementById('passwordInput');

function ValidateEmail(inputtxt)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputtxt.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}

function CheckPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
if(inputtxt.value.match(decimal)) 
{ 
return true;
}
else
{ 
alert('The password must contain atleast one uppercase,one lower case,one digit and one special character')
return false;
}
}

function matchPassword() {  
    var pw1 = document.getElementById("passwordInput");  
    var pw2 = document.getElementById("confirmpasswordInput");  
    if(pw1 != pw2)  
    {   
      alert("Password did not match");  
    } else {  
      alert("Password created successfully");  
    }  
  }