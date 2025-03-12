
/**
 * 
 * @param {*} event 
 * @param {*} formularioId 
 * @returns 
 */
export const is_valid = (event, formularioId) => {
    event.preventDefault();

    const form = document.querySelector(formularioId); // Obtiene el formulario correctamente
    
    if (!form) {
        console.error("Formulario no encontrado:", formularioId);
        return;
    }

    
    for (const child of form.children) {        
        if (child.tagName === "SELECT") { 
            console.log(child);
            
            for (const name of child.getAttributeNames()) {
                const value = child.dataset.required;
                console.log(value);                
                if (name === 'data-required' && value === "true") {
                    if (child.selectedIndex == 0) {
                        child.classList.add('error');
                    } else {
                        child.classList.remove('error');
                    }
                }
            }
        }
        if (child.tagName === "INPUT") { 
            child.setAttribute('data-required', 'true')
            if (child.hasAttribute("data-required") && child.dataset.required === "true") {
                if (child.value.trim() === "") { // Verifica si el input está vacío
                    child.classList.add('error');
                } else {
                    child.classList.remove('error');
                }
            }
        }
        
    }
    let bandera = true;
    return bandera;
}


// export function is_valid(event, formularioId) {
//     event.preventDefault(); // Evita el envio del formulario si hay errores

//     const form = document.querySelector(formularioId);
//     const inputs = form.querySelectorAll("input[type='text'], input[type='tel'], input[type='number'], input[type='password']");
//     const select = form.querySelector("select"); // Obtiene el primer select
//     let isValid = true;

//     // Validar inputs vacíos
//     inputs.forEach(input => {
//         if (input.value.trim() === "") {
//             input.classList.add("error");
//             isValid = false;
//         } else {
//             input.classList.remove("error");
//         }
//     });

//     // Validar select (si no ha sido seleccionado un valor valido)
//     if (select.value === "" || select.value === "Seleccione Ciudad") {
//         select.classList.add("error");
//         isValid = false;
//     } else {
//         select.classList.remove("error");
//     }
//     if (isValid) {
//         form.submit(); // Si todo esta correcto, se envia el formulario
//     }
// }