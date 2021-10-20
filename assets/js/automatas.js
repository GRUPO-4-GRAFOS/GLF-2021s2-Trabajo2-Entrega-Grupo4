import { union, crearAutomatas } from './funciones.js';

const btnUnir = document.querySelector('#btnUnion');

crearAutomatas();

btnUnir.addEventListener('click', e => {
  e.preventDefault();
  union();
});
