export const post  = async () => {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return await respuesta.json();
}