const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());
app.use(cors());

// function to generat random id number.
// SHOULD BE uuid lib instead
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const employees = [
  {
    id: 1,
    name: 'John',
    status: 'Working',
    img: 'https://picsum.photos/id/177/200/200',
  },
  {
    id: 2,
    name: 'Jack',
    status: 'Vacation',
    img: 'https://picsum.photos/id/91/200/200',
  },
  {
    id: 3,
    name: 'Sheli',
    status: 'Working',
    img: 'https://picsum.photos/id/64/200/200',
  },
  {
    id: 4,
    name: 'Eitan',
    status: 'Business',
    img: 'https://picsum.photos/id/65/200/200',
  },
];

app.get('/users', (req, res) => {
  res.send(employees);
});

app.post('/users', (req, res) => {
  // not uuid lib here only because id is a number, but SHOULD BE a string
  const id = getRandomIntInclusive(employees.length, 9999999);
  const employee = req.body;

  employees.push({
    ...employee,
    id,
  });

  res.send(employees);
});

app.post('/users/:id', (req, res) => {
  const index = employees.findIndex(obj => obj.id === +req.params.id);
  employees[index].status = req.body.status;
  res.send(employees);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
