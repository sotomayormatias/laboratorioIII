$(document).ready(function () {

    //agrego un manejador al boton cargarPaises
    $(get_btn).click(function () {

        $.ajax({
            "url": "paises.php",
            "type": "POST",
            "dataType": "JSON",
            "success": function (data) {
                var paises = "<select class='form-control' id='paises'>";

                for (var i = 0; i < data.length; i++) {
                    paises += "<option value='" + data[i].Id + "'>" + data[i].Pais + "</option>";

                }

                paises += "</selec>";

                $("#salida").html(paises);

            }

        });
    });

    $.ajax({
        "url": "paises.php",
        "type": "POST",
        "dataType": "JSON",
        "success": function (data) {
            var paises = "<select class='form-control' id='paises'>";

            for (var i = 0; i < data.length; i++) {
                paises += "<option value='" + data[i].Id + "'>" + data[i].Pais + "</option>";

            }

            paises += "</selec>";

            $("#salida").html(paises);

        }

    });

    $("#get_pais").click(function () {
        $("#codPais").val($("#paises").val());
    });
 
});




