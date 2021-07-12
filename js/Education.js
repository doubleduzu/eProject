function buyNow() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("mail").value;
    var patt_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var mail = patt_email.test("email")
    if (mail == true) {
        alert("Wrong type email");
        return
    }
    var phone = document.getElementById("phone").value;
    if (fullName == "" || email == "" || phone == "") {
        alert("Please fill your information");
        return;
    }
    var choice = confirm("Information" + "\nName: " + fullName + "\nEmail: " + email + "\nPhone: " + phone + "\n\nAre you sure to buy this course ?");
    if (choice == 1) {
        alert("Thanks For Purchased");
    }
}