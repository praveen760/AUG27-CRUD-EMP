var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {

    var formData = {};
    formData["Employeeid"] = document.getElementById("Employeeid").value;
    formData["EmployeeName"] = document.getElementById("EmployeeName").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Designation"] = document.getElementById("Designation").value;

    return formData;
}
function insertNewRecord(data) {

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Employeeid;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.EmployeeName;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Age;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Designation;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a class="c1" onClick="onEdit(this)"><b>Edit</b></a>`;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML=`<a class="c2" onClick="onDelete(this)"><b>Delete</b></a>`;    
}

function resetForm() {

    document.getElementById("Employeeid").value = "";
    document.getElementById("EmployeeName").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Designation").value = "";
    selectedRow = null;
}
function onEdit(td) {

    selectedRow = td.parentElement.parentElement;
    document.getElementById("Employeeid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("EmployeeName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Designation").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {

    selectedRow.cells[1].innerHTML = formData.EmployeeName;
    selectedRow.cells[2].innerHTML = formData.Age;
    selectedRow.cells[3].innerHTML = formData.Designation;
}
function onDelete(td) {

    if (confirm('confirm delete !!!')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {

   
    if (document.getElementById("Employeeid").value == "") {
        isValid = false;
        document.getElementById("EmployeeidValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (document.getElementById("EmployeeidValidationError").classList.contains("hide"))

            document.getElementById("EmployeeidValidationError").classList.add("hide");
    }
    return isValid;
}

