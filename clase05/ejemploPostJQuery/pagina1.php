<?php
if(isset($_GET["nombre"]))
{
	echo "valor recuperado por GET: ".$_GET["nombre"]." ".$_GET["apellido"];
}
else if(isset($_POST["nombre"]))
{
	echo "valor recuperado por POST: ".$_POST["nombre"]." ".$_POST["apellido"];
}
else
{
	echo "hola mundo AJAX";
}

?>