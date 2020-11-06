let ahorro;
let sueldo;
let total;
sueldo = parseFloat(prompt("Ingrese el valor de su sueldo semanal"));
let variableAhorroAnual = ahorroMes(sueldo);
document.write("Su Ahorro anual es de: " + "$ " + ahorroAnual(variableAhorroAnual));

function ahorroMes(sue) {
    ahorro = (sue * 0.15) * 4; // 15% del sueldo semanal a 1 mes (por 4 semanas)
    return ahorro;
}

function ahorroAnual(ahor) {
    total = ahor * 12;
    return total;

}