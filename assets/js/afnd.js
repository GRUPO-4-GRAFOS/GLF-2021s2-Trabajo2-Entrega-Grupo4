const si = (alfabeto, estados, transiciones) => {
  let matrizAFD;

  for (let i = 0; i < alfabeto.length; i++) {
    for (let j = 0; j < estados.length; j++) {
      if (transiciones[2] === alfabeto[i] && estados[j] === transiciones[1]) {
        console.log('AAAAAAAAAAAAAAAAAAAAA');
      }
    }
  }
};
