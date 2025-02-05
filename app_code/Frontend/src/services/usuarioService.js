import axios from 'axios'; //Para hace peticiones hhtp

//Creación de la solicitud http para el backend
export async function LoginUser(credentials) {
    try {
        // Realizar una solicitud POST a la URL de login usando Axios
        const response = await axios.post(`http://localhost:3001/usuario/process-login`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Extraer el token del cuerpo de la respuesta
        //const { token } = response.data;
        const token  = response.data;
        // if (!token || typeof token !== 'string') {
        if (!token) {
            // Si el token no es válido, devuelve null
            return null;
        }
        // Si el token es válido, devuelve el token
        return token;
    } catch (error) {
        // Capturar errores de la solicitud y lanzarlos nuevamente
        throw error;
    }
}

export async function getAllUsuarios() {
    const response = await axios.get('http://localhost:3001/usuario/');
    return response.data;
}


export async function createUser(credentials){
    //envía una petición al usuarioRoutes en método POST con url "/" está comentado como //CREATE USUARIO, le enviamos el credentials
    const res = await axios.post("http://localhost:3001/usuario/", credentials,{
        //indicamos que la cabezera recibira un json -> credentials
        headers: {
            'Content-Type': 'application/json'
        }
        });
    //La petición según está, devolverá otro json del usuario ya creado o, si hay un fallo devolvera un error
    return res;
}

export async function RegisterUser(credentials) {
    const response = await axios.post('http://localhost:3001/usuario/register-new-user', credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
        });

    return response;
}

export async function getUsuarioById(id){
    const res = await axios.get("http://localhost:3001/usuario/"+id);
    
    return res;
}

export async function getDiff(id){
    const res = await axios.get("http://localhost:3001/usuario/diff/?id="+id);

    return res;
}

export async function getFiltro(credentials){
    const res = await axios.post("http://localhost:3001/usuario/filtro", credentials,{
        headers: {
            'Content-Type': 'application/json'
        } 
    });
    return res;
}


export async function deleteById(id){
    const res = await axios.delete("http://localhost:3001/usuario/delete/"+id);
    return res;
}

export async function getNombrebyId(id){
    const res = await axios.get("http://localhost:3001/usuario/nombre/"+id);
    return res;
}

export const updateUsuario = async (id, usuario) => {
    const response = await axios.put(`http://localhost:3001/usuario/${id}`, usuario);
    return response;
};
