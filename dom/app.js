
const win = window; // Representa la ventana del navegador, el objeto global en el entorno del navegador.
const dom = document; // Representa el documento HTML actual cargado en la ventana.
const head = dom.head; // Obtiene el elemento <head> del documento HTML.
const body = dom.body; // Obtiene el elemento <body> del documento HTML.
const title  = dom.title; // Obtiene o establece el título del documento HTML.
const header  = dom.querySelector('header'); // Obtiene el primer elemento <header> encontrado en el documento.
const paragraph = dom.querySelector('p'); // Obtiene el primer párrafo <p> encontrado en el documento.

let style = dom.styleSheets; // Obtiene una colección de todas las hojas de estilo del documento.
const script = dom.scripts; // Obtiene una colección de todos los scripts cargados en el documento.
const link = dom.links; // Obtiene una colección de todos los enlaces <a> en el documento.
const img = dom.images; // Obtiene una colección de todas las imágenes <img> en el documento.

const documento = dom.getElementById("documento"); // Obtiene el elemento con el ID "documento".
const api = dom.getElementById('api'); // Obtiene el elemento con el ID "api".

// Obtención de una lista de elementos con la clase "item"
// const lista = dom.getElementsByClassName('item'); // Obtiene todos los elementos con la clase "item" (devuelve una colección HTML en vivo).
// const lista = dom.querySelector('.item'); // Obtiene solo el primer elemento que tenga la clase "item".
const lista = dom.querySelectorAll('.item'); // Obtiene una lista de todos los elementos con la clase "item" en el documento.

// Iteración sobre la lista de elementos con clase "item"
// for (let index = 0; index < lista.length; index++) {
//     const element = lista[index];
//     console.log(element); // Imprime cada elemento en la consola.
// }

const hermanos = dom.querySelectorAll('ul.list > li.item'); // Obtiene todos los elementos <li> con clase "item" que estén dentro de una <ul> con clase "list".

// Otra forma de iterar sobre la lista (con forEach)
// lista.forEach(element => {
//     console.log(element); // Imprime cada elemento de la lista en la consola.
// });

const padre = dom.querySelector('ul'); // Obtiene el primer elemento <ul> encontrado en el documento.

documento.innerText = "¿Qué es DOM?"; // Modifica el contenido de texto del elemento con ID "documento".

// Varias formas de acceder a elementos del DOM y sus propiedades
// console.log(win); // Imprime el objeto window.
// console.log(dom); // Imprime el objeto document.
// console.log(head); // Imprime el elemento <head>.
// console.log(body); // Imprime el elemento <body>.
// console.log(header); // Imprime el primer <header> encontrado.
// console.log(paragraph); // Imprime el primer <p> encontrado.
// console.log(style); // Imprime la colección de hojas de estilo.
// console.log(script); // Imprime la colección de scripts cargados.
// console.log(link); // Imprime la colección de enlaces en el documento.
// console.log(api); // Imprime el elemento con ID "api".
// console.log(lista); // Imprime la lista de elementos con clase "item".
// console.log(padre.childNodes); // Imprime todos los nodos hijos del elemento <ul>, incluyendo nodos de texto y elementos.
// console.log(padre.childElementCount); // Imprime el número de elementos hijos dentro de <ul> (excluye nodos de texto).
// console.log(padre.children); // Imprime una colección HTML de los elementos hijos dentro de <ul>.
// console.log(padre.firstChild); // Imprime el primer nodo hijo dentro de <ul> (puede ser texto o un elemento).
// console.log(padre.firstElementChild); // Imprime el primer elemento hijo dentro de <ul> (excluye nodos de texto).
// console.log(padre.lastChild); // Imprime el último nodo hijo dentro de <ul> (puede ser texto o un elemento).
// console.log(padre.lastElementChild); // Imprime el último elemento hijo dentro de <ul> (excluye nodos de texto).

// console.log(padre.nextSibling); // Imprime el nodo siguiente al <ul> (puede ser un nodo de texto o un elemento).
// console.log(padre.nextElementSibling); // Imprime el siguiente elemento hermano del <ul> (excluye nodos de texto).
// console.log(padre.previousSibling); // Imprime el nodo anterior al <ul> (puede ser un nodo de texto o un elemento).
// console.log(padre.previousElementSibling); // Imprime el elemento hermano anterior al <ul> (excluye nodos de texto).

console.log(padre.parentNode);  // Muestra el nodo padre del elemento "padre", que puede ser un elemento, documento o nodo raíz.
console.log(padre.parentElement);  // Muestra el elemento padre de "padre", pero si su padre no es un elemento (por ejemplo, es un nodo de documento), devolverá null.






