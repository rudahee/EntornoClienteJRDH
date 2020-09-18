window.addEventListener('load', () => {
    actualizarTotal();
    let btn_modificar = document.getElementById('btn-modificar');
    let btn_insertar = document.getElementById('btn-insertar');
    let btn_eliminar = document.getElementById('btn-eliminar');

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
    let total = document.getElementsByClassName('fila').length
    document.getElementById('total-de-empleados').innerText = total;
}

function existe() {
    let nuevoDni = document.getElementById('dni').value;
    let arrayDni = document.getElementsByClassName('dni');
    let flag = false;

    for (dni of arrayDni) {
        if (dni.innerText == nuevoDni) {
            flag = true;
        }
    }

    return flag
}

function insertar() {
    let dni = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let arrayFilas = document.getElementsByClassName('fila');
    let cantidadFilas = arrayFilas.length;

    let tbdoy = document.getElementsByTagName('tbody')[0];

    let fila = document.createElement('tr');
    fila.className = 'fila';
    fila.id = 'fila-' + (cantidadFilas+1);

    let celdas = [document.createElement('td'), document.createElement('td'), 
        document.createElement('td'), document.createElement('td')]

    celdas[0].innerText = cantidadFilas + 1;
    celdas[1].innerText = dni;
    celdas[1].className = 'dni'
    celdas[2].innerText = nombre;
    celdas[3].innerText = apellidos;

    for (celda of celdas) {
        fila.appendChild(celda);
    }

    tbdoy.appendChild(fila);
}

function eliminar() {
    let dniBuscar = document.getElementById('dni').value;
    let arrayDni = document.getElementsByClassName('dni');
    let indice;
    let fila;

    for (dni in arrayDni) {
        if (arrayDni[dni].innerText == dniBuscar) {
            indice = dni;
        }
    }

    fila = arrayDni[indice].parentNode;

    fila.parentNode.removeChild(arrayDni[indice].parentNode);
}
function modificar() {

    let dniBuscar = document.getElementById('dni').value;
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let arrayDni = document.getElementsByClassName('dni');
    let filaAntigua;
    let FilaNueva;

    for (dni in arrayDni) {
        if (arrayDni[dni] == dniBuscar) {
            filaAntigua = arrayDni[dni].parentNode;
            console.log(filaAntigua)
            console.log(arrayDni[dni])
        }
    }
     console.log(filaAntigua)

    filaNueva = document.createElement('tr');
    filaNueva.className = 'fila';
    filaNueva.id = 'fila-' + (filaAntigua.childNodes[0].innerText);

    let celdas = [document.createElement('td'), document.createElement('td'), 
        document.createElement('td'), document.createElement('td')]

    celdas[0].innerText = filaAntigua.innerText;
    celdas[1].innerText = dni;
    celdas[1].className = 'dni'
    celdas[2].innerText = nombre;
    celdas[3].innerText = apellidos;

    for (celda of celdas) {
        filaNueva.appendChild(celda);
    }

    filaAntigua.parentNode.replaceChild(FilaNueva, filaAntigua);
}