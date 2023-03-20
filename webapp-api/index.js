import express from 'express';
import cors from 'cors';

import { Person } from './person.js';

const app = express();
const port = 3000;

app.use(express.json(), cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/imc/table', (req, res) => {
  res.send(JSON.stringify({
    'magreza': 0.00,
    'normal': 18.50,
    'sobrepeso': 24.9,
    'obesidade': 29.9
  }))
});

app.post("/imc/calculate", (req, res) => {
    const {
        height, 
        weight
    } = req.body;
    
    const person = new Person(height, weight)
        .withImc()
        .withImcDescription();
    
    res.send(JSON.stringify(person));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});