let base;
let altur;
let calc;
base = parseInt(prompt("Ingrese medidas de la base del retangulo en cm"));
altur = parseInt(prompt("Ingrese medidas de la altura del retangulo cm"));
alert(" El Area total del retangulo es: " + calArea(base, altur) + " Cm^2");

function calArea(bas, alt) {
calc = bas * alt;
return calc;
    
}

