window.addEventListener('load', () => {
    //Cuando la pagina termine de cargar.

    actualizarTotal();
    
    //Obtener los botones que dispararan eventos.
    let btn_modificar = document.getElementById('btn-modificar');
    let btn_insertar = document.getElementById('btn-insertar');
    let btn_eliminar = document.getElementById('btn-eliminar');


    /*
        Los siguientes eventos se dispararan cuando sean presionados. Tendran esta estructura:
            - Evitar que se reinicie la pagina
            - Comprueba los requisitos (Si no se cumplan salta un cuadro de dialogo)
            - Llamar a la funcion correspondiente
    
    
    */
    btn_insertar.addEventListener('click', () => {
        event.preventDefault();
        if (!existe()) {
            insertar();
        }
        else {
            alert('¡Ya existe alguien con ese DNI!')
        }
        actualizarTotal();
    })

    btn_eliminar.addEventListener('click', () => {
        event.preventDefault();
        if (existe()) {
            eliminar();
        } else {
            alert('¡No existe nadie con ese DNI!')
        }
        actualizarTotal();
    })

    btn_modificar.addEventListener('click', () => {
        event.preventDefault();
        if (existe()) {
            modificar();
        }
        else {
            alert('¡No existe nadie con ese DNI!')
        }
        actualizarTotal();
    })
})

function actualizarTotal() {
    //Cuenta la cantidad de columnas y lo imprime en la web
    let total = document.getElementsByClassName('fila').length
    document.getElementById('total-de-empleados').innerText = total;
}

function existe() {
    //Declaracion de variables
    let nuevoDni = document.getElementById('dni').value;
    let arrayDni = document.getElementsByClassName('dni');
    let flag = false;


    for (dni of arrayDni) {
        //Si encuentra el DNI, el flag es 'true'
        if (dni.innerText == nuevoDni) {
            flag = true;
        }
    }

    return flag
}

function insertar() {
    //Declaracion de variables
    //Datos de Inputs
    let dni = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;

    //Estructura de la tabla
    let tbdoy = document.getElementsByTagName('tbody')[0];
    let arrayFilas = document.getElementsByClassName('fila');
    let cantidadFilas = arrayFilas.length;

    //Crear fila, y las celdas
    let fila = document.createElement('tr');
    let celdas = [document.createElement('td'), document.createElement('td'),
    document.createElement('td'), document.createElement('td')]

    //A la fila le agregamos la clase y el id correspondiente
    fila.className = 'fila';
    fila.id = 'fila-' + (cantidadFilas + 1);

    //Rellenar las celdas
    celdas[0].innerText = cantidadFilas + 1;
    celdas[1].innerText = dni;
    celdas[1].className = 'dni'
    celdas[2].innerText = nombre;
    celdas[3].innerText = apellidos;


    for (celda of celdas) {
        //Agregar las celdas a la fila
        fila.appendChild(celda);
    }

    //Agregar la fila al cuerpo de la tabla
    tbdoy.appendChild(fila);
}
function eliminar() {
    //Declaracion de variables
    let dniBuscar = document.getElementById('dni').value;
    let arrayDni = document.getElementsByClassName('dni');
    let indice;
    let fila;

    for (dni in arrayDni) {
        //Buscar el indice del elemento a eliminar
        if (arrayDni[dni].innerText == dniBuscar) {
            indice = dni;
        }
    }

    fila = arrayDni[indice].parentNode;

    //Eliminar el elemento
    fila.parentNode.removeChild(arrayDni[indice].parentNode);
}
function modificar() {
    //Declaracion de variables
    let dniBuscar = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let arrayDni = document.getElementsByClassName('dni');
    let filaAntigua;
    let filaNueva;

    for (dni in arrayDni) {
        //Buscar la fila a modificar
        if (arrayDni[dni].innerText == dniBuscar) {
            filaAntigua = arrayDni[dni].parentNode;
        }
    }

    //Crear fila y celdas
    filaNueva = document.createElement('tr');
    filaNueva.className = 'fila';
    filaNueva.id = filaAntigua.id;

    let celdas = [document.createElement('td'), document.createElement('td'),
    document.createElement('td'), document.createElement('td')]

    //Rellenar celdas con los datos
    celdas[0].innerText = filaNueva.id.split('-')[1];
    celdas[1].innerText = dniBuscar;
    celdas[1].className = 'dni'
    celdas[2].innerText = nombre;
    celdas[3].innerText = apellidos;

    for (celda of celdas) {
        //Adjuntar las celdas a la fila
        filaNueva.appendChild(celda);
    }

    //Sustituir la fila antigua por la nueva
    filaAntigua.parentNode.replaceChild(filaNueva, filaAntigua);
}