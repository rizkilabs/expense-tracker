const fs = require('fs');
const path = './budget.json';

function readBudget() {
  if (!fs.existsSync(path)) fs.writeFileSync(path, '{}');
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

function writeBudget(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function setBudget(month, amount) {
  const budgets = readBudget();
  budgets[month] = parseFloat(amount);
  writeBudget(budgets);
  console.log(`Budget set for ${month}: $${amount}`);
}

function getBudget(month) {
  const budgets = readBudget();
  return budgets[month] || null;
}

module.exports = { setBudget, getBudget };
