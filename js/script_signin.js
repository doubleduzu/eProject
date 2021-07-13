function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})


function changeToHomePage() {
    alert("run")
    //location.replace("https://doubleduzu.github.io/eProject/index.html");
    //window.location.replace("https://doubleduzu.github.io/eProject/index.html");
    window.location.href = "https://doubleduzu.github.io/eProject/index.html";
}

function signIn() {
    var iemail = document.getElementById("inputEmail").value;
    var ipwd = document.getElementById("inputPassword").value;
    
    if(iemail == '' || ipwd == '') {
        alert("Please fill all your information");
        return;
    }
    
    var patt_iemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const result = patt_iemail.test(String(iemail).toLowerCase());
    if (result == false) {
        alert("Please enter follow email form");
        document.getElementById("inputEmail").focus();
        return;
    }

    
    var choice = window.confirm("Check Information: \n-------------------------------" + "\nEmail: " + iemail + "\nPassword: " + ipwd + "\n-------------------------------\n\nYour information was sent!!!");  
    if (choice == true) {
        window.location.href = "https://doubleduzu.github.io/eProject/index.html";
    }
    changeToHomePage();
}

function signUp() {
    var uname = document.getElementById("user-name").value;
    var umail = document.getElementById("user-email").value;
    var upass = document.getElementById("user-pass").value;
    var urepass = document.getElementById("user-repeatpass").value;

    if(uname == '' || umail == '' || upass == '' || urepass == '') {
        alert("Please fill all your information");
        return;
    }

    var patt_iemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const result = patt_iemail.test(String(umail).toLowerCase());
    if (result == false) {
        alert("Please enter follow email form");
        document.getElementById("inputEmail").focus();
        return;
    }

    var choice = window.confirm("Check Information: \n-------------------------------" 
    + "\nFull name: " + uname 
    + "\nEmail address: " + umail 
    + "\nPassword: " + upass 
    + "\nRepeat Password: " + urepass 
    + "\n-------------------------------\n\nYour information was sent!!!");  
    if (choice == true) {
        window.location.href = "signin.html";
    }
}

function resetPassword() {
    var remail = document.getElementById("resetEmail").value;
    alert("Your email is " + remail + "\n\nNew password was sent to your email " + "\nPlease check your mail!!");
    window.location.href = "siginin.html";
}




