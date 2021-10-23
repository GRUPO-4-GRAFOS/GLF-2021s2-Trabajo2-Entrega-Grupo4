import { union, crearAutomatas, interseccion } from './funciones.js';

const btnUnir = document.querySelector('#btnUnion');
const btnIntersectar = document.querySelector('#btnInterseccion');

crearAutomatas();

btnUnir.addEventListener('click', e => {
  e.preventDefault();
  union();
});

btnIntersectar.addEventListener('click', a => {
  a.preventDefault();
  interseccion();
});