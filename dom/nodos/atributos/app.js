const input = document.querySelector('input');
const password = document.querySelector('input[type = "password"]');

console.log(input.type);
console.log(input.value);
input.value = 'Valerie';

console.log(password.value ? 'lleno':'vacio');
password.value = '123466';

password.setAttribute('type', 'text')


