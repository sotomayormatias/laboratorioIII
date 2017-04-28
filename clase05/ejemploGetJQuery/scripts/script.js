$(document).ready( function(){
    

    $("#btnEnviar").click(function(){
        
        $.ajax({
            url:'pagina.php',
            type:'GET',
            data:{nombre: $('#txtNombre').val(), apellido: $('#txtApellido').val()},
            statusCode:{200:function(){
                alert("Todo Ok");
            }, 404: function(){
                alert("Error. Todo mal");
            }}
        })
        .done(function(data, textStatus, peticion){
            $('#resultados').html(data + ' ' + peticion.status);
            
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("error " + peticion.status + ' ' + errorThrown);
        })
        .always(function(){
            alert("Terminado");
        });

    });       

});
