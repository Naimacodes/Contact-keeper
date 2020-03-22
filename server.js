const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB();

app.use(express.json({extended:false}))

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('/', (req, res) =>
  res.json({ msg: 'welcome to the contact keeper api' })
);

const PORT = process.env.PORT|| 5000;
app.listen(PORT, () => console.log('server listening on port 5000'));
