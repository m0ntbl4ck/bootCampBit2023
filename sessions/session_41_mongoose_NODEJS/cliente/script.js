
$(document).ready(function () {

    //alert('hola')

    peticion_servidor();

    function peticion_servidor() {


        $.ajax({
            url: 'http://localhost:3000/prueba',
            method: 'get',
            success: function (resp) {

                mostrar_lista(resp)


            },
        });

    }
    function mostrar_lista(resp) {
        $('#tareas').empty();
        for (let i = 0; i < resp.length; i++) {
            console.log(resp[i]);
            $('#tareas').append('<li>' + resp[i].titulo + " - <a href='/editar/" +
                resp[i]._id +
                "'> Editar " +
                "</a>" + '</li>')
        }
    }

    $('#formTarea').submit(e => {
        e.preventDefault();
        let datos = $('#formTarea').serialize();

        $.ajax({
            url: 'http://localhost:3000/nuevaTarea',
            method: 'post',
            data: datos,
            success: function (resp) {
                alert(resp);
                // location.href('/')
                peticion_servidor()

            }
        })
    })
});