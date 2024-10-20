document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); 


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("jobTitle", jobTitle);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("address", address);
    localStorage.setItem("gender", gender);

    window.location.href = "data/data.html"; 
});
function resetForm() {
    document.getElementById("registrationForm").reset();
}
