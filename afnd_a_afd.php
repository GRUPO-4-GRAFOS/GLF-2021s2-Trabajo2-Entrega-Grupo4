<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
    <link
      rel="shortcut icon"
      href="./assets/img/UTEM.svg.png"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="./assets/css/main.css" />
    <link rel="stylesheet" href="./assets/css/vis.css" />
    <title>Trabajo 2 Grafos</title>
  </head>

  <body>
    <div class="text-center my-3">
      <h1 class="fs-1">Grafos Autómatas AFD & AFND</h1>
    </div>
    <!--Inicio container-->
    <div class="container">
      <!--Inicio de la row-->
      <div class="row my-3">
        <!--Inicio del menu-->
        <nav class="navbar-expand-lg navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <img
              src="./assets/img/UTEM.svg.png"
              alt="logo-utem"
              class="d-inline-block align-text-top"
              width="50"
              height="50"
            />
          </div>
        </nav>
      </div>
      <pre>
        if (si se agregaron datos ){
        if (si algun automata es afnd){


          funcion para pasar de afnd a afd
        }


        else (si ambos automatas son afd){
          mensaje = " ambos utomatas ingresados son afd"
        }
        }
        else {
          mensaje = vuelva y agregue los datos requeridos 
        }
      </pre>
      <div class="text-center my-3">
        <button
          id="btnComplemento"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          Complemento
        </button>
        <button
          id="btnUnion"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          Unión
        </button>
        <button
          id="btnConcatenacion"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          concatenación
        </button>
        <button
          id="btnInterseccion"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          intersección
        </button>
      </div>
      <div class="row">
        <div class="col-6 mt-5">
          <h1 class="text-center">Automata 1</h1>
          <div class="data" id="automata1"></div>
        </div>
        <div class="col-6 mt-5">
        <h1 class="text-center">Automata 2</h1>
          <div class="data" id="automata2"></div>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-8">
          <h1 class="text-center">Automata resultante</h1>
          <div id="automataResultante" class="automataResultante"></div>
        </div>
      </div>
    </div>
    <script
      type="text/javascript"
      src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"
    ></script>
    <script src="./assets/js/logs.js"></script>
    <script src="./assets/js/index.js"></script>
    <script src="./assets/js/automatas.js" type="module"></script>
  </body>
</html>
