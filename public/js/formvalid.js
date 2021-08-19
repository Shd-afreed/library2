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