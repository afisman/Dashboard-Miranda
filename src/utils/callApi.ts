import { useLocalStorage } from '../hooks/useLocalStorage';
import swal from 'sweetalert';


const baseUrl = import.meta.env.VITE_API_BASE_URL;


export const callApi = async (path: string, method = 'GET', data: any = null) => {
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
        if (response.status === 200) {
            return json;
        }
    } catch (error) {
        swal('Cannot connect to the server');
        console.error(error);
    }
}

export const loginApi = async (email: string, password: string) => {
    const url = `${baseUrl}login`;
    try {
        const loginData = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const json = await loginData.json();

        if (loginData.status === 200) {
            return json;
        }
    } catch (error) {
        swal('Cannot connect to the server');

        console.error(error);
    }

}