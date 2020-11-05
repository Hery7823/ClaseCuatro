let albert, ana, juan, mam;
juan = parseFloat(prompt("Ingrese la edad de Juan"));
document.write("La edad de la mama de Juan es: " + edadMam() + " Años " + "La edad de Juan es: " + juan + " Años La edad de Ana es: " + edadAna() + " Años La edad de Alberto es: "+edadAlbert()+" Años");

function edadAlbert() {
    albert = (juan * 2) / 3; 
    return albert;
}
function edadAna() {
    ana = (juan * 4)/3;  
    return ana;  
}

function edadMam() {
    mam= juan + edadAna() + edadAlbert();
    return mam;    
}
