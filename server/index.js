require('dotenv').config

const cors = require("cors");
const express = require('express')  

const data1 = {
  1: {color: "yellow"},
  2: {color: "red"}
}

const data2 = {
  1: {color: "blue"},
  2: {color: "yellow"},
  3: {color: "red"},
  4: {color: "green"},
  5: {color: "green"},
  6: {color: "green"},
  7: {color: "green"},
  8: {color: "green"},
}

const data3 = {
}


const PORT = process.env.PORT || 8080

const app = express()

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];

app.use(express.json(), cors({
  origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
          var msg =
              "The CORS policy for this site does not " +
              "allow access from the specified Origin.";
          return callback(new Error(msg), false);
      }
      return callback(null, true);
  }
}))

app.get('/card', (req, res) => {
  const randoMassiv=[data1, data2, data3]
  console.log(JSON.stringify(randoMassiv[Math.floor(Math.random()*2.4)]))
  res.send(JSON.stringify(randoMassiv[Math.floor(Math.random()*2.4)]))
})

app.listen(PORT, (err) => {
    if(err)
    {
        return console.log(err)
    }
    console.log(`Server listening on port ${PORT}`)
  })