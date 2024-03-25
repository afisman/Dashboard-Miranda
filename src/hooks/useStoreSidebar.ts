import { useEffect, useState } from "react";


export default function useStoreSidebar(key, initialValue) {
    const [value, setValue] = useState<number>(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(initialValue)
            );
        } catch (error) {
            currentValue = initialValue;
        }

        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);


    return [value, setValue];
}