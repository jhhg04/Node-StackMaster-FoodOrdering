const express = require('express');
const db = require('./db');
const Pizza = require('./models/pizzaModel');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server Working');
});

app.get('/getpizzas', (req, res) => {
  Pizza.find({}, (err, docs) => {
    res.send(docs);
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
