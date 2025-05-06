#!/usr/bin/env node

const { program } = require('commander');
const addExpense = require('./commands/add');
const listExpenses = require('./commands/list');
const deleteExpense = require('./commands/delete');
const updateExpense = require('./commands/update');
const summary = require('./commands/summary');
const { setBudget } = require('./budget');
const exportToCSV = require('./commands/export');



program
  .command('add')
  .description('Add a new expense')
  .requiredOption('--description <desc>', 'Description')
  .requiredOption('--amount <amount>', 'Amount')
  .option('--category <cat>', 'Category')
  .action((options) =>
    addExpense(options.description, options.amount, options.category)
  );


program
  .command('list')
  .description('List all expenses')
  .option('--category <cat>', 'Filter by category')
  .action((options) => listExpenses(options.category));


program
  .command('delete')
  .description('Delete an expense by ID')
  .requiredOption('--id <id>', 'Expense ID')
  .action((options) => deleteExpense(options.id));

program
  .command('update')
  .description('Update an expense')
  .requiredOption('--id <id>', 'Expense ID')
  .option('--description <desc>', 'New Description')
  .option('--amount <amount>', 'New Amount')
  .action((options) => updateExpense(options.id, options.description, options.amount));

program
  .command('summary')
  .description('Show summary of expenses')
  .option('--month <month>', 'Month (1-12)')
  .action((options) => summary(options.month));

program
  .command('budget')
  .description('Set budget for a month (e.g. 2024-08)')
  .requiredOption('--month <month>', 'Month in YYYY-MM format')
  .requiredOption('--amount <amount>', 'Budget amount')
  .action((options) => setBudget(options.month, options.amount));

program
  .command('export')
  .description('Export all expenses to CSV file')
  .option('--file <filename>', 'Filename to export to', 'expenses.csv')
  .action((options) => exportToCSV(options.file));

program.parse(process.argv);
