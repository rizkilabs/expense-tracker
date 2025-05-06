# 📊 Expense Tracker CLI

A simple command-line tool to track your personal expenses. This CLI app allows you to:

- Add, update, and delete expenses
- View all recorded expenses
- Get a summary of your total or monthly spending
- Export expenses to a CSV file
- (Optional) Set monthly budgets and receive alerts

> Built with Node.js using a local JSON file for data storage.

---

## ✨ Features

- ✅ Add expenses with description, amount, and category
- ✅ List all expenses
- ✅ Delete expenses by ID
- ✅ Show total and monthly summaries
- ✅ Export expenses per month to CSV
- ❗ Prevent negative amounts via input validation
- 🚧 Optional: Monthly budget tracking

---

## 🚀 Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/rizkilabs/expense-tracker.git
cd expense-tracker
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Link CLI Globally (Optional)

```bash
npm link
```

You can now use `expense-tracker` as a global CLI command.

---

## 🧪 Example CLI Commands

### ➕ Add Expense

```bash
expense-tracker add --description "Lunch" --amount 20 --category "Food"
```

### ✏️ Update Expense

```bash
expense-tracker update --id 1 --amount 25
```

### ❌ Delete Expense

```bash
expense-tracker delete --id 1
```

### 📋 List All Expenses

```bash
expense-tracker list
```

### 📈 View Total Summary

```bash
expense-tracker summary
```

### 📅 View Monthly Summary

```bash
expense-tracker summary --month 5
```

### 📤 Export to CSV (Monthly)

```bash
expense-tracker export --month 5
```

Output file: `expenses-2025-05.csv`

---

## 🧾 Data Storage

All expense data is saved in a local file named `expenses.json`, for example:

```json
[
  {
    "id": 1,
    "date": "2025-05-06",
    "description": "Lunch",
    "amount": 20,
    "category": "Food"
  }
]
```

---

## ⚠️ Validation & Error Handling

* Expense amount must be a **positive number**
* ID must exist when updating or deleting
* User-friendly messages for empty data or invalid input

---

## 📁 Project Structure

```
expense-tracker/
├── commands/
│   ├── add.js
│   ├── delete.js
│   ├── list.js
│   ├── summary.js
│   ├── update.js
│   ├── export.js
├── utils/
│   └── data.js
├── expenses.json
├── index.js
├── package.json
└── README.md
```

---

## 🔮 Feature Roadmap

* [ ] Filter expenses by category
* [ ] Set and track monthly budget limits
* [ ] Show warnings if budget is exceeded
* [ ] Export all data, not just monthly
* [ ] Import data from CSV

---

## 🧑‍💻 Author

**Mochamad Rizki** – [rizkilabs.com](https://rizkilabs.com)<br>
LinkedIn: [linkedin.com/in/rizkilabs](https://linkedin.com/in/rizkilabs)

---

## 📄 License

MIT License © 2025 Mochamad Rizki
