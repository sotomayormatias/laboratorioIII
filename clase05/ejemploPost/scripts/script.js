$(document).ready(function(){

    var peticion;

    $("#btnEnviar").click(function(){


       
        peticion = new XMLHttpRequest();
        peticion.onreadystatechange = procesarPeticion;
        peticion.open("POST", "pagina1.php", true);
        peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion.send(prepararDatos());


    });

    function prepararDatos(){

        var datos = "";

        datos += "nombre=" + $("#txtNombre").val();
        datos += "&apellido=" + $("#txtApellido").val();

        return datos;
        
    };

    function procesarPeticion(){
        if(peticion.readyState == 4 && peticion.status == 200)
        {
            $("#resultados").text(peticion.responseText);
        }
    }



});
