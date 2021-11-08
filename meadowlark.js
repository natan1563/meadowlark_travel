const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('Erro 404')
})

app.use((err, req, res, next) => {
  console.log(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('Erro interno do servidor')
})

app.listen(port, () => {
  console.log(`Express has executing in port http://localhost:${port} press CTRL+C to terminate`);
})