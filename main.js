// main.js
window.onload = function() {
    showTime();
};

function login() {
    // For simplicity, assume login is successful
    showSuccessMessage();
}

function showTime() {
    var date = new Date();
    var currentTimeElement = document.getElementById("current-time");
    currentTimeElement.textContent = "Current Time: " + date.toLocaleTimeString();
}

function showSuccessMessage() {
    alert("Login Successful!");
}
