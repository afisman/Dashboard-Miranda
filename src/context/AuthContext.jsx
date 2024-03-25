// import { useContext, createContext } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";

// const AuthContext = createContext();

// const initializer = {
//     isAuthenticated: false,
//     user: null
// }

// const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'login':
//             return {
//                 isAuthenticated: true,
//                 user: action.payload
//             }
//         case 'logout':
//             return {
//                 isAuthenticated: false,
//                 user: null
//             }
//         case 'edit':
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         default:
//             return state
//     }
// }

// export function useAuth() {
//     return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//     const [state, dispatch] = useLocalStorage({
//         key: 'USER_AUTH',
//         reducer: authReducer,
//         initializer
//     })
//     const value = { state, dispatch }

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
