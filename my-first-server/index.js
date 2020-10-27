const express= require('express')
const cors = require ('cors')
const app = express ()
  app.use(cors())

const Emma = {
  firstName: 'Emma',
  lastName: 'Mendez',
  occupation: 'Teacher',
  passions: 'Dance'
}

app.get('/about me', (req, res) => {
  res.json( Emma )
})

app.get('/', (req, res) => {
  res.json({ message: 'Emmas Blog'})
})

app.listen (3000,() => {console.log ('You did it')})