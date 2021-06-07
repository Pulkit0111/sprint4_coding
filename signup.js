function signup(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var cnt = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if (name == "" || cnt == "" || email == "" || pass == "") {
        alert("You have left some sign up field empty");
    } else {
        var users = {
            name,
            cnt,
            email,
            pass
        };
        var arr;
        arr = localStorage.getItem('members');
        if (arr == null) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.getItem('members'));
        }
        arr.push(users);
        localStorage.setItem('members', JSON.stringify(arr));
    }
}