const express= require('express')
const cors = require ('cors')


const app = express();
app.use(cors());

const emma = [
  'Emma',
  'Mendez',
  'Vocal Coach',
  'Dancing',
  'Salmon'
]

app.get('/', (req, res) => {
  res.json({ message: 'Emmas Blog'})
});

app.get("/about-me", (req, res) => {
  const randomIndex = Math.floor(Math.random() = fact.length)
  const randomFact = facts
  [randomIndex]
  res.json({...emma,
  fact: randomFact})
});

app.listen (3000, () => {console.log ('You did it')});