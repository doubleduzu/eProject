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
        return
    }
    alert("Information" + "\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nSubject: " + subject + "\nMessage: " + message);
}