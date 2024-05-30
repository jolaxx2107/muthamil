
const email=document.getElementById("email")
const Password=document.getElementById("Password")
const submit=document.getElementById("submit")
const email_error=document.getElementById("email_error")
const password_error=document.getElementById("password_error")

form.addEventListener('submit',(e)=>
    {
        e.preventDefault();
        console.log('check',email)
    var email_check=/^([A-Z a-z 0-9 _ \-\.])+\@([A-Z a-z 0-9 _\-\.])+\.([A-Z a-z]{2,4})$/;
        if(!email.value.match(email_check))
            {
                e.preventDefault();
                email_error.innerHTML="Valid email is required";
            }
            else
            {
                email_error.innerHTML="";
            }
            if(Password.value.length<8)
               {
                  e.preventDefault();
                  password_error.innerHTML="Password cannot be less than 8 characters";
                }
               else
                {
                   password_error.innerHTML="";
                }
                if(Password.value.length>=20)
                   {
                       e.preventDefault();
                       password_error.innerHTML="Password cannot be more than 20 characters";
                    }
                    if(Password.value=='password')
                       {
                           e.preventDefault();
                           password_error.innerHTML="Password cannot be password";
                        }
                         if(Password.value=="")
                             {
                              e.preventDefault();
                              password_error.innerHTML="Please enter the password";
                            }
                            var pass_check=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]$/;
                             if(!Password.value.match(pass_check))
                             {
                                 e.preventDefault();
                                 pass_error.innerHTML= "Password must have atleast one uppercase,lowercase,numeric value and one special character";
                              }

    })
