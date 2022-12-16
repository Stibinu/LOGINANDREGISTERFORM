function Checkfirstname() {
    var isName = /^[a-zA-Z]+$/;
    let input = document.getElementById("user");

    if (input.value.trim() === "") {
        setError(input, "Please fill the firstname");
    }

    else if (!isName.test(input.value.trim())) {
        setError(input, 'firstname cannot be a numbers or special characters');
    }

    else {
        setSuccess(input)
    }
}
function Checklastname() {
    var isName = /^[a-zA-Z]+$/;
    let lastname = document.getElementById("users");
    if (lastname.value.trim() === "") {
        setError(lastname, "Please fill the lastname");
    }

    else if (!isName.test(lastname.value.trim())) {
        setError(lastname, 'lastname cannot be a numbers or special characters');
    }

    else {
        setSuccess(lastname)
    }

}


function Checkpassword() {

    let pwdinput = document.getElementById("password");

    if (pwdinput.value.trim() === "") {
        setError(pwdinput, "Please fill the password");
    }

    else if (pwdinput.value.length < 5) {
        setError(pwdinput, "password must be greater than 5");
    }
    else if (pwdinput.value.length > 10) {
        setError(pwdinput, "password must be lesser than 10");
    }

    else {
        setSuccess(pwdinput)

    }
}
function Checkconfirmpassword() {
    let pwdinput = document.getElementById("password");
    let pwdsinput = document.getElementById("passwords");

    if (pwdsinput.value.trim() === "") {
        setError(pwdsinput, "Please fill the confirm password");
    }

    else if (pwdsinput.value.length < 5) {
        setError(pwdsinput, "password must be greater than 5");
    }else if (pwdsinput.value.length > 15) {
        setError(pwdsinput, "password must be lesser than 15");
    }else {
        setSuccess(pwdsinput)

    }


    if (pwdinput.value !== pwdsinput.value) {
        setError(pwdsinput, "password are not same");
    }



}
function Checkemail() {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let email = document.getElementById("emails");
    const emailRegex = new RegExp(pattern);
    if (email.value.trim() === "") {
        setError(email, "Please fill the email");
    }

    else if (email.value.length < 5) {
        setError(email, "email must be greater than 5");
    }
    else if (email.value.length > 30) {
        setError(email, "email must be lesser than 30");
    }
   
  
    else if(!emailRegex.test(email.value)){
           setError(email,"invalid email")
   }
   else {
    setSuccess(email)

}

}
function Checknumbers(){
    let number = document.getElementById("mobiles");
    var phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (number.value.trim() === "") {
        setError(number, "Please fill the phone number");
    }
    else if (!phoneno.test(number.value.trim())) {
        setError(number, 'invalid phone number');
    }




    else {
        setSuccess(number)

    }
}
function Checkdob(){
    let number = document.getElementById("dob");
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    if (number.value.trim() === "") {
        setError(number, "Please fill the dob");
    }
    else if (!regex.test(number.value.trim())) {
        setError(number, 'please enter correct date format');
    }
    




    else {
        setSuccess(number)

    }
}
function Checkaddress(){
    let number = document.getElementById("address");
    if (number.value.trim() === "") {
        setError(number, "Please fill the address");
    }
    else if (number.value.length<8) {
        setError(number,"please enter greater than 5 characters");
    }
    else {
        setSuccess(number)

    }
}
function Checkpincode(){
    
    let number = document.getElementById("pincode");
    if (number.value.trim() === "") {
        setError(number, "Please fill the pincode");
    }
      else if (number.value.length>6) {
        setError(number, 'please enter correct pincode format');
    }
   
    
    else {
        setSuccess(number)

    }
}








function setError(input, message) {

    let submitbutton = document.getElementById("button")

    const formControl = input.parentElement;

    const small = formControl.querySelector('small');

    small.className = 'smallshown';

    small.innerText = message;

    submitbutton.disabled = true



}



function setSuccess(input) {

    let submitbutton = document.getElementById("button")

    const formControl = input.parentElement;

    const small = formControl.querySelector('small');

    small.className = "smallhidden"

    small.innerHTML = ""

    submitbutton.disabled = false

}

function Checkvalidation() {

    Checkfirstname();
    Checklastname();

    Checkpassword();
    Checkconfirmpassword();
    Checkemail();
    Checknumbers();
    Checkdob();
    Checkaddress();
    Checkpincode();
    
    

}




















