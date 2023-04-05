let familyArray = [];
$("#addFamily").click(function () {

    const infoFamily = {

        name: $("#name").val(),
        relationship: $("#relationship").val(),
        age: $("#age").val()

    }
    console.log(infoFamily);

    familyArray = [...familyArray, infoFamily]
    console.log(familyArray)

    localStorage.setItem("family", JSON.stringify(familyArray))
    console.log(JSON.parse(localStorage.getItem("family")))

    $("#name").val("");
    $("#relationship").val("");
    $("#age").val("");
})

$("#showFamily").click(function () {
    let array = JSON.parse(localStorage.getItem("family"))

    for (let i = 0; i < array.length; i++) {
        arrayFamily = array[i]
        $("#allFamily").append(`<li>${arrayFamily.name}</li><li>${arrayFamily.relationship}</li><li>${arrayFamily.age}</li></br>`)
    }
})

