let transactions = [];

function addTransaction() {
  const amount = parseFloat(document.getElementById('amount').value);
  const desc = document.getElementById('desc').value.trim();
  const date = document.getElementById('date').value;
  const type = document.getElementById('type').value;

  if (!amount || !desc || !date) {
    alert('Please fill all fields correctly.');
    return;
  }

  transactions.push({ amount, desc, date, type });

  displayTransactions(transactions);
  updateBalance();

  // Clear input fields
  document.getElementById('amount').value = '';
  document.getElementById('desc').value = '';
  document.getElementById('date').value = '';
}

function updateBalance() {
  let balance = 0;
  for (const t of transactions) {
    if (t.type === 'income') {
      balance += t.amount;
    } else {
      balance -= t.amount;
    }
  }
  document.getElementById('balance').innerText = balance.toFixed(2);
}

function displayTransactions(list) {
  const ul = document.getElementById('list');
  ul.innerHTML = '';
  list.forEach(t => {
    const li = document.createElement('li');
    li.textContent = `${t.date} - ${t.desc} (${t.type}): ₹${t.amount.toFixed(2)}`;
    ul.appendChild(li);
  });
}

function filterByDate() {
  const filterDate = document.getElementById('filterDate').value;
  if (!filterDate) {
    displayTransactions(transactions);
    return;
  }
  const filtered = transactions.filter(t => t.date === filterDate);
  displayTransactions(filtered);
}
