$(document).ready(function(){

    $("#login").submit(function(e){

        e.preventDefault();

        $.ajax({            
            url:"login.php",
            type:"GET",
            data:{user:$("#txtUsuario").val()},
            dataType:"JSON",
            success: function(data){                

                $("#respuesta").text("Nombre: " + data.Nombre + " " + data.Apellido + " Edad: " + data.Edad );

            }

        })
      
      //  return false;

    });  


});