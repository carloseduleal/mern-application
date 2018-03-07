const express = require('express')
const faker = require('faker');
const app = express();

app.get('/', (req,res) => {
  res.send({'welcome ': faker.lorem.text()})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
