import { Dispatch, useContext, ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useUserAuth, UserAuthActions, UserAuthState } from "../hooks/useAuth";
useUserAuth

interface UserAuthProviderProps {
    children?: ReactNode
}

interface UserContextInit {
    state: UserAuthState,
    dispatch: Dispatch<UserAuthActions>
}

interface Initializer {
    user: string,
    email: string,
    token: string
}

const AuthContext = createContext<UserContextInit>({ state: { auth: false, user: '', email: '', token: '' }, dispatch: () => { } });


export function AuthProvider({ children }: UserAuthProviderProps) {

    const initAuth = useLocalStorage({ key: 'auth', action: 'get' });
    const initUser: Initializer = JSON.parse(useLocalStorage({ key: 'user', action: 'get' }) || 'null');
    const { state, dispatch } = useUserAuth({ isAuth: initAuth === '1' ? true : false, user: initUser ? initUser.user : '', email: initUser ? initUser.email : '', token: initUser ? initUser.token : '' });
    useLocalStorage({ key: 'auth', action: 'set', item: state.auth ? '1' : '0' });
    useLocalStorage({ key: 'user', action: 'set', item: JSON.stringify({ user: state.user, email: state.email, token: state.token }) });

    return (
        <AuthContext.Provider value={{ state: state, dispatch: dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}