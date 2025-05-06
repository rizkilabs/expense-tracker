const { readData } = require('../utils');

function listExpenses(category = null) {
  let expenses = readData();
  if (category) {
    expenses = expenses.filter(e => e.category.toLowerCase() === category.toLowerCase());
  }
  console.log("ID  Date       Description      Amount   Category");
  expenses.forEach(e => {
    console.log(`${e.id}   ${e.date}  ${e.description.padEnd(15)}  $${e.amount}   ${e.category}`);
  });
}


module.exports = listExpenses;
