const eliminar = (id) => {
  console.log(id);
  $.ajax({
    url: 'http://localhost:3000/delete/' + id,
    method: 'delete',
    success: function (resp) {
      alert('Borrado exitoso');
      window.location.reload();
    },
  });
};
$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:3000/request_database_contact',
    method: 'get',
    success: function (resp) {
      showcontact(resp);
    },
  });

  const showcontact = (resp) => {
    $('#tbody').empty();

    for (let i = 0; i < resp.length; i++) {
      console.log(resp[i]);
      $('#tbody').append(
        `<tr><td class="text-center">${resp[i].first_name}</td><td class="text-center">${resp[i].state}</td><td class="text-center">${resp[i].type_of_contact}</td><td class="text-center">${resp[i].registration_date}</td><td><button class="btn btn-danger" onclick="eliminar('${resp[i]._id}')">Eliminar</button></td></tr>`,
      );
    }
  };
});
