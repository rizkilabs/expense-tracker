const { readData, writeData } = require('../utils');

function addExpense(description, amount, category = 'Uncategorized') {
  const parsedAmount = parseFloat(amount);

  // Validasi jumlah
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    console.error("❌ Amount must be a positive number.");
    return;
  }

  const expenses = readData();
  const newExpense = {
    id: expenses.length + 1,
    date: new Date().toISOString().split('T')[0],
    description,
    amount: parsedAmount,
    category,
  };

  expenses.push(newExpense);
  writeData(expenses);
  console.log(`Expense added successfully (ID: ${newExpense.id})`);

  // Cek apakah melebihi anggaran (jika ada)
  // const { getBudget } = require('../budget');
  // const monthKey = newExpense.date.slice(0, 7);
  // const budget = getBudget(monthKey);
  // if (budget) {
  //   const monthlyTotal = expenses
  //     .filter(e => e.date.startsWith(monthKey))
  //     .reduce((sum, e) => sum + e.amount, 0);
  //   if (monthlyTotal > budget) {
  //     console.log(`⚠️  Warning: Monthly budget of $${budget} exceeded! Total: $${monthlyTotal}`);
  //   }
  // }
}


module.exports = addExpense;
