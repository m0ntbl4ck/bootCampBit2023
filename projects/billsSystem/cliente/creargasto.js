$(document).ready(function () {

    $('#formAgregar').submit(function (e) {
        e.preventDefault();
        let datos = $(this).serialize();

        $.ajax({
            url: 'http://localhost:4000/nuevo',
            method: 'post',
            data: datos,
            success: function (resp) {
                alert(resp)
            },
        });
    });
});