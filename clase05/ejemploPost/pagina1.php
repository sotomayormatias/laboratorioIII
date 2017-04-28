<?php

if(isset($_GET["nombre"]))
{
	echo "valor recuperado por GET: ".$_GET["nombre"];
}
else if(isset($_POST))
{
	echo "valor recuperado por POST: ".$_POST["nombre"]." ".$_POST["apellido"];
}
else
{
	echo "hola mundo AJAX";
}

?>