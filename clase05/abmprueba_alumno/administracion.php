<?php
require_once ("clases/producto.php");
require_once ("clases/archivo.php");

$queHago = isset($_POST['queHago']) ? $_POST['queHago'] : NULL;

switch($queHago){

	case "mostrarGrilla":
	
		$ArrayDeProductos = Producto::TraerTodosLosProductos();

		$grilla = '<table class="table table-striped table-hover table-bordered">
					<thead >
						<tr>
							<th>  COD. BARRA </th>
							<th>  NOMBRE     </th>
							<th>  FOTO       </th>
							<th>  ACCION     </th>
						</tr> 
					</thead>';   	

		foreach ($ArrayDeProductos as $prod){
			$producto = array();
			$producto["codBarra"] = $prod->GetCodBarra();
			$producto["nombre"] = $prod->GetNombre();

			$producto = json_encode($producto);
		
			$grilla .= "<tr>
							<td>".$prod->GetCodBarra()."</td>
							<td>".$prod->GetNombre()."</td>
							<td><img src='archivos/".$prod->GetPathFoto()."' width='100px' height='100px'/></td>
							<td><input type='button' value='Eliminar' class='MiBotonUTN btn btn-danger' id='btnEliminar' onclick='eliminarProducto($producto)' />
								<input type='button' value='Modificar' class='MiBotonUTN btn btn-warning' id='btnModificar' onclick='modificarProducto($producto)' /></td>
						</tr>";
		}
		
		$grilla .= '</table>';		
		
		echo $grilla;
		
		break;
		
	case "subirFoto":
		
		$res = Archivo::Subir();
		
		echo json_encode($res);

		break;
	
	case "borrarFoto":
		
		$pathFoto = isset($_POST['foto']) ? $_POST['foto'] : NULL;

		$res["Exito"] = Archivo::Borrar("./tmp/".$pathFoto);
		
		echo json_encode($res);
		
		break;
		
	case "agregar":
		$retorno["Exito"] = TRUE;
		$retorno["Mensaje"] = "";
		$obj = isset($_POST['producto']) ? json_decode(json_encode($_POST['producto'])) : NULL;
		
		$p = new Producto($obj->codBarra,$obj->nombre,$obj->archivo);
		
		if(!Producto::Guardar($p)){
			$retorno["Exito"] = FALSE;
			$retorno["Mensaje"] = "Lamentablemente ocurrio un error y no se pudo escribir en el archivo.";
		}
		else{
			if(!Archivo::Mover("./tmp/".$obj->archivo, "./archivos/".$obj->archivo)){
				$retorno["Exito"] = FALSE;
				$retorno["Mensaje"] = "Lamentablemente ocurrio un error al mover el archivo del repositorio temporal al repositorio final.";
			}
			else{
				$retorno["Mensaje"] = "El archivo fue escrito correctamente. PRODUCTO agregado CORRECTAMENTE!!!";
			}
		}
	
		echo json_encode($retorno);
		
		break;
	
	case "eliminar":
		$retorno["Exito"] = TRUE;
		$retorno["Mensaje"] = "";
		$obj = isset($_POST['producto']) ? json_decode(json_encode($_POST['producto'])) : NULL;
		
		if(!Producto::Eliminar($obj->codBarra)){
			$retorno["Exito"] = FALSE;
			$retorno["Mensaje"] = "Lamentablemente ocurrio un error y no se pudo escribir en el archivo.";
		}
		else{
			$retorno["Mensaje"] = "El archivo fue escrito correctamente. PRODUCTO eliminado CORRECTAMENTE!!!";
		}
	
		echo json_encode($retorno);
		
		break;
		
	case "modificar":
		$retorno["Exito"] = TRUE;
		$retorno["Mensaje"] = "";
		$obj = isset($_POST['producto']) ? json_decode(json_encode($_POST['producto'])) : NULL;
		
		$p = new Producto($obj->codBarra,$obj->nombre,$obj->archivo);
		
		if(!Producto::Modificar($p)){
			$retorno["Exito"] = FALSE;
			$retorno["Mensaje"] = "Lamentablemente ocurrio un error y no se pudo escribir en el archivo.";
		}
		else{
			if(!Archivo::Mover("./tmp/".$obj->archivo, "./archivos/".$obj->archivo)){
				$retorno["Exito"] = FALSE;
				$retorno["Mensaje"] = "Lamentablemente ocurrio un error al mover el archivo del repositorio temporal al repositorio final.";
			}
			else{
				$retorno["Mensaje"] = "El archivo fue escrito correctamente. PRODUCTO modificado CORRECTAMENTE!!!";
			}
		}
	
		echo json_encode($retorno);
		
		break;
	default:
		echo ":(";
}
?>