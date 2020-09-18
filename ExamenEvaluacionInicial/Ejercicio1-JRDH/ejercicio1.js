window.addEventListener('load', () => {
    inicializar();
})

function inicializar() {
    let arrayNombres = [], arrayLetras = [];
    let i = 0;
    let nombre, letra;

    do {
                
        do { 
        
            nombre = prompt('Inserta un nombre');        
            
            if (arrayNombres.indexOf(nombre) != -1) {
                alert('¡Ya existe ese nombre!')
            }

        } while (arrayNombres.indexOf(nombre) != -1); 
        i++;

        arrayNombres.push(nombre);

    } while (i<5);

    for (letra of arrayNombres) {
        arrayLetras.push(letra.substring(0,1).toUpperCase());
    }
    
    console.log(arrayLetras.sort());
}