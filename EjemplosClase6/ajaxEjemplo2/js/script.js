$(document).ready(function () {

    // https://preloaders.net/

    $("#btnSumar").click(function (event) {

        var num1 = $("#txtNumero1").val();
        var num2 = $("#txtNumero2").val();

        $("#resultado").html("<img src='image/126.gif'>");

        $.ajax({
            url: './pagina1.php',
            type: 'POST',
            data: { num1: num1, num2: num2 },
            dataType: 'text',
            success: function (data, textStatus, p) {

                $("#resultado").text(data);
            }

        })
            .fail(function (p, ts, et) {

            })
    });
});