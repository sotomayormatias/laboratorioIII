<?php

$unUsuario = isset($_GET['user']) ? $_GET['user'] : $_POST['user'];

$array = new stdClass();

$array->Nombre = "";
    $array->Apellido = "";
    $array->Edad = "";
    $json = Json_encode($array);



if($unUsuario =="Juan"){
    $array->Nombre = "Juan";
    $array->Apellido = "Gomez";    
    $array->Edad = "18";

    $json = Json_encode($array);
}else if($unUsuario =="Maria"){
    $array->Nombre = "Maria";
    $array->Apellido = "Martinez";
    $array->Edad = "23";

    $json = Json_encode($array);
}else if($unUsuario =="Alberto"){
    $array->Nombre = "Alberto";
    $array->Apellido = "Gonzalez";
    $array->Edad = "20";

    $json = Json_encode($array);
}

    echo $json;


?>