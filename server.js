const express = require('express');

const app = express();

const PORT = process.env.port || 5000;

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api.contact', require('./routes/contact'));

app.get('/', (req, res) =>
  res.json({ msg: 'welcome to the contact keeper api' })
);

app.listen(PORT, () => console.log('listening on port 5000'));
