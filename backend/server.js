const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Contact Route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact request received:', name, email, message);
  res.status(200).send({ message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
