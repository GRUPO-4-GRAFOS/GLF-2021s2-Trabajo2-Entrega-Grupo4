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
  const estadoBase = document.querySelectorAll('#estado_Inicial')[0];
  const simbolo = document.querySelectorAll('#simbolo')[0];
  const estadoLlegada = document.querySelectorAll('#estado_final')[0];
  const afd = document.querySelector('#AFD');
  const afnd = document.querySelector('#AFND');

  const ejecutar = await formulario(
    alfabeto,
    estadoInicial,
    estadoFinal,
    estadoBase,
    simbolo,
    estadoLlegada,
    afd,
    afnd
  );

  if (!ejecutar) {
    return;
  }

  alfabeto.value = '';
  estadoInicial.value = '';
  estadoFinal.value = '';
  estadoBase.value = '';
  simbolo.value = '';
  estadoLlegada.value = '';
  afd.checked = false;
  afnd.checked = false;
});

btnAutomata2.addEventListener('click', async event => {
  event.preventDefault(); //? Evitar que se recarge la pagina

  const alfabeto = document.querySelectorAll('#campo_alfabeto')[1]; //? Selecionar campos individuales en forma de array
  const estadoInicial = document.querySelectorAll('#campo_estadoInicial')[1];
  const estadoFinal = document.querySelectorAll('#campo_estadoFinal')[1];
  const estadoBase = document.querySelectorAll('#estado_Inicial')[1];
  const simbolo = document.querySelectorAll('#simbolo')[1];
  const estadoLlegada = document.querySelectorAll('#estado_final')[1];
  const afd = document.querySelector('#AFD2');
  const afnd = document.querySelector('#AFND2');

  const ejecutar = await formulario(
    alfabeto,
    estadoInicial,
    estadoFinal,
    estadoBase,
    simbolo,
    estadoLlegada,
    afd,
    afnd
  );

  if (!ejecutar) {
    return;
  }

  alfabeto.value = '';
  estadoInicial.value = '';
  estadoFinal.value = '';
  estadoBase.value = '';
  simbolo.value = '';
  estadoLlegada.value = '';
  afd.checked = false;
  afnd.checked = false;
});

const formulario = async (
  alfabeto,
  estadoInicial,
  estadoFinal,
  estadoBase,
  simbolo,
  estadoLlegada,
  afd,
  afnd
) => {
  const validacionBasica = validaciones(
    alfabeto.value,
    estadoInicial.value,
    estadoFinal.value,
    estadoBase.value,
    simbolo.value,
    estadoLlegada.value,
    afd.checked,
    afnd.checked
  );

  if (!validacionBasica) {
    return false;
  }

  //? guarda datos del usuario en forma de json para facilidad de transferencia de datos
  const data = {
    alfabeto: alfabeto.value,
    estadoInicial: estadoInicial.value,
    estadoFinal: estadoFinal.value,
    estadoBase: estadoBase.value,
    simbolo: simbolo.value,
    estadoLlegada: estadoLlegada.value,
    afd: afd.checked,
    afnd: afnd.checked,
  };

  peticionInfo(data);

  return true;
};
