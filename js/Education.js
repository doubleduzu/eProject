function buyNow() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("mail").value;
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