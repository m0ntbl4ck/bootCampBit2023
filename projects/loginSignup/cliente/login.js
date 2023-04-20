$(document).ready(function () {

    $('#form_login').submit(e => {
        e.preventDefault();

        let account_exists = $('#form_login').serialize();


        $.ajax({
            url: 'http://localhost:3000/consult',
            method: 'post',
            data: account_exists,
            success: function (resp) {
                alert(resp);
                // location.href('/')

            },
        });

    });
})