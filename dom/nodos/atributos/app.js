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

import { ciudades } from "./ciudades.js";
import { generos } from "./generos.js";
import { lenguajes } from "./lenguajes.js";
import { validando } from "./validaciones.js";



const body = document.querySelector('body')
const form = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const documento = document.querySelector('#documento');
const usuario = document.querySelector('#usuario');
const password = document.querySelector('#contrasena');
const sel_ciudades = document.createElement('select');
const terminosCheck = document.createElement('input');
const labelTerminos = document.createElement('label');
const label_Gender = document.createElement('h3');
const btn = document.querySelector('button');
const div_genero = document.createElement('div');
const label_lenguajes = document.createElement('h3');
const div_lenguajes = document.createElement('div');
const op_city = document.createElement('option');


terminosCheck.type = 'checkbox';
terminosCheck.id = 'terminos'
labelTerminos.textContent = 'Acepta los terminos y politicas de nuestra empresa';
labelTerminos.classList.add('center');
label_Gender.textContent = '¿Cual es tu genero?'
label_lenguajes.textContent = '¿Que lenguajes deseas aprender?'
op_city.textContent = 'Seleccione Ciudad';


div_genero.setAttribute('class', 'div_margin');
div_lenguajes.setAttribute('class', 'div_margin');


btn.insertAdjacentElement('beforebegin', terminosCheck);
btn.insertAdjacentElement('beforebegin', labelTerminos);


div_genero.append(label_Gender);
form.insertBefore(div_genero, terminosCheck);


div_lenguajes.append(label_lenguajes);
form.insertBefore(div_lenguajes, terminosCheck)


form.insertAdjacentElement('afterbegin', sel_ciudades);
sel_ciudades.append(op_city);


ciudades(sel_ciudades);
generos(div_genero);
lenguajes(div_lenguajes);

btn.addEventListener("click", (event) => validando(event, "#formulario"));
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

const IsChecked = () =>{
    (!terminosCheck.checked) ? btn.setAttribute('disabled', '') : btn.removeAttribute('disabled', '');
} 


btn.addEventListener('click', validando);
terminosCheck.addEventListener('change', IsChecked);
// btn.removeEventListener('click', validando)
// body.addEventListener('contextmenu', contextmenu);
// body.addEventListener('dblclick', dbleClick);
// body.addEventListener('mousedown', mouseDown);
// body.addEventListener('keydown', keydown);



