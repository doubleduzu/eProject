function contact() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
        alert("Please fill all your information");
        return;
    }
    var patt_name = /^[A-Z]\w{5,}$/
    var result = patt_name.test(name);
    if (result == false) {
        alert("Uppercase first character and at least 5 character");
        return
    }
    var patt_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    result = patt_email.test(email);
    if (result == false) {
        alert("Please enter follow email form");
        document.getElementById("email").focus();
        return
    }
    if (isNaN(phone)) {
        alert("Phone must be a number");
        document.getElementById("phone").focus();
        return
    }
    var patt_phone = /[0-9]{10,}/
    result = patt_phone.test(phone);
    if (result == false) {
        alert("Phone number must have at least 10 numbers");
        document.getElementById("phone").focus();
        return false
    }

    var choice = confirm("Check Information" + "\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nSubject: " + subject + "\nMessage: " + message)
    if (choice == 1) {
        alert("Your Information was sent");
        return
    }
}