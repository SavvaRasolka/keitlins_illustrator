require('dotenv').config
const express = require('express')  


const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, (err) => {
    if(err)
    {
        return console.log(err)
    }
    console.log(`Server listening on port ${PORT}`)
  })