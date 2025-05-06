const { readData } = require('../utils');

function summary(month = null) {
  const expenses = readData();
  let filtered = expenses;

  if (month) {
    filtered = expenses.filter(e => {
      const [year, m] = e.date.split('-');
      return parseInt(m) === parseInt(month);
    });
    const total = filtered.reduce((sum, e) => sum + e.amount, 0);
    console.log(`Total expenses for month ${month}: $${total}`);
  } else {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    console.log(`Total expenses: $${total}`);
  }
}

module.exports = summary;
