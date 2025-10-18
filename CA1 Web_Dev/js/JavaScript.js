function validateForm(){
    var sureName = document.getElementById('sureName').value;
    var firstName = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var question = document.getElementById('question').value;
    var sureNamePattern = /^[a-zA-Z\s]+$/;
    var firstNamePattern = /^[a-zA-Z\s]+$/;
    var phoneNumberPattern = /^[0-9\s]/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
   

    if(sureName==""){
        alert("please fill the surename field");
        return false;
    }
     if(!sureNamePattern.test(sureName)){
        alert("enter only letter pls");
        return false;
    }
    if(firstName==""){
        alert("please fill the firstname field");
        return false;
    }
     if(!firstNamePattern.test(firstName)){
        alert("only letter");
        return false;

    }
     if(email=="" || !emailPattern.test(email)){
        alert("please enter a valid email address")
        return false;

    }
    if(phoneNumber==""|| !phoneNumberPattern.test(phoneNumber)){
        alert("please enter a valid phone number")

    }
   
    if(question==""){
        alert("please enter ur question or feedback")
        return false;

    }

    alert("successfully submitted!!! our staff will be in touch soon, Thank you!!");
    return true;

    
}