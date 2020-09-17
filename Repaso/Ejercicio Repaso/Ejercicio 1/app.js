window.addEventListener('load', () => {
    let btn = document.getElementById('submit');

    btn.addEventListener('click', () => {
        
        event.preventDefault();
        //Prevengo que se reinicie la pagina.

        let posicion = document.getElementById('posicion').value;
        let equipo = document.getElementById('equipo').value;
        let puntos = document.getElementById('puntos').value;

        let fila = document.getElementsByTagName('tr')[posicion];

        let nodos = fila.childNodes;
        
        if (posicion < 1 || posicion > fila.childElementCount) {
            //controlo que la posicion cumpla los requisitos.
            alert('¡La posicion no esta en un rango valido!');
            window.location.reload();
        } 

        nodos[3].innerText = equipo;
        nodos[5].innerText = puntos
    })
})