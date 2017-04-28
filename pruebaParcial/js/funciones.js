var $url = "./administracion.php";

$(document).ready(function(){
    mostrarGrilla();
});

function mostrarGrilla(){
    var formData = new FormData();
    formData.append("accion", "mostrarGrilla");

    var $request = new XMLHttpRequest();
    $request.onreadystatechange = function(){
        if($request.readyState == 4 && $request.status == 200){
            $("#tabla").html($request.responseText);
        }
    };
    $request.open("POST", $url, true);
    $request.send(formData);
}

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
            $("#hdnArchivoTmp").val("");
        }
    };
    $request.open("POST", $url, true);
    $request.send(formData);
}

function limpiarCampos(){
    $("#codigo").val("");
    $("#nombre").val("");
    $("#foto").val("");
    $("#divFoto").html("");
    $("#hdnArchivoTemp").val("");
}

function agregarProducto(){
    $codigo = $("#codigo").val();
    $nombre = $("#nombre").val();
    $archivo = $("#hdnArchivoTemp").val();

    var formData = new FormData();
    formData.append("codigo", $codigo);
    formData.append("nombre", $nombre);
    formData.append("archivo", $archivo);
    formData.append("accion", "agregarProducto");

    $request = new XMLHttpRequest();
    $request.onreadystatechange = function(){
        if($request.readyState == 4 && $request.status == 200){
            mostrarGrilla();
            limpiarCampos();
        }
    };
    $request.open("POST", $url, true);
    $request.send(formData);
}