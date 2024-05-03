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
