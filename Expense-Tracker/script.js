
const button = document.getElementById('btn');
const totalExpense = document.getElementById('totalExpense');
const table = document.getElementById('table');

let serial_no = 1;
let expense_records = []; // Storage for records

button.addEventListener('click', function (e){
    e.preventDefault();

    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    if(!date || isNaN(amount) || !description){
        alert('Please Fill the datails properly');
        return;
    }

    const expense = {
        serial : serial_no++,
        date,
        amount,
        description
    };

    expense_records.push(expense);
    updateTable();
    UpdateTotalExpense();
    resetRecord();
})

function updateTable(){
    const tableBody = table.querySelector('tbody');
    tableBody.innerHTML = '';

    expense_records.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.serial}</td>
            <td>${expense.date}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.description}</td>
            <td><button onclick="deleteExpense(${index})">Delete</button></td>
        `
        tableBody.appendChild(row);
    });
}

function UpdateTotalExpense() {
    const total = expense_records.reduce((acc, expense) => acc + expense.amount, 0);
    totalExpense.textContent = total.toFixed(2);
}

function resetRecord(){
    date.value = '';
    amount.value = '';
    description.value = '';
}

function deleteExpense(index) {
    expense_records.splice(index, 1);
    updateTable();
    UpdateTotalExpense();
}
