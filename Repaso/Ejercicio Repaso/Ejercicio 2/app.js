window.addEventListener('load', () => {
    let btn_agregar = document.getElementById('btn-agregar');
    let btn_eliminar = document.getElementById('btn-eliminar')
    
    
    btn_agregar.addEventListener('click', () => {
        event.preventDefault();
        //Prevengo que se reinicie la pagina.

        let posicion = document.getElementById('posicion-elemento').value;
        let contenido = document.getElementById('contenido-elemento').value;

        //Creo el nuevo nodo
        let nuevo_elemento = document.createElement('li');
        nuevo_elemento.textContent = contenido;

        let lista = document.getElementsByTagName('ul')[0];

        let nodo_anterior = document.getElementsByTagName('li')[posicion-1];

        //Lo inserto en la posicion correspondiente
        lista.insertBefore(nuevo_elemento, nodo_anterior);

        //Limpio los campos del formulario
        document.getElementById('posicion-elemento').value = '';
        document.getElementById('contenido-elemento').value = '';
    })

    btn_eliminar.addEventListener('click', () => {
        event.preventDefault();
        //Prevengo que se reinicie la pagina.

        let posicion = document.getElementById('posicion-elemento').value;
        let lista = document.getElementsByTagName('ul')[0];

        //Encuentro el nodo y lo elimino
        let nodo_eliminar = document.getElementsByTagName('li')[posicion-1];
        lista.removeChild(nodo_eliminar);
        
        //Limpio los campos del formulario
        document.getElementById('posicion-elemento').value = '';
        document.getElementById('contenido-elemento').value = '';
    })
})

