const express = require('express');
const cors = require('cors');
const login = require('./controllers/login');
const User = require('./controllers/user');
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
app.post('/user', User.createUser);
app.get('/user', User.readUsers);
app.get('/user/:id', User.readUser);
app.put('/user/:id', User.editUser);
app.delete('/user/:id', User.deleteUser);
