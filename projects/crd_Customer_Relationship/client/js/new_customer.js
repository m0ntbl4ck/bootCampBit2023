$(document).ready(function () {
  $('#form_newcustomer').submit((e) => {
    e.preventDefault();

    let new_customer = $('#form_newcustomer').serialize();
    console.log(new_customer);

    $.ajax({
      url: 'http://localhost:3000/new_customer',
      method: 'post',
      data: new_customer,
      success: function (resp) {
        alert(resp);
        window.location.href = 'http://localhost:3000/customerlist';
      },
    });
  });
});
