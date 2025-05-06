#!/usr/bin/env node

const { program } = require('commander');
const addExpense = require('./commands/add');
const listExpenses = require('./commands/list');
const deleteExpense = require('./commands/delete');
const updateExpense = require('./commands/update');
const summary = require('./commands/summary');

program
  .command('add')
  .description('Add a new expense')
  .requiredOption('--description <desc>', 'Description')
  .requiredOption('--amount <amount>', 'Amount')
  .action((options) => addExpense(options.description, options.amount));

program
  .command('list')
  .description('List all expenses')
  .action(listExpenses);

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

program.parse(process.argv);
