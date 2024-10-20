document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("name").textContent = localStorage.getItem("name");
    document.getElementById("email").textContent = localStorage.getItem("email");
    document.getElementById("jobTitle").textContent = localStorage.getItem("jobTitle");
    document.getElementById("mobile").textContent = localStorage.getItem("mobile");
    document.getElementById("address").textContent = localStorage.getItem("address");
    document.getElementById("gender").textContent = localStorage.getItem("gender");
});
