var $url = "./administracion.php";

function previsualizarFoto(){
    var archivo = $("#foto")[0];
    var formData = new FormData();
    formData.append("archivo", archivo.files[0]);
    formData.append("accion", "previsualizarFoto");

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
            $("#divFoto").html(JSON.parse($request.responseText).html);
        }
    };
    $request.open("POST", $url, true);
    $request.send(formData);
}

function deshacerFoto($path){

    var formData = new FormData();
    formData.append("accion", "deshacerFoto");
    formData.append("pathFoto", $path);

    var $request = new XMLHttpRequest();
    $request.onreadystatechange = function(){
        if($request.readyState == 4 && $request.status == 200){
            $("#divFoto").html("");
            $("#foto").val("");
        }
    };
    $request.open("POST", $url, true);
    $request.send(formData);
}

function agregarProducto(){
    $codigo = $("#codigo").val();
    $nombre = $("#nombre").val();
    var archivo = $("#foto")[0];

    var formData = new FormData();
    formData.append("codigo", $codigo);
    formData.append("nombre", $nombre);
    formData.append("archivo", archivo.files[0]);
    formData.append("accion", "agregarProducto");
}