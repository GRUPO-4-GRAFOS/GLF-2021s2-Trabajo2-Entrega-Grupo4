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
  if (alfabeto.length > 1){
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
  if (estadoInicial.length > 1){
     peticionWarning('EL usuario agrego mas de un estado inicial en el campo:', 'Estado Inicial');
     alert('Solo se permite un estado inicial');
     return false;
   }
  if (estadoFinal === '') {
    peticionWarning(msg, 'Estado Final');
    alert('El campo Estado Final es requerido');
    return false;
  }
  if (estadoFinal.length > 1){
    if (!estadoFinal.includes(',')) {
     peticionWarning('EL usuario olvido una coma en el campo:', 'Estado Final');
     alert('poner una coma para separa el Estado Final');
     return false;
     }
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
