window.addEventListener('load', function() {

    //Dias desordenados
    let dias_desordenados = ['Sevilla', 'Cadiz', 'Huelva', 
                'Malaga', 'Granada', 'Almeria', 'Jaen', 'Cordoba'];

    //Ordenamos el Array
    let dias_ordenados = dias_desordenados.sort();

    let table = document.getElementsByTagName('table')[0];

    for (i in dias_ordenados) {
        //Creamos cada vez la celda (El tr y dentro su td que a su vez tiene el contenido),
        //Y se agrega a la tabla.
        
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        
        td.innerHTML = dias_ordenados[i];
        tr.appendChild(td);
        table.appendChild(tr);
    }
    
});