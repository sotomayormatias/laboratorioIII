<?php
    $accion = isset($_POST["accion"]) ? $_POST["accion"] : NULL;

    switch($accion){
    
    case "previsualizarFoto":
        $tipoArchivo = pathinfo($_FILES["archivo"]["name"], PATHINFO_EXTENSION);
        $archivo_tmp = date("Ymd_His"). "." . $tipoArchivo;
        $destino = "tmp/". $archivo_tmp;
        move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
        $response["html"] = "<img src='".$destino."' class='imgMuestra'>
                            <br><input type='button' value='Deshacer' onclick='deshacerFoto(\"".$destino."\")' class='btn btn-success'>";
        // var_dump($response);
        echo json_encode($response);

        break;

    case "deshacerFoto":
        $path = $_POST["pathFoto"];
        unlink($path);
        break;
    }
?>