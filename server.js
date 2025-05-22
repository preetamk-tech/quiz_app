const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample questions
const questions = [
  { id: 1, question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
  // Add more questions as needed
];

// Endpoint to get questions
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

// Endpoint to submit answers
app.post('/api/submit', (req, res) => {
  const userAnswers = req.body.answers;
  // Evaluate answers and send response
  res.json({ score: /* calculated score */ });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
