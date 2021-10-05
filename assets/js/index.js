//! obtner datos desde el html a JavaScript
const btnAutomata1 = document.querySelector('#btn-automata-1');
const btnAutomata2 = document.querySelector('#btn-automata-2');

//* Forma de agregar un evento en JavaScript
btnAutomata1.addEventListener('click', async event => {
  event.preventDefault(); //? Evitar que se recarge la pagina

  const alfabeto = document.querySelectorAll('#campo_alfabeto')[0]; //? Selecionar campos individuales en forma de array
  const estadoInicial = document.querySelectorAll('#campo_estadoInicial')[0];
  const estadoFinal = document.querySelectorAll('#campo_estadoFinal')[0];
  const transiciones = document.querySelectorAll('#campo_transiciones')[0];
  const afd = document.querySelector('#AFD');
  const afnd = document.querySelector('#AFND');
  const cadena = document.querySelectorAll('#Cadena')[0];

  //? guarda datos del usuario en forma de json para facilidad de transferencia de datos
  const data = {
    alfabeto: alfabeto.value,
    estadoInicial: estadoInicial.value,
    estadoFinal: estadoFinal.value,
    transiciones: transiciones.value,
    afd: afd.checked,
    afnd: afnd.checked,
    cadena: cadena.value,
  };

  //? peticion fetch para mandar los datos ingresados a traves del fomulario del usuario(programacion asincrona)
  const resp = await fetch('peticiones/infoLog.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
});

btnAutomata2.addEventListener('click', async event => {
  event.preventDefault(); //? Evitar que se recarge la pagina

  const alfabeto = document.querySelectorAll('#campo_alfabeto')[1];
  const estadoInicial = document.querySelectorAll('#campo_estadoInicial')[1];
  const estadoFinal = document.querySelectorAll('#campo_estadoFinal')[1];
  const transiciones = document.querySelectorAll('#campo_transiciones')[1];
  const afd = document.querySelector('#AFD2');
  const afnd = document.querySelector('#AFND2');
  const cadena = document.querySelectorAll('#Cadena')[1];

  //? guarda datos del usuario en forma de json para facilidad de transferencia de datos
  const data = {
    alfabeto: alfabeto.value,
    estadoInicial: estadoInicial.value,
    estadoFinal: estadoFinal.value,
    transiciones: transiciones.value,
    afd: afd.checked,
    afnd: afnd.checked,
    cadena: cadena.value,
  };

  //? peticion fetch para mandar los datos ingresados a traves del fomulario del usuario(programacion asincrona)
  const resp = await fetch('peticiones/infoLog.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
});
