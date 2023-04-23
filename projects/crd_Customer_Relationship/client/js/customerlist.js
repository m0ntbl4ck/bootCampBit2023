$(document).ready(function () {

    $.ajax({

        url: 'http://localhost:3000/request_database_customer',
        method: 'get',
        success: function (resp) {
            showcustomer(resp);
        },
    });


    const showcustomer = (resp) => {
        $('#tbody').empty();

        for (let i = 0; i < resp.length; i++) {
            console.log(resp[i]);

            $("#tbody").append(

                `<tr><td>${resp[i].first_name}</td><td>${resp[i].last_name}</td><td>${resp[i].country}</td><td>${resp[i].phone_number}</td><td>${resp[i].email}</td><td>${resp[i].registration_date}</td></tr>`
            );
        }
    }

});