const express = require('express');
const cors = require('cors');
const { getAllMovies, getMovieById } = require('./controllers');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/movies', async (req, res) => {
  const movies = getAllMovies();
  res.status(200).json({ movies });
});

app.get('/movies/details/:id', async (req, res) => {
  const movie = getMovieById(parseInt(req.params.id));
  res.status(200).json({ movie });
});

module.exports = { app };
