
$(document).ready(function () {

    //alert('hola')

    pedir_tarea();

    function pedir_tarea() {


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

            let a_editar, a_eliminar;
            a_editar = "<a href='/tarea/" + resp[i]._id + "/" + resp[i].titulo + "'> Editar </a>";

            // /eliminar/123445
            a_eliminar = "<a href='/eliminar/" + resp[i]._id + "'>Eliminar</a>"
            $("#tareas").append(
                "<li>" + resp[i].titulo + " - " + a_editar + " - " + a_eliminar + "</li>"
            );
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
                pedir_tarea()

            }
        })
    })
});