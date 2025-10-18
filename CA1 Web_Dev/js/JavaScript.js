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
   
    // checking if sure`name field is empty
    if(sureName==""){
        alert("please fill the surename field");
        return false;
    }
        //checking if client only enters letter
     if(!sureNamePattern.test(sureName)){
        alert("enter only letter pls");
        return false;
    }
    // checking if first name field is empty
    if(firstName==""){
        alert("please fill the firstname field");
        return false;
    }
    //checking if client only enters letter
     if(!firstNamePattern.test(firstName)){
        alert("only letter");
        return false;

    }
    //checking ig email address is valid
     if(email=="" || !emailPattern.test(email)){
        alert("please enter a valid email address")
        return false;

    } 
    //checking if phone number is valid
    if(phoneNumber==""|| !phoneNumberPattern.test(phoneNumber)){
        alert("please enter a valid phone number")

    }
    // cheking if messege field is empty
    if(question==""){
        alert("please enter ur question or feedback")
        return false;

    }
    // giving message about successfully submition
    alert("successfully submitted!!! our staff will be in touch soon, Thank you!!");
    return true;

    
}