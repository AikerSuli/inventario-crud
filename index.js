const express = require('express');

const app = express();
const PUERTO = 3000;

app.use(express.json());
app.use(express.static('public'));

app.listen(PUERTO, () => {
  console.log(`Servidor funcionando en http://localhost:${PUERTO}`);
});
