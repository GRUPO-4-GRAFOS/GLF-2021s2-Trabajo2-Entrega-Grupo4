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
          href="./complemento.php"
          id="bt_convertir"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          Complemento
        </button>
        <button
          href="./union.php"
          id="bt_convertir"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          Unión
        </button>
        <button
          href="./concatenacion.php"
          id="bt_convertir"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          concatenación
        </button>
        <button
          href="./interseccion.php"
          id="bt_convertir"
          class="btn btn-default btn-dark btn-large"
          type="button"
        >
          intersección
        </button>
      </div>
    </div>
    <script src="./assets/js/funciones.js"></script>
    <script src="./assets/js/logs.js"></script>
    <script src="./assets/js/index.js"></script>
  </body>
</html>
