function previsualizarFoto(){
    var archivo = $("#foto")[0];
    var formData = new FormData();
    formData.append("archivo", archivo.files[0]);

    // $.ajax({
    //     type: "POST",
    //     url: "./administracion.php",
    //     dataType: 'json',
    //     cache: false,
    //     contentType: false,
    //     processData: false,
    //     data: formData,
    //     async: true
    // })
    // .done(function(objJson){
    //     $("#divFoto").html(objJson.html);
    // })
    // .fail(function(response, textStatus, errorThrown){
    //     alert(response.responseText + "\n" + textStatus + "\n" + errorThrown);
    // });

    var $request = new XMLHttpRequest();
    $request.onreadystatechange = function(){
        if($request.readyState == 4 && $request.status == 200){
            // alert($request.responseText);
            $("#divFoto").html(JSON.parse($request.responseText).html);
        }
    };
    $request.open("POST", "./administracion.php", true);
    $request.send(formData);
}