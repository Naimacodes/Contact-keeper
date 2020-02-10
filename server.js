const express = require('express')

const app = express()

const PORT = process.env.port || 5000

app.get('/', (req, res) => res.send('hello world'))

app.listen(PORT, () => (console.log("listening on port 5000")))