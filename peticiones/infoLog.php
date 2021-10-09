<?php
  header("Content-type: application/json"); //? forma de decirle a php que trabajara con json
  
  include '../models/Log.php'; //?importacion del modelo de los Logs
  
  $formulario = json_decode(file_get_contents('php://input'), true); //? Recibir datos en php enviados desde js
  $directorio = '../logs';
  
  if($formulario['alfabeto']){
    if($formulario['afd']){
        if(!is_dir($directorio)){ //? Comprobar si existe el directorio de logs, si no existe lo crea
          mkdir($directorio);
        }
        
        $log = new Log('../logs/info.log');
        $mensaje = array(
            'Datos del automata( ',
            'El alfabeto: ', $formulario['alfabeto'], 
            ' El estado Inicial: ', $formulario['estadoInicial'],
            ' El estado final: ', $formulario['estadoFinal'],
            ' AFD: ', $formulario['afd'],
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
            ' AFND: ', $formulario['afnd'],
            ')'
        );
        $log->writeline('Info', implode($mensaje));
        $log->close();
    }
  }else{
      $log = new Log('../logs/info.log');
      $mensaje = array(
          'Transiciones del Automata(',
          'Estado base: ', $formulario['estadoBase'],
          ' Simbolo: ', $formulario['simbolo'],
          ' Estado final: ', $formulario['estadoLlegada'],
      );
      $log->writeline('Info', implode($mensaje));
  }

?>