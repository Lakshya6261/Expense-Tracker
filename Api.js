const API_URL = "http://localhost:5000/api/expenses";

const fetchExpenses = async () => {
  const response = await fetch(API_URL);
  const expenses = await response.json();
  const expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = "";

  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.textContent = ${expense.name} - $${expense.amount} (${expense.category});
    expenseList.appendChild(li);
  });
};

document.getElementById("add-expense").addEventListener("click", async () => {
  const name = document.getElementById("expense-name").value;
  const amount = document.getElementById("expense-amount").value;
  const category = document.getElementById("expense-category").value;

  if (!name  !amount  !category) {
    alert("Please fill in all fields");
    return;
  }

  const newExpense = { name, amount, category };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newExpense),
  });

  document.getElementById("expense-name").value = "";
  document.getElementById("expense-amount").value = "";
  fetchExpenses();
});

fetchExpenses();
