<?php
  header("Content-type: application/json"); //? forma de decirle a php que trabajara con json
  
  include '../models/Log.php'; //?importacion del modelo de los Logs
  
  $formulario = json_decode(file_get_contents('php://input'), true); //? Recibir datos en php enviados desde js
  $directorio = '../logs';
  
  if($formulario['afd']){
      if(!is_dir($directorio)){ //? Comprobar si existe el directorio de logs, si no existe lo crea
        mkdir($directorio);
      }

      //! Este codigo podria pasarse a una funcion para evitar duplicidad o para tener un codigo mas limpio
      $log = new Log('../logs/info.log');
      $mensaje = array(
          'Datos del automata( ',
          'El alfabeto: ', $formulario['alfabeto'], 
          ' El estado Inicial: ', $formulario['estadoInicial'],
          ' El estado final: ', $formulario['estadoFinal'],
          ' Transiciones: ', $formulario['transiciones'],
          ' AFD: ', $formulario['afd'],
          ' Cadena: ', $formulario['cadena'],
          ')'
      );
      $log->writeline('Info', implode($mensaje));
      $log->close();
  }else{
      if(!is_dir($directorio)){
          mkdir($directorio);
      }
      $log = new Log('../logs/info.log');
      $mensaje = array(
          'Datos del automata( ',
          'El alfabeto: ', $formulario['alfabeto'], 
          ' El estado Inicial: ', $formulario['estadoInicial'],
          ' El estado final: ', $formulario['estadoFinal'],
          ' Transiciones: ', $formulario['transiciones'],
          ' AFND: ', $formulario['afnd'],
          ' Cadena: ', $formulario['cadena'],
          ')'
      );
      $log->writeline('Info', implode($mensaje));
      $log->close();
  }

?>