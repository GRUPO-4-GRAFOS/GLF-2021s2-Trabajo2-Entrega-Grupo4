//! obtner datos desde el html a JavaScript
const btnAutomata1 = document.querySelector('#btn-automata-1');
const btnAutomata2 = document.querySelector('#btn-automata-2');
const btnTransicionesA1 = document.querySelector('#transiciones1');
const btnTransicionesA2 = document.querySelector('#transiciones2');

let automata1, automata2;
let transiciones;
let transicionesA1 = [];
let transicionesA2 = [];

//?Evento formulario Automata1
btnAutomata1.addEventListener('click', async event => {
  event.preventDefault(); //? Evitar que se recarge la pagina

  const alfabeto = document.querySelectorAll('#campo_alfabeto')[0]; //? Selecionar campos individuales en forma de array
  const estadoInicial = document.querySelectorAll('#campo_estadoInicial')[0];
  const estadoFinal = document.querySelectorAll('#campo_estadoFinal')[0];
  const estadosAutomatas = document.querySelectorAll(
    '#campo_estadosAutomata'
  )[0];
  const afd = document.querySelector('#AFD');
  const afnd = document.querySelector('#AFND');

  const ejecutar = await ejecutarFormularioAutomata(
    alfabeto,
    estadoInicial,
    estadoFinal,
    afd,
    afnd
  );

  if (!ejecutar) {
    return;
  }

  //? guardar los datos del automata1 como json
  automata1 = {
    alfabeto: alfabeto.value.split(','),
    estadoInicial: estadoInicial.value,
    estadosAutomatas: estadosAutomatas.value.split(','),
    estadoFinal: estadoFinal.value,
    afd: afd.checked,
    afnd: afnd.checked,
  };

  alfabeto.value = '';
  estadoInicial.value = '';
  estadosAutomatas.value = '';
  estadoFinal.value = '';
  afd.checked = false;
  afnd.checked = false;

  automata1.estadosAutomatas.unshift(automata1.estadoInicial);
  automata1.estadosAutomatas.push(automata1.estadoFinal);
});

//?Evento formulario Automata 2
btnAutomata2.addEventListener('click', async event => {
  event.preventDefault(); //? Evitar que se recarge la pagina

  const alfabeto = document.querySelectorAll('#campo_alfabeto')[1]; //? Selecionar campos individuales en forma de array
  const estadoInicial = document.querySelectorAll('#campo_estadoInicial')[1];
  const estadosAutomatas = document.querySelectorAll(
    '#campo_estadosAutomata'
  )[1];
  const estadoFinal = document.querySelectorAll('#campo_estadoFinal')[1];
  const afd = document.querySelector('#AFD2');
  const afnd = document.querySelector('#AFND2');

  const ejecutar = await ejecutarFormularioAutomata(
    alfabeto,
    estadoInicial,
    estadoFinal,
    afd,
    afnd
  );

  if (!ejecutar) {
    return;
  }

  automata2 = {
    alfabeto: alfabeto.value.split(','),
    estadoInicial: estadoInicial.value,
    estadosAutomatas: estadosAutomatas.value.split(','),
    estadoFinal: estadoFinal.value,
    afd: afd.checked,
    afnd: afnd.checked,
  };

  alfabeto.value = '';
  estadoInicial.value = '';
  estadosAutomatas.value = '';
  estadoFinal.value = '';
  afd.checked = false;
  afnd.checked = false;
});

//?Enevnto transiciones Automata 1
btnTransicionesA1.addEventListener('click', async event => {
  event.preventDefault();
  if (isEmptyObject(automata1)) {
    await peticionWarning(
      'el usuario no ingreso el automata1',
      'formulario transiciones'
    );
    alert('Debe ingresar un automata primero');
    return;
  }

  const estadoInicial = document.querySelectorAll('#estado_Inicial')[0];
  const simbolo = document.querySelectorAll('#simbolo')[0];
  const estadoFinal = document.querySelectorAll('#estado_final')[0];

  const ejecutar = await ejecutarFormularioTransiciones(
    estadoInicial.value,
    simbolo.value,
    estadoFinal.value,
    automata1.alfabeto
  );
  if (!ejecutar) {
    return false;
  }

  transiciones = [estadoInicial.value, simbolo.value, estadoFinal.value];

  transicionesA1.push(transiciones);

  estadoInicial.value = '';
  estadoFinal.value = '';
  simbolo.value = '';

  // si(automata1.alfabeto, automata1.estadosAutomatas);
});

//?Enevnto transiciones Automata 2
btnTransicionesA2.addEventListener('click', async event => {
  event.preventDefault();

  if (isEmptyObject(automata2)) {
    await peticionWarning(
      'el usuario no ingreso el automata2',
      'formulario transiciones'
    );
    alert('Debe ingresar un automata primero');
    return false;
  }

  const estadoInicial = document.querySelectorAll('#estado_Inicial')[1];
  const simbolo = document.querySelectorAll('#simbolo')[1];
  const estadoFinal = document.querySelectorAll('#estado_final')[1];

  const ejecutar = await ejecutarFormularioTransiciones(
    estadoInicial.value,
    simbolo.value,
    estadoFinal.value,
    automata2.alfabeto
  );

  if (!ejecutar) {
    return false;
  }

  transiciones = [estadoInicial.value, simbolo.value, estadoFinal.value];

  transicionesA2.push(transiciones);

  estadoInicial.value = '';
  estadoFinal.value = '';
  simbolo.value = '';
});
