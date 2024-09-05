document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addExpense");
    var cleanButton = document.getElementById("cleanExpense");
    var expenseTableBody = document.getElementById("expenseTableBody");

    addButton.addEventListener("click", myExpense);
    cleanButton.addEventListener("click", myCleanExpense);

    function myExpense() {
        var nameExpense = document.getElementById("expenseName").value;
        var dateExpense = document.getElementById("expenseDate").value;
        var amountExpense = document.getElementById("expenseAmount").value;

        if (nameExpense.trim() !== "" && dateExpense && amountExpense.trim() !== "") {
            var tr = document.createElement("tr");

            var tdName = document.createElement("td");
            tdName.textContent = nameExpense;

            var tdDate = document.createElement("td");
            tdDate.textContent = dateExpense;

            var tdAmount = document.createElement("td");
            tdAmount.textContent = amountExpense;

            var tdAction = document.createElement("td");

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function() {
                tr.style.color = "red";
                tr.remove(); // Remove the entire row when the delete button is clicked
            };

            var doneButton = document.createElement("button");
            doneButton.textContent = "Done";
            doneButton.onclick = function() {
                tr.style.color = "blue";
                tr.style.textDecoration = "line-through"; // Mark the row as done
            };

            tdAction.appendChild(deleteButton);
            tdAction.appendChild(doneButton);

            tr.appendChild(tdName);
            tr.appendChild(tdDate);
            tr.appendChild(tdAmount);
            tr.appendChild(tdAction);

            expenseTableBody.appendChild(tr);

            document.getElementById("expenseName").value = "";
            document.getElementById("expenseDate").value = "";
            document.getElementById("expenseAmount").value = "";
        } else {
            alert("Please fill out all fields.");
        }
    }

    function myCleanExpense() {
        expenseTableBody.innerHTML = ""; // Clear all rows in the table body
    }
});
