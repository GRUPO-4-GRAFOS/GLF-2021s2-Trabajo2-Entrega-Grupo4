//! obtner datos desde el html a JavaScript
const btnAutomata1 = document.querySelector('#btn-automata-1');
const btnAutomata2 = document.querySelector('#btn-automata-2');

//* Forma de agregar un evento en JavaScript
btnAutomata1.addEventListener('click', event => {
  event.preventDefault(); //? Evitar que se recarge la pagina

  const alfabeto = document.querySelectorAll('#campo_alfabeto')[0]; //? Selecionar campos individuales en forma de array
  const estadoInicial = document.querySelectorAll('#campo_estadoInicial')[0];
  const estadoFinal = document.querySelectorAll('#campo_estadoFinal')[0];
  const transiciones = document.querySelectorAll('#campo_transiciones')[0];
  const afd = document.querySelectorAll('#AFD')[0];
  const afnd = document.querySelectorAll('#AFND')[0];
  const cadena = document.querySelectorAll('#Cadena')[0];
});

btnAutomata2.addEventListener('click', event => {
  event.preventDefault(); //? Evitar que se recarge la pagina

  const alfabeto = document.querySelectorAll('#campo_alfabeto')[1];
  const estadoInicial = document.querySelectorAll('#campo_estadoInicial')[1];
  const estadoFinal = document.querySelectorAll('#campo_estadoFinal')[1];
  const transiciones = document.querySelectorAll('#campo_transiciones')[1];
  const afd = document.querySelectorAll('#AFD')[1];
  const afnd = document.querySelectorAll('#AFND')[1];
  const cadena = document.querySelectorAll('#Cadena')[1];
});
