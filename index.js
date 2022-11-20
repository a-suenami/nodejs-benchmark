
const express = require('express')
const app = express()
const port = 3000

// Simplest endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// Waiting endpoint
app.get('/sleep', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  res.send('I wait 1000 ms!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

