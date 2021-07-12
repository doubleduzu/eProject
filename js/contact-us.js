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
    if (isNaN(phone)) {
        alert("Phone must be a number");
        document.getElementById("phone").focus();
        return
    }
    var patt_phone = /\d{10,}$/
    var result = patt_phone.test("phone");
    if (result == false) {
        alert("Phone number must have at least 10 numbers");
        document.getElementById("phone").focus();
        return
    }
    var choice = confirm("Information" + "\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nSubject: " + subject + "\nMessage: " + message)
    if (choice == 1) {
        alert("Your Information was sent");
        return
    }
}