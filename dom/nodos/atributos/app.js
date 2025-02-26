/**
 * 1. Importaciones
 * 2. Variables y Contantes
 * 3. Metodos
 * 4. Eventos
 */

// // Selecciona el primer elemento <input> que encuentre en el documento
// const input = document.querySelector('input');

// // Selecciona el primer elemento <input> con el atributo type="password"
// const password = document.querySelector('input[type = "password"]');
// const form = document.querySelector('form');
// const bt_validar = document.querySelector('button');


// // Imprime en la consola el tipo del campo input (por ejemplo, "text", "password", etc.)
// console.log(input.type);

// // Imprime en la consola el valor actual del campo input
// console.log(input.value);

// // Asigna el valor 'Valerie' al campo input
// input.value = 'Valerie';
// // Asigna el valor '123466' al campo password
// password.value = '123';

// // Verifica si el campo password tiene un valor:
// // - Si tiene un valor, imprime 'lleno' en la consola.
// // - Si está vacío, imprime 'vacio' en la consola.
// console.log(password.value ? 'lleno' : 'vacio');

// // Cambia el tipo del campo password de 'password' a 'text', haciendo visible su contenido
// password.setAttribute('type', 'text');


// // const button = document.createElement('a');
// // button.classList.add('btn');
// // button.textContent = 'Ir Login'
// // button.href = 'http://127.0.0.1:5500/dom/nodos/atributos/login.html'
// // button.id = 'btn-login';
// // button.setAttribute('title', 'Ir al Login');
// // form.append(button);
// // // button.setAttribute('disabled', '');



// bt_validar.addEventListener('click', validando);
const body = document.querySelector('body')
const form = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const documento = document.querySelector('#documento');
const usuario = document.querySelector('#usuario');
const password = document.querySelector('#contrasena');
const btn = document.querySelector('button');

const sel_ciudades = document.createElement('select');
const op_ciudades = document.createElement('opction');

sel_ciudades.appendChild(op_ciudades)
form.append(sel_ciudades)

const ciudades  = async () => {
    const data = await fetch('data.json');
    const ciudades = await data.json();
    console.log(ciudades);
    
}
let arrayCiudades = ciudades()

arrayCiudades.array.forEach(element => {
    element.appendChild(op_ciudades)
});
 


const validando =  (event) => {
    event.preventDefault();
    if (nombre.value === '') {
        alert('El nombre es obligatorio');
        nombre.focus();
    }if (apellido.value === '') {
        alert('El apellido es obligatorio');
        apellido.focus();
    }if (telefono.value === '') {
        alert('El telefono es obligatorio');
        telefono.focus();
    }if (documento.value === '') {
        alert('El documento es obligatorio');
        documento.focus();
    }if (usuario.value === '') {
        alert('El usuario es obligatorio');
        usuario.focus();
    }if (contrasena.value === '') {
        alert('El contraseña es obligatorio');
        contrasena.focus();
    }else {
        alert('Datos no validos');
    }
} 
//


const contextmenu = () => {
    alert('?')
}

const dbleClick = () => {
    alert('Doble Click')
}

const mouseDown = () => {
    alert('mouseDown')
}

const keydown = (event) => {
    console.log(`Presionaste una tecla ${event.key}`);
}

// btn.addEventListener('click', validando);
// btn.removeEventListener('click', validando)
// body.addEventListener('contextmenu', contextmenu);
// body.addEventListener('dblclick', dbleClick);
// body.addEventListener('mousedown', mouseDown);
body.addEventListener('keydown', keydown);

// haremos un select



