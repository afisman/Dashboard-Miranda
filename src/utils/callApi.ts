const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const callApi = async (path: string, token: string, method = 'GET', data = null) => {
    const url = `${baseUrl}/${path}`;

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Auth": token
            },
            body: data != null ? JSON.stringify(data) : null
        })
        const json = await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const loginApi = async (email: string, password: string) => {
    const url = `${baseUrl}/login`;
    try {
        const loginData = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const json = await loginData.json();

        if (loginData.status === 200) {
            return json;
        } else if (loginData.status === 404) {
            throw new Error('User not found')
        } else {
            throw new Error('Bad request')
        }
    } catch (error) {
        console.error(error);
    }

}