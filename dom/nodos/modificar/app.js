// Se define un objeto 'card' con información de la tarjeta que se va a crear dinámicamente.
const card =  {
  id: 1,  // ID de la tarjeta
  name: "Titulo de la nueva card",  // Título de la tarjeta
  img: "https://picsum.photos/640/360",  // URL de la imagen de la tarjeta
  paragraph:  // Descripción breve de la tarjeta
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
};

// Se obtiene el contenedor con el id 'cards', donde se agregarán las tarjetas.
const $cards = document.querySelector('#cards');

// Se crean los elementos HTML que compondrán la tarjeta.
const $card = document.createElement('div');  // Crea el contenedor principal de la tarjeta.
const $card_header = document.createElement('div');  // Crea el contenedor para el encabezado de la tarjeta.
const $card_title = document.createElement('h2');  // Crea el título de la tarjeta.
const $card_body = document.createElement('div');  // Crea el contenedor para el cuerpo de la tarjeta.
const $card_img = document.createElement('img');  // Crea la etiqueta <img> para la imagen de la tarjeta.
const $card_paragraph = document.createElement('p');  // Crea el párrafo de descripción.
const $button = document.createElement('a');  // Crea un enlace que funcionará como botón.
const $button_span = document.createElement('span');  // Crea un <span> dentro del botón para el texto.
const $button_icon = document.createElement('i');  // Crea un icono para el botón (con clase de icono).

// Se agregan clases a cada uno de los elementos creados para aplicarles estilos específicos.
$card.classList.add('card');  // Clase principal de la tarjeta.
$card_header.classList.add('card_header');  // Clase para el encabezado de la tarjeta.
$card_title.classList.add('card_title');  // Clase para el título.
$card_body.classList.add('card_body');  // Clase para el cuerpo de la tarjeta.
$card_img.classList.add('card__img');  // Clase para la imagen de la tarjeta.
$card_paragraph.classList.add('card_paragraph');  // Clase para el párrafo descriptivo.
$button.classList.add('button', 'button--outline');  // Clases para el estilo del botón (con borde).
$button_span.classList.add('button__text');  // Clase para el texto dentro del botón.
$button_icon.classList.add('bx', 'bxs-chevron-right', 'button__icon');  // Clases para el icono del botón (flecha hacia la derecha).

// Se asigna el contenido de texto al título y párrafo de la tarjeta.
$card_title.textContent = card.name;  // Asigna el nombre de la tarjeta al título.
$card_paragraph.textContent = card.paragraph;  // Asigna el texto de la descripción al párrafo.
$button_span.textContent = 'Saber Más';  // Asigna el texto del botón.


// Se configuran los atributos de la imagen y el enlace (botón).
$card_img.setAttribute('src', card.img);  // Asigna la URL de la imagen a la etiqueta <img>.
$card_img.setAttribute('alt', card.name);  // Asigna el texto alternativo de la imagen (el nombre de la tarjeta).
$button.setAttribute('href', '#');  // Asigna el enlace del botón (aquí se usa '#' como un enlace vacío).

// Se agragan los elementos en el orden adecuado: 
// El título se agrega al encabezado, el icono y el texto se agregan al botón, 
// y el cuerpo de la tarjeta se compone de la imagen, el párrafo y el botón.
$card_header.appendChild($card_title);  // Se agrega el título dentro del encabezado.
$button.append($button_span, $button_icon);  // Se agrega el texto y el icono dentro del botón.
$card_body.append($card_img, $card_paragraph, $button);  // Se agrega la imagen, el párrafo y el botón dentro del cuerpo de la tarjeta.
$card.append($card_header, $card_body);  // Se agrega el encabezado y el cuerpo a la tarjeta principal.

// Finalmente, se agrega la tarjeta completa al contenedor que se obtuvo al principio.
//$cards.append($card);  // Se agrega la tarjeta al contenedor con id 'cards'.
$cards.insertAdjacentElement('beforeend', $card)