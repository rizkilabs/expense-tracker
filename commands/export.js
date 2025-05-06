const fs = require('fs');
const path = require('path');
const { readData } = require('../utils/data');

function exportToCSV(filename = 'expenses.csv', month = null) {
  let expenses = readData();

  if (month) {
    expenses = expenses.filter(e => e.date.startsWith(month));
  }

  if (expenses.length === 0) {
    console.log("No expenses to export.");
    return;
  }

  const csvHeader = 'ID,Date,Description,Amount,Category\n';
  const csvRows = expenses.map(e =>
    `${e.id},${e.date},"${e.description}",${e.amount},${e.category}`
  );

  const csvContent = csvHeader + csvRows.join('\n');
  const exportPath = path.resolve(__dirname, '..', filename);

  fs.writeFileSync(exportPath, csvContent);
  console.log(`Expenses exported to ${exportPath}`);
}

module.exports = exportToCSV;
