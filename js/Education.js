function buyNow() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    if (fullName == "" || email == "" || phone == "") {
        alert("Please fill your information");
        return
    }
    var patt_name = /^[A-Z]\w{4,}$/
    var result = patt_name.test(fullName);
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
        return
    }
    var choice = confirm("Check Information" + "\nName: " + fullName + "\nEmail: " + email + "\nPhone: " + phone + "\n\nAre you sure to buy this course ?");
    if (choice == 1) {
        alert("Thanks For Purchased");
    }
}