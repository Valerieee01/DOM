
export const solicitud  = async (endpoint) => {
    const respuesta = await fetch(`${endpoint}`);
    return await respuesta.json();
}

