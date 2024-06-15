const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Tambahkan ini
const connection = require('../config/db'); // Sesuaikan path jika perlu
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors()); // Tambahkan ini
app.use(bodyParser.json());

// Endpoint untuk menampilkan semua notes
app.get('/notes', (req, res) => {
  const query = 'SELECT * FROM notes';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Endpoint untuk menampilkan salah satu note
app.get('/notes/:id', (req, res) => {
  const query = 'SELECT * FROM notes WHERE id = ?';
  connection.query(query, [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results[0]);
    }
  });
});

// Endpoint untuk membuat note baru
app.post('/notes', (req, res) => {
  const query = 'INSERT INTO notes (title, content) VALUES (?, ?)';
  const { title, content } = req.body;
  connection.query(query, [title, content], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json({ id: results.insertId, title, content });
    }
  });
});

// Endpoint untuk mengubah note
app.put('/notes/:id', (req, res) => {
  const query = 'UPDATE notes SET title = ?, content = ? WHERE id = ?';
  const { title, content } = req.body;
  connection.query(query, [title, content, req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(204);
    }
  });
});

// Endpoint untuk menghapus note
app.delete('/notes/:id', (req, res) => {
  const query = 'DELETE FROM notes WHERE id = ?';
  connection.query(query, [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
