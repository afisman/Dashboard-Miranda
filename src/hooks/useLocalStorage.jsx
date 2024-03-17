import { useReducer } from "react";
import useStoreSidebar from "./useStoreSidebar";

export default function useLocalStorage({ initializer, key, reducer }) {
    const [localStorageState, setLocalStorageState] = useStoreSidebar(key, initializer);

    return useReducer((state, action) => {
        const newState = reducer(state, action);
        setLocalStorageState(newState);
        return newState;
    }, { ...localStorageState }
    )
}