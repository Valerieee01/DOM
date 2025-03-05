export const ciudades = async (atributo) => {
    try {
        
        const respuesta = await fetch('data.json');
        const city = await respuesta.json(); 
        const opciones = document.createDocumentFragment();
        city.forEach(ciudad => {
            const op_ciudades = document.createElement('option');
            op_ciudades.value = ciudad.id; 
            op_ciudades.textContent = ciudad.nombre;
            const clone = document.importNode(op_ciudades, true)
            opciones.append(clone)
        });
        atributo.appendChild(opciones);

    } catch (error) {
         console.error("Error al cargar el archivo JSON", error);
    }
}