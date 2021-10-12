//* Validaciones de los formularios
let msg = 'El usuario no ha mandado el campo';

const validacionesAutomata = (
  alfabeto,
  estadoInicial,
  estadoFinal,
  afd,
  afnd
) => {
  if (alfabeto === '') {
    peticionWarning(msg, 'alfabeto');
    alert('El campo alfabeto es requerido');
    return false;
  }
  if (alfabeto.length > 1) {
    if (!alfabeto.includes(',')) {
      peticionWarning('EL usuario olvido una coma en el campo:', 'alfabeto');
      alert('poner una coma para separa el alfabeto');
      return false;
    }
  }
  if (estadoInicial === '') {
    peticionWarning(msg, 'Estado Inicial');
    alert('El campo Estado Inicial es requerido');
    return false;
  }
  if (estadoFinal === '') {
    peticionWarning(msg, 'Estado Final');
    alert('El campo Estado Final es requerido');
    return false;
  }
  if (afd === afnd) {
    peticionWarning(msg, 'AFD o AFND');
    alert('por favor selecciones una opcion: AFD o AFND');
    return false;
  }

  return true;
};

const validacionesTransiciones = (
  estadoBase,
  simbolo,
  estadoFinal,
  alfabeto
) => {
  /* Validar que los cmapos no esten vacios */
  if (estadoBase === '') {
    peticionWarning(msg, 'Estado base');
    alert('EL campo Estado Base es requerido');
    return false;
  }

  if (estadoFinal === '') {
    peticionWarning(msg, 'Estado final');
    alert('EL campo Estado Base es requerido');
    return false;
  }
  if (simbolo === '') {
    peticionWarning(msg, 'Simbolo');
    alert('EL campo Simbolo es requerido');
    return false;
  }

  for (var si = 0; si <= alfabeto.length; si++) {
    if (alfabeto[si] === simbolo) {
      alert(`El simbolo ${simbolo} no pertenece al alfabeto`);

      return false;
    }
  }

  return true;
};

//Verificar que un json no este vacio
const isEmptyObject = obj => {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      return false;
    }
  }

  return true;
};
