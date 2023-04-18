

$(document).ready(function () {

    $('#formu').submit(e => {
        e.preventDefault();

        let datos = $('#formu').serialize()
        alert(datos)

        $.ajax({
            url: 'http://localhost:3000/turnos',
            data: datos,
            method: 'post',
            succes: function (resp) {
                alert(resp);
            }
        });
    });
});