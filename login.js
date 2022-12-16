function Checkusername()
{
    var isName = /^[a-zA-Z]+$/;
    let input = document.getElementById("uname");
    if (input.value.trim() === "")
    {
      setError(input, "Please fill the username");
    }
    else if (!isName.test(input.value.trim()))
    {
     setError(input, 'Username cannot be a numbers or special characters');
    }
    else if (input.value.length<2)
    {
      setError(input, "username must be greater than 2");
    }
    else if(input.value.length>15)
    {
        setError(input, "username must be lesser than 15");
    }
  
   
    
    else
    {
     setSuccess(input)
    }
}


function Checkpassword()
{

    let pwdinput = document.getElementById("pwd");
    
    if (pwdinput.value.trim() === "")
    {
     setError(pwdinput, "Please fill the password");
    }
  
    else if(pwdinput.value.length<5)
    {
        setError(pwdinput, "password must be greater than 5");
    }
    else if(pwdinput.value.length>10)
    {
        setError(pwdinput, "password must be lesser than 10");
    }
     
    else
    {
      setSuccess(pwdinput)

    }

}

function setError(input, message)

{

    let submitbutton = document.getElementById("button")

    const formControl = input.parentElement;

    const small = formControl.querySelector('small');

    small.className = 'smallshown';

    small.innerText = message;

    submitbutton.disabled = true



}



function setSuccess(input)

{

    let submitbutton = document.getElementById("button")

    const formControl = input.parentElement;

    const small = formControl.querySelector('small');

    small.className = "smallhidden"

    small.innerHTML = ""

    submitbutton.disabled = false

}

function Checkvalidation() {

    Checkusername();

    Checkpassword();

}

    