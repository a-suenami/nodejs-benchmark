const express = require('express');
const { Pool } = require("pg");

const pool = new Pool({
  host: 'db',
  database: 'postgres',
  port: 5432,
  user: 'postgres',
  password: '',
  ssl: false
});

const app = express();
const port = 3000;

// Simplest endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Waiting endpoint
app.get('/sleep', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  res.send('I wait 1000 ms!')
});

// An endpoint to access database
app.get('/database', async (req, res) => {
  const arr = [...Array(20).keys()].map(i => ++i);
  const promises = arr.map((i) => pool.query(`SELECT * FROM t1 WHERE id = ${i}`));
  // const results = await Promise.all(promises);
  // console.log(results[0]);
  await Promise.all(promises);

  res.send('Database access is succsessed!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
