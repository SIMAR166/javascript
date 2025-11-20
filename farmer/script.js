let expenses = JSON.parse(localStorage.getItem("farmerExpenses") || "[]");

const list = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total-display");
const undoBtn = document.getElementById("undo-btn");

render();

// Add expense on button click
document.querySelectorAll(".expense-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    const amount = Number(btn.getAttribute("data-amount"));
    const entry = { category, amount, time: new Date().toLocaleTimeString() };

    expenses.push(entry);
    save();
    render();
  });
});

// Undo last entry
undoBtn.addEventListener("click", () => {
  expenses.pop();
  save();
  render();
});

// Save to localStorage
function save() {
  localStorage.setItem("farmerExpenses", JSON.stringify(expenses));
}

// Render list + total
function render() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.category} - ₹${e.amount}  (${e.time})`;
    list.appendChild(li);
    total += e.amount;
  });

  totalDisplay.textContent = total;
}