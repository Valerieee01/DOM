export const lenguajes = async (form) => {
    const respuesta = await fetch('lenguajes.json');
    const lenguages = await respuesta.json(); 
    const opciones = document.createDocumentFragment();
    
    lenguages.forEach(({ id, name }) => {
        const divLenguajes = document.createElement('div');
        const op_lenguajes = document.createElement('input');
        const labelLenguajes = document.createElement('label');
        
        divLenguajes.setAttribute('class', 'genero')
        op_lenguajes.setAttribute('type', 'checkbox');
        op_lenguajes.setAttribute('name', 'lenguaje'); 
        op_lenguajes.setAttribute('id', `lenguaje_${id}`);
        
        op_lenguajes.setAttribute('value', name);

        labelLenguajes.setAttribute('for', `lenguaje_${id}`);
        labelLenguajes.textContent = name;

        divLenguajes.appendChild(op_lenguajes);
        divLenguajes.appendChild(labelLenguajes);
        opciones.append(divLenguajes);
    });

    form.append(opciones);
};
