<?php
    $accion = isset($_POST["accion"]) ? $_POST["accion"] : NULL;

    switch($accion){
    case "mostrarGrilla":
        $file = fopen("archivos/productos.txt", "r");

        $grilla = "<table class='table table-hover table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>COD. BARRA</th>
                            <th>NOMBRE</th>
                            <th>FOTO</th>
                            <th>ACCION</th>
                        </tr>
                    </thead>";

        while(!feof($file)){
            $linea = fgets($file);
            $producto = explode(" - ", $linea);
            if(trim($producto[0]) != ""){
                $grilla .= "<tr>
                        <td>".$producto[0]."</td>
                        <td>".$producto[1]."</td>
                        <td><img src='archivos/".$producto[2]."' style='width:100px'></td>
                        <td><input type='button' class='btn btn-warning' value='Editar' onclick='editarProducto(\"".$producto[0]."\")'>
                        <input type='button' class='btn btn-danger' value='Eliminar' onclick='eliminarProducto(\"".$producto[0]."\")'></td>
                        </tr>";
            }
        }
        $grilla .= "</table>";
        fclose($file);
        echo $grilla;
        break;

    case "previsualizarFoto":
        $tipoArchivo = pathinfo($_FILES["archivo"]["name"], PATHINFO_EXTENSION);
        $archivo_tmp = date("Ymd_His"). "." . $tipoArchivo;
        $destino = "tmp/". $archivo_tmp;
        move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);
        $response["html"] = "<img src='".$destino."' class='imgMuestra'>
                            <br><input type='button' value='Deshacer' onclick='deshacerFoto(\"".$destino."\")' class='btn btn-danger'>
                            <input type='hidden' id='hdnArchivoTemp' value='".$archivo_tmp."' />";
        // var_dump($response);
        echo json_encode($response);

        break;

    case "deshacerFoto":
        $path = $_POST["pathFoto"];
        unlink($path);
        break;

    case "agregarProducto":
        $file = fopen("archivos/productos.txt", "a");
        $codigo = $_POST["codigo"];
        $nombre = $_POST["nombre"];
        $archivo = $_POST["archivo"];

        $linea = $codigo . " - " . $nombre . " - " . $archivo . "\n";
        fwrite($file, $linea);
        fclose($file);
        copy("tmp/".$archivo, "archivos/".$archivo);

        break;

    case "eliminarProducto":
        $codBarra = $_POST["codBarra"];
        $lineaABorrar = "";
        $imagenABorrar = "";

        $file = fopen("archivos/productos.txt", "r");
        while(!feof($file)){
            $linea = fgets($file);
            $producto = explode(" - ", $linea);
            if(trim($producto[0]) == $codBarra){
                $lineaABorrar = $linea;
                $imagenABorrar = trim($producto[2]);
            }
        }
        fclose($file);
        unlink("archivos/".$imagenABorrar);
        $contents = file_get_contents("archivos/productos.txt");
        $contents = str_replace($lineaABorrar, '', $contents);
        file_put_contents("archivos/productos.txt", $contents);
    }
?>