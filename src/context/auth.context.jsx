import { createContext, useContext } from "react";


const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

    const login = (userName, password) => {

        return new Promise((resolve, reject) => {

            if (userName === 'alejandro@admin.com' && password === 'alejandro1') {
                localStorage.setItem('isLoggedIn', 'true');
                resolve('success')
            } else {
                reject('Incorrect password or username, check information in form')

            }
        })
    }

    const logout = () => {
        localStorage.clear()
    }


    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}