export const generos = async (form) => {
    const respuesta = await fetch('generos.json');
    const gender = await respuesta.json(); 
    const opciones = document.createDocumentFragment();
    console.log(gender);
    
    gender.forEach(({ id, tipo }) => {
        const divGeneros = document.createElement('div');
        const op_genero = document.createElement('input');
        const labelGenero = document.createElement('label');
         console.log(id, tipo);
        
        divGeneros.setAttribute('class', 'genero')
        op_genero.setAttribute('type', 'radio');
        op_genero.setAttribute('name', 'genero'); 
        op_genero.setAttribute('id', `generos_${id}`);
        op_genero.setAttribute('value', tipo);

        labelGenero.setAttribute('for', `generos_${id}`);
        labelGenero.textContent = tipo;

        divGeneros.appendChild(op_genero);
        divGeneros.appendChild(labelGenero);
        opciones.append(divGeneros);
    });

    form.append(opciones);
};
