const eliminar = (id) => {
  console.log(id);
  $.ajax({
    url: 'http://localhost:3000/customer_delete/' + id,
    method: 'delete',
    success: function (resp) {
      alert('Borrado exitoso');
      window.location.reload();
    },
  });
};
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

      $('#tbody').append(
        `<tr><td class="text-center">${resp[i].first_name}</td><td class="text-center">${resp[i].last_name}</td><td class="text-center">${resp[i].country}</td><td class="text-center">${resp[i].phone_number}</td><td class="text-center">${resp[i].email}</td><td class="text-center">${resp[i].registration_date}</td> <td><button class="btn btn-danger" onclick="eliminar('${resp[i]._id}')">Eliminar</button></td></tr>`,
      );
    }
  };
});
