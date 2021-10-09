//* Validaciones de los formularios
const validaciones = (
    alfabeto,
    estadoInicial,
    estadoFinal,
    estadoBase,
    simbolo,
    estadoLlegada,
    afd,
    afnd
  ) => {
    const msg = 'El usuario no ha mandado el campo';
  
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
    if (estadoBase === '') {
      peticionWarning(msg, 'Estado Base');
      alert('El campo Estado Final es requerido');
      return false;
    }
    if (simbolo === '') {
      peticionWarning(msg, 'Simbolo');
      alert('El campo Estado Final es requerido');
      return false;
    }
    if (estadoLlegada === '') {
      peticionWarning(msg, 'Estado Llegada');
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
  