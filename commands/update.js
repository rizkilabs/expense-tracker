const { readData, writeData } = require('../utils');

function updateExpense(id, description, amount) {
  const expenses = readData();
  const index = expenses.findIndex(e => e.id === parseInt(id));
  if (index === -1) {
    console.log('Expense not found.');
    return;
  }
  if (description) expenses[index].description = description;
  if (amount) expenses[index].amount = parseFloat(amount);
  writeData(expenses);
  console.log('Expense updated successfully');
}

module.exports = updateExpense;
