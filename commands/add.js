const { readData, writeData } = require('../utils');

function addExpense(description, amount) {
  const expenses = readData();
  const newExpense = {
    id: expenses.length + 1,
    date: new Date().toISOString().split('T')[0],
    description,
    amount: parseFloat(amount),
  };
  expenses.push(newExpense);
  writeData(expenses);
  console.log(`Expense added successfully (ID: ${newExpense.id})`);
}

module.exports = addExpense;
