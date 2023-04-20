$(document).ready(function () {

    obtener_gastos();
    // petición por AJAX para solicitar los documentos  dela BD
    //Y agregarlos a la tabla
    function obtener_gastos() {
        $.ajax({
            url: 'http://localhost:4000/obtener_gastos',
            method: 'get',
            success: function (resp) {
                console.log(resp);
                armar_tabla()
            }

        });
    }
    function armar_tabla(documentos) {

        let cabecera =
            "<thead><th>#</th><th>Fecha</th><th>Descripcion</th><th>Monto</th><th>opciones</td></thead>";

        let tr_inicio = "<tr>";
        let tr_fin = "</tr>";

        let td_inicio = "<td>";
        let td_fin = "</td>";
        let tabla;
        let contador = 0;
        for (let i = 0; i < documentos.length; i++) {
            contador = i + 1;
            tabla +=
                tr_inicio +
                td_inicio +
                contador +
                td_fin +
                td_inicio +
                documentos[i].fecha +
                td_fin +
                td_inicio +
                documentos[i].descripcion +
                td_fin +
                td_inicio +
                documentos[i].monto +
                td_fin +
                td_inicio +
                "<button class='btn_editar' data-id='" + documentos[i]._id
            "<button class='btn_editar' data-id='" + documentos[i]._id + "'> Editar </button>" +
                "<button class='btn_eliminar' data-id='" + documentos[i]._id + "'> Eliminar </button>" +
                td_fin +
                tr_fin;
        }

        tabla = cabecera + "<tbody>" + tabla + "</tbody>";

        $("#tabla").append(tabla);

    }

    $("#tabla").on('click', '.btn_editar', function () {
        let id = $(this).data('id');
        alert('Editando el documento' + id)
    })

    $("#tabla").on('click', '.btn_eliminar', function () {
        let id = $(this).data('id');
        $.ajax({
            url: 'http://localhost:4000/eliminar/' + id,
            method: 'delete',
            success: function (resp) {
                obtener_gastos()
            },
        })
    })
})