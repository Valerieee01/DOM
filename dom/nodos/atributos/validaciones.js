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
    const op_ciudades = form.querySelectorAll('option')

    op_ciudades.forEach(ciudad => {
        ciudad.selectedIndex();
    });
   
    if (nombre.value.trim() === '') { // trim() se usa para eliminar los espacios delante y detras del texto obtenido
        alert('El nombre es obligatorio');
        nombre.focus();
        return;
    }
    if (apellido.value.trim() === '') {
        alert('El apellido es obligatorio');
        apellido.focus();
        return;
    }
    if (telefono.value.trim() === '') {
        alert('El teléfono es obligatorio');
        telefono.focus();
        return;
    }
    if (documento.value.trim() === '') {
        alert('El documento es obligatorio');
        documento.focus();
        return;
    }
    if (usuario.value.trim() === '') {
        alert('El usuario es obligatorio');
        usuario.focus();
        return;
    }
    if (password.value.trim() === '') {
        alert('La contraseña es obligatoria');
        password.focus();
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