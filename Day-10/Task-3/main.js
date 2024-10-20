function addData() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    if (name === '' || age === '' || email === '') {
        alert("Please fill out all fields.");
        return;
    }

    if (age < 10 || age > 70) {
        alert("Age must be between 10 and 70.");
        return;
    }

    const table = document.getElementById("dataTable");
    const tableBody = table.getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const emailCell = newRow.insertCell(2);

    nameCell.textContent = name;
    ageCell.textContent = age;
    emailCell.textContent = email;

    table.style.display = 'table';
}
function resetForm() {
    document.getElementById("dataForm").reset();
}