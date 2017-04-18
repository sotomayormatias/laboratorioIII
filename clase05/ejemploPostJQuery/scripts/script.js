$(document).ready( function(){
    $("#btnEnviar").click(envioFormData);
});

function envioFormData(){

    var formData = new FormData();
    formData.append("nombre", $("#txtNombre").val());
    formData.append("apellido", $("#txtApellido").val());

     $.ajax({
            url:'pagina1.php',
            type:'POST',
            data:formData,
            processData:false,
            contentType: false
        })
        .done(function(data, textStatus, peticion){
            $('#resultados').html(data + ' ' + peticion.status);
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("error " + data.status);
        })
        .always(function(){
            alert("Terminado");
        });
    };      

    function envioStd(){   
        $.ajax({
            url:'pagina1.php',
            type:'POST',
            data:{nombre: $('#txtNombre').val(), apellido: $('#txtApellido').val()},
        })
        .done(function(data, textStatus, peticion){
            $('#resultados').html(data + ' ' + peticion.status);
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("error " + data.status);
        })
        .always(function(){
            alert("Terminado");
        });
    };        




