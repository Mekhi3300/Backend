const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.send('Home page')
})

app.get('/about',(req,res)=>{
  res.send('About page')
})

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})