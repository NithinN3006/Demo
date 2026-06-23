function addStudent() {

    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if(name === "" || marks === "") {
        alert("Please enter all fields");
        return;
    }

    let grade;

    if(marks >= 90)
        grade = "A";
    else if(marks >= 75)
        grade = "B";
    else if(marks >= 50)
        grade = "C";
    else
        grade = "Fail";

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${marks}</td>
        <td>${grade}</td>
        <td>
            <button class="delete" onclick="deleteRow(this)">
                Delete
            </button>
        </td>
    `;

    document.getElementById("studentTable").appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
}