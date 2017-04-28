<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!--CDN JQUERY-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!--CDN BOOTSTRAP-->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="js/funciones.js"></script>
    <link rel="stylesheet" href="css/estilos.css">

    <title>Ejercicio</title>
</head>
<body>
    <div class="container">
        <h1 class="text-center">PRODUCTOS</h1>
        <h1>Ejemplo ABM-LISTADO <small>- con archivos, AJAX y jQuery -</small></h1>

        <div class="col-md-6">
            <!--<form action="administracion.php" method="POST" enctype="multipart/form-data">-->
            <div id="form">
                <div class="form-group">
                <input class="form-control" type="text" name="codigo" id="codigo" placeholder="Ingrese Código">
                </div>
                <div class="form-group">
                <input class="form-control" type="text" name="nombre" id="nombre" placeholder="Ingrese Nombre">
                </div>
                <div class="form-group">
                <input class="form-control" type="file" name="foto" id="foto" onchange="previsualizarFoto()">
                </div>
                <input class="btn btn-primary btn-block" type="button" onclick="agregarProducto()" value="Agregar">
            </div>
            <div id="divFoto"></div>
        </div>
        <div class="col-md-6" id="tabla">
            <table class="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>COD. BARRA</th>
                        <th>NOMBRE</th>
                        <th>FOTO</th>
                        <th>ACCION</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</body>
</html>