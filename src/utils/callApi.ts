import { useLocalStorage } from '../hooks/useLocalStorage';
import swal from 'sweetalert';
import { GET, POST, baseUrl } from './constants';
import { toast } from 'react-toastify';

export const callApi = async (path: string, method = GET, data: any = null) => {
    const url = `${baseUrl}${path}`;
    const user = useLocalStorage({ key: 'user', action: 'get' });
    const { token } = user ? JSON.parse(user) : null;
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: data != null ? JSON.stringify(data) : null
        })
        const json = await response.json();
        console.log(response)
        if (response.ok) {
            console.log(json)
            return json;
        } else {
            toast(`Error while trying to connect to server ${json.statusCode}, error: ${json.message}`)
        }
    } catch (error) {
        swal('Cannot connect to the server');
        console.error(error);
    }
}

export const loginApi = async (email: string, password: string) => {
    const url = `${baseUrl}/login`;
    try {
        const loginData = await fetch(url, {
            method: POST,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const json = await loginData.json();
        if (loginData.ok) {
            return json;
        } else {
            toast(`Error while trying to connect to server ${json.statusCode}, error: ${json.message}`)
        }
    } catch (error) {
        console.error(error);
    }

}