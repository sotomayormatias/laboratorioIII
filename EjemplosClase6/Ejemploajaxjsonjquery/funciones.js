$(document).ready(function(){
    $("#get_btn").click(function(){
        $.ajax({
            url: './pagina1.php',
            type: 'POST',
            dataType:'JSON',
            success: function(data){

                var canciones = "<ul>";
                
                for(var i=0; i<data.length; i++){

                var infocancion ="<li><img class='img-rounded' src='" + data[i].portada + "' width='100' />";
                infocancion += "- " + data[i].titulo;
                infocancion += " - " + data[i].autor;
                infocancion += " - <em>" + data[i].album + "</em></li>";

                canciones += infocancion;
            }
            
            canciones +="</ul>";

            console.log(canciones);
                
                $("#salida").html(canciones);
            }
        })

    });
});