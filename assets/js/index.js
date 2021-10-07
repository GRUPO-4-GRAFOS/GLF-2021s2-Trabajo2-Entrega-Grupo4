//! obtner datos desde el html a JavaScript
const btnAutomata1 = document.querySelector('#btn-automata-1');
const btnAutomata2 = document.querySelector('#btn-automata-2');
let resp;

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

  const ejecutar = await formulario(
    alfabeto,
    estadoInicial,
    estadoFinal,
    transiciones,
    afd,
    afnd,
    cadena
  );

  if (!ejecutar) {
    return;
  }
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
  resp = await fetch('peticiones/infoLog.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
});

const formulario = async (
  alfabeto,
  estadoInicial,
  estadoFinal,
  transiciones,
  afd,
  afnd,
  cadena
) => {
  const validacionBasica = validaciones(
    alfabeto.value,
    estadoInicial.value,
    estadoFinal.value,
    transiciones.value,
    afd.checked,
    afnd.checked,
    cadena.value
  );

  if (!validacionBasica) {
    return false;
  }

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
  resp = await fetch('./peticiones/infoLog.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (resp.ok) {
    alert('EL automata se agrego correctamente');
    return true;
  }
};

//* Validaciones de los formularios
const validaciones = (
  alfabeto,
  estadoInicial,
  estadoFinal,
  transiciones,
  afd,
  afnd,
  cadena
) => {
  const msg = 'El usuario no ha mandado el campo';

  if (alfabeto === '') {
    peticionError(msg, 'alfabeto');
    alert('El campo alfabeto es requerido');
    return false;
  }
  if (estadoInicial === '') {
    peticionError(msg, 'Estado Inicial');
    alert('El campo Estado Inicial es requerido');
    return false;
  }
  if (estadoFinal === '') {
    peticionError(msg, 'Estado Final');
    alert('El campo Estado Final es requerido');
    return false;
  }
  if (transiciones === '') {
    peticionError(msg, 'transiciones');
    alert('El campo Transiciones es requerido');
    return false;
  }
  if (afd === false && afnd === false) {
    peticionError(msg, 'AFD o AFND');
    alert('por favor selecciones una opcion: AFD o AFND');
    return false;
  }
  if (cadena === '') {
    peticionError(msg, 'Cadenea');
    alert('El campo Cadena es requerido');
    return false;
  }

  return true;
};

//* Peticion para crear un log de tipo warning  cuando el usuario, no ingrese un valor
const peticionError = async (msg, campo) => {
  const data = {
    msg,
    campo,
  };

  resp = await fetch('./peticiones/warningLog.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // console.log(resp);
};
