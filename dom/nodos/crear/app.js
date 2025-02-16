// Seleccionamos un elemento con id "list"
const list  = document.querySelector('#list');

// Creamos elementos <li> para agregar a la lista
let html = document.createElement('li');
let css = document.createElement('li');
let js = document.createElement('li');
let antesGit = document.createElement('li');

// Asignamos texto a cada elemento <li>
antesGit.textContent = 'Antes git';
html.textContent = 'HTML';
css.textContent = 'CSS';
js.textContent = 'JS';

// Agregamos la clase 'item' a cada elemento <li>
html.classList.add('item');
css.classList.add('item');
js.classList.add('item');
antesGit.classList.add('item');

// Agregamos los elementos <li> a la lista en el DOM
list.append(html, css, js);

// Seleccionamos un elemento con la clase "card"
const card  = document.querySelector('.card');

// Creamos un nuevo elemento <h2>
const title = document.createElement('h2');

// Asignamos texto al elemento <h2>
title.textContent = 'Soy un title';

// Insertamos el título como primer hijo dentro de "card"
card.insertBefore(title, card.firstChild);

// Insertamos "antesGit" al principio de la lista
list.insertAdjacentElement("afterbegin", antesGit);


// Seleccionamos el contenedor con id "dias"
let $dias = document.querySelector('#dias');

// Creamos un fragmento de documento para mejorar el rendimiento al agregar elementos
let $fragmen = document.createDocumentFragment();

// Definimos un array de objetos que representan los días de la semana con imágenes y descripciones
const dias = [
    {
      id: 1,
      name: "Lunes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 2,
      name: "Martes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 3,
      name: "Miercoles",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 4,
      name: "Jueves",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 5,
      name: "Viernes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 6,
      name: "Sabado",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 7,
      name: "Domingo",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
];

// Iteramos sobre el array "dias" para crear una tarjeta por cada día
dias.map(({ name, img, paragraph }) => {
    // Creamos los elementos HTML necesarios para la tarjeta
    const $card = document.createElement('div');
    const $card_header = document.createElement('div');
    const $card_h2 = document.createElement('h2');
    const $card_body = document.createElement('div');
    const $card_img = document.createElement('img');
    const $card_paragraph = document.createElement('p');
    const $button = document.createElement('a');
    const $button_span = document.createElement('span');
    const $button_icon = document.createElement('i');

    // Agregamos clases a los elementos para aplicar estilos CSS
    $card.classList.add('card');
    $card_header.classList.add('card_header');
    $card_h2.classList.add('card_title');
    $card_body.classList.add('card_body');
    $card_img.classList.add('card__img');
    $card_paragraph.classList.add('card_paragraph');
    $button.classList.add('button', 'button--outline');
    $button_span.classList.add('button__text');
    $button_icon.classList.add('bx', 'bxs-chevron-right', 'button__icon'); 

    // Asignamos contenido y atributos a los elementos
    $card_h2.textContent = name;  // Nombre del día
    $card_paragraph.textContent = paragraph;  // Descripción del día
    $button_span.textContent = 'Saber Más';  // Texto del botón

    $card_img.setAttribute('src', img);  // Establecemos la imagen del día
    $card_img.setAttribute('alt', name);  // Agregamos un atributo alt con el nombre del día
    $button.setAttribute('href', '#');  // Enlace del botón (vacío por ahora)

    // Estructuramos la tarjeta agregando los elementos hijos en el orden correcto
    $card_body.append($card_img, $card_paragraph);
    $card_header.appendChild($card_h2);
    $button.append($button_span, $button_icon);
    $card_body.appendChild($button);
    $card.append($card_header, $card_body);

    // Agregamos la tarjeta al fragmento de documento en lugar de insertarla directamente en el DOM
    $fragmen.append($card);
});

// Insertamos todas las tarjetas en el DOM de una sola vez usando el fragmento
$dias.appendChild($fragmen);
