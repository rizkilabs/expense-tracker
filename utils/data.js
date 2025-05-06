const fs = require('fs');
const path = require('path');

const dataFilePath = path.resolve(__dirname, '..', 'expenses.json');

function readData() {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }

  const data = fs.readFileSync(dataFilePath, 'utf-8');
  return data ? JSON.parse(data) : [];
}

function writeData(expenses) {
  fs.writeFileSync(dataFilePath, JSON.stringify(expenses, null, 2));
}

module.exports = {
  readData,
  writeData
};
