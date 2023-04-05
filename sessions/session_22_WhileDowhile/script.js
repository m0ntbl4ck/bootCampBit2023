//while ciclo que se repite mientras se cumple una condición

var i = 1, x = 0;
while (i <= 10) {

    x = x + 1;
    i++;
}
console.log(x);

i = 1, x = 0;

//do while se repite al menos una vez y luego todas las veces mientras se cumle una condición
do {
    x = x + 1;
    i++;
} while (i <= 10);

console.log(x);