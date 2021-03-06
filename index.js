const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const frontendPath = 'frontend/build'

app.use(express.static(frontendPath));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api', (req, res) => {
  res.send({title: 'Hello World From API!'});
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
