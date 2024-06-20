// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Create a new router
const router = express.Router();
// Create a new comments array
const comments = [
  { id: 1, author: 'John', text: 'Hello World' },
  { id: 2, author: 'Jane', text: 'Hi, planet!' }
];
// Create a new route to get all comments
router.get('/comments', (req, res) => {
  res.json(comments);
});
// Create a new route to get a single comment
router.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});
// Create a new route to create a new comment
router.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = comments.length + 1;
  comments.push(comment);
  res.json(comment);
});
// Create a new route to update a comment
router.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  const newComment = req.body;
  comment.author = newComment.author;
  comment.text = newComment.text;
  res.json(comment);
});
// Create a new route to delete a comment
router.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = comments.findIndex(comment => comment.id === id);
  comments.splice(index, 1);
  res.json({ id });
});
// Add the router to the app
app.use(router);
// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
