$(document).ready(function () {
  let select = '';

  $('#form_newcontact').hide();
  $('#alert').hide();
  $.ajax({
    url: 'http://localhost:3000/request_database_customer',
    method: 'get',
    //data: contact_search,
    success: function (resp) {
      console.log(resp);

      $('#tbody').empty();
      resp.forEach((element) => {
        const namevalue = `${element.first_name} ${element.last_name}`;
        $('#select_search').append(
          `<option value="${namevalue}">${namevalue}</option>`,
        );
      });
    },
    error: function (resp) {
      alert(resp.responseText);
    },
  });
  $('#form_search').submit((e) => {
    e.preventDefault();
    let contact_search = $('#select_search').val();
    formshow(contact_search);
  });

  const formshow = (resp) => {
    console.log(resp);

    if (resp != 'false') {
      $('#first_name').attr('value', `${resp}`);
      $('#nombre').attr('value', `${resp}`);
      $('#nombre').prop('disabled', true);
      $('#form_newcontact').show();
      $('#alert').fadeOut();
    } else {
      $('#alert').show();
      $('#form_newcontact').hide();
    }
  };

  $('#form_newcontact').submit((e) => {
    e.preventDefault();
    console.log('nombre del cliente' + $('#first_name').val());
    let new_contact = $('#form_newcontact').serialize();

    console.log('ACA VA EL CONTACTO', new_contact);

    $.ajax({
      url: 'http://localhost:3000/new_contact',
      method: 'post',
      data: new_contact,
      success: function (resp) {
        alert(resp);
        window.location.href = 'http://localhost:3000/contactlist';
      },
    });
  });
});
