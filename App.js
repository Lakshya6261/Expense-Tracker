const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const expenseCategory = document.getElementById('expense-category');
const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.createElement('ul');
expenseList.className = 'expense-list';
document.body.appendChild(expenseList);

const totalDisplay = document.createElement('div');
totalDisplay.className = 'total';
document.body.appendChild(totalDisplay);

let totalExpenses = 0;

addExpenseButton.addEventListener('click', async () => {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    if (name && !isNaN(amount) && amount > 0) {
        const res = await fetch('http://localhost:3000/add-expense', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, amount, category })
        });

        const data = await res.json();
        if (res.ok) {
            const listItem = document.createElement('li');
            listItem.className = 'expense-item';
            listItem.innerHTML = `<span>${name} (${category})</span><span>$${amount.toFixed(2)}</span>`;
            expenseList.appendChild(listItem);

            totalExpenses += amount;
            totalDisplay.textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;
        } else {
            alert(data.error || 'Failed to add expense');
        }

        expenseName.value = '';
        expenseAmount.value = '';
    } else {
        alert('Please enter valid expense details!');
    }
});
