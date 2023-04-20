$(document).ready(function () {

    $('#check_password').hide();
    $('#password2').on('keyup', function () {
        let password = $('#password').val();
        let password2 = $('#password2').val();
        if (password === password2) {
            $('#check_password').fadeOut();
            $('#btn_singUp').prop('disabled', false);
        }
        else {
            $('#check_password').show();
            $('#btn_singUp').prop('disabled', true);


        }


    });

    $('#form_signUp').submit(e => {
        e.preventDefault();

        let new_account = $('#form_signUp').serialize();

        $.ajax({
            url: 'http://localhost:3000/new-record',
            method: 'post',
            data: new_account,
            success: function (resp) {
                alert(resp);
                // location.href('/')

            },
        });

    });


});