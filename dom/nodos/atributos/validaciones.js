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
    const validaciones = {
        nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{2,50}$/, // Solo letras y de 2 a 50 caracteres
        apellido: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{2,50}$/,
        telefono: /^[0-9]{7,15}$/, // Solo números, mínimo 7 y máximo 15
        documento: /^[0-9]{5,20}$/,
        usuario: /^[a-zA-Z0-9_]{3,20}$/, // Letras, números y guion bajo, de 3 a 20 caracteres
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/ // 8-16 caracteres, al menos una mayúscula, una minúscula y un número
    };

    // Función para validar un campo con su regex
    const validarCampo = (campo, regex, mensaje) => {
        if (!regex.test(campo.value.trim())) {
            alert(mensaje);
            campo.focus();
            return false;
        }
        return true;
    };

    // Validaciones con la función genérica
    if (!validarCampo(nombre, validaciones.nombre, 'Nombre inválido')) return;
    if (!validarCampo(apellido, validaciones.apellido, 'Apellido inválido')) return;
    if (!validarCampo(telefono, validaciones.telefono, 'Teléfono inválido')) return;
    if (!validarCampo(documento, validaciones.documento, 'Documento inválido')) return;
    if (!validarCampo(usuario, validaciones.usuario, 'Usuario inválido')) return;
    if (!validarCampo(password, validaciones.password, 'Contraseña inválida (Debe tener entre 8 y 16 caracteres, al menos una mayúscula, una minúscula y un número)')) return;

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
