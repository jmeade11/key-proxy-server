const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.listen(4741, () => console.log('Listening on port 4741!'));
