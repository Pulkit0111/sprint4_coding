function login(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var arr2 = JSON.parse(localStorage.getItem('members'));
    var isPresent = false;
    for (var i = 0; i < arr2.length; i++) {
        if (email == arr2[i].email && pass == arr2[i].pass) {
            isPresent = true;
        }
    }
    if (isPresent) {
        window.location.href = "menu.html";
    } else {
        alert("Wrong Credentials");
    }
}