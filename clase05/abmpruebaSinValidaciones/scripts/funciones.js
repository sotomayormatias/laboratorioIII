$(document).on('ready', function () {

    mostrarGrilla();

});

function mostrarGrilla() {
    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        data: { queHago: 'mostrarGrilla' },
        dataType: 'html',
        async: true
    })
        .done(function (grilla) {
            $("#divGrilla").html(grilla);
        })
        .fail(function (peticion, textStatus, errorThrown) {
            alert(peticion.responseText + '?n' + textStatus + '\n' + errorThrown);
        })
}

function subirFoto() {

    var url = "./administracion.php";
    var foto = $('#archivo').val();

    if (foto === "") {
        return;
    }

    var archivo = $('#archivo')[0];
    var formData = new FormData();
    formData.append("archivo", archivo.files[0]);
    formData.append("queHago", "subirFoto");

    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        async: true
    })
        .done(function (objJson) {
            if (!objJson.Exito) {
                alert(objJson.Mensaje);
                return;
            }
            $("#divFoto").html(objJson.Html);

        })
        .fail(function (peticion, textStatus, errorThrown) {
            alert(peticion.responseText + "\n" + textStatus + "\n" + errorThrown);
        });

}

function borrarFoto() {
    var foto = $("#hdnArchivoTemp").val();

    if (foto === "") {
        alert("No hay foto que borrar!!!");
        return;
    }

    $.ajax({
        type: 'POST',
        url: './administracion.php',
        dataType: 'json',
        data: {
            queHago: 'borrarFoto',
            foto: foto
        },
        async: true
    })
        .done(function (objJson) {
            if (!objJson.Exito) {
                alert(objJson.Mensaje);
                return;
            }
            $("#divFoto").html("");
            $("#hdnArchivoTemp").val("");

        })
        .fail(function (peticion, textStatus, errorThrown) {
            alert(peticion.responseText + "\n" + textStatus + "\n" + errorThrown);
        });
}



function agregarProducto() {

    var url = "./administracion.php";
    var codBarra = $('#codBarra').val();
    var nombre = $('#nombre').val();
    var archivo = $('#hdnArchivoTemp').val();
    var queHago = $('#hdnQueHago').val();

    
    var producto = {};
    producto.nombre = nombre;
    producto.codBarra = codBarra;
    producto.archivo = archivo;

    if (!validar(producto)) {
        alert("Debe completar todos los campos!!!");
        return;
    }

     $.ajax({
        type: 'POST',
        url: url,
        dataType: "json",
        data: {
			queHago : queHago,
			producto : producto
		},
        async: true
    })
        .done(function (objJson) {

            if (!objJson.Exito) {
                alert(objJson.Mensaje);
                return;
            }

            alert(objJson.Mensaje);

            borrarFoto();

            $("#codBarra").val("");
            $("#nombre").val("");
            $("#archivo").val("");

            mostrarGrilla();

            if (queHago !== "agregar") {
                $("#hdnQueHago").val("agregar");
                $("#codBarra").removeAttr("readonly");
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });


    
}

function eliminarProducto(producto) {

    if (!confirm("Desea ELIMINAR el producto " + producto.nombre + " ?")) {
        return;
    }

    var url = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: url,
        dataType: "json",
        data: {
            queHago: "eliminar",
            producto: producto
        },
        async: true
    })
        .done(function (objJson) {

            if (!objJson.Exito) {
                alert(objJson.Mensaje);
                return;
            }

            alert(objJson.Mensaje);

            mostrarGrilla();

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });
}



function modificarProducto(objJson) {

    $("#codBarra").val(objJson.codBarra);
    $("#nombre").val(objJson.nombre);
    $("#hdnQueHago").val("modificar");
    $("#codBarra").attr("readonly", "readonly");

}

function validar(objJson) {
    alert("Implementar Validaciones");
    //aplicar validaciones
    return true;
}