const express = require('express');

const app = express();
const PUERTO = 3000;

app.use(express.json());
app.use(express.static('public'));

// Lista de productos (se guarda en memoria)
let productos = [
  { id: 1, nombre: 'Teclado', precio: 25, stock: 10 },
  { id: 2, nombre: 'Mouse', precio: 15, stock: 20 },
  { id: 3, nombre: 'Monitor', precio: 180, stock: 5 }
];
let siguienteId = 4;

// Listar productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Crear un producto
app.post('/productos', (req, res) => {
  const producto = {
    id: siguienteId++,
    nombre: req.body.nombre,
    precio: Number(req.body.precio),
    stock: Number(req.body.stock)
  };
  productos.push(producto);
  res.status(201).json(producto);
});

app.listen(PUERTO, () => {
  console.log(`Servidor funcionando en http://localhost:${PUERTO}`);
});
