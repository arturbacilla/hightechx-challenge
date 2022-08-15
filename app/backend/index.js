const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log('Backend ouvindo na porta 3001!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send('It is working my friend');
});
