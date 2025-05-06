const { readData, writeData } = require('../utils');

function deleteExpense(id) {
  let expenses = readData();
  const index = expenses.findIndex(e => e.id === parseInt(id));
  if (index === -1) {
    console.log('Expense not found.');
    return;
  }
  expenses.splice(index, 1);
  expenses = expenses.map((e, i) => ({ ...e, id: i + 1 }));
  writeData(expenses);
  console.log('Expense deleted successfully');
}

module.exports = deleteExpense;
