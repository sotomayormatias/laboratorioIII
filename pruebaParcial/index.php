<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/funciones.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <form action="administracion.php" method="POST" enctype="multipart/form-data">
        <input type="text" id="nombre" placeholder="Nombre">
        <input type="file" id="foto" onchange="previsualizarFoto()">
        <input type="button" value="Enviar">
    <div id="divFoto"></div>
</body>
</html>