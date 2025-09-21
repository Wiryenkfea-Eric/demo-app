const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const version = process.env.VERSION || 'dev';

app.get('/', (req, res) => {
  res.send(`Hello from demo-app (version: ${version})`);
});

app.listen(port, () => {
  console.log(`demo-app listening on port ${port}`);
});
