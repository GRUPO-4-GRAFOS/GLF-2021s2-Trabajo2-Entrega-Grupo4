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

const validacionesTransiciones = (estadoBase, simbolo, estadoFinal) => {
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

  return true;
};
