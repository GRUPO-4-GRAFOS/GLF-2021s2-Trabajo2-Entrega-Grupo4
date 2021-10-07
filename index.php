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
    <link rel="shortcut icon" href="./assets/img/utemLogo.png" type="image/x-icon" />
    <link rel="stylesheet" href="./assets/css/main.css" />
    <title>Trabajo 2 Grafos</title>
  </head>

  <body>
    <div class="text-center my-3">
      <h1 class="fs-1">Grafos Automatas AFD & AFND</h1>
    </div>
    <!--Inicio container-->
    <div class="container">
      <!--Inicio de la row-->
      <div class="row my-3">
        <!--Inicio del menu-->
        <nav class="navbar-expand-lg navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <img
              src="./assets/img/utemLogo.png"
              alt="logo-utem"
              class="d-inline-block align-text-top"
              width="50"
              height="50"
            />
          </div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link link-success active" href="./Integrantes.html">
                Integrantes
              </a>
            </li>
          </ul>
        </nav>
        <!--Fin del menu-->
      </div>
      <!--Fin de la row-->
      <!--Inicio de la row-->
      <div class="row">
        <h2 class="my-3 text-center">
          Simula el comportamiento de un AFD y UN AFND
        </h2>
        <h3 class="my-3 text-center">Intrucciones:</h3>
        <ul class="instrucciones">
          <li>1° paso:</li>
          <li>2° paso:</li>
          <li>3° paso:</li>
          <li>
            4° paso: el formato que debe tener las transiciones es: estado
            Inicial, simbolo, nuevo Estado.
          </li>
        </ul>
      </div>
      <!--Fin de la row-->
      <!--Inicio de la row-->
      <div class="row">
        <div class="col-md-6">
          <h2 class="mt-3 mb-5">Primer Automata</h2>
          <form id="automata1">
            <h5 class="form-label">Alfabeto (Σ)</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="0,1"
              id="campo_alfabeto"
            />
            <h5 class="form-label">Estado inicial</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="q0"
              id="campo_estadoInicial"
            />
            <h5 class="form-label">Estado final</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="q1"
              id="campo_estadoFinal"
            />

            <h4>Transiciones</h4>
            <form id="transiciones-automata1">
              <input type="text" id="estado_Inicial" class="form-control my-3" placeholder="Estado base" />
              <input type="text" id="simbolo" class="form-control my-3" placeholder="Simbolo/condicio" />
              <input type="text" id="estado_final" class="form-control my-3" placeholder="Estado Final" />
              <input type="submit" class="btn btn-dark mb-3" value="agregar"/>
            </form>

            <h4>AFD o AFND</h4>
            <input
              type="radio"
              id="AFD"
              name="tipo_automata"
              value="AFD"
              class="form-check-input"
            />
            <label for="AFD">AFD</label><br />
            <input
              type="radio"
              id="AFND"
              name="tipo_automata"
              value="AFND"
              class="form-check-input"
            />
            <label for="AFND">AFND</label><br />
            <input
              id="btn-automata-1"
              class="btn btn-default btn-dark my-3"
              type="submit"
              value="Autonoma 1"
            />
          </form>
        </div>
        <div class="col-md-6">
          <h2 class="mt-3 mb-5">Segundo Automata</h2>
          <form id="automata2">
            <h5 class="form-label">Alfabeto (Σ)</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="0,1"
              id="campo_alfabeto"
            />
            <h5 class="form-label">Estado inicial</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="q0"
              id="campo_estadoInicial"
            />
            <h5 class="form-label">Estado final</h5>
            <input
              class="form-control my-2"
              type="text"
              placeholder="q1"
              id="campo_estadoFinal"
            />

            <h4>Transiciones</h4>
            <form id="transiciones-automata2">
              <input type="text" id="estado_Inicial" class="form-control my-3" placeholder="Estado base" />
              <input type="text" id="simbolo" class="form-control my-3" placeholder="Simbolo/condicio" />
              <input type="text" id="estado_final" class="form-control my-3" placeholder="Estado Final" />
              <input type="submit" class="btn btn-dark mb-3" value="agregar"/>
            </form>

            <h4>AFD o AFND</h4>
            <input
              type="radio"
              id="AFD2"
              name="tipo_automata"
              value="AFD"
              class="form-check-input"
            />
            <label for="AFD2">AFD</label><br />
            <input
              type="radio"
              id="AFND2"
              name="tipo_automata"
              value="AFND"
              class="form-check-input"
            />
            <label for="AFND2">AFND</label><br />
            <input
              id="btn-automata-2"
              class="btn btn-default btn-dark my-3"
              type="button"
              value="Automata 2"
            />
          </form>
        </div>
      </div>
      <!--fin de la row-->
      <div class="text-center my-3">
        <button
          id="bt_simular"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          Simular
        </button>
      </div>
    </div>
    <!--Fin container-->
    <script src="./assets/js/index.js"></script>
    <script src="./assets/js/logs.js"></script>
  </body>
</html>
