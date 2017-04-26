<?php
    $tipoArchivo = pathinfo($_FILES["archivo"]["name"], PATHINFO_EXTENSION);
    $archivo_tmp = date("Ymd_His"). "." . $tipoArchivo;
    $destino = "tmp/". $archivo_tmp;
    move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
    $response["html"] = "<img src='".$destino."' class='imgMuestra'>";
    // var_dump($response);
    echo json_encode($response);
?>