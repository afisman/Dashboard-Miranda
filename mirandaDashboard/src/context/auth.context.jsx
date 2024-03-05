import { createContext, useState } from "react";


const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (userName, password) => {

        return new Promise((resolve, reject) => {

            if (userName === 'alejandro@admin.com' && password === 'alejandro1') {
                setUser({ name: userName })
                localStorage.setItem('isLoggedIn', 'true');
                resolve('success')
            } else {
                reject('Incorrect password or username, check information in form')

            }
        })
    }

    const logout = () => {
        setUser(null)
        localStorage.clear()
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

