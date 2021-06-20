const express = require('express');

const app = express();

app.use(express.json());

app.get('/contacts', (request, response) => {
  response.send({ message: 'okay' });
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
