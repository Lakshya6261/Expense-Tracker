const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./models/Expense');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/expenseTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// POST route to add expense
app.post('/add-expense', async (req, res) => {
  const { name, amount, category } = req.body;
  if (!name || !amount || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const expense = new Expense({ name, amount, category });
    await expense.save();
    res.status(201).json({ message: 'Expense saved', expense });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save expense' });
  }
});


app.get('/expenses', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

app.listen(3000, () => console.log('Server running on port 3000'));
