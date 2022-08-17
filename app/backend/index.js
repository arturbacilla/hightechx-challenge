const express = require('express');
const cors = require('cors');
const login = require('./controllers/login');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Backend com CORS ativado, ouvindo na porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send('It is working my friend!');
});
app.post('/login', login);
