// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = 3000

// setting the route and corresponding response
app.get('/', (req, res) => {
  res.send(`This is my first Express Web App`)
})
/* add some route */
app.get('/', (req, res) => {
  res.send('This is my first Express Web App')
})

app.get('/food', (req, res) => {
  res.send('My favorite food is ice cream')
})

app.get('/popular/languages', (req, res) => {
  res.send('JavaScript is a popular language')
})

// change into dynamic routes with params ':language'
app.get('/popular/languages/:language', (req, res) => {
  res.send(`<h1>${req.params.language} is a popular language</h1>`)
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})