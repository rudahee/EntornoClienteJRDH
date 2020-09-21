window.addEventListener('load', () => {
    inicializar();
})

function inicializar() {

    //Declaracion de variables
    let arrayNombres = [], arrayLetras = [];
    let i = 0;
    let nombre, letra;

    do {
        //Hasta que se inserten 5 nombres correctos
        do { 
            //Hasta que el nombre no este repetido
            nombre = prompt('Inserta un nombre');        
            
            if (arrayNombres.indexOf(nombre) != -1) {
                //Si esta repetido, salta un cuadro de dialogo
                alert('¡Ya existe ese nombre!')
            }

        } while (arrayNombres.indexOf(nombre) != -1); 
        i++;

        arrayNombres.push(nombre);

    } while (i<5);

    for (letra of arrayNombres) {
        //Se recorre el array de nombres sacando la primera letra en mayusculas.
        arrayLetras.push(letra.substring(0,1).toUpperCase());
    }
    
    //Para finalizar se imprime
    console.log(arrayLetras.sort());
}