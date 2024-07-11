const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Create an Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/kishan_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Define Book schema and model
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  cover: String
});
const Book = mongoose.model('Book', bookSchema);

// Routes
app.get('/admin/add-book', (req, res) => {
  res.render('admin_add_books');
});

app.post('/admin/add-book', async (req, res) => {
  const { title, author, genre, description, cover } = req.body;
  const book = new Book({ title, author, genre, description, cover });
  await book.save();
  res.redirect('/admin/books');
});

app.get('/admin/books', async (req, res) => {
  const books = await Book.find();
  res.render('admin_books', { books });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
