function register() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username && email && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Account created successfully!");
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    let loginUser = document.getElementById("loginUser").value;
    let loginPass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (loginUser === storedUser && loginPass === storedPass) {
        alert("Login successful!");
    } else {
        alert("Invalid credentials!");
    }
}
