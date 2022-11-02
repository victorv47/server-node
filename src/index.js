import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send({ msg: 'Hello There, my name is Victor!' })
})

app.listen(port)
