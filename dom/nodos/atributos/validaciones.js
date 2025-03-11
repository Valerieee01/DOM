export const validando = (event, formularioId) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const form = document.querySelector(formularioId); // Obtiene el formulario correctamente
    if (!form) {
        console.error("Formulario no encontrado:", formularioId);
        return;
    }

    // Obtener los campos dentro del formulario
    const nombre = form.querySelector('#nombre');
    const apellido = form.querySelector('#apellido');
    const telefono = form.querySelector('#telefono');
    const documento = form.querySelector('#documento');
    const usuario = form.querySelector('#usuario');
    const password = form.querySelector('#contrasena');
    const sel_ciudades = form.querySelector('select'); // Seleccionar el campo de ciudad

    // Definir expresiones regulares para validación
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{2,50}$/; 
    const regexApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{2,50}$/; 
    const regexTelefono = /^[0-9]{7,15}$/; 
    const regexDocumento = /^[0-9]{5,20}$/; 
    const regexUsuario = /^[a-zA-Z0-9_]{3,20}$/; 
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/; 


    // Función para validar un campo con su regex
    const validarCampo = (campo, regex, mensaje) => {
        if (!regex.test(campo.value.trim())) {
            alert(mensaje);
            campo.focus();
            return false;
        }
        return true;
    };

    // Validaciones
    if (!validarCampo(nombre, regexNombre, 'Nombre inválido')) return;
    if (!validarCampo(apellido, regexApellido, 'Apellido inválido')) return;
    if (!validarCampo(telefono, regexTelefono, 'Teléfono inválido')) return;
    if (!validarCampo(documento, regexDocumento, 'Documento inválido')) return;
    if (!validarCampo(usuario, regexUsuario, 'Usuario inválido')) return;
    if (!validarCampo(password, regexPassword, 'Contraseña inválida (Debe tener entre 8 y 16 caracteres, al menos una mayúscula, una minúscula y un número)')) return;

    
    // Validación de selección de ciudad
    if (!sel_ciudades || sel_ciudades.value === '') {
        alert('Debes seleccionar una ciudad');
        sel_ciudades.focus();
        return;
    }

    // Validar que haya al menos 2 checkboxes seleccionados
    const checkboxesSeleccionados = form.querySelectorAll('input[name="lenguaje"]:checked');
    if (checkboxesSeleccionados.length < 2) {
        alert("Debes seleccionar al menos 2 lenguajes antes de enviar el formulario.");
        return;
    }

    alert("Formulario enviado correctamente");
    form.submit();
};
