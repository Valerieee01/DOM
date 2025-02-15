import { solicitud } from "./user.js";
import { post } from "./post.js";


let root = document.getElementById("root");

const cargarUsers = async () => {
    const Users = await solicitud("https://jsonplaceholder.typicode.com/users")
    const respuesta = await Promise.all(
        Users.map(async (user) => {

            let div = document.createElement('div')
            let name = document.createElement('div')
            let email = document.createElement('div')
            let button = document.createElement('button')
            

            name.innerText = user.name
            email.innerText = user.email
            button.innerText = 'Cuantos Post'

            div.append(name, email, button)cd
            div.classList.add('card')

            root.appendChild(div)

            button.addEventListener('click', ()=> {
                post(user.id).then(data => {
                    console.log(data.legth);
                     
                })
            })

            return user
        })
    );
    return respuesta;
}

cargarUsers().then((a) => {
    console.log('Los usuarios son: ');
    console.log(a);
});
