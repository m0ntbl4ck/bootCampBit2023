$(document).ready(function () {

    let url_actual = window.location.href;

    //ajax urrl actual
    //mpara que nos traiga información de la tarea

    $.ajax({

        url: url_actual,
        method: 'post',
        success: function (resp) {
            console.log(resp);
            $('#titulo_tarea').val(resp.titulo)
            $('#descripcion_tarea').text(resp.descripcion);
            $('#finalizada_tarea').val(resp.finalizada);
            $('#categoria_tarea').val(resp.categoria);
            $('#fecha_tarea').val(resp.fecha);
        },

    });

    $('#formEditar').submit(function (e) {
        e.preventDefault();
        let datos = $('#formEditar').serialize();
        $.ajax({
            url: url_actual,
            method: 'put',
            data: datos,
            success: function (resp) {
                alert(resp);
                /* window.location.href = 'http://localhost:3000/' */

            },

        });

    });


});