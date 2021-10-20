let nodosA1 = [];
let nodosA2 = [];
let conexionA1 = [];
let conexionA2 = [];

//opciones de vis.js
const options = {
  'nodes': {
    'font': {
      'size': 20,
    },
  },
  'edges': {
    'arrows': {
      'to': {
        'enabled': true,
      },
    },
    'font': {
      'size': 20,
    },
  },
};

export const crearAutomatas = () => {
  let contadorA1 = 0;
  let contadorA2 = 0;

  //obtener datos del localStorage
  const a1 = JSON.parse(localStorage.getItem('automata1'));
  const c1 = JSON.parse(localStorage.getItem('transicionesA1'));
  const a2 = JSON.parse(localStorage.getItem('automata2'));
  const c2 = JSON.parse(localStorage.getItem('transicionesA2'));

  //re escribir los datos de los utomatas para adecuarlo a vis.js
  a1.estadosAutomatas.forEach(element => {
    const nodo = {
      id: element,
      label: element,
    };

    nodosA1.push(nodo);

    contadorA1++;
  });

  a2.estadosAutomatas.forEach(element => {
    const nodo = {
      id: element,
      label: element,
    };

    nodosA2.push(nodo);

    contadorA2++;
  });

  c1.forEach(({ estadoInicio, simbolo, estadoLlegada }) => {
    const arista = {};
    nodosA1.forEach(element => {
      if (element.label === estadoInicio) {
        arista.from = element.id;
      }
      if (element.label === estadoLlegada) {
        arista.to = element.id;
        arista.label = simbolo;
      }
    });

    conexionA1.push(arista);
  });

  c2.forEach(({ estadoInicio, simbolo, estadoLlegada }) => {
    const arista = {};
    nodosA2.forEach(element => {
      if (element.label === estadoInicio) {
        arista.from = element.id;
      }
      if (element.label === estadoLlegada) {
        arista.to = element.id;
        arista.label = simbolo;
      }
    });

    conexionA2.push(arista);
  });

  // console.log(c2);

  //establecer datos del primer automata
  const nodosAutomata1 = new vis.DataSet(nodosA1);
  const aristasAutomata1 = new vis.DataSet(conexionA1);
  const network1 = document.querySelector('#automata1');

  const data1 = {
    nodes: nodosAutomata1,
    edges: aristasAutomata1,
  };

  const networkA1 = new vis.Network(network1, data1, options);

  //establecer datos del segundo automata
  const nodosAutomata2 = new vis.DataSet(nodosA2);
  const aristasAutomata2 = new vis.DataSet(conexionA2);
  const network2 = document.querySelector('#automata2');

  const data2 = {
    nodes: nodosAutomata2,
    edges: aristasAutomata2,
  };

  const networkA2 = new vis.Network(network2, data2, options);
};

export const union = () => {
  const nodos = [{ id: 0, label: 'ε' }, ...nodosA1, ...nodosA2];
  const aristas = [...conexionA1, ...conexionA2];
  const edges = [];

  nodos.forEach((e, i) => {
    nodos[i].id = i;
  });

  aristas.forEach(con => {
    const arista = {};
    nodos.forEach(element => {
      if (element.label === con.from) {
        arista.from = element.id;
      }
      if (element.label === con.to) {
        arista.to = element.id;
        arista.label = element.label;
      }
    });
    edges.push(arista);
  });

  //Agregar al inicio las conecciones con ambos autmatas
  edges.unshift({ from: 0, to: nodos[1].id, label: 'ε' });
  edges.unshift({ from: 0, to: nodosA1.length + 1, label: 'ε' });

  const data = {
    nodes: nodos,
    edges,
  };
  const div = document.querySelector('#automataResultante');

  const network = new vis.Network(div, data, options);
};
