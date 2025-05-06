const { readData } = require('../utils');

function listExpenses() {
  const expenses = readData();
  console.log("ID  Date       Description      Amount");
  expenses.forEach(e => {
    console.log(`${e.id}   ${e.date}  ${e.description.padEnd(15)}  $${e.amount}`);
  });
}

module.exports = listExpenses;
