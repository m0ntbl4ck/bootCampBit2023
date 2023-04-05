
$("#aboutUs").hide();
$("#shoppingCart").hide();
$("#mensj-alert").hide();

$("#btn_product").click(function () {
    $("#product").show();
    $("#sectionFilter").show();
    $("#aboutUs").hide();
    $("#shoppingCart").hide();
})

$("#btn_shoppingCart").click(function () {
    $("#shoppingCart").show();
    $("#product").hide();
    $("#aboutUs").hide();
    $("#sectionFilter").hide();
})

$("#btn_aboutUs").click(function () {
    $("#aboutUs").show();
    $("#product").hide();
    $("#shoppingCart").hide();
    $("#sectionFilter").hide();
})

/* var arrayProduct = [], arrayPrice = [];
localStorage.setItem("a", 0)
$(".addCart").click(function () {
    var prod = $(this).attr("id");
    var price = $(this).data("precio");

    arrayProduct[localStorage.getItem("a")] = prod;

    arrayPrice[localStorage.getItem("a")] = price;

    localStorage.setItem("a", parseInt(localStorage.getItem("a")) + 1);
    // prod = prod.split("_");

    localStorage.setItem("arrayProduct", JSON.stringify(arrayProduct));
    localStorage.setItem("arrayPrice", JSON.stringify(arrayPrice));

    cant()
    table()

})



function cant() {
    var arrayCant = [], product, arrayTemp, cont;
    //arrayTemp = localStorage.getItem("arrayProduct");
     //arrayTemp = arrayTemp.split(",");


    for (var i = 1; i <= 8; i++) {
        product = "producto_" + i;
        product = product.toString()
        console.log("product " + product)
        arrayTemp = [];
        cont = 0;
        arrayTemp = JSON.parse(localStorage.getItem("arrayProduct"));
        //arrayTemp = arrayTemp.split(","); 
        for (var j = 0; j < arrayTemp.length; j++) {
            if (arrayTemp[j] === product) {
                cont = cont + 1;
            }
        }
        arrayCant[i - 1] = cont;

    }
    localStorage.setItem("cant", JSON.stringify(arrayCant))

}

//console.log(localStorage.getItem("arrayProduct"))
//console.log(localStorage.getItem("arrayPrice"))
//console.log(localStorage.getItem("cant")) 

function table() {
    var temp = localStorage.getItem("cant")
    console.log(localStorage.getItem("cant"))
    console.log(temp.length)
    for (var i = 0; i <= temp.length; i++) {
        if (temp[i] != 0) {
            $("#table1").append(`<tr><th>${temp[i]}</th><td>Producto ${i}</td><td></td><td></td></tr>`
            )
        }
    }
}
 */

/* var allProducts = [], allPrices = [], repetidos = [], priceProduct, nameProduct, product, product1, priceTotal;
$(".container-items").click(e => {
    console.log(e.target);
    //console.log(e.target.classList.contains("btn-add"));
    //product = e.target.parentElement;
    //console.log(product) 
    if (e.target.classList.contains("btn-add") === true) {
        product = e.target.parentElement;
        nameProduct = product.querySelector("h2").textContent;
        //console.log(nameProduct)
        priceProduct = product.querySelector("p").textContent;
        //console.log(priceProduct)
        allProducts = [...allProducts, nameProduct];
        allPrices = [...allPrices, priceProduct];


    }
    repetidos = []
    for (var i = 0; i < allProducts.length; i++) {
        product1 = allProducts[i];

        if (repetidos[product1]) {
            repetidos[product1]++;
        }
        else {
            repetidos[product1] = 1;
        }
        console.log(repetidos);
    }
    var tabla = $("#table1");
    tabla.empty();
    for (product1 in repetidos) {

        console.log(`El string "${product1}" se repite ${repetidos[product1]} veces.`);
        tabla.append(`<tr><th>${repetidos[product1]}</th><td>${product1}</td><td></td><td></td></tr>`)

    }
    console.log(allPrices, allProducts)
    showCart(product1, repetidos);
    priceT(allPrices)
})


function showCart(a, b) {
    var tabla = $("#table1");
    tabla.empty();
    for (a in b) {

        console.log(`El string "${a}" se repite ${b[a]} veces.`);
        tabla.append(`<tr><th>${b[a]}</th><td>${a}</td><td></td><td></td></tr>`)

    }
}

function priceT(array) {
    var tabla = $("#table1");
    priceTotal = 0;
    for (var i = 0; i < array.length; i++) {
        priceTotal = priceTotal + array[i];

    }
    tabla.append(`<tr><th></th><td>Precio Total</td>${priceTotal}<td></td><td></td></tr>`)
} */



/*   const infoProduct = {
      quantity: 1,
      title: product.querySelector("h2").textContent,
      price: product.querySelector("p").textContent
  } */


var allProducts = [], product, pay, allRegistros = [], a = 0, totalPrice = 0;;

$(".container-items").click(e => {
    a = 1;
    console.log(e.target);
    //console.log(e.target.classList.contains("btn-add"));
    //product = e.target.parentElement;
    //console.log(product) 
    if (e.target.classList.contains("btn-add") === true) {
        product = e.target.parentElement;


        var infoProduct = {
            quantity: 1,
            title: product.querySelector("h2").textContent,
            price: product.querySelector("p").textContent
        }
        var repeat = allProducts.some(product => product.title === infoProduct.title)

        if (repeat === true) {
            var products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            })
            allProducts = [...products]
        }
        else {
            allProducts = [...allProducts, infoProduct];
        }
        localStorage.setItem("carritoactual", allProducts)
        showCart();

    }
    $("#mensj-alert").removeClass("mensj-oculto");
    $("#mensj-alert").hide();
    //console.log(allProducts)
    $("#mensj-alert").show();
    $("#mensj-alert").addClass("mensj-oculto");


    //$("#mensj-alert").hide();
})


function showCart() {


    var array = localStorage.getItem("carritoactual")

    var tabla = $("#table1");
    tabla.empty();
    allProducts.forEach(product => {
        totalPrice = totalPrice + parseInt(product.quantity * product.price.slice(1))
        //console.log("total" + totalPrice)
        tabla.append(`<tr><th>${product.quantity}</th><td>${product.title}</td><td>${product.price} c/u</td></tr>`)

    })
    tabla.append(`<tr><th></th><td>Total a Pagar</td><td>$${totalPrice}</td></tr>`)
    /* tabla.append(`<button id="btn-pay">Pagar</button>`) */

    // var mnsj = $("#mensj-alert");

}



$("#filter").change(function () {

    const selection = $(this).val();

    $(".item").hide();
    $("." + selection).show();
    /* if (selection === "technology") {
        $(".technology").show();

    }
    else {
        $(".technology").hide();
        $(".videogames").show();
    } */
    //console.log(selection)


})


$("#btn-pay").click(function () {
    if (allProducts != 0) {
        localStorage.setItem("registro", 1)
        localStorage.setItem("carritoactual", allProducts)
        //localStorage.setItem("carrito", allRegistros);
        localStorage.setItem("pagosrealizados", totalPrice)

        alert("su pago fue generado con exito")
    }
    else {
        alert("su carrito esta vacio, agregue productos para comprar")
    }

})


