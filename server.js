const express = require('express');
const cors = require('cors');
const { execFile } = require('child_process');
const path = require('path');

const app = express();
app.use(cors());
const PORT = 3000;

app.get('/start-quiz', (req, res) => {
  const quizExecutable = path.join(__dirname, '..', 'quiz');
  execFile(quizExecutable, (error, stdout, stderr) => {
    if (error) {
      return res.send(`Error running quiz:\n${stderr}`);
    }
    res.send(stdout);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
